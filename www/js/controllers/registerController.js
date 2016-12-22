app.controller('RegisterCtrl', function($scope,$ionicPopup,RegisterService,UtilService) {
  //variable objeto que se actualiza con los campos que se completan en la vista
  $('#spinner2').hide();
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
    if($scope.user.username != "" && $scope.user.password != ""
      && $scope.user.lastname != "" && $scope.user.name != ""
      && $scope.user.email != ""){
      //control de preguntar si el usuario esta seguro
      $scope.showConfirm("Atencion","¿Guardar cuenta?");
    }else {
      //servicio de registro
      UtilService.showAlert("Atencion","Debe completar todos los campos");
    }
  }

  // A confirm dialog los popups de confirmacion no detienen el flujo de la aplicacion
  //por lo que se utlizan en la clase controlador y no en las clases de servicio
  $scope.showConfirm = function(title,message) {
    var confirmPopup = $ionicPopup.confirm({
      title: title,
      template: message
    });

    confirmPopup.then(function(res) {
      if(res) {
        RegisterService.registerUser($scope.user);
      } else {

      }
    });
  };
});
