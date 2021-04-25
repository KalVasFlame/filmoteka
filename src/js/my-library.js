import { ui, uiConfig } from './firebase';
import { openCloseModal } from './registration-helpers';
import { toggleCurrentLink, changeGalleryToMyLibrary, myLibraryRendering } from './library-helpers';
import refs from './refs';

refs.myLibrary.addEventListener('click', (e) => {
  e.preventDefault();
  if (refs.registrationBtn.textContent === 'Sign in') {
    openCloseModal();
    ui.start('#firebaseui-auth-container', uiConfig);
    return;
  }
  changeGalleryToMyLibrary(e);
  toggleCurrentLink(e);
  myLibraryRendering('/watched');
});

