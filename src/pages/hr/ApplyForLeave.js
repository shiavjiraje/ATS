import React, {  useState } from 'react';
import { useSelector } from 'react-redux';
import { User, Calendar, File } from 'react-feather';
import config from '../../helpers/baseurl';
import axios from 'axios';


var urlpattern =config.baseUrl;
const ApplyForLeave =()=> {
    let loginDetails = useSelector((state)=> state.Auth.user || []);
    var getUsername = loginDetails.Username;
    const [type, settype]=useState('');
    const [inwords, setinwords]=useState('');
    const [startdate, setstartdate]=useState('');
    const [enddate, setenddate]=useState('');
    const [reason, setreason]=useState('');
    const handleSubmit=(e)=>{
        e.preventDefault();
       const data ={
        type:type,
        inwords:inwords,
        startdate:startdate,
        enddate:enddate,
        reason:reason,
        createby:getUsername,
        noofdays:""
       }
       var config = {
        method: 'post',
        url: `${urlpattern}LeaveMaster`,
        data : data
      };
      
      axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
       // swal(JSON.stringify(error.response.data.error.errors[0].title), "You clicked the button!", "error")
      });
     }
    
        return (
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 offset-md-3">
                            <form onSubmit={handleSubmit}  className="authentication-form card p-5">
                                
                            <h5 className="text-uppercase  text-center">Apply Your Leave</h5>
                            <div className="form-group">
                            <label for="fullname">Leave Type</label>
                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" id="basic-addon1"><User className="icon-dual" /></span>
                                </div>
                                <select
                                            name="type"
                                            id="type"
                                            className="form-control"
                                            onChange={(e) => {
                                                settype (e.target.value);
                                            }}
                                        >
                                            <option value="">Select</option>
                                            <option value="Sick Leave">Sick Leave</option>
                                            <option value="Casual Leave">Casual Leave</option>
                                            <option value="Earn Leave">Earn Leave</option>
                                        </select>
                                </div>
                            </div>
                            <div className="form-group">
                            <label for="fullname">Leave For</label>
                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" id="basic-addon1"><User className="icon-dual" /></span>
                                </div>
                                <select
                                            name="inwords"
                                            id="inwords"
                                            className="form-control"
                                            onChange={(e) => {
                                                setinwords (e.target.value);
                                            }}
                                        >
                                            <option value="">Select</option>
                                            <option value="Half Day">Half Day</option>
                                            <option value="Full Day">Full Day</option>
                                            <option value="More Than 1 Day">More Than 1 Day</option>
                                        </select>
                                </div>
                            </div>
                            <div className="form-group">
                            <label for="fullname">Start Date</label>
                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" id="basic-addon1"><Calendar className="icon-dual" /></span>
                                </div>
                                <input
                                            type="date"
                                            name="startdate"
                                            id="startdate"
                                            className="form-control"
                                            onChange={(e) => {
                                                setstartdate (e.target.value);
                                            }}
                                        />
                                </div>
                            </div>
                            <div className="form-group">
                            <label for="fullname">End Date</label>
                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" id="basic-addon1"><Calendar className="icon-dual" /></span>
                                </div>
                                <input
                                            type="date"
                                            name="enddate"
                                            id="enddate"
                                            className="form-control"
                                            onChange={(e) => {
                                                setenddate (e.target.value);
                                            }}
                                        />
                                </div>
                            </div>
                            
                            <div className="form-group">
                            <label for="fullname">Reason</label>
                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" id="basic-addon1"><File className="icon-dual" /></span>
                                </div>
                                <input
                                             type="text"
                                             name="reason"
                                             id="reason" className="form-control"
                                             onChange={(e) => {
                                                 setreason (e.target.value);
                                             }}
                                        />
                                </div>
                            </div>
                               
                                <div className="form-group mb-0 text-center">
                                    <button type="submit" className="btn-block btn btn-secondary">
                                        Apply
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }


export default ApplyForLeave;
