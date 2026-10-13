function sendAction(action) {
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, { action: action });
  });
}

document.getElementById("increaseFont").onclick = () => sendAction("increaseFont");
document.getElementById("decreaseFont").onclick = () => sendAction("decreaseFont");
document.getElementById("highContrast").onclick = () => sendAction("highContrast");
document.getElementById("readText").onclick = () => sendAction("readText");
