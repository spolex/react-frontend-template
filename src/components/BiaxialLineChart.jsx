import { Component, 
         React} from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";
import DataService from '../services/mocked-data-service'


class BiaxialLineChart extends Component{
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
            <LineChart
            width={500}
            height={350}
            data={data}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5
            }}
            >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis yAxisId="left" />
            <YAxis yAxisId="right" orientation="right" />
            <Tooltip />
            <Legend />
            <Line
                yAxisId="left"
                type="monotone"
                dataKey="pv"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
            />
            <Line yAxisId="right" type="monotone" dataKey="uv" stroke="#82ca9d" />
            </LineChart>
    )};

  getData() {
    this.dataService.retrieveData().then(data =>{
        this.setState({data: data});
    });
};

}

export default BiaxialLineChart