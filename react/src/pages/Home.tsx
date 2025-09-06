import React, { useState } from "react";
import HomeField from "../features/components/Home";

const Home: React.FC = () => {
    const [count, setCount] = useState(0);
    return (
        <div className="bg-gray-100">
            <div>Count: {count}</div>
            <HomeField title="Title" message="Props message" click={
                () => setCount(count + 1)
            } />
            <HomeField title="Title" message="Props message" click={() => setCount(count + 1)} />
        </div>
    );
};

export default Home;
