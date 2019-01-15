function define(name, value) {
    Object.defineProperty(exports, name, {
        value:      value,
        enumerable: true
    });
}

define("REALMETHODS", "realmethods");
define("REALMETHODS_DOMAIN", "http://www.realmethods.com");
define("QUIET_MODE", "QUIET_MODE");

define("SUCCESS", "SUCCESS");
define("ERROR", "ERROR");

////////////////////////
// enums
////////////////////////

// output format
define("JSON_OUTPUT", 'json');
define("PRETTY_PRINT_OUTPUT", 'pretty');
define("NO_OUTPUT", "none");

// scope of request
define("PRIVATE", 'PRIVATE'); // the default for most to all calls likely
define("PUBLIC", 'PUBLIC');
define("COMMUNITY", 'COMMUNITY');

