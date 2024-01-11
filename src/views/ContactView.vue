<template>
  
    <div class="contact-container">
      <h1>Contact</h1>
      <div class="form-container">
        <form action="https://formspree.io/f/{form_id}" method="post">
          <h4>Get in Touch</h4>
  
          <label for="name">Name</label>
          <input name="name" id="name" type="text" required>
  
          <label for="number">Contact Number</label>
          <input name="number" id="number" type="tel" required>
  
          <label for="email">Your Email</label>
          <input name="email" id="email" type="email" required>
  
          <label for="message">Message</label>
          <textarea name="message" id="message" rows="4" required></textarea>
  
          <button class="btn" type="submit">Submit</button>
        </form>
      </div>
    </div>
    <div class="contact-info">
      <h5>contact information</h5>
      <p> <i class="bi bi-house-door"></i> Makhaza khayelitsha 7784<br>
            <i class="bi bi-telephone"></i> Phone: 062 430 0882<br>
            <i class="bi bi-envelope"></i> Email: rethabilemakaotsi17@gmail.com
          </p>
      
          <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer">
            <i class="bi bi-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer">
            <i class="bi bi-linkedin"></i>
          </a>
    </div>
   
      
    
    
  </template>
  
  <script>
  export default {};
  </script>
  
  <style scoped>
  h5{
    color: #84af9b;
  }
  .contact-container {
    text-align: center;
    margin-top: 50px;
    
    
  }
  
  h1 {
    position: relative;
    display: inline-block;
    margin-bottom: 30px;
  }
  
  h1::after {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: #ccc;
    bottom: 0;
    left: 0;
  }

  
  .form-container {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    margin-left: 200px;
  }
   .contact-info {
    max-width: 400px;
    margin-left:800px ;
    margin-top: -200px;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    
  }
  form {
    display: flex;
    flex-direction: column;
  }
  
  label {
    margin-top: 10px;
  }
  
  input,
  textarea {
    padding: 10px;
    margin-top: 5px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 3px;
    box-sizing: border-box;
    width: 100%;
  }
  
  button {
    background-color: #84af9b;
    color: black;
    padding: 10px;
    border: none;
    border-radius: 3px;
    cursor: pointer;
  }
  </style>
  