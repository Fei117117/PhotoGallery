document.addEventListener("DOMContentLoaded", function () {
  const photos = document.querySelectorAll("#portfolio .photo");

  const options = {
    threshold: 0.1,
  };

  const observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = "translateY(0)";
        observer.unobserve(entry.target);
      }
    });
  }, options);

  photos.forEach((photo) => {
    observer.observe(photo);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll("#collection-images img");

  const options = {
    threshold: 0.1,
  };

  const observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = "translateY(0)";
        observer.unobserve(entry.target);
      }
    });
  }, options);

  images.forEach((image) => {
    observer.observe(image);
  });
});
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Get form data
    const form = document.getElementById("contactForm");

    // Send form data using EmailJS
    emailjs
      .sendForm(
        "service_fk0yh7b",
        "template_1o6uzbs",
        form,
        "ccfYF3IgzdZyoYLCr"
      )
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
          alert("Thank you for your message! We will get back to you shortly.");
          form.reset();
        },
        function (error) {
          console.log("FAILED...", error);
          alert(
            "An error occurred while sending your message. Please try again later."
          );
        }
      );
  });
