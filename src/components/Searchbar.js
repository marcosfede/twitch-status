import React from 'react'
import TextField from 'material-ui/TextField'
import {red500, blue500, grey500} from 'material-ui/styles/colors'

const styles = {
  TextField: {
    errorStyle: {
      color: red500,
    },
    underlineStyle: {
      borderColor: blue500,
    },
    floatingLabelStyle: {
      color: grey500,
    },
    floatingLabelFocusStyle: {
      color: blue500,
    },
  }
}

const Searchbar = (props) => (
  <TextField
    id="TextField"
    floatingLabelText="Search for an article"
    fullWidth={true}
    underlineFocusStyle={styles.TextField.underlineStyle}
    floatingLabelFocusStyle={styles.TextField.floatingLabelFocusStyle}
    onKeyDown={props.handleSubmit}
    errorText={props.emptyError ? "This field is required" : ''}
    onChange={props.onChange}
  />
)

export default Searchbar
