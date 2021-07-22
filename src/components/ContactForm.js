import React from 'react';
import styled from 'styled-components';

const ContactContainerStyles = styled.div`
  text-align: center;
  margin: 6rem auto;
  .header-container {
    position: relative;
    display: inline-block;
  }

  h2::after {
    content: '';
    position: absolute;
    left: 16px;
    top: 60px;
    width: 100%;
    height: 1rem;
    border-radius: 4px;
    transform: rotate(-3deg);
    background-color: var(--pink);
    z-index: -1;
  }
`;

const ContactFormStyles = styled.form`
  display: flex;
  flex-direction: column;
  margin: 2rem 0;

  input[type='text'],
  textarea {
    color: var(--pink);
    padding: 0.5rem;
    margin: 0.2rem 0;
    background: var(--bg-primary);
    outline: none;
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: 2px solid var(--text-primary);
  }

  input[type='text']:focus,
  textarea:focus {
    border-bottom: 2px solid var(--pink);
  }

  input[type='submit'] {
    background: var(--bg-primary);
    color: var(--pink);
    border: 1px solid var(--pink);
    width: 75%;
    display: block;
    margin: 0.5rem auto;
    padding: 0.5rem;
    transition: 0.2s;
    cursor: pointer;
  }
  input[type='submit']:hover {
    background: var(--pink);
    color: var(--bg-primary);
  }

  input[type='text']::placeholder,
  textarea::placeholder {
    color: var(--text-primary);
  }
`;

const ContactForm = () => {
  return (
    <ContactContainerStyles>
      <div className='header-container'>
        <h2>Contact</h2>
      </div>
      <ContactFormStyles name='contact' action='POST' data-netlify='true'>
        <input type='text' placeholder='Name' name='name' />
        <input type='text' placeholder='Email' name='email' />
        <textarea
          name='message'
          placeholder='Message'
          cols='30'
          rows='10'
        ></textarea>
        <input type='submit' value='submit' />
      </ContactFormStyles>
    </ContactContainerStyles>
  );
};

export default ContactForm;
