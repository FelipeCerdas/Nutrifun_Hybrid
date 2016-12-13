app.controller('RegisterCtrl', function($scope, RegisterService) {
  //variable objeto que se actualiza con los campos que se completan en la vista
  $scope.user = {
    username : '',
    name : '',
    lastname : '',
    email : '',
    password : ''
  }
  //funcion que regresa a la pantalla anterior
  $scope.goBack = function(){
    window.history.back();
  }
  $scope.register = function(){
    //control de espacios vacios
    //control de preguntar si el usuario esta seguro
    //servicio de registro
    RegisterService.registerUser($scope.user);
  }
});
