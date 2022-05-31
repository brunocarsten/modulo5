import { useCallback, useContext, useEffect, useState } from 'react'
import '../styles/prancheta.scoped.scss'
import { Container } from '../components/layout/Container'
import { Header } from '../components/layout/Header'
import { Item } from '../components/layout/Item'

import { questions } from '../config'

import prancheta from '../assets/prancheta.png'

export const Questoes = () => {
  const [items, setItems] = useState([])

  useEffect(() => {
    const itemsDone = JSON.parse(localStorage.getItem('progress'))
    if (itemsDone != '') {
      for (const key in itemsDone) {
        questions[itemsDone[key]].done = true
      }
    }
    setItems(questions)
  }, [])

  const render = useCallback(() => {
    return items.map((item) => {
      return <Item key={item.index} item={item} />
    })
  }, [items])

  return (
    <>
      <div className="welcome">
        <Header hasBackground={false} />
        <Container
          style={{ width: '85%', height: 'calc(100vh - 83px)', textAlign: 'center', position: 'relative', zIndex: 10 }}
        >
          <div
            className="perguntas"
            style={{
              background: 'url(' + prancheta + ') no-repeat bottom center',
              minHeight: 614,
              height: '100%',
              display: 'flex'
            }}
          >
            <div style={{ width: 404, maxWidth: '100%', margin: 'auto auto 0 auto' }}>{render()}</div>
          </div>
        </Container>
      </div>
    </>
  )
}
