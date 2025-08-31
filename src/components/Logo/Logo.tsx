import logo from "/logo.webp"


const Logo = () => {
  return (
    <div>
        <div className='flex items-center'>
            <img src={logo} alt="logo" 
            className='w-15 inline'/>
            <p className='text-orange-600 font-semibold text-lg inline'>SwiftDrop</p>
        </div>
        <p className='text-xs font-light text-gray-500 relative bottom-4 left-5'>Delivery Unlimited</p>
    </div>
  )
}

export default Logo
