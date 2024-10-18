
import React, { useState, useEffect } from "react"
import axios from "axios"
import UserList from "./components/UserList"
import UserForm from "./components/UserForm"

const App = () => {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState("")

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setUsers(response.data)
        setLoading(false)
      })
      .catch((error) => {
        console.error("Error fetching users:", error)
        setLoading(false)
      })
  },[])

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase()) || user.email.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div>
      <h1>User Management Dashboard</h1>
      <input type="text" placeholder="Search by name or email" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}/>
      <UserForm setUsers={setUsers} />
      {loading ? <p>Loading</p> : <UserList users={filteredUsers} setUsers={setUsers} />}
    </div>
  )
}

export default App
