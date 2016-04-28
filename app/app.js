
var testData = require('./testData')
var app = angular.module('uigrid', ['ngMaterial', 'ui.grid']);

app.controller('MainCtrl', ['DictionariesService', '$scope', function (DictionariesService, $scope) {
    // $scope.gridOptions = {
    //     excludeProperties: '__metadata',
    // };

    // var c = DictionariesService.readAll();
    // $scope.gridOptions.data = c.data;
    // testData.trexei();

    $scope.items = [1, 2, 3, 4, 5, 6, 7];
    $scope.selectedItem;
    $scope.getSelectedText = function () {
        if ($scope.selectedItem !== undefined) {
            return "You have selected: File " + $scope.selectedItem;
        } else {
            return "Please select a file";
        }
    };
}]);
