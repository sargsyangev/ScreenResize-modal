import { useState } from 'react'
import './App.css'
import Modal from './Components/modal/modal'

function App() {
  const [isOpen, setIsOpen] = useState(false)

  const handleOpenModal = () => setIsOpen(true)
  const handleCloseModal = () => setIsOpen(false)

  return (<div className='app'>
    <button onClick={handleOpenModal} className='openBtn'> Open Modal</button>
    {isOpen && <Modal handleCloseModal={handleCloseModal} />}
  </div>)
}

export default App
