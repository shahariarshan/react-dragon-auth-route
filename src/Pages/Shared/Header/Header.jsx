import moment from 'moment/moment';
import logo from '../../../assets/logo.png'


const Header = () => {
    return (
        <div className='text-center'>
           <img className='mx-auto' src={logo} alt="" />
           <p>Journalism Without Fear or Favour</p>
           <h5 className='text-xl'>{moment().format("dddd, MMMM D, YYYY")}</h5>
        </div>
    );
};

export default Header;