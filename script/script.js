// Button Variable Selectors
const bars = document.querySelector('.fa-bars');
const nav_links = document.querySelector('#nav_links');
const nav_btn = document.querySelector('#nav_btn');
const home_link = document.querySelector('#home_link');
const about_us_link = document.querySelector('#about_us_link');
const products_link = document.querySelector('#products_link');
const contact_us_link = document.querySelector('#contact_us_link');
const trash = document.querySelector('#trash');
const flash_message = document.querySelector('#flash_message');

// Section Selectors
const home = document.querySelector('#home');
const about_us = document.querySelector('#about_us');
const products = document.querySelector('#products');
const footer = document.querySelector('#footer');

bars.addEventListener('click', () => {
    nav_links.classList.toggle('hidden');
    nav_btn.classList.toggle('hidden');
});

home_link.addEventListener('click', () => home.scrollIntoView({ behavior: 'smooth' }));

about_us_link.addEventListener('click', () => about_us.scrollIntoView({ behavior: 'smooth' }));

products_link.addEventListener('click', () => products.scrollIntoView({ behavior: 'smooth' }));

contact_us_link.addEventListener('click', () => footer.scrollIntoView({ behavior: 'smooth' }));

trash.addEventListener('click', () => flash_message.classList.add('hidden'));