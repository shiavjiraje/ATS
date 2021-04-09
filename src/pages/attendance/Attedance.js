import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Row, Col, Input } from 'reactstrap';
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider, { Search,CSVExport } from 'react-bootstrap-table2-toolkit';
import paginationFactory from 'react-bootstrap-table2-paginator';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import {UncontrolledDropdown, DropdownMenu, DropdownToggle, Button } from 'reactstrap';
import * as FeatherIcon from 'react-feather';
import PageTitle from '../../components/PageTitle';

import $ from "jquery";
import config from '../../helpers/baseurl';


var urlpattern =config.baseUrl;

const { ExportCSVButton } = CSVExport;
const sizePerPageRenderer = ({ options, currSizePerPage, onSizePerPageChange }) => (
    <React.Fragment>
        <label className="d-inline mr-1">SHow</label>
        <Input
            type="select"
            name="select"
            id="no-entries"
            className="custom-select custom-select-sm d-inline col-2"
            defaultValue={currSizePerPage}
            onChange={(e) => onSizePerPageChange(e.target.value)}>
            {options.map((option, idx) => {
                return <option key={idx}>{option.text}</option>;
            })}
        </Input>
        <label className="d-inline ml-1">Entry</label>
    </React.Fragment>
);

const TableWithSearch = (props) => {
    const { SearchBar } = Search;
    //const dispatch = useDispatch();

    // const rowEvent = {
    //     onDoubleClick: ( e, row, index ) => {

    //         dispatch( setDepartamento( row ) );

    //         dispatch( getDepartamentosModal() );
    //         //console.log(props.result)
    //     }
    // }
    return (
            
                <ToolkitProvider bootstrap4 keyField="ROW_NUMBER" data={props.records} columns={props.columns} search>
                    {(props) => (
                        <React.Fragment>
                            <Row>
                                <Col md={6} className="">
                                    <SearchBar {...props.searchProps} />
                                </Col>    
                                <Col md={6} className="text-right">
                                    
                                <UncontrolledDropdown className=" profile-dropdown-menu">
                                <button className="btn btn-secondary bg-secondary upbtn  mr-0">Upload New</button>
                <DropdownToggle
                    data-toggle="dropdown"
                    tag="button"
                    className="btn btn-secondary dropdown-toggle bg-secondary  mr-0">
                    Download <FeatherIcon.ChevronDown />
                </DropdownToggle>
                <DropdownMenu right className="topbar-dropdown-menu profile-dropdown-items">
                    <div className="dropdown-item notify-item p1">
                    <ExportCSVButton className="btn-link" { ...props.csvProps }>Export CSV</ExportCSVButton>
                    </div>
                    <div  className="dropdown-item notify-item p1">
                    <ExportCSVButton className="btn-link" { ...props.csvProps }>Export PDF</ExportCSVButton>
                    </div>
                    <div  className="dropdown-item notify-item p1">
                    <ExportCSVButton className="btn-link" { ...props.csvProps }>Export EXCEL</ExportCSVButton>
                    </div>
                </DropdownMenu>
            </UncontrolledDropdown>
                                {/* <ExportCSVButton className="btn-primary" { ...props.csvProps }>Export CSV!!</ExportCSVButton> */}
                                </Col>                            
                            </Row>

                            <BootstrapTable
                                {...props.baseProps}
                                bordered={false}
                                // defaultSorted={defaultSorted}
                                //rowEvents={rowEvent}
                                pagination={
                                    paginationFactory( 
                                        { 
                                            sizePerPage: 10, 
                                            sizePerPageRenderer: sizePerPageRenderer, 
                                            sizePerPageList: [
                                                { text: '10', value: 10, }, 
                                                { text: '20', value: 20 }, 
                                                { text: '50', value: 50 }, 
                                                { text: 'Todos', value: ( props.records ? props.records.length : 0 ) }
                                            ] 
                                        } 
                                    )
                                }
                                
                                wrapperClasses="table-responsive"
                            />
                        </React.Fragment>
                    )}
                </ToolkitProvider>
    );
};

const Attendance = () => {

    const [attendancerecord, setAttendanceRecord]=useState([]);
    let loginDetails = useSelector((state)=> state.Auth.user || []);
     useEffect(() => {
         getAttendanceReport();
 
         // eslint-disable-next-line 
     }, []);
     const getAttendanceReport=()=>{
         var getUsername = loginDetails.Username;
         //alert("calling");
         $.ajax
         ({
              
             url: `${urlpattern}Attendance_Master?username=${getUsername}`,
             type:"GET",
             dataType:"JSON",
             
             
             success: function(data) 
             {
                // debugger;
                 //console.log("log response on success");
                 console.log(data, "attendance records");
                 var allAttendancerecord = data.Data;
                 setAttendanceRecord(allAttendancerecord);
             }
         });
         
     }
     
let records = attendancerecord || [];
    const columns = [
        {
            dataField: 'date',
            text: 'Date.',
        },
        {
            dataField: 'day',
            text: 'Day',
        }, 
        {
            dataField: 'intime',
            text: 'In Time',
        }, 
        {
            dataField: 'outtime',
            text: 'Out Time',
        }, 
        {
            dataField: 'totaltime',
            text: 'Total Time',
        }, 
        {
            dataField: 'status',
            text: 'Status',
        }, 
        {
            dataField: 'leavebalance',
            text: 'Leave Balance',
        }, 
    ];

    return (
        <React.Fragment>
            <Row className="page-title mb-3">
                <Col md={6}>
                    <PageTitle
                        breadCrumbItems={[
                            { label: 'Attendance', path: '/attendance', active: true },
                        ]}
                    />
                </Col>
                <Col md={6} className="text-right">
                <Button color="primary"><i className="uil uil-plus"></i>ADD ITEM</Button>
                </Col>
            </Row>

            <Row>
                <Col>
                    <TableWithSearch records={records} columns={columns} />
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default Attendance;


