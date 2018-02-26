import getStarred from '../data/StarredService';
import clean from '../utils/CleanSearch';

const btnStarred = document.getElementById('btn-starred');

export default function listStarred() {
  btnStarred.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('Funfou');
    clean();
    getStarred();
  });
}
