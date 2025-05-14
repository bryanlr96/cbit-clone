import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useActiveLink } from '../hooks/useActiveLink'

export default function Header() {
    const location = useLocation()
    const [count, setCount] = useState(0)
    const link = useActiveLink()
    return (

        <header className="px-4 py-6 shadow-[4px_4px_32px_0px_#5183f014] flex items-center justify-between sticky top-0 bg-white">
            <a href="#" className="lg:hidden">
                <img src="./Logo.png" alt="logo" className="w-[180px]" />
            </a>

            <button>
                <i className='icon-connections text-[26px] font-medium'/>
            </button>
            {location.pathname === '/' ? (
                <div className='hidden lg:flex flex-col'>
                    <h2 className="text-[26px] font-medium">Welcome Wood!</h2>
                    <span className="text-[#414042] flex items-center gap-1">
                        <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[16px] h-[16px] stroke-[#414042] ">
                            <path d="M6.66667 2H2V8H6.66667V2Z" strokeLinecap="round" strokeLinejoin="round"></path><path d="M13.9997 2H9.33301V5.33333H13.9997V2Z" strokeLinecap="round" strokeLinejoin="round"></path><path d="M13.9997 8H9.33301V14H13.9997V8Z" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M6.66667 10.6667H2V14H6.66667V10.6667Z" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        {count} projects
                    </span>
                </div>
            ) : (
                <h2 className='hidden lg:flex text-[26px] font-medium'> <i className={link?.icon} /> {link?.title}</h2>
            )}


            {location.pathname === '/' && (
                <form className='hidden border-[#BCBEC0] border  rounded-[40px] lg:flex pr-4 py-2'>
                    <input type="text" id="search" name="search" className="outline-none  w-[300px] pl-4  text-[#BCBEC0] text-sm placeholder:text-[#BCBEC0]" placeholder='Search' />
                    <button className='border-l-1 border-[#BCBEC0] pl-3 flex items-center cursor-pointer'>
                        <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="stroke-[#BCBEC0] w-[16px] h-[16px]"><path d="M7.33333 12.6667C10.2789 12.6667 12.6667 10.2789 12.6667 7.33333C12.6667 4.38781 10.2789 2 7.33333 2C4.38781 2 2 4.38781 2 7.33333C2 10.2789 4.38781 12.6667 7.33333 12.6667Z" stroke="#BCBEC0" stroke-linecap="round" stroke-linejoin="round"></path><path d="M13.9996 13.9996L11.0996 11.0996" stroke="#BCBEC0" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                    </button>
                </form>
            )}


            <div className="hidden lg:flex gap-3">
                <button className="p-3 rounded-full bg-white shadow-[3.33px_3.33px_26.67px_0px_#00000014] w-[50px] h-[50px] flex items-center justify-center cursor-pointer">
                    <svg viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[17px] h-[17px] stroke-[#414042] ">
                        <path d="M2.05664 2.75H6.22331C6.96002 2.75 7.66656 3.04266 8.18749 3.56359C8.70843 4.08453 9.00108 4.79107 9.00108 5.52778V15.25C9.00108 14.6975 8.78159 14.1676 8.39089 13.7769C8.00019 13.3862 7.47029 13.1667 6.91775 13.1667H2.05664V2.75Z" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"></path><path d="M15.9444 2.75H11.7778C11.0411 2.75 10.3345 3.04266 9.81359 3.56359C9.29266 4.08453 9 4.79107 9 5.52778V15.25C9 14.6975 9.21949 14.1676 9.61019 13.7769C10.0009 13.3862 10.5308 13.1667 11.0833 13.1667H15.9444V2.75Z" strokeWidth="0.833333" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>

                <button className="p-3 rounded-full bg-white shadow-[3.33px_3.33px_26.67px_0px_#00000014] w-[50px] h-[50px] flex items-center justify-center cursor-pointer">
                    <svg viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[17px] h-[17px] stroke-[#414042]">
                        <path d="M9.00011 15.9445C12.8354 15.9445 15.9446 12.8354 15.9446 9.00005C15.9446 5.16474 12.8354 2.0556 9.00011 2.0556C5.1648 2.0556 2.05566 5.16474 2.05566 9.00005C2.05566 12.8354 5.1648 15.9445 9.00011 15.9445Z" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"></path><path d="M6.97949 6.91666C7.14276 6.45254 7.46501 6.06117 7.88918 5.81189C8.31335 5.5626 8.81206 5.47147 9.29698 5.55465C9.78189 5.63783 10.2217 5.88994 10.5386 6.26633C10.8554 6.64272 11.0288 7.1191 11.0281 7.6111C11.0281 8.99999 8.94477 9.69443 8.94477 9.69443" strokeWidth="0.833333" strokeLinecap="round" strokeLinejoin="round"></path><path d="M9 12.4723H9.01042" strokeWidth="0.833333" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>

                <button className="p-3 rounded-full bg-white shadow-[3.33px_3.33px_26.67px_0px_#00000014] w-[50px] h-[50px] flex items-center justify-center cursor-pointer">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[17px] h-[17px] stroke-[#414042]">
                        <path d="M15 6.66669C15 5.3406 14.4732 4.06883 13.5355 3.13115C12.5979 2.19347 11.3261 1.66669 10 1.66669C8.67392 1.66669 7.40215 2.19347 6.46447 3.13115C5.52678 4.06883 5 5.3406 5 6.66669C5 12.5 2.5 14.1667 2.5 14.1667H17.5C17.5 14.1667 15 12.5 15 6.66669Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M11.4419 17.5C11.2954 17.7526 11.0851 17.9622 10.8321 18.1079C10.5791 18.2537 10.2922 18.3304 10.0003 18.3304C9.70828 18.3304 9.42142 18.2537 9.1684 18.1079C8.91539 17.9622 8.7051 17.7526 8.55859 17.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M1.66699 6.66669C1.66699 4.83335 2.25033 3.08335 3.33366 1.66669" strokeLinecap="round" strokeLinejoin="round"></path><path d="M18.3337 6.66669C18.3337 4.8636 17.7488 3.10916 16.667 1.66669" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>

                <button className="p-3 flex items-center   rounded-full bg-white shadow-[3.33px_3.33px_26.67px_0px_#00000014] cursor-pointer">
                    <img src="./pepeuser.jpg" width={32} alt="user" className="aspect-auto rounded-full" />
                    <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[17px] h-[17px] stroke-[#414042] mr-1">
                        <path d="M3.83203 6.1308L7.57035 9.86912L11.3087 6.1308" strokeWidth="1.1215" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
            </div>
        </header>
    )
}
