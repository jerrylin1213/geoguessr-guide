// ===== Country-specific images from geodummy.com =====
// Plates, poles, signs, car metas, bollards, scenery, misc

const COUNTRY_IMAGES = {
  'japan': {
    plates: [
      'https://d33wubrfki0l68.cloudfront.net/e298246e5b5fe4524e79496e89b629e9fba4cb0d/a77b4/static/img/places/japan/plates/white.jpg',
      'https://d33wubrfki0l68.cloudfront.net/c28e5544aa45e68e15cdcdd313c283c111d72de4/5060c/static/img/places/japan/plates/yellow.jpg'
    ],
    poles: [
      'https://d33wubrfki0l68.cloudfront.net/df09c5a76cc243a42500e62fbac8dcc5af8e14a4/d5329/static/img/places/japan/poles/japan_tape.jpg',
      'https://d33wubrfki0l68.cloudfront.net/380d0169eabfd37b87f760fd7f104696b8bc9f3f/1bf57/static/img/places/japan/poles/hokkaido_arrow.jpg',
      'https://d33wubrfki0l68.cloudfront.net/540134fa74e9591aa1e2543bf21f12b5062399a6/3d3c1/static/img/places/japan/poles/guy_wires.png'
    ],
    signs: [
      'https://d33wubrfki0l68.cloudfront.net/d85cc32fce637361ca21489303b6f6b1b96665dc/694a5/static/img/places/japan/road-signs/blue_sign.jpg'
    ],
    carMetas: [
      'https://d33wubrfki0l68.cloudfront.net/cdd15654d6fb7287c1d86dfc12bbdaeb89776dc8/974bd/static/img/places/japan/car-metas/low_cam_meta.jpg',
      'https://d33wubrfki0l68.cloudfront.net/c574e4a4c1f467243918d51f13532c1dafec9ed5/5adea/static/img/places/japan/car-metas/sendai_car.png'
    ],
    bollards: [
      'https://d33wubrfki0l68.cloudfront.net/fdc904bba9f3e6187dc507df298dc8de219120d8/8fa82/static/img/places/japan/bollards/bollard_reflectors.jpg',
      'https://d33wubrfki0l68.cloudfront.net/583c187aa58d1052d75180fe93cb40cbd8b4b72d/ae750/static/img/places/japan/bollards/bollard_hokkaido.jpg'
    ],
    scenery: [
      'https://d33wubrfki0l68.cloudfront.net/3377303fc9e6444e5d14c6badc7e80f1ce37f430/8c442/static/img/places/japan/scenery/vendingmachines.jpg',
      'https://d33wubrfki0l68.cloudfront.net/17e0c481f782ab6d8ce4bec4455cd5cbd78135cc/3c572/static/img/places/japan/scenery/scenery_low_cam.jpg'
    ],
    misc: [
      'https://d33wubrfki0l68.cloudfront.net/0d3cff5305b51b9bf86f70ed60cfc27ced9d60dc/f6ba7/static/img/places/japan/road-markings/white_road_markings.jpg',
      'https://d33wubrfki0l68.cloudfront.net/8a3d65ec5c9e79dc61709dfa1d7289e3802eda91/70fe0/static/img/places/japan/architecture/black_tile_south.jpg',
      'https://d33wubrfki0l68.cloudfront.net/f8be73871fd33109b2a9e711d8d3d54596130692/a95f8/static/img/places/japan/miscellaneous/traffic_lights.jpg'
    ]
  },
  'india': {
    plates: [],
    poles: [],
    signs: [],
    carMetas: [
      'https://d33wubrfki0l68.cloudfront.net/2bfe7c61dd1911a060008fba8544388f773ffbc0/ff69c/static/img/places/india/car-metas/big_blur.jpg',
      'https://d33wubrfki0l68.cloudfront.net/2f1b08e7c30ab8e8475e6da0c1ca583f5fa47170/73a22/static/img/places/india/car-metas/rectangle_blur.jpg'
    ],
    bollards: [],
    scenery: [],
    misc: [
      'https://d33wubrfki0l68.cloudfront.net/8a56d6bcdb01cb0c74d0186a0b3b77f66229adcb/07412/static/img/places/india/miscellaneous/tuk_tuk.jpg'
    ]
  },
  'kenya': {
    plates: [],
    poles: [],
    signs: [],
    carMetas: [
      'https://d33wubrfki0l68.cloudfront.net/df7c18ad209bb279bb213fe263a57ba599172eb4/d4996/static/img/places/kenya/car-metas/mombasa_nairobi.png',
      'https://d33wubrfki0l68.cloudfront.net/594fac5ffe26cdc2ee00e77ba33bd7bd779b573f/3ad9b/static/img/places/kenya/car-metas/a2_road.jpg',
      'https://d33wubrfki0l68.cloudfront.net/3bba4fd72dfe76e0a694b1d22f2819569678b927/2aea8/static/img/places/kenya/car-metas/dot_meta.png',
      'https://d33wubrfki0l68.cloudfront.net/f08427876341714535e116cc0589f9676d02b534/76336/static/img/places/kenya/car-metas/lewa_national_park.jpg'
    ],
    bollards: [],
    scenery: [
      'https://d33wubrfki0l68.cloudfront.net/66654cd41ca3a52f57edb0c4b400bae3fde3c0f2/81fab/static/img/places/kenya/scenery/coastal_palms_sandy.jpg'
    ],
    misc: []
  },
  'guatemala': {
    plates: [],
    poles: [],
    signs: [
      'https://d33wubrfki0l68.cloudfront.net/e404fbb5494435043d217f099cac925dcc166a7a/6cf79/static/img/places/guatemala/road-signs/alto.jpg',
      'https://d33wubrfki0l68.cloudfront.net/c0b85ca9d77ff8bfbc3008907bccd989931808e8/015d5/static/img/places/guatemala/road-signs/road_sign_blue.jpg'
    ],
    carMetas: [
      'https://d33wubrfki0l68.cloudfront.net/a2f2563e0407d1707db001d4f825f004efc253e8/e62e7/static/img/places/guatemala/car-metas/car.jpg',
      'https://d33wubrfki0l68.cloudfront.net/0d51cb0f865beac83e5ed6f98ce00b7de70cd000/c7550/static/img/places/guatemala/car-metas/guatemala_tiny_ball_on_front_left_of_google_car_meta.png'
    ],
    bollards: [],
    scenery: [
      'https://d33wubrfki0l68.cloudfront.net/28ab618791630a315bf46886871ec0984c95b37b/85de6/static/img/places/guatemala/scenery/scenery1.jpg'
    ],
    misc: []
  },
  'ghana': {
    plates: [],
    poles: [
      'https://d33wubrfki0l68.cloudfront.net/2e1bf3e0dc117f27faca0e77bed4c63f17be9c7c/2f07e/static/img/places/ghana/poles/wood_pole.png'
    ],
    signs: [],
    carMetas: [
      'https://d33wubrfki0l68.cloudfront.net/3122bee30f3579471465580eb79d601fe4ef203c/c24da/static/img/places/ghana/car-metas/tape.jpg',
      'https://d33wubrfki0l68.cloudfront.net/e7ddf5995c361a9746b63aa39ac0379ac0c197fd/f5e4f/static/img/places/ghana/car-metas/crumpled_tape_meta.jpg'
    ],
    bollards: [],
    scenery: [
      'https://d33wubrfki0l68.cloudfront.net/77a70db3f63579af05a6a3530eff599fce24519f/d9899/static/img/places/ghana/miscellaneous/coverage.jpg'
    ],
    misc: [
      'https://d33wubrfki0l68.cloudfront.net/541ab2797c94d0ad5c566227de365f0d412b1143/c41c8/static/img/places/ghana/miscellaneous/taxi.png'
    ]
  },
  'mongolia': {
    plates: [],
    poles: [],
    signs: [],
    carMetas: [
      'https://d33wubrfki0l68.cloudfront.net/9d01c2c98d9e04bd077fdf75129942e1e3347822/19ae0/static/img/places/mongolia/car-metas/blur_meta.jpg'
    ],
    bollards: [],
    scenery: [],
    misc: []
  },
  'nigeria': {
    plates: [],
    poles: [],
    signs: [],
    carMetas: [
      'https://d33wubrfki0l68.cloudfront.net/38430ba1881ce011891f5627a768b720007b7a78/17af3/static/img/places/nigeria/car-metas/followcar_left_right.jpg',
      'https://d33wubrfki0l68.cloudfront.net/a3d448ef0ad4423f20f4dd2773dbee4e9b6ccaab/9cb25/static/img/places/nigeria/car-metas/followcar_map.jpg',
      'https://d33wubrfki0l68.cloudfront.net/c072be8b7a92fcf212285cfa379a54dcaec05dba/9490d/static/img/places/nigeria/car-metas/followcar_and_bars.png'
    ],
    bollards: [],
    scenery: [],
    misc: []
  },
  'guam': {
    plates: [
      'https://d33wubrfki0l68.cloudfront.net/0c915f5dd0f4bd3875e81d62d6122d56101ce8bf/e275f/static/img/places/guam/plates/plate.jpg'
    ],
    poles: [
      'https://d33wubrfki0l68.cloudfront.net/17798a1dba0211091b16934b40906802bb6e2060/d600d/static/img/places/guam/poles/pole.jpg'
    ],
    signs: [
      'https://d33wubrfki0l68.cloudfront.net/cd2a3988fccb14bd4cdf0592c782479c8f0fbb4b/a683a/static/img/places/guam/road-signs/signs.jpg'
    ],
    carMetas: [
      'https://d33wubrfki0l68.cloudfront.net/3dfff1e6778f6ab39c3a2cb0377ca67121c729fa/347e9/static/img/places/guam/car-metas/antenna.jpg',
      'https://d33wubrfki0l68.cloudfront.net/892747b3e050d01a04d07df317ca3c2ba782ed8f/6670f/static/img/places/guam/car-metas/guam_rack.jpg'
    ],
    bollards: [],
    scenery: [
      'https://d33wubrfki0l68.cloudfront.net/97095e2e97143f343a3251aca2c68501a33cd370/1b409/static/img/places/guam/scenery/scenery.jpg'
    ],
    misc: []
  },
  'curacao': {
    plates: [],
    poles: [
      'https://d33wubrfki0l68.cloudfront.net/5806411d00e2cd1efe4f61286c2ab2c5c294056c/4d0a2/static/img/places/curacao/poles/pole.jpg'
    ],
    signs: [],
    carMetas: [
      'https://d33wubrfki0l68.cloudfront.net/3e921f1a713e73d41d96979f76c855c026ef21ae/5a401/static/img/places/curacao/car-metas/car.jpg'
    ],
    bollards: [],
    scenery: [],
    misc: []
  },
  'albania': {
    plates: [
      'https://d33wubrfki0l68.cloudfront.net/0fc5e3cac5c6ea846309537ea9a961494f772b6a/2fffd/static/img/places/albania/plates/new-plates.jpg',
      'https://d33wubrfki0l68.cloudfront.net/a0234f516e8f54323a67cffbbc5d32188edccb6d/e0582/static/img/places/albania/plates/old-plates.jpg'
    ],
    poles: [
      'https://d33wubrfki0l68.cloudfront.net/1fe5c2762d7c7fb3f8d0f50d61a0a3a54ac23b22/7a89f/static/img/places/albania/poles/wooden-pole.jpg'
    ],
    signs: [
      'https://d33wubrfki0l68.cloudfront.net/29e4c671556321d77aa9fbf5548b949c28213b08/37537/static/img/places/albania/road-signs/direction-signs.jpg',
      'https://d33wubrfki0l68.cloudfront.net/c1d758a7ab2f00c46d8b0cb2e442e2c7768be0ad/eab4e/static/img/places/albania/road-signs/warning-sign.jpg'
    ],
    carMetas: [
      'https://d33wubrfki0l68.cloudfront.net/ded42b4b609280a59d11f6e9cdfdaee6f1333145/94c2e/static/img/places/albania/miscellaneous/antenna.jpg'
    ],
    bollards: [
      'https://d33wubrfki0l68.cloudfront.net/ecded83016700f26992e1a1f144e82e91c2e77be/ee90e/static/img/places/albania/bollards/bollard-front.jpg',
      'https://d33wubrfki0l68.cloudfront.net/c11908d01f91ee14e8a7195281b2abb6a03150db/59550/static/img/places/albania/bollards/bollard-back.jpg',
      'https://d33wubrfki0l68.cloudfront.net/62b2e57a98d7d5beaee55032f37bb91aa7f69170/98310/static/img/places/albania/bollards/other-bollard.jpg'
    ],
    scenery: [
      'https://d33wubrfki0l68.cloudfront.net/86f7cb4073be9735804e981be38ad11dd25fef7d/12975/static/img/places/albania/scenery/scenery.jpg'
    ],
    misc: [
      'https://d33wubrfki0l68.cloudfront.net/24ebfc52c88d821bb2cef9b7a98fb3baa77959f0/de58f/static/img/places/albania/miscellaneous/rift.jpg',
      'https://d33wubrfki0l68.cloudfront.net/91f41a428205e2c7f607d3db73929eed168a1d84/6f7c9/static/img/places/albania/road-markings/road-markings.jpg'
    ]
  },
  'montenegro': {
    plates: [],
    poles: [
      'https://d33wubrfki0l68.cloudfront.net/7c27465bbe384e07d226ca92b807fadbbefafa49/2ffae/static/img/places/montenegro/poles/dubious_unique_pole.jpg'
    ],
    signs: [],
    carMetas: [],
    bollards: [],
    scenery: [
      'https://d33wubrfki0l68.cloudfront.net/c2237b2e3f1f69037aaed29d2ed98fe7c703dca7/550fc/static/img/places/montenegro/scenery/railroad_road.jpg'
    ],
    misc: []
  },
  'bangladesh': {
    plates: [],
    poles: [],
    signs: [],
    carMetas: [
      'https://d33wubrfki0l68.cloudfront.net/53ef2669f637d8362317f5145dd7b11c28bd4df2/94be9/static/img/places/bangladesh/car-metas/rack-yellow.png',
      'https://d33wubrfki0l68.cloudfront.net/210217867d1c42f895133c9f4556f7539fcb980b/8a9d0/static/img/places/bangladesh/car-metas/white.png'
    ],
    bollards: [],
    scenery: [],
    misc: [
      'https://d33wubrfki0l68.cloudfront.net/df3f16f7bb8a8666bff5796cd40ee7272ceccc38/54aad/static/img/places/bangladesh/car-metas/tanguar_haor_boat.jpg'
    ]
  },
  'cambodia': {
    plates: [],
    poles: [],
    signs: [],
    carMetas: [
      'https://d33wubrfki0l68.cloudfront.net/be13a2e2d73bb39d061d67f5f61b5acd7d79c31e/fc476/static/img/places/cambodia/car-metas/car.jpg',
      'https://d33wubrfki0l68.cloudfront.net/f6b892c7cc4dec6dcc7bd50dfd395740a94f75af/b0c1c/static/img/places/cambodia/car-metas/cambodia_triple_coil.jpg',
      'https://d33wubrfki0l68.cloudfront.net/50b24bd4d8d8ed5414b0780ff8d353a11312f6da/7e477/static/img/places/cambodia/car-metas/mekong-boat.jpg',
      'https://d33wubrfki0l68.cloudfront.net/b59f2c757adaf647428718f76a1645e2d894ea98/50041/static/img/places/cambodia/car-metas/train.jpg'
    ],
    bollards: [],
    scenery: [],
    misc: []
  }
};
