import renderProfile from '../components/Profile';
import showHideButtons from '../utils/ShowHideButtons';
import { GITHUB_USERS } from "../data/Github";

const searchInput = document.getElementById("input-search");
const profile = document.getElementById('gh-profile');

export default function getProfile() {
  // join url + query from input
  let url = `${GITHUB_USERS}${searchInput.value}`;

  // fetch to profile
  fetch(url)
    .then(data => data.json())
    .then(data => renderProfile(data, profile))
    .then(function(data) {
      console.log(data);
      showHideButtons('show');
    })
    .catch(function(error) {
      console.log("Erro: ", error);
    });
}
