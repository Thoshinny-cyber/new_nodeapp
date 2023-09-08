import Topnav from "../components/Topnav";
import Outercomp from "../components/Outercomp";
import save from "../images/save_icon.png";
import { useNavigate } from "react-router-dom";

const Editasset = () => {

    let navigate = useNavigate(); 
    const assetpageChange = () =>{
        navigate("/assetsmod")
    }

    return ( 
        <>
        <div className="w-full min-h-screen -ml-8">
            <Topnav>
                <Outercomp name='EDIT INVENTORY'>
                <form>
                    <div className="py-5 px-10">
                        <h2 className="pb-5 font-bold">Product Name</h2>
                        <p contentEditable="true" className="bg-white pl-4 bg-dark rounded-md drop-shadow-lg w-60 py-1">Desktop</p>
                    </div>
                    <div className="py-5 px-10">
                        <h2 className="pb-5 font-bold">Specifications</h2>
                        <p contentEditable="true" className="bg-white pl-4 bg-dark rounded-md drop-shadow-lg w-full h-40 py-1">Dell, i5 10th Gen, 15 inches display</p>
                    </div>
                    <div className="py-5 px-10">
                        <h2 className="pb-5 font-bold">Quantity</h2>
                        <p contentEditable="true" className="bg-white pl-4 bg-dark rounded-md drop-shadow-lg w-40 py-1">8</p>
                    </div>  
                    <div className="py-5 px-10">
                        <h2 className="pb-5 font-bold">Cost per unit</h2>
                        <p contentEditable="true" className="bg-white pl-4 bg-dark rounded-md drop-shadow-lg w-60 py-1">50000</p>
                    </div> 
                    <div className="py-5 px-10">
                        <h2 className="pb-5 font-bold">Total cost</h2>
                        <p contentEditable="true" className="bg-white pl-4 bg-dark rounded-md drop-shadow-lg w-60 py-1">340000</p>
                    </div>
                    <div className="flex justify-center">
                        <button type="button" onClick={assetpageChange} className="px-5 text-white py-2 bg-buttonblue rounded-md"><div className="flex"><img src={save} className="pr-2"/>SAVE</div></button>
                    </div>
                </form>
                </Outercomp>
            </Topnav>
        </div>
        </>
     );
}
 
export default Editasset;