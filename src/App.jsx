import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './components/Header.css'
// import Listfunc from './components/ListFunc'

function App() {
  const [DarkMode, setDarkMode] = useState('light')

  const changeHandler = () => {
    setDarkMode(DarkMode === 'light' ? 'dark' : 'light')

  }

  const [NewList, setNewList] = useState('');

  const [ListArr, setListArr] = useState([])


  const addList = (event) => {
    if (event.key == 'Enter') {
      event.preventDefault()
      let item = {
        id: Math.floor(Math.random() * 1000),
        item: NewList,
      }
      setListArr(oldList => [...oldList, item])
      setNewList('')
    }
  }

  const deleteItem = (id) => {
    const newArr = ListArr.filter(list => list.id != id);
    setListArr(newArr)
  }
  console.log(ListArr);
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
          <form onKeyDown={addList} >
            <div className='addInput' style={DarkMode === 'light' ? { backgroundColor: '#25273D' } : { backgroundColor: '#FFF' }} >
              <input type='checkbox' name="checkbox" id="box" />
              <input id='inp' type="text" placeholder='Create a new todo…' style={DarkMode === 'light' ? { color: '#767992' } : { color: "#9495A5" }} value={NewList} onChange={ev => setNewList(ev.target.value)} />
            </div>
            <div className='lists' style={DarkMode === 'light' ? { backgroundColor: '#25273D' } : { backgroundColor: '#FFF' }} >
              {ListArr.map(list => {
                return (
                  <div className='list' key={list.id}>
                    <input type='checkbox' name="checkbox" id="box" />
                    <p style={DarkMode === 'light' ? { color: '#C8CBE7' } : { color: '#494C6B' }} key={list.id} >{list.item}</p>
                    <img className='delete' src="src/assets/icon-cross.svg" alt="" onClick={() => deleteItem(list.id)} />
                  </div>
                )
              })}
              <div className='line' style={DarkMode === 'light' ? { backgroundColor: '#393A4B' } : { backgroundColor: '#E3E4F1' }} ></div>
              <div className='itemsleft' style={DarkMode === 'light' ? { backgroundColor: '#25273D', color: '#9495A5' } : { backgroundColor: '#FFF', color: '#5B5E7E' }}>
                <p >{ListArr.length} items left</p>
                <p>Clear Completed</p>
              </div>
            </div>
          </form>
          <div className='itemsleft funcional' style={DarkMode === 'light' ? { backgroundColor: '#25273D', color: '#9495A5' } : { backgroundColor: '#FFF', color: '#5B5E7E' }}>
            <p>All</p>
            <p>Active</p>
            <p>Complated</p>
          </div>
        </main >
      </div >
    </>
  )
}

export default App
