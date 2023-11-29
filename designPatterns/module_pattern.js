
// Function (IIFE) returning functinal object
const MyModule = (function() {
    function method1() {
      // Functionality 1
    }
  
    function method2() {
      // Functionality 2
    }
  
    return {
      method1,
      method2,
    };
  })();
  
  // Usage
  MyModule.method1();
  MyModule.method2();
  