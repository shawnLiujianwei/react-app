/**
 * Created by Shawn Liu on 15/11/24.
 */
import React from 'react'
import ImmutableRenderMixin from 'react-immutable-render-mixin'
import "../styles/footer.scss"
let Footer = React.createClass({
    mixins: [ImmutableRenderMixin],
    render() {
        return (
            <div className="footer text-center">
                    <p>Copyright (c) 2008</p>
            </div>
        )
    }
})

export default Footer
