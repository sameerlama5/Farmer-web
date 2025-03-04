'use client'
import UserApprovalTable from '@/hooks/user-list-table'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Approval = () => {

  const [userList, setUserList] = useState([])
  const fetchUsers =  async()=>{
    const {data} = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/users`)
    setUserList(data)
  }
  useEffect(()=>{
    fetchUsers()
  },[])
  if(userList.length == 0)  return "loading..."

  return (
      <UserApprovalTable userList={userList} fetchUsers={fetchUsers}  />
  )
}

export default Approval