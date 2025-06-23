import logo from './logo.svg';
import './App.css';

import {ReactComponent as Brain} from './assets/brain.svg';

import ScrollingText from './components/ScrollingText/ScrollingText';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Brain className="App-logo" />
        
   

        
        <ScrollingText 
          text={"\\( \\rho \\left( \\frac{\\partial \\mathbf{u}}{\\partial t} + \\mathbf{u} \\cdot \\nabla \\mathbf{u} \\right) = -\\nabla p + \\mu \\nabla^2 \\mathbf{u} + \\mathbf{f} \\)"} 
          anDur={13} 
          size={2.5}/>
        <ScrollingText 
          text={"\\( e^{i\\pi} + 1 = 0 \\)"} 
          anDur={15} 
          size={1.5}
        />
        <ScrollingText 
          text={"\\( i\\hbar \\frac{\\partial}{\\partial t} \\Psi(x,t) = -\\frac{\\hbar^2}{2m} \\nabla^2 \\Psi(x,t) + V(x) \\Psi(x,t) \\)"} 
          anDur={9} 
          size={3}
        />
        <ScrollingText 
          text={"\\( \\zeta(s) = \\sum_{n=1}^{\\infty} \\frac{1}{n^s} \\quad \\text{has zeros where } \\Re(s) = \\frac{1}{2} \\)"} 
          anDur={11} 
          size={2}
        />
        <ScrollingText 
          text={"\\( R_{\\mu\\nu} - \\frac{1}{2} R g_{\\mu\\nu} + \\Lambda g_{\\mu\\nu} = \\frac{8\\pi G}{c^4} T_{\\mu\\nu} \\)"} 
          anDur={7} 
          size={3.5}
        />

      </header>
    </div>
  );
}

export default App;
