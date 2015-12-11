/**
 * Created by Shawn Liu on 2015/12/11.
 */
import React                  from 'react';
import { connect }            from 'react-redux';
import counterActions         from 'actions/counter';
import { Link }               from 'react-router';
import ImmutableRenderMixin from 'react-immutable-render-mixin';

export default React.createClass({
  "mixins": [ImmutableRenderMixin],
  "propTypes": {
    queryString: React.PropTypes.string
  },
  getDefaultPropTypes() {
    return {
      "queryString": ""
    }
  },
  render() {

  }
})
