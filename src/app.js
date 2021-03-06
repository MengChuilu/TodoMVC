import Taro, { Component } from '@tarojs/taro'
import { Provider } from '@tarojs/redux'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import '@tarojs/async-await'

import reducer from './reducers'
import Index from './pages/index'

import './app.scss'

const store = createStore(reducer, composeWithDevTools(
  applyMiddleware()
  // other store enhancers if any
))

class App extends Component {
  config = {
    pages: [
      'pages/index/index'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    }
  }

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentCatchError () {}

  render () {
    return (
      <Provider store={store}>
        <Index/>
      </Provider>
    )
  }
}

Taro.render(<App/>, document.getElementById('app'))
