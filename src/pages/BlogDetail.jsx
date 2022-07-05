import BlogFilter from '../components/BlogFilter'

const BlogDetail = () => {
  return (
    <div className='grid grid-cols-4'>
      <div className='col-span-1'>
        <BlogFilter />
      </div>
      <div className='col-span-3'>
        <h2 className='text-3xl font-bold pb-5'>BLOG DETAY</h2>
        <div className='grid grid-cols-3 gap-3'>
          blog detay
        </div>
      </div>
    </div>
  )
}

export default BlogDetail