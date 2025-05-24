import { RefObject, useState } from 'react';
import './Box.css';

const TOTAL_BOXES = 9;

interface IBoxProps {
    id: string,
    selectedBoxes?: RefObject<string[]>
}

function Box(boxProps: IBoxProps) {
    const { id, selectedBoxes } = boxProps;
    const [boxClass, setBoxClass] = useState<string>("box");
    

    const TriggerDeselection = () => {
        console.log("Deselection Triggered!!!");
    }

    const OnBoxClick = (event: React.MouseEvent<HTMLDivElement>) => {
        const id = event.currentTarget.id;
        const position = selectedBoxes?.current.indexOf(id);

        if (position === -1) {
            selectedBoxes?.current.push(id);
            setBoxClass(`box selected`);
        } else if (typeof position === 'number' && position > -1) {
            selectedBoxes?.current.splice(position, 1);
            setBoxClass(`box`);
        }
        
        if (selectedBoxes?.current.length === TOTAL_BOXES) {
            TriggerDeselection();
            return;
        }
    }

    return (
        <div className={boxClass} id={id} onClick={OnBoxClick}></div>
    )
}

export default Box;