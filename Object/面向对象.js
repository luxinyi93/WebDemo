var book = {};
Object.defineProperties(book, {
   _year: {
       writable: true,
       value: 2004
   },
    edition: {
       writable: true,
       value: 1
    },
    year: {
       get: function () {
           return this._year;
       },
        set: function (newValue) {
           if (newValue > 2004){
               this._year = newValue;
           }

        }
    }
});