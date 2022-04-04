import React from "react";

import Card from "../UI/Card";
import classes from "./UsersList.module.css";

const UsersList = (props) => {
  return (
    <Card className={classes.users}>
      <ul>
        {props.users.map((user) => (
          <li key={user.id}>
            {user.name} (今年 {user.age} 歲)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
