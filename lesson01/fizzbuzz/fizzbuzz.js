"use strict";

// fizzbuzz
// % 3 = "fizz"
// % 7 = "buzz"
// % 7 && % 3 = "fizzbuzz"

function range( n ) {
    var list = [];
    for ( var i = 1; i <= n; i++ ) {
        list.push( i );
    }
    return list;
}

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

function fizzbuzz( end ) {
    var list = range( end );
    list
        .map( toFizz )
        .forEach( function( output ) {
            console.log( output );
        });
}

fizzbuzz( 100 );