import React, { Component } from 'react'
import TenantService from '../services/TenantService'

class ViewTenantComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            code: this.props.match.params.code,
            tenant: {}
        }
    }

    componentDidMount(){
        TenantService.getTenantByCode(this.state.code).then( res => {
            this.setState({tenant: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> Tenant Information</h3>
                    <div className = "card-body">
                        <div className = "row3">
                            <label> Tenant Name: </label>
                            <div> { this.state.tenant.name }</div>
                        </div>
                        <div className = "row3">
                            <label> Tenant Code: </label>
                            <div> { this.state.tenant.code }</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ViewTenantComponent