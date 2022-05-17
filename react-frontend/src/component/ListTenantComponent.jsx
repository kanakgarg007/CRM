import React, { Component } from 'react'
import TenantService from '../services/TenantService'

class ListTenantComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                tenant: []
        }
    }

componentDidMount(){
    TenantService.getTenant().then((res)=>{
        this.setState({tenant: res.data});
    })
}

    render() {
        return (
            
            <div>
                 <h2 className="text-center">Tenants List</h2>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                <th>Access URL</th>
                                <th>Account Type</th>
                                <th>Bussiness Model</th>
                                <th>Bussiness Name</th>
                                <th>Code</th>
                                <th>Created</th>
                                <th>Go-Live Date</th>
                                <th>ID</th>
                                <th>Industry</th>
                                <th>Name</th>
                                <th>Source</th>
                                <th>Status Code</th>
                                <th>Updated</th>                                
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.tenant.map(
                                        tenant => 
                                        <tr key = {tenant.id}>
                                             <td> {tenant.accessUrl} </td>   
                                             <td> {tenant.accountType}</td>
                                             <td> {tenant.businessModel}</td>
                                             <td> {tenant.businessName} </td>   
                                             <td> {tenant.code}</td>
                                             <td> {tenant.created}</td>
                                             <td> {tenant.goLiveDate} </td>   
                                             <td> {tenant.id}</td>
                                             <td> {tenant.industry}</td>
                                             <td> {tenant.name}</td>
                                             <td> {tenant.source} </td>   
                                             <td> {tenant.statusCode}</td>
                                             <td> {tenant.updated}</td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                 </div>
            </div>
        )
    }
}

export default ListTenantComponent