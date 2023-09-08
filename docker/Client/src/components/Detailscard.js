import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';




const Detailscard = () => {
    // const res = axios.get(`api/departments/labs/id`);
    // const {lab_name,lab_type}=res.data.labs;
    const [apiData, setApiData] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:3001/groups/`)
            .then((getData) => {
                setApiData(getData.data);
                console.log(apiData);
            })
    }, [])
    return ( 
        <>
        { apiData.map((dept) => {
                    if(dept.category==="Static"){
                        return (   
        <div className="bg-white rounded-lg drop-shadow-xl" >
                     
            <div className="p-3" >
                <div className="flex">
                    <div className="w-full"><h2 className="font-semibold" >{dept.lab_name}</h2></div>
                    <Link to='/assetsmod'><div className="justify-self-end"><button className="bg-buttonblue text-[14px] text-white px-4 py-1 rounded-full">VIEW</button></div></Link>
                </div>
            

                <div className="pt-5 text-[14px]">
                    <div className="flex space-x-2">
                        <div className="w-24"><p className="py-1">Location</p></div>
                        <div><p className="py-1">-</p></div>
                        <div className="w-40"><p className="py-1 pl-2">{dept.lab_type}</p></div>
                    </div>
                    <div className="flex space-x-2">
                        <div className="w-24"><p className="py-1">Department</p></div>
                        <div><p className="py-1">-</p></div>
                        <div className="w-40"><p className="py-1 pl-2" >{dept.department_name}</p></div>
                    </div>
                </div>
            </div>                            
           
        </div>
                    
             )
                         }
        })} 
        </>
     );
}
 
export default Detailscard;