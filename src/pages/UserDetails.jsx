import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Mail, Phone, User, MapPin, Home } from "lucide-react";
import axios from "axios";
import UserDetailsSkeleton  from '../skelton/UserDetailsSkeleton'


function UserDetails() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

  let {id} = useParams()

  const getUser = async ()=>{
    try {
        const dataa = await axios.get(`https://fakestoreapi.com/users/${id}`)
         setUser(dataa.data)
        setLoading(false)
    } catch (error) {
        console.log("error onfetching 1 user : ",error)
    }
  }

  useEffect(()=>{
    getUser()
  },[])

  
  if (loading) {
  return <UserDetailsSkeleton />;
}

  if (!user) {
    return (
      <div className="h-screen flex items-center justify-center text-2xl font-bold">
        User Not Found
      </div>
    );
  }

  return (
    <section className="max-w-6xl mx-auto px-5 py-10">
      <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
        {/* Header */}

        <div className="bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 h-52 flex items-end justify-center">
          <div className="w-36 h-36 rounded-full bg-white shadow-lg mb-[-60px] flex items-center justify-center text-5xl font-bold text-indigo-600">
            {user.name.firstname[0].toUpperCase()}
            {user.name.lastname[0].toUpperCase()}
          </div>
        </div>

        {/* Body */}

        <div className="pt-24 pb-10 px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold capitalize">
              {user.name.firstname} {user.name.lastname}
            </h1>

            <p className="text-gray-500 mt-2">@{user.username}</p>
          </div>

          {/* Details */}

          <div className="grid md:grid-cols-2 gap-10 mt-12">
            {/* Personal */}

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Mail className="text-indigo-600" />
                <div>
                  <p className="text-gray-500">Email</p>
                  <h3>{user.email}</h3>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Phone className="text-green-600" />
                <div>
                  <p className="text-gray-500">Phone</p>
                  <h3>{user.phone}</h3>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <User className="text-orange-500" />
                <div>
                  <p className="text-gray-500">Username</p>
                  <h3>{user.username}</h3>
                </div>
              </div>
            </div>

            {/* Address */}

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Home className="text-red-500 mt-1" />

                <div>
                  <p className="text-gray-500">Address</p>

                  <h3>
                    {user.address.number}, {user.address.street}
                  </h3>

                  <p>{user.address.city}</p>

                  <p>{user.address.zipcode}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="text-blue-600 mt-1" />

                <div>
                  <p className="text-gray-500">Geo Location</p>

                  <h3>Latitude : {user.address.geolocation.lat}</h3>

                  <h3>Longitude : {user.address.geolocation.long}</h3>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default UserDetails;
