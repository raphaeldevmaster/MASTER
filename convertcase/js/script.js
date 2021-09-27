function upperCase() {
  let e = document.getElementById("textArea").value;
  document.getElementById("textArea").value = e.toUpperCase();
}

function lowerCase() {
  let e = document.getElementById("textArea").value;
  document.getElementById("textArea").value = e.toLowerCase();
}

function sentenceCase() {
  let eE = document.getElementById("textArea").value;
  document.getElementById("textArea").value = eE.toLowerCase();
  let rg = /(^\w{1}|\.\s*\w{1})/gi;
  let e = document.getElementById("textArea").value;
  document.getElementById("textArea").value = e.replace(rg, function(toReplace) {
      return toReplace.toUpperCase();
  });
}

function titleCase() {
  let eE = document.getElementById("textArea").value;
  document.getElementById("textArea").value = eE.toLowerCase();
  let e = document.getElementById("textArea").value;
  document.getElementById("textArea").value = e.replace(/(^\w{1})|(\s{1}\w{1})/g, match => match.toUpperCase());
}

function copyText() {
  if ("" !== document.getElementById("textArea").value) {
      let e = document.querySelector("#textArea");
      e.select(), document.execCommand("copy"), (document.getElementById("log").innerHTML = "Text successfully copied!"), (timeout = setTimeout(function() {
          document.getElementById("log").innerHTML = "";
      }, 3e3));
  }
}

function clearText() {
  document.getElementById("textArea").value = "";
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