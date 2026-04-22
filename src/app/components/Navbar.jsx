import React from 'react';

const Navbar = () => {
    const nav = [
        {
            name: 'Home',
            link: '/home'
        },
        {
            name: 'Projects',
            link: '/projects'
        }
    ];
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <a className="btn btn-ghost normal-case text-xl">My Portfolio</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    {nav.map((item) => (
                        <a key={item.link} href={item.link} className="btn btn-ghost normal-case">
                            {item.name}
                        </a>
                        
                    ))}
                </div>
                
            </div>
        </div>
    );
};

export default Navbar;