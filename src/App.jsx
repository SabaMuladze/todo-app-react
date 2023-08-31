import { useState, useRef, useEffect } from 'react'
import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './components/Header.css'
import Sun from './assets/icon-sun.svg'
import Moon from './assets/icon-moon.svg'
import Remove from './assets/icon-cross.svg'

// import Listfunc from './components/ListFunc'

function App() {
  const [DarkMode, setDarkMode] = useState('light')

  const changeHandler = () => {
    setDarkMode(DarkMode === 'light' ? 'dark' : 'light')

  }

  const [NewList, setNewList] = useState('');

  const [ListArr, setListArr] = useState([]);

  const [mainCheckbox, setMainCheckbox] = useState(false)

  const [sort, setSort] = useState('All')

  const addList = (event) => {
    if (event.key == 'Enter') {
      event.preventDefault()
      let item = {
        id: Math.floor(Math.random() * 1000),
        item: NewList,
        status: mainCheckbox

      }
      if (NewList.length > 0) {
        setListArr(oldList => [item, ...oldList])
      }
      setNewList('')
      setMainCheckbox(false)
    }


  }
  const deleteItem = (id) => {
    const newArr = ListArr.filter(list => list.id != id);
    setListArr(newArr)
  }

  const check = (id) => {
    let clone = [...ListArr]
    let result = clone.findIndex(list => list.id === id)
    clone[result].status = !clone[result].status
    setListArr(clone)
  }

  const buttonsCheck = (meaning) => {
    setSort(meaning)
  }

  const actives = ListArr.filter(list => !list.status)
  const complated = ListArr.filter(list => list.status)
  const data = sort === 'Active' ? actives : (sort === 'Complated' ? complated : ListArr)

  function clearComplated() {
    return setListArr(ListArr.filter(list => !list.status))
  }

  return (
    <>
      <div className={`container`} style={DarkMode === 'light' ? { backgroundColor: '#171823' } : { backgroundColor: '#FAFAFA' }} >
        <header className={`${DarkMode === 'light' ? 'dark' : 'light'}`}>
          <nav>
            <h1 className='logo'>TODO</h1>
            <button onClick={changeHandler}><img src={DarkMode === 'light' ? Sun : Moon} alt="" /></button>
          </nav>
        </header>
        <main>
          <form onKeyDown={addList} >
            <div className='addInput' style={DarkMode === 'light' ? { backgroundColor: '#25273D' } : { backgroundColor: '#FFF' }} >
              <input type='checkbox' name="checkbox" id='box' style={DarkMode === 'light' ? { backgroundColor: '#25273D' } : { backgroundColor: '#FFF' }}
                onChange={() => setMainCheckbox(!mainCheckbox)} checked={mainCheckbox} />
              <input id='inp' type="text" placeholder='Create a new todo…' style={DarkMode === 'light' ? { color: '#767992' } : { color: "#9495A5" }}
                value={NewList} onChange={ev => setNewList(ev.target.value)} />
            </div>
            <div className='lists' style={DarkMode === 'light' ? { backgroundColor: '#25273D' } : { backgroundColor: '#FFF' }} >
              {data.map(list => {
                return (
                  <React.StrictMode key={list.id}>
                    <div className='list' >
                      <input type='checkbox' name="checkbox" id='box' style={DarkMode === 'light' ? { backgroundColor: '#25273D' } : { backgroundColor: '#FFF' }}
                        checked={list.status} onChange={() => check(list.id)}
                      />
                      <p style={DarkMode === 'light' ? { color: '#C8CBE7' } : { color: '#494C6B' }} key={list.id} >{list.item}</p>
                      <img className='delete' src={Remove} alt="" onClick={() => deleteItem(list.id)} />
                    </div>
                    <div className='line' style={DarkMode === 'light' ? { backgroundColor: '#393A4B' } : { backgroundColor: '#E3E4F1' }} ></div>
                  </React.StrictMode>
                )


              })}
              <div className='itemsleft' style={DarkMode === 'light' ? { backgroundColor: '#25273D', color: '#9495A5' } : { backgroundColor: '#FFF', color: '#5B5E7E' }}>
                <p >{actives.length} items left</p>
                <p onClick={clearComplated}>Clear Completed</p>
              </div>
            </div>
          </form>
          <div className='itemsleft funcional' style={DarkMode === 'light' ? { backgroundColor: '#25273D', color: '#9495A5' } : { backgroundColor: '#FFF', color: '#5B5E7E' }}>
            <p className={sort === 'All' ? 'btncheck' : ''} onClick={() => setSort('All')}>All</p>
            <p className={sort === 'Active' ? 'btncheck' : ''} onClick={() => setSort('Active')}>Active</p>
            <p className={sort === 'Complated' ? 'btncheck' : ''} onClick={() => { setSort('Complated') }}>Complated</p>
          </div>
        </main >
      </div >
    </>
  )
}

export default App



{/* <p className={sort === 'All' ? 'btncheck' : ''} onClick={(e) => setListArr(all)}>All</p>
            <p className={sort === 'Active' ? 'btncheck' : ''} onClick={(e) => setListArr(active)}>Active</p>
            <p className={sort === 'Complated' ? 'btncheck' : ''} onClick={(e) => setListArr(complated)}>Complated</p> */}