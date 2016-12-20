app.controller('AccountCtrl', function($scope) {

  //variable objeto que se actualiza con los campos que se completan en la vista
  $scope.user = {
    username : '',
    name : '',
    lastname : '',
    email : '',
    password : ''
  }

  $scope.goBack = function(){
    window.history.back();
  };

  $scope.save = function(){
    console.log("salvar");
  };
});
