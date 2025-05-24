import { RefObject } from "react";
import Box from "./Box";
import "./BoxContainer.css";

interface IBoxContainerProps {
    id: string,
    selectedBoxes: RefObject<string[]>
}

function BoxContainer(boxContainerProps: IBoxContainerProps) {
    const { selectedBoxes } = boxContainerProps;
    
    return (
        <div className="boxes">
        {
            Array.from({ length: 3}).map((_, i) => (<Box id={`${boxContainerProps.id+i}`} selectedBoxes={selectedBoxes} key={i} />))
        }
        </div>
    )
}

export default BoxContainer;