
var dataBucket = require('./dataBucket')
var app = angular.module('uigrid', ['ngMaterial', 'ui.grid']);


app.config(function ($mdThemingProvider) {
    $mdThemingProvider.theme('default')
        .primaryPalette('teal')
        .accentPalette('orange');
});

app.controller('MainCtrl', ['DictionariesService', '$scope',
    function (DictionariesService, $scope) {
        $scope.gridOptions = {
            'data': []
        };
        $scope.items = dataBucket.listOfJsonFiles();
        $scope.selectedItem = '';
        $scope.getFileContents = () => {
            $scope.gridOptions.data =
                DictionariesService.getFileContents($scope.selectedItem);
        };
    }]);
