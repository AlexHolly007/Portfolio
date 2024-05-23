import React, { useEffect, useState} from "react";

const Intoduction: React.FC = () => {
    const [introComplete, setIntroComplete] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIntroComplete(true);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);
    return (
        <div>
            {!introComplete && <div className="full-circle"></div>}
            {introComplete && (
                <div className="IntroDiv" id="IntroDiv">
                    <h2>Welcome to Alex Holly's Portfolio</h2>
                </div>
            )}
        </div>
    )
}

export default Intoduction