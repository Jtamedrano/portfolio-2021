import Hero from './components/Hero';
import TopNav from './components/TopNav';

function App() {
  return (
    <div className="App font-sans font-semibold subpixel-antialiased bg-white h-screen">
      <div className="h-full">
        <TopNav />
        <Hero />
      </div>
    </div>
  );
}

export default App;
