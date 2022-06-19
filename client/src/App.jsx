import {
  Navbar,
  Footer,
  Loader,
  Services,
  Transictions,
  Welcome,
} from "./components";

const App = () => {
  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <Navbar />
        <Welcome />
      </div>
      <Services />
      <Transictions />
      <Footer />
    </div>
  );
};

export default App;
