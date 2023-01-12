import './App.scss';
import Navbar from './component/Navbar/Navbar';
import { About, Testimonials, Skills, Header, Footer, Works} from './container';
function App() {
  return (
    <div className="app">
      <Navbar />
      <About />
      <Testimonials />
      <Skills />
      <Header />
      <Footer />
      <Works />
    </div>
  );
}

export default App;
