// copy it for simplicity
// don't do that in real life
function toFizz( nr ) {
    if ( nr % 7 === 0 && nr % 3 === 0 ) {
       return "fizzbuzz";
    } else if ( nr % 3 === 0 ) {
       return "fizz";
    } else if ( nr % 7 === 0 ) {
       return "buzz";
    } else {
       return nr;
    }
}

// get ourselves an assertion library
// this is node's own. others are chai, should.js, expect.js
var assert = require( 'assert' );

// HEADS UP: you have to run this file with `mocha` as node
// does not understand what `describe`, `it` etcpp is.

// Describe what we are testing
describe( 'Fizbuzz', function() {

    // our actual test cases
    it( 'should return fizz on modulo 3', function() {
        assert.equal( toFizz( 3 ), 'fizz' );
    });

    it( 'should return buzz on modulo 7', function() {
        assert.equal( toFizz( 7 ), 'buzz' );
    });

    it( 'should return buzz on modulo 21', function() {
        assert.equal( toFizz( 21 ), 'fizzbuzz' );
    });

    it( 'should return a number else', function() {
        assert.equal( toFizz( 5 ), 5 );
    });
});