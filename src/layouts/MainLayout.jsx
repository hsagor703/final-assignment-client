import { Outlet } from 'react-router'
import Navbar from '../components/Shared/Navbar/Navbar'
import Footer from '../components/Shared/Footer/Footer'
import Navbar2 from '../components/Shared/Navbar/Navbar2'
import Navbar3 from '../components/Shared/Navbar/Navbar3'
const MainLayout = () => {
  return (
    <div>
      {/* <Navbar /> */}
      {/* <Navbar2/> */}
      <Navbar3/>
      <div className='pt-24 min-h-[calc(100vh-68px)]'>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default MainLayout
