var _0x2387=['perm','simplex','prototype','dot','dot3','noise','sqrt','noise3d','noise4d','dot4','grad3','grad4','floor'];(function(_0x10d21f,_0x3333af){var _0x3924c0=function(_0x178fa2){while(--_0x178fa2){_0x10d21f['push'](_0x10d21f['shift']());}};_0x3924c0(++_0x3333af);}(_0x2387,0x7f));var _0x19cc=function(_0x458d88,_0x5798e7){_0x458d88=_0x458d88-0x0;var _0x482657=_0x2387[_0x458d88];return _0x482657;};var SimplexNoise=function(_0xa7c44){if(_0xa7c44==undefined)_0xa7c44=Math;this[_0x19cc('0x0')]=[[0x1,0x1,0x0],[-0x1,0x1,0x0],[0x1,-0x1,0x0],[-0x1,-0x1,0x0],[0x1,0x0,0x1],[-0x1,0x0,0x1],[0x1,0x0,-0x1],[-0x1,0x0,-0x1],[0x0,0x1,0x1],[0x0,-0x1,0x1],[0x0,0x1,-0x1],[0x0,-0x1,-0x1]];this[_0x19cc('0x1')]=[[0x0,0x1,0x1,0x1],[0x0,0x1,0x1,-0x1],[0x0,0x1,-0x1,0x1],[0x0,0x1,-0x1,-0x1],[0x0,-0x1,0x1,0x1],[0x0,-0x1,0x1,-0x1],[0x0,-0x1,-0x1,0x1],[0x0,-0x1,-0x1,-0x1],[0x1,0x0,0x1,0x1],[0x1,0x0,0x1,-0x1],[0x1,0x0,-0x1,0x1],[0x1,0x0,-0x1,-0x1],[-0x1,0x0,0x1,0x1],[-0x1,0x0,0x1,-0x1],[-0x1,0x0,-0x1,0x1],[-0x1,0x0,-0x1,-0x1],[0x1,0x1,0x0,0x1],[0x1,0x1,0x0,-0x1],[0x1,-0x1,0x0,0x1],[0x1,-0x1,0x0,-0x1],[-0x1,0x1,0x0,0x1],[-0x1,0x1,0x0,-0x1],[-0x1,-0x1,0x0,0x1],[-0x1,-0x1,0x0,-0x1],[0x1,0x1,0x1,0x0],[0x1,0x1,-0x1,0x0],[0x1,-0x1,0x1,0x0],[0x1,-0x1,-0x1,0x0],[-0x1,0x1,0x1,0x0],[-0x1,0x1,-0x1,0x0],[-0x1,-0x1,0x1,0x0],[-0x1,-0x1,-0x1,0x0]];this['p']=[];for(var _0x130ba0=0x0;_0x130ba0<0x100;_0x130ba0++){this['p'][_0x130ba0]=Math[_0x19cc('0x2')](_0xa7c44['random']()*0x100);}this[_0x19cc('0x3')]=[];for(var _0x130ba0=0x0;_0x130ba0<0x200;_0x130ba0++){this[_0x19cc('0x3')][_0x130ba0]=this['p'][_0x130ba0&0xff];}this[_0x19cc('0x4')]=[[0x0,0x1,0x2,0x3],[0x0,0x1,0x3,0x2],[0x0,0x0,0x0,0x0],[0x0,0x2,0x3,0x1],[0x0,0x0,0x0,0x0],[0x0,0x0,0x0,0x0],[0x0,0x0,0x0,0x0],[0x1,0x2,0x3,0x0],[0x0,0x2,0x1,0x3],[0x0,0x0,0x0,0x0],[0x0,0x3,0x1,0x2],[0x0,0x3,0x2,0x1],[0x0,0x0,0x0,0x0],[0x0,0x0,0x0,0x0],[0x0,0x0,0x0,0x0],[0x1,0x3,0x2,0x0],[0x0,0x0,0x0,0x0],[0x0,0x0,0x0,0x0],[0x0,0x0,0x0,0x0],[0x0,0x0,0x0,0x0],[0x0,0x0,0x0,0x0],[0x0,0x0,0x0,0x0],[0x0,0x0,0x0,0x0],[0x0,0x0,0x0,0x0],[0x1,0x2,0x0,0x3],[0x0,0x0,0x0,0x0],[0x1,0x3,0x0,0x2],[0x0,0x0,0x0,0x0],[0x0,0x0,0x0,0x0],[0x0,0x0,0x0,0x0],[0x2,0x3,0x0,0x1],[0x2,0x3,0x1,0x0],[0x1,0x0,0x2,0x3],[0x1,0x0,0x3,0x2],[0x0,0x0,0x0,0x0],[0x0,0x0,0x0,0x0],[0x0,0x0,0x0,0x0],[0x2,0x0,0x3,0x1],[0x0,0x0,0x0,0x0],[0x2,0x1,0x3,0x0],[0x0,0x0,0x0,0x0],[0x0,0x0,0x0,0x0],[0x0,0x0,0x0,0x0],[0x0,0x0,0x0,0x0],[0x0,0x0,0x0,0x0],[0x0,0x0,0x0,0x0],[0x0,0x0,0x0,0x0],[0x0,0x0,0x0,0x0],[0x2,0x0,0x1,0x3],[0x0,0x0,0x0,0x0],[0x0,0x0,0x0,0x0],[0x0,0x0,0x0,0x0],[0x3,0x0,0x1,0x2],[0x3,0x0,0x2,0x1],[0x0,0x0,0x0,0x0],[0x3,0x1,0x2,0x0],[0x2,0x1,0x0,0x3],[0x0,0x0,0x0,0x0],[0x0,0x0,0x0,0x0],[0x0,0x0,0x0,0x0],[0x3,0x1,0x0,0x2],[0x0,0x0,0x0,0x0],[0x3,0x2,0x0,0x1],[0x3,0x2,0x1,0x0]];};SimplexNoise[_0x19cc('0x5')][_0x19cc('0x6')]=function(_0x24a074,_0x4f95a1,_0x127046){return _0x24a074[0x0]*_0x4f95a1+_0x24a074[0x1]*_0x127046;};SimplexNoise['prototype'][_0x19cc('0x7')]=function(_0xf7c42c,_0xeddd85,_0x1011cc,_0x52ddf3){return _0xf7c42c[0x0]*_0xeddd85+_0xf7c42c[0x1]*_0x1011cc+_0xf7c42c[0x2]*_0x52ddf3;};SimplexNoise[_0x19cc('0x5')]['dot4']=function(_0x54c6c7,_0x3bdaca,_0x3f52de,_0x754948,_0x48d8ae){return _0x54c6c7[0x0]*_0x3bdaca+_0x54c6c7[0x1]*_0x3f52de+_0x54c6c7[0x2]*_0x754948+_0x54c6c7[0x3]*_0x48d8ae;};SimplexNoise[_0x19cc('0x5')][_0x19cc('0x8')]=function(_0x2a48e7,_0x2bf9b3){var _0xe39e64,_0x24e23f,_0x11493c;var _0x8c14b0=0.5*(Math[_0x19cc('0x9')](0x3)-0x1);var _0x2dccad=(_0x2a48e7+_0x2bf9b3)*_0x8c14b0;var _0x39700b=Math[_0x19cc('0x2')](_0x2a48e7+_0x2dccad);var _0x514738=Math[_0x19cc('0x2')](_0x2bf9b3+_0x2dccad);var _0x1ce36b=(0x3-Math[_0x19cc('0x9')](0x3))/0x6;var _0x41d2e5=(_0x39700b+_0x514738)*_0x1ce36b;var _0x1a850e=_0x39700b-_0x41d2e5;var _0x282ef4=_0x514738-_0x41d2e5;var _0x763173=_0x2a48e7-_0x1a850e;var _0x1d0e99=_0x2bf9b3-_0x282ef4;var _0x583035,_0x39eb95;if(_0x763173>_0x1d0e99){_0x583035=0x1;_0x39eb95=0x0;}else{_0x583035=0x0;_0x39eb95=0x1;}var _0x55b35a=_0x763173-_0x583035+_0x1ce36b;var _0x259f67=_0x1d0e99-_0x39eb95+_0x1ce36b;var _0x5456a2=_0x763173-0x1+0x2*_0x1ce36b;var _0x2e973e=_0x1d0e99-0x1+0x2*_0x1ce36b;var _0x1152b8=_0x39700b&0xff;var _0x416d4c=_0x514738&0xff;var _0xc5ba63=this[_0x19cc('0x3')][_0x1152b8+this[_0x19cc('0x3')][_0x416d4c]]%0xc;var _0x17b66b=this['perm'][_0x1152b8+_0x583035+this[_0x19cc('0x3')][_0x416d4c+_0x39eb95]]%0xc;var _0x15be56=this['perm'][_0x1152b8+0x1+this[_0x19cc('0x3')][_0x416d4c+0x1]]%0xc;var _0x1bf6a9=0.5-_0x763173*_0x763173-_0x1d0e99*_0x1d0e99;if(_0x1bf6a9<0x0)_0xe39e64=0x0;else{_0x1bf6a9*=_0x1bf6a9;_0xe39e64=_0x1bf6a9*_0x1bf6a9*this[_0x19cc('0x6')](this['grad3'][_0xc5ba63],_0x763173,_0x1d0e99);}var _0x3e828f=0.5-_0x55b35a*_0x55b35a-_0x259f67*_0x259f67;if(_0x3e828f<0x0)_0x24e23f=0x0;else{_0x3e828f*=_0x3e828f;_0x24e23f=_0x3e828f*_0x3e828f*this[_0x19cc('0x6')](this[_0x19cc('0x0')][_0x17b66b],_0x55b35a,_0x259f67);}var _0x28c325=0.5-_0x5456a2*_0x5456a2-_0x2e973e*_0x2e973e;if(_0x28c325<0x0)_0x11493c=0x0;else{_0x28c325*=_0x28c325;_0x11493c=_0x28c325*_0x28c325*this[_0x19cc('0x6')](this[_0x19cc('0x0')][_0x15be56],_0x5456a2,_0x2e973e);}return 0x46*(_0xe39e64+_0x24e23f+_0x11493c);};SimplexNoise['prototype'][_0x19cc('0xa')]=function(_0x73aeb6,_0x58748f,_0x75b5a0){var _0x28877a,_0x165a09,_0x5491b9,_0x46df27;var _0x49096f=0x1/0x3;var _0x3ab495=(_0x73aeb6+_0x58748f+_0x75b5a0)*_0x49096f;var _0x3b6fa3=Math[_0x19cc('0x2')](_0x73aeb6+_0x3ab495);var _0x296dab=Math[_0x19cc('0x2')](_0x58748f+_0x3ab495);var _0x3095ca=Math[_0x19cc('0x2')](_0x75b5a0+_0x3ab495);var _0x5d7e92=0x1/0x6;var _0xa003e8=(_0x3b6fa3+_0x296dab+_0x3095ca)*_0x5d7e92;var _0x3c3508=_0x3b6fa3-_0xa003e8;var _0x4648a2=_0x296dab-_0xa003e8;var _0x7cc7a8=_0x3095ca-_0xa003e8;var _0x5c6ef4=_0x73aeb6-_0x3c3508;var _0x57f171=_0x58748f-_0x4648a2;var _0x1f3cad=_0x75b5a0-_0x7cc7a8;var _0x32f0db,_0x58d7d9,_0x44f9c9;var _0x515288,_0x5ec8ce,_0x2ba1f4;if(_0x5c6ef4>=_0x57f171){if(_0x57f171>=_0x1f3cad){_0x32f0db=0x1;_0x58d7d9=0x0;_0x44f9c9=0x0;_0x515288=0x1;_0x5ec8ce=0x1;_0x2ba1f4=0x0;}else if(_0x5c6ef4>=_0x1f3cad){_0x32f0db=0x1;_0x58d7d9=0x0;_0x44f9c9=0x0;_0x515288=0x1;_0x5ec8ce=0x0;_0x2ba1f4=0x1;}else{_0x32f0db=0x0;_0x58d7d9=0x0;_0x44f9c9=0x1;_0x515288=0x1;_0x5ec8ce=0x0;_0x2ba1f4=0x1;}}else{if(_0x57f171<_0x1f3cad){_0x32f0db=0x0;_0x58d7d9=0x0;_0x44f9c9=0x1;_0x515288=0x0;_0x5ec8ce=0x1;_0x2ba1f4=0x1;}else if(_0x5c6ef4<_0x1f3cad){_0x32f0db=0x0;_0x58d7d9=0x1;_0x44f9c9=0x0;_0x515288=0x0;_0x5ec8ce=0x1;_0x2ba1f4=0x1;}else{_0x32f0db=0x0;_0x58d7d9=0x1;_0x44f9c9=0x0;_0x515288=0x1;_0x5ec8ce=0x1;_0x2ba1f4=0x0;}}var _0x2a0322=_0x5c6ef4-_0x32f0db+_0x5d7e92;var _0x184d01=_0x57f171-_0x58d7d9+_0x5d7e92;var _0xb66096=_0x1f3cad-_0x44f9c9+_0x5d7e92;var _0x373d99=_0x5c6ef4-_0x515288+0x2*_0x5d7e92;var _0x535e91=_0x57f171-_0x5ec8ce+0x2*_0x5d7e92;var _0x1d67c2=_0x1f3cad-_0x2ba1f4+0x2*_0x5d7e92;var _0x28681d=_0x5c6ef4-0x1+0x3*_0x5d7e92;var _0x4fa9ae=_0x57f171-0x1+0x3*_0x5d7e92;var _0xfa1435=_0x1f3cad-0x1+0x3*_0x5d7e92;var _0x18fb0c=_0x3b6fa3&0xff;var _0x941565=_0x296dab&0xff;var _0x2838ee=_0x3095ca&0xff;var _0x3fcf5c=this['perm'][_0x18fb0c+this[_0x19cc('0x3')][_0x941565+this['perm'][_0x2838ee]]]%0xc;var _0xd7e2b2=this['perm'][_0x18fb0c+_0x32f0db+this[_0x19cc('0x3')][_0x941565+_0x58d7d9+this[_0x19cc('0x3')][_0x2838ee+_0x44f9c9]]]%0xc;var _0x1a0b94=this[_0x19cc('0x3')][_0x18fb0c+_0x515288+this[_0x19cc('0x3')][_0x941565+_0x5ec8ce+this[_0x19cc('0x3')][_0x2838ee+_0x2ba1f4]]]%0xc;var _0x357305=this[_0x19cc('0x3')][_0x18fb0c+0x1+this[_0x19cc('0x3')][_0x941565+0x1+this[_0x19cc('0x3')][_0x2838ee+0x1]]]%0xc;var _0x481e26=0.6-_0x5c6ef4*_0x5c6ef4-_0x57f171*_0x57f171-_0x1f3cad*_0x1f3cad;if(_0x481e26<0x0)_0x28877a=0x0;else{_0x481e26*=_0x481e26;_0x28877a=_0x481e26*_0x481e26*this['dot3'](this[_0x19cc('0x0')][_0x3fcf5c],_0x5c6ef4,_0x57f171,_0x1f3cad);}var _0x220c3c=0.6-_0x2a0322*_0x2a0322-_0x184d01*_0x184d01-_0xb66096*_0xb66096;if(_0x220c3c<0x0)_0x165a09=0x0;else{_0x220c3c*=_0x220c3c;_0x165a09=_0x220c3c*_0x220c3c*this[_0x19cc('0x7')](this[_0x19cc('0x0')][_0xd7e2b2],_0x2a0322,_0x184d01,_0xb66096);}var _0x40d84a=0.6-_0x373d99*_0x373d99-_0x535e91*_0x535e91-_0x1d67c2*_0x1d67c2;if(_0x40d84a<0x0)_0x5491b9=0x0;else{_0x40d84a*=_0x40d84a;_0x5491b9=_0x40d84a*_0x40d84a*this[_0x19cc('0x7')](this[_0x19cc('0x0')][_0x1a0b94],_0x373d99,_0x535e91,_0x1d67c2);}var _0x577905=0.6-_0x28681d*_0x28681d-_0x4fa9ae*_0x4fa9ae-_0xfa1435*_0xfa1435;if(_0x577905<0x0)_0x46df27=0x0;else{_0x577905*=_0x577905;_0x46df27=_0x577905*_0x577905*this[_0x19cc('0x7')](this[_0x19cc('0x0')][_0x357305],_0x28681d,_0x4fa9ae,_0xfa1435);}return 0x20*(_0x28877a+_0x165a09+_0x5491b9+_0x46df27);};SimplexNoise[_0x19cc('0x5')][_0x19cc('0xb')]=function(_0x20e79e,_0x5eb330,_0x3e033d,_0x1ed90b){var _0x2b09bc=this[_0x19cc('0x1')];var _0x1be022=this[_0x19cc('0x4')];var _0x10a0b=this['perm'];var _0x32598e=(Math[_0x19cc('0x9')](0x5)-0x1)/0x4;var _0x1ec900=(0x5-Math[_0x19cc('0x9')](0x5))/0x14;var _0x13db45,_0x4d33e1,_0x137d5e,_0x3c690a,_0x4a7366;var _0x22f000=(_0x20e79e+_0x5eb330+_0x3e033d+_0x1ed90b)*_0x32598e;var _0x5a6557=Math[_0x19cc('0x2')](_0x20e79e+_0x22f000);var _0x4bd027=Math['floor'](_0x5eb330+_0x22f000);var _0x52f33e=Math['floor'](_0x3e033d+_0x22f000);var _0x2fb421=Math[_0x19cc('0x2')](_0x1ed90b+_0x22f000);var _0x5ac13f=(_0x5a6557+_0x4bd027+_0x52f33e+_0x2fb421)*_0x1ec900;var _0xc6e25c=_0x5a6557-_0x5ac13f;var _0x5eae1f=_0x4bd027-_0x5ac13f;var _0x130d64=_0x52f33e-_0x5ac13f;var _0x4e5151=_0x2fb421-_0x5ac13f;var _0x591b73=_0x20e79e-_0xc6e25c;var _0x55cab0=_0x5eb330-_0x5eae1f;var _0x51e949=_0x3e033d-_0x130d64;var _0x533375=_0x1ed90b-_0x4e5151;var _0x2cc02b=_0x591b73>_0x55cab0?0x20:0x0;var _0x3fed0f=_0x591b73>_0x51e949?0x10:0x0;var _0x212bd5=_0x55cab0>_0x51e949?0x8:0x0;var _0x568eb7=_0x591b73>_0x533375?0x4:0x0;var _0x389b5f=_0x55cab0>_0x533375?0x2:0x0;var _0x5649f8=_0x51e949>_0x533375?0x1:0x0;var _0x4ecf1b=_0x2cc02b+_0x3fed0f+_0x212bd5+_0x568eb7+_0x389b5f+_0x5649f8;var _0x1627e2,_0x2177dd,_0x5f357c,_0x2f45cf;var _0xbbb1bb,_0x59f34c,_0xb0b89,_0x9d29ed;var _0x19d187,_0x279766,_0x14d40f,_0xbb4989;_0x1627e2=_0x1be022[_0x4ecf1b][0x0]>=0x3?0x1:0x0;_0x2177dd=_0x1be022[_0x4ecf1b][0x1]>=0x3?0x1:0x0;_0x5f357c=_0x1be022[_0x4ecf1b][0x2]>=0x3?0x1:0x0;_0x2f45cf=_0x1be022[_0x4ecf1b][0x3]>=0x3?0x1:0x0;_0xbbb1bb=_0x1be022[_0x4ecf1b][0x0]>=0x2?0x1:0x0;_0x59f34c=_0x1be022[_0x4ecf1b][0x1]>=0x2?0x1:0x0;_0xb0b89=_0x1be022[_0x4ecf1b][0x2]>=0x2?0x1:0x0;_0x9d29ed=_0x1be022[_0x4ecf1b][0x3]>=0x2?0x1:0x0;_0x19d187=_0x1be022[_0x4ecf1b][0x0]>=0x1?0x1:0x0;_0x279766=_0x1be022[_0x4ecf1b][0x1]>=0x1?0x1:0x0;_0x14d40f=_0x1be022[_0x4ecf1b][0x2]>=0x1?0x1:0x0;_0xbb4989=_0x1be022[_0x4ecf1b][0x3]>=0x1?0x1:0x0;var _0x39c34d=_0x591b73-_0x1627e2+_0x1ec900;var _0x1cbcc2=_0x55cab0-_0x2177dd+_0x1ec900;var _0x232145=_0x51e949-_0x5f357c+_0x1ec900;var _0x4bc7f9=_0x533375-_0x2f45cf+_0x1ec900;var _0x51b4fd=_0x591b73-_0xbbb1bb+0x2*_0x1ec900;var _0x3a6213=_0x55cab0-_0x59f34c+0x2*_0x1ec900;var _0x1bb4de=_0x51e949-_0xb0b89+0x2*_0x1ec900;var _0x217f75=_0x533375-_0x9d29ed+0x2*_0x1ec900;var _0x2b73d7=_0x591b73-_0x19d187+0x3*_0x1ec900;var _0xb015b7=_0x55cab0-_0x279766+0x3*_0x1ec900;var _0x3557b6=_0x51e949-_0x14d40f+0x3*_0x1ec900;var _0x17aaae=_0x533375-_0xbb4989+0x3*_0x1ec900;var _0x222657=_0x591b73-0x1+0x4*_0x1ec900;var _0x46c01c=_0x55cab0-0x1+0x4*_0x1ec900;var _0x26d06a=_0x51e949-0x1+0x4*_0x1ec900;var _0x5ccc1b=_0x533375-0x1+0x4*_0x1ec900;var _0x412574=_0x5a6557&0xff;var _0x50519f=_0x4bd027&0xff;var _0x17a62c=_0x52f33e&0xff;var _0x3ea6c0=_0x2fb421&0xff;var _0x510c41=_0x10a0b[_0x412574+_0x10a0b[_0x50519f+_0x10a0b[_0x17a62c+_0x10a0b[_0x3ea6c0]]]]%0x20;var _0x1640c6=_0x10a0b[_0x412574+_0x1627e2+_0x10a0b[_0x50519f+_0x2177dd+_0x10a0b[_0x17a62c+_0x5f357c+_0x10a0b[_0x3ea6c0+_0x2f45cf]]]]%0x20;var _0x1e5e22=_0x10a0b[_0x412574+_0xbbb1bb+_0x10a0b[_0x50519f+_0x59f34c+_0x10a0b[_0x17a62c+_0xb0b89+_0x10a0b[_0x3ea6c0+_0x9d29ed]]]]%0x20;var _0x3b6b1f=_0x10a0b[_0x412574+_0x19d187+_0x10a0b[_0x50519f+_0x279766+_0x10a0b[_0x17a62c+_0x14d40f+_0x10a0b[_0x3ea6c0+_0xbb4989]]]]%0x20;var _0xfaf14f=_0x10a0b[_0x412574+0x1+_0x10a0b[_0x50519f+0x1+_0x10a0b[_0x17a62c+0x1+_0x10a0b[_0x3ea6c0+0x1]]]]%0x20;var _0x23237d=0.6-_0x591b73*_0x591b73-_0x55cab0*_0x55cab0-_0x51e949*_0x51e949-_0x533375*_0x533375;if(_0x23237d<0x0)_0x13db45=0x0;else{_0x23237d*=_0x23237d;_0x13db45=_0x23237d*_0x23237d*this[_0x19cc('0xc')](_0x2b09bc[_0x510c41],_0x591b73,_0x55cab0,_0x51e949,_0x533375);}var _0x365dae=0.6-_0x39c34d*_0x39c34d-_0x1cbcc2*_0x1cbcc2-_0x232145*_0x232145-_0x4bc7f9*_0x4bc7f9;if(_0x365dae<0x0)_0x4d33e1=0x0;else{_0x365dae*=_0x365dae;_0x4d33e1=_0x365dae*_0x365dae*this[_0x19cc('0xc')](_0x2b09bc[_0x1640c6],_0x39c34d,_0x1cbcc2,_0x232145,_0x4bc7f9);}var _0x77c85b=0.6-_0x51b4fd*_0x51b4fd-_0x3a6213*_0x3a6213-_0x1bb4de*_0x1bb4de-_0x217f75*_0x217f75;if(_0x77c85b<0x0)_0x137d5e=0x0;else{_0x77c85b*=_0x77c85b;_0x137d5e=_0x77c85b*_0x77c85b*this[_0x19cc('0xc')](_0x2b09bc[_0x1e5e22],_0x51b4fd,_0x3a6213,_0x1bb4de,_0x217f75);}var _0x669b1a=0.6-_0x2b73d7*_0x2b73d7-_0xb015b7*_0xb015b7-_0x3557b6*_0x3557b6-_0x17aaae*_0x17aaae;if(_0x669b1a<0x0)_0x3c690a=0x0;else{_0x669b1a*=_0x669b1a;_0x3c690a=_0x669b1a*_0x669b1a*this[_0x19cc('0xc')](_0x2b09bc[_0x3b6b1f],_0x2b73d7,_0xb015b7,_0x3557b6,_0x17aaae);}var _0x38e3a8=0.6-_0x222657*_0x222657-_0x46c01c*_0x46c01c-_0x26d06a*_0x26d06a-_0x5ccc1b*_0x5ccc1b;if(_0x38e3a8<0x0)_0x4a7366=0x0;else{_0x38e3a8*=_0x38e3a8;_0x4a7366=_0x38e3a8*_0x38e3a8*this[_0x19cc('0xc')](_0x2b09bc[_0xfaf14f],_0x222657,_0x46c01c,_0x26d06a,_0x5ccc1b);}return 0x1b*(_0x13db45+_0x4d33e1+_0x137d5e+_0x3c690a+_0x4a7366);};