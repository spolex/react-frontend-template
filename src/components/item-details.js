import React, { Component } from 'react';
import {ListItemText, Button, ListItem, List, Typography} from '@material-ui/core';
  
class ItemDetails extends Component {
    constructor(props){
        super(props);
        this.onEdit=this.onEdit.bind(this);
        this.onDelete=this.onDelete.bind(this);
    }

    render(){
        const item = this.props.item;
        return (
            <div>
                <List component="nav" aria-label="main">
                 <ListItem alignItems="flex-start">
                 <ListItemText primary={item.name}
                 secondary={
                    <React.Fragment>
                      <Typography
                        component="span"
                        variant="body2"
                        color="textPrimary"
                      >
                        {item.summary}
                      </Typography>
                    </React.Fragment>
                  }
                />
                 </ListItem>
                 <ListItem alignItems="flex-start">
                 <ListItemText primary="Year:"
                 secondary={
                    <React.Fragment>
                      <Typography
                        component="span"
                        variant="body2"
                        color="textPrimary"
                      >
                        {item.year}
                      </Typography>
                    </React.Fragment>
                  }
                />
                </ListItem>
                <ListItem>
                 <ListItemText primary="Country:"
                 secondary={
                    <React.Fragment>
                      <Typography
                        component="span"
                        variant="body2"
                        color="textPrimary"
                      >
                        {item.country}
                      </Typography>
                    </React.Fragment>
                  }
                />
                </ListItem>
                <ListItem>
                 <ListItemText primary="Description:"
                 secondary={
                    <React.Fragment>
                      <Typography
                        component="span"
                        variant="body2"
                        color="textPrimary"
                      >
                        {item.description}
                      </Typography>
                    </React.Fragment>
                  }
                />
                </ListItem>
                </List>
                <Button type="button" onClick={() => this.onDelete()}>Delete</Button>
                <Button type="button" onClick={() => this.onEdit()}>Edit</Button>
            </div>

        );}

    onEdit() {
        this.props.onEdit();
    }
    onDelete(){
        const item = this.props.item;
        if(window.confirm("Are you sure to delete item: "+ item.name + " ?")){
            this.props.onDelete(item.link)
        }
    }
}

export default ItemDetails;