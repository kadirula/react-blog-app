import BlogFilter from '../components/BlogFilter'
import { useState } from 'react'
import { addBlog } from '../firebase'
import { useNavigate } from 'react-router-dom';

const BlogAdd = () => {

    const user = JSON.parse(localStorage.getItem('user'));

    const navigate = useNavigate();

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [image, setImage] = useState('')
    const [category, setCategory] = useState('')


    const addBlogHandle = async (e) => {
        e.preventDefault();
        const data = {
            title: title,
            description: description,
            author: user.email,
            category: category,
            image: image
        }

        const result = await addBlog(data);
        if (result) {
            setTimeout(() => {
                navigate('/blog-list', {
                    replace: true
                });
            }, 1500);

        }

    }

    return (
        <>
            <div className='grid grid-cols-4'>
                {/* Blog Left */}
                <div className='col-span-1'>
                    <BlogFilter />
                </div>
                {/* Blog Content */}
                <div className='col-span-3'>
                    <h2 className='text-3xl font-bold pb-5'>BLOG EKLE</h2>
                    <form onSubmit={addBlogHandle} className='px-10 py-10'>
                        <div className="my-4 border-2 border-slate-300 rounded-lg px-2 py-4 shadow-lg">
                            <label htmlFor="Title" className='text-xs font-semibold mb-2 inline-block text-gray-700 ml-2'>Blog Adı</label>
                            <input
                                type="text"
                                placeholder='Blog Adı'
                                className="bg-slate-100 block w-full pl-4 h-9 sm:text-sm rounded-lg shadow-lg"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </div>
                        <div className="my-4 border-2 border-slate-300 rounded-lg px-2 py-4 shadow-lg">
                            <label htmlFor="Title" className='text-xs font-semibold mb-2 inline-block text-gray-700 ml-2'>Blog Kategorisi</label>
                            <input
                                type="text"
                                placeholder='Blog Kategorisi'
                                className="bg-slate-100 block w-full pl-4 h-9 sm:text-sm rounded-lg shadow-lg"
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                            />
                        </div>
                        <div className="my-4 border-2 border-slate-300 rounded-lg px-2 py-4 shadow-lg">
                            <label htmlFor="Title" className='text-xs font-semibold mb-2 inline-block text-gray-700 ml-2'>Blog Resmi (Base64)</label>
                            <input
                                type="text"
                                placeholder='Resim'
                                className="bg-slate-100 block w-full pl-4 h-9 sm:text-sm rounded-lg shadow-lg"
                                value={image}
                                onChange={(e) => setImage(e.target.value)}
                            />
                        </div>
                        <div className="my-4 border-2 border-slate-300 rounded-lg px-2 py-4 shadow-lg">
                            <label htmlFor="Title" className='text-xs font-semibold mb-2 inline-block text-gray-700 ml-2'>Blog Açıklaması</label>
                            <textarea
                                type="text"
                                placeholder='Blog Açıklaması'
                                className="bg-slate-100 block w-full pl-4 sm:text-sm rounded-lg pt-3 shadow-lg"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                rows='10'
                            />
                        </div>
                        <div className="my-4">
                            <button type='submit' className='bg-indigo-700 hover:bg-indigo-500 text-white px-5 py-2 rounded-lg'>Kaydet</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default BlogAdd