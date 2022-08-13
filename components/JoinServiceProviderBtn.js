import React from 'react'
import { useRouter } from 'next/router'

function JoinServiceProviderBtn() {

  const router = useRouter();
  return (
    <div className='flex flex-col place-items-center row-span-1 my-4'>
        {/* Register Button */}
        <div className=''>
            <a onClick={() => router.push('/business/signup')} className='button'>Partner up with as Service Providers</a>
        </div>
    </div>

  )
}

export default JoinServiceProviderBtn
