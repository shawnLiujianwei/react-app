/**
 * Created by Shawn Liu on 2015/11/26.
 */
import React from 'react';
import ImmutableRenderMixin from 'react-immutable-render-mixin'
import "../styles/product-grid.scss"
import classNames from "classnames";
export default React.createClass({
  "mixins": [ImmutableRenderMixin],
  "propTypes": {
    "title": React.PropTypes.string,
    "image": React.PropTypes.string,
    "id": React.PropTypes.string
  },
  render() {
    let props = this.props;
    let productClassNames = classNames("product-grid", props.className || "col-md-3");
    return (
      <div className={productClassNames}>
        <li className="image"><img src={props.image}></img></li>
        <li className="title">{props.title}</li>
      </div>
    )
  }
})
