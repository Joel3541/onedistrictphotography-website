document.addEventListener('DOMContentLoaded', function() 
{
     // Set current year in footer
     document.getElementById('currentYear').textContent = new Date().getFullYear();
   
     // Navigation scroll effect
     const navbar = document.getElementById('navbar');
     const mobileMenuButton = document.querySelector('.mobile-menu-button');
     const mobileMenu = document.querySelector('.mobile-menu');
     const menuIcon = document.querySelector('.menu-icon');
     const closeIcon = document.querySelector('.close-icon');
     
     // Handle scroll events for navbar styling
     function handleScroll() {
       if (window.scrollY > 50) {
         navbar.classList.add('scrolled');
       } else {
         navbar.classList.remove('scrolled');
       }
     }
     
     window.addEventListener('scroll', handleScroll);
     handleScroll(); // Initial check
     
     // Toggle mobile menu
     mobileMenuButton.addEventListener('click', function() {
       mobileMenu.classList.toggle('active');
       menuIcon.classList.toggle('hidden');
       closeIcon.classList.toggle('hidden');
     });
     
     // Close mobile menu when clicking a link
     const mobileLinks = mobileMenu.querySelectorAll('.nav-link');
     mobileLinks.forEach(link => {
       link.addEventListener('click', function() {
         mobileMenu.classList.remove('active');
         menuIcon.classList.remove('hidden');
         closeIcon.classList.add('hidden');
       });
     });
   
     // Smooth scrolling for navigation links
     document.querySelectorAll('a[href^="#"]').forEach(anchor => {
       anchor.addEventListener('click', function(e) {
         e.preventDefault();
         const targetId = this.getAttribute('href');
         if (targetId !== '#') {
           const targetElement = document.querySelector(targetId);
           if (targetElement) {
             window.scrollTo({
               top: targetElement.offsetTop - 70, // Offset for fixed navbar
               behavior: 'smooth'
             });
           }
         }
       });
     });
   
     // Section fade-in effect
     const handleSectionFadeIn = () => {
       const sections = document.querySelectorAll('.section-fade-in');
       sections.forEach((section) => {
         const sectionTop = section.getBoundingClientRect().top;
         const sectionBottom = section.getBoundingClientRect().bottom;
         const windowHeight = window.innerHeight;
         
         if (sectionTop < windowHeight * 0.75 && sectionBottom > 0) {
           section.classList.add('visible');
         }
       });
     };
   
     window.addEventListener('scroll', handleSectionFadeIn);
     // Trigger once on load
     handleSectionFadeIn();
     
     // Portfolio filtering
     const filterButtons = document.querySelectorAll('.filter-btn');
     const portfolioItems = document.querySelectorAll('.portfolio-item');
     
     filterButtons.forEach(button => {
       button.addEventListener('click', () => {
         // Remove active class from all buttons
         filterButtons.forEach(btn => btn.classList.remove('active'));
         
         // Add active class to clicked button
         button.classList.add('active');
         
         const filterValue = button.getAttribute('data-category');
         
         // Filter portfolio items
         portfolioItems.forEach(item => {
           if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
             item.style.display = 'block';
           } else {
             item.style.display = 'none';
           }
         });
       });
     });
     
     // Scroll-to-top button
     const scrollToTopButton = document.getElementById('scrollToTop');
     
     window.addEventListener('scroll', () => {
       if (window.pageYOffset > 400) {
         scrollToTopButton.classList.add('visible');
       } else {
         scrollToTopButton.classList.remove('visible');
       }
     });
     
     scrollToTopButton.addEventListener('click', () => {
       window.scrollTo({
         top: 0,
         behavior: 'smooth'
       });
     });
     
     // Contact form submission
     const contactForm = document.getElementById('contactForm');
     const toast = document.getElementById('toast');
     
     if (contactForm) {
       contactForm.addEventListener('submit', function(e) {
         e.preventDefault();
         
         // Simulate form submission
         const formData = new FormData(contactForm);
         const formValues = {};
         
         formData.forEach((value, key) => {
           formValues[key] = value;
         });
         
         console.log('Form submitted with values:', formValues);
         
         // Show success toast
         toast.classList.add('visible');
         
         // Reset form
         contactForm.reset();
         
         // Hide toast after 3 seconds
         setTimeout(() => {
           toast.classList.remove('visible');
         }, 3000);
       });
     }
     
     // Service cards hover effect
     const serviceCards = document.querySelectorAll('.service-card');
     
     serviceCards.forEach(card => {
       card.addEventListener('mouseenter', () => {
         card.style.transform = 'translateY(-8px)';
         card.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.1)';
       });
       
       card.addEventListener('mouseleave', () => {
         card.style.transform = 'translateY(0)';
         card.style.boxShadow = 'none';
       });
     });
   });
   