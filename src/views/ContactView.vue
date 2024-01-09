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
  </template>
  
  <script>
  export default {};
  </script>
  
  <style scoped>
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
    color: #fff;
    padding: 10px;
    border: none;
    border-radius: 3px;
    cursor: pointer;
  }
  </style>
  