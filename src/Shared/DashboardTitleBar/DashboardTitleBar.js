import React from 'react';
import { Link } from 'react-router-dom';

const DashboardTitleBar = (
    { title,
        dashboard,
        dashboardTo,
        route,
        routeTo,
        nestedRoute,
        nestedRouteTo,
        anotherRoute,
        anotherRouteTo, }
) => {

    return (
        <div className='mt-3'>
            <div className="md:flex justify-between items-center flex-wrap bg-white rounded-lg shadow-lg py-3 px-5 ">
                <div className="">
                    <h2 className="text-xl lg:text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-secondary via-sky-800	 to-secondary capitalize">
                        {title}
                    </h2>
                </div>

                <ul className="md:flex hidden">
                    {dashboard !== "" && (
                        <>
                            <li>
                                <Link to={dashboardTo}>{dashboard}</Link>
                            </li>
                        </>
                    )}
                    {route !== "" && (
                        <>
                            <li>
                                <div className="h-5 border-r-2 border-lightGray mx-3"></div>
                            </li>
                            <li>
                                <Link to={routeTo}>{route}</Link>
                            </li>
                        </>
                    )}

                    {nestedRoute !== "" && (
                        <>
                            <li>
                                <div className="h-5 border-r-2 border-lightGray mx-3"></div>
                            </li>
                            <li>
                                <Link to={nestedRouteTo}>{nestedRoute}</Link>
                            </li>
                        </>
                    )}
                    {anotherRoute !== "" && (
                        <>
                            <li>
                                <div className="h-5 border-r-2 border-lightGray mx-3"></div>
                            </li>
                            <li>
                                <Link to={anotherRouteTo}>{anotherRoute}</Link>
                            </li>
                        </>
                    )}
                </ul>
            </div>
        </div>
    );
}
export default DashboardTitleBar;