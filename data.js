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
    "Gen 2 覆蓋始於 2012 — 較低畫質，天空可見紫色光暈",
    "Gen 3 覆蓋始於 2015 — 主要道路影像清晰",
    "Gen 4 覆蓋始於 2022 — 色彩鮮豔，高解析度",
    "主要公路和城市覆蓋良好，山區較稀疏"
  ],
  car: [
    "Gen 2/3：白色轎車，無特殊辨識特徵",
    "Gen 3 有天線（長或短），可見相機裂紋（camera rifts）",
    "Gen 4：標準歐洲車輛配置",
    "無 snorkel、無 roof rack、無特殊膠帶"
  ],
  roads: [
    "公路上常見白色虛線中線",
    "道路品質差異極大 — 高速公路平整 vs 鄉村道路破損",
    "Bollard 類似義大利風格 — 反光片到頂部有黑色條紋",
    "許多道路缺乏適當標線，尤其是鄉村地區",
    "混凝土或柏油路面，鄉村地區常有坑洞"
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
    "白色車牌，左側有藍色 EU 風格條紋",
    "格式：AA 000 AA",
    "藍色條紋包含 Albania 國旗和 'AL' 代碼"
  ],
  unique: [
    "<strong>碉堡</strong> — 數十萬座混凝土碉堡散布全國各地（冷戰時期）",
    "<strong>義大利風格 bollard</strong>，反光片到頂部有黑色條紋",
    "Mercedes-Benz 汽車極為常見（Albania 以此聞名）",
    "拉丁與鄂圖曼時期建築混合",
    "政府建築上可見雙頭鷹徽章",
    "地形非常多山，海拔變化劇烈"
  ],
  tips: [
    "蘑菇形碉堡幾乎 100% 確認是 Albania",
    "大量 Mercedes 汽車是強力線索",
    "Albanian 語非常獨特 — 非斯拉夫語、非羅曼語、非希臘語",
    "注意標誌文字中的 ë 和 ç 字元",
    "山脈 + 地中海海岸 + 碉堡 = Albania"
  ]
},

'andorra': {
  name: 'Andorra', localName: 'Andorra', flag: '🇦🇩', region: 'europe',
  drivingSide: 'right', tld: '.ad', phoneCode: '+376', language: 'Catalan', currency: 'Euro (EUR)',
  camera: [
    "Gen 3 覆蓋，影像品質良好",
    "覆蓋範圍有限 — 小國，主要覆蓋幹道",
    "部分行人區有 trekker 覆蓋"
  ],
  car: [
    "Gen 3：白色轎車，標準歐洲配置",
    "無特殊車輛辨識特徵",
    "無 antenna、無 snorkel、無 車頂架 (roof rack)"
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
    "電話號碼只有 6 位數（非常短）"
  ]
},

'austria': {
  name: 'Austria', localName: 'Österreich', flag: '🇦🇹', region: 'europe',
  drivingSide: 'right', tld: '.at', phoneCode: '+43', language: 'German', currency: 'Euro (EUR)',
  camera: [
    "Gen 2 覆蓋始於 2009 — 可見紫色光暈",
    "Gen 3 覆蓋始於 2012 — 影像清晰",
    "⚠️ Austria 因隱私法規，Street View 覆蓋非常有限",
    "大部分覆蓋在主要高速公路上；城市覆蓋非常稀疏",
    "維也納和其他城市阻止了 Google 大規模測繪"
  ],
  car: [
    "Gen 2：白色轎車，有 purple halo",
    "Gen 3：白色轎車",
    "⚠️ 因隱私法規，涵蓋範圍極為有限",
    "<strong>護柱有黑帽 + 黑色反光片</strong> — 與車輛搭配辨識",
    "無 antenna、無 snorkel、無 車頂架 (roof rack)"
  ],
  roads: [
    "維護良好的高速公路和 Autobahn",
    "<strong>Bollard 帶黑色頂蓋 + 深紅/黑色反光片</strong> — Austria 獨有",
    "唯一同時有黑色頂蓋和黑色反光片的國家",
    "白色虛線中線（歐洲標準）",
    "綠色高速公路標誌配白色文字"
  ],
  landscape: [
    "阿爾卑斯山主導 Austria 西部和中部",
    "東部維也納盆地 — 較平坦地形",
    "翠綠山谷配傳統高山村莊",
    "Tyrol 和 Salzburg 地區有滑雪場",
    "城市中有巴洛克和哈布斯堡時期建築"
  ],
  signs: [
    "德語 — 與 Germany 相同但有 Austria 方言用詞",
    "注意 'Straße'（街道）、'Gasse'（巷弄）",
    "變音字母：ä、ö、ü、ß",
    "藍色資訊路標，綠色高速公路標誌"
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
    "注意車牌上的 Austria 區域代碼（W、G、L、S 等）"
  ]
},

'belgium': {
  name: 'Belgium', localName: 'België / Belgique', flag: '🇧🇪', region: 'europe',
  drivingSide: 'right', tld: '.be', phoneCode: '+32', language: 'Dutch, French, German', currency: 'Euro (EUR)',
  camera: [
    "Gen 2 覆蓋始於 2009",
    "Gen 3 覆蓋範圍廣泛",
    "Gen 4 覆蓋，部分區域可見紅色車",
    "全國覆蓋範圍廣泛"
  ],
  car: [
    "Gen 4：<strong>紅色轎車</strong>（部分涵蓋區域可見）",
    "Gen 2/3：白色轎車",
    "⚠️ Gen 4 中有時車輛不可見",
    "無 antenna、無 snorkel、無 車頂架 (roof rack)"
  ],
  roads: [
    "Bollard：多種設計，都有橘色調 + 白色主體，也有雙紅條紋變體",
    "以路況差聞名 — 柏油路面不均勻，坑洞多",
    "白色中線和邊線（歐洲標準）",
    "藍色高速公路標誌",
    "特殊的菱形優先道路標誌，中心為橘/黃色"
  ],
  landscape: [
    "Flanders（北部）平坦，南部 Ardennes 丘陵",
    "Flanders 都市區密集",
    "中世紀城市中心（Bruges、Ghent、Brussels）",
    "Flanders 常見紅磚建築",
    "南部 Wallonia 建築更偏法國風格"
  ],
  signs: [
    "雙語或三語標誌（北部荷蘭語、南部法語、東部德語）",
    "Brussels 為雙語（荷蘭語/法語）",
    "注意城市名稱：Bruxelles/Brussel、Anvers/Antwerpen、Liège/Luik",
    "荷蘭語用 'straat'，法語用 'rue'"
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
    "平坦地形上的紅磚建築配荷蘭語文字 = Flanders"
  ]
},

'bosnia': {
  name: 'Bosnia and Herzegovina', localName: 'Bosna i Hercegovina', flag: '🇧🇦', region: 'europe',
  drivingSide: 'right', tld: '.ba', phoneCode: '+387', language: 'Bosnian, Croatian, Serbian', currency: 'Convertible Mark (BAM)',
  camera: [
    "Gen 3 覆蓋主要道路",
    "與鄰國 Croatia/Serbia 相比覆蓋有限",
    "主要高速公路品質尚可"
  ],
  car: [
    "Gen 3：白色轎車",
    "無特殊車輛辨識特徵",
    "無 antenna、無 車頂架 (roof rack)"
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
    "價格標誌上的貨幣為 'KM'（可兌換馬克）"
  ]
},

'bulgaria': {
  name: 'Bulgaria', localName: 'България', flag: '🇧🇬', region: 'europe',
  drivingSide: 'right', tld: '.bg', phoneCode: '+359', language: 'Bulgarian', currency: 'Lev (BGN)',
  camera: [
    "Gen 2 和 Gen 3 覆蓋可用",
    "Gen 4 覆蓋始於 2021 — 色彩鮮豔",
    "主要道路和城市覆蓋良好"
  ],
  car: [
    "Gen 4：<strong>藍色轎車 + 圓形天線</strong>（與 Sweden, Hungary, Romania, France 共用）",
    "Gen 4：也有<strong>黑色轎車 + 圓形天線</strong>（2024）",
    "Gen 4：也有<strong>紅色轎車</strong>",
    "Gen 3：白色轎車，有天線",
    "多種車色在 Gen 4 中可見"
  ],
  roads: [
    "Bollard：白色主體搭配紅色矩形反光片，背景上更明顯",
    "道路品質不一 — 高速公路好，鄉村道路差",
    "白色中線（歐洲標準）",
    "高速公路使用綠色標誌"
  ],
  landscape: [
    "巴爾幹山脈東西橫貫中部",
    "北部多瑙河（與 Romania 邊界）",
    "東部黑海沿岸",
    "玫瑰谷（Kazanlak 地區）— 玫瑰花田",
    "拜占庭建築風格的東正教教堂",
    "城市中有蘇聯時期公寓大樓"
  ],
  signs: [
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
    "注意店面上的 .bg 網域"
  ]
},

'croatia': {
  name: 'Croatia', localName: 'Hrvatska', flag: '🇭🇷', region: 'europe',
  drivingSide: 'right', tld: '.hr', phoneCode: '+385', language: 'Croatian', currency: 'Euro (EUR)',
  camera: [
    "Gen 2 覆蓋始於 2011",
    "Gen 3 覆蓋範圍廣泛",
    "海岸和內陸城市覆蓋良好"
  ],
  car: [
    "Gen 4：<strong>藍色轎車 + 圓形天線</strong>（2022 年涵蓋）",
    "Gen 3：白色轎車",
    "Gen 3：<strong>側鏡有黃色貼紙</strong> — Croatia 獨有辨識特徵",
    "無 snorkel、無 車頂架 (roof rack)"
  ],
  roads: [
    "Bollard：白色背面，反光片非常靠近頂部",
    "維護良好的高速公路（A1 Zagreb-Split 非常好）",
    "白色中線和邊線",
    "綠色高速公路標誌配白色文字",
    "主要高速公路上有收費站"
  ],
  landscape: [
    "Dalmatia 海岸 — 壯觀的懸崖和島嶼",
    "內陸：起伏丘陵、農田",
    "Plitvice 風格的喀斯特地貌",
    "海岸地中海植被",
    "海岸紅瓦石造建築（Dubrovnik 風格）",
    "內陸為歐陸建築風格"
  ],
  signs: [
    "Croatian（拉丁文字）— 類似 Serbian 但無西里爾文",
    "特殊字元：č、ć、đ、š、ž",
    "與 Serbian 的區別：使用 đ 而非 ð",
    "路標遵循 EU 標準"
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
  ],
  tips: [
    "Gen 3 後視鏡上的黃色貼紙 = Croatia",
    "地中海海岸上的拉丁文字斯拉夫語言 = Croatia",
    "注意 č、ć、đ、š、ž 字元（Croatian 拉丁文字）",
    "紅瓦沿海城鎮 + 斯拉夫語言 = Dalmatia Croatia"
  ]
},

'cyprus': {
  name: 'Cyprus', localName: 'Κύπρος / Kıbrıs', flag: '🇨🇾', region: 'europe',
  drivingSide: 'left', tld: '.cy', phoneCode: '+357', language: 'Greek, Turkish', currency: 'Euro (EUR)',
  camera: ["Gen 3 覆蓋可用", "希臘區和土耳其區覆蓋良好"],
  car: [
    "Gen 3：標準白色轎車",
    "無特殊車輛辨識特徵",
    "無 antenna、無 車頂架 (roof rack)"
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
    "英國風格圓環配希臘語標誌 = Cyprus"
  ]
},

'czechia': {
  name: 'Czech Republic', localName: 'Česká republika', flag: '🇨🇿', region: 'europe',
  drivingSide: 'right', tld: '.cz', phoneCode: '+420', language: 'Czech', currency: 'Koruna (CZK)',
  camera: [
    "Gen 2 覆蓋始於 2009",
    "Gen 3 覆蓋範圍廣泛",
    "Gen 4 覆蓋可用（藍色車，無天線）"
  ],
  car: [
    "Gen 4：<strong>藍色轎車，無天線</strong>（2019-2020）",
    "Gen 4：<strong>黑色轎車 + 圓形天線</strong>（2023）",
    "Gen 3：白色轎車，天線有膠帶",
    "Gen 3 有<strong>冬季涵蓋</strong>（積雪場景）"
  ],
  roads: [
    "Bollard：<strong>螢光橘色條紋、分裂反光片 + 方形背面反光片</strong>",
    "Bollard 為楔形（vs Slovakia 的弧形）",
    "維護良好的道路網絡",
    "白色中線和邊線",
    "測速照相常見"
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
    "路標遵循 EU 標準s",
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
  ],
  tips: [
    "標誌上看到 ř？→ Czech Republic，絕無僅有",
    "螢光橘色 bollard 搭配分裂反光片 = Czech",
    "楔形 bollard（非弧形）可與 Slovakia 區分",
    "háček (ˇ) 變音符號常見：š、č、ž、ř"
  ]
},

'denmark': {
  name: 'Denmark', localName: 'Danmark', flag: '🇩🇰', region: 'europe',
  drivingSide: 'right', tld: '.dk', phoneCode: '+45', language: 'Danish', currency: 'Krone (DKK)',
  camera: [
    "Gen 2 覆蓋始於 2009",
    "Gen 3 覆蓋範圍廣泛",
    "Gen 4 覆蓋（藍色車，無天線）"
  ],
  car: [
    "Gen 4：<strong>藍色轎車，無天線</strong>（2019-2020）",
    "Gen 2/3：白色轎車",
    "無 snorkel、無 車頂架 (roof rack)"
  ],
  roads: [
    "Bollard：類似 Belgium 色調但<strong>頂部有紅色條紋</strong>",
    "路面品質極佳",
    "白色中線和邊線",
    "藍色高速公路標誌配白色文字",
    "自行車基礎設施優良"
  ],
  landscape: [
    "極度平坦 — Denmark 是全世界最平坦的國家之一",
    "風力發電機非常常見",
    "農田主導景觀",
    "北海沿岸有沙丘",
    "紅磚建築為典型特徵",
    "小城鎮有半木造房屋"
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
  ],
  tips: [
    "平坦 + 紅磚 + Danish（æ、ø、å）= Denmark",
    "ø 是關鍵：Danish/Norwegian 用 ø，Swedish 用 ö",
    "完全平坦配風力發電機 = 很可能是 Denmark（Norway 有山脈）",
    "注意 'vej'（道路）以區分 Norwegian 的 'vei'"
  ]
},

'estonia': {
  name: 'Estonia', localName: 'Eesti', flag: '🇪🇪', region: 'europe',
  drivingSide: 'right', tld: '.ee', phoneCode: '+372', language: 'Estonian', currency: 'Euro (EUR)',
  camera: ["Gen 3 覆蓋主要道路", "部分地區有 Gen 4 覆蓋"],
  car: [
    "Gen 3：白色轎車，標準歐洲配置",
    "無特殊車輛辨識特徵"
  ],
  landscape: [
    "地形平坦到微幅起伏",
    "茂密森林（近 50% 森林覆蓋率）",
    "沼澤/濕地區域",
    "波羅的海沿岸有島嶼",
    "中世紀老城區（Tallinn）",
    "北歐風格木造建築"
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
    "非斯拉夫語，非波羅的海語言 — 與 Latvia/Lithuania 不同"
  ]
},

'faroe-islands': {
  name: 'Faroe Islands', localName: 'Føroyar', flag: '🇫🇴', region: 'europe',
  drivingSide: 'right', tld: '.fo', phoneCode: '+298', language: 'Faroese, Danish', currency: 'Krone (DKK)',
  camera: ["Gen 3 覆蓋", "覆蓋有限 — 小型領地", "車上有灰色 roof rack 和後視鏡"],
  car: [
    "灰色 roof rack + 側鏡可見",
    "<strong>無天線</strong>（與 Iceland 車不同 — Iceland 有天線）",
    "Faroe = 灰色 rack 無天線；Iceland = 有天線 + 紅/白/藍條紋"
  ],
  roads: [
    "單線道配會車處常見",
    "島嶼間有隧道",
    "白色中線",
    "鄉村道路幾乎無路面標線"
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
  plates: ["白色車牌附 FO 代碼"],
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
    "比 Iceland 小得多且更翠綠"
  ]
},

'finland': {
  name: 'Finland', localName: 'Suomi', flag: '🇫🇮', region: 'europe',
  drivingSide: 'right', tld: '.fi', phoneCode: '+358', language: 'Finnish, Swedish', currency: 'Euro (EUR)',
  camera: [
    "Gen 2 和 Gen 3 覆蓋可用",
    "全國覆蓋良好",
    "北部 Lapland 覆蓋較稀疏"
  ],
  car: [
    "Gen 3：白色轎車，灰色 roof rack 和側鏡可見",
    "Gen 4 有限涵蓋",
    "與 Iceland 車不同（Finland 無天線）"
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
  ],
  tips: [
    "Finnish 文字（不像斯堪地那維亞語）+ 湖泊 + 森林 = Finland",
    "沒有 å = Finnish（Swedish 區域有 å）",
    "到處都是雙母音/雙子音（kk、pp、tt、aa、oo）= Finnish",
    "森林/湖泊景觀中的紅色木造房屋 = Finland"
  ]
},

'france': {
  name: 'France', localName: 'France', flag: '🇫🇷', region: 'europe',
  drivingSide: 'right', tld: '.fr', phoneCode: '+33', language: 'French', currency: 'Euro (EUR)',
  camera: [
    "Gen 1 覆蓋有限",
    "Gen 2 覆蓋始於 2008",
    "Gen 3 覆蓋範圍廣泛",
    "Gen 4 覆蓋始於 2021（藍色車搭配圓形天線）"
  ],
  car: [
    "Gen 4：<strong>藍色轎車 + 圓形天線</strong>（2021 年涵蓋）",
    "Gen 2/3：白色轎車",
    "無 snorkel、無 車頂架 (roof rack)"
  ],
  roads: [
    "Bollard：<strong>大型圓柱形，紅色或灰色反光帶環繞整個主體</strong>",
    "前法國殖民地（Senegal 等）也使用此 bollard 風格",
    "<strong>超長白色虛線邊線</strong> — 在歐洲獨一無二",
    "白色中線 standard",
    "D 級道路（省道）以 'D' 為前綴編號",
    "優良的道路網絡"
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
    "白色車牌附 EU 藍色條紋 + F 代碼",
    "格式：AA-123-AA（2009 年起 SIV 系統）",
    "右側可選區域識別碼"
  ],
  unique: [
    "<strong>法式圓柱形 bollard</strong>，反光帶環繞整個主體",
    "<strong>超長虛線邊線</strong> — 歐洲只有 France",
    "梯形電線桿配攀爬踏板",
    "鄉村道路上的公里標記（石柱）",
    "多樣化景觀 — 從阿爾卑斯山到地中海",
    "到處都是麵包店和藥局（綠十字）"
  ],
  tips: [
    "法式 bollard 反光帶環繞整個圓柱",
    "超長白色虛線邊線 = France",
    "梯形電線桿 = France 或 Spain",
    "注意藥局綠十字和麵包店招牌"
  ]
},

'germany': {
  name: 'Germany', localName: 'Deutschland', flag: '🇩🇪', region: 'europe',
  drivingSide: 'right', tld: '.de', phoneCode: '+49', language: 'German', currency: 'Euro (EUR)',
  camera: [
    "Gen 2 覆蓋始於 2008",
    "⚠️ Germany 因隱私退出機制，覆蓋範圍有限",
    "主要城市房屋有大量模糊處理",
    "許多街道應居民要求被移除",
    "鄉村地區覆蓋比城市好"
  ],
  car: [
    "Gen 2/3：白色轎車",
    "Gen 4 涵蓋極為有限",
    "⚠️ 因隱私法規，涵蓋範圍有限（比 Austria 稍多）",
    "無 antenna、無 snorkel、無 車頂架 (roof rack)"
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
  ],
  tips: [
    "德語文字 + 大量模糊房屋 = Germany（Austria 覆蓋更少）",
    "德式 bollard：單側反光片配黑色條紋，非 Austria 的黑色頂蓋風格",
    "注意文字中的 ß — 德語獨特字元",
    "藍色 Autobahn 標誌無速限 = Germany"
  ]
},

'greece': {
  name: 'Greece', localName: 'Ελλάδα', flag: '🇬🇷', region: 'europe',
  drivingSide: 'right', tld: '.gr', phoneCode: '+30', language: 'Greek', currency: 'Euro (EUR)',
  camera: [
    "Gen 2 和 Gen 3 覆蓋",
    "Gen 4 可用",
    "本土和主要島嶼覆蓋良好"
  ],
  car: [
    "Gen 4：<strong>黑色轎車，永遠沒有天線</strong> — 所有涵蓋年份皆無",
    "Greece 是唯一一個 Google 車<strong>從未有天線</strong>的歐洲國家",
    "Gen 3 有天線（短或長）",
    "Gen 4 也有紅色轎車",
    "無 snorkel、無 車頂架 (roof rack)"
  ],
  roads: [
    "Bollard：<strong>方形紅色正面反光片 + 白色方形背面反光片</strong>",
    "白色中線",
    "道路品質不一 — 高速公路好，鄉村道路可能崎嶇",
    "山路多髮夾彎"
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
    "乾燥多岩島嶼上的白藍建築 = Greek 島嶼"
  ]
},

'hungary': {
  name: 'Hungary', localName: 'Magyarország', flag: '🇭🇺', region: 'europe',
  drivingSide: 'right', tld: '.hu', phoneCode: '+36', language: 'Hungarian', currency: 'Forint (HUF)',
  camera: [
    "Gen 2 和 Gen 3 覆蓋",
    "Gen 4 覆蓋（藍色車搭配圓形天線，或藍色車無天線）"
  ],
  car: [
    "Gen 4：<strong>藍色轎車 + 圓形天線</strong>（或無天線）",
    "Gen 4：2019-2020 涵蓋有藍色車",
    "Gen 3：白色轎車，天線有膠帶",
    "Gen 3 有<strong>冬季涵蓋</strong>（積雪場景）"
  ],
  roads: [
    "Bollard：<strong>紅色反光片 + 較圓頂部，白色背面反光片</strong>",
    "<strong>多孔混凝土電線桿</strong> — 大洞延伸到地面",
    "良好的高速公路網（M 級道路）",
    "白色中線",
    "高速公路通行貼紙系統"
  ],
  landscape: [
    "匈牙利大平原（Alföld）— 非常平坦",
    "Balaton 湖 — 中歐最大湖泊",
    "多瑙河流經 Budapest",
    "農業用地為主",
    "溫泉浴場和溫泉城鎮",
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
    "平坦農田 + 獨特語言 = 很可能是匈牙利大平原"
  ]
},

'iceland': {
  name: 'Iceland', localName: 'Ísland', flag: '🇮🇸', region: 'europe',
  drivingSide: 'right', tld: '.is', phoneCode: '+354', language: 'Icelandic', currency: 'Króna (ISK)',
  camera: [
    "Gen 3 覆蓋環島公路和主要路線",
    "部分 Gen 2 覆蓋",
    "覆蓋集中在 Route 1（環島公路）",
    "內陸高地覆蓋非常有限"
  ],
  car: [
    "Gen 4：<strong>白色或紅色 pickup truck（皮卡車）</strong>",
    "白色 truck 為 7 月涵蓋，紅色 truck 為 8 月涵蓋（季節性變化）",
    "Gen 3：標準轎車，可見天線",
    "有時紅/白/藍條紋可見於車身",
    "與 Faroe Islands 不同（Faroe 有灰色 rack，無天線）"
  ],
  roads: [
    "Bollard：<strong>小型、全黃色搭配小型灰色反光片</strong>",
    "單線道橋梁常見（單車道配會車灣）",
    "許多碎石/未鋪裝道路（F 級道路）",
    "Route 1 環島公路 = 繞島主要公路",
    "道路品質差異極大"
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
    "黃色 bollard（歐洲其他地方找不到）"
  ]
},

'ireland': {
  name: 'Ireland', localName: 'Éire', flag: '🇮🇪', region: 'europe',
  drivingSide: 'left', tld: '.ie', phoneCode: '+353', language: 'English, Irish', currency: 'Euro (EUR)',
  camera: [
    "Gen 2 和 Gen 3 覆蓋",
    "Gen 4 覆蓋（藍色車，無天線）"
  ],
  car: [
    "Gen 4：<strong>藍色轎車，無天線</strong>",
    "Gen 3：白色轎車",
    "無 snorkel、無 車頂架 (roof rack)"
  ],
  roads: [
    "靠左行駛",
    "Bollard：<strong>綠白條紋，無反光片</strong>",
    "<strong>黃色虛線邊線</strong> — Ireland 非常獨特的特徵",
    "白色中線",
    "速限以 km/h 標示 (changed from mph in 2005)",
    "兩側有樹籬的狹窄鄉村道路"
  ],
  landscape: [
    "翠綠起伏丘陵（翡翠島）",
    "石牆分隔田野",
    "中部和西部的泥炭沼澤",
    "壯觀的西部海岸線（Cliffs of Moher 地區）",
    "散落的農舍",
    "溫和潮濕氣候 — 看起來總是微陰"
  ],
  signs: [
    "以英語為主，部分雙語標誌（英語/愛爾蘭蓋爾語）",
    "愛爾蘭蓋爾語：'Sráid'（街道）、'Bóthar'（道路）",
    "Gaeltacht 地區：僅愛爾蘭語標誌",
    "2005 年起速限以 km/h 標示"
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
    "比 UK 看起來更綠更濕"
  ]
},

'italy': {
  name: 'Italy', localName: 'Italia', flag: '🇮🇹', region: 'europe',
  drivingSide: 'right', tld: '.it', phoneCode: '+39', language: 'Italian', currency: 'Euro (EUR)',
  camera: [
    "Gen 1 覆蓋有限",
    "Gen 2 覆蓋始於 2008",
    "Gen 3 覆蓋範圍廣泛",
    "部分地區有 Gen 4 覆蓋"
  ],
  car: [
    "Gen 4：<strong>藍色轎車 + 圓形天線</strong>（地中海地區，與 Croatia 共用）",
    "Gen 3：白色轎車",
    "無 snorkel、無 車頂架 (roof rack)"
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
    "格式：AB 123 CD"
  ],
  unique: [
    "<strong>義大利 bollard 反光片到頂部有黑色條紋</strong>",
    "建築和景觀南北差異顯著",
    "Tuscany 的柏樹林蔭道路",
    "到處都是羅馬遺跡和文藝復興教堂",
    "Vespa 機車極為常見"
  ],
  tips: [
    "以母音結尾的 Italian 文字 + 地中海景觀 = Italy",
    "黑色條紋向上延伸的 bollard = Italy 或 Albania",
    "柏樹林蔭道路 = Tuscany, Italy",
    "注意路牌上的 'Via'、'Piazza'、'Corso'"
  ]
},

'kosovo': {
  name: 'Kosovo', localName: 'Kosova / Косово', flag: '🇽🇰', region: 'europe',
  drivingSide: 'right', tld: '.xk', phoneCode: '+383', language: 'Albanian, Serbian', currency: 'Euro (EUR)',
  camera: ["Gen 3 覆蓋有限", "主要道路覆蓋持續擴展"],
  car: [
    "Gen 3：白色轎車",
    "無特殊車輛辨識特徵"
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
    "新道路和建設工程 = 很可能是 Kosovo"
  ]
},

'latvia': {
  name: 'Latvia', localName: 'Latvija', flag: '🇱🇻', region: 'europe',
  drivingSide: 'right', tld: '.lv', phoneCode: '+371', language: 'Latvian', currency: 'Euro (EUR)',
  camera: ["Gen 3 涵蓋", "主要道路涵蓋尚可"],
  car: [
    "Gen 4：<strong>黑色轎車 + 圓形天線</strong>（2022）",
    "Gen 3：白色轎車"
  ],
  roads: [
    "Bollard：<strong>高、細，白色到橘色反光片，常有數字</strong>",
    "道路品質不一",
    "白色中線"
  ],
  landscape: [
    "平坦的波羅的海地形",
    "茂密的松樹和白樺林",
    "波羅的海沙灘",
    "Daugava 河",
    "Riga 的新藝術建築",
    "鄉村的木造建築"
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
    "Riga 的新藝術建築",
    "平坦地形配松林"
  ],
  tips: [
    "長音符號（ā、ē、ī、ū）+ 子音軟音符號（ļ、ķ、ģ、ņ）= Latvian",
    "與 Lithuanian 不同 — Lithuanian 使用鉤形符號（ą、ę）和點（ė、ż）",
    "高細 bollard 帶數字 = Latvia"
  ]
},

'lithuania': {
  name: 'Lithuania', localName: 'Lietuva', flag: '🇱🇹', region: 'europe',
  drivingSide: 'right', tld: '.lt', phoneCode: '+370', language: 'Lithuanian', currency: 'Euro (EUR)',
  camera: ["Gen 3 覆蓋", "Gen 4 可用"],
  car: [
    "Gen 4：<strong>黑色轎車 + 圓形天線</strong>（2023-2024）",
    "Gen 3：白色轎車"
  ],
  roads: [
    "Bollard：<strong>橘色反光片 + 白色背面反光片</strong>",
    "主要路線道路品質尚可",
    "白色中線"
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
    "橘色 bollard 反光片 = 可能是 Lithuania"
  ]
},

'luxembourg': {
  name: 'Luxembourg', localName: 'Lëtzebuerg', flag: '🇱🇺', region: 'europe',
  drivingSide: 'right', tld: '.lu', phoneCode: '+352', language: 'Luxembourgish, French, German', currency: 'Euro (EUR)',
  camera: ["Gen 3 和 Gen 4 覆蓋", "以如此小的國家來說覆蓋良好"],
  car: [
    "Gen 4：<strong>白色轎車</strong>",
    "無特殊車輛辨識特徵"
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
    "看起來非常小且富裕"
  ]
},

'malta': {
  name: 'Malta', localName: 'Malta', flag: '🇲🇹', region: 'europe',
  drivingSide: 'left', tld: '.mt', phoneCode: '+356', language: 'Maltese, English', currency: 'Euro (EUR)',
  camera: ["Gen 3 覆蓋", "以小面積來說覆蓋良好"],
  car: [
    "Gen 3：標準轎車",
    "靠左行駛（英國殖民遺產）",
    "無特殊車輛辨識特徵"
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
    "白色車牌附 EU 藍色條紋 + M 代碼"
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
    "非常小的島嶼 — 如果一切看起來古老且金色 = Malta"
  ]
},

'moldova': {
  name: 'Moldova', localName: 'Moldova', flag: '🇲🇩', region: 'europe',
  drivingSide: 'right', tld: '.md', phoneCode: '+373', language: 'Romanian', currency: 'Leu (MDL)',
  camera: ["Gen 3 覆蓋主要道路", "與 Romania 相比覆蓋有限"],
  car: [
    "Gen 3：白色轎車",
    "無特殊車輛辨識特徵"
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
    "白色車牌附 MD 代碼"
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
    "不如 Romania 發達 — 更差的道路、更舊的建築"
  ]
},

'monaco': {
  name: 'Monaco', localName: 'Monaco', flag: '🇲🇨', region: 'europe',
  drivingSide: 'right', tld: '.mc', phoneCode: '+377', language: 'French', currency: 'Euro (EUR)',
  camera: ["覆蓋有限 — 非常小的城邦", "部分地區有 trekker/行人覆蓋"],
  car: [
    "標準轎車（涵蓋極少）",
    "無特殊車輛辨識特徵"
  ],
  signs: ["法語", "Monaco 特有的停車和交通標誌"],
  plates: ["Monaco 特有車牌"],
  unique: [
    "地中海沿岸極度密集的奢華都市環境",
    "F1 大獎賽賽道基礎設施",
    "到處都是豪車",
    "全世界第二小的國家"
  ],
  tips: [
    "極致奢華 + 微型地中海城市 + 法語文字 = Monaco",
    "到處都是賭場、遊艇和超跑"
  ]
},

'montenegro': {
  name: 'Montenegro', localName: 'Crna Gora', flag: '🇲🇪', region: 'europe',
  drivingSide: 'right', tld: '.me', phoneCode: '+382', language: 'Montenegrin', currency: 'Euro (EUR)',
  camera: ["Gen 3 覆蓋", "主要路線覆蓋尚可"],
  car: [
    "Gen 3：白色轎車",
    "護柱有<strong>黑帽</strong>（類似 Austrian 風格）",
    "無特殊車輛辨識特徵"
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
    "白色車牌附藍色條紋 + MNE 代碼"
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
    "巴爾幹背景下的黑色頂蓋 bollard = 很可能是 Montenegro"
  ]
},

'netherlands': {
  name: 'Netherlands', localName: 'Nederland', flag: '🇳🇱', region: 'europe',
  drivingSide: 'right', tld: '.nl', phoneCode: '+31', language: 'Dutch', currency: 'Euro (EUR)',
  camera: [
    "Gen 2 覆蓋始於 2008",
    "Gen 3 覆蓋範圍廣泛",
    "Gen 4 覆蓋（黑色車搭配圓形天線）"
  ],
  car: [
    "Gen 4：<strong>黑色轎車 + 圓形天線</strong>（2023）",
    "Gen 3：白色轎車",
    "無 snorkel、無 車頂架 (roof rack)"
  ],
  roads: [
    "優良的自行車基礎設施 — 到處都有專用自行車道",
    "平坦且品質優良的道路",
    "白色中線和邊線",
    "紅色柏油自行車道",
    "許多運河和橋梁"
  ],
  landscape: [
    "極度平坦（大部分低於海平面）",
    "風車（傳統風車和現代風力發電機）",
    "到處都是運河",
    "圩田（填海造地）",
    "春季鬱金香花田",
    "紅磚建築，尤其在城市"
  ],
  signs: [
    "Dutch 語 — 看起來像英語和德語的混合",
    "'straat'（街道）、'weg'（路）、'laan'（巷）、'plein'（廣場）",
    "IJ 雙字母常見",
    "路標遵循 EU 標準"
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
  ],
  tips: [
    "黃色後車牌 = Netherlands（最獨特的特徵）",
    "平坦 + 運河 + 自行車道 + Dutch = Netherlands",
    "紅色柏油自行車道 = Netherlands",
    "不要與 Belgium 混淆 — Netherlands 更平坦且維護更好"
  ]
},

'north-macedonia': {
  name: 'North Macedonia', localName: 'Северна Македонија', flag: '🇲🇰', region: 'europe',
  drivingSide: 'right', tld: '.mk', phoneCode: '+389', language: 'Macedonian, Albanian', currency: 'Denar (MKD)',
  camera: ["Gen 3 覆蓋主要道路"],
  car: ["標準白色車",
    "⚠️ North Macedonia <strong>沒有 Google 街景車覆蓋</strong> — 僅有 trekker 和第三方覆蓋"
  ],
  roads: [
    "Bollard：反光片非常靠近頂部（類似 Croatia）",
    "道路品質不一",
    "白色中線"
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
    "雙語西里爾文/Albanian 標誌 = 很可能是 North Macedonia"
  ]
},

'norway': {
  name: 'Norway', localName: 'Norge / Noreg', flag: '🇳🇴', region: 'europe',
  drivingSide: 'right', tld: '.no', phoneCode: '+47', language: 'Norwegian', currency: 'Krone (NOK)',
  camera: [
    "Gen 2 覆蓋始於 2009",
    "Gen 3 覆蓋範圍廣泛",
    "Gen 4 覆蓋（藍色車，無天線）"
  ],
  car: [
    "Gen 4：<strong>藍色轎車，無天線</strong>",
    "Gen 3：白色轎車",
    "無 snorkel、無 車頂架 (roof rack)"
  ],
  roads: [
    "Bollard：<strong>頂部附近有小型斜向黑色條紋，白色反光片色調不同</strong>",
    "峽灣地區的單線道",
    "許多隧道 — 其中一些是世界最長",
    "主要路線道路品質優良",
    "有多條中線時偶爾使用黃色中線"
  ],
  landscape: [
    "壯觀的峽灣 — 深窄的海灣",
    "到處都是山脈",
    "峽灣道路旁的瀑布",
    "北部地區：北極圈以北",
    "木造教堂",
    "彩色木造房屋"
  ],
  signs: [
    "Norwegian — 使用 æ、ø、å（與 Danish 共用）",
    "'vei' 表示道路（vs Danish 的 'vej'）",
    "'gate' 表示街道（vs Danish 的 'gade'）",
    "兩種書面形式：Bokmål 和 Nynorsk"
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
  ],
  tips: [
    "æ、ø、å + 山脈/峽灣 = Norway（不是平坦的 Denmark）",
    "'vei'（道路）= Norwegian；'vej'（道路）= Danish",
    "壯觀山脈 + 峽灣 + 斯堪地那維亞語言 = Norway",
    "斜向黑色 bollard 條紋可與其他北歐國家區分"
  ]
},

'poland': {
  name: 'Poland', localName: 'Polska', flag: '🇵🇱', region: 'europe',
  drivingSide: 'right', tld: '.pl', phoneCode: '+48', language: 'Polish', currency: 'Złoty (PLN)',
  camera: [
    "Gen 2 and Gen 3 覆蓋",
    "Gen 4 可用",
    "全國覆蓋範圍廣泛"
  ],
  car: [
    "Gen 3：白色轎車，標準歐洲配置",
    "無特殊車輛辨識特徵"
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
  ],
  tips: [
    "ą、ę（鉤形）+ ł（斜線 L）= Polish（非 Lithuanian 或 Czech）",
    "子音組合如 szcz、rz = Polish",
    "紅色帶 bollard（非德式矩形反光片）",
    "電桿上的鸛巢 = 非常可能是 Poland"
  ]
},

'portugal': {
  name: 'Portugal', localName: 'Portugal', flag: '🇵🇹', region: 'europe',
  drivingSide: 'right', tld: '.pt', phoneCode: '+351', language: 'Portuguese', currency: 'Euro (EUR)',
  camera: [
    "Gen 2 and Gen 3 覆蓋",
    "全國覆蓋良好"
  ],
  car: [
    "Gen 3：白色轎車，標準歐洲配置",
    "Gen 4 涵蓋有限",
    "無特殊車輛辨識特徵"
  ],
  landscape: [
    "北部丘陵地形，南部平坦的 Alentejo",
    "Algarve 海岸 — 壯觀的懸崖",
    "Douro 河谷 — 梯田葡萄園",
    "軟木橡樹林",
    "建築上的 Azulejo 磁磚（藍白裝飾磁磚）"
  ],
  signs: [
    "Portuguese 語 — ã、õ、ç、â、ê、ô、á、é、í、ó、ú",
    "書寫上與巴西 Portuguese 非常相似",
    "'Rua'（街道）、'Avenida'（大道）、'Praça'（廣場）"
  ],
  plates: [
    "白色車牌附 EU 藍色條紋 + P 代碼",
    "格式：AA-12-BB"
  ],
  unique: [
    "<strong>Portuguese bollard 反光片上方空間很小</strong>",
    "建築立面上的 <strong>Azulejo 磁磚</strong>",
    "鵝卵石 calçada 路面",
    "軟木橡樹林（Portugal/Spain 獨有）",
    "Portuguese 文字帶 ã、õ 字元",
    "Douro 河谷的梯田葡萄園"
  ],
  tips: [
    "歐洲的 Portuguese 文字（ã、õ）= Portugal（不是 Brazil！）",
    "Azulejo 磁磚立面 = 很可能是 Portugal",
    "鵝卵石人行道 + Portuguese = Portugal",
    "反光片上方空間很小的 bollard = Portugal"
  ]
},

'romania': {
  name: 'Romania', localName: 'România', flag: '🇷🇴', region: 'europe',
  drivingSide: 'right', tld: '.ro', phoneCode: '+40', language: 'Romanian', currency: 'Leu (RON)',
  camera: [
    "Gen 2 and Gen 3 覆蓋",
    "Gen 4 覆蓋（藍色車搭配圓形天線）"
  ],
  car: [
    "Gen 4：<strong>藍色轎車 + 圓形天線</strong>",
    "Gen 3：白色轎車，長天線可見",
    "Gen 3：天線有膠帶（東歐共通特徵，與 Czech, Slovakia, Hungary 共用）"
  ],
  roads: [
    "Bollard：白色搭配紅色矩形反光片（較少見）",
    "<strong>多孔混凝土電線桿</strong> — 類似 Hungary，底部有時塗白漆",
    "道路品質差異顯著",
    "白色中線"
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
    "Dacia 汽車品牌 = Romanian"
  ]
},

'russia': {
  name: 'Russia', localName: 'Россия', flag: '🇷🇺', region: 'europe',
  drivingSide: 'right', tld: '.ru', phoneCode: '+7', language: 'Russian', currency: 'Ruble (RUB)',
  camera: [
    "Gen 2 and Gen 3 覆蓋",
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
    "Bollard：<strong>十字路口極薄的「紙片狀」bollard</strong>",
    "道路品質差異極大 — Moscow 附近好，偏遠地區很差",
    "白色/黃色中線",
    "Siberia 聚落間距離極遠"
  ],
  landscape: [
    "極大多樣性：凍原、泰加林、草原、山脈",
    "大面積白樺林",
    "城市中有蘇聯時期公寓大樓",
    "洋蔥圓頂東正教教堂",
    "Siberia 荒野 — 遼闊的空曠"
  ],
  signs: [
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
  ],
  tips: [
    "西里爾文帶 Ы 和 Э = Russian（Ukrainian 沒有 Ы）",
    "薄紙片 bollard = Russia",
    "大面積白樺林 + 蘇聯建築 + 西里爾文 = Russia",
    "電話國碼 +7（僅與 Kazakhstan 共用）"
  ]
},

'san-marino': {
  name: 'San Marino', localName: 'San Marino', flag: '🇸🇲', region: 'europe',
  drivingSide: 'right', tld: '.sm', phoneCode: '+378', language: 'Italian', currency: 'Euro (EUR)',
  camera: ["覆蓋有限 — 非常小的國家"],
  car: ["標準車輛"],
  roads: ["義大利風格道路", "山路（Titano 山）"],
  landscape: [
    "Titano 山上的 San Marino 三塔",
    "被 Italy 包圍的山頂微型國家",
    "中世紀防禦工事"
  ],
  signs: ["Italian 語"],
  plates: ["San Marino 車牌附 RSM 代碼"],
  unique: [
    "有中世紀塔樓的微型山頂國家",
    "完全被 Italy 包圍",
    "Titano 山上三座標誌性塔樓"
  ],
  tips: [
    "Italian 文字 + 中世紀山頂堡壘 = 可能是 San Marino",
    "非常小的領土 — 如果能看到山上的三座塔"
  ]
},

'serbia': {
  name: 'Serbia', localName: 'Србија', flag: '🇷🇸', region: 'europe',
  drivingSide: 'right', tld: '.rs', phoneCode: '+381', language: 'Serbian', currency: 'Dinar (RSD)',
  camera: ["Gen 3 覆蓋", "主要道路覆蓋良好"],
  car: [
    "Gen 3：白色轎車",
    "<strong>無天線</strong> — 與大部分東歐國家不同（辨識重點！）",
    "Serbia 和 North Macedonia 是東歐中少數無天線的國家"
  ],
  landscape: [
    "多瑙河和 Sava 河流經 Belgrade",
    "北部平坦的 Vojvodina，南部多山",
    "北部農業平原",
    "鄂圖曼和奧匈帝國建築混合"
  ],
  signs: [
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
  ],
  tips: [
    "西里爾文中的 Ђ 或 Ћ = Serbian（非 Russian、Bulgarian 或 Ukrainian）",
    "同一標誌上西里爾文和拉丁文混合 = 很可能是 Serbia",
    "薄 bollard 搭配偏心反光片 = Serbia"
  ]
},

'slovakia': {
  name: 'Slovakia', localName: 'Slovensko', flag: '🇸🇰', region: 'europe',
  drivingSide: 'right', tld: '.sk', phoneCode: '+421', language: 'Slovak', currency: 'Euro (EUR)',
  camera: ["Gen 3 覆蓋", "Gen 4 覆蓋（據報有紅色車）"],
  car: [
    "Gen 4：<strong>紅色轎車</strong>",
    "Gen 3：白色轎車，天線有膠帶",
    "護柱：<strong>分裂反光片 + 弧形設計</strong>"
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
    "可見 High Tatras = 很可能是 Slovakia 北部"
  ]
},

'slovenia': {
  name: 'Slovenia', localName: 'Slovenija', flag: '🇸🇮', region: 'europe',
  drivingSide: 'right', tld: '.si', phoneCode: '+386', language: 'Slovenian', currency: 'Euro (EUR)',
  camera: ["Gen 3 覆蓋", "覆蓋良好"],
  car: [
    "Gen 4：<strong>藍色轎車 + 圓形天線</strong>（2023）",
    "Gen 3：白色轎車",
    "護柱有<strong>黑帽</strong>（類似 Austrian 風格但反光片較淺）"
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
    "白色車牌附 EU 藍色條紋 + SLO 代碼"
  ],
  unique: [
    "黑色頂蓋 bollard 搭配較淺反光片（vs Austria 的深色反光片）",
    "非常翠綠且多森林",
    "阿爾卑斯、地中海和 Pannonian 景觀混合",
    "Bled 湖 — 一眼就能辨認",
    "位於阿爾卑斯山和巴爾幹交匯處的小國"
  ],
  tips: [
    "斯拉夫語 + 高山景觀 + 歐元 = 很可能是 Slovenia",
    "黑色頂蓋 bollard 搭配較淺反光片 = Slovenia（不是 Austria）",
    "Bled 湖（高山湖泊中的島上教堂）= Slovenia"
  ]
},

'spain': {
  name: 'Spain', localName: 'España', flag: '🇪🇸', region: 'europe',
  drivingSide: 'right', tld: '.es', phoneCode: '+34', language: 'Spanish', currency: 'Euro (EUR)',
  camera: [
    "Gen 2 and Gen 3 覆蓋",
    "部分地區有 Gen 4 覆蓋",
    "全境覆蓋範圍廣泛"
  ],
  car: [
    "Gen 3：白色轎車，標準歐洲配置",
    "Gen 4 涵蓋有限",
    "無特殊車輛辨識特徵"
  ],
  landscape: [
    "中部 Meseta — 乾燥高原",
    "地中海海岸",
    "北部庇里牛斯山",
    "Andalusia — 乾燥、橄欖園、白色村莊",
    "Canary Islands — 火山、非洲氣候",
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
  ],
  tips: [
    "歐洲的 Spanish（ñ）= Spain（不是拉丁美洲）",
    "黃色凹面 bollard = Spain",
    "山頂上的 Osborne 公牛剪影 = Spain",
    "雙語標誌（Spanish/Catalan 或 Spanish/Basque）= Spain"
  ]
},

'sweden': {
  name: 'Sweden', localName: 'Sverige', flag: '🇸🇪', region: 'europe',
  drivingSide: 'right', tld: '.se', phoneCode: '+46', language: 'Swedish', currency: 'Krona (SEK)',
  camera: [
    "Gen 2 and Gen 3 覆蓋",
    "Gen 4 覆蓋（藍色車搭配圓形天線，或紅色車）"
  ],
  car: [
    "Gen 4：<strong>多種車色</strong> — 藍色（+ 圓形天線）、紅色、白色皆有",
    "Sweden 是 Gen 4 中車色最多樣的國家",
    "藍色 + 圓形天線（與 Hungary, Bulgaria, Romania, France 共用）",
    "Gen 3：白色轎車"
  ],
  roads: [
    "Bollard：兩種風格 — 一種反光片周圍有黑色矩形邊框",
    "白色虛線邊線，間隔比虛線長（獨特風格）",
    "道路品質優良",
    "許多駝鹿/麋鹿警告標誌"
  ],
  landscape: [
    "森林為主（白樺、松樹、雲杉）",
    "湖泊豐富",
    "南部平坦到起伏，西北部多山",
    "北部在北極圈以北（Lapland）",
    "紅色木造房屋（falun 紅漆）常見",
    "IKEA 門市和 Volvo/Saab 汽車"
  ],
  signs: [
    "Swedish — 使用 <strong>å、ä、ö</strong>",
    "與 Danish/Norwegian 不同：ö 取代 ø，ä 取代 æ",
    "'väg' 或 'vägen' 表示道路",
    "'gata' 或 'gatan' 表示街道"
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
  ],
  tips: [
    "å、ä、ö = Swedish（Danish/Norwegian 改用 æ、ø、å）",
    "ö（Swedish）vs ø（Danish/Norwegian）是關鍵區別",
    "紅色木造房屋（falun 紅）+ 森林 = Sweden",
    "駝鹿警告標誌 = Sweden/Norway/Finland"
  ]
},

'switzerland': {
  name: 'Switzerland', localName: 'Schweiz / Suisse / Svizzera', flag: '🇨🇭', region: 'europe',
  drivingSide: 'right', tld: '.ch', phoneCode: '+41', language: 'German, French, Italian, Romansh', currency: 'Franc (CHF)',
  camera: [
    "Gen 2 and Gen 3 覆蓋",
    "⚠️ <strong>相機位置極低 — 全球最大的車輛模糊區域 (blur area)</strong>",
    "因隱私法規限制，覆蓋範圍有限",
    "模糊區域之大，幾乎佔畫面底部 1/3 — 這是 Switzerland 最強的 meta 特徵"
  ],
  car: [
    "<strong>相機位置極低</strong> — 所有國家中模糊區域最大",
    "低角度拍攝使路面看起來更寬、物體看起來更大",
    "這是 Switzerland 最具辨識性的 meta 特徵之一",
    "無 antenna、無 snorkel、無 車頂架 (roof rack)"
  ],
  roads: [
    "Bollard：<strong>圓頂圓柱形，黑白相間圖案</strong>",
    "Liechtenstein 使用類似 bollard",
    "道路品質優良",
    "山口配髮夾彎"
  ],
  landscape: [
    "瑞士阿爾卑斯山 — 壯觀山景",
    "翠綠山谷配木屋",
    "日內瓦湖、蘇黎世湖、盧塞恩湖",
    "整潔、維護良好的村莊",
    "配牛鈴的牧場"
  ],
  signs: [
    "多語言：北部/東部德語、西部法語、南部 Italian",
    "路標可能是 4 種語言中的任何一種",
    "棕色高速公路標誌",
    "許多標誌上可見瑞士十字"
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
    "棕色高速公路標誌可與鄰國區分"
  ]
},

'turkey': {
  name: 'Turkey', localName: 'Türkiye', flag: '🇹🇷', region: 'europe',
  drivingSide: 'right', tld: '.tr', phoneCode: '+90', language: 'Turkish', currency: 'Lira (TRY)',
  camera: [
    "Gen 2 and Gen 3 覆蓋",
    "Gen 4 覆蓋（白色車）",
    "Turkey 西部覆蓋良好，東部較稀疏"
  ],
  car: [
    "Gen 4：<strong>白色轎車</strong>",
    "Gen 4：也有<strong>灰色 pickup truck（皮卡車）</strong>",
    "Gen 3：白色轎車，<strong>無天線</strong>（Turkey 和 North Macedonia 在 Gen 3 中從無天線）",
    "多種車型跨越不同涵蓋期間"
  ],
  roads: [
    "Bollard：<strong>基本白色柱 + 紅色矩形反光片</strong>（類似 Australia 但較厚）",
    "<strong>帶大洞的金屬電線桿</strong>（不同於 Romania/Hungary 的混凝土多孔電桿）",
    "主要高速公路道路品質良好",
    "白色中線"
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
  ],
  tips: [
    "ğ 或 ı（無點 i）= Turkish",
    "帶洞的金屬電桿（非混凝土）= Turkey（非 Romania/Hungary）",
    "拉丁文字 + 清真寺 = Turkey（不是使用阿拉伯文字的阿拉伯國家）",
    "注意標誌上的 İstanbul、Türkiye、ğ"
  ]
},

'ukraine': {
  name: 'Ukraine', localName: 'Україна', flag: '🇺🇦', region: 'europe',
  drivingSide: 'right', tld: '.ua', phoneCode: '+380', language: 'Ukrainian', currency: 'Hryvnia (UAH)',
  camera: [
    "Gen 3 覆蓋主要道路",
    "Gen 4 覆蓋（紅色車）",
    "覆蓋集中在 Ukraine 西部和中部"
  ],
  car: [
    "Gen 3/4：<strong>紅色轎車</strong> — 非常醒目的辨識特徵",
    "<strong>長天線</strong>有時可見，有時不可見",
    "紅色車是 Ukraine 最知名的 car meta",
    "無 snorkel、無 車頂架 (roof rack)"
  ],
  roads: [
    "道路品質不一 — 許多地區很差",
    "白色中線",
    "歐洲風格路標"
  ],
  landscape: [
    "中部/南部遼闊平坦的草原",
    "西部喀爾巴阡山脈",
    "夏季向日葵花田",
    "蘇聯時期建築為主",
    "東正教教堂（Ukrainian 風格）"
  ],
  signs: [
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
    "平坦草原 + 向日葵 + Ukrainian 西里爾文 = Ukraine"
  ]
},

'uk': {
  name: 'United Kingdom', localName: 'United Kingdom', flag: '🇬🇧', region: 'europe',
  drivingSide: 'left', tld: '.uk', phoneCode: '+44', language: 'English', currency: 'Pound (GBP)',
  camera: [
    "Gen 2、Gen 3 和 Gen 4 覆蓋",
    "全境覆蓋範圍廣泛"
  ],
  car: [
    "Gen 4：<strong>藍色轎車</strong>（2023 也有黑色 + 圓形天線）",
    "Gen 2/3：白色轎車",
    "靠左行駛",
    "無 snorkel、無 車頂架 (roof rack)"
  ],
  roads: [
    "靠左行駛",
    "Bollard：<strong>黑白條紋，頂部有大型紅色矩形</strong>（尤其 Scotland）",
    "圓環極為常見",
    "速限以 mph 標示",
    "白色虛線中線、白色實線邊線"
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
    "紅色郵筒 = UK（Ireland 的是綠色）"
  ]
},

// ╔══════════════════════════════════════════╗
// ║           ASIA                           ║
// ╚══════════════════════════════════════════╝

'bangladesh': {
  name: 'Bangladesh', localName: 'বাংলাদেশ', flag: '🇧🇩', region: 'asia',
  drivingSide: 'left', tld: '.bd', phoneCode: '+880', language: 'Bengali', currency: 'Taka (BDT)',
  camera: [
    "Gen 3 覆蓋（主要道路）",
    "覆蓋持續擴展中",
    "部分區域覆蓋品質較低"
  ],
  car: [
    "<strong>黑色 roof bars + 紅色側鏡 + 黃綠色車門</strong> — Bangladesh 獨有配置",
    "Bars 和側鏡並非在所有地區都可見",
    "部分區域使用不同車輛（白色車、黃綠色窄型車）",
    "也有船隻覆蓋（Tanguar Haor 濕地區域）",
    "⚠️ roof bars + 紅色側鏡 = 100% 確認為 Bangladesh"
  ],
  roads: [
    "左側通行",
    "路面品質通常較差",
    "部分涵蓋區域可見洪水",
    "人力車在道路上極為常見"
  ],
  landscape: [
    "極度平坦的三角洲地形",
    "河流與水道遍布（恆河／布拉馬普特拉河三角洲）",
    "翠綠茂密的植被 — 稻田",
    "人口非常密集",
    "洪水頻繁"
  ],
  signs: [
    "<strong>孟加拉文</strong> — 頂部有水平連接線，類似天城文",
    "但孟加拉文有<strong>向左的小三角形</strong>（可與印地文區分）",
    "字形非常圓潤流暢"
  ],
  plates: ["格式多樣"],
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
    "色彩鮮豔的裝飾人力車 = Bangladesh"
  ]
},

'bhutan': {
  name: 'Bhutan', localName: 'འབྲུག་ཡུལ', flag: '🇧🇹', region: 'asia',
  drivingSide: 'left', tld: '.bt', phoneCode: '+975', language: 'Dzongkha', currency: 'Ngultrum (BTN)',
  camera: ["涵蓋有限", "部分地區有 trekker 涵蓋"],
  car: [
    "涵蓋極為有限 — 大部分為 trekker",
    "無標準 Google 車輛辨識特徵",
    "靠左行駛"
  ],
  signs: [
    "宗喀語（藏文字母） — 有頂部橫線的方角字形",
    "標誌上也使用英文"
  ],
  plates: ["不丹車牌"],
  unique: [
    "藏文 + 喜馬拉雅山景",
    "道路沿途的經幡",
    "傳統不丹建築（白色牆面配彩色裝飾）",
    "佛教寺院（宗堡 dzong）"
  ],
  tips: [
    "類藏文字體 + 喜馬拉雅山 + 經幡 = Bhutan",
    "比西藏本土森林覆蓋更多"
  ]
},

'cambodia': {
  name: 'Cambodia', localName: 'កម្ពុជា', flag: '🇰🇭', region: 'asia',
  drivingSide: 'right', tld: '.kh', phoneCode: '+855', language: 'Khmer', currency: 'Riel (KHR)',
  camera: [
    "Gen 3 和 Gen 4 覆蓋",
    "主要道路覆蓋良好",
    "部分地區使用船隻和火車拍攝"
  ],
  car: [
    "<strong>多種特殊車輛</strong>被用於拍攝 Cambodia — 沒有單一標準車型",
    "Gen 4：<strong>Stubby antenna with three ridges（三脊短粗天線）</strong>（與 New Zealand、Hawaii、USA 共享）",
    "部分覆蓋使用帶 <strong>triple coil（三重線圈）</strong>的特殊車輛",
    "Mekong 河區域使用<strong>船隻</strong>拍攝",
    "鐵路沿線使用<strong>火車</strong>拍攝",
    "Cambodia 的車輛 meta 較複雜 — 多種車型混用，無法單靠車輛辨識國家"
  ],
  roads: [
    "右側通行",
    "護柱：<strong>紅色金字塔頂 + 黃色／白色反光片</strong>",
    "路況不一 — 高速公路尚可，鄉間道路崎嶇",
    "黃色中線"
  ],
  landscape: [
    "平坦地形 — 湄公河與洞里薩湖低地",
    "到處都是稻田",
    "棕櫚樹（糖棕為代表性樹種）",
    "吳哥窟寺廟群區域",
    "熱帶植被"
  ],
  signs: [
    "<strong>高棉文</strong> — 幾乎每個字母頂部都有<strong>向右的小鉤</strong>",
    "字形非常有特色，曲線明顯",
    "比泰文或寮文曲線更銳利"
  ],
  plates: ["白色／黃色車牌"],
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
    "泰文有小圓圈；高棉文有向右的鉤"
  ]
},

'hong-kong': {
  name: 'Hong Kong', localName: '香港', flag: '🇭🇰', region: 'asia',
  drivingSide: 'left', tld: '.hk', phoneCode: '+852', language: 'Chinese (Cantonese), English', currency: 'HK Dollar (HKD)',
  camera: ["Gen 3 涵蓋", "密集的都市涵蓋"],
  car: ["標準車輛，相機位置低"],
  roads: [
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
  plates: ["多種格式，帶有 HK 前綴"],
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
    "Macau 也是左側通行，但用葡萄牙文而非英文"
  ]
},

'india': {
  name: 'India', localName: 'भारत', flag: '🇮🇳', region: 'asia',
  drivingSide: 'left', tld: '.in', phoneCode: '+91', language: 'Hindi, English, + 20 others', currency: 'Rupee (INR)',
  camera: [
    "⚠️ <strong>非官方相機 (unofficial/small cam)</strong> — 畫質比標準 Gen 3 更差",
    "影像特徵：略帶霧感 (foggy)、整體偏暗、文字較難辨認",
    "2022 年後城市覆蓋擴展，但畫質仍低於其他國家的 Gen 3",
    "2022 年前僅有 Mumbai 少量 Street View + 各地 trekker 覆蓋",
    "所有官方覆蓋目前僅限城市地區",
    "往下看時可見大型圓形模糊（比一般 Gen 3 更大）"
  ],
  car: [
    "Gen 3：白色轎車，多種車型",
    "涵蓋品質和車型因地區差異很大",
    "無特殊 antenna 或 roof rack 特徵",
    "靠左行駛"
  ],
  roads: [
    "左側通行",
    "路面品質差異極大",
    "混亂的交通，各種車輛混行（卡車、三輪車、牛）",
    "國道系統（NH 編號）",
    "減速帶極為常見"
  ],
  landscape: [
    "極度多樣：喜馬拉雅山、沙漠、熱帶海岸、平原",
    "南部和東部有稻田",
    "西部有塔爾沙漠",
    "密集的都市區域",
    "印度教寺廟、清真寺、教堂"
  ],
  signs: [
    "<strong>天城文（印地語）</strong> — <strong>頂部有水平橫線連接字母</strong>",
    "多種地區文字（Tamil、Telugu、Bengali、Kannada、Malayalam 等）",
    "標誌上廣泛使用英文",
    "通常三語並列：印地語 + 地區語言 + 英文"
  ],
  plates: [
    "白色車牌帶有邦代碼（例如 MH 代表 Maharashtra、DL 代表 Delhi）",
    "黃色車牌為商用車輛"
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
    "三輪車 + 天城文 = India"
  ]
},

'indonesia': {
  name: 'Indonesia', localName: 'Indonesia', flag: '🇮🇩', region: 'asia',
  drivingSide: 'left', tld: '.id', phoneCode: '+62', language: 'Indonesian (Bahasa Indonesia)', currency: 'Rupiah (IDR)',
  camera: ["Gen 3 和 Gen 4 涵蓋", "Java、Bali 涵蓋良好，其他島嶼持續擴展"],
  car: [
    "Java 地區：<strong>細短天線（thin 短粗天線 (stubby antenna)）</strong>",
    "其他地區：標準白色轎車",
    "靠左行駛",
    "無 snorkel、無 車頂架 (roof rack)"
  ],
  roads: [
    "左側通行",
    "護柱：<strong>黑白方塊 + 金字塔頂</strong>（類似 Thailand）",
    "路況因島嶼而異",
    "機車主導交通"
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
    "黑底白字車牌",
    "以字母標示地區代碼"
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
    "紅白條紋電桿 = Indonesia（國旗配色）"
  ]
},

'japan': {
  name: 'Japan', localName: '日本', flag: '🇯🇵', region: 'asia',
  drivingSide: 'left', tld: '.jp', phoneCode: '+81', language: 'Japanese', currency: 'Yen (JPY)',
  camera: [
    "Gen 1 早期有限涵蓋",
    "Gen 2 和 Gen 3 廣泛涵蓋",
    "Gen 4 可用",
    "<strong>相機位置低</strong> — 車輛模糊區域比正常大 (larger blur than normal)",
    "⚠️ 模糊比正常大但不如 Switzerland — Switzerland 的模糊是全球最大"
  ],
  car: [
    "<strong>低相機位置</strong> — 大型模糊區域（類似 Switzerland 但不同國家）",
    "Gen 2/3/4 皆有涵蓋",
    "Gen 4 無特殊辨識特徵",
    "靠左行駛",
    "無 antenna、無 snorkel、無 車頂架 (roof rack)"
  ],
  roads: [
    "左側通行",
    "路面品質極佳",
    "白色中線為標準",
    "住宅區街道狹窄",
    "收費快速道路眾多"
  ],
  landscape: [
    "多山地形（70% 為山地）",
    "密集都市區域（東京、大阪）",
    "鄉間有稻田",
    "櫻花（春季）和秋季紅葉",
    "寺廟和神社",
    "自動販賣機到處都是"
  ],
  signs: [
    "<strong>三種文字混合使用</strong>：漢字、平假名（ひらがな）、片假名（カタカナ）",
    "平假名：圓潤流暢的字形",
    "片假名：方角銳利的字形（用於外來語）",
    "路牌通常附有英文拼音"
  ],
  plates: [
    "白色／黃色／綠色車牌，依車輛類型不同",
    "頂部有日文地區名稱",
    "綠色車牌為商用車輛",
    "黃色車牌為輕自動車（小型車輛）"
  ],
  unique: [
    "<strong>三種日文文字混合使用</strong>",
    "<strong>相機高度低</strong> — 模糊範圍較大",
    "<strong>幾乎每個角落都有自動販賣機</strong>",
    "道路和基礎設施一塵不染",
    "神社的鳥居",
    "交通極度有序",
    "路邊有黃黑條紋護欄"
  ],
  tips: [
    "漢字 + 平假名 + 片假名混用 = Japan（China 只用漢字）",
    "到處都是自動販賣機 = 很可能是 Japan",
    "相機位置低（大範圍模糊） = Japan 或 Switzerland",
    "左側通行 + 日文 = Japan"
  ]
},

'south-korea': {
  name: 'South Korea', localName: '대한민국', flag: '🇰🇷', region: 'asia',
  drivingSide: 'right', tld: '.kr', phoneCode: '+82', language: 'Korean', currency: 'Won (KRW)',
  camera: [
    "Google 涵蓋有限",
    "<strong>KakaoMap 提供大部分涵蓋</strong>（非 Google Street View）",
    "KakaoMap／Naver 涵蓋全國完整 360° 影像"
  ],
  car: [
    "KakaoMap 和 Naver 車輛（非 Google）",
    "Google 涵蓋：<strong>黑色或白色轎車，無天線</strong>（多為黑色）",
    "Gen 3 涵蓋為主",
    "靠右行駛"
  ],
  roads: [
    "右側通行",
    "護柱：圓形黃色或白色反光片",
    "路面品質極佳",
    "現代化高速公路系統"
  ],
  landscape: [
    "多山地形（70% 為山地，類似 Japan）",
    "密集都市（首爾、釜山）",
    "鄉間有稻田",
    "佛教寺廟與現代建築並存",
    "四季分明的樹木（櫻花、秋季紅葉）"
  ],
  signs: [
    "<strong>韓文（한글）</strong> — 方塊形音節字形",
    "由圓形、線條和角度組成：ㄱ、ㄴ、ㄷ、ㅁ 等",
    "每個音節方塊為正方形",
    "主要路牌廣泛使用英文"
  ],
  plates: [
    "白色／綠色車牌",
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
    "韓文相比中文／日文更幾何化且有規律"
  ]
},

'malaysia': {
  name: 'Malaysia', localName: 'Malaysia', flag: '🇲🇾', region: 'asia',
  drivingSide: 'left', tld: '.my', phoneCode: '+60', language: 'Malay (Bahasa Melayu)', currency: 'Ringgit (MYR)',
  camera: ["Gen 3 和 Gen 4 涵蓋", "涵蓋良好"],
  car: [
    "Gen 3/4：白色轎車",
    "靠左行駛（與 Singapore, Indonesia 相同）",
    "無特殊車輛辨識特徵"
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
    "多種格式 — 白色或黑色車牌",
    "以邦名字母作為前綴"
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
    "油棕種植園 + 熱帶 + 左側通行 = Malaysia"
  ]
},

'mongolia': {
  name: 'Mongolia', localName: 'Монгол Улс', flag: '🇲🇳', region: 'asia',
  drivingSide: 'right', tld: '.mn', phoneCode: '+976', language: 'Mongolian', currency: 'Tugrik (MNT)',
  camera: ["Gen 3 涵蓋", "涵蓋有限 — 廣闊的無人空間"],
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
    "護柱：<strong>保齡球瓶形狀</strong>",
    "大量未鋪設道路 — 草原上的車轍痕跡",
    "烏蘭巴托以外極少有鋪設道路",
    "大多數道路無標線"
  ],
  landscape: [
    "遼闊草原 — 一望無際的草地",
    "南部為戈壁沙漠",
    "西部為山區",
    "從道路上可見蒙古包（ger）",
    "遊牧民族與牲畜",
    "人口極度稀疏"
  ],
  signs: [
    "蒙古西里爾字母",
    "有時可見傳統蒙古文（直書）",
    "詞彙受俄語影響"
  ],
  plates: ["蒙古車牌，使用西里爾字母"],
  unique: [
    "<strong>Snorkel + 車頂露營裝備</strong> — 非常有辨識度的車輛特徵",
    "<strong>保齡球瓶形護柱</strong>",
    "遼闊空曠的草原，沒有樹木",
    "從道路上可見蒙古包（ger）",
    "黑色條紋橫桿：西蒙古；無條紋：東蒙古",
    "可見遊牧文化（牧群、馬匹）"
  ],
  tips: [
    "Snorkel + 車頂裝備 = Mongolia（只有 Kenya 也有 snorkel）",
    "保齡球瓶護柱 = Mongolia",
    "遼闊空曠的草原 + 西里爾字母 = Mongolia",
    "橫桿有橡膠填充 = 西蒙古；無填充 = 東蒙古"
  ]
},

'nepal': {
  name: 'Nepal', localName: 'नेपाल', flag: '🇳🇵', region: 'asia',
  drivingSide: 'left', tld: '.np', phoneCode: '+977', language: 'Nepali', currency: 'Rupee (NPR)',
  camera: ["涵蓋有限", "部分山區有 trekker 涵蓋"],
  car: [
    "大部分為 trekker 涵蓋（人背負相機）",
    "靠左行駛",
    "極少可見標準 Google 車輛"
  ],
  landscape: [
    "喜馬拉雅山 — 世界最高山脈（聖母峰）",
    "海拔變化劇烈",
    "山坡梯田農業",
    "佛教／印度教寺廟和佛塔",
    "山路沿途有經幡"
  ],
  signs: [
    "天城文（與印地語相同）",
    "也使用英文",
    "與 India 的標誌相似但使用尼泊爾語"
  ],
  plates: ["尼泊爾車牌"],
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
    "Nepal 是使用天城文的喜馬拉雅國家；Bhutan 使用藏文"
  ]
},

'philippines': {
  name: 'Philippines', localName: 'Pilipinas', flag: '🇵🇭', region: 'asia',
  drivingSide: 'right', tld: '.ph', phoneCode: '+63', language: 'Filipino (Tagalog), English', currency: 'Peso (PHP)',
  camera: ["Gen 3 涵蓋", "主要島嶼涵蓋尚可"],
  car: [
    "Gen 3：白色轎車（後方白色可見，有時前方有黑色部分）",
    "靠右行駛",
    "無特殊 antenna 或 roof rack 特徵"
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
    "三輪車（機車加側車）作為計程車"
  ],
  tips: [
    "木製十字架電桿 + 熱帶 + 英文／菲律賓語 = Philippines",
    "吉普尼 = Philippines（100% 獨有）",
    "英文 + 西班牙地名 + 熱帶 = Philippines",
    "三輪車計程車 = 很可能是 Philippines"
  ]
},

'singapore': {
  name: 'Singapore', localName: 'Singapura', flag: '🇸🇬', region: 'asia',
  drivingSide: 'left', tld: '.sg', phoneCode: '+65', language: 'English, Malay, Chinese, Tamil', currency: 'Dollar (SGD)',
  camera: ["Gen 3 和 Gen 4 涵蓋", "涵蓋極佳 — 小型城市國家"],
  car: [
    "標準白色轎車",
    "靠左行駛",
    "無特殊車輛辨識特徵"
  ],
  landscape: [
    "小型城市國家 — 完全都市化／郊區化",
    "現代高樓建築",
    "熱帶花園和公園",
    "Marina Bay Sands、魚尾獅地標",
    "HDB 組屋（公共住宅）"
  ],
  signs: [
    "四種官方語言：英文、馬來文、中文、淡米爾文",
    "標誌常為多語言",
    "英文為主要行政語言"
  ],
  plates: [
    "白色車牌帶 SG 前綴"
  ],
  unique: [
    "四語言標誌",
    "左側通行 + 英文為主 + 熱帶",
    "HDB 組屋（公共住宅）",
    "高速公路上的 ERP 門架",
    "極度乾淨且有序的城市"
  ],
  tips: [
    "小型、超現代、乾淨城市 + 左側通行 + 英文／中文／馬來文／淡米爾文 = Singapore",
    "HDB 組屋 = Singapore",
    "比 Malaysia 更小且更有序"
  ]
},

'sri-lanka': {
  name: 'Sri Lanka', localName: 'ශ්‍රී ලංකාව', flag: '🇱🇰', region: 'asia',
  drivingSide: 'left', tld: '.lk', phoneCode: '+94', language: 'Sinhala, Tamil', currency: 'Rupee (LKR)',
  camera: ["Gen 3 涵蓋", "主要道路涵蓋尚可"],
  car: [
    "<strong>白色車 + 右側紅色模糊</strong> — Sri Lanka 獨有 meta",
    "車前方可見<strong>藍/白/紅</strong>色塊（類似國旗圖案）",
    "Gen 4：低相機位置（low-cam），物體看起來更大、道路更寬",
    "Gen 4 有較寬的圓形模糊",
    "靠左行駛"
  ],
  roads: [
    "左側通行",
    "方形水泥電桿，僅頂部有孔洞",
    "路面品質不一"
  ],
  landscape: [
    "熱帶島嶼",
    "中央高地有茶園",
    "海岸沙灘",
    "佛教寺廟和佛塔",
    "植被茂密"
  ],
  signs: [
    "<strong>僧伽羅文</strong> — 字形像各種方向的 'C'，非常圓潤／捲曲",
    "也使用淡米爾文",
    "英文為第三語言",
    "常見三語標誌"
  ],
  plates: ["斯里蘭卡車牌"],
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
    "一個標誌上三種文字（僧伽羅文 + 淡米爾文 + 英文）= Sri Lanka"
  ]
},

'taiwan': {
  name: 'Taiwan', localName: '臺灣', flag: '🇹🇼', region: 'asia',
  drivingSide: 'right', tld: '.tw', phoneCode: '+886', language: 'Chinese (Mandarin)', currency: 'New Taiwan Dollar (TWD)',
  camera: ["Gen 3 涵蓋", "全島涵蓋良好"],
  car: [
    "標準白色轎車",
    "靠右行駛",
    "無特殊車輛辨識特徵"
  ],
  landscape: [
    "內陸多山（中央山脈）",
    "亞熱帶氣候",
    "西海岸密集都市區域",
    "稻田和熱帶水果",
    "佛教和道教寺廟"
  ],
  signs: [
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
    "繁體中文 + 右側通行 = Taiwan",
    "繁體中文 + 左側通行 = Hong Kong",
    "斜向黑黃條紋電桿 = Taiwan",
    "機車密集 + 繁體中文 = Taiwan"
  ]
},

'thailand': {
  name: 'Thailand', localName: 'ประเทศไทย', flag: '🇹🇭', region: 'asia',
  drivingSide: 'left', tld: '.th', phoneCode: '+66', language: 'Thai', currency: 'Baht (THB)',
  camera: ["Gen 3 和 Gen 4 涵蓋", "涵蓋廣泛"],
  car: [
    "Gen 3/4：白色轎車，可見煞車燈",
    "靠左行駛",
    "無特殊 antenna 或 roof rack 特徵"
  ],
  landscape: [
    "熱帶 — 翠綠茂密的植被",
    "平坦的中部平原（稻田）",
    "北部為山區",
    "佛教寺廟（wat）配金色尖塔",
    "南部有海灘"
  ],
  signs: [
    "<strong>泰文</strong> — 字形上有<strong>小圓圈</strong>",
    "直線段與曲線混合",
    "比寮文更有稜角（寮文更滑順／圓潤）",
    "編號公路標誌帶泰文"
  ],
  plates: [
    "多種顏色 — 白色、紅色、綠色",
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
    "黃色中線 + 泰文 = Thailand"
  ]
},

'vietnam': {
  name: 'Vietnam', localName: 'Việt Nam', flag: '🇻🇳', region: 'asia',
  drivingSide: 'right', tld: '.vn', phoneCode: '+84', language: 'Vietnamese', currency: 'Dong (VND)',
  camera: ["Gen 3 涵蓋", "涵蓋持續擴展中"],
  car: [
    "Gen 3：標準白色轎車",
    "靠右行駛",
    "無特殊車輛辨識特徵"
  ],
  landscape: [
    "多樣化：北部山區、南部湄公河三角洲",
    "到處都有稻田",
    "密集都市區域（河內、胡志明市）",
    "熱帶植被",
    "石灰岩喀斯特地形（下龍灣地區）"
  ],
  signs: [
    "<strong>越南文 — 拉丁字母帶有大量變音符號</strong>",
    "â、ă、đ、ê、ô、ơ、ư + 多種聲調符號",
    "看起來像是「戴了很多帽子的拉丁字母」",
    "全世界變音符號最多的拉丁字母語言"
  ],
  plates: [
    "白色車牌帶藍色地區代碼"
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
    "機車海 + 大量符號的拉丁字母 = Vietnam"
  ]
},

// ╔══════════════════════════════════════════╗
// ║           MIDDLE EAST                    ║
// ╚══════════════════════════════════════════╝

'israel': {
  name: 'Israel', localName: 'ישראל', flag: '🇮🇱', region: 'middle-east',
  drivingSide: 'right', tld: '.il', phoneCode: '+972', language: 'Hebrew, Arabic', currency: 'Shekel (ILS)',
  camera: ["Gen 3 和 Gen 4 涵蓋", "涵蓋良好"],
  car: [
    "Gen 3：<strong>黑色轎車 + 長天線</strong> — 與 Russia, Palestine 相同配置",
    "黑色車 + 長天線 = Russia/Israel/Palestine/Donetsk",
    "Hebrew 文字 + 黑色車 + 長天線 = Israel"
  ],
  landscape: [
    "西部為地中海海岸",
    "南部為內蓋夫沙漠",
    "死海 — 地球最低點",
    "北部綠意盎然，南部乾旱",
    "古老與現代建築並存"
  ],
  signs: [
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
    "三語標誌 = Israel"
  ]
},

'jordan': {
  name: 'Jordan', localName: 'الأردن', flag: '🇯🇴', region: 'middle-east',
  drivingSide: 'right', tld: '.jo', phoneCode: '+962', language: 'Arabic', currency: 'Dinar (JOD)',
  camera: ["Gen 3 涵蓋", "主要道路涵蓋尚可"],
  car: [
    "Gen 3：<strong>黑色轎車</strong>",
    "<strong>無天線</strong>（與 Israel 黑色車有天線不同 — 辨識重點！）",
    "黑色車 vs UAE 白色車 — 這是分辨兩國最簡單的方式",
    "黃色邊線（如 Israel）"
  ],
  landscape: [
    "沙漠 — 乾旱地形為主",
    "瓦迪倫 — 紅色砂岩沙漠",
    "死海（西部邊界）",
    "安曼 — 丘陵城市，石灰岩建築",
    "佩特拉地區"
  ],
  signs: [
    "<strong>阿拉伯文</strong> — 由右至左書寫，連體／草書字形",
    "標誌上也常用英文",
    "阿拉伯文／英文雙語路牌"
  ],
  plates: ["白色／黃色車牌"],
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
    "看起來不如海灣國家富裕 = 很可能是 Jordan"
  ]
},

'saudi-arabia': {
  name: 'Saudi Arabia', localName: 'المملكة العربية السعودية', flag: '🇸🇦', region: 'middle-east',
  drivingSide: 'right', tld: '.sa', phoneCode: '+966', language: 'Arabic', currency: 'Riyal (SAR)',
  camera: ["Gen 4 涵蓋擴展中", "主要城市和高速公路有涵蓋"],
  car: ["標準車輛"],
  roads: [
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
    "大多數路牌為阿拉伯文 + 英文",
    "高速公路使用綠色標誌",
    "指向麥加／麥地那的方向標誌"
  ],
  plates: ["白色車牌帶阿拉伯文 + 英文數字"],
  unique: [
    "遼闊沙漠 + 阿拉伯文 + 現代化基礎設施",
    "指向聖城（麥加、麥地那）的方向標誌",
    "石油財富在基礎設施中可見",
    "保守社會 — 街道上可見行人較少"
  ],
  tips: [
    "阿拉伯文 + 富裕 + 遼闊沙漠 + 指向麥加的標誌 = Saudi Arabia",
    "比 UAE／Qatar 等海灣國家更大更分散"
  ]
},

'uae': {
  name: 'United Arab Emirates', localName: 'الإمارات', flag: '🇦🇪', region: 'middle-east',
  drivingSide: 'right', tld: '.ae', phoneCode: '+971', language: 'Arabic', currency: 'Dirham (AED)',
  camera: ["Gen 3 和 Gen 4 涵蓋", "杜拜和阿布達比涵蓋極佳"],
  car: [
    "Gen 3：<strong>白色轎車</strong>（或銀色）",
    "白色車 vs Jordan 黑色車 — 最基本的辨識差異",
    "Gen 4 涵蓋也有白色車",
    "無特殊 antenna 或 roof rack"
  ],
  landscape: [
    "沙漠中的超現代城市",
    "杜拜：摩天大樓（哈里發塔）",
    "阿布達比：規劃完善的現代城市",
    "可見棕櫚島",
    "城市外有沙丘"
  ],
  signs: [
    "所有標誌皆為阿拉伯文 + 英文",
    "高速公路使用綠色標誌"
  ],
  plates: ["依酋長國格式不同"],
  unique: [
    "沙漠中聳立的超現代摩天大樓",
    "阿拉伯文 + 英文 + 可見極端財富",
    "寬闊高速公路上有豪華車",
    "杜拜地標可辨識"
  ],
  tips: [
    "超現代沙漠城市 + 阿拉伯文／英文 = UAE",
    "沙漠中的摩天大樓 = 很可能是 Dubai／UAE"
  ]
},

'qatar': {
  name: 'Qatar', localName: 'قطر', flag: '🇶🇦', region: 'middle-east',
  drivingSide: 'right', tld: '.qa', phoneCode: '+974', language: 'Arabic', currency: 'Riyal (QAR)',
  camera: ["Gen 4 涵蓋", "多哈地區涵蓋良好"],
  car: [
    "Gen 3：<strong>白色 pickup truck（皮卡車）</strong>（類似 Oman, Senegal）",
    "天線在車左側",
    "沙漠景觀 + 白色 truck = Qatar/Oman/UAE 之一",
    "與 UAE 區別：Qatar 是 truck，UAE 是轎車"
  ],
  signs: ["阿拉伯文 + 英文雙語"],
  plates: ["卡達車牌"],
  unique: [
    "小型富裕半島",
    "多哈天際線可辨識",
    "平坦沙漠地形"
  ],
  tips: [
    "小型、平坦、富裕的海灣城市 + 阿拉伯文 = 可能是 Qatar",
    "比 UAE 小，比 Oman 平坦"
  ]
},

// ╔══════════════════════════════════════════╗
// ║           NORTH AMERICA                  ║
// ╚══════════════════════════════════════════╝

'usa': {
  name: 'United States', localName: 'United States', flag: '🇺🇸', region: 'north-america',
  drivingSide: 'right', tld: '.us', phoneCode: '+1', language: 'English', currency: 'Dollar (USD)',
  camera: [
    "Gen 1（最早期 — 美國是全球第一個有 Street View 的國家，2007 年）",
    "Gen 2、Gen 3、Gen 4 — 所有世代都有",
    "全球涵蓋範圍最廣的國家"
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
    "'YIELD' 讓行標誌有文字（Canada 是空白三角形）",
    "'ONE WAY' 單行標誌有文字（Canada 是空白箭頭）",
    "各州道路差異明顯"
  ],
  landscape: [
    "地形極為多樣：西南沙漠、東北綠地、中西部平原、太平洋沿岸",
    "黃色校車",
    "USPS 郵務車",
    "藍色 USPS 郵筒（Canada 是紅色）",
    "Adopt-a-Highway 標誌"
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
    "Adopt-a-Highway 標誌"
  ],
  tips: [
    "雙黃線 + 'SPEED LIMIT' + MPH = USA（非 Canada）",
    "藍色郵筒 = USA；紅色郵筒 = Canada",
    "'YIELD'（USA）vs 空白三角形（Canada）",
    "許多州無前車牌 — 注意各州特定線索"
  ]
},

'canada': {
  name: 'Canada', localName: 'Canada', flag: '🇨🇦', region: 'north-america',
  drivingSide: 'right', tld: '.ca', phoneCode: '+1', language: 'English, French', currency: 'Dollar (CAD)',
  camera: ["Gen 2、3、4", "涵蓋範圍集中在美國邊境附近"],
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
    "<strong>空白讓行三角形</strong>（無 'YIELD' 文字）",
    "空白單行箭頭（無 'ONE WAY' 文字）",
    "木製標誌桿比 US 多（US 多用金屬）",
    "藍色資訊標誌較多（US 多用綠色）"
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
    "空白讓行三角形 + km/h = Canada"
  ]
},

'mexico': {
  name: 'Mexico', localName: 'México', flag: '🇲🇽', region: 'north-america',
  drivingSide: 'right', tld: '.mx', phoneCode: '+52', language: 'Spanish', currency: 'Peso (MXN)',
  camera: ["Gen 2、3、4 涵蓋", "全部 31 個州都有涵蓋"],
  car: [
    "Gen 2/3：白色轎車",
    "Gen 4：<strong>藍色轎車</strong>",
    "<strong>短粗天線（短粗天線 (stubby antenna)）</strong> — 與 Colombia, Ecuador, Brazil 共用",
    "Gen 3 有煞車燈可見"
  ],
  roads: [
    "<strong>單一實黃色中心線</strong> — Mexico 獨有特徵",
    "白色邊線",
    "ALTO 停車標誌",
    "<strong>白色香菸形 bollard，底部黑色 + 背面黃色</strong>",
    "八角形電線桿；也有黑色螺旋絕緣子的木桿",
    "Topes（巨大減速丘）— 非常常見"
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
    "Oaxaca 的 Gen 3 有獨特裂紋"
  ],
  tips: [
    "單一實黃色中心線 = Mexico",
    "ALTO（Mexico / 中美洲）vs PARE（南美洲）",
    "到處都是 Topes = Mexico",
    "短天線 + 西班牙語 + ALTO = Mexico"
  ]
},

// ╔══════════════════════════════════════════╗
// ║           CENTRAL AMERICA                ║
// ╚══════════════════════════════════════════╝

'guatemala': {
  name: 'Guatemala', localName: 'Guatemala', flag: '🇬🇹', region: 'central-america',
  drivingSide: 'right', tld: '.gt', phoneCode: '+502', language: 'Spanish', currency: 'Quetzal (GTQ)',
  camera: ["Gen 3 涵蓋"],
  car: [
    "<strong>灰色轎車 + roof rack + 可見黑色側鏡</strong> — Guatemala 獨有配置",
    "只有 Guatemala 有這種特定的側鏡可見度",
    "Roof rack 非常容易辨認",
    "與 Kyrgyzstan 類似（都有 bars + 側鏡），但景觀完全不同"
  ],
  roads: [
    "黃色中心線，白色邊線",
    "ALTO 停車標誌",
    "底部紅色的電線桿 — 獨特特徵",
    "棋盤式街道系統：Calle（東西向）、Avenida（南北向）"
  ],
  landscape: ["從熱帶到高地", "火山地形", "可見瑪雅文化"],
  signs: ["西班牙語，有 Ñ"],
  plates: ["小型格式（15cm × 30cm）"],
  unique: [
    "<strong>車上可見黑色後視鏡</strong> — 全球唯一",
    "<strong>紅色塗漆的電線桿底部</strong>",
    "棋盤式街道命名（Calle/Avenida）",
    "'Una Via' / 'Doble Via' 表示單向/雙向"
  ],
  tips: [
    "Google 街景車上可見黑色後視鏡 = Guatemala",
    "紅色底部電線桿 + ALTO = Guatemala",
    "編號式棋盤命名系統（Calles/Avenidas）= Guatemala"
  ]
},

'costa-rica': {
  name: 'Costa Rica', localName: 'Costa Rica', flag: '🇨🇷', region: 'central-america',
  drivingSide: 'right', tld: '.co.cr', phoneCode: '+506', language: 'Spanish', currency: 'Colón (CRC)',
  camera: ["Gen 3（Trekker，2025 年前）", "2025 年起擴展全面涵蓋"],
  car: [
    "2025 年前：僅 Google Trekker — 看不到車（僅行人視角！）",
    "2025 年前的涵蓋無法離開人行道"
  ],
  roads: [
    "單黃色中心線",
    "ALTO 停車標誌",
    "銀色標誌桿，背面有十字支撐"
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
    "ALTO + 熱帶 + Kölbi 招牌 = Costa Rica"
  ]
},

'panama': {
  name: 'Panama', localName: 'Panamá', flag: '🇵🇦', region: 'central-america',
  drivingSide: 'right', tld: '.pa', phoneCode: '+507', language: 'Spanish', currency: 'Balboa/USD',
  camera: ["Gen 3 涵蓋"],
  car: [
    "<strong>獨特粗天線</strong> — 全球唯一！100% 確認為 Panama",
    "即使看不到天線，模糊區域通常也比較大",
    "無 車頂架 (roof rack)、無 snorkel"
  ],
  roads: ["ALTO 停車標誌"],
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
    "這種天線在全世界其他地方都找不到"
  ]
},

// ╔══════════════════════════════════════════╗
// ║           CARIBBEAN                      ║
// ╚══════════════════════════════════════════╝

'dominican-republic': {
  name: 'Dominican Republic', localName: 'República Dominicana', flag: '🇩🇴', region: 'caribbean',
  drivingSide: 'right', tld: '.do', phoneCode: '+809', language: 'Spanish', currency: 'Peso (DOP)',
  camera: ["Gen 3 — 僅限 Santo Domingo 和 Santiago 地區"],
  car: [
    "<strong>Roof bars + 黑色橡膠條紋在中間</strong> — 僅 DR 和 Mongolia（烏蘭巴托）有此特徵",
    "無可見側鏡（與 Guatemala 不同）",
    "白色轎車"
  ],
  roads: [
    "PARE 停車標誌（非 ALTO！）",
    "Santiago：電線桿底部灰色塗漆；Santo Domingo：未塗漆"
  ],
  landscape: ["熱帶加勒比海島嶼", "與 Haiti 共用同一島嶼"],
  signs: ["西班牙語"],
  plates: ["白色帶微黃色調", "僅有後車牌"],
  unique: [
    "<strong>黑色條紋 roof bars</strong> — 僅與 Mongolia 共有",
    "PARE 停車標誌（非中美洲的 ALTO）",
    "電線桿塗漆差異：Santiago vs Santo Domingo"
  ],
  tips: [
    "黑色條紋 roof bars + 加勒比海 + 西班牙語 = Dominican Republic",
    "PARE（非 ALTO）= 南美洲/加勒比海慣例"
  ]
},

'puerto-rico': {
  name: 'Puerto Rico', localName: 'Puerto Rico', flag: '🇵🇷', region: 'caribbean',
  drivingSide: 'right', tld: '.pr', phoneCode: '+1-787', language: 'Spanish, English', currency: 'Dollar (USD)',
  camera: ["Gen 3 涵蓋"],
  car: [
    "白色轎車 + 副駕駛側天線",
    "前方無車牌",
    "Gen 3 涵蓋（主要西海岸）"
  ],
  roads: [
    "<strong>PARE 停車標誌 + MPH 速限</strong> — 獨特組合！",
    "距離標記用 KM（但速度用 MPH）",
    "粗壯的方形電線桿",
    "圓形盾牌公路標記（編號 100-9000+）",
    "街道標誌上有 'CALLE'"
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
    "粗壯方形電線桿 + 西班牙語 + 熱帶 = Puerto Rico"
  ]
},

'curacao': {
  name: 'Curaçao', localName: 'Curaçao', flag: '🇨🇼', region: 'caribbean',
  drivingSide: 'right', tld: '.cw', phoneCode: '+599', language: '荷蘭語、英語、Papiamento', currency: 'Guilder (ANG)',
  camera: ["Gen 3 涵蓋"],
  car: [
    "<strong>可見 bars + 可見黑色引擎蓋</strong> — 全球唯一組合",
    "黑色轎車 + roof rack + 白色貼紙",
    "Roof rack 是辨識 Curaçao 的重要線索"
  ],
  roads: [
    "底部白色的木製電線桿",
    "城鎮中亮黃色標誌桿",
    "黑白條紋交通號誌"
  ],
  landscape: ["乾旱的加勒比海島嶼", "色彩繽紛的荷蘭殖民風格房屋"],
  signs: ["荷蘭語、英語、Papiamento"],
  plates: ["白底黑字車牌"],
  unique: [
    "<strong>車架 + 黑色引擎蓋可見</strong> — 100% Curaçao",
    "唯一說荷蘭語的加勒比海島嶼",
    "亮黃色標誌桿",
    "黑白條紋交通號誌",
    "色彩繽紛的房屋（圍欄與房屋同色）"
  ],
  tips: [
    "黑色引擎蓋 + roof bars = Curaçao",
    "荷蘭語文字 + 加勒比海 = Curaçao"
  ]
},

'bermuda': {
  name: 'Bermuda', localName: 'Bermuda', flag: '🇧🇲', region: 'caribbean',
  drivingSide: 'left', tld: '.bm', phoneCode: '+1-441', language: 'English', currency: 'Bermudian Dollar (BMD)',
  camera: ["Gen 3 覆蓋", "Limited coverage — small island territory"],
  car: [
    "<strong>黑色 pickup truck（皮卡車）</strong> — 非一般轎車",
    "Bermuda 使用 pickup truck 而非標準 Google car — 這是極強的辨識特徵"
  ],
  roads: [
    "靠左行駛 (British territory)",
    "Narrow roads with 35 km/h speed limit (world's lowest)",
    "No rental cars allowed — only scooters and taxis",
    "道路品質良好"
  ],
  landscape: [
    "Pink sand beaches",
    "Subtropical island — lush green vegetation",
    "Pastel-colored houses",
    "British 殖民時期 architecture"
  ],
  signs: ["English — 英國風格路標"],
  plates: ["Bermuda plates"],
  unique: [
    "<strong>黑色 pickup truck（皮卡車）</strong> — 非常罕見的 Google Street View 車輛",
    "靠左行駛 + English + subtropical island",
    "Pastel-colored houses and pink sand",
    "British territory in North Atlantic"
  ],
  tips: [
    "黑色 pickup truck + 左駕 + 英文 + 亞熱帶島嶼 = Bermuda",
    "Very rare spawn — small territory"
  ]
},

'christmas-island': {
  name: 'Christmas Island', localName: 'Christmas Island', flag: '🇨🇽', region: 'oceania',
  drivingSide: 'left', tld: '.cx', phoneCode: '+61', language: 'English', currency: 'Australian Dollar (AUD)',
  camera: ["Gen 3 覆蓋", "覆蓋非常有限 — small island"],
  car: [
    "<strong>銀色 pickup truck（皮卡車）（皮卡車）</strong> — 非標準 Google car",
    "Christmas Island 使用銀色 pickup truck — 與 Bermuda 的黑色 pickup 不同"
  ],
  roads: [
    "靠左行駛 (Australian territory)",
    "Limited road network",
    "道路品質不一"
  ],
  landscape: [
    "熱帶島嶼 covered in dense rainforest",
    "Red crabs (famous annual migration)",
    "Coastal cliffs and phosphate mining areas",
    "Indian Ocean — between Australia and Indonesia"
  ],
  signs: ["English — Australian-style signs"],
  plates: ["Australian plates"],
  unique: [
    "<strong>銀色 pickup truck（皮卡車）</strong> — 與 Bermuda 的黑色 pickup 不同",
    "Australian territory in Indian Ocean",
    "Dense tropical rainforest + coastal cliffs",
    "Very rare spawn"
  ],
  tips: [
    "銀色 pickup truck + 左駕 + 英文 + 熱帶島嶼 = Christmas Island",
    "與 Bermuda 區分：Bermuda = 黑色 pickup，Christmas Island = 銀色 pickup",
    "Australian phone code (+61) 和 .cx domain"
  ]
},

// ╔══════════════════════════════════════════╗
// ║           SOUTH AMERICA                  ║
// ╚══════════════════════════════════════════╝

'brazil': {
  name: 'Brazil', localName: 'Brasil', flag: '🇧🇷', region: 'south-america',
  drivingSide: 'right', tld: '.br', phoneCode: '+55', language: 'Portuguese', currency: 'Real (BRL)',
  camera: ["Gen 2、3、4 涵蓋", "使用 30 多輛 Fiat Stilo 車；Amazon 地區也用自行車和船"],
  car: [
    "Gen 3：白色轎車",
    "Gen 4：<strong>藍色轎車</strong>（所有 Gen 4 涵蓋皆為藍色）",
    "<strong>短粗天線（短粗天線 (stubby antenna)）</strong> — 與 Mexico, Colombia, Ecuador 共用",
    "有時無天線"
  ],
  roads: [
    "單或雙黃色中心線 + 白色外線",
    "PARE 停車標誌",
    "<strong>黑色標誌背面</strong> — Brazil 最強辨識特徵之一",
    "「梯子」電線桿 — 寬底座有凹痕 + 頂部有孔",
    "黃黑色V字標記",
    "標誌上的州代碼（PR、SP、MG 等）"
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
  ],
  tips: [
    "南美洲的葡萄牙語（ã、õ）= Brazil（100%）",
    "黑色標誌背面 = Brazil",
    "紅橘色土壤 = 非常可能是 Brazil",
    "梯子電線桿 + 葡萄牙語 = Brazil"
  ]
},

'argentina': {
  name: 'Argentina', localName: 'Argentina', flag: '🇦🇷', region: 'south-america',
  drivingSide: 'right', tld: '.ar', phoneCode: '+54', language: 'Spanish', currency: 'Peso (ARS)',
  camera: ["Gen 3、4 涵蓋"],
  car: [
    "Gen 3/4：<strong>黑色轎車</strong> — 在南美洲中較為獨特",
    "後方可見，平坦荒涼的景觀（Patagonia）",
    "無 antenna、無 車頂架 (roof rack)"
  ],
  roads: [
    "混合中心線：雙黃線、黃 + 白虛線，或純白色",
    "PARE 停車標誌",
    "白紅色V字標記（南美洲獨有）",
    "<strong>A 字形混凝土電線桿</strong> — 兩根桿分成 A 字形",
    "RN（國道）/ RP（省道）公路標誌"
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
    "YPF 加油站 = Argentina"
  ]
},

'chile': {
  name: 'Chile', localName: 'Chile', flag: '🇨🇱', region: 'south-america',
  drivingSide: 'right', tld: '.cl', phoneCode: '+56', language: 'Spanish', currency: 'Peso (CLP)',
  camera: ["Gen 3 覆蓋"],
  car: [
    "<strong>白色轎車 — 白色後方可見</strong>",
    "無 antenna",
    "配合<strong>全白道路線</strong>辨識（南美唯一全白線國家）"
  ],
  roads: [
    "<strong>全白色道路標線</strong> — 南美洲唯一全白標線的國家",
    "PARE 停車標誌",
    "頂部有插槽的標誌桿",
    "方形混凝土電線桿，側面有凹痕 + 小孔",
    "西班牙式 bollard"
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
    "橘色車牌 = Chile 的商用車輛"
  ]
},

'colombia': {
  name: 'Colombia', localName: 'Colombia', flag: '🇨🇴', region: 'south-america',
  drivingSide: 'right', tld: '.co', phoneCode: '+57', language: 'Spanish', currency: 'Peso (COP)',
  camera: ["Gen 3，部分 Gen 4"],
  car: [
    "Gen 3：<strong>短粗天線（短粗天線 (stubby antenna)）</strong> — 與 Mexico, Ecuador, Brazil 共用",
    "車色多樣：黑色、白色、灰色皆有",
    "天線隨機出現",
    "Gen 4：白色或銀色轎車"
  ],
  roads: [
    "黃色中心線 + 白色邊線",
    "PARE 停車標誌",
    "<strong>「Colombia Cross」— 標誌背面的 X 形金屬結構</strong>",
    "細白色標誌桿",
    "紅色磁磚人行道"
  ],
  landscape: [
    "Andes 山脈",
    "熱帶低地",
    "咖啡產區"
  ],
  signs: ["西班牙語，有 Ñ"],
  plates: ["<strong>黃色車牌</strong> — 南美洲獨有", "底部有城市名稱"],
  unique: [
    "<strong>黃色車牌</strong> — Colombia 最強辨識特徵",
    "<strong>標誌背面的 Colombia Cross</strong>",
    "細白色標誌桿",
    "紅色磁磚人行道"
  ],
  tips: [
    "黃色車牌 = Colombia（在南美洲 100% 確認）",
    "標誌背面的 X 形金屬（Colombia Cross）= Colombia"
  ]
},

'ecuador': {
  name: 'Ecuador', localName: 'Ecuador', flag: '🇪🇨', region: 'south-america',
  drivingSide: 'right', tld: '.ec', phoneCode: '+593', language: 'Spanish', currency: 'Dollar (USD)',
  camera: ["Gen 3 覆蓋"],
  car: [
    "Gen 3：白色轎車",
    "<strong>短粗天線（短粗天線 (stubby antenna)）</strong> — 與 Mexico, Colombia, Brazil 共用",
    "天線短而粗",
    "無 車頂架 (roof rack)"
  ],
  roads: [
    "黃色中心線",
    "PARE 停車標誌",
    "<strong>雙護欄</strong> — 在南美洲少見",
    "<strong>非常常見的 bollard</strong> — 圓柱形有兩條紅色條紋；或扁平型有兩個紅色反光片",
    "法式梯子電線桿，有凹痕"
  ],
  landscape: ["Andes 山脈", "Galápagos 群島", "沿海熱帶低地"],
  signs: ["西班牙語，有 Ñ"],
  plates: ["白色車牌"],
  unique: [
    "<strong>雙護欄</strong>（在拉丁美洲少見）",
    "<strong>常見的紅色條紋 bollard</strong>",
    "法式梯子電線桿",
    "使用 USD（$）為貨幣（在南美洲不常見）"
  ],
  tips: [
    "雙護欄 + 紅色條紋 bollard = Ecuador",
    "法式電線桿 + 西班牙語 = Ecuador",
    "南美洲看到 USD 價格 = Ecuador"
  ]
},

'peru': {
  name: 'Peru', localName: 'Perú', flag: '🇵🇪', region: 'south-america',
  drivingSide: 'right', tld: '.pe', phoneCode: '+51', language: 'Spanish', currency: 'Sol (PEN)',
  camera: ["Gen 3、4 涵蓋", "全球最高的 Street View 道路（4,818m）"],
  car: [
    "Gen 3：白色 + 黑色轎車皆有",
    "Gen 4：<strong>深灰色轎車</strong>",
    "部分涵蓋有黑色 truck（120 號公路 Yauyos-Cochas 保護區附近）",
    "無 antenna（與有天線的鄰國不同）"
  ],
  roads: [
    "黃色中心線 + 白色路肩線",
    "PARE 停車標誌",
    "<strong>黑白條紋標誌桿</strong> — 僅 Peru！",
    "三臂電線桿；下半部塗黑",
    "「香菸」bollard — 白色圓柱配黑色條紋",
    "標誌底座在凸起的混凝土塊上"
  ],
  landscape: [
    "海岸：沙漠",
    "高地：2500-4000m 溫帶",
    "4000m 以上：稀疏的 Ichu 草",
    "東部：熱帶 Amazon"
  ],
  signs: ["高地有西班牙語 + Quechua", "常見政治海報"],
  plates: ["白色（一般）", "黃色（商用）"],
  unique: [
    "<strong>黑白條紋標誌桿</strong> — 僅 Peru",
    "<strong>三臂電線桿</strong>",
    "<strong>Mototaxis（嘟嘟車）</strong> — 拉丁美洲僅 Peru 有",
    "香菸形 bollard",
    "混凝土底座標誌桿"
  ],
  tips: [
    "黑白條紋標誌桿 = Peru（100%）",
    "拉丁美洲的嘟嘟車（mototaxis）= Peru",
    "下半部塗黑的三臂電線桿 = Peru"
  ]
},

'bolivia': {
  name: 'Bolivia', localName: 'Bolivia', flag: '🇧🇴', region: 'south-america',
  drivingSide: 'right', tld: '.bo', phoneCode: '+591', language: 'Spanish, Quechua', currency: 'Boliviano (BOB)',
  camera: ["Gen 3 覆蓋"],
  car: [
    "白色轎車（白色光暈可見）",
    "無特殊車輛辨識特徵"
  ],
  roads: [
    "白色實線邊線 + 黃色中心線",
    "PARE 停車標誌",
    "粗大未塗漆的木製標誌桿",
    "不規則電線桿"
  ],
  landscape: [
    "大部分為乾燥沙漠地形",
    "比 Peru 更平坦、更像沙漠",
    "獨特的苔蘚植被",
    "高海拔（許多道路在 3500m 以上）"
  ],
  signs: ["西班牙語 + Quechua"],
  plates: ["淡藍色色調"],
  unique: [
    "<strong>Wiphala 旗</strong> — 彩虹棋盤旗（原住民旗幟）",
    "可見 MAS 黨旗",
    "Tigo 電信品牌招牌",
    "穿傳統服飾的婦女",
    "裸露紅磚建築",
    "粗大未塗漆的木製標誌桿"
  ],
  tips: [
    "Wiphala（彩虹棋盤）旗 = Bolivia",
    "乾燥沙漠 + 裸磚 + 西班牙語/Quechua = Bolivia",
    "比 Peru 更像沙漠且更平坦"
  ]
},

'uruguay': {
  name: 'Uruguay', localName: 'Uruguay', flag: '🇺🇾', region: 'south-america',
  drivingSide: 'right', tld: '.uy', phoneCode: '+598', language: 'Spanish', currency: 'Peso (UYU)',
  camera: ["Gen 3 覆蓋"],
  car: [
    "<strong>黑色轎車</strong>（如 Argentina）",
    "配合<strong>三條線：雙黃色中線 + 白色虛線交錯</strong>辨識 — Uruguay 獨有"
  ],
  roads: [
    "<strong>三線：雙黃色中心線 + 白色虛線交錯</strong> — 僅 Uruguay！",
    "PARE 停車標誌",
    "白色木製標誌桿",
    "Bollard：白色正面 + 頂部矩形反光片",
    "白黑色交通號誌",
    "<strong>綠色塗漆里程碑</strong> — Uruguay 獨有"
  ],
  landscape: [
    "平坦草地牧場（牛/羊）",
    "防風林",
    "農業（大麥、大豆、玉米）"
  ],
  signs: ["西班牙語"],
  plates: ["幾乎全白（比 Argentina 更白）"],
  unique: [
    "<strong>三線道路（雙黃線 + 白色虛線）</strong>",
    "<strong>綠色里程碑</strong>",
    "黑色 Google 街景車（與 Argentina 相同）",
    "ANCAP 加油站（Argentina 是 YPF）",
    "白黑色交通號誌"
  ],
  tips: [
    "三線道路模式 = Uruguay（100%）",
    "黑色車 + ANCAP 加油站 = Uruguay（Argentina 是 YPF）",
    "道路旁的綠色里程碑 = Uruguay"
  ]
},

// ╔══════════════════════════════════════════╗
// ║           AFRICA                         ║
// ╚══════════════════════════════════════════╝

'south-africa': {
  name: 'South Africa', localName: 'South Africa', flag: '🇿🇦', region: 'africa',
  drivingSide: 'left', tld: '.za', phoneCode: '+27', language: 'English, Afrikaans, Zulu + 8 others', currency: 'Rand (ZAR)',
  camera: ["Gen 2、3、4 涵蓋範圍", "覆蓋範圍廣泛"],
  car: [
    "Gen 4：<strong>天藍色轎車 + 短黑色天線</strong>（在車後方）",
    "Gen 2/3：標準白色轎車",
    "Kruger National Park：<strong>迷彩花紋車</strong>（全球唯一！）",
    "靠左行駛"
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
    "基礎設施比鄰國更發達"
  ]
},

'kenya': {
  name: 'Kenya', localName: 'Kenya', flag: '🇰🇪', region: 'africa',
  drivingSide: 'left', tld: '.ke', phoneCode: '+254', language: 'Swahili, English', currency: 'Shilling (KES)',
  camera: ["Gen 3 涵蓋範圍", "主要道路有不錯的覆蓋"],
  car: [
    "<strong>右前方可見 SNORKEL 進氣管</strong> — 100% 確認為 Kenya（僅 Kenya 和 Mongolia 有 snorkel）",
    "大型黑色 snorkel 進氣管，用於涉水過河",
    "Gen 4（2022 秋季後）：更新車型",
    "Gen 3：黑色車 + 左前側鏡（較舊涵蓋）",
    "有 Toyota follow car（都市區較少見）",
    "Lewa Wildlife Conservancy：特殊 safari 車，蛋殼色 車頂架 (roof rack)"
  ],
  roads: [
    "靠左行駛",
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
  plates: ["白色/黃色車牌"],
  unique: [
    "<strong>Google car 上的 SNORKEL 進氣管</strong> — 100% 確認為 Kenya",
    "Kenya 是唯一有 Google car snorkel 的非洲國家",
    "大草原景觀",
    "可見 Matatu（彩色小巴）",
    "到處可見 M-Pesa 行動支付標誌"
  ],
  tips: [
    "車輛右側有 snorkel = Kenya（或 Mongolia — 但地貌完全不同）",
    "大草原 + 英語/Swahili + snorkel = Kenya",
    "M-Pesa 標誌 = Kenya"
  ]
},

'nigeria': {
  name: 'Nigeria', localName: 'Nigeria', flag: '🇳🇬', region: 'africa',
  drivingSide: 'right', tld: '.ng', phoneCode: '+234', language: 'English', currency: 'Naira (NGN)',
  camera: ["Gen 3 涵蓋範圍", "主要城市和高速公路有覆蓋"],
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
    "路況差異極大",
    "電線桿上有梯式攀爬段"
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
  plates: ["多種格式"],
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
    "Lagos 交通混亂 = 很可能是 Nigeria"
  ]
},

'ghana': {
  name: 'Ghana', localName: 'Ghana', flag: '🇬🇭', region: 'africa',
  drivingSide: 'right', tld: '.gh', phoneCode: '+233', language: 'English', currency: 'Cedi (GHS)',
  camera: ["Gen 3 涵蓋範圍", "城市和主要道路有覆蓋"],
  car: [
    "<strong>黑色車 + 銀色 車頂架 (roof rack)</strong>",
    "<strong>前橫桿右端包覆黑色膠帶</strong> — 全球唯一！100% 確認為 Ghana",
    "沒有其他國家有完全相同的膠帶樣式",
    "極少數在 Boabeng 有無膠帶版本",
    "側鏡有時可見",
    "Ghana 膠帶在<strong>前</strong>桿 vs Réunion 膠帶在<strong>後</strong>桿"
  ],
  roads: [
    "靠右行駛",
    "路況不一"
  ],
  landscape: [
    "南部為熱帶雨林",
    "北部為大草原",
    "可可種植園",
    "Lake Volta（世界最大人工湖之一）"
  ],
  signs: ["英語（官方語言）"],
  plates: ["多種格式"],
  unique: [
    "<strong>Roof rack 前橫桿包覆黑色膠帶</strong> — 僅 Ghana 有",
    "Réunion 僅在後橫桿包膠帶（不同）",
    "西非英語區",
    "可見彩色奇幻棺材（Accra 地區）"
  ],
  tips: [
    "前橫桿黑色膠帶 = Ghana（Réunion = 後橫桿膠帶）",
    "英語 + 西非熱帶 = Ghana 或 Nigeria",
    "沒有警車護送 = Ghana（Nigeria 有護送）"
  ]
},

'botswana': {
  name: 'Botswana', localName: 'Botswana', flag: '🇧🇼', region: 'africa',
  drivingSide: 'left', tld: '.bw', phoneCode: '+267', language: 'English, Tswana', currency: 'Pula (BWP)',
  camera: ["Gen 3 涵蓋範圍", "主要路線有覆蓋"],
  car: [
    "Gen 3：標準白色轎車",
    "靠左行駛",
    "三條中線（類似 South Africa）",
    "黃色邊線",
    "無特殊車輛辨識特徵"
  ],
  landscape: [
    "Kalahari 沙漠 — 乾燥草原",
    "Okavango Delta 三角洲",
    "人口非常稀少",
    "野生動物（大象、斑馬）"
  ],
  signs: ["英語為主", "也使用 Tswana 語"],
  plates: ["多種格式"],
  unique: [
    "黃色邊線 + 靠左行駛",
    "Kalahari 沙漠景觀",
    "比 South Africa 更荒涼/沙漠化",
    "南部非洲英語區"
  ],
  tips: [
    "黃色邊線 + 沙漠 + 靠左行駛 + 英語 = Botswana",
    "比 South Africa 較不發達，更多沙漠"
  ]
},

'namibia': {
  name: 'Namibia', localName: 'Namibia', flag: '🇳🇦', region: 'africa',
  drivingSide: 'left', tld: '.na', phoneCode: '+264', language: 'English', currency: 'Dollar (NAD)',
  camera: ["Gen 3 涵蓋範圍", "主要高速公路有覆蓋"],
  car: [
    "Gen 3/4：<strong>白色 pickup truck（皮卡車）</strong>",
    "類似 Oman 的白色 truck",
    "靠左行駛",
    "大量碎石路、筆直的沙漠長路"
  ],
  signs: ["英語", "部分地區可見德語（殖民遺產）", "也使用 Afrikaans 南非荷蘭語"],
  plates: ["Namibia 格式"],
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
    "德語烘焙坊/商店名稱 = 很可能是 Namibia"
  ]
},

'senegal': {
  name: 'Senegal', localName: 'Sénégal', flag: '🇸🇳', region: 'africa',
  drivingSide: 'right', tld: '.sn', phoneCode: '+221', language: 'French', currency: 'CFA Franc (XOF)',
  camera: ["Gen 3 涵蓋範圍", "主要城市和道路有覆蓋"],
  car: [
    "Gen 4：<strong>銀色/白色 pickup truck（皮卡車）</strong>（truck cab 可見）",
    "Gen 3：有 roof rack 的車（無特殊 rack 標記）",
    "Dakar 地區：引擎蓋/車頭更明顯可見",
    "有時可見紅色棍子標記（沿 N2/R32 路段）"
  ],
  landscape: [
    "平坦、半乾旱的 Sahel 地帶",
    "南部為熱帶（Casamance）",
    "猴麵包樹",
    "色彩繽紛的彩繪建築"
  ],
  signs: ["法語（前法國殖民地）"],
  plates: ["多種格式"],
  unique: [
    "非洲出現法式 bollard 護柱",
    "西非法語區",
    "猴麵包樹",
    "色彩繽紛的彩繪巴士和建築"
  ],
  tips: [
    "法語 + 非洲 + 法式 bollard = Senegal",
    "平坦地形的西非法語區"
  ]
},

'morocco': {
  name: 'Morocco', localName: 'المغرب', flag: '🇲🇦', region: 'africa',
  drivingSide: 'right', tld: '.ma', phoneCode: '+212', language: 'Arabic, French, Berber', currency: 'Dirham (MAD)',
  camera: ["Gen 3 涵蓋範圍", "主要道路覆蓋良好"],
  car: [
    "Gen 3：標準白色轎車",
    "法國風格的道路基礎設施",
    "無特殊車輛辨識特徵"
  ],
  signs: [
    "阿拉伯語 + 法語雙語標誌",
    "有時也可見 Berber 柏柏爾語（Tifinagh 字母）",
    "Tifinagh 看起來像幾何符號"
  ],
  plates: ["多種格式"],
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
    "紅色/赤陶色建築 = Marrakech, Morocco"
  ]
},

'tunisia': {
  name: 'Tunisia', localName: 'تونس', flag: '🇹🇳', region: 'africa',
  drivingSide: 'right', tld: '.tn', phoneCode: '+216', language: 'Arabic, French', currency: 'Dinar (TND)',
  camera: ["Gen 3 涵蓋範圍"],
  car: [
    "Gen 3：標準轎車",
    "<strong>有 follow car</strong>：北部（Hammamet 以北）= 淺綠色 Toyota；中南部 = 深綠色 Mazda",
    "Follow car 顏色可辨識南北位置"
  ],
  landscape: [
    "北部為地中海海岸",
    "南部為 Sahara 沙漠",
    "羅馬遺跡（Carthage、El Jem）",
    "白牆藍門/藍窗建築"
  ],
  signs: ["阿拉伯語 + 法語雙語"],
  plates: ["Tunisia 格式，含阿拉伯數字 + 拉丁數字"],
  unique: [
    "金屬線式電線桿",
    "較小的北非國家，阿拉伯語 + 法語",
    "可見羅馬遺跡",
    "白藍色建築（Sidi Bou Said 風格）"
  ],
  tips: [
    "金屬線電線桿 + 阿拉伯語/法語 = Tunisia",
    "比 Morocco 更小、更地中海風格"
  ]
},

'egypt': {
  name: 'Egypt', localName: 'مصر', flag: '🇪🇬', region: 'africa',
  drivingSide: 'right', tld: '.eg', phoneCode: '+20', language: 'Arabic', currency: 'Pound (EGP)',
  camera: ["Gen 3 涵蓋範圍", "尼羅河沿線和主要道路覆蓋良好"],
  car: [
    "Gen 3：標準轎車",
    "無特殊車輛辨識特徵"
  ],
  signs: ["阿拉伯語為主", "有時附加英語"],
  plates: ["Egypt 格式，含阿拉伯數字"],
  unique: [
    "阿拉伯語 + 尼羅河場景",
    "沙漠 + 尼羅河沿線密集人口",
    "金字塔區域辨識度高",
    "Cairo 密集混亂的交通"
  ],
  tips: [
    "阿拉伯語 + 沙漠 + 尼羅河 + 金字塔 = Egypt",
    "尼羅河狹窄綠色帶狀地帶沿線有非常密集的都市區"
  ]
},

'ethiopia': {
  name: 'Ethiopia', localName: 'ኢትዮጵያ', flag: '🇪🇹', region: 'africa',
  drivingSide: 'right', tld: '.et', phoneCode: '+251', language: 'Amharic', currency: 'Birr (ETB)',
  camera: ["覆蓋範圍有限", "緩慢擴展中"],
  car: [
    "Gen 3：標準轎車",
    "無特殊車輛辨識特徵"
  ],
  signs: [
    "<strong>Ge'ez（Ethiopic）字母</strong> — 獨特的音節書寫系統",
    "字符看起來像抽象幾何圖形",
    "標誌上也使用英語"
  ],
  plates: ["Ethiopia 格式"],
  unique: [
    "<strong>Ge'ez 字母</strong> — 僅 Ethiopia/Eritrea 使用",
    "Ethiopia 高原景觀",
    "獨特曆法（Ethiopia 曆比西曆慢 7-8 年）",
    "咖啡文化（咖啡發源地）"
  ],
  tips: [
    "Ge'ez 字母（獨特幾何字符）= Ethiopia 或 Eritrea",
    "高原地形 + Ge'ez 字母 = Ethiopia"
  ]
},

'madagascar': {
  name: 'Madagascar', localName: 'Madagasikara', flag: '🇲🇬', region: 'africa',
  drivingSide: 'right', tld: '.mg', phoneCode: '+261', language: 'Malagasy, French', currency: 'Ariary (MGA)',
  camera: ["覆蓋範圍有限"],
  car: [
    "標準轎車",
    "無特殊車輛辨識特徵"
  ],
  signs: ["Malagasy (Austronesian language!) + French"],
  plates: ["Malagasy format"],
  unique: [
    "Malagasy language — Austronesian (related to Indonesian/Malay, NOT African!)",
    "Red soil",
    "Baobab trees",
    "Island setting",
    "French as second language"
  ],
  tips: [
    "French + Austronesian-looking language + red soil = Madagascar",
    "Malagasy words look more Asian than African"
  ]
},

'reunion': {
  name: 'Réunion', localName: 'La Réunion', flag: '🇷🇪', region: 'africa',
  drivingSide: 'right', tld: '.re', phoneCode: '+262', language: 'French', currency: 'Euro (EUR)',
  camera: ["Gen 3 覆蓋"],
  car: [
    "<strong>後橫桿包覆黑色膠帶</strong>（Ghana = 前橫桿）",
    "側鏡可見",
    "Ghana 膠帶在<strong>前</strong>桿，Réunion 膠帶在<strong>後</strong>桿 — 重要區別",
    "法屬海外領土，法式道路基礎設施"
  ],
  roads: ["French-style road infrastructure", "Good quality — French territory"],
  landscape: [
    "火山 tropical island in Indian Ocean",
    "Piton de la Fournaise (active volcano)",
    "Lush tropical vegetation",
    "山地地形"
  ],
  signs: ["法語"],
  plates: ["French plates (FR format)"],
  unique: [
    "<strong>Black tape on REAR crossbar only</strong> (Ghana = FRONT crossbar)",
    "French territory in Indian Ocean — uses Euro",
    "火山 tropical island",
    "French road infrastructure in tropical setting"
  ],
  tips: [
    "Black tape on rear crossbar = Réunion (Ghana = front crossbar)",
    "French + tropical volcanic island = Réunion"
  ]
},

'uganda': {
  name: 'Uganda', localName: 'Uganda', flag: '🇺🇬', region: 'africa',
  drivingSide: 'left', tld: '.ug', phoneCode: '+256', language: 'English, Swahili', currency: 'Shilling (UGX)',
  camera: [
    "Gen 3 官方覆蓋 — 僅限 Kampala 市區和西部國家公園",
    "⚠️ <strong>大量非官方/第三方覆蓋 (shit cam)</strong> — 畫質極低、模糊、過曝/欠曝",
    "非官方覆蓋佔 Uganda 大部分影像 — 非 360° 全景、顏色失真",
    "國家公園覆蓋品質較好但範圍有限"
  ],
  car: [
    "官方覆蓋：白色方形 SUV（非轎車）",
    "車前方有<strong>黑色金屬防撞桿 (bull bar)</strong>",
    "方形後視鏡可見",
    "非官方覆蓋：各種車輛（機車、自行車等）"
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
  plates: ["Ugandan format"],
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
    "官方覆蓋畫質正常，白色 SUV + bull bar = Uganda 官方"
  ]
},

'tanzania': {
  name: 'Tanzania', localName: 'Tanzania', flag: '🇹🇿', region: 'africa',
  drivingSide: 'left', tld: '.tz', phoneCode: '+255', language: 'Swahili, English', currency: 'Shilling (TZS)',
  camera: ["Gen 3 覆蓋", "主要道路有覆蓋 routes"],
  car: [
    "Gen 3：標準轎車",
    "靠左行駛",
    "無特殊車輛辨識特徵"
  ],
  signs: ["Swahili (dominant) + English"],
  plates: ["Tanzanian format"],
  unique: [
    "Swahili dominant on signs (more than Kenya)",
    "Kilimanjaro visible",
    "Serengeti landscape",
    "More Swahili-dominant than Kenya"
  ],
  tips: [
    "Swahili-heavy signs + 大草原 (savanna) + 靠左行駛 = Tanzania",
    "Kenya has more English; Tanzania has more Swahili"
  ]
},

'rwanda': {
  name: 'Rwanda', localName: 'Rwanda', flag: '🇷🇼', region: 'africa',
  drivingSide: 'right', tld: '.rw', phoneCode: '+250', language: 'Kinyarwanda, French, English', currency: 'Franc (RWF)',
  camera: ["Gen 3 覆蓋", "尚可覆蓋"],
  car: [
    "Gen 3/4：<strong>pickup truck（皮卡車）</strong>",
    "車色多樣：白色、黑色、灰/棕色",
    "車頂有<strong>紅色煞車燈</strong>可見",
    "相機支架幾乎都可見"
  ],
  landscape: [
    "'Land of a Thousand Hills' — very hilly terrain",
    "翠綠茂密 vegetation",
    "Terraced hillsides",
    "Clean and organized for Africa"
  ],
  signs: ["Kinyarwanda + French + English (trilingual)"],
  plates: ["Rwandan format"],
  unique: [
    "Yellow center + white side lines (like Americas convention)",
    "Very hilly, terraced landscape",
    "Clean and organized infrastructure (unusual for Africa)",
    "三語標誌"
  ],
  tips: [
    "Very green, hilly, clean + yellow road lines + trilingual = Rwanda",
    "Surprisingly 維護良好的 for African country"
  ]
},

// ╔══════════════════════════════════════════╗
// ║           OCEANIA                        ║
// ╚══════════════════════════════════════════╝

'australia': {
  name: 'Australia', localName: 'Australia', flag: '🇦🇺', region: 'oceania',
  drivingSide: 'left', tld: '.au', phoneCode: '+61', language: 'English', currency: 'Dollar (AUD)',
  camera: [
    "Gen 1 (early), Gen 2, Gen 3, Gen 4 — all present",
    "Most extensively covered country in Southern Hemisphere"
  ],
  car: [
    "Gen 1/3：有天線",
    "Gen 4：<strong>無特殊辨識特徵</strong>（無天線）",
    "Gen 2：標準白色轎車",
    "靠左行駛",
    "Gen 4 車輛缺乏顯著特徵，難以單靠 car meta 辨識"
  ],
  landscape: [
    "Vast outback — desert/semi-arid",
    "Tropical north (Queensland)",
    "Temperate southeast (Melbourne, Sydney)",
    "Eucalyptus trees everywhere",
    "Unique wildlife"
  ],
  signs: [
    "English",
    "Speed in km/h",
    "高速公路使用綠色標誌"
  ],
  plates: [
    "Vary by state — many different designs",
    "NSW: yellow, VIC: white/blue, QLD: maroon"
  ],
  unique: [
    "<strong>White bollards with thin red reflectors on LEFT</strong>",
    "Kangaroo/wildlife warning signs",
    "Eucalyptus forests",
    "Vast desert outback",
    "靠左行駛 + English + km/h",
    "Unique wildlife crossing signs (kangaroo, wombat, etc.)"
  ],
  tips: [
    "English + 靠左行駛 + km/h + huge empty landscape = Australia",
    "Thin red reflector bollards on left side = Australia",
    "Kangaroo signs = Australia",
    "Much larger and drier than New Zealand"
  ]
},

'new-zealand': {
  name: 'New Zealand', localName: 'Aotearoa', flag: '🇳🇿', region: 'oceania',
  drivingSide: 'left', tld: '.nz', phoneCode: '+64', language: 'English, Māori', currency: 'Dollar (NZD)',
  camera: ["Gen 1 limited, Gen 2, Gen 3, Gen 4"],
  car: [
    "Gen 4：<strong>藍色轎車</strong>",
    "Gen 1-3：白色轎車",
    "<strong>三脊天線（stubby + three ridges）</strong> — 與 USA, Hawaii, Cambodia 共用",
    "靠左行駛"
  ],
  roads: [
    "靠左行駛",
    "Bollards: Similar to Australia but <strong>wider red band</strong>",
    "白色中線",
    "Many winding 山路"
  ],
  landscape: [
    "North Island: green rolling hills, volcanoes, geothermal areas",
    "South Island: Southern Alps, fjords, glaciers",
    "Very green and lush",
    "到處都是羊",
    "Much more mountainous than Australia"
  ],
  signs: [
    "English + <strong>Māori language</strong> — 雙語標誌",
    "Māori place names (Whangarei, Tauranga, Whakatane)",
    "Māori uses macrons: ā, ē, ī, ō, ū"
  ],
  plates: ["Various NZ formats"],
  unique: [
    "Wider red band bollards (vs Australia's thin)",
    "Māori 雙語標誌",
    "Dramatic mountainous landscape (vs Australia's flat outback)",
    "Very green and lush (vs Australia's dry)",
    "Much smaller than Australia",
    "Three-ridge antenna on Gen 4 car"
  ],
  tips: [
    "English + Māori 雙語標誌 = New Zealand",
    "Green mountains + 靠左行駛 + English = New Zealand (not Australia)",
    "Australia is dry/flat, New Zealand is green/mountainous"
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
      "Almost exclusively trekker/volunteer coverage — NOT official Google cars",
      "Trekker coverage is immediately obvious: lower camera height, often shaky",
      "覆蓋非常有限 overall — mainly in cities like Minsk and along main roads",
      "Low quality and patchy imagery compared to neighboring countries",
      "Some Yandex Maps coverage exists but not in GeoGuessr",
      "Coverage may appear in unexpected locations from individual contributors"
    ],
    car: [
      '非標準 Google 車 — trekker 或車載設備',
      '相機高度明顯低於標準 Street View',
      '無天線、snorkel 或標準 Google 車特徵'
    ],
    roads: [
      "Roads range from 維護良好的 highways near Minsk to poor rural roads",
      "White road markings on major highways",
      "Soviet-era road design with wide multi-lane boulevards in cities",
      "M-road and P-road numbering system (M for main, P for regional)",
      "Road surface quality drops significantly outside major cities",
      "Many straight, flat roads through agricultural areas"
    ],
    landscape: [
      "平坦的 terrain — one of the flattest countries in Europe",
      "Dense forests (about 40% of the country is forested)",
      "蘇聯時期公寓大樓 dominate urban areas",
      "Agricultural fields interspersed with birch and pine forests",
      "Clean, orderly Soviet-planned city layouts",
      "Memorial sites from WWII scattered throughout",
      "Few distinguishing natural landmarks"
    ],
    signs: [
      "Dual language signs: Belarusian (Cyrillic) and sometimes Russian",
      "Belarusian Cyrillic uses unique letters: Ў (short U), І (Ukrainian-style I)",
      "Road signs follow standard European/Soviet format",
      "City entrance signs have Cyrillic names",
      "距離標記以公里計 along main roads",
      "Green directional signs on main highways"
    ],
    plates: [
      "No EU blue stripe — Belarus is not an EU member",
      "白色車牌 with black text and a small national flag emblem",
      "Regional number at left indicates the oblast (region)",
      "Distinctive from Russian plates by the flag/emblem placement",
      "Plates are wider format similar to Russian style"
    ],
    unique: [
      "Trekker/volunteer coverage is the biggest giveaway — 立即辨識zable",
      "Lower camera height and shaky imagery distinguish it from neighbors",
      "Belarusian Ў letter is unique to Belarus worldwide",
      "Soviet-style urban planning is extremely prevalent",
      "Limited overall coverage makes it relatively rare in world games"
    ],
    tips: [
      "If coverage looks like trekker (shaky, low, inconsistent) + Cyrillic text = think Belarus",
      "The letter Ў is found only in Belarusian — instant confirmation",
      "Don't confuse with Russia: Belarus has much less coverage and different plate style",
      "平坦的 terrain + forests + Soviet architecture + trekker coverage = Belarus",
      "Very rare in competitive play due to limited coverage"
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
      'Only Trekker coverage — no Google Street View car',
      'Gen 3 Trekker coverage at historical monuments and temples',
      'Most coverage is in Lahore and religious/historical sites',
      'Only about two dozen locations with Street View coverage',
      'When panning down, you see the outline of a person carrying the camera',
      'Coverage extremely limited — Pakistan is very rare in GeoGuessr'
    ],
    car: [
      '非標準車輛 — 全為 Trekker 涵蓋（人背負相機）',
      '向下看可見人的輪廓',
      '無 follow car meta'
    ],
    roads: [
      'Coverage mostly at historical monuments, not roads',
      'When road coverage exists, roads have concrete or asphalt surfaces',
      'Metal or concrete utility poles visible in some areas',
      '綠色高速公路標誌配白色文字 on major roads',
      'Motorway signs similar to UK style',
      'Road infrastructure varies dramatically between cities and rural areas',
      'Speed breakers common in urban areas'
    ],
    landscape: [
      'Diverse — from Karakoram mountains to Punjab plains to Balochistan desert',
      'Lahore: flat terrain with Mughal-era architecture',
      'Northern areas: dramatic mountain scenery (K2, Nanga Parbat)',
      'Sindh/Punjab: flat agricultural plains',
      'Balochistan: arid desert terrain',
      'Mosques and minarets visible in most covered areas',
      'Dense urban areas in Lahore and Islamabad'
    ],
    signs: [
      'Urdu script (اردو) — written right-to-left, similar to Arabic but with additional characters',
      'Urdu has dots above and below letters (nastaliq style calligraphy)',
      'Signs bilingual: Urdu + English',
      'English is widely used on commercial signage',
      'Arabic-looking script but with distinct Urdu-specific characters',
      'Highway signs in green with white text and English translations'
    ],
    plates: [
      'White plates with black lettering and black border',
      'Green plates for government/military vehicles',
      'Province abbreviations on plates (PB = Punjab, SD = Sindh, etc.)',
      'Motorcycle plates are common',
      'Format varies by province',
      'Plates are often bilingual (Urdu + English numerals)'
    ],
    unique: [
      'Trekker coverage at historical Mughal/Sikh temples and monuments is characteristic',
      'Lahore\'s Badshahi Mosque and Shalimar Gardens coverage',
      'Colourful jingle trucks (decorated heavy trucks)',
      'Urdu script (right-to-left) + left-hand driving is a rare combination',
      'Limited to about two dozen locations — very rare in GeoGuessr',
      'Mix of English and Urdu on commercial signs'
    ],
    tips: [
      'Pakistan coverage is extremely rare — almost always at historical monuments in Lahore',
      'Trekker coverage (person carrying camera) + Urdu script = Pakistan',
      'Urdu looks like Arabic but Pakistan drives on the LEFT — Middle Eastern countries drive on the right',
      'Pakistan vs India: Urdu (right-to-left) vs Hindi (left-to-right Devanagari)',
      'If you see Mughal architecture + trekker coverage = likely Pakistan',
      'Don\'t confuse with India — Pakistan has very limited coverage compared to India\'s extensive mapping'
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
      '有限的 Gen 3 和 Gen 4 覆蓋',
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
      '因覆蓋有限，在隨機 GeoGuessr 中非常罕見'
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
      'Gen 3 覆蓋主要路線',
      '覆蓋主要限於大城市和國道',
      'Vientiane 覆蓋最佳',
      '鄉村地區覆蓋非常有限或完全沒有',
      '部分旅遊景點有 Trekker 覆蓋（Luang Prabang）',
      '畫質尚可但覆蓋缺口明顯'
    ],
    car: [
      '可見 roof rack — 除了首都 Vientiane 以外的所有地方',
      'Gen 3：白色轎車',
      'Roof rack 是辨識 Laos 的重要線索',
      '涵蓋僅限 4 個城市'
    ],
    roads: [
      '主要路線上有白色道路標線',
      '黑白條紋 bollard',
      '水泥電線桿',
      '藍底標誌標示聚落和目的地',
      '城市中有藍色街名牌',
      '道路從不錯的鋪面公路到崎嶇土路都有',
      '道路基礎設施不如 Thailand 或 Vietnam 發達',
      '中國建造的公路越來越多（一帶一路項目）'
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
      'Google 車上的 roof rack（Vientiane 以外）是快速 meta 辨識線索'
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
      '覆蓋非常有限 — 主要為 Trekker 和第三方覆蓋',
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
      '道路從不錯的公路到極其崎嶇的鄉村小路都有',
      '道路標線和基礎設施有限',
      '電線桿通常為木頭或竹子',
      '路標為緬文加部分英文',
      '基礎設施普遍不如鄰國發達',
      '主要路線為混凝土和柏油路面；其他地方為土路',
      '減速帶塗成斑馬條紋'
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
      '右駕車行駛在靠右的道路上是 Myanmar 的獨特怪癖'
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
      '覆蓋非常有限 — 主要為 Trekker 步行覆蓋和非官方來源',
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
      'Dili 以外常見土路和碎石路',
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
      '如果看到葡萄牙文搭配熱帶山地（不像 Macau 那樣都市化）= Timor-Leste'
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
      '不在 Google 街景上 — 使用百度地圖和騰訊地圖',
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
      '相機畫質通常低於 Google — 次要線索'
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
      '僅有 Gen 2 覆蓋 — 畫質較低、影像較舊',
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
      '看到賭場 + 葡文 + 中文字 = Macau'
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
      'Gen 3 覆蓋主要公路',
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
      '與 Russia 共用電話區碼 +7 — 需看車牌差異來區分'
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
      'Gen 3 覆蓋主要道路',
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
      '藍色方向指示路標',
      '道路品質不一，從不錯的公路到崎嶇山路',
      '道路沿線可見上漆的電線桿支撐物',
      '蘇聯式道路基礎設施',
      '有髮夾彎的山口',
      '部分道路沿山間河谷行進',
      '許多路線道路標線有限'
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
      '與蒙古語共用 Ң 和 Ө 字符 — 查看車牌來區分'
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
      '有限的 Gen 3 覆蓋',
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
      '在 GeoGuessr 中相對罕見 — 主要是著名歷史景點的 trekker 覆蓋'
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
      'Gen 3 覆蓋城市和主要道路',
      '覆蓋集中在 Beirut 和沿海地區',
      '山區有部分覆蓋（黎巴嫩山、雪松區）',
      '歷史景點有 Trekker 覆蓋（Baalbek、Byblos）',
      '偏遠/邊境地區有覆蓋缺口',
      '有覆蓋的地方畫質尚可'
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
      '小國，山脈貫穿中部',
      '雪松 — Lebanon 的國家象徵（黎巴嫩雪松）',
      '地中海海岸線有沙灘和岩灘',
      '冬季可見雪山（有滑雪場！）',
      'Beirut：密集都市區，現代建築與戰爭損壞建築混合',
      '羅馬遺跡（Baalbek：巨大的寺廟群）',
      '貝卡谷地：山脈之間的農業葡萄酒產區',
      '清真寺和教堂混合（宗教多元的國家）'
    ],
    signs: [
      '阿拉伯文 + 法語或英語作為第二語言',
      '法國影響使 Lebanon 有別於其他阿拉伯國家',
      '標誌可能為三語：阿拉伯語 + 法語 + 英語',
      '部分地區有法式路標',
      '街名有時為法語（Rue de...）',
      '政黨標誌和海報常見',
      '部分地區有真主黨或其他政黨旗幟/橫幅'
    ],
    plates: [
      '紅色車牌白字為私人車輛 — 很有辨識度',
      '格式：1 字母 + 最多 6 位數字',
      '綠色車牌為公共運輸/計程車',
      '藍色車牌為外交車輛',
      '紅色私人車牌在中東不常見 — 強力辨識特徵',
      '車牌上無地區代碼（小國）'
    ],
    unique: [
      '私人車輛紅色車牌 — 在中東很罕見',
      '阿拉伯語 + 法國影響 = Lebanon（其他阿拉伯國家用英語作為第二語言）',
      '山區可見雪松（國家象徵）',
      '清真寺和教堂混合 — 中東獨特的宗教多元性',
      '緊湊的多山國家 — 山脈靠近海岸',
      '可見法語街名和法國文化影響',
      'Beirut 部分建築上仍可見戰爭損害',
      '雪山和海灘相鄰（山脈和海岸非常接近）'
    ],
    tips: [
      '私人車輛紅色車牌 = 強烈 Lebanon 指標（在中東罕見）',
      '法語作為第二語言（標誌上）= Lebanon（其他黎凡特國家不使用）',
      'Lebanon vs Syria：Lebanon 覆蓋更好且有更多法國影響',
      'Lebanon vs Jordan：紅色車牌（LB）vs 白色車牌（JO）；法國影響（LB）',
      '山脈非常靠近地中海海岸 = Lebanon（緊湊的國家）',
      '清真寺和教堂混合 = 宗教多元 = 可能是 Lebanon',
      '山區的雪松是 Lebanon 的標誌',
      '如果看到阿拉伯文 + 法文 + 地中海海岸線 + 山脈 = Lebanon'
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
      'Gen 3 覆蓋，使用白色卡車拍攝，模糊程度不一',
      '卡車前方可見天線',
      '後方有緊密排列的支撐桿',
      '覆蓋沿主要公路和 Muscat',
      'Salalah 地區有獨立覆蓋且景觀獨特',
      '內陸沙漠地區有覆蓋缺口'
    ],
    car: [
      '白色 pickup truck（bars 在後方支撐相機）',
      '天線在 truck 中間位置',
      '與 Qatar 白色 truck 類似',
      '不同於 UAE 的白色轎車（Oman 用 TRUCK）',
      '沙漠公路 + 白色 truck + 天線 = Oman 或 Qatar'
    ],
    roads: [
      '主要地區公路維護良好',
      'Oman 很少有 bollard — 缺少 bollard 是線索',
      '可見部分公里標記和 T 形桿',
      '路標為阿拉伯語 + 英語雙語',
      '沙漠道路上有沙子侵入柏油路面',
      '壯觀山景的山路（Jebel Shams）',
      '十字路口常見圓環',
      '主要路線道路品質優良'
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
      '白色卡車配天線和 bars（不像 UAE 用轎車）',
      'bollard 很罕見 — 其缺失有助於辨識 Oman',
      'Jebel Shams「大峽谷」是獨特景觀',
      'Salalah 的綠色季風景觀在阿拉伯半島獨一無二',
      '比 UAE 更多山且更傳統',
      'Dhofar 地區的乳香樹',
      '壯觀的海岸懸崖和碧綠海水'
    ],
    tips: [
      '海灣地區黃色車牌 = Oman（UAE = 白色、Qatar = 白色/栗色）',
      'Oman vs UAE：卡車覆蓋（OM）vs 轎車覆蓋（UAE）；黃色車牌（OM）vs 白色車牌（UAE）',
      'Oman vs Qatar：黃色車牌（OM）vs 白色/栗色車牌（QA）；山地（OM）vs 平坦（QA）',
      'bollard 罕見 — 如果看到中東 + 無 bollard = 可能是 Oman',
      'Salalah 覆蓋綠意盎然（季風季節）— 在阿拉伯半島很不尋常',
      '白色卡車配天線 = Oman（不同於 UAE 的白色轎車）',
      '比 UAE 更傳統/鄉村感 — 更少玻璃摩天大樓',
      '山脈 + 沙漠 + 海岸近距離相鄰 = Oman'
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
      'Gen 3 覆蓋可進入的地區',
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
      '如果以阿拉伯語為主 + 白色車牌 + 丘陵地形 + 橄欖樹 = Palestine'
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
      'Google 街景覆蓋非常有限',
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
      'ALTO 停車標誌',
      '黃色中線搭配白色路肩線（有標線時）',
      '道路品質不一 — 主要公路鋪面，鄉村道路常未鋪面',
      '泛美公路（CA-1）貫穿全國',
      '中美洲公路標記：區域路線用 "CA" 前綴',
      '城鎮和學校附近減速帶常見'
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
      '城鎮中教堂和宗教意象突出'
    ],
    tips: [
      '官方覆蓋非常有限使 El Salvador 在 GeoGuessr 中罕見',
      '如果在中美洲看到有限、低品質覆蓋且人口稠密的地區，考慮 El Salvador',
      '使用美元，可能出現在價格標誌上 — 在中美洲不尋常',
      '尋找 CA 公路標記來確認中美洲位置',
      'ALTO 停車標誌 + 西班牙語 + 火山地形 + 人口稠密 = 可能是 El Salvador',
      '與 Guatemala 區別：Guatemala 有獨特的相機車配 bars 和側鏡'
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
      '官方 Google 街景覆蓋非常有限',
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
      'ALTO 停車標誌',
      '黃色中線搭配白色路肩標線（有標線時）',
      '主要公路以外道路狀況普遍差',
      '泛美公路連接鄰國',
      '中美洲區域公路的 CA 路線標記',
      '鄉村山區常見未鋪面道路',
      '城鎮和學校附近有減速帶'
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
      '商店和建築上的 Tigo 電信品牌'
    ],
    tips: [
      '覆蓋非常有限使 Honduras 在 GeoGuessr 中罕見',
      '如果在中美洲看到 ALTO 標誌、道路品質差、松林覆蓋的山脈且無獨特 car meta，考慮 Honduras',
      '松林有助於與 Costa Rica 和 Panama 更熱帶的雨林區分',
      '加勒比海岸覆蓋可能看起來類似 Belize — 檢查是否有西班牙語標誌',
      '易混淆國家：Guatemala（檢查相機 bars/側鏡）、El Salvador（更小、更擁擠）、Nicaragua（類似覆蓋問題）'
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
      '官方 Google 街景覆蓋非常有限',
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
      'ALTO 停車標誌',
      '黃色中線搭配白色路肩線（有標線時）',
      '道路狀況常差 — 主要路線以外許多未鋪面道路',
      '泛美公路（NIC-1/CA-1）是主要幹道',
      '城鎮附近有減速帶和道路標記',
      '二級道路上坑洞常見'
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
      '無特殊車輛辨識特徵 — 靠景觀和標誌線索'
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
      '無官方 Google 街景覆蓋 — Cuba 沒有 Google 車',
      '覆蓋來自 Mapillary 和其他第三方來源',
      '主要覆蓋 Havana（尤其是舊 Havana）和部分旅遊路線',
      '影像品質不一 greatly — often lower quality than standard Google coverage',
      '覆蓋為眾包：12 人團隊使用租賃汽車、機車和自行車繪製了 80-90% 的舊 Havana',
      '非正式、非標準化影像使 Cuba 非常有辨識度'
    ],
    car: [
      '無 Google car meta — 全為第三方涵蓋',
      '涵蓋來自各種車型：汽車、機車、自行車'
    ],
    roads: [
      'PARE 停車標誌（部分地區使用，但許多標誌缺失或損壞）',
      '道路基礎設施普遍差且破碎',
      '許多道路是 20 世紀中期的混凝土或鵝卵石路面',
      '有標線處為黃色中線和白色外線，但標線常褪色或缺失',
      'Havana 有殖民建築的寬闊大道',
      '鄉村道路常未鋪面',
      '與其他國家相比，現代公路標誌極少'
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
      '第三方覆蓋品質和不尋常的拍攝角度本身就是線索'
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
      'Gen 3 覆蓋為主要可用類型',
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
      '標誌上的英語（非西班牙語）排除 Dominican Republic、Cuba、Puerto Rico'
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
      'Gen 3 覆蓋為主',
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
      '如果在加勒比海看到印度教和伊斯蘭宗教場所與英語標誌並存，就是 T&T'
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
      '覆蓋比 Argentina 或 Brazil 有限',
      '有覆蓋的地方有 Gen 3 和 Gen 4',
      '覆蓋集中在 Asuncion 和主要公路',
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
      'PARE 停車標誌',
      '道路品質不一：主要公路鋪面，許多鄉村道路未鋪面（紅土）',
      'Ruta 1, Ruta 2, Ruta 3 — major national routes',
      '泛查科公路：穿越查科地區的長直道路',
      '城鎮中減速帶常見',
      '許多道路旁可見紅橙色土壤'
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
      '與 Brazil 區別：Brazil 用葡萄牙語；Paraguay 用西班牙語/瓜拉尼語'
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
      '官方 Google 街景覆蓋非常有限',
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
      'PARE 停車標誌',
      'Caracas 附近的高速公路（Autopistas）狀況較好',
      '許多道路標線褪色或缺失',
      '二級道路上坑洞常見',
      '城鎮附近有減速帶'
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
      '與 Ecuador 區別：Ecuador 有雙護欄；Venezuela 有有限覆蓋和政治壁畫'
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
      '全國 Gen 3 覆蓋',
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
      '道路標線類似 South Africa（黃色中線、白色邊線）',
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
    language: 'siSwati, English',
    currency: 'Lilangeni (SZL)',
    camera: [
      'Gen 3 覆蓋',
      '覆蓋有限，集中在主要道路和城市',
      '覆蓋主要在 Mbabane 和 Ezulwini Valley 走廊',
      '無 Gen 2 或 Gen 4 覆蓋',
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
      '黃色中線、白色邊線（類似 South Africa）',
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
      '全島 Gen 3 覆蓋',
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
      '官方 Google 街景覆蓋有限',
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
      '覆蓋有限，主要沿主要道路',
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
      '有限但持續增長的 Google 街景覆蓋',
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
      'Google 街景覆蓋有限',
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
      '覆蓋非常有限且稀疏',
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
      '覆蓋非常有限',
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
      'Limited coverage, primarily in Douala and Yaounde areas',
      'Contributed and unofficial coverage in various areas',
      'Some trekker coverage',
      '覆蓋品質差異顯著',
      'Not heavily covered compared to West African neighbors like Ghana/Nigeria',
      'Gen 3 where official coverage exists',
    ],
    car: [
      '標準轎車',
      '無特殊車輛辨識特徵'
    ],
    roads: [
      'N-numbered national routes and provincial roads',
      '靠右行駛',
      '道路品質不一: paved in cities, deteriorated in rural areas',
      'Lush green vegetation + poor road quality combination common',
      '城鎮中有減速帶',
      'Motorcycle taxis (okada/moto) very common',
      'Dual-carriageway sections near Douala and Yaounde',
    ],
    landscape: [
      'Extremely diverse terrain: "Africa in miniature"',
      'Mount Cameroon (4,095m): West Africa\'s highest peak',
      'Dense tropical rainforest in the south',
      'Dry savanna and Sahel in the far north',
      'Grasslands and volcanic highlands in the west (Bamenda Highlands)',
      'Coastal mangroves near Douala',
      'Waza National Park in the far north: dry savanna',
      'Green, lush vegetation in the south; drier in the north',
    ],
    signs: [
      'BILINGUAL country: French (70%) and English (30%)',
      'Northwest and Southwest regions are English-speaking (Anglophone Cameroon)',
      'Other 8 regions are French-speaking (Francophone Cameroon)',
      'Bilingual signs in some areas: "Arrêt / Stop"',
      'Camfranglais (French-English pidgin) visible in mixed urban areas',
      'Orange and MTN telecom branding',
      'French dominates in Yaounde and Douala',
    ],
    plates: [
      '各種車牌格式 with regional codes',
      'CE = Centre, LT = Littoral, etc.',
      '車牌常狀況不佳',
      '政府車牌有不同格式',
      '計程車車牌為不同顏色',
    ],
    unique: [
      'French + English bilingual country in Central/West Africa = Cameroon',
      'Called "Africa in miniature" due to terrain diversity from desert to rainforest',
      'Only country in Central Africa with both French and English as official languages',
      'Mount Cameroon visible from coastal areas',
      'If you see French AND English text in tropical West/Central Africa = likely Cameroon',
      'Motorcycle taxis very common in cities',
      'Green tropical vegetation + French/English bilingualism',
    ],
    tips: [
      'French + English bilingual signs in Central/West Africa = Cameroon',
      'Northwest/Southwest regions have English signs -- rest is French',
      'Lush green vegetation + poor roads + French/English text = consider Cameroon',
      'Mount Cameroon near the coast is the highest point in West Africa',
      'Yaounde and Douala are the most likely city spawns',
      'Rare spawn -- only guess if bilingual clues support it',
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
      'Limited coverage, primarily in Abidjan and along major highways',
      'Contributed and unofficial coverage sources',
      'Coverage expanding but still sparse',
      'Gen 3 where official coverage exists',
      'Abidjan has the densest coverage',
      'Some trekker coverage at notable sites',
    ],
    car: [
      '無標準 Google 街景車 meta',
      '各種社群貢獻車輛',
      '無一致的 snorkel、膠帶或跟拍車',
      'Coverage from multiple sources',
    ],
    roads: [
      'A-numbered autoroutes and national routes',
      '靠右行駛',
      'French road naming conventions',
      'Modern highway between Abidjan and Yamoussoukro',
      '道路品質不一 significantly by region',
      '鄉村地區有紅色紅土路',
      '圓環常見 in urban areas',
    ],
    landscape: [
      'Tropical forest in the south transitioning to savanna in the north',
      'Cocoa and coffee plantations widespread (world\'s largest cocoa producer)',
      'Abidjan: modern city skyline (Plateau district called "Manhattan of the Tropics")',
      'Yamoussoukro: Basilica of Our Lady of Peace (world\'s largest church) is distinctive',
      'Lagoon system along the coast',
      'Flat to gently undulating terrain',
      'Oil palm plantations',
      'Traditional banco (mud) huts in rural north',
    ],
    signs: [
      '法語 on all official signs',
      'No English on signs (unlike neighboring Ghana)',
      'French text: "Arret" (stop), "Centre Ville", "Route"',
      'Orange (telecom), MTN, and Moov branding',
      'CFA Franc prices on commercial signs',
      'Political advertising common',
    ],
    plates: [
      '各種車牌格式',
      'CI marking possible',
      'Plate formats have changed over the years',
      '計程車車牌可能為不同顏色 (orange)',
      'Limited visibility in available coverage',
    ],
    unique: [
      'French-speaking + West Africa + right-hand driving + tropical vegetation = narrow to Ivory Coast',
      'Basilica of Our Lady of Peace in Yamoussoukro is globally distinctive (world\'s largest church)',
      'Abidjan Plateau district has modern high-rises unusual for West Africa',
      'World\'s largest cocoa producer -- cocoa plantations may be visible',
      'Flag similar to Ireland (orange-white-green) but reversed -- Irish flag is green-white-orange',
      'Distinguished from Senegal: Ivory Coast is more tropical/forested, Senegal is more Sahelian/dry',
      'CFA Franc (same currency as Senegal)',
    ],
    tips: [
      'French + tropical forest + West Africa = consider Ivory Coast or Senegal',
      'Ivory Coast is greener and more forested than Senegal (which is drier/more Sahelian)',
      'Basilica of Our Lady of Peace (Yamoussoukro) = instant Ivory Coast',
      'Abidjan is the most likely spawn -- modern skyline is distinctive for West Africa',
      'No blue plates (that is Senegal), no tape (that is Ghana)',
      'Rare spawn overall -- Senegal and Ghana are much more common',
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
      '覆蓋非常有限',
      '主要為社群貢獻/非官方覆蓋',
      'Some coverage in Ouagadougou (capital)',
      'Trekker coverage at notable sites',
      'One of the least-covered West African countries',
      'Coverage quality varies',
    ],
    car: [
      '無標準 Google 街景車 meta',
      '各種來源的社群貢獻覆蓋',
      'No consistent identifiable features',
      'Trekker where available',
    ],
    roads: [
      'RN 編號國道（Route Nationale）',
      '靠右行駛',
      'Road quality generally poor outside Ouagadougou',
      'Many roads unpaved red laterite',
      'Motorcycle and bicycle traffic very common',
      'French road signage where signs exist',
      '城鎮中有減速帶',
    ],
    landscape: [
      'Flat, semi-arid Sahelian terrain -- dry savanna',
      'Similar climate to northern Senegal and Mali',
      'Scattered trees on flat terrain',
      'Red/orange laterite soil prevalent',
      'Very dry in the north (approaching Sahara)',
      'Greener in the south (Guinea savanna zone)',
      'Shea trees and baobabs scattered through landscape',
      'Dry, dusty atmosphere for much of the year',
    ],
    signs: [
      '官方標誌上使用法語',
      'Moore (Mossi language) visible locally',
      '鄉村地區標誌有限',
      'Orange and Airtel telecom branding',
      'CFA Franc pricing visible',
      '法語文字為標準',
    ],
    plates: [
      '各種車牌格式',
      'BF marking possible',
      '因覆蓋稀疏，能見度有限',
      'Government and diplomatic plates differ',
    ],
    unique: [
      'French + flat Sahelian terrain + West Africa = could be Burkina Faso, Mali, or Niger',
      'Ouagadougou is the most recognizable city (distinctive name)',
      'Motorcycle traffic density very high',
      'Very rare spawn -- do not guess unless strong evidence',
      'Red laterite soil + dry flat terrain + 法語',
      'Similar landscape to Mali -- very difficult to distinguish',
      'Shea tree products visible at markets',
    ],
    tips: [
      'Extremely rare spawn -- only guess with strong evidence',
      'French + flat Sahelian landscape + West Africa = could be Burkina, Mali, or Niger',
      'Ouagadougou is the only likely city spawn',
      'More motorcycle traffic than car traffic in most areas',
      'Distinguished from Senegal by being more inland/drier',
      'CFA Franc countries all look somewhat similar -- look for specific text/branding clues',
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
      '覆蓋非常有限',
      '主要為社群貢獻/非官方覆蓋',
      'Some coverage in Bamako (capital)',
      'Timbuktu may have trekker coverage',
      'Very sparse coverage across most of the country',
      '覆蓋品質普遍低',
    ],
    car: [
      '標準轎車',
      '無特殊車輛辨識特徵'
    ],
    roads: [
      'RN-numbered national routes',
      '靠右行駛',
      'Road quality poor outside Bamako',
      'Many roads are unpaved tracks, especially in the Saharan north',
      'Niger River provides alternate transport',
      'Motorcycle and donkey traffic common',
      'French road terminology',
    ],
    landscape: [
      'Sahara Desert dominates the northern two-thirds of the country',
      'Sahel zone in the center: dry grassland',
      'Niger River valley: greener with agriculture',
      'Southern Mali: Guinea savanna with more vegetation',
      'Flat terrain throughout',
      'Sand dunes in the north',
      'Mud-brick architecture distinctive: Djenne Great Mosque (iconic)',
      'Dogon Country: dramatic sandstone cliffs and escarpments',
    ],
    signs: [
      '官方標誌上使用法語',
      'Bambara and other local languages on commercial signs',
      'Limited signage throughout most of the country',
      'Orange and Malitel telecom branding',
      '法語文字為標準 where signs exist',
      'Islamic/Arabic text may appear alongside French',
    ],
    plates: [
      '各種車牌格式',
      'RMM (Republique du Mali) marking possible',
      '因覆蓋稀疏，能見度有限',
      'Government plates differ',
    ],
    unique: [
      'Djenne Great Mosque (mud-brick, iconic shape) = Mali instantly recognizable',
      'Timbuktu trekker coverage = Mali',
      'French + Sahara/Sahel + West Africa = could be Mali, Burkina, or Niger',
      'Dogon cliff escarpment landscape is unique',
      'Mud-brick Sudano-Sahelian architecture (flat-roofed, timber-spiked walls)',
      'Niger River flowing through the country',
      'Very rare spawn overall',
    ],
    tips: [
      'Djenne Great Mosque = instant Mali identification',
      'Timbuktu trekker spawn = Mali',
      'French + extremely dry/desert landscape in West Africa = consider Mali',
      'Mud-brick Sudano-Sahelian architecture helps distinguish from neighboring countries',
      'Bamako is the only likely city spawn',
      'Very rare -- only guess with strong evidence',
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
      '覆蓋非常有限',
      'Contributed/unofficial coverage primarily',
      'Some coverage in Conakry (capital)',
      'Sparse coverage along main roads',
      'One of the less-covered West African countries',
      'Quality varies by source',
    ],
    car: [
      '標準轎車',
      '無特殊車輛辨識特徵'
    ],
    roads: [
      'RN 編號國道（Route Nationale）',
      '靠右行駛',
      'Road quality generally poor, especially outside Conakry',
      'Red laterite roads very common in rural areas',
      'Motorcycle traffic (Jakarta motorcycles) very common',
      'French road signage where present',
      '城鎮中有減速帶',
    ],
    landscape: [
      'Fouta Djallon highlands: dramatic sandstone plateaus and valleys (source of many West African rivers)',
      'Coastal lowlands around Conakry: mangroves and rice paddies',
      'Tropical rainforest in southeast (Forest Guinea)',
      'Savanna in northeast (Upper Guinea)',
      'Red laterite soil very prominent',
      'Bauxite mining areas (Guinea has largest bauxite reserves globally)',
      'Niger River headwaters in the highlands',
      'Green, lush vegetation especially in the south',
    ],
    signs: [
      '法語 on all signs',
      'Local languages (Fula/Pular, Malinke, Susu) on commercial signs',
      '鄉村地區標誌有限',
      'Orange and MTN telecom branding',
      'French text: "Arrêt", "Route Nationale"',
      'GNF (Guinean Franc) pricing visible',
    ],
    plates: [
      '各種車牌格式',
      'RC (Republique de Guinee) marking possible',
      'Limited visibility',
      'Government plates differ',
    ],
    unique: [
      'French + tropical West Africa with red laterite highlands = could be Guinea',
      'Fouta Djallon highland landscape is distinctive (sandstone plateaus)',
      'Bauxite mining areas with red earth and industrial equipment',
      'Very rare spawn -- do not guess unless strong evidence',
      'Conakry (capital on a peninsula) is the most likely spawn',
      'Distinguished from Senegal by being more hilly/forested',
      'Red laterite soil extremely prominent',
    ],
    tips: [
      'French + hilly/highland tropical landscape in West Africa = consider Guinea',
      'Fouta Djallon plateaus are distinctive but coverage there is very sparse',
      'Conakry is the only likely city spawn -- peninsula city',
      'Very rare spawn overall',
      'More mountainous than Senegal, more tropical than Mali/Burkina',
      'Red laterite soil + French + right-hand driving in West Africa',
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
      '覆蓋非常有限',
      '主要為社群貢獻/非官方覆蓋',
      'Some coverage in Freetown (capital)',
      'Sparse coverage along major roads',
      'Trekker at some locations',
      '覆蓋品質差異顯著',
    ],
    car: [
      '無標準 Google 街景車 meta',
      '各種來源的社群貢獻覆蓋',
      'No consistent identifiable features',
      'No follow car, snorkel, or tape',
    ],
    roads: [
      'Road numbered system present but limited signage',
      'Right-hand driving (despite being English-speaking)',
      'Road quality generally poor',
      'Red laterite soil roads common',
      'Motorcycle taxis (okada) very common',
      'Freetown has hilly terrain with steep roads',
      '城鎮中有減速帶',
    ],
    landscape: [
      'Tropical climate with lush green vegetation',
      'Freetown: coastal city with dramatic hilly backdrop',
      'Beaches along the western coast (Lumley Beach, River No. 2)',
      'Interior: forested hills and river valleys',
      'Diamond mining areas in the east',
      'Rice paddies in lowland areas',
      'Mangrove swamps along the coast',
      'Cotton tree in Freetown is a famous landmark',
    ],
    signs: [
      'English on official signs (former British colony)',
      'Krio (English-based creole) visible on informal signs',
      'English-speaking but drives on the RIGHT (unusual for former British colonies)',
      'Orange and Africell telecom branding',
      'SLL (Leone) currency pricing',
      '鄉村地區標誌有限',
    ],
    plates: [
      '各種車牌格式 with SL marking',
      '覆蓋中能見度有限',
      'Government plates differ',
      'Plate condition often poor',
    ],
    unique: [
      'English-speaking + right-hand driving in West Africa = could be Sierra Leone (or Liberia)',
      'English + right-hand driving is unusual for former British colonies',
      'Freetown has very hilly terrain with ocean views',
      'Very rare spawn -- do not guess unless strong evidence',
      'Krio language elements visible on informal signs',
      'Distinguished from Ghana/Nigeria by being much smaller with less coverage',
    ],
    tips: [
      'English + right-hand driving in tropical West Africa = consider Sierra Leone',
      'Freetown is the only likely spawn -- hilly coastal city',
      'Very rare -- only guess with strong evidence',
      'Distinguished from Ghana by driving side (Ghana also right but has tape meta)',
      'Less coverage than Ghana or Nigeria',
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
      '覆蓋非常有限',
      'Contributed/unofficial coverage primarily',
      'Some coverage in Lome (capital)',
      'Sparse coverage along main roads',
      'One of the least-covered West African countries',
      'Quality varies',
    ],
    car: [
      '標準轎車',
      '無特殊車輛辨識特徵'
    ],
    roads: [
      'RN-numbered national routes',
      '靠右行駛',
      'Main north-south highway connects Lome to the north',
      '道路品質不一 significantly',
      'Motorcycle taxis (zemidjan) extremely common',
      'French road signage where present',
      'Narrow country stretching north-south',
    ],
    landscape: [
      'Very narrow country between Ghana and Benin',
      'Coastal lowlands in the south',
      'Togo Mountains/Atakora range in the central/north area',
      'Tropical vegetation throughout',
      'Palm tree plantations',
      'Savanna in the north',
      'Green and relatively flat in the south',
    ],
    signs: [
      '法語 on all signs',
      'Ewe and Kabiye on local/commercial signs',
      'CFA Franc pricing visible',
      'Togocom and Moov telecom branding',
      '法語文字為標準',
      'Limited signage outside Lome',
    ],
    plates: [
      '各種車牌格式 with TG marking',
      'Limited visibility',
      'Government plates differ',
    ],
    unique: [
      'French + very narrow country between Ghana (English) and Benin (French)',
      'Motorcycle taxis (zemidjan) with green vests are common',
      'Lome is right on the Ghana border -- can almost walk across',
      'Very rare spawn -- extremely limited coverage',
      'Distinguished from Ghana by language (French vs English)',
      'CFA Franc country like Senegal and Ivory Coast',
    ],
    tips: [
      'Extremely rare spawn -- almost never appears',
      'French + between Ghana and Benin = Togo',
      'Lome is the only likely spawn point',
      'Adjacent to Ghana but French-speaking, not English',
      'Motorcycle taxis with green vests help identify Lome',
      'Narrow country geography -- coast to north is only about 150km',
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
      '覆蓋非常有限',
      'Some coverage in Djibouti City',
      'Contributed and unofficial coverage',
      'Trekker at some locations',
      'Coverage quality varies',
      'One of the least-covered African countries',
    ],
    car: [
      '標準轎車',
      '無特殊車輛辨識特徵'
    ],
    roads: [
      'RN-numbered routes',
      '靠右行駛',
      'Main roads connecting Djibouti City to Ethiopia',
      '道路品質不一: modern in the city, deteriorates outside',
      'French and Arabic road signage',
      'Desert roads with minimal features',
      'Strategic location: Horn of Africa at Bab-el-Mandeb strait',
    ],
    landscape: [
      'Extremely arid and hot desert terrain',
      'Lake Assal: lowest point in Africa, salt lake',
      'Volcanic landscape: Ardoukoba volcano, lava fields',
      'Almost no vegetation -- one of the driest countries on Earth',
      'Gulf of Tadjoura: deep blue water against barren brown/black terrain',
      'Afar Triangle geology: rift zone visible',
      'Salt flats and barren rocky desert',
      'Military bases visible (French, American, Chinese)',
    ],
    signs: [
      'French and Arabic on official signs',
      'Somali and Afar languages also present',
      'French dominant on government/official signage',
      'Arabic script alongside French',
      'Military installation signage (foreign bases)',
      '鄉村地區標誌有限',
    ],
    plates: [
      '各種車牌格式',
      'DJ marking possible',
      'Military vehicles have special plates',
      '覆蓋中能見度有限',
    ],
    unique: [
      'French + Arabic + extremely arid/volcanic terrain = Djibouti',
      'Smallest country in East Africa',
      'Multiple foreign military bases visible (France, USA, China, Japan)',
      'Lake Assal (lowest point in Africa) trekker location',
      'Volcanic/rift zone landscape unlike surrounding countries',
      'Very rare spawn -- extremely limited coverage',
      'Strategic location at the Bab-el-Mandeb strait',
    ],
    tips: [
      'French + Arabic + extreme desert + Horn of Africa = Djibouti',
      'Very rare spawn -- only guess with strong evidence',
      'Military bases help identify Djibouti',
      'More barren/volcanic than neighboring Ethiopia',
      'Djibouti City is the only likely spawn',
      'Salt flats and volcanic terrain are distinctive',
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
      '覆蓋極其有限',
      'Primarily trekker and contributed coverage',
      'Some coverage in Juba (capital)',
      '全球覆蓋最少的國家之一',
      'Coverage quality generally low',
      'Very few spawn locations on world map',
    ],
    car: [
      'No standard Google car coverage',
      'Contributed/trekker coverage only',
      'No identifiable car meta',
    ],
    roads: [
      'Very limited paved road infrastructure',
      '靠右行駛',
      'Most roads are unpaved tracks, especially outside Juba',
      'Roads become impassable in rainy season',
      'UN/NGO vehicle traffic common in coverage',
      'Infrastructure severely damaged by conflict',
    ],
    landscape: [
      'White Nile and Sudd swamp (one of the world\'s largest wetlands)',
      'Flat savanna and grasslands',
      'Tropical vegetation in the south',
      'Imatong Mountains in the far south',
      'Green during rainy season, dry during dry season',
      'Cattle herding communities (Dinka, Nuer) with large herds',
      'UN and NGO compound infrastructure visible',
    ],
    signs: [
      'English on official signs',
      'Arabic also used, especially in transitional areas',
      'Dinka and Nuer languages locally',
      'UN/UNMISS signage visible in some areas',
      'Very limited signage overall',
      'NGO/humanitarian organization signage common',
    ],
    plates: [
      'Various formats, not well standardized',
      'SS marking for South Sudan',
      'Government and UN plates differ',
      'Limited visibility in sparse coverage',
    ],
    unique: [
      'English + very limited coverage + East Africa + savanna = could be South Sudan',
      'World\'s newest country (independence 2011)',
      'UN/NGO presence and signage visible',
      'Extremely rare spawn -- almost never appears on world map',
      'Distinguished from Sudan by 英語 (Sudan uses Arabic)',
      'Sudd swamp area is distinctive if coverage exists there',
    ],
    tips: [
      'Almost never spawns in regular play -- extremely rare',
      'English + conflict-affected + East Africa savanna = consider South Sudan',
      'UN/UNMISS signage = likely South Sudan',
      'Juba is the only likely spawn location',
      'Do not confuse with Sudan (Arabic) or Uganda (more coverage)',
      'Only guess if you see very strong evidence',
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
      '覆蓋非常有限',
      'Some contributed coverage in Khartoum',
      'Trekker at some historical/tourist sites',
      'Meroe pyramids may have trekker coverage',
      'Very sparse overall',
      'Coverage quality varies',
    ],
    car: [
      '標準轎車',
      '無特殊車輛辨識特徵'
    ],
    roads: [
      'Main highways connecting Khartoum to Port Sudan and other cities',
      '靠右行駛',
      '道路品質不一: modern highways in Khartoum area, poor elsewhere',
      'Desert highways through flat, arid terrain',
      'Arabic road signage',
      '主要道路上有白色中線',
    ],
    landscape: [
      'Sahara Desert in the north: vast sand and rock desert',
      'Nile Valley: narrow green corridor (Blue Nile and White Nile converge at Khartoum)',
      'Khartoum: at the confluence of the Blue and White Nile',
      'Meroe pyramids: ancient Nubian pyramids in the desert',
      'Semi-arid Sahel zone in the center/south',
      'Red Sea coast with coral reefs',
      'Flat desert terrain dominates most of the country',
    ],
    signs: [
      'Arabic script dominant on signs',
      'English sometimes present on major signs',
      'Arabic road signage standard',
      'MTN and Zain telecom branding',
      '距離標誌以公里計',
      'Arabic reads right-to-left',
    ],
    plates: [
      '各種車牌格式',
      'Arabic text on plates',
      'Government plates differ',
      '覆蓋中能見度有限',
    ],
    unique: [
      'Arabic + Sahara/Sahel + East Africa = could be Sudan',
      'Meroe pyramids (Nubian) are distinctive trekker locations',
      'Khartoum at the confluence of Blue and White Nile',
      'Arabic language distinguishes from South Sudan (English)',
      'Very rare spawn -- minimal coverage',
      'More developed infrastructure than South Sudan',
    ],
    tips: [
      'Arabic + Saharan desert + East/North Africa = consider Sudan',
      'Meroe pyramids = instant Sudan identification',
      'Khartoum is the only likely city spawn',
      'Arabic (not English) distinguishes from South Sudan',
      'Very rare spawn -- only guess with strong evidence',
      'Less coverage than Egypt but more than South Sudan',
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
      'Limited but present Google Street View coverage',
      'Coverage on main roads of Viti Levu (largest island) and some of Vanua Levu',
      '有覆蓋的地方為 Gen 3 相機',
      'Coastal and resort areas may have additional coverage',
      'Trekker at some tourism spots',
      'Coverage density lower than Australia/NZ',
    ],
    car: [
      '標準轎車',
      '靠左行駛',
      '無特殊車輛辨識特徵'
    ],
    roads: [
      'Kings Road and Queens Road circle Viti Levu island',
      'Left-hand driving (British colonial influence)',
      '道路品質不一: paved main roads, gravel rural roads',
      'Speed bumps very common in villages',
      'Two-lane roads with no center barrier on most routes',
      'Palm-lined roads along the coast',
      'Rural roads can be narrow and winding through mountains',
    ],
    landscape: [
      'Tropical islands with mountainous interiors',
      'Coral reefs and turquoise lagoons surrounding islands',
      'Lush tropical vegetation: palm trees, tropical flowers',
      'Sugar cane fields widespread on Viti Levu',
      'Volcanic mountain peaks with dense forest',
      'River valleys and waterfalls in interior',
      'Resort and tourism infrastructure on coastal areas',
      'Indian-Fijian communities visible: Hindu temples alongside Fijian villages',
    ],
    signs: [
      '所有官方標誌為英語',
      'Fijian and Fiji Hindi on local/community signs',
      'Hindi script (Devanagari) visible on temples and some businesses',
      '速限以 km/h 標示',
      'Tourism signage common',
      'Vodafone Fiji branding',
      '距離標誌以公里計',
    ],
    plates: [
      'White/light plates',
      'Various format with letter and number combinations',
      'Government plates differ',
      '計程車車牌可能為不同顏色',
      'Limited standardization visible through blur',
    ],
    unique: [
      'Left-hand driving + tropical Pacific island + English + Hindi elements = Fiji',
      'Only Pacific island nation with significant Indian/Hindi cultural influence',
      'Hindu temples alongside Fijian bure (traditional thatched houses) is distinctive',
      'Sugar cane fields on a tropical island = likely Fiji',
      'Hindi/Devanagari script on a Pacific island = Fiji',
      'Blue Union Jack in the flag visible on government buildings',
      'Tourism infrastructure (resorts, dive shops) common',
    ],
    tips: [
      'Hindi text/temples on a tropical Pacific island = Fiji, guaranteed',
      'Left-hand driving on a tropical Pacific island narrows options considerably',
      'Sugar cane fields + tropical island + English signs = Fiji',
      'Kings Road and Queens Road are the main circular routes on Viti Levu',
      'Viti Levu is the most covered island -- most spawns will be here',
      'Fiji has more coverage than most small Pacific island nations',
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
      '覆蓋非常有限',
      'Some trekker coverage along Kokoda Track and tourist areas',
      'Contributed coverage in Port Moresby and some highways',
      '覆蓋品質差異顯著',
      'One of the least-covered Pacific nations',
      'Most coverage is unofficial/contributed',
    ],
    car: [
      '無標準 Google 街景車',
      '各種車輛的社群貢獻覆蓋',
      'Trekker coverage on walking paths',
      'No consistent car meta',
    ],
    roads: [
      'Highland Highway connects major highland towns',
      '靠左行駛',
      'Road quality generally poor outside major towns',
      'Many areas only accessible by air or boat',
      'Red soil/laterite on unpaved roads',
      'PMV (Public Motor Vehicle) buses common',
      '城鎮中有減速帶',
    ],
    landscape: [
      'Extremely mountainous interior (up to 4,509m at Mount Wilhelm)',
      'Dense tropical rainforest covering most of the country',
      'Highland valleys with subsistence agriculture (sweet potato, coffee)',
      'Coastal lowlands with mangroves and coral reefs',
      'Active volcanoes (Rabaul, Manam)',
      'Large rivers flowing through dense jungle',
      'Traditional villages: stilt houses, thatched roofs',
      'World\'s third largest island (shared with Indonesia)',
    ],
    signs: [
      'English and Tok Pisin on signs',
      'Tok Pisin words: "haus" (house), "pis" (fish), "wara" (water), "rot" (road)',
      'Tok Pisin is English-based pidgin but distinct',
      'Digicel (red) telecom branding very common',
      'Limited signage outside urban areas',
      'Warning signs about security/crime in some areas',
    ],
    plates: [
      '各種車牌格式',
      'Limited standardization visible',
      'Government and diplomatic plates differ',
      'Limited visibility in sparse coverage',
    ],
    unique: [
      'Tok Pisin language on signs = Papua New Guinea',
      'Left-hand driving + tropical mountainous + English/Tok Pisin = PNG',
      'Most linguistically diverse country on Earth (800+ languages)',
      'Highland areas with subsistence agriculture look very different from coast',
      'Very rare spawn -- limited coverage overall',
      'Kokoda Track trekker coverage is recognizable',
      'Traditional tribal culture visible in highland areas',
      'Digicel (red branding) extremely prominent',
    ],
    tips: [
      'Tok Pisin text on signs = PNG, instant confirmation',
      'Extremely mountainous tropical island with left-hand driving = PNG',
      'Very rare spawn -- do not guess unless you see Tok Pisin or strong evidence',
      'Port Moresby is the most likely city spawn',
      'Highland valleys with subsistence farming look very different from coastal PNG',
      'Digicel red branding is the dominant telecom',
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
      'Gen 3 覆蓋 with distinctive bars visible',
      'Long antenna on front-right corner of camera car -- KEY identifier',
      'Slight unblurred roof rack distinguishes from Northern Mariana Islands',
      '覆蓋良好 across most of the island',
      'Some trekker/beach walking coverage',
      'Coverage includes main highways and many side roads',
    ],
  car: [
      '長天線在右前方',
      '微小 roof rack 可見',
      '車輛有部分模糊',
      '天線 + roof rack 區別 Guam 和 Northern Mariana Islands',
      'Guam 有水泥電線桿（vs Northern Mariana 的木頭電線桿）'
    ],
    roads: [
      'US-style road infrastructure with highway shields',
      'Highway shields specifically say "GUAM" on them -- helpful',
      'Right-hand driving (US territory)',
      'White shoulder lines, yellow center dividers (US standard)',
      'Studded roads more common than lined roads',
      'Painted bus stops with island-specific designs',
      'Roundabouts present in some areas',
    ],
    landscape: [
      'Tropical island with lush vegetation',
      'Relatively flat in the north, hills and peaks in the south',
      'Coral limestone plateau in the north',
      'Beaches and high-rise tourist hotels along Tumon Bay',
      'Military bases visible (US Navy and Air Force)',
      'Japanese and Korean tourist facilities (signs in Japanese/Korean)',
      'Dense tropical vegetation interior',
      'Smaller and less developed than Hawaii but clearly American-style infrastructure',
    ],
    signs: [
      'English on all signs (US territory)',
      'Chamorro language on some local signs',
      'Japanese and Korean text common in tourist areas (Tumon)',
      'US-style highway signs and road markings',
      '"GUAM" highway shields are helpful identifiers',
      '速限以 mph 標示 (US territory)',
      'Military base entrance signs visible',
    ],
    plates: [
      'Narrow white plates with black lettering (US-style but island-specific)',
      'Yellow plates also possible',
      'US-style plate format',
      '政府和軍用車牌不同',
      'Front and rear plates required',
    ],
    unique: [
      'Long antenna on front-right of camera car + tropical island = Guam or Northern Mariana Islands',
      'CONCRETE utility poles distinguish Guam from Northern Mariana Islands (which has wooden poles)',
      '"GUAM" highway shields on road signs = instant confirmation',
      'Japanese/Korean tourist text on a US territory = Guam (tourist destination)',
      'Right-hand driving on a tropical Pacific island with US infrastructure = Guam',
      'High-rise tourist hotels along Tumon Bay beach',
      'US military base infrastructure visible',
      'Larger, busier streets than Northern Mariana Islands',
    ],
    tips: [
      'Antenna on front-right of car + tropical island = Guam or CNMI',
      'Concrete utility poles = Guam; wooden utility poles = Northern Mariana Islands',
      '"GUAM" on highway shields = instant confirmation',
      'Japanese/Korean tourist signage = likely Guam (major tourist destination for East Asia)',
      'Wealthier/more developed appearance than CNMI',
      'US-style road infrastructure on a tropical Pacific island',
    ],
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
      'No official Google Street View coverage',
      'Limited contributed/unofficial coverage available',
      'Some trekker coverage at tourist locations',
      'Google car and trekker imagery from alternate sources',
      'Coverage very sparse',
      'Quality varies significantly',
    ],
    car: [
      '無標準 Google 街景車',
      '各種來源的社群貢獻覆蓋',
      'No consistent car meta',
      'Trekker at some locations',
    ],
    roads: [
      'RT-numbered territorial routes (Route Territoriale)',
      'Right-hand driving (French territory)',
      'French-style road infrastructure and signage',
      'Wide, angular guardrails similar to Czech/Slovak style',
      'Road quality generally good on main routes',
      'Winding coastal roads',
      '圓環常見',
    ],
    landscape: [
      'MINING MAQUIS biome: distinctive shrubby vegetation on metallic soils',
      'Reddish/orange soil from high metal oxide content (nickel mining) -- KEY identifier',
      'Among world leaders in nickel production',
      'Barrier reef surrounding the island (UNESCO World Heritage)',
      'Mountainous interior with tropical vegetation',
      'Pine trees (Araucaria columnaris) -- tall, narrow, distinctive columnar shape',
      'Turquoise lagoon visible from many coastal roads',
      'Mix of Melanesian and French colonial landscape',
    ],
    signs: [
      '法語 on ALL signs (French overseas territory)',
      'Kanak languages may appear on local signs',
      'French road sign standards (same as mainland France)',
      '.nc domain visible on some signs',
      '距離標誌以公里計',
      'French commercial brands present',
    ],
    plates: [
      'French-style plates but with NC (New Caledonia) code',
      'Different format from mainland France',
      'White plates with regional markings',
      'Limited visibility in sparse coverage',
    ],
    unique: [
      'Reddish/orange soil from nickel mining + French + Pacific island = New Caledonia',
      'Mining maquis biome with distinctive shrubby vegetation on metallic soils',
      'Wide angular guardrails (Czech/Slovak style) on a Pacific island is unusual',
      'Columnar Araucaria pine trees are distinctive',
      'French + right-hand driving + Pacific tropical island = New Caledonia',
      '.nc domain on signs',
      'Barrier reef lagoon visible from coast',
    ],
    tips: [
      'Reddish/orange mining soil + French + Pacific island = New Caledonia',
      '法語 on a Pacific tropical island (not Reunion which is Indian Ocean)',
      'Columnar pine trees (Araucaria) are distinctive of New Caledonia',
      '.nc domain on business signs confirms New Caledonia',
      'Very rare spawn -- limited coverage',
      'Mining landscape with red soil distinguishes from other French territories',
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
      'Limited coverage, primarily on main roads',
      'Coverage on Upolu and Savai\'i islands',
      'Gen 3 where official coverage exists',
      'Some trekker coverage',
      '各種來源的社群貢獻覆蓋',
      'Coverage concentrated along coastal ring roads',
    ],
    car: [
      '靠左行駛',
      '標準轎車或 trekker 涵蓋',
      '無特殊車輛辨識特徵'
    ],
    roads: [
      'Main road circles each island along the coast',
      'Left-hand driving (switched from right to left in 2009)',
      '道路品質不一: paved main roads, rough rural roads',
      '村莊中減速帶常見',
      'Narrow roads through villages',
      'Tropical vegetation encroaching on road edges',
    ],
    landscape: [
      'Volcanic islands with mountainous interiors',
      'Tropical vegetation: coconut palms, breadfruit trees, tropical flowers',
      'Black volcanic rock and sand visible on some beaches/coasts',
      'White sand beaches on the coast',
      'Lush green rainforest interior',
      'Traditional Samoan fale (open-sided houses) visible',
      'Church buildings prominent in every village',
      'To Sua Ocean Trench: dramatic swimming hole (possible trekker spot)',
    ],
    signs: [
      'English and Samoan on signs',
      'Samoan language uses Latin alphabet with limited special characters',
      'Church signage very prominent (Samoa is deeply religious)',
      'Digicel (red) and Vodafone branding',
      '速限以 km/h 標示',
      'Tourism signage present',
    ],
    plates: [
      '各種車牌格式',
      'Limited standardization visible',
      'Government plates differ',
      '覆蓋中能見度有限',
    ],
    unique: [
      'Left-hand driving + Polynesian tropical island + English = Samoa (not American Samoa which drives right)',
      'Switched driving side from RIGHT to LEFT in 2009 (one of few countries to do this)',
      'Open-sided fale (traditional houses) are distinctively Samoan',
      'Churches in every village -- extremely prominent',
      '.ws domain (Western Samoa historical name)',
      'Distinguished from American Samoa: Samoa drives LEFT, American Samoa drives RIGHT',
      'Volcanic black rock alongside tropical beaches',
    ],
    tips: [
      'Left-hand driving on a Polynesian island = Samoa (not American Samoa)',
      'Open-sided fale houses are distinctive Samoan architecture',
      'Churches extremely prominent in every village',
      'Volcanic black rock + tropical greenery + left-hand driving = Samoa',
      '.ws domain (Western Samoa) distinguishes from American Samoa (.as)',
      'Very rare spawn -- limited coverage overall',
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
      '覆蓋非常有限',
      'Primarily trekker and contributed coverage',
      'Some coverage in Honiara (capital)',
      'WWII memorial sites may have trekker coverage',
      'One of the least-covered Pacific nations',
      'Coverage quality varies',
    ],
    car: [
      '無標準 Google 街景車',
      '各種來源的社群貢獻覆蓋',
      'No consistent car meta',
      'Trekker at some locations',
    ],
    roads: [
      '靠左行駛',
      'Very limited road infrastructure',
      'Honiara has some paved roads; rural areas mostly unpaved',
      'Many areas only accessible by boat',
      'No traffic lights outside Honiara',
      'Simple road layout in the capital',
    ],
    landscape: [
      'Volcanic islands covered in dense tropical rainforest',
      'Guadalcanal: largest island, site of WWII battle',
      'Coral atolls and volcanic islands',
      'Dense tropical jungle with limited road access',
      'Clear blue/green waters surrounding islands',
      'Traditional leaf-thatched houses in villages',
      'WWII wrecks and memorials visible in some coverage',
      'Mangrove forests along coastlines',
    ],
    signs: [
      'English on official signs',
      'Solomon Islands Pijin (English-based pidgin) on local signs',
      'Limited signage overall',
      'Our Telekom (blue) branding',
      'Tourism and WWII memorial signage',
      'Government signs in English',
    ],
    plates: [
      '各種格式',
      'Limited standardization',
      'Government plates differ',
      'Very limited visibility in coverage',
    ],
    unique: [
      'Left-hand driving + Melanesian tropical islands + English = Solomon Islands or PNG',
      'WWII battlefield sites and memorials (especially Guadalcanal)',
      'English-based Pijin language distinct from Tok Pisin (PNG)',
      'Very rare spawn -- minimal coverage',
      'Dense tropical jungle with minimal road infrastructure',
      'Distinguished from PNG by being smaller islands, less mountainous overall',
    ],
    tips: [
      'WWII memorial/battlefield sites = consider Solomon Islands (Guadalcanal)',
      'Melanesian islands + English + left-hand driving = Solomon Islands or PNG',
      'Honiara is the only likely spawn location',
      'Very rare -- only guess with strong evidence',
      'Less mountainous than PNG, more clearly island-chain geography',
      'Our Telekom branding helps confirm Solomon Islands',
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
      'Very limited coverage -- mostly trekker',
      'Small amount of official trekker coverage, largely of Ambrym Volcano',
      'Some contributed coverage in Port Vila (capital)',
      'One of the least-covered Pacific nations',
      'Black plates with white text visible but rare',
      '覆蓋品質差異顯著',
    ],
    car: [
      '標準轎車或 trekker 涵蓋',
      '靠右行駛',
      '無特殊車輛辨識特徵'
    ],
    roads: [
      'Right-hand driving (unusual for a former British colony)',
      'Very limited road infrastructure',
      'Port Vila has some paved roads',
      'Most islands have minimal road networks',
      'Many areas accessible only by boat or foot',
      'Simple, narrow roads through villages',
    ],
    landscape: [
      'Volcanic island chain with dramatic terrain',
      'Active volcanoes: Mount Yasur on Tanna (accessible lava viewing)',
      'Ambrym volcano with lava lake',
      'Dense tropical rainforest',
      'Blue holes (clear freshwater swimming pools) in the jungle',
      'Coral reefs and beaches',
      'Traditional villages with Kastom (custom) culture',
      'Black volcanic sand beaches',
    ],
    signs: [
      'Trilingual: English, French, and Bislama',
      'Bislama (English-based creole): distinctive words visible on signs',
      'French influence alongside English (unique in Melanesia)',
      'Digicel (red) branding',
      'Tourism signage common',
      'Limited signage outside Port Vila',
    ],
    plates: [
      'Black plates with white text',
      'Different from most Pacific nations\' plate styles',
      'Limited visibility in sparse coverage',
      '政府車牌可能不同',
    ],
    unique: [
      'Right-hand driving + English AND French + Melanesian Pacific island = Vanuatu',
      'Only Melanesian country with both English and French as official languages',
      'Bislama (creole) language visible on signs',
      'Active lava viewing at Mount Yasur (Tanna) is iconic trekker location',
      'Black plates with white text (rare Pacific plate style)',
      'Very rare spawn -- extremely limited coverage',
      'Ambrym volcano trekker coverage',
    ],
    tips: [
      'English + French + Melanesian island = Vanuatu (only country with this combination)',
      'Active volcano trekker coverage = consider Vanuatu (Mount Yasur, Ambrym)',
      'Right-hand driving in a Pacific island with English = could be Vanuatu, Guam, or American territories',
      'Bislama text is distinctive: looks like English but with simplified spelling',
      'Very rare spawn -- only guess with strong evidence',
      'Port Vila is the only likely city spawn',
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
      '覆蓋非常有限',
      'Some coverage on Tongatapu (main island)',
      'Contributed and trekker coverage',
      'One of the least-covered Pacific nations',
      'Coverage concentrated in Nuku\'alofa (capital) area',
      'Quality varies',
    ],
    car: [
      '標準轎車或 trekker 涵蓋',
      '靠左行駛',
      '無特殊車輛辨識特徵'
    ],
    roads: [
      '靠左行駛',
      'Flat, simple road network on Tongatapu',
      'Paved main roads in Nuku\'alofa area',
      'Unpaved roads in rural areas and outer islands',
      'Minimal traffic',
      'Speed bumps in villages',
      'Straight, flat roads on main island',
    ],
    landscape: [
      'Flat coral islands (Tongatapu) and volcanic islands (northern group)',
      'Tongatapu (main island) is very flat -- no mountains',
      'Coconut palms and tropical vegetation',
      'Clean, well-kept villages',
      'Churches prominent in every village (Tonga is deeply religious)',
      'Royal Palace in Nuku\'alofa',
      'Coral limestone visible',
      'Tropical flowers and gardens',
    ],
    signs: [
      'English and Tongan on signs',
      'Tongan uses Latin alphabet',
      'Church signage extremely prominent (multiple denominations)',
      'Royal/monarchy-related signage',
      'Digicel and U-Call branding',
      '速限以 km/h 標示',
      'Limited signage outside main areas',
    ],
    plates: [
      '各種車牌格式',
      'Limited standardization visible',
      'Government plates: "GOVT" marking',
      'Royal plates: distinctive',
      '覆蓋中能見度有限',
    ],
    unique: [
      'Left-hand driving + Polynesian flat coral island + English = Tonga',
      'Only monarchy in the Pacific (royal symbols and palace)',
      'Very flat terrain (Tongatapu) -- flatter than Samoa or Fiji',
      'Churches extremely prominent (Tonga has highest church-per-capita in the Pacific)',
      'Royal Palace in Nuku\'alofa is distinctive',
      'Very rare spawn -- minimal coverage',
      '.to domain (popular for URL shorteners)',
    ],
    tips: [
      'Flat Polynesian island + left-hand driving + churches everywhere = Tonga',
      'Royal palace/monarchy elements = Tonga (only Pacific monarchy)',
      'Much flatter than Samoa (which is volcanic/mountainous)',
      'Nuku\'alofa is the only likely spawn',
      'Very rare -- only guess with strong evidence',
      '.to domain may be visible on some signs',
    ],
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
        <strong>涵蓋國家：</strong>僅 USA, Australia, New Zealand, Japan, France, Italy, Canada, Mexico<br>
        <strong>辨識要點：</strong>極差畫質 + 天空接縫 = Gen 1 → 大概率是 USA 或 Australia<br>
        <strong>🔗 範例：</strong><a href="https://www.google.com/maps/@37.7749,-122.4194,3a,75y,90t,0r/data=!3m6!1e1!3m4!1s2007" target="_blank" style="color:var(--accent-blue)">San Francisco Gen 1 覆蓋 (Google Maps)</a></p>
      </div>
      <div class="meta-info-block">
        <h4>Gen 2 (2008–2012)</h4>
        <img src="https://d33wubrfki0l68.cloudfront.net/07bd54eb5a0817610b80e59c666d19d6ce449e34/beff7/static/img/camera-gens/gen-2.jpg" alt="Gen 2 - purple halo" style="max-width:100%;border-radius:8px;margin:8px 0;">
        <p><strong>畫質：</strong>比 Gen 1 好但仍為低解析度。<br>
        <strong>關鍵特徵：</strong>太陽周圍有 <strong>purple halo</strong>（鏡頭光暈），地面車輛周圍有<strong>圓形紫色模糊</strong>。<br>
        <strong>相機：</strong>R5（8 顆 5MP 相機 + 魚眼鏡頭 + 3 組雷射掃描器）<br>
        <strong>涵蓋國家：</strong>North America, Australia, NZ, Western Europe<br>
        <strong>辨識要點：</strong>天空有 purple halo = Gen 2 → 排除 Africa、大部分 Asia、South America<br>
        <strong>🔗 範例：</strong><a href="https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=48.8566,2.3522" target="_blank" style="color:var(--accent-blue)">Paris Gen 2 覆蓋 (Google Maps)</a></p>
      </div>
      <div class="meta-info-block">
        <h4>Gen 3 (2012–2019)</h4>
        <img src="https://d33wubrfki0l68.cloudfront.net/369fcd7c4bdf6e36fc981df1555933be0e48df5f/5c92b/static/img/camera-gens/gen-3.jpg" alt="Gen 3" style="max-width:100%;border-radius:8px;margin:8px 0;">
        <p><strong>畫質：</strong>大幅提升 — 自然色彩、文字清晰、天空乾淨。<br>
        <strong>相機：</strong>R7（15 顆相機，首款完全由 Google 自製的相機）<br>
        <strong>涵蓋國家：</strong>全球 — 最常見的世代。<br>
        <strong>辨識要點：</strong>正常畫質、無失真 = 大概率 Gen 3<br>
        <strong>🔗 範例：</strong><a href="https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=51.5074,-0.1278" target="_blank" style="color:var(--accent-blue)">London Gen 3 覆蓋 (Google Maps)</a></p>
      </div>
      <div class="meta-info-block">
        <h4>Gen 4 (2017–至今)</h4>
        <img src="https://d33wubrfki0l68.cloudfront.net/cbc70adb9fd0a0c4bba7dc79657ee508d7b6af35/ea3de/static/img/camera-gens/gen-4.jpg" alt="Gen 4" style="max-width:100%;border-radius:8px;margin:8px 0;">
        <p><strong>畫質：</strong>最高 — 色彩極其鮮豔、超高解析度.<br>
        <strong>相機：</strong>7 顆 20MP 感光元件（相比 Gen 3 的 15 顆 5MP 大幅升級）+ 2 顆專用高畫質側面相機。<br>
        <strong>涵蓋國家：</strong>比 Gen 3 少見，主要為近期拍攝。<br>
        <strong>辨識要點：</strong>異常鮮豔/飽和的色彩 + 超高解析度 = Gen 4<br>
        <strong>🔗 範例：</strong><a href="https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=59.3293,18.0686" target="_blank" style="color:var(--accent-blue)">Stockholm Gen 4 覆蓋 (Google Maps)</a></p>
      </div>
      <div class="meta-info-block">
        <h4>⚠️ 特殊相機類型 — 含 Google Maps 範例</h4>
        <p><strong>🔽 Low Cam（低相機）：</strong>Japan, Switzerland, Lebanon, Italy, Sri Lanka — 政府要求相機安裝較低位置以保護隱私，車輛模糊區域更大。Japan 和 Switzerland 最明顯。<br>
        <strong>📷 Unofficial Cam / Small Cam（非官方/小相機）：</strong>India — 畫質明顯比標準 Gen 3 差，略帶霧感 (foggy)，文字難以辨認。非 Google 官方拍攝，2022 年後城市擴展。<br>
        <strong>💩 Shit Cam（低品質第三方覆蓋）：</strong>Uganda 等非洲國家 — 極低畫質、嚴重模糊、過曝或欠曝、顏色失真。由 Mapillary 等第三方志願者拍攝，非 360° 全景。<br>
        <strong>🚶 Trekker Coverage（步行拍攝）：</strong>背包式 360° 相機步行拍攝。常見於地標、國家公園、大學。Costa Rica (2025前) 僅有此類覆蓋 — 只能在人行道上移動。<br>
        <strong>🛻 Pickup Truck 覆蓋：</strong>Bermuda（黑色 pickup）、Christmas Island（銀色 pickup）、US Virgin Islands（白色/紅色卡車）— 非轎車，可能為皮卡或 SUV。
        <br><br><strong>🔗 Google Maps 範例連結：</strong><br>
        • <a href="https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=35.6762,139.6503" target="_blank" style="color:var(--accent-blue)">Japan Low Cam (Tokyo)</a><br>
        • <a href="https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=47.3769,8.5417" target="_blank" style="color:var(--accent-blue)">Switzerland Low Cam (Zürich)</a><br>
        • <a href="https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=28.6139,77.2090" target="_blank" style="color:var(--accent-blue)">India Unofficial Cam (Delhi)</a><br>
        • <a href="https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=0.3136,32.5811" target="_blank" style="color:var(--accent-blue)">Uganda Coverage (Kampala)</a></p>
      </div>
      <div class=meta-info-block>
        <h4>快速辨識流程</h4>
        <p>1. 極差畫質 + 天空接縫 → <strong>Gen 1</strong>（USA/AUS）<br>
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
        • <strong>Bermuda</strong> — 黑色 pickup truck（有時模糊化處理）<br>
        • <strong>Christmas Island</strong> — 銀色 pickup/ute（後方貨斗可見）<br>
        • <strong>American Samoa</strong> — 黑色 ute/truck（後方可見）<br>
        • <strong>US Virgin Islands</strong> — St. Thomas/St. John = 白色 truck + 黑色天線；St. Croix = 紅白色 truck<br>
        • <strong>Kazakhstan</strong> — 白色 pickup truck（bars 在後方，常被完全模糊化）<br>
        • <strong>Namibia</strong> — 白色 pickup truck<br>
        • <strong>Oman</strong> — 白色 pickup truck（天線在中間）<br>
        • <strong>Qatar</strong> — 白色 pickup truck（天線在左）<br>
        • <strong>Senegal</strong> — Gen 4：銀色/白色 truck cab<br>
        • <strong>Rwanda</strong> — Pickup truck（白/黑/灰棕色，紅色煞車燈在車頂）<br>
        • <strong>Nigeria</strong> — 大型 pickup truck（白/紅色，黃黑色 rack）<br>
        • <strong>Turkey</strong> — Gen 4：灰色 pickup truck（也有白色轎車）<br>
        • <strong>Iceland</strong> — Gen 4：白色（七月）/紅色（八月）pickup truck<br>
        • <strong>Mongolia</strong> — 部分涵蓋使用白/藍色 pickup truck<br>
        • <strong>Peru</strong> — 部分涵蓋（120 號公路）使用黑色 truck</p>
      </div>
      <div class="meta-info-block">
        <h4>Snorkel（進氣管）</h4>
        <p>只有兩個國家的 Google car 有 snorkel：<br>
        • <strong>Kenya</strong> — 右前方大型黑色 snorkel（用於涉水過河）— 100% 確認 Kenya<br>
        • <strong>Mongolia</strong> — Snorkel + 車頂露營裝備/背包</p>
      </div>
      <div class="meta-info-block">
        <h4>Roof Rack 辨識</h4>
        <p>• <strong>Ghana</strong> — 銀色車架，<strong>前橫桿右端</strong>纏黑色膠帶（100% Ghana）<br>
        • <strong>Réunion</strong> — <strong>僅後橫桿</strong>纏黑色膠帶（前 vs 後 = Ghana vs Réunion）<br>
        • <strong>Nigeria</strong> — 獨特黃/黑色橫桿 + 警車隨行護衛<br>
        • <strong>Mongolia</strong> — 車架附露營裝備/背包；西部/UB = 黑色橡膠填充橫桿；東部 = 無填充<br>
        • <strong>Kyrgyzstan</strong> — 四根橫桿可見 + 側鏡，但<strong>無背包</strong>（vs Mongolia 有背包）<br>
        • <strong>Guatemala</strong> — 灰色車 + 車架 + 可見黑色側鏡（Guatemala 獨有側鏡配置）<br>
        • <strong>Dominican Republic</strong> — 車架中間有黑色橡膠條紋（僅 DR 和 Mongolia UB 有此特徵）<br>
        • <strong>Curaçao</strong> — 黑色車 + 車架 + 白色貼紙 + 可見黑色引擎蓋（全球唯一組合）<br>
        • <strong>Laos</strong> — 可見 roof rack（首都 Vientiane 除外）<br>
        • <strong>Guam</strong> — 微小 roof rack + 右前長天線<br>
        • <strong>Bangladesh</strong> — 黑色 bars + 紅色側鏡（全球獨有配置）</p>
      </div>
      <div class="meta-info-block">
        <h4>天線類型</h4>
        <p>• <strong>圓形天線（circular）</strong> — Gen 4 Europe：Sweden, Hungary, Bulgaria, Romania, France, Croatia, Italy, Slovenia<br>
        • <strong>長天線（long）</strong> — Russia, Donetsk, Israel, Palestine（黑色車配長天線）<br>
        • <strong>短粗天線（stubby）</strong> — Mexico, Colombia, Ecuador, Brazil（拉丁美洲共通）<br>
        • <strong>三脊天線（three-ridge）</strong> — USA, New Zealand, Hawaii, Cambodia<br>
        • <strong>細短天線（thin stubby）</strong> — Java, Indonesia 限定<br>
        • <strong>獨特粗天線</strong> — 僅 Panama（全球唯一，100% 確認）<br>
        • <strong>Gen 3 膠帶天線</strong> — Czechia, Slovakia, Hungary, Romania（東歐共通特徵）<br>
        • <strong>無天線</strong> — Greece（所有年份皆無）, Serbia, North Macedonia, Turkey (Gen 3)<br>
        • <strong>Gen 4 無天線</strong> — Ireland, Norway, Denmark, Czechia (2019-2020)</p>
      </div>
      <div class="meta-info-block">
        <h4>Gen 4 Europe 車色（依年份）</h4>
        <p><strong>藍色 + 圓形天線：</strong>Sweden, Hungary, Bulgaria, Romania, France (2021), Italy, Croatia (2022), Slovenia (2023)<br>
        <strong>藍色，無天線：</strong>Ireland, Norway, Czechia (2019-2020), Denmark (2019-2020), Hungary (2019-2020)<br>
        <strong>黑色 + 圓形天線：</strong>Bulgaria + Lithuania (2024), Lithuania + Czechia + Netherlands + UK (2023), Latvia (2022)<br>
        <strong>紅色：</strong>Sweden, Slovakia, Bulgaria, Greece<br>
        <strong>白色：</strong>Sweden, Turkey, Luxembourg<br>
        <strong>⚠️ 注意：</strong>Austria 和 Belgium 在 Gen 4 中沒有可見車輛</p>
      </div>
      <div class="meta-info-block">
        <h4>南美車色</h4>
        <p>• <strong>黑色車</strong> — Argentina, Uruguay<br>
        • <strong>白色車</strong> — Chile, Bolivia, Ecuador<br>
        • <strong>深灰色車</strong> — Peru (Gen 4)<br>
        • <strong>藍色車</strong> — Brazil (Gen 4：所有 Gen 4 涵蓋皆為藍色)<br>
        • <strong>多色</strong> — Colombia（黑/白/灰）, Peru (Gen 3：白+黑)</p>
      </div>
      <div class="meta-info-block">
        <h4>中東車輛快速辨識</h4>
        <p>• <strong>UAE</strong> — 白色<strong>轎車</strong><br>
        • <strong>Jordan</strong> — <strong>黑色</strong>轎車（vs UAE 白色 = 最簡單辨識法）<br>
        • <strong>Israel</strong> — 黑色轎車 + <strong>長天線</strong><br>
        • <strong>Oman</strong> — 白色 <strong>pickup truck</strong>（天線在中間）<br>
        • <strong>Qatar</strong> — 白色 <strong>pickup truck</strong>（天線在左）</p>
      </div>
      <div class="meta-info-block">
        <h4>非洲車輛快速辨識</h4>
        <p>• <strong>Kenya</strong> — Snorkel（100% 確認）<br>
        • <strong>Ghana</strong> — 前橫桿黑色膠帶（100% 確認）<br>
        • <strong>Nigeria</strong> — 黃/黑 rack + 警車護送<br>
        • <strong>Senegal</strong> — 銀/白色 truck cab (Gen 4)<br>
        • <strong>South Africa</strong> — Gen 4 天藍色車 + 短黑色天線；Kruger Park = 迷彩車<br>
        • <strong>Uganda</strong> — 白色方形 SUV + 方形側鏡<br>
        • <strong>Rwanda</strong> — Pickup truck + 車頂紅色煞車燈<br>
        • <strong>Réunion</strong> — 後橫桿黑色膠帶<br>
        • <strong>Tunisia</strong> — Follow car：北部 = 淺綠 Toyota；南部 = 深綠 Mazda</p>
      </div>
      <div class="meta-info-block">
        <h4>特殊功能 / 100% 辨識線索</h4>
        <p>• <strong>Sri Lanka</strong> — 白色車 + 右側紅色模糊 + 前方藍/白/紅色塊<br>
        • <strong>Croatia</strong> — Gen 3 側鏡有黃色貼紙（Croatia 獨有）<br>
        • <strong>Japan</strong> — 非常低的相機位置，大型模糊區域<br>
        • <strong>Switzerland</strong> — 極低的相機位置，所有國家中<strong>最大</strong>的模糊區域<br>
        • <strong>Sri Lanka Gen 4</strong> — Low-cam（物體更大、道路更寬、圓形模糊更寬）<br>
        • <strong>Kyrgyzstan</strong> — 銀色車反射可見於側鏡；側鏡狀態（乾淨/泥濘）可辨識東西部<br>
        • <strong>Bangladesh</strong> — 黑色 bars + 紅色側鏡（全球獨有配置）<br>
        • <strong>Panama</strong> — 獨特粗天線（全球唯一，100% 確認）<br>
        • <strong>Bermuda</strong> — 黑色 truck（有時完全模糊化處理）<br>
        • <strong>Christmas Island</strong> — 銀色 pickup 貨斗可見<br>
        • <strong>American Samoa</strong> — 黑色 truck 後方可見<br>
        • <strong>Pakistan</strong> — 向下看可見人的輪廓（Trekker 步行拍攝）<br>
        • <strong>Kruger National Park (South Africa)</strong> — 迷彩花紋車（全球唯一！）</p>
      </div>
      <div class="meta-info-block">
        <h4>Follow Car（跟隨車）辨識</h4>
        <p>• <strong>Nigeria</strong> — 多種：棕色 Toyota SUV (Lagos)、黑色 SUV (Benin City)、紅色車、銀色車、警車<br>
        &nbsp;&nbsp;→ 警燈紅色在左 = 南部；紅色在右 = 北部/Abuja<br>
        • <strong>Tunisia</strong> — 北部 (Hammamet 以北) = 淺綠色 Toyota；南部 = 深綠色 Mazda<br>
        • <strong>Kenya</strong> — Toyota follow car（都市區較少見）</p>
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
        • 同一標誌上混用西里爾字母 + 拉丁字母 → <strong>Serbia</strong> 或 <strong>Bosnia</strong></p>
      </div>
      <div class="meta-info-block">
        <h4>非拉丁文字快速指南</h4>
        <p>• <strong>Greek</strong> — Φ, Γ, Δ, Θ, Σ, Ψ, Ω。僅 Greece/Cyprus。<br>
        • <strong>Georgian</strong> — 圓形、藤蔓般的裝飾曲線。僅 Georgia。<br>
        • <strong>Armenian</strong> — 獨特的角形曲線。僅 Armenia。<br>
        • <strong>Hebrew</strong> — 從右至左、方塊字母、不連寫。Israel。<br>
        • <strong>Arabic</strong> — 從右至左、連寫/草書體、大量點。Middle East + North Africa。<br>
        • <strong>Devanagari</strong> — 頂部橫線連接字母。India（Hindi）、Nepal。<br>
        • <strong>Bengali</strong> — 類似 Devanagari 但有向左的三角形。Bangladesh。<br>
        • <strong>Sinhala</strong> — 像各方向的 C 形。Sri Lanka。<br>
        • <strong>Thai</strong> — 字元上有小圓圈 + 直線。Thailand。<br>
        • <strong>Lao</strong> — 類似 Thai 但更圓滑、沒有直線邊緣。Laos。<br>
        • <strong>Khmer</strong> — 字母頂部有向右的小鉤。Cambodia。<br>
        • <strong>Burmese</strong> — 完美的圓形和半圓形。Myanmar。<br>
        • <strong>Hangul</strong> — 方塊音節組合（ㄱ,ㄴ,ㄷ）。South Korea。<br>
        • <strong>Ge'ez</strong> — 獨特的幾何字元。Ethiopia/Eritrea。</p>
      </div>
      <div class="meta-info-block">
        <h4>容易混淆的文字配對</h4>
        <p>• <strong>Thai vs Lao vs Khmer：</strong>Thai 有圓圈+直線 → Lao 更圓滑 → Khmer 有向右的鉤<br>
        • <strong>Devanagari vs Bengali：</strong>都有頂部橫線 → Bengali 有向左的三角形<br>
        • <strong>Greek vs Cyrillic：</strong>共用部分字母 → Cyrillic 有獨特的 Ж, Ш, Щ, Ы</p>
      </div>
    `
  },
  {
    icon: '🛣️',
    title: '道路標線顏色',
    content: `
      <div class="meta-info-block">
        <h4>黃色中線</h4>
        <p><strong>美洲：</strong>USA（雙黃線）, Canada, Mexico（單黃線）, Brazil, Colombia, Peru, Ecuador, Bolivia, Paraguay, Venezuela<br>
        <strong>歐洲：</strong>Norway, Finland（多條中線時）<br>
        <strong>亞洲：</strong>Thailand, Cambodia<br>
        <strong>非洲：</strong>Rwanda（黃色中線 + 白色邊線）</p>
      </div>
      <div class="meta-info-block">
        <h4>白色中線</h4>
        <p>歐洲大部分國家：France, Germany, Spain, Italy, UK, Ireland, Sweden, Denmark, Poland, Greece 等<br>
        南美洲：<strong>Chile（全白線 — 獨特！）</strong><br>
        大洋洲：Australia, New Zealand<br>
        亞洲：Malaysia（雙白線）</p>
      </div>
      <div class="meta-info-block">
        <h4>特殊標線樣式</h4>
        <p>• <strong>三條中線</strong> — Uruguay, Philippines, South Africa/Botswana/Eswatini/Lesotho<br>
        • <strong>黃色邊線</strong> — South Africa, Botswana, Lesotho, Eswatini, Israel, Jordan, UAE, Oman<br>
        • <strong>黃色虛線邊線</strong> — Ireland（非常獨特！）<br>
        • <strong>超長白色虛線邊線</strong> — France（Europe 中獨有）<br>
        • <strong>全白標線（中線 + 邊線）</strong> — 在 South America 僅 Chile</p>
      </div>
    `
  },
  {
    icon: '🏗️',
    title: 'Bollard 防撞柱指南',
    content: `
      <div class="meta-info-block">
        <h4>歐洲 — 主要 Bollard 樣式</h4>
        <p>• <strong>France</strong> — 大型圓柱體，反光條環繞整個柱身<br>
        • <strong>Germany</strong> — 扁平白色柱子，僅單側有長方形反光板，黑色條紋<br>
        • <strong>Austria</strong> — 黑色頂蓋 + 暗紅/黑色反光板（兩者皆有 = 僅 Austria）<br>
        • <strong>Italy</strong> — 從反光板延伸至頂部的黑色條紋<br>
        • <strong>UK/Scotland</strong> — 黑白條紋 + 頂部大紅色長方形<br>
        • <strong>Ireland</strong> — 綠白條紋、無反光板<br>
        • <strong>Spain</strong> — 黃色反光板帶凹面<br>
        • <strong>Czech Republic</strong> — 螢光橘條紋、分裂反光板、楔形<br>
        • <strong>Slovakia</strong> — 分裂反光板、彎曲形（vs Czech 楔形）<br>
        • <strong>Hungary</strong> — 紅色反光板、較圓的頂部<br>
        • <strong>Iceland</strong> — 小型、全黃色、小灰色反光板<br>
        • <strong>Switzerland</strong> — 圓頂圓柱形、黑白配色<br>
        • <strong>Russia</strong> — 極薄「紙片狀」</p>
      </div>
      <div class="meta-info-block">
        <h4>亞洲</h4>
        <p>• <strong>Cambodia</strong> — 紅色金字塔頂 + 黃/白色反光板<br>
        • <strong>Thailand/Indonesia</strong> — 黑白方塊 + 金字塔頂<br>
        • <strong>Bangladesh</strong> — 煙囪形、紅白交替<br>
        • <strong>Mongolia</strong> — 保齡球瓶形狀</p>
      </div>
      <div class="meta-info-block">
        <h4>美洲</h4>
        <p>• <strong>Mexico/Peru</strong> — 香菸形白色圓柱<br>
        • <strong>Ecuador</strong> — 圓柱形帶兩條紅色條紋（常見！）<br>
        • <strong>Uruguay</strong> — 白色正面 + 頂部長方形反光板<br>
        • <strong>Bolivia</strong> — 白色圓柱 + 紅色環或紅/黃色塊</p>
      </div>
      <div class="meta-info-block">
        <h4>Bollard 圖片參考</h4>
        <p>以下為各國 Bollard 實際外觀參考圖片：</p>
        <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:12px;margin:12px 0;">
          <div><strong>France</strong><br><img src="https://geomastr.com/assets/media/bollards/france.jpg" alt="France bollard" style="max-width:100%;border-radius:8px;"></div>
          <div><strong>Germany</strong><br><img src="https://geomastr.com/assets/media/bollards/germany.jpg" alt="Germany bollard" style="max-width:100%;border-radius:8px;"></div>
          <div><strong>Austria</strong><br><img src="https://geomastr.com/assets/media/bollards/austria.jpg" alt="Austria bollard" style="max-width:100%;border-radius:8px;"></div>
          <div><strong>Italy</strong><br><img src="https://geomastr.com/assets/media/bollards/italy.jpg" alt="Italy bollard" style="max-width:100%;border-radius:8px;"></div>
          <div><strong>Spain</strong><br><img src="https://geomastr.com/assets/media/bollards/spain.jpg" alt="Spain bollard" style="max-width:100%;border-radius:8px;"></div>
          <div><strong>Ireland</strong><br><img src="https://geomastr.com/assets/media/bollards/ireland.jpg" alt="Ireland bollard" style="max-width:100%;border-radius:8px;"></div>
          <div><strong>Hungary</strong><br><img src="https://geomastr.com/assets/media/bollards/hungary.jpg" alt="Hungary bollard" style="max-width:100%;border-radius:8px;"></div>
          <div><strong>Czech Republic</strong><br><img src="https://geomastr.com/assets/media/bollards/czech-republic.jpg" alt="Czech Republic bollard" style="max-width:100%;border-radius:8px;"></div>
          <div><strong>Iceland</strong><br><img src="https://geomastr.com/assets/media/bollards/iceland.jpg" alt="Iceland bollard" style="max-width:100%;border-radius:8px;"></div>
          <div><strong>Switzerland</strong><br><img src="https://geomastr.com/assets/media/bollards/switzerland.jpg" alt="Switzerland bollard" style="max-width:100%;border-radius:8px;"></div>
          <div><strong>Denmark</strong><br><img src="https://geomastr.com/assets/media/bollards/denmark.jpg" alt="Denmark bollard" style="max-width:100%;border-radius:8px;"></div>
          <div><strong>Norway</strong><br><img src="https://geomastr.com/assets/media/bollards/norway.jpg" alt="Norway bollard" style="max-width:100%;border-radius:8px;"></div>
          <div><strong>Sweden</strong><br><img src="https://geomastr.com/assets/media/bollards/sweden.jpg" alt="Sweden bollard" style="max-width:100%;border-radius:8px;"></div>
          <div><strong>Poland</strong><br><img src="https://geomastr.com/assets/media/bollards/poland.jpg" alt="Poland bollard" style="max-width:100%;border-radius:8px;"></div>
          <div><strong>Portugal</strong><br><img src="https://geomastr.com/assets/media/bollards/portugal.jpg" alt="Portugal bollard" style="max-width:100%;border-radius:8px;"></div>
          <div><strong>Croatia</strong><br><img src="https://geomastr.com/assets/media/bollards/croatia.jpg" alt="Croatia bollard" style="max-width:100%;border-radius:8px;"></div>
          <div><strong>Serbia</strong><br><img src="https://geomastr.com/assets/media/bollards/serbia.jpg" alt="Serbia bollard" style="max-width:100%;border-radius:8px;"></div>
          <div><strong>Russia</strong><br><img src="https://geomastr.com/assets/media/bollards/russia.jpg" alt="Russia bollard" style="max-width:100%;border-radius:8px;"></div>
          <div><strong>Turkey</strong><br><img src="https://geomastr.com/assets/media/bollards/turkey.jpg" alt="Turkey bollard" style="max-width:100%;border-radius:8px;"></div>
          <div><strong>Australia</strong><br><img src="https://geomastr.com/assets/media/bollards/australia.jpg" alt="Australia bollard" style="max-width:100%;border-radius:8px;"></div>
          <div><strong>Cambodia</strong><br><img src="https://geomastr.com/assets/media/bollards/cambodia.jpg" alt="Cambodia bollard" style="max-width:100%;border-radius:8px;"></div>
          <div><strong>Thailand</strong><br><img src="https://geomastr.com/assets/media/bollards/thailand.jpg" alt="Thailand bollard" style="max-width:100%;border-radius:8px;"></div>
          <div><strong>Mongolia</strong><br><img src="https://geomastr.com/assets/media/bollards/mongolia.jpg" alt="Mongolia bollard" style="max-width:100%;border-radius:8px;"></div>
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
        <p><strong>歐洲 (4)：</strong>UK, Ireland, Cyprus, Malta<br>
        <strong>亞洲 (16+)：</strong>Japan, India, Pakistan, Bangladesh, Nepal, Bhutan, Sri Lanka, Thailand, Malaysia, Singapore, Brunei, Indonesia, Timor-Leste, Hong Kong, Macau<br>
        <strong>大洋洲 (10+)：</strong>Australia, New Zealand, Papua New Guinea, Fiji, Samoa, Tonga, Solomon Islands<br>
        <strong>非洲 (14+)：</strong>South Africa, Kenya, Tanzania, Uganda, Botswana, Zimbabwe, Zambia, Malawi, Mozambique, Namibia, Lesotho, Eswatini, Mauritius<br>
        <strong>美洲：</strong>US Virgin Islands, Jamaica, Trinidad & Tobago + 數個英國屬地</p>
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
        <p>+1 = USA/Canada &nbsp;&nbsp; +7 = Russia/Kazakhstan</p>
      </div>
      <div class="meta-info-block">
        <h4>兩位數國碼（最常見）</h4>
        <p>+20 Egypt, +27 South Africa, +30 Greece, +31 Netherlands, +32 Belgium, +33 France, +34 Spain, +36 Hungary, +39 Italy, +40 Romania, +41 Switzerland, +44 UK, +45 Denmark, +46 Sweden, +47 Norway, +48 Poland, +49 Germany, +51 Peru, +52 Mexico, +54 Argentina, +55 Brazil, +56 Chile, +57 Colombia, +60 Malaysia, +61 Australia, +62 Indonesia, +63 Philippines, +64 New Zealand, +65 Singapore, +66 Thailand, +81 Japan, +82 South Korea, +84 Vietnam, +86 China, +90 Turkey, +91 India, +94 Sri Lanka</p>
      </div>
      <div class="meta-info-block">
        <h4>三位數國碼（精選）</h4>
        <p>+212 Morocco, +216 Tunisia, +233 Ghana, +234 Nigeria, +254 Kenya, +351 Portugal, +352 Luxembourg, +353 Ireland, +354 Iceland, +355 Albania, +358 Finland, +370 Lithuania, +371 Latvia, +372 Estonia, +380 Ukraine, +381 Serbia, +420 Czech Republic, +421 Slovakia, +502 Guatemala, +506 Costa Rica, +507 Panama, +593 Ecuador, +598 Uruguay, +855 Cambodia, +976 Mongolia</p>
      </div>
    `
  },
  {
    icon: '🌐',
    title: '國家頂級域名 (TLD)',
    content: `
      <div class="meta-info-block">
        <h4>容易混淆的 TLD</h4>
        <p>.za = South Africa (Zuid-Afrika) &nbsp;&nbsp; .ch = Switzerland (Confoederatio Helvetica)<br>
        .hr = Croatia (Hrvatska) &nbsp;&nbsp; .ee = Estonia (Eesti) &nbsp;&nbsp; .rs = Serbia &nbsp;&nbsp; .mk = North Macedonia<br>
        .ba = Bosnia &nbsp;&nbsp; .si = Slovenia &nbsp;&nbsp; .me = Montenegro &nbsp;&nbsp; .is = Iceland<br>
        .es = Spain (España) &nbsp;&nbsp; .at = Austria &nbsp;&nbsp; .be = Belgium &nbsp;&nbsp; .fo = Faroe Islands</p>
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
        • <strong>Montenegro</strong> — 全國普遍可見（南部 Bar 半島除外），是最容易辨識的特徵<br>
        • <strong>Albania</strong> — 常見但不如 Montenegro 普遍<br>
        • <strong>Senegal</strong> — 非洲最常見 rift 的國家<br>
        • <strong>Gen 2 覆蓋</strong> — Gen 2 相機的 sky rift/halo 是其標誌性特徵</p>
      </div>
      <div class="meta-info-block">
        <h4>Ground Rift（地面裂縫）</h4>
        <p><strong>特徵：</strong>往下看地面時出現的不自然接縫或扭曲。<br>
        <strong>主要出現：</strong><br>
        • <strong>Mexico (Oaxaca)</strong> — Gen 3 覆蓋中 99% 的 ground rift 都在 Oaxaca 州<br>
        • <strong>Gen 2 覆蓋</strong> — 車輛周圍的紫色圓形模糊也是一種 ground rift</p>
      </div>
      <div class="meta-info-block">
        <h4>快速辨識規則</h4>
        <p>• 天空有明顯裂縫 + 歐洲 → <strong>Montenegro</strong>（最常見）或 <strong>Albania</strong><br>
        • 天空有裂縫 + 非洲 → <strong>Senegal</strong><br>
        • 地面有裂縫 + 墨西哥 → <strong>Oaxaca 州</strong><br>
        • 天空有紫色光暈 (halo) → <strong>Gen 2 覆蓋</strong></p>
      </div>
    `
  },
  {
    icon: '🔗',
    title: '推薦學習資源',
    content: `
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
