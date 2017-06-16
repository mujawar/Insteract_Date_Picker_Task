/**
 * You must include the dependency on 'ngMaterial'
 */
angular.module('demo.app', ['ngMaterial', 'ngMaterialDateRangePicker'])
    .controller('ctrl', function ($scope, $mdDateRangePicker) {
        var tmpToday = new Date();
        $scope.mdLocalizationMap = {
            'Mon': 'Mon*',
            'This Week': 'Current Week',
        };
        $scope.selectedRange = {
            selectedTemplate: 'TW',
            selectedTemplateName: 'This Week',
            dateStart: null,
            dateEnd: null,
            showTemplate: false,
            fullscreen: false,
            firstDayOfWeek: 0
        };
        $scope.onSelect = function ($event) {
            console.log('callingh>>>>>>',JSON.stringify($scope.selectedRange));
            console.log($scope.selectedRange.selectedTemplateName);
            return $scope.selectedRange.selectedTemplateName;
        };

        $scope.clear = function () {
            console.log('clear button calling');
            $scope.selectedRange.selectedTemplate = null;
            $scope.selectedRange.selectedTemplateName = null;
            $scope.selectedRange.dateStart = null;
            $scope.selectedRange.dateEnd = null;
        }
    });