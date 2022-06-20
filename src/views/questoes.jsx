import { useCallback, useEffect, useState } from 'react'
import '../styles/prancheta.scoped.scss'
import { Container } from '../components/layout/Container'
import { Header } from '../components/layout/Header'
import { Item } from '../components/layout/Item'
import { questions } from '../config'

export const Questoes = () => {
  const [items, setItems] = useState([])

  useEffect(() => {
    const itemsDone = JSON.parse(localStorage.getItem('modulo5'))
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
          <div className="perguntas">
            <div>{render()}</div>
          </div>
        </Container>
      </div>
    </>
  )
}
