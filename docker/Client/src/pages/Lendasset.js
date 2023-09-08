import Topnav from "../components/Topnav";
import Outercomp from "../components/Outercomp";
import add from "../images/add_icon.png";
import qr from "../images/qr_code.png";
import { Link } from "react-router-dom";
import filter from "../images/filter_icon.png"
import qricon from "../images/qr_icon.png"
import Searchbar from "../components/Searchbar"

const LendAsset = () => {

    const act2= () => {
        document.getElementById('whole').classList.add('opacity-25');
        document.getElementById('popup').classList.remove('hidden');
    } 
    
    const act = () => {
        document.getElementById('whole').classList.remove('opacity-25');
        document.getElementById('popup').classList.add('hidden');
        document.getElementById('asset').classList.add('bg-gray-200');
    } 

    const close = () => {
        document.getElementById('whole').classList.remove('opacity-25');
            document.getElementById('popup').classList.add('hidden');
    }


    return ( 
        <>
        <div className="w-full min-h-screen -ml-8">
            <div id="whole" className="opacity-25">
            <Topnav>
                <Outercomp name='CCV' addon='ASSETS'>
                    <div className="float-right">
                        <div className="flex pb-8">
                            <img className="mx-2" src={filter}/>
                            <button onClick={act2} type="button"><img className="mx-4" src={qricon}/></button>
                            <Searchbar/>
                        </div>
                    </div>
                    <table className="bg-white w-full text-center mt-4 table-auto " cellPadding={12}>
                    <thead>
                        <tr>
                        <th></th>
                        <th>ID</th>
                        <th>Product Name</th>
                        <th>Specifications</th>
                        <th>Working Condition</th>
                        <th>Availability</th>
                        <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr id="asset" className="border border-b-2">
                                <td><input className="ml-3" type="checkbox"></input></td>
                               <td>4615612</td>
                                <td>Desktop</td>
                                <td>Dell, i5 10th Gen, 15 inches display </td>
                                <td><div className="flex justify-center"><div className="h-4 w-4 bg-green-800"></div></div></td>
                                <td><div className="flex justify-center"><div className="h-4 w-4 bg-green-800"></div></div></td>
                                <td ><Link to="/lendcart"><button className="mt-1 pr-2" ><img src={add} alt="add"/></button></Link></td>
                        </tr>
                        <tr className="border border-b-2">
                                <td><input className="ml-3" type="checkbox"></input></td>
                                <td>4615613</td>
                                <td>Desktop</td>
                                <td>Dell, i5 10th Gen, 15 inches display </td>
                                <td><div className="flex justify-center"><div className="h-4 w-4 bg-red-800"></div></div></td>
                                <td><div className="flex justify-center"><div className="h-4 w-4 bg-red-800"></div></div></td>
                                <td ><button className="mt-1 pr-2" ><img src={add} alt="add"/></button></td>
                        </tr>
                    </tbody>
                    </table>
                </Outercomp>
         </Topnav>
         </div>
            <form id='popup' className=" fixed z-20 top-0 right-10 w-10/12 flex h-screen justify-center items-center">
                    <div className="bg-[#7F90A9]/60 rounded-xl px-10 pt-5 pb-10">
                        <div className="flex justify-end"><button onClick={close} type="button"><div className="text-[30px] text-right ">&times;</div></button></div>
                            <div className="bg-white p-8 rounded-lg">
                                <div><h1 className="text-center pb-5 font-bold text-[30px]">LEND</h1></div>
                                <div className="pb-3">
                                    <p className="text-center text-lg pb-4">Search by Product </p>
                                    <div><input type="text" className="b absorder border-black mx-5 bg-dark rounded-lg drop-shadow-lg px-4 py-1"/><button onClick={act} type="button" className="px-5 bg-buttonblue text-white rounded-md py-1">Submit</button></div>
                                </div>
                                <div><h1 className="text-center pb-4 mt-3 font-md text-xl">OR</h1></div> 
                                <div className="flex justify-center">
                                    <button onClick={act} type="button"><img src={qr} width={100} height={100} className=""/></button>
                                </div>
                                <div><h1 className="pb-5 mt-2 text-lg text-center">Scan QR</h1></div>
                            </div>
                     </div>
            </form>
        </div>
        </>
     );
}
 
export default LendAsset;