import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'


var movable;
const Assetcard = () => {
    // const [apiData, setApiData] = useState([]);
    // useEffect(() => {
    //     axios.get(`http://localhost:3001/assets/`)
    //         .then((getData) => {
    //             setApiData(getData.data);
    //             console.log(apiData);
    //         })
    // }, [])
    return ( 
        <>
        {/* { apiData.map((data) => {
             if(data.category=="static"){
                        return ( */}
        <Link to='/assetstablemod'><button className="scale-100 hover:scale-105"  >
            <div className="bg-white rounded-lg drop-shadow-xl w-40">
                <div className="p-3">
                   
                    <h1 className="text-buttonblue font-semibold text-center">MOUSE</h1>

                </div>
            </div>
        </button></Link>
        <button className="scale-100 hover:scale-105"  >
            <div className="bg-white rounded-lg drop-shadow-xl w-4/5">
                <div className="p-3">
                   
                    <h1 className="text-buttonblue font-semibold text-center">MONITOR</h1>

                </div>
            </div>
        </button>
        <button className="scale-100 hover:scale-105"  >
            <div className="bg-white rounded-lg drop-shadow-xl w-4/5">
                <div className="p-3">
                   
                    <h1 className="text-buttonblue font-semibold text-center">CPU</h1>

                </div>
            </div>
        </button>
        <button className="scale-100 hover:scale-105"  >
            <div className="bg-white rounded-lg drop-shadow-xl w-4/5">
                <div className="p-3">
                   
                    <h1 className="text-buttonblue font-semibold text-center">SERVER</h1>

                </div>
            </div>
        </button>
        <button className="scale-100 hover:scale-105"  >
            <div className="bg-white rounded-lg drop-shadow-xl w-4/5">
                <div className="p-3">
                   
                    <h1 className="text-buttonblue font-semibold text-center">PRINTER</h1>

                </div>
            </div>
        </button>
        <button className="scale-100 hover:scale-105 mt-5"  >
            <div className="bg-white rounded-lg drop-shadow-xl w-4/5">
                <div className="p-3">
                   
                    <h1 className="text-buttonblue font-semibold text-center">KEYBOARD</h1>

                </div>
            </div>
        </button>

         {/* )
                        }
        })} */}
        </>
     );
}
 
export default Assetcard;