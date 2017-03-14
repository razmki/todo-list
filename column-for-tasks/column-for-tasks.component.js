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
    controller:
      function ColumnForTasksController($http) {
        var self = this;
        this.$onInit = function() {
          console.log(42);
        }
        this.$onChanges = function({this.columnData}) {
          console.log('index', this.$index)
          this.columnData.splice(this.$index, 1);
          console.log(this.columnData);
          $http.put('/changetaskcolumn/' + this.nameColumn, this.columnData).then(function(response) {
            console.log('success');
        });
      };
  }
});