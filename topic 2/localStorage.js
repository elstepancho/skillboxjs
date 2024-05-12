const localStorageStorage = {
    save: function(data) {
        localStorage.setItem('todos', JSON.stringify(data));
    },
    load: function() {
        const data = localStorage.getItem('todos');
        return data ? JSON.parse(data) : [];
    }
  };
  
  export default localStorageStorage;