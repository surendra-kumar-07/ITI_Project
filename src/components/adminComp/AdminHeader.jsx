import React from 'react'
import { Header } from '../index.js'

const AdminHeader = () => {
  const menuOptionItems = [
    {
      name: "Home",
      slug: "/adminpanel/dashboard"
    },
    {
      name: "Add-post",
      slug: "/adminpanel/add-post"
    },
    {
      name: "Home-items",
      slug: "/adminpanel/dashboard"
    },
  ]

  return (
    <>
    <Header menuOptions={menuOptionItems} admin={true}/>
    </>
  )
}

export default AdminHeader