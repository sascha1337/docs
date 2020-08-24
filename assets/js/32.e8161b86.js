(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{408:function(t,e,a){"use strict";a.r(e);var s=a(5),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"joining-a-network"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#joining-a-network"}},[t._v("#")]),t._v(" Joining a Network")]),t._v(" "),a("p",[t._v("After you've tried out running a simple local Terra network, you may want to participate in an existing Terra network, such as the Columbus mainnet or Soju testnet. This document will help you configure and set up your node for just that.")]),t._v(" "),a("h2",{attrs:{id:"setup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setup"}},[t._v("#")]),t._v(" Setup")]),t._v(" "),a("p",[t._v("These instructions are for setting up a brand new full node from scratch.")]),t._v(" "),a("h3",{attrs:{id:"initialize-and-configure-moniker"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#initialize-and-configure-moniker"}},[t._v("#")]),t._v(" Initialize and configure moniker")]),t._v(" "),a("p",[t._v("First, initialize the node and create the necessary config files:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("terrad init "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("your_custom_moniker"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("NOTE")]),t._v(" "),a("p",[t._v("Monikers can only contain ASCII characters; using Unicode characters will render your node unreachable by other peers in the network.")])]),t._v(" "),a("p",[t._v("You can edit this "),a("code",[t._v("moniker")]),t._v(" later, in the "),a("code",[t._v("~/.terrad/config/config.toml")]),t._v(" file:")]),t._v(" "),a("div",{staticClass:"language-toml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-toml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# A custom human readable name for this node")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key property"}},[t._v("moniker")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<your_custom_moniker>"')]),t._v("\n")])])]),a("h3",{attrs:{id:"set-minimum-gas-prices-for-transactions-recommended"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#set-minimum-gas-prices-for-transactions-recommended"}},[t._v("#")]),t._v(" Set minimum gas prices for transactions (recommended)")]),t._v(" "),a("p",[t._v("You can edit "),a("code",[t._v("~/.terrad/config/app.toml")]),t._v(" in order to enable anti-spam by rejecting incoming transactions with implied gas price less than a specified minimum:")]),t._v(" "),a("div",{staticClass:"language-toml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-toml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# The minimum gas prices a validator is willing to accept for processing a")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# transaction. A transaction's fees must meet the minimum of any denomination")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# specified in this config (e.g. 0.25token1,0.0001token2).")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key property"}},[t._v("minimum-gas-prices")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0.015ukrw,0.015uluna"')]),t._v("\n")])])]),a("p",[t._v("Your full node has now been initialized!")]),t._v(" "),a("h2",{attrs:{id:"picking-a-network"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#picking-a-network"}},[t._v("#")]),t._v(" Picking a Network")]),t._v(" "),a("p",[t._v("You specify the network you want to join by setting the "),a("strong",[t._v("genesis file")]),t._v(" and "),a("strong",[t._v("seeds")]),t._v(". If you need more information about past networks, check our "),a("a",{attrs:{href:"https://github.com/terra-project/networks",target:"_blank",rel:"noopener noreferrer"}},[t._v("Networks Repo"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Network")]),t._v(" "),a("th",[t._v("Description")]),t._v(" "),a("th"),t._v(" "),a("th")])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("columbus-3")])]),t._v(" "),a("td",[t._v("Mainnet")]),t._v(" "),a("td",[a("a",{attrs:{href:"https://columbus-genesis.s3-ap-northeast-1.amazonaws.com/genesis.json",target:"_blank",rel:"noopener noreferrer"}},[t._v("genesis"),a("OutboundLink")],1)]),t._v(" "),a("td",[a("a",{attrs:{href:"https://network.terra.dev/addrbook.json",target:"_blank",rel:"noopener noreferrer"}},[t._v("address book"),a("OutboundLink")],1)])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("soju-0014")])]),t._v(" "),a("td",[t._v("Columbus-3 Testnet")]),t._v(" "),a("td",[a("a",{attrs:{href:"https://raw.githubusercontent.com/terra-project/networks/master/soju-0014/genesis.json",target:"_blank",rel:"noopener noreferrer"}},[t._v("genesis"),a("OutboundLink")],1)]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[a("code",[t._v("tequila-0001")])]),t._v(" "),a("td",[t._v("Columbus-4 Testnet")]),t._v(" "),a("td",[a("a",{attrs:{href:"https://raw.githubusercontent.com/terra-project/networks/master/tequila-0001/genesis.json",target:"_blank",rel:"noopener noreferrer"}},[t._v("genesis"),a("OutboundLink")],1)]),t._v(" "),a("td")])])]),t._v(" "),a("h3",{attrs:{id:"download-the-genesis-file"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#download-the-genesis-file"}},[t._v("#")]),t._v(" Download the genesis file")]),t._v(" "),a("p",[t._v("You'll need to select the network you want to join and download its "),a("code",[t._v("genesis.json")]),t._v(" file into your "),a("code",[t._v("~/.terrad/config")]),t._v(" directory. This file specifies the genesis account balances and parameters to use when replaying transactions and syncing.")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" -p ~/.terrad/config\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" https://columbus-genesis.s3-ap-northeast-1.amazonaws.com/genesis.json "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" ~/.terrad/config/genesis.json\n")])])]),a("p",[t._v("Note we use the "),a("code",[t._v("latest")]),t._v(" directory in the "),a("a",{attrs:{href:"https://github.com/terra-project/networks",target:"_blank",rel:"noopener noreferrer"}},[t._v("networks repo"),a("OutboundLink")],1),t._v(" which contains details for the latest testnet. If you are connecting to a different testnet, ensure you get the right files.")]),t._v(" "),a("p",[t._v("To verify the correctness of the configuration run:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("terrad start\n")])])]),a("h3",{attrs:{id:"download-address-book-recommended"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#download-address-book-recommended"}},[t._v("#")]),t._v(" Download address book (recommended)")]),t._v(" "),a("p",[t._v("If you have an address book of peers, download "),a("code",[t._v("addrbook.json")]),t._v(" and move it into "),a("code",[t._v("~/.terrad/config/addrbook.json")]),t._v(". This will give your node a selection of peers to dial to find other nodes.")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" https://network.terra.dev/addrbook.json "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" ~/.terrad/config/addrbook.json\n")])])]),a("h3",{attrs:{id:"define-seed-nodes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#define-seed-nodes"}},[t._v("#")]),t._v(" Define seed nodes")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("NOTE")]),t._v(" "),a("p",[t._v("For more information on seeds and peers, you can "),a("a",{attrs:{href:"https://github.com/tendermint/tendermint/blob/master/docs/tendermint-core/using-tendermint.md#peers",target:"_blank",rel:"noopener noreferrer"}},[t._v("read this"),a("OutboundLink")],1),t._v(".")])]),t._v(" "),a("p",[t._v("Your node needs to know how to find peers. You'll need to add healthy seed nodes to "),a("code",[t._v("~/.terrad/config/config.toml")]),t._v(". Below are some sample seeds provided by Block42, a Terra validator, taken from their excellent "),a("a",{attrs:{href:"https://medium.com/block42-blockchain-company/how-to-setup-a-terra-luna-validator-node-860d8ea7aea2",target:"_blank",rel:"noopener noreferrer"}},[t._v("validator setup guide"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("div",{staticClass:"language-toml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-toml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key property"}},[t._v("seeds")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"20271e0591a7204d72280b87fdaa854f50c55e7e@106.10.59.48:26656,3b1c85b86528d10acc5475cb2c874714a69fde1e@110.234.23.153:26656,49333a4cb195d570ea244dab675a38abf97011d2@13.113.103.57:26656,7f19128de85ced9b62c3947fd2c2db2064462533@52.68.3.126:26656"')]),t._v("\n")])])]),a("h2",{attrs:{id:"connecting-to-the-network"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#connecting-to-the-network"}},[t._v("#")]),t._v(" Connecting to the Network")]),t._v(" "),a("h3",{attrs:{id:"run-your-node"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#run-your-node"}},[t._v("#")]),t._v(" Run your node")]),t._v(" "),a("p",[t._v("Start the full node with this command:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("terrad start\n")])])]),a("p",[t._v("Check that everything is running smoothly:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("terracli status\n")])])]),a("h3",{attrs:{id:"wait-for-node-to-sync"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#wait-for-node-to-sync"}},[t._v("#")]),t._v(" Wait for node to sync")]),t._v(" "),a("p",[t._v("Your node should now be catching up with the network by replaying all the transactions from genesis and recreating the blockchain state locally. This will take a long time, so make sure you've set it up on a stable connection so you can leave while it syncs.")]),t._v(" "),a("p",[t._v("View the status of the network with the "),a("a",{attrs:{href:"https://finder.terra.money",target:"_blank",rel:"noopener noreferrer"}},[t._v("Terra Finder"),a("OutboundLink")],1),t._v(". Once your full node syncs up to the current block height, you should see it appear on the "),a("a",{attrs:{href:"https://terra.stake.id/",target:"_blank",rel:"noopener noreferrer"}},[t._v("list of full nodes"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("p",[t._v("Congratulations! You've now successfully joined a network as a full node operator.")]),t._v(" "),a("h3",{attrs:{id:"using-a-data-backup-optional"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using-a-data-backup-optional"}},[t._v("#")]),t._v(" Using a data backup (optional)")]),t._v(" "),a("p",[t._v("If you are connecting to an existing network for which you have a data backup (from a provider you trust), you can optionally load the backup into your node storage rather than syncing from scratch.")]),t._v(" "),a("p",[t._v("ChainLayer has generously provided node data backups for Columbus-3 mainnet, which you can find in their "),a("a",{attrs:{href:"https://terra.quicksync.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Terra QuickSync"),a("OutboundLink")],1),t._v(" page.")]),t._v(" "),a("h4",{attrs:{id:"example-using-quicksync"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example-using-quicksync"}},[t._v("#")]),t._v(" Example using QuickSync")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Stop Terra Daemon first")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" update -y\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("wget")]),t._v(" liblz4-tool aria2 -y\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("su")]),t._v(" - "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("terrauser"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" ~/.terrad/\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("FILENAME")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("columbus-3-pruned.DATE.TIME.tar.lz4\naria2c -x5 https://get.quicksync.io/"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$FILENAME")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("wget")]),t._v(" https://raw.githubusercontent.com/chainlayer/quicksync-playbooks/master/roles/quicksync/files/checksum.sh\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("wget")]),t._v(" https://get.quicksync.io/"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$FILENAME")]),t._v(".checksum\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Compare checksum with onchain version. Hash can be found at https://get.quicksync.io/columbus-3-pruned.DATE.TIME.tar.lz4.hash")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -s https://lcd.terra.dev/txs/"),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -s https://get.quicksync.io/$FILENAME.hash"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")])]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("jq -r "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'.tx.value.memo'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("sha512sum -c\n./checksum.sh "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$FILENAME")]),t._v("\nlz4 -d "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$FILENAME")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("tar")]),t._v(" xf -\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Start Terra Daemon")]),t._v("\nterrad start\n")])])]),a("h2",{attrs:{id:"appendix"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#appendix"}},[t._v("#")]),t._v(" Appendix")]),t._v(" "),a("h3",{attrs:{id:"upgrading-testnet"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#upgrading-testnet"}},[t._v("#")]),t._v(" Upgrading Testnet")]),t._v(" "),a("p",[t._v("These instructions are for full nodes that have ran on previous testnets and would like to upgrade to the latest testnet.")]),t._v(" "),a("h4",{attrs:{id:"reset-data"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#reset-data"}},[t._v("#")]),t._v(" Reset data")]),t._v(" "),a("p",[t._v("First, remove the outdated files and reset the data.")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("rm")]),t._v(" ~/.terrad/config/genesis.json\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("rm")]),t._v(" ~/.terrad/config/addrbook.json\nterrad unsafe-reset-all\n")])])]),a("p",[t._v("Your node is now in a pristine state while keeping the original "),a("code",[t._v("priv_validator.json")]),t._v(" and "),a("code",[t._v("config.toml")]),t._v(". If you had any sentry nodes or full nodes setup before, your node will still try to connect to them, but may fail if they haven't also been upgraded.")]),t._v(" "),a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[t._v("Make sure that every node has a unique "),a("code",[t._v("priv_validator.json")]),t._v(". Do not copy the "),a("code",[t._v("priv_validator.json")]),t._v(" from an old node to multiple new nodes. Running two nodes with the same "),a("code",[t._v("priv_validator.json")]),t._v(" will cause you to double sign.")])]),t._v(" "),a("h4",{attrs:{id:"software-upgrade"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#software-upgrade"}},[t._v("#")]),t._v(" Software upgrade")]),t._v(" "),a("p",[t._v("Now it is time to upgrade the software. Go to the project directory, and run:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout master "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" pull\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v("\n")])])]),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("NOTE")]),t._v(" "),a("p",[t._v("If you have issues at this step, please check that you have the latest stable version of GO installed.")])]),t._v(" "),a("p",[t._v("Note we use "),a("code",[t._v("master")]),t._v(" here since it contains the latest stable release. See the "),a("a",{attrs:{href:"https://github.com/terra-project/networks",target:"_blank",rel:"noopener noreferrer"}},[t._v("testnet repo"),a("OutboundLink")],1),t._v(" for details on which version is needed for which testnet, and the "),a("a",{attrs:{href:"https://github.com/terra-project/core/releases",target:"_blank",rel:"noopener noreferrer"}},[t._v("Terra Core release page"),a("OutboundLink")],1),t._v(" for details on each release. Your full node has been cleanly upgraded!")]),t._v(" "),a("h3",{attrs:{id:"exporting-state"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#exporting-state"}},[t._v("#")]),t._v(" Exporting state")]),t._v(" "),a("p",[t._v("Terra can dump the entire application state to a JSON file, which could be useful for manual analysis and can also be used as the genesis file of a new network.")]),t._v(" "),a("p",[t._v("Export state with:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("terrad "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("filename"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(".json\n")])])]),a("p",[t._v("You can also export state from a particular height (at the end of processing the block of that height):")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("terrad "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" --height "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("height"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("filename"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(".json\n")])])]),a("p",[t._v("If you plan to start a new network from the exported state, export with the "),a("code",[t._v("--for-zero-height")]),t._v(" flag:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("terrad "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" --height "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("height"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" --for-zero-height "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("filename"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(".json\n")])])])])}),[],!1,null,null,null);e.default=n.exports}}]);