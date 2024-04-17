
import { useSelector, useDispatch } from 'react-redux'
import './App.css'
import { decremint, icremnt, incremintbyactiobe } from './lib/Contuer'
function App() {
  const v = useSelector((state) => state.counter.value)
  const Dispatch = useDispatch()
  return (
    <>
      <div >
        <h1>
          {v}
        </h1>
        <div className=''>
          <button onClick={() => Dispatch(icremnt())}>
          increment
          </button>
          <button onClick={() => Dispatch(decremint())}>
          decrement
          </button>
          <button onClick={() => Dispatch(incremintbyactiobe(10))}>
          incrementByAmount
          </button>
        </div>

      </div>
    </>
  )
}

export default App
