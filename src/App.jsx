import UserList from "./components/List";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "./components/Form/Index";
function App() {
  const [users, setusers] = useState([
    { name: "mehmet", email: "mehmet@gmail.com", age: 24 },
    { name: "ali", email: "ali@gmail.com", age: 35 },
  ]);
  const addUser = (user) => {
    setusers(users.concat(user));
  };
  return (
    <div className="container p-5">
      <Form addUser={addUser} />
      <UserList users={users} />
    </div>
  );
}

export default App;
