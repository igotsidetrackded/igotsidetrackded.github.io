---
title: "Contact"
permalink: /contact/
layout: single
---

## Contact Addam (Interior Design)

- [Email](mailto:addam@schauermayhew.com)
- [LinkedIn](https://www.linkedin.com/in/addam-mayhew-8669b123/)

## Contact Bryan (Photography)

- [Email](mailto:bryan@schauermayhew.com)
- [LinkedIn](https://linkedin.com/in/schauebc)
- [Flickr](https://flickr.com/schauebc)
- [Bluesky](https://bsky.app/profile/igotsidetrackded.bsky.social)

---

Or use the form below to send a message:

<form id="contact-form" action="https://formspree.io/f/xjkawgrk" method="POST" novalidate>
  <label for="name">Name</label>
  <input id="name" name="name" type="text" required autocomplete="name" />

  <label for="email">Email</label>
  <input id="email" name="_replyto" type="email" required autocomplete="email" />

  <label for="message">Message</label>
  <textarea id="message" name="message" rows="6" required></textarea>

  <!-- Spam honeypot (hidden to real users) -->
  <input type="text" name="_gotcha" style="display:none" tabindex="-1" autocomplete="off" />

  <!-- Redirect or JSON mode -->
  <input type="hidden" name="_subject" value="New contact form submission" />
  <input type="hidden" name="_format" value="json" />

  <button type="submit">Send</button>
</form>

<p id="form-status" role="status" aria-live="polite"></p>

<script>
  // Progressive enhancement: AJAX submit to stay on-page
  (function () {
    const form = document.getElementById('contact-form');
    const statusEl = document.getElementById('form-status');

    function setStatus(message, isError = false) {
      statusEl.textContent = message;
      statusEl.style.color = isError ? '#b22222' : 'inherit';
    }

    form.addEventListener('submit', async function (e) {
      e.preventDefault();
      setStatus('Sending...');
      const data = new FormData(form);

      try {
        const res = await fetch(form.action, {
          method: 'POST',
          headers: { 'Accept': 'application/json' },
          body: data
        });

        if (res.ok) {
          form.reset();
          setStatus('Thanks! Your message has been sent.');
        } else {
          const payload = await res.json().catch(() => ({}));
          const err = (payload && payload.errors && payload.errors[0] && payload.errors[0].message) || 'Something went wrong. Please try again.';
          setStatus(err, true);
        }
      } catch (err) {
        setStatus('Network error. Please check your connection and try again.', true);
      }
    });
  })();
</script>

