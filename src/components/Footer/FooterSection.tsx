import FooterList from './FooterList'
import Logo from '../Logo/Logo'
import SocialHandle from '../SocialHandle/SocialHandle'
import { Copyright } from 'lucide-react'

const FooterSection = () => {
  return (
    <div className='bg-zinc-900 text-zinc-50 p-5 flex flex-col gap-y-5 py-10
    md:flex-row md:items-start md:justify-between'>
        <div className='w-full md:w-auto'>
            <Logo/>
        </div>
        <div className='w-full md:w-auto'>
            <FooterList/>
        </div>
        <div>
            <SocialHandle/>
            <div className='text-sm text-zinc-500 mt-5'>
                <Copyright className='inline' size={15}/> SwiftDrop {new Date().getFullYear()}. All rights reserved.
            </div>
        </div>
    </div>
  )
}

export default FooterSection
