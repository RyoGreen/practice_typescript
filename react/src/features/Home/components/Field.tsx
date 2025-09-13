import React from "react";

type HomeFieldProps = {
    message?: string;
    title: string;
    click?: () => void;
};

const HomeField: React.FC<HomeFieldProps> = (props) => {
    return (
        <div>
            <div className="mb-4">
                <button onClick={props.click}>Click Me</button>
            </div>
            <p>{props.title}</p>
            <p>{props.message ?? "This is Home Page"}</p>
        </div>
    );
};

export default HomeField;
