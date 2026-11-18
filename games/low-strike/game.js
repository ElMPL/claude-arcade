var Ep=0,ku=1,Ap=2;var va=1,gc=2,oo=3,Gi=0,dn=1,pi=2,ar=0,ao=1,Ou=2,zu=3,Bu=4,Rp=5;var lr=100,Cp=101,Pp=102,Ip=103,Lp=104,Np=200,Dp=201,Up=202,Fp=203,Hu=204,Vu=205,kp=206,Op=207,zp=208,Bp=209,Hp=210,Vp=211,Gp=212,Wp=213,Xp=214,Dl=0,Ul=1,Fl=2,Yr=3,kl=4,Ol=5,zl=6,Bl=7,xc=0,qp=1,$p=2,Wi=0,Gu=1,Wu=2,Xu=3,_a=4,qu=5,$u=6,Yu=7;var Zu=300,cr=301,lo=302,yc=303,vc=304,As=1e3,Fi=1001,Hl=1002,_n=1003,Yp=1004;var Ma=1005;var wn=1006,_c=1007;var Pi=1008;var Wn=1009,Ku=1010,Ju=1011,co=1012,Mc=1013,Ii=1014,mi=1015,Li=1016,bc=1017,Sc=1018,hr=1020,ju=35902,Qu=35899,ef=1021,tf=1022,ni=1023,os=1026,us=1027,Tc=1028,wc=1029,Us=1030,Ec=1031;var Ac=1033,ba=33776,Sa=33777,Ta=33778,wa=33779,Rc=35840,Cc=35841,Pc=35842,Ic=35843,Lc=36196,Nc=37492,Dc=37496,Uc=37488,Fc=37489,Ea=37490,kc=37491,Oc=37808,zc=37809,Bc=37810,Hc=37811,Vc=37812,Gc=37813,Wc=37814,Xc=37815,qc=37816,$c=37817,Yc=37818,Zc=37819,Kc=37820,Jc=37821,jc=36492,Qc=36494,eh=36495,th=36283,nh=36284,Aa=36285,ih=36286;var Go=2300,Vl=2301,Ll=2302,wu=2303,Eu=2400,Au=2401,Ru=2402;var Zp=3200;var Ra=0,Kp=1,fs="",rn="srgb",Wo="srgb-linear",Xo="linear",St="srgb";var Nl=7680;var Jp=519,jp=512,Qp=513,e0=514,nf=515,t0=516,n0=517,sf=518,rf=519,of=35044,ho=35048;var af="300 es",hi=2e3,Zr=2001;function Zg(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Kg(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function qo(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function i0(){let n=qo("canvas");return n.style.display="block",n}var Wd={},Kr=null;function $o(...n){let e="THREE."+n.shift();Kr?Kr("log",e,...n):console.log(e,...n)}function s0(n){let e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Ye(...n){n=s0(n);let e="THREE."+n.shift();if(Kr)Kr("warn",e,...n);else{let t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function Ze(...n){n=s0(n);let e="THREE."+n.shift();if(Kr)Kr("error",e,...n);else{let t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function Bo(...n){let e=n.join(" ");e in Wd||(Wd[e]=!0,Ye(...n))}function r0(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}var o0={[Dl]:Dl,[Fl]:zl,[kl]:kl,[Yr]:Ol,[Ul]:Ul,[zl]:Fl,[Bl]:Bl,[Ol]:Yr},ki=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let s=i[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},Pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var jh=Math.PI/180,Gl=180/Math.PI;function Fs(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Pn[n&255]+Pn[n>>8&255]+Pn[n>>16&255]+Pn[n>>24&255]+"-"+Pn[e&255]+Pn[e>>8&255]+"-"+Pn[e>>16&15|64]+Pn[e>>24&255]+"-"+Pn[t&63|128]+Pn[t>>8&255]+"-"+Pn[t>>16&255]+Pn[t>>24&255]+Pn[i&255]+Pn[i>>8&255]+Pn[i>>16&255]+Pn[i>>24&255]).toLowerCase()}function ft(n,e,t){return Math.max(e,Math.min(t,n))}function Jg(n,e){return(n%e+e)%e}function Qh(n,e,t){return(1-t)*n+t*e}function a0(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function sh(n){switch(n.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function l0(n,e){if(e.constructor===Float32Array)return n;let t=sh(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(n/t,-1)}function c0(n,e){if(e.constructor===Float32Array)return n;let t=sh(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(n*t)}var ge=class{static{this.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ft(this.x,e.x,t.x),this.y=ft(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ft(this.x,e,t),this.y=ft(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ft(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(ft(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Oi=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],h=i[s+2],u=i[s+3],f=r[o+0],d=r[o+1],p=r[o+2],v=r[o+3];if(u!==v||l!==f||c!==d||h!==p){let x=l*f+c*d+h*p+u*v;x<0&&(f=-f,d=-d,p=-p,v=-v,x=-x);let m=1-a;if(x<.9995){let y=Math.acos(x),b=Math.sin(y);m=Math.sin(m*y)/b,a=Math.sin(a*y)/b,l=l*m+f*a,c=c*m+d*a,h=h*m+p*a,u=u*m+v*a}else{l=l*m+f*a,c=c*m+d*a,h=h*m+p*a,u=u*m+v*a;let y=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=y,c*=y,h*=y,u*=y}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],u=r[o],f=r[o+1],d=r[o+2],p=r[o+3];return e[t]=a*p+h*u+l*d-c*f,e[t+1]=l*p+h*f+c*u-a*d,e[t+2]=c*p+h*d+a*f-l*u,e[t+3]=h*p-a*u-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),u=a(r/2),f=l(i/2),d=l(s/2),p=l(r/2);switch(o){case"XYZ":this._x=f*h*u+c*d*p,this._y=c*d*u-f*h*p,this._z=c*h*p+f*d*u,this._w=c*h*u-f*d*p;break;case"YXZ":this._x=f*h*u+c*d*p,this._y=c*d*u-f*h*p,this._z=c*h*p-f*d*u,this._w=c*h*u+f*d*p;break;case"ZXY":this._x=f*h*u-c*d*p,this._y=c*d*u+f*h*p,this._z=c*h*p+f*d*u,this._w=c*h*u-f*d*p;break;case"ZYX":this._x=f*h*u-c*d*p,this._y=c*d*u+f*h*p,this._z=c*h*p-f*d*u,this._w=c*h*u+f*d*p;break;case"YZX":this._x=f*h*u+c*d*p,this._y=c*d*u+f*h*p,this._z=c*h*p-f*d*u,this._w=c*h*u-f*d*p;break;case"XZY":this._x=f*h*u-c*d*p,this._y=c*d*u-f*h*p,this._z=c*h*p+f*d*u,this._w=c*h*u+f*d*p;break;default:Ye("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],f=i+a+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(i>a&&i>u){let d=2*Math.sqrt(1+i-a-u);this._w=(h-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>u){let d=2*Math.sqrt(1+a-i-u);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+u-i-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ft(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-s*a,this._w=o*h-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let l=1-t;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Y=class{static{this.prototype.isVector3=!0}constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Xd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Xd.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),h=2*(a*t-r*s),u=2*(r*i-o*t);return this.x=t+l*c+o*u-a*h,this.y=i+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ft(this.x,e.x,t.x),this.y=ft(this.y,e.y,t.y),this.z=ft(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ft(this.x,e,t),this.y=ft(this.y,e,t),this.z=ft(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ft(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return eu.copy(this).projectOnVector(e),this.sub(eu)}reflect(e){return this.sub(eu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(ft(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},eu=new Y,Xd=new Oi,Qe=class{static{this.prototype.isMatrix3=!0}constructor(e,t,i,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],u=i[7],f=i[2],d=i[5],p=i[8],v=s[0],x=s[3],m=s[6],y=s[1],b=s[4],M=s[7],R=s[2],S=s[5],g=s[8];return r[0]=o*v+a*y+l*R,r[3]=o*x+a*b+l*S,r[6]=o*m+a*M+l*g,r[1]=c*v+h*y+u*R,r[4]=c*x+h*b+u*S,r[7]=c*m+h*M+u*g,r[2]=f*v+d*y+p*R,r[5]=f*x+d*b+p*S,r[8]=f*m+d*M+p*g,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-i*r*h+i*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,f=a*l-h*r,d=c*r-o*l,p=t*u+i*f+s*d;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/p;return e[0]=u*v,e[1]=(s*c-h*i)*v,e[2]=(a*i-s*o)*v,e[3]=f*v,e[4]=(h*t-s*l)*v,e[5]=(s*r-a*t)*v,e[6]=d*v,e[7]=(i*l-c*t)*v,e[8]=(o*t-i*r)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return Bo("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(tu.makeScale(e,t)),this}rotate(e){return Bo("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(tu.makeRotation(-e)),this}translate(e,t){return Bo("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(tu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},tu=new Qe,qd=new Qe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),$d=new Qe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function jg(){let n={enabled:!0,workingColorSpace:Wo,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===St&&(s.r=rs(s.r),s.g=rs(s.g),s.b=rs(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===St&&(s.r=$r(s.r),s.g=$r(s.g),s.b=$r(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===fs?Xo:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Wo]:{primaries:e,whitePoint:i,transfer:Xo,toXYZ:qd,fromXYZ:$d,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:rn},outputColorSpaceConfig:{drawingBufferColorSpace:rn}},[rn]:{primaries:e,whitePoint:i,transfer:St,toXYZ:qd,fromXYZ:$d,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:rn}}}),n}var gt=jg();function rs(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function $r(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Cr,Wl=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Cr===void 0&&(Cr=qo("canvas")),Cr.width=e.width,Cr.height=e.height;let s=Cr.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Cr}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=qo("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=rs(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(rs(t[i]/255)*255):t[i]=rs(t[i]);return{data:t,width:e.width,height:e.height}}else return Ye("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Qg=0,Jr=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Qg++}),this.uuid=Fs(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(nu(s[o].image)):r.push(nu(s[o]))}else r=nu(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function nu(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Wl.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Ye("Texture: Unable to serialize Texture."),{})}var ex=0,iu=new Y,kn=class n extends ki{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=Fi,s=Fi,r=wn,o=Pi,a=ni,l=Wn,c=n.DEFAULT_ANISOTROPY,h=fs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ex++}),this.uuid=Fs(),this.name="",this.source=new Jr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ge(0,0),this.repeat=new ge(1,1),this.center=new ge(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qe,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(iu).x}get height(){return this.source.getSize(iu).y}get depth(){return this.source.getSize(iu).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){Ye(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ye(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Zu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case As:e.x=e.x-Math.floor(e.x);break;case Fi:e.x=e.x<0?0:1;break;case Hl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case As:e.y=e.y-Math.floor(e.y);break;case Fi:e.y=e.y<0?0:1;break;case Hl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};kn.DEFAULT_IMAGE=null;kn.DEFAULT_MAPPING=Zu;kn.DEFAULT_ANISOTROPY=1;var $t=class{static{this.prototype.isVector4=!0}constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],p=l[9],v=l[2],x=l[6],m=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-v)<.01&&Math.abs(p-x)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+v)<.1&&Math.abs(p+x)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let b=(c+1)/2,M=(d+1)/2,R=(m+1)/2,S=(h+f)/4,g=(u+v)/4,_=(p+x)/4;return b>M&&b>R?b<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(b),s=S/i,r=g/i):M>R?M<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),i=S/s,r=_/s):R<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),i=g/r,s=_/r),this.set(i,s,r,t),this}let y=Math.sqrt((x-p)*(x-p)+(u-v)*(u-v)+(f-h)*(f-h));return Math.abs(y)<.001&&(y=1),this.x=(x-p)/y,this.y=(u-v)/y,this.z=(f-h)/y,this.w=Math.acos((c+d+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ft(this.x,e.x,t.x),this.y=ft(this.y,e.y,t.y),this.z=ft(this.z,e.z,t.z),this.w=ft(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ft(this.x,e,t),this.y=ft(this.y,e,t),this.z=ft(this.z,e,t),this.w=ft(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ft(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Xl=class extends ki{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:wn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new $t(0,0,e,t),this.scissorTest=!1,this.viewport=new $t(0,0,e,t),this.textures=[];let s=i.count;for(let r=0;r<s;r++)this.textures[r]=new kn({width:e,height:t,depth:i.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:wn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Jr(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Jn=class extends Xl{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Yo=class extends kn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=_n,this.minFilter=_n,this.wrapR=Fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var ql=class extends kn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=_n,this.minFilter=_n,this.wrapR=Fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Mt=class n{static{this.prototype.isMatrix4=!0}constructor(e,t,i,s,r,o,a,l,c,h,u,f,d,p,v,x){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,h,u,f,d,p,v,x)}set(e,t,i,s,r,o,a,l,c,h,u,f,d,p,v,x){let m=this.elements;return m[0]=e,m[4]=t,m[8]=i,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=f,m[3]=d,m[7]=p,m[11]=v,m[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,i=e.elements,s=1/Pr.setFromMatrixColumn(e,0).length(),r=1/Pr.setFromMatrixColumn(e,1).length(),o=1/Pr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let f=o*h,d=o*u,p=a*h,v=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=d+p*c,t[5]=f-v*c,t[9]=-a*l,t[2]=v-f*c,t[6]=p+d*c,t[10]=o*l}else if(e.order==="YXZ"){let f=l*h,d=l*u,p=c*h,v=c*u;t[0]=f+v*a,t[4]=p*a-d,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=d*a-p,t[6]=v+f*a,t[10]=o*l}else if(e.order==="ZXY"){let f=l*h,d=l*u,p=c*h,v=c*u;t[0]=f-v*a,t[4]=-o*u,t[8]=p+d*a,t[1]=d+p*a,t[5]=o*h,t[9]=v-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let f=o*h,d=o*u,p=a*h,v=a*u;t[0]=l*h,t[4]=p*c-d,t[8]=f*c+v,t[1]=l*u,t[5]=v*c+f,t[9]=d*c-p,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let f=o*l,d=o*c,p=a*l,v=a*c;t[0]=l*h,t[4]=v-f*u,t[8]=p*u+d,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=d*u+p,t[10]=f-v*u}else if(e.order==="XZY"){let f=o*l,d=o*c,p=a*l,v=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=f*u+v,t[5]=o*h,t[9]=d*u-p,t[2]=p*u-d,t[6]=a*h,t[10]=v*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(tx,e,nx)}lookAt(e,t,i){let s=this.elements;return Zn.subVectors(e,t),Zn.lengthSq()===0&&(Zn.z=1),Zn.normalize(),bs.crossVectors(i,Zn),bs.lengthSq()===0&&(Math.abs(i.z)===1?Zn.x+=1e-4:Zn.z+=1e-4,Zn.normalize(),bs.crossVectors(i,Zn)),bs.normalize(),sl.crossVectors(Zn,bs),s[0]=bs.x,s[4]=sl.x,s[8]=Zn.x,s[1]=bs.y,s[5]=sl.y,s[9]=Zn.y,s[2]=bs.z,s[6]=sl.z,s[10]=Zn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],u=i[5],f=i[9],d=i[13],p=i[2],v=i[6],x=i[10],m=i[14],y=i[3],b=i[7],M=i[11],R=i[15],S=s[0],g=s[4],_=s[8],A=s[12],w=s[1],C=s[5],L=s[9],T=s[13],P=s[2],z=s[6],X=s[10],q=s[14],B=s[3],U=s[7],H=s[11],E=s[15];return r[0]=o*S+a*w+l*P+c*B,r[4]=o*g+a*C+l*z+c*U,r[8]=o*_+a*L+l*X+c*H,r[12]=o*A+a*T+l*q+c*E,r[1]=h*S+u*w+f*P+d*B,r[5]=h*g+u*C+f*z+d*U,r[9]=h*_+u*L+f*X+d*H,r[13]=h*A+u*T+f*q+d*E,r[2]=p*S+v*w+x*P+m*B,r[6]=p*g+v*C+x*z+m*U,r[10]=p*_+v*L+x*X+m*H,r[14]=p*A+v*T+x*q+m*E,r[3]=y*S+b*w+M*P+R*B,r[7]=y*g+b*C+M*z+R*U,r[11]=y*_+b*L+M*X+R*H,r[15]=y*A+b*T+M*q+R*E,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],f=e[10],d=e[14],p=e[3],v=e[7],x=e[11],m=e[15],y=l*d-c*f,b=a*d-c*u,M=a*f-l*u,R=o*d-c*h,S=o*f-l*h,g=o*u-a*h;return t*(v*y-x*b+m*M)-i*(p*y-x*R+m*S)+s*(p*b-v*R+m*g)-r*(p*M-v*S+x*g)}determinantAffine(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[1],o=e[5],a=e[9],l=e[2],c=e[6],h=e[10];return t*(o*h-a*c)-i*(r*h-a*l)+s*(r*c-o*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],f=e[10],d=e[11],p=e[12],v=e[13],x=e[14],m=e[15],y=t*a-i*o,b=t*l-s*o,M=t*c-r*o,R=i*l-s*a,S=i*c-r*a,g=s*c-r*l,_=h*v-u*p,A=h*x-f*p,w=h*m-d*p,C=u*x-f*v,L=u*m-d*v,T=f*m-d*x,P=y*T-b*L+M*C+R*w-S*A+g*_;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let z=1/P;return e[0]=(a*T-l*L+c*C)*z,e[1]=(s*L-i*T-r*C)*z,e[2]=(v*g-x*S+m*R)*z,e[3]=(f*S-u*g-d*R)*z,e[4]=(l*w-o*T-c*A)*z,e[5]=(t*T-s*w+r*A)*z,e[6]=(x*M-p*g-m*b)*z,e[7]=(h*g-f*M+d*b)*z,e[8]=(o*L-a*w+c*_)*z,e[9]=(i*w-t*L-r*_)*z,e[10]=(p*S-v*M+m*y)*z,e[11]=(u*M-h*S-d*y)*z,e[12]=(a*A-o*C-l*_)*z,e[13]=(t*C-i*A+s*_)*z,e[14]=(v*b-p*R-x*y)*z,e[15]=(h*R-u*b+f*y)*z,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,u=a+a,f=r*c,d=r*h,p=r*u,v=o*h,x=o*u,m=a*u,y=l*c,b=l*h,M=l*u,R=i.x,S=i.y,g=i.z;return s[0]=(1-(v+m))*R,s[1]=(d+M)*R,s[2]=(p-b)*R,s[3]=0,s[4]=(d-M)*S,s[5]=(1-(f+m))*S,s[6]=(x+y)*S,s[7]=0,s[8]=(p+b)*g,s[9]=(x-y)*g,s[10]=(1-(f+v))*g,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let o=Pr.set(s[0],s[1],s[2]).length(),a=Pr.set(s[4],s[5],s[6]).length(),l=Pr.set(s[8],s[9],s[10]).length();r<0&&(o=-o),wi.copy(this);let c=1/o,h=1/a,u=1/l;return wi.elements[0]*=c,wi.elements[1]*=c,wi.elements[2]*=c,wi.elements[4]*=h,wi.elements[5]*=h,wi.elements[6]*=h,wi.elements[8]*=u,wi.elements[9]*=u,wi.elements[10]*=u,t.setFromRotationMatrix(wi),i.x=o,i.y=a,i.z=l,this}makePerspective(e,t,i,s,r,o,a=hi,l=!1){let c=this.elements,h=2*r/(t-e),u=2*r/(i-s),f=(t+e)/(t-e),d=(i+s)/(i-s),p,v;if(l)p=r/(o-r),v=o*r/(o-r);else if(a===hi)p=-(o+r)/(o-r),v=-2*o*r/(o-r);else if(a===Zr)p=-o/(o-r),v=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=hi,l=!1){let c=this.elements,h=2/(t-e),u=2/(i-s),f=-(t+e)/(t-e),d=-(i+s)/(i-s),p,v;if(l)p=1/(o-r),v=o/(o-r);else if(a===hi)p=-2/(o-r),v=-(o+r)/(o-r);else if(a===Zr)p=-1/(o-r),v=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=u,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=p,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},Pr=new Y,wi=new Mt,tx=new Y(0,0,0),nx=new Y(1,1,1),bs=new Y,sl=new Y,Zn=new Y,Yd=new Mt,Zd=new Oi,ui=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(ft(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ft(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(ft(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ft(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ft(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-ft(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:Ye("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Yd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Yd,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Zd.setFromEuler(this),this.setFromQuaternion(Zd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ui.DEFAULT_ORDER="XYZ";var Zo=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},ix=0,Kd=new Y,Ir=new Oi,Qi=new Mt,rl=new Y,Co=new Y,sx=new Y,rx=new Oi,Jd=new Y(1,0,0),jd=new Y(0,1,0),Qd=new Y(0,0,1),ep={type:"added"},ox={type:"removed"},Lr={type:"childadded",child:null},su={type:"childremoved",child:null},zt=class n extends ki{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ix++}),this.uuid=Fs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new Y,t=new ui,i=new Oi,s=new Y(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Mt},normalMatrix:{value:new Qe}}),this.matrix=new Mt,this.matrixWorld=new Mt,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Zo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ir.setFromAxisAngle(e,t),this.quaternion.multiply(Ir),this}rotateOnWorldAxis(e,t){return Ir.setFromAxisAngle(e,t),this.quaternion.premultiply(Ir),this}rotateX(e){return this.rotateOnAxis(Jd,e)}rotateY(e){return this.rotateOnAxis(jd,e)}rotateZ(e){return this.rotateOnAxis(Qd,e)}translateOnAxis(e,t){return Kd.copy(e).applyQuaternion(this.quaternion),this.position.add(Kd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Jd,e)}translateY(e){return this.translateOnAxis(jd,e)}translateZ(e){return this.translateOnAxis(Qd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Qi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?rl.copy(e):rl.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Co.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Qi.lookAt(Co,rl,this.up):Qi.lookAt(rl,Co,this.up),this.quaternion.setFromRotationMatrix(Qi),s&&(Qi.extractRotation(s.matrixWorld),Ir.setFromRotationMatrix(Qi),this.quaternion.premultiply(Ir.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ze("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ep),Lr.child=e,this.dispatchEvent(Lr),Lr.child=null):Ze("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ox),su.child=e,this.dispatchEvent(su),su.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Qi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Qi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Qi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ep),Lr.child=e,this.dispatchEvent(Lr),Lr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Co,e,sx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Co,rx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,i)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),f=o(e.skeletons),d=o(e.animations),p=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),p.length>0&&(i.nodes=p)}return i.object=s,i;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};zt.DEFAULT_UP=new Y(0,1,0);zt.DEFAULT_MATRIX_AUTO_UPDATE=!0;zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Rt=class extends zt{constructor(){super(),this.isGroup=!0,this.type="Group"}},ax={type:"move"},jr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Rt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Rt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Rt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Y,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let v of e.hand.values()){let x=t.getJointPose(v,i),m=this._getHandJoint(c,v);x!==null&&(m.matrix.fromArray(x.transform.matrix),m.matrix.decompose(m.position,m.quaternion,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=x.radius),m.visible=x!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,p=.005;c.inputState.pinching&&f>d+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(ax)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Rt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},h0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ss={h:0,s:0,l:0},ol={h:0,s:0,l:0};function ru(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var Xe=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=rn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,gt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=gt.workingColorSpace){return this.r=e,this.g=t,this.b=i,gt.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=gt.workingColorSpace){if(e=Jg(e,1),t=ft(t,0,1),i=ft(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=ru(o,r,e+1/3),this.g=ru(o,r,e),this.b=ru(o,r,e-1/3)}return gt.colorSpaceToWorking(this,s),this}setStyle(e,t=rn){function i(r){r!==void 0&&parseFloat(r)<1&&Ye("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ye("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);Ye("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=rn){let i=h0[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Ye("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=rs(e.r),this.g=rs(e.g),this.b=rs(e.b),this}copyLinearToSRGB(e){return this.r=$r(e.r),this.g=$r(e.g),this.b=$r(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=rn){return gt.workingToColorSpace(In.copy(this),e),Math.round(ft(In.r*255,0,255))*65536+Math.round(ft(In.g*255,0,255))*256+Math.round(ft(In.b*255,0,255))}getHexString(e=rn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=gt.workingColorSpace){gt.workingToColorSpace(In.copy(this),t);let i=In.r,s=In.g,r=In.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case i:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-i)/u+2;break;case r:l=(i-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=gt.workingColorSpace){return gt.workingToColorSpace(In.copy(this),t),e.r=In.r,e.g=In.g,e.b=In.b,e}getStyle(e=rn){gt.workingToColorSpace(In.copy(this),e);let t=In.r,i=In.g,s=In.b;return e!==rn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Ss),this.setHSL(Ss.h+e,Ss.s+t,Ss.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Ss),e.getHSL(ol);let i=Qh(Ss.h,ol.h,t),s=Qh(Ss.s,ol.s,t),r=Qh(Ss.l,ol.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},In=new Xe;Xe.NAMES=h0;var Ko=class n{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new Xe(e),this.near=t,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},jn=class extends zt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ui,this.environmentIntensity=1,this.environmentRotation=new ui,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Ei=new Y,es=new Y,ou=new Y,ts=new Y,Nr=new Y,Dr=new Y,tp=new Y,au=new Y,lu=new Y,cu=new Y,hu=new $t,uu=new $t,fu=new $t,ss=class n{constructor(e=new Y,t=new Y,i=new Y){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Ei.subVectors(e,t),s.cross(Ei);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Ei.subVectors(s,t),es.subVectors(i,t),ou.subVectors(e,t);let o=Ei.dot(Ei),a=Ei.dot(es),l=Ei.dot(ou),c=es.dot(es),h=es.dot(ou),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let f=1/u,d=(c*l-a*h)*f,p=(o*h-a*l)*f;return r.set(1-d-p,p,d)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,ts)===null?!1:ts.x>=0&&ts.y>=0&&ts.x+ts.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,ts)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ts.x),l.addScaledVector(o,ts.y),l.addScaledVector(a,ts.z),l)}static getInterpolatedAttribute(e,t,i,s,r,o){return hu.setScalar(0),uu.setScalar(0),fu.setScalar(0),hu.fromBufferAttribute(e,t),uu.fromBufferAttribute(e,i),fu.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(hu,r.x),o.addScaledVector(uu,r.y),o.addScaledVector(fu,r.z),o}static isFrontFacing(e,t,i,s){return Ei.subVectors(i,t),es.subVectors(e,t),Ei.cross(es).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ei.subVectors(this.c,this.b),es.subVectors(this.a,this.b),Ei.cross(es).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,o,a;Nr.subVectors(s,i),Dr.subVectors(r,i),au.subVectors(e,i);let l=Nr.dot(au),c=Dr.dot(au);if(l<=0&&c<=0)return t.copy(i);lu.subVectors(e,s);let h=Nr.dot(lu),u=Dr.dot(lu);if(h>=0&&u<=h)return t.copy(s);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0&&l-h>0)return o=l/(l-h),t.copy(i).addScaledVector(Nr,o);cu.subVectors(e,r);let d=Nr.dot(cu),p=Dr.dot(cu);if(p>=0&&d<=p)return t.copy(r);let v=d*c-l*p;if(v<=0&&c>=0&&p<=0)return a=c/(c-p),t.copy(i).addScaledVector(Dr,a);let x=h*p-d*u;if(x<=0&&u-h>=0&&d-p>=0)return tp.subVectors(r,s),a=(u-h)/(u-h+(d-p)),t.copy(s).addScaledVector(tp,a);let m=1/(x+v+f);return o=v*m,a=f*m,t.copy(i).addScaledVector(Nr,o).addScaledVector(Dr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},zi=class{constructor(e=new Y(1/0,1/0,1/0),t=new Y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Ai.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Ai.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Ai.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Ai):Ai.fromBufferAttribute(r,o),Ai.applyMatrix4(e.matrixWorld),this.expandByPoint(Ai);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),al.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),al.copy(i.boundingBox)),al.applyMatrix4(e.matrixWorld),this.union(al)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ai),Ai.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Po),ll.subVectors(this.max,Po),Ur.subVectors(e.a,Po),Fr.subVectors(e.b,Po),kr.subVectors(e.c,Po),Ts.subVectors(Fr,Ur),ws.subVectors(kr,Fr),Ks.subVectors(Ur,kr);let t=[0,-Ts.z,Ts.y,0,-ws.z,ws.y,0,-Ks.z,Ks.y,Ts.z,0,-Ts.x,ws.z,0,-ws.x,Ks.z,0,-Ks.x,-Ts.y,Ts.x,0,-ws.y,ws.x,0,-Ks.y,Ks.x,0];return!du(t,Ur,Fr,kr,ll)||(t=[1,0,0,0,1,0,0,0,1],!du(t,Ur,Fr,kr,ll))?!1:(cl.crossVectors(Ts,ws),t=[cl.x,cl.y,cl.z],du(t,Ur,Fr,kr,ll))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ai).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ai).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ns[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ns[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ns[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ns[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ns[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ns[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ns[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ns[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ns),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},ns=[new Y,new Y,new Y,new Y,new Y,new Y,new Y,new Y],Ai=new Y,al=new zi,Ur=new Y,Fr=new Y,kr=new Y,Ts=new Y,ws=new Y,Ks=new Y,Po=new Y,ll=new Y,cl=new Y,Js=new Y;function du(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Js.fromArray(n,r);let a=s.x*Math.abs(Js.x)+s.y*Math.abs(Js.y)+s.z*Math.abs(Js.z),l=e.dot(Js),c=t.dot(Js),h=i.dot(Js);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var cn=new Y,hl=new ge,lx=0,qt=class extends ki{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:lx++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=of,this.updateRanges=[],this.gpuType=mi,this.version=0,this._normalizationScale=e!==void 0?sh(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)hl.fromBufferAttribute(this,t),hl.applyMatrix3(e),this.setXY(t,hl.x,hl.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)cn.fromBufferAttribute(this,t),cn.applyMatrix3(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)cn.fromBufferAttribute(this,t),cn.applyMatrix4(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)cn.fromBufferAttribute(this,t),cn.applyNormalMatrix(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)cn.fromBufferAttribute(this,t),cn.transformDirection(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,t,i){return this.normalized&&(i=this._normalize(i)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):l0(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):c0(e,this.array)}};var Jo=class extends qt{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var jo=class extends qt{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var rt=class extends qt{constructor(e,t,i){super(new Float32Array(e),t,i)}},cx=new zi,Io=new Y,pu=new Y,as=class{constructor(e=new Y,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):cx.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Io.subVectors(e,this.center);let t=Io.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Io,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(pu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Io.copy(e.center).add(pu)),this.expandByPoint(Io.copy(e.center).sub(pu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},hx=0,ci=new Mt,mu=new zt,Or=new Y,Kn=new zi,Lo=new zi,vn=new Y,Bt=class n extends ki{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:hx++}),this.uuid=Fs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Zg(e)?jo:Jo)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Qe().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return ci.makeRotationFromQuaternion(e),this.applyMatrix4(ci),this}rotateX(e){return ci.makeRotationX(e),this.applyMatrix4(ci),this}rotateY(e){return ci.makeRotationY(e),this.applyMatrix4(ci),this}rotateZ(e){return ci.makeRotationZ(e),this.applyMatrix4(ci),this}translate(e,t,i){return ci.makeTranslation(e,t,i),this.applyMatrix4(ci),this}scale(e,t,i){return ci.makeScale(e,t,i),this.applyMatrix4(ci),this}lookAt(e){return mu.lookAt(e),mu.updateMatrix(),this.applyMatrix4(mu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Or).negate(),this.translate(Or.x,Or.y,Or.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new rt(i,3))}else{let i=Math.min(e.length,t.count);for(let s=0;s<i;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Ye("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new zi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ze("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Y(-1/0,-1/0,-1/0),new Y(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];Kn.setFromBufferAttribute(r),this.morphTargetsRelative?(vn.addVectors(this.boundingBox.min,Kn.min),this.boundingBox.expandByPoint(vn),vn.addVectors(this.boundingBox.max,Kn.max),this.boundingBox.expandByPoint(vn)):(this.boundingBox.expandByPoint(Kn.min),this.boundingBox.expandByPoint(Kn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ze('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new as);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ze("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Y,1/0);return}if(e){let i=this.boundingSphere.center;if(Kn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Lo.setFromBufferAttribute(a),this.morphTargetsRelative?(vn.addVectors(Kn.min,Lo.min),Kn.expandByPoint(vn),vn.addVectors(Kn.max,Lo.max),Kn.expandByPoint(vn)):(Kn.expandByPoint(Lo.min),Kn.expandByPoint(Lo.max))}Kn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)vn.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(vn));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)vn.fromBufferAttribute(a,c),l&&(Or.fromBufferAttribute(e,c),vn.add(Or)),s=Math.max(s,i.distanceToSquared(vn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ze('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ze("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new qt(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));let a=[],l=[],c=new Uint8Array(i.count);for(let A=0;A<i.count;A++)a[A]=new Y,l[A]=new Y;let h=new Y,u=new Y,f=new Y,d=new ge,p=new ge,v=new ge,x=new Y,m=new Y;function y(A,w,C){c[A]=c[w]=c[C]=1,h.fromBufferAttribute(i,A),u.fromBufferAttribute(i,w),f.fromBufferAttribute(i,C),d.fromBufferAttribute(r,A),p.fromBufferAttribute(r,w),v.fromBufferAttribute(r,C),u.sub(h),f.sub(h),p.sub(d),v.sub(d);let L=1/(p.x*v.y-v.x*p.y);isFinite(L)&&(x.copy(u).multiplyScalar(v.y).addScaledVector(f,-p.y).multiplyScalar(L),m.copy(f).multiplyScalar(p.x).addScaledVector(u,-v.x).multiplyScalar(L),a[A].add(x),a[w].add(x),a[C].add(x),l[A].add(m),l[w].add(m),l[C].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let A=0,w=b.length;A<w;++A){let C=b[A],L=C.start,T=C.count;for(let P=L,z=L+T;P<z;P+=3)y(e.getX(P+0),e.getX(P+1),e.getX(P+2))}let M=new Y,R=new Y,S=new Y,g=new Y;function _(A){S.fromBufferAttribute(s,A),g.copy(S);let w=a[A];M.copy(w),M.sub(S.multiplyScalar(S.dot(w))).normalize(),R.crossVectors(g,w);let L=R.dot(l[A])<0?-1:1;o.setXYZW(A,M.x,M.y,M.z,L)}for(let A=0,w=i.count;A<w;++A)c[A]&&_(A);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new qt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);let s=new Y,r=new Y,o=new Y,a=new Y,l=new Y,c=new Y,h=new Y,u=new Y;if(e)for(let f=0,d=e.count;f<d;f+=3){let p=e.getX(f+0),v=e.getX(f+1),x=e.getX(f+2);s.fromBufferAttribute(t,p),r.fromBufferAttribute(t,v),o.fromBufferAttribute(t,x),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(i,p),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,x),a.add(h),l.add(h),c.add(h),i.setXYZ(p,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(x,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)vn.fromBufferAttribute(e,t),vn.normalize(),e.setXYZ(t,vn.x,vn.y,vn.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h),d=0,p=0;for(let v=0,x=l.length;v<x;v++){a.isInterleavedBufferAttribute?d=l[v]*a.data.stride+a.offset:d=l[v]*h;for(let m=0;m<h;m++)f[p++]=c[d++]}return new qt(f,h,u)}if(this.index===null)return Ye("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,i);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let f=c[h],d=e(f,i);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let d=c[u];h.push(d.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Qo=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=of,this.updateRanges=[],this.version=0,this.uuid=Fs()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=np(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let i=new this.array.constructor(e.arrayBuffers[t]),s=new this.constructor(i,this.stride);return s.setUsage(this.usage),s}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=np(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let i={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return i.usage=this.usage,i}};function np(n){return n.buffer._uuid===void 0&&(n.buffer._uuid=Fs()),n.byteOffset===0&&n.byteLength===n.buffer.byteLength?n.buffer._uuid:n.buffer._uuid+":"+n.byteOffset+":"+n.byteLength}var Fn=new Y,Qr=class n{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s,this._normalizationScale=e!==void 0?sh(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Fn.fromBufferAttribute(this,t),Fn.applyMatrix4(e),this.setXYZ(t,Fn.x,Fn.y,Fn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Fn.fromBufferAttribute(this,t),Fn.applyNormalMatrix(e),this.setXYZ(t,Fn.x,Fn.y,Fn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Fn.fromBufferAttribute(this,t),Fn.transformDirection(e),this.setXYZ(t,Fn.x,Fn.y,Fn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,t,i){return this.normalized&&(i=this._normalize(i)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),i=this._normalize(i)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){$o("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new qt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){$o("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):l0(e,this.data.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):c0(e,this.data.array)}},gu=new Y,ux=new Y,fx=new Qe,Ri=class{constructor(e=new Y(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=gu.subVectors(i,t).cross(ux.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let s=e.delta(gu),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||fx.getNormalMatrix(e),s=this.coplanarPoint(gu).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},dx=0,Ci=class extends ki{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:dx++}),this.uuid=Fs(),this.name="",this.type="Material",this.blending=ao,this.side=Gi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Hu,this.blendDst=Vu,this.blendEquation=lr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xe(0,0,0),this.blendAlpha=0,this.depthFunc=Yr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Jp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Nl,this.stencilZFail=Nl,this.stencilZPass=Nl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){Ye(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ye(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Xe().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new Ri().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new ge().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ge().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},tr=class extends Ci{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Xe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},zr,No=new Y,Br=new Y,Hr=new Y,Vr=new ge,Do=new ge,u0=new Mt,ul=new Y,Uo=new Y,fl=new Y,ip=new ge,xu=new ge,sp=new ge,eo=class extends zt{constructor(e=new tr){if(super(),this.isSprite=!0,this.type="Sprite",zr===void 0){zr=new Bt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Qo(t,5);zr.setIndex([0,1,2,0,2,3]),zr.setAttribute("position",new Qr(i,3,0,!1)),zr.setAttribute("uv",new Qr(i,2,3,!1))}this.geometry=zr,this.material=e,this.center=new ge(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&Ze('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Br.setFromMatrixScale(this.matrixWorld),u0.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Hr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Br.multiplyScalar(-Hr.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let o=this.center;dl(ul.set(-.5,-.5,0),Hr,o,Br,s,r),dl(Uo.set(.5,-.5,0),Hr,o,Br,s,r),dl(fl.set(.5,.5,0),Hr,o,Br,s,r),ip.set(0,0),xu.set(1,0),sp.set(1,1);let a=e.ray.intersectTriangle(ul,Uo,fl,!1,No);if(a===null&&(dl(Uo.set(-.5,.5,0),Hr,o,Br,s,r),xu.set(0,1),a=e.ray.intersectTriangle(ul,fl,Uo,!1,No),a===null))return;let l=e.ray.origin.distanceTo(No);l<e.near||l>e.far||t.push({distance:l,point:No.clone(),uv:ss.getInterpolation(No,ul,Uo,fl,ip,xu,sp,new ge),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}toJSON(e){let t=super.toJSON(e);return t.object.center=this.center.toArray(),t}};function dl(n,e,t,i,s,r){Vr.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(Do.x=r*Vr.x-s*Vr.y,Do.y=s*Vr.x+r*Vr.y):Do.copy(Vr),n.copy(e),n.x+=Do.x,n.y+=Do.y,n.applyMatrix4(u0)}var is=new Y,yu=new Y,pl=new Y,ml=new Y,ea=class{constructor(e=new Y,t=new Y(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,is)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=is.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(is.copy(this.origin).addScaledVector(this.direction,t),is.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){yu.copy(e).add(t).multiplyScalar(.5),pl.copy(t).sub(e).normalize(),ml.copy(this.origin).sub(yu);let r=e.distanceTo(t)*.5,o=-this.direction.dot(pl),a=ml.dot(this.direction),l=-ml.dot(pl),c=ml.lengthSq(),h=Math.abs(1-o*o),u,f,d,p;if(h>0)if(u=o*l-a,f=o*a-l,p=r*h,u>=0)if(f>=-p)if(f<=p){let v=1/h;u*=v,f*=v,d=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f<=-p?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c):f<=p?(u=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(yu).addScaledVector(pl,f),d}intersectSphere(e,t){if(e.radius<0)return null;is.subVectors(e.center,this.origin);let i=is.dot(this.direction),s=is.dot(is)-i*i,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),h>=0?(r=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(a=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,is)!==null}intersectTriangle(e,t,i,s,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,u=e.x-o.x,f=e.y-o.y,d=e.z-o.z,p=t.x-o.x,v=t.y-o.y,x=t.z-o.z,m=i.x-o.x,y=i.y-o.y,b=i.z-o.z,M=Math.abs(l),R=Math.abs(c),S=Math.abs(h),g,_,A,w,C,L,T,P,z,X,q,B;if(M>=R&&M>=S?(A=l,L=u,z=p,B=m,l>=0?(g=c,_=h,w=f,C=d,T=v,P=x,X=y,q=b):(g=h,_=c,w=d,C=f,T=x,P=v,X=b,q=y)):R>=S?(A=c,L=f,z=v,B=y,c>=0?(g=h,_=l,w=d,C=u,T=x,P=p,X=b,q=m):(g=l,_=h,w=u,C=d,T=p,P=x,X=m,q=b)):(A=h,L=d,z=x,B=b,h>=0?(g=l,_=c,w=u,C=f,T=p,P=v,X=m,q=y):(g=c,_=l,w=f,C=u,T=v,P=p,X=y,q=m)),A===0)return null;let U=g/A,H=_/A,E=1/A,F=w-U*L,G=C-H*L,O=T-U*z,N=P-H*z,V=X-U*B,K=q-H*B,J=V*N-K*O,ie=F*K-G*V,ue=O*G-N*F;if(s){if(J<0||ie<0||ue<0)return null}else if((J<0||ie<0||ue<0)&&(J>0||ie>0||ue>0))return null;let Te=J+ie+ue;if(Te===0)return null;let De=E*(J*L+ie*z+ue*B);return(Te>0?De<0:De>0)?null:this.at(De/Te,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Jt=class extends Ci{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ui,this.combine=xc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},rp=new Mt,js=new ea,gl=new as,op=new Y,xl=new Y,yl=new Y,vl=new Y,vu=new Y,_l=new Y,ap=new Y,Ml=new Y,Oe=class extends zt{constructor(e=new Bt,t=new Jt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){_l.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(vu.fromBufferAttribute(u,e),o?_l.addScaledVector(vu,h):_l.addScaledVector(vu.sub(t),h))}t.add(_l)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),gl.copy(i.boundingSphere),gl.applyMatrix4(r),js.copy(e.ray).recast(e.near),!(gl.containsPoint(js.origin)===!1&&(js.intersectSphere(gl,op)===null||js.origin.distanceToSquared(op)>(e.far-e.near)**2))&&(rp.copy(r).invert(),js.copy(e.ray).applyMatrix4(rp),!(i.boundingBox!==null&&js.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,js)))}_computeIntersections(e,t,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,v=f.length;p<v;p++){let x=f[p],m=o[x.materialIndex],y=Math.max(x.start,d.start),b=Math.min(a.count,Math.min(x.start+x.count,d.start+d.count));for(let M=y,R=b;M<R;M+=3){let S=a.getX(M),g=a.getX(M+1),_=a.getX(M+2);s=bl(this,m,e,i,c,h,u,S,g,_),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=x.materialIndex,t.push(s))}}else{let p=Math.max(0,d.start),v=Math.min(a.count,d.start+d.count);for(let x=p,m=v;x<m;x+=3){let y=a.getX(x),b=a.getX(x+1),M=a.getX(x+2);s=bl(this,o,e,i,c,h,u,y,b,M),s&&(s.faceIndex=Math.floor(x/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,v=f.length;p<v;p++){let x=f[p],m=o[x.materialIndex],y=Math.max(x.start,d.start),b=Math.min(l.count,Math.min(x.start+x.count,d.start+d.count));for(let M=y,R=b;M<R;M+=3){let S=M,g=M+1,_=M+2;s=bl(this,m,e,i,c,h,u,S,g,_),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=x.materialIndex,t.push(s))}}else{let p=Math.max(0,d.start),v=Math.min(l.count,d.start+d.count);for(let x=p,m=v;x<m;x+=3){let y=x,b=x+1,M=x+2;s=bl(this,o,e,i,c,h,u,y,b,M),s&&(s.faceIndex=Math.floor(x/3),t.push(s))}}}};function px(n,e,t,i,s,r,o,a){let l;if(e.side===dn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===Gi,a),l===null)return null;Ml.copy(a),Ml.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(Ml);return c<t.near||c>t.far?null:{distance:c,point:Ml.clone(),object:n}}function bl(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,xl),n.getVertexPosition(l,yl),n.getVertexPosition(c,vl);let h=px(n,e,t,i,xl,yl,vl,ap);if(h){let u=new Y;ss.getBarycoord(ap,xl,yl,vl,u),s&&(h.uv=ss.getInterpolatedAttribute(s,a,l,c,u,new ge)),r&&(h.uv1=ss.getInterpolatedAttribute(r,a,l,c,u,new ge)),o&&(h.normal=ss.getInterpolatedAttribute(o,a,l,c,u,new Y),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new Y,materialIndex:0};ss.getNormal(xl,yl,vl,f.normal),h.face=f,h.barycoord=u}return h}var nr=class extends kn{constructor(e=null,t=1,i=1,s,r,o,a,l,c=_n,h=_n,u,f){super(null,o,a,l,c,h,s,r,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Bi=class extends qt{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Gr=new Mt,lp=new Mt,Sl=[],cp=new zi,mx=new Mt,Fo=new Oe,ko=new as,On=class extends Oe{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Bi(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,mx)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new zi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Gr),cp.copy(e.boundingBox).applyMatrix4(Gr),this.boundingBox.union(cp)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new as),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Gr),ko.copy(e.boundingSphere).applyMatrix4(Gr),this.boundingSphere.union(ko)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(e,t){let i=this.matrixWorld,s=this.count;if(Fo.geometry=this.geometry,Fo.material=this.material,Fo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ko.copy(this.boundingSphere),ko.applyMatrix4(i),e.ray.intersectsSphere(ko)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Gr),lp.multiplyMatrices(i,Gr),Fo.matrixWorld=lp,Fo.raycast(e,Sl);for(let o=0,a=Sl.length;o<a;o++){let l=Sl[o];l.instanceId=r,l.object=this,t.push(l)}Sl.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Bi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new nr(new Float32Array(s*this.count),s,this.count,Tc,mi));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<i.length;c++)o+=i[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;return r[l]=a,r.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Qs=new as,gx=new ge(.5,.5),Tl=new Y,Rs=class{constructor(e=new Ri,t=new Ri,i=new Ri,s=new Ri,r=new Ri,o=new Ri){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=hi,i=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],u=r[5],f=r[6],d=r[7],p=r[8],v=r[9],x=r[10],m=r[11],y=r[12],b=r[13],M=r[14],R=r[15];if(s[0].setComponents(c-o,d-h,m-p,R-y).normalize(),s[1].setComponents(c+o,d+h,m+p,R+y).normalize(),s[2].setComponents(c+a,d+u,m+v,R+b).normalize(),s[3].setComponents(c-a,d-u,m-v,R-b).normalize(),i)s[4].setComponents(l,f,x,M).normalize(),s[5].setComponents(c-l,d-f,m-x,R-M).normalize();else if(s[4].setComponents(c-l,d-f,m-x,R-M).normalize(),t===hi)s[5].setComponents(c+l,d+f,m+x,R+M).normalize();else if(t===Zr)s[5].setComponents(l,f,x,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Qs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Qs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Qs)}intersectsSprite(e){Qs.center.set(0,0,0);let t=gx.distanceTo(e.center);return Qs.radius=.7071067811865476+t,Qs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Qs)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(Tl.x=s.normal.x>0?e.max.x:e.min.x,Tl.y=s.normal.y>0?e.max.y:e.min.y,Tl.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Tl)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},hp=new Mt,$l=class n{constructor(){this.coordinateSystem=hi,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,i=this._frustums;for(let s=0;s<t.length;s++){let r=t[s];hp.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),i[s]===void 0&&(i[s]=new Rs),i[s].setFromProjectionMatrix(hp,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,i=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new Rs),t[s].copy(i[s]);return this._count=e._count,this}clone(){return new n().copy(this)}};var to=class extends Ci{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Xe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Yl=new Y,Zl=new Y,up=new Mt,Oo=new ea,wl=new as,_u=new Y,fp=new Y,ta=class extends zt{constructor(e=new Bt,t=new to){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)Yl.fromBufferAttribute(t,s-1),Zl.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=Yl.distanceTo(Zl);e.setAttribute("lineDistance",new rt(i,1))}else Ye("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),wl.copy(i.boundingSphere),wl.applyMatrix4(s),wl.radius+=r,e.ray.intersectsSphere(wl)===!1)return;up.copy(s).invert(),Oo.copy(e.ray).applyMatrix4(up);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=i.index,f=i.attributes.position;if(h!==null){let d=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let v=d,x=p-1;v<x;v+=c){let m=h.getX(v),y=h.getX(v+1),b=El(this,e,Oo,l,m,y,v);b&&t.push(b)}if(this.isLineLoop){let v=h.getX(p-1),x=h.getX(d),m=El(this,e,Oo,l,v,x,p-1);m&&t.push(m)}}else{let d=Math.max(0,o.start),p=Math.min(f.count,o.start+o.count);for(let v=d,x=p-1;v<x;v+=c){let m=El(this,e,Oo,l,v,v+1,v);m&&t.push(m)}if(this.isLineLoop){let v=El(this,e,Oo,l,p-1,d,p-1);v&&t.push(v)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function El(n,e,t,i,s,r,o){let a=n.geometry.attributes.position;if(Yl.fromBufferAttribute(a,s),Zl.fromBufferAttribute(a,r),t.distanceSqToSegment(Yl,Zl,_u,fp)>i)return;_u.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(_u);if(!(c<e.near||c>e.far))return{distance:c,point:fp.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}var na=class extends kn{constructor(e=[],t=cr,i,s,r,o,a,l,c,h){super(e,t,i,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Qn=class extends kn{constructor(e,t,i,s,r,o,a,l,c){super(e,t,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var ls=class extends kn{constructor(e,t,i=Ii,s,r,o,a=_n,l=_n,c,h=os,u=1){if(h!==os&&h!==us)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:u};super(f,s,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Jr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},ia=class extends ls{constructor(e,t=Ii,i=cr,s,r,o=_n,a=_n,l,c=os){let h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,i,s,r,o,a,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},sa=class extends kn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Ut=class n extends Bt{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],f=0,d=0;p("z","y","x",-1,-1,i,t,e,o,r,0),p("z","y","x",1,-1,i,t,-e,o,r,1),p("x","z","y",1,1,e,i,t,s,o,2),p("x","z","y",1,-1,e,i,-t,s,o,3),p("x","y","z",1,-1,e,t,i,s,r,4),p("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new rt(c,3)),this.setAttribute("normal",new rt(h,3)),this.setAttribute("uv",new rt(u,2));function p(v,x,m,y,b,M,R,S,g,_,A){let w=M/g,C=R/_,L=M/2,T=R/2,P=S/2,z=g+1,X=_+1,q=0,B=0,U=new Y;for(let H=0;H<X;H++){let E=H*C-T;for(let F=0;F<z;F++){let G=F*w-L;U[v]=G*y,U[x]=E*b,U[m]=P,c.push(U.x,U.y,U.z),U[v]=0,U[x]=0,U[m]=S>0?1:-1,h.push(U.x,U.y,U.z),u.push(F/g),u.push(1-H/_),q+=1}}for(let H=0;H<_;H++)for(let E=0;E<g;E++){let F=f+E+z*H,G=f+E+z*(H+1),O=f+(E+1)+z*(H+1),N=f+(E+1)+z*H;l.push(F,G,N),l.push(G,O,N),B+=6}a.addGroup(d,B,A),d+=B,f+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Cs=class n extends Bt{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new Y,h=new ge;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=t;u++,f+=3){let d=i+u/t*s;c.x=e*Math.cos(d),c.y=e*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[f]/e+1)/2,h.y=(o[f+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new rt(o,3)),this.setAttribute("normal",new rt(a,3)),this.setAttribute("uv",new rt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}},zn=class n extends Bt{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],f=[],d=[],p=0,v=[],x=i/2,m=0;y(),o===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(h),this.setAttribute("position",new rt(u,3)),this.setAttribute("normal",new rt(f,3)),this.setAttribute("uv",new rt(d,2));function y(){let M=new Y,R=new Y,S=0,g=(t-e)/i;for(let _=0;_<=r;_++){let A=[],w=_/r,C=w*(t-e)+e;for(let L=0;L<=s;L++){let T=L/s,P=T*l+a,z=Math.sin(P),X=Math.cos(P);R.x=C*z,R.y=-w*i+x,R.z=C*X,u.push(R.x,R.y,R.z),M.set(z,g,X).normalize(),f.push(M.x,M.y,M.z),d.push(T,1-w),A.push(p++)}v.push(A)}for(let _=0;_<s;_++)for(let A=0;A<r;A++){let w=v[A][_],C=v[A+1][_],L=v[A+1][_+1],T=v[A][_+1];(e>0||A!==0)&&(h.push(w,C,T),S+=3),(t>0||A!==r-1)&&(h.push(C,L,T),S+=3)}c.addGroup(m,S,0),m+=S}function b(M){let R=p,S=new ge,g=new Y,_=0,A=M===!0?e:t,w=M===!0?1:-1;for(let L=1;L<=s;L++)u.push(0,x*w,0),f.push(0,w,0),d.push(.5,.5),p++;let C=p;for(let L=0;L<=s;L++){let P=L/s*l+a,z=Math.cos(P),X=Math.sin(P);g.x=A*X,g.y=x*w,g.z=A*z,u.push(g.x,g.y,g.z),f.push(0,w,0),S.x=z*.5+.5,S.y=X*.5*w+.5,d.push(S.x,S.y),p++}for(let L=0;L<s;L++){let T=R+L,P=C+L;M===!0?h.push(P,P+1,T):h.push(P+1,P,T),_+=3}c.addGroup(m,_,M===!0?1:2),m+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},cs=class n extends zn{constructor(e=1,t=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},ra=class n extends Bt{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};let r=[],o=[];a(s),c(i),h(),this.setAttribute("position",new rt(r,3)),this.setAttribute("normal",new rt(r.slice(),3)),this.setAttribute("uv",new rt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(y){let b=new Y,M=new Y,R=new Y;for(let S=0;S<t.length;S+=3)d(t[S+0],b),d(t[S+1],M),d(t[S+2],R),l(b,M,R,y)}function l(y,b,M,R){let S=R+1,g=[];for(let _=0;_<=S;_++){g[_]=[];let A=y.clone().lerp(M,_/S),w=b.clone().lerp(M,_/S),C=S-_;for(let L=0;L<=C;L++)L===0&&_===S?g[_][L]=A:g[_][L]=A.clone().lerp(w,L/C)}for(let _=0;_<S;_++)for(let A=0;A<2*(S-_)-1;A++){let w=Math.floor(A/2);A%2===0?(f(g[_][w+1]),f(g[_+1][w]),f(g[_][w])):(f(g[_][w+1]),f(g[_+1][w+1]),f(g[_+1][w]))}}function c(y){let b=new Y;for(let M=0;M<r.length;M+=3)b.x=r[M+0],b.y=r[M+1],b.z=r[M+2],b.normalize().multiplyScalar(y),r[M+0]=b.x,r[M+1]=b.y,r[M+2]=b.z}function h(){let y=new Y;for(let b=0;b<r.length;b+=3){y.x=r[b+0],y.y=r[b+1],y.z=r[b+2];let M=x(y)/2/Math.PI+.5,R=m(y)/Math.PI+.5;o.push(M,1-R)}p(),u()}function u(){for(let y=0;y<o.length;y+=6){let b=o[y+0],M=o[y+2],R=o[y+4],S=Math.max(b,M,R),g=Math.min(b,M,R);S>.9&&g<.1&&(b<.2&&(o[y+0]+=1),M<.2&&(o[y+2]+=1),R<.2&&(o[y+4]+=1))}}function f(y){r.push(y.x,y.y,y.z)}function d(y,b){let M=y*3;b.x=e[M+0],b.y=e[M+1],b.z=e[M+2]}function p(){let y=new Y,b=new Y,M=new Y,R=new Y,S=new ge,g=new ge,_=new ge;for(let A=0,w=0;A<r.length;A+=9,w+=6){y.set(r[A+0],r[A+1],r[A+2]),b.set(r[A+3],r[A+4],r[A+5]),M.set(r[A+6],r[A+7],r[A+8]),S.set(o[w+0],o[w+1]),g.set(o[w+2],o[w+3]),_.set(o[w+4],o[w+5]),R.copy(y).add(b).add(M).divideScalar(3);let C=x(R);v(S,w+0,y,C),v(g,w+2,b,C),v(_,w+4,M,C)}}function v(y,b,M,R){R<0&&y.x===1&&(o[b]=y.x-1),M.x===0&&M.z===0&&(o[b]=R/2/Math.PI+.5)}function x(y){return Math.atan2(y.z,-y.x)}function m(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.detail)}};var ei=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ye("Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),s=0,r=i.length,o;t?o=t:o=e*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);let h=i[s],f=i[s+1]-h,d=(o-h)/f;return(s+d)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new ge:new Y);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new Y,s=[],r=[],o=[],a=new Y,l=new Mt;for(let d=0;d<=e;d++){let p=d/e;s[d]=this.getTangentAt(p,new Y)}r[0]=new Y,o[0]=new Y;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),f<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(ft(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,p))}o[d].crossVectors(s[d],r[d])}if(t===!0){let d=Math.acos(ft(r[0].dot(r[e]),-1,1));d/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(d=-d);for(let p=1;p<=e;p++)r[p].applyMatrix4(l.makeRotationAxis(s[p],d*p)),o[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}},no=class extends ei{constructor(e=0,t=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new ge){let i=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*u+this.aX,c=f*u+d*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Kl=class extends no{constructor(e,t,i,s,r,o){super(e,t,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function lf(){let n=0,e=0,t=0,i=0;function s(r,o,a,l){n=r,e=a,t=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let f=(o-r)/c-(a-r)/(c+h)+(a-o)/h,d=(a-o)/h-(l-o)/(h+u)+(l-a)/u;f*=h,d*=h,s(o,a,f,d)},calc:function(r){let o=r*r,a=o*r;return n+e*r+t*o+i*a}}}var dp=new Y,pp=new Y,Mu=new lf,bu=new lf,Su=new lf,Jl=class extends ei{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new Y){let i=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(pp.subVectors(s[0],s[1]).add(s[0]),c=pp);let u=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(dp.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=dp),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(u),d),v=Math.pow(u.distanceToSquared(f),d),x=Math.pow(f.distanceToSquared(h),d);v<1e-4&&(v=1),p<1e-4&&(p=v),x<1e-4&&(x=v),Mu.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,p,v,x),bu.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,p,v,x),Su.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,p,v,x)}else this.curveType==="catmullrom"&&(Mu.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),bu.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),Su.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return i.set(Mu.calc(l),bu.calc(l),Su.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new Y().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function mp(n,e,t,i,s){let r=(i-e)*.5,o=(s-t)*.5,a=n*n,l=n*a;return(2*t-2*i+r+o)*l+(-3*t+3*i-2*r-o)*a+r*n+t}function xx(n,e){let t=1-n;return t*t*e}function yx(n,e){return 2*(1-n)*n*e}function vx(n,e){return n*n*e}function Ho(n,e,t,i){return xx(n,e)+yx(n,t)+vx(n,i)}function _x(n,e){let t=1-n;return t*t*t*e}function Mx(n,e){let t=1-n;return 3*t*t*n*e}function bx(n,e){return 3*(1-n)*n*n*e}function Sx(n,e){return n*n*n*e}function Vo(n,e,t,i,s){return _x(n,e)+Mx(n,t)+bx(n,i)+Sx(n,s)}var oa=class extends ei{constructor(e=new ge,t=new ge,i=new ge,s=new ge){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new ge){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Vo(e,s.x,r.x,o.x,a.x),Vo(e,s.y,r.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},jl=class extends ei{constructor(e=new Y,t=new Y,i=new Y,s=new Y){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new Y){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Vo(e,s.x,r.x,o.x,a.x),Vo(e,s.y,r.y,o.y,a.y),Vo(e,s.z,r.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},aa=class extends ei{constructor(e=new ge,t=new ge){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ge){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ge){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ql=class extends ei{constructor(e=new Y,t=new Y){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new Y){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Y){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},la=class extends ei{constructor(e=new ge,t=new ge,i=new ge){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new ge){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(Ho(e,s.x,r.x,o.x),Ho(e,s.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ec=class extends ei{constructor(e=new Y,t=new Y,i=new Y){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new Y){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(Ho(e,s.x,r.x,o.x),Ho(e,s.y,r.y,o.y),Ho(e,s.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ca=class extends ei{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ge){let i=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return i.set(mp(a,l.x,c.x,h.x,u.x),mp(a,l.y,c.y,h.y,u.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new ge().fromArray(s))}return this}},Cu=Object.freeze({__proto__:null,ArcCurve:Kl,CatmullRomCurve3:Jl,CubicBezierCurve:oa,CubicBezierCurve3:jl,EllipseCurve:no,LineCurve:aa,LineCurve3:Ql,QuadraticBezierCurve:la,QuadraticBezierCurve3:ec,SplineCurve:ca}),tc=class extends ei{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Cu[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let o=s[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this.cacheLengths=null,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(new Cu[s.type]().fromJSON(s))}return this.cacheLengths=null,this}},ha=class extends tc{constructor(e){super(),this.type="Path",this.currentPoint=new ge,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new aa(this.currentPoint.clone(),new ge(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){let r=new la(this.currentPoint.clone(),new ge(e,t),new ge(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,o){let a=new oa(this.currentPoint.clone(),new ge(e,t),new ge(i,s),new ge(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new ca(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,i,s,r,o),this}absarc(e,t,i,s,r,o){return this.absellipse(e,t,i,i,s,r,o),this}ellipse(e,t,i,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,i,s,r,o,a,l),this}absellipse(e,t,i,s,r,o,a,l){let c=new no(e,t,i,s,r,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},io=class extends ha{constructor(e){super(e),this.uuid=Fs(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(new ha().fromJSON(s))}return this}};function Tx(n,e,t=2){let i=e&&e.length,s=i?e[0]*t:n.length,r=f0(n,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(i&&(r=Cx(n,e,r,t)),n.length>80*t){a=n[0],l=n[1];let h=a,u=l;for(let f=t;f<s;f+=t){let d=n[f],p=n[f+1];d<a&&(a=d),p<l&&(l=p),d>h&&(h=d),p>u&&(u=p)}c=Math.max(h-a,u-l),c=c!==0?32767/c:0}return ua(r,o,t,a,l,c,0),o}function f0(n,e,t,i,s){let r;if(s===Bx(n,e,t,i)>0)for(let o=e;o<t;o+=i)r=gp(o/i|0,n[o],n[o+1],r);else for(let o=t-i;o>=e;o-=i)r=gp(o/i|0,n[o],n[o+1],r);return r&&so(r,r.next)&&(da(r),r=r.next),r}function ir(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(so(t,t.next)||Kt(t.prev,t,t.next)===0)){if(da(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function ua(n,e,t,i,s,r,o){if(!n)return;!o&&r&&Dx(n,i,s,r);let a=n;for(;n.prev!==n.next;){let l=n.prev,c=n.next;if(r?Ex(n,i,s,r):wx(n)){e.push(l.i,n.i,c.i),da(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=Ax(ir(n),e),ua(n,e,t,i,s,r,2)):o===2&&Rx(n,e,t,i,s,r):ua(ir(n),e,t,i,s,r,1);break}}}function wx(n){let e=n.prev,t=n,i=n.next;if(Kt(e,t,i)>=0)return!1;let s=e.x,r=t.x,o=i.x,a=e.y,l=t.y,c=i.y,h=Math.min(s,r,o),u=Math.min(a,l,c),f=Math.max(s,r,o),d=Math.max(a,l,c),p=i.next;for(;p!==e;){if(p.x>=h&&p.x<=f&&p.y>=u&&p.y<=d&&zo(s,a,r,l,o,c,p.x,p.y)&&Kt(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function Ex(n,e,t,i){let s=n.prev,r=n,o=n.next;if(Kt(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,u=r.y,f=o.y,d=Math.min(a,l,c),p=Math.min(h,u,f),v=Math.max(a,l,c),x=Math.max(h,u,f),m=Pu(d,p,e,t,i),y=Pu(v,x,e,t,i),b=n.prevZ,M=n.nextZ;for(;b&&b.z>=m&&M&&M.z<=y;){if(b.x>=d&&b.x<=v&&b.y>=p&&b.y<=x&&b!==s&&b!==o&&zo(a,h,l,u,c,f,b.x,b.y)&&Kt(b.prev,b,b.next)>=0||(b=b.prevZ,M.x>=d&&M.x<=v&&M.y>=p&&M.y<=x&&M!==s&&M!==o&&zo(a,h,l,u,c,f,M.x,M.y)&&Kt(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;b&&b.z>=m;){if(b.x>=d&&b.x<=v&&b.y>=p&&b.y<=x&&b!==s&&b!==o&&zo(a,h,l,u,c,f,b.x,b.y)&&Kt(b.prev,b,b.next)>=0)return!1;b=b.prevZ}for(;M&&M.z<=y;){if(M.x>=d&&M.x<=v&&M.y>=p&&M.y<=x&&M!==s&&M!==o&&zo(a,h,l,u,c,f,M.x,M.y)&&Kt(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function Ax(n,e){let t=n;do{let i=t.prev,s=t.next.next;!so(i,s)&&p0(i,t,t.next,s)&&fa(i,s)&&fa(s,i)&&(e.push(i.i,t.i,s.i),da(t),da(t.next),t=n=s),t=t.next}while(t!==n);return ir(t)}function Rx(n,e,t,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&kx(o,a)){let l=m0(o,a);o=ir(o,o.next),l=ir(l,l.next),ua(o,e,t,i,s,r,0),ua(l,e,t,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function Cx(n,e,t,i){let s=[];for(let r=0,o=e.length;r<o;r++){let a=e[r]*i,l=r<o-1?e[r+1]*i:n.length,c=f0(n,a,l,i,!1);c===c.next&&(c.steiner=!0),s.push(Fx(c))}s.sort(Px);for(let r=0;r<s.length;r++)t=Ix(s[r],t);return t}function Px(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){let i=(n.next.y-n.y)/(n.next.x-n.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=i-s}return t}function Ix(n,e){let t=Lx(n,e);if(!t)return e;let i=m0(t,n);return ir(i,i.next),ir(t,t.next)}function Lx(n,e){let t=e,i=n.x,s=n.y,r=-1/0,o;if(so(n,t))return t;do{if(so(n,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let u=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=i&&u>r&&(r=u,o=t.x<t.next.x?t:t.next,u===i))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;t=o;do{if(i>=t.x&&t.x>=l&&i!==t.x&&d0(s<c?i:r,s,l,c,s<c?r:i,s,t.x,t.y)){let u=Math.abs(s-t.y)/(i-t.x);fa(t,n)&&(u<h||u===h&&(t.x>o.x||t.x===o.x&&Nx(o,t)))&&(o=t,h=u)}t=t.next}while(t!==a);return o}function Nx(n,e){return Kt(n.prev,n,e.prev)<0&&Kt(e.next,n,n.next)<0}function Dx(n,e,t,i){let s=n;do s.z===0&&(s.z=Pu(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,Ux(s)}function Ux(n){let e,t=1;do{let i=n,s;n=null;let r=null;for(e=0;i;){e++;let o=i,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||i.z<=o.z)?(s=i,i=i.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=o}r.nextZ=null,t*=2}while(e>1);return n}function Pu(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function Fx(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function d0(n,e,t,i,s,r,o,a){return(s-o)*(e-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(i-a)}function zo(n,e,t,i,s,r,o,a){return!(n===o&&e===a)&&d0(n,e,t,i,s,r,o,a)}function kx(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!Ox(n,e)&&(fa(n,e)&&fa(e,n)&&zx(n,e)&&(Kt(n.prev,n,e.prev)||Kt(n,e.prev,e))||so(n,e)&&Kt(n.prev,n,n.next)>0&&Kt(e.prev,e,e.next)>0)}function Kt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function so(n,e){return n.x===e.x&&n.y===e.y}function p0(n,e,t,i){let s=Rl(Kt(n,e,t)),r=Rl(Kt(n,e,i)),o=Rl(Kt(t,i,n)),a=Rl(Kt(t,i,e));return!!(s!==r&&o!==a||s===0&&Al(n,t,e)||r===0&&Al(n,i,e)||o===0&&Al(t,n,i)||a===0&&Al(t,e,i))}function Al(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function Rl(n){return n>0?1:n<0?-1:0}function Ox(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&p0(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function fa(n,e){return Kt(n.prev,n,n.next)<0?Kt(n,e,n.next)>=0&&Kt(n,n.prev,e)>=0:Kt(n,e,n.prev)<0||Kt(n,n.next,e)<0}function zx(n,e){let t=n,i=!1,s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function m0(n,e){let t=Iu(n.i,n.x,n.y),i=Iu(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function gp(n,e,t,i){let s=Iu(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function da(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Iu(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Bx(n,e,t,i){let s=0;for(let r=e,o=t-i;r<t;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}var Lu=class{static triangulate(e,t,i=2){return Tx(e,t,i)}},er=class n{static area(e){let t=e.length,i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return n.area(e)<0}static triangulateShape(e,t){let i=[],s=[],r=[];xp(e),yp(i,e);let o=e.length;t.forEach(xp);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,yp(i,t[l]);let a=Lu.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function xp(n){let e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function yp(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}var pa=class n extends Bt{constructor(e=new io([new ge(.5,.5),new ge(-.5,.5),new ge(-.5,-.5),new ge(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new rt(s,3)),this.setAttribute("uv",new rt(r,2)),this.computeVertexNormals();function o(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,p=t.bevelSize!==void 0?t.bevelSize:d-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,x=t.bevelSegments!==void 0?t.bevelSegments:3,m=t.extrudePath,y=t.UVGenerator!==void 0?t.UVGenerator:Hx,b,M=!1,R,S,g,_;if(m){b=m.getSpacedPoints(h),M=!0,f=!1;let ae=m.isCatmullRomCurve3?m.closed:!1;R=m.computeFrenetFrames(h,ae),S=new Y,g=new Y,_=new Y}f||(x=0,d=0,p=0,v=0);let A=a.extractPoints(c),w=A.shape,C=A.holes;if(!er.isClockWise(w)){w=w.reverse();for(let ae=0,he=C.length;ae<he;ae++){let de=C[ae];er.isClockWise(de)&&(C[ae]=de.reverse())}}function T(ae){let de=10000000000000001e-36,pe=ae[0];for(let ye=1;ye<=ae.length;ye++){let Ge=ye%ae.length,Le=ae[Ge],et=Le.x-pe.x,at=Le.y-pe.y,dt=et*et+at*at,Q=Math.max(Math.abs(Le.x),Math.abs(Le.y),Math.abs(pe.x),Math.abs(pe.y)),Yt=de*Q*Q;if(dt<=Yt){ae.splice(Ge,1),ye--;continue}pe=Le}}T(w),C.forEach(T);let P=C.length,z=w;for(let ae=0;ae<P;ae++){let he=C[ae];w=w.concat(he)}function X(ae,he,de){return he||Ze("ExtrudeGeometry: vec does not exist"),ae.clone().addScaledVector(he,de)}let q=w.length;function B(ae,he,de){let pe,ye,Ge,Le=ae.x-he.x,et=ae.y-he.y,at=de.x-ae.x,dt=de.y-ae.y,Q=Le*Le+et*et,Yt=Le*dt-et*at;if(Math.abs(Yt)>Number.EPSILON){let ut=Math.sqrt(Q),Pt=Math.sqrt(at*at+dt*dt),Ee=he.x-et/ut,tn=he.y+Le/ut,$e=de.x-dt/Pt,Je=de.y+at/Pt,W=(($e-Ee)*dt-(Je-tn)*at)/(Le*dt-et*at);pe=Ee+Le*W-ae.x,ye=tn+et*W-ae.y;let I=pe*pe+ye*ye;if(I<=2)return new ge(pe,ye);Ge=Math.sqrt(I/2)}else{let ut=!1;Le>Number.EPSILON?at>Number.EPSILON&&(ut=!0):Le<-Number.EPSILON?at<-Number.EPSILON&&(ut=!0):Math.sign(et)===Math.sign(dt)&&(ut=!0),ut?(pe=-et,ye=Le,Ge=Math.sqrt(Q)):(pe=Le,ye=et,Ge=Math.sqrt(Q/2))}return new ge(pe/Ge,ye/Ge)}let U=[];for(let ae=0,he=z.length,de=he-1,pe=ae+1;ae<he;ae++,de++,pe++)de===he&&(de=0),pe===he&&(pe=0),U[ae]=B(z[ae],z[de],z[pe]);let H=[],E,F=U.concat();for(let ae=0,he=P;ae<he;ae++){let de=C[ae];E=[];for(let pe=0,ye=de.length,Ge=ye-1,Le=pe+1;pe<ye;pe++,Ge++,Le++)Ge===ye&&(Ge=0),Le===ye&&(Le=0),E[pe]=B(de[pe],de[Ge],de[Le]);H.push(E),F=F.concat(E)}let G;if(x===0)G=er.triangulateShape(z,C);else{let ae=[],he=[];for(let de=0;de<x;de++){let pe=de/x,ye=d*Math.cos(pe*Math.PI/2),Ge=p*Math.sin(pe*Math.PI/2)+v;for(let Le=0,et=z.length;Le<et;Le++){let at=X(z[Le],U[Le],Ge);ie(at.x,at.y,-ye),pe===0&&ae.push(at)}for(let Le=0,et=P;Le<et;Le++){let at=C[Le];E=H[Le];let dt=[];for(let Q=0,Yt=at.length;Q<Yt;Q++){let ut=X(at[Q],E[Q],Ge);ie(ut.x,ut.y,-ye),pe===0&&dt.push(ut)}pe===0&&he.push(dt)}}G=er.triangulateShape(ae,he)}let O=G.length,N=p+v;for(let ae=0;ae<q;ae++){let he=f?X(w[ae],F[ae],N):w[ae];M?(g.copy(R.normals[0]).multiplyScalar(he.x),S.copy(R.binormals[0]).multiplyScalar(he.y),_.copy(b[0]).add(g).add(S),ie(_.x,_.y,_.z)):ie(he.x,he.y,0)}for(let ae=1;ae<=h;ae++)for(let he=0;he<q;he++){let de=f?X(w[he],F[he],N):w[he];M?(g.copy(R.normals[ae]).multiplyScalar(de.x),S.copy(R.binormals[ae]).multiplyScalar(de.y),_.copy(b[ae]).add(g).add(S),ie(_.x,_.y,_.z)):ie(de.x,de.y,u/h*ae)}for(let ae=x-1;ae>=0;ae--){let he=ae/x,de=d*Math.cos(he*Math.PI/2),pe=p*Math.sin(he*Math.PI/2)+v;for(let ye=0,Ge=z.length;ye<Ge;ye++){let Le=X(z[ye],U[ye],pe);ie(Le.x,Le.y,u+de)}for(let ye=0,Ge=C.length;ye<Ge;ye++){let Le=C[ye];E=H[ye];for(let et=0,at=Le.length;et<at;et++){let dt=X(Le[et],E[et],pe);M?ie(dt.x,dt.y+b[h-1].y,b[h-1].x+de):ie(dt.x,dt.y,u+de)}}}V(),K();function V(){let ae=s.length/3;if(f){let he=0,de=q*he;for(let pe=0;pe<O;pe++){let ye=G[pe];ue(ye[2]+de,ye[1]+de,ye[0]+de)}he=h+x*2,de=q*he;for(let pe=0;pe<O;pe++){let ye=G[pe];ue(ye[0]+de,ye[1]+de,ye[2]+de)}}else{for(let he=0;he<O;he++){let de=G[he];ue(de[2],de[1],de[0])}for(let he=0;he<O;he++){let de=G[he];ue(de[0]+q*h,de[1]+q*h,de[2]+q*h)}}i.addGroup(ae,s.length/3-ae,0)}function K(){let ae=s.length/3,he=0;J(z,he),he+=z.length;for(let de=0,pe=C.length;de<pe;de++){let ye=C[de];J(ye,he),he+=ye.length}i.addGroup(ae,s.length/3-ae,1)}function J(ae,he){let de=ae.length;for(;--de>=0;){let pe=de,ye=de-1;ye<0&&(ye=ae.length-1);for(let Ge=0,Le=h+x*2;Ge<Le;Ge++){let et=q*Ge,at=q*(Ge+1),dt=he+pe+et,Q=he+ye+et,Yt=he+ye+at,ut=he+pe+at;Te(dt,Q,Yt,ut)}}}function ie(ae,he,de){l.push(ae),l.push(he),l.push(de)}function ue(ae,he,de){De(ae),De(he),De(de);let pe=s.length/3,ye=y.generateTopUV(i,s,pe-3,pe-2,pe-1);We(ye[0]),We(ye[1]),We(ye[2])}function Te(ae,he,de,pe){De(ae),De(he),De(pe),De(he),De(de),De(pe);let ye=s.length/3,Ge=y.generateSideWallUV(i,s,ye-6,ye-3,ye-2,ye-1);We(Ge[0]),We(Ge[1]),We(Ge[3]),We(Ge[1]),We(Ge[2]),We(Ge[3])}function De(ae){s.push(l[ae*3+0]),s.push(l[ae*3+1]),s.push(l[ae*3+2])}function We(ae){r.push(ae.x),r.push(ae.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return Vx(t,i,e)}static fromJSON(e,t){let i=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];i.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Cu[s.type]().fromJSON(s)),new n(i,e.options)}},Hx={generateTopUV:function(n,e,t,i,s){let r=e[t*3],o=e[t*3+1],a=e[i*3],l=e[i*3+1],c=e[s*3],h=e[s*3+1];return[new ge(r,o),new ge(a,l),new ge(c,h)]},generateSideWallUV:function(n,e,t,i,s,r){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[i*3],h=e[i*3+1],u=e[i*3+2],f=e[s*3],d=e[s*3+1],p=e[s*3+2],v=e[r*3],x=e[r*3+1],m=e[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new ge(o,1-l),new ge(c,1-u),new ge(f,1-p),new ge(v,1-m)]:[new ge(a,1-l),new ge(h,1-u),new ge(d,1-p),new ge(x,1-m)]}};function Vx(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){let r=n[i];t.shapes.push(r.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Ps=class n extends ra{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}};var sr=class n extends ra{constructor(e=1,t=0){let i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},Vn=class n extends Bt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,u=e/a,f=t/l,d=[],p=[],v=[],x=[];for(let m=0;m<h;m++){let y=m*f-o;for(let b=0;b<c;b++){let M=b*u-r;p.push(M,-y,0),v.push(0,0,1),x.push(b/a),x.push(1-m/l)}}for(let m=0;m<l;m++)for(let y=0;y<a;y++){let b=y+c*m,M=y+c*(m+1),R=y+1+c*(m+1),S=y+1+c*m;d.push(b,M,S),d.push(M,R,S)}this.setIndex(d),this.setAttribute("position",new rt(p,3)),this.setAttribute("normal",new rt(v,3)),this.setAttribute("uv",new rt(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}};var fi=class n extends Bt{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new Y,f=new Y,d=[],p=[],v=[],x=[];for(let m=0;m<=i;m++){let y=[],b=m/i,M=o+b*a,R=e*Math.cos(M),S=Math.sqrt(e*e-R*R),g=0;m===0&&o===0?g=.5/t:m===i&&l===Math.PI&&(g=-.5/t);for(let _=0;_<=t;_++){let A=_/t,w=s+A*r;u.x=-S*Math.cos(w),u.y=R,u.z=S*Math.sin(w),p.push(u.x,u.y,u.z),f.copy(u).normalize(),v.push(f.x,f.y,f.z),x.push(A+g,1-b),y.push(c++)}h.push(y)}for(let m=0;m<i;m++)for(let y=0;y<t;y++){let b=h[m][y+1],M=h[m][y],R=h[m+1][y],S=h[m+1][y+1];(m!==0||o>0)&&d.push(b,M,S),(m!==i-1||l<Math.PI)&&d.push(M,R,S)}this.setIndex(d),this.setAttribute("position",new rt(p,3)),this.setAttribute("normal",new rt(v,3)),this.setAttribute("uv",new rt(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var rr=class n extends Bt{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},i=Math.floor(i),s=Math.floor(s);let l=[],c=[],h=[],u=[],f=new Y,d=new Y,p=new Y;for(let v=0;v<=i;v++){let x=o+v/i*a;for(let m=0;m<=s;m++){let y=m/s*r;d.x=(e+t*Math.cos(x))*Math.cos(y),d.y=(e+t*Math.cos(x))*Math.sin(y),d.z=t*Math.sin(x),c.push(d.x,d.y,d.z),f.x=e*Math.cos(y),f.y=e*Math.sin(y),p.subVectors(d,f).normalize(),h.push(p.x,p.y,p.z),u.push(m/s),u.push(v/i)}}for(let v=1;v<=i;v++)for(let x=1;x<=s;x++){let m=(s+1)*v+x-1,y=(s+1)*(v-1)+x-1,b=(s+1)*(v-1)+x,M=(s+1)*v+x;l.push(m,y,M),l.push(y,b,M)}this.setIndex(l),this.setAttribute("position",new rt(c,3)),this.setAttribute("normal",new rt(h,3)),this.setAttribute("uv",new rt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};function ur(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];if(vp(s))s.isRenderTargetTexture?(Ye("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(vp(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[t][i]=r}else e[t][i]=s.slice();else e[t][i]=s}}return e}function Ln(n){let e={};for(let t=0;t<n.length;t++){let i=ur(n[t]);for(let s in i)e[s]=i[s]}return e}function vp(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function Gx(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function cf(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:gt.workingColorSpace}var g0={clone:ur,merge:Ln},Wx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Xx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,di=class extends Ci{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Wx,this.fragmentShader=Xx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ur(e.uniforms),this.uniformsGroups=Gx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=t[s.value]||null;break;case"c":this.uniforms[i].value=new Xe().setHex(s.value);break;case"v2":this.uniforms[i].value=new ge().fromArray(s.value);break;case"v3":this.uniforms[i].value=new Y().fromArray(s.value);break;case"v4":this.uniforms[i].value=new $t().fromArray(s.value);break;case"m3":this.uniforms[i].value=new Qe().fromArray(s.value);break;case"m4":this.uniforms[i].value=new Mt().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},nc=class extends di{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Gn=class extends Ci{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Xe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ra,this.normalScale=new ge(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ui,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var Bn=class extends Ci{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ra,this.normalScale=new ge(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ui,this.combine=xc,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},ic=class extends Ci{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Zp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},sc=class extends Ci{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Wr(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function Cl(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var Is=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];e:{t:{let o;n:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break t}o=t.length;break n}if(!(e>=r)){let a=t[1];e<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break t}o=i,i=0;break n}break e}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},rc=class extends Is{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Eu,endingEnd:Eu}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Au:r=e,a=2*t-i;break;case Ru:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Au:o=e,l=2*i-t;break;case Ru:o=1,l=i+s[1]-s[0];break;default:o=e-1,l=t}let c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,p=(i-t)/(s-t),v=p*p,x=v*p,m=-f*x+2*f*v-f*p,y=(1+f)*x+(-1.5-2*f)*v+(-.5+f)*p+1,b=(-1-d)*x+(1.5+d)*v+.5*p,M=d*x-d*v;for(let R=0;R!==a;++R)r[R]=m*o[h+R]+y*o[c+R]+b*o[l+R]+M*o[u+R];return r}},oc=class extends Is{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(i-t)/(s-t),u=1-h;for(let f=0;f!==a;++f)r[f]=o[c+f]*u+o[l+f]*h;return r}},ac=class extends Is{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},lc=class extends Is{interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this.inTangents,u=this.outTangents;if(!h||!u){let p=(i-t)/(s-t),v=1-p;for(let x=0;x!==a;++x)r[x]=o[c+x]*v+o[l+x]*p;return r}let f=a*2,d=e-1;for(let p=0;p!==a;++p){let v=o[c+p],x=o[l+p],m=d*f+p*2,y=u[m],b=u[m+1],M=e*f+p*2,R=h[M],S=h[M+1],g=$x(i,t,y,R,s);r[p]=x0(g,v,b,S,x)}return r}};function x0(n,e,t,i,s){let r=1-n;return r*r*r*e+3*r*r*n*t+3*r*n*n*i+n*n*n*s}function qx(n,e,t,i,s){let r=1-n;return 3*r*r*(t-e)+6*r*n*(i-t)+3*n*n*(s-i)}function $x(n,e,t,i,s){let r=(n-e)/(s-e);for(let o=0;o<8;o++){let a=x0(r,e,t,i,s)-n;if(Math.abs(a)<1e-10)break;let l=qx(r,e,t,i,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var ti=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Wr(t,this.TimeBufferType),this.values=Wr(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Wr(e.times,Array),values:Wr(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s),Cl(e.settings)&&(i.settings={inTangents:Wr(e.settings.inTangents,Array),outTangents:Wr(e.settings.outTangents,Array)})}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new ac(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new oc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new rc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new lc(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Go:t=this.InterpolantFactoryMethodDiscrete;break;case Vl:t=this.InterpolantFactoryMethodLinear;break;case Ll:t=this.InterpolantFactoryMethodSmooth;break;case wu:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Ye("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Go;case this.InterpolantFactoryMethodLinear:return Vl;case this.InterpolantFactoryMethodSmooth:return Ll;case this.InterpolantFactoryMethodBezier:return wu}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e;Cl(this.settings)&&(_p(this.settings.inTangents,e),_p(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e;Cl(this.settings)&&(Mp(this.settings.inTangents,e),Mp(this.settings.outTangents,e))}return this}trim(e,t){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Ze("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(Ze("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){Ze("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){Ze("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&Kg(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){Ze("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Ll,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(s)l=!0;else{let u=a*i,f=u-i,d=u+i;for(let p=0;p!==i;++p){let v=t[u+p];if(v!==t[f+p]||v!==t[d+p]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let u=a*i,f=o*i;for(let d=0;d!==i;++d)t[f+d]=t[u+d]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,Cl(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function _p(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]+=e}function Mp(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]*=e}ti.prototype.ValueTypeName="";ti.prototype.TimeBufferType=Float32Array;ti.prototype.ValueBufferType=Float32Array;ti.prototype.DefaultInterpolation=Vl;var Ls=class extends ti{constructor(e,t,i){super(e,t,i)}};Ls.prototype.ValueTypeName="bool";Ls.prototype.ValueBufferType=Array;Ls.prototype.DefaultInterpolation=Go;Ls.prototype.InterpolantFactoryMethodLinear=void 0;Ls.prototype.InterpolantFactoryMethodSmooth=void 0;var cc=class extends ti{constructor(e,t,i,s){super(e,t,i,s)}};cc.prototype.ValueTypeName="color";var hc=class extends ti{constructor(e,t,i,s){super(e,t,i,s)}};hc.prototype.ValueTypeName="number";var uc=class extends Is{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(s-t),c=e*a;for(let h=c+a;c!==h;c+=4)Oi.slerpFlat(r,0,o,c-a,o,c,l);return r}},ma=class extends ti{constructor(e,t,i,s){super(e,t,i,s)}InterpolantFactoryMethodLinear(e){return new uc(this.times,this.values,this.getValueSize(),e)}};ma.prototype.ValueTypeName="quaternion";ma.prototype.InterpolantFactoryMethodSmooth=void 0;var Ns=class extends ti{constructor(e,t,i){super(e,t,i)}};Ns.prototype.ValueTypeName="string";Ns.prototype.ValueBufferType=Array;Ns.prototype.DefaultInterpolation=Go;Ns.prototype.InterpolantFactoryMethodLinear=void 0;Ns.prototype.InterpolantFactoryMethodSmooth=void 0;var fc=class extends ti{constructor(e,t,i,s){super(e,t,i,s)}};fc.prototype.ValueTypeName="vector";var dc=class{constructor(e,t,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let d=c[u],p=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},y0=new dc,pc=class{constructor(e){this.manager=e!==void 0?e:y0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};pc.DEFAULT_MATERIAL_NAME="__DEFAULT";var or=class extends zt{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Xe(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Hi=class extends or{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(zt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Xe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Tu=new Mt,bp=new Y,Sp=new Y,ga=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ge(512,512),this.mapType=Wn,this.map=null,this.mapPass=null,this.matrix=new Mt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Rs,this._frameExtents=new ge(1,1),this._viewportCount=1,this._viewports=[new $t(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;bp.setFromMatrixPosition(e.matrixWorld),t.position.copy(bp),Sp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Sp),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,s){Tu.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(Tu,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===Zr||e.reversedDepth?t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),t.multiply(Tu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Pl=new Y,Il=new Oi,Ui=new Y,xa=class extends zt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Mt,this.projectionMatrix=new Mt,this.projectionMatrixInverse=new Mt,this.coordinateSystem=hi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Pl,Il,Ui),Ui.x===1&&Ui.y===1&&Ui.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Pl,Il,Ui.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(Pl,Il,Ui),Ui.x===1&&Ui.y===1&&Ui.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Pl,Il,Ui.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Es=new Y,Tp=new ge,wp=new ge,fn=class extends xa{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Gl*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(jh*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Gl*2*Math.atan(Math.tan(jh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Es.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Es.x,Es.y).multiplyScalar(-e/Es.z),Es.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Es.x,Es.y).multiplyScalar(-e/Es.z)}getViewSize(e,t){return this.getViewBounds(e,Tp,wp),t.subVectors(wp,Tp)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(jh*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var Nu=class extends ga{constructor(){super(new fn(90,1,.5,500)),this.isPointLightShadow=!0}},Ds=class extends or{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Nu}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},hs=class extends xa{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Du=class extends ga{constructor(){super(new hs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Vi=class extends or{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(zt.DEFAULT_UP),this.updateMatrix(),this.target=new zt,this.shadow=new Du}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},ya=class extends or{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var Xr=-90,qr=1,ro=class extends zt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new fn(Xr,qr,e,t);s.layers=this.layers,this.add(s);let r=new fn(Xr,qr,e,t);r.layers=this.layers,this.add(r);let o=new fn(Xr,qr,e,t);o.layers=this.layers,this.add(o);let a=new fn(Xr,qr,e,t);a.layers=this.layers,this.add(a);let l=new fn(Xr,qr,e,t);l.layers=this.layers,this.add(l);let c=new fn(Xr,qr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===hi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Zr)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let v=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let x=!1;e.isWebGLRenderer===!0?x=e.state.buffers.depth.getReversed():x=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,2,s),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,3,s),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,s),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.mipmapsAutoUpdate=v,e.setRenderTarget(i,5,s),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(u,f,d),e.xr.enabled=p,i.texture.needsPMREMUpdate=!0}},mc=class extends fn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}};var hf="\\[\\]\\.:\\/",Yx=new RegExp("["+hf+"]","g"),uf="[^"+hf+"]",Zx="[^"+hf.replace("\\.","")+"]",Kx=/((?:WC+[\/:])*)/.source.replace("WC",uf),Jx=/(WCOD+)?/.source.replace("WCOD",Zx),jx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",uf),Qx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",uf),ey=new RegExp("^"+Kx+Jx+jx+Qx+"$"),ty=["material","materials","bones","map"],Uu=class{constructor(e,t,i){let s=i||Ot.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Ot=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Yx,"")}static parseTrackName(e){let t=ey.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);ty.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=i(a.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ye("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){Ze("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ze("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ze("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ze("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ze("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){Ze("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){Ze("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;Ze("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Ze("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ze("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ot.Composite=Uu;Ot.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ot.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ot.prototype.GetterByBindingType=[Ot.prototype._getValue_direct,Ot.prototype._getValue_array,Ot.prototype._getValue_arrayElement,Ot.prototype._getValue_toArray];Ot.prototype.SetterByBindingTypeAndVersioning=[[Ot.prototype._setValue_direct,Ot.prototype._setValue_direct_setNeedsUpdate,Ot.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ot.prototype._setValue_array,Ot.prototype._setValue_array_setNeedsUpdate,Ot.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ot.prototype._setValue_arrayElement,Ot.prototype._setValue_arrayElement_setNeedsUpdate,Ot.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ot.prototype._setValue_fromArray,Ot.prototype._setValue_fromArray_setNeedsUpdate,Ot.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var ES=new Float32Array(1);var Fu=class{static{this.prototype.isMatrix2=!0}constructor(e,t,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=s,this}};function ff(n,e,t,i){let s=ny(i);switch(t){case ef:return n*e;case Tc:return n*e/s.components*s.byteLength;case wc:return n*e/s.components*s.byteLength;case Us:return n*e*2/s.components*s.byteLength;case Ec:return n*e*2/s.components*s.byteLength;case tf:return n*e*3/s.components*s.byteLength;case ni:return n*e*4/s.components*s.byteLength;case Ac:return n*e*4/s.components*s.byteLength;case ba:case Sa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ta:case wa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Cc:case Ic:return Math.max(n,16)*Math.max(e,8)/4;case Rc:case Pc:return Math.max(n,8)*Math.max(e,8)/2;case Lc:case Nc:case Uc:case Fc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Dc:case Ea:case kc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Oc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case zc:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Bc:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Hc:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Vc:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Gc:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Wc:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Xc:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case qc:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case $c:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Yc:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Zc:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Kc:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Jc:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case jc:case Qc:case eh:return Math.ceil(n/4)*Math.ceil(e/4)*16;case th:case nh:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Aa:case ih:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function ny(n){switch(n){case Wn:case Ku:return{byteLength:1,components:1};case co:case Ju:case Li:return{byteLength:2,components:1};case bc:case Sc:return{byteLength:2,components:4};case Ii:case Mc:case mi:return{byteLength:4,components:1};case ju:case Qu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Ye("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function B0(){let n=null,e=!1,t=null,i=null;function s(r,o){i=n.requestAnimationFrame(s),t(r,o)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function ly(n){let e=new WeakMap;function t(a,l){let c=a.array,h=a.usage,u=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,h),a.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,l,c){let h=l.array,u=l.updateRanges;if(n.bindBuffer(c,a),u.length===0)n.bufferSubData(c,0,h);else{u.sort((d,p)=>d.start-p.start);let f=0;for(let d=1;d<u.length;d++){let p=u[f],v=u[d];v.start<=p.start+p.count+1?p.count=Math.max(p.count,v.start+v.count-p.start):(++f,u[f]=v)}u.length=f+1;for(let d=0,p=u.length;d<p;d++){let v=u[d];n.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var cy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,hy=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,uy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,fy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,dy=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,py=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,my=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,gy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,xy=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,yy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,vy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,_y=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,My=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,by=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Sy=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Ty=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,wy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ey=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ay=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ry=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Cy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Py=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Iy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Ly=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Ny=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Dy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Uy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Fy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ky=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Oy="gl_FragColor = linearToOutputTexel( gl_FragColor );",zy=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,By=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Hy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Vy=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Gy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Wy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Xy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,qy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,$y=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Yy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Zy=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Ky=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Jy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,jy=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Qy=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,e1=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,t1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,n1=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,i1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,s1=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,r1=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,o1=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,a1=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,l1=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,c1=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,h1=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,u1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,f1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,d1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,p1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,m1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,g1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,x1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,y1=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,v1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,_1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,M1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,b1=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,S1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,T1=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,w1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,E1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,A1=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,R1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,C1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,P1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,I1=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,L1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,N1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,D1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,U1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,F1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,k1=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,O1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,z1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,B1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,H1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,V1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,G1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,W1=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,X1=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,q1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,$1=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Y1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Z1=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,K1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,J1=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,j1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Q1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ev=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tv=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,nv=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,iv=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,sv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,rv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ov=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,av=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,lv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,cv=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,uv=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,mv=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,gv=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,xv=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,yv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,vv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_v=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Mv=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,bv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Sv=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Tv=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wv=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ev=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Av=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Rv=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Cv=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Pv=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Iv=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lv=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Nv=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dv=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Uv=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fv=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,kv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ov=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zv=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Bv=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Hv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ct={alphahash_fragment:cy,alphahash_pars_fragment:hy,alphamap_fragment:uy,alphamap_pars_fragment:fy,alphatest_fragment:dy,alphatest_pars_fragment:py,aomap_fragment:my,aomap_pars_fragment:gy,batching_pars_vertex:xy,batching_vertex:yy,begin_vertex:vy,beginnormal_vertex:_y,bsdfs:My,iridescence_fragment:by,bumpmap_pars_fragment:Sy,clipping_planes_fragment:Ty,clipping_planes_pars_fragment:wy,clipping_planes_pars_vertex:Ey,clipping_planes_vertex:Ay,color_fragment:Ry,color_pars_fragment:Cy,color_pars_vertex:Py,color_vertex:Iy,common:Ly,defaultnormal_vertex:Ny,displacementmap_pars_vertex:Dy,displacementmap_vertex:Uy,emissivemap_fragment:Fy,emissivemap_pars_fragment:ky,colorspace_fragment:Oy,colorspace_pars_fragment:zy,envmap_fragment:By,envmap_common_pars_fragment:Hy,envmap_pars_fragment:Vy,envmap_pars_vertex:Gy,envmap_physical_pars_fragment:e1,envmap_vertex:Wy,fog_vertex:Xy,fog_pars_vertex:qy,fog_fragment:$y,fog_pars_fragment:Yy,gradientmap_pars_fragment:Zy,lightmap_pars_fragment:Ky,lights_lambert_fragment:Jy,lights_lambert_pars_fragment:jy,lights_pars_begin:Qy,lights_toon_fragment:t1,lights_toon_pars_fragment:n1,lights_phong_fragment:i1,lights_phong_pars_fragment:s1,lights_physical_fragment:r1,lights_physical_pars_fragment:o1,lights_fragment_begin:a1,lights_fragment_maps:l1,lights_fragment_end:c1,lightprobes_pars_fragment:h1,logdepthbuf_fragment:u1,logdepthbuf_pars_fragment:f1,logdepthbuf_pars_vertex:d1,logdepthbuf_vertex:p1,map_fragment:m1,map_pars_fragment:g1,map_particle_fragment:x1,map_particle_pars_fragment:y1,metalnessmap_fragment:v1,metalnessmap_pars_fragment:_1,morphinstance_vertex:M1,morphcolor_vertex:b1,morphnormal_vertex:S1,morphtarget_pars_vertex:T1,morphtarget_vertex:w1,normal_fragment_begin:E1,normal_fragment_maps:A1,normal_pars_fragment:R1,normal_pars_vertex:C1,normal_vertex:P1,normalmap_pars_fragment:I1,clearcoat_normal_fragment_begin:L1,clearcoat_normal_fragment_maps:N1,clearcoat_pars_fragment:D1,iridescence_pars_fragment:U1,opaque_fragment:F1,packing:k1,premultiplied_alpha_fragment:O1,project_vertex:z1,dithering_fragment:B1,dithering_pars_fragment:H1,roughnessmap_fragment:V1,roughnessmap_pars_fragment:G1,shadowmap_pars_fragment:W1,shadowmap_pars_vertex:X1,shadowmap_vertex:q1,shadowmask_pars_fragment:$1,skinbase_vertex:Y1,skinning_pars_vertex:Z1,skinning_vertex:K1,skinnormal_vertex:J1,specularmap_fragment:j1,specularmap_pars_fragment:Q1,tonemapping_fragment:ev,tonemapping_pars_fragment:tv,transmission_fragment:nv,transmission_pars_fragment:iv,uv_pars_fragment:sv,uv_pars_vertex:rv,uv_vertex:ov,worldpos_vertex:av,background_vert:lv,background_frag:cv,backgroundCube_vert:hv,backgroundCube_frag:uv,cube_vert:fv,cube_frag:dv,depth_vert:pv,depth_frag:mv,distance_vert:gv,distance_frag:xv,equirect_vert:yv,equirect_frag:vv,linedashed_vert:_v,linedashed_frag:Mv,meshbasic_vert:bv,meshbasic_frag:Sv,meshlambert_vert:Tv,meshlambert_frag:wv,meshmatcap_vert:Ev,meshmatcap_frag:Av,meshnormal_vert:Rv,meshnormal_frag:Cv,meshphong_vert:Pv,meshphong_frag:Iv,meshphysical_vert:Lv,meshphysical_frag:Nv,meshtoon_vert:Dv,meshtoon_frag:Uv,points_vert:Fv,points_frag:kv,shadow_vert:Ov,shadow_frag:zv,sprite_vert:Bv,sprite_frag:Hv},Pe={common:{diffuse:{value:new Xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qe}},envmap:{envMap:{value:null},envMapRotation:{value:new Qe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qe},normalScale:{value:new ge(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0},uvTransform:{value:new Qe}},sprite:{diffuse:{value:new Xe(16777215)},opacity:{value:1},center:{value:new ge(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}}},qi={basic:{uniforms:Ln([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.fog]),vertexShader:ct.meshbasic_vert,fragmentShader:ct.meshbasic_frag},lambert:{uniforms:Ln([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new Xe(0)},envMapIntensity:{value:1}}]),vertexShader:ct.meshlambert_vert,fragmentShader:ct.meshlambert_frag},phong:{uniforms:Ln([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new Xe(0)},specular:{value:new Xe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ct.meshphong_vert,fragmentShader:ct.meshphong_frag},standard:{uniforms:Ln([Pe.common,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.roughnessmap,Pe.metalnessmap,Pe.fog,Pe.lights,{emissive:{value:new Xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag},toon:{uniforms:Ln([Pe.common,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.gradientmap,Pe.fog,Pe.lights,{emissive:{value:new Xe(0)}}]),vertexShader:ct.meshtoon_vert,fragmentShader:ct.meshtoon_frag},matcap:{uniforms:Ln([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,{matcap:{value:null}}]),vertexShader:ct.meshmatcap_vert,fragmentShader:ct.meshmatcap_frag},points:{uniforms:Ln([Pe.points,Pe.fog]),vertexShader:ct.points_vert,fragmentShader:ct.points_frag},dashed:{uniforms:Ln([Pe.common,Pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ct.linedashed_vert,fragmentShader:ct.linedashed_frag},depth:{uniforms:Ln([Pe.common,Pe.displacementmap]),vertexShader:ct.depth_vert,fragmentShader:ct.depth_frag},normal:{uniforms:Ln([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,{opacity:{value:1}}]),vertexShader:ct.meshnormal_vert,fragmentShader:ct.meshnormal_frag},sprite:{uniforms:Ln([Pe.sprite,Pe.fog]),vertexShader:ct.sprite_vert,fragmentShader:ct.sprite_frag},background:{uniforms:{uvTransform:{value:new Qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ct.background_vert,fragmentShader:ct.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Qe}},vertexShader:ct.backgroundCube_vert,fragmentShader:ct.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ct.cube_vert,fragmentShader:ct.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ct.equirect_vert,fragmentShader:ct.equirect_frag},distance:{uniforms:Ln([Pe.common,Pe.displacementmap,{referencePosition:{value:new Y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ct.distance_vert,fragmentShader:ct.distance_frag},shadow:{uniforms:Ln([Pe.lights,Pe.fog,{color:{value:new Xe(0)},opacity:{value:1}}]),vertexShader:ct.shadow_vert,fragmentShader:ct.shadow_frag}};qi.physical={uniforms:Ln([qi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qe},clearcoatNormalScale:{value:new ge(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qe},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Qe},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qe},sheen:{value:0},sheenColor:{value:new Xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qe},transmissionSamplerSize:{value:new ge},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qe},attenuationDistance:{value:0},attenuationColor:{value:new Xe(0)},specularColor:{value:new Xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qe},anisotropyVector:{value:new ge},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qe}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag};var rh={r:0,b:0,g:0},Vv=new Mt,H0=new Qe;H0.set(-1,0,0,0,1,0,0,0,1);function Gv(n,e,t,i,s,r){let o=new Xe(0),a=s===!0?0:1,l,c,h=null,u=0,f=null;function d(y){let b=y.isScene===!0?y.background:null;if(b&&b.isTexture){let M=y.backgroundBlurriness>0;b=e.get(b,M)}return b}function p(y){let b=!1,M=d(y);M===null?x(o,a):M&&M.isColor&&(x(M,1),b=!0);let R=n.xr.getEnvironmentBlendMode();R==="additive"?t.buffers.color.setClear(0,0,0,1,r):R==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||b)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function v(y,b){let M=d(b);M&&M.isCubeTexture?(c===void 0&&(c=new Oe(new Ut(1,1,1),new di({name:"BackgroundCubeMaterial",uniforms:ur(qi.backgroundCube.uniforms),vertexShader:qi.backgroundCube.vertexShader,fragmentShader:qi.backgroundCube.fragmentShader,side:dn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(R,S,g){this.matrixWorld.copyPosition(g.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Vv.makeRotationFromEuler(b.backgroundRotation)).transpose(),M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(H0),c.material.toneMapped=gt.getTransfer(M.colorSpace)!==St,(h!==M||u!==M.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,h=M,u=M.version,f=n.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new Oe(new Vn(2,2),new di({name:"BackgroundMaterial",uniforms:ur(qi.background.uniforms),vertexShader:qi.background.vertexShader,fragmentShader:qi.background.fragmentShader,side:Gi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.toneMapped=gt.getTransfer(M.colorSpace)!==St,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||u!==M.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,h=M,u=M.version,f=n.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function x(y,b){y.getRGB(rh,cf(n)),t.buffers.color.setClear(rh.r,rh.g,rh.b,b,r)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,b=1){o.set(y),a=b,x(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(y){a=y,x(o,a)},render:p,addToRenderList:v,dispose:m}}function Wv(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null),r=s,o=!1;function a(C,L,T,P,z){let X=!1,q=u(C,P,T,L);r!==q&&(r=q,c(r.object)),X=d(C,P,T,z),X&&p(C,P,T,z),z!==null&&e.update(z,n.ELEMENT_ARRAY_BUFFER),(X||o)&&(o=!1,M(C,L,T,P),z!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function l(){return n.createVertexArray()}function c(C){return n.bindVertexArray(C)}function h(C){return n.deleteVertexArray(C)}function u(C,L,T,P){let z=P.wireframe===!0,X=i[L.id];X===void 0&&(X={},i[L.id]=X);let q=C.isInstancedMesh===!0?C.id:0,B=X[q];B===void 0&&(B={},X[q]=B);let U=B[T.id];U===void 0&&(U={},B[T.id]=U);let H=U[z];return H===void 0&&(H=f(l()),U[z]=H),H}function f(C){let L=[],T=[],P=[];for(let z=0;z<t;z++)L[z]=0,T[z]=0,P[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:T,attributeDivisors:P,object:C,attributes:{},index:null}}function d(C,L,T,P){let z=r.attributes,X=L.attributes,q=0,B=T.getAttributes();for(let U in B)if(B[U].location>=0){let E=z[U],F=X[U];if(F===void 0&&(U==="instanceMatrix"&&C.instanceMatrix&&(F=C.instanceMatrix),U==="instanceColor"&&C.instanceColor&&(F=C.instanceColor)),E===void 0||E.attribute!==F||F&&E.data!==F.data)return!0;q++}return r.attributesNum!==q||r.index!==P}function p(C,L,T,P){let z={},X=L.attributes,q=0,B=T.getAttributes();for(let U in B)if(B[U].location>=0){let E=X[U];E===void 0&&(U==="instanceMatrix"&&C.instanceMatrix&&(E=C.instanceMatrix),U==="instanceColor"&&C.instanceColor&&(E=C.instanceColor));let F={};F.attribute=E,E&&E.data&&(F.data=E.data),z[U]=F,q++}r.attributes=z,r.attributesNum=q,r.index=P}function v(){let C=r.newAttributes;for(let L=0,T=C.length;L<T;L++)C[L]=0}function x(C){m(C,0)}function m(C,L){let T=r.newAttributes,P=r.enabledAttributes,z=r.attributeDivisors;T[C]=1,P[C]===0&&(n.enableVertexAttribArray(C),P[C]=1),z[C]!==L&&(n.vertexAttribDivisor(C,L),z[C]=L)}function y(){let C=r.newAttributes,L=r.enabledAttributes;for(let T=0,P=L.length;T<P;T++)L[T]!==C[T]&&(n.disableVertexAttribArray(T),L[T]=0)}function b(C,L,T,P,z,X,q){q===!0?n.vertexAttribIPointer(C,L,T,z,X):n.vertexAttribPointer(C,L,T,P,z,X)}function M(C,L,T,P){v();let z=P.attributes,X=T.getAttributes(),q=L.defaultAttributeValues;for(let B in X){let U=X[B];if(U.location>=0){let H=z[B];if(H===void 0&&(B==="instanceMatrix"&&C.instanceMatrix&&(H=C.instanceMatrix),B==="instanceColor"&&C.instanceColor&&(H=C.instanceColor)),H!==void 0){let E=H.normalized,F=H.itemSize,G=e.get(H);if(G===void 0)continue;let O=G.buffer,N=G.type,V=G.bytesPerElement,K=N===n.INT||N===n.UNSIGNED_INT||H.gpuType===Mc;if(H.isInterleavedBufferAttribute){let J=H.data,ie=J.isInterleavedBuffer===!0?J.stride:J.itemSize,ue=H.offset;if(J.isInstancedInterleavedBuffer||J.isInstancedBufferAttribute){for(let Te=0;Te<U.locationSize;Te++)m(U.location+Te,J.meshPerAttribute);C.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let Te=0;Te<U.locationSize;Te++)x(U.location+Te);n.bindBuffer(n.ARRAY_BUFFER,O);for(let Te=0;Te<U.locationSize;Te++)b(U.location+Te,F/U.locationSize,N,E,ie*V,(ue+F/U.locationSize*Te)*V,K)}else{if(H.isInstancedBufferAttribute){for(let J=0;J<U.locationSize;J++)m(U.location+J,H.meshPerAttribute);C.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=H.meshPerAttribute*H.count)}else for(let J=0;J<U.locationSize;J++)x(U.location+J);n.bindBuffer(n.ARRAY_BUFFER,O);for(let J=0;J<U.locationSize;J++)b(U.location+J,F/U.locationSize,N,E,F*V,F/U.locationSize*J*V,K)}}else if(q!==void 0){let E=q[B];if(E!==void 0)switch(E.length){case 2:n.vertexAttrib2fv(U.location,E);break;case 3:n.vertexAttrib3fv(U.location,E);break;case 4:n.vertexAttrib4fv(U.location,E);break;default:n.vertexAttrib1fv(U.location,E)}}}}y()}function R(){A();for(let C in i){let L=i[C];for(let T in L){let P=L[T];for(let z in P){let X=P[z];for(let q in X)h(X[q].object),delete X[q];delete P[z]}}delete i[C]}}function S(C){if(i[C.id]===void 0)return;let L=i[C.id];for(let T in L){let P=L[T];for(let z in P){let X=P[z];for(let q in X)h(X[q].object),delete X[q];delete P[z]}}delete i[C.id]}function g(C){for(let L in i){let T=i[L];for(let P in T){let z=T[P];if(z[C.id]===void 0)continue;let X=z[C.id];for(let q in X)h(X[q].object),delete X[q];delete z[C.id]}}}function _(C){for(let L in i){let T=i[L],P=C.isInstancedMesh===!0?C.id:0,z=T[P];if(z!==void 0){for(let X in z){let q=z[X];for(let B in q)h(q[B].object),delete q[B];delete z[X]}delete T[P],Object.keys(T).length===0&&delete i[L]}}}function A(){w(),o=!0,r!==s&&(r=s,c(r.object))}function w(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:A,resetDefaultState:w,dispose:R,releaseStatesOfGeometry:S,releaseStatesOfObject:_,releaseStatesOfProgram:g,initAttributes:v,enableAttribute:x,disableUnusedAttributes:y}}function Xv(n,e,t){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),t.update(c,i,1)}function o(l,c,h){h!==0&&(n.drawArraysInstanced(i,l,c,h),t.update(c,i,h))}function a(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let f=0;for(let d=0;d<h;d++)f+=c[d];t.update(f,i,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function qv(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let g=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(g.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(g){return!(g!==ni&&i.convert(g)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(g){let _=g===Li&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(g!==Wn&&g!==mi&&!_&&i.convert(g)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(g){if(g==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";g="mediump"}return g==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(Ye("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=t.logarithmicDepthBuffer===!0&&u===!1;t.reversedDepthBuffer===!0&&u===!1&&Ye("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&u===!0&&Ye("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),x=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),y=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),b=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),R=n.getParameter(n.MAX_SAMPLES),S=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:u,maxTextures:d,maxVertexTextures:p,maxTextureSize:v,maxCubemapSize:x,maxAttributes:m,maxVertexUniforms:y,maxVaryings:b,maxFragmentUniforms:M,maxSamples:R,samples:S}}function $v(n){let e=this,t=null,i=0,s=!1,r=!1,o=new Ri,a=new Qe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||i!==0||s;return s=f,i=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,d){let p=u.clippingPlanes,v=u.clipIntersection,x=u.clipShadows,m=n.get(u);if(!s||p===null||p.length===0||r&&!x)r?h(null):c();else{let y=r?0:i,b=y*4,M=m.clippingState||null;l.value=M,M=h(p,f,b,d);for(let R=0;R!==b;++R)M[R]=t[R];m.clippingState=M,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,f,d,p){let v=u!==null?u.length:0,x=null;if(v!==0){if(x=l.value,p!==!0||x===null){let m=d+v*4,y=f.matrixWorldInverse;a.getNormalMatrix(y),(x===null||x.length<m)&&(x=new Float32Array(m));for(let b=0,M=d;b!==v;++b,M+=4)o.copy(u[b]).applyMatrix4(y,a),o.normal.toArray(x,M),x[M+3]=o.constant}l.value=x,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,x}}var Ia=class extends Jn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new na(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Ut(5,5,5),r=new di({name:"CubemapFromEquirect",uniforms:ur(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:dn,blending:ar});r.uniforms.tEquirect.value=t;let o=new Oe(s,r),a=t.minFilter;return t.minFilter===Pi&&(t.minFilter=wn),new ro(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}},v0=256,Yv=3,Zv=20,V0=256,G0=16,Kv=3,Jv=new Y,jv=new Xe,fo=class n{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new ro(1,10,null),this._boxMesh=new Oe(new Ut(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){let{size:o=256,position:a=Jv}=r,l=this._renderer;this._setSize(o);let c=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);let u=l.autoClear,f=l.autoClearColor,d=l.autoClearDepth,p=l.autoClearStencil,v=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,v===null&&(e.background=l.getClearColor(jv));let x=new ro(i,s,h);return x.position.copy(a),x.update(l,e),l.autoClear=u,l.autoClearColor=f,l.autoClearDepth=d,l.autoClearStencil=p,e.background=v,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=b0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=M0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(v0,a0(e))}_fromTexture(e,t){e.mapping===cr||e.mapping===lo?this._setSize(e.image.length===0?v0:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let i=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(i),i}_allocateTarget(){let e=this._cubeSize,t=_0(e,!1,!1),i=Math.log2(e)-Yv;for(let s=0;s<=i;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==t||e&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=_0(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,i){let s=this._boxMesh,r=this._cubeCamera;s.material=i,r.renderTarget=e,r.activeMipmapLevel=t;let o=e.width>>t;e.viewport.set(0,0,o,o),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===cr||e.mapping===lo?(this._cubemapMaterial===null&&(this._cubemapMaterial=b0()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=M0()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=Qv(),this._integrationMaterial=e_());let t=this._cubeSize,i=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/G0);for(let o=0;o<=i;o++){let a=n.lodToRoughness(o,i);if(o>i-Kv)r.roughness.value=a,this._renderCube(e,o,this._integrationMaterial);else{let l=a>0?Math.log2(t)+.5*Math.log2(6/(V0*Math.pow(a,4)))+.5:0;s.roughness.value=a,s.lodBias.value=l,this._renderCube(e,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=t_());let i=this._blurMaterial,s=i.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,i),s.envMap.value=e.texture,this._renderCube(r,0,i)}};function _0(n,e,t){return new Ia(n,{minFilter:Pi,generateMipmaps:e,type:Li,colorSpace:Wo,depthBuffer:t})}function La(n,e,t){return new di({name:n,uniforms:e,vertexShader:ct.cube_vert,fragmentShader:t,side:dn,blending:ar,depthTest:!1,depthWrite:!1})}function Qv(){return La("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${V0}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function e_(){return La("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:G0}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function t_(){return La("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Zv}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function M0(){return La("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function b0(){return La("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function n_(n){let e=new WeakMap,t=new WeakMap,i=null;function s(f,d=!1){return f==null?null:d?o(f):r(f)}function r(f){if(f&&f.isTexture){let d=f.mapping;if(d===yc||d===vc)if(e.has(f)){let p=e.get(f).texture;return a(p,f.mapping)}else{let p=f.image;if(p&&p.height>0){let v=new Ia(p.height);return v.fromEquirectangularTexture(n,f),e.set(f,v),f.addEventListener("dispose",c),a(v.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture&&f.isPMREMTexture!==!0){let d=f.mapping,p=d===yc||d===vc,v=d===cr||d===lo;if(p||v){let x=t.get(f),m=x!==void 0?x.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==m)return i===null&&(i=new fo(n)),x=p?i.fromEquirectangular(f,x):i.fromCubemap(f,x),x.texture.pmremVersion=f.pmremVersion,t.set(f,x),x.texture;if(x!==void 0)return x.texture;{let y=f.image;return p&&y&&y.height>0||v&&y&&l(y)?(i===null&&(i=new fo(n)),x=p?i.fromEquirectangular(f):i.fromCubemap(f),x.texture.pmremVersion=f.pmremVersion,t.set(f,x),f.addEventListener("dispose",h),x.texture):null}}}return f}function a(f,d){return d===yc?f.mapping=cr:d===vc&&(f.mapping=lo),f}function l(f){let d=0,p=6;for(let v=0;v<p;v++)f[v]!==void 0&&d++;return d===p}function c(f){let d=f.target;d.removeEventListener("dispose",c);let p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function h(f){let d=f.target;d.removeEventListener("dispose",h);let p=t.get(d);p!==void 0&&(t.delete(d),p.dispose())}function u(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:u}}function i_(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&Bo("WebGLRenderer: "+i+" extension not supported."),s}}}function s_(n,e,t,i){let s={},r=new WeakMap,o=new FinalizationRegistry(p=>delete s[p]);function a(p){l(p.target)}function l(p){p.index!==null&&e.remove(p.index);for(let x in p.attributes)e.remove(p.attributes[x]);p.removeEventListener("dispose",a),delete s[p.id],o.unregister(p);let v=r.get(p);v&&(e.remove(v),r.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function c(p,v){return s[v.id]!==void 0||(v.addEventListener("dispose",a),s[v.id]=new WeakRef(v),o.register(v,v.id,v),t.memory.geometries++),v}function h(p){let v=p.attributes;for(let x in v)e.update(v[x],n.ARRAY_BUFFER)}function u(p){let v=p.index,x=p.attributes.position,m=0;if(x===void 0)return;let y=v!==null?v.array.length:x.array.length/3-1,b=x.count>=65535?jo:Jo,M=new b(Math.ceil(y/3)*6,1),R=M.array;if(v!==null){let g=v.array;m=v.version;for(let _=0,A=0;_<y;_+=3){let w=g[_+0],C=g[_+1],L=g[_+2];R[A++]=w,R[A++]=C,R[A++]=C,R[A++]=L,R[A++]=L,R[A++]=w}}else{m=x.version;for(let g=0,_=0;g<y;g+=3){let A=g+0,w=g+1,C=g+2;R[_++]=A,R[_++]=w,R[_++]=w,R[_++]=C,R[_++]=C,R[_++]=A}}M.version=m;let S=r.get(p);S&&e.remove(S),r.set(p,M)}function f(p){let v=r.get(p);if(v){let x=p.index;x!==null&&v.version<x.version&&u(p)}else u(p);return r.get(p)}function d(){for(let p in s){let v=s[p].deref();v!==void 0&&l(v)}}return{get:c,update:h,getWireframeAttribute:f,dispose:d}}function r_(n,e,t){let i;function s(u){i=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function l(u,f){n.drawElements(i,f,r,u*o),t.update(f,i,1)}function c(u,f,d){d!==0&&(n.drawElementsInstanced(i,f,r,u*o,d),t.update(f,i,d))}function h(u,f,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,u,0,d);let v=0;for(let x=0;x<d;x++)v+=f[x];t.update(v,i,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function o_(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:Ze("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function a_(n,e,t){let i=new WeakMap,s=new $t;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,f=i.get(a);if(f===void 0||f.count!==u){let A=function(){g.dispose(),i.delete(a),a.removeEventListener("dispose",A)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,x=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],y=a.morphAttributes.color||[],b=0;d===!0&&(b=1),p===!0&&(b=2),v===!0&&(b=3);let M=a.attributes.position.count*b,R=1;M>e.maxTextureSize&&(R=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);let S=new Float32Array(M*R*4*u),g=new Yo(S,M,R,u);g.type=mi,g.needsUpdate=!0;let _=b*4;for(let w=0;w<u;w++){let C=x[w],L=m[w],T=y[w],P=M*R*4*w;for(let z=0;z<C.count;z++){let X=z*_;d===!0&&(s.fromBufferAttribute(C,z),S[P+X+0]=s.x,S[P+X+1]=s.y,S[P+X+2]=s.z,S[P+X+3]=0),p===!0&&(s.fromBufferAttribute(L,z),S[P+X+4]=s.x,S[P+X+5]=s.y,S[P+X+6]=s.z,S[P+X+7]=0),v===!0&&(s.fromBufferAttribute(T,z),S[P+X+8]=s.x,S[P+X+9]=s.y,S[P+X+10]=s.z,S[P+X+11]=T.itemSize===4?s.w:1)}}f={count:u,texture:g,size:new ge(M,R)},i.set(a,f),a.addEventListener("dispose",A)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let d=0;for(let v=0;v<c.length;v++)d+=c[v];let p=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(n,"morphTargetBaseInfluence",p),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function l_(n,e,t,i,s){let r=new WeakMap;function o(c){let h=s.render.frame,u=c.geometry,f=e.get(c,u);if(r.get(f)!==h&&(e.update(f),r.set(f,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let d=c.skeleton;r.get(d)!==h&&(d.update(),r.set(d,h))}return f}function a(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:o,dispose:a}}var c_={[Gu]:"LINEAR_TONE_MAPPING",[Wu]:"REINHARD_TONE_MAPPING",[Xu]:"CINEON_TONE_MAPPING",[_a]:"ACES_FILMIC_TONE_MAPPING",[$u]:"AGX_TONE_MAPPING",[Yu]:"NEUTRAL_TONE_MAPPING",[qu]:"CUSTOM_TONE_MAPPING"};function h_(n,e,t,i,s,r){let o=new Jn(e,t,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=null,h=new Bt;h.setAttribute("position",new rt([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new rt([0,2,0,0,2,0],2));let u=new nc({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new Oe(h,u),d=new hs(-1,1,1,-1,0,1),p=null,v=null,x=!1,m,y=null,b=[],M=!1;this.setSize=function(R,S){o.setSize(R,S),a!==null&&a.setSize(R,S),l!==null&&l.setSize(R,S);for(let g=0;g<b.length;g++){let _=b[g];_.setSize&&_.setSize(R,S)}},this.setEffects=function(R){b=R,M=b.length>0&&b[0].isRenderPass===!0;let S=o.width,g=o.height;b.length>0&&a===null&&(a=new Jn(S,g,{type:Li,depthBuffer:!1,stencilBuffer:!1}),l=new Jn(S,g,{type:Li,depthBuffer:!1,stencilBuffer:!1}));let _=s===!0&&b.some(A=>A.needsDepthTexture===!0);_!==(o.depthTexture!==null)&&(_===!0&&c===null&&(c=new ls(S,g),r===!0&&(c.format=us,c.type=hr)),o.dispose(),o.depthTexture=_?c:null,o.resolveDepthBuffer=_,o.storeMultisampledDepthBuffer=_);for(let A=0;A<b.length;A++){let w=b[A];w.setSize&&w.setSize(S,g),_&&w.needsDepthTexture===!0&&w.setDepthTexture&&w.setDepthTexture(c)}},this.begin=function(R,S){if(x||R.toneMapping===Wi&&b.length===0)return!1;if(y=S,S!==null){let g=S.width,_=S.height;(o.width!==g||o.height!==_)&&this.setSize(g,_)}return M===!1&&R.setRenderTarget(o),m=R.toneMapping,R.toneMapping=Wi,!0},this.hasRenderPass=function(){return M},this.end=function(R,S){R.toneMapping=m,x=!0;let g=o,_=a;for(let A=0;A<b.length;A++){let w=b[A];w.enabled!==!1&&(w.render(R,_,g,S),w.needsSwap!==!1&&(g=_,_=_===a?l:a))}if(p!==R.outputColorSpace||v!==R.toneMapping){p=R.outputColorSpace,v=R.toneMapping,u.defines={},gt.getTransfer(p)===St&&(u.defines.SRGB_TRANSFER="");let A=c_[v];A&&(u.defines[A]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=g.texture,R.setRenderTarget(y),R.render(f,d),y=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),h.dispose(),u.dispose()}}var W0=new kn,X0=new ls(1,1),q0=new ia(1),$0=new Yo,Y0=new ql,Z0=new na,S0=[],T0=[],w0=new Float32Array(16),E0=new Float32Array(9),A0=new Float32Array(4);function po(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=S0[s];if(r===void 0&&(r=new Float32Array(s),S0[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function pn(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function mn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function ah(n,e){let t=T0[e];t===void 0&&(t=new Int32Array(e),T0[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function u_(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function f_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pn(t,e))return;n.uniform2fv(this.addr,e),mn(t,e)}}function d_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(pn(t,e))return;n.uniform3fv(this.addr,e),mn(t,e)}}function p_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pn(t,e))return;n.uniform4fv(this.addr,e),mn(t,e)}}function m_(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(pn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),mn(t,e)}else{if(pn(t,i))return;A0.set(i),n.uniformMatrix2fv(this.addr,!1,A0),mn(t,i)}}function g_(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(pn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),mn(t,e)}else{if(pn(t,i))return;E0.set(i),n.uniformMatrix3fv(this.addr,!1,E0),mn(t,i)}}function x_(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(pn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),mn(t,e)}else{if(pn(t,i))return;w0.set(i),n.uniformMatrix4fv(this.addr,!1,w0),mn(t,i)}}function y_(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function v_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pn(t,e))return;n.uniform2iv(this.addr,e),mn(t,e)}}function __(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(pn(t,e))return;n.uniform3iv(this.addr,e),mn(t,e)}}function M_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pn(t,e))return;n.uniform4iv(this.addr,e),mn(t,e)}}function b_(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function S_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pn(t,e))return;n.uniform2uiv(this.addr,e),mn(t,e)}}function T_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(pn(t,e))return;n.uniform3uiv(this.addr,e),mn(t,e)}}function w_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pn(t,e))return;n.uniform4uiv(this.addr,e),mn(t,e)}}function lh(n){return n.version===0&&(n.compareFunction=rf,n.needsUpdate=!0),n}function E_(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?r=lh(X0):r=W0,t.setTexture2D(e||r,s)}function A_(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Y0,s)}function R_(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_CUBE_SHADOW?r=lh(q0):r=Z0,t.setTextureCube(e||r,s)}function C_(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||$0,s)}function P_(n){switch(n){case 5126:return u_;case 35664:return f_;case 35665:return d_;case 35666:return p_;case 35674:return m_;case 35675:return g_;case 35676:return x_;case 5124:case 35670:return y_;case 35667:case 35671:return v_;case 35668:case 35672:return __;case 35669:case 35673:return M_;case 5125:return b_;case 36294:return S_;case 36295:return T_;case 36296:return w_;case 35678:case 36198:case 36298:case 36306:case 35682:return E_;case 35679:case 36299:case 36307:return A_;case 35680:case 36300:case 36308:case 36293:return R_;case 36289:case 36303:case 36311:case 36292:return C_}}function I_(n,e){n.uniform1fv(this.addr,e)}function L_(n,e){let t=po(e,this.size,2);n.uniform2fv(this.addr,t)}function N_(n,e){let t=po(e,this.size,3);n.uniform3fv(this.addr,t)}function D_(n,e){let t=po(e,this.size,4);n.uniform4fv(this.addr,t)}function U_(n,e){let t=po(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function F_(n,e){let t=po(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function k_(n,e){let t=po(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function O_(n,e){n.uniform1iv(this.addr,e)}function z_(n,e){n.uniform2iv(this.addr,e)}function B_(n,e){n.uniform3iv(this.addr,e)}function H_(n,e){n.uniform4iv(this.addr,e)}function V_(n,e){n.uniform1uiv(this.addr,e)}function G_(n,e){n.uniform2uiv(this.addr,e)}function W_(n,e){n.uniform3uiv(this.addr,e)}function X_(n,e){n.uniform4uiv(this.addr,e)}function q_(n,e,t){let i=this.cache,s=e.length,r=ah(t,s);pn(i,r)||(n.uniform1iv(this.addr,r),mn(i,r));let o;this.type===n.SAMPLER_2D_SHADOW?o=lh(X0):o=W0;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function $_(n,e,t){let i=this.cache,s=e.length,r=ah(t,s);pn(i,r)||(n.uniform1iv(this.addr,r),mn(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Y0,r[o])}function Y_(n,e,t){let i=this.cache,s=e.length,r=ah(t,s);pn(i,r)||(n.uniform1iv(this.addr,r),mn(i,r));let o;this.type===n.SAMPLER_CUBE_SHADOW?o=lh(q0):o=Z0;for(let a=0;a!==s;++a)t.setTextureCube(e[a]||o,r[a])}function Z_(n,e,t){let i=this.cache,s=e.length,r=ah(t,s);pn(i,r)||(n.uniform1iv(this.addr,r),mn(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||$0,r[o])}function K_(n){switch(n){case 5126:return I_;case 35664:return L_;case 35665:return N_;case 35666:return D_;case 35674:return U_;case 35675:return F_;case 35676:return k_;case 5124:case 35670:return O_;case 35667:case 35671:return z_;case 35668:case 35672:return B_;case 35669:case 35673:return H_;case 5125:return V_;case 36294:return G_;case 36295:return W_;case 36296:return X_;case 35678:case 36198:case 36298:case 36306:case 35682:return q_;case 35679:case 36299:case 36307:return $_;case 35680:case 36300:case 36308:case 36293:return Y_;case 36289:case 36303:case 36311:case 36292:return Z_}}var mf=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=P_(t.type)}},gf=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=K_(t.type)}},xf=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],i)}}},df=/(\w+)(\])?(\[|\.)?/g;function R0(n,e){n.seq.push(e),n.map[e.id]=e}function J_(n,e,t){let i=n.name,s=i.length;for(df.lastIndex=0;;){let r=df.exec(i),o=df.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){R0(t,c===void 0?new mf(a,n,e):new gf(a,n,e));break}else{let u=t.map[a];u===void 0&&(u=new xf(a),R0(t,u)),t=u}}}var uo=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){let a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);J_(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&i.push(o)}return i}};function C0(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var j_=37297,Q_=0;function eM(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}var P0=new Qe;function tM(n){gt._getMatrix(P0,gt.workingColorSpace,n);let e=`mat3( ${P0.elements.map(t=>t.toFixed(4))} )`;switch(gt.getTransfer(n)){case Xo:return[e,"LinearTransferOETF"];case St:return[e,"sRGBTransferOETF"];default:return Ye("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function I0(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+eM(n.getShaderSource(e),a)}else return r}function nM(n,e){let t=tM(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var iM={[Gu]:"Linear",[Wu]:"Reinhard",[Xu]:"Cineon",[_a]:"ACESFilmic",[$u]:"AgX",[Yu]:"Neutral",[qu]:"Custom"};function sM(n,e){let t=iM[e];return t===void 0?(Ye("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var oh=new Y;function rM(){gt.getLuminanceCoefficients(oh);let n=oh.x.toFixed(4),e=oh.y.toFixed(4),t=oh.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function oM(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Pa).join(`
`)}function aM(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function lM(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Pa(n){return n!==""}function L0(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function N0(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var cM=/^[ \t]*#include +<([\w\d./]+)>/gm;function yf(n){return n.replace(cM,hM)}function hM(n,e){let t=ct[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return yf(t)}var uM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function D0(n){return n.replace(uM,fM)}function fM(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function U0(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var dM={[va]:"SHADOWMAP_TYPE_PCF",[oo]:"SHADOWMAP_TYPE_VSM"};function pM(n){return dM[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var mM={[lo]:"ENVMAP_MODE_REFRACTION"};function gM(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":mM[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var xM={[xc]:"ENVMAP_BLENDING_MULTIPLY",[qp]:"ENVMAP_BLENDING_MIX",[$p]:"ENVMAP_BLENDING_ADD"};function yM(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":xM[n.combine]||"ENVMAP_BLENDING_NONE"}function vM(n,e,t,i){let s=n.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=pM(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=gM(t),u=yM(t),f=oM(t),d=aM(r),p=s.createProgram(),v,x,m=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d].filter(Pa).join(`
`),v.length>0&&(v+=`
`),x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d].filter(Pa).join(`
`),x.length>0&&(x+=`
`)):(v=[U0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Pa).join(`
`),x=[U0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Wi?"#define TONE_MAPPING":"",t.toneMapping!==Wi?ct.tonemapping_pars_fragment:"",t.toneMapping!==Wi?sM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ct.colorspace_pars_fragment,nM("linearToOutputTexel",t.outputColorSpace),rM(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Pa).join(`
`)),o=yf(o),o=L0(o,t),o=N0(o,t),a=yf(a),a=L0(a,t),a=N0(a,t),o=D0(o),a=D0(a),t.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,v=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,x=["#define varying in",t.glslVersion===af?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===af?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);let y=m+v+o,b=m+x+a,M=C0(s,s.VERTEX_SHADER,y),R=C0(s,s.FRAGMENT_SHADER,b);s.attachShader(p,M),s.attachShader(p,R),t.index0AttributeName!==void 0?s.bindAttribLocation(p,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(p,0,"position"),s.linkProgram(p);function S(w){if(n.debug.checkShaderErrors){let C=s.getProgramInfoLog(p)||"",L=s.getShaderInfoLog(M)||"",T=s.getShaderInfoLog(R)||"",P=C.trim(),z=L.trim(),X=T.trim(),q=!0,B=!0;if(s.getProgramParameter(p,s.LINK_STATUS)===!1)if(q=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,p,M,R);else{let U=I0(s,M,"vertex"),H=I0(s,R,"fragment");Ze("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(p,s.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+P+`
`+U+`
`+H)}else P!==""?Ye("WebGLProgram: Program Info Log:",P):(z===""||X==="")&&(B=!1);B&&(w.diagnostics={runnable:q,programLog:P,vertexShader:{log:z,prefix:v},fragmentShader:{log:X,prefix:x}})}s.deleteShader(M),s.deleteShader(R),g=new uo(s,p),_=lM(s,p)}let g;this.getUniforms=function(){return g===void 0&&S(this),g};let _;this.getAttributes=function(){return _===void 0&&S(this),_};let A=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=s.getProgramParameter(p,j_)),A},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Q_++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=M,this.fragmentShader=R,this}var _M=0,vf=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new _f(e),t.set(e,i)),i}},_f=class{constructor(e){this.id=_M++,this.code=e,this.usedTimes=0}};function MM(n){return n===Us||n===Ea||n===Aa}function bM(n,e,t,i,s,r){let o=new Zo,a=new vf,l=new Set,c=[],h=new Map,u=i.logarithmicDepthBuffer,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(g){return l.add(g),g===0?"uv":`uv${g}`}function p(g,_,A,w,C,L){let T=w.fog,P=C.geometry,z=g.isMeshStandardMaterial||g.isMeshLambertMaterial||g.isMeshPhongMaterial?w.environment:null,X=g.isMeshStandardMaterial||g.isMeshLambertMaterial&&!g.envMap||g.isMeshPhongMaterial&&!g.envMap,q=e.get(g.envMap||z,X),B=f[g.type],U=i.precision;g.precision!==null&&(U=i.getMaxPrecision(g.precision),U!==g.precision&&Ye("WebGLProgram.getParameters:",g.precision,"not supported, using",U,"instead."));let H=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,E=H!==void 0?H.length:0,F=0;P.morphAttributes.position!==void 0&&(F=1),P.morphAttributes.normal!==void 0&&(F=2),P.morphAttributes.color!==void 0&&(F=3);let G,O,N,V;if(B){let Ce=qi[B];G=Ce.vertexShader,O=Ce.fragmentShader}else{G=g.vertexShader,O=g.fragmentShader;let Ce=a.getVertexShaderStage(g),wt=a.getFragmentShaderStage(g);a.update(g,Ce,wt),N=Ce.id,V=wt.id}let K=n.getRenderTarget(),J=n.state.buffers.depth.getReversed(),ie=C.isInstancedMesh===!0,ue=C.isBatchedMesh===!0,Te=!!g.map,De=!!g.matcap,We=!!q,ae=We&&q.isPMREMTexture===!0,he=!!g.aoMap,de=!!g.lightMap,pe=!!g.bumpMap&&g.wireframe===!1,ye=!!g.normalMap,Ge=!!g.displacementMap,Le=!!g.emissiveMap,et=!!g.metalnessMap,at=!!g.roughnessMap,dt=g.anisotropy>0,Q=g.clearcoat>0,Yt=g.diffuseRoughness>0,ut=g.dispersion>0,Pt=g.retroreflectivity>0,Ee=g.iridescence>0,tn=g.sheen>0,$e=g.transmission>0,Je=dt&&!!g.anisotropyMap,W=Q&&!!g.clearcoatMap,I=Q&&!!g.clearcoatNormalMap,te=Q&&!!g.clearcoatRoughnessMap,me=Yt&&!!g.diffuseRoughnessMap,fe=Ee&&!!g.iridescenceMap,_e=Ee&&!!g.iridescenceThicknessMap,Ae=tn&&!!g.sheenColorMap,oe=tn&&!!g.sheenRoughnessMap,le=!!g.specularMap,be=!!g.specularColorMap,Z=!!g.specularIntensityMap,ce=$e&&!!g.transmissionMap,re=$e&&!!g.thicknessMap,Se=!!g.gradientMap,ve=!!g.alphaMap,Me=g.alphaTest>0,Ve=!!g.alphaHash,lt=!!g.extensions,xe=Wi;g.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(xe=n.toneMapping);let qe=ae?q.isCompressedCubeTexture?q.image[0].mipmaps:q.mipmaps:null,ot={shaderID:B,shaderType:g.type,shaderName:g.name,vertexShader:G,fragmentShader:O,defines:g.defines,customVertexShaderID:N,customFragmentShaderID:V,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:U,batching:ue,batchingColor:ue&&C._colorsTexture!==null,instancing:ie,instancingColor:ie&&C.instanceColor!==null,instancingMorph:ie&&C.morphTexture!==null,outputColorSpace:K===null?n.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:gt.workingColorSpace,alphaToCoverage:!!g.alphaToCoverage,map:Te,matcap:De,envMap:We,envMapMode:We&&q.mapping,envMapPMREM:ae,envMapMaxLod:ae?qe.length-1:null,envMapSize:ae?qe[0].width:null,aoMap:he,lightMap:de,bumpMap:pe,normalMap:ye,displacementMap:Ge,emissiveMap:Le,normalMapObjectSpace:ye&&g.normalMapType===Kp,normalMapTangentSpace:ye&&g.normalMapType===Ra,packedNormalMap:ye&&g.normalMapType===Ra&&MM(g.normalMap.format),metalnessMap:et,roughnessMap:at,anisotropy:dt,anisotropyMap:Je,clearcoat:Q,clearcoatMap:W,clearcoatNormalMap:I,clearcoatRoughnessMap:te,diffuseRoughness:Yt,diffuseRoughnessMap:me,dispersion:ut,retroreflection:Pt,iridescence:Ee,iridescenceMap:fe,iridescenceThicknessMap:_e,sheen:tn,sheenColorMap:Ae,sheenRoughnessMap:oe,specularMap:le,specularColorMap:be,specularIntensityMap:Z,transmission:$e,transmissionMap:ce,thicknessMap:re,gradientMap:Se,opaque:g.transparent===!1&&g.blending===ao&&g.alphaToCoverage===!1,alphaMap:ve,alphaTest:Me,alphaHash:Ve,combine:g.combine,mapUv:Te&&d(g.map.channel),aoMapUv:he&&d(g.aoMap.channel),lightMapUv:de&&d(g.lightMap.channel),bumpMapUv:pe&&d(g.bumpMap.channel),normalMapUv:ye&&d(g.normalMap.channel),displacementMapUv:Ge&&d(g.displacementMap.channel),emissiveMapUv:Le&&d(g.emissiveMap.channel),metalnessMapUv:et&&d(g.metalnessMap.channel),roughnessMapUv:at&&d(g.roughnessMap.channel),anisotropyMapUv:Je&&d(g.anisotropyMap.channel),clearcoatMapUv:W&&d(g.clearcoatMap.channel),clearcoatNormalMapUv:I&&d(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:te&&d(g.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:me&&d(g.diffuseRoughnessMap.channel),iridescenceMapUv:fe&&d(g.iridescenceMap.channel),iridescenceThicknessMapUv:_e&&d(g.iridescenceThicknessMap.channel),sheenColorMapUv:Ae&&d(g.sheenColorMap.channel),sheenRoughnessMapUv:oe&&d(g.sheenRoughnessMap.channel),specularMapUv:le&&d(g.specularMap.channel),specularColorMapUv:be&&d(g.specularColorMap.channel),specularIntensityMapUv:Z&&d(g.specularIntensityMap.channel),transmissionMapUv:ce&&d(g.transmissionMap.channel),thicknessMapUv:re&&d(g.thicknessMap.channel),alphaMapUv:ve&&d(g.alphaMap.channel),vertexTangents:!!P.attributes.tangent&&(ye||dt),vertexNormals:!!P.attributes.normal,vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,pointsUvs:C.isPoints===!0&&!!P.attributes.uv&&(Te||ve),fog:!!T,useFog:g.fog===!0,fogExp2:!!T&&T.isFogExp2,flatShading:g.wireframe===!1&&(g.flatShading===!0||P.attributes.normal===void 0&&ye===!1&&(g.isMeshLambertMaterial||g.isMeshPhongMaterial||g.isMeshStandardMaterial||g.isMeshPhysicalMaterial)),sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:J,skinning:C.isSkinnedMesh===!0,hasPositionAttribute:P.attributes.position!==void 0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:E,morphTextureStride:F,numSunLights:_.sun.length,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numSunLightShadows:_.sunShadowMap.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numLightProbeGrids:L.filter(Ce=>Ce.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:g.dithering,shadowMapEnabled:n.shadowMap.enabled&&A.length>0,shadowMapType:n.shadowMap.type,toneMapping:xe,decodeVideoTexture:Te&&g.map.isVideoTexture===!0&&gt.getTransfer(g.map.colorSpace)===St,decodeVideoTextureEmissive:Le&&g.emissiveMap.isVideoTexture===!0&&gt.getTransfer(g.emissiveMap.colorSpace)===St,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===pi,flipSided:g.side===dn,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:lt&&g.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(lt&&g.extensions.multiDraw===!0||ue)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return ot.vertexUv1s=l.has(1),ot.vertexUv2s=l.has(2),ot.vertexUv3s=l.has(3),l.clear(),ot}function v(g){let _=[];if(g.shaderID?_.push(g.shaderID):(_.push(g.customVertexShaderID),_.push(g.customFragmentShaderID)),g.defines!==void 0)for(let A in g.defines)_.push(A),_.push(g.defines[A]);return g.isRawShaderMaterial===!1&&(x(_,g),m(_,g),_.push(n.outputColorSpace)),_.push(g.customProgramCacheKey),_.join()}function x(g,_){g.push(_.precision),g.push(_.outputColorSpace),g.push(_.envMapMode),g.push(_.envMapPMREM),g.push(_.envMapMaxLod),g.push(_.envMapSize),g.push(_.mapUv),g.push(_.alphaMapUv),g.push(_.lightMapUv),g.push(_.aoMapUv),g.push(_.bumpMapUv),g.push(_.normalMapUv),g.push(_.displacementMapUv),g.push(_.emissiveMapUv),g.push(_.metalnessMapUv),g.push(_.roughnessMapUv),g.push(_.anisotropyMapUv),g.push(_.clearcoatMapUv),g.push(_.clearcoatNormalMapUv),g.push(_.clearcoatRoughnessMapUv),g.push(_.diffuseRoughnessMapUv),g.push(_.iridescenceMapUv),g.push(_.iridescenceThicknessMapUv),g.push(_.sheenColorMapUv),g.push(_.sheenRoughnessMapUv),g.push(_.specularMapUv),g.push(_.specularColorMapUv),g.push(_.specularIntensityMapUv),g.push(_.transmissionMapUv),g.push(_.thicknessMapUv),g.push(_.combine),g.push(_.fogExp2),g.push(_.sizeAttenuation),g.push(_.morphTargetsCount),g.push(_.numSunLights),g.push(_.numDirLights),g.push(_.numPointLights),g.push(_.numSpotLights),g.push(_.numSpotLightMaps),g.push(_.numHemiLights),g.push(_.numRectAreaLights),g.push(_.numSunLightShadows),g.push(_.numDirLightShadows),g.push(_.numPointLightShadows),g.push(_.numSpotLightShadows),g.push(_.numSpotLightShadowsWithMaps),g.push(_.numLightProbes),g.push(_.numLightProbeGrids),g.push(_.shadowMapType),g.push(_.toneMapping),g.push(_.numClippingPlanes),g.push(_.numClipIntersection),g.push(_.depthPacking)}function m(g,_){o.disableAll(),_.instancing&&o.enable(0),_.instancingColor&&o.enable(1),_.instancingMorph&&o.enable(2),_.matcap&&o.enable(3),_.envMap&&o.enable(4),_.normalMapObjectSpace&&o.enable(5),_.normalMapTangentSpace&&o.enable(6),_.clearcoat&&o.enable(7),_.iridescence&&o.enable(8),_.alphaTest&&o.enable(9),_.vertexColors&&o.enable(10),_.vertexAlphas&&o.enable(11),_.vertexUv1s&&o.enable(12),_.vertexUv2s&&o.enable(13),_.vertexUv3s&&o.enable(14),_.vertexTangents&&o.enable(15),_.anisotropy&&o.enable(16),_.alphaHash&&o.enable(17),_.batching&&o.enable(18),_.dispersion&&o.enable(19),_.retroreflection&&o.enable(24),_.diffuseRoughness&&o.enable(25),_.batchingColor&&o.enable(20),_.gradientMap&&o.enable(21),_.packedNormalMap&&o.enable(22),_.vertexNormals&&o.enable(23),g.push(o.mask),o.disableAll(),_.fog&&o.enable(0),_.useFog&&o.enable(1),_.flatShading&&o.enable(2),_.logarithmicDepthBuffer&&o.enable(3),_.reversedDepthBuffer&&o.enable(4),_.skinning&&o.enable(5),_.morphTargets&&o.enable(6),_.morphNormals&&o.enable(7),_.morphColors&&o.enable(8),_.premultipliedAlpha&&o.enable(9),_.shadowMapEnabled&&o.enable(10),_.doubleSided&&o.enable(11),_.flipSided&&o.enable(12),_.useDepthPacking&&o.enable(13),_.dithering&&o.enable(14),_.transmission&&o.enable(15),_.sheen&&o.enable(16),_.opaque&&o.enable(17),_.pointsUvs&&o.enable(18),_.decodeVideoTexture&&o.enable(19),_.decodeVideoTextureEmissive&&o.enable(20),_.alphaToCoverage&&o.enable(21),_.numLightProbeGrids>0&&o.enable(22),_.hasPositionAttribute&&o.enable(23),g.push(o.mask)}function y(g){let _=f[g.type],A;if(_){let w=qi[_];A=g0.clone(w.uniforms)}else A=g.uniforms;return A}function b(g,_){let A=h.get(_);return A!==void 0?++A.usedTimes:(A=new vM(n,_,g,s),c.push(A),h.set(_,A)),A}function M(g){if(--g.usedTimes===0){let _=c.indexOf(g);c[_]=c[c.length-1],c.pop(),h.delete(g.cacheKey),g.destroy()}}function R(g){a.remove(g)}function S(){a.dispose()}return{getParameters:p,getProgramCacheKey:v,getUniforms:y,acquireProgram:b,releaseProgram:M,releaseShaderCache:R,programs:c,dispose:S}}function SM(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function TM(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function F0(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function k0(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(f){let d=0;return f.isInstancedMesh&&(d+=2),f.isSkinnedMesh&&(d+=1),d}function a(f,d,p,v,x,m){let y=n[e];return y===void 0?(y={id:f.id,object:f,geometry:d,material:p,materialVariant:o(f),groupOrder:v,renderOrder:f.renderOrder,z:x,group:m},n[e]=y):(y.id=f.id,y.object=f,y.geometry=d,y.material=p,y.materialVariant=o(f),y.groupOrder=v,y.renderOrder=f.renderOrder,y.z=x,y.group=m),e++,y}function l(f,d,p,v,x,m,y){y.reversedDepth===!0&&(x=-x);let b=a(f,d,p,v,x,m);p.transmission>0?i.push(b):p.transparent===!0?s.push(b):t.push(b)}function c(f,d,p,v,x,m){let y=a(f,d,p,v,x,m);p.transmission>0?i.unshift(y):p.transparent===!0?s.unshift(y):t.unshift(y)}function h(f,d){t.length>1&&t.sort(f||TM),i.length>1&&i.sort(d||F0),s.length>1&&s.sort(d||F0)}function u(){for(let f=e,d=n.length;f<d;f++){let p=n[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:u,sort:h}}function wM(){let n=new WeakMap;function e(i,s){let r=n.get(i),o;return r===void 0?(o=new k0,n.set(i,[o])):s>=r.length?(o=new k0,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function EM(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new Y,color:new Xe};break;case"SpotLight":t={position:new Y,direction:new Y,color:new Xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Y,color:new Xe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Y,skyColor:new Xe,groundColor:new Xe};break;case"RectAreaLight":t={color:new Xe,position:new Y,halfWidth:new Y,halfHeight:new Y};break}return n[e.id]=t,t}}}function AM(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var RM=0;function CM(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function PM(n){let e=new EM,t=AM(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new Y);let s=new Y,r=new Mt,o=new Mt;function a(c){let h=0,u=0,f=0;for(let L=0;L<9;L++)i.probe[L].set(0,0,0);let d=0,p=0,v=0,x=0,m=0,y=0,b=0,M=0,R=0,S=0,g=0,_=0,A=0,w=0;c.sort(CM);for(let L=0,T=c.length;L<T;L++){let P=c[L],z=P.color,X=P.intensity,q=P.distance,B=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===Us?B=P.shadow.map.texture:B=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)h+=z.r*X,u+=z.g*X,f+=z.b*X;else if(P.isLightProbe){for(let U=0;U<9;U++)i.probe[U].addScaledVector(P.sh.coefficients[U],X);w++}else if(P.isSunLight){let U=e.get(P);if(U.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let H=P.shadow,E=t.get(P);E.shadowIntensity=H.intensity,E.shadowBias=H.bias,E.shadowNormalBias=H.normalBias,E.shadowRadius=H.radius,E.shadowMapSize.copy(H.mapSize).multiply(H.getFrameExtents()),i.sunShadow[p]=E,i.sunShadowMap[p]=B;let F=H.getViewportCount();for(let G=0;G<F;G++)i.sunShadowMatrix[v+G]=H.getMatrix(G),i.sunShadowCascade[v+G]=H._cascadeData[G];v+=F,p++}i.sun[d]=U,d++}else if(P.isDirectionalLight){let U=e.get(P);if(U.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let H=P.shadow,E=t.get(P);E.shadowIntensity=H.intensity,E.shadowBias=H.bias,E.shadowNormalBias=H.normalBias,E.shadowRadius=H.radius,E.shadowMapSize=H.mapSize,i.directionalShadow[x]=E,i.directionalShadowMap[x]=B,i.directionalShadowMatrix[x]=P.shadow.matrix,R++}i.directional[x]=U,x++}else if(P.isSpotLight){let U=e.get(P);U.position.setFromMatrixPosition(P.matrixWorld),U.color.copy(z).multiplyScalar(X),U.distance=q,U.coneCos=Math.cos(P.angle),U.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),U.decay=P.decay,i.spot[y]=U;let H=P.shadow;if(P.map&&(i.spotLightMap[_]=P.map,_++,H.updateMatrices(P),P.castShadow&&A++),i.spotLightMatrix[y]=H.matrix,P.castShadow){let E=t.get(P);E.shadowIntensity=H.intensity,E.shadowBias=H.bias,E.shadowNormalBias=H.normalBias,E.shadowRadius=H.radius,E.shadowMapSize=H.mapSize,i.spotShadow[y]=E,i.spotShadowMap[y]=B,g++}y++}else if(P.isRectAreaLight){let U=e.get(P);U.color.copy(z).multiplyScalar(X),U.halfWidth.set(P.width*.5,0,0),U.halfHeight.set(0,P.height*.5,0),i.rectArea[b]=U,b++}else if(P.isPointLight){let U=e.get(P);if(U.color.copy(P.color).multiplyScalar(P.intensity),U.distance=P.distance,U.decay=P.decay,P.castShadow){let H=P.shadow,E=t.get(P);E.shadowIntensity=H.intensity,E.shadowBias=H.bias,E.shadowNormalBias=H.normalBias,E.shadowRadius=H.radius,E.shadowMapSize=H.mapSize,E.shadowCameraNear=H.camera.near,E.shadowCameraFar=H.camera.far,i.pointShadow[m]=E,i.pointShadowMap[m]=B,i.pointShadowMatrix[m]=P.shadow.matrix,S++}i.point[m]=U,m++}else if(P.isHemisphereLight){let U=e.get(P);U.skyColor.copy(P.color).multiplyScalar(X),U.groundColor.copy(P.groundColor).multiplyScalar(X),i.hemi[M]=U,M++}}b>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Pe.LTC_FLOAT_1,i.rectAreaLTC2=Pe.LTC_FLOAT_2):(i.rectAreaLTC1=Pe.LTC_HALF_1,i.rectAreaLTC2=Pe.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=f;let C=i.hash;(C.sunLength!==d||C.directionalLength!==x||C.pointLength!==m||C.spotLength!==y||C.rectAreaLength!==b||C.hemiLength!==M||C.numSunShadows!==p||C.numDirectionalShadows!==R||C.numPointShadows!==S||C.numSpotShadows!==g||C.numSpotMaps!==_||C.numLightProbes!==w)&&(i.sun.length=d,i.directional.length=x,i.spot.length=y,i.rectArea.length=b,i.point.length=m,i.hemi.length=M,i.sunShadow.length=p,i.sunShadowMap.length=p,i.sunShadowMatrix.length=v,i.sunShadowCascade.length=v,i.directionalShadow.length=R,i.directionalShadowMap.length=R,i.directionalShadowMatrix.length=R,i.pointShadow.length=S,i.pointShadowMap.length=S,i.pointShadowMatrix.length=S,i.spotShadow.length=g,i.spotShadowMap.length=g,i.spotLightMatrix.length=g+_-A,i.spotLightMap.length=_,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=w,C.sunLength=d,C.directionalLength=x,C.pointLength=m,C.spotLength=y,C.rectAreaLength=b,C.hemiLength=M,C.numSunShadows=p,C.numDirectionalShadows=R,C.numPointShadows=S,C.numSpotShadows=g,C.numSpotMaps=_,C.numLightProbes=w,i.version=RM++)}function l(c,h){let u=0,f=0,d=0,p=0,v=0,x=0,m=h.matrixWorldInverse;for(let y=0,b=c.length;y<b;y++){let M=c[y];if(M.isSunLight){let R=i.sun[u];R.direction.setFromMatrixPosition(M.matrixWorld),R.direction.transformDirection(m),u++}else if(M.isDirectionalLight){let R=i.directional[f];R.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(m),f++}else if(M.isSpotLight){let R=i.spot[p];R.position.setFromMatrixPosition(M.matrixWorld),R.position.applyMatrix4(m),R.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(m),p++}else if(M.isRectAreaLight){let R=i.rectArea[v];R.position.setFromMatrixPosition(M.matrixWorld),R.position.applyMatrix4(m),o.identity(),r.copy(M.matrixWorld),r.premultiply(m),o.extractRotation(r),R.halfWidth.set(M.width*.5,0,0),R.halfHeight.set(0,M.height*.5,0),R.halfWidth.applyMatrix4(o),R.halfHeight.applyMatrix4(o),v++}else if(M.isPointLight){let R=i.point[d];R.position.setFromMatrixPosition(M.matrixWorld),R.position.applyMatrix4(m),d++}else if(M.isHemisphereLight){let R=i.hemi[x];R.direction.setFromMatrixPosition(M.matrixWorld),R.direction.transformDirection(m),x++}}}return{setup:a,setupView:l,state:i}}function O0(n){let e=new PM(n),t=[],i=[],s=[];function r(u){h.camera=u,t.length=0,i.length=0,s.length=0}function o(u){u.isLightProbeGrid?s.push(u):t.push(u)}function a(u){i.push(u)}function l(){e.setup(t),s.sort((u,f)=>u.priority-f.priority||u.id-f.id)}function c(u){e.setupView(t,u)}let h={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function IM(n){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new O0(n),e.set(s,[a])):r>=o.length?(a=new O0(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}var LM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,NM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,DM=[new Y(1,0,0),new Y(-1,0,0),new Y(0,1,0),new Y(0,-1,0),new Y(0,0,1),new Y(0,0,-1)],UM=[new Y(0,-1,0),new Y(0,-1,0),new Y(0,0,1),new Y(0,0,-1),new Y(0,-1,0),new Y(0,-1,0)],z0=new Mt,Ca=new Y,pf=new Y;function FM(n,e,t){let i=new Rs,s=new ge,r=new ge,o=new $t,a=new ic,l=new sc,c={},h=t.maxTextureSize,u={[Gi]:dn,[dn]:Gi,[pi]:pi},f=new di({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ge},radius:{value:4}},vertexShader:LM,fragmentShader:NM}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let p=new Bt;p.setAttribute("position",new qt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new Oe(p,f),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=va;let m=this.type;this.render=function(S,g,_){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||S.length===0)return;this.type===gc&&(Ye("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=va);let A=n.getRenderTarget(),w=n.getActiveCubeFace(),C=n.getActiveMipmapLevel(),L=n.state;L.setBlending(ar),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);let T=m!==this.type;T&&g.traverse(function(P){P.material&&(Array.isArray(P.material)?P.material.forEach(z=>z.needsUpdate=!0):P.material.needsUpdate=!0)});for(let P=0,z=S.length;P<z;P++){let X=S[P],q=X.shadow;if(q===void 0){Ye("WebGLShadowMap:",X,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;s.copy(q.mapSize);let B=q.getFrameExtents();s.multiply(B),r.copy(q.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/B.x),s.x=r.x*B.x,q.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/B.y),s.y=r.y*B.y,q.mapSize.y=r.y));let U=n.state.buffers.depth.getReversed();if(q.camera._reversedDepth=U,q.map===null||T===!0){if(q.map!==null&&(q.map.depthTexture!==null&&(q.map.depthTexture.dispose(),q.map.depthTexture=null),q.map.dispose()),this.type===oo){if(X.isPointLight){Ye("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}q.map=new Jn(s.x,s.y,{format:Us,type:Li,minFilter:wn,magFilter:wn,generateMipmaps:!1}),q.map.texture.name=X.name+".shadowMap",q.map.depthTexture=new ls(s.x,s.y,mi),q.map.depthTexture.name=X.name+".shadowMapDepth",q.map.depthTexture.format=os,q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=_n,q.map.depthTexture.magFilter=_n}else X.isPointLight?(q.map=new Ia(s.x),q.map.depthTexture=new ia(s.x,Ii)):(q.map=new Jn(s.x,s.y),q.map.depthTexture=new ls(s.x,s.y,Ii)),q.map.depthTexture.name=X.name+".shadowMap",q.map.depthTexture.format=os,this.type===va?(q.map.depthTexture.compareFunction=U?sf:nf,q.map.depthTexture.minFilter=wn,q.map.depthTexture.magFilter=wn):(q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=_n,q.map.depthTexture.magFilter=_n);q.camera.updateProjectionMatrix()}q.map.isWebGLCubeRenderTarget!==!0&&(q.map.width!==s.x||q.map.height!==s.y)&&q.map.setSize(s.x,s.y);let H=q.map.isWebGLCubeRenderTarget?6:q.getViewportCount();X.isPointLight!==!0&&q.updateMatrices(X,_);let E=(q.camera.layers.mask&4294967294)!==0?q.camera.layers:_.layers;for(let F=0;F<H;F++){let G=q.getCamera(F);if(X.isPointLight){let O=q.camera,N=q.matrix,V=X.distance||O.far;V!==O.far&&(O.far=V,O.updateProjectionMatrix()),Ca.setFromMatrixPosition(X.matrixWorld),O.position.copy(Ca),pf.copy(O.position),pf.add(DM[F]),O.up.copy(UM[F]),O.lookAt(pf),O.updateMatrixWorld(),N.makeTranslation(-Ca.x,-Ca.y,-Ca.z),z0.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),q._frustum.setFromProjectionMatrix(z0,O.coordinateSystem,O.reversedDepth)}if(q.map.isWebGLCubeRenderTarget)n.setRenderTarget(q.map,F),n.clear();else{F===0&&(n.setRenderTarget(q.map),n.clear());let O=q.getViewport(F);o.set(r.x*O.x,r.y*O.y,r.x*O.z,r.y*O.w),L.viewport(o)}i=q.getFrustum(F),M(g,_,G,X,E,this.type)}q.isPointLightShadow!==!0&&this.type===oo&&y(q,_),q.needsUpdate=!1}m=this.type,x.needsUpdate=!1,n.setRenderTarget(A,w,C)};function y(S,g){let _=e.update(v);f.defines.VSM_SAMPLES!==S.blurSamples&&(f.defines.VSM_SAMPLES=S.blurSamples,d.defines.VSM_SAMPLES=S.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),S.mapPass===null?S.mapPass=new Jn(s.x,s.y,{format:Us,type:Li}):(S.mapPass.width!==S.map.width||S.mapPass.height!==S.map.height)&&S.mapPass.setSize(S.map.width,S.map.height),f.uniforms.shadow_pass.value=S.map.depthTexture,f.uniforms.resolution.value.set(S.map.width,S.map.height),f.uniforms.radius.value=S.radius,n.setRenderTarget(S.mapPass),n.clear(),n.renderBufferDirect(g,null,_,f,v,null),d.uniforms.shadow_pass.value=S.mapPass.texture,d.uniforms.resolution.value.set(S.map.width,S.map.height),d.uniforms.radius.value=S.radius,n.setRenderTarget(S.map),n.clear(),n.renderBufferDirect(g,null,_,d,v,null)}function b(S,g,_,A){let w=null,C=_.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(C!==void 0)w=C;else if(w=_.isPointLight===!0?l:a,n.localClippingEnabled&&g.clipShadows===!0&&Array.isArray(g.clippingPlanes)&&g.clippingPlanes.length!==0||g.displacementMap&&g.displacementScale!==0||g.alphaMap&&g.alphaTest>0||g.map&&g.alphaTest>0||g.alphaToCoverage===!0){let L=w.uuid,T=g.uuid,P=c[L];P===void 0&&(P={},c[L]=P);let z=P[T];z===void 0&&(z=w.clone(),P[T]=z,g.addEventListener("dispose",R)),w=z}if(w.visible=g.visible,w.wireframe=g.wireframe,A===oo?w.side=g.shadowSide!==null?g.shadowSide:g.side:w.side=g.shadowSide!==null?g.shadowSide:u[g.side],w.alphaMap=g.alphaMap,w.alphaTest=g.alphaToCoverage===!0?.5:g.alphaTest,w.map=g.map,w.clipShadows=g.clipShadows,w.clippingPlanes=g.clippingPlanes,w.clipIntersection=g.clipIntersection,w.displacementMap=g.displacementMap,w.displacementScale=g.displacementScale,w.displacementBias=g.displacementBias,w.wireframeLinewidth=g.wireframeLinewidth,w.linewidth=g.linewidth,_.isPointLight===!0&&w.isMeshDistanceMaterial===!0){let L=n.properties.get(w);L.light=_}return w}function M(S,g,_,A,w,C){if(S.visible===!1)return;if(S.layers.test(w)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&C===oo)&&(!S.frustumCulled||S.intersectsFrustum(i))){S.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,S.matrixWorld);let P=e.update(S),z=S.material;if(Array.isArray(z)){let X=P.groups;for(let q=0,B=X.length;q<B;q++){let U=X[q],H=z[U.materialIndex];if(H&&H.visible){let E=b(S,H,A,C);S.onBeforeShadow(n,S,g,_,P,E,U),n.renderBufferDirect(_,null,P,E,S,U),S.onAfterShadow(n,S,g,_,P,E,U)}}}else if(z.visible){let X=b(S,z,A,C);S.onBeforeShadow(n,S,g,_,P,X,null),n.renderBufferDirect(_,null,P,X,S,null),S.onAfterShadow(n,S,g,_,P,X,null)}}let T=S.children;for(let P=0,z=T.length;P<z;P++)M(T[P],g,_,A,w,C)}function R(S){S.target.removeEventListener("dispose",R);for(let _ in c){let A=c[_],w=S.target.uuid;w in A&&(A[w].dispose(),delete A[w])}}}function kM(n,e){function t(){let Z=!1,ce=new $t,re=null,Se=new $t(0,0,0,0);return{setMask:function(ve){re!==ve&&!Z&&(n.colorMask(ve,ve,ve,ve),re=ve)},setLocked:function(ve){Z=ve},setClear:function(ve,Me,Ve,lt,xe){xe===!0&&(ve*=lt,Me*=lt,Ve*=lt),ce.set(ve,Me,Ve,lt),Se.equals(ce)===!1&&(n.clearColor(ve,Me,Ve,lt),Se.copy(ce))},reset:function(){Z=!1,re=null,Se.set(-1,0,0,0)}}}function i(){let Z=!1,ce=!1,re=null,Se=null,ve=null;return{setReversed:function(Me){if(ce!==Me){let Ve=e.get("EXT_clip_control");Me?Ve.clipControlEXT(Ve.LOWER_LEFT_EXT,Ve.ZERO_TO_ONE_EXT):Ve.clipControlEXT(Ve.LOWER_LEFT_EXT,Ve.NEGATIVE_ONE_TO_ONE_EXT),ce=Me;let lt=ve;ve=null,this.setClear(lt)}},getReversed:function(){return ce},setTest:function(Me){Me?J(n.DEPTH_TEST):ie(n.DEPTH_TEST)},setMask:function(Me){re!==Me&&!Z&&(n.depthMask(Me),re=Me)},setFunc:function(Me){if(ce&&(Me=o0[Me]),Se!==Me){switch(Me){case Dl:n.depthFunc(n.NEVER);break;case Ul:n.depthFunc(n.ALWAYS);break;case Fl:n.depthFunc(n.LESS);break;case Yr:n.depthFunc(n.LEQUAL);break;case kl:n.depthFunc(n.EQUAL);break;case Ol:n.depthFunc(n.GEQUAL);break;case zl:n.depthFunc(n.GREATER);break;case Bl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Se=Me}},setLocked:function(Me){Z=Me},setClear:function(Me){ve!==Me&&(ve=Me,ce&&(Me=1-Me),n.clearDepth(Me))},reset:function(){Z=!1,re=null,Se=null,ve=null,ce=!1}}}function s(){let Z=!1,ce=null,re=null,Se=null,ve=null,Me=null,Ve=null,lt=null,xe=null;return{setTest:function(qe){Z||(qe?J(n.STENCIL_TEST):ie(n.STENCIL_TEST))},setMask:function(qe){ce!==qe&&!Z&&(n.stencilMask(qe),ce=qe)},setFunc:function(qe,ot,Ce){(re!==qe||Se!==ot||ve!==Ce)&&(n.stencilFunc(qe,ot,Ce),re=qe,Se=ot,ve=Ce)},setOp:function(qe,ot,Ce){(Me!==qe||Ve!==ot||lt!==Ce)&&(n.stencilOp(qe,ot,Ce),Me=qe,Ve=ot,lt=Ce)},setLocked:function(qe){Z=qe},setClear:function(qe){xe!==qe&&(n.clearStencil(qe),xe=qe)},reset:function(){Z=!1,ce=null,re=null,Se=null,ve=null,Me=null,Ve=null,lt=null,xe=null}}}let r=new t,o=new i,a=new s,l={},c=new WeakMap,h={},u={},f={},d=new WeakMap,p=[],v=null,x=!1,m=null,y=null,b=null,M=null,R=null,S=null,g=null,_=new Xe(0,0,0),A=0,w=!1,C=null,L=null,T=null,P=null,z=null,X=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),q=!1,B=0,U=n.getParameter(n.VERSION);U.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(U)[1]),q=B>=1):U.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(U)[1]),q=B>=2);let H=null,E={},F=n.getParameter(n.SCISSOR_BOX),G=n.getParameter(n.VIEWPORT),O=new $t().fromArray(F),N=new $t().fromArray(G);function V(Z,ce,re,Se){let ve=new Uint8Array(4),Me=n.createTexture();n.bindTexture(Z,Me),n.texParameteri(Z,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(Z,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ve=0;Ve<re;Ve++)Z===n.TEXTURE_3D||Z===n.TEXTURE_2D_ARRAY?n.texImage3D(ce,0,n.RGBA,1,1,Se,0,n.RGBA,n.UNSIGNED_BYTE,ve):n.texImage2D(ce+Ve,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ve);return Me}let K={};K[n.TEXTURE_2D]=V(n.TEXTURE_2D,n.TEXTURE_2D,1),K[n.TEXTURE_CUBE_MAP]=V(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[n.TEXTURE_2D_ARRAY]=V(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),K[n.TEXTURE_3D]=V(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),J(n.DEPTH_TEST),o.setFunc(Yr),pe(!1),ye(ku),J(n.CULL_FACE),he(ar);function J(Z){h[Z]!==!0&&(n.enable(Z),h[Z]=!0)}function ie(Z){h[Z]!==!1&&(n.disable(Z),h[Z]=!1)}function ue(Z,ce){return f[Z]!==ce?(n.bindFramebuffer(Z,ce),f[Z]=ce,Z===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=ce),Z===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=ce),!0):!1}function Te(Z,ce){let re=p,Se=!1;if(Z){re=d.get(ce),re===void 0&&(re=[],d.set(ce,re));let ve=Z.textures;if(re.length!==ve.length||re[0]!==n.COLOR_ATTACHMENT0){for(let Me=0,Ve=ve.length;Me<Ve;Me++)re[Me]=n.COLOR_ATTACHMENT0+Me;re.length=ve.length,Se=!0}}else re[0]!==n.BACK&&(re[0]=n.BACK,Se=!0);Se&&n.drawBuffers(re)}function De(Z){return v!==Z?(n.useProgram(Z),v=Z,!0):!1}let We={[lr]:n.FUNC_ADD,[Cp]:n.FUNC_SUBTRACT,[Pp]:n.FUNC_REVERSE_SUBTRACT};We[Ip]=n.MIN,We[Lp]=n.MAX;let ae={[Np]:n.ZERO,[Dp]:n.ONE,[Up]:n.SRC_COLOR,[Hu]:n.SRC_ALPHA,[Hp]:n.SRC_ALPHA_SATURATE,[zp]:n.DST_COLOR,[kp]:n.DST_ALPHA,[Fp]:n.ONE_MINUS_SRC_COLOR,[Vu]:n.ONE_MINUS_SRC_ALPHA,[Bp]:n.ONE_MINUS_DST_COLOR,[Op]:n.ONE_MINUS_DST_ALPHA,[Vp]:n.CONSTANT_COLOR,[Gp]:n.ONE_MINUS_CONSTANT_COLOR,[Wp]:n.CONSTANT_ALPHA,[Xp]:n.ONE_MINUS_CONSTANT_ALPHA};function he(Z,ce,re,Se,ve,Me,Ve,lt,xe,qe){if(Z===ar){x===!0&&(ie(n.BLEND),x=!1);return}if(x===!1&&(J(n.BLEND),x=!0),Z!==Rp){if(Z!==m||qe!==w){if((y!==lr||R!==lr)&&(n.blendEquation(n.FUNC_ADD),y=lr,R=lr),qe)switch(Z){case ao:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ou:n.blendFunc(n.ONE,n.ONE);break;case zu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Bu:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Ze("WebGLState: Invalid blending: ",Z);break}else switch(Z){case ao:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ou:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case zu:Ze("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Bu:Ze("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ze("WebGLState: Invalid blending: ",Z);break}b=null,M=null,S=null,g=null,_.set(0,0,0),A=0,m=Z,w=qe}return}ve=ve||ce,Me=Me||re,Ve=Ve||Se,(ce!==y||ve!==R)&&(n.blendEquationSeparate(We[ce],We[ve]),y=ce,R=ve),(re!==b||Se!==M||Me!==S||Ve!==g)&&(n.blendFuncSeparate(ae[re],ae[Se],ae[Me],ae[Ve]),b=re,M=Se,S=Me,g=Ve),(lt.equals(_)===!1||xe!==A)&&(n.blendColor(lt.r,lt.g,lt.b,xe),_.copy(lt),A=xe),m=Z,w=!1}function de(Z,ce){Z.side===pi?ie(n.CULL_FACE):J(n.CULL_FACE);let re=Z.side===dn;ce&&(re=!re),pe(re),Z.blending===ao&&Z.transparent===!1?he(ar):he(Z.blending,Z.blendEquation,Z.blendSrc,Z.blendDst,Z.blendEquationAlpha,Z.blendSrcAlpha,Z.blendDstAlpha,Z.blendColor,Z.blendAlpha,Z.premultipliedAlpha),o.setFunc(Z.depthFunc),o.setTest(Z.depthTest),o.setMask(Z.depthWrite),r.setMask(Z.colorWrite);let Se=Z.stencilWrite;a.setTest(Se),Se&&(a.setMask(Z.stencilWriteMask),a.setFunc(Z.stencilFunc,Z.stencilRef,Z.stencilFuncMask),a.setOp(Z.stencilFail,Z.stencilZFail,Z.stencilZPass)),Le(Z.polygonOffset,Z.polygonOffsetFactor,Z.polygonOffsetUnits),Z.alphaToCoverage===!0?J(n.SAMPLE_ALPHA_TO_COVERAGE):ie(n.SAMPLE_ALPHA_TO_COVERAGE)}function pe(Z){C!==Z&&(Z?n.frontFace(n.CW):n.frontFace(n.CCW),C=Z)}function ye(Z){Z!==Ep?(J(n.CULL_FACE),Z!==L&&(Z===ku?n.cullFace(n.BACK):Z===Ap?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ie(n.CULL_FACE),L=Z}function Ge(Z){Z!==T&&(q&&n.lineWidth(Z),T=Z)}function Le(Z,ce,re){Z?(J(n.POLYGON_OFFSET_FILL),(P!==ce||z!==re)&&(P=ce,z=re,o.getReversed()&&(ce=-ce,re=-re),n.polygonOffset(ce,re))):ie(n.POLYGON_OFFSET_FILL)}function et(Z){Z?J(n.SCISSOR_TEST):ie(n.SCISSOR_TEST)}function at(Z){Z===void 0&&(Z=n.TEXTURE0+X-1),H!==Z&&(n.activeTexture(Z),H=Z)}function dt(Z,ce,re){re===void 0&&(H===null?re=n.TEXTURE0+X-1:re=H);let Se=E[re];Se===void 0&&(Se={type:void 0,texture:void 0},E[re]=Se),(Se.type!==Z||Se.texture!==ce)&&(H!==re&&(n.activeTexture(re),H=re),n.bindTexture(Z,ce||K[Z]),Se.type=Z,Se.texture=ce)}function Q(){let Z=E[H];Z!==void 0&&Z.type!==void 0&&(n.bindTexture(Z.type,null),Z.type=void 0,Z.texture=void 0)}function Yt(){try{n.compressedTexImage2D(...arguments)}catch(Z){Ze("WebGLState:",Z)}}function ut(){try{n.compressedTexImage3D(...arguments)}catch(Z){Ze("WebGLState:",Z)}}function Pt(){try{n.texSubImage2D(...arguments)}catch(Z){Ze("WebGLState:",Z)}}function Ee(){try{n.texSubImage3D(...arguments)}catch(Z){Ze("WebGLState:",Z)}}function tn(){try{n.compressedTexSubImage2D(...arguments)}catch(Z){Ze("WebGLState:",Z)}}function $e(){try{n.compressedTexSubImage3D(...arguments)}catch(Z){Ze("WebGLState:",Z)}}function Je(){try{n.texStorage2D(...arguments)}catch(Z){Ze("WebGLState:",Z)}}function W(){try{n.texStorage3D(...arguments)}catch(Z){Ze("WebGLState:",Z)}}function I(){try{n.texImage2D(...arguments)}catch(Z){Ze("WebGLState:",Z)}}function te(){try{n.texImage3D(...arguments)}catch(Z){Ze("WebGLState:",Z)}}function me(Z){return u[Z]!==void 0?u[Z]:n.getParameter(Z)}function fe(Z,ce){u[Z]!==ce&&(n.pixelStorei(Z,ce),u[Z]=ce)}function _e(Z){O.equals(Z)===!1&&(n.scissor(Z.x,Z.y,Z.z,Z.w),O.copy(Z))}function Ae(Z){N.equals(Z)===!1&&(n.viewport(Z.x,Z.y,Z.z,Z.w),N.copy(Z))}function oe(Z,ce){let re=c.get(ce);re===void 0&&(re=new WeakMap,c.set(ce,re));let Se=re.get(Z);Se===void 0&&(Se=n.getUniformBlockIndex(ce,Z.name),n.uniformBlockBinding(ce,Se,Se),re.set(Z,Se))}function le(Z,ce,re){let ve=c.get(ce).get(Z);l[ve]!==re&&(n.bindBufferBase(n.UNIFORM_BUFFER,ve,re),l[ve]=re)}function be(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),h={},u={},H=null,E={},f={},l={},d=new WeakMap,p=[],v=null,x=!1,m=null,y=null,b=null,M=null,R=null,S=null,g=null,_=new Xe(0,0,0),A=0,w=!1,C=null,L=null,T=null,P=null,z=null,O.set(0,0,n.canvas.width,n.canvas.height),N.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:J,disable:ie,bindFramebuffer:ue,drawBuffers:Te,useProgram:De,setBlending:he,setMaterial:de,setFlipSided:pe,setCullFace:ye,setLineWidth:Ge,setPolygonOffset:Le,setScissorTest:et,activeTexture:at,bindTexture:dt,unbindTexture:Q,compressedTexImage2D:Yt,compressedTexImage3D:ut,texImage2D:I,texImage3D:te,pixelStorei:fe,getParameter:me,updateUBOMapping:oe,uniformBlockBinding:le,texStorage2D:Je,texStorage3D:W,texSubImage2D:Pt,texSubImage3D:Ee,compressedTexSubImage2D:tn,compressedTexSubImage3D:$e,scissor:_e,viewport:Ae,reset:be}}function OM(n,e,t,i,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ge,h=new WeakMap,u=new Set,f,d=new WeakMap,p=new Set,v=new FinalizationRegistry(W=>p.delete(W)),x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(W,I){return x?new OffscreenCanvas(W,I):qo("canvas")}function y(W,I,te){let me=1,fe=Je(W);if((fe.width>te||fe.height>te)&&(me=te/Math.max(fe.width,fe.height)),me<1)if(typeof HTMLImageElement<"u"&&W instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&W instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&W instanceof ImageBitmap||typeof VideoFrame<"u"&&W instanceof VideoFrame){let _e=Math.floor(me*fe.width),Ae=Math.floor(me*fe.height);f===void 0&&(f=m(_e,Ae));let oe=I?m(_e,Ae):f;return oe.width=_e,oe.height=Ae,oe.getContext("2d").drawImage(W,0,0,_e,Ae),Ye("WebGLRenderer: Texture has been resized from ("+fe.width+"x"+fe.height+") to ("+_e+"x"+Ae+")."),oe}else return"data"in W&&Ye("WebGLRenderer: Image in DataTexture is too big ("+fe.width+"x"+fe.height+")."),W;return W}function b(W){return W.generateMipmaps}function M(W){n.generateMipmap(W)}function R(W){return W.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:W.isWebGL3DRenderTarget?n.TEXTURE_3D:W.isWebGLArrayRenderTarget||W.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function S(W,I,te,me,fe,_e=!1){if(W!==null){if(n[W]!==void 0)return n[W];Ye("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+W+"'")}let Ae;me&&(Ae=e.get("EXT_texture_norm16"),Ae||Ye("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let oe=I;if(I===n.RED&&(te===n.FLOAT&&(oe=n.R32F),te===n.HALF_FLOAT&&(oe=n.R16F),te===n.UNSIGNED_BYTE&&(oe=n.R8),te===n.UNSIGNED_SHORT&&Ae&&(oe=Ae.R16_EXT),te===n.SHORT&&Ae&&(oe=Ae.R16_SNORM_EXT)),I===n.RED_INTEGER&&(te===n.UNSIGNED_BYTE&&(oe=n.R8UI),te===n.UNSIGNED_SHORT&&(oe=n.R16UI),te===n.UNSIGNED_INT&&(oe=n.R32UI),te===n.BYTE&&(oe=n.R8I),te===n.SHORT&&(oe=n.R16I),te===n.INT&&(oe=n.R32I)),I===n.RG&&(te===n.FLOAT&&(oe=n.RG32F),te===n.HALF_FLOAT&&(oe=n.RG16F),te===n.UNSIGNED_BYTE&&(oe=n.RG8),te===n.UNSIGNED_SHORT&&Ae&&(oe=Ae.RG16_EXT),te===n.SHORT&&Ae&&(oe=Ae.RG16_SNORM_EXT)),I===n.RG_INTEGER&&(te===n.UNSIGNED_BYTE&&(oe=n.RG8UI),te===n.UNSIGNED_SHORT&&(oe=n.RG16UI),te===n.UNSIGNED_INT&&(oe=n.RG32UI),te===n.BYTE&&(oe=n.RG8I),te===n.SHORT&&(oe=n.RG16I),te===n.INT&&(oe=n.RG32I)),I===n.RGB_INTEGER&&(te===n.UNSIGNED_BYTE&&(oe=n.RGB8UI),te===n.UNSIGNED_SHORT&&(oe=n.RGB16UI),te===n.UNSIGNED_INT&&(oe=n.RGB32UI),te===n.BYTE&&(oe=n.RGB8I),te===n.SHORT&&(oe=n.RGB16I),te===n.INT&&(oe=n.RGB32I)),I===n.RGBA_INTEGER&&(te===n.UNSIGNED_BYTE&&(oe=n.RGBA8UI),te===n.UNSIGNED_SHORT&&(oe=n.RGBA16UI),te===n.UNSIGNED_INT&&(oe=n.RGBA32UI),te===n.BYTE&&(oe=n.RGBA8I),te===n.SHORT&&(oe=n.RGBA16I),te===n.INT&&(oe=n.RGBA32I)),I===n.RGB&&(te===n.UNSIGNED_SHORT&&Ae&&(oe=Ae.RGB16_EXT),te===n.SHORT&&Ae&&(oe=Ae.RGB16_SNORM_EXT),te===n.UNSIGNED_INT_5_9_9_9_REV&&(oe=n.RGB9_E5),te===n.UNSIGNED_INT_10F_11F_11F_REV&&(oe=n.R11F_G11F_B10F)),I===n.RGBA){let le=_e?Xo:gt.getTransfer(fe);te===n.FLOAT&&(oe=n.RGBA32F),te===n.HALF_FLOAT&&(oe=n.RGBA16F),te===n.UNSIGNED_BYTE&&(oe=le===St?n.SRGB8_ALPHA8:n.RGBA8),te===n.UNSIGNED_SHORT&&Ae&&(oe=Ae.RGBA16_EXT),te===n.SHORT&&Ae&&(oe=Ae.RGBA16_SNORM_EXT),te===n.UNSIGNED_SHORT_4_4_4_4&&(oe=n.RGBA4),te===n.UNSIGNED_SHORT_5_5_5_1&&(oe=n.RGB5_A1)}return(oe===n.R16F||oe===n.R32F||oe===n.RG16F||oe===n.RG32F||oe===n.RGBA16F||oe===n.RGBA32F)&&e.get("EXT_color_buffer_float"),oe}function g(W,I){let te;return W?I===null||I===Ii||I===hr?te=n.DEPTH24_STENCIL8:I===mi?te=n.DEPTH32F_STENCIL8:I===co&&(te=n.DEPTH24_STENCIL8,Ye("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):I===null||I===Ii||I===hr?te=n.DEPTH_COMPONENT24:I===mi?te=n.DEPTH_COMPONENT32F:I===co&&(te=n.DEPTH_COMPONENT16),te}function _(W,I){return b(W)===!0||W.isFramebufferTexture&&W.minFilter!==_n&&W.minFilter!==wn?Math.log2(Math.max(I.width,I.height))+1:W.mipmaps.length>0?W.mipmaps.length:W.isCompressedTexture&&Array.isArray(W.image)?I.mipmaps.length:1}function A(W){let I=new WeakRef(W);i.get(W).__ref=I,p.add(I),v.register(W,I,I)}function w(W){let I=i.get(W).__ref;I!==void 0&&(p.delete(I),v.unregister(I))}function C(W){T(W.target)}function L(W){P(W.target)}function T(W){W.removeEventListener("dispose",C),w(W),X(W),W.isVideoTexture&&h.delete(W),W.isHTMLTexture&&u.delete(W)}function P(W){W.removeEventListener("dispose",L),w(W),B(W)}function z(){for(let W of p){let I=W.deref();I!==void 0&&(I.isRenderTarget===!0?P(I):T(I))}p.clear(),u.clear()}function X(W){let I=i.get(W);if(I.__webglInit===void 0)return;let te=W.source,me=d.get(te);if(me){let fe=me[I.__cacheKey];fe.usedTimes--,fe.usedTimes===0&&q(W),Object.keys(me).length===0&&d.delete(te)}i.remove(W)}function q(W){let I=i.get(W);n.deleteTexture(I.__webglTexture);let te=W.source,me=d.get(te);delete me[I.__cacheKey],o.memory.textures--}function B(W){let I=i.get(W);I.__depthDisposeCallback&&I.__depthDisposeCallback();let te=W.depthTexture;if(te&&te.renderTarget===W&&T(te),W.isWebGLCubeRenderTarget)for(let fe=0;fe<6;fe++){if(Array.isArray(I.__webglFramebuffer[fe]))for(let _e=0;_e<I.__webglFramebuffer[fe].length;_e++)n.deleteFramebuffer(I.__webglFramebuffer[fe][_e]);else n.deleteFramebuffer(I.__webglFramebuffer[fe]);I.__webglDepthbuffer&&n.deleteRenderbuffer(I.__webglDepthbuffer[fe])}else{if(Array.isArray(I.__webglFramebuffer))for(let fe=0;fe<I.__webglFramebuffer.length;fe++)n.deleteFramebuffer(I.__webglFramebuffer[fe]);else n.deleteFramebuffer(I.__webglFramebuffer);if(I.__webglDepthbuffer&&n.deleteRenderbuffer(I.__webglDepthbuffer),I.__webglMultisampledFramebuffer&&n.deleteFramebuffer(I.__webglMultisampledFramebuffer),I.__webglColorRenderbuffer)for(let fe=0;fe<I.__webglColorRenderbuffer.length;fe++)I.__webglColorRenderbuffer[fe]&&n.deleteRenderbuffer(I.__webglColorRenderbuffer[fe]);I.__webglDepthRenderbuffer&&n.deleteRenderbuffer(I.__webglDepthRenderbuffer)}let me=W.textures;for(let fe=0,_e=me.length;fe<_e;fe++){let Ae=i.get(me[fe]);Ae.__webglTexture&&(n.deleteTexture(Ae.__webglTexture),o.memory.textures--),i.remove(me[fe])}i.remove(W)}let U=0;function H(){U=0}function E(){return U}function F(W){U=W}function G(){let W=U;return W>=s.maxTextures&&Ye("WebGLTextures: Trying to use "+(W+1)+" texture units while this GPU supports only "+s.maxTextures),U+=1,W}function O(W){let I=[];return I.push(W.wrapS),I.push(W.wrapT),I.push(W.wrapR||0),I.push(W.magFilter),I.push(W.minFilter),I.push(W.anisotropy),I.push(W.internalFormat),I.push(W.format),I.push(W.type),I.push(W.generateMipmaps),I.push(W.mipmapsAutoUpdate),I.push(W.premultiplyAlpha),I.push(W.flipY),I.push(W.unpackAlignment),I.push(W.colorSpace),I.join()}function N(W,I){let te=i.get(W);if(W.isVideoTexture&&tn(W),W.isRenderTargetTexture===!1&&W.isExternalTexture!==!0&&W.version>0&&te.__version!==W.version){let me=W.image;if(me===null)Ye("WebGLRenderer: Texture marked for update but no image data found.");else if(me.complete===!1)Ye("WebGLRenderer: Texture marked for update but image is incomplete");else{de(te,W,I);return}}else W.isExternalTexture&&(te.__webglTexture=W.sourceTexture?W.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,te.__webglTexture,n.TEXTURE0+I)}function V(W,I){let te=i.get(W);if(W.isRenderTargetTexture===!1&&W.version>0&&te.__version!==W.version){de(te,W,I);return}else W.isExternalTexture&&(te.__webglTexture=W.sourceTexture?W.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,te.__webglTexture,n.TEXTURE0+I)}function K(W,I){let te=i.get(W);if(W.isRenderTargetTexture===!1&&W.version>0&&te.__version!==W.version){de(te,W,I);return}t.bindTexture(n.TEXTURE_3D,te.__webglTexture,n.TEXTURE0+I)}function J(W,I){let te=i.get(W);if(W.version>0&&te.__version!==W.version){pe(te,W,I);return}t.bindTexture(n.TEXTURE_CUBE_MAP,te.__webglTexture,n.TEXTURE0+I)}let ie={[As]:n.REPEAT,[Fi]:n.CLAMP_TO_EDGE,[Hl]:n.MIRRORED_REPEAT},ue={[_n]:n.NEAREST,[Yp]:n.NEAREST_MIPMAP_NEAREST,[Ma]:n.NEAREST_MIPMAP_LINEAR,[wn]:n.LINEAR,[_c]:n.LINEAR_MIPMAP_NEAREST,[Pi]:n.LINEAR_MIPMAP_LINEAR},Te={[jp]:n.NEVER,[rf]:n.ALWAYS,[Qp]:n.LESS,[nf]:n.LEQUAL,[e0]:n.EQUAL,[sf]:n.GEQUAL,[t0]:n.GREATER,[n0]:n.NOTEQUAL};function De(W,I){if(I.type===mi&&e.has("OES_texture_float_linear")===!1&&(I.magFilter===wn||I.magFilter===_c||I.magFilter===Ma||I.magFilter===Pi||I.minFilter===wn||I.minFilter===_c||I.minFilter===Ma||I.minFilter===Pi)&&Ye("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(W,n.TEXTURE_WRAP_S,ie[I.wrapS]),n.texParameteri(W,n.TEXTURE_WRAP_T,ie[I.wrapT]),(W===n.TEXTURE_3D||W===n.TEXTURE_2D_ARRAY)&&n.texParameteri(W,n.TEXTURE_WRAP_R,ie[I.wrapR]),n.texParameteri(W,n.TEXTURE_MAG_FILTER,ue[I.magFilter]),n.texParameteri(W,n.TEXTURE_MIN_FILTER,ue[I.minFilter]),I.compareFunction&&(n.texParameteri(W,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(W,n.TEXTURE_COMPARE_FUNC,Te[I.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(I.magFilter===_n||I.minFilter!==Ma&&I.minFilter!==Pi||I.type===mi&&e.has("OES_texture_float_linear")===!1)return;if(I.anisotropy>1||i.get(I).__currentAnisotropy){let te=e.get("EXT_texture_filter_anisotropic");n.texParameterf(W,te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(I.anisotropy,s.getMaxAnisotropy())),i.get(I).__currentAnisotropy=I.anisotropy}}}function We(W,I){let te=!1;W.__webglInit===void 0&&(W.__webglInit=!0,I.addEventListener("dispose",C),A(I));let me=I.source,fe=d.get(me);fe===void 0&&(fe={},d.set(me,fe));let _e=O(I);if(_e!==W.__cacheKey){fe[_e]===void 0&&(fe[_e]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,te=!0),fe[_e].usedTimes++;let Ae=fe[W.__cacheKey];Ae!==void 0&&(fe[W.__cacheKey].usedTimes--,Ae.usedTimes===0&&q(I)),W.__cacheKey=_e,W.__webglTexture=fe[_e].texture}return te}function ae(W,I,te){return Math.floor(Math.floor(W/te)/I)}function he(W,I,te,me){let _e=W.updateRanges;if(_e.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,I.width,I.height,te,me,I.data);else{_e.sort((Z,ce)=>Z.start-ce.start);let Ae=0;for(let Z=1;Z<_e.length;Z++){let ce=_e[Ae],re=_e[Z],Se=ce.start+ce.count,ve=ae(re.start,I.width,4),Me=ae(ce.start,I.width,4);re.start<=Se+1&&ve===Me&&ae(re.start+re.count-1,I.width,4)===ve?ce.count=Math.max(ce.count,re.start+re.count-ce.start):(++Ae,_e[Ae]=re)}_e.length=Ae+1;let oe=t.getParameter(n.UNPACK_ROW_LENGTH),le=t.getParameter(n.UNPACK_SKIP_PIXELS),be=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,I.width);for(let Z=0,ce=_e.length;Z<ce;Z++){let re=_e[Z],Se=Math.floor(re.start/4),ve=Math.ceil(re.count/4),Me=Se%I.width,Ve=Math.floor(Se/I.width),lt=ve,xe=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,Me),t.pixelStorei(n.UNPACK_SKIP_ROWS,Ve),t.texSubImage2D(n.TEXTURE_2D,0,Me,Ve,lt,xe,te,me,I.data)}W.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,oe),t.pixelStorei(n.UNPACK_SKIP_PIXELS,le),t.pixelStorei(n.UNPACK_SKIP_ROWS,be)}}function de(W,I,te){let me=n.TEXTURE_2D;(I.isDataArrayTexture||I.isCompressedArrayTexture)&&(me=n.TEXTURE_2D_ARRAY),I.isData3DTexture&&(me=n.TEXTURE_3D);let fe=We(W,I),_e=I.source;t.bindTexture(me,W.__webglTexture,n.TEXTURE0+te);let Ae=i.get(_e);if(_e.version!==Ae.__version||fe===!0){if(t.activeTexture(n.TEXTURE0+te),(typeof ImageBitmap<"u"&&I.image instanceof ImageBitmap)===!1){let xe=gt.getPrimaries(gt.workingColorSpace),qe=I.colorSpace===fs?null:gt.getPrimaries(I.colorSpace),ot=I.colorSpace===fs||xe===qe?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,I.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ot)}t.pixelStorei(n.UNPACK_ALIGNMENT,I.unpackAlignment);let le=y(I.image,!1,s.maxTextureSize);le=$e(I,le);let be=r.convert(I.format,I.colorSpace),Z=r.convert(I.type),ce=S(I.internalFormat,be,Z,I.normalized,I.colorSpace,I.isVideoTexture);De(me,I);let re,Se=I.mipmaps,ve=I.isVideoTexture!==!0,Me=Ae.__version===void 0||fe===!0,Ve=_e.dataReady,lt=_(I,le);if(I.isDepthTexture)ce=g(I.format===us,I.type),Me&&(ve?t.texStorage2D(n.TEXTURE_2D,1,ce,le.width,le.height):t.texImage2D(n.TEXTURE_2D,0,ce,le.width,le.height,0,be,Z,null));else if(I.isDataTexture)if(Se.length>0){ve&&Me&&t.texStorage2D(n.TEXTURE_2D,lt,ce,Se[0].width,Se[0].height);for(let xe=0,qe=Se.length;xe<qe;xe++)re=Se[xe],ve?Ve&&t.texSubImage2D(n.TEXTURE_2D,xe,0,0,re.width,re.height,be,Z,re.data):t.texImage2D(n.TEXTURE_2D,xe,ce,re.width,re.height,0,be,Z,re.data);I.generateMipmaps=!1}else ve?(Me&&t.texStorage2D(n.TEXTURE_2D,lt,ce,le.width,le.height),Ve&&he(I,le,be,Z)):t.texImage2D(n.TEXTURE_2D,0,ce,le.width,le.height,0,be,Z,le.data);else if(I.isCompressedTexture)if(I.isCompressedArrayTexture){ve&&Me&&t.texStorage3D(n.TEXTURE_2D_ARRAY,lt,ce,Se[0].width,Se[0].height,le.depth);for(let xe=0,qe=Se.length;xe<qe;xe++)if(re=Se[xe],I.format!==ni)if(be!==null)if(ve){if(Ve)if(I.layerUpdates.size>0){let ot=ff(re.width,re.height,I.format,I.type);for(let Ce of I.layerUpdates){let wt=re.data.subarray(Ce*ot/re.data.BYTES_PER_ELEMENT,(Ce+1)*ot/re.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,xe,0,0,Ce,re.width,re.height,1,be,wt)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,xe,0,0,0,re.width,re.height,le.depth,be,re.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,xe,ce,re.width,re.height,le.depth,0,re.data,0,0);else Ye("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ve?Ve&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,xe,0,0,0,re.width,re.height,le.depth,be,Z,re.data):t.texImage3D(n.TEXTURE_2D_ARRAY,xe,ce,re.width,re.height,le.depth,0,be,Z,re.data);I.layerUpdates.size>0&&I.clearLayerUpdates()}else{ve&&Me&&t.texStorage2D(n.TEXTURE_2D,lt,ce,Se[0].width,Se[0].height);for(let xe=0,qe=Se.length;xe<qe;xe++)re=Se[xe],I.format!==ni?be!==null?ve?Ve&&t.compressedTexSubImage2D(n.TEXTURE_2D,xe,0,0,re.width,re.height,be,re.data):t.compressedTexImage2D(n.TEXTURE_2D,xe,ce,re.width,re.height,0,re.data):Ye("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ve?Ve&&t.texSubImage2D(n.TEXTURE_2D,xe,0,0,re.width,re.height,be,Z,re.data):t.texImage2D(n.TEXTURE_2D,xe,ce,re.width,re.height,0,be,Z,re.data)}else if(I.isDataArrayTexture)if(ve){if(Me&&t.texStorage3D(n.TEXTURE_2D_ARRAY,lt,ce,le.width,le.height,le.depth),Ve)if(I.layerUpdates.size>0){let xe=ff(le.width,le.height,I.format,I.type);for(let qe of I.layerUpdates){let ot=le.data.subarray(qe*xe/le.data.BYTES_PER_ELEMENT,(qe+1)*xe/le.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,qe,le.width,le.height,1,be,Z,ot)}I.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,le.width,le.height,le.depth,be,Z,le.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,ce,le.width,le.height,le.depth,0,be,Z,le.data);else if(I.isData3DTexture)ve?(Me&&t.texStorage3D(n.TEXTURE_3D,lt,ce,le.width,le.height,le.depth),Ve&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,le.width,le.height,le.depth,be,Z,le.data)):t.texImage3D(n.TEXTURE_3D,0,ce,le.width,le.height,le.depth,0,be,Z,le.data);else if(I.isFramebufferTexture){if(Me)if(ve)t.texStorage2D(n.TEXTURE_2D,lt,ce,le.width,le.height);else{let xe=le.width,qe=le.height;for(let ot=0;ot<lt;ot++)t.texImage2D(n.TEXTURE_2D,ot,ce,xe,qe,0,be,Z,null),xe>>=1,qe>>=1}}else if(I.isHTMLTexture){if("texElementImage2D"in n){let xe=n.canvas;if(xe.hasAttribute("layoutsubtree")||xe.setAttribute("layoutsubtree","true"),le.parentNode!==xe){xe.appendChild(le),u.add(I),xe.onpaint=qe=>{let ot=qe.changedElements;for(let Ce of u)ot.includes(Ce.image)&&(Ce.needsUpdate=!0)},xe.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,le);else{let ot=n.RGBA,Ce=n.RGBA,wt=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,ot,Ce,wt,le)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Se.length>0){if(ve&&Me){let xe=Je(Se[0]);t.texStorage2D(n.TEXTURE_2D,lt,ce,xe.width,xe.height)}for(let xe=0,qe=Se.length;xe<qe;xe++)re=Se[xe],ve?Ve&&t.texSubImage2D(n.TEXTURE_2D,xe,0,0,be,Z,re):t.texImage2D(n.TEXTURE_2D,xe,ce,be,Z,re);I.generateMipmaps=!1}else if(ve){if(Me){let xe=Je(le);t.texStorage2D(n.TEXTURE_2D,lt,ce,xe.width,xe.height)}Ve&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,be,Z,le)}else t.texImage2D(n.TEXTURE_2D,0,ce,be,Z,le);b(I)&&I.mipmapsAutoUpdate===!0&&M(me),Ae.__version=_e.version,I.onUpdate&&I.onUpdate(I)}W.__version=I.version}function pe(W,I,te){if(I.image.length!==6)return;let me=We(W,I),fe=I.source;t.bindTexture(n.TEXTURE_CUBE_MAP,W.__webglTexture,n.TEXTURE0+te);let _e=i.get(fe);if(fe.version!==_e.__version||me===!0){t.activeTexture(n.TEXTURE0+te);let Ae=gt.getPrimaries(gt.workingColorSpace),oe=I.colorSpace===fs?null:gt.getPrimaries(I.colorSpace),le=I.colorSpace===fs||Ae===oe?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,I.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,I.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,le);let be=I.isCompressedTexture||I.image[0].isCompressedTexture,Z=I.image[0]&&I.image[0].isDataTexture,ce=[];for(let Ce=0;Ce<6;Ce++)!be&&!Z?ce[Ce]=y(I.image[Ce],!0,s.maxCubemapSize):ce[Ce]=Z?I.image[Ce].image:I.image[Ce],ce[Ce]=$e(I,ce[Ce]);let re=ce[0],Se=r.convert(I.format,I.colorSpace),ve=r.convert(I.type),Me=S(I.internalFormat,Se,ve,I.normalized,I.colorSpace),Ve=I.isVideoTexture!==!0,lt=_e.__version===void 0||me===!0,xe=fe.dataReady,qe=_(I,re);De(n.TEXTURE_CUBE_MAP,I);let ot;if(I.isDepthTexture){if(Me=g(I.format===us,I.type),lt)if(Ve)t.texStorage2D(n.TEXTURE_CUBE_MAP,1,Me,re.width,re.height);else for(let Ce=0;Ce<6;Ce++)t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0,Me,re.width,re.height,0,Se,ve,null)}else if(be){Ve&&lt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,qe,Me,re.width,re.height);for(let Ce=0;Ce<6;Ce++){ot=ce[Ce].mipmaps;for(let wt=0;wt<ot.length;wt++){let xn=ot[wt];I.format!==ni?Se!==null?Ve?xe&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,wt,0,0,xn.width,xn.height,Se,xn.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,wt,Me,xn.width,xn.height,0,xn.data):Ye("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ve?xe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,wt,0,0,xn.width,xn.height,Se,ve,xn.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,wt,Me,xn.width,xn.height,0,Se,ve,xn.data)}}}else{if(ot=I.mipmaps,Ve&&lt){ot.length>0&&qe++;let Ce=Je(ce[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,qe,Me,Ce.width,Ce.height)}for(let Ce=0;Ce<6;Ce++)if(Z){Ve?xe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0,0,0,ce[Ce].width,ce[Ce].height,Se,ve,ce[Ce].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0,Me,ce[Ce].width,ce[Ce].height,0,Se,ve,ce[Ce].data);for(let wt=0;wt<ot.length;wt++){let _s=ot[wt].image[Ce].image;Ve?xe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,wt+1,0,0,_s.width,_s.height,Se,ve,_s.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,wt+1,Me,_s.width,_s.height,0,Se,ve,_s.data)}}else{Ve?xe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0,0,0,Se,ve,ce[Ce]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0,Me,Se,ve,ce[Ce]);for(let wt=0;wt<ot.length;wt++){let xn=ot[wt];Ve?xe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,wt+1,0,0,Se,ve,xn.image[Ce]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,wt+1,Me,Se,ve,xn.image[Ce])}}}b(I)&&I.mipmapsAutoUpdate===!0&&M(n.TEXTURE_CUBE_MAP),_e.__version=fe.version,I.onUpdate&&I.onUpdate(I)}W.__version=I.version}function ye(W,I,te,me,fe,_e){let Ae=r.convert(te.format,te.colorSpace),oe=r.convert(te.type),le=S(te.internalFormat,Ae,oe,te.normalized,te.colorSpace),be=i.get(I),Z=i.get(te);if(Z.__renderTarget=I,!be.__hasExternalTextures){let ce=Math.max(1,I.width>>_e),re=Math.max(1,I.height>>_e);fe===n.TEXTURE_3D||fe===n.TEXTURE_2D_ARRAY?t.texImage3D(fe,_e,le,ce,re,I.depth,0,Ae,oe,null):t.texImage2D(fe,_e,le,ce,re,0,Ae,oe,null)}t.bindFramebuffer(n.FRAMEBUFFER,W),Ee(I)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,me,fe,Z.__webglTexture,0,Pt(I)):(fe===n.TEXTURE_2D||fe>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&fe<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,me,fe,Z.__webglTexture,_e),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ge(W,I,te){if(n.bindRenderbuffer(n.RENDERBUFFER,W),I.depthBuffer){let me=I.depthTexture,fe=me&&me.isDepthTexture?me.type:null,_e=g(I.stencilBuffer,fe),Ae=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Ee(I)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Pt(I),_e,I.width,I.height):te?n.renderbufferStorageMultisample(n.RENDERBUFFER,Pt(I),_e,I.width,I.height):n.renderbufferStorage(n.RENDERBUFFER,_e,I.width,I.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ae,n.RENDERBUFFER,W)}else{let me=I.textures;for(let fe=0;fe<me.length;fe++){let _e=me[fe],Ae=r.convert(_e.format,_e.colorSpace),oe=r.convert(_e.type),le=S(_e.internalFormat,Ae,oe,_e.normalized,_e.colorSpace);Ee(I)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Pt(I),le,I.width,I.height):te?n.renderbufferStorageMultisample(n.RENDERBUFFER,Pt(I),le,I.width,I.height):n.renderbufferStorage(n.RENDERBUFFER,le,I.width,I.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Le(W,I,te){let me=I.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,W),!(I.depthTexture&&I.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let fe=i.get(I.depthTexture);fe.__renderTarget=I;let _e=me?I.depthTexture.image[0]:I.depthTexture.image;(!fe.__webglTexture||_e.width!==I.width||_e.height!==I.height)&&(_e.width=I.width,_e.height=I.height,I.depthTexture.needsUpdate=!0),me?J(I.depthTexture,0):N(I.depthTexture,0);let Ae=fe.__webglTexture,oe=Pt(I),le=me?n.TEXTURE_CUBE_MAP_POSITIVE_X+te:n.TEXTURE_2D,be=I.depthTexture.format===us?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(I.depthTexture.format===os)Ee(I)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,be,le,Ae,0,oe):n.framebufferTexture2D(n.FRAMEBUFFER,be,le,Ae,0);else if(I.depthTexture.format===us)Ee(I)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,be,le,Ae,0,oe):n.framebufferTexture2D(n.FRAMEBUFFER,be,le,Ae,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function et(W){let I=i.get(W),te=W.isWebGLCubeRenderTarget===!0;if(I.__boundDepthTexture!==W.depthTexture){let me=W.depthTexture;if(I.__depthDisposeCallback&&I.__depthDisposeCallback(),me){let fe=()=>{delete I.__boundDepthTexture,delete I.__depthDisposeCallback,me.removeEventListener("dispose",fe)};me.addEventListener("dispose",fe),I.__depthDisposeCallback=fe}I.__boundDepthTexture=me}if(W.depthTexture&&!I.__autoAllocateDepthBuffer)if(te)for(let me=0;me<6;me++)Le(I.__webglFramebuffer[me],W,me);else W.texture.mipmaps.length>0?Le(I.__webglFramebuffer[0],W,0):Le(I.__webglFramebuffer,W,0);else if(te){I.__webglDepthbuffer=[];for(let me=0;me<6;me++)if(t.bindFramebuffer(n.FRAMEBUFFER,I.__webglFramebuffer[me]),I.__webglDepthbuffer[me]===void 0)I.__webglDepthbuffer[me]=n.createRenderbuffer(),Ge(I.__webglDepthbuffer[me],W,!1);else{let fe=W.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,_e=I.__webglDepthbuffer[me];n.bindRenderbuffer(n.RENDERBUFFER,_e),n.framebufferRenderbuffer(n.FRAMEBUFFER,fe,n.RENDERBUFFER,_e)}}else if(W.texture.mipmaps.length>0?t.bindFramebuffer(n.FRAMEBUFFER,I.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,I.__webglFramebuffer),I.__webglDepthbuffer===void 0)I.__webglDepthbuffer=n.createRenderbuffer(),Ge(I.__webglDepthbuffer,W,!1);else{let fe=W.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,_e=I.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,_e),n.framebufferRenderbuffer(n.FRAMEBUFFER,fe,n.RENDERBUFFER,_e)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function at(W,I,te){let me=i.get(W);I!==void 0&&ye(me.__webglFramebuffer,W,W.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),te!==void 0&&et(W)}function dt(W){let I=W.texture,te=i.get(W),me=i.get(I);W.addEventListener("dispose",L),A(W);let fe=W.textures,_e=W.isWebGLCubeRenderTarget===!0,Ae=fe.length>1;if(Ae||(me.__webglTexture===void 0&&(me.__webglTexture=n.createTexture()),me.__version=I.version,o.memory.textures++),_e){te.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(I.mipmaps.length>0){te.__webglFramebuffer[oe]=[];for(let le=0;le<I.mipmaps.length;le++)te.__webglFramebuffer[oe][le]=n.createFramebuffer()}else te.__webglFramebuffer[oe]=n.createFramebuffer()}else{if(I.mipmaps.length>0){te.__webglFramebuffer=[];for(let oe=0;oe<I.mipmaps.length;oe++)te.__webglFramebuffer[oe]=n.createFramebuffer()}else te.__webglFramebuffer=n.createFramebuffer();if(Ae)for(let oe=0,le=fe.length;oe<le;oe++){let be=i.get(fe[oe]);be.__webglTexture===void 0&&(be.__webglTexture=n.createTexture(),o.memory.textures++)}if(W.samples>0&&Ee(W)===!1){te.__webglMultisampledFramebuffer=n.createFramebuffer(),te.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,te.__webglMultisampledFramebuffer);for(let oe=0;oe<fe.length;oe++){let le=fe[oe];te.__webglColorRenderbuffer[oe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,te.__webglColorRenderbuffer[oe]);let be=r.convert(le.format,le.colorSpace),Z=r.convert(le.type),ce=S(le.internalFormat,be,Z,le.normalized,le.colorSpace,W.isXRRenderTarget===!0),re=Pt(W);n.renderbufferStorageMultisample(n.RENDERBUFFER,re,ce,W.width,W.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+oe,n.RENDERBUFFER,te.__webglColorRenderbuffer[oe])}n.bindRenderbuffer(n.RENDERBUFFER,null),W.depthBuffer&&(te.__webglDepthRenderbuffer=n.createRenderbuffer(),Ge(te.__webglDepthRenderbuffer,W,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(_e){t.bindTexture(n.TEXTURE_CUBE_MAP,me.__webglTexture),De(n.TEXTURE_CUBE_MAP,I);for(let oe=0;oe<6;oe++)if(I.mipmaps.length>0)for(let le=0;le<I.mipmaps.length;le++)ye(te.__webglFramebuffer[oe][le],W,I,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,le);else ye(te.__webglFramebuffer[oe],W,I,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);b(I)?M(n.TEXTURE_CUBE_MAP):I.mipmaps.length>0&&n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_MAX_LEVEL,I.mipmaps.length-1),t.unbindTexture()}else if(Ae){for(let oe=0,le=fe.length;oe<le;oe++){let be=fe[oe],Z=i.get(be),ce=n.TEXTURE_2D;(W.isWebGL3DRenderTarget||W.isWebGLArrayRenderTarget)&&(ce=W.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ce,Z.__webglTexture),De(ce,be),ye(te.__webglFramebuffer,W,be,n.COLOR_ATTACHMENT0+oe,ce,0),b(be)&&M(ce)}t.unbindTexture()}else{let oe=n.TEXTURE_2D;if((W.isWebGL3DRenderTarget||W.isWebGLArrayRenderTarget)&&(oe=W.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(oe,me.__webglTexture),De(oe,I),I.mipmaps.length>0)for(let le=0;le<I.mipmaps.length;le++)ye(te.__webglFramebuffer[le],W,I,n.COLOR_ATTACHMENT0,oe,le);else ye(te.__webglFramebuffer,W,I,n.COLOR_ATTACHMENT0,oe,0);b(I)?M(oe):I.mipmaps.length>0&&n.texParameteri(oe,n.TEXTURE_MAX_LEVEL,I.mipmaps.length-1),t.unbindTexture()}W.depthBuffer&&et(W)}function Q(W){let I=W.textures;for(let te=0,me=I.length;te<me;te++){let fe=I[te];if(b(fe)&&fe.mipmapsAutoUpdate===!0){let _e=R(W),Ae=i.get(fe).__webglTexture;t.bindTexture(_e,Ae),M(_e),t.unbindTexture()}}}let Yt=[];function ut(W){if(W.samples>0){if(Ee(W)===!1){let I=W.textures,te=W.width,me=W.height,fe=n.COLOR_BUFFER_BIT,_e=W.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ae=i.get(W),oe=I.length>1;if(oe)for(let be=0;be<I.length;be++)t.bindFramebuffer(n.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+be,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Ae.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+be,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),W.texture.mipmaps.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer);for(let be=0;be<I.length;be++){if(W.resolveDepthBuffer&&(W.depthBuffer&&(fe|=n.DEPTH_BUFFER_BIT),W.stencilBuffer&&W.resolveStencilBuffer&&(fe|=n.STENCIL_BUFFER_BIT)),oe){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ae.__webglColorRenderbuffer[be]);let Z=i.get(I[be]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Z,0)}n.blitFramebuffer(0,0,te,me,0,0,te,me,fe,n.NEAREST),l===!0&&(Yt.length=0,Yt.push(n.COLOR_ATTACHMENT0+be),W.depthBuffer&&W.storeMultisampledDepthBuffer===!1&&Yt.push(_e),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Yt))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),oe)for(let be=0;be<I.length;be++){t.bindFramebuffer(n.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+be,n.RENDERBUFFER,Ae.__webglColorRenderbuffer[be]);let Z=i.get(I[be]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Ae.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+be,n.TEXTURE_2D,Z,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer)}else if(W.depthBuffer&&W.storeMultisampledDepthBuffer===!1&&l){let I=W.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[I])}}}function Pt(W){return Math.min(s.maxSamples,W.samples)}function Ee(W){let I=i.get(W);return W.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&I.__useRenderToTexture!==!1}function tn(W){let I=o.render.frame;h.get(W)!==I&&(h.set(W,I),W.update())}function $e(W,I){let te=W.colorSpace,me=W.format,fe=W.type;return W.isCompressedTexture===!0||W.isVideoTexture===!0||te!==Wo&&te!==fs&&(gt.getTransfer(te)===St?(me!==ni||fe!==Wn)&&Ye("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ze("WebGLTextures: Unsupported texture color space:",te)),I}function Je(W){return typeof HTMLImageElement<"u"&&W instanceof HTMLImageElement?(c.width=W.naturalWidth||W.width,c.height=W.naturalHeight||W.height):typeof VideoFrame<"u"&&W instanceof VideoFrame?(c.width=W.displayWidth,c.height=W.displayHeight):(c.width=W.width,c.height=W.height),c}this.allocateTextureUnit=G,this.resetTextureUnits=H,this.getTextureUnits=E,this.setTextureUnits=F,this.setTexture2D=N,this.setTexture2DArray=V,this.setTexture3D=K,this.setTextureCube=J,this.rebindTextures=at,this.setupRenderTarget=dt,this.updateRenderTargetMipmap=Q,this.updateMultisampleRenderTarget=ut,this.setupDepthRenderbuffer=et,this.setupFrameBufferTexture=ye,this.useMultisampledRTT=Ee,this.dispose=z}function zM(n,e){function t(i,s=fs){let r,o=gt.getTransfer(s);if(i===Wn)return n.UNSIGNED_BYTE;if(i===bc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Sc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===ju)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Qu)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Ku)return n.BYTE;if(i===Ju)return n.SHORT;if(i===co)return n.UNSIGNED_SHORT;if(i===Mc)return n.INT;if(i===Ii)return n.UNSIGNED_INT;if(i===mi)return n.FLOAT;if(i===Li)return n.HALF_FLOAT;if(i===ef)return n.ALPHA;if(i===tf)return n.RGB;if(i===ni)return n.RGBA;if(i===os)return n.DEPTH_COMPONENT;if(i===us)return n.DEPTH_STENCIL;if(i===Tc)return n.RED;if(i===wc)return n.RED_INTEGER;if(i===Us)return n.RG;if(i===Ec)return n.RG_INTEGER;if(i===Ac)return n.RGBA_INTEGER;if(i===ba||i===Sa||i===Ta||i===wa)if(o===St)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===ba)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Sa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ta)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===wa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===ba)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Sa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ta)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===wa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Rc||i===Cc||i===Pc||i===Ic)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Rc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Cc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Pc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ic)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Lc||i===Nc||i===Dc||i===Uc||i===Fc||i===Ea||i===kc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Lc||i===Nc)return o===St?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Dc)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Uc)return r.COMPRESSED_R11_EAC;if(i===Fc)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Ea)return r.COMPRESSED_RG11_EAC;if(i===kc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Oc||i===zc||i===Bc||i===Hc||i===Vc||i===Gc||i===Wc||i===Xc||i===qc||i===$c||i===Yc||i===Zc||i===Kc||i===Jc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Oc)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===zc)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Bc)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Hc)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Vc)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Gc)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Wc)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Xc)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===qc)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===$c)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Yc)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Zc)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Kc)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Jc)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===jc||i===Qc||i===eh)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===jc)return o===St?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Qc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===eh)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===th||i===nh||i===Aa||i===ih)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===th)return r.COMPRESSED_RED_RGTC1_EXT;if(i===nh)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Aa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===ih)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===hr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var BM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,HM=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Mf=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new sa(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new di({vertexShader:BM,fragmentShader:HM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Oe(new Vn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},bf=class extends ki{constructor(e,t){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,p=null,v=typeof XRWebGLBinding<"u",x=new Mf,m={},y=t.getContextAttributes(),b=null,M=null,R=[],S=[],g=new ge,_=null,A=null,w=new fn;w.viewport=new $t;let C=new fn;C.viewport=new $t;let L=[w,C],T=new mc,P=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(O){let N=R[O];return N===void 0&&(N=new jr,R[O]=N),N.getTargetRaySpace()},this.getControllerGrip=function(O){let N=R[O];return N===void 0&&(N=new jr,R[O]=N),N.getGripSpace()},this.getHand=function(O){let N=R[O];return N===void 0&&(N=new jr,R[O]=N),N.getHandSpace()};function X(O){let N=S.indexOf(O.inputSource);if(N===-1)return;let V=R[N];V!==void 0&&(V.update(O.inputSource,O.frame,c||o),V.dispatchEvent({type:O.type,data:O.inputSource}))}function q(){s.removeEventListener("select",X),s.removeEventListener("selectstart",X),s.removeEventListener("selectend",X),s.removeEventListener("squeeze",X),s.removeEventListener("squeezestart",X),s.removeEventListener("squeezeend",X),s.removeEventListener("end",q),s.removeEventListener("inputsourceschange",B);for(let O=0;O<R.length;O++){let N=S[O];N!==null&&(S[O]=null,R[O].disconnect(N))}P=null,z=null,x.reset();for(let O in m)delete m[O];if(e.setRenderTarget(b),d=null,f=null,u=null,s=null,M=null,G.stop(),i.isPresenting=!1,e.setPixelRatio(_),e.setSize(g.width,g.height,!1),A!==null){let O=A.camera;O.fov=A.fov,O.zoom=A.zoom,O.updateProjectionMatrix(),A=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(O){r=O,i.isPresenting===!0&&Ye("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(O){a=O,i.isPresenting===!0&&Ye("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(O){c=O},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u===null&&v&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(O){if(s=O,s!==null){if(b=e.getRenderTarget(),s.addEventListener("select",X),s.addEventListener("selectstart",X),s.addEventListener("selectend",X),s.addEventListener("squeeze",X),s.addEventListener("squeezestart",X),s.addEventListener("squeezeend",X),s.addEventListener("end",q),s.addEventListener("inputsourceschange",B),y.xrCompatible!==!0&&await t.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(g),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let V=null,K=null,J=null;y.depth&&(J=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,V=y.stencil?us:os,K=y.stencil?hr:Ii);let ie={colorFormat:t.RGBA8,depthFormat:J,scaleFactor:r};u=this.getBinding(),f=u.createProjectionLayer(ie),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),M=new Jn(f.textureWidth,f.textureHeight,{format:ni,type:Wn,depthTexture:new ls(f.textureWidth,f.textureHeight,K,void 0,void 0,void 0,void 0,void 0,void 0,V),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let V={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,V),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),M=new Jn(d.framebufferWidth,d.framebufferHeight,{format:ni,type:Wn,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),G.setContext(s),G.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function B(O){for(let N=0;N<O.removed.length;N++){let V=O.removed[N],K=S.indexOf(V);K>=0&&(S[K]=null,R[K].disconnect(V))}for(let N=0;N<O.added.length;N++){let V=O.added[N],K=S.indexOf(V);if(K===-1){for(let ie=0;ie<R.length;ie++)if(ie>=S.length){S.push(V),K=ie;break}else if(S[ie]===null){S[ie]=V,K=ie;break}if(K===-1)break}let J=R[K];J&&J.connect(V)}}function U(O,N){N===null?O.matrixWorld.copy(O.matrix):O.matrixWorld.multiplyMatrices(N.matrixWorld,O.matrix),O.matrixWorldInverse.copy(O.matrixWorld).invert()}this.updateCamera=function(O){if(s===null)return;let N=O.near,V=O.far;x.texture!==null&&(x.depthNear>0&&(N=x.depthNear),x.depthFar>0&&(V=x.depthFar)),T.near=C.near=w.near=N,T.far=C.far=w.far=V,(P!==T.near||z!==T.far)&&(s.updateRenderState({depthNear:T.near,depthFar:T.far}),P=T.near,z=T.far),T.layers.mask=O.layers.mask|6,w.layers.mask=T.layers.mask&-5,C.layers.mask=T.layers.mask&-3;let K=O.parent,J=T.cameras;U(T,K);for(let ie=0;ie<J.length;ie++)U(J[ie],K);T.projectionMatrix.copy(w.projectionMatrix),T.projectionMatrixInverse.copy(w.projectionMatrixInverse),A===null&&O.isPerspectiveCamera&&(A={camera:O,fov:O.fov,zoom:O.zoom}),H(O,T,K)};function H(O,N,V){V===null?O.matrix.copy(N.matrixWorld):(O.matrix.copy(V.matrixWorld),O.matrix.invert(),O.matrix.multiply(N.matrixWorld)),O.matrix.decompose(O.position,O.quaternion,O.scale),O.updateMatrixWorld(!0),O.projectionMatrix.copy(N.projectionMatrix),O.projectionMatrixInverse.copy(N.projectionMatrixInverse),O.isPerspectiveCamera&&(O.fov=Gl*2*Math.atan(1/O.projectionMatrix.elements[5]),O.zoom=1)}this.getCamera=function(){return T},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(O){l=O,f!==null&&(f.fixedFoveation=O),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=O)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(T)},this.getCameraTexture=function(O){return m[O]};let E=null;function F(O,N){if(h=N.getViewerPose(c||o),p=N,h!==null){let V=h.views;d!==null&&(e.setRenderTargetFramebuffer(M,d.framebuffer),e.setRenderTarget(M));let K=!1;V.length!==T.cameras.length&&(T.cameras.length=0,K=!0);for(let Te=0;Te<V.length;Te++){let De=V[Te],We=null;if(d!==null)We=d.getViewport(De);else{let he=u.getViewSubImage(f,De);We=he.viewport,Te===0&&(e.setRenderTargetTextures(M,he.colorTexture,he.depthStencilTexture),e.setRenderTarget(M))}let ae=L[Te];ae===void 0&&(ae=new fn,ae.layers.enable(Te),ae.viewport=new $t,L[Te]=ae),ae.matrix.fromArray(De.transform.matrix),ae.matrix.decompose(ae.position,ae.quaternion,ae.scale),ae.projectionMatrix.fromArray(De.projectionMatrix),ae.projectionMatrixInverse.copy(ae.projectionMatrix).invert(),ae.viewport.set(We.x,We.y,We.width,We.height),Te===0&&(T.matrix.copy(ae.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale)),K===!0&&T.cameras.push(ae)}let J=s.enabledFeatures;if(J&&J.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){u=i.getBinding();let Te=u.getDepthInformation(V[0]);Te&&Te.isValid&&Te.texture&&x.init(Te,s.renderState)}if(J&&J.includes("camera-access")&&v){e.state.unbindTexture(),u=i.getBinding();for(let Te=0;Te<V.length;Te++){let De=V[Te].camera;if(De){let We=m[De];We||(We=new sa,m[De]=We);let ae=u.getCameraImage(De);We.sourceTexture=ae}}}}for(let V=0;V<R.length;V++){let K=S[V],J=R[V];K!==null&&J!==void 0&&J.update(K,N,c||o)}E&&E(O,N),N.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:N}),p=null}let G=new B0;G.setAnimationLoop(F),this.setAnimationLoop=function(O){E=O},this.dispose=function(){}}},VM=new Mt,K0=new Qe;K0.set(-1,0,0,0,1,0,0,0,1);function GM(n,e){function t(x,m){x.matrixAutoUpdate===!0&&x.updateMatrix(),m.value.copy(x.matrix)}function i(x,m){m.color.getRGB(x.fogColor.value,cf(n)),m.isFog?(x.fogNear.value=m.near,x.fogFar.value=m.far):m.isFogExp2&&(x.fogDensity.value=m.density)}function s(x,m,y,b,M){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(x,m):m.isMeshLambertMaterial?(r(x,m),m.envMap&&(x.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(x,m),u(x,m)):m.isMeshPhongMaterial?(r(x,m),h(x,m),m.envMap&&(x.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(x,m),f(x,m),m.isMeshPhysicalMaterial&&d(x,m,M)):m.isMeshMatcapMaterial?(r(x,m),p(x,m)):m.isMeshDepthMaterial?r(x,m):m.isMeshDistanceMaterial?(r(x,m),v(x,m)):m.isMeshNormalMaterial?r(x,m):m.isLineBasicMaterial?(o(x,m),m.isLineDashedMaterial&&a(x,m)):m.isPointsMaterial?l(x,m,y,b):m.isSpriteMaterial?c(x,m):m.isShadowMaterial?(x.color.value.copy(m.color),x.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(x,m){x.opacity.value=m.opacity,m.color&&x.diffuse.value.copy(m.color),m.emissive&&x.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(x.map.value=m.map,t(m.map,x.mapTransform)),m.alphaMap&&(x.alphaMap.value=m.alphaMap,t(m.alphaMap,x.alphaMapTransform)),m.bumpMap&&(x.bumpMap.value=m.bumpMap,t(m.bumpMap,x.bumpMapTransform),x.bumpScale.value=m.bumpScale,m.side===dn&&(x.bumpScale.value*=-1)),m.normalMap&&(x.normalMap.value=m.normalMap,t(m.normalMap,x.normalMapTransform),x.normalScale.value.copy(m.normalScale),m.side===dn&&x.normalScale.value.negate()),m.displacementMap&&(x.displacementMap.value=m.displacementMap,t(m.displacementMap,x.displacementMapTransform),x.displacementScale.value=m.displacementScale,x.displacementBias.value=m.displacementBias),m.emissiveMap&&(x.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,x.emissiveMapTransform)),m.specularMap&&(x.specularMap.value=m.specularMap,t(m.specularMap,x.specularMapTransform)),m.alphaTest>0&&(x.alphaTest.value=m.alphaTest);let y=e.get(m),b=y.envMap,M=y.envMapRotation;b&&(x.envMap.value=b,x.envMapRotation.value.setFromMatrix4(VM.makeRotationFromEuler(M)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&x.envMapRotation.value.premultiply(K0),x.reflectivity.value=m.reflectivity,x.ior.value=m.ior,x.refractionRatio.value=m.refractionRatio),m.lightMap&&(x.lightMap.value=m.lightMap,x.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,x.lightMapTransform)),m.aoMap&&(x.aoMap.value=m.aoMap,x.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,x.aoMapTransform))}function o(x,m){x.diffuse.value.copy(m.color),x.opacity.value=m.opacity,m.map&&(x.map.value=m.map,t(m.map,x.mapTransform))}function a(x,m){x.dashSize.value=m.dashSize,x.totalSize.value=m.dashSize+m.gapSize,x.scale.value=m.scale}function l(x,m,y,b){x.diffuse.value.copy(m.color),x.opacity.value=m.opacity,x.size.value=m.size*y,x.scale.value=b*.5,m.map&&(x.map.value=m.map,t(m.map,x.uvTransform)),m.alphaMap&&(x.alphaMap.value=m.alphaMap,t(m.alphaMap,x.alphaMapTransform)),m.alphaTest>0&&(x.alphaTest.value=m.alphaTest)}function c(x,m){x.diffuse.value.copy(m.color),x.opacity.value=m.opacity,x.rotation.value=m.rotation,m.map&&(x.map.value=m.map,t(m.map,x.mapTransform)),m.alphaMap&&(x.alphaMap.value=m.alphaMap,t(m.alphaMap,x.alphaMapTransform)),m.alphaTest>0&&(x.alphaTest.value=m.alphaTest)}function h(x,m){x.specular.value.copy(m.specular),x.shininess.value=Math.max(m.shininess,1e-4)}function u(x,m){m.gradientMap&&(x.gradientMap.value=m.gradientMap)}function f(x,m){x.metalness.value=m.metalness,m.metalnessMap&&(x.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,x.metalnessMapTransform)),x.roughness.value=m.roughness,m.roughnessMap&&(x.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,x.roughnessMapTransform)),m.envMap&&(x.envMapIntensity.value=m.envMapIntensity)}function d(x,m,y){x.ior.value=m.ior,m.diffuseRoughness>0&&(x.diffuseRoughness.value=m.diffuseRoughness,m.diffuseRoughnessMap&&(x.diffuseRoughnessMap.value=m.diffuseRoughnessMap,t(m.diffuseRoughnessMap,x.diffuseRoughnessMapTransform))),m.sheen>0&&(x.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),x.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(x.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,x.sheenColorMapTransform)),m.sheenRoughnessMap&&(x.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,x.sheenRoughnessMapTransform))),m.clearcoat>0&&(x.clearcoat.value=m.clearcoat,x.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(x.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,x.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(x.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===dn&&x.clearcoatNormalScale.value.negate())),m.dispersion>0&&(x.dispersion.value=m.dispersion),m.retroreflectivity>0&&(x.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(x.iridescence.value=m.iridescence,x.iridescenceIOR.value=m.iridescenceIOR,x.iridescenceThicknessMinimum.value=m.iridescenceThicknessMinimum,x.iridescenceThicknessMaximum.value=m.iridescenceThicknessMaximum,m.iridescenceMap&&(x.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,x.iridescenceMapTransform)),m.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),m.transmission>0&&(x.transmission.value=m.transmission,x.transmissionSamplerMap.value=y.texture,x.transmissionSamplerSize.value.set(y.width,y.height),m.transmissionMap&&(x.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,x.transmissionMapTransform)),x.thickness.value=m.thickness,m.thicknessMap&&(x.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=m.attenuationDistance,x.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(x.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(x.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=m.specularIntensity,x.specularColor.value.copy(m.specularColor),m.specularColorMap&&(x.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,x.specularColorMapTransform)),m.specularIntensityMap&&(x.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,x.specularIntensityMapTransform))}function p(x,m){m.matcap&&(x.matcap.value=m.matcap)}function v(x,m){let y=e.get(m).light;x.referencePosition.value.setFromMatrixPosition(y.matrixWorld),x.nearDistance.value=y.shadow.camera.near,x.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function WM(n,e,t,i){let s={},r={};function o(y,b){let M=b.program;i.uniformBlockBinding(y,M,s[y.id])}function a(y,b){let M=s[y.id];M===void 0&&(p(y),M=l(y),s[y.id]=M,y.addEventListener("dispose",x));let R=b.program;i.updateUBOMapping(y,R);let S=e.render.frame;r[y.id]!==S&&(c(y),r[y.id]=S)}function l(y){let b=n.createBuffer(),M=y.__size,R=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,b),n.bufferData(n.UNIFORM_BUFFER,M,R),n.bindBuffer(n.UNIFORM_BUFFER,null),b}function c(y){let b=s[y.id],M=y.uniforms,R=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let S=0,g=M.length;S<g;S++){let _=M[S];if(Array.isArray(_))for(let A=0,w=_.length;A<w;A++)h(_[A],S,A,R);else h(_,S,0,R)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function h(y,b,M,R){if(f(y,b,M,R)===!0){let S=y.__offset,g=y.value;if(Array.isArray(g)){let _=0;for(let A=0;A<g.length;A++){let w=g[A],C=v(w,!0);u(w,y.__data,_),_+=C.storage/Float32Array.BYTES_PER_ELEMENT}}else u(g,y.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,S,y.__data)}}function u(y,b,M){typeof y=="number"||typeof y=="boolean"?b[M]=y:y.isMatrix3?(b[M]=y.elements[0],b[M+1]=y.elements[1],b[M+2]=y.elements[2],b[M+3]=0,b[M+4]=y.elements[3],b[M+5]=y.elements[4],b[M+6]=y.elements[5],b[M+7]=0,b[M+8]=y.elements[6],b[M+9]=y.elements[7],b[M+10]=y.elements[8],b[M+11]=0):ArrayBuffer.isView(y)?b.set(y.subarray(0,b.length-M),M):y.toArray(b,M)}function f(y,b,M,R){let S=y.value,g=b+"_"+M;if(Array.isArray(S)){R[g]===void 0&&(R[g]=[]);let _=R[g],A=!1;for(let w=0;w<S.length;w++)d(S[w],_,w)===!0&&(A=!0);return A}return d(S,R,g)}function d(y,b,M){if(b[M]===void 0)return typeof y=="number"||typeof y=="boolean"?b[M]=y:ArrayBuffer.isView(y)?b[M]=y.slice():b[M]=y.clone(),!0;{let R=b[M];if(typeof y=="number"||typeof y=="boolean"){if(R!==y)return b[M]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(R.equals(y)===!1)return R.copy(y),!0}}return!1}function p(y){let b=y.uniforms,M=0,R=16;for(let g=0,_=b.length;g<_;g++){let A=Array.isArray(b[g])?b[g]:[b[g]];for(let w=0,C=A.length;w<C;w++){let L=A[w],T=Array.isArray(L.value)?L.value:[L.value],P=Array.isArray(b[g])||Array.isArray(L.value),z=M;for(let q=0,B=T.length;q<B;q++){let U=T[q],H=v(U,P),E=M%R,F=E%H.boundary,G=E+F;M+=F,G!==0&&R-G<H.storage&&(M+=R-G),q===0&&(z=M),M+=H.storage}let X=L.type==="int"?Int32Array:L.type==="uint"?Uint32Array:Float32Array;L.__data=new X((M-z)/Float32Array.BYTES_PER_ELEMENT),L.__offset=z}}let S=M%R;return S>0&&(M+=R-S),y.__size=M,y.__cache={},this}function v(y,b){let M={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(M.boundary=4,M.storage=4):y.isVector2?(M.boundary=8,M.storage=8):y.isVector3||y.isColor?(M.boundary=16,M.storage=12):y.isVector4?(M.boundary=16,M.storage=16):y.isMatrix3?(M.boundary=16,M.storage=48):y.isMatrix4?(M.boundary=16,M.storage=64):y.isTexture?Ye("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(M.boundary=16,M.storage=y.byteLength):Ye("WebGLRenderer: Unsupported uniform value type.",y),b===!0&&(M.boundary=16,M.storage=Math.ceil(M.storage/16)*16),M}function x(y){let b=y.target;b.removeEventListener("dispose",x),n.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function m(){for(let y in s)n.deleteBuffer(s[y]);s={},r={}}return{bind:o,update:a,dispose:m}}var XM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Xi=null;function qM(){return Xi===null&&(Xi=new nr(XM,16,16,Us,Li),Xi.name="DFG_LUT",Xi.minFilter=wn,Xi.magFilter=wn,Xi.wrapS=Fi,Xi.wrapT=Fi,Xi.generateMipmaps=!1,Xi.needsUpdate=!0),Xi}var fr=class{constructor(e={}){let{canvas:t=i0(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1,outputBufferType:d=Wn}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;let v=d,x=new Set([Ac,Ec,wc]),m=new Set([Wn,Ii,co,hr,bc,Sc]),y=new Uint32Array(4),b=new Int32Array(4),M={textures:[],min:[],max:[],resolution:[]},R=null,S=null,g=[],_=[],A=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Wi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let w=this,C=!1,L=null,T=null,P=null,z=null;this._outputColorSpace=rn;let X=0,q=0,B=null,U=-1,H=null,E=new $t,F=new $t,G=null,O=new Xe(0),N=0,V=t.width,K=t.height,J=1,ie=null,ue=null,Te=new $t(0,0,V,K),De=new $t(0,0,V,K),We=!1,ae=new Rs,he=new $l,de=!1,pe=!1,ye=new Mt,Ge=new Y,Le=new $t,et={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},at=!1;function dt(){return B===null?J:1}let Q=i;function Yt(D,j){return t.getContext(D,j)}let ut,Pt,Ee,tn,$e,Je,W,I,te,me,fe,_e,Ae,oe,le,be,Z,ce,re,Se,ve,Me,Ve;try{let D={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",qe,!1),t.addEventListener("webglcontextrestored",ot,!1),t.addEventListener("webglcontextcreationerror",Ce,!1),Q===null){let j="webgl2";if(Q=Yt(j,D),Q===null)throw Yt(j)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}lt()}catch(D){throw t.removeEventListener("webglcontextlost",qe,!1),t.removeEventListener("webglcontextrestored",ot,!1),t.removeEventListener("webglcontextcreationerror",Ce,!1),Ze("WebGLRenderer: "+D.message),D}function lt(){ut=new i_(Q),ut.init(),ve=new zM(Q,ut),Pt=new qv(Q,ut,e,ve),Ee=new kM(Q,ut),Pt.reversedDepthBuffer&&f&&Ee.buffers.depth.setReversed(!0),T=Q.createFramebuffer(),P=Q.createFramebuffer(),z=Q.createFramebuffer(),tn=new o_(Q),$e=new SM,Je=new OM(Q,ut,Ee,$e,Pt,ve,tn),W=new n_(w),I=new ly(Q),Me=new Wv(Q,I),te=new s_(Q,I,tn,Me),me=new l_(Q,te,I,Me,tn),ce=new a_(Q,Pt,Je),le=new $v($e),fe=new bM(w,W,ut,Pt,Me,le),_e=new GM(w,$e),Ae=new wM,oe=new IM(ut),Z=new Gv(w,W,Ee,me,p,l),be=new FM(w,me,Pt),Ve=new WM(Q,tn,Pt,Ee),re=new Xv(Q,ut,tn),Se=new r_(Q,ut,tn),tn.programs=fe.programs,w.capabilities=Pt,w.extensions=ut,w.properties=$e,w.renderLists=Ae,w.shadowMap=be,w.state=Ee,w.info=tn}v!==Wn&&(A=new h_(v,t.width,t.height,a,s,r));let xe=new bf(w,Q);this.xr=xe,this.getContext=function(){return Q},this.getContextAttributes=function(){return Q.getContextAttributes()},this.forceContextLoss=function(){let D=ut.get("WEBGL_lose_context");D&&D.loseContext()},this.forceContextRestore=function(){let D=ut.get("WEBGL_lose_context");D&&D.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(D){D!==void 0&&(J=D,this.setSize(V,K,!1))},this.getSize=function(D){return D.set(V,K)},this.setSize=function(D,j,se=!0){if(xe.isPresenting){Ye("WebGLRenderer: Can't change size while VR device is presenting.");return}V=D,K=j,t.width=Math.floor(D*J),t.height=Math.floor(j*J),se===!0&&(t.style.width=D+"px",t.style.height=j+"px"),A!==null&&A.setSize(t.width,t.height),this.setViewport(0,0,D,j)},this.getDrawingBufferSize=function(D){return D.set(V*J,K*J).floor()},this.setDrawingBufferSize=function(D,j,se){V=D,K=j,J=se,t.width=Math.floor(D*se),t.height=Math.floor(j*se),this.setViewport(0,0,D,j)},this.setEffects=function(D){if(v===Wn){Ze("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(D){for(let j=0;j<D.length;j++)if(D[j].isOutputPass===!0){Ye("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(D||[])},this.getCurrentViewport=function(D){return D.copy(E)},this.getViewport=function(D){return D.copy(Te)},this.setViewport=function(D,j,se,ee){D.isVector4?Te.set(D.x,D.y,D.z,D.w):Te.set(D,j,se,ee),Ee.viewport(E.copy(Te).multiplyScalar(dt()).round())},this.getScissor=function(D){return D.copy(De)},this.setScissor=function(D,j,se,ee){D.isVector4?De.set(D.x,D.y,D.z,D.w):De.set(D,j,se,ee),Ee.scissor(F.copy(De).multiplyScalar(dt()).round())},this.getScissorTest=function(){return We},this.setScissorTest=function(D){Ee.setScissorTest(We=D)},this.setOpaqueSort=function(D){ie=D},this.setTransparentSort=function(D){ue=D},this.getClearColor=function(D){return D.copy(Z.getClearColor())},this.setClearColor=function(){Z.setClearColor(...arguments)},this.getClearAlpha=function(){return Z.getClearAlpha()},this.setClearAlpha=function(){Z.setClearAlpha(...arguments)},this.clear=function(D=!0,j=!0,se=!0){let ee=0;if(D){let ne=!1;if(B!==null){let Re=B.texture.format;ne=x.has(Re)}if(ne){let Re=B.texture.type,Ue=m.has(Re),we=Z.getClearColor(),Ne=Z.getClearAlpha(),ze=we.r,it=we.g,pt=we.b;Ue?(y[0]=ze,y[1]=it,y[2]=pt,y[3]=Ne,Q.clearBufferuiv(Q.COLOR,0,y)):(b[0]=ze,b[1]=it,b[2]=pt,b[3]=Ne,Q.clearBufferiv(Q.COLOR,0,b))}else ee|=Q.COLOR_BUFFER_BIT}j&&(ee|=Q.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),se&&(ee|=Q.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ee!==0&&Q.clear(ee)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(D){D.setRenderer(this),L=D},this.dispose=function(){t.removeEventListener("webglcontextlost",qe,!1),t.removeEventListener("webglcontextrestored",ot,!1),t.removeEventListener("webglcontextcreationerror",Ce,!1),Z.dispose(),Ae.dispose(),oe.dispose(),Je.dispose(),$e.dispose(),W.dispose(),me.dispose(),te.dispose(),Me.dispose(),Ve.dispose(),fe.dispose(),xe.dispose(),xe.removeEventListener("sessionstart",Dd),xe.removeEventListener("sessionend",Ud),$s.stop()};function qe(D){D.preventDefault(),$o("WebGLRenderer: Context Lost."),C=!0}function ot(){$o("WebGLRenderer: Context Restored."),C=!1;let D=tn.autoReset,j=be.enabled,se=be.autoUpdate,ee=be.needsUpdate,ne=be.type;lt(),tn.autoReset=D,be.enabled=j,be.autoUpdate=se,be.needsUpdate=ee,be.type=ne}function Ce(D){Ze("WebGLRenderer: A WebGL context could not be created. Reason: ",D.statusMessage)}function wt(D){let j=D.target;j.removeEventListener("dispose",wt),xn(j)}function xn(D){_s(D),$e.remove(D)}function _s(D){let j=$e.get(D).programs;j!==void 0&&(j.forEach(function(se){fe.releaseProgram(se)}),D.isShaderMaterial&&fe.releaseShaderCache(D))}this.renderBufferDirect=function(D,j,se,ee,ne,Re){j===null&&(j=et);let Ue=ne.isMesh&&ne.matrixWorld.determinantAffine()<0,we=qg(D,j,se,ee,ne);Ee.setMaterial(ee,Ue);let Ne=se.index,ze=1;if(ee.wireframe===!0){if(Ne=te.getWireframeAttribute(se),Ne===void 0)return;ze=2}let it=se.drawRange,pt=se.attributes.position,Fe=it.start*ze,mt=(it.start+it.count)*ze;Re!==null&&(Fe=Math.max(Fe,Re.start*ze),mt=Math.min(mt,(Re.start+Re.count)*ze)),Ne!==null?(Fe=Math.max(Fe,0),mt=Math.min(mt,Ne.count)):pt!=null&&(Fe=Math.max(Fe,0),mt=Math.min(mt,pt.count));let ln=mt-Fe;if(ln<0||ln===1/0)return;Me.setup(ne,ee,we,se,Ne);let Dt,It=re;if(Ne!==null&&(Dt=I.get(Ne),It=Se,It.setIndex(Dt)),ne.isMesh)ee.wireframe===!0?(Ee.setLineWidth(ee.wireframeLinewidth*dt()),It.setMode(Q.LINES)):It.setMode(Q.TRIANGLES);else if(ne.isLine){let Rn=ee.linewidth;Rn===void 0&&(Rn=1),Ee.setLineWidth(Rn*dt()),ne.isLineSegments?It.setMode(Q.LINES):ne.isLineLoop?It.setMode(Q.LINE_LOOP):It.setMode(Q.LINE_STRIP)}else ne.isPoints?It.setMode(Q.POINTS):ne.isSprite&&It.setMode(Q.TRIANGLES);if(ne.isBatchedMesh)if(ut.get("WEBGL_multi_draw"))It.renderMultiDraw(ne._multiDrawStarts,ne._multiDrawCounts,ne._multiDrawCount);else{let Rn=ne._multiDrawStarts,ke=ne._multiDrawCounts,Un=ne._multiDrawCount,bt=Ne?I.get(Ne).bytesPerElement:1,Ys=$e.get(ee).currentProgram.getUniforms();for(let Cn=0;Cn<Un;Cn++)Ys.setValue(Q,"_gl_DrawID",Cn),It.render(Rn[Cn]/bt,ke[Cn])}else if(ne.isInstancedMesh)It.renderInstances(Fe,ln,ne.count);else if(se.isInstancedBufferGeometry){let Rn=se._maxInstanceCount!==void 0?se._maxInstanceCount:1/0,ke=Math.min(se.instanceCount,Rn);It.renderInstances(Fe,ln,ke)}else It.render(Fe,ln)};function Nd(D,j,se,ee){L!==null&&D.isNodeMaterial&&L.setObject(ee,D),de===!0&&le.setState(D,se,!1),D.transparent===!0&&D.side===pi&&D.forceSinglePass===!1?(D.side=dn,D.needsUpdate=!0,Ro(D,j,ee),D.side=Gi,D.needsUpdate=!0,Ro(D,j,ee),D.side=pi):Ro(D,j,ee)}this.compile=function(D,j,se=null){se===null&&(se=D),L!==null&&L.renderStart(D,j,se),S=oe.get(se),S.init(j),_.push(S),se.traverseVisible(function(ne){ne.isLight&&ne.layers.test(j.layers)&&(S.pushLight(ne),ne.castShadow&&S.pushShadow(ne))}),D!==se&&D.traverseVisible(function(ne){ne.isLight&&ne.layers.test(j.layers)&&(S.pushLight(ne),ne.castShadow&&S.pushShadow(ne))}),S.setupLights(),L!==null&&L.updateLights(S.state.lightsArray),pe=this.localClippingEnabled,de=le.init(this.clippingPlanes,pe),de===!0&&le.setGlobalState(this.clippingPlanes,j),L!==null&&be.render(S.state.shadowsArray,se,j);let ee=new Set;return D.traverse(function(ne){if(!(ne.isMesh||ne.isPoints||ne.isLine||ne.isSprite))return;let Re=ne.material;if(Re)if(Array.isArray(Re))for(let Ue=0;Ue<Re.length;Ue++){let we=Re[Ue];Nd(we,se,j,ne),ee.add(we)}else Nd(Re,se,j,ne),ee.add(Re)}),S=_.pop(),L!==null&&L.renderEnd(),ee},this.compileAsync=function(D,j,se=null){let ee=this.compile(D,j,se);return new Promise(ne=>{function Re(){if(ee.forEach(function(Ue){let Ne=$e.get(Ue).currentProgram;(Ne===void 0||Ne.isReady())&&ee.delete(Ue)}),ee.size===0){ne(D);return}setTimeout(Re,10)}ut.get("KHR_parallel_shader_compile")!==null?Re():setTimeout(Re,10)})};let Kh=null;function Wg(D){Kh&&Kh(D)}function Dd(){$s.stop()}function Ud(){$s.start()}let $s=new B0;$s.setAnimationLoop(Wg),typeof self<"u"&&$s.setContext(self),this.setAnimationLoop=function(D){Kh=D,xe.setAnimationLoop(D),D===null?$s.stop():$s.start()},xe.addEventListener("sessionstart",Dd),xe.addEventListener("sessionend",Ud),this.render=function(D,j){if(j!==void 0&&j.isCamera!==!0){Ze("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;L!==null&&L.renderStart(D,j);let se=xe.enabled===!0&&xe.isPresenting===!0,ee=A!==null&&(B===null||se)&&A.begin(w,B);if(D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),xe.enabled===!0&&xe.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(xe.cameraAutoUpdate===!0&&xe.updateCamera(j),j=xe.getCamera()),D.isScene===!0&&D.onBeforeRender(w,D,j,B),S=oe.get(D,_.length),S.init(j),S.state.textureUnits=Je.getTextureUnits(),_.push(S),ye.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),j.isArrayCamera?he.setFromArrayCamera(j):ae.setFromProjectionMatrix(ye,hi,j.reversedDepth),pe=this.localClippingEnabled,de=le.init(this.clippingPlanes,pe),R=Ae.get(D,g.length),R.init(),g.push(R),this.info.render.frame++,xe.enabled===!0&&xe.isPresenting===!0){let Ue=w.xr.getDepthSensingMesh();Ue!==null&&Jh(Ue,j,-1/0,w.sortObjects)}Jh(D,j,0,w.sortObjects),R.finish(),L!==null&&L.updateLights(S.state.lightsArray),w.sortObjects===!0&&R.sort(ie,ue),at=xe.enabled===!1||xe.isPresenting===!1||xe.hasDepthSensing()===!1,at&&Z.addToRenderList(R,D),this.info.autoReset===!0&&this.info.reset(),de===!0&&le.beginShadows();let ne=S.state.shadowsArray;if(be.render(ne,D,j),de===!0&&le.endShadows(),(ee&&A.hasRenderPass())===!1){let Ue=R.opaque,we=R.transmissive;if(S.setupLights(),j.isArrayCamera){let Ne=j.cameras;if(we.length>0)for(let ze=0,it=Ne.length;ze<it;ze++){let pt=Ne[ze];kd(Ue,we,D,pt)}at&&Z.render(D);for(let ze=0,it=Ne.length;ze<it;ze++){let pt=Ne[ze];Fd(R,D,pt,pt.viewport)}}else we.length>0&&kd(Ue,we,D,j),at&&Z.render(D),Fd(R,D,j)}B!==null&&q===0&&(Je.updateMultisampleRenderTarget(B),Je.updateRenderTargetMipmap(B)),ee&&A.end(w),D.isScene===!0&&D.onAfterRender(w,D,j),Me.resetDefaultState(),U=-1,H=null,_.pop(),_.length>0?(S=_[_.length-1],Je.setTextureUnits(S.state.textureUnits),de===!0&&le.setGlobalState(w.clippingPlanes,S.state.camera)):S=null,g.pop(),g.length>0?R=g[g.length-1]:R=null,L!==null&&L.renderEnd()};function Jh(D,j,se,ee){if(D.visible===!1)return;if(D.layers.test(j.layers)){if(D.isGroup)se=D.renderOrder;else if(D.isLOD)D.autoUpdate===!0&&D.update(j);else if(D.isLight)S.pushLight(D),D.castShadow&&S.pushShadow(D);else if(D.isSprite){let Ue=j.isArrayCamera?he:ae;if(!D.frustumCulled||D.intersectsFrustum(Ue)){ee&&Le.setFromMatrixPosition(D.matrixWorld).applyMatrix4(ye);let we=me.update(D),Ne=D.material;Ne.visible&&R.push(D,we,Ne,se,Le.z,null,j)}}else if(D.isMesh||D.isLine||D.isPoints){let Ue=j.isArrayCamera?he:ae;if(!D.frustumCulled||D.intersectsFrustum(Ue)){let we=me.update(D),Ne=D.material;if(ee&&(D.boundingSphere!==void 0?(D.boundingSphere===null&&D.computeBoundingSphere(),Le.copy(D.boundingSphere.center)):(we.boundingSphere===null&&we.computeBoundingSphere(),Le.copy(we.boundingSphere.center)),Le.applyMatrix4(D.matrixWorld).applyMatrix4(ye)),Array.isArray(Ne)){let ze=we.groups;for(let it=0,pt=ze.length;it<pt;it++){let Fe=ze[it],mt=Ne[Fe.materialIndex];mt&&mt.visible&&R.push(D,we,mt,se,Le.z,Fe,j)}}else Ne.visible&&R.push(D,we,Ne,se,Le.z,null,j)}}}let Re=D.children;for(let Ue=0,we=Re.length;Ue<we;Ue++)Jh(Re[Ue],j,se,ee)}function Fd(D,j,se,ee){let{opaque:ne,transmissive:Re,transparent:Ue}=D;S.setupLightsView(se),de===!0&&le.setGlobalState(w.clippingPlanes,se),ee&&Ee.viewport(E.copy(ee)),ne.length>0&&nl(ne,j,se),Re.length>0&&nl(Re,j,se),Ue.length>0&&nl(Ue,j,se),Ee.buffers.depth.setTest(!0),Ee.buffers.depth.setMask(!0),Ee.buffers.color.setMask(!0),Ee.setPolygonOffset(!1)}function kd(D,j,se,ee){if((se.isScene===!0?se.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[ee.id]===void 0){let Fe=ut.has("EXT_color_buffer_half_float")||ut.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[ee.id]=new Jn(1,1,{generateMipmaps:!0,type:Fe?Li:Wn,minFilter:Pi,samples:Math.max(4,Pt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:gt.workingColorSpace})}let Re=S.state.transmissionRenderTarget[ee.id],Ue=ee.viewport||E;Re.setSize(Ue.z*w.transmissionResolutionScale,Ue.w*w.transmissionResolutionScale);let we=w.getRenderTarget(),Ne=w.getActiveCubeFace(),ze=w.getActiveMipmapLevel();w.setRenderTarget(Re),w.getClearColor(O),N=w.getClearAlpha(),N<1&&w.setClearColor(16777215,.5),w.clear(),at&&Z.render(se);let it=w.toneMapping;w.toneMapping=Wi;let pt=ee.viewport;if(ee.viewport!==void 0&&(ee.viewport=void 0),S.setupLightsView(ee),de===!0&&le.setGlobalState(w.clippingPlanes,ee),nl(D,se,ee),Je.updateMultisampleRenderTarget(Re),Je.updateRenderTargetMipmap(Re),ut.has("WEBGL_multisampled_render_to_texture")===!1){let Fe=!1;for(let mt=0,ln=j.length;mt<ln;mt++){let Dt=j[mt],{object:It,geometry:Rn,material:ke,group:Un}=Dt;if(ke.side===pi&&It.layers.test(ee.layers)){let bt=ke.side;ke.side=dn,ke.needsUpdate=!0,Od(It,se,ee,Rn,ke,Un),ke.side=bt,ke.needsUpdate=!0,Fe=!0}}Fe===!0&&(Je.updateMultisampleRenderTarget(Re),Je.updateRenderTargetMipmap(Re))}w.setRenderTarget(we,Ne,ze),w.setClearColor(O,N),pt!==void 0&&(ee.viewport=pt),w.toneMapping=it}function nl(D,j,se){let ee=j.isScene===!0?j.overrideMaterial:null;for(let ne=0,Re=D.length;ne<Re;ne++){let Ue=D[ne],{object:we,geometry:Ne,group:ze}=Ue,it=Ue.material;it.allowOverride===!0&&ee!==null&&(it=ee),we.layers.test(se.layers)&&Od(we,j,se,Ne,it,ze)}}function Od(D,j,se,ee,ne,Re){L!==null&&ne.isNodeMaterial&&L.setObject(D,ne),D.onBeforeRender(w,j,se,ee,ne,Re),D.modelViewMatrix.multiplyMatrices(se.matrixWorldInverse,D.matrixWorld),D.normalMatrix.getNormalMatrix(D.modelViewMatrix),ne.onBeforeRender(w,j,se,ee,D,Re),ne.transparent===!0&&ne.side===pi&&ne.forceSinglePass===!1?(ne.side=dn,ne.needsUpdate=!0,w.renderBufferDirect(se,j,ee,ne,D,Re),ne.side=Gi,ne.needsUpdate=!0,w.renderBufferDirect(se,j,ee,ne,D,Re),ne.side=pi):w.renderBufferDirect(se,j,ee,ne,D,Re),D.onAfterRender(w,j,se,ee,ne,Re)}function zd(D){let j=0;for(let se of D)se.texture!==null&&j++;return j}function Ro(D,j,se){j.isScene!==!0&&(j=et);let ee=$e.get(D),ne=S.state.lights,Re=S.state.shadowsArray,Ue=ne.state.version,we=fe.getParameters(D,ne.state,Re,j,se,S.state.lightProbeGridArray),Ne=fe.getProgramCacheKey(we),ze=ee.programs;ee.environment=D.isMeshStandardMaterial||D.isMeshLambertMaterial||D.isMeshPhongMaterial?j.environment:null,ee.fog=j.fog;let it=D.isMeshStandardMaterial||D.isMeshLambertMaterial&&!D.envMap||D.isMeshPhongMaterial&&!D.envMap;ee.envMap=W.get(D.envMap||ee.environment,it),ee.envMapRotation=ee.environment!==null&&D.envMap===null?j.environmentRotation:D.envMapRotation,ze===void 0&&(D.addEventListener("dispose",wt),ze=new Map,ee.programs=ze,ee.programVariants=new Map);let pt=ze.get(Ne);if(pt!==void 0){if(ee.currentProgram===pt&&ee.lightsStateVersion===Ue)return Hd(D,we),pt}else we.uniforms=fe.getUniforms(D),L!==null&&D.isNodeMaterial&&L.build(D,se,we),D.onBeforeCompile(we,w),pt=fe.acquireProgram(we,Ne),ze.set(Ne,pt),ee.uniforms=we.uniforms;let Fe=ee.uniforms;return(!D.isShaderMaterial&&!D.isRawShaderMaterial||D.clipping===!0)&&(Fe.clippingPlanes=le.uniform),Hd(D,we),ee.needsLights=Yg(D),ee.lightsStateVersion=Ue,ee.needsLights&&(Fe.ambientLightColor.value=ne.state.ambient,Fe.lightProbe.value=ne.state.probe,Fe.sunLights.value=ne.state.sun,Fe.sunLightShadows.value=ne.state.sunShadow,Fe.directionalLights.value=ne.state.directional,Fe.directionalLightShadows.value=ne.state.directionalShadow,Fe.spotLights.value=ne.state.spot,Fe.spotLightShadows.value=ne.state.spotShadow,Fe.rectAreaLights.value=ne.state.rectArea,Fe.ltc_1.value=ne.state.rectAreaLTC1,Fe.ltc_2.value=ne.state.rectAreaLTC2,Fe.pointLights.value=ne.state.point,Fe.pointLightShadows.value=ne.state.pointShadow,Fe.hemisphereLights.value=ne.state.hemi,Fe.sunShadowMatrix.value=ne.state.sunShadowMatrix,Fe.sunShadowCascade.value=ne.state.sunShadowCascade,Fe.directionalShadowMatrix.value=ne.state.directionalShadowMatrix,Fe.spotLightMatrix.value=ne.state.spotLightMatrix,Fe.spotLightMap.value=ne.state.spotLightMap,Fe.pointShadowMatrix.value=ne.state.pointShadowMatrix),ee.numLightProbeGrids=zd(S.state.lightProbeGridArray),ee.currentProgram=pt,ee.uniformsList=null,pt}function Xg(D,j,se,ee,ne){let Re=$e.get(D),Ue=Re.currentProgram.id+","+ee+","+ne,we=Re.programVariants.get(Ue);return we===void 0?(we=Ro(D,j,se),Re.programVariants.set(Ue,we)):(Re.currentProgram=we,Re.uniformsList=null,Re.outputColorSpace=ee,Re.toneMapping=ne),we}function Bd(D){if(D.uniformsList===null){let j=D.currentProgram.getUniforms();D.uniformsList=uo.seqWithValue(j.seq,D.uniforms)}return D.uniformsList}function Hd(D,j){let se=$e.get(D);se.outputColorSpace=j.outputColorSpace,se.batching=j.batching,se.batchingColor=j.batchingColor,se.instancing=j.instancing,se.instancingColor=j.instancingColor,se.instancingMorph=j.instancingMorph,se.skinning=j.skinning,se.morphTargets=j.morphTargets,se.morphNormals=j.morphNormals,se.morphColors=j.morphColors,se.morphTargetsCount=j.morphTargetsCount,se.numClippingPlanes=j.numClippingPlanes,se.numIntersection=j.numClipIntersection,se.vertexAlphas=j.vertexAlphas,se.vertexTangents=j.vertexTangents,se.toneMapping=j.toneMapping}function qg(D,j,se,ee,ne){j.isScene!==!0&&(j=et),Je.resetTextureUnits();let Re=j.fog,Ue=ee.isMeshStandardMaterial||ee.isMeshLambertMaterial||ee.isMeshPhongMaterial?j.environment:null,we=B===null?w.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:gt.workingColorSpace,Ne=ee.isMeshStandardMaterial||ee.isMeshLambertMaterial&&!ee.envMap||ee.isMeshPhongMaterial&&!ee.envMap,ze=W.get(ee.envMap||Ue,Ne),it=ee.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,pt=!!se.attributes.tangent&&(!!ee.normalMap||ee.anisotropy>0),Fe=!!se.morphAttributes.position,mt=!!se.morphAttributes.normal,ln=!!se.morphAttributes.color,Dt=Wi;ee.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(Dt=w.toneMapping);let It=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,Rn=It!==void 0?It.length:0,ke=$e.get(ee),Un=S.state.lights;if(de===!0&&(pe===!0||D!==H)){let Zt=D===H&&ee.id===U;le.setState(ee,D,Zt)}let bt=!1,Ys=!1;ee.version===ke.__version?ke.needsLights&&ke.lightsStateVersion!==Un.state.version||ne.isBatchedMesh&&ke.batching===!1||!ne.isBatchedMesh&&ke.batching===!0||ne.isBatchedMesh&&ke.batchingColor===!0&&ne._colorsTexture===null||ne.isBatchedMesh&&ke.batchingColor===!1&&ne._colorsTexture!==null||ne.isInstancedMesh&&ke.instancing===!1||!ne.isInstancedMesh&&ke.instancing===!0||ne.isSkinnedMesh&&ke.skinning===!1||!ne.isSkinnedMesh&&ke.skinning===!0||ne.isInstancedMesh&&ke.instancingColor===!0&&ne.instanceColor===null||ne.isInstancedMesh&&ke.instancingColor===!1&&ne.instanceColor!==null||ne.isInstancedMesh&&ke.instancingMorph===!0&&ne.morphTexture===null||ne.isInstancedMesh&&ke.instancingMorph===!1&&ne.morphTexture!==null||ke.envMap!==ze||ee.fog===!0&&ke.fog!==Re||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==le.numPlanes||ke.numIntersection!==le.numIntersection)||ke.vertexAlphas!==it||ke.vertexTangents!==pt||ke.morphTargets!==Fe||ke.morphNormals!==mt||ke.morphColors!==ln||ke.morphTargetsCount!==Rn||ke.numLightProbeGrids!==zd(S.state.lightProbeGridArray)?bt=!0:(ke.outputColorSpace!==we||ke.toneMapping!==Dt)&&(Ys=!0):(bt=!0,ke.__version=ee.version);let Cn=ke.currentProgram;(bt===!0||Ys===!0)&&(Cn=Ys===!0?Xg(ee,j,ne,we,Dt):Ro(ee,j,ne),L&&ee.isNodeMaterial&&L.onUpdateProgram(ee,Cn,ke));let il=!1,Ms=!1,Zs=!1,_t=Cn.getUniforms(),Tn=ke.uniforms;if(Ee.useProgram(Cn.program)&&(il=!0,Ms=!0,Zs=!0),ee.id!==U&&(U=ee.id,Ms=!0),il||H!==D){Ee.buffers.depth.getReversed()&&D.reversedDepth!==!0&&(D._reversedDepth=!0,D.updateProjectionMatrix()),_t.setValue(Q,"projectionMatrix",D.projectionMatrix),_t.setValue(Q,"viewMatrix",D.matrixWorldInverse);let yn=_t.map.cameraPosition;yn!==void 0&&yn.setValue(Q,Ge.setFromMatrixPosition(D.matrixWorld)),Pt.logarithmicDepthBuffer&&_t.setValue(Q,"logDepthBufFC",2/(Math.log(D.far+1)/Math.LN2)),(ee.isMeshPhongMaterial||ee.isMeshToonMaterial||ee.isMeshLambertMaterial||ee.isMeshBasicMaterial||ee.isMeshStandardMaterial||ee.isShaderMaterial)&&_t.setValue(Q,"isOrthographic",D.isOrthographicCamera===!0),H!==D&&(H=D,Ms=!0,Zs=!0)}if(ke.needsLights&&(Un.state.sunShadowMap.length>0&&_t.setValue(Q,"sunShadowMap",Un.state.sunShadowMap,Je),Un.state.directionalShadowMap.length>0&&_t.setValue(Q,"directionalShadowMap",Un.state.directionalShadowMap,Je),Un.state.spotShadowMap.length>0&&_t.setValue(Q,"spotShadowMap",Un.state.spotShadowMap,Je),Un.state.pointShadowMap.length>0&&_t.setValue(Q,"pointShadowMap",Un.state.pointShadowMap,Je)),ne.isSkinnedMesh){_t.setOptional(Q,ne,"bindMatrix"),_t.setOptional(Q,ne,"bindMatrixInverse");let Zt=ne.skeleton;Zt&&(Zt.boneTexture===null&&Zt.computeBoneTexture(),_t.setValue(Q,"boneTexture",Zt.boneTexture,Je))}ne.isBatchedMesh&&(_t.setOptional(Q,ne,"batchingTexture"),_t.setValue(Q,"batchingTexture",ne._matricesTexture,Je),_t.setOptional(Q,ne,"batchingIdTexture"),_t.setValue(Q,"batchingIdTexture",ne._indirectTexture,Je),_t.setOptional(Q,ne,"batchingColorTexture"),ne._colorsTexture!==null&&_t.setValue(Q,"batchingColorTexture",ne._colorsTexture,Je));let Ti=se.morphAttributes;if((Ti.position!==void 0||Ti.normal!==void 0||Ti.color!==void 0)&&ce.update(ne,se,Cn),(Ms||ke.receiveShadow!==ne.receiveShadow)&&(ke.receiveShadow=ne.receiveShadow,_t.setValue(Q,"receiveShadow",ne.receiveShadow)),(ee.isMeshStandardMaterial||ee.isMeshLambertMaterial||ee.isMeshPhongMaterial)&&ee.envMap===null&&j.environment!==null&&(Tn.envMapIntensity.value=j.environmentIntensity),Tn.dfgLUT!==void 0&&(Tn.dfgLUT.value=qM()),Ms){if(_t.setValue(Q,"toneMappingExposure",w.toneMappingExposure),ke.needsLights&&$g(Tn,Zs),Re&&ee.fog===!0&&_e.refreshFogUniforms(Tn,Re),_e.refreshMaterialUniforms(Tn,ee,J,K,S.state.transmissionRenderTarget[D.id]),ke.needsLights&&ke.numLightProbeGrids>0){let Zt=M,yn=0;for(let ji of S.state.lightProbeGridArray)ji.texture!==null&&(Zt.textures[yn]=ji.texture,Zt.min[yn]=ji.boundingBox.min,Zt.max[yn]=ji.boundingBox.max,Zt.resolution[yn]=ji.resolution,yn++);for(let ji in Zt)Zt[ji].length=yn;Tn.probesSH.value=Zt.textures,Tn.probesMin.value=Zt.min,Tn.probesMax.value=Zt.max,Tn.probesResolution.value=Zt.resolution}uo.upload(Q,Bd(ke),Tn,Je)}if(ee.isShaderMaterial&&ee.uniformsNeedUpdate===!0&&(uo.upload(Q,Bd(ke),Tn,Je),ee.uniformsNeedUpdate=!1),ee.isSpriteMaterial&&_t.setValue(Q,"center",ne.center),_t.setValue(Q,"modelViewMatrix",ne.modelViewMatrix),_t.setValue(Q,"normalMatrix",ne.normalMatrix),_t.setValue(Q,"modelMatrix",ne.matrixWorld),ee.uniformsGroups!==void 0){let Zt=ee.uniformsGroups;for(let yn=0,ji=Zt.length;yn<ji;yn++){let Gd=Zt[yn];Ve.update(Gd,Cn),Ve.bind(Gd,Cn)}}return Cn}function $g(D,j){D.ambientLightColor.needsUpdate=j,D.lightProbe.needsUpdate=j,D.sunLights.needsUpdate=j,D.sunLightShadows.needsUpdate=j,D.directionalLights.needsUpdate=j,D.directionalLightShadows.needsUpdate=j,D.pointLights.needsUpdate=j,D.pointLightShadows.needsUpdate=j,D.spotLights.needsUpdate=j,D.spotLightShadows.needsUpdate=j,D.rectAreaLights.needsUpdate=j,D.hemisphereLights.needsUpdate=j}function Yg(D){return D.isMeshLambertMaterial||D.isMeshToonMaterial||D.isMeshPhongMaterial||D.isMeshStandardMaterial||D.isShadowMaterial||D.isShaderMaterial&&D.lights===!0}this.getActiveCubeFace=function(){return X},this.getActiveMipmapLevel=function(){return q},this.getRenderTarget=function(){return B},this.setRenderTargetTextures=function(D,j,se){let ee=$e.get(D);ee.__autoAllocateDepthBuffer=D.resolveDepthBuffer===!1,ee.__autoAllocateDepthBuffer===!1&&(ee.__useRenderToTexture=!1),$e.get(D.texture).__webglTexture=j,$e.get(D.depthTexture).__webglTexture=ee.__autoAllocateDepthBuffer?void 0:se,ee.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(D,j){let se=$e.get(D);se.__webglFramebuffer=j,se.__useDefaultFramebuffer=j===void 0},this.setRenderTarget=function(D,j=0,se=0){B=D,X=j,q=se;let ee=null,ne=!1,Re=!1;if(D){let we=$e.get(D);if(we.__useDefaultFramebuffer!==void 0){Ee.bindFramebuffer(Q.FRAMEBUFFER,we.__webglFramebuffer),E.copy(D.viewport),F.copy(D.scissor),G=D.scissorTest,Ee.viewport(E),Ee.scissor(F),Ee.setScissorTest(G),U=-1;return}else if(we.__webglFramebuffer===void 0)Je.setupRenderTarget(D);else if(we.__hasExternalTextures)Je.rebindTextures(D,$e.get(D.texture).__webglTexture,$e.get(D.depthTexture).__webglTexture);else if(D.depthBuffer){let it=D.depthTexture;if(we.__boundDepthTexture!==it){if(it!==null&&$e.has(it)&&(D.width!==it.image.width||D.height!==it.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Je.setupDepthRenderbuffer(D)}}let Ne=D.texture;(Ne.isData3DTexture||Ne.isDataArrayTexture||Ne.isCompressedArrayTexture)&&(Re=!0);let ze=$e.get(D).__webglFramebuffer;D.isWebGLCubeRenderTarget?(Array.isArray(ze[j])?ee=ze[j][se]:ee=ze[j],ne=!0):D.samples>0&&Je.useMultisampledRTT(D)===!1?ee=$e.get(D).__webglMultisampledFramebuffer:Array.isArray(ze)?ee=ze[se]:ee=ze,E.copy(D.viewport),F.copy(D.scissor),G=D.scissorTest}else E.copy(Te).multiplyScalar(J).floor(),F.copy(De).multiplyScalar(J).floor(),G=We;if(se!==0&&(ee=T),Ee.bindFramebuffer(Q.FRAMEBUFFER,ee)&&Ee.drawBuffers(D,ee),Ee.viewport(E),Ee.scissor(F),Ee.setScissorTest(G),ne){let we=$e.get(D.texture);Q.framebufferTexture2D(Q.FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Q.TEXTURE_CUBE_MAP_POSITIVE_X+j,we.__webglTexture,se)}else if(Re){let we=j;for(let Ne=0;Ne<D.textures.length;Ne++){let ze=$e.get(D.textures[Ne]);Q.framebufferTextureLayer(Q.FRAMEBUFFER,Q.COLOR_ATTACHMENT0+Ne,ze.__webglTexture,se,we)}}else if(D!==null&&se!==0){let we=$e.get(D.texture);Q.framebufferTexture2D(Q.FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Q.TEXTURE_2D,we.__webglTexture,se)}U=-1};function Vd(D){let j=$e.get(D);return(j.__readFormat!==D.format||j.__readType!==D.type)&&(j.__readFormat=D.format,j.__readType=D.type,j.__formatReadable=Pt.textureFormatReadable(D.format),j.__typeReadable=Pt.textureTypeReadable(D.type)),j}this.readRenderTargetPixels=function(D,j,se,ee,ne,Re,Ue,we=0){if(!(D&&D.isWebGLRenderTarget)){Ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=$e.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&Ue!==void 0&&(Ne=Ne[Ue],Array.isArray(Ne)&&(Ne=Ne[0])),Ne){Ee.bindFramebuffer(Q.FRAMEBUFFER,Ne);try{let ze=D.textures[we],it=ze.format,pt=ze.type;D.textures.length>1&&Q.readBuffer(Q.COLOR_ATTACHMENT0+we);let Fe=Vd(ze);if(Fe.__formatReadable===!1){Ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Fe.__typeReadable===!1){Ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=D.width-ee&&se>=0&&se<=D.height-ne&&Q.readPixels(j,se,ee,ne,ve.convert(it),ve.convert(pt),Re)}finally{let ze=B!==null?$e.get(B).__webglFramebuffer:null;Ee.bindFramebuffer(Q.FRAMEBUFFER,ze)}}},this.readRenderTargetPixelsAsync=async function(D,j,se,ee,ne,Re,Ue,we=0){if(!(D&&D.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ne=$e.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&Ue!==void 0&&(Ne=Ne[Ue],Array.isArray(Ne)&&(Ne=Ne[0])),Ne)if(j>=0&&j<=D.width-ee&&se>=0&&se<=D.height-ne){Ee.bindFramebuffer(Q.FRAMEBUFFER,Ne);let ze=D.textures[we],it=ze.format,pt=ze.type;D.textures.length>1&&Q.readBuffer(Q.COLOR_ATTACHMENT0+we);let Fe=Vd(ze);if(Fe.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Fe.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let mt=Q.createBuffer();Q.bindBuffer(Q.PIXEL_PACK_BUFFER,mt),Q.bufferData(Q.PIXEL_PACK_BUFFER,Re.byteLength,Q.STREAM_READ),Q.readPixels(j,se,ee,ne,ve.convert(it),ve.convert(pt),0),Q.bindBuffer(Q.PIXEL_PACK_BUFFER,null);let ln=B!==null?$e.get(B).__webglFramebuffer:null;Ee.bindFramebuffer(Q.FRAMEBUFFER,ln);let Dt=Q.fenceSync(Q.SYNC_GPU_COMMANDS_COMPLETE,0);return Q.flush(),await r0(Q,Dt,4),Q.bindBuffer(Q.PIXEL_PACK_BUFFER,mt),Q.getBufferSubData(Q.PIXEL_PACK_BUFFER,0,Re),Q.bindBuffer(Q.PIXEL_PACK_BUFFER,null),Q.deleteBuffer(mt),Q.deleteSync(Dt),Re}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(D,j=null,se=0){let ee=Math.pow(2,-se),ne=Math.floor(D.image.width*ee),Re=Math.floor(D.image.height*ee),Ue=j!==null?j.x:0,we=j!==null?j.y:0;Je.setTexture2D(D,0),Q.copyTexSubImage2D(Q.TEXTURE_2D,se,0,0,Ue,we,ne,Re),Ee.unbindTexture()},this.copyTextureToTexture=function(D,j,se=null,ee=null,ne=0,Re=0){let Ue,we,Ne,ze,it,pt,Fe,mt,ln,Dt=D.isCompressedTexture?D.mipmaps[Re]:D.image;if(se!==null)Ue=se.max.x-se.min.x,we=se.max.y-se.min.y,Ne=se.isBox3?se.max.z-se.min.z:1,ze=se.min.x,it=se.min.y,pt=se.isBox3?se.min.z:0;else{let _t=Math.pow(2,-ne);Ue=Math.floor(Dt.width*_t),we=Math.floor(Dt.height*_t),D.isDataArrayTexture?Ne=Dt.depth:D.isData3DTexture?Ne=Math.floor(Dt.depth*_t):Ne=1,ze=0,it=0,pt=0}ee!==null?(Fe=ee.x,mt=ee.y,ln=ee.z):(Fe=0,mt=0,ln=0);let It=ve.convert(j.format),Rn=ve.convert(j.type),ke;j.isData3DTexture?(Je.setTexture3D(j,0),ke=Q.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(Je.setTexture2DArray(j,0),ke=Q.TEXTURE_2D_ARRAY):(Je.setTexture2D(j,0),ke=Q.TEXTURE_2D),Ee.activeTexture(Q.TEXTURE0),Ee.pixelStorei(Q.UNPACK_FLIP_Y_WEBGL,j.flipY),Ee.pixelStorei(Q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),Ee.pixelStorei(Q.UNPACK_ALIGNMENT,j.unpackAlignment);let Un=Ee.getParameter(Q.UNPACK_ROW_LENGTH),bt=Ee.getParameter(Q.UNPACK_IMAGE_HEIGHT),Ys=Ee.getParameter(Q.UNPACK_SKIP_PIXELS),Cn=Ee.getParameter(Q.UNPACK_SKIP_ROWS),il=Ee.getParameter(Q.UNPACK_SKIP_IMAGES);Ee.pixelStorei(Q.UNPACK_ROW_LENGTH,Dt.width),Ee.pixelStorei(Q.UNPACK_IMAGE_HEIGHT,Dt.height),Ee.pixelStorei(Q.UNPACK_SKIP_PIXELS,ze),Ee.pixelStorei(Q.UNPACK_SKIP_ROWS,it),Ee.pixelStorei(Q.UNPACK_SKIP_IMAGES,pt);let Ms=D.isDataArrayTexture||D.isData3DTexture,Zs=j.isDataArrayTexture||j.isData3DTexture;if(D.isDepthTexture){let _t=$e.get(D),Tn=$e.get(j),Ti=$e.get(_t.__renderTarget),Zt=$e.get(Tn.__renderTarget);Ee.bindFramebuffer(Q.READ_FRAMEBUFFER,Ti.__webglFramebuffer),Ee.bindFramebuffer(Q.DRAW_FRAMEBUFFER,Zt.__webglFramebuffer);for(let yn=0;yn<Ne;yn++)Ms&&(Q.framebufferTextureLayer(Q.READ_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,$e.get(D).__webglTexture,ne,pt+yn),Q.framebufferTextureLayer(Q.DRAW_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,$e.get(j).__webglTexture,Re,ln+yn)),Q.blitFramebuffer(ze,it,ze+Ue,it+we,Fe,mt,Fe+Ue,mt+we,Q.DEPTH_BUFFER_BIT,Q.NEAREST);Ee.bindFramebuffer(Q.READ_FRAMEBUFFER,null),Ee.bindFramebuffer(Q.DRAW_FRAMEBUFFER,null)}else if(ne!==0||D.isRenderTargetTexture||$e.has(D)){let _t=$e.get(D),Tn=$e.get(j);Ee.bindFramebuffer(Q.READ_FRAMEBUFFER,P),Ee.bindFramebuffer(Q.DRAW_FRAMEBUFFER,z);for(let Ti=0;Ti<Ne;Ti++)Ms?Q.framebufferTextureLayer(Q.READ_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,_t.__webglTexture,ne,pt+Ti):Q.framebufferTexture2D(Q.READ_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Q.TEXTURE_2D,_t.__webglTexture,ne),Zs?Q.framebufferTextureLayer(Q.DRAW_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Tn.__webglTexture,Re,ln+Ti):Q.framebufferTexture2D(Q.DRAW_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Q.TEXTURE_2D,Tn.__webglTexture,Re),ne!==0?Q.blitFramebuffer(ze,it,ze+Ue,it+we,Fe,mt,Fe+Ue,mt+we,Q.COLOR_BUFFER_BIT,Q.NEAREST):Zs?Q.copyTexSubImage3D(ke,Re,Fe,mt,ln+Ti,ze,it,Ue,we):Q.copyTexSubImage2D(ke,Re,Fe,mt,ze,it,Ue,we);Ee.bindFramebuffer(Q.READ_FRAMEBUFFER,null),Ee.bindFramebuffer(Q.DRAW_FRAMEBUFFER,null)}else Zs?D.isDataTexture||D.isData3DTexture?Q.texSubImage3D(ke,Re,Fe,mt,ln,Ue,we,Ne,It,Rn,Dt.data):j.isCompressedArrayTexture?Q.compressedTexSubImage3D(ke,Re,Fe,mt,ln,Ue,we,Ne,It,Dt.data):Q.texSubImage3D(ke,Re,Fe,mt,ln,Ue,we,Ne,It,Rn,Dt):D.isDataTexture?Q.texSubImage2D(Q.TEXTURE_2D,Re,Fe,mt,Ue,we,It,Rn,Dt.data):D.isCompressedTexture?Q.compressedTexSubImage2D(Q.TEXTURE_2D,Re,Fe,mt,Dt.width,Dt.height,It,Dt.data):Q.texSubImage2D(Q.TEXTURE_2D,Re,Fe,mt,Ue,we,It,Rn,Dt);Ee.pixelStorei(Q.UNPACK_ROW_LENGTH,Un),Ee.pixelStorei(Q.UNPACK_IMAGE_HEIGHT,bt),Ee.pixelStorei(Q.UNPACK_SKIP_PIXELS,Ys),Ee.pixelStorei(Q.UNPACK_SKIP_ROWS,Cn),Ee.pixelStorei(Q.UNPACK_SKIP_IMAGES,il),Re===0&&j.generateMipmaps===!0&&j.mipmapsAutoUpdate===!0&&Q.generateMipmap(ke),Ee.unbindTexture()},this.initRenderTarget=function(D){$e.get(D).__webglFramebuffer===void 0&&Je.setupRenderTarget(D)},this.initTexture=function(D){D.isCubeTexture?Je.setTextureCube(D,0):D.isData3DTexture?Je.setTexture3D(D,0):D.isDataArrayTexture||D.isCompressedArrayTexture?Je.setTexture2DArray(D,0):Je.setTexture2D(D,0),Ee.unbindTexture()},this.resetState=function(){X=0,q=0,B=null,Ee.reset(),Me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return hi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=gt._getDrawingBufferColorSpace(e),t.unpackColorSpace=gt._getUnpackColorSpace()}};var ch=class extends jn{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let e=new Ut;e.deleteAttribute("uv");let t=new Gn({side:dn}),i=new Gn,s=new Ds(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new Oe(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let o=new On(e,i,6),a=new zt;a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),a.updateMatrix(),o.setMatrixAt(0,a.matrix),a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),a.updateMatrix(),o.setMatrixAt(1,a.matrix),a.position.set(6.167,.857,7.803),a.rotation.set(0,.561,0),a.scale.set(3.927,6.285,3.687),a.updateMatrix(),o.setMatrixAt(2,a.matrix),a.position.set(-2.017,.018,6.124),a.rotation.set(0,.333,0),a.scale.set(2.002,4.566,2.064),a.updateMatrix(),o.setMatrixAt(3,a.matrix),a.position.set(2.291,-.756,-2.621),a.rotation.set(0,-.286,0),a.scale.set(1.546,1.552,1.496),a.updateMatrix(),o.setMatrixAt(4,a.matrix),a.position.set(-2.193,-.369,-5.547),a.rotation.set(0,.516,0),a.scale.set(3.875,3.487,2.986),a.updateMatrix(),o.setMatrixAt(5,a.matrix),this.add(o);let l=new Oe(e,mo(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new Oe(e,mo(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let h=new Oe(e,mo(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let u=new Oe(e,mo(43));u.position.set(-.462,8.89,14.52),u.scale.set(4.38,5.441,.088),this.add(u);let f=new Oe(e,mo(20));f.position.set(3.235,11.486,-12.541),f.scale.set(2.5,2,.1),this.add(f);let d=new Oe(e,mo(100));d.position.set(0,20,0),d.scale.set(1,.1,1),this.add(d)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function mo(n){return new Bn({color:0,emissive:16777215,emissiveIntensity:n})}function $M(n,e,t){let i=n.n,s=[];if(n.format==="spans"){let r=null;for(let o=0;o<n.layers;o++){let a=new Uint8Array(i*i),l=new Float32Array(i*i),c=new Float32Array(i*i);o===0&&(r=new Uint8Array(i*i));for(let h=0;h<i;h++)for(let u=0;u<i;u++){let f=h*i+u,d=((2*o*i+h)*t+u)*4,p=(((2*o+1)*i+h)*t+u)*4,v=e[d];v?(a[f]=v-1,l[f]=(e[d+1]<<8|e[d+2])/100-2,c[f]=o===0?-30:(e[p+1]<<8|e[p+2])/100-2):(l[f]=NaN,c[f]=NaN,a[f]=0),o===0&&(r[f]=e[p])}s.push({cls:a,top:l,bot:c})}return s.flags=r,s}for(let r=0;r<n.layers;r++){let o=new Uint8Array(i*i),a=new Float32Array(i*i);for(let l=0;l<i;l++)for(let c=0;c<i;c++){let h=((r*i+l)*t+c)*4,u=l*i+c;o[u]=e[h],a[u]=(e[h+1]<<8|e[h+2])/100-2}s.push({cls:o,h:a})}return s}async function Sf(n,e="maps/"){let t=await(await fetch(e+n+".json")).json(),i=new Image;i.src=e+n+".png",await i.decode();let s=document.createElement("canvas");s.width=i.width,s.height=i.height;let r=s.getContext("2d",{willReadFrequently:!0});r.drawImage(i,0,0);let o=r.getImageData(0,0,i.width,i.height).data,a={info:t,layers:$M(t,o,i.width)};return t.mesh&&(a.mesh=new Uint16Array(await(await fetch(e+t.mesh)).arrayBuffer())),a}var ks=n=>Math.round(n/.08)*.08;function Tf(n,e){let t=n.n,i=n.cell,s=e.length,r=t*t;if(n.format==="spans"){let u={n:t,cell:i,L:s,info:n,size:t*i,top:[],bot:[],cls:[],flags:e.flags||new Uint8Array(r),voidKill:!1,imported:!0};for(let f of e)u.top.push(f.top),u.bot.push(f.bot),u.cls.push(f.cls);return u.idx=(f,d)=>{let p=Math.floor(f/i),v=Math.floor(d/i);return p<0||v<0||p>=t||v>=t?-1:v*t+p},u.props=[],u.propCell=[],u}let o=s>1,a={n:t,cell:i,L:s,info:n,size:t*i,top:[],bot:[],cls:[],flags:new Uint8Array(r),voidKill:o},l=new Uint8Array(r);for(let u of e)for(let f=0;f<r;f++){let d=u.cls[f]&3;(d===1||d===2)&&(l[f]=1)}let c=new Uint8Array(r);{let f=new Uint8Array(r);for(let d=0;d<t;d++)for(let p=0;p<t;p++){let v=0;for(let x=-5;x<=5&&!v;x++){let m=p+x;m>=0&&m<t&&l[d*t+m]&&(v=1)}f[d*t+p]=v}for(let d=0;d<t;d++)for(let p=0;p<t;p++){let v=0;for(let x=-5;x<=5&&!v;x++){let m=d+x;m>=0&&m<t&&f[m*t+p]&&(v=1)}c[d*t+p]=v}}let h=!!n.clean;if(!h)for(let u of e)jM(t,u.cls,u.h,o);for(let[u,f,d,p,v,x]of YM[n.id]||[]){let m=e[0];for(let y=f;y<=p;y++)for(let b=u;b<=d;b++){let M=y*t+b,R=d-u>=p-f?b:y;R>=v&&R<=x||((m.cls[M]&3)===1||(m.cls[M]&3)===2)&&(m.cls[M]=m.cls[M]&-4|3)}}if(!h)for(let u of e)QM(t,u.cls,u.h);if(!h)for(let u of e)tb(t,u.cls,u.h);for(let u=0;u<s;u++){let{cls:f,h:d}=e[u],p=new Float32Array(r).fill(NaN),v=new Float32Array(r).fill(NaN),x=new Uint8Array(r),m=o?u===0?3.95:4.6:6.2,y=j0(t,f,d,7),b=eb(t,f,d);for(let M=0;M<r;M++){let R=f[M],S=R&3;a.flags[M]|=R&-4;let g=d[M],_=NaN,A=NaN;if(S===1)_=ks(g);else if(S===2)_=ks(b[M]+1.05);else if(S===3||S===0&&!o&&c[M]){let w=y[M]>-1e8?y[M]:g;_=ks(Math.ceil((w+m)/.6)*.6),o&&(_=ks(w+m))}else S===0&&o&&u===0&&c[M]&&nb(e,M);isNaN(_)||(A=u===0?-30:ks(g)-.36,x[M]=S===0?3:S),p[M]=_,v[M]=A}a.top.push(p),a.bot.push(v),a.cls.push(x)}if(o){let u=a.top[0],f=a.bot[1],d=a.cls[0];for(let p=0;p<r;p++)d[p]===3&&!isNaN(f[p])&&u[p]>f[p]&&(u[p]=f[p])}a.idx=(u,f)=>{let d=Math.floor(u/i),p=Math.floor(f/i);return d<0||p<0||d>=t||p>=t?-1:p*t+d};for(let u=0;u<a.L;u++)ZM(a,u);return o||JM(a,e[0]),a}var YM={dust2:[[220,182,254,184,230,242]]};function ZM(n,e){let t=n.n,i=n.cell,s=n.cls[e],r=n.top[e],o=n.bot[e];n.props=n.props||[],n.propCell=n.propCell||[];let a=new Int32Array(t*t);n.propCell[e]=a;let l=new Uint8Array(t*t),c=[],h=[];for(let u=0;u<t*t;u++){if(l[u]||s[u]!==2)continue;for(c.length=0,h.length=0,c.push(u),l[u]=1;c.length;){let U=c.pop();h.push(U);let H=U%t,E=(U-H)/t;for(let F of[H>0?U-1:-1,H<t-1?U+1:-1,E>0?U-t:-1,E<t-1?U+t:-1])F>=0&&!l[F]&&s[F]===2&&(l[F]=1,c.push(F))}if(h.length<6||h.length>420)continue;let f=0,d=0;for(let U of h)f+=U%t,d+=Math.floor(U/t);f/=h.length,d/=h.length;let p=0,v=0,x=0;for(let U of h){let H=U%t-f,E=Math.floor(U/t)-d;p+=H*H,v+=E*E,x+=H*E}let m=.5*Math.atan2(2*x,p-v);Math.abs(p-v)<1e-6&&Math.abs(x)<1e-6&&(m=0);let y=(m%(Math.PI/2)+Math.PI/2)%(Math.PI/2);(y<.14||y>Math.PI/2-.14)&&(m=Math.round(m/(Math.PI/2))*(Math.PI/2));let b=Math.cos(m),M=Math.sin(m),R=1e9,S=-1e9,g=1e9,_=-1e9;for(let U of h){let H=U%t-f,E=Math.floor(U/t)-d,F=H*b+E*M,G=-H*M+E*b;R=Math.min(R,F),S=Math.max(S,F),g=Math.min(g,G),_=Math.max(_,G)}let A=(S-R)/2+.5,w=(_-g)/2+.5,C=(R+S)/2,L=(g+_)/2,T=f+C*b-L*M,P=d+C*M+L*b,z=1e9,X=-1e9;for(let U of h)X=Math.max(X,r[U]);for(let U of h){let H=U%t;for(let E of[U-1,U+1,U-t,U+t])E>=0&&E<t*t&&s[E]===1&&Math.abs(E%t-H)<=1&&(z=Math.min(z,r[E]))}if(z>1e8)continue;let q=n.props.length+1,B=Math.ceil(Math.max(A,w))+1;for(let U=Math.floor(P)-B;U<=Math.ceil(P)+B;U++)for(let H=Math.floor(T)-B;H<=Math.ceil(T)+B;H++){if(H<0||U<0||H>=t||U>=t)continue;let E=U*t+H,F=H-T,G=U-P,O=F*b+G*M,N=-F*M+G*b,V=Math.abs(O)<=A-.35&&Math.abs(N)<=w-.35;V&&(s[E]===1||s[E]===2)?(s[E]=2,r[E]=X,a[E]=q):!V&&s[E]===2&&h.includes(E)&&(s[E]=1,r[E]=Math.round(z/.08)*.08)}n.props.push({l:e,x:(T+.5)*i,z:(P+.5)*i,hu:A*i,hv:w*i,ang:m,y0:z,y1:X,cells:h.length})}}var KM={dust2:[[142,188,224,220],[30,203,128,257],[46,158,64,205],[68,253,102,290],[126,212,162,252],[336,276,374,334]],mirage:[[110,76,306,114],[200,92,228,136],[320,360,432,412],[210,204,238,254]]};function JM(n,e){let t=n.n,i=t*t,s=n.cell,r=n.top[0],o=n.cls[0],a=new Float32Array(i).fill(NaN),l=new Float32Array(i).fill(NaN),c=new Uint8Array(i),h=j0(t,e.cls,e.h,7),u=M=>o[M]===1||o[M]===2,f=M=>!u(M),d=M=>ks(Math.ceil(((h[M]>-1e8?h[M]:r[M])+6.2)/.6)*.6);for(let[M,R,S,g]of KM[n.info.id]||[]){let _=-1e9;for(let A=R;A<=g;A++)for(let w=M;w<=S;w++){let C=A*t+w;o[C]===1&&r[C]>_&&(_=r[C])}for(let A=R;A<=g;A++)for(let w=M;w<=S;w++){let C=A*t+w;if(!u(C))continue;let L=ks(_+2.9);l[C]=L,a[C]=Math.max(L+.5,d(C)-.6),c[C]=4}}let p=Math.round(3.2/s),v=Math.round(2/s),x=new Uint16Array(i),m=new Uint16Array(i);for(let M=0;M<t;M++){let R=0;for(;R<t;){if(f(M*t+R)){R++;continue}let S=R;for(;S<t&&!f(M*t+S);)S++;for(let g=R;g<S;g++)x[M*t+g]=S-R;R=S}}for(let M=0;M<t;M++){let R=0;for(;R<t;){if(f(R*t+M)){R++;continue}let S=R;for(;S<t&&!f(S*t+M);)S++;for(let g=R;g<S;g++)m[g*t+M]=S-R;R=S}}let y=(M,R)=>{c[M]||(l[M]=ks(R+2.45),a[M]=d(M),c[M]=4)},b=M=>{let R=-1e9;for(let S of M)r[S]>R&&(R=r[S]);return R};for(let M=0;M<t;M++){let R=0;for(;R<t;){let S=R*t+M;if(f(S)||x[S]>p){R++;continue}let g=R;for(;g<t&&!f(g*t+M)&&x[g*t+M]<=p;)g++;if(g-R<=v&&R>0&&g<t&&!f((R-1)*t+M)&&!f(g*t+M)&&x[(R-1)*t+M]>p+2&&x[g*t+M]>p+2){let A=[];for(let C=R;C<g;C++)A.push(C*t+M);let w=b(A);for(let C of A)y(C,w)}R=g}}for(let M=0;M<t;M++){let R=0;for(;R<t;){let S=M*t+R;if(f(S)||m[S]>p){R++;continue}let g=R;for(;g<t&&!f(M*t+g)&&m[M*t+g]<=p;)g++;if(g-R<=v&&R>0&&g<t&&!f(M*t+R-1)&&!f(M*t+g)&&m[M*t+R-1]>p+2&&m[M*t+g]>p+2){let A=[];for(let C=R;C<g;C++)A.push(M*t+C);let w=b(A);for(let C of A)y(C,w)}R=g}}n.top.push(a),n.bot.push(l),n.cls.push(c),n.L=2,n.slabs=!0}function jM(n,e,t,i){let s=n*n,r=new Uint8Array(s),o=[],a=[],l=h=>(e[h]&3)===3;for(let h=0;h<s;h++){if(r[h]||!l(h))continue;o.length=0,a.length=0,o.push(h),r[h]=1;let u=!1;for(;o.length;){let f=o.pop();a.push(f);let d=f%n,p=(f-d)/n;for(let v of[d>0?f-1:-1,d<n-1?f+1:-1,p>0?f-n:-1,p<n-1?f+n:-1])v<0||((e[v]&3)===0&&(u=!0),!r[v]&&l(v)&&(r[v]=1,o.push(v)))}if(a.length<40&&!u)for(let f of a)c(f)}function c(h){let u=h%n,f=(h-u)/n,d=0,p=0;for(let v=-2;v<=2;v++)for(let x=-2;x<=2;x++){let m=u+x,y=f+v;if(m<0||y<0||m>=n||y>=n)continue;let b=y*n+m;(e[b]&3)===1&&(d+=t[b],p++)}e[h]=e[h]&-4|1,p&&(t[h]=d/p)}if(!i)for(let h=0;h<2;h++){let u=new Uint8Array(s);for(let f=0;f<s;f++){let d=e[f]&3;u[f]=d===3||d===0?1:0}for(let f=1;f<n-1;f++)for(let d=1;d<n-1;d++){let p=f*n+d,v=0;for(let x=-1;x<=1;x++)for(let m=-1;m<=1;m++)v+=u[p+x*n+m];u[p]&&v<=3&&(e[p]&3)===3?c(p):!u[p]&&v>=7&&(e[p]&3)===1&&(e[p]=e[p]&-4|3)}}}var J0=1.7;function QM(n,e,t){let i=n*n,s=new Uint8Array(i);for(let l=0;l<i;l++)s[l]=(e[l]&3)===1?1:0;{let l=new Uint8Array(i);for(let c=0;c<n;c++)for(let h=0;h<n;h++){let u=c*n+h;if(!s[u])continue;let f=0;for(let d=-4;d<=4&&!f;d++)for(let p=-4;p<=4;p++){let v=h+p,x=c+d;if(v<0||x<0||v>=n||x>=n)continue;let m=e[x*n+v]&3;if(m===3||m===0){f=1;break}}l[u]=f}for(let c=0;c<7;c++){for(let h=1;h<n-1;h++)for(let u=1;u<n-1;u++){let f=h*n+u;if(l[f]!==1&&l[f]!==2)continue;let d=0,p=0;for(let v=-1;v<=1;v++)for(let x=-1;x<=1;x++){let m=f+v*n+x;s[m]&&(l[m]===0||l[m]===3)&&(d+=t[m],p++)}p&&(t[f]=d/p,l[f]=2)}for(let h=0;h<i;h++)l[h]===2&&(l[h]=3)}}let r=new Uint8Array(i);for(let l=0;l<n;l++)for(let c=0;c<n;c++){let h=l*n+c;s[h]&&(c+1<n&&s[h+1]&&Math.abs(t[h]-t[h+1])<=J0&&(r[h]|=1),l+1<n&&s[h+n]&&Math.abs(t[h]-t[h+n])<=J0&&(r[h]|=2))}let o=Float32Array.from(t),a=new Float32Array(i);for(let l=0;l<48;l++){for(let h=0;h<n;h++)for(let u=0;u<n;u++){let f=h*n+u;if(!s[f]){a[f]=o[f];continue}let d=o[f]*2,p=2;r[f]&1&&(d+=o[f+1],p++),r[f]&2&&(d+=o[f+n],p++),u>0&&r[f-1]&1&&(d+=o[f-1],p++),h>0&&r[f-n]&2&&(d+=o[f-n],p++),a[f]=d/p}let c=o;o=a,a=c}for(let l=0;l<i;l++)s[l]&&(t[l]=o[l])}function j0(n,e,t,i){let s=n*n,r=new Float32Array(s).fill(-1e9),o=new Float32Array(s).fill(-1e9);for(let a=0;a<s;a++)(e[a]&3)===1&&(r[a]=t[a]);for(let a=0;a<n;a++)for(let l=0;l<n;l++){let c=-1e9;for(let h=Math.max(0,l-i);h<=Math.min(n-1,l+i);h++){let u=r[a*n+h];u>c&&(c=u)}o[a*n+l]=c}for(let a=0;a<n;a++)for(let l=0;l<n;l++){let c=-1e9;for(let h=Math.max(0,a-i);h<=Math.min(n-1,a+i);h++){let u=o[h*n+l];u>c&&(c=u)}r[a*n+l]=c}return r}function eb(n,e,t){let i=n*n,s=new Float32Array(i),r=new Uint8Array(i),o=[],a=[];for(let l=0;l<i;l++){if(r[l]||(e[l]&3)!==2)continue;o.length=0,a.length=0,o.push(l),r[l]=1;let c=-1e9;for(;o.length;){let h=o.pop();a.push(h),t[h]>c&&(c=t[h]);let u=h%n,f=(h-u)/n;for(let d of[u>0?h-1:-1,u<n-1?h+1:-1,f>0?h-n:-1,f<n-1?h+n:-1])d>=0&&!r[d]&&(e[d]&3)===2&&(r[d]=1,o.push(d))}if(a.length>900)for(let h of a)s[h]=t[h];else for(let h of a)s[h]=c}return s}function tb(n,e,t){let i=n*n,s=new Uint8Array(i);for(let u=0;u<i;u++)s[u]=(e[u]&3)===1?1:0;let r=new Uint8Array(i);for(let u=2;u<n-2;u++)for(let f=2;f<n-2;f++){let d=u*n+f;if(!s[d])continue;let p=0;for(let v of[2,-2,2*n,-2*n]){let x=d+v;s[x]&&(p=Math.max(p,Math.abs(t[x]-t[d])/2))}r[d]=p<.045?1:0}let o=new Int32Array(i).fill(-1),a=[],l=[],c=0;for(let u=0;u<i;u++)if(!(!r[u]||o[u]>=0)){for(a.length=0,l.length=0,a.push(u),o[u]=c;a.length;){let f=a.pop();l.push(f);let d=f%n;for(let p of[d>0?f-1:-1,d<n-1?f+1:-1,f-n,f+n])p>=0&&p<i&&r[p]&&o[p]<0&&Math.abs(t[p]-t[f])<.12&&(o[p]=c,a.push(p))}if(l.length>=25){let f=l.map(p=>t[p]).sort((p,v)=>p-v),d=f[f.length>>1];for(let p of l)t[p]=d}else for(let f of l)r[f]=0;c++}let h=Float32Array.from(t);for(let u=0;u<80;u++)for(let f=1;f<n-1;f++)for(let d=1;d<n-1;d++){let p=f*n+d;if(!s[p]||r[p])continue;let v=0,x=0;for(let m of[p-1,p+1,p-n,p+n])s[m]&&Math.abs(h[m]-h[p])<1.7&&(v+=h[m],x++);x&&(h[p]=v/x)}for(let u=0;u<i;u++)s[u]&&(t[u]=h[u])}function nb(n,e){for(let t of n){let i=t.cls[e]&3;if(i===1||i===2)return!0}return!1}function wf(n,e,t,i,s){let r=n.cell,o=n.n,a=Math.floor((e-i)/r),l=Math.floor((e+i)/r),c=Math.floor((t-i)/r),h=Math.floor((t+i)/r);for(let u=c;u<=h;u++)for(let f=a;f<=l;f++){if(f<0||u<0||f>=o||u>=o){if(s(-1))return!0;continue}if(s(u*o+f))return!0}return!1}function Xn(n,e,t,i,s,r=.4){return wf(n,e,t,r,o=>{if(o<0)return!0;for(let a=0;a<n.L;a++){let l=n.top[a][o];if(!isNaN(l)&&l>i+.62&&n.bot[a][o]<i+s)return!0}return!1})}function hh(n,e,t,i,s=.38){let r=-1/0;return wf(n,e,t,s,o=>{if(o<0)return!1;for(let a=0;a<n.L;a++){let l=n.top[a][o];isNaN(l)||l<=i+.62&&l>r&&n.bot[a][o]<i+.1+.62&&(r=l)}return!1}),r}function uh(n,e,t,i,s=.38){let r=1/0;return wf(n,e,t,s,o=>{if(o<0)return!1;for(let a=0;a<n.L;a++){let l=n.bot[a][o];isNaN(l)||l>i+.2&&l<r&&(r=l)}return!1}),r}function Os(n,e,t,i=1e9){let s=n.idx(e,t);if(s<0)return-1/0;let r=-1/0;for(let o=0;o<n.L;o++){let a=n.top[o][s];!isNaN(a)&&a<=i&&a>r&&(r=a)}return r}function Ni(n,e,t,i,s,r,o,a=200){let l=n.cell,c=n.n,h=Math.floor(e/l),u=Math.floor(i/l),f=s>0?1:-1,d=o>0?1:-1,p=s!==0?Math.abs(l/s):1/0,v=o!==0?Math.abs(l/o):1/0,x=s!==0?(s>0?(h+1)*l-e:e-h*l)/Math.abs(s):1/0,m=o!==0?(o>0?(u+1)*l-i:i-u*l)/Math.abs(o):1/0,y=0,b=-1;for(let M=0;M<4e3;M++){if(h<0||u<0||h>=c||u>=c)return null;let R=Math.min(x,m,a),S=u*c+h,g=t+r*y,_=t+r*R;for(let A=0;A<n.L;A++){let w=n.top[A][S];if(isNaN(w))continue;let C=n.bot[A][S];if(g>=C&&g<=w&&M>0)return{t:y,nx:b===0?-f:0,ny:0,nz:b===1?-d:0,cell:S,layer:A};if(g>=C&&g<=w&&M===0)return{t:0,nx:0,ny:1,nz:0,cell:S,layer:A};if(g>w&&_<=w&&r<0)return{t:(w-t)/r,nx:0,ny:1,nz:0,cell:S,layer:A};if(g<C&&_>=C&&r>0)return{t:(C-t)/r,nx:0,ny:-1,nz:0,cell:S,layer:A}}if(R>=a)return null;y=R,x<m?(h+=f,x+=p,b=0):(u+=d,m+=v,b=1)}return null}function Q0(n,e,t,i,s,r,o){let a=s-e,l=r-t,c=o-i,h=Math.hypot(a,l,c);if(h<.001)return!0;let u=Ni(n,e,t,i,a/h,l/h,c/h,h);return!u||u.t>=h-.05}function fh(n,e,t,i){let s=n.idx(e,i);if(s<0)return!1;for(let r=0;r<n.L;r++){let o=n.top[r][s];if(!isNaN(o)&&t<=o&&t>=n.bot[r][s])return!0}return!1}function gi(n,e,t){let i=n.idx(e,t);return i<0?0:n.flags[i]}function Ef(n,e){let t=[];for(let i=0;i<n.n*n.n;i++)n.flags[i]&e&&t.push(i);return t}var Ft=512;function dr(n){let e=n|0;return()=>{e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function hn(n){let t=new Float32Array(65536),i=dr(n);for(let o=0;o<256*256;o++)t[o]=i();let s=o=>o*o*(3-2*o),r=(o,a,l)=>{let c=Math.floor(o),h=Math.floor(a),u=s(o-c),f=s(a-h),d=(c%l+l)%l,p=(h%l+l)%l,v=(d+1)%l,x=(p+1)%l,m=t[p*256+d],y=t[p*256+v],b=t[x*256+d],M=t[x*256+v];return m+(y-m)*u+(b-m)*f+(m-y-b+M)*u*f};return(o,a,l=4,c=4,h=.5)=>{let u=0,f=1,d=0,p=l;for(let v=0;v<c;v++)u+=r(o*p,a*p,p)*f,d+=f,f*=h,p*=2;return u/d}}function ii(n,e=2.5){let t=new Uint8ClampedArray(Ft*Ft*4),i=new Float32Array(Ft*Ft);for(let o=0;o<Ft;o++)for(let a=0;a<Ft;a++){let l=n(a/Ft,o/Ft),c=o*Ft+a;t[c*4]=l[0]*255,t[c*4+1]=l[1]*255,t[c*4+2]=l[2]*255,t[c*4+3]=255,i[c]=l[3]}let s=new Uint8ClampedArray(Ft*Ft*4);for(let o=0;o<Ft;o++)for(let a=0;a<Ft;a++){let l=i[o*Ft+(a-1+Ft)%Ft],c=i[o*Ft+(a+1)%Ft],h=i[(o-1+Ft)%Ft*Ft+a],u=i[(o+1)%Ft*Ft+a],f=(l-c)*e,d=(u-h)*e,p=1,v=Math.hypot(f,d,p);f/=v,d/=v,p/=v;let x=(o*Ft+a)*4;s[x]=(f*.5+.5)*255,s[x+1]=(d*.5+.5)*255,s[x+2]=(p*.5+.5)*255,s[x+3]=255}let r=(o,a)=>{let l=new nr(o,Ft,Ft,ni);return l.wrapS=l.wrapT=As,l.magFilter=wn,l.minFilter=Pi,l.generateMipmaps=!0,l.anisotropy=8,a&&(l.colorSpace=rn),l.needsUpdate=!0,l};return{map:r(t,!0),normalMap:r(s,!1)}}var tt=n=>n<0?0:n>1?1:n,dh=(n,e,t)=>n+(e-n)*t,em={blocks(){let n=hn(11),e=hn(12),t=dr(5),i=6,s=[],r=[];for(let o=0;o<i;o++){let a=[0],l=0;for(;l<1;)l+=.22+t()*.2,a.push(Math.min(1,l));1-a[a.length-2]<.12&&a.splice(a.length-2,1),r.push(a),s.push(t())}return ii((o,a)=>{let l=Math.floor(a*i),c=a*i-l,h=r[l],u=(o+s[l])%1,f=0;for(;f<h.length-2&&u>h[f+1];)f++;let d=h[f],p=h[f+1],v=(u-d)/(p-d),x=Math.min(v*(p-d)*9,(1-v)*(p-d)*9),m=Math.min(c,1-c)*1.5,y=Math.min(x,m)+(n(o,a,32,3)-.5)*.06,b=.9+(l*7+f*13)%11/11*.12,M=n(o,a,16,5),R=e(o*.3,a*3,8,3),S=b*(.86+M*.16)+(R-.5)*.06,g=.6+M*.35;if(y<.035)S*=.62,g=.05;else if(y<.08){let A=(y-.035)/.045;S*=dh(.8,1,A),g=dh(.25,g,A)}return e(o,a,64,2)>.78&&(S*=.85,g-=.2),[tt(S*1),tt(S*.97),tt(S*.92),g]},3.2)},plaster(){let n=hn(21),e=hn(22),t=hn(23);return ii((i,s)=>{let r=n(i,s,3,4),o=e(i,s,48,3),a=.88+(r-.5)*.14+(o-.5)*.06,l=r*.4+o*.12;Math.abs(t(i,s,5,5)-.5)<.004&&n(i*2,s*2,3,2)>.55&&(a*=.82,l-=.1);let h=t(i+.37,s*.5,4,3);if(h>.6&&(a*=1-(h-.6)*.25),n(i+.5,s+.3,5,4)>.79){let f=(i*16+Math.floor(s*32)%2*.5)%1,d=s*32%1,p=f<.08||d<.16;return a=p?.7:.78+o*.1,l=p?-.2:.05,[tt(a*1.02),tt(a*.86),tt(a*.74),l]}return[tt(a),tt(a*.985),tt(a*.95),l]},2.2)},sand(){let n=hn(31),e=hn(32),t=dr(9),i=[];for(let s=0;s<70;s++)i.push([t(),t(),.002+t()*.006]);return ii((s,r)=>{let o=n(s,r,64,3),a=Math.sin((r+e(s,r,4,3)*.3)*Math.PI*28)*.5+.5,l=e(s,r,4,3),c=.86+(o-.5)*.14+(l-.5)*.1+a*.025,h=a*.25+o*.3;for(let[u,f,d]of i){let p=Math.abs(s-u),v=Math.abs(r-f);p=Math.min(p,1-p),v=Math.min(v,1-v);let x=Math.hypot(p,v);x<d?(c=.68+o*.15,h=.7+(1-x/d)*.5):x<d*1.6&&(c*=.9)}return[tt(c),tt(c*.95),tt(c*.86),h]},2)},tiles(){let n=hn(41),e=dr(4),t=[],i=5;for(let s=0;s<i;s++)for(let r=0;r<i;r++)t.push([(r+.2+e()*.6)/i,(s+.2+e()*.6)/i,.85+e()*.15]);return ii((s,r)=>{let o=9,a=9,l=1;for(let[d,p,v]of t)for(let x=-1;x<=1;x++)for(let m=-1;m<=1;m++){let y=Math.hypot(s-d-m,r-p-x);y<o?(a=o,o=y,l=v):y<a&&(a=y)}let c=a-o,h=n(s,r,32,4),u=l*(.84+h*.16),f=.6+h*.3;if(c<.01)u*=.7,f=0;else if(c<.026){let d=(c-.01)/.016;u*=dh(.88,1,d),f=dh(.2,f,d)}return[tt(u),tt(u*.97),tt(u*.92),f]},3)},slabs(){let n=hn(43),e=hn(44),t=dr(8),i=8,s=[],r=[];for(let o=0;o<i;o++){let a=[0],l=0;for(;l<1;)l+=.14+t()*.18,a.push(Math.min(1,l));1-a[a.length-2]<.08&&a.splice(a.length-2,1),s.push(a),r.push(a.map(()=>.86+t()*.14))}return ii((o,a)=>{let l=Math.floor(a*i),c=a*i-l,h=s[l],u=0;for(;u<h.length-2&&o>h[u+1];)u++;let f=h[u],d=h[u+1],p=(o-f)/(d-f),v=Math.min(p*(d-f)*i,(1-p)*(d-f)*i,c,1-c),x=n(o,a,32,4),m=e(o,a,3,3),y=r[l][u]*(.82+x*.18)*(.92+m*.12),b=.6+x*.25-(1-Math.min(1,v*12))*.2;return v<.03&&(y*=.72,b=.05),Math.abs(e(o*2,a*2,6,3)-.5)<.004&&(y*=.8),[tt(y),tt(y*.96),tt(y*.9),b]},2.6)},cobble(){let n=hn(45),e=dr(14),t=[],i=9;for(let s=0;s<i;s++)for(let r=0;r<i;r++)t.push([(r+.15+e()*.7)/i,(s+.15+e()*.7)/i,.8+e()*.2]);return ii((s,r)=>{let o=9,a=9,l=1;for(let[p,v,x]of t){let m=Math.abs(s-p),y=Math.abs(r-v);if(m=Math.min(m,1-m),y=Math.min(y,1-y),m>.25||y>.25)continue;let b=Math.hypot(m,y);b<o?(a=o,o=b,l=x):b<a&&(a=b)}let c=a-o,h=n(s,r,48,3),u=Math.min(1,c*18),f=l*(.76+h*.18)*(.75+u*.25),d=u*.9+h*.1;return c<.01&&(f=.62+h*.1,d=0),[tt(f),tt(f*.92),tt(f*.8),d]},3.2)},stone(){let n=hn(51),e=hn(52);return ii((t,i)=>{let s=n(t,i,8,5),r=e(t,i,3,3),o=.74+s*.24+(r-.5)*.1;return[tt(o),tt(o*.96),tt(o*.9),s*.8+r*.3]},3.5)},wood(){let n=hn(61),e=dr(6),t=[];for(let i=0;i<6;i++)t.push(.8+e()*.2);return ii((i,s)=>{let r=Math.floor(s*6),o=s*6-r,a=Math.sin((i*40+n(i,s,8,3)*6+r*3)*Math.PI)*.5+.5,l=n(i*.2,s,64,2),c=t[r]*(.82+a*.1+l*.08),h=.5+a*.15;return(o<.04||o>.96)&&(c*=.45,h=0),n(i+.3,s,6,2)>.8&&(c*=.8),[tt(c),tt(c*.86),tt(c*.7),h]},2.5)},crate(){let n=hn(71);return ii((e,t)=>{let i=Math.min(e,t,1-e,1-t),s=Math.abs(e-t),r=Math.abs(e+t-1),o=t*5%1,a=n(e,t*.2,32,3),l=.78+a*.14,c=.4+a*.1;return o<.04&&(l*=.55,c=.1),(i<.09||s<.06)&&(l=.86+a*.1,c=.9,i<.09&&i>.08&&(l*=.6)),r<.004&&(l*=.9),Math.abs(i-.045)<.012&&(e*8%1<.08||t*8%1<.08)&&(l=.35,c=1),[tt(l),tt(l*.84),tt(l*.66),c]},3)},concrete(){let n=hn(81),e=hn(82);return ii((t,i)=>{let s=n(t,i,32,4),r=e(t,i,4,3),o=.8+(s-.5)*.12+(r-.5)*.12,a=s*.3;(t%.5<.006||i%.5<.006)&&(o*=.75,a=0);for(let[l,c]of[[.125,.125],[.375,.125],[.125,.375],[.375,.375]])Math.hypot(t%.5-l,i%.5-c)<.012&&(o*=.55,a=-.3);return[tt(o),tt(o),tt(o*.97),a]},2.5)},roof(){let n=hn(91);return ii((e,t)=>{let i=e*8%1,s=t*8%1,r=Math.sin(i*Math.PI),o=.72+r*.26+(n(e,t,32,3)-.5)*.12,a=r*.7+(1-s)*.25;return s<.06&&(o*=.55,a=-.2),[tt(o),tt(o*.92),tt(o*.86),a]},3)},metal(){let n=hn(95);return ii((e,t)=>{let i=Math.sin(e*Math.PI*24)*.5+.5,s=n(e,t,16,4),r=n(e+.2,t,4,4)>.66,o=.7+i*.25+(s-.5)*.1;return r?[tt(o*.9),tt(o*.6),tt(o*.4),i*.5]:[tt(o),tt(o),tt(o),i*.5]},2)},fabric(){let n=hn(99);return ii((e,t)=>{let i=Math.sin(e*Math.PI*160)*Math.sin(t*Math.PI*160)*.5+.5,s=n(e,t,16,3),r=.85+i*.08+(s-.5)*.12;return[tt(r),tt(r),tt(r),i*.3]},1.5)}},Af={};function ib(n){if(Af[n])return Af[n];let e=em[n]||em.stone;return Af[n]=e()}function $i(n,e={}){let t=n?ib(n):null;return new Gn({vertexColors:!0,map:t?t.map:null,normalMap:t?t.normalMap:null,normalScale:new ge(e.bump??1,e.bump??1),roughness:e.rough??.92,metalness:e.metal??0,side:e.side??Gi})}var tm={dust2:{floor:[.8,.66,.46],floorHi:[.84,.71,.51],wall:[.93,.82,.63],wallTop:[.86,.74,.55],trim:[.72,.6,.43],crate:[1,.95,.88],stone:[.82,.72,.56],metal:[.27,.47,.72],slab:[.62,.47,.32],sky:["#5c9ce0","#f6e3c0"],fog:"#efdcb9",sun:"#fff0d2",ground:"#cfae7c",hemiSky:"#cfe3ff",wallTex:"blocks",floorTex:"sand"},mirage:{floor:[.74,.68,.58],floorHi:[.79,.73,.63],wall:[.94,.87,.74],wallTop:[.78,.43,.3],trim:[.68,.58,.46],crate:[1,.95,.9],stone:[.8,.74,.64],metal:[.24,.55,.58],slab:[.74,.42,.3],sky:["#5b9fe0","#f5dcb8"],fog:"#efdabb",sun:"#fff1da",ground:"#c9ae88",hemiSky:"#d4e6ff",wallTex:"plaster",floorTex:"tiles"},vertigo:{floor:[.66,.66,.64],floorHi:[.72,.72,.69],wall:[.8,.8,.77],wallTop:[.62,.62,.6],trim:[.55,.55,.53],crate:[.98,.95,.9],stone:[.92,.72,.22],metal:[.25,.45,.75],slab:[.6,.6,.58],sky:["#3f87d6","#d2e6f6"],fog:"#cadcea",sun:"#ffffff",ground:"#6d7f8f",hemiSky:"#d6e8ff",wallTex:"concrete",floorTex:"slabs"}},Cf=n=>tm[n]||tm.dust2;function ph(n,e){let t=n*374761393+e*668265263|0;return t=(t^t>>>13)*1274126177,((t^t>>>16)>>>0)/4294967296}var nm=(n,e,t)=>[n[0]+(e[0]-n[0])*t,n[1]+(e[1]-n[1])*t,n[2]+(e[2]-n[2])*t],nn=(n,e)=>[n[0]*e,n[1]*e,n[2]*e],im=n=>Math.max(0,Math.min(1,n));function sb(n){let e=n|0;return()=>{e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function Yi(n,e){let t=document.createElement("canvas");t.width=t.height=n;let i=t.getContext("2d");e(i,n);let s=new Qn(t);return s.wrapS=s.wrapT=As,s.colorSpace=rn,s.anisotropy=8,s}function zs(n,e,t,i,s=235,r=2400,o=3){n.fillStyle=`rgb(${s},${s},${s})`,n.fillRect(0,0,e,e);for(let a=0;a<r;a++){let l=s+(t()-.5)*i;n.fillStyle=`rgba(${l|0},${l|0},${l|0},0.5)`;let c=1+t()*o;n.fillRect(t()*e,t()*e,c,c)}}var Rf={};function rb(n){if(Rf[n])return Rf[n];let e=sb(n.length*977+n.charCodeAt(0)),t;return n==="blocks"?t=Yi(256,(i,s)=>{zs(i,s,e,40,232,3e3);let r=4;for(let o=0;o<r;o++){let a=o*s/r;i.fillStyle="rgba(120,100,80,.35)",i.fillRect(0,a,s,3);let l=o%2?s/4:0;for(let c=0;c<3;c++){let h=(l+c*s/2)%s;i.fillRect(h,a,3,s/r)}for(let c=0;c<6;c++)i.fillStyle=`rgba(255,250,240,${.08+e()*.08})`,i.fillRect(e()*s,a+4+e()*(s/r-8),20+e()*50,6+e()*10)}i.fillStyle="rgba(90,70,50,.04)";for(let o=0;o<14;o++)i.beginPath(),i.arc(e()*s,e()*s,4+e()*18,0,7),i.fill()}):n==="plaster"?t=Yi(256,(i,s)=>{zs(i,s,e,26,238,2600);for(let r=0;r<10;r++)i.fillStyle=`rgba(150,130,100,${.03+e()*.04})`,i.beginPath(),i.ellipse(e()*s,e()*s,10+e()*40,6+e()*26,e()*3,0,7),i.fill();i.strokeStyle="rgba(110,90,70,.35)",i.lineWidth=1;for(let r=0;r<5;r++){let o=e()*s,a=e()*s;i.beginPath(),i.moveTo(o,a);for(let l=0;l<6;l++)o+=(e()-.5)*24,a+=e()*14,i.lineTo(o,a);i.stroke()}}):n==="concrete"?t=Yi(256,(i,s)=>{zs(i,s,e,30,228,3500,2),i.fillStyle="rgba(80,80,80,.35)",i.fillRect(0,0,s,2),i.fillRect(0,0,2,s),i.fillRect(s/2,0,2,s),i.fillStyle="rgba(60,60,60,.45)";for(let[r,o]of[[.25,.25],[.75,.25],[.25,.75],[.75,.75]])i.beginPath(),i.arc(r*s,o*s,3,0,7),i.fill();for(let r=0;r<8;r++)i.fillStyle=`rgba(90,85,80,${.06+e()*.08})`,i.fillRect(e()*s,e()*s,2+e()*4,20+e()*60)}):n==="sand"?t=Yi(256,(i,s)=>{zs(i,s,e,46,230,5e3,2);for(let r=0;r<40;r++)i.fillStyle=`rgba(150,120,80,${.06+e()*.06})`,i.beginPath(),i.ellipse(e()*s,e()*s,8+e()*30,3+e()*8,e()*3,0,7),i.fill();for(let r=0;r<25;r++)i.fillStyle="rgba(120,100,80,.35)",i.fillRect(e()*s,e()*s,2+e()*3,2+e()*3)}):n==="tiles"?t=Yi(256,(i,s)=>{zs(i,s,e,30,232,3e3,2);let r=4;i.fillStyle="rgba(110,95,75,.4)";for(let o=0;o<=r;o++)i.fillRect(o*s/r-1,0,2,s),i.fillRect(0,o*s/r-1,s,2);for(let o=0;o<r;o++)for(let a=0;a<r;a++)i.fillStyle=`rgba(${e()<.5?"255,250,240":"120,100,80"},${.05+e()*.07})`,i.fillRect(o*s/r+2,a*s/r+2,s/r-4,s/r-4)}):n==="slabs"?t=Yi(256,(i,s)=>{zs(i,s,e,34,226,4e3,2),i.fillStyle="rgba(70,70,70,.35)",i.fillRect(0,0,s,2),i.fillRect(0,0,2,s),i.fillRect(0,s/2,s,2);for(let r=0;r<6;r++)i.fillStyle=`rgba(60,60,60,${.05+e()*.08})`,i.beginPath(),i.ellipse(e()*s,e()*s,10+e()*30,6+e()*14,e()*3,0,7),i.fill()}):n==="crate"?t=Yi(128,(i,s)=>{i.fillStyle="#a7773f",i.fillRect(0,0,s,s);for(let r=0;r<6;r++)i.fillStyle=r%2?"#9a6c38":"#b17f46",i.fillRect(0,r*s/6,s,s/6),i.fillStyle="rgba(60,35,15,.5)",i.fillRect(0,r*s/6,s,1);for(let r=0;r<120;r++)i.fillStyle=`rgba(70,40,15,${e()*.25})`,i.fillRect(e()*s,e()*s,6+e()*20,1);i.strokeStyle="#7a5228",i.lineWidth=12,i.strokeRect(6,6,s-12,s-12),i.lineWidth=11,i.beginPath(),i.moveTo(10,10),i.lineTo(s-10,s-10),i.stroke(),i.strokeStyle="rgba(40,20,5,.6)",i.lineWidth=1.5,i.strokeRect(12,12,s-24,s-24),i.strokeRect(.5,.5,s-1,s-1),i.fillStyle="#3b2a1a";for(let[r,o]of[[6,6],[s-6,6],[6,s-6],[s-6,s-6]])i.beginPath(),i.arc(r,o,2.5,0,7),i.fill()}):n==="metal"?t=Yi(128,(i,s)=>{zs(i,s,e,20,225,900,2);for(let r=0;r<16;r++)i.fillStyle=r%2?"rgba(0,0,0,.18)":"rgba(255,255,255,.12)",i.fillRect(r*s/16,0,s/16,s);for(let r=0;r<10;r++)i.fillStyle=`rgba(110,60,30,${.1+e()*.2})`,i.fillRect(e()*s,e()*s,4+e()*12,2+e()*16);i.fillStyle="rgba(0,0,0,.3)",i.fillRect(0,0,s,4),i.fillRect(0,s-4,s,4)}):n==="stone"?t=Yi(128,(i,s)=>{zs(i,s,e,40,228,1500,2),i.fillStyle="rgba(90,75,55,.4)",i.fillRect(0,0,s,3),i.fillRect(0,s/2,s,2),i.fillRect(s/2,0,2,s/2),i.fillRect(s/4,s/2,2,s/2)}):n==="wood"&&(t=Yi(128,(i,s)=>{i.fillStyle="#d9c3a3",i.fillRect(0,0,s,s);for(let r=0;r<4;r++)i.fillStyle=`rgba(90,60,30,${.15+e()*.1})`,i.fillRect(0,r*s/4,s,s/4-3),i.fillStyle="rgba(50,30,10,.5)",i.fillRect(0,r*s/4-2,s,3);for(let r=0;r<80;r++)i.fillStyle=`rgba(70,40,15,${e()*.2})`,i.fillRect(e()*s,e()*s,8+e()*30,1)})),Rf[n]=t,t}function pr(){return{pos:[],nor:[],col:[],uv:[]}}function ob(n,e,t,i,s,r){n.pos.push(e[0],e[1],e[2]),n.nor.push(t[0],t[1],t[2]),n.col.push(i[0],i[1],i[2]),n.uv.push(s,r)}function Na(n,e,t,i,s,r,o){let a=t[0]-e[0],l=t[1]-e[1],c=t[2]-e[2],h=i[0]-e[0],u=i[1]-e[1],f=i[2]-e[2],d=l*f-c*u,p=c*h-a*f,v=a*u-l*h,x=Math.hypot(d,p,v)||1,m=[d/x,p/x,v/x],y=[e,t,i];for(let b=0;b<3;b++){let M=r(y[b]);ob(n,y[b],m,o?o[b]:s,M[0],M[1])}}function xi(n,e,t,i,s,r){let[o,a,l]=e,c=a[0]-o[0],h=a[1]-o[1],u=a[2]-o[2],f=l[0]-o[0],d=l[1]-o[1],p=l[2]-o[2],v=h*p-u*d,x=u*f-c*p,m=c*d-h*f,y=e,b=r;v*t[0]+x*t[1]+m*t[2]<0&&(y=[e[0],e[3],e[2],e[1]],r&&(b=[r[0],r[3],r[2],r[1]])),Na(n,y[0],y[1],y[2],i,s,b&&[b[0],b[1],b[2]]),Na(n,y[0],y[2],y[3],i,s,b&&[b[0],b[2],b[3]])}var go=n=>e=>[e[0]/n,e[2]/n],mh=(n,e,t)=>i=>[(i[0]*e-i[2]*n)/t,i[1]/t];function om(n,e){let t=Cf(e),i=n.n,s=n.cell,r={wall:pr(),floor:pr(),crate:pr(),metal:pr(),stone:pr(),wood:pr(),plain:pr()},o=(h,u,f,d=.05)=>{let p=1+(ph(u,f)-.5)*2*d;return[h[0]*p,h[1]*p,h[2]*p]};for(let h=0;h<n.L;h++){let u=n.top[h],f=n.bot[h],d=n.cls[h],p=S=>S>=0&&S<i*i&&d[S]===3,v=new Uint8Array(i*i);{let S=new Uint8Array(i*i),g=[],_=[];for(let A=0;A<i*i;A++){if(S[A]||d[A]!==2)continue;g.length=0,_.length=0,g.push(A),S[A]=1;let w=1e9,C=-1,L=1e9,T=-1;for(;g.length;){let U=g.pop();_.push(U);let H=U%i,E=(U-H)/i;w=Math.min(w,H),C=Math.max(C,H),L=Math.min(L,E),T=Math.max(T,E);for(let F of[H>0?U-1:-1,H<i-1?U+1:-1,E>0?U-i:-1,E<i-1?U+i:-1])F>=0&&!S[F]&&d[F]===2&&(S[F]=1,g.push(F))}let P=(C-w+1)*s,z=(T-L+1)*s,X=Math.max(P,z),q=Math.min(P,z),B=1;_.length>260?B=3:X>3.2&&q>1.4&&X/q>1.7?B=e==="vertigo"?3:2:ph(w,L)<.18&&(B=3);for(let U of _)v[U]=B}}let x=(S,g,_)=>{let A=0,w=0;for(let C=-1;C<=0;C++)for(let L=-1;L<=0;L++){let T=g+L,P=_+C;if(T<0||P<0||T>=i||P>=i)continue;let z=P*i+T;d[z]!==1||isNaN(u[z])||Math.abs(u[z]-S)>.6||(A+=u[z],w++)}return w?A/w:S},m=new Uint8Array(i*i),y=go(2.2);for(let S=0;S<i;S++)for(let g=0;g<i;g++){let _=S*i+g;if(d[_]===3){let G=0,O=0;for(let N of[g>0?_-1:-1,g<i-1?_+1:-1,S>0?_-i:-1,S<i-1?_+i:-1])N>=0&&d[N]===1&&(G+=u[N],O++);if(O){let N=G/O-.01,V=g*s,K=(g+1)*s,J=S*s,ie=(S+1)*s,ue=nn(t.floor,.62);xi(r.floor,[[V,N,J],[V,N,ie],[K,N,ie],[K,N,J]],[0,1,0],ue,y)}continue}if(n.propCell&&n.propCell[h]&&n.propCell[h][_]){let O=n.props[n.propCell[h][_]-1].y0,N=g*s,V=(g+1)*s,K=S*s,J=(S+1)*s;xi(r.floor,[[N,O,K],[N,O,J],[V,O,J],[V,O,K]],[0,1,0],nn(t.floor,.7),y);continue}if(d[_]!==1||isNaN(u[_]))continue;let A=u[_],w=x(A,g,S),C=x(A,g+1,S),L=x(A,g,S+1),T=x(A,g+1,S+1),P=p(_-1)||p(_+1)||p(_-i)||p(_+i)||p(_-i-1)||p(_-i+1)||p(_+i-1)||p(_+i+1);if(Math.abs(w-A)<.004&&Math.abs(C-A)<.004&&Math.abs(L-A)<.004&&Math.abs(T-A)<.004&&!P)continue;m[_]=1;let X=g*s,q=(g+1)*s,B=S*s,U=(S+1)*s,H=o(nm(t.floor,t.floorHi,im(A/6)),g>>3,S>>3,.04),E=(G,O)=>{let N=0;for(let V=-1;V<=0;V++)for(let K=-1;K<=0;K++){let J=G+K,ie=O+V;J>=0&&ie>=0&&J<i&&ie<i&&d[ie*i+J]===3&&N++}return nn(H,1-N*.13)},F=[E(g,S),E(g,S+1),E(g+1,S+1),E(g+1,S)];Na(r.floor,[X,w,B],[X,L,U],[q,T,U],H,y,[F[0],F[1],F[2]]),Na(r.floor,[X,w,B],[q,T,U],[q,C,B],H,y,[F[0],F[2],F[3]])}let b=n.propCell?n.propCell[h]:null,M=S=>isNaN(u[S])||m[S]||d[S]===3||b&&b[S]?null:(d[S]*1e5+v[S]*1e4+Math.round(u[S]*100))*1e4+(h>0?Math.round(f[S]*100)+5e3:0);for(let S=0;S<i;S++)for(let g=0;g<i;g++){let _=S*i+g;if(m[_])continue;let A=M(_);if(A===null)continue;let w=1;for(;g+w<i&&!m[_+w]&&M(_+w)===A;)w++;let C=1;e:for(;S+C<i;){for(let U=0;U<w;U++){let H=(S+C)*i+g+U;if(m[H]||M(H)!==A)break e}C++}for(let U=0;U<C;U++)for(let H=0;H<w;H++)m[(S+U)*i+g+H]=1;let L=u[_],T=g*s,P=(g+w)*s,z=S*s,X=(S+C)*s,q=d[_],B=[[T,L,z],[T,L,X],[P,L,X],[P,L,z]];if(q===1)xi(r.floor,B,[0,1,0],o(nm(t.floor,t.floorHi,im(L/6)),g>>3,S>>3,.04),y);else if(q===2){let U=v[_];xi(U===1?r.crate:U===2?r.metal:r.stone,B,[0,1,0],U===1?t.crate:U===2?nn(t.metal,1.1):t.stone,go(U===1?1.1:2))}else q===4&&xi(r.wood,B,[0,1,0],nn(t.wallTop,.95),go(2));if(h>0){let U=f[_];xi(q===4?r.wood:r.floor,[[T,U,z],[T,U,X],[P,U,X],[P,U,z]],[0,-1,0],q===4?t.slab:nn(t.floor,.6),go(2))}}let R=[[1,0],[-1,0],[0,1],[0,-1]];for(let S=0;S<4;S++){let[g,_]=R[S],A=g!==0?"z":"x";for(let w=0;w<i;w++){let C=null,L=()=>{if(!C)return;let{s:T,e:P,y0:z,y1:X,cl:q,line:B,kd:U}=C,H;if(A==="z"){let V=(g>0?B+1:B)*s;H=[[V,z,T*s],[V,z,(P+1)*s],[V,X,(P+1)*s],[V,X,T*s]]}else{let V=(_>0?B+1:B)*s;H=[[T*s,z,V],[(P+1)*s,z,V],[(P+1)*s,X,V],[T*s,X,V]]}let E=S<2?.93:.84,F,G,O;if(q===2){F=U===1?r.crate:U===2?r.metal:r.stone,G=nn(U===1?t.crate:U===2?t.metal:t.stone,E);let V=U===1?1.1:2;O=K=>[(K[0]*_-K[2]*g)/V,(K[1]-z)/V]}else q===4?(F=r.wood,G=nn(t.slab,E),O=mh(g,_,2)):(F=r.wall,G=nn(t.trim,E),O=mh(g,_,2.2));let N=nn(G,.8);xi(F,H,[g,0,_],G,O,[N,N,G,G]),C=null};for(let T=0;T<i;T++){let P=A==="z"?w:T,z=A==="z"?T:w,X=z*i+P,q=null;if(!isNaN(u[X])&&d[X]!==3&&!(b&&b[X])){let B=P+g,U=z+_,H=B<0||U<0||B>=i||U>=i?-1:U*i+B,E=u[X],F=f[X];if(H>=0&&!isNaN(u[H]))d[X]===1&&d[H]===1&&Math.abs(u[X]-u[H])<=.6||u[H]>=E&&f[H]<=F?E=F:f[H]<=F+.01&&(F=Math.max(F,u[H]));else if(h===0){let G=1e9;for(let O=0;O<n.L;O++)H>=0&&!isNaN(n.top[O][H])&&n.cls[O][H]!==4&&(G=Math.min(G,n.top[O][H]));F=G<1e9?Math.max(F,G):n.voidKill?-25:Math.max(F,E-8)}E-F>.01&&(q={y0:Math.round(F*100)/100,y1:Math.round(E*100)/100,cl:d[X],kd:v[X]})}q&&C&&C.y0===q.y0&&C.y1===q.y1&&C.cl===q.cl&&C.kd===q.kd&&C.e===T-1?C.e=T:(L(),q&&(C={s:T,e:T,...q,line:w}))}L()}}lb(n,h,r,t)}cb(n,e,r,t);for(let h of n.props||[]){let u=Math.max(h.hu,h.hv)*2,f=Math.min(h.hu,h.hv)*2,d=1;h.cells>260?d=3:u>3.2&&f>1.3&&u/f>1.7?d=e==="vertigo"?3:2:ph(Math.round(h.x*7),Math.round(h.z*7))<.16&&(d=3);let p=d===1?r.crate:d===2?r.metal:r.stone,v=d===1?t.crate:d===2?t.metal:t.stone,x=d===1?1.1:2,m=Math.cos(h.ang),y=Math.sin(h.ang),b=(_,A,w)=>[h.x+_*m-A*y,w,h.z+_*y+A*m],M=h.y0-.05,R=h.y1,S=[[-h.hu,-h.hv],[h.hu,-h.hv],[h.hu,h.hv],[-h.hu,h.hv]];for(let _=0;_<4;_++){let A=S[_],w=S[(_+1)%4],C=Math.hypot(w[0]-A[0],w[1]-A[1]),L=(A[0]+w[0])/2,T=(A[1]+w[1])/2,P=Math.hypot(L,T),z=[(L*m-T*y)/P,0,(L*y+T*m)/P],X=.82+.14*Math.abs(z[0]),q=nn(v,X),B=nn(q,.8),U=b(A[0],A[1],M),H=b(w[0],w[1],M),E=b(w[0],w[1],R),F=b(A[0],A[1],R),G=Math.max(1,Math.round(C/x)),O=Math.max(1,Math.round((R-M)/x));xi(p,[U,H,E,F],z,q,V=>[Math.hypot(V[0]-U[0],V[2]-U[2])/C*G,(V[1]-M)/(R-M)*O],[B,B,q,q])}let g=S.map(([_,A])=>b(_,A,R));xi(p,g,[0,1,0],nn(v,1.04),_=>{let A=_[0]-h.x,w=_[2]-h.z;return[(A*m+w*y+h.hu)/x,(-A*y+w*m+h.hv)/x]})}let a=new Rt,l=0,c=(h,u)=>{if(!h.pos.length)return;let f=new Bt;f.setAttribute("position",new rt(h.pos,3)),f.setAttribute("normal",new rt(h.nor,3)),f.setAttribute("color",new rt(h.col,3)),f.setAttribute("uv",new rt(h.uv,2)),f.computeBoundingSphere();let d=new Oe(f,new Bn({vertexColors:!0,map:u&&typeof document<"u"?rb(u):null}));d.matrixAutoUpdate=!1,d.castShadow=!0,d.receiveShadow=!0,a.add(d),l+=h.pos.length/9};return c(r.wall,t.wallTex),c(r.floor,t.floorTex),c(r.crate,"crate"),c(r.metal,"metal"),c(r.stone,"stone"),c(r.wood,"wood"),c(r.plain,null),a.matrixAutoUpdate=!1,{mesh:a,tris:l,theme:t}}var ab=(()=>{let n=[];return n[0]=[],n[1]=[0,4,7],n[2]=[1,5,4],n[3]=[0,1,5,7],n[4]=[2,6,5],n[5]=[0,4,5,2,6,7],n[6]=[1,2,6,4],n[7]=[0,1,2,6,7],n[8]=[3,7,6],n[9]=[0,4,6,3],n[10]=[1,5,6,3,7,4],n[11]=[0,1,5,6,3],n[12]=[2,3,7,5],n[13]=[0,4,5,2,3],n[14]=[1,2,3,7,4],n[15]=[0,1,2,3],n})();function lb(n,e,t,i){let s=n.n,r=n.cell,o=n.top[e],a=n.bot[e],l=n.cls[e],c=d=>l[d]===3,h=t.wall,u=go(2.2),f=[0,0,0,0];for(let d=0;d<s-1;d++)for(let p=0;p<s-1;p++){f[0]=d*s+p,f[1]=d*s+p+1,f[2]=(d+1)*s+p+1,f[3]=(d+1)*s+p;let v=0;for(let g=0;g<4;g++)c(f[g])&&(v|=1<<g);if(!v)continue;let x=ab[v],m=(p+.5)*r,y=(d+.5)*r,b=[[m,y],[m+r,y],[m+r,y+r],[m,y+r]],M=x.map(g=>{if(g<4)return[b[g][0],b[g][1],o[f[g]],NaN,g];let _=g-4,A=(_+1)%4,w=c(f[_])?_:A,C=w===_?A:_,L=f[w],T=f[C],P;return!isNaN(o[T])&&l[T]===1?P=o[T]-.12:!isNaN(o[T])&&l[T]===2?P=o[T]-1.2:e===0?P=n.voidKill?-25:o[L]-8:P=a[L],[(b[_][0]+b[A][0])/2,(b[_][1]+b[A][1])/2,o[L],P,-1]});for(let g=1;g<M.length-1;g++)Na(h,[M[0][0],M[0][2],M[0][1]],[M[g+1][0],M[g+1][2],M[g+1][1]],[M[g][0],M[g][2],M[g][1]],i.wallTop,u);let R=0,S=0;for(let g of M)R+=g[0],S+=g[1];R/=M.length,S/=M.length;for(let g=0;g<M.length;g++){let _=M[g],A=M[(g+1)%M.length];if(_[4]>=0||A[4]>=0)continue;let w=A[1]-_[1],C=-(A[0]-_[0]),L=Math.hypot(w,C);w/=L,C/=L;let T=(_[0]+A[0])/2-R,P=(_[1]+A[1])/2-S;w*T+C*P<0&&(w=-w,C=-C);let z=.86+.1*Math.abs(w)-.04*Math.abs(C),X=nn(i.wall,z),q=nn(i.trim,z*.95),B=nn(X,.95),U=Math.min(_[2],_[3]+.45),H=Math.min(A[2],A[3]+.45),E=[_[0],_[3],_[1]],F=[A[0],A[3],A[1]],G=[_[0],U,_[1]],O=[A[0],H,A[1]],N=[_[0],_[2],_[1]],V=[A[0],A[2],A[1]],K=mh(w,C,2.2);xi(h,[E,F,O,G],[w,0,C],q,K,[nn(q,.75),nn(q,.75),q,q]),(_[2]>U+.01||A[2]>H+.01)&&xi(h,[G,O,V,N],[w,0,C],X,K,[B,B,X,X])}}}function am(n,e,t,i=1){let s=Cf(t),r=e.size;n.background=new Xe(s.sky[1]),n.fog=new Ko(s.fog,70,t==="vertigo"?460:330);let o=new Y(.45,.62,.3).normalize(),a=new Oe(new fi(900,24,12),new di({side:dn,depthWrite:!1,fog:!1,uniforms:{a:{value:new Xe(s.sky[0])},b:{value:new Xe(s.sky[1])},sd:{value:o}},vertexShader:"varying vec3 vp; void main(){ vp = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.); }",fragmentShader:`uniform vec3 a; uniform vec3 b; uniform vec3 sd; varying vec3 vp; void main(){ vec3 col = mix(b, a, smoothstep(-0.05, 0.55, vp.y)); float s = max(dot(vp, sd), 0.); col += vec3(1.,.93,.75) * (pow(s, 700.) * 2.5 + pow(s, 14.) * .2); gl_FragColor = vec4(col, 1.);
#include <colorspace_fragment>
}`}));a.position.set(r/2,0,r/2),a.frustumCulled=!1,n.add(a),n.add(new Hi(s.hemiSky,s.ground,1));let l=new Vi(s.sun,2.2);if(l.position.set(r/2+o.x*r,o.y*r,r/2+o.z*r),l.target.position.set(r/2,0,r/2),i>0){l.castShadow=!0;let h=l.shadow.camera,u=r*.62;h.left=-u,h.right=u,h.top=u,h.bottom=-u,h.near=1,h.far=r*2.4;let f=i>1?4096:2048;l.shadow.mapSize.set(f,f),l.shadow.bias=-8e-4,l.shadow.normalBias=.06}n.add(l,l.target),n.add(new ya("#ffffff",.1));let c=lm(7);if(t==="vertigo"){let h=new Ut(1,1,1),u=new Bn({color:"#ffffff"}),f=new On(h,u,140),d=new zt;for(let v=0;v<140;v++){let x=c()*Math.PI*2,m=120+c()*320,y=40+c()*140;d.position.set(r/2+Math.cos(x)*m,-160+y/2,r/2+Math.sin(x)*m),d.scale.set(14+c()*26,y,14+c()*26),d.updateMatrix(),f.setMatrixAt(v,d.matrix),f.setColorAt(v,new Xe().setHSL(.58,.14,.45+c()*.25))}n.add(f);let p=new Oe(new Vn(3e3,3e3),new Bn({color:s.ground}));p.rotation.x=-Math.PI/2,p.position.set(r/2,-160,r/2),n.add(p)}else{let h=new Oe(new Vn(3e3,3e3),new Bn({color:s.ground}));h.rotation.x=-Math.PI/2,h.position.set(r/2,-.6,r/2),n.add(h);let u=new cs(1,1,6,1),f=new Bn({color:s.ground,flatShading:!0}),d=new On(u,f,40),p=new zt;for(let v=0;v<40;v++){let x=v/40*Math.PI*2,m=260+c()*160,y=25+c()*50;p.position.set(r/2+Math.cos(x)*m,y/2-1,r/2+Math.sin(x)*m),p.scale.set(60+c()*60,y,60+c()*60),p.rotation.y=c()*3,p.updateMatrix(),d.setMatrixAt(v,p.matrix)}n.add(d)}return l}function lm(n){return()=>{n|=0,n=n+1831565813|0;let e=Math.imul(n^n>>>15,1|n);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function si(n,e,t,i,s,r,o,a,l=1){let c=e-s/2,h=e+s/2,u=t-r/2,f=t+r/2,d=i-o/2,p=i+o/2,v=[[[h,u,d],[h,u,p],[h,f,p],[h,f,d],[1,0,0],.9],[[c,u,d],[c,u,p],[c,f,p],[c,f,d],[-1,0,0],.9],[[c,u,p],[h,u,p],[h,f,p],[c,f,p],[0,0,1],.82],[[c,u,d],[h,u,d],[h,f,d],[c,f,d],[0,0,-1],.82],[[c,f,d],[c,f,p],[h,f,p],[h,f,d],[0,1,0],1]];for(let[x,m,y,b,M,R]of v)xi(n,[x,m,y,b],M,nn(a,R),M[1]?go(l):mh(M[0],M[2],l))}function cb(n,e,t,i){let s=n.n,r=n.cell,o=n.top[0],a=n.cls[0],l=m=>a[m]===3,c=m=>a[m]===1,h=lm(e.length*131),u=e==="vertigo"?[.32,.45,.55]:[.16,.13,.11],f=e==="mirage"?[.85,.78,.66]:e==="vertigo"?[.45,.47,.5]:[.62,.48,.32],d=e==="mirage"?[.2,.52,.55]:[.35,.5,.68],p=e==="dust2"?[[.22,.42,.62],[.45,.3,.18]]:e==="mirage"?[[.2,.48,.5],[.5,.33,.2]]:[[.55,.56,.58],[.7,.55,.15]],v=[[1,0],[-1,0],[0,1],[0,-1]];for(let[m,y]of v){let b=m===0;for(let M=1;M<s-1;M++){let R=-1,S=0,g=0,_=A=>{if(R<0)return;let w=(A-R)*r,C=g-S;if(w>3&&C>3.2){let L=Math.floor(w/4.2);for(let T=0;T<L;T++){let P=(R+(T+.5)*(A-R)/L)*r,z=h(),X=(m>0||y>0?M+1:M)*r,q=.03,B=b?P:X-m*q,U=b?X-y*q:P,H=b?1:.1,E=b?.1:1;if(z<.16&&C>3){let F=p[Math.floor(h()*2)];si(t.plain,B,S+1.15,U,H*1.4+(b?0:.06),2.3,E*1.4+(b?.06:0),f),si(t.plain,B-m*.02,S+1.1,U-y*.02,H*1.2+(b?0:.06),2.2,E*1.2+(b?.06:0),F)}else if(C>4.2){let F=S+3.4;if(si(t.plain,B,F,U,H*1.1+(b?0:.08),1.35,E*1.1+(b?.08:0),f),si(t.plain,B-m*.02,F,U-y*.02,H*.85+(b?0:.08),1.1,E*.85+(b?.08:0),u),si(t.plain,B-m*.08,F-.7,U-y*.08,H*1.25+(b?0:.18),.08,E*1.25+(b?.18:0),f),z>.72)for(let G of[-1,1]){let O=b?G*.75:0,N=b?0:G*.75;si(t.plain,B+O-m*.04,F,U+N-y*.04,H*.38+(b?0:.05),1.15,E*.38+(b?.05:0),d)}else if(e==="mirage"&&z>.5){let G=[[.75,.25,.2],[.85,.65,.25],[.25,.45,.6]][Math.floor(h()*3)];si(t.plain,B-m*.45,F+.85,U-y*.45,b?1.5:.9,.08,b?.9:1.5,G)}}}}R=-1};for(let A=1;A<s-1;A++){let w=b?A:M,C=b?M:A,L=C*s+w,T=(C+y)*s+(w+m),P=c(L)&&l(T)&&!isNaN(o[T]);P&&R>=0&&Math.abs(o[L]-S)<.35&&Math.abs(o[T]-g)<.7||(_(A),P&&(R=A,S=o[L],g=o[T]))}_(s-1)}}if(n.slabs){let m=n.top[1],y=n.bot[1],b=n.cls[1];for(let M=1;M<s-1;M++)for(let R=1;R<s-1;R++){let S=M*s+R;if(!(b[S]!==4||y[S]-o[S]>2.8||!c(S)&&a[S]!==2))for(let[g,_]of v){let A=(M+_)*s+R+g;if(!l(A))continue;let w=(R+.5+g*.5)*r-g*.06,C=(M+.5+_*.5)*r-_*.06,L=y[S]-o[S];si(t.wood,w,o[S]+L/2,C,g?.14:r,L,_?.14:r,nn(i.slab,1.1),2)}}}let x=[];for(let m=0;m<900&&x.length<(e==="mirage"?26:18);m++){let y=2+Math.floor(h()*(s-4)),b=2+Math.floor(h()*(s-4)),M=b*s+y;if(!c(M))continue;let R=0;for(let[A,w]of v)l((b+w*2)*s+y+A*2)&&R++;if(R!==2||n.flags[M]&60)continue;let S=(y+.5)*r,g=(b+.5)*r,_=o[M];if(!x.some(A=>Math.hypot(A[0]-S,A[1]-g)<8))if(x.push([S,g]),e==="mirage"&&h()<.35){si(t.plain,S,_+.3,g,.7,.6,.7,[.7,.42,.28]);for(let A=0;A<5;A++){let w=A/5*Math.PI*2;si(t.plain,S+Math.cos(w)*.35,_+.85,g+Math.sin(w)*.35,.5,.08,.5,[.28,.5,.22])}}else{let A=e==="vertigo"?[.85,.55,.1]:h()<.5?[.3,.42,.55]:[.55,.3,.2];si(t.plain,S,_+.45,g,.6,.9,.6,A),si(t.plain,S,_+.3,g,.64,.06,.64,nn(A,.7)),si(t.plain,S,_+.65,g,.64,.06,.64,nn(A,.7))}}}var sm={dust2:{floor:[[.9,.76,.56],"sand",3.2],road:[[.86,.76,.6],"cobble",2.4],wall:[[.95,.84,.66],"blocks",2.6],trim:[[.8,.69,.52],"stone",1.6],crate:[[1,.95,.88],"crate",1.6256],door:[[.66,.48,.3],"wood",1.6],concrete:[[.8,.76,.68],"concrete",2.4],rock:[[.76,.65,.52],"stone",2],metal:[[.42,.44,.47],"metal",1.5],dark:[[.16,.14,.12],null,1],ceiling:[[.66,.5,.34],"wood",2],roof:[[.86,.74,.56],"blocks",2.6],base:[[.8,.68,.52],"stone",1.6]},mirage:{floor:[[.9,.82,.68],"slabs",4],wall:[[.96,.89,.76],"plaster",3],base:[[.78,.7,.6],"stone",1.6],ceiling:[[.66,.47,.32],"wood",2],roof:[[.8,.44,.3],"roof",2]}};function cm(n,e,t,i,s){let r=sm[i]||sm.dust2,o=Cf(i),a=new Rt,l=t.origin||[0,0,0],c=0;for(let v of t.parts)c+=v.tris;let h=new Array(c),u=0,f=0;for(let v of t.parts){for(let x=0;x<v.tris;x++){let m=v.cat;if(v.cat==="floor"&&s&&r.roof){let y=u+x*9,b=(e[y]+e[y+3]+e[y+6])/300,M=(e[y+1]+e[y+4]+e[y+7])/300,R=(e[y+2]+e[y+5]+e[y+8])/300;hb(s,b,M,R)&&(m="roof")}if(v.cat==="wall"&&r.base){let y=u+x*9,b=Math.min(e[y+1],e[y+4],e[y+7])/100,M=Math.max(e[y+1],e[y+4],e[y+7])/100,R=(e[y]+e[y+3]+e[y+6])/300,S=(e[y+2]+e[y+5]+e[y+8])/300,g=rm(n,R,S,b+.3);g>-1e8&&M-g<.95&&M-b<1&&(m="base")}h[f+x]=m}u+=v.tris*9,f+=v.tris}let d=[...new Set(h)],p=0;for(let v of d){let x=[];for(let C=0;C<c;C++)h[C]===v&&x.push(C);let m=x.length,y=new Float32Array(m*9),b=new Float32Array(m*9),M=new Float32Array(m*6),R=new Float32Array(m*9),[S,g,_]=r[v]||r.wall||[[.8,.8,.8],null,2];for(let C=0;C<m;C++){let L=x[C]*9;for(let J=0;J<9;J++)y[C*9+J]=e[L+J]/100;let T=C*9,P=y[T+3]-y[T],z=y[T+4]-y[T+1],X=y[T+5]-y[T+2],q=y[T+6]-y[T],B=y[T+7]-y[T+1],U=y[T+8]-y[T+2],H=z*U-X*B,E=X*q-P*U,F=P*B-z*q,G=Math.hypot(H,E,F)||1;H/=G,E/=G,F/=G;let O=Math.abs(H),N=Math.abs(E),V=Math.abs(F),K=1+(ph(Math.floor(y[T]/3),Math.floor(y[T+2]/3+y[T+1]/4))-.5)*.07;for(let J=0;J<3;J++){let ie=y[T+J*3],ue=y[T+J*3+1],Te=y[T+J*3+2];R[T+J*3]=H,R[T+J*3+1]=E,R[T+J*3+2]=F;let De=K;if(N<.5){let ye=rm(n,ie,Te,ue+.15),Ge=ye>-1e8?ue-ye:9;Ge<.3?De*=.72:Ge<.9&&(De*=.8+(Ge-.3)/.6*.2)}b[T+J*3]=S[0]*De,b[T+J*3+1]=S[1]*De,b[T+J*3+2]=S[2]*De;let We=ie-l[0],ae=ue-l[1],he=Te-l[2],de,pe;N>=O&&N>=V?(de=We,pe=he):O>=V?(de=he,pe=-ae):(de=We,pe=-ae),M[C*6+J*2]=de/_,M[C*6+J*2+1]=pe/_}}p+=m;let A=new Bt;A.setAttribute("position",new qt(y,3)),A.setAttribute("normal",new qt(R,3)),A.setAttribute("color",new qt(b,3)),A.setAttribute("uv",new qt(M,2)),A.computeBoundingSphere();let w=new Oe(A,$i(g,{side:pi,rough:v==="metal"?.6:.92,metal:v==="metal"?.3:0,bump:v==="floor"||v==="roof"?.9:1.1}));w.castShadow=!0,w.receiveShadow=!0,w.matrixAutoUpdate=!1,a.add(w)}return a.matrixAutoUpdate=!1,{mesh:a,tris:p,theme:o}}function hb(n,e,t,i){if(t<3.5)return!1;let s=Math.floor(e/n.c),r=Math.floor(i/n.c);for(let o=-1;o<=1;o++)for(let a=-1;a<=1;a++){let l=s+a,c=r+o;if(l<0||c<0||l>=n.m||c>=n.m)continue;let h=c*n.m+l;for(let u=0;u<n.L;u++){let f=n.H[u][h];if(!isNaN(f)&&Math.abs(f-t)<.9&&n.main[u*n.N+h])return!1}}return!0}function rm(n,e,t,i){let s=n.idx(e,t);if(s<0)return-1/0;let r=-1/0;for(let o=0;o<n.L;o++){let a=n.top[o][s];!isNaN(a)&&a<=i&&a>r&&(r=a)}return r}var ps=.0254,st={gravity:800*ps,jump:301.993*ps,accel:5.5,airAccel:12,friction:5.2,stop:80*ps,airCap:30*ps,hStand:72*ps,hCrouch:54*ps,eyeStand:64*ps,eyeCrouch:46*ps,walk:.52,crouchMul:.34,r:.4};function Da(n,e,t,i=0){return{x:n,y:e,z:t,vx:0,vy:0,vz:0,yaw:i,pitch:0,duck:0,onGround:!0,landT:0,h:st.hStand,alive:!0,jumpHeld:!1}}var Mn=n=>st.eyeStand+(st.eyeCrouch-st.eyeStand)*n.duck;function gh(n,e,t,i,s){e.sinceLand=(e.sinceLand??1)+i;let r=t.crouch?1:0;if(r>e.duck)e.duck=Math.min(1,e.duck+i*8);else if(r<e.duck){let x=Math.max(0,e.duck-i*8),m=st.hStand+(st.hCrouch-st.hStand)*x;uh(n,e.x,e.z,e.y)>=e.y+m&&(e.duck=x)}let o=e.h;e.h=st.hStand+(st.hCrouch-st.hStand)*e.duck,!e.onGround&&e.h<o&&(e.y+=(o-e.h)*.5);let a=s*(e.duck>.5?st.crouchMul:t.walk?st.walk:1),l=Math.sin(e.yaw),c=Math.cos(e.yaw),h=-l*t.f+c*t.s,u=-c*t.f-l*t.s,f=Math.hypot(h,u);if(f>1e-6?(h/=f,u/=f):a=0,e.onGround)if(t.jump&&!e.jumpHeld&&uh(n,e.x,e.z,e.y)>e.y+e.h+.05)e.vy=st.jump*((e.sinceLand||1)<.4?.88:1),e.onGround=!1,e.jumpHeld=!0;else{let x=Math.hypot(e.vx,e.vz);if(x>.001){let m=Math.max(x,st.stop)*st.friction*i*(e.landT>0?1.4:1),y=Math.max(0,x-m)/x;e.vx*=y,e.vz*=y}um(e,h,u,a,st.accel,i)}e.onGround||um(e,h,u,Math.min(a,st.airCap),st.airAccel,i,a),t.jump||(e.jumpHeld=!1),e.landT>0&&(e.landT-=i),Xn(n,e.x,e.z,e.y,e.h,st.r)&&!ub(n,e)&&(e.blkT=(e.blkT||0)+i,e.blkT>.3&&(hm(n,e),e.blkT=0));let d=e.x+e.vx*i;Xn(n,d,e.z,e.y,e.h,st.r)?e.vx=0:e.x=d;let p=e.z+e.vz*i;Xn(n,e.x,p,e.y,e.h,st.r)?e.vz=0:e.z=p,(t.f||t.s)&&e.onGround&&fm(n,e)?(e.pocketT=(e.pocketT||0)+i,e.pocketT>.6&&(hm(n,e),e.pocketT=0)):e.pocketT=0;let v=hh(n,e.x,e.z,e.y,st.r-.02);if(e.onGround&&(v>=e.y-.62&&v>-1/0?(e.y=v,e.vy=0):e.onGround=!1),!e.onGround){e.vy-=st.gravity*i;let x=e.y;e.y+=e.vy*i;let m=uh(n,e.x,e.z,x);e.y+e.h>m&&e.vy>0&&(e.y=Math.max(x,m-e.h),e.vy=0);let y=hh(n,e.x,e.z,e.y-e.vy*i,st.r-.02);if(e.vy<=0&&e.y<=y){let b=-e.vy;return e.y=y,e.vy=0,e.onGround=!0,e.landT=.12,e.sinceLand=0,Math.hypot(e.vx,e.vz)>4&&(e.vx*=.78,e.vz*=.78),b}}return fb(n,e),0}function ub(n,e){for(let t=.04;t<=.8;t+=.04)for(let i=0;i<16;i++){let s=i*Math.PI/8,r=e.x+Math.cos(s)*t,o=e.z+Math.sin(s)*t;for(let a of[0,.62*.9])if(!Xn(n,r,o,e.y+a,e.h,st.r))return e.x=r,e.z=o,e.y+=a,!0}return!1}function fm(n,e){for(let t=0;t<8;t++){let i=t*Math.PI/4;if(!Xn(n,e.x+Math.cos(i)*.15,e.z+Math.sin(i)*.15,e.y,e.h,st.r))return!1}return!0}function hm(n,e){for(let t=.2;t<=4;t+=t<2.4?.1:.25)for(let i=0;i<24;i++){let s=i*Math.PI/12,r=e.x+Math.cos(s)*t,o=e.z+Math.sin(s)*t;for(let a of[0,.62*.9,-.6,-1.4,-2.5]){let l=e.y+a;if(Xn(n,r,o,l,e.h,st.r))continue;let c=hh(n,r,o,l+.05);if(!(c>-50))continue;let h={x:r,z:o,y:c,h:e.h};if(!(Xn(n,r,o,c,e.h,st.r)||fm(n,h)))return e.x=r,e.z=o,e.y=c,e.vx=e.vz=0,!0}}return!1}function fb(n,e){let t=n.idx(e.x,e.z);if(!(t<0))for(let i=0;i<n.L;i++){let s=n.top[i][t],r=n.bot[i][t];if(!isNaN(s)&&r<e.y-.05&&s>e.y+.02&&s-e.y<2.5){e.y=s,e.vy=Math.max(0,e.vy),e.onGround=!0;return}}}function um(n,e,t,i,s,r,o){let a=n.vx*e+n.vz*t,l=i-a;if(l<=0)return;let c=s*r*(o||i);c>l&&(c=l),n.vx+=c*e,n.vz+=c*t}function If(n){let e=n/ps;return e>580?Math.round((e-580)*(100/444)):0}function db(n){let e=n.h,t=e/st.hStand;return[{part:"head",y0:e-.27*t,y1:e,r:.13},{part:"chest",y0:e-.62*t,y1:e-.27*t,r:.22},{part:"stomach",y0:e-.9*t,y1:e-.62*t,r:.2},{part:"leg",y0:0,y1:e-.9*t,r:.18}]}function dm(n,e,t,i,s,r,o,a){let l=null;for(let c of db(n)){let h=n.x,u=n.z,f=e-h,d=i-u,p=s*s+o*o,v=2*(f*s+d*o),x=f*f+d*d-c.r*c.r,m;if(p<1e-9){if(x>0)continue;m=0}else{let b=v*v-4*p*x;if(b<0||(m=(-v-Math.sqrt(b))/(2*p),m<0&&(m=(-v+Math.sqrt(b))/(2*p)),m<0))continue}let y=t+r*m;y<n.y+c.y0||y>n.y+c.y1||m<=a&&(!l||m<l.t)&&(l={t:m,part:c.part})}return l}var pb=1.15,Lf=.74;function xo(n){let e=Math.max(1,Math.round(.55/n.cell)),t=Math.floor(n.n/e),i=t*t,s=n.cell*e,r=[];for(let m=0;m<n.L;m++)r.push(new Float32Array(i).fill(NaN));for(let m=0;m<t;m++)for(let y=0;y<t;y++){let b=(y+.5)*s,M=(m+.5)*s,R=n.idx(b,M);for(let S=0;S<n.L;S++){let g=n.top[S][R];if(isNaN(g))continue;let _=n.cls[S][R];_===3||_===4||Xn(n,b,M,g,st.hCrouch+.05,.36)||(r[S][m*t+y]=g)}}let o={W:n,k:e,m:t,c:s,H:r,L:n.L};o.node=(m,y)=>m*i+y,o.pos=m=>{let y=Math.floor(m/i),b=m%i;return[(b%t+.5)*s,r[y][b],(Math.floor(b/t)+.5)*s,y]},o.nearest=(m,y,b)=>{let M=Math.floor(m/s),R=Math.floor(b/s),S=-1,g=1e9;for(let _=0;_<=6&&S<0;_++)for(let A=-_;A<=_;A++)for(let w=-_;w<=_;w++){if(Math.max(Math.abs(w),Math.abs(A))!==_)continue;let C=M+w,L=R+A;if(C<0||L<0||C>=t||L>=t)continue;let T=L*t+C;for(let P=0;P<n.L;P++){let z=r[P][T];if(isNaN(z)||o.main&&!o.main[P*i+T])continue;let X=Math.abs(z-y)*3+Math.hypot(w,A);X<g&&(g=X,S=P*i+T)}}return S};let a=[1,-1,0,0,1,1,-1,-1],l=[0,0,1,-1,1,-1,1,-1];o.neighbors=(m,y)=>{y.length=0;let b=Math.floor(m/i),M=m%i,R=M%t,S=(M-R)/t,g=r[b][M];for(let _=0;_<8;_++){let A=R+a[_],w=S+l[_];if(A<0||w<0||A>=t||w>=t)continue;let C=w*t+A;if(!(_>=4&&(!c(b,S*t+A,g)||!c(b,w*t+R,g))))for(let L=0;L<n.L;L++){let T=r[L][C];if(isNaN(T))continue;let P=T-g;P>pb||-P>2.2||P>Lf&&_>=4||y.push(L*i+C,(_>=4?1.414:1)+(P>Lf?4:0))}}return y};function c(m,y,b){for(let M=0;M<n.L;M++){let R=r[M][y];if(!isNaN(R)&&Math.abs(R-b)<=Lf)return!0}return!1}let h=new Uint8Array(n.L*i);for(let m=0;m<n.L;m++)for(let y=0;y<i;y++){if(isNaN(r[m][y]))continue;let b=y%t,M=(y-b)/t,R=0;for(let S=0;S<8;S++){let g=b+a[S],_=M+l[S];(g<0||_<0||g>=t||_>=t||!c(m,_*t+g,r[m][y]))&&R++}h[m*i+y]=R}o.edge=h,o.N=i;let u=n.L*i,f=[],d=Ef(n,32),p=[];for(let m=0;m<d.length&&p.length<8;m+=Math.max(1,Math.floor(d.length/8))){let y=d[m],b=(y%n.n+.5)*n.cell,M=(Math.floor(y/n.n)+.5)*n.cell,R=Math.floor(M/o.c)*t+Math.floor(b/o.c);for(let S=0;S<n.L;S++)if(!isNaN(r[S][R])){p.push(S*i+R);break}}if(!p.length){for(let m=0;m<u;m++)if(!isNaN(r[Math.floor(m/i)][m%i])){p.push(m);break}}let v=null,x=-1;for(let m of p){if(v&&v[m])continue;let y=new Uint8Array(u),b=new Uint8Array(u),M=new Map,R=[m];for(y[m]=1;R.length;){let _=R.pop();o.neighbors(_,f);for(let A=0;A<f.length;A+=2){let w=f[A],C=M.get(w);C||M.set(w,C=[]),C.push(_),y[w]||(y[w]=1,R.push(w))}}for(R=[m],b[m]=1;R.length;){let _=R.pop(),A=M.get(_);if(A)for(let w of A)b[w]||(b[w]=1,R.push(w))}let S=new Uint8Array(u),g=0;for(let _=0;_<u;_++)y[_]&b[_]&&(S[_]=1,g++);g>x&&(x=g,v=S)}return o.main=v,o}var mr={a:[],f:[]};function Bs(n,e,t,i=6e4){if(e<0||t<0)return null;let s=n.L*n.N;(!n.g||n.g.length!==s)&&(n.g=new Float32Array(s),n.came=new Int32Array(s),n.seen=new Uint32Array(s),n.closed=new Uint32Array(s),n.stamp=0);let r=n.g,o=n.came,a=n.seen,l=n.closed,c=++n.stamp,[h,,u]=n.pos(t),f=x=>{let m=n.pos(x);return Math.hypot(m[0]-h,m[2]-u)/n.c};mr.a.length=0,mr.f.length=0,pm(e,f(e)),r[e]=0,o[e]=-1,a[e]=c;let d=[],p=0;for(;mr.a.length&&p++<i;){let x=mb();if(x===t)break;if(l[x]!==c){l[x]=c,n.neighbors(x,d);for(let m=0;m<d.length;m+=2){let y=d[m],b=r[x]+d[m+1]+n.edge[y]*.35;a[y]===c&&b>=r[y]||(a[y]=c,r[y]=b,o[y]=x,pm(y,b+f(y)))}}}if(a[t]!==c)return null;let v=[];for(let x=t;x!==-1;x=o[x])v.push(n.pos(x));return v.reverse(),gb(n,v)}function pm(n,e){let t=mr.a,i=mr.f;t.push(n),i.push(e);let s=t.length-1;for(;s>0;){let r=s-1>>1;if(i[r]<=i[s])break;[t[r],t[s]]=[t[s],t[r]],[i[r],i[s]]=[i[s],i[r]],s=r}}function mb(){let n=mr.a,e=mr.f,t=n[0],i=n.pop(),s=e.pop();if(n.length){n[0]=i,e[0]=s;let r=0;for(;;){let o=2*r+1,a=o+1,l=r;if(o<n.length&&e[o]<e[l]&&(l=o),a<n.length&&e[a]<e[l]&&(l=a),l===r)break;[n[l],n[r]]=[n[r],n[l]],[e[l],e[r]]=[e[r],e[l]],r=l}}return t}function gb(n,e){if(e.length<3)return e;let t=[e[0]];for(let i=1;i<e.length-1;i++){let s=t[t.length-1],r=e[i+1],o=[e[i][0]-s[0],e[i][2]-s[2]],a=[r[0]-e[i][0],r[2]-e[i][2]];(Math.abs(o[0]*a[1]-o[1]*a[0])>1e-4||Math.abs(e[i][1]-s[1])>.3||Math.hypot(e[i][0]-s[0],e[i][2]-s[2])>n.c*6)&&t.push(e[i])}return t.push(e[e.length-1]),t}function ri(n,e){let t=n.W,i=new Set;for(let s of Ef(t,e)){let r=(s%t.n+.5)*t.cell,o=(Math.floor(s/t.n)+.5)*t.cell,a=Math.floor(r/n.c),l=Math.floor(o/n.c),c=l*n.m+a;for(let h=t.L-1;h>=0;h--)if(!isNaN(n.H[h][c])&&n.main[h*n.N+c]){i.add(h*n.N+c);break}}return[...i]}function mm(n,e,t=1.45){let{m:i,N:s,H:r}=e,o=n.L*s;if(!e.main)return 0;let a=[[1,0],[-1,0],[0,1],[0,-1]],l=(b,M)=>{let R=Math.floor(b/s),S=b%s,g=S%i,_=(S-g)/i,A=r[R][S];for(let[w,C]of a){let L=g+w,T=_+C;if(L<0||T<0||L>=i||T>=i)continue;let P=T*i+L;for(let z=0;z<n.L;z++){let X=r[z][P];!isNaN(X)&&X-A<=t&&M(z*s+P)}}},c=new Uint8Array(o),h=[];for(let b=0;b<o;b++)e.main[b]&&(c[b]=1,h.push(b));for(;h.length;){let b=h.pop();l(b,M=>{c[M]||(c[M]=1,h.push(M))})}let u=new Map;for(let b=0;b<o;b++)c[b]&&l(b,M=>{if(!c[M])return;let R=u.get(M);R||u.set(M,R=[]),R.push(b)});let f=new Uint8Array(o);for(let b=0;b<o;b++)e.main[b]&&(f[b]=1,h.push(b));for(;h.length;){let b=h.pop(),M=u.get(b);if(M)for(let R of M)f[R]||(f[R]=1,h.push(R))}let d=new Uint8Array(o).fill(255),p=new Float32Array(o),v=[];for(let b=0;b<o;b++)e.main[b]&&(d[b]=0,p[b]=r[Math.floor(b/s)][b%s],v.push(b));let x=b=>r[Math.floor(b/s)][b%s];for(let b=0;b<v.length;b++){let M=v[b],R=x(M);l(M,S=>{if(e.main[S])return;let g=x(S)-R,_=d[M]+(g>.7?1:0),A=e.main[M]?R:p[M];_<d[S]&&(d[S]=_,p[S]=A,v.push(S))})}let m=b=>!e.main[b]&&d[b]<255&&(d[b]>2||x(b)-p[b]>2.6),y=0;for(let b=0;b<o;b++){let M=c[b]&&!f[b];if(!M&&!m(b))continue;if(!M){let w=Math.floor(b/s),C=b%s,L=C%i,T=(C-L)/i,P=r[w][C];for(let z=0;z<e.k;z++)for(let X=0;X<e.k;X++){let q=(T*e.k+z)*n.n+L*e.k+X,B=-1,U=.4;for(let E=0;E<n.L;E++){let F=n.top[E][q];!isNaN(F)&&Math.abs(F-P)<U&&(U=Math.abs(F-P),B=E)}if(B<0)continue;let H=B+1<n.L&&!isNaN(n.bot[B+1][q])?n.bot[B+1][q]:60;n.top[B][q]=Math.min(H,n.top[B][q]+2.2),n.cls[B][q]=3,y++}continue}let R=Math.floor(b/s),S=b%s,g=S%i,_=(S-g)/i,A=r[R][S];for(let w=0;w<e.k;w++)for(let C=0;C<e.k;C++){let L=(_*e.k+w)*n.n+g*e.k+C,T=-1,P=.4;for(let X=0;X<n.L;X++){let q=n.top[X][L];!isNaN(q)&&Math.abs(q-A)<P&&(P=Math.abs(q-A),T=X)}if(T<0)continue;let z=T+1<n.L&&!isNaN(n.bot[T+1][L])?n.bot[T+1][L]:40;n.top[T][L]=z,n.cls[T][L]=3,y++}}return y}function gm(n,e,t=null){let i=n.L*n.N,s=new Float64Array(i).fill(1/0),r=[],o=[],a=(c,h)=>{o.push([c,h]);let u=o.length-1;for(;u>0;){let f=u-1>>1;if(o[f][0]<=o[u][0])break;[o[f],o[u]]=[o[u],o[f]],u=f}},l=()=>{let c=o[0],h=o.pop();if(o.length){o[0]=h;let u=0;for(;;){let f=u*2+1,d=f+1,p=u;if(f<o.length&&o[f][0]<o[p][0]&&(p=f),d<o.length&&o[d][0]<o[p][0]&&(p=d),p===u)break;[o[p],o[u]]=[o[u],o[p]],u=p}}return c};for(let c of e)s[c]=0,a(0,c);for(;o.length;){let[c,h]=l();if(!(c>s[h])){t?r=t.get(h)||[]:n.neighbors(h,r);for(let u=0;u<r.length;u+=2){let f=r[u],d=c+r[u+1];n.main[f]&&d<s[f]&&(s[f]=d,a(d,f))}}}return s}function xm(n,e){let t=ri(e,16),i=ri(e,32),s=ri(e,4),r=ri(e,8);if(!t.length||!i.length||!s.length||!r.length)return null;let o=[],a=gm(e,t),l=gm(e,i),c=(C,L)=>C.reduce((T,P)=>Math.min(T,L[P]),1/0),h=C=>Math.max(c(C,a),c(C,l))+.3*(c(C,a)+c(C,l)),u=h(s)<=h(r)?"A":"B",f=u==="A"?s:r,d=e.L*e.N,p=new Uint8Array(d),v=C=>{let L=0,T=0,P=0;for(let X of C){let q=e.pos(X);L+=q[0],T+=q[1],P+=q[2]}let z=C.length;return e.nearest(L/z,T/z,P/z)},x=v(t),m=v(i),y=v(f),b=[];for(let[C,L]of[[x,y],[y,x],[m,y],[y,m],[x,m],[m,x]]){let T=Bs(e,C,L);if(T)for(let P of T){let z=e.nearest(P[0],P[1],P[2]);z>=0&&b.push([z,16])}}for(let C of t)b.push([C,14]);for(let C of i)b.push([C,14]);for(let C of f)b.push([C,16]);let M=new Int8Array(d).fill(-1),R=[];for(let[C,L]of b)L>M[C]&&(M[C]=L,R.push(C));for(;R.length;){let C=R.pop();if(p[C]=1,!(M[C]<=0)){e.neighbors(C,o);for(let L=0;L<o.length;L+=2){let T=o[L];e.main[T]&&M[C]-1>M[T]&&(M[T]=M[C]-1,R.push(T))}}}let S=[],g=new Set,_=Uint8Array.from(p);for(let C=0;C<d;C++)if(p[C]){e.neighbors(C,S);for(let L=0;L<S.length;L+=2)e.main[S[L]]&&(_[S[L]]=1)}p.set(_);for(let C=0;C<d;C++)if(p[C]){e.neighbors(C,S);for(let L=0;L<S.length;L+=2){let T=S[L];!p[T]&&e.main[T]&&g.add(T)}}let A=[];for(let C of g){let L=Math.floor(C/e.N),T=C%e.N,P=T%e.m,z=Math.floor(T/e.m),X=e.H[L][T];for(let q=0;q<e.k;q++)for(let B=0;B<e.k;B++){let U=P*e.k+B,H=z*e.k+q,E=H*n.n+U,F=-1,G=.35;for(let K=0;K<n.L;K++){let J=n.top[K][E];!isNaN(J)&&Math.abs(J-X)<G&&(G=Math.abs(J-X),F=K)}if(F<0)continue;let O=!1;for(let K=0;K<e.L&&!O;K++){let J=K*e.N+T;p[J]&&Math.abs(e.H[K][T]-X)<3.4&&J!==C&&(O=!0)}if(O)continue;let N=n.top[F][E],V=F+1<n.L&&!isNaN(n.bot[F+1][E])?n.bot[F+1][E]:1/0;n.top[F][E]=Math.min(N+3.2,V),n.cls[F][E]=3,A.push([U,H,N,Math.min(3.2,V-N)])}}let w=u==="A"?8:4;for(let C=0;C<n.flags.length;C++)n.flags[C]&=~w;return{site:u,cells:A}}function ym(n,e){let t=new Ut(1,1,1),i=[],s=[],r=[],o=[],a=t.attributes.position.array,l=t.attributes.normal.array,c=t.attributes.uv.array,h=t.index.array,u=(p,v,x,m,y)=>{for(let b=0;b<h.length;b++){let M=h[b],R=p+(a[M*3]+.5)*n.cell,S=x+(a[M*3+1]+.5)*(m-x),g=v+(a[M*3+2]+.5)*n.cell;i.push(R,S,g),s.push(l[M*3],l[M*3+1],l[M*3+2]),r.push((R+g)/1.2,S/1.2),o.push(y[0],y[1],y[2])}};for(let[p,v,x,m]of e){let y=p*n.cell,b=v*n.cell,M=p+v>>2&1;if(m<1.4){u(y,b,x,x+m,[.78,.62,.42]);continue}u(y,b,x,x+1,[.78,.62,.42]),u(y,b,x+1,x+1.3,M?[.95,.75,.15]:[.14,.14,.14]),u(y,b,x+1.3,x+m,[.72,.57,.38])}let f=new Bt;f.setAttribute("position",new rt(i,3)),f.setAttribute("normal",new rt(s,3)),f.setAttribute("uv",new rt(r,2)),f.setAttribute("color",new rt(o,3));let d=new Oe(f,$i("crate"));return d.castShadow=!0,d.receiveShadow=!0,d}function yi(n,e=!1){let t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},o={},a=n[0].morphTargetsRelative,l=new Bt;l.morphTargetsRelative=a;let c=0;for(let h=0;h<n.length;++h){let u=n[h],f=0,d=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let p in u.attributes){if(!i.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(u.attributes[p]),f++}if(f!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let p in u.morphAttributes){if(!s.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;if(u.morphAttributes[p].length!==n[0].morphAttributes[p].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have the same number of morph targets for the "'+p+'" morph attribute.'),null;o[p]===void 0&&(o[p]=[]),o[p].push(u.morphAttributes[p]),d++}if(d!==s.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of morph attributes."),null;if(e){let p;if(t)p=u.index.count;else if(u.attributes.position!==void 0)p=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,p,h),c+=p}}if(t){let h=0,u=[];for(let f=0;f<n.length;++f){let d=n[f].index;for(let p=0;p<d.count;++p)u.push(d.getX(p)+h);h+=n[f].attributes.position.count}l.setIndex(u)}for(let h in r){let u=vm(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let f=0;f<u;++f){let d=[];for(let v=0;v<o[h].length;++v)d.push(o[h][v][f]);let p=vm(d);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(p)}}}return l}function vm(n){let e,t,i,s=-1,r=0;for(let c=0;c<n.length;++c){let h=n[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let o=new e(r),a=new qt(o,t,i),l=0;for(let c=0;c<n.length;++c){let h=n[c];if(h.isInterleavedBufferAttribute){let u=l/t;for(let f=0,d=h.count;f<d;f++)for(let p=0;p<t;p++){let v=h.getComponent(f,p);a.setComponent(f+u,p,v)}}else o.set(h.array,l);l+=h.count*t}return s!==void 0&&(a.gpuType=s),a}function xb(n){let e=n|0;return()=>{e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}var gr=(n,e)=>{let t=n.attributes.position.count,i=new Float32Array(t*3),s=new Xe(e);for(let r=0;r<t;r++)i[r*3]=s.r,i[r*3+1]=s.g,i[r*3+2]=s.b;return n.setAttribute("color",new qt(i,3)),n},xr=n=>n.index?n.toNonIndexed():n,vi=(n,e,t,i,s,r,o,a=0)=>gr(xr(new Ut(n,e,t).rotateY(a).translate(i,s,r)),o),Ua=(n,e,t,i,s,r,o,a=18)=>gr(xr(new zn(n,e,t,a).translate(i,s,r)),o),xh=(n,e,t,i,s,r)=>gr(xr(new rr(n,e,10,22).rotateX(Math.PI/2).translate(t,i,s)),r),Fa=(n,e,t,i,s,r,o)=>gr(xr(new fi(1,14,10).scale(n,e,t).translate(i,s,r)),o),yh={barrel(n="#4f6f8a"){return{metal:[Ua(.29,.29,.88,0,.44,0,n),xh(.295,.02,0,.25,0,"#3a3a3a"),xh(.295,.02,0,.63,0,"#3a3a3a"),Ua(.27,.27,.02,0,.885,0,"#555")],hw:.32,hd:.32,h:.9}},barrels2(){let n=yh.barrel("#7a3b2a").metal,e=yh.barrel("#4f6f8a").metal.map(t=>t.clone().translate(.62,0,.1));return{metal:[...n,...e],hw:.65,hd:.36,h:.9,cx:.31}},pallet(){let n=[];for(let t=0;t<5;t++)n.push(vi(1.2,.025,.14,0,.13,-.45+t*.225,"#9a7650"));for(let t of[-.45,0,.45])n.push(vi(1.2,.1,.12,0,.065,t,"#7d5e3c"));let e=[];for(let t=0;t<6;t++){let i=-.33+t%3*.33,s=t<3?-.2:.2;e.push(Fa(.17,.09,.23,i,.24,s,"#d8c9a3"))}for(let t=0;t<3;t++)e.push(Fa(.17,.09,.23,-.17+t%2*.33,.41,t===2?.2:-.1,"#cdbd94"));return{wood:n,cloth:e,hw:.62,hd:.5,h:.52}},tires(){let n=[];for(let e=0;e<4;e++)n.push(xh(.3,.11,0,.11+e*.21,0,"#1d1d1d"));return{rubber:n,hw:.42,hd:.42,h:.85}},gas(){let n=[];for(let e=0;e<3;e++){let t=-.26+e*.26;n.push(Ua(.11,.11,.62,t,.31,0,e===1?"#c23a2a":"#b9a24a"),Fa(.11,.07,.11,t,.62,0,"#888"),Ua(.03,.03,.1,t,.71,0,"#444"))}return{metal:n,hw:.42,hd:.15,h:.75}},pot(){let n=[Ua(.26,.18,.55,0,.275,0,"#b0603a"),xh(.26,.03,0,.55,0,"#9a5232")],e=[];for(let t=0;t<7;t++){let i=t/7*Math.PI*2;e.push(gr(xr(new cs(.05,.7,6).rotateZ(.5).rotateY(i).translate(Math.cos(i)*.14,.85,Math.sin(i)*.14)),"#4f7a33"))}return{clay:n,plant:e,hw:.28,hd:.28,h:.6}},sandbags(){let n=[];for(let e=0;e<3;e++)for(let t=0;t<4-(e===2?1:0);t++)n.push(Fa(.27,.12,.18,-.75+t*.5+e%2*.25,.12+e*.22,0,e%2?"#a99a72":"#b6a77d"));return{cloth:n,hw:1,hd:.25,h:.7}},cart(){let n=[vi(1.3,.1,.8,0,.55,0,"#8a6a46"),vi(1.3,.35,.05,0,.75,.38,"#7a5c3c"),vi(1.3,.35,.05,0,.75,-.38,"#7a5c3c"),vi(.05,.35,.8,.63,.75,0,"#7a5c3c"),vi(.06,.06,1,-1.05,.62,.3,"#6a4e33",0),vi(.06,.06,1,-1.05,.62,-.3,"#6a4e33")],e=[gr(xr(new zn(.35,.35,.08,16).rotateX(Math.PI/2).translate(.15,.35,.46)),"#4a3a2a"),gr(xr(new zn(.35,.35,.08,16).rotateX(Math.PI/2).translate(.15,.35,-.46)),"#4a3a2a")];return n[4].rotateY(0),{wood:[...n,...e],hw:1.15,hd:.5,h:.95}},crates(){return{crate:[vi(.9,.9,.9,0,.45,0,"#c9a77a"),vi(.6,.6,.6,.12,1.2,.05,"#bf9c6e",.3)],hw:.5,hd:.5,h:1.5}},fruit(){let n=[vi(1.4,.5,.7,0,.25,0,"#8d6b45"),vi(1.4,.04,.7,0,.52,0,"#6d5235")],e=[];for(let t=0;t<18;t++)e.push(Fa(.08,.08,.08,-.6+t%9*.15,.6,-.15+Math.floor(t/9)*.3,t%3?"#d9822b":"#c23a2a"));return{wood:n,plant:e,hw:.72,hd:.38,h:.68}}},_m={dust2:["barrel","barrels2","pallet","tires","gas","sandbags","cart","crates","pot"],mirage:["pot","pot","fruit","cart","pallet","barrel","gas","sandbags","crates"]};function bm(n,e,t,i=46){let s=_m[t]||_m.dust2,r=xb(t.length*7919+13),o=[],{m:a,N:l,H:c}=e,h=[16,32].map(f=>{let d=0,p=0,v=0;for(let x=0;x<n.n*n.n;x+=7)n.flags[x]&f&&(d+=x%n.n,p+=Math.floor(x/n.n),v++);return v?[d/v*n.cell,p/v*n.cell]:[-99,-99]}),u=[];for(let f=4;f<a-4;f+=2)for(let d=4;d<a-4;d+=2){let p=f*a+d,v=-1;for(let S=0;S<e.L;S++)if(e.main[S*l+p]){v=S;break}if(v<0)continue;let x=c[v][p],m=null,y=0,b=0;for(let S=-4;S<=4;S++)for(let g=-4;g<=4;g++){let _=(f+S)*a+d+g,A=c[v][_];b++,!isNaN(A)&&Math.abs(A-x)<.3?y++:Math.abs(g)<=1&&Math.abs(S)<=1&&(g||S)&&!m&&(m=[g,S])}if(!m||y/b<.62)continue;let M=(d+.5)*e.c,R=(f+.5)*e.c;h.some(S=>Math.hypot(S[0]-M,S[1]-R)<7)||u.push([M,x,R,Math.atan2(m[0],m[1])])}for(let f=u.length-1;f>0;f--){let d=Math.floor(r()*(f+1));[u[f],u[d]]=[u[d],u[f]]}for(let f of u){if(o.length>=i)break;if(o.some(_=>Math.hypot(_.x-f[0],_.z-f[2])<9))continue;let d=s[Math.floor(r()*s.length)],p=yh[d](),v=f[3]+(r()-.5)*.3,x=.25,m=f[0]+Math.sin(f[3])*x,y=f[2]+Math.cos(f[3])*x,b=[],M=Math.cos(v),R=Math.sin(v),S=Math.hypot(p.hw,p.hd)+n.cell;for(let _=Math.floor((y-S)/n.cell);_<=Math.floor((y+S)/n.cell);_++)for(let A=Math.floor((m-S)/n.cell);A<=Math.floor((m+S)/n.cell);A++){let w=(A+.5)*n.cell-m,C=(_+.5)*n.cell-y,L=w*M-C*R-(p.cx||0),T=w*R+C*M;Math.abs(L)<=p.hw&&Math.abs(T)<=p.hd&&b.push(_*n.n+A)}let g=b.length>0;for(let _ of b){let A=n.top[0][_],w=NaN;for(let C=0;C<n.L;C++)!isNaN(n.top[C][_])&&Math.abs(n.top[C][_]-f[1])<.25&&(w=C);if(isNaN(w)||n.cls[w][_]!==1){g=!1;break}}if(g){for(let _ of b)for(let A=0;A<n.L;A++)if(!isNaN(n.top[A][_])&&Math.abs(n.top[A][_]-f[1])<.25){let w=A+1<n.L&&!isNaN(n.bot[A+1][_])?n.bot[A+1][_]:99;n.top[A][_]=Math.min(w,f[1]+p.h),n.cls[A][_]=2}o.push({kind:d,x:m,y:f[1],z:y,ry:v})}}return o}var Mm={},yb=n=>Mm[n]||(Mm[n]=n==="metal"?$i("metal",{rough:.55,metal:.3}):n==="wood"?$i("wood"):n==="crate"?$i("crate"):n==="cloth"?$i("fabric",{rough:1}):n==="clay"?$i("plaster",{rough:.9}):new Gn({vertexColors:!0,roughness:.9}));function Sm(n){let e={};for(let i of n){let s=yh[i.kind]();for(let[r,o]of Object.entries(s))if(Array.isArray(o))for(let a of o){let l=a.clone(),c=l.attributes.position,h=new Float32Array(c.count*2);for(let u=0;u<c.count;u++)h[u*2]=(c.getX(u)+c.getZ(u))*1.5,h[u*2+1]=c.getY(u)*1.5;l.setAttribute("uv",new qt(h,2)),l.rotateY(i.ry),l.translate(i.x,i.y,i.z),(e[r]=e[r]||[]).push(l)}}let t=new Rt;for(let[i,s]of Object.entries(e)){let r=new Oe(yi(s),yb(i));r.castShadow=!0,r.receiveShadow=!0,t.add(r)}return t}var xt=n=>({auto:!1,pellets:1,hs:4,range:8192,rangeMod:.98,spread:.004,move:.12,kick:.6,sway:.4,kickCap:12,recover:9,scope:null,...n}),je={knife:xt({name:"Cuchillo",cat:"knife",side:"both",price:0,reward:1500,dmg:40,ap:.85,rpm:150,mag:0,reserve:0,speed:250,range:64,auto:!0}),glock:xt({name:"Glock-18",cat:"pistol",side:"T",price:200,reward:300,dmg:30,ap:.47,rpm:400,mag:20,reserve:120,reload:2.2,speed:240,rangeMod:.85,spread:.007,move:.05,kick:.9,sway:.4,kickCap:5}),usp:xt({name:"USP-S",cat:"pistol",side:"CT",price:200,reward:300,dmg:35,ap:.505,rpm:352,mag:12,reserve:24,reload:2.2,speed:240,rangeMod:.91,spread:.004,move:.045,kick:1.1,sway:.3,kickCap:5,silent:!0}),p2000:xt({name:"P2000",cat:"pistol",side:"CT",price:200,reward:300,dmg:35,ap:.505,rpm:352,mag:13,reserve:52,reload:2.2,speed:240,rangeMod:.91,spread:.005,move:.045,kick:1.1,sway:.3,kickCap:5}),dualies:xt({name:"Dual Berettas",cat:"pistol",side:"both",price:300,reward:300,dmg:38,ap:.575,rpm:500,mag:30,reserve:120,reload:3.8,speed:240,rangeMod:.79,spread:.009,move:.05,kick:1,sway:.5,kickCap:6}),p250:xt({name:"P250",cat:"pistol",side:"both",price:300,reward:300,dmg:38,ap:.64,rpm:400,mag:13,reserve:26,reload:2.2,speed:240,rangeMod:.85,spread:.007,move:.05,kick:1.3,sway:.4,kickCap:6}),tec9:xt({name:"Tec-9",cat:"pistol",side:"T",price:500,reward:300,dmg:33,ap:.903,rpm:500,mag:18,reserve:90,reload:2.5,speed:240,rangeMod:.831,spread:.009,move:.04,kick:1.2,sway:.5,kickCap:7}),fiveseven:xt({name:"Five-SeveN",cat:"pistol",side:"CT",price:500,reward:300,dmg:32,ap:.9115,rpm:400,mag:20,reserve:100,reload:2.2,speed:240,rangeMod:.81,spread:.007,move:.045,kick:1.1,sway:.4,kickCap:6}),cz75:xt({name:"CZ75-Auto",cat:"pistol",side:"both",price:500,reward:100,dmg:31,ap:.776,rpm:600,mag:12,reserve:12,reload:2.7,speed:240,rangeMod:.85,spread:.008,move:.05,kick:1.1,sway:.6,kickCap:8,auto:!0}),deagle:xt({name:"Desert Eagle",cat:"pistol",side:"both",price:700,reward:300,dmg:53,ap:.932,rpm:267,mag:7,reserve:35,reload:2.2,speed:230,rangeMod:.81,spread:.006,move:.1,kick:3.4,sway:.6,kickCap:8,recover:7}),r8:xt({name:"R8 Revolver",cat:"pistol",side:"both",price:600,reward:300,dmg:86,ap:.932,rpm:120,mag:8,reserve:8,reload:2.3,speed:220,rangeMod:.94,spread:.006,move:.1,kick:3.6,sway:.4,kickCap:8}),mac10:xt({name:"MAC-10",cat:"smg",side:"T",price:1050,reward:600,dmg:29,ap:.575,rpm:800,mag:30,reserve:100,reload:2.6,speed:240,rangeMod:.8,auto:!0,spread:.009,move:.025,kick:.6,sway:.7,kickCap:7}),mp9:xt({name:"MP9",cat:"smg",side:"CT",price:1250,reward:600,dmg:26,ap:.6,rpm:857,mag:30,reserve:120,reload:2.1,speed:240,rangeMod:.87,auto:!0,spread:.008,move:.025,kick:.55,sway:.6,kickCap:7}),mp7:xt({name:"MP7",cat:"smg",side:"both",price:1500,reward:600,dmg:29,ap:.625,rpm:750,mag:30,reserve:120,reload:3.1,speed:220,rangeMod:.85,auto:!0,spread:.007,move:.03,kick:.5,sway:.5,kickCap:7}),mp5:xt({name:"MP5-SD",cat:"smg",side:"both",price:1500,reward:600,dmg:27,ap:.625,rpm:750,mag:30,reserve:120,reload:2.6,speed:235,rangeMod:.85,auto:!0,spread:.007,move:.025,kick:.45,sway:.5,kickCap:6,silent:!0}),ump:xt({name:"UMP-45",cat:"smg",side:"both",price:1200,reward:600,dmg:35,ap:.65,rpm:666,mag:25,reserve:100,reload:3.5,speed:230,rangeMod:.75,auto:!0,spread:.008,move:.03,kick:.6,sway:.5,kickCap:7}),p90:xt({name:"P90",cat:"smg",side:"both",price:2350,reward:300,dmg:26,ap:.69,rpm:857,mag:50,reserve:100,reload:3.3,speed:230,rangeMod:.86,auto:!0,spread:.008,move:.03,kick:.45,sway:.6,kickCap:7}),bizon:xt({name:"PP-Bizon",cat:"smg",side:"both",price:1400,reward:600,dmg:27,ap:.575,rpm:750,mag:64,reserve:120,reload:2.4,speed:240,rangeMod:.8,auto:!0,spread:.009,move:.03,kick:.45,sway:.6,kickCap:6}),nova:xt({name:"Nova",cat:"heavy",side:"both",price:1050,reward:900,dmg:26,ap:.5,rpm:68,mag:8,reserve:32,reload:4,speed:220,rangeMod:.7,pellets:9,spread:.06,move:.04,kick:3,sway:.5,range:3e3}),xm1014:xt({name:"XM1014",cat:"heavy",side:"both",price:2e3,reward:900,dmg:20,ap:.8,rpm:171,mag:7,reserve:32,reload:3.5,speed:215,rangeMod:.7,pellets:6,spread:.065,move:.04,kick:2.5,sway:.6,range:3500}),sawedoff:xt({name:"Sawed-Off",cat:"heavy",side:"T",price:1100,reward:900,dmg:32,ap:.75,rpm:71,mag:7,reserve:32,reload:3.6,speed:210,rangeMod:.45,pellets:8,spread:.09,move:.04,kick:3,sway:.6,range:1400}),mag7:xt({name:"MAG-7",cat:"heavy",side:"CT",price:1300,reward:900,dmg:30,ap:.75,rpm:71,mag:5,reserve:32,reload:2.5,speed:225,rangeMod:.45,pellets:8,spread:.05,move:.04,kick:3,sway:.5,range:1400}),m249:xt({name:"M249",cat:"heavy",side:"both",price:5200,reward:300,dmg:32,ap:.8,rpm:750,mag:100,reserve:200,reload:5.7,speed:195,rangeMod:.97,auto:!0,spread:.009,move:.15,kick:.6,sway:.8,kickCap:9}),negev:xt({name:"Negev",cat:"heavy",side:"both",price:1700,reward:300,dmg:35,ap:.71,rpm:800,mag:150,reserve:300,reload:5.7,speed:150,rangeMod:.97,auto:!0,spread:.012,move:.15,kick:.7,sway:.6,kickCap:6}),galil:xt({name:"Galil AR",cat:"rifle",side:"T",price:1800,reward:300,dmg:30,ap:.775,rpm:666,mag:35,reserve:90,reload:3,speed:215,auto:!0,spread:.005,move:.14,kick:.62,sway:.5,kickCap:10}),famas:xt({name:"FAMAS",cat:"rifle",side:"CT",price:2050,reward:300,dmg:30,ap:.7,rpm:666,mag:25,reserve:90,reload:3.3,speed:220,auto:!0,spread:.005,move:.14,kick:.6,sway:.5,kickCap:10}),ak47:xt({name:"AK-47",cat:"rifle",side:"T",price:2700,reward:300,dmg:36,ap:.775,rpm:600,mag:30,reserve:90,reload:2.5,speed:215,auto:!0,spread:.0049,move:.16,kick:.82,sway:.75,kickCap:13}),m4a4:xt({name:"M4A4",cat:"rifle",side:"CT",price:3100,reward:300,dmg:33,ap:.7,rpm:666,mag:30,reserve:90,reload:3.1,speed:225,auto:!0,spread:.0042,move:.15,kick:.68,sway:.6,kickCap:11}),m4a1s:xt({name:"M4A1-S",cat:"rifle",side:"CT",price:2900,reward:300,dmg:38,ap:.7,rpm:600,mag:20,reserve:80,reload:3.1,speed:225,auto:!0,spread:.0035,move:.15,kick:.58,sway:.45,kickCap:9,silent:!0}),sg553:xt({name:"SG 553",cat:"rifle",side:"T",price:3e3,reward:300,dmg:30,ap:1,rpm:545,mag:30,reserve:90,reload:2.8,speed:210,auto:!0,spread:.0045,move:.15,kick:.72,sway:.6,kickCap:11,scope:[1.8]}),aug:xt({name:"AUG",cat:"rifle",side:"CT",price:3300,reward:300,dmg:28,ap:.9,rpm:600,mag:30,reserve:90,reload:3.8,speed:220,auto:!0,spread:.004,move:.15,kick:.62,sway:.5,kickCap:10,scope:[1.8]}),ssg08:xt({name:"SSG 08",cat:"sniper",side:"both",price:1700,reward:300,dmg:88,ap:.85,rpm:48,mag:10,reserve:90,reload:3.7,speed:230,rangeMod:.99,spread:.035,scoped:.0012,move:.12,kick:3,sway:.2,kickCap:4,scope:[3.6,9]}),awp:xt({name:"AWP",cat:"sniper",side:"both",price:4750,reward:100,dmg:115,ap:.975,rpm:41,mag:5,reserve:30,reload:3.7,speed:200,rangeMod:.99,spread:.08,scoped:9e-4,move:.2,kick:4.5,sway:.2,kickCap:5,scope:[2.25,9]}),g3sg1:xt({name:"G3SG1",cat:"sniper",side:"T",price:5e3,reward:300,dmg:80,ap:.825,rpm:240,mag:20,reserve:90,reload:4.7,speed:215,rangeMod:.98,auto:!0,spread:.05,scoped:.0018,move:.2,kick:1.6,sway:.4,kickCap:6,scope:[2.25,9]}),scar20:xt({name:"SCAR-20",cat:"sniper",side:"CT",price:5e3,reward:300,dmg:80,ap:.825,rpm:240,mag:20,reserve:90,reload:3.1,speed:215,rangeMod:.98,auto:!0,spread:.05,scoped:.0018,move:.2,kick:1.6,sway:.4,kickCap:6,scope:[2.25,9]}),zeus:xt({name:"Zeus x27",cat:"equip",side:"both",price:200,reward:0,dmg:500,ap:1,rpm:30,mag:1,reserve:0,reload:0,speed:245,range:183,spread:.01,move:.02,kick:1}),vest:{name:"Chaleco",cat:"gear",side:"both",price:650},vesthelm:{name:"Chaleco + Casco",cat:"gear",side:"both",price:1e3},defuser:{name:"Kit de desactivaci\xF3n",cat:"gear",side:"CT",price:400},he:{name:"Granada HE",cat:"grenade",side:"both",price:300,reward:300},flash:{name:"Flashbang",cat:"grenade",side:"both",price:200,reward:300,max:2},smoke:{name:"Humo",cat:"grenade",side:"both",price:300,reward:300},molotov:{name:"Molotov",cat:"grenade",side:"T",price:400,reward:300},incendiary:{name:"Incendiaria",cat:"grenade",side:"CT",price:500,reward:300},decoy:{name:"Se\xF1uelo",cat:"grenade",side:"both",price:50,reward:300},c4:{name:"C4",cat:"c4",side:"T",price:0}};for(let[n,e]of Object.entries(je))e.id=n;var Nf=[{name:"Equipo",items:{T:["vest","vesthelm","zeus"],CT:["vest","vesthelm","zeus","defuser"]}},{name:"Pistolas",items:{T:["glock","p250","dualies","tec9","deagle"],CT:["usp","p250","dualies","fiveseven","deagle"]}},{name:"Intermedias",items:{T:["mac10","mp7","nova","xm1014","p90"],CT:["mp9","mp7","nova","xm1014","p90"]}},{name:"Rifles",items:{T:["galil","ak47","sg553","ssg08","awp"],CT:["famas","m4a4","aug","ssg08","awp"]}},{name:"Granadas",items:{T:["flash","smoke","he","molotov","decoy"],CT:["flash","smoke","he","incendiary","decoy"]}}],Tm={vest:["Protege el cuerpo","Reduce el da\xF1o de las balas"],vesthelm:["Chaleco y casco","Te salva de muchos tiros a la cabeza"],zeus:["Descarga el\xE9ctrica de un solo uso","Mata de cerca"],defuser:["Desactiv\xE1s la bomba en 5 segundos"],glock:["Pistola b\xE1sica de los T","Buena movi\xE9ndose"],usp:["Pistola b\xE1sica de los CT","Con silenciador, muy precisa"],p250:["Barata y fuerte","Atraviesa chalecos"],dualies:["Dos pistolas","Cargador grande"],tec9:["Autom\xE1tica liviana","Muy fuerte de cerca"],fiveseven:["Precisa y r\xE1pida","Buena contra chalecos"],deagle:["Un tiro a la cabeza alcanza","Mucho retroceso"],mac10:["Subfusil barato","Premio por baja $600"],mp9:["Subfusil de los CT","Premio por baja $600"],mp7:["Subfusil equilibrado","Buena precisi\xF3n"],nova:["Escopeta de bombeo","Letal de cerca"],xm1014:["Escopeta autom\xE1tica","Mucho da\xF1o en poco tiempo"],p90:["Cargador de 50","Ideal para correr"],galil:["Rifle barato de los T"],famas:["Rifle barato de los CT"],ak47:["Un tiro a la cabeza mata","El rifle de los T"],m4a4:["Rifle preciso de los CT"],sg553:["Rifle con mira"],aug:["Rifle con mira"],ssg08:["Francotirador liviano","Se mueve r\xE1pido"],awp:["Mata de un tiro al cuerpo","Lento al moverse"],flash:["Ciega a los que la miran"],smoke:["Tapa la vista 18 segundos","Apaga el fuego"],he:["Explota y hace da\xF1o"],molotov:["Fuego en el piso por 7 segundos"],incendiary:["Fuego en el piso por 7 segundos"],decoy:["Hace ruido de disparos"]},Hs=n=>{let e=je[n].cat;return e==="pistol"?2:e==="knife"?3:e==="grenade"?4:e==="c4"?5:e==="equip"?3:1},bn={start:800,max:16e3,winElim:3250,winBombT:3500,winDefuse:3500,winTime:3250,loss:[1400,1900,2400,2900,3400],plantBonus:800,plantReward:300,defuseReward:300,teamKill:-300},vb={head:4,chest:1,stomach:1.25,arm:1,leg:.75};function Df(n,e,t,i,s,r=4){let o=n*(t==="head"?r:vb[t]),a=0,l=t!=="leg"&&(t!=="head"||s);if(i>0&&l){let c=o*e;a=(o-c)*.5,a>i&&(a=i,c=o-i*2),o=c}return{hp:Math.max(1,Math.round(o)),armor:Math.round(a)}}var yo=[{name:"Pistolas",items:{T:["glock","dualies","p250","tec9","deagle","cz75"],CT:["usp","dualies","p250","fiveseven","deagle","cz75"]}},{name:"Pesadas",items:{T:["nova","xm1014","sawedoff","m249","negev"],CT:["nova","xm1014","mag7","m249","negev"]}},{name:"Subfusiles",items:{T:["mac10","mp7","ump","p90","bizon","mp5"],CT:["mp9","mp7","ump","p90","bizon","mp5"]}},{name:"Rifles",items:{T:["galil","ak47","ssg08","sg553","awp","g3sg1"],CT:["famas","m4a4","ssg08","aug","awp","scar20"]}},{name:"Equipo",items:{T:["vest","vesthelm","zeus"],CT:["vest","vesthelm","zeus","defuser"]}},{name:"Granadas",items:{T:["molotov","decoy","flash","he","smoke"],CT:["incendiary","decoy","flash","he","smoke"]}}];var Uf=.0254,Ht={g:800*.4*Uf,speed:750*.9*Uf,step:1/64,fuse:{he:1.6,flash:1.6},molAir:2,smokeLife:18,fireLife:7,decoyLife:15,smokeR:3.6,fireR:2.6,heR:350*Uf,heDmg:98};function Ff(n,e,t,i,s,r,o,a,l,c,h=1){let u=Ht.speed*(.3+.7*h),f=a+10*Math.PI/180*(1-Math.abs(a)/(Math.PI/2)),d=-Math.sin(o)*Math.cos(f),p=Math.sin(f),v=-Math.cos(o)*Math.cos(f);return{type:n,owner:e,team:t,x:i+d*.1,y:s+p*.1-.05,z:r+v*.1,vx:d*u+l*1.25,vy:p*u,vz:v*u+c*1.25,t:0,acc:0,rest:!1,state:"fly",life:0}}function kf(n,e,t,i){for(e.acc+=t;e.acc>=Ht.step;){e.acc-=Ht.step;let s=Ht.step;if(e.state==="fly"){if(e.t+=s,!e.rest){e.vy-=Ht.g*s;let o=Math.hypot(e.vx,e.vy,e.vz),a=o*s;if(a>1e-5){let l=Ni(n,e.x,e.y,e.z,e.vx/o,e.vy/o,e.vz/o,a+.04);if(l&&l.t<=a+.04){let c=Math.max(0,l.t-.04);e.x+=e.vx/o*c,e.y+=e.vy/o*c,e.z+=e.vz/o*c;let h=[l.nx,l.ny,l.nz];if((e.type==="molotov"||e.type==="incendiary")&&h[1]>.7){vh(n,e,i);continue}let u=e.vx*h[0]+e.vy*h[1]+e.vz*h[2];e.vx-=2*u*h[0],e.vy-=2*u*h[1],e.vz-=2*u*h[2],e.vx*=.45,e.vy*=.45,e.vz*=.45,h[1]>.7&&(e.vx*=.75,e.vz*=.75,Math.abs(e.vy)<1.2&&(e.vy=0,Math.hypot(e.vx,e.vz)<.25&&(e.rest=!0))),o>2&&i.push({type:"bounce",g:e})}else e.x+=e.vx*s,e.y+=e.vy*s,e.z+=e.vz*s}if(!e.rest&&e.vy===0){let l=Os(n,e.x,e.z,e.y+.3);l>-1e8&&e.y-l<.06?(e.y=l+.03,e.vx*=Math.max(0,1-s*2.5),e.vz*=Math.max(0,1-s*2.5),Math.hypot(e.vx,e.vz)<.2&&(e.rest=!0)):e.vy=-.01}if(e.y<-40){e.state="done",i.push({type:"end",g:e});continue}}let r=Ht.fuse[e.type];r&&e.t>=r?vh(n,e,i):(e.type==="molotov"||e.type==="incendiary")&&e.t>=Ht.molAir?(e.air=!0,vh(n,e,i)):(e.type==="smoke"||e.type==="decoy")&&e.rest&&e.t>.9&&vh(n,e,i)}else e.state==="active"&&(e.life-=s,e.life<=0&&(e.state="done",i.push({type:"end",g:e})))}}function vh(n,e,t){if(e.state="active",e.vx=e.vy=e.vz=0,e.type==="smoke")e.life=Ht.smokeLife;else if(e.type==="decoy")e.life=Ht.decoyLife;else if(e.type==="molotov"||e.type==="incendiary")if(e.air)e.life=.01;else{e.life=Ht.fireLife;let i=Os(n,e.x,e.z,e.y+.5);i>-1e8&&(e.y=i)}else e.life=.01;t.push({type:"det",g:e})}function _h(n,e,t,i,s,r,o){for(let a of n){if(a.type!=="smoke"||a.state!=="active"||a.life<.6)continue;let l=Ht.smokeR*Math.min(1,(Ht.smokeLife-a.life)*1.5+.2),c=a.x,h=a.y+1.2,u=a.z,f=s-e,d=r-t,p=o-i,v=f*f+d*d+p*p,x=v>0?((c-e)*f+(h-t)*d+(u-i)*p)/v:0;x=Math.max(0,Math.min(1,x));let m=e+f*x-c,y=(t+d*x-h)*1.4,b=i+p*x-u;if(m*m+y*y+b*b<l*l)return!0}return!1}function wm(n,e,t,i){for(let s of n)if(!(s.type!=="molotov"&&s.type!=="incendiary"||s.state!=="active"||s.air)&&Math.abs(t-s.y)<1.2&&Math.hypot(e-s.x,i-s.z)<Ht.fireR)return s;return null}var Vt={freeze:15,live:115,buy:20,post:6,bomb:40,plant:3.2,defuse:10,kit:5,over:12},Am={comp:{name:"Competitivo",sub:"Bomba, econom\xEDa y tiempo extra"},casual:{name:"Casual",sub:"M\xE1s plata, chaleco gratis, rondas cortas"},dm:{name:"Deathmatch",sub:"Reaparec\xE9s al morir \xB7 10 min \xB7 armas gratis"},ar:{name:"Arms Race",sub:"Cada baja te da el arma siguiente \xB7 gan\xE1s con el cuchillo"},retake:{name:"Retakes",sub:"La bomba ya est\xE1 plantada: los CT recuperan el sitio"},practice:{name:"Pr\xE1ctica",sub:"Plata infinita, sin tiempo, impactos y trayectorias visibles"}},Zi=n=>n==="dm"||n==="ar",yr=[["ak47","m4a4"],["galil","famas"],["sg553","aug"],["awp","awp"],["p90","p90"],["ump","ump"],["mac10","mp9"],["mp7","mp7"],["xm1014","xm1014"],["nova","nova"],["negev","negev"],["ssg08","ssg08"],["deagle","deagle"],["tec9","fiveseven"],["p250","p250"],["glock","usp"],["knife","knife"]],zf={rapida:{win:5,max:8,name:"R\xE1pida"},corta:{win:9,max:16,name:"Corta"},comp:{win:13,max:24,name:"Competitiva"}},Em=["Toto","Lalo","Pipo","Chino","Fede","Nacho","Rulo","Coco","Tincho","Beto","Pato","Quique"],vr=(n,e)=>(n^e)===0?"T":"CT",Of=n=>n==="T"?"glock":"usp";function Bf(n){let e={},t=!0,i=0,s=[1,1],r=null,o=new Map,a=0,l=0,c=!1,h=()=>n.cfg.mode||"comp",u=new Map,f=[1,1],d=0,p={0:new Set,1:new Set},v=1;e.setup=E=>{n.players.clear();let F=n.cfg,G=[0,0],O=E.slice().sort((K,J)=>K.slot-J.slot);for(let K of O)(K.pref===0||K.pref===1)&&G[K.pref]++;for(let K of O){let J=K.pref;J!==0&&J!==1&&(J=G[0]<=G[1]?0:1,G[J]++);let ie=x(K.id,K.name,!1,J);ie.skT=0,ie.skCT=0,ie.fin=0,n.players.set(K.id,ie)}let N=F.bots?Math.max(G[0],G[1],F.size||5):0,V=0;for(let K=0;K<2;K++)for(let J=G[K];J<N;J++){let ie="bot"+V++,ue=x(ie,Em[V%Em.length]+" (bot)",!0,K);ue.skT=0,ue.skCT=0,ue.fin=0,n.players.set(ie,ue)}n.round=0,n.score=[0,0],n.half=0,n.ot=0,s=[1,1],c=!1,u.clear(),f=[h()==="comp"?3:1,h()==="comp"?3:1],d=0,p={0:new Set,1:new Set};for(let K of n.players.values())K.money=h()==="casual"?1e3:h()==="practice"||Zi(h())?16e3:bn.start,K.arl=0;for(let K of n.players.values())K.team=vr(K.grp,0);n.spawns={T:m("T"),CT:m("CT")}};function x(E,F,G,O){return{id:E,name:F,bot:G,grp:O,team:"T",x:0,y:0,z:0,yaw:0,pitch:0,vx:0,vz:0,duck:0,hp:100,ar:0,helm:!1,money:bn.start,alive:!1,k:0,d:0,a:0,mvp:0,dmgR:0,dmgT:0,hsK:0,rounds:0,arl:0,inv:{p:null,s:null,g:[],c4:!1,kit:!1,zeus:!1,v:1,pa:null,sa:null},god:!1}}function m(E){let F=n.nav,G=ri(F,E==="T"?16:32),O=he=>{let de=Math.floor(he/F.N),pe=he%F.N,ye=pe%F.m,Ge=Math.floor(pe/F.m),Le=F.H[de][pe];for(let et=-2;et<=2;et++)for(let at=-2;at<=2;at++){let dt=ye+at,Q=Ge+et;if(dt<0||Q<0||dt>=F.m||Q>=F.m)return!1;let Yt=F.H[de][Q*F.m+dt];if(isNaN(Yt)||Math.abs(Yt-Le)>.35)return!1}return!0},N=G.filter(O);N.length<10&&(N=G);let V=0,K=0,J=N.map(he=>F.pos(he));for(let he of J)V+=he[0],K+=he[2];V/=J.length,K/=J.length,J.sort((he,de)=>Math.hypot(he[0]-V,he[2]-K)-Math.hypot(de[0]-V,de[2]-K));let ie=[];for(let he of[2,1.5,1.1]){for(let de of J){if(ie.length>=12)break;ie.every(pe=>Math.hypot(pe[0]-de[0],pe[2]-de[2])>he)&&ie.push(de)}if(ie.length>=10)break}let ue=n.info.zones,Te=n.W.cell,De=he=>{let de=ue[he];return F.nearest((de[0]+de[2])/2*Te,99,(de[1]+de[3])/2*Te)},We=[De("A"),De("B")].filter(he=>he>=0),ae=he=>{let de=F.nearest(he[0],he[1],he[2]),pe=null;for(let Le of We){let et=Bs(F,de,Le);et&&(!pe||et.length<pe.length)&&(pe=et)}if(!pe||pe.length<2)return Math.atan2(-(V-he[0]),-(K-he[2]));let ye=0,Ge=pe[Math.min(pe.length-1,3)];for(let Le=1;Le<pe.length&&(ye+=Math.hypot(pe[Le][0]-pe[Le-1][0],pe[Le][2]-pe[Le-1][2]),!(ye>25));Le++)Q0(n.W,he[0],he[1]+1.6,he[2],pe[Le][0],pe[Le][1]+1.2,pe[Le][2])&&(Ge=pe[Le]);return Math.atan2(-(Ge[0]-he[0]),-(Ge[2]-he[2]))};return{pts:ie.map(he=>[he[0],he[1],he[2],ae(he)]),cx:V,cz:K}}e.adopt=()=>{n.spawns={T:m("T"),CT:m("CT")}},e.buyZone=E=>{if(h()==="practice"||h()==="dm")return!0;let F=n.spawns[E.team];return Math.hypot(E.x-F.cx,E.z-F.cz)<22||gi(n.W,E.x,E.z)&(E.team==="T"?16:32)},e.liveTime=()=>y(),e.canBuyTime=()=>{let E=h();return E==="ar"||E==="retake"?!1:E==="practice"||E==="dm"?n.phase==="freeze"||n.phase==="live":n.phase==="freeze"||n.phase==="live"&&Vt.live-n.timeLeft<Vt.buy&&n.bomb.state!=="planted"};let y=()=>{let E=h();return E==="dm"?600:E==="ar"?900:E==="practice"?3600:E==="casual"?135:E==="retake"?Vt.bomb:Vt.live},b=()=>{let E=h();return E==="casual"?6:E==="retake"?4:Zi(E)?3:E==="practice"?2:Vt.freeze};e.startMatch=()=>{n.phase="freeze",M(!0)};function M(E){n.round++,n.phase="freeze",n.timeLeft=b(),d&&(n.timeLeft+=30,n.emit("ev",{t:"timeout",team:d}),d=0),n.drops.clear(),n.nades.length=0,o.clear(),r=null,u.clear(),p={0:new Set,1:new Set},n.bomb={state:"carried",carrier:null,x:0,y:0,z:0,t:0};let F={T:0,CT:0},G={},O=[...n.players.values()].sort(()=>Math.random()-.5);for(let V of O){V.team=vr(V.grp,n.half),!V.alive||E?(V.inv={p:null,s:Of(V.team),g:[],c4:!1,kit:!1,zeus:!1,v:(V.inv.v||0)+1,pa:null,sa:null},!V.alive&&!E&&(V.ar=0,V.helm=!1),E&&(V.ar=0,V.helm=!1)):(V.inv.c4=!1,V.team==="T"&&(V.inv.kit=!1),V.inv.pa=V.inv.sa=null,V.inv.v++),V.hp=100,V.alive=!0,V.dmgR=0,V.dmgBy={},V.rounds++,h()==="casual"&&(V.ar=100,V.helm=!0,V.team==="CT"&&(V.inv.kit=!0)),h()==="practice"&&(V.money=bn.max),h()==="ar"&&w(V);let K=n.spawns[V.team].pts,J=F[V.team]++%K.length;G[V.id]=K[J]}let N=O.filter(V=>V.team==="T");if(h()==="retake")C(O,G);else if(!Zi(h())&&N.length){let V=N[Math.floor(Math.random()*N.length)];V.inv.c4=!0,n.bomb.carrier=V.id}t=!0,n.emit("rs",{pos:G,round:n.round}),n.emit("st",e.snapshot())}function R(E,F){if(n.phase!=="live"&&n.phase!=="freeze")return;n.phase="post",n.timeLeft=Vt.post;let G=[...n.players.values()].find(ie=>ie.team===E)?.grp??(E===vr(0,n.half)?0:1);n.score[G]++;let O=F==="bomb"?bn.winBombT:F==="defuse"?bn.winDefuse:F==="time"?bn.winTime:bn.winElim,N=1-G;s[N]=Math.min(5,s[N]+1),s[G]=Math.max(0,s[G]-1);let V=bn.loss[Math.max(0,s[N]-1)];for(let ie of n.players.values())if(ie.grp===G)A(ie,O);else{if(F==="time"&&ie.team==="T"&&ie.alive)continue;A(ie,V+(ie.team==="T"&&n.bomb.state==="defused"?bn.plantBonus:0))}let K=null,J=-1;for(let ie of n.players.values())if(ie.grp===G){let ue=(ie.rk||0)*10+ie.dmgR/100+(ie.id===r&&F==="bomb"?30:0)+(ie.defused?30:0);ue>J&&(J=ue,K=ie)}K&&K.mvp++;for(let ie of n.players.values())ie.rk=0,ie.defused=!1;t=!0,n.emit("ev",{t:"end",win:E,reason:F,score:n.score.slice(),mvp:K&&K.id,loss:V})}function S(){let E=zf[n.cfg.len];if(Zi(h())){g();return}let F=E.win+3*(n.ot||0),G=E.max+6*(n.ot||0);if(h()==="comp"&&n.round>=G&&n.score[0]===n.score[1]&&n.score[0]>=E.max/2+3*(n.ot||0)){n.ot=(n.ot||0)+1;for(let N of n.players.values())N.money=1e4,N.alive=!1,N.ar=0,N.helm=!1;s=[1,1],n.emit("ev",{t:"ot",n:n.ot}),M(!0);return}if(n.score[0]>=F||n.score[1]>=F||n.round>=G){g();return}if(n.ot&&(n.round-E.max)%3===0){n.half=1-n.half,n.emit("ev",{t:"half"});for(let N of n.players.values())N.alive=!1;M(!0);for(let N of n.players.values())N.money=Math.max(N.money,1e4);return}if(n.round===E.max/2){n.half=1,s=[1,1];for(let N of n.players.values())N.money=h()==="casual"?1e3:h()==="practice"?bn.max:bn.start,N.alive=!1,N.ar=0,N.helm=!1;n.emit("ev",{t:"half"}),M(!0);return}M(!1)}function g(){{n.phase="over",n.timeLeft=Vt.over,l=Vt.over;let E;if(Zi(h())){let G=[0,0];for(let O of n.players.values())G[O.grp]+=O.k;n.score=G,E=G[0]>G[1]?0:G[1]>G[0]?1:-1,h()==="ar"&&n.arWinner&&(E=n.players.get(n.arWinner)?.grp??E)}else E=n.score[0]>n.score[1]?0:n.score[1]>n.score[0]?1:-1;let F=[...n.players.values()].map(G=>({id:G.id,n:G.name,g:G.grp,t:G.team,k:G.k,d:G.d,a:G.a,mvp:G.mvp,adr:Math.round(G.dmgT/Math.max(1,G.rounds)),hs:G.k?Math.round(G.hsK/G.k*100):0}));n.emit("ev",{t:"over",wg:E,score:n.score.slice(),stats:F,mode:h()}),t=!0,setTimeout(()=>{if(c)return;c=!0;let G=[...n.players.values()].filter(N=>!N.bot&&(E<0||N.grp===E)).map(N=>N.id),O=E<0?"Empate "+n.score.join(" \u2013 "):"\u{1F451} Ganan "+_(E)+" "+Math.max(...n.score)+" \u2013 "+Math.min(...n.score);n.end(G,O)},Vt.over*1e3)}}let _=E=>{let F=[...n.players.values()].filter(G=>G.grp===E&&!G.bot).map(G=>G.name);return F.length?F.slice(0,3).join(", "):vr(E,n.half)==="T"?"los Terroristas":"los Contraterroristas"};function A(E,F){E.money=Math.max(0,Math.min(h()==="casual"?1e4:bn.max,E.money+F)),h()==="practice"&&(E.money=bn.max)}function w(E){let F=yr[Math.min(yr.length-1,E.arl||0)],G=F[E.team==="T"?0:1];E.inv.p=null,E.inv.s=null,E.inv.g=[],E.inv.zeus=!1,G!=="knife"&&(Hs(G)===1?E.inv.p=G:E.inv.s=G),E.inv.pa=E.inv.sa=null,E.inv.v++,E.ar=100,E.helm=!0}function C(E,F){let G=Math.random()<.5?"A":"B",O=ri(n.nav,G==="A"?4:8);if(!O.length)return;let N=n.nav.pos(O[Math.floor(O.length/2+(Math.random()-.5)*O.length*.4)]);Object.assign(n.bomb,{state:"planted",carrier:null,x:N[0],y:N[1],z:N[2],t:Vt.bomb,site:G});let V=[["ak47","deagle"],["galil","p250"],["awp","glock"],["mp9","tec9"],["ak47","glock"]],K=[["m4a4","usp"],["famas","fiveseven"],["awp","usp"],["mp9","p250"],["m4a1s","deagle"]];for(let J of E){let ie=(J.team==="T"?V:K)[Math.floor(Math.random()*5)];if(J.inv.p=ie[0],J.inv.s=ie[1],J.inv.g=Math.random()<.6?[["smoke","flash","he",J.team==="T"?"molotov":"incendiary"][Math.floor(Math.random()*4)]]:[],J.inv.kit=J.team==="CT"&&Math.random()<.5,J.ar=100,J.helm=!0,J.inv.v++,J.team==="T"){let ue=n.nav.pos(O[Math.floor(Math.random()*O.length)]);F[J.id]=[ue[0],ue[1],ue[2],Math.random()*6.28]}}n.emit("ev",{t:"plant",p:null,site:G,retake:!0})}function L(E){let F=n.nav,G=[...n.players.values()].filter(K=>K.alive&&K.team!==E.team),O=null,N=-1,V=[...n.spawns.T.pts,...n.spawns.CT.pts];for(let K=0;K<30;K++){let J=Math.floor(Math.random()*F.L*F.N);if(F.main[J]){let ie=F.pos(J);V.push([ie[0],ie[1],ie[2],Math.random()*6.28])}}for(let K of V){let J=99;for(let ie of G)J=Math.min(J,Math.hypot(ie.x-K[0],ie.z-K[2]));J>12&&J<60&&J>N-4+Math.random()*8&&(N=J,O=K)}O=O||V[Math.floor(Math.random()*V.length)],E.hp=100,E.alive=!0,E.dmgBy={},E.ar=100,E.helm=!0,h()==="ar"?w(E):E.inv={...E.inv,p:E.inv.p||(E.team==="T"?"ak47":"m4a4"),s:E.inv.s||Of(E.team),g:[],v:(E.inv.v||0)+1,pa:null,sa:null},E.x=O[0],E.y=O[1],E.z=O[2],t=!0,n.emit("ev",{t:"resp",id:E.id,pos:O})}function T(){if(n.phase!=="live"||Zi(h())||h()==="practice")return;let E=0,F=0,G=0,O=0;for(let N of n.players.values())N.team==="T"?(G++,N.alive&&E++):(O++,N.alive&&F++);if(O&&F===0)return R("T","elim");if(G&&E===0&&n.bomb.state!=="planted")return R("CT","elim")}e.tick=E=>{if(n.phase!=="lobby"){if(n.timeLeft-=E,n.phase==="freeze"&&n.timeLeft<=0)n.phase="live",n.timeLeft=n.bomb.state==="planted"?n.bomb.t:y(),t=!0,n.emit("ev",{t:"go"});else if(n.phase==="live"){let F=n.bomb;if(F.state==="planted"){F.t-=E,n.timeLeft=F.t;for(let[G,O]of o){let N=n.players.get(G);if(!N||!N.alive||Math.hypot(N.x-F.x,N.z-F.z)>2.2){o.delete(G);continue}N.bot&&n.time-O.t0>=O.dur&&q(N)}F.t<=0&&F.state==="planted"&&B()}else n.timeLeft<=0&&(Zi(h())?(n.phase="post",n.timeLeft=.1):R("CT","time"));for(let[G,O]of u){let N=n.players.get(G),V=O-E;if(!N){u.delete(G);continue}V<=0?(u.delete(G),L(N)):u.set(G,V)}if(a-=E,a<=0){a=.25;for(let G of n.players.values()){if(!G.alive)continue;let O=wm(n.nades,G.x,G.y,G.z);O&&e.damage(G.id,O.owner,10,"fire",O.type,{raw:!0})}}}else n.phase==="post"&&n.timeLeft<=0&&S();i-=E,(t&&i<=0||i<-2)&&(i=.1,t=!1,n.emit("st",e.snapshot()))}},e.markDirty=()=>{t=!0},e.snapshot=()=>({ph:n.phase,tl:+n.timeLeft.toFixed(2),r:n.round,sc:n.score,hf:n.half,ot:n.ot||0,md:h(),b:{s:n.bomb.state,c:n.bomb.carrier,x:+n.bomb.x.toFixed(2),y:+n.bomb.y.toFixed(2),z:+n.bomb.z.toFixed(2),t:+n.bomb.t.toFixed(2),site:n.bomb.site},dr:[...n.drops.values()].map(E=>[E.id,E.w,+E.x.toFixed(2),+E.y.toFixed(2),+E.z.toFixed(2),E.ammo]),p:[...n.players.values()].map(E=>[E.id,E.name,E.bot?1:0,E.grp,E.team,E.hp,E.ar,E.helm?1:0,E.money,E.alive?1:0,E.k,E.d,E.a,E.mvp,E.inv,E.god?1:0,E.skT|0,E.skCT|0,E.fin||0,E.arl||0,E.hsK||0,E.dmgT||0,E.rounds||0])}),e.damage=(E,F,G,O,N,V={})=>{let K=n.players.get(E),J=n.players.get(F);if(!K||!K.alive||n.phase==="over"||J&&J!==K&&J.team===K.team||K.god)return;let ie,ue=0;if(V.raw)ie=Math.round(G);else{let Te=je[N],De=Df(G,V.ap??(Te?.ap||.5),O,K.ar,K.helm);ie=De.hp,ue=De.armor}ie=Math.min(ie,K.hp),K.hp-=ie,K.ar=Math.max(0,K.ar-ue),J&&J!==K&&(J.dmgR+=ie,J.dmgT=(J.dmgT||0)+ie,K.dmgBy[F]=(K.dmgBy[F]||0)+ie),t=!0,n.emit("ev",{t:"hurt",v:E,a:F,n:ie,hs:O==="head",w:N,helm:K.helm&&O==="head"}),K.hp<=0&&P(K,J,N,O==="head",V.wb,V)};function P(E,F,G,O,N,V={}){if(E.hp=0,E.alive=!1,E.d++,F&&F!==E)if(F.team!==E.team){F.k++,F.rk=(F.rk||0)+1,O&&(F.hsK=(F.hsK||0)+1);let J=je[G];A(F,J?.reward??300),h()==="ar"&&(G==="knife"&&(F.arl||0)>=yr.length-1?(n.arWinner=F.id,n.timeLeft=0):G==="knife"?E.arl=Math.max(0,(E.arl||0)-1):(F.arl=Math.min(yr.length-1,(F.arl||0)+1),F.alive&&w(F),n.emit("ev",{t:"arlvl",p:F.id,l:F.arl})))}else F.k--,A(F,bn.teamKill);for(let[J,ie]of Object.entries(E.dmgBy||{}))if(J!==F?.id&&ie>=41){let ue=n.players.get(J);ue&&ue.team!==E.team&&ue.a++}let K=E.inv.p||(E.inv.s&&E.inv.s!==Of(E.team)?E.inv.s:null)||E.inv.s;K&&!Zi(h())&&X(K,E.x,E.y,E.z,null,E.yaw),E.inv.c4&&(E.inv.c4=!1,z(E)),E.inv.kit&&X("defuser",E.x+.3,E.y,E.z,null,0),h()==="dm"?E.inv={...E.inv,g:[],kit:!1,zeus:!1,c4:!1,v:E.inv.v+1}:E.inv={...E.inv,p:null,s:null,g:[],kit:!1,zeus:!1,c4:!1,v:E.inv.v+1},o.delete(E.id),t=!0,n.emit("ev",{t:"kill",k:F?F.id:null,v:E.id,w:G,hs:!!O,wb:!!N,sm:!!V.sm,bl:!!V.bl,ns:!!V.ns}),(Zi(h())||h()==="practice")&&u.set(E.id,h()==="practice"?1.5:2),T()}function z(E){n.bomb.state="dropped",n.bomb.carrier=null,n.bomb.x=E.x,n.bomb.y=E.y,n.bomb.z=E.z,n.emit("ev",{t:"bombdrop"})}function X(E,F,G,O,N,V=0){let K=v++,J=F-Math.sin(V)*.6,ie=O-Math.cos(V)*.6,ue=!n.solidAt(J,G+.3,ie);n.drops.set(K,{id:K,w:E,x:ue?J:F,y:n.floorAt(ue?J:F,ue?ie:O,G+.6)+.05,z:ue?ie:O,ammo:N||null}),t=!0}e.handle=(E,F,G,O={})=>{let N=n.players.get(G);if(N)switch(E){case"hit":{if(!N.alive&&n.phase!=="post")return;let V=je[F.w];if(!V)return;let K=V.cat==="knife"?180:V.dmg*V.pellets*1.01;e.damage(F.t,G,Math.min(+F.d||0,K),F.part,F.w,{wb:F.wb,sm:F.sm,bl:F.bl,ns:F.ns});break}case"buy":U(N,F.i);break;case"drop":{if(!N.alive)return;let V=F.s;if(V==="zeus"){N.inv.zeus=!1,N.inv.v++,t=!0;return}if(V==="c4"){if(!N.inv.c4)return;N.inv.c4=!1,N.inv.v++,z({x:F.x,y:F.y,z:F.z}),n.bomb.x-=Math.sin(F.yaw)*.6,n.bomb.z-=Math.cos(F.yaw)*.6,n.bomb.y=n.floorAt(n.bomb.x,n.bomb.z,F.y+.6),t=!0;return}let K=V==="p"?N.inv.p:V==="s"?N.inv.s:null;if(!K)return;N.inv[V]=null,N.inv.v++,X(K,F.x,F.y,F.z,F.ammo,F.yaw);break}case"take":{if(!N.alive)return;if(F.id==="c4"){if(N.team!=="T"||n.bomb.state!=="dropped"||Math.hypot(N.x-n.bomb.x,N.z-n.bomb.z)>1.8)return;N.inv.c4=!0,N.inv.v++,n.bomb.state="carried",n.bomb.carrier=N.id,t=!0,n.emit("ev",{t:"bombpick",p:N.id});return}let V=n.drops.get(F.id);if(!V||Math.hypot(N.x-V.x,N.z-V.z)>2.2)return;if(V.w==="defuser"){if(N.team!=="CT"||N.inv.kit)return;N.inv.kit=!0,N.inv.v++,n.drops.delete(V.id),t=!0;return}let K=Hs(V.w)===1?"p":"s";if(N.inv[K]){if(!F.swap)return;X(N.inv[K],N.x,N.y,N.z,F.ammo,N.yaw)}N.inv[K]=V.w,N.inv[K+"a"]=V.ammo,N.inv.v++,n.drops.delete(V.id),t=!0;break}case"nade":{let V=N.inv.g.indexOf(F.type);if(V<0)return;N.inv.g.splice(V,1),N.inv.v++,t=!0;break}case"plant":{let V=gi(n.W,F.x,F.z)&12;if(!N.alive||!N.inv.c4||n.phase!=="live"||!V||n.bomb.state==="planted")return;N.inv.c4=!1,N.inv.v++,Object.assign(n.bomb,{state:"planted",carrier:null,x:F.x,y:F.y,z:F.z,t:Vt.bomb,site:V&4?"A":"B"}),r=N.id,A(N,bn.plantReward),t=!0,n.emit("ev",{t:"plant",p:N.id,site:n.bomb.site}),T();break}case"defst":{if(!N.alive||N.team!=="CT"||n.bomb.state!=="planted"||Math.hypot(N.x-n.bomb.x,N.z-n.bomb.z)>2.2)return;o.set(N.id,{t0:n.time,dur:N.inv.kit?Vt.kit:Vt.defuse}),n.emit("ev",{t:"defst",p:N.id,kit:N.inv.kit});break}case"defx":o.delete(G);break;case"defok":{let V=o.get(G);if(!V||!N.alive||n.bomb.state!=="planted"||n.time-V.t0<V.dur-.5)return;q(N);break}case"adm":O.admin&&H(N,F);break;case"timeout":{let V=N.grp;if(N.bot||!f[V]||d||Zi(h())){n.emitTo(N.id,"ev",{t:"deny",why:f[V]?"Ya hay un timeout pedido":"No te quedan timeouts"});return}f[V]--,d=N.team,n.emit("ev",{t:"timeoutReq",team:N.team,n:N.name,left:f[V]});break}case"vote":{let V=N.grp;p[V].add(N.id);let K=[...n.players.values()].filter(J=>J.grp===V&&!J.bot);n.emit("ev",{t:"vote",team:N.team,n:p[V].size,of:K.length,who:N.name}),p[V].size>=K.length&&n.phase!=="over"&&(n.score[1-V]=Math.max(n.score[1-V],n.score[V]+1),n.emit("ev",{t:"surrender",team:N.team}),g());break}case"radio":n.emit("ev",{t:"radio",p:N.id,m:String(F.m||"").slice(0,60),x:N.x,z:N.z});break;case"ping":n.emit("ev",{t:"ping",p:N.id,team:N.team,x:+F.x,y:+F.y,z:+F.z});break;case"fall":N.alive&&e.damage(G,G,Math.min(999,+F.d||0),"chest","world",{raw:!0});break}},e.botDefuse=E=>{o.has(E.id)||e.handle("defst",{},E.id)},e.isDefusing=E=>o.has(E);function q(E){o.clear(),n.bomb.state="defused",E.defused=!0,A(E,bn.defuseReward),n.emit("ev",{t:"defused",p:E.id}),R("CT","defuse")}function B(){let E=n.bomb;E.state="exploded",n.emit("ev",{t:"boom",x:E.x,y:E.y,z:E.z});let F=1750*.0254/3;for(let G of n.players.values()){if(!G.alive)continue;let O=Math.hypot(G.x-E.x,G.y-E.y,G.z-E.z),N=500*Math.exp(-(O*O)/(2*F*F));if(N>1){let V=Df(N,.5,"chest",G.ar,G.helm);G.hp-=Math.min(G.hp,V.hp),G.ar=Math.max(0,G.ar-V.armor),G.hp<=0&&(G.alive=!1,G.d++,n.emit("ev",{t:"kill",k:null,v:G.id,w:"c4"}))}}t=!0,R("T","bomb")}e.heBlast=(E,F)=>{for(let G of n.players.values()){if(!G.alive)continue;let O=Math.hypot(G.x-E.x,G.y+1-E.y,G.z-E.z);if(O>Ht.heR||!F(E,G))continue;let N=Ht.heDmg*(1-O/Ht.heR);N<1||e.damage(G.id,E.owner,N,"chest","he",{ap:.5})}};function U(E,F){let G=je[F],O=K=>n.emitTo(E.id,"ev",{t:"deny",why:K});if(!G||!E.alive)return;if(!e.canBuyTime())return O("Se termin\xF3 el tiempo de compra");if(!e.buyZone(E))return O("Ten\xE9s que estar en tu zona de compra");if(G.side!=="both"&&G.side!==E.team)return O("No disponible para tu equipo");let N=G.price,V=E.inv;if(F==="vest"){if(E.ar>=100)return O("Ya ten\xE9s chaleco")}else if(F==="vesthelm"){if(E.ar>=100&&E.helm)return O("Ya ten\xE9s chaleco y casco");E.ar>=100&&(N=350)}else if(F==="defuser"){if(V.kit)return O("Ya ten\xE9s el kit")}else if(F==="zeus"){if(V.zeus)return O("Ya ten\xE9s la Zeus")}else if(G.cat==="grenade"){let K=V.g.length,J=V.g.filter(ie=>ie===F||(ie==="molotov"||ie==="incendiary")&&(F==="molotov"||F==="incendiary")).length;if(K>=4)return O("Llev\xE1s el m\xE1ximo de granadas");if(J>=(G.max||1))return O("No pod\xE9s llevar m\xE1s de esa granada")}else{let K=Hs(F)===1?"p":"s";if(V[K]===F)return O("Ya ten\xE9s esa arma")}if(E.money<N)return O("No te alcanza la plata");if(E.money-=N,F==="vest")E.ar=100;else if(F==="vesthelm")E.ar=100,E.helm=!0;else if(F==="defuser")V.kit=!0;else if(F==="zeus")V.zeus=!0;else if(G.cat==="grenade")V.g.push(F);else{let K=Hs(F)===1?"p":"s";V[K]&&X(V[K],E.x,E.y,E.z,null,E.yaw+Math.PI),V[K]=F,V[K+"a"]=null}V.v++,t=!0,n.emitTo(E.id,"ev",{t:"bought",i:F})}e.buy=U;function H(E,F){if(F.a==="god")E.god=!!F.v,t=!0;else if(F.a==="money")E.money=bn.max,t=!0;else if(F.a==="win")(n.phase==="live"||n.phase==="freeze")&&(n.phase="live",R(E.team,"elim"));else if(F.a==="kill")for(let G of n.players.values())G.alive&&G.team!==E.team&&P(G,E,"knife",!0,!1);else F.a==="heal"&&(E.hp=100,E.ar=100,E.helm=!0,t=!0)}return e}var Hf=.0254,Rm=Math.PI/180,_b={pistol:.12,smg:.16,rifle:.36,sniper:.6,heavy:.3,equip:0,knife:0},Mb=n=>n.id==="awp"?.85:n.id==="deagle"||n.id==="r8"?.3:n.id==="ak47"?.42:n.cat==="heavy"&&n.pellets>1?0:_b[n.cat]??0;function ka(n,e){let t=n.scope&&n.cat==="sniper"&&e.scoped?n.scoped:n.spread,i=n.speed*Hf*(e.scoped&&n.cat==="sniper"?.5:1),s=Math.max(0,Math.min(1,(e.speed-i*.34)/(i*.66)));return t+=n.move*s,e.onGround||(t+=n.cat==="sniper"?.25:.12),e.duck>.5&&e.onGround&&(t*=.75),n.auto&&n.pellets===1&&(t+=Math.min(.022,e.shots*.0016)),n.cat==="pistol"&&!n.auto&&(t+=Math.min(.03,e.shots*.006)),t}var Di={ak47:[[.6,0],[1.1,.05],[1.3,.1],[1.35,-.05],[1.3,.15],[1.15,.2],[.95,.1],[.75,-.3],[.55,-.7],[.4,-.9],[.3,-.8],[.25,-.5],[.2,.2],[.18,.8],[.15,1],[.15,.9],[.12,.5],[.12,-.3],[.1,-.8],[.1,-.9],[.1,-.4],[.1,.4],[.1,.8],[.1,.6],[.1,-.2],[.1,-.6],[.1,-.5],[.1,.2],[.1,.5],[.1,.3]],m4a4:[[.5,0],[.9,.05],[1.05,-.05],[1.1,.1],[1,.15],[.85,-.1],[.7,-.35],[.5,-.55],[.38,-.5],[.3,-.2],[.25,.3],[.2,.55],[.18,.6],[.15,.35],[.12,-.1],[.12,-.45],[.1,-.5],[.1,-.2],[.1,.25],[.1,.45],[.1,.3],[.1,-.1],[.1,-.35],[.1,-.3],[.1,.05],[.1,.3],[.1,.25],[.1,-.05],[.1,-.25],[.1,-.1]]};Di.m4a1s=Di.m4a4.map(([n,e])=>[n*.85,e*.7]);Di.galil=Di.ak47.map(([n,e])=>[n*.8,e*.85]);Di.famas=Di.m4a4.map(([n,e])=>[n*.9,e*.9]);Di.sg553=Di.ak47.map(([n,e])=>[n*.85,-e*.8]);Di.aug=Di.m4a4.map(([n,e])=>[n*.85,-e*.8]);var Cm=(n,e)=>{let t=0;for(let i of n)t=t*31+i.charCodeAt(0)|0;return t=Math.imul(t^e*2654435761,1597334677),(t>>>0)/4294967296-.5};function Mh(n,e,t){if(n.pellets>1||n.cat==="sniper")return[n.kick,(t()-.5)*n.sway];let i=Di[n.id];if(i){let[o,a]=i[Math.min(e,i.length-1)],l=n.kick/.7;return[o*l,a*n.sway*.9+Cm(n.id,e)*n.sway*.12]}let s=e===0?n.kick*.6:e<9?n.kick:n.kick*.25,r=Cm(n.id,e)*n.sway*.45;return n.auto&&n.cat!=="pistol"&&(e>=7&&e<14?r+=-n.sway*.9:e>=14&&e<22?r+=n.sway*1:e>=22&&(r+=Math.sin(e*.9)*n.sway*.7)),[s,r]}function vo(n,e,t,i,s,r){let o=r()*Math.PI*2,a=s*(r()*.6+r()*.4),l=e+t*Rm+Math.sin(o)*a,c=n-i*Rm+Math.cos(o)*a;return[-Math.sin(c)*Math.cos(l),Math.sin(l),-Math.cos(c)*Math.cos(l)]}function bh(n,e,t,i,s,r,o,a,l,c,h){let u=Math.min(c.range*Hf,300),f=c.dmg,d=Mb(c),p=!1,v=i,x=s,m=r,y=0,b=[];for(let M=0;M<3;M++){let R=u-y;if(R<=0)break;let S=Ni(n,v,x,m,o,a,l,R),g=S?S.t:R,_=null;for(let L of h){if(!L.alive||L.id===t||Math.abs(L.x-v)>g+2||Math.abs(L.z-m)>g+2)continue;let T=dm(L,v,x,m,o,a,l,g);T&&(!_||T.t<_.t)&&(_={...T,id:L.id})}if(_){let L=y+_.t,T=f*Math.pow(c.rangeMod,L/Hf/500),P=[v+o*_.t,x+a*_.t,m+l*_.t];return{end:P,hit:{id:_.id,part:_.part,dmg:T,pos:P},impacts:b,wb:p}}if(!S)return{end:[v+o*R,x+a*R,m+l*R],hit:null,impacts:b,wb:p};let A=[v+o*g,x+a*g,m+l*g];if(b.push([A[0],A[1],A[2],S.nx,S.ny,S.nz]),d<=0)return{end:A,hit:null,impacts:b,wb:p};let w=0,C=.03;for(;w<d&&fh(n,A[0]+o*(w+C),A[1]+a*(w+C),A[2]+l*(w+C));)w+=C;if(w>=d)return{end:A,hit:null,impacts:b,wb:p};w+=C,f*=Math.max(.15,1-w/d)*.75,d-=w,p=!0,y+=g+w,v=A[0]+o*w,x=A[1]+a*w,m=A[2]+l*w,b.push([v,x,m,-o,-a,-l])}return{end:[v,x,m],hit:null,impacts:b,wb:p}}function Oa(n,e,t,i){let s=t[0],r=t[1],o=t[2];for(let a of[1.55,1.1]){let l=i[0],c=i[1]+a*(i[3]||1),h=i[2],u=l-s,f=c-r,d=h-o,p=Math.hypot(u,f,d),v=Ni(n,s,r,o,u/p,f/p,d/p,p);if(!(v&&v.t<p-.1)&&!_h(e,s,r,o,l,c,h))return!0}return!1}var Pm=.0254,Sh=Math.PI/180,wh={facil:{react:.75,turn:150,err:5.5,hs:.04,ctrl:.2,track:1.6,settle:1.1,name:"F\xE1cil"},normal:{react:.52,turn:220,err:4,hs:.1,ctrl:.42,track:1.1,settle:1.5,name:"Normal"},dificil:{react:.36,turn:320,err:2.8,hs:.2,ctrl:.62,track:.7,settle:2,name:"Dif\xEDcil"},experto:{react:.26,turn:450,err:1.9,hs:.32,ctrl:.8,track:.45,settle:2.6,name:"Experto"}},yt=Math.random,Th=(n,e)=>{let t=n-e;for(;t>Math.PI;)t-=Math.PI*2;for(;t<-Math.PI;)t+=Math.PI*2;return t};function Vf(n,e){let t={},i={site:"A"},s=0,r={A:ri(n.nav,4),B:ri(n.nav,8)};t.refreshNav=()=>{r.A=ri(n.nav,4),r.B=ri(n.nav,8)};let o=new Map,a={T:{},CT:{}},l=g=>a[g.team];function c(g,_){if(!g||g.length<2)return null;let A=0;for(let w=g.length-1;w>0;w--)if(A+=Math.hypot(g[w][0]-g[w-1][0],g[w][2]-g[w-1][2]),A>=_)return g[w-1];return g[0]}function h(g,_){if(!g||g.length<2)return null;let A=0;for(let w=1;w<g.length;w++)if(A+=Math.hypot(g[w][0]-g[w-1][0],g[w][2]-g[w-1][2]),A>=_)return g[w];return g[g.length-1]}let u=g=>{let _=n.nav,A=0,w=0,C=0;for(let T of g){let P=_.pos(T);A+=P[0],w+=P[1],C+=P[2]}let L=Math.max(1,g.length);return[A/L,w/L,C/L]};t.brain=g=>{let _=o.get(g.id);return _||(_={path:null,pi:0,goal:null,repath:0,tgt:null,react:0,err:[0,0],fireT:0,burst:0,shots:0,pp:0,py:0,strafe:1,strafeT:0,stuck:0,last:[0,0],buyT:0,bought:!1,hold:null,plantT:0,lastKnown:null,lkT:0,blind:0,mag:{},reload:0,look:null,wantScope:!1,jumpT:0},o.set(g.id,_)),_},t.reset=()=>o.clear(),t.roundStart=()=>{t._nav!==n.nav&&(t._nav=n.nav,t.refreshNav()),i.site=n.wingSite||(yt()<.5?"A":"B"),a.T={},a.CT={};let g=n.nav,_={A:u(r.A),B:u(r.B)},A=n.spawns.T,w=n.spawns.CT;for(let L of["A","B"]){if(!r[L].length)continue;let T=Bs(g,g.nearest(A.cx,A.pts[0]?A.pts[0][1]:_[L][1],A.cz),g.nearest(_[L][0],_[L][1],_[L][2]));i["stage"+L]=c(T,16+yt()*6);let P=T?T.slice().reverse():null;i["entry"+L]=h(P,14);let z=Bs(g,g.nearest(_[L][0],_[L][1],_[L][2]),g.nearest(w.cx,w.pts[0]?w.pts[0][1]:_[L][1],w.cz));i["ctEntry"+L]=h(z,14)}i.go=!1,i.goT=18+yt()*22,i.siteC=_;let C=0;for(let L of n.players.values()){if(!L.bot)continue;let T=t.brain(L);Object.assign(T,{path:null,goal:null,goalKind:null,rotated:!1,tgt:null,hold:null,plantT:0,bought:!1,buyT:.6+yt()*2.2,lastKnown:null,blind:0,reload:0,shots:0,pp:0,py:0,mag:{},look:null}),T.site=L.team==="CT"?C++%2===0?"A":"B":i.site,L.team==="CT"&&yt()<.25&&(T.site=T.site==="A"?"B":"A"),n.wingSite&&(T.site=n.wingSite)}},t.place=(g,_)=>{g.pl=Da(_[0],_[1],_[2],_[3]),g.pl.pitch=0},t.heard=(g,_,A,w,C)=>{for(let L of n.players.values()){if(!L.bot||!L.alive||L.team===w||!L.pl)continue;if(Math.hypot(L.pl.x-g,L.pl.z-A)<(C?40:14)){let P=t.brain(L);P.tgt||(P.lastKnown=[g,_,A],P.lkT=4)}}},t.flash=(g,_)=>{let A=t.brain(g);A.blind=Math.max(A.blind,_)};let f=g=>{let _=0;for(let A of n.players.values())A.team===g&&A.alive&&_++;return _};function d(g){let _=t.brain(g);return!!(_.lastKnown&&_.lkT>3)}function p(g){let _=g.inv;return _.p||_.s||"knife"}function v(g){let _=()=>g.money,A=g.team==="T",w=[];_()>=5750&&yt()<.18?w.push("awp"):_()>=3700?w.push(A?"ak47":"m4a4"):_()>=2900?w.push(A?"galil":"famas"):_()>=1850&&n.round>1&&w.push(A?"mac10":"mp9");for(let C of w)e.buy(g,C);_()>=1e3?e.buy(g,"vesthelm"):_()>=650&&(n.round===1||n.round===x()+1||yt()<.5)&&e.buy(g,"vest"),!A&&_()>=400&&yt()<.6&&e.buy(g,"defuser"),n.round===1&&_()>=500&&!g.inv.p&&yt()<.3&&e.buy(g,A?"tec9":"fiveseven")}let x=()=>({rapida:4,corta:8,comp:12})[n.cfg.len];function m(g,_,A,w,C){let L=n.nav,T=g.pl,P=L.nearest(T.x,T.y,T.z),z=L.nearest(A,w,C);_.path=Bs(L,P,z),_.pi=1,_.goal=[A,w,C],_.repath=6+yt()*2,_.path||(_.repath=1.5+yt())}let y=g=>n.nav.pos(g[Math.floor(yt()*g.length)]);t.tick=g=>{let _=wh[n.cfg.diff]||wh.normal;s-=g;let A=s<=0;A&&(s=.1);let w=n.phase==="live",C=n.phase==="freeze";for(let L of n.players.values()){if(!L.bot||!L.pl)continue;let T=t.brain(L),P=L.pl;if(!L.alive)continue;let z=p(L),X=je[z];if(T.mag[z]===void 0&&(T.mag[z]=X.mag||0),T.blind=Math.max(0,T.blind-g),T.fireT-=g,T.lkT-=g,T.repath-=g,T.jumpT-=g,T.reload>0&&(T.reload-=g,T.reload<=0&&(T.mag[z]=X.mag)),C){T.buyT-=g,T.buyT<=0&&!T.bought&&(T.bought=!0,v(L)),M(L,T,0,0,!1,g,X);continue}if(A&&T.blind<=0){let G=[P.x,P.y+Mn(P),P.z],O=null,N=1e9;for(let V of n.players.values()){if(!V.alive||V.team===L.team)continue;let K=V.x-P.x,J=V.z-P.z,ie=Math.hypot(K,J);if(ie>90)continue;let ue=Math.abs(Th(Math.atan2(-K,-J),P.yaw)),Te=T.tgt===V.id;if(ue>(Te?2.6:1.45)&&ie>2.5||!Oa(n.W,n.nades,G,[V.x,V.y,V.z,V.h/st.hStand]))continue;let De=ie*(Te?.6:1);De<N&&(N=De,O=V)}if(O){if(T.tgt!==O.id){let V=O.x-P.x,K=O.z-P.z,J=Math.abs(Th(Math.atan2(-V,-K),P.yaw));T.tgt=O.id,T.react=_.react*(.8+yt()*.6)*(1+J*.5)+Math.min(.25,N/160);let ie=_.err*Sh*(1+J*.6);T.err=[(yt()<.5?-1:1)*ie*(.6+yt()*.8),(yt()-.35)*ie*.8],T.head=yt()<_.hs;let ue=gi(n.W,O.x,O.z);ue&4?l(L).seen={site:"A",t:8}:ue&8&&(l(L).seen={site:"B",t:8})}T.lastKnown=[O.x,O.y,O.z],T.lkT=5}else T.tgt&&(T.tgt=null)}T.blind>0&&(T.tgt=null);let q=T.tgt?n.players.get(T.tgt):null,B=0,U=0,H=!1,E=!1;if(q&&q.alive){let G=P.x,O=P.y+Mn(P),N=P.z,V=q.y+(T.head?q.h-.12:q.h*.6),K=q.x-G,J=V-O,ie=q.z-N,ue=Math.hypot(K,ie),Te=((q.vx||0)*ie-(q.vz||0)*K)/Math.max(1,ue),De=Math.max(-.08,Math.min(.08,-Te/Math.max(4,ue)*_.track*.35)),We=Math.atan2(-K,-ie)+T.err[0]+De,ae=Math.atan2(J,ue)+T.err[1];T.err[0]*=Math.max(0,1-g*_.settle),T.err[1]*=Math.max(0,1-g*_.settle),T.rcyc=(T.rcyc||0)+g,T.retreat=L.hp<35&&ue<25&&T.rcyc%1.5<.55,b(P,We,ae,_.turn*Sh*g),T.react-=g;let he=Math.hypot(Th(P.yaw,We-T.err[0]),P.pitch-(ae-T.err[1]));T.strafeT-=g,T.strafeT<=0&&(T.strafeT=.4+yt()*.8,T.strafe=yt()<.5?-1:1);let de=X.cat==="rifle"||X.cat==="sniper"||X.cat==="heavy"&&X.pellets===1||ue>14;if(!de||T.reload>0){let Ge=[Math.cos(P.yaw),-Math.sin(P.yaw)];B=Ge[0]*T.strafe,U=Ge[1]*T.strafe}(T.reload>0||T.retreat)&&(B+=Math.sin(P.yaw)*.8,U+=Math.cos(P.yaw)*.8),X.cat==="sniper"&&(T.wantScope=!0);let pe=Math.hypot(P.vx,P.vz);T.react<=0&&he<Math.max(.02,.6/Math.max(3,ue))+.03&&T.reload<=0&&T.fireT<=0&&(!de||pe<X.speed*Pm*.4||ue<6)&&(T.mag[z]<=0&&X.mag?(T.reload=X.reload,T.shots=0):R(L,T,X,z,_,ue)),T.reload<=0&&T.mag[z]<=0&&X.mag&&(T.reload=X.reload,T.shots=0)}else{T.wantScope=!1,T.shots&&T.fireT<-.35&&(T.shots=0),X.mag&&T.mag[z]<X.mag*.4&&T.reload<=0&&(T.reload=X.reload);let G=n.bomb,O=null,N=!1,V=n.cfg.mode||"comp";if(V==="dm"||V==="ar"){if(!T.goal||T.goalKind!=="roam"||T.path&&T.pi>=T.path.length||yt()<g*.04){let ue=-1;for(let Te=0;Te<20&&ue<0;Te++){let De=Math.floor(yt()*n.nav.L*n.nav.N);n.nav.main[De]&&(ue=De)}ue>=0&&(O=n.nav.pos(ue),T.goalKind="roam",T.look=null)}}else if(L.team==="T"&&w&&!i.go){i.goT-=g/Math.max(1,f("T"));let ue=i["stage"+T.site];if(!ue||i.goT<=0||n.timeLeft<60)i.go=!0;else{let Te=0,De=0;for(let We of n.players.values())We.team==="T"&&We.alive&&(De++,Math.hypot(We.x-ue[0],We.z-ue[2])<9&&Te++);De&&Te>=Math.ceil(De*.75)&&(i.go=!0)}}let K=l(L).seen;if(K&&(K.t-=g/Math.max(1,f(L.team)),K.t<=0&&(l(L).seen=null)),!(V==="dm"||V==="ar"))if(L.team==="T"){let ue=i["stage"+T.site];if(G.state==="dropped")(T.goalKind!=="bomb"||T.repath<=0)&&(O=[G.x,G.y,G.z],T.goalKind="bomb"),Math.hypot(P.x-G.x,P.z-G.z)<1.2&&e.handle("take",{id:"c4"},L.id);else if(G.state==="planted"){if(T.goalKind!=="post"){let Te=yt()*6.28,De=5+yt()*7;O=[G.x+Math.cos(Te)*De,G.y,G.z+Math.sin(Te)*De],T.goalKind="post",T.look=i["ctEntry"+(gi(n.W,G.x,G.z)&8?"B":"A")]||[G.x,G.y,G.z]}}else!i.go&&ue?T.goalKind!=="stage"&&(O=[ue[0]+(yt()-.5)*5,ue[1],ue[2]+(yt()-.5)*5],T.goalKind="stage",T.look=i.siteC[T.site]):L.inv.c4?gi(n.W,P.x,P.z)&12&&w&&P.onGround&&!d(L)?(T.plantT+=g,N=!0,n.setPlanting(L.id,T.plantT),T.plantT>=3.2&&(T.plantT=0,n.setPlanting(L.id,0),e.handle("plant",{x:P.x,y:P.y,z:P.z},L.id))):(T.plantT=0,(!T.goal||T.goalKind!=="site")&&(O=y(r[T.site]),T.goalKind="site")):(!T.goal||T.goalKind!=="site")&&(O=y(r[T.site]),T.goalKind="site",T.look=null)}else G.state==="planted"?Math.hypot(P.x-G.x,P.z-G.z)<1.1?(N=!0,E=!0,e.botDefuse(L),T.look=[G.x,G.y,G.z]):(T.goalKind!=="defuse"||T.repath<=0)&&(O=[G.x,G.y,G.z],T.goalKind="defuse"):K&&K.site!==T.site&&!T.rotated&&yt()<.6?(T.rotated=!0,f("CT")>1&&yt()<.7&&(T.site=K.site,T.goal=null,T.goalKind=null)):(!T.goal||T.goalKind!=="hold")&&(O=y(r[T.site]),T.goalKind="hold",T.look=i["entry"+T.site]||null);if(!O&&T.goal&&!T.path&&T.repath<=0&&(T.goal=null),O&&m(L,T,O[0],O[1],O[2]),!N&&T.path&&T.pi<T.path.length){let ue=T.path[T.pi],Te=ue[0]-P.x,De=ue[2]-P.z,We=Math.hypot(Te,De);We<.55?T.pi++:(B=Te/We,U=De/We,ue[1]-P.y>.45&&We<1.6&&T.jumpT<=0&&(T.jump=!0,T.jumpT=.8));let ae=Math.hypot(P.x-T.last[0],P.z-T.last[1]);T.stuck=ae<g*.6?T.stuck+g:0,T.last=[P.x,P.z],T.stuck>.6&&(T.jump=!0,T.stuck>1.6&&(T.stuck=0,T.goal=null,T.path=null))}else if(!N&&T.goalKind==="hold"&&T.path&&T.pi>=T.path.length){if(!T.look){let ue=n.spawns.T;T.look=[ue.cx,P.y+1.5,ue.cz]}T.crouchT=(T.crouchT||0)+g,E=T.crouchT%9>6,yt()<g*.03&&(T.goal=null)}else!N&&T.goalKind==="site"&&T.path&&T.pi>=T.path.length?T.goal=null:!N&&(T.goalKind==="stage"||T.goalKind==="post")&&T.path&&T.pi>=T.path.length;let J=null,ie=0;if(T.lastKnown&&T.lkT>0){let ue=T.lastKnown;J=Math.atan2(-(ue[0]-P.x),-(ue[2]-P.z)),ie=Math.atan2(ue[1]+1.4-P.y-Mn(P),Math.hypot(ue[0]-P.x,ue[2]-P.z))}else(B||U)&&!(T.goalKind==="hold"&&T.look&&T.path&&T.pi>=T.path.length-3)?J=Math.atan2(-B,-U):T.look&&(J=Math.atan2(-(T.look[0]-P.x),-(T.look[2]-P.z)));J!==null&&b(P,J,ie,_.turn*.55*Sh*g)}let F=(X.recover||9)*g;T.pp=Math.max(0,T.pp-F*(T.fireT<-.05?1:.3)),T.py*=Math.max(0,1-g*4),H=!!q&&X.cat!=="knife",M(L,T,B,U,H,g,X,E)}};function b(g,_,A,w){let C=Th(_,g.yaw);g.yaw+=Math.max(-w,Math.min(w,C));let L=A-g.pitch;g.pitch+=Math.max(-w,Math.min(w,L)),g.pitch=Math.max(-1.45,Math.min(1.45,g.pitch))}function M(g,_,A,w,C,L,T,P=!1){let z=g.pl,X=-Math.sin(z.yaw),q=-Math.cos(z.yaw),B=Math.cos(z.yaw),U=-Math.sin(z.yaw),H={f:A*X+w*q,s:A*B+w*U,jump:!!_.jump,crouch:P,walk:C};_.jump=!1,(n.phase==="freeze"||n.planting(g.id)>0||e.isDefusing(g.id))&&(H.f=H.s=0,H.jump=!1);let F=T.speed*Pm*(_.wantScope&&T.cat==="sniper"?.42:1);{let O=Math.hypot(H.f,H.s);O>1&&(H.f/=O,H.s/=O)}let G=L;for(;G>1e-6;){let O=Math.min(G,.011111111111111112),N=gh(n.W,z,H,O,F);N&&n.fallDamage(g,N),G-=O}z.y<-20&&g.alive&&e.damage(g.id,g.id,999,"chest","world",{raw:!0});for(let O of n.players.values()){if(O===g||!O.alive||Math.abs(O.y-z.y)>1.6)continue;let N=z.x-O.x,V=z.z-O.z,K=Math.hypot(N,V);if(K<.62){let J=K>1e-4?(.62-K)/K*.5:0,ie=z.x+(K>1e-4?N*J:.05),ue=z.z+(K>1e-4?V*J:.03);Xn(n.W,ie,ue,z.y,z.h,st.r)||(z.x=ie,z.z=ue)}}g.x=z.x,g.y=z.y,g.z=z.z,g.yaw=z.yaw,g.pitch=z.pitch,g.duck=z.duck,g.h=z.h,g.vx=z.vx,g.vz=z.vz,g.onGround=z.onGround,g.wpn=g.inv.c4&&_.plantT>0?"c4":p(g),g.scoped=_.wantScope&&T.cat==="sniper"}function R(g,_,A,w,C,L){let T=g.pl,P={speed:Math.hypot(T.vx,T.vz),onGround:T.onGround,duck:T.duck,scoped:g.scoped,shots:_.shots},z=ka(A,P),[X,q]=Mh(A,_.shots,yt),B=[T.x,T.y+Mn(T),T.z];n.fireBullets(g.id,w,B,H=>vo(T.yaw,T.pitch,_.pp*(1-C.ctrl*.85),_.py*(1-C.ctrl*.85),z,H)),_.pp=Math.min(A.kickCap||12,_.pp+X),_.py+=q,_.shots++,A.mag&&_.mag[w]--;let U=60/A.rpm;if(A.auto){let H=L>25?2:L>12?4:8;_.shots%H===0?(_.fireT=U+.25+yt()*.3*(2-C.ctrl),_.shots=0,S(_,C)):_.fireT=U}else _.fireT=Math.max(U,A.cat==="pistol"?.22+yt()*.25:U),A.cat!=="sniper"&&S(_,C,.5)}function S(g,_,A=1){let w=_.err*Sh*.45*A;g.err[0]+=(yt()-.5)*2*w,g.err[1]+=(yt()-.4)*w,g.head=yt()<_.hs}return t}var vt=new zt,Eh=new Xe,fE=new Y(0,1,0),Ah=new Y;function Im(n){let e={},i=new On(new Ut(1,1,1),new Jt({color:"#ffffff"}),700);i.instanceMatrix.setUsage(ho),i.frustumCulled=!1,i.count=0,i.instanceColor=new Bi(new Float32Array(700*3),3),n.add(i);let s=[];e.particle=(B,U,H,E,F,G,O,N,V,K=9.8,J=0,ie=null)=>{s.length>=700&&s.shift();let ue={x:B,y:U,z:H,vx:E,vy:F,vz:G,s:O,life:N,max:N,c:new Xe(V),g:K,grow:J,fy:ie};return s.push(ue),ue},e.floorAt=null,e.shell=(B,U,H,E)=>{let F=e.floorAt?e.floorAt(B[0],B[2],B[1]):B[1]-1.5,G=e.particle(B[0],B[1],B[2],U*(1.5+Math.random()),1.6+Math.random(),H*(1.5+Math.random()),E?.03:.022,1.6,E?"#2d6b2a":"#c9a23a",9.8,0,F+.01);G.shell=!0};let r=64,o=new Ut(1,1,1);o.translate(0,0,-.5);let a=new On(o,new Jt({color:"#ffe9a8",transparent:!0,opacity:.85,depthWrite:!1}),r);a.instanceMatrix.setUsage(ho),a.frustumCulled=!1,a.count=0,n.add(a);let l=[];e.tracer=(B,U)=>{l.length>=r&&l.shift();let H=Math.hypot(U[0]-B[0],U[1]-B[1],U[2]-B[2]);l.push({a:[...B],b:[...U],d:H,t:0,life:Math.min(.25,H/280+.04)})};let c=220,h=new Vn(.1,.1),u=document.createElement("canvas");u.width=u.height=64;{let B=u.getContext("2d"),U=B.createRadialGradient(32,32,2,32,32,30);U.addColorStop(0,"rgba(10,8,6,1)"),U.addColorStop(.28,"rgba(25,20,16,0.95)"),U.addColorStop(.42,"rgba(90,80,66,0.7)"),U.addColorStop(.6,"rgba(60,52,42,0.35)"),U.addColorStop(1,"rgba(0,0,0,0)"),B.fillStyle=U,B.fillRect(0,0,64,64),B.strokeStyle="rgba(20,16,12,0.6)",B.lineWidth=1.2;for(let H=0;H<7;H++){let E=H/7*6.28+Math.random()*.5;B.beginPath(),B.moveTo(32+Math.cos(E)*8,32+Math.sin(E)*8),B.lineTo(32+Math.cos(E+.2)*(16+Math.random()*12),32+Math.sin(E+.2)*(16+Math.random()*12)),B.stroke()}}let f=new Qn(u);f.colorSpace=rn;let d=new On(h,new Jt({map:f,transparent:!0,polygonOffset:!0,polygonOffsetFactor:-2,depthWrite:!1}),c);d.count=0,d.frustumCulled=!1,n.add(d);let p=0;e.decal=(B,U)=>{vt.position.set(B[0]+U[0]*.01,B[1]+U[1]*.01,B[2]+U[2]*.01),Ah.set(U[0],U[1],U[2]),vt.quaternion.setFromUnitVectors(new Y(0,0,1),Ah),vt.rotateZ(Math.random()*3),vt.scale.setScalar(.7+Math.random()*.6),vt.updateMatrix(),d.setMatrixAt(p,vt.matrix),p=(p+1)%c,d.count=Math.max(d.count,p===0?c:p),d.instanceMatrix.needsUpdate=!0};let v={};e.decalC=(B,U,H,E)=>{let F=v[H];if(!F){let G=new On(new Cs(.5,7),new Jt({color:H,transparent:!0,opacity:.85,polygonOffset:!0,polygonOffsetFactor:-3,depthWrite:!1}),80);G.count=0,G.frustumCulled=!1,n.add(G),F=v[H]={m:G,i:0}}vt.position.set(B[0]+U[0]*.012,B[1]+U[1]*.012,B[2]+U[2]*.012),Ah.set(U[0],U[1],U[2]),vt.quaternion.setFromUnitVectors(new Y(0,0,1),Ah),vt.rotateZ(Math.random()*6),vt.scale.set(E*(.8+Math.random()*.5),E*(.6+Math.random()*.5),1),vt.updateMatrix(),F.m.setMatrixAt(F.i,vt.matrix),F.i=(F.i+1)%80,F.m.count=Math.max(F.m.count,F.i===0?80:F.i),F.m.instanceMatrix.needsUpdate=!0},e.clearDecals=()=>{d.count=0,p=0;for(let B in v)v[B].m.count=0,v[B].i=0},e.impact=(B,U,H="#cdb894")=>{e.decal(B,U);for(let E=0;E<5;E++)e.particle(B[0],B[1],B[2],U[0]*2+(Math.random()-.5)*2,U[1]*2+Math.random()*1.5,U[2]*2+(Math.random()-.5)*2,.03+Math.random()*.03,.35+Math.random()*.3,H,6);if(e.particle(B[0],B[1],B[2],U[0]*.5,.4,U[2]*.5,.08,.5,"#d9cdb5",-.5,.25),e.particle(B[0],B[1],B[2],0,0,0,.05,.05,"#fff2a0",0),Math.random()<.45)for(let E=0;E<4;E++)e.particle(B[0],B[1],B[2],U[0]*3+(Math.random()-.5)*5,U[1]*3+Math.random()*3,U[2]*3+(Math.random()-.5)*5,.012,.18+Math.random()*.15,"#ffd060",12)};let x=[],m=new Ut(.06,.06,.06),y=new Jt({color:"#ff3030",depthTest:!1,transparent:!0,opacity:.85});e.debugBox=B=>{let U=new Oe(m,y);U.position.set(B[0],B[1],B[2]),U.renderOrder=25,n.add(U),x.push({m:U,t:8}),x.length>120&&n.remove(x.shift().m)},e.tickDebug=B=>{for(let U=x.length-1;U>=0;U--)x[U].t-=B,x[U].t<=0&&(n.remove(x[U].m),x.splice(U,1))},e.muzzleSmoke=B=>{for(let U=0;U<2;U++)e.particle(B[0],B[1],B[2],(Math.random()-.5)*.3,.25+Math.random()*.2,(Math.random()-.5)*.3,.05,.6+Math.random()*.4,"#bdbab4",-.2,.22)},e.dust=B=>{for(let U=0;U<2;U++)e.particle(B[0]+(Math.random()-.5)*.3,B[1]+.03,B[2]+(Math.random()-.5)*.3,(Math.random()-.5)*.4,.2,(Math.random()-.5)*.4,.05,.5,"#d8c4a0",.2,.15)},e.blood=(B,U,H)=>{let E=H?10:6;for(let F=0;F<E;F++)e.particle(B[0],B[1],B[2],U[0]*2.5+(Math.random()-.5)*2,U[1]*2+Math.random()*1.2,U[2]*2.5+(Math.random()-.5)*2,.035+Math.random()*.04,.4+Math.random()*.3,H?"#b3121a":"#8f1015",8)};let b=new sr(1,0),M=new Jt({color:"#ffd27a",transparent:!0,opacity:.95,depthWrite:!1});e.muzzleMesh=()=>{let B=new Oe(b,M);return B.visible=!1,B.scale.set(.05,.05,.14),B};let R=new Ds("#ffcf80",0,7,2);n.add(R);let S=0;e.flashLight=(B,U=1)=>{R.position.set(B[0],B[1],B[2]),R.intensity=6*U,S=.05};let g=400,_=new Ps(1,0),A=new On(_,new Bn({color:"#b9bcc0",flatShading:!0}),g);A.instanceMatrix.setUsage(ho),A.count=0,A.frustumCulled=!1,n.add(A),A.instanceColor=new Bi(new Float32Array(g*3),3);let w=[];e.smoke=(B,U)=>{let H=[];for(let E=0;E<38;E++){let F=Math.random()*Math.PI*2,G=Math.sqrt(Math.random())*Ht.smokeR*.85,O=Math.random()*2.6;H.push({x:B.x+Math.cos(F)*G,y:B.y+.4+O,z:B.z+Math.sin(F)*G,s:.9+Math.random()*.9,ph:Math.random()*6,c:.82+Math.random()*.14})}w.push({g:B,balls:H})},e.clearSmokes=()=>{w.length=0,P.length=0};let C=260,L=new cs(.22,.7,4);L.translate(0,.35,0);let T=new On(L,new Jt({color:"#ffffff"}),C);T.instanceColor=new Bi(new Float32Array(C*3),3),T.instanceMatrix.setUsage(ho),T.count=0,T.frustumCulled=!1,n.add(T);let P=[],z=new Ds("#ff8a3a",0,9,1.6);n.add(z),e.fire=(B,U,H)=>{let E=[];for(let F=0;F<26;F++){let G=Math.random()*Math.PI*2,O=Math.sqrt(Math.random())*Ht.fireR,N=B.x+Math.cos(G)*O,V=B.z+Math.sin(G)*O,K=H(U,N,V,B.y+.6);K<B.y-1.2||K>B.y+.7||E.push({x:N,y:K,z:V,ph:Math.random()*6,s:.7+Math.random()*.8})}P.push({g:B,fl:E})};let X=[],q=new Ps(1,1);return e.explosion=(B,U)=>{let H=new Oe(q,new Jt({color:"#ffb347",transparent:!0,opacity:.9,depthWrite:!1}));H.position.set(B[0],B[1]+.3,B[2]),n.add(H),X.push({m:H,t:0,life:U?1.1:.45,size:U?9:2.6});for(let E=0;E<(U?70:30);E++){let F=Math.random()*6.28,G=Math.random()*1.4,O=(U?12:7)*(.4+Math.random());e.particle(B[0],B[1]+.3,B[2],Math.cos(F)*Math.cos(G)*O,Math.sin(G)*O,Math.sin(F)*Math.cos(G)*O,.06+Math.random()*.08,.6+Math.random()*.6,Math.random()<.5?"#ffb347":"#3a3530",9)}for(let E=0;E<(U?24:10);E++)e.particle(B[0]+(Math.random()-.5)*2,B[1]+.5+Math.random(),B[2]+(Math.random()-.5)*2,Math.random()-.5,1+Math.random(),Math.random()-.5,.5,2+Math.random()*1.5,"#4a4642",-.3,U?1.6:.8);e.flashLight(B,U?6:3),S=U?.35:.15},e.flashPop=B=>{e.flashLight(B,8),S=.08;for(let U=0;U<14;U++)e.particle(B[0],B[1],B[2],(Math.random()-.5)*6,(Math.random()-.5)*6,(Math.random()-.5)*6,.04,.25,"#ffffff",0)},e.update=(B,U,H)=>{let E=0;for(let O=s.length-1;O>=0;O--){let N=s[O];if(N.life-=B,N.life<=0){s.splice(O,1);continue}N.vy-=N.g*B,N.x+=N.vx*B,N.y+=N.vy*B,N.z+=N.vz*B,N.fy!==null&&N.fy!==void 0&&N.y<N.fy&&(N.y=N.fy,N.vy=Math.abs(N.vy)>.6?-N.vy*.3:0,N.vx*=.5,N.vz*=.5,N.g=N.vy?9.8:0),N.vx*=1-B*1.5,N.vz*=1-B*1.5;let V=N.life/N.max,K=N.shell?N.s:N.s*(1+N.grow*(1-V)*8)*(N.grow?1:Math.min(1,V*2));vt.position.set(N.x,N.y,N.z),vt.rotation.set(N.x*7,N.y*5,0),N.shell?vt.scale.set(K*.5,K*.5,K*1.6):vt.scale.setScalar(K),vt.updateMatrix(),i.setMatrixAt(E,vt.matrix),i.setColorAt(E,N.c),E++}i.count=E,i.instanceMatrix.needsUpdate=!0,i.instanceColor&&(i.instanceColor.needsUpdate=!0),E=0;for(let O=l.length-1;O>=0;O--){let N=l[O];if(N.t+=B,N.t>N.life){l.splice(O,1);continue}let V=N.t/N.life,K=Math.min(N.d,3.5),J=Math.min(N.d,N.d*V+K*.5),ie=Math.max(0,J-K),ue=(N.b[0]-N.a[0])/N.d,Te=(N.b[1]-N.a[1])/N.d,De=(N.b[2]-N.a[2])/N.d;vt.position.set(N.a[0]+ue*J,N.a[1]+Te*J,N.a[2]+De*J),vt.lookAt(N.a[0]+ue*(J+1),N.a[1]+Te*(J+1),N.a[2]+De*(J+1)),vt.rotateY(Math.PI),vt.scale.set(.012,.012,Math.max(.01,J-ie)),vt.updateMatrix(),a.setMatrixAt(E++,vt.matrix)}a.count=E,a.instanceMatrix.needsUpdate=!0,E=0;for(let O=w.length-1;O>=0;O--){let N=w[O],V=N.g;if(V.state!=="active"){w.splice(O,1);continue}let K=Ht.smokeLife-V.life,J=Math.min(1,K/1.2),ie=Math.min(1,V.life/1.5);for(let ue of N.balls){if(E>=g)break;let Te=J*ie;vt.position.set(V.x+(ue.x-V.x)*(.3+.7*J),V.y+(ue.y-V.y)*(.3+.7*J)+Math.sin(U*.6+ue.ph)*.08,V.z+(ue.z-V.z)*(.3+.7*J)),vt.rotation.set(ue.ph,U*.05+ue.ph,0),vt.scale.setScalar(Math.max(.01,ue.s*Te*1.25)),vt.updateMatrix(),A.setMatrixAt(E,vt.matrix),Eh.setScalar(ue.c),A.setColorAt(E,Eh),E++}}A.count=E,A.instanceMatrix.needsUpdate=!0,A.instanceColor&&(A.instanceColor.needsUpdate=!0),E=0;let F=0,G=null;for(let O=P.length-1;O>=0;O--){let N=P[O],V=N.g;if(V.state!=="active"||V.life<=0){P.splice(O,1);continue}let K=Math.min(1,V.life/1.2)*Math.min(1,(Ht.fireLife-V.life)*4+.3);for(let J of N.fl){if(E>=C)break;let ie=.7+Math.sin(U*14+J.ph)*.2+Math.sin(U*23+J.ph*2)*.1;vt.position.set(J.x,J.y,J.z),vt.rotation.set(0,J.ph+U,0),vt.scale.set(J.s*K,J.s*K*ie*1.3,J.s*K),vt.updateMatrix(),T.setMatrixAt(E,vt.matrix),Eh.setRGB(1,.45+ie*.35,.1),T.setColorAt(E,Eh),E++}F+=K,G=V}T.count=E,T.instanceMatrix.needsUpdate=!0,T.instanceColor&&(T.instanceColor.needsUpdate=!0),G?(z.position.set(G.x,G.y+1,G.z),z.intensity=Math.min(1,F)*(3+Math.sin(U*20)*.8)):z.intensity=0;for(let O=X.length-1;O>=0;O--){let N=X[O];N.t+=B;let V=N.t/N.life;if(V>=1){n.remove(N.m),N.m.material.dispose(),X.splice(O,1);continue}N.m.scale.setScalar(N.size*(.3+.7*Math.sqrt(V))),N.m.material.opacity=.9*(1-V),N.m.material.color.setRGB(1,.7-V*.4,.3-V*.25)}S>0&&(S-=B,S<=0&&(R.intensity=0))},e}var za=new Y;function _i(n,e,t,i,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),l=Math.PI/4;za.copy(e),za[i]=0,za.normalize();let c=.5*o/(o+a),h=1-za.angleTo(n)/l;return Math.sign(za[t])===1?h*c:a/(o+a)+c+c*(1-h)}var Ba=class n extends Ut{constructor(e=1,t=1,i=1,s=2,r=.1){let o=s*2+1;if(r=Math.min(e/2,t/2,i/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:i,segments:s,radius:r},o===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let l=new Y,c=new Y,h=new Y(e,t,i).divideScalar(2).subScalar(r),u=this.attributes.position.array,f=this.attributes.normal.array,d=this.attributes.uv.array,p=u.length/6,v=new Y,x=.5/o;for(let m=0,y=0;m<u.length;m+=3,y+=2)switch(l.fromArray(u,m),c.copy(l),c.x-=Math.sign(c.x)*x,c.y-=Math.sign(c.y)*x,c.z-=Math.sign(c.z)*x,c.normalize(),u[m+0]=h.x*Math.sign(l.x)+c.x*r,u[m+1]=h.y*Math.sign(l.y)+c.y*r,u[m+2]=h.z*Math.sign(l.z)+c.z*r,f[m+0]=c.x,f[m+1]=c.y,f[m+2]=c.z,Math.floor(m/p)){case 0:v.set(1,0,0),d[y+0]=_i(v,c,"z","y",r,i),d[y+1]=1-_i(v,c,"y","z",r,t);break;case 1:v.set(-1,0,0),d[y+0]=1-_i(v,c,"z","y",r,i),d[y+1]=1-_i(v,c,"y","z",r,t);break;case 2:v.set(0,1,0),d[y+0]=1-_i(v,c,"x","z",r,e),d[y+1]=_i(v,c,"z","x",r,i);break;case 3:v.set(0,-1,0),d[y+0]=1-_i(v,c,"x","z",r,e),d[y+1]=1-_i(v,c,"z","x",r,i);break;case 4:v.set(0,0,1),d[y+0]=1-_i(v,c,"x","y",r,e),d[y+1]=1-_i(v,c,"y","x",r,t);break;case 5:v.set(0,0,-1),d[y+0]=_i(v,c,"x","y",r,e),d[y+1]=1-_i(v,c,"y","x",r,t);break}}static fromJSON(e){return new n(e.width,e.height,e.depth,e.segments,e.radius)}};var Ki=new Gn({vertexColors:!0,roughness:.82,metalness:.04}),Ga=new Gn({vertexColors:!0,roughness:.6,metalness:.15}),Rh=new Xe;function Mi(n,e){n.attributes.normal||n.computeVertexNormals(),n=n.index?n.toNonIndexed():n;let t=n.attributes.position.count,i=new Float32Array(t*3),s=n.attributes.normal.array;Rh.set(e);for(let r=0;r<t;r++){let o=.8+s[r*3+1]*.2+s[r*3]*.06;i[r*3]=Rh.r*o,i[r*3+1]=Rh.g*o,i[r*3+2]=Rh.b*o}n.setAttribute("color",new qt(i,3));for(let r of Object.keys(n.attributes))r!=="position"&&r!=="normal"&&r!=="color"&&n.deleteAttribute(r);return n}function Ke(n,e,t,i=0){let s=new io(n.map(a=>new ge(a[0],a[1]))),r=Math.min(.006,e*.18),o=new pa(s,{depth:Math.max(.001,e-r*2),bevelEnabled:!0,bevelThickness:r,bevelSize:r*.8,bevelSegments:2,steps:1,curveSegments:8});return o.translate(0,0,-e/2+r),o.rotateY(Math.PI/2),o.translate(i,0,0),Mi(o,t)}function ht(n,e,t,i,s,r=7,o=0,a=n){let l=new zn(a,n,t-e,Math.max(14,r*2));return l.rotateX(-Math.PI/2),l.translate(o,i,-(e+t)/2),Mi(l,s)}function Be(n,e,t,i,s,r,o=0){let a=new Ut(n,e,t);return a.translate(o,s,-i),Mi(a,r)}function sn(n,e,t,i,s,r,o=0,a=Math.min(n,e,t)*.3){let l=new Ba(n,e,t,2,Math.min(a,Math.min(n,e,t)*.49));return l.translate(o,s,-i),Mi(l,r)}function _r(n,e,t,i,s,r,o=0,a=!1){let l=new fi(1,18,12,0,Math.PI*2,0,a?Math.PI/2:Math.PI);return l.scale(n,e,t),l.translate(o,s,-i),Mi(l,r)}function Gf(n,e,t,i,s,r=0,o=0){let a=new zn(n,e,t,14);return a.translate(o,i,-r),Mi(a,s)}var Lm=[{name:"Original",b:null,w:null,sw:"#3a3c40"},{name:"Desierto",b:"#b59a6c",w:"#8a6c44",sw:"#b59a6c"},{name:"Bosque",b:"#4f6040",w:"#3d4a30",sw:"#4f6040"},{name:"\xC1rtico",b:"#dfe4ea",w:"#b9c2cc",sw:"#dfe4ea"},{name:"Ne\xF3n",b:"#2b1f47",w:"#ff3fa4",sw:"#ff3fa4"},{name:"Oro",b:"#c9a23a",w:"#6b4a24",sw:"#c9a23a"},{name:"Carmes\xED",b:"#7a1a1a",w:"#2a1a1a",sw:"#9a2020"},{name:"Cobalto",b:"#1f3f8a",w:"#9aa6b8",sw:"#2f5fc0"}],Ih=(n,e)=>n&&typeof n=="object"?n[e]|0:n|0,bb="#34373c",Ch="#8b5a2e",Sb="#6e4423",Wf="#5a5f66";function Fm(n){let e=[],t=(l,c="m")=>e.push([l,c]),i=null,s=[.3,.05],r=(l,c=.28,h=.11,u=.032)=>t(Ke([[.03,.02],[-.02,.02],[-.02-Math.sin(c)*h,.02-h],[.03-Math.sin(c)*h,.02-h]],u,l),"w");switch(n){case"ak47":case"galil":case"sg553":{let l=n==="ak47"?Ch:n==="galil"?"#4b4635":"#55543f";t(Ke([[-.07,.02],[.27,.02],[.27,.095],[-.07,.095]],.046,n==="ak47"?"#2c2d2f":n==="galil"?"#3a3830":"#4a4a3e"),"b"),t(Ke([[-.07,.09],[-.44,.07],[-.46,-.06],[-.41,-.07],[-.2,0],[-.07,.02]],.038,l),"w"),t(Ke([[.27,.025],[.5,.035],[.5,.09],[.27,.095]],.05,l),"w"),t(Ke([[.27,.098],[.53,.105],[.53,.125],[.27,.12]],.026,bb),"m"),t(ht(.011,.5,.72,.065,"#1c1d1f")),t(Be(.006,.05,.012,.66,.1,"#1c1d1f")),t(ht(.016,.69,.75,.065,"#1c1d1f",6)),t(Be(.02,.025,.04,.2,.105,"#1c1d1f")),n==="sg553"&&t(ht(.02,-.02,.14,.14,"#1d1d1d",8)),r(n==="ak47"?Sb:"#2a2a2a"),t(Ke([[.09,.02],[.17,.02],[.27,-.17],[.19,-.19]],.032,n==="ak47"?"#7a4f2a":"#2b2b2b"),"w"),t(Ke([[.04,.02],[.08,.02],[.08,-.025],[.04,-.03]],.008,"#1c1d1f"),"m"),i=[.38,.03],s=[.75,.065];break}case"m4a4":case"m4a1s":case"famas":case"aug":{if(n==="famas"||n==="aug"){let l=n==="aug"?"#5d6a52":"#3c4248";t(Ke([[-.36,0],[.28,0],[.32,.08],[.28,.11],[-.36,.11],[-.38,.05]],.055,l),"b"),n==="famas"?t(Ke([[-.2,.11],[.2,.11],[.22,.16],[-.18,.16]],.016,l),"b"):t(ht(.022,-.06,.12,.15,"#1d1d1d",8)),t(ht(.011,.3,.52,.05,"#1c1d1f")),r("#2a2a2a",.2),t(Ke([[-.18,0],[-.1,0],[-.08,-.15],[-.16,-.16]],.03,"#262626"),"w"),t(Ke([[.12,0],[.17,0],[.15,-.09],[.11,-.09]],.03,l),"b"),i=[.14,-.03],s=[.52,.05]}else t(Ke([[-.06,.02],[.24,.02],[.24,.1],[-.06,.1]],.046,"#2f3236"),"b"),t(Ke([[-.06,.1],[.24,.1],[.24,.12],[-.06,.12]],.028,"#1f2124"),"m"),t(ht(.012,-.32,-.06,.075,"#25272a",6)),t(Ke([[-.2,.1],[-.38,.1],[-.38,-.02],[-.3,-.02],[-.2,.05]],.036,"#222428"),"w"),t(Ke([[.24,.025],[.5,.03],[.5,.105],[.24,.105]],.05,"#2a2c30"),"b"),t(Be(.012,.045,.012,.5,.13,"#1c1d1f")),t(Be(.03,.02,.03,0,.135,"#1c1d1f")),n==="m4a1s"?(t(ht(.011,.5,.55,.065,"#1c1d1f")),t(ht(.022,.55,.82,.065,"#1a1b1d",10)),s=[.82,.065]):(t(ht(.011,.5,.7,.065,"#1c1d1f")),t(ht(.015,.66,.72,.065,"#1c1d1f",6)),s=[.72,.065]),r("#232427",.3),t(Ke([[.09,.02],[.155,.02],[.18,-.15],[.115,-.155]],.03,"#26272a"),"w"),i=[.38,.03];break}case"awp":case"ssg08":case"g3sg1":case"scar20":{let l=n==="awp"?"#3f5b3a":n==="ssg08"?"#3e4c5e":n==="g3sg1"?"#2d302d":"#2b2e33",c=n==="awp"?1.15:1;t(Ke([[-.52,.04],[-.3,.06],[-.1,.03],[.4,.03],[.42,.09],[-.06,.1*c],[-.22,.1*c],[-.52,.09*c],[-.54,-.07],[-.44,-.08],[-.2,-.05],[-.08,-.06],[-.06,0]],.05*c,l),"b"),t(Ke([[-.14,.04],[-.24,.04],[-.24,-.02],[-.14,-.02]],.052*c,"#0d0d0d"),"m"),t(ht(.013*c,.4,n==="awp"?1.05:.92,.065,"#1c1d1f",7,0,.011*c)),t(ht(.028*c,-.08,.26,.15*c,"#191a1c",10)),t(ht(.036*c,.2,.3,.15*c,"#191a1c",10,0,.028*c)),t(ht(.033*c,-.14,-.07,.15*c,"#191a1c",10,0,.026*c)),t(Be(.016,.05,.02,.02,.12*c,"#1c1d1f")),t(Be(.016,.05,.02,.18,.12*c,"#1c1d1f")),(n==="awp"||n==="ssg08")&&t(Be(.06,.012,.012,-.04,.09,"#2a2a2a",.04)),t(Ke(n==="g3sg1"||n==="scar20"?[[.06,.03],[.12,.03],[.13,-.12],[.07,-.12]]:[[.06,.03],[.12,.03],[.12,-.04],[.06,-.04]],.03,"#222"),"w"),i=[.3,.02],s=[n==="awp"?1.05:.92,.065];break}case"p90":{t(Ke([[-.22,.02],[.28,.02],[.32,.07],[.3,.11],[-.22,.12],[-.25,-.04],[-.12,-.08],[-.05,-.02],[.02,-.08],[.1,-.08],[.12,.02]],.06,"#3a3c3e"),"b"),t(Ke([[-.18,.12],[.2,.12],[.2,.15],[-.18,.15]],.04,"#2a2a2a"),"m"),t(ht(.011,.3,.38,.06,"#1c1d1f")),i=[.12,-.04],s=[.38,.06];break}case"mac10":{t(Ke([[-.05,.02],[.2,.02],[.2,.11],[-.05,.11]],.06,"#2a2b2e"),"b"),t(ht(.012,.2,.27,.07,"#1c1d1f")),t(Ke([[-.01,.02],[.04,.02],[.04,-.2],[-.01,-.2]],.03,"#222"),"w"),t(Be(.004,.06,.14,-.12,.08,"#1c1d1f",.02)),i=[.17,0],s=[.27,.07];break}case"mp9":case"mp7":case"ump":case"mp5":case"bizon":{let l=n==="ump"||n==="mp5"||n==="bizon"?.36:.28;t(Ke([[-.06,.02],[l,.02],[l,.1],[-.06,.1]],.05,n==="mp7"?"#3a3d3f":"#2a2c30"),"b"),t(Ke([[-.06,.09],[-.28,.08],[-.28,0],[-.24,0],[-.06,.04]],.03,"#1f2124"),"w"),r("#232427",.25),n==="bizon"?t(ht(.03,.06,.32,-.01,"#2b2b2b",8)):t(Ke([[.07,.02],[.12,.02],[n==="mp5"?.16:.12,-.15],[n==="mp5"?.11:.07,-.15]],.028,"#222"),"w"),n==="mp5"?(t(ht(.022,l,l+.18,.06,"#1a1b1d",10)),s=[l+.18,.06]):(t(ht(.011,l,l+.06,.06,"#1c1d1f")),s=[l+.06,.06]),i=[l*.75,.01];break}case"nova":case"xm1014":case"sawedoff":case"mag7":{let l=n==="sawedoff"||n==="mag7",c=l?.42:.68;t(Ke([[-.05,.02],[.18,.02],[.18,.1],[-.05,.1]],.05,"#2b2d30"),"b"),t(ht(.016,.18,c,.075,"#1c1d1f",8)),t(ht(.014,.18,c-.06,.04,"#1f2022",8)),t(Ke([[.24,.01],[.46,.01],[.46,.06],[.24,.06]],.045,n==="sawedoff"?Ch:"#2a2a2a"),"w"),n==="mag7"&&t(Ke([[.04,.02],[.12,.02],[.12,-.14],[.04,-.14]],.04,"#2a2a2a"),"w"),n==="sawedoff"?t(Ke([[-.05,.08],[-.12,.06],[-.18,-.08],[-.1,-.09],[-.05,.02]],.035,Ch),"w"):n!=="mag7"?t(Ke([[-.05,.09],[-.42,.06],[-.44,-.07],[-.38,-.08],[-.05,.02]],.04,n==="nova"?"#2a2a2a":"#26272a"),"w"):r("#232427"),i=[.35,0],s=[c,.075];break}case"m249":case"negev":{t(Ke([[-.1,.02],[.32,.02],[.32,.13],[-.1,.13]],.07,"#3a3d36"),"b"),t(Ke([[-.1,.1],[-.44,.08],[-.44,-.06],[-.1,.02]],.04,"#26272a"),"w"),t(ht(.016,.32,.82,.07,"#1c1d1f",8)),t(Ke([[.32,.03],[.55,.03],[.55,.1],[.32,.1]],.06,"#2b2b2b"),"b"),t(Be(.1,.12,.13,.12,-.04,"#3b3b2e",.05)),r("#232427"),i=[.45,.02],s=[.82,.07];break}case"deagle":case"r8":{n==="r8"?(t(ht(.012,.03,.24,.07,Wf,8)),t(ht(.03,-.01,.05,.05,Wf,6)),t(Ke([[-.04,.02],[.04,.02],[.04,.08],[-.04,.08]],.03,Wf),"b"),r(Ch,.35,.1,.03),s=[.24,.07]):(t(Ke([[-.05,.035],[.2,.035],[.21,.06],[.2,.092],[-.05,.092]],.032,"#9aa0a8"),"b"),t(Ke([[-.04,0],[.17,0],[.17,.035],[-.04,.035]],.03,"#8a9098"),"b"),t(Be(.012,.012,.01,.195,.1,"#1c1d1f")),r("#26272a",.25,.11,.036),s=[.21,.065]);break}case"zeus":{t(Ke([[-.04,.02],[.13,.02],[.14,.07],[-.04,.07]],.04,"#2a3a6a"),"b"),t(Be(.045,.035,.02,.14,.045,"#e6c84a")),r("#222",.25,.09),s=[.15,.045];break}case"knife":{t(Ke([[-.12,-.012],[-.005,-.014],[-.005,.014],[-.12,.012],[-.13,0]],.024,"#1f2023"),"w"),t(Ke([[-.005,-.03],[.012,-.03],[.012,.024],[-.005,.024]],.03,"#3a3c40"),"m"),t(Ke([[.012,-.016],[.17,-.012],[.215,.006],[.17,.016],[.06,.016],[.012,.016]],.005,"#c9cfd6"),"b"),t(Ke([[.03,.016],[.16,.016],[.16,.019],[.03,.019]],.007,"#8d949c"),"m"),s=[.21,0];break}case"he":t(Mi(new Ps(.037,0),"#3d4a2c")),t(Be(.016,.02,.016,0,.04,"#999")),t(Be(.008,.05,.016,-.02,.025,"#aaa",.03));break;case"flash":t(ht(.028,-.055,.055,0,"#a0a8b2",8)),t(Be(.016,.02,.016,0,.032,"#777"));break;case"smoke":t(ht(.03,-.065,.065,0,"#5a6670",8)),t(Be(.02,.012,.02,0,.034,"#888"));break;case"decoy":t(ht(.026,-.05,.05,0,"#6b6b5b",6));break;case"incendiary":t(ht(.028,-.06,.06,0,"#a2552c",8));break;case"molotov":t(ht(.03,-.06,.04,0,"#5d7a3a",8)),t(ht(.012,.04,.1,0,"#4d6a2a",6)),t(ht(.016,.1,.13,0,"#e8d6b0",5));break;case"c4":t(Be(.2,.06,.13,0,0,"#b8a27a")),t(Be(.07,.03,.05,.01,.04,"#1d1d1d",.03)),t(Be(.05,.012,.03,.01,.058,"#5bdc6d",.03)),t(Be(.18,.02,.02,-.04,.035,"#a33"));break;case"defuser":t(Be(.16,.05,.1,0,0,"#2d3a55")),t(Be(.04,.04,.12,0,.03,"#d4b13a",.05));break;default:{let l=n==="dualies"?"#9aa0a8":n==="fiveseven"?"#4b4f55":n==="tec9"?"#2d2f33":"#34373c",c=n==="tec9"?.22:.18;t(Ke([[-.04,.032],[c,.032],[c,.075],[-.03,.075],[-.045,.06]],.028,l),"b"),t(Ke([[-.035,0],[c-.02,0],[c-.02,.032],[-.035,.032]],.026,"#222428"),"m"),r(n==="cz75"?"#3a2a1a":"#202124",.22,.1,.03),n==="tec9"&&t(Ke([[.06,0],[.1,0],[.1,-.16],[.06,-.16]],.024,"#202124"),"w"),n==="usp"?(t(ht(.017,c,c+.15,.055,"#1a1b1d",10)),s=[c+.15,.055]):s=[c,.055],t(Be(.008,.012,.008,c-.01,.082,"#111"))}}let o=(l,c,h,u,f,d="#141516",p=.006,v=.006)=>{for(let x=0;x<u;x++)t(Be(f,p,v,l+(c-l)*(u>1?x/(u-1):0),h,d))};if(n==="ak47"||n==="galil"||n==="sg553"){t(ht(.012,.27,.5,.13,"#2a2b2d",8)),t(Be(.05,.03,.03,.26,.122,"#1c1d1f")),t(Be(.008,.012,.03,.08,.06,"#151617",.026)),o(-.05,.22,.098,6,.05,"#232426",.004,.008);for(let l=0;l<4;l++)t(Be(.034,.006,.006,.13+l*.028,-.04-l*.035,"#1e1f21"));t(Be(.05,.016,.02,.48,.03,"#1c1d1f"))}if(n==="m4a4"||n==="m4a1s"){for(let l=0;l<12;l++)t(Be(.03,.008,.006,-.05+l*.026,.126,"#121314"));for(let l=0;l<4;l++)for(let c of[-.026,.026])t(Be(.004,.012,.022,.29+l*.05,.065,"#121314",c));t(Ke([[.48,.105],[.5,.17],[.505,.17],[.52,.105]],.012,"#1c1d1f"),"m"),t(Be(.03,.012,.03,-.07,.112,"#1c1d1f")),t(ht(.008,.12,.15,.08,"#1c1d1f",6,.03));for(let l=0;l<4;l++)t(Be(.04,.006,.005,-.33+l*.07,.065,"#121314",.016));for(let l=0;l<3;l++)t(Be(.032,.005,.005,.13+l*.03,-.05-l*.03,"#1b1c1e"))}if((n==="famas"||n==="aug")&&(o(-.2,.2,.114,8,.012,"#1a1b1c",.005,.03),t(Be(.02,.03,.06,.25,.06,"#1a1b1c"))),n==="awp"||n==="ssg08"||n==="scar20"||n==="g3sg1"){let l=n==="awp"?1.15:1;t(Mi(new Cs(.031*l,12).rotateY(Math.PI).translate(0,.15*l,-.302),"#3a6f9a")),t(Mi(new Cs(.025*l,12).translate(0,.15*l,.142),"#1d3a55")),t(ht(.01,.05,.08,.17*l,"#161718",8,0)),t(Be(.03,.012,.012,-.12,.08,"#1c1d1f",.05)),t(Mi(new fi(.013,6,4).translate(.06,.08,.12),"#222")),n==="awp"&&(t(Be(.012,.03,.02,.36,.03,"#1c1d1f")),o(.43,.6,.065,4,.012,"#121314",.032,.03))}if(n==="deagle"||["glock","usp","p2000","p250","fiveseven","cz75","dualies","tec9"].includes(n)){let l=n==="deagle"?.092:.075,c=n==="deagle"?-.045:-.035;for(let h=0;h<5;h++)for(let u of[-.017,.017])t(Be(.004,.03,.004,c+.006+h*.009,l-.02,"#0f1011",u*(n==="deagle"?1.05:.95)));t(Be(.012,.016,.01,c-.004,l-.004,"#111"))}if(n==="nova"||n==="xm1014")for(let l=0;l<5;l++)t(Be(.006,.05,.05,.27+l*.04,.035,"#151515"));["mp9","mp7","ump","mp5","bizon","mac10","p90"].includes(n)&&(o(-.02,.18,.105,7,.016,"#121314",.006,.02),t(Be(.024,.012,.012,.02,.07,"#111",.03))),(n==="m249"||n==="negev")&&(o(-.06,.28,.135,10,.02,"#151615",.008,.03),t(ht(.008,.6,.65,.115,"#1c1d1f",6)));let a=je[n];if(a&&a.dmg&&a.cat!=="knife"&&a.cat!=="equip"){let l=a.cat==="pistol";t(Ke([[.025,0],[.07,0],[.07,-.006],[.06,-.035],[.025,-.035],[.025,-.029],[.057,-.029],[.064,-.006],[.025,-.006]],.008,"#18191b"),"m"),t(Be(.004,.02,.008,.045,-.012,"#0e0e0f")),t(l?Be(.004,.012,.05,.06,.06,"#0b0b0c",.016):Be(.004,.022,.07,.1,.07,"#0b0b0c",.026))}return{parts:e,fore:i,muzzle:s}}var Xf=new Map,Wa=new Map;function Xa(n){if(!Wa.has(n)){let e=Fm(n);Wa.set(n,{fore:e.fore,muzzle:e.muzzle})}return Wa.get(n)}function br(n,e=0){let t=n+":"+e;if(Xf.has(t))return Xf.get(t);let i=Fm(n),s=Lm[e]||Lm[0],r=je[n]&&je[n].dmg,o=i.parts.map(([l,c])=>{if(!s.b||!r||c!=="b"&&c!=="w"||n==="knife"&&c==="w")return l;let h=l.clone(),u=new Xe(c==="b"?s.b:s.w),f=h.attributes.color.array,d=h.attributes.normal.array;for(let p=0;p<f.length/3;p++){let v=.8+d[p*3+1]*.2+d[p*3]*.06;f[p*3]=u.r*v,f[p*3+1]=u.g*v,f[p*3+2]=u.b*v}return h}),a=yi(o);return Xf.set(t,a),Wa.has(n)||Wa.set(n,{fore:i.fore,muzzle:i.muzzle}),a}function bo(n,e=0){return new Oe(br(n,e),Ki)}var Nm={T:[{name:"Terrorista",shirt:"#4e3b2b",pants:"#363b43",vest:"#3b3426",glove:"#1c1c1c",boots:"#2a241d",skin:"#c49670",head:"balaclava",hc:"#1b1b1b"}],CT:[{name:"Contraterrorista",shirt:"#30342f",pants:"#2c302c",vest:"#3e443a",glove:"#151515",boots:"#141414",skin:"#c49670",head:"sas",hc:"#262a26"}]},km=n=>(Nm[n]||Nm.T)[0],qf={};function Tb(n){let e=n;if(qf[e])return qf[e];let t=km(n),i=n==="T",s=[sn(.4,.5,.24,0,.27,t.shirt,0,.07),_r(.25,.08,.13,0,.47,t.shirt),Gf(.06,.07,.08,.55,t.shirt),sn(.42,.07,.26,0,.03,"#26221c",0,.02),Be(.06,.06,.04,.13,.03,"#8a7a50")];if(i){s.push(Be(.08,.46,.02,.125,.27,"#2e241a",-.12),Be(.08,.46,.02,.125,.27,"#2e241a",.12)),s.push(sn(.36,.2,.27,0,.27,t.vest,0,.04),sn(.06,.32,.27,0,.38,t.vest,.13,.02),sn(.06,.32,.27,0,.38,t.vest,-.13,.02));for(let v of[-.1,0,.1])s.push(sn(.085,.13,.05,.155,.27,"#4a4130",v,.015),sn(.075,.03,.055,.157,.33,"#2a251c",v,.01));s.push(Be(.05,.1,.04,.13,.42,"#1b1b1b",.12),Be(.01,.06,.01,.13,.5,"#111",.13)),s.push(sn(.3,.3,.1,-.17,.3,"#3a3326",0,.04))}else{s.push(sn(.44,.38,.29,0,.32,t.vest,0,.05),sn(.3,.1,.3,0,.5,t.vest,0,.04));for(let v of[-.11,0,.11])s.push(sn(.09,.12,.05,.165,.22,"#353a31",v,.015));s.push(Be(.12,.08,.04,.165,.38,"#2a2e27",-.08),Be(.06,.04,.01,.17,.4,"#8a8f84",.09)),s.push(Be(.14,.12,.07,.12,.42,"#20231f",.15)),s.push(sn(.44,.36,.05,-.15,.32,t.vest,0,.02)),s.push(Be(.12,.1,.245,0,.1,"#3b4038",.1),Be(.1,.08,.245,0,.16,"#24271f",-.12))}let r=yi(s),o=[_r(.115,.135,.12,0,.12,t.skin)],a=t.hc;i?(o.push(_r(.122,.142,.127,0,.125,a)),o.push(sn(.15,.045,.03,.112,.15,t.skin,0,.012)),o.push(Be(.035,.022,.01,.133,.152,"#111",-.05),Be(.035,.022,.01,.133,.152,"#111",.05)),o.push(sn(.19,.045,.04,.1,.225,"#23303a",0,.015),_r(.127,.012,.128,0,.225,"#111"))):(o.push(_r(.142,.135,.148,0,.17,a,0,!0),_r(.148,.02,.155,0,.17,a)),o.push(Be(.03,.05,.08,0,.21,"#1c1f1b",.145),Be(.03,.05,.08,0,.21,"#1c1f1b",-.145)),o.push(Be(.05,.04,.04,.1,.3,"#111")),o.push(sn(.2,.065,.05,.11,.155,"#0e0e0e",0,.02),sn(.16,.04,.012,.137,.156,"#33424a",0,.005)),o.push(_r(.1,.07,.06,.09,.07,"#1d1f1d")),o.push(ht(.032,.12,.18,.04,"#3c3f3a",8,-.07),ht(.032,.12,.18,.04,"#3c3f3a",8,.07)),o.push(Be(.04,.05,.03,.16,.06,"#555")));let l=yi(o),c=yi([Gf(.088,.07,.48,-.23,t.pants),Be(.04,.12,.1,0,-.2,i?"#2b2f35":t.vest,.09),...i?[]:[Be(.1,.16,.06,.02,-.15,"#20231f",.085)]]),h=yi([Gf(.068,.056,.42,-.2,t.pants),sn(.15,.11,.07,.055,-.04,i?"#1f1f1f":"#191b19",0,.03),sn(.14,.13,.26,.045,-.4,t.boots,0,.04),sn(.15,.03,.27,.045,-.465,"#0f0f0f",0,.012)]),u=(v,x,m)=>{let y=new zn(v,x,1,14);return y.rotateX(Math.PI/2),Mi(y,m)},f=u(.066,.058,t.shirt),d=u(.055,.047,t.shirt),p=yi([sn(.085,.09,.11,0,0,t.glove,0,.03)]);return qf[e]={torso:r,head:l,thigh:c,shin:h,upper:f,fore:d,hand:p,S:t}}function Lh(n,e=0){let t=Tb(n),i=new Rt,s=new Rt;i.add(s);let r=new Rt;r.position.y=.92,s.add(r);let o=[];for(let u of[-.11,.11]){let f=new Rt;f.position.set(u,0,0),r.add(f),f.add(new Oe(t.thigh,Ki));let d=new Rt;d.position.y=-.46,f.add(d),d.add(new Oe(t.shin,Ki)),o.push({hip:f,knee:d})}let a=new Rt;r.add(a),a.add(new Oe(t.torso,Ki));let l=new Rt;l.position.y=.53,a.add(l),l.add(new Oe(t.head,Ki));let c=new Rt;c.matrixAutoUpdate=!0,a.add(c);let h=[];for(let u=0;u<2;u++){let f=new Oe(t.upper,Ki),d=new Oe(t.fore,Ki),p=new Oe(t.hand,Ki);a.add(f,d,p),h.push({u:f,f:d,h:p})}return i.userData={body:s,hips:r,legs:o,chest:a,neck:l,gun:c,arms:h,gunId:null,phase:0,team:n,si:e},i}function Nh(n,e,t=0){let i=n.userData,s=e+":"+t;if(i.gunId!==s&&(i.gunId=s,i.gun.clear(),i.info=e?Xa(e):null,i.wid=e,e)){let r=bo(e,t);if(r.scale.setScalar(1.12),i.gun.add(r),e==="dualies"){let o=bo(e,t);o.scale.setScalar(1.12),o.position.x=-.24,i.gun.add(o)}}}var Ha=new Y,wb=new Y,Eb=new Y,Ab=new Y,Rb=new Y;function Om(n,e,t,i,s,r){Ha.subVectors(e,n);let o=Ha.length(),a=(t+i)*.995;o>a&&(Ha.multiplyScalar(a/o),o=a);let l=wb.copy(n).add(Ha),c=(t*t-i*i+o*o)/(2*o),h=Math.sqrt(Math.max(0,t*t-c*c)),u=Eb.copy(Ha).normalize(),f=Ab.copy(s).sub(n);return f.sub(Rb.copy(u).multiplyScalar(f.dot(u))).normalize(),r.copy(n).addScaledVector(u,c).addScaledVector(f,h),l}var Cb=new Y(0,1,0),Dm=new Mt;function Mo(n,e,t){let i=e.distanceTo(t);n.position.copy(e).add(t).multiplyScalar(.5),Dm.lookAt(e,t,Cb),n.quaternion.setFromRotationMatrix(Dm),n.scale.set(1,1,Math.max(.01,i))}var Va=new Y,Vs=new Y,_o=new Y,Um=new Y;function Dh(n,e,t){let i=n.userData;i.phase+=t*Math.min(e.speed,6)*2.4;let s=Math.min(1,e.speed/3)*.6,r=Math.sin(i.phase)*s,o=e.duck;i.hips.position.y=.92-o*.36;let[a,l]=i.legs;a.hip.rotation.x=r-o*1.2,l.hip.rotation.x=-r-o*1.2,a.knee.rotation.x=Math.max(0,-Math.sin(i.phase)*s)*1.2+o*2,l.knee.rotation.x=Math.max(0,Math.sin(i.phase)*s)*1.2+o*2,e.onGround||(a.hip.rotation.x=-.6,l.hip.rotation.x=.2,a.knee.rotation.x=.9,l.knee.rotation.x=.4),i.chest.rotation.x=o*.2;let c=Math.max(-1.2,Math.min(1.2,e.pitch));i.neck.rotation.x=c*.55;let h=i.info,u=i.wid?je[i.wid]?.cat||i.wid:null,f=u==="pistol"||i.wid==="zeus";if(u==="knife"||u==="grenade"||u==="c4"||i.wid==="defuser")i.gun.position.set(.27,.16,-.22),i.gun.rotation.set(c*.5+.3,0,0);else{let d=f?.42:.28;i.gun.position.set(.11,.4+Math.sin(c)*d,-Math.cos(c)*d),i.gun.rotation.set(c,0,0)}i.gun.updateMatrix();for(let d=0;d<2;d++){let p=i.arms[d],v=d===0;Va.set(v?.24:-.24,.46,0);let x=null;h&&(v?x=Vs.set(0,0,u==="knife"?.06:0).applyMatrix4(i.gun.matrix):h.fore&&u!=="knife"?x=Vs.set(0,h.fore[1]*1.12-.02,-h.fore[0]*1.12).applyMatrix4(i.gun.matrix):i.wid==="dualies"?x=Vs.set(-.24,0,0).applyMatrix4(i.gun.matrix):f&&(x=Vs.set(-.04,-.04,.02).applyMatrix4(i.gun.matrix))),x||(x=Vs.set(v?.3:-.3,.02,-.05+r*.15*(v?-1:1))),Um.set(v?.7:-.7,-.5,.4);let m=Om(Va,x,.29,.27,Um,_o);Mo(p.u,Va,_o),Mo(p.f,_o,m),p.h.position.copy(m),p.h.quaternion.copy(p.f.quaternion)}if(i.body.rotation.set(0,0,0),i.body.position.y=0,e.dead>0){let d=e.dead/2.5,p=e.deadDir||1,v=e.deadSide||0,x=Math.min(1,(d*2.2)**2);d*2.2>1&&(x=1+Math.sin((d*2.2-1)*9)*Math.exp(-(d*2.2-1)*5)*.08);let m=1.5*x;i.body.rotation.x=m*p,i.body.rotation.z=v*m*.35,i.body.position.y=Math.sin(m)*.12;let y=Math.min(1,d*2);a.hip.rotation.x=-.25*y*p+v*.2,l.hip.rotation.x=.35*y*p,a.knee.rotation.x=.9*y,l.knee.rotation.x=.25*y,i.neck.rotation.x=-.5*y*p,i.chest.rotation.x=.15*y*p;for(let b=0;b<2;b++){let M=i.arms[b],R=b===0?1:-1;Va.set(R*.24,.46,0),_o.set(R*(.24+.28*y),.46-.12*y,.12*y*p),Vs.set(R*(.3+.45*y),.38-.1*y,.3*y*p),Mo(M.u,Va,_o),Mo(M.f,_o,Vs),M.h.position.copy(Vs)}i.gun.visible=!1}else i.gun.visible=!0}function zm(){let n=new Rt,e=new Rt;n.add(e);let t=new Rt;e.add(t);let i=[];for(let s=0;s<2;s++){let r=new Oe(new Ut(.08,.08,1),Ga),o=new Oe(new Ut(.07,.07,1),Ga),a=new Rt;n.add(r,o,a),i.push({u:r,f:o,h:a})}return n.userData={hold:e,gun:t,arms:i,id:null,team:null},n}var $f={};function Pb(n,e){let t=n+e;if($f[t])return $f[t];let i=km(n,e),s=(l,c,h,u,f)=>{let d=new zn(l,c,h,16);return d.rotateX(Math.PI/2),d.translate(0,0,-u),Mi(d,f)},r=yi([s(.04,.036,1,0,i.shirt),s(.042,.042,.06,-.45,"#1c1c1c")]),o=yi([s(.033,.029,1,0,i.shirt),s(.038,.037,.16,.42,i.vest),s(.031,.031,.05,.49,i.glove)]),a=yi([sn(.05,.065,.075,0,-.01,i.glove,0,.018),sn(.056,.026,.045,.012,-.038,i.glove,0,.011),ht(.011,-.012,.04,.026,i.glove,8,.026),...[0,1,2,3].map(l=>ht(.0085,0,.03,-.045,i.glove,6,-.02+l*.013))]);return $f[t]={sleeve:r,forearm:o,hand:a}}function Bm(n,e,t,i=0,s=0){let r=n.userData,o=e+t+i+":"+s;if(r.key===o)return;r.key=o,r.id=e,r.team=t,r.gun.clear();for(let u of r.arms)u.h.clear();if(!e)return;let a=je[e]?.cat||e,l=new Oe(br(e,s),Ga);if(r.gun.add(l),r.dual=e==="dualies",r.dual){let u=new Oe(br(e,s),Ga);u.position.set(-.21,0,.02),u.rotation.y=-.08,r.gun.add(u)}r.info=Xa(e),r.cat=a;let c=Pb(t,i);for(let u of r.arms)u.u.geometry=c.sleeve,u.f.geometry=c.forearm,u.h.add(new Oe(c.hand,Ga));let h=je[e]&&je[e].mag>1&&a!=="heavy"&&a!=="sniper"||e==="awp";if(r.mag=null,h){let u=new Oe(new Ba(.026,a==="pistol"?.09:.13,.05,2,.006),new Gn({color:"#2a2b2d",roughness:.5,metalness:.4}));u.position.set(0,-.05,-.01),u.rotation.x=.15,u.visible=!1,r.arms[1].h.add(u),r.mag=u}r.base=e==="dualies"?[.12,-.15,-.48]:a==="pistol"||e==="zeus"?[.15,-.125,-.44]:a==="knife"?[.17,-.18,-.4]:a==="grenade"||a==="c4"||e==="defuser"?[.16,-.17,-.38]:a==="sniper"?[.19,-.22,-.55]:[.19,-.2,-.43],r.rot=a==="knife"?[.35,.55,-.25]:a==="grenade"||a==="c4"?[.1,.2,0]:[.03,.07,0],n.traverse(u=>{u.renderOrder=10,u.frustumCulled=!1})}var Yf=new Y,Mr=new Y,Ph=new Y,Zf=new Y,Gs=new Mt;function Hm(n){let e=n.userData;if(!e.id)return;e.hold.updateMatrix(),e.gun.updateMatrix(),Gs.multiplyMatrices(e.hold.matrix,e.gun.matrix);let t=e.info||{},i=e.cat;for(let s=0;s<2;s++){let r=e.arms[s],o=s===0;Yf.set(o?.2:-.22,-.3,.12);let a=null;o?a=Mr.set(.004,-.012,i==="knife"?.065:0).applyMatrix4(Gs):t.fore&&i!=="knife"&&(a=Mr.set(-.004,t.fore[1]-.03,-t.fore[0]).applyMatrix4(Gs));let l=e.reloadK||0;if(!o&&l>.08&&l<.94&&i!=="knife"&&i!=="grenade"&&!e.dual){let u=(l-.08)/.86,f=i==="pistol"?[0,-.11,.02]:[0,-.12,-.14],d=[.05,-.55,.12],p=a?[a.x,a.y,a.z]:null,v=Zf.set(...f).applyMatrix4(Gs).clone(),x=Ph.set(...d).applyMatrix4(Gs).clone(),m=(b,M,R)=>Mr.set(b[0]+(M.x-b[0])*R,b[1]+(M.y-b[1])*R,b[2]+(M.z-b[2])*R),y=b=>b*b*(3-2*b);u<.22?a=p?m(p,v,y(u/.22)):Mr.copy(v):u<.48?a=m([v.x,v.y,v.z],x,y((u-.22)/.26)):u<.74?a=m([x.x,x.y,x.z],v,y((u-.48)/.26)):a=p?m([v.x,v.y,v.z],{x:p[0],y:p[1],z:p[2]},y((u-.74)/.26)):Mr.copy(v),e.mag&&(e.mag.visible=u>.22&&u<.76)}else!o&&e.mag?e.mag.visible=!1:e.dual?a=Mr.set(-.206,-.012,.02).applyMatrix4(Gs):(i==="pistol"||e.id==="zeus")&&(a=Mr.set(-.035,-.065,.025).applyMatrix4(Gs));let c=!!a;if(r.u.visible=r.f.visible=r.h.visible=c,!c)continue;Zf.set(o?.6:-.65,-.7,.3);let h=Om(Yf,a,.4,.4,Zf,Ph);Mo(r.u,Yf,Ph),Mo(r.f,Ph,h),r.h.position.copy(h),r.h.quaternion.setFromRotationMatrix(Gs),!o&&!e.dual&&r.h.rotateZ(.35)}}var Ie=null,Sr=null,Kf=null,Gm=.55,ms={x:0,y:0,z:0,yaw:0};function qa(){if(Ie){Ie.state==="suspended"&&Ie.resume();return}try{Ie=new(window.AudioContext||window.webkitAudioContext),Sr=Ie.createGain(),Sr.gain.value=Gm;let n=Ie.createDynamicsCompressor();n.threshold.value=-14,n.ratio.value=6,Sr.connect(n),n.connect(Ie.destination),Kf=Ie.createBuffer(1,Ie.sampleRate*1.5,Ie.sampleRate);let e=Kf.getChannelData(0);for(let t=0;t<e.length;t++)e[t]=Math.random()*2-1}catch{Ie=null}}function Uh(n){Gm=n,Sr&&(Sr.gain.value=n)}function Wm(n,e,t,i){ms.x=n,ms.y=e,ms.z=t,ms.yaw=i}function Et(n,e=1,t=30){let i=Ie.createGain(),s=e,r=0;if(n){let o=n[0]-ms.x,a=n[1]-ms.y,l=n[2]-ms.z,c=Math.hypot(o,a,l);if(s*=1/(1+(c/t)**2*3),c>.5){let h=Math.cos(ms.yaw),u=-Math.sin(ms.yaw);r=Math.max(-1,Math.min(1,(o*h+l*u)/c))*.8}}if(s<.004)return null;if(i.gain.value=s,Ie.createStereoPanner){let o=Ie.createStereoPanner();o.pan.value=r,i.connect(o),o.connect(Sr)}else i.connect(Sr);return i}function Lt(n,e,t,i,s,r=.7,o="lowpass",a=.002,l=1){let c=Ie.createBufferSource();c.buffer=Kf,c.playbackRate.value=.8+Math.random()*.4;let h=Ie.createBiquadFilter();h.type=o,h.Q.value=r,h.frequency.setValueAtTime(i,e),h.frequency.exponentialRampToValueAtTime(Math.max(30,s),e+t);let u=Ie.createGain();u.gain.setValueAtTime(1e-4,e),u.gain.exponentialRampToValueAtTime(l,e+a),u.gain.exponentialRampToValueAtTime(1e-4,e+t),c.connect(h),h.connect(u),u.connect(n),c.start(e,Math.random()),c.stop(e+t+.05)}function Tt(n,e,t,i,s,r="sine",o=.5,a=.003){let l=Ie.createOscillator();l.type=r,l.frequency.setValueAtTime(i,e),s!==i&&l.frequency.exponentialRampToValueAtTime(Math.max(20,s),e+t);let c=Ie.createGain();c.gain.setValueAtTime(1e-4,e),c.gain.exponentialRampToValueAtTime(o,e+a),c.gain.exponentialRampToValueAtTime(1e-4,e+t),l.connect(c),c.connect(n),l.start(e),l.stop(e+t+.05)}var Vm={pistol:{f:2400,d:.18,b:160,v:.8},smg:{f:2e3,d:.16,b:130,v:.75},rifle:{f:1600,d:.26,b:95,v:1},sniper:{f:1200,d:.55,b:70,v:1.25},heavy:{f:1300,d:.32,b:80,v:1.05},equip:{f:4e3,d:.3,b:300,v:.6}};function Jf(n,e,t,i){if(!Ie)return;let s=Vm[n]||Vm.rifle,r=Ie.currentTime,o=Et(e,(t?.35:s.v)*(e?1:.6),t?12:60);if(o){if(n==="equip"){Lt(o,r,.35,6e3,3e3,2,"bandpass",.002,.7),Tt(o,r,.3,90,60,"sawtooth",.4);return}if(t){Lt(o,r,.09,1800,500,1,"lowpass",.001,.9),Tt(o,r,.05,300,120,"triangle",.3);return}Lt(o,r,s.d,s.f*(i?.7:1),200,.9,"lowpass",.001,1),Lt(o,r,.04,6e3,2500,.8,"highpass",.001,.45),Tt(o,r,s.d*.7,s.b*1.6,s.b*.5,"sine",.9),e&&Lt(o,r+.05,s.d*2.5,700,150,.5,"lowpass",.02,.18)}}function jf(n,e=1){if(!Ie)return;let t=Et(n,.5*e,9);if(!t)return;let i=Ie.currentTime;Lt(t,i,.06,900+Math.random()*400,200,1.2,"lowpass",.002,.7),Tt(t,i,.04,90,60,"sine",.25)}function Xm(n){if(!Ie)return;let e=Et(n,.6,10);if(!e)return;let t=Ie.currentTime;Lt(e,t,.1,700,120,1,"lowpass",.002,.9)}function $a(n,e=2200,t=.4){if(!Ie)return;let i=Et(n,t,8);if(!i)return;let s=Ie.currentTime;Lt(i,s,.03,e,e*.5,3,"bandpass",.001,.9)}function qm(n){if(!Ie)return;let e=Ie.currentTime,t=Et(n,.45,8);t&&(Lt(t,e,.04,1500,700,3,"bandpass",.001,.8),Lt(t,e+.35,.05,2600,1300,4,"bandpass",.001,.9),Lt(t,e+.8,.05,1800,900,4,"bandpass",.001,.9))}function Fh(n,e){if(!Ie)return;let t=Ie.currentTime,i=Et(null,.45);n?Tt(i,t,e?.25:.12,e?2900:1500,e?2700:900,"triangle",.5):Lt(i,t,.07,900,300,1,"lowpass",.002,.6)}function $m(){if(!Ie)return;let n=Ie.currentTime,e=Et(null,.6);Lt(e,n,.12,600,150,1,"lowpass",.002,.9),Tt(e,n,.1,140,70,"sine",.6)}function Ym(){if(!Ie)return;let n=Ie.currentTime,e=Et(null,.25);Tt(e,n,.08,1300,1300,"square",.25),Tt(e,n+.07,.12,1750,1750,"square",.25)}function Qf(n,e){if(!Ie)return;let t=Ie.currentTime,i=Et(n,e?1.6:1.2,e?200:70);i&&(Lt(i,t,e?2.4:1.2,1800,60,.6,"lowpass",.004,1),Tt(i,t,e?1.4:.7,80,30,"sine",1))}function Zm(n){if(!Ie)return;let e=Ie.currentTime,t=Et(n,1.1,50);t&&(Lt(t,e,.4,5e3,800,.7,"lowpass",.002,1),Tt(t,e,.2,120,50,"sine",.8))}function Km(n){if(!Ie||n<.3)return;let e=Ie.currentTime,t=Et(null,.12);Tt(t,e,n,3200,3150,"sine",.3,.02)}function ed(n){if(!Ie)return;let e=Ie.currentTime,t=Et(n,.7,25);t&&Lt(t,e,2.2,2500,500,.4,"highpass",.05,.5)}function Jm(n){if(!Ie)return;let e=Ie.currentTime,t=Et(n,.9,25);t&&(Lt(t,e,1.2,1200,300,.6,"lowpass",.01,.9),Lt(t,e+.05,.3,3e3,1500,2,"bandpass",.001,.5))}function jm(n){if(!Ie)return;let e=Ie.currentTime,t=Et(n,.25,12);t&&Lt(t,e,.25,900+Math.random()*500,300,1,"lowpass",.02,.6)}function Qm(n){if(!Ie)return;let e=Ie.currentTime,t=Et(n,.5,15);t&&(Tt(t,e,.06,900,500,"triangle",.4),Lt(t,e,.04,2500,1200,2,"bandpass",.001,.4))}function td(){if(!Ie)return;let n=Ie.currentTime,e=Et(null,.4);Lt(e,n,.18,400,1600,1,"bandpass",.05,.5)}function nd(n,e){if(!Ie)return;let t=Ie.currentTime,i=Et(n,.6,40);i&&Tt(i,t,.12,e?2600:2100,e?2600:2100,"square",.2)}function id(){if(!Ie)return;let n=Ie.currentTime,e=Et(null,.3);Tt(e,n,.06,1400+Math.random()*600,1400,"square",.15)}function sd(n){if(!Ie)return;let e=Ie.currentTime,t=Et(n,.6,15);t&&(Lt(t,e,.2,3e3,1500,3,"bandpass",.001,.8),Tt(t,e+.1,.25,600,900,"triangle",.3))}function rd(){if(!Ie)return;let n=Ie.currentTime,e=Et(null,.35);Tt(e,n,.06,900,900,"triangle",.4),Tt(e,n+.05,.08,1350,1350,"triangle",.35)}function eg(){if(!Ie)return;let n=Ie.currentTime,e=Et(null,.3);Tt(e,n,.15,220,180,"square",.25)}function tg(){if(!Ie)return;let n=Ie.currentTime,e=Et(null,.35);Lt(e,n,.08,2e3,900,2,"bandpass",.002,.8)}function ng(n){if(!Ie)return;let e=Ie.currentTime,t=Et(null,.32);(n?[523,659,784,1047]:[440,415,392,330]).forEach((s,r)=>{Tt(t,e+r*.11,.5,s,s,"triangle",.35),Tt(t,e+r*.11,.5,s/2,s/2,"sawtooth",.08)})}function ig(){if(!Ie)return;let n=Ie.currentTime,e=Et(null,.25);[392,523].forEach((t,i)=>Tt(e,n+i*.12,.25,t,t,"triangle",.35))}function sg(n,e,t,i,s="triangle",r=.18){for(let o of t)Tt(n,e,i,o,o,s,r,.02),Tt(n,e,i,o*1.003,o*1.003,"sawtooth",r*.18,.02)}function rg(){if(!Ie)return;let n=Ie.currentTime,e=Et(null,.22);[[220,277,330],[196,247,294],[175,220,262],[196,247,330]].forEach((i,s)=>sg(e,n+s*.55,i,.6,"triangle",.12)),[440,494,523,587,659,587,523,494].forEach((i,s)=>Tt(e,n+s*.275,.25,i,i,"square",.05,.01));for(let i=0;i<8;i++)Lt(e,n+i*.275,.05,6e3,3e3,2,"highpass",.001,.15);for(let i=0;i<4;i++)Tt(e,n+i*.55,.2,80,45,"sine",.5)}function og(n){if(!Ie)return;let e=Ie.currentTime,t=Et(null,n?.32:.2);[523,659,784,1047,988,1047,1175,1319].forEach((s,r)=>Tt(t,e+r*.16,.3,s,s,"triangle",.22,.01)),[[262,330,392],[294,370,440],[330,415,494],[349,440,523]].forEach((s,r)=>sg(t,e+r*.32,s,.36,"sawtooth",.05));for(let s=0;s<8;s++)Tt(t,e+s*.16,.12,65,40,"sine",.45),Lt(t,e+s*.16+.08,.06,5e3,2500,1,"highpass",.001,.2)}function ag(){if(!Ie)return;let n=Ie.currentTime,e=Et(null,.28);Lt(e,n,.08,3e3,1500,3,"bandpass",.001,.6),Tt(e,n+.05,.06,1200,1200,"square",.12),Lt(e,n+.45,.06,2500,1200,3,"bandpass",.001,.4)}function lg(n){if(!Ie)return;let e=Ie.currentTime,t=Et(n,.5,80)||Et(null,.3);Tt(t,e,.12,1568,1568,"sine",.35),Tt(t,e+.1,.18,2093,2093,"sine",.3)}var Gt=n=>document.getElementById(n),Lb=n=>String(n).replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]);function cg(n){let{G:e,store:t}=n,i={},s={t:t.get("ls:look",{t:-1}).t??-1},r=new jn,o=document.createElement("canvas");o.width=2,o.height=256;{let w=o.getContext("2d"),C=w.createLinearGradient(0,0,0,256);C.addColorStop(0,"#0f2a6b"),C.addColorStop(.55,"#2d63d6"),C.addColorStop(1,"#7fc4ff"),w.fillStyle=C,w.fillRect(0,0,2,256)}let a=new Qn(o);a.colorSpace=rn,r.background=a;let l=new fn(30,innerWidth/innerHeight,.1,100);r.add(new Hi("#cfe2ff","#2a3a6a",1.4));let c=new Vi("#fff4e0",2.6);c.position.set(2,4,3),r.add(c);let h=new Vi("#7fd0ff",2.2);h.position.set(-3,2.5,-3),r.add(h);let u=new Oe(new zn(.75,.85,.18,24),new Bn({color:"#1b2f66"}));u.position.y=-.09,r.add(u);let f=new Oe(new rr(.8,.025,6,40),new Jt({color:"#7fe0ff"}));f.rotation.x=Math.PI/2,f.position.y=.01,r.add(f);let d=new Rt;r.add(d);for(let w=0;w<14;w++){let C=new Oe(new Vn(.5,30),new Jt({color:"#9fd4ff",transparent:!0,opacity:.06,depthWrite:!1}));C.rotation.z=w/14*Math.PI,d.add(C)}d.position.set(0,1.2,-6);let p=new Rt;r.add(p);let v=null,x="",m=.4,y=null,b=0;function M(){return s.t===1?"CT":"T"}function R(){let w=M(),C=w==="T"?"ak47":"m4a4";w!==x&&(x=w,p.clear(),v=Lh(w,0),Nh(v,C,0),p.add(v))}i.render=(w,C)=>{b+=C,y||(m+=C*.25),p.rotation.y=Math.PI+Math.sin(m)*.6+.35,v&&Dh(v,{speed:0,duck:0,pitch:Math.sin(b*1.3)*.04-.05,onGround:!0,dead:0},C),d.rotation.z+=C*.05;let L=innerWidth/innerHeight;l.aspect=L,l.fov=L<1?46:30,l.updateProjectionMatrix(),l.position.set(L<1?0:.15,1.15,5.2),l.lookAt(L<1?0:.15,.95,0),w.setClearColor("#0f2a6b"),w.clear(),w.render(r,l)},addEventListener("pointerdown",w=>{e.phase==="lobby"&&w.target.tagName==="CANVAS"&&(y={x:w.clientX,s:m})}),addEventListener("pointermove",w=>{y&&(m=y.s-(w.clientX-y.x)*.01)}),addEventListener("pointerup",()=>{y=null});function S(){t.set("ls:look",s),n.sendPref({t:s.t})}i.myPref=()=>({t:s.t}),i.show=()=>{Gt("lobby").hidden=!1;for(let w of document.querySelectorAll("#lobby nav button"))w.onclick=()=>{w.dataset.tab==="settings"?(w.classList.add("on"),n.openSettings(()=>A())):A()};for(let w of document.querySelectorAll("[data-pref]"))w.onclick=()=>{s.t=+w.dataset.pref,S(),A()};Gt("goBtn").onclick=()=>{n.isHost()&&g()&&n.onStart()},Gt("modeBtn").onclick=()=>{Gt("modeSel").hidden=!1,A()},Gt("modeClose").onclick=()=>{Gt("modeSel").hidden=!0},_(),A()},i.hide=()=>{Gt("lobby").hidden=!0,Gt("modeSel").hidden=!0},i.refresh=()=>{Gt("lobby").hidden||A()};function g(){let w=(n.ctx().players||[]).length;return e.cfg.bots||w>=2}function _(){let w=Gt("modes");w.innerHTML="";for(let z of[2,3,5]){let X=document.createElement("div");X.className="mode",X.dataset.s=z,X.innerHTML=`<b>${z}<i>VS</i>${z}</b><small>${z===5?"Cl\xE1sico competitivo":z===3?"Escuadra":"Duelo de parejas"}</small>`,X.onclick=()=>{n.isHost()&&(e.cfg.size=z,n.pushCfg())},w.appendChild(X)}let C=Gt("gmodes");C.innerHTML="";for(let[z,X]of Object.entries(n.MODES)){let q=document.createElement("div");q.className="gmode",q.dataset.m=z,q.innerHTML=`<b>${X.name}</b><small>${X.sub}</small>`,q.onclick=()=>{n.isHost()&&(e.cfg.mode=z,n.pushCfg())},C.appendChild(q)}let L=Gt("botsSeg");L.innerHTML="";for(let[z,X]of[[!0,"Con bots"],[!1,"Sin bots"]]){let q=document.createElement("button");q.textContent=X,q.dataset.v=z,q.onclick=()=>{n.isHost()&&(e.cfg.bots=z,n.pushCfg())},L.appendChild(q)}let T=(z,X,q)=>{z.innerHTML="";for(let[B,U]of X){let H=document.createElement("button");H.textContent=U,H.dataset.k=B,H.onclick=()=>{n.isHost()&&(e.cfg[q]=B,n.pushCfg())},z.appendChild(H)}};T(Gt("len"),Object.entries(n.LENGTHS).map(([z,X])=>[z,X.name+" \xB7 a "+X.win]),"len"),T(Gt("diff"),Object.entries(n.DIFF).map(([z,X])=>[z,X.name]),"diff");let P=Gt("maps");P.innerHTML="";for(let z of n.MAPS){let X=document.createElement("div");X.className="mcard",X.dataset.id=z.id;let q=document.createElement("canvas");q.width=200,q.height=200,X.appendChild(q);let B=document.createElement("div");B.className="mn",B.innerHTML=z.name+"<small>"+z.sub+"</small>",X.appendChild(B),X.onclick=()=>{n.isHost()&&(e.cfg.map=z.id,t.set("ls:map",z.id),n.pushCfg())},P.appendChild(X),n.mapThumb(z.id).then(U=>{if(U){let H=q.getContext("2d");H.fillStyle="#0b1530",H.fillRect(0,0,200,200),H.drawImage(U,0,0,200,200)}})}}function A(){let w=n.ctx(),C=n.isHost(),L=n.myId();for(let H of document.querySelectorAll("#lobby nav button"))H.classList.toggle("on",H.dataset.tab==="play");Gt("meName").textContent=w.me.name,Gt("roomInfo").textContent=w.online?`Sala ${w.roomCode||""} \xB7 ${(w.players||[]).length} jugador${(w.players||[]).length===1?"":"es"}`:"Pr\xE1ctica sin conexi\xF3n";for(let H of document.querySelectorAll("[data-pref]"))H.classList.toggle("on",+H.dataset.pref===s.t);let T=(w.players||[]).map(H=>({...H,pr:e.prefs[H.id]||{}})),P=[0,0],z={};for(let H of T){let E=H.pr.t??-1;(E===0||E===1)&&(z[H.id]=E,P[E]++)}for(let H of T.slice().sort((E,F)=>E.slot-F.slot))if(z[H.id]===void 0){let E=P[0]<=P[1]?0:1;z[H.id]=E,P[E]++}let X=e.cfg.bots?Math.max(P[0],P[1],e.cfg.size):Math.max(P[0],P[1]);Gt("party").innerHTML="<h4>GRUPO</h4>"+T.map(H=>`<div class="pm ${z[H.id]?"ct":"t"} ${H.id===L?"me":""}"><i></i><span>${Lb(H.name)}</span><small>${z[H.id]?"CT":"T"}${(H.pr.t??-1)===-1?" \xB7 auto":""}${H.id===w.hostId?" \xB7 \u{1F451} host":""}</small></div>`).join("")+(e.cfg.bots?`<div class="pm bot"><i></i><span>+ ${Math.max(0,X*2-T.length)} bots</span><small>${n.DIFF[e.cfg.diff].name}</small></div>`:"");let q=n.MAPS.find(H=>H.id===e.cfg.map)||n.MAPS[0];Gt("modeTitle").textContent=`${X} VS ${X}`,Gt("modeSub").textContent=`${n.MODES[e.cfg.mode||"comp"].name} \xB7 ${q.name} \xB7 ${e.cfg.bots?"con bots":"sin bots"}${["comp","casual"].includes(e.cfg.mode||"comp")?" \xB7 "+n.LENGTHS[e.cfg.len].name:""}`,n.mapThumb(q.id).then(H=>{if(!H)return;let E=Gt("modeMap"),F=E.getContext("2d");F.fillStyle="#0b1530",F.fillRect(0,0,E.width,E.height),F.drawImage(H,0,0,E.width,E.height)}),Gt("modeBtn").textContent=C?"CAMBIAR MODO":"VER MODO";let B=Gt("goBtn"),U=g();B.disabled=!C||!U,B.innerHTML=C?U?"JUGAR":"FALTAN JUGADORES":"ESPERANDO AL HOST",Gt("goNote").textContent=!U&&C?"Sin bots hacen falta al menos 2 jugadores en la sala.":C?"":"El host elige el modo y empieza la partida.";for(let H of document.querySelectorAll("#modes .mode"))H.classList.toggle("on",+H.dataset.s===e.cfg.size);for(let H of document.querySelectorAll("#gmodes .gmode"))H.classList.toggle("on",H.dataset.m===(e.cfg.mode||"comp"));for(let H of document.querySelectorAll("#botsSeg button"))H.classList.toggle("on",String(e.cfg.bots)===H.dataset.v);for(let H of document.querySelectorAll("#len button"))H.classList.toggle("on",H.dataset.k===e.cfg.len);for(let H of document.querySelectorAll("#diff button"))H.classList.toggle("on",H.dataset.k===e.cfg.diff);for(let H of document.querySelectorAll(".mcard"))H.classList.toggle("on",H.dataset.id===e.cfg.map);Gt("modeSel").classList.toggle("ro",!C),R()}return i}var kh="ls:cfg",hg={sens:2.1,invert:!1,xStatic:!1,xColor:"#5dff6a",xSize:8,xGap:4,xThick:2,xDot:!1,xOutline:!0,vol:.8,quality:2,buyWheel:!0},Nb=["#5dff6a","#00e5ff","#ffe14a","#ff4a4a","#ff4af0","#ffffff"];function ug(n,e){let t=Object.assign({},hg,n.get(kh,{})),i=n.get("ls:sens",null);i&&!n.get(kh,null)&&(t.sens=+(i*1e3).toFixed(2));let s=n.get("ls:q",null);s!==null&&!n.get(kh,null)&&(t.quality=s);let r=()=>{n.set(kh,t),e&&e(t)},o=document.createElement("div");o.id="settings",o.className="fn-overlay",o.hidden=!0,document.body.appendChild(o);let a=null,l=(v,x)=>`<div class="st-row"><label>${v}</label><div class="st-c">${x}</div></div>`,c=(v,x,m,y,b=M=>M)=>`<input type="range" data-k="${v}" min="${x}" max="${m}" step="${y}" value="${t[v]}"><output data-o="${v}">${b(t[v])}</output>`,h=(v,x,m)=>`<div class="seg" data-t="${v}"><button data-v="1" class="${t[v]?"on":""}">${x}</button><button data-v="0" class="${t[v]?"":"on"}">${m}</button></div>`,u={sens:v=>(+v).toFixed(2),vol:v=>Math.round(v*100)+"%",xSize:v=>v,xGap:v=>v,xThick:v=>v};function f(){o.innerHTML=`<div class="ms-box st-box">
      <h2>CONFIGURACI\xD3N</h2>
      <div class="st-cols">
        <div>
          <h3>MOUSE</h3>
          ${l("Sensibilidad",c("sens",.4,8,.05,u.sens))}
          ${l("Invertir eje Y",h("invert","S\xED","No"))}
          <h3>COMPRA</h3>
          ${l("Men\xFA de compra",`<div class="seg" data-t="buyWheel"><button data-v="1" class="${t.buyWheel?"on":""}">Rueda (CS:GO)</button><button data-v="0" class="${t.buyWheel?"":"on"}">Columnas (CS2)</button></div>`)}
          <h3>SONIDO</h3>
          ${l("Volumen",c("vol",0,1,.05,u.vol))}
          <h3>GR\xC1FICOS</h3>
          ${l("Sombras",`<div class="seg" data-q><button data-v="0" class="${t.quality===0?"on":""}">No</button><button data-v="1" class="${t.quality===1?"on":""}">Bajas</button><button data-v="2" class="${t.quality===2?"on":""}">Altas</button></div>`)}
          <p class="note">Las sombras se aplican al cargar la pr\xF3xima partida.</p>
        </div>
        <div>
          <h3>MIRA</h3>
          <div class="st-prev"><div id="stX" class="xh"><i class="l"></i><i class="r"></i><i class="u"></i><i class="d"></i><b></b></div></div>
          ${l("Estilo",h("xStatic","Est\xE1tica","Din\xE1mica"))}
          ${l("Color",`<div class="st-cols6">${Nb.map(v=>`<button class="sw ${t.xColor===v?"on":""}" data-c="${v}" style="background:${v}"></button>`).join("")}</div>`)}
          ${l("Largo",c("xSize",2,16,1,u.xSize))}
          ${l("Separaci\xF3n",c("xGap",0,12,1,u.xGap))}
          ${l("Grosor",c("xThick",1,5,1,u.xThick))}
          ${l("Punto central",h("xDot","S\xED","No"))}
          ${l("Contorno",h("xOutline","S\xED","No"))}
        </div>
      </div>
      <div class="st-btns"><button class="fn-play small ghost" id="stReset">VALORES POR DEFECTO</button><button class="fn-play small" id="stClose">LISTO</button></div>
    </div>`;for(let v of o.querySelectorAll("input[type=range]"))v.oninput=()=>{let x=v.dataset.k;t[x]=+v.value,o.querySelector(`[data-o="${x}"]`).textContent=(u[x]||(m=>m))(t[x]),r(),d()};for(let v of o.querySelectorAll("[data-t]"))for(let x of v.children)x.onclick=()=>{t[v.dataset.t]=x.dataset.v==="1",r(),f()};for(let v of o.querySelectorAll("[data-q] button"))v.onclick=()=>{t.quality=+v.dataset.v,r(),f()};for(let v of o.querySelectorAll("[data-c]"))v.onclick=()=>{t.xColor=v.dataset.c,r(),f()};o.querySelector("#stReset").onclick=()=>{Object.assign(t,hg),r(),f()},o.querySelector("#stClose").onclick=()=>p(),d()}function d(){od(o.querySelector("#stX"),t,t.xGap)}function p(){o.hidden=!0;let v=a;a=null,v&&v()}return{S:t,open(v){a=v||null,f(),o.hidden=!1},close:p,isOpen:()=>!o.hidden}}function od(n,e,t){if(!n)return;let i=Math.round(t),s=e.xSize,r=e.xThick,o=[i,s,r,e.xColor,e.xDot,e.xOutline].join();if(n._k===o)return;n._k=o;let[a,l,c,h,u]=n.children,f=e.xOutline?"0 0 0 1px rgba(0,0,0,.7)":"none",d=-Math.floor(r/2);for(let p of[a,l,c,h])p.style.background=e.xColor,p.style.boxShadow=f,p.style.display=s>0?"":"none";a.style.cssText+=`;width:${s}px;height:${r}px;top:${d}px;left:${-(i+s)}px`,l.style.cssText+=`;width:${s}px;height:${r}px;top:${d}px;left:${i}px`,c.style.cssText+=`;width:${r}px;height:${s}px;left:${d}px;top:${-(i+s)}px`,h.style.cssText+=`;width:${r}px;height:${s}px;left:${d}px;top:${i}px`,u.style.cssText=`display:${e.xDot?"block":"none"};position:absolute;width:${r}px;height:${r}px;left:${d}px;top:${d}px;background:${e.xColor};box-shadow:${f}`}var En=null,ad={},Db=new Jt({color:"#ffffff"});function Ub(n,e,t,i){e.fillStyle="#fff",e.strokeStyle="#fff",e.lineWidth=3,e.lineJoin="round";let s=t/2,r=i/2,o=(a,l)=>{e.beginPath(),e.moveTo(a-12*l,r-16*l),e.lineTo(a-5*l,r-16*l),e.lineTo(a,r-10*l),e.lineTo(a+5*l,r-16*l),e.lineTo(a+12*l,r-16*l),e.lineTo(a+15*l,r-4*l),e.lineTo(a+13*l,r+18*l),e.lineTo(a-13*l,r+18*l),e.lineTo(a-15*l,r-4*l),e.closePath(),e.fill(),e.fillStyle="#000",e.font=`bold ${10*l}px sans-serif`,e.textAlign="center",e.fillText("100",a,r+8*l),e.fillStyle="#fff"};if(n==="vest")o(s,1);else if(n==="vesthelm")o(s+10,1),e.beginPath(),e.arc(s-14,r+6,11,Math.PI,0),e.lineTo(s-1,r+8),e.lineTo(s-27,r+8),e.closePath(),e.fill();else if(n==="defuser")e.beginPath(),e.moveTo(s-20,r+8),e.quadraticCurveTo(s,r-14,s+18,r-4),e.stroke(),e.beginPath(),e.moveTo(s-20,r-6),e.quadraticCurveTo(s,r+14,s+18,r+4),e.stroke(),e.beginPath(),e.arc(s-2,r+1,3,0,7),e.fill();else if(n==="flash"||n==="smoke"||n==="decoy"||n==="incendiary"){let a=n==="smoke"?30:24,l=n==="smoke"?13:12;if(e.beginPath(),e.roundRect(s-l/2,r-a/2+4,l,a,3),e.fill(),e.fillRect(s-3,r-a/2,6,5),e.fillRect(s+2,r-a/2+1,10,3),e.fillRect(s+9,r-a/2+1,3,12),e.fillStyle="#000",n==="smoke")for(let c=0;c<3;c++)e.fillRect(s-4,r-6+c*7,8,2);n==="decoy"&&e.fillRect(s-4,r,8,3),n==="flash"&&e.fillRect(s-l/2,r+2,l,2)}else if(n==="he"){e.beginPath(),e.ellipse(s,r+4,11,13,0,0,7),e.fill(),e.fillRect(s-3,r-12,6,6),e.fillRect(s+2,r-11,9,3),e.fillRect(s+8,r-11,3,13),e.fillStyle="#000";for(let a=-1;a<=1;a++)e.fillRect(s-10,r+4+a*6,20,1.5)}else if(n==="molotov")e.beginPath(),e.moveTo(s-3,r-16),e.lineTo(s+3,r-16),e.lineTo(s+3,r-6),e.lineTo(s+9,r),e.lineTo(s+9,r+16),e.lineTo(s-9,r+16),e.lineTo(s-9,r),e.lineTo(s-3,r-6),e.closePath(),e.fill(),e.fillRect(s-5,r-22,4,7);else if(n==="c4")e.fillRect(s-20,r-9,40,18),e.fillStyle="#000",e.fillRect(s-4,r-6,14,7);else if(n==="hs")e.beginPath(),e.arc(s,r-2,10,0,7),e.fill(),e.fillStyle="#000",e.fillRect(s-7,r-4,5,4),e.fillRect(s+2,r-4,5,4),e.fillStyle="#fff",e.fillRect(s-6,r+6,12,6);else if(n==="world"||n==="skull")e.beginPath(),e.arc(s,r-3,10,0,7),e.fill(),e.fillRect(s-6,r+4,12,7);else if(n==="fire")e.beginPath(),e.moveTo(s,r-16),e.quadraticCurveTo(s+14,r,s+8,r+14),e.lineTo(s-8,r+14),e.quadraticCurveTo(s-14,r,s,r-16),e.fill();else return!1;return!0}function gs(n,e=160,t=56){let i=n+e+"x"+t;if(ad[i])return ad[i];let s=document.createElement("canvas");s.width=e,s.height=t;let r=s.getContext("2d");if(!Ub(n,r,e,t))try{En||(En={r:new fr({alpha:!0,antialias:!0,preserveDrawingBuffer:!0}),s:new jn,c:new hs(-1,1,1,-1,.01,10)},En.c.position.set(3,0,0),En.c.lookAt(0,0,0),En.r.setClearColor(0,0)),En.r.setSize(e,t);let o=br(n);o.computeBoundingBox();let a=o.boundingBox,l=new Oe(o,Db),c=a.max.z-a.min.z,h=a.max.y-a.min.y,u=e/t,f=Math.max(c/2/u,h/2)*1.12;En.c.left=-f*u,En.c.right=f*u,En.c.top=f,En.c.bottom=-f,En.c.updateProjectionMatrix(),l.position.set(0,-(a.max.y+a.min.y)/2,-(a.max.z+a.min.z)/2),En.s.add(l),En.r.render(En.s,En.c),En.s.remove(l),r.drawImage(En.r.domElement,0,0)}catch{}return ad[i]=s.toDataURL()}var qn=n=>document.getElementById(n),ai=n=>String(n).replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]),oi=(n,e)=>{n._v!==e&&(n._v=e,n.textContent=e)},Tr=n=>je[n]?je[n].name:n==="c4"?"C4":n==="world"?"ca\xEDda":n;function ld(n){let e=n.n,t=document.createElement("canvas");t.width=e,t.height=e;let i=t.getContext("2d"),s=i.createImageData(e,e),r=s.data,o=1e9,a=-1e9;for(let h=0;h<e*e;h++)if(n.cls[0][h]===1||n.cls[0][h]===2){let u=n.top[0][h];u<o&&(o=u),u>a&&(a=u)}let l=Math.max(3,Math.min(a-o,14));for(let h=0;h<e*e;h++){let u=0,f=0,d=0,p=0,v=n.cls[0][h],x=n.top[0][h];if((v===1||v===2)&&!isNaN(x)&&x-o<l+1){let y=Math.max(0,Math.min(1,(x-o)/l));u=70+y*130,f=78+y*118,d=88+y*80,p=235,n.L>1&&!isNaN(n.top[1][h])&&(u*=.72,f*=.72,d*=.8)}else if(v===3){let y=!1;for(let b of[1,-1,e,-e]){let M=h+b;M>=0&&M<e*e&&n.cls[0][M]===1&&(y=!0)}y&&(u=f=d=22,p=230)}n.flags[h]&12&&p&&(u=u*.6+120,f=f*.6+40,d*=.6),r[h*4]=u,r[h*4+1]=f,r[h*4+2]=d,r[h*4+3]=p}i.putImageData(s,0,0);let c=n.info.zones;i.font="bold 34px Rajdhani, sans-serif",i.textAlign="center",i.textBaseline="middle";for(let h of["A","B"]){let u=c[h];u&&(i.fillStyle="#000",i.fillText(h,(u[0]+u[2])/2+1,(u[1]+u[3])/2+1),i.fillStyle="#ffd25a",i.fillText(h,(u[0]+u[2])/2,(u[1]+u[3])/2))}return t}function fg(n,e,t,i,s,r,o){let a=n.getContext("2d"),l=n.width,c=1.25;a.clearRect(0,0,l,l),a.save(),a.beginPath(),a.rect(0,0,l,l),a.clip(),a.translate(l/2,l/2),a.rotate(i.yaw),a.scale(c,c);let h=i.x/t.cell,u=i.z/t.cell;a.drawImage(e,-h,-u);let f=(d,p,v,x=3.4)=>{a.fillStyle=v,a.beginPath(),a.arc(d/t.cell-h,p/t.cell-u,x/c,0,7),a.fill(),a.strokeStyle="#000",a.lineWidth=1/c,a.stroke()};if(r&&(r.s==="planted"||r.s==="dropped")&&(o==="T"||r.s==="planted"&&r.seen)){a.fillStyle=r.s==="planted"?"#ff4038":"#ffb03a";let d=r.x/t.cell-h,p=r.z/t.cell-u;a.fillRect(d-4/c,p-3/c,8/c,6/c)}for(let d of s){if(d.ping){a.strokeStyle=d.col,a.lineWidth=2/c,a.beginPath(),a.arc(d.x/t.cell-h,d.z/t.cell-u,6/c,0,7),a.stroke();continue}f(d.x,d.z,d.col,d.me?0:3.4)}a.restore(),a.fillStyle="#fff",a.beginPath(),a.moveTo(l/2,l/2-7),a.lineTo(l/2+5,l/2+5),a.lineTo(l/2,l/2+2),a.lineTo(l/2-5,l/2+5),a.closePath(),a.fill()}var He={el:{},init(){for(let n of["hud","moneyV","moneyAdd","scT","scCT","pipsT","pipsCT","clock","clockV","bombIco","feed","hpV","arV","helmV","hpB","arB","ammo","wname","magV","resV","slots","xhair","hitmark","centerMsg","prog","progL","progB","hint","dmgDir","scope","flash","hurt","spec","banner","ban1","ban2","buyHint","zoneName","board"])this.el[n]=qn(n)},money(n){oi(this.el.moneyV,String(n))},moneyDelta(n,e){if(!n)return;let t=document.createElement("div");t.className=n<0?"neg":"",t.textContent=(n>0?"+$":"-$")+Math.abs(n)+(e?"  "+e:""),this.el.moneyAdd.appendChild(t),setTimeout(()=>t.remove(),2300)},vitals(n,e,t){oi(this.el.hpV,String(n)),oi(this.el.arV,String(e)),this.el.helmV.hidden=!t,this.el.hpV.parentElement.classList.toggle("low",n<=25),this.el.hpB.style.width=n+"%",this.el.arB.style.width=e+"%"},ammo(n,e,t,i){oi(this.el.wname,n),this.el.ammo.querySelector(".nums").style.visibility=i?"":"hidden",oi(this.el.magV,String(e)),oi(this.el.resV,String(t)),this.el.ammo.classList.toggle("low",i&&e<=5)},clock(n,e,t){let i=Math.max(0,Math.ceil(n));oi(this.el.clockV,t?"":Math.floor(i/60)+":"+String(i%60).padStart(2,"0")),this.el.clock.classList.toggle("red",e),this.el.bombIco.hidden=!t},score(n,e,t,i){oi(this.el.scT,String(n)),oi(this.el.scCT,String(e));let s=(r,o)=>{let a=o.map(l=>l.n+l.a).join();r._k!==a&&(r._k=a,r.innerHTML=o.map(l=>`<i class="${l.a?"":"dead"}" title="${ai(l.n)}">${ai(l.n.slice(0,1).toUpperCase())}</i>`).join(""))};s(this.el.pipsT,t),s(this.el.pipsCT,i)},feed(n,e,t,i,s,r,o={}){let a=document.createElement("div");r&&(a.className="mine");let l=t==="world"?gs("skull",60,40):t==="molotov"||t==="incendiary"?gs("fire",60,40):gs(t,120,40),c=(h,u)=>`<span class="fi ${u}" title="${h}">${h==="cegado"?"\u25C9":h==="sin mira"?"\u2298":h==="humo"?"\u2601":"\u27C2"}</span>`;for(a.innerHTML=(n?(o.bl?c("cegado","bl"):"")+`<span class="${n.team}">${ai(n.name)}</span>`:"")+`<img src="${l}">`+(o.ns?c("sin mira","ns"):"")+(o.sm?c("humo","sm"):"")+(s?c("pared","wb"):"")+(i?`<img class="hs" src="${gs("hs",40,40)}">`:"")+`<span class="${e.team}">${ai(e.name)}</span>`,this.el.feed.appendChild(a);this.el.feed.children.length>6;)this.el.feed.firstChild.remove();setTimeout(()=>a.remove(),7e3)},slots(n,e,t=[],i=0){let s=n.map(o=>o.key+o.id).join()+e+"|"+t.join()+i;if(this.el.slots._k===s)return;this.el.slots._k=s;let r=n.map(o=>`<div class="sl ${o.slot===e?"on":""}"><img src="${gs(o.id,o.id==="knife"?110:150,44)}"><b>${o.key}</b></div>`).join("");t.length&&(r+=`<div class="sl ${e==="g"?"on":""}"><div class="nades">${t.map((o,a)=>`<img class="${e==="g"&&a===i?"on":""}" src="${gs(o,44,52)}">`).join("")}</div><b>4</b></div>`),this.el.slots.innerHTML=r},showSlots(){this.el.slots.style.opacity=1,clearTimeout(this._st),this._st=setTimeout(()=>this.el.slots.style.opacity=.35,1800)},crosshair(n,e,t){let i=this.el.xhair;i._show!==e&&(i._show=e,i.style.display=e?"":"none"),e&&od(i,t,n)},hit(n){let e=this.el.hitmark;e.classList.remove("on"),e.offsetWidth,e.classList.add("on"),e.style.filter=n?"drop-shadow(0 0 2px red) sepia(1) saturate(8) hue-rotate(-30deg)":""},center(n,e=2200){let t=this.el.centerMsg;t.textContent=n,t.style.opacity=1,clearTimeout(this._ct),e&&(this._ct=setTimeout(()=>t.style.opacity=0,e))},progress(n,e){if(e==null){this.el.prog.hidden=!0;return}this.el.prog.hidden=!1,oi(this.el.progL,n),this.el.progB.style.width=(e*100).toFixed(1)+"%"},hint(n){oi(this.el.hint,n||"")},dmgDir(n){let e=document.createElement("i");e.style.transform=`rotate(${n}rad) translateY(-140px)`,this.el.dmgDir.appendChild(e),setTimeout(()=>e.remove(),1500)},radio(n,e){let t=document.createElement("div");t.className="rmsg "+n.team,t.innerHTML=`<b>${ai(n.name)}</b> <i>(radio)</i>: ${ai(e)}`;let i=qn("radioLog");for(i.appendChild(t);i.children.length>5;)i.firstChild.remove();setTimeout(()=>t.remove(),6e3)},endScreen(n,e,t,i,s){let r=qn("endScreen");r.hidden=!1;let o=n.slice().sort((c,h)=>h.mvp-c.mvp||h.k-c.k)[0],a=c=>`<tr class="${c.t} ${c.id===e?"me":""}"><td>${ai(c.n)}${c.id===o.id?' <b class="star">\u2605</b>':""}</td><td>${c.k}</td><td>${c.a}</td><td>${c.d}</td><td>${(c.k/Math.max(1,c.d)).toFixed(2)}</td><td>${c.adr}</td><td>${c.hs}%</td><td>${c.mvp?"\u2605"+c.mvp:""}</td></tr>`,l=c=>`<table><tr><th>Jugador</th><th>K</th><th>A</th><th>D</th><th>K/D</th><th>ADR</th><th>HS%</th><th>MVP</th></tr>${n.filter(h=>h.g===c).sort((h,u)=>u.k-h.k).map(a).join("")}</table>`;r.innerHTML=`<div class="es-box"><h2>${t<0?"EMPATE":"FIN DE LA PARTIDA"}</h2><div class="es-score"><b>${i[0]}</b> \u2013 <b>${i[1]}</b></div>
      <div class="es-mvp"><span>\u2605 MVP DE LA PARTIDA</span><b>${ai(o.n)}</b><small>${o.k} bajas \xB7 ${o.adr} ADR \xB7 ${o.hs}% a la cabeza</small></div>${l(0)}${l(1)}</div>`,setTimeout(()=>{r.hidden=!0},11500)},banner(n,e,t){let i=this.el.banner;if(!e){i.hidden=!0;return}i.className=n||"",i.hidden=!1,oi(this.el.ban1,e),oi(this.el.ban2,t||"")}};function dg(n,e){let t=[...n.players.values()],i=n.players.get(e)?.team,s=l=>`<tr class="${l.team} ${l.alive?"":"dead"} ${l.id===e?"me":""}"><td>${ai(l.name)}${l.inv&&l.inv.c4&&i==="T"?" \u{1F4A3}":""}${l.inv&&l.inv.kit&&i==="CT"&&l.team==="CT"?" \u2702":""}</td><td>${l.team===i?"$"+l.money:""}</td><td>${l.k}</td><td>${l.a}</td><td>${l.d}</td><td>${l.k?Math.round((l.hsK||0)/l.k*100)+"%":"\u2014"}</td><td>${Math.round((l.dmgT||0)/Math.max(1,l.rounds||1))}</td><td>${l.mvp?"\u2605"+l.mvp:""}</td><td>${l.bot?"BOT":l.ping||"\u2014"}</td></tr>`,r=l=>{let c=t.filter(u=>u.team===l).sort((u,f)=>f.k-u.k||u.d-f.d),h=c.reduce((u,f)=>u+(f.money||0),0);return`<div class="tt ${l}">${l==="T"?"TERRORISTAS":"CONTRATERRORISTAS"}${l===i?`<small>plata del equipo $${h}</small>`:""}</div><table><tr><th>Jugador</th><th>Plata</th><th>K</th><th>A</th><th>D</th><th>HS%</th><th>ADR</th><th>MVP</th><th>Ping</th></tr>${c.map(s).join("")}</table>`},o=n.score[n.half===0?0:1],a=n.score[n.half===0?1:0];return`<div class="bh"><span>${ai(n.mapName)} \xB7 ${n.cfg.mode&&n.cfg.mode!=="comp"?{casual:"Casual",dm:"Deathmatch",ar:"Arms Race",retake:"Retakes",practice:"Pr\xE1ctica"}[n.cfg.mode]+" \xB7 ":""}Ronda ${n.round}${n.ot?" \xB7 Tiempo extra "+n.ot:""}</span><span><b style="color:var(--t)">${o}</b> \u2013 <b style="color:var(--ct)">${a}</b></span></div>${r("T")}${r("CT")}`}var bi=null,pg=()=>bi?yo:Nf;function mg(n,e,t,i,s="grid",r=null){let o=qn("buyCols");if(o.innerHTML="",bi=s==="wheel"?{team:n,onBuy:t,onHover:i,onCat:r}:null,qn("buy").classList.toggle("wheel",!!bi),bi){Fb();return}Nf.forEach((a,l)=>{let c=document.createElement("div");c.className="bcol",c.dataset.c=l,c.innerHTML=`<h5><b>${l+1}</b>${a.name}</h5>`,a.items[n].forEach((h,u)=>{let f=je[h],d=document.createElement("div");d.className="bit",d.dataset.id=h,d.innerHTML=`<span class="k">${u+1}</span><span class="n">${ai(f.name)}</span><img src="${gs(h,200,64)}"><span class="p">$${f.price}</span>`,d.onclick=()=>t(h),d.onmouseenter=()=>i(h),d.onmouseleave=()=>i(null),c.appendChild(d)}),o.appendChild(c)})}function Fb(){let n=qn("buyCols"),e=230,t=70,i=yo.length,s=(o,a,l,c)=>{let h=(b,M)=>[e+Math.cos(b)*M,e+Math.sin(b)*M],[u,f]=h(o,c),[d,p]=h(a,c),[v,x]=h(a,l),[m,y]=h(o,l);return`M${u},${f} A${c},${c} 0 0 1 ${d},${p} L${v},${x} A${l},${l} 0 0 0 ${m},${y} Z`},r=`<svg class="wsvg" viewBox="0 0 ${e*2} ${e*2}">`;for(let o=0;o<i;o++){let a=-Math.PI/2+(o-.5)*2*Math.PI/i+.02,l=a+2*Math.PI/i-.04,c=(a+l)/2;r+=`<path class="wsec" data-c="${o}" d="${s(a,l,160,226)}"/><text x="${e+Math.cos(c)*193}" y="${e+Math.sin(c)*193+6}" class="wlab"><tspan class="wk">${o+1}</tspan> ${yo[o].name}</text>`}r+=`<circle cx="${e}" cy="${e}" r="${t}" class="wmid"/></svg><div id="wItems"></div><div id="wMid"></div>`,n.innerHTML=`<div class="wheel">${r}</div>`;for(let o of n.querySelectorAll(".wsec"))o.onclick=()=>bi.onCat(+o.dataset.c),o.onmouseenter=()=>bi.onCat(+o.dataset.c,!0)}function kb(n,e){for(let s of document.querySelectorAll(".wsec"))s.classList.toggle("sel",+s.dataset.c===e);let t=qn("wItems");if(!t)return;let i=e+"|"+bi.team;if(t._k!==i&&(t._k=i,t.innerHTML="",e>=0)){let s=yo[e].items[bi.team],r=s.length;s.forEach((o,a)=>{let l=-Math.PI/2+a*2*Math.PI/r,c=je[o],h=document.createElement("div");h.className="bit wit",h.dataset.id=o,h.style.left=50+Math.cos(l)*24+"%",h.style.top=50+Math.sin(l)*24+"%",h.innerHTML=`<span class="k">${a+1}</span><img src="${gs(o,160,52)}"><span class="n">${ai(c.name)}</span><span class="p">$${c.price}</span>`,h.onclick=()=>bi.onBuy(o),h.onmouseenter=()=>bi.onHover(o),h.onmouseleave=()=>bi.onHover(null),t.appendChild(h)})}qn("wMid").innerHTML=`<b>$${n.money}</b><small>${e>=0?yo[e].name:"Eleg\xED una categor\xEDa"}</small>`}function So(n,e){qn("buyMoney").textContent=n.money,bi&&kb(n,e);for(let t of document.querySelectorAll("#buyCols .bit")){let i=t.dataset.id,r=je[i].price;i==="vesthelm"&&n.ar>=100&&!n.helm&&(r=350),t.querySelector(".p").textContent="$"+r;let o=n.inv.p===i||n.inv.s===i||i==="vest"&&n.ar>=100||i==="vesthelm"&&n.ar>=100&&n.helm||i==="defuser"&&n.inv.kit||i==="zeus"&&n.inv.zeus||n.inv.g.includes(i);t.classList.toggle("own",o),t.classList.toggle("no",n.money<r),t.classList.toggle("ok",n.money>=r&&!o)}for(let t of document.querySelectorAll("#buyCols .bcol"))t.classList.toggle("sel",+t.dataset.c===e)}function cd(n){let e=qn("buyInfo");if(!n){e.hidden=!0;return}let t=je[n];if(t)if(e.hidden=!1,qn("biName").textContent=t.name,qn("biList").innerHTML=(Tm[n]||[]).map(i=>`<li>${ai(i)}</li>`).join("")+(t.reward?`<li>Premio por baja: $${t.reward}</li>`:""),t.dmg&&t.cat!=="knife"){let i=(s,r)=>`<i style="width:${Math.min(100,s/r*100).toFixed(0)}%"></i>`;qn("biStats").innerHTML=`<span>Da\xF1o</span>${i(t.dmg*t.pellets,120)}<span>Cadencia</span>${i(t.rpm,900)}<span>Blindaje</span>${i(t.ap*100,100)}<span>Movilidad</span>${i(t.speed,250)}<span>Cargador</span><span>${t.mag} / ${t.reserve}</span>`}else qn("biStats").innerHTML=""}var Bh=n=>(n.team==="T"?n.skT:n.skCT)|0,gg=.0254,xg=Math.PI/180,an=n=>document.getElementById(n),_d=[{id:"dust2",name:"Dust II",sub:"Desierto \xB7 cl\xE1sico"},{id:"mirage",name:"Mirage",sub:"Pueblo marroqu\xED"}],Xh={get(n,e){try{let t=localStorage.getItem(n);return t?JSON.parse(t):e}catch{return e}},set(n,e){try{localStorage.setItem(n,JSON.stringify(e))}catch{}}},$={players:new Map,drops:new Map,nades:[],bomb:{state:"none",x:0,y:0,z:0,t:0},phase:"lobby",timeLeft:0,round:0,score:[0,0],half:0,time:0,cfg:{map:Xh.get("ls:map","dust2"),len:"corta",size:5,bots:!0,diff:"normal",mode:"comp"},prefs:{}},Qt=null,nt="local",Xt=null,en=null,Hh={},Ed=!1,jt,Wt,un,wr,Eo,gn,kt,Ya=null,Md=null,At=()=>!Qt||Qt.isHost||!Qt.online;function $n(n,e,t){Qt&&Qt.online&&Arcade.send(n,e,t)}$.emit=(n,e)=>{$n(n,e),Id(n,e,nt)};$.emitTo=(n,e,t)=>{let i=$.players.get(n);n===nt?Id(e,t,nt):i&&!i.bot&&$n(e,t,{to:n})};$.end=(n,e)=>{Qt&&Qt.online?Arcade.end({winners:n,text:e}):setTimeout(SS,500)};$.solidAt=(n,e,t)=>fh($.W,n,e,t);$.floorAt=(n,e,t)=>{let i=Os($.W,n,e,t);return i>-1e8?i:t-.5};var Vh=new Map;$.setPlanting=(n,e)=>{e>0?Vh.set(n,e):Vh.delete(n)};$.planting=n=>Vh.get(n)||0;$.fallDamage=(n,e)=>{let t=If(e);t>0&&Xt&&Xt.damage(n.id,n.id,t,"leg","world",{raw:!0})};function Nt(n,e){At()?Xt&&Xt.handle(n,e,nt,{admin:Arcade.admin&&Arcade.admin.active}):$n(n,e,{to:Qt.hostId})}var Ob=["hit","buy","drop","take","nade","plant","defst","defx","defok","adm","fall","timeout","vote","radio","ping"],k={pl:null,slot:"s",throwT:0,throwPow:1,drawT:0,fireT:0,reloadT:0,shots:0,pp:0,py:0,scope:0,ammo:{p:[0,0],s:[0,0]},ammoW:{p:null,s:null},invV:-1,gsel:0,plantT:0,defT:0,defusing:!1,trig:!1,trig2:!1,nadeHold:0,nadeCd:0,stepT:0,deadT:0,spec:null,blind:0,blindMax:0,shake:0,bob:0,kick:0,lastSlot:"k",zeus:!1,sway:[0,0],swayT:[0,0],pickCd:0,voidSent:!1,lastMoney:null,rescope:0,knife2:!1},Ct=()=>$.players.get(nt),tl=ug(Xh,n=>{Uh(n.vol*.7)}),An=tl.S;Uh(An.vol*.7);var on=new Set,Nn=!1,Er=!1,Ar=!1,Eg=0,hd=6,Sn={mx:0,mz:0,fire:!1,look:null},vs=matchMedia("(pointer: coarse)").matches,Ag=vs?Math.min(1,An.quality):An.quality;addEventListener("keydown",n=>{if(n.repeat&&!["KeyW","KeyA","KeyS","KeyD"].includes(n.code)){n.code==="Tab"&&n.preventDefault();return}if($.phase!=="lobby"){if(on.add(n.code),["Tab","Space","ControlLeft","ControlRight","AltLeft","KeyB"].includes(n.code)&&n.preventDefault(),Dn){oS(n);return}Rd(n.code)}});addEventListener("beforeunload",n=>{if($.phase!=="lobby")return n.preventDefault(),n.returnValue="",""});function Rg(){let n=document.documentElement;try{let e=n.requestFullscreen?n.requestFullscreen({navigationUI:"hide"}):null,t=()=>{try{navigator.keyboard&&navigator.keyboard.lock&&navigator.keyboard.lock().catch(()=>{})}catch{}};e&&e.then?e.then(t).catch(()=>{}):t()}catch{}}addEventListener("keydown",n=>{(n.ctrlKey||n.metaKey)&&["KeyW","KeyS","KeyD","KeyA","KeyR","KeyQ","KeyE","KeyG","KeyB","KeyF"].includes(n.code)&&$.phase!=="lobby"&&n.preventDefault()},!0);addEventListener("keyup",n=>{on.delete(n.code),n.code==="KeyE"&&k.defusing&&Yh()});addEventListener("blur",()=>{on.clear(),Nn=Er=!1});addEventListener("mousedown",n=>{if(qa(),!($.phase==="lobby"||Dn)){if(!Ar&&!vs){document.fullscreenElement||Rg(),ja();return}n.button===0&&(Nn=!0),n.button===2&&(Er=!0,Cd()),n.button===1&&(n.preventDefault(),Bg())}});addEventListener("mouseup",n=>{n.button===0&&(Nn=!1),n.button===2&&(Er=!1)});addEventListener("contextmenu",n=>n.preventDefault());addEventListener("mousemove",n=>{if(!Ar||!k.pl||$.phase==="lobby")return;let e=n.movementX,t=n.movementY,i=Math.abs(e)+Math.abs(t);if(performance.now()-Eg<80||i>120&&i>hd*7)return;hd=hd*.85+Math.min(i,150)*.15;let r=k.scope?Hb():1,o=An.sens/1e3;Ad(e*o/r,t*o/r*(An.invert?-1:1))});addEventListener("wheel",n=>{Ar&&$.phase!=="lobby"&&!Dn&&Cg(n.deltaY>0?1:-1)},{passive:!0});function Ad(n,e){let t=k.pl;t&&(t.yaw-=n,t.pitch=Math.max(-1.5,Math.min(1.5,t.pitch-e)),k.swayT[0]+=n*4,k.swayT[1]+=e*4)}function ja(){if(tl.isOpen())return;let n=jt.domElement;if(!n.requestPointerLock)return;let e=()=>{try{let t=n.requestPointerLock();t&&t.catch&&t.catch(()=>{})}catch{}};try{let t=n.requestPointerLock({unadjustedMovement:!0});t&&t.catch&&t.catch(e)}catch{e()}}document.addEventListener("pointerlockchange",()=>{Ar=document.pointerLockElement===jt.domElement,Ar&&(Eg=performance.now()),Ao()});function Ao(){an("clickPlay").hidden=Ar||vs||$.phase==="lobby"||Dn||!Ed||tl.isOpen()}function Rd(n){let e=Ct();if(e){if(Gh){let t=parseInt(n.replace("Digit",""),10);if(t>=1&&t<=9){let i=Og[Gh][t-1];i&&(i.act?i.act():Nt("radio",{m:i.t}))}zg();return}if((n==="KeyZ"||n==="KeyX"||n==="KeyC")&&$.phase!=="lobby"&&!Dn){tS(n==="KeyZ"?"z":n==="KeyX"?"x":"c");return}if(n==="KeyV"&&!Dn){Bg();return}if(n==="KeyB"){el();return}if(n!=="Tab"){if(n==="BracketLeft"||n==="BracketRight"){An.sens=+Math.max(.4,Math.min(8,An.sens*(n==="BracketLeft"?.92:1.08))).toFixed(2),Xh.set("ls:cfg",An),He.center("Sensibilidad "+An.sens.toFixed(2),1200);return}if(!e.alive){n==="Space"&&Ld(1);return}if(n==="Digit1")Hn("p");else if(n==="Digit2")Hn("s");else if(n==="Digit3")k.slot==="k"&&e.inv.zeus?Hn("z"):(k.slot,Hn("k"));else if(n==="Digit4"){let t=e.inv.g;t.length&&(k.slot==="g"&&(k.gsel=(k.gsel+1)%t.length),Hn("g",!0))}else n==="Digit5"?Hn("c4"):n==="KeyQ"?Hn(k.lastSlot):n==="KeyR"?Pg():n==="KeyG"?Vb():n==="KeyE"?Ig():n==="KeyF"&&(k.inspect=1.6)}}}function zb(){if(!vs)return;an("touch").hidden=!1;let n=an("stick"),e=n.firstElementChild,t=null,i=null;n.addEventListener("touchstart",r=>{t=r.changedTouches[0].identifier;let a=n.getBoundingClientRect();i=[a.left+a.width/2,a.top+a.height/2],r.preventDefault()},{passive:!1}),addEventListener("touchmove",r=>{for(let o of r.changedTouches)if(o.identifier===t){let a=(o.clientX-i[0])/55,l=(o.clientY-i[1])/55,c=Math.hypot(a,l);c>1&&(a/=c,l/=c),Sn.mx=a,Sn.mz=l,e.style.transform=`translate(${a*40}px,${l*40}px)`}else Sn.look&&o.identifier===Sn.look.id&&(Ad((o.clientX-Sn.look.x)*.006,(o.clientY-Sn.look.y)*.006),Sn.look.x=o.clientX,Sn.look.y=o.clientY)},{passive:!0}),addEventListener("touchend",r=>{for(let o of r.changedTouches)o.identifier===t&&(t=null,Sn.mx=Sn.mz=0,e.style.transform=""),Sn.look&&o.identifier===Sn.look.id&&(Sn.look=null)}),jt.domElement.addEventListener("touchstart",r=>{let o=r.changedTouches[0];o.clientX>innerWidth*.35&&(Sn.look={id:o.identifier,x:o.clientX,y:o.clientY}),qa()},{passive:!0});let s=(r,o,a)=>{let l=an(r);l.addEventListener("touchstart",c=>{c.preventDefault(),o()},{passive:!1}),l.addEventListener("touchend",c=>{c.preventDefault(),a&&a()},{passive:!1})};s("tFire",()=>Nn=!0,()=>Nn=!1),s("tJump",()=>on.add("Space"),()=>on.delete("Space")),s("tDuck",()=>on.add("ControlLeft"),()=>on.delete("ControlLeft")),s("tReload",()=>Rd("KeyR")),s("tSwitch",()=>Cg(1)),s("tBuy",()=>el()),s("tUse",()=>{on.add("KeyE"),Ig()},()=>{on.delete("KeyE"),k.defusing&&Yh()}),s("tScope",()=>Cd())}function qs(n,e=Ct()){if(!e)return null;let t=e.inv;return n==="p"?t.p:n==="s"?t.s:n==="k"?"knife":n==="z"?t.zeus?"zeus":null:n==="g"?t.g.length?t.g[Math.min(k.gsel,t.g.length-1)]:null:n==="c4"&&t.c4?"c4":null}var Yn=()=>qs(k.slot)||"knife";function Hn(n,e){qs(n)&&(n===k.slot&&!e||(n!==k.slot&&(k.lastSlot=k.slot),k.slot=n,k.drawT=n==="k"?.35:.6,k.reloadT=0,k.scope=0,k.plantT=0,k.nadeHold=0,k.defusing&&Yh(),$a(null,1400,.25),He.showSlots()))}function Cg(n){let e=["p","s","k","z","g","c4"].filter(i=>qs(i));if(!e.length)return;let t=e.indexOf(k.slot);Hn(e[(t+n+e.length)%e.length])}function qh(){return qs("p")?"p":qs("s")?"s":"k"}function $h(){let n=Ct();if(!(!n||n.inv.v===k.invV)){k.invV=n.inv.v;for(let e of["p","s"]){let t=n.inv[e];if(t!==k.ammoW[e]){let i=k.ammoW[e];k.ammoW[e]=t;let s=je[t];k.ammo[e]=t?n.inv[e+"a"]?[...n.inv[e+"a"]]:[s.mag,s.reserve]:[0,0],t&&e==="p"&&n.alive&&$.phase!=="post"&&i!==t&&Hn("p",!0)}}qs(k.slot)||Hn(qh(),!0)}}function Pg(){let n=k.slot;if(n!=="p"&&n!=="s")return;let e=je[Yn()],t=k.ammo[n];!e.mag||t[0]>=e.mag||t[1]<=0||k.reloadT>0||k.drawT>0||(k.reloadT=e.reload,k.scope=0,qm(null))}function Bb(){let n=k.slot,e=je[Yn()],t=k.ammo[n];if(!t||!e.mag)return;let i=e.mag-t[0],s=ys("ls.ammo")?i:Math.min(i,t[1]);t[0]+=s,ys("ls.ammo")||(t[1]-=s)}var Hb=()=>{let n=je[Yn()];return n&&n.scope?n.scope[Math.max(0,k.scope-1)]:1};function Cd(){let n=Ct();if(!n||!n.alive)return;let e=Yn(),t=je[e];if(t&&t.scope&&k.reloadT<=0&&k.drawT<=0){k.scope=(k.scope+1)%(t.scope.length+1),$a(null,3e3,.2);return}e==="knife"&&k.fireT<=0&&k.drawT<=0&&Dg(!0),t&&t.cat==="grenade"&&!Nn&&k.throwT<=0&&(k.nadeHold=.3)}function Vb(){let n=Ct(),e=k.slot;if(!n.alive)return;let t=k.pl;e==="p"||e==="s"?Nt("drop",{s:e,x:t.x,y:t.y,z:t.z,yaw:t.yaw,ammo:k.ammo[e]}):e==="c4"&&Nt("drop",{s:"c4",x:t.x,y:t.y,z:t.z,yaw:t.yaw})}function Ig(){let n=Ct();if(!n||!n.alive||!k.pl)return;let e=k.pl,t=$.bomb;if(n.team==="CT"&&t.state==="planted"&&Math.hypot(e.x-t.x,e.z-t.z)<1.7&&Math.abs(e.y-t.y)<1.6&&e.onGround){k.defusing||(k.defusing=!0,k.defT=0,Nt("defst",{}),sd(null));return}let i=Lg();i&&Nt("take",{id:i.id,swap:!0,ammo:k.ammo[Hs(i.w)===1?"p":"s"]})}function Yh(){k.defusing=!1,k.defT=0,Nt("defx",{})}function Lg(){let n=k.pl,e=null,t=1e9,i=-Math.sin(n.yaw),s=-Math.cos(n.yaw);for(let r of $.drops.values()){let o=r.x-n.x,a=r.z-n.z,l=Math.hypot(o,a);if(l>2.2||Math.abs(r.y-n.y)>1.5)continue;let c=(o*i+a*s)/Math.max(.01,l);l>.8&&c<.75||l<t&&(t=l,e=r)}return e}var ud=[];function Pd(){ud.length=0;for(let n of $.players.values()){if(!n.alive)continue;let e=st.hStand+(st.hCrouch-st.hStand)*(n.duck||0);ud.push({id:n.id,x:n.x,y:n.y,z:n.z,h:e,alive:!0})}return ud}var Ka=new Y;function Gb(n){if(n.id===nt&&!k.spec)return gn&&gn.userData.gun.getWorldPosition(Ka),null;let e=-Math.sin(n.yaw)*Math.cos(n.pitch),t=Math.sin(n.pitch),i=-Math.cos(n.yaw)*Math.cos(n.pitch);return[n.x+e*.75+Math.cos(n.yaw)*.12,n.y+Mn(n)-.18+t*.6,n.z+i*.75-Math.sin(n.yaw)*.12]}var Wb=0;$.fireBullets=(n,e,t,i,s)=>{let r=s||je[e],o=$.players.get(n),a=Pd(),l=[],c=[],h=new Map,u=!1;for(let v=0;v<r.pellets;v++){let x=i(Math.random),m=bh($.W,$.nades,n,t[0],t[1],t[2],x[0],x[1],x[2],r,a);l.push(m.end.map(y=>+y.toFixed(2)));for(let y of m.impacts)c.push(y.map(b=>+b.toFixed(2)));if(m.hit){let y=h.get(m.hit.id)||{d:0,part:"leg",pos:m.hit.pos,wb:m.wb};y.d+=m.hit.dmg,yg(m.hit.part)>yg(y.part)&&(y.part=m.hit.part),h.set(m.hit.id,y),m.wb&&(u=!0)}}let f=[...h.entries()].map(([v,x])=>[v,x.pos.map(m=>+m.toFixed(2)),x.part==="head"?1:0]),d=n===nt?k.blind>.6:!!(o&&o.blindT>$.time),p=r.cat==="sniper"&&!(n===nt?k.scope:o&&o.scoped);Ng(n,e,t,l,c,f,r),$n("sh",{i:n,w:e,o:t.map(v=>+v.toFixed(2)),e:l,m:c.slice(0,8),h:f});for(let[v,x]of h){let m={t:v,w:e,part:x.part,d:+x.d.toFixed(1),wb:x.wb,sm:_h($.nades,t[0],t[1],t[2],x.pos[0],x.pos[1],x.pos[2]),bl:d,ns:p};n===nt?Nt("hit",m):At()&&Xt&&Xt.handle("hit",m,n)}At()&&en&&o&&en.heard(t[0],t[1],t[2],o.team,!r.silent)};var yg=n=>n==="head"?3:n==="chest"?2:n==="stomach"?1:0;function Ng(n,e,t,i,s,r,o){o=o||je[e];let a=$.players.get(n),l=n===nt&&!k.spec,c=k.spec===n,h=l||c?null:Gb(a||{yaw:0,pitch:0,x:t[0],y:t[1]-1.6,z:t[2]}),u=l||c?[Ka.x,Ka.y,Ka.z]:h;if(o.cat!=="knife"){for(let d of i)(o.pellets>1?Math.random()<.35:Wb++%(o.cat==="pistol"?1:2)===0)&&kt.tracer(u,d);if(!o.silent&&o.cat!=="equip"&&kt.flashLight(u,o.cat==="sniper"?1.5:1),a&&a.model&&(a.flashT=.05),(l||c)&&(k.flashT=.05),u&&o.cat!=="equip"){kt.muzzleSmoke(u);let d=a?a.id===nt&&k.pl?k.pl.yaw:a.yaw||0:0;e==="nova"||e==="sawedoff"||e==="mag7"||e==="awp"||e==="ssg08"||e==="r8"||kt.shell([u[0]+Math.sin(d)*.25,u[1]-.05,u[2]+Math.cos(d)*.25],Math.cos(d),-Math.sin(d),o.pellets>1)}}let f=$.cfg.map==="mirage"?["#d9d2c4","#e8e1d2"]:["#c9a776","#d8c09a"];for(let d of s)kt.impact([d[0],d[1],d[2]],[d[3],d[4],d[5]],d[4]>.7?f[0]:f[1]),l&&$.cfg.mode==="practice"&&kt.debugBox(d);for(let d of r){let p=[d[1][0]-t[0],d[1][1]-t[1],d[1][2]-t[2]],v=Math.hypot(...p)||1,x=p.map(y=>y/v);kt.blood(d[1],x,d[2]);let m=Ni($.W,d[1][0],d[1][1],d[1][2],x[0],x[1]-.3,x[2],2.5);m&&kt.decalC([d[1][0]+x[0]*m.t,d[1][1]+(x[1]-.3)*m.t,d[1][2]+x[2]*m.t],[m.nx,m.ny,m.nz],"#6e0b0e",.35+(d[2]?.2:0))}o.cat!=="knife"&&Jf(o.cat,l?null:t,!!o.silent,e==="deagle"||e==="r8")}function Xb(){let n=Ct(),e=k.pl,t=Yn(),i=je[t];if(!i||k.drawT>0||k.reloadT>0||k.fireT>0||$.phase==="freeze"||$.phase==="over")return;if(i.cat==="knife"){(!k.trig||i.auto)&&Dg(!1);return}if(!i.auto&&k.trig)return;let s=k.slot==="z"?null:k.slot;if(s&&k.ammo[s][0]<=0){k.trig||($a(null,2600,.35),k.trig=!0),Pg();return}k.trig=!0,ys("ls.aim")&&qb();let r={speed:Math.hypot(e.vx,e.vz),onGround:e.onGround,duck:e.duck,scoped:k.scope>0,shots:k.shots},o=ys("ls.norecoil")?i.spread*.2:ka(i,r),a=[e.x,e.y+Mn(e),e.z],l=ys("ls.norecoil")?0:k.pp,c=ys("ls.norecoil")?0:k.py;$.fireBullets(nt,t,a,f=>vo(e.yaw,e.pitch,l,c,o,f));let[h,u]=Mh(i,k.shots,Math.random);k.pp=Math.min(i.kickCap||12,k.pp+h),k.py+=u,k.shots++,k.kick=Math.min(1,k.kick+(i.cat==="sniper"?1:i.cat==="pistol"?.6:.4)),k.fireT=60/i.rpm,s&&!ys("ls.ammo")&&k.ammo[s][0]--,t==="zeus"&&Nt("drop",{s:"zeus"}),(t==="awp"||t==="ssg08")&&k.scope&&(k.rescope=k.scope,k.scope=0)}function Dg(n){let e=k.pl,t=je.knife,i=[e.x,e.y+Mn(e),e.z],s={...t,dmg:n?65:40,range:72,rangeMod:1,pellets:1},r=vo(e.yaw,e.pitch,0,0,0,Math.random),o=bh($.W,$.nades,nt,i[0],i[1],i[2],r[0],r[1],r[2],s,Pd());if(o.hit){let a=$.players.get(o.hit.id);a&&Math.cos(Zh(a.yaw,e.yaw))>.5&&(o.hit.dmg=n?180:90)}if(o.hit)Nt("hit",{t:o.hit.id,w:"knife",part:"chest",d:o.hit.dmg}),kt.blood(o.hit.pos,r,!1),Fh(!1);else if(o.impacts.length){let a=o.impacts[0];kt.impact([a[0],a[1],a[2]],[a[3],a[4],a[5]]),$a(a,1800,.5)}else td();k.fireT=n?1:.45,k.kick=1,k.knife2=n,$n("sh",{i:nt,w:"knife",o:i,e:[o.end],m:[],h:o.hit?[[o.hit.id,o.hit.pos,0]]:[]})}var Zh=(n,e)=>{let t=n-e;for(;t>Math.PI;)t-=Math.PI*2;for(;t<-Math.PI;)t+=Math.PI*2;return t};function qb(){let n=Ct(),e=k.pl,t=[e.x,e.y+Mn(e),e.z],i=null,s=.35;for(let r of $.players.values()){if(!r.alive||r.team===n.team)continue;let o=r.y+(st.hStand+(st.hCrouch-st.hStand)*(r.duck||0))-.12,a=r.x-t[0],l=o-t[1],c=r.z-t[2],h=Math.atan2(-a,-c),u=Math.atan2(l,Math.hypot(a,c)),f=Math.hypot(Zh(h,e.yaw),u-e.pitch);f<s&&Oa($.W,$.nades,t,[r.x,r.y,r.z,1])&&(s=f,i=[h,u])}i&&(e.yaw=i[0],e.pitch=i[1])}function $b(n){let e=Ct(),t=k.pl,i=Yn();if(!je[i]||je[i].cat!=="grenade"||k.nadeCd>0)return;let s=[t.x,t.y+Mn(t),t.z],r={i:nt,ty:i,tm:e.team,o:s.map(a=>+a.toFixed(3)),yaw:+t.yaw.toFixed(4),pitch:+t.pitch.toFixed(4),v:[+t.vx.toFixed(3),+t.vz.toFixed(3)],pw:n};Ug(r),$n("nd",r),Nt("nade",{type:i}),k.nadeCd=.6,td();let o=e.inv.g.indexOf(i);o>=0&&(e.inv.g=e.inv.g.slice(),e.inv.g.splice(o,1)),setTimeout(()=>{k.throwT=0,qs("g")?Hn("g",!0):Hn(qh(),!0)},380)}var Qa=new Map;function Ug(n){let e=Ff(n.ty,n.i,n.tm,n.o[0],n.o[1],n.o[2],n.yaw,n.pitch,n.v[0],n.v[1],n.pw);e.key=Math.random(),$.nades.push(e);let t=bo(n.ty);t.scale.setScalar(1.6),Wt.add(t),Qa.set(e,t)}var fd=[];function Yb(n){fd.length=0;for(let e of $.nades)kf($.W,e,n,fd);for(let e of fd)Zb(e);for(let e=$.nades.length-1;e>=0;e--){let t=$.nades[e],i=Qa.get(t);if(t.state==="fly"&&!t.rest&&Math.random()<.5&&kt.particle(t.x,t.y,t.z,0,.1,0,.03,.4,"#cfcac0",-.1,.1),i&&(t.state==="fly"||t.type==="smoke"||t.type==="decoy"?(i.position.set(t.x,t.y,t.z),i.rotation.x+=n*(t.rest?0:9),i.visible=t.state!=="done"):i.visible=!1),t.type==="decoy"&&t.state==="active"&&(t.dc=(t.dc||0)-n,t.dc<=0)){t.dc=.25+Math.random()*1.2;let s=1+Math.floor(Math.random()*3);for(let r=0;r<s;r++)setTimeout(()=>Jf("rifle",[t.x,t.y,t.z]),r*110);At()&&en&&en.heard(t.x,t.y,t.z,t.team,!0)}(t.type==="molotov"||t.type==="incendiary")&&t.state==="active"&&!t.air&&(t.ft=(t.ft||0)-n,t.ft<=0&&(t.ft=.6,jm([t.x,t.y,t.z]))),t.state==="done"&&($.nades.splice(e,1),i&&(Wt.remove(i),Qa.delete(t)))}}function Zb(n){let e=n.g,t=[e.x,e.y,e.z];if(n.type==="bounce"){Qm(t);return}if(n.type==="det")if(e.type==="he"){kt.explosion(t,!1),Qf(t,!1);let i=Os($.W,e.x,e.z,e.y+.5);i>-1e8&&e.y-i<1.5&&kt.decalC([e.x,i,e.z],[0,1,0],"#1d1a17",2.6),kg(t,12,.5),At()&&Xt&&Xt.heBlast(e,(s,r)=>{let o=Math.hypot(r.x-s.x,r.y+1-s.y,r.z-s.z),a=Ni($.W,s.x,s.y+.15,s.z,(r.x-s.x)/o,(r.y+1-s.y-.15)/o,(r.z-s.z)/o,o);return!a||a.t>=o-.2})}else if(e.type==="flash"){if(kt.flashPop(t),Zm(t),Kb(e),At()&&en){for(let i of $.players.values())if(i.bot&&i.alive){let s=Fg(e,i.x,i.y+Mn(i),i.z,i.yaw,i.pitch);s>0&&en.flash(i,s)}}}else if(e.type==="smoke"){kt.smoke(e,$.W),ed(t);for(let i of $.nades)(i.type==="molotov"||i.type==="incendiary")&&i.state==="active"&&Math.hypot(i.x-e.x,i.z-e.z)<Ht.smokeR+1&&(i.life=Math.min(i.life,.3))}else if(e.type==="molotov"||e.type==="incendiary"){if(e.air){kt.explosion(t,!1);return}if($.nades.some(s=>s.type==="smoke"&&s.state==="active"&&Math.hypot(s.x-e.x,s.z-e.z)<Ht.smokeR)){e.life=.05,ed(t);return}kt.fire(e,$.W,Os),Jm(t)}else e.type==="decoy"&&(e.dc=.5)}function Fg(n,e,t,i,s,r){let o=n.x-e,a=n.y-t,l=n.z-i,c=Math.hypot(o,a,l);if(c>40)return 0;let h=Ni($.W,e,t,i,o/c,a/c,l/c,c);if(h&&h.t<c-.25)return 0;let u=-Math.sin(s)*Math.cos(r),f=Math.sin(r),d=-Math.cos(s)*Math.cos(r),p=(o*u+a*f+l*d)/c,v=p>.6?1:p>0?.35+p:.18,x=c<10?1:Math.max(0,1-(c-10)/30);return 4.9*v*x}function Kb(n){let e=Ct();if(!e||!e.alive||!k.pl)return;let t=k.pl,i=Fg(n,t.x,t.y+Mn(t),t.z,t.yaw,t.pitch);i>.15&&(k.blind=Math.max(k.blind,i),k.blindMax=Math.max(k.blind,1),Km(i))}function kg(n,e,t){if(!k.pl)return;let i=Math.hypot(n[0]-k.pl.x,n[2]-k.pl.z);i<e&&(k.shake=Math.max(k.shake,t*(1-i/e)))}function Id(n,e,t,i){switch(n){case"st":Jb(e);break;case"rs":jb(e);break;case"ev":eS(e);break;case"p":{let s=$.players.get(t);s&&t!==nt&&vg(s,e);break}case"pb":if(!At())for(let s of e){let r=$.players.get(s[0]);r&&vg(r,s.slice(1))}break;case"sh":if(e.i!==nt){let s=$.players.get(e.i);Ng(e.i,e.w,e.o,e.e,e.m||[],e.h||[]),e.w==="knife"&&e.h&&e.h.length&&Fh(!1),At()&&en&&s&&en.heard(e.o[0],e.o[1],e.o[2],s.team,!(je[e.w]||{}).silent)}break;case"nd":e.i!==nt&&Ug(e);break}}function vg(n,e){n.nx=e[0],n.ny=e[1],n.nz=e[2],n.nyaw=e[3],n.npitch=e[4],n.duck=e[5],n.wpn=e[6],n.flags=e[7]|0,n.vx=e[8]||0,n.vz=e[9]||0,n.netT=$.time,n.scoped=!!(n.flags&1),n.onGround=!(n.flags&2),(n.x===void 0||Math.hypot(n.x-n.nx,n.z-n.nz)>4)&&(n.x=n.nx,n.y=n.ny,n.z=n.nz,n.yaw=n.nyaw,n.pitch=n.npitch)}function Jb(n){let e=$.phase;$.phase=n.ph,$.timeLeft=n.tl,$.round=n.r,$.score=n.sc,$.half=n.hf,$.ot=n.ot||0,n.md&&($.cfg.mode=n.md);let t=n.b;if(Object.assign($.bomb,{state:t.s,carrier:t.c,x:t.x,y:t.y,z:t.z,t:t.t,site:t.site}),!At()){let r=new Set;for(let o of n.dr)r.add(o[0]),$.drops.set(o[0],{id:o[0],w:o[1],x:o[2],y:o[3],z:o[4],ammo:o[5]});for(let o of[...$.drops.keys()])r.has(o)||$.drops.delete(o)}let i=new Set;for(let r of n.p){let[o,a,l,c,h,u,f,d,p,v,x,m,y,b,M,R,S,g,_,A,w,C,L]=r;i.add(o);let T=$.players.get(o);T||(T={id:o,x:0,y:0,z:0,yaw:0,pitch:0,duck:0,h:st.hStand},$.players.set(o,T)),At()||Object.assign(T,{name:a,bot:!!l,grp:c,team:h,hp:u,ar:f,helm:!!d,money:p,alive:!!v,k:x,d:m,a:y,mvp:b,inv:M,god:!!R,skT:S,skCT:g,fin:_,arl:A,hsK:w,dmgT:C,rounds:L})}if(!At())for(let r of[...$.players.keys()])i.has(r)||$.players.delete(r);let s=Ct();s&&(k.lastMoney!==null&&s.money>k.lastMoney&&He.moneyDelta(s.money-k.lastMoney),k.lastMoney=s.money,$h()),Dn&&So(s,li)}function jb(n){kt.clearSmokes(),kt.clearDecals();for(let t of Qa.values())Wt.remove(t);Qa.clear(),$.nades.length=0,Vh.clear(),He.banner(null);for(let t of $.players.values())t.deadT=0,t.alive=!0;let e=n.pos[nt];if(e&&(k.pl=Da(e[0],e[1],e[2],e[3])),At()&&en){for(let t of $.players.values())t.bot&&n.pos[t.id]&&en.place(t,n.pos[t.id]);en.roundStart()}for(let[t,i]of Object.entries(n.pos)){let s=$.players.get(t);s&&(s.x=s.nx=i[0],s.y=s.ny=i[1],s.z=s.nz=i[2],s.yaw=s.nyaw=i[3],s.pitch=0)}Object.assign(k,{deadT:0,spec:null,blind:0,plantT:0,defusing:!1,defT:0,scope:0,reloadT:0,drawT:.4,shots:0,pp:0,py:0,voidSent:!1,nadeHold:0}),k.invV=-1,k.ammoW={p:null,s:null},$h(),k.throwT=0,Hn(qh(),!0),(n.round===1||$.round===1)&&He.center("Ronda 1 \u2014 \xA1suerte!"),rg(),sS()}function Qb(n){let e=$.players.get(n);return e?e.name:"\u2014"}function eS(n){let e=Ct();switch(n.t){case"go":He.center(e&&e.team==="T"?"\xA1Vamos! Plant\xE1 la bomba":"\xA1Vamos! Defend\xE9 los sitios",1800),ig();break;case"hurt":{if(n.v===nt){$m(),Ja=Math.min(1,Ja+n.n/60);let t=$.players.get(n.a);if(t&&t.id!==nt&&k.pl){let i=Math.atan2(-(t.x-k.pl.x),-(t.z-k.pl.z))-k.pl.yaw;He.dmgDir(-i)}k.pl&&n.w!=="world"&&n.w!=="molotov"&&n.w!=="incendiary"&&(k.pl.vx*=.45,k.pl.vz*=.45,k.punchHit=1.2,k.tagT=Math.min(.6,.25+n.n/120))}n.a===nt&&n.v!==nt&&(He.hit(n.hs),Fh(n.hs,n.helm));break}case"kill":{let t=n.k?$.players.get(n.k):null,i=$.players.get(n.v);if(i)if(i.alive=!1,i.deadT=.001,t&&t!==i){let s=Math.atan2(-(t.x-i.x),-(t.z-i.z)),r=Zh(s,i.yaw||0);i.deadDir=Math.abs(r)<Math.PI/2?1:-1,i.deadSide=Math.sin(r)*.8}else i.deadDir=1,i.deadSide=Math.random()-.5;i&&He.feed(t,i,n.w,n.hs,n.wb,n.k===nt||n.v===nt,{sm:n.sm,bl:n.bl,ns:n.ns}),n.k===nt&&n.v!==nt&&Ym(),n.v===nt&&(k.deadT=.001,k.scope=0,k.defusing=!1,He.progress(null));break}case"end":{let t=e?e.team:"T",i=n.win===t,s={elim:"eliminaron al otro equipo",bomb:"la bomba explot\xF3",defuse:"desactivaron la bomba",time:"se termin\xF3 el tiempo"};He.banner(n.win,n.win==="T"?"GANAN LOS TERRORISTAS":"GANAN LOS CONTRATERRORISTAS","Porque "+s[n.reason]+(n.mvp?" \xB7 \u2605 MVP: "+Qb(n.mvp):"")),ng(i),n.mvp&&setTimeout(()=>og(n.mvp===nt),900);break}case"over":{let t=n.wg,i=Ct(),s=i?i.grp:0,r=t<0?"EMPATE":t===s?"\xA1VICTORIA!":"DERROTA";He.banner(t<0?"":vr(t,$.half),r,`${n.score[s]} \u2013 ${n.score[1-s]} \xB7 Volviendo a la sala en ${Vt.over} s`),n.stats&&He.endScreen(n.stats,nt,t,n.score,n.mode);let o=Vt.over;clearInterval(zh),zh=setInterval(()=>{if(o--,o<=0){clearInterval(zh);return}He.banner(t<0?"":vr(t,$.half),r,`${n.score[s]} \u2013 ${n.score[1-s]} \xB7 Volviendo a la sala en ${o} s`)},1e3);break}case"half":He.center("Cambio de lado \u2014 empieza la segunda mitad",4e3);break;case"plant":He.center("La bomba fue plantada en el sitio "+n.site,3e3),nd([$.bomb.x,$.bomb.y,$.bomb.z],!0),$.bomb.seen=!0;break;case"defst":sd([$.bomb.x,$.bomb.y,$.bomb.z]);break;case"defused":He.center("Desactivaron la bomba",3e3);break;case"boom":kt.explosion([n.x,n.y,n.z],!0),Qf([n.x,n.y,n.z],!0),kg([n.x,n.y,n.z],60,1.2);break;case"bombdrop":e&&e.team==="T"&&He.center("Se cay\xF3 la bomba",1600);break;case"bombpick":n.p===nt&&(He.center("Agarraste la bomba (5)",1600),tg());break;case"deny":He.center(n.why,1500),eg();break;case"resp":{let t=$.players.get(n.id);if(!t)break;t.alive=!0,t.deadT=0,t.x=t.nx=n.pos[0],t.y=t.ny=n.pos[1],t.z=t.nz=n.pos[2],t.yaw=t.nyaw=n.pos[3],n.id===nt&&(k.pl=Da(n.pos[0],n.pos[1],n.pos[2],n.pos[3]),Object.assign(k,{deadT:0,spec:null,blind:0,scope:0,reloadT:0,drawT:.4,shots:0,pp:0,py:0,spawnProt:1.5}),k.invV=-1,k.ammoW={p:null,s:null},$h(),Hn(qh(),!0)),At()&&en&&t.bot&&en.place(t,n.pos);break}case"arlvl":n.p===nt&&(He.center("Nivel "+(n.l+1)+" de "+yr.length+" \xB7 "+Tr(yr[n.l][e.team==="T"?0:1]),1600),rd());break;case"ot":He.center("TIEMPO EXTRA "+n.n+" \u2014 $10.000 para todos",4e3);break;case"timeoutReq":He.center("Timeout t\xE1ctico pedido por "+n.n+" ("+(n.team==="T"?"T":"CT")+") \xB7 quedan "+n.left,3500);break;case"timeout":He.center("TIMEOUT T\xC1CTICO \u2014 30 segundos",4e3);break;case"vote":He.center("Votaci\xF3n para rendirse ("+n.team+"): "+n.n+"/"+n.of+" \xB7 "+n.who,3e3);break;case"surrender":He.center((n.team==="T"?"Los Terroristas":"Los Contraterroristas")+" se rindieron",4e3);break;case"radio":{let t=$.players.get(n.p);if(!t||!e||t.team!==e.team)break;He.radio(t,n.m),ag(),t.model&&(t.radioT=$.time+3);break}case"ping":{if(!e||n.team!==e.team)break;nS(n);break}case"bought":rd();break}}var zh=0,Ja=0,Og={z:[{t:"\xA1Vamos, vamos!"},{t:"Cubrime"},{t:"Mantengan esta posici\xF3n"},{t:"Agr\xFApense"},{t:"S\xEDganme"},{t:"Tomen el punto"}],x:[{t:"Afirmativo"},{t:"Enemigo visto"},{t:"Necesito apoyo"},{t:"Sector despejado"},{t:"Estoy en posici\xF3n"},{t:"Negativo"},{t:"El enemigo est\xE1 muerto"}],c:[{t:"Voy a A"},{t:"Voy a B"},{t:"Rotemos"},{t:"Plant\xE1 la bomba / desactiv\xE1"},{t:"Ahorremos esta ronda (eco)"},{t:"Pedir timeout t\xE1ctico",act:()=>Nt("timeout",{})},{t:"Votar para rendirse",act:()=>Nt("vote",{k:"surrender"})}]},Gh=null,_g=0;function tS(n){Gh=n;let e=an("radioMenu");e.innerHTML=`<h5>${n==="z"?"\xD3RDENES":n==="x"?"RESPUESTAS":"T\xC1CTICAS"}</h5>`+Og[n].map((t,i)=>`<div><b>${i+1}</b>${t.t}</div>`).join("")+"<small>0 \xB7 cerrar</small>",e.hidden=!1,clearTimeout(_g),_g=setTimeout(zg,5e3)}function zg(){Gh=null,an("radioMenu").hidden=!0}var Xs=[];function Bg(){let n=Ct();if(!n||!n.alive||!k.pl)return;let e=k.pl,t=e.y+Mn(e),i=-Math.sin(e.yaw)*Math.cos(e.pitch),s=Math.sin(e.pitch),r=-Math.cos(e.yaw)*Math.cos(e.pitch),o=Ni($.W,e.x,t,e.z,i,s,r,120),a=o?o.t-.1:40;Nt("ping",{x:+(e.x+i*a).toFixed(2),y:+(t+s*a).toFixed(2),z:+(e.z+r*a).toFixed(2)})}function nS(n){let e=document.createElement("canvas");e.width=e.height=64;let t=e.getContext("2d");t.strokeStyle="#ffd34a",t.lineWidth=6,t.beginPath(),t.arc(32,26,16,0,Math.PI*2),t.stroke(),t.fillStyle="#ffd34a",t.beginPath(),t.moveTo(20,36),t.lineTo(44,36),t.lineTo(32,60),t.fill();let i=new eo(new tr({map:new Qn(e),depthTest:!1,transparent:!0,sizeAttenuation:!1}));i.scale.set(.04,.04,1),i.renderOrder=30,i.position.set(n.x,n.y+.4,n.z),Wt.add(i),Xs.push({s:i,t:$.time+5,x:n.x,z:n.z}),lg([n.x,n.y,n.z]);let s=$.players.get(n.p);s&&He.radio(s,"\u{1F4CD} marc\xF3 un lugar")}var Ji=null;function iS(){let n=Ct(),e=Yn();if(!($.cfg.mode==="practice"&&n&&n.alive&&k.pl&&je[e]&&je[e].cat==="grenade"&&k.nadeHold)){Ji&&(Ji.visible=!1);return}let i=k.pl,s=Ff(e,nt,n.team,i.x,i.y+Mn(i),i.z,i.yaw,i.pitch,i.vx,i.vz,k.nadeHold),r=[],o=[];for(let a=0;a<260&&s.state==="fly"&&(kf($.W,s,1/64,o),a%2===0&&r.push(s.x,s.y,s.z),!s.rest);a++);Ji||(Ji=new ta(new Bt,new to({color:"#7cff8a",depthTest:!1,transparent:!0,opacity:.9})),Ji.renderOrder=26,Ji.frustumCulled=!1,Wt.add(Ji)),Ji.geometry.setAttribute("position",new rt(r,3)),Ji.visible=!0}function sS(){for(let n of Xs)Wt.remove(n.s);Xs.length=0}function rS(){for(let n=Xs.length-1;n>=0;n--){let e=Xs[n];e.s.material.opacity=Math.min(1,(e.t-$.time)/1.5),$.time>e.t&&(Wt.remove(e.s),Xs.splice(n,1))}}var Dn=!1,li=-1,Si=null,dd={};function Hg(n){if(dd[n]){let e=document.createElement("canvas");return e.width=192,e.height=48,e.getContext("2d").drawImage(dd[n],0,0),e}try{Si||(Si={r:new fr({antialias:!0,alpha:!0,preserveDrawingBuffer:!0}),s:new jn,c:new hs(-.62,.62,.155,-.155,.01,10)},Si.r.setSize(192,48),Si.s.add(new Hi("#fff","#666",2.2)),Si.c.position.set(3,0,0),Si.c.lookAt(0,0,0));let e=br(n);e.computeBoundingBox();let t=e.boundingBox,i=new Oe(e,Ki),s=Math.max(.12,t.max.z-t.min.z,(t.max.y-t.min.y)*4);i.scale.setScalar(1.1/s),i.position.set(0,-(t.max.y+t.min.y)/2/s*1.1,-(t.max.z+t.min.z)/2/s*1.1),Si.s.add(i),Si.r.render(Si.s,Si.c),Si.s.remove(i);let r=document.createElement("canvas");return r.width=192,r.height=48,r.getContext("2d").drawImage(Si.r.domElement,0,0),dd[n]=r,Hg(n)}catch{return null}}var Mg=null;function el(n){let e=Ct();if(!e)return;if(n!==void 0?n:!Dn){if(!e.alive)return;if(!bd()){He.center($.phase==="live"?"Se termin\xF3 el tiempo de compra":"No pod\xE9s comprar ahora",1400);return}let i=An.buyWheel?"wheel":"grid";Mg!==e.team+i&&(Mg=e.team+i,mg(e.team,Hg,s=>Nt("buy",{i:s}),s=>cd(s),i,s=>{li=s,So(Ct(),li)})),li=-1,So(e,li),Dn=!0,an("buy").hidden=!1,document.exitPointerLock&&document.exitPointerLock()}else Dn=!1,an("buy").hidden=!0,cd(null),vs||ja();Ao()}function bd(){let n=Ct();if(!n||!n.alive||!k.pl)return!1;let e=$.cfg.mode||"comp";if(e==="ar"||e==="retake")return!1;if(e==="practice"||e==="dm")return $.phase==="freeze"||$.phase==="live";let t=e==="casual"?135:Vt.live;if(!($.phase==="freeze"||$.phase==="live"&&t-$.timeLeft<Vt.buy&&$.bomb.state!=="planted"))return!1;let s=$.spawns?$.spawns[n.team]:null;return!s||Math.hypot(k.pl.x-s.cx,k.pl.z-s.cz)<22||!!(gi($.W,k.pl.x,k.pl.z)&(n.team==="T"?16:32))}function oS(n){if(n.code==="KeyB"){el(!1);return}if(n.code==="Escape"||n.code==="Digit0"){li>=0&&An.buyWheel?(li=-1,So(Ct(),li)):el(!1);return}let e=parseInt(n.key,10);if(!(e>=1&&e<=9))return;let t=Ct(),i=pg();if(li<0)e<=i.length&&(li=e-1);else{let s=i[li].items[t.team];s[e-1]&&Nt("buy",{i:s[e-1]}),An.buyWheel||(li=-1)}So(t,li)}an("buy").addEventListener("mousedown",n=>n.stopPropagation());function aS(){jt=new fr({antialias:!1,powerPreference:"high-performance"}),jt.setPixelRatio(Math.min(devicePixelRatio,vs?1:1.5)),jt.setSize(innerWidth,innerHeight),jt.autoClear=!1,jt.toneMapping=_a,jt.toneMappingExposure=.95,jt.shadowMap.enabled=Ag>0,jt.shadowMap.type=gc,jt.shadowMap.autoUpdate=!1,an("view").appendChild(jt.domElement),Wt=new jn;{let i=new fo(jt).fromScene(new ch,.04).texture;Wt.environment=i,Wt.environmentIntensity=.18}un=new fn(74,innerWidth/innerHeight,.05,1500),wr=new jn,Eo=new fn(66,innerWidth/innerHeight,.01,10),wr.add(new Hi("#ffffff","#555",1.3));let n=new Vi("#fff",1.1);n.position.set(1,2,1),wr.add(n),wr.environment=Wt.environment,wr.environmentIntensity=.7,gn=zm(),wr.add(gn);let e=lS();gn.userData.flash=e,addEventListener("resize",()=>{jt.setSize(innerWidth,innerHeight),un.aspect=Eo.aspect=innerWidth/innerHeight,un.updateProjectionMatrix(),Eo.updateProjectionMatrix()}),jt.domElement.addEventListener("click",()=>{$.phase!=="lobby"&&!Ar&&!vs&&!Dn&&ja()}),an("clickPlay").addEventListener("click",t=>{t.target.id!=="cpSettings"&&(qa(),Uh(An.vol*.7),ja())}),an("cpSettings").addEventListener("click",t=>{t.stopPropagation(),tl.open(()=>Ao()),Ao()})}function lS(){let n=new Oe(new sr(1,0),new Jt({color:"#ffd27a",transparent:!0,opacity:.95,depthWrite:!1}));return n.scale.set(.04,.04,.12),n.visible=!1,n.renderOrder=11,gn.add(n),n}async function cS(n){an("loading").hidden=!1,an("loadMsg").textContent="Cargando "+(_d.find(o=>o.id===n)?.name||n)+"\u2026",await new Promise(o=>setTimeout(o,30));let e=Hh[n]||(Hh[n]=await Sf(n)),t,i=null,s=()=>{let o=e.layers.map(c=>({...c,cls:c.cls.slice(),top:c.top?c.top.slice():c.top,bot:c.bot?c.bot.slice():c.bot,h:c.h?c.h.slice():c.h}));e.layers.flags&&(o.flags=e.layers.flags.slice());let a=Tf(e.info,o),l=e.mesh?bm(a,xo(a),n):[];return e.mesh&&mm(a,xo(a)),{W:a,props:l}};if($.cfg.size===2&&["comp","casual","retake"].includes($.cfg.mode||"comp")){if(!e.wing){let o=s(),a=xm(o.W,xo(o.W));e.wing={W:o.W,nav:xo(o.W),r:a,props:o.props}}t=e.wing.W,$.nav=e.wing.nav,i=e.wing.r,$.props=e.wing.props}else{if(!e.full){let o=s();e.full={W:o.W,nav:xo(o.W),props:o.props}}t=e.full.W,$.nav=e.full.nav,$.props=e.full.props}for($.W=t,$.info=e.info,$.wingSite=i?i.site:null,$.mapName=_d.find(o=>o.id===n)?.name||n;Wt.children.length;)Wt.remove(Wt.children[0]);Ji=null,Xs.length=0,Ya&&Ya.traverse(o=>{o.geometry&&o.geometry.dispose(),o.material&&o.material.dispose()}),Ya=(e.mesh?cm(t,e.mesh,e.info,n,$.nav):om(t,n)).mesh,Wt.add(Ya),i&&i.cells.length&&Ya.add(ym(t,i.cells)),$.props&&$.props.length&&Wt.add(Sm($.props)),am(Wt,t,n,Ag),jt.shadowMap.needsUpdate=!0,kt=Im(Wt),kt.floorAt=(o,a,l)=>Os($.W,o,a,l+.2),Md=ld(t);for(let o of $.players.values())o.model&&(o.model=null,o.tag=null);for(let o of wo.values())Wt.remove(o);wo.clear(),xs=null,Ed=!0,an("loading").hidden=!0}function hS(n,e){let t=document.createElement("canvas");t.width=256,t.height=48;let i=t.getContext("2d");i.font="bold 30px Rajdhani, sans-serif",i.textAlign="center",i.fillStyle="rgba(0,0,0,.5)";let s=Math.min(250,i.measureText(n).width+20);i.fillRect(128-s/2,4,s,40),i.fillStyle=e==="T"?"#f0c060":"#8ab8ff",i.fillText(n,128,35);let r=new eo(new tr({map:new Qn(t),depthTest:!1,transparent:!0,sizeAttenuation:!1}));return r.scale.set(.1,.019,1),r.renderOrder=20,r}var uS=new Jt({color:"#ff3030",wireframe:!0,depthTest:!1,transparent:!0,opacity:.8}),Vg=new Ut(.7,1.8,.7);Vg.translate(0,.9,0);function fS(n){let e=Ct();for(let t of $.players.values()){let i=t.id===nt,s=t.team+Bh(t);if(!t.model||t.modelTeam!==s){t.model&&Wt.remove(t.model),t.model=Lh(t.team,Bh(t)),t.modelTeam=s,Wt.add(t.model),t.tag=null;let h=new Oe(Vg,uS);h.renderOrder=19,h.visible=!1,t.model.add(h),t.esp=h;let u=kt.muzzleMesh();t.model.userData.gun.add(u),t.mflash=u;let f=new Oe(dS,pS);f.rotation.x=-Math.PI/2,f.position.y=.025,f.renderOrder=2,t.model.add(f),t.blob=f}let r=t.model;if(!i&&!(At()&&t.bot)&&t.nx!==void 0){let h=Math.min(1,n*14);t.x+=(t.nx-t.x)*h+(t.vx||0)*n*.5,t.y+=(t.ny-t.y)*h,t.z+=(t.nz-t.z)*h+(t.vz||0)*n*.5,isFinite(t.x)||(t.x=t.nx,t.y=t.ny,t.z=t.nz),t.yaw+=Zh(t.nyaw||0,t.yaw||0)*h,t.pitch=(t.pitch||0)+((t.npitch||0)-(t.pitch||0))*h}let o=i&&!k.spec&&e&&e.alive,a=i&&!k.spec&&!o&&k.deadT<.01||k.spec===t.id;if(r.visible=!a&&(t.alive||(t.deadT||0)>0),!r.visible)continue;r.userData.chest.visible=!o;let l=o?.2+Math.max(0,-(t.pitch||0))*.12:0;if(r.position.set(t.x+Math.sin(t.yaw)*l,t.y,t.z+Math.cos(t.yaw)*l),r.rotation.y=t.yaw,t.blob){let h=t.alive?0:Math.min(1,(t.deadT||0)/1.2);t.blob.scale.set(1,1+h*1.6,1),t.blob.position.z=h*.75*(t.deadDir||1),t.blob.position.x=0}t.alive||(t.deadT=Math.min(3,(t.deadT||0)+n*2.5));let c=Math.hypot(t.vx||0,t.vz||0);if(Nh(r,t.alive?t.wpn||"knife":null,Ih(t.fin,t.wpn||"knife")),t.mflash&&t.wpn){let h=Xa(t.wpn);t.mflash.position.set(0,h.muzzle[1]*1.12,-h.muzzle[0]*1.12-.05),t.mflash.parent!==r.userData.gun&&r.userData.gun.add(t.mflash)}Dh(r,{speed:t.alive?c:0,duck:t.duck||0,pitch:t.pitch||0,onGround:t.onGround!==!1,dead:t.alive?0:t.deadT,deadDir:t.deadDir,deadSide:t.deadSide},n),t.mflash&&(t.flashT=(t.flashT||0)-n,t.mflash.visible=t.flashT>0,t.mflash.visible&&(t.mflash.rotation.z=Math.random()*3)),e&&t.team===e.team&&!i&&t.alive?(t.tag||(t.tag=hS(t.name,t.team),r.add(t.tag)),t.tag.visible=!0,t.tag.position.y=2.15-(t.duck||0)*.45):t.tag&&(t.tag.visible=!1),t.esp.visible=!!(ys("ls.wall")&&e&&t.team!==e.team&&t.alive),!i&&t.alive&&c>3.6&&t.onGround!==!1&&(t.stepT=(t.stepT||0)-n,t.stepT<=0&&(t.stepT=.34,jf([t.x,t.y,t.z]),$.cfg.map==="dust2"&&kt.dust([t.x,t.y,t.z])))}}var dS=new Vn(.95,.95),pS=(()=>{let n=document.createElement("canvas");n.width=n.height=64;let e=n.getContext("2d"),t=e.createRadialGradient(32,32,2,32,32,31);t.addColorStop(0,"rgba(0,0,0,0.55)"),t.addColorStop(.6,"rgba(0,0,0,0.28)"),t.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=t,e.fillRect(0,0,64,64);let i=new Qn(n);return new Jt({map:i,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2})})(),wo=new Map,xs=null,Za=null,Oh=0;function mS(n){for(let[t,i]of $.drops){let s=wo.get(t);s||(s=bo(i.w),s.scale.setScalar(1.2),s.rotation.set(0,Math.random()*6,Math.PI/2*.98),Wt.add(s),wo.set(t,s)),s.position.set(i.x,i.y+.04,i.z)}for(let[t,i]of wo)$.drops.has(t)||(Wt.remove(i),wo.delete(t));let e=$.bomb;if(xs||(xs=bo("c4"),xs.scale.setScalar(1.6),Wt.add(xs),Za=new Oe(new fi(.03,6,4),new Jt({color:"#ff2020"})),Za.position.set(-.05,.05,.03),xs.add(Za)),xs.visible=e.state==="planted"||e.state==="dropped"||e.state==="defused",xs.visible&&xs.position.set(e.x,e.y+.05,e.z),e.state==="planted"){let t=Math.max(0,e.t),i=Math.max(.12,Math.min(1,t/35));Oh-=n,Za.visible=Oh>i*.6,Oh<=0&&(Oh=i,nd([e.x,e.y,e.z],t<10))}else Za.visible=!1}var pd=0,md=0;function gS(n){let e=Ct();if(!e||!k.pl)return;let t=k.pl;if($h(),!e.alive){k.deadT+=n;return}k.drawT-=n,k.fireT-=n,k.nadeCd-=n,k.pickCd-=n,k.inspect&&(k.inspect=Math.max(0,k.inspect-n)),k.reloadT>0&&(k.reloadT-=n,k.reloadT<=0&&Bb()),k.rescope&&k.fireT<=0&&((Yn()==="awp"||Yn()==="ssg08")&&(k.scope=k.rescope),k.rescope=0);let i=Yn(),s=je[i]||je.knife,r=$.phase==="freeze"||k.plantT>0||k.defusing||Dn&&!1,o=0,a=0;Dn||(on.has("KeyW")&&(o+=1),on.has("KeyS")&&(o-=1),on.has("KeyD")&&(a+=1),on.has("KeyA")&&(a-=1)),(Sn.mx||Sn.mz)&&(o=-Sn.mz,a=Sn.mx);let l={f:r?0:o,s:r?0:a,jump:!r&&on.has("Space"),crouch:on.has("ControlLeft")||on.has("ControlRight"),walk:on.has("ShiftLeft")||on.has("ShiftRight")},c=(s.speed||250)*gg*(k.scope&&s.cat==="sniper"?.5:k.scope?.7:1);k.tagT>0&&(k.tagT-=n,c*=.45+.55*(1-Math.min(1,k.tagT/.4))),(i==="c4"||je[i]?.cat==="grenade")&&(c=245*gg),ys("ls.speed")&&(c*=1.6);let h=n,u=0,f=t.onGround;for(;h>1e-6;){let m=Math.min(h,.008333333333333333),y=gh($.W,t,l,m,c);y&&(u=y),h-=m}for(let m of $.players.values()){if(m.id===nt||!m.alive||Math.abs(m.y-t.y)>1.6)continue;let y=t.x-m.x,b=t.z-m.z,M=Math.hypot(y,b);if(M<.62&&M>1e-4){let R=(.62-M)/M,S=t.x+y*R,g=t.z+b*R;Xn($.W,S,g,t.y,t.h,st.r)||(t.x=S,t.z=g)}}if(u){let m=If(u);m>0&&Nt("fall",{d:m}),Xm(null)}t.y<-20&&!k.voidSent&&(k.voidSent=!0,Nt("fall",{d:999}));let d=Math.hypot(t.vx,t.vz);if(t.onGround&&d>3.6&&(k.stepT-=n,k.stepT<=0&&(k.stepT=.36,jf(null,.45))),k.bob+=n*d*1.4*(t.onGround?1:0),e.x=t.x,e.y=t.y,e.z=t.z,e.yaw=t.yaw,e.pitch=t.pitch,e.duck=t.duck,e.vx=t.vx,e.vz=t.vz,e.onGround=t.onGround,e.wpn=i,e.h=t.h,e.scoped=k.scope>0,k.fireT<-.06&&(k.pp=Math.max(0,k.pp-(s.recover||9)*n*(1+k.pp*.15)),k.py*=Math.exp(-n*7),k.pp<.4&&(k.shots=0)),Nn||(k.trig=!1),(je[i]||{}).cat==="grenade"){if(Nn&&!k.nadeHold&&k.throwT<=0&&(k.nadeHold=Er?.6:1),Nn&&Er&&k.nadeHold&&(k.nadeHold=.6),k.nadeHold&&!Nn&&!Er&&k.drawT<=0&&k.throwT<=0&&($.phase==="freeze"?(He.center("Esper\xE1 a que empiece la ronda",1e3),k.nadeHold=0):(k.throwT=.45,k.throwPow=k.nadeHold,k.nadeHold=0)),k.throwT>0){let m=k.throwT;k.throwT-=n,m>.3&&k.throwT<=.3&&$b(k.throwPow||1)}}else if(i==="c4"){let m=gi($.W,t.x,t.z)&12;if(Nn&&m&&t.onGround&&$.phase==="live"&&k.drawT<=0){k.plantT||id();let y=k.plantT;k.plantT+=n,Math.floor(y*4)!==Math.floor(k.plantT*4)&&id(),He.progress("Plantando la bomba\u2026",k.plantT/Vt.plant),k.plantT>=Vt.plant&&(k.plantT=0,He.progress(null),Nt("plant",{x:t.x,y:t.y,z:t.z}))}else k.plantT&&He.progress(null),k.plantT=0,Nn&&!m&&!k.trig&&(He.center("Ten\xE9s que estar en un sitio de bomba (A o B)",1300),k.trig=!0)}else Nn&&!Dn&&Xb();if(k.defusing){let m=$.bomb;if(m.state!=="planted"||!on.has("KeyE")||Math.hypot(t.x-m.x,t.z-m.z)>1.9)Yh();else{k.defT+=n;let y=e.inv.kit?Vt.kit:Vt.defuse;He.progress(e.inv.kit?"Desactivando (con kit)\u2026":"Desactivando\u2026",k.defT/y),k.defT>=y&&(Nt("defok",{}),k.defusing=!1,He.progress(null))}}else k.plantT||He.progress(null);if(k.pickCd<=0){for(let y of $.drops.values())if(!(Math.hypot(y.x-t.x,y.z-t.z)>.9||Math.abs(y.y-t.y)>1.2)&&(y.w==="defuser"?e.team==="CT"&&!e.inv.kit:!qs(Hs(y.w)===1?"p":"s"))){Nt("take",{id:y.id}),k.pickCd=.6;break}let m=$.bomb;e.team==="T"&&m.state==="dropped"&&Math.hypot(m.x-t.x,m.z-t.z)<1&&Math.abs(m.y-t.y)<1.4&&(Nt("take",{id:"c4"}),k.pickCd=.8)}let v="",x=Lg();x&&(v="E \xB7 agarrar "+Tr(x.w)),e.team==="CT"&&$.bomb.state==="planted"&&Math.hypot(t.x-$.bomb.x,t.z-$.bomb.z)<1.7&&!k.defusing&&(v="Manten\xE9 E para desactivar"),i==="c4"&&gi($.W,t.x,t.z)&12&&!k.plantT&&$.phase==="live"&&(v="Manten\xE9 clic para plantar"),He.hint(v),pd-=n,pd<=0&&(pd=.05,$n("p",[+t.x.toFixed(2),+t.y.toFixed(2),+t.z.toFixed(2),+t.yaw.toFixed(3),+t.pitch.toFixed(3),+t.duck.toFixed(2),i,(k.scope?1:0)|(t.onGround?0:2),+t.vx.toFixed(2),+t.vz.toFixed(2)],{volatile:!0}))}function xS(n){if(md-=n,md>0)return;md=.05;let e=[];for(let t of $.players.values())t.bot&&t.pl&&e.push([t.id,+t.x.toFixed(2),+t.y.toFixed(2),+t.z.toFixed(2),+t.yaw.toFixed(3),+t.pitch.toFixed(3),+(t.duck||0).toFixed(2),t.wpn||"knife",(t.scoped?1:0)|(t.onGround?0:2),+(t.vx||0).toFixed(2),+(t.vz||0).toFixed(2)]);e.length&&$n("pb",e,{volatile:!0})}var bg=new ui(0,0,0,"YXZ"),Ws=[];function Ld(n){let e=Ct();if(!e)return;if(Ws=[...$.players.values()].filter(i=>i.alive&&i.team===e.team),Ws.length||(Ws=[...$.players.values()].filter(i=>i.alive)),!Ws.length){k.spec=null;return}let t=Ws.findIndex(i=>i.id===k.spec);k.spec=Ws[(t+n+Ws.length)%Ws.length].id}function yS(n){let e=Ct();if(!e||!k.pl)return;let t,i,s,r,o,a=Yn(),l=e.team,c=k.scope,h=Bh(e),u=Ih(e.fin,Yn());if(e.alive){let y=k.pl;t=y.x,i=y.y+Mn(y),s=y.z,r=y.yaw-k.py*.5*xg,o=y.pitch+k.pp*.5*xg+(k.punchHit||0)*.02,k.spec=null}else if(k.deadT<2.2||!$.players.size){let y=k.pl,b=Math.min(1,k.deadT/1.2);r=y.yaw+k.deadT*.3,o=-.35*b+y.pitch*(1-b),t=y.x+Math.sin(r)*2.6*b,s=y.z+Math.cos(r)*2.6*b,i=y.y+Mn(y)*(1-b)+1.6*b,a=null}else{let y=k.spec&&$.players.get(k.spec);(!y||!y.alive)&&Ld(1);let b=k.spec&&$.players.get(k.spec);if(b)t=b.x,i=b.y+Mn({duck:b.duck||0}),s=b.z,r=b.yaw,o=b.pitch,a=b.wpn||"knife",l=b.team,c=b.scoped?1:0,h=Bh(b),u=Ih(b.fin,a);else{let M=k.pl;t=M.x,i=M.y+3,s=M.z,r=M.yaw,o=-.5,a=null}}k.punchHit=Math.max(0,(k.punchHit||0)-n*6),k.shake>0&&(k.shake=Math.max(0,k.shake-n*1.5),t+=(Math.random()-.5)*k.shake*.12,i+=(Math.random()-.5)*k.shake*.12),un.position.set(t,i,s),bg.set(o,r,0),un.quaternion.setFromEuler(bg);let f=je[a],p=74/(c&&f&&f.scope?f.scope[Math.max(0,c-1)]:1);Math.abs(un.fov-p)>.01&&(un.fov=p,un.updateProjectionMatrix()),Wm(t,i,s,r);let v=c&&f&&f.cat==="sniper";if(gn.visible=!!a&&!v&&(e.alive||k.spec),gn.visible){Bm(gn,a,l,h,u);let y=gn.userData,b=y.base||[.13,-.14,-.36];k.sway[0]+=(k.swayT[0]-k.sway[0])*Math.min(1,n*10),k.sway[1]+=(k.swayT[1]-k.sway[1])*Math.min(1,n*10),k.swayT[0]*=Math.exp(-n*10),k.swayT[1]*=Math.exp(-n*10),k.kick=Math.max(0,k.kick-n*7);let M=e.alive?k.bob:$.time*2,R=e.alive?Math.min(1,Math.hypot(k.pl.vx,k.pl.vz)/5):.3,S=b[0]+Math.cos(M)*.008*R+k.sway[0]*.02,g=b[1]+Math.abs(Math.sin(M))*.01*R-k.sway[1]*.02,_=b[2]+k.kick*.045,A=k.kick*.12,w=0,C=0;if(gn.userData.reloadK=0,e.alive&&k.reloadT>0){let z=je[Yn()],X=1-k.reloadT/z.reload,q=Math.sin(Math.min(1,X)*Math.PI);if(A+=q*.25,g-=q*.03,C+=q*.55,S-=q*.03,X>.86){let B=Math.sin((X-.86)/.14*Math.PI);_+=B*.03,A-=B*.15}gn.userData.reloadK=X}if(e.alive&&k.drawT>0){let z=Math.max(0,k.drawT)/.6;g-=z*.25,A-=z*.8}if(e.alive&&k.inspect){let z=Math.sin(Math.min(1,k.inspect/1.6)*Math.PI);w+=z*1.1,C+=z*.5,S-=z*.08}if(a==="knife"&&e.alive&&k.fireT>0){let z=k.fireT/(k.knife2?1:.45);w-=Math.sin(z*Math.PI)*.9,_-=Math.sin(z*Math.PI)*.08}if((k.plantT>0||k.defusing)&&(g-=.08,A-=.7),e.alive&&k.nadeHold&&(g-=.03,_+=.06,A+=.25),e.alive&&k.throwT>0){let z=1-k.throwT/.45,X=Math.sin(Math.min(1,z)*Math.PI);_-=X*.25,g+=X*.12,A-=X*1.2,z>.4&&(gn.userData.gun.visible=!1)}else gn.userData.gun.visible=!0;let L=y.rot||[0,0,0];y.hold.position.set(S,g,_),y.hold.rotation.set(A+L[0],w+L[1],C+L[2]),Hm(gn),gn.position.copy(un.position),gn.quaternion.copy(un.quaternion),Eo.position.copy(un.position),Eo.quaternion.copy(un.quaternion);let T=y.flash;k.flashT=(k.flashT||0)-n;let P=Xa(a);T&&(T.visible=k.flashT>0&&f&&!f.silent&&f.cat!=="knife",T.visible&&(T.position.set(0,P.muzzle[1],-P.muzzle[0]-.05).applyMatrix4(y.hold.matrix),T.quaternion.setFromEuler(y.hold.rotation),T.rotateZ(Math.random()*3))),y.gun.updateWorldMatrix(!0,!1),Ka.set(0,P.muzzle[1],-P.muzzle[0]).applyMatrix4(y.gun.matrixWorld)}an("scope").hidden=!v;let x=!v&&(e.alive||k.spec)&&!(f&&f.cat==="sniper"),m=An.xGap;!An.xStatic&&e.alive&&f&&f.dmg&&(m=An.xGap+Math.max(0,ka(f,{speed:Math.hypot(k.pl.vx,k.pl.vz),onGround:k.pl.onGround,duck:k.pl.duck,scoped:k.scope>0,shots:k.shots})*900-1)),He.crosshair(Math.min(60,m),x,An)}var gd=0,xd=0;function vS(n){let e=Ct();if(!e||(Ja=Math.max(0,Ja-n*1.4),He.el.hurt.style.opacity=Math.max(Ja,e.alive&&e.hp<=30?.22+.14*Math.sin($.time*4):0).toFixed(2),k.blind=Math.max(0,k.blind-n),He.el.flash.style.opacity=Math.min(1,k.blind/1.6).toFixed(3),gd-=n,gd>0))return;gd=.05;let t=k.spec&&!e.alive?$.players.get(k.spec):e;He.money(e.money),He.vitals(t?t.hp:0,t?t.ar:0,t&&t.helm);let i=e.alive?Yn():t&&t.wpn,s=je[i],r=k.slot,o=r==="p"||r==="s"?k.ammo[r]:null;He.ammo(i?Tr(i):"",o?o[0]:0,o?o[1]:0,e.alive&&!!o&&!!s&&!!s.mag);let a=[];e.alive&&(e.inv.p&&a.push({key:1,slot:"p",id:e.inv.p,name:Tr(e.inv.p)}),e.inv.s&&a.push({key:2,slot:"s",id:e.inv.s,name:Tr(e.inv.s)}),a.push({key:3,slot:"k",id:"knife",name:"Cuchillo"}),e.inv.zeus&&a.push({key:3,slot:"z",id:"zeus",name:"Zeus x27"}),e.inv.g.length&&a.push({key:4,slot:"g",id:e.inv.g.join(),name:e.inv.g.map(Tr).join(" \xB7 ")}),e.inv.c4&&a.push({key:5,slot:"c4",id:"c4",name:"C4"}),e.inv.kit&&a.push({key:"",slot:"kit",id:"kit",name:"Kit de desactivaci\xF3n"})),He.slots(a.filter(y=>y.slot!=="g"&&y.slot!=="kit"),k.slot,e.alive?e.inv.g:[],k.gsel);let l=$.bomb.state==="planted";He.clock($.timeLeft,l||$.phase==="live"&&$.timeLeft<10,l);let c=$.score[$.half],h=$.score[1-$.half],u=0,f=0,d=0,p=0;for(let y of $.players.values())y.team==="T"?(f++,y.alive&&u++):(p++,y.alive&&d++);let v=y=>[...$.players.values()].filter(b=>b.team===y).map(b=>({n:b.name,a:b.alive}));if(He.score(c,h,v("T"),v("CT")),He.el.buyHint.hidden=!(bd()&&!Dn),Dn)if(!bd())el(!1);else{let y=an("buyTime"),b=$.cfg.mode||"comp",M=b==="dm"||b==="practice"?0:$.phase==="freeze"?Math.ceil($.timeLeft+Vt.buy):Math.max(0,Math.ceil(Vt.buy-((b==="casual"?135:Vt.live)-$.timeLeft)));y.textContent=M?"0:"+String(M).padStart(2,"0"):"\u221E"}let x=He.el.spec;!e.alive&&k.deadT>2.2&&t&&t!==e?(x.hidden=!1,x.innerHTML="Mirando a <b>"+t.name.replace(/</g,"")+"</b><small>Clic o Espacio: siguiente</small>"):x.hidden=!0,$.phase==="freeze"&&e.alive?He.center("La ronda empieza en "+Math.ceil($.timeLeft)+" \xB7 B para comprar",0):$.phase==="freeze"||He.el.centerMsg.textContent.startsWith("La ronda empieza")&&He.center("",1);let m=on.has("Tab")||$.phase==="over";if(He.el.board.hidden=!m,m&&(He.el.board.innerHTML=dg($,nt)),xd-=.05,xd<=0&&Md){xd=.1;let y=t&&t!==e?{x:t.x,z:t.z,yaw:t.yaw}:{x:k.pl.x,z:k.pl.z,yaw:k.pl.yaw},b=[],M=[k.pl.x,k.pl.y+1.6,k.pl.z];for(let S of $.players.values())S.alive&&(S.team===e.team?b.push({x:S.x,z:S.z,col:S.team==="T"?"#f0c060":"#8ab8ff",me:S.id===nt}):e.alive&&S.seenT>$.time-.6&&b.push({x:S.x,z:S.z,col:"#ff4040"}));for(let S of Xs)b.push({x:S.x,z:S.z,col:"#ffd34a",ping:!0});if(fg(an("radar"),Md,$.W,y,b,{s:$.bomb.state,x:$.bomb.x,z:$.bomb.z,seen:e.team==="T"||$.bomb.seen||$.bomb.state==="planted"},e.team),e.alive)for(let S of $.players.values())S.alive&&S.team!==e.team&&Math.hypot(S.x-k.pl.x,S.z-k.pl.z)<60&&Oa($.W,$.nades,M,[S.x,S.y,S.z,1])&&(S.seenT=$.time);let R=gi($.W,y.x,y.z);He.el.zoneName.textContent=R&4?"Sitio A":R&8?"Sitio B":R&16?"Base T":R&32?"Base CT":""}}var Sg=performance.now();function Gg(n){requestAnimationFrame(Gg);let e=Math.min(.05,(n-Sg)/1e3);if(Sg=n,$.phase==="lobby"&&Rr&&jt){Rr.render(jt,e);return}if($.phase!=="lobby"&&Ed){let t=window.__ls&&window.__ls.ff||0;for(let i=0;i<t;i++)Tg(.05);if(Tg(e),kt.update(e,$.time,un),rS(),kt.tickDebug(e),iS(),yS(e),vS(e),window.__ls.cam){let i=window.__ls.cam;un.position.set(i[0],i[1],i[2]),un.lookAt(i[3],i[4],i[5]),un.fov!==74&&(un.fov=74,un.updateProjectionMatrix()),gn.visible=!1}Nn&&Ct()&&!Ct().alive&&k.deadT>2.2&&(Nn=!1,Ld(1)),jt.clear(),jt.render(Wt,un),jt.clearDepth(),gn.visible&&jt.render(wr,Eo)}}function Tg(n){$.time+=n,At()&&Xt?(Xt.tick(n),en&&en.tick(n),xS(n)):$.phase!=="lobby"&&($.timeLeft-=n,$.bomb.state==="planted"&&($.bomb.t-=n)),gS(n),Yb(n),fS(n),mS(n)}var ys=n=>!!(window.Arcade&&Arcade.admin&&Arcade.admin.get(n));function _S(){Arcade.admin&&(Arcade.admin.define([{id:"ls.god",label:"Inmortal",type:"toggle"},{id:"ls.wall",label:"Ver a trav\xE9s de paredes",type:"toggle"},{id:"ls.aim",label:"Aimbot (al disparar)",type:"toggle"},{id:"ls.norecoil",label:"Sin retroceso ni dispersi\xF3n",type:"toggle"},{id:"ls.ammo",label:"Balas infinitas",type:"toggle"},{id:"ls.speed",label:"S\xFAper velocidad",type:"toggle"},{id:"ls.money",label:"Plata al m\xE1ximo",type:"button"},{id:"ls.heal",label:"Curarme + chaleco",type:"button"},{id:"ls.kill",label:"Matar a los enemigos",type:"button"},{id:"ls.win",label:"Ganar la ronda",type:"button"}]),Arcade.admin.on("ls.god",n=>Nt("adm",{a:"god",v:!!n})),Arcade.admin.on("ls.money",()=>Nt("adm",{a:"money"})),Arcade.admin.on("ls.heal",()=>Nt("adm",{a:"heal"})),Arcade.admin.on("ls.kill",()=>Nt("adm",{a:"kill"})),Arcade.admin.on("ls.win",()=>Nt("adm",{a:"win"})))}var yd={};function MS(n){return yd[n]||(yd[n]=(async()=>{try{let e=Hh[n]||(Hh[n]=await Sf(n));return e.W=e.W||Tf(e.info,e.layers),ld(e.W)}catch(e){return console.warn(e),null}})()),yd[n]}var Rr=null;function Sd(){Rr.show()}function Td(){Rr.refresh()}function To(){At()&&($n("cfg",{cfg:$.cfg,prefs:$.prefs}),Td())}var Wh=new Set,vd=0;async function wg(n){if($.cfg=n.cfg,$.prefs=n.prefs||{},Rr.hide(),await cS($.cfg.map),$.phase="loading",an("hud").hidden=!1,At()){Wh.add(nt);let e=()=>{((Qt.players||[]).every(i=>Wh.has(i.id))||vd<=0)&&bS()};vd=1,setTimeout(()=>{vd=0,e()},15e3),$.tryBegin=e,e()}else $n("ready",{},{to:Qt.hostId});Ao(),vs||ja()}var wd=!1;function bS(){if(wd)return;wd=!0,Xt=Bf($);let n=(Qt.players||[{id:nt,name:"Jugador",slot:0}]).map(e=>{let t=$.prefs[e.id]||{};return{id:e.id,name:e.name,slot:e.slot,pref:t.t??-1}});Xt.setup(n),en=Vf($,Xt),Xt.startMatch()}function SS(){$.phase="lobby",wd=!1,Xt=null,en=null,Wh.clear(),$.players.clear(),$.drops.clear(),$.nades.length=0,an("hud").hidden=!0,He.banner(null),clearInterval(zh),document.exitPointerLock&&document.exitPointerLock(),Sd(),Ao()}function TS(){if(!($.phase==="lobby"||$.phase==="loading"||Xt)){Xt=Bf($),Xt.adopt(),en=Vf($,Xt);for(let n of $.players.values())n.bot&&n.alive&&en.place(n,[n.x,n.y,n.z,n.yaw]),n.dmgBy||(n.dmgBy={});en.roundStart(),Xt.markDirty()}}async function wS(){He.init(),aS(),zb(),requestAnimationFrame(Gg),Qt=await Arcade.ready(),nt=Qt.me.id,(!Qt.players||!Qt.players.length)&&(Qt.players=[Qt.me]),an("loading").hidden=!0,_S();for(let e of Ob)Arcade.on(e,(t,i,s)=>{At()&&Xt&&Xt.handle(e,t,i,s||{})});for(let e of["st","rs","ev","p","pb","sh","nd"])Arcade.on(e,(t,i)=>{(e==="ev"||e==="st"||e==="rs")&&At()||Id(e,t,i)});Arcade.on("cfg",e=>{At()||($.cfg=e.cfg,$.prefs=e.prefs||{},$.phase==="lobby"&&Td())}),Arcade.on("pref",(e,t)=>{At()&&($.prefs[t]=e,To())}),Arcade.on("start",e=>{$.phase==="lobby"&&wg(e)}),Arcade.on("ready",(e,t)=>{At()&&(Wh.add(t),$.tryBegin&&$.tryBegin())}),Arcade.on("hello",(e,t)=>{At()&&$.phase==="lobby"&&To()}),Arcade.onPlayerLeft(e=>{Qt.players=(Qt.players||[]).filter(i=>i.id!==e);let t=$.players.get(e);t&&At()&&Xt&&(t.bot=!0,t.name=t.name+" (bot)",t.alive&&en&&en.place(t,[t.x,t.y,t.z,t.yaw]),Xt.markDirty()),$.phase==="lobby"&&Td(),At()&&$.tryBegin&&$.tryBegin()}),Arcade.onHostChanged(()=>{At()&&(TS(),$.phase==="lobby"&&(Sd(),To()))});let n=$.emit;$.emit=(e,t)=>{if(e==="start"){$n("start",t),wg(t);return}n(e,t)},Rr=cg({G:$,store:Xh,MAPS:_d,LENGTHS:zf,DIFF:wh,MODES:Am,mapThumb:MS,ctx:()=>Qt,myId:()=>nt,isHost:At,pushCfg:To,openSettings:e=>tl.open(e),sendPref:e=>{$.prefs[nt]=e,At()?To():$n("pref",e,{to:Qt.hostId})},onStart:()=>{qa(),vs||Rg(),$.emit("start",{cfg:$.cfg,prefs:$.prefs})}}),$.prefs[nt]=Rr.myPref(),Sd(),At()?To():($n("hello",{},{to:Qt.hostId}),$n("pref",$.prefs[nt],{to:Qt.hostId}))}wS();window.__ls={G:$,M:k,me:Ct,req:Nt,get H(){return Xt},get BOTS(){return en},get camera(){return un},keys:on,look:Ad,onKey:Rd,traceShot:bh,targets:Pd,shotDir:vo,setMouse(n,e){Nn=n,Er=!!e,e&&Cd()}};
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
