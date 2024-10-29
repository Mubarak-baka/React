import Navbar from '../components/Navbar';
import About from '../components/About';
import Footer from '../components/Footer';

export default function Home() {
    return (
        <div className='container text-center border border-info'  style={{ backgroundColor: '#f8f9fa', minHeight: '100vh', maxWidth:'800px',borderRadius:'80px' ,padding:'20px',margin:'0 auto'}}>
            <h1 className='my-4 display-4' style={{backgroundColor:'green'}}>Hello Our Dear Viewers</h1>
            <Navbar /> 
            <About /> 
            <Footer /> 
            
        </div>
    );
}