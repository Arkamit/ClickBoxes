import { useRef } from "react";
import "./App.css";
import BoxContainer from "./components/BoxContainer";

function App() {
  const selectedBoxes = useRef<string[]>([]);
  
  return (
    <>
      {Array.from({ length: 3 }).map((_, i) => (
        <BoxContainer id={`${i}`} selectedBoxes={selectedBoxes} key={i} />
      ))}
    </>
  );
}

export default App;
