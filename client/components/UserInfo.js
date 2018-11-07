import React from 'react'
const UserInfo = props => {
  const { userName, user } = props
  return (
    <table>
      <tbody>
        <tr>
          <td>UserName</td>
          <td>{userName}</td>
        </tr>
        <tr>
          <td>Email</td>
          <td>{user.email}</td>
        </tr>
        <tr>
          <td>Customer since</td>
          <td>{user.createdAt.slice(0, 7)}</td>
        </tr>
      </tbody>
    </table>
  )
}

export default UserInfo
