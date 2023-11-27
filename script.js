function filterPosts(category) {
  var blogPosts = document.querySelectorAll(".blog-post");
  var carouselItems = document.querySelectorAll(".carousel-item");

  blogPosts.forEach(function (post) {
    if (
      (category === "barber" && !post.classList.contains("barber")) ||
      (category === "food" && !post.classList.contains("food")) ||
      (category === "about" && !post.classList.contains("about"))
    ) {
      post.style.display = "none";
    } else {
      post.style.display = "block";
    }
  });

  // Set the height of each carousel item based on the selected category
  carouselItems.forEach(function (item) {
    if (category === "about" || category === "food") {
      // Set carousel item height to 0px for "About" and "Food"
      item.style.height = "0px";
    } else {
      // Set carousel item height to 720px for other categories
      item.style.height = "720px";
    }
  });
}




//  Email Code


const btn = document.getElementById('button');

document.getElementById('form').addEventListener('submit', function(event) {
  event.preventDefault();

  // Check email length
  const phoneInput = document.getElementById('email_id'); // Replace 'email_id' with the actual ID of your phone input field
  if (phoneInput.value.length < 7) {
    alert('Please enter a valid Phone Number with at least 7 characters');
    btn.value = 'Book Me'; // Reset the button value
    return; // Stop the form submission if the condition is not met
  }

  btn.value = 'Sending...';

  const serviceID = 'service_nvq8wdk';
  const templateID = 'template_461ikwn';

  emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Book Me';
      alert('Sent!');
      resetForm(); // Clear the form after successful submission
    }, (err) => {
      btn.value = 'Book Me';
      alert(JSON.stringify(err));
    });
});

function resetForm() {
  document.getElementById('form').reset();
}
