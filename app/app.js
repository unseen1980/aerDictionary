var dataBucket = require('./dataBucket');
var ipc = require("electron").ipcRenderer;
var app = angular.module('dictionaryApp', ['ngMaterial']);


app.config(function ($mdThemingProvider) {
    $mdThemingProvider.theme('default')
        .primaryPalette('teal')
        .accentPalette('orange');
});

app.controller('MainCtrl', ['DictionariesService', '$scope',
    function (DictionariesService, $scope) {        
        $scope.items = dataBucket.listOfJsonFiles();
        $scope.selectedItem = '';
        $scope.getFileContents = () => {
            ipc.send('open-dictionary', DictionariesService.getFileContents($scope.selectedItem));
        };
    }]);
