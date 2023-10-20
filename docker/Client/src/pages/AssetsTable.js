import Topnav from "../components/Topnav";
import Outercomp from "../components/Outercomp";
import edit from "../images/edit_icon.png";
import deleteicon from "../images/delete_icon.png";
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useRef } from 'react';
//import { useNavigate } from "react-router-dom";
import { useReducer } from 'react';


const AssetsTable = () => {
    const [reducerValue, forceUpdate] = useReducer(x => x + 1, 0);
    let asset_id=useRef(0)
    const [data, setData] = useState({
        //id:"",
        asset_name:""
    });
    const [apiData, setApiData] = useState([]);
    useEffect(() => {
        axios.get(`http://65.0.108.227:3001/assets`)
            .then((getData) => {
                setApiData(getData.data);
                console.log(apiData);
            },)
          
            
    }, [reducerValue])
    const modalshow = (id) => {
        
        asset_id.current=id;
        if(document.getElementById('myModal').classList.contains('hidden')){
            document.getElementById('whole').classList.add('opacity-20');
            document.getElementById('myModal').classList.remove('hidden');
        }
        else{
            document.getElementById('whole').classList.remove('opacity-20');
            document.getElementById('myModal').classList.add('hidden');
        }
        console.log(asset_id.current)
    }
    const close = () => {
        document.getElementById('whole').classList.remove('opacity-20');
            document.getElementById('myModal').classList.add('hidden');
    }
    const close1 = () => {
        document.getElementById('whole').classList.remove('opacity-20');
            document.getElementById('myModal').classList.add('hidden');
            setData({
                ...data,
                asset_name:""
            })
    }
    const handleChange = (e) => {
        const value = e.target.value;
        setData({
          ...data,
          [e.target.name]: value,
        });
        console.log(value)
      };
    const handleSubmit = (e,id) => {
        e.preventDefault();
        const userData = {
            asset_name:data.asset_name,
        };
        console.log(id)
        axios.patch(`http://65.0.108.227:3001/assets/${id}`, userData).then((response) => {
          console.log(response.status, response.data.token);
        });
        setData({
            ...data,
            asset_name:""
        })
        forceUpdate()
      };
      const deleteRow = (id)=>{  
        axios.delete(`http://65.0.108.227:3001/assets/${id}`)  
          .then(res => {  
            console.log(res);  
            console.log(res.data);  
          }) ;
          forceUpdate() 
      }  
    //   function captureId(Id) {
    //     let ID=Id;
    //     setData({
    //         ...data,
    //         id:ID,
    //     })

      //}
    return ( 
        <>
        <div id="whole" className="w-full min-h-screen -ml-8">
         <Topnav>
                <Outercomp name='CCV > Monitor'>
                    <table className="bg-white w-full text-center mt-4 table-auto" cellPadding={12}>
                    <thead>
                        <tr>
                        {/* <th>S.No.</th> */}
                        <th>ID</th>
                        <th>Product Name</th>
                        <th>Working Condition</th>
                        <th></th>
                        <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {apiData.map((data) => (
                        <><tr key={data._id} className="border border-b-2">
                                {/* <td>1</td> */}
                                <td>{data._id}</td>
                                <td>{data.asset_name} </td>
                                <td>{data.status} </td>
                                <td></td>
                                <td>
                                <button onClick={()=>modalshow(data._id)}>
                                    <div className="flex h-6 w-10 -ml-8 mr-2 mt-2"><img src={edit} alt="edit"/>Edit</div>
                                </button>
                            </td>
                                <td><a href="#" onClick={()=>deleteRow(data._id)}><div className="flex h-6 w-10 mt-1 mr-8" ><img src={deleteicon} alt="edit" />Delete</div></a></td>
                            </tr></>
                        ))}
                        </tbody>
                    </table>
                </Outercomp>
         </Topnav>
         </div>
         <form onSubmit={(e)=>handleSubmit(e,asset_id.current)}  id="myModal" className="hidden fixed z-20 top-0 right-10 w-10/12 flex h-screen justify-center items-center">
            <div className="bg-[#7F90A9]/30 rounded-xl px-10 pt-5 pb-10">
                <div className="flex justify-end"><button onClick={close1}><div className="text-[30px] text-right ">&times;</div></button></div>
                <div className="modal-content bg-white bg-[url('images/backdrop.png')] p-14 rounded-lg">
                    <div><h1 className="text-center pb-5 font-bold text-[30px]">EDIT</h1></div>
                    Enter name
                    <input type="text" required="required" className="border border-black mx-5 bg-dark rounded-lg drop-shadow-lg px-4 py-1"name="asset_name" value={data.asset_name} onChange={handleChange}/>
                </div>
                <div className="flex justify-center pt-5">
                    <button className="px-5 py-2 bg-buttonblue rounded-md py-1 text-white" onClick={close} type="submit" >SAVE</button>
                </div>
            </div>
        </form>
        </>
     );
}
 
export default AssetsTable;
