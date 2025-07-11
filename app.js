const SHARE_BUTTON = document.querySelector('.share');
const SHARE_DROPDOWN = document.querySelector('.share-dropdown');
const FB_ICON = document.getElementById('image_facebook');
const TWITTER_ICON = document.getElementById('image_twitter');
const PINTEREST_ICON = document.getElementById('image_pinterest');


SHARE_BUTTON.addEventListener('click', () => {
    SHARE_DROPDOWN.classList.toggle('hidden');
});

FB_ICON.addEventListener('click', () => {
    window.open('https://www.facebook.com', '_blank', 'width=800,height=600');
});
TWITTER_ICON.addEventListener('click', () => {
    window.open('https://x.com', '_blank', 'width=800,height=600');
});
PINTEREST_ICON.addEventListener('click', () => {            
    window.open('https://pinterest.com', '_blank', 'width=800,height=600');
});