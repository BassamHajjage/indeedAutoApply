const startButton = document.getElementById("start");

startButton.addEventListener("click", async () => {
  let tab = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: changeWhat,
  });
});

function changeWhat() {
  const whatField = document.getElementById("text-input-what");
  whatField.value = "javascript";
}
