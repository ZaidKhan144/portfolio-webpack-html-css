const menuIcon = document.querySelector('.hamburger-menu');
const mainNav = document.querySelector('.main-nav');
const allProjects = document.querySelectorAll('.projects > div[data-modal^=modal]');
const allModals = document.querySelectorAll('.project-card');
const closeBtn = document.querySelectorAll('.fa-times');
const hamLinks = document.querySelectorAll('.main-links a');
const projectsWrapper = document.querySelector('.projectsWrapper');

export {menuIcon, mainNav , hamLinks, allProjects, allModals, closeBtn, projectsWrapper};