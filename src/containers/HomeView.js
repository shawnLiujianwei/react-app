import React                  from 'react';
import { connect }            from 'react-redux';
import counterActions         from 'actions/counter';
import { Link }               from 'react-router';
import ImmutableRenderMixin from 'react-immutable-render-mixin';
import LeftBar from "../components/LeftBar.js"

// We define mapStateToProps where we'd normally use
// the @connect decorator so the data requirements are clear upfront, but then
// export the decorated component after the main class definition so
// the component can be tested w/ and w/o being connected.
// See: http://rackt.github.io/redux/docs/recipes/WritingTests.html
const mapStateToProps = (state) => ({
  counter: state.counter
});

let HomeView = React.createClass({
  mixins: [ImmutableRenderMixin],
  propTypes: {
    increment: React.PropTypes.func,
    counter: React.PropTypes.number
  },
  render() {
    return (
      <div className=' text-center'>


        <div className="col-md-2 side-bar">
          <LeftBar />
        </div>
        <div className="col-md-10">
          <h1>Welcome to the React Redux Starter Kit</h1>

          <h2>Sample Counter: {this.props.counter}</h2>
          <button className='btn btn-default'
                  onClick={this.props.increment}>
            Increment
          </button>
          <hr />
          <Link to='/about'>Go To About View</Link>
        </div>
      </div>
    );
  }
});

export default connect(mapStateToProps, counterActions)(HomeView);
