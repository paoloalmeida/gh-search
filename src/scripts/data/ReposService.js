import { GITHUB_USERS } from "../data/Github";
import renderRepos from '../components/Repos';

const searchInput = document.getElementById('input-search');
const repos = document.getElementById('repos-list');

export default function getRepos() {
  // join url + query from input
  let url = `${GITHUB_USERS}${searchInput.value}/repos` ;

  // fetch to profile
  fetch(url)
    .then(data => data.json())
    .then(data => renderRepos(data, repos))
    .then(function() {
      // enable list
      repos.style.display = "flex";
    })
    .catch(function(error) {
      console.log('Error: ', error);
    });
}
