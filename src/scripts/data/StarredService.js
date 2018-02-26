import renderStared from '../components/Starred';
import { GITHUB_USERS } from "../data/Github";

const searchInput = document.getElementById('input-search');
const starred = document.getElementById('starred-list');

export default function getStarred() {
  // join url + query from input
  let url = `${GITHUB_USERS}${searchInput.value}/starred` ;
  // https://api.github.com/repos/restlet/restlet-framework-java/stargazers?per_page=10

  // fetch to profile
  fetch(url)
    .then(data => data.json())
    .then(data => renderStared(data, starred))
    .catch(function(error) {
      console.log('Error: ', error);
    });
}
