// ===== GeoGuessr Reference Guide - Complete Country Data =====
// Comprehensive reference with bilingual descriptions

const COUNTRIES = {

// ╔══════════════════════════════════════════╗
// ║           EUROPE                         ║
// ╚══════════════════════════════════════════╝

'albania': {
  name: 'Albania', localName: 'Shqipëria', flag: '🇦🇱', region: 'europe',
  drivingSide: 'right', tld: '.al', phoneCode: '+355', language: 'Albanian', currency: 'Lek (ALL)',
  camera: [
    "<strong>100% Gen 3（有兩種車：長天線版+短天線版）</strong>",
    "主要公路和城市覆蓋良好，山區較稀疏"
  ],
  car: [
    "Gen 3：白色轎車，無特殊辨識特徵",
    "Gen 3 有天線（長或短），可見相機裂紋（camera rifts）",
    "無 snorkel、無 roof rack、無特殊膠帶"
  ],
  roads: [
    "公路上常見白色虛線中線",
    "道路品質差異極大 — 高速公路平整 vs 鄉村道路破損",
    "許多道路缺乏適當標線，尤其是鄉村地區",
    "混凝土或柏油路面，鄉村地區常有坑洞"
  ],
  bollardInfo: [
    "Bollard 類似義大利風格 — 反光片到頂部有黑色條紋"
  ],
  poleInfo: [
    "<strong>木製電線桿</strong> — 粗壯木桿，頂部有簡單橫臂和絕緣器",
    "鄉村地區普遍；城市地區有混凝土桿"
  ],
  landscape: [
    "北部和東部為山地地形，西部為沿海低地",
    "海岸為地中海植被，山區為高山植被",
    "鄉間隨處可見碉堡（蘑菇形混凝土碉堡）",
    "南部海岸有棕櫚樹和橄欖園",
    "城市中有鄂圖曼和義大利殖民時期建築"
  ],
  signs: [
    "Albanian 語 — 獨特的印歐語系語言，與鄰國不相似",
    "使用拉丁字母加特殊字元：ë、ç",
    "路標遵循歐洲慣例（高速公路為綠色）",
    "城市名稱常以 -ë、-a、-i 結尾"
  ],
  plates: [
    "車牌兩側有藍色條紋，或<strong>左側有一條紅色條紋</strong>",
    "⚠️ 左側紅色條紋是<strong>歐洲唯一</strong>",
    "Italy 也有兩側藍色條紋，但 Italy 前車牌明顯較短",
    "格式：AA 000 AA"
  ],
  unique: [
    "車牌左側<strong>紅色條紋</strong> — 歐洲唯一",
    "兩種街景車：長天線版（有天空裂痕）和短天線版（無裂痕）",
    "<strong>蘑菇形碉堡</strong>幾乎 100% 確認是 Albania",
    "Mercedes 車極為普遍",
    "路牌背面常塗<strong>黑色</strong>（Italy、Romania 也有）",
    "STOP 標誌的 S 字形狀獨特 — 兩端與中間角度相同（Italy 也有）",
    "轉向誘導標：<strong>黑底白箭頭</strong>（Montenegro 不同：白底黑箭頭或黃底紅箭頭）",
    "倒三角形杆頂",
    "路桩頂部黑色 + 紅灰反光板 + 底部白色（Italy 類似）"
  ],
  tips: [
    "大量 Mercedes 汽車是強力線索",
    "Albanian 語非常獨特 — 非斯拉夫語、非羅曼語、非希臘語",
    "注意標誌文字中的 ë 和 ç 字元",
    "山脈 + 地中海海岸 + 碉堡 = Albania",
    "🔗 <a href=\"https://www.google.com/maps/@41.3275,19.8189,3a,75y,90t\" target=\"_blank\" style=\"color:var(--accent-blue)\">Street View 範例（Tirana）</a>"
  ]
},

'andorra': {
  name: 'Andorra', localName: 'Andorra', flag: '🇦🇩', region: 'europe',
  drivingSide: 'right', tld: '.ad', phoneCode: '+376', language: 'Catalan', currency: 'Euro (EUR)',
  camera: [
    "<strong>94% Gen 3 + 6% Gen 2</strong>",
    "小國，主要覆蓋幹道",
    "部分行人區有 trekker 覆蓋（滑雪度假區等）"
  ],
  car: [
    "Gen 3：白色轎車，所有 Gen 3 均可見<strong>中短天線</strong>",
    "所有 Gen 3 街景為<strong>十月拍攝</strong>，落葉樹已呈秋色",
    "無 snorkel、無 車頂架 (roof rack)"
  ],
  roads: [
    "道路護欄上有<strong>黃色反光體</strong> — 歐洲僅 Andorra、Spain、Belgium 使用",
    "白色中心線和邊線（歐洲標準）",
    "山路多隧道和髮夾彎",
    "路面品質良好（已開發國家）"
  ],
  bollardInfo: [
    "<strong>楔形 bollard</strong>，正面有<strong>橘色反光片</strong> — Andorra 和 Canary Islands 獨有",
    "與 France（圓形白色 bollard）和 Spain（方形 bollard）風格明顯不同"
  ],
  poleInfo: [
    "<strong>雪杆（snow pole）</strong>：綠色或棕色細長杆，頂部有反光片 — 用於冬季標示道路邊界",
    "庇里牛斯山區常見，協助積雪時辨識路緣"
  ],
  landscape: [
    "全境為山地 — 庇里牛斯山脈",
    "較高海拔可見滑雪場",
    "山坡上有茂密松林",
    "狹窄山谷中有村莊",
    "庇里牛斯山典型的石材和板岩建築"
  ],
  signs: [
    "Catalan 語 — 類似西班牙語但有區別（注意 'carrer' 而非 'calle'）",
    "路標類似西班牙/法國風格",
    "滑雪場和免稅店標誌常見"
  ],
  plates: [
    "白色車牌，國碼 'AND'",
    "格式比 EU 車牌小"
  ],
  unique: [
    "<strong>Catalan 語</strong>（官方語言）— 可與 France 和 Spain 區分",
    "<strong>楔形 bollard</strong> 搭配橘色正面反光片（與 Canary Islands 相同）",
    "到處都是免稅店 — 注意菸酒和電子產品店",
    "全境為山地，沒有平坦地區",
    "非常小的國家 — 很快就能走完"
  ],
  tips: [
    "在 France 和 Spain 之間的山區看到 Catalan 文字，就是 Andorra",
    "Bollard 為楔形搭配橘色反光片（非法國或西班牙風格）",
    "注意免稅店標誌（香水店、菸酒店）",
    "電話號碼只有 6 位數（非常短）",
    "🔗 <a href=\"https://www.google.com/maps/@42.5063,1.5218,3a,75y,90t\" target=\"_blank\" style=\"color:var(--accent-blue)\">Street View 範例（Andorra la Vella）</a>"
  ]
},

'austria': {
  name: 'Austria', localName: 'Österreich', flag: '🇦🇹', region: 'europe',
  drivingSide: 'right', tld: '.at', phoneCode: '+43', language: 'German', currency: 'Euro (EUR)',
  camera: [
    "<strong>85% Gen 3 + 15% Gen 2</strong>（也有 Gen 4 小相機覆蓋）",
    "⚠️ Germany 僅有 Gen 4；Switzerland 為低相機 — 可依此區分三個德語國家",
    "Burgenland 有一條 Gen 2 道路"
  ],
  car: [
    "Gen 3：白色轎車",
    "Gen 4 小相機：比正常 Gen 4 低，大圓形打碼前部突出",
    "西部靠近 Switzerland 邊境有<strong>錫箔天線</strong> — Austria 獨有",
    "⚠️ Gen 4：<strong>幾乎沒有藍色車</strong>（歐洲極少數無藍車國家，另有 Turkey、Belgium）",
    "Gen 4：幾乎全部為<strong>「無車可見」（完全打碼）</strong> — 與 Belgium、Switzerland 並列最常見",
    "Gen 4 無車：2022 年涵蓋特別常見（也見於 Slovenia）",
    "無 antenna（除錫箔版）、無 snorkel"
  ],
  roads: [
    "維護良好的高速公路和 Autobahn",
    "白色虛線中線（歐洲標準）",
    "綠色高速公路標誌配白色文字"
  ],
  bollardInfo: [
    "白色路桩，<strong>頂部黑色 + 黑帽子</strong>，反光條暗紅/深灰色",
    "上部有時附雪杆",
    "⚠️ Slovenia 類似但反光條總是紅色無黑色；Germany 為簡單黑白反光板"
  ],
  poleInfo: [
    "<strong>圓形木製電線杆</strong>最常見"
  ],
  signInfo: [
    "誘導標：<strong>紅底白箭頭</strong>和<strong>黃底紅箭頭</strong>兩種（Germany 為白底紅箭頭）",
    "路牌<strong>白底藍框</strong> + 獨特字體（Germany 為黃底黑框）",
    "城鎮入口標識為<strong>藍邊白底</strong> + 獨特字體（Germany 為黑邊黃底）",
    "行人標志用<strong>兩條平行虛線</strong>代替斑馬線 — Austria 獨有（鄰國均用斑馬線）",
    "路牌有時用<strong>四個鐵制卡子</strong>固定 — 中歐 Austria 獨有",
    "里程碑：<strong>藍底白字</strong>，十位處用逗號分隔（Slovenia 白色；Germany 有細白輪廓）",
    "公交站：綠色圓圈 + 字母 <strong>H</strong> + 黃色填充（Germany 有類似款）",
    "單行路牌寫 <strong>Einbahn</strong>（Germany 寫 Einbahnstraße）",
    "黃色天然氣指示杆（類似雪杆）— Austria 獨有",
    "綠色指示牌指向當地設施，非常常見"
  ],
  landscape: [
    "中西部阿爾卑斯山主導，東部/東北部較平坦農業地帶",
    "翠綠山谷配阿爾卑斯式建築（淺色牆 + 木質結構 + 陽台）",
    "Germany 南部有類似建築",
    "東端（靠近 Hungary 邊境）有葡萄園，尤其 Vienna 和 Neusiedler See 周圍",
    "城市中有巴洛克和哈布斯堡時期建築"
  ],
  signs: [
    "德語 — 與 Germany 相同但有 Austria 方言用詞",
    "'Straße'（街道）、'Gasse'（巷弄）",
    "變音字母：ä、ö、ü、ß",
    "A 級道路由東向西數字遞增；B 級道路亦同"
  ],
  plates: [
    "白色車牌，左側有 EU 藍色條紋",
    "格式：區域代碼 + 徽章 + 數字",
    "區域縮寫（如 W 代表 Wien，G 代表 Graz）"
  ],
  unique: [
    "<strong>黑色頂蓋 bollard 搭配深色反光片</strong> — 只有 Austria 兩者兼具",
    "與 Germany 相比，Street View 覆蓋非常有限",
    "高山村莊配洋蔥圓頂教堂",
    "擋風玻璃上可見 Autobahn 通行貼紙",
    "官方建築上可見 Austria 國旗（紅白紅）"
  ],
  tips: [
    "黑色頂蓋 + 黑色/深紅色反光片 bollard = Austria（不是 Germany！）",
    "德語文字但 Street View 覆蓋比 Germany 少很多",
    "阿爾卑斯山 + 德語 + 有限覆蓋 = 很可能是 Austria",
    "注意車牌上的 Austria 區域代碼（W、G、L、S 等）",
    "🔗 <a href=\"https://www.google.com/maps/@48.2082,16.3738,3a,75y,90t\" target=\"_blank\" style=\"color:var(--accent-blue)\">Street View 範例（Vienna）</a>"
  ]
},

'belgium': {
  name: 'Belgium', localName: 'België / Belgique', flag: '🇧🇪', region: 'europe',
  drivingSide: 'right', tld: '.be', phoneCode: '+32', language: 'Dutch, French, German', currency: 'Euro (EUR)',
  camera: [
    "<strong>80.9% Gen 3 + 10.8% Gen 2 + 8.3% Gen 1</strong>",
    "<strong>100% Gen 3</strong>範圍最廣",
    "部分區域可見<strong>紅色車 + 長天線</strong>（非常罕見，Ukraine 更常見）",
    "全國覆蓋範圍廣泛",
    "⚠️ 有 Gen 4 小相機 (smallcam/low cam) 覆蓋（~8,000 點位）— 視角更低、模糊區域更大"
  ],
  car: [
    "Gen 2/3：白色轎車",
    "極罕見：<strong>紅色車 + 長天線</strong>覆蓋（Ukraine 更常見此款）",
    "⚠️ Gen 4：<strong>幾乎沒有藍色車</strong>（歐洲極少數無藍車國家，另有 Austria、Turkey）",
    "Gen 4：幾乎全部為<strong>「無車可見」（完全打碼）</strong> — 與 Austria、Switzerland 並列最常見",
    "Gen 4 無車：<strong>2021 和 2020 特別常見</strong> — 有助於與 Austria（2022 為主）區分",
    "無 antenna、無 snorkel、無 車頂架 (roof rack)"
  ],
  roads: [
    "以路況差聞名 — 柏油路面不均勻，坑洞多",
    "全白道路線（中線 + 邊線），可為連續或中斷",
    "鄉村道路常用<strong>混凝土板</strong>鋪設（類似菲律賓/泰國）— Netherlands 幾乎不用",
    "幾乎所有道路兩側都有<strong>排水溝</strong> — 鄰國不常見",
    "藍色高速公路標誌",
    "道路兩側常有自行車道，車道有短虛線邊線"
  ],
  bollardInfo: [
    "白色護柱，正面<strong>黃色矩形反光板</strong>，背面白色",
    "第二種：<strong>深棕色護柱</strong>，頂部有兩條紅色條紋（Netherlands 也有此款）",
    "⚠️ Denmark 類似白色護柱但頂部是一條紅色條紋，反光板非矩形",
    "護欄為 A 型，配<strong>黃色反光板</strong> — 歐洲僅 Spain、Andorra、Belgium 使用"
  ],
  poleInfo: [
    "混凝土方形電線杆，上有<strong>小孔</strong>，周圍常有小金屬包裹物",
    "第二種常見款：有<strong>橢圓形孔</strong>的混凝土杆",
    "小金屬包裹物也可在 France 找到"
  ],
  signInfo: [
    "STOP 標誌：<strong>STOP</strong>",
    "誘導標示：<strong>白底紅箭頭</strong>（Netherlands 也用此款，France 不用）",
    "行人標誌：無條紋但有兩條水平虛線，人物有<strong>方形頭</strong>（France/Netherlands 用五條垂直條紋）",
    "優先標誌菱形為<strong>橘色</strong>，比其他國家小得多",
    "路標常為<strong>橘色</strong>，標誌背面有時也是橘色 — Belgium 獨有",
    "公里標記通常為綠色，也可能有紅色文字",
    "紅色消防栓標誌頂部有字母 H（Germany 也有）",
    "交通燈杆為<strong>黑黃條紋</strong>",
    "巴士站為黃色路標，候車亭常有黃色屋頂"
  ],
  landscape: [
    "Flanders（北部）平坦，南部 Ardennes 丘陵森林山谷",
    "Flanders 都市區密集",
    "中世紀城市中心（Bruges、Ghent、Brussels）",
    "Flanders 常見紅磚建築，南部建築灰色石材偏法國風格",
    "北海沿岸排列公寓樓（建築物的「墻」），附近有沙丘景觀"
  ],
  signs: [
    "雙語或三語標誌（北部荷蘭語、南部法語、東部德語）",
    "Brussels 為雙語（荷蘭語/法語）",
    "注意城市名稱：Bruxelles/Brussel、Anvers/Antwerpen、Liège/Luik",
    "荷蘭語用 'straat'，法語用 'rue'",
    "街道名稱標誌多樣，常標註城鎮名稱，多為矮而高的設計（Netherlands 標誌則長而矮）",
    "方向標誌通常為藍色或白色，常附帶額外藍色小標誌",
    "Flanders 警告標誌 95% 為粗紅色輪廓無白邊；Wallonia 為細紅色輪廓有白邊"
  ],
  plates: [
    "白色車牌附 EU 藍色條紋",
    "格式：1-ABC-234（現行格式）",
    "紅色車牌為臨時登記"
  ],
  unique: [
    "<strong>橘色調 bollard</strong> 搭配白色主體 — Belgium 特有",
    "<strong>路況差</strong> — Belgium 的道路以品質差聞名",
    "語言邊界 — 北部（Flanders）荷蘭語，南部（Wallonia）法語",
    "Flanders 中世紀紅磚建築",
    "密集的道路網絡和都市蔓延",
    "街上常見 Frituren（薯條店）"
  ],
  tips: [
    "如果路況很差且看到荷蘭語或法語，考慮 Belgium",
    "橘色調 bollard 可與 Netherlands 和 France 區分",
    "Brussels 附近的雙語標誌（荷蘭語/法語）= Belgium",
    "平坦地形上的紅磚建築配荷蘭語文字 = Flanders",
    "🔗 <a href=\"https://www.google.com/maps/@50.8503,4.3517,3a,75y,90t\" target=\"_blank\" style=\"color:var(--accent-blue)\">Street View 範例（Brussels）</a>"
  ]
},

'bosnia': {
  name: 'Bosnia and Herzegovina', localName: 'Bosna i Hercegovina', flag: '🇧🇦', region: 'europe',
  drivingSide: 'right', tld: '.ba', phoneCode: '+387', language: 'Bosnian, Croatian, Serbian', currency: 'Convertible Mark (BAM)',
  camera: [
    "<strong>100% Gen 4</strong>（2025 年 11 月新增 Google 街景覆蓋）",
    "⚠️ Bosnia 直到 2025 年底才有官方 Google 覆蓋 — 非常新！",
    "與鄰國 Croatia/Serbia 相比覆蓋仍然有限"
  ],
  car: [
    "Gen 4：現代化 Google 街景車",
    "無 antenna、無 車頂架 (roof rack)"
  ],
  roads: [
    "右側行駛",
    "良好高速公路與粗糙鄉村道路混合",
    "白色中心線",
    "歐式道路標誌",
    "山路多彎道"
  ],
  landscape: [
    "全國大部分地區為山地地形",
    "深邃的河谷和峽谷",
    "Neretva 河谷為標誌性景觀（Mostar 地區）",
    "鄂圖曼和奧匈帝國建築混合",
    "清真寺和宣禮塔常見（穆斯林多數地區）",
    "Republika Srpska 有東正教教堂"
  ],
  signs: [
    "同時使用拉丁和西里爾文字（尤其在 Republika Srpska）",
    "Bosnian/Croatian 用拉丁文字，Serbian 用西里爾文字",
    "部分地區標誌可能同時有兩種文字",
    "地名常見 -evo、-ovo 結尾"
  ],
  plates: [
    "白色車牌附藍色 EU 風格條紋",
    "格式不含區域識別碼（避免族群緊張）"
  ],
  unique: [
    "<strong>拉丁和西里爾文字混合</strong> — 比 Serbia 更混合",
    "<strong>鄂圖曼清真寺 + 奧匈帝國建築</strong>在同一區域",
    "部分建築仍可見戰爭損壞（彈孔、彈片痕跡）",
    "實體劃分：Federation vs Republika Srpska",
    "宣禮塔 + 教堂尖塔在同一城鎮",
    "山脈覆蓋茂密綠色森林"
  ],
  tips: [
    "清真寺和教堂混合 + 斯拉夫語言 = Bosnia",
    "同一標誌上有拉丁和西里爾文字，強烈暗示 Bosnia",
    "山脈 + 鄂圖曼建築 + 戰爭損壞 = Bosnia",
    "價格標誌上的貨幣為 'KM'（可兌換馬克）",
    "🔗 <a href=\"https://www.google.com/maps/@43.8563,18.4131,3a,75y,90t\" target=\"_blank\" style=\"color:var(--accent-blue)\">Street View 範例（Sarajevo）</a>"
  ]
},

'bulgaria': {
  name: 'Bulgaria', localName: 'България', flag: '🇧🇬', region: 'europe',
  drivingSide: 'right', tld: '.bg', phoneCode: '+359', language: 'Bulgarian', currency: 'Lev (BGN)',
  camera: [
    "<strong>78% Gen 4 + 22% Gen 3</strong>",
    "Gen 4 覆蓋始於 2021 — 色彩鮮豔",
    "主要道路和城市覆蓋良好"
  ],
  car: [
    "Gen 4：<strong>藍色轎車 + 圓形天線</strong>（與 Sweden, Hungary, Romania, France 共用）",
    "Gen 4 藍車天線：<strong>2021 即出現</strong> — 歐洲最早一批（僅 Hungary、Sweden、少量 Romania/France）",
    "Gen 4：也有<strong>黑色轎車 + 圓形天線</strong>（2024）— 與 Lithuania 並列此配置最多國家",
    "Gen 4：也有<strong>紅色轎車</strong> — 紅車三大國之一（Sweden、Slovakia、Bulgaria）",
    "Gen 3：白色轎車，有天線",
    "多種車色在 Gen 4 中可見 — Bulgaria 是歐洲 Gen 4 車色最多樣的國家之一"
  ],
  roads: [
    "中心線比 Romania <strong>更細</strong> — 區分兩國的可靠線索",
    "道路品質普遍較差，裂縫多偶有坑洼",
    "高速公路使用綠色標誌"
  ],
  bollardInfo: [
    "路桩在 Bulgaria <strong>非常罕見</strong>",
    "有時可見類似 Croatia/Hungary 的設計：正面紅/粉反光條，背面白色反光條"
  ],
  poleInfo: [
    "圓柱型<strong>混凝土電線杆</strong>最常見，偶有梯子杆變種和木杆",
    "交錯排布的<strong>鉤子形絕緣子</strong>常見",
    "杆頂三個交錯絕緣子且鉤子<strong>垂直向上</strong> — 幾乎僅 Bulgaria"
  ],
  signInfo: [
    "誘導標：<strong>白底紅箭頭</strong>（Romania/Turkey/North Macedonia 也同款）",
    "⚠️ Serbia/Greece 用黑白誘導標",
    "指路牌：藍色箭頭設計，西里爾 + 拉丁字母雙行",
    "城鎮入口標志白色，雙行文字（西里爾 + 拉丁）",
    "行人標志 <strong>4 道條紋</strong> + 行人戴帽子 — 其他中東歐國家無此設計",
    "金屬垃圾桶形狀獨特（Turkey + 其他巴爾幹國家也有）"
  ],
  landscape: [
    "巴爾幹山脈東西橫貫中部，將國家分為兩半",
    "山脈以北大部分平坦至 Romania 邊境",
    "Rhodope 山脈從 Sofia 向東南延伸至 Greece",
    "東部黑海沿岸，Dobrich 省有風力發電機",
    "屋頂多橙色瓦片，角瓦有<strong>灰泥斑塊</strong>且常不平整",
    "郊區看起來較貧窮，房屋小而密集"
  ],
  signs: [
    "保加利亞文範例：<span class=\"script-sample\" style=\"font-size:1.2rem\">улица София Ъ</span> — Ъ 作為常見母音",
    "<strong>Bulgaria 西里爾文</strong> — 特殊字母：Ѝ（短 I）、Ъ（schwa 音）",
    "Bulgaria 被認為是西里爾字母的發源地",
    "標誌通常僅西里爾文，有時附拉丁轉寫",
    "沒有字母 Ы（Russian 有，Bulgarian 沒有）"
  ],
  plates: [
    "白色車牌附 EU 藍色條紋",
    "城市代碼：С（Sofia）、CT（Stara Zagora）、В（Varna）等",
    "車牌格式使用西里爾字母"
  ],
  unique: [
    "<strong>Bulgaria 西里爾文中 Ъ 是常用母音</strong>（不像 Russian 只是修飾符）",
    "<strong>Gen 4 覆蓋有多種車色</strong>（藍、黑、紅）",
    "Kazanlak 谷地可見玫瑰花田",
    "獨特建築風格的東正教教堂",
    "蘇聯時期混凝土公寓大樓",
    "黑海沿岸度假勝地"
  ],
  tips: [
    "西里爾文中 Ъ 頻繁作為母音使用 = Bulgarian（非 Russian）",
    "沒有 Ы 字母 = 不是 Russian，可能是 Bulgarian",
    "Gen 4 藍色車搭配圓形天線在西里爾文區域 = 可能是 Bulgaria",
    "注意店面上的 .bg 網域",
    "🔗 <a href=\"https://www.google.com/maps/@42.6977,23.3219,3a,75y,90t\" target=\"_blank\" style=\"color:var(--accent-blue)\">Street View 範例（Sofia）</a>"
  ]
},

'croatia': {
  name: 'Croatia', localName: 'Hrvatska', flag: '🇭🇷', region: 'europe',
  drivingSide: 'right', tld: '.hr', phoneCode: '+385', language: 'Croatian', currency: 'Euro (EUR)',
  camera: [
    "<strong>77% Gen 4 + 23% Gen 3</strong>",
    "Gen 3 覆蓋範圍廣泛",
    "海岸和內陸城市覆蓋良好",
    "⚠️ 有 Gen 4 小相機 (smallcam/low cam) 覆蓋（~5,000 點位）— 視角更低、模糊區域更大"
  ],
  car: [
    "Gen 4：<strong>藍色轎車 + 圓形天線</strong>（常見，屬天線多的中東歐群組）",
    "Gen 4 藍車天線：2023 無涵蓋（2023 天線排除 Slovakia、Hungary、Latvia、Estonia、Croatia）",
    "Gen 3：白色轎車",
    "Gen 3：<strong>側鏡有黃色貼紙</strong> — Croatia 獨有辨識特徵",
    "無 snorkel、無 車頂架 (roof rack)"
  ],
  roads: [
    "維護良好的高速公路（A1 Zagreb-Split 非常好）",
    "白色中線和邊線",
    "綠色高速公路標誌配白色文字",
    "主要高速公路上有收費站"
  ],
  bollardInfo: [
    "白色路桩帶<strong>黑色平行四邊形</strong>（內有紅/白反光貼紙），俯視為三角形",
    "⚠️ Hungary 類似但邊緣更圓潤；Lithuania 有橙色反光貼紙",
    "護欄為<strong>方形 B 型</strong> — 歐洲少數國家使用"
  ],
  poleInfo: [
    "圓柱形混凝土或木質電線杆，木杆上常有<strong>交替鉤子</strong>（類似 Latvia）"
  ],
  signInfo: [
    "轉向誘導標：<strong>白底紅箭頭</strong>或<strong>黃底紅箭頭</strong>兩種",
    "方向標志：<strong>黃底黑框鉛筆形</strong>（前南斯拉夫國家類似）",
    "斑馬線標志：行人<strong>繫腰帶</strong> + 5 條條紋（Slovenia 行人無腰帶）",
    "Istria 半島西部有 Croatian/Italian 雙語街道牌",
    "消防栓為<strong>藍色</strong>兩側各有兩個對角突起（Hungary 也有類似款）"
  ],
  landscape: [
    "Dalmatia 海岸 — 壯觀的懸崖、島嶼、地中海灌木",
    "亞得里亞海岸建築：米黃色磚塊 + 綠色百葉窗（類似 Italy 部分地區）",
    "內陸東北部平坦農業區（類似 Hungary/Serbia 西北部）",
    "Zagreb 北部和西部多山且農業豐富",
    "海岸紅瓦石造建築（Dubrovnik 風格）",
    "Istria 西北部有獨特<strong>紅色土壤</strong>",
    "南端多高大<strong>柏樹</strong>"
  ],
  signs: [
    "Croatian（拉丁文字）— 類似 Serbian 但無西里爾文",
    "特殊字元：č、ć、đ、š、ž；常見 'ije' 組合（Serbian 用 'e' 代替）",
    "路標遵循 EU 標準",
    "中北部地區城鎮名常以 <strong>-ec</strong> 結尾"
  ],
  plates: [
    "白色車牌附 EU 藍色條紋 + HR 代碼",
    "城市代碼：ZG（Zagreb）、ST（Split）、RI（Rijeka）、DU（Dubrovnik）"
  ],
  unique: [
    "<strong>Gen 3 車上的黃色後視鏡貼紙</strong> — Croatia 獨有特徵",
    "Bollard 反光片位置非常靠近頂部",
    "Dalmatia 海岸配紅瓦石造村莊",
    "棋盤格圖案（šahovnica）在徽章上",
    "亞得里亞海沿岸島嶼覆蓋",
    "地中海和歐陸風格混合"
  ,
    "路名使用 ulica（街道）、trg（廣場）、cesta（路）"
  ],
  tips: [
    "Gen 3 後視鏡上的黃色貼紙 = Croatia",
    "地中海海岸上的拉丁文字斯拉夫語言 = Croatia",
    "注意 č、ć、đ、š、ž 字元（Croatian 拉丁文字）",
    "紅瓦沿海城鎮 + 斯拉夫語言 = Dalmatia Croatia",
    "🔗 <a href=\"https://www.google.com/maps/@45.815,15.9819,3a,75y,90t\" target=\"_blank\" style=\"color:var(--accent-blue)\">Street View 範例（Zagreb）</a>"
  ]
},

'cyprus': {
  name: 'Cyprus', localName: 'Κύπρος / Kıbrıs', flag: '🇨🇾', region: 'europe',
  drivingSide: 'left', tld: '.cy', phoneCode: '+357', language: 'Greek, Turkish', currency: 'Euro (EUR)',
  camera: ["<strong>96% Gen 3 + 4% Gen 4</strong>（也有少量 shitcam）", "希臘區和土耳其區覆蓋良好", "⚠️ 有 Gen 4 小相機 (smallcam/low cam) 覆蓋（~3,000 點位）— 視角更低、模糊區域更大"],
  car: [
    "Gen 3：標準白色轎車",
    "無特殊車輛辨識特徵",
    "無 antenna、無 車頂架 (roof rack)"
  ],
  roads: [
    "<strong>左側行駛</strong>（前英國殖民地）",
    "英式道路基礎設施",
    "圓環常見",
    "黃色中心線和白色邊線",
    "路面品質良好"
  ],
  signInfo: [
    "標誌為<strong>雙語希臘文 + 英文</strong> — 與 Greece（僅希臘文）的關鍵區別",
    "北 Cyprus：標誌為<strong>土耳其語 + 英語</strong>（無希臘文）",
    "靠左行駛 + 雙語標誌 = Cyprus（Greece 靠右且通常僅希臘文）"
  ],
  landscape: [
    "地中海島嶼 — 乾燥、多岩地形",
    "中部 Troodos 山脈",
    "沿海地區有觀光基礎設施",
    "橄欖園和柑橘果園",
    "南部有希臘東正教教堂，北部有清真寺"
  ],
  signs: [
    "南部（Cyprus 共和國）使用希臘文字",
    "北 Cyprus（被佔領土）使用土耳其語",
    "英語廣泛作為第二語言使用",
    "標誌通常雙語（希臘語 + 英語）"
  ],
  plates: [
    "白色車牌附 EU 藍色條紋（南 Cyprus）",
    "紅色車牌為租賃/觀光車輛"
  ],
  unique: [
    "<strong>靠左行駛 + 希臘語</strong> — 獨特組合（Greece 為靠右行駛）",
    "英國殖民時期道路基礎設施",
    "希臘區和土耳其區之間的緩衝區（UN Green Line）",
    "地中海島嶼，乾燥多岩地形"
  ],
  tips: [
    "希臘文字 + 靠左行駛 = Cyprus（不是 Greece！）",
    "Greece 靠右行駛，Cyprus 靠左行駛",
    "英國風格圓環配希臘語標誌 = Cyprus",
    "🔗 <a href=\"https://www.google.com/maps/@35.1856,33.3823,3a,75y,90t\" target=\"_blank\" style=\"color:var(--accent-blue)\">Street View 範例（Nicosia）</a>"
  ]
},

'czechia': {
  name: 'Czech Republic', localName: 'Česká republika', flag: '🇨🇿', region: 'europe',
  drivingSide: 'right', tld: '.cz', phoneCode: '+420', language: 'Czech', currency: 'Koruna (CZK)',
  camera: [
    "<strong>96% Gen 3 + 4% Gen 4（也有少量 shitcam）</strong>",
    "也有少量 shitcam",
    "Gen 3 覆蓋範圍廣泛",
    "Gen 4 覆蓋可用（藍色車，無天線）"
  ],
  car: [
    "Gen 4：<strong>藍色轎車，無天線</strong> — <strong>2019 是重要 meta</strong>（歐洲僅 Ireland、Norway、Czechia 常見）",
    "Gen 4：<strong>黑色轎車 + 圓形天線</strong>（2023）",
    "Gen 4：也有<strong>紅色轎車</strong>（全新 2024，目前稀少）",
    "Gen 4 藍車無天線 2021：<strong>有涵蓋</strong>（中歐僅 Czechia，排除 Slovakia、Hungary 等）",
    "Gen 3：白色轎車，天線有膠帶",
    "Gen 3 有<strong>冬季涵蓋</strong>（積雪場景）"
  ],
  roads: [
    "維護良好的道路網絡",
    "白色中線和邊線",
    "測速照相常見"
  ],
  bollardInfo: [
    "Bollard：正面<strong>橘色雙反光鏡</strong>，背面白色反光鏡 — 僅 Czech/Slovakia 共有此設計",
    "護欄為特殊<strong>寬 B 型</strong> — 歐洲僅 Czech/Slovakia 使用"
  ],
  poleInfo: [
    "<strong>寬圓混凝土電線杆</strong>最常見，通常成對安裝（與 Slovakia 共有）；三叉戟杆頂僅 Czech/Slovakia 有",
    "鄉村地區木杆為主，城市區域則多為現代金屬杆"
  ],
  landscape: [
    "起伏丘陵和森林（Bohemia 景觀）",
    "東南部平坦的 Moravia",
    "城市中有巴洛克和哥德式建築",
    "紅瓦屋頂的村莊",
    "啤酒文化隨處可見（到處都是啤酒廠招牌）"
  ],
  signs: [
    "Czech 語 — 有 háček (ˇ) 變音符號：ě、š、č、ř、ž、ů、ý",
    "<strong>ř 為 Czech 獨有</strong> — 沒有其他語言使用此字母",
    "路標遵循 EU 標準",
    "里程標誌以 km 計"
  ],
  plates: [
    "白色車牌附 EU 藍色條紋 + CZ 代碼",
    "格式：區域代碼 + 數字/字母"
  ],
  unique: [
    "<strong>螢光橘色 bollard 搭配分裂反光片</strong>",
    "<strong>字母 ř</strong> — 任何標誌上看到 ř 就 100% 是 Czech",
    "楔形 bollard 設計（Slovakia 為弧形）",
    "全境哥德式和巴洛克建築",
    "Trdelník 和啤酒廣告常見"
  ,
    "<strong>漂亮的門牌號碼</strong> — Czech 的建築常有裝飾性門牌，紅色或藍色底色配白色數字",
    "路名使用 ulice（街道）、náměstí（廣場）、třída（大道）"
  ],
  tips: [
    "標誌上看到 ř？→ Czech Republic，絕無僅有",
    "螢光橘色 bollard 搭配分裂反光片 = Czech",
    "楔形 bollard（非弧形）可與 Slovakia 區分",
    "háček (ˇ) 變音符號常見：š、č、ž、ř",
    "🔗 <a href=\"https://www.google.com/maps/@50.0755,14.4378,3a,75y,90t\" target=\"_blank\" style=\"color:var(--accent-blue)\">Street View 範例（Prague）</a>"
  ]
},

'denmark': {
  name: 'Denmark', localName: 'Danmark', flag: '🇩🇰', region: 'europe',
  drivingSide: 'right', tld: '.dk', phoneCode: '+45', language: 'Danish', currency: 'Krone (DKK)',
  camera: [
    "<strong>82% Gen 4 + 9% Gen 3 + 9% Gen 2</strong>",
    "Gen 3 覆蓋範圍廣泛",
    "Gen 4 覆蓋（藍色車，無天線）",
    "⚠️ 有 Gen 4 小相機 (smallcam/low cam) 覆蓋（~2,000 點位）— 視角更低、模糊區域更大"
  ],
  car: [
    "Gen 4：<strong>藍色轎車，無天線</strong>（2019 涵蓋在 Denmark 也相當常見，但不如 Ireland/Norway/Czechia）",
    "Gen 2/3：白色轎車",
    "無 snorkel、無 車頂架 (roof rack)"
  ],
  roads: [
    "標線<strong>全部白色</strong>，常見<strong>雙白實線</strong>中線",
    "外側標線由<strong>小白色正方形</strong>組成 — Denmark 獨有",
    "藍色高速公路標誌配白色文字",
    "自行車基礎設施優良"
  ],
  bollardInfo: [
    "白色路桩配<strong>黃色反光器 + 深橙色條紋</strong> — Denmark 獨有",
    "也有綠色款式；⚠️ Belgium 類似但<strong>無橙色條紋</strong>",
    "護欄：<strong>B 型方形</strong>無反光器 — 歐洲極少國家用此型"
  ],
  poleInfo: [
    "街道電線杆<strong>較少見</strong>，鄉村主要為高架電力線路"
  ],
  signInfo: [
    "指示牌離地面低，被<strong>管道框架</strong>環繞 — Denmark 獨有",
    "誘導標：<strong>白底紅箭頭</strong>，通常離地面低",
    "人行道標志 <strong>5 條條紋</strong>，首尾條紋觸碰白三角邊緣",
    "公交站牌：黑黃色（舊版藍白色）"
  ],
  landscape: [
    "極度平坦 — 全世界最平坦國家之一",
    "風力發電機非常常見，農田主導景觀",
    "紅磚建築典型，屋頂橙色/深棕/黑色瓦片",
    "鄉村有<strong>茅草屋頂</strong>和木框架建築",
    "北海沿岸有沙丘"
  ],
  signs: [
    "Danish 語 — 使用 æ、ø、å（與 Norwegian 共用）",
    "Danish vs Norwegian：注意 'vej'（Danish）vs 'vei'（Norwegian）表示道路",
    "'gade' 表示街道（Danish），Norwegian 用 'gate'",
    "里程標誌以 km 計"
  ],
  plates: [
    "白色車牌附 EU 藍色條紋 + DK 代碼",
    "格式：AB 12 345"
  ],
  unique: [
    "<strong>Bollard 頂部有紅色條紋</strong>（vs Belgium 沒有）",
    "<strong>極度平坦地形</strong>配風力發電機",
    "文字中有 æ、ø、å — 可與 Swedish（å、ä、ö）區分",
    "到處都是紅磚建築",
    "幾乎每條路都有自行車道",
    "平坦農田，完全沒有山脈"
  ,
    "路名使用 gade（街道）、vej（路）、plads（廣場）、allé（林蔭道）"
  ],
  tips: [
    "平坦 + 紅磚 + Danish（æ、ø、å）= Denmark",
    "ø 是關鍵：Danish/Norwegian 用 ø，Swedish 用 ö",
    "完全平坦配風力發電機 = 很可能是 Denmark（Norway 有山脈）",
    "注意 'vej'（道路）以區分 Norwegian 的 'vei'",
    "🔗 <a href=\"https://www.google.com/maps/@55.6761,12.5683,3a,75y,90t\" target=\"_blank\" style=\"color:var(--accent-blue)\">Street View 範例（Copenhagen）</a>"
  ]
},

'estonia': {
  name: 'Estonia', localName: 'Eesti', flag: '🇪🇪', region: 'europe',
  drivingSide: 'right', tld: '.ee', phoneCode: '+372', language: 'Estonian', currency: 'Euro (EUR)',
  camera: [
    "<strong>51.9% Gen 3 + 48.1% Gen 2</strong>",
    "Gen 3 覆蓋比 Latvia/Lithuania 更廣（很多鄉村小路都有）",
    "Gen 3 常有<strong>綠色模糊</strong>（green tint）— Latvia/Lithuania 不常有"
  ],
  car: [
    "Gen 3：白色轎車，標準歐洲配置",
    "Gen 4 藍車天線 2023：<strong>無涵蓋</strong>（排除 Estonia、同時排除 Hungary、Slovakia、Latvia、Croatia）",
    "無特殊車輛辨識特徵"
  ],
  roads: [
    "外側線有時為<strong>短虛線</strong>（Lithuania 也有；Sweden 也用短虛線）",
    "護欄為標準 A 型<strong>無反光體</strong>（Latvia/Lithuania 護欄可能有反光體）"
  ],
  bollardInfo: [
    "圓形棒狀護柱，正面<strong>矩形反光條</strong>，背面<strong>兩個圓形反光器</strong>（白色或橙色）",
    "⚠️ Latvia/Lithuania 護柱外觀不同"
  ],
  poleInfo: [
    "<strong>圓木杆</strong>最常見，有時有對角支撐",
    "也有方形混凝土杆帶對角支撐（Lithuania 也有類似款）",
    "三叉戟杆頂：頂部一個 + 側面兩個絕緣體",
    "大多數木杆頂部有<strong>小金屬帽</strong>（類似北歐，Latvia 也偶有）"
  ],
  signInfo: [
    "誘導標：<strong>紅底白箭頭</strong>（Russia/Ukraine 也同款）",
    "⚠️ Latvia/Lithuania 相反：白底紅箭頭",
    "波羅的海三國共用藍色公里路標但角度不同 — Estonia 為<strong>垂直於道路</strong>、兩面有數字",
    "警告標志有細紅邊框，<strong>無白色輪廓</strong>（紅框延到邊緣）",
    "斑馬線標誌 <strong>3 條條紋</strong> + 高細節行人（Lithuania 也 3 條但行人較粗糙；Latvia 5 條）",
    "公交站牌上巴士有<strong>4 個窗戶</strong>（Latvia 5 個；Lithuania 同 Estonia）",
    "藍白條紋路標包裹物（Finland/Sweden 也有但 Estonia 較鬆散）",
    "路標為<strong>藍底白字</strong>帶白邊，箭頭後部垂直（Latvia 箭頭更有「風格感」）",
    "橢圓形標誌牌較常見（Russia 也有）"
  ],
  landscape: [
    "地形平坦到微幅起伏（全國僅 10% 超過 100m）",
    "茂密森林（近 50% 森林覆蓋率）",
    "沼澤/濕地區域",
    "波羅的海沿岸有島嶼",
    "建築以白磚 + 木頭為主，屋頂陡坡 + 波紋鐵皮",
    "Tallinn 老城中世紀/文藝復興建築",
    "Ida-Viru 有大量俄語少數民族，Narva 附近有俄語/Estonian 雙語標誌"
  ],
  signs: [
    "Estonian 語 — 芬蘭-烏戈爾語系（與 Finnish 相關，非斯拉夫語）",
    "特殊字元：<strong>õ</strong>（Estonian 獨有），另有 ä、ö、ü、š、ž",
    "與 Latvian 和 Lithuanian 非常不同",
    "雙母音常見（aa、ee、oo 等）"
  ],
  plates: [
    "白色車牌附 EU 藍色條紋 + EST 代碼",
    "格式：123 ABC"
  ],
  unique: [
    "<strong>字母 õ</strong> — 在歐洲語言中為 Estonian 獨有",
    "芬蘭-烏戈爾語系（非波羅的海/斯拉夫語系 — 與 Finnish 和 Hungarian 相關）",
    "中世紀 Tallinn 老城區",
    "數位化社會 — 注意電子服務標誌",
    "北歐和蘇聯時期建築混合"
  ],
  tips: [
    "標誌上看到 õ？= Estonia（唯一使用此字母的歐洲語言）",
    "如果看起來像 Finnish 但有 õ，就是 Estonian",
    "平坦森林地形 + 芬蘭-烏戈爾語 = Estonia",
    "非斯拉夫語，非波羅的海語言 — 與 Latvia/Lithuania 不同",
    "🔗 <a href=\"https://www.google.com/maps/@59.437,24.7536,3a,75y,90t\" target=\"_blank\" style=\"color:var(--accent-blue)\">Street View 範例（Tallinn）</a>"
  ]
},

'faroe-islands': {
  name: 'Faroe Islands', localName: 'Føroyar', flag: '🇫🇴', region: 'europe',
  drivingSide: 'right', tld: '.fo', phoneCode: '+298', language: 'Faroese, Danish', currency: 'Krone (DKK)',
  camera: ["<strong>95% Gen 3 + 5% Gen 4</strong>", "覆蓋有限 — 小型領地", "Gen 4 為黑色皮卡車前端有天線（Iceland 皮卡車無此天線）"],
  car: [
    "所有街景車均為<strong>黑色</strong>，車頂有<strong>純灰色行李架</strong>",
    "Gen 4：黑色皮卡車前端有天線（Iceland 皮卡車無此天線）",
    "Gen 4：也有<strong>卡車形狀完全打碼</strong>（invisible truck）— Iceland 也有，但 Faroe 打碼看起來偏黑色",
    "Gen 3：黑色車 + 灰色 roof rack",
    "Faroe = 黑車灰 rack；Iceland = 有天線 + 紅/白/藍條紋"
  ],
  roads: [
    "單線道配會車處常見",
    "島嶼間有隧道",
    "白色中線",
    "鄉村道路幾乎無路面標線"
  ],
  bollardInfo: [
    "路桩：<strong>塗黃漆的小木頭杆子</strong>，頂端有時塗紅",
    "護欄上有<strong>黃色反光片</strong> — 其他北歐國家都沒有黃色反光片"
  ],
  landscape: [
    "壯觀的峽灣和海崖",
    "無樹 — 島上幾乎沒有樹木",
    "綠草覆蓋的山脈",
    "草皮屋頂房屋 — 標誌性特徵",
    "到處都是羊",
    "水邊的小型彩色村莊"
  ],
  signs: [
    "Faroese 語（與 Icelandic 和古北歐語相關）",
    "部分標誌也使用 Danish",
    "特殊字元：ð、ø、á、í、ó、ú、ý"
  ],
  plates: [
    "白色車牌附 <strong>FO</strong> 國碼（非 EU 成員，無 EU 藍色條紋）",
    "格式：2 字母 + 3 數字",
    "與 Denmark 車牌相似但無 EU 藍色帶 — 有 FO 代碼即可確認"
  ],
  unique: [
    "<strong>草皮屋頂房屋</strong> — Faroe 標誌性特徵",
    "<strong>無樹景觀</strong> — 沒有樹木，只有草覆蓋的懸崖",
    "壯觀的海崖和峽灣",
    "羊比人多",
    "壯觀海岸線旁的極小村莊",
    "連接島嶼的海底隧道"
  ],
  tips: [
    "無樹綠色山脈 + 草皮屋頂房屋 = Faroe Islands（不是 Iceland）",
    "Iceland 有火山/荒蕪地形；Faroes 為翠綠",
    "Faroese 使用 ð 和 ø（Iceland 使用 ð 和 þ 但不用 ø）",
    "比 Iceland 小得多且更翠綠",
    "🔗 <a href=\"https://www.google.com/maps/@62.0079,-6.7904,3a,75y,90t\" target=\"_blank\" style=\"color:var(--accent-blue)\">Street View 範例（Torshavn）</a>"
  ]
},

'greenland': {
  name: 'Greenland', localName: 'Kalaallit Nunaat', flag: '🇬🇱', region: 'europe',
  drivingSide: 'right', tld: '.gl', phoneCode: '+299', language: 'Greenlandic, Danish', currency: 'Krone (DKK)',
  camera: [
    "<strong>100% Gen 3 + 非標準覆蓋</strong>",
    "覆蓋分佈在<strong>五十餘個互不相連的地區</strong>",
    "多數街景在西海岸南部，但海岸線其他部分也有覆蓋",
    "每個城鎮使用<strong>不同的街景車輛</strong>（雪地摩托、全地形車、拖拉機等）— 車輛是精確定位的關鍵",
    "也有大量<strong>船隻覆蓋</strong>"
  ],
  car: [
    "Nuuk：<strong>灰色</strong>街景車",
    "Sisimiut：<strong>雪地摩托</strong>，後視鏡豎直向上，天氣陰鬱",
    "Ilulissat：<strong>綠色全地形車</strong>，黑色支架，司機戴米黃色帽子，天氣晴朗",
    "Qaqortoq：<strong>紅色方形</strong>街景車，街景特別晴朗",
    "Aasiaat：亮紅色+黑色+白色摩托，大圓後視鏡，厚積雪正在融化",
    "Tasiilaq：全地形車兩側有<strong>巨大灰色扶手</strong>",
    "Maniitsoq：<strong>拖拉機</strong>拍攝",
    "每個城鎮的街景車輛不同 — 記住車輛是精確定位的關鍵"
  ],
  roads: [
    "靠右行駛",
    "鋪設道路極為有限 — 城鎮之間無公路連接",
    "每個定居點內的短程道路",
    "Kangerlussuaq 東側有白色大卡車拍攝的路段"
  ],
  landscape: [
    "<strong>彩色小木房</strong> — 分佈稀疏，顏色鮮豔（紅、藍、黃、綠）",
    "荒地、<strong>無高大樹木</strong>、大量山丘",
    "通常能看到雪",
    "主要城市有較大的極簡主義建築",
    "Kangerlussuaq 有獨特的乾燥沙土和細小灌木",
    "Tiilerilaaq 的房屋通常是灰色色調（與其他地方不同）",
    "地名中大量的 <strong>Q</strong> 和 <strong>-aq</strong> 結尾"
  ],
  signs: [
    "<strong>格陵蘭語</strong>（因紐特語系）— 地名中大量 Q、-aq 結尾",
    "也使用<strong>丹麥語</strong>",
    "標誌普遍非常稀少",
    "利用海的方向（東岸 vs 西岸）判斷位置"
  ],
  plates: [
    "白色車牌黑色文字，<strong>細紅色邊框</strong>",
    "車輛極少 — 很難看到車牌"
  ],
  unique: [
    "每個城鎮使用<strong>不同的街景車輛</strong> — 記住車輛是精確定位的關鍵",
    "<strong>彩色小木房</strong> — 紅、藍、黃、綠等鮮豔顏色",
    "<strong>無樹 + 荒涼 + 雪</strong>的北極景觀",
    "覆蓋分佈在五十餘個互不相連的地區",
    "大量<strong>船隻覆蓋</strong>（各種顏色和類型的船）",
    "地名中大量 Q 字母和 -aq 結尾",
    "Tiilerilaaq 獨特的灰色色調房屋"
  ],
  tips: [
    "彩色小木房 + 無樹荒涼北極景觀 = Greenland",
    "記住每個城鎮的街景車輛以精確定位",
    "Nuuk = 灰色車；Ilulissat = 綠色全地形車；Qaqortoq = 紅色方形車",
    "Maniitsoq = 拖拉機；Sisimiut = 雪地摩托",
    "利用海的方向判斷東岸 vs 西岸",
    "金字塔形山 + 蘇維埃建築 = 那是 Svalbard 不是 Greenland",
    "🔗 <a href=\"https://www.google.com/maps/@64.1814,-51.6941,3a,75y,90t\" target=\"_blank\" style=\"color:var(--accent-blue)\">Street View 範例（Nuuk）</a>"
  ]
},

'finland': {
  name: 'Finland', localName: 'Suomi', flag: '🇫🇮', region: 'europe',
  drivingSide: 'right', tld: '.fi', phoneCode: '+358', language: 'Finnish, Swedish', currency: 'Euro (EUR)',
  camera: [
    "<strong>36.5% Gen 3 + 34.1% Gen 2 + 14.9% Gen 4 + 14.5% Shitcam</strong>",
    "Gen 3 許多在<strong>秋季</strong>拍攝（秋色明顯）— 其他北歐 Gen 3 少見秋季",
    "<strong>Shitcam</strong>：低畫質相機，寬圓形打碼 + 棕色色調 — 歐洲僅 Finland",
    "Gen 4 也有「小相機」覆蓋（所有北歐都有）"
  ],
  car: [
    "Gen 3：白色轎車；西南部有<strong>略微傾斜長天線</strong>；中南部有<strong>完全無天線</strong>覆蓋",
    "Gen 4：<strong>黑色 pickup truck</strong> — Finland 獨有",
    "Gen 4 藍車：2024 稀少、2023 稀少、<strong>2021 無涵蓋</strong>（挪威-瑞典-芬蘭 50-50：2021 可排除 Finland）",
    "Gen 4 藍車天線：<strong>無</strong>（Finland 不在藍車天線群組中 — 北歐僅 Sweden 有天線）"
  ],
  roads: [
    "外側線<strong>始終為白色實線</strong>（Sweden/Norway 用虛線）",
    "中線多種：白色虛線、純黃線帶白虛線、雙黃線",
    "⚠️ 黃線正逐步淘汰，新覆蓋越來越少",
    "Åland 群島例外：使用虛線外線 + 紅色調路面",
    "鄉村碎石路常見"
  ],
  bollardInfo: [
    "較長<strong>黑白路桩</strong>，正面矩形白色反光板，背面兩白點，黑色條帶<strong>傾斜</strong>",
    "雪杆：<strong>橙色</strong>，靠近頂部有白圈（Sweden 更寬更高；Norway 在中間）",
    "Lapland 大路有<strong>兩個長反光條</strong>雪杆（2023+ 覆蓋）"
  ],
  poleInfo: [
    "木質電線杆為主，設計簡單但杆頂多樣，常附路燈",
    "路標有<strong>藍白條紋</strong>標記（Sweden 也有；Estonia 類似但更鬆散）"
  ],
  signInfo: [
    "交通標牌：<strong>黃色底色</strong>（Sweden/Iceland 也有；Norway 白底）",
    "紅邊標牌外側有<strong>黃色細邊</strong> — 其他北歐國家沒有",
    "誘導標：<strong>黑底黃箭頭</strong>（Sweden 為藍底黃箭頭）",
    "人行道標志：<strong>5 條條紋</strong>（Sweden/Norway 通常 4 條）",
    "公車站牌：藍白色或黃黑色兩種",
    "K-Market / S-Market 連鎖超市 — 僅 Finland"
  ],
  landscape: [
    "地形平坦到微幅起伏",
    "數千個湖泊（千湖之國）",
    "茂密的北方/針葉林（松樹、雲杉、白樺）",
    "冬季影像有積雪覆蓋",
    "Lapland：凍原和馴鹿",
    "傳統色彩（紅色、黃色）塗裝的木造房屋"
  ],
  signs: [
    "Finnish 語 — 芬蘭-烏戈爾語系，與斯堪地那維亞語言非常不同",
    "使用 ä 和 ö（但沒有 å — Swedish 有 å）",
    "雙子音和雙母音非常常見（kauppa、Helsinki、sauna）",
    "許多單字以 -nen、-la、-lä 結尾",
    "沿海地區有雙語標誌（Finnish/Swedish）"
  ],
  plates: [
    "白色車牌附 EU 藍色條紋 + FIN 代碼",
    "格式：ABC-123"
  ],
  unique: [
    "<strong>Finnish 語</strong> — 看起來完全不像斯堪地那維亞語（非印歐語系）",
    "<strong>數千個湖泊</strong>隨處可見",
    "有 ä 和 ö 但沒有 å（å 只出現在 Swedish 少數民族區）",
    "雙字母的超長單字",
    "傳統紅色木造房屋（赭紅色塗料）",
    "Lapland 有馴鹿警告標誌"
  ,
    "路名使用 katu（街道）、tie（路）、tori（廣場）— 芬蘭語非常不同於瑞典語"
  ],
  tips: [
    "Finnish 文字（不像斯堪地那維亞語）+ 湖泊 + 森林 = Finland",
    "沒有 å = Finnish（Swedish 區域有 å）",
    "到處都是雙母音/雙子音（kk、pp、tt、aa、oo）= Finnish",
    "森林/湖泊景觀中的紅色木造房屋 = Finland",
    "🔗 <a href=\"https://www.google.com/maps/@60.1699,24.9384,3a,75y,90t\" target=\"_blank\" style=\"color:var(--accent-blue)\">Street View 範例（Helsinki）</a>"
  ]
},

'france': {
  name: 'France', localName: 'France', flag: '🇫🇷', region: 'europe',
  drivingSide: 'right', tld: '.fr', phoneCode: '+33', language: 'French', currency: 'Euro (EUR)',
  camera: [
    "<strong>58.7% Gen 4 + 28.7% Gen 3 + 12.5% Gen 2 + 0.1% Gen 1</strong>",
    "Gen 4 有「小相機」(low cam) 覆蓋 — 視角更低，打碼為前方帶突起的大圓盤",
    "Gen 2 覆蓋（2008-2012）仍存在於部分區域",
    "Gen 1 極少量（僅在最早期覆蓋）"
  ],
  car: [
    "Gen 4：<strong>藍色轎車 + 圓形天線</strong>（2021 即出現 — 歐洲最早一批，僅 Hungary、Bulgaria、Sweden、少量 Romania）",
    "Gen 4 藍車無天線 2021：法國/英國/愛爾蘭最常見的西歐涵蓋年份",
    "Gen 4：也有電動車覆蓋 — 僅限 Frankfurt/Hamburg 及 Dublin/London",
    "Gen 2/3：白色轎車",
    "無 snorkel、無 車頂架 (roof rack)"
  ],
  roads: [
    "<strong>外側白色虛線間距極長</strong>（long dashes）— 法國典型特徵",
    "<strong>中線白色虛線也比一般更長</strong>",
    "⚠️ 法國獨有：<strong>中線虛線由兩個緊挨的白色方塊組成</strong>（不常見但 100% 法國）",
    "D 級道路（省道）以 'D' 為前綴編號，黃色小標牌顯示路號（法國獨有）",
    "護欄為 A 型，通常無反光板",
    "優良的道路網絡",
    "標誌杆常為<strong>扁平矩形</strong>（歐洲僅 Portugal、Spain、Andorra 也有）"
  ],
  bollardInfo: [
    "Bollard：<strong>圓柱形白色尖頂路樁</strong>，反光帶（灰色或紅色）環繞整個主體；另有雙窄反光帶變體（法國獨有）",
    "前法國殖民地（Senegal 等）也使用此 bollard 風格"
  ],
  poleInfo: [
    "<strong>電線桿</strong>：(1) 混凝土梯子桿（表面有階梯狀凹痕，「華夫餅桿」，Spain 也有）(2) 木桿和八邊形細金屬桿（農村常見）",
    "電線桿上有<strong>藍色矩形小金屬片</strong>（法國獨有，幾乎所有木桿和金屬桿都有）",
    "梯子桿頂部常有<strong>菱形三線杆頂</strong>（「法式杆頂」，Spain 也有）"
  ],
  signInfo: [
    "STOP 標誌：<strong>STOP</strong>",
    "誘導標：<strong>藍底白箭頭</strong>（1-5 個箭頭）— 歐洲僅 France 和 Spain 使用此配色"
  ],
  landscape: [
    "多樣化：巴黎盆地、阿爾卑斯山、庇里牛斯山、蔚藍海岸、大西洋沿岸",
    "Provence 的薰衣草花田",
    "許多地區遍布葡萄園",
    "城堡和石造村莊",
    "Normandy：半木造房屋、綠色農田"
  ],
  signs: [
    "French 語 — 重音符號：é、è、ê、ë、à、â、ç、ù、û、ü、î、ï、ô",
    "路標：白底紅框（危險）、藍色（資訊）、綠色（高速公路）",
    "'Rue' 表示街道、'Avenue'、'Boulevard'",
    "路柱上的公里標記"
  ],
  plates: [
    "2009 後（SIV 系統）：<strong>白色前車牌 + 白色後車牌</strong>，格式 AA-123-AA，EU 藍條 + F 代碼",
    "⚠️ <strong>2009 前舊版：後車牌為黃色</strong>（FNI 系統）— 仍有大量舊車使用黃色後車牌",
    "前車牌始終為白色，但後車牌可能是黃色（舊）或白色（新）",
    "右側可選區域識別碼（département 編號 + 地區標誌）",
    "黃色後車牌 + 法語 = France（非常強的辨識線索）"
  ],
  unique: [
    "<strong>法式圓柱形 bollard</strong>，反光帶環繞整個主體",
    "<strong>超長虛線邊線</strong> — 歐洲只有 France",
    "梯形電線桿配攀爬踏板",
    "鄉村道路上的公里標記（石柱）",
    "多樣化景觀 — 從阿爾卑斯山到地中海",
    "<strong>藥局綠色霓虹十字 (Croix Verte)</strong> — 幾乎每個城鎮都有，閃爍的綠色十字掛在店面外側",
    "<strong>Boulangerie（麵包店）</strong>招牌隨處可見 — 法國城鎮三要素：藥局、麵包店、咖啡館",
    "<strong>Tabac（菸草店）紅色菱形招牌</strong>",
    "<strong>狩獵牌 (panneaux de chasse)</strong> — 鄉村常見的小型標誌，標示狩獵區域",
    "路名：Rue、Avenue、Boulevard、Chemin、Impasse、Place"
  ],
  tips: [
    "法式 bollard 反光帶環繞整個圓柱",
    "超長白色虛線邊線 = France",
    "梯形電線桿 = France 或 Spain",
    "注意藥局綠十字和麵包店招牌",
    "🔗 <a href=\"https://www.google.com/maps/@48.8566,2.3522,3a,75y,90t\" target=\"_blank\" style=\"color:var(--accent-blue)\">Street View 範例（Paris）</a>"
  ]
},

'germany': {
  name: 'Germany', localName: 'Deutschland', flag: '🇩🇪', region: 'europe',
  drivingSide: 'right', tld: '.de', phoneCode: '+49', language: 'German', currency: 'Euro (EUR)',
  camera: [
    "⚠️ <strong>99.8% Gen 4</strong> — 德國幾乎全部是四代相機（2019年起拍攝）",
    "極少量 Gen 2 和 Gen 3 trekker 步行覆蓋",
    "部分舊覆蓋為跨國界溢出 (spillover) 街景",
    "⚠️ 因隱私法規，覆蓋範圍有限且房屋大量模糊"
  ],
  car: [
    "Gen 2/3：白色轎車",
    "Gen 4：涵蓋極為有限，也有 <strong>Gen 4 小相機</strong>（低相機，非常有限）",
    "Gen 4 藍車天線：<strong>2022 無涵蓋</strong>（2022 天線排除 Germany、Netherlands、Slovenia）",
    "Gen 4：也有<strong>電動車</strong>覆蓋 — 僅 Frankfurt am Main 和 Hamburg",
    "⚠️ 因隱私法規，涵蓋範圍有限（比 Austria 稍多）",
    "無 antenna、無 snorkel、無 車頂架 (roof rack)"
  ],
  roads: [
    "右側行駛",
    "<strong>白色中心線和邊線</strong>",
    "Autobahn — 部分路段無速限",
    "路面品質優良",
    "路牌背面通常為<strong>黑色或深灰色</strong>（歐洲少見，Italy、Romania、Albania 也有）",
    "路牌背面常有<strong>倒三角形紅色貼紙</strong>（黑底）",
    "每約 50 公尺就有一個路樁",
    "藍色矩形公里標記（白色邊框、圓角）",
    "城鎮入口標誌為<strong>黃色底 + 黑字 + 金屬框</strong>",
    "風力渦輪發電機比任何其他歐洲國家都普遍"
  ],
  bollardInfo: [
    "Bollard：<strong>黑白配色路樁</strong>，白色/淺灰色反光板（十字路口旁為橘色），側面常有藍色附件；Luxembourg 有類似路樁但螺栓為 3 個而非 2 個"
  ],
  poleInfo: [
    "<strong>電線桿</strong>：(1) 木桿上常有<strong>白色矩形貼紙</strong>（德國獨有）(2) 前東德地區有圓形混凝土桿",
    "杆頂多樣：水平桿配不對稱絕緣子、三角形杆頂、T 形杆頂等"
  ],
  signInfo: [
    "誘導標：<strong>白底紅箭頭</strong>（與 Austria 相同，但 Austria 另有黃底紅箭頭款）",
    "路牌：<strong>黃底黑框</strong>（Austria 為白底藍框 — 關鍵區別）",
    "城鎮入口標誌：<strong>黃色底 + 黑字 + 金屬框</strong>"
  ],
  landscape: [
    "北部：平原（北歐平原）",
    "中部：丘陵和森林",
    "南部：巴伐利亞阿爾卑斯山",
    "萊茵河/摩澤爾河谷：葡萄園、城堡",
    "許多地區有半木造房屋（Fachwerk）",
    "西部工業魯爾區"
  ],
  signs: [
    "德語 — ä、ö、ü、ß（Eszett）",
    "ß 非常獨特 — 很少其他語言使用",
    "'Straße'（街道）、'Weg'（路）、'Platz'（廣場）",
    "黃色菱形優先標誌",
    "藍色 Autobahn 標誌"
  ],
  plates: [
    "白色車牌附 EU 藍色條紋 + D 代碼",
    "城市/區域代碼在前（如 B=Berlin、M=München、HH=Hamburg）",
    "城市代碼和登記號之間有徽章"
  ],
  unique: [
    "<strong>德式 bollard 單側矩形反光片 + 背面圓形設計</strong>",
    "<strong>有限/模糊的 Street View</strong> — 許多房屋被模糊處理",
    "標誌上的 ß（Eszett）字元",
    "藍色標誌的 Autobahn",
    "半木造 Fachwerk 房屋",
    "Germany 是 Street View 限制最多的國家之一"
  ,
    "路名使用 Straße（街道）、Weg（路）、Platz（廣場）、Gasse（巷）",
    "<strong>狩獵區標誌</strong> (Jagdbezirk) — 德國鄉村可見"
  ],
  tips: [
    "德語文字 + 大量模糊房屋 = Germany（Austria 覆蓋更少）",
    "德式 bollard：單側反光片配黑色條紋，非 Austria 的黑色頂蓋風格",
    "注意文字中的 ß — 德語獨特字元",
    "藍色 Autobahn 標誌無速限 = Germany",
    "🔗 <a href=\"https://www.google.com/maps/@52.52,13.405,3a,75y,90t\" target=\"_blank\" style=\"color:var(--accent-blue)\">Street View 範例（Berlin）</a>"
  ]
},

'greece': {
  name: 'Greece', localName: 'Ελλάδα', flag: '🇬🇷', region: 'europe',
  drivingSide: 'right', tld: '.gr', phoneCode: '+30', language: 'Greek', currency: 'Euro (EUR)',
  camera: [
    "<strong>47% Gen 4 + 32% Gen 3 + 21% Gen 2</strong>",
    "許多 Gen 3 拍攝於秋冬季 — 景觀偏黯淡",
    "Gen 4 覆蓋持續擴展中",
    "⚠️ 有 Gen 4 小相機 (smallcam/low cam) 覆蓋（~17,000 點位）— 視角更低、模糊區域更大"
  ],
  car: [
    "Gen 4：<strong>黑色轎車無天線</strong> — Greece 擁有<strong>最多黑色車無天線</strong>的 Gen 4 覆蓋，遠超其他國家",
    "Greece 是唯一一個 Google 車<strong>從未有天線</strong>的歐洲國家",
    "Gen 4 藍車：2024 稀少（Greece 藍車整體偏少）",
    "Gen 4 黑車無天線 2022：僅見於 Italy 和極少量 Spain/Latvia — Greece 的黑車主要為 2023-2024",
    "Gen 4 無車可見：<strong>極少</strong>（Turkey 和 Greece 幾乎沒有完全打碼的情況）",
    "Gen 3 有天線（短或長）",
    "無 snorkel、無 車頂架 (roof rack)"
  ],
  roads: [
    "<strong>略微褪色的雙白色中線</strong>（可與其他地中海國家區分）",
    "<strong>黃色道路線</strong>比任何其他南歐國家都更常見",
    "警告標誌：<strong>紅色邊框 + 黃色背景</strong>",
    "道路品質不一 — 高速公路好，鄉村道路可能崎嶇",
    "山路多髮夾彎",
    "路邊常見<strong>微型教堂</strong>（小基座上的祈禱亭），希臘獨有"
  ],
  bollardInfo: [
    "Bollard：<strong>楔形路樁</strong>，正面近正方形<strong>紅色反光板</strong>，背面<strong>白色反光板</strong>"
  ],
  poleInfo: [
    "<strong>電線桿</strong>：幾乎全部為<strong>木製</strong>，深棕色，通常比其他國家更高",
    "杆頂獨特：<strong>竪琴形金屬框架</strong>（希臘獨有），常有五個垂直絕緣體"
  ],
  signInfo: [
    "STOP 標誌：<strong>STOP</strong>",
    "誘導標：<strong>黑底白箭頭</strong>（Albania、Italy、UK 也有）"
  ],
  landscape: [
    "多山的本土配地中海海岸線",
    "數千個島嶼（Cyclades、Dodecanese、Ionian 等）",
    "橄欖園和乾燥地中海植被",
    "島嶼上的白藍建築（Santorini/Mykonos 風格）",
    "古代遺跡和東正教教堂",
    "乾燥多岩地形"
  ],
  signs: [
    "希臘文範例：<span class=\"script-sample\" style=\"font-size:1.2rem\">Οδός Αθήνα Φ Θ Ψ Ω</span>",
    "<strong>希臘字母</strong> — Φ、Γ、Δ、Θ、Λ、Ξ、Σ、Ψ、Ω",
    "標誌通常雙語（希臘語 + 拉丁轉寫）",
    "希臘文部分字母與西里爾文相似但不同",
    "字元比西里爾文更圓潤"
  ],
  plates: [
    "白色車牌附 EU 藍色條紋 + GR 代碼",
    "格式：ABC-1234"
  ],
  unique: [
    "<strong>希臘字母</strong> — 唯一使用希臘文字的國家",
    "<strong>Google 街景車無天線</strong> — 所有年份一致",
    "<strong>方形紅色正面反光片 bollard</strong>",
    "白藍島嶼建築",
    "藍色圓頂東正教教堂",
    "到處都是橄欖園"
  ],
  tips: [
    "希臘文字 = Greece 或 Cyprus",
    "希臘語 + 靠右行駛 = Greece（Cyprus 為靠左行駛）",
    "任何年份 Google 街景車都無天線 = Greece",
    "乾燥多岩島嶼上的白藍建築 = Greek 島嶼",
    "🔗 <a href=\"https://www.google.com/maps/@37.9838,23.7275,3a,75y,90t\" target=\"_blank\" style=\"color:var(--accent-blue)\">Street View 範例（Athens）</a>"
  ]
},

'hungary': {
  name: 'Hungary', localName: 'Magyarország', flag: '🇭🇺', region: 'europe',
  drivingSide: 'right', tld: '.hu', phoneCode: '+36', language: 'Hungarian', currency: 'Forint (HUF)',
  camera: [
    "<strong>76% Gen 4 + 24% Gen 3（Gen 3 多在冬季拍攝，畫面灰暗）</strong>",
    "Gen 4 覆蓋（藍色車搭配圓形天線，或藍色車無天線）"
  ],
  car: [
    "Gen 4：<strong>藍色轎車 + 圓形天線</strong>（或無天線）",
    "Gen 4 藍車天線：<strong>2021 即出現</strong> — 歐洲最早一批（與 Bulgaria、Sweden、少量 Romania/France 並列）",
    "Gen 4 藍車天線：<strong>2023 無涵蓋</strong>（排除 Hungary、Slovakia、Latvia、Estonia、Croatia）",
    "Gen 4：2019 涵蓋相當常見（與 Denmark 類似，但不如 Ireland/Norway/Czechia）",
    "Gen 3：白色轎車，天線有膠帶",
    "Gen 3 有<strong>冬季涵蓋</strong>（積雪場景）"
  ],
  roads: [
    "路線全白色，<strong>自行車道線通常黃色</strong>",
    "良好的高速公路網（M 級道路）",
    "高速公路通行貼紙系統"
  ],
  bollardInfo: [
    "黑白楔形路桩，反光板<strong>前紅後白</strong>（藍色也常見）",
    "⚠️ Croatia 類似但反光板更近頂部且側面更薄"
  ],
  poleInfo: [
    "<strong>多孔混凝土電線桿</strong>，細孔延伸到地面",
    "⚠️ Poland 孔不到地面；Romania 孔更寬或更高"
  ],
  signInfo: [
    "誘導標：<strong>紅底白箭頭</strong>",
    "指路標志<strong>綠色</strong>帶綠邊白框（高速為藍色）",
    "路標異常<strong>高</strong>，用<strong>四螺栓</strong>呈高矩形固定 — 其他東歐少見",
    "行人標志：5 條條紋 + <strong>腰帶位置極低</strong> — Hungary 獨有",
    "綠色公里標記在大多數道路上可見",
    "道路編號在<strong>小盾形</strong>內"
  ],
  landscape: [
    "東南部匈牙利大平原（Alföld）非常平坦",
    "北部和西部為森林丘陵山脈",
    "Balaton 湖 — 中歐最大湖泊，周圍丘陵 + 旅遊區",
    "Hortobágy 普什塔：貧瘠潮濕天然草原",
    "房屋石建淺色 + 紅瓦屋頂",
    "巴洛克、新藝術和社會主義建築混合"
  ],
  signs: [
    "Hungarian（Magyar）— 芬蘭-烏戈爾語系，非印歐語系",
    "特殊字元：<strong>ő 和 ű（雙銳音符號）</strong> — Hungarian 獨有",
    "另有：á、é、í、ó、ö、ú、ü",
    "超長複合字",
    "地名：Budapest、Debrecen、Szeged"
  ],
  plates: [
    "白色車牌附 EU 藍色條紋 + H 代碼",
    "格式：ABC-123"
  ],
  unique: [
    "<strong>雙銳音符號 ő 和 ű</strong> — 只有 Hungarian 使用",
    "<strong>多孔混凝土電線桿</strong>（與 Romania 和 Poland 共有）",
    "平坦的大平原景觀",
    "Hungarian 語與任何鄰國不同",
    "溫泉浴場標誌常見",
    "辣椒粉廣告"
  ],
  tips: [
    "看到 ő 或 ű？= 100% Hungary",
    "Hungarian 看起來不像任何其他語言 — 非印歐語系",
    "平坦地形上的多孔混凝土電桿配 Hungarian 文字 = Hungary",
    "平坦農田 + 獨特語言 = 很可能是匈牙利大平原",
    "🔗 <a href=\"https://www.google.com/maps/@47.4979,19.0402,3a,75y,90t\" target=\"_blank\" style=\"color:var(--accent-blue)\">Street View 範例（Budapest）</a>"
  ]
},

'iceland': {
  name: 'Iceland', localName: 'Ísland', flag: '🇮🇸', region: 'europe',
  drivingSide: 'right', tld: '.is', phoneCode: '+354', language: 'Icelandic', currency: 'Króna (ISK)',
  camera: [
    "<strong>91.2% Gen 3 + 8.8% Gen 4</strong>",
    "部分 Gen 2 覆蓋",
    "覆蓋集中在 Route 1（環島公路）",
    "內陸高地覆蓋非常有限"
  ],
  car: [
    "Gen 4：<strong>皮卡車</strong>（非轎車） — 白色=7月、紅色=8月、<strong>藍色=9月</strong>",
    "Gen 4：也有<strong>卡車形狀完全打碼</strong>（invisible truck） — 最常見款",
    "⚠️ 如打碼卡車看起來偏黑色 → <strong>Faroe Islands</strong>（不是 Iceland）",
    "Gen 3：標準轎車，可見天線",
    "有時紅/白/藍條紋可見於車身",
    "與 Faroe Islands 不同（Faroe 有灰色 rack，無天線）"
  ],
  roads: [
    "公路使用<strong>全白線</strong>，外側實線或虛線，無黃線（有黃線考慮 Norway/Finland）",
    "單線道橋梁常見（單車道配會車灣）",
    "許多碎石/未鋪裝道路（F 級道路）",
    "Route 1 環島公路 = 繞島主要公路",
    "道路品質差異極大"
  ],
  bollardInfo: [
    "<strong>黃色路桩 + 白色反光板</strong> — 非常普遍，幾乎全國公路都有"
  ],
  signInfo: [
    "指路標志<strong>黃色</strong>，白色框顯示道路編號（虛線框 = 附近道路而非當前道路）",
    "鄉村方向標志用藍色或白色背景",
    "交通標志<strong>黃色底色</strong>（同 Sweden/Finland）",
    "誘導標：<strong>黑底黃箭頭</strong>（同 Norway/Finland；Sweden 為藍底黃箭頭）",
    "人行道標志 <strong>4 條條紋 + 淺黃色調</strong> — 歐洲唯一黃底人行道標志",
    "路牌<strong>白底黑字</strong>，常有薄金屬框連接路燈柱"
  ],
  landscape: [
    "火山地形 — 熔岩原、火山口、地熱區",
    "冰川和冰蓋",
    "到處都是瀑布",
    "樹木極少 — 大多是苔蘚覆蓋的熔岩",
    "可見地熱蒸汽噴口",
    "黑沙灘",
    "夏季有魯冰花（紫色）"
  ],
  signs: [
    "Icelandic — 使用 <strong>ð (eth) 和 þ (thorn)</strong> — 獨特字元",
    "另有：á、é、í、ó、ú、ý、æ",
    "與古北歐語相關，非常保守的語言",
    "路標：速限以 km/h 標示"
  ],
  plates: [
    "白色車牌附 IS 代碼",
    "格式：AB-123（舊版）或 AB-C12（新版）"
  ],
  unique: [
    "<strong>火山荒蕪景觀</strong> — 無樹木，苔蘚覆蓋的熔岩原",
    "<strong>字母 ð 和 þ</strong> — 現代只有 Iceland 使用 þ（thorn）",
    "<strong>黃色 bollard</strong> 搭配小型灰色反光片",
    "單線道橋梁配會車灣",
    "可見地熱活動（蒸汽、溫泉）",
    "夏季魯冰花田",
    "幾乎任何地方都沒有樹"
  ],
  tips: [
    "火山地形 + ð 和 þ 字元 = Iceland",
    "Faroe Islands 綠草如茵；Iceland 是荒蕪的火山岩",
    "單線道橋梁在 Iceland 非常常見",
    "黃色 bollard（歐洲其他地方找不到）",
    "🔗 <a href=\"https://www.google.com/maps/@64.1466,-21.9426,3a,75y,90t\" target=\"_blank\" style=\"color:var(--accent-blue)\">Street View 範例（Reykjavik）</a>"
  ]
},

'ireland': {
  name: 'Ireland', localName: 'Éire', flag: '🇮🇪', region: 'europe',
  drivingSide: 'left', tld: '.ie', phoneCode: '+353', language: 'English, Irish', currency: 'Euro (EUR)',
  camera: [
    "<strong>56.9% Gen 4 + 42.5% Gen 3</strong>",
    "Gen 4 覆蓋（藍色車，無天線）",
    "⚠️ 有 Gen 4 小相機 (smallcam/low cam) 覆蓋（~7,000 點位）— 視角更低、模糊區域更大"
  ],
  car: [
    "Gen 4：<strong>藍色轎車，無天線</strong> — <strong>2019 是重要 meta</strong>（歐洲僅 Ireland、Norway、Czechia 常見）",
    "Gen 4 藍車天線：<strong>無</strong>（Ireland 不在天線群組中）",
    "Gen 4：也有<strong>電動車</strong>覆蓋 — Dublin 市區及部分鄉村地區",
    "Gen 3：白色轎車",
    "無 snorkel、無 車頂架 (roof rack)"
  ],
  roads: [
    "靠左行駛",
    "<strong>黃色虛線邊線</strong> — Ireland 極獨特（UK 幾乎看不到，也見於 NZ/Spain 西部）",
    "白色中線",
    "速限以 km/h 標示",
    "鄉村小路中間常有<strong>一小塊草地</strong>（boreen）",
    "路邊<strong>雙黃線</strong>表示禁停（UK/Malta 也有）"
  ],
  bollardInfo: [
    "<strong>綠白相間路桩</strong> — 可區分 Ireland 和 UK"
  ],
  poleInfo: [
    "木質電線杆，側面常有<strong>水平細金屬棒線栓</strong>（UK 也有）",
    "電線杆上有<strong>黃色警示貼紙</strong>（僅雷電無小人；UK 貼紙有被雷擊的小人）",
    "也有<strong>黑色邊框矩形貼紙</strong>"
  ],
  signInfo: [
    "警示牌為<strong>黃色菱形</strong> — 歐洲唯一（常規禁令標誌仍為圓形/倒三角紅邊白底）",
    "誘導標：<strong>黑底橙箭頭</strong>（UK 為黑底白箭頭）",
    "讓行標寫 <strong>YIELD</strong>（UK 寫 GIVE WAY）",
    "官方標牌<strong>雙語</strong>：英語普通字體 + Irish 斜體",
    "行人過路標志也為黃色菱形（較少見）"
  ],
  landscape: [
    "翠綠起伏丘陵（翡翠島），到處是農田和樹籬",
    "西海岸崎嶇丘陵 + 低矮山脈 + 棕黃草地和裸露岩石",
    "中部和西部泥炭沼澤",
    "壯觀西部海岸線（Cliffs of Moher 地區）",
    "散落農舍，溫和潮濕氣候 — 看起來總是微陰"
  ],
  signs: [
    "英語為主，官方標牌<strong>雙語</strong>（英語 + Irish 斜體）",
    "愛爾蘭蓋爾語：'Sráid'（街道）、'Bóthar'（道路）",
    "Gaeltacht 地區：僅愛爾蘭語標誌",
    "三位數公路編號第一位數字表地區（逆時針繞 Dublin 遞增）"
  ],
  plates: [
    "白色前車牌、黃色後車牌",
    "格式：年份-郡代碼-數字（如 20-D-12345 = 2020, Dublin）",
    "郡代碼：D（Dublin）、C（Cork）、G（Galway）等"
  ],
  unique: [
    "<strong>綠白條紋 bollard，無反光片</strong>",
    "<strong>黃色虛線邊線</strong> — 非常獨特",
    "靠左行駛 + 歐元貨幣",
    "到處都是石牆",
    "極度翠綠的景觀",
    "Gaeltacht 地區的雙語標誌",
    "白色前車牌 + 黃色後車牌"
  ],
  tips: [
    "綠白 bollard 無反光片 = Ireland",
    "翠綠景觀中的黃色虛線邊線 = Ireland",
    "靠左行駛 + 英語 + 歐元 = Ireland（UK 用英鎊）",
    "比 UK 看起來更綠更濕",
    "🔗 <a href=\"https://www.google.com/maps/@53.3498,-6.2603,3a,75y,90t\" target=\"_blank\" style=\"color:var(--accent-blue)\">Street View 範例（Dublin）</a>"
  ]
},

'italy': {
  name: 'Italy', localName: 'Italia', flag: '🇮🇹', region: 'europe',
  drivingSide: 'right', tld: '.it', phoneCode: '+39', language: 'Italian', currency: 'Euro (EUR)',
  camera: [
    "<strong>57.3% Gen 3 + 24.4% Gen 4 + 18.3% Gen 2</strong>",
    "Campione d'Italia 飛地有低相機覆蓋 + 長天線 + 旗幟",
    "Gen 2 仍存在於部分舊覆蓋區域",
    "⚠️ 有 Gen 4 小相機 (smallcam/low cam) 覆蓋（~22,000 點位）— 視角更低、模糊區域更大"
  ],
  car: [
    "Gen 4：<strong>藍色轎車 + 圓形天線</strong>（地中海地區，與 Croatia、Slovenia 共用）",
    "Gen 4 藍車天線：常見（屬天線多的群組）",
    "Gen 4 黑車無天線：<strong>2022 僅見於 Italy</strong>（加極少量 Spain/Latvia） — 有用的年份 meta",
    "Gen 3：白色轎車",
    "無 snorkel、無 車頂架 (roof rack)"
  ],
  roads: [
    "右側行駛",
    "<strong>最常見劃線：無中線 + 白色實線外線</strong>（在地中海國家中獨特）",
    "護欄為<strong>雙層護欄</strong>（常見），護欄上使用<strong>紅色反光板</strong>（Spain 用黃色）",
    "護欄末尾獨特：變平變寬，向道路外側彎曲",
    "路牌背面為<strong>黑色或深灰色</strong>",
    "道路編號以 SS（國道）、SR（區道）、SP（省道）開頭",
    "Autostrada（高速公路）有收費站，標誌為綠色",
    "北部路面品質優，南部較差"
  ],
  bollardInfo: [
    "Bollard：<strong>三角形截面路樁</strong>，頂部黑色、下部白色，正面紅色反光條、背面白色反光條（Albania 也有）"
  ],
  poleInfo: [
    "<strong>電線桿</strong>：大量使用<strong>混凝土圓柱桿</strong>（地中海國家中獨特），木桿上常有<strong>白色貼紙</strong>",
    "最常見杆頂為<strong>混凝土三叉型</strong>"
  ],
  signInfo: [
    "STOP 標誌：<strong>STOP</strong>（S 字兩端較短，角度獨特 — 也見於 Albania）",
    "STOP 標誌：<strong>STOP</strong>",
    "誘導標：<strong>黑底白箭頭</strong>（Spain、Greece、Albania 也有）"
  ],
  landscape: [
    "北部阿爾卑斯山，亞平寧山脈貫穿中部",
    "地中海海岸",
    "Tuscany：起伏丘陵配柏樹",
    "Sicily 和 Sardinia 島嶼",
    "火山地區（Vesuvius、Etna）",
    "文藝復興和羅馬時期建築"
  ],
  signs: [
    "Italian 語 — 重音符號比 French/Spanish 少",
    "單字以母音結尾（a、e、i、o）",
    "'Via' 表示街道、'Piazza' 表示廣場",
    "綠色高速公路標誌、藍色資訊標誌"
  ],
  plates: [
    "白色車牌附 EU 藍色條紋 + I 代碼",
    "格式：AB 123 CD",
    "⚠️ <strong>前車牌是短版（方形）</strong>— 歐洲少見，與一般長方形不同",
    "後車牌是標準長方形",
    "前方形 + 後長方形的組合是 Italy 的強辨識特徵"
  ],
  unique: [
    "<strong>義大利 bollard 反光片到頂部有黑色條紋</strong>",
    "建築和景觀南北差異顯著",
    "Tuscany 的柏樹林蔭道路",
    "到處都是羅馬遺跡和文藝復興教堂",
    "Vespa 機車極為常見"
  ,
    "路名使用 Via（街道）、Piazza（廣場）、Corso（大道）、Vicolo（小巷）"
  ],
  tips: [
    "以母音結尾的 Italian 文字 + 地中海景觀 = Italy",
    "黑色條紋向上延伸的 bollard = Italy 或 Albania",
    "柏樹林蔭道路 = Tuscany, Italy",
    "注意路牌上的 'Via'、'Piazza'、'Corso'",
    "🔗 <a href=\"https://www.google.com/maps/@41.9028,12.4964,3a,75y,90t\" target=\"_blank\" style=\"color:var(--accent-blue)\">Street View 範例（Rome）</a>"
  ]
},

'kosovo': {
  name: 'Kosovo', localName: 'Kosova / Косово', flag: '🇽🇰', region: 'europe',
  drivingSide: 'right', tld: '.xk', phoneCode: '+383', language: 'Albanian, Serbian', currency: 'Euro (EUR)',
  camera: ["<strong>100% Gen 3</strong>（覆蓋有限）", "主要道路覆蓋持續擴展"],
  car: [
    "Gen 3：白色轎車",
    "無特殊車輛辨識特徵"
  ],
  roads: [
    "白色中心線（歐洲標準）",
    "右側行駛",
    "新舊高速公路混合",
    "歐式道路標誌",
    "路面品質持續改善中"
  ],
  signInfo: [
    "標誌為<strong>Albanian 語</strong>為主，部分地區有 Serbian 西里爾文雙語標誌",
    "⚠️ Kosovo vs Albania：Kosovo 有更多雙語（Albanian + Serbian）標誌，Albania 幾乎全部為 Albanian"
  ],
  landscape: [
    "西部和南部為山地地形",
    "中部 Kosovo 平原 — 平坦農業用地",
    "鄂圖曼時期清真寺和塞爾維亞東正教修道院",
    "新建築和蘇聯時期建築混合"
  ],
  signs: [
    "Albanian 語為主要語言（多數人口）",
    "部分地區使用 Serbian（西里爾文字）",
    "部分自治市有雙語標誌"
  ],
  plates: [
    "白色車牌附 RKS（Republic of Kosovo）代碼",
    "與 Serbian 車牌不同"
  ],
  unique: [
    "新獨立國家中的 Albanian 語",
    "Albanian 和 Serbian 文化標誌混合",
    "可見許多 KFOR/UN 車輛",
    "新高速公路建設",
    "Pristina 的 Newborn 紀念碑"
  ],
  tips: [
    "Albanian 文字 + 較小/較新國家感覺 = Kosovo",
    "Albanian 和 Serbian 文字/建築混合，可與 Albania 本國區分",
    "新道路和建設工程 = 很可能是 Kosovo",
    "🔗 <a href=\"https://www.google.com/maps/@42.6629,21.1655,3a,75y,90t\" target=\"_blank\" style=\"color:var(--accent-blue)\">Street View 範例（Pristina）</a>"
  ]
},

'latvia': {
  name: 'Latvia', localName: 'Latvija', flag: '🇱🇻', region: 'europe',
  drivingSide: 'right', tld: '.lv', phoneCode: '+371', language: 'Latvian', currency: 'Euro (EUR)',
  camera: ["<strong>73.5% Gen 3 + 26.5% Gen 2</strong>"],
  car: [
    "Gen 4：<strong>黑色轎車 + 圓形天線</strong>（2022 為主） — 少量黑車天線覆蓋",
    "Gen 4：也有<strong>紅色轎車</strong>（2022 為主） — 紅車稀疏分布",
    "Gen 4 藍車天線：<strong>2023 無涵蓋</strong>（排除 Latvia、同時也排除 Hungary、Slovakia、Estonia、Croatia）",
    "Gen 3：白色轎車"
  ],
  roads: [
    "道路品質不一，白色中線",
    "護欄 A 型帶<strong>白色或紅色反光體</strong>（Estonia 無；Lithuania 橙色）"
  ],
  bollardInfo: [
    "薄且略彎，正面矩形反光條 + 背面兩圓形反射器，傾斜黑條帶",
    "反光條下方常有<strong>數字</strong>"
  ],
  poleInfo: [
    "杆頂<strong>鉤形絕緣體交替排列</strong>（左-右-左）— 波羅的海獨特"
  ],
  signInfo: [
    "誘導標：<strong>白底紅箭頭</strong>（Estonia 相反：紅底白箭頭）",
    "公里路標<strong>平行於道路</strong>僅一面數字（Estonia 垂直；Lithuania 45° L 形）",
    "斑馬線 <strong>5 道條紋</strong> + 行人腿較長（Estonia/Lithuania 3 道）",
    "公交站牌巴士 <strong>5 窗</strong>（Estonia/Lithuania 4 窗）",
    "路牌箭頭更有<strong>風格感</strong>（Estonia/Lithuania 後部垂直）",
    "警告標志<strong>粗紅邊 + 細白輪廓</strong>"
  ],
  landscape: [
    "平坦波羅的海地形，Jelgava 以南更開闊少森林",
    "茂密松樹和白樺林",
    "Riga 有新藝術風格建築（波羅的海獨有）",
    "鄉村白磚 + 木頭建築，陡坡波紋鐵皮屋頂"
  ],
  signs: [
    "Latvian 語 — 波羅的海語言（與 Lithuanian 相關但不同）",
    "使用長音符號（garumzīmes）：ā、ē、ī、ū",
    "另有：ļ、ķ、ģ、ņ、š、ž、č",
    "許多單字以 -s、-a、-e、-is 結尾"
  ],
  plates: [
    "白色車牌附 EU 藍色條紋 + LV 代碼",
    "格式：AB-1234"
  ],
  unique: [
    "<strong>高細 bollard 搭配橘色反光片和數字</strong>",
    "Latvian 語帶長音符號（ā、ē、ī、ū）",
    "子音下方的獨特軟音符號：ļ、ķ、ģ、ņ",
    "平坦地形配松林"
  ],
  tips: [
    "長音符號（ā、ē、ī、ū）+ 子音軟音符號（ļ、ķ、ģ、ņ）= Latvian",
    "與 Lithuanian 不同 — Lithuanian 使用鉤形符號（ą、ę）和點（ė、ż）",
    "高細 bollard 帶數字 = Latvia",
    "🔗 <a href=\"https://www.google.com/maps/@56.9496,24.1052,3a,75y,90t\" target=\"_blank\" style=\"color:var(--accent-blue)\">Street View 範例（Riga）</a>"
  ]
},

'lithuania': {
  name: 'Lithuania', localName: 'Lietuva', flag: '🇱🇹', region: 'europe',
  drivingSide: 'right', tld: '.lt', phoneCode: '+370', language: 'Lithuanian', currency: 'Euro (EUR)',
  camera: ["<strong>71% Gen 4 + 29% Gen 3</strong>"],
  car: [
    "Gen 4：<strong>黑色轎車 + 圓形天線</strong>（2023-2024） — Lithuania 是黑車天線<strong>最多</strong>的國家",
    "Gen 4：也有<strong>紅色轎車</strong>（2023 為主） — 紅車稀疏分布",
    "Gen 4 藍車天線 2023：<strong>有涵蓋</strong> — 波羅的海中僅 Lithuania 有（Latvia/Estonia 2023 天線無）",
    "Gen 4 無車可見：常見（與 Latvia 類似，比 Estonia 多）",
    "Gen 3：白色轎車"
  ],
  roads: [
    "主要路線道路品質尚可",
    "白色中線"
  ],
  bollardInfo: [
    "Bollard：<strong>橘色反光片 + 白色背面反光片</strong>"
  ],
  poleInfo: [
    "<strong>方形混凝土桿</strong>配燈泡排列（1×1、2×2 或 3×3 格式）— Lithuania 獨有",
    "也有方形混凝土桿帶對角支撐（Estonia 也有類似款）"
  ],
  signInfo: [
    "誘導標：<strong>白底紅箭頭</strong>（與 Latvia 同款；Estonia 相反為紅底白箭頭）",
    "公里路標 <strong>45° 角 L 形</strong>（Estonia 垂直；Latvia 平行）",
    "斑馬線標誌 <strong>3 條條紋</strong> + 行人較粗糙（Estonia 也 3 條但行人更精細；Latvia 5 條）",
    "公交站牌巴士 <strong>4 窗</strong>（與 Estonia 相同；Latvia 5 窗）"
  ],
  landscape: [
    "平坦的波羅的海地形配緩坡",
    "Curonian Spit 的沙丘",
    "森林覆蓋率顯著",
    "許多湖泊（尤其在東部）",
    "Vilnius 的巴洛克建築"
  ],
  signs: [
    "Lithuanian 語 — 波羅的海語言",
    "使用鉤形符號：<strong>ą、ę</strong>，另有 ė（上方點）、ū、ų、š、ž、č",
    "與 Latvian 不同的變音符號（無長音符號）",
    "許多單字以 -as、-is、-us、-ys 結尾"
  ],
  plates: [
    "白色車牌附 EU 藍色條紋 + LT 代碼",
    "格式：ABC 123"
  ],
  unique: [
    "<strong>Lithuanian 變音符號</strong>：ą、ę（鉤形）、ė（點）、ū、ų",
    "橘色反光片 bollard 搭配白色背面反光片",
    "巴洛克風格的 Vilnius 老城區",
    "十字架山地標",
    "波羅的海語言，與 Latvian 相關但不同"
  ],
  tips: [
    "鉤形符號（ą、ę）+ 上方點（ė）= Lithuanian（Latvian 改用長音符號）",
    "以 -as、-is、-ys 結尾的單字 = Lithuanian",
    "橘色 bollard 反光片 = 可能是 Lithuania",
    "🔗 <a href=\"https://www.google.com/maps/@54.6872,25.2797,3a,75y,90t\" target=\"_blank\" style=\"color:var(--accent-blue)\">Street View 範例（Vilnius）</a>"
  ]
},

'luxembourg': {
  name: 'Luxembourg', localName: 'Lëtzebuerg', flag: '🇱🇺', region: 'europe',
  drivingSide: 'right', tld: '.lu', phoneCode: '+352', language: 'Luxembourgish, French, German', currency: 'Euro (EUR)',
  camera: ["<strong>68.7% Gen 4 + 31.2% Gen 2 + 0.1% Gen 3</strong>", "Gen 3 非常罕見，幾乎全部為 Gen 2 或 Gen 4"],
  car: [
    "Gen 4：<strong>白色轎車</strong> — 白色車三大國之一（Sweden、Turkey、Luxembourg）",
    "無特殊車輛辨識特徵"
  ],
  roads: [
    "右側行駛",
    "路面品質優良",
    "白色中心線"
  ],
  bollardInfo: [
    "Bollard：與 Germany 相同設計但反光板上<strong>3 個螺栓</strong>（Germany 為 2 個）",
    "誘導標：<strong>黑底黃箭頭</strong>（罕見藍底黃箭頭）— 鄰國均不使用此配色",
    "車牌為<strong>黃色長牌</strong>左側藍條 — 歐洲僅 Netherlands 也用黃色車牌"
  ],
  landscape: [
    "起伏丘陵和森林（北部 Ardennes）",
    "東部 Moselle 河谷（葡萄園）",
    "非常小的國家 — 容易穿越",
    "鄉村和現代都市區域混合"
  ],
  signs: [
    "三語：Luxembourgish、French 和 German",
    "路標通常為法語",
    "街道名稱可能為 Luxembourgish 或法語",
    "非常多元文化 — 可見多種語言"
  ],
  plates: [
    "白色車牌附 EU 藍色條紋 + L 代碼",
    "格式：AB 1234"
  ],
  unique: [
    "<strong>德式 bollard</strong>（與 Germany 相同設計）",
    "三語標誌",
    "非常富裕 — 現代化基礎設施",
    "可見銀行和金融機構",
    "極小的領土"
  ],
  tips: [
    "德式 bollard + 法語文字 = Luxembourg",
    "三語標誌（French/German/Luxembourgish）= Luxembourg",
    "看起來非常小且富裕",
    "🔗 <a href=\"https://www.google.com/maps/@49.6116,6.1319,3a,75y,90t\" target=\"_blank\" style=\"color:var(--accent-blue)\">Street View 範例（Luxembourg）</a>"
  ]
},

'malta': {
  name: 'Malta', localName: 'Malta', flag: '🇲🇹', region: 'europe',
  drivingSide: 'left', tld: '.mt', phoneCode: '+356', language: 'Maltese, English', currency: 'Euro (EUR)',
  camera: ["<strong>72.7% Gen 3 + 27.3% Gen 2</strong>", "以小面積來說覆蓋良好"],
  car: [
    "Gen 3：標準轎車",
    "靠左行駛（英國殖民遺產）",
    "無特殊車輛辨識特徵"
  ],
  roads: [
    "<strong>左側行駛</strong>（英國殖民遺產）",
    "狹窄城鎮街道",
    "黃色石牆沿路",
    "英式道路標誌"
  ],
  landscape: [
    "小型地中海島嶼 — 乾燥、多岩",
    "到處都是蜂蜜色石灰岩建築",
    "沒有河流或森林 — 非常乾旱",
    "設防的港口和教堂",
    "平坦到微幅丘陵地形"
  ],
  signs: [
    "Maltese 語 — 以拉丁文字書寫的閃語系語言",
    "英文廣泛使用",
    "雙語標誌（Maltese/英語）",
    "獨特字母：ħ、ġ、ċ、ż、għ"
  ],
  plates: [
    "白色車牌附 <strong>EU 藍色條紋 + M</strong> 國碼",
    "格式多樣（字母 + 數字組合）",
    "與其他 EU 國相似，靠 M 國碼辨識",
    "靠左行駛 + EU 車牌 = 地中海僅 Malta 和 Cyprus"
  ],
  unique: [
    "<strong>靠左行駛 + 地中海島嶼</strong>",
    "蜂蜜色石灰岩建築",
    "Maltese 語 — 唯一以拉丁文字書寫的閃語",
    "英國殖民遺產（郵筒、電話亭）",
    "極度密集的開發"
  ],
  tips: [
    "蜂蜜色石灰岩 + 靠左行駛 + 地中海 = Malta",
    "Maltese 文字帶 ħ、ġ = Malta",
    "非常小的島嶼 — 如果一切看起來古老且金色 = Malta",
    "🔗 <a href=\"https://www.google.com/maps/@35.8989,14.5146,3a,75y,90t\" target=\"_blank\" style=\"color:var(--accent-blue)\">Street View 範例（Valletta）</a>"
  ]
},

'moldova': {
  name: 'Moldova', localName: 'Moldova', flag: '🇲🇩', region: 'europe',
  drivingSide: 'right', tld: '.md', phoneCode: '+373', language: 'Romanian', currency: 'Leu (MDL)',
  camera: ["<strong>100% Gen 3</strong>（覆蓋主要道路）", "與 Romania 相比覆蓋有限"],
  car: [
    "Gen 3：白色轎車",
    "無特殊車輛辨識特徵"
  ],
  roads: [
    "右側行駛",
    "許多路面品質差",
    "白色中心線",
    "大量未鋪設/碎石鄉村道路"
  ],
  signInfo: [
    "標誌為<strong>Romanian 語</strong>（拉丁文字）— 與 Romania 相同語言但基礎設施更差",
    "Transnistria（東部分離區）：標誌為<strong>西里爾文</strong>（俄語），可見蘇聯符號和 Transnistria 旗幟",
    "⚠️ 拉丁文 Romanian 標誌 + 破舊基礎設施 = Moldova（不是 Romania）"
  ],
  landscape: [
    "起伏丘陵配葡萄園（主要葡萄酒產區）",
    "農業用地為主",
    "城市中有蘇聯時期建築",
    "基礎設施不如 Romania 發達",
    "Dniester 河（Transnistria 邊界）"
  ],
  signs: [
    "Romanian 語（與 Romania 相同）",
    "Transnistria（未獲承認的分離地區）使用西里爾文字",
    "Romanian 字元：ă、â、î、ș、ț"
  ],
  plates: [
    "白色車牌附 <strong>MD</strong> 國碼（無 EU 藍色條紋 — 非 EU 成員）",
    "格式：地區碼 + 字母 + 數字（如 C = Chișinău）",
    "<strong>Transnistria 有自己的車牌</strong>：附 PMR 代碼，與 Moldova 本土不同"
  ],
  unique: [
    "Romanian 語但明顯比 Romania 貧窮",
    "蘇聯時期建築與較舊的東正教教堂混合",
    "葡萄酒相關標誌和葡萄園",
    "Transnistria：西里爾文標誌，仍展示蘇聯符號"
  ],
  tips: [
    "Romanian 文字 + 蘇聯時期建築 + 差的基礎設施 = Moldova",
    "看到西里爾文 + 蘇聯符號，可能是 Moldova 的 Transnistria 地區",
    "不如 Romania 發達 — 更差的道路、更舊的建築",
    "🔗 <a href=\"https://www.google.com/maps/@47.0105,28.8638,3a,75y,90t\" target=\"_blank\" style=\"color:var(--accent-blue)\">Street View 範例（Chișinău）</a>"
  ]
},

'monaco': {
  name: 'Monaco', localName: 'Monaco', flag: '🇲🇨', region: 'europe',
  drivingSide: 'right', tld: '.mc', phoneCode: '+377', language: 'French', currency: 'Euro (EUR)',
  camera: ["<strong>55.9% Gen 2 + 44.1% Gen 3</strong>", "港灣有 Gen 3 trekker — 競技常見"],
  car: [
    "標準轎車（涵蓋極少）",
    "無特殊車輛辨識特徵"
  ],
  roads: [
    "白色中心線（歐洲標準）",
    "右側行駛",
    "狹窄城市街道",
    "隧道",
    "F1 賽道基礎設施可見"
  ],
  landscape: [
    "極度密集高層城市開發",
    "地中海海岸",
    "陡峭山坡",
    "F1 賽道區域",
    "Casino de Monte-Carlo 周邊"
  ],
  signs: ["法語", "Monaco 特有的停車和交通標誌"],
  plates: [
    "<strong>藍底白字</strong> — 歐洲極少見的藍色車牌（僅 Monaco 和 San Marino）",
    "歐洲最短車牌（約 260mm），僅 4 個字元",
    "格式：數字（無字母），非常小巧",
    "看到藍色小車牌 + 法語環境 = Monaco（San Marino 是義語環境）"
  ],
  unique: [
    "地中海沿岸極度密集的奢華都市環境",
    "F1 大獎賽賽道基礎設施",
    "到處都是豪車",
    "全世界第二小的國家"
  ],
  tips: [
    "極致奢華 + 微型地中海城市 + 法語文字 = Monaco",
    "到處都是賭場、遊艇和超跑",
    "🔗 <a href=\"https://www.google.com/maps/@43.7384,7.4246,3a,75y,90t\" target=\"_blank\" style=\"color:var(--accent-blue)\">Street View 範例（Monaco）</a>"
  ]
},

'montenegro': {
  name: 'Montenegro', localName: 'Crna Gora', flag: '🇲🇪', region: 'europe',
  drivingSide: 'right', tld: '.me', phoneCode: '+382', language: 'Montenegrin', currency: 'Euro (EUR)',
  camera: ["<strong>100% Gen 3</strong>", "主要路線覆蓋尚可"],
  car: [
    "Gen 3：白色轎車",
    "護柱有<strong>黑帽</strong>（類似 Austrian 風格）",
    "無特殊車輛辨識特徵"
  ],
  roads: [
    "白色中心線和邊線",
    "右側行駛",
    "山路多隧道",
    "沿海新高速公路 vs 粗糙山路"
  ],
  bollardInfo: [
    "白色路桩，<strong>頂部黑色</strong>，前面紅色反光條，背面白色反光條（Slovenia 也有類似款）"
  ],
  poleInfo: [
    "<strong>混凝土或金屬電線桿</strong> — 部分地區有獨特的弧形支架設計",
    "沿海和山區桿子風格不同，山區可見簡單木桿"
  ],
  signInfo: [
    "誘導標：<strong>白底黑箭頭</strong>和<strong>黃底紅箭頭</strong>兩種（Albania 為黑底白箭頭）",
    "A 型和 B 型護欄<strong>都有</strong> — 唯一兩者兼具的巴爾幹國家",
    "公路護欄通常<strong>生鏽</strong>",
    "街景覆蓋常見<strong>裂縫</strong>（圖片縫合問題）— Albania 也有但其他國家少見",
    "標誌主要為<strong>拉丁文字</strong>，部分地區（靠近 Serbia 邊境）可見西里爾文"
  ],
  landscape: [
    "壯觀的亞得里亞海岸線（Kotor 灣）",
    "崎嶇山脈",
    "Durmitor 國家公園",
    "海岸地中海植被",
    "東正教修道院"
  ],
  signs: [
    "Montenegrin 語（拉丁文字，類似 Croatian/Serbian）",
    "部分地區也可使用西里爾文",
    "字元：č、ć、đ、š、ž"
  ],
  plates: [
    "白色車牌附左側 <strong>藍色條紋 + MNE</strong> 國碼",
    "格式：城市代碼 + 字母 + 數字（如 PG = Podgorica, KO = Kotor）",
    "城市代碼可幫助定位區域",
    "與 Serbia（SRB）和 Croatia（HR）車牌格式類似，靠國碼區分"
  ],
  unique: [
    "黑色頂蓋 bollard（類似 Austria 但反光片不同）",
    "Kotor 灣 — 壯觀的峽灣狀海灣",
    "擁有壯觀海岸線的小型巴爾幹國家",
    "沿海地中海和山地文化混合"
  ],
  tips: [
    "壯觀海岸線 + 斯拉夫語（拉丁文字）+ 小國 = Montenegro",
    "Kotor 灣一眼就能辨認",
    "巴爾幹背景下的黑色頂蓋 bollard = 很可能是 Montenegro",
    "🔗 <a href=\"https://www.google.com/maps/@42.4304,19.2594,3a,75y,90t\" target=\"_blank\" style=\"color:var(--accent-blue)\">Street View 範例（Podgorica）</a>"
  ]
},

'netherlands': {
  name: 'Netherlands', localName: 'Nederland', flag: '🇳🇱', region: 'europe',
  drivingSide: 'right', tld: '.nl', phoneCode: '+31', language: 'Dutch', currency: 'Euro (EUR)',
  camera: [
    "<strong>90% Gen 4 + 7.3% Gen 3 + 2.3% Gen 2</strong>",
    "Gen 3 天空裂痕非常普遍",
    "Gen 4 覆蓋部分區域（黑色車尾部有時可見模糊故障）",
    "全國覆蓋範圍廣泛",
    "⚠️ 有 Gen 4 小相機 (smallcam/low cam) 覆蓋（~6,000 點位）— 視角更低、模糊區域更大"
  ],
  car: [
    "Gen 4：<strong>黑色轎車</strong>（部分涵蓋有車尾模糊故障）",
    "Gen 4：也有<strong>黑色轎車露出</strong>（exposed） — 方形外觀車尾可見，前部常見白色 — Netherlands <strong>獨有</strong>",
    "Gen 4 黑車天線：少量（2023），也見於 UK、Czechia",
    "Gen 4 藍車天線：<strong>2022 無涵蓋</strong>（排除 Netherlands、同時也排除 Germany、Slovenia）",
    "Gen 3：白色轎車",
    "無 snorkel、無 車頂架 (roof rack)"
  ],
  roads: [
    "純白道路線（中線 + 邊線），有時可見<strong>獨特的綠色中心線</strong>",
    "紅粉色柏油自行車道 — Netherlands 最具辨識度的道路特徵",
    "<strong>磚路</strong>在城市和農村都很常見，特定磚塊圖案非常普遍",
    "鄉村道路兩側常有<strong>磚砌隆起</strong>",
    "非常明顯的減速帶 — 長短交替白色警告條紋",
    "路面品質優良，道路基礎設施維護良好",
    "許多運河和橋梁"
  ],
  bollardInfo: [
    "簡單白色路桩，上有<strong>紅色反光板</strong>",
    "極少數情況有紅色帶尖頂的圓形法式護柱（紅色包裹物通常不環繞全柱）",
    "交通島路標常有較粗的<strong>黃色標筒</strong>",
    "農村道路有時有獨特的條紋障礙物"
  ],
  poleInfo: [
    "Netherlands 通常<strong>沒有電線杆</strong> — 可能看到大型電塔，但幾乎沒有街道級小型電線杆",
    "⚠️ 這是與 Belgium 的重要區別：Belgium 普遍使用電線杆"
  ],
  signInfo: [
    "STOP 標誌：<strong>STOP</strong>",
    "路標幾乎都是<strong>藍底白字</strong>（極少見黃色/白色/綠色）",
    "路標邊緣延伸到背面形成邊框 — <strong>Netherlands 獨有</strong>",
    "路標杆底常有<strong>黑白或藍白條紋</strong>標記",
    "小鎮入口標誌為<strong>藍色</strong>，常有精緻設計和框架，標註 gemeente/gem + 城市名",
    "公路標識：A 路白字紅框、N 路黑字黃框，路標為綠色",
    "⚠️ Belgium 路標多樣且常標城鎮名，Netherlands 路標很少標城鎮名"
  ],
  landscape: [
    "極度平坦（大部分低於或接近海平面）",
    "風車（傳統風車和現代風力發電機）常見",
    "到處都是運河和水道 — 水渠、溝渠、堤壩非常普遍",
    "圩田（填海造地）— 西部和北部有沼澤地景觀",
    "春季鬱金香花田",
    "紅褐色磚砌建築普遍，屋頂橙色或深灰色",
    "排屋非常普遍 — 近半住房為排屋",
    "Flevoland 全為 20 世紀填海造地 — 極其筆直的道路和農田",
    "南 Limburg 有低矮山丘（Netherlands 唯一的丘陵區）"
  ],
  signs: [
    "Dutch 語 — 看起來像英語和德語的混合，大量雙元音如 ij、ieu、oe",
    "'straat'（街道）、'weg'（路）、'laan'（大道）、'pad'（小徑）、'plein'（廣場）",
    "Friesland 省有雙語標誌（Dutch/Frisian），街名可能以 -wei 或 -strjitte 結尾",
    "Amsterdam 路標在街名下方以小字標註市區 — 其他城市少見"
  ],
  plates: [
    "黃色車牌（後方）— 非常獨特！",
    "白色前車牌",
    "格式：XX-XXX-X（字母和數字混合）"
  ],
  unique: [
    "<strong>黃色後車牌</strong> — 非常容易辨認",
    "<strong>極度平坦配運河</strong>和風車",
    "世界級自行車基礎設施 — 紅色自行車道",
    "可見 Dutch 語",
    "運河上的船屋",
    "平坦、低於海平面，可見水利基礎設施"
  ,
    "路名使用 straat（街道）、weg（路）、laan（大道）、plein（廣場）、gracht（運河街）"
  ],
  tips: [
    "黃色後車牌 = Netherlands（最獨特的特徵）",
    "平坦 + 運河 + 自行車道 + Dutch = Netherlands",
    "紅色柏油自行車道 = Netherlands",
    "不要與 Belgium 混淆 — Netherlands 更平坦且維護更好",
    "🔗 <a href=\"https://www.google.com/maps/@52.3676,4.9041,3a,75y,90t\" target=\"_blank\" style=\"color:var(--accent-blue)\">Street View 範例（Amsterdam）</a>"
  ]
},

'north-macedonia': {
  name: 'North Macedonia', localName: 'Северна Македонија', flag: '🇲🇰', region: 'europe',
  drivingSide: 'right', tld: '.mk', phoneCode: '+389', language: 'Macedonian, Albanian', currency: 'Denar (MKD)',
  camera: ["<strong>100% Gen 3</strong>", "覆蓋主要道路和部分城市"],
  car: ["Gen 3 白色轎車，<strong>永遠沒有天線</strong>",
    "⚠️ 歐洲僅 North Macedonia 的 Gen 3 完全無天線（Serbia 也大概率無天線）"
  ],
  roads: [
    "道路品質不一",
    "白色中線"
  ],
  bollardInfo: [
    "兩種路桩：圓形薄款 + 厚平款，均白色 + 黑色部分有紅/白反光板（Croatia 同款楔形）",
    "護欄為 A 型帶<strong>紅色反光器</strong>（Serbia 用 B 型）",
    "警告標志使用<strong>黃色背景</strong> — 歐洲僅 North Macedonia 和 Greece 常用"
  ],
  landscape: [
    "山地地形",
    "Ohrid 湖 — UNESCO 世界遺產",
    "Vardar 河谷",
    "鄂圖曼和拜占庭建築混合"
  ],
  signs: [
    "<strong>Macedonian 西里爾文</strong> — 使用：Ѓ、Ѕ、Ј、Љ、Њ、Ќ、Џ",
    "類似 Serbian 西里爾文但有獨特字母",
    "西部地區也使用 Albanian",
    "標誌有時雙語（Macedonian/Albanian）"
  ],
  plates: [
    "白色車牌附 MK 代碼",
    "城市代碼：SK（Skopje）、OH（Ohrid）、BT（Bitola）"
  ],
  unique: [
    "Macedonian 西里爾文有獨特字母（Ѓ、Ќ 不同於 Serbian 的 Ђ、Ћ）",
    "Ohrid 湖 — 清澈的古老湖泊",
    "斯拉夫和 Albanian 文化混合",
    "鄂圖曼橋梁和老市集"
  ],
  tips: [
    "西里爾文有 Ѓ 和 Ќ（非 Ђ 和 Ћ）= Macedonian，不是 Serbian",
    "Ohrid 湖 + 西里爾文 = North Macedonia",
    "雙語西里爾文/Albanian 標誌 = 很可能是 North Macedonia",
    "🔗 <a href=\"https://www.google.com/maps/@42.0024,21.4361,3a,75y,90t\" target=\"_blank\" style=\"color:var(--accent-blue)\">Street View 範例（Skopje）</a>"
  ]
},

'norway': {
  name: 'Norway', localName: 'Norge / Noreg', flag: '🇳🇴', region: 'europe',
  drivingSide: 'right', tld: '.no', phoneCode: '+47', language: 'Norwegian', currency: 'Krone (NOK)',
  camera: [
    "<strong>85.6% Gen 3 + 9.8% Gen 2 + 4.6% Gen 4</strong>",
    "Gen 3 覆蓋範圍廣泛",
    "Gen 4 覆蓋（藍色車，無天線）— 也有「小相機」低角度覆蓋"
  ],
  car: [
    "Gen 4：<strong>藍色轎車，無天線</strong> — <strong>2019 是重要 meta</strong>（歐洲僅 Ireland、Norway、Czechia 常見）",
    "Gen 4 藍車天線：<strong>無</strong>（Norway 不在天線群組中 — 北歐僅 Sweden 有天線）",
    "Gen 4 藍車 2023：稀少，僅 Norway 南部有涵蓋",
    "Gen 3：白色轎車",
    "無 snorkel、無 車頂架 (roof rack)"
  ],
  roads: [
    "大路外側<strong>白色實線</strong>，中線<strong>黃橙色虛線</strong>；小路為白色長虛線",
    "邊線有時為<strong>點狀</strong>",
    "峽灣地區的單線道，許多隧道",
    "⚠️ Sweden 全白線外虛線較短；Finland 外側總為實線"
  ],
  bollardInfo: [
    "細長彎曲矩形路桩，內嵌<strong>黑色平行四邊形反光板</strong>",
    "雪杆：<strong>橙色</strong>，中間極細白色反光條（Sweden 更寬更高；Finland 在頂部）",
    "<strong>木質雪杆</strong>帶反光片（其他北歐木質雪杆無反光片）",
    "護欄常有<strong>木質支柱</strong>（Sweden/Finland 不常見）",
    "Bergen-Trondheim 間常見<strong>黑色雪杆</strong>；西南沿海常見<strong>生鏽護欄</strong>"
  ],
  poleInfo: [
    "木質電線杆為主，頂部有<strong>小型黑色金屬帽</strong>（Sweden/Finland 也有）"
  ],
  signInfo: [
    "轉向誘導標：<strong>黑底黃箭頭</strong>",
    "指路標：<strong>黃底黑框</strong>，編號綠色框（高速/主道）或白色框（小路）",
    "交通標志：<strong>白底紅邊</strong>（Sweden/Finland 為黃底）",
    "公交車牌：藍底白色公車圖（Sweden 無此標志）",
    "藍底白色 M — M 中點延到底部（Sweden M 中點不到底）",
    "路名標志在標志柱<strong>居中</strong>（Sweden 附在柱側）",
    "人行道標志通常<strong>4 條線</strong>，也有 5 條或戴帽子版",
    "小路牌被<strong>四個可見釘子</strong>釘起"
  ],
  landscape: [
    "壯觀峽灣 — Bergen-Trondheim 間高山環繞",
    "Lofoten 群島陡峭多岩山脈",
    "東南 Oslo 附近相對平坦大農田",
    "Stavanger 南部平坦農田 + 圓石牆",
    "木造房屋為主 — 比 Sweden/Finland 多<strong>黑色和白色</strong>房屋",
    "傳統<strong>草屋頂</strong>（Sweden/Finland 較少）",
    "南部海岸全白木屋整村出現",
    "木板教堂（中世紀木造教堂）"
  ],
  signs: [
    "Norwegian — 使用 <strong>æ、ø、å</strong>（與 Danish 共用）",
    "'vei/veien'（道路）、'gate/gata'（街道）— vs Danish 'vej'/'gade'",
    "北部有 Sami 語雙語標誌（字母 Á、Đ + 多連續元音）",
    "兩種書面形式：Bokmål 和 Nynorsk",
    "道路編號第一位數字取決於地區"
  ],
  plates: [
    "白色車牌附藍色條紋 + N 代碼",
    "格式：AB 12345"
  ],
  unique: [
    "<strong>Bollard 頂部附近有斜向黑色條紋</strong>",
    "<strong>壯觀峽灣景觀</strong> — 山脈與水交匯",
    "穿越山脈的長隧道",
    "Norwegian 語：'vei' 非 'vej'（與 Danish 的區別）",
    "木板教堂（中世紀木造教堂）",
    "北部有北極覆蓋（Tromsø、Nordkapp）"
  ,
    "路名使用 gate/gata（街道）、vei/veien（路）、plass（廣場）"
  ],
  tips: [
    "æ、ø、å + 山脈/峽灣 = Norway（不是平坦的 Denmark）",
    "'vei'（道路）= Norwegian；'vej'（道路）= Danish",
    "壯觀山脈 + 峽灣 + 斯堪地那維亞語言 = Norway",
    "斜向黑色 bollard 條紋可與其他北歐國家區分",
    "🔗 <a href=\"https://www.google.com/maps/@59.9139,10.7522,3a,75y,90t\" target=\"_blank\" style=\"color:var(--accent-blue)\">Street View 範例（Oslo）</a>"
  ]
},

'svalbard': {
  name: 'Svalbard', localName: 'Svalbard', flag: '🇸🇯', region: 'europe',
  drivingSide: 'right', tld: '.sj', phoneCode: '+47', language: 'Norwegian', currency: 'Krone (NOK)',
  camera: [
    "<strong>100% Trekker（徒步拍攝）</strong>",
    "北冰洋群島，挪威主權",
    "在國家連勝中視作挪威",
    "覆蓋僅限於少數定居點和周邊區域"
  ],
  car: [
    "無街景車 — 全部為<strong>徒步拍攝者</strong>和<strong>船隻</strong>覆蓋",
    "部分覆蓋中 Trekker 抓住一輛紅色汽車",
    "有時可見<strong>黑色後視鏡</strong>在左側"
  ],
  roads: [
    "靠右行駛（挪威領土）",
    "鋪設道路極為有限 — 主要在朗伊爾城（Longyearbyen）內",
    "大部分覆蓋為步道和非鋪設路徑"
  ],
  landscape: [
    "<strong>荒蕪無樹的山脈</strong> — 植被非常罕見，大部分為苔蘚和野草",
    "天空經常<strong>陰雲密布</strong>，整體感覺陰沉",
    "朗伊爾城：方正簡約的建築",
    "皮拉米登（Pyramiden）：荒涼的蘇維埃風格公寓，可見<strong>金字塔形山脈</strong>",
    "巴倫支堡（Barentsburg）：最荒涼，山頂附近有色彩鮮豔的公寓，天氣更陰沉",
    "斯匹次卑爾根西北國家公園有大船覆蓋"
  ],
  signs: [
    "挪威語",
    "有時可在標誌上看到<strong>俄語</strong>（蘇聯時期遺留影響）",
    "標誌極為有限"
  ],
  plates: [
    "<strong>黑底黃字</strong>車牌",
    "與挪威本土的白色車牌完全不同"
  ],
  unique: [
    "<strong>荒蕪無樹的北極山脈</strong> — 全球最北的定居點之一",
    "<strong>黑底黃字車牌</strong> — 與挪威本土不同",
    "皮拉米登的<strong>金字塔形山脈</strong>和荒廢蘇維埃建築",
    "標誌上的<strong>俄語</strong>文字",
    "朗伊爾城的方正簡約建築",
    "各種<strong>船隻覆蓋</strong>（紅色小船、木甲板船、黑色甲板船等）"
  ],
  tips: [
    "荒蕪無樹的北極山脈 + 挪威語/俄語 = Svalbard",
    "黑底黃字車牌 = Svalbard（非挪威本土）",
    "金字塔形山脈 + 蘇維埃建築 = 皮拉米登",
    "最荒涼 + 山頂彩色公寓 = 巴倫支堡",
    "方正簡約建築 + 最大定居點 = 朗伊爾城",
    "🔗 <a href=\"https://www.google.com/maps/@78.2232,15.6267,3a,75y,90t\" target=\"_blank\" style=\"color:var(--accent-blue)\">Street View 範例（Longyearbyen）</a>"
  ]
},

'poland': {
  name: 'Poland', localName: 'Polska', flag: '🇵🇱', region: 'europe',
  drivingSide: 'right', tld: '.pl', phoneCode: '+48', language: 'Polish', currency: 'Złoty (PLN)',
  camera: [
    "<strong>70% Gen 4 + 30% Gen 3</strong>",
    "全國覆蓋範圍廣泛"
  ],
  car: [
    "Gen 3：白色轎車，標準歐洲配置",
    "Gen 4：藍色車（有天線和無天線均有），藍車天線在中東歐偏少但 Poland 有一些",
    "Gen 4 藍車天線：<strong>2022 很少</strong>（也少見於 Sweden）",
    "Gen 4 藍車 2023：比 2022 少（Poland 更多 2022 涵蓋）"
  ],
  roads: [
    "道路劃線<strong>全白</strong>，<strong>雙白實線</strong>中線非常常見（Denmark/Greece 也有）",
    "道路兩旁常<strong>成排種植樹木</strong>",
    "高速公路路面優良，鄉村路面差",
    "磚鋪人行道常見（灰色/淺紅色方磚）"
  ],
  bollardInfo: [
    "路桩上側有<strong>紅色條帶環繞</strong>，正面紅色反光條，背面白色反光條 — Poland 特有",
    "護欄為<strong>方形 B 型</strong>帶<strong>圓形紅色反光板</strong> — 歐洲少數國家使用"
  ],
  poleInfo: [
    "混凝土細杆帶<strong>貫穿孔洞</strong>（多孔電線杆），洞不延到底部 — Poland 獨特",
    "有時兩組孔洞交叉或兩根杆做 A 形結構",
    "⚠️ Hungary/Romania 也有多孔杆但更寬大且孔延到底部",
    "杆上有黃色/黑色/白色標記，分布有地區特徵"
  ],
  signInfo: [
    "警告標志：<strong>黃色背景 + 細長紅邊</strong> — 歐洲此組合僅 Poland",
    "禁止標志：白色背景 + 較厚紅框",
    "人行橫道標志：無斑馬線，用<strong>一條水平線</strong>代替（Austria/Belgium 用兩條）",
    "指路標志：<strong>綠色背景</strong>獨特字體（高速公路為藍色）",
    "城鎮入口：綠色地名標志 + 黑白城區天際線標志",
    "誘導標：<strong>白底紅箭頭</strong>",
    "路邊常見<strong>天主教神龛</strong>和藍白/黃白教旗"
  ],
  landscape: [
    "中部/北部平坦，南部多山（Tatra 山脈）",
    "茂密森林、農業平原",
    "城市中有哥德式和巴洛克建築",
    "許多城市有蘇聯時期公寓大樓",
    "電桿上有鸛鳥和鸛巢"
  ],
  signs: [
    "Polish 語 — 大量使用變音符號",
    "字元：<strong>ą、ć、ę、ł、ń、ó、ś、ź、ż</strong>",
    "子音密集的單字（szcz、rz、cz、sz 組合）",
    "地名常見 -ów、-owo、-ówek 結尾"
  ],
  plates: [
    "白色車牌附 EU 藍色條紋 + PL 代碼",
    "城市/省代碼（如 WA 代表 Warszawa）"
  ],
  unique: [
    "<strong>Polish 變音符號</strong>：ą、ę（鉤形）、ł（斜線 L）、ź、ż",
    "<strong>紅色帶 bollard 附數字</strong>",
    "多孔混凝土電桿配 A 型支架",
    "Polish 文字中的子音組合（szcz、rz）",
    "電線桿上的鸛巢",
    "可見教宗 John Paul II 的引用/影像"
  ,
    "路名使用 ulica (ul.)（街道）、aleja (al.)（大道）、plac (pl.)（廣場）"
  ],
  tips: [
    "ą、ę（鉤形）+ ł（斜線 L）= Polish（非 Lithuanian 或 Czech）",
    "子音組合如 szcz、rz = Polish",
    "紅色帶 bollard（非德式矩形反光片）",
    "電桿上的鸛巢 = 非常可能是 Poland",
    "🔗 <a href=\"https://www.google.com/maps/@52.2297,21.0122,3a,75y,90t\" target=\"_blank\" style=\"color:var(--accent-blue)\">Street View 範例（Warsaw）</a>"
  ]
},

'portugal': {
  name: 'Portugal', localName: 'Portugal', flag: '🇵🇹', region: 'europe',
  drivingSide: 'right', tld: '.pt', phoneCode: '+351', language: 'Portuguese', currency: 'Euro (EUR)',
  camera: [
    "<strong>80% Gen 4 + 10% Gen 3 + 10% Gen 2</strong>",
    "全國覆蓋良好",
    "Gen 4 有「小相機」低角度覆蓋 — 大圓形打碼前部突出"
  ],
  car: [
    "Gen 3：白色轎車，標準歐洲配置",
    "Gen 4：標準配置",
    "無特殊車輛辨識特徵"
  ],
  roads: [
    "右側行駛",
    "白色中心線",
    "高速公路有收費",
    "<strong>鵝卵石路</strong>非常常見（方形鵝卵石，與道路方向呈對角線排列）",
    "<strong>黑白路石</strong>常見",
    "路牌通常有<strong>白色邊框</strong>（Spain 大多無白邊）",
    "農村常見<strong>紅白相間狩獵標誌</strong>（菱形或長方形）— Spain 的狩獵標誌為黑白相間"
  ],
  bollardInfo: [
    "Bollard：楔形（頂部有明顯白色薄片）或扁平型（帶寬大反光板）",
    "反光板多為白色，也有<strong>橙色</strong>（比 Spain 的黃色明顯更深）",
    "護欄為 A 型配<strong>紅色反光板</strong>（⚠️ Spain 用黃色 — 區別關鍵）"
  ],
  poleInfo: [
    "混凝土梯子形電桿，<strong>梯級間距較大</strong>，每個梯級有<strong>小孔</strong>",
    "⚠️ Spain/France 的梯桿梯級間距較小 — 區別關鍵"
  ],
  signInfo: [
    "誘導標：<strong>黑底黃箭頭</strong>（⚠️ Spain 用黑底<strong>白</strong>箭頭或藍底白箭頭 — 區別關鍵）— 地中海地區此配色僅 Portugal",
    "STOP 標誌字體比 Spain 的明顯<strong>更大</strong>",
    "路牌用<strong>方形牌柱</strong>（與 Spain、France、Andorra 共有）",
    "警告標誌紅框有<strong>細白邊</strong>（Spain 沒有白邊）"
  ],
  landscape: [
    "北部丘陵地形，南部平坦的 Alentejo",
    "Algarve 海岸 — 壯觀的懸崖",
    "Douro 河谷 — 梯田葡萄園",
    "軟木橡樹林",
    "建築上的 Azulejo 磁磚（藍白裝飾磁磚）",
    "<strong>白漆石屋 + 橙色瓦片屋頂</strong>極常見",
    "門窗周圍常有<strong>藍色或黃色邊框裝飾</strong>",
    "外牆貼馬賽克裝飾瓷磚的房屋較常見",
    "桉樹非常常見（歐洲其他地方僅 Spain 北部有）"
  ],
  signs: [
    "Portuguese 語 — ã、õ、ç、â、ê、ô、á、é、í、ó、ú",
    "書寫上與巴西 Portuguese 非常相似",
    "'Rua'（街道）、'Avenida'（大道）、'Praça'（廣場）"
  ],
  plates: [
    "白色車牌附 EU 藍色條紋 + P 代碼",
    "格式：AA-12-BB",
    "⚠️ 大多數車牌右側有<strong>黃色條紋</strong> — Portugal 特有（2020 年起停用，舊車仍有）"
  ],
  unique: [
    "<strong>Portuguese bollard 反光片上方空間很小</strong>",
    "建築立面上的 <strong>Azulejo 磁磚</strong>",
    "鵝卵石 calçada 路面",
    "軟木橡樹林（Portugal/Spain 獨有）",
    "Portuguese 文字帶 ã、õ 字元",
    "Douro 河谷的梯田葡萄園"
  ,
    "路名使用 Rua（街道）、Avenida（大道）、Praça（廣場）、Travessa（小巷）"
  ],
  tips: [
    "歐洲的 Portuguese 文字（ã、õ）= Portugal（不是 Brazil！）",
    "Azulejo 磁磚立面 = 很可能是 Portugal",
    "鵝卵石人行道 + Portuguese = Portugal",
    "反光片上方空間很小的 bollard = Portugal",
    "🔗 <a href=\"https://www.google.com/maps/@38.7223,-9.1393,3a,75y,90t\" target=\"_blank\" style=\"color:var(--accent-blue)\">Street View 範例（Lisbon）</a>"
  ]
},

'romania': {
  name: 'Romania', localName: 'România', flag: '🇷🇴', region: 'europe',
  drivingSide: 'right', tld: '.ro', phoneCode: '+40', language: 'Romanian', currency: 'Leu (RON)',
  camera: [
    "<strong>76.7% Gen 4 + 23.1% Gen 3</strong>",
    "Gen 4 覆蓋（藍色車搭配圓形天線）"
  ],
  car: [
    "Gen 4：<strong>藍色轎車 + 圓形天線</strong>（天線常見 — 屬天線多的中東歐群組）",
    "Gen 4 藍車天線 2021：少量涵蓋（與 Hungary、Bulgaria、Sweden、France 並列）",
    "Gen 4 藍車天線 2023：常見（尤其東北部）",
    "Gen 3：白色轎車，長天線可見",
    "Gen 3：天線有膠帶（東歐共通特徵，與 Czech, Slovakia, Hungary 共用）"
  ],
  roads: [
    "外側線為<strong>短虛線窄空隙</strong>組成 — Romania 好線索",
    "中心線比 Bulgaria <strong>更粗</strong>",
    "道路品質差異顯著",
    "67C 山路全部<strong>黃色標線</strong>"
  ],
  bollardInfo: [
    "路桩細長白色，頂部附近有<strong>紅色垂直條紋</strong> — 相對較少",
    "⚠️ Turkey 有非常相似的路桩"
  ],
  poleInfo: [
    "<strong>多孔混凝土電線桿</strong>，洞延伸到底部，洞很寬或很高",
    "⚠️ Poland 洞不到底部；Hungary 洞比 Romania 小",
    "圓形混凝土電線杆也常見（與 Bulgaria 類似）",
    "樹木和電線杆底部常<strong>塗白色</strong>（Ukraine/Russia 也有）",
    "<strong>特大黃色貼紙</strong>在電線杆上 — Romania 特有（常標城鎮名）",
    "倒三角形杆頂（Czech/Slovakia/Albania/Serbia 也有）"
  ],
  signInfo: [
    "指路牌：<strong>藍底箭頭形</strong>白邊框，常標道路編號（紅或藍）",
    "城鎮入口：黃底速限 + 城市天際線 + 白底鎮名",
    "誘導標：<strong>白底紅箭頭 + 黃色框架</strong> — 黃框在 Romania 最常見",
    "讓行標志有<strong>非常厚紅邊 + 薄白輪廓</strong> — Romania 獨有",
    "標誌背面常為<strong>黑色</strong>（Italy/Albania/Germany 也有）",
    "路標石很常見：紅色或藍色邊框 + 道路編號，也有石頭製和全白小版"
  ],
  landscape: [
    "喀爾巴阡山脈貫穿中部",
    "Transylvania 高原",
    "東部多瑙河三角洲",
    "鄉村有馬車",
    "Transylvania 的設防薩克森教堂",
    "帶有彩色壁畫的東正教教堂"
  ],
  signs: [
    "Romanian 語 — 受斯拉夫影響的羅曼語",
    "字元：<strong>ă、â、î、ș（s-逗號）、ț（t-逗號）</strong>",
    "ș 和 ț 下方是逗號（非軟音符號）"
  ],
  plates: [
    "白色車牌附 EU 藍色條紋 + RO 代碼",
    "縣代碼（B 代表 Bucharest、CJ 代表 Cluj 等）"
  ],
  unique: [
    "<strong>Romanian 變音符號：ă、â、î、ș、ț</strong>（s 和 t 下方有逗號）",
    "多孔混凝土電桿（與 Hungary/Poland 共有）",
    "鄉村地區仍常見馬車",
    "喀爾巴阡山脈景觀",
    "Bucovina 的彩繪修道院",
    "Dacia 汽車非常常見（Romania 國產品牌）"
  ],
  tips: [
    "ș 和 ț（帶逗號）= Romanian",
    "羅曼語 + 東歐基礎設施 = Romania",
    "主要道路上有馬車 = 很可能是 Romania",
    "Dacia 汽車品牌 = Romanian",
    "🔗 <a href=\"https://www.google.com/maps/@44.4268,26.1025,3a,75y,90t\" target=\"_blank\" style=\"color:var(--accent-blue)\">Street View 範例（Bucharest）</a>"
  ]
},

'russia': {
  name: 'Russia', localName: 'Россия', flag: '🇷🇺', region: 'europe',
  drivingSide: 'right', tld: '.ru', phoneCode: '+7', language: 'Russian', currency: 'Ruble (RUB)',
  camera: [
    "<strong>64.3% Gen 3 + 35.6% Gen 4</strong>",
    "覆蓋不一 — 歐洲 Russia 良好，Siberia 稀疏",
    "Yandex 提供額外覆蓋"
  ],
  car: [
    "Gen 3：<strong>黑色轎車 + 長天線</strong> — 僅 Russia, Donetsk, Israel, Palestine 有此配置",
    "部分涵蓋為白色轎車",
    "黑色車 + 長天線 + Cyrillic = 高度確認為 Russia",
    "無 snorkel、無 車頂架 (roof rack)"
  ],
  roads: [
    "道路品質差異極大 — Moscow 附近好，偏遠地區很差",
    "白色/黃色中線",
    "Siberia 聚落間距離極遠"
  ],
  bollardInfo: [
    "Bollard：<strong>十字路口極薄的「紙片狀」bollard</strong>"
  ],
  poleInfo: [
    "<strong>方形混凝土電線杆</strong>，頂部有<strong>金屬橫桿</strong>",
    "城市區域常見灰色方形混凝土杆 — 與圓形木杆國家（Scandinavia 等）形成對比"
  ],
  landscape: [
    "極大多樣性：凍原、泰加林、草原、山脈",
    "大面積白樺林",
    "城市中有蘇聯時期公寓大樓",
    "洋蔥圓頂東正教教堂",
    "Siberia 荒野 — 遼闊的空曠"
  ],
  signs: [
    "俄語範例：<span class=\"script-sample\" style=\"font-size:1.2rem\">улица Москва Ы Ё Э</span> — 有 Ы Ё Э（烏克蘭語沒有）",
    "<strong>Russian 西里爾文</strong> — Ё、Ы、Э、Ъ 為 Russian 特有",
    "西里爾文標誌，有時附拉丁轉寫",
    "Russian 是使用最廣的西里爾文語言"
  ],
  plates: [
    "白色車牌附 Russian 國旗 + RUS 代碼",
    "區域代碼（77/97/99 = Moscow、78/98 = St. Petersburg）"
  ],
  unique: [
    "<strong>Russian 西里爾文帶 Ё、Ы、Э</strong>",
    "<strong>薄紙片狀 bollard</strong>",
    "<strong>Google 街景車上的長天線</strong>",
    "遼闊距離和空曠景觀",
    "洋蔥圓頂教堂",
    "蘇聯時期建築",
    "可見 Yandex 覆蓋（較低品質）"
  ,
    "路名使用 улица (ул.)（街道）、проспект (пр.)（大道）、переулок（小巷）"
  ],
  tips: [
    "西里爾文帶 Ы 和 Э = Russian（Ukrainian 沒有 Ы）",
    "薄紙片 bollard = Russia",
    "大面積白樺林 + 蘇聯建築 + 西里爾文 = Russia",
    "電話國碼 +7（僅與 Kazakhstan 共用）",
    "🔗 <a href=\"https://www.google.com/maps/@55.7558,37.6173,3a,75y,90t\" target=\"_blank\" style=\"color:var(--accent-blue)\">Street View 範例（Moscow）</a>"
  ]
},

'san-marino': {
  name: 'San Marino', localName: 'San Marino', flag: '🇸🇲', region: 'europe',
  drivingSide: 'right', tld: '.sm', phoneCode: '+378', language: 'Italian', currency: 'Euro (EUR)',
  camera: ["<strong>66.6% Gen 3 + 32.3% Gen 4 + 1.1% Gen 2</strong>"],
  car: ["標準車輛"],
  roads: ["義大利風格道路", "山路（Titano 山）"],
  landscape: [
    "<strong>巨神峰（Monte Titano）</strong>非常高大，全國各地幾乎都能看見",
    "山上三座塔是確認標誌",
    "景觀為平緩農業小丘 + 蜿蜒道路 + 地中海植被",
    "被 Italy 包圍的山頂微型國家",
    "中世紀防禦工事"
  ],
  signs: ["Italian 語"],
  signInfo: [
    "誘導標：<strong>黃底深紅箭頭</strong> — 全球唯一使用此配色",
    "路標、電線杆和路牌樣式與 Italy 一致",
    "路牌上常見附近 Italy 城市 Rimini 的名字",
    "藍色斑馬線和懸掛人行橫道標志 — San Marino 獨有"
  ],
  plates: [
    "<strong>藍底白字 + RSM</strong> 國碼 — 與 Monaco 類似的藍色車牌",
    "格式：字母 + 數字組合",
    "歐洲僅 Monaco 和 San Marino 使用藍色車牌",
    "San Marino = 藍色車牌 + 義語環境；Monaco = 藍色車牌 + 法語環境"
  ],
  unique: [
    "有中世紀塔樓的微型山頂國家",
    "完全被 Italy 包圍",
    "Titano 山上三座標誌性塔樓"
  ],
  tips: [
    "Italian 文字 + 中世紀山頂堡壘 = 可能是 San Marino",
    "非常小的領土 — 如果能看到山上的三座塔",
    "🔗 <a href=\"https://www.google.com/maps/@43.9424,12.4578,3a,75y,90t\" target=\"_blank\" style=\"color:var(--accent-blue)\">Street View 範例（San Marino）</a>"
  ]
},

'serbia': {
  name: 'Serbia', localName: 'Србија', flag: '🇷🇸', region: 'europe',
  drivingSide: 'right', tld: '.rs', phoneCode: '+381', language: 'Serbian', currency: 'Dinar (RSD)',
  camera: ["<strong>100% Gen 3</strong>", "大部分覆蓋在北部 Vojvodina、Belgrade 周邊、東南 Niš 附近"],
  car: [
    "Gen 3：白色轎車",
    "<strong>無天線</strong> — 東歐中少數無天線（辨識重點！）",
    "部分覆蓋（Novi Sad/Belgrade/E75）有<strong>短天線白車</strong>"
  ],
  roads: [
    "白色中心線",
    "護欄僅用 <strong>B 型</strong>（North Macedonia 不用 B 型）",
    "3 條主要分隔高速：A1（匈→Belgrade→Niš）、A3（克→Belgrade）、A4（Niš 分支）",
    "Pirot 北部 E-80 有<strong>黃色中心線</strong>"
  ],
  bollardInfo: [
    "多種設計但反光器大多在<strong>路桩一側</strong>，通常扁平無側面寬度"
  ],
  signInfo: [
    "誘導標：<strong>白底黑箭頭</strong>（Slovenia/Montenegro/North Macedonia 也有）",
    "Vojvodina 北部有<strong>Serbian/Hungarian 雙語</strong>標誌"
  ],
  landscape: [
    "北部 Vojvodina 極平坦農業景觀（無任何山丘）",
    "中北部輕微波狀丘陵，南部更多山脈",
    "西南/東南沿 Bulgaria/Kosovo 邊境綠意盎然山區",
    "多瑙河和 Sava 河流經 Belgrade",
    "鄂圖曼和奧匈帝國建築混合"
  ],
  signs: [
    "塞爾維亞文範例：<span class=\"script-sample\" style=\"font-size:1.2rem\">улица Београд Ђ Ћ Џ</span> — 有 Ђ Ћ（獨有）",
    "<strong>Serbian 西里爾文</strong> — 獨特字母：Ђ、Ј、Љ、Њ、Ћ、Џ",
    "也使用拉丁文字（雙文字系統 — 兩種文字都使用）",
    "拉丁文字版本使用：đ、lj、nj、ć、dž",
    "Ђ 和 Ћ 為 Serbian 獨有（其他西里爾文中找不到）"
  ],
  plates: [
    "白色車牌附藍色條紋 + SRB 代碼",
    "城市代碼：BG（Belgrade）、NS（Novi Sad）、NI（Niš）"
  ],
  unique: [
    "<strong>Serbian 西里爾文帶 Ђ 和 Ћ</strong> — Serbian 專有字元",
    "雙文字系統 — 西里爾文和拉丁文都使用",
    "薄 bollard 搭配偏心反光片",
    "Belgrade 位於多瑙河和 Sava 河匯流處",
    "北部平坦的 Vojvodina 農田"
  ,
    "路名使用 улица/ulica（街道）、трг/trg（廣場）"
  ],
  tips: [
    "西里爾文中的 Ђ 或 Ћ = Serbian（非 Russian、Bulgarian 或 Ukrainian）",
    "同一標誌上西里爾文和拉丁文混合 = 很可能是 Serbia",
    "薄 bollard 搭配偏心反光片 = Serbia",
    "🔗 <a href=\"https://www.google.com/maps/@44.7866,20.4489,3a,75y,90t\" target=\"_blank\" style=\"color:var(--accent-blue)\">Street View 範例（Belgrade）</a>"
  ]
},

'slovakia': {
  name: 'Slovakia', localName: 'Slovensko', flag: '🇸🇰', region: 'europe',
  drivingSide: 'right', tld: '.sk', phoneCode: '+421', language: 'Slovak', currency: 'Euro (EUR)',
  camera: ["<strong>89% Gen 4 + 11% Gen 3</strong>"],
  car: [
    "Gen 4：<strong>紅色轎車</strong> — 紅車三大國之一（Sweden、Slovakia、Bulgaria）",
    "Gen 4 藍車無天線：<strong>2023 無涵蓋</strong>（有助於與 Czechia 區分 — Czechia 2023 藍車有涵蓋）",
    "Gen 4 藍車天線 2023：<strong>無涵蓋</strong>（排除 Slovakia、同時排除 Hungary、Latvia、Estonia、Croatia）",
    "50-50 Czechia vs Slovakia：2019 或 2021 → Czechia；紅車 → 多為 Slovakia；黑/白車 → Czechia",
    "Gen 3：白色轎車，天線有膠帶",
    "護柱：<strong>分裂反光片 + 弧形設計</strong>"
  ],
  roads: [
    "右側行駛",
    "路面品質良好",
    "白色中心線"
  ],
  bollardInfo: [
    "Bollard：<strong>分裂式反光片 + 彎曲設計</strong>（vs Czech 楔形）"
  ],
  poleInfo: [
    "<strong>寬圓混凝土電線杆</strong>最常見，通常成對安裝（與 Czech 共有）",
    "杆頂有短金屬棒支撐絕緣體；也有倒三角形和三叉戟杆頂",
    "木桿比 Czech 更常見，有時有白色混凝土支撐底座"
  ],
  signInfo: [
    "誘導標：<strong>白底紅箭頭</strong>",
    "指路牌：綠色背景配白色文字",
    "倒三角形杆頂（與 Czech/Albania/Serbia 共有）"
  ],
  landscape: [
    "北部 High Tatras 山脈",
    "南部多瑙河（Bratislava）",
    "喀爾巴阡山脈",
    "中世紀城堡（Spiš 城堡）",
    "傳統木造建築的鄉村"
  ],
  signs: [
    "Slovak 語 — 與 Czech 非常相似",
    "字元：š、č、ž、ý、á、é、í、ó、ú、ä、ô、ĺ、ŕ、ď、ť、ň、ľ",
    "<strong>ô（揚抑符 o）</strong> 和 <strong>ĺ、ŕ（l、r 上的銳音符）</strong> — Slovak 獨有",
    "沒有 ř（那是 Czech 獨有）"
  ],
  plates: [
    "白色車牌附 EU 藍色條紋 + SK 代碼",
    "城市代碼：BA（Bratislava）、KE（Košice）等"
  ],
  unique: [
    "<strong>弧形 bollard 搭配分裂反光片</strong>（Czech 為楔形）",
    "<strong>ô、ĺ、ŕ</strong> 字元 — Slovak 獨有",
    "沒有 ř（Czech 有 ř，Slovak 沒有）",
    "High Tatras 山脈",
    "中世紀城堡"
  ],
  tips: [
    "看起來像 Czech 但沒有 ř = Slovak",
    "ô 或 ĺ 或 ŕ = Slovak（不是 Czech）",
    "弧形 bollard（非楔形）= Slovak（Czech 是楔形）",
    "可見 High Tatras = 很可能是 Slovakia 北部",
    "🔗 <a href=\"https://www.google.com/maps/@48.1486,17.1077,3a,75y,90t\" target=\"_blank\" style=\"color:var(--accent-blue)\">Street View 範例（Bratislava）</a>"
  ]
},

'slovenia': {
  name: 'Slovenia', localName: 'Slovenija', flag: '🇸🇮', region: 'europe',
  drivingSide: 'right', tld: '.si', phoneCode: '+386', language: 'Slovenian', currency: 'Euro (EUR)',
  camera: ["<strong>85.6% Gen 3 + 14.3% Gen 4 + 0.1% Gen 2</strong>", "覆蓋良好"],
  car: [
    "Gen 4：<strong>藍色轎車 + 圓形天線</strong>（天線常見 — 屬天線多的群組）",
    "Gen 4 藍車天線：<strong>2022 無涵蓋</strong>（排除 Slovenia、同時排除 Germany、Netherlands）",
    "Gen 4 無車可見 2022：常見（與 Austria 類似）",
    "Gen 3：白色轎車",
    "護柱有<strong>黑帽</strong>（類似 Austrian 風格但反光片較淺）"
  ],
  roads: [
    "右側行駛",
    "良好高速公路網",
    "白色中心線"
  ],
  bollardInfo: [
    "黑頂白色路桩，前部<strong>亮紅色</strong>反光條，背面白色（Austria 前部為暗紅/灰，背面黑/灰；Montenegro 也有類似款）"
  ],
  poleInfo: [
    "混合使用木桿和混凝土桿",
    "木桿上常有交替鉤形絕緣子"
  ],
  signInfo: [
    "誘導標：<strong>白底紅箭頭</strong>（Austria 為紅底白箭頭或黃底紅箭頭）",
    "斑馬線標志：行人<strong>無腰帶</strong>（Croatia 行人有繫腰帶）+ 5 條條紋",
    "指路牌：綠色背景配白色文字（高速公路為藍色）"
  ],
  landscape: [
    "西北部為高山（Julian Alps）",
    "地中海海岸（非常短 — 僅約 47 公里）",
    "喀斯特地貌（石灰岩洞穴）",
    "綠色森林覆蓋全國大部分地區",
    "Bled 湖 — 標誌性的高山湖泊配湖中島教堂"
  ],
  signs: [
    "Slovenian 語 — 南斯拉夫語，類似 Croatian 但不同",
    "字元：č、š、ž",
    "使用雙數文法（斯拉夫語言中獨有）",
    "沿海地區也使用 Italian"
  ],
  plates: [
    "白色車牌附 EU 藍色條紋 + SLO 代碼",
    "格式：LJ（Ljubljana）、MB（Maribor）等城市代碼 + 數字"
  ],
  unique: [
    "黑色頂蓋 bollard 搭配較淺反光片（vs Austria 的深色反光片）",
    "非常翠綠且多森林",
    "阿爾卑斯、地中海和 Pannonian 景觀混合",
    "Bled 湖 — 一眼就能辨認",
    "位於阿爾卑斯山和巴爾幹交匯處的小國"
  ,
    "路名使用 ulica（街道）、cesta（路）、trg（廣場）"
  ],
  tips: [
    "斯拉夫語 + 高山景觀 + 歐元 = 很可能是 Slovenia",
    "黑色頂蓋 bollard 搭配較淺反光片 = Slovenia（不是 Austria）",
    "Bled 湖（高山湖泊中的島上教堂）= Slovenia",
    "🔗 <a href=\"https://www.google.com/maps/@46.0569,14.5058,3a,75y,90t\" target=\"_blank\" style=\"color:var(--accent-blue)\">Street View 範例（Ljubljana）</a>"
  ]
},

'spain': {
  name: 'Spain', localName: 'España', flag: '🇪🇸', region: 'europe',
  drivingSide: 'right', tld: '.es', phoneCode: '+34', language: 'Spanish', currency: 'Euro (EUR)',
  camera: [
    "<strong>43.8% Gen 3 + 41.9% Gen 4 + 14.3% Gen 2</strong>",
    "全境覆蓋範圍廣泛",
    "⚠️ 有 Gen 4 小相機 (smallcam/low cam) 覆蓋（~14,000 點位）— 視角更低、模糊區域更大"
  ],
  car: [
    "Gen 3：天線有長/短/無三種，車尾通常不可見（少數為黑色或白色）",
    "Gen 4：標準藍色車（有時可見），通常無天線",
    "Gen 4 藍車 2021：有涵蓋（Spain 是 2021 西歐涵蓋主力之一，與 France、UK、Ireland 並列）",
    "Andalusia 東部、Huesca、Lleida 的 Gen 3 有時有<strong>白頂長天線</strong> — 較獨特"
  ],
  roads: [
    "右側行駛",
    "白色中心線和邊線",
    "良好的 autopista/autovía 高速公路網",
    "農村道路有時用白色虛線邊線（Portugal/Italy 幾乎沒有）— 但也有白色實線邊線",
    "極少數山區道路有<strong>黃色標線</strong>",
    "藍色高速公路標誌"
  ],
  bollardInfo: [
    "標準路桩：正面<strong>橙黃色反光片（凹面）</strong>，背面兩個白點或空白",
    "Aragón 地方道路：矮扁平矩形白色棒，前後灰色反射板",
    "Lleida/Tarragona 省 + 加那利東部：更方形更橙色的反光板，背面一個白色反光板",
    "Extremadura：路桩有<strong>綠色頂部</strong>變體 — 該地區獨有",
    "Ceuta 獨有：<strong>黑白護欄</strong>",
    "護欄為 A 型配<strong>黃色反光塊</strong>（僅 Belgium、Andorra、Gibraltar 也用）",
    "加那利 Lanzarote 南部有藍黃色雪杆（Andalusia 獨有）"
  ],
  poleInfo: [
    "混凝土<strong>梯形杆</strong>和木杆在小城鎮和農村最常見",
    "<strong>法式杆頂</strong>（倒三角形 + 微彎水平頂杆）在西班牙較常見 — France 也有",
    "高壓電線塔架在西班牙非常普遍（與其他地中海國家相比）"
  ],
  signInfo: [
    "STOP 標誌：<strong>STOP</strong>",
    "轉向誘導標：<strong>藍底白箭頭</strong>或<strong>黑底白箭頭</strong>（單箭頭極罕見）",
    "⚠️ 藍底白箭頭歐洲僅 France 也用；黑底白箭頭也見於 Italy/Greece/Albania",
    "⚠️ Portugal 用黑底<strong>黃</strong>箭頭 — 區別關鍵",
    "STOP 標誌字體<strong>非常小</strong> — Portugal 字體明顯更大",
    "斑馬線標誌有<strong>8 道條紋</strong> — 歐洲最多，僅 Andorra 也是 8 道",
    "警告標誌紅色邊框<strong>延伸到邊緣，無白色窄邊</strong>（France/Italy/Portugal 有白邊）",
    "路標用<strong>方形牌柱</strong>（Portugal、France、Andorra 也用）",
    "Catalonia 常用圓形波紋牌柱（Basque/Balearic 也有）",
    "狩猎標志：白色 'coto...caza' 或對角線黑白背景 — Spain 獨有",
    "Galicia 路標頂部有綠色或藍色條帶 + 自治市名（'Concello'）",
    "Asturias 公車站有紅色 CTA 標牌"
  ],
  landscape: [
    "中部 Meseta — 乾燥高原，Castilla y León 平坦農業景觀",
    "地中海海岸，東南部極乾燥半沙漠",
    "北部庇里牛斯山（淺灰色岩石 + 松樹 + 石牆建築）",
    "北海岸（Galicia/Asturias/Cantabria）綠色丘陵，類似 Ireland",
    "Andalusia — 橄欖園、白色村莊、Sierra Nevada 雪峰",
    "Canary Islands — 火山土、極端乾燥、多樣景觀",
    "Extremadura — 聖栎/栓皮栎在開闊田野，偏地中海外觀",
    "多樣化建築：摩爾、哥德式、現代主義"
  ],
  signs: [
    "Spanish（Castilian）— ñ 是關鍵字元",
    "另有：á、é、í、ó、ú、ü、¡、¿",
    "Catalonia 的 Catalan，País Vasco 的 Basque，Galicia 的 Galician",
    "雙語標誌上的地方語言"
  ],
  plates: [
    "白色車牌附 EU 藍色條紋 + E 代碼",
    "格式：1234 ABC（2000 年起無區域識別碼）"
  ],
  unique: [
    "<strong>帶凹面的黃色反光片 bollard</strong>",
    "歐洲帶 ñ 的 Spanish 語 = Spain",
    "地方語言（Catalan、Basque、Galician）",
    "Andalusia 的白色村莊（pueblos blancos）",
    "到處都是橄欖園",
    "高速公路旁的公牛剪影（Osborne bull）"
  ,
    "路名使用 Calle（街道）、Avenida（大道）、Plaza（廣場）、Camino（小路）"
  ],
  tips: [
    "歐洲的 Spanish（ñ）= Spain（不是拉丁美洲）",
    "黃色凹面 bollard = Spain",
    "山頂上的 Osborne 公牛剪影 = Spain",
    "雙語標誌（Spanish/Catalan 或 Spanish/Basque）= Spain",
    "🔗 <a href=\"https://www.google.com/maps/@40.4168,-3.7038,3a,75y,90t\" target=\"_blank\" style=\"color:var(--accent-blue)\">Street View 範例（Madrid）</a>"
  ]
},

'sweden': {
  name: 'Sweden', localName: 'Sverige', flag: '🇸🇪', region: 'europe',
  drivingSide: 'right', tld: '.se', phoneCode: '+46', language: 'Swedish', currency: 'Krona (SEK)',
  camera: [
    "<strong>79% Gen 4 + 18% Gen 3 + 3% Gen 2（多種車色：藍/紅/白）</strong>",
    "Gen 4 覆蓋（紅/白/藍三色車，均有短天線）",
    "⚠️ 有 Gen 4 小相機 (smallcam/low cam) 覆蓋（~1,600 點位）— 視角更低、模糊區域更大"
  ],
  car: [
    "Gen 4：<strong>紅/白/藍三種車色</strong>，均有短天線 — Sweden Gen 4 車色最多樣",
    "Gen 4 紅車：紅車三大國之一（Sweden、Slovakia、Bulgaria）— Sweden 紅車可能偏南部",
    "Gen 4 白車：白色車三大國之一（Sweden、Turkey、Luxembourg）",
    "Gen 4 藍車天線 2021：<strong>有涵蓋</strong>（歐洲最早一批 — 與 Hungary、Bulgaria、少量 Romania/France 並列）",
    "Gen 4 藍車天線 2022：<strong>很少</strong>（也少見於 Poland）",
    "⚠️ 北歐 50-50：非藍色車 → Sweden；有天線 → Sweden；2019 → 多為 Norway；2021 → 排除 Finland",
    "Gen 3：白色轎車配長天線（同款也出現在 Iceland 全部 + Finland 部分）",
    "藍色車也出現在 Norway/Finland/Denmark",
    "西海岸 + Skåne 有<strong>白色車配藍色條紋</strong> — 幾乎僅見於 Sweden"
  ],
  roads: [
    "所有道路線全為<strong>白色</strong>（Norway/Finland 有黃色邊線）",
    "低等道路：外側白色虛線，明顯比 Norway 的短",
    "高速公路：外側線遠看為實線，近看分小塊獨特樣式（Denmark 類似但矩形塊）",
    "道路品質優良",
    "許多駝鹿/麋鹿警告標誌",
    "Dalarna 地區的道路有非常明顯的<strong>紅色</strong>"
  ],
  bollardInfo: [
    "路桩<strong>黑白配色</strong>，通常帶灰色反光板（交叉口為橙色）",
    "可為楔形、圓形或細長彎曲形",
    "雪杆：<strong>橙色</strong>，中部稍上有白色反光條（Finland 反光條細且近頂部；Norway 有 1-2 條細反光條近中部）",
    "南部常見類似 Germany 的楔形路桩",
    "西海岸/Värmland/Dalarna 南部：頂部有水平黑色部分的圓柱形路桩",
    "北部主要道路：帶含反射器黑色矩形的扁平或圓柱路桩",
    "Skåne 南部鄉村：帶藍色或紅色條紋的小白色路桩"
  ],
  poleInfo: [
    "木質電線杆為主，頂部常有<strong>小型黑色金屬蓋</strong> — 北歐國家特徵",
    "木杆上路燈安裝在略低於杆頂處，<strong>雙螺栓固定</strong>（Finland 也有雙螺栓但燈在杆頂、支架更直）",
    "木質電纜標記（頂部白藍條）— 其他北歐國家找不到",
    "Norway/Finland 也主要使用木製電線杆"
  ],
  signInfo: [
    "轉向誘導標：<strong>藍底黃箭頭</strong> — 歐洲唯一（Luxembourg 極罕見也有）",
    "道路警告標志：<strong>黃底紅框</strong>（Finland 類似但紅框外多一道細黃邊）",
    "指路牌：藍底白字 + 細箭頭；另有黑字紅框黃底指示牌",
    "人行道標志有<strong>4 道線 + 女性版</strong>（Finland/Denmark 5 道；Norway 通常 4 道）",
    "低等道路上常見藍底大寫<strong>白色 M</strong> 標誌（Norway 類似但字體不同，M 中點延到底部）",
    "路牌常有條紋：藍白和紅黃最常見 — 紅黃幾乎僅見於 Sweden",
    "大量道路基礎設施（施工標/路障/誘導標）塗成<strong>紅黃配色</strong>",
    "Sweden 教會旗：黃底紅十字 + 王冠 — 教堂附近常見"
  ],
  landscape: [
    "針葉林為主（白樺、松樹、雲杉），許多湖泊",
    "南部（Skåne）最廣闊農田，起伏緩丘 + 紅磚建築",
    "西北部多山，西海岸裸露圓形岩石 + 低矮灌木",
    "北部在北極圈以北（Lapland），細弱北方樹木 + 沙質土壤",
    "紅色木造房屋（falun 紅漆）極為常見，尤其鄉村",
    "傳統木栅欄（垂直細木 + 斜疊木）— Sweden 常見，鄰國少見",
    "Volvo 佔所有乘用車約 30%（Norway/Finland 約 10%）",
    "Gotland：石灰石建築 + 白色沙地路邊；Öland：極平坦 + 小石墙 + 小風車"
  ],
  signs: [
    "Swedish — 使用 <strong>å、ä、ö</strong>",
    "與 Danish/Norwegian 不同：ö 取代 ø，ä 取代 æ",
    "'vägen/v'（道路）、'gatan/g'（街道）、'gränd'（小巷）",
    "北部有 Sami 語 + Swedish 雙語標誌；芬蘭邊境有 Meänkieli 語",
    "常見地名後綴有地區限定分布"
  ],
  plates: [
    "白色車牌附 EU 藍色條紋 + S 代碼",
    "格式：ABC 123"
  ],
  unique: [
    "<strong>å、ä、ö</strong>（非 Danish/Norwegian 的 æ、ø、å）",
    "Gen 4 多種車色（藍、紅、白）",
    "邊線虛線比間隔短（獨特風格）",
    "falun 紅漆木造房屋",
    "駝鹿警告標誌",
    "茂密的白樺林"
  ,
    "路名使用 gata/gatan（街道）、väg/vägen（路）、torg（廣場）"
  ],
  tips: [
    "å、ä、ö = Swedish（Danish/Norwegian 改用 æ、ø、å）",
    "ö（Swedish）vs ø（Danish/Norwegian）是關鍵區別",
    "紅色木造房屋（falun 紅）+ 森林 = Sweden",
    "駝鹿警告標誌 = Sweden/Norway/Finland",
    "🔗 <a href=\"https://www.google.com/maps/@59.3293,18.0686,3a,75y,90t\" target=\"_blank\" style=\"color:var(--accent-blue)\">Street View 範例（Stockholm）</a>"
  ]
},

'switzerland': {
  name: 'Switzerland', localName: 'Schweiz / Suisse / Svizzera', flag: '🇨🇭', region: 'europe',
  drivingSide: 'right', tld: '.ch', phoneCode: '+41', language: 'German, French, Italian, Romansh', currency: 'Franc (CHF)',
  camera: [
    "<strong>87.2% Gen 3 + 12.8% Gen 4（全部 low cam）</strong>",
    "⚠️ 全部為低相機 (low cam) 覆蓋",
    "⚠️ <strong>相機位置極低 — 全球最大的車輛模糊區域 (blur area)</strong>",
    "因隱私法規限制，覆蓋範圍有限",
    "模糊區域之大，幾乎佔畫面底部 1/3 — 這是 Switzerland 最強的 meta 特徵"
  ],
  car: [
    "<strong>Gen 4 小相機（low cam）</strong> — 所有國家中模糊區域最大，前方可見不同顏色車輛",
    "低角度拍攝使路面看起來更寬、物體看起來更大",
    "Gen 4：幾乎全部為<strong>「無車可見」（完全打碼）</strong> — 與 Austria、Belgium 並列最常見",
    "⚠️ Switzerland + Liechtenstein 的 Gen 4 外觀與其他歐洲國家完全不同 — 一看便知",
    "Liechtenstein 應該只有 2024 藍色車（顏色常難以辨識）",
    "無 antenna、無 snorkel、無 車頂架 (roof rack)"
  ],
  roads: [
    "道路上有<strong>黃色長虛線</strong> — Switzerland 好線索（Liechtenstein 也有）",
    "<strong>黃色人行橫道</strong> — 歐洲僅 Switzerland/Liechtenstein",
    "道路品質優良，山口配髮夾彎"
  ],
  bollardInfo: [
    "黑白相間路桩，帶白色或灰色反光板 — 楔形或<strong>圓頂柱形</strong>",
    "Liechtenstein 用幾乎相同的圓頂柱形",
    "Valais 州常見粗<strong>木質路桩</strong>（方形或圓柱形）",
    "Glarus 州用反光板附在路邊欄杆代替路桩"
  ],
  signInfo: [
    "行人標志有 <strong>7 道條紋</strong> + 高藍色長方形 — 歐洲幾乎獨有（Liechtenstein 同款）",
    "誘導標：<strong>黑底白箭頭</strong>（也有罕見白底黑箭頭）— Austria 為紅白/紅黃",
    "指路牌：主路<strong>藍色</strong>、辅路<strong>白色</strong>，常有<strong>灰色金屬圓框</strong>",
    "城鎮入口標志白色或藍色 + 金屬框，背面可能有到大城市距離",
    "公交站牌也有金屬框 — Switzerland 獨有風格",
    "限速標志文字因語區不同：Generell（德）/ Limite générale（法）/ Limitazione generale（意）"
  ],
  landscape: [
    "南部瑞士阿爾卑斯山 — 壯觀高山景色",
    "北部主要是平地或丘陵 + 大片農田，遠處森林丘陵",
    "翠綠山谷配木屋",
    "Jura 山脈：樹木茂密丘陵中裸露石灰岩 + 石牆",
    "Ticino 州（意語區）：橙黃色石墻 + 意式百叶窗",
    "Bern 一帶：厚屋頂大房子，屋頂底部拱形",
    "東北部：精緻紅色木質框架房子",
    "Appenzell：住宅 + 長穀倉 90° 角拼接"
  ],
  signs: [
    "四語國家：德語（北/東）、法語（西）、Italian（南 Ticino）、Romansh（東 Graubünden）",
    "路標依所在語區使用對應語言",
    "棕色高速公路標誌",
    "州雙字母縮寫常見於城鎮入口標識上"
  ],
  plates: [
    "白色車牌附瑞士十字 + 州代碼",
    "格式：州縮寫 + 數字",
    "如 ZH（Zürich）、BE（Bern）、VD（Vaud）"
  ],
  unique: [
    "<strong>相機高度極低</strong> — 全球最大模糊區域",
    "<strong>圓頂黑白 bollard</strong>",
    "依地區有 4 種官方語言",
    "瑞士十字出現在所有東西上",
    "一塵不染的基礎設施和清潔度",
    "高山景色配木屋"
  ],
  tips: [
    "超低相機配巨大模糊區域 = Switzerland",
    "瑞士德語文字 + 阿爾卑斯山 = Switzerland（不是 Austria）",
    "黑白圓頂 bollard = Switzerland",
    "棕色高速公路標誌可與鄰國區分",
    "🔗 <a href=\"https://www.google.com/maps/@46.9480,7.4474,3a,75y,90t\" target=\"_blank\" style=\"color:var(--accent-blue)\">Street View 範例（Bern）</a>"
  ]
},

'liechtenstein': {
  name: 'Liechtenstein', localName: 'Liechtenstein', flag: '🇱🇮', region: 'europe',
  drivingSide: 'right', tld: '.li', phoneCode: '+423', language: 'German', currency: 'Franc (CHF)',
  camera: [
    "<strong>100% Gen 3（全部 low cam）</strong>",
    "與 Switzerland 完全相同的低相機特徵",
    "覆蓋有限（非常小的國家）"
  ],
  car: [
    "Gen 4 小相機（low cam）— 與 Switzerland 完全相同的低相機特徵",
    "Liechtenstein 應該只有 <strong>2024 藍色車</strong>（顏色常難以辨識）",
    "可能有<strong>低相機</strong>（與 Switzerland 共享此特徵）"
  ],
  roads: [
    "右側行駛",
    "路面品質優良（已開發國家）",
    "道路上有<strong>黃色長虛線</strong>和<strong>黃色人行橫道</strong>（與 Switzerland 相同）",
    "<strong>黃黑條紋道路分隔器</strong>，頂部圓形有旋鈕突起 — Liechtenstein 較獨特"
  ],
  bollardInfo: [
    "Bollard：<strong>圓頂圓柱形，黑白配色</strong>，側面常有<strong>藍色附著物</strong>（與 Switzerland 幾乎相同）"
  ],
  signInfo: [
    "行人標志有 <strong>7 道條紋</strong> + 高矩形藍色（與 Switzerland 同款）",
    "公交站：<strong>綠白配色</strong>，頂部寫 LIEMOBIL，周圍有黑色金屬框 — Liechtenstein 獨有"
  ],
  landscape: [
    "阿爾卑斯山小國 — 完全被山脈環繞",
    "Rhine 河谷",
    "Vaduz 城堡可見",
    "與 Switzerland 和 Austria 接壤",
    "非常小、非常富裕"
  ],
  signs: [
    "德語（與 Switzerland 德語區、Austria 相同）",
    "路標風格類似 Switzerland"
  ],
  plates: [
    "<strong>黑底白字</strong>車牌，中間有<strong>紅黃色徽章</strong> — 模糊後呈灰色僅徽章可見",
    "⚠️ 與 Switzerland 白色車牌明顯不同 — 可靠區分特徵"
  ],
  unique: [
    "<strong>Bollard 與 Switzerland 完全相同</strong>（圓頂黑白）",
    "極小的國家 — 如果在阿爾卑斯山且不是 Switzerland/Austria 就可能是 Liechtenstein",
    "FL 車牌代碼",
    ".li 域名",
    "使用 CHF（瑞士法郎），非歐元"
  ],
  tips: [
    "黑白圓頂 bollard + 德語 + 極小阿爾卑斯國家 = Liechtenstein 或 Switzerland",
    "看到 FL 車牌或 .li 域名 = Liechtenstein",
    "比 Switzerland 更小、幾乎只有一條山谷",
    "與 Switzerland 極難區分 — 主要靠車牌和域名",
    "🔗 <a href=\"https://www.google.com/maps/@47.141,9.5209,3a,75y,90t\" target=\"_blank\" style=\"color:var(--accent-blue)\">Street View 範例（Vaduz）</a>"
  ]
},

'turkey': {
  name: 'Turkey', localName: 'Türkiye', flag: '🇹🇷', region: 'europe',
  drivingSide: 'right', tld: '.tr', phoneCode: '+90', language: 'Turkish', currency: 'Lira (TRY)',
  camera: [
    "<strong>92.4% Gen 3 + 7.6% Gen 4</strong>",
    "Gen 3 覆蓋中街景車從未有天線",
    "西部覆蓋較多，東部較少",
    "⚠️ 有 Gen 4 小相機 (smallcam/low cam) 覆蓋（~19,000 點位）— 視角更低、模糊區域更大"
  ],
  car: [
    "Gen 4：<strong>白色轎車</strong> — 白色車三大國之一（Sweden、Turkey、Luxembourg）",
    "Gen 4：也有<strong>深灰色 pickup truck（皮卡車）</strong>",
    "⚠️ Gen 4：<strong>幾乎沒有藍色車</strong>（歐洲極少數無藍車國家，另有 Austria、Belgium）",
    "Gen 4 藍車天線：<strong>無</strong>（Turkey 不在天線群組中）",
    "Gen 4 無車可見：<strong>極少</strong>（Turkey 和 Greece 幾乎沒有完全打碼的情況）",
    "Gen 3：白色轎車，<strong>無天線</strong>（Turkey 和 North Macedonia 在 Gen 3 中從無天線）",
    "多種車型跨越不同涵蓋期間"
  ],
  roads: [
    "<strong>道路標線不一致</strong>：大多數為白色，但<strong>黃色標線也不少見</strong>（全黃或黃白混合）",
    "路面常有<strong>「椒鹽狀」顆粒質感</strong>",
    "<strong>分離式道路</strong>比其他地中海國家更常見",
    "雪桿：從上到下黑色、橘色、黑色、白色，附小紅色反光鏡",
    "護欄：A 型和 B 型混用",
    "磚鋪路面非常常見",
    "主要高速公路道路品質良好"
  ],
  bollardInfo: [
    "Bollard：<strong>矩形純白薄片</strong>，正面紅色反光條（Romania 和 Australia 也有類似）"
  ],
  poleInfo: [
    "<strong>電線桿</strong>：<strong>梯子狀/網狀金屬桿</strong>很常見（不同於 Romania/Hungary 的混凝土多孔桿）"
  ],
  signInfo: [
    "誘導標：<strong>白底紅箭頭</strong>（箭頭尖端通常不延伸到標識邊緣，部分有霓虹黃邊框）",
    "停車標誌：<strong>「DUR」</strong>（土耳其獨有）"
  ],
  landscape: [
    "Turkey 西部：地中海/愛琴海沿岸",
    "中 Anatolia：乾燥草原/高原",
    "Turkey 東部：崎嶇山脈",
    "Cappadocia：精靈煙囪和洞穴住居",
    "清真寺和現代建築混合"
  ],
  signs: [
    "Turkish 語 — 帶特殊字元的拉丁文字",
    "字元：<strong>ğ、ı（無點 i）、İ（大寫有點 I）、ş、ç、ö、ü</strong>",
    "ğ（軟 g）和 ı/İ（無點 i 區別）為 Turkish 獨有"
  ],
  plates: [
    "白色車牌附藍色條紋 + TR 代碼",
    "城市代碼：06（Ankara）、34（Istanbul）、35（Izmir）"
  ],
  unique: [
    "<strong>Turkish 字元 ğ 和 ı（無點 i）</strong>",
    "<strong>多孔金屬電線桿</strong>（vs Romania/Hungary 的混凝土）",
    "白色柱 + 厚紅色反光片 bollard",
    "到處都是帶宣禮塔的清真寺",
    "茶（çay）文化 — 可見茶館"
  ,
    "路名使用 Sokak (Sk.)（街道）、Cadde/Caddesi (Cd.)（大道）、Bulvar（大道）"
  ],
  tips: [
    "ğ 或 ı（無點 i）= Turkish",
    "帶洞的金屬電桿（非混凝土）= Turkey（非 Romania/Hungary）",
    "拉丁文字 + 清真寺 = Turkey（不是使用阿拉伯文字的阿拉伯國家）",
    "注意標誌上的 İstanbul、Türkiye、ğ",
    "🔗 <a href=\"https://www.google.com/maps/@41.0082,28.9784,3a,75y,90t\" target=\"_blank\" style=\"color:var(--accent-blue)\">Street View 範例（Istanbul）</a>"
  ]
},

'ukraine': {
  name: 'Ukraine', localName: 'Україна', flag: '🇺🇦', region: 'europe',
  drivingSide: 'right', tld: '.ua', phoneCode: '+380', language: 'Ukrainian', currency: 'Hryvnia (UAH)',
  camera: [
    "<strong>100% Gen 3</strong>（全部為第三代街景）",
    "⚠️ Ukraine 沒有 Gen 2 或 Gen 4 — Russia 有 Gen 2 和 Gen 4",
    "覆蓋集中在城市及城市間主要道路"
  ],
  car: [
    "Gen 3：<strong>紅色轎車</strong> — Ukraine 幾乎獨有的紅色街景車",
    "<strong>長天線</strong>有時可見，有時不可見；無天線時考慮 Ukraine",
    "⚠️ Russia Gen 3 總是有天線（短或長），若完全無天線則考慮 Ukraine",
    "也有罕見的黑車長天線、白車長天線、灰車短天線覆蓋",
    "無 snorkel、無 車頂架 (roof rack)"
  ],
  roads: [
    "道路品質不一 — 許多地區很差",
    "白色中線和白色邊線",
    "歐洲風格路標",
    "路面上有白色公里標記（寬白色矩形 + 數字）",
    "高速公路標誌為藍色或綠色"
  ],
  bollardInfo: [
    "白色路桩帶<strong>紅色反光條</strong>，底部有時塗黑",
    "護欄為 A 型，常有白色或紅色反光板"
  ],
  poleInfo: [
    "<strong>混凝土圓柱桿</strong>最常見",
    "樹木和電線桿底部常<strong>塗白色</strong>（Ukraine/Russia/Belarus 共通特徵）",
    "也有木桿，部分地區有金屬桿"
  ],
  signInfo: [
    "誘導標：<strong>紅底白箭頭</strong>（與 Estonia、Russia 同款）",
    "城鎮入口標志為白底，附城市名稱",
    "公路編號為藍色或綠色背景"
  ],
  landscape: [
    "中部/南部遼闊平坦的草原",
    "西部喀爾巴阡山脈",
    "夏季向日葵花田",
    "蘇聯時期建築為主",
    "東正教教堂（Ukrainian 風格）"
  ],
  signs: [
    "烏克蘭文範例：<span class=\"script-sample\" style=\"font-size:1.2rem\">вулиця Київ Ї Є І</span> — 有 Ї Є І（俄語沒有）",
    "<strong>Ukrainian 西里爾文</strong> — 關鍵獨特字母：Ґ、Є、І、Ї",
    "Ї（Yi）— I 上方兩個點，Ukrainian 專有",
    "沒有 Ы（Russian 有 Ы，Ukrainian 沒有）",
    "沒有 Ё（Russian 有 Ё，Ukrainian 沒有）"
  ],
  plates: [
    "白色車牌附 UA 代碼 + Ukrainian 國旗",
    "區域代碼：AA（Kyiv）、AH（Dnipropetrovsk）等"
  ],
  unique: [
    "<strong>Ї（І 上方兩個點）</strong> — 100% Ukrainian",
    "<strong>І（Ukrainian 的 I）取代 Russian 的 И</strong>",
    "沒有 Ы 或 Ё — 看到這些就是 Russian，不是 Ukrainian",
    "大面積向日葵花田",
    "蘇聯時期公寓大樓",
    "Gen 4 紅色 Google 街景車"
  ],
  tips: [
    "看到 Ї（有兩個點的 I）？= Ukraine，保證",
    "看到 Є？= Ukrainian（Russian 沒有此字母）",
    "西里爾文沒有 Ы 或 Ё = 很可能是 Ukrainian",
    "平坦草原 + 向日葵 + Ukrainian 西里爾文 = Ukraine",
    "🔗 <a href=\"https://www.google.com/maps/@50.4501,30.5234,3a,75y,90t\" target=\"_blank\" style=\"color:var(--accent-blue)\">Street View 範例（Kyiv）</a>"
  ]
},

'uk': {
  name: 'United Kingdom', localName: 'United Kingdom', flag: '🇬🇧', region: 'europe',
  drivingSide: 'left', tld: '.uk', phoneCode: '+44', language: 'English', currency: 'Pound (GBP)',
  camera: [
    "<strong>~61% Gen 4 + ~39% Gen 3</strong>",
    "全境覆蓋範圍廣泛",
    "⚠️ 有 Gen 4 小相機 (smallcam/low cam) 覆蓋（~27,000 點位）— 視角更低、模糊區域更大"
  ],
  car: [
    "Gen 4：<strong>藍色轎車</strong>（2023 也有<strong>黑色 + 圓形天線</strong>）",
    "Gen 4 藍車無天線 2021：常見（UK 是 2021 西歐涵蓋主力之一，與 France、Ireland 並列）",
    "Gen 4：也有<strong>電動車</strong>覆蓋 — 僅 London 市中心",
    "Gen 2/3：白色轎車",
    "靠左行駛",
    "無 snorkel、無 車頂架 (roof rack)"
  ],
  roads: [
    "靠左行駛",
    "Scotland 路樁較粗、紅灰色反光帶環繞整個路樁（外觀類似法國路樁但頂部光滑非尖頂）",
    "<strong>長白色虛線中線</strong>，線間隙有<strong>貓眼反射器</strong>（英國重要線索）",
    "<strong>雙黃線</strong>常用於道路兩側（禁止停車區，尤其城市區域）",
    "圓環極為常見",
    "速限以 mph 標示"
  ],
  bollardInfo: [
    "Bollard：<strong>圓柱形，頂部光滑</strong>，正面紅色反光板、背面白色反光板，黑白黑間隔條紋"
  ],
  poleInfo: [
    "<strong>電線桿</strong>：常用<strong>木質桿</strong>，桿側有<strong>金屬桿台階</strong>（一系列細水平金屬棒），Ireland 也有",
    "電線桿上有<strong>黃色警告貼紙</strong>（有被閃電擊中的人圖案，Ireland 的只有閃電）"
  ],
  signInfo: [
    "STOP 標誌：<strong>STOP</strong>",
    "誘導標：<strong>黑底白箭頭</strong>（Ireland 為黑底黃箭頭）",
    "讓行標誌寫 'GIVE WAY'（Ireland 寫 'YIELD'）"
  ],
  landscape: [
    "England：翠綠起伏鄉村、樹籬",
    "Scotland：高地、湖泊、荒原",
    "Wales：山脈、羊群",
    "城市中的紅磚排屋",
    "鄉村的石造小屋"
  ],
  signs: [
    "英語",
    "Wales 的雙語標誌（Welsh + 英語）",
    "Scotland 的雙語標誌（Gaelic + 英語，有限地區）",
    "速度以 mph 標示、距離以英里計"
  ],
  plates: [
    "白色前車牌、黃色後車牌",
    "格式：AB12 CDE",
    "類似 Ireland 但格式不同"
  ],
  unique: [
    "<strong>黑白 bollard 頂部有紅色矩形</strong>",
    "<strong>靠左行駛 + 英語 + mph</strong>",
    "London 的紅色雙層巴士",
    "紅色電話亭和郵筒",
    "到處都是圓環",
    "狹窄鄉村道路旁的樹籬",
    "白色前車牌 + 黃色後車牌（與 Ireland 共有）"
  ],
  tips: [
    "英語 + 靠左行駛 + mph = UK",
    "UK 使用 mph（Ireland 使用 km/h）",
    "UK 使用英鎊（Ireland 使用歐元）",
    "紅色郵筒 = UK（Ireland 的是綠色）",
    "🔗 <a href=\"https://www.google.com/maps/@51.5074,-0.1278,3a,75y,90t\" target=\"_blank\" style=\"color:var(--accent-blue)\">Street View 範例（London）</a>"
  ]
},

'gibraltar': {
  name: 'Gibraltar', localName: 'Gibraltar', flag: '🇬🇮', region: 'europe',
  drivingSide: 'right', tld: '.gi', phoneCode: '+350', language: 'English', currency: 'Pound Sterling / Gibraltar Pound (GBP/GIP)',
  camera: [
    "<strong>100% Gen 3</strong>",
    "車上有<strong>獨特的長天線，頂端為銀色</strong> — 被稱為「直布羅陀天線」",
    "在歐洲除直布羅陀外，此天線僅在西班牙部分地區出現（不與直布羅陀接壤）",
    "所有街景均在<strong>12月拍攝</strong> — 可見聖誕裝飾"
  ],
  car: [
    "Gen 3：<strong>黑色</strong>街景車",
    "長天線頂端銀色 — 「直布羅陀天線」",
    "西班牙部分地區也有類似天線，但不與直布羅陀接壤"
  ],
  roads: [
    "<strong>靠右行駛</strong> — 與英國本土不同！",
    "英式風格道路標誌和基礎設施",
    "許多上坡蜿蜒道路通往巨岩",
    "道路空間有限 — 非常小的領地"
  ],
  landscape: [
    "<strong>直布羅陀巨岩</strong>（Rock of Gibraltar）— 巨大石灰岩山，幾乎每處都可望見",
    "裸露的白色石灰岩，形狀獨特",
    "地中海環境",
    "城區房屋密集，柔和色彩和百叶窗（綠色/藍色/棕色）",
    "<strong>巴巴里獼猴</strong>（野生猴子）— 歐洲唯一可見野生猴子的地方",
    "南端可見<strong>易卜拉欣清真寺</strong>尖塔 — 歐洲大陸最南端清真寺"
  ],
  signs: [
    "<strong>英語</strong>為主 — 地中海環境中的英語官方標誌是重要線索",
    "POLICE NOTICE、DIVERSION、SLOW 等英式標誌用語",
    "⚠️ Malta 也使用英語且有地中海風景 — 需用其他線索區分"
  ],
  plates: [
    "白色前車牌、<strong>黃色後車牌</strong> — 與英國相同",
    "左側有藍色 EU 條紋"
  ],
  unique: [
    "<strong>長天線頂端銀色</strong>（直布羅陀天線）— 關鍵辨識特徵",
    "<strong>直布羅陀巨岩</strong> — 巨大石灰岩山幾乎處處可見",
    "<strong>靠右行駛</strong>但使用英式黃色後車牌 — 歐洲中非常獨特的組合",
    "<strong>巴巴里獼猴</strong> — 歐洲唯一野生猴子",
    "12月拍攝 — <strong>聖誕裝飾</strong>可見",
    "地中海環境中的英語標誌"
  ],
  tips: [
    "銀色頂端長天線 + 地中海環境 = Gibraltar",
    "巨大石灰岩山（巨岩）= 立即確認 Gibraltar",
    "靠右行駛 + 英語 + 黃色後車牌 = Gibraltar（不是 UK 本土）",
    "聖誕裝飾 + 地中海 = 可能是 Gibraltar（12月拍攝）",
    "野生猴子 + 歐洲 = Gibraltar",
    "🔗 <a href=\"https://www.google.com/maps/@36.1408,-5.3536,3a,75y,90t\" target=\"_blank\" style=\"color:var(--accent-blue)\">Street View 範例（Gibraltar）</a>"
  ]
},

'isle-of-man': {
  name: 'Isle of Man', localName: 'Ellan Vannin', flag: '🇮🇲', region: 'europe',
  drivingSide: 'left', tld: '.im', phoneCode: '+44-1624', language: 'English', currency: 'Pound Sterling (GBP)',
  camera: [
    "<strong>100% Gen 2</strong>",
    "低鏡頭位置，上下方有圓形模糊區域",
    "影像色彩輕微失真",
    "在國家連勝中算作英國"
  ],
  car: [
    "Gen 2：<strong>黑色</strong>街景車",
    "低鏡頭 — 上下方有圓形模糊區域",
    "影像色彩失真（Gen 2 特徵）"
  ],
  roads: [
    "靠左行駛（英國皇家屬地）",
    "狹窄道路貫穿丘陵農田",
    "沿主幹道有<strong>黑白相間路緣石</strong>",
    "道路基礎設施與英國本土相似"
  ],
  landscape: [
    "丘陵上的農田為主要景觀",
    "整體<strong>多山</strong>，但北部例外 — 北部地勢<strong>非常平坦</strong>，向南可見山脈",
    "類似愛爾蘭的白色粉刷牆和入口牆的房屋",
    "<strong>金雀花（荊豆）</strong>— 明亮黃色花束，在島上常見",
    "英國和愛爾蘭崎嶇地帶也有金雀花"
  ],
  signs: [
    "英語",
    "道路標誌與英國本土非常相似",
    "城市中可見<strong>藍色護柱</strong>"
  ],
  plates: [
    "白色前車牌、黃色後車牌",
    "⚠️ 車牌左側有<strong>紅色條紋</strong> — 與英國本土的藍色 EU 條紋不同",
    "紅色條紋是區分 Isle of Man 和 UK 的關鍵特徵"
  ],
  unique: [
    "車牌左側<strong>紅色條紋</strong> — 最重要的辨識線索",
    "<strong>100% Gen 2 覆蓋</strong> — 低鏡頭、圓形模糊、色彩失真",
    "南部街景中鏡頭左側有<strong>「樹枝污漬」</strong>",
    "<strong>藍色底座帶藍色小貼紙的燈</strong> — 島上大部分地區可見",
    "燈上貼紙前兩個字母可精確到 21 個教區",
    "首府 Douglas 有大量排屋，比島上其他地區人口更密集"
  ],
  tips: [
    "Gen 2 覆蓋 + 類似 UK + 車牌紅色條紋 = Isle of Man",
    "車牌紅色條紋（非藍色）= Isle of Man（非 UK 本土）",
    "北部平坦 + 南部多山 = Isle of Man 方位參考",
    "南部街景有鏡頭左側「樹枝污漬」",
    "與 UK 非常相似但 Gen 2 畫質 + 紅色車牌條紋可區分",
    "🔗 <a href=\"https://www.google.com/maps/@54.1509,-4.4806,3a,75y,90t\" target=\"_blank\" style=\"color:var(--accent-blue)\">Street View 範例（Douglas）</a>"
  ]
},

'jersey': {
  name: 'Jersey', localName: 'Jersey / Jèrri', flag: '🇯🇪', region: 'europe',
  drivingSide: 'left', tld: '.je', phoneCode: '+44-1534', language: 'English, French', currency: 'Pound Sterling / Jersey Pound (GBP/JEP)',
  camera: [
    "<strong>100% Gen 2</strong>",
    "所有全景由第 2 代相機拍攝",
    "大部分覆蓋為<strong>晴朗天氣</strong>（藍天） — 比 UK 本土和 Isle of Man 更常見晴天",
    "在國家連勝中算作英國"
  ],
  car: [
    "Gen 2：<strong>黑色</strong>街景車",
    "拍攝時天氣晴朗 — 與 UK 本土和 Isle of Man 的陰天形成對比"
  ],
  roads: [
    "靠左行駛",
    "道路基礎設施與英國相似（指路標誌、誘導標誌、警告標誌）",
    "十字路口使用<strong>黃色讓行線</strong>（vs UK 使用雙虛線白線）",
    "<strong>黃色實線外線 + 白色虛線中線</strong> — 歐洲唯一使用此標線的地方",
    "許多蜿蜒道路和樹籬，類似英國鄉間小路"
  ],
  landscape: [
    "不列顛文化和諾曼文化的<strong>獨特組合</strong>",
    "建築與法國北部相似：淡雅柔和牆壁色彩 + 深色石板屋頂",
    "大量<strong>紅色花崗岩</strong>建築 — 島上豐富的花崗岩資源",
    "英式排屋也常見",
    "<strong>黃色電話亭</strong>（vs UK 本土的紅色電話亭）",
    "<strong>康沃爾棕櫚樹</strong>（澳洲朱蕉）— 細樹幹和拱形葉子",
    "Les Mielles 自然保護區：西海岸的廣闘無樹土地"
  ],
  signs: [
    "由於靠近法國，路名和地名<strong>大量包含法語單詞</strong>",
    "傳統語言 <strong>Jèrriais（澤西語）</strong>出現在部分路牌上 — 與法語密切相關",
    "大多數街道名稱標誌標有<strong>所在教區徽章</strong>",
    "廣泛的自行車路線網絡 — 常見 <strong>\"Green Lane\"</strong> 標誌",
    "包含島嶼輪廓的<strong>藍色路線標牌</strong>也常見"
  ],
  plates: [
    "白色前車牌、黃色後車牌 — 英式格式",
    "左側有<strong>紅色澤西徽章</strong>",
    "未模糊車牌中代碼均以字母 <strong>\"J\"</strong> 開頭",
    "從未加入歐盟 — 車牌<strong>無藍色 EU 條紋</strong>",
    "後車牌左側有<strong>細白色條紋</strong>"
  ],
  unique: [
    "<strong>黃色讓行線</strong>（vs UK 的白色雙虛線）",
    "<strong>黃色實線外線 + 白色虛線中線</strong> — 歐洲唯一",
    "<strong>黃色電話亭</strong>（vs UK 的紅色電話亭）",
    "<strong>紅色花崗岩</strong>建築隨處可見",
    "路名大量法語 + 英語混合",
    "車牌以 \"J\" 開頭 + 紅色徽章 + 無 EU 藍條紋",
    "晴朗天氣的 Gen 2 覆蓋 — 有藍天",
    "西南部有<strong>綠紫色變色</strong>的影像故障"
  ],
  tips: [
    "黃色電話亭 = Jersey（UK 紅色電話亭）",
    "黃色讓行線 + 英法混合路名 = Jersey",
    "紅色花崗岩建築 + 英式道路設施 = Jersey",
    "Gen 2 + 晴朗藍天 + 英式道路 = 可能是 Jersey",
    "車牌以 J 開頭 + 無 EU 條紋 = Jersey",
    "🔗 <a href=\"https://www.google.com/maps/@49.2138,-2.1358,3a,75y,90t\" target=\"_blank\" style=\"color:var(--accent-blue)\">Street View 範例（St Helier）</a>"
  ]
},

// ╔══════════════════════════════════════════╗
// ║           ASIA                           ║
// ╚══════════════════════════════════════════╝

'bangladesh': {
  name: 'Bangladesh', localName: 'বাংলাদেশ', flag: '🇧🇩', region: 'asia',
  drivingSide: 'left', tld: '.bd', phoneCode: '+880', language: 'Bengali', currency: 'Taka (BDT)',
  camera: [
    "<strong>98% Gen 4 + 1% Gen 3 + 1% Shitcam（三代有三種特殊車型）</strong>",
    "覆蓋持續擴展中",
    "部分區域覆蓋品質較低"
  ],
  car: [
    "<strong>Gen 3 有三種街景車</strong>：支架紅鏡、經典白、條紋白",
    "⚠️ <strong>支架紅鏡</strong>和<strong>條紋白</strong>為 Bangladesh 獨有",
    "注意：Cambodia 也有高度相似的條紋白車，需要區分",
    "Gen 4 有黑車和白車兩種",
    "也有 shitcam（畫質極差的第三方覆蓋）",
    "部分地區使用人力車/船隻拍攝"
  ],
  roads: [
    "白色中心線（有時為黃色），路標杆黑白條紋",
    "左側通行",
    "路面品質通常較差",
    "部分涵蓋區域可見洪水",
    "人力車在道路上極為常見"
  ],
  poleInfo: [
    "<strong>混凝土電線桿</strong>為主 — 表面有橫向凹痕或小孔（梯子桿型）",
    "鄉村地區也有竹製或簡單木桿；城市區域有鐵桿"
  ],
  landscape: [
    "極度平坦的三角洲地形",
    "河流與水道遍布（恆河／布拉馬普特拉河三角洲）",
    "翠綠茂密的植被 — 稻田",
    "人口非常密集",
    "洪水頻繁"
  ],
  signs: [
    "孟加拉文範例：<span class=\"script-sample\" style=\"font-size:1.2rem\">রাস্তা ঢাকা</span> — 有頂部橫線+向左三角形",
    "<strong>孟加拉文</strong> — 頂部有水平連接線，類似天城文",
    "但孟加拉文有<strong>向左的小三角形</strong>（可與印地文區分）",
    "字形非常圓潤流暢"
  ],
  plates: [
    "車牌有白色、黑色或<strong>青綠色</strong>三種",
    "⚠️ <strong>青綠色和黑色車牌為 Bangladesh 獨有</strong>"
  ],
  unique: [
    "<strong>孟加拉文帶有向左的三角形</strong>",
    "平坦三角洲地形 — 到處都是水",
    "人力車（色彩鮮豔、裝飾華麗）極為常見",
    "影像中可見極高人口密度",
    "煙囪形紅白護柱",
    "成衣工廠招牌（全球成衣製造中心）"
  ],
  tips: [
    "頂部有連接線 + 向左三角形 = 孟加拉文 = Bangladesh（不是 India）",
    "平坦 + 到處是水 + 極高人口密度 = Bangladesh",
    "色彩鮮豔的裝飾人力車 = Bangladesh",
    "🔗 <a href=\"https://www.google.com/maps/@23.8103,90.4125,3a,75y,90t\" target=\"_blank\" style=\"color:var(--accent-blue)\">Street View 範例（Dhaka）</a>"
  ]
},

'bhutan': {
  name: 'Bhutan', localName: 'འབྲུག་ཡུལ', flag: '🇧🇹', region: 'asia',
  drivingSide: 'left', tld: '.bt', phoneCode: '+975', language: 'Dzongkha', currency: 'Ngultrum (BTN)',
  camera: ["<strong>100% Trekker</strong>（涵蓋極有限）", "部分地區有 trekker 涵蓋"],
  car: [
    "涵蓋極為有限 — 大部分為 trekker",
    "無標準 Google 車輛辨識特徵",
    "靠左行駛"
  ],
  roads: [
    "白色或黃色中心線（標線不一致）",
    "左側行駛",
    "山路髮夾彎",
    "單車道路面常見",
    "路況不佳"
  ],
  bollardInfo: [
    "<strong>黑白條紋石柱</strong> — 山路彎道外側常見，頂部有時為圓頂",
    "部分為簡單白色混凝土柱，無反光片"
  ],
  poleInfo: [
    "<strong>木製電線桿</strong>為主 — 山區常見簡單木桿，上有多條電線",
    "部分地區有細鐵桿或混凝土桿"
  ],
  landscape: [
    "喜馬拉雅山脈",
    "山坡茂密森林",
    "佛教寺院（dzong）",
    "經幡隨處可見",
    "傳統不丹建築"
  ],
  signs: [
    "宗喀語（藏文字母） — 有頂部橫線的方角字形",
    "標誌上也使用英文"
  ],
  plates: [
    "<strong>紅色車牌配白色文字</strong> — 全球極少數紅色車牌的國家！",
    "BP 前綴為私家車；BT 前綴為計程車（黃底黑字）",
    "紅色車牌即使透過模糊也非常醒目"
  ],
  unique: [
    "<strong>紅色車牌</strong> — 全球極少數，非常強的辨識線索",
    "藏文 + 喜馬拉雅山景",
    "道路沿途的經幡",
    "傳統不丹建築（白色牆面配彩色裝飾）",
    "佛教寺院（宗堡 dzong）"
  ],
  tips: [
    "類藏文字體 + 喜馬拉雅山 + 經幡 = Bhutan",
    "比西藏本土森林覆蓋更多",
    "🔗 <a href=\"https://www.google.com/maps/@27.4728,89.6393,3a,75y,90t\" target=\"_blank\" style=\"color:var(--accent-blue)\">Street View 範例（Thimphu）</a>"
  ]
},

'cambodia': {
  name: 'Cambodia', localName: 'កម្ពុជា', flag: '🇰🇭', region: 'asia',
  drivingSide: 'right', tld: '.kh', phoneCode: '+855', language: 'Khmer', currency: 'Riel (KHR)',
  camera: [
    "<strong>80.2% Gen 3 + 19.8% Shitcam（印度相機）</strong>",
    "Shitcam 僅出現在<strong>西南半邊</strong>",
    "主要道路覆蓋良好",
    "部分地區使用船隻和火車拍攝"
  ],
  car: [
    "兩種 Gen 3 街景車：(1) <strong>白色帶條紋車（左白右黃），無天線</strong> — 柬埔寨獨有 (2) <strong>短粗天線帶三條螺紋</strong>（拉美國家類似天線僅一條螺紋）",
    "⚠️ 白色條紋車是柬埔寨獨有的，不要與 Bangladesh 條紋車混淆",
    "Mekong 河區域使用<strong>船隻</strong>拍攝",
    "鐵路沿線使用<strong>火車</strong>拍攝"
  ],
  roads: [
    "右側通行",
    "<strong>黃色中線</strong>（虛線或實線），外線罕見但若存在則為<strong>白色實線</strong>（與 Thailand 類似）",
    "<strong>許多道路未鋪設</strong> — 通常只有幹道和城市附近道路有鋪設",
    "路標為石製，白色底座 + 圓形紅頂",
    "路況不一 — 高速公路尚可，鄉間道路崎嶇"
  ],
  bollardInfo: [
    "護柱：最常見為<strong>紅白相間條紋石柱</strong>，或頂部紅色底部白色石柱（紅色部分有反光板）"
  ],
  poleInfo: [
    "<strong>電線桿</strong>：(1) <strong>混凝土梯形桿</strong>（表面有梯子狀凹痕）(2) <strong>圓形混凝土桿帶小孔</strong>；簡單木桿罕見",
    "⚠️ Thailand 用方形混凝土桿（有成排小孔），Cambodia 不常見此型"
  ],
  signInfo: [
    "誘導標：<strong>黑底黃箭頭</strong>（不常見；其他東南亞國家為黃底黑箭頭，方向相反）",
    "停車標誌：<strong>ឈប់</strong>（chhob，高棉文）— 高棉文停車標誌是 Cambodia 強力辨識特徵"
  ],
  landscape: [
    "平坦地形 — 湄公河與洞里薩湖低地",
    "到處都是稻田",
    "棕櫚樹（糖棕為代表性樹種）",
    "吳哥窟寺廟群區域",
    "熱帶植被"
  ],
  signs: [
    "高棉文範例：<span class=\"script-sample\" style=\"font-size:1.2rem\">ផ្លូវ ភ្នំពេញ</span> — 每個字母頂部有向右的鉤",
    "<strong>高棉文</strong> — 幾乎每個字母頂部都有<strong>向右的小鉤</strong>",
    "字形非常有特色，曲線明顯",
    "比泰文或寮文曲線更銳利"
  ],
  plates: [
    "白色車牌為一般私家車",
    "黃色車牌為商用車輛（計程車、卡車）",
    "車牌有高棉文字和阿拉伯數字",
    "格式：省份代碼 + 數字"
  ],
  unique: [
    "<strong>高棉文帶有向右的鉤</strong> — 非常有辨識度",
    "<strong>紅色金字塔頂護柱</strong>",
    "糖棕（高瘦樹幹、扇形樹冠）",
    "嘟嘟車（moto-remork）到處都有",
    "吳哥窟寺廟影像",
    "Gen 4 車有三脊天線"
  ],
  tips: [
    "每個字母都有向右鉤 = 高棉文 = Cambodia",
    "紅色金字塔頂護柱 = Cambodia（不是 Thailand）",
    "糖棕 + 平坦地形 + 高棉文 = Cambodia",
    "泰文有小圓圈；高棉文有向右的鉤",
    "🔗 <a href=\"https://www.google.com/maps/@11.5564,104.9282,3a,75y,90t\" target=\"_blank\" style=\"color:var(--accent-blue)\">Street View 範例（Phnom Penh）</a>"
  ]
},

'hong-kong': {
  name: 'Hong Kong', localName: '香港', flag: '🇭🇰', region: 'asia',
  drivingSide: 'left', tld: '.hk', phoneCode: '+852', language: 'Chinese (Cantonese), English', currency: 'HK Dollar (HKD)',
  camera: ["<strong>99% Gen 4 + 1% Gen 3 + 1% Gen 2</strong>", "密集的都市涵蓋，三種世代都有"],
  car: ["白色轎車為主", "靠左行駛"],
  roads: [
    "白色虛線中心線 + 白色實線邊線（英式）",
    "左側通行（英國殖民遺產）",
    "密集的都市道路網絡",
    "雙語道路標線（中文 + 英文）"
  ],
  landscape: [
    "極度密集的高樓都市景觀",
    "丘陵地形，道路陡峭",
    "可見維多利亞港",
    "都市與郊野公園並存",
    "郊野公園有熱帶植被"
  ],
  signs: [
    "繁體中文字 — 非簡體字",
    "英文為共同官方語言",
    "所有標誌皆為雙語（中文 + 英文）",
    "英式道路標誌"
  ],
  plates: [
    "白色前車牌 + 黃色後車牌（與 UK/Ireland 相同系統）",
    "格式：2 字母 + 4 數字（如 AB 1234）",
    "無前綴 — 直接是字母數字",
    "⚠️ Macau 為全黑色車牌 — 可區分兩地"
  ],
  unique: [
    "<strong>左側通行 + 中文 + 英文</strong>",
    "繁體中文字（非簡體字）",
    "超高密度的高樓都市景觀",
    "可見英國殖民遺產",
    "雙層巴士和電車"
  ],
  tips: [
    "中文 + 英文 + 左側通行 = Hong Kong",
    "密集摩天大樓 + 繁體中文 = Hong Kong",
    "Macau 也是左側通行，但用葡萄牙文而非英文",
    "🔗 <a href=\"https://www.google.com/maps/@22.3193,114.1694,3a,75y,90t\" target=\"_blank\" style=\"color:var(--accent-blue)\">Street View 範例（Hong Kong）</a>"
  ]
},

'india': {
  name: 'India', localName: 'भारत', flag: '🇮🇳', region: 'asia',
  drivingSide: 'left', tld: '.in', phoneCode: '+91', language: 'Hindi, English, + 20 others', currency: 'Rupee (INR)',
  camera: [
    "<strong>99% Shitcam + 0.9% Gen 4（smallcam）+ 0.1% Gen 3</strong>",
    "Shitcam 特徵：偏棕色調、圓形大面積打碼蓋住街景車",
    "Gen 4 為 <strong>smallcam</strong>（安裝位置比普通四代更低，前方有小凸起）",
    "全國範圍有大量<strong>第三代徒步街景</strong>分布"
  ],
  car: [
    "絕大多數為 Shitcam 覆蓋 — 偏棕色調、大圓形打碼",
    "Gen 4 為 smallcam（比普通四代安裝更低，打碼有時完全透明）",
    "涵蓋品質和車型因地區差異很大",
    "靠左行駛"
  ],
  roads: [
    "左側通行",
    "路標杆通常為<strong>黑白條紋</strong>（Bangladesh 和 Sri Lanka 也有）",
    "路面品質差異極大",
    "混亂的交通，各種車輛混行（卡車、三輪車、牛）",
    "國道系統（NH 編號）",
    "減速帶極為常見"
  ],
  poleInfo: [
    "<strong>電線桿</strong>：最常見為<strong>矩形混凝土桿</strong>配<strong>三叉戟杆頂</strong>；幾乎全為混凝土或金屬材質，木桿極罕見",
    "各地有獨特的桿子和杆頂樣式"
  ],
  landscape: [
    "極度多樣：喜馬拉雅山、沙漠、熱帶海岸、平原",
    "南部和東部有稻田",
    "西部有塔爾沙漠",
    "密集的都市區域",
    "印度教寺廟、清真寺、教堂"
  ],
  signs: [
    "天城文(Hindi)範例：<span class=\"script-sample\" style=\"font-size:1.2rem\">सड़क नई दिल्ली</span> — 頂部橫線連接",
    "<strong>天城文（印地語）</strong> — <strong>頂部有水平橫線連接字母</strong>",
    "多種地區文字（Tamil、Telugu、Bengali、Kannada、Malayalam 等）",
    "標誌上廣泛使用英文",
    "通常三語並列：印地語 + 地區語言 + 英文"
  ],
  plates: [
    "<strong>前後車牌顏色相同</strong> — 無前/後差異",
    "<strong>白底黑字</strong> — 私家車（前後皆白色），帶有邦代碼（例如 MH = Maharashtra、DL = Delhi）",
    "<strong>黃底黑字</strong> — 商用車輛（計程車、卡車、巴士，前後皆黃色）",
    "綠底白字 — 電動車（2019 年起）",
    "紅底白字 — 臨時登記（新車未領正式車牌）"
  ],
  unique: [
    "<strong>天城文帶有頂部連接橫線</strong>",
    "地景和文字的多樣性令人驚嘆",
    "三輪車（auto-rickshaw）到處都有",
    "牛在路上行走",
    "色彩鮮豔的裝飾卡車",
    "密集而混亂的交通"
  ],
  tips: [
    "頂部有水平橫線連接字母 = 天城文 = 很可能是 India",
    "但 Nepal 也使用天城文 — India 更平坦且交通更多",
    "同一標誌上有多種文字 = India（不同邦使用不同文字）",
    "三輪車 + 天城文 = India",
    "🔗 <a href=\"https://www.google.com/maps/@28.6139,77.209,3a,75y,90t\" target=\"_blank\" style=\"color:var(--accent-blue)\">Street View 範例（Delhi）</a>"
  ]
},

'indonesia': {
  name: 'Indonesia', localName: 'Indonesia', flag: '🇮🇩', region: 'asia',
  drivingSide: 'left', tld: '.id', phoneCode: '+62', language: 'Indonesian (Bahasa Indonesia)', currency: 'Rupiah (IDR)',
  camera: [
    "<strong>82.7% Gen 3 + 17.3% Gen 4</strong>",
    "Gen 3 中黃色中線較罕見（近年才開始使用）",
    "Java 覆蓋最多，Bali 次之，其他島嶼較少"
  ],
  car: [
    "Java 地區：<strong>細短天線（thin 短粗天線 (stubby antenna)）</strong>",
    "其他地區：標準白色轎車",
    "靠左行駛",
    "無 snorkel、無 車頂架 (roof rack)"
  ],
  roads: [
    "左側通行",
    "<strong>白色或黃色中線</strong>（實線或虛線），白色外線 — Malaysia 的道路線總是白色",
    "⚠️ 黃色中線在三代街景中較罕見（近年才開始使用）",
    "路況因島嶼而異",
    "機車主導交通",
    "黃色面向馬路的<strong>里程碑</strong>（印尼獨有），上有三個城鎮簡稱"
  ],
  bollardInfo: [
    "護柱：<strong>黑白方塊圓形/方形路樁</strong>（類似 Thailand）+ 黃黑色圓形路樁帶紅色反光片（英式路樁，常見於 Kalimantan）"
  ],
  poleInfo: [
    "<strong>電線桿</strong>：圓形<strong>混凝土或金屬桿</strong>；金屬桿常漆成<strong>黑色</strong>，上有<strong>印尼國旗圖案</strong>",
    "杆頂對稱/不對稱是重要的<strong>區域猜測線索</strong>"
  ],
  landscape: [
    "熱帶群島 — 超過 17,000 個島嶼",
    "火山地形（環太平洋火山帶）",
    "梯田（尤其是 Bali）",
    "茂密的熱帶植被",
    "清真寺隨處可見（全球最大穆斯林人口國）"
  ],
  signs: [
    "印尼語（Bahasa Indonesia） — <strong>拉丁字母，使用馬來語系詞彙</strong>",
    "與馬來語相似，但有部分詞彙差異",
    "'Jalan'（Jl.）表示街道／道路 — 非常常見",
    "常見詞彙：'kota'（城市）、'desa'（村莊）、'pulau'（島嶼）"
  ],
  plates: [
    "<strong>黑底白字</strong>車牌，分為<strong>三個白色區塊</strong>",
    "⚠️ Malaysia 也是黑底白字但只有<strong>兩個</strong>區塊 — 3 vs 2 是關鍵區別！",
    "以字母標示地區代碼（B=Jakarta、D=Bandung、L=Surabaya 等）"
  ],
  unique: [
    "<strong>黑白方塊護柱配金字塔頂</strong>",
    "<strong>路牌上有 'Jalan' 或 'Jl.'</strong>",
    "電桿底部紅白條紋（國旗配色）",
    "清真寺到處都有",
    "可見火山山脈",
    "機車交通密集",
    "Java 的 Google car 有細短天線"
  ],
  tips: [
    "'Jalan' 或 'Jl.' = Indonesia 或 Malaysia",
    "黑色車牌 = Indonesia（Malaysia 格式不同）",
    "清真寺 + 拉丁字母 + 熱帶 = 很可能是 Indonesia",
    "紅白條紋電桿 = Indonesia（國旗配色）",
    "🔗 <a href=\"https://www.google.com/maps/@-6.2088,106.8456,3a,75y,90t\" target=\"_blank\" style=\"color:var(--accent-blue)\">Street View 範例（Jakarta）</a>"
  ]
},

'japan': {
  name: 'Japan', localName: '日本', flag: '🇯🇵', region: 'asia',
  drivingSide: 'left', tld: '.jp', phoneCode: '+81', language: 'Japanese', currency: 'Yen (JPY)',
  camera: [
    "<strong>87.1% Gen 3 + 12.7% Gen 2 + 0.1% Gen 4 + 0.1% Gen 1</strong>",
    "⚠️ 因隱私法規，相機故意調低 (low cam) — 社群稱為「低相機」",
    "Low cam 特徵：視角更低、道路看起來更寬、車輛模糊區域更大",
    "北海道冬季積雪覆蓋率很低"
  ],
  car: [
    "<strong>低相機位置</strong> — 車輛模糊區域比正常大，路面顯得更寬，觀察角度更低",
    "街景車通常為<strong>白色加黑色</strong>，也有純黑色街景車（較少見）",
    "極少數有天線的街景車",
    "Gen 2/3/4 皆有涵蓋（87% 為 Gen 3）",
    "靠左行駛",
    "⚠️ 唯一另一個所有覆蓋都採用低相機的國家是 Switzerland（但 Switzerland 的模糊是全球最大）"
  ],
  roads: [
    "左側通行",
    "路面品質極佳",
    "<strong>三種道路劃線</strong>：(1) 白色實線外線 + 白色虛線中線（最常見）(2) 白色實線外線 + 黃色實線中線 (3) 白色實線外線 + 白色與黃色混合中線",
    "⚠️ 日本<strong>永遠不會有黃色外線</strong>",
    "白色簡單路樁，頂部帶圓形反射塊",
    "白色護欄為標準配置",
    "住宅區街道狹窄",
    "收費快速道路眾多",
    "轉角處常見交通鏡"
  ],
  bollardInfo: [
    "<strong>白色圓柱形路樁</strong>，頂部有<strong>圓形反射塊</strong> — 日本最常見的 bollard 類型",
    "北海道有<strong>紅白相間箭頭型雪杆</strong>（指示積雪時道路邊界）",
    "⚠️ Japan 路樁非常乾淨整齊，與東南亞的粗糙路樁形成對比"
  ],
  poleInfo: [
    "<strong>電線桿</strong>：圓形混凝土桿，表面有螺絲狀水平凸起（螺紋桿）— 非常普遍",
    "電線桿上常有<strong>電力公司標牌</strong>（各地方設計不同，可用於區域猜測）和<strong>反光帶</strong>（垂直黃色條紋/對角黃色條紋/對角白色條紋）"
  ],
  signInfo: [
    "停車標誌：日語「止まれ」（非 STOP）"
  ],
  landscape: [
    "多山地形（70% 為山地）",
    "密集都市區域（東京、大阪）",
    "鄉間有稻田",
    "櫻花（春季）和秋季紅葉",
    "寺廟和神社",
    "自動販賣機到處都是",
    "挡土牆是日本農村地區的重要線索"
  ],
  signs: [
    "日文範例：<span class=\"script-sample\" style=\"font-size:1.2rem\">通り 東京都 とうきょう カタカナ</span> — 漢字+平假名+片假名混用",
    "<strong>三種文字混合使用</strong>：漢字、平假名（ひらがな）、片假名（カタカナ）",
    "平假名：圓潤流暢的字形",
    "片假名：方角銳利的字形（用於外來語）",
    "路牌通常附有英文拼音"
  ],
  plates: [
    "<strong>顏色依車輛類型不同</strong>（前後車牌顏色相同）：",
    "⚠️ <strong>白底綠字</strong> — 一般私家車（最常見）",
    "⚠️ <strong>黃底黑字</strong> — 輕自動車（kei car，排氣量 660cc 以下的小型車）— GeoGuessr 中非常醒目",
    "<strong>綠底白字</strong> — 商用車輛（營業用大型車）",
    "<strong>黑底黃字</strong> — 輕自動車商用車（kei car 營業用）",
    "頂部有日文地區名稱",
    "黃色車牌在街景中辨識度極高 — 看到黃色車牌 + 日文 = Japan kei car"
  ],
  unique: [
    "<strong>三種日文文字混合使用</strong>",
    "<strong>相機高度低</strong> — 模糊範圍較大",
    "<strong>幾乎每個角落都有自動販賣機</strong>",
    "道路和基礎設施一塵不染",
    "神社的鳥居",
    "交通極度有序",
    "路邊有黃黑條紋護欄"
  ,
    "路名使用 通り (dōri)、丁目 (chōme)、番地 (banchi) — 日本地址系統基於區塊而非道路"
  ],
  tips: [
    "漢字 + 平假名 + 片假名混用 = Japan（China 只用漢字）",
    "到處都是自動販賣機 = 很可能是 Japan",
    "相機位置低（大範圍模糊） = Japan 或 Switzerland",
    "左側通行 + 日文 = Japan",
    "🔗 <a href=\"https://www.google.com/maps/@35.6762,139.6503,3a,75y,90t\" target=\"_blank\" style=\"color:var(--accent-blue)\">Street View 範例（Tokyo）</a>"
  ]
},

'south-korea': {
  name: 'South Korea', localName: '대한민국', flag: '🇰🇷', region: 'asia',
  drivingSide: 'right', tld: '.kr', phoneCode: '+82', language: 'Korean', currency: 'Won (KRW)',
  camera: [
    "<strong>99.6% Gen 3 + 0.4% Gen 4（主要使用 KakaoMap）</strong>",
    "大部分街景在秋冬季拍攝 — 景觀可能偏枯黃",
    "⚠️ 主要使用 KakaoMap/Naver 覆蓋（非 Google Street View）"
  ],
  car: [
    "KakaoMap 和 Naver 車輛（非 Google）",
    "Google 涵蓋：<strong>黑色、白色或銀色轎車，無天線</strong>",
    "<strong>100% Gen 3</strong>為主",
    "靠右行駛"
  ],
  roads: [
    "右側通行",
    "<strong>黃色中線 + 白色外線</strong>",
    "路面品質極佳",
    "路面上常見<strong>紅色減速帶</strong>",
    "人行橫道為<strong>黃白相間</strong>",
    "三角形警告標誌背景為<strong>黃色</strong>（非白色）",
    "現代化高速公路系統"
  ],
  bollardInfo: [
    "護柱：黑白楔形，正面圓形<strong>黃色反光板</strong>，背面灰色"
  ],
  poleInfo: [
    "<strong>電線桿</strong>：底部有<strong>黑黃色對角條紋標記</strong>（不延伸到底部，與 Taiwan 不同），頂部有<strong>錐形尖刺</strong>",
    "藍色箭頭形路牌懸掛在電線桿金屬條上"
  ],
  landscape: [
    "多山地形（70% 為山地，類似 Japan）",
    "密集都市（首爾、釜山）",
    "鄉間有稻田",
    "佛教寺廟與現代建築並存",
    "四季分明的樹木（櫻花、秋季紅葉）"
  ],
  signs: [
    "韓文範例：<span class=\"script-sample\" style=\"font-size:1.2rem\">거리 서울특별시</span> — 方塊形音節文字",
    "<strong>韓文（한글）</strong> — 方塊形音節字形",
    "由圓形、線條和角度組成：ㄱ、ㄴ、ㄷ、ㅁ 等",
    "每個音節方塊為正方形",
    "主要路牌廣泛使用英文"
  ],
  plates: [
    "<strong>前後車牌顏色相同</strong> — 無前/後差異",
    "<strong>白底黑字</strong> — 一般私家車（2006 年起標準格式，左側有藍色防偽全息條紋）",
    "<strong>綠底白字</strong> — 電動車/氫能車（2023 年起）",
    "<strong>螢光綠車牌</strong> — 公司車（車價 8,000 萬韓元以上，2024 年起，防止逃稅）",
    "黃底黑字 — 計程車/商用車",
    "車牌上有韓文"
  ],
  unique: [
    "<strong>韓文</strong> — 方塊音節字形，非常有辨識度",
    "<strong>KakaoMap／Naver 涵蓋</strong>（與 Google Street View 不同）",
    "Samsung、LG、Hyundai 品牌到處都有",
    "PC방（網咖）招牌",
    "特色韓式公寓大樓（아파트）"
  ],
  tips: [
    "方塊字形（韓文）= Korean",
    "Street View 介面與 Google 不同 = KakaoMap = South Korea",
    "韓文 + 現代化基礎設施 = South Korea",
    "韓文相比中文／日文更幾何化且有規律",
    "🔗 <a href=\"https://www.google.com/maps/@37.5665,126.9780,3a,75y,90t\" target=\"_blank\" style=\"color:var(--accent-blue)\">Street View 範例（Seoul）</a>"
  ]
},

'malaysia': {
  name: 'Malaysia', localName: 'Malaysia', flag: '🇲🇾', region: 'asia',
  drivingSide: 'left', tld: '.my', phoneCode: '+60', language: 'Malay (Bahasa Melayu)', currency: 'Ringgit (MYR)',
  camera: [
    "<strong>67.3% Gen 3 + 32.6% Gen 4 + 0.1% Gen 2</strong>",
    "涵蓋良好"
  ],
  car: [
    "Gen 3/4：白色轎車",
    "靠左行駛（與 Singapore, Indonesia 相同）",
    "無特殊車輛辨識特徵"
  ],
  roads: [
    "<strong>左側行駛</strong>",
    "<strong>雙白色中心線</strong>常見 — 東南亞唯一使用雙白中線的國家",
    "道路線<strong>總是白色</strong>（不像 Indonesia/Thailand 有黃色中線）",
    "高速公路路面品質良好",
    "粗黃帶（Malaysia 獨有，Hong Kong 和 UK 也少量出現）"
  ],
  bollardInfo: [
    "護柱：各種黑/白/灰/紅組合，樣式不同但佈局大多相同"
  ],
  poleInfo: [
    "<strong>電線桿</strong>上經常貼有<strong>黑色或白色貼紙</strong> — Malaysia 獨有特徵",
    "黑色貼紙下有時有紅白或紅藍條紋"
  ],
  signInfo: [
    "停車標誌：<strong>BERHENTI</strong>（馬來語）— Brunei 也使用相同文字",
    "⚠️ 與 Indonesia（STOP）和 Thailand（หยุด / STOP）不同",
    "路標杆幾乎永遠有<strong>黑白相間的條紋</strong>（亞洲的 Sri Lanka、Bhutan、Bangladesh 也有）"
  ],
  landscape: [
    "熱帶 — 到處都是油棕種植園",
    "馬來半島：都市與叢林並存",
    "婆羅洲（沙巴／砂拉越）：茂密熱帶雨林",
    "清真寺（穆斯林多數）+ 中式廟宇 + 印度教寺廟",
    "現代化都市（吉隆坡雙子塔）"
  ],
  signs: [
    "馬來語（Bahasa Melayu） — 拉丁字母，與印尼語非常相似",
    "'Jalan'（Jl.）表示道路／街道",
    "有時會同時使用阿拉伯文字（Jawi）",
    "英文廣泛使用",
    "華人多數地區有中文字"
  ],
  plates: [
    "<strong>黑底白字</strong>車牌，分為<strong>兩個白色區塊</strong>",
    "⚠️ Indonesia 也是黑底白字但分為<strong>三個</strong>區塊 — 2 vs 3 是關鍵區別！",
    "以邦名字母作為前綴（W=KL、J=Johor、P=Penang 等）",
    "計程車有不同顏色車牌"
  ],
  unique: [
    "五段式護柱設計",
    "多族群標誌（馬來文 + 中文 + 淡米爾文）",
    "油棕種植園主導地景",
    "清真寺、中式廟宇、印度教寺廟並存",
    "與 Indonesia 相似但靠左行駛"
  ],
  tips: [
    "'Jalan' + 左側通行 = Malaysia（Indonesia 靠右行駛）",
    "標誌上有多種文字（拉丁 + 中文 + 淡米爾文） = Malaysia",
    "油棕種植園 + 熱帶 + 左側通行 = Malaysia",
    "🔗 <a href=\"https://www.google.com/maps/@3.139,101.6869,3a,75y,90t\" target=\"_blank\" style=\"color:var(--accent-blue)\">Street View 範例（KL）</a>"
  ]
},

'mongolia': {
  name: 'Mongolia', localName: 'Монгол Улс', flag: '🇲🇳', region: 'asia',
  drivingSide: 'right', tld: '.mn', phoneCode: '+976', language: 'Mongolian', currency: 'Tugrik (MNT)',
  camera: [
    "<strong>67.4% Gen 3 + 32.6% Gen 4</strong>",
    "涵蓋有限 — 廣闊的無人空間",
    "所有街景都用大型皮卡車拍攝"
  ],
  car: [
    "<strong>Snorkel 進氣管可見</strong>（僅 Kenya 和 Mongolia 有）",
    "<strong>Roof rack + 車頂露營裝備/背包</strong> — 因拍攝偏遠地區需野營",
    "西部/烏蘭巴托：<strong>rubber-filled crossbars</strong>（黑色橡膠填充的橫桿）",
    "東部：橫桿<strong>無</strong>橡膠填充",
    "第二種車型：bars + <strong>紅色側鏡</strong>",
    "部分涵蓋為 pickup truck（白/藍色系）",
    "與 Kyrgyzstan 區別：Mongolia 有背包/露營裝備，Kyrgyzstan 沒有"
  ],
  roads: [
    "大量未鋪設道路 — 草原上的車轍痕跡",
    "烏蘭巴托以外極少有鋪設道路",
    "大多數道路無標線",
    "基礎設施明顯受<strong>俄羅斯影響</strong>：支撐石塊的木柱、白色燈柱、三條人行橫道標誌"
  ],
  bollardInfo: [
    "護柱：<strong>白色保齡球瓶形</strong>，頂部兩條紅色條紋（蒙古獨有）"
  ],
  signInfo: [
    "停車標誌：<strong>「ЗОГС」</strong>（蒙古獨有 — 全球唯一此文字）"
  ],
  landscape: [
    "遼闊草原 — 一望無際的草地",
    "南部為戈壁沙漠",
    "西部為山區",
    "遊牧民族與牲畜",
    "人口極度稀疏"
  ],
  signs: [
    "蒙古西里爾文範例：<span class=\"script-sample\" style=\"font-size:1.2rem\">Зам Улаанбаатар</span>",
    "蒙古西里爾字母",
    "有時可見傳統蒙古文（直書）",
    "詞彙受俄語影響"
  ],
  plates: [
    "白色車牌配西里爾字母",
    "左側有<strong>蒙古國旗圖案</strong>（紅色 soyombo 符號）",
    "格式：地區代碼 + 西里爾字母 + 數字"
  ],
  unique: [
    "<strong>Snorkel + 車頂露營裝備</strong> — 非常有辨識度的車輛特徵",
    "<strong>保齡球瓶形護柱</strong>",
    "遼闊空曠的草原，沒有樹木",
    "黑色條紋橫桿：西蒙古；無條紋：東蒙古",
    "可見遊牧文化（牧群、馬匹）"
  ],
  tips: [
    "Snorkel + 車頂裝備 = Mongolia（只有 Kenya 也有 snorkel）",
    "保齡球瓶護柱 = Mongolia",
    "遼闊空曠的草原 + 西里爾字母 = Mongolia",
    "橫桿有橡膠填充 = 西蒙古；無填充 = 東蒙古",
    "🔗 <a href=\"https://www.google.com/maps/@47.8864,106.9057,3a,75y,90t\" target=\"_blank\" style=\"color:var(--accent-blue)\">Street View 範例（UB）</a>"
  ]
},

'nepal': {
  name: 'Nepal', localName: 'नेपाल', flag: '🇳🇵', region: 'asia',
  drivingSide: 'left', tld: '.np', phoneCode: '+977', language: 'Nepali', currency: 'Rupee (NPR)',
  camera: [
    "<strong>99.5% Shitcam + 0.4% Gen 3 Trekker + 0.1% Gen 2</strong>",
    "⚠️ 幾乎全部為低品質覆蓋 (shitcam)",
    "部分山區有 trekker 步行覆蓋（Everest Base Camp 等）"
  ],
  car: [
    "大部分為 trekker 涵蓋（人背負相機）",
    "靠左行駛",
    "極少可見標準 Google 車輛"
  ],
  roads: [
    "標線極少，大部分道路無中心線",
    "左側行駛",
    "山路 — 狹窄蜿蜒",
    "路面品質通常很差",
    "大量未鋪設山路"
  ],
  landscape: [
    "喜馬拉雅山 — 世界最高山脈（聖母峰）",
    "海拔變化劇烈",
    "山坡梯田農業",
    "佛教／印度教寺廟和佛塔",
    "山路沿途有經幡"
  ],
  signs: [
    "天城文範例：<span class=\"script-sample\" style=\"font-size:1.2rem\">सडक काठमाडौं</span> — 與Hindi相同文字系統",
    "天城文（與印地語相同）",
    "也使用英文",
    "與 India 的標誌相似但使用尼泊爾語"
  ],
  plates: [
    "<strong>前後車牌顏色相同</strong> — 顏色編碼系統（全球最多分類之一）：",
    "<strong>紅底白字</strong> — 私家車（最常見）",
    "<strong>黑底白字</strong> — 商用車輛（巴士、卡車、計程車）",
    "<strong>白底紅字</strong> — 政府車輛（街景中容易辨認）",
    "綠底白字 — 觀光車輛",
    "藍底白字 — 外交車輛",
    "天城文（Devanagari）數字常見於車牌上"
  ],
  unique: [
    "喜馬拉雅山地形",
    "天城文（與 India 共用）",
    "經幡和佛塔",
    "山坡梯田農業",
    "全球唯一非矩形的國旗"
  ],
  tips: [
    "天城文 + 極端山地 = Nepal（India 更平坦）",
    "經幡 + 喜馬拉雅山景 = Nepal 或 Bhutan",
    "Nepal 是使用天城文的喜馬拉雅國家；Bhutan 使用藏文",
    "🔗 <a href=\"https://www.google.com/maps/@27.7172,85.3240,3a,75y,90t\" target=\"_blank\" style=\"color:var(--accent-blue)\">Street View 範例（Kathmandu）</a>"
  ]
},

'philippines': {
  name: 'Philippines', localName: 'Pilipinas', flag: '🇵🇭', region: 'asia',
  drivingSide: 'right', tld: '.ph', phoneCode: '+63', language: 'Filipino (Tagalog), English', currency: 'Peso (PHP)',
  camera: [
    "<strong>43.5% Gen 3 + 56.5% Gen 4</strong>",
    "主要島嶼涵蓋尚可"
  ],
  car: [
    "Gen 3：白色轎車（後方白色可見，有時前方有黑色部分）",
    "靠右行駛",
    "無特殊 antenna 或 roof rack 特徵"
  ],
  roads: [
    "右側行駛",
    "<strong>三條中心線</strong>（部分區域）",
    "Jeepney 在路上"
  ],
  poleInfo: [
    "<strong>八邊形金屬電線桿</strong>（混凝土材質）— 菲律賓很常見",
    "電線桿一側經常可見<strong>垂直支架支起的單個絕緣子</strong>"
  ],
  landscape: [
    "熱帶群島 — 超過 7,000 個島嶼",
    "火山地形",
    "梯田（Banaue／Ifugao）",
    "棕櫚樹和熱帶植被",
    "天主教堂（西班牙殖民遺產）"
  ],
  signs: [
    "菲律賓語／Tagalog + 英文 — 完全雙語",
    "拉丁字母",
    "受西班牙影響的地名",
    "標誌上有 Barangay（村）名稱"
  ],
  plates: [
    "白色／綠色車牌",
    "多種格式"
  ],
  unique: [
    "<strong>木製十字架式電桿</strong>",
    "<strong>吉普尼</strong> — 色彩鮮豔的軍用吉普車改裝為公共交通",
    "三條中線",
    "菲律賓語／英文雙語標誌",
    "天主教堂到處都有（西班牙殖民遺產）",
    "三輪車（機車加側車）作為計程車",
    "<strong>圓形玻璃電錶</strong>裝在房屋外牆 — 也見於 Mexico、Guatemala、US、Dominican Republic"
  ],
  tips: [
    "木製十字架電桿 + 熱帶 + 英文／菲律賓語 = Philippines",
    "吉普尼 = Philippines（100% 獨有）",
    "英文 + 西班牙地名 + 熱帶 = Philippines",
    "三輪車計程車 = 很可能是 Philippines",
    "🔗 <a href=\"https://www.google.com/maps/@14.5995,120.9842,3a,75y,90t\" target=\"_blank\" style=\"color:var(--accent-blue)\">Street View 範例（Manila）</a>"
  ]
},

'singapore': {
  name: 'Singapore', localName: 'Singapura', flag: '🇸🇬', region: 'asia',
  drivingSide: 'left', tld: '.sg', phoneCode: '+65', language: 'English, Malay, Chinese, Tamil', currency: 'Dollar (SGD)',
  camera: ["<strong>92% Gen 4 + 7% Gen 3 + 1% Gen 2</strong>", "涵蓋極佳 — 小型城市國家"],
  car: [
    "標準白色轎車",
    "靠左行駛",
    "無特殊車輛辨識特徵"
  ],
  roads: [
    "白色虛線中心線 + 白色實線邊線",
    "左側行駛",
    "路面品質極優",
    "ERP 電子道路收費閘門可見"
  ],
  landscape: [
    "小型城市國家 — 完全都市化／郊區化",
    "現代高樓建築",
    "熱帶花園和公園",
    "Marina Bay Sands、魚尾獅地標",
  ],
  signs: [
    "四種官方語言：英文、馬來文、中文、淡米爾文",
    "標誌常為多語言",
    "英文為主要行政語言"
  ],
  plates: [
    "白色車牌帶<strong>黑色字</strong>",
    "格式：S + 2 字母 + 4 數字 + 校驗字母（如 SBA 1234A）",
    "計程車車牌有 SH 前綴",
    "紅色車牌為臨時登記"
  ],
  unique: [
    "四語言標誌",
    "左側通行 + 英文為主 + 熱帶",
    "高速公路上的 ERP 門架",
    "極度乾淨且有序的城市"
  ],
  tips: [
    "小型、超現代、乾淨城市 + 左側通行 + 英文／中文／馬來文／淡米爾文 = Singapore",
    "HDB 組屋 = Singapore",
    "比 Malaysia 更小且更有序",
    "🔗 <a href=\"https://www.google.com/maps/@1.3521,103.8198,3a,75y,90t\" target=\"_blank\" style=\"color:var(--accent-blue)\">Street View 範例（Singapore）</a>"
  ]
},

'sri-lanka': {
  name: 'Sri Lanka', localName: 'ශ්‍රී ලංකාව', flag: '🇱🇰', region: 'asia',
  drivingSide: 'left', tld: '.lk', phoneCode: '+94', language: 'Sinhala, Tamil', currency: 'Rupee (LKR)',
  camera: [
    "<strong>50% Shitcam + 40.4% Gen 4 + 9.6% Gen 3</strong>",
    "⚠️ 一半覆蓋為 Shitcam（印度相機），畫質較低",
    "⚠️ Gen 4 使用低相機 (low cam) — 視角更低、道路更寬、車輛模糊更大",
    "Gen 3 使用正常高度相機",
    "Gen 3 車前部可見藍白紅色塊（類似法國國旗）"
  ],
  car: [
    "<strong>白色車 + 右側紅色模糊</strong> — Sri Lanka 獨有 meta",
    "車前方可見<strong>藍/白/紅</strong>色塊（類似國旗圖案）",
    "Gen 4：低相機位置（low-cam），物體看起來更大、道路更寬",
    "Gen 4 有較寬的圓形模糊",
    "靠左行駛"
  ],
  roads: [
    "左側通行",
    "農村公路通常<strong>有外線但無中線</strong>；大多數小路完全無標線",
    "路樁：獨特的<strong>短寬石樁</strong>，錐形，底部黑色、頂部白色（斯里蘭卡獨有）",
    "路標為<strong>黑白條紋</strong>（Bangladesh 和 Malaysia 也有）",
    "路面品質不一"
  ],
  poleInfo: [
    "<strong>電線桿</strong>：混凝土桿為主 — (1) <strong>方形桿，頂部有小型針孔</strong>（與 Thailand 類似但泰國針孔延伸到底部）(2) <strong>多孔電線桿</strong>（下半部有大型透視方孔，斯里蘭卡獨有）"
  ],
  landscape: [
    "熱帶島嶼",
    "中央高地有茶園（尤其 Nuwara Eliya 以西）",
    "海岸沙灘",
    "佛教寺廟和佛塔",
    "植被茂密，棕櫚樹非常常見",
    "紅色土壤在許多地區常見"
  ],
  signs: [
    "僧伽羅文範例：<span class=\"script-sample\" style=\"font-size:1.2rem\">මාර්ගය කොළඹ</span> — 像各方向的 C",
    "<strong>僧伽羅文</strong> — 字形像各種方向的 'C'，非常圓潤／捲曲",
    "也使用淡米爾文",
    "英文為第三語言",
    "常見三語標誌"
  ],
  plates: [
    "<strong>白色前車牌 + 黃色後車牌</strong>（類似 UK 系統）",
    "前兩字母表示省份（WP=Western、SP=Southern 等）",
    "⚠️ 南亞/東南亞唯一有黃色後車牌的國家"
  ],
  unique: [
    "<strong>白色車輛 + 右側紅色模糊</strong> — Sri Lanka 專有特徵",
    "<strong>僧伽羅文</strong> — 看起來像各種方向的 C 形",
    "方形水泥電桿，僅頂部有孔洞",
    "高地茶園",
    "可見佛塔",
    "標誌上有三種語言（僧伽羅文 + 淡米爾文 + 英文）"
  ],
  tips: [
    "Google car 右側紅色模糊 = Sri Lanka",
    "C 形捲曲文字（僧伽羅文）= Sri Lanka",
    "一個標誌上三種文字（僧伽羅文 + 淡米爾文 + 英文）= Sri Lanka",
    "🔗 <a href=\"https://www.google.com/maps/@6.9271,79.8612,3a,75y,90t\" target=\"_blank\" style=\"color:var(--accent-blue)\">Street View 範例（Colombo）</a>"
  ]
},

'taiwan': {
  name: 'Taiwan', localName: '臺灣', flag: '🇹🇼', region: 'asia',
  drivingSide: 'right', tld: '.tw', phoneCode: '+886', language: 'Chinese (Mandarin)', currency: 'New Taiwan Dollar (TWD)',
  camera: ["<strong>76% Gen 4 + 24% Gen 3 + 1% Gen 2</strong>", "全島涵蓋良好，三種世代都有"],
  car: [
    "<strong>黑色轎車</strong>為主（部分覆蓋也有白色）",
    "靠右行駛",
    "無特殊天線或 roof rack"
  ],
  roads: [
    "<strong>黃色中心線 + 白色實線邊線</strong>，快慢車道分隔線",
    "⚠️ 中心線是<strong>黃色</strong>（非白色！）— 與 Japan 的全白線不同",
    "右側行駛",
    "紅色路緣線 = 全天禁止停車；黃色路緣線 = 限時禁停",
    "路面品質良好",
    "機車大量出現"
  ],
  poleInfo: [
    "<strong>圓柱形混凝土電桿帶斜向黑黃條紋延伸到地面</strong>"
  ],
  landscape: [
    "內陸多山（中央山脈）",
    "亞熱帶氣候",
    "西海岸密集都市區域",
    "稻田和熱帶水果",
    "佛教和道教寺廟"
  ],
  signs: [
    "繁體中文範例：<span class=\"script-sample\" style=\"font-size:1.2rem\">路 台北市 注音ㄅㄆㄇ</span>",
    "<strong>繁體中文字</strong> — 非簡體字",
    "與 Hong Kong 使用相同的繁體字",
    "有時可見注音符號",
    "主要標誌附有英文拼音"
  ],
  plates: [
    "白色車牌",
    "格式多樣"
  ],
  unique: [
    "<strong>斜向黑黃條紋電桿</strong>延伸到地面",
    "<strong>繁體中文字</strong>（與 Hong Kong 相同，與中國大陸不同）",
    "右側通行（不同於 Hong Kong 的左側通行）",
    "機車交通密集",
    "可見夜市",
    "7-Eleven 和全家便利商店到處都有"
  ],
  tips: [
    "繁體中文 + 右側通行 + <strong>黃色中心線</strong> = Taiwan",
    "繁體中文 + 左側通行 = Hong Kong",
    "斜向黑黃條紋電桿延伸到地面 = Taiwan（South Korea 不到地面）",
    "機車密集 + 繁體中文 = Taiwan",
    "停車標誌寫「<strong>停</strong>」（中文字）",
    "🔗 <a href=\"https://www.google.com/maps/@25.0330,121.5654,3a,75y,90t\" target=\"_blank\" style=\"color:var(--accent-blue)\">Street View 範例（Taipei）</a>"
  ]
},

'thailand': {
  name: 'Thailand', localName: 'ประเทศไทย', flag: '🇹🇭', region: 'asia',
  drivingSide: 'left', tld: '.th', phoneCode: '+66', language: 'Thai', currency: 'Baht (THB)',
  camera: [
    "<strong>81% Gen 4 + 19% Gen 3</strong>",
    "絕大部分 Gen 3 中看不見街景車",
    "拍攝有旱季/雨季差異 — 野火造成灰霾可見"
  ],
  car: [
    "Gen 3/4：白色轎車，可見煞車燈",
    "靠左行駛",
    "無特殊 antenna 或 roof rack 特徵"
  ],
  roads: [
    "<strong>左側行駛</strong>",
    "<strong>黃色中線</strong>（實線或虛線）— Malaysia 只有白色中線",
    "白色外線",
    "路燈桿底部有<strong>黑紅或黑白條紋</strong>",
    "路標的柱子為<strong>方形白色粗柱</strong>，底部通常塗成黑色（東南亞中泰國獨有）",
    "路面品質良好（高速公路）",
    "藍白盾牌編號公路標誌，帶有<strong>迦樓羅</strong>（泰國國徽神鳥）"
  ],
  bollardInfo: [
    "Bollard：<strong>方形路樁，錐形頂，黑白條紋</strong>（Cambodia、Laos、Indonesia 也有）"
  ],
  poleInfo: [
    "<strong>電線桿</strong>：<strong>方形混凝土桿</strong>，桿上有<strong>垂直方向延伸的小孔</strong>（Sri Lanka 和 Cambodia 有類似桿）"
  ],
  signInfo: [
    "停車標誌：多數寫 <strong>STOP</strong>，少數寫 <strong>หยุด</strong>（yud）",
    "STOP 標誌上方有泰文 หยุด = 確認 Thailand（不是 Malaysia/Cambodia）"
  ],
  landscape: [
    "熱帶 — 翠綠茂密的植被",
    "平坦的中部平原（稻田）",
    "北部為山區",
    "佛教寺廟（wat）配金色尖塔",
    "南部有海灘"
  ],
  signs: [
    "泰文範例：<span class=\"script-sample\" style=\"font-size:1.2rem\">ถนน กรุงเทพ</span> — 有小圓圈+直線段",
    "<strong>泰文</strong> — 字形上有<strong>小圓圈</strong>",
    "直線段與曲線混合",
    "比寮文更有稜角（寮文更滑順／圓潤）",
    "編號公路標誌帶泰文"
  ],
  plates: [
    "<strong>前後車牌顏色相同</strong> — 多種顏色依車輛類型區分：",
    "<strong>白底黑字</strong> — 私家車（最常見）",
    "<strong>黃底</strong> — 營業用車輛（計程車、嘟嘟車、巴士）",
    "<strong>綠底（水綠色）白字</strong> — 租賃/觀光用車",
    "<strong>紅底</strong> — 臨時登記（新車）",
    "文字顏色也有區分：黑色（一般）、藍色（七人以上客車）、綠色（雙門 pickup）",
    "車牌上有泰文"
  ],
  unique: [
    "<strong>泰文字形上有小圓圈</strong>",
    "黑白方塊護柱配金字塔頂",
    "電桿底部黑紅或黑白塗裝",
    "佛教寺廟配金色尖塔",
    "許多地方展示國王肖像",
    "嘟嘟車（三輪車）"
  ],
  tips: [
    "字形有小圓圈 + 部分直線 = 泰文",
    "泰文（圓圈 + 直線） vs 寮文（滑順曲線） vs 高棉文（向右的鉤）",
    "佛教寺廟 + 熱帶 + 左側通行 = Thailand",
    "黃色中線 + 泰文 = Thailand",
    "🔗 <a href=\"https://www.google.com/maps/@13.7563,100.5018,3a,75y,90t\" target=\"_blank\" style=\"color:var(--accent-blue)\">Street View 範例（Bangkok）</a>"
  ]
},

'vietnam': {
  name: 'Vietnam', localName: 'Việt Nam', flag: '🇻🇳', region: 'asia',
  drivingSide: 'right', tld: '.vn', phoneCode: '+84', language: 'Vietnamese', currency: 'Dong (VND)',
  camera: [
    "<strong>85% Gen 3 + 14% Gen 4 + 1% Shitcam（大量摩托車街景）</strong>",
    "⚠️ 大量摩托車街景覆蓋 — 模糊形狀像骨頭，一側延伸至高處",
    "越南有全世界最多的摩托車街景",
    "農村摩托車街景 = 幾乎可以確定是 Vietnam"
  ],
  car: [
    "Gen 3：標準白色轎車",
    "靠右行駛",
    "無特殊車輛辨識特徵"
  ],
  roads: [
    "右側行駛",
    "路面品質不一",
    "機車主導所有道路",
    "<strong>黃色短虛線中線</strong>尤為常見且獨特（黃白色道路線皆有）",
    "混凝土路面很常見（Thailand 和 Philippines 也有）",
    "路牌有<strong>橘黃色背景</strong> — 東南亞獨有"
  ],
  bollardInfo: [
    "最常見路樁為<strong>小方形白色混凝土，頂部紅色</strong>"
  ],
  poleInfo: [
    "<strong>圓柱形混凝土杆</strong>，部分有<strong>圓孔排列</strong>；帶洞電線桿很常見",
    "路標杆常為<strong>紅白條紋</strong> — Vietnam 特有的配色"
  ],
  signInfo: [
    "停車標誌：<strong>STOP</strong>（拉丁字母），但也有越南文 <strong>DỪNG LẠI</strong> 輔助標誌",
    "公里路標：<strong>紅白條紋桿</strong>配白色牌面 — 東南亞中 Vietnam 獨有風格"
  ],
  landscape: [
    "多樣化：北部山區、南部湄公河三角洲",
    "到處都有稻田",
    "密集都市區域（河內、胡志明市）",
    "熱帶植被",
    "石灰岩喀斯特地形（下龍灣地區）"
  ],
  signs: [
    "越南文範例：<span class=\"script-sample\" style=\"font-size:1.2rem\">Đường Nguyễn Huệ</span> — 拉丁字母+大量聲調符號",
    "<strong>越南文 — 拉丁字母帶有大量變音符號</strong>",
    "â、ă、đ、ê、ô、ơ、ư + 多種聲調符號",
    "看起來像是「戴了很多帽子的拉丁字母」",
    "全世界變音符號最多的拉丁字母語言"
  ],
  plates: [
    "白色車牌帶<strong>藍色地區代碼</strong>在頂部",
    "地區代碼對應省份（29 = Hanoi、43 = Da Nang 等）",
    "黃色車牌為計程車/商用車輛",
    "紅色車牌為軍用車輛",
    "車牌上有越南文（không dấu 無聲調版）"
  ],
  unique: [
    "<strong>越南文 — 拉丁字母帶有極多變音符號</strong>",
    "所有拉丁字母語言中聲調符號最多",
    "機車主導的交通",
    "共產黨旗幟（紅底黃星）",
    "城市中的法國殖民建築",
    "可見斗笠（nón lá）"
  ],
  tips: [
    "拉丁字母帶大量重音／變音符號 = 越南文",
    "đ + ơ + ư = 越南文",
    "機車海 + 大量符號的拉丁字母 = Vietnam",
    "🔗 <a href=\"https://www.google.com/maps/@21.0285,105.8542,3a,75y,90t\" target=\"_blank\" style=\"color:var(--accent-blue)\">Street View 範例（Hanoi）</a>"
  ]
},

// ╔══════════════════════════════════════════╗
// ║           MIDDLE EAST                    ║
// ╚══════════════════════════════════════════╝

'israel': {
  name: 'Israel', localName: 'ישראל', flag: '🇮🇱', region: 'middle-east',
  drivingSide: 'right', tld: '.il', phoneCode: '+972', language: 'Hebrew, Arabic', currency: 'Shekel (ILS)',
  camera: [
    "<strong>78.6% Gen 3 + 21.3% Gen 4 + 0.1% Gen 2</strong>",
    "涵蓋良好",
    "Gen 3 大部分為<strong>黑色街景車配長天線</strong>；也有無天線黑車和短天線銀車"
  ],
  car: [
    "Gen 3：<strong>黑色轎車 + 長天線</strong> — 與 Russia, Palestine 相同配置",
    "也有<strong>無天線黑車</strong>和<strong>短天線銀色車</strong>",
    "Hebrew 文字 + 黑色車 + 長天線 = Israel"
  ],
  roads: [
    "右側行駛",
    "<strong>黃色邊線</strong>（非常獨特）",
    "白色中心線",
    "路面品質良好",
    "軍事檢查站有時可見"
  ],
  bollardInfo: [
    "<strong>白色圓柱形 bollard</strong>，正面有紅色反光條 — 公路邊緣常見",
    "部分路段有黑白交替條紋的方柱"
  ],
  poleInfo: [
    "<strong>黑白相間漆帶電線桿</strong> — 底部黑色 + 上部白色，非常醒目",
    "也有高壓輸電鐵塔（金屬格子型）"
  ],
  signInfo: [
    "停車標誌：<strong>手掌圖案 + עצור</strong>（atzor，希伯來文）— 全球獨特設計",
    "Israel 停車標誌有<strong>手掌張開圖案</strong>取代 STOP 文字 — 非常好辨識",
    "⚠️ Palestine 停車標誌也有阿拉伯文，但無手掌圖案"
  ],
  landscape: [
    "西部為地中海海岸",
    "南部為內蓋夫沙漠",
    "死海 — 地球最低點",
    "北部綠意盎然，南部乾旱",
    "古老與現代建築並存"
  ],
  signs: [
    "希伯來文範例：<span class=\"script-sample\" style=\"font-size:1.2rem\">רחוב הרצל ירושלים</span> — 方塊形、從右到左、無母音",
    "<strong>希伯來文</strong> — 由右至左書寫，方塊字形，不標註母音",
    "也使用阿拉伯文",
    "英文常作為第三語言",
    "三語標誌（希伯來文／阿拉伯文／英文）"
  ],
  plates: [
    "黃色車牌帶藍色條紋（後方）",
    "白色車牌（前方）"
  ],
  unique: [
    "<strong>希伯來文</strong> — 方塊形、由右至左、無母音",
    "<strong>黃色邊線</strong>",
    "三語標誌（希伯來文 + 阿拉伯文 + 英文）",
    "Google car 上有長天線",
    "可見安全基礎設施",
    "標誌／基礎設施上有大衛之星"
  ],
  tips: [
    "由右至左的方塊字形且字母不連接 = 希伯來文 = Israel",
    "阿拉伯文是草寫／連接的；希伯來文是方塊／分離的",
    "黃色邊線 + 希伯來文 = Israel",
    "三語標誌 = Israel",
    "🔗 <a href=\"https://www.google.com/maps/@31.7683,35.2137,3a,75y,90t\" target=\"_blank\" style=\"color:var(--accent-blue)\">Street View 範例（Jerusalem）</a>"
  ]
},

'jordan': {
  name: 'Jordan', localName: 'الأردن', flag: '🇯🇴', region: 'middle-east',
  drivingSide: 'right', tld: '.jo', phoneCode: '+962', language: 'Arabic', currency: 'Dinar (JOD)',
  camera: ["<strong>100% Gen 3</strong>", "主要道路涵蓋尚可"],
  car: [
    "Gen 3：<strong>黑色轎車</strong>",
    "<strong>無天線、無紅色尾燈</strong>（與 Israel 黑色車有天線不同 — 辨識重點！）",
    "⚠️ 中東唯一無天線且無紅色尾燈的黑色街景車",
    "黑色車 vs UAE 白色車 — 這是分辨兩國最簡單的方式",
  ],
  roads: [
    "右側行駛",
    "<strong>黃色邊線</strong>（如 Israel）",
    "沙漠公路 — 長直路段",
    "路面品質尚可"
  ],
  bollardInfo: [
    "<strong>白色圓柱形 bollard</strong>，正面有紅色反光條 — 沙漠公路兩側常見",
    "樣式簡單，與 Israel 的 bollard 類似但整體維護程度較低"
  ],
  landscape: [
    "沙漠 — 乾旱地形為主",
    "瓦迪倫 — 紅色砂岩沙漠",
    "死海（西部邊界）",
    "安曼 — 丘陵城市，石灰岩建築",
    "佩特拉地區"
  ],
  signs: [
    "阿拉伯文範例：<span class=\"script-sample\" style=\"font-size:1.2rem\">شارع الملك عبدالله عمّان</span> — 連筆書寫、從右到左",
    "<strong>阿拉伯文</strong> — 由右至左書寫，連體／草書字形",
    "標誌上也常用英文",
    "阿拉伯文／英文雙語路牌"
  ],
  plates: [
    "白色車牌搭配<strong>綠色文字</strong>（一般私家車）",
    "黃色車牌為計程車",
    "紅色車牌為外交車輛",
    "格式：阿拉伯數字 + 阿拉伯文字",
    "車牌尺寸窄長，類似歐洲格式"
  ],
  unique: [
    "阿拉伯文 + 沙漠地景",
    "黑色 Google car",
    "黃色邊線（與 Israel 和海灣國家共用）",
    "可見約旦國旗",
    "瓦迪倫紅色沙漠"
  ],
  tips: [
    "阿拉伯文 + 沙漠 + 黃色邊線 = Jordan 或海灣國家",
    "黑色 Google car 有助於縮小範圍",
    "看起來不如海灣國家富裕 = 很可能是 Jordan",
    "🔗 <a href=\"https://www.google.com/maps/@31.9539,35.9106,3a,75y,90t\" target=\"_blank\" style=\"color:var(--accent-blue)\">Street View 範例（Amman）</a>"
  ]
},

'saudi-arabia': {
  name: 'Saudi Arabia', localName: 'المملكة العربية السعودية', flag: '🇸🇦', region: 'middle-east',
  drivingSide: 'right', tld: '.sa', phoneCode: '+966', language: 'Arabic', currency: 'Riyal (SAR)',
  camera: ["<strong>100% Gen 4</strong>（涵蓋擴展中）", "主要城市和高速公路有涵蓋"],
  car: ["標準車輛"],
  roads: [
    "白色中心線 + 白色邊線",
    "遼闊的沙漠高速公路",
    "城市中有現代化道路基礎設施",
    "住宅區常見減速帶"
  ],
  landscape: [
    "沙漠 — 遼闊的阿拉伯沙漠",
    "現代化城市（利雅德、吉達、麥加地區）",
    "可見石油基礎設施",
    "清真寺到處都有"
  ],
  signs: [
    "阿拉伯文範例：<span class=\"script-sample\" style=\"font-size:1.2rem\">طريق الملك فهد الرياض</span>",
    "大多數路牌為阿拉伯文 + 英文",
    "高速公路使用綠色標誌",
    "指向麥加／麥地那的方向標誌"
  ],
  plates: [
    "白色車牌帶<strong>阿拉伯文 + 英文數字（雙語）</strong>",
    "格式：上方阿拉伯數字 + 下方拉丁數字，左側有地區代碼",
    "私家車白底、計程車黃底、外交藍底",
    "與其他海灣國家區分：Saudi 車牌有地區字母碼（如 1=Riyadh）"
  ],
  unique: [
    "遼闊沙漠 + 阿拉伯文 + 現代化基礎設施",
    "指向聖城（麥加、麥地那）的方向標誌",
    "石油財富在基礎設施中可見",
    "保守社會 — 街道上可見行人較少"
  ],
  tips: [
    "阿拉伯文 + 富裕 + 遼闊沙漠 + 指向麥加的標誌 = Saudi Arabia",
    "比 UAE／Qatar 等海灣國家更大更分散",
    "🔗 <a href=\"https://www.google.com/maps/@24.7136,46.6753,3a,75y,90t\" target=\"_blank\" style=\"color:var(--accent-blue)\">Street View 範例（Riyadh）</a>"
  ]
},

'uae': {
  name: 'United Arab Emirates', localName: 'الإمارات', flag: '🇦🇪', region: 'middle-east',
  drivingSide: 'right', tld: '.ae', phoneCode: '+971', language: 'Arabic', currency: 'Dirham (AED)',
  camera: ["<strong>76% Gen 4 + 24% Gen 3</strong>", "杜拜和阿布達比涵蓋極佳", "東北部覆蓋最密，其他地區僅 Sir Baniyas Island 有車載街景"],
  car: [
    "Gen 3：<strong>白色轎車 + 車頂黑色支架</strong> — 中東國家中<strong>只有 UAE 用白車</strong>（Jordan 是黑車）",
    "Gen 4：<strong>白色 pickup truck</strong>，相機離車很近，天線在車廂<strong>正中央</strong>（Qatar 天線在左側）",
    "Gen 4 也有<strong>黑色轎車</strong>（煞車燈通常可見）— 類似 Israel 的 Gen 4 黑車",
    "Sir Baniyas Island：罕見的白色車 + <strong>可見側鏡</strong>"
  ],
  roads: [
    "現代多車道高速公路，路面品質極優",
    "<strong>黃色邊線 + 白色或黃色中線</strong>（Jordan、Israel 類似）",
    "<strong>條紋路肩</strong>：黑白或黑黃條紋 — 中東僅 UAE 和 Oman 有",
    "路邊有沙",
    "大量道路分隔帶和環島"
  ],
  bollardInfo: [
    "<strong>黑白條紋路標/bollard</strong> — 整個中東地區<strong>僅 UAE 採用條紋路標</strong>",
    "路肩也是條紋狀（黑白或黑黃）"
  ],
  poleInfo: [
    "<strong>深棕色木質電線桿</strong>，杆頂有 3 個絕緣器對稱連接在水平金屬棒上",
    "vs Jordan：灰色混凝土桿，絕緣器間距更大",
    "城市區域有現代金屬路燈"
  ],
  landscape: [
    "平坦沙漠景觀為主",
    "杜拜：摩天大樓天際線（哈里發塔）",
    "阿布達比：規劃完善的現代城市",
    "住宅區：<strong>淺色石頭房屋</strong>，人行道常用<strong>紅色石頭</strong>鋪設",
    "最東部有山脈分布（類似 Oman 北海岸）",
    "Ras al Khaimah（最北部）：東部有淺色山脈",
    "偶爾可見街景裂縫（camera rift）"
  ],
  signs: [
    "阿拉伯文範例：<span class=\"script-sample\" style=\"font-size:1.2rem\">شارع الشيخ زايد دبي</span>",
    "所有標誌皆為<strong>阿拉伯文 + 英文</strong>雙語（旅遊業發達）",
    "vs Jordan：商業標牌大多<strong>不附英文</strong> — 區分 UAE/Jordan 的關鍵",
    "高速公路使用綠色標誌"
  ],
  plates: [
    "<strong>各酋長國設計不同</strong> — 可用於精確定位區域",
    "Abu Dhabi：白底 + 紅色文字；Dubai：白底 + 藍色 logo；Sharjah：白底 + 紅色邊框",
    "每個酋長國名稱印在車牌上 — 辨識度極高",
    "格式：酋長國名 + 字母類別 + 數字（數字越少越貴）",
    "長型車牌（同 Jordan，但 Jordan 有綠色帶）"
  ],
  unique: [
    "<strong>黑白條紋路標</strong> — 中東僅 UAE 有",
    "<strong>白色街景車</strong> — 中東僅 UAE 用白車（Gen 3）",
    "Gen 4 pickup truck 天線在<strong>正中央</strong>（Qatar 在左側）",
    "<strong>條紋路肩</strong>（黑白/黑黃）",
    "阿拉伯文 + 英文雙語（vs Jordan 較少英文）",
    "超現代摩天大樓 + 沙漠",
    "深棕色木質電線桿 + 3 絕緣器"
  ],
  tips: [
    "黑白條紋路標/路肩 = UAE（中東獨有）",
    "白色街景車 + 中東沙漠 = UAE",
    "阿拉伯文 + 英文雙語標牌 + 沙漠 = UAE（Jordan 英文少得多）",
    "Pickup truck 天線在中央 = UAE（Qatar 在左側）",
    "車牌上的酋長國名稱可精確定位",
    "🔗 <a href=\"https://www.google.com/maps/@25.2048,55.2708,3a,75y,90t\" target=\"_blank\" style=\"color:var(--accent-blue)\">Street View 範例（Dubai）</a>"
  ]
},

'qatar': {
  name: 'Qatar', localName: 'قطر', flag: '🇶🇦', region: 'middle-east',
  drivingSide: 'right', tld: '.qa', phoneCode: '+974', language: 'Arabic', currency: 'Riyal (QAR)',
  camera: ["<strong>100% Gen 4</strong>", "多哈地區涵蓋良好"],
  car: [
    "<strong>白色 pickup truck（皮卡車）</strong>（類似 Oman, Senegal），通常全部打碼",
    "天線在車<strong>左側</strong>（不同區域天線長度不同：北部短、多哈中等、西南長）",
    "沙漠景觀 + 白色 truck = Qatar/Oman/UAE 之一",
    "與 UAE 區別：Qatar 是 truck，UAE 是轎車"
  ],
  roads: [
    "白色中心線 + 白色或黃色邊線",
    "右側行駛",
    "現代多車道高速公路",
    "路面品質優良",
    "路邊有沙"
  ],
  bollardInfo: [
    "<strong>白色圓柱形 bollard</strong>，正面有紅色反光條 — 高速公路和城市道路邊緣常見",
    "現代化設計，維護良好 — 反映海灣國家的高品質基礎設施"
  ],
  landscape: [
    "平坦沙漠半島",
    "Doha 現代天際線",
    "大量建設工程"
  ],
  signs: ["阿拉伯文 + 英文雙語"],
  plates: [
    "白底車牌，<strong>深紅色文字</strong>（配合國旗色調）",
    "格式：純數字（無字母），數字越少越珍貴",
    "私家車白底、臨時車牌綠底",
    "與 UAE 區分：Qatar 無酋長國名，且文字為深紅色"
  ],
  unique: [
    "小型富裕半島",
    "多哈天際線可辨識",
    "平坦沙漠地形"
  ],
  tips: [
    "小型、平坦、富裕的海灣城市 + 阿拉伯文 = 可能是 Qatar",
    "比 UAE 小，比 Oman 平坦",
    "🔗 <a href=\"https://www.google.com/maps/@25.2854,51.5310,3a,75y,90t\" target=\"_blank\" style=\"color:var(--accent-blue)\">Street View 範例（Doha）</a>"
  ]
},

// ╔══════════════════════════════════════════╗
// ║           NORTH AMERICA                  ║
// ╚══════════════════════════════════════════╝

'usa': {
  name: 'United States', localName: 'United States', flag: '🇺🇸', region: 'north-america',
  drivingSide: 'right', tld: '.us', phoneCode: '+1', language: 'English', currency: 'Dollar (USD)',
  camera: [
    "<strong>60.1% Gen 4 + 30.4% Gen 3 + 9.4% Gen 2 + 0.1% Gen 1</strong>",
    "Gen 2 在本土十分罕見（Alaska 和 Hawaii 較多）",
    "全球涵蓋範圍最廣的國家",
    "⚠️ 有 Gen 4 小相機 (smallcam/low cam) 覆蓋（~33,000 點位）— 視角更低、模糊區域更大"
  ],
  car: [
    "Gen 2/3：白色轎車",
    "Gen 4：<strong>藍色轎車</strong>",
    "<strong>三脊天線</strong>（與 NZ, Hawaii, Cambodia 共用）",
    "無 snorkel、無 車頂架 (roof rack)"
  ],
  roads: [
    "<strong>雙黃色中心線</strong>（美國最經典的道路特徵）",
    "白色邊線",
    "'SPEED LIMIT' 速限標誌（Canada 用 'MAXIMUM'）",
    "MPH 速度單位（非 km/h）",
    "'ONE WAY' 單行標誌有文字（Canada 是空白箭頭）",
    "各州道路差異明顯"
  ],
  bollardInfo: [
    "<strong>白色或灰色圓柱形 delineator</strong> — 頂部有白色或紅色反光片，各州設計不同",
    "Pennsylvania 常見<strong>紅/黃反光片配對</strong>；Oklahoma 有<strong>黑帽 bollard</strong>",
    "高速公路匝道常見<strong>橘色/黃色塑膠桶（barrel）</strong>和橘色三角錐"
  ],
  poleInfo: [
    "<strong>木製電線杆</strong>在郊區和鄉村地區非常常見 — 美國最典型的杆子類型",
    "城市區域為金屬或混凝土杆",
    "木杆上常見大量釘子、金屬標牌、變壓器 — 辨識北美特徵"
  ],
  signInfo: [
    "STOP 標誌：<strong>STOP</strong>（紅底白字八角形）",
    "'YIELD' 讓行標誌有文字（Canada 是空白三角形）",
    "'SPEED LIMIT' 文字速限標誌（Canada 用 'MAXIMUM'）",
    "'ONE WAY' 單行標誌有文字（Canada 是空白箭頭）"
  ],
  landscape: [
    "地形極為多樣：西南沙漠、東北綠地、中西部平原、太平洋沿岸",
    "黃色校車",
    "USPS 郵務車",
    "藍色 USPS 郵筒（Canada 是紅色）",
  ],
  signs: [
    "英語",
    "南部邊境地區有西班牙語",
    "綠色州際公路標誌搭配 US Route 盾牌",
    "Interstate：奇數 = 南北向，偶數 = 東西向"
  ],
  plates: [
    "50 多種州別設計 — 每州都不同",
    "特殊：Delaware（黑色）、Vermont（綠色）、Alaska（黃色）",
    "17 個州不要求前車牌"
  ],
  unique: [
    "<strong>雙黃色中心線</strong>",
    "<strong>'SPEED LIMIT'（非 'MAXIMUM'）</strong>",
    "<strong>藍色 USPS 郵筒</strong>（Canada = 紅色）",
    "黃色校車",
    "MPH 速限",
    "消防栓",
    "<strong>圓形玻璃電錶</strong>裝在房屋外牆（尤其是老舊社區）— 也見於 Mexico、Guatemala、Philippines、Dominican Republic"
  ],
  tips: [
    "雙黃線 + 'SPEED LIMIT' + MPH = USA（非 Canada）",
    "藍色郵筒 = USA；紅色郵筒 = Canada",
    "'YIELD'（USA）vs 空白三角形（Canada）",
    "許多州無前車牌 — 注意各州特定線索",
    "🔗 <a href=\"https://www.google.com/maps/@40.7128,-74.0060,3a,75y,90t\" target=\"_blank\" style=\"color:var(--accent-blue)\">Street View 範例（NYC）</a>"
  ]
},

'canada': {
  name: 'Canada', localName: 'Canada', flag: '🇨🇦', region: 'north-america',
  drivingSide: 'right', tld: '.ca', phoneCode: '+1', language: 'English, French', currency: 'Dollar (CAD)',
  camera: ["<strong>74% Gen 4 + 24% Gen 3 + 2% Gen 2</strong>", "涵蓋範圍集中在美國邊境附近"],
  car: [
    "Gen 2/3：白色轎車",
    "Gen 4：<strong>藍色轎車</strong>",
    "有天線",
    "北部有雪地摩托車和 trekker 涵蓋"
  ],
  roads: [
    "雙黃色中心線（但單黃線比 USA 更常見）",
    "白色實線邊線",
    "<strong>'MAXIMUM' 速限標誌</strong>（非 'SPEED LIMIT'）",
    "km/h 速度單位",
    "空白單行箭頭（無 'ONE WAY' 文字）",
    "木製標誌桿比 US 多（US 多用金屬）",
    "藍色資訊標誌較多（US 多用綠色）"
  ],
  bollardInfo: [
    "<strong>省份差異明顯</strong>：Alberta 為白色圓柱 + 紅色反光條；Ontario 為橘色菱形反光片白桿",
    "高速公路上常見<strong>木桶形（barrel）減速器</strong> — 橘色或黃色大型桶狀物排列在匝道或分隔島"
  ],
  poleInfo: [
    "<strong>木製電線杆</strong>在郊區和鄉村地區非常常見 — 與 USA 相同的北美特徵",
    "木製標誌桿比 USA 更常見（USA 多用金屬標誌桿）"
  ],
  signInfo: [
    "<strong>空白讓行三角形</strong>（無 'YIELD' 文字）"
  ],
  landscape: [
    "BC：山脈、松樹林",
    "草原省份：平坦麥田（Alberta、Saskatchewan、Manitoba）",
    "東部：森林、紅土（PEI）",
    "北部：凍原、稀疏樹木",
    "Canada Post <strong>紅色郵筒</strong>"
  ],
  signs: [
    "英語和法語（官方雙語）",
    "<strong>Quebec：用 ARRÊT 取代 STOP</strong>（全球唯一）",
    "New Brunswick：雙語 STOP/ARRÊT",
    "Ontario 以東法語顯著"
  ],
  plates: [
    "各省設計不同",
    "Manitoba：綠色條紋",
    "4 個省要求前車牌，9 個不要求"
  ],
  unique: [
    "<strong>'MAXIMUM' 速限標誌 + km/h</strong>",
    "<strong>Quebec 的 ARRÊT 停車標誌</strong>（全球唯一）",
    "<strong>紅色 Canada Post 郵筒</strong>（US = 藍色）",
    "雙語標誌",
    "TD/RBC/BMO 銀行招牌",
    "Tim Hortons 餐廳"
  ],
  tips: [
    "'MAXIMUM' + km/h = Canada（USA 用 'SPEED LIMIT' + mph）",
    "ARRÊT 停車標誌 = Quebec, Canada",
    "紅色郵筒 = Canada；藍色 = USA",
    "空白讓行三角形 + km/h = Canada",
    "🔗 <a href=\"https://www.google.com/maps/@45.4215,-75.6972,3a,75y,90t\" target=\"_blank\" style=\"color:var(--accent-blue)\">Street View 範例（Ottawa）</a>"
  ]
},

'mexico': {
  name: 'Mexico', localName: 'México', flag: '🇲🇽', region: 'north-america',
  drivingSide: 'right', tld: '.mx', phoneCode: '+52', language: 'Spanish', currency: 'Peso (MXN)',
  camera: [
    "<strong>74% Gen 3 + 24% Gen 4 + 1.9% Gen 2</strong>",
    "是少數有 Gen 2 覆蓋的拉丁美洲國家",
    "Oaxaca 的 Gen 3 有獨特的 ground rift"
  ],
  car: [
    "Gen 3：(1) 短粗天線白車（天線上有螺旋細線）(2) 無天線白車（有紅色煞車燈）",
    "Gen 4：<strong>三種車色</strong> — 藍色、帶藍條的白色、黑色",
    "<strong>短粗天線（stubby antenna）</strong> — 與 Colombia, Ecuador, Brazil 共用"
  ],
  roads: [
    "<strong>單一實黃色中心線</strong> — Mexico 獨有特徵",
    "白色邊線",
    "Topes（巨大減速丘）— 非常常見"
  ],
  bollardInfo: [
    "<strong>白色香菸形 bollard，底部黑色 + 背面黃色</strong>"
  ],
  poleInfo: [
    "八角形電線桿；也有黑色螺旋絕緣子的木桿"
  ],
  signInfo: [
    "ALTO 停車標誌"
  ],
  landscape: [
    "北部：Chihuahuan 沙漠",
    "中部：山脈",
    "南部：熱帶",
    "Yucatan：叢林",
    "仙人掌柵欄、香蕉園"
  ],
  signs: [
    "西班牙語，有 Ñ",
    "ALTO 停車標誌（非 PARE — PARE = 南美洲）"
  ],
  plates: [
    "白色車牌 — 32 種州別設計",
    "超過 100 種車牌變化",
    "美洲式窄高格式"
  ],
  unique: [
    "<strong>單一實黃色中心線</strong>",
    "<strong>ALTO 停車標誌</strong>（非 PARE）",
    "<strong>Topes（巨大減速丘）</strong>",
    "Mexico City 的粉白色計程車",
    "八角形電線桿",
    "Oaxaca 的 Gen 3 有獨特裂紋",
    "<strong>圓形玻璃電錶（medidor circular）</strong>裝在房屋外牆 — 也見於 Guatemala、Philippines、US、Dominican Republic",
    "路名使用 Calle（街道）、Avenida（大道）、Boulevard（大道）、Callejón（小巷）"
  ],
  tips: [
    "單一實黃色中心線 = Mexico",
    "ALTO（Mexico / 中美洲）vs PARE（南美洲）",
    "到處都是 Topes = Mexico",
    "短天線 + 西班牙語 + ALTO = Mexico",
    "🔗 <a href=\"https://www.google.com/maps/@19.4326,-99.1332,3a,75y,90t\" target=\"_blank\" style=\"color:var(--accent-blue)\">Street View 範例（CDMX）</a>"
  ]
},

// ╔══════════════════════════════════════════╗
// ║           CENTRAL AMERICA                ║
// ╚══════════════════════════════════════════╝

'guatemala': {
  name: 'Guatemala', localName: 'Guatemala', flag: '🇬🇹', region: 'central-america',
  drivingSide: 'right', tld: '.gt', phoneCode: '+502', language: 'Spanish', currency: 'Quetzal (GTQ)',
  camera: ["<strong>100% Gen 3</strong>"],
  car: [
    "<strong>灰色轎車 + roof rack + 可見黑色側鏡</strong> — Guatemala 獨有配置",
    "只有 Guatemala 有這種特定的側鏡可見度",
    "Roof rack 非常容易辨認",
    "與 Kyrgyzstan 類似（都有 bars + 側鏡），但景觀完全不同"
  ],
  roads: [
    "<strong>白色外線 + 單黃色中線</strong>（與 Mexico 類似，但標線通常比 Mexico 更細）",
    "棋盤式街道系統：Calle（東西向）、Avenida（南北向）"
  ],
  poleInfo: [
    "<strong>電線桿</strong>：常見塗有<strong>粉紅色、綠色</strong>或兩者結合的電線桿（獨特特徵）；東南部有<strong>全綠色電線桿</strong>（附白色小牌）"
  ],
  signInfo: [
    "ALTO 停車標誌"
  ],
  landscape: ["從熱帶到高地", "火山地形", "可見瑪雅文化"],
  signs: ["西班牙語，有 Ñ"],
  plates: [
    "<strong>小型格式（15cm x 30cm）</strong> — 比美洲標準車牌更窄",
    "白底黑字，格式：字母 + 數字",
    "尺寸明顯比 Mexico 和其他中美洲國家小 — 可作為辨識線索"
  ],
  unique: [
    "<strong>車上可見黑色後視鏡</strong> — 全球唯一",
    "<strong>紅色塗漆的電線桿底部</strong>",
    "棋盤式街道命名（Calle/Avenida）",
    "'Una Via' / 'Doble Via' 表示單向/雙向",
    "<strong>圓形玻璃電錶（medidor circular）</strong>裝在房屋外牆 — 也見於 Mexico、Philippines、US、Dominican Republic"
  ],
  tips: [
    "Google 街景車上可見黑色後視鏡 = Guatemala",
    "紅色底部電線桿 + ALTO = Guatemala",
    "編號式棋盤命名系統（Calles/Avenidas）= Guatemala",
    "🔗 <a href=\"https://www.google.com/maps/@14.6349,-90.5069,3a,75y,90t\" target=\"_blank\" style=\"color:var(--accent-blue)\">Street View 範例（Guatemala City）</a>"
  ]
},

'costa-rica': {
  name: 'Costa Rica', localName: 'Costa Rica', flag: '🇨🇷', region: 'central-america',
  drivingSide: 'right', tld: '.co.cr', phoneCode: '+506', language: 'Spanish', currency: 'Colón (CRC)',
  camera: ["<strong>99.5% Gen 3 Trekker + 0.5% Gen 4</strong>", "2025 年起擴展全面涵蓋"],
  car: [
    "2025 年前：僅 Google Trekker — 看不到車（僅行人視角！）",
    "2025 年前的涵蓋無法離開人行道"
  ],
  roads: [
    "單黃色中心線",
    "銀色標誌桿，背面有十字支撐"
  ],
  signInfo: [
    "ALTO 停車標誌"
  ],
  landscape: ["熱帶：雨林、火山、海灘", "茂密植被"],
  signs: ["西班牙語"],
  plates: ["白底藍字車牌", "計程車為綠色車牌"],
  unique: [
    "<strong>2025 年前：只能在人行道上移動</strong>（Trekker 涵蓋）",
    "黃色消防栓",
    "Kölbi 品牌招牌（ICE 電信）",
    "高架垃圾桶（防止流浪狗翻找）"
  ],
  tips: [
    "卡在人行道上無法移動到馬路？= Costa Rica（2025 年前）",
    "ALTO + 熱帶 + Kölbi 招牌 = Costa Rica",
    "🔗 <a href=\"https://www.google.com/maps/@9.9281,-84.0907,3a,75y,90t\" target=\"_blank\" style=\"color:var(--accent-blue)\">Street View 範例（San Jose）</a>"
  ]
},

'panama': {
  name: 'Panama', localName: 'Panamá', flag: '🇵🇦', region: 'central-america',
  drivingSide: 'right', tld: '.pa', phoneCode: '+507', language: 'Spanish', currency: 'Balboa/USD',
  camera: ["<strong>100% Gen 3</strong>"],
  car: [
    "<strong>獨特粗天線</strong> — 全球唯一！100% 確認為 Panama",
    "即使看不到天線，模糊區域通常也比較大",
    "無 車頂架 (roof rack)、無 snorkel"
  ],
  roads: [
    "黃色中心線 + 白色邊線",
    "路面品質不一 — 都市區良好，鄉村較差",
    "泛美公路貫穿全國（但 Darién Gap 中斷）",

  ],
  signInfo: [
    "ALTO 停車標誌"
  ],
  landscape: ["Panama Canal 地區", "熱帶", "Barú 附近的火山地形"],
  signs: ["西班牙語"],
  plates: ["頂部有彩色條紋（綠色或藍色）", "部分全藍或全紅"],
  unique: [
    "<strong>獨特的粗天線</strong> — 100% 確認為 Panama",
    "黃色計程車上有路線名稱",
    "Copa Airlines 品牌標誌",
    "Panama Canal"
  ],
  tips: [
    "看到車上有獨特粗天線？= Panama（100%）",
    "這種天線在全世界其他地方都找不到",
    "🔗 <a href=\"https://www.google.com/maps/@8.9824,-79.5199,3a,75y,90t\" target=\"_blank\" style=\"color:var(--accent-blue)\">Street View 範例（Panama City）</a>"
  ]
},

// ╔══════════════════════════════════════════╗
// ║           CARIBBEAN                      ║
// ╚══════════════════════════════════════════╝

'dominican-republic': {
  name: 'Dominican Republic', localName: 'República Dominicana', flag: '🇩🇴', region: 'caribbean',
  drivingSide: 'right', tld: '.do', phoneCode: '+809', language: 'Spanish', currency: 'Peso (DOP)',
  camera: ["<strong>100% Gen 3</strong> — 僅限 Santo Domingo 和 Santiago 地區"],
  car: [
    "<strong>Roof bars + 黑色橡膠條紋在中間</strong> — 僅 DR 和 Mongolia（烏蘭巴托）有此特徵",
    "無可見側鏡（與 Guatemala 不同）",
    "白色轎車"
  ],
  roads: [
    "白色或黃色中心線",
    "路面品質不一 — Santo Domingo 周邊較好",
    "減速帶（badenes）非常常見",
  ],
  poleInfo: [
    "Santiago：電線桿底部灰色塗漆；Santo Domingo：未塗漆"
  ],
  signInfo: [
    "PARE 停車標誌（非 ALTO！）"
  ],
  landscape: ["熱帶加勒比海島嶼", "與 Haiti 共用同一島嶼"],
  signs: ["西班牙語"],
  plates: ["白色帶微黃色調", "僅有後車牌"],
  unique: [
    "<strong>黑色條紋 roof bars</strong> — 僅與 Mongolia 共有",
    "PARE 停車標誌（非中美洲的 ALTO）",
    "電線桿塗漆差異：Santiago vs Santo Domingo",
    "<strong>圓形玻璃電錶</strong>裝在房屋外牆 — 也見於 Mexico、Guatemala、Philippines、US"
  ],
  tips: [
    "黑色條紋 roof bars + 加勒比海 + 西班牙語 = Dominican Republic",
    "PARE（非 ALTO）= 南美洲/加勒比海慣例",
    "🔗 <a href=\"https://www.google.com/maps/@18.4861,-69.9312,3a,75y,90t\" target=\"_blank\" style=\"color:var(--accent-blue)\">Street View 範例（Santo Domingo）</a>"
  ]
},

'puerto-rico': {
  name: 'Puerto Rico', localName: 'Puerto Rico', flag: '🇵🇷', region: 'caribbean',
  drivingSide: 'right', tld: '.pr', phoneCode: '+1-787', language: 'Spanish, English', currency: 'Dollar (USD)',
  camera: ["<strong>100% Gen 3</strong>", "⚠️ 有 Gen 4 小相機 (smallcam/low cam) 覆蓋（~1,400 點位）— 視角更低、模糊區域更大"],
  car: [
    "白色轎車 + 副駕駛側天線",
    "前方無車牌",
    "Gen 3 涵蓋（主要西海岸）"
  ],
  roads: [
    "雙黃色中心線 + 白色邊線",
    "距離標記用 KM（但速度用 MPH）",
    "圓形盾牌公路標記（編號 100-9000+）",
    "街道標誌上有 'CALLE'"
  ],
  poleInfo: [
    "粗壯的方形電線桿"
  ],
  signInfo: [
    "<strong>PARE 停車標誌 + MPH 速限</strong> — 獨特組合！"
  ],
  landscape: ["熱帶加勒比海島嶼", "內陸有山脈"],
  signs: ["以西班牙語為主，也使用英語"],
  plates: ["不要求前車牌", "雙色調（左暗右亮）"],
  unique: [
    "<strong>PARE + MPH — 全球唯一此組合</strong>",
    "粗壯的方形電線桿",
    "'CALLE' 街道標誌",
    "美國領土但以西班牙語為主"
  ],
  tips: [
    "PARE 停車標誌 + MPH 速限 = Puerto Rico（其他地方沒有此組合）",
    "粗壯方形電線桿 + 西班牙語 + 熱帶 = Puerto Rico",
    "🔗 <a href=\"https://www.google.com/maps/@18.4655,-66.1057,3a,75y,90t\" target=\"_blank\" style=\"color:var(--accent-blue)\">Street View 範例（San Juan）</a>"
  ]
},

'curacao': {
  name: 'Curaçao', localName: 'Curaçao', flag: '🇨🇼', region: 'caribbean',
  drivingSide: 'right', tld: '.cw', phoneCode: '+599', language: '荷蘭語、英語、Papiamento', currency: 'Guilder (ANG)',
  camera: ["<strong>100% Gen 3</strong>"],
  car: [
    "<strong>可見 bars + 可見黑色引擎蓋</strong> — 全球唯一組合",
    "黑色轎車 + roof rack + 白色貼紙",
    "Roof rack 是辨識 Curaçao 的重要線索"
  ],
  roads: [
    "城鎮中亮黃色標誌桿",
    "黑白條紋交通號誌"
  ],
  poleInfo: [
    "底部白色的木製電線桿"
  ],
  landscape: ["乾旱的加勒比海島嶼", "色彩繽紛的荷蘭殖民風格房屋"],
  signs: ["荷蘭語、英語、Papiamento"],
  plates: [
    "白底黑字車牌",
    "格式獨特 — 與荷蘭本土及 Aruba 車牌不同",
    "加勒比荷語區看到白底黑字 + 荷蘭語 = Curacao"
  ],
  unique: [
    "<strong>車架 + 黑色引擎蓋可見</strong> — 100% Curaçao",
    "唯一說荷蘭語的加勒比海島嶼",
    "亮黃色標誌桿",
    "黑白條紋交通號誌",
    "色彩繽紛的房屋（圍欄與房屋同色）"
  ],
  tips: [
    "黑色引擎蓋 + roof bars = Curaçao",
    "荷蘭語文字 + 加勒比海 = Curaçao",
    "🔗 <a href=\"https://www.google.com/maps/@12.1696,-68.99,3a,75y,90t\" target=\"_blank\" style=\"color:var(--accent-blue)\">Street View 範例（Willemstad）</a>"
  ]
},

'bermuda': {
  name: 'Bermuda', localName: 'Bermuda', flag: '🇧🇲', region: 'caribbean',
  drivingSide: 'left', tld: '.bm', phoneCode: '+1-441', language: 'English', currency: 'Bermudian Dollar (BMD)',
  camera: ["<strong>100% Gen 3</strong>", "覆蓋有限 — 小型島嶼領土"],
  car: [
    "<strong>黑色 pickup truck（皮卡車）</strong> — 非一般轎車",
    "Bermuda 使用 pickup truck 而非標準 Google car — 這是極強的辨識特徵"
  ],
  roads: [
    "白色中心線",
    "靠左行駛（英國領土）",
    "窄路配 35 km/h 速限（全球最低）",
    "不允許租車 — 只有機車和計程車",
    "道路品質良好"
  ],
  landscape: [
    "粉色沙灘",
    "亞熱帶島嶼 — 鬱鬱蔥蔥的綠色植被",
    "粉彩色房屋",
    "英國殖民時期建築"
  ],
  signs: ["英語 — 英國風格路標"],
  plates: [
    "島嶼特有設計 — 與英國本土車牌不同",
    "格式多樣，尺寸較小",
    "英屬領土但車牌非標準英國格式"
  ],
  unique: [
    "<strong>黑色 pickup truck（皮卡車）</strong> — 非常罕見的 Google Street View 車輛",
    "靠左行駛 + 英語 + 亞熱帶島嶼",
    "粉彩色房屋和粉色沙灘",
    "北大西洋的英國領土"
  ],
  tips: [
    "黑色 pickup truck + 左駕 + 英文 + 亞熱帶島嶼 = Bermuda",
    "非常罕見的出生點 — small territory",
    "🔗 <a href=\"https://www.google.com/maps/@32.2949,-64.782,3a,75y,90t\" target=\"_blank\" style=\"color:var(--accent-blue)\">Street View 範例（Hamilton）</a>"
  ]
},

'us-virgin-islands': {
  name: 'US Virgin Islands', localName: 'US Virgin Islands', flag: '🇻🇮', region: 'caribbean',
  drivingSide: 'left', tld: '.vi', phoneCode: '+1-340', language: 'English', currency: 'Dollar (USD)',
  camera: [
    "<strong>100% Gen 3</strong>",
    "覆蓋約 50% 的道路 — 島嶼領土覆蓋有限",
    "St. Croix 覆蓋最廣（南部為主），St. Thomas 次之，St. John 最少",
    "St. Croix 北海岸有一段船景（boat coverage）— 色調偏粉色",
    "Buck Island 國家公園附近的街景色調也偏粉色"
  ],
  car: [
    "<strong>Pickup truck（皮卡車）</strong> — 非標準 Google 轎車，車斗（tray）和 bars 可見",
    "<strong>St. Croix（南島）</strong>：紅色 truck + 長黑天線（最常見）；也有無天線白色 truck",
    "<strong>St. Thomas / St. John（北島）</strong>：白色 truck + 長黑天線，車頂明顯較短",
    "⚠️ 天線全黑，頂部無白點 — 與 Puerto Rico 天線（頂部有白點）不同",
    "truck 的 cab 比 Christmas Island 的 pickup 大得多"
  ],
  roads: [
    "<strong>靠左行駛</strong> — 前丹麥殖民地，現為美國領土，美國唯一左行地區",
    "雙黃色中心線 + 白色邊線（美式路面標線）",
    "危險路段有<strong>黃色護欄（guardrails）</strong>",
    "大多數為雙向單車道窄路，路面品質不一",
    "限速 20 mph（城鎮內）/ 35 mph（城鎮外），最高 55 mph",
    "路面常有坑洞，山區道路蜿蜒狹窄"
  ],
  poleInfo: [
    "木製電線桿 — 典型美式公用設施配置",
    "颱風後大量電線桿被替換為複合材料桿（FEMA 資助更換 934+ 根）"
  ],
  signInfo: [
    "<strong>STOP 標誌 + MPH 速限</strong> — 美式 MUTCD 標準",
    "黃色警告標誌、綠色指示標誌 — 與美國本土相同",
    "但靠左行駛 — STOP + MPH + 左駕 = USVI",
    "領土專屬公路標記（形狀和顏色與 50 州不同）"
  ],
  landscape: [
    "<strong>St. Thomas</strong>（31 sq mi）：東西向長山脊貫穿中央，Crown Mountain 海拔 1,556 ft；港口城鎮 Charlotte Amalie",
    "<strong>St. Croix</strong>（84 sq mi，最大島）：東部乾旱多仙人掌、岩石；西部鬱鬱蔥蔥的森林、水果樹和蕨類；地勢相對較平",
    "<strong>St. John</strong>（20 sq mi，最小島）：2/3 為國家公園，山谷丘陵少平地，Bordeaux Mountain 海拔 1,277 ft",
    "整體為熱帶加勒比海島嶼 — 白沙灘、碧藍海水、棕櫚樹",
    "建築風格：巴洛克 + 洛可可 + 維多利亞風格的殖民建築，大拱門、中央廣場、庭院",
    "丹麥殖民歷史遺跡和糖廠廢墟"
  ],
  signs: [
    "英語 — 所有標誌為英語（非西班牙語）",
    "美式標誌系統 — MUTCD 規範",
    "速限以 MPH 標示",
    "'AMERICA'S CARIBBEAN' 和 'TRANSFER CENTENNIAL' 等宣傳文字"
  ],
  plates: [
    "美式尺寸（12\" x 6\"）— 較寬短的美洲格式",
    "2023 年起使用 175th Emancipation 紀念版：<strong>黑色凸字 + 青色/白色/金色三條紋</strong>",
    "舊版常見<strong>深藍色底 + 橘色島嶼輪廓</strong>，左上角美國國旗、右上角 USVI 旗",
    "格式：字母+數字混合，<strong>首字母標示島嶼</strong>：C = St. Croix、T = St. Thomas、J = St. John",
    "車牌多樣化設計 — 'American Paradise'、'Tropical Playground' 等口號",
    "⚠️ 模糊化後常只看到藍色底色"
  ],
  unique: [
    "<strong>靠左行駛 + 英語 + 美式標誌 + MPH</strong> — 全球獨特組合",
    "<strong>Pickup truck</strong> — 紅色（St. Croix）或白色（St. Thomas/St. John）",
    "天線全黑無白點 — 與 Puerto Rico 區分",
    "⚠️ 美國唯一左行領土",
    "殖民建築：巴洛克/洛可可/維多利亞風格混合",
    "黃色護欄（guardrails）",
    "開放式卡車計程車（safari taxi）— 各色車身、載多人",
    "車牌首字母可判斷島嶼：C/T/J"
  ],
  tips: [
    "<strong>靠左行駛 + STOP（非 PARE）+ MPH = USVI</strong>（Puerto Rico 靠右且用 PARE）",
    "紅色 pickup truck + 左駕 + 英文 = USVI St. Croix",
    "白色 pickup truck + 黑天線 + 左駕 = USVI St. Thomas / St. John",
    "<strong>vs Puerto Rico</strong>：PR 靠右、用 PARE 和西班牙語、天線頂部有白點",
    "<strong>vs Bermuda</strong>：Bermuda = 黑色 pickup + 北大西洋 + 粉色沙灘；USVI = 紅/白 pickup + 加勒比海",
    "<strong>vs Jamaica</strong>：Jamaica 無特殊 truck、速限用 km/h；USVI 用 mph + 美式標誌",
    "<strong>vs British Virgin Islands</strong>：BVI 無 Google 官方覆蓋",
    "St. Croix 辨識：較平坦、東部乾旱仙人掌、紅色 truck",
    "St. Thomas/St. John 辨識：多山蜿蜒道路、白色 truck、車頂較短",
    "🔗 <a href=\"https://www.google.com/maps/@18.3358,-64.9307,3a,75y,90t\" target=\"_blank\" style=\"color:var(--accent-blue)\">Street View 範例（Charlotte Amalie）</a>"
  ]
},

'christmas-island': {
  name: 'Christmas Island', localName: 'Christmas Island', flag: '🇨🇽', region: 'oceania',
  drivingSide: 'left', tld: '.cx', phoneCode: '+61', language: 'English', currency: 'Australian Dollar (AUD)',
  camera: ["<strong>100% Gen 3</strong>", "覆蓋非常有限 — 小型島嶼"],
  car: [
    "<strong>銀色 pickup truck（皮卡車）</strong>可見車斗 — 也有大量<strong>徒步旅者覆蓋</strong>",
    "Christmas Island 使用銀色 pickup truck — 與 Bermuda 的黑色 pickup 不同"
  ],
  roads: [
    "白色中心線",
    "靠左行駛（澳洲領土）",
    "使用標準<strong>澳洲路樁</strong>（白色主體，前側紅色反光體，後側灰色反光體）",
    "澳洲風格限速牌、綠色路牌等基礎設施",
    "車牌為<strong>黃色</strong>"
  ],
  landscape: [
    "覆蓋茂密雨林的熱帶島嶼",
    "紅蟹（著名的年度遷徙）",
    "海岸懸崖和磷礦開採區",
    "印度洋 — 位於 Australia 和 Indonesia 之間"
  ],
  signs: ["英語 — 澳洲風格標誌"],
  plates: [
    "使用澳洲車牌系統（澳洲領土）",
    ".cx domain 和 +61 電話碼可幫助確認",
    "車牌外觀與澳洲本土相同 — 需靠其他線索（熱帶島嶼 + 銀色 pickup）區分"
  ],
  unique: [
    "<strong>銀色 pickup truck（皮卡車）</strong> — 與 Bermuda 的黑色 pickup 不同",
    "印度洋中的澳洲領土",
    "茂密的熱帶雨林 + 海岸懸崖",
    "非常罕見的出生點"
  ],
  tips: [
    "銀色 pickup truck + 左駕 + 英文 + 熱帶島嶼 = Christmas Island",
    "與 Bermuda 區分：Bermuda = 黑色 pickup，Christmas Island = 銀色 pickup",
    "Australian phone code (+61) 和 .cx domain",
    "🔗 <a href=\"https://www.google.com/maps/@-10.4475,105.6904,3a,75y,90t\" target=\"_blank\" style=\"color:var(--accent-blue)\">Street View 範例（Christmas Island）</a>"
  ]
},

'cocos-islands': {
  name: 'Cocos (Keeling) Islands', localName: 'Cocos (Keeling) Islands', flag: '🇨🇨', region: 'oceania',
  drivingSide: 'left', tld: '.cc', phoneCode: '+61', language: 'English', currency: 'Australian Dollar (AUD)',
  camera: [
    "<strong>100% Trekker / 非標準覆蓋</strong>",
    "由兩個珊瑚環礁組成",
    "在國家連勝中算作澳大利亞",
    "西島上有街景車覆蓋，其他為徒步拍攝者覆蓋"
  ],
  car: [
    "西島街景車<strong>右前方有通氣管（snorkel）</strong>，車框邊緣可見",
    "Bantam 區域可見街景車的<strong>白色後緣</strong>",
    "街景車也可能完全被模糊",
    "沿海有大量<strong>徒步拍攝者</strong>覆蓋"
  ],
  roads: [
    "靠左行駛（澳洲領土）",
    "科科斯群島跑道是島上最寬的鋪設道路",
    "Bantam 可通過<strong>交錯鋪磚路面</strong>識別",
    "道路非常有限 — 小型珊瑚環礁"
  ],
  landscape: [
    "明亮的<strong>白色沙灘</strong>、大量<strong>棕櫚樹</strong>和修剪過的草坪",
    "與 Christmas Island 相比，森林和丘陵要少得多",
    "Direction Island 海灘上垃圾明顯較多（磚塊、聚苯乙烯泡沫、死珊瑚）",
    "霍斯堡島（Pulau Luar）有乾燥黃色草地和較稀疏的植被",
    "珊瑚環礁地形 — 非常平坦低矮"
  ],
  signs: [
    "英語（澳洲領土）",
    "標誌極為有限 — 非常小的領地"
  ],
  plates: [
    "使用澳洲車牌系統",
    "車輛極少 — 很難看到車牌"
  ],
  unique: [
    "西島街景車<strong>右前方有通氣管</strong> — 辨識特徵",
    "<strong>白色沙灘 + 棕櫚樹 + 珊瑚環礁</strong> — 極為平坦的小島",
    "比 Christmas Island 平坦得多、森林少得多",
    "西島到 Bantam 間有中型<strong>船</strong>覆蓋",
    "Bantam 的<strong>交錯鋪磚路面</strong>可識別該區域"
  ],
  tips: [
    "白色沙灘 + 棕櫚樹 + 極度平坦 = Cocos Islands（vs Christmas Island 有丘陵和雨林）",
    "右前方通氣管的街景車 = 西島",
    "交錯鋪磚路面 = Bantam",
    "澳洲領土 — phone code +61，.cc domain",
    "🔗 <a href=\"https://www.google.com/maps/@-12.1642,96.871,3a,75y,90t\" target=\"_blank\" style=\"color:var(--accent-blue)\">Street View 範例（Cocos Islands）</a>"
  ]
},

// ╔══════════════════════════════════════════╗
// ║           SOUTH AMERICA                  ║
// ╚══════════════════════════════════════════╝

'brazil': {
  name: 'Brazil', localName: 'Brasil', flag: '🇧🇷', region: 'south-america',
  drivingSide: 'right', tld: '.br', phoneCode: '+55', language: 'Portuguese', currency: 'Real (BRL)',
  camera: ["<strong>88% Gen 4 + 12% Gen 3</strong>", "使用 30 多輛 Fiat Stilo 車；Amazon 地區也用自行車和船", "⚠️ <strong>全球最多 Gen 4 小相機 (smallcam/low cam) 覆蓋（~85,500 點位）</strong> — 視角更低、模糊區域更大"],
  car: [
    "Gen 3：白色轎車",
    "Gen 4：<strong>三種車色</strong> — 藍色、帶藍條的白色、白色（不同州出現頻率不同）",
    "<strong>短粗天線（短粗天線 (stubby antenna)）</strong> — 與 Mexico, Colombia, Ecuador 共用",
    "有時無天線"
  ],
  roads: [
    "<strong>中線雙黃線 + 白色外線</strong>（中線偶爾為單黃色虛線）",
    "<strong>黑色標誌背面</strong> — Brazil 最強辨識特徵之一",
    "黃黑色V字標記",
    "道路兩側有<strong>白色路緣石</strong>（常見）",
    "藍色路標顯示道路編號和公里數",
    "標誌上的州代碼（PR、SP、MG 等）"
  ],
  bollardInfo: [
    "<strong>黑黃色 V 字標記（chevron）</strong> — São Paulo 等州公路常見",
    "白色圓柱形 bollard 搭配反光片，部分為黃色塗漆"
  ],
  poleInfo: [
    "<strong>電線桿</strong>：最常見為<strong>梯子桿</strong>（底部矩形寬大，有 3-4 段分段凹痕，頂部有小孔）",
    "南部（尤其 SP）常見<strong>圓柱形混凝土桿</strong>；RS、RR、AM、RJ 常見<strong>木桿</strong>",
    "電線桿上有<strong>黃色杆漆標記</strong>（電力公司 ID），各州設計不同（重要區域線索）"
  ],
  signInfo: [
    "PARE 停車標誌",
    "誘導標：<strong>黑底黃箭頭</strong>（南美洲大部分為黃底黑箭頭，巴西相反）"
  ],
  landscape: [
    "<strong>紅橘色土壤</strong> — 非常獨特",
    "Paraná 松（Paraná/Santa Catarina）",
    "Amazon — 涵蓋稀疏",
    "甘蔗（São Paulo）、咖啡（Minas Gerais）",
    "裸露紅磚建築"
  ],
  signs: [
    "<strong>葡萄牙語</strong> — 南美洲唯一說葡萄牙語的國家",
    "字母：ç、ã、õ、â、ê、ô",
    "ã 和 õ 可區分葡萄牙語和西班牙語",
    "'ção' 結尾非常常見"
  ],
  plates: [
    "2018 年前：白底黑字車牌",
    "2018 年後 Mercosul：白底 + 藍色頂部條紋",
    "紅色車牌 = 營業車輛（公車、計程車）"
  ],
  unique: [
    "<strong>葡萄牙語</strong>（南美洲唯一）",
    "<strong>黑色標誌背面</strong>",
    "<strong>紅橘色土壤</strong>",
    "「梯子」電線桿",
    "標誌上的 BR/SP/PR 州代碼",
    "車上的短天線"
  ,
    "路名使用 Rua（街道）、Avenida (Av.)（大道）、Praça（廣場）、Travessa（小巷）"
  ],
  tips: [
    "南美洲的葡萄牙語（ã、õ）= Brazil（100%）",
    "黑色標誌背面 = Brazil",
    "紅橘色土壤 = 非常可能是 Brazil",
    "梯子電線桿 + 葡萄牙語 = Brazil",
    "🔗 <a href=\"https://www.google.com/maps/@-23.5505,-46.6333,3a,75y,90t\" target=\"_blank\" style=\"color:var(--accent-blue)\">Street View 範例（Sao Paulo）</a>"
  ]
},

'argentina': {
  name: 'Argentina', localName: 'Argentina', flag: '🇦🇷', region: 'south-america',
  drivingSide: 'right', tld: '.ar', phoneCode: '+54', language: 'Spanish', currency: 'Peso (ARS)',
  camera: [
    "<strong>59.8% Gen 3 + 40.2% Gen 4</strong>",
    "Gen 3：黑色 Google 街景車拍攝",
    "Gen 4 覆蓋持續擴展中"
  ],
  car: [
    "Gen 3/4：<strong>黑色轎車</strong> — 在南美洲中較為獨特",
    "後方可見，平坦荒涼的景觀（Patagonia）",
    "無 antenna、無 車頂架 (roof rack)"
  ],
  roads: [
    "<strong>混合中線</strong>：白色虛線、雙黃線、或單黃線 + 白色虛線混合",
    "護欄上有<strong>黃色和紅色矩形反光片</strong>（Uruguay 也有，但支撐柱形狀不同）",
    "RN（國道）/ RP（省道）公路標誌",
    "高速公路標識獨特：頂部標明路號"
  ],
  bollardInfo: [
    "<strong>白紅色 V 字形標記（chevron）</strong>貼在柱子上 — Argentina 獨有的路側標記",
    "公路旁也有白色圓柱形 bollard，頂部有反光片"
  ],
  poleInfo: [
    "<strong>電線桿</strong>：(1) <strong>混凝土圓桿</strong>，上有三根電線交替分布 (2) <strong>雙圓桿</strong>組合（阿根廷優秀線索，Bolivia 偶爾也有）(3) <strong>木桿</strong>（含木製 A 型桿，南美洲中僅阿根廷有木製 A 型桿）",
    "La Rioja 和 Mendoza 有<strong>「拉脫維亞式」木製電線桿</strong>（獨有）"
  ],
  signInfo: [
    "PARE 停車標誌",
    "誘導標：<strong>白底紅箭頭</strong>（拉丁美洲中阿根廷獨有）"
  ],
  landscape: [
    "Pampas：平坦草原",
    "Patagonia：荒涼風蝕地形",
    "西北部：沙漠山脈",
    "Misiones：Paraná 松",
    "葡萄酒產區（Mendoza）"
  ],
  signs: ["西班牙語，有 Ñ"],
  plates: [
    "<strong>黑底白字車牌</strong>（舊格式）",
    "新 Mercosul 格式，藍色頂部條紋"
  ],
  unique: [
    "<strong>黑色 Google 街景車</strong>",
    "<strong>白紅色V字標記</strong>",
    "<strong>A 字形電線桿</strong>",
    "RN/RP 公路標記",
    "YPF 加油站（國家石油公司）",
    "黑色車牌"
  ],
  tips: [
    "黑色 Google 街景車 + 西班牙語 + PARE = Argentina 或 Uruguay",
    "A 字形電線桿 = Argentina",
    "白紅色V字標記 = Argentina（其他南美國家沒有）",
    "YPF 加油站 = Argentina",
    "🔗 <a href=\"https://www.google.com/maps/@-34.6037,-58.3816,3a,75y,90t\" target=\"_blank\" style=\"color:var(--accent-blue)\">Street View 範例（Buenos Aires）</a>"
  ]
},

'falkland-islands': {
  name: 'Falkland Islands', localName: 'Falkland Islands / Islas Malvinas', flag: '🇫🇰', region: 'south-america',
  drivingSide: 'left', tld: '.fk', phoneCode: '+500', language: 'English', currency: 'Falkland Islands Pound (FKP)',
  camera: [
    "<strong>100% Trekker（徒步拍攝）</strong>",
    "覆蓋極為有限 — 僅三代徒步拍攝街景",
    "僅覆蓋西部三個島嶼：Carcass Island、West Point Island、New Island",
    "在國家連勝中視作阿根廷的一部分"
  ],
  car: [
    "無街景車覆蓋 — 全部為<strong>徒步拍攝者</strong>",
    "無法透過車輛辨識",
    "完全沒有城鎮街景"
  ],
  roads: [
    "靠左行駛（英國海外領土）",
    "幾乎無鋪設道路可見 — 覆蓋區域為荒野步道",
    "無道路標線或基礎設施"
  ],
  landscape: [
    "寒冷多風的島嶼，覆蓋短綠草",
    "Carcass Island：開闊平原，大海清晰可見，地面遍布石頭",
    "West Point Island：開闘平原，微黃色草，不易看到海",
    "New Island：沙灘、深棕色土壤、陡峭懸崖",
    "West Point Bay 有黃色山丘和 MS National Geographic Explorer 大船",
    "⚠️ 注意與 Faroe Islands 的徒步街景區分"
  ],
  signs: [
    "英語（英國海外領土）",
    "幾乎無標誌可見 — 覆蓋區域為無人居住的島嶼"
  ],
  plates: [
    "全寬白色車牌黑色文字",
    "幾乎不可能在街景中看到車牌"
  ],
  unique: [
    "100% <strong>徒步拍攝</strong> — 無任何街景車覆蓋",
    "僅三個西部離島有覆蓋（無東福克蘭或 Stanley）",
    "New Island 的<strong>陡峭懸崖</strong>和<strong>深棕色土壤</strong>",
    "West Point Bay 可見 <strong>National Geographic Explorer</strong> 大船",
    "New Island 沙灘上可見穿<strong>紅藍色夾克</strong>的人"
  ],
  tips: [
    "100% 徒步街景 + 寒冷荒涼的南大西洋島嶼 = Falkland Islands",
    "與 Faroe Islands 區分：Falklands 更荒涼、草更黃、有海獅/企鵝",
    "記住三個島的特徵：Carcass（石頭平原）、West Point（黃草）、New Island（懸崖+棕土）",
    "National Geographic Explorer 大船 = West Point Bay",
    "🔗 <a href=\"https://www.google.com/maps/@-51.7963,-59.5236,3a,75y,90t\" target=\"_blank\" style=\"color:var(--accent-blue)\">Street View 範例（Stanley）</a>"
  ]
},

'chile': {
  name: 'Chile', localName: 'Chile', flag: '🇨🇱', region: 'south-america',
  drivingSide: 'right', tld: '.cl', phoneCode: '+56', language: 'Spanish', currency: 'Peso (CLP)',
  camera: ["<strong>56.2% Gen 3 + 43.7% Gen 4 + 0.1% Gen 2</strong>"],
  car: [
    "Gen 3：<strong>白色轎車，無天線</strong> — (1) 普通白車 (2) 白車帶可見黑色部分（Chile 獨有）",
    "Gen 4：<strong>藍色轎車</strong>",
    "配合<strong>全白道路線</strong>辨識（南美唯一全白線國家）"
  ],
  roads: [
    "<strong>全白色道路標線</strong> — 南美洲唯一全白標線的國家（國家公園/大雪地區為全黃線）",
    "頂部有插槽的標誌桿"
  ],
  bollardInfo: [
    "西班牙式 bollard"
  ],
  poleInfo: [
    "方形混凝土電線桿，側面有凹痕 + 小孔"
  ],
  signInfo: [
    "PARE 停車標誌"
  ],
  landscape: [
    "北部：Atacama 沙漠（地球上最乾燥的地方）",
    "中部：地中海型",
    "南部：森林和湖泊",
    "最南端：Patagonia"
  ],
  signs: ["西班牙語，有 Ñ"],
  plates: ["白色車牌（一般）", "<strong>橘色車牌（商用/計程車）</strong>"],
  unique: [
    "<strong>全白色道路標線</strong> — Chile 最強辨識特徵",
    "可見白色車尾",
    "頂部有插槽的標誌桿",
    "有凹痕的方形混凝土電線桿",
    "公路上的 SOS 緊急箱"
  ],
  tips: [
    "全白色道路標線（中心線和邊線都是白色）= Chile",
    "南美洲沒有其他國家使用全白色標線",
    "橘色車牌 = Chile 的商用車輛",
    "🔗 <a href=\"https://www.google.com/maps/@-33.4489,-70.6693,3a,75y,90t\" target=\"_blank\" style=\"color:var(--accent-blue)\">Street View 範例（Santiago）</a>"
  ]
},

'colombia': {
  name: 'Colombia', localName: 'Colombia', flag: '🇨🇴', region: 'south-america',
  drivingSide: 'right', tld: '.co', phoneCode: '+57', language: 'Spanish', currency: 'Peso (COP)',
  camera: ["<strong>58% Gen 4 + 42% Gen 3</strong>"],
  car: [
    "Gen 3：<strong>短粗天線（短粗天線 (stubby antenna)）</strong> — 與 Mexico, Ecuador, Brazil 共用",
    "車色多樣：黑色、白色、灰色皆有",
    "天線隨機出現",
    "Gen 4：白色或銀色轎車"
  ],
  roads: [
    "黃色中心線 + 白色邊線",
    "<strong>「Colombia Cross」— 標誌背面的 X 形金屬結構</strong>",
    "細白色標誌桿",
    "紅色磁磚人行道"
  ],
  bollardInfo: [
    "<strong>白色圓柱形 bollard</strong>，頂部有紅色反光條 — 公路彎道常見",
    "也有混凝土道路標記柱（白色方柱 + 紅色反光片）"
  ],
  poleInfo: [
    "<strong>八角形電線桿</strong> — 拉丁美洲僅 Colombia 和 Mexico 有此型",
    "黑黃色或黑橘色漆帶（如 Bucaramanga 地區的獨特橘色杆漆）"
  ],
  signInfo: [
    "PARE 停車標誌"
  ],
  landscape: [
    "Andes 山脈",
    "熱帶低地",
    "咖啡產區（Eje Cafetero 地區）",
    "殖民時期白色建築配彩色陽台（Cartagena、Villa de Leyva）",
    "紅磚建築在 Bogotá 常見"
  ],
  signs: ["西班牙語，有 Ñ"],
  plates: ["<strong>黃色車牌</strong> — 南美洲獨有", "底部有城市名稱"],
  unique: [
    "<strong>黃色車牌</strong> — Colombia 最強辨識特徵",
    "<strong>標誌背面的 Colombia Cross</strong>",
    "<strong>八角形電線桿</strong> — 拉丁美洲僅 Colombia 和 Mexico 有",
    "細白色標誌桿",
    "紅色磁磚人行道"
  ],
  tips: [
    "黃色車牌 = Colombia（在南美洲 100% 確認）",
    "標誌背面的 X 形金屬（Colombia Cross）= Colombia",
    "🔗 <a href=\"https://www.google.com/maps/@4.711,-74.0721,3a,75y,90t\" target=\"_blank\" style=\"color:var(--accent-blue)\">Street View 範例（Bogota）</a>"
  ]
},

'ecuador': {
  name: 'Ecuador', localName: 'Ecuador', flag: '🇪🇨', region: 'south-america',
  drivingSide: 'right', tld: '.ec', phoneCode: '+593', language: 'Spanish', currency: 'Dollar (USD)',
  camera: ["<strong>55% Gen 3 + 36% Shitcam + 9% Gen 4</strong>", "Gen 4 在大部分地區可見，明顯例外是西北和東南"],
  car: [
    "Gen 3：白色轎車 + <strong>短粗天線（stubby antenna）</strong> — 與 Mexico, Colombia, Brazil 共用",
    "Gen 3 天線有兩種：<strong>高天線</strong>（螺紋在中線以上，僅在北部出現）vs <strong>低天線</strong>（大部分螺紋在中線以下）",
    "Gen 4：<strong>白色 pickup truck</strong>（後車斗為黑色，車頭無天線；vs Panama 的 pickup 有天線）",
    "⚠️ <strong>Shitcam</strong>：巨大圓形模糊打碼，顏色偏棕，車頭偶見<strong>紅色 logo</strong> — 拉丁美洲僅 Ecuador 有"
  ],
  roads: [
    "黃色中心線",
    "<strong>雙層護欄</strong> — 在南美洲非常少見，Ecuador 獨有特徵",
    "<strong>混凝土道路</strong>相對常見",
    "彎道處大量誘導標（比其他拉美國家多很多）",
    "綠色公里標識，標有獨特的 Ecuador 高速公路標誌",
    "<strong>路牌背面塗藍綠色</strong>（薄金屬製）— 拉美僅 Ecuador 有",
    "白色方形速限標誌（類似澳洲風格）",
    "<strong>單向/雙向路標</strong>：字寫在箭頭裡 — 僅 Ecuador、Dominican Republic、Puerto Rico 有"
  ],
  bollardInfo: [
    "<strong>非常常見的 bollard</strong>（拉美少見有這麼多 bollard 的國家）",
    "兩種主要樣式：(a) 紅白條紋圓柱形；(b) 扁平型背面兩個紅色反光片"
  ],
  poleInfo: [
    "多為圓形混凝土桿（較普通）",
    "<strong>華夫餅電線桿</strong>：有很多小凹口像梯子 — 拉美僅 Ecuador 有（vs Brazil 的華夫餅桿只有幾個凹口）",
    "Loja 省：<strong>橢圓形孔洞</strong>的電線桿"
  ],
  signInfo: [
    "PARE 停車標誌",
    "路牌背面<strong>藍綠色</strong> — 拉美唯一"
  ],
  landscape: [
    "安第斯山脈從國家中間穿過，東西兩側較平坦",
    "西南部：<strong>香蕉種植園</strong>成片",
    "Guayaquil-Manta 之間：<strong>極度乾旱</strong>沿海景觀",
    "亞馬遜區域：平坦 + 白色樹皮的樹 (Cordia trichotoma) + 油棕",
    "南部：曲折山路 + 裸露棕紅色土壤",
    "大多數房屋為<strong>灰磚</strong>+<strong>金屬屋頂</strong>（vs Bolivia 紅磚、Peru 也紅磚）",
    "城市中有<strong>六邊形地磚</strong>路面",
    "Galápagos 群島有徒步/船隻街景"
  ],
  signs: ["西班牙語，有 Ñ"],
  plates: [
    "白色車牌（長牌和短牌都有 — <strong>拉美唯一同時使用兩種長度</strong>）",
    "格式：<strong>3 字母 + 3-4 數字</strong>",
    "省份首字母前綴可定位區域（A=Azuay, G=Guayas, P=Pichincha）— 計程車首字母也是省份",
    "<strong>橘色車牌</strong> = 計程車/商用車",
    "vs Colombia 全黃車牌 — 區分兩國的有力線索"
  ],
  unique: [
    "<strong>雙層護欄</strong>（南美洲僅 Ecuador）",
    "<strong>Shitcam 覆蓋 + 紅色 logo</strong>（拉美僅 Ecuador）",
    "<strong>路牌背面藍綠色</strong>（拉美僅 Ecuador）",
    "<strong>華夫餅電線桿</strong>（大量凹口，拉美僅 Ecuador）",
    "常見紅白條紋 bollard",
    "使用 USD（$）為貨幣（在南美洲不常見）",
    "同時使用長牌和短牌",
    "Guayas 省護欄塗黑黃色"
  ],
  tips: [
    "Shitcam（巨大圓形模糊 + 偏棕）= Ecuador（拉美唯一）",
    "雙層護欄 + 紅白條紋 bollard = Ecuador",
    "路牌背面藍綠色 = Ecuador",
    "華夫餅電線桿（大量凹口）= Ecuador",
    "南美洲看到 USD 價格 = Ecuador",
    "高天線（螺紋在中線以上）= Ecuador 北部",
    "Guayas 省護欄黑黃色",
    "🔗 <a href=\"https://www.google.com/maps/@-0.1807,-78.4678,3a,75y,90t\" target=\"_blank\" style=\"color:var(--accent-blue)\">Street View 範例（Quito）</a>"
  ]
},

'peru': {
  name: 'Peru', localName: 'Perú', flag: '🇵🇪', region: 'south-america',
  drivingSide: 'right', tld: '.pe', phoneCode: '+51', language: 'Spanish', currency: 'Sol (PEN)',
  camera: ["<strong>67.8% Gen 3 + 32.1% Gen 4 + 0.1% Gen 2</strong>", "全球最高的 Street View 道路（4,818m）", "⚠️ 有 Gen 4 小相機 (smallcam/low cam) 覆蓋（~3,000 點位）— 視角更低、模糊區域更大"],
  car: [
    "Gen 3：白色 + 黑色轎車皆有",
    "Gen 4：<strong>深灰色轎車</strong>",
    "部分涵蓋有黑色 truck（120 號公路 Yauyos-Cochas 保護區附近）",
    "無 antenna（與有天線的鄰國不同）"
  ],
  roads: [
    "黃色中心線 + 白色路肩線",
    "<strong>黑白條紋標誌桿</strong> — 僅 Peru！",
    "標誌底座在凸起的混凝土塊上"
  ],
  bollardInfo: [
    "「香菸」bollard — 白色圓柱配黑色條紋"
  ],
  poleInfo: [
    "三臂電線桿；下半部塗黑"
  ],
  signInfo: [
    "PARE 停車標誌"
  ],
  landscape: [
    "海岸：沙漠",
    "高地：2500-4000m 溫帶",
    "4000m 以上：稀疏的 Ichu 草",
    "東部：熱帶 Amazon",
    "殖民時期建築（Cusco、Arequipa 白色火山岩建築）",
    "Adobe 泥磚建築在鄉村常見"
  ],
  signs: ["高地有西班牙語 + Quechua", "常見政治海報"],
  plates: ["白色（一般）", "黃色（商用）"],
  unique: [
    "<strong>黑白條紋標誌桿</strong> — 僅 Peru",
    "<strong>三臂電線桿</strong>",
    "<strong>Mototaxis（嘟嘟車）</strong> — 拉丁美洲僅 Peru 有",
    "香菸形 bollard",
    "混凝土底座標誌桿",
    "<strong>長方形電錶</strong>（非圓形！）— 可快速區分 Peru vs Mexico（Mexico 用圓形電錶）"
  ],
  tips: [
    "黑白條紋標誌桿 = Peru（100%）",
    "拉丁美洲的嘟嘟車（mototaxis）= Peru",
    "下半部塗黑的三臂電線桿 = Peru",
    "🔗 <a href=\"https://www.google.com/maps/@-12.0464,-77.0428,3a,75y,90t\" target=\"_blank\" style=\"color:var(--accent-blue)\">Street View 範例（Lima）</a>"
  ]
},

'bolivia': {
  name: 'Bolivia', localName: 'Bolivia', flag: '🇧🇴', region: 'south-america',
  drivingSide: 'right', tld: '.bo', phoneCode: '+591', language: 'Spanish, Quechua, Aymara', currency: 'Boliviano (BOB)',
  camera: ["<strong>100% Gen 3</strong>", "全境由一台無天線白色轎車拍攝", "覆蓋限於中部和西部 — 六大城市（La Paz/El Alto, Cochabamba, Oruro, Sucre, Potosí, Santa Cruz）+ 主要公路"],
  car: [
    "白色轎車，<strong>無天線</strong>",
    "拉美範圍內，無天線白車也見於 Peru、Chile"
  ],
  roads: [
    "雙黃中線、黃白組合中線、雙白中線均可見 — 外線<strong>總是白色</strong>",
    "vs Chile：只有全黃或全白標線，不會有黃白組合",
    "vs Peru：Peru 可有僅外線無中線的道路，Bolivia 很少見",
    "<strong>混凝板路</strong>（concrete slab road）相當常見",
    "<strong>鵝卵石道路</strong>：整齊石列分隔中間不規則石頭 — Bolivia 獨特模式",
    "白色方形粗路標桿（vs Peru 的黑白「斑馬配色」路標桿）",
    "護欄<strong>黃黑條紋</strong>：最外側<strong>總是黃色</strong>（vs Peru 最外側總是黑色）",
    "高海拔道路（許多在 3500m 以上）",
    "<strong>黑白公里標識</strong>：頂部黑底白字 'km'，中下部白底黑字距離，通常<strong>無道路編號</strong>（vs Argentina 有編號）"
  ],
  bollardInfo: [
    "正面<strong>白色 + 頂部黃色反光條</strong>，背面有紅色反光條",
    "也有<strong>黃色塗漆 bollard</strong> — 與 Peru 的黑白配色不同"
  ],
  poleInfo: [
    "<strong>圓柱形混凝土桿</strong>：頂部常有許多小孔",
    "<strong>木質電線桿</strong>：種類繁多，各種杆頂樣式",
    "⚠️ 東部的木質桿常<strong>極度彎曲</strong>（像用當地樹幹製成）— 極度彎曲的桿是 Bolivia 好線索",
    "極少數情況可見 Argentina 風格電線桿"
  ],
  signInfo: [
    "PARE 停車標誌"
  ],
  landscape: [
    "<strong>Altiplano 高原</strong>（西部）：乾燥草原，叢生雜草（GeoGuessr 社群稱「Bolivia 刺蝟」），北部較綠、南部較乾",
    "<strong>安第斯山脈</strong>：從西北到東南延伸，位於高原和雨林之間",
    "安第斯以東：<strong>茂密熱帶植被</strong>，大量農業，土壤常呈粉紅色，地勢平坦（Santa Cruz 附近）",
    "的的喀喀湖（Titicaca）：位於 Bolivia/Peru 邊界，周圍景觀格外翠綠",
    "<strong>大型紅磚建築</strong> — 常看起來像未完工（Bolivia 最具辨識度的建築特徵）",
    "紅磚在 Peru 部分地區也有，但 Bolivia 更為普遍",
    "高海拔（許多道路在 3500m 以上）"
  ],
  signs: ["西班牙語 + Quechua + Aymara"],
  plates: [
    "<strong>白底藍色邊框 + 藍色文字</strong> — 模糊後看起來幾乎純白",
    "格式：4 數字 + 3 字母，頂部印有 \"BOLIVIA\" 字樣",
    "藍色調在南美洲較獨特 — 看到藍色文字車牌 + 高原沙漠 = Bolivia"
  ],
  unique: [
    "<strong>大型紅磚未完工建築</strong> — Bolivia 最顯眼的特徵",
    "<strong>Wiphala 旗</strong> — 彩虹棋盤旗（原住民旗幟），政府大樓常見",
    "<strong>MAS 黨/Evo 政治塗鴉</strong>：藍色、黑色、白色配色 — Bolivia 獨有",
    "<strong>Tigo 電信</strong>藍色 logo — Peru 沒有 Tigo（二選一時的關鍵線索）",
    "穿傳統服飾的婦女（圓頂禮帽、彩色披肩、百褶裙 pollera）",
    "<strong>極度彎曲的木質電線桿</strong>",
    "鵝卵石道路的獨特整齊/不規則分列模式",
    "護欄黃黑條紋（外側=黃色，vs Peru 外側=黑色）"
  ],
  tips: [
    "紅磚未完工建築 + 高原 = Bolivia",
    "Tigo 電信 logo = Bolivia（Peru 沒有 Tigo）",
    "Wiphala（彩虹棋盤）旗 = Bolivia",
    "護欄外側黃色 = Bolivia；外側黑色 = Peru",
    "白色方形路標桿 = Bolivia；黑白斑馬路標桿 = Peru",
    "La Paz：山谷城市 + 高樓 + 米黃色砂岩柱；El Alto：平坦高原 + 紅磚混亂",
    "Cochabamba：平坦大山谷，北面有雄偉山壁",
    "🔗 <a href=\"https://www.google.com/maps/@-16.5,-68.15,3a,75y,90t\" target=\"_blank\" style=\"color:var(--accent-blue)\">Street View 範例（La Paz）</a>"
  ]
},

'uruguay': {
  name: 'Uruguay', localName: 'Uruguay', flag: '🇺🇾', region: 'south-america',
  drivingSide: 'right', tld: '.uy', phoneCode: '+598', language: 'Spanish', currency: 'Peso (UYU)',
  camera: ["<strong>100% Gen 3</strong>", "⚠️ 街景<strong>大多數在陰天拍攝</strong> — 陰沉天空是 Uruguay 重要線索"],
  car: [
    "<strong>黑色轎車，無天線</strong>（同 Argentina）",
    "畫面略帶模糊感（比 Argentina 的黑車稍差）",
    "配合<strong>三條線：雙黃色中線 + 白色虛線交錯</strong>辨識 — Uruguay 獨有"
  ],
  roads: [
    "<strong>三線：雙黃色中心線 + 白色虛線交錯</strong> — 僅 Uruguay！全國公路幾乎都有",
    "<strong>白色粗木製標誌桿</strong>，背面有 4 個矩形缺口 — Uruguay 獨有",
    "白黑色交通號誌",
    "<strong>綠色塗漆里程碑</strong> — Uruguay 獨有",
    "護欄反光板支架有<strong>4 個邊</strong>（Argentina 為 3 個邊）",
    "誘導標：<strong>黃底黑箭頭</strong>（Argentina 為白底紅箭頭）"
  ],
  bollardInfo: [
    "白色 Bollard，<strong>一面塗黃色</strong>（朝車道側）— Uruguay 獨有",
    "頂部有矩形反光片",
    "也有<strong>石制路障</strong>（低矮石塊排列在路邊）"
  ],
  poleInfo: [
    "<strong>三叉杆（trident pole）</strong>：杆頂有 3 個向上的絕緣器呈三叉戟形 — Uruguay 最獨特的電線桿",
    "也有圓形桿配扁平金屬板、方形混凝土桿",
    "鄉村地區木桿常見"
  ],
  signInfo: [
    "PARE 停車標誌",
    "誘導標（chevron）：<strong>黃底黑箭頭</strong> — 與 Argentina（白底紅箭頭）明確區分"
  ],
  landscape: [
    "⚠️ <strong>幾乎永遠陰天</strong> — 陰沉灰暗天空是 Uruguay 最顯著的環境特徵",
    "<strong>緩起伏丘陵</strong>地形 — 道路通常至少有一個緩坡（完全平坦→可能是 Argentina）",
    "<strong>紅色土壤</strong>（從淺粉到深紅不等）— 與 Argentina 的灰/棕色土壤不同",
    "草地牧場（牛/羊）、防風林",
    "農業（大麥、大豆、玉米）",
    "平屋頂混凝土房屋，牆面顏色多已褪色"
  ],
  signs: ["西班牙語"],
  plates: [
    "正在轉型為 <strong>Mercosul 統一格式</strong>（白底 + 上方藍色帶）",
    "格式：3 字母 + 4 數字",
    "幾乎全白 — 比 Argentina 車牌更白、更乾淨",
    "Mercosul 格式也見於 Brazil 和 Argentina — 靠其他線索區分"
  ],
  unique: [
    "<strong>三線道路（雙黃線 + 白色虛線）</strong> — 最強辨識特徵",
    "<strong>陰天天空</strong> — 幾乎所有街景都是陰天",
    "<strong>三叉杆（trident pole）</strong> — 杆頂 3 個向上絕緣器",
    "<strong>綠色里程碑</strong>",
    "<strong>紅色土壤</strong>",
    "黑色 Google 街景車（與 Argentina 相同）",
    "ANCAP 加油站（Argentina 是 YPF）",
    "白色粗木製標誌桿（背面 4 個缺口）",
    "Bollard 一面塗黃色"
  ],
  tips: [
    "三線道路模式 = Uruguay（100%）",
    "陰天 + 緩起伏丘陵 + 紅土 = Uruguay（vs Argentina 晴天 + 平坦 + 灰土）",
    "黑色車 + ANCAP 加油站 = Uruguay（Argentina 是 YPF）",
    "三叉杆（杆頂 3 個向上絕緣器）= Uruguay",
    "道路旁的綠色里程碑 = Uruguay",
    "🔗 <a href=\"https://www.google.com/maps/@-34.9011,-56.1645,3a,75y,90t\" target=\"_blank\" style=\"color:var(--accent-blue)\">Street View 範例（Montevideo）</a>"
  ]
},

// ╔══════════════════════════════════════════╗
// ║           AFRICA                         ║
// ╚══════════════════════════════════════════╝

'south-africa': {
  name: 'South Africa', localName: 'South Africa', flag: '🇿🇦', region: 'africa',
  drivingSide: 'left', tld: '.za', phoneCode: '+27', language: 'English, Afrikaans, Zulu + 8 others', currency: 'Rand (ZAR)',
  camera: ["<strong>86% Gen 4 + 8% Gen 2 + 6% Gen 3</strong>", "覆蓋範圍廣泛", "<strong>Gen 2 在非洲大陸僅 South Africa 有</strong>（天空和腳下有巨大圓形光暈）", "⚠️ 有 Gen 4 小相機 (smallcam/low cam) 覆蓋（~22,000 點位）— 視角更低、模糊區域更大"],
  car: [
    "Gen 4：<strong>天藍色轎車 + 短黑色天線</strong>（在車後方）",
    "Gen 2/3：標準白色轎車",
    "Kruger National Park：<strong>迷彩花紋車</strong>（全球唯一！）",
    "靠左行駛"
  ],
  roads: [
    "<strong>左側行駛</strong>",
    "<strong>黃色外線 + 白色中線</strong>（Botswana、Lesotho、Eswatini 也有）",
    "⚠️ 看到黃色外線 + 非洲 = 很可能是南部非洲",
    "<strong>三條中心線</strong>：兩條白色實線 + 一條虛線（或兩白一黃），如 Philippines、Uruguay",
    "道路編號：N 開頭為國道、R 開頭為省道（Botswana 和 Lesotho 用 A/B 開頭）"
  ],
  bollardInfo: [
    "<strong>白色圓柱形 bollard</strong>，正面有紅色反光條 — 與 Kenya、Botswana 類似",
    "也有<strong>紅白 V 字形（chevron）標記</strong>在電線桿和路側障礙物上",
    "<strong>黃色 bollard</strong> — 部分地區（尤其 Western Cape）可見黃色漆的路樁"
  ],
  poleInfo: [
    "<strong>電線桿</strong>：最常見為<strong>「飛鳥桿」</strong>（1-5 個平行於地面的長桿 + 絕緣裝置），各省有獨特杆頂（Western Cape 為 A 形、KwaZulu-Natal 為三叉戟、北部四省為「}」形）",
    "紅白 V 形 (chevrons) 電桿標記"
  ],
  signInfo: [
    "誘導標：<strong>白底紅箭頭</strong>（細小版路旁也很常見）"
  ],
  landscape: [
    "多元地貌：Cape Town 海岸、Drakensberg 山脈、Highveld 高原、Karoo 半沙漠",
    "可見 township 棚戶區",
    "野生動物保護區/safari 區域",
    "Western Cape 葡萄園"
  ],
  signs: [
    "路牌以英語為主",
    "也可見 Afrikaans 南非荷蘭語（類似荷蘭語）",
    "11 種官方語言",
    "綠色高速公路標誌"
  ],
  plates: [
    "白色/黃色車牌附省份代碼",
    "CA（Cape Town）、GP（Gauteng）等"
  ],
  unique: [
    "<strong>三條中線 + 黃色邊線</strong>",
    "<strong>紅白 V 字形電線桿標記</strong>",
    "11 種官方語言（英語 + Afrikaans 最常見）",
    "從高速公路可見 township 棚戶區",
    "南部非洲靠左行駛"
  ],
  tips: [
    "黃色邊線 + 非洲英語 = South Africa（或鄰國）",
    "三條中線 + 靠左行駛 + 英語 = South Africa",
    "基礎設施比鄰國更發達",
    "🔗 <a href=\"https://www.google.com/maps/@-33.9249,18.4241,3a,75y,90t\" target=\"_blank\" style=\"color:var(--accent-blue)\">Street View 範例（Cape Town）</a>"
  ]
},

'kenya': {
  name: 'Kenya', localName: 'Kenya', flag: '🇰🇪', region: 'africa',
  drivingSide: 'left', tld: '.ke', phoneCode: '+254', language: 'Swahili, English', currency: 'Shilling (KES)',
  camera: [
    "<strong>86% Gen 4 + 14% Gen 3</strong>",
    "Gen 3：帶涉水喉和車頂行李架的街景車（大部分已被 Gen 4 覆蓋）",
    "Gen 4：灰色大型皮卡拍攝，可能帶涉水喉",
    "幾乎所有街景車都有涉水喉（snorkel）— 全球除 Mongolia 外唯一"
  ],
  car: [
    "<strong>右前方可見 SNORKEL 進氣管</strong> — 100% 確認為 Kenya（僅 Kenya 和 Mongolia 有 snorkel）",
    "Gen 3：灰色/黑色車帶大/小涉水喉 + 車頂行李架",
    "Gen 4：灰色大型皮卡，可能帶涉水喉",
    "Nairobi 北部/南部部分區域：車頂有<strong>白色膠帶</strong>",
    "有灰色 Toyota SUV follow car（都市區較少見）",
    "Lewa Wildlife Conservancy：特殊 safari 車，蛋殼色 車頂架 (roof rack)"
  ],
  roads: [
    "靠左行駛",
    "<strong>純白色外線 + 黃色虛線或純黃色中線</strong>",
    "路樁：大部分為<strong>紅白配色</strong>",
    "指路標誌為<strong>綠色底 + 白色邊框和文字</strong>，道路編號為白色或黃色",
    "路況不一 — Nairobi 附近高速公路品質佳",
    "減速丘常見"
  ],
  landscape: [
    "大草原 — 非洲經典景觀",
    "東非大裂谷",
    "可見 Mount Kenya",
    "野生動物（safari 區域）",
    "Maasai Mara 地區"
  ],
  signs: [
    "英語與 Swahili 語",
    "路牌以英語為主"
  ],
  plates: [
    "白色前車牌 + 黃色後車牌",
    "格式：3 字母 + 3 數字 + 1 字母（如 KAA 123A）",
    "以 K 開頭（Kenya 的 K）",
    "政府車牌有 GK 前綴"
  ],
  unique: [
    "<strong>Google car 上的 SNORKEL 進氣管</strong> — 100% 確認為 Kenya",
    "Kenya 是唯一有 Google car snorkel 的非洲國家",
    "大草原景觀",
    "可見 Matatu（改裝彩色小巴）— Uganda 也有但設計不同",
    "到處可見 <strong>Safaricom</strong> 電信品牌（Kenya 獨有）和 M-Pesa 行動支付標誌",
    "桉樹常見（修長塊狀葉子、光滑樹皮）"
  ],
  tips: [
    "車輛右側有 snorkel = Kenya（或 Mongolia — 但地貌完全不同）",
    "大草原 + 英語/Swahili + snorkel = Kenya",
    "M-Pesa 標誌 = Kenya",
    "🔗 <a href=\"https://www.google.com/maps/@-1.2921,36.8219,3a,75y,90t\" target=\"_blank\" style=\"color:var(--accent-blue)\">Street View 範例（Nairobi）</a>"
  ]
},

'nigeria': {
  name: 'Nigeria', localName: 'Nigeria', flag: '🇳🇬', region: 'africa',
  drivingSide: 'right', tld: '.ng', phoneCode: '+234', language: 'English', currency: 'Naira (NGN)',
  camera: [
    "<strong>Shitcam 42.3% + Gen 3 30.9% + Gen 4 26.8%</strong>",
    "Gen 3：車頂有行李架，駕駛艙和拖斗可見，車色和特徵多樣",
    "Shitcam（低品質相機）主要在東部城市 — 非洲目前主要擁有此類低品質街景的國家",
    "阿布賈以北無三代覆蓋，西北/最南部無四代，東南部無 shitcam"
  ],
  car: [
    "Gen 3：<strong>大型 pickup truck</strong>（車頭和貨斗皆可見）",
    "車色：白色或紅色",
    "Roof rack 附獨特橫桿 — <strong>黃/黑色 rack 樣式</strong>（Nigeria 獨有）",
    "<strong>幾乎都有警車跟隨護送</strong>",
    "Follow car 類型：棕色 Toyota SUV（Lagos）、黑色 SUV（Benin City）、紅色 follow car、銀色車、警車",
    "警燈紅色在左 = 南部；紅色在右 = 北部/Abuja 地區"
  ],
  roads: [
    "靠右行駛（前英國殖民地中少見）",
    "道路線不常見 — 很多道路沒有標線或已褪色，坑洼和未鋪設路段常見",
    "路況差異極大"
  ],
  poleInfo: [
    "<strong>電線桿</strong>：<strong>混凝土桿</strong>帶凹痕和水平支撐（類似巴西梯子桿但<strong>無孔</strong>）"
  ],
  landscape: [
    "南部為熱帶雨林",
    "北部為大草原",
    "密集都市區（Lagos）",
    "Niger Delta 石油基礎設施"
  ],
  signs: [
    "英語（官方語言）",
    "可見當地語言"
  ],
  plates: [
    "白色車牌配<strong>藍色文字</strong>",
    "左上角有國旗或國徽",
    "格式：州代碼 + 數字 + 字母",
    "透過模糊可見綠色色調"
  ],
  unique: [
    "<strong>Google car 後方幾乎都能看到警車護送</strong>",
    "獨特的 roof rack 橫桿",
    "雖為前英國殖民地但靠右行駛",
    "梯式電線桿段",
    "Lagos 混亂擁擠的交通"
  ],
  tips: [
    "警車跟隨 Google car = Nigeria",
    "熱帶非洲英語 + 靠右行駛 = Nigeria",
    "Lagos 交通混亂 = 很可能是 Nigeria",
    "🔗 <a href=\"https://www.google.com/maps/@6.5244,3.3792,3a,75y,90t\" target=\"_blank\" style=\"color:var(--accent-blue)\">Street View 範例（Lagos）</a>"
  ]
},

'ghana': {
  name: 'Ghana', localName: 'Ghana', flag: '🇬🇭', region: 'africa',
  drivingSide: 'right', tld: '.gh', phoneCode: '+233', language: 'English', currency: 'Cedi (GHS)',
  camera: ["<strong>100% Gen 3</strong>", "城市和主要道路有覆蓋"],
  car: [
    "車頂有<strong>可見行李架</strong>，<strong>前橫桿右端包覆黑色膠帶</strong> — 全球唯一！100% 確認為 Ghana",
    "引擎蓋通常可見，有獨特塗裝（紅色長方形等可辨識元素）",
    "膠帶有三種狀態：西南部 = 未剝離膠帶，東部/北部 = 剝落膠帶，Kumasi 以北/Tamale 以東 = 兩個白色斑點",
    "極少數自然保護區有無膠帶版本（如 Boabeng Fiema 猴子保護區）",
    "側鏡有時可見（某些保護區可見白色車身和側鏡）",
    "Ghana 膠帶在<strong>前</strong>桿 vs Réunion 膠帶在<strong>後</strong>桿"
  ],
  roads: [
    "靠右行駛",
    "<strong>道路標線全部為白色</strong>（許多鋪設道路甚至無標線）",
    "路樁通常為<strong>紅白相間</strong>，形狀不定",
    "城市中常見<strong>黑白相間路杆</strong>",
    "路況不一 — 北部多未鋪設道路"
  ],
  poleInfo: [
    "<strong>電線桿</strong>：通常為<strong>木製桿</strong>，配<strong>金屬橫桿 + 3 個絕緣子</strong>"
  ],
  landscape: [
    "南部為熱帶雨林",
    "北部為大草原",
    "可可種植園",
    "Lake Volta（世界最大人工湖之一）",
    "非常愛國 — 國旗顏色（紅黃綠 + 黑星）常塗在各種物體上",
    "出租車採用多彩車身面板，輪罩和四分之一車身面板總是<strong>橙黃色</strong>"
  ],
  signs: ["英語（官方語言）"],
  plates: [
    "白色和黃色車牌（<strong>短版車牌</strong> — 比一般非洲車牌更短，容易辨認）",
    "黃色車牌為商用車輛",
    "格式：地區代碼 + 數字 + 字母"
  ],
  unique: [
    "<strong>Roof rack 前橫桿包覆黑色膠帶</strong> — 僅 Ghana 有",
    "Réunion 僅在後橫桿包膠帶（不同）",
    "西非英語區",
    "可見彩色奇幻棺材（Accra 地區）"
  ],
  tips: [
    "前橫桿黑色膠帶 = Ghana（Réunion = 後橫桿膠帶）",
    "英語 + 西非熱帶 = Ghana 或 Nigeria",
    "沒有警車護送 = Ghana（Nigeria 有護送）",
    "🔗 <a href=\"https://www.google.com/maps/@5.6037,-0.187,3a,75y,90t\" target=\"_blank\" style=\"color:var(--accent-blue)\">Street View 範例（Accra）</a>"
  ]
},

'botswana': {
  name: 'Botswana', localName: 'Botswana', flag: '🇧🇼', region: 'africa',
  drivingSide: 'left', tld: '.bw', phoneCode: '+267', language: 'English, Tswana', currency: 'Pula (BWP)',
  camera: ["<strong>100% Gen 3</strong>", "主要路線有覆蓋"],
  car: [
    "Gen 3：標準白色轎車",
    "靠左行駛",
    "無特殊車輛辨識特徵",
    "街景中常見隨機小模糊（城市尤為明顯）"
  ],
  roads: [
    "左側行駛",
    "<strong>黃色外線 + 白色中線</strong>（與南部非洲其他國家一致）",
    "有時可見<strong>三條中心線</strong>（如 South Africa）",
    "獨特的<strong>黑黃相間警示牌杆</strong> — 南部非洲僅 Botswana 使用",
    "幹線道路以 A 開頭（South Africa 從不以 A 開頭）"
  ],
  poleInfo: [
    "<strong>木製電線杆</strong>帶<strong>紅白 V 形反光標記 (chevrons)</strong> — Botswana 特色",
    "鄉村地區木杆常見"
  ],
  landscape: [
    "Kalahari 沙漠 — 乾燥草原",
    "Okavango Delta 三角洲",
    "人口非常稀少",
    "野生動物（大象、斑馬）"
  ],
  signs: ["英語為主", "也使用 Tswana 語"],
  plates: [
    "白色前車牌 + <strong>黃色後車牌</strong>（類似英國/南非系統）",
    "格式：<strong>B</strong> + 數字 + 字母（B 開頭 = Botswana）",
    "與 South Africa 類似系統但 B 前綴可快速確認"
  ],
  unique: [
    "黃色邊線 + 靠左行駛",
    "Kalahari 沙漠景觀",
    "比 South Africa 更荒涼/沙漠化",
    "南部非洲英語區"
  ],
  tips: [
    "黃色邊線 + 沙漠 + 靠左行駛 + 英語 = Botswana",
    "比 South Africa 較不發達，更多沙漠",
    "🔗 <a href=\"https://www.google.com/maps/@-24.6282,25.9231,3a,75y,90t\" target=\"_blank\" style=\"color:var(--accent-blue)\">Street View 範例（Gaborone）</a>"
  ]
},

'namibia': {
  name: 'Namibia', localName: 'Namibia', flag: '🇳🇦', region: 'africa',
  drivingSide: 'left', tld: '.na', phoneCode: '+264', language: 'English', currency: 'Dollar (NAD)',
  camera: [
    "<strong>100% Gen 3</strong>",
    "主要高速公路有覆蓋，少數覆蓋在小路上"
  ],
  car: [
    "Gen 3：<strong>白色 pickup truck（皮卡車）</strong>，車頂前方有<strong>短天線略微向左傾斜</strong>",
    "天線向左傾斜是 Namibia 獨有特徵（Oman 類似但天線向右傾斜）",
    "部分路段街景車有模糊處理，部分沒有 — 可用於區域判斷",
    "靠左行駛"
  ],
  roads: [
    "<strong>白色中線 + 單黃色外線</strong>（與其他南部非洲國家一致）",
    "左側行駛",
    "大量碎石路 (gravel roads)，長直沙漠公路",
    "綠色指路牌配<strong>黃色</strong>道路編號（A/B/C/D/M 開頭，與 South Africa 的 N/R 不同）",
    "德語地名常見（殖民遺產）"
  ],
  landscape: [
    "Namib 沙漠 — 沙丘（Sossusvlei）",
    "Skeleton Coast",
    "極度稀少人口",
    "部分城鎮有德國殖民建築"
  ],
  signs: ["英語", "部分地區可見德語（殖民遺產）", "也使用 Afrikaans 南非荷蘭語"],
  plates: [
    "<strong>黃色螢光車牌 + 黑色文字</strong> — 前後都是黃色（非常獨特！）",
    "首字母固定為 <strong>N</strong>（= Namibia），後接數字 + 字母",
    "非洲少見的全黃色車牌 — 辨識度極高",
    "與 South Africa（白前/黃後）不同 — Namibia 前後都是黃色"
  ],
  unique: [
    "沙漠景觀 — 沙丘",
    "可見德國殖民遺產",
    "英語 + Afrikaans + 德語混合",
    "人口非常稀少",
    "筆直的碎石長路"
  ],
  tips: [
    "沙漠 + 英語 + 部分德語文字 = Namibia",
    "比 Botswana 更多沙漠",
    "德語烘焙坊/商店名稱 = 很可能是 Namibia",
    "🔗 <a href=\"https://www.google.com/maps/@-22.5609,17.0658,3a,75y,90t\" target=\"_blank\" style=\"color:var(--accent-blue)\">Street View 範例（Windhoek）</a>"
  ]
},

'senegal': {
  name: 'Senegal', localName: 'Sénégal', flag: '🇸🇳', region: 'africa',
  drivingSide: 'right', tld: '.sn', phoneCode: '+221', language: 'French', currency: 'CFA Franc (XOF)',
  camera: ["<strong>97% Gen 4 + 3% Gen 3</strong>", "主要城市和道路有覆蓋"],
  car: [
    "Gen 4：<strong>銀色/白色 pickup truck（皮卡車）</strong>（truck cab 可見），各路段有不同髒汙/物品特徵可用於區域判斷",
    "Gen 3：有 roof rack + <strong>右側後視鏡可見</strong>（Senegal 獨有）+ 天空有<strong>裂縫 (rift)</strong>",
    "⚠️ Senegal 是非洲最常見天空裂縫 (rift) 的國家",
    "Dakar 地區：引擎蓋/車頭更明顯可見",
    "有時可見紅色棍子標記（沿 N2/R32 路段）"
  ],
  roads: [
    "白色中心線",
    "右側行駛",
    "法式影響的道路基礎設施"
  ],
  bollardInfo: [
    "法式 bollard（紅色/灰色反光帶環繞主體）"
  ],
  landscape: [
    "平坦、半乾旱的 Sahel 地帶",
    "南部為熱帶（Casamance）",
    "猴麵包樹",
    "色彩繽紛的彩繪建築"
  ],
  signs: [
    "法語（前法國殖民地）",
    "城鎮入口標誌為白色底 + 粗粉紅色輪廓",
    "白色公里標帶<strong>紅色帽子</strong>，可見公路號碼和最近城鎮距離",
    "橙黃色出租車帶黑色擋泥板常見",
    "頂部有太陽能電池板的黑色路燈常見"
  ],
  plates: [
    "<strong>藍色車牌配白色文字</strong> — 非洲唯一藍色車牌！",
    "Gen 4 中也出現新版白色車牌（左側藍色條帶，類似歐盟款式）",
    "地區代碼：DK（Dakar）、KD（Kolda）等",
    "設計 20+ 年未變 — 非常可靠的辨識線索"
  ],
  unique: [
    "<strong>藍色車牌</strong> — 非洲唯一，極強辨識特徵",
    "非洲出現法式 bollard 護柱",
    "西非法語區",
    "猴麵包樹",
    "色彩繽紛的彩繪巴士和建築"
  ],
  tips: [
    "法語 + 非洲 + 法式 bollard = Senegal",
    "平坦地形的西非法語區",
    "🔗 <a href=\"https://www.google.com/maps/@14.7167,-17.4677,3a,75y,90t\" target=\"_blank\" style=\"color:var(--accent-blue)\">Street View 範例（Dakar）</a>"
  ]
},

'morocco': {
  name: 'Morocco', localName: 'المغرب', flag: '🇲🇦', region: 'africa',
  drivingSide: 'right', tld: '.ma', phoneCode: '+212', language: 'Arabic, French, Berber', currency: 'Dirham (MAD)',
  camera: ["<strong>100% Gen 3</strong>（主要道路覆蓋良好）", "主要道路覆蓋良好"],
  car: [
    "Gen 3：標準白色轎車",
    "法國風格的道路基礎設施",
    "無特殊車輛辨識特徵"
  ],
  roads: [
    "白色中心線",
    "右側行駛",
    "高速公路品質良好",
    "法語+阿拉伯語混合路標"
  ],
  landscape: [
    "Atlas 山脈",
    "南部 Sahara 沙漠",
    "地中海/大西洋海岸",
    "Medina 老城區（Marrakech、Fez）",
    "紅色/赤陶色建築（Marrakech）"
  ],
  signs: [
    "阿拉伯文+柏柏爾文範例：<span class=\"script-sample\" style=\"font-size:1.2rem\">ⵜⵉⴼⵉⵏⴰⵖ</span> Tifinagh 柏柏爾文 — 幾何符號",
    "阿拉伯語 + 法語雙語標誌",
    "有時也可見 Berber 柏柏爾語（Tifinagh 字母）",
    "Tifinagh 看起來像幾何符號"
  ],
  plates: [
    "白色反光車牌 + 黑色文字",
    "右側有<strong>地區編號</strong>可定位區域（1=Rabat, 6=Casablanca, 2=Fez 等）",
    "格式：數字 + 阿拉伯文字母 + 數字 | 地區碼",
    "與 Tunisia 車牌區分：Morocco 有地區碼分區"
  ],
  unique: [
    "北非的阿拉伯語 + 法語組合",
    "Atlas 山脈地形",
    "有時可見 Tifinagh（Berber 柏柏爾語）字母",
    "Medina 古城區",
    "紅色/赤陶色建築（Marrakech）"
  ],
  tips: [
    "阿拉伯語 + 法語 + 山脈/沙漠 = Morocco",
    "Tifinagh 字母（幾何形狀）= Morocco 或 Algeria",
    "紅色/赤陶色建築 = Marrakech, Morocco",
    "🔗 <a href=\"https://www.google.com/maps/@33.9716,-6.8498,3a,75y,90t\" target=\"_blank\" style=\"color:var(--accent-blue)\">Street View 範例（Rabat）</a>"
  ]
},

'tunisia': {
  name: 'Tunisia', localName: 'تونس', flag: '🇹🇳', region: 'africa',
  drivingSide: 'right', tld: '.tn', phoneCode: '+216', language: 'Arabic, French', currency: 'Dinar (TND)',
  camera: ["<strong>100% Gen 3</strong>"],
  car: [
    "Gen 3：<strong>黑色車帶中等長度細天線</strong>",
    "<strong>幾乎都有 follow car</strong>：北部（Hammamet 以北）= 淺綠色 Toyota；中南部 = 深綠色 Mazda（軍用車牌左側紅色條帶）",
    "Kairouan 有獨特白色三菱 follow car",
    "<strong>Djerba 島大多無 follow car</strong>（偶見白色賓士或深綠色車）"
  ],
  roads: [
    "通常<strong>純白色公路線</strong>（外側可虛可實），Sfax 幾條道路有黃色中線",
    "右側行駛",
    "法式影響的道路系統",
    "<strong>紅白條紋路緣石</strong>常見",
    "白色混凝土路石可見於各地（圓頂為紅/黃/綠色，兩側有距離數字，可用於精確定位）"
  ],
  bollardInfo: [
    "<strong>白色混凝土路石</strong>，頂部為紅色、黃色或綠色圓頂 — Tunisia 常見的路側標記",
    "兩側刻有距離數字，可用於精確定位省份和道路"
  ],
  poleInfo: [
    "<strong>金屬鐵絲型電桿</strong>（非常獨特）"
  ],
  landscape: [
    "北部為地中海海岸",
    "南部為 Sahara 沙漠",
    "羅馬遺跡（Carthage、El Jem）",
    "白牆藍門/藍窗建築"
  ],
  signs: ["阿拉伯語 + 法語雙語"],
  plates: [
    "黑底白字車牌 — 同時使用<strong>阿拉伯數字 + 拉丁數字</strong>",
    "格式：數字 + 「تونس」(Tunisia) + 數字",
    "與 Morocco 區分：Tunisia 為黑底，Morocco 為白底",
    "部分新車牌已改為白底 — 但黑底仍常見"
  ],
  unique: [
    "金屬線式電線桿",
    "較小的北非國家，阿拉伯語 + 法語",
    "可見羅馬遺跡",
    "白藍色建築（Sidi Bou Said 風格）"
  ],
  tips: [
    "金屬線電線桿 + 阿拉伯語/法語 = Tunisia",
    "比 Morocco 更小、更地中海風格",
    "🔗 <a href=\"https://www.google.com/maps/@36.8065,10.1815,3a,75y,90t\" target=\"_blank\" style=\"color:var(--accent-blue)\">Street View 範例（Tunis）</a>"
  ]
},

'egypt': {
  name: 'Egypt', localName: 'مصر', flag: '🇪🇬', region: 'africa',
  drivingSide: 'right', tld: '.eg', phoneCode: '+20', language: 'Arabic', currency: 'Pound (EGP)',
  camera: [
    "<strong>100% Gen 3 徒步旅者 (trekker)</strong> — 所有覆蓋皆為步行拍攝",
    "覆蓋極稀少，僅限 Cairo（4處）和 Alexandria（3處），以歷史名勝為中心"
  ],
  car: [
    "無街景車 — 全部為徒步旅者拍攝（相機離地面較低、打碼較小、無汽車輪廓陰影）"
  ],
  roads: [
    "白色中心線（標線不一致）",
    "右側行駛",
    "密集城市交通",
    "路面品質不一"
  ],
  landscape: [
    "Nile 河谷 — 沙漠中的綠色帶",
    "Sahara 沙漠",
    "Cairo 附近可見金字塔",
    "密集城市（Cairo）",
    "紅海海岸"
  ],
  signs: ["阿拉伯語為主", "有時附加英語"],
  plates: [
    "使用<strong>阿拉伯數字（東阿拉伯數字 ٠١٢٣）</strong> — 非拉丁數字",
    "私家車藍底、計程車橘底、商用紅底",
    "格式：阿拉伯文字母 + 阿拉伯數字",
    "與北非其他國家區分：Egypt 車牌只有阿拉伯文（無法語/拉丁文）"
  ],
  unique: [
    "阿拉伯語 + 尼羅河場景",
    "沙漠 + 尼羅河沿線密集人口",
    "金字塔區域辨識度高",
    "Cairo 密集混亂的交通"
  ],
  tips: [
    "阿拉伯語 + 沙漠 + 尼羅河 + 金字塔 = Egypt",
    "尼羅河狹窄綠色帶狀地帶沿線有非常密集的都市區",
    "🔗 <a href=\"https://www.google.com/maps/@30.0444,31.2357,3a,75y,90t\" target=\"_blank\" style=\"color:var(--accent-blue)\">Street View 範例（Cairo）</a>"
  ]
},

'ethiopia': {
  name: 'Ethiopia', localName: 'ኢትዮጵያ', flag: '🇪🇹', region: 'africa',
  drivingSide: 'right', tld: '.et', phoneCode: '+251', language: 'Amharic', currency: 'Birr (ETB)',
  camera: ["<strong>100% Trekker/Shitcam</strong>（覆蓋極有限）", "緩慢擴展中"],
  car: [
    "無標準 Google 街景車 — 全為 trekker",
    "無特殊車輛辨識特徵"
  ],
  roads: [
    "右側行駛",
    "路面品質多處不佳",
    "白色中心線"
  ],
  landscape: [
    "Ethiopian Highlands — 高原台地",
    "Great Rift Valley",
    "半乾旱低地",
    "岩石雕鑿教堂（Lalibela）"
  ],
  signs: [
    "Ge'ez 文字範例：<span class=\"script-sample\" style=\"font-size:1.2rem\">መንገድ አዲስ አበባ</span> — 獨特幾何形狀",
    "<strong>Ge'ez（Ethiopic）字母</strong> — 獨特的音節書寫系統",
    "字符看起來像抽象幾何圖形",
    "標誌上也使用英語"
  ],
  plates: [
    "左側數字表示車輛類型：<strong>1=計程車（紅底）、2=私家車（白底藍字）、3=商用（白底綠字）</strong>",
    "⚠️ 顏色編碼系統使 Ethiopia 車牌很有辨識度",
    "紅色車牌（計程車）最容易在街景中辨認"
  ],
  unique: [
    "<strong>Ge'ez 字母</strong> — 僅 Ethiopia/Eritrea 使用",
    "Ethiopia 高原景觀",
    "獨特曆法（Ethiopia 曆比西曆慢 7-8 年）",
    "咖啡文化（咖啡發源地）"
  ],
  tips: [
    "Ge'ez 字母（獨特幾何字符）= Ethiopia 或 Eritrea",
    "高原地形 + Ge'ez 字母 = Ethiopia",
    "🔗 <a href=\"https://www.google.com/maps/@9.032,38.7469,3a,75y,90t\" target=\"_blank\" style=\"color:var(--accent-blue)\">Street View 範例（Addis Ababa）</a>"
  ]
},

'madagascar': {
  name: 'Madagascar', localName: 'Madagasikara', flag: '🇲🇬', region: 'africa',
  drivingSide: 'right', tld: '.mg', phoneCode: '+261', language: 'Malagasy, French', currency: 'Ariary (MGA)',
  camera: [
    "<strong>100% Gen 3</strong>（幾乎全為徒步旅者覆蓋 + 少量船覆蓋）",
    "覆蓋極有限，大部分在西海岸，陸地和船混合覆蓋",
    "僅兩處有獨特街景車（銀色車頂行李架）"
  ],
  car: [
    "幾乎全為徒步旅者覆蓋 — 可透過跟隨的人物服裝辨識不同區域",
    "RN8 路段有帶大型銀色車頂行李架的街景車"
  ],
  roads: [
    "標線極少",
    "右側行駛",
    "路面品質差",
    "大量未鋪設路面"
  ],
  landscape: [
    "紅色土壤（非常獨特）",
    "猴麵包樹 (Baobab trees)",
    "東部雨林",
    "獨特生物多樣性"
  ],
  signs: ["馬達加斯加語（南島語系！）+ 法語"],
  plates: [
    "紅底白字車牌（私家車）",
    "格式：數字 + 字母 + 數字",
    "印度洋島國 + 紅色車牌 + 法語環境 = Madagascar"
  ],
  unique: [
    "馬達加斯加語 — 南島語系（與印尼/馬來語有關，不是非洲語言！）",
    "紅色土壤",
    "猴麵包樹",
    "島嶼環境",
    "法語為第二語言"
  ],
  tips: [
    "法語 + 南島語系外觀的語言 + 紅土 = Madagascar",
    "馬達加斯加語詞彙看起來更像亞洲語言而非非洲語言",
    "🔗 <a href=\"https://www.google.com/maps/@-18.8792,47.5079,3a,75y,90t\" target=\"_blank\" style=\"color:var(--accent-blue)\">Street View 範例（Antananarivo）</a>"
  ]
},

'reunion': {
  name: 'Réunion', localName: 'La Réunion', flag: '🇷🇪', region: 'africa',
  drivingSide: 'right', tld: '.re', phoneCode: '+262', language: 'French', currency: 'Euro (EUR)',
  camera: ["<strong>100% Gen 3</strong>"],
  car: [
    "<strong>後橫桿包覆黑色膠帶</strong>（Ghana = 前橫桿）",
    "側鏡可見",
    "Ghana 膠帶在<strong>前</strong>桿，Réunion 膠帶在<strong>後</strong>桿 — 重要區別",
    "法屬海外領土，法式道路基礎設施"
  ],
  roads: ["法式道路基礎設施", "品質良好 — 法國領土"],
  landscape: [
    "印度洋中的火山熱帶島嶼",
    "Piton de la Fournaise（活火山）",
    "鬱鬱蔥蔥的熱帶植被",
    "山地地形"
  ],
  signs: ["法語"],
  plates: [
    "使用<strong>法國標準車牌</strong>（EU 藍色帶 + F 國碼）",
    "右側有<strong>974 省份代碼</strong> — 974 = Réunion",
    "在熱帶島嶼看到法國車牌 + 974 代碼 = 確認 Réunion"
  ],
  unique: [
    "<strong>僅後橫桿有黑色膠帶</strong>（Ghana = 前橫桿）",
    "印度洋中的法國領土 — 使用歐元",
    "火山熱帶島嶼",
    "熱帶環境中的法式道路基礎設施"
  ],
  tips: [
    "後橫桿有黑色膠帶 = Réunion（Ghana = 前橫桿）",
    "法語 + 熱帶火山島 = Réunion",
    "🔗 <a href=\"https://www.google.com/maps/@-20.8823,55.4504,3a,75y,90t\" target=\"_blank\" style=\"color:var(--accent-blue)\">Street View 範例（Saint-Denis）</a>"
  ]
},

'uganda': {
  name: 'Uganda', localName: 'Uganda', flag: '🇺🇬', region: 'africa',
  drivingSide: 'left', tld: '.ug', phoneCode: '+256', language: 'English, Swahili', currency: 'Shilling (UGX)',
  camera: [
    "<strong>~90% Shitcam + ~10% Gen 3</strong>（含兩輛獨特街景車）",
    "⚠️ <strong>大量非官方/第三方覆蓋 (shit cam)</strong> — 畫質極低、模糊、過曝/欠曝",
    "非官方覆蓋佔 Uganda 大部分影像 — 非 360° 全景、顏色失真",
    "國家公園覆蓋品質較好但範圍有限"
  ],
  car: [
    "Kampala 市：白色方形 SUV（非轎車），<strong>方形側後視鏡</strong>可見 — Uganda 獨有車型",
    "國家公園：類似白色 SUV 但車頭有<strong>黑色防撞桿 (bull bar)</strong>（打碼程度差別很大）",
    "非官方覆蓋：各種車輛（機車、自行車等）",
    "Kampala 市有大量藍色塊狀圖案出租車，典型深紅色鋪裝道路/泥土"
  ],
  roads: ["靠左行駛", "道路品質不一"],
  landscape: [
    "Green and lush — 'Pearl of Africa'",
    "Lake Victoria shoreline",
    "Mountains of the Moon (Rwenzori)",
    "熱帶森林",
    "Source of the Nile (Jinja)"
  ],
  signs: ["英語為主", "Some Swahili"],
  plates: [
    "白色前車牌 + <strong>黃色後車牌</strong>（英國系統遺產）",
    "格式：<strong>U</strong> + 字母 + 數字（U 前綴 = Uganda）",
    "與 Kenya（K 前綴）和 Tanzania（T 前綴）類似系統，靠首字母區分"
  ],
  unique: [
    "翠綠茂密 tropical landscape in East Africa",
    "⚠️ <strong>大量低畫質非官方覆蓋</strong> — 模糊、曝光差、色彩失真",
    "English + Swahili",
    "靠左行駛（前英國殖民地）",
    "Boda-bodas (motorcycle taxis) common"
  ],
  tips: [
    "⚠️ 看到極差畫質 (blurry, washed out) + 非洲風景 = 很可能是 Uganda 非官方覆蓋",
    "Green lush landscape + English + 靠左行駛 = Uganda or Kenya",
    "More green/lush than Kenya's 大草原 (savanna)",
    "官方覆蓋畫質正常，白色 SUV + bull bar = Uganda 官方",
    "🔗 <a href=\"https://www.google.com/maps/@0.3476,32.5825,3a,75y,90t\" target=\"_blank\" style=\"color:var(--accent-blue)\">Street View 範例（Kampala）</a>"
  ]
},

'tanzania': {
  name: 'Tanzania', localName: 'Tanzania', flag: '🇹🇿', region: 'africa',
  drivingSide: 'left', tld: '.tz', phoneCode: '+255', language: 'Swahili, English', currency: 'Shilling (TZS)',
  camera: [
    "<strong>100% Trekker</strong>（覆蓋極為有限）",
    "Gombe 國家公園：Gen 3 徒步旅者覆蓋",
    "Kilimanjaro：三腳架覆蓋",
    "Kenya 邊境附近有少量越境街景車覆蓋"
  ],
  car: [
    "主要為徒步旅者和三腳架覆蓋 — 無典型街景車",
    "靠左行駛"
  ],
  roads: [
    "左側行駛",
    "路面品質不一",
    "主要公路尚可"
  ],
  landscape: [
    "Kilimanjaro 可見於北部",
    "Serengeti 大草原",
    "Zanzibar — 熱帶島嶼",
    "Ngorongoro 火山口地區"
  ],
  signs: ["斯瓦希里語（主導）+ 英語"],
  plates: [
    "車牌上有 <strong>Tanzania 國旗</strong>圖案 — 辨識度極高",
    "<strong>T</strong> 前綴 + 數字 + 字母",
    "白色前車牌 + 黃色後車牌（英國系統遺產）",
    "與 Kenya（K 前綴）和 Uganda（U 前綴）類似系統"
  ],
  unique: [
    "標誌上斯瓦希里語為主（比 Kenya 多）",
    "可見吉力馬扎羅山",
    "塞倫蓋蒂景觀",
    "比 Kenya 更以斯瓦希里語為主"
  ],
  tips: [
    "斯瓦希里語為主的標誌 + 大草原 (savanna) + 靠左行駛 = Tanzania",
    "Kenya 有更多英語；Tanzania 有更多斯瓦希里語",
    "🔗 <a href=\"https://www.google.com/maps/@-6.7924,39.2083,3a,75y,90t\" target=\"_blank\" style=\"color:var(--accent-blue)\">Street View 範例（Dar es Salaam）</a>"
  ]
},

'rwanda': {
  name: 'Rwanda', localName: 'Rwanda', flag: '🇷🇼', region: 'africa',
  drivingSide: 'right', tld: '.rw', phoneCode: '+250', language: 'Kinyarwanda, French, English', currency: 'Franc (RWF)',
  camera: ["<strong>100% Gen 4</strong>", "覆蓋有限，正在零星發布"],
  car: [
    "Gen 4：<strong>pickup truck</strong>，有時完全打碼（巨大模糊）",
    "車色多樣：白色、黑色、灰/棕色",
    "車頂有<strong>紅色煞車燈</strong>可見",
    "相機支架幾乎都可見"
  ],
  roads: [
    "右側行駛",
    "<strong>黃色中心線 + 白色邊線</strong>（類似美洲慣例）",
    "道路品質出奇地好（對非洲而言）"
  ],
  landscape: [
    "「千丘之國」— 地勢非常多丘陵",
    "翠綠茂密的植被",
    "梯田山坡",
    "對非洲而言非常乾淨有序"
  ],
  signs: ["基尼亞盧安達語 + 法語 + 英語（三語）"],
  plates: [
    "白色前車牌 + <strong>黃色後車牌</strong>",
    "<strong>R</strong> 前綴 + 字母 + 數字（R = Rwanda）",
    "與東非鄰國類似系統但靠右行駛（非左駕）— 重要區別"
  ],
  unique: [
    "黃色中線 + 白色邊線（類似美洲慣例）",
    "地勢非常多丘陵、有梯田",
    "乾淨有序的基礎設施（在非洲不常見）",
    "三語標誌"
  ],
  tips: [
    "非常綠、多丘陵、乾淨 + 黃色道路標線 + 三語 = Rwanda",
    "對非洲國家而言維護良好得出乎意料",
    "🔗 <a href=\"https://www.google.com/maps/@-1.9536,30.0606,3a,75y,90t\" target=\"_blank\" style=\"color:var(--accent-blue)\">Street View 範例（Kigali）</a>"
  ]
},

// ╔══════════════════════════════════════════╗
// ║           OCEANIA                        ║
// ╚══════════════════════════════════════════╝

'australia': {
  name: 'Australia', localName: 'Australia', flag: '🇦🇺', region: 'oceania',
  drivingSide: 'left', tld: '.au', phoneCode: '+61', language: 'English', currency: 'Dollar (AUD)',
  camera: [
    "<strong>78% Gen 4 + 14% Gen 1 + 5% Gen 2 + 3% Gen 3</strong>",
    "各州拍攝年份不同 — 可用於區域判斷",
    "南半球覆蓋最廣的國家"
  ],
  car: [
    "Gen 1/3：有天線",
    "Gen 4：<strong>無特殊辨識特徵</strong>（無天線）",
    "Gen 2：標準白色轎車",
    "靠左行駛",
    "Gen 4 車輛缺乏顯著特徵，難以單靠 car meta 辨識"
  ],
  roads: [
    "<strong>左側行駛</strong>",
    "<strong>幾乎只用白色公路標線</strong>（某些高山地區例外如 Mount Kosciuszko 附近可見全黃線）",
    "⚠️ 看到黃色邊線可能是 South Africa；黃色中線可能是 New Zealand",
    "邊線常有<strong>振動帶</strong>（看起來像垂直小條紋），Northern Territory 大部分路沒有振動帶",
    "WA 的路樁<strong>下方塗棕色</strong>，QLD 有<strong>黑黃相間路樁</strong>，WA 有<strong>黑白條紋路樁</strong>",
    "袋鼠/野生動物警告標誌",
    "路面品質良好"
  ],
  bollardInfo: [
    "Bollard：<strong>白色主體</strong>，正面<strong>紅色反光板</strong>，背面<strong>灰色反光板</strong>（NZ 的反光板環繞一圈，AU 只有正面）"
  ],
  poleInfo: [
    "<strong>電線桿</strong>：各州不同 — SA 有鋼筋混凝土桿配<strong>三叉戟杆頂</strong>；VIC 有混凝土桿配三線圈杆頂；QLD 有兩側微微向上的線圈杆頂；TAS 有 L 形薄金屬橫桿",
    "NT 有<strong>生鏽金屬桿</strong>（中間有孔洞）"
  ],
  signInfo: [
    "誘導標：黑白相間和<strong>黃底黑箭頭</strong>",
    "讓路標（GIVE WAY）白色邊框 + 黑色文字（NZ 用紅色文字）"
  ],
  landscape: [
    "遼闘的內陸荒野 — 沙漠/半乾旱",
    "熱帶北部（Queensland）",
    "溫帶東南部（Melbourne、Sydney）",
    "<strong>Tasmania</strong>：溫帶島嶼，比大陸更綠、更涼爽，有古老雨林、L 形薄金屬橫桿電線桿、TAS 車牌",
    "到處都是桉樹",
    "獨特的野生動物",
    "各州景觀差異大：NT 紅土沙漠、VIC 綠色農田、QLD 熱帶棕櫚、SA 乾燥平原、WA 採礦區、TAS 森林島嶼"
  ],
  signs: [
    "英語",
    "速限以 km/h 計",
    "高速公路使用綠色標誌"
  ],
  plates: [
    "各州不同 — 許多不同設計",
    "NSW：黃色、VIC：白/藍色、QLD：栗色"
  ],
  unique: [
    "<strong>白色 bollard 配左側細紅色反光片</strong>",
    "袋鼠/野生動物警告標誌",
    "桉樹林",
    "遼闊的沙漠荒野",
    "靠左行駛 + 英語 + km/h",
    "獨特的野生動物穿越標誌（袋鼠、袋熊等）"
  ],
  tips: [
    "英語 + 靠左行駛 + km/h + 巨大空曠景觀 = Australia",
    "左側細紅色反光片 bollard = Australia",
    "袋鼠標誌 = Australia",
    "比 New Zealand 大得多且更乾燥",
    "🔗 <a href=\"https://www.google.com/maps/@-33.8688,151.2093,3a,75y,90t\" target=\"_blank\" style=\"color:var(--accent-blue)\">Street View 範例（Sydney）</a>"
  ]
},

'new-zealand': {
  name: 'New Zealand', localName: 'Aotearoa', flag: '🇳🇿', region: 'oceania',
  drivingSide: 'left', tld: '.nz', phoneCode: '+64', language: 'English, Māori', currency: 'Dollar (NZD)',
  camera: ["<strong>80% Gen 4 + 11% Gen 3 + 7% Gen 2 + 2% Gen 1</strong>"],
  car: [
    "Gen 4：<strong>藍色轎車</strong>",
    "Gen 1-3：白色轎車",
    "<strong>三脊天線（stubby + three ridges）</strong> — 與 USA, Hawaii, Cambodia 共用",
    "靠左行駛"
  ],
  roads: [
    "靠左行駛",
    "外線一般為白色，人口稠密處也用<strong>黃色虛線外線</strong>；中線為白色虛線或雙黃實線",
    "讓行標誌白色邊緣 + <strong>紅色文字</strong>（AU 為黑色文字）",
    "路面常畫有<strong>讓行三角形</strong>（AU 無此設計）",
    "許多蜿蜒的山路",
    "綠色方向標，國道上有<strong>紅色徽章</strong>（寫有路號）"
  ],
  bollardInfo: [
    "Bollard：頂部有<strong>紅色帶環繞整個背部和部分前部</strong>（AU 只有正面小紅色反光片），前/後有薄黃色或白色反光體（NZ 獨有）"
  ],
  poleInfo: [
    "<strong>電線桿</strong>：最常見為<strong>混凝土桿帶長凹槽</strong>（延伸很高），大多有銀色<strong>防負鼠裝置</strong>；也有混凝土多孔桿和圓形木桿"
  ],
  signInfo: [
    "誘導標：<strong>黃底黑箭頭</strong>帶一圈薄黑邊（AU 無黑邊）"
  ],
  landscape: [
    "北島：綠色起伏丘陵、火山、地熱區",
    "南島：南阿爾卑斯山、峽灣、冰川",
    "非常綠色且茂密",
    "到處都是羊",
    "比 Australia 多山得多"
  ],
  signs: [
    "英語 + <strong>毛利語</strong> — 雙語標誌",
    "毛利語地名（Whangarei、Tauranga、Whakatane）",
    "毛利語使用長音符號：ā、ē、ī、ō、ū"
  ],
  plates: [
    "白色車牌帶<strong>黑色字</strong>（前後相同）",
    "格式：3 字母 + 3 數字（如 ABC 123）— 2006 年後",
    "舊版：2 字母 + 4 數字（如 AB 1234）",
    "藍色車牌為外交車輛",
    "⚠️ Australia 各州有不同設計；NZ 全國統一"
  ],
  unique: [
    "更寬紅色帶 bollard（相對 Australia 的細窄紅色帶）",
    "毛利語雙語標誌",
    "壯觀的多山景觀（相對 Australia 的平坦荒野）",
    "非常綠色且茂密（相對 Australia 的乾燥）",
    "比 Australia 小得多",
    "Gen 4 車上的三脊天線"
  ],
  tips: [
    "英語 + 毛利語雙語標誌 = New Zealand",
    "綠色山脈 + 靠左行駛 + 英語 = New Zealand（不是 Australia）",
    "Australia 乾燥/平坦，New Zealand 綠色/多山",
    "🔗 <a href=\"https://www.google.com/maps/@-36.8485,174.7633,3a,75y,90t\" target=\"_blank\" style=\"color:var(--accent-blue)\">Street View 範例（Auckland）</a>"
  ]
},

'belarus': {
    name: 'Belarus',
    localName: 'Беларусь',
    flag: '🇧🇾',
    region: 'europe',
    drivingSide: 'right',
    tld: '.by',
    phoneCode: '+375',
    language: 'Belarusian / Russian',
    currency: 'Belarusian Ruble (BYN)',
    camera: [
      "<strong>~50% Gen 3 + ~30% Gen 4 + ~20% Gen 2</strong>",
      "Trekker 覆蓋一看就知道：相機高度較低，常搖晃",
      "覆蓋非常有限 — 主要在 Minsk 等城市和主要道路",
      "與鄰國相比畫質低且不連貫",
      "存在 Yandex Maps 覆蓋但不在 GeoGuessr 中",
      "覆蓋可能在意外地點出現（來自個人貢獻者）"
    ],
    car: [
      '非標準 Google 車 — trekker 或車載設備',
      '相機高度明顯低於標準 Street View',
      '無天線、snorkel 或標準 Google 車特徵'
    ],
    roads: [
      "道路從 Minsk 附近維護良好的公路到差的鄉村道路都有",
      "主要公路上有白色道路標線",
      "城市中有蘇聯時期寬闊多車道大道的道路設計",
      "M 道路和 P 道路編號系統（M 為主要、P 為地區性）",
      "大城市以外路面品質大幅下降",
      "許多穿越農業地區的直且平坦道路"
    ],
    landscape: [
      "平坦地形 — 歐洲最平坦的國家之一",
      "茂密森林（約 40% 國土被森林覆蓋）",
      "蘇聯時期公寓大樓主導城市地區",
      "農田與白樺和松林交錯",
      "乾淨、有序的蘇聯規劃城市佈局",
      "二戰紀念場所散佈全國",
      "很少有獨特的自然地標"
    ],
    signs: [
      "雙語標誌：白俄羅斯語（西里爾字母）和有時俄語",
      "白俄羅斯西里爾字母有獨特字母：Ў（短 U）、І（烏克蘭式 I）",
      "路標遵循標準歐洲/蘇聯格式",
      "城市入口標誌有西里爾字母名稱",
      "主要道路沿線有公里距離標記",
      "主要公路上有綠色方向指示牌"
    ],
    plates: [
      "無 EU 藍色條紋 — Belarus 不是 EU 成員",
      "白色車牌黑色字配小型國旗徽章",
      "左側的地區號碼表示州（oblast）",
      "通過旗幟/徽章位置與 Russia 車牌區分",
      "車牌為較寬格式，類似俄式風格"
    ],
    unique: [
      "Trekker/志願者覆蓋是最大的辨識線索 — 立即可辨識",
      "較低的相機高度和搖晃影像與鄰國區分",
      "白俄羅斯字母 Ў 是全球 Belarus 獨有",
      "蘇聯式城市規劃極為普遍",
      "整體覆蓋有限使其在世界遊戲中相對罕見"
    ],
    tips: [
      "如果覆蓋看起來像 trekker（搖晃、低、不一致）+ 西里爾文字 = 想到 Belarus",
      "字母 Ў 只在白俄羅斯語中存在 — 立即確認",
      "不要與 Russia 混淆：Belarus 覆蓋少得多且車牌風格不同",
      "平坦地形 + 森林 + 蘇聯建築 + trekker 覆蓋 = Belarus",
      "因覆蓋有限在競技遊戲中非常罕見",
      "🔗 <a href=\"https://www.google.com/maps/@53.9045,27.5615,3a,75y,90t\" target=\"_blank\" style=\"color:var(--accent-blue)\">Street View 範例（Minsk）</a>"
    ]
  },

  // =====================================================================
  // BELGIUM
  // =====================================================================,

'pakistan': {
    name: 'Pakistan',
    localName: 'پاکستان',
    flag: '🇵🇰',
    region: 'asia',
    drivingSide: 'left',
    tld: '.pk',
    phoneCode: '+92',
    language: 'Urdu, English',
    currency: 'Pakistani Rupee (PKR)',
    camera: [
      "<strong>99.5% Gen 3 trekker + 0.5% Gen 4</strong>",
      'Gen 3 Trekker 覆蓋歷史古蹟和寺廟',
      '大部分覆蓋在 Lahore 和宗教/歷史景點',
      '僅約二十幾個地點有街景覆蓋',
      '向下看時可見背負相機的人的輪廓',
      '覆蓋極為有限 — Pakistan 在 GeoGuessr 中非常罕見'
    ],
    car: [
      '非標準車輛 — 全為 Trekker 涵蓋（人背負相機）',
      '向下看可見人的輪廓',
      '無 follow car meta'
    ],
    roads: [
    '覆蓋主要在歷史古蹟，而非道路',
    '有道路覆蓋時，路面為混凝土或柏油',
    '主要道路上有綠色高速公路標誌配白色文字',
    '高速公路標誌類似英國風格',
    '城市和鄉村地區的道路基礎設施差異極大',
    '城市地區減速帶常見'
  ],
  poleInfo: [
    '部分地區可見金屬或水泥電線桿'
  ],
    landscape: [
      '地形多樣 — 從喀喇崑崙山到旁遮普平原到俾路支沙漠',
      'Lahore：平坦地形有莫臥兒時期建築',
      '北部地區：壯觀的山景（K2、Nanga Parbat）',
      'Sindh/Punjab：平坦農業平原',
      'Balochistan：乾旱沙漠地形',
      '大多數覆蓋地區可見清真寺和宣禮塔',
      'Lahore 和 Islamabad 有密集城市地區'
    ],
    signs: [
      "烏爾都文範例：<span class=\"script-sample\" style=\"font-size:1.2rem\">سڑک اسلام آباد</span> — 類似阿拉伯文但有額外字母",
      '烏爾都文字（اردو）— 從右到左書寫，類似阿拉伯文但有額外字符',
      '烏爾都文字在字母上下方有點（波斯體書法風格）',
      '標誌為雙語：烏爾都語 + 英語',
      '英語廣泛用於商業標誌',
      '看起來像阿拉伯文但有獨特的烏爾都語特有字符',
      '公路標誌為綠底白字附英文翻譯'
    ],
    plates: [
      '白色車牌黑色字和黑色邊框',
      '綠色車牌為政府/軍用車輛',
      '車牌上有省份縮寫（PB = Punjab、SD = Sindh 等）',
      '機車車牌常見',
      '格式因省份而異',
      '車牌常為雙語（烏爾都語 + 英文數字）'
    ],
    unique: [
      '歷史莫臥兒/錫克教寺廟和古蹟的 Trekker 覆蓋是特徵',
      'Lahore 的巴德夏希清真寺和沙利瑪爾花園覆蓋',
      '色彩繽紛的 jingle truck（裝飾重型卡車）',
      '烏爾都文字（從右到左）+ 靠左行駛是罕見組合',
      '僅約二十幾個地點 — 在 GeoGuessr 中非常罕見',
      '商業標誌上英語和烏爾都語混合'
    ],
    tips: [
      'Pakistan 覆蓋極為罕見 — 幾乎總是在 Lahore 的歷史古蹟',
      'Trekker 覆蓋（人背負相機）+ 烏爾都文字 = Pakistan',
      '烏爾都文看起來像阿拉伯文但 Pakistan 靠左行駛 — 中東國家靠右行駛',
      'Pakistan vs India：烏爾都語（從右到左）vs 印地語（從左到右天城體）',
      '如果看到莫臥兒建築 + trekker 覆蓋 = 可能是 Pakistan',
      '不要與 India 混淆 — Pakistan 覆蓋非常有限，India 有廣泛測繪',
      "🔗 <a href=\"https://www.google.com/maps/@31.5204,74.3587,3a,75y,90t\" target=\"_blank\" style=\"color:var(--accent-blue)\">Street View 範例（Lahore）</a>"
    ]
  },

'brunei': {
    name: 'Brunei',
    localName: 'Brunei Darussalam',
    flag: '🇧🇳',
    region: 'asia',
    drivingSide: 'left',
    tld: '.bn',
    phoneCode: '+673',
    language: 'Malay, English',
    currency: 'Brunei Dollar (BND)',
    camera: [
      "<strong>95% Gen 3 + 5% Gen 4（Gen 4 為黑色 pickup）</strong>",
      '覆蓋主要集中在斯里巴加灣市及周邊地區',
      '並非所有道路都有覆蓋 — 鄉村/森林地區有缺口',
      '有覆蓋的地方畫質良好',
      '部分清真寺和地標有 Trekker 覆蓋',
      '覆蓋範圍遠少於鄰國 Malaysia'
    ],
    car: [
      'Gen 3：標準白色轎車',
      '靠左行駛（與 Malaysia 相同）',
      '無特殊 car meta'
    ],
    roads: [
      '道路維護良好，標線清楚',
      '大多數道路有白色道路標線',
      '道路基礎設施類似 Malaysia',
      '圓環常見',
      '速限以 km/h 標示',
      '道路普遍乾淨整潔',
      '有公路編號系統，但道路數量少於 Malaysia'
    ],
    signInfo: [
      "停車標誌：<strong>BERHENTI</strong>（馬來語）— 與 Malaysia 相同",
      "⚠️ 看到 BERHENTI + 富裕乾淨外觀 + 顯眼伊斯蘭建築 = Brunei（而非 Malaysia）"
    ],
    landscape: [
      '熱帶雨林覆蓋大部分國土',
      'Omar Ali Saifuddien 清真寺 — BSB 標誌性金色圓頂清真寺',
      '部分地區可見油井和煉油廠',
      '水上村落（Kampong Ayer）建在 Brunei 河上的高腳屋',
      '現代建築與傳統馬來建築混合',
      '相比大部分東南亞國家，外觀非常乾淨富裕',
      '城市以外有茂密的熱帶植被'
    ],
    signs: [
      '馬來語使用拉丁字母 — 與 Malaysia 和 Indonesia 非常相似',
      '政府標誌和清真寺上可見阿拉伯（爪夷文）字母',
      '標誌為雙語：馬來語 + 英語',
      '路標設計類似 Malaysia',
      '伊斯蘭宗教標誌和告示常見',
      '速限以 km/h 標示'
    ],
    plates: [
      '黃色車牌配黑色字',
      '格式與 Malaysia 車牌不同',
      '車牌通常乾淨可讀',
      '皇室/政府車牌有特殊格式',
      '小國 = 車牌種類少於 Malaysia'
    ],
    unique: [
      '標誌上有爪夷文（阿拉伯文）與馬來語並列 — Malaysia 也用爪夷文但不那麼顯眼',
      'BSB 覆蓋中可見 Omar Ali Saifuddien 清真寺',
      '水上村落（Kampong Ayer）很有辨識度',
      '相比鄰國外觀非常富裕、乾淨',
      '國家非常小 — 覆蓋區域有限',
      '伊斯蘭建築比 Malaysia 更突出',
      '部分地區可見石油基礎設施'
    ],
    tips: [
      'Brunei vs Malaysia：留意更顯眼的伊斯蘭/阿拉伯（爪夷文）標誌和更富裕的外觀',
      'Brunei 非常小且在 GeoGuessr 中很罕見 — 大部分覆蓋在首都 BSB 附近',
      '靠左行駛 + 馬來語 + 顯眼清真寺 + 富裕外觀 = 可能是 Brunei',
      '黃色車牌區別於 Malaysia 的黑色車牌',
      '如果看起來像富裕、乾淨版本的 Malaysia 且有顯眼伊斯蘭建築 = Brunei',
      '因覆蓋有限，在隨機 GeoGuessr 中非常罕見',
      "🔗 <a href=\"https://www.google.com/maps/@4.9031,114.9398,3a,75y,90t\" target=\"_blank\" style=\"color:var(--accent-blue)\">Street View 範例（BSB）</a>"
    ]
  },

'laos': {
    name: 'Laos',
    localName: 'ລາວ',
    flag: '🇱🇦',
    region: 'asia',
    drivingSide: 'right',
    tld: '.la',
    phoneCode: '+856',
    language: 'Lao',
    currency: 'Kip (LAK)',
    camera: [
      "<strong>100% Gen 3</strong>（圓鏡，車側有藍線）",
      '覆蓋主要限於大城市和國道',
      'Vientiane 覆蓋最佳',
      '鄉村地區覆蓋非常有限或完全沒有',
      '部分旅遊景點有 Trekker 覆蓋（Luang Prabang）',
      '畫質尚可但覆蓋缺口明顯'
    ],
    car: [
      '可見 roof rack — 除了首都 Vientiane 以外的所有地方',
      'Gen 3：<strong>銀色轎車</strong>，車頂行李架帶兩根金屬杆 + 黑色側鏡',
      'Roof rack 是辨識 Laos 的重要線索',
      '涵蓋僅限 5 個城市：萬象、萬榮、琅勃拉邦、沙灣拿吉、巴色'
    ],
    roads: [
    '主要路線上有白色道路標線',
    '藍底標誌標示聚落和目的地',
    '城市中有藍色街名牌',
    '道路從不錯的鋪面公路到崎嶇土路都有',
    '道路基礎設施不如 Thailand 或 Vietnam 發達',
    '中國建造的公路越來越多（一帶一路項目）'
  ],
  bollardInfo: [
    '黑白條紋 bollard'
  ],
  poleInfo: [
    '<strong>松果形桿頂（pinecone poles）</strong>— 2 個在一側、1 個在另一側（不對稱排列）— Laos 獨有',
    '也有小孔水泥桿（類似 Thai 桿）'
  ],
  signInfo: [
    "停車標誌：<strong>ຢຸດ</strong>（yud，寮文）— 寮文停車標誌是 Laos 的強力辨識特徵",
    "⚠️ Thailand 的 หยุด 也發音 yud，但字形完全不同（泰文有圓圈，寮文更圓滑）"
  ],
    landscape: [
      '北部地勢非常多山 — 崎嶇的喀斯特石灰岩地形',
      '西部為湄公河谷（與 Thailand 的邊界）',
      '茂密的熱帶森林覆蓋山坡',
      '低地山谷有稻田',
      '不如 Thailand 發達 — 建築物較少、森林較多',
      '佛教寺廟（wat）有獨特的多層屋頂',
      '比鄰國更安靜、不那麼混亂',
      '城鎮中的早市場景'
    ],
    signs: [
      "寮文範例：<span class=\"script-sample\" style=\"font-size:1.2rem\">ຖະໜົນ ວຽງຈັນ</span> — 比泰文更圓滑，無直線邊",
      '寮文字母（ລາວ）— 結合泰文（圓圈）和高棉文（棱角）的特徵',
      '寮文字母看起來像簡化版泰文 — 裝飾性彎曲較少',
      '停車標誌有寮文 + 英文 "STOP"',
      '標誌常為雙語：寮文 + 英文或寮文 + 法文（殖民時期遺留）',
      '藍色聚落標誌附帶距離資訊',
      '公路沿線有公里標記',
      '較新的開發標誌上出現中文'
    ],
    plates: [
      '黃色車牌為標準 — 在東南亞很有辨識度',
      '藍色車牌為政府車輛',
      '白色車牌為外交車輛',
      '車牌上有省份代碼',
      '車牌通常較小且有時難以辨識',
      '機車車牌常見（機車數量多於汽車）'
    ],
    unique: [
      '黃色車牌是 Laos 在東南亞的強力辨識特徵',
      '寮文字母（看起來像簡化泰文）+ 靠右行駛 = Laos',
      'Vientiane 以外的 Google 車上可見 roof rack',
      '黑白條紋 bollard（不同於 Cambodia 的紅白條紋）',
      '停車標誌上寮文下方有英文 "STOP"',
      '比 Thailand 或 Vietnam 更安靜、更鄉村的感覺',
      '中國建造的公路和基礎設施越來越明顯',
      '西部邊界沿線可見湄公河景觀'
    ],
    tips: [
      '黃色車牌 + 靠右行駛 = Laos（Thailand 白色車牌 + 靠左行駛）',
      '寮文看起來像簡化泰文 — 如果看到類似泰文的字母 + 靠右行駛 = Laos',
      'Laos vs Thailand：Laos 靠右行駛，Thailand 靠左行駛',
      'Laos vs Cambodia：寮文（類似泰文的圓圈）vs 高棉文（棱角鉤形）',
      '黑白 bollard（Laos）vs 紅白 bollard（Cambodia）',
      'Laos 感覺比 Thailand 更不發達、更鄉村',
      'Google 車上的 roof rack（Vientiane 以外）是快速 meta 辨識線索',
      "🔗 <a href=\"https://www.google.com/maps/@17.9757,102.6331,3a,75y,90t\" target=\"_blank\" style=\"color:var(--accent-blue)\">Street View 範例（Vientiane）</a>"
    ]
  },

'myanmar': {
    name: 'Myanmar',
    localName: 'မြန်မာ',
    flag: '🇲🇲',
    region: 'asia',
    drivingSide: 'right',
    tld: '.mm',
    phoneCode: '+95',
    language: 'Burmese',
    currency: 'Kyat (MMK)',
    camera: [
      "<strong>72.7% Gen 4 + 27.3% Gen 3</strong>",
      '無官方 Google 街景車覆蓋',
      '蒲甘寺廟和大金寺有部分 Trekker 覆蓋',
      '覆蓋極為稀疏且不穩定',
      '影像品質差異很大',
      '在 GeoGuessr 中覆蓋最少的亞洲國家之一'
    ],
    car: [
      '無標準 Google 車 — Trekker 和第三方涵蓋為主',
      '靠右行駛但很多車輛為右駕（日本進口）',
      '無可靠 car meta'
    ],
    roads: [
    "標線極少",
    '道路從不錯的公路到極其崎嶇的鄉村小路都有',
    '道路標線和基礎設施有限',
    '路標為緬文加部分英文',
    '基礎設施普遍不如鄰國發達',
    '主要路線為混凝土和柏油路面；其他地方為土路',
    '減速帶塗成斑馬條紋'
  ],
  poleInfo: [
    '電線桿通常為木頭或竹子'
  ],
  signInfo: [
    "停車標誌：<strong>ရပ်</strong>（raut，緬文）— 圓形緬文字母寫成的停車標誌",
    "緬文停車標誌 = 確認 Myanmar（覆蓋稀少但若出現是強力辨識）"
  ],
    landscape: [
      '佛教寺廟和佛塔到處都是 — Myanmar 是深度佛教國家',
      '蒲甘：遼闊平原上數千座古寺廟',
      '大金寺：仰光的巨大金色佛塔',
      '許多地區有茂密的熱帶森林',
      '伊洛瓦底江河谷 — 平坦的農業用地',
      '北部和東部為山地（撣邦）',
      '茵萊湖：獨特的浮動花園和用腳划船的漁民',
      '鄉村地區有傳統的木造高腳屋'
    ],
    signs: [
      "緬甸文範例：<span class=\"script-sample\" style=\"font-size:1.2rem\">လမ်း ရန်ကုန်</span> — 大量完美圓形",
      '緬文字母（မြန်မာ）— 圓形字符',
      '緬文看起來像一連串的圓圈和半圓串在一起',
      '與泰文、高棉文或寮文非常不同',
      '標誌上有緬文 + 英文',
      '寺廟和修道院名稱使用緬文',
      '鄉村地區路標稀少',
      '撣邦（靠近 China 邊境）有部分中文標示'
    ],
    plates: [
      '白色或黃色車牌搭配緬文數字',
      '紅色車牌為政府車輛',
      '車牌上有緬文數字字符',
      '車牌因磨損常難以辨識',
      '機車車牌常見',
      '車牌有地區編號系統'
    ],
    unique: [
      '緬文字母（圓圈和半圓）是最強辨識特徵',
      '靠右行駛但許多車輛為右駕（獨特的怪癖）',
      '古代寺廟景觀（蒲甘）若 trekker 覆蓋出現在那裡',
      '城市覆蓋中可見金色佛塔',
      '覆蓋非常有限 = 在 GeoGuessr 中非常罕見',
      '人們臉上可見特納卡粉（黃白色化妝品）',
      '男性穿著籠基（類似沙龍的服裝）'
    ],
    tips: [
      'Myanmar 覆蓋極為罕見 — 通常在著名寺廟景點',
      '緬文字母（圓形字符）是最快的辨識方式',
      '靠右行駛 + 圓形文字 + 金色佛塔 = Myanmar',
      'Myanmar vs Thailand：緬文更圓；泰文有更多彎曲和迴圈',
      '覆蓋非常有限意味著如果不確定，大概不是 Myanmar',
      '右駕車行駛在靠右的道路上是 Myanmar 的獨特怪癖',
      "🔗 <a href=\"https://www.google.com/maps/@16.8661,96.1951,3a,75y,90t\" target=\"_blank\" style=\"color:var(--accent-blue)\">Street View 範例（Yangon）</a>"
    ]
  },

'timor-leste': {
    name: 'Timor-Leste',
    localName: 'Timor-Leste',
    flag: '🇹🇱',
    region: 'asia',
    drivingSide: 'left',
    tld: '.tl',
    phoneCode: '+670',
    language: 'Tetum, Portuguese',
    currency: 'US Dollar (USD)',
    camera: [
      "<strong>55.9% Gen 3 + 44.1% Gen 4</strong>",
      'Dili 附近主要道路有部分 Google 覆蓋',
      '整體覆蓋極為稀疏',
      '影像品質差異很大',
      '在 GeoGuessr 中最罕見的國家之一',
      '有新增覆蓋但仍非常有限'
    ],
    car: [
      '無特殊 Google 街景車 meta',
      '部分地點有 Trekker 步行覆蓋',
      '跟拍車輛通常是老舊破損的汽車',
      '部分覆蓋中可見聯合國車輛',
      '混合日本舊車和印尼車輛',
      '機車常見'
    ],
    roads: [
    '道路品質普遍差 — 許多未鋪面道路',
    '山路坡度陡峭',
    '道路標線和標誌有限',
    '基礎設施不發達',
    '部分城市地區有混凝土道路',
    'Dili 以外常見土路和碎石路'
  ],
  bollardInfo: [
    '幾乎沒有正式 bollard 或道路設施'
  ],
    landscape: [
      '山地地形搭配熱帶植被',
      '比 Indonesia 乾燥 — 類似印尼東部（東努沙登加拉）',
      'Dili 有葡萄牙殖民建築',
      '大多數城鎮可見天主教堂（前葡萄牙殖民地）',
      '高地有咖啡種植園',
      '海灘和海岸線',
      '鄉村地區有傳統房屋（uma lulik）',
      '不如鄰國 Indonesia 發達'
    ],
    signs: [
      '標誌上有葡萄牙語 — 在東南亞很獨特',
      '也可見德頓語（當地語言）',
      '標誌為雙語：葡萄牙語 + 德頓語或葡萄牙語 + 英語',
      '東南亞出現葡萄牙文 = Timor-Leste 或 Macau',
      '舊標誌上仍可見部分印尼文',
      '路標類似葡萄牙/歐洲風格'
    ],
    plates: [
      '白色車牌左側有藍色條紋',
      '格式包含國家代碼 "TL"',
      '部分車輛仍有 Indonesia 車牌',
      '部分地區可見聯合國車輛車牌',
      '政府車牌為不同顏色',
      '車牌常磨損或難以辨識'
    ],
    unique: [
      '東南亞出現葡萄牙語 = Timor-Leste（或 Macau）',
      '東南亞國家中有天主教堂',
      '靠左行駛（繼承自 Indonesia 時期）',
      '使用美元作為貨幣（店面標誌上可見）',
      '葡萄牙殖民建築與熱帶景觀混合',
      '部分覆蓋中可見聯合國存在',
      '在 GeoGuessr 中非常罕見 — 覆蓋有限'
    ],
    tips: [
      '東南亞出現葡萄牙文 = Timor-Leste（東南亞唯一其他選項是都市化的 Macau）',
      'Timor-Leste 在 GeoGuessr 中極為罕見 — 除非看到葡萄牙文 + 熱帶 + 山地，否則不要猜',
      '天主教堂 + 葡語標誌 + 靠左行駛 = Timor-Leste',
      '看起來比 Indonesia 乾燥且不發達',
      '使用美元 — 店面價格上可見',
      '如果看到葡萄牙文搭配熱帶山地（不像 Macau 那樣都市化）= Timor-Leste',
      "🔗 <a href=\"https://www.google.com/maps/@-8.5569,125.5603,3a,75y,90t\" target=\"_blank\" style=\"color:var(--accent-blue)\">Street View 範例（Dili）</a>"
    ]
  },

'china': {
    name: 'China',
    localName: '中国',
    flag: '🇨🇳',
    region: 'asia',
    drivingSide: 'right',
    tld: '.cn',
    phoneCode: '+86',
    language: 'Mandarin Chinese',
    currency: 'Renminbi/Yuan (CNY)',
    camera: [
      "<strong>非 Google — 100% 百度/騰訊街景</strong>",
      '在 GeoGuessr 中出現時，覆蓋來自第三方或非官方來源',
      '百度/騰訊覆蓋畫質不一 — 有時過暗或過亮',
      '部分覆蓋來自 Mapillary 和其他貢獻者',
      '相機畫質低於 Google 的 Gen 3/4',
      '覆蓋主要在城市；鄉村道路覆蓋較少',
      '如果 China 出現在 GeoGuessr 中，很罕見且來自非 Google 來源'
    ],
    car: [
      '非 Google 車 — 使用 Baidu/Tencent 測繪車',
      '車輛外觀差異很大',
      '無標準 car meta'
    ],
    roads: [
      "白色虛線中心線 + 白色實線邊線",
      '高速公路：綠底白字為快速道路；藍底為國道/市區道路',
      '棕底白字為旅遊/文化景點',
      '白底黑字為地方/重要場所（醫院等）',
      '國道編號以 "G"（國道）為前綴',
      '省道以 "S"（省道）為前綴',
      '快速道路維護良好；鄉村道路品質不一',
      '距離以公里計；速限標誌常見',
      '快速道路上有收費站'
    ],
    landscape: [
      '地形極為多樣 — 從喜馬拉雅高原到熱帶南方到戈壁沙漠',
      '東部 China：人口稠密、高樓林立、高度開發',
      '西部 China：廣闊沙漠（塔克拉瑪干、戈壁）、山脈（西藏）',
      '南部 China：熱帶、梯田、喀斯特山（桂林）',
      '北部 China：平坦平原、寒冷冬季、工業城市',
      '部分 trekker/旅遊覆蓋點可見長城',
      '獨特的中國建築：寶塔、寺廟屋頂、現代高樓'
    ],
    signs: [
      "簡體中文範例：<span class=\"script-sample\" style=\"font-size:1.2rem\">路 北京市</span> — 簡化字體",
      '簡體中文字（简体中文）— 筆畫比繁體中文少',
      '中文字比日文漢字筆畫/複雜度更高',
      '許多標誌上中文下方有拼音（羅馬字母拼寫）',
      '大城市標誌有中英雙語',
      '紅底金字橫幅（共產黨/政府標語）',
      '簡體中文 = 中國大陸；繁體 = Hong Kong、Taiwan、Macau',
      '拼音街名有助於地圖定位'
    ],
    plates: [
      '藍色車牌白字為一般車輛',
      '綠色車牌為新能源/電動車',
      '黃色車牌為大型車輛（卡車、巴士）',
      '黑色車牌為外資企業和大使館車輛',
      '第一個字為省份簡稱（京 = Beijing、粵 = Guangdong）',
      '第二個字為字母（省內登記城市）',
      '車牌上的省份字可精確定位地區'
    ],
    unique: [
      '簡體中文字是最快的辨識方式（相對於 HK/TW/MO 的繁體）',
      '紅底金字共產標語橫幅在公共場所常見',
      '綠色「新能源車」車牌越來越常見',
      '百度/騰訊測繪 = 畫質低於 Google；外觀獨特',
      '幾乎所有東西上都有 QR code（微信支付/支付寶文化）',
      '可見高鐵基礎設施',
      '獨特的中國公寓大樓（統一的高層建築）',
      '中國國產車品牌（BYD、NIO）越來越常見'
    ],
    tips: [
      'China 在 GeoGuessr 中非常罕見 — 無官方 Google 覆蓋',
      '簡體中文（筆畫少）= China；繁體中文 = HK/Taiwan/Macau',
      '看到中文 + 靠右行駛 + 紅色橫幅 = 中國大陸',
      '藍色車牌加省份字有助於辨識具體地區',
      'China vs Japan：中文只有漢字；日文混合漢字 + 平假名 + 片假名',
      '注意中文字下方的拼音（羅馬字母）— 中國大陸獨有',
      '綠色車牌（電動車）越來越常見且有辨識度',
      '相機畫質通常低於 Google — 次要線索',
      "🔗 <a href=\"https://www.google.com/maps/@39.9042,116.4074,3a,75y,90t\" target=\"_blank\" style=\"color:var(--accent-blue)\">Street View 範例（Beijing）</a>"
    ]
  },

'macau': {
    name: 'Macau',
    localName: '澳門',
    flag: '🇲🇴',
    region: 'asia',
    drivingSide: 'left',
    tld: '.mo',
    phoneCode: '+853',
    language: 'Cantonese, Portuguese',
    currency: 'Pataca (MOP)',
    camera: [
      "<strong>100% Gen 2</strong>（畫質較低）",
      '非標準車輛或 Trekker 涵蓋',
      '因 Macau 面積極小，覆蓋範圍有限',
      'Gen 2 畫質：顆粒感較重，色彩不如 Gen 3/4 鮮豔',
      'Gen 2 畫質本身有助於區分 Macau 和 Hong Kong',
      '部分賭場和地標有 Trekker 覆蓋'
    ],
    car: [
      '非標準車輛或 Trekker 涵蓋',
      '無特殊 Google car meta'
    ],
    roads: [
      '柏油和混凝土路面，全白線或白色中線搭配黃色路肩',
      '舊城區街道狹窄',
      '完全都市化 — 無鄉村道路',
      '停車計時器常見且形狀獨特',
      '文化遺產區有葡式鵝卵石路面',
      '賭場/酒店區道路維護良好',
      '路標部分遵循葡萄牙/歐洲慣例'
    ],
    landscape: [
      '完全都市化 — 建於半島和島嶼上的小型高密度城市',
      '賭場區（路氹金光大道）有大型度假村建築',
      '歷史中心有葡萄牙殖民建築（議事亭前地）',
      '大三巴牌坊 — 標誌性地標',
      '葡萄牙殖民風格與現代中式建築混合',
      '高層建築密集，類似 Hong Kong 但規模較小',
      '教堂與廟宇並存（葡萄牙天主教 + 中國佛教）',
      '部分覆蓋可見澳門旅遊塔'
    ],
    signs: [
      '繁體中文 + 葡萄牙文作為第二語言（非英文）',
      '標誌上的葡萄牙文是區分 Hong Kong 的關鍵',
      '街名牌：白色瓷磚狀銘牌，雙語標示',
      '葡式街名（Rua de...、Avenida de...、Travessa de...）',
      '中文 + 葡文 = MACAU；中文 + 英文 = HONG KONG',
      '路標有 Macau 特有的格式',
      '賭場和酒店指引標誌常見'
    ],
    plates: [
      '黑色車牌配白/黃色字 — 非常醒目',
      '巴士車牌：黑底黃字',
      '前後都是黑色車牌（不同於 HK 的白色前牌/黃色後牌）',
      '車牌格式：M + 字母 + 連字號 + 2 位數 + 連字號 + 2 位數',
      '"M" 前綴標識 Macau 車牌',
      '全黑車牌顏色是強力辨識特徵'
    ],
    unique: [
      '葡萄牙文為第二語言（非英文）= Macau，不是 Hong Kong',
      '黑色車牌 — 不同於 Hong Kong 的白/黃車牌',
      '僅有 Gen 2 覆蓋 — 畫質低於 Hong Kong 的 Gen 3/4',
      '葡萄牙殖民建築（議事亭前地、大三巴牌坊）',
      '葡式白色瓷磚街名牌',
      '形狀獨特的停車計時器',
      '完全都市化、面積極小 — 如果很快就走到盡頭，可能是 Macau',
      '車牌上的 "M" 前綴'
    ],
    tips: [
      '中文 + 葡文 = Macau；中文 + 英文 = Hong Kong',
      '黑色車牌 = Macau；白色前牌/黃色後牌 = Hong Kong',
      'Gen 2 畫質（顆粒感較重）= Macau；Gen 3/4（較清晰）= Hong Kong',
      '葡式街名（Rua de...、Avenida de...）是確定性線索',
      'Macau 比 Hong Kong 小很多 — 密集的賭場區很有辨識度',
      '靠左行駛（與 HK 相同），無法從行駛方向區分',
      '看到賭場 + 葡文 + 中文字 = Macau',
      "🔗 <a href=\"https://www.google.com/maps/@22.1987,113.5439,3a,75y,90t\" target=\"_blank\" style=\"color:var(--accent-blue)\">Street View 範例（Macau）</a>"
    ]
  },

'kazakhstan': {
    name: 'Kazakhstan',
    localName: 'Қазақстан',
    flag: '🇰🇿',
    region: 'asia',
    drivingSide: 'right',
    tld: '.kz',
    phoneCode: '+7',
    language: 'Kazakh, Russian',
    currency: 'Tenge (KZT)',
    camera: [
      "<strong>100% Gen 3（白色卡車）</strong>",
      '使用獨特的卡車拍攝，比其他卡車覆蓋國家模糊度較低',
      '覆蓋主要沿連接城市的主要公路',
      '城市（Almaty、Astana）覆蓋較好',
      '偏遠/鄉村地區有大面積覆蓋缺口',
      '畫質尚可 — 比其他地方的類似卡車覆蓋模糊度低'
    ],
    car: [
      '白色 pickup truck（bars 在後方支撐相機）',
      'Truck 常常被完全模糊化處理',
      '支撐桿之間距離較近',
      '平坦景觀 + 白色 truck = Kazakhstan'
    ],
    roads: [
      '道路標線差異極大 — 主要道路有黃色路肩，多數使用全白方案',
      '公里標記：底部塗黑（通常約佔柱子 25%）',
      '穿越平坦草原的長直公路',
      '道路品質不一，從優良收費公路到坑窪的鄉村路線',
      '俄式道路基礎設施和標誌',
      '新建收費快速道路（現代化基礎設施）',
      '藍色或綠色方向指示牌'
    ],
    landscape: [
      '非常平坦的草原為主 — 遼闊的開放平原',
      '中部和東南部有起伏丘陵和小山',
      '大部分地區為乾旱/半乾旱',
      'Astana：平坦草原上的現代未來主義城市景觀',
      'Almaty：以天山山脈為背景的林蔭城市',
      '大城市以外人口非常稀疏',
      '城市中有蘇聯時期公寓大樓',
      '西部 Kazakhstan（裏海地區）有石油基礎設施'
    ],
    signs: [
      '西里爾字母和拉丁字母並用 — 哈薩克語兩種都用',
      '俄語（西里爾字母）標誌非常常見',
      '哈薩克語有獨特字符：Ә、Ғ、Қ、Ң、Ө、Ұ、Ү、Һ、І',
      '標誌為雙語：哈薩克語 + 俄語（均為西里爾字母）',
      '部分較新標誌使用拉丁字母（Kazakhstan 正在轉換為拉丁字母）',
      '城市名稱有哈薩克語和俄語兩種'
    ],
    plates: [
      '白色車牌左側有淺藍色國旗',
      '地區代碼：01 = Astana、02 = Almaty 市等',
      '格式：地區代碼 + 3 字母 + 2 數字',
      '左側藍色國旗條紋很有辨識度',
      '乾淨、現代的車牌設計',
      '車牌使用西里爾字母'
    ],
    unique: [
      '白色卡車 + 緊密排列的 bars + 相對清晰（模糊度低）的影像 = Kazakhstan',
      '公里標記底部塗黑（約 25%）是一致且獨特的特徵',
      '平坦草原 + 西里爾字母 = Kazakhstan 或 Russia（Kazakhstan 更平坦且更乾旱）',
      '車牌上淺藍色國旗條紋',
      '哈薩克西里爾字母的獨特字符（Қ、Ң、Ө、Ү）可與俄語區分',
      '城市覆蓋中可見 Astana 的未來主義建築（Bayterek 塔）',
      '電話區碼 +7（與 Russia 共用）',
      '穿越無盡草原的超長直路'
    ],
    tips: [
      'Kazakhstan vs Russia：Kazakhstan 更平坦、更乾旱，車牌有藍色國旗條紋',
      'Kazakhstan vs Mongolia：Kazakhstan 用卡車覆蓋；Mongolia 用有 snorkel/bars 的轎車',
      '底部黑色的公里標記是最一致的國內辨識特徵',
      '獨特的哈薩克西里爾字符（Қ、Ң、Ө）可與俄文區分',
      'Astana = 現代/未來主義；Almaty = 以山為背景的林蔭城市',
      '主要道路有黃色路肩線，較小道路僅有白線',
      '與 Russia 共用電話區碼 +7 — 需看車牌差異來區分',
      "🔗 <a href=\"https://www.google.com/maps/@51.1694,71.4491,3a,75y,90t\" target=\"_blank\" style=\"color:var(--accent-blue)\">Street View 範例（Astana）</a>"
    ]
  },

'kyrgyzstan': {
    name: 'Kyrgyzstan',
    localName: 'Кыргызстан',
    flag: '🇰🇬',
    region: 'asia',
    drivingSide: 'right',
    tld: '.kg',
    phoneCode: '+996',
    language: 'Kyrgyz, Russian',
    currency: 'Som (KGS)',
    camera: [
      "<strong>100% Gen 3</strong>（方鏡，車身有黑線）",
      '獨特的相機車可見 BARS — 少數有此特徵的國家之一',
      '可見側鏡，特別是左側',
      '鏡子可能看起來髒或有風化痕跡',
      '覆蓋主要沿主要公路和城市（Bishkek、Osh）',
      '山區有大面積覆蓋缺口'
    ],
    car: [
      '銀色轎車 + 可見 bars（四根橫桿）',
      '可見側鏡（特別是左側），類似 Guatemala 和 Mongolia',
      '側鏡狀態因地區不同：東部/Bishkek = 乾淨；南部 = 未調整；西南部 = 泥濘',
      '有 bars 但無背包/露營裝備（Mongolia 有 → 辨識重點！）',
      '冬季涵蓋常見'
    ],
    roads: [
    "白色或黃色中心線（標線不一致）",
    '藍色方向指示路標',
    '道路品質不一，從不錯的公路到崎嶇山路',
    '蘇聯式道路基礎設施',
    '有髮夾彎的山口',
    '部分道路沿山間河谷行進',
    '許多路線道路標線有限'
  ],
  poleInfo: [
    '道路沿線可見上漆的電線桿支撐物'
  ],
    landscape: [
      '地勢非常多山 — 天山山脈為主',
      '高山草甸和山谷',
      '伊塞克湖：世界最大的高山湖泊之一',
      '夏季牧場上的氈房（boz ui）',
      '以雪山為背景的綠色山谷',
      '城市中有蘇聯時期建築和基礎設施',
      '比 Kazakhstan 不那麼乾旱 — 有更多綠色山地草甸',
      '南部有核桃林'
    ],
    signs: [
      '西里爾字母 — 吉爾吉斯西里爾字母',
      '特殊字符：Ң（Ng）、Ө（帶橫線的 O）— 與蒙古語共用',
      '標誌為雙語：吉爾吉斯語 + 俄語（均為西里爾字母）',
      '南部靠近 Osh 的地區有部分烏茲別克文',
      '藍色方向指示路標',
      '城市名稱使用西里爾字母',
      '蘇聯式標誌仍然常見'
    ],
    plates: [
      '白色車牌左側有紅色條紋 — 非常有辨識度',
      '國家代碼：車牌上可見 KG',
      '紅色條紋是區別 Mongolia 和 Kazakhstan 的關鍵',
      '格式：地區代碼 + 字母 + 數字',
      '紅色條紋為飽和紅色（相對於 Mongolia 的小紅色圖形）',
      '乾淨、易讀的車牌格式'
    ],
    unique: [
      '相機車有可見 BARS + 車牌紅色條紋 = Kyrgyzstan',
      '車牌上紅色條紋是最強的單一辨識特徵',
      '車上有 bars（與 Mongolia 相同）— 但 Kyrgyzstan 無 snorkel',
      '車上鏡子狀態因地區而異（乾淨/髒/泥濘/未調整）',
      '地勢非常多山 — 比 Kazakhstan 的平坦草原更高山',
      '如可見伊塞克湖覆蓋',
      '吉爾吉斯語和俄語西里爾字母混合',
      '山地牧場上的氈房'
    ],
    tips: [
      '車牌紅色條紋 = Kyrgyzstan（最強單一線索）',
      'Kyrgyzstan vs Mongolia：紅色條紋（KG）vs 紅色圖形（MN）；無 snorkel（KG）vs 有 snorkel（MN）',
      'Kyrgyzstan vs Kazakhstan：多山（KG）vs 平坦草原（KZ）；紅色條紋（KG）vs 藍色國旗（KZ）',
      '相機車有 bars 但無 snorkel = 可能是 Kyrgyzstan（Mongolia 有 snorkel）',
      '車上鏡子狀態可指示 Kyrgyzstan 境內哪個地區',
      '山脈 + 西里爾字母 + 車牌紅色條紋 = 確定是 Kyrgyzstan',
      '與蒙古語共用 Ң 和 Ө 字符 — 查看車牌來區分',
      "🔗 <a href=\"https://www.google.com/maps/@42.8746,74.5698,3a,75y,90t\" target=\"_blank\" style=\"color:var(--accent-blue)\">Street View 範例（Bishkek）</a>"
    ]
  },

'uzbekistan': {
    name: 'Uzbekistan',
    localName: 'O\'zbekiston',
    flag: '🇺🇿',
    region: 'asia',
    drivingSide: 'right',
    tld: '.uz',
    phoneCode: '+998',
    language: 'Uzbek, Russian',
    currency: 'Som (UZS)',
    camera: [
      "<strong>100% Gen 3</strong>（覆蓋有限）",
      '覆蓋主要在大城市（Tashkent、Samarkand、Bukhara）',
      '歷史/伊斯蘭建築景點有 Trekker 覆蓋',
      '主要路線以外覆蓋稀疏',
      '影像品質不一',
      '在 GeoGuessr 中相對罕見的國家'
    ],
    car: [
      '標準涵蓋（有限涵蓋區域）',
      '無特殊 Google 車輛辨識特徵'
    ],
    roads: [
      "白色中心線",
      '道路品質不一，從良好公路到崎嶇鄉村道路',
      '蘇聯式道路基礎設施',
      '許多路線道路標線有限',
      '穿越沙漠和農業地區的長直道路',
      '藍色或綠色方向指示牌',
      '農業地區道路旁可見棉花田',
      '連接主要絲路城市的公路'
    ],
    landscape: [
      '大部分為乾旱/沙漠地形 — 西部有克孜勒庫姆沙漠',
      '東部為肥沃的費爾干納谷地',
      '伊斯蘭建築：綠松石瓷磚清真寺、神學院、宣禮塔（Samarkand、Bukhara）',
      '絲路遺產城市有精美瓷磚裝飾',
      '棉花田到處都是（Uzbekistan 是主要棉花生產國）',
      '城市中有蘇聯時期公寓大樓',
      '鹹海地區：乾燥、塵土飛揚的環境災區',
      '東部靠近吉爾吉斯邊境有山脈'
    ],
    signs: [
      '烏茲別克語正從西里爾字母轉換為拉丁字母',
      '西里爾字母（Ўзбек）和拉丁字母（O\'zbek）均可見',
      '較新路牌多用拉丁字母；舊路牌用西里爾字母',
      '許多標誌上也有俄語西里爾字母',
      '烏茲別克拉丁字母獨特字符：O\'（帶撇號）、G\'（帶撇號）',
      '旅遊區標誌為三語：烏茲別克語 + 俄語 + 英語',
      '中亞出現拉丁字母 = 可能是 Uzbekistan（其他國家主要用西里爾字母）'
    ],
    plates: [
      '白色車牌搭配地區代碼號碼',
      '格式：2 位地區代碼 + 字母 + 3 位數 + 2 字母',
      '地區代碼：01 = Tashkent 市、10-14 = 各地區',
      '車牌上有 UZ 國家代碼',
      '乾淨的白色背景',
      '車牌類似其他中亞國家但格式不同'
    ],
    unique: [
      '中亞出現拉丁字母 = 可能是 Uzbekistan（Kyrgyzstan/Kazakhstan 主要用西里爾字母）',
      'Chevrolet/Daewoo 車輛佔主導 — 白色 Chevrolet Lacetti 和 Matiz 極為常見',
      '壯觀的綠松石瓷磚伊斯蘭建築（Registan、Shah-i-Zinda）',
      '農業地區可見棉花田',
      '烏茲別克拉丁字母中的撇號：O\' 和 G\' 很有辨識度',
      '絲路城市（Samarkand、Bukhara、Khiva）有 trekker 覆蓋',
      '標誌上西里爾和拉丁字母的過渡區'
    ],
    tips: [
      '中亞出現拉丁字母 = 強烈 Uzbekistan 指標（其他國家主要用西里爾字母）',
      '到處都是白色 Chevrolet Lacetti/Matiz = Uzbekistan',
      'Uzbekistan vs Kyrgyzstan：烏茲別克標誌用拉丁字母；吉爾吉斯標誌用西里爾字母',
      'Uzbekistan vs Kazakhstan：Uzbekistan 更明顯地在西里爾字母旁使用拉丁字母',
      'trekker 覆蓋中的綠松石瓷磚伊斯蘭建築 = Uzbekistan 的絲路城市',
      '棉花田 + 乾旱地形 + 拉丁/西里爾字母混合 = Uzbekistan',
      '在 GeoGuessr 中相對罕見 — 主要是著名歷史景點的 trekker 覆蓋',
      "🔗 <a href=\"https://www.google.com/maps/@41.2995,69.2401,3a,75y,90t\" target=\"_blank\" style=\"color:var(--accent-blue)\">Street View 範例（Tashkent）</a>"
    ]
  },

  // ============================================================
  //  MIDDLE EAST
  // ============================================================,

'lebanon': {
    name: 'Lebanon',
    localName: 'لبنان',
    flag: '🇱🇧',
    region: 'middle-east',
    drivingSide: 'right',
    tld: '.lb',
    phoneCode: '+961',
    language: 'Arabic, French',
    currency: 'Lebanese Pound (LBP)',
    camera: [
    "<strong>98.9% Shitcam + 1.1% Gen 3</strong>",
    "⚠️ 幾乎全部為 shitcam — 中東唯一有大規模 shitcam 的國家",
    "僅 1.1% 為 Gen 3 trekker 步行覆蓋",
    "覆蓋集中在 Beirut 和沿海地區"
  ],
    car: [
      'Gen 3：標準白色轎車',
      '無特殊 antenna 或 roof rack',
      '無獨特 car meta'
    ],
    roads: [
      '道路品質差異顯著 — 從高速公路到坑窪街道',
      '部分地區有法式道路基礎設施',
      '白色道路標線為主',
      '公路標誌為雙語：阿拉伯語 + 法語或阿拉伯語 + 英語',
      '有回頭彎的山路 — Lebanon 地勢非常多山',
      '沿地中海的海岸公路',
      '電力基礎設施常可見損壞或臨時發電機'
    ],
    landscape: [
    "地中海風格景觀 — 多丘陵和岩崖",
    "<strong>砂岩磚建築</strong>非常常見（類似 Israel/Palestine 的耶路撒冷石）",
    "雪松 — Lebanon 國家象徵（黎巴嫩雪松）",
    "冬季可見<strong>雪山</strong>（有滑雪場）",
    "Beirut：密集都市區，現代建築與戰爭損壞建築混合",
    "羅馬遺跡（Baalbek 巨大寺廟群）",
    "Bekaa 谷地：山脈之間的農業/葡萄酒產區",
    "清真寺和教堂混合（宗教多元國家）",
    "Tripoli 東部/東北部山區可見積雪"
  ],
    signs: [
      "阿拉伯文+法語範例：<span class=\"script-sample\" style=\"font-size:1.2rem\">شارع بيروت</span> + Rue de Beyrouth",
      '阿拉伯文 + 法語或英語作為第二語言',
      '法國影響使 Lebanon 有別於其他阿拉伯國家',
      '標誌可能為三語：阿拉伯語 + 法語 + 英語',
      '部分地區有法式路標',
      '街名有時為法語（Rue de...）',
      '政黨標誌和海報常見',
      '部分地區有真主黨或其他政黨旗幟/橫幅'
    ],
    plates: [
    "<strong>標準私家車</strong>：白底黑字，左側有<strong>藍色直條</strong>（含雪松圖案 + لبنان + 車輛分類），類似 EU 風格",
    "格式：<strong>地區字母 + 最多 6 位數字</strong>（如 B 382445），字母代表登記地區（B=Beirut, T=Tripoli, S=Sidon, Z=Zahleh 等）",
    "有兩種尺寸：EU 長條型（520×110mm，藍條在左側）和北美方型（320×160mm，藍條在頂部）",
    "⚠️ 前後車牌格式相同，無明顯差異",
    "<strong>出租車/公共運輸</strong>：<strong>紅底白字</strong> — 在 shitcam 模糊中仍可辨識紅色",
    "<strong>租車</strong>：<strong>綠底</strong>車牌",
    "<strong>外交</strong>：<strong>橘底</strong>（含國家代碼）",
    "<strong>領事</strong>：<strong>紫底</strong>",
    "<strong>駕訓班</strong>：<strong>黃底</strong>",
    "<strong>臨時/過境</strong>：<strong>藍底</strong>（標記 TEMP 或 IMPORT）",
    "<strong>觀光</strong>：<strong>粉紅底</strong>",
    "<strong>棕色臨時牌</strong>：<strong>棕底</strong>",
    "特殊字母：J=法官、R=宗教領袖、MP=國會議員（1-128）、AG=部長",
    "⚠️ GeoGuessr 實用：shitcam 下車牌多半模糊，但<strong>紅色（出租車）和綠色（租車）</strong>底色仍可辨識"
  ],
    unique: [
    "⚠️ <strong>98.9% Shitcam</strong> — 中東唯一有大規模 shitcam 的國家",
    "砂岩磚建築（類似耶路撒冷石）",
    "阿拉伯語 + 英語 + 法語三語混用",
    "深紅色出租車車牌",
    "Zahle 附近有黑色街景車（罕見）",
    "宗教多元：清真寺和教堂在同一區域"
  ],
    tips: [
      '私人車輛紅色車牌 = 強烈 Lebanon 指標（在中東罕見）',
      '法語作為第二語言（標誌上）= Lebanon（其他黎凡特國家不使用）',
      'Lebanon vs Syria：Lebanon 覆蓋更好且有更多法國影響',
      'Lebanon vs Jordan：紅色車牌（LB）vs 白色車牌（JO）；法國影響（LB）',
      '山脈非常靠近地中海海岸 = Lebanon（緊湊的國家）',
      '清真寺和教堂混合 = 宗教多元 = 可能是 Lebanon',
      '山區的雪松是 Lebanon 的標誌',
      '如果看到阿拉伯文 + 法文 + 地中海海岸線 + 山脈 = Lebanon',
      "🔗 <a href=\"https://www.google.com/maps/@33.8938,35.5018,3a,75y,90t\" target=\"_blank\" style=\"color:var(--accent-blue)\">Street View 範例（Beirut）</a>"
    ]
  },

'oman': {
    name: 'Oman',
    localName: 'عُمان',
    flag: '🇴🇲',
    region: 'middle-east',
    drivingSide: 'right',
    tld: '.om',
    phoneCode: '+968',
    language: 'Arabic',
    currency: 'Omani Rial (OMR)',
    camera: [
      "<strong>100% Gen 4 Trekker（白色 pickup truck）</strong>",
      "2024 年新增覆蓋（2024 年 2-9 月拍攝），Oman 是中東第 7 個加入 Street View 的國家",
      "Phase 1：Muscat、Sohar、Salalah（~36,000 km）；Phase 2：其餘地區（總計 ~63,000 km）",
      'Salalah 地區有獨立覆蓋且景觀獨特（綠色季風景觀）',
      '內陸沙漠地區有覆蓋缺口'
    ],
    car: [
      "<strong>大型白色 pickup truck</strong>（Gen 4 Trekker 裝在 truck 上）",
      "⚠️ 天線在 truck <strong>中間位置</strong> — 這是區分 Oman vs Qatar 的關鍵",
      "車身有時完全被模糊，但天線仍可見",
      "vs <strong>Qatar</strong>：也是白色 pickup truck，但天線在<strong>車左前方</strong>",
      "vs <strong>UAE</strong>：UAE 用白色<strong>轎車</strong>，Oman 用 <strong>pickup truck</strong>",
      '沙漠公路 + 白色 pickup truck + 中間天線 = Oman'
    ],
    roads: [
    "白色中心線",
    '主要地區公路維護良好',
    '可見部分公里標記和 T 形桿',
    '路標為阿拉伯語 + 英語雙語',
    '沙漠道路上有沙子侵入柏油路面',
    '壯觀山景的山路（Jebel Shams）',
    '十字路口常見圓環',
    '主要路線道路品質優良'
  ],
  bollardInfo: [
    'Oman 很少有 bollard — 缺少 bollard 是線索'
  ],
    landscape: [
      '地形多樣：壯觀的山脈（Jebel Akhdar、Jebel Shams「Oman 大峽谷」）',
      '海岸線有碧綠海水和壯觀懸崖',
      '內陸沙漠（Wahiba/Sharqiya 沙地）',
      'Salalah：季風（Khareef）季節時鬱鬱蔥蔥 — 與國家其他地區完全不同',
      '傳統 Oman 堡壘和瞭望塔',
      '乾河谷（季節性泛濫的乾涸河床）',
      'Dhofar 地區的乳香樹',
      '比 UAE 更不都市化/發達 — 更傳統的感覺'
    ],
    signs: [
      '阿拉伯文 + 英文雙語標誌',
      '綠色高速公路標誌配白色文字',
      '棕色標誌為旅遊/文化景點',
      '路標類似海灣國家標準設計',
      '城市名稱有阿拉伯語和英語',
      '速限以 km/h 標示',
      '商業/廣告標誌比 UAE 少'
    ],
    plates: [
      '黃色車牌為私人車輛 — 在海灣地區很有辨識度',
      '紅色車牌為商業/運輸車輛',
      '黃色車牌是關鍵辨識特徵：亞洲只有 Japan、Oman 和 Israel 有黃色車牌',
      '格式：阿拉伯文 + 數字',
      '乾淨、易讀的車牌',
      '政府車牌為不同顏色'
    ],
    unique: [
      '黃色車牌 — 在海灣地區罕見（UAE 白色、Qatar 白色/栗色）',
      '白色 pickup truck + 天線在中間（vs Qatar 天線在左前方；vs UAE 用轎車）',
      'bollard 很罕見 — 其缺失有助於辨識 Oman',
      'Jebel Shams「大峽谷」是獨特景觀',
      'Salalah 的綠色季風景觀在阿拉伯半島獨一無二',
      '比 UAE 更多山且更傳統',
      'Dhofar 地區的乳香樹',
      '壯觀的海岸懸崖和碧綠海水'
    ],
    tips: [
      '海灣地區黃色車牌 = Oman（UAE = 白色、Qatar = 白色/栗色）',
      'Oman vs UAE：pickup truck（OM）vs 轎車（UAE）；黃色車牌（OM）vs 白色車牌（UAE）',
      'Oman vs Qatar：天線在中間（OM）vs 天線在左前方（QA）；黃色車牌（OM）vs 白色/栗色車牌（QA）；山地（OM）vs 平坦（QA）',
      'bollard 罕見 — 如果看到中東 + 無 bollard = 可能是 Oman',
      'Salalah 覆蓋綠意盎然（季風季節）— 在阿拉伯半島很不尋常',
      '白色 pickup truck + 天線在中間 = Oman（vs Qatar 天線在左前方，vs UAE 轎車）',
      '比 UAE 更傳統/鄉村感 — 更少玻璃摩天大樓',
      '山脈 + 沙漠 + 海岸近距離相鄰 = Oman',
      "🔗 <a href=\"https://www.google.com/maps/@23.5880,58.3829,3a,75y,90t\" target=\"_blank\" style=\"color:var(--accent-blue)\">Street View 範例（Muscat）</a>"
    ]
  },

'palestine': {
    name: 'Palestine',
    localName: 'فلسطين',
    flag: '🇵🇸',
    region: 'middle-east',
    drivingSide: 'right',
    tld: '.ps',
    phoneCode: '+970',
    language: 'Arabic',
    currency: 'Israeli New Shekel (ILS) / Jordanian Dinar',
    camera: [
      "<strong>66.6% Gen 3 + 32.3% Gen 4</strong>",
      '覆蓋主要在西岸城市（Ramallah、Bethlehem、Nablus）',
      '加薩走廊覆蓋非常有限',
      '覆蓋品質類似 Israel 但範圍較小',
      '部分宗教/歷史景點有 Trekker 覆蓋',
      '覆蓋來自 Google 和第三方來源'
    ],
    car: [
      'Gen 3：黑色轎車 + 長天線 — 與 Russia, Israel 相同配置',
      '與 Israel 使用完全相同的車輛配置',
      '需靠語言（Arabic vs Hebrew）和其他線索區分'
    ],
    roads: [
      '道路品質不一 — 有些維護良好，有些坑窪',
      '部分地區可見以色列隔離牆/屏障',
      '部分道路可見檢查站',
      '城鎮中減速帶常見',
      '道路基礎設施維護普遍不如 Israel',
      '以色列和巴勒斯坦路標混合',
      '舊城區街道狹窄'
    ],
    landscape: [
      '丘陵地形 — 西岸為山地',
      '到處都是橄欖園 — 重要農產品',
      '石造建築（白色/奶油色石灰岩）類似 Israel 但更老舊',
      '難民營有密集建築',
      '每個城鎮都有帶宣禮塔的清真寺',
      '古代建築（Bethlehem、Hebron、Nablus 舊城）',
      '比以色列地區更不修飾 — 更真實/生活化的感覺',
      '屋頂水塔（整個地區常見）'
    ],
    signs: [
      '阿拉伯文（العربية）為主要語言',
      '與 Israel 的三語方式相比，標誌更以阿拉伯語為主',
      '部分標誌為阿拉伯語 + 英語',
      '比以色列控制區域更少希伯來語',
      '適用地區有巴勒斯坦當局標誌',
      '政治塗鴉和壁畫常見，尤其在隔離牆附近'
    ],
    plates: [
      '白色長型車牌 — 不同於 Israel 的黃色車牌',
      '白色車牌搭配綠色文字或標記',
      '巴勒斯坦車牌比以色列車牌更長/更窄',
      '白色車牌顏色是與 Israel（黃色）的關鍵區別',
      '格式：阿拉伯文 + 數字',
      '部分車輛有 Israel 車牌（東耶路撒冷居民）'
    ],
    unique: [
      '白色長型車牌 = Palestine（相對於 Israel 的藍色條紋黃色車牌）',
      '部分覆蓋中可見隔離牆/屏障',
      'More Arabic-dominant signs (vs Israel\'s trilingual Hebrew-Arabic-English)',
      '到處都是橄欖園',
      'Political murals and graffiti, especially near the wall',
      '丘陵地形配石造建築 — 類似但可與 Israel 區分',
      '黃色巴勒斯坦計程車',
      '基礎設施維護不如鄰國 Israel'
    ],
    tips: [
      '白色車牌 = Palestine；藍色條紋黃色車牌 = Israel',
      '比以色列地區更以阿拉伯語為主（較少希伯來語/英語）',
      '如果看到隔離牆/屏障 = 可能是西岸巴勒斯坦地區',
      'Palestine vs Jordan：Palestine 更多丘陵和橄欖園；Jordan 更沙漠化',
      '橄欖樹和石造建築到處都是',
      '巴勒斯坦地區看起來類似 Israel 但基礎設施維護較少',
      '政治壁畫和塗鴉是巴勒斯坦地區的強力指標',
      '如果以阿拉伯語為主 + 白色車牌 + 丘陵地形 + 橄欖樹 = Palestine',
      "🔗 <a href=\"https://www.google.com/maps/@31.9038,35.2034,3a,75y,90t\" target=\"_blank\" style=\"color:var(--accent-blue)\">Street View 範例（Ramallah）</a>"
    ]
  },

'el-salvador': {
    name: 'El Salvador',
    localName: 'El Salvador',
    flag: '🇸🇻',
    region: 'central-america',
    drivingSide: 'right',
    tld: '.sv',
    phoneCode: '+503',
    language: 'Spanish',
    currency: 'US Dollar (USD)',
    camera: [
      "<strong>68.7% Gen 4 + 31.2% Gen 3</strong>",
      '大部分為第三方和非官方覆蓋',
      '有覆蓋的地方，Gen 3 畫質最常見',
      '覆蓋集中在 San Salvador 和主要公路',
      '城市地區有部分 Mapillary 風格的非正式覆蓋'
    ],
    car: [
      '因官方覆蓋有限，無獨特 Google car meta',
      '第三方覆蓋車輛各異',
      '出現官方覆蓋時，為標準白色轎車，無顯著特徵'
    ],
    roads: [
    '黃色中線搭配白色路肩線（有標線時）',
    '道路品質不一 — 主要公路鋪面，鄉村道路常未鋪面',
    '泛美公路（CA-1）貫穿全國',
    '中美洲公路標記：區域路線用 "CA" 前綴',
    '城鎮和學校附近減速帶常見'
  ],
  signInfo: [
    'ALTO 停車標誌'
  ],
    landscape: [
      '中美洲最小的國家但人口稠密',
      '南部沿線有火山鏈 — 火山土壤和地形',
      '太平洋海岸沿線的熱帶低地',
      '內陸有溫帶氣候的高原台地',
      '火山坡上的咖啡種植園',
      '森林密度低於 Costa Rica 或 Panama — 更多已開墾的農業用地',
      'Coatepeque 湖和 Ilopango 湖（火山口湖）'
    ],
    signs: [
      '所有標誌為西班牙語',
      'ALTO 停車標誌',
      '綠色方向指示公路標誌',
      '中美洲公路的 CA 路線標記',
      '政治塗鴉和競選壁畫常見',
      '可見 Claro 和 Tigo 電信品牌',
      '速限以 km/h 標示'
    ],
    plates: [
      '白色車牌藍色字',
      '車牌格式：通常字母後接數字',
      '前車牌不一定可見',
      '車牌有時顯示省（行政區域）資訊',
      '商用和私人車輛車牌格式不同'
    ],
    unique: [
      '使用美元作為官方貨幣 — 價格上有美元符號',
      'Pupuseria（賣 pupusa 的餐廳）有獨特招牌',
      '比鄰國 Honduras 或 Guatemala 更小且建築更密集',
      '火山地形類似 Guatemala 但沒那麼多山',
      'Pulmones（退役的美國校車，塗成彩色）用作公共運輸',
      '部分城市地區有大量幫派相關塗鴉',
      '城鎮中教堂和宗教意象突出',
      '<strong>圓形玻璃電錶</strong>裝在房屋外牆 — 中美洲共通特徵（Mexico、Guatemala 也有）'
    ],
    tips: [
      '官方覆蓋非常有限使 El Salvador 在 GeoGuessr 中罕見',
      '如果在中美洲看到有限、低品質覆蓋且人口稠密的地區，考慮 El Salvador',
      '使用美元，可能出現在價格標誌上 — 在中美洲不尋常',
      '尋找 CA 公路標記來確認中美洲位置',
      'ALTO 停車標誌 + 西班牙語 + 火山地形 + 人口稠密 = 可能是 El Salvador',
      '與 Guatemala 區別：Guatemala 有獨特的相機車配 bars 和側鏡',
      "🔗 <a href=\"https://www.google.com/maps/@13.6929,-89.2182,3a,75y,90t\" target=\"_blank\" style=\"color:var(--accent-blue)\">Street View 範例（San Salvador）</a>"
    ]
  },

'honduras': {
    name: 'Honduras',
    localName: 'Honduras',
    flag: '🇭🇳',
    region: 'central-america',
    drivingSide: 'right',
    tld: '.hn',
    phoneCode: '+504',
    language: 'Spanish',
    currency: 'Lempira (HNL)',
    camera: [
      "<strong>100% Gen 3</strong>",
      '有覆蓋的地方，通常為 Gen 3 畫質',
      '覆蓋主要沿主要公路和 Tegucigalpa',
      '旅遊區有部分第三方和非官方覆蓋（Roatan、Bay Islands）',
      '覆蓋稀疏使 Honduras 在標準 GeoGuessr 中相對罕見'
    ],
    car: [
      '涵蓋有限，無特殊 Google car meta',
      '標準白色轎車（有涵蓋時）'
    ],
    roads: [
    '黃色中線搭配白色路肩標線（有標線時）',
    '主要公路以外道路狀況普遍差',
    '泛美公路連接鄰國',
    '中美洲區域公路的 CA 路線標記',
    '鄉村山區常見未鋪面道路',
    '城鎮和學校附近有減速帶'
  ],
  signInfo: [
    'ALTO 停車標誌'
  ],
    landscape: [
      '內陸為松林覆蓋的多山高地',
      '加勒比海岸：平坦、熱帶、棕櫚樹、香蕉種植園',
      '太平洋海岸（豐塞卡灣）：紅樹林、漁村',
      '高地有松林 — 與闊葉熱帶森林明顯不同',
      '有農業用地的河谷',
      '海灣群島（Roatan、Utila）：有珊瑚礁的加勒比海島嶼',
      '許多地區可見紅棕色土壤'
    ],
    signs: [
      '所有標誌為西班牙語',
      'ALTO 停車標誌',
      '綠色公路方向指示標誌',
      'Tigo 電信品牌常見',
      '政治競選壁畫和塗鴉',
      '城鎮中宗教標誌和教堂標記常見',
      '速限以 km/h 標示'
    ],
    plates: [
      '白色車牌藍色或黑色字',
      '格式包含字母和數字',
      '前車牌不一定要求或可見',
      '車牌可能顯示市鎮或省的資訊'
    ],
    unique: [
      '高地的松林在中美洲有一定辨識度',
      'Pulperia（小雜貨店）有手繪招牌',
      '倫皮拉貨幣 — 以原住民領袖命名',
      '加勒比海岸地區可能顯示英語影響（Bay Islands 歷史上講英語）',
      '許多鄉村地區有紅棕色土壤',
      '小城鎮有彩色房屋',
      '商店和建築上的 Tigo 電信品牌',
      '<strong>圓形玻璃電錶</strong>裝在房屋外牆 — 中美洲共通特徵'
    ],
    tips: [
      '覆蓋非常有限使 Honduras 在 GeoGuessr 中罕見',
      '如果在中美洲看到 ALTO 標誌、道路品質差、松林覆蓋的山脈且無獨特 car meta，考慮 Honduras',
      '松林有助於與 Costa Rica 和 Panama 更熱帶的雨林區分',
      '加勒比海岸覆蓋可能看起來類似 Belize — 檢查是否有西班牙語標誌',
      '易混淆國家：Guatemala（檢查相機 bars/側鏡）、El Salvador（更小、更擁擠）、Nicaragua（類似覆蓋問題）',
      "🔗 <a href=\"https://www.google.com/maps/@14.0723,-87.1921,3a,75y,90t\" target=\"_blank\" style=\"color:var(--accent-blue)\">Street View 範例（Tegucigalpa）</a>"
    ]
  },

'nicaragua': {
    name: 'Nicaragua',
    localName: 'Nicaragua',
    flag: '🇳🇮',
    region: 'central-america',
    drivingSide: 'right',
    tld: '.ni',
    phoneCode: '+505',
    language: 'Spanish',
    currency: 'Cordoba (NIO)',
    camera: [
      "<strong>85.6% Gen 4 + 14.3% Gen 3</strong>",
      '有覆蓋的地方大部分為第三方覆蓋',
      '現有覆蓋大部分為 Gen 3 畫質',
      '覆蓋稀疏 — 主要沿泛美公路和 Managua 地區',
      '旅遊區有部分 trekker 覆蓋（Granada、Leon）'
    ],
    car: [
      '涵蓋有限，無特殊 Google car meta',
      '第三方涵蓋車輛外觀各異'
    ],
    roads: [
    '黃色中線搭配白色路肩線（有標線時）',
    '道路狀況常差 — 主要路線以外許多未鋪面道路',
    '泛美公路（NIC-1/CA-1）是主要幹道',
    '城鎮附近有減速帶和道路標記',
    '二級道路上坑洞常見'
  ],
  signInfo: [
    'ALTO 停車標誌'
  ],
    landscape: [
      '太平洋海岸沿線有火山鏈（環太平洋火山帶的一部分）',
      'Nicaragua 湖（Cocibolca）— 中美洲最大的湖泊之一',
      '首都附近的 Managua 湖',
      '太平洋低地：乾熱帶森林、農業用地',
      '加勒比海岸（蚊子海岸）：茂密熱帶雨林、人口稀疏',
      '內陸高地：咖啡種植園、較高海拔有松林',
      '與 Guatemala/Honduras 相比地形偏平坦到起伏'
    ],
    signs: [
      '所有標誌為西班牙語',
      'ALTO 停車標誌',
      '綠色方向指示公路標誌',
      '可見 Claro 和 Movistar 電信品牌',
      '桑地諾（FSLN）政治壁畫和標誌 — 紅黑政黨色彩',
      '速限以 km/h 標示',
      '宗教意象和教堂標誌常見'
    ],
    plates: [
      '白色車牌藍色字',
      '格式：字母和數字依序排列',
      '車牌可能顯示 "NICARAGUA" 文字',
      '不同車輛類型（私人、商用、外交）有不同顏色方案'
    ],
    unique: [
      '桑地諾（FSLN）紅黑色政治壁畫很有辨識度',
      '許多南部/中部位置可見 Nicaragua 湖',
      '太平洋海岸沿線可見火山峰',
      'Granada 和 Leon 有彩色殖民建築',
      '鄉村地區仍可見馬車',
      '商業場所可能出現科多巴貨幣標誌',
      '覆蓋有限使 Nicaragua 在 GeoGuessr 中罕見'
    ],
    tips: [
      '因覆蓋有限在 GeoGuessr 中非常罕見',
      '如果看到桑地諾/FSLN 政治壁畫（紅黑色），想到 Nicaragua',
      '看到大湖 = 可能靠近 Nicaragua 湖或 Managua 湖',
      '火山地形 + 西班牙語 + ALTO 標誌 + 有限覆蓋 = 考慮 Nicaragua',
      '與其他中美洲國家的區別很大程度依靠排除法',
      '無特殊車輛辨識特徵 — 靠景觀和標誌線索',
      "🔗 <a href=\"https://www.google.com/maps/@12.1150,-86.2362,3a,75y,90t\" target=\"_blank\" style=\"color:var(--accent-blue)\">Street View 範例（Managua）</a>"
    ]
  },

'cuba': {
    name: 'Cuba',
    localName: 'Cuba',
    flag: '🇨🇺',
    region: 'caribbean',
    drivingSide: 'right',
    tld: '.cu',
    phoneCode: '+53',
    language: 'Spanish',
    currency: 'Peso (CUP)',
    camera: [
      "<strong>100% 非官方覆蓋</strong> — 無 Google 官方街景",
      '覆蓋來自 Mapillary 和其他第三方眾包（非 Google 相機世代概念不適用）',
      '主要覆蓋 Havana（尤其是舊 Havana）和部分旅遊路線',
      '影像品質差異極大 — 通常低於標準 Google 覆蓋品質',
      '覆蓋為眾包：12 人團隊使用租賃汽車、機車和自行車繪製了 80-90% 的舊 Havana',
      '非正式、非標準化影像使 Cuba 非常有辨識度'
    ],
    car: [
      '無 Google car meta — 全為第三方涵蓋',
      '涵蓋來自各種車型：汽車、機車、自行車'
    ],
    roads: [
    '道路基礎設施普遍差且破碎',
    '有標線處為黃色中線和白色外線，但標線常褪色或缺失',
    'Havana 有殖民建築的寬闊大道',
    '鄉村道路常未鋪面',
    '與其他國家相比，現代公路標誌極少'
  ],
  signInfo: [
    'PARE 停車標誌（部分地區使用，但許多標誌缺失或損壞）'
  ],
    landscape: [
      'Havana：標誌性的西班牙殖民建築，彩色粉刷的破舊建築',
      '加勒比熱帶植被：棕櫚樹（王棕為國樹）',
      '全島大部分地區地形平坦到微幅起伏',
      'Vinales 山谷中的 Mogotes（圓頂喀斯特丘陵）— 非常有辨識度',
      'Pinar del Rio 省的菸草田',
      '鄉村地區的甘蔗田',
      '海岸沿線有碧綠海水的海灘區'
    ],
    signs: [
      '所有標誌為西班牙語',
      '革命口號和政治看板，有切·格瓦拉、卡斯楚的圖像',
      '宣傳標誌是獨特特徵：社會主義/革命訊息',
      '路標常老舊、損壞或缺失',
      '商業廣告有限（因社會主義經濟）',
      '街區中有 CDR（革命防衛委員會）標誌'
    ],
    plates: [
      '各種車牌顏色代表車輛類型：藍色（國有）、黃色（私人）、棕色（較新私人）、橙/紅色（租賃/遊客）',
      '車牌相對較小',
      '格式和樣式與其他加勒比/拉美國家不同',
      '遊客租賃車常有特定車牌顏色以便當局識別'
    ],
    unique: [
      '1940-1950 年代的美國經典老爺車（Chevrolet、Ford、Buick）到處都是 — 最標誌性的視覺特徵',
      '蘇聯時期 Lada 車也極為常見（估計進口了 80,000-100,000 輛）',
      '美國老爺車 + 蘇聯 Lada + 中國車輛的混合創造了獨特的車輛景觀',
      '革命看板和切·格瓦拉圖像',
      '粉彩色的破舊殖民建築',
      '極少商業廣告（無產品看板，只有政治訊息）',
      'Cocotaxi：椰子形黃色機動三輪車，供遊客使用',
      'Bicitaxi：城市中的自行車人力車',
      '極度有限的網路/連結反映在缺少現代標誌'
    ],
    tips: [
      '1950 年代美國經典老爺車 + 西班牙語 = 幾乎肯定是 Cuba',
      '如果覆蓋低品質且非 Google（Mapillary），有老爺車和破舊殖民建築 = Cuba',
      '有切·格瓦拉、卡斯楚的革命/政治看板 = Cuba',
      '無商業廣告（無 Coca-Cola、無 McDonalds）= 強烈社會主義經濟指標',
      '蘇聯 Lada 車與老爺美國車並存是 Cuba 獨有的',
      '第三方覆蓋品質和不尋常的拍攝角度本身就是線索',
      "🔗 <a href=\"https://www.google.com/maps/@23.1136,-82.3666,3a,75y,90t\" target=\"_blank\" style=\"color:var(--accent-blue)\">Street View 範例（Havana）</a>"
    ]
  },

'jamaica': {
    name: 'Jamaica',
    localName: 'Jamaica',
    flag: '🇯🇲',
    region: 'caribbean',
    drivingSide: 'left',
    tld: '.jm',
    phoneCode: '+1-876',
    language: 'English / Jamaican Patois',
    currency: 'Dollar (JMD)',
    camera: [
      "<strong>73.5% Gen 4 + 26.5% Gen 3</strong>",
      '覆蓋集中在 Kingston、Montego Bay 和主要公路',
      '海岸道路和旅遊區有中等覆蓋',
      '旅遊景點有部分 trekker 覆蓋'
    ],
    car: [
      'Gen 3：白色轎車',
      '靠左行駛',
      '無特殊 antenna、bars 或側鏡特徵'
    ],
    roads: [
      '靠左行駛 — 少數靠左行駛的加勒比國家之一',
      '白色中線和白色外線常見',
      '道路品質不一：主要公路不錯，鄉村道路差',
      '內陸山區道路蜿蜒狹窄',
      '環島海岸道路',
      '城鎮附近有減速帶',
      '城市地區有圓環'
    ],
    landscape: [
      '鬱鬱蔥蔥的熱帶加勒比海島嶼',
      '東部的藍山 — 以藍山咖啡聞名',
      '海岸地區：沙灘、棕櫚樹、碧綠海水',
      '內陸：多山且森林茂密',
      '部分地區可見鋁土礦區（採礦的紅色土壤）',
      '城市地區：Kingston 是最大城市，建築密集',
      '彩色建築和拉斯塔法里風格的藝術和色彩'
    ],
    signs: [
      '所有標誌為英語 — 與西班牙語加勒比海的關鍵區別',
      '受英國影響的路標：許多標誌類似英國風格',
      '速限以 km/h 標示',
      '距離以公里計',
      '黃色警告標誌',
      'Digicel 電信品牌（紅白色）非常常見',
      '非正式標誌和廣告上有時可見牙買加克里奧爾語'
    ],
    plates: [
      '白色車牌黑色字',
      '標準格式含字母和數字',
      '通常前後都有車牌',
      '計程車和商用車牌有不同顏色/標記',
      '車牌比美式車牌相對簡單'
    ],
    unique: [
      '加勒比海靠左行駛 + 英語 = Jamaica 或 Trinidad & Tobago',
      'Digicel 品牌（紅色）在商店和建築上極為常見',
      '拉斯塔法里文化：藝術、旗幟和裝飾中的綠/金/紅色',
      'Jerk 雞肉/豬肉餐廳和路邊食物攤位',
      '標誌中可見雷鬼和 dancehall 音樂文化',
      '許多住宅使用鍍鋅/波浪金屬屋頂',
      '鬱鬱蔥蔥的熱帶綠色植被覆蓋山脈',
      '路線計程車（紅色車牌）是常見交通方式'
    ],
    tips: [
      '靠左行駛 + 英語 + 加勒比海熱帶 = Jamaica 或 Trinidad & Tobago',
      'Jamaica 多山且內陸綠意盎然；Trinidad 更平坦且靠近南美洲',
      '商店和建築上的紅色 Digicel 品牌是 Jamaica 的強力指標',
      '如果看到拉斯塔法里色彩（綠/金/紅）或雷鬼元素，想到 Jamaica',
      '東部 Jamaica 可見藍山 — 咖啡種植園標誌',
      '標誌上的英語（非西班牙語）排除 Dominican Republic、Cuba、Puerto Rico',
      "🔗 <a href=\"https://www.google.com/maps/@18.0179,-76.8099,3a,75y,90t\" target=\"_blank\" style=\"color:var(--accent-blue)\">Street View 範例（Kingston）</a>"
    ]
  },

'trinidad-and-tobago': {
    name: 'Trinidad and Tobago',
    localName: 'Trinidad and Tobago',
    flag: '🇹🇹',
    region: 'caribbean',
    drivingSide: 'left',
    tld: '.tt',
    phoneCode: '+1-868',
    language: 'English',
    currency: 'Dollar (TTD)',
    camera: [
      "<strong>73.5% Gen 4 + 26.5% Gen 3</strong>（Gen 4 黑色車+圓形天線）",
      '覆蓋主要在 Trinidad（較大的島）',
      'Tobago（較小的島）覆蓋有限',
      'Port of Spain 及周邊地區的主要公路和城市區域已覆蓋'
    ],
    car: [
      '大部分覆蓋使用白色相機車',
      '無獨特的天線、bars 或側鏡特徵',
      '可見靠左行駛的車輛',
      '當地汽車方向盤在右側'
    ],
    roads: [
      '靠左行駛 — 像 Jamaica 和英國一樣靠左',
      '白色道路標線（中線和外線）',
      '圓環常見，尤其在城市地區',
      '優先道路和受英國影響的交通規則',
      '道路品質不一：主要道路不錯，鄉村道路維護較少',
      'Trinidad 南部有石油/天然氣設施附近的工業道路',
      '學校和住宅區附近有減速帶'
    ],
    landscape: [
      'Trinidad：工業化程度較高，平坦到起伏丘陵，石油/天然氣基礎設施',
      'Trinidad 的北部山脈',
      'Tobago：較小、更注重旅遊、更綠且更多丘陵',
      '熱帶植被：棕櫚樹、熱帶花卉、紅樹林',
      'Trinidad 的瀝青湖：天然瀝青湖（若可見很有辨識度）',
      'Trinidad 南部的煉油廠和工業區',
      '多元族裔景觀：建築中可見印度、非洲、中國和歐洲影響',
      '印度教寺廟和清真寺與基督教堂並存'
    ],
    signs: [
      '所有標誌為英語',
      '受英國影響的路標風格',
      '速限以 km/h 標示',
      '距離以公里計',
      'Bmobile 和 Digicel 電信品牌',
      '基督教堂旁可見印度教和穆斯林宗教標誌',
      'Trinidad 南部石油/天然氣設施附近的工業標誌'
    ],
    plates: [
      '白色車牌黑色字',
      '格式：字母和數字',
      '通常前後都有車牌',
      '不同車輛類型有不同系列',
      '計程車車牌可能有不同標記',
      '車牌有 "T&T" 或 "Trinidad and Tobago" 識別標誌'
    ],
    unique: [
      '靠左行駛 + 英語 + 加勒比海 = Trinidad and Tobago 或 Jamaica',
      '印度教寺廟和清真寺與教堂並存 — 加勒比海獨特的宗教多元性',
      '大量印度（南亞）人口影響可見於食物、寺廟和節慶',
      '石油/天然氣工業基礎設施 — Trinidad 是石油生產國',
      'Trinidad 南部的瀝青湖（世界最大天然瀝青湖）',
      '可能可見 Doubles（街頭小吃）攤販',
      '嘉年華文化：可能可見彩色裝飾',
      '距離 Venezuela 非常近 — 有時可見 Venezuela 海岸線'
    ],
    tips: [
      '靠左行駛 + 英語 + 加勒比海 = Jamaica 或 Trinidad & Tobago',
      '加勒比海的印度教寺廟/清真寺 = Trinidad & Tobago（Jamaica 主要是基督教）',
      '加勒比海的石油/工業基礎設施 = Trinidad',
      '平坦地形和工業區 vs Jamaica 的山脈 = Trinidad',
      '更靠近南美大陸（靠近 Venezuela）= Trinidad & Tobago',
      '如果在加勒比海看到印度教和伊斯蘭宗教場所與英語標誌並存，就是 T&T',
      "🔗 <a href=\"https://www.google.com/maps/@10.6596,-61.5086,3a,75y,90t\" target=\"_blank\" style=\"color:var(--accent-blue)\">Street View 範例（Port of Spain）</a>"
    ]
  },

  // ============================================================
  //  SOUTH AMERICA
  // ============================================================,

'paraguay': {
    name: 'Paraguay',
    localName: 'Paraguay',
    flag: '🇵🇾',
    region: 'south-america',
    drivingSide: 'right',
    tld: '.py',
    phoneCode: '+595',
    language: 'Spanish / Guarani',
    currency: 'Guarani (PYG)',
    camera: [
      "<strong>Gen 3 為主 + 部分 Gen 4</strong>（⚠️ 確切比例待驗證）",
      '覆蓋集中在 Asunción 和主要公路',
      '泛查科公路有覆蓋',
      '鄉村地區覆蓋稀疏'
    ],
    car: [
      '白色轎車',
      '無特殊 antenna、bars 或側鏡特徵',
      '無獨特 car meta — 需靠其他線索辨識'
    ],
    roads: [
    '黃色中線搭配白色外線（標準美洲模式）',
    '道路品質不一：主要公路鋪面，許多鄉村道路未鋪面（紅土）',
    'Ruta 1, Ruta 2, Ruta 3 — major national routes',
    '泛查科公路：穿越查科地區的長直道路',
    '城鎮中減速帶常見',
    '許多道路旁可見紅橙色土壤'
  ],
  signInfo: [
    'PARE 停車標誌'
  ],
    landscape: [
      '東部 Paraguay：起伏丘陵、亞熱帶森林、紅土（類似 Argentina 的 Misiones 和南部 Brazil）',
      '西部 Paraguay（查科）：平坦、炎熱、乾燥灌木地 — 大查科地區的一部分',
      '查科從 Bolivia 東部經 Paraguay 西部延伸到 Argentina 北部',
      'Paraguay 河大致將國家分為兩半',
      '農業用地：大豆、畜牧和瑪黛茶種植',
      '伊泰普水壩區：巴西邊境的巨大水力發電大壩',
      '地形普遍平坦到微幅起伏'
    ],
    signs: [
      '西班牙語和瓜拉尼語雙語標誌 — 瓜拉尼語為共同官方語言',
      'PARE 停車標誌',
      '標誌和商業場所可見瓜拉尼語 — 南美洲獨有',
      '可見 Tigo 和 Personal 電信品牌',
      '政治競選標誌和壁畫',
      '速限以 km/h 標示',
      '國道路線標記'
    ],
    plates: [
      '白色車牌藍色字 (similar to many South American countries)',
      '正在採用南方共同市場式車牌（白底藍色頂部條紋）',
      '格式：字母和數字',
      '通常前後車牌都要求',
      '車牌可能顯示 "PARAGUAY" 文字或國徽'
    ],
    unique: [
      '標誌上的瓜拉尼語是最強的獨特線索 — 南美洲沒有其他國家有瓜拉尼語',
      '西班牙語/瓜拉尼語雙語標誌',
      '紅橙色土壤類似 Argentina 的 Misiones 和南部 Brazil',
      '西部平坦的查科灌木地 — 稀疏荒涼',
      '瑪黛茶文化：可見瑪黛茶品牌和商店',
      '瓜拉尼貨幣（世界上價值最低的貨幣之一 — 價格上有大數字）',
      '查科的門諾派殖民地有德式建築影響',
      '基礎設施不如 Argentina、Brazil 或 Chile 發達'
    ],
    tips: [
      '標誌上的瓜拉尼語 = Paraguay（南美洲獨有）',
      '如果官方標誌上有西班牙語 + 原住民語言雙語，且不是克丘亞語/艾馬拉語（Bolivia/Peru）= Paraguay',
      '紅土 + 平坦地形 + 西班牙語/瓜拉尼語 = 東部 Paraguay',
      '平坦乾燥灌木地類似 Argentina 北部查科 = 西部 Paraguay',
      '價格上的大數字（瓜拉尼貨幣）有助確認 Paraguay',
      '查科的門諾派殖民地有德文，是 Paraguay 的獨特特徵',
      '與 Argentina 區別：Argentina 有 A 形桿和 YPF 加油站；Paraguay 有瓜拉尼語',
      '與 Brazil 區別：Brazil 用葡萄牙語；Paraguay 用西班牙語/瓜拉尼語',
      "🔗 <a href=\"https://www.google.com/maps/@-25.2637,-57.5759,3a,75y,90t\" target=\"_blank\" style=\"color:var(--accent-blue)\">Street View 範例（Asunción）</a>"
    ]
  },

'venezuela': {
    name: 'Venezuela',
    localName: 'Venezuela',
    flag: '🇻🇪',
    region: 'south-america',
    drivingSide: 'right',
    tld: '.ve',
    phoneCode: '+58',
    language: 'Spanish',
    currency: 'Bolivar (VES)',
    camera: [
      "<strong>Gen 3 為主 + 部分 Gen 4</strong>（⚠️ 確切比例待驗證）",
      '大部分為第三方和非官方覆蓋 (Mapillary, etc.)',
      '旅遊區有部分 trekker 覆蓋',
      '覆蓋品質差異顯著',
      '部分覆蓋中有獨特 Google 車的報告但可用性有限'
    ],
    car: [
      '涵蓋有限，無一致的 Google 車輛 meta',
      '第三方涵蓋使用各種車型',
      '無可靠的 car meta 辨識'
    ],
    roads: [
    '有標線處為黃色中線和白色外線',
    '因經濟危機道路狀況普遍差',
    'Caracas 附近的高速公路（Autopistas）狀況較好',
    '許多道路標線褪色或缺失',
    '二級道路上坑洞常見',
    '城鎮附近有減速帶'
  ],
  signInfo: [
    'PARE 停車標誌'
  ],
    landscape: [
      '加勒比海岸：熱帶海灘、棕櫚樹、炎熱氣候',
      'Venezuela 西部的安地斯山（Merida 州）— 雪山頂',
      'Llanos（中央平原）：平坦草地、畜牧、季節性洪水',
      '圭亞那高地（南部）：桌山（tepui）、安赫爾瀑布、茂密森林',
      'Maracaibo 地區：Maracaibo 湖、石油基礎設施',
      '北部山脈的綠色山地 — 可能與 Colombia 和 Ecuador 混淆',
      '許多城鎮有色彩鮮豔的殖民房屋'
    ],
    signs: [
      '所有標誌為西班牙語',
      'PARE 停車標誌',
      '有 Hugo Chavez、Nicolas Maduro 和社會主義黨（PSUV）的政治壁畫和標誌',
      '官方標誌上有 "Bolivarian Republic of Venezuela" 文字',
      '可見 Movistar 和 Digitel 電信品牌',
      '速限以 km/h 標示',
      '石油工業標誌（PDVSA — 國營石油公司）',
      '革命和反帝國主義宣傳標誌'
    ],
    plates: [
      '白色車牌有彩色文字和疊加的國旗圖案',
      '頂部藍色銘刻 "Bolivarian Republic of Venezuela"',
      '格式：4 字母 + 3 數字（AB123CD）— 共 7 個字符',
      '長方形：300mm x 150mm 有黑色邊框',
      '不同車輛類型有不同車牌顏色',
      '因經濟狀況車牌可能看起來磨損或損壞'
    ],
    unique: [
      '有 Chavez/Maduro 和革命口號的政治壁畫 — 最有辨識度的線索',
      '加油站的 PDVSA（國營石油公司）品牌',
      '官方標誌和車牌上的 "Bolivarian Republic of Venezuela"',
      '比其他國家更小的白色巴士',
      '色彩鮮豔的殖民建築',
      '覆蓋非常有限本身就是線索 — 如果在南美洲看到有限/低品質覆蓋，考慮 Venezuela',
      '經濟危機可見：許多關閉的商店、惡化的基礎設施',
      '商業標誌上的 .ve 網域'
    ],
    tips: [
      'Chavez/Maduro 政治壁畫和社會主義黨宣傳 = Venezuela',
      'PDVSA 加油站 = Venezuela',
      '標誌或車牌上的 "Bolivarian Republic of Venezuela" 文字 = 確認',
      '綠色山脈 + 西班牙語 + 有限覆蓋 + 政治壁畫 = Venezuela',
      '南美洲覆蓋非常有限：考慮 Venezuela 或 Guyana（英語系）',
      '與 Colombia 區別：Colombia 有黃色車牌和更好的覆蓋；Venezuela 有帶國旗的白色車牌和革命壁畫',
      '與 Ecuador 區別：Ecuador 有雙護欄；Venezuela 有有限覆蓋和政治壁畫',
      "🔗 <a href=\"https://www.google.com/maps/@10.4806,-66.9036,3a,75y,90t\" target=\"_blank\" style=\"color:var(--accent-blue)\">Street View 範例（Caracas）</a>"
    ]
  },

'lesotho': {
    name: 'Lesotho',
    localName: 'Lesotho',
    flag: '\u{1F1F1}\u{1F1F8}',
    region: 'africa',
    drivingSide: 'left',
    tld: '.ls',
    phoneCode: '+266',
    language: 'Sesotho, English',
    currency: 'Loti (LSL)',
    camera: [
      "<strong>100% Gen 3（白色無天線車）</strong>",
      '使用白色相機車拍攝街景',
      '覆蓋有限 — 主要是主要道路和城鎮',
      '覆蓋集中在 Maseru 和主要公路',
      '無 Gen 2 或 Gen 4 覆蓋',
      '部分山區有 Trekker 覆蓋',
    ],
    car: [
      'Gen 3：標準白色轎車',
      '無特殊 snorkel、膠帶或天線',
      '靠左行駛'
    ],
    roads: [
      '道路編號有時無字母前綴（可與 Botswana/Eswatini 區分）',
      '有些 A 前綴道路編號存在，但許多標誌完全沒有前綴',
      '狹窄山路有陡峭落差 — 戲劇性的回頭彎',
      '鋪面和未鋪面道路混合；鄉村道路常為碎石/泥土',
      '道路標線類似 South Africa（<strong>黃色外線 + 白色中線</strong>）',
      '山口常見且有急彎',
      '城鎮中有減速帶',
      '部分道路因降雪在冬季無法通行',
    ],
    landscape: [
      '無樹山脈 — 標誌性景觀特徵；光禿、桌面狀',
      '全境多山：「天空之國」— 最低點海拔 1,400 米',
      '山上覆蓋短剪草（不像 Eswatini 的長草）',
      '裸露的岩石地形和水平岩石山脊線',
      '無顯著樹木覆蓋 — 與 Eswatini 和 South Africa 明顯不同',
      '夏季綠色，冬季棕/金色',
      '鄉村地區可見傳統圓形巴蘇陀小屋（rondavel）',
      '冬季月份有雪山頂',
      '龍舌蘭植物在鄉下常見 — 良好的猜測依據',
      '道路上常見散養牲畜（牛最常見，也有馬、驢）',
    ],
    signs: [
      '標誌上有英語和塞索托語',
      '鄉村山區標誌有限',
      '主要道路沿線有距離標記',
      '路標遵循 SADC（南部非洲）標準',
      '城鎮名稱標誌常為雙語',
      '紅色圓形邊框的速限標誌',
    ],
    plates: [
      '白色車牌藍色字',
      '有時透過 GeoGuessr 模糊可見藍色色調',
      '細長車牌格式',
      '因解析度較低車牌在覆蓋中較不易辨識',
      '政府車牌可能不同',
    ],
    unique: [
      '巴蘇陀毯子：當地人穿著獨特的彩色毯子，尤其在鄉村/寒冷地區',
      '鄉村地區的傳統圓形小屋（rondavel）',
      '無樹光禿的山脈配短草 = Lesotho，不是 Eswatini（有樹和較長的草）',
      '完全被 South Africa 包圍 — 整個國家被一個國家環繞',
      '道路上有時可見騎馬的山地騎手（巴蘇陀馬）',
      '全球最低點最高的國家（1,400 米）',
      '路標無字母前綴 = 大概是 Lesotho（相對 Botswana 的 A、Eswatini 的 MR）',
      '可見羊毛和馬海毛產業：山路上有綿羊和山羊',
    ],
    tips: [
      '無樹山脈 + 巴蘇陀毯子 + 圓形小屋 = 立即辨識 Lesotho',
      '無樹 + 短草 + 山脈 = Lesotho；有樹 + 長草 + 丘陵 = Eswatini',
      '如果被山脈包圍、靠左行駛且無南非荷蘭語標誌，想到 Lesotho',
      'Maseru 是首都和覆蓋最密集的地區 — 唯一重要城市',
      '像 Sani Pass 這樣的山口是標誌性的 trekker 覆蓋地點',
      'Lesotho 全境海拔 1,400 米以上 — 如果地形看起來高且光禿，很可能是 Lesotho',
      "🔗 <a href=\"https://www.google.com/maps/@-29.3142,27.4833,3a,75y,90t\" target=\"_blank\" style=\"color:var(--accent-blue)\">Street View 範例（Maseru）</a>"
    ],
  },

'eswatini': {
    name: 'Eswatini',
    localName: 'eSwatini (Swaziland)',
    flag: '\u{1F1F8}\u{1F1FF}',
    region: 'africa',
    drivingSide: 'left',
    tld: '.sz',
    phoneCode: '+268',
    language: 'siSwati (Swazi), English',
    currency: 'Lilangeni (SZL)',
    camera: [
      "<strong>100% Gen 3</strong>（白色無天線車）",
      '覆蓋有限，集中在主要道路和城市',
      '覆蓋主要在 Mbabane 和 Ezulwini Valley 走廊',
      '小國，覆蓋範圍相對緊湊',
    ],
    car: [
      'Gen 3：標準轎車',
      '無特殊車輛辨識特徵',
      '靠左行駛'
    ],
    roads: [
      '道路編號以 MR（Main Road）為前綴 — 南部非洲 Eswatini 獨有',
      'MR 前綴可與 South Africa（N/M/R）、Botswana（A）和 Lesotho（無前綴）區分',
      '主要路線道路狀況大致合理',
      '全國使用 SADC 標準路標',
      '<strong>黃色外線</strong>、白色中線（有時三條白色中線），類似 South Africa',
      '低地道路上有甘蔗卡車交通',
      '城市地區減速帶常見',
    ],
    landscape: [
      '三個海拔區域：高地（西部，1,500 米以上）、中地和低地（東部，200 米）',
      '綠色丘陵地形有樹木 — 比 Lesotho 植被更多',
      '高地有松樹和桉樹種植園（整齊排列的樹木）',
      '低地有甘蔗田',
      '全國大部分地區有稀薄的草地植被',
      '比 Lesotho 更多樹木和更長的草',
      '起伏丘陵，不是 Lesotho 那種戲劇性的光禿山脈',
      '文化村落中的傳統蜂巢形小屋（emaSwati）',
    ],
    signs: [
      '所有官方標誌為英語',
      '部分當地/文化標誌上有西史瓦蒂語',
      'SADC 標準法規和警告標誌',
      '距離標記以公里計',
      '主要道路路標有 MR 前綴',
      '傳統活動和市場的文化標誌',
    ],
    plates: [
      '透過模糊車牌底部呈現淺綠色',
      '白色車牌有黃綠色元素',
      '外觀類似 South Africa 車牌但有綠色元素',
      '比典型非洲車牌更窄',
      '政府車輛 SD 前綴',
    ],
    unique: [
      'MR 道路前綴在南部非洲是 Eswatini 獨有',
      '綠色丘陵地形有樹木 = Eswatini（相對 Lesotho：無樹山脈）',
      '高地有松樹/桉樹種植園（整齊排列的人工樹木）',
      '透過模糊可見車牌上的淺綠色元素',
      '東部低地有甘蔗田',
      '深棕色木質電線桿，側面有 1-3 個絕緣體',
      '南半球最小的國家 — 緊湊的地理',
      '細長的深棕色木質電線桿是特徵',
    ],
    tips: [
      '路標上的 MR = 立即辨識 Eswatini — 最可靠的單一辨識特徵',
      '有樹的綠色丘陵 = Eswatini；光禿無樹的山脈 = Lesotho',
      '如果在南部非洲看到松樹/桉樹種植園，想到 Eswatini 高地',
      '甘蔗田 + 低地 = 東部 Eswatini',
      '淺綠色車牌顏色可與 South Africa 和 Lesotho 區分',
      'Mbabane 和 Ezulwini Valley 是覆蓋最多的地區',
      "🔗 <a href=\"https://www.google.com/maps/@-26.3054,31.1367,3a,75y,90t\" target=\"_blank\" style=\"color:var(--accent-blue)\">Street View 範例（Mbabane）</a>"
    ],
  },

'mauritius': {
    name: 'Mauritius',
    localName: 'Maurice',
    flag: '\u{1F1F2}\u{1F1FA}',
    region: 'africa',
    drivingSide: 'left',
    tld: '.mu',
    phoneCode: '+230',
    language: 'English, French, Mauritian Creole',
    currency: 'Mauritian Rupee (MUR)',
    camera: [
      "<strong>Gen 3 為主 + 部分 Gen 4</strong>（⚠️ 確切比例待驗證）",
      '作為小島國覆蓋良好',
      '大部分主要道路和城鎮有覆蓋',
      '部分海岸和海灘有 trekker 覆蓋',
      '使用標準 Google 相機車',
    ],
    car: [
      'Gen 3：標準轎車',
      '靠左行駛（英國殖民遺產）',
      '無特殊車輛辨識特徵'
    ],
    roads: [
      'M 編號高速公路和 A/B 編號主要道路',
      '靠左行駛配英式圓環',
      '全島道路品質普遍良好',
      '許多道路沿線有甘蔗田',
      '村莊中減速帶常見',
      '舊聚落中道路狹窄',
      'Port Louis 附近有現代雙向分隔道路',
    ],
    landscape: [
      '印度洋中的小型火山島',
      '被珊瑚礁和碧綠潟湖環繞',
      '甘蔗田主導農業景觀',
      '中央高原有殘留森林',
      '山峰：Pieter Both、Le Morne Brabant',
      '熱帶植被：棕櫚樹、鳳凰木',
      '印度教寺廟、清真寺和教堂反映多元文化社會',
      'Port Louis 有彩色殖民時期建築',
    ],
    signs: [
      '官方標誌上有英語和法語',
      '毛里求斯克里奧爾語（法語系）廣泛使用但標誌上較少',
      '寺廟標誌上可見印地語和坦米爾文',
      '距離標誌以公里計',
      '英國風格路標（前殖民地）',
      '電信品牌：Mauritius Telecom（橙色）',
    ],
    plates: [
      '白色前車牌、黃色後車牌',
      '格式：字母 + 數字',
      '計程車車牌為不同顏色',
      '車牌遵循靠左行駛國家模式',
      '透過 GeoGuessr 模糊相對可見',
    ],
    unique: [
      '印度洋中靠左行駛的小型熱帶島嶼 = 縮小到 Mauritius 或 Reunion',
      '熱帶島嶼上英法雙語 + 靠左行駛 = Mauritius（Reunion 靠右行駛）',
      '印度教寺廟與教堂和清真寺並存 = 多元文化的 Mauritius',
      '甘蔗田到處都是 — 比任何其他島嶼更廣泛',
      '印度/印度教文化元素（寺廟、印地語文字）在非洲罕見',
      '當地產品和標誌上可見渡渡鳥圖像/品牌',
      '島上許多地方可見火山峰',
    ],
    tips: [
      '在英法雙語的熱帶印度洋島嶼上靠左行駛 = Mauritius',
      'Reunion 靠右行駛且僅法語 — Mauritius 靠左行駛配英語',
      '印度教寺廟和坦米爾/印地語文字 = Mauritius（大量印度裔人口）',
      '甘蔗田到處都是 — 留意道路旁高大的綠色莖稈',
      '小島：覆蓋很快繞一圈，通常可從某處看到海',
      'Port Louis 是首都和覆蓋最密集的城市地區',
      "🔗 <a href=\"https://www.google.com/maps/@-20.1609,57.5012,3a,75y,90t\" target=\"_blank\" style=\"color:var(--accent-blue)\">Street View 範例（Port Louis）</a>"
    ],
  },

'mozambique': {
    name: 'Mozambique',
    localName: 'Mocambique',
    flag: '\u{1F1F2}\u{1F1FF}',
    region: 'africa',
    drivingSide: 'left',
    tld: '.mz',
    phoneCode: '+258',
    language: 'Portuguese',
    currency: 'Metical (MZN)',
    camera: [
      "<strong>56.2% Gen 3 + 43.7% Gen 4</strong>",
      '主要公路沿線有部分車輛覆蓋（EN1 南北公路）',
      '部分地區有社群貢獻和非官方覆蓋',
      '覆蓋主要沿海岸和大城市（Maputo、Beira）',
      '有覆蓋的地方為 Gen 3',
      '品質因覆蓋來源而異',
    ],
    car: [
      '涵蓋來源多樣',
      '靠左行駛',
      '無特殊 Google car meta'
    ],
    roads: [
      'EN 編號國道（Estrada Nacional）：EN1 是主要南北公路',
      '葡萄牙語道路命名慣例（Estrada = 道路）',
      '靠左行駛（儘管使用葡萄牙語，受英國/南非影響）',
      '道路品質不一：Maputo 附近有現代公路，鄉村道路惡化',
      '鄉村地區有紅色紅土路',
      '海岸道路沿線有腰果樹和椰子樹',
      '城鎮中有減速帶（lombas）',
    ],
    landscape: [
      '漫長的印度洋海岸線配熱帶海灘',
      '南部為平坦沿海平原；北部和西部地勢較高',
      '南部和中部地區有猴麵包樹',
      '沿海的椰子棕櫚種植園',
      '腰果園廣泛分佈',
      '河口三角洲有紅樹林',
      '北部的 Malawi/Niassa 湖',
      '熱帶和亞熱帶植被',
    ],
    signs: [
      '所有標誌上都有葡萄牙語 — 東/南部非洲唯一使用葡萄牙語的國家',
      '葡語文字："Estrada"（道路）、"Cidade"（城市）、"Perigo"（危險）、"Pare"（停）',
      '葡萄牙語是強力辨識特徵：很少非洲國家使用葡萄牙語',
      '商業標誌為葡萄牙語',
      'Vodacom 和 mCel/Tmcel 電信品牌',
      '距離標誌以公里計',
    ],
    plates: [
      '白色車牌 M 前綴',
      '格式：M + 字母 + 數字',
      'M 前綴表示 Mozambique',
      '車牌可能有藍色左側條紋',
      '政府和軍用車牌不同',
    ],
    unique: [
      '東/南部非洲的葡萄牙語 = Mozambique（唯一一個）',
      '靠左行駛 + 葡萄牙語 = Mozambique（全球獨特組合）',
      '大多數葡語國家靠右行駛；Mozambique 是例外',
      'EN 道路編號（Estrada Nacional）確認為葡語國家',
      '椰子棕櫚成排的海岸道路是特徵',
      '葡萄牙殖民建築和當地建築風格混合',
      '國旗上有 AK-47（可見於政府建築）',
      'Maputo 有更現代的基礎設施；鄉村地區非常不同',
    ],
    tips: [
      '葡萄牙文 + 靠左行駛 = Mozambique，確定',
      '全球唯一靠左行駛的葡語國家',
      '帶葡語名稱的 EN 道路編號 = Mozambique',
      '沿海位置有棕櫚樹 + 葡語 = Mozambique，不是 Angola',
      'Maputo 和 Beira 是最可能的城市出生點',
      '不要與 Brazil 混淆（葡語但景觀非常不同且靠右行駛）',
      "🔗 <a href=\"https://www.google.com/maps/@-25.9692,32.5732,3a,75y,90t\" target=\"_blank\" style=\"color:var(--accent-blue)\">Street View 範例（Maputo）</a>"
    ],
  },

'malawi': {
    name: 'Malawi',
    localName: 'Malawi',
    flag: '\u{1F1F2}\u{1F1FC}',
    region: 'africa',
    drivingSide: 'left',
    tld: '.mw',
    phoneCode: '+265',
    language: 'English, Chichewa',
    currency: 'Kwacha (MWK)',
    camera: [
      "<strong>Gen 3 為主</strong>（⚠️ 確切比例待驗證）",
      '有覆蓋的地方為 Gen 3 相機',
      '旅遊景點有部分 trekker 覆蓋',
      '覆蓋集中在 Malawi 南部和 Malawi 湖沿岸',
      '社群貢獻和非官方覆蓋持續擴大',
      '影像品質普遍低於鄰國',
    ],
    car: [
      '標準轎車',
      '靠左行駛',
      '無特殊車輛辨識特徵'
    ],
    roads: [
      'M 編號主要道路和 S 編號次要道路',
      '靠左行駛',
      '主要公路（M1）南北貫穿全國',
      '道路品質不一：主要路線鋪面，鄉村道路為泥土/碎石',
      '自行車計程車（配乘客座位的自行車）常見',
      '每個城鎮都有減速帶',
      '窄路且路肩極小',
    ],
    landscape: [
      'Malawi 湖主導東部邊界（非洲大湖之一）',
      '裂谷地形有陡峭斷崖',
      '綠色植被：Malawi 被稱為「非洲的溫暖之心」',
      '南部高地有茶園（Mulanje 地區）',
      'Malawi 中部有菸草田',
      'Mulanje 山：壯觀的花崗岩山塊',
      '相比周圍國家地形更多丘陵',
      '雨季時有鬱鬱蔥蔥的熱帶植被',
    ],
    signs: [
      '所有官方標誌為英語',
      '部分當地標誌上有齊切瓦語',
      '鄉村地區標誌有限',
      'TNM 和 Airtel 電信品牌常見',
      '道路沿線教堂和學校標誌常見',
      '速限以 km/h 標示',
    ],
    plates: [
      '部分覆蓋中可見 MW 前綴的白色車牌',
      '藍色政府車牌',
      '車牌為較窄格式',
      '因覆蓋品質能見度有限',
    ],
    unique: [
      '可見 Malawi 湖 = 強力指標（非洲第三大湖）',
      '英語 + 靠左行駛 + 東非內陸國 + 鬱鬱蔥蔥 = 縮小到 Malawi',
      'M/S 道路編號系統',
      '配乘客座位的自行車計程車非常常見且有辨識度',
      '高地的茶園（Mulanje）是特徵',
      'Malawi 中部可見菸草乾燥穀倉',
      '非洲最貧窮的國家之一：基礎設施反映了這一點',
      '「非洲的溫暖之心」— 普遍綠色且多丘陵',
    ],
    tips: [
      'Malawi 湖沿岸覆蓋非常有辨識度 — 可見大藍湖',
      '英語 + 靠左行駛 + 東非綠色丘陵地形 = 想到 Malawi',
      '配乘客座位的自行車計程車在這裡比其他地方都常見',
      'M/S 道路編號有助與其他東非國家區分',
      'Mulanje 山周圍南部高地的茶園',
      '比 Kenya 或 South Africa 更小且覆蓋更少 — 出生點有限',
      "🔗 <a href=\"https://www.google.com/maps/@-13.9626,33.7741,3a,75y,90t\" target=\"_blank\" style=\"color:var(--accent-blue)\">Street View 範例（Lilongwe）</a>"
    ],
  },

'zambia': {
    name: 'Zambia',
    localName: 'Zambia',
    flag: '\u{1F1FF}\u{1F1F2}',
    region: 'africa',
    drivingSide: 'left',
    tld: '.zm',
    phoneCode: '+260',
    language: 'English, Bemba, Nyanja, Tonga + others',
    currency: 'Kwacha (ZMW)',
    camera: [
      "<strong>100% Gen 3</strong>",
      '車輛覆蓋使用 Gen 3 相機',
      '覆蓋主要沿主要公路和 Lusaka/Livingstone',
      'Victoria Falls 有部分 trekker 覆蓋',
      '沿大東路和大北路有覆蓋',
      '品質因地區而異',
    ],
    car: [
      '標準轎車',
      '靠左行駛',
      '無特殊車輛辨識特徵'
    ],
    roads: [
      'T 編號幹道和 M 編號主要道路',
      '靠左行駛',
      'T2（大東路）、T3（大北路）是主要路線',
      '道路品質：主要公路普遍良好（中國建造路段）',
      '鄉村道路常未鋪面 red laterite',
      '減速帶（震動帶）非常常見',
      '穿越灌木叢的長直道路',
      '部分主要公路有收費站',
    ],
    landscape: [
      '高原台地（平均海拔 1,000-1,300 米）',
      '相對平坦有緩丘和河谷',
      '熱帶稀樹草原林地（miombo）主導景觀',
      '南部邊界的 Victoria Falls（與 Zimbabwe 共享）',
      'Kafue、Zambezi 和 Luangwa 河流穿過地形',
      '北部銅帶地區：礦業城鎮',
      '雨季綠色，冬季乾燥棕色',
      '景觀中白蟻丘常見',
    ],
    signs: [
      '所有官方標誌為英語',
      '部分商業標誌上有當地語言（Bemba、Nyanja）',
      'Airtel、MTN 和 Zamtel 電信品牌',
      '速限以 km/h 標示',
      '菱形警告標誌',
      '主要公路沿線有距離標記',
      '銅帶地區的礦業公司標誌',
    ],
    plates: [
      '白色車牌藍色標記',
      '格式：字母 + 數字（如 ABB 1234）',
      'ZM 在車牌上不一定顯眼',
      'Government vehicles have GRZ（尚比亞共和國政府）車牌',
      '計程車車牌可能為不同顏色',
    ],
    unique: [
      'T 編號幹道（T2、T3 等）是 Zambia 的特徵',
      'Victoria Falls trekker 覆蓋 = Zambia 或 Zimbabwe 側',
      '英語 + 靠左行駛 + miombo 林地稀樹草原 = Zambia',
      '銅帶礦業城鎮有獨特的工業景觀',
      '相對平坦的高原地形與多丘陵的 Malawi 區分',
      '雨季綠色，旱季明顯棕色',
      '中國建造的公路路段有時可見中文字',
      '主要路線的收費站相對較新',
    ],
    tips: [
      'T 道路編號系統有助確認 Zambia',
      '英語 + 靠左行駛 + 南/東非平坦稀樹草原 = 想到 Zambia',
      'Victoria Falls 出生點可能是 Zambia 或 Zimbabwe — 尋找其他線索',
      'miombo 林地是特徵：相對平坦地形上散佈的樹木',
      '基礎設施上的中文字可能表示 Zambia 的中國建造公路',
      'Lusaka 是覆蓋最密集的城市',
      "🔗 <a href=\"https://www.google.com/maps/@-15.3875,28.3228,3a,75y,90t\" target=\"_blank\" style=\"color:var(--accent-blue)\">Street View 範例（Lusaka）</a>"
    ],
  },

'zimbabwe': {
    name: 'Zimbabwe',
    localName: 'Zimbabwe',
    flag: '\u{1F1FF}\u{1F1FC}',
    region: 'africa',
    drivingSide: 'left',
    tld: '.zw',
    phoneCode: '+263',
    language: 'English, Shona, Ndebele',
    currency: 'Zimbabwe Gold (ZiG), USD widely used',
    camera: [
      "<strong>100% Gen 3（白色無天線車）</strong>",
      'Harare 和主要公路沿線有部分車輛覆蓋',
      'Victoria Falls（Zimbabwe 側）有 Trekker 覆蓋',
      '有覆蓋的地方為 Gen 3',
      '部分旅遊區有社群貢獻覆蓋',
      '覆蓋比 South Africa 稀疏',
    ],
    car: [
      '標準轎車',
      '靠左行駛',
      '無特殊車輛辨識特徵'
    ],
    roads: [
      'A 編號道路（A1-A9 等）為主要路線和省道',
      '靠左行駛',
      '因經濟挑戰道路品質已大幅惡化',
      'Harare-Bulawayo-Mutare 之間的主要公路仍可通行',
      '即使主要道路上也常有坑洞',
      '城鎮中有減速帶',
      '主要道路上有白色中線',
    ],
    landscape: [
      '高原台地（平均 1,200 米）稱為 Highveld',
      '東部高地：多山、綠色，有松樹/桉樹森林',
      '大辛巴威遺址：古代石城（聯合國教科文組織遺產）',
      '平衡石（Matobo Hills）— 獨特的地質構造',
      '北部邊界的 Victoria Falls',
      '低地有稀樹草原和灌木叢',
      '可見菸草和玉米種植',
      '景觀中散佈的岩丘（kopje）',
    ],
    signs: [
      '所有官方標誌為英語',
      '部分當地標誌上有修納語和恩德貝萊語',
      'Econet 和 NetOne 電信品牌',
      '速限以 km/h 標示',
      '指向大辛巴威、Victoria Falls 的旅遊標誌',
      '基礎設施標誌顯示老化和磨損',
      '貨幣標誌可能顯示多種貨幣（USD、ZiG）',
    ],
    plates: [
      '白色車牌左側有藍色條紋',
      '格式：3 字母 + 4 數字（如 ADR 1234）',
      '政府車輛有不同前綴',
      '車牌可能有磨損/老化',
      '商用車有黃色車牌',
    ],
    unique: [
      'Victoria Falls trekker coverage (Zimbabwe side) -- look for "Victoria Falls" signs vs Zambia\'s "Mosi-oa-Tunya"',
      '靠左行駛 + 英語但道路基礎設施惡化 = 可能是 Zimbabwe',
      '大辛巴威遺址是獨特的 trekker 地點',
      '平衡石（Matobo Hills）是獨特的地質特徵',
      '價格標誌上可見多種貨幣使用（USD、ZiG）',
      '英語 + 靠左行駛 + 有岩丘的高原',
      '基礎設施比 South Africa 或 Botswana 更破舊',
      'Econet 品牌（藍色）是主要電信提供商',
    ],
    tips: [
      'Victoria Falls 標誌寫 "Victoria Falls"（不是 "Mosi-oa-Tunya"）表示 Zimbabwe 側',
      '英語 + 靠左行駛 + 南部非洲惡化的道路 = 考慮 Zimbabwe',
      '比 South Africa 更破舊但道路風格類似 — 基礎設施狀況是線索',
      'Harare 是最可能的城市出生點',
      '東部高地（Chimanimani、Nyanga）有綠色山地地形',
      '平衡石和岩丘是獨特的景觀特徵',
      "🔗 <a href=\"https://www.google.com/maps/@-17.8252,31.0335,3a,75y,90t\" target=\"_blank\" style=\"color:var(--accent-blue)\">Street View 範例（Harare）</a>"
    ],
  },

'dr-congo': {
    name: 'DR Congo',
    localName: 'Republique Democratique du Congo',
    flag: '\u{1F1E8}\u{1F1E9}',
    region: 'africa',
    drivingSide: 'right',
    tld: '.cd',
    phoneCode: '+243',
    language: 'French, Lingala, Swahili, Kikongo, Tshiluba',
    currency: 'Congolese Franc (CDF)',
    camera: [
      "<strong>100% Gen 3（白色 pickup truck）</strong>",
      '主要為社群貢獻和非官方覆蓋',
      'Kinshasa 和主要路線沿線有部分覆蓋',
      '部分地點有 Trekker 步行覆蓋',
      '覆蓋品質普遍低',
      '非洲覆蓋最少的大國之一',
    ],
    car: [
      '無標準 Google 街景車 meta',
      '各種社群貢獻車輛',
      'Trekker coverage in some areas',
      '無一致的 snorkel、膠帶或跟拍車',
    ],
    roads: [
      '理論上有 RN 編號國道（Route Nationale），但標誌罕見',
      '許多地區道路基礎設施嚴重惡化',
      '靠右行駛',
      '許多道路未鋪面 — 紅色紅土泥路常見',
      'Kinshasa 附近有部分中國建造的公路',
      'Kinshasa 交通擁堵嚴重',
      '機車和自行車為常見交通工具',
    ],
    landscape: [
      '茂密的熱帶雨林（剛果盆地）— 世界第二大雨林',
      '剛果河：部分覆蓋中可見的大河',
      '全年鬱鬱蔥蔥的熱帶綠色植被',
      '中央盆地非常平坦；東部有火山（維龍加）',
      'Kinshasa：沿剛果河的大規模城市蔓延',
      '鄉村地區：被茂密森林包圍的村莊',
      '未鋪面道路上紅色土壤/紅土非常突出',
      '東部的基伍湖（與 Rwanda 邊界）',
    ],
    signs: [
      '官方標誌上使用法語',
      'Kinshasa 地區可見林加拉語',
      '東部 DRC 可見斯瓦希里語',
      '標誌有限 — 許多地區完全沒有標誌',
      'Vodacom 和 Airtel 電信品牌',
      '政治和宗教標誌常見',
      '法語文字："Route Nationale"、"Arret"、"Danger"',
    ],
    plates: [
      '使用各種車牌格式',
      '部分類別有藍色車牌',
      '因覆蓋品質能見度有限',
      '政府車牌有 CD 前綴',
      '車牌常狀況不佳',
    ],
    unique: [
      '茂密熱帶森林 + 法語 + 差的道路基礎設施 = 考慮 DR Congo',
      '法語 + Senegal/Cameroon 以東 + 熱帶雨林',
      'Kinshasa 位於剛果河對面 Brazzaville（Republic of Congo）正對面',
      '即使國道上道路狀況也極差',
      '東部 DRC 靠近 Rwanda 邊境的維龍加火山',
      '覆蓋最少的大國之一 — 出生點非常少',
      '剛果河是世界上最大的河流之一',
    ],
    tips: [
      '法語 + 茂密熱帶森林 + 非常差的道路 = 可能是 DR Congo',
      '非常罕見的出生點 — 只在有強力證據時才猜 DR Congo',
      '東部 DRC 靠近基伍湖可能與 Rwanda 混淆 — 但道路差得多',
      'Kinshasa 是最可能的城市出生點',
      '不要與 Republic of Congo（Brazzaville）混淆 — 它們是不同國家',
      '社群貢獻/非官方覆蓋使 meta 線索在這裡不可靠',
      "🔗 <a href=\"https://www.google.com/maps/@-4.4419,15.2663,3a,75y,90t\" target=\"_blank\" style=\"color:var(--accent-blue)\">Street View 範例（Kinshasa）</a>"
    ],
  },

'republic-of-congo': {
    name: 'Republic of Congo',
    localName: 'Republique du Congo',
    flag: '\u{1F1E8}\u{1F1EC}',
    region: 'africa',
    drivingSide: 'right',
    tld: '.cg',
    phoneCode: '+242',
    language: 'French, Lingala, Kikongo',
    currency: 'Central African CFA Franc (XAF)',
    camera: [
      "<strong>99.5% Gen 3（2025前僅 Trekker）</strong>",
      '主要為社群貢獻/非官方覆蓋',
      'Brazzaville 和 Pointe-Noire 有部分覆蓋',
      '僅有 Trekker 和非標準覆蓋',
      '全球覆蓋最少的國家之一',
      'Quality varies significantly',
    ],
    car: [
      '無標準 Google 街景車 meta',
      '各種來源的社群貢獻覆蓋',
      '無一致可辨識的車輛特徵',
      '有覆蓋的地方為 Trekker',
    ],
    roads: [
      'RN 編號國道（Route Nationale）',
      '靠右行駛',
      'Brazzaville 和 Pointe-Noire 以外道路品質差',
      '許多道路未鋪面，尤其是大城市以外',
      '有限的公路基礎設施',
      '使用法語道路術語',
    ],
    landscape: [
      '熱帶雨林覆蓋大部分國土',
      '剛果河及其支流',
      'Brazzaville：剛果河畔城市，正對 Kinshasa（DRC）',
      'Pointe-Noire：石油工業沿海城市',
      '地形平坦到微幅起伏',
      '全年綠色熱帶植被',
      '南部有稀樹草原',
    ],
    signs: [
      '法語 on signs',
      '當地標誌上有林加拉語和基剛果語',
      '鄉村地區標誌有限',
      'MTN 和 Airtel 電信品牌',
      '法語文字為標準',
    ],
    plates: [
      '各種車牌格式',
      'Republic of Congo 的 CG 標記',
      '覆蓋中能見度有限',
      '政府車牌有不同格式',
    ],
    unique: [
      'Brazzaville 位於剛果河對面 Kinshasa — 世界上最近的兩個首都',
      '法語 + 熱帶 + 剛果河地區',
      'Pointe-Noire 地區有石油工業存在',
      '非常罕見的出生點 — 覆蓋甚至比 DR Congo 少',
      '通過是較小的「另一個剛果」來與 DR Congo 區分',
      '.cg 網域 vs DR Congo 的 .cd',
    ],
    tips: [
      '極為罕見的出生點 — 只在有強力證據時才猜',
      '法語 + 熱帶 + 剛果河地區 = 可能是任一剛果',
      'Brazzaville-Kinshasa 隔河相望 — 看看是哪一側',
      '海岸附近的石油基礎設施 = Pointe-Noire',
      '標誌上可見 .cg 網域 vs .cd（DR Congo）',
      '除非沒有其他選項適合，否則不要猜 Republic of Congo',
      "🔗 <a href=\"https://www.google.com/maps/@-4.2634,15.2429,3a,75y,90t\" target=\"_blank\" style=\"color:var(--accent-blue)\">Street View 範例（Brazzaville）</a>"
    ],
  },

'cameroon': {
    name: 'Cameroon',
    localName: 'Cameroun',
    flag: '\u{1F1E8}\u{1F1F2}',
    region: 'africa',
    drivingSide: 'right',
    tld: '.cm',
    phoneCode: '+237',
    language: 'French, English',
    currency: 'Central African CFA Franc (XAF)',
    camera: [
      "<strong>100% Gen 3（獨特粗天線）</strong>",
      '社群貢獻和非官方覆蓋 in various areas',
      '部分 trekker 覆蓋',
      '覆蓋品質差異顯著',
      '與 Ghana/Nigeria 等西非鄰國相比覆蓋不密集',
      '有官方覆蓋的地方為 Gen 3',
    ],
    car: [
      '標準轎車',
      '無特殊車輛辨識特徵'
    ],
    roads: [
      'N 編號國道和省道',
      '靠右行駛',
      '道路品質不一：城市中鋪面，鄉村地區惡化',
      '鬱鬱蔥蔥的綠色植被 + 差的道路品質組合常見',
      '城鎮中有減速帶',
      '機車計程車（okada/moto）非常常見',
      'Douala 和 Yaounde 附近有雙向分隔道路段',
    ],
    landscape: [
      '地形極為多樣：「非洲的縮影」',
      'Cameroon 山（4,095 米）：西非最高峰',
      '南部有茂密的熱帶雨林',
      '極北部有乾燥稀樹草原和薩赫勒',
      '西部有草地和火山高地（Bamenda 高地）',
      'Douala 附近有海岸紅樹林',
      '極北部的 Waza 國家公園：乾燥稀樹草原',
      '南部植被綠色茂密；北部更乾燥',
    ],
    signs: [
      '雙語國家：法語（70%）和英語（30%）',
      '西北部和西南部為英語區（英語系 Cameroon）',
      '其他 8 個地區為法語區（法語系 Cameroon）',
      '部分地區有雙語標誌："Arrêt / Stop"',
      '混合城市地區可見 Camfranglais（法英混合語）',
      'Orange 和 MTN 電信品牌',
      'Yaounde 和 Douala 以法語為主',
    ],
    plates: [
      '各種車牌格式 with regional codes',
      'CE = Centre、LT = Littoral 等',
      '車牌常狀況不佳',
      '政府車牌有不同格式',
      '計程車車牌為不同顏色',
    ],
    unique: [
      '中/西非法英雙語國家 = Cameroon',
      '因從沙漠到雨林的地形多樣性被稱為「非洲的縮影」',
      '中非唯一同時以法語和英語為官方語言的國家',
      'Mount Cameroon visible from coastal areas',
      '如果在熱帶西/中非看到法語和英語文字 = 可能是 Cameroon',
      '城市中機車計程車非常常見',
      '綠色熱帶植被 + 法英雙語',
    ],
    tips: [
      '中/西非法英雙語標誌 = Cameroon',
      '西北/西南地區有英語標誌 — 其餘為法語',
      '鬱鬱蔥蔥的綠色植被 + 差的道路 + 法英文字 = 考慮 Cameroon',
      '海岸附近的 Cameroon 山是西非最高點',
      'Yaounde 和 Douala 是最可能的城市出生點',
      '罕見出生點 — 只在雙語線索支持時才猜',
      "🔗 <a href=\"https://www.google.com/maps/@3.848,11.5021,3a,75y,90t\" target=\"_blank\" style=\"color:var(--accent-blue)\">Street View 範例（Yaounde）</a>"
    ],
  },

'ivory-coast': {
    name: 'Ivory Coast',
    localName: "Cote d'Ivoire",
    flag: '\u{1F1E8}\u{1F1EE}',
    region: 'africa',
    drivingSide: 'right',
    tld: '.ci',
    phoneCode: '+225',
    language: 'French',
    currency: 'West African CFA Franc (XOF)',
    camera: [
      "<strong>100% Gen 3（可見黑色引擎蓋）</strong>",
      '社群貢獻和非官方覆蓋 sources',
      '覆蓋持續擴大但仍然稀疏',
      '有官方覆蓋的地方為 Gen 3',
      'Abidjan 覆蓋最密集',
      '部分 trekker 覆蓋 at notable sites',
    ],
    car: [
      '無標準 Google 街景車 meta',
      '各種社群貢獻車輛',
      '無一致的 snorkel、膠帶或跟拍車',
      '覆蓋來自多個來源',
    ],
    roads: [
      'A 編號高速公路和國道',
      '靠右行駛',
      '法語道路命名慣例',
      'Abidjan 和 Yamoussoukro 之間的現代公路',
      '道路品質因地區差異顯著',
      '鄉村地區有紅色紅土路',
      '城市地區圓環常見',
    ],
    landscape: [
      '南部的熱帶森林向北部過渡為稀樹草原',
      '可可和咖啡種植園廣泛（世界最大可可生產國）',
      'Abidjan：現代城市天際線（Plateau 區被稱為「熱帶的曼哈頓」）',
      'Yamoussoukro：和平聖母大殿（世界最大教堂）很有辨識度',
      '沿海的潟湖系統',
      '平坦到微幅起伏的地形',
      '油棕種植園',
      '北部鄉村的傳統泥磚（banco）小屋',
    ],
    signs: [
      '法語 on all official signs',
      '標誌上無英語（不像鄰國 Ghana）',
      '法語文字："Arret"（停）、"Centre Ville"、"Route"',
      'Orange（電信）、MTN 和 Moov 品牌',
      '商業標誌上的 CFA 法郎價格',
      '政治廣告常見',
    ],
    plates: [
      '各種車牌格式',
      '可能有 CI 標記',
      '車牌格式多年來有所變化',
      '計程車車牌可能為不同顏色 (orange)',
      '可用覆蓋中能見度有限',
    ],
    unique: [
      '法語 + 西非 + 靠右行駛 + 熱帶植被 = 縮小到 Ivory Coast',
      'Yamoussoukro 的和平聖母大殿全球獨特（世界最大教堂）',
      'Abidjan Plateau 區有西非不常見的現代高樓',
      '世界最大可可生產國 — 可可種植園可能可見',
      '國旗類似 Ireland（橙白綠）但相反 — 愛爾蘭國旗是綠白橙',
      '與 Senegal 區別：Ivory Coast 更熱帶/多森林，Senegal 更薩赫勒/乾燥',
      'CFA 法郎（與 Senegal 相同貨幣）',
    ],
    tips: [
      '法語 + 熱帶森林 + 西非 = 考慮 Ivory Coast 或 Senegal',
      'Ivory Coast 比 Senegal 更綠且更多森林（Senegal 更乾/更薩赫勒）',
      '和平聖母大殿（Yamoussoukro）= 立即辨識 Ivory Coast',
      'Abidjan 是最可能的出生點 — 現代天際線在西非很有辨識度',
      '無藍色車牌（那是 Senegal）、無膠帶（那是 Ghana）',
      '整體罕見出生點 — Senegal 和 Ghana 更常見得多',
      "🔗 <a href=\"https://www.google.com/maps/@5.36,-4.0083,3a,75y,90t\" target=\"_blank\" style=\"color:var(--accent-blue)\">Street View 範例（Abidjan）</a>"
    ],
  },

'burkina-faso': {
    name: 'Burkina Faso',
    localName: 'Burkina Faso',
    flag: '\u{1F1E7}\u{1F1EB}',
    region: 'africa',
    drivingSide: 'right',
    tld: '.bf',
    phoneCode: '+226',
    language: 'French, Moore, Dioula',
    currency: 'West African CFA Franc (XOF)',
    camera: [
      "<strong>100% Gen 3（黑色 pickup truck）</strong>",
      '主要為社群貢獻/非官方覆蓋',
      '首都 Ouagadougou 有部分覆蓋',
      '著名景點有 Trekker 覆蓋',
      '西非覆蓋最少的國家之一',
      '覆蓋品質不一',
    ],
    car: [
      '無標準 Google 街景車 meta',
      '各種來源的社群貢獻覆蓋',
      '無一致可辨識的特徵',
      '有覆蓋的地方為 Trekker',
    ],
    roads: [
      'RN 編號國道（Route Nationale）',
      '靠右行駛',
      'Ouagadougou 以外道路品質普遍差',
      '許多道路為未鋪面的紅色紅土',
      '機車和自行車交通非常常見',
      '有標誌的地方為法語道路標誌',
      '城鎮中有減速帶',
    ],
    landscape: [
      '平坦半乾旱的薩赫勒地形 — 乾燥稀樹草原',
      '氣候類似 Senegal 北部和 Mali',
      '平坦地形上散佈的樹木',
      '紅/橙色紅土普遍',
      '北部非常乾燥（接近撒哈拉）',
      '南部更綠（幾內亞稀樹草原帶）',
      '景觀中散佈乳木果樹和猴麵包樹',
      '一年大部分時間乾燥多塵的氣氛',
    ],
    signs: [
      '官方標誌上使用法語',
      '當地可見莫西語（Moore）',
      '鄉村地區標誌有限',
      'Orange 和 Airtel 電信品牌',
      '可見 CFA 法郎定價',
      '法語文字為標準',
    ],
    plates: [
      '各種車牌格式',
      '可能有 BF 標記',
      '因覆蓋稀疏，能見度有限',
      '政府和外交車牌不同',
    ],
    unique: [
      '法語 + 平坦薩赫勒地形 + 西非 = 可能是 Burkina Faso、Mali 或 Niger',
      'Ouagadougou 是最易辨識的城市（獨特名稱）',
      '機車交通密度非常高',
      '非常罕見的出生點 — 除非有強力證據否則不要猜',
      '紅色紅土 + 乾燥平坦地形 + 法語',
      '景觀類似 Mali — 非常難區分',
      '市場上可見乳木果產品',
    ],
    tips: [
      '極為罕見的出生點 — 只在有強力證據時才猜',
      '法語 + 平坦薩赫勒景觀 + 西非 = 可能是 Burkina、Mali 或 Niger',
      'Ouagadougou 是唯一可能的城市出生點',
      '大部分地區機車交通多於汽車交通',
      '通過更內陸/更乾燥與 Senegal 區分',
      'CFA 法郎國家看起來都有些相似 — 尋找特定文字/品牌線索',
      "🔗 <a href=\"https://www.google.com/maps/@12.3714,-1.5197,3a,75y,90t\" target=\"_blank\" style=\"color:var(--accent-blue)\">Street View 範例（Ouagadougou）</a>"
    ],
  },

'mali': {
    name: 'Mali',
    localName: 'Mali',
    flag: '\u{1F1F2}\u{1F1F1}',
    region: 'africa',
    drivingSide: 'right',
    tld: '.ml',
    phoneCode: '+223',
    language: 'French, Bambara',
    currency: 'West African CFA Franc (XOF)',
    camera: [
      "<strong>100% Tripod 覆蓋</strong> — 普通相機架在三腳架上拍攝",
      '僅 10 個小型步行街景，分布在 7 個地點',
      '覆蓋有動態模糊和略微飽和的顏色，帶有「超凡脫俗」的外觀',
      '幾乎所有覆蓋都以歷史清真寺為中心（室內+室外）',
      '⚠️ 直接記住各處景觀外觀比學國家線索更實用',
    ],
    car: [
      '無街景車 — 全部為三腳架拍攝'
    ],
    roads: [
      'RN 編號國道',
      '靠右行駛',
      'Bamako 以外道路品質差',
      '許多道路為未鋪面小路，尤其在撒哈拉北部',
      '尼日河提供替代交通',
      '機車和驢子交通常見',
      '法語道路術語',
    ],
    landscape: [
      '撒哈拉沙漠主導國家北部三分之二',
      '中部的薩赫勒帶：乾燥草地',
      '尼日河谷：更綠有農業',
      'Mali 南部：有更多植被的幾內亞稀樹草原',
      '全境地形平坦',
      '北部有沙丘',
      '泥磚建築很有辨識度：Djenne 大清真寺（標誌性）',
      '多貢地區：壯觀的砂岩懸崖和斷崖',
    ],
    signs: [
      '官方標誌上使用法語',
      '商業標誌上有班巴拉語和其他當地語言',
      '全國大部分地區標誌有限',
      'Orange 和 Malitel 電信品牌',
      '法語文字為標準 where signs exist',
      '伊斯蘭/阿拉伯文字可能與法語並列出現',
    ],
    plates: [
      '各種車牌格式',
      '可能有 RMM（Republique du Mali）標記',
      '因覆蓋稀疏，能見度有限',
      '政府車牌不同',
    ],
    unique: [
      'Djenne 大清真寺（泥磚、標誌性形狀）= 立即辨識 Mali',
      'Timbuktu trekker 覆蓋 = Mali',
      '法語 + 撒哈拉/薩赫勒 + 西非 = 可能是 Mali、Burkina 或 Niger',
      '多貢懸崖斷崖景觀是獨特的',
      '泥磚蘇丹-薩赫勒建築（平屋頂、木刺牆壁）',
      '尼日河流經全國',
      '整體非常罕見的出生點',
    ],
    tips: [
      'Djenne 大清真寺 = 立即辨識 Mali',
      'Timbuktu trekker 出生點 = Mali',
      '法語 + 西非極度乾燥/沙漠景觀 = 考慮 Mali',
      '泥磚蘇丹-薩赫勒建築有助與鄰國區分',
      'Bamako 是唯一可能的城市出生點',
      '非常罕見 — 只在有強力證據時才猜',
      "🔗 <a href=\"https://www.google.com/maps/@12.6392,-8.0029,3a,75y,90t\" target=\"_blank\" style=\"color:var(--accent-blue)\">Street View 範例（Bamako）</a>"
    ],
  },

'guinea': {
    name: 'Guinea',
    localName: 'Guinee',
    flag: '\u{1F1EC}\u{1F1F3}',
    region: 'africa',
    drivingSide: 'right',
    tld: '.gn',
    phoneCode: '+224',
    language: 'French, Fula, Malinke, Susu',
    currency: 'Guinean Franc (GNF)',
    camera: [
      "<strong>100% Gen 3</strong>",
      '主要為社群貢獻/非官方覆蓋',
      '首都 Conakry 有部分覆蓋',
      '主要道路沿線覆蓋稀疏',
      '西非覆蓋較少的國家之一',
      '品質因來源而異',
    ],
    car: [
      '標準轎車',
      '無特殊車輛辨識特徵'
    ],
    roads: [
      'RN 編號國道（Route Nationale）',
      '靠右行駛',
      '道路品質普遍差，尤其在 Conakry 以外',
      '鄉村地區紅色紅土路非常常見',
      '機車交通（Jakarta 機車）非常常見',
      '有標誌的地方為法語道路標誌',
      '城鎮中有減速帶',
    ],
    landscape: [
      'Fouta Djallon 高地：壯觀的砂岩高原和山谷（許多西非河流的源頭）',
      'Conakry 周圍的沿海低地：紅樹林和稻田',
      '東南部的熱帶雨林（Forest Guinea）',
      '東北部的稀樹草原（Upper Guinea）',
      '紅色紅土非常突出',
      '鋁土礦區（Guinea 擁有全球最大鋁土礦儲量）',
      '高地有尼日河源頭',
      '植被綠色茂密，尤其在南部',
    ],
    signs: [
      '法語 on all signs',
      '商業標誌上有當地語言（Fula/Pular、Malinke、Susu）',
      '鄉村地區標誌有限',
      'Orange 和 MTN 電信品牌',
      '法語文字："Arrêt"、"Route Nationale"',
      '可見 GNF（幾內亞法郎）定價',
    ],
    plates: [
      '各種車牌格式',
      '可能有 RC（Republique de Guinee）標記',
      '能見度有限',
      '政府車牌不同',
    ],
    unique: [
      '法語 + 西非熱帶有紅色紅土高地 = 可能是 Guinea',
      'Fouta Djallon 高地景觀很有辨識度（砂岩高原）',
      '紅土和工業設備的鋁土礦區',
      '非常罕見的出生點 — 除非有強力證據否則不要猜',
      'Conakry（半島上的首都）是最可能的出生點',
      '通過更多丘陵/更多森林與 Senegal 區分',
      '紅色紅土極為突出',
    ],
    tips: [
      '法語 + 西非丘陵/高地熱帶景觀 = 考慮 Guinea',
      'Fouta Djallon 高原很有辨識度但那裡覆蓋非常稀疏',
      'Conakry 是唯一可能的城市出生點 — 半島城市',
      '整體非常罕見的出生點',
      '比 Senegal 更多山，比 Mali/Burkina 更熱帶',
      '紅色紅土 + 法語 + 西非靠右行駛',
      "🔗 <a href=\"https://www.google.com/maps/@9.6412,-13.5784,3a,75y,90t\" target=\"_blank\" style=\"color:var(--accent-blue)\">Street View 範例（Conakry）</a>"
    ],
  },

'sierra-leone': {
    name: 'Sierra Leone',
    localName: 'Sierra Leone',
    flag: '\u{1F1F8}\u{1F1F1}',
    region: 'africa',
    drivingSide: 'right',
    tld: '.sl',
    phoneCode: '+232',
    language: 'English, Krio',
    currency: 'Leone (SLL)',
    camera: [
      "<strong>100% Gen 3</strong>（行李架中心填黑）",
      '主要為社群貢獻/非官方覆蓋',
      '首都 Freetown 有部分覆蓋',
      'Sparse coverage along major roads',
      '部分地點有 Trekker',
      '覆蓋品質差異顯著',
    ],
    car: [
      '無標準 Google 街景車 meta',
      '各種來源的社群貢獻覆蓋',
      '無一致可辨識的特徵',
      'No follow car, snorkel, or tape',
    ],
    roads: [
      '有道路編號系統但標誌有限',
      '靠右行駛（儘管講英語）',
      '道路品質普遍差',
      '紅色紅土路常見',
      '機車計程車（okada）非常常見',
      'Freetown 有丘陵地形和陡峭道路',
      '城鎮中有減速帶',
    ],
    landscape: [
      '熱帶氣候有鬱鬱蔥蔥的綠色植被',
      'Freetown：有壯觀丘陵背景的沿海城市',
      '西海岸沿線有海灘（Lumley Beach、River No. 2）',
      '內陸：森林丘陵和河谷',
      '東部有鑽石礦區',
      '低地有稻田',
      '沿海的紅樹林沼澤',
      'Freetown 的棉花樹是著名地標',
    ],
    signs: [
      '官方標誌為英語（前英國殖民地）',
      '非正式標誌上可見克里奧爾語（Krio，英語系克里奧爾語）',
      '講英語但靠右行駛（對前英國殖民地來說不尋常）',
      'Orange 和 Africell 電信品牌',
      'SLL（Leone）貨幣定價',
      '鄉村地區標誌有限',
    ],
    plates: [
      '各種車牌格式 with SL marking',
      '覆蓋中能見度有限',
      '政府車牌不同',
      '車牌狀況常不佳',
    ],
    unique: [
      '英語 + 西非靠右行駛 = 可能是 Sierra Leone（或 Liberia）',
      '英語 + 靠右行駛對前英國殖民地來說不尋常',
      'Freetown 有多丘陵地形配海景',
      '非常罕見的出生點 — 除非有強力證據否則不要猜',
      '非正式標誌上可見克里奧爾語元素',
      '通過更小且覆蓋更少與 Ghana/Nigeria 區分',
    ],
    tips: [
      '英語 + 熱帶西非靠右行駛 = 考慮 Sierra Leone',
      'Freetown 是唯一可能的出生點 — 丘陵沿海城市',
      '非常罕見 — 只在有強力證據時才猜',
      '通過行駛方向與 Ghana 區分（Ghana 也靠右但有膠帶 meta）',
      '覆蓋比 Ghana 或 Nigeria 少',
      "🔗 <a href=\"https://www.google.com/maps/@8.4657,-13.2317,3a,75y,90t\" target=\"_blank\" style=\"color:var(--accent-blue)\">Street View 範例（Freetown）</a>"
    ],
  },

'togo': {
    name: 'Togo',
    localName: 'Togo',
    flag: '\u{1F1F9}\u{1F1EC}',
    region: 'africa',
    drivingSide: 'right',
    tld: '.tg',
    phoneCode: '+228',
    language: 'French, Ewe, Kabiye',
    currency: 'West African CFA Franc (XOF)',
    camera: [
      "<strong>100% Gen 3</strong>（PARE+MPH 獨特組合）",
      '主要為社群貢獻/非官方覆蓋',
      '首都 Lome 有部分覆蓋',
      '主要道路沿線覆蓋稀疏',
      '西非覆蓋最少的國家之一',
      'Quality varies',
    ],
    car: [
      '標準轎車',
      '無特殊車輛辨識特徵'
    ],
    roads: [
      'RN 編號國道',
      '靠右行駛',
      '主要南北公路連接 Lome 到北部',
      '道路品質差異顯著',
      '機車計程車（zemidjan）極為常見',
      '有標誌的地方為法語道路標誌',
      '南北狹長的國家',
    ],
    landscape: [
      'Ghana 和 Benin 之間非常狹窄的國家',
      '南部沿海低地',
      '中部/北部的 Togo 山/Atakora 山脈',
      '全境熱帶植被',
      '棕櫚樹種植園',
      '北部有稀樹草原',
      '南部綠色且相對平坦',
    ],
    signs: [
      '法語 on all signs',
      '當地/商業標誌上有埃維語和卡比耶語',
      '可見 CFA 法郎定價',
      'Togocom 和 Moov 電信品牌',
      '法語文字為標準',
      'Lome 以外標誌有限',
    ],
    plates: [
      '各種車牌格式 with TG marking',
      '能見度有限',
      '政府車牌不同',
    ],
    unique: [
      '法語 + Ghana（英語）和 Benin（法語）之間非常狹窄的國家',
      '穿綠色背心的機車計程車（zemidjan）常見',
      'Lome 就在 Ghana 邊境 — 幾乎可以步行過去',
      '非常罕見的出生點 — 覆蓋極為有限',
      '通過語言（法語 vs 英語）與 Ghana 區分',
      'CFA 法郎國家，像 Senegal 和 Ivory Coast',
    ],
    tips: [
      '極為罕見的出生點 — 幾乎不會出現',
      '法語 + 位於 Ghana 和 Benin 之間 = Togo',
      'Lome 是唯一可能的出生點',
      '與 Ghana 相鄰但講法語，不是英語',
      '穿綠色背心的機車計程車有助辨識 Lome',
      '狹窄的國家地理 — 從海岸到北部只有約 150 公里',
      "🔗 <a href=\"https://www.google.com/maps/@6.1725,1.2314,3a,75y,90t\" target=\"_blank\" style=\"color:var(--accent-blue)\">Street View 範例（Lomé）</a>"
    ],
  },

'djibouti': {
    name: 'Djibouti',
    localName: 'Djibouti / \u062C\u064A\u0628\u0648\u062A\u064A',
    flag: '\u{1F1E9}\u{1F1EF}',
    region: 'africa',
    drivingSide: 'right',
    tld: '.dj',
    phoneCode: '+253',
    language: 'French, Arabic, Somali, Afar',
    currency: 'Djiboutian Franc (DJF)',
    camera: [
      "<strong>100% Gen 4</strong>（pickup truck）",
      'Djibouti 市有部分覆蓋',
      '社群貢獻和非官方覆蓋',
      '部分地點有 Trekker',
      '覆蓋品質不一',
      '非洲覆蓋最少的國家之一',
    ],
    car: [
      '標準轎車',
      '無特殊車輛辨識特徵'
    ],
    roads: [
      'RN 編號路線',
      '靠右行駛',
      '連接 Djibouti 市到 Ethiopia 的主要道路',
      '道路品質不一：城市中現代化，城外惡化',
      '法語和阿拉伯語道路標誌',
      '特徵極少的沙漠道路',
      '戰略位置：非洲之角，曼德海峽',
    ],
    landscape: [
      '極度乾旱炎熱的沙漠地形',
      '阿薩爾湖：非洲最低點，鹹水湖',
      '火山景觀：Ardoukoba 火山、熔岩區',
      '幾乎沒有植被 — 地球上最乾燥的國家之一',
      '塔朱拉灣：深藍色海水對比荒涼的棕/黑色地形',
      '阿法爾三角地質：可見裂谷帶',
      '鹽灘和荒涼的岩石沙漠',
      '可見軍事基地（法國、美國、中國）',
    ],
    signs: [
      '官方標誌上有法語和阿拉伯語',
      '也有索馬里語和阿法爾語',
      '法語在政府/官方標誌上佔主導',
      '阿拉伯文與法語並列',
      '軍事設施標誌（外國基地）',
      '鄉村地區標誌有限',
    ],
    plates: [
      '各種車牌格式',
      '可能有 DJ 標記',
      '軍用車輛有特殊車牌',
      '覆蓋中能見度有限',
    ],
    unique: [
      '法語 + 阿拉伯語 + 極度乾旱/火山地形 = Djibouti',
      '東非最小的國家',
      '可見多個外國軍事基地（France、USA、China、Japan）',
      '阿薩爾湖（非洲最低點）trekker 地點',
      '與周圍國家不同的火山/裂谷帶景觀',
      '非常罕見的出生點 — 覆蓋極為有限',
      '位於曼德海峽的戰略位置',
    ],
    tips: [
      '法語 + 阿拉伯語 + 極端沙漠 + 非洲之角 = Djibouti',
      '非常罕見的出生點 -- only guess with strong evidence',
      '軍事基地有助辨識 Djibouti',
      '比鄰國 Ethiopia 更荒涼/更多火山',
      'Djibouti 市是唯一可能的出生點',
      '鹽灘和火山地形很有辨識度',
      "🔗 <a href=\"https://www.google.com/maps/@11.5721,43.1456,3a,75y,90t\" target=\"_blank\" style=\"color:var(--accent-blue)\">Street View 範例（Djibouti）</a>"
    ],
  },

'south-sudan': {
    name: 'South Sudan',
    localName: 'South Sudan',
    flag: '\u{1F1F8}\u{1F1F8}',
    region: 'africa',
    drivingSide: 'right',
    tld: '.ss',
    phoneCode: '+211',
    language: 'English, Arabic, Dinka, Nuer',
    currency: 'South Sudanese Pound (SSP)',
    camera: [
      "<strong>非官方/社群覆蓋為主</strong>（⚠️ 確切比例待驗證）",
      '主要為 trekker 和社群貢獻覆蓋',
      '首都 Juba 有部分覆蓋',
      '全球覆蓋最少的國家之一',
      'Coverage quality generally low',
      '世界地圖上出生點非常少',
    ],
    car: [
      '無標準 Google 車覆蓋',
      '僅有社群貢獻/trekker 覆蓋',
      '無可辨識的 car meta',
    ],
    roads: [
      '鋪面道路基礎設施非常有限',
      '靠右行駛',
      '大部分道路為未鋪面小路，尤其在 Juba 以外',
      '雨季道路無法通行',
      '覆蓋中聯合國/NGO 車輛交通常見',
      '基礎設施因衝突嚴重損壞',
    ],
    landscape: [
      '白尼羅河和 Sudd 沼澤（世界最大濕地之一）',
      '平坦稀樹草原和草地',
      '南部有熱帶植被',
      '極南部的伊馬通山',
      '雨季綠色，旱季乾燥',
      '有大型牛群的畜牧社區（丁卡人、努爾人）',
      '可見聯合國和 NGO 營區基礎設施',
    ],
    signs: [
      '官方標誌為英語',
      '也使用阿拉伯語，尤其在過渡地區',
      '當地有丁卡語和努爾語',
      '部分地區可見聯合國/UNMISS 標誌',
      '整體標誌非常有限',
      'NGO/人道主義組織標誌常見',
    ],
    plates: [
      '各種格式，未良好標準化',
      'South Sudan 的 SS 標記',
      '政府和聯合國車牌不同',
      '能見度有限 in sparse coverage',
    ],
    unique: [
      '英語 + 非常有限覆蓋 + 東非 + 稀樹草原 = 可能是 South Sudan',
      '世界上最年輕的國家（2011 年獨立）',
      '可見聯合國/NGO 存在和標誌',
      '極為罕見的出生點 — 幾乎不會出現 on world map',
      '通過英語與 Sudan 區分（Sudan 使用阿拉伯語）',
      '如果那裡有覆蓋，Sudd 沼澤地區很有辨識度',
    ],
    tips: [
      '在常規遊戲中幾乎不會出現 — 極為罕見',
      '英語 + 受衝突影響 + 東非稀樹草原 = 考慮 South Sudan',
      '聯合國/UNMISS 標誌 = 可能是 South Sudan',
      'Juba 是唯一可能的出生點',
      '不要與 Sudan（阿拉伯語）或 Uganda（更多覆蓋）混淆',
      '只在看到非常強力的證據時才猜',
      "🔗 <a href=\"https://www.google.com/maps/@4.8594,31.5713,3a,75y,90t\" target=\"_blank\" style=\"color:var(--accent-blue)\">Street View 範例（Juba）</a>"
    ],
  },

'sudan': {
    name: 'Sudan',
    localName: 'As-Sudan / \u0627\u0644\u0633\u0648\u062F\u0627\u0646',
    flag: '\u{1F1F8}\u{1F1E9}',
    region: 'africa',
    drivingSide: 'right',
    tld: '.sd',
    phoneCode: '+249',
    language: 'Arabic, English',
    currency: 'Sudanese Pound (SDG)',
    camera: [
      "<strong>~69% Gen 3 + ~11% Gen 2 + ~6% Gen 4</strong>",
      'Khartoum 有部分社群貢獻覆蓋',
      '部分歷史/旅遊景點有 Trekker',
      'Meroe 金字塔可能有 trekker 覆蓋',
      '整體非常稀疏',
      '覆蓋品質不一',
    ],
    car: [
      '標準轎車',
      '無特殊車輛辨識特徵'
    ],
    roads: [
      '連接 Khartoum 到 Port Sudan 和其他城市的主要公路',
      '靠右行駛',
      '道路品質不一：Khartoum 地區有現代公路，其他地方差',
      '穿越平坦乾旱地形的沙漠公路',
      '阿拉伯語道路標誌',
      '主要道路上有白色中線',
    ],
    landscape: [
      '北部的撒哈拉沙漠：廣闘的沙漠和岩石沙漠',
      '尼羅河谷：狹窄的綠色走廊（藍尼羅河和白尼羅河在 Khartoum 匯合）',
      'Khartoum：位於藍尼羅河和白尼羅河匯合處',
      'Meroe 金字塔：沙漠中的古努比亞金字塔',
      '中部/南部的半乾旱薩赫勒帶',
      '有珊瑚礁的紅海海岸',
      '平坦沙漠地形主導國家大部分地區',
    ],
    signs: [
      '標誌上以阿拉伯文為主',
      '主要標誌上有時有英語',
      '阿拉伯語道路標誌 standard',
      'MTN 和 Zain 電信品牌',
      '距離標誌以公里計',
      '阿拉伯語從右到左閱讀',
    ],
    plates: [
      '各種車牌格式',
      '車牌上有阿拉伯文',
      '政府車牌不同',
      '覆蓋中能見度有限',
    ],
    unique: [
      '阿拉伯語 + 撒哈拉/薩赫勒 + 東非 = 可能是 Sudan',
      'Meroe 金字塔（努比亞）是獨特的 trekker 地點',
      'Khartoum 位於藍尼羅河和白尼羅河匯合處',
      '阿拉伯語與 South Sudan（英語）區分',
      '非常罕見的出生點 — 覆蓋極少',
      '基礎設施比 South Sudan 發達',
    ],
    tips: [
      '阿拉伯語 + 撒哈拉沙漠 + 東/北非 = 考慮 Sudan',
      'Meroe 金字塔 = 立即辨識 Sudan',
      'Khartoum 是唯一可能的城市出生點',
      '阿拉伯語（非英語）與 South Sudan 區分',
      '非常罕見的出生點 -- only guess with strong evidence',
      '覆蓋比 Egypt 少但比 South Sudan 多',
      "🔗 <a href=\"https://www.google.com/maps/@15.5007,32.5599,3a,75y,90t\" target=\"_blank\" style=\"color:var(--accent-blue)\">Street View 範例（Khartoum）</a>"
    ],
  },

  // ============================================================
  //  OCEANIA
  // ============================================================,

'fiji': {
    name: 'Fiji',
    localName: 'Viti',
    flag: '\u{1F1EB}\u{1F1EF}',
    region: 'oceania',
    drivingSide: 'left',
    tld: '.fj',
    phoneCode: '+679',
    language: 'English, Fijian, Fiji Hindi',
    currency: 'Fijian Dollar (FJD)',
    camera: [
      "<strong>Gen 3 為主</strong>（⚠️ 確切比例待驗證）",
      'Viti Levu（最大島嶼）主要道路和部分 Vanua Levu 有覆蓋',
      '有覆蓋的地方為 Gen 3 相機',
      '海岸和度假區可能有額外覆蓋',
      'Trekker at some tourism spots',
      '覆蓋密度低於 Australia/NZ',
    ],
    car: [
      '標準轎車',
      '靠左行駛',
      '無特殊車輛辨識特徵'
    ],
    roads: [
      'Kings Road 和 Queens Road 環繞 Viti Levu 島',
      '靠左行駛（英國殖民影響）',
      '道路品質不一：主要道路鋪面，鄉村道路為碎石',
      '村莊中減速帶非常常見',
      '大多數路線為雙車道無中央分隔',
      '沿海棕櫚成排的道路',
      '鄉村道路可能狹窄且在山間蜿蜒',
    ],
    landscape: [
      '有多山內陸的熱帶島嶼',
      '珊瑚礁和碧綠潟湖環繞島嶼',
      '鬱鬱蔥蔥的熱帶植被：棕櫚樹、熱帶花卉',
      'Viti Levu 上甘蔗田廣泛分佈',
      '火山峰配茂密森林',
      '內陸有河谷和瀑布',
      '海岸地區有度假村和旅遊基礎設施',
      '可見印度裔斐濟社區：印度教寺廟與斐濟村莊並存',
    ],
    signs: [
      '所有官方標誌為英語',
      '當地/社區標誌上有斐濟語和斐濟印地語',
      '寺廟和部分商業場所可見印地語天城體文字',
      '速限以 km/h 標示',
      '旅遊標誌常見',
      'Vodafone Fiji 品牌',
      '距離標誌以公里計',
    ],
    plates: [
      '白色/淺色車牌',
      '各種字母和數字組合格式',
      '政府車牌不同',
      '計程車車牌可能為不同顏色',
      '透過模糊可見有限的標準化',
    ],
    unique: [
      '靠左行駛 + 熱帶太平洋島嶼 + 英語 + 印地語元素 = Fiji',
      '唯一有顯著印度/印地語文化影響的太平洋島國',
      '印度教寺廟與斐濟 bure（傳統茅草屋）並存很有辨識度',
      '熱帶島嶼上的甘蔗田 = 可能是 Fiji',
      '太平洋島嶼上的印地語/天城體文字 = Fiji',
      '政府建築上可見國旗中的藍色英國國旗',
      '旅遊基礎設施（度假村、潛水店）常見',
    ],
    tips: [
      '熱帶太平洋島嶼上的印地語文字/寺廟 = Fiji，確定',
      '在熱帶太平洋島嶼靠左行駛大幅縮小選項',
      '甘蔗田 + 熱帶島嶼 + 英語標誌 = Fiji',
      'Kings Road 和 Queens Road 是 Viti Levu 的主要環島路線',
      'Viti Levu 是覆蓋最多的島嶼 — 大部分出生點在這裡',
      'Fiji 比大多數小型太平洋島國覆蓋更多',
      "🔗 <a href=\"https://www.google.com/maps/@-17.7765,177.9631,3a,75y,90t\" target=\"_blank\" style=\"color:var(--accent-blue)\">Street View 範例（Suva）</a>"
    ],
  },

'papua-new-guinea': {
    name: 'Papua New Guinea',
    localName: 'Papua Niugini',
    flag: '\u{1F1F5}\u{1F1EC}',
    region: 'oceania',
    drivingSide: 'left',
    tld: '.pg',
    phoneCode: '+675',
    language: 'English, Tok Pisin, Hiri Motu + 800+ indigenous',
    currency: 'Kina (PGK)',
    camera: [
      "<strong>~70% Gen 3 + ~30% Gen 4</strong>（涉水喉車/pickup truck）",
      '部分 trekker 覆蓋 along Kokoda Track and tourist areas',
      'Port Moresby 和部分公路有社群貢獻覆蓋',
      '覆蓋品質差異顯著',
      '太平洋覆蓋最少的國家之一',
      '大部分覆蓋為非官方/社群貢獻',
    ],
    car: [
      '無標準 Google 街景車',
      '各種車輛的社群貢獻覆蓋',
      '步道上有 Trekker 覆蓋',
      '無一致的 car meta',
    ],
    roads: [
      'Highland Highway 連接主要高地城鎮',
      '靠左行駛',
      '道路品質普遍差 outside major towns',
      '許多地區只能乘飛機或船抵達',
      '未鋪面道路上有紅色土壤/紅土',
      'PMV（公共機動車輛）巴士常見',
      '城鎮中有減速帶',
    ],
    landscape: [
      '內陸極為多山（Mount Wilhelm 海拔 4,509 米）',
      '茂密的熱帶雨林覆蓋大部分國土',
      '高地山谷有自給農業（番薯、咖啡）',
      '沿海低地有紅樹林和珊瑚礁',
      '活火山（Rabaul、Manam）',
      '流經茂密叢林的大河',
      '傳統村莊：高腳屋、茅草屋頂',
      '世界第三大島嶼（與 Indonesia 共享）',
    ],
    signs: [
      '標誌上有英語和托克皮辛語',
      '托克皮辛語詞彙："haus"（房子）、"pis"（魚）、"wara"（水）、"rot"（道路）',
      '托克皮辛語是英語系混合語但很獨特',
      'Digicel（紅色）電信品牌非常常見',
      '城市地區以外標誌有限',
      '部分地區有安全/犯罪警告標誌',
    ],
    plates: [
      '各種車牌格式',
      '可見有限的標準化',
      '政府和外交車牌不同',
      '能見度有限 in sparse coverage',
    ],
    unique: [
      '標誌上的托克皮辛語 = Papua New Guinea',
      '靠左行駛 + 熱帶多山 + 英語/托克皮辛語 = PNG',
      '地球上語言最多樣的國家（800+ 種語言）',
      '有自給農業的高地地區看起來與海岸非常不同',
      '非常罕見的出生點 — 覆蓋有限 overall',
      'Kokoda Track trekker 覆蓋可辨識',
      '高地地區可見傳統部落文化',
      'Digicel（紅色品牌）極為顯眼',
    ],
    tips: [
      '標誌上的托克皮辛文字 = PNG，立即確認',
      '靠左行駛的極度多山熱帶島嶼 = PNG',
      '非常罕見的出生點 — 除非看到托克皮辛語或強力證據否則不要猜',
      'Port Moresby 是最可能的城市出生點',
      '有自給農業的高地山谷看起來與沿海 PNG 非常不同',
      'Digicel 紅色品牌是主要電信',
      "🔗 <a href=\"https://www.google.com/maps/@-6.3149,143.9556,3a,75y,90t\" target=\"_blank\" style=\"color:var(--accent-blue)\">Street View 範例（Lae）</a>"
    ],
  },

'guam': {
    name: 'Guam',
    localName: 'Guahan',
    flag: '\u{1F1EC}\u{1F1FA}',
    region: 'oceania',
    drivingSide: 'right',
    tld: '.gu',
    phoneCode: '+1-671',
    language: 'English, Chamorro',
    currency: 'US Dollar (USD)',
    camera: [
      "<strong>100% Gen 3</strong>",
      '相機車右前角的長天線 — 關鍵辨識特徵',
      '微小未模糊的 roof rack 可與 Northern Mariana Islands 區分',
      '全島大部分地區覆蓋良好',
      '部分 trekker/海灘步行覆蓋',
      '覆蓋包括主要公路和許多支線道路',
    ],
  car: [
      '長天線在右前方',
      '微小 roof rack 可見',
      '車輛有部分模糊',
      '天線 + roof rack 區別 Guam 和 Northern Mariana Islands',
      'Guam 有水泥電線桿（vs Northern Mariana 的木頭電線桿）'
    ],
    roads: [
      '美式道路基礎設施配公路盾牌標誌',
      '公路盾牌標誌上特別寫有 "GUAM" — 很有幫助',
      '靠右行駛（美國領土）',
      '白色路肩線、黃色中央分隔線（美國標準）',
      '釘路比畫線路更常見',
      '有島嶼特色設計的彩繪公車站',
      '部分地區有圓環',
    ],
    poleInfo: [
      '<strong>水泥電線桿</strong> — Guam 獨有的特徵，可與 Northern Mariana Islands（木頭電線桿）區分',
      '美式風格的混凝土杆，上有變壓器和電線'
    ],
    landscape: [
      '植被茂密的熱帶島嶼',
      '北部相對平坦，南部有丘陵和山峰',
      '北部有珊瑚石灰岩高原',
      'Tumon 灣沿線有海灘和高層旅遊酒店',
      '可見軍事基地（美國海軍和空軍）',
      '日本和韓國旅遊設施（日/韓語標誌）',
      '內陸有茂密的熱帶植被',
      '比夏威夷更小且更不發達但明顯是美式基礎設施',
    ],
    signs: [
      '所有標誌為英語（美國領土）',
      '部分當地標誌上有查莫洛語',
      '旅遊區（Tumon）常見日語和韓語文字',
      '美式公路標誌和道路標線',
      '"GUAM" 公路盾牌標誌是有用的辨識特徵',
      '速限以 mph 標示（美國領土）',
      '可見軍事基地入口標誌',
    ],
    plates: [
      '窄型白色車牌黑色字（美式但為島嶼特有）',
      '也可能有黃色車牌',
      '美式車牌格式',
      '政府和軍用車牌不同',
      '要求前後車牌',
    ],
    unique: [
      '相機車右前方長天線 + 熱帶島嶼 = Guam 或 Northern Mariana Islands',
      '水泥電線桿區分 Guam 和 Northern Mariana Islands（後者有木頭電線桿）',
      '路標上的 "GUAM" 公路盾牌 = 立即確認',
      '美國領土上的日/韓語旅遊文字 = Guam（旅遊目的地）',
      '在有美式基礎設施的熱帶太平洋島嶼靠右行駛 = Guam',
      'Tumon 灣海灘沿線的高層旅遊酒店',
      '可見美軍基地基礎設施',
      '比 Northern Mariana Islands 更大、更繁忙的街道',
    ],
    tips: [
      '車右前方天線 + 熱帶島嶼 = Guam 或 CNMI',
      '水泥電線桿 = Guam；木頭電線桿 = Northern Mariana Islands',
      '公路盾牌上的 "GUAM" = 立即確認',
      '日/韓語旅遊標誌 = 可能是 Guam（東亞主要旅遊目的地）',
      '比 CNMI 更富裕/更發達的外觀',
      '熱帶太平洋島嶼上的美式道路基礎設施',
      "🔗 <a href=\"https://www.google.com/maps/@13.4443,144.7937,3a,75y,90t\" target=\"_blank\" style=\"color:var(--accent-blue)\">Street View 範例（Hagatna）</a>"
    ],
  },

'northern-mariana-islands': {
  name: 'Northern Mariana Islands', localName: 'Sankattan Siha Na Islas Mariånas', flag: '🇲🇵', region: 'oceania',
  drivingSide: 'right', tld: '.mp', phoneCode: '+1-670', language: 'English, Chamorro', currency: 'US Dollar (USD)',
  camera: [
    "<strong>100% Gen 3</strong>",
    "覆蓋大部分限於塞班島（Saipan）主島",
    "南部的天寧島（Tinian）和薩帕盧島（Sinapalu）僅有三腳架覆蓋",
    "更北部島嶼無覆蓋"
  ],
  car: [
    "整輛街景車處於<strong>打碼狀態</strong>，但右前方天線仍可見",
    "天線比 Guam 更<strong>接近鏡頭</strong> — 正對下方縮到最小時能看到天線的是 CNMI",
    "Guam 的天線則較遠，同視角下只能看到車打碼"
  ],
  roads: [
    "美式道路基礎設施",
    "<strong>藍色路牌</strong>（vs Guam 使用綠色路牌）",
    "靠右行駛（美國領土）",
    "白色路肩線、黃色中央分隔線（美國標準）"
  ],
  poleInfo: [
    "<strong>木質電線桿</strong>帶頂部橫桿 — vs Guam 使用混凝土電線桿",
    "美式風格配置，帶絕緣器和變壓器"
  ],
  landscape: [
    "熱帶氣候，大量茂密且相對低矮的植被",
    "<strong>鳳凰木</strong>（官方樹種）擁有寬大樹冠和鮮豔紅花 — Guam 少見此樹",
    "常見大量道路反光鏡（與 Guam 類似）",
    "西海岸南半部分有密集商業區",
    "北側的自殺崖暴露許多岩石"
  ],
  signs: [
    "英語為主",
    "常見東亞語言：<strong>日語、漢語、韓語</strong>，甚至俄語",
    "Guam 也有類似現象",
    "藍色路牌（vs Guam 的綠色路牌）"
  ],
  plates: [
    "高窄型白色車牌，黑色或藍色字體",
    "美式車牌格式"
  ],
  unique: [
    "街景車全打碼但<strong>天線接近鏡頭</strong> — 正對下方縮小時可見天線（vs Guam 只見車打碼）",
    "<strong>木質電線桿</strong>帶頂部橫桿（vs Guam 的混凝土電線桿）",
    "<strong>藍色路牌</strong>（vs Guam 的綠色路牌）",
    "<strong>鳳凰木</strong>（紅花大樹冠）— Guam 少見",
    "日/韓/中/俄語文字常見（旅遊相關）"
  ],
  tips: [
    "木質電線桿 = CNMI；混凝土電線桿 = Guam",
    "藍色路牌 = CNMI；綠色路牌 = Guam",
    "天線接近鏡頭 = CNMI；天線較遠 = Guam",
    "鳳凰木（紅花）= 很可能是 CNMI",
    "覆蓋基本僅在塞班島",
    "🔗 <a href=\"https://www.google.com/maps/@15.1801,145.7497,3a,75y,90t\" target=\"_blank\" style=\"color:var(--accent-blue)\">Street View 範例（Saipan）</a>"
  ]
},

'new-caledonia': {
    name: 'New Caledonia',
    localName: 'Nouvelle-Caledonie',
    flag: '\u{1F1F3}\u{1F1E8}',
    region: 'oceania',
    drivingSide: 'right',
    tld: '.nc',
    phoneCode: '+687',
    language: 'French, Kanak languages',
    currency: 'CFP Franc (XPF)',
    camera: [
      "<strong>100% Gen 3（右前天線+大範圍打碼）</strong>",
      '有限的社群貢獻/非官方覆蓋可用',
      '部分 trekker 覆蓋 at tourist locations',
      '來自替代來源的 Google 車和 trekker 影像',
      '覆蓋非常稀疏',
      'Quality varies significantly',
    ],
    car: [
      '無標準 Google 街景車',
      '各種來源的社群貢獻覆蓋',
      '無一致的 car meta',
      '部分地點有 Trekker',
    ],
    roads: [
      'RT 編號領地路線（Route Territoriale）',
      '靠右行駛（法國領土）',
      '法式道路基礎設施和標誌',
      '寬闊棱角的護欄類似捷克/斯洛伐克風格',
      '主要路線道路品質普遍良好',
      '蜿蜒的海岸道路',
      '圓環常見',
    ],
    landscape: [
      '礦區灌木群落：金屬土壤上獨特的灌木植被',
      '高金屬氧化物含量（鎳礦開採）的紅/橙色土壤 — 關鍵辨識特徵',
      '全球鎳生產領先者之一',
      '環繞島嶼的堡礁（聯合國教科文組織世界遺產）',
      '有熱帶植被的多山內陸',
      '松樹（Araucaria columnaris）— 高大、狹窄、獨特的柱狀',
      '許多海岸道路可見碧綠潟湖',
      '美拉尼西亞和法國殖民景觀混合',
    ],
    signs: [
      '法語 on ALL signs (French overseas territory)',
      '當地標誌上可能出現卡納克語',
      '法國路標標準（與法國本土相同）',
      '部分標誌上可見 .nc 網域',
      '距離標誌以公里計',
      '有法國商業品牌存在',
    ],
    plates: [
      '法式車牌但有 NC（New Caledonia）代碼',
      '格式與法國本土不同',
      '白色車牌有地區標記',
      '能見度有限 in sparse coverage',
    ],
    unique: [
      '鎳礦開採的紅/橙色土壤 + 法語 + 太平洋島嶼 = New Caledonia',
      '礦區灌木群落有金屬土壤上獨特的灌木植被',
      '太平洋島嶼上寬闘棱角的護欄（捷克/斯洛伐克風格）很不尋常',
      '柱狀南洋杉（Araucaria）很有辨識度',
      '法語 + 靠右行駛 + 太平洋熱帶島嶼 = New Caledonia',
      '標誌上的 .nc 網域',
      '海岸可見堡礁潟湖',
    ],
    tips: [
      '紅/橙色礦區土壤 + 法語 + 太平洋島嶼 = New Caledonia',
      '太平洋熱帶島嶼上的法語（不是印度洋的 Reunion）',
      '柱狀松樹（Araucaria）是 New Caledonia 的獨特特徵',
      '商業標誌上的 .nc 網域確認 New Caledonia',
      '非常罕見的出生點 — 覆蓋有限',
      '紅色土壤的礦區景觀與其他法國領土區分',
      "🔗 <a href=\"https://www.google.com/maps/@-22.2558,166.4505,3a,75y,90t\" target=\"_blank\" style=\"color:var(--accent-blue)\">Street View 範例（Nouméa）</a>"
    ],
  },

'samoa': {
    name: 'Samoa',
    localName: 'Samoa',
    flag: '\u{1F1FC}\u{1F1F8}',
    region: 'oceania',
    drivingSide: 'left',
    tld: '.ws',
    phoneCode: '+685',
    language: 'Samoan, English',
    currency: 'Tala (WST)',
    camera: [
      "<strong>100% Gen 3</strong>（獨特膠帶車）",
      'Upolu 和 Savai’i 島有覆蓋',
      '有官方覆蓋的地方為 Gen 3',
      '部分 trekker 覆蓋',
      '各種來源的社群貢獻覆蓋',
      '覆蓋集中在沿海環島道路',
    ],
    car: [
      '靠左行駛',
      '標準轎車或 trekker 涵蓋',
      '無特殊車輛辨識特徵'
    ],
    roads: [
      '主要道路沿海岸環繞每座島嶼',
      '靠左行駛（2009 年從靠右改為靠左）',
      '道路品質不一：主要道路鋪面，鄉村道路崎嶇',
      '村莊中減速帶常見',
      '穿過村莊的窄路',
      '熱帶植被侵入道路邊緣',
    ],
    landscape: [
      '有多山內陸的火山島嶼',
      '熱帶植被：椰子棕櫚、麵包果樹、熱帶花卉',
      '部分海灘/海岸可見黑色火山岩和沙子',
      '海岸上的白色沙灘',
      '鬱鬱蔥蔥的綠色雨林內陸',
      '可見傳統薩摩亞 fale（開放式房屋）',
      '每個村莊的教堂建築都很顯眼',
      'To Sua 海溝：壯觀的游泳洞（可能的 trekker 地點）',
    ],
    signs: [
      '標誌上有英語和薩摩亞語',
      '薩摩亞語使用拉丁字母，特殊字符有限',
      '教堂標誌非常顯眼（Samoa 是深度宗教國家）',
      'Digicel（紅色）和 Vodafone 品牌',
      '速限以 km/h 標示',
      '有旅遊標誌',
    ],
    plates: [
      '各種車牌格式',
      '可見有限的標準化',
      '政府車牌不同',
      '覆蓋中能見度有限',
    ],
    unique: [
      '靠左行駛 + 波利尼西亞熱帶島嶼 + 英語 = Samoa（不是靠右行駛的 American Samoa）',
      '2009 年從靠右改為靠左行駛（少數國家這樣做）',
      '開放式 fale（傳統房屋）是薩摩亞獨有的',
      '每個村莊都有教堂 — 極為顯眼',
      '.ws 網域（西薩摩亞歷史名稱）',
      '與 American Samoa 區分：Samoa 靠左行駛，American Samoa 靠右行駛',
      '火山黑色岩石與熱帶海灘並存',
    ],
    tips: [
      '在波利尼西亞島嶼靠左行駛 = Samoa（不是 American Samoa）',
      '開放式 fale 房屋是薩摩亞獨特建築',
      '每個村莊教堂極為顯眼',
      '火山黑色岩石 + 熱帶綠色植被 + 靠左行駛 = Samoa',
      '.ws 網域（Western Samoa）與 American Samoa（.as）區分',
      '非常罕見的出生點 — 覆蓋有限 overall',
      "🔗 <a href=\"https://www.google.com/maps/@-13.8333,-171.7500,3a,75y,90t\" target=\"_blank\" style=\"color:var(--accent-blue)\">Street View 範例（Apia）</a>"
    ],
  },

'solomon-islands': {
    name: 'Solomon Islands',
    localName: 'Solomon Islands',
    flag: '\u{1F1F8}\u{1F1E7}',
    region: 'oceania',
    drivingSide: 'left',
    tld: '.sb',
    phoneCode: '+677',
    language: 'English, Solomon Islands Pijin',
    currency: 'Solomon Islands Dollar (SBD)',
    camera: [
      "<strong>~70% Gen 3 + ~30% Gen 4</strong>（天空常有裂痕）",
      '主要為 trekker 和社群貢獻覆蓋',
      '首都 Honiara 有部分覆蓋',
      '二戰紀念景點可能有 trekker 覆蓋',
      '太平洋覆蓋最少的國家之一',
      '覆蓋品質不一',
    ],
    car: [
      '無標準 Google 街景車',
      '各種來源的社群貢獻覆蓋',
      '無一致的 car meta',
      '部分地點有 Trekker',
    ],
    roads: [
      '靠左行駛',
      '道路基礎設施非常有限',
      'Honiara 有部分鋪面道路；鄉村地區多為未鋪面',
      '許多地區只能乘船抵達',
      'Honiara 以外無交通號誌',
      '首都道路佈局簡單',
    ],
    landscape: [
      '被茂密熱帶雨林覆蓋的火山島嶼',
      'Guadalcanal：最大島嶼，二戰戰場',
      '珊瑚環礁和火山島嶼',
      '道路可達性有限的茂密熱帶叢林',
      '環繞島嶼的清澈藍/綠色海水',
      '村莊中的傳統葉子茅草屋',
      '部分覆蓋中可見二戰殘骸和紀念碑',
      '沿海的紅樹林',
    ],
    signs: [
      '官方標誌為英語',
      '當地標誌上有所羅門群島混合語（Pijin，英語系混合語）',
      '整體標誌有限',
      'Our Telekom（藍色）品牌',
      '旅遊和二戰紀念標誌',
      '政府標誌為英語',
    ],
    plates: [
      '各種格式',
      '有限的標準化',
      '政府車牌不同',
      '覆蓋中能見度非常有限',
    ],
    unique: [
      '靠左行駛 + 美拉尼西亞熱帶島嶼 + 英語 = Solomon Islands 或 PNG',
      '二戰戰場和紀念碑（尤其 Guadalcanal）',
      '英語系 Pijin 語與托克皮辛語（PNG）不同',
      '非常罕見的出生點 — 覆蓋極少',
      '道路基礎設施極少的茂密熱帶叢林',
      '通過更小的島嶼和整體更少山地與 PNG 區分',
    ],
    tips: [
      '二戰紀念/戰場 = 考慮 Solomon Islands（Guadalcanal）',
      '美拉尼西亞島嶼 + 英語 + 靠左行駛 = Solomon Islands 或 PNG',
      'Honiara 是唯一可能的出生點',
      '非常罕見 — 只在有強力證據時才猜',
      '比 PNG 更少山地，更明顯的島鏈地理',
      'Our Telekom 品牌有助確認 Solomon Islands',
      "🔗 <a href=\"https://www.google.com/maps/@-9.4456,160.0352,3a,75y,90t\" target=\"_blank\" style=\"color:var(--accent-blue)\">Street View 範例（Honiara）</a>"
    ],
  },

'vanuatu': {
    name: 'Vanuatu',
    localName: 'Vanuatu',
    flag: '\u{1F1FB}\u{1F1FA}',
    region: 'oceania',
    drivingSide: 'right',
    tld: '.vu',
    phoneCode: '+678',
    language: 'English, French, Bislama',
    currency: 'Vatu (VUV)',
    camera: [
      "<strong>100% Gen 3 徒步旅者 (trekker)</strong>",
      '僅 Ambrym 島有覆蓋（13 個主要島嶼中的 1 個）',
      '首都 Port Vila 有部分社群貢獻覆蓋',
      '太平洋覆蓋最少的國家之一',
      '可見黑底白字車牌但罕見',
      '覆蓋品質差異顯著',
    ],
    car: [
      '標準轎車或 trekker 涵蓋',
      '靠右行駛',
      '無特殊車輛辨識特徵'
    ],
    roads: [
      '靠右行駛（對前英國殖民地來說不尋常）',
      '道路基礎設施非常有限',
      'Port Vila 有部分鋪面道路',
      '大多數島嶼道路網絡極少',
      '許多地區只能乘船或步行抵達',
      '穿過村莊的簡單窄路',
    ],
    landscape: [
      '地形壯觀的火山島鏈',
      '活火山：Tanna 島上的 Mount Yasur（可近距離觀看熔岩）',
      'Ambrym 火山有熔岩湖',
      '茂密的熱帶雨林',
      '叢林中的藍洞（清澈的淡水游泳池）',
      '珊瑚礁和海灘',
      '有 Kastom（習俗）文化的傳統村莊',
      '黑色火山沙灘',
    ],
    signs: [
      '三語：英語、法語和比斯拉馬語',
      '比斯拉馬語（英語系克里奧爾語）：標誌上可見獨特詞彙',
      '法語影響與英語並存（美拉尼西亞獨有）',
      'Digicel（紅色）品牌',
      '旅遊標誌常見',
      'Limited signage outside Port Vila',
    ],
    plates: [
      '黑底白字車牌',
      '不同於大多數太平洋國家的車牌風格',
      '能見度有限 in sparse coverage',
      '政府車牌可能不同',
    ],
    unique: [
      '靠右行駛 + 英語和法語 + 美拉尼西亞太平洋島嶼 = Vanuatu',
      '唯一以英語和法語為官方語言的美拉尼西亞國家',
      '標誌上可見比斯拉馬語（克里奧爾語）',
      'Mount Yasur（Tanna）的活熔岩觀賞是標誌性 trekker 地點',
      '黑底白字車牌 (rare Pacific plate style)',
      '非常罕見的出生點 — 覆蓋極為有限',
      'Ambrym 火山 trekker 覆蓋',
    ],
    tips: [
      '英語 + 法語 + 美拉尼西亞島嶼 = Vanuatu（唯一有此組合的國家）',
      '活火山 trekker 覆蓋 = 考慮 Vanuatu（Mount Yasur、Ambrym）',
      '太平洋島嶼靠右行駛 + 英語 = 可能是 Vanuatu、Guam 或美國領土',
      '比斯拉馬語文字很有辨識度：看起來像英語但拼寫簡化',
      '非常罕見的出生點 — 只在有強力證據時才猜',
      'Port Vila 是唯一可能的城市出生點',
      "🔗 <a href=\"https://www.google.com/maps/@-17.7333,168.3273,3a,75y,90t\" target=\"_blank\" style=\"color:var(--accent-blue)\">Street View 範例（Port Vila）</a>"
    ],
  },

'tonga': {
    name: 'Tonga',
    localName: 'Tonga',
    flag: '\u{1F1F9}\u{1F1F4}',
    region: 'oceania',
    drivingSide: 'left',
    tld: '.to',
    phoneCode: '+676',
    language: 'Tongan, English',
    currency: 'Pa\'anga (TOP)',
    camera: [
      "<strong>100% Gen 3</strong>（黑色車，無天線）",
      'Tongatapu（主島）有部分覆蓋',
      '社群貢獻和 trekker 覆蓋',
      '太平洋覆蓋最少的國家之一',
      '覆蓋集中在 Nuku\'alofa（首都）地區',
      '品質不一',
    ],
    car: [
      '標準轎車或 trekker 涵蓋',
      '靠左行駛',
      '無特殊車輛辨識特徵'
    ],
    roads: [
      '靠左行駛',
      'Tongatapu 上平坦簡單的道路網絡',
      'Nuku’alofa 地區有鋪面主要道路',
      '鄉村地區和外島有未鋪面道路',
      '交通極少',
      'Speed bumps in villages',
      '主島上直且平坦的道路',
    ],
    landscape: [
      '平坦珊瑚島（Tongatapu）和火山島（北部群島）',
      'Tongatapu（主島）非常平坦 — 無山脈',
      '椰子棕櫚和熱帶植被',
      '乾淨、維護良好的村莊',
      '每個村莊教堂都很顯眼（Tonga 是深度宗教國家）',
      'Nuku’alofa 的皇宮',
      '可見珊瑚石灰岩',
      '熱帶花卉和花園',
    ],
    signs: [
      '標誌上有英語和東加語',
      '東加語使用拉丁字母',
      '教堂標誌極為顯眼（多個教派）',
      '皇室/君主制相關標誌',
      'Digicel 和 U-Call 品牌',
      '速限以 km/h 標示',
      '主要地區以外標誌有限',
    ],
    plates: [
      '各種車牌格式',
      '可見有限的標準化',
      '政府車牌："GOVT" 標記',
      '皇室車牌：獨特',
      '覆蓋中能見度有限',
    ],
    unique: [
      '靠左行駛 + 波利尼西亞平坦珊瑚島 + 英語 = Tonga',
      '太平洋唯一的君主制國家（皇室象徵和皇宮）',
      '非常平坦的地形（Tongatapu）— 比 Samoa 或 Fiji 更平坦',
      '教堂極為顯眼（Tonga 在太平洋地區人均教堂數最高）',
      'Nuku’alofa 的皇宮 is distinctive',
      '非常罕見的出生點 — 覆蓋極少',
      '.to 網域（URL 縮短服務常用）',
    ],
    tips: [
      '平坦波利尼西亞島嶼 + 靠左行駛 + 到處都是教堂 = Tonga',
      '皇宮/君主制元素 = Tonga（太平洋唯一的君主制）',
      '比 Samoa 平坦得多（Samoa 是火山/多山的）',
      'Nuku’alofa 是唯一可能的出生點',
      '非常罕見 — 只在有強力證據時才猜',
      '部分標誌上可能可見 .to 網域',
      "🔗 <a href=\"https://www.google.com/maps/@-21.2094,-175.1982,3a,75y,90t\" target=\"_blank\" style=\"color:var(--accent-blue)\">Street View 範例（Nukuʻalofa）</a>"
    ],
  },



'american-samoa': {
  name: 'American Samoa', localName: 'Amerika Sāmoa', flag: '🇦🇸', region: 'oceania',
  drivingSide: 'right', tld: '.as', phoneCode: '+1-684', language: 'Samoan, English', currency: 'Dollar (USD)',
  camera: [
    "<strong>99.5% Gen 3 trekker + 0.5% Gen 4</strong>（幾乎全為步行拍攝）",
    "有多種不同的街景車（各島不同）"
  ],
  car: [
    "Tutuila（主島）：黑色皮卡車斗稍有鏽蝕（覆蓋最廣）",
    "Ofu/Olosega 島：銀灰色皮卡車頭兩側有後視鏡",
    "Tau 島：有光澤的黑色皮卡兩側有後視鏡",
    "Tutuila（主島）：黑色車框很髒",
    "多種車型 — 各島不同"
  ],
  roads: [
    "右側行駛",
    "道路品質參差不齊",
    "美式道路標誌"
  ],
  poleInfo: [
    "美式木質電線桿 — 標準太平洋島嶼配置"
  ],
  landscape: [
    "熱帶太平洋島嶼",
    "火山地形",
    "美屬領土 — 可見美國基礎設施"
  ],
  signs: ["英語 + Samoan 雙語", "美式路標"],
  plates: [
    "美式尺寸車牌 — 有 American Samoa 領土標識",
    "設計有本地特色圖案（與美國本土各州車牌類似概念）",
    "右側行駛 + 美式車牌 + 太平洋島嶼 = American Samoa"
  ],
  unique: [
    "美屬太平洋領土",
    "各島有不同的街景車（銀/棕/黑）— 可用於區域辨識",
    "右側行駛（與獨立的 Samoa 不同，Samoa 靠左）",
    "⚠️ 不要和獨立國家 Samoa 混淆"
  ],
  tips: [
    "美式路標 + 太平洋島嶼 + 右側行駛 = American Samoa",
    "Samoa（獨立）靠左行駛；American Samoa 靠右 — 關鍵區別",
    "🔗 <a href=\"https://www.google.com/maps/@-14.2756,-170.702,3a,75y,90t\" target=\"_blank\" style=\"color:var(--accent-blue)\">Street View 範例（Pago Pago）</a>"
  ]
},

'georgia': {
  name: 'Georgia', localName: 'საქართველო', flag: '🇬🇪', region: 'asia',
  drivingSide: 'right', tld: '.ge', phoneCode: '+995', language: 'Georgian', currency: 'Lari (GEL)',
  camera: [
    "<strong>72% Gen 3 + 28% Gen 4</strong>",
    "主要城市和公路覆蓋良好",
    "鄉村山區覆蓋較少"
  ],
  car: [
    "Gen 3：白色轎車",
    "Gen 4：標準配置"
  ],
  roads: [
    "右側行駛",
    "白色中心線和邊線",
    "山路蜿蜒（高加索山脈）",
    "路面品質在城市良好，鄉村差異大"
  ],
  landscape: [
    "高加索山脈 — 壯觀山景",
    "黑海沿岸",
    "綠色山谷配葡萄園",
    "古老石造教堂和修道院",
    "Tbilisi 的混合建築（古老+蘇聯+現代）"
  ],
  signs: [
    "喬治亞文範例：<span class=\"script-sample\" style=\"font-size:1.2rem\">ქუჩა თბილისი</span> — 極度獨特的圓潤藤蔓狀字母",
    "<strong>喬治亞文 (ქართული)</strong> — 全球唯一使用此文字的國家",
    "俄語也偶爾可見（但不是官方語言）",
    "路標常有喬治亞文 + 拉丁字母轉寫"
  ],
  plates: [
    "白色車牌，左側藍色條紋 + GE 代碼",
    "格式類似歐洲"
  ],
  unique: [
    "<strong>喬治亞文字</strong> — 圓潤的藤蔓狀曲線，全球唯一，一眼辨識",
    "高加索山脈壯觀景色",
    "古老石造教堂和修道院隨處可見",
    "葡萄酒文化（世界最古老的釀酒國之一）",
    "Tbilisi 的硫磺浴場區可辨識",
    "路名使用 ქუჩა (kucha = 街道)、გამზირი (gamziri = 大道)"
  ],
  tips: [
    "看到圓潤藤蔓狀文字 = Georgia（全球唯一）",
    "高加索山脈 + 喬治亞文 = Georgia",
    "不要和美國的 Georgia 州混淆",
    "🔗 <a href=\"https://www.google.com/maps/@41.7151,44.8271,3a,75y,90t\" target=\"_blank\" style=\"color:var(--accent-blue)\">Street View 範例（Tbilisi）</a>"
  ]
},

// ╔══════════════════════════════════════════╗
// ║    ADDITIONAL TERRITORIES / STATES       ║
// ╚══════════════════════════════════════════╝

'pitcairn-islands': {
  name: 'Pitcairn Islands', localName: 'Pitcairn Islands', flag: '🇵🇳', region: 'oceania',
  drivingSide: 'left', tld: '.pn', phoneCode: '+64', language: 'English, Pitkern', currency: 'New Zealand Dollar (NZD)',
  camera: [
    "<strong>100% Trekker（三代徒步者拍攝）</strong>",
    "覆蓋僅存在於兩個島嶼：Pitcairn 島和 Henderson 島",
    "Henderson 島僅有少量海灘覆蓋",
    "Pitcairn 島大部分覆蓋在穿過森林的小土路上"
  ],
  car: [
    "無街景車 — 全部為 trekker 徒步覆蓋",
    "相機高度低於一般街景車",
    "無車輛輪廓、無陰影"
  ],
  roads: [
    "左側行駛（英國海外領土）",
    "穿過森林的小土路為主",
    "Adamstown 鎮內部分道路為混凝土鋪面",
    "大部分路面為泥土，非鋪裝道路"
  ],
  landscape: [
    "南太平洋上的半熱帶島嶼，樹木茂密",
    "<strong>土壤通常為紅色</strong> — 重要辨識特徵",
    "Henderson 島僅有北岸和東岸的白色沙灘",
    "Pitcairn 島地形起伏，森林覆蓋率高",
    "英國在太平洋唯一的海外屬地"
  ],
  signs: [
    "英語 + Pitkern 克里奧爾語",
    "Adamstown 是唯一的定居點",
    "極少標誌 — 島嶼極小（人口約 50 人）"
  ],
  plates: [
    "極少車輛 — 主要使用 ATV（全地形車）",
    "碼頭區域停放大量 ATV",
    "無標準車牌系統"
  ],
  unique: [
    "<strong>全球最小的有人居住自治領土之一</strong>（約 50 人）",
    "100% trekker 覆蓋 — 無街景車",
    "<strong>紅色土壤</strong> + 半熱帶森林 + 小土路 = Pitcairn",
    "Adamstown 東端碼頭有大量 ATV",
    "Henderson 島的白色沙灘覆蓋很獨特",
    "英屬太平洋領土 — 極為偏遠"
  ],
  tips: [
    "trekker 覆蓋 + 紅色土壤 + 半熱帶森林小路 = Pitcairn Islands",
    "看到 ATV 集中停放 + 極小定居點 = Adamstown, Pitcairn",
    "白色沙灘 + 無任何建築 = Henderson 島",
    "不要和其他太平洋島嶼混淆 — Pitcairn 的 trekker + 紅土組合很獨特",
    "🔗 <a href=\"https://www.google.com/maps/@-25.0662,-130.1005,3a,75y,90t\" target=\"_blank\" style=\"color:var(--accent-blue)\">Street View 範例（Pitcairn Islands）</a>"
  ]
},

'saint-pierre-and-miquelon': {
  name: 'Saint Pierre and Miquelon', localName: 'Saint-Pierre-et-Miquelon', flag: '🇵🇲', region: 'north-america',
  drivingSide: 'right', tld: '.pm', phoneCode: '+508', language: 'French', currency: 'Euro (EUR)',
  camera: [
    "<strong>100% Trekker/ATV</strong>",
    "Miquelon-Langlade 鎮：ATV 街景車拍攝（可見 ATV 影子）",
    "Saint-Pierre 鎮：徒步 trekker 在人行道上拍攝",
    "Île-aux-Marins 島：徒步 trekker 覆蓋",
    "部分船上街景（Saint-Pierre 和 Île-aux-Marins 之間）"
  ],
  car: [
    "Miquelon-Langlade：ATV 街景車（可見 ATV 影子）",
    "Saint-Pierre：徒步者 trekker，無車輛",
    "船上街景特徵：穿灰黑色毛衣的男人"
  ],
  roads: [
    "右側行駛（法國領土）",
    "法式道路基礎設施",
    "道路品質適中 — 小型法國海外省",
    "Miquelon-Langlade 有部分未鋪裝道路和木棧道"
  ],
  landscape: [
    "位於加拿大 Newfoundland 以南的法國海外省",
    "<strong>色彩鮮艷的方形木質房屋</strong> — 關鍵辨識特徵",
    "人口密度低，房屋後方常見大片開闊草地",
    "連綿起伏的草地景觀",
    "北端有木棧道穿過樹林的鄉村 trekker 覆蓋",
    "Saint-Pierre 島上的鄉村覆蓋可見更多岩石"
  ],
  signs: [
    "法語 — 法國海外省",
    "在國家連勝模式中視為法國的一部分",
    "可見法式路標和地名"
  ],
  plates: [
    "使用<strong>法國標準車牌</strong>（EU 藍色帶）",
    "白色和黃色車牌，左側有藍色歐盟條帶",
    "白色車牌右側也有藍色條帶",
    "部分車輛無前牌"
  ],
  unique: [
    "<strong>色彩鮮艷的方形木質房屋</strong> — 非常獨特",
    "法語 + 北美 + 開闊草地 = Saint Pierre and Miquelon",
    "ATV 影子可見（Miquelon-Langlade）",
    "船上街景（穿灰黑毛衣男人）",
    "⚠️ 在國家連勝中視為法國"
  ],
  tips: [
    "鮮艷方形木屋 + 法語 + 開闊草地 = Saint Pierre and Miquelon",
    "ATV 影子 + 鮮艷木屋 = Miquelon-Langlade",
    "trekker + 更多建築和車輛 + 更繁忙 = Saint-Pierre 鎮",
    "起伏草地 + 方形木屋散布 = Île-aux-Marins",
    "🔗 <a href=\"https://www.google.com/maps/@46.7738,-56.1815,3a,75y,90t\" target=\"_blank\" style=\"color:var(--accent-blue)\">Street View 範例（Saint-Pierre-and-Miquelon）</a>"
  ]
},

'martinique': {
  name: 'Martinique', localName: 'Martinique', flag: '🇲🇶', region: 'caribbean',
  drivingSide: 'right', tld: '.mq', phoneCode: '+596', language: 'French', currency: 'Euro (EUR)',
  camera: [
    "<strong>~95% Gen 3 Trekker + ~5% 第三方</strong>",
    "覆蓋範圍非常有限 — 僅三個主要 trekker 點",
    "第三方覆蓋：影像未模糊，非 360° 全景",
    "直接記住各覆蓋點的樣子比學習 meta 更實用"
  ],
  car: [
    "無標準 Google 街景車",
    "全部為 trekker 徒步覆蓋 + 第三方影像",
    "第三方影像的車輛未模糊"
  ],
  roads: [
    "右側行駛（法國海外省）",
    "法式道路基礎設施",
    "位於加勒比海，Dominica 和 Saint Lucia 之間"
  ],
  landscape: [
    "加勒比海熱帶島嶼",
    "Habitation Clément 朗姆酒廠：可見卡車、叉車、H 型鋼結構",
    "酒廠外部：紅土和棕櫚樹的鄉村土路",
    "南部沿海：橙色屋頂房屋，透過樹林可見大海",
    "<strong>Jardin de Balata</strong>：黑暗潮濕的熱帶花園，扶壁根、蕨類和竹子"
  ],
  signs: [
    "法語 — 法國海外省",
    "在國家連勝模式中視為法國的一部分",
    "可見法式商業標誌"
  ],
  plates: [
    "使用<strong>法國標準車牌</strong>（EU 藍色帶 + 右側藍色條帶）",
    "法式長牌格式"
  ],
  unique: [
    "<strong>覆蓋極為有限</strong> — 記住三個點的外觀最有效",
    "Habitation Clément 朗姆酒廠（H 型鋼結構 + 紅土 + 機械展示）",
    "南部沿海（橙色屋頂 + 海景 + 停車場和攤位）",
    "Jardin de Balata（黑暗潮濕 + 扶壁根 + 黑衫灰帽男人）",
    "⚠️ 在國家連勝中視為法國"
  ],
  tips: [
    "朗姆酒廠 + 紅土 + 棕櫚樹 + 法語 = Martinique (Habitation Clément)",
    "黑暗潮濕熱帶花園 + 扶壁根 + 蕨類竹子 = Martinique (Jardin de Balata)",
    "加勒比熱帶島嶼 + 法語 + 極少覆蓋 = 可能是 Martinique",
    "⚠️ 覆蓋太少，最好直接背三個點的外觀",
    "🔗 <a href=\"https://www.google.com/maps/@14.6415,-61.0242,3a,75y,90t\" target=\"_blank\" style=\"color:var(--accent-blue)\">Street View 範例（Fort-de-France）</a>"
  ]
},

'azores': {
  name: 'Azores', localName: 'Açores', flag: '🇵🇹', region: 'europe',
  drivingSide: 'right', tld: '.pt', phoneCode: '+351', language: 'Portuguese', currency: 'Euro (EUR)',
  camera: [
    "<strong>Gen 3 (~40%) + Gen 4 (~60%)</strong>",
    "Gen 4 僅在 São Miguel 島",
    "São Miguel 島和 Terceira 島有街景車覆蓋",
    "Faial 島有 trekker 覆蓋（火山口邊緣步行）",
    "少量 trekker 覆蓋（~0.1%）"
  ],
  car: [
    "Gen 3：標準白色轎車",
    "Gen 4：標準配置，僅 São Miguel",
    "Faial 島：trekker 沿火山口邊緣"
  ],
  roads: [
    "右側行駛",
    "葡萄牙式道路基礎設施（電線桿、轉向標、路桩）",
    "道路品質良好（歐盟成員）",
    "島嶼道路蜿蜒"
  ],
  landscape: [
    "<strong>連綿起伏的開闊農田</strong>，遠處有較高的圓形山丘 — 與 Madeira 區分的關鍵",
    "<strong>火山岩乾砌石牆</strong>非常常見 — Madeira 少見此類石牆",
    "<strong>繡球花 (Hydrangea)</strong> 在 Azores 非常常見 — Madeira 僅偶爾可見",
    "<strong>日本雪松 (Cryptomeria japonica)</strong> 非常常見 — Madeira 和歐洲大陸均不常見",
    "<strong>黑白乳牛</strong>非常常見 — Madeira 的牛通常是棕色帶白斑",
    "São Miguel 島是 Azores 和 Madeira 中唯一有湖泊的島嶼"
  ],
  signs: [
    "葡萄牙語",
    "<strong>彩繪瓷磚路標 (Azulejo)</strong> — 藍色字母 + 裝飾邊框 — Azores 獨有",
    "<strong>標誌杆有條紋</strong>（Madeira 也有）",
    "葡萄牙標準路標格式"
  ],
  plates: [
    "葡萄牙標準車牌（EU 藍色帶 + P 代碼）",
    "格式與葡萄牙本土相同"
  ],
  unique: [
    "<strong>火山岩乾砌石牆</strong> — 葡萄牙本土有石牆但非火山岩",
    "<strong>繡球花</strong> + <strong>日本雪松</strong> = 幾乎確認 Azores",
    "<strong>彩繪瓷磚路標</strong>（藍色字母 + 裝飾邊框）",
    "<strong>灰色牆面裝飾</strong> — 幾乎是 Azores 獨有（本土多黃色或藍色）",
    "白色/柔和色彩牆面 + 橙色瓦片屋頂 + 墨綠色百葉窗",
    "黑白乳牛遍布農田",
    "開闊農田 + 圓形山丘（Madeira 多山少平地）"
  ],
  tips: [
    "火山岩石牆 + 繡球花 + 日本雪松 = Azores",
    "開闊農田 + 圓形山丘 = Azores（Madeira 地形更陡峭）",
    "黑白乳牛 = Azores；棕色帶白斑牛 = Madeira",
    "彩繪瓷磚路標（藍色字母）= Azores",
    "Gen 4 覆蓋 = São Miguel 島",
    "trekker 沿火山口邊緣 = Faial 島",
    "🔗 <a href=\"https://www.google.com/maps/@37.7833,-25.5,3a,75y,90t\" target=\"_blank\" style=\"color:var(--accent-blue)\">Street View 範例（Ponta Delgada）</a>"
  ]
},

'madeira': {
  name: 'Madeira', localName: 'Madeira', flag: '🇵🇹', region: 'europe',
  drivingSide: 'right', tld: '.pt', phoneCode: '+351', language: 'Portuguese', currency: 'Euro (EUR)',
  camera: [
    "<strong>Gen 3 (~76%) + Gen 4 (~19%) + 'Official Ari'/Shitcam (~5%)</strong>",
    "⚠️ 有一種低畫質 'Official Ari' (shitcam) 相機 — 圓形打碼較寬、畫面較暗",
    "Shitcam 覆蓋中常見未模糊的白色後車",
    "正常題庫不會包含 shitcam，但需有印象以防意外"
  ],
  car: [
    "Gen 3/4：標準配置",
    "Shitcam：低畫質，寬圓形打碼，畫面陰暗",
    "Shitcam 中白色後車後端未模糊"
  ],
  roads: [
    "右側行駛",
    "葡萄牙式道路基礎設施（電線桿、轉向標）",
    "<strong>混凝土路障</strong>常見於道路兩旁，通常塗白色",
    "<strong>黃黑相間護欄</strong>在山路上使用",
    "因島嶼多山，<strong>隧道非常普遍</strong>",
    "橋上常見<strong>深綠色欄杆</strong>"
  ],
  landscape: [
    "<strong>多山的半熱帶島嶼</strong> — 比 Azores 更陡峭",
    "廣泛採用<strong>梯田耕作</strong>，石牆分隔台地",
    "<strong>蕨類植物</strong>全島非常常見",
    "<strong>桉樹林</strong>與葡萄牙本土類似",
    "<strong>非洲百合 (Agapanthus)</strong> 非常常見 — 修長草葉、長莖圓形花簇（白色/藍色）",
    "中西部有突出高原 — 地勢平坦、薄霧、風力發電機",
    "東端非常乾旱，幾乎無植被",
    "南部有<strong>香蕉種植園</strong>",
    "<strong>低雲層</strong>是典型特徵，<strong>霧天覆蓋</strong>很常見"
  ],
  signs: [
    "葡萄牙語",
    "<strong>標誌杆有條紋</strong>（Azores 也有）",
    "葡萄牙標準路標格式",
    "<strong>獨特限速標誌</strong> — Madeira 高速公路獨有樣式"
  ],
  plates: [
    "葡萄牙標準車牌（EU 藍色帶 + P 代碼）",
    "格式與葡萄牙本土相同"
  ],
  unique: [
    "<strong>黃色出租車 + 藍色條紋</strong> — Madeira 獨有",
    "<strong>小型路桩有紅色反光鏡</strong>（長方體或圓柱形）— Madeira 獨有",
    "<strong>黃黑相間護欄</strong>在山路上",
    "梯田 + 石牆 + 陡峭地形 = Madeira",
    "棕色帶白斑乳牛（Azores 為黑白乳牛）",
    "<strong>Shitcam 覆蓋</strong>（低畫質 + 寬圓形打碼）",
    "<strong>公交站牌</strong>採用黑白黃三色獨特配色",
    "Cristiano Ronaldo 國際機場（北部建在混凝土柱上）",
    "Cascata dos Anjos 瀑布傾瀉到公路上"
  ],
  tips: [
    "黃色出租車 + 藍色條紋 = Madeira",
    "紅色反光鏡小路桩 = Madeira",
    "多山 + 梯田 + 隧道 + 葡萄牙語 = Madeira",
    "棕色帶白斑牛 = Madeira；黑白牛 = Azores",
    "高原 + 風力發電機 + 霧 = Madeira 中西部",
    "乾旱無植被 = Madeira 東端",
    "低畫質 shitcam + 葡萄牙語島嶼 = 很可能 Madeira",
    "🔗 <a href=\"https://www.google.com/maps/@32.6669,-16.9241,3a,75y,90t\" target=\"_blank\" style=\"color:var(--accent-blue)\">Street View 範例（Funchal）</a>"
  ]
},

'hawaii': {
  name: 'Hawaii', localName: "Hawai'i", flag: '🇺🇸', region: 'north-america',
  drivingSide: 'right', tld: '.us', phoneCode: '+1', language: 'English, Hawaiian', currency: 'US Dollar (USD)',
  camera: [
    "<strong>Gen 2 (~6%) + Gen 3 (~44%) + Gen 4/小相機 (~50%)</strong>",
    "⚠️ 大量 Gen 4 <strong>小相機 (small cam)</strong> — 比正常相機低，巨大圓形打碼",
    "小相機打碼前部有突出，有時完全透明難以辨識",
    "Gen 2 覆蓋在美國其他州稀少，但 Hawaii 有相當數量",
    "Gen 2 多在鄉村小道上"
  ],
  car: [
    "大島、Maui、O'ahu 的小相機：<strong>黑色街景車</strong>，引擎蓋和後視鏡常未模糊",
    "Kaua'i、Moloka'i、Lana'i 的小相機：<strong>白色街景車</strong>",
    "Gen 3：可見<strong>短粗天線</strong>（不一定總能看到）",
    "Gen 2：低畫質，上下方有圓形模糊"
  ],
  roads: [
    "右側行駛（美國州）",
    "美式道路基礎設施和路標",
    "<strong>高速路盾牌似吉他撥片</strong>，數字在下方 — Hawaii 獨有",
    "大多數高速路牌杆為<strong>黃色</strong>",
    "<strong>凸起路面標記</strong>獨特排列：1 個反光塊 → 4 個緊挨 → 1 個 → 循環",
    "州級公路第一位數可判斷島嶼：1-2 大島、3 Maui、4 Moloka'i/Lana'i、5 Kaua'i、6-9 O'ahu"
  ],
  landscape: [
    "火山列島 — 火山斜坡、岩石懸崖、山谷、火山口",
    "鬱鬱蔥蔥的<strong>熱帶植被</strong> — 蕨類、高草、野花",
    "多樣地形 + 熱帶植被是辨識 Hawaii 的關鍵組合",
    "<strong>Kaua'i</strong>：深紅色土 + 崎嶇山丘 + 茂密叢林感",
    "<strong>O'ahu</strong>：陡峭山坡 + 茂密叢林 + Honolulu 城區",
    "<strong>Moloka'i</strong>：深紅色土 + 較乾燥 + 東端明顯火山",
    "<strong>Lana'i</strong>：高大柱狀南洋杉 + 中心火山",
    "<strong>Maui</strong>：中心乾燥平草原 + 沿海茂密 + 可見一或兩座山脈",
    "<strong>大島 (Hawaii Island)</strong>：起伏草原 + 火山石 + 多座火山可見"
  ],
  signs: [
    "<strong>夏威夷語地名</strong>非常常見 — 美國唯一使用本地語言的州",
    "夏威夷語特徵：元音主導，僅 8 個輔音（H,K,L,M,N,P,W + 喉塞音'）",
    "每個單詞以 A,E,I,O,U 結尾，可有長音符號（Ā,Ē,Ī,Ō,Ū）",
    "常見雙元音：ui, ai, ae 等",
    "英語為主要通行語言"
  ],
  plates: [
    "<strong>白色底 + 弧形彩虹</strong> — Hawaii 最常見車牌",
    "模糊後仍可見彩虹輪廓",
    "車輛需要前牌"
  ],
  unique: [
    "<strong>車牌上的彩虹</strong> — 即使模糊也能辨識",
    "<strong>吉他撥片形高速盾牌</strong> + 黃色路牌杆 = Hawaii",
    "<strong>大量小相機 (small cam) 覆蓋</strong> — 低矮 + 巨大圓形打碼",
    "<strong>電線桿上厚黃條</strong>（加州為三條紋 — 不要混淆）",
    "Gen 3 短粗天線",
    "夏威夷語地名（元音主導 + 喉塞音）",
    "<strong>O'ahu 獨有</strong>：可見明顯綠色模糊塊",
    "凸起路面標記的 1-4-1 獨特排列",
    "四個州際公路全在 O'ahu"
  ],
  tips: [
    "彩虹車牌 + 熱帶火山地形 = Hawaii",
    "吉他撥片盾牌 + 黃色路牌杆 = Hawaii",
    "黑色小相機車 = 大島/Maui/O'ahu；白色小相機車 = Kaua'i/Moloka'i/Lana'i",
    "深紅色土 + 叢林感山丘 = Kaua'i",
    "城市高樓 + 陡峭山坡 = Honolulu, O'ahu",
    "高大柱狀南洋杉 = Lana'i",
    "Gen 2 + 鄉村小道 + 紅土 → 嘗試猜 Kaua'i",
    "州級公路首位數判斷島嶼：1-2=大島, 3=Maui, 4=Moloka'i/Lana'i, 5=Kaua'i, 6-9=O'ahu",
    "🔗 <a href=\"https://www.google.com/maps/@21.3069,-157.8583,3a,75y,90t\" target=\"_blank\" style=\"color:var(--accent-blue)\">Street View 範例（Honolulu）</a>"
  ]
},

'alaska': {
  name: 'Alaska', localName: 'Alaska', flag: '🇺🇸', region: 'north-america',
  drivingSide: 'right', tld: '.us', phoneCode: '+1', language: 'English', currency: 'US Dollar (USD)',
  camera: [
    "<strong>Gen 2 (~8%) + Gen 3 (~19%) + Gen 4 (~69%) + Shitcam (~1%)</strong>",
    "Gen 4 集中於 Anchorage 附近",
    "美國唯一普遍使用 <strong>Shitcam (印度相機)</strong> 的州 — 畫質低、色彩暗淡、巨大底部打碼",
    "Shitcam 僅在 Anchorage、Fairbanks 及連接兩地的部分路段",
    "有相當數量的 Gen 2 覆蓋（美國其他州稀少）",
    "部分 trekker 覆蓋（Nome、Unalakleet、Galena 等偏遠小鎮）"
  ],
  car: [
    "Gen 4：標準配置，集中 Anchorage 區域",
    "Gen 2：低畫質，部分道路大霧或下雨",
    "Shitcam：畫質低，底部巨大打碼 — Alaska 標誌性相機",
    "Trekker：可見淡綠色帽子或黑白無檐帽 — Nome/Unalakleet/Galena",
    "Nome 的 trekker 特有黑白色印花大圍巾"
  ],
  roads: [
    "右側行駛（美國州）",
    "美式道路基礎設施和路標",
    "<strong>高速盾牌左下角有北斗七星圖案</strong> — Alaska 獨有",
    "Dalton Highway 北端：平坦開闊雪景",
    "Denali Highway：砂石路面 + 野花和綠色灌木（暮夏拍攝）",
    "Steese Highway：砂石路面，費爾班克斯通往 Central，周圍山較低",
    "Highway 5：大霧下雨天氣 + Gen 2 覆蓋"
  ],
  landscape: [
    "<strong>白雪皑皑的高聳山峰</strong>常見於街景中",
    "樹木比其他州更<strong>瘦削</strong>，少有闊葉",
    "內陸和北方：亞寒帶/苔原氣候，較少森林、更矮的樹",
    "Alexander 群島小鎮：高山 + 蔥綠森林包圍 + 木質建築 + Gen 2 常陰鬱多霧",
    "<strong>山楊樹 (Populus tremuloides)</strong> — 白色樹皮 + 圓葉，內陸和中南部低海拔",
    "<strong>Alaska 管道</strong>在主幹道經常可見 — 美國其他州沒有類似管道",
    "Prudhoe Bay：美國最北有覆蓋點，寒冷荒蕪 + 陰雲 + 無高層建築"
  ],
  signs: [
    "英語",
    "美式路標和公路標線",
    "高速盾牌上的 'ALASKA' 字樣 + 北斗七星"
  ],
  plates: [
    "<strong>通體黃色車牌</strong> — 最常見且最顯眼",
    "Gen 4 中可見中間有大橙色圓圈的牌照",
    "車輛需要前牌",
    "多種歷史版本（1997-2004、2010-、2015- 等）"
  ],
  unique: [
    "<strong>黃色車牌</strong> — Alaska 最具辨識度的特徵",
    "<strong>高速盾牌北斗七星</strong> = 立即確認 Alaska",
    "<strong>Alaska 管道</strong>在路邊可見 — 美國唯一",
    "<strong>Shitcam</strong> — 美國唯一普遍使用印度相機的州",
    "瘦削針葉樹 + 雪山 = Alaska",
    "Anchorage 消防栓：淡粉色或淡黃色",
    "Fairbanks 消防栓：亮黃色或拼色（黃+藍）",
    "Dalton Highway 北端的平坦開闊雪景",
    "Juneau（首府）：Alaska 狹長地帶最大定居點"
  ],
  tips: [
    "黃色車牌 = Alaska",
    "北斗七星高速盾牌 = Alaska",
    "路邊管道 = Alaska（美國其他州沒有）",
    "Shitcam + 美國景觀 = Alaska",
    "瘦削樹木 + 雪山 + 荒涼 = Alaska 內陸",
    "高山 + 蔥綠森林 + 多霧 Gen 2 = Alexander 群島（東南 Alaska）",
    "Gen 4 集中 = Anchorage 附近",
    "安克雷奇和費爾班克斯是唯二都市區",
    "🔗 <a href=\"https://www.google.com/maps/@61.2181,-149.9003,3a,75y,90t\" target=\"_blank\" style=\"color:var(--accent-blue)\">Street View 範例（Anchorage）</a>"
  ]
},

};

const META_SECTIONS = [
  {
    icon: '📷',
    title: '相機世代',
    content: `
      <div class="meta-info-block">
        <h4>Gen 1 (2007–2009)</h4>
        <img src="https://d33wubrfki0l68.cloudfront.net/ab0b7f648e4579d6245bc7df6229a5bda05c2608/14526/static/img/camera-gens/gen-1.jpg" alt="Gen 1" style="max-width:100%;border-radius:8px;margin:8px 0;">
        <p><strong>畫質：</strong>極低 — 嚴重壓縮失真、模糊、天空過曝且有可見接縫。<br>
        <strong>相機：</strong>Dodeca 2360 / R2<br>
        <strong>涵蓋國家：</strong>僅 <a onclick="navigateTo('country','usa')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">USA</a>, <a onclick="navigateTo('country','australia')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Australia</a>, New Zealand（只有這 3 國）<br>
        <strong>辨識要點：</strong>極差畫質 + 天空接縫 = Gen 1 → 只會是 <a onclick="navigateTo('country','usa')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">USA</a>、<a onclick="navigateTo('country','australia')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Australia</a> 或 <a onclick="navigateTo('country','new-zealand')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">New Zealand</a><br>
        <strong>🔗 範例：</strong><a href="https://www.google.com/maps/@37.7749,-122.4194,3a,75y,90t" target="_blank" style="color:var(--accent-blue)">San Francisco (Google Maps)</a> — ⚠️ 需使用時間旅行（🕐 圖標）切換至 2007 年影像才能看到 Gen 1</p>
      </div>
      <div class="meta-info-block">
        <h4>Gen 2 (2008–2012)</h4>
        <img src="https://d33wubrfki0l68.cloudfront.net/07bd54eb5a0817610b80e59c666d19d6ce449e34/beff7/static/img/camera-gens/gen-2.jpg" alt="Gen 2 - purple halo" style="max-width:100%;border-radius:8px;margin:8px 0;">
        <p><strong>畫質：</strong>比 Gen 1 好但仍為低解析度。<br>
        <strong>關鍵特徵：</strong>太陽周圍有 <strong>purple halo</strong>（鏡頭光暈），地面車輛周圍有<strong>圓形紫色模糊</strong>。<br>
        <strong>相機：</strong>R5（8 顆 5MP 相機 + 魚眼鏡頭 + 3 組雷射掃描器）<br>
        <strong>涵蓋國家：</strong>North America, <a onclick="navigateTo('country','australia')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Australia</a>, NZ, Western Europe<br>
        <strong>辨識要點：</strong>天空有 purple halo = Gen 2 → 排除 Africa、大部分 Asia、South America<br>
        <strong>🔗 範例：</strong><a href="https://www.google.com/maps/@48.8566,2.3522,3a,75y,90t" target="_blank" style="color:var(--accent-blue)">Paris (Google Maps)</a> — ⚠️ 需使用時間旅行切換至 2008-2012 年影像才能看到 Gen 2 (purple halo)</p>
      </div>
      <div class="meta-info-block">
        <h4>Gen 3 (2012–2019)</h4>
        <img src="https://d33wubrfki0l68.cloudfront.net/369fcd7c4bdf6e36fc981df1555933be0e48df5f/5c92b/static/img/camera-gens/gen-3.jpg" alt="Gen 3" style="max-width:100%;border-radius:8px;margin:8px 0;">
        <p><strong>畫質：</strong>大幅提升 — 自然色彩、文字清晰、天空乾淨。<br>
        <strong>相機：</strong>R7（15 顆相機，首款完全由 Google 自製的相機）<br>
        <strong>涵蓋國家：</strong>全球 — 最常見的世代。<br>
        <strong>辨識要點：</strong>正常畫質、無失真 = 大概率 Gen 3<br>
        <strong>🔗 範例：</strong><a href="https://www.google.com/maps/@51.5074,-0.1278,3a,75y,90t" target="_blank" style="color:var(--accent-blue)">London Gen 3 覆蓋 (Google Maps)</a></p>
      </div>
      <div class="meta-info-block">
        <h4>Gen 4 (2017–至今)</h4>
        <img src="https://d33wubrfki0l68.cloudfront.net/cbc70adb9fd0a0c4bba7dc79657ee508d7b6af35/ea3de/static/img/camera-gens/gen-4.jpg" alt="Gen 4" style="max-width:100%;border-radius:8px;margin:8px 0;">
        <p><strong>畫質：</strong>最高 — 色彩極其鮮豔、超高解析度.<br>
        <strong>相機：</strong>7 顆 20MP 感光元件（相比 Gen 3 的 15 顆 5MP 大幅升級）+ 2 顆專用高畫質側面相機。<br>
        <strong>涵蓋國家：</strong>比 Gen 3 少見，主要為近期拍攝。<br>
        <strong>辨識要點：</strong>異常鮮豔/飽和的色彩 + 超高解析度 = Gen 4<br>
        <strong>🔗 範例：</strong><a href="https://www.google.com/maps/@59.3293,18.0686,3a,75y,90t" target="_blank" style="color:var(--accent-blue)">Stockholm Gen 4 覆蓋 (Google Maps)</a></p>
      </div>
      <div class="meta-info-block">
        <h4>⚠️ 特殊相機類型 — 含 Google Maps 範例</h4>
        <p><strong>🔽 Low Cam（低相機）：</strong>確定有的國家：<strong><a onclick="navigateTo('country','japan')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Japan</a>、<a onclick="navigateTo('country','switzerland')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Switzerland</a></strong>（因隱私法規，全國性低相機）。部分覆蓋可能有低相機：Sri Lanka（Gen 4）、<a onclick="navigateTo('country','lebanon')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Lebanon</a>、Italy。Japan 和 <a onclick="navigateTo('country','switzerland')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Switzerland</a> 的模糊區域最大，是最可靠的辨識線索。<br>
        <strong>📷 Unofficial Cam / Small Cam（非官方/小相機）：</strong><a onclick="navigateTo('country','india')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">India</a> — 畫質明顯比標準 Gen 3 差，略帶霧感 (foggy)，文字難以辨認。非 Google 官方拍攝，2022 年後城市擴展。<br>
        <strong>💩 Shit Cam（低品質第三方覆蓋）：</strong><a onclick="navigateTo('country','uganda')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Uganda</a> 等非洲國家 — 極低畫質、嚴重模糊、過曝或欠曝、顏色失真。由 Mapillary 等第三方志願者拍攝，非 360° 全景。<br>
        <strong>🚶 Trekker Coverage（步行拍攝）：</strong>背包式 360° 相機步行拍攝。常見於地標、國家公園、大學。<a onclick="navigateTo('country','costa-rica')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Costa Rica</a> (2025前) 僅有此類覆蓋 — 只能在人行道上移動。<br>
        <strong>🛻 Pickup Truck 覆蓋：</strong>Bermuda（黑色 pickup）、<a onclick="navigateTo('country','christmas-island')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Christmas Island</a>（銀色 pickup）、<a onclick="navigateTo('country','us-virgin-islands')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">US Virgin Islands</a>（白色/紅色卡車）— 非轎車，可能為皮卡或 SUV。
        <br><br><strong>🔗 Google Maps 範例連結：</strong><br>
        • <a href="https://www.google.com/maps/@35.6762,139.6503,3a,75y,90t" target="_blank" style="color:var(--accent-blue)"><a onclick="navigateTo('country','japan')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Japan</a> Low Cam (Tokyo)</a><br>
        • <a href="https://www.google.com/maps/@47.3769,8.5417,3a,75y,90t" target="_blank" style="color:var(--accent-blue)"><a onclick="navigateTo('country','switzerland')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Switzerland</a> Low Cam (Zürich)</a><br>
        • <a href="https://www.google.com/maps/@28.6139,77.2090,3a,75y,90t" target="_blank" style="color:var(--accent-blue)"><a onclick="navigateTo('country','india')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">India</a> Unofficial Cam (Delhi)</a><br>
        • <a href="https://www.google.com/maps/@0.3136,32.5811,3a,75y,90t" target="_blank" style="color:var(--accent-blue)"><a onclick="navigateTo('country','uganda')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Uganda</a> Coverage (Kampala)</a></p>
      </div>
      <div class=meta-info-block>
        <h4>快速辨識流程</h4>
        <p>1. 極差畫質 + 天空接縫 → <strong>Gen 1</strong>（僅 <a onclick="navigateTo('country','usa')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">USA</a>/AUS/NZ）<br>
        2. 天空有 purple halo + 地面模糊 → <strong>Gen 2</strong><br>
        3. 正常畫質、乾淨 → <strong>Gen 3</strong>（最常見）<br>
        4. 超鮮豔色彩 + 超高解析度 → <strong>Gen 4</strong></p>
      </div>
    `
  },
  {
    icon: '🚗',
    title: 'Google 街景車 Meta',
    content: `
      <div class="meta-info-block">
        <h4>Pickup Truck 國家（非轎車）</h4>
        <p>以下國家使用 pickup truck 而非轎車拍攝 Street View：<br>
        • <strong><a onclick="navigateTo('country','bermuda')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Bermuda</a></strong> — 黑色 pickup truck（有時模糊化處理）<br>
        • <strong><a onclick="navigateTo('country','christmas-island')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Christmas Island</a></strong> — 銀色 pickup/ute（後方貨斗可見）<br>
        • <strong><a onclick="navigateTo('country','american-samoa')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">American Samoa</a></strong> — 黑色 ute/truck（後方可見）<br>
        • <strong><a onclick="navigateTo('country','us-virgin-islands')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">US Virgin Islands</a></strong> — St. Thomas/St. John = 白色 truck + 黑色天線；St. Croix = 紅白色 truck<br>
        • <strong><a onclick="navigateTo('country','kazakhstan')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Kazakhstan</a></strong> — 白色 pickup truck（bars 在後方，常被完全模糊化）<br>
        • <strong><a onclick="navigateTo('country','namibia')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Namibia</a></strong> — 白色 pickup truck<br>
        • <strong><a onclick="navigateTo('country','oman')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Oman</a></strong> — 白色 pickup truck（天線在中間）<br>
        • <strong><a onclick="navigateTo('country','qatar')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Qatar</a></strong> — 白色 pickup truck（天線在左）<br>
        • <strong><a onclick="navigateTo('country','senegal')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Senegal</a></strong> — Gen 4：銀色/白色 truck cab<br>
        • <strong><a onclick="navigateTo('country','rwanda')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Rwanda</a></strong> — Pickup truck（白/黑/灰棕色，紅色煞車燈在車頂）<br>
        • <strong><a onclick="navigateTo('country','nigeria')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Nigeria</a></strong> — 大型 pickup truck（白/紅色，黃黑色 rack）<br>
        • <strong><a onclick="navigateTo('country','turkey')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Turkey</a></strong> — Gen 4：灰色 pickup truck（也有白色轎車）<br>
        • <strong><a onclick="navigateTo('country','iceland')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Iceland</a></strong> — Gen 4：白色（七月）/紅色（八月）pickup truck<br>
        • <strong><a onclick="navigateTo('country','mongolia')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Mongolia</a></strong> — 部分涵蓋使用白/藍色 pickup truck<br>
        • <strong><a onclick="navigateTo('country','peru')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Peru</a></strong> — 部分涵蓋（120 號公路）使用黑色 truck</p>
      </div>
      <div class="meta-info-block">
        <h4>Snorkel（進氣管）</h4>
        <p>只有兩個國家的 Google car 有 snorkel：<br>
        • <strong><a onclick="navigateTo('country','kenya')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Kenya</a></strong> — 右前方大型黑色 snorkel（用於涉水過河）— 100% 確認 <a onclick="navigateTo('country','kenya')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Kenya</a><br>
        • <strong><a onclick="navigateTo('country','mongolia')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Mongolia</a></strong> — Snorkel + 車頂露營裝備/背包</p>
      </div>
      <div class="meta-info-block">
        <h4>Roof Rack 辨識</h4>
        <p>• <strong><a onclick="navigateTo('country','ghana')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Ghana</a></strong> — 銀色車架，<strong>前橫桿右端</strong>纏黑色膠帶（100% <a onclick="navigateTo('country','ghana')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Ghana</a>）<br>
        • <strong><a onclick="navigateTo('country','reunion')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Réunion</a></strong> — <strong>僅後橫桿</strong>纏黑色膠帶（前 vs 後 = <a onclick="navigateTo('country','ghana')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Ghana</a> vs Réunion）<br>
        • <strong><a onclick="navigateTo('country','nigeria')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Nigeria</a></strong> — 獨特黃/黑色橫桿 + 警車隨行護衛<br>
        • <strong><a onclick="navigateTo('country','mongolia')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Mongolia</a></strong> — 車架附露營裝備/背包；西部/UB = 黑色橡膠填充橫桿；東部 = 無填充<br>
        • <strong><a onclick="navigateTo('country','kyrgyzstan')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Kyrgyzstan</a></strong> — 四根橫桿可見 + 側鏡，但<strong>無背包</strong>（vs <a onclick="navigateTo('country','mongolia')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Mongolia</a> 有背包）<br>
        • <strong><a onclick="navigateTo('country','guatemala')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Guatemala</a></strong> — 灰色車 + 車架 + 可見黑色側鏡（<a onclick="navigateTo('country','guatemala')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Guatemala</a> 獨有側鏡配置）<br>
        • <strong><a onclick="navigateTo('country','dominican-republic')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Dominican Republic</a></strong> — 車架中間有黑色橡膠條紋（僅 DR 和 <a onclick="navigateTo('country','mongolia')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Mongolia</a> UB 有此特徵）<br>
        • <strong><a onclick="navigateTo('country','curacao')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Curaçao</a></strong> — 黑色車 + 車架 + 白色貼紙 + 可見黑色引擎蓋（全球唯一組合）<br>
        • <strong><a onclick="navigateTo('country','laos')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Laos</a></strong> — 可見 roof rack（首都 Vientiane 除外）<br>
        • <strong><a onclick="navigateTo('country','guam')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Guam</a></strong> — 微小 roof rack + 右前長天線<br>
        • <strong><a onclick="navigateTo('country','bangladesh')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Bangladesh</a></strong> — 黑色 bars + 紅色側鏡（全球獨有配置）</p>
      </div>
      <div class="meta-info-block">
        <h4>天線類型</h4>
        <p>• <strong>圓形天線（circular）</strong> — Gen 4 Europe：Sweden, <a onclick="navigateTo('country','hungary')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Hungary</a>, <a onclick="navigateTo('country','bulgaria')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Bulgaria</a>, <a onclick="navigateTo('country','romania')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Romania</a>, <a onclick="navigateTo('country','france')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">France</a>, <a onclick="navigateTo('country','croatia')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Croatia</a>, <a onclick="navigateTo('country','italy')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Italy</a>, <a onclick="navigateTo('country','slovenia')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Slovenia</a><br>
        • <strong>長天線（long）</strong> — <a onclick="navigateTo('country','russia')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Russia</a>, Donetsk, <a onclick="navigateTo('country','israel')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Israel</a>, <a onclick="navigateTo('country','palestine')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Palestine</a>（黑色車配長天線）<br>
        • <strong>短粗天線（stubby）</strong> — <a onclick="navigateTo('country','mexico')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Mexico</a>, <a onclick="navigateTo('country','colombia')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Colombia</a>, <a onclick="navigateTo('country','ecuador')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Ecuador</a>, <a onclick="navigateTo('country','brazil')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Brazil</a>（拉丁美洲共通）<br>
        • <strong>三脊天線（three-ridge）</strong> — <a onclick="navigateTo('country','usa')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">USA</a>, <a onclick="navigateTo('country','new-zealand')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">New Zealand</a>, Hawaii, <a onclick="navigateTo('country','cambodia')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Cambodia</a><br>
        • <strong>細短天線（thin stubby）</strong> — Java, <a onclick="navigateTo('country','indonesia')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Indonesia</a> 限定<br>
        • <strong>獨特粗天線</strong> — 僅 <a onclick="navigateTo('country','panama')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Panama</a>（全球唯一，100% 確認）<br>
        • <strong>Gen 3 膠帶天線</strong> — <a onclick="navigateTo('country','czechia')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Czechia</a>, <a onclick="navigateTo('country','slovakia')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Slovakia</a>, <a onclick="navigateTo('country','hungary')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Hungary</a>, Romania（東歐共通特徵）<br>
        • <strong>無天線</strong> — Greece（所有年份皆無）, <a onclick="navigateTo('country','serbia')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Serbia</a>, <a onclick="navigateTo('country','north-macedonia')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">North Macedonia</a>, <a onclick="navigateTo('country','turkey')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Turkey</a> (Gen 3)<br>
        • <strong>Gen 4 無天線</strong> — <a onclick="navigateTo('country','ireland')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Ireland</a>, <a onclick="navigateTo('country','norway')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Norway</a>, <a onclick="navigateTo('country','denmark')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Denmark</a>, Czechia (2019-2020)</p>
      </div>
      <div class="meta-info-block">
        <h4>Gen 4 Europe 車色（依年份）</h4>
        <p><strong>藍色 + 圓形天線：</strong><a onclick="navigateTo('country','sweden')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Sweden</a>, <a onclick="navigateTo('country','hungary')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Hungary</a>, <a onclick="navigateTo('country','bulgaria')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Bulgaria</a>, <a onclick="navigateTo('country','romania')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Romania</a>, <a onclick="navigateTo('country','france')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">France</a> (2021), <a onclick="navigateTo('country','italy')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Italy</a>, <a onclick="navigateTo('country','croatia')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Croatia</a> (2022), <a onclick="navigateTo('country','slovenia')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Slovenia</a> (2023)<br>
        <strong>藍色，無天線：</strong><a onclick="navigateTo('country','ireland')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Ireland</a>, <a onclick="navigateTo('country','norway')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Norway</a>, Czechia (2019-2020), <a onclick="navigateTo('country','denmark')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Denmark</a> (2019-2020), <a onclick="navigateTo('country','hungary')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Hungary</a> (2019-2020)<br>
        <strong>黑色 + 圓形天線：</strong><a onclick="navigateTo('country','bulgaria')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Bulgaria</a> + <a onclick="navigateTo('country','lithuania')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Lithuania</a> (2024), <a onclick="navigateTo('country','lithuania')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Lithuania</a> + Czechia + Netherlands + <a onclick="navigateTo('country','uk')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">UK</a> (2023), <a onclick="navigateTo('country','latvia')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Latvia</a> (2022)<br>
        <strong>紅色：</strong><a onclick="navigateTo('country','sweden')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Sweden</a>, <a onclick="navigateTo('country','slovakia')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Slovakia</a>, <a onclick="navigateTo('country','bulgaria')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Bulgaria</a>, <a onclick="navigateTo('country','greece')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Greece</a><br>
        <strong>白色：</strong><a onclick="navigateTo('country','sweden')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Sweden</a>, <a onclick="navigateTo('country','turkey')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Turkey</a>, <a onclick="navigateTo('country','luxembourg')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Luxembourg</a><br>
        <strong>⚠️ 注意：</strong><a onclick="navigateTo('country','austria')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Austria</a> 和 <a onclick="navigateTo('country','belgium')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Belgium</a> 在 Gen 4 中沒有可見車輛</p>
      </div>
      <div class="meta-info-block">
        <h4>南美車色</h4>
        <p>• <strong>黑色車</strong> — <a onclick="navigateTo('country','argentina')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Argentina</a>, <a onclick="navigateTo('country','uruguay')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Uruguay</a><br>
        • <strong>白色車</strong> — <a onclick="navigateTo('country','chile')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Chile</a>, <a onclick="navigateTo('country','bolivia')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Bolivia</a>, <a onclick="navigateTo('country','ecuador')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Ecuador</a><br>
        • <strong>深灰色車</strong> — <a onclick="navigateTo('country','peru')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Peru</a> (Gen 4)<br>
        • <strong>藍色車</strong> — <a onclick="navigateTo('country','brazil')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Brazil</a> (Gen 4：所有 Gen 4 涵蓋皆為藍色)<br>
        • <strong>多色</strong> — Colombia（黑/白/灰）, <a onclick="navigateTo('country','peru')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Peru</a> (Gen 3：白+黑)</p>
      </div>
      <div class="meta-info-block">
        <h4>中東車輛快速辨識</h4>
        <p>• <strong><a onclick="navigateTo('country','uae')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">UAE</a></strong> — 白色<strong>轎車</strong><br>
        • <strong><a onclick="navigateTo('country','jordan')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Jordan</a></strong> — <strong>黑色</strong>轎車（vs <a onclick="navigateTo('country','uae')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">UAE</a> 白色 = 最簡單辨識法）<br>
        • <strong><a onclick="navigateTo('country','israel')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Israel</a></strong> — 黑色轎車 + <strong>長天線</strong><br>
        • <strong><a onclick="navigateTo('country','oman')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Oman</a></strong> — 白色 <strong>pickup truck</strong>（天線在中間）<br>
        • <strong><a onclick="navigateTo('country','qatar')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Qatar</a></strong> — 白色 <strong>pickup truck</strong>（天線在左）</p>
      </div>
      <div class="meta-info-block">
        <h4>非洲車輛快速辨識</h4>
        <p>• <strong><a onclick="navigateTo('country','kenya')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Kenya</a></strong> — Snorkel（100% 確認）<br>
        • <strong><a onclick="navigateTo('country','ghana')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Ghana</a></strong> — 前橫桿黑色膠帶（100% 確認）<br>
        • <strong><a onclick="navigateTo('country','nigeria')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Nigeria</a></strong> — 黃/黑 rack + 警車護送<br>
        • <strong><a onclick="navigateTo('country','senegal')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Senegal</a></strong> — 銀/白色 truck cab (Gen 4)<br>
        • <strong><a onclick="navigateTo('country','south-africa')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">South Africa</a></strong> — Gen 4 天藍色車 + 短黑色天線；Kruger Park = 迷彩車<br>
        • <strong><a onclick="navigateTo('country','uganda')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Uganda</a></strong> — 白色方形 SUV + 方形側鏡<br>
        • <strong><a onclick="navigateTo('country','rwanda')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Rwanda</a></strong> — Pickup truck + 車頂紅色煞車燈<br>
        • <strong><a onclick="navigateTo('country','reunion')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Réunion</a></strong> — 後橫桿黑色膠帶<br>
        • <strong><a onclick="navigateTo('country','tunisia')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Tunisia</a></strong> — Follow car：北部 = 淺綠 Toyota；南部 = 深綠 Mazda</p>
      </div>
      <div class="meta-info-block">
        <h4>特殊功能 / 100% 辨識線索</h4>
        <p>• <strong><a onclick="navigateTo('country','sri-lanka')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Sri Lanka</a></strong> — 白色車 + 右側紅色模糊 + 前方藍/白/紅色塊<br>
        • <strong><a onclick="navigateTo('country','croatia')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Croatia</a></strong> — Gen 3 側鏡有黃色貼紙（<a onclick="navigateTo('country','croatia')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Croatia</a> 獨有）<br>
        • <strong><a onclick="navigateTo('country','japan')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Japan</a></strong> — 非常低的相機位置，大型模糊區域<br>
        • <strong><a onclick="navigateTo('country','switzerland')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Switzerland</a></strong> — 極低的相機位置，所有國家中<strong>最大</strong>的模糊區域<br>
        • <strong><a onclick="navigateTo('country','sri-lanka')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Sri Lanka</a> Gen 4</strong> — Low-cam（物體更大、道路更寬、圓形模糊更寬）<br>
        • <strong><a onclick="navigateTo('country','kyrgyzstan')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Kyrgyzstan</a></strong> — 銀色車反射可見於側鏡；側鏡狀態（乾淨/泥濘）可辨識東西部<br>
        • <strong><a onclick="navigateTo('country','bangladesh')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Bangladesh</a></strong> — 黑色 bars + 紅色側鏡（全球獨有配置）<br>
        • <strong><a onclick="navigateTo('country','panama')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Panama</a></strong> — 獨特粗天線（全球唯一，100% 確認）<br>
        • <strong><a onclick="navigateTo('country','bermuda')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Bermuda</a></strong> — 黑色 truck（有時完全模糊化處理）<br>
        • <strong><a onclick="navigateTo('country','christmas-island')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Christmas Island</a></strong> — 銀色 pickup 貨斗可見<br>
        • <strong><a onclick="navigateTo('country','american-samoa')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">American Samoa</a></strong> — 黑色 truck 後方可見<br>
        • <strong><a onclick="navigateTo('country','pakistan')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Pakistan</a></strong> — 向下看可見人的輪廓（Trekker 步行拍攝）<br>
        • <strong>Kruger National Park (South Africa)</strong> — 迷彩花紋車（全球唯一！）</p>
      </div>
      <div class="meta-info-block">
        <h4>Follow Car（跟隨車）辨識</h4>
        <p>• <strong><a onclick="navigateTo('country','nigeria')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Nigeria</a></strong> — 多種：棕色 Toyota SUV (Lagos)、黑色 SUV (Benin City)、紅色車、銀色車、警車<br>
        &nbsp;&nbsp;→ 警燈紅色在左 = 南部；紅色在右 = 北部/Abuja<br>
        • <strong>Tunisia</strong> — 北部 (Hammamet 以北) = 淺綠色 Toyota；南部 = 深綠色 Mazda<br>
        • <strong><a onclick="navigateTo('country','kenya')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Kenya</a></strong> — Toyota follow car（都市區較少見）</p>
      </div>
    `
  },
  {
    icon: '🔤',
    title: '文字 & 字母辨識',
    content: `
      <div class="meta-info-block">
        <h4>拉丁字母變體</h4>
        <p>• <strong>Vietnamese</strong> — 大量附加符號：â, ă, đ, ê, ô, ơ, ư + 聲調標記（「戴很多帽子的拉丁字母」）<br>
        • <strong>Turkish</strong> — ğ, ı（無點 i）, İ, ş, ç, ö, ü<br>
        • <strong>Romanian</strong> — ă, â, î, ș, ț（s 和 t 下方有逗號）<br>
        • <strong>Polish</strong> — ą, ć, ę, ł, ń, ó, ś, ź, ż（大量附加符號）<br>
        • <strong>Czech</strong> — ě, š, č, <strong>ř</strong>, ž, ů, ý（ř 是 Czech 獨有！）<br>
        • <strong>Hungarian</strong> — <strong>ő, ű</strong>（雙銳音符，獨有！）, á, é, ó, ö, ú, ü<br>
        • <strong>Icelandic</strong> — ð, <strong>þ</strong>, æ（þ 是現代使用中 Icelandic 獨有）<br>
        • <strong>Danish/Norwegian</strong> — æ, ø, å<br>
        • <strong>Swedish</strong> — å, ä, ö（是 ö 不是 ø！）<br>
        • <strong>Finnish</strong> — ä, ö（沒有 å）<br>
        • <strong>Estonian</strong> — <strong>õ</strong>, ä, ö, ü（õ 是 Estonian 獨有）</p>
      </div>
      <div class="meta-info-block">
        <h4>西里爾字母 — 國家辨識</h4>
        <p>• 看到 <strong>Ї</strong>（I 上有兩點）或 <strong>Є</strong> → <strong>Ukrainian</strong><br>
        • 看到 <strong>Ё</strong> 或 <strong>Ы</strong> → <strong>Russian</strong>（Ukrainian 沒有這些字母）<br>
        • 看到 <strong>Ъ 作為常用母音</strong> → <strong>Bulgarian</strong><br>
        • 看到 <strong>Ђ</strong> 或 <strong>Ћ</strong> → <strong>Serbian</strong><br>
        • 看到 <strong>Ѓ</strong> 或 <strong>Ќ</strong> → <strong>Macedonian</strong><br>
        • 同一標誌上混用西里爾字母 + 拉丁字母 → <strong><a onclick="navigateTo('country','serbia')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Serbia</a></strong> 或 <strong>Bosnia</strong></p>
      </div>
      <div class="meta-info-block">
        <h4>非拉丁文字快速指南</h4>
        <p>• <strong>Greek</strong> — Φ, Γ, Δ, Θ, Σ, Ψ, Ω。僅 <a onclick="navigateTo('country','greece')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Greece</a>/Cyprus。<br>
        • <strong>Georgian</strong> — 圓形、藤蔓般的裝飾曲線。僅 Georgia。<br>
        • <strong>Armenian</strong> — 獨特的角形曲線。僅 Armenia。<br>
        • <strong>Hebrew</strong> — 從右至左、方塊字母、不連寫。Israel。<br>
        • <strong>Arabic</strong> — 從右至左、連寫/草書體、大量點。Middle East + North Africa。<br>
        • <strong>Devanagari</strong> — 頂部橫線連接字母。India（Hindi）、<a onclick="navigateTo('country','nepal')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Nepal</a>。<br>
        • <strong>Bengali</strong> — 類似 Devanagari 但有向左的三角形。Bangladesh。<br>
        • <strong>Sinhala</strong> — 像各方向的 C 形。Sri Lanka。<br>
        • <strong>Thai</strong> — 字元上有小圓圈 + 直線。Thailand。<br>
        • <strong>Lao</strong> — 類似 Thai 但更圓滑、沒有直線邊緣。<a onclick="navigateTo('country','laos')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Laos</a>。<br>
        • <strong>Khmer</strong> — 字母頂部有向右的小鉤。Cambodia。<br>
        • <strong>Burmese</strong> — 完美的圓形和半圓形。<a onclick="navigateTo('country','myanmar')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Myanmar</a>。<br>
        • <strong>Hangul</strong> — 方塊音節組合（ㄱ,ㄴ,ㄷ）。South Korea。<br>
        • <strong>Ge'ez</strong> — 獨特的幾何字元。<a onclick="navigateTo('country','ethiopia')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Ethiopia</a>/Eritrea。</p>
      </div>
      <div class="meta-info-block">
        <h4>容易混淆的文字配對 — 實體範例</h4>
        <p><strong>Thai vs Lao vs Khmer：</strong></p>
        <div style="display:flex;gap:16px;flex-wrap:wrap;margin:8px 0;">
          <div class="script-sample" style="text-align:center"><div style="font-size:1.6rem">สวัสดี ถนน กรุงเทพ</div><div style="font-size:0.75rem;color:var(--text-muted)">Thai 泰文 — 有<strong>小圓圈</strong>和直線段</div></div>
          <div class="script-sample" style="text-align:center"><div style="font-size:1.6rem">ສະບາຍດີ ຖະໜົນ ວຽງຈັນ</div><div style="font-size:0.75rem;color:var(--text-muted)">Lao 寮文 — 比泰文<strong>更圓滑</strong>，無直線邊</div></div>
          <div class="script-sample" style="text-align:center"><div style="font-size:1.6rem">សួស្តី ផ្លូវ ភ្នំពេញ</div><div style="font-size:0.75rem;color:var(--text-muted)">Khmer 高棉文 — 頂部有<strong>向右的鉤</strong></div></div>
        </div>
        <p><strong>Devanagari vs Bengali：</strong></p>
        <div style="display:flex;gap:16px;flex-wrap:wrap;margin:8px 0;">
          <div class="script-sample" style="text-align:center"><div style="font-size:1.6rem">नमस्ते सड़क दिल्ली</div><div style="font-size:0.75rem;color:var(--text-muted)">Devanagari 天城文 (Hindi) — <strong>頂部橫線</strong>連接字母</div></div>
          <div class="script-sample" style="text-align:center"><div style="font-size:1.6rem">নমস্কার রাস্তা ঢাকা</div><div style="font-size:0.75rem;color:var(--text-muted)">Bengali 孟加拉文 — 也有頂部橫線但有<strong>向左三角形</strong></div></div>
        </div>
        <p><strong>Greek vs Cyrillic：</strong></p>
        <div style="display:flex;gap:16px;flex-wrap:wrap;margin:8px 0;">
          <div class="script-sample" style="text-align:center"><div style="font-size:1.6rem">Καλημέρα Αθήνα Οδός</div><div style="font-size:0.75rem;color:var(--text-muted)">Greek 希臘文 — 有 Φ Θ Ψ Ω Δ</div></div>
          <div class="script-sample" style="text-align:center"><div style="font-size:1.6rem">Здравствуйте Москва Улица</div><div style="font-size:0.75rem;color:var(--text-muted)">Cyrillic 西里爾文 (Russian) — 有 Ж Ш Щ Ы</div></div>
        </div>
        <p><strong>Sinhala vs Tamil：</strong></p>
        <div style="display:flex;gap:16px;flex-wrap:wrap;margin:8px 0;">
          <div class="script-sample" style="text-align:center"><div style="font-size:1.6rem">ආයුබෝවන් කොළඹ</div><div style="font-size:0.75rem;color:var(--text-muted)">Sinhala 僧伽羅文 — 像各方向的 <strong>C</strong></div></div>
          <div class="script-sample" style="text-align:center"><div style="font-size:1.6rem">வணக்கம் சாலை சென்னை</div><div style="font-size:0.75rem;color:var(--text-muted)">Tamil 坦米爾文 — 更多<strong>螺旋和曲線</strong></div></div>
        </div>
        <p><strong>Ukrainian vs Russian：</strong></p>
        <div style="display:flex;gap:16px;flex-wrap:wrap;margin:8px 0;">
          <div class="script-sample" style="text-align:center"><div style="font-size:1.6rem">Київ вулиця Ї Є І Ґ</div><div style="font-size:0.75rem;color:var(--text-muted)">Ukrainian — 有 <strong>Ї Є І Ґ</strong>，無 Ы Ё</div></div>
          <div class="script-sample" style="text-align:center"><div style="font-size:1.6rem">Москва улица Ы Ё Э Ъ</div><div style="font-size:0.75rem;color:var(--text-muted)">Russian — 有 <strong>Ы Ё Э</strong>，無 Ї Є</div></div>
        </div>
        <p><strong>Georgian vs Armenian：</strong></p>
        <div style="display:flex;gap:16px;flex-wrap:wrap;margin:8px 0;">
          <div class="script-sample" style="text-align:center"><div style="font-size:1.6rem">გამარჯობა თბილისი</div><div style="font-size:0.75rem;color:var(--text-muted)">Georgian 喬治亞文 — 圓潤<strong>藤蔓狀</strong>曲線</div></div>
          <div class="script-sample" style="text-align:center"><div style="font-size:1.6rem">Բարև Երևան Փողոց</div><div style="font-size:0.75rem;color:var(--text-muted)">Armenian 亞美尼亞文 — <strong>角度+曲線</strong>組合</div></div>
        </div>
        <p><strong>Vietnamese 越南文 — 拉丁字母但大量聲調符號：</strong></p>
        <div style="display:flex;gap:16px;flex-wrap:wrap;margin:8px 0;">
          <div class="script-sample" style="text-align:center"><div style="font-size:1.4rem">Đường Nguyễn Huệ, Thành phố Hồ Chí Minh</div><div style="font-size:0.75rem;color:var(--text-muted)">像「戴了很多帽子的拉丁文」— đ ơ ư â ă ê</div></div>
        </div>
      </div>
    `
  },
  {
    icon: '🛣️',
    title: '道路標線顏色',
    content: `
      <div class="meta-info-block">
        <h4>常見道路標線視覺圖例</h4>
        <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:12px;margin:8px 0;">
          <div class="road-line-demo"><div class="line yellow"></div><div class="line yellow"></div><div style="font-size:0.7rem;color:#ccc;white-space:nowrap">雙黃實線 (<a onclick="navigateTo('country','usa')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">USA</a>)</div></div>
          <div class="road-line-demo"><div class="line yellow"></div><div style="font-size:0.7rem;color:#ccc;white-space:nowrap">單黃實線 (<a onclick="navigateTo('country','mexico')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Mexico</a>)</div></div>
          <div class="road-line-demo"><div class="line white"></div><div class="line white"></div><div style="font-size:0.7rem;color:#ccc;white-space:nowrap">雙白實線 (EU)</div></div>
          <div class="road-line-demo"><div class="line dashed"></div><div style="font-size:0.7rem;color:#ccc;white-space:nowrap">白虛線 (大部分歐洲)</div></div>
          <div class="road-line-demo"><div class="line yellow"></div><div class="line dashed"></div><div style="font-size:0.7rem;color:#ccc;white-space:nowrap">黃+白虛 (Argentina)</div></div>
          <div class="road-line-demo"><div class="line yellow-dashed"></div><div style="font-size:0.7rem;color:#ccc;white-space:nowrap">黃虛線邊線 (Ireland)</div></div>
          <div class="road-line-demo"><div class="line yellow"></div><div class="line yellow"></div><div class="line dashed"></div><div style="font-size:0.7rem;color:#ccc;white-space:nowrap">三線 (Uruguay)</div></div>
          <div class="road-line-demo"><div class="line white"></div><div class="line white"></div><div style="font-size:0.7rem;color:#ccc;white-space:nowrap">全白 (Chile)</div></div>
        </div>
      </div>
      <div class="meta-info-block">
        <h4>黃色中線</h4>
        <p><strong>美洲：</strong>USA（雙黃線）, <a onclick="navigateTo('country','canada')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Canada</a>, <a onclick="navigateTo('country','mexico')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Mexico</a>（單黃線）, <a onclick="navigateTo('country','brazil')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Brazil</a>, <a onclick="navigateTo('country','colombia')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Colombia</a>, <a onclick="navigateTo('country','peru')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Peru</a>, <a onclick="navigateTo('country','ecuador')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Ecuador</a>, <a onclick="navigateTo('country','bolivia')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Bolivia</a>, <a onclick="navigateTo('country','paraguay')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Paraguay</a>, <a onclick="navigateTo('country','venezuela')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Venezuela</a><br>
        <strong>歐洲：</strong><a onclick="navigateTo('country','norway')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Norway</a>, Finland（多條中線時）<br>
        <strong>亞洲：</strong><a onclick="navigateTo('country','thailand')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Thailand</a>, <a onclick="navigateTo('country','cambodia')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Cambodia</a><br>
        <strong>非洲：</strong>Rwanda（黃色中線 + 白色邊線）<br>
        <strong>⚠️ 混合使用：</strong>Argentina（白虛線、雙黃線、或單黃+白虛混合）, Turkey（大多白線但黃線也不少見，可能全黃或黃白組合）</p>
      </div>
      <div class="meta-info-block">
        <h4>白色中線</h4>
        <p>歐洲大部分國家：France, <a onclick="navigateTo('country','germany')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Germany</a>, <a onclick="navigateTo('country','spain')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Spain</a>, <a onclick="navigateTo('country','italy')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Italy</a>, <a onclick="navigateTo('country','uk')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">UK</a>, <a onclick="navigateTo('country','ireland')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Ireland</a>, <a onclick="navigateTo('country','sweden')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Sweden</a>, <a onclick="navigateTo('country','denmark')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Denmark</a>, <a onclick="navigateTo('country','poland')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Poland</a>, <a onclick="navigateTo('country','greece')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Greece</a> 等<br>
        南美洲：<strong>Chile（全白線 — 獨特！）</strong><br>
        大洋洲：Australia, <a onclick="navigateTo('country','new-zealand')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">New Zealand</a><br>
        亞洲：Malaysia（雙白線）</p>
      </div>
      <div class="meta-info-block">
        <h4>特殊標線樣式</h4>
        <p>• <strong>三條中線</strong> — <a onclick="navigateTo('country','uruguay')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Uruguay</a>, <a onclick="navigateTo('country','philippines')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Philippines</a>, <a onclick="navigateTo('country','south-africa')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">South Africa</a>/<a onclick="navigateTo('country','botswana')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Botswana</a>/<a onclick="navigateTo('country','eswatini')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Eswatini</a>/<a onclick="navigateTo('country','lesotho')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Lesotho</a><br>
        • <strong>黃色邊線</strong> — <a onclick="navigateTo('country','south-africa')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">South Africa</a>, <a onclick="navigateTo('country','botswana')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Botswana</a>, <a onclick="navigateTo('country','lesotho')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Lesotho</a>, <a onclick="navigateTo('country','eswatini')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Eswatini</a>, <a onclick="navigateTo('country','israel')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Israel</a>, <a onclick="navigateTo('country','jordan')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Jordan</a>, <a onclick="navigateTo('country','uae')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">UAE</a>, <a onclick="navigateTo('country','oman')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Oman</a><br>
        • <strong>黃色虛線邊線</strong> — Ireland（非常獨特！）<br>
        • <strong>超長白色虛線邊線</strong> — France（Europe 中獨有）<br>
        • <strong>全白標線（中線 + 邊線）</strong> — 在 South America 僅 <a onclick="navigateTo('country','chile')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Chile</a></p>
      </div>
    `
  },
  {
    icon: '🏗️',
    title: 'Bollard 防撞柱指南',
    content: `
      <div class="meta-info-block">
        <h4>歐洲 — 主要 Bollard 樣式</h4>
        <p>• <strong><a onclick="navigateTo('country','france')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">France</a></strong> — 大型圓柱體，反光條環繞整個柱身<br>
        • <strong><a onclick="navigateTo('country','germany')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Germany</a></strong> — 扁平白色柱子，僅單側有長方形反光板，黑色條紋<br>
        • <strong><a onclick="navigateTo('country','austria')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Austria</a></strong> — 黑色頂蓋 + 暗紅/黑色反光板（兩者皆有 = 僅 <a onclick="navigateTo('country','austria')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Austria</a>）<br>
        • <strong><a onclick="navigateTo('country','italy')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Italy</a></strong> — 從反光板延伸至頂部的黑色條紋<br>
        • <strong><a onclick="navigateTo('country','uk')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">UK</a>/Scotland</strong> — 黑白條紋 + 頂部大紅色長方形<br>
        • <strong><a onclick="navigateTo('country','ireland')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Ireland</a></strong> — 綠白條紋、無反光板<br>
        • <strong><a onclick="navigateTo('country','spain')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Spain</a></strong> — 黃色反光板帶凹面<br>
        • <strong><a onclick="navigateTo('country','czechia')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Czech Republic</a></strong> — 螢光橘條紋、分裂反光板、楔形<br>
        • <strong><a onclick="navigateTo('country','slovakia')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Slovakia</a></strong> — 分裂反光板、彎曲形（vs Czech 楔形）<br>
        • <strong><a onclick="navigateTo('country','hungary')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Hungary</a></strong> — 紅色反光板、較圓的頂部<br>
        • <strong><a onclick="navigateTo('country','iceland')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Iceland</a></strong> — 小型、全黃色、小灰色反光板<br>
        • <strong><a onclick="navigateTo('country','switzerland')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Switzerland</a></strong> — 圓頂圓柱形、黑白配色<br>
        • <strong><a onclick="navigateTo('country','russia')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Russia</a></strong> — 極薄「紙片狀」</p>
      </div>
      <div class="meta-info-block">
        <h4>亞洲</h4>
        <p>• <strong><a onclick="navigateTo('country','cambodia')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Cambodia</a></strong> — 紅色金字塔頂 + 黃/白色反光板<br>
        • <strong><a onclick="navigateTo('country','thailand')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Thailand</a>/<a onclick="navigateTo('country','indonesia')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Indonesia</a></strong> — 黑白方塊 + 金字塔頂<br>
        • <strong><a onclick="navigateTo('country','bangladesh')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Bangladesh</a></strong> — 煙囪形、紅白交替<br>
        • <strong><a onclick="navigateTo('country','mongolia')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Mongolia</a></strong> — 保齡球瓶形狀</p>
      </div>
      <div class="meta-info-block">
        <h4>美洲</h4>
        <p>• <strong><a onclick="navigateTo('country','mexico')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Mexico</a>/<a onclick="navigateTo('country','peru')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Peru</a></strong> — 香菸形白色圓柱<br>
        • <strong><a onclick="navigateTo('country','ecuador')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Ecuador</a></strong> — 圓柱形帶兩條紅色條紋（常見！）<br>
        • <strong><a onclick="navigateTo('country','uruguay')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Uruguay</a></strong> — 白色正面 + 頂部長方形反光板<br>
        • <strong><a onclick="navigateTo('country','bolivia')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Bolivia</a></strong> — 白色圓柱 + 紅色環或紅/黃色塊</p>
      </div>
      <div class="meta-info-block">
        <h4>Bollard 圖片參考</h4>
        <p>以下為各國 Bollard 實際外觀參考圖片：</p>
        <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:12px;margin:12px 0;">
          <div><strong><a onclick="navigateTo('country','france')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">France</a></strong><br><img src="https://geomastr.com/assets/media/bollards/france.jpg" alt="France bollard" style="max-width:100%;border-radius:8px;"></div>
          <div><strong><a onclick="navigateTo('country','germany')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Germany</a></strong><br><img src="https://geomastr.com/assets/media/bollards/germany.jpg" alt="Germany bollard" style="max-width:100%;border-radius:8px;"></div>
          <div><strong><a onclick="navigateTo('country','austria')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Austria</a></strong><br><img src="https://geomastr.com/assets/media/bollards/austria.jpg" alt="Austria bollard" style="max-width:100%;border-radius:8px;"></div>
          <div><strong><a onclick="navigateTo('country','italy')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Italy</a></strong><br><img src="https://geomastr.com/assets/media/bollards/italy.jpg" alt="Italy bollard" style="max-width:100%;border-radius:8px;"></div>
          <div><strong><a onclick="navigateTo('country','spain')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Spain</a></strong><br><img src="https://geomastr.com/assets/media/bollards/spain.jpg" alt="Spain bollard" style="max-width:100%;border-radius:8px;"></div>
          <div><strong><a onclick="navigateTo('country','ireland')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Ireland</a></strong><br><img src="https://geomastr.com/assets/media/bollards/ireland.jpg" alt="Ireland bollard" style="max-width:100%;border-radius:8px;"></div>
          <div><strong><a onclick="navigateTo('country','hungary')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Hungary</a></strong><br><img src="https://geomastr.com/assets/media/bollards/hungary.jpg" alt="Hungary bollard" style="max-width:100%;border-radius:8px;"></div>
          <div><strong><a onclick="navigateTo('country','czechia')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Czech Republic</a></strong><br><img src="https://geomastr.com/assets/media/bollards/czech-republic.jpg" alt="Czech Republic bollard" style="max-width:100%;border-radius:8px;"></div>
          <div><strong><a onclick="navigateTo('country','iceland')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Iceland</a></strong><br><img src="https://geomastr.com/assets/media/bollards/iceland.jpg" alt="Iceland bollard" style="max-width:100%;border-radius:8px;"></div>
          <div><strong><a onclick="navigateTo('country','switzerland')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Switzerland</a></strong><br><img src="https://geomastr.com/assets/media/bollards/switzerland.jpg" alt="Switzerland bollard" style="max-width:100%;border-radius:8px;"></div>
          <div><strong><a onclick="navigateTo('country','denmark')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Denmark</a></strong><br><img src="https://geomastr.com/assets/media/bollards/denmark.jpg" alt="Denmark bollard" style="max-width:100%;border-radius:8px;"></div>
          <div><strong><a onclick="navigateTo('country','norway')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Norway</a></strong><br><img src="https://geomastr.com/assets/media/bollards/norway.jpg" alt="Norway bollard" style="max-width:100%;border-radius:8px;"></div>
          <div><strong><a onclick="navigateTo('country','sweden')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Sweden</a></strong><br><img src="https://geomastr.com/assets/media/bollards/sweden.jpg" alt="Sweden bollard" style="max-width:100%;border-radius:8px;"></div>
          <div><strong><a onclick="navigateTo('country','poland')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Poland</a></strong><br><img src="https://geomastr.com/assets/media/bollards/poland.jpg" alt="Poland bollard" style="max-width:100%;border-radius:8px;"></div>
          <div><strong><a onclick="navigateTo('country','portugal')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Portugal</a></strong><br><img src="https://geomastr.com/assets/media/bollards/portugal.jpg" alt="Portugal bollard" style="max-width:100%;border-radius:8px;"></div>
          <div><strong><a onclick="navigateTo('country','croatia')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Croatia</a></strong><br><img src="https://geomastr.com/assets/media/bollards/croatia.jpg" alt="Croatia bollard" style="max-width:100%;border-radius:8px;"></div>
          <div><strong><a onclick="navigateTo('country','serbia')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Serbia</a></strong><br><img src="https://geomastr.com/assets/media/bollards/serbia.jpg" alt="Serbia bollard" style="max-width:100%;border-radius:8px;"></div>
          <div><strong><a onclick="navigateTo('country','russia')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Russia</a></strong><br><img src="https://geomastr.com/assets/media/bollards/russia.jpg" alt="Russia bollard" style="max-width:100%;border-radius:8px;"></div>
          <div><strong><a onclick="navigateTo('country','turkey')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Turkey</a></strong><br><img src="https://geomastr.com/assets/media/bollards/turkey.jpg" alt="Turkey bollard" style="max-width:100%;border-radius:8px;"></div>
          <div><strong><a onclick="navigateTo('country','australia')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Australia</a></strong><br><img src="https://geomastr.com/assets/media/bollards/australia.jpg" alt="Australia bollard" style="max-width:100%;border-radius:8px;"></div>
          <div><strong><a onclick="navigateTo('country','cambodia')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Cambodia</a></strong><br><img src="https://geomastr.com/assets/media/bollards/cambodia.jpg" alt="Cambodia bollard" style="max-width:100%;border-radius:8px;"></div>
          <div><strong><a onclick="navigateTo('country','thailand')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Thailand</a></strong><br><img src="https://geomastr.com/assets/media/bollards/thailand.jpg" alt="Thailand bollard" style="max-width:100%;border-radius:8px;"></div>
          <div><strong><a onclick="navigateTo('country','mongolia')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Mongolia</a></strong><br><img src="https://geomastr.com/assets/media/bollards/mongolia.jpg" alt="Mongolia bollard" style="max-width:100%;border-radius:8px;"></div>
        </div>
      </div>
    `
  },
  {
    icon: '☀️',
    title: '太陽位置 & 南北半球判斷',
    content: `
      <div class="meta-info-block">
        <h4>基本原理</h4>
        <p>• <strong>北半球：</strong>太陽在南方 → 影子指向北方<br>
        • <strong>南半球：</strong>太陽在北方 → 影子指向南方<br>
        • <strong>赤道附近 (±23.5°)：</strong>不可靠 — 太陽依季節可能在任一側</p>
      </div>
      <div class="meta-info-block">
        <h4>使用遊戲內指南針</h4>
        <p>1. 找到指南針（左下角）。紅色端 = 北方。<br>
        2. <strong>太陽和紅色指針同側（北）</strong> → 你在<strong>南半球</strong><br>
        3. <strong>太陽和紅色指針對側</strong> → 你在<strong>北半球</strong></p>
      </div>
      <div class="meta-info-block">
        <h4>記憶口訣</h4>
        <p><strong>「太陽和紅針同側 = 南半球」</strong><br>
        <strong>「太陽和紅針對側 = 北半球」</strong></p>
      </div>
    `
  },
  {
    icon: '🚘',
    title: '靠左 / 靠右行駛',
    content: `
      <div class="meta-info-block">
        <h4>靠左行駛國家（Left-Hand Traffic）</h4>
        <p><strong>歐洲 (4)：</strong><a onclick="navigateTo('country','uk')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">UK</a>, <a onclick="navigateTo('country','ireland')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Ireland</a>, <a onclick="navigateTo('country','cyprus')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Cyprus</a>, <a onclick="navigateTo('country','malta')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Malta</a><br>
        <strong>亞洲 (16+)：</strong><a onclick="navigateTo('country','japan')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Japan</a>, <a onclick="navigateTo('country','india')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">India</a>, <a onclick="navigateTo('country','pakistan')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Pakistan</a>, <a onclick="navigateTo('country','bangladesh')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Bangladesh</a>, <a onclick="navigateTo('country','nepal')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Nepal</a>, <a onclick="navigateTo('country','bhutan')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Bhutan</a>, <a onclick="navigateTo('country','sri-lanka')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Sri Lanka</a>, <a onclick="navigateTo('country','thailand')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Thailand</a>, <a onclick="navigateTo('country','malaysia')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Malaysia</a>, <a onclick="navigateTo('country','singapore')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Singapore</a>, Brunei, <a onclick="navigateTo('country','indonesia')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Indonesia</a>, <a onclick="navigateTo('country','timor-leste')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Timor-Leste</a>, <a onclick="navigateTo('country','hong-kong')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Hong Kong</a>, <a onclick="navigateTo('country','macau')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Macau</a><br>
        <strong>大洋洲 (10+)：</strong><a onclick="navigateTo('country','australia')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Australia</a>, <a onclick="navigateTo('country','new-zealand')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">New Zealand</a>, Papua New <a onclick="navigateTo('country','guinea')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Guinea</a>, <a onclick="navigateTo('country','fiji')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Fiji</a>, <a onclick="navigateTo('country','samoa')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Samoa</a>, <a onclick="navigateTo('country','tonga')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Tonga</a>, <a onclick="navigateTo('country','solomon-islands')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Solomon Islands</a><br>
        <strong>非洲 (14+)：</strong><a onclick="navigateTo('country','south-africa')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">South Africa</a>, <a onclick="navigateTo('country','kenya')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Kenya</a>, Tanzania, <a onclick="navigateTo('country','uganda')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Uganda</a>, <a onclick="navigateTo('country','botswana')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Botswana</a>, <a onclick="navigateTo('country','zimbabwe')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Zimbabwe</a>, <a onclick="navigateTo('country','zambia')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Zambia</a>, <a onclick="navigateTo('country','malawi')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Malawi</a>, <a onclick="navigateTo('country','mozambique')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Mozambique</a>, <a onclick="navigateTo('country','namibia')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Namibia</a>, <a onclick="navigateTo('country','lesotho')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Lesotho</a>, <a onclick="navigateTo('country','eswatini')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Eswatini</a>, <a onclick="navigateTo('country','mauritius')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Mauritius</a><br>
        <strong>美洲：</strong><a onclick="navigateTo('country','us-virgin-islands')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">US Virgin Islands</a>, <a onclick="navigateTo('country','jamaica')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Jamaica</a>, Trinidad & Tobago + 數個英國屬地</p>
      </div>
      <div class="meta-info-block">
        <h4>其他所有國家</h4>
        <p>靠右行駛（全球大多數國家）。包括歐洲大陸全部、南北美洲、亞洲和非洲大部分國家。</p>
      </div>
    `
  },
  {
    icon: '📞',
    title: '電話國碼',
    content: `
      <div class="meta-info-block">
        <h4>一位數國碼</h4>
        <p>+1 = <a onclick="navigateTo('country','usa')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">USA</a>/<a onclick="navigateTo('country','canada')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Canada</a> &nbsp;&nbsp; +7 = <a onclick="navigateTo('country','russia')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Russia</a>/<a onclick="navigateTo('country','kazakhstan')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Kazakhstan</a></p>
      </div>
      <div class="meta-info-block">
        <h4>兩位數國碼（最常見）</h4>
        <p>+20 <a onclick="navigateTo('country','egypt')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Egypt</a>, +27 <a onclick="navigateTo('country','south-africa')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">South Africa</a>, +30 <a onclick="navigateTo('country','greece')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Greece</a>, +31 Netherlands, +32 <a onclick="navigateTo('country','belgium')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Belgium</a>, +33 <a onclick="navigateTo('country','france')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">France</a>, +34 <a onclick="navigateTo('country','spain')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Spain</a>, +36 <a onclick="navigateTo('country','hungary')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Hungary</a>, +39 <a onclick="navigateTo('country','italy')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Italy</a>, +40 <a onclick="navigateTo('country','romania')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Romania</a>, +41 <a onclick="navigateTo('country','switzerland')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Switzerland</a>, +44 <a onclick="navigateTo('country','uk')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">UK</a>, +45 <a onclick="navigateTo('country','denmark')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Denmark</a>, +46 <a onclick="navigateTo('country','sweden')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Sweden</a>, +47 <a onclick="navigateTo('country','norway')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Norway</a>, +48 <a onclick="navigateTo('country','poland')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Poland</a>, +49 <a onclick="navigateTo('country','germany')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Germany</a>, +51 <a onclick="navigateTo('country','peru')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Peru</a>, +52 <a onclick="navigateTo('country','mexico')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Mexico</a>, +54 <a onclick="navigateTo('country','argentina')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Argentina</a>, +55 <a onclick="navigateTo('country','brazil')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Brazil</a>, +56 <a onclick="navigateTo('country','chile')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Chile</a>, +57 <a onclick="navigateTo('country','colombia')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Colombia</a>, +60 <a onclick="navigateTo('country','malaysia')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Malaysia</a>, +61 <a onclick="navigateTo('country','australia')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Australia</a>, +62 <a onclick="navigateTo('country','indonesia')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Indonesia</a>, +63 <a onclick="navigateTo('country','philippines')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Philippines</a>, +64 <a onclick="navigateTo('country','new-zealand')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">New Zealand</a>, +65 <a onclick="navigateTo('country','singapore')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Singapore</a>, +66 <a onclick="navigateTo('country','thailand')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Thailand</a>, +81 <a onclick="navigateTo('country','japan')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Japan</a>, +82 <a onclick="navigateTo('country','south-korea')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">South Korea</a>, +84 <a onclick="navigateTo('country','vietnam')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Vietnam</a>, +86 China, +90 <a onclick="navigateTo('country','turkey')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Turkey</a>, +91 <a onclick="navigateTo('country','india')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">India</a>, +94 <a onclick="navigateTo('country','sri-lanka')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Sri Lanka</a></p>
      </div>
      <div class="meta-info-block">
        <h4>三位數國碼（精選）</h4>
        <p>+212 Morocco, +216 <a onclick="navigateTo('country','tunisia')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Tunisia</a>, +233 <a onclick="navigateTo('country','ghana')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Ghana</a>, +234 <a onclick="navigateTo('country','nigeria')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Nigeria</a>, +254 <a onclick="navigateTo('country','kenya')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Kenya</a>, +351 <a onclick="navigateTo('country','portugal')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Portugal</a>, +352 Luxembourg, +353 <a onclick="navigateTo('country','ireland')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Ireland</a>, +354 <a onclick="navigateTo('country','iceland')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Iceland</a>, +355 <a onclick="navigateTo('country','albania')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Albania</a>, +358 <a onclick="navigateTo('country','finland')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Finland</a>, +370 <a onclick="navigateTo('country','lithuania')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Lithuania</a>, +371 <a onclick="navigateTo('country','latvia')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Latvia</a>, +372 <a onclick="navigateTo('country','estonia')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Estonia</a>, +380 <a onclick="navigateTo('country','ukraine')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Ukraine</a>, +381 <a onclick="navigateTo('country','serbia')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Serbia</a>, +420 <a onclick="navigateTo('country','czechia')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Czech Republic</a>, +421 <a onclick="navigateTo('country','slovakia')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Slovakia</a>, +502 <a onclick="navigateTo('country','guatemala')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Guatemala</a>, +506 <a onclick="navigateTo('country','costa-rica')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Costa Rica</a>, +507 <a onclick="navigateTo('country','panama')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Panama</a>, +593 <a onclick="navigateTo('country','ecuador')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Ecuador</a>, +598 <a onclick="navigateTo('country','uruguay')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Uruguay</a>, +855 <a onclick="navigateTo('country','cambodia')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Cambodia</a>, +976 <a onclick="navigateTo('country','mongolia')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Mongolia</a></p>
      </div>
    `
  },
  {
    icon: '🌐',
    title: '國家頂級域名 (TLD)',
    content: `
      <div class="meta-info-block">
        <h4>容易混淆的 TLD</h4>
        <p>.za = <a onclick="navigateTo('country','south-africa')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">South Africa</a> (Zuid-Afrika) &nbsp;&nbsp; .ch = <a onclick="navigateTo('country','switzerland')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Switzerland</a> (Confoederatio Helvetica)<br>
        .hr = <a onclick="navigateTo('country','croatia')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Croatia</a> (Hrvatska) &nbsp;&nbsp; .ee = <a onclick="navigateTo('country','estonia')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Estonia</a> (Eesti) &nbsp;&nbsp; .rs = <a onclick="navigateTo('country','serbia')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Serbia</a> &nbsp;&nbsp; .mk = <a onclick="navigateTo('country','north-macedonia')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">North Macedonia</a><br>
        .ba = Bosnia &nbsp;&nbsp; .si = <a onclick="navigateTo('country','slovenia')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Slovenia</a> &nbsp;&nbsp; .me = <a onclick="navigateTo('country','montenegro')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Montenegro</a> &nbsp;&nbsp; .is = <a onclick="navigateTo('country','iceland')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Iceland</a><br>
        .es = <a onclick="navigateTo('country','spain')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Spain</a> (España) &nbsp;&nbsp; .at = <a onclick="navigateTo('country','austria')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Austria</a> &nbsp;&nbsp; .be = <a onclick="navigateTo('country','belgium')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Belgium</a> &nbsp;&nbsp; .fo = <a onclick="navigateTo('country','faroe-islands')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Faroe Islands</a></p>
      </div>
      <div class="meta-info-block">
        <h4>完整 TLD 參考</h4>
        <p><strong>歐洲：</strong>.uk .de .fr .it .es .pt .nl .be .lu .ch .at .dk .no .se .fi .is .ie .pl .cz .sk .hu .ro .bg .hr .si .rs .me .mk .al .gr .tr .lt .lv .ee .ua .ru .mt .ad .mc .sm .fo<br>
        <strong>亞洲：</strong>.jp .kr .cn .tw .in .pk .bd .lk .th .vn .kh .la .my .sg .id .ph .mn .kg .il .jo .ae .qa .bt<br>
        <strong>美洲：</strong>.us .ca .mx .gt .do .pr .vi .cw .co .br .ar .cl .pe .ec .bo .uy .py<br>
        <strong>非洲：</strong>.za .ke .ng .gh .tn .sn .ug .rw .bw .na .mg .eg .et .ma<br>
        <strong>大洋洲：</strong>.au .nz .pg .fj</p>
      </div>
    `
  },
  
  
  {
    icon: '🛡️',
    title: 'Guardrail 護欄指南',
    content: `
      <div class="meta-info-block">
        <h4>歐洲三大護欄類型</h4>
        <p><strong>Type A (A-Profile / Armco)</strong> — 單波浪形鋼板，一條連續的波浪紋。<strong>歐洲最常見</strong>。<br>
        A-Profile + 黑白柱 = 德語區國家（<a onclick="navigateTo('country','germany')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Germany</a>, <a onclick="navigateTo('country','austria')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Austria</a>, <a onclick="navigateTo('country','switzerland')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Switzerland</a>）的較強指標<br><br>
        <strong>Type B (B-Profile / Bethlehem)</strong> — 雙波浪疊加，中間較寬，形成更複雜的圖案。<br>
        B-Profile 中間特別寬 = <a onclick="navigateTo('country','czechia')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Czechia</a> 或 <a onclick="navigateTo('country','slovakia')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Slovakia</a><br><br>
        <strong>Thin B (細版 B)</strong> — 類似 B-Profile 但更窄/更薄。部分東歐國家使用。</p>
      </div>
      <div class="meta-info-block">
        <h4>各國護欄特殊特徵</h4>
        <p>• <a onclick="navigateTo('country','spain')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Spain</a> — 護欄上有<strong>黃橙色反光片</strong><br>
        • <a onclick="navigateTo('country','hungary')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Hungary</a> — 護欄反光片為<strong>紅色</strong><br>
        • <a onclick="navigateTo('country','denmark')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Denmark</a> — 獨特的<strong>方形壓扁護欄</strong>，類似傳統護欄但被壓平<br>
        • <a onclick="navigateTo('country','ecuador')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Ecuador</a> — <strong>雙護欄</strong>（南美洲罕見）<br>
        • <a onclick="navigateTo('country','argentina')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Argentina</a> — 護欄反光片為<strong>黃色+紅色</strong><br>
        • <a onclick="navigateTo('country','peru')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Peru</a> — 護欄為<strong>白色+黃色</strong><br>
        • <a onclick="navigateTo('country','romania')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Romania</a> — 護欄為<strong>紅白色</strong><br>
        • <a onclick="navigateTo('country','latvia')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Latvia</a> — 護欄反光片為白色或紅色<br>
        • 加拿大 Ontario — <strong>木製護欄</strong>（獨特）</p>
      </div>
    `
  },
  {
    icon: '⚡',
    title: 'Rift 裂縫辨識',
    content: `
      <div class="meta-info-block">
        <h4>什麼是 Rift？</h4>
        <p>Rift（裂縫）是 Google Street View 全景拼接時產生的視覺瑕疵。在天空或地面出現撕裂狀的線條或不自然的接縫。<br>
        這些瑕疵在特定國家非常普遍，成為重要的辨識線索。</p>
      </div>
      <div class="meta-info-block">
        <h4>Sky Rift（天空裂縫）</h4>
        <img src="https://d33wubrfki0l68.cloudfront.net/24ebfc52c88d821bb2cef9b7a98fb3baa77959f0/de58f/static/img/places/albania/miscellaneous/rift.jpg" alt="Sky rift example - Albania" style="max-width:100%;border-radius:8px;margin:8px 0;">
        <p><strong>主要出現國家：</strong><br>
        • <strong><a onclick="navigateTo('country','montenegro')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Montenegro</a></strong> — 全國普遍可見（南部 Bar 半島除外），是最容易辨識的特徵<br>
        • <strong><a onclick="navigateTo('country','albania')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Albania</a></strong> — 常見但不如 <a onclick="navigateTo('country','montenegro')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Montenegro</a> 普遍<br>
        • <strong><a onclick="navigateTo('country','senegal')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Senegal</a></strong> — 非洲最常見 rift 的國家<br>
        • <strong>Gen 2 覆蓋</strong> — Gen 2 相機的 sky rift/halo 是其標誌性特徵</p>
      </div>
      <div class="meta-info-block">
        <h4>Ground Rift（地面裂縫）</h4>
        <p><strong>特徵：</strong>往下看地面時出現的不自然接縫或扭曲。<br>
        <strong>主要出現：</strong><br>
        • <strong><a onclick="navigateTo('country','mexico')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Mexico</a> (Oaxaca)</strong> — Gen 3 覆蓋中 99% 的 ground rift 都在 Oaxaca 州<br>
        • <strong>Gen 2 覆蓋</strong> — 車輛周圍的紫色圓形模糊也是一種 ground rift</p>
      </div>
      <div class="meta-info-block">
        <h4>快速辨識規則</h4>
        <p>• 天空有明顯裂縫 + 歐洲 → <strong><a onclick="navigateTo('country','montenegro')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Montenegro</a></strong>（最常見）或 <strong><a onclick="navigateTo('country','albania')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Albania</a></strong><br>
        • 天空有裂縫 + 非洲 → <strong><a onclick="navigateTo('country','senegal')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Senegal</a></strong><br>
        • 地面有裂縫 + 墨西哥 → <strong>Oaxaca 州</strong><br>
        • 天空有紫色光暈 (halo) → <strong>Gen 2 覆蓋</strong></p>
      </div>
    `
  },
  {
    icon: '⚡',
    title: '電力基礎設施辨識',
    content: `
      <div class="meta-info-block">
        <h4>🔵 圓形玻璃電錶 (Round Glass Meter)</h4>
        <p>圓形透明玻璃罩的電錶，裝在房屋外牆上，有圓形錶盤。這種電錶主要出現在<strong>美洲和菲律賓</strong>，是很強的地理辨識線索。</p>
        <p><strong>有圓形電錶的國家：</strong><br>
        • <a onclick="navigateTo('country','usa')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">USA</a> — 非常常見，尤其是老舊社區<br>
        • <a onclick="navigateTo('country','mexico')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Mexico</a> — 極為常見（medidor circular）<br>
        • <a onclick="navigateTo('country','guatemala')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Guatemala</a> — 常見<br>
        • <a onclick="navigateTo('country','philippines')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Philippines</a> — 常見（Meralco 電錶）<br>
        • <a onclick="navigateTo('country','dominican-republic')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Dominican Republic</a> — 常見<br>
        • <a onclick="navigateTo('country','honduras')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Honduras</a> — 常見<br>
        • <a onclick="navigateTo('country','el-salvador')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">El Salvador</a> — 常見<br>
        • <a onclick="navigateTo('country','nicaragua')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Nicaragua</a> — 部分地區<br>
        • <a onclick="navigateTo('country','costa-rica')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Costa Rica</a> — 常見（ANSI 120V/60Hz 制式）<br>
        • <a onclick="navigateTo('country','colombia')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Colombia</a> — 部分地區<br>
        • <a onclick="navigateTo('country','ecuador')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Ecuador</a> — 部分地區<br>
        • <a onclick="navigateTo('country','venezuela')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Venezuela</a> — 部分地區<br>
        • <a onclick="navigateTo('country','jamaica')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Jamaica</a>、<a onclick="navigateTo('country','trinidad-and-tobago')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Trinidad and Tobago</a>、<a onclick="navigateTo('country','cuba')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Cuba</a> — 加勒比海島國也使用 ANSI 制式</p>
        <p>⚠️ <a onclick="navigateTo('country','peru')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Peru</a> 使用<strong>長方形電錶</strong>（非圓形！）— 可快速區分 Peru vs Mexico<br>
        ⚠️ 歐洲、非洲、中東、大部分亞洲國家<strong>不使用</strong>此類電錶（使用 IEC 方形電錶）。看到圓形玻璃電錶 → 基本可以確定在美洲或 Philippines。</p>
      </div>
      <div class="meta-info-block">
        <h4>🗼 電力鐵塔 (Steel Tower / Pylon) 類型</h4>
        <p>高壓電力傳輸鐵塔的設計因國家和地區而異。常見類型：</p>
        <p><strong>格子塔 (Lattice Tower)：</strong>最常見的傳統類型，全球皆有。以鋼構角鐵焊接而成，呈三角形或方形截面。<br>
        <strong>管狀塔 (Tubular Steel Pole)：</strong>現代設計，在歐洲和北美較新線路常見。<br>
        <strong>木桿 (Wooden Pole)：</strong>北歐、北美、澳洲農村常見，用於低壓配電。<br>
        <strong>混凝土桿 (Concrete Pole)：</strong>亞洲（Japan、Thailand、Cambodia）、南美（Brazil）、東歐常見。</p>
        <p><strong>各國獨特桿型：</strong><br>
        • <a onclick="navigateTo('country','japan')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Japan</a> — 螺紋混凝土桿（表面螺旋凸起）<br>
        • <a onclick="navigateTo('country','brazil')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Brazil</a> — 梯子桿（矩形分段凹痕 + 頂部孔洞）<br>
        • <a onclick="navigateTo('country','hungary')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Hungary</a>/<a onclick="navigateTo('country','romania')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Romania</a>/<a onclick="navigateTo('country','poland')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Poland</a> — 多孔混凝土桿（孔延到地面=RO；不到底部=PL；小孔=HU）<br>
        • <a onclick="navigateTo('country','turkey')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Turkey</a> — 梯子狀金屬網桿<br>
        • <a onclick="navigateTo('country','greece')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Greece</a> — 竪琴形金屬杆頂<br>
        • <a onclick="navigateTo('country','south-korea')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">South Korea</a> — 底部黑黃對角條紋（不到底部）<br>
        • <a onclick="navigateTo('country','taiwan')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Taiwan</a> — 斜向黑黃條紋延伸到地面<br>
        • <a onclick="navigateTo('country','philippines')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Philippines</a> — 木製十字架形電桿<br>
        • <a onclick="navigateTo('country','indonesia')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Indonesia</a> — 金屬桿底部紅白條紋（國旗配色）<br>
        • <a onclick="navigateTo('country','argentina')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Argentina</a> — A 字形木桿<br>
        • <a onclick="navigateTo('country','south-africa')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">South Africa</a> — 飛鳥桿（平行長桿 + 絕緣裝置）<br>
        • <a onclick="navigateTo('country','peru')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Peru</a> — 三臂桿，下半部塗黑<br>
        • <a onclick="navigateTo('country','laos')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Laos</a> — 松果形桿頂（pinecone poles），2+1 不對稱排列<br>
        • <a onclick="navigateTo('country','estonia')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Estonia</a> — 十字架形方形混凝土桿<br>
        • <a onclick="navigateTo('country','lithuania')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Lithuania</a> — 方形混凝土桿配燈泡（1×1/2×2/3×3 格式）<br>
        • <a onclick="navigateTo('country','uruguay')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Uruguay</a> — 三叉戟桿（3 個向上燈泡）<br>
        • <a onclick="navigateTo('country','ukraine')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Ukraine</a> — 華夫餅紋混凝土桿，底部塗白<br>
        • <a onclick="navigateTo('country','mexico')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Mexico</a>/<a onclick="navigateTo('country','colombia')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Colombia</a> — 八角形電桿（拉美僅此兩國）<br>
        • <a onclick="navigateTo('country','curacao')" style="color:var(--accent-blue);cursor:pointer;text-decoration:underline dotted">Curaçao</a> — 底部塗白的木桿</p>
      </div>
    `
  },
  {
    icon: '🔗',
    title: '推薦學習資源',
    content: `
      <div class="meta-info-block">
        <h4>🏆 中文社群最佳資源</h4>
        <p><a href="https://www.yuque.com/chaofun/tuxun" target="_blank" style="color:var(--accent-yellow);font-weight:700;font-size:1.1rem;">圖寻文檔（語雀）</a><br>
        中文社群維護的最詳細國家指南。包含精確的相機世代比例、街景車變體分布圖、區域辨識技巧、農作物/季節 meta、覆蓋年份等。本站大量資料經語雀交叉驗證。<br>
        <strong>強烈推薦作為主要學習資源。</strong></p>
      </div>
      <div class="meta-info-block">
        <h4>📘 綜合國家指南</h4>
        <p><a href="https://www.plonkit.net/guide" target="_blank" style="color:var(--accent-blue);font-weight:700;font-size:1.05rem;">Plonk It (plonkit.net)</a><br>
        每個國家一頁的完整指南，涵蓋覆蓋範圍、道路特徵、車牌、語言、bollard、車輛 meta 等。適合逐國深入學習。<br>
        範例：<a href="https://www.plonkit.net/japan" target="_blank" style="color:var(--accent-blue)">plonkit.net/japan</a> ·
        <a href="https://www.plonkit.net/kenya" target="_blank" style="color:var(--accent-blue)">plonkit.net/kenya</a> ·
        <a href="https://www.plonkit.net/brazil" target="_blank" style="color:var(--accent-blue)">plonkit.net/brazil</a></p>
      </div>
      <div class="meta-info-block">
        <h4>🧠 Meta 速查工具</h4>
        <p><a href="https://geohints.com" target="_blank" style="color:var(--accent-blue);font-weight:700;font-size:1.05rem;">GeoHints (geohints.com)</a><br>
        互動式 meta 查詢工具，可按類別快速查找：相機世代、Google 車輛、bollard、道路標線、電線桿、天線等。<br>
        常用頁面：
        <a href="https://geohints.com/meta/cameraGens" target="_blank" style="color:var(--accent-blue)">相機世代</a> ·
        <a href="https://geohints.com/meta/countries" target="_blank" style="color:var(--accent-blue)">國家總覽</a></p>
      </div>
      <div class="meta-info-block">
        <h4>🗺️ 其他推薦資源</h4>
        <p><a href="https://geodummy.com" target="_blank" style="color:var(--accent-blue);font-weight:700;">Geodummy</a> — 視覺化車輛 meta 和相機世代指南，圖片豐富<br>
        <a href="https://geomastr.com" target="_blank" style="color:var(--accent-blue);font-weight:700;">Geomastr</a> — Bollard、車牌、道路標線、電話號碼的詳細圖鑑<br>
        <a href="https://geotips.net" target="_blank" style="color:var(--accent-blue);font-weight:700;">GeoTips</a> — 按洲分類的國家辨識技巧<br>
        <a href="https://geometas.com" target="_blank" style="color:var(--accent-blue);font-weight:700;">Geometas</a> — 分類清晰的 meta 學習平台，含互動教學<br>
        <a href="https://education.openguessr.com" target="_blank" style="color:var(--accent-blue);font-weight:700;">OpenGuessr Education</a> — 從入門到進階的系統化教學</p>
      </div>
    `
  }
];
