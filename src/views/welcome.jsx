import '../styles/welcome.scoped.scss'

import { useState } from 'react'

import { Container } from '../components/layout/Container'
import { Header } from '../components/layout/Header'
import { Button } from '../components/layout/Button'
import { NavButton } from '../components/layout/NavButton'

import image1 from '../assets/1.png'
import image2 from '../assets/2.png'
import image3 from '../assets/3.png'
import regras from '../assets/regras.png'

export const Welcome = () => {
  const [step, setStep] = useState(1)

  const handleStep = () => {
    setStep(2)
  }

  const handleContent = () => {
    const Component = () => {
      if (step === 1) {
        return (
          <>
            <div className="info">
              <h1 className="title">BOAS-VINDAS!</h1>
              <p>
                Seja bem-vindo ao Quizz do Módulo 5 do Curso Comunidade e Povos Tradicionais! 
              </p>
              <p>
                Aqui terminamos a nossa jornada de aprendizagem sobre os povos tradicionais. Sua tarefa agora será checar se os conhecimentos aprendidos ao longo deste curso foram devidamente compreendidos e assimilados.
              </p>
              <p>
                O objetivo é verificar se você está preparado para começar o atendimento a comunidades e povos tradicionais. Vamos nessa? Boa sorte!
              </p>
            </div>
            <Button
              onClick={handleStep}
              label="COMEÇAR"
              style={{ width: 300, marginTop: 66, background: '#F6D55C', color: '#173F5F' }}
            />
          </>
        )
      } else {
        return (
          <>
            <div className="info" style={{display: 'flex', flexWrap: 'wrap'}}>
              <h1 className="title" style={{width: '100%'}}>REGRAS DO JOGO</h1>
              <ul style={{width: 'calc(100% - 366px)'}}>
                <li>
                  <img src={image1} alt="1" />
                  <p>
                    O jogador deve selecionar cada um dos itens para responder à pergunta correspondente.
                  </p>
                </li>

                <li>
                  <img src={image2} alt="2" />
                  <p> Se errar, pode tentar novamente até acertar. Em caso de dúvidas, reveja o conteúdo dos módulos.</p>
                </li>

                <li>
                  <img src={image3} alt="3" />
                  <p>Para concluir o jogo, você deverá responder corretamente todos os itens do check-list.</p>
                </li>
                <NavButton
                  url="/questoes"
                  label="COMEÇAR"
                  style={{ width: 300, marginTop: 66, background: '#F6D55C', color: '#173F5F', marginRight: 'auto' }}
                />
              </ul>
              <img src={regras} alt="" style={{width: 326, maxWidth: '100%', margin: '0 auto'}}/>
            </div>
            
          </>
        )
      }
    }

    return <Component />
  }

  const style = {
    content: {
      paddingBottom: 60,
      display: 'flex',
      justifyContent: 'flex-end',
      flexWrap: 'wrap'
    }
  }

  return (
    <>
      <div className="welcome">
        <Header hasBackground={false} />
        <Container style={{ width: '60%' }}>
          <div style={style.content}>{handleContent()}</div>
        </Container>
      </div>
    </>
  )
}
