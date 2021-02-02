// @flow
import React from 'react';
import Chart from 'react-apexcharts';
import Col from 'reactstrap/lib/Col';
import Row from 'reactstrap/lib/Row';

// simple line chart
const Graph = () => {
    const apexLineChartWithLables = {
        chart: {
            height: 380,
            type: 'line',
            zoom: {
                enabled: false,
            },
            toolbar: {
                show: false,
            },
        },
        colors: ['#5369f8', '#43d39e', '#f77e53', '#1ce1ac', '#25c2e3', '#ffbe0b'],
        tooltip: {
            theme: 'dark',
            x: { show: false }
        },
        dataLabels: {
            enabled: true,
        },
        stroke: {
            width: [3, 3],
            curve: 'smooth',
        },
        title: {
            text: 'SUBBMISSION / INTERVIEW',
            align: 'left',
            style: {
                fontSize: '14px',
            },
        },
        grid: {
            row: {
                colors: ['transparent', 'transparent'], // takes an array which will be repeated on columns
                opacity: 0.2,
            },
            borderColor: '#f1f3fa',
        },
        markers: {
            style: 'inverted',
            size: 6,
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
            title: {
                text: 'Ultima actualization hace 15 min',
            },
        },
        yaxis: {
            title: {
                text: 'Temperature',
            },
            min: 5,
            max: 40,
        },
        legend: {
            position: 'top',
            horizontalAlign: 'right',
            floating: true,
            offsetY: -25,
            offsetX: -5,
        },
        responsive: [
            {
                breakpoint: 600,
                options: {
                    chart: {
                        toolbar: {
                            show: false,
                        },
                    },
                    legend: {
                        show: false,
                    },
                },
            },
        ],
    };

    const apexLineChartWithLablesData = [
        {
            name: 'High - 2018',
            data: [28, 29, 33, 36, 32, 32, 33],
        },
        {
            name: 'Low - 2018',
            data: [12, 11, 14, 18, 17, 13, 13],
        },
    ];

    return (
        <React.Fragment>
            <Row>
                <Col md={12} className="text-uppercase text-center">
                    <h5>Month Graph</h5>
                </Col>                          
            </Row>
           <Row>
               <Col lg={12} className="text-right">
                    <button className="btn btn-primary">Save As</button>
                    <button className="btn btn-secondary ml-2">Print</button>
               </Col>
          </Row> 
                <Chart
                    options={apexLineChartWithLables}
                    series={apexLineChartWithLablesData}
                    type="line"
                    className="apex-charts"
                />
         </React.Fragment>
    );
};

export default Graph;
