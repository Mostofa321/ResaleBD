import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthProvider';
import Footer from '../Pages/Shared/Footer';
import Navbar from '../Pages/Shared/Navbar';

const DashboardLayout = () => {
    const { savedUser } = useContext(AuthContext);
    return (
        <div className=''>
            <Navbar />
            <div className="drawer drawer-mobile container mx-auto">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    <Outlet />
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                        {
                            (savedUser?.userRole !== "admin" && savedUser?.userRole !== "seller") &&
                            <li><Link to="/dashboard">My orders</Link></li>
                        }
                        {
                            (savedUser?.userRole === "seller") &&
                            <>
                                <li><Link to="/dashboard/addProduct">Add A product</Link></li>
                                <li><Link to="/dashboard/myProducts">My Products</Link></li>
                            </>
                        }
                        {
                            (savedUser?.userRole === "admin") &&
                            <>
                                <li><Link to="/dashboard/allSeller">All Sellers</Link></li>
                                <li><Link to="/dashboard/allBuyer">All Buyers</Link></li>
                            </>
                        }
                    </ul>

                </div>
            </div>
            <Footer />
        </div>
    );
};

export default DashboardLayout;