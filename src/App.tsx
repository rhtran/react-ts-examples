import React, {useState} from 'react';
import './App.css';
import User, {IUser} from "./components/user/User";

const App: React.FC = () => {

  interface IAllUser {
    currentUser: IUser;
    allUsers: Array<IUser>;
  }

  const [usersState, setUsersState] = useState<IAllUser>({
    currentUser: {
      name: "",
      age: "",
      job: "",
      deleteUser: () => {}
    },
    allUsers: []
  })

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setUsersState({
      ...usersState,
      currentUser: {
        ...usersState.currentUser,
        [e.target.name]: e.target.value
      }
    })
  }

  const deleteHandler = (index: number): void => {
    const filterUsers = usersState.allUsers.filter((user, i) => {
      return index !== i;
    })

    setUsersState({
      ...usersState,
      allUsers: filterUsers
    })
  }

  const allUsers = usersState.allUsers.map((user, i) => (
    <User name={user.name} age={user.age} job={user.job} deleteUser={() => deleteHandler(i)}/>
  ))

  console.log(usersState);

  const submitForm = (e: React.SyntheticEvent): void => {
    e.preventDefault();

    setUsersState({
      currentUser: {
        name: "",
        age: "",
        job: "",
        deleteUser: () => {}
      },
      allUsers: [
        ...usersState.allUsers,
        usersState.currentUser
      ]
    })
  }

  return (
    <div className="container">
      <h1>React with Typescript</h1>
      <form onSubmit={submitForm} className={"card"}>
        <label htmlFor="username">Name:</label>
        <input required
               id="username" type="text" name="name"
               value={usersState.currentUser.name}
               onChange={onChangeHandler}/>

        <label htmlFor="userAge">Age:</label>
        <input required
               id="userAge" type="string" name="age"
               value={usersState.currentUser.age}
                 onChange={onChangeHandler}/>

        <label htmlFor="userJob">Job:</label>
        <input required
               id="userJob" type="text" name="job"
               value={usersState.currentUser.job}
               onChange={onChangeHandler}/>

        <button type="submit">Add User</button>
      </form>

      {allUsers}
    </div>
  )

}

export default App;
