var container = document.getElementById("container")
var btn = document.getElementById("btn")
function divClicked(e) {
  alert('Div clicked!');
}
function btnClicked(e) {
  alert('Button clicked!');
}
var capturing = true;
container.addEventListener('click', divClicked, capturing);
btn.addEventListener('click', btnClicked, capturing);