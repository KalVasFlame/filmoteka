import refs from './refs';
import apiService from './apiService';
import galleryHbs from '../templates/gallery-list.hbs';
import { showCurrentPage } from './galeery-pagination';

const onSearchSubmit = e => {
  e.preventDefault();
  apiService.page = 1;
  showCurrentPage();
  apiService.searchQuery = e.target[0].value;
  if (apiService.searchQuery === '') {
    return;
  }
  e.target[0].value = '';
  apiService.getBySearchQuery().then(( results ) => {
    refs.gallery.innerHTML = galleryHbs(results);
  });
};
refs.headerSearchForm.addEventListener('submit', onSearchSubmit);
