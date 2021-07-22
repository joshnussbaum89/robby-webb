import React from 'react';
import styled from 'styled-components';

const ContactContainerStyles = styled.div`
  text-align: center;
  margin: 6rem auto;
  width: 100%;
  max-width: 800px;

  .header-container {
    position: relative;
    display: inline-block;
    margin: auto;
  }

  h2::after {
    content: '';
    position: absolute;
    top: 60px;
    left: 16px;
    background-color: var(--pink);
    width: 100%;
    height: 1rem;
    border-radius: 2px;
    transform: rotate(-3deg);
    z-index: -1;
  }
`;

const ContactFormStyles = styled.form`
  display: flex;
  flex-direction: column;
  margin: 2rem 0;

  input[type='text'],
  textarea {
    background: var(--bg-primary);
    color: var(--text-primary);
    margin: 0.2rem 0;
    padding: 0.5rem;
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: 2px solid var(--text-primary);
    outline: none;
  }

  input[type='text']:focus,
  textarea:focus {
    border-bottom: 2px solid var(--pink);
  }

  input[type='submit'] {
    background: var(--bg-primary);
    color: var(--text-primary);
    border: 2px solid var(--text-primary);
    display: block;
    margin: 0.5rem auto;
    padding: 0.5rem;
    width: 40%;
    border-radius: 2px;
    transition: 0.2s;
    cursor: pointer;
  }
  input[type='submit']:hover {
    background: var(--pink);
    color: var(--bg-primary);
    border: 2px solid var(--pink);
  }

  label {
    transform: translate(0.25rem, -2rem);
    transition: all 0.2s ease-out;
    width: 30px;
    color: var(--text-primary);
    opacity: 0.6;
  }

  input:focus + label,
  input:not(:placeholder-shown) + label,
  textarea:focus + label,
  textarea:not(:placeholder-shown) + label {
    color: var(--pink);
    opacity: 1;
  }

  input:focus + label,
  input:not(:placeholder-shown) + label {
    transform: translate(0, -3.75rem);
  }

  textarea:focus + label,
  textarea:not(:placeholder-shown) + label {
    transform: translate(0, -13.9rem);
  }
`;

const ContactForm = () => {
  return (
    <ContactContainerStyles>
      <div className='header-container'>
        <h2>Contact</h2>
      </div>
      <ContactFormStyles name='contact' action='POST' data-netlify='true'>
        <input type='text' placeholder=' ' name='name' />
        <label for='name'>Name</label>
        <input type='text' placeholder=' ' name='email' />
        <label for='email'>Email</label>
        <textarea name='message' placeholder=' ' cols='30' rows='10'></textarea>
        <label for='message'>Message</label>
        <input type='submit' value='submit' />
      </ContactFormStyles>
    </ContactContainerStyles>
  );
};

export default ContactForm;
