import React,{Component} from 'react';
import {Button,message} from 'antd';
//应用根组件

export default class App extends Component {
	
	handleClick = () =>{
		message.success('你成功了，真的！')
	}
	
	render (){
		return <Button type="dashed" onClick={this.handleClick}>按钮测试</Button>
	}
}