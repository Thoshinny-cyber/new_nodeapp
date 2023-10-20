import Outercomp from "../components/Outercomp"
import Topnav from "../components/Topnav";
import React, { useState } from "react";
import axios from "axios";
//import QrReader from 'react-qr-scanner';



const Faultyequip = () => {
    //const { imageUrl } = this.state;
    const [data, setData] = useState({
        lab_name:"",
        asset_name:"",
        qr:"",
        type_of_damage:"",
        cause_of_damage:"student",
        student_id:"",
        amount:""
      });
    
// const handleFileChange = (event) => {
//     const file = event.target.files[0];
//     const reader = new FileReader();
  
//     reader.onload = () => {
//       const imageUrl = reader.result;
//       this.setState({ imageUrl });
//     };
  
//     reader.readAsDataURL(file);
//   };
  
    const qrclick = () =>{
            if(!document.getElementById('item').classList.contains('hidden')){
                document.getElementById('item').classList.add('hidden');
            }
            if(document.getElementById('qr').classList.contains('hidden')){
                document.getElementById('qr').classList.remove('hidden');
            }
            else{
                document.getElementById('qr').classList.add('hidden');
            }
        }
    
        const itemclick = () =>{
            if(!document.getElementById('qr').classList.contains('hidden')){
                document.getElementById('qr').classList.add('hidden');
            }
            if(document.getElementById('item').classList.contains('hidden')){
                document.getElementById('item').classList.remove('hidden');
            }
            else{
                document.getElementById('item').classList.add('hidden');
            }
        }
        
        const studentoption = (e) => {
            const val = e.target.value;
            if(val === "1"){
                document.getElementById('studentop').classList.remove('hidden');
            }
            else{
                document.getElementById('studentop').classList.add('hidden');
            }
        }
        // const laboption = (e) => {
        //     const val = e.target.value;
        //     if(val === "1"){
        //   console.log("cc5");
        // }
    
        //     else if(val === "2"){
        //         console.log("cc6");
               
        //     }
        //     else if(val === "3"){
        //         console.log("KM lab");                
        // }
        // }
        const handleChange = (e) => {
            const value = e.target.value;
            setData({
              ...data,
              [e.target.name]: value
            });
          };
        const handleSubmit = (e) => {
            e.preventDefault();
            const userData = {
                lab_name:data.lab_name,
                asset_name:data.asset_name,
                qr:data.qr,
                type_of_damage:data.type_of_damage,
                cause_of_damage:data.cause_of_damage,
                student_id:data.student_id,
                amount:data.amount
            };
            axios.post("http://13.233.253.123:3001/reports/", userData).then((response) => {
              console.log(response.status, response.data.token);
            });
          };
        
    return ( 
        <>
        <div className="w-full min-h-screen -ml-8">
            <Topnav>
                <Outercomp name = "FAULTY EQUIPMENT" addon = "REPORT">

                    <div className="">
                        <form onSubmit={handleSubmit}>

                            <div className="grid grid-cols-12 w-full p-4">
                                <div className="col-span-3 col-start-2">
                                    <label className="">SELECT LAB</label>
                                </div>
                                <div className="col-span-4">
                                    <select className="mx-5 bg-dark rounded-lg drop-shadow-lg w-50 px-4 py-1" name="lab_name"   value={data.lab_name} onChange={handleChange}  id="">
                                        <option className="" value="0">--SELECT--</option>
                                        <option className="" value="CC5" >CC5</option>
                                        <option className="" value="CC6" >CC6</option>
                                        <option className="" value="Knowledge Management lab" >Knowledge Management lab</option>
                                        {/* <option className="" value="MECH">MECH</option> */}
                                    </select>
                                </div>
                            </div>

                            <div className="grid grid-cols-12 w-full p-4">
                                <div className="col-span-3 col-start-2">
                                    <label className="">SELECT ITEM</label>
                                </div>
                                <div className="col-span-4 col-start-5">
                                    <select className="mx-5 bg-dark rounded-lg drop-shadow-lg px-4 py-1" name="asset_name" value={data.asset_name} onChange={handleChange} id="">
                                        <option className="" value="0">--SELECT--</option>
                                        <option className="" value="Monitor" >Monitor</option>
                                        <option className="" value="CPU" >CPU</option>
                                        <option className="" value="Mouse">Mouse</option>
                                        <option className="" value="Keyboard" >Keyboard</option>
                                    </select>
                                </div>
                            </div>

                            <div className="grid grid-cols-12 w-full p-4">
                                <div className="col-span-3 col-start-2">
                                    <label className="">TYPE OF DAMAGE</label>
                                </div>
                                <div className="col-span-8 col-start-5 text-white">
                                    <button type="button" className="mx-5 px-5 py-2 bg-buttonblue rounded-md py-1" name="type_of_damage" value={data.type_of_damage} onChange={handleChange} onClick={qrclick}> QR DAMAGE </button>
                                    <button type="button" className="px-5 py-2 bg-buttonblue rounded-md py-1"  name="type_of_damage" value={data.type_of_damage} onChange={handleChange} onClick={itemclick} >ITEM DAMAGE</button>
                                </div>
                            </div>


                            <div id="qr" className="grid grid-cols-12 w-full p-4 hidden">
                                <div className="col-span-3 col-start-2">
                                    <label className="">ACTION</label>
                                </div>
                                <div className="col-span-4 col-start-5">
                                    <select className="mx-5 bg-dark rounded-lg w-75 px-4 py-1" name="" id="">
                                        <option className="" value="CSE">Set up new code</option>
                                        <option className="" value="ECE">Update database</option>
                                    </select>
                                </div>
                            </div>

                            <div id="item" className="hidden">
                                <div className="grid grid-cols-12 w-full p-4">
                                    <div className="col-span-3 col-start-2">
                                        <label className="">SCAN QR</label>
                                    </div>
                                    <div className="col-span-4 col-start-5">
                                    {/* <input type="file" accept="image/*" onChange={handleFileChange} />
                                                    {imageUrl && (
                                                    <QrReader
                                                    delay={300}
                                                    onError={this.handleError}
                                                    onScan={this.handleScan}
                                                    style={{ width: '100%' }}
                                                    legacyMode={false}
                                                    resolution={1200}
                                                    showViewFinder={false}
                                                    imageData={imageUrl}
                                                     />
                                                     )} */}
                                        <input type="file" accept="image/*" className="mx-5 bg-dark rounded-lg drop-shadow-lg px-4 py-1" name="qr" value={data.qr} onChange={handleChange}/>
                                    </div>
                                </div>
                                <div className="grid grid-cols-12 w-full p-4">
                                    <div className="col-span-3 col-start-2">
                                        <label className="">CAUSE OF DAMAGE</label>
                                    </div>
                                    <div className="col-span-4 col-start-5">
                                        <select className="mx-5 bg-dark rounded-lg w-75 px-4 py-1" name="cause_of_damage" id="" value={data.cause_of_damage}  onChange={(e)=>(studentoption(e))} >
                                            <option className="" value="0">--SELECT--</option>
                                            <option className="" value="1">STUDENT</option>
                                            <option className="" value="2">OTHER</option>
                                        </select>
                                    </div>
                                </div>
                                <div id="studentop" className="hidden">
                                    <div className="grid grid-cols-12 w-full p-4">
                                        <div className="col-span-3 col-start-2">
                                            <label className="">ENTER STUDENT ID</label>
                                        </div>
                                        <div className="col-span-4 col-start-5">
                                            <input type="text" className="mx-5 bg-dark rounded-lg drop-shadow-lg px-4 py-1" name="student_id" value={data.student_id} onChange={handleChange}/>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-12 w-full p-4">
                                        <div className="col-span-3 col-start-2">
                                            <label className="">ENTER AMOUNT</label>
                                        </div>
                                        <div className="col-span-4 col-start-5">
                                            <input type="text" className="mx-5 bg-dark rounded-lg drop-shadow-lg px-4 py-1" name="amount" value={data.amount} onChange={handleChange}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-center p-5 text-white">
                                <button className="px-5 py-2 bg-buttonblue rounded-md py-1" type="submit">SUBMIT</button>
                            </div>
                        </form>
                    </div>
                </Outercomp>
            </Topnav>
            </div>
        </>
    );
}
 
export default Faultyequip;
