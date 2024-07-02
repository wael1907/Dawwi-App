import Articles from "./components/articles/Articles";
import DownloadApp from "./components/download-app/Download-app";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import SearchDoctor from "./components/search-for-doctor/Search-doctor";
import Services from "./components/services/Services";
import TestQuestion from "./components/test-question/Test";



function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Services />
      <TestQuestion />
      <SearchDoctor />
      <Articles />
      <DownloadApp />
      <Footer />
    </div>
  );
}

export default App;
