import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    subject: '',
    content: '',
  });

  const { subject, content } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();

    console.log(subject, content);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <p>Topic</p>
          <input
            type="text"
            placeholder="Subject"
            name="subject"
            value={subject}
            onChange={onChange}
            required
          />
        </div>
        <div>
          <p>Content</p>
          <input
            type="text"
            placeholder="Content"
            name="content"
            value={content}
            onChange={onChange}
            required
          />
        </div>
        <input type="submit" value="Send" />
      </form>
    </div>
  );
};

export default Contact;
