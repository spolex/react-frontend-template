import React, { Component } from 'react';
import ItemService from '../services/mocked-item-service';
import NewItem from './new-items'
import ItemDetails from './item-details'
import EditItem from './edit-items'
import { Divider, 
         List,
         Typography,
         ListItemText,
         Button } from '@material-ui/core'


class ItemMockComponent extends Component {
    constructor(props){
        super(props);
        this.itemService = new ItemService();
        this.onSelect = this.onSelect.bind(this);
        this.onNewItem = this.onNewItem.bind(this);
        this.onEditItem = this.onEditItem.bind(this);
        this.onCancel = this.onCancel.bind(this);
        this.onCancelEdit = this.onCancelEdit.bind(this);
        this.onCreateItem = this.onCreateItem.bind(this);
        this.onUpdateItem = this.onUpdateItem.bind(this);
        this.onDeleteItem = this.onDeleteItem.bind(this);
        this.state = {
            showDetails: false,
            editItem: false,
            selectedItem: null,
            newItem: null
        }

    }

    componentDidMount() {
        this.getItems();
    }

    render() {
        const items = this.state.items
        if(!items) return null;
        const showDetails = this.state.showDetails;
        const selectedItem = this.state.selectedItem;
        const newItem = this.state.newItem;
        const editItem = this.state.editItem;
        const listItems = items.map((item) =>
            <ListItemText primary={item.name} key={item.link} 
            secondary={
                <React.Fragment>
                    <Typography
                    component="span"
                    variant="body2"
                    color="textPrimary"
                    >
                    { item.summary } 
                    </Typography>
                </React.Fragment>
                }
            onClick={() => this.onSelect(item.link)}>
            </ListItemText>
        );
        return (
            <div>
                <List  component="nav" aria-label="main mailbox folders">
                    {listItems}
                </List>
                <Divider />
                <Button name="button" onClick={() => this.onNewItem()}>
                    New Item
                </Button>
                <Divider />
                {newItem && <NewItem onSubmit={this.onCreateItem} onCancel={this.onCancel}></NewItem>}
                {showDetails && selectedItem && <ItemDetails item={selectedItem} onEdit={this.onEditItem} onDelete={this.onDeleteItem} ></ItemDetails>}
                {editItem && selectedItem && <EditItem onSubmit={this.onUpdateItem} onCancel={this.onCancelEdit} item={selectedItem}></EditItem>}
            </div>
        );
    }

    getItems() {
        this.itemService.retrieveItems().then(items =>{
            this.setState({items: items});
        });
    };

    onSelect(itemLink){
        this.clearState();
        this.itemService.getItem(itemLink).then(item =>{
            this.setState({
                showDetails: true,
                selectedItem: item
            })
        });
    };

    onCancel(){
        this.clearState();
    };

    onNewItem() {
        this.clearState();
        this.setState({newItem: true});
    };

    onEditItem() {
        this.setState({
            showDetails: false,
            editItem: true,
            newItem: null
        });
    };

    onCancelEdit(){
        this.setState({
            showDetails: true,
            editItem: false,
            newItem: null
        });
    };

    onUpdateItem(item){
        this.clearState();
        this.itemService.updateItem(item).then(item =>{
            this.getItems();
        });
    };

    onCreateItem(newItem){
        this.clearState();
        this.itemService.createItem(newItem).then(item =>{
            this.getItems();
        });
    };

    onDeleteItem(itemLink){
        this.clearState();
        this.itemService.deleteItem(itemLink).then(res =>{
            this.getItems();
        });
    };



    clearState(){
        this.setState({
            showDetails: false,
            selectedItem: null,
            editedItem: false,
            newItem: null    
        });
    };
}

export default ItemMockComponent