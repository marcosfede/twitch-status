import React from 'react'
import { Card, CardHeader, CardMedia } from 'material-ui/Card'

const styles = {
  card: {
    width: '200px',
    margin: '15px 5px 0px 5px'
  },
  cardTitle: {
  },
  bigimage: {
    height: '100px'
  },
  link : {
    textDecoration: "none",
  },
  statusline : {
    height: '5px',
    margin: '0 5px 0 5px'
  }
}

const Streamcard = (props) => (
    <div>
    <a href={props.url} style={styles.link}>
    <Card
      style={Object.assign(styles.card,{
        width: props.status === 'Online' ? '356px' : '200px'
      })}>
      <CardHeader
        titleStyle={styles.cardTitle}
        title={props.channel}
        subtitle={props.status}
        avatar={props.thumbnail}
      />
    <CardMedia >
      <img  role="presentation" src={props.img} />
    </CardMedia>
    </Card>
    <div style={Object.assign(styles.statusline, {
        backgroundColor : props.status === 'Online' ? '#689F38' : props.status === 'Offline' ? '#F57C00' : '#616161'
      })}></div>
  </a>
</div>
)

export default Streamcard
