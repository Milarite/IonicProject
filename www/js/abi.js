
var contractsInfo  = {
main : "0x50b7460f8666caa050ee8b2c6c1bc49174ba5065",
judgment :"0xd33dde1b558d4b362a6e67d9efb6d339b13a9e74",
voters :"0x834e605e24dcf0f461ce86e9d9cfded72d766e15",
candidate:"0xf44e1c124615d83efc318656e53b01159881425f"

}

const rinkebyUrl = "https://rinkeby.infura.io/v3/afbac1a223484d84a7784a133d1f2010";

var judgmentAbi = [
	{
		"constant": false,
		"inputs": [
			{
				"name": "candidateIdNumber",
				"type": "string"
			},
			{
				"name": "name",
				"type": "string"
			},
			{
				"name": "birthOfDate",
				"type": "string"
			},
			{
				"name": "password",
				"type": "string"
			}
		],
		"name": "addCandidate",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "candidateIdNumber",
				"type": "string"
			},
			{
				"name": "city",
				"type": "string"
			},
			{
				"name": "year",
				"type": "string"
			},
			{
				"name": "phoneNumber",
				"type": "string"
			}
		],
		"name": "addCandidateDetails",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "candidateIdNumber",
				"type": "string"
			}
		],
		"name": "getCandidateVotesNumber",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "index",
				"type": "uint256"
			}
		],
		"name": "getNationalID",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getNationalIDArrayLength",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "CandidateIdNumber",
				"type": "string"
			}
		],
		"name": "getCandidateName",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "CandidateIdNumber",
				"type": "string"
			}
		],
		"name": "getCandidateYear",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "CandidateIdNumber",
				"type": "string"
			}
		],
		"name": "getCandidateNumberOfVotes",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "CandidateIdNumber",
				"type": "string"
			}
		],
		"name": "getCandidateCity",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "candidateIdNumber",
				"type": "string"
			},
			{
				"name": "numberOfVotes",
				"type": "uint256"
			}
		],
		"name": "addCandidateTracking",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "CandidateIdNumber",
				"type": "string"
			}
		],
		"name": "getCandidatebirthOfDate",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
]


var MainAbi = [
	{
		"constant": false,
		"inputs": [
			{
				"name": "candidateIdNumber",
				"type": "string"
			},
			{
				"name": "name",
				"type": "string"
			},
			{
				"name": "birthOfDate",
				"type": "string"
			},
			{
				"name": "password",
				"type": "string"
			},
			{
				"name": "city",
				"type": "string"
			},
			{
				"name": "year",
				"type": "string"
			},
			{
				"name": "phoneNumber",
				"type": "string"
			}
		],
		"name": "addCandidate",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "candidateIdNumber",
				"type": "string"
			},
			{
				"name": "city",
				"type": "string"
			},
			{
				"name": "year",
				"type": "string"
			},
			{
				"name": "phoneNumber",
				"type": "string"
			}
		],
		"name": "addCandidateDetails",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "candidateIdNumber",
				"type": "string"
			},
			{
				"name": "numberOfVotes",
				"type": "uint256"
			}
		],
		"name": "addCandidateTracking",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "judgmentInformationId",
				"type": "string"
			},
			{
				"name": "name",
				"type": "string"
			},
			{
				"name": "birthOfDate",
				"type": "string"
			},
			{
				"name": "password",
				"type": "string"
			}
		],
		"name": "addJudgmentInformation",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "voterIdNumber",
				"type": "string"
			},
			{
				"name": "city",
				"type": "string"
			},
			{
				"name": "year",
				"type": "string"
			}
		],
		"name": "addVoterDetails",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "voterIdNumber",
				"type": "string"
			},
			{
				"name": "name",
				"type": "string"
			},
			{
				"name": "birthOfDate",
				"type": "string"
			},
			{
				"name": "password",
				"type": "string"
			}
		],
		"name": "addVoterInfo",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "voterIdNumber",
				"type": "string"
			},
			{
				"name": "candidateIdNumber",
				"type": "string"
			}
		],
		"name": "addVoterVotes",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"name": "_candidate",
				"type": "address"
			},
			{
				"name": "_voters",
				"type": "address"
			},
			{
				"name": "_judgment",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "voterIdNumber",
				"type": "string"
			},
			{
				"name": "candidateIdNumber",
				"type": "string"
			}
		],
		"name": "Voting",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "index",
				"type": "uint256"
			}
		],
		"name": "getAllCandidateInfo",
		"outputs": [
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "candidateIdNumber",
				"type": "string"
			}
		],
		"name": "getCandidatebirthOfDate",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "candidateIdNumber",
				"type": "string"
			}
		],
		"name": "getCandidateCity",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "candidateIdNumber",
				"type": "string"
			}
		],
		"name": "getCandidateName",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "index",
				"type": "uint256"
			}
		],
		"name": "getCandidateNationalID",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getCandidateNationalIDArrayLength",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "CandidateIdNumber",
				"type": "string"
			}
		],
		"name": "getCandidatePhonenumber",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "candidateIdNumber",
				"type": "string"
			}
		],
		"name": "getCandidateVotesNumber",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "candidateIdNumber",
				"type": "string"
			}
		],
		"name": "getCandidateYear",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "index",
				"type": "uint256"
			}
		],
		"name": "getNationalID",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "index",
				"type": "uint256"
			}
		],
		"name": "getVotersInfo",
		"outputs": [
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getVotersNationalIDArrayLength",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "voterIdNumber",
				"type": "string"
			}
		],
		"name": "getVoterVotes",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
]