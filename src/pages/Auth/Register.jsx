import { useState } from 'react';
import { register} from '../../firebase';
import { useNavigate } from 'react-router-dom';

const Register = () => {

  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')

  const registerSubmitHandle = async (e) => {
    e.preventDefault();
    const user = await register(email, password);
    if (user) {
      navigate('/login', {
        replace: true
      });
    }
  } 

  return (
    <>
      <div className='max-w-xl mx-auto'>
        <form onSubmit={registerSubmitHandle} className='text-center bg-indigo-100 px-10 py-10'>
          <h3 className='text-2xl font-bold uppercase text-indigo-700'>KAYIT OL</h3>
          <div className="my-4">
            <input
              type="text"
              placeholder='E-Posta'
              className="bg-white block w-full pl-4 h-9 sm:text-sm"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="my-4">
            <input
              type="password"
              placeholder='Şifre'
              className="bg-white block w-full pl-4 h-9 sm:text-sm"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="my-4">
            <button type='submit' className='bg-indigo-700 hover:bg-indigo-500 text-white px-5 py-2 rounded-lg'>Kayıt Ol</button>
          </div>
        </form>

      </div>
    </>
  )
}

export default Register