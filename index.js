// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h2>таблица умножения</h2>`;

var s = '<br>' + '<table border cellpadding =6 >';
appDiv.innerHTML += s;

for (var i = 1; i < 10; i++) {
  s += '<tr>';
  for (var j = 1; j < 10; j++) {
  s += '<td>  <center> ' + i*j + ' </td>';
}
s += '</tr>';
}
appDiv.innerHTML += s;

