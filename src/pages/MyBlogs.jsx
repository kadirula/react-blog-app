import BlogFilter from '../components/BlogFilter'
import BlogItem from '../components/BlogItem'

const MyBlogs = () => {
    return (
        <>
            <div className='grid grid-cols-4'>
                {/* Blog Left */}
                <div className='col-span-1'>
                    <BlogFilter />
                </div>
                {/* Blog Content */}
                <div className='col-span-3'>
                    <h2 className='text-3xl font-bold pb-5'>YAYINLADIĞIM YAZILAR</h2>
                    <div className='grid grid-cols-3 gap-3'>
                        <BlogItem />
                    </div>
                </div>
            </div>
        </>
    )
}

export default MyBlogs