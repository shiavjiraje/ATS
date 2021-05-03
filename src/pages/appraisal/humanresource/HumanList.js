import React, { useEffect, useState } from 'react';
//import { useSelector, useDispatch } from 'react-redux';
import { Row, Col, Input } from 'reactstrap';
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import paginationFactory from 'react-bootstrap-table2-paginator';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import ViewApprasalForm from './ViewApprasalForm';

import config from '../../../helpers/baseurl';
var urlpattern = config.baseUrl;
const defaultSorted = [
    {
        dataField: 'id',
        order: 'asc',
    },
];
//const { ExportCSVButton } = CSVExport;
const sizePerPageRenderer = ({ options, currSizePerPage, onSizePerPageChange }) => (
    <React.Fragment>
        <label className="d-inline mr-1">Show </label>
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
    // const dispatch = useDispatch();

    // const rowEvent = {
    //     onDoubleClick: ( e, row, index ) => {

    //        // dispatch( setList( row ) );

    //        // dispatch( getHumanRListModal() );
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
      //var currMonthName  = moment().format('MMMM');
      //var prevMonthName  = moment().format('MMMM');
        //console.log(currMonthName);
        //console.log(prevMonthName);
    return (
            
                <ToolkitProvider bootstrap4 keyField="ROW_NUMBER" data={props.records} columns={props.columns} search>
                    {(props) => (
                        <React.Fragment>
                            <Row>
                                <Col md={6} className="">
                                    <SearchBar {...props.searchProps} />
                                </Col>    
                                <Col md={6} className="text-right">
                               </Col>                            
                            </Row>
                           
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

const HumanRList = () => {

   // const dispatch = useDispatch(); 
   
    useEffect(() => {
        getAllAppraisal();

        // eslint-disable-next-line 
    }, []);
    const [apprasalList, setapprasalList]=useState([]);
const getAllAppraisal=()=>{
    var axios = require('axios');

var config = {
  method: 'get',
  url: `${urlpattern}AppraisalMaster`,
  headers: { 
    'Content-Type': 'application/json'
  }
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
  var apprasallist =response.data.Data;
  setapprasalList(apprasallist);
})
.catch(function (error) {
  console.log(error);
});

}

let records = apprasalList || [];
    const columns = [
        {
            dataField: 'paid',
            text: 'ID.',
        },
        {
            dataField:'empname',
            text:"Employee Name"
        },
        {
            dataField: 'rmname',
            text: 'Reporting Manager',
        },
        {
            dataField: 'recruitername',
            text: 'Action',
            formatter: (cellContent, row) => {
                //const id = row.jid;
                return (
                  <button
                  className="btn btn-link text-secondary"
                    onClick={() => onViewApprasal(row)}
                    title="View"
                  >
                   View
                  </button>
                );
              },
        }
    ];
    const[showViewAppraisal, setshowViewAppraisal]=useState(true);
    const [apprasalviewdata, setapprasalviewdata]=useState([]);
 const onViewApprasal =(row , id)=>{
    console.log(row, "apprasal row data");
    setapprasalviewdata(row);
    setshowViewAppraisal(!showViewAppraisal);
 }
 
    return (
        <React.Fragment>
            {showViewAppraisal ?<Row>
                <Col>
                    <TableWithSearch records={records} columns={columns} />
                </Col>
            </Row>:
            <ViewApprasalForm apprasalviewdata={apprasalviewdata}/>           
}
        </React.Fragment>
    );
};

export default HumanRList;


