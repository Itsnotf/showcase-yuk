import React from 'react'
import CardUser from './CardUser'
import Profile from '../../assets/images/banner/bannerImgTwo.webp'

function UserPopuler() {
    return (
        <div className='flex flex-col w-full mt-[150px] mb-20'>
            {/* <h1 className='my-[10px] text-[40px] font-bold text-slate-800'>User Populer</h1> */}
            <div className='flex md:flex-row flex-col md:gap-5 gap-10'>
                <CardUser img={Profile} />
                <CardUser img={Profile} />
                <CardUser img={Profile} />
                <CardUser img={Profile} />

            </div>
        </div>
    )
}

export default UserPopuler