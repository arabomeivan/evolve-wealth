'use client'

import  Link  from "next/link";
import { MenuIcon } from '@heroicons/react/outline';
import Image from "next/image";
import Logo from '../assets/logo.png'
import { useRouter, usePathname } from "next/navigation";
function NavBar() {

    // const router = useRouter();
    const pathname = usePathname();

    interface Links 
    {
        title: string,
        link: string
    }

    let links: Links[]=
    [
        {
            title: 'Home',
            link: '/'
        },
        {
            title: 'About Us',
            link: '/aboutus'
        },
        {
            title: 'Contact',
            link: '/contact'
        },
        {
            title: 'Plans',
            link: '/plans'
        },
        {
            title: 'FAQ',
            link: '/faq'
        },
    ]
  return (
    <div>
      <nav className="navbar fixed top-0 w-full">
        <div className="container flex justify-between">
       <Image
       alt="not loading"
        src={Logo}
        width={130}
        height={130}
        className=""
       />
       <div className="md:flex hidden">
        <div className="flex mr-4">
        {
         links.map((links, index)=>(
            <Link className={pathname=== links.link ? "ml-5 flex self-center activeLink" : "ml-5 flex self-center"} href={links.link} key={index}>
                {links.title}
            </Link>
         ))
       }
        </div>
       

<div className="flex">
<button
  className="middle none center self-center rounded-lg px-6 connect-btn text-white h-[34px]"
  data-ripple-light="true"
>
  Connect
</button>
</div>

       </div>

       <div className="md:hidden flex">
<button
  className="middle none center self-center rounded-lg px-6 bg-transparent  text-white h-[34px]"
  data-ripple-light="true"
>
<MenuIcon className="h-6 w-6" />
</button>
        </div>
        </div>

        
      </nav>
    </div>
  );
}

export default NavBar;
