import React, { Component } from 'react';
import { Typography, ListItemText } from '@material-ui/core'

class Item extends Component {

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