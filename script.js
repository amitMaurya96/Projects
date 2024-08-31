document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();
  alert('Thank you for your message! We will get back to you shortly.');
});

document.getElementById('membership-form').addEventListener('submit', function(event) {
  event.preventDefault();
  const fullName = document.getElementById('full-name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const membershipType = document.getElementById('membership-type').value;
  const startDate = document.getElementById('start-date').value;
  const additionalInfo = document.getElementById('additional-info').value;

  alert(`Thank you, ${fullName}, for signing up for the ${membershipType} membership! We will contact you at ${email} or ${phone} before your start date on ${startDate}.`);

});
