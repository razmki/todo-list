angular.
  module('columnsOfStates').
  component('columnsOfStates', {
    templateUrl: 'columns-of-states/columns-of-states.template.html',
    controller:
      function ColumnsOfStatesController($http) {
        var self = this;
        this.refresh = function() {
          $http.get('/addnew').then(function(response) {

            self.columns = response.data;
            console.log(self.columns);
          });
        };
        this.refresh();
      }
});