import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'


const style = {
  margin: 12,
}

const Button = (props) => (
  <RaisedButton onClick={props.onClick}
                href={ props.href ? props.href : '#' }
                backgroundColor={props.backgroundColor? props.backgroundColor :'#a4c639'}
                icon={props.icon}
                style={style}
  />
)
export default Button