import React from 'react';
import 'styles/core.scss';
import Header from "./HeaderView.js"
import Footer from "../components/Footer.js"
export default class CoreLayout extends React.Component {
  static propTypes = {
    children: React.PropTypes.element
  }

  render() {
    return (
      <div className='container-fluid page-container'>
        <div className="nav-container row">
          <Header />
        </div>
        <div className='view-container row'>
          {this.props.children}
        </div>
        <div className="footer-container row">
          <Footer />
        </div>
      </div>
    );
  }
}
