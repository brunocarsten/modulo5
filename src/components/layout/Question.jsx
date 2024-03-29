import '../styles/question.scoped.scss'

import { useNavigate, useLocation } from 'react-router-dom'
import { useState, useContext, useEffect } from 'react'
import { Button } from './Button'
import { Checkbox } from './Checkbox'
import { ProgressContext } from '../../context/progress'
import { shuffle } from '../../helpers/shuffle'

import overlay from '../../assets/overlay foto popup.png'

import { questions } from '../../config'

export const Question = ({ ...props }) => {
  const { handleCurrentStep } = useContext(ProgressContext)
  const location = useLocation()
  const navigate = useNavigate()
  const { bkg, src, item } = props
  const { alternatives, question, title, index, message } = item

  const [items, setItems] = useState([])
  const [selected, setSelected] = useState(0)

  useEffect(() => {
    if (location.state) {
      setItems(shuffle(alternatives))
    } else {
      setItems(alternatives)
    }
  }, [])

  const onChangeValue = (value) => {
    setSelected(value)
  }

  const handleAnswer = async () => {
    const { correct } = selected
    if (correct) {
      questions[index].done = true
      await handleCurrentStep()
      navigate('/acerto', { state: { message } })
    } else {
      navigate('/erro')
    }
  }

  return (
    <>
      <div className="box" style={{ backgroundColor: bkg }}>
        <div className="content">
          <p>{title}</p>
          <p>{question}</p>
          <ul className="alternatives">
            {items.map((alternative, i) => {
              return (
                <li key={i} className={`alternative ${selected.i === i ? 'active' : ''}`}>
                  <Checkbox
                    checked={selected.i === i}
                    item={alternative}
                    onChange={() => {
                      onChangeValue({ correct: alternative.correct, i: i })
                    }}
                  />
                </li>
              )
            })}
          </ul>

          <Button
            onClick={() => {
              handleAnswer()
            }}
            label="RESPONDER"
            style={{ marginBottom: 50, background: '#00773E', color: '#FFF' }}
          />
        </div>
        <div className="image" style={{ position: 'relative' }}>
          <div className="overlay" style={{ position: 'absolute', top: '0', left: '0', opacity: '0.75' }}>
            <img src={overlay} alt="" />
          </div>
          <img src={src} alt="" />
        </div>
      </div>
    </>
  )
}
