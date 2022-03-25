const startButton = document.getElementById("start");


/*
Ahoy minoy. Author here.

I'll admit, I have no idea what I'm doing when it comes to writing Chrome extensions,
as this is an entirely new playing field for me.

The actual meat and potatoes of the code so far isn't much, namely because it doesn't seem to function
as expected. I'm not sure if I'm missing something, or if I'm just not getting it right.
*/
startButton.addEventListener("click", async () => {
  let tab = await chrome.tabs.query({ active: true, currentWindow: true });


  /*
  This block here is supposed to execute changeWhat on the current tab.
  */
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: changeWhat,
  });
});


/*
When executed, changeWhat will update the "what" field on Indeed to contain the text "javascript".
*/
function changeWhat() {
  const whatField = document.getElementById("text-input-what");
  whatField.value = "javascript";
}
