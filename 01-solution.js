function fibonacci_imperative( n ) {
    if ( n < 1 ) {
        return [];
    }
    if ( n === 1 ) {
        return [ 1 ];
    }
    var seq = [ 1, 1 ],
        i = n - 2;

    while( i > 0 ) {
        var last = seq.length - 1,
            butlast = last - 1;
        seq.push( seq[ last ] + seq[ butlast ] );
        i--;
    }
    return seq;
}

function fibonacci_functional( n ) {
    function fib( n ) {
        if ( n <= 2 ) {
            return 1;
        }

        return fib( n - 1 ) + fib( n - 2 );
    }
    // there is no `range` function, so make it ourselves
    function range( start, end ) {
        var seq = [],
            i = end - start;
        while( i-- ) {
            seq.push( start + ( end - i ));
        }
        return seq;
    }

    return range( 0, n ).map( fib );
}

function evenFibSum( n ) {
    function sum( a, b ) {
        return a + b;
    }

    return  fibonacci_functional( n )
            .filter( function( i ) {
                return i % 2 === 0;
            })
            .reduce( sum, 0 );
}

console.log( evenFibSum( 6 ));