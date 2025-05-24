import Box from "./Box";
import "./BoxContainer.css";

interface IBoxContainerProps {
    id: string,
}

function BoxContainer(boxContainerProps: IBoxContainerProps) {
    return (
        <div className="boxes">
        {
            Array.from({ length: 3}).map((_, i) => (<Box id={`${boxContainerProps.id+i}`} key={i}/>))
        }
        </div>
    )
}

export default BoxContainer;