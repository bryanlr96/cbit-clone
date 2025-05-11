
import Display from "./components/Display"
import GetStarted from "./components/GetStarted"
import NavBar from "./components/NavBar"
import NavMain from "./components/NavMain"

function App() {
  return (
    <div className="flex">
      <NavBar />
      <div className="w-[85%] mx-auto flex flex-col">
        <NavMain/>
        <GetStarted/>
        <Display/>
      </div>
    </div>
  )
}

export default App
