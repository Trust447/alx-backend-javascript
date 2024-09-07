export default function groceriesList() {
    const obj = {
      Apples: 10,
      Tomatoes: 10,
      Pasta: 1,
      Rice: 1,
      Banana: 5,
    };
  
    // Create a Map from the object's entries
    const finalMap = new Map(Object.entries(obj));
  
    return finalMap;
  }
  