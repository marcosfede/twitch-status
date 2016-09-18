import React, { Component } from 'react'
import './App.css'
import Topbar from './components/Topbar'
import Streamcard from './components/Streamcard'
import $ from 'jquery'
import { Tabs, Tab } from 'material-ui/Tabs'

const styles = {
}

class App extends Component {

  constructor () {
    super()
    this.state = {
      streams: ['ESL_SC2', 'OgamingSC2', 'cretetion', 'freecodecamp', 'storbeck', 'habathcx', 'RobotCaleb', 'noobs2ninjas', 'towelliee', 'brunofin', 'arteezy', 'nl_kripp', 'Reckful'],
      streamdata: {},
      channeldata: {}
    }
  }
  componentDidMount () {
    this.getChannels()
    this.getStreams()
  }
  getStreams = () => {
    let clientid = 'cldmi9s1cyhotgxgmprgdldxl8erjwi'
    Promise.all(this.state.streams.map((stream) => {
      return new Promise((resolve, reject) => {
        $.getJSON(`https://api.twitch.tv/kraken/streams/${stream}?client_id=${clientid}&callback=?`)
          .done(data => resolve(data))
          .fail(() => reject('promise problem'))
      })
    }))
      .then(values => {
        let object = {}
        this.state.streams.forEach((streamname, i) => {
          object[streamname] = values[i]
        })
        this.setState({streamdata: object})
      })
      .catch((err) => console.error('promise problem', err))
  }
  getChannels = () => {
    let clientid = 'cldmi9s1cyhotgxgmprgdldxl8erjwi'
    Promise.all(this.state.streams.map((stream) => {
      return new Promise((resolve, reject) => {
        $.getJSON(`https://api.twitch.tv/kraken/channels/${stream}?client_id=${clientid}&callback=?`)
          .done(data => resolve(data))
          .fail(() => reject('promise problem'))
      })
    }))
      .then(values => {
        let object = {}
        this.state.streams.forEach((streamname, i) => {
          object[streamname] = values[i]
        })
        this.setState({channeldata: object})
      })
      .catch((err) => console.error('promise problem', err))
  }

  render () {
    let renderOnline = () => {
      let streamdata = this.state.streamdata
      return Object.keys(streamdata)
        .filter((stream) => streamdata[stream].stream)
        .map((stream, i) => (
            <Streamcard
              key={stream}
              status='Online'
              channel={stream}
              url={streamdata[stream].stream.channel.url}
              img={streamdata[stream].stream.preview.large}
              thumbnail={streamdata[stream].stream.channel.logo} />
        ))
    }

    let renderOffline = () => {
      let streamdata = this.state.streamdata
      let channeldata = this.state.channeldata
      return Object.keys(streamdata)
        .filter((stream) => !streamdata[stream].stream && streamdata[stream].status !== 404)
        .map((stream, i) => (
          <Streamcard
            key={stream}
            status='Offline'
            url={channeldata[stream].url}
            channel={stream}
            thumbnail={channeldata[stream].logo}
            img={channeldata[stream].logo} />))
    }

    let render404 = () => {
      let streamdata = this.state.streamdata
      return Object.keys(streamdata)
        .filter((stream) => streamdata[stream].status === 404)
        .map((stream, i) => (
          <Streamcard
            key={stream}
            status='Not Found'
            channel={stream}
            thumbnail='../icons/404.png'
            img='../icons/404.png' />))
    }

    return (
      <div style={styles} id='App' className='App'>
        <Topbar/>
        <div id='content'>
          <div id='title'>
            <img role='presentation' src='../icons/twitch.png'></img>
            <h1>Twitch Status</h1>
          </div>
          <Tabs>
            <Tab label='All'>
              <div className='streams-container'>
                {renderOnline()}
                {renderOffline()}
                {render404()}
              </div>
            </Tab>
            <Tab label='Online'>
              <div className='streams-container'>
                {renderOnline()}
              </div>
            </Tab>
            <Tab label='Offline'>
              <div className='streams-container'>
                {renderOffline()}
              </div>
            </Tab>
          </Tabs>
        </div>
      </div>
    )
  }
}

export default App
