import React, { useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';

import emailData from '../conf/emailJS.json';

import guirlande from '../images/components/Guirlande.jpg';
 
export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(emailData.service_id, emailData.template_id, form.current, emailData.public_key)
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
                <img src={guirlande} alt="Image de fond représentant des guirlandes lumineuses" />
        </figure>
        <div className='headline'>
            <h2>Sutsiki</h2>
            <h3>Créateur de contenus</h3>
        </div>
    </div>

    <div className='form'>

    <form ref={form} onSubmit={sendEmail}>
        <span>
            <label className='animated'>Nom</label>
            <input type="text" name="user_name" required/>
        </span>

        <span>
            <label className='animated'>Email</label>
            <input type="email" name="user_email" required/>
        </span>

        <span>
            <label className='animated'>Sujet</label>
            <input type="text" name="user_subject" required/>
        </span>

            <label>Message</label>
            <textarea name="message" rows={9} required/>


      <input type="submit" value="Envoyer" />
    </form>

    </div>  

</section>
  );
};