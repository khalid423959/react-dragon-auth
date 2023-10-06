import { FaGofore, FaGithub, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import Qzone1 from '../../../assets/qZone1.png'
import Qzone2 from '../../../assets/qZone2.png'
import Qzone3 from '../../../assets/qZone3.png'


const RightSideNav = () => {
    return (
        <div>
            <div className='p-4 space-y-2'>
                <h2 className="text-3xl">Login With</h2>
                <button className='btn btn-outline w-full'>
                    <FaGofore></FaGofore>
                    Login With Google
                </button>
                <button className='btn btn-outline w-full'>
                    <FaGithub></FaGithub>
                    Login With GitHub
                </button>
            </div>
            <div className='p-4 '>
                <h2 className="text-3xl mb-3">Find Us on </h2>
                <a className='p-4 border rounded-t-lg flex items-center' href="">
                    <FaFacebook className='mr-3'></FaFacebook>
                    <span>Facebook</span>
                </a>
                <a className='p-4 border-x  flex items-center' href="">
                    <FaTwitter className='mr-3'></FaTwitter>
                    <span>Twitter</span>
                </a>
                <a className='p-4 border rounded-b-lg flex items-center' href="">
                    <FaInstagram className='mr-3'></FaInstagram>
                    <span>Instagram</span>
                </a>
            </div>
            <div className='p-4 space-y-2 mb-5'>
                <h2 className="text-3xl">Q Zone</h2>
                <img src={Qzone1} alt="" />
                <img src={Qzone2} alt="" />
                <img src={Qzone3} alt="" />
            </div>

        </div>







    );
};

export default RightSideNav;