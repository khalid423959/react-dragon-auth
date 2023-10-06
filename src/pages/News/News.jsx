import Header from '../sheare/Header/Header';
import Navber from '../sheare/Navber/Navber';
import RightSideNav from '../sheare/RightSideNav/RightSideNav';

const News = () => {
    return (
        <div>
            <Header></Header>
            <Navber></Navber>
            <div className='grid  md:grid-cols-4'>
                <div className='md:col-span-3'>
                    <h1> news details</h1>
                </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default News;