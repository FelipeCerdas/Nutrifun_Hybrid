app.service('LoginService', function ($state, $rootScope) {
      var service = {
        userAuth: function(username_,password_){

          if(username_ == "pipe" && password_ == "123456"){
            //si los datos del usuario son correctos el servicio se encarga de
            //redireccionar a la pantalla de home de la app y a cargar en rootScope
            //la informacion del usuario
            $state.go('tab.dash');
          }else{
            return false;
          }

        }
      }
      return service;
});
