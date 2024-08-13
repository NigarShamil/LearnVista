import React from 'react'

const ProfileInfo = () => {
    return (
        <div className='flex items-center gap-3'>
            <div className='w-12 h-12 flex items-center justify-center rounded-full text-[#ca57c4] font-medium bg-[#f7ba34]'>
                N
            </div>

            <div>
                <p className='text-sm font-medium'>Nicola Sun</p>
                <button className='text-sm text-slate-700 underline'>
                    LogOut
                </button>
            </div>
        </div>
    )
}

export default ProfileInfo