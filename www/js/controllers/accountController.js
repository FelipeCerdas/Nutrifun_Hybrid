app.controller('AccountCtrl', function($scope, $timeout, AccountService) {

  //variable objeto que se actualiza con los campos que se completan en la vista
  $scope.user = {
    userName : '',
    name : '',
    lastName : '',
    email : '',
    password : ''
  }

  $scope.goBack = function(){
    window.history.back();
  };

  //funcion que recupera las recetas por medio del id de usuario
  $scope.getUser = function(){
    //llamado al servicio que obtiene recetas.
    AccountService.getUserById($scope.user_logged.idUser).then(function(result){
      $scope.user = AccountService.getObject();
    });
  };

  $scope.save = function(){
    console.log("salvar");
  };
});
