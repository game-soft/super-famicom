(function() {
    'use strict';
    var superFamicomSoftList = require('../data/soft_list');

    if (typeof define === 'function' && define.amd) {
        define(function() { return superFamicomSoftList; });
    } else if (typeof module !== 'undefined' && module.exports) {
        module.exports = superFamicomSoftList;
    } else {
        window.gameSoft = {
            superFamicom: superFamicomSoftList
        };
    }
})();