(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{419:function(a,t,e){"use strict";e.r(t);var s=e(5),r=Object(s.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"staking"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#staking"}},[a._v("#")]),a._v(" Staking")]),a._v(" "),e("h2",{attrs:{id:"set-up-a-validator"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#set-up-a-validator"}},[a._v("#")]),a._v(" Set up a Validator")]),a._v(" "),e("p",[a._v("Please refer to the "),e("RouterLink",{attrs:{to:"/terracli/validator-getting-started.html"}},[a._v("Validator Setup")]),a._v(" section for a more complete guide on how to set up a validator-candidate.")],1),a._v(" "),e("h2",{attrs:{id:"delegate-to-a-validator"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#delegate-to-a-validator"}},[a._v("#")]),a._v(" Delegate to a Validator")]),a._v(" "),e("p",[a._v("On the upcoming mainnet, you can delegate LUNA to a validator. These "),e("RouterLink",{attrs:{to:"/terracli/validator-faq.html"}},[a._v("delegators")]),a._v(" can receive part of the validator's fee revenue.")],1),a._v(" "),e("h2",{attrs:{id:"query-validators"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#query-validators"}},[a._v("#")]),a._v(" Query Validators")]),a._v(" "),e("p",[a._v("You can query the list of all validators of a specific chain:")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("terracli query staking validators\n")])])]),e("p",[a._v("If you want to get the information of a single validator you can check it with:")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("terracli query staking validator "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("account_terraval"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),e("h2",{attrs:{id:"bond-tokens"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#bond-tokens"}},[a._v("#")]),a._v(" Bond Tokens")]),a._v(" "),e("p",[a._v("On the testnet, we delegate LUNA. Here's how you can bond tokens to a testnet validator:")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("terracli tx staking delegate "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("validator"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    10000000uluna "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    --from"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("key_name"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    --chain-id"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("chain_id"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),e("p",[e("code",[a._v("<validator>")]),a._v(" is the operator address of the validator to which you intend to delegate. If you are running a local testnet, you can find this with:")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("terracli keys show "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("name"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" --bech val\n")])])]),e("p",[a._v("where "),e("code",[a._v("<name>")]),a._v(" is the name of the key you specified when you initialized "),e("code",[a._v("terrad")]),a._v(".")]),a._v(" "),e("p",[a._v("While tokens are bonded, they are pooled with all the other bonded tokens in the network. Validators and delegators obtain a percentage of shares that equal their stake in this pool.")]),a._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[a._v("TIP")]),a._v(" "),e("p",[a._v("Don't use more LUNA than you have! You can always get more by using the "),e("a",{attrs:{href:"https://faucet.terra.money/",target:"_blank",rel:"noopener noreferrer"}},[a._v("Faucet"),e("OutboundLink")],1),a._v("!")])]),a._v(" "),e("h2",{attrs:{id:"query-delegations"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#query-delegations"}},[a._v("#")]),a._v(" Query Delegations")]),a._v(" "),e("p",[a._v("Once submitted a delegation to a validator, you can see it's information by using the following command:")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("terracli query staking delegation "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("delegator_address"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("validator_address"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),e("p",[a._v("Or if you want to check all your current delegations with distinct validators:")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("terracli query staking delegations "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("delegator_address"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),e("p",[a._v("You can also get previous delegation(s) status by adding the "),e("code",[a._v("--height")]),a._v(" flag.")]),a._v(" "),e("h2",{attrs:{id:"unbond-tokens"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#unbond-tokens"}},[a._v("#")]),a._v(" Unbond Tokens")]),a._v(" "),e("p",[a._v("If for any reason the validator misbehaves, or you just want to unbond a certain\namount of tokens, use this following command.")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("terracli tx staking unbond "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("validator_address"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  100uluna "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  --from"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("key_name"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  --chain-id"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("chain_id"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),e("p",[a._v("The unbonding will be automatically completed when the unbonding period has passed.")]),a._v(" "),e("h2",{attrs:{id:"query-unbonding-delegations"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#query-unbonding-delegations"}},[a._v("#")]),a._v(" Query Unbonding-Delegations")]),a._v(" "),e("p",[a._v("Once you begin an unbonding-delegation, you can see it's information by using the following command:")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("terracli query staking unbonding-delegation "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("delegator_address"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("validator_address"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),e("p",[a._v("Or if you want to check all your current unbonding-delegations with disctinct validators:")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("terracli query staking unbonding-delegations "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("account_terra"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),e("p",[a._v("Additionally, as you can get all the unbonding-delegations from a particular validator:")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("terracli query staking unbonding-delegations-from "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("account_terraval"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),e("p",[a._v("To get previous unbonding-delegation(s) status on past blocks, try adding the "),e("code",[a._v("--height")]),a._v(" flag.")]),a._v(" "),e("h2",{attrs:{id:"redelegate-tokens"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#redelegate-tokens"}},[a._v("#")]),a._v(" Redelegate Tokens")]),a._v(" "),e("p",[a._v("A redelegation is a type delegation that allows you to bond illiquid tokens from one validator to another:")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("terracli tx staking redelegate "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("src validator address"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("dst validator address"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("amount"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    --from"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("key_name"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    --chain-id"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("chain_id"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),e("p",[a._v("The redelegation will be automatically completed when the unbonding period has passed.")]),a._v(" "),e("h2",{attrs:{id:"query-redelegations"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#query-redelegations"}},[a._v("#")]),a._v(" Query Redelegations")]),a._v(" "),e("p",[a._v("Once you begin an redelegation, you can see it's information by using the following command:")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("terracli query staking redelegation "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("delegator_address"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("src_val_addr"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("dst_val_addr"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),e("p",[a._v("Or if you want to check all your current unbonding-delegations with distinct validators:")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("terracli query staking redelegations "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("account_terra"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),e("p",[a._v("Additionally, as you can get all the outgoing redelegations from a particular validator:")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("terracli query staking redelegations-from "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("account_terraval"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),e("p",[a._v("To get previous redelegation(s) status on past blocks, try adding the "),e("code",[a._v("--height")]),a._v(" flag.")]),a._v(" "),e("h2",{attrs:{id:"query-parameters"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#query-parameters"}},[a._v("#")]),a._v(" Query Parameters")]),a._v(" "),e("p",[a._v("Parameters define high level settings for staking. You can get the current values by using:")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("terracli query staking params\n")])])]),e("p",[a._v("With the above command you will get the values for:")]),a._v(" "),e("ul",[e("li",[a._v("Unbonding time")]),a._v(" "),e("li",[a._v("Maximum numbers of validators")]),a._v(" "),e("li",[a._v("Coin denomination for staking")])]),a._v(" "),e("p",[a._v("All these values will be subject to updates though a "),e("code",[a._v("governance")]),a._v(" process by "),e("code",[a._v("ParameterChange")]),a._v(" proposals.")]),a._v(" "),e("h2",{attrs:{id:"query-pool"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#query-pool"}},[a._v("#")]),a._v(" Query Pool")]),a._v(" "),e("p",[a._v("A staking "),e("code",[a._v("Pool")]),a._v(" defines the dynamic parameters of the current state. You can query them with the following command:")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("terracli query staking pool\n")])])]),e("p",[a._v("With the "),e("code",[a._v("pool")]),a._v(" command you will get the values for:")]),a._v(" "),e("ul",[e("li",[a._v("Not-bonded and bonded tokens")]),a._v(" "),e("li",[a._v("Token supply")]),a._v(" "),e("li",[a._v("Current annual inflation and the block in which the last inflation was processed")]),a._v(" "),e("li",[a._v("Last recorded bonded shares")])]),a._v(" "),e("h2",{attrs:{id:"query-delegations-to-validator"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#query-delegations-to-validator"}},[a._v("#")]),a._v(" Query Delegations To Validator")]),a._v(" "),e("p",[a._v("You can also query all of the delegations to a particular validator:")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("terracli query delegations-to "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("account_terraval"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);