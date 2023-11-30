

class Item {
    constructor(data){
        this.name = data.item;
        this.price = data.price;
        this.quantity = data.quantity;
        this.weight = data.weight;
    }
}


class ItemBuilder {
    constructor(){
        this.name = '';
        this.price = 0;
        this.quantity = 0;
        this.weight = 0;
    }

    setName(name){
        this.name = name;
        return this;
    }
    setPrice(price){
        this.price = price;
        return this;
    }
    setQuantity(quantity){
        this.quantity = quantity;
        return this;
    }
    setWeight(weight){
        this.weight = weight;
        return this;
    }
    build(){
        return Item({this.name, this.price, this.quantity, this.weight});
    }
}


//  This pattern is used when there are multiple 'versions' of the same item type present.
    There can be more than one version of an item created using multiple constructors of the Item class.

    To create those different versions of an item falling on various constructors, 
        we use builder class that could potentially provide a safety net for item creation of various versions, 
            and also have a single point of coupling in case of any changes required to be made to the particular version object creation.
    

