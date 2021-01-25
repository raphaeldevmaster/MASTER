
function upperCase() {
  let text = document.getElementById("textArea").value;
  document.getElementById("textArea2").innerHTML = text.toUpperCase();
};



function lowerCase() {
  let text = document.getElementById("textArea").value;
	document.getElementById("textArea2").innerHTML = text.toLowerCase();
  };


  let btn = document.querySelector('#copy');

  btn.addEventListener('click', function(e) {
  
    let textArea = document.querySelector('#textArea2');
    textArea.select();
    document.execCommand('copy');
    document.getElementById('log').innerHTML += 'Text successfully copied!';

  });
  