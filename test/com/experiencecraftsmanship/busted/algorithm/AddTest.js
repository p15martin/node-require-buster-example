var requirejs = require( "requirejs" );
requirejs.config( require( process.env.PWD + "/config" ) );

requirejs(
    [ "buster", "add" ],
    function( buster, add ) {
        buster.testCase("Add test case", {
            "test addition": function () {
    	        var result = add.add( 2, 3 );
    	        assert.equals( result, 5 );
    	    }
        });
    }
);
