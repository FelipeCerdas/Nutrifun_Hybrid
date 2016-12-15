app.service('LoginService', function ($state, $rootScope) {
      var service = {
        userAuth: function(username_,password_){

          var data_ = {
            userName : username_,
            password : password_
          };

          var request_ = {
                          "header":{},
                          "body":{
                          "userName":"pipe",
                          "password":"123456"
                          }
                        }

          $.ajax({
              url: 'http://nutrifun-nutrifun.rhcloud.com/services/user/login',
              type: 'post',
              data: data_,
              dataType: 'json',
              success: function (data) {
                  console.log(data);
              }
          });

        }//fin de la funcion
      }//fin variable de servicio
      return service;
});
