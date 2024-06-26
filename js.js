
function Ex(Ex) {
  document.querySelector('.apparent').classList.remove('apparent');
  document.getElementById(Ex).classList.add('apparent');
}


/*Ex1*/
function addclass() {
  let str = document.getElementById('classinput');
  document.getElementById('text').classList.add(str.value);
}

/*Ex2*/

function togglevisibility(str) {
  document.getElementById(str).classList.toggle('hidden');
}

/*Ex3*/

function clickme() {
  let str = document.getElementById('click');
  str.classList.add('clicked');
  str.textContent = 'clicked';
}