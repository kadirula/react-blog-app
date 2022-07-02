import { Link, NavLink } from 'react-router-dom';
const Header = () => {
    return (
        <header className="bg-slate-200">
            <div className="container mx-auto h-16 flex items-center justify-between">
                <Link to="/" className='font-bold text-2xl text-indigo-700'>Blog App</Link>
                <form onSubmit={(e) => e.preventDefault()}>
                    <div class="mt-1 relative rounded-md shadow-sm flex items-center">
                        <input type="text" placeholder='Blog Ara...' className="focus:ring-indigo-500 focus:border-indigo-500 block pl-4 h-9 w-80 sm:text-sm border-gray-300 rounded-tl-lg rounded-bl-lg" />
                        <button type='submit' className='bg-indigo-700 hover:bg-indigo-500 text-white px-3 rounded-tr-lg rounded-br-lg h-9'>Ara</button>
                    </div>
                </form>
                <ul className='flex items-center'>
                    <li className='mx-4'>
                        <Link to="/" className='font-bold hover:text-indigo-600 transition-colors'>Anasayfa</Link>
                    </li>
                    <li className='mx-4'>
                        <Link to="/my-blogs" className='font-bold hover:text-indigo-600 transition-colors'>Yayınladığım Yazılar</Link>
                    </li>
                    <li className='mx-4'>
                        <Link to="/login" className='font-bold hover:text-indigo-600 transition-colors'>Giriş Yap</Link>
                    </li>
                    <li className='mx-4'>
                        <Link to="/register" className='font-bold hover:text-indigo-600 transition-colors'>Kayıt Ol</Link>
                    </li>
                </ul>
            </div>

        </header>
    )
}

export default Header