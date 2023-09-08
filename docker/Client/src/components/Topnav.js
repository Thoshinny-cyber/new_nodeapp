import titlemain from "../images/title_black.png"
import { Link } from 'react-router-dom';
import noti from '../images/bell_icon_2.png';
import profile from '../images/profile_icon_2.png';


const Topnav = ({children}) => {
    return (  
        <>
          <div className="w-10/12 min-h-screen pb-10 float-right">
            <div className='flex justify-between pt-10'>
              <img className='px-4 ml-5 h-8' src={ titlemain }alt="title" />
              <div className='flex'>
                <Link to=''><img className="px-4" src= {noti} alt="notification"></img></Link>
                <Link to=''><img className="pr-10" src= {profile} alt="profile"></img></Link>
              </div>
            </div>
            {children}
        </div>   
        </>
    );
}
 
export default Topnav;