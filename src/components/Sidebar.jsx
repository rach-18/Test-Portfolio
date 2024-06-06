function Sidebar() {
    return(
        <div className="w-[30%] flex flex-col items-center py-5 px-5 gap-5 rounded-lg bg-[#A8C090] shadow-lg text-white">
            <div className="flex flex-col items-center gap-2">
                <img className="w-[60%] rounded-lg shadow-lg" src="me.jpeg" alt="" />
                <p className="text-lg">Rachita Pradhan</p>
                <p className="bg-[#006837] font-semibold px-8 py-1 rounded-full">Hello, World!</p>
            </div>
            <hr className="border-[0.1rem] border-[#9CB076] w-full" />
            <div className="flex items-center gap-5">
                <i className="icon text-[#006837] px-5 py-4 rounded-xl fa-regular fa-hourglass-half"></i>
                <div>
                    <p className="font-semibold">AGE</p>
                    <p>23 years old</p>
                </div>
            </div>
            <div className="flex items-center gap-5">
                <i className="icon text-[#006837] px-5 py-4 rounded-xl fa-solid fa-location-dot"></i>
                <div>
                    <p className="font-semibold">LOCATION</p>
                    <p>Kolkata, India</p>
                </div>
            </div>
            <div className="flex items-center gap-5">
                <i className="icon text-[#006837] px-5 py-4 rounded-xl fa-solid fa-user"></i>
                <div>
                    <p className="font-semibold">PERSONALITY</p>
                    <p>INTJ-T</p>
                </div>
            </div>
            <div className="flex justify-evenly text-2xl w-full mt-2">
                <i className="fa-brands fa-github"></i>
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-brands fa-linkedin"></i>
            </div>
        </div>
    )
}

export default Sidebar;