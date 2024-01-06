import { increment, decrement } from '../redux/counterSlice'
import { useSelector, useDispatch } from 'react-redux'

function Example() {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <div>
            <h4 className='mb-3 font-bold text-xl mt-10 text-center'>Conteggio: {count}</h4>
            <div className='content-center'>                
            <button className='mr-3 mb-3' aria-label='Increment value' onClick={() => dispatch(increment())}>Increment +</button>
            <button className='mr-3 mb-3' aria-label='Increment value' onClick={() => dispatch(decrement())}>Decrement -</button>
            </div>
        </div>
    )
}

export default Example
