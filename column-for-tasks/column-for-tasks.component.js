angular.
  module('columnForTasks').
  component('columnForTasks', {
    templateUrl: 'column-for-tasks/column-for-tasks.template.html',
    bindings: {
      columnData: '=',
      refresh: '<',
      nameColumn: '<'
    },
    controller:
      function ColumnForTasksController($http) {
        // this.changeTaskColumn = function(data, index) {
        //   this.columnData.splice(index, 1);
        //   $http.put('/changetaskcolumn', this.columnData).then(function(response) {
        //     console.log('success');
        //   })
        // }
      }
  });