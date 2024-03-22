/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type {
  Signer,
  AddressLike,
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
import type { NonPayableOverrides } from "../../common";
import type {
  WalletFactory,
  WalletFactoryInterface,
} from "../../contracts/WalletFactory";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IEntryPoint",
        name: "entryPoint",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "owners",
        type: "address[]",
      },
      {
        internalType: "uint256",
        name: "salt",
        type: "uint256",
      },
    ],
    name: "createAccount",
    outputs: [
      {
        internalType: "contract Wallet",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "owners",
        type: "address[]",
      },
      {
        internalType: "uint256",
        name: "salt",
        type: "uint256",
      },
    ],
    name: "getAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "walletImplementation",
    outputs: [
      {
        internalType: "contract Wallet",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60a060405234801561001057600080fd5b506040516132ea3803806132ea83398101604081905261002f91610090565b803060405161003d90610083565b6001600160a01b03928316815291166020820152604001604051809103906000f080158015610070573d6000803e3d6000fd5b506001600160a01b0316608052506100c0565b61260380610ce783390190565b6000602082840312156100a257600080fd5b81516001600160a01b03811681146100b957600080fd5b9392505050565b608051610bff6100e86000396000818160510152818161016601526103800152610bff6000f3fe60806040523480156200001157600080fd5b5060043610620000465760003560e01c80638117abc1146200004b57806394f7e8e0146200009c578063b54c02f214620000b3575b600080fd5b620000737f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b62000073620000ad3660046200044e565b620000ca565b62000073620000c43660046200044e565b620002b1565b60008083604051602401620000e0919062000545565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0818403018152918152602080830180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fa224cee70000000000000000000000000000000000000000000000000000000017905290519192506000916200018f917f000000000000000000000000000000000000000000000000000000000000000091859101620005c7565b6040516020818303038152906040529050600060405180602001620001b490620003e7565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe082820381018352601f909101166040819052620001f89190849060200162000637565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe081840301815282825280516020918201207fff00000000000000000000000000000000000000000000000000000000000000828501523060601b7fffffffffffffffffffffffffffffffffffffffff00000000000000000000000016602185015260358401899052605580850191909152825180850390910181526075909301909152815191012093505050505b92915050565b600080620002c08484620000ca565b905073ffffffffffffffffffffffffffffffffffffffff81163b8015620002ea57509050620002ab565b600085604051602401620002ff919062000545565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529181526020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fa224cee7000000000000000000000000000000000000000000000000000000001790525190915060009086907f0000000000000000000000000000000000000000000000000000000000000000908490620003ad90620003e7565b620003ba929190620005c7565b8190604051809103906000f5905080158015620003db573d6000803e3d6000fd5b50979650505050505050565b61055f806200066b83390190565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b803573ffffffffffffffffffffffffffffffffffffffff811681146200044957600080fd5b919050565b600080604083850312156200046257600080fd5b823567ffffffffffffffff808211156200047b57600080fd5b818501915085601f8301126200049057600080fd5b8135602082821115620004a757620004a7620003f5565b8160051b6040517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0603f83011681018181108682111715620004ed57620004ed620003f5565b6040529283528183019350848101820192898411156200050c57600080fd5b948201945b838610156200053557620005258662000424565b8552948201949382019362000511565b9997909101359750505050505050565b6020808252825182820181905260009190848201906040850190845b818110156200059557835173ffffffffffffffffffffffffffffffffffffffff168352928401929184019160010162000561565b50909695505050505050565b60005b83811015620005be578181015183820152602001620005a4565b50506000910152565b73ffffffffffffffffffffffffffffffffffffffff83168152604060208201526000825180604084015262000604816060850160208701620005a1565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016919091016060019392505050565b600083516200064b818460208801620005a1565b83519083019062000661818360208801620005a1565b0194935050505056fe608060405260405161055f38038061055f833981016040819052610022916102f8565b61004d60017f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbd6103c6565b60008051602061051883398151915214610069576100696103e7565b6100758282600061007c565b505061044c565b610085836100a8565b6000825111806100925750805b156100a3576100a183836100e8565b505b505050565b6100b181610116565b6040516001600160a01b038216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b606061010d8383604051806060016040528060278152602001610538602791396101ae565b90505b92915050565b803b61017f5760405162461bcd60e51b815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201526c1bdd08184818dbdb9d1c9858dd609a1b60648201526084015b60405180910390fd5b60008051602061051883398151915280546001600160a01b0319166001600160a01b0392909216919091179055565b6060833b61020d5760405162461bcd60e51b815260206004820152602660248201527f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f6044820152651b9d1c9858dd60d21b6064820152608401610176565b600080856001600160a01b03168560405161022891906103fd565b600060405180830381855af49150503d8060008114610263576040519150601f19603f3d011682016040523d82523d6000602084013e610268565b606091505b509092509050610279828286610285565b925050505b9392505050565b6060831561029457508161027e565b8251156102a45782518084602001fd5b8160405162461bcd60e51b81526004016101769190610419565b634e487b7160e01b600052604160045260246000fd5b60005b838110156102ef5781810151838201526020016102d7565b50506000910152565b6000806040838503121561030b57600080fd5b82516001600160a01b038116811461032257600080fd5b60208401519092506001600160401b038082111561033f57600080fd5b818501915085601f83011261035357600080fd5b815181811115610365576103656102be565b604051601f8201601f19908116603f0116810190838211818310171561038d5761038d6102be565b816040528281528860208487010111156103a657600080fd5b6103b78360208301602088016102d4565b80955050505050509250929050565b8181038181111561011057634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052600160045260246000fd5b6000825161040f8184602087016102d4565b9190910192915050565b60208152600082518060208401526104388160408501602087016102d4565b601f01601f19169190910160400192915050565b60be8061045a6000396000f3fe608060405236601057600e6013565b005b600e5b601f601b6021565b6065565b565b600060607f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5473ffffffffffffffffffffffffffffffffffffffff1690565b905090565b3660008037600080366000845af43d6000803e8080156083573d6000f35b3d6000fdfea26469706673582212200659177648e7221cbada3677e497c843b81c481a12709122f21b78dc3b9eee0d64736f6c63430008130033360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a26469706673582212204ef1b47f9f7907780449d747d523dc9434a238b35d2bc77f3ea68ab707558aec64736f6c6343000813003360c06040523480156200001157600080fd5b506040516200260338038062002603833981016040819052620000349162000065565b6001600160a01b0391821660a05216608052620000a4565b6001600160a01b03811681146200006257600080fd5b50565b600080604083850312156200007957600080fd5b825162000086816200004c565b602084015190925062000099816200004c565b809150509250929050565b60805160a0516124ec62000117600039600081816103340152818161060e0152818161089b01528181610a8f01528181610c0901528181610cc701528181610d0e0152818161106b015261138b0152600081816103e70152818161064d01528181610ace0152610d4d01526124ec6000f3fe60806040526004361061012c5760003560e01c80634f1ef286116100a5578063bc197c8111610074578063c5c0369911610059578063c5c03699146103d5578063d087d28814610409578063f23a6e611461041e57600080fd5b8063bc197c8114610378578063c399ec88146103c057600080fd5b80634f1ef286146102f2578063a224cee714610305578063b0d691fe14610325578063b61d27f61461035857600080fd5b80631d06d40d116100fc5780633a871cdd116100e15780633a871cdd1461029c57806347e1da2a146102ca5780634a58db19146102ea57600080fd5b80631d06d40d1461024f5780633659cfe61461027c57600080fd5b806223de291461013857806301ffc9a71461015f578063025e7c2714610194578063150b7a02146101d957600080fd5b3661013357005b600080fd5b34801561014457600080fd5b5061015d610153366004611b23565b5050505050505050565b005b34801561016b57600080fd5b5061017f61017a366004611bce565b610464565b60405190151581526020015b60405180910390f35b3480156101a057600080fd5b506101b46101af366004611c10565b610549565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200161018b565b3480156101e557600080fd5b5061021e6101f4366004611c29565b7f150b7a020000000000000000000000000000000000000000000000000000000095945050505050565b6040517fffffffff00000000000000000000000000000000000000000000000000000000909116815260200161018b565b34801561025b57600080fd5b5061026f61026a366004611dc8565b610580565b60405161018b9190611eec565b34801561028857600080fd5b5061015d610297366004611eff565b6105a9565b3480156102a857600080fd5b506102bc6102b7366004611f1a565b6105d0565b60405190815260200161018b565b3480156102d657600080fd5b5061015d6102e5366004611fb3565b6105f6565b61015d610899565b61015d61030036600461204d565b61093f565b34801561031157600080fd5b5061015d61032036600461209b565b610958565b34801561033157600080fd5b507f00000000000000000000000000000000000000000000000000000000000000006101b4565b34801561036457600080fd5b5061015d610373366004612133565b610a77565b34801561038457600080fd5b5061021e61039336600461218d565b7fbc197c810000000000000000000000000000000000000000000000000000000098975050505050505050565b3480156103cc57600080fd5b506102bc610bc3565b3480156103e157600080fd5b506101b47f000000000000000000000000000000000000000000000000000000000000000081565b34801561041557600080fd5b506102bc610c7a565b34801561042a57600080fd5b5061021e610439366004612227565b7ff23a6e61000000000000000000000000000000000000000000000000000000009695505050505050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f150b7a020000000000000000000000000000000000000000000000000000000014806104f757507fffffffff0000000000000000000000000000000000000000000000000000000082167f4e2312e000000000000000000000000000000000000000000000000000000000145b8061054357507fffffffff0000000000000000000000000000000000000000000000000000000082167f01ffc9a700000000000000000000000000000000000000000000000000000000145b92915050565b6001818154811061055957600080fd5b60009182526020909120015473ffffffffffffffffffffffffffffffffffffffff16905081565b606081604051602001610593919061228d565b6040516020818303038152906040529050919050565b6105b281610cf6565b6105cd81604051806020016040528060008152506000610dfb565b50565b60006105da611053565b6105e484846110f4565b90506105ef82611222565b9392505050565b3373ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016148061066f57503373ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016145b610700576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602b60248201527f6f6e6c7920656e74727920706f696e74206f722077616c6c657420666163746f60448201527f72792063616e2063616c6c00000000000000000000000000000000000000000060648201526084015b60405180910390fd5b848114610769576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601360248201527f77726f6e67206172726179206c656e677468730000000000000000000000000060448201526064016106f7565b8281146107d2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f77726f6e672076616c756573206c656e6774687300000000000000000000000060448201526064016106f7565b60005b858110156108905761087e8787838181106107f2576107f261230d565b90506020020160208101906108079190611eff565b8686848181106108195761081961230d565b905060200201358585858181106108325761083261230d565b9050602002810190610844919061233c565b8080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061128d92505050565b80610888816123a1565b9150506107d5565b50505050505050565b7f00000000000000000000000000000000000000000000000000000000000000006040517fb760faf900000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff919091169063b760faf99034906024016000604051808303818588803b15801561092457600080fd5b505af1158015610938573d6000803e3d6000fd5b5050505050565b61094882610cf6565b61095482826001610dfb565b5050565b600054610100900460ff1680610971575060005460ff16155b6109fd576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201527f647920696e697469616c697a656400000000000000000000000000000000000060648201526084016106f7565b600054610100900460ff16158015610a3c57600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000166101011790555b610a458261130a565b801561095457600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff1690555050565b3373ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000161480610af057503373ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016145b610b7c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602b60248201527f6f6e6c7920656e74727920706f696e74206f722077616c6c657420666163746f60448201527f72792063616e2063616c6c00000000000000000000000000000000000000000060648201526084016106f7565b610bbd848484848080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061128d92505050565b50505050565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016906370a08231906024015b602060405180830381865afa158015610c51573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c759190612400565b905090565b6040517f35567e1a0000000000000000000000000000000000000000000000000000000081523060048201526000602482018190529073ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016906335567e1a90604401610c34565b3373ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000161480610d6f57503373ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016145b6105cd576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602b60248201527f6f6e6c7920656e74727920706f696e74206f722077616c6c657420666163746f60448201527f72792063616e2063616c6c00000000000000000000000000000000000000000060648201526084016106f7565b6000610e3b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5473ffffffffffffffffffffffffffffffffffffffff1690565b9050610e46846113fa565b600083511180610e535750815b15610e6457610e6284846114ee565b505b7f4910fdfa16fed3260ed0e7147f7cc6da11a60208b5b9406d12a635614ffd9143805460ff166109385780547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016600117815560405173ffffffffffffffffffffffffffffffffffffffff83166024820152610f5a908690604401604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f3659cfe6000000000000000000000000000000000000000000000000000000001790526114ee565b5080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001681557f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5473ffffffffffffffffffffffffffffffffffffffff83811691161461104a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602f60248201527f45524331393637557067726164653a207570677261646520627265616b73206660448201527f757274686572207570677261646573000000000000000000000000000000000060648201526084016106f7565b61093885611513565b3373ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016146110f2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601c60248201527f6163636f756e743a206e6f742066726f6d20456e747279506f696e740000000060448201526064016106f7565b565b60008061114e836040517f19457468657265756d205369676e6564204d6573736167653a0a3332000000006020820152603c8101829052600090605c01604051602081830303815290604052805190602001209050919050565b9050600061116061014086018661233c565b81019061116d9190611dc8565b905060005b600154811015611216576111a88282815181106111915761119161230d565b60200260200101518461156090919063ffffffff16565b73ffffffffffffffffffffffffffffffffffffffff16600182815481106111d1576111d161230d565b60009182526020909120015473ffffffffffffffffffffffffffffffffffffffff16146112045760019350505050610543565b8061120e816123a1565b915050611172565b50600095945050505050565b80156105cd5760405160009033907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff90849084818181858888f193505050503d8060008114610938576040519150601f19603f3d011682016040523d82523d6000602084013e610938565b6000808473ffffffffffffffffffffffffffffffffffffffff1684846040516112b69190612419565b60006040518083038185875af1925050503d80600081146112f3576040519150601f19603f3d011682016040523d82523d6000602084013e6112f8565b606091505b50915091508161093857805160208201fd5b6000815111611375576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600960248201527f6e6f206f776e657273000000000000000000000000000000000000000000000060448201526064016106f7565b8051611388906001906020840190611a12565b507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff167f8afffd56adb385a94a6b7426d4e3f51e2f9de8984c19093c2ddccf8fcfddfe8d826040516113ef9190612435565b60405180910390a250565b803b611488576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201527f6f74206120636f6e74726163740000000000000000000000000000000000000060648201526084016106f7565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc80547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b60606105ef83836040518060600160405280602781526020016124906027913961161c565b61151c816113fa565b60405173ffffffffffffffffffffffffffffffffffffffff8216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b600081516041036115935760208201516040830151606084015160001a6115898682858561172e565b9350505050610543565b81516040036115ba57602082015160408301516115b1858383611986565b92505050610543565b6040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e6774680060448201526064016106f7565b6060833b6116ac576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f60448201527f6e7472616374000000000000000000000000000000000000000000000000000060648201526084016106f7565b6000808573ffffffffffffffffffffffffffffffffffffffff16856040516116d49190612419565b600060405180830381855af49150503d806000811461170f576040519150601f19603f3d011682016040523d82523d6000602084013e611714565b606091505b50915091506117248282866119bf565b9695505050505050565b60007f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a08211156117e0576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c60448201527f756500000000000000000000000000000000000000000000000000000000000060648201526084016106f7565b8360ff16601b14806117f557508360ff16601c145b611881576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202776272076616c60448201527f756500000000000000000000000000000000000000000000000000000000000060648201526084016106f7565b6040805160008082526020820180845288905260ff871692820192909252606081018590526080810184905260019060a0016020604051602081039080840390855afa1580156118d5573d6000803e3d6000fd5b50506040517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0015191505073ffffffffffffffffffffffffffffffffffffffff811661197d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f45434453413a20696e76616c6964207369676e6174757265000000000000000060448201526064016106f7565b95945050505050565b60007f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821660ff83901c601b016117248682878561172e565b606083156119ce5750816105ef565b8251156119de5782518084602001fd5b816040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106f79190611eec565b828054828255906000526020600020908101928215611a8c579160200282015b82811115611a8c57825182547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff909116178255602090920191600190910190611a32565b50611a98929150611a9c565b5090565b5b80821115611a985760008155600101611a9d565b803573ffffffffffffffffffffffffffffffffffffffff81168114611ad557600080fd5b919050565b60008083601f840112611aec57600080fd5b50813567ffffffffffffffff811115611b0457600080fd5b602083019150836020828501011115611b1c57600080fd5b9250929050565b60008060008060008060008060c0898b031215611b3f57600080fd5b611b4889611ab1565b9750611b5660208a01611ab1565b9650611b6460408a01611ab1565b955060608901359450608089013567ffffffffffffffff80821115611b8857600080fd5b611b948c838d01611ada565b909650945060a08b0135915080821115611bad57600080fd5b50611bba8b828c01611ada565b999c989b5096995094979396929594505050565b600060208284031215611be057600080fd5b81357fffffffff00000000000000000000000000000000000000000000000000000000811681146105ef57600080fd5b600060208284031215611c2257600080fd5b5035919050565b600080600080600060808688031215611c4157600080fd5b611c4a86611ab1565b9450611c5860208701611ab1565b935060408601359250606086013567ffffffffffffffff811115611c7b57600080fd5b611c8788828901611ada565b969995985093965092949392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff81118282101715611d0e57611d0e611c98565b604052919050565b600067ffffffffffffffff821115611d3057611d30611c98565b5060051b60200190565b600082601f830112611d4b57600080fd5b813567ffffffffffffffff811115611d6557611d65611c98565b611d9660207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f84011601611cc7565b818152846020838601011115611dab57600080fd5b816020850160208301376000918101602001919091529392505050565b60006020808385031215611ddb57600080fd5b823567ffffffffffffffff80821115611df357600080fd5b818501915085601f830112611e0757600080fd5b8135611e1a611e1582611d16565b611cc7565b81815260059190911b83018401908481019088831115611e3957600080fd5b8585015b83811015611e7157803585811115611e555760008081fd5b611e638b89838a0101611d3a565b845250918601918601611e3d565b5098975050505050505050565b60005b83811015611e99578181015183820152602001611e81565b50506000910152565b60008151808452611eba816020860160208601611e7e565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b6020815260006105ef6020830184611ea2565b600060208284031215611f1157600080fd5b6105ef82611ab1565b600080600060608486031215611f2f57600080fd5b833567ffffffffffffffff811115611f4657600080fd5b84016101608187031215611f5957600080fd5b95602085013595506040909401359392505050565b60008083601f840112611f8057600080fd5b50813567ffffffffffffffff811115611f9857600080fd5b6020830191508360208260051b8501011115611b1c57600080fd5b60008060008060008060608789031215611fcc57600080fd5b863567ffffffffffffffff80821115611fe457600080fd5b611ff08a838b01611f6e565b9098509650602089013591508082111561200957600080fd5b6120158a838b01611f6e565b9096509450604089013591508082111561202e57600080fd5b5061203b89828a01611f6e565b979a9699509497509295939492505050565b6000806040838503121561206057600080fd5b61206983611ab1565b9150602083013567ffffffffffffffff81111561208557600080fd5b61209185828601611d3a565b9150509250929050565b600060208083850312156120ae57600080fd5b823567ffffffffffffffff8111156120c557600080fd5b8301601f810185136120d657600080fd5b80356120e4611e1582611d16565b81815260059190911b8201830190838101908783111561210357600080fd5b928401925b828410156121285761211984611ab1565b82529284019290840190612108565b979650505050505050565b6000806000806060858703121561214957600080fd5b61215285611ab1565b935060208501359250604085013567ffffffffffffffff81111561217557600080fd5b61218187828801611ada565b95989497509550505050565b60008060008060008060008060a0898b0312156121a957600080fd5b6121b289611ab1565b97506121c060208a01611ab1565b9650604089013567ffffffffffffffff808211156121dd57600080fd5b6121e98c838d01611f6e565b909850965060608b013591508082111561220257600080fd5b61220e8c838d01611f6e565b909650945060808b0135915080821115611bad57600080fd5b60008060008060008060a0878903121561224057600080fd5b61224987611ab1565b955061225760208801611ab1565b94506040870135935060608701359250608087013567ffffffffffffffff81111561228157600080fd5b61203b89828a01611ada565b6000602080830181845280855180835260408601915060408160051b870101925083870160005b82811015612300577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc08886030184526122ee858351611ea2565b945092850192908501906001016122b4565b5092979650505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe184360301811261237157600080fd5b83018035915067ffffffffffffffff82111561238c57600080fd5b602001915036819003821315611b1c57600080fd5b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82036123f9577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b5060010190565b60006020828403121561241257600080fd5b5051919050565b6000825161242b818460208701611e7e565b9190910192915050565b6020808252825182820181905260009190848201906040850190845b8181101561248357835173ffffffffffffffffffffffffffffffffffffffff1683529284019291840191600101612451565b5090969550505050505056fe416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a264697066735822122031f6eef3ac86d98f98d57a8938e28d1c235d7ac68ea2eb09a7f7e5e54fd1fe4364736f6c63430008130033";

type WalletFactoryConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: WalletFactoryConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class WalletFactory__factory extends ContractFactory {
  constructor(...args: WalletFactoryConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    entryPoint: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(entryPoint, overrides || {});
  }
  override deploy(
    entryPoint: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(entryPoint, overrides || {}) as Promise<
      WalletFactory & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): WalletFactory__factory {
    return super.connect(runner) as WalletFactory__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): WalletFactoryInterface {
    return new Interface(_abi) as WalletFactoryInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): WalletFactory {
    return new Contract(address, _abi, runner) as unknown as WalletFactory;
  }
}
