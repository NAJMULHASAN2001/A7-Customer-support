// import React from 'react';

const Navbar = () => {
    return (
        <div className="md:navbar bg-base-100 shadow-sm md:container mx-auto justify-between">
            <div className="">
                <a className="btn btn-ghost text-xl">CS — Ticket System</a>
            </div>
            <div className="flex flex-col md:flex-row md:items-center gap-3 ml-5 md:ml-0 ">
                <a href="">Home</a>
                <a href="">Faq</a>
                <a href="">Change Log</a>
                <a href="">Blog</a>
                <a href="">Download</a>
                <a href="">Contact</a>
                <button className="bg-gradient-to-r from-[#632EE3]  to-[#9F62F2] p-3 rounded-xl">+ New Ticket</button>
            </div>
        </div>
    );
};

export default Navbar;