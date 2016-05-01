var dataBucket = require('./dataBucket')

angular.module('uigrid')
    .service('DictionariesService', function DictionariesService() {
        this.getFileContents = (file) => {
            return dataBucket.getFileContents(file);
        }
    });