import { Link } from 'react-router-dom'

const BlogItem = ({ blogs }) => {

    return (
        <>
            {blogs.map((blog, index) => (
                <div key={index} className='blog mx-3 mb-5 shadow-xl rounded-lg overflow-hidden relative'>
                    <div className='overflow-hidden h-64 relative'>
                        <img src={blog.image} className='hover:scale-105 transition-all w-full h-full object-cover' alt="" />
                        <Link to='/author-blog' className='absolute top-0 right-0 bg-indigo-500 text-white px-5 font-bold py-1 z-10'>{blog.author}</Link>
                        <Link to={`/category-blog?category=${blog.category}`} className='absolute bottom-0 left-0 bg-indigo-500 text-white px-5 font-bold py-1 z-10'>{blog.category}</Link>
                    </div>
                    <div className='py-4 px-5'>
                        <Link to='/blog-detail' className='font-bold text-xl text-indigo-700'>{blog.title}</Link>
                        <p className='mt-3'>
                            {
                                blog.description.length > 150 ?
                                    blog.description.substring(0, 150) + ' ...'
                                    :
                                    blog.description
                            }
                        </p>
                        <Link
                            to={`/blog-detail/${blog}`}
                            className='bg-indigo-700 hover:bg-indigo-500 transition-colors text-white py-2 px-8 rounded-lg inline-block mt-3'
                        >
                            Detay
                        </Link>
                    </div>
                </div>
            ))}

        </>
    )
}

export default BlogItem