import {Link} from 'react-router-dom'

const Blog = () => {
  return (
    <>
    <div className='grid grid-cols-4 gap-4'>
        <div className='blog mx-3 shadow-xl rounded-lg'>
            <div className='rounded-xl overflow-hidden max-h-64'>
                <img src="https://picsum.photos/600" className='hover:scale-105 transition-all' alt="" />
            </div>
            <div className='py-4 px-5'>
                <Link to='/' className='font-bold text-xl text-indigo-700'>Blog Title</Link>
                <p className='mt-3'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto ab commodi voluptas iure necessitatibus natus.
                </p>
                <Link to='/' className='bg-indigo-700 hover:bg-indigo-500 transition-colors text-white py-2 px-8 rounded-lg inline-block mt-3'>Detay</Link>
            </div>
        </div>
        <div className='blog mx-3 shadow-xl rounded-lg'>
            <div className='rounded-xl overflow-hidden max-h-64'>
                <img src="https://picsum.photos/600" className='hover:scale-105 transition-all' alt="" />
            </div>
            <div className='py-4 px-5'>
                <Link to='/' className='font-bold text-xl text-indigo-700'>Blog Title</Link>
                <p className='mt-3'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto ab commodi voluptas iure necessitatibus natus.
                </p>
                <Link to='/' className='bg-indigo-700 hover:bg-indigo-500 transition-colors text-white py-2 px-8 rounded-lg inline-block mt-3'>Detay</Link>
            </div>
        </div>
        <div className='blog mx-3 shadow-xl rounded-lg'>
            <div className='rounded-xl overflow-hidden max-h-64'>
                <img src="https://picsum.photos/600" className='hover:scale-105 transition-all' alt="" />
            </div>
            <div className='py-4 px-5'>
                <Link to='/' className='font-bold text-xl text-indigo-700'>Blog Title</Link>
                <p className='mt-3'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto ab commodi voluptas iure necessitatibus natus.
                </p>
                <Link to='/' className='bg-indigo-700 hover:bg-indigo-500 transition-colors text-white py-2 px-8 rounded-lg inline-block mt-3'>Detay</Link>
            </div>
        </div>
        <div className='blog mx-3 shadow-xl rounded-lg'>
            <div className='rounded-xl overflow-hidden max-h-64'>
                <img src="https://picsum.photos/600" className='hover:scale-105 transition-all' alt="" />
            </div>
            <div className='py-4 px-5'>
                <Link to='/' className='font-bold text-xl text-indigo-700'>Blog Title</Link>
                <p className='mt-3'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto ab commodi voluptas iure necessitatibus natus.
                </p>
                <Link to='/' className='bg-indigo-700 hover:bg-indigo-500 transition-colors text-white py-2 px-8 rounded-lg inline-block mt-3'>Detay</Link>
            </div>
        </div>
    </div>
    </>
  )
}

export default Blog