import React from 'react'
import styled from 'styled-components'
import img from "../Assets/person.png"
import Cards from './Cards'
import Latesttransact from './Latesttransact'
import Recent from './Recent'
import Sales from './Sales'
import Todo from './Todo'

const Home = () => {
  return (
    <Container>
        <Wrapper>
            <Top>
                <Left>
                    <Bold>
                        <h1>Dashboard</h1>
                    </Bold>
                </Left>
            </Top>
              <Cards />
              <Recent />
              <Latesttransact />
        </Wrapper>
    </Container>
  )
}

export default Home
const Img = styled.img`
    height: 45px;
`
const Right = styled.div`
    display: flex;
    align-items: center;
`
const P = styled.div`
    p{
        color: #718096;
        font-family: Karla,sans-serif;
        font-size: .875rem;
        margin: 0;
    }
    margin-top: 7px;
`
const Bold = styled.div`
    h1{
        font-size: 29px;
    color: #000;
    font-weight: 700;
    font-family: U8,sans-serif;
    margin: 0;
    }
`
const Left = styled.div`
    display: flex;
    flex-direction: column;
`
const Wrapper = styled.div`
    width: 92%;
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
    padding-top: 90px;
`
const Top = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`
const Container = styled.div`
    width: calc(100% - 19%);
    display: flex;
    justify-content: center;
    margin-left: 260px;
    overflow: hidden;
    /* background-color: red; */
`