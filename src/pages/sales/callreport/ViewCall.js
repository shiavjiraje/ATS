import React, { useEffect,useState } from 'react';
import { useSelector } from 'react-redux';
import { Row, Col, Input } from 'reactstrap';
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import paginationFactory from 'react-bootstrap-table2-paginator';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import $ from "jquery";

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

const ViewCall = () => {

    //const dispatch = useDispatch(); 
   //let records = useSelector((state) => state.SalesCallReport.calls);
   const [callrecord, setCallRecord]=useState([]);
   let loginDetails = useSelector((state)=> state.Auth.user || []);
   console.log(loginDetails.Username);
   
  // console.log(records, 'join list');
    useEffect(() => {
       getAllCall();

        // eslint-disable-next-line 
    }, []);
    const getAllCall=()=>{
        var getUsername = loginDetails.Username;
        //alert("calling");
        $.ajax
        ({
             
            url: `http://144.48.250.235:98/api/SalesClientCallRecordMaster?username=${getUsername}`,
            type:"GET",
            dataType:"JSON",
            
            
            success: function(data) 
            {
               // debugger;
                //console.log("log response on success");
                console.log(data, "call records");
                var allCalls = data.Data;
                setCallRecord(allCalls);
            }
        });
        
    }
    let records =callrecord || [];
    const columns = [
      
        {
            dataField: 'client',
            text: 'Client Name',
            sort: true,
        },
        {
            dataField: 'dt',
            text: 'Date',
        },
        {
            dataField: 'poc',
            text: 'POC',
        },
        {
            dataField: 'agenda',
            text: 'Agenda',
        },
        {
            dataField: 'username',
            text: 'Sales Name',
        },
        
    ];
    
    return (
        <React.Fragment>
            <Row>
                <Col>
                    <TableWithSearch records={records} columns={columns} />
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default ViewCall;


