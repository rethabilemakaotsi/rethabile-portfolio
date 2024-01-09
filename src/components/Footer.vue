<template>
  <footer>
    <div class="container">
      <div class="footer-content">
        <div class="contact-info">
          <h3>Contact Information</h3>
          <p>
            <i class="bi bi-house-door"></i> 123 Main Street, Cityville, Country<br>
            <i class="bi bi-telephone"></i> Phone: +123 456 7890<br>
            <i class="bi bi-envelope"></i> Email: info@example.com
          </p>
        </div>
        <div class="social-icons">
          <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer">
            <i class="bi bi-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer">
            <i class="bi bi-linkedin"></i>
          </a>
        </div>
      </div>
      <p class="copyright">Rethabile's Portfolio &copy; {{ currentYear }}</p>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      currentYear: new Date().getFullYear(),
    };
  },
};
</script>

<style scoped>
@import "~bootstrap-icons/font/bootstrap-icons.css";

.container {
  background-color: #84af9b;
  padding: 20px;
  text-align: center;
  height: 200px; /* Adjusted height to accommodate content */
}

h3 {
  font-size: medium; /* Adjusted font size for better readability */
}

.contact-info {
  text-align: center;
  margin: 0 auto; /* Center the contact info */
  max-width: 400px;
  margin-bottom: 20px;
  font-size: small;
}

.contact-info i {
  font-size: small;
  margin-right: 5px;
}

.social-icons {
  text-align: center;
  margin: 0 auto;
  margin-top: 3px; 
}

.bi {
  font-size: 1.5rem;
  margin: 5px;
}

.copyright {
  margin-top: 20px;
  font-size: 12px;
  color: black;
}
</style>

