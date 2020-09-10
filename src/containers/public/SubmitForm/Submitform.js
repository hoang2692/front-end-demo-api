import * as React from 'react';
import { connect } from 'react-redux';

class SubmitForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            title:"",
            text: "",
            image: ""
        }
    }

    _onChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.value;
        this.setState({
            [name]: value
        })
        console.log(this.state)
    }

    _onChangeImage = (event) => {
        this.setState({
            image: event.target.files[0]
        })
    }

    _onSubmit = (e) => {
        e.preventDefault();
        const data = new FormData();
        data.append("title", this.state.title);
        data.append("text", this.state.text);
        data.append("image",this.state.image)
        this.props.createProduct(data)
        console.log({...data})
    }

    render() {
        return (
            <div className="container">
                <form onSubmit={this._onSubmit}>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="inputEmail4">Title</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Title"
                                required
                                name="title"
                                onChange={this._onChange}
                            />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="inputPassword4">Text</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Text"
                                required
                                name="text"
                                onChange={this._onChange}
                            />
                        </div>
                        <div className="form-group col-md-12">
                            <input
                                type="file"
                                className="form-control"
                                id="validatedCustomFile"
                                required
                                onChange={this._onChangeImage}
                            />
                            <label
                                className="custom-file-label"
                                htmlFor="validatedCustomFile"
                                style={{ marginLeft: '5px', marginRight: '5px' }}
                            >
                                Choose file...
                            </label>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Sign in
          </button>
                </form>
            </div>
        );
    }
    // componentDidMount() {
    //     this.props.getData();
    // }
}

const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return {
        createProduct: (data) => dispatch({type: 'PRODUCT_CREATE_REQUEST', data})
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(SubmitForm);
