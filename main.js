// SEARCH BUTTON ON CLICK MAKE SEARCH ICON ORANGE AND BOUNCE
document.getElementById('search-button').onclick = function(){document.getElementById('search-icon').classList.toggle('orange');document.getElementById('search-icon').classList.toggle('bounce')}
// MOON BUTTON ON CLICKED ADD LIGHT CLASS TO HTML
document.getElementById('moon').onclick = function(){document.documentElement.classList.toggle('light')}
// BARS BUTTON ON CLICK --FOR NOW ALERT - LATER ADD FUNC
document.getElementById('bars').onclick = function(){alert('افتح الخيارات')}