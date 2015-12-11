/**
 * Created by Shawn Liu on 2015/11/26.
 */
'use strict';
import React from 'react';
import ImmutableRenderMixin from 'react-immutable-render-mixin'
import "../styles/side-bar.scss"
var menuList = [
  {
    "title": "家用电器",
    "categoryId": "000000001"
  }, {
    "title": "手机,数码",
    "categoryId": "000000002"
  },
  {
    "title": "电脑,办公",
    "categoryId": "000000003"
  }, {
    "title": "男装,女装",
    "categoryId": "000000004"
  }, {
    "title": "鞋靴",
    "categoryId": "000000005"
  }
];

let Menu = React.createClass({
  render() {
    let items = this.props.items;
    return (
      <ul >
        {items.map(v => <li key={v.title}>{v.title}</li>)}
      </ul>
    )
  }
});
var leftBar = React.createClass({
  "mixin": [ImmutableRenderMixin],
  propTypes: {
    "items": React.PropTypes.array
  },
  render() {
    return (
      <Menu items={menuList}></Menu>
    )
  }
})

export default leftBar;
