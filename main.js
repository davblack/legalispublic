var player;
var CityIds = [];
var CityNames = [];
var anyBotRun = false;
var anyCulture = false;
var oraCheck = false;
var cdAnybot = getRandomMs(50, 70);
var cdComp = getRandomMs(23, 37);
var cdStep = getRandomMs(1.5, 2.5);
var cdLongStep = getRandomMs(8, 10);
var cdUpdate = getRandomMs(296, 396);
(function() {
    'use strict';
    $('head').append('<link rel="stylesheet" media="all" href="https://raw.githubusercontent.com/davblack/legalis/dev/style.css">');
    setTimeout(InitializeComponents, cdStep);
})();
async function InitializeComponents(){
    alertSound = document.createElement('audio');
    alertSound.src = GM_config.get('TozsdeBot_Captcha_Notiurl');
    alertSound.preload = 'auto';
    var zNode = document.createElement ('div'); 
    zNode.innerHTML = '<button id="btnTozsdeControl" type="button">'
                    + 'Beállítások</button>';
    zNode.setAttribute ('id', 'contTozsde');
    if(document.getElementsByClassName('nui_main_menu')[0]){
    document.getElementsByClassName('nui_main_menu')[0].getElementsByClassName('middle')[0].getElementsByClassName('content')[0].appendChild(zNode);}
    document.getElementById("btnTozsdeControl").addEventListener("click", ButtonClickAction, false);
    if(isTrue(GM_config.get('TimeCheck_Enabled'))){
        oraChecker();
    };
    await sleep(cdComp);
    if (isTrue(GM_config.get('FarmBot_Enabled'))) {
        RunFarm(); 
    };
    await sleep(cdComp);

    if (isTrue(GM_config.get('CaveBot_Enabled'))) {
        RunCave();
    };
    await sleep(cdComp);

    if (isTrue(GM_config.get('CultureBot_Enabled'))) {
        RunCulture();
    };
    await sleep(cdComp);

    if (isTrue(GM_config.get('WonderBot_Enabled'))) {
        RunWonder();  
    };
    await sleep(cdComp);
    CheckIfServerUpdated();     
};
function ButtonClickAction (zEvent){
    GM_config.open('MyConfig');
};
async function RunFarm() {
    let minFarm = GM_config.get('FarmBot_Min');
    let maxFarm = GM_config.get('FarmBot_Max');
    var cdEnd = getRandomMs(minFarm, maxFarm);
    if (anyBotRun || oraCheck) {
        console.log('FARM Mar fut valami, ujraproba',`${cdAnybot} ms múlva`);
        setTimeout(function () {
            RunFarm();
        }, cdAnybot);
    } else {
    anyBotRun = true;
    javascript:Layout.wnd.Create(Layout.wnd.TYPE_FARM_TOWN_OVERVIEWS,"Farming Town Overview");void(0);
    $(`[class^="ui-dialog ui-corner-all ui-widget ui-widget-content ui-front ui-draggable js-window-main-container"]`).each(function() {
        var joe = $(this).children(":first").find("span:contains('Farming Town Overview')").parent().parent();
        if (joe[0] == $(this)[0]) {
            $(this).css("visibility", "hidden");
        };
    });
    await sleep(cdStep);
    if (document.getElementsByClassName("checkbox select_all")[0]) {
        document.getElementsByClassName("checkbox select_all")[0].click();
    };
    await sleep(cdStep);
    var collectFarm = $("#fto_claim_button");
    if (collectFarm.prev()[0] == $(`[class^="fto_farm_claim_res bpv_villages"]`)[0]) {
        collectFarm.trigger('click');
    };                    
    await sleep(cdStep);                       
    var confirm = $(`[class^="btn_confirm button_new"]`);
    if (confirm) {
    confirm.trigger('click');
    };
    await sleep(cdStep);
    $(`[class^="icon_right icon_type_speed ui-dialog-titlebar-close"]`).each(function() {
        if ($(this).prev().text() == "Farming Town Overview"){
            $(this).trigger('click');
        };
    });
    await sleep(cdStep);                       
    anyBotRun = false;
    
    console.log('FARM kovi', millisToMinutesAndSeconds(cdEnd) ,'múlva'); 
    await sleep(cdEnd);  
    RunFarm();                                                                                                                                      
    }
}
async function RunCave() {
    var veremtar = GM_config.get('CaveBot_Int');
    let minVerem = GM_config.get('CaveBot_Min');
    let maxVerem = GM_config.get('CaveBot_Max');
    var cdEnd = getRandomMs(minVerem, maxVerem);
    if (anyBotRun || oraCheck) {
        console.log('CAVE Mar fut valami, ujraproba',`${cdAnybot} ms múlva`);
        setTimeout(function () {
            RunCave();
        }, cdAnybot);
    } else {
    anyBotRun = true;
    await sleep(cdStep);      
    javascript: Overviews.openOverview ('hides_overview')
    document.getElementsByClassName('ui-dialog ui-corner-all ui-widget ui-widget-content ui-front ui-draggable js-window-main-container')[0].style.visibility = 'hidden'; //hideolja a vermelot        
    await sleep(cdStep);
    unsafeWindow.HidesOverview.store_spinner.setValue(veremtar);
    await sleep(cdStep);  
    document.getElementById('store_iron_in_all_towns').click();
    await sleep(5000);
    document.getElementsByClassName("icon_right icon_type_speed ui-dialog-titlebar-close")[0].click();                                                          
    anyBotRun = false;
    console.log(`CAVE ${millisToMinutesAndSeconds(cdEnd)} mulva`); 
    await sleep(cdEnd);                      
    RunCave();                        
    };                       
};
async function RunCulture() {
    let minCulture = GM_config.get('CultureBot_Min');
    let maxCulture = GM_config.get('CultureBot_Max');
    var cdEnd = getRandomMs(minCulture, maxCulture);
    if (anyBotRun || oraCheck) {
        console.log('CULTURE Mar fut valami, ujraproba',`${cdAnybot} ms múlva`);
        setTimeout(function () {
            RunCulture();
        }, cdAnybot);
    } else {
    anyBotRun = true;
    javascript: Overviews.openOverview ('culture_overview')
    document.getElementsByClassName("ui-dialog ui-corner-all ui-widget ui-widget-content ui-front ui-draggable js-window-main-container")[0].style.visibility = 'hidden';//hideolja a culture attekintot
    await sleep(cdStep);
    if (isTrue(GM_config.get('CultureBot_Party',!anyCulture))) {
      RunParty();
    };
    await sleep(cdLongStep);
    if (isTrue(GM_config.get('CultureBot_Triumph',!anyCulture))) {
      RunTriumph();
    };
    await sleep(cdLongStep);
    if (isTrue(GM_config.get('CultureBot_Theater',!anyCulture))) {
      RunTheater();
    };
    await sleep(cdLongStep);
    if (isTrue(GM_config.get('CultureBot_Games',!anyCulture))) {
        RunGames();
    };
    await sleep(cdLongStep);   
    document.getElementsByClassName("icon_right icon_type_speed ui-dialog-titlebar-close")[0].click();
    anyBotRun = false;         
    console.log(`CULTURE anybot capta false-ra: ${anyBotRun}`);
    console.log(`CULTURE kovi ${millisToMinutesAndSeconds(cdEnd)} mulva`)
    await sleep(cdEnd); 
    RunCulture();
    };
};  
async function RunParty(){
    anyCulture = true;
    document.getElementById("start_all_celebrations").click();
    anyCulture = false;
    console.log(`culture feszti volt anyCulture capja utana false-ra: ${anyCulture}`);
}
async function RunTriumph(){
    anyCulture = true;
    document.getElementById('place_celebration_select_list').querySelector('.item-list').querySelector('div[name="triumph"]').click();
    await sleep(cdStep);
    document.getElementById("start_all_celebrations").click();
    anyCulture = false;
    console.log(`culture diadal volt anyCulture capja utana false-ra: ${anyCulture}`);
}
async function RunTheater(){
  anyCulture = true;
    document.getElementById('place_celebration_select_list').querySelector('.item-list').querySelector('div[name="theater"]').click();
    await sleep(cdStep);
    document.getElementById("start_all_celebrations").click();
    anyCulture = false;
    console.log(`culture szinház volt anyCulture capja utana false-ra: ${anyCulture}`);
}
async function RunGames(){
    anyCulture = true;
    document.getElementById('place_celebration_select_list').querySelector('.item-list').querySelector('div[name="games"]').click();
    await sleep(cdStep);
    document.getElementById("start_all_celebrations").click();
    anyCulture = false;
    console.log(`culture olimpia volt anyCulture capja utana false-ra: ${anyCulture}`);
}
function sleep(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
};
function isTrue(value){
    if (typeof(value) === 'string'){
        value = value.trim().toLowerCase();
    };
    switch(value){
        case true:
        case "true":
        case 1:
        case "1":
        case "on":
        case "yes":
        return true;
        default: 
        return false;
    };
};

function getRandomMs(min, max) {
    return (Math.random() * (max - min) + min) * 1000
};

function millisToMinutesAndSeconds(millis) {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000);
    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
};
async function oraChecker() {
    const now = new Date();
    const minutes = Math.floor(Math.random() * 20) + 30;
    let startTime = new Date();
    startTime.setHours(parseInt(GM_config.get('TimeCheck_Max')), minutes,0, 0);
    let endTime = new Date();
    endTime.setHours(parseInt(GM_config.get('TimeCheck_Min')), minutes,0, 0);
    oraCheck = now.getTime() > startTime.getTime() && now.getTime() < endTime.getTime();
    const started = oraCheck ? 'nemindult' : 'indult';
    console.log('oracheck', `${oraCheck}(bekapcsolva es ${started})`);
    await sleep(cdUpdate);
    oraChecker();
}
async function CheckIfServerUpdated(){
    if (isTrue(GM_config.get('AntiGrepolisUpdate_Enabled'))){
        try{
            if(document.getElementsByClassName('js-window-main-container classic_window update_notification')[0].getElementsByClassName('wnd_border_t js-wnd-buttons')[0].innerText === 'Karbantartás'){
                window.location.reload();
            };
        } catch(err){}
    };
    await sleep(cdUpdate); 
    CheckIfServerUpdated();
};