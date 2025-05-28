document.getElementById('channel-form').addEventListener('submit', function(e) {
    e.preventDefault();
    

});

document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const service = document.getElementById('service').value;
    
    
    
    alert(`Thank you, ${name}! Your ${service} request has been received. We'll contact you at ${email} shortly.`);
    
    
    this.reset();
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});


window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.2)';
    } else {
        header.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.1)';
    }
});



window.addEventListener('load', function() {
    setTimeout(function() {
        document.getElementById('loader').style.opacity = '0';
        document.getElementById('content').style.display = 'block';
        
        
        setTimeout(function() {
            document.getElementById('loader').style.display = 'none';
        }, 500);
    }, 2000); 
});
