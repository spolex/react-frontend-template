import React, { Component } from 'react';
import ItemService from '../services/mocked-item-service';
import ItemNew from './ItemNew'
import ItemDetails from './ItemDetails'
import ItemEdit from './ItemEdit'
import { List,
         ListItem,
         ListItemText,
         Typography,
         Grid } from '@material-ui/core'


class ItemList extends Component {
    constructor(props){
        super(props);
        this.itemService = new ItemService();
        this.onSelect = this.onSelect.bind(this);
        this.onEditItem = this.onEditItem.bind(this);
        this.onCancelEdit = this.onCancelEdit.bind(this);
        this.onUpdateItem = this.onUpdateItem.bind(this);
        this.onDeleteItem = this.onDeleteItem.bind(this);
        this.onEditBack = this.onEditBack.bind(this);
        this.state = {
            showList: true,
            showDetails: false,
            editItem: false,
            selectedItem: null,
        }

    }

    componentDidMount() {
        this.getItems();
    }

    getItems() {
        this.itemService.retrieveItems().then(items =>{
            this.setState({items: items});
        });
    };

    clearState(){
        this.setState({
            editedItem: false,
            showList: true,
            showDetails: false,
            selectedItem: null,
        });
    };

    onSelect(itemLink){
        this.clearState();
        this.itemService.getItem(itemLink).then(item =>{
            this.setState({
                showDetails: true,
                selectedItem: item,
                showList: false,
                editItem: false
            })
        });
    };

    onEditItem() {
        this.setState({
            showDetails: false,
            editItem: true,
            showList: false
        });
    };

    onCancelEdit(){
        this.setState({
            showDetails: true,
            showList: false,
            editItem: false
        });
    };

    onEditBack(){
        this.clearState();
    };

    onUpdateItem(item){
        this.itemService.updateItem(item).then(item =>{
            this.getItems();
        });
        this.clearState();
    };


    onDeleteItem(itemLink){
        this.clearState();
        this.itemService.deleteItem(itemLink).then(res =>{
            this.getItems();
        });
    };

    render() {
        const items = this.state.items
        if(!items) return null;
        const showDetails = this.state.showDetails;
        const showList = this.state.showList;
        const selectedItem = this.state.selectedItem;
        const editItem = this.state.editItem;
        const listItems = items.map((item) => 
        <ListItem>
        <ListItemText key={item.key} onClick={() => this.onSelect(item.link)} 
                      prinamy={item.name}  secondary={
                    <React.Fragment>
                      <Typography
                        component="span"
                        variant="body2"
                        color="textPrimary"
                      >
                        {item.summary}
                      </Typography>
                    </React.Fragment>
                  }> </ListItemText>
        </ListItem>
        );
        return (
            <Grid  container spacing={3}>
                {showList && 
                <Grid item xs={12}>
                    <List  component="nav" aria-label="main mailbox folders">
                        {listItems}
                    </List>
                </Grid>}
                {showDetails && selectedItem && <Grid item xs={12}> <ItemDetails item={selectedItem} onBack={this.onEditBack} onEdit={this.onEditItem} onDelete={this.onDeleteItem}></ItemDetails></Grid>}
                {editItem && selectedItem && <Grid item xs={12}><ItemEdit onSubmit={this.onUpdateItem} onCancel={this.onCancelEdit} item={selectedItem}></ItemEdit></Grid>}
            </Grid>
        );
    }
}

export default ItemList