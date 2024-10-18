import React from "react"

const UserDetails = ({ user, onClose }) => {
  return (
    <div isOpen={!!user} onRequestClose={onClose}>
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <p>Website: {user.website}</p>
      <p>Address: {`${user.address.street}, ${user.address.city}, ${user.address.suite}`}</p>
      <p>Company: {user.company.name}</p>
      <button onClick={onClose}>Close</button>
    </div>
  )
}

export default UserDetails

