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

  // ===== Navigation =====
  function navigateTo(page, countryId) {
    currentPage = page;
    currentCountry = countryId || null;

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
        ${detailCard('📷', '覆蓋 & 相機', c.camera || [])}
        ${carImageCard(id, c.car || [])}
        ${detailCard('🛣️', '道路特徵', c.roads || [])}
        ${bollardImageCard(id)}
        ${architectureCard(id, c.landscape || [])}
        ${poleImageCard(id)}
        ${detailCard('🔤', '語言 & 標誌', c.signs || [])}
        ${plateImageCard(id, c.plates || [])}
        ${signImageCard(id)}
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

  function carImageCard(countryId, items) {
    if (!items || items.length === 0) return '';
    // Collect all car images: generic + country-specific from geodummy
    const imgs = [];
    const genericImg = CAR_IMAGES[countryId];
    if (genericImg) imgs.push(genericImg);
    const geodummyCar = typeof COUNTRY_IMAGES !== 'undefined' && COUNTRY_IMAGES[countryId]?.carMetas;
    if (geodummyCar) geodummyCar.forEach(url => { if (!imgs.includes(url)) imgs.push(url); });

    const imgHtml = imgs.length > 0 ? `<div style="display:flex;flex-wrap:wrap;gap:8px;margin-bottom:12px;">` +
      imgs.map(url => `<img src="${url}" alt="Car meta" style="max-width:48%;border-radius:8px;border:1px solid var(--border-color);" onerror="this.style.display='none'">`).join('') +
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

  function bollardImageCard(countryId) {
    const bollardSlug = BOLLARD_IMAGES[countryId];
    const geodummyBollards = typeof COUNTRY_IMAGES !== 'undefined' && COUNTRY_IMAGES[countryId]?.bollards;
    if (!bollardSlug && (!geodummyBollards || geodummyBollards.length === 0)) return '';

    let imgsHtml = '';
    // Geodummy images first (higher quality, from actual Street View)
    if (geodummyBollards && geodummyBollards.length > 0) {
      imgsHtml += geodummyBollards.map(url =>
        `<img src="${url}" alt="Bollard" style="max-width:48%;border-radius:8px;border:1px solid var(--border-color);margin:4px;" onerror="this.style.display='none'">`
      ).join('');
    }
    // Then geomastr variants
    if (bollardSlug) {
      const variants = [bollardSlug, bollardSlug + '2', bollardSlug + '3'];
      imgsHtml += variants.map(v =>
        `<img src="https://geomastr.com/assets/media/bollards/${v}.jpg" alt="Bollard" style="max-width:48%;border-radius:8px;border:1px solid var(--border-color);margin:4px;" onerror="this.style.display='none'">`
      ).join('');
    }
    return `
      <div class="detail-card">
        <div class="detail-card-header">
          <span class="icon">🔶</span>
          <h3>Bollard 防撞柱</h3>
        </div>
        <div class="detail-card-body">
          <div style="display:flex;flex-wrap:wrap;">${imgsHtml}</div>
          <p style="font-size:0.75rem;color:var(--text-muted);margin-top:8px;">圖片來源：geodummy.com / geomastr.com</p>
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
          `<img src="https://geomastr.com/assets/media/licenseplates/${v}.jpg" alt="Plate" style="max-width:48%;border-radius:8px;border:1px solid var(--border-color);" onerror="this.style.display='none'">`
        ).join('') + `</div>`;
    }
    // Also check geodummy for country-specific plate images
    const geodummyPlates = typeof COUNTRY_IMAGES !== 'undefined' && COUNTRY_IMAGES[countryId]?.plates;
    if (geodummyPlates && geodummyPlates.length > 0) {
      imgsHtml += `<div style="display:flex;flex-wrap:wrap;gap:8px;margin-bottom:12px;">` +
        geodummyPlates.map(url =>
          `<img src="${url}" alt="Plate detail" style="max-width:48%;border-radius:8px;border:1px solid var(--border-color);" onerror="this.style.display='none'">`
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

  function signImageCard(countryId) {
    const bollardSlug = BOLLARD_IMAGES[countryId];
    const geodummySigns = typeof COUNTRY_IMAGES !== 'undefined' && COUNTRY_IMAGES[countryId]?.signs;
    if (!bollardSlug && (!geodummySigns || geodummySigns.length === 0)) return '';

    let content = '';
    // Geodummy real Street View sign photos
    if (geodummySigns && geodummySigns.length > 0) {
      content += `<div style="display:flex;flex-wrap:wrap;gap:8px;margin-bottom:12px;">` +
        geodummySigns.map(url =>
          `<img src="${url}" alt="Road sign" style="max-width:48%;border-radius:8px;border:1px solid var(--border-color);" onerror="this.style.display='none'">`
        ).join('') + `</div>`;
    }
    // Geomastr SVG road sign icons
    if (bollardSlug) {
      const signImgs = SIGN_TYPES.map(type =>
        `<img src="https://geomastr.com/assets/media/streetsigns/${type}/${bollardSlug}.svg" alt="${type}" style="max-width:70px;margin:4px;" onerror="this.style.display='none'">`
      ).join('');
      content += `<div style="display:flex;flex-wrap:wrap;gap:4px;align-items:center;">${signImgs}</div>`;
    }
    return `
      <div class="detail-card">
        <div class="detail-card-header">
          <span class="icon">🚸</span>
          <h3>道路標誌</h3>
        </div>
        <div class="detail-card-body">
          ${content}
          <p style="font-size:0.75rem;color:var(--text-muted);margin-top:8px;">圖片來源：geodummy.com / geomastr.com</p>
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
          `<img src="${url}" alt="Scenery" style="max-width:48%;border-radius:8px;border:1px solid var(--border-color);" onerror="this.style.display='none'">`
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

  function poleImageCard(countryId) {
    // Check geodummy country images for poles
    const geodummyPoles = typeof COUNTRY_IMAGES !== 'undefined' && COUNTRY_IMAGES[countryId]?.poles;
    if (!geodummyPoles || geodummyPoles.length === 0) return '';
    return `
      <div class="detail-card">
        <div class="detail-card-header">
          <span class="icon">🔌</span>
          <h3>電線桿</h3>
        </div>
        <div class="detail-card-body">
          <div style="display:flex;flex-wrap:wrap;gap:8px;">
            ${geodummyPoles.map(url =>
              `<img src="${url}" alt="Pole" style="max-width:48%;border-radius:8px;border:1px solid var(--border-color);" onerror="this.style.display='none'">`
            ).join('')}
          </div>
          <p style="font-size:0.75rem;color:var(--text-muted);margin-top:8px;">圖片來源：geodummy.com</p>
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
    renderHome();
  }

  init();
})();
