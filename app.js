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
      // $set is a method provided by Vue to push
      // data onto an array
      //this.$set('items', items);

      this.$http.get('api/items')
        .success(function(items) {
          this.$set('items', items);
        })
        .error(function(error) {
          console.log(error);
        });

    },

    // Adds an item to the existing events array
    addItem: function() {
      if (this.item.name.trim()) {
        //this.items.push(this.item);
        this.item = {
          name: '',
          price: '',
          description: '',
          date: '',
          quantity: ''
        };
        this.$http.post('api/items', this.item)
          .success(function(response) {
            this.items.push(this.item);
            console.log("Item added!");
          })
          .error(function(error) {
            console.log(error);
          });
      }
    },
    deleteItem: function(index) {
      if (confirm("Are you sure you want to delete this item?")) {
        this.$http.delete('api/items/' + item.id)
          .success(function(response) {
            // $remove is a Vue convenience method similar to splice
            this.items.$remove(index);
          })
          .error(function(error) {
            console.log(error);
          });
      }
    }

  }

});
