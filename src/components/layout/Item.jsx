import { useContext } from 'react'
import { ProgressContext } from '../../context/progress'
import { useNavigate } from 'react-router-dom'
import { Button } from './Button'
import check from '../../assets/check.png'
import checkbox from '../../assets/checkbox.png'

export const Item = ({ item }) => {
  const navigate = useNavigate()
  const { handleState } = useContext(ProgressContext)

  const style = {
    pergunta: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start',
      paddingBottom: 15
    },
    text: {
      background: 'transparent',
      color: '#0076BE',
      maxWidth: '100%',
      textAlign: 'left',
      font: 'normal normal bold 16px/18px PT Sans Pro',
      justifyContent: 'flex-start'
    },
    checkbox: {
      position: 'relative',
      width: 32,
      height: 32,
      marginRight: 22
    },
    check: {
      position: 'absolute',
      top: -14,
      left: 0,
      transition: 'all .3s',
      opacity: 0
    }
  }

  const handleStep = async (step) => {
    await handleState(step)
    if (item.done) {
    }else{
      navigate('/main')
    }
  }

  return (
    <div className={`pergunta ${item.done ? 'done' : ''}`} style={style.pergunta}>
      <div style={style.checkbox}>
        <img src={checkbox} alt="" />
        <img className="check" src={check} alt="" style={style.check} />
      </div>
      <Button
        onClick={() => {
          handleStep(item.index)
        }}
        label={item.label}
        style={style.text}
      >
        {item.label}
      </Button>
    </div>
  )
}
