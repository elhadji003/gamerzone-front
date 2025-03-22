import React from 'react';
import { useSelector } from 'react-redux';
import Loader from '../../components/Loader';

const DashboardUser = () => {

    const user = useSelector((state) => state.auth.user);

    if(!user){
        <Loader/>
    }
    
    return (
        <div className='min-h-screen bg-black text-white'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, illum ut? Id sit natus a. Officiis a culpa nisi maiores magnam, dolor unde necessitatibus quod est, veritatis dolores nostrum dolore labore cumque dicta illum! Quas est quisquam expedita non officiis debitis minima libero ab enim dolore voluptates, aspernatur itaque nesciunt.
        </div>
    );
}

export default DashboardUser;
