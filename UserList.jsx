import React, { useState } from "react"
import UserCard from "./UserCard"
import UserDetails from "./UserDetails"

const UserList = ({ users, setUsers }) => {
  const [selectedUser, setSelectedUser] = useState(null)

  return (
    <div>
      {users.map((user) => (
        <UserCard key={user.id} user={user} onClick={() => setSelectedUser(user)} setUsers={setUsers}/>
      ))}
      {selectedUser && (
        <UserDetails user={selectedUser} onClose={() => setSelectedUser(null)} />
      )}
    </div>
  )
}

export default UserList

