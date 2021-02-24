import React, { Component} from 'react';
import Validator from '../services/validator'
import ItemService from '../services/mocked-item-service';
import {TextField, Button, Grid} from '@material-ui/core';

class ItemNew extends Component {
    constructor(props){
        super(props);
        this.validator = new Validator();
        this.itemService = new ItemService();
        this.onCancel = this.onCancel.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.state = {
            name: '',
            summary: '',
            year: '',
            country: '',
            description: ''
        };
        
    }

    handleInputChange(event) {
        event.preventDefault();
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({ [name]: value});
    }

    onCancel(event) {
        this.clearState();
        Array.from(document.querySelectorAll("input")).forEach(
            input => (input.value = "")
        );
    }

    clearState() {
        this.setState({ 
            name: '',
            summary: '',
            year: '',
            country: '',
            description: ''
        });
    }

    onSubmit() {
        if(this.validator.validateInputs(this.state)) {
            this.itemService.createItem(this.state);
        }
    }

    render() {
        return (
           <Grid container direction={"column"} spacing={2}>
                <Grid item>
                <TextField id="item-name" label="Name" defaultValue={this.state.name} variant="outlined" name="name" maxLength="40" required onChange={this.handleInputChange} placeholder="item name" />
                </Grid>
                <Grid item>
                <TextField id="item-summary" label="Summary" defaultValue={this.state.summary} variant="outlined"  name="summary" maxLength="40" required onChange={this.handleInputChange} placeholder="summary" />
                </Grid>
                <Grid item>
                <TextField id="item-year" label="Year" defaultValue={this.state.year} variant="outlined" type="number" name="year" maxLength="4" pattern="[0-9]{1,4}" onChange={this.handleInputChange} placeholder="year" />
                </Grid>
                <Grid item>
                <TextField id="item-country" label="Country code" defaultValue={this.state.country} variant="outlined"  name="country" maxLength="2" pattern="[a-z|A-Z]" onChange={this.handleInputChange} placeholder="country code" />
                </Grid>
                <Grid item>
                <TextField defaultValue={this.state.description} name="description" variant="outlined"  onChange={this.handleInputChange} placeholder="description" />
                </Grid>
                <Grid item>
                <Button type="submit-button" onClick={() => this.onSubmit()}>Confirm</Button>
                <Button type="button" onClick={() => this.onCancel()}>Cancel</Button>
                </Grid>
            </Grid>
        )
    }
}
export default ItemNew