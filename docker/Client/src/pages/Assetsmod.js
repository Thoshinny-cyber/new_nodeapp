import Topnav from "../components/Topnav";
import Outercomp from "../components/Outercomp";
import edit from "../images/edit_pencil.png";
import { useNavigate    } from "react-router-dom";
import { useEffect,useState,useRef } from "react";

const Assetsmod = () => {
    let navigate = useNavigate(); 
    const isActive=useRef(true);
    
    const assetsChange = () =>{ 
    if(isActive.current)
        {
            navigate('/assetstablemod');
        }
    }
    useEffect(()=>{isActive.current=true;})

    const editChange = () =>{ 
        isActive.current=false;
        navigate('/editasset');
    }
    return ( 
        <>
        <div className="w-full min-h-screen -ml-8">
            <Topnav>
                <Outercomp name='CCV' addon='ASSETS'>
                    <table className="bg-white w-full text-center mt-4 table-auto" cellPadding={12}>
                    <thead>
                        <tr>
                        <th></th>
                        <th>S.No.</th>
                        <th>Product Name</th>
                        <th>Specifications</th>
                        <th>Quantity</th>
                        <th>Cost per unit</th>
                        <th>Total Cost</th>
                        <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border border-b-2 hover:bg-gray-300" onClick={assetsChange} >
                               <td><input className="ml-3" type="checkbox"></input></td>
                                <td >1</td>
                                <td >Desktop</td>
                                <td >Dell, i5 10th Gen</td>
                                <td >3</td>
                                <td >80000</td>
                                <td >340000</td>
                                <td ><button className="mt-1 pr-2" onClick={editChange}><img src={edit} alt="edit"/></button></td>
                        </tr>
                        <tr className="border border-b-2 hover:bg-gray-300">
                                <td><input className="ml-3" type="checkbox"></input></td>
                                <td>2</td>
                                <td>Laptop</td>
                                <td>Dell, i5 10th Gen</td>
                                <td>3</td>
                                <td>80000</td>
                                <td>340000</td>
                                <td><button className="mt-1 pr-2"><img src={edit} alt="edit"/></button></td>
                        </tr>
                    </tbody>
                    </table>
                </Outercomp>
         </Topnav>
        </div>
        </>
     );
}
 
export default Assetsmod;