new Vue({

  // el targets the div with an id of 'items'
  el: '#items',

  // Any values or collections that hold data for the application are
  // registered here
  data: {
    item: { name: '', price: '', description: '', date:'', quantity: '' },
    items: []
  },

  // This function will run when the application loads
  ready: function() {
    this.fetchItems();
  },

  // Methods we want to use in our application are registered here
  methods: {
    // We dedicate a method to retrieving and setting some data
  fetchItems: function() {
    var items = [
      {
        id: 1,
        name: 'Nice Pants',
        price: '50',
        description: 'Pants from Italy',
        date: '2015-09-10'
      },
      {
        id: 2,
        name: 'The Martian Premiere',
        price: '40',
        description: 'The best shirt that makes you feel special',
        date: '2015-10-02'
      }
    ];
    // $set is a method provided by Vue to push
    // data onto an array
    this.$set('items', items);
  },

  // Adds an item to the existing events array
  addItem: function() {
    if(this.item.name) {
      this.items.push(this.item);
      this.item = { name: '', price: '', description: '', date: '', quantity: '' };
    }
  },
  deleteItem: function(index) {
  if(confirm("Are you sure you want to delete this item?")) {
    // $remove is a Vue convenience method similar to splice
    this.items.$remove(index);
  }
}

}

});
