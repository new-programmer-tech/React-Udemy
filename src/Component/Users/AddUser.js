import React from "react";

const AddUser = (props) => {
  const addUserHandler = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input type="text" name="username"></input>{" "}
        <label htmlFor="age">Age (Years)</label>
        <input type="number" name="username"></input>
        <button type="submit" name="">
          Add User
        </button>
      </form>
    </div>
  );
};
