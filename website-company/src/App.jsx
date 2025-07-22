import { BrowserRouter as Router, Routes, Route , Link} from "react-router-dom"

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<><h1>Home</h1> <Link to="about">About</Link> </>}></Route>
        <Route path="/about" element={<> <h1>About</h1> </>}></Route>
        <Route path="/projects" element={<> <h1>Project</h1> </>}></Route>
        <Route path="/contact" element={<> <h1>Contact</h1> </>}></Route>
      </Routes>
    </Router>
  )
}

export default App
