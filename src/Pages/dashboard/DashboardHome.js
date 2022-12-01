import React, { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider';
import AddProduct from './AddProduct';
import AllSeller from './AllSeller';
import MyOrders from './MyOrders';

const DashboardHome = () => {
    const { savedUser } = useContext(AuthContext);
    return (
        <div>
            {
                (savedUser?.userRole !== "admin" && savedUser?.userRole !== "seller") &&
                <MyOrders/>
            }
            {
                (savedUser?.userRole === "seller") &&
                <AddProduct/>
            }
            {
                (savedUser?.userRole === "admin") &&
                <AllSeller/>
            }
        </div>
    );
};

export default DashboardHome;

