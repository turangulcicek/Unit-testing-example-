import React from "react";

const Form = ({ addUser }) => {
  // formun gönderilmesinde çalışır
  const handleSubmit = (e) => {
    e.preventDefault();
    // formdaki inputlara girilen değerlerden bir obje oluşturduk
    const form = new FormData(e.target);
    const user = Object.fromEntries(form.entries());
    // kullanıcıyı listeye ekleme
    addUser(user);
    // e.target[0].value = "";
    // e.target[1].value = "";
    // e.target[2].value = "";
  };
  return (
    <form onSubmit={handleSubmit} className="d-flex flex-column gap-2">
      <div className="d-flex flex-column">
        <label htmlFor="name">Name</label>
        <input
          name="name"
          className="form-control"
          id="name"
          type="text"
          placeholder="Type your name..."
        />
      </div>
      <div className="d-flex flex-column ">
        <label htmlFor="email">Email</label>
        <input
          name="email"
          className="form-control "
          id="email"
          type="text"
          placeholder="type your email"
        />
      </div>
      <div className="d-flex flex-column ">
        <label htmlFor="age">Age</label>
        <input
          name="age"
          className="form-control "
          id="age"
          type="number"
          placeholder="type your age"
        />
      </div>
      <button className="btn btn-primary mt-3">Add user</button>
    </form>
  );
};

export default Form;
