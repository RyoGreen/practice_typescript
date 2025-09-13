import React, { useContext, useState } from "react";
import HomeField from "../features/Home/components/Field";
import { UserContext } from "../context/userContext";

const Home: React.FC = () => {
    const [count, setCount] = useState(0);
    const user = useContext(UserContext);
    return (
        <div className="bg-gray-100">
            <div>Count: {count}</div>
            <div>User: {user ? `${user.name} (${user.age})` : "No User"}</div>
            <HomeField title="Title First" message="Props First message" click={
                () => {
                    setCount(count + 1)
                    alert('Clicked!');
                }
            } />
            <HomeField title="Title Two" message="Props Second message" click={() => setCount(count + 1)} />
        </div>
    );
};

export default Home;
