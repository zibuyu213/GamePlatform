import React, {Component} from 'react';
import { connect } from 'dva';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;


export default class IndexPage extends Component {

    // 组件挂载之前
    componentWillMount() {

    }

    // 组件挂载后
    componentDidMount() {

    }

    // 组件卸载之前
    componentWillUnmount() {

    }

    render() {
        return (
            <Layout>
              <Sider
                breakpoint="lg"
                collapsedWidth="0"
                onBreakpoint={broken => {
                  console.log(broken);
                }}
                onCollapse={(collapsed, type) => {
                  console.log(collapsed, type);
                }}
              >
                <div className="logo" />
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                  <Menu.Item key="1">
                    <Icon type="user" />
                    <span className="nav-text">首页</span>
                  </Menu.Item>
                  <SubMenu
                      key="sub1"
                      title={
                        <span>
                          <Icon type="user" />
                          <span>棋类</span>
                        </span>
                      }
                  >
                      <Menu.Item key="2">五子棋</Menu.Item>
                      <Menu.Item key="3">象棋</Menu.Item>
                      <Menu.Item key="4">飞行棋</Menu.Item>
                  </SubMenu>
                  <SubMenu
                      key="sub2"
                      title={
                        <span>
                          <Icon type="user" />
                          <span>牌类</span>
                        </span>
                      }
                  >
                      <Menu.Item key="5">翻牌游戏</Menu.Item>
                  </SubMenu>
                </Menu>
              </Sider>
              <Layout>
                <Header style={{ background: '#fff',  margin: '24px 16px 24px' , padding: 0 ,textAlign: 'center'}}>首页</Header>
                <Content style={{ margin: '24px 16px 0' }}>
                  <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>content</div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Ant Design ©2019 Created by Ant UED</Footer>
              </Layout>
            </Layout>
        );
    }
}
