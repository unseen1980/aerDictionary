var dataBucket = require('./dataBucket')

angular.module('dictionaryApp')
    .service('DictionariesService', function DictionariesService() {
        this.getFileContents = (file) => {
            return dataBucket.getFileContents(file);
        }
    });