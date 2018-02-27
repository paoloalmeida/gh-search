import renderStared from "../components/Starred";
import { GITHUB_USERS } from "../data/Github";

const searchInput = document.getElementById("input-search");
const starred = document.getElementById("starred-list");

export default function getStarred() {
  // join url + query from input
  let url = `${GITHUB_USERS}${searchInput.value}/starred`;

  // fetch to profile
  fetch(url)
    .then(data => data.json())
    .then(data => renderStared(data, starred))
    .then(function() {
      // enable list
      starred.style.display = "flex";
    })
    .catch(function(error) {
      console.log("Error: ", error);
    });
}
