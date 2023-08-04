import { useState } from "react";
function Dropdown({ selected, setSelected }) {
    const[ isActive, setIsActive ] = useState(false);
    const options = ["Yes", "Absolutely not"];
    return(
        <div className="dropdown">
            <div className="dropdown-btn" onClick={(e)=>
            setIsActive(!isActive)}>
                {selected}
                <span class="arrow"></span>
            </div>
            {isActive && (
                <div className="dropdown-content">
                    {options.map((Option)=>(
                        <div
                            onClick={(e) => {
                                setSelected(Option);
                                setIsActive(false);
                            }}
                            className="dropdown-item"
                        >
                            {Option}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
 export default Dropdown;