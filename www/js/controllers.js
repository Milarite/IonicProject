
angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout,$window,$ionicNavBarDelegate,$state) {
  
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
   $state.go('app.login2');

  }
})





.controller('AddCandidateCtrl',['$scope','Web3jsObj',function($scope,Web3jsObj){


  

// const wallet = Wallet.createRandom();

//     console.log(wallet.address);

        // seedPhrase: seedPhrase, // Optionally provide a 12-word seed phrase
        // salt: fixture.salt,     // Optionally provide a salt.
                                   // A unique salt will be generated otherwise.
        // hdPathString: hdPath    // Optional custom HD Path String
//     Web3jsObj.web3Init(contractsInfo.main,MainAbi);
//     Web3jsObj.Web3Facotry("https://rinkeby.infura.io/v3/afbac1a223484d84a7784a133d1f2010");
    
// var smartContract = Web3jsObj.Web3SmartContract();




    $scope.addCandidate=function(candidateData){

  



  
// var data =smartContract.addCandidate.getData(candidateData.candidateId,candidateData.name,candidateData.dateOfBirth,candidateData.password
//     ,"Amman","2015","0795291901"); 
    

    // web3.eth.getTransactionCount(Web3jsObj.web3GetAccountAddress(),function(err,nonce){
    //     var rawTransaction = Web3jsObj.prepareRawTransaction(data,nonce);

    // web3.eth.sendRawTransaction(rawTransaction, function (err, transactionHash) {
    //     console.log(err);
    //     console.log(transactionHash);
    //         });

//});


       
        

        






   }
  }])


.controller('login2Ctrl',["$scope","Web3jsObj",'$window','$state','Web3jsObj' ,function($scope,Web3jsObj,$window,$state,Web3jsObj) {

   
  $scope.loginEmail = function(loginForm,user){

    if(true){

        ethers.Wallet.fromBrainWallet(loginForm.NationalNumber, loginForm.Password).then(function(_wallet){

            console.log("privateKey " + _wallet.privateKey);
            console.log("public key " + _wallet.address);

            
        });
      $state.go('app.addCandidate');
     // console.log(Web3jsObj.Web3Facotry("https://rinkeby.infura.io/v3/afbac1a223484d84a7784a133d1f2010"));
      var webobj=Web3jsObj.Web3Facotry("https://rinkeby.infura.io/v3/afbac1a223484d84a7784a133d1f2010");
      disableBack: true;
    }
  
  }





    

}])

.controller('ViewCandidateCtrl',function($scope,Web3jsObj){

//     Web3jsObj.web3Init(dsdsd,adsadsd);
//     Web3jsObj.Web3Facotry();
//   var s =  Web3jsObj.Web3SmartContract();



    
    
  
    

});


