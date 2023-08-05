import NavCard from "./components/NavCard.tsx";
import NavBar from "./components/NavBar.tsx";
import Body from "./components/Body.tsx";
import BuildingGroups from "./components/BuildingGroups.tsx";

function App() {
  return (
    <>
      <NavCard>
        <NavBar />
      </NavCard>
      <Body>
        <BuildingGroups />
      </Body>
    </>
  );
}

export default App;
