import React from "react"

const UserCard = ({ user, onClick, setUsers }) => {
  const handleDelete = () => {
    const confirmed = window.confirm(`Do you want to delete ${user.name}?`)
    if (confirmed) {
      setUsers((prevUsers) => prevUsers.filter((userr) => userr.id !== user.id))
    }
  }
  return (
    <div className="usercard">
      <h3>{user.name}</h3>
      <p>Email: {user.email}</p>
      <p>Company: {user.companyname}</p>
      <div className="actions">
        <button onClick={onClick}>View Details</button>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  )
}

export default UserCard
