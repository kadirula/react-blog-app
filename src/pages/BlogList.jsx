import { Link } from 'react-router-dom'
import { getAllBlog } from '../firebase'


const BlogList = () => {




    return (
        <>
            <div className='max-w-3xl mx-auto'>

                <table className='w-full border-separate border border-slate-400' onLoad={loadBlogs}>
                    <thead>
                        <tr>
                            <th className='border border-slate-300'>Resim</th>
                            <th className='border border-slate-300'>Blog Adı</th>
                            <th className='border border-slate-300'></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='border border-slate-300 h-16' align='center'>
                                <img src="https://picsum.photos/50" className='rounded-full w-16 h-16' alt="" />
                            </td>
                            <td className='border border-slate-300 h-16' align='center'>
                                asdasdasd
                            </td>
                            <td className='border border-slate-300 h-16' align='center'>
                                <Link to='/' className='bg-green-500 hover:bg-green-400 transition-colors px-2 py-1 inline-block text-white text-sm mr-4 rounded-md'>Güncelle</Link>
                                <Link to='/' className='bg-red-500 hover:bg-red-400 transition-colors px-2 py-1 inline-block text-white text-sm rounded-md'>Sil</Link>
                            </td>
                        </tr>



                    </tbody>
                </table>
            </div>

        </>
    )
}

export default BlogList