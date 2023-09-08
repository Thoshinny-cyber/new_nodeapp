import React from 'react'
import { Link } from 'react-router-dom'
import Homecard from '../components/Homecard'
import Outercomp from '../components/Outercomp'
import Topnav from '../components/Topnav'
import inc from '../images/incubation_logo.png'
import comp from '../images/comp_logo.png'
import ece from '../images/ece_logo.png'
import aids from '../images/aids_logo.png'
import mech from '../images/mech_logo.png'
import phy from '../images/phy_logo.png'


export const Home = () => {
  const labsdata = [
    {placename:'Computer Labs',logo:comp,link:'/labs'},
    {placename:'Electronics Labs',logo:ece},
    {placename:'AI/DS Labs',logo:aids},
    {placename:'Mechanical Labs',logo:mech},
    {placename:'Physics Labs',logo:phy},
  ]
  const hallsdata = [
    {placename:'Alpha Hall',logo:comp,link:'/labs'},
    {placename:'Beta Hall',logo:ece},
    {placename:'Gamma Hall',logo:aids},
    {placename:'SSR Hall',logo:mech},
    {placename:'VRR Hall',logo:phy},
  ]
  const cellsdata = [
    {placename:'NSS',logo:comp,link:'/labs'},
    {placename:'NCC',logo:ece},
    {placename:'UBA',logo:aids},
    {placename:'YRC',logo:mech},
  ]
  return (
    <>
      <div className="w-full min-h-screen -ml-8">
            <Topnav>
            <Outercomp name='SAI TECHNO INCUBATION CELL'>
              <div className='p-5'>
                <Homecard cname='Incubation Centre' img={inc}/>
              </div>
            </Outercomp>
            <Outercomp name='LABS' >
              <div className='p-5 grid grid-cols-7'>
                {labsdata.map((d) =>
                  <Link to={d.link}><Homecard cname={d.placename} img={d.logo}/></Link>) 
                }
              </div>
            </Outercomp>
            <Outercomp name='HALLS'>
              <div className='p-5 grid grid-cols-7'>
                {hallsdata.map((h) =>
                  <Homecard cname={h.placename} img={h.logo}/>) 
                }
              </div>
            </Outercomp>
            <Outercomp id='cells' name='CELLS'>
              <div className='p-5 grid grid-cols-7'>
                {cellsdata.map((c) =>
                  <Homecard cname={c.placename} img={c.logo}/>) 
                }
              </div>
            </Outercomp>
            </Topnav>
          </div>
    </>
  )
}
