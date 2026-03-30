// ===== GeoGuessr Reference Guide - App Logic =====

(function () {
  'use strict';

  // ===== DOM Elements =====
  const sidebar = document.getElementById('sidebar');
  const sidebarOverlay = document.getElementById('sidebarOverlay');
  const sidebarNav = document.getElementById('sidebarNav');
  const menuToggle = document.getElementById('menuToggle');
  const searchInput = document.getElementById('searchInput');
  const content = document.getElementById('content');
  const breadcrumb = document.getElementById('breadcrumb');
  const backToTop = document.getElementById('backToTop');

  // ===== State =====
  let currentPage = 'home';
  let currentCountry = null;

  // ===== Car Meta Images (from geodummy.com CDN) =====
  const CAR_IMAGES = {
    // Generic car types
    '_white': 'https://d33wubrfki0l68.cloudfront.net/d254a631f11a743895dc018f0d1d7b5b9efe30cc/7a11c/static/img/camera-cars/white-car.jpg',
    '_black': 'https://d33wubrfki0l68.cloudfront.net/8c805fef7832ea1e694d845a6b0682904b355358/0b6e2/static/img/camera-cars/black-car.jpg',
    '_russia': 'https://d33wubrfki0l68.cloudfront.net/784650dd9d42ac4db5a0ad76b2608f7caefbb877/3d8ae/static/img/camera-cars/black-car-with-antenna.jpg',
    '_red': 'https://d33wubrfki0l68.cloudfront.net/44693764265748b141750c33c2dc00223e3e61d4/f3d1e/static/img/camera-cars/red-car.jpg',
    '_pickup': 'https://d33wubrfki0l68.cloudfront.net/430c820696d05cb70e18c2d41d4f45c883f23a87/c1ef6/static/img/camera-cars/pickup.jpg',
    // Country-specific
    'kenya': 'https://d33wubrfki0l68.cloudfront.net/41d30c6633ce9982641124c56900844195652618/6e05b/static/img/camera-cars/kenya-car.jpg',
    'guatemala': 'https://d33wubrfki0l68.cloudfront.net/22d6175a3bc15ad62c0f71a47c4530cdc5ffd945/df962/static/img/camera-cars/guatemala-mirrors.jpg',
    'ghana': 'https://d33wubrfki0l68.cloudfront.net/a698d354f91fc15ac5b3e334cedd03afc972b57f/b43c3/static/img/camera-cars/ghana-tape.jpg',
    'mongolia': 'https://d33wubrfki0l68.cloudfront.net/15929149ca675ffec2f504b1a4dac41c5fe0e061/c90b1/static/img/camera-cars/mongolia-1.jpg',
    'nigeria': 'https://d33wubrfki0l68.cloudfront.net/6b5d25029a877b4663d9ad32782cdd6aed7b4f4d/5eb0d/static/img/camera-cars/nigeria-bars.jpg',
    'sri-lanka': 'https://d33wubrfki0l68.cloudfront.net/4e376149101628095bfc85ec3e4d476e145d645e/30774/static/img/camera-cars/sri-lanka-car.jpg',
    'guam': 'https://d33wubrfki0l68.cloudfront.net/3dfff1e6778f6ab39c3a2cb0377ca67121c729fa/347e9/static/img/places/guam/car-metas/antenna.jpg',
    'curacao': 'https://d33wubrfki0l68.cloudfront.net/3e921f1a713e73d41d96979f76c855c026ef21ae/5a401/static/img/places/curacao/car-metas/car.jpg',
    'japan': 'https://d33wubrfki0l68.cloudfront.net/d831078ad6f1147706ad598b30954a67ff92a87d/7b4e2/static/img/camera-cars/japan-car.jpg',
    'switzerland': 'https://d33wubrfki0l68.cloudfront.net/1f96c4b9410d47ba2f6efb66e609c1ac83275426/0457c/static/img/camera-cars/switzerland-blur.jpg',
    'russia': 'https://d33wubrfki0l68.cloudfront.net/784650dd9d42ac4db5a0ad76b2608f7caefbb877/3d8ae/static/img/camera-cars/black-car-with-antenna.jpg',
    'ukraine': 'https://d33wubrfki0l68.cloudfront.net/2388f50c2e25b7176833d52a01db8933f1a275ff/24f22/static/img/camera-cars/red-car-with-antenna.jpg',
    'argentina': 'https://d33wubrfki0l68.cloudfront.net/8c805fef7832ea1e694d845a6b0682904b355358/0b6e2/static/img/camera-cars/black-car.jpg',
    'uruguay': 'https://d33wubrfki0l68.cloudfront.net/8c805fef7832ea1e694d845a6b0682904b355358/0b6e2/static/img/camera-cars/black-car.jpg',
    // Countries using generic car type images
    'israel': 'https://d33wubrfki0l68.cloudfront.net/784650dd9d42ac4db5a0ad76b2608f7caefbb877/3d8ae/static/img/camera-cars/black-car-with-antenna.jpg',
    'jordan': 'https://d33wubrfki0l68.cloudfront.net/8c805fef7832ea1e694d845a6b0682904b355358/0b6e2/static/img/camera-cars/black-car.jpg',
    'peru': 'https://d33wubrfki0l68.cloudfront.net/8c805fef7832ea1e694d845a6b0682904b355358/0b6e2/static/img/camera-cars/black-car.jpg',
    'iceland': 'https://d33wubrfki0l68.cloudfront.net/430c820696d05cb70e18c2d41d4f45c883f23a87/c1ef6/static/img/camera-cars/pickup.jpg',
    'qatar': 'https://d33wubrfki0l68.cloudfront.net/430c820696d05cb70e18c2d41d4f45c883f23a87/c1ef6/static/img/camera-cars/pickup.jpg',
    'oman': 'https://d33wubrfki0l68.cloudfront.net/430c820696d05cb70e18c2d41d4f45c883f23a87/c1ef6/static/img/camera-cars/pickup.jpg',
    'namibia': 'https://d33wubrfki0l68.cloudfront.net/430c820696d05cb70e18c2d41d4f45c883f23a87/c1ef6/static/img/camera-cars/pickup.jpg',
    'rwanda': 'https://d33wubrfki0l68.cloudfront.net/430c820696d05cb70e18c2d41d4f45c883f23a87/c1ef6/static/img/camera-cars/pickup.jpg',
    'bermuda': 'https://d33wubrfki0l68.cloudfront.net/430c820696d05cb70e18c2d41d4f45c883f23a87/c1ef6/static/img/camera-cars/pickup.jpg',
    'christmas-island': 'https://d33wubrfki0l68.cloudfront.net/430c820696d05cb70e18c2d41d4f45c883f23a87/c1ef6/static/img/camera-cars/pickup.jpg',
    'south-africa': 'https://d33wubrfki0l68.cloudfront.net/d254a631f11a743895dc018f0d1d7b5b9efe30cc/7a11c/static/img/camera-cars/white-car.jpg',
    'brazil': 'https://d33wubrfki0l68.cloudfront.net/d254a631f11a743895dc018f0d1d7b5b9efe30cc/7a11c/static/img/camera-cars/white-car.jpg',
    'mexico': 'https://d33wubrfki0l68.cloudfront.net/d254a631f11a743895dc018f0d1d7b5b9efe30cc/7a11c/static/img/camera-cars/white-car.jpg',
    'usa': 'https://d33wubrfki0l68.cloudfront.net/d254a631f11a743895dc018f0d1d7b5b9efe30cc/7a11c/static/img/camera-cars/white-car.jpg',
    'france': 'https://d33wubrfki0l68.cloudfront.net/d254a631f11a743895dc018f0d1d7b5b9efe30cc/7a11c/static/img/camera-cars/white-car.jpg',
    'bangladesh': 'https://d33wubrfki0l68.cloudfront.net/53ef2669f637d8362317f5145dd7b11c28bd4df2/94be9/static/img/places/bangladesh/car-metas/rack-yellow.png',
    'cambodia': 'https://d33wubrfki0l68.cloudfront.net/be13a2e2d73bb39d061d67f5f61b5acd7d79c31e/fc476/static/img/places/cambodia/car-metas/car.jpg',
    'colombia': 'https://d33wubrfki0l68.cloudfront.net/d254a631f11a743895dc018f0d1d7b5b9efe30cc/7a11c/static/img/camera-cars/white-car.jpg',
  };

  // ===== Bollard Images (from geomastr.com) =====
  const BOLLARD_IMAGES = {
    'albania': 'albania', 'austria': 'austria', 'belgium': 'belgium', 'bulgaria': 'bulgaria',
    'croatia': 'croatia', 'denmark': 'denmark', 'estonia': 'estonia',
    'finland': 'finland', 'france': 'france', 'germany': 'germany', 'greece': 'greece',
    'hungary': 'hungary', 'iceland': 'iceland', 'ireland': 'ireland', 'italy': 'italy',
    'latvia': 'latvia', 'lithuania': 'lithuania', 'luxembourg': 'luxembourg',
    'netherlands': 'netherlands', 'north-macedonia': 'north-macedonia', 'norway': 'norway',
    'poland': 'poland', 'portugal': 'portugal', 'romania': 'romania', 'russia': 'russia',
    'serbia': 'serbia', 'slovakia': 'slovakia', 'slovenia': 'slovenia', 'spain': 'spain',
    'sweden': 'sweden', 'switzerland': 'switzerland', 'turkey': 'turkey', 'uk': 'united-kingdom',
    'ukraine': 'ukraine', 'cambodia': 'cambodia', 'indonesia': 'indonesia', 'japan': 'japan',
    'malaysia': 'malaysia', 'mongolia': 'mongolia',
    'philippines': 'philippines', 'thailand': 'thailand',
    'india': 'india', 'australia': 'australia',
    'canada': 'canada', 'chile': 'chile', 'ecuador': 'ecuador',
    'andorra': 'andorra',
    'peru': 'peru', 'senegal': 'senegal', 'kenya': 'kenya',
  };

  // ===== Region definitions =====
  const regions = [
    { id: 'europe', name: '歐洲', icon: '🇪🇺' },
    { id: 'asia', name: '亞洲', icon: '🌏' },
    { id: 'north-america', name: '北美洲', icon: '🌎' },
    { id: 'south-america', name: '南美洲', icon: '🌎' },
    { id: 'africa', name: '非洲', icon: '🌍' },
    { id: 'oceania', name: '大洋洲', icon: '🌊' },
    { id: 'caribbean', name: '加勒比海', icon: '🏝️' },
    { id: 'central-america', name: '中美洲', icon: '🌎' },
    { id: 'middle-east', name: '中東', icon: '🕌' },
  ];

  // ===== License Plate Images (geomastr.com - capitalized names) =====
  const PLATE_IMAGES = {
    'albania': 'Albania', 'andorra': 'Andorra', 'argentina': 'Argentina', 'australia': 'Australia',
    'austria': 'Austria', 'belgium': 'Belgium', 'bolivia': 'Bolivia', 'bosnia': 'Bosniaandherzegovina',
    'botswana': 'Botswana', 'brazil': 'Brazil', 'brunei': 'Brunei', 'bulgaria': 'Bulgaria',
    'cambodia': 'Cambodia', 'cameroon': 'Cameroon', 'canada': 'Canada', 'chile': 'Chile',
    'china': 'China', 'colombia': 'Colombia', 'costa-rica': 'Costarica', 'croatia': 'Croatia',
    'curacao': 'Curacao', 'czechia': 'Czechrepublic', 'denmark': 'Denmark', 'dominican-republic': 'Dominicanrepublic',
    'ecuador': 'Ecuador', 'egypt': 'Egypt', 'estonia': 'Estonia', 'ethiopia': 'Ethiopia',
    'finland': 'Finland', 'france': 'France', 'germany': 'Germany', 'ghana': 'Ghana',
    'greece': 'Greece', 'guatemala': 'Guatemala', 'hong-kong': 'Hongkong', 'hungary': 'Hungary',
    'iceland': 'Iceland', 'india': 'India', 'indonesia': 'Indonesia', 'ireland': 'Ireland',
    'israel': 'Israel', 'italy': 'Italy', 'japan': 'Japan', 'jordan': 'Jordan',
    'kenya': 'Kenya', 'south-korea': 'Southkorea', 'latvia': 'Latvia', 'lebanon': 'Lebanon',
    'lithuania': 'Lithuania', 'luxembourg': 'Luxembourg', 'malaysia': 'Malaysia', 'malta': 'Malta',
    'mexico': 'Mexico', 'moldova': 'Moldova', 'mongolia': 'Mongolia', 'montenegro': 'Montenegro',
    'morocco': 'Morocco', 'namibia': 'Namibia', 'nepal': 'Nepal', 'netherlands': 'Netherlands',
    'new-zealand': 'Newzealand', 'nigeria': 'Nigeria', 'north-macedonia': 'Northmacedonia',
    'norway': 'Norway', 'pakistan': 'Pakistan', 'panama': 'Panama', 'peru': 'Peru',
    'philippines': 'Philippines', 'poland': 'Poland', 'portugal': 'Portugal',
    'qatar': 'Qatar', 'romania': 'Romania', 'russia': 'Russia', 'saudi-arabia': 'Saudiarabia',
    'senegal': 'Senegal', 'serbia': 'Serbia', 'singapore': 'Singapore', 'slovakia': 'Slovakia',
    'slovenia': 'Slovenia', 'south-africa': 'Southafrica', 'spain': 'Spain', 'sri-lanka': 'Srilanka',
    'sweden': 'Sweden', 'switzerland': 'Switzerland', 'taiwan': 'Taiwan', 'thailand': 'Thailand',
    'tunisia': 'Tunisia', 'turkey': 'Turkey', 'uae': 'Uae', 'uganda': 'Uganda',
    'uk': 'Unitedkingdom', 'ukraine': 'Ukraine', 'usa': 'Unitedstates', 'uruguay': 'Uruguay',
    'vietnam': 'Vietnam',
  };

  // ===== Road Sign SVG Images (geomastr.com) =====
  const SIGN_TYPES = ['yields', 'stop', 'pedestrians', 'chevrons'];

  // ===== Build sidebar navigation =====
  function buildSidebar() {
    const metaLink = sidebarNav.querySelector('.nav-meta-link');

    // Group countries by region
    const regionGroups = {};
    regions.forEach(r => { regionGroups[r.id] = []; });

    Object.keys(COUNTRIES).forEach(id => {
      const c = COUNTRIES[id];
      if (regionGroups[c.region]) {
        regionGroups[c.region].push({ id, ...c });
      }
    });

    regions.forEach(region => {
      const countries = regionGroups[region.id] || [];
      if (countries.length === 0) return;

      countries.sort((a, b) => a.name.localeCompare(b.name));

      const div = document.createElement('div');
      div.className = 'nav-region';
      div.innerHTML = `
        <div class="nav-region-header">
          <span>${region.icon} ${region.name} <span class="count">${countries.length}</span></span>
          <span class="arrow">▶</span>
        </div>
        <div class="nav-country-list">
          ${countries.map(c => `
            <a class="nav-country" data-country="${c.id}">
              <span class="flag">${c.flag}</span>
              ${c.name}
            </a>
          `).join('')}
        </div>
      `;

      div.querySelector('.nav-region-header').addEventListener('click', () => {
        div.classList.toggle('open');
      });

      sidebarNav.appendChild(div);
    });

    // Event listeners
    metaLink.addEventListener('click', () => {
      navigateTo('meta');
      closeSidebar();
    });

    document.querySelectorAll('.nav-country').forEach(el => {
      el.addEventListener('click', () => {
        const id = el.dataset.country;
        navigateTo('country', id);
        closeSidebar();
      });
    });
  }

  // ===== Navigation with hash routing =====
  function navigateTo(page, countryId) {
    currentPage = page;
    currentCountry = countryId || null;

    // Update URL hash for routing persistence
    if (page === 'home') {
      history.pushState(null, '', '#');
    } else if (page === 'meta') {
      history.pushState(null, '', '#meta');
    } else if (page === 'country' && countryId) {
      history.pushState(null, '', '#country/' + countryId);
    } else if (page === 'region' && countryId) {
      history.pushState(null, '', '#region/' + countryId);
    }

    // Update active state in sidebar
    document.querySelectorAll('.nav-country').forEach(el => {
      el.classList.toggle('active', el.dataset.country === countryId);
    });

    // Auto-open region
    if (countryId && COUNTRIES[countryId]) {
      const region = COUNTRIES[countryId].region;
      document.querySelectorAll('.nav-region').forEach(el => {
        const header = el.querySelector('.nav-region-header');
        if (header && header.textContent.toLowerCase().includes(getRegionName(region).toLowerCase())) {
          el.classList.add('open');
        }
      });
    }

    renderPage();
    window.scrollTo({ top: 0 });
  }

  // Handle hash routing on page load and back/forward
  function handleRoute() {
    const hash = window.location.hash.slice(1); // remove #
    if (!hash || hash === '') {
      currentPage = 'home';
      currentCountry = null;
    } else if (hash === 'meta') {
      currentPage = 'meta';
      currentCountry = null;
    } else if (hash.startsWith('country/')) {
      currentPage = 'country';
      currentCountry = hash.split('/')[1];
    } else if (hash.startsWith('region/')) {
      currentPage = 'region';
      currentCountry = hash.split('/')[1];
    } else {
      currentPage = 'home';
      currentCountry = null;
    }
    renderPage();
  }

  window.addEventListener('popstate', handleRoute);

  function getRegionName(regionId) {
    const r = regions.find(r => r.id === regionId);
    return r ? r.name : regionId;
  }

  // ===== Render Pages =====
  function renderPage() {
    switch (currentPage) {
      case 'home':
        renderHome();
        break;
      case 'meta':
        renderMeta();
        break;
      case 'country':
        renderCountry(currentCountry);
        break;
      case 'region':
        renderRegion(currentCountry);
        break;
      default:
        renderHome();
    }
  }

  function renderHome() {
    breadcrumb.innerHTML = '<span>首頁</span>';
    const totalCountries = Object.keys(COUNTRIES).length;

    const regionCounts = {};
    Object.values(COUNTRIES).forEach(c => {
      regionCounts[c.region] = (regionCounts[c.region] || 0) + 1;
    });

    content.innerHTML = `
      <div class="hero animate-in">
        <h2>GeoGuessr 國家辨識指南</h2>
        <p>完整的 GeoGuessr 國家辨識指南：相機 Meta、車輛線索、道路特徵、獨特辨識方法</p>
        <div class="stats-bar">
          <div class="stat-item">
            <div class="stat-number">${totalCountries}</div>
            <div class="stat-label">國家</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">${regions.filter(r => regionCounts[r.id]).length}</div>
            <div class="stat-label">區域</div>
          </div>
        </div>
        <div class="region-grid">
          ${regions.filter(r => regionCounts[r.id]).map(r => `
            <div class="region-card" data-region="${r.id}">
              <div class="region-icon">${r.icon}</div>
              <h3>${r.name}</h3>
              <div class="region-count">${regionCounts[r.id]} 國家</div>
            </div>
          `).join('')}
        </div>
      </div>
    `;

    document.querySelectorAll('.region-card').forEach(el => {
      el.addEventListener('click', () => {
        navigateTo('region', el.dataset.region);
      });
    });
  }

  function renderRegion(regionId) {
    const region = regions.find(r => r.id === regionId);
    if (!region) return renderHome();

    breadcrumb.innerHTML = `<a onclick="navigateTo('home')" style="cursor:pointer;color:var(--text-muted)">首頁</a> / <span>${region.name}</span>`;

    const countries = Object.entries(COUNTRIES)
      .filter(([_, c]) => c.region === regionId)
      .sort((a, b) => a[1].name.localeCompare(b[1].name));

    content.innerHTML = `
      <div class="region-section animate-in">
        <div class="region-section-header">
          <h3>${region.icon} ${region.name}</h3>
          <span class="region-badge">${countries.length} 國家</span>
        </div>
        <div class="country-grid">
          ${countries.map(([id, c]) => `
            <div class="country-grid-card" data-country="${id}">
              <div class="card-top">
                <span class="card-flag">${c.flag}</span>
                <div>
                  <div class="card-name">${c.name}</div>
                  <div class="card-region">${c.drivingSide === 'left' ? '靠左行駛' : '靠右行駛'} · ${c.tld || ''}</div>
                </div>
              </div>
              <div class="card-facts">
                ${c.language ? `<span class="mini-fact">${truncate(c.language, 20)}</span>` : ''}
                ${c.coverage ? `<span class="mini-fact">${truncate(c.coverage, 25)}</span>` : ''}
                ${c.carMeta ? `<span class="mini-fact">${truncate(c.carMeta, 25)}</span>` : ''}
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;

    document.querySelectorAll('.country-grid-card').forEach(el => {
      el.addEventListener('click', () => {
        navigateTo('country', el.dataset.country);
      });
    });
  }

  function renderCountry(id) {
    const c = COUNTRIES[id];
    if (!c) return renderHome();

    const region = regions.find(r => r.id === c.region);
    breadcrumb.innerHTML = `
      <a onclick="navigateTo('home')" style="cursor:pointer;color:var(--text-muted)">首頁</a> /
      <a onclick="navigateTo('region','${c.region}')" style="cursor:pointer;color:var(--text-muted)">${region ? region.name : c.region}</a> /
      <span>${c.flag} ${c.name}</span>
    `;

    content.innerHTML = `
      <div class="country-header animate-in">
        <div class="country-title">
          <span class="flag-large">${c.flag}</span>
          <div>
            <h2>${c.name}</h2>
            ${c.localName ? `<div class="country-subtitle">${c.localName}</div>` : ''}
          </div>
        </div>
        <div class="quick-facts">
          ${quickFact('駕駛方向', c.drivingSide === 'left' ? '靠左行駛（右駕）' : '靠右行駛（左駕）')}
          ${quickFact('TLD', c.tld || 'N/A')}
          ${quickFact('電話', c.phoneCode || 'N/A')}
          ${quickFact('語言', c.language || 'N/A')}
          ${quickFact('貨幣', c.currency || 'N/A')}
        </div>
      </div>

      <div class="detail-grid animate-in">
        ${cameraCard(c.camera || [])}
        ${carImageCard(id, c.car || [])}
        ${roadCard(id, c.roads || [])}
        ${bollardImageCard(id, c.bollardInfo || [])}
        ${poleImageCard(id, c.poleInfo || [])}
        ${architectureCard(id, c.landscape || [])}
        ${signImageCard(id, c.signInfo || [])}
        ${detailCard('🔤', '語言 & 標誌', c.signs || [])}
        ${plateImageCard(id, c.plates || [])}
        ${detailCard('🔍', '獨特辨識特徵', c.unique || [], true)}
        ${c.tips && c.tips.length ? tipsCard(c.tips) : ''}
      </div>
    `;
  }

  function quickFact(label, value) {
    return `<div class="quick-fact"><span class="label">${label}:</span><span class="value">${value}</span></div>`;
  }

  function detailCard(icon, title, items, fullWidth) {
    if (!items || items.length === 0) return '';
    return `
      <div class="detail-card${fullWidth ? ' full-width' : ''}">
        <div class="detail-card-header">
          <span class="icon">${icon}</span>
          <h3>${title}</h3>
        </div>
        <div class="detail-card-body">
          <ul>
            ${items.map(item => `<li>${item}</li>`).join('')}
          </ul>
        </div>
      </div>
    `;
  }

  function cameraCard(items) {
    if (!items || items.length === 0) return '';
    // Parse generation percentages from first item and render as visual bar
    let barHtml = '';
    const first = items[0] || '';
    const genMatch = first.match(/(\d+\.?\d*)%\s*Gen\s*(\d)/gi) || [];
    const gens = [];
    // Try pattern: "XX% Gen N"
    for (const m of first.matchAll(/(\d+\.?\d*)%\s*Gen\s*(\d)/gi)) {
      gens.push({ pct: parseFloat(m[1]), gen: parseInt(m[2]) });
    }
    // Try pattern: "Gen N ... XX%"
    if (gens.length === 0) {
      for (const m of first.matchAll(/Gen\s*(\d)[^%]*?(\d+\.?\d*)%/gi)) {
        gens.push({ pct: parseFloat(m[2]), gen: parseInt(m[1]) });
      }
    }
    // Try pattern: "XX% ... Gen N" with mixed content
    if (gens.length === 0) {
      const pctMatches = [...first.matchAll(/(\d+\.?\d*)%/g)];
      const genNums = [...first.matchAll(/Gen\s*(\d)/gi)];
      if (pctMatches.length === genNums.length && pctMatches.length > 0) {
        for (let i = 0; i < pctMatches.length; i++) {
          gens.push({ pct: parseFloat(pctMatches[i][1]), gen: parseInt(genNums[i][1]) });
        }
      }
    }
    // Also check for shitcam percentage
    const shitMatch = first.match(/(\d+\.?\d*)%.*(?:shitcam|Shitcam|非官方)/i);
    if (shitMatch) {
      gens.push({ pct: parseFloat(shitMatch[1]), gen: 0 }); // 0 = shitcam
    }

    const genColors = { 1: '#ef4444', 2: '#f59e0b', 3: '#3b82f6', 4: '#10b981', 0: '#6b7280' };
    const genLabels = { 1: 'Gen 1', 2: 'Gen 2', 3: 'Gen 3', 4: 'Gen 4', 0: 'Shitcam' };

    if (gens.length > 0 && gens.reduce((s, g) => s + g.pct, 0) > 50) {
      barHtml = '<div style="margin-bottom:14px;">' +
        '<div style="display:flex;height:24px;border-radius:6px;overflow:hidden;border:1px solid var(--border-color);">' +
        gens.filter(g => g.pct >= 0.5).map(g =>
          '<div style="width:' + g.pct + '%;background:' + genColors[g.gen] + ';display:flex;align-items:center;justify-content:center;font-size:0.7rem;color:white;font-weight:600;min-width:' + (g.pct > 5 ? '0' : '30px') + ';">' +
          (g.pct > 8 ? genLabels[g.gen] + ' ' + g.pct + '%' : g.pct > 3 ? g.pct + '%' : '') +
          '</div>'
        ).join('') +
        '</div>' +
        '<div style="display:flex;gap:12px;margin-top:6px;flex-wrap:wrap;">' +
        gens.filter(g => g.pct >= 0.5).map(g =>
          '<span style="font-size:0.75rem;color:var(--text-muted);display:flex;align-items:center;gap:4px;">' +
          '<span style="width:10px;height:10px;border-radius:2px;background:' + genColors[g.gen] + ';"></span>' +
          genLabels[g.gen] + ' ' + g.pct + '%</span>'
        ).join('') +
        '</div></div>';
    }

    return `
      <div class="detail-card">
        <div class="detail-card-header">
          <span class="icon">📷</span>
          <h3>覆蓋 & 相機</h3>
        </div>
        <div class="detail-card-body">
          ${barHtml}
          <ul>
            ${barHtml ? items.slice(1).map(item => '<li>' + item + '</li>').join('') : items.map(item => '<li>' + item + '</li>').join('')}
          </ul>
        </div>
      </div>
    `;
  }

  function roadCard(countryId, items) {
    if (!items || items.length === 0) return '';
    const geodummyRoads = typeof COUNTRY_IMAGES !== 'undefined' && COUNTRY_IMAGES[countryId]?.roadMarkings;
    let imgsHtml = '';
    if (geodummyRoads && geodummyRoads.length > 0) {
      imgsHtml = '<div style="display:flex;flex-wrap:wrap;gap:8px;margin-bottom:12px;">' +
        geodummyRoads.map(url =>
          `<img src="${url}" alt="Road marking" style="max-width:48%;border-radius:8px;border:1px solid var(--border-color);object-fit:contain;height:auto;" onerror="this.style.display='none'">`
        ).join('') + '</div>';
    }
    return `
      <div class="detail-card">
        <div class="detail-card-header">
          <span class="icon">🛣️</span>
          <h3>道路特徵</h3>
        </div>
        <div class="detail-card-body">
          ${imgsHtml}
          <ul>
            ${items.map(item => '<li>' + item + '</li>').join('')}
          </ul>
        </div>
      </div>
    `;
  }

  function carImageCard(countryId, items) {
    if (!items || items.length === 0) return '';
    // Collect all car images: generic + country-specific from geodummy
    const imgs = [];
    const genericImg = CAR_IMAGES[countryId];
    if (genericImg) imgs.push(genericImg);
    const geodummyCar = typeof COUNTRY_IMAGES !== 'undefined' && COUNTRY_IMAGES[countryId]?.carMetas;
    if (geodummyCar) geodummyCar.forEach(url => { if (!imgs.includes(url)) imgs.push(url); });

    const imgHtml = imgs.length > 0 ? `<div style="display:flex;flex-wrap:wrap;gap:8px;margin-bottom:12px;">` +
      imgs.map(url => `<img src="${url}" alt="Car meta" style="max-width:48%;border-radius:8px;border:1px solid var(--border-color);object-fit:contain;height:auto;" onerror="this.style.display='none'">`).join('') +
      `</div>` : '';
    return `
      <div class="detail-card">
        <div class="detail-card-header">
          <span class="icon">🚗</span>
          <h3>車輛 Meta</h3>
        </div>
        <div class="detail-card-body">
          ${imgHtml}
          <ul>
            ${items.map(item => `<li>${item}</li>`).join('')}
          </ul>
        </div>
      </div>
    `;
  }

  function bollardImageCard(countryId, infoItems) {
    const bollardSlug = BOLLARD_IMAGES[countryId];
    const geodummyBollards = typeof COUNTRY_IMAGES !== 'undefined' && COUNTRY_IMAGES[countryId]?.bollards;
    if (!bollardSlug && (!geodummyBollards || geodummyBollards.length === 0) && (!infoItems || infoItems.length === 0)) return '';

    let imgsHtml = '';
    if (geodummyBollards && geodummyBollards.length > 0) {
      imgsHtml += geodummyBollards.map(url =>
        `<img src="${url}" alt="Bollard" style="max-width:48%;border-radius:8px;border:1px solid var(--border-color);margin:4px;object-fit:contain;height:auto;" onerror="this.style.display='none'">`
      ).join('');
    }
    if (bollardSlug) {
      const variants = [bollardSlug, bollardSlug + '2', bollardSlug + '3'];
      imgsHtml += variants.map(v =>
        `<img src="https://geomastr.com/assets/media/bollards/${v}.jpg" alt="Bollard" style="max-width:48%;border-radius:8px;border:1px solid var(--border-color);margin:4px;object-fit:contain;height:auto;" onerror="this.style.display='none'">`
      ).join('');
    }
    const listHtml = infoItems && infoItems.length > 0 ? `<ul>${infoItems.map(i => '<li>' + i + '</li>').join('')}</ul>` : '';
    return `
      <div class="detail-card">
        <div class="detail-card-header">
          <span class="icon">🔶</span>
          <h3>Bollard 防撞柱</h3>
        </div>
        <div class="detail-card-body">
          ${imgsHtml ? '<div style="display:flex;flex-wrap:wrap;">' + imgsHtml + '</div>' : ''}
          ${listHtml}
        </div>
      </div>
    `;
  }

  function plateImageCard(countryId, items) {
    if (!items || items.length === 0) return '';
    const plateSlug = PLATE_IMAGES[countryId];
    // Show multiple plate variants (geomastr: Country.jpg, Country2.jpg, Country3.jpg for front/back/variants)
    let imgsHtml = '';
    if (plateSlug) {
      const variants = [plateSlug, plateSlug + '2', plateSlug + '3', plateSlug + '4'];
      imgsHtml = `<div style="display:flex;flex-wrap:wrap;gap:8px;margin-bottom:12px;">` +
        variants.map(v =>
          `<img src="https://geomastr.com/assets/media/licenseplates/${v}.jpg" alt="Plate" style="max-width:48%;border-radius:8px;border:1px solid var(--border-color);object-fit:contain;height:auto;" onerror="this.style.display='none'">`
        ).join('') + `</div>`;
    }
    // Also check geodummy for country-specific plate images
    const geodummyPlates = typeof COUNTRY_IMAGES !== 'undefined' && COUNTRY_IMAGES[countryId]?.plates;
    if (geodummyPlates && geodummyPlates.length > 0) {
      imgsHtml += `<div style="display:flex;flex-wrap:wrap;gap:8px;margin-bottom:12px;">` +
        geodummyPlates.map(url =>
          `<img src="${url}" alt="Plate detail" style="max-width:48%;border-radius:8px;border:1px solid var(--border-color);object-fit:contain;height:auto;" onerror="this.style.display='none'">`
        ).join('') + `</div>`;
    }
    return `
      <div class="detail-card">
        <div class="detail-card-header">
          <span class="icon">🚘</span>
          <h3>車牌（含前/後）</h3>
        </div>
        <div class="detail-card-body">
          ${imgsHtml}
          <ul>
            ${items.map(item => `<li>${item}</li>`).join('')}
          </ul>
          <p style="font-size:0.75rem;color:var(--text-muted);margin-top:8px;">圖片來源：geomastr.com / geodummy.com（顯示多種變體，含前後車牌）</p>
        </div>
      </div>
    `;
  }

  function signImageCard(countryId, infoItems) {
    const bollardSlug = BOLLARD_IMAGES[countryId];
    const geodummySigns = typeof COUNTRY_IMAGES !== 'undefined' && COUNTRY_IMAGES[countryId]?.signs;
    if (!bollardSlug && (!geodummySigns || geodummySigns.length === 0) && (!infoItems || infoItems.length === 0)) return '';

    let imgContent = '';
    if (geodummySigns && geodummySigns.length > 0) {
      imgContent += `<div style="display:flex;flex-wrap:wrap;gap:8px;margin-bottom:12px;">` +
        geodummySigns.map(url =>
          `<img src="${url}" alt="Road sign" style="max-width:48%;border-radius:8px;border:1px solid var(--border-color);object-fit:contain;height:auto;" onerror="this.style.display='none'">`
        ).join('') + `</div>`;
    }
    if (bollardSlug) {
      const signImgs = SIGN_TYPES.map(type =>
        `<img src="https://geomastr.com/assets/media/streetsigns/${type}/${bollardSlug}.svg" alt="${type}" style="max-width:70px;margin:4px;" onerror="this.style.display='none'">`
      ).join('');
      imgContent += `<div style="display:flex;flex-wrap:wrap;gap:4px;align-items:center;">${signImgs}</div>`;
    }
    const listHtml = infoItems && infoItems.length > 0 ? `<ul style="margin-top:8px">${infoItems.map(i => '<li>' + i + '</li>').join('')}</ul>` : '';
    return `
      <div class="detail-card">
        <div class="detail-card-header">
          <span class="icon">🚸</span>
          <h3>道路標誌</h3>
        </div>
        <div class="detail-card-body">
          ${imgContent}
          ${listHtml}
        </div>
      </div>
    `;
  }

  function architectureCard(countryId, items) {
    if (!items || items.length === 0) return '';
    const geodummyArch = typeof COUNTRY_IMAGES !== 'undefined' && COUNTRY_IMAGES[countryId]?.architecture;
    const geodummyScenery = typeof COUNTRY_IMAGES !== 'undefined' && COUNTRY_IMAGES[countryId]?.scenery;
    let imgsHtml = '';
    const allImgs = [...(geodummyArch || []), ...(geodummyScenery || [])];
    if (allImgs.length > 0) {
      imgsHtml = `<div style="display:flex;flex-wrap:wrap;gap:8px;margin-bottom:12px;">` +
        allImgs.map(url =>
          `<img src="${url}" alt="Scenery" style="max-width:48%;border-radius:8px;border:1px solid var(--border-color);object-fit:contain;height:auto;" onerror="this.style.display='none'">`
        ).join('') + `</div>`;
    }
    return `
      <div class="detail-card">
        <div class="detail-card-header">
          <span class="icon">🏗️</span>
          <h3>建築 & 地景</h3>
        </div>
        <div class="detail-card-body">
          ${imgsHtml}
          <ul>
            ${items.map(item => `<li>${item}</li>`).join('')}
          </ul>
        </div>
      </div>
    `;
  }

  function poleImageCard(countryId, infoItems) {
    const geodummyPoles = typeof COUNTRY_IMAGES !== 'undefined' && COUNTRY_IMAGES[countryId]?.poles;
    if ((!geodummyPoles || geodummyPoles.length === 0) && (!infoItems || infoItems.length === 0)) return '';
    const imgsHtml = geodummyPoles && geodummyPoles.length > 0 ?
      '<div style="display:flex;flex-wrap:wrap;gap:8px;margin-bottom:12px;">' +
      geodummyPoles.map(url =>
        `<img src="${url}" alt="Pole" style="max-width:48%;border-radius:8px;border:1px solid var(--border-color);object-fit:contain;height:auto;" onerror="this.style.display='none'">`
      ).join('') + '</div>' : '';
    const listHtml = infoItems && infoItems.length > 0 ? `<ul>${infoItems.map(i => '<li>' + i + '</li>').join('')}</ul>` : '';
    return `
      <div class="detail-card">
        <div class="detail-card-header">
          <span class="icon">🔌</span>
          <h3>電線桿</h3>
        </div>
        <div class="detail-card-body">
          ${imgsHtml}
          ${listHtml}
        </div>
      </div>
    `;
  }

  function tipsCard(tips) {
    return `
      <div class="detail-card full-width">
        <div class="detail-card-header">
          <span class="icon">💡</span>
          <h3>實用技巧</h3>
        </div>
        <div class="detail-card-body">
          <ul class="tips-list">
            ${tips.map(t => `<li><span class="tip-icon">▸</span>${t}</li>`).join('')}
          </ul>
        </div>
      </div>
    `;
  }

  function renderMeta() {
    breadcrumb.innerHTML = '<a onclick="navigateTo(\'home\')" style="cursor:pointer;color:var(--text-muted)">首頁</a> / <span>通用 Meta 指南</span>';

    content.innerHTML = `
      <div class="animate-in">
        <div class="country-header">
          <div class="country-title">
            <span class="flag-large">📋</span>
            <h2>通用 Meta 指南</h2>
          </div>
        </div>

        ${META_SECTIONS.map(section => `
          <div class="meta-section">
            <h3>${section.icon} ${section.title}</h3>
            ${section.content}
          </div>
        `).join('')}
      </div>
    `;
  }

  // ===== Search =====
  function setupSearch() {
    searchInput.addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase().trim();
      if (!query) {
        // Reset - show all
        document.querySelectorAll('.nav-country').forEach(el => {
          el.style.display = '';
        });
        document.querySelectorAll('.nav-region').forEach(el => {
          el.style.display = '';
        });
        return;
      }

      document.querySelectorAll('.nav-region').forEach(regionEl => {
        let hasVisible = false;
        regionEl.querySelectorAll('.nav-country').forEach(countryEl => {
          const countryId = countryEl.dataset.country;
          const country = COUNTRIES[countryId];
          const searchText = `${country.name} ${country.localName || ''} ${country.flag}`.toLowerCase();
          if (searchText.includes(query)) {
            countryEl.style.display = '';
            hasVisible = true;
          } else {
            countryEl.style.display = 'none';
          }
        });
        regionEl.style.display = hasVisible ? '' : 'none';
        if (hasVisible) regionEl.classList.add('open');
      });
    });
  }

  // ===== Mobile sidebar =====
  function setupMobileSidebar() {
    menuToggle.addEventListener('click', () => {
      sidebar.classList.toggle('open');
      sidebarOverlay.classList.toggle('active');
    });
    sidebarOverlay.addEventListener('click', closeSidebar);
  }

  function closeSidebar() {
    sidebar.classList.remove('open');
    sidebarOverlay.classList.remove('active');
  }

  // ===== Back to top =====
  function setupBackToTop() {
    window.addEventListener('scroll', () => {
      backToTop.classList.toggle('visible', window.scrollY > 400);
    });
    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ===== Lightbox with arrow key navigation =====
  let lightboxImages = [];
  let lightboxIndex = 0;

  function setupLightbox() {
    document.addEventListener('click', (e) => {
      if (e.target.tagName === 'IMG' && e.target.closest('.detail-card-body')) {
        // Collect all visible images in the current detail grid
        const grid = e.target.closest('.detail-grid') || e.target.closest('.content');
        lightboxImages = Array.from(grid.querySelectorAll('.detail-card-body img'))
          .filter(img => img.offsetParent !== null && img.naturalWidth > 0)
          .map(img => img.src);
        lightboxIndex = lightboxImages.indexOf(e.target.src);
        if (lightboxIndex === -1) lightboxIndex = 0;
        openLightbox();
      }
    });

    // Close on overlay click - close unless clicking on image itself or nav buttons
    document.getElementById('lightbox').addEventListener('click', (e) => {
      const tag = e.target.tagName;
      if (tag !== 'IMG' && tag !== 'BUTTON') closeLightbox();
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
      const lb = document.getElementById('lightbox');
      if (!lb.classList.contains('active')) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') { e.preventDefault(); lightboxNext(); }
      if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') { e.preventDefault(); lightboxPrev(); }
    });
  }

  function openLightbox() {
    const lb = document.getElementById('lightbox');
    document.getElementById('lightboxImg').src = lightboxImages[lightboxIndex];
    document.getElementById('lightboxCounter').textContent = (lightboxIndex + 1) + ' / ' + lightboxImages.length;
    lb.classList.add('active');
  }

  function closeLightbox() {
    document.getElementById('lightbox').classList.remove('active');
  }

  function lightboxNext() {
    if (lightboxImages.length === 0) return;
    lightboxIndex = (lightboxIndex + 1) % lightboxImages.length;
    document.getElementById('lightboxImg').src = lightboxImages[lightboxIndex];
    document.getElementById('lightboxCounter').textContent = (lightboxIndex + 1) + ' / ' + lightboxImages.length;
  }

  function lightboxPrev() {
    if (lightboxImages.length === 0) return;
    lightboxIndex = (lightboxIndex - 1 + lightboxImages.length) % lightboxImages.length;
    document.getElementById('lightboxImg').src = lightboxImages[lightboxIndex];
    document.getElementById('lightboxCounter').textContent = (lightboxIndex + 1) + ' / ' + lightboxImages.length;
  }

  // Expose for inline onclick
  window.lightboxPrev = lightboxPrev;
  window.lightboxNext = lightboxNext;
  window.closeLightbox = closeLightbox;

  // ===== Utility =====
  function truncate(str, len) {
    return str.length > len ? str.slice(0, len) + '...' : str;
  }

  // Make navigateTo global for inline onclick
  window.navigateTo = navigateTo;

  // ===== Init =====
  function init() {
    buildSidebar();
    setupSearch();
    setupMobileSidebar();
    setupBackToTop();
    setupLightbox();
    handleRoute(); // Use hash routing - preserves page on refresh
  }

  init();
})();
