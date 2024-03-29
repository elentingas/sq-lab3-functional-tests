import React from 'react'

import TextCustom, { textTypes } from './TextCustom'
import colors from '../../constants/colors'
import styled, { css } from 'styled-components'

interface Props {
  color?: string
  isNegative?: boolean
  name?: string
}

const ButtonStyle = styled.a<Props>`
  cursor: pointer;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 26px;
  height: 60px;
  ${(props: Props): any =>
    props.color &&
    css`
      background-color: ${props.color};
    `}
  ${(props: Props): any =>
    props.isNegative &&
    css`
      border: 2px solid ${colors.white};
    `}
`

const ButtonCustom: React.FunctionComponent<Props & { onClick: () => void; title: string }> = ({
  color,
  isNegative,
  onClick,
  title,
  name,
}) => {
  return (
    <ButtonStyle name={name} color={color} onClick={onClick} isNegative={isNegative}>
      <TextCustom type={textTypes.MEDIUM} color={colors.white}>
        {title}
      </TextCustom>
    </ButtonStyle>
  )
}

export default ButtonCustom
