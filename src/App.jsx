import { useState } from 'react'
import Header from "./components/Header/Header";
import MainBanner from "./components/MainBanner/MainBanner";
import Menu from "./components/Menu/Menu";
import Catalog from "./components/Catalog/Catalog";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="wrapper">
        <div className="wrapper__container">
            <Header/>
            <main>
                <MainBanner/>
                <Menu/>
                <Catalog/>
            </main>
        </div>
    </div>
  )
}

export default App
