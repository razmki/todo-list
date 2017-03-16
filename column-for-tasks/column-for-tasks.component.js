angular.
module('columnForTasks').
component('columnForTasks', {
    templateUrl: 'column-for-tasks/column-for-tasks.template.html',
    bindings: {
        columnData: '<',
        refresh: '<',
        nameColumn: '<',
        allColumns: '='
    },
    controller: function ColumnForTasksController($http) {
        var self = this;
        this.dropCallback = function(index, item, external, type) {
            return item;
        };
        this.changeTaskColumn = function($index) {
            this.columnData.splice($index, 1);
            $http.put('/changetaskcolumn/' + this.nameColumn, this.allColumns).then(function(response) {});
        };
    }
});
