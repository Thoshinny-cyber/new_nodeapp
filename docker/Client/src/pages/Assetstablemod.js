import Topnav from "../components/Topnav";
import Outercomp from "../components/Outercomp";
import edit from "../images/edit_pencil.png";
import { useNavigate } from "react-router-dom";

const Assetstablemod = () => {
    let navigate = useNavigate();
    const editassetChange = () => {
        navigate("/editassetmod")
    }
    return ( 
        <>
        <div className="w-full min-h-screen -ml-8">
            <Topnav>
                <Outercomp name='CCV' addon='ASSETS > DESKTOP'>
                    <table className="bg-white w-full text-center mt-4 table-auto" cellPadding={12}>
                    <thead>
                        <tr>
                        <th></th>
                        <th>ID</th>
                        <th>Product Name</th>
                        <th>Specifications</th>
                        <th>Cost</th>
                        <th>Working Condition</th>
                        <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border border-b-2">
                               <td><input className="ml-3" type="checkbox"></input></td>
                               <td>4615612</td>
                                <td>Desktop</td>
                                <td>Dell, i5 10th Gen, 15 inches display </td>
                                <td>340000</td>
                                <td><div className="flex justify-center"><div className="h-4 w-4 bg-red-800"></div></div></td>
                                <td><button className="mt-1 pr-2" onClick={editassetChange}><img src={edit} alt="edit"/></button></td>
                        </tr>
                        <tr className="border border-b-2">
                                <td><input className="ml-3" type="checkbox"></input></td>
                                <td>4615613</td>
                                <td>Desktop</td>
                                <td>Dell, i5 10th Gen, 15 inches display </td>
                                <td>340000</td>
                                <td><div className="flex justify-center"><div className="h-4 w-4 bg-green-800"></div></div></td>
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
 
export default Assetstablemod;
<>
</>