import BlogFilter from './BlogFilter'
import BlogItem from './BlogItem'

const Blog = ({blogs, pageTitle}) => {

    return (
        <>
            <div className='grid grid-cols-4'>
                {/* Blog Left */}
                <div className='col-span-1'>
                    <BlogFilter />
                </div>
                {/* Blog Content */}
                <div className='col-span-3'>
                    <h2 className='text-3xl font-bold pb-5'>{pageTitle}</h2>
                    <div className='grid grid-cols-3 gap-3'>
                        <BlogItem blogs={blogs}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Blog