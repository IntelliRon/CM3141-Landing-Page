window.addEventListener("load", function() {
    const form = document.getElementById('contact-form');
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      const data = new FormData(form);
      const action = e.target.action;
      form.clear();
      alert("Thanks for your interest!");
      fetch(action, {
        method: 'POST',
        body: data,
      });
    });
  });