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

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'service_nvq8wdk';
   const templateID = 'template_461ikwn';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      alert('Sent!');
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});