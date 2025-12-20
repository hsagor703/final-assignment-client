import { Outlet } from 'react-router'
import Footer from '../components/Shared/Footer/Footer'
import Navbar3 from '../components/Shared/Navbar/Navbar3'
const MainLayout = () => {
  return (
    <div>
      <Navbar3/>
      <div className='pt-24 min-h-[calc(100vh-68px)]'>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default MainLayout
