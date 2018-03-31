import React, { Component } from 'react'
import { Menu, Icon } from 'antd'
import {browserHistory} from  'react-router'
import './styles/NavigationBar.scss'

const SubMenu = Menu.SubMenu
const MenuItemGroup = Menu.ItemGroup

export default class NavigationBar extends Component {
  constructor() {
    super()
    this.state={
      current: 'home'
    }
  }
  _handleClick = ({item, key, keyPath}) => {
    this.setState({current: key})
    if(key === 'home') {
      browserHistory.push('/')
      return
    }else if(key !== 'home' && key !== this.props.location.pathname) {
      browserHistory.push('/' + key)
    }
  }


  render() {
    return(
      <div>
        <Menu
          theme='dark'
          style={{backgroundColor:'#393939'}}
          onClick={this._handleClick}
          selectedKeys={[this.state.current]}
          mode="horizontal">

          <Menu.Item key="home">
            <Icon type="home" />Home
          </Menu.Item>
          <Menu.Item key="photos">
            <Icon type="appstore" />Photos
          </Menu.Item>
          <SubMenu  style ={{backgroundColor:'#393939'}}title={<span><Icon type="form" />Forums</span>}>
            <Menu.Item key="forums/experiences">Experiences</Menu.Item>
            <Menu.Item key="forums/news">News</Menu.Item>
            <Menu.Item key="forums/qa">Q&A</Menu.Item>
          </SubMenu>
          <Menu.Item key="shop">
            <Icon type='shopping-cart'/>Shop</Menu.Item>
        </Menu>
        <div>
          {this.props.children}
        </div>
      </div>

    )
  }
}
