var _0x1330=['append','domElement','PerspectiveCamera','Scene','add','fog','Fog','update','#debug-text','html','aspect','updateProjectionMatrix','setSize','emit','ready','scream','ontouchstart','#info-btn','click','#info-panel','toggle','#overlay','text','ABOUT','init','ajax','json','mp3/seq.json','onSequenceLoaded','play','resize','body','webkitRequestFullscreen','#play-btn','WebGLRenderer','innerWidth','innerHeight','setClearColor'];(function(_0x5498d7,_0x249577){var _0x47bccb=function(_0x5b6345){while(--_0x5b6345){_0x5498d7['push'](_0x5498d7['shift']());}};_0x47bccb(++_0x249577);}(_0x1330,0xf3));var _0x415f=function(_0x477d71,_0x327f13){_0x477d71=_0x477d71-0x0;var _0x9c58a2=_0x1330[_0x477d71];return _0x9c58a2;};var events=new Events();var snoise=new SimplexNoise();var SpliceMain=function(){var _0x1a487c=![];var _0x570fe3;var _0x287023;var _0x268c58;var _0x51808b;var _0x493e61;var _0x94398b=_0x415f('0x0');var _0x164838=![];function _0x4edfd0(){_0x1a487c=!!(_0x415f('0x1')in window);$(_0x415f('0x2'))[_0x415f('0x3')](function(){_0x164838=!_0x164838;$(_0x415f('0x4'))[_0x415f('0x5')]();$(_0x415f('0x6'))[_0x415f('0x5')]();$('#info-btn')[_0x415f('0x7')](_0x164838?'BACK':_0x415f('0x8'));});_0x26f7b8();AudioHandler[_0x415f('0x9')](_0x94398b);FXHandler[_0x415f('0x9')]();SequenceHandler[_0x415f('0x9')]();Stars[_0x415f('0x9')]();SkyBox[_0x415f('0x9')]();$[_0x415f('0xa')]({'type':'GET','dataType':_0x415f('0xb'),'url':_0x415f('0xc'),'success':SpliceViz[_0x415f('0xd')]});$('#play-btn')[_0x415f('0x3')](function(){AudioHandler[_0x415f('0xe')]();});$(window)[_0x415f('0xf')](_0x5d36e1);_0x5d36e1();_0x3da8bd();if(_0x1a487c){$(_0x415f('0x10'))[_0x415f('0x3')](function(){$(_0x415f('0x10'))[0x0][_0x415f('0x11')]();});}}function _0x247232(){TweenLite['to']($(_0x415f('0x12')),0.3,{'autoAlpha':0x0});}function _0x26f7b8(){_0x268c58=new THREE[(_0x415f('0x13'))]({});_0x268c58['setSize'](window[_0x415f('0x14')],window[_0x415f('0x15')]);_0x268c58[_0x415f('0x16')](0x0);_0x268c58['sortObjects']=![];$(_0x415f('0x10'))[_0x415f('0x17')](_0x268c58[_0x415f('0x18')]);_0x570fe3=new THREE[(_0x415f('0x19'))](0x4b,window['innerWidth']/window[_0x415f('0x15')],0x1,0x2710);_0x287023=new THREE[(_0x415f('0x1a'))]();_0x287023[_0x415f('0x1b')](_0x570fe3);_0x287023[_0x415f('0x1c')]=new THREE[(_0x415f('0x1d'))](0x0,0x0,0x4b0);_0x493e61=new THREE['Object3D']();_0x287023['add'](_0x493e61);}function _0x3da8bd(){events['emit'](_0x415f('0x1e'));requestAnimationFrame(_0x3da8bd);}function _0x110176(_0x32952e){$(_0x415f('0x1f'))[_0x415f('0x20')](_0x32952e);}function _0x5d36e1(){var _0x217231=window[_0x415f('0x14')];var _0x2ffec4=window[_0x415f('0x15')];_0x570fe3[_0x415f('0x21')]=_0x217231/_0x2ffec4;_0x570fe3[_0x415f('0x22')]();_0x268c58[_0x415f('0x23')](_0x217231,_0x2ffec4);events[_0x415f('0x24')](_0x415f('0xf'));}return{'init':_0x4edfd0,'trace':_0x110176,'getVizHolder':function(){return _0x493e61;},'getCamera':function(){return _0x570fe3;},'getScene':function(){return _0x287023;},'getRenderer':function(){return _0x268c58;},'getIsMobile':function(){return _0x1a487c;},'onPlay':_0x247232};}();$(document)[_0x415f('0x25')](function(){SpliceMain[_0x415f('0x9')]();});