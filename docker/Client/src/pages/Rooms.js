import Outercomp from '../components/Outercomp'
import Detailscard from "../components/Detailscard"
import Topnav from '../components/Topnav';

const Rooms = () => {
    return ( 
        <>
        <div className="w-full  min-h-screen -ml-8">
          <Topnav>
            <Outercomp name='COMPUTER LABS'>
                <div className='p-5'>
                    <div className='grid grid-cols-3 gap-12'>
                        <Detailscard/>
                    </div>
                </div>
            </Outercomp>
          </Topnav>
        </div>
        </>
     );
}
 
export default Rooms;