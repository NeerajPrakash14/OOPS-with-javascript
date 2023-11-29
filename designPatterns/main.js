
// Functional Object
function localstorage1 (key) {

    this.getItem = () => {
        localStorage.getItem(key);
    }
    this.setItem = (value) => {
        localStorage.setItem(key, JSON.stringify(key));
    }
}

const productClass_LocalStorage1 = new localstorage1('productClass');
productClass_LocalStorage1.setItem('class123');
console.log(productClass_LocalStorage1.getItem());


// Function returning 'Functional Object'
const localstorage2 = (key) => {

    const getItem = () => {
        localStorage.getItem(key);
    }
    const setItem = (value) => {
        localStorage.setItem(key, JSON.stringify(value));
    }

    return {
        getItem,
        setItem
    }
};

const productClass_LocalStorage2 = localstorage2('productClass');
productClass_LocalStorage2.setItem('class123');
console.log(productClass_LocalStorage2.getItem());