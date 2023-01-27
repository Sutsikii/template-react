import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section className='form-page'>

    <div className='image'>
        <figure>
            <picture>
                <img src="//my-assets.netlify.com/codepen/dailyui-001/img.png" alt="" />
            </picture>
        </figure>
        <div className='headline'>
            <h2>Sutsiki</h2>
            <h3>Développeur - Créateur de contenus</h3>
        </div>
    </div>

    <div className='form'>

    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Subject</label>
      <input type="text" name="user_subject" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>

    </div>  

</section>
  );
};