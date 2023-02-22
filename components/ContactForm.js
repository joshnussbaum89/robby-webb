import styled from 'styled-components'
import PageTitle from './PageTitle'

const ContactContainerStyles = styled.section`
  text-align: center;
  margin: 6rem auto;
  width: 100%;
  max-width: 800px;
`

const ContactFormStyles = styled.form`
  display: flex;
  flex-direction: column;
  margin: 4rem 0;

  input[type='text'],
  button[type='submit'],
  textarea {
    background: var(--bg-primary);
    color: var(--text-primary);
    border: 2px solid var(--text-primary);
    transition: 0.2s;
  }

  input[type='text'],
  textarea {
    margin: 0.2rem 0;
    padding: 0.5rem;
    border-top: none;
    border-left: none;
    border-right: none;
    outline: none;
    :focus {
      border-bottom: 2px solid var(--pink);
    }
  }

  button[type='submit'] {
    display: block;
    margin: 0.5rem auto;
    padding: 0.5rem;
    width: 40%;
    border-radius: 2px;
    cursor: pointer;
    :hover {
      background: var(--pink);
      color: var(--bg-primary);
      border: 2px solid var(--pink);
    }
  }

  label {
    transform: translate(0.25rem, -2rem);
    transition: all 0.2s ease-out;
    width: 1px;
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
`

const ContactForm = () => {
  return (
    <ContactContainerStyles>
      <PageTitle title="Contact" />
      <ContactFormStyles
        name="contact"
        method="post"
        action="/success"
        data-netlify="true"
        netlify-honeypot="bot-field"
      >
        {/* hidden Netlify fields */}
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="contact" />
        {/*  */}
        <input
          type="text"
          placeholder=" "
          name="username"
          id="username"
          required
        />
        <label htmlFor="username">Name</label>
        <input type="text" placeholder=" " name="email" id="email" required />
        <label htmlFor="email">Email</label>
        <textarea
          name="message"
          placeholder=" "
          cols="30"
          rows="10"
          id="message"
          required
        ></textarea>
        <label htmlFor="message">Message</label>
        <button type="submit">submit</button>
      </ContactFormStyles>
    </ContactContainerStyles>
  )
}

export default ContactForm
