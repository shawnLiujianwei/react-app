import React from 'react';
import 'styles/core.scss';
export default class CoreLayout extends React.Component {
  static propTypes = {
    children : React.PropTypes.element
  }

  render () {
    return (
      <div className='page-container'>
        111111111111111111111111111111111222222
        <div className='view-container'>
          {this.props.children}
        </div>
      </div>
    );
  }
}