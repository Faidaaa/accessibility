let fontSize = 16;
let contrastEnabled = false;

chrome.runtime.onMessage.addListener((request) => {
  
  if (request.action === "increaseFont") {
    fontSize += 2;
    document.body.style.fontSize = fontSize + "px";
  }

  if (request.action === "decreaseFont") {
    fontSize -= 2;
    document.body.style.fontSize = fontSize + "px";
  }

  if (request.action === "highContrast") {
    contrastEnabled = !contrastEnabled;
    document.body.style.filter = contrastEnabled ? "contrast(200%)" : "none";
  }

  if (request.action === "readText") {
    let selectedText = window.getSelection().toString();
    if (selectedText) {
      let speech = new SpeechSynthesisUtterance(selectedText);
      speech.rate = 1;
      speech.volume = 1;
      speech.pitch = 1;
      window.speechSynthesis.speak(speech);
    } else {
      alert("Please select text to read aloud.");
    }
  }

});
