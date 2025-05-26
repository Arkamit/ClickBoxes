import { RefObject } from 'react';
import './Box.css';

const TOTAL_BOXES = 9;

interface IBoxProps {
    id: string,
    selectedBoxes?: RefObject<string[]>
}

function Box(boxProps: IBoxProps) {
    const { id, selectedBoxes } = boxProps;

    const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

    const TriggerDeselection = async () => {
        await sleep(750);
        const boxes = selectedBoxes?.current ?? [];
        for (let i = boxes.length - 1; i >= 0; i--) {
            const boxId = boxes[i];
            const boxElement = document.getElementById(`${boxId}`);
            boxElement!.className = `box`;
            await sleep(750);
        }
        if (selectedBoxes && selectedBoxes.current) {
            selectedBoxes.current = [];
        }
    }

    const OnBoxClick = async (event: React.MouseEvent<HTMLDivElement>) => {
        const id = event.currentTarget.id;
        const position = selectedBoxes?.current.indexOf(id);

        if (position === -1) {
            selectedBoxes?.current.push(id);
            const boxElement = document.getElementById(`${id}`);
            boxElement!.className = `box selected`;
        } else if (typeof position === 'number' && position > -1) {
            selectedBoxes?.current.splice(position, 1);
            const boxElement = document.getElementById(`${id}`);
            boxElement!.className = `box`;
        }
        
        if (selectedBoxes?.current.length === TOTAL_BOXES) {
            await TriggerDeselection();
            return;
        }
    }

    return (
        <div className={`box`} id={id} onClick={OnBoxClick}></div>
    )
}

export default Box;
