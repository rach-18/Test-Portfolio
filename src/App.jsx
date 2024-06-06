import './App.css'
import Sidebar from './components/Sidebar'
import About from './components/About'

function App() {
  return(
    <div className='flex gap-5 w-11/12 mx-auto py-5 h-screen overflow-x-hidden'>
      <Sidebar />
      <About />
    </div>
  )
}

export default App
