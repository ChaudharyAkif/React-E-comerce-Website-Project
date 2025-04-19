import React from 'react'
import { FaCheckCircle, FaHeadphonesAlt, FaWallet } from 'react-icons/fa'
import { FaCarSide } from 'react-icons/fa6'

const Service = () => {
    const SerivesData = [
        {
            id: 1,
            icons: <FaCarSide className='text-4xl md:text-5xl text-primary' />,
            title: "Free Delivery",
            description: "Free Shipping on All Order"
        },
        {
            id: 2,
            icons: <FaCheckCircle className='text-4xl md:text-5xl text-primary' />,
            title: "Safe-Money",
            description: "30 Days Money Back Guarantee"
        },
        {
            id: 3,
            icons: <FaWallet className='text-4xl md:text-5xl text-primary' />,
            title: "Secure Payment",
            description: "All Payment Secure"
        },
        {
            id: 4,
            icons: <FaHeadphonesAlt className='text-4xl md:text-5xl text-primary' />,
            title: "Online Support 24/7",
            description: "Technical Support 24/7"
        },

    ]

    return (
        <div>
            <div className="container mx-auto px-4 sm:px-3 my-14 md:my-20">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 gap-y-8" >
                    {SerivesData.map((data) => (
                        <div className='flex  flex-col items-start sm:flex-row gap-4'>
                            {data.icons}
                            <div>
                                <h1 className='lg:text-xl  font-bold'>{data.title}</h1>
                                <h1 className='text-gray-400 text'>{data.description}</h1>
                            </div>
                        </div>
                    ))
                    }

                </div>
            </div>
        </div >
    )
}

export default Service
