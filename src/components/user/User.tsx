import React from "react";
import "./User.css";

export interface IUser {
  name: string;
  age: number;
  job: string;
  deleteUser: () => void;
}

const User: React.FC<IUser> = ({name, age, job, deleteUser}) => {
  return (
    <div className={"card"}>
      <div className={"row"}>
        <h2>Name: </h2>
        <p>{name}</p>
      </div>
      <hr/>

      <div className={"row"}>
        <h2>Age: </h2>
        <p>{age}</p>
      </div>
      <hr/>

      <div className={"row"}>
        <h2>Job: </h2>
        <p>{job}</p>
      </div>

      <button className={"deleteBtn"} onClick={deleteUser}>Delete User</button>
    </div>
  )
}

export default User;