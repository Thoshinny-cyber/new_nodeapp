import Topnav from "../components/Topnav";
import Outercomp from "../components/Outercomp";
import { Link } from "react-router-dom";
import edit from "../images/edit_pencil.png";
import pdf from "../images/pdf_download.png"
const Faultyequipreview = () => {
    return ( 
        <>
        <div className="w-full min-h-screen -ml-8">
            <Topnav>
                <Outercomp name='FAULTY EQUIPMENT' addon='REVIEW'>
                    <table className="bg-white w-full text-center mt-4 table-auto" cellPadding={14}>
                    <thead>
                        <tr>
                        <th></th>
                        <th>ID</th>
                        <th>Product Name</th>
                        <th>Type of Damage</th>
                        <th>Cause of Damage</th>
                        <th>Student ID(if needed)</th>
                        <th></th>
                        <th></th>
                        <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border border-b-2">
                                <td></td>
                                <td>837478</td>
                                <td>Dell i12 Desktop</td>
                                <td>Item Damage</td>
                                <td>Student</td>
                                <td>SEC19CS008</td>
                                <td><Link to='/reviewdetails'><div className="justify-self-end"><button className="bg-buttonblue text-[14px] text-white px-4 py-1 rounded-full">DETAILS</button></div></Link></td>
                                <td><Link to='/reviewdetailsedit'><button className="mt-1"><img src={edit} alt="edit"/></button></Link></td>
                                <td><button className="mt-1"><img src={pdf} alt="edit"/></button></td>
                        </tr>
                        <tr className="border border-b-2">
                                <td></td>
                                <td>837479</td>
                                <td>HP Mouse</td>
                                <td>Item Damage</td>
                                <td>Student</td>
                                <td>SEC19CS057</td>
                                <td><Link to='/reviewdetails'><div className="justify-self-end"><button className="bg-buttonblue text-[14px] text-white px-4 py-1 rounded-full">DETAILS</button></div></Link></td>
                                <td><Link to='/reviewdetailsedit'><button className="mt-1"><img src={edit} alt="edit"/></button></Link></td>
                                <td><button className="mt-1"><img src={pdf} alt="edit"/></button></td>
                        </tr>
                        </tbody>
                    </table>
                </Outercomp>
         </Topnav>
        </div>
        </>
     );
}
 
export default Faultyequipreview;