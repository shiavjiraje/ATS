import React, { useEffect,useState } from 'react';
import { useSelector } from 'react-redux';
import { Row, Col, Input } from 'reactstrap';
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import paginationFactory from 'react-bootstrap-table2-paginator';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
//import PageTitle from '../../components/PageTitle';
import * as FeatherIcon from 'react-feather';
import config from '../../helpers/baseurl';
//import axios from 'axios';

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
    const { SearchBar } = Search;
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
                            <Row>
                                <Col md={6} className="">
                                    <SearchBar {...props.searchProps} />
                                </Col>                    
                            </Row>

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

const ResumeUpload = (props) => {

    //const dispatch = useDispatch(); 
    //let records =  [];
  //console.log(records, 'join list');
    useEffect(() => {
      getAllRequirementMaster();

        // eslint-disable-next-line 
    }, []);
    const [requireData, setrequireData]=useState([]);
    let loginDetails = useSelector((state)=> state.Auth.user || []);
    var showrdt =props.viewSingleRequirement;
    var getUsername = loginDetails.Username;
    var setjid = showrdt.jid;
    const getAllRequirementMaster=()=>{
      var axios = require('axios');
     
     
var data = '';

var config = {
  method: 'get',
  url: `${urlpattern}ResumeMaster?jid=${setjid}&username=${getUsername}`,
  headers: { 
    'Content-Type': 'application/json'
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
  var newrequireData =response.data.Data;
  setrequireData(newrequireData);
})
.catch(function (error) {
  console.log(error);
});

    }
let records = requireData ||[];
console.log(records,"viewSingleRequirement records");

    const columns = [
        {
            dataField: 'c.R_Name',
            text: 'Name',
            sort: true,
        },
        {
            dataField: 'c.R_Cnt',
            text: 'Number',
        },
        {
            dataField: 'c.R_Email',
            text: 'Email',
        },
        {
            dataField: 'c.R_Tot_Exp',
            text: 'Total Experince',
        },
        {
            dataField: 'c.R_NP',
            text: 'Notice Period',
        },
        {
          dataField: 'c.R_Cur_CTC',
          text: 'CTC',
      },
      {
        dataField: 'c.R_updateby',
        text: 'Upload By',
    },
    {
      dataField: 'c.R_updateon',
      text: 'Upload On',
  },
  {
    dataField: 'c.R_Status',
    text: 'Status',
},
        {
            dataField: 'Action',
            text: 'Action',
            formatter: (cellContent, row) => {
                //const id = row.jid;
                return (
                    <button type="button" 
                    id="actionButton" title="Action"
                onClick={() => {_validateFunction(row=[])}} 
                className="btn btn-link text-secondary">
                 <FeatherIcon.Target />
                 {/* <i className="uil uil-file-exclamation-alt"></i> */}
                </button>
                );
              },
        },
    ];
    function _validateFunction(row , id) {    
        // console.log("activity id :",(id));
         // dispatch(getRequirementModal((row)));
 
         //dispatch( setSaveRequirement( row) );
 
          //   dispatch( getRequirementModal() );
     }
    
    const [file, setFile] = useState(null);

  const handleSubmit = async e => {
    e.preventDefault();
    const formData = new FormData();

    formData.append('File', file);

    fetch(
     `${urlpattern}ResumeMaster?jid=${setjid}&username=${getUsername}`,
        {
            method: 'POST',
            body: formData,
        }
    )
        .then((response) => response.json())
        .then((result) => {
            console.log('Success:', result);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
};
  
  

  const handleOnChange = e => {
    console.log(e.target.files[0]);
    setFile(e.target.files[0]);
  };
    return (
        <React.Fragment>
          
           <form onSubmit={handleSubmit}>
           <Row>
                    <Col lg={3}> <input type="file" className="form-control" onChange={handleOnChange} /></Col>
                    <Col lg={3}><button className="btn btn-primary" type="submit">Upload File</button></Col>
                    <Col className="text-right" lg={6}><button className="btn btn-primary" onClick={props.goBackToRequirement}>Go Back To Requirement</button></Col>
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

export default ResumeUpload;

