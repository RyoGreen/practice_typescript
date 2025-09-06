import React, { useEffect } from "react";

type HomeFieldProps = {
    message?: string;
    title: string;
    click?: () => void;
};

const HomeField: React.FC<HomeFieldProps> = (props) => {
    const [isLoading, setIsLoading] = React.useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 5000);

        return () => clearTimeout(timer);
    }, []);
    return (
        <div>
            <div>
                <button onClick={props.click}>Click Me</button>
            </div>
            {isLoading ? (
                <p>Loading...</p>
            ) : (
                <>
                    <p>{props.title}</p>
                    <p>{props.message ?? "This is Home Page"}</p>
                </>
            )}
        </div>
    );
};

export default HomeField;
