import React, { useState } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./AddUser.module.css";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState(null);

  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({ title: "無效的輸入", message: "姓名或年齡不能為空" });
      return;
    }
    if (+enteredAge < 1) {
      setError({ title: "無效的年齡", message: "年齡必須為正整數" });
      return;
    }
    props.onAddUser(enteredUsername, enteredAge);
    setEnteredUsername("");
    setEnteredAge("");
  };

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">用戶名</label>
          <input
            id="username"
            type="text"
            value={enteredUsername}
            placeholder="輸入名稱"
            onChange={usernameChangeHandler}
          />
          <label htmlFor="age">年齡 (Years)</label>
          <input
            id="age"
            type="number"
            value={enteredAge}
            placeholder="輸入年齡"
            onChange={ageChangeHandler}
          />
          <Button type="submit">添加用戶</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
