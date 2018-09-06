
angular.module('starter.controllers',[])

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





.controller('AddCandidateCtrl',['$scope','Web3jsObj','$ionicLoading',function($scope,Web3jsObj,$ionicLoading){



const judgment_address = localStorage.getItem("address");
const judgment_privateKey = localStorage.getItem("pkAddress");



Web3jsObj.web3Init(contractsInfo.main,MainAbi,judgment_address,judgment_privateKey.substring(2));
Web3jsObj.Web3Facotry(rinkebyUrl);

    web3.eth.getTransaction("0x30ce3f2e640ba554c18a74c507835f4541c23ec2c517908d71a09ced286c7141",function(err,result)

{
    console.log(err);
    console.log(result);
});


  

// const wallet = Wallet.createRandom();

//     console.log(wallet.address);

        // seedPhrase: seedPhrase, // Optionally provide a 12-word seed phrase
        // salt: fixture.salt,     // Optionally provide a salt.
                                   // A unique salt will be generated otherwise.
        // hdPathString: hdPath    // Optional custom HD Path String
//     Web3jsObj.web3Init(contractsInfo.main,MainAbi);
//     Web3jsObj.Web3Facotry("https://rinkeby.infura.io/v3/afbac1a223484d84a7784a133d1f2010");
    
// var smartContract = Web3jsObj.Web3SmartContract();



/*

Web3jsObj.web3Init(contractsInfo.main,MainAbi,judgment_address,judgment_privateKey.substring(2));
Web3jsObj.Web3Facotry(rinkebyUrl);

const smartContract = Web3jsObj.Web3SmartContract();



    $scope.addCandidate=function(candidateData){

  $ionicLoading.show();
        //// create candidate wallet

        Web3jsObj.createBrainWallet(candidateData.candidateId,candidateData.password).then(function(_wallet)
    
    {


        /////////////////////

        web3.eth.getTransactionCount("0x63a9adabb3edc39f552249cc0dc23eeab0df3c72",function(err,nonce){
            console.log("nonce");
            console.log(nonce);
            var tx =new ethereumjs.Tx({ 
                data : '',
                nonce : nonce+5,
                gasPrice :web3.toHex(web3.toWei('20', 'gwei')),
                to : judgment_address,
                value : 0,
                gasLimit: 1000000
                
                
    
            });
            
 
              tx.sign(ethereumjs.Buffer.Buffer.from("50FBEE34A355F70931B95C5C114AED5FB21BAF14971C1CDCC067BA46024C7275",'hex'));
              const serializedTx = tx.serialize();
              raw =  "0x" + serializedTx.toString('hex');
    
       

        

        ////////////////////


        web3.eth.sendRawTransaction(raw, function (err, transactionHash) {
            if(err)
            {
                console.log("err");
                console.log(err);
                return ;
            }

            console.log("hash");
            console.log("transactionHash");
            console.log(transactionHash);
         
            // var data =smartContract.addCandidate.getData(_wallet.address,candidateData.candidateId,candidateData.name,candidateData.dateOfBirth,candidateData.password
            //     ,candidateData.city,candidateData.year,candidateData.phoneNumber); 
            
            
            //     web3.eth.getTransactionCount(Web3jsObj.web3GetAccountAddress,function(err,nonce){
            //         var rawTransaction = Web3jsObj.prepareRawTransaction(data,nonce,0);
            
            //     web3.eth.sendRawTransaction(rawTransaction, function (err, transactionHash) {
    
            //         if(!err)
            //         {
            //         if(transactionHash)
            //         {
    
            //             $ionicLoading.hide();
            //             alert("done");
            //         }
            //     }
            //     else {
            //         console.log(err);
            //     }
                 
    
    
    
            //             });
         
            //         });


        });
      
        
        });
            
    




        /// end of create candidate wallet



  






  


       
        

        






   })

    }
*/


  }])


.controller('login2Ctrl',["$scope","Web3jsObj",'$window','$state','Web3jsObj','$ionicLoading' ,function($scope,Web3jsObj,$window,$state,Web3jsObj,$ionicLoading) {


  $scope.check = function(event,_val){
    if ($scope.checked == event.target.value)
     $scope.checked = false;
     $scope.role=_val;
  }  
   
  $scope.loginEmail = function(loginForm,user,role){


$scope.validation = function(_idNumber,_pass){






}


// (role.candidate ==true && valdation(user.NationalNumber,user.password))


// if(($scope.role=="candidate" && validation(user.NationalNumber,user.password)==true))
// {

// }
 if(($scope.role=="judgment" && user.password =="judgjudg") )
{

    $ionicLoading.show();

    
    Web3jsObj.createBrainWallet(user.NationalNumber, user.password).then(function(_wallet){

            
        localStorage.setItem("address", _wallet.address);
        localStorage.setItem("pkAddress",_wallet.privateKey);



    
            $state.go('app.addCandidate');

            $ionicLoading.hide();

            
        });
     
     // console.log(Web3jsObj.Web3Facotry("https://rinkeby.infura.io/v3/afbac1a223484d84a7784a133d1f2010"));
    //   var webobj=Web3jsObj.Web3Facotry("https://rinkeby.infura.io/v3/afbac1a223484d84a7784a133d1f2010");
    }
  
  }





    

}])

.controller('ViewCandidateCtrl',function($scope,Web3jsObj){

//     Web3jsObj.web3Init(dsdsd,adsadsd);
//     Web3jsObj.Web3Facotry();
//   var s =  Web3jsObj.Web3SmartContract();



    
    
  
    

});


