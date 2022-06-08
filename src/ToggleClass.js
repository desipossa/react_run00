import { useState } from "react";

const Main = () => {
    const [toggleClass, setToggleClass] = useState('');
    const classHandler = () => {
        setToggleClass(!toggleClass)
    }
    return (
        <>
            <div className={toggleClass && "on"} onClick={classHandler}>{toggleClass ? "on" : "off"}</div>
            <button onClick={classHandler}>count up</button>
        </>
    )
}
export default Main;