import React from 'react'
import Topnav from '../components/Topnav'
import Outercomp from '../components/Outercomp'

export const StudentDatabase = () => {
  return (
    <div className="w-full min-h-screen">
        <Topnav>
            <Outercomp name='STUDENT DETAILS' addon='SEC19CS001'>
                <div className='mt-8 ml-10'>
                    <div className='flex'>
                    <div className='text-black p-2 w-36 text-center'>NAME</div>
                    <div className=' ml-28 w-64 h-10 rounded-lg bg-white text-center p-2 mb-7 shadow-md'>Aakriti Krishnan</div>
                    </div>
                    <div className='flex'>
                    <div className='text-black p-2 w-36 text-center'>SEC ID</div>
                    <div className=' ml-28 w-64 h-10 rounded-lg bg-white text-center p-2 mb-7 shadow-md'>SEC19CS001</div>
                    </div>
                    <div className='flex'>
                    <div className='text-black p-2 w-36 text-center'>REGISTER NO.</div>
                    <div className=' ml-28 w-64 h-10 rounded-lg bg-white text-center p-2 mb-7 shadow-md'>412519105245</div>
                    </div>
                    <div className='flex'>
                    <div className='text-black p-2 w-36 text-center'>YEAR/SEM</div>
                    <div className=' ml-28 w-64 h-10 rounded-lg bg-white text-center p-2 mb-7 shadow-md'>III/7</div>
                    </div>
                    <div className='flex'>
                    <div className='text-black p-2 w-36 text-center'>DEPARTMENT</div>
                    <div className=' ml-28 w-64 h-10 rounded-lg bg-white text-center p-2 mb-7 shadow-md'>CSE</div>
                    </div>
                    <div className='flex'>
                    <div className='text-black p-2 w-36 text-center'>SECTION</div>
                    <div className=' ml-28 w-64 h-10 rounded-lg bg-white text-center p-2 mb-7 shadow-md'>A</div>
                    </div>
                    <div className='flex'>
                    <div className='text-black p-2 w-36 text-center'>MAIL ID</div>
                    <div className=' ml-28 w-64 h-10 rounded-lg bg-white text-center p-2 mb-7 shadow-md'>sec19cs001@sairamtap.edu.in</div>
                    </div>
                    <div className='flex'>
                    <div className='text-black p-2 w-36 text-center'>MOBILE NO.</div>
                    <div className=' ml-28 w-64 h-10 rounded-lg bg-white text-center p-2 mb-7 shadow-md'>9628462846</div>
                    </div>
                    <div className='flex'>
                    <div className='text-black p-2 w-36 text-center'>DUE AMOUNT</div>
                    <div className=' ml-28 w-64 h-10 rounded-lg bg-white text-center p-2 mb-7 shadow-md'>₹300</div>
                    </div>
                    <div className='w-full flex justify-center '>
                    <button className='w-28 h-10 m-6 bg-buttonblue rounded-lg items-center text-white text-center'> Edit </button>
                    <button className='w-28 h-10 m-6 bg-buttonblue rounded-lg items-center text-white text-center'> Back </button>
                    </div>
                </div>


            </Outercomp>

        </Topnav>
        
    </div>
  )
}
