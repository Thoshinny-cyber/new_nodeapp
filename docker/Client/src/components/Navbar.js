import React, { useState} from 'react'
import title_white from '../images/paper_rocket.png' 
import arrow_blue from '../images/arrow_blue.png'
import { Link } from 'react-router-dom';

export const Navbar = () => {  

  const [navclick, setNavClick] = useState('home_div')
  const [isOpen, setIsOpen] = useState(false)
  const [isChosen, setIsChosen] = useState(false) 

 
  function navToggle(id) { 
    const curr = document.getElementById(id); 
    
  if(id!=='fe_div')
  setIsChosen(false) 
  if (isOpen===true)
  setIsOpen(false)
    
    if (navclick) {
      const prev = document.getElementById(navclick);
      prev.classList.remove('text-buttonblue')
      prev.classList.add('text-white')
      prev.classList.remove('bg-white')
      }
    setNavClick(id)
    
    curr.classList.add ('bg-white')
    curr.classList.remove("text-white")
    curr.classList.add('text-buttonblue')   
  }      

   return (
       <nav className='w-max h-screen bg-[#303030] fixed flex flex-col items-center font-merriweather'>
            <Link to='/home'><div className='flex justify-center w-full py-3 drop-shadow-2xl'><img src={title_white} alt="White Logo"/></div></Link>
            <div className='mt-2 font-medium'>
              <Link to='/home' className='w-full'><div id='home_div' className=' w-full text-sm flex  px-6 py-4 justify-center items-center  text-buttonblue bg-white' onClick={() => navToggle('home_div')}>Home</div></Link>        
              {/* <Link to='/dashboard' className='w-full'><div  id='dash_div' className=' w-full text-sm flex  px-6 py-4 justify-center items-center  text-white' onClick={() => navToggle('dash_div')} >Dashboard</div></Link> */}
              <Link to='/labs' className='w-full'><div id='labs_div' className=' w-full text-sm flex  px-6 py-4 justify-center items-center  text-white' onClick={() => navToggle('labs_div')}>Labs</div></Link>
              <Link to='/halls' className='w-full'><div id='halls_div' className=' w-full text-sm flex  px-6 py-4 justify-center items-center  text-white' onClick={() => navToggle('halls_div')}>Halls</div></Link>
              <Link to='/cells' className='w-full'><div id='cells_div' className=' w-full text-sm flex  px-6 py-4 justify-center items-center  text-white' onClick={() => navToggle('cells_div')}>Cells</div></Link>
              <button id='fe_div' className=' w-full text-sm flex  px-6 py-4 justify-center items-center  text-white' onClick={() => navToggle('fe_div', setIsOpen(!isOpen), setIsChosen(true))}>Faulty Equipments</button>
                {isOpen && isChosen && <div> 
                  <Link to='/faultyeqre' >
                    <div className='flex bg-white w-full'>
                    <div><img src={arrow_blue} alt='arrow' className='h-4 mt-1.5 mr-5 ml-16 justify-end'></img></div>
                    <div className='w-full text-sm flex text-buttonblue bg-white mt-1'>Report</div>
                    </div>
                    </Link>
                    <Link to='/faultyeqrev' >
                    <div className='flex bg-white w-full'>
                    <div><img src={arrow_blue} alt='arrow' className='h-4 mt-3.5 mr-5 ml-16 justify-end'></img></div>
                    <div className='w-full text-sm flex text-buttonblue bg-white mt-2 mb-3'>Review</div>
                    </div>
                    </Link>

                </div>}
              <Link to='/lendtable' className='w-full'><div id='l_div' className=' w-full text-sm flex  px-6 py-4 justify-center items-center  text-white' onClick={() => navToggle('l_div')}>Lend</div></Link>
              <Link to='/returnasset' className='w-full'><div id='r_div' className=' w-full text-sm flex  px-6 py-4 justify-center items-center  text-white' onClick={() => navToggle('r_div')}>Return</div></Link>
              <Link to='/studentdbtable' className='w-full'><div id='student_div' className=' w-full text-sm flex  px-6 py-4 justify-center items-center  text-white' onClick={() => navToggle('student_div')}>Student Database</div></Link>  
            </div>
        </nav>
  )
}