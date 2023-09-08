import QRCode from 'qrcode.react';
import axios from 'axios';
import Topnav from "../components/Topnav";
import Outercomp from "../components/Outercomp";
import React, { useEffect, useState } from 'react';
import { useRef } from 'react';
import * as htmlToImage from 'html-to-image';

const QrTable = () => {
    let asset_name=useRef(0)
    const [apiData, setApiData] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:3001/assets`)
            .then((getData) => {
                setApiData(getData.data);
                console.log(apiData);
            },)
          
            
    }, [])
    const handleDownload=(e,asset_name) => {
        e.preventDefault();
        const node = document.getElementById('qr-code');
        htmlToImage.toJpeg(node)
          .then(function (dataUrl) {
            const link = document.createElement('a');
            link.download = `${asset_name}.png`;
            link.href = dataUrl;
            link.click();
          })
          .catch(function (error) {
            console.error('Unable to download QR code', error);
          });
      }
      
    return ( 
        <>
        <div id="whole" className="w-full min-h-screen">
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
                                <td><QRCode id="qr-code" value={`http://localhost:3001/assets/${data._id}`} /></td>
                                <td><button onClick={(e)=>handleDownload(e,data.asset_name)}>Download QR Code</button></td>
                            </tr></>
                        ))}
                        </tbody>
                    </table>
                </Outercomp>
         </Topnav>
         </div>
         </>
         )
}
export default QrTable;