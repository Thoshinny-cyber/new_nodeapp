import Assetcard from "../components/Assetcard";
import Assetcardmov from "../components/Assetcardmov";
import Outercomp from "../components/Outercomp";
import Topnav from "../components/Topnav";

const Assets = () => {
    return ( 
        <>
        <div className="w-full min-h-screen -ml-8">
            <Topnav>
                <Outercomp name='ASSETS'>
                    <div className='p-5'>
                        <h2 className="py-5">STATIONARY</h2>
                        <div className='grid grid-cols-5 py-5'>
                            <Assetcard/>
                        </div>
                        <h2 className="py-5">MOVABLE</h2>
                        <div className='grid grid-cols-5 py-5'>
                            <Assetcardmov/>
                        </div>
                    </div>
                </Outercomp>
            </Topnav>
        </div>

        </>
     );
}
 
export default Assets;