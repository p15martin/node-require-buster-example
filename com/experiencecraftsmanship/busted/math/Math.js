define( [ "add" ], function( add ) {
        return {
            add: function( a, b ) {
                return add.add( a, b );
            }
        }
    }
);