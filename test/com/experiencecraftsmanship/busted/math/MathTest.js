var requirejs = require( "requirejs" );
requirejs.config( require( process.env.PWD + "/config" ) );

requirejs(
    [ "buster", "math", "add" ],
    function( buster, math , add ) {
        buster.testCase("Math test case", {
            "test addition": function () {
    	        this.spy( add, "add" );
    	        var result = math.add( 2, 3 );
    	        assert.equals( result, 5 );
    	        assert.calledOnce( add.add );
    	    }
        });
    }
);