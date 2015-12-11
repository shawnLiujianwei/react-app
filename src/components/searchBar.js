/**
 * Created by Shawn Liu on 15/11/24.
 */
import React from 'react'
import ImmutableRenderMixin from 'react-immutable-render-mixin'

let SearchBar = React.createClass({
    mixins: [ImmutableRenderMixin],
    render() {
        return (
            <div className="col-md-4 col-md-offset-2">
              <div className="col-md-4 col-md-offset-2">
                <input type="text" className="form-control" onKeyUp={this.props.filterItem} placeholder="请输入查找的item" />
              </div>
            </div>
        )
    }
})

export default SearchBar
