const navbar = document.getElementById("navbar");
const result1 = document.getElementById("result1");
const pcuserinput = document.getElementById("pcuserinput");
const consolelog = document.getElementById("consolelog");
const consoleelement = document.getElementById("console");
const popupparent = document.getElementById("popupparent");
const popuptext1 = document.getElementById("popuptext1");
const popupimg = document.getElementById("popupimg");
const btnclose = document.getElementById("btnclose");
const langbtn = document.getElementById("langbtn");
const langselection = document.getElementById("langselection");
const centerbtn = document.getElementById("centerbtn");
const btnleft = document.getElementById("btnleft");
const btnright = document.getElementById("btnright");
const body = document.getElementById("body");
const mainbody = document.getElementById("mainbody");
const logoimg = document.getElementById("logoimg");
const topbanner = document.getElementById("topbanner");
const readyness1 = document.getElementById("readyness1");
const readyness2 = document.getElementById("readyness2");
const indicator = document.getElementById("indicator");
const anaahmed = document.getElementById("anaahmed");
const stat0 = document.getElementById("stat0");
const stat1 = document.getElementById("stat1");
const stat2 = document.getElementById("stat2");
const title1 = document.getElementById("title1");
const title2 = document.getElementById("title2");
const lfttext = document.getElementById("lfttext");
const rittext = document.getElementById("rittext");
const h1 = document.querySelector("#ahleen h1");
const LeftText = document.getElementById("LeftText");
const RightText = document.getElementById("RightText");

let lang;
if (window.localStorage.getItem("language")) {
  lang = window.localStorage.getItem("language");
} else {
  lang = "en";
}
language();

navbar.classList.add("slide-in-top");
let help =
  "<pre>[navigation]     ls         cd           clear  <br>[folio]          skills     neofetch     tools <br>[other]          favgames   ostafandy    lorem    time</pre>";
let timetimes = 0;
let log =
  '<span class="redtext"> root </span> <span class="pcuser"> @ahmeds-pc </span> help' +
  help;
result1.innerHTML = log;
let text;
let chance = Math.floor(Math.random() * 10);

let status = "free";

if (status == "free") {
} else if (status == "studying") {
  readyness1.style.color = "#DBB666";
  indicator.style.backgroundColor = "#682E2B";
  readyness2.style.color = "#DBB666";
  readyness2.innerHTML = "مشغول <br>بالمذاكرة";
}

if (chance > 2) {
  text = h1.textContent;
} else {
  text = "صلى عليه";
}

 if (lang == "en") {
      langselection.classList.remove("englishlang");
    langselection.classList.add("arabiclang");
  
    
  } else {
langselection.classList.remove("arabiclang");
    langselection.classList.add("englishlang");
  }


h1.textContent = "‎";
let textL = 0;

setTimeout(() => {
  typeWriter();
}, 600);

pcuserinput.onchange = () => {
  let usrinput = pcuserinput.value;
  if (usrinput == "lorem") {
    terminallog(
      "<span class=redtext> Lorem ipsum dolor sit amet</span> consectetur adipiscing elit. Phasellus ex diam, vestibulum rutrum porttitor non, gravida sed metus. Cras elementum pulvinar risus, sit amet ultricies nisl tempor eu. Morbi tempus urna viverra felis vulputate tristique. Praesent eu mauris id eros venenatis posuere. Praesent ac mollis nulla. Nullam pharetra fringill ",
    );
  } else if (usrinput == "testat") {
    terminallog("this is a testat ");
  } else if (usrinput == "clear") {
    log = "";
    result1.innerHTML = log;
    pcuserinput.value = "";
  } else if (usrinput == "help") {
    terminallog();
  } else if (usrinput == "ostafandy") {
    ostafandy();
    terminallog(
      '<span class="redtext">صوصو صوصو  صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو  صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو</span>',
    );
  } else if (usrinput == "neofetch") {
    terminallog(`<br><pre style="color: #c9cedb; font-family: 'VT323', monospace; font-size: 1.5rem; line-height: 1.0; margin: 0;"><span style="color: #0081ff;">    ██████████████ </span>             visitor@ahmeds-pc
<span style="color: #0081ff;">    ██████████████ </span>             -----------------
<span style="color: #0081ff;">               ████ </span>                 OS: Zorin OS 18 x86_64
<span style="color: #0081ff;">             ████   </span>                 Host: aashaker.neocities.org
<span style="color: #0081ff;">           ████     </span>                 Kernel: 6.8.0-generic
<span style="color: #0081ff;">         ████       </span>                 Uptime: 17 years (Student Mode)
<span style="color: #0081ff;">    ██████████████ </span>          Shell: ask nicely or pay lol
<span style="color: #0081ff;">    ██████████████ </span>          Resolution:على لله</pre>`);
  } 
  else if(usrinput == "language"){
    if (lang == "en") {
      langselection.classList.remove("englishlang");
    langselection.classList.add("arabiclang");
  
    
  } else {
langselection.classList.remove("arabiclang");
    langselection.classList.add("englishlang");
  }
        terminallog(`language changed to ${lang}`);
           language();
      if (lang == "en") {
    lang = "ar";
  } else {
    lang = "en";
  }
 
  }
  else if (usrinput == "time") {
    timetimes++;
    if (timetimes == 1) {
      terminallog(`now(${timetimes}/7)`);
    } else if (timetimes == 2) {
      terminallog(`its still now(${timetimes}/7)`);
    } else if (timetimes == 3) {
      terminallog(
        `why dont you use your time since you care so much about it(${timetimes}/7)`,
      );
    } else if (timetimes == 7) {
      terminallog(`its just gonna repeat stupid`);
    } else {
      terminallog(
        `just go live your life with this time instead of wasting mine(${timetimes}/7)`,
      );
    }
  } else if (usrinput == "ls") {
    terminallog(
      "<pre>about_me.txt         contact.linktre         feet_pics/<br>secret_folder/</pre>",
    );
  } else if (usrinput == "cd feet_pics") {
    terminallog(
      "<span style='font-size:200px;text-align:center; color:#DBB666;'>weirdo</span>",
    );
    setTimeout(() => {
      window.open(
        "https://www.google.com/search?sxsrf=ANbL-n4o_nFm6rcAwSiTE-9kEXfzJ40uaQ:1780429167613&udm=2&q=spicy+parrot+feet+pics&dpr=1",
        "_blank",
      );
    }, 1000);
  } else if (usrinput == "cd") {
    terminallog("<span class=redtext>no directory selected</span>");
  } else if (usrinput == "cd about_me.txt") {
    terminallog("idk what im supposed to put here sooooooo<br>[Insert bio]");
  } else if (usrinput == "cd secret_folder") {
    terminallog("who even are you to access thse things (≖_≖ )");
  }

  //<a href=""><img src="" width="300" height="auto"></a>
  else if (usrinput == "favgames") {
    terminallog(
      '<div style="display:flex; justify-content:space-evenly; align-items:center; flex-wrap:wrap;"> <a href="https://www.celestegame.com/"> <img src="https://upload.wikimedia.org/wikipedia/commons/b/bd/Celeste_video_game_logo.png" width="192" height="auto"> </a><a href="https://www.hollowknight.com/"> <img src="https://static.wikia.nocookie.net/versus-compendium/images/8/88/Hollow_Knight_Logo.png/revision/latest?cb=20190222170212" width="192" height="auto"></a><a href="https://deltarune.com/"> <img src="https://deltarune.com/assets/images/logo.png" width="192" height="auto"></a> <a href="https://terraria.org/"> <img src="https://terraria.org/TerrariaLogoOG.png" width="192" height="auto"></a> </div>',
    );
  }
else {
    terminallog("undefined command");
  }
}
;

langbtn.onclick = () => {
  if (lang == "en") {
    langselection.classList.remove("arabiclang");
    langselection.classList.add("englishlang");
    lang = "ar";
  } else {
    langselection.classList.remove("englishlang");
    langselection.classList.add("arabiclang");
    lang = "en";
  }
  shine.style.display="block";
    shine.classList.add("shineanim");

    setTimeout(() => {
          language();
  }, 250);
  setTimeout(() => {
    shine.classList.remove("shineanim");
      shine.style.display="none";
  }, 500);
};



if (window.innerWidth<=480){
    navselections.style.display='none';
    navbar.style.justifyContent='space-around';
    navbar.style.gap='50%';
    navpopup.innerHTML=navselections.innerHTML;
}
else{
  hamburbur.style.display="none";
}
let shown=0;
hamburbur.onclick=()=>{
  if (shown!=0){
  navpopup.classList.remove('navshow');
  navpopup.classList.add('navhide');

  shown=0
  }
  else{
    shown=1
  navpopup.classList.remove('navhide');
  navpopup.classList.add('navshow');

  }
}







function language() {
  if (lang == "ar") {
lang1.style.color="#ffffff00";
lang2.style.color="#bdb4ac";
    h1.innerHTML = "اهلين اهلين";
    anaahmed.innerHTML = "انا احمد";
    h1.style.borderRight="none";
    h1.style.borderLeft="8px solid #662e2b ";

    document.querySelector("#Status").style.flexDirection = "row";
    readyness1.innerHTML = "الحالة";
    readyness2.innerHTML = "جاهز<br/>للشغل";

    stat0.innerHTML = "طالب فى المرحلة الثانوية و واخد البرمجة كهواية";
    stat1.innerHTML = "hackathon 0 ,gamejam الى الان شاركة فى 0";
    stat2.innerHTML =
      'وليا عموما 2 مشاريع تقدر تشوفها <a href="/projects/">حالا</a>';
    StatusText.style.alignItems = "end";
    stat0.style.textAlign='end'


    title1.innerHTML = ",,,ولكن";
    lfttext.innerHTML =
      "راجل مليش فى كلام البكش اوى و عموما بحب اطبق الحاجات اكتر من انى اتفرجر على حد بيعمل الحاجه هو";
    title2.innerHTML = ":الطبيعى ان الناس بتكتب";
    rittext.innerHTML =
      "انا فلان الفلانى راجل جامد جدا واخد كورس كذا و كذا و خبرة خرليارسنة و لازم تشغلنى معاك";
    document.querySelectorAll("#textarea p")[1].style.textAlign = "end";
    document.querySelectorAll("#textarea p")[0].style.textAlign = "end";
    document.querySelectorAll("#textarea h3")[1].style.textAlign = "end";
    document.querySelectorAll("#textarea h3")[0].style.textAlign = "end";
    LeftText.style.width = "60%";
    RightText.style.width = "30%";
    LeftText.dataset.desktopWidth = "60%";
    RightText.dataset.desktopWidth = "30%";


    btnleft.innerHTML = "فرد<br/>عضلات";
    centerbtn.innerHTML = "المشاريع";
    centerbtn.style.fontSize = "4rem";
    btnright.innerHTML = "معرفش لسه";
  } else {

lang1.style.color="#c7cdd4";
lang2.style.color="#ffffff00";
    h1.innerHTML = "Howdy";
    anaahmed.innerHTML = "I'm Ahmed";
    h1.style.borderRight="8px solid #662e2b";
    h1.style.borderLeft="none";

    document.querySelector("#Status").style.flexDirection = "row-reverse";
    readyness1.innerHTML = "Status";
    readyness2.innerHTML = "Ready<br>for work";
    stat0.innerHTML = "High school student who's taking programming as a hobby.";
        stat0.style.textAlign='start'
    stat1.innerHTML = "Hackathon 0, gamejam participation 0 so far.";
    stat2.innerHTML =
      'I also have 2 projects you can see <a href="/projects/">now</a>';
          StatusText.style.alignItems = "start";
    stat0.style.textAlign='start'

    document.querySelectorAll("#textarea p")[1].style.textAlign = "start";
    document.querySelectorAll("#textarea p")[0].style.textAlign = "start";
    document.querySelectorAll("#textarea h3")[1].style.textAlign = "start";
    document.querySelectorAll("#textarea h3")[0].style.textAlign = "start";
    LeftText.style.width = "30%";
    RightText.style.width = "60%";
    LeftText.dataset.desktopWidth = "30%";
    RightText.dataset.desktopWidth = "60%";

    title1.innerHTML = " What people write:";
    lfttext.innerHTML =
      "I am so-and-so, very talented, took course x and y, with experience, you must hire me.";

    title2.innerHTML = ",,,but";
    rittext.innerHTML =
      " I don't like talking too much and I prefer applying things more than watching someone do them.";
    btnleft.innerHTML = "Flexs";
    centerbtn.innerHTML = "Projects";
    centerbtn.style.fontSize = "3rem";
    btnright.innerHTML = "no idea";
  }
  window.localStorage.setItem("language", lang);
}

btnclose.onclick = () => {
  popupparent.style.display = "none";
};

centerbtn.ondblclick = () => {
  window.location.href = "projects/index.html";
};
centerbtn.onclick = () => {
  window.location.href = "projects/index.html";
};
let lastScrollTop;

window.onscroll = function() {
  const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
  setTimeout(function() { lastScrollTop = window.pageYOffset; }, 50);

  if (currentScroll > lastScrollTop) {
    navbar.classList.remove("slide-in-top");
    navbar.classList.add("slide-out-top");
  } else if (currentScroll < lastScrollTop) {
    navbar.classList.remove("slide-out-top");
    navbar.classList.add("slide-in-top");
  }
};

function fixWidths() {
  const small = window.innerWidth <= 820;
  const line2 = document.getElementById('line2');
  if (small) {
    LeftText.style.width = '100%';
    RightText.style.width = '100%';
    if (line2) {
      line2.style.width = '100%';
      line2.style.height = '5px';
      line2.style.margin = '2rem 0 0';
    }
    return;
  }

  // restore what we set in language()
  LeftText.style.width = LeftText.dataset.desktopWidth || '';
  RightText.style.width = RightText.dataset.desktopWidth || '';
  if (line2) {
    line2.style.width = '5px';
    line2.style.removeProperty('height');
    line2.style.removeProperty('margin');
  }
}

function typeWriter() {
  if (textL < text.length) {
    h1.textContent += text.charAt(textL);
    textL++;
    setTimeout(typeWriter, 150);
  }
}

function terminallog(logtext) {
  let usrinput1 = pcuserinput.value;

  log =
    log +
    '<span class="pcuser">visitor@ahmeds-pc : ~ $</span>' +
    usrinput1 +
    "<br>" +
    logtext +
    "<br>";

  consolelog.scrollTop = consolelog.scrollHeight;
  pcuserinput.value = "";
  result1.innerHTML = log;
  consolelog.scrollTop = consolelog.scrollHeight;
}

function ostafandy() {
  console.log("ostafandy called, popupparent=", popupparent);
  popupparent.style.display = "flex";
  popuptext1.innerHTML =
    " صوصو صوصو  صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو  صوصو صوص صوصو صوصو  صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو  صوصو صوصو ";

  popupimg.src = "monster-bord.png";
  popupimg.style.width = "300px";
  popupimg.style.height = "auto";
  popupimg.style.display = "block";
  h1.innerHTML = "صوصو صوصو";
  h1.style.color = "#DBB666";
  anaahmed.style.color = "#DBB666";
  anaahmed.innerHTML = "صوص صوصوصو";
  indicator.style.backgroundColor = "#682E2B";
  readyness1.style.color = "#DBB666";
  readyness1.innerHTML = "صوصو";
  readyness2.style.color = "#DBB666";
  readyness2.innerHTML = "صوصو صو";
  stat0.style.color = "#DBB666";
  stat0.innerHTML =
    "صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو";
  stat1.style.color = "#DBB666";
  stat1.innerHTML =
    "صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو";
  stat2.style.color = "#DBB666";
  stat2.innerHTML =
    "صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو";
  title1.style.color = "#DBB666";
  title2.innerHTML = "صوصو صو صوصو";
  title2.style.color = "#DBB666";
  title1.innerHTML = "،،،،،،صوصو";
  lfttext.style.color = "#DBB666";
  lfttext.innerHTML =
    "صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو";
  rittext.style.color = "#DBB666";
  rittext.innerHTML =
    "صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو صوصو";
  consoleelement.style.backgroundColor = "#454545";

  btnleft.style.backgroundColor = "#DBB666";
  btnleft.style.color = "#ffffff";
  btnleft.innerHTML = "صوص";

  btnright.style.backgroundColor = "#DBB666";
  btnright.style.color = "#ffffff";
  btnright.innerHTML = "صوو";
  centerbtn.style.backgroundColor = "#DBB666";
  centerbtn.style.color = "#ffffff";
  centerbtn.innerHTML = "صوصو";

  body.style.backgroundColor = "#ffffff";
  mainbody.style.backgroundColor = "#ffffff";
  body.style.backgroundImage = "url(leaf.svg)";
  body.style.backgroundSize = "156px";
  body.style.backgroundRepeat = "repeat";
  logoimg.src = "ostafandylogo.png";
  topbanner.style.backgroundImage = "url(wavebkg.svg)";
  topbanner.style.backgroundSize = "156px";
  topbanner.style.backgroundRepeat = "repeat";
  topbanner.style.backgroundColor = "#ffffff";
}

window.onresize = fixWidths;
window.onload = fixWidths;
