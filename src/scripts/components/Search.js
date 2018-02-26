import getProfile from '../data/ProfileService';
import clean from '../utils/CleanSearch';

const searchForm = document.getElementById('search-form');

// trigger to search and clean previous search
export default function search() {
  searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    clean();
    getProfile();
  });
}
