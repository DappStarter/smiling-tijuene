require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/lib/wallet-provider');


let mnemonic = 'inflict hero force spot toy note spider coil install clock off genius'; 
let testAccounts = [
"0xcd33e21e1309c5dc93c234d27de3bdd0c93aab5c3bc462be44b8f9bcab138b8c",
"0xffa3a30f32b2831fcb096bedd995e57de06b41672f4d1f343dfbf11cd7ed3bec",
"0x861b62cd69ee461102b992666ea7e1a0cf2d31422c1c2d2882752685346361ea",
"0xe6461ddccb6386132cfc6a34b618c1824f508c56b899e69b0b674b75b549abb3",
"0x020c20776032c77f38587231eba5da63c2360060ac9abfc6b5fc6bde6fc2124b",
"0x61ba13f3eadd5b25441d7953f926ea12301018defecca711d819d77f8e3d2596",
"0xc6165da06d3bacb999e8591233b0a133e5038155708aa3048786f8d251c5faa0",
"0x68c6120099ef6053ff84b2af496824e7b1be0cf757d4be1be5acd93680d387bc",
"0x5eccbf80fec355a5e5327075c02e252559e77c8a308bfc7f201745aee26fbe1d",
"0x44067a3c0013d29373d29a6fe46f156c9151e76c5e71a4dffdf01dca16bf4463"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

