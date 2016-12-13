app.service('RegisterService', function ($state, $rootScope) {
      var service = {
        registerUser: function(user){
          console.log(user);
          //codigo que guardara al usuario!
        }
      }
      return service;
});
