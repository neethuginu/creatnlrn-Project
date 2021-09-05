import React, { Component } from 'react';
import axios from 'axios';

export default class Createproduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productName: "",
            description: "",
            image: ""
        }
    }

    inputSet = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    create = (e) => {
        e.preventDefault();
        var data = {
            productName: this.state.productName,
            description: this.state.description,
            image: this.state.image
        }
        console.log(data)
        axios.post("http://localhost:4200/create", data, { mode: 'no-cors' }).then(response => {
            console.log(response)
            alert("data saved");
        })
    }

    render() {
        return (
            <div className="create">
                <h1>Create Products</h1>
                <form>
                    <div className="form-group">
                        <label className="label">Product Name</label>
                        <input className="form-control" onChange={this.inputSet} name="productName" type="text" />
                    </div>
                    <div className="form-group">
                        <label className="label">Description</label>
                        <input className="form-control" onChange={this.inputSet} name="description" type="text" />
                    </div>
                    <div className="form-group">
                        <label className="label">Product Image</label>
                        <input className="form-control" onChange={this.inputSet} name="image" type="file" />
                    </div>
                    <div className="form-group">
                        <button className="btn btn" onClick={this.create}>Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}




