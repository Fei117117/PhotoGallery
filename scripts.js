document.addEventListener("DOMContentLoaded", function () {
  // Portfolio images intersection observer
  const photos = document.querySelectorAll("#portfolio .photo");

  const photoObserverOptions = {
    threshold: 0.1,
  };

  const photoObserver = new IntersectionObserver(function (entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = "translateY(0)";
        observer.unobserve(entry.target);
      }
    });
  }, photoObserverOptions);

  photos.forEach((photo) => {
    photoObserver.observe(photo);
  });

  // Collection images intersection observer
  const images = document.querySelectorAll("#collection-images img");

  const imageObserverOptions = {
    threshold: 0.1,
  };

  const imageObserver = new IntersectionObserver(function (entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = "translateY(0)";
        observer.unobserve(entry.target);
      }
    });
  }, imageObserverOptions);

  images.forEach((image) => {
    imageObserver.observe(image);
  });

  // EmailJS form submission
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault();

      // Send form data using EmailJS
      emailjs
        .sendForm(
          "service_fk0yh7b",
          "template_1o6uzbs",
          this,
          "ccfYF3IgzdZyoYLCr"
        )
        .then(
          function (response) {
            console.log("SUCCESS!", response.status, response.text);
            alert(
              "Thank you for your message! We will get back to you shortly."
            );
            contactForm.reset();
          },
          function (error) {
            console.log("FAILED...", error);
            alert(
              "An error occurred while sending your message. Please try again later."
            );
          }
        );
    });
  }
});

function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}
