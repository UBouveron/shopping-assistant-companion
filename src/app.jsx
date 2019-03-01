import React, { Component } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

import style from './assets/sass/app.scss'


class App extends Component {

  render() {      
    return (
        <div className={style.app}> 
                <p className={style.sassyDiv}>Wallah</p>
        </div>
    )
  }
}

export default App
