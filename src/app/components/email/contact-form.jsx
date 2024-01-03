export const EmailTemplate = ({
    name,
    email,
    subject,
    message
  }) => (
    <div>
      <p>Hello Munzir,</p>
      <p>
           {email} is submitted in your website.
      </p>
      <p>
          {subject}
      </p>
      <p>
          {message}
      </p>
      <p>
          Regards,{name}
      </p>
    </div>
  );