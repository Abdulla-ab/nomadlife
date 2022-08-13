import React from 'react'
import { useRouter } from 'next/router'

function Footer() {
    const router = useRouter();
  return (
    <div className='bg-gradient-to-r from-[#0B8CA5] via-[#055E70] to-[#0B8CA5] text-white'>
        <div className='grid grid-rows-4 sm:grid-cols-4 sm:grid-rows-1 px-10 py-8 gap-x-12 gap-y-10'>
            {/* About us */}
            <div className='flex flex-col gap-y-4'>
                <p className='text-center font-semibold sm:text-left lg:text-lg'>About Us</p>
                <img src="NomadBuddy_logo_2.png" alt="nomadBuddy_logo" className='w-auto h-auto'/>
                <p className='text-xs text-center sm:text-left font-light'>Spatium Innovation Hub is a thinking company on a mission to connect people and businesses with meaningful innovation.</p>
                <div className='flex flex-row gap-x-2 mx-auto sm:mx-0'>
                    <a onClick={() => router.push('/')}><img src="twitter_logo.png" alt="twitter" className='w-auto h-auto'/></a>
                    <a onClick={() => router.push('/')}><img src="facebook_logo.png" alt="facebook" className='w-auto h-auto'/></a>
                    <a onClick={() => router.push('/')}><img src="instagram_logo.png" alt="instagram" className='w-auto h-auto'/></a>
                    <a onClick={() => router.push('/')}><img src="linkedin_logo.png" alt="linkedin" className='w-auto h-auto'/></a>
                </div>

            </div>

            {/* Resources */}
            <div className='flex flex-col gap-y-7 text-center sm:text-left font-light'>
                <p className='font-semibold sm:text-left lg:text-lg'>Resources</p>
                <a onClick={() => router.push('/')} className='footerLink'>Help Centre</a>
                <a onClick={() => router.push('/')} className='footerLink'>Partners</a>
                <a onClick={() => router.push('/')} className='footerLink'>Blogs</a>
                <a onClick={() => router.push('/')} className='footerLink'>Nomad Researches</a>
                <a onClick={() => router.push('/')} className='footerLink'>Utility</a>

            </div>

            {/* Services */}
            <div className='flex flex-col gap-y-7 text-center sm:text-left font-light'>
                <p className='font-semibold sm:text-left lg:text-lg'>Digital Nomad Life Planning</p>
                <a onClick={() => router.push('/')} className='footerLink'>Visa Guidance</a>
                <a onClick={() => router.push('/')} className='footerLink'>Nomad Community</a>
                <a onClick={() => router.push('/')} className='footerLink'>Project Oppotunities</a>
                <a onClick={() => router.push('/')} className='footerLink'>Volunteering Opportunities</a>
                <a onClick={() => router.push('/')} className='footerLink'>Co-Working   Spaces</a>

            </div>

            {/* Quick Links */}
            <div className='flex flex-col gap-y-7 text-center sm:text-left'>
                <p className='font-semibold sm:text-left lg:text-lg'>Quick Links</p>
                <a onClick={() => router.push('/')} className='footerLink'>Carrers</a>
                <a onClick={() => router.push('/')} className='footerLink'>Resources</a>
                <a onClick={() => router.push('/')} className='footerLink'>Products</a>
                <a onClick={() => router.push('/')} className='footerLink'>Blogs</a>
            </div>
      
        </div>
        {/* Copyrigths */}
        <div className='flex flex-col text-center gap-y-2'>
            <p className='text-xs font-sm'>Copyright © {new Date().getFullYear()} CYRAYS Inc</p>
            <p className='text-xs font-light'>All rights reserved.</p>
        </div>
    </div>
  )
}

export default Footer
