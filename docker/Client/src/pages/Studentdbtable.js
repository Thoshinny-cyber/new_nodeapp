import Topnav from "../components/Topnav";
import Outercomp from "../components/Outercomp";
import { Link } from "react-router-dom";
const Studentdbtable = () => {
    return ( 
        <div className="w-full min-h-screen -ml-8">
            <Topnav>
                <Outercomp name='STUDENT DATABASE' >
                    <table className="bg-white w-full text-center mt-4 table-auto" cellPadding={12}>
                    <thead>
                        <tr>
                        <th>S.No.</th>
                        <th>Name</th>
                        <th>Department</th>
                        <th>Semester</th>
                        <th>Year</th>
                        <th>Student ID</th>
                        <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border border-b-2" >
                                <td >1</td>
                                <td >Aakriti Krishnan</td>
                                <td >CSE</td>
                                <td >VIII</td>
                                <td >III</td>
                                <td >SEC19CS001</td>
                                <td><Link to='/studentdb'><div className="justify-self-end"><button className="bg-buttonblue text-[14px] text-white px-4 py-1 rounded-full">VIEW</button></div></Link></td>
                                
                        </tr>
                        <tr className="border border-b-2">
                                <td>2</td>
                                <td>Anusha J</td>
                                <td>CSE</td>
                                <td>VIII</td>
                                <td>III</td>
                                <td>SEC19CS002</td>
                                <td><Link to='/studentdb'><div className="justify-self-end"><button className="bg-buttonblue text-[14px] text-white px-4 py-1 rounded-full">VIEW</button></div></Link></td>
                        </tr>
                        <tr className="border border-b-2">
                                <td>2</td>
                                <td>Anushree U</td>
                                <td>CSE</td>
                                <td>VIII</td>
                                <td>III</td>
                                <td>SEC19CS003</td>
                                <td><Link to='/studentdb'><div className="justify-self-end"><button className="bg-buttonblue text-[14px] text-white px-4 py-1 rounded-full">VIEW</button></div></Link></td>
                        </tr>
                        <tr className="border border-b-2">
                                <td>2</td>
                                <td>Arwa J</td>
                                <td>CSE</td>
                                <td>VIII</td>
                                <td>III</td>
                                <td>SEC19CS004</td>
                                <td><Link to='/studentdb'><div className="justify-self-end"><button className="bg-buttonblue text-[14px] text-white px-4 py-1 rounded-full">VIEW</button></div></Link></td>
                        </tr>
                    </tbody>
                    </table>
                </Outercomp>
         </Topnav>
        </div>
     );
}
 
export default Studentdbtable;