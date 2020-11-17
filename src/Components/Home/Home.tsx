import React from 'react'
import TextCustom, { textTypes } from '../reusable/TextCustom'
import styled from 'styled-components'
import { connect } from 'react-redux'

const Home: React.FunctionComponent = () => {
  return (
    <Styles>
      <div className="login-view">
        <TextCustom className="title-text" type={textTypes.LARGE}>
          home
        </TextCustom>
      </div>
    </Styles>
  )
}

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = dispatch => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)

const Styles = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: start;

  .login-view {
    height: 80vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 335px;
    margin: auto;
  }

  .title-text {
    margin-bottom: 20px;
    text-transform: uppercase;
  }
`
