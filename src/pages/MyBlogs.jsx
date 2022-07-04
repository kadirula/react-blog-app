import BlogFilter from '../components/BlogFilter'
import BlogItem from '../components/BlogItem'
import { useSelector } from 'react-redux'

const MyBlogs = () => {

    const { authorBlogs } = useSelector(state => state.blogs)

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
                        <BlogItem blogs={authorBlogs}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MyBlogs