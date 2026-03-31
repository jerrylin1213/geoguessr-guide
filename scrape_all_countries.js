const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

const SLUGS = [
  'albania','andorra','argentina','australia','austria','bangladesh','belgium',
  'bermuda','bhutan','bolivia','botswana','brazil','brunei','bulgaria','cambodia',
  'cameroon','canada','chile','china','christmas-island','colombia','costa-rica',
  'croatia','curacao','czechia','denmark','dominican-republic','ecuador','egypt',
  'el-salvador','estonia','ethiopia','faroe-islands','fiji','finland','france',
  'germany','ghana','greece','greenland','guam','guatemala','guyana','honduras',
  'hungary','iceland','india','indonesia','ireland','israel','italy','jamaica',
  'japan','jordan','kazakhstan','kenya','kyrgyzstan','laos','latvia','lebanon',
  'liechtenstein','lithuania','luxembourg','madagascar','malaysia','malta','mexico',
  'moldova','mongolia','montenegro','morocco','mozambique','namibia','nepal',
  'netherlands','new-zealand','nigeria','north-macedonia','northern-mariana-islands',
  'norway','oman','pakistan','palestine','panama','peru','philippines','poland',
  'portugal','puerto-rico','qatar','reunion','romania','russia','rwanda',
  'saudi-arabia','senegal','serbia','singapore','slovakia','slovenia','south-africa',
  'south-korea','spain','sri-lanka','sweden','switzerland','thailand','tunisia',
  'turkey','uae','uganda','uk','ukraine','united-states','uruguay','uzbekistan',
  'vanuatu','venezuela','vietnam'
];

// Map URL path segments to category keys
function categorize(url) {
  if (url.includes('/plates/')) return 'plates';
  if (url.includes('/poles/')) return 'poles';
  if (url.includes('/road-signs/')) return 'signs';
  if (url.includes('/car-metas/')) return 'carMetas';
  if (url.includes('/bollards/')) return 'bollards';
  if (url.includes('/scenery/')) return 'scenery';
  if (url.includes('/architecture/')) return 'architecture';
  if (url.includes('/road-markings/')) return 'roadMarkings';
  if (url.includes('/miscellaneous/')) return 'misc';
  return null;
}

function slugToKey(slug) {
  // Convert slug to camelCase-ish key, keeping it readable
  return slug; // keep as-is since the existing file uses lowercase slug keys like 'japan', 'india'
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

(async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  // Block unnecessary resources to speed up loading
  await page.setRequestInterception(true);
  page.on('request', req => {
    const type = req.resourceType();
    if (['font', 'stylesheet', 'media'].includes(type)) {
      req.abort();
    } else {
      req.continue();
    }
  });

  const results = {};
  let successCount = 0;
  let skipCount = 0;

  for (let i = 0; i < SLUGS.length; i++) {
    const slug = SLUGS[i];
    const url = `https://geodummy.com/${slug}`;
    console.log(`[${i + 1}/${SLUGS.length}] Fetching ${url} ...`);

    try {
      const response = await page.goto(url, { waitUntil: 'networkidle2', timeout: 20000 });

      if (!response || response.status() === 404) {
        console.log(`  SKIP (404): ${slug}`);
        skipCount++;
        await sleep(2000);
        continue;
      }

      // Extract all cloudfront image URLs from the page
      const imageUrls = await page.evaluate(() => {
        const urls = new Set();
        // Check img src
        document.querySelectorAll('img').forEach(img => {
          if (img.src && img.src.includes('d33wubrfki0l68.cloudfront.net')) {
            urls.add(img.src);
          }
          // Also check data-src for lazy-loaded images
          if (img.dataset.src && img.dataset.src.includes('d33wubrfki0l68.cloudfront.net')) {
            urls.add(img.dataset.src);
          }
        });
        // Check srcset
        document.querySelectorAll('img[srcset], source[srcset]').forEach(el => {
          const srcset = el.getAttribute('srcset') || '';
          srcset.split(',').forEach(entry => {
            const u = entry.trim().split(/\s+/)[0];
            if (u && u.includes('d33wubrfki0l68.cloudfront.net')) {
              urls.add(u);
            }
          });
        });
        // Check background images in style attributes
        document.querySelectorAll('[style]').forEach(el => {
          const match = el.style.backgroundImage.match(/url\(["']?(https:\/\/d33wubrfki0l68\.cloudfront\.net[^"')]+)["']?\)/);
          if (match) urls.add(match[1]);
        });
        // Also scan all href/src attributes broadly
        document.querySelectorAll('a[href]').forEach(a => {
          if (a.href && a.href.includes('d33wubrfki0l68.cloudfront.net')) {
            urls.add(a.href);
          }
        });
        return [...urls];
      });

      // Categorize the URLs
      const entry = {
        plates: [],
        poles: [],
        signs: [],
        carMetas: [],
        bollards: [],
        scenery: [],
        architecture: [],
        roadMarkings: [],
        misc: []
      };

      for (const imgUrl of imageUrls) {
        const cat = categorize(imgUrl);
        if (cat && entry[cat]) {
          entry[cat].push(imgUrl);
        }
        // If no category matched but it's a cloudfront URL from this country, put in misc
        else if (!cat && imgUrl.includes('d33wubrfki0l68.cloudfront.net')) {
          entry.misc.push(imgUrl);
        }
      }

      const totalImages = Object.values(entry).reduce((sum, arr) => sum + arr.length, 0);
      console.log(`  OK: ${slug} — ${totalImages} images`);
      results[slug] = entry;
      successCount++;

    } catch (err) {
      console.log(`  ERROR: ${slug} — ${err.message}`);
      skipCount++;
    }

    // Wait 2-3 seconds between pages
    await sleep(2000 + Math.random() * 1000);
  }

  await browser.close();

  // Build the output JS file
  const outputPath = path.join(__dirname, 'country_images.js');

  let output = '// ===== Country-specific images from geodummy.com =====\n';
  output += '// Auto-generated by scrape_all_countries.js\n';
  output += '// Categories: plates, poles, signs, carMetas, bollards, scenery, architecture, roadMarkings, misc\n\n';
  output += 'const COUNTRY_IMAGES = {\n';

  const keys = Object.keys(results);
  for (let i = 0; i < keys.length; i++) {
    const country = keys[i];
    const data = results[country];
    output += `  '${country}': {\n`;

    const categories = ['plates', 'poles', 'signs', 'carMetas', 'bollards', 'scenery', 'architecture', 'roadMarkings', 'misc'];
    for (const cat of categories) {
      const arr = data[cat] || [];
      if (arr.length === 0) {
        output += `    ${cat}: [],\n`;
      } else {
        output += `    ${cat}: [\n`;
        for (let j = 0; j < arr.length; j++) {
          output += `      '${arr[j]}'${j < arr.length - 1 ? ',' : ''}\n`;
        }
        output += `    ],\n`;
      }
    }

    output += `  }${i < keys.length - 1 ? ',' : ''}\n`;
  }

  output += '};\n';

  fs.writeFileSync(outputPath, output, 'utf-8');
  console.log(`\nDone! ${successCount} countries saved, ${skipCount} skipped.`);
  console.log(`Output: ${outputPath}`);
})();
