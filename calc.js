let history_1 = 0;
let history_2 = 0;
let history_3 = 0;

let jel = "szia";
let szam_1 = 0;
let szam_2 = 0;

let eredmeny = 0;
let y = 0;

//board function

function input_to_szam() {
  szam_1 = document.getElementById("szam_1").value;
  document.getElementById("szam_1").value = "";
}

function c() {
  document.getElementById("szam_1").value = "";
  let szam_1 = 0;
  let szam_2 = 0;
}

function vesszo() {
  document.getElementById("szam_1").value += ".";
}

function adas() {
  document.getElementById("szam_1").value += "+";
}
function vonas() {
  document.getElementById("szam_1").value += "-";
}
function x() {
  document.getElementById("szam_1").value += "*";
}
function oszt() {
  document.getElementById("szam_1").value += "/";
}
function start() {
  document.getElementById("szam_1").value += "(";
}
function end() {
  document.getElementById("szam_1").value += ")";
}
function pow() {
  jel = "pow";
  input_to_szam();
}
function szazalek() {
  jel = "%";
  input_to_szam();
}
function sqrt() {
  jel = "sqrt";
  input_to_szam();
  eredmeny = Math.sqrt(parseInt(szam_1));
  let eredmeny_kerekitve = Math.round(eredmeny * 10000) / 10000;
  document.getElementById("szam_1").value = eredmeny_kerekitve;
  reFreshHistory();
}

function zero() {
  if (document.getElementById("szam_1").value != "") {
    document.getElementById("szam_1").value += 0;
  }
}
function one() {
  document.getElementById("szam_1").value += 1;
}
function two() {
  document.getElementById("szam_1").value += 2;
}
function three() {
  document.getElementById("szam_1").value += 3;
}
function four() {
  document.getElementById("szam_1").value += 4;
}
function five() {
  document.getElementById("szam_1").value += 5;
}
function six() {
  document.getElementById("szam_1").value += 6;
}
function seven() {
  document.getElementById("szam_1").value += 7;
}
function eight() {
  document.getElementById("szam_1").value += 8;
}
function nine() {
  document.getElementById("szam_1").value += 9;
}
function del() {
  let szam = document.getElementById("szam_1").value;
  let szoveg = szam.toString();
  let result = szoveg.substring(0, szoveg.length - 1);
  szam = result;
  document.getElementById("szam_1").value = szam;
}

//datas for history and math

//math

function szamolas() {
  if (jel == "%") {
    szam_2 = document.getElementById("szam_1").value;
    eredmeny = (parseInt(szam_1) * 100) / parseInt(szam_2);
    document.getElementById("szam_1").value =
      Math.round(eredmeny * 1000) / 1000 + "%";
  } else if (jel == "pow") {
    szam_2 = document.getElementById("szam_1").value;
    eredmeny = Math.pow(szam_1, szam_2);
    document.getElementById("szam_1").value = Math.round(eredmeny * 100) / 100;
  } else {
    szam_1 = document.getElementById("szam_1").value;
    eredmeny = eval(szam_1);
    document.getElementById("szam_1").value = Math.round(eredmeny * 100) / 100;
  }
  reFreshHistory();
}

//history_management

function reFreshHistory() {
  if (history_mode == true) {
    y++;
    if (jel == "szia") {
      if (y > 2) {
        history_3 = history_2;
        document.getElementById("his_3").innerHTML = history_3;
        let his_3 = document.getElementById("his_3");
        his_3.classList.add("his_3");
        his_3.onclick = function () {
          document.getElementById("szam_1").value = history_3;
        };
      }

      if (y > 1) {
        history_2 = history_1;
        document.getElementById("his_2").innerHTML = history_2;
        let his_2 = document.getElementById("his_2");
        his_2.classList.add("his_2");
        his_2.onclick = function () {
          document.getElementById("szam_1").value = history_2;
        };
      }
      if (y > 0) {
        history_1 = szam_1 + " = " + eredmeny;
        document.getElementById("his_1").innerHTML = history_1;
        let his_1 = document.getElementById("his_1");
        his_1.classList.add("his_1");
        his_1.onclick = function () {
          document.getElementById("szam_1").value = history_1;
        };
      }
    }
    if (jel == "sqrt") {
      if (y > 2) {
        history_3 = history_2;
        document.getElementById("his_3").innerHTML = history_3;
        let his_3 = document.getElementById("his_3");
        his_3.classList.add("his_3");
        his_3.onclick = function () {
          document.getElementById("szam_1").value = history_3;
        };
      }

      if (y > 1) {
        history_2 = history_1;
        document.getElementById("his_2").innerHTML = history_2;
        let his_2 = document.getElementById("his_2");
        his_2.classList.add("his_2");
        his_2.onclick = function () {
          document.getElementById("szam_1").value = history_2;
        };
      }

      if (y > 0) {
        let szam_1Value = document.getElementById("szam_1").value;
        history_1 = "√" + szam_1 + " = " + szam_1Value;
        document.getElementById("his_1").innerHTML = history_1;
        let his_1 = document.getElementById("his_1");
        his_1.classList.add("his_1");
        his_1.onclick = function () {
          document.getElementById("szam_1").value = history_1;
          jel = "szia";
        };
      }
    }
  }
  jel = "szia";
}

function open_setting() {
  let main = document.getElementById("main");
  main.classList.add("main");
  document.getElementById("main").style.display = "none";
  document.getElementById("setting_page").style.display = "initial";
}
function back() {
  document.getElementById("main").style.display = "initial";
  document.getElementById("setting_page").style.display = "none";
}

let light = false;

function light_mode() {
  if (light == true) {
    document.getElementById("screen").style.backgroundColor = "black";
    document.getElementById("board").style.backgroundColor = "black";
    document.getElementById("main").style.color = "aliceblue";
    document.getElementById("szam_1").style.color = "aliceblue";
    document.body.style.backgroundColor = "black";
    document.getElementById("light").src =
      "images\false.svg";
    light = false;
  } else {
    document.getElementById("screen").style.backgroundColor = "white";
    document.getElementById("board").style.backgroundColor = "white";
    document.getElementById("main").style.color = "black";
    document.body.style.backgroundColor = "white";
    document.getElementById("szam_1").style.color = "black";
    document.getElementById("light").src =
      "images\true.svg";
    light = true;
  }
}

let fancy_font = false;

function font() {
  if (fancy_font == true) {
    document.getElementById("szam_1").style.fontFamily = "Arial ";
    document.getElementById("screen").style.fontFamily = "Arial";
    document.body.style.fontFamily = "Arial";
    document.getElementById("font").src =
      "images\false.svg";

    fancy_font = false;
  } else {
    document.getElementById("szam_1").style.fontFamily = "monospace";
    document.getElementById("screen").style.fontFamily = "monospace";
    document.body.style.fontFamily = "monospace ";
    document.getElementById("font").src =
      "images\true.svg";
    fancy_font = true;
  }
}

let history_mode = false;

function history() {
  if (history_mode == true) {
    document.getElementById("his_img").src =
      "images\false.svg";
    document.getElementById("his_1").style.display = "none";
    document.getElementById("his_2").style.display = "none";
    document.getElementById("his_3").style.display = "none";
    history_mode = false;
  } else {
    document.getElementById("his_img").src =
      "images\true.svg";
    document.getElementById("his_1").style.display = "initial";
    document.getElementById("his_2").style.display = "initial";
    document.getElementById("his_3").style.display = "initial";
    history_mode = true;
  }
}
