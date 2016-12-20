app.controller('LoginCtrl', function($scope, LoginService, UtilService) {

    //variable objeto user que que actualiza sus atributos al llenar el form
    $scope.user = {
      username: '',
      password: ''
    }

    //funcion que se encarga de realizar el proceso de login
    $scope.login = function(){
      //validacion de campos vacios !!!
      if($scope.user.username != "" && $scope.user.password != ""){
        //invocacion del servicio de autenticacion de usuario
        var auth = LoginService.userAuth($scope.user.username,$scope.user.password);
        //si auth es true se muestra alerta de que usuario es correcto
        if(auth){
          UtilService.showAlert("Exito","Ingreso Exitoso");
          // mostrar pantalla de home
          location.href = "#/tab/dash";
        }else{
          UtilService.showAlert("Error","Nombre de usuario o contrasena incorrecta");
        }
      }else{
        UtilService.showAlert("Atencion","Debe completar ambos campos");
      }//fin del if/else de validacion de campos vacios
    }

    //funcion que se encargar de enviar al usuario a la pantalla de registro
    $scope.register = function(){
      location.href = "#/register";
    }



});
