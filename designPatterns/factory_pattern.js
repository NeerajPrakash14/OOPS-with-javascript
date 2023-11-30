
// Main Item class
class Item {
    constructor(data){
        this.name = data.item;
        this.price = data.price;
        this.quantity = data.quantity;
        this.weight = data.weight;
    }
}


// Type of item
class GroceryItem {
    constructor(data){
        this.name = data.item;
        this.price = data.price;
        this.quantity = data.quantity;
        this.weight = data.weight;
    }
}

// Type of item
class ElectronicItem {
    constructor(data){
        this.name = data.item;
        this.price = data.price;
        this.quantity = data.quantity;
        this.weight = data.weight;
    }
}

// Type of item
class SportsItem {
    constructor(data){
        this.name = data.item;
        this.price = data.price;
        this.quantity = data.quantity;
        this.weight = data.weight;
    }
}


class MyItemFactory {
    createItem(data) {
            if(data.type == 'grocery') return new GroceryItem(data)
            if(data.type == 'sports') return new SportsItem(data)
            if(data.type == 'electronic') return new ElectronicItem(data)
    }
}

//  Factory pattern is used to create different 'types' of items, with having a simple and single point of coupling failure.

    This takes away the burden of having to create a complex type of item by passing a huge list of attributes to the constructor everytime on creating that item.
    All the list of default properties can be attached here in the factory class.

    We could add methods to the factory class to take care of the complexities and dynamic nature if any, in creating the type of item.








