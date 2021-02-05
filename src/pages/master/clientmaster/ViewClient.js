import React, { useEffect,useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Row, Col, Input } from 'reactstrap';
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import paginationFactory from 'react-bootstrap-table2-paginator';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import { getClientList } from '../../../redux/client/actions';
//import PageTitle from '../../components/PageTitle';
//import * as FeatherIcon from 'react-feather';


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

const ViewClient = () => {

    const dispatch = useDispatch(); 
    let records = useSelector((state) => state.Client.clients || []);
  // console.log(records, 'join list');
    useEffect(() => {
        dispatch(getClientList());

        // eslint-disable-next-line 
    }, []);

    const columns = [
        {
            dataField: 'cname',
            text: 'Client Name',
            sort: true,
        },
        {
            dataField: 'cperson1',
            text: 'Contact Person Name',
        },
        {
            dataField: 'cemail1',
            text: 'Contact Email',
        },
        {
            dataField: 'ccnt1',
            text: 'Contact Number',
        },
        {
            dataField: 'cdate',
            text: 'Date Of Creation',
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
                 {/* <FeatherIcon.Target /> */}
                 <i className="uil uil-file-exclamation-alt"></i>
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

export default ViewClient;


