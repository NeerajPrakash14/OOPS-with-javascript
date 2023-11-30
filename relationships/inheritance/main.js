// Define mixins with specific functionalities

const Printable = {
    print() {
      console.log(this.content);
    },
  };
  
  const Serializable = {
    serialize() {
      return JSON.stringify(this.content);
    },
  };
  
  // Create a class that uses mixins
  class MyCombinedClass {
    constructor(content) {
      this.content = content;
    }
  }
  

  // Applying mixins to the class
  Object.assign(MyCombinedClass.prototype, Printable, Serializable);
  


  // Usage
  const myObj = new MyCombinedClass('Sample Content');
  myObj.print(); // Output: Sample Content
  console.log(myObj.serialize()); // Output: "Sample Content"
  