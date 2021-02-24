import React, { Component } from 'react';
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from 'recharts';
import DataService from '../services/mocked-data-service'

class Composed extends Component {
    constructor(props){
        super(props);
        this.dataService = new DataService();
        this.state = {}
    }
    
    componentDidMount() {
        this.getData();
    }

    render() {
        const data = this.state.data;
        if(!data) return null;
        return (
            <ComposedChart
            width={500}
            height={350}
            data={data}
            margin={{
                top: 20,
                right: 80,
                bottom: 20,
                left: 20,
            }}
            >
            <CartesianGrid stroke="#f5f5f5" />
            <XAxis dataKey="name" label={{ value: 'Pages', position: 'insideBottomRight', offset: 0 }} scale="band" />
            <YAxis label={{ value: 'Index', angle: -90, position: 'insideLeft' }} />
            <Tooltip />
            <Legend />
            <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />
            <Bar dataKey="pv" barSize={20} fill="#413ea0" />
            <Line type="monotone" dataKey="uv" stroke="#ff7300" />
            </ComposedChart>
        );
    }
    getData() {
        this.dataService.retrieveData().then(data =>{
            this.setState({data: data});
        });
    };
}

export default Composed