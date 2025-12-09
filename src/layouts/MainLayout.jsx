import { Outlet } from 'react-router'
import Navbar from '../components/Shared/Navbar/Navbar'
import Footer from '../components/Shared/Footer/Footer'
import Navbar2 from '../components/Shared/Navbar/Navbar2'
const MainLayout = () => {
  return (
    <div>
      <Navbar />
      {/* <Navbar2/> */}
      <div className='pt-24 min-h-[calc(100vh-68px)]'>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default MainLayout
