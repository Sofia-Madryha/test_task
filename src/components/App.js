import { About } from "./About/About";
import { Container } from "./GlobalStyle";
import { Header } from "./Header/Header";
import { Home } from "./Home/Home";

function App() {
  return (
    <div>
      <Header />
      <main>
        <Home></Home>
        <About />
      </main>
    </div>
  );
}

export default App;
