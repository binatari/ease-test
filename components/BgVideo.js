import React from 'react'

const BgVideo = () => {
    return (<video className='absolute top-0 left-0 min-h-full w-screen object-cover' autoPlay loop muted>
        <source src={'/images/bg--video.mp4'} type='video/mp4' />
    </video>
    )
}

export default BgVideo