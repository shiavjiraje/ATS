import React, { useEffect,useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Row, Col, Input } from 'reactstrap';
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import paginationFactory from 'react-bootstrap-table2-paginator';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
//import * as FeatherIcon from 'react-feather';
import { getRevenueList } from '../../../redux/salesrevenue/actions';
//import PageTitle from '../../components/PageTitle';



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
                            <div class="table-responsive">
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
                            </div>
                        </React.Fragment>
                    )}
                </ToolkitProvider>
    );
};

const ViewRevenuReport = () => {

    const dispatch = useDispatch(); 
   let records = useSelector((state) => state.SalesRevenue.revenues);
  // console.log(records, 'join list');
    useEffect(() => {
        dispatch(getRevenueList());

        // eslint-disable-next-line 
    }, []);

    const columns = [
        {
            dataField:'id',
            text:'ID',
            hidden: true
        },
        {
            dataField: 'salesname',
            text: 'Sales Name',
            //sort: true,
        },
        {
            dataField: 'month',
            text: 'Month',
            sort: true,
        },
        {
            dataField: 'year',
            text: 'Year',
        },
        {
            dataField: 'clientname',
            text: 'Client',
        },
        {
            dataField: 'currenthc',
            text: 'Current HC',
        },
        {
            dataField: 'totalgp',
            text: 'Total GP',
        },
        {
            dataField: 'averagegp',
            text: 'Total Avg. GP Add',
        },
        {
            dataField: 'start',
            text: 'Start',
        },
        {
            dataField: 'attrition',
            text: 'Attrition',
        },
        {
            dataField: 'bd',
            text: 'BD',
        },
        {
            dataField: 'actualstart',
            text: 'Actual Start',
        },
        {
            dataField: 'nettotalgp',
            text: 'Net Total GP',
        },
        {
            dataField: 'nettotalgpadded',
            text: 'Net Total GP Add',
        },
        {
            dataField: 'typeofemployment',
            text: 'Type Of Employement',
        },
    ]
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

export default ViewRevenuReport;


