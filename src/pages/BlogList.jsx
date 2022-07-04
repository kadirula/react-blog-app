import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import BlogFilter from '../components/BlogFilter'


const BlogList = () => {

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
                <h2 className='text-3xl font-bold pb-5'>BLOG LİSTESİ</h2>
                    <table className='w-full border-separate border border-slate-400'>
                        <thead>
                            <tr>
                                <th className='border border-slate-300'>Resim</th>
                                <th className='border border-slate-300'>Blog Adı</th>
                                <th className='border border-slate-300'>Yazar</th>
                                <th className='border border-slate-300'></th>
                            </tr>
                        </thead>
                        <tbody>
                            {authorBlogs.map((blog, index) => (
                                <tr key={index}>
                                    <td className='border border-slate-300 h-16' align='center'>
                                        <img src={blog.image} className='rounded-full w-16 h-16' alt="" />
                                    </td>
                                    <td className='border border-slate-300 h-16' align='center'>
                                        {blog.title}
                                    </td>
                                    <td className='border border-slate-300 h-16' align='center'>
                                        {blog.author}
                                    </td>
                                    <td className='border border-slate-300 h-16' align='center'>
                                        <Link to='/' className='bg-green-500 hover:bg-green-400 transition-colors px-2 py-1 inline-block text-white text-sm mr-4 rounded-md'>Güncelle</Link>
                                        <Link to='/' className='bg-red-500 hover:bg-red-400 transition-colors px-2 py-1 inline-block text-white text-sm rounded-md'>Sil</Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default BlogList