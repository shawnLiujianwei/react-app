/**
 * Created by Shawn Liu on 2015/11/26.
 */
'use strict';
import React                  from 'react';
import { connect }            from 'react-redux';
import counterActions         from 'actions/counter';
import { Link }               from 'react-router';
import ImmutableRenderMixin from 'react-immutable-render-mixin';
import "../styles/header.scss";
import SearchBar from "../components/SearchBar.js";


export default React.createClass({
    "mixins": [ImmutableRenderMixin],
    render() {

        let logo = require("../images/logo.png");
        return (
            <div className='header'>
                <div className="row nav-bar">
                    <div className="col-md-1 col-md-offset-8">请登录</div>
                    <div className="col-md-1 ">客户服务</div>
                    <div className="col-md-1 ">网站导航</div>
                </div>
                <div className="row search-bar">
                    <div className="col-md-2"><img src={logo}/></div>
                    <div className="col-md-4 col-md-offset-2">
                        <div className="input-group">
                            <input type="text" className="form-control" onKeyUp={this.props.filterItem}
                                   placeholder="请输入查找的item"
                                   class="form-control"/>
                             <span className="input-group-btn">
                                  <button className="btn btn-default" type="button">Go!</button>
                             </span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
})

//export default () => (
//  <div className='nav pull-right'>
//    <div className="row">
//      <div className="col-md-1 .col-md-offset-11">请登录</div>
//      <div className="col-md-1 .col-md-offset-10"></div>
//      <div className="col-md-1 .col-md-offset-9"></div>
//    </div>
//    <div className="row">
//
//    </div>
//
//  </div>
//);
