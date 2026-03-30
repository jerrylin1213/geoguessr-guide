const puppeteer = require('puppeteer');
const fs = require('fs');

// Countries already in yuque_reference.md (from grep results):
// Cambodia, Kenya, Ghana, Guatemala, Nigeria, Sri Lanka, Mongolia, South Korea,
// Japan, India, Indonesia, Thailand, France, Germany, Italy, Greece,
// United Kingdom, Australia, New Zealand, Brazil, Argentina, Mexico, South Africa, Uganda, Turkey

const countries = [
  // Africa
  { slug: 'botswana', name: 'Botswana' },
  { slug: 'egypt', name: 'Egypt' },
  { slug: 'eswatini', name: 'Eswatini' },
  // ghana - done
  { slug: 'lesotho', name: 'Lesotho' },
  { slug: 'madagascar', name: 'Madagascar' },
  { slug: 'mali', name: 'Mali' },
  { slug: 'namibia', name: 'Namibia' },
  { slug: 'reunion', name: 'Réunion' },
  { slug: 'rwanda', name: 'Rwanda' },
  { slug: 'senegal', name: 'Senegal' },
  // south-africa - done
  { slug: 'tanzania', name: 'Tanzania' },
  { slug: 'tunisia', name: 'Tunisia' },
  // uganda - done

  // Asia (remaining)
  // bangladesh - done earlier inline
  { slug: 'bhutan', name: 'Bhutan' },
  { slug: 'cyprus', name: 'Cyprus' },
  // india - done
  // indonesia - done
  { slug: 'israel-west-bank', name: 'Israel & West Bank' },
  // japan - done
  { slug: 'jordan', name: 'Jordan' },
  { slug: 'kazakhstan', name: 'Kazakhstan' },
  { slug: 'krygyzstan', name: 'Kyrgyzstan' },
  { slug: 'laos', name: 'Laos' },
  { slug: 'lebanon', name: 'Lebanon' },
  { slug: 'malaysia', name: 'Malaysia' },
  // mongolia - done
  { slug: 'nepal', name: 'Nepal' },
  { slug: 'oman', name: 'Oman' },
  { slug: 'pakistan', name: 'Pakistan' },
  { slug: 'philippines', name: 'Philippines' },
  { slug: 'qatar', name: 'Qatar' },
  { slug: 'singapore', name: 'Singapore' },
  // south-korea - done
  // sri-lanka - done
  // thailand - done
  // turkey - done
  { slug: 'united-arab-emirates', name: 'United Arab Emirates' },
  { slug: 'vietnam', name: 'Vietnam' },

  // Europe (remaining)
  // albania - done earlier
  { slug: 'andorra', name: 'Andorra' },
  { slug: 'austria', name: 'Austria' },
  { slug: 'azores', name: 'Azores' },
  { slug: 'belarus', name: 'Belarus' },
  { slug: 'belgium', name: 'Belgium' },
  { slug: 'bulgaria', name: 'Bulgaria' },
  { slug: 'croatia', name: 'Croatia' },
  { slug: 'czechia', name: 'Czechia' },
  { slug: 'denmark', name: 'Denmark' },
  { slug: 'estonia', name: 'Estonia' },
  { slug: 'faroe-islands', name: 'Faroe Islands' },
  { slug: 'finland', name: 'Finland' },
  // france - done
  // germany - done
  { slug: 'gibraltar', name: 'Gibraltar' },
  // greece - done
  { slug: 'hungary', name: 'Hungary' },
  { slug: 'iceland', name: 'Iceland' },
  { slug: 'ireland', name: 'Ireland' },
  { slug: 'isle-of-man', name: 'Isle of Man' },
  // italy - done
  { slug: 'jersey', name: 'Jersey' },
  { slug: 'latvia', name: 'Latvia' },
  { slug: 'liechtenstein', name: 'Liechtenstein' },
  { slug: 'lithuania', name: 'Lithuania' },
  { slug: 'luxembourg', name: 'Luxembourg' },
  { slug: 'madeira', name: 'Madeira' },
  { slug: 'malta', name: 'Malta' },
  { slug: 'monaco', name: 'Monaco' },
  { slug: 'montenegro', name: 'Montenegro' },
  { slug: 'netherlands', name: 'Netherlands' },
  { slug: 'north-macedonia', name: 'North Macedonia' },
  { slug: 'norway', name: 'Norway' },
  { slug: 'poland', name: 'Poland' },
  { slug: 'portugal', name: 'Portugal' },
  { slug: 'romania', name: 'Romania' },
  { slug: 'russia', name: 'Russia' },
  { slug: 'san-marino', name: 'San Marino' },
  { slug: 'serbia', name: 'Serbia' },
  { slug: 'slovakia', name: 'Slovakia' },
  { slug: 'slovenia', name: 'Slovenia' },
  { slug: 'spain', name: 'Spain' },
  { slug: 'svalbard', name: 'Svalbard' },
  { slug: 'sweden', name: 'Sweden' },
  { slug: 'switzerland', name: 'Switzerland' },
  { slug: 'ukraine', name: 'Ukraine' },
  // united-kingdom - done

  // Americas (remaining)
  { slug: 'alaska', name: 'Alaska' },
  { slug: 'bermuda', name: 'Bermuda' },
  { slug: 'canada', name: 'Canada' },
  { slug: 'costa_rica', name: 'Costa Rica' },
  { slug: 'dominican', name: 'Dominican Republic' },
  { slug: 'greenland', name: 'Greenland' },
  // guatemala - done
  { slug: 'hawaii', name: 'Hawaii' },
  { slug: 'martinique', name: 'Martinique' },
  // mexico - done
  { slug: 'panama', name: 'Panama' },
  { slug: 'puerto-rico', name: 'Puerto Rico' },
  { slug: 'saint-pierre-and-miquelon', name: 'Saint Pierre and Miquelon' },
  { slug: 'us-minor-outlying-islands', name: 'US Minor Outlying Islands' },
  { slug: 'us-virgin-islands', name: 'US Virgin Islands' },
  { slug: 'united-states', name: 'United States' },

  // Oceania
  { slug: 'american-samoa', name: 'American Samoa' },
  // australia - done
  { slug: 'christmas-island', name: 'Christmas Island' },
  { slug: 'cocos-islands', name: 'Cocos Islands' },
  { slug: 'guam', name: 'Guam' },
  // new-zealand - done
  { slug: 'northern-mariana-islands', name: 'Northern Mariana Islands' },
  { slug: 'pitcairn-islands', name: 'Pitcairn Islands' },
  { slug: 'vanuatu', name: 'Vanuatu' },

  // South America (remaining)
  // argentina - done
  { slug: 'bolivia', name: 'Bolivia' },
  // brazil - done
  { slug: 'chile', name: 'Chile' },
  { slug: 'colombia', name: 'Colombia' },
  { slug: 'curacao', name: 'Curaçao' },
  { slug: 'ecuador', name: 'Ecuador' },
  { slug: 'falkland-islands', name: 'Falkland Islands' },
  { slug: 'peru', name: 'Peru' },
  { slug: 'south-georgia-sandwich-islands', name: 'South Georgia & Sandwich Islands' },
  { slug: 'uruguay', name: 'Uruguay' },
];

const OUTPUT_FILE = '/Users/jerrylin/projects/life/geoguessr/yuque_reference.md';

(async () => {
  console.log(`Starting scrape of ${countries.length} countries...`);
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  // Set a reasonable viewport and user agent
  await page.setViewport({ width: 1280, height: 800 });
  await page.setUserAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36');

  let successCount = 0;
  let skipCount = 0;
  let errorCount = 0;

  for (let i = 0; i < countries.length; i++) {
    const { slug, name } = countries[i];
    const url = `https://www.yuque.com/chaofun/tuxun/${slug}`;
    console.log(`[${i + 1}/${countries.length}] Fetching: ${name} (${slug})...`);

    try {
      await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 });
      // Wait for content to render
      await new Promise(r => setTimeout(r, 3000));

      const content = await page.evaluate(() => {
        const el = document.querySelector('article') || document.querySelector('.lake-content') || document.body;
        return el?.innerText || '';
      });

      if (!content || content.trim().length < 50) {
        console.log(`  SKIP: ${name} - empty or too short content (${content ? content.trim().length : 0} chars)`);
        skipCount++;
        continue;
      }

      const entry = `\n\n## ${name}\n\n${content.trim()}`;
      fs.appendFileSync(OUTPUT_FILE, entry);
      console.log(`  OK: ${name} - ${content.trim().length} chars`);
      successCount++;
    } catch (err) {
      console.log(`  ERROR: ${name} - ${err.message}`);
      errorCount++;
    }
  }

  await browser.close();
  console.log(`\nDone! Success: ${successCount}, Skipped: ${skipCount}, Errors: ${errorCount}`);
})();
