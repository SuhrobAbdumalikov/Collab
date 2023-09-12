import * as selectors from './selectors.js'
selectors.dropDownMenuLi.addEventListener("mouseover",() => {
    selectors.dropDownMenu.style.display = 'flex';
})
window.addEventListener("mouseout",() => {
    selectors.dropDownMenu.style.display = 'none';
})
