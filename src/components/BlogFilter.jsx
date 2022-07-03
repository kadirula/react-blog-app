import { Link } from 'react-router-dom'
import { logout } from '../firebase';
import { useNavigate } from 'react-router-dom';

const BlogFilter = () => {

    const navigate = useNavigate();

    const user = JSON.parse(localStorage.getItem('user'));

    const logoutHandle = async () => {
        const result = await logout();
        if (result) {
            navigate('/', {
                replace: true
            });
        }
    }

    return (
        <div>
            <h2 className='text-3xl font-bold pb-5'>BLOG FILTER</h2>
            {
                user ?
                    <div>
                        <h4 className='font-bold'>Merhaba <span className='text-indigo-500'> ({user.displayName ? user.displayName : user.email})</span></h4>
                        <ul className='my-5'>
                            <li className='py-1 px-3 hover:bg-indigo-700 transition-colors'>
                                <Link to='/' className='font-bold text-indigo-700 hover:text-white block transition-colors' >Anasayfa</Link>
                            </li>
                            <li className='py-1 px-3 hover:bg-indigo-700 transition-colors'>
                                <Link to='/my-blogs' className='font-bold text-indigo-700 hover:text-white block transition-colors' >Yayınladığım Yazılar</Link>
                            </li>
                            {
                                user &&
                                <li className='py-1 px-3 hover:bg-indigo-700 transition-colors'>
                                    <button onClick={logoutHandle} className='font-bold text-indigo-700 hover:text-white block transition-colors' >Çıkış Yap</button>
                                </li>
                            }

                        </ul>
                        <hr />
                    </div>
                    :
                    null
            }

            <div>
                <h4 className='pt-5 font-bold text-lg'>Kategoriler</h4>
                <ul className='my-5 flex flex-wrap items-center'>
                    <li className='mr-2 mb-1 rounded-md bg-indigo-500 hover:bg-indigo-400 transition-colors'>
                        <Link to='/category-blog' className='px-2 py-1 inline-block text-white font-semibold'>Kategori - 1</Link>
                    </li>
                    <li className='mr-2 mb-1 rounded-md bg-indigo-500 hover:bg-indigo-400 transition-colors'>
                        <Link to='/category-blog' className='px-2 py-1 inline-block text-white font-semibold'>Kategori - 2</Link>
                    </li>
                    <li className='mr-2 mb-1 rounded-md bg-indigo-500 hover:bg-indigo-400 transition-colors'>
                        <Link to='/category-blog' className='px-2 py-1 inline-block text-white font-semibold'>Kategori - 3</Link>
                    </li>
                    <li className='mr-2 mb-1 rounded-md bg-indigo-500 hover:bg-indigo-400 transition-colors'>
                        <Link to='/category-blog' className='px-2 py-1 inline-block text-white font-semibold'>Kategori - 4</Link>
                    </li>
                    <li className='mr-2 mb-1 rounded-md bg-indigo-500 hover:bg-indigo-400 transition-colors'>
                        <Link to='/category-blog' className='px-2 py-1 inline-block text-white font-semibold'>Kategori - 5</Link>
                    </li>
                </ul>
            </div>

            <hr />
            <div>
                <h4 className='pt-5 font-bold text-lg'>En Çok Okunanlar</h4>
                <ul className='my-5'>
                    <li className='flex items-center mb-4 bg-indigo-100 p-3 rounded-lg shadow-lg hover:bg-indigo-50 transition-colors cursor-pointer'>
                        <Link to='/blog-detail'>
                            <img src="https://picsum.photos/80" className='rounded-full w-20 h-20' alt="" />
                        </Link>
                        <Link to='/blog-detail' className='ml-3 text-indigo-700 font-semibold text-lg'>Blog Title</Link>
                    </li>
                    <li className='flex items-center mb-4 bg-indigo-100 p-3 rounded-lg shadow-lg hover:bg-indigo-50 transition-colors cursor-pointer'>
                        <Link to='/blog-detail'>
                            <img src="https://picsum.photos/80" className='rounded-full w-20 h-20' alt="" />
                        </Link>
                        <Link to='/blog-detail' className='ml-3 text-indigo-700 font-semibold text-lg'>Blog Title</Link>
                    </li>
                    <li className='flex items-center mb-4 bg-indigo-100 p-3 rounded-lg shadow-lg hover:bg-indigo-50 transition-colors cursor-pointer'>
                        <Link to='/blog-detail'>
                            <img src="https://picsum.photos/80" className='rounded-full w-20 h-20' alt="" />
                        </Link>
                        <Link to='/blog-detail' className='ml-3 text-indigo-700 font-semibold text-lg'>Blog Title</Link>
                    </li>
                </ul>
            </div>

            <hr />
            {
                user ?
                    <ul className='my-5'>
                        <li className='py-1'>
                            <h4 className='font-bold uppercase text-2xl bg-indigo-700 text-white py-1 px-3 inline-block' >YÖNETİM</h4>
                        </li>
                        <li className='py-1 px-3 hover:bg-indigo-700 transition-colors'>
                            <Link to='/blog-add' className='font-bold text-indigo-700 hover:text-white block transition-colors' >Yazı Ekle</Link>
                        </li>
                        <li className='py-1 px-3 hover:bg-indigo-700 transition-colors'>
                            <Link to='/blog-list' className='font-bold text-indigo-700 hover:text-white block transition-colors' >Yayınladığım Yazı Listesi</Link>
                        </li>
                    </ul>
                    :
                    null
            }

        </div>
    )
}

export default BlogFilter