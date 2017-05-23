new Vue({

  // el targets the div with an id of 'items'
  el: '#items',

  // Any values or collections that hold data for the application are
  // registered here
  data: {
    item: {
      name: '',
      price: '',
      description: '',
      date: '',
      quantity: ''
    },
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
      var items = [];

      this.$http.get('api/items')
        .success(function(items) {
          this.$set('items', items);
        })
        .error(function(error) {
          console.log(error);
        });

    },

    // Adds an item to the existing events array
    addItem: function(e) {
      e.preventDefault();
      if (this.item.name.trim()) {
        //this.items.push(this.item);
        this.$http.post('api/items', this.item)
          .success(function(res) {
            this.items.push(this.item);
            console.log(this.items);
            console.log("Item added!");
            this.item = '';
          })
          .error(function(error) {
            console.log(error);
          });
      }
    },
    deleteItem: function(index) {
      if (confirm("Are you sure you want to delete this item?")) {
        this.$http.delete('api/items/' + this.item.id)
          .success(function(response) {
            // Remove the item
            this.items.splice(index, 1);
          })
          .error(function(error) {
            console.log(error);
          });
      }
    }

  }

});
