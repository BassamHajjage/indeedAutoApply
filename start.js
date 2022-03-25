/* const whatField = document.getElementById("text-input-what");
whatField.value = "javascript";

const whereField = document.getElementById("text-input-where");
whereField.value = "remote";

findJobButton.click(); */
const startForm = document.getElementsByClassName("jobsearch-Yosegi")[0];

const indeedAutoApply = document.createElement("a");
indeedAutoApply.classList.add("yosegi-InlineWhatWhere-primaryButton");
indeedAutoApply.innerHTML = `<a href="https://www.indeed.com/jobs?q=javascript&l=remote&explvl=entry_level&sort=date">Indeed Auto Apply</a>`;
// indeedAutoApply.style.backgroundColor = "red";

startForm.appendChild(indeedAutoApply);
