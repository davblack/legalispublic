GM_config.init(
  {
    'id': 'MyConfig',
    'title': 'Legális Script v1.2.0',
    'fields': // Fields object
    {  
      'TimeCheck_Enabled':
      {
        'label': 'Be legyen-e kapcsolva, hogy este pár órát ne menjen a bot:',
        'section': ['EGYÉB LEGÁLIS BEÁLLÍTÁSOK'],
        'title': 'idő kapcsolo',
        'type': 'checkbox',
        'default': true
      },
      'TimeCheck_Min':
      {
        'label': 'Hány órától induljon a bot reggel:',
        'type': 'int',
        'title': 'farm minimum',
        'default': '7'
      },
      'TimeCheck_Max':
      {
        'label': 'Hány órától álljon le a bot este:',
        'type': 'int',
        'title': 'idő maximum',
        'default': '23'
      },
      'AntiGrepolisUpdate_Enabled':
      {
      'label': 'Be legyen-e kapcsolva az update utáni oldalfrissítés:',
      'title': 'oldalfrissítés',
      'type': 'checkbox',
      'default': true
      },
      'FarmBot_Enabled':
      {
        'label': 'Be legyen-e kapcsolva a legális farmolo:',
        'section': ['LEGÁLIS FARMOLÓ'],
        'title': 'farm kapcsolo',
        'type': 'checkbox',
        'default': false
      },
      'FarmBot_Min':
      {
        'label': 'Hány másodpercenként sarcoljon min.:',
        'type': 'int',
        'title': 'farm minimum',
        'default': '604'
      },
      'FarmBot_Max':
      {
        'label': 'Hány másodpercenként sarcoljon max.:',
        'type': 'int',
        'title': 'farm maximum',
        'default': '731'
      },
      'CaveBot_Enabled':
      {
        'label': 'Be legyen-e kapcsolva a legális passzív vermelő:',
        'section': ['LEGÁLIS PASSZZÍV VERMELŐ'],
        'title': 'verem kapcsolo',
        'type': 'checkbox',
        'default': false
      },
      'CaveBot_Min':
      {
        'label': 'Hány másodpercenként vermeljen min.:',
        'type': 'int',
        'title': 'cave minimum',
        'default': '1234'
      },
      'CaveBot_Max':
      {
        'label': 'Hány másodpercenként vermeljen max.:',
        'type': 'int',
        'title': 'cave minimum',
        'default': '2946'
      },
      'CaveBot_Int':
      {
        'label': 'Mennyi ezüstöt rakjon el egyszerre:',
        'type': 'int',
        'title': 'cave int',
        'default': '1000'
      },
      'CultureBot_Enabled':
      {
        'label': 'Be legyen-e kapcsolva a legális kulúrázó:',
        'section': ['LEGÁLIS KULTÚRÁZÓ'],
        'title': 'kultura kapcsolo',
        'type': 'checkbox',
        'default': false
      },
      'CultureBot_Min':
      {
        'label': 'Hány másodpercenként kultúrázzon min.:',
        'type': 'int',
        'title': 'kulture minimum',
        'default': '5187'
      },
      'CultureBot_Max':
      {
        'label': 'Hány másodpercenként kultúrázzon max.:',
        'type': 'int',
        'title': 'kulture maximum',
        'default': '6919'
      },
      'CultureBot_Party':
      {
        'label': 'Fesztivál:',
        'title': 'feszti kapcsolo',
        'type': 'checkbox',
        'default': false
      },
      'CultureBot_Triumph':
      {
        'label': 'Diadalmenet:',
        'title': 'diadal kapcsolo',
        'type': 'checkbox',
        'default': false
      },
      'CultureBot_Theater':
      {
        'label': 'Színház:',
        'title': 'szinház kapcsolo',
        'type': 'checkbox',
        'default': false
      },
      'CultureBot_Games':
      {
        'label': '!!! OLIMPIA !!!(arany):',
        'title': 'olimpia kapcsolo',
        'type': 'checkbox',
        'default': false
      },
      'WonderBot_Enabled':
      {
        'label': 'Be legyen-e kapcsolva a legális csodázó:',
        'section': ['LEGÁLIS CSODÁZÓ'],
        'title': 'csoda kapcsolo',
        'type': 'checkbox',
        'default': false
      },
      'WonderBot_Int':
      {
        'label': 'Hány Városod van:',
        'type': 'int',
        'title': 'city count',
        'default': '1'
      },
    },
    'css': '#MyConfig { background: url(https://gphu.innogamescdn.com/images/game/layout/gpwindow_bg.jpg) 0 0 repeat; max-width: 100%; margin-bottom: 50px;}\
            #MyConfig *{ max-width: 100%;}\
            #MyConfig .section_header {background: url(https://gphu.innogamescdn.com/images/game/border/header.png); max-width: 100%; border-radius: 3px}\
            #MyConfig_buttons_holder {background: url(https://gphu.innogamescdn.com/images/game/border/header.png); color: #814646; text-align: right; position: fixed;bottom: 0; right: 0;width: 100%;height: 33px;}\
            #MyConfig_section * {position:fixed;}\
            #MyConfig .saveclose_buttons {margin: 5px 10px 5px; padding: 2px 40px;' 
  });
  

