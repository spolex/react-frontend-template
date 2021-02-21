class ItemService{
    constructor(){
        this.items = [
            {link:1, name: "test1", summary: "summary test 1", year: "2021", country: "us"},
            {link:2, name: "test2", summary: "summary test 2", year: "2021", country: "us"},
            {link:3, name: "test3", summary: "summary test 3", year: "2021", country: "us"}
        ];
    }
async retrieveItems() {
    return Promise.resolve(this.items)
}

async getItem(itemLink) {
    for (var i=0; i < this.items.length; i++){
        if(this.items[i].link === itemLink){
            return Promise.resolve(this.items[i]);
        }
    }
    return null;
}

async createItem(item) {
    console.log("ItemService.createItem():");
    console.log(item);
    return Promise.resolve(item)
}

async deleteItem(itemId) {
    console.log("ItemService.seleteItem():");
    console.log("item ID: "+ itemId);
}

async updateItem(item) {
    console.log("ItemService.updateItem():");
    console.log(item);
}
}

export default ItemService;
