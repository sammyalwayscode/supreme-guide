import React from 'react'
import styled from 'styled-components'
import img from "../Assets/21.jpeg"

const Recent = () => {
  return (
      <Container>
          <Top><h2>List of Staffs</h2></Top>
          <Boxhold>
              
              
          </Boxhold>
          <Head>
                  <Navs>Staff</Navs>
                  <Navs>Role</Navs>
                  <Navs>Joined</Navs>
            </Head>
              <Head2>
              <Profilehold>
                  <Circle><Img src={ img} /></Circle>
                  <Name>Ogbu Esther</Name>
              </Profilehold>

              <Role>
                  Supervisor
              </Role>

              <Joined>10/12/09</Joined>
          </Head2>

          <Head2>
              <Profilehold>
                  <Circle><Img src={ img} /></Circle>
                  <Name>Ogbu Esther</Name>
              </Profilehold>

              <Role>
                  Supervisor
              </Role>

              <Joined>10/12/09</Joined>
          </Head2>

          <Head2>
              <Profilehold>
                  <Circle><Img src={ img} /></Circle>
                  <Name>Ogbu Esther</Name>
              </Profilehold>

              <Role>
                  Supervisor
              </Role>

              <Joined>10/12/09</Joined>
          </Head2>
          <View>
              <Button>
                  View More
              </Button>
          </View>
    </Container>
  )
}

export default Recent
const Button = styled.div`
    width: 120px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    background-color: #03993F;
    border-radius: 50px;
    cursor: pointer;
`
const View = styled.div`
    width: 100%;
    display: flex;
    margin-top: 30px;
    justify-content: center;
    align-items: center;
`
const Joined = styled.div`
    
`
const Role = styled.div`
    width: 200px;
    /* background-color: green; */
    margin-right: 90px;
    display: flex;
    justify-content: center;
`
const Img = styled.img`
    width: 100px;
    height: 100px;
    object-fit: cover;
`
const Name = styled.div`
    display: flex;
    margin-left: 10px;
    
`
const Circle = styled.div`
    width: 45px;
    height: 45px;
    border: 1px solid #fff;
    /* background-color: red; */
    display: flex;
    /* justify-content */
    align-items: center;
    border-radius: 50px;
    overflow: hidden;
`
const Profilehold = styled.div`
    display: flex;
    align-items: center;
`
const Hold = styled.div`
    height: 40px;
    width: 100%;
    display: flex;
    margin-top: 10px;
    justify-content: space-between;
    background-color: blue;
    align-items: center;
`
const Navs2 = styled.div`
    color: #5a5a5a;
    font-size: 18px;
`
const Navs = styled.div`
    color: #fff;
    font-size: 18px;
    cursor: pointer;
`
const Head2 = styled.div`
    background-color: #F6F7F9;
    height: 80px;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
    display: flex;
    /* height: 100%; */
    /* height: 60px; */
    padding-left: 10px;
    padding-right: 10px;
`
const Head = styled.div`
    margin-top: 15px;
    justify-content: space-between;
    background-color: #03993f;
    align-items: center;
    display: flex;
    height: 70px;
    padding-left: 10px;
    padding-right: 10px;
    position: sticky;
`
const Boxhold = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
    
    /* background-color: red; */
`
const Top = styled.div`
    h2{
        margin: 0;
        font-size: 20px;
    }
`

const Container = styled.div`
    width: 93%;
    display: flex;
    height: 100%;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    padding: 30px;
    margin-top: 30px;
    flex-direction: column;
    background-color: #fff;
`