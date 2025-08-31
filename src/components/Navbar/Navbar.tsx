import Logo from '../Logo/Logo'
import LoginBtn from '../LoginBtn'
import NavList from './NavList'

const Navbar = () => {
  return (
    <div className='w-full flex items-center justify-between relative px-2
    md:border-b border-gray-100 md:shadow md:p-2 md:px-10'>
       <div className='flex items-center gap-x-5'>
         <Logo/>
         <div className='hidden md:block'><NavList/></div>
       </div>
       <div className='flex items-center gap-x-2'>
        <div className='md:order-1'><LoginBtn/></div>
        <div className='md:hidden'><NavList/></div>
       </div>
    </div>
  )
}

export default Navbar
