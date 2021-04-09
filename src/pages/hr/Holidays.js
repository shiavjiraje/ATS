import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Row, Col, Input } from 'reactstrap';
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider from 'react-bootstrap-table2-toolkit';
import paginationFactory from 'react-bootstrap-table2-paginator';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
//import {UncontrolledDropdown, DropdownMenu, DropdownToggle } from 'reactstrap';
//import * as FeatherIcon from 'react-feather';
import { getHolidayList } from '../../redux/holiday/actions';
import config from '../../helpers/baseurl';
import axios from 'axios';


var urlpattern =config.baseUrl;
//import PageTitle from '../../components/PageTitle';

const defaultSorted = [
    {
        dataField: 'id',
        order: 'asc',
    },
];
//const { ExportCSVButton } = CSVExport;
const sizePerPageRenderer = ({ options, currSizePerPage, onSizePerPageChange }) => (
    <React.Fragment>
        <label className="d-inline mr-1">Show</label>
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
   // const { SearchBar } = Search;
    // const dispatch = useDispatch();

    // const rowEvent = {
    //     onDoubleClick: ( e, row, index ) => {

    //         //dispatch( setList( row ) );

    //        // dispatch( getHolidaysModal() );
    //         //console.log(props.result)
    //     }
    // }
    const NoDataIndication = () => (
        <div className="spinner">
          <div className="rect1" />
          <div className="rect2" />
          <div className="rect3" />
          <div className="rect4" />
          <div className="rect5" />
        </div>
      );
    return (
            
                <ToolkitProvider bootstrap4 keyField="ROW_NUMBER" data={props.records} columns={props.columns} search>
                    {(props) => (
                        <React.Fragment>
                           

                            <BootstrapTable
                                {...props.baseProps}
                                bordered={false}
                                defaultSorted={defaultSorted}
                               // rowEvents={rowEvent}
                                noDataIndication={ () => <NoDataIndication /> }
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
                                
                            />
                        </React.Fragment>
                    )}
                </ToolkitProvider>
    );
};

const Holidays = () => {

    const dispatch = useDispatch(); 
   let records = useSelector((state) => state.Holiday.holiday);
   console.log(records)
    useEffect(() => {
        dispatch(getHolidayList());

        // eslint-disable-next-line 
    }, []);

    const columns = [
        {
            dataField: 'name',
            text: 'Holiday Name.',
        },
        {
            dataField:'date',
            text:"Date"
        },
        {
            dataField: 'day',
            text: 'Day',
        },
        {
            dataField: 'type',
            text: 'Type',
        }
    ];
    let loginDetails = useSelector((state)=> state.Auth.user || []);
    var getUsername = loginDetails.Username;
    const [date, setdate]=useState('');
    const [name, setname]=useState('');
    const [day, setday]=useState('');
    const handleSubmit=(e)=>{
        e.preventDefault();
       const data ={
        date:date,
        name:name,
        day:day,
        type:"",
        username:getUsername
       }
       var config = {
        method: 'post',
        url: `${urlpattern}HolidayMaster`,
        data : data
      };
      
      axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        dispatch(getHolidayList());
      })
      .catch(function (error) {
       // swal(JSON.stringify(error.response.data.error.errors[0].title), "You clicked the button!", "error")
      });
     }
    
    return (
        <React.Fragment>
            <form onSubmit={handleSubmit}> 
            <Row>
                <Col md={12} className="">
                <div className="input-group mb-3">
                <div className="input-group-prepend">
                <button type="submit" className="btn btn-primary pl-5 pr-5">Create</button>
                </div>
                <input type="text" className="form-control search-style" placeholder="Holiday Name :"
                 onChange={(e) => {
                    setname (e.target.value);
                }}/>
                <input type="date" className="form-control search-style" placeholder="Date :"
                 onChange={(e) => {
                    setdate (e.target.value);
                }}/>
                <input type="text" className="form-control search-style" placeholder="Day"
                 onChange={(e) => {
                    setday (e.target.value);
                }}/>
                </div>
                </Col>                            
            </Row>
            </form>
            <Row>
                <Col>
                    <TableWithSearch records={records} columns={columns} />
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default Holidays;


