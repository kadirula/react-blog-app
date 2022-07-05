import { useSelector } from 'react-redux'
import Blog from '../components/Blog'

const AuthorBlog = () => {

  const { authorBlogs } = useSelector(state => state.blogs)

  return (
    <>
      <Blog blogs={authorBlogs} pageTitle='YAYINLADIĞIM YAZILAR' />
    </>
  )
}

export default AuthorBlog