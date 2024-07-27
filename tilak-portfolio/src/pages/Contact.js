import React from 'react';

const Contact = () => {
  return (
    <div>
      <h2>Contact</h2>
      <form>
        <label htmlFor="email">E-mail</label>
        <input type="email" id="email" name="email" required />
        <label htmlFor="subject">Subject</label>
        <input type="text" id="subject" name="subject" required />
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" required></textarea>
        <button type="submit">Submit</button>
      </form>
      <div>
        <a href="https://www.linkedin.com/in/yourprofile">LinkedIn</a>
        <a href="https://github.com/yourprofile">GitHub</a>
      </div>
    </div>
  );
};

export default Contact;
