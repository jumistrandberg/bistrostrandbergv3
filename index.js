//Appear animation for Starters h3
const appear = document.querySelector('.appear');
const cb = function(entries){
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('inview');
        }else{
            entry.target.classList.remove('inview');
        }
    });
}

// Contact Form Client-side Validation
// Get the form element
const form = document.getElementById('contact-form');

// Event listner to form's submit button
form.addEventListener('submit', function(event) {
    // Prevent form from submitting automatically
    event.preventDefault();

    // Check if required fields have been filled
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const tel = document.getElementById('tel').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    if (name === '' || email === '' || tel === '' || subject === '' || message === '') {
        // If any of the fields are empty, display:
        const status = document.querySelector(.'status');
        status.innerHTML = 'Vänligen fyll i alla uppgifter';
    } else {
        // If all fields have been filled out, submit
        form.submit();
    }
});