import { Link } from 'react-router-dom'

const BlogFilter = () => {
    return (
        <div>
            <h2 className='text-3xl font-bold pb-5'>BLOG FILTER</h2>
            <ul className='my-5'>
                <li className='py-1 px-3 hover:bg-indigo-700 transition-colors'>
                    <Link to='/' className='font-bold text-indigo-700 hover:text-white block transition-colors' >Anasayfa</Link>
                </li>
                <li className='py-1 px-3 hover:bg-indigo-700 transition-colors'>
                    <Link to='/my-blogs' className='font-bold text-indigo-700 hover:text-white block transition-colors' >Yayınladığım Yazılar</Link>
                </li>
                <li className='py-1 px-3 hover:bg-indigo-700 transition-colors'>
                    <Link to='/' className='font-bold text-indigo-700 hover:text-white block transition-colors' >Çıkış Yap</Link>
                </li>
            </ul>
            <hr />
            <ul className='my-5'>
                <li className='py-1'>
                    <h4 className='font-bold uppercase text-2xl bg-indigo-700 text-white py-1 px-3 inline-block' >YÖNETİM</h4>
                </li>
                <li className='py-1 px-3 hover:bg-indigo-700 transition-colors'>
                    <Link to='/' className='font-bold text-indigo-700 hover:text-white block transition-colors' >Yazı Ekle</Link>
                </li>
                <li className='py-1 px-3 hover:bg-indigo-700 transition-colors'>
                    <Link to='/my-blogs' className='font-bold text-indigo-700 hover:text-white block transition-colors' >Yayınladığım Yazı Listesi</Link>
                </li>

            </ul>
        </div>
    )
}

export default BlogFilter