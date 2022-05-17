import React, { Component } from 'react'
import TenantService from '../services/TenantService'


class wormhole extends Component {
    constructor(props) {
        super(props)

        this.state = {
                tenant: []
        }
        this.addTenant = this.addTenant.bind(this);
        this.viewTenant = this.viewTenant.bind(this);
    }

componentDidMount(){
    TenantService.getTenant().then((res)=>{
        this.setState({tenant: res.data});
    })
}

addTenant(){
    this.props.history.push('/create');
}

viewTenant(code){
    this.props.history.push(`/view/${code}`);
}
    render() {
        return (
            
            <div>
                <h2 className="text-center">Wormhole</h2>
                <div className = "row1" >
                    <button className="btn btn-primary" onClick={this.addTenant}> Add Tenant</button>
                 </div>
                <div className="searchBox">
                <input
                    id="tenantCode"
                    type="Tenant code"
                    placeholder="tenant code..."
                />
                <button id="search">🔎</button>
                <br/>
            </div>
            <br/>
            <br/>
                 <div className = "row2">
                        <table className = "table table-striped table-bordered">

                            <thead >
                                <tr>
                                <th>Access URL</th>
                                <th>Account Type</th>
                                <th>Code</th>
                                <th>Name</th> 
                                <th>Actions</th>                               
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.tenant.map(
                                        tenant => 
                                        <tr key = {tenant.id}>
                                             <td> {tenant.accessUrl}</td>   
                                             <td> {tenant.accountType}</td>                                
                                             <td> {tenant.code}</td>                             
                                             <td> {tenant.name}</td>
                                             <td>
                                             <button style={{marginLeft: "10px"}} onClick={ () => this.viewTenant(tenant.code)} className="btn btn-info">Access Details </button>
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                        <br/><br/>
                 </div>
            </div>
        )
    }
}

export default wormhole