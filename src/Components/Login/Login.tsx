import React from 'react'
import TextCustom, { textTypes } from '../reusable/TextCustom'
import ButtonCustom from '../reusable/ButtonCustom'
import InputCustom from '../reusable/InputCustom'
import styled from 'styled-components'
import colors from '../../constants/colors'
import Logo from '../../assets/images/logo.png'
import { connect } from 'react-redux'
import { loginRequest } from '../../store/login/actions/asyncActions'
import { withRouter } from 'react-router-dom'

interface LoginProps {
  loginRequest: (email: string, password: string) => void
  match: object
  location: object
  history: object
}

const Login: React.FunctionComponent<LoginProps> = ({ loginRequest, match, location, history }) => {
  const [companyName, setCompanyName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [contactPersonFirstName, setContactPersonFirstName] = React.useState('')
  const [contactPersonLastName, setContactPersonLastName] = React.useState('')
  const [phone, setPhone] = React.useState('')

  const [resultText, setResultText] = React.useState('')

  const validate = () => {
    let specialCharacters = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    let specialCharactersButPlus = /[ `!@#$%^&*()_\-=\[\]{};':"\\|,.<>\/?~]/;
    let letters = /[a-zA-Z]/g;
    let numbers = /\d/;

    if (!companyName) {
      setResultText("Company name cannot be blank")
    } else if (companyName.length > 30 || companyName.length < 3 || specialCharacters.test(companyName)) {
      setResultText("Company name is invalid")
    } else if (!email) {
      setResultText("Email cannot be blank")
    } else if (!email.includes(".") || !email.includes("@")) {
      setResultText("Email is invalid")
    } else if (!contactPersonFirstName) {
      setResultText("Contact person first name cannot be blank")
    } else if (specialCharacters.test(contactPersonFirstName) || numbers.test(contactPersonFirstName) ) {
      setResultText("Contact person first name is invalid")
    } else if (!contactPersonLastName) {
      setResultText("Contact person last name cannot be blank")
    } else if (specialCharacters.test(contactPersonLastName) || numbers.test(contactPersonLastName)) {
      setResultText("Contact person last name is invalid")
    } else if (!phone) {
      setResultText("Phone number cannot be blank")
    } else if (phone.length > 25 || phone.length < 3 || letters.test(phone) || specialCharactersButPlus.test(phone)) {
      setResultText("Phone number is invalid")
    } else {
      setResultText("Submitted")
    }
  }

  console.log(match, location, history)

  return (
    <Styles>
      <div className="header-navigation">
        <TextCustom type={textTypes.MEDIUM} color={colors.white}>
          Create Company
        </TextCustom>
      </div>
      <div className="login-view">
        <TextCustom name="resultText" type={textTypes.MEDIUM} color={colors.black}>
          {resultText}
        </TextCustom>
        <InputCustom
          className="inputs"
          placeholder="Company Name"
          name="companyName"
          value={companyName}
          onChange={e => setCompanyName(e.target.value)}
        />
        <InputCustom
          className="inputs"
          placeholder="Email"
          name="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <InputCustom
          className="inputs"
          placeholder="Contact Person First Name"
          name="contactPersonFirstName"
          value={contactPersonFirstName}
          onChange={e => setContactPersonFirstName(e.target.value)}
        />
        <InputCustom
          className="inputs"
          placeholder="Contact Person Last Name"
          name="contactPersonLastName"
          value={contactPersonLastName}
          onChange={e => setContactPersonLastName(e.target.value)}
        />
        <InputCustom
          className="inputs"
          placeholder="Phone Number"
          name="phone"
          value={phone}
          onChange={e => setPhone(e.target.value)}
        />
        <ButtonCustom
          onClick={validate}
          color={colors.purple}
          title="Submit"
          name="buttonSubmit"
        />
      </div>
    </Styles>
  )
}

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = dispatch => {
  return {
    loginRequest: (email: string, password: string): void => dispatch(loginRequest(email, password)),
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login))

const Styles = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: start;

  .header-navigation {
    display: flex;
    background: ${colors.purple};
    flex-direction: row;
    width: auto;
    height: 100px;
    align-items: center;
    justify-content: center;
    padding-left: 40px;
    padding-right: 60px;
  }

  .logo-style {
    margin-right: 10px;
    height: 30px;
    width: 30px;
  }

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

  .body-text {
    margin-bottom: 40px;
  }

  .inputs {
    margin-bottom: 20px;
  }
`
