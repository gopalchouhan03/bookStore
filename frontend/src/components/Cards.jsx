import React from 'react'

export default function Cards({ item }) {
    return (
        <>
            <div className='mt-4 my-3 p-3'>
                <div className="modern-card bg-white overflow-hidden shadow-md hover:shadow-2xl transition-shadow duration-200 rounded-xl">
                    <div className='w-full h-52 bg-gray-100 overflow-hidden'>
                        <img src={item.image} alt={item.name} className='w-full h-full object-cover' />
                    </div>
                    <div className="p-4">
                        <div className='flex items-start justify-between gap-3'>
                            <div>
                                <h3 className='text-lg font-semibold'>{item.name}</h3>
                                <p className='text-sm text-gray-500 mt-1'>{item.title}</p>
                            </div>
                            <div className='text-right'>
                                <div className='text-sm text-gray-400'>{item.category}</div>
                                <div className='mt-3 text-lg font-bold'>${item.price}</div>
                            </div>
                        </div>
                        <div className='mt-4 flex justify-end'>
                            <button className='btn-accent text-sm'>Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
