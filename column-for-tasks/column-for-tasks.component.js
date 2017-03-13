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
        // setTimeout(function() {
        //   console.log(this)
        // })
      }
  });