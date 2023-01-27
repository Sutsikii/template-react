import React, { useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';

import guirlande from '../images/components/Guirlande.jpg';
 
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

  useEffect(() => {
    const inputs = document.querySelectorAll('input[type=text], input[type=email]');
    for (let i = 0; i < inputs.length; i++) {
      const inputEl = inputs[i];
      if (inputEl.value.trim() !== '') {
        inputEl.parentNode.classList.add('input--filled');
      }
      inputEl.addEventListener('focus', onFocus);
      inputEl.addEventListener('blur', onBlur);
    }

    function onFocus( ev ) {
        ev.target.parentNode.classList.add( 'inputs--filled' );
    }

    function onBlur( ev ) {
        if ( ev.target.value.trim() === '' ) {
            ev.target.parentNode.classList.remove( 'inputs--filled' );
        }
    }

  }, []);


  return (
    <section className='form-page'>

    <div className='image'>
        <figure>
                <img src={guirlande} alt="" />
        </figure>
        <div className='headline'>
            <h2>Sutsiki</h2>
            <h3>Créateur de contenus</h3>
        </div>
    </div>

    <div className='form'>

    <form ref={form} onSubmit={sendEmail}>
        <span>
            <label className='animated'>Name</label>
            <input type="text" name="user_name" required/>
        </span>

        <span>
            <label className='animated'>Email</label>
            <input type="email" name="user_email" required/>
        </span>

        <span>
            <label className='animated'>Subject</label>
            <input type="text" name="user_subject" required/>
        </span>

            <label>Message</label>
            <textarea name="message" rows={9}/>


      <input type="submit" value="Send" />
    </form>

    </div>  

</section>
  );
};