import Header from "./components/Header";
import Footer from "./components/Footer";
import Features from "./components/Features";
const App = () => {
  return (
    <div className="h-screen max-w-6xl mx-auto p-4 text-slate-900 flex flex-col">
      <Header />
      <Features />
      <Footer />
    </div>
  );
};

export default App;
