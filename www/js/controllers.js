
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

  // Create the login modal that we will use laterginlz
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





.controller('AddCandidateCtrl',['$scope','Web3jsObj','$ionicLoading','$timeout',function($scope,Web3jsObj,$ionicLoading,$timeout){



const judgment_address = localStorage.getItem("address");
const judgment_privateKey = localStorage.getItem("pkAddress");




Web3jsObj.web3Init(contractsInfo.main,MainAbi,judgment_address,judgment_privateKey);
Web3jsObj.Web3Facotry(rinkebyUrl);









        //  web3.eth.sendRawTransaction(raw, function (err, transactionHash) {
    
          











  



    
 
    

const smartContract = Web3jsObj.Web3SmartContract();



    $scope.addCandidate=function(candidateData){

  $ionicLoading.show();
        // create candidate wallet

        Web3jsObj.createBrainWallet(candidateData.candidateId,candidateData.password).then(function(_wallet)
    
    {


               ///// add candidate function

               var data =smartContract.addCandidate.getData(_wallet.address,candidateData.candidateId,candidateData.name,candidateData.dateOfBirth,candidateData.password
                ,candidateData.city,candidateData.year,candidateData.phoneNumber,"plz plz endome elena drobs mlabs swf n7rr el ods"); 
            
            
                web3.eth.getTransactionCount(judgment_address,function(err,nonce){
                  
                    var tx =new ethereumjs.Tx({ 
                        data : data,
                        nonce : nonce,
                        gasPrice :web3.toHex(web3.toWei('20', 'gwei')),
                        to : contractsInfo.main,
                        value : 0,
                        gasLimit: 1000000
                        
            
                    });
            
                      tx.sign(ethereumjs.Buffer.Buffer.from(judgment_privateKey.substr(2), 'hex'));
                      var raw = '0x' + tx.serialize().toString('hex');
            
            
                      web3.eth.sendRawTransaction(raw, function (err, transactionHash) {

if(!err)
{
    
    console.log(transactionHash);
    alert("candidate added");
}
console.log(err);

$ionicLoading.hide();


            });


                    



                });





            })
      
        }

        //})


 //   })
    
    
    








    


     
    
    
       
        




        ///////////////////

  



  }])


.controller('login2Ctrl',["$scope","Web3jsObj",'$window','$state','Web3jsObj','$ionicLoading' ,function($scope,Web3jsObj,$window,$state,Web3jsObj,$ionicLoading) {
    Web3jsObj.Web3Facotry(rinkebyUrl);
    $scope.addEtherToJudgment = function(_from,_fromPk,_to){
        
        var balance = web3.eth.getBalance(_to);
        balance = web3.toDecimal(balance);
        balance = web3.fromWei(balance, 'ether');
      
        if(balance < 1)
       { 
        web3.eth.getTransactionCount(_from,function(err,transactionCount){

            var tx =new ethereumjs.Tx({ 
           data : '',
           nonce : transactionCount,
           gasPrice :web3.toHex(web3.toWei('20', 'gwei')),
           to : _to,
           value : 6000000000000000000,
           gasLimit: 1000000
           

       });

         tx.sign(ethereumjs.Buffer.Buffer.from(_fromPk, 'hex'));
         var raw = '0x' + tx.serialize().toString('hex');
         web3.eth.sendRawTransaction(raw, function(err,result){
            $ionicLoading.hide();
            
            if(!err){
                console.log("transactionHash");
                console.log(result);
                 $state.go('app.addCandidate');

           
            }

         });
        
         
    })
  
    }
    else{
        $ionicLoading.hide();
        $state.go('app.addCandidate');
    }
}
  $scope.check = function(event,_val){
    if ($scope.checked == event.target.value)
     $scope.checked = false;
     $scope.role=_val;
  }  
  $scope.validation = function(_idNumber,_pass){

   
    
        Web3jsObj.web3Init(contractsInfo.main,MainAbi,null,null);
        var candidateContractInstance = Web3jsObj.Web3SmartContract();
    // this line will get the address from smart contract by candidate national id
        const candidate_address = candidateContractInstance.getCandidateAddressByNationalId.call(_idNumber);
        // this line will call function thats accept address and password as parameter and return true or false based on founded 
        const isAccountValid = candidateContractInstance.CandidateCheckIdAndPassword(candidate_address,_pass);
     if(isAccountValid==true){
       localStorage.setItem("candidate_nationalId",_idNumber);
     }




        return isAccountValid;

        

    }
  $scope.loginEmail = function(loginForm,user,role){





// (role.candidate ==true && valdation(user.NationalNumber,user.password))


// if(($scope.role=="candidate" && validation(user.NationalNumber,user.password)==true))
// {

// }
 if(($scope.role=="judgment" && user.password =="judgjudg"))
{

    $ionicLoading.show();

    
    Web3jsObj.createBrainWallet(user.NationalNumber, user.password).then(function(_wallet){


            
        localStorage.setItem("address", _wallet.address);
        localStorage.setItem("pkAddress",_wallet.privateKey);
        

        $scope.addEtherToJudgment(public_key,private_key,_wallet.address);



        /// add ether to judg if his wallet is empty 



        // end of adding ether to judg



    
           

            
        });
     
     // console.log(Web3jsObj.Web3Facotry("https://rinkeby.infura.io/v3/afbac1a223484d84a7784a133d1f2010"));
    //   var webobj=Web3jsObj.Web3Facotry("https://rinkeby.infura.io/v3/afbac1a223484d84a7784a133d1f2010");
    }
    else if($scope.validation(user.NationalNumber,user.password)==true)  {

        
        $ionicLoading.hide();
        $state.go('app.CandidateProfile');
      
        
        
    }
  else alert ("invalid password");
  }





    

}])

.controller('ViewCandidateCtrl',function($scope,Web3jsObj){

  
//     Web3jsObj.web3Init(dsdsd,adsadsd);
//     Web3jsObj.Web3Facotry();
//   var s =  Web3jsObj.Web3SmartContract();

const judgment_address = localStorage.getItem("address");
const judgment_privateKey = localStorage.getItem("pkAddress");



Web3jsObj.web3Init(contractsInfo.main,MainAbi,judgment_address,judgment_privateKey);
Web3jsObj.Web3Facotry(rinkebyUrl);

var smartInstance = Web3jsObj.Web3SmartContract();

const numberOfCandidate = smartInstance.getCandidateNationalIDArrayLength.call();

const number = numberOfCandidate.c[0];
var items = [];
for(var i =0 ; i < number ;i++)
{
  var address = smartInstance.getCandidateNationalID.call(i);
  console.log(address)
  var name = smartInstance.getCandidateName.call(address);
  var city = smartInstance.getCandidateCity.call(address);
  var numberOfVotes = smartInstance.getCandidateVotesNumber.call(address);

  var candidate = {nameCandidate : name , City :city, NumberOfVotes : numberOfVotes , address:address };

  items.push(candidate);
  //var 

  
}
$scope.candidates = items;

//smartInstance.$ionicLoading








// $scope.items =   [
//   { nameCandidate: "yaqeen", CandidateID: "123", City  : "Zarqa",NumberOfVotes : "10" },
//   {  nameCandidate: "yaqeen", CandidateID: "123", City  : "Amman", NumberOfVotes: "15"},
//   {  nameCandidate: "yaqeen", CandidateID: "123", City : "Irbid", NumberOfVotes: "20" },
//   {  nameCandidate: "yaqeen", CandidateID: "123", City : "Amman", NumberOfVotes: "25" }
//  ];



    
    

})
.controller('CandidateProfileCtrl',function($scope,Web3jsObj,$rootScope){
  

  const judgment_address = localStorage.getItem("address");
  const judgment_privateKey = localStorage.getItem("pkAddress");

Web3jsObj.web3Init(contractsInfo.main,MainAbi,judgment_address,judgment_privateKey);
Web3jsObj.Web3Facotry(rinkebyUrl);
smartInstance=Web3jsObj.Web3SmartContract();

const _idNumber = localStorage.getItem("candidate_nationalId");

const candidate_address = smartInstance.getCandidateAddressByNationalId.call(_idNumber);
// this line will call function thats accept address and password as parameter and return true or false based on founded 
const birthOfDate = smartInstance.getCandidatebirthOfDate.call(candidate_address);
const city = smartInstance.getCandidateCity.call(candidate_address);
const year = smartInstance.getCandidateYear.call(candidate_address);
const NumberOfVotes=smartInstance.getCandidateVotesNumber.call(candidate_address);
const nameCandidate=smartInstance.getCandidateName.call(candidate_address);
const campaign=smartInstance.getCandidateCampaign.call(candidate_address);


$scope.candidateProfile = {
  NationalNumber : _idNumber,
  Address : candidate_address,
  BirthOfDate : birthOfDate,
  City:city,
  Year:year,
  NumberOfVotes:NumberOfVotes,
  nameCandidate:nameCandidate,
  campaign:campaign
  
  
  };




//const candidate_address = smartInstance.getCandidateAddressByNationalId.call();

  //const numberOfVotes=smartInstance.getCandidateVotesNumber.call(candidate_address);

  //console.log(numberOfVotes);

})

;


