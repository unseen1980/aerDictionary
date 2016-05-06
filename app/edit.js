var ipc = require("electron").ipcRenderer;
var app = angular.module('uigrid', ['ngMaterial', 'ui.grid', 'ui.grid.edit']);


app.config(function ($mdThemingProvider) {
    $mdThemingProvider.theme('default')
        .primaryPalette('teal')
        .accentPalette('orange');
});

app.controller('EditCtrl', ['$scope',
    function ($scope) {
        $scope.gridOptions = {
            'data': []
        };
        ipc.on('open-dictionary', function (event, arg) {
            $scope.gridOptions.data = arg;
            $scope.$apply();
        });
    }]);
