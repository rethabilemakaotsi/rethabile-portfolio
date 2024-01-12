<template>
  <h2>Contact</h2>
    <div class="contact-container">
      
      <div class="form-container">
        <form
  action="https://formspree.io/f/myyrzeyk"
  method="POST">
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
      <h4>contact information</h4>
      <p> <i class="bi bi-house-door"></i> Makhaza khayelitsha 7784<br>
            <i class="bi bi-telephone"></i>  062 430 0882<br>
            <i class="bi bi-envelope"></i> rethabilemakaotsi17@gmail.com
          </p>
      <div class="social-icons">
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
            <i class="bi bi-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/rethabile-makaotsi-b47258241/" target="_blank" rel="noopener noreferrer">
            <i class="bi bi-linkedin"></i>
          </a>
      </div>
         
    </div>
   
      
    
    
  </template>
  
  <script>
  export default {};
  </script>
  
  <style scoped>
  @media screen and (max-width: 500px){
    .contact-container{
      width: 100%;
    }
    .contact-info{
      width: 100%;
    }

  }
  h2{
    font-family: 'Inter', sans-serif;
  margin-top: 30px;
  color:#2c3e50;
  text-transform: uppercase;
  }

   
    
  
 
  .contact-container {
    text-align: center;
    margin-top: 50px;
    
    
  }
  
  
  h4{
    color: #84af9b;
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
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    margin-top: -490px;
    
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
  .social-icons{
    text-align: center;
    display: flex;
    gap: 20px;
    margin-left:150px;
    
  }
  </style>
  