import './App.css'
import StatelessLabsLogoVar1 from "./Components/StatelessLabsLogoVar1/StatelessLabsLogo.jsx";
import StatelessLabsLogoVar2 from "./Components/StatelessLabsLogoVar2/StatelessLabsLogo.jsx";
import StatelessLabsLogoVar3 from "./Components/StatelessLabsLogoVar3/StatelessLabsLogo.jsx";
import StatelessLabsText from "./Components/StatelessLabsText/StatelessLabsText.jsx";

function App() {

  return (
    <>
        <div>
            <StatelessLabsLogoVar1/>
            <StatelessLabsText/>
        </div>
        <div>
            <StatelessLabsLogoVar2/>
            <StatelessLabsText/>
        </div>
        <div>
            <StatelessLabsLogoVar3/>
            <StatelessLabsText/>
        </div>
    </>
  )
}

export default App
