function _0x3997(){const _0x40d93d=['mp4Audio','37014PFyKoK','119779GpKrEz','7mnhkqV','3129381qUkKJU','mp3','814961DLYuiq','send\x20?(.*)','jid','445hzxQAv','child_process','35774004uzeLPd','reply_message','downloadAndSaveMediaMessage','format','axios','readFileSync','8mNNsvd','quotedMessage','1610wWKnLG','11210840FPbSsf','Forwards\x20replied\x20message','../events','end','reply','sendMessage','get','2476491qKggkN','4qchSCC','../config','@adiwajshing/baileys','arraybuffer','data','audio','output.mp3'];_0x3997=function(){return _0x40d93d;};return _0x3997();}const _0x3ddfc2=_0x54cd;function _0x54cd(_0x14ac3d,_0x132267){const _0x3997b6=_0x3997();return _0x54cd=function(_0x54cdd8,_0xe1bcd7){_0x54cdd8=_0x54cdd8-0x165;let _0x16f4d8=_0x3997b6[_0x54cdd8];return _0x16f4d8;},_0x54cd(_0x14ac3d,_0x132267);}(function(_0x3c0d6b,_0x46c9db){const _0x54f931=_0x54cd,_0x2a4bb9=_0x3c0d6b();while(!![]){try{const _0x4217a9=-parseInt(_0x54f931(0x170))/0x1*(parseInt(_0x54f931(0x186))/0x2)+-parseInt(_0x54f931(0x185))/0x3*(parseInt(_0x54f931(0x17b))/0x4)+-parseInt(_0x54f931(0x173))/0x5*(-parseInt(_0x54f931(0x16b))/0x6)+-parseInt(_0x54f931(0x16d))/0x7*(parseInt(_0x54f931(0x17e))/0x8)+parseInt(_0x54f931(0x16e))/0x9+-parseInt(_0x54f931(0x17d))/0xa*(-parseInt(_0x54f931(0x16c))/0xb)+parseInt(_0x54f931(0x175))/0xc;if(_0x4217a9===_0x46c9db)break;else _0x2a4bb9['push'](_0x2a4bb9['shift']());}catch(_0x4bfe5a){_0x2a4bb9['push'](_0x2a4bb9['shift']());}}}(_0x3997,0xe7a27));const Raganork=require(_0x3ddfc2(0x180)),{MessageType,Mimetype}=require(_0x3ddfc2(0x165)),fs=require('fs'),ffmpeg=require('fluent-ffmpeg'),{execFile}=require(_0x3ddfc2(0x174)),axios=require(_0x3ddfc2(0x179)),cwebp=require('cwebp-bin'),Config=require(_0x3ddfc2(0x187));Raganork['addCommand']({'pattern':_0x3ddfc2(0x171),'fromMe':!![],'desc':_0x3ddfc2(0x17f)},async(_0x339910,_0xb8e13b)=>{const _0x4c7750=_0x3ddfc2;if(_0x339910['reply_message']===![]);var _0x2ad4a1=await _0x339910[_0x4c7750(0x182)]('```Forwarding\x20audio\x20as\x20voice\x20note...```'),_0xa24f32=await axios[_0x4c7750(0x184)](Config['LOGOSK'],{'responseType':_0x4c7750(0x166)}),_0x53e925=await _0x339910['client'][_0x4c7750(0x177)]({'key':{'remoteJid':_0x339910[_0x4c7750(0x176)][_0x4c7750(0x172)],'id':_0x339910[_0x4c7750(0x176)]['id']},'message':_0x339910[_0x4c7750(0x176)][_0x4c7750(0x167)][_0x4c7750(0x17c)]});let _0x8c781d=_0xb8e13b[0x1];ffmpeg(_0x53e925)[_0x4c7750(0x178)](_0x4c7750(0x16f))['save']('output.mp3')['on'](_0x4c7750(0x181),async()=>{const _0x57fa97=_0x4c7750;await _0x339910['client'][_0x57fa97(0x183)](_0xb8e13b[0x1],fs[_0x57fa97(0x17a)](_0x57fa97(0x169)),MessageType[_0x57fa97(0x168)],{'mimetype':Mimetype[_0x57fa97(0x16a)],'ptt':!![]}),await _0x2ad4a1['delete']();});});