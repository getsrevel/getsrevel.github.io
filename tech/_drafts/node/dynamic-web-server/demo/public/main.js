document.getElementById("onBtn").onclick = sendOnCommand;
document.getElementById("offBtn").onclick = sendOffCommand;

function sendOnCommand() {
  document.getElementById("demo").innerHTML = Date();
  fetch('/motor/on')
}

function sendOffCommand() {
  document.getElementById("demo").innerHTML = Date();
  fetch('/motor/off')
}
