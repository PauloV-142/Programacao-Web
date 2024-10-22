const searchInput = document.querySelector("#search-input");
const listItems = document.querySelectorAll("li");
/**
 ** Convert NodeList of listItems to array
 **/
const listElements = [...listItems];

/**
 ** Define function for searching
 **/
const search = function(event) {
  const searchValue = this.value.toLowerCase();
  listElements.forEach(listElement => {
    const stringFound =
      listElement.innerText.toLowerCase().indexOf(searchValue) !== -1;
    if (stringFound) {
      /**
       ** Make list item visible
       **/
      listElement.style.display = "block";
    } else {
      /**
       ** Make list item invisible
       **/
      listElement.style.display = "none";
    }
  });
};

/**
 ** Listen for input event on #search-input
 ** and trigger search function.
 **/
searchInput.addEventListener("input", search);