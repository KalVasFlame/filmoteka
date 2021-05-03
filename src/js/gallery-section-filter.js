import refs from './refs';
import apiService from './apiService';
import galleryHbs from '../templates/gallery-list.hbs';
import { toggleBtnActive } from './library-helpers';
import { showCurrentPage } from './galeery-pagination'

refs.btnPopular.addEventListener('click', onClickBtnPopular);
refs.btnTopRated.addEventListener('click', onClickBtnTopRated);

function onClickBtnPopular(e) {
  apiService.page = 1;
  showCurrentPage();
  toggleBtnActive(e);
  apiService.getByPopular().then(( results ) => {
    refs.gallery.innerHTML = galleryHbs(results);
  });
}

function onClickBtnTopRated(e) {
  apiService.page = 1;
  showCurrentPage();
   toggleBtnActive(e);
  apiService.getByTopRated().then(( results ) => {
    refs.gallery.innerHTML = galleryHbs(results);
  });
}
 export { onClickBtnPopular, onClickBtnTopRated }