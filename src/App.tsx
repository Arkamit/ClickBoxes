import "./App.css";
import BoxContainer from "./components/BoxContainer";

function App() {
  return (
    <>
      {Array.from({ length: 3 }).map((_, i) => (
        <BoxContainer id={`${i}`} key={i} />
      ))}
    </>
  );
}

export default App;
