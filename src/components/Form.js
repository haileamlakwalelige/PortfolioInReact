import React from 'react';
import './form.css';

function Form(){
    return(
        <div className='form-container'>
            <form className='forms'>
                <input type="text" placeholder='First Name' />
                <input type="text" placeholder='Last Name' />
                <input type="email" placeholder='Email' />
                <textarea rows='5' cols='5' placeholder="Write you messages" />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
export default Form;