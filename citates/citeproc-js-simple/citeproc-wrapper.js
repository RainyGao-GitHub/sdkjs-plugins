function Citeproc (citations, style, mylocales, done) {
   
    var citeproc,
    sys,
    locales = {},
    localeIDs = ['en-US', 'en-US'];
    locales[localeIDs[0]] = mylocales;
    locales[localeIDs[1]] = mylocales;
    // Constructs the wrapper
    this.construct = function () {
        var self = this;
        self.setupSys();
        citeproc = new CSL.Engine(sys, style, 'en-US', 'en-US');
        done(citeproc);
    };

    // Rigs up the sys object for the internal citeproc
    this.setupSys = function () {
        sys = {
            retrieveLocale: function (language) {
                return locales[language];
            },
            retrieveItem: function (id) {
                return citations[id];
             }
        };
    };

    this.construct();
}