import * as React from 'react';
import { connect } from 'react-redux';

class Products extends React.Component {
    render() {
        const { products } = this.props;
        console.log('component', products)
        return (
            <div className="container" style={{ paddingTop: '100px' }}>
                <div className="row">
                    {products.map((e, index) => {
                        return (
                            <div className="col-md-3" key={index}>
                                <div className="card">
                                    <img className="card-img-top" src={"https://hoang2692-demo-api.herokuapp.com/" + e.image} alt="" />
                                    <div className="card-body">
                                        <h4 className="card-title">{e.title}</h4>
                                        <p className="card-text">{e.title}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        );
    }
    componentDidMount() {
        this.props.getData();
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.products.data
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getData: () => dispatch({ type: 'PRODUCT_GET_DATA_REQUEST' })
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Products);
