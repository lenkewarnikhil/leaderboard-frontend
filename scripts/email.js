document.addEventListener('DOMContentLoaded', function() {
    
    emailjs.init("ee7-cZm5JkTILHdMN");
    
    // Get the form element
    const form = document.getElementById('contact-form');
    
    // Add submit event listener
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission
        
        // Show loading state
        const button = document.getElementById('submit');
        const originalButtonContent = button.innerHTML;
        button.innerHTML = '<div class="alt-send-button"><i class="fa fa-spinner fa-spin"></i><span class="send-text">SENDING...</span></div>';
        button.disabled = true;
        
        // Get form data
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.querySelector('textarea[name="message"]').value;
        
        // Prepare template parameters
        const templateParams = {
            from_name: name,
            from_email: email,
            to_email: 'algoisagi@gmail.com',
            message: message
        };
        
        // Send email using EmailJS
        // Replace "your_service_id" and "your_template_id" with your actual EmailJS service and template IDs
        emailjs.send('service_2fohqr6', 'template_o7pfb5p', templateParams)
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
                
                // Show success message
                form.innerHTML = '<div class="success-message"><h3>Thank you for your message📬</h3><p>We will get back to you as soon as possible☺️</p></div>';
            })
            .catch(function(error) {
                console.log('FAILED...', error);
                
                // Show error message
                alert('Oops! Something went wrong. Please try again later.');
                
                // Reset button
                button.innerHTML = originalButtonContent;
                button.disabled = false;
            });
    });
});