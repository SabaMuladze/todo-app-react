import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './components/Header.css'

function App() {
  const [DarkMode, setDarkMode] = useState('light')

  const changeHandler = () => {
    setDarkMode(DarkMode === 'light' ? 'dark' : 'light')

  }



  return (
    <>
      <div className={`container`} style={DarkMode === 'light' ? { backgroundColor: '#171823' } : { backgroundColor: '#FAFAFA' }} >
        <header className={`${DarkMode === 'light' ? 'dark' : 'light'}`}>
          <nav>
            <h1 className='logo'>TODO</h1>
            <button onClick={changeHandler}><img src={`${DarkMode === 'dark' ? "src/assets/icon-moon.svg" : 'src/assets/icon-sun.svg'}`} alt="" /></button>
          </nav>
        </header>
        <main>
          <div className='addInput' style={DarkMode === 'light' ? { backgroundColor: '#25273D' } : { backgroundColor: '#FFF' }}>
            <input type='checkbox' name="checkbox" id="box" />
            <input type="text" placeholder='Create a new todo…' style={DarkMode === 'light' ? { color: '#767992' } : { color: "#9495A5" }} />
          </div>
          <div className='lists' style={DarkMode === 'light' ? { backgroundColor: '#25273D' } : { backgroundColor: '#FFF' }}>
            <div className='list'>
              <input type='checkbox' name="checkbox" id="box" />
              <p style={DarkMode === 'light' ? { color: '#767992' } : { color: "#9495A5" }}>saba</p>
              <img className='delete' src="src/assets/icon-cross.svg" alt="" />
            </div>
            <div className='line' style={DarkMode === 'light' ? { backgroundColor: '#393A4B' } : { backgroundColor: '#E3E4F1' }} ></div>
            <div className='itemsleft' style={DarkMode === 'light' ? { backgroundColor: '#25273D', color: '#9495A5' } : { backgroundColor: '#FFF', color: '#5B5E7E' }}>
              <p>5 items left</p>
              <p>Clear Completed</p>
            </div>
          </div>
          <div className='itemsleft funcional' style={DarkMode === 'light' ? { backgroundColor: '#25273D', color: '#9495A5' } : { backgroundColor: '#FFF', color: '#5B5E7E' }}>
            <p>All</p>
            <p>Active</p>
            <p>Complated</p>
          </div>
        </main>
      </div >
    </>
  )
}

export default App
