/*-------------------------------
  *
  * Write your JavaScript code here.
  *
  * The mocked search data is available using the searchData async method, e.g:
  *   searchData("QUERY").then(results => ...)
  *
  * plan:
  * when user types in -> make call to searchData with input
  * map through results and create a list item for each one
  * ------------------------------*/
var suggestionsList = document.querySelector('.results')
var input = document.getElementById('input')

async function handleInputChange(input) {
  const movies = await searchData(input);
  //close all previously created lists
  // closeAllLists();
  const titles = await movies.map(movie => movie.title)
  await titles.sort()
  console.log(titles)
  //remove preexisting list
  removeItems();

  for (let title of titles) {

    if(typeof title === 'string' && title.toUpperCase().startsWith(input.value.toUpperCase()) && input.value != "") {
      //create list item
      let listItem = document.createElement("li");
      listItem.classList.add("list-items");
      listItem.style.cursor = "pointer";
      listItem.setAttribute("onclick", "displayTitle('" + title + "')");
      //display matched letters in bold
      let titleMatch = "<b>" + title.substr(0, input.value.length) + "</b>";
      titleMatch += title.substr(input.value.length)
      console.log('title match', titleMatch)
      //display the title match in the list
      listItem.innerHTML = word;
      document.querySelector(".list").appendChild(listItem)
    }
  }

}

function removeItems() {
  let items = document.querySelectorAll(".list-items")
  items.forEach(item => item.remove())
}

function displayTitle(value) {
  input.value = value;
  removeItems()
}




// function closeAllLists(el) {
//   const items = document.querySelector('.results li')
// }

