import logo from './logo.svg';
import Header from "../src/component/Header"
import HeaderImage from './component/HeaderImage';
import MainBody from './component/MainBody';

function App() {
  return (
    <div style={parentStyle}>
      {/* Render the Header component */}
      <Header/>

       {/* Render the HeaderImage component */}
      <HeaderImage/>

       {/* Render the MainBody component */}
      <MainBody/>
    </div>
  );
}

// CSS style for the parent container
const parentStyle={
  margin:"10px"
}
export default App;

