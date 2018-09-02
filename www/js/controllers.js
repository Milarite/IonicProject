
angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout,$window,$ionicNavBarDelegate) {
   
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.show();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
  $scope.logout=function(){
    $window.location.href = '#/app/templates/login2';
  }
})





.controller('AddCandidateCtrl',['$scope','Web3jsObj',function($scope,Web3jsObj){

    $scope.addCandidate=function(candidateData){




        Web3jsObj.Web3Facotry("https://rinkeby.infura.io/v3/afbac1a223484d84a7784a133d1f2010");



        var judgmentInstance = Web3jsObj.Web3SmartContract("0xbd97c833494c016e167310b3fc6f62f87b79965a",judgmentAbi);


        

        






    }
  }])


.controller('login2Ctrl',["$scope","Web3jsObj",'$window','$state' ,function($scope,Web3jsObj,$window,$state) {

    
  $scope.loginEmail = function(loginForm,user){

    if(true){
      //$window.location.href = '#/app/addCandidate';

      $state.go('app.addCandidate');
      this.nav.setRoot('#/app/addCandidate');
      console.log(Web3jsObj.Web3Facotry("https://rinkeby.infura.io/v3/afbac1a223484d84a7784a133d1f2010"));
      var webobj=Web3jsObj.Web3Facotry("https://rinkeby.infura.io/v3/afbac1a223484d84a7784a133d1f2010");
      disableBack: true
    }
  
  }





    

}])

.controller('ViewCandidateCtrl',function($scope){

    
    
  
    

});



