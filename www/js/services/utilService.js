app.service('UtilService', function ($ionicPopup) {
    var service = {
      showAlert: function (title, message) {
        var alertPopup = $ionicPopup.alert({
          title: title,
          template: message
        });
      },
      showConfirm: function(title, message) {
       var confirmPopup = $ionicPopup.confirm({
         title: title,
         template: message
       });

       confirmPopup.then(function(res) {
         if(res) {
          //  console.log('You are sure');
          return service = true;
         } else {
          //  console.log('You are not sure');
          return service = false;
         }
       });
     }
    }
    return service;
  });
