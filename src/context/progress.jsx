import { createContext, useState, useEffect } from 'react'

const ProgressContext = createContext()

function ProgressProvider({ children }) {
  const [state, setState] = useState({
    step: 0
  })
  const [doneItems, setDoneItems] = useState([])

  const handleState = (payload) => {
    console.log(payload)
    setState({ step: payload })
  }

  const handleCurrentStep = () => {
    setDoneItems([...doneItems, state.step])
  }

  useEffect(() => {
    if (doneItems != '') {
      localStorage.setItem('modulo5', JSON.stringify(doneItems))
    }
  }, [doneItems])

  const value = { state, doneItems, handleState, handleCurrentStep }
  return <ProgressContext.Provider value={value}>{children}</ProgressContext.Provider>
}

export { ProgressProvider, ProgressContext }
