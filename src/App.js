import "./App.css"
import Header from "./components/Header"
import Mission from "./components/Mission"
import Perks from "./components/Perks"
import logo from "../src/images/logo.png"
import Learnings from "./components/Learnings"
import Mentor from "./components/Mentor"
import FAQs from "./components/FAQs"
import Home from "./components/Home"

function App() {
  return (
    <div>
      <Header />
      <Home />
      <Mission />
      <Perks />
      <Learnings />
      <Mentor />
      <FAQs />
    </div>
  )
}

export default App
