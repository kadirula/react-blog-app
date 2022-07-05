import Blog from '../components/Blog';
import { useSelector } from 'react-redux'

const Home = () => {

  const { blogs } = useSelector(state => state.blogs)

  console.log(blogs);

  return (
    <>
      <Blog blogs={blogs} pageTitle={'BLOG'}/>
    </>
  )
}

export default Home