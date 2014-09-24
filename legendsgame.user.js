// ==Userscript==
// @name legendsgame_bot
// @description бот для легенд крови
// @author soloromail@gmail.com (Deimon, Старовер)
// @include http://legendsgame.ru/*
// ==/Userscript==
(function(){
var i=0;
var tx='';
speed=100;
/*
Поиск текста на странице
пример: legendsFindText("Победа");
*/
function legendsFindText(tx) {if(document.body.innerHTML.match(tx)) {return true;} else {return false;}}


/*
Поиск ссылок на странице
пример: legendsFindLink("Бой");
*/
function legendsFindLink(tx) {l=0;for(i=0;i<document.links.length;i++){if(document.links[i].text.match(tx)) {l=document.links[i].href; break;}} if(l!=0) {return l;} else {return false;}}

/*
Переход по ссылке с интервалом

*/
function legendsLink(tx, sec) {if(tx!="") {setTimeout(function(){location.href=tx;}, sec);}}

/*
Проверка значения хранилища
*/
function legendsIsStorage(name, tx) {if(localStorage.getItem(name)==tx) { return true; } else { return false;}}

/*
Назначение для хранилища
*/
function legendsSet(name, tx) {if(localStorage.setItem(name, tx)) { return true; } else { return false;}}
function legendsI(name, tx) {document.getElementById(name).innerHTML=tx;}

function legendsClick(tx, sec) {for(var q=0;q<document.forms.length;q++){for(var y=0;y<document.forms[q].elements.length;y++){if (document.forms[q].elements[y].value.match(tx)){var go = document.forms[q].elements[y];setTimeout(function(){go.click();}, sec);}}}}
function legends(a, z) {var num=(Math.floor(Math.random() * (a - z)) + z); return num;}

//if(legendsFindText("Победа")) legendsLink(legendsFindLink("Выйти из боя"), 1000);
//if(legendsFindLink("Главная")) alert(legendsFindLink("Главная"));
/*
1 - lpvp1
2 - lpvp0
3 - fish
4 - wood
5 - heal
7 - pve1
8 - pve0
  - pes
9 - tav
0 - issl
*/
function legendsStart() {
f = document.body.innerHTML;
d = '<style>.ddt {background: #ffffff; margin: 1px 0; color: #000000; width: 200px; height: 20px;}</style><div id="glass" style="opacity: 0.5; width: 200px; min-height: 400px; background: #000000; position: fixed;  left: 0; top: 0; "><div style="text-align: center; background: #ffffff; color: #000000; border-bottom: 2px solid #aa0000;">За сегодня</div><div class="ddt">Побед в PVP: <b id="lpvp1">0</b></div><div class="ddt">Поражений в PVP: <b id="lpvp0">0</b></div><div class="ddt">Поймано рыбы: <b id="fish">0</b></div><div class="ddt">Срублено деревьев: <b id="wood">0</b></div><div class="ddt">Сварено зелий: <b id="heal">0</b></div><div class="ddt">Побед в PvE: <b id="pve1">0</b></div><div class="ddt">Поражений в PvE: <b id="pve0">0</b></div><div class="ddt">Побед в пещере: <b id="pes">0</b></div><div class="ddt">До задания: <b id="tav">0</b></div><div class="ddt">До исследования: <b id="issl">0</b></div><div class="ddt">ПРОГРАММА: <b id="program">0</b></div></div>';
document.body.innerHTML=f+d;
//document.getElementsByTagName("div")[0].style.position="absolute";
//document.getElementsByTagName("div")[0].style.right="0";
//document.getElementsByTagName("div")[0].style.width='500px';
//document.getElementsByTagName("body")[0].style.background='url("http:\\localhost/22.gif")';
}

legendsStart();
legendsI("program", localStorage.getItem('program'));
legendsI("pve1", localStorage.getItem('pve'));
legendsI("pve0", localStorage.getItem('pve1'));
legendsI("heal", localStorage.getItem('ele'));
legendsI("fish", localStorage.getItem('fish'));
legendsI("pes", localStorage.getItem('pes'));
legendsI("wood", localStorage.getItem('wood'));
//document.getElementsByTagName("html")[0].innerHTML="<style>body {background: url('http://legendsgame.ru/img/clans/av_shop/22.gif');}</style>";
//Кнопочки
document.onkeydown=function(e) {
e=e||event;
m = localStorage.getItem('program');
//PvE
if(e.keyCode==49) {if(m=="откл"||m=="") {localStorage.setItem('program', 'PvE'); localStorage.setItem('ft', 1); legendsI("program", "PvE");} else {localStorage.setItem('program', "откл");legendsI("program", "откл");}} //Вкл бот 1
//Рыбалка
if(e.keyCode==50) {if(m=="откл"||m=="") {localStorage.setItem('program', 'рыбак'); localStorage.setItem('fh', 1); legendsI("program", "рыбак");} else {localStorage.setItem('program', "откл");legendsI("program", "откл");}}
//Лес
if(e.keyCode==51) {if(m=="откл"||m=="") {localStorage.setItem('program', 'лесоруб');  legendsI("program", "лесоруб");} else {localStorage.setItem('program', "откл");legendsI("program", "откл");}}
//Пещера
if(e.keyCode==52) {if(m=="откл"||m=="") {localStorage.setItem('program', 'пещера');  legendsI("program", "пещера");} else {localStorage.setItem('program', "откл");legendsI("program", "откл");}}
//Арена
if(e.keyCode==53) {if(m=="откл"||m=="") {localStorage.setItem('bot_e', 'арена');  legendsI("program", "арена");} else {localStorage.setItem('program', "откл");legendsI("program", "откл");}}
}
m = localStorage.getItem('program');
//ПвЕ
if(m == "PvE") {
ft = localStorage.getItem('ft'); //Файтер
if(ft == 1) {
//При победе
if(legendsFindText("Победа")) {
pve = localStorage.getItem('pve');
+pve++;
if(pve=="") {localStorage.setItem('pve', 0);}
if(pve>=0) {localStorage.setItem('pve', pve); legendsI("pve1", pve);}
if(legendsFindText("Ваш инвентарь заполнен")) {
localStorage.setItem('ft', 0);
}
legendsLink(legendsFindLink("Выйти из боя"), 1000/speed);
}
//При поражении
if(legendsFindText("Поражение")) {
pve1 = localStorage.getItem('pve1');
+pve1++;
if(pve1=="") {localStorage.setItem('pve1', 0);}
if(pve1>=0) {localStorage.setItem('pve1', pve1); legendsI("pve0", pve1);}
legendsLink(legendsFindLink("Выйти из боя"), 1000/speed);
}
//При атаке
if(legendsFindText("Сражение")) {
legendsClick("Атаковать", 500/speed);
}
//В лесу
if(legendsFindText("Лес")) {
legendsLink(legendsFindLink("Поиск монстра"), 500/speed);
}
//В поиске монстра
if(legendsFindText("Вы нашли")) {
if(legendsFindText("Атаковать")||legendsFindText("Прислужник Архонта")||legendsFindText("Гигантский муравей")||legendsFindText("Туатар")||legendsFindText("Призыватель")||legendsFindText("Демон Крови")||legendsFindText("Тиран")||legendsFindText("Воин Смерти")) {
legendsLink(legendsFindLink("Напасть"), 300/speed);
} else {
legendsLink(legendsFindLink("Вернуться"), 300/speed);
}
}

//На площади
if(legendsFindText("Площадь")) {
legendsLink(legendsFindLink("Войти в лес"), 300/speed);
}



//end fight
} else {
if(ft == 0) {
//В лесу
if(legendsFindText("Лес")) {
legendsLink(legendsFindLink("Хижина"), 300/speed);
}
//В хижине
if(legendsFindText("Хижина")) {
legendsLink(legendsFindLink("Сварить эликсир"), 300/speed);
}
//На площади
if(legendsFindText("Площадь")) {
legendsLink(legendsFindLink("Войти в лес"), 300/speed);
}
//Проверить
if(legendsFindText("Хижина")) {
legendsLink(legendsFindLink("Обновить"), 15000);
}
//Завершить
if(legendsFindText("Хижина")) {
if(legendsFindText("Эликсир успешно создан")) {
ele = localStorage.getItem('ele');
+ele++;
if(ele=="") {localStorage.setItem('ele', 0);}
if(ele>=0) {localStorage.setItem('ele', ele); legendsI("heal", ele);}
legendsLink(legendsFindLink("Завершить"), 300/speed);
}
}
//К бою
if(legendsFindText("Хижина")) {
if(legendsFindText("Недостаточно лечебных трав")) {
localStorage.setItem('ft', 1);
legendsLink(legendsFindLink("Вернуться"), 300/speed);
}
}

}
} //зелья


}
//End
//ПвЕ
if(m == "рыбак") {


fh = localStorage.getItem('fh');
if(fh == 1) {
if(legendsFindText("Рыбка поймана")) {
fish = localStorage.getItem('fish');
+fish++;
if(fish=="") {localStorage.setItem('fish', 0);}
if(fish>=0) {localStorage.setItem('fish', fish); legendsI("fish", fish);}
if(!legendsFindLink("Закинуть удочку")) {
localStorage.setItem('fh', 0);
legendsLink(legendsFindLink("Вернуться"), 300/speed);
}
}
if(legendsFindText("Рыбка соскочила")) {
if(!legendsFindLink("Закинуть удочку")) {
localStorage.setItem('fh', 0);
legendsLink(legendsFindLink("Вернуться"), 300/speed);
}
}
//На площади
if(legendsFindText("Площадь")) {
legendsLink(legendsFindLink("Войти в лес"), 300/speed);
}
//В лесу
if(legendsFindText("Лес")) {
legendsLink(legendsFindLink("Озеро"), 300/speed);
}
//На озере
if(legendsFindText("Озеро")) {
legendsLink(legendsFindLink("Закинуть удочку"), 300/speed);
}
if(legendsFindText("Озеро")) {
if(legendsFindText("Возьмите удочку")) {
legendsLink(legendsFindLink("Персонаж"), 300/speed);
}
}
if(legendsFindText("Ловим рыбку")) {
legendsLink(legendsFindLink("Обновить"), 30000);
}

if(legendsFindText("попалось")) {
legendsLink(legendsFindLink("Вытянуть"), 300/speed);
}


if(legendsFindText("Озеро")) {
if(legendsFindText("У вас закончилась наживка")) {
localStorage.setItem('fh', 2);
legendsLink(legendsFindLink("Купить наживку"), 300/speed);
}
}

} 
if(fh == 0) {
//На озере
if(legendsFindText("Озеро")) {
legendsLink(legendsFindLink("Продать рыбу"), 300/speed);
}

if(legendsFindText("Озеро")) {
if(legendsFindText("Один рыбный улов")) {
legendsLink(legendsFindLink("Продать за"), 300/speed);
}
}

if(legendsFindText("Озеро")) {
if(legendsFindText("Нет рыбных уловов")) {
localStorage.setItem('fh', 1);
legendsLink(legendsFindLink("Вернуться"), 300/speed);
}
}

}
if(fh == 2) {

if(legendsFindText("Озеро")) {
if(legendsFindText("Сколько наживок")) {
legendsLink(legendsFindLink("Купить 100"), 300/speed);
}
}
if(legendsFindText("Озеро")) {
if(legendsFindText("Вы купили")) {
localStorage.setItem('fh', 0);
legendsLink(legendsFindLink("Вернуться"), 300/speed);
}
}
}
}

if(m == "пещера") {
if(legendsFindText("Площадь")) {
legendsLink(legendsFindLink("Пещера"), 300/speed);
}if(legendsFindText("Площадь")) {
legendsLink(legendsFindLink("Пещера"), 300/speed);
}

if(legendsFindText("Пещера")) {
if(legendsFindText("Текущие группы")) {
legendsLink(legendsFindLink("Создать группу"), 300/speed);
}
}

if(legendsFindText("Пещера")) {
if(legendsFindText("Выберите необходимого монстра")) {
legendsLink(legendsFindLink("Химера"), 300/speed);
}
}

if(legendsFindText("Пещера")) {
if(legendsFindText("Атака на")) {
legendsLink(legendsFindLink("Обновить"), 5000);
legendsLink(legendsFindLink("Начать бой"), 5000/speed);
}
}

if(legendsFindText("Сражение")) {
if(legendsFindText("Боевой чат")) {
legendsClick("Атаковать", 2000);
}
}

if(legendsFindText("Победа")) {
if(legendsFindText("Ваша команда победила")) {
pes = localStorage.getItem('pes');
+pes++;
if(pes=="") {localStorage.setItem('pes', 0);}
if(pes>=0) {localStorage.setItem('pes', pes); legendsI("pes", pes);}
legendsLink(legendsFindLink("Выйти из боя"), 5000/speed);
}
}


}
if(m == "лесоруб") {
if(legendsFindText("Площадь")) {
legendsLink(legendsFindLink("Войти в лес"), 300/speed);
}
if(legendsFindText("Лес")) {
if(legendsFindText("мрачная тишина")) {
legendsLink(legendsFindLink("Поиск ресурсов"), 5000/speed);
}
}

if(legendsFindText("Лес")) {
if(legendsFindText("Вы нашли")) {
legendsLink(legendsFindLink("Срубить"), 500/speed);
}
}

if(legendsFindText("Лес")) {
if(legendsFindText("Рубим дерево")) {
legendsLink(legendsFindLink("Обновить"), 15000);
}
}
if(legendsFindText("Лес")) {
if(legendsFindText("Вы срубили")) {
wood = localStorage.getItem('wood');
+wood++;
if(wood=="") {localStorage.setItem('wood', 0);}
if(wood>=0) {localStorage.setItem('wood', wood); legendsI("wood", wood);}
legendsLink(legendsFindLink("Закончить работу"), 500/speed);
}
}
if(legendsFindText("Лес")) {
if(legendsFindText("Вы можете рубить деревья в лесу")) {
legendsLink(legendsFindLink("Вернуться"), 500/speed);
}
}
}
if(legendsFindText("Please contact to administration")) window.history.go(-1);

legendsLink(legendsFindLink("legendsgame"), 2000);
}
)();
