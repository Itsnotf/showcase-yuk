import React from 'react'
import Landing from '../../components/Landing/Landing'
import UserPopuler from '../../components/Landing/UserPopuler'

const Home = () => {
  return (
    <div className="w-full mx-auto bg-white dark:bg-slate-900 overflow-hidden md:flex md:justify-center ">

      <div className="max-w-container  md:mx-14 mx-2 px-4 flex flex-col md:justify-center  ">
        <Landing />
        <UserPopuler />
      </div>
    </div>
  )
}

export default Home
