import React from "react";

const UserList = ({ users }) => {
  return (
    <table className="table table-dark table-hover rounded  my-4">
      <thead>
        <tr>
          <th>İsim</th>
          <th>Email</th>
          <th>Yaş</th>
        </tr>
      </thead>
      <tbody data-testid="table-body">
        {users?.map((user, index) => (
          <tr key={index}>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.age}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserList;
