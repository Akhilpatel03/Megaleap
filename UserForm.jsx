import React, { useState } from "react"

const UserForm = ({ setUsers }) => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({...prevData,[name]: value,}))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const { name, email } = formData
    if (!name || !email) {
      console.log("Name and email are required!")
      return
    }

    const newUser = {id: Date.now(),...formData,company: { name: "New Company" },}
    setUsers((prevUsers) => [...prevUsers, newUser])
    setFormData({ name: "", email: "", phone: "" })
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required/> <br />
      <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required/><br />
      <input type="text" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange}/><br />
      <button type="submit">Add User</button>
    </form>
  )
}
export default UserForm


