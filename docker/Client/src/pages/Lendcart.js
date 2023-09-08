import Topnav from "../components/Topnav";
import Outercomp from "../components/Outercomp";
import remove from "../images/cancel_icon.png"
import save from "../images/save_icon.png";
import filter from "../images/filter_icon.png"
import qricon from "../images/qr_icon.png"
import Searchbar from "../components/Searchbar"

const Lendcart = () => {
    return ( 
        <div className="w-full min-h-screen -ml-8">
            <Topnav>
                <Outercomp name='LEND'>
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
                </Outercomp>
                <div className="flex justify-center mt-6">
                        <button type="button" className="px-5 text-white py-2 bg-buttonblue rounded-md"><div className="flex"><img src={save} className="pr-2"/>SAVE</div></button>
                    </div>
         </Topnav>
         </div>
     );
}
 
export default Lendcart;