import React from 'react'

const Form = () => {
  return (
    <section className='form-page'>

        <div className='image'>
            <figure>
                <picture>
                </picture>
            </figure>
            <div>
                <h2>Sutsiki</h2>
            </div>
        </div>

        <div className='form'>
            <form>
            <span>
                <label for="username" class="text-small-uppercase">Prénom</label>
                <input class="text-body" id="username" name="username" type="text" required></input>
            </span>
            <span>
                <label for="email" class="text-small-uppercase">Email</label>
                <input class="text-body" id="email" name="email" type="email" required></input>
            </span>
            <span>
                <label for="city" class="text-small-uppercase">Ville</label>
                <input class="text-body" id="city" name="city" type="text" required></input>
            </span>
                <input class="text-small-uppercase" id="submit" type="submit" value="S'inscrire"></input>
            </form>
        </div>  

    </section>  
  )
}

export default Form