import Topnav from "../components/Topnav";
import Outercomp from "../components/Outercomp";
import save from "../images/save_icon.png";
import filter from "../images/filter_icon.png"
import qricon from "../images/qr_icon.png"
import Searchbar from "../components/Searchbar"
import remove from "../images/cancel_icon.png"
import qr from "../images/qr_code.png";

const Returnasset = () => {
    
    const act = () => {
        document.getElementById('whole').classList.remove('opacity-25');
        document.getElementById('popup').classList.add('hidden');
    } 

    const close = () => {
        document.getElementById('whole').classList.remove('opacity-25');
            document.getElementById('popup').classList.add('hidden');
    }

    return ( 
        <div className="w-full min-h-screen -ml-8">
            <div id="whole" className="opacity-25">
            <Topnav>
                <Outercomp name='RETURN'>
                <div className="float-right">
                        <div className="flex pb-8">
                            <img className="mx-2" src={filter}/>
                            <img className="mx-4" src={qricon}/>
                            <Searchbar/>
                        </div>
                    </div>
                    <table className="bg-white w-full text-center mt-4 table-fixed" cellPadding={10}>
                    <thead>
                        <tr>
                        <th>S.no.</th>
                        <th>ID</th>
                        <th>Product Name</th>
                        <th>Specifications</th>
                        <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr id="asset" className="border border-b-2">
                                <td>1</td>
                                <td>4615612</td>
                                <td>Desktop</td>
                                <td>Dell, i5 10th Gen, 15 inches display </td>
                                <td><button className="mt-1 pr-2" ><img src={remove} alt="remove"/></button></td>
                        </tr>
                    </tbody>
                    </table>
                </Outercomp>
                <Outercomp name="STUDENT DETAILS">
                <div className="grid grid-cols-12 w-full px-4 pt-10 pb-4">
                    <div className="col-span-3 col-start-2">
                        <label className="">NAME</label>
                    </div>
                    <div className="col-span-4">
                    <p contentEditable="false" className="bg-white pl-4 bg-dark rounded-md drop-shadow-lg w-60 py-1">Arya Stark</p>
                    </div>
                </div>
                <div className="grid grid-cols-12 w-full p-4">
                    <div className="col-span-3 col-start-2">
                        <label className="">STUDENT ID</label>
                    </div>
                    <div className="col-span-4 col-start-5">
                    <p contentEditable="false" className="bg-white pl-4 bg-dark rounded-md drop-shadow-lg w-60 py-1">SEC19CS054</p>
                    </div>
                </div>
                <div className="grid grid-cols-12 w-full p-4">
                    <div className="col-span-3 col-start-2">
                        <label className="">STAFF NAME</label>
                    </div>
                    <div className="col-span-4 col-start-5">
                    <p contentEditable="false" className="bg-white pl-4 bg-dark rounded-md drop-shadow-lg w-60 py-1">Mr. Lelin S</p>
                    </div>
                </div>
                <div className="grid grid-cols-12 w-full p-4">
                    <div className="col-span-3 col-start-2">
                        <label className="">LEND DATE</label>
                    </div>
                    <div className="col-span-4 col-start-5">
                    <p contentEditable="false" className="bg-white pl-4 bg-dark rounded-md drop-shadow-lg w-60 py-1">12/04/2023</p>
                    </div>
                </div>
                <div className="grid grid-cols-12 w-full p-4">
                    <div className="col-span-3 col-start-2">
                        <label className="">RETURN DATE</label>
                    </div>
                    <div className="col-span-4 col-start-5">
                    <p contentEditable="false" className="bg-white pl-4 bg-dark rounded-md drop-shadow-lg w-60 py-1">30/04/2023</p>
                    </div>
                </div>
                </Outercomp>
                <div className="flex justify-center mt-6">
                        <button type="button" className="px-5 text-white py-2 bg-buttonblue rounded-md"><div className="flex"><img src={save} className="pr-2"/>SAVE</div></button>
                    </div>
         </Topnav>
         </div>
         <form id='popup' className=" fixed z-20 top-0 right-10 w-10/12 flex h-screen justify-center items-center">
                    <div className="bg-[#7F90A9]/60 rounded-xl px-10 pt-5 pb-10">
                        <div className="flex justify-end"><button onClick={close} type="button"><div className="text-[30px] text-right ">&times;</div></button></div>
                            <div className="bg-white p-8 rounded-lg">
                                <div><h1 className="text-center pb-5 font-bold text-[30px]">RETURN</h1></div>
                                <div className="pb-3">
                                    <p className="text-center text-lg pb-4">Search by Student ID</p>
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
        
     );
}
 
export default Returnasset;