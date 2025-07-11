const SHARE_BTN = document.getElementById('share-icon');
const SHARE_PANEL = document.querySelector('.share');
const FACEBOOK_ICON = document.getElementById('facebook-icon');
const TWITTER_ICON = document.getElementById('twitter-icon');
const PINTEREST_ICON = document.getElementById('pinterest-icon');

SHARE_BTN.addEventListener('click', () => {
    SHARE_PANEL.classList.toggle('hidden');
});

FACEBOOK_ICON.addEventListener('click', () => {
    window.open('https://www.facebook.com', '_blank', 'width=800,height=600');
});

TWITTER_ICON.addEventListener('click', () => {
    window.open('https://www.x.com', '_blank', 'width=800,height=600');
}); 

PINTEREST_ICON.addEventListener('click', () => {    
    window.open('https://pinterest.com', '_blank', 'width=800,height=600');
});