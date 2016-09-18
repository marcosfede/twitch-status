import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: '#232031',
    primary1Color: '#6441A4',
    textColor: '#6441A4'
  }
})

class Main extends React.Component {
  render () {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <App/>
      </MuiThemeProvider>
    )
  }
}

ReactDOM.render(
  <Main/>, document.getElementById('root'))
