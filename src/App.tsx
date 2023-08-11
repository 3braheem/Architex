import NavCard from "./components/NavCard.tsx";
import NavBar from "./components/NavBar.tsx";
import Body from "./components/Body.tsx";

function App() {
  return (
    <>
      <NavCard>
        <NavBar />
      </NavCard>
      <Body />
    </>
  );
}

export default App;
