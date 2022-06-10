import { useEffect, useState, useContext } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { Container } from '../components/layout/Container'
import { Header } from '../components/layout/Header'
import { Button } from '../components/layout/Button'
import { ProgressContext } from '../context/progress'
import imgdir from '../assets/popup amarelo dir.png'
import imgesq from '../assets/popup amarelo esq.png'

const style = {
  img: {
    paddingBottom: 15
  },
  title: {
    color: '#fff',
    paddingBottom: 20,
    fontWeight: 'bold',
    fontSize: 25,
    margin: 0
  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    margin: 0,
    paddingBottom: 20
  },
  main: {
    width: 544,
    maxWidth: '100%',
    background: '#00773E',
    minHeight: 289,
    borderRadius: 26,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    overflow: 'hidden'
  },
  bkg: {
    height: 289
  },
  pontos: {
    display: 'flex',
    alignItems: 'center',
    columnGap: 30
  },
  content: {
    padding: '30px 8px 20px 8px',
    display: 'flex',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap'
  }
}

export const PopupAcerto = () => {
  const { state } = useContext(ProgressContext)
  const { step } = state
  const navigate = useNavigate()
  const location = useLocation()
  const [link, setLink] = useState('/questoes')

  function handleAnswer() {
    if (step === 7) {
      setLink('/contagem')
    }
  }

  useEffect(() => {
    handleAnswer()
  }, [])

  return (
    <>
      <Header />
      <Container>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: 'calc(100vh - 83px)' }}>
          <div className="popup" style={style.main}>
            <div className="bkgesq" style={style.bkg}>
              <img src={imgesq} alt="" />
            </div>
            <div className="content" style={style.content}>
              <h1 style={style.title}>Resposta correta! </h1>
              {location.state && <p style={style.text}>{location.state.message}</p>}
              <Button
                onClick={() => {
                  navigate(link)
                }}
                label="AVANÇAR"
                url={link}
                style={{ width: 264, marginTop: 20, background: '#F6D55C', color: '#173F5F', maxWidth: '100%' }}
              />
            </div>
            <div className="bkgdir" style={style.bkg}>
              <img src={imgdir} alt="" />
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}
