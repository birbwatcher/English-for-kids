(()=>{"use strict";const e=[["Action (set A)","Action (set B)","Animal (set A)","Animal (set B)","Clothes","Emotions","Transport","Food"],[{word:"cry",translation:"плакать",image:"img/cry.jpg",audioSrc:"audio/cry.mp3"},{word:"dance",translation:"танцевать",image:"img/dance.jpg",audioSrc:"audio/dance.mp3"},{word:"dive",translation:"нырять",image:"img/dive.jpg",audioSrc:"audio/dive.mp3"},{word:"draw",translation:"рисовать",image:"img/draw.jpg",audioSrc:"audio/draw.mp3"},{word:"fish",translation:"ловить рыбу",image:"img/fish.jpg",audioSrc:"audio/fish.mp3"},{word:"fly",translation:"летать",image:"img/fly.jpg",audioSrc:"audio/fly.mp3"},{word:"hug",translation:"обнимать",image:"img/hug.jpg",audioSrc:"audio/hug.mp3"},{word:"jump",translation:"прыгать",image:"img/jump.jpg",audioSrc:"audio/jump.mp3"}],[{word:"open",translation:"открывать",image:"img/open.jpg",audioSrc:"audio/open.mp3"},{word:"play",translation:"играть",image:"img/play.jpg",audioSrc:"audio/play.mp3"},{word:"point",translation:"указывать",image:"img/point.jpg",audioSrc:"audio/point.mp3"},{word:"ride",translation:"ездить",image:"img/ride.jpg",audioSrc:"audio/ride.mp3"},{word:"run",translation:"бегать",image:"img/run.jpg",audioSrc:"audio/run.mp3"},{word:"sing",translation:"петь",image:"img/sing.jpg",audioSrc:"audio/sing.mp3"},{word:"skip",translation:"пропускать, прыгать",image:"img/skip.jpg",audioSrc:"audio/skip.mp3"},{word:"swim",translation:"плавать",image:"img/swim.jpg",audioSrc:"audio/swim.mp3"}],[{word:"cat",translation:"кот",image:"img/cat.jpg",audioSrc:"audio/cat.mp3"},{word:"chick",translation:"цыплёнок",image:"img/chick.jpg",audioSrc:"audio/chick.mp3"},{word:"chicken",translation:"курица",image:"img/chicken.jpg",audioSrc:"audio/chicken.mp3"},{word:"dog",translation:"собака",image:"img/dog.jpg",audioSrc:"audio/dog.mp3"},{word:"horse",translation:"лошадь",image:"img/horse.jpg",audioSrc:"audio/horse.mp3"},{word:"pig",translation:"свинья",image:"img/pig.jpg",audioSrc:"audio/pig.mp3"},{word:"rabbit",translation:"кролик",image:"img/rabbit.jpg",audioSrc:"audio/rabbit.mp3"},{word:"sheep",translation:"овца",image:"img/sheep.jpg",audioSrc:"audio/sheep.mp3"}],[{word:"bird",translation:"птица",image:"img/bird.jpg",audioSrc:"audio/bird.mp3"},{word:"fish",translation:"рыба",image:"img/fish1.jpg",audioSrc:"audio/fish.mp3"},{word:"frog",translation:"жаба",image:"img/frog.jpg",audioSrc:"audio/frog.mp3"},{word:"giraffe",translation:"жирафа",image:"img/giraffe.jpg",audioSrc:"audio/giraffe.mp3"},{word:"lion",translation:"лев",image:"img/lion.jpg",audioSrc:"audio/lion.mp3"},{word:"mouse",translation:"мышь",image:"img/mouse.jpg",audioSrc:"audio/mouse.mp3"},{word:"turtle",translation:"черепаха",image:"img/turtle.jpg",audioSrc:"audio/turtle.mp3"},{word:"dolphin",translation:"дельфин",image:"img/dolphin.jpg",audioSrc:"audio/dolphin.mp3"}],[{word:"skirt",translation:"юбка",image:"img/skirt.jpg",audioSrc:"audio/skirt.mp3"},{word:"pants",translation:"брюки",image:"img/pants.jpg",audioSrc:"audio/pants.mp3"},{word:"blouse",translation:"блузка",image:"img/blouse.jpg",audioSrc:"audio/blouse.mp3"},{word:"dress",translation:"платье",image:"img/dress.jpg",audioSrc:"audio/dress.mp3"},{word:"boot",translation:"ботинок",image:"img/boot.jpg",audioSrc:"audio/boot.mp3"},{word:"shirt",translation:"рубашка",image:"img/shirt.jpg",audioSrc:"audio/shirt.mp3"},{word:"coat",translation:"пальто",image:"img/coat.jpg",audioSrc:"audio/coat.mp3"},{word:"shoe",translation:"туфли",image:"img/shoe.jpg",audioSrc:"audio/shoe.mp3"}],[{word:"sad",translation:"грустный",image:"img/sad.jpg",audioSrc:"audio/sad.mp3"},{word:"angry",translation:"сердитый",image:"img/angry.jpg",audioSrc:"audio/angry.mp3"},{word:"happy",translation:"счастливый",image:"img/happy.jpg",audioSrc:"audio/happy.mp3"},{word:"tired",translation:"уставший",image:"img/tired.jpg",audioSrc:"audio/tired.mp3"},{word:"surprised",translation:"удивлённый",image:"img/surprised.jpg",audioSrc:"audio/surprised.mp3"},{word:"scared",translation:"испуганный",image:"img/scared.jpg",audioSrc:"audio/scared.mp3"},{word:"smile",translation:"улыбка",image:"img/smile.jpg",audioSrc:"audio/smile.mp3"},{word:"laugh",translation:"смех",image:"img/laugh.jpg",audioSrc:"audio/laugh.mp3"}],[{word:"airplane",translation:"самолёт",image:"img/airplane.jpg",audioSrc:"audio/airplane.mp3"},{word:"bicycle",translation:"велосипед",image:"img/bicycle.jpg",audioSrc:"audio/bicycle.mp3"},{word:"car",translation:"машина",image:"img/car.jpg",audioSrc:"audio/car.mp3"},{word:"bus",translation:"автобус",image:"img/bus.jpg",audioSrc:"audio/bus.mp3"},{word:"tractor",translation:"трактор",image:"img/tractor.jpg",audioSrc:"audio/tractor.mp3"},{word:"ship",translation:"корабль",image:"img/ship.jpg",audioSrc:"audio/ship.mp3"},{word:"train",translation:"поезд",image:"img/train.jpg",audioSrc:"audio/train.mp3"},{word:"motorcycle",translation:"мотоцикл",image:"img/motorcycle.jpg",audioSrc:"audio/motorcycle.mp3"}],[{word:"noodle",translation:"лапша",image:"img/noodle.jpg",audioSrc:"audio/noodle.mp3"},{word:"pancakes",translation:"блинчики",image:"img/pancakes.jpg",audioSrc:"audio/pancakes.mp3"},{word:"sandwich",translation:"бутерброд",image:"img/sandwich.jpg",audioSrc:"audio/sandwich.mp3"},{word:"milk",translation:"молоко",image:"img/milk.jpg",audioSrc:"audio/milk.mp3"},{word:"french fries",translation:"картошка фри",image:"img/french-fries.jpg",audioSrc:"audio/french-fries.mp3"},{word:"eggs",translation:"яйца",image:"img/eggs.jpg",audioSrc:"audio/eggs.mp3"},{word:"soup",translation:"суп",image:"img/soup.jpg",audioSrc:"audio/soup.mp3"},{word:"cheesecake",translation:"чизкейк",image:"img/cheesecake.jpg",audioSrc:"audio/cheesecake.mp3"}]];function t(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var a=function(){function e(t,a,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.name=t,this.image=r,this.id=a,this.arrayNum=a+1}var a,r;return a=e,r=[{key:"getCategoryName",value:function(){return this.name}},{key:"getCategoryNum",value:function(){return this.arrayNum}},{key:"getCategory",value:function(){!function(e,t,a){var r=document.createElement("div");r.classList.add("col","col-sm-6","col-lg-4","col-xl-3"),r.setAttribute("data",a);var i=document.createElement("div");i.classList.add("card","category");var o=document.createElement("img");o.classList.add("card-img-top"),o.src="./data/".concat(e);var n=document.createElement("div");n.classList.add("card-body");var c=document.createElement("h5");c.classList.add("title"),c.innerHTML=t,n.append(c),i.append(o),i.append(n),r.append(i),document.querySelector(".cards").append(r)}(this.image,this.name,this.id)}}],r&&t(a.prototype,r),Object.defineProperty(a,"prototype",{writable:!1}),e}();function r(){document.querySelector("h1").innerHTML="Train & Play",document.querySelector(".cards").innerHTML="",document.querySelector(".stars").innerHTML="";for(var t=[],r=[],i=1;i<e.length;i++)r.push(e[i][2].image);e[0].forEach((function(e,i){var o=new a(e,i,r[i]);t.push(o)})),t.forEach((function(e){return e.getCategory()})),2===document.querySelectorAll(".nav-item").length&&t.forEach((function(e){return t=e.getCategoryName(),a=e.getCategoryNum(),r=document.querySelector(".navbar-nav"),i=document.createElement("li"),(o=document.createElement("a")).innerHTML=t,i.classList.add("nav-item"),o.classList.add("nav-link"),o.setAttribute("data",a),o.setAttribute("data-bs-dismiss","offcanvas"),o.href="#",i.append(o),void r.append(i);var t,a,r,i,o}))}function i(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var o=[],n=function(){function e(t,a,r,i,o){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.word=t,this.translation=a,this.image=r,this.audioSrc="./data/".concat(i),this.id=o}var t,a;return t=e,(a=[{key:"getWord",value:function(){return this.word}},{key:"getCard",value:function(){!function(e,t,a,r){var i=document.createElement("div");i.classList.add("col","col-sm-6","col-lg-4","col-xl-3");var o=document.createElement("div");o.classList.add("card","front");var n=document.createElement("div");n.classList.add("card","back"),o.id=a;var c=document.createElement("img");c.classList.add("card-img-top");var d=document.createElement("div");d.classList.add("card-body","english");var s=document.createElement("div");s.classList.add("card-body","card-body-rotated");var l=document.createElement("h5"),u=document.createElement("h5"),m=document.createElement("img");m.classList.add("rotate"),m.src="./data/img/rotate.svg",l.innerHTML=t,u.innerHTML=r,c.src="./data/".concat(e),document.querySelector(".cards").append(i);var g=c.cloneNode(!0);o.append(c),d.append(l),d.append(m),o.append(d),n.append(g),s.append(u),n.append(s),i.append(o),i.append(n)}(this.image,this.word,this.id,this.translation)}},{key:"getSound",value:function(){new Audio(this.audioSrc).play()}}])&&i(t.prototype,a),Object.defineProperty(t,"prototype",{writable:!1}),e}();function c(t){o.length=0,document.querySelector(".cards").innerHTML="",document.querySelector(".stars").innerHTML="",e[t].forEach((function(e,t){var a=new n(e.word,e.translation,e.image,e.audioSrc,t);o.push(a)})),o.forEach((function(e){return e.getCard()})),document.querySelector("h1").innerHTML=e[0][t-1]}function d(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e,t,a){return t&&d(e.prototype,t),a&&d(e,a),Object.defineProperty(e,"prototype",{writable:!1}),e}var l=localStorage.getItem("0")?JSON.parse(localStorage.getItem("0")).slice(0):[],u=s((function e(t,a,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.word=t,this.translation=a,this.score=0,this.fail=0,this.clicks=0,this.success=0,this.category=r}));function m(){for(var t=function(t){e[t].forEach((function(a){var r=new u(a.word,a.translation,e[0][t-1]);l.push(r)}))},a=1;a<e.length;a++)t(a)}function g(t,a){for(var r,i=1;i<e.length;i++)e[i].forEach((function(e){e.word===t&&(r=new n(e.word,e.translation,e.image,e.audioSrc,a))}));return r}function p(){document.querySelector(".cards").innerHTML='<div class="table-container"><table class="table table-hover">\n  <thead>\n    <tr class="table-dark">\n      <th scope="col">English</th>\n      <th scope="col">Russian</th>\n      <th scope="col">Success</th>\n      <th scope="col">Fail</th>\n      <th scope="col">Success Score</th>\n      <th scope="col">Clicks</th>\n      <th scope="col">Category</th>\n    </tr>\n  </thead>\n  <tbody>\n  </tbody>\n</table></div>',document.querySelector(".form-check-input").checked=!1;var e=document.querySelector(".table-container"),t=document.createElement("div");t.classList.add("reset-repeat-plate","d-inline-flex","justify-content-center"),e.append(t);var a=document.createElement("button"),r=document.createElement("button");t.append(a),t.append(r),a.classList.add("btn","btn-primary","btn-lg","repeat"),r.classList.add("btn","btn-primary","btn-lg","reset"),a.innerHTML="Repeat difficult words",r.innerHTML="Reset",l.forEach((function(e){var t=document.querySelector("tbody"),a=document.createElement("tr");a.classList.add("table-active");var r=document.createElement("td"),i=document.createElement("td"),o=document.createElement("td"),n=document.createElement("td"),c=document.createElement("td"),d=document.createElement("td"),s=document.createElement("td");r.innerHTML=e.word,i.innerHTML=e.translation,o.innerHTML=e.score,n.innerHTML=e.fail,c.innerHTML=0===Number(o.innerHTML)&&0===Number(n.innerHTML)?"0%":"".concat(Math.round(100*Number(e.score)/(Number(e.score)+Number(e.fail))),"%"),d.innerHTML=e.clicks,s.innerHTML=e.category,a.append(r),a.append(i),a.append(o),a.append(n),a.append(c),a.append(d),a.append(s),t.append(a)})),function(){document.querySelector("h1").innerHTML="Score",document.querySelector(".stars").innerHTML="",document.querySelector(".progress").classList.add("hidden");var e=document.querySelector("table"),t=document.querySelector("tbody"),a=Array.from(t.rows),r=!0;e.addEventListener("click",(function(i){var o=i.target.cellIndex;"TH"===i.target.nodeName&&(!0===r?(r=!1,a.sort((function(e,t){var a=e.cells[o].innerHTML,r=t.cells[o].innerHTML;return Number(e.cells[o].innerHTML)?a-r:a>r?1:-1}))):!1===r&&(r=!0,a.sort((function(e,t){var a=e.cells[o].innerHTML,r=t.cells[o].innerHTML;return Number(e.cells[o].innerHTML)?r-a:a>r?-1:1}))),e.removeChild(t),a.forEach((function(e){return t.appendChild(e)})),e.appendChild(t))})),localStorage.setItem("0",JSON.stringify(l))}(),t.addEventListener("click",(function(e){if(e.target.classList.contains("repeat")){var t=l.slice(0).sort((function(e,t){return e.fail<t.fail?1:-1}));o.length=0;for(var a=0;a<8;a++)0!==t[a].fail&&o.push(g(t[a].word,a));document.querySelector(".form-check-input").checked=!1,document.querySelector(".cards").innerHTML="",o.forEach((function(e){return e.getCard()})),0===o.length&&(document.querySelector(".cards").innerHTML='<div class="d-flex justify-content-center no-words"><h2>There is no difficult words ;)</h2></div>')}e.target.classList.contains("reset")&&(localStorage.clear(),l.length=0,m(),p())}))}function h(e){var t;return l.forEach((function(a){a.word===e&&(t=a)})),t}localStorage.getItem("0")||m();var f,y,S=[],v=!1,w={rightAns:0,mistakes:0},L=document.querySelector(".cards"),b=document.querySelector(".progress-bar"),j=new bootstrap.Modal(document.getElementById("exampleModal"));function k(){v=!1,w.rightAns=0,w.mistakes=0}function E(e){var t=document.createElement("img"),a=document.querySelectorAll(".star");t.src=e?"./data/img/star-win.svg":"./data/img/star.svg",t.classList.add("star"),8===a.length&&document.querySelectorAll(".star")[0].remove(),document.querySelector(".stars").append(t)}document.querySelector(".game").addEventListener("click",(function(e){e.target.classList.contains("play")&&(v||(document.querySelector(".play").innerHTML="Repeat word",v=!0,f=S.pop(),y=o.length),f.getSound())})),L.addEventListener("click",(function(e){if(v&&e.target!==document.querySelector(".row.cards")){var t=e.target.parentNode.id?Number(e.target.parentNode.id):Number(e.target.id);o[t].word!==f.word&&(e.target.classList.contains("solved")||(h(f.word).fail+=1,w.mistakes+=1,new Audio("./data/audio/error.mp3").play(),E(!1))),o[t].word===f.word&&(e.target.classList.add("solved"),e.target.classList.contains("front")&&e.target.firstChild.classList.add("solved"),e.target.classList.contains("card-img-top")&&e.target.parentNode.classList.add("solved"),y-=1,h(f.word).score+=1,w.rightAns+=1,E(!0),f=S.pop(),new Audio("./data/audio/correct.mp3").play(),b.style.width="".concat((a=b.style.width,Number(a.replace(/[^0-9.-]+/g,""))+12.5),"%"),0===y&&(document.querySelector(".play").classList.add("hidden"),document.querySelector(".progress").classList.add("hidden"),document.querySelector(".form-check-input").checked=!1,v=!1,document.querySelector(".form-check-input").innerHTML="Play",document.querySelector(".switch").classList.remove("switch-on"),j.show(),0===w.mistakes&&(document.querySelector(".result-img").src="./data/img/success.jpg",new Audio("./data/audio/success.mp3").play()),w.mistakes>0&&(document.querySelector(".result-img").src="./data/img/failure.jpg",new Audio("./data/audio/failure.mp3").play()),document.querySelector(".mistakes").innerHTML="Mistakes ".concat(w.mistakes),r()),f&&f.getSound())}var a;localStorage.setItem("0",JSON.stringify(l))}));var q=document.querySelector(".form-check-input");function T(){var e;S=(e=o,e.slice(0).sort((function(){return Math.random()-.5}))).slice(0),b.style.width="0%";var t=document.querySelector(".switch"),a=document.querySelectorAll(".english");q.checked&&(t.innerHTML="Train",t.classList.add("switch-on"),a.forEach((function(e){return e.classList.add("hidden")})),document.querySelectorAll(".front").forEach((function(e){return e.classList.remove("flipped")})),document.querySelectorAll(".back").forEach((function(e){return e.classList.remove("unflipped")})),0!==document.querySelectorAll(".category").length||0!==document.querySelectorAll("table").length||document.querySelector(".no-words")||(document.querySelector(".play").classList.remove("hidden"),document.querySelector(".progress").classList.remove("hidden"))),q.checked||(k(),t.innerHTML="Play",t.classList.remove("switch-on"),a.forEach((function(e){return e.classList.remove("hidden")})),document.querySelector(".play").classList.add("hidden"),document.querySelector(".progress").classList.add("hidden"),document.querySelector(".play").innerHTML="Play",document.querySelectorAll(".solved").forEach((function(e){return e.classList.remove("solved")})),document.querySelector(".stars").innerHTML="")}q.onclick=function(){T()};var M=document.querySelector(".cards"),H=document.querySelector(".offcanvas-body");r(),q.checked=!1,k(),T(),M.addEventListener("click",(function(e){var t=document.querySelectorAll(".front"),a=document.querySelectorAll(".back");if(e.target.classList.contains("rotate")){var r=e.target.parentNode.parentNode.id;t[r].classList.add("flipped"),a[r].classList.add("unflipped")}if(e.target.parentElement.classList.contains("front")){var i=e.target.parentElement.id;q.checked||(o[i].getSound(),h(o[i].getWord()).clicks+=1)}if(e.target.parentElement.classList.contains("category")){var n=Number(e.target.parentNode.parentNode.getAttribute("data"))+1;c(n),q.checked=!1,T();var d=document.querySelectorAll(".nav-link");d.forEach((function(e){e.classList.remove("active")})),d[n+1].classList.add("active")}})),M.addEventListener("mouseout",(function(e){var t=document.querySelectorAll(".front"),a=document.querySelectorAll(".back");if(null!==e.target.firstChild){var r=e.target.firstChild;null!==e.target.firstChild.nextSibling&&e.target.firstChild.nextSibling.classList.contains("back")&&(t[r.id].classList.remove("flipped"),a[r.id].classList.remove("unflipped"))}})),H.addEventListener("click",(function(e){if(e.target.classList.contains("nav-link")){document.querySelectorAll(".active").forEach((function(e){return e.classList.remove("active")})),e.target.classList.add("active");var t=Number(e.target.getAttribute("data"));k(),q.checked=!1,T(),t<0&&p(),t>0&&c(t),0===t&&r()}}))})();