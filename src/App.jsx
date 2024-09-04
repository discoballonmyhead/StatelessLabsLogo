import './App.css'
import StatelessLabsLogoVar1 from "./Components/StatelessLabsLogoVar1/StatelessLabsLogo.jsx";
import StatelessLabsLogoVar2 from "./Components/StatelessLabsLogoVar2/StatelessLabsLogo.jsx";
import StatelessLabsLogoVar3 from "./Components/StatelessLabsLogoVar3/StatelessLabsLogo.jsx";
import StatelessLabsLogoBreakDown from "./Components/StatelessLabsLogoVarBreakDown/StatelessLabsLogo.jsx";

function App() {

  return (
    <>
        <div className="VariantsContainer">
            <div>
                <StatelessLabsLogoVar1/>
                <h3>Variation #one</h3>
            </div>
            <div>
                <StatelessLabsLogoVar2/>
                <h3>Variation #two</h3>
            </div>
            <div>
                <StatelessLabsLogoVar3/>
                <h3>Variation #three</h3>
            </div>
        </div>
        <div>
            <StatelessLabsLogoBreakDown/>
        </div>
    </>
  )
}

export default App
