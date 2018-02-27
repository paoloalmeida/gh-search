import getStarred from '../data/StarredService';
import clean from '../utils/CleanSearch';

const btnStarred = document.getElementById('btn-starred');
const repos = document.getElementById('repos-list');

export default function listStarred() {
  btnStarred.addEventListener('click', (e) => {
    e.preventDefault();
    repos.style.display = "none";
    clean();
    getStarred();
  });
}
