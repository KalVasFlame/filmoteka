import refs from './refs';
import apiService from './apiService';
import galleryHbs from '../templates/gallery-list.hbs';

refs.nextBtn.addEventListener('click', onNextBtnClick);
refs.prevBtn.addEventListener('click', onPrevBtnClick);
refs.currentBtn.addEventListener('click', () => {
  window.scrollTo({
  top: 0,
  left: 0,
  behavior: 'smooth'
});
})
showCurrentPage();

function onNextBtnClick() {
  if (apiService.galleryStatus === "ByTrend") {
    onTrendNextBtnClick()
  }
  if (apiService.galleryStatus === "BySearchQuery") {
    onSearchNextBtnClick()
  }
  if (apiService.galleryStatus === "ByPopular") {
    onPopularNextBtnClick()
  }
  if (apiService.galleryStatus === "ByTopRated") {
    onTopRatedNextBtnClick()
  }
  showCurrentPage();
}

function onPrevBtnClick() {
  if (apiService.galleryStatus === "ByTrend") {
     onTrendPrevBtnClick()
  }
  if (apiService.galleryStatus === "BySearchQuery") {
     onSearchPrevBtnClick()
  }
  if (apiService.galleryStatus === "ByPopular") {
     onPopularPrevBtnClick()
  }
  if (apiService.galleryStatus === "ByTopRated") {
     onTopRatedPrevBtnClick()
  }
  showCurrentPage();
}

function onTrendPrevBtnClick() {
    apiService.decrementPage()
    apiService.getByTrend().then(( results ) => {
    refs.gallery.innerHTML = galleryHbs(results);
    })
  window.scrollTo({
  top: 0,
  left: 0,
  behavior: 'smooth'
});
}

function onTrendNextBtnClick() {
    apiService.incrementPage()
    apiService.getByTrend().then(( results ) => {
    refs.gallery.innerHTML = galleryHbs(results);
  })
  window.scrollTo({
  top: 0,
  left: 0,
  behavior: 'smooth'
});
 }

function onSearchPrevBtnClick() {
    apiService.decrementPage()
    apiService.getBySearchQuery().then(( results ) => {
    refs.gallery.innerHTML = galleryHbs(results);
  })
  window.scrollTo({
  top: 0,
  left: 0,
  behavior: 'smooth'
});
}

function onSearchNextBtnClick() {
    apiService.incrementPage()
    apiService.getBySearchQuery().then(( results ) => {
    refs.gallery.innerHTML = galleryHbs(results);
    })
  window.scrollTo({
  top: 0,
  left: 0,
  behavior: 'smooth'
});
  
}

function onPopularPrevBtnClick() {
    apiService.decrementPage()
    apiService.getByPopular().then(( results ) => {
    refs.gallery.innerHTML = galleryHbs(results);
    });
  window.scrollTo({
  top: 0,
  left: 0,
  behavior: 'smooth'
});
}

function onPopularNextBtnClick() {
    apiService.incrementPage()
    apiService.getByPopular().then(( results ) => {
    refs.gallery.innerHTML = galleryHbs(results);
    });
  window.scrollTo({
  top: 0,
  left: 0,
  behavior: 'smooth'
});
}
function onTopRatedPrevBtnClick() {
    apiService.decrementPage()
    apiService.getByTopRated().then(( results ) => {
    refs.gallery.innerHTML = galleryHbs(results);
    });
  window.scrollTo({
  top: 0,
  left: 0,
  behavior: 'smooth'
});
}

function onTopRatedNextBtnClick() {
    apiService.incrementPage()
    apiService.getByTopRated().then(( results ) => {
    refs.gallery.innerHTML = galleryHbs(results);
    });
  window.scrollTo({
  top: 0,
  left: 0,
  behavior: 'smooth'
});
}

function showCurrentPage() {
  refs.nextBtn.firstElementChild.textContent = " " + (apiService.page + 1);
  refs.prevBtn.firstElementChild.textContent = " " + (apiService.page - 1);
  refs.currentBtn.firstElementChild.textContent = " " + apiService.page;
}
export { showCurrentPage };