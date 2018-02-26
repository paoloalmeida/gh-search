import getRepos from '../data/ReposService';
import clean from '../utils/CleanSearch';

const btnRepos = document.getElementById('btn-repos');

// trigger to search
export default function listRepos() {
    btnRepos.addEventListener('click', (e) => {
    e.preventDefault();
    clean();
    getRepos();
  });
}
