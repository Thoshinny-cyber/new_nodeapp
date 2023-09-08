import axios from 'axios';
import React, { useEffect, useState } from 'react';
const Assetcardmov = () => {
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
             if(data.category=="dynamic"){
                        return ( */}
        <button className="scale-100 hover:scale-105">
            <div className="bg-white rounded-lg drop-shadow-xl w-4/5">
                <div className="p-3">
                   
                    <h1 className="text-buttonblue font-semibold text-center">ETHERNET</h1>

                </div>
            </div>
        </button>
        <button className="scale-100 hover:scale-105">
            <div className="bg-white rounded-lg drop-shadow-xl w-4/5">
                <div className="p-3">
                   
                    <h1 className="text-buttonblue font-semibold text-center">MICROPHONE</h1>

                </div>
            </div>
        </button>
        <button className="scale-100 hover:scale-105">
            <div className="bg-white rounded-lg drop-shadow-xl w-4/5">
                <div className="p-3">
                   
                    <h1 className="text-buttonblue font-semibold text-center">PROJECTOR</h1>

                </div>
            </div>
        </button>
         {/* )
                        }
        })} */}
        </>
     );

//     <>
//     { apiData.map(data) => (
//          if(data.category=="Dynamic"){
//              {data.asset_type.map((type,index) => (
//     <button className="scale-100 hover:scale-105">
//         <div className="bg-white rounded-lg drop-shadow-xl w-4/5">
//             <div className="p-3">
               
//                 <h1 className="text-buttonblue font-semibold text-center"key={index}>{type}</h1>

//             </div>
//         </div>
//     </button>
    
//      )
//            )
                    
//     }
// }
// )
// }
//     </>
//  );
 }
 
export default Assetcardmov;