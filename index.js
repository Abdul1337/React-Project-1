import React, { Component } from 'react';
import { render } from 'react-dom';
import Homepage from './Homepage';
import './style.css';

import { Layout } from 'antd';
import 'antd/dist/antd.css';

const { Content } = Layout;

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
    <div>
      <Layout style={{minHeight: '100vh'}}>
        <Content>
          <Homepage />
        </Content>
      </Layout>
    </div>
    );
  }
}

render(<App />, document.getElementById('root'));
