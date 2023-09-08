import Outercomp from "../components/Outercomp"
import Topnav from "../components/Topnav";
import save from "../images/save_icon.png";
import { Link } from "react-router-dom";
import edit from "../images/edit_pencil.png";

const Reviewdetailsedit = () => {
    return ( 
        <>
        <div className="w-full min-h-screen -ml-8">
            <Topnav>
                <Outercomp name = "FAULTY EQUIPMENT" addon = "REPORT ID #837478">

                    <div className="">
                        <form>

                            <div className="grid grid-cols-12 w-full px-4 pt-10 pb-4">
                                <div className="col-span-3 col-start-2">
                                    <label className="">LAB</label>
                                </div>
                                <div className="col-span-4">
                                <div className="flex justify-content-end"><p contentEditable="true" className="bg-white pl-4 bg-dark rounded-md drop-shadow-lg w-60 py-1">CCV</p><img className="px-2 py-1" src={edit} alt="edit"/></div>
                                </div>
                            </div>

                            <div className="grid grid-cols-12 w-full p-4">
                                <div className="col-span-3 col-start-2">
                                    <label className="">ITEM</label>
                                </div>
                                <div className="col-span-4 col-start-5">
                                    <div className="flex justify-content-end"><p contentEditable="true" className="bg-white pl-4 bg-dark rounded-md drop-shadow-lg w-60 py-1">Dell i12 Desktop</p><img className="px-2 py-1" src={edit} alt="edit"/></div>
                                </div>
                            </div>

                            <div className="grid grid-cols-12 w-full p-4">
                                <div className="col-span-3 col-start-2">
                                    <label className="">TYPE OF DAMAGE</label>
                                </div>
                                <div className="col-span-4 col-start-5">
                                    <div className="flex justify-content-end"><p contentEditable="true" className="bg-white pl-4 bg-dark rounded-md drop-shadow-lg w-60 py-1">Item Damage</p><img className="px-2 py-1" src={edit} alt="edit"/></div>
                                </div>
                            </div>

                            <div id="item">
                                <div className="grid grid-cols-12 w-full p-4">
                                    <div className="col-span-3 col-start-2">
                                        <label className="">QR CODE</label>
                                    </div>
                                    <div className="col-span-4 col-start-5">
                                        <div className="flex justify-content-end"><p contentEditable="true" className="bg-white pl-4 bg-dark rounded-md drop-shadow-lg w-60 py-1">wkarh83795</p><img className="px-2 py-1" src={edit} alt="edit"/></div>
                                    </div>
                                </div>
                                <div className="grid grid-cols-12 w-full p-4">
                                    <div className="col-span-3 col-start-2">
                                        <label className="">CAUSE OF DAMAGE</label>
                                    </div>
                                    <div className="col-span-4 col-start-5">
                                        <div className="flex justify-content-end"><p contentEditable="true" className="bg-white pl-4 bg-dark rounded-md drop-shadow-lg w-60 py-1">Student</p><img className="px-2 py-1" src={edit} alt="edit"/></div>
                                    </div>
                                </div>
                                <div id="studentop">
                                    <div className="grid grid-cols-12 w-full p-4">
                                        <div className="col-span-3 col-start-2">
                                            <label className="">STUDENT ID</label>
                                        </div>
                                        <div className="col-span-4 col-start-5">
                                            <div className="flex justify-content-end"><p contentEditable="true" className="bg-white pl-4 bg-dark rounded-md drop-shadow-lg w-60 py-1">SEC19CS008</p><img className="px-2 py-1" src={edit} alt="edit"/></div>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-12 w-full p-4">
                                        <div className="col-span-3 col-start-2">
                                            <label className="">DUE AMOUNT</label>
                                        </div>
                                        <div className="col-span-4 col-start-5">
                                            <div className="flex justify-content-end"><p contentEditable="true" className="bg-white pl-4 bg-dark rounded-md drop-shadow-lg w-60 py-1">1000</p><img className="px-2 py-1" src={edit} alt="edit"/></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-center p-5 text-white">
                                <Link to="/faultyeqrev"><button type="button" className="px-5 text-white py-2 bg-buttonblue rounded-md"><div className="flex"><img src={save} className="pr-2"/>SAVE</div></button></Link>
                            </div>
                        </form>
                    </div>
                </Outercomp>
            </Topnav>
            </div>
        </>
    );
}
 
export default Reviewdetailsedit;