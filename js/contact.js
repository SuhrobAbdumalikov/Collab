import * as selectors from './selectors.js'
selectors.sendContactBtn.addEventListener('click',(e) => {
    e.preventDefault();
    selectors.name.value = '';
    selectors.email.value = '';
    selectors.message.value = '';
})