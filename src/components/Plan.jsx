import React from "react";

const Plan = () => {
    return (
        <div className="max-w-[1400px] m-auto px-4 py-16 grid lg:grid-cols-2 gap-4">
            <div className="grid grid-cols-2 grid-rows-6 h-[80vh]">
                <img className="row-span-3 object-cover w-full h-full p-2" src="https://images.unsplash.com/photo-1503424886307-b090341d25d1?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                <img className="row-span-2 object-cover w-full h-full p-2" src="https://images.unsplash.com/photo-1471922694854-ff1b63b20054?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                <img className="row-span-2 object-cover w-full h-full p-2" src="https://images.unsplash.com/photo-1515612148533-6247582c12c7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                <img className="row-span-3 object-cover w-full h-full p-2" src="https://images.unsplash.com/photo-1544198365-f5d60b6d8190?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                <img className="row-span-2 object-cover w-full h-full p-2" src="https://images.unsplash.com/photo-1535747790212-30c585ab4867?q=80&w=2025&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </div>
            <div className="flex flex-col h-full justify-center">
                <h3 className="text-5xl md:text-6xl font-bold">Plan Your Next Trip</h3>
                <p className="text-2xl py-6">I will go always love your trip to Mondolivea</p>
                <p className="pb-6">I will go always love your trip to Japan</p>
            <div>
                    <button className="border-black mr-4 hover:shadow-xl">Learn More</button>
                    <button className="bg-black text-white border-black mr-4 hover:shadow-xl">Book your trip</button>
                </div>
            </div>
        </div>
    )
}

export default Plan;