import './Box.css';

interface IBoxProps {
    id: string
}

function Box(boxProps: IBoxProps) {

    const onBoxClick = (event: React.MouseEvent<HTMLDivElement>) => {
        console.log(event.currentTarget.id);
        
    }

    return (
        <div className="box" id={boxProps.id} onClick={onBoxClick}></div>
    )
}

export default Box;