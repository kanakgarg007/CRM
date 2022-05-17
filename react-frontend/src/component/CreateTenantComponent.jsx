import React, { Component } from 'react'
import TenantService from '../services/TenantService';

export default class CreateTenantComponent extends Component {
    constructor(props) {
    super(props);
    this.state = {code:'', name:'', accessUrl:'', accountType:'', bussinessModel:'', bussinessName:'', industry:'', source:'', statusCode:'', created:'', goLiveDate:''};
    this.changeTenantCodeHandler=this.changeTenantCodeHandler.bind(this);
    this.changeTenantNameHandler=this.changeTenantNameHandler.bind(this);
    this.changeTenantAccessUrlHandler=this.changeTenantAccessUrlHandler.bind(this);
    this.changeTenantAccountTypeHandler=this.changeTenantAccountTypeHandler.bind(this);
    this.changeTenantBussinessModelHandler=this.changeTenantBussinessModelHandler.bind(this);
    this.changeTenantBussinessNameHandler=this.changeTenantBussinessNameHandler.bind(this);
    this.changeTenantIndustryHandler=this.changeTenantIndustryHandler.bind(this);
    this.changeTenantSourceHandler=this.changeTenantSourceHandler.bind(this);
    this.changeTenantStatusHandler=this.changeTenantStatusHandler.bind(this);
    this.changeTenantCreatedHandler=this.changeTenantCreatedHandler.bind(this);
    this.changeTenantGoLiveDateHandler=this.changeTenantGoLiveDateHandler.bind(this);
    this.saveTenant=this.saveTenant.bind(this);
  }

changeTenantNameHandler=(event)=>{
    this.setState({name:event.target.value})
}
changeTenantCodeHandler=(event)=>{
    this.setState({code:event.target.value})
}
changeTenantAccessUrlHandler=(event)=>{
    this.setState({accessUrl:event.target.value})
}
changeTenantAccountTypeHandler=(event)=>{
    this.setState({accountType:event.target.value})
}
changeTenantBussinessModelHandler=(event)=>{
    this.setState({bussinessModel:event.target.value})
}
changeTenantBussinessNameHandler=(event)=>{
    this.setState({bussinessName:event.target.value})
}
changeTenantIndustryHandler=(event)=>{
    this.setState({industry:event.target.value})
}
changeTenantSourceHandler=(event)=>{
    this.setState({source:event.target.value})
}
changeTenantStatusHandler=(event)=>{
    this.setState({statusCode:event.target.value})
}
changeTenantCreatedHandler=(event)=>{
    this.setState({created:event.target.value})
}
changeTenantGoLiveDateHandler=(event)=>{
    this.setState({goLiveDate:event.target.value})
}
saveTenant=(e)=>{
    e.preventDefault();
    let tenant = {code:this.state.code, name:this.state.name, accessUrl:this.state.accessUrl, accountType:this.state.accountType, bussinessModel:this.state.bussinessModel, bussinessName:this.state.bussinessName, industry:this.state.industry, source:this.state.source, statusCode:this.state.statusCode, created:this.state.created, goLiveDate:this.state.goLiveDate};
    console.log(JSON.stringify(tenant));
    TenantService.createTenant(tenant).then(res=>{
        this.props.history.push("/");
    })
}

  render() {
    return (
      <div>
          <div className='container'>
              <div className='row'>
                  <div className='card col-md-6 offset-md-3 offset-md-3'>
                      <h3>Add Tenant</h3>
                      <div className='card-body'>
                          <form>
                              <div className='form-group'>
                                  <label>Tenant Code:</label>
                                  <input type='text' placeholder='Tenant Code' name='code' className='form-control' value={this.state.code} onChange={this.changeTenantCodeHandler}></input>
                              </div>
                              <div className='form-group'>
                                  <label>Tenant Name:</label>
                                  <input type='text' placeholder='Tenant Name' name='name' className='form-control' value={this.state.name} onChange={this.changeTenantNameHandler}></input>
                              </div>
                              <div className='form-group'>
                                  <label>Access Url:</label>
                                  <input type='text' placeholder='Access Url' name='accessUrl' className='form-control' value={this.state.accessUrl} onChange={this.changeTenantAccessUrlHandler}></input>
                              </div>
                              <div className='form-group'>
                                  <label>Account Type:</label>
                                  <input type='text' placeholder='Account Type' name='accountType' className='form-control' value={this.state.accountType} onChange={this.changeTenantAccountTypeHandler}></input>
                              </div>
                              <div className='form-group'>
                                  <label>Bussiness Model:</label>
                                  <input type='text' placeholder='Bussiness Model' name='bussinessModel' className='form-control' value={this.state.bussinessModel} onChange={this.changeTenantBussinessModelHandler}></input>
                              </div>
                              <div className='form-group'>
                                  <label>Bussiness Name:</label>
                                  <input type='text' placeholder='Bussiness Name' name='bussinessName' className='form-control' value={this.state.bussinessName} onChange={this.changeTenantBussinessNameHandler}></input>
                              </div>
                              <div className='form-group'>
                                  <label>Industry:</label>
                                  <input type='text' placeholder='Industry' name='industry' className='form-control' value={this.state.industry} onChange={this.changeTenantIndustryHandler}></input>
                              </div>
                              <div className='form-group'>
                                  <label>Source:</label>
                                  <input type='text' placeholder='Source' name='source' className='form-control' value={this.state.source} onChange={this.changeTenantSourceHandler}></input>
                              </div>
                              <div className='form-group'>
                                  <label>Status:</label>
                                  <input type='text' placeholder='Status' name='status' className='form-control' value={this.state.status} onChange={this.changeTenantStatusHandler}></input>
                              </div>
                              <div className='form-group'>
                                  <label>Created:</label>
                                  <input type='text' placeholder='Created' name='created' className='form-control' value={this.state.created} onChange={this.changeTenantCreatedHandler}></input>
                              </div>
                              <div className='form-group'>
                                  <label>Go Live Date:</label>
                                  <input type='text' placeholder='Go Live Date' name='goLiveDate' className='form-control' value={this.state.goLiveDate} onChange={this.changeTenantGoLiveDateHandler}></input>
                              </div>
                              <button className='btn btn-success' onClick={this.saveTenant}>Save</button>
                          </form>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    )
  }
}