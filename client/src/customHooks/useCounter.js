import {useState} from 'react'

function useCounter() {
    const [Counter, setCounter] = useState(0);
    const increment=() => {
        setCounter(
          (prevCounter =>
            prevCounter + 1
        ))
      }
    
      const decrement=()=> {setCounter(
          (prevCounter) =>
            prevCounter - 1
        )
      }

      return [Counter, increment, decrement]
}

export default useCounter