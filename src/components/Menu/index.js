/*
 * @Author: qiuziz
 * @Date: 2017-09-05 15:01:02
 * */


import React from 'react';
import {Link} from 'react-router-dom';
import {Menu, Icon} from 'antd';
import {financial, sales} from '../../common/menu';
const SubMenu = Menu.SubMenu;


class SYMenu extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			selectedItem: props.selectedItems,
			openKeys: ['sub2', 'sub3', 'sub33', 'sub4', 'sub43'],
			current: props.pathname,
			collapsed: false,
			pathname: props.pathname,
		};
	}

	componentDidMount() {
		// this.setState({openKeys: menu.map(item => item.key)});
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.pathname !== this.state.pathname) {
			this.setState({current: nextProps.pathname});
		}
	}

	toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

	handleClick = ({ item, key, keyPath }) => {
		this.setState({ current: key });
	}

	onOpenChange = openKeys => {
		this.setState({ openKeys });
	}

	render() {
		return (
			<div style={{ width: 269 }}>
        <Menu
					selectedKeys={[this.state.current]}
          openKeys={this.state.openKeys}
					mode="inline"
					onClick={this.handleClick}
					onOpenChange={this.onOpenChange}
          inlineCollapsed={this.state.collapsed}
        >
					<Menu.Item key="/dashboard">
						<Icon type="desktop" />
						<span>首页</span>
					</Menu.Item>
					<SubMenu key="sub2" title={<span><Icon type="mail" /><span>填报</span></span>}>
						<SubMenu key="sub3" title="财务模块">
							{
								financial.map(item => 
										<SubMenu key={'sub3' + item.key} title={item.title}>
										{
											item.children.map(child => 
												<Menu.Item key={child.route}>
													<Link className="menuitems" to={child.route}>{child.title}</Link>
												</Menu.Item>
											)
										}
										</SubMenu>
								)
							}
						</SubMenu>
						<SubMenu key="sub4" title="销售模块">
						{
							sales.map(item => 
									<SubMenu key={'sub4' + item.key} title={item.title}>
									{
										item.children.map(child => 
											<Menu.Item key={child.route}>
												<Link className="menuitems" to={child.route}>{child.title}</Link>
											</Menu.Item>
										)
									}
									</SubMenu>
							)
						}
						</SubMenu>
					</SubMenu>
					
				</Menu>
      </div>
		)
	}
}

export default SYMenu;
