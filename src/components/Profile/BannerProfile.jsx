import React from 'react'
import Foto from '../../assets/images/sale/saleImgOne.webp'
import ban from '../../assets/images/banner/bannerImgOne.webp'
function BannerProfile() {
    return (
        <div className='flex flex-col w-full md:h-[400px] h-[300px]'>
            <div className='flex w-full md:h-[300px] h-[200px] bg-black'>
                <img src={ban} alt="" className='object-cover' />
            </div>
            <div className=' md:w-[150px] w-[100px] h-auto absolute md:top-[300px] top-[230px] md:left-[100px] left-[50px] md:ring-8 ring-4 dark:ring-slate-900 ring-white rounded-full'>
                <img src={Foto} alt="" className='rounded-full object-fill ' />
            </div>
        </div>
    )
}

export default BannerProfile