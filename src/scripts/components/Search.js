import getProfile from '../data/ProfileService';
import clean from '../utils/CleanSearch';

const searchForm = document.getElementById('search-form');

// trigger to search
export default function search() {
  searchForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // clean previous searchs
    clean();

    // get profile function
    getProfile();
  });
}
