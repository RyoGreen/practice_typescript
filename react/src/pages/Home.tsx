import React from "react";
import HomeField from "../features/components/Home";

const Home: React.FC = () => {
    return (
        <div className="bg-gray-100">
            <HomeField title="Title" message="Props message" />
        </div>
    );
};

export default Home;
