import Footer from "./Components/Footer"
import Header from "./Components/Header"
import Body from "./Components/Body"
import "./index.css"
function App() {
  return (
    <>
    <div className="bg-amber-200 md:px-10 md:py-10 md:justify-between min-h-screen px-6 py-3 flex flex-col gap-16 lg:px-16 py-16">
      <Header/>
      <Body/>
      <Footer/>
    </div>
      
    </>
  )
}

export default App
