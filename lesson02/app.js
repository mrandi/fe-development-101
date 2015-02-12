// docs: http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/Route53.html

var AWS = require( 'aws-sdk' ),
    Promise = require( 'rsvp' ).Promise;

AWS.config.route53 = {
    region: 'eu-west-1'
};

var dns = new AWS.Route53();

/**
 * Lists all Hosted Zones in the configured region for this account.
 * @return {Promise} A promise which resolves with the Hosted Zones
 */
function listHostedZones() {
    function execute( resolve, reject ) {
        dns.listHostedZones( function( err, val ) {
            if ( !err ) {
                resolve( val.HostedZones );
            } else {
                reject( err );
            }
        });
    }
    return new Promise( execute );
}

/**
 * Lists all RecordSets for a single Hosted Zone.
 * 
 * @param  {HostedZone} hostedZone
 * @return {Promise} A promise resolving to the Resource Record Sets of the Hosted Zone.
 */
function listResourceRecordSet( hostedZone ) {
    function execute( resolve, reject ) {
        dns.listResourceRecordSets({
                HostedZoneId: hostedZone.Id
            }, function( err, val ) {
                if ( !err ) {
                    resolve( val.ResourceRecordSets );
                } else {
                    reject( err );
                }
            });
    }
    return new Promise( execute );
}

/**
 * Lists Resource Record Sets for multiple Hosted Zones.
 * 
 * @param  {array} hostedZones
 * @return {Promise} Promise resolving to all Resource Record Sets for the Hosted Zones.
 */
function listRecordSets( hostedZones ) {
    /**
     * Nicer ES6 Fat Arrow Syntax:
     * var promises = hostedZones.map( ( zone ) => listResourceRecordSet( zone ) );
     */
    var promises = hostedZones.map( function( zone ) {
        return listResourceRecordSet( zone );
    });
    return Promise.all( promises );
}

/**
 * Checks for uniqueness in an array using strict equality.
 * 
 */
function isUnique( value, index, self ) {
    return self.indexOf( value ) === index;
}

/**
 * Prints out DNS names in Record Sets.
 * @param  {array} recordSets
 */
function printDnsNames( recordSets ) {
    var sets = recordSets.reduce( function( prev, cur ) {
                                return prev.concat( cur );
                            }, []);
    var names = sets.map( function( record ) {
                                return record.Name;
                            })
                    .sort()
                    .filter( isUnique )
                    .forEach( function( n ) {
                        console.log( n );
                    });
}

listHostedZones()
    .then( listRecordSets )
    .catch( console.error.bind( console ) ) // catch dem errors
    .then( printDnsNames );
