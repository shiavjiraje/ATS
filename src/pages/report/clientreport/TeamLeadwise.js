import React, { useState, useEffect } from 'react';
import {useDispatch, useSelector } from 'react-redux';
import { Row, Col, Input } from 'reactstrap';
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider from 'react-bootstrap-table2-toolkit';
import paginationFactory from 'react-bootstrap-table2-paginator';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import { getTeamLeadList } from '../../../redux/teamLead/actions';
import axios from 'axios';
//import PageTitle from '../../components/PageTitle';

import config from '../../../helpers/baseurl';
var urlpattern =config.baseUrl;

const defaultSorted = [
    {
        dataField: 'id',
        order: 'asc',
    },
];
// /const { ExportCSVButton } = CSVExport;
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
    //const { SearchBar } = Search;
    //const dispatch = useDispatch();
    const [rowData, setrowData] = useState([]);
    //const [rowSelect, setrowSelect] = useState([]);
    
      const rowEvent = {
        onDoubleClick: (row) => {
            alert();
                setrowData((rowData) => [...rowData, row]);
                console.log("rowdata", rowData)
              
        }
    }
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
                            {/* <Row>
                                <Col md={6} className="">
                                    <SearchBar {...props.searchProps} />
                                </Col>                    
                            </Row> */}
                            

                            <BootstrapTable
                                {...props.baseProps}
                                bordered={false}
                                defaultSorted={defaultSorted}
                                rowEvents={rowEvent}
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

const TeamLeadwise = () => {

    const dispatch = useDispatch();
    const [teamleadwise, setteamleadwise]=useState([]);
    const [teamlead, setteamlead]=useState('');
    const [startdate, setstartdate]=useState('');
    const [enddate, setenddate]=useState('');
    let teamLeadList = useSelector((state) => state.TeamLead.teamlead || []);
    useEffect(() => {
        dispatch(getTeamLeadList());
         // eslint-disable-next-line 
     }, []);
    const handleTeamLeadwiseForm = (e) => {
    e.preventDefault();
    axios
        .get(`${urlpattern}DatewiseTeamLeadCount?teamlead=${teamlead}&ssd=${startdate}&eed=${enddate}`)

        .then((response) => {
           var setteamleadlist=response.data.Data;
           setteamleadwise(setteamleadlist);
        });
};
let records = teamleadwise || [];
    const columns = [
        {
            dataField:'id',
            text:'ID',
            hidden: true
        },
        {
            dataField: 'name',
            text: 'Name.',
            //sort: true,
        },
        {
            dataField: 'submission',
            text: 'Submission',
            sort: true,
        },
        {
            dataField: 'interview',
            text: 'Interview',
        },
        {
            dataField: 'offer',
            text: 'Offer',
        },
        {
            dataField: 'start',
            text: 'Start',
        }
    ]
    return (
        <React.Fragment>
            <form onSubmit={handleTeamLeadwiseForm}>
            <Row className="mt-3">
                            <Col md={3} className="">
                                    <select className="form-control style-input"
                                    onChange={(event) => setteamlead(event.target.value)}>
                                       <option selected desabled>Select</option>
                                    {teamLeadList.map((teamLead,i) => (
                                    <option key={i++} value={teamLead.EFullname}>
                                        {teamLead.EFullname}
                                    </option>
                                ))}
                                    </select>
                                </Col>   
                            <Col md={3} className="">
                                    <input type="date" className="form-control style-input"
                                    onChange={(event) => setstartdate(event.target.value)}/>
                                </Col>   
                                <Col md={3} className="">
                                    <input type="date" className="form-control style-input"
                                    onChange={(event) => setenddate(event.target.value)}/>
                                </Col>   
                                <Col md={3} className="">
                                    <button type="submit" className="btn btn-primary">Search</button>
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

export default TeamLeadwise;


