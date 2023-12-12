import React from 'react'

const Image = ({ add_image, images, type, setImage }) => {
    return (
        <div className='grid grid-cols-2 gap-2'>
            {
                [1,2,3,4].map((item, i) => <div key={i} onClick={() => type === 'background' ? setImage(item.image_url) : add_image(item.image_url)} className='w-full h-[90px] overflow-hidden rounded-sm cursor-pointer'>
                    <img className='w-full h-full object-fill' src={'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg'} alt="image" />
                </div>)
            }
        </div>
    )
}

export default Image