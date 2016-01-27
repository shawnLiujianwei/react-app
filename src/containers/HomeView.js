import React                  from 'react';
import { connect }            from 'react-redux';
import counterActions         from 'actions/counter';
import { Link }               from 'react-router';
import ImmutableRenderMixin from 'react-immutable-render-mixin';
import LeftBar from "../components/LeftBar.js"
import Product from "../components/ProductGrid.js"

// We define mapStateToProps where we'd normally use
// the @connect decorator so the data requirements are clear upfront, but then
// export the decorated component after the main class definition so
// the component can be tested w/ and w/o being connected.
// See: http://rackt.github.io/redux/docs/recipes/WritingTests.html
const mapStateToProps = (state) => ({
    counter: state.counter
});

let products = [
    {
        "title": "1饥饿鲨(OCZ) Radeon R7系列 240G 高性能固态硬盘",
        "id": "00001",
        "image": ["http://img12.360buyimg.com/n5/jfs/t514/68/406290043/84295/d2e42e8e/5465657bN8413335b.jpg"],
        "description": "dfdfdfdfdf",
        "category": "000000003",
        "details": {
            "price_now": "￥999.00",
            "price_was": "",
            "offers": [
                "手机专享价 ￥997.00",
                "加价购 满50.00另加39.00元，或满51.00另加79.00元，即可购买热销商品"
            ]
        }

    }, {
        "id": "00002",
        "title": "尼康（Nikon） COOLPIX P530 数码相机 黑色 (1605万有效像素 3英寸屏 42倍光变 24mm广角 1cm微距拍摄)",
        "image": ["http://img10.360buyimg.com/n5/g16/M00/0B/1F/rBEbRVOELl8IAAAAAAGywrycYJsAACVQQK6kzwAAbLa154.jpg"],
        "description": "单反相机..............",
        "category": "000000002",
        "details": {
            "price_now": "￥1499.00",
            "price_was": "",
            offers: [
                "满100.00另加699.00元，或满200.00另加789.00元，即可购买热销商"
            ]
        }
    }
]

let HomeView = React.createClass({
    mixins: [ImmutableRenderMixin],
    propTypes: {
        increment: React.PropTypes.func,
        counter: React.PropTypes.number
    },
    componentWillMount: function () {
    },
    componentDidMount: function () {
        console.log("did-----------------------------")
        var t = this.props;
        console.log(JSON.stringify(this.props));
        counterActions.increment();
    },
    render() {

        return (
            <div className=' text-center'>
                <button onClick={this.props.increment}>Test-------------</button>
                Counter {this.props.counter}
                <div className="col-md-2 side-bar">
                    <LeftBar />
                </div>
                <div className="col-md-10">
                    {products.map(product =>
                            <Product title={product.title} image={product.image[0]}/>
                    )}
                </div>
            </div>
        );
    }
});
//<h1>Welcome to the React Redux Starter Kit</h1>
//
//<h2>Sample Counter: {this.props.counter}</h2>
//  <button className='btn btn-default'
//          onClick={this.props.increment}>
//    Increment
//  </button>
//  <hr />
//  <Link to='/about'>Go To About View</Link>
export default connect(mapStateToProps, function (dispatch) {
    counterActions.dispatch = dispatch;
    return counterActions;
})(HomeView);
