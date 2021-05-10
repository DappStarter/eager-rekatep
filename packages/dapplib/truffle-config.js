require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace arctic sun tone strong crawl pulse company grace light army gas'; 
let testAccounts = [
"0xc3161d619cd3f87ac60277eb74ae884828aa846d0dd59c823efdd0db356f5be6",
"0x6d6590d2a2657c930bc3aa69a540542c50033751196263dfe25045b3cfe91858",
"0xba1255e8cb00b99571a6ef273ac324f3bf362b1698ab2a8b70ff526e4bcc1c8d",
"0xcd69cc33e464c1631450455de03328b24a7f8575222efd5490f1517b799f4bc5",
"0x91b606044b276dc99471114315055975d61f9a5e67b0dbbe370f6c8e48d28cbe",
"0x28bdd746d666f54c8865d3505defa2a6decd08544d2718331c2349d689b6d300",
"0x6d8c042e2599a6881c19b2bc46e85bcdfc467d30a83ab5beef28fba4fbcb33f8",
"0xf4ac050563e2a898f7b9478b3d374fe51bfd77a442af498b55e181385af6f8e1",
"0xe1f9b75e9d31d1d90b7998cad1541846443e34cc97e1b9a37f5c1ff0e96a1a83",
"0xc8b15a8a5d12b163c203e03482c087ef4fee31e37659bdb76bf78cb106f7166b"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
