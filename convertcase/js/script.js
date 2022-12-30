function upperCase() {
  let e = document.getElementById("textArea").value;
  document.getElementById("textArea").value = e.toUpperCase()
}

function lowerCase() {
  let e = document.getElementById("textArea").value;
  document.getElementById("textArea").value = e.toLowerCase()
}

function sentenceCase() {
  let e = document.getElementById("textArea").value;
  document.getElementById("textArea").value = e.toLowerCase();
  let t = document.getElementById("textArea").value;
  document.getElementById("textArea").value = t.replace(/(^\w{1}|\.\s*\w{1})/gi, function(e) {
      return e.toUpperCase()
  })
}

function capitalizedCase() {
  let e = document.getElementById("textArea").value;
  document.getElementById("textArea").value = e.toLowerCase();
  let t = document.getElementById("textArea").value;
  document.getElementById("textArea").value = t.replace(/(^\w{1})|(\s{1}\w{1})/g, e => e.toUpperCase())
}

function alternatingCase() {
  let e = document.getElementById("textArea").value;
  document.getElementById("textArea").value = e.split("").map((e, t) => t % 2 == 0 ? e.toLowerCase() : e.toUpperCase()).join("")
}

function inverseCase() {
  let e = document.getElementById("textArea").value;
  document.getElementById("textArea").value = e.split("").reverse().join("")
}

function copyText() {
  if ("" !== document.getElementById("textArea").value) {
      document.querySelector("#textArea").select(), document.execCommand("copy"), document.getElementById("log").innerHTML = "Text successfully copied!", timeout = setTimeout(function() {
          document.getElementById("log").innerHTML = ""
      }, 3e3)
  }
}

function downloadText(e, t) {
  var n = new Blob([e], {
          type: "text/plain"
      }),
      a = document.createElement("a");
  a.download = t, a.innerHTML = "Download File", null != window.webkitURL ? a.href = window.webkitURL.createObjectURL(n) : (a.href = window.URL.createObjectURL(n), a.onclick = destroyClickedElement, a.style.display = "none", document.body.appendChild(a)), a.click()
}

function clearText() {
  document.getElementById("textArea").value = ""
}

function wct(e) {
  var t = e.match(/\S+/g);
  return {
      charactersNoSpaces: e.replace(/\s+/g, "").length,
      characters: e.length,
      words: t ? t.length : 0,
      lines: e.split(/\r*\n/).length
  }
}
var textarea = document.getElementById("textArea"),
  result = document.getElementById("result");
textarea.addEventListener("input", function() {
  var e = wct(this.value);
  result.innerHTML = `\n   Characters (no spaces):  ${e.charactersNoSpaces} | \n   Characters (white spaces): ${e.characters} |\n   Words: ${e.words} |\n   Lines: ${e.lines}\n  `
});

// Create cookie
function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

// Delete cookie
function deleteCookie(cname) {
  const d = new Date();
  d.setTime(d.getTime() + (24*60*60*1000));
  let expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=;" + expires + ";path=/";
}

// Read cookie
function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
          c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
          return c.substring(name.length, c.length);
      }
  }
  return "";
}

// Set cookie consent
function acceptCookieConsent(){
  deleteCookie('user_cookie_consent');
  setCookie('user_cookie_consent', 1, 30);
  document.getElementById("cookieNotice").style.display = "none";
}

let cookie_consent = getCookie("user_cookie_consent");
if(cookie_consent != ""){
    document.getElementById("cookieNotice").style.display = "none";
}else{
    document.getElementById("cookieNotice").style.display = "block";
}