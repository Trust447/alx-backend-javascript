export default class GroceriesList extends Map {
    constructor() {
      super();
      this.set('apples', 0);
      this.set('bananas', 0);
      this.set('rice', 0);
    }
  
    getApples() {
      return this.get('apples');
    }
  
    getBananas() {
      return this.get('bananas');
    }
  
    getRice() {
      return this.get('rice');
    }
  }
  