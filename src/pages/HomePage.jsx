import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router'
import UserCard from "../components/UserCard";
import UserCardSkeleton from "../skelton/UserCardSkeleton";
import axios from "axios";


function HomePage() {
    const [users , setUsers] = useState([])
  const [isLoading, setIsLoading] = useState(true)


  let getUserData = async () => {
    try {
      let data = await axios.get("https://fakestoreapi.com/users");
      setUsers(data.data)
      setIsLoading(false)
    } catch (error) {
      console.log("User data api Error : ", error);
    }
  };


  useEffect(()=>{
    getUserData()
  },[])

  // console.log(users)
  return (
    <div className="flex flex-wrap w-full justify-center gap-3 py-3 ">

    { isLoading ?   Array.from({length:8 }).map((_ , ind)=>{
     return <UserCardSkeleton key={ind} />
    })
     : 
     (users.map((val)=>{
     return <UserCard key={val.id} user={val} />
    }))}
  </div>
  )
}

export default HomePage
