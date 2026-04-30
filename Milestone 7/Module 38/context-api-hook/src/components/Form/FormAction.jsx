// import React from 'react';

const FormAction = () => {

    const handleFormAction = (formData) => {
        console.log(formData.get('name'));
    }

    return (
      <div>
        <form action={handleFormAction}>
          <input type="text" name="name" placeholder="Your name" />
          <br />
          <input type="email" name="email" placeholder="Your email" required />
          <br />
          <input type="submit" value="Submint" />
        </form>
      </div>
    );
};

export default FormAction;