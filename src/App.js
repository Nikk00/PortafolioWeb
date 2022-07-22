import './assets/css/App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ThemeProvider from 'react-bootstrap/ThemeProvider'
/* import Navbar from './components/Navbar'; */

function App() {
  return (
    <>
    <ThemeProvider breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}>
    </ThemeProvider>
    <>
        <Header></Header>
        {/* <Navbar></Navbar> */}
        <hr className="hrr"></hr>
        <div className="clearfix"></div>
        <br></br>
        <Home></Home>
        <br></br>
        <hr className="hrr"></hr>
        <div className="clearfix"></div>
        <Footer></Footer>
      </>
    </>
  );
}

export default App;
