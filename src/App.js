
import './App.css';
import Nav from "./componnet/navbar/nav.jsx"
import Footer from './componnet/footer/footer.jsx';





function App(props){
  const children = props.children
  return (
  <>
    <Nav/>
    {children}
    <Footer/>

    </>

  );
}

export default App;
