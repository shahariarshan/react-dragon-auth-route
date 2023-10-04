import { FaGoogle,FaGithub,FaFacebook,FaTwitter,FaInstagram } from 'react-icons/fa';

import qZone1 from '../../../assets/qZone1.png'
import qZone2 from '../../../assets/qZone2.png'
import qZone3 from '../../../assets/qZone3.png'

const LeftSideNav = () => {
    return (
        <div>
        <div className='border p-4'>
            <div >
              <h3 className="text-2xl font-semibold">Log In With</h3>
               
               <button className="btn btn-outline w-full mt-3">
                    <FaGoogle></FaGoogle>
                   Log in google
                </button>
                <button className="btn btn-outline w-full mt-3">
                    <FaGithub></FaGithub>
                   Log in Github
                </button>
              
            </div>
            </div>

            <div className='border p-4'>
              <h3 className="text-2xl font-semibold">Find Us On</h3>
               <div >
               <button className="btn btn-outline w-full rounded-t-lg border-x none">
                    <FaFacebook></FaFacebook>
                   Facebook
                </button>
                <button className="btn btn-outline w-full rounded-t-lg">
                    <FaTwitter></FaTwitter>
                  Twitter
                </button>
                <button className="btn btn-outline w-full rounded-t-lg">
                    <FaInstagram></FaInstagram>
                  Instagram
                </button>
               </div>
            
            </div>
            <div className='p-4'>
            <h3 className="text-2xl font-semibold">Q-Zone</h3>
            <img src={qZone1} alt="" />
            <img src={qZone2} alt="" />
            <img src={qZone3} alt="" />
        
            </div>
        
            </div>
        
    );
};

export default LeftSideNav;