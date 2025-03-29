import { useState } from "react";

const CreateUser = () => {
  const createUserApi = "http://localhost:3000/users";
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleInput = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    console.log(name, value);
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(user);
    try {
      const response = await fetch(createUserApi, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      if (response.ok) {
        alert("User registered successfully!");
        setUser({
          name: "",
          email: "",
          phone: "",
        });
      } else {
        alert("User registration failed! Error in Form");
      }
    } catch (error) {
      console.error(error);
    } finally {
      console.log("Request completed");
    }
  };

  return (
    <div>
      <h2>User Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={user.name}
            onChange={handleInput}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={user.email}
            onChange={handleInput}
          />
        </div>
        <div>
          <label htmlFor="phone">Phone:</label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={user.phone}
            onChange={handleInput}
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default CreateUser;