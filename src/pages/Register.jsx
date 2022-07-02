import React from 'react'

const Register = () => {
  return (
    <>
      <div className='max-w-xl mx-auto'>
        <form onSubmit={(e) => e.preventDefault()} className='text-center bg-indigo-100 px-10 py-10'>
          <h3 className='text-2xl font-bold uppercase text-indigo-700'>KAYIT OL</h3>
          <div class="my-4">
            <input
              type="text"
              placeholder='E-Posta'
              className="bg-white block w-full pl-4 h-9 sm:text-sm" />
          </div>
          <div class="my-4">
            <input
              type="text"
              placeholder='Şifre'
              className="bg-white block w-full pl-4 h-9 sm:text-sm" />
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