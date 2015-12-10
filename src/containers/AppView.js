import React from 'react';
import 'styles/core.scss';
import NavBar from "../components/NavBar.js"
import Footer from "../components/footer.js"
export default class CoreLayout extends React.Component {
  static propTypes = {
    children : React.PropTypes.element
  }

  render () {
    return (
      <div className='container-fluid page-container'>
        <div className="nav-container">
          <NavBar />
        </div>
        <div className='view-container'>
          {this.props.children}
        </div>
        <div className="footer-container">
          <Footer />
        </div>
      </div>
    );
  }
}
