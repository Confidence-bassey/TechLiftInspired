// populating the course catalog
const courses = [
    { title: 'Introduction to Programming', description: 'Learn the basics of programming with Python.' },
    { title: 'Web Development Fundamentals', description: 'Understand the fundamentals of HTML, CSS, and JavaScript.' },
    // More courses to be added
  ];
  
  const courseCatalog = document.querySelector('.course-catalog');
  
  courses.forEach(course => {
    const courseElement = document.createElement('div');
    courseElement.classList.add('course');
    courseElement.innerHTML = `
      <h3>${course.title}</h3>
      <p>${course.description}</p>
    `;
    courseCatalog.appendChild(courseElement);
  });
  
  //contact form submission
  const contactForm = document.getElementById('contact-form');
  contactForm.addEventListener('submit', function(event) {
    event.preventDefault();
    // Form submission would be handled here
    alert('Thank you for your message!');
  });
  
    // Placeholder function for mentor matching
    function matchMentor() {
        // Code to be added
        alert('Mentor matching feature coming soon!');
    }

    function openChat() {
        
      alert('Live chat support will be available soon!');
  }



