'use strict';

const os = require('os');

console.log('os.arch()', os.arch()); // x64

console.log('os.endianness()', os.endianness()); // LE

console.log('os.freemem()', os.freemem()); // 8559562752

console.log('os.homedir()', os.homedir()); // /home/andrii

console.log('os.hostname()', os.hostname()); // andrii-pc

console.log('os.loadavg()', os.loadavg()); // [ 0.62060546875, 0.84326171875, 0.71337890625 ]

console.log('os.networkInterfaces()', os.networkInterfaces());  /*
{ lo:
   [ { address: '127.0.0.1',
       netmask: '255.0.0.0',
       family: 'IPv4',
       mac: '00:00:00:00:00:00',
       internal: true,
       cidr: '127.0.0.1/8' },
     { address: '::1',
       netmask: 'ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff',
       family: 'IPv6',
       mac: '00:00:00:00:00:00',
       scopeid: 0,
       internal: true,
       cidr: '::1/128' } ],
  enp4s0:
   [ { address: '192.168.0.107',
       netmask: '255.255.255.0',
       family: 'IPv4',
       mac: '60:45:cb:82:00:4a',
       internal: false,
       cidr: '192.168.0.107/24' },
     { address: 'fe80::c78b:5d92:d4b6:18af',
       netmask: 'ffff:ffff:ffff:ffff::',
       family: 'IPv6',
       mac: '60:45:cb:82:00:4a',
       scopeid: 2,
       internal: false,
       cidr: 'fe80::c78b:5d92:d4b6:18af/64' } ] }
*/

console.log('os.platform()', os.platform()); // linux

console.log('os.release()', os.release()); // 5.4.0-52-generic

console.log('os.tmpdir()', os.tmpdir()); // /tmp

console.log('os.totalmem()', os.totalmem()); // 16734515200

console.log('os.type()', os.type()); // Linux

console.log('os.userInfo()', os.userInfo());  /*
    {
        uid: 1000,
        gid: 1000,
        username: 'andrii',
        homedir: '/home/andrii',
        shell: '/bin/bash'
    }
*/
