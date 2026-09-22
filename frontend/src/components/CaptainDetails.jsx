import React, { useContext, useEffect, useState } from 'react'
import { CaptainDataContext } from '../context/CapatainContext'
import axios from 'axios'

const CaptainDetails = () => {
    const { captain } = useContext(CaptainDataContext)
    const [ earnings, setEarnings ] = useState(0)
    const [ completedRides, setCompletedRides ] = useState(0)

    useEffect(() => {
        const fetchEarnings = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/rides/captain-earnings`, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                })
                setEarnings(response.data.totalEarnings || 0)
                setCompletedRides(response.data.totalRides || 0)
            } catch (err) {
                console.error('Error fetching earnings:', err)
            }
        }
        fetchEarnings()
    }, [])

    return (
        <div>
            <div className='flex items-center justify-between'>
                <div className='flex items-center justify-start gap-3'>
                    <img className='h-10 w-10 rounded-full object-cover' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdlMd7stpWUCmjpfRjUsQ72xSWikidbgaI1w&s" alt="" />
                    <h4 className='text-lg font-medium capitalize'>{captain?.fullname?.firstname + " " + captain?.fullname?.lastname}</h4>
                </div>
                <div className='text-right'>
                    <h4 className='text-xl font-semibold text-green-700'>₹{earnings.toFixed(2)}</h4>
                    <p className='text-sm text-gray-600 font-medium'>Total Earned</p>
                </div>
            </div>
            <div className='flex p-3 mt-8 bg-gray-100 rounded-xl justify-center gap-5 items-start'>
                <div className='text-center'>
                    <i className="text-3xl mb-2 font-thin ri-timer-2-line"></i>
                    <h5 className='text-lg font-medium'>10.2</h5>
                    <p className='text-sm text-gray-600'>Hours Online</p>
                </div>
                <div className='text-center'>
                    <i className="text-3xl mb-2 font-thin ri-speed-up-line"></i>
                    <h5 className='text-lg font-medium'>30 KM</h5>
                    <p className='text-sm text-gray-600'>Distance</p>
                </div>
                <div className='text-center'>
                    <i className="text-3xl mb-2 font-thin ri-booklet-line"></i>
                    <h5 className='text-lg font-medium'>{completedRides}</h5>
                    <p className='text-sm text-gray-600'>Rides Done</p>
                </div>
            </div>
        </div>
    )
}

export default CaptainDetails