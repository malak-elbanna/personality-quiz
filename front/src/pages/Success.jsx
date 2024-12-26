import React from "react";
import { Link } from "react-router-dom";

const Success = () => {
    return (
        <div className="bg-gradient-to-r from-indigo-500 to-purple-500 min-h-screen flex flex-col">
        <div className="pt-20 flex-grow">
            <div className="text-center text-white font-bold text-3xl">
            <p>Thank you for taking the quiz!</p>
            <button className="mt-4 px-20 py-2 bg-purple-700 text-white font-semibold rounded hover:bg-purple-800 transition duration-300 transform hover:scale-105">
                <Link to="">See results</Link>
            </button>
            </div>
        </div>
        </div>
    );
};

export default Success;