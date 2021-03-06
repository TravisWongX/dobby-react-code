import Nav from './Nav'
import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  max-width: 500px;
  margin: 0 auto;
  background: #fafafa;
  position: relative;
`

const Main = styled.div`
  flex-grow: 1;
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`

interface Props {
  children: React.ReactNode
  className?: string
  scrollTop?: number
}

const Layout = (props: Props) => {
  const mainRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    setTimeout(() => {
      if (!mainRef.current) return
      mainRef.current.scrollTop = props.scrollTop!
    }, 0)
  }, [props.scrollTop])
  return (
    <Wrapper>
      <Main className={props.className} ref={mainRef}>
        {props.children}
      </Main>
      <Nav />
    </Wrapper>
  )
}

Layout.defaultProps = {
  scrollTop: 0,
}

export default Layout
