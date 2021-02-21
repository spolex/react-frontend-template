import Configuration from "./config/config";

class ItemService{
    constructor(){
        this.Configuration = new Configuration();
    }
async retrieveItems() {
    return fetch(this.config.ITEM_COLLECTION_URL).then(
        response => {
            if(!response.ok){
                this.handleResponseError(response);
            }
            return response.json();
        })
        .then( json => {
            console.log("Retrieved items: ");
            console.log(json);
            const items = [];
            const itemArray = json._embedded.collectionItems;
            for(var i = 0; i < itemArray.length; i++) {
                itemArray[i]["link"] = itemArray[i]._links.self.href;
                items.push(itemArray[i])
            }
            return items;
        })
        .catch( error => {
            this.handleError(error)
        });
}

async getItem(itemLink) {
    console.log("ItemService.getItem():");
    console.log("Item: " + itemLink);
    return fetch(itemLink).then( response =>{
        if (!response.ok) {
            this.handleResponseError(response);
        }
        return response.json();
    }).then(items =>{
        item["link"] = item._links.self.href;
        return item;
    }).catch(error =>{
        this.handleError(error);
    });
}

async createItem(newitem) {
    console.log("ItemService.createItem():");
    console.log(newitem);
    return fetch(this.config.ITEM_COLLECTION_URL, {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newitem)
    }).then( response =>{
        if(!response.ok){
            this.handleResponseError(response);
        }
        return response.json();
    }).catch(error =>{this.handleError(error)});
}

async deleteItem(itemLink) {
    console.log("ItemService.seleteItem():");
    console.log("item ID: "+ itemLink);
    return fetch(itemLink, {
        method: "DELETE",
        mode: "cors"
    }).then( response =>{
        if(!response.ok){
            this.handleResponseError(response);
        }
    }).catch(error =>{
        this.handleError(error);
    });
}

async updateItem(item) {
    console.log("ItemService.updateItem():");
    console.log(item);
    return fetch(item.link, {
        method: "PUT",
        mode: "cors",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newitem)
    }).then( response =>{
        if(!response.ok){
            this.handleResponseError(response);
        }
        return response.json();
    }).catch(error =>{this.handleError(error)});
}

handleResponseError(response) {
    throw new Error("HTTP error, status = " + response.status);
}

handleError(error) {
    console.log(error.message);
}
}
export default ItemService;
