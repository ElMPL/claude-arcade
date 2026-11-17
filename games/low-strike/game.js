var vd=0,Nh=1,Md=2;var Sa=1,xl=2,gr=3,ss=0,pn=1,mi=2,As=0,xr=1,Dh=2,Uh=3,Fh=4,bd=5;var Rs=100,Sd=101,Td=102,wd=103,Ed=104,Ad=200,Rd=201,Cd=202,Pd=203,Oh=204,Bh=205,Id=206,Ld=207,Nd=208,Dd=209,Ud=210,Fd=211,Od=212,Bd=213,kd=214,Fo=0,Oo=1,Bo=2,ir=3,ko=4,zo=5,Ho=6,Vo=7,yl=0,zd=1,Hd=2,gi=0,kh=1,zh=2,Hh=3,Ta=4,Vh=5,Gh=6,Wh=7;var Xh=300,Cs=301,yr=302,_l=303,vl=304,sr=1e3,li=1001,Go=1002,an=1003,Vd=1004;var wa=1005;var An=1006,Ml=1007;var Di=1008;var In=1009,qh=1010,Yh=1011,_r=1012,bl=1013,ii=1014,Yn=1015,si=1016,Sl=1017,Tl=1018,Ps=1020,$h=35902,Zh=35899,Kh=1021,Jh=1022,ri=1023,Ci=1026,Ui=1027,wl=1028,El=1029,rs=1030,Al=1031;var Rl=1033,Ea=33776,Aa=33777,Ra=33778,Ca=33779,Cl=35840,Pl=35841,Il=35842,Ll=35843,Nl=36196,Dl=37492,Ul=37496,Fl=37488,Ol=37489,Pa=37490,Bl=37491,kl=37808,zl=37809,Hl=37810,Vl=37811,Gl=37812,Wl=37813,Xl=37814,ql=37815,Yl=37816,$l=37817,Zl=37818,Kl=37819,Jl=37820,jl=37821,Ql=36492,ec=36494,tc=36495,nc=36283,ic=36284,Ia=36285,sc=36286;var qr=2300,Wo=2301,Do=2302,Mh=2303,bh=2400,Sh=2401,Th=2402;var Gd=3200;var rc=0,Wd=1,Fi="",fn="srgb",Yr="srgb-linear",$r="linear",_t="srgb";var Uo=7680;var Xd=519,qd=512,Yd=513,$d=514,jh=515,Zd=516,Kd=517,Qh=518,eu=519,tu=35044,vr=35048;var nu="300 es",Gn=2e3,rr=2001;function ym(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function _m(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Zr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Jd(){let n=Zr("canvas");return n.style.display="block",n}var zf={},ar=null;function Kr(...n){let e="THREE."+n.shift();ar?ar("log",e,...n):console.log(e,...n)}function jd(n){let e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function He(...n){n=jd(n);let e="THREE."+n.shift();if(ar)ar("warn",e,...n);else{let t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function Ge(...n){n=jd(n);let e="THREE."+n.shift();if(ar)ar("error",e,...n);else{let t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function Gr(...n){let e=n.join(" ");e in zf||(zf[e]=!0,He(...n))}function Qd(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}var ep={[Fo]:Fo,[Bo]:Ho,[ko]:ko,[ir]:zo,[Oo]:Oo,[Ho]:Bo,[Vo]:Vo,[zo]:ir},ci=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let s=i[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},_n=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Zc=Math.PI/180,Xo=180/Math.PI;function as(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(_n[n&255]+_n[n>>8&255]+_n[n>>16&255]+_n[n>>24&255]+"-"+_n[e&255]+_n[e>>8&255]+"-"+_n[e>>16&15|64]+_n[e>>24&255]+"-"+_n[t&63|128]+_n[t>>8&255]+"-"+_n[t>>16&255]+_n[t>>24&255]+_n[i&255]+_n[i>>8&255]+_n[i>>16&255]+_n[i>>24&255]).toLowerCase()}function at(n,e,t){return Math.max(e,Math.min(t,n))}function vm(n,e){return(n%e+e)%e}function Kc(n,e,t){return(1-t)*n+t*e}function tp(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function ac(n){switch(n.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function np(n,e){if(e.constructor===Float32Array)return n;let t=ac(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(n/t,-1)}function ip(n,e){if(e.constructor===Float32Array)return n;let t=ac(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(n*t)}var he=class{static{this.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(at(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(at(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},hi=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,o){let l=i[s+0],c=i[s+1],h=i[s+2],f=i[s+3],u=r[a+0],d=r[a+1],m=r[a+2],y=r[a+3];if(f!==y||l!==u||c!==d||h!==m){let p=l*u+c*d+h*m+f*y;p<0&&(u=-u,d=-d,m=-m,y=-y,p=-p);let g=1-o;if(p<.9995){let b=Math.acos(p),w=Math.sin(b);g=Math.sin(g*b)/w,o=Math.sin(o*b)/w,l=l*g+u*o,c=c*g+d*o,h=h*g+m*o,f=f*g+y*o}else{l=l*g+u*o,c=c*g+d*o,h=h*g+m*o,f=f*g+y*o;let b=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=b,c*=b,h*=b,f*=b}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,s,r,a){let o=i[s],l=i[s+1],c=i[s+2],h=i[s+3],f=r[a],u=r[a+1],d=r[a+2],m=r[a+3];return e[t]=o*m+h*f+l*d-c*u,e[t+1]=l*m+h*u+c*f-o*d,e[t+2]=c*m+h*d+o*u-l*f,e[t+3]=h*m-o*f-l*u-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(s/2),f=o(r/2),u=l(i/2),d=l(s/2),m=l(r/2);switch(a){case"XYZ":this._x=u*h*f+c*d*m,this._y=c*d*f-u*h*m,this._z=c*h*m+u*d*f,this._w=c*h*f-u*d*m;break;case"YXZ":this._x=u*h*f+c*d*m,this._y=c*d*f-u*h*m,this._z=c*h*m-u*d*f,this._w=c*h*f+u*d*m;break;case"ZXY":this._x=u*h*f-c*d*m,this._y=c*d*f+u*h*m,this._z=c*h*m+u*d*f,this._w=c*h*f-u*d*m;break;case"ZYX":this._x=u*h*f-c*d*m,this._y=c*d*f+u*h*m,this._z=c*h*m-u*d*f,this._w=c*h*f+u*d*m;break;case"YZX":this._x=u*h*f+c*d*m,this._y=c*d*f+u*h*m,this._z=c*h*m-u*d*f,this._w=c*h*f-u*d*m;break;case"XZY":this._x=u*h*f-c*d*m,this._y=c*d*f-u*h*m,this._z=c*h*m+u*d*f,this._w=c*h*f+u*d*m;break;default:He("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],f=t[10],u=i+o+f;if(u>0){let d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(a-s)*d}else if(i>o&&i>f){let d=2*Math.sqrt(1+i-o-f);this._w=(h-l)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+c)/d}else if(o>f){let d=2*Math.sqrt(1+o-i-f);this._w=(r-c)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+f-i-o);this._w=(a-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(at(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-i*c,this._z=r*h+a*c+i*l-s*o,this._w=a*h-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},V=class{static{this.prototype.isVector3=!0}constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Hf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Hf.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*i),h=2*(o*t-r*s),f=2*(r*i-a*t);return this.x=t+l*c+a*f-o*h,this.y=i+l*h+o*c-r*f,this.z=s+l*f+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this.z=at(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this.z=at(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(at(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Jc.copy(this).projectOnVector(e),this.sub(Jc)}reflect(e){return this.sub(Jc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(at(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Jc=new V,Hf=new hi,qe=class{static{this.prototype.isMatrix3=!0}constructor(e,t,i,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c)}set(e,t,i,s,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],f=i[7],u=i[2],d=i[5],m=i[8],y=s[0],p=s[3],g=s[6],b=s[1],w=s[4],v=s[7],_=s[2],T=s[5],x=s[8];return r[0]=a*y+o*b+l*_,r[3]=a*p+o*w+l*T,r[6]=a*g+o*v+l*x,r[1]=c*y+h*b+f*_,r[4]=c*p+h*w+f*T,r[7]=c*g+h*v+f*x,r[2]=u*y+d*b+m*_,r[5]=u*p+d*w+m*T,r[8]=u*g+d*v+m*x,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-i*r*h+i*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],f=h*a-o*c,u=o*l-h*r,d=c*r-a*l,m=t*f+i*u+s*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/m;return e[0]=f*y,e[1]=(s*c-h*i)*y,e[2]=(o*i-s*a)*y,e[3]=u*y,e[4]=(h*t-s*l)*y,e[5]=(s*r-o*t)*y,e[6]=d*y,e[7]=(i*l-c*t)*y,e[8]=(a*t-i*r)*y,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return Gr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(jc.makeScale(e,t)),this}rotate(e){return Gr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(jc.makeRotation(-e)),this}translate(e,t){return Gr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(jc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},jc=new qe,Vf=new qe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Gf=new qe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Mm(){let n={enabled:!0,workingColorSpace:Yr,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===_t&&(s.r=Ri(s.r),s.g=Ri(s.g),s.b=Ri(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===_t&&(s.r=nr(s.r),s.g=nr(s.g),s.b=nr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Fi?$r:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Yr]:{primaries:e,whitePoint:i,transfer:$r,toXYZ:Vf,fromXYZ:Gf,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:fn},outputColorSpaceConfig:{drawingBufferColorSpace:fn}},[fn]:{primaries:e,whitePoint:i,transfer:_t,toXYZ:Vf,fromXYZ:Gf,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:fn}}}),n}var ut=Mm();function Ri(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function nr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Bs,qo=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Bs===void 0&&(Bs=Zr("canvas")),Bs.width=e.width,Bs.height=e.height;let s=Bs.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Bs}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Zr("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Ri(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ri(t[i]/255)*255):t[i]=Ri(t[i]);return{data:t,width:e.width,height:e.height}}else return He("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},bm=0,or=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:bm++}),this.uuid=as(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Qc(s[a].image)):r.push(Qc(s[a]))}else r=Qc(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function Qc(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?qo.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(He("Texture: Unable to serialize Texture."),{})}var Sm=0,eh=new V,Rn=class n extends ci{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=li,s=li,r=An,a=Di,o=ri,l=In,c=n.DEFAULT_ANISOTROPY,h=Fi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Sm++}),this.uuid=as(),this.name="",this.source=new or(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new he(0,0),this.repeat=new he(1,1),this.center=new he(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qe,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(eh).x}get height(){return this.source.getSize(eh).y}get depth(){return this.source.getSize(eh).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){He(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){He(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Xh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case sr:e.x=e.x-Math.floor(e.x);break;case li:e.x=e.x<0?0:1;break;case Go:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case sr:e.y=e.y-Math.floor(e.y);break;case li:e.y=e.y<0?0:1;break;case Go:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Rn.DEFAULT_IMAGE=null;Rn.DEFAULT_MAPPING=Xh;Rn.DEFAULT_ANISOTROPY=1;var Lt=class{static{this.prototype.isVector4=!0}constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,c=l[0],h=l[4],f=l[8],u=l[1],d=l[5],m=l[9],y=l[2],p=l[6],g=l[10];if(Math.abs(h-u)<.01&&Math.abs(f-y)<.01&&Math.abs(m-p)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+y)<.1&&Math.abs(m+p)<.1&&Math.abs(c+d+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let w=(c+1)/2,v=(d+1)/2,_=(g+1)/2,T=(h+u)/4,x=(f+y)/4,S=(m+p)/4;return w>v&&w>_?w<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(w),s=T/i,r=x/i):v>_?v<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),i=T/s,r=S/s):_<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(_),i=x/r,s=S/r),this.set(i,s,r,t),this}let b=Math.sqrt((p-m)*(p-m)+(f-y)*(f-y)+(u-h)*(u-h));return Math.abs(b)<.001&&(b=1),this.x=(p-m)/b,this.y=(f-y)/b,this.z=(u-h)/b,this.w=Math.acos((c+d+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this.z=at(this.z,e.z,t.z),this.w=at(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this.z=at(this.z,e,t),this.w=at(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(at(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Yo=class extends ci{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:An,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Lt(0,0,e,t),this.scissorTest=!1,this.viewport=new Lt(0,0,e,t),this.textures=[];let s=i.count;for(let r=0;r<s;r++)this.textures[r]=new Rn({width:e,height:t,depth:i.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:An,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new or(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Bn=class extends Yo{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Jr=class extends Rn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=an,this.minFilter=an,this.wrapR=li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var $o=class extends Rn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=an,this.minFilter=an,this.wrapR=li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var mt=class n{static{this.prototype.isMatrix4=!0}constructor(e,t,i,s,r,a,o,l,c,h,f,u,d,m,y,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c,h,f,u,d,m,y,p)}set(e,t,i,s,r,a,o,l,c,h,f,u,d,m,y,p){let g=this.elements;return g[0]=e,g[4]=t,g[8]=i,g[12]=s,g[1]=r,g[5]=a,g[9]=o,g[13]=l,g[2]=c,g[6]=h,g[10]=f,g[14]=u,g[3]=d,g[7]=m,g[11]=y,g[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,i=e.elements,s=1/ks.setFromMatrixColumn(e,0).length(),r=1/ks.setFromMatrixColumn(e,1).length(),a=1/ks.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){let u=a*h,d=a*f,m=o*h,y=o*f;t[0]=l*h,t[4]=-l*f,t[8]=c,t[1]=d+m*c,t[5]=u-y*c,t[9]=-o*l,t[2]=y-u*c,t[6]=m+d*c,t[10]=a*l}else if(e.order==="YXZ"){let u=l*h,d=l*f,m=c*h,y=c*f;t[0]=u+y*o,t[4]=m*o-d,t[8]=a*c,t[1]=a*f,t[5]=a*h,t[9]=-o,t[2]=d*o-m,t[6]=y+u*o,t[10]=a*l}else if(e.order==="ZXY"){let u=l*h,d=l*f,m=c*h,y=c*f;t[0]=u-y*o,t[4]=-a*f,t[8]=m+d*o,t[1]=d+m*o,t[5]=a*h,t[9]=y-u*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let u=a*h,d=a*f,m=o*h,y=o*f;t[0]=l*h,t[4]=m*c-d,t[8]=u*c+y,t[1]=l*f,t[5]=y*c+u,t[9]=d*c-m,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let u=a*l,d=a*c,m=o*l,y=o*c;t[0]=l*h,t[4]=y-u*f,t[8]=m*f+d,t[1]=f,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=d*f+m,t[10]=u-y*f}else if(e.order==="XZY"){let u=a*l,d=a*c,m=o*l,y=o*c;t[0]=l*h,t[4]=-f,t[8]=c*h,t[1]=u*f+y,t[5]=a*h,t[9]=d*f-m,t[2]=m*f-d,t[6]=o*h,t[10]=y*f+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Tm,e,wm)}lookAt(e,t,i){let s=this.elements;return Fn.subVectors(e,t),Fn.lengthSq()===0&&(Fn.z=1),Fn.normalize(),qi.crossVectors(i,Fn),qi.lengthSq()===0&&(Math.abs(i.z)===1?Fn.x+=1e-4:Fn.z+=1e-4,Fn.normalize(),qi.crossVectors(i,Fn)),qi.normalize(),oo.crossVectors(Fn,qi),s[0]=qi.x,s[4]=oo.x,s[8]=Fn.x,s[1]=qi.y,s[5]=oo.y,s[9]=Fn.y,s[2]=qi.z,s[6]=oo.z,s[10]=Fn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],f=i[5],u=i[9],d=i[13],m=i[2],y=i[6],p=i[10],g=i[14],b=i[3],w=i[7],v=i[11],_=i[15],T=s[0],x=s[4],S=s[8],N=s[12],M=s[1],E=s[5],R=s[9],I=s[13],A=s[2],C=s[6],U=s[10],F=s[14],k=s[3],D=s[7],z=s[11],G=s[15];return r[0]=a*T+o*M+l*A+c*k,r[4]=a*x+o*E+l*C+c*D,r[8]=a*S+o*R+l*U+c*z,r[12]=a*N+o*I+l*F+c*G,r[1]=h*T+f*M+u*A+d*k,r[5]=h*x+f*E+u*C+d*D,r[9]=h*S+f*R+u*U+d*z,r[13]=h*N+f*I+u*F+d*G,r[2]=m*T+y*M+p*A+g*k,r[6]=m*x+y*E+p*C+g*D,r[10]=m*S+y*R+p*U+g*z,r[14]=m*N+y*I+p*F+g*G,r[3]=b*T+w*M+v*A+_*k,r[7]=b*x+w*E+v*C+_*D,r[11]=b*S+w*R+v*U+_*z,r[15]=b*N+w*I+v*F+_*G,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],f=e[6],u=e[10],d=e[14],m=e[3],y=e[7],p=e[11],g=e[15],b=l*d-c*u,w=o*d-c*f,v=o*u-l*f,_=a*d-c*h,T=a*u-l*h,x=a*f-o*h;return t*(y*b-p*w+g*v)-i*(m*b-p*_+g*T)+s*(m*w-y*_+g*x)-r*(m*v-y*T+p*x)}determinantAffine(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],h=e[10];return t*(a*h-o*c)-i*(r*h-o*l)+s*(r*c-a*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],f=e[9],u=e[10],d=e[11],m=e[12],y=e[13],p=e[14],g=e[15],b=t*o-i*a,w=t*l-s*a,v=t*c-r*a,_=i*l-s*o,T=i*c-r*o,x=s*c-r*l,S=h*y-f*m,N=h*p-u*m,M=h*g-d*m,E=f*p-u*y,R=f*g-d*y,I=u*g-d*p,A=b*I-w*R+v*E+_*M-T*N+x*S;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let C=1/A;return e[0]=(o*I-l*R+c*E)*C,e[1]=(s*R-i*I-r*E)*C,e[2]=(y*x-p*T+g*_)*C,e[3]=(u*T-f*x-d*_)*C,e[4]=(l*M-a*I-c*N)*C,e[5]=(t*I-s*M+r*N)*C,e[6]=(p*v-m*x-g*w)*C,e[7]=(h*x-u*v+d*w)*C,e[8]=(a*R-o*M+c*S)*C,e[9]=(i*M-t*R-r*S)*C,e[10]=(m*T-y*v+g*b)*C,e[11]=(f*v-h*T-d*b)*C,e[12]=(o*N-a*E-l*S)*C,e[13]=(t*E-i*N+s*S)*C,e[14]=(y*w-m*_-p*b)*C,e[15]=(h*_-f*w+u*b)*C,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+i,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,f=o+o,u=r*c,d=r*h,m=r*f,y=a*h,p=a*f,g=o*f,b=l*c,w=l*h,v=l*f,_=i.x,T=i.y,x=i.z;return s[0]=(1-(y+g))*_,s[1]=(d+v)*_,s[2]=(m-w)*_,s[3]=0,s[4]=(d-v)*T,s[5]=(1-(u+g))*T,s[6]=(p+b)*T,s[7]=0,s[8]=(m+w)*x,s[9]=(p-b)*x,s[10]=(1-(u+y))*x,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let a=ks.set(s[0],s[1],s[2]).length(),o=ks.set(s[4],s[5],s[6]).length(),l=ks.set(s[8],s[9],s[10]).length();r<0&&(a=-a),jn.copy(this);let c=1/a,h=1/o,f=1/l;return jn.elements[0]*=c,jn.elements[1]*=c,jn.elements[2]*=c,jn.elements[4]*=h,jn.elements[5]*=h,jn.elements[6]*=h,jn.elements[8]*=f,jn.elements[9]*=f,jn.elements[10]*=f,t.setFromRotationMatrix(jn),i.x=a,i.y=o,i.z=l,this}makePerspective(e,t,i,s,r,a,o=Gn,l=!1){let c=this.elements,h=2*r/(t-e),f=2*r/(i-s),u=(t+e)/(t-e),d=(i+s)/(i-s),m,y;if(l)m=r/(a-r),y=a*r/(a-r);else if(o===Gn)m=-(a+r)/(a-r),y=-2*a*r/(a-r);else if(o===rr)m=-a/(a-r),y=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=f,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,a,o=Gn,l=!1){let c=this.elements,h=2/(t-e),f=2/(i-s),u=-(t+e)/(t-e),d=-(i+s)/(i-s),m,y;if(l)m=1/(a-r),y=a/(a-r);else if(o===Gn)m=-2/(a-r),y=-(a+r)/(a-r);else if(o===rr)m=-1/(a-r),y=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=f,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=m,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},ks=new V,jn=new mt,Tm=new V(0,0,0),wm=new V(1,1,1),qi=new V,oo=new V,Fn=new V,Wf=new mt,Xf=new hi,ni=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],f=s[2],u=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(at(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-at(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(at(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-at(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(at(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-at(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:He("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Wf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Wf,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Xf.setFromEuler(this),this.setFromQuaternion(Xf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ni.DEFAULT_ORDER="XYZ";var jr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Em=0,qf=new V,zs=new hi,bi=new mt,lo=new V,Nr=new V,Am=new V,Rm=new hi,Yf=new V(1,0,0),$f=new V(0,1,0),Zf=new V(0,0,1),Kf={type:"added"},Cm={type:"removed"},Hs={type:"childadded",child:null},th={type:"childremoved",child:null},Gt=class n extends ci{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Em++}),this.uuid=as(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new V,t=new ni,i=new hi,s=new V(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new mt},normalMatrix:{value:new qe}}),this.matrix=new mt,this.matrixWorld=new mt,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new jr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return zs.setFromAxisAngle(e,t),this.quaternion.multiply(zs),this}rotateOnWorldAxis(e,t){return zs.setFromAxisAngle(e,t),this.quaternion.premultiply(zs),this}rotateX(e){return this.rotateOnAxis(Yf,e)}rotateY(e){return this.rotateOnAxis($f,e)}rotateZ(e){return this.rotateOnAxis(Zf,e)}translateOnAxis(e,t){return qf.copy(e).applyQuaternion(this.quaternion),this.position.add(qf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Yf,e)}translateY(e){return this.translateOnAxis($f,e)}translateZ(e){return this.translateOnAxis(Zf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(bi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?lo.copy(e):lo.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Nr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?bi.lookAt(Nr,lo,this.up):bi.lookAt(lo,Nr,this.up),this.quaternion.setFromRotationMatrix(bi),s&&(bi.extractRotation(s.matrixWorld),zs.setFromRotationMatrix(bi),this.quaternion.premultiply(zs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ge("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Kf),Hs.child=e,this.dispatchEvent(Hs),Hs.child=null):Ge("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Cm),th.child=e,this.dispatchEvent(th),th.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),bi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),bi.multiply(e.parent.matrixWorld)),e.applyMatrix4(bi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Kf),Hs.child=e,this.dispatchEvent(Hs),Hs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Nr,e,Am),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Nr,Rm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),f=a(e.shapes),u=a(e.skeletons),d=a(e.animations),m=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),f.length>0&&(i.shapes=f),u.length>0&&(i.skeletons=u),d.length>0&&(i.animations=d),m.length>0&&(i.nodes=m)}return i.object=s,i;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Gt.DEFAULT_UP=new V(0,1,0);Gt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Rt=class extends Gt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Pm={type:"move"},lr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Rt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Rt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Rt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let y of e.hand.values()){let p=t.getJointPose(y,i),g=this._getHandJoint(c,y);p!==null&&(g.matrix.fromArray(p.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=p.radius),g.visible=p!==null}let h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],u=h.position.distanceTo(f.position),d=.02,m=.005;c.inputState.pinching&&u>d+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=d-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Pm)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Rt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},sp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Yi={h:0,s:0,l:0},co={h:0,s:0,l:0};function nh(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var Ve=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=fn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ut.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=ut.workingColorSpace){return this.r=e,this.g=t,this.b=i,ut.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=ut.workingColorSpace){if(e=vm(e,1),t=at(t,0,1),i=at(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=nh(a,r,e+1/3),this.g=nh(a,r,e),this.b=nh(a,r,e-1/3)}return ut.colorSpaceToWorking(this,s),this}setStyle(e,t=fn){function i(r){r!==void 0&&parseFloat(r)<1&&He("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:He("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);He("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=fn){let i=sp[e.toLowerCase()];return i!==void 0?this.setHex(i,t):He("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ri(e.r),this.g=Ri(e.g),this.b=Ri(e.b),this}copyLinearToSRGB(e){return this.r=nr(e.r),this.g=nr(e.g),this.b=nr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=fn){return ut.workingToColorSpace(vn.copy(this),e),Math.round(at(vn.r*255,0,255))*65536+Math.round(at(vn.g*255,0,255))*256+Math.round(at(vn.b*255,0,255))}getHexString(e=fn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ut.workingColorSpace){ut.workingToColorSpace(vn.copy(this),t);let i=vn.r,s=vn.g,r=vn.b,a=Math.max(i,s,r),o=Math.min(i,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let f=a-o;switch(c=h<=.5?f/(a+o):f/(2-a-o),a){case i:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-i)/f+2;break;case r:l=(i-s)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=ut.workingColorSpace){return ut.workingToColorSpace(vn.copy(this),t),e.r=vn.r,e.g=vn.g,e.b=vn.b,e}getStyle(e=fn){ut.workingToColorSpace(vn.copy(this),e);let t=vn.r,i=vn.g,s=vn.b;return e!==fn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Yi),this.setHSL(Yi.h+e,Yi.s+t,Yi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Yi),e.getHSL(co);let i=Kc(Yi.h,co.h,t),s=Kc(Yi.s,co.s,t),r=Kc(Yi.l,co.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},vn=new Ve;Ve.NAMES=sp;var Qr=class n{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new Ve(e),this.near=t,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Pi=class extends Gt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ni,this.environmentIntensity=1,this.environmentRotation=new ni,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Qn=new V,Si=new V,ih=new V,Ti=new V,Vs=new V,Gs=new V,Jf=new V,sh=new V,rh=new V,ah=new V,oh=new Lt,lh=new Lt,ch=new Lt,Ai=class n{constructor(e=new V,t=new V,i=new V){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Qn.subVectors(e,t),s.cross(Qn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Qn.subVectors(s,t),Si.subVectors(i,t),ih.subVectors(e,t);let a=Qn.dot(Qn),o=Qn.dot(Si),l=Qn.dot(ih),c=Si.dot(Si),h=Si.dot(ih),f=a*c-o*o;if(f===0)return r.set(0,0,0),null;let u=1/f,d=(c*l-o*h)*u,m=(a*h-o*l)*u;return r.set(1-d-m,m,d)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Ti)===null?!1:Ti.x>=0&&Ti.y>=0&&Ti.x+Ti.y<=1}static getInterpolation(e,t,i,s,r,a,o,l){return this.getBarycoord(e,t,i,s,Ti)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ti.x),l.addScaledVector(a,Ti.y),l.addScaledVector(o,Ti.z),l)}static getInterpolatedAttribute(e,t,i,s,r,a){return oh.setScalar(0),lh.setScalar(0),ch.setScalar(0),oh.fromBufferAttribute(e,t),lh.fromBufferAttribute(e,i),ch.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(oh,r.x),a.addScaledVector(lh,r.y),a.addScaledVector(ch,r.z),a}static isFrontFacing(e,t,i,s){return Qn.subVectors(i,t),Si.subVectors(e,t),Qn.cross(Si).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Qn.subVectors(this.c,this.b),Si.subVectors(this.a,this.b),Qn.cross(Si).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,a,o;Vs.subVectors(s,i),Gs.subVectors(r,i),sh.subVectors(e,i);let l=Vs.dot(sh),c=Gs.dot(sh);if(l<=0&&c<=0)return t.copy(i);rh.subVectors(e,s);let h=Vs.dot(rh),f=Gs.dot(rh);if(h>=0&&f<=h)return t.copy(s);let u=l*f-h*c;if(u<=0&&l>=0&&h<=0&&l-h>0)return a=l/(l-h),t.copy(i).addScaledVector(Vs,a);ah.subVectors(e,r);let d=Vs.dot(ah),m=Gs.dot(ah);if(m>=0&&d<=m)return t.copy(r);let y=d*c-l*m;if(y<=0&&c>=0&&m<=0)return o=c/(c-m),t.copy(i).addScaledVector(Gs,o);let p=h*m-d*f;if(p<=0&&f-h>=0&&d-m>=0)return Jf.subVectors(r,s),o=(f-h)/(f-h+(d-m)),t.copy(s).addScaledVector(Jf,o);let g=1/(p+y+u);return a=y*g,o=u*g,t.copy(i).addScaledVector(Vs,a).addScaledVector(Gs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},ui=class{constructor(e=new V(1/0,1/0,1/0),t=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(ei.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(ei.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=ei.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,ei):ei.fromBufferAttribute(r,a),ei.applyMatrix4(e.matrixWorld),this.expandByPoint(ei);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ho.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ho.copy(i.boundingBox)),ho.applyMatrix4(e.matrixWorld),this.union(ho)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ei),ei.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Dr),uo.subVectors(this.max,Dr),Ws.subVectors(e.a,Dr),Xs.subVectors(e.b,Dr),qs.subVectors(e.c,Dr),$i.subVectors(Xs,Ws),Zi.subVectors(qs,Xs),gs.subVectors(Ws,qs);let t=[0,-$i.z,$i.y,0,-Zi.z,Zi.y,0,-gs.z,gs.y,$i.z,0,-$i.x,Zi.z,0,-Zi.x,gs.z,0,-gs.x,-$i.y,$i.x,0,-Zi.y,Zi.x,0,-gs.y,gs.x,0];return!hh(t,Ws,Xs,qs,uo)||(t=[1,0,0,0,1,0,0,0,1],!hh(t,Ws,Xs,qs,uo))?!1:(fo.crossVectors($i,Zi),t=[fo.x,fo.y,fo.z],hh(t,Ws,Xs,qs,uo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ei).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ei).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(wi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),wi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),wi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),wi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),wi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),wi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),wi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),wi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(wi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},wi=[new V,new V,new V,new V,new V,new V,new V,new V],ei=new V,ho=new ui,Ws=new V,Xs=new V,qs=new V,$i=new V,Zi=new V,gs=new V,Dr=new V,uo=new V,fo=new V,xs=new V;function hh(n,e,t,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){xs.fromArray(n,r);let o=s.x*Math.abs(xs.x)+s.y*Math.abs(xs.y)+s.z*Math.abs(xs.z),l=e.dot(xs),c=t.dot(xs),h=i.dot(xs);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Kt=new V,po=new he,Im=0,Mn=class extends ci{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Im++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=tu,this.updateRanges=[],this.gpuType=Yn,this.version=0,this._normalizationScale=e!==void 0?ac(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)po.fromBufferAttribute(this,t),po.applyMatrix3(e),this.setXY(t,po.x,po.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Kt.fromBufferAttribute(this,t),Kt.applyMatrix3(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Kt.fromBufferAttribute(this,t),Kt.applyMatrix4(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Kt.fromBufferAttribute(this,t),Kt.applyNormalMatrix(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Kt.fromBufferAttribute(this,t),Kt.transformDirection(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,t,i){return this.normalized&&(i=this._normalize(i)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):np(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):ip(e,this.array)}};var ea=class extends Mn{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var ta=class extends Mn{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var gt=class extends Mn{constructor(e,t,i){super(new Float32Array(e),t,i)}},Lm=new ui,Ur=new V,uh=new V,Ji=class{constructor(e=new V,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):Lm.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ur.subVectors(e,this.center);let t=Ur.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Ur,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(uh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ur.copy(e.center).add(uh)),this.expandByPoint(Ur.copy(e.center).sub(uh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Nm=0,Vn=new mt,fh=new Gt,Ys=new V,On=new ui,Fr=new ui,rn=new V,on=class n extends ci{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Nm++}),this.uuid=as(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ym(e)?ta:ea)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new qe().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Vn.makeRotationFromQuaternion(e),this.applyMatrix4(Vn),this}rotateX(e){return Vn.makeRotationX(e),this.applyMatrix4(Vn),this}rotateY(e){return Vn.makeRotationY(e),this.applyMatrix4(Vn),this}rotateZ(e){return Vn.makeRotationZ(e),this.applyMatrix4(Vn),this}translate(e,t,i){return Vn.makeTranslation(e,t,i),this.applyMatrix4(Vn),this}scale(e,t,i){return Vn.makeScale(e,t,i),this.applyMatrix4(Vn),this}lookAt(e){return fh.lookAt(e),fh.updateMatrix(),this.applyMatrix4(fh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ys).negate(),this.translate(Ys.x,Ys.y,Ys.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new gt(i,3))}else{let i=Math.min(e.length,t.count);for(let s=0;s<i;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&He("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ui);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ge("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];On.setFromBufferAttribute(r),this.morphTargetsRelative?(rn.addVectors(this.boundingBox.min,On.min),this.boundingBox.expandByPoint(rn),rn.addVectors(this.boundingBox.max,On.max),this.boundingBox.expandByPoint(rn)):(this.boundingBox.expandByPoint(On.min),this.boundingBox.expandByPoint(On.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ge('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ji);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ge("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new V,1/0);return}if(e){let i=this.boundingSphere.center;if(On.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Fr.setFromBufferAttribute(o),this.morphTargetsRelative?(rn.addVectors(On.min,Fr.min),On.expandByPoint(rn),rn.addVectors(On.max,Fr.max),On.expandByPoint(rn)):(On.expandByPoint(Fr.min),On.expandByPoint(Fr.max))}On.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)rn.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(rn));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)rn.fromBufferAttribute(o,c),l&&(Ys.fromBufferAttribute(e,c),rn.add(Ys)),s=Math.max(s,i.distanceToSquared(rn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ge('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ge("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new Mn(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));let o=[],l=[],c=new Uint8Array(i.count);for(let N=0;N<i.count;N++)o[N]=new V,l[N]=new V;let h=new V,f=new V,u=new V,d=new he,m=new he,y=new he,p=new V,g=new V;function b(N,M,E){c[N]=c[M]=c[E]=1,h.fromBufferAttribute(i,N),f.fromBufferAttribute(i,M),u.fromBufferAttribute(i,E),d.fromBufferAttribute(r,N),m.fromBufferAttribute(r,M),y.fromBufferAttribute(r,E),f.sub(h),u.sub(h),m.sub(d),y.sub(d);let R=1/(m.x*y.y-y.x*m.y);isFinite(R)&&(p.copy(f).multiplyScalar(y.y).addScaledVector(u,-m.y).multiplyScalar(R),g.copy(u).multiplyScalar(m.x).addScaledVector(f,-y.x).multiplyScalar(R),o[N].add(p),o[M].add(p),o[E].add(p),l[N].add(g),l[M].add(g),l[E].add(g))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let N=0,M=w.length;N<M;++N){let E=w[N],R=E.start,I=E.count;for(let A=R,C=R+I;A<C;A+=3)b(e.getX(A+0),e.getX(A+1),e.getX(A+2))}let v=new V,_=new V,T=new V,x=new V;function S(N){T.fromBufferAttribute(s,N),x.copy(T);let M=o[N];v.copy(M),v.sub(T.multiplyScalar(T.dot(M))).normalize(),_.crossVectors(x,M);let R=_.dot(l[N])<0?-1:1;a.setXYZW(N,v.x,v.y,v.z,R)}for(let N=0,M=i.count;N<M;++N)c[N]&&S(N);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new Mn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let u=0,d=i.count;u<d;u++)i.setXYZ(u,0,0,0);let s=new V,r=new V,a=new V,o=new V,l=new V,c=new V,h=new V,f=new V;if(e)for(let u=0,d=e.count;u<d;u+=3){let m=e.getX(u+0),y=e.getX(u+1),p=e.getX(u+2);s.fromBufferAttribute(t,m),r.fromBufferAttribute(t,y),a.fromBufferAttribute(t,p),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),o.fromBufferAttribute(i,m),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,p),o.add(h),l.add(h),c.add(h),i.setXYZ(m,o.x,o.y,o.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let u=0,d=t.count;u<d;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)rn.fromBufferAttribute(e,t),rn.normalize(),e.setXYZ(t,rn.x,rn.y,rn.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,f=o.normalized,u=new c.constructor(l.length*h),d=0,m=0;for(let y=0,p=l.length;y<p;y++){o.isInterleavedBufferAttribute?d=l[y]*o.data.stride+o.offset:d=l[y]*h;for(let g=0;g<h;g++)u[m++]=c[d++]}return new Mn(u,h,f)}if(this.index===null)return He("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,i);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,f=c.length;h<f;h++){let u=c[h],d=e(u,i);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let f=0,u=c.length;f<u;f++){let d=c[f];h.push(d.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],f=r[c];for(let u=0,d=f.length;u<d;u++)h.push(f[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},na=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=tu,this.updateRanges=[],this.version=0,this.uuid=as()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=jf(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let i=new this.array.constructor(e.arrayBuffers[t]),s=new this.constructor(i,this.stride);return s.setUsage(this.usage),s}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=jf(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let i={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return i.usage=this.usage,i}};function jf(n){return n.buffer._uuid===void 0&&(n.buffer._uuid=as()),n.byteOffset===0&&n.byteLength===n.buffer.byteLength?n.buffer._uuid:n.buffer._uuid+":"+n.byteOffset+":"+n.byteLength}var En=new V,cr=class n{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s,this._normalizationScale=e!==void 0?ac(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)En.fromBufferAttribute(this,t),En.applyMatrix4(e),this.setXYZ(t,En.x,En.y,En.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)En.fromBufferAttribute(this,t),En.applyNormalMatrix(e),this.setXYZ(t,En.x,En.y,En.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)En.fromBufferAttribute(this,t),En.transformDirection(e),this.setXYZ(t,En.x,En.y,En.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,t,i){return this.normalized&&(i=this._normalize(i)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),i=this._normalize(i)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Kr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Mn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Kr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):np(e,this.data.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):ip(e,this.data.array)}},dh=new V,Dm=new V,Um=new qe,ti=class{constructor(e=new V(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=dh.subVectors(i,t).cross(Dm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let s=e.delta(dh),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||Um.getNormalMatrix(e),s=this.coplanarPoint(dh).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Fm=0,Ii=class extends ci{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Fm++}),this.uuid=as(),this.name="",this.type="Material",this.blending=xr,this.side=ss,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Oh,this.blendDst=Bh,this.blendEquation=Rs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ve(0,0,0),this.blendAlpha=0,this.depthFunc=ir,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Xd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Uo,this.stencilZFail=Uo,this.stencilZPass=Uo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){He(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){He(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ve().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new ti().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new he().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new he().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},hr=class extends Ii{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ve(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},$s,Or=new V,Zs=new V,Ks=new V,Js=new he,Br=new he,rp=new mt,mo=new V,kr=new V,go=new V,Qf=new he,ph=new he,ed=new he,ia=class extends Gt{constructor(e=new hr){if(super(),this.isSprite=!0,this.type="Sprite",$s===void 0){$s=new on;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new na(t,5);$s.setIndex([0,1,2,0,2,3]),$s.setAttribute("position",new cr(i,3,0,!1)),$s.setAttribute("uv",new cr(i,2,3,!1))}this.geometry=$s,this.material=e,this.center=new he(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&Ge('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Zs.setFromMatrixScale(this.matrixWorld),rp.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Ks.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Zs.multiplyScalar(-Ks.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let a=this.center;xo(mo.set(-.5,-.5,0),Ks,a,Zs,s,r),xo(kr.set(.5,-.5,0),Ks,a,Zs,s,r),xo(go.set(.5,.5,0),Ks,a,Zs,s,r),Qf.set(0,0),ph.set(1,0),ed.set(1,1);let o=e.ray.intersectTriangle(mo,kr,go,!1,Or);if(o===null&&(xo(kr.set(-.5,.5,0),Ks,a,Zs,s,r),ph.set(0,1),o=e.ray.intersectTriangle(mo,go,kr,!1,Or),o===null))return;let l=e.ray.origin.distanceTo(Or);l<e.near||l>e.far||t.push({distance:l,point:Or.clone(),uv:Ai.getInterpolation(Or,mo,kr,go,Qf,ph,ed,new he),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}toJSON(e){let t=super.toJSON(e);return t.object.center=this.center.toArray(),t}};function xo(n,e,t,i,s,r){Js.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(Br.x=r*Js.x-s*Js.y,Br.y=s*Js.x+r*Js.y):Br.copy(Js),n.copy(e),n.x+=Br.x,n.y+=Br.y,n.applyMatrix4(rp)}var Ei=new V,mh=new V,yo=new V,_o=new V,Zo=class{constructor(e=new V,t=new V(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ei)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ei.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ei.copy(this.origin).addScaledVector(this.direction,t),Ei.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){mh.copy(e).add(t).multiplyScalar(.5),yo.copy(t).sub(e).normalize(),_o.copy(this.origin).sub(mh);let r=e.distanceTo(t)*.5,a=-this.direction.dot(yo),o=_o.dot(this.direction),l=-_o.dot(yo),c=_o.lengthSq(),h=Math.abs(1-a*a),f,u,d,m;if(h>0)if(f=a*l-o,u=a*o-l,m=r*h,f>=0)if(u>=-m)if(u<=m){let y=1/h;f*=y,u*=y,d=f*(f+a*u+2*o)+u*(a*f+u+2*l)+c}else u=r,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*l)+c;else u=-r,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*l)+c;else u<=-m?(f=Math.max(0,-(-a*r+o)),u=f>0?-r:Math.min(Math.max(-r,-l),r),d=-f*f+u*(u+2*l)+c):u<=m?(f=0,u=Math.min(Math.max(-r,-l),r),d=u*(u+2*l)+c):(f=Math.max(0,-(a*r+o)),u=f>0?r:Math.min(Math.max(-r,-l),r),d=-f*f+u*(u+2*l)+c);else u=a>0?-r:r,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(mh).addScaledVector(yo,u),d}intersectSphere(e,t){if(e.radius<0)return null;Ei.subVectors(e.center,this.origin);let i=Ei.dot(this.direction),s=Ei.dot(Ei)-i*i,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return c>=0?(i=(e.min.x-u.x)*c,s=(e.max.x-u.x)*c):(i=(e.max.x-u.x)*c,s=(e.min.x-u.x)*c),h>=0?(r=(e.min.y-u.y)*h,a=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,a=(e.min.y-u.y)*h),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(e.min.z-u.z)*f,l=(e.max.z-u.z)*f):(o=(e.max.z-u.z)*f,l=(e.min.z-u.z)*f),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Ei)!==null}intersectTriangle(e,t,i,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,f=e.x-a.x,u=e.y-a.y,d=e.z-a.z,m=t.x-a.x,y=t.y-a.y,p=t.z-a.z,g=i.x-a.x,b=i.y-a.y,w=i.z-a.z,v=Math.abs(l),_=Math.abs(c),T=Math.abs(h),x,S,N,M,E,R,I,A,C,U,F,k;if(v>=_&&v>=T?(N=l,R=f,C=m,k=g,l>=0?(x=c,S=h,M=u,E=d,I=y,A=p,U=b,F=w):(x=h,S=c,M=d,E=u,I=p,A=y,U=w,F=b)):_>=T?(N=c,R=u,C=y,k=b,c>=0?(x=h,S=l,M=d,E=f,I=p,A=m,U=w,F=g):(x=l,S=h,M=f,E=d,I=m,A=p,U=g,F=w)):(N=h,R=d,C=p,k=w,h>=0?(x=l,S=c,M=f,E=u,I=m,A=y,U=g,F=b):(x=c,S=l,M=u,E=f,I=y,A=m,U=b,F=g)),N===0)return null;let D=x/N,z=S/N,G=1/N,$=M-D*R,Z=E-z*R,q=I-D*C,ae=A-z*C,oe=U-D*k,Ee=F-z*k,fe=oe*ae-Ee*q,Le=$*Ee-Z*oe,bt=q*Z-ae*$;if(s){if(fe<0||Le<0||bt<0)return null}else if((fe<0||Le<0||bt<0)&&(fe>0||Le>0||bt>0))return null;let ze=fe+Le+bt;if(ze===0)return null;let tt=G*(fe*R+Le*C+bt*k);return(ze>0?tt<0:tt>0)?null:this.at(tt/ze,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ln=class extends Ii{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ni,this.combine=yl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},td=new mt,ys=new Zo,vo=new Ji,nd=new V,Mo=new V,bo=new V,So=new V,gh=new V,To=new V,id=new V,wo=new V,Ke=class extends Gt{constructor(e=new on,t=new ln){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){To.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],f=r[l];h!==0&&(gh.fromBufferAttribute(f,e),a?To.addScaledVector(gh,h):To.addScaledVector(gh.sub(t),h))}t.add(To)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),vo.copy(i.boundingSphere),vo.applyMatrix4(r),ys.copy(e.ray).recast(e.near),!(vo.containsPoint(ys.origin)===!1&&(ys.intersectSphere(vo,nd)===null||ys.origin.distanceToSquared(nd)>(e.far-e.near)**2))&&(td.copy(r).invert(),ys.copy(e.ray).applyMatrix4(td),!(i.boundingBox!==null&&ys.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ys)))}_computeIntersections(e,t,i){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,u=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,y=u.length;m<y;m++){let p=u[m],g=a[p.materialIndex],b=Math.max(p.start,d.start),w=Math.min(o.count,Math.min(p.start+p.count,d.start+d.count));for(let v=b,_=w;v<_;v+=3){let T=o.getX(v),x=o.getX(v+1),S=o.getX(v+2);s=Eo(this,g,e,i,c,h,f,T,x,S),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let m=Math.max(0,d.start),y=Math.min(o.count,d.start+d.count);for(let p=m,g=y;p<g;p+=3){let b=o.getX(p),w=o.getX(p+1),v=o.getX(p+2);s=Eo(this,a,e,i,c,h,f,b,w,v),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let m=0,y=u.length;m<y;m++){let p=u[m],g=a[p.materialIndex],b=Math.max(p.start,d.start),w=Math.min(l.count,Math.min(p.start+p.count,d.start+d.count));for(let v=b,_=w;v<_;v+=3){let T=v,x=v+1,S=v+2;s=Eo(this,g,e,i,c,h,f,T,x,S),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let m=Math.max(0,d.start),y=Math.min(l.count,d.start+d.count);for(let p=m,g=y;p<g;p+=3){let b=p,w=p+1,v=p+2;s=Eo(this,a,e,i,c,h,f,b,w,v),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}};function Om(n,e,t,i,s,r,a,o){let l;if(e.side===pn?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,e.side===ss,o),l===null)return null;wo.copy(o),wo.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(wo);return c<t.near||c>t.far?null:{distance:c,point:wo.clone(),object:n}}function Eo(n,e,t,i,s,r,a,o,l,c){n.getVertexPosition(o,Mo),n.getVertexPosition(l,bo),n.getVertexPosition(c,So);let h=Om(n,e,t,i,Mo,bo,So,id);if(h){let f=new V;Ai.getBarycoord(id,Mo,bo,So,f),s&&(h.uv=Ai.getInterpolatedAttribute(s,o,l,c,f,new he)),r&&(h.uv1=Ai.getInterpolatedAttribute(r,o,l,c,f,new he)),a&&(h.normal=Ai.getInterpolatedAttribute(a,o,l,c,f,new V),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new V,materialIndex:0};Ai.getNormal(Mo,bo,So,u.normal),h.face=u,h.barycoord=f}return h}var sa=class extends Rn{constructor(e=null,t=1,i=1,s,r,a,o,l,c=an,h=an,f,u){super(null,a,o,l,c,h,s,r,f,u),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var fi=class extends Mn{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},js=new mt,sd=new mt,Ao=[],rd=new ui,Bm=new mt,zr=new Ke,Hr=new Ji,Wn=class extends Ke{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new fi(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,Bm)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ui),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,js),rd.copy(e.boundingBox).applyMatrix4(js),this.boundingBox.union(rd)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ji),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,js),Hr.copy(e.boundingSphere).applyMatrix4(js),this.boundingSphere.union(Hr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,a=e*r+1;for(let o=0;o<i.length;o++)i[o]=s[a+o]}raycast(e,t){let i=this.matrixWorld,s=this.count;if(zr.geometry=this.geometry,zr.material=this.material,zr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Hr.copy(this.boundingSphere),Hr.applyMatrix4(i),e.ray.intersectsSphere(Hr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,js),sd.multiplyMatrices(i,js),zr.matrixWorld=sd,zr.raycast(e,Ao);for(let a=0,o=Ao.length;a<o;a++){let l=Ao[a];l.instanceId=r,l.object=this,t.push(l)}Ao.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new fi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new sa(new Float32Array(s*this.count),s,this.count,wl,Yn));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<i.length;c++)a+=i[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;return r[l]=o,r.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},_s=new Ji,km=new he(.5,.5),Ro=new V,ji=class{constructor(e=new ti,t=new ti,i=new ti,s=new ti,r=new ti,a=new ti){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Gn,i=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],f=r[5],u=r[6],d=r[7],m=r[8],y=r[9],p=r[10],g=r[11],b=r[12],w=r[13],v=r[14],_=r[15];if(s[0].setComponents(c-a,d-h,g-m,_-b).normalize(),s[1].setComponents(c+a,d+h,g+m,_+b).normalize(),s[2].setComponents(c+o,d+f,g+y,_+w).normalize(),s[3].setComponents(c-o,d-f,g-y,_-w).normalize(),i)s[4].setComponents(l,u,p,v).normalize(),s[5].setComponents(c-l,d-u,g-p,_-v).normalize();else if(s[4].setComponents(c-l,d-u,g-p,_-v).normalize(),t===Gn)s[5].setComponents(c+l,d+u,g+p,_+v).normalize();else if(t===rr)s[5].setComponents(l,u,p,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),_s.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),_s.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(_s)}intersectsSprite(e){_s.center.set(0,0,0);let t=km.distanceTo(e.center);return _s.radius=.7071067811865476+t,_s.applyMatrix4(e.matrixWorld),this.intersectsSphere(_s)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(Ro.x=s.normal.x>0?e.max.x:e.min.x,Ro.y=s.normal.y>0?e.max.y:e.min.y,Ro.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ro)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},ad=new mt,Ko=class n{constructor(){this.coordinateSystem=Gn,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,i=this._frustums;for(let s=0;s<t.length;s++){let r=t[s];ad.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),i[s]===void 0&&(i[s]=new ji),i[s].setFromProjectionMatrix(ad,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,i=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new ji),t[s].copy(i[s]);return this._count=e._count,this}clone(){return new n().copy(this)}};var ra=class extends Rn{constructor(e=[],t=Cs,i,s,r,a,o,l,c,h){super(e,t,i,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Li=class extends Rn{constructor(e,t,i,s,r,a,o,l,c){super(e,t,i,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Ni=class extends Rn{constructor(e,t,i=ii,s,r,a,o=an,l=an,c,h=Ci,f=1){if(h!==Ci&&h!==Ui)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:e,height:t,depth:f};super(u,s,r,a,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new or(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},aa=class extends Ni{constructor(e,t=ii,i=Cs,s,r,a=an,o=an,l,c=Ci){let h={width:e,height:e,depth:1},f=[h,h,h,h,h,h];super(e,e,t,i,s,r,a,o,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},oa=class extends Rn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},dn=class n extends on{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],f=[],u=0,d=0;m("z","y","x",-1,-1,i,t,e,a,r,0),m("z","y","x",1,-1,i,t,-e,a,r,1),m("x","z","y",1,1,e,i,t,s,a,2),m("x","z","y",1,-1,e,i,-t,s,a,3),m("x","y","z",1,-1,e,t,i,s,r,4),m("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new gt(c,3)),this.setAttribute("normal",new gt(h,3)),this.setAttribute("uv",new gt(f,2));function m(y,p,g,b,w,v,_,T,x,S,N){let M=v/x,E=_/S,R=v/2,I=_/2,A=T/2,C=x+1,U=S+1,F=0,k=0,D=new V;for(let z=0;z<U;z++){let G=z*E-I;for(let $=0;$<C;$++){let Z=$*M-R;D[y]=Z*b,D[p]=G*w,D[g]=A,c.push(D.x,D.y,D.z),D[y]=0,D[p]=0,D[g]=T>0?1:-1,h.push(D.x,D.y,D.z),f.push($/x),f.push(1-z/S),F+=1}}for(let z=0;z<S;z++)for(let G=0;G<x;G++){let $=u+G+C*z,Z=u+G+C*(z+1),q=u+(G+1)+C*(z+1),ae=u+(G+1)+C*z;l.push($,Z,ae),l.push(Z,q,ae),k+=6}o.addGroup(d,k,N),d+=k,u+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Qi=class n extends on{constructor(e=1,t=1,i=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],f=[],u=[],d=[],m=0,y=[],p=i/2,g=0;b(),a===!1&&(e>0&&w(!0),t>0&&w(!1)),this.setIndex(h),this.setAttribute("position",new gt(f,3)),this.setAttribute("normal",new gt(u,3)),this.setAttribute("uv",new gt(d,2));function b(){let v=new V,_=new V,T=0,x=(t-e)/i;for(let S=0;S<=r;S++){let N=[],M=S/r,E=M*(t-e)+e;for(let R=0;R<=s;R++){let I=R/s,A=I*l+o,C=Math.sin(A),U=Math.cos(A);_.x=E*C,_.y=-M*i+p,_.z=E*U,f.push(_.x,_.y,_.z),v.set(C,x,U).normalize(),u.push(v.x,v.y,v.z),d.push(I,1-M),N.push(m++)}y.push(N)}for(let S=0;S<s;S++)for(let N=0;N<r;N++){let M=y[N][S],E=y[N+1][S],R=y[N+1][S+1],I=y[N][S+1];(e>0||N!==0)&&(h.push(M,E,I),T+=3),(t>0||N!==r-1)&&(h.push(E,R,I),T+=3)}c.addGroup(g,T,0),g+=T}function w(v){let _=m,T=new he,x=new V,S=0,N=v===!0?e:t,M=v===!0?1:-1;for(let R=1;R<=s;R++)f.push(0,p*M,0),u.push(0,M,0),d.push(.5,.5),m++;let E=m;for(let R=0;R<=s;R++){let A=R/s*l+o,C=Math.cos(A),U=Math.sin(A);x.x=N*U,x.y=p*M,x.z=N*C,f.push(x.x,x.y,x.z),u.push(0,M,0),T.x=C*.5+.5,T.y=U*.5*M+.5,d.push(T.x,T.y),m++}for(let R=0;R<s;R++){let I=_+R,A=E+R;v===!0?h.push(A,A+1,I):h.push(A+1,A,I),S+=3}c.addGroup(g,S,v===!0?1:2),g+=S}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Ms=class n extends Qi{constructor(e=1,t=1,i=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,i,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},la=class n extends on{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};let r=[],a=[];o(s),c(i),h(),this.setAttribute("position",new gt(r,3)),this.setAttribute("normal",new gt(r.slice(),3)),this.setAttribute("uv",new gt(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(b){let w=new V,v=new V,_=new V;for(let T=0;T<t.length;T+=3)d(t[T+0],w),d(t[T+1],v),d(t[T+2],_),l(w,v,_,b)}function l(b,w,v,_){let T=_+1,x=[];for(let S=0;S<=T;S++){x[S]=[];let N=b.clone().lerp(v,S/T),M=w.clone().lerp(v,S/T),E=T-S;for(let R=0;R<=E;R++)R===0&&S===T?x[S][R]=N:x[S][R]=N.clone().lerp(M,R/E)}for(let S=0;S<T;S++)for(let N=0;N<2*(T-S)-1;N++){let M=Math.floor(N/2);N%2===0?(u(x[S][M+1]),u(x[S+1][M]),u(x[S][M])):(u(x[S][M+1]),u(x[S+1][M+1]),u(x[S+1][M]))}}function c(b){let w=new V;for(let v=0;v<r.length;v+=3)w.x=r[v+0],w.y=r[v+1],w.z=r[v+2],w.normalize().multiplyScalar(b),r[v+0]=w.x,r[v+1]=w.y,r[v+2]=w.z}function h(){let b=new V;for(let w=0;w<r.length;w+=3){b.x=r[w+0],b.y=r[w+1],b.z=r[w+2];let v=p(b)/2/Math.PI+.5,_=g(b)/Math.PI+.5;a.push(v,1-_)}m(),f()}function f(){for(let b=0;b<a.length;b+=6){let w=a[b+0],v=a[b+2],_=a[b+4],T=Math.max(w,v,_),x=Math.min(w,v,_);T>.9&&x<.1&&(w<.2&&(a[b+0]+=1),v<.2&&(a[b+2]+=1),_<.2&&(a[b+4]+=1))}}function u(b){r.push(b.x,b.y,b.z)}function d(b,w){let v=b*3;w.x=e[v+0],w.y=e[v+1],w.z=e[v+2]}function m(){let b=new V,w=new V,v=new V,_=new V,T=new he,x=new he,S=new he;for(let N=0,M=0;N<r.length;N+=9,M+=6){b.set(r[N+0],r[N+1],r[N+2]),w.set(r[N+3],r[N+4],r[N+5]),v.set(r[N+6],r[N+7],r[N+8]),T.set(a[M+0],a[M+1]),x.set(a[M+2],a[M+3]),S.set(a[M+4],a[M+5]),_.copy(b).add(w).add(v).divideScalar(3);let E=p(_);y(T,M+0,b,E),y(x,M+2,w,E),y(S,M+4,v,E)}}function y(b,w,v,_){_<0&&b.x===1&&(a[w]=b.x-1),v.x===0&&v.z===0&&(a[w]=_/2/Math.PI+.5)}function p(b){return Math.atan2(b.z,-b.x)}function g(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.detail)}};var kn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){He("Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),s=0,r=i.length,a;t?a=t:a=e*i[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=i[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===a)return s/(r-1);let h=i[s],u=i[s+1]-h,d=(a-h)/u;return(s+d)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new he:new V);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new V,s=[],r=[],a=[],o=new V,l=new mt;for(let d=0;d<=e;d++){let m=d/e;s[d]=this.getTangentAt(m,new V)}r[0]=new V,a[0]=new V;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),f=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),f<=c&&(c=f,i.set(0,1,0)),u<=c&&i.set(0,0,1),o.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(s[d-1],s[d]),o.length()>Number.EPSILON){o.normalize();let m=Math.acos(at(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(o,m))}a[d].crossVectors(s[d],r[d])}if(t===!0){let d=Math.acos(at(r[0].dot(r[e]),-1,1));d/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(d=-d);for(let m=1;m<=e;m++)r[m].applyMatrix4(l.makeRotationAxis(s[m],d*m)),a[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}},ur=class extends kn{constructor(e=0,t=0,i=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new he){let i=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),u=l-this.aX,d=c-this.aY;l=u*h-d*f+this.aX,c=u*f+d*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Jo=class extends ur{constructor(e,t,i,s,r,a){super(e,t,i,i,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function iu(){let n=0,e=0,t=0,i=0;function s(r,a,o,l){n=r,e=o,t=-3*r+3*a-2*o-l,i=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,f){let u=(a-r)/c-(o-r)/(c+h)+(o-a)/h,d=(o-a)/h-(l-a)/(h+f)+(l-o)/f;u*=h,d*=h,s(a,o,u,d)},calc:function(r){let a=r*r,o=a*r;return n+e*r+t*a+i*o}}}var od=new V,ld=new V,xh=new iu,yh=new iu,_h=new iu,jo=class extends kn{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new V){let i=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(ld.subVectors(s[0],s[1]).add(s[0]),c=ld);let f=s[o%r],u=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(od.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=od),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,m=Math.pow(c.distanceToSquared(f),d),y=Math.pow(f.distanceToSquared(u),d),p=Math.pow(u.distanceToSquared(h),d);y<1e-4&&(y=1),m<1e-4&&(m=y),p<1e-4&&(p=y),xh.initNonuniformCatmullRom(c.x,f.x,u.x,h.x,m,y,p),yh.initNonuniformCatmullRom(c.y,f.y,u.y,h.y,m,y,p),_h.initNonuniformCatmullRom(c.z,f.z,u.z,h.z,m,y,p)}else this.curveType==="catmullrom"&&(xh.initCatmullRom(c.x,f.x,u.x,h.x,this.tension),yh.initCatmullRom(c.y,f.y,u.y,h.y,this.tension),_h.initCatmullRom(c.z,f.z,u.z,h.z,this.tension));return i.set(xh.calc(l),yh.calc(l),_h.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new V().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function cd(n,e,t,i,s){let r=(i-e)*.5,a=(s-t)*.5,o=n*n,l=n*o;return(2*t-2*i+r+a)*l+(-3*t+3*i-2*r-a)*o+r*n+t}function zm(n,e){let t=1-n;return t*t*e}function Hm(n,e){return 2*(1-n)*n*e}function Vm(n,e){return n*n*e}function Wr(n,e,t,i){return zm(n,e)+Hm(n,t)+Vm(n,i)}function Gm(n,e){let t=1-n;return t*t*t*e}function Wm(n,e){let t=1-n;return 3*t*t*n*e}function Xm(n,e){return 3*(1-n)*n*n*e}function qm(n,e){return n*n*n*e}function Xr(n,e,t,i,s){return Gm(n,e)+Wm(n,t)+Xm(n,i)+qm(n,s)}var ca=class extends kn{constructor(e=new he,t=new he,i=new he,s=new he){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new he){let i=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(Xr(e,s.x,r.x,a.x,o.x),Xr(e,s.y,r.y,a.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Qo=class extends kn{constructor(e=new V,t=new V,i=new V,s=new V){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new V){let i=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(Xr(e,s.x,r.x,a.x,o.x),Xr(e,s.y,r.y,a.y,o.y),Xr(e,s.z,r.z,a.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ha=class extends kn{constructor(e=new he,t=new he){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new he){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new he){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},el=class extends kn{constructor(e=new V,t=new V){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new V){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new V){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ua=class extends kn{constructor(e=new he,t=new he,i=new he){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new he){let i=t,s=this.v0,r=this.v1,a=this.v2;return i.set(Wr(e,s.x,r.x,a.x),Wr(e,s.y,r.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},tl=class extends kn{constructor(e=new V,t=new V,i=new V){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new V){let i=t,s=this.v0,r=this.v1,a=this.v2;return i.set(Wr(e,s.x,r.x,a.x),Wr(e,s.y,r.y,a.y),Wr(e,s.z,r.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},fa=class extends kn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new he){let i=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],f=s[a>s.length-3?s.length-1:a+2];return i.set(cd(o,l.x,c.x,h.x,f.x),cd(o,l.y,c.y,h.y,f.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new he().fromArray(s))}return this}},wh=Object.freeze({__proto__:null,ArcCurve:Jo,CatmullRomCurve3:jo,CubicBezierCurve:ca,CubicBezierCurve3:Qo,EllipseCurve:ur,LineCurve:ha,LineCurve3:el,QuadraticBezierCurve:ua,QuadraticBezierCurve3:tl,SplineCurve:fa}),nl=class extends kn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new wh[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let a=s[r]-i,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this.cacheLengths=null,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(new wh[s.type]().fromJSON(s))}return this.cacheLengths=null,this}},da=class extends nl{constructor(e){super(),this.type="Path",this.currentPoint=new he,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new ha(this.currentPoint.clone(),new he(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){let r=new ua(this.currentPoint.clone(),new he(e,t),new he(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,a){let o=new ca(this.currentPoint.clone(),new he(e,t),new he(i,s),new he(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new fa(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,i,s,r,a),this}absarc(e,t,i,s,r,a){return this.absellipse(e,t,i,i,s,r,a),this}ellipse(e,t,i,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,i,s,r,a,o,l),this}absellipse(e,t,i,s,r,a,o,l){let c=new ur(e,t,i,s,r,a,o,l);if(this.curves.length>0){let f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},fr=class extends da{constructor(e){super(e),this.uuid=as(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(new da().fromJSON(s))}return this}};function Ym(n,e,t=2){let i=e&&e.length,s=i?e[0]*t:n.length,r=ap(n,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(i&&(r=jm(n,e,r,t)),n.length>80*t){o=n[0],l=n[1];let h=o,f=l;for(let u=t;u<s;u+=t){let d=n[u],m=n[u+1];d<o&&(o=d),m<l&&(l=m),d>h&&(h=d),m>f&&(f=m)}c=Math.max(h-o,f-l),c=c!==0?32767/c:0}return pa(r,a,t,o,l,c,0),a}function ap(n,e,t,i,s){let r;if(s===cg(n,e,t,i)>0)for(let a=e;a<t;a+=i)r=hd(a/i|0,n[a],n[a+1],r);else for(let a=t-i;a>=e;a-=i)r=hd(a/i|0,n[a],n[a+1],r);return r&&dr(r,r.next)&&(ga(r),r=r.next),r}function bs(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(dr(t,t.next)||Ft(t.prev,t,t.next)===0)){if(ga(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function pa(n,e,t,i,s,r,a){if(!n)return;!a&&r&&ig(n,i,s,r);let o=n;for(;n.prev!==n.next;){let l=n.prev,c=n.next;if(r?Zm(n,i,s,r):$m(n)){e.push(l.i,n.i,c.i),ga(n),n=c.next,o=c.next;continue}if(n=c,n===o){a?a===1?(n=Km(bs(n),e),pa(n,e,t,i,s,r,2)):a===2&&Jm(n,e,t,i,s,r):pa(bs(n),e,t,i,s,r,1);break}}}function $m(n){let e=n.prev,t=n,i=n.next;if(Ft(e,t,i)>=0)return!1;let s=e.x,r=t.x,a=i.x,o=e.y,l=t.y,c=i.y,h=Math.min(s,r,a),f=Math.min(o,l,c),u=Math.max(s,r,a),d=Math.max(o,l,c),m=i.next;for(;m!==e;){if(m.x>=h&&m.x<=u&&m.y>=f&&m.y<=d&&Vr(s,o,r,l,a,c,m.x,m.y)&&Ft(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function Zm(n,e,t,i){let s=n.prev,r=n,a=n.next;if(Ft(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,f=r.y,u=a.y,d=Math.min(o,l,c),m=Math.min(h,f,u),y=Math.max(o,l,c),p=Math.max(h,f,u),g=Eh(d,m,e,t,i),b=Eh(y,p,e,t,i),w=n.prevZ,v=n.nextZ;for(;w&&w.z>=g&&v&&v.z<=b;){if(w.x>=d&&w.x<=y&&w.y>=m&&w.y<=p&&w!==s&&w!==a&&Vr(o,h,l,f,c,u,w.x,w.y)&&Ft(w.prev,w,w.next)>=0||(w=w.prevZ,v.x>=d&&v.x<=y&&v.y>=m&&v.y<=p&&v!==s&&v!==a&&Vr(o,h,l,f,c,u,v.x,v.y)&&Ft(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;w&&w.z>=g;){if(w.x>=d&&w.x<=y&&w.y>=m&&w.y<=p&&w!==s&&w!==a&&Vr(o,h,l,f,c,u,w.x,w.y)&&Ft(w.prev,w,w.next)>=0)return!1;w=w.prevZ}for(;v&&v.z<=b;){if(v.x>=d&&v.x<=y&&v.y>=m&&v.y<=p&&v!==s&&v!==a&&Vr(o,h,l,f,c,u,v.x,v.y)&&Ft(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function Km(n,e){let t=n;do{let i=t.prev,s=t.next.next;!dr(i,s)&&lp(i,t,t.next,s)&&ma(i,s)&&ma(s,i)&&(e.push(i.i,t.i,s.i),ga(t),ga(t.next),t=n=s),t=t.next}while(t!==n);return bs(t)}function Jm(n,e,t,i,s,r){let a=n;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&ag(a,o)){let l=cp(a,o);a=bs(a,a.next),l=bs(l,l.next),pa(a,e,t,i,s,r,0),pa(l,e,t,i,s,r,0);return}o=o.next}a=a.next}while(a!==n)}function jm(n,e,t,i){let s=[];for(let r=0,a=e.length;r<a;r++){let o=e[r]*i,l=r<a-1?e[r+1]*i:n.length,c=ap(n,o,l,i,!1);c===c.next&&(c.steiner=!0),s.push(rg(c))}s.sort(Qm);for(let r=0;r<s.length;r++)t=eg(s[r],t);return t}function Qm(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){let i=(n.next.y-n.y)/(n.next.x-n.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=i-s}return t}function eg(n,e){let t=tg(n,e);if(!t)return e;let i=cp(t,n);return bs(i,i.next),bs(t,t.next)}function tg(n,e){let t=e,i=n.x,s=n.y,r=-1/0,a;if(dr(n,t))return t;do{if(dr(n,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let f=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=i&&f>r&&(r=f,a=t.x<t.next.x?t:t.next,f===i))return a}t=t.next}while(t!==e);if(!a)return null;let o=a,l=a.x,c=a.y,h=1/0;t=a;do{if(i>=t.x&&t.x>=l&&i!==t.x&&op(s<c?i:r,s,l,c,s<c?r:i,s,t.x,t.y)){let f=Math.abs(s-t.y)/(i-t.x);ma(t,n)&&(f<h||f===h&&(t.x>a.x||t.x===a.x&&ng(a,t)))&&(a=t,h=f)}t=t.next}while(t!==o);return a}function ng(n,e){return Ft(n.prev,n,e.prev)<0&&Ft(e.next,n,n.next)<0}function ig(n,e,t,i){let s=n;do s.z===0&&(s.z=Eh(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,sg(s)}function sg(n){let e,t=1;do{let i=n,s;n=null;let r=null;for(e=0;i;){e++;let a=i,o=0;for(let c=0;c<t&&(o++,a=a.nextZ,!!a);c++);let l=t;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||i.z<=a.z)?(s=i,i=i.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=a}r.nextZ=null,t*=2}while(e>1);return n}function Eh(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function rg(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function op(n,e,t,i,s,r,a,o){return(s-a)*(e-o)>=(n-a)*(r-o)&&(n-a)*(i-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(i-o)}function Vr(n,e,t,i,s,r,a,o){return!(n===a&&e===o)&&op(n,e,t,i,s,r,a,o)}function ag(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!og(n,e)&&(ma(n,e)&&ma(e,n)&&lg(n,e)&&(Ft(n.prev,n,e.prev)||Ft(n,e.prev,e))||dr(n,e)&&Ft(n.prev,n,n.next)>0&&Ft(e.prev,e,e.next)>0)}function Ft(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function dr(n,e){return n.x===e.x&&n.y===e.y}function lp(n,e,t,i){let s=Po(Ft(n,e,t)),r=Po(Ft(n,e,i)),a=Po(Ft(t,i,n)),o=Po(Ft(t,i,e));return!!(s!==r&&a!==o||s===0&&Co(n,t,e)||r===0&&Co(n,i,e)||a===0&&Co(t,n,i)||o===0&&Co(t,e,i))}function Co(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function Po(n){return n>0?1:n<0?-1:0}function og(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&lp(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function ma(n,e){return Ft(n.prev,n,n.next)<0?Ft(n,e,n.next)>=0&&Ft(n,n.prev,e)>=0:Ft(n,e,n.prev)<0||Ft(n,n.next,e)<0}function lg(n,e){let t=n,i=!1,s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function cp(n,e){let t=Ah(n.i,n.x,n.y),i=Ah(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function hd(n,e,t,i){let s=Ah(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function ga(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Ah(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function cg(n,e,t,i){let s=0;for(let r=e,a=t-i;r<t;r+=i)s+=(n[a]-n[r])*(n[r+1]+n[a+1]),a=r;return s}var Rh=class{static triangulate(e,t,i=2){return Ym(e,t,i)}},vs=class n{static area(e){let t=e.length,i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return n.area(e)<0}static triangulateShape(e,t){let i=[],s=[],r=[];ud(e),fd(i,e);let a=e.length;t.forEach(ud);for(let l=0;l<t.length;l++)s.push(a),a+=t[l].length,fd(i,t[l]);let o=Rh.triangulate(i,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function ud(n){let e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function fd(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}var xa=class n extends on{constructor(e=new fr([new he(.5,.5),new he(-.5,.5),new he(-.5,-.5),new he(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,s=[],r=[];for(let o=0,l=e.length;o<l;o++){let c=e[o];a(c)}this.setAttribute("position",new gt(s,3)),this.setAttribute("uv",new gt(r,2)),this.computeVertexNormals();function a(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,f=t.depth!==void 0?t.depth:1,u=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,m=t.bevelSize!==void 0?t.bevelSize:d-.1,y=t.bevelOffset!==void 0?t.bevelOffset:0,p=t.bevelSegments!==void 0?t.bevelSegments:3,g=t.extrudePath,b=t.UVGenerator!==void 0?t.UVGenerator:hg,w,v=!1,_,T,x,S;if(g){w=g.getSpacedPoints(h),v=!0,u=!1;let re=g.isCatmullRomCurve3?g.closed:!1;_=g.computeFrenetFrames(h,re),T=new V,x=new V,S=new V}u||(p=0,d=0,m=0,y=0);let N=o.extractPoints(c),M=N.shape,E=N.holes;if(!vs.isClockWise(M)){M=M.reverse();for(let re=0,ge=E.length;re<ge;re++){let de=E[re];vs.isClockWise(de)&&(E[re]=de.reverse())}}function I(re){let de=10000000000000001e-36,Ce=re[0];for(let Se=1;Se<=re.length;Se++){let Ze=Se%re.length,Fe=re[Ze],rt=Fe.x-Ce.x,lt=Fe.y-Ce.y,pt=rt*rt+lt*lt,Y=Math.max(Math.abs(Fe.x),Math.abs(Fe.y),Math.abs(Ce.x),Math.abs(Ce.y)),$t=de*Y*Y;if(pt<=$t){re.splice(Ze,1),Se--;continue}Ce=Fe}}I(M),E.forEach(I);let A=E.length,C=M;for(let re=0;re<A;re++){let ge=E[re];M=M.concat(ge)}function U(re,ge,de){return ge||Ge("ExtrudeGeometry: vec does not exist"),re.clone().addScaledVector(ge,de)}let F=M.length;function k(re,ge,de){let Ce,Se,Ze,Fe=re.x-ge.x,rt=re.y-ge.y,lt=de.x-re.x,pt=de.y-re.y,Y=Fe*Fe+rt*rt,$t=Fe*pt-rt*lt;if(Math.abs($t)>Number.EPSILON){let it=Math.sqrt(Y),St=Math.sqrt(lt*lt+pt*pt),ve=ge.x-rt/it,Vt=ge.y+Fe/it,ke=de.x-pt/St,Xe=de.y+lt/St,B=((ke-ve)*pt-(Xe-Vt)*lt)/(Fe*pt-rt*lt);Ce=ve+Fe*B-re.x,Se=Vt+rt*B-re.y;let P=Ce*Ce+Se*Se;if(P<=2)return new he(Ce,Se);Ze=Math.sqrt(P/2)}else{let it=!1;Fe>Number.EPSILON?lt>Number.EPSILON&&(it=!0):Fe<-Number.EPSILON?lt<-Number.EPSILON&&(it=!0):Math.sign(rt)===Math.sign(pt)&&(it=!0),it?(Ce=-rt,Se=Fe,Ze=Math.sqrt(Y)):(Ce=Fe,Se=rt,Ze=Math.sqrt(Y/2))}return new he(Ce/Ze,Se/Ze)}let D=[];for(let re=0,ge=C.length,de=ge-1,Ce=re+1;re<ge;re++,de++,Ce++)de===ge&&(de=0),Ce===ge&&(Ce=0),D[re]=k(C[re],C[de],C[Ce]);let z=[],G,$=D.concat();for(let re=0,ge=A;re<ge;re++){let de=E[re];G=[];for(let Ce=0,Se=de.length,Ze=Se-1,Fe=Ce+1;Ce<Se;Ce++,Ze++,Fe++)Ze===Se&&(Ze=0),Fe===Se&&(Fe=0),G[Ce]=k(de[Ce],de[Ze],de[Fe]);z.push(G),$=$.concat(G)}let Z;if(p===0)Z=vs.triangulateShape(C,E);else{let re=[],ge=[];for(let de=0;de<p;de++){let Ce=de/p,Se=d*Math.cos(Ce*Math.PI/2),Ze=m*Math.sin(Ce*Math.PI/2)+y;for(let Fe=0,rt=C.length;Fe<rt;Fe++){let lt=U(C[Fe],D[Fe],Ze);Le(lt.x,lt.y,-Se),Ce===0&&re.push(lt)}for(let Fe=0,rt=A;Fe<rt;Fe++){let lt=E[Fe];G=z[Fe];let pt=[];for(let Y=0,$t=lt.length;Y<$t;Y++){let it=U(lt[Y],G[Y],Ze);Le(it.x,it.y,-Se),Ce===0&&pt.push(it)}Ce===0&&ge.push(pt)}}Z=vs.triangulateShape(re,ge)}let q=Z.length,ae=m+y;for(let re=0;re<F;re++){let ge=u?U(M[re],$[re],ae):M[re];v?(x.copy(_.normals[0]).multiplyScalar(ge.x),T.copy(_.binormals[0]).multiplyScalar(ge.y),S.copy(w[0]).add(x).add(T),Le(S.x,S.y,S.z)):Le(ge.x,ge.y,0)}for(let re=1;re<=h;re++)for(let ge=0;ge<F;ge++){let de=u?U(M[ge],$[ge],ae):M[ge];v?(x.copy(_.normals[re]).multiplyScalar(de.x),T.copy(_.binormals[re]).multiplyScalar(de.y),S.copy(w[re]).add(x).add(T),Le(S.x,S.y,S.z)):Le(de.x,de.y,f/h*re)}for(let re=p-1;re>=0;re--){let ge=re/p,de=d*Math.cos(ge*Math.PI/2),Ce=m*Math.sin(ge*Math.PI/2)+y;for(let Se=0,Ze=C.length;Se<Ze;Se++){let Fe=U(C[Se],D[Se],Ce);Le(Fe.x,Fe.y,f+de)}for(let Se=0,Ze=E.length;Se<Ze;Se++){let Fe=E[Se];G=z[Se];for(let rt=0,lt=Fe.length;rt<lt;rt++){let pt=U(Fe[rt],G[rt],Ce);v?Le(pt.x,pt.y+w[h-1].y,w[h-1].x+de):Le(pt.x,pt.y,f+de)}}}oe(),Ee();function oe(){let re=s.length/3;if(u){let ge=0,de=F*ge;for(let Ce=0;Ce<q;Ce++){let Se=Z[Ce];bt(Se[2]+de,Se[1]+de,Se[0]+de)}ge=h+p*2,de=F*ge;for(let Ce=0;Ce<q;Ce++){let Se=Z[Ce];bt(Se[0]+de,Se[1]+de,Se[2]+de)}}else{for(let ge=0;ge<q;ge++){let de=Z[ge];bt(de[2],de[1],de[0])}for(let ge=0;ge<q;ge++){let de=Z[ge];bt(de[0]+F*h,de[1]+F*h,de[2]+F*h)}}i.addGroup(re,s.length/3-re,0)}function Ee(){let re=s.length/3,ge=0;fe(C,ge),ge+=C.length;for(let de=0,Ce=E.length;de<Ce;de++){let Se=E[de];fe(Se,ge),ge+=Se.length}i.addGroup(re,s.length/3-re,1)}function fe(re,ge){let de=re.length;for(;--de>=0;){let Ce=de,Se=de-1;Se<0&&(Se=re.length-1);for(let Ze=0,Fe=h+p*2;Ze<Fe;Ze++){let rt=F*Ze,lt=F*(Ze+1),pt=ge+Ce+rt,Y=ge+Se+rt,$t=ge+Se+lt,it=ge+Ce+lt;ze(pt,Y,$t,it)}}}function Le(re,ge,de){l.push(re),l.push(ge),l.push(de)}function bt(re,ge,de){tt(re),tt(ge),tt(de);let Ce=s.length/3,Se=b.generateTopUV(i,s,Ce-3,Ce-2,Ce-1);st(Se[0]),st(Se[1]),st(Se[2])}function ze(re,ge,de,Ce){tt(re),tt(ge),tt(Ce),tt(ge),tt(de),tt(Ce);let Se=s.length/3,Ze=b.generateSideWallUV(i,s,Se-6,Se-3,Se-2,Se-1);st(Ze[0]),st(Ze[1]),st(Ze[3]),st(Ze[1]),st(Ze[2]),st(Ze[3])}function tt(re){s.push(l[re*3+0]),s.push(l[re*3+1]),s.push(l[re*3+2])}function st(re){r.push(re.x),r.push(re.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return ug(t,i,e)}static fromJSON(e,t){let i=[];for(let r=0,a=e.shapes.length;r<a;r++){let o=t[e.shapes[r]];i.push(o)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new wh[s.type]().fromJSON(s)),new n(i,e.options)}},hg={generateTopUV:function(n,e,t,i,s){let r=e[t*3],a=e[t*3+1],o=e[i*3],l=e[i*3+1],c=e[s*3],h=e[s*3+1];return[new he(r,a),new he(o,l),new he(c,h)]},generateSideWallUV:function(n,e,t,i,s,r){let a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[i*3],h=e[i*3+1],f=e[i*3+2],u=e[s*3],d=e[s*3+1],m=e[s*3+2],y=e[r*3],p=e[r*3+1],g=e[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new he(a,1-l),new he(c,1-f),new he(u,1-m),new he(y,1-g)]:[new he(o,1-l),new he(h,1-f),new he(d,1-m),new he(p,1-g)]}};function ug(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){let r=n[i];t.shapes.push(r.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var es=class n extends la{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}};var Ss=class n extends la{constructor(e=1,t=0){let i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},Xn=class n extends on{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(i),l=Math.floor(s),c=o+1,h=l+1,f=e/o,u=t/l,d=[],m=[],y=[],p=[];for(let g=0;g<h;g++){let b=g*u-a;for(let w=0;w<c;w++){let v=w*f-r;m.push(v,-b,0),y.push(0,0,1),p.push(w/o),p.push(1-g/l)}}for(let g=0;g<l;g++)for(let b=0;b<o;b++){let w=b+c*g,v=b+c*(g+1),_=b+1+c*(g+1),T=b+1+c*g;d.push(w,v,T),d.push(v,_,T)}this.setIndex(d),this.setAttribute("position",new gt(m,3)),this.setAttribute("normal",new gt(y,3)),this.setAttribute("uv",new gt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}};var Ts=class n extends on{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(a+o,Math.PI),c=0,h=[],f=new V,u=new V,d=[],m=[],y=[],p=[];for(let g=0;g<=i;g++){let b=[],w=g/i,v=a+w*o,_=e*Math.cos(v),T=Math.sqrt(e*e-_*_),x=0;g===0&&a===0?x=.5/t:g===i&&l===Math.PI&&(x=-.5/t);for(let S=0;S<=t;S++){let N=S/t,M=s+N*r;f.x=-T*Math.cos(M),f.y=_,f.z=T*Math.sin(M),m.push(f.x,f.y,f.z),u.copy(f).normalize(),y.push(u.x,u.y,u.z),p.push(N+x,1-w),b.push(c++)}h.push(b)}for(let g=0;g<i;g++)for(let b=0;b<t;b++){let w=h[g][b+1],v=h[g][b],_=h[g+1][b],T=h[g+1][b+1];(g!==0||a>0)&&d.push(w,v,T),(g!==i-1||l<Math.PI)&&d.push(v,_,T)}this.setIndex(d),this.setAttribute("position",new gt(m,3)),this.setAttribute("normal",new gt(y,3)),this.setAttribute("uv",new gt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var ya=class n extends on{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},i=Math.floor(i),s=Math.floor(s);let l=[],c=[],h=[],f=[],u=new V,d=new V,m=new V;for(let y=0;y<=i;y++){let p=a+y/i*o;for(let g=0;g<=s;g++){let b=g/s*r;d.x=(e+t*Math.cos(p))*Math.cos(b),d.y=(e+t*Math.cos(p))*Math.sin(b),d.z=t*Math.sin(p),c.push(d.x,d.y,d.z),u.x=e*Math.cos(b),u.y=e*Math.sin(b),m.subVectors(d,u).normalize(),h.push(m.x,m.y,m.z),f.push(g/s),f.push(y/i)}}for(let y=1;y<=i;y++)for(let p=1;p<=s;p++){let g=(s+1)*y+p-1,b=(s+1)*(y-1)+p-1,w=(s+1)*(y-1)+p,v=(s+1)*y+p;l.push(g,b,v),l.push(b,w,v)}this.setIndex(l),this.setAttribute("position",new gt(c,3)),this.setAttribute("normal",new gt(h,3)),this.setAttribute("uv",new gt(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};function Is(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];if(dd(s))s.isRenderTargetTexture?(He("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(dd(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][i]=r}else e[t][i]=s.slice();else e[t][i]=s}}return e}function Sn(n){let e={};for(let t=0;t<n.length;t++){let i=Is(n[t]);for(let s in i)e[s]=i[s]}return e}function dd(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function fg(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function su(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ut.workingColorSpace}var hp={clone:Is,merge:Sn},dg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,pg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,qn=class extends Ii{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=dg,this.fragmentShader=pg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Is(e.uniforms),this.uniformsGroups=fg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=t[s.value]||null;break;case"c":this.uniforms[i].value=new Ve().setHex(s.value);break;case"v2":this.uniforms[i].value=new he().fromArray(s.value);break;case"v3":this.uniforms[i].value=new V().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Lt().fromArray(s.value);break;case"m3":this.uniforms[i].value=new qe().fromArray(s.value);break;case"m4":this.uniforms[i].value=new mt().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},il=class extends qn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var bn=class extends Ii{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=rc,this.normalScale=new he(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ni,this.combine=yl,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},sl=class extends Ii{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Gd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},rl=class extends Ii{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Qs(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function Io(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var ts=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];e:{t:{let a;n:{i:if(!(e<s)){for(let o=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=s,s=t[++i],e<s)break t}a=t.length;break n}if(!(e>=r)){let o=t[1];e<o&&(i=2,r=o);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break t}a=i,i=0;break n}break e}for(;i<a;){let o=i+a>>>1;e<t[o]?a=o:i=o+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=i[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},al=class extends ts{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:bh,endingEnd:bh}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Sh:r=e,o=2*t-i;break;case Th:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Sh:a=e,l=2*i-t;break;case Th:a=1,l=i+s[1]-s[0];break;default:a=e-1,l=t}let c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,f=this._offsetNext,u=this._weightPrev,d=this._weightNext,m=(i-t)/(s-t),y=m*m,p=y*m,g=-u*p+2*u*y-u*m,b=(1+u)*p+(-1.5-2*u)*y+(-.5+u)*m+1,w=(-1-d)*p+(1.5+d)*y+.5*m,v=d*p-d*y;for(let _=0;_!==o;++_)r[_]=g*a[h+_]+b*a[c+_]+w*a[l+_]+v*a[f+_];return r}},ol=class extends ts{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(i-t)/(s-t),f=1-h;for(let u=0;u!==o;++u)r[u]=a[c+u]*f+a[l+u]*h;return r}},ll=class extends ts{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},cl=class extends ts{interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this.inTangents,f=this.outTangents;if(!h||!f){let m=(i-t)/(s-t),y=1-m;for(let p=0;p!==o;++p)r[p]=a[c+p]*y+a[l+p]*m;return r}let u=o*2,d=e-1;for(let m=0;m!==o;++m){let y=a[c+m],p=a[l+m],g=d*u+m*2,b=f[g],w=f[g+1],v=e*u+m*2,_=h[v],T=h[v+1],x=gg(i,t,b,_,s);r[m]=up(x,y,w,T,p)}return r}};function up(n,e,t,i,s){let r=1-n;return r*r*r*e+3*r*r*n*t+3*r*n*n*i+n*n*n*s}function mg(n,e,t,i,s){let r=1-n;return 3*r*r*(t-e)+6*r*n*(i-t)+3*n*n*(s-i)}function gg(n,e,t,i,s){let r=(n-e)/(s-e);for(let a=0;a<8;a++){let o=up(r,e,t,i,s)-n;if(Math.abs(o)<1e-10)break;let l=mg(r,e,t,i,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var zn=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Qs(t,this.TimeBufferType),this.values=Qs(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Qs(e.times,Array),values:Qs(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s),Io(e.settings)&&(i.settings={inTangents:Qs(e.settings.inTangents,Array),outTangents:Qs(e.settings.outTangents,Array)})}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new ll(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ol(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new al(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new cl(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case qr:t=this.InterpolantFactoryMethodDiscrete;break;case Wo:t=this.InterpolantFactoryMethodLinear;break;case Do:t=this.InterpolantFactoryMethodSmooth;break;case Mh:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return He("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return qr;case this.InterpolantFactoryMethodLinear:return Wo;case this.InterpolantFactoryMethodSmooth:return Do;case this.InterpolantFactoryMethodBezier:return Mh}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e;Io(this.settings)&&(pd(this.settings.inTangents,e),pd(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e;Io(this.settings)&&(md(this.settings.inTangents,e),md(this.settings.outTangents,e))}return this}trim(e,t){let i=this.times,s=i.length,r=0,a=s-1;for(;r!==s&&i[r]<e;)++r;for(;a!==-1&&i[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Ge("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(Ge("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){Ge("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){Ge("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&_m(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Ge("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Do,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(s)l=!0;else{let f=o*i,u=f-i,d=f+i;for(let m=0;m!==i;++m){let y=t[f+m];if(y!==t[u+m]||y!==t[d+m]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let f=o*i,u=a*i;for(let d=0;d!==i;++d)t[u+d]=t[f+d]}++a}}if(r>0){e[a]=e[r];for(let o=r*i,l=a*i,c=0;c!==i;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,Io(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function pd(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]+=e}function md(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]*=e}zn.prototype.ValueTypeName="";zn.prototype.TimeBufferType=Float32Array;zn.prototype.ValueBufferType=Float32Array;zn.prototype.DefaultInterpolation=Wo;var ns=class extends zn{constructor(e,t,i){super(e,t,i)}};ns.prototype.ValueTypeName="bool";ns.prototype.ValueBufferType=Array;ns.prototype.DefaultInterpolation=qr;ns.prototype.InterpolantFactoryMethodLinear=void 0;ns.prototype.InterpolantFactoryMethodSmooth=void 0;var hl=class extends zn{constructor(e,t,i,s){super(e,t,i,s)}};hl.prototype.ValueTypeName="color";var ul=class extends zn{constructor(e,t,i,s){super(e,t,i,s)}};ul.prototype.ValueTypeName="number";var fl=class extends ts{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-t)/(s-t),c=e*o;for(let h=c+o;c!==h;c+=4)hi.slerpFlat(r,0,a,c-o,a,c,l);return r}},_a=class extends zn{constructor(e,t,i,s){super(e,t,i,s)}InterpolantFactoryMethodLinear(e){return new fl(this.times,this.values,this.getValueSize(),e)}};_a.prototype.ValueTypeName="quaternion";_a.prototype.InterpolantFactoryMethodSmooth=void 0;var is=class extends zn{constructor(e,t,i){super(e,t,i)}};is.prototype.ValueTypeName="string";is.prototype.ValueBufferType=Array;is.prototype.DefaultInterpolation=qr;is.prototype.InterpolantFactoryMethodLinear=void 0;is.prototype.InterpolantFactoryMethodSmooth=void 0;var dl=class extends zn{constructor(e,t,i,s){super(e,t,i,s)}};dl.prototype.ValueTypeName="vector";var pl=class{constructor(e,t,i){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,f){return c.push(h,f),this},this.removeHandler=function(h){let f=c.indexOf(h);return f!==-1&&c.splice(f,2),this},this.getHandler=function(h){for(let f=0,u=c.length;f<u;f+=2){let d=c[f],m=c[f+1];if(d.global&&(d.lastIndex=0),d.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},fp=new pl,ml=class{constructor(e){this.manager=e!==void 0?e:fp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};ml.DEFAULT_MATERIAL_NAME="__DEFAULT";var ws=class extends Gt{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ve(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},di=class extends ws{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Gt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ve(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},vh=new mt,gd=new V,xd=new V,va=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new he(512,512),this.mapType=In,this.map=null,this.mapPass=null,this.matrix=new mt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ji,this._frameExtents=new he(1,1),this._viewportCount=1,this._viewports=[new Lt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;gd.setFromMatrixPosition(e.matrixWorld),t.position.copy(gd),xd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(xd),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,s){vh.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(vh,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===rr||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(vh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Lo=new V,No=new hi,oi=new V,Ma=class extends Gt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new mt,this.projectionMatrix=new mt,this.projectionMatrixInverse=new mt,this.coordinateSystem=Gn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Lo,No,oi),oi.x===1&&oi.y===1&&oi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Lo,No,oi.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(Lo,No,oi),oi.x===1&&oi.y===1&&oi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Lo,No,oi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ki=new V,yd=new he,_d=new he,jt=class extends Ma{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Xo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Zc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Xo*2*Math.atan(Math.tan(Zc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Ki.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ki.x,Ki.y).multiplyScalar(-e/Ki.z),Ki.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ki.x,Ki.y).multiplyScalar(-e/Ki.z)}getViewSize(e,t){return this.getViewBounds(e,yd,_d),t.subVectors(_d,yd)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Zc*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var Ch=class extends va{constructor(){super(new jt(90,1,.5,500)),this.isPointLightShadow=!0}},pr=class extends ws{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Ch}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Es=class extends Ma{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,a=i+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Ph=class extends va{constructor(){super(new Es(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},pi=class extends ws{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Gt.DEFAULT_UP),this.updateMatrix(),this.target=new Gt,this.shadow=new Ph}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},ba=class extends ws{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var er=-90,tr=1,mr=class extends Gt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new jt(er,tr,e,t);s.layers=this.layers,this.add(s);let r=new jt(er,tr,e,t);r.layers=this.layers,this.add(r);let a=new jt(er,tr,e,t);a.layers=this.layers,this.add(a);let o=new jt(er,tr,e,t);o.layers=this.layers,this.add(o);let l=new jt(er,tr,e,t);l.layers=this.layers,this.add(l);let c=new jt(er,tr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===Gn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===rr)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,f=e.getRenderTarget(),u=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let y=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.mipmapsAutoUpdate=y,e.setRenderTarget(i,5,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(f,u,d),e.xr.enabled=m,i.texture.needsPMREMUpdate=!0}},gl=class extends jt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}};var ru="\\[\\]\\.:\\/",xg=new RegExp("["+ru+"]","g"),au="[^"+ru+"]",yg="[^"+ru.replace("\\.","")+"]",_g=/((?:WC+[\/:])*)/.source.replace("WC",au),vg=/(WCOD+)?/.source.replace("WCOD",yg),Mg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",au),bg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",au),Sg=new RegExp("^"+_g+vg+Mg+bg+"$"),Tg=["material","materials","bones","map"],Ih=class{constructor(e,t,i){let s=i||Ct.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Ct=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(xg,"")}static parseTrackName(e){let t=Sg.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);Tg.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=i(o.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){He("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){Ge("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ge("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ge("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ge("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ge("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){Ge("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){Ge("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;Ge("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Ge("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ge("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ct.Composite=Ih;Ct.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ct.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ct.prototype.GetterByBindingType=[Ct.prototype._getValue_direct,Ct.prototype._getValue_array,Ct.prototype._getValue_arrayElement,Ct.prototype._getValue_toArray];Ct.prototype.SetterByBindingTypeAndVersioning=[[Ct.prototype._setValue_direct,Ct.prototype._setValue_direct_setNeedsUpdate,Ct.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ct.prototype._setValue_array,Ct.prototype._setValue_array_setNeedsUpdate,Ct.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ct.prototype._setValue_arrayElement,Ct.prototype._setValue_arrayElement_setNeedsUpdate,Ct.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ct.prototype._setValue_fromArray,Ct.prototype._setValue_fromArray_setNeedsUpdate,Ct.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var L1=new Float32Array(1);var Lh=class{static{this.prototype.isMatrix2=!0}constructor(e,t,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=s,this}};function ou(n,e,t,i){let s=wg(i);switch(t){case Kh:return n*e;case wl:return n*e/s.components*s.byteLength;case El:return n*e/s.components*s.byteLength;case rs:return n*e*2/s.components*s.byteLength;case Al:return n*e*2/s.components*s.byteLength;case Jh:return n*e*3/s.components*s.byteLength;case ri:return n*e*4/s.components*s.byteLength;case Rl:return n*e*4/s.components*s.byteLength;case Ea:case Aa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ra:case Ca:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Pl:case Ll:return Math.max(n,16)*Math.max(e,8)/4;case Cl:case Il:return Math.max(n,8)*Math.max(e,8)/2;case Nl:case Dl:case Fl:case Ol:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ul:case Pa:case Bl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case kl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case zl:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Hl:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Vl:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Gl:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Wl:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Xl:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case ql:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Yl:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case $l:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Zl:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Kl:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Jl:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case jl:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Ql:case ec:case tc:return Math.ceil(n/4)*Math.ceil(e/4)*16;case nc:case ic:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Ia:case sc:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function wg(n){switch(n){case In:case qh:return{byteLength:1,components:1};case _r:case Yh:case si:return{byteLength:2,components:1};case Sl:case Tl:return{byteLength:2,components:4};case ii:case bl:case Yn:return{byteLength:4,components:1};case $h:case Zh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?He("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function Dp(){let n=null,e=!1,t=null,i=null;function s(r,a){i=n.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function Ig(n){let e=new WeakMap;function t(o,l){let c=o.array,h=o.usage,f=c.byteLength,u=n.createBuffer();n.bindBuffer(l,u),n.bufferData(l,c,h),o.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,l,c){let h=l.array,f=l.updateRanges;if(n.bindBuffer(c,o),f.length===0)n.bufferSubData(c,0,h);else{f.sort((d,m)=>d.start-m.start);let u=0;for(let d=1;d<f.length;d++){let m=f[u],y=f[d];y.start<=m.start+m.count+1?m.count=Math.max(m.count,y.start+y.count-m.start):(++u,f[u]=y)}f.length=u+1;for(let d=0,m=f.length;d<m;d++){let y=f[d];n.bufferSubData(c,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Lg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ng=`#ifdef USE_ALPHAHASH
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
#endif`,Dg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ug=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Fg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Og=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Bg=`#ifdef USE_AOMAP
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
#endif`,kg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,zg=`#ifdef USE_BATCHING
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
#endif`,Hg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Vg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Gg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Wg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Xg=`#ifdef USE_IRIDESCENCE
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
#endif`,qg=`#ifdef USE_BUMPMAP
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
#endif`,Yg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,$g=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Zg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Kg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Jg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,jg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Qg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,ex=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,tx=`#define PI 3.141592653589793
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
} // validated`,nx=`vec3 transformedNormal = objectNormal;
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
#endif`,ix=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,sx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,rx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ax=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ox="gl_FragColor = linearToOutputTexel( gl_FragColor );",lx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,cx=`#ifdef USE_ENVMAP
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
#endif`,hx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,ux=`#ifdef USE_ENVMAP
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
#endif`,fx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,dx=`#ifdef USE_ENVMAP
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
#endif`,px=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,mx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,gx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,xx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,yx=`#ifdef USE_GRADIENTMAP
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
}`,_x=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,vx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Mx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,bx=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Sx=`#ifdef USE_ENVMAP
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
#endif`,Tx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,wx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ex=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ax=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Rx=`PhysicalMaterial material;
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
#endif`,Cx=`uniform sampler2D dfgLUT;
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
}`,Px=`
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
#endif`,Ix=`#if defined( RE_IndirectDiffuse )
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
#endif`,Lx=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Nx=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,Dx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ux=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Fx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ox=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Bx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,kx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,zx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Hx=`#if defined( USE_POINTS_UV )
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
#endif`,Vx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Gx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Wx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Xx=`#if defined( USE_MORPHCOLORS )
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
#endif`,qx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Yx=`#ifdef USE_MORPHTARGETS
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
#endif`,$x=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Zx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Kx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Jx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,ey=`#ifdef USE_NORMALMAP
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
#endif`,ty=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ny=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,iy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,sy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ry=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ay=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,oy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ly=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,cy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,hy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,uy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,fy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,dy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,py=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,my=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,gy=`float getShadowMask() {
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
}`,xy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,yy=`#ifdef USE_SKINNING
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
#endif`,_y=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,vy=`#ifdef USE_SKINNING
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
#endif`,My=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,by=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Sy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ty=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,wy=`#ifdef USE_TRANSMISSION
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
#endif`,Ey=`#ifdef USE_TRANSMISSION
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
#endif`,Ay=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ry=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Cy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Py=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Iy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ly=`uniform sampler2D t2D;
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
}`,Ny=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Dy=`uniform float backgroundBlurriness;
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
}`,Uy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Fy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Oy=`#include <common>
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
}`,By=`#if DEPTH_PACKING == 3200
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
}`,ky=`#define DISTANCE
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
}`,zy=`#define DISTANCE
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
}`,Hy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Vy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gy=`uniform float scale;
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
}`,Wy=`uniform vec3 diffuse;
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
}`,Xy=`#include <common>
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
}`,qy=`uniform vec3 diffuse;
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
}`,Yy=`#define LAMBERT
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
}`,$y=`#define LAMBERT
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
}`,Zy=`#define MATCAP
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
}`,Ky=`#define MATCAP
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
}`,Jy=`#define NORMAL
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
}`,jy=`#define NORMAL
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
}`,Qy=`#define PHONG
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
}`,e_=`#define PHONG
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
}`,t_=`#define STANDARD
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
}`,n_=`#define STANDARD
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
}`,i_=`#define TOON
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
}`,s_=`#define TOON
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
}`,r_=`uniform float size;
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
}`,a_=`uniform vec3 diffuse;
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
}`,o_=`#include <common>
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
}`,l_=`uniform vec3 color;
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
}`,c_=`uniform float rotation;
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
}`,h_=`uniform vec3 diffuse;
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
}`,et={alphahash_fragment:Lg,alphahash_pars_fragment:Ng,alphamap_fragment:Dg,alphamap_pars_fragment:Ug,alphatest_fragment:Fg,alphatest_pars_fragment:Og,aomap_fragment:Bg,aomap_pars_fragment:kg,batching_pars_vertex:zg,batching_vertex:Hg,begin_vertex:Vg,beginnormal_vertex:Gg,bsdfs:Wg,iridescence_fragment:Xg,bumpmap_pars_fragment:qg,clipping_planes_fragment:Yg,clipping_planes_pars_fragment:$g,clipping_planes_pars_vertex:Zg,clipping_planes_vertex:Kg,color_fragment:Jg,color_pars_fragment:jg,color_pars_vertex:Qg,color_vertex:ex,common:tx,defaultnormal_vertex:nx,displacementmap_pars_vertex:ix,displacementmap_vertex:sx,emissivemap_fragment:rx,emissivemap_pars_fragment:ax,colorspace_fragment:ox,colorspace_pars_fragment:lx,envmap_fragment:cx,envmap_common_pars_fragment:hx,envmap_pars_fragment:ux,envmap_pars_vertex:fx,envmap_physical_pars_fragment:Sx,envmap_vertex:dx,fog_vertex:px,fog_pars_vertex:mx,fog_fragment:gx,fog_pars_fragment:xx,gradientmap_pars_fragment:yx,lightmap_pars_fragment:_x,lights_lambert_fragment:vx,lights_lambert_pars_fragment:Mx,lights_pars_begin:bx,lights_toon_fragment:Tx,lights_toon_pars_fragment:wx,lights_phong_fragment:Ex,lights_phong_pars_fragment:Ax,lights_physical_fragment:Rx,lights_physical_pars_fragment:Cx,lights_fragment_begin:Px,lights_fragment_maps:Ix,lights_fragment_end:Lx,lightprobes_pars_fragment:Nx,logdepthbuf_fragment:Dx,logdepthbuf_pars_fragment:Ux,logdepthbuf_pars_vertex:Fx,logdepthbuf_vertex:Ox,map_fragment:Bx,map_pars_fragment:kx,map_particle_fragment:zx,map_particle_pars_fragment:Hx,metalnessmap_fragment:Vx,metalnessmap_pars_fragment:Gx,morphinstance_vertex:Wx,morphcolor_vertex:Xx,morphnormal_vertex:qx,morphtarget_pars_vertex:Yx,morphtarget_vertex:$x,normal_fragment_begin:Zx,normal_fragment_maps:Kx,normal_pars_fragment:Jx,normal_pars_vertex:jx,normal_vertex:Qx,normalmap_pars_fragment:ey,clearcoat_normal_fragment_begin:ty,clearcoat_normal_fragment_maps:ny,clearcoat_pars_fragment:iy,iridescence_pars_fragment:sy,opaque_fragment:ry,packing:ay,premultiplied_alpha_fragment:oy,project_vertex:ly,dithering_fragment:cy,dithering_pars_fragment:hy,roughnessmap_fragment:uy,roughnessmap_pars_fragment:fy,shadowmap_pars_fragment:dy,shadowmap_pars_vertex:py,shadowmap_vertex:my,shadowmask_pars_fragment:gy,skinbase_vertex:xy,skinning_pars_vertex:yy,skinning_vertex:_y,skinnormal_vertex:vy,specularmap_fragment:My,specularmap_pars_fragment:by,tonemapping_fragment:Sy,tonemapping_pars_fragment:Ty,transmission_fragment:wy,transmission_pars_fragment:Ey,uv_pars_fragment:Ay,uv_pars_vertex:Ry,uv_vertex:Cy,worldpos_vertex:Py,background_vert:Iy,background_frag:Ly,backgroundCube_vert:Ny,backgroundCube_frag:Dy,cube_vert:Uy,cube_frag:Fy,depth_vert:Oy,depth_frag:By,distance_vert:ky,distance_frag:zy,equirect_vert:Hy,equirect_frag:Vy,linedashed_vert:Gy,linedashed_frag:Wy,meshbasic_vert:Xy,meshbasic_frag:qy,meshlambert_vert:Yy,meshlambert_frag:$y,meshmatcap_vert:Zy,meshmatcap_frag:Ky,meshnormal_vert:Jy,meshnormal_frag:jy,meshphong_vert:Qy,meshphong_frag:e_,meshphysical_vert:t_,meshphysical_frag:n_,meshtoon_vert:i_,meshtoon_frag:s_,points_vert:r_,points_frag:a_,shadow_vert:o_,shadow_frag:l_,sprite_vert:c_,sprite_frag:h_},we={common:{diffuse:{value:new Ve(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qe}},envmap:{envMap:{value:null},envMapRotation:{value:new qe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qe},normalScale:{value:new he(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ve(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Ve(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0},uvTransform:{value:new qe}},sprite:{diffuse:{value:new Ve(16777215)},opacity:{value:1},center:{value:new he(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}}},yi={basic:{uniforms:Sn([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.fog]),vertexShader:et.meshbasic_vert,fragmentShader:et.meshbasic_frag},lambert:{uniforms:Sn([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new Ve(0)},envMapIntensity:{value:1}}]),vertexShader:et.meshlambert_vert,fragmentShader:et.meshlambert_frag},phong:{uniforms:Sn([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new Ve(0)},specular:{value:new Ve(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:et.meshphong_vert,fragmentShader:et.meshphong_frag},standard:{uniforms:Sn([we.common,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.roughnessmap,we.metalnessmap,we.fog,we.lights,{emissive:{value:new Ve(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag},toon:{uniforms:Sn([we.common,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.gradientmap,we.fog,we.lights,{emissive:{value:new Ve(0)}}]),vertexShader:et.meshtoon_vert,fragmentShader:et.meshtoon_frag},matcap:{uniforms:Sn([we.common,we.bumpmap,we.normalmap,we.displacementmap,we.fog,{matcap:{value:null}}]),vertexShader:et.meshmatcap_vert,fragmentShader:et.meshmatcap_frag},points:{uniforms:Sn([we.points,we.fog]),vertexShader:et.points_vert,fragmentShader:et.points_frag},dashed:{uniforms:Sn([we.common,we.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:et.linedashed_vert,fragmentShader:et.linedashed_frag},depth:{uniforms:Sn([we.common,we.displacementmap]),vertexShader:et.depth_vert,fragmentShader:et.depth_frag},normal:{uniforms:Sn([we.common,we.bumpmap,we.normalmap,we.displacementmap,{opacity:{value:1}}]),vertexShader:et.meshnormal_vert,fragmentShader:et.meshnormal_frag},sprite:{uniforms:Sn([we.sprite,we.fog]),vertexShader:et.sprite_vert,fragmentShader:et.sprite_frag},background:{uniforms:{uvTransform:{value:new qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:et.background_vert,fragmentShader:et.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qe}},vertexShader:et.backgroundCube_vert,fragmentShader:et.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:et.cube_vert,fragmentShader:et.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:et.equirect_vert,fragmentShader:et.equirect_frag},distance:{uniforms:Sn([we.common,we.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:et.distance_vert,fragmentShader:et.distance_frag},shadow:{uniforms:Sn([we.lights,we.fog,{color:{value:new Ve(0)},opacity:{value:1}}]),vertexShader:et.shadow_vert,fragmentShader:et.shadow_frag}};yi.physical={uniforms:Sn([yi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qe},clearcoatNormalScale:{value:new he(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qe},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new qe},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qe},sheen:{value:0},sheenColor:{value:new Ve(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qe},transmissionSamplerSize:{value:new he},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qe},attenuationDistance:{value:0},attenuationColor:{value:new Ve(0)},specularColor:{value:new Ve(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qe},anisotropyVector:{value:new he},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qe}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag};var oc={r:0,b:0,g:0},u_=new mt,Up=new qe;Up.set(-1,0,0,0,1,0,0,0,1);function f_(n,e,t,i,s,r){let a=new Ve(0),o=s===!0?0:1,l,c,h=null,f=0,u=null;function d(b){let w=b.isScene===!0?b.background:null;if(w&&w.isTexture){let v=b.backgroundBlurriness>0;w=e.get(w,v)}return w}function m(b){let w=!1,v=d(b);v===null?p(a,o):v&&v.isColor&&(p(v,1),w=!0);let _=n.xr.getEnvironmentBlendMode();_==="additive"?t.buffers.color.setClear(0,0,0,1,r):_==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||w)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function y(b,w){let v=d(w);v&&v.isCubeTexture?(c===void 0&&(c=new Ke(new dn(1,1,1),new qn({name:"BackgroundCubeMaterial",uniforms:Is(yi.backgroundCube.uniforms),vertexShader:yi.backgroundCube.vertexShader,fragmentShader:yi.backgroundCube.fragmentShader,side:pn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(_,T,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(u_.makeRotationFromEuler(w.backgroundRotation)).transpose(),v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Up),c.material.toneMapped=ut.getTransfer(v.colorSpace)!==_t,(h!==v||f!==v.version||u!==n.toneMapping)&&(c.material.needsUpdate=!0,h=v,f=v.version,u=n.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new Ke(new Xn(2,2),new qn({name:"BackgroundMaterial",uniforms:Is(yi.background.uniforms),vertexShader:yi.background.vertexShader,fragmentShader:yi.background.fragmentShader,side:ss,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=ut.getTransfer(v.colorSpace)!==_t,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||f!==v.version||u!==n.toneMapping)&&(l.material.needsUpdate=!0,h=v,f=v.version,u=n.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function p(b,w){b.getRGB(oc,su(n)),t.buffers.color.setClear(oc.r,oc.g,oc.b,w,r)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(b,w=1){a.set(b),o=w,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(b){o=b,p(a,o)},render:m,addToRenderList:y,dispose:g}}function d_(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=u(null),r=s,a=!1;function o(E,R,I,A,C){let U=!1,F=f(E,A,I,R);r!==F&&(r=F,c(r.object)),U=d(E,A,I,C),U&&m(E,A,I,C),C!==null&&e.update(C,n.ELEMENT_ARRAY_BUFFER),(U||a)&&(a=!1,v(E,R,I,A),C!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(C).buffer))}function l(){return n.createVertexArray()}function c(E){return n.bindVertexArray(E)}function h(E){return n.deleteVertexArray(E)}function f(E,R,I,A){let C=A.wireframe===!0,U=i[R.id];U===void 0&&(U={},i[R.id]=U);let F=E.isInstancedMesh===!0?E.id:0,k=U[F];k===void 0&&(k={},U[F]=k);let D=k[I.id];D===void 0&&(D={},k[I.id]=D);let z=D[C];return z===void 0&&(z=u(l()),D[C]=z),z}function u(E){let R=[],I=[],A=[];for(let C=0;C<t;C++)R[C]=0,I[C]=0,A[C]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:I,attributeDivisors:A,object:E,attributes:{},index:null}}function d(E,R,I,A){let C=r.attributes,U=R.attributes,F=0,k=I.getAttributes();for(let D in k)if(k[D].location>=0){let G=C[D],$=U[D];if($===void 0&&(D==="instanceMatrix"&&E.instanceMatrix&&($=E.instanceMatrix),D==="instanceColor"&&E.instanceColor&&($=E.instanceColor)),G===void 0||G.attribute!==$||$&&G.data!==$.data)return!0;F++}return r.attributesNum!==F||r.index!==A}function m(E,R,I,A){let C={},U=R.attributes,F=0,k=I.getAttributes();for(let D in k)if(k[D].location>=0){let G=U[D];G===void 0&&(D==="instanceMatrix"&&E.instanceMatrix&&(G=E.instanceMatrix),D==="instanceColor"&&E.instanceColor&&(G=E.instanceColor));let $={};$.attribute=G,G&&G.data&&($.data=G.data),C[D]=$,F++}r.attributes=C,r.attributesNum=F,r.index=A}function y(){let E=r.newAttributes;for(let R=0,I=E.length;R<I;R++)E[R]=0}function p(E){g(E,0)}function g(E,R){let I=r.newAttributes,A=r.enabledAttributes,C=r.attributeDivisors;I[E]=1,A[E]===0&&(n.enableVertexAttribArray(E),A[E]=1),C[E]!==R&&(n.vertexAttribDivisor(E,R),C[E]=R)}function b(){let E=r.newAttributes,R=r.enabledAttributes;for(let I=0,A=R.length;I<A;I++)R[I]!==E[I]&&(n.disableVertexAttribArray(I),R[I]=0)}function w(E,R,I,A,C,U,F){F===!0?n.vertexAttribIPointer(E,R,I,C,U):n.vertexAttribPointer(E,R,I,A,C,U)}function v(E,R,I,A){y();let C=A.attributes,U=I.getAttributes(),F=R.defaultAttributeValues;for(let k in U){let D=U[k];if(D.location>=0){let z=C[k];if(z===void 0&&(k==="instanceMatrix"&&E.instanceMatrix&&(z=E.instanceMatrix),k==="instanceColor"&&E.instanceColor&&(z=E.instanceColor)),z!==void 0){let G=z.normalized,$=z.itemSize,Z=e.get(z);if(Z===void 0)continue;let q=Z.buffer,ae=Z.type,oe=Z.bytesPerElement,Ee=ae===n.INT||ae===n.UNSIGNED_INT||z.gpuType===bl;if(z.isInterleavedBufferAttribute){let fe=z.data,Le=fe.isInterleavedBuffer===!0?fe.stride:fe.itemSize,bt=z.offset;if(fe.isInstancedInterleavedBuffer||fe.isInstancedBufferAttribute){for(let ze=0;ze<D.locationSize;ze++)g(D.location+ze,fe.meshPerAttribute);E.isInstancedMesh!==!0&&A._maxInstanceCount===void 0&&(A._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let ze=0;ze<D.locationSize;ze++)p(D.location+ze);n.bindBuffer(n.ARRAY_BUFFER,q);for(let ze=0;ze<D.locationSize;ze++)w(D.location+ze,$/D.locationSize,ae,G,Le*oe,(bt+$/D.locationSize*ze)*oe,Ee)}else{if(z.isInstancedBufferAttribute){for(let fe=0;fe<D.locationSize;fe++)g(D.location+fe,z.meshPerAttribute);E.isInstancedMesh!==!0&&A._maxInstanceCount===void 0&&(A._maxInstanceCount=z.meshPerAttribute*z.count)}else for(let fe=0;fe<D.locationSize;fe++)p(D.location+fe);n.bindBuffer(n.ARRAY_BUFFER,q);for(let fe=0;fe<D.locationSize;fe++)w(D.location+fe,$/D.locationSize,ae,G,$*oe,$/D.locationSize*fe*oe,Ee)}}else if(F!==void 0){let G=F[k];if(G!==void 0)switch(G.length){case 2:n.vertexAttrib2fv(D.location,G);break;case 3:n.vertexAttrib3fv(D.location,G);break;case 4:n.vertexAttrib4fv(D.location,G);break;default:n.vertexAttrib1fv(D.location,G)}}}}b()}function _(){N();for(let E in i){let R=i[E];for(let I in R){let A=R[I];for(let C in A){let U=A[C];for(let F in U)h(U[F].object),delete U[F];delete A[C]}}delete i[E]}}function T(E){if(i[E.id]===void 0)return;let R=i[E.id];for(let I in R){let A=R[I];for(let C in A){let U=A[C];for(let F in U)h(U[F].object),delete U[F];delete A[C]}}delete i[E.id]}function x(E){for(let R in i){let I=i[R];for(let A in I){let C=I[A];if(C[E.id]===void 0)continue;let U=C[E.id];for(let F in U)h(U[F].object),delete U[F];delete C[E.id]}}}function S(E){for(let R in i){let I=i[R],A=E.isInstancedMesh===!0?E.id:0,C=I[A];if(C!==void 0){for(let U in C){let F=C[U];for(let k in F)h(F[k].object),delete F[k];delete C[U]}delete I[A],Object.keys(I).length===0&&delete i[R]}}}function N(){M(),a=!0,r!==s&&(r=s,c(r.object))}function M(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:N,resetDefaultState:M,dispose:_,releaseStatesOfGeometry:T,releaseStatesOfObject:S,releaseStatesOfProgram:x,initAttributes:y,enableAttribute:p,disableUnusedAttributes:b}}function p_(n,e,t){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),t.update(c,i,1)}function a(l,c,h){h!==0&&(n.drawArraysInstanced(i,l,c,h),t.update(c,i,h))}function o(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let u=0;for(let d=0;d<h;d++)u+=c[d];t.update(u,i,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function m_(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let x=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(x){return!(x!==ri&&i.convert(x)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(x){let S=x===si&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(x!==In&&x!==Yn&&!S&&i.convert(x)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(x){if(x==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(He("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),u=t.logarithmicDepthBuffer===!0&&f===!1;t.reversedDepthBuffer===!0&&f===!1&&He("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&f===!0&&He("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),g=n.getParameter(n.MAX_VERTEX_ATTRIBS),b=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),w=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),_=n.getParameter(n.MAX_SAMPLES),T=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:m,maxTextureSize:y,maxCubemapSize:p,maxAttributes:g,maxVertexUniforms:b,maxVaryings:w,maxFragmentUniforms:v,maxSamples:_,samples:T}}function g_(n){let e=this,t=null,i=0,s=!1,r=!1,a=new ti,o=new qe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){let d=f.length!==0||u||i!==0||s;return s=u,i=f.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,u){t=h(f,u,0)},this.setState=function(f,u,d){let m=f.clippingPlanes,y=f.clipIntersection,p=f.clipShadows,g=n.get(f);if(!s||m===null||m.length===0||r&&!p)r?h(null):c();else{let b=r?0:i,w=b*4,v=g.clippingState||null;l.value=v,v=h(m,u,w,d);for(let _=0;_!==w;++_)v[_]=t[_];g.clippingState=v,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(f,u,d,m){let y=f!==null?f.length:0,p=null;if(y!==0){if(p=l.value,m!==!0||p===null){let g=d+y*4,b=u.matrixWorldInverse;o.getNormalMatrix(b),(p===null||p.length<g)&&(p=new Float32Array(g));for(let w=0,v=d;w!==y;++w,v+=4)a.copy(f[w]).applyMatrix4(b,o),a.normal.toArray(p,v),p[v+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,p}}var Da=class extends Bn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new ra(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new dn(5,5,5),r=new qn({name:"CubemapFromEquirect",uniforms:Is(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:pn,blending:As});r.uniforms.tEquirect.value=t;let a=new Ke(s,r),o=t.minFilter;return t.minFilter===Di&&(t.minFilter=An),new mr(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}},dp=256,x_=3,y_=20,Fp=256,Op=16,__=3,v_=new V,M_=new Ve,cc=class n{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new mr(1,10,null),this._boxMesh=new Ke(new dn(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){let{size:a=256,position:o=v_}=r,l=this._renderer;this._setSize(a);let c=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);let f=l.autoClear,u=l.autoClearColor,d=l.autoClearDepth,m=l.autoClearStencil,y=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,y===null&&(e.background=l.getClearColor(M_));let p=new mr(i,s,h);return p.position.copy(o),p.update(l,e),l.autoClear=f,l.autoClearColor=u,l.autoClearDepth=d,l.autoClearStencil=m,e.background=y,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=gp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=mp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(dp,tp(e))}_fromTexture(e,t){e.mapping===Cs||e.mapping===yr?this._setSize(e.image.length===0?dp:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let i=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(i),i}_allocateTarget(){let e=this._cubeSize,t=pp(e,!1,!1),i=Math.log2(e)-x_;for(let s=0;s<=i;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==t||e&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=pp(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,i){let s=this._boxMesh,r=this._cubeCamera;s.material=i,r.renderTarget=e,r.activeMipmapLevel=t;let a=e.width>>t;e.viewport.set(0,0,a,a),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===Cs||e.mapping===yr?(this._cubemapMaterial===null&&(this._cubemapMaterial=gp()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=mp()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=b_(),this._integrationMaterial=S_());let t=this._cubeSize,i=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/Op);for(let a=0;a<=i;a++){let o=n.lodToRoughness(a,i);if(a>i-__)r.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{let l=o>0?Math.log2(t)+.5*Math.log2(6/(Fp*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=l,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=T_());let i=this._blurMaterial,s=i.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,i),s.envMap.value=e.texture,this._renderCube(r,0,i)}};function pp(n,e,t){return new Da(n,{minFilter:Di,generateMipmaps:e,type:si,colorSpace:Yr,depthBuffer:t})}function Fa(n,e,t){return new qn({name:n,uniforms:e,vertexShader:et.cube_vert,fragmentShader:t,side:pn,blending:As,depthTest:!1,depthWrite:!1})}function b_(){return Fa("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Fp}u

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
	`)}function S_(){return Fa("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Op}},`

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
	`)}function T_(){return Fa("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${y_}
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
	`)}function mp(){return Fa("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function gp(){return Fa("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function w_(n){let e=new WeakMap,t=new WeakMap,i=null;function s(u,d=!1){return u==null?null:d?a(u):r(u)}function r(u){if(u&&u.isTexture){let d=u.mapping;if(d===_l||d===vl)if(e.has(u)){let m=e.get(u).texture;return o(m,u.mapping)}else{let m=u.image;if(m&&m.height>0){let y=new Da(m.height);return y.fromEquirectangularTexture(n,u),e.set(u,y),u.addEventListener("dispose",c),o(y.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture&&u.isPMREMTexture!==!0){let d=u.mapping,m=d===_l||d===vl,y=d===Cs||d===yr;if(m||y){let p=t.get(u),g=p!==void 0?p.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==g)return i===null&&(i=new cc(n)),p=m?i.fromEquirectangular(u,p):i.fromCubemap(u,p),p.texture.pmremVersion=u.pmremVersion,t.set(u,p),p.texture;if(p!==void 0)return p.texture;{let b=u.image;return m&&b&&b.height>0||y&&b&&l(b)?(i===null&&(i=new cc(n)),p=m?i.fromEquirectangular(u):i.fromCubemap(u),p.texture.pmremVersion=u.pmremVersion,t.set(u,p),u.addEventListener("dispose",h),p.texture):null}}}return u}function o(u,d){return d===_l?u.mapping=Cs:d===vl&&(u.mapping=yr),u}function l(u){let d=0,m=6;for(let y=0;y<m;y++)u[y]!==void 0&&d++;return d===m}function c(u){let d=u.target;d.removeEventListener("dispose",c);let m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function h(u){let d=u.target;d.removeEventListener("dispose",h);let m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function f(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:f}}function E_(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&Gr("WebGLRenderer: "+i+" extension not supported."),s}}}function A_(n,e,t,i){let s={},r=new WeakMap,a=new FinalizationRegistry(m=>delete s[m]);function o(m){l(m.target)}function l(m){m.index!==null&&e.remove(m.index);for(let p in m.attributes)e.remove(m.attributes[p]);m.removeEventListener("dispose",o),delete s[m.id],a.unregister(m);let y=r.get(m);y&&(e.remove(y),r.delete(m)),i.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,t.memory.geometries--}function c(m,y){return s[y.id]!==void 0||(y.addEventListener("dispose",o),s[y.id]=new WeakRef(y),a.register(y,y.id,y),t.memory.geometries++),y}function h(m){let y=m.attributes;for(let p in y)e.update(y[p],n.ARRAY_BUFFER)}function f(m){let y=m.index,p=m.attributes.position,g=0;if(p===void 0)return;let b=y!==null?y.array.length:p.array.length/3-1,w=p.count>=65535?ta:ea,v=new w(Math.ceil(b/3)*6,1),_=v.array;if(y!==null){let x=y.array;g=y.version;for(let S=0,N=0;S<b;S+=3){let M=x[S+0],E=x[S+1],R=x[S+2];_[N++]=M,_[N++]=E,_[N++]=E,_[N++]=R,_[N++]=R,_[N++]=M}}else{g=p.version;for(let x=0,S=0;x<b;x+=3){let N=x+0,M=x+1,E=x+2;_[S++]=N,_[S++]=M,_[S++]=M,_[S++]=E,_[S++]=E,_[S++]=N}}v.version=g;let T=r.get(m);T&&e.remove(T),r.set(m,v)}function u(m){let y=r.get(m);if(y){let p=m.index;p!==null&&y.version<p.version&&f(m)}else f(m);return r.get(m)}function d(){for(let m in s){let y=s[m].deref();y!==void 0&&l(y)}}return{get:c,update:h,getWireframeAttribute:u,dispose:d}}function R_(n,e,t){let i;function s(f){i=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,u){n.drawElements(i,u,r,f*a),t.update(u,i,1)}function c(f,u,d){d!==0&&(n.drawElementsInstanced(i,u,r,f*a,d),t.update(u,i,d))}function h(f,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,r,f,0,d);let y=0;for(let p=0;p<d;p++)y+=u[p];t.update(y,i,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function C_(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(r/3);break;case n.LINES:t.lines+=o*(r/2);break;case n.LINE_STRIP:t.lines+=o*(r-1);break;case n.LINE_LOOP:t.lines+=o*r;break;case n.POINTS:t.points+=o*r;break;default:Ge("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function P_(n,e,t){let i=new WeakMap,s=new Lt;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0,u=i.get(o);if(u===void 0||u.count!==f){let N=function(){x.dispose(),i.delete(o),o.removeEventListener("dispose",N)};u!==void 0&&u.texture.dispose();let d=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,y=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],g=o.morphAttributes.normal||[],b=o.morphAttributes.color||[],w=0;d===!0&&(w=1),m===!0&&(w=2),y===!0&&(w=3);let v=o.attributes.position.count*w,_=1;v>e.maxTextureSize&&(_=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let T=new Float32Array(v*_*4*f),x=new Jr(T,v,_,f);x.type=Yn,x.needsUpdate=!0;let S=w*4;for(let M=0;M<f;M++){let E=p[M],R=g[M],I=b[M],A=v*_*4*M;for(let C=0;C<E.count;C++){let U=C*S;d===!0&&(s.fromBufferAttribute(E,C),T[A+U+0]=s.x,T[A+U+1]=s.y,T[A+U+2]=s.z,T[A+U+3]=0),m===!0&&(s.fromBufferAttribute(R,C),T[A+U+4]=s.x,T[A+U+5]=s.y,T[A+U+6]=s.z,T[A+U+7]=0),y===!0&&(s.fromBufferAttribute(I,C),T[A+U+8]=s.x,T[A+U+9]=s.y,T[A+U+10]=s.z,T[A+U+11]=I.itemSize===4?s.w:1)}}u={count:f,texture:x,size:new he(v,_)},i.set(o,u),o.addEventListener("dispose",N)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let d=0;for(let y=0;y<c.length;y++)d+=c[y];let m=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(n,"morphTargetBaseInfluence",m),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:r}}function I_(n,e,t,i,s){let r=new WeakMap;function a(c){let h=s.render.frame,f=c.geometry,u=e.get(c,f);if(r.get(u)!==h&&(e.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let d=c.skeleton;r.get(d)!==h&&(d.update(),r.set(d,h))}return u}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}var L_={[kh]:"LINEAR_TONE_MAPPING",[zh]:"REINHARD_TONE_MAPPING",[Hh]:"CINEON_TONE_MAPPING",[Ta]:"ACES_FILMIC_TONE_MAPPING",[Gh]:"AGX_TONE_MAPPING",[Wh]:"NEUTRAL_TONE_MAPPING",[Vh]:"CUSTOM_TONE_MAPPING"};function N_(n,e,t,i,s,r){let a=new Bn(e,t,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=null,h=new on;h.setAttribute("position",new gt([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new gt([0,2,0,0,2,0],2));let f=new il({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new Ke(h,f),d=new Es(-1,1,1,-1,0,1),m=null,y=null,p=!1,g,b=null,w=[],v=!1;this.setSize=function(_,T){a.setSize(_,T),o!==null&&o.setSize(_,T),l!==null&&l.setSize(_,T);for(let x=0;x<w.length;x++){let S=w[x];S.setSize&&S.setSize(_,T)}},this.setEffects=function(_){w=_,v=w.length>0&&w[0].isRenderPass===!0;let T=a.width,x=a.height;w.length>0&&o===null&&(o=new Bn(T,x,{type:si,depthBuffer:!1,stencilBuffer:!1}),l=new Bn(T,x,{type:si,depthBuffer:!1,stencilBuffer:!1}));let S=s===!0&&w.some(N=>N.needsDepthTexture===!0);S!==(a.depthTexture!==null)&&(S===!0&&c===null&&(c=new Ni(T,x),r===!0&&(c.format=Ui,c.type=Ps)),a.dispose(),a.depthTexture=S?c:null,a.resolveDepthBuffer=S,a.storeMultisampledDepthBuffer=S);for(let N=0;N<w.length;N++){let M=w[N];M.setSize&&M.setSize(T,x),S&&M.needsDepthTexture===!0&&M.setDepthTexture&&M.setDepthTexture(c)}},this.begin=function(_,T){if(p||_.toneMapping===gi&&w.length===0)return!1;if(b=T,T!==null){let x=T.width,S=T.height;(a.width!==x||a.height!==S)&&this.setSize(x,S)}return v===!1&&_.setRenderTarget(a),g=_.toneMapping,_.toneMapping=gi,!0},this.hasRenderPass=function(){return v},this.end=function(_,T){_.toneMapping=g,p=!0;let x=a,S=o;for(let N=0;N<w.length;N++){let M=w[N];M.enabled!==!1&&(M.render(_,S,x,T),M.needsSwap!==!1&&(x=S,S=S===o?l:o))}if(m!==_.outputColorSpace||y!==_.toneMapping){m=_.outputColorSpace,y=_.toneMapping,f.defines={},ut.getTransfer(m)===_t&&(f.defines.SRGB_TRANSFER="");let N=L_[y];N&&(f.defines[N]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=x.texture,_.setRenderTarget(b),_.render(u,d),b=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),h.dispose(),f.dispose()}}var Bp=new Rn,kp=new Ni(1,1),zp=new aa(1),Hp=new Jr,Vp=new $o,Gp=new ra,xp=[],yp=[],_p=new Float32Array(16),vp=new Float32Array(9),Mp=new Float32Array(4);function br(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=xp[s];if(r===void 0&&(r=new Float32Array(s),xp[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(r,o)}return r}function Qt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function en(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function hc(n,e){let t=yp[e];t===void 0&&(t=new Int32Array(e),yp[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function D_(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function U_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qt(t,e))return;n.uniform2fv(this.addr,e),en(t,e)}}function F_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Qt(t,e))return;n.uniform3fv(this.addr,e),en(t,e)}}function O_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qt(t,e))return;n.uniform4fv(this.addr,e),en(t,e)}}function B_(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Qt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),en(t,e)}else{if(Qt(t,i))return;Mp.set(i),n.uniformMatrix2fv(this.addr,!1,Mp),en(t,i)}}function k_(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Qt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),en(t,e)}else{if(Qt(t,i))return;vp.set(i),n.uniformMatrix3fv(this.addr,!1,vp),en(t,i)}}function z_(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Qt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),en(t,e)}else{if(Qt(t,i))return;_p.set(i),n.uniformMatrix4fv(this.addr,!1,_p),en(t,i)}}function H_(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function V_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qt(t,e))return;n.uniform2iv(this.addr,e),en(t,e)}}function G_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Qt(t,e))return;n.uniform3iv(this.addr,e),en(t,e)}}function W_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qt(t,e))return;n.uniform4iv(this.addr,e),en(t,e)}}function X_(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function q_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qt(t,e))return;n.uniform2uiv(this.addr,e),en(t,e)}}function Y_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Qt(t,e))return;n.uniform3uiv(this.addr,e),en(t,e)}}function $_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qt(t,e))return;n.uniform4uiv(this.addr,e),en(t,e)}}function uc(n){return n.version===0&&(n.compareFunction=eu,n.needsUpdate=!0),n}function Z_(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?r=uc(kp):r=Bp,t.setTexture2D(e||r,s)}function K_(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Vp,s)}function J_(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_CUBE_SHADOW?r=uc(zp):r=Gp,t.setTextureCube(e||r,s)}function j_(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Hp,s)}function Q_(n){switch(n){case 5126:return D_;case 35664:return U_;case 35665:return F_;case 35666:return O_;case 35674:return B_;case 35675:return k_;case 35676:return z_;case 5124:case 35670:return H_;case 35667:case 35671:return V_;case 35668:case 35672:return G_;case 35669:case 35673:return W_;case 5125:return X_;case 36294:return q_;case 36295:return Y_;case 36296:return $_;case 35678:case 36198:case 36298:case 36306:case 35682:return Z_;case 35679:case 36299:case 36307:return K_;case 35680:case 36300:case 36308:case 36293:return J_;case 36289:case 36303:case 36311:case 36292:return j_}}function ev(n,e){n.uniform1fv(this.addr,e)}function tv(n,e){let t=br(e,this.size,2);n.uniform2fv(this.addr,t)}function nv(n,e){let t=br(e,this.size,3);n.uniform3fv(this.addr,t)}function iv(n,e){let t=br(e,this.size,4);n.uniform4fv(this.addr,t)}function sv(n,e){let t=br(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function rv(n,e){let t=br(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function av(n,e){let t=br(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function ov(n,e){n.uniform1iv(this.addr,e)}function lv(n,e){n.uniform2iv(this.addr,e)}function cv(n,e){n.uniform3iv(this.addr,e)}function hv(n,e){n.uniform4iv(this.addr,e)}function uv(n,e){n.uniform1uiv(this.addr,e)}function fv(n,e){n.uniform2uiv(this.addr,e)}function dv(n,e){n.uniform3uiv(this.addr,e)}function pv(n,e){n.uniform4uiv(this.addr,e)}function mv(n,e,t){let i=this.cache,s=e.length,r=hc(t,s);Qt(i,r)||(n.uniform1iv(this.addr,r),en(i,r));let a;this.type===n.SAMPLER_2D_SHADOW?a=uc(kp):a=Bp;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function gv(n,e,t){let i=this.cache,s=e.length,r=hc(t,s);Qt(i,r)||(n.uniform1iv(this.addr,r),en(i,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Vp,r[a])}function xv(n,e,t){let i=this.cache,s=e.length,r=hc(t,s);Qt(i,r)||(n.uniform1iv(this.addr,r),en(i,r));let a;this.type===n.SAMPLER_CUBE_SHADOW?a=uc(zp):a=Gp;for(let o=0;o!==s;++o)t.setTextureCube(e[o]||a,r[o])}function yv(n,e,t){let i=this.cache,s=e.length,r=hc(t,s);Qt(i,r)||(n.uniform1iv(this.addr,r),en(i,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Hp,r[a])}function _v(n){switch(n){case 5126:return ev;case 35664:return tv;case 35665:return nv;case 35666:return iv;case 35674:return sv;case 35675:return rv;case 35676:return av;case 5124:case 35670:return ov;case 35667:case 35671:return lv;case 35668:case 35672:return cv;case 35669:case 35673:return hv;case 5125:return uv;case 36294:return fv;case 36295:return dv;case 36296:return pv;case 35678:case 36198:case 36298:case 36306:case 35682:return mv;case 35679:case 36299:case 36307:return gv;case 35680:case 36300:case 36308:case 36293:return xv;case 36289:case 36303:case 36311:case 36292:return yv}}var hu=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Q_(t.type)}},uu=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=_v(t.type)}},fu=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],i)}}},lu=/(\w+)(\])?(\[|\.)?/g;function bp(n,e){n.seq.push(e),n.map[e.id]=e}function vv(n,e,t){let i=n.name,s=i.length;for(lu.lastIndex=0;;){let r=lu.exec(i),a=lu.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){bp(t,c===void 0?new hu(o,n,e):new uu(o,n,e));break}else{let f=t.map[o];f===void 0&&(f=new fu(o),bp(t,f)),t=f}}}var Mr=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){let o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);vv(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&i.push(a)}return i}};function Sp(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var Mv=37297,bv=0;function Sv(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}var Tp=new qe;function Tv(n){ut._getMatrix(Tp,ut.workingColorSpace,n);let e=`mat3( ${Tp.elements.map(t=>t.toFixed(4))} )`;switch(ut.getTransfer(n)){case $r:return[e,"LinearTransferOETF"];case _t:return[e,"sRGBTransferOETF"];default:return He("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function wp(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+Sv(n.getShaderSource(e),o)}else return r}function wv(n,e){let t=Tv(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var Ev={[kh]:"Linear",[zh]:"Reinhard",[Hh]:"Cineon",[Ta]:"ACESFilmic",[Gh]:"AgX",[Wh]:"Neutral",[Vh]:"Custom"};function Av(n,e){let t=Ev[e];return t===void 0?(He("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var lc=new V;function Rv(){ut.getLuminanceCoefficients(lc);let n=lc.x.toFixed(4),e=lc.y.toFixed(4),t=lc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Cv(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Na).join(`
`)}function Pv(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Iv(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),a=r.name,o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function Na(n){return n!==""}function Ep(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function Ap(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Lv=/^[ \t]*#include +<([\w\d./]+)>/gm;function du(n){return n.replace(Lv,Nv)}function Nv(n,e){let t=et[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return du(t)}var Dv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Rp(n){return n.replace(Dv,Uv)}function Uv(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Cp(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}var Fv={[Sa]:"SHADOWMAP_TYPE_PCF",[gr]:"SHADOWMAP_TYPE_VSM"};function Ov(n){return Fv[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Bv={[yr]:"ENVMAP_MODE_REFRACTION"};function kv(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":Bv[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var zv={[yl]:"ENVMAP_BLENDING_MULTIPLY",[zd]:"ENVMAP_BLENDING_MIX",[Hd]:"ENVMAP_BLENDING_ADD"};function Hv(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":zv[n.combine]||"ENVMAP_BLENDING_NONE"}function Vv(n,e,t,i){let s=n.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=Ov(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=kv(t),f=Hv(t),u=Cv(t),d=Pv(r),m=s.createProgram(),y,p,g=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d].filter(Na).join(`
`),y.length>0&&(y+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d].filter(Na).join(`
`),p.length>0&&(p+=`
`)):(y=[Cp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Na).join(`
`),p=[Cp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==gi?"#define TONE_MAPPING":"",t.toneMapping!==gi?et.tonemapping_pars_fragment:"",t.toneMapping!==gi?Av("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",et.colorspace_pars_fragment,wv("linearToOutputTexel",t.outputColorSpace),Rv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Na).join(`
`)),a=du(a),a=Ep(a,t),a=Ap(a,t),o=du(o),o=Ep(o,t),o=Ap(o,t),a=Rp(a),o=Rp(o),t.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,y=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,p=["#define varying in",t.glslVersion===nu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===nu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let b=g+y+a,w=g+p+o,v=Sp(s,s.VERTEX_SHADER,b),_=Sp(s,s.FRAGMENT_SHADER,w);s.attachShader(m,v),s.attachShader(m,_),t.index0AttributeName!==void 0?s.bindAttribLocation(m,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function T(M){if(n.debug.checkShaderErrors){let E=s.getProgramInfoLog(m)||"",R=s.getShaderInfoLog(v)||"",I=s.getShaderInfoLog(_)||"",A=E.trim(),C=R.trim(),U=I.trim(),F=!0,k=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(F=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,m,v,_);else{let D=wp(s,v,"vertex"),z=wp(s,_,"fragment");Ge("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Material Name: `+M.name+`
Material Type: `+M.type+`

Program Info Log: `+A+`
`+D+`
`+z)}else A!==""?He("WebGLProgram: Program Info Log:",A):(C===""||U==="")&&(k=!1);k&&(M.diagnostics={runnable:F,programLog:A,vertexShader:{log:C,prefix:y},fragmentShader:{log:U,prefix:p}})}s.deleteShader(v),s.deleteShader(_),x=new Mr(s,m),S=Iv(s,m)}let x;this.getUniforms=function(){return x===void 0&&T(this),x};let S;this.getAttributes=function(){return S===void 0&&T(this),S};let N=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=s.getProgramParameter(m,Mv)),N},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=bv++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=v,this.fragmentShader=_,this}var Gv=0,pu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new mu(e),t.set(e,i)),i}},mu=class{constructor(e){this.id=Gv++,this.code=e,this.usedTimes=0}};function Wv(n){return n===rs||n===Pa||n===Ia}function Xv(n,e,t,i,s,r){let a=new jr,o=new pu,l=new Set,c=[],h=new Map,f=i.logarithmicDepthBuffer,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(x){return l.add(x),x===0?"uv":`uv${x}`}function m(x,S,N,M,E,R){let I=M.fog,A=E.geometry,C=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?M.environment:null,U=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,F=e.get(x.envMap||C,U),k=u[x.type],D=i.precision;x.precision!==null&&(D=i.getMaxPrecision(x.precision),D!==x.precision&&He("WebGLProgram.getParameters:",x.precision,"not supported, using",D,"instead."));let z=A.morphAttributes.position||A.morphAttributes.normal||A.morphAttributes.color,G=z!==void 0?z.length:0,$=0;A.morphAttributes.position!==void 0&&($=1),A.morphAttributes.normal!==void 0&&($=2),A.morphAttributes.color!==void 0&&($=3);let Z,q,ae,oe;if(k){let Te=yi[k];Z=Te.vertexShader,q=Te.fragmentShader}else{Z=x.vertexShader,q=x.fragmentShader;let Te=o.getVertexShaderStage(x),vt=o.getFragmentShaderStage(x);o.update(x,Te,vt),ae=Te.id,oe=vt.id}let Ee=n.getRenderTarget(),fe=n.state.buffers.depth.getReversed(),Le=E.isInstancedMesh===!0,bt=E.isBatchedMesh===!0,ze=!!x.map,tt=!!x.matcap,st=!!F,re=st&&F.isPMREMTexture===!0,ge=!!x.aoMap,de=!!x.lightMap,Ce=!!x.bumpMap&&x.wireframe===!1,Se=!!x.normalMap,Ze=!!x.displacementMap,Fe=!!x.emissiveMap,rt=!!x.metalnessMap,lt=!!x.roughnessMap,pt=x.anisotropy>0,Y=x.clearcoat>0,$t=x.diffuseRoughness>0,it=x.dispersion>0,St=x.retroreflectivity>0,ve=x.iridescence>0,Vt=x.sheen>0,ke=x.transmission>0,Xe=pt&&!!x.anisotropyMap,B=Y&&!!x.clearcoatMap,P=Y&&!!x.clearcoatNormalMap,J=Y&&!!x.clearcoatRoughnessMap,le=$t&&!!x.diffuseRoughnessMap,se=ve&&!!x.iridescenceMap,pe=ve&&!!x.iridescenceThicknessMap,Me=Vt&&!!x.sheenColorMap,te=Vt&&!!x.sheenRoughnessMap,ne=!!x.specularMap,xe=!!x.specularColorMap,H=!!x.specularIntensityMap,ie=ke&&!!x.transmissionMap,ee=ke&&!!x.thicknessMap,ye=!!x.gradientMap,ue=!!x.alphaMap,me=x.alphaTest>0,Oe=!!x.alphaHash,Qe=!!x.extensions,ce=gi;x.toneMapped&&(Ee===null||Ee.isXRRenderTarget===!0)&&(ce=n.toneMapping);let Be=re?F.isCompressedCubeTexture?F.image[0].mipmaps:F.mipmaps:null,Je={shaderID:k,shaderType:x.type,shaderName:x.name,vertexShader:Z,fragmentShader:q,defines:x.defines,customVertexShaderID:ae,customFragmentShaderID:oe,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:D,batching:bt,batchingColor:bt&&E._colorsTexture!==null,instancing:Le,instancingColor:Le&&E.instanceColor!==null,instancingMorph:Le&&E.morphTexture!==null,outputColorSpace:Ee===null?n.outputColorSpace:Ee.isXRRenderTarget===!0?Ee.texture.colorSpace:ut.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:ze,matcap:tt,envMap:st,envMapMode:st&&F.mapping,envMapPMREM:re,envMapMaxLod:re?Be.length-1:null,envMapSize:re?Be[0].width:null,aoMap:ge,lightMap:de,bumpMap:Ce,normalMap:Se,displacementMap:Ze,emissiveMap:Fe,normalMapObjectSpace:Se&&x.normalMapType===Wd,normalMapTangentSpace:Se&&x.normalMapType===rc,packedNormalMap:Se&&x.normalMapType===rc&&Wv(x.normalMap.format),metalnessMap:rt,roughnessMap:lt,anisotropy:pt,anisotropyMap:Xe,clearcoat:Y,clearcoatMap:B,clearcoatNormalMap:P,clearcoatRoughnessMap:J,diffuseRoughness:$t,diffuseRoughnessMap:le,dispersion:it,retroreflection:St,iridescence:ve,iridescenceMap:se,iridescenceThicknessMap:pe,sheen:Vt,sheenColorMap:Me,sheenRoughnessMap:te,specularMap:ne,specularColorMap:xe,specularIntensityMap:H,transmission:ke,transmissionMap:ie,thicknessMap:ee,gradientMap:ye,opaque:x.transparent===!1&&x.blending===xr&&x.alphaToCoverage===!1,alphaMap:ue,alphaTest:me,alphaHash:Oe,combine:x.combine,mapUv:ze&&d(x.map.channel),aoMapUv:ge&&d(x.aoMap.channel),lightMapUv:de&&d(x.lightMap.channel),bumpMapUv:Ce&&d(x.bumpMap.channel),normalMapUv:Se&&d(x.normalMap.channel),displacementMapUv:Ze&&d(x.displacementMap.channel),emissiveMapUv:Fe&&d(x.emissiveMap.channel),metalnessMapUv:rt&&d(x.metalnessMap.channel),roughnessMapUv:lt&&d(x.roughnessMap.channel),anisotropyMapUv:Xe&&d(x.anisotropyMap.channel),clearcoatMapUv:B&&d(x.clearcoatMap.channel),clearcoatNormalMapUv:P&&d(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:J&&d(x.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:le&&d(x.diffuseRoughnessMap.channel),iridescenceMapUv:se&&d(x.iridescenceMap.channel),iridescenceThicknessMapUv:pe&&d(x.iridescenceThicknessMap.channel),sheenColorMapUv:Me&&d(x.sheenColorMap.channel),sheenRoughnessMapUv:te&&d(x.sheenRoughnessMap.channel),specularMapUv:ne&&d(x.specularMap.channel),specularColorMapUv:xe&&d(x.specularColorMap.channel),specularIntensityMapUv:H&&d(x.specularIntensityMap.channel),transmissionMapUv:ie&&d(x.transmissionMap.channel),thicknessMapUv:ee&&d(x.thicknessMap.channel),alphaMapUv:ue&&d(x.alphaMap.channel),vertexTangents:!!A.attributes.tangent&&(Se||pt),vertexNormals:!!A.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!A.attributes.color&&A.attributes.color.itemSize===4,pointsUvs:E.isPoints===!0&&!!A.attributes.uv&&(ze||ue),fog:!!I,useFog:x.fog===!0,fogExp2:!!I&&I.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||A.attributes.normal===void 0&&Se===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:fe,skinning:E.isSkinnedMesh===!0,hasPositionAttribute:A.attributes.position!==void 0,morphTargets:A.morphAttributes.position!==void 0,morphNormals:A.morphAttributes.normal!==void 0,morphColors:A.morphAttributes.color!==void 0,morphTargetsCount:G,morphTextureStride:$,numSunLights:S.sun.length,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numSunLightShadows:S.sunShadowMap.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:R.filter(Te=>Te.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&N.length>0,shadowMapType:n.shadowMap.type,toneMapping:ce,decodeVideoTexture:ze&&x.map.isVideoTexture===!0&&ut.getTransfer(x.map.colorSpace)===_t,decodeVideoTextureEmissive:Fe&&x.emissiveMap.isVideoTexture===!0&&ut.getTransfer(x.emissiveMap.colorSpace)===_t,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===mi,flipSided:x.side===pn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Qe&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Qe&&x.extensions.multiDraw===!0||bt)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Je.vertexUv1s=l.has(1),Je.vertexUv2s=l.has(2),Je.vertexUv3s=l.has(3),l.clear(),Je}function y(x){let S=[];if(x.shaderID?S.push(x.shaderID):(S.push(x.customVertexShaderID),S.push(x.customFragmentShaderID)),x.defines!==void 0)for(let N in x.defines)S.push(N),S.push(x.defines[N]);return x.isRawShaderMaterial===!1&&(p(S,x),g(S,x),S.push(n.outputColorSpace)),S.push(x.customProgramCacheKey),S.join()}function p(x,S){x.push(S.precision),x.push(S.outputColorSpace),x.push(S.envMapMode),x.push(S.envMapPMREM),x.push(S.envMapMaxLod),x.push(S.envMapSize),x.push(S.mapUv),x.push(S.alphaMapUv),x.push(S.lightMapUv),x.push(S.aoMapUv),x.push(S.bumpMapUv),x.push(S.normalMapUv),x.push(S.displacementMapUv),x.push(S.emissiveMapUv),x.push(S.metalnessMapUv),x.push(S.roughnessMapUv),x.push(S.anisotropyMapUv),x.push(S.clearcoatMapUv),x.push(S.clearcoatNormalMapUv),x.push(S.clearcoatRoughnessMapUv),x.push(S.diffuseRoughnessMapUv),x.push(S.iridescenceMapUv),x.push(S.iridescenceThicknessMapUv),x.push(S.sheenColorMapUv),x.push(S.sheenRoughnessMapUv),x.push(S.specularMapUv),x.push(S.specularColorMapUv),x.push(S.specularIntensityMapUv),x.push(S.transmissionMapUv),x.push(S.thicknessMapUv),x.push(S.combine),x.push(S.fogExp2),x.push(S.sizeAttenuation),x.push(S.morphTargetsCount),x.push(S.numSunLights),x.push(S.numDirLights),x.push(S.numPointLights),x.push(S.numSpotLights),x.push(S.numSpotLightMaps),x.push(S.numHemiLights),x.push(S.numRectAreaLights),x.push(S.numSunLightShadows),x.push(S.numDirLightShadows),x.push(S.numPointLightShadows),x.push(S.numSpotLightShadows),x.push(S.numSpotLightShadowsWithMaps),x.push(S.numLightProbes),x.push(S.numLightProbeGrids),x.push(S.shadowMapType),x.push(S.toneMapping),x.push(S.numClippingPlanes),x.push(S.numClipIntersection),x.push(S.depthPacking)}function g(x,S){a.disableAll(),S.instancing&&a.enable(0),S.instancingColor&&a.enable(1),S.instancingMorph&&a.enable(2),S.matcap&&a.enable(3),S.envMap&&a.enable(4),S.normalMapObjectSpace&&a.enable(5),S.normalMapTangentSpace&&a.enable(6),S.clearcoat&&a.enable(7),S.iridescence&&a.enable(8),S.alphaTest&&a.enable(9),S.vertexColors&&a.enable(10),S.vertexAlphas&&a.enable(11),S.vertexUv1s&&a.enable(12),S.vertexUv2s&&a.enable(13),S.vertexUv3s&&a.enable(14),S.vertexTangents&&a.enable(15),S.anisotropy&&a.enable(16),S.alphaHash&&a.enable(17),S.batching&&a.enable(18),S.dispersion&&a.enable(19),S.retroreflection&&a.enable(24),S.diffuseRoughness&&a.enable(25),S.batchingColor&&a.enable(20),S.gradientMap&&a.enable(21),S.packedNormalMap&&a.enable(22),S.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reversedDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),S.numLightProbeGrids>0&&a.enable(22),S.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function b(x){let S=u[x.type],N;if(S){let M=yi[S];N=hp.clone(M.uniforms)}else N=x.uniforms;return N}function w(x,S){let N=h.get(S);return N!==void 0?++N.usedTimes:(N=new Vv(n,S,x,s),c.push(N),h.set(S,N)),N}function v(x){if(--x.usedTimes===0){let S=c.indexOf(x);c[S]=c[c.length-1],c.pop(),h.delete(x.cacheKey),x.destroy()}}function _(x){o.remove(x)}function T(){o.dispose()}return{getParameters:m,getProgramCacheKey:y,getUniforms:b,acquireProgram:w,releaseProgram:v,releaseShaderCache:_,programs:c,dispose:T}}function qv(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,l){n.get(a)[o]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function Yv(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function Pp(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Ip(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function a(u){let d=0;return u.isInstancedMesh&&(d+=2),u.isSkinnedMesh&&(d+=1),d}function o(u,d,m,y,p,g){let b=n[e];return b===void 0?(b={id:u.id,object:u,geometry:d,material:m,materialVariant:a(u),groupOrder:y,renderOrder:u.renderOrder,z:p,group:g},n[e]=b):(b.id=u.id,b.object=u,b.geometry=d,b.material=m,b.materialVariant=a(u),b.groupOrder=y,b.renderOrder=u.renderOrder,b.z=p,b.group=g),e++,b}function l(u,d,m,y,p,g,b){b.reversedDepth===!0&&(p=-p);let w=o(u,d,m,y,p,g);m.transmission>0?i.push(w):m.transparent===!0?s.push(w):t.push(w)}function c(u,d,m,y,p,g){let b=o(u,d,m,y,p,g);m.transmission>0?i.unshift(b):m.transparent===!0?s.unshift(b):t.unshift(b)}function h(u,d){t.length>1&&t.sort(u||Yv),i.length>1&&i.sort(d||Pp),s.length>1&&s.sort(d||Pp)}function f(){for(let u=e,d=n.length;u<d;u++){let m=n[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:f,sort:h}}function $v(){let n=new WeakMap;function e(i,s){let r=n.get(i),a;return r===void 0?(a=new Ip,n.set(i,[a])):s>=r.length?(a=new Ip,r.push(a)):a=r[s],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function Zv(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new V,color:new Ve};break;case"SpotLight":t={position:new V,direction:new V,color:new Ve,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new V,color:new Ve,distance:0,decay:0};break;case"HemisphereLight":t={direction:new V,skyColor:new Ve,groundColor:new Ve};break;case"RectAreaLight":t={color:new Ve,position:new V,halfWidth:new V,halfHeight:new V};break}return n[e.id]=t,t}}}function Kv(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var Jv=0;function jv(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Qv(n){let e=new Zv,t=Kv(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new V);let s=new V,r=new mt,a=new mt;function o(c){let h=0,f=0,u=0;for(let R=0;R<9;R++)i.probe[R].set(0,0,0);let d=0,m=0,y=0,p=0,g=0,b=0,w=0,v=0,_=0,T=0,x=0,S=0,N=0,M=0;c.sort(jv);for(let R=0,I=c.length;R<I;R++){let A=c[R],C=A.color,U=A.intensity,F=A.distance,k=null;if(A.shadow&&A.shadow.map&&(A.shadow.map.texture.format===rs?k=A.shadow.map.texture:k=A.shadow.map.depthTexture||A.shadow.map.texture),A.isAmbientLight)h+=C.r*U,f+=C.g*U,u+=C.b*U;else if(A.isLightProbe){for(let D=0;D<9;D++)i.probe[D].addScaledVector(A.sh.coefficients[D],U);M++}else if(A.isSunLight){let D=e.get(A);if(D.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){let z=A.shadow,G=t.get(A);G.shadowIntensity=z.intensity,G.shadowBias=z.bias,G.shadowNormalBias=z.normalBias,G.shadowRadius=z.radius,G.shadowMapSize.copy(z.mapSize).multiply(z.getFrameExtents()),i.sunShadow[m]=G,i.sunShadowMap[m]=k;let $=z.getViewportCount();for(let Z=0;Z<$;Z++)i.sunShadowMatrix[y+Z]=z.getMatrix(Z),i.sunShadowCascade[y+Z]=z._cascadeData[Z];y+=$,m++}i.sun[d]=D,d++}else if(A.isDirectionalLight){let D=e.get(A);if(D.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){let z=A.shadow,G=t.get(A);G.shadowIntensity=z.intensity,G.shadowBias=z.bias,G.shadowNormalBias=z.normalBias,G.shadowRadius=z.radius,G.shadowMapSize=z.mapSize,i.directionalShadow[p]=G,i.directionalShadowMap[p]=k,i.directionalShadowMatrix[p]=A.shadow.matrix,_++}i.directional[p]=D,p++}else if(A.isSpotLight){let D=e.get(A);D.position.setFromMatrixPosition(A.matrixWorld),D.color.copy(C).multiplyScalar(U),D.distance=F,D.coneCos=Math.cos(A.angle),D.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),D.decay=A.decay,i.spot[b]=D;let z=A.shadow;if(A.map&&(i.spotLightMap[S]=A.map,S++,z.updateMatrices(A),A.castShadow&&N++),i.spotLightMatrix[b]=z.matrix,A.castShadow){let G=t.get(A);G.shadowIntensity=z.intensity,G.shadowBias=z.bias,G.shadowNormalBias=z.normalBias,G.shadowRadius=z.radius,G.shadowMapSize=z.mapSize,i.spotShadow[b]=G,i.spotShadowMap[b]=k,x++}b++}else if(A.isRectAreaLight){let D=e.get(A);D.color.copy(C).multiplyScalar(U),D.halfWidth.set(A.width*.5,0,0),D.halfHeight.set(0,A.height*.5,0),i.rectArea[w]=D,w++}else if(A.isPointLight){let D=e.get(A);if(D.color.copy(A.color).multiplyScalar(A.intensity),D.distance=A.distance,D.decay=A.decay,A.castShadow){let z=A.shadow,G=t.get(A);G.shadowIntensity=z.intensity,G.shadowBias=z.bias,G.shadowNormalBias=z.normalBias,G.shadowRadius=z.radius,G.shadowMapSize=z.mapSize,G.shadowCameraNear=z.camera.near,G.shadowCameraFar=z.camera.far,i.pointShadow[g]=G,i.pointShadowMap[g]=k,i.pointShadowMatrix[g]=A.shadow.matrix,T++}i.point[g]=D,g++}else if(A.isHemisphereLight){let D=e.get(A);D.skyColor.copy(A.color).multiplyScalar(U),D.groundColor.copy(A.groundColor).multiplyScalar(U),i.hemi[v]=D,v++}}w>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=we.LTC_FLOAT_1,i.rectAreaLTC2=we.LTC_FLOAT_2):(i.rectAreaLTC1=we.LTC_HALF_1,i.rectAreaLTC2=we.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=f,i.ambient[2]=u;let E=i.hash;(E.sunLength!==d||E.directionalLength!==p||E.pointLength!==g||E.spotLength!==b||E.rectAreaLength!==w||E.hemiLength!==v||E.numSunShadows!==m||E.numDirectionalShadows!==_||E.numPointShadows!==T||E.numSpotShadows!==x||E.numSpotMaps!==S||E.numLightProbes!==M)&&(i.sun.length=d,i.directional.length=p,i.spot.length=b,i.rectArea.length=w,i.point.length=g,i.hemi.length=v,i.sunShadow.length=m,i.sunShadowMap.length=m,i.sunShadowMatrix.length=y,i.sunShadowCascade.length=y,i.directionalShadow.length=_,i.directionalShadowMap.length=_,i.directionalShadowMatrix.length=_,i.pointShadow.length=T,i.pointShadowMap.length=T,i.pointShadowMatrix.length=T,i.spotShadow.length=x,i.spotShadowMap.length=x,i.spotLightMatrix.length=x+S-N,i.spotLightMap.length=S,i.numSpotLightShadowsWithMaps=N,i.numLightProbes=M,E.sunLength=d,E.directionalLength=p,E.pointLength=g,E.spotLength=b,E.rectAreaLength=w,E.hemiLength=v,E.numSunShadows=m,E.numDirectionalShadows=_,E.numPointShadows=T,E.numSpotShadows=x,E.numSpotMaps=S,E.numLightProbes=M,i.version=Jv++)}function l(c,h){let f=0,u=0,d=0,m=0,y=0,p=0,g=h.matrixWorldInverse;for(let b=0,w=c.length;b<w;b++){let v=c[b];if(v.isSunLight){let _=i.sun[f];_.direction.setFromMatrixPosition(v.matrixWorld),_.direction.transformDirection(g),f++}else if(v.isDirectionalLight){let _=i.directional[u];_.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(g),u++}else if(v.isSpotLight){let _=i.spot[m];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(g),_.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(g),m++}else if(v.isRectAreaLight){let _=i.rectArea[y];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(g),a.identity(),r.copy(v.matrixWorld),r.premultiply(g),a.extractRotation(r),_.halfWidth.set(v.width*.5,0,0),_.halfHeight.set(0,v.height*.5,0),_.halfWidth.applyMatrix4(a),_.halfHeight.applyMatrix4(a),y++}else if(v.isPointLight){let _=i.point[d];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(g),d++}else if(v.isHemisphereLight){let _=i.hemi[p];_.direction.setFromMatrixPosition(v.matrixWorld),_.direction.transformDirection(g),p++}}}return{setup:o,setupView:l,state:i}}function Lp(n){let e=new Qv(n),t=[],i=[],s=[];function r(f){h.camera=f,t.length=0,i.length=0,s.length=0}function a(f){f.isLightProbeGrid?s.push(f):t.push(f)}function o(f){i.push(f)}function l(){e.setup(t),s.sort((f,u)=>f.priority-u.priority||f.id-u.id)}function c(f){e.setupView(t,f)}let h={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function eM(n){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new Lp(n),e.set(s,[o])):r>=a.length?(o=new Lp(n),a.push(o)):o=a[r],o}function i(){e=new WeakMap}return{get:t,dispose:i}}var tM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,nM=`uniform sampler2D shadow_pass;
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
}`,iM=[new V(1,0,0),new V(-1,0,0),new V(0,1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1)],sM=[new V(0,-1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1),new V(0,-1,0),new V(0,-1,0)],Np=new mt,La=new V,cu=new V;function rM(n,e,t){let i=new ji,s=new he,r=new he,a=new Lt,o=new sl,l=new rl,c={},h=t.maxTextureSize,f={[ss]:pn,[pn]:ss,[mi]:mi},u=new qn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new he},radius:{value:4}},vertexShader:tM,fragmentShader:nM}),d=u.clone();d.defines.HORIZONTAL_PASS=1;let m=new on;m.setAttribute("position",new Mn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new Ke(m,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Sa;let g=this.type;this.render=function(T,x,S){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||T.length===0)return;this.type===xl&&(He("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Sa);let N=n.getRenderTarget(),M=n.getActiveCubeFace(),E=n.getActiveMipmapLevel(),R=n.state;R.setBlending(As),R.buffers.depth.getReversed()===!0?R.buffers.color.setClear(0,0,0,0):R.buffers.color.setClear(1,1,1,1),R.buffers.depth.setTest(!0),R.setScissorTest(!1);let I=g!==this.type;I&&x.traverse(function(A){A.material&&(Array.isArray(A.material)?A.material.forEach(C=>C.needsUpdate=!0):A.material.needsUpdate=!0)});for(let A=0,C=T.length;A<C;A++){let U=T[A],F=U.shadow;if(F===void 0){He("WebGLShadowMap:",U,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;s.copy(F.mapSize);let k=F.getFrameExtents();s.multiply(k),r.copy(F.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/k.x),s.x=r.x*k.x,F.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/k.y),s.y=r.y*k.y,F.mapSize.y=r.y));let D=n.state.buffers.depth.getReversed();if(F.camera._reversedDepth=D,F.map===null||I===!0){if(F.map!==null&&(F.map.depthTexture!==null&&(F.map.depthTexture.dispose(),F.map.depthTexture=null),F.map.dispose()),this.type===gr){if(U.isPointLight){He("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}F.map=new Bn(s.x,s.y,{format:rs,type:si,minFilter:An,magFilter:An,generateMipmaps:!1}),F.map.texture.name=U.name+".shadowMap",F.map.depthTexture=new Ni(s.x,s.y,Yn),F.map.depthTexture.name=U.name+".shadowMapDepth",F.map.depthTexture.format=Ci,F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=an,F.map.depthTexture.magFilter=an}else U.isPointLight?(F.map=new Da(s.x),F.map.depthTexture=new aa(s.x,ii)):(F.map=new Bn(s.x,s.y),F.map.depthTexture=new Ni(s.x,s.y,ii)),F.map.depthTexture.name=U.name+".shadowMap",F.map.depthTexture.format=Ci,this.type===Sa?(F.map.depthTexture.compareFunction=D?Qh:jh,F.map.depthTexture.minFilter=An,F.map.depthTexture.magFilter=An):(F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=an,F.map.depthTexture.magFilter=an);F.camera.updateProjectionMatrix()}F.map.isWebGLCubeRenderTarget!==!0&&(F.map.width!==s.x||F.map.height!==s.y)&&F.map.setSize(s.x,s.y);let z=F.map.isWebGLCubeRenderTarget?6:F.getViewportCount();U.isPointLight!==!0&&F.updateMatrices(U,S);let G=(F.camera.layers.mask&4294967294)!==0?F.camera.layers:S.layers;for(let $=0;$<z;$++){let Z=F.getCamera($);if(U.isPointLight){let q=F.camera,ae=F.matrix,oe=U.distance||q.far;oe!==q.far&&(q.far=oe,q.updateProjectionMatrix()),La.setFromMatrixPosition(U.matrixWorld),q.position.copy(La),cu.copy(q.position),cu.add(iM[$]),q.up.copy(sM[$]),q.lookAt(cu),q.updateMatrixWorld(),ae.makeTranslation(-La.x,-La.y,-La.z),Np.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),F._frustum.setFromProjectionMatrix(Np,q.coordinateSystem,q.reversedDepth)}if(F.map.isWebGLCubeRenderTarget)n.setRenderTarget(F.map,$),n.clear();else{$===0&&(n.setRenderTarget(F.map),n.clear());let q=F.getViewport($);a.set(r.x*q.x,r.y*q.y,r.x*q.z,r.y*q.w),R.viewport(a)}i=F.getFrustum($),v(x,S,Z,U,G,this.type)}F.isPointLightShadow!==!0&&this.type===gr&&b(F,S),F.needsUpdate=!1}g=this.type,p.needsUpdate=!1,n.setRenderTarget(N,M,E)};function b(T,x){let S=e.update(y);u.defines.VSM_SAMPLES!==T.blurSamples&&(u.defines.VSM_SAMPLES=T.blurSamples,d.defines.VSM_SAMPLES=T.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),T.mapPass===null?T.mapPass=new Bn(s.x,s.y,{format:rs,type:si}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),u.uniforms.shadow_pass.value=T.map.depthTexture,u.uniforms.resolution.value.set(T.map.width,T.map.height),u.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(x,null,S,u,y,null),d.uniforms.shadow_pass.value=T.mapPass.texture,d.uniforms.resolution.value.set(T.map.width,T.map.height),d.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(x,null,S,d,y,null)}function w(T,x,S,N){let M=null,E=S.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(E!==void 0)M=E;else if(M=S.isPointLight===!0?l:o,n.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0||x.alphaToCoverage===!0){let R=M.uuid,I=x.uuid,A=c[R];A===void 0&&(A={},c[R]=A);let C=A[I];C===void 0&&(C=M.clone(),A[I]=C,x.addEventListener("dispose",_)),M=C}if(M.visible=x.visible,M.wireframe=x.wireframe,N===gr?M.side=x.shadowSide!==null?x.shadowSide:x.side:M.side=x.shadowSide!==null?x.shadowSide:f[x.side],M.alphaMap=x.alphaMap,M.alphaTest=x.alphaToCoverage===!0?.5:x.alphaTest,M.map=x.map,M.clipShadows=x.clipShadows,M.clippingPlanes=x.clippingPlanes,M.clipIntersection=x.clipIntersection,M.displacementMap=x.displacementMap,M.displacementScale=x.displacementScale,M.displacementBias=x.displacementBias,M.wireframeLinewidth=x.wireframeLinewidth,M.linewidth=x.linewidth,S.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let R=n.properties.get(M);R.light=S}return M}function v(T,x,S,N,M,E){if(T.visible===!1)return;if(T.layers.test(M)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&E===gr)&&(!T.frustumCulled||T.intersectsFrustum(i))){T.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,T.matrixWorld);let A=e.update(T),C=T.material;if(Array.isArray(C)){let U=A.groups;for(let F=0,k=U.length;F<k;F++){let D=U[F],z=C[D.materialIndex];if(z&&z.visible){let G=w(T,z,N,E);T.onBeforeShadow(n,T,x,S,A,G,D),n.renderBufferDirect(S,null,A,G,T,D),T.onAfterShadow(n,T,x,S,A,G,D)}}}else if(C.visible){let U=w(T,C,N,E);T.onBeforeShadow(n,T,x,S,A,U,null),n.renderBufferDirect(S,null,A,U,T,null),T.onAfterShadow(n,T,x,S,A,U,null)}}let I=T.children;for(let A=0,C=I.length;A<C;A++)v(I[A],x,S,N,M,E)}function _(T){T.target.removeEventListener("dispose",_);for(let S in c){let N=c[S],M=T.target.uuid;M in N&&(N[M].dispose(),delete N[M])}}}function aM(n,e){function t(){let H=!1,ie=new Lt,ee=null,ye=new Lt(0,0,0,0);return{setMask:function(ue){ee!==ue&&!H&&(n.colorMask(ue,ue,ue,ue),ee=ue)},setLocked:function(ue){H=ue},setClear:function(ue,me,Oe,Qe,ce){ce===!0&&(ue*=Qe,me*=Qe,Oe*=Qe),ie.set(ue,me,Oe,Qe),ye.equals(ie)===!1&&(n.clearColor(ue,me,Oe,Qe),ye.copy(ie))},reset:function(){H=!1,ee=null,ye.set(-1,0,0,0)}}}function i(){let H=!1,ie=!1,ee=null,ye=null,ue=null;return{setReversed:function(me){if(ie!==me){let Oe=e.get("EXT_clip_control");me?Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.ZERO_TO_ONE_EXT):Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.NEGATIVE_ONE_TO_ONE_EXT),ie=me;let Qe=ue;ue=null,this.setClear(Qe)}},getReversed:function(){return ie},setTest:function(me){me?fe(n.DEPTH_TEST):Le(n.DEPTH_TEST)},setMask:function(me){ee!==me&&!H&&(n.depthMask(me),ee=me)},setFunc:function(me){if(ie&&(me=ep[me]),ye!==me){switch(me){case Fo:n.depthFunc(n.NEVER);break;case Oo:n.depthFunc(n.ALWAYS);break;case Bo:n.depthFunc(n.LESS);break;case ir:n.depthFunc(n.LEQUAL);break;case ko:n.depthFunc(n.EQUAL);break;case zo:n.depthFunc(n.GEQUAL);break;case Ho:n.depthFunc(n.GREATER);break;case Vo:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ye=me}},setLocked:function(me){H=me},setClear:function(me){ue!==me&&(ue=me,ie&&(me=1-me),n.clearDepth(me))},reset:function(){H=!1,ee=null,ye=null,ue=null,ie=!1}}}function s(){let H=!1,ie=null,ee=null,ye=null,ue=null,me=null,Oe=null,Qe=null,ce=null;return{setTest:function(Be){H||(Be?fe(n.STENCIL_TEST):Le(n.STENCIL_TEST))},setMask:function(Be){ie!==Be&&!H&&(n.stencilMask(Be),ie=Be)},setFunc:function(Be,Je,Te){(ee!==Be||ye!==Je||ue!==Te)&&(n.stencilFunc(Be,Je,Te),ee=Be,ye=Je,ue=Te)},setOp:function(Be,Je,Te){(me!==Be||Oe!==Je||Qe!==Te)&&(n.stencilOp(Be,Je,Te),me=Be,Oe=Je,Qe=Te)},setLocked:function(Be){H=Be},setClear:function(Be){ce!==Be&&(n.clearStencil(Be),ce=Be)},reset:function(){H=!1,ie=null,ee=null,ye=null,ue=null,me=null,Oe=null,Qe=null,ce=null}}}let r=new t,a=new i,o=new s,l={},c=new WeakMap,h={},f={},u={},d=new WeakMap,m=[],y=null,p=!1,g=null,b=null,w=null,v=null,_=null,T=null,x=null,S=new Ve(0,0,0),N=0,M=!1,E=null,R=null,I=null,A=null,C=null,U=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),F=!1,k=0,D=n.getParameter(n.VERSION);D.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(D)[1]),F=k>=1):D.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(D)[1]),F=k>=2);let z=null,G={},$=n.getParameter(n.SCISSOR_BOX),Z=n.getParameter(n.VIEWPORT),q=new Lt().fromArray($),ae=new Lt().fromArray(Z);function oe(H,ie,ee,ye){let ue=new Uint8Array(4),me=n.createTexture();n.bindTexture(H,me),n.texParameteri(H,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(H,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Oe=0;Oe<ee;Oe++)H===n.TEXTURE_3D||H===n.TEXTURE_2D_ARRAY?n.texImage3D(ie,0,n.RGBA,1,1,ye,0,n.RGBA,n.UNSIGNED_BYTE,ue):n.texImage2D(ie+Oe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ue);return me}let Ee={};Ee[n.TEXTURE_2D]=oe(n.TEXTURE_2D,n.TEXTURE_2D,1),Ee[n.TEXTURE_CUBE_MAP]=oe(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ee[n.TEXTURE_2D_ARRAY]=oe(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Ee[n.TEXTURE_3D]=oe(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),fe(n.DEPTH_TEST),a.setFunc(ir),Ce(!1),Se(Nh),fe(n.CULL_FACE),ge(As);function fe(H){h[H]!==!0&&(n.enable(H),h[H]=!0)}function Le(H){h[H]!==!1&&(n.disable(H),h[H]=!1)}function bt(H,ie){return u[H]!==ie?(n.bindFramebuffer(H,ie),u[H]=ie,H===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=ie),H===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=ie),!0):!1}function ze(H,ie){let ee=m,ye=!1;if(H){ee=d.get(ie),ee===void 0&&(ee=[],d.set(ie,ee));let ue=H.textures;if(ee.length!==ue.length||ee[0]!==n.COLOR_ATTACHMENT0){for(let me=0,Oe=ue.length;me<Oe;me++)ee[me]=n.COLOR_ATTACHMENT0+me;ee.length=ue.length,ye=!0}}else ee[0]!==n.BACK&&(ee[0]=n.BACK,ye=!0);ye&&n.drawBuffers(ee)}function tt(H){return y!==H?(n.useProgram(H),y=H,!0):!1}let st={[Rs]:n.FUNC_ADD,[Sd]:n.FUNC_SUBTRACT,[Td]:n.FUNC_REVERSE_SUBTRACT};st[wd]=n.MIN,st[Ed]=n.MAX;let re={[Ad]:n.ZERO,[Rd]:n.ONE,[Cd]:n.SRC_COLOR,[Oh]:n.SRC_ALPHA,[Ud]:n.SRC_ALPHA_SATURATE,[Nd]:n.DST_COLOR,[Id]:n.DST_ALPHA,[Pd]:n.ONE_MINUS_SRC_COLOR,[Bh]:n.ONE_MINUS_SRC_ALPHA,[Dd]:n.ONE_MINUS_DST_COLOR,[Ld]:n.ONE_MINUS_DST_ALPHA,[Fd]:n.CONSTANT_COLOR,[Od]:n.ONE_MINUS_CONSTANT_COLOR,[Bd]:n.CONSTANT_ALPHA,[kd]:n.ONE_MINUS_CONSTANT_ALPHA};function ge(H,ie,ee,ye,ue,me,Oe,Qe,ce,Be){if(H===As){p===!0&&(Le(n.BLEND),p=!1);return}if(p===!1&&(fe(n.BLEND),p=!0),H!==bd){if(H!==g||Be!==M){if((b!==Rs||_!==Rs)&&(n.blendEquation(n.FUNC_ADD),b=Rs,_=Rs),Be)switch(H){case xr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Dh:n.blendFunc(n.ONE,n.ONE);break;case Uh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Fh:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Ge("WebGLState: Invalid blending: ",H);break}else switch(H){case xr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Dh:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Uh:Ge("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Fh:Ge("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ge("WebGLState: Invalid blending: ",H);break}w=null,v=null,T=null,x=null,S.set(0,0,0),N=0,g=H,M=Be}return}ue=ue||ie,me=me||ee,Oe=Oe||ye,(ie!==b||ue!==_)&&(n.blendEquationSeparate(st[ie],st[ue]),b=ie,_=ue),(ee!==w||ye!==v||me!==T||Oe!==x)&&(n.blendFuncSeparate(re[ee],re[ye],re[me],re[Oe]),w=ee,v=ye,T=me,x=Oe),(Qe.equals(S)===!1||ce!==N)&&(n.blendColor(Qe.r,Qe.g,Qe.b,ce),S.copy(Qe),N=ce),g=H,M=!1}function de(H,ie){H.side===mi?Le(n.CULL_FACE):fe(n.CULL_FACE);let ee=H.side===pn;ie&&(ee=!ee),Ce(ee),H.blending===xr&&H.transparent===!1?ge(As):ge(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),a.setFunc(H.depthFunc),a.setTest(H.depthTest),a.setMask(H.depthWrite),r.setMask(H.colorWrite);let ye=H.stencilWrite;o.setTest(ye),ye&&(o.setMask(H.stencilWriteMask),o.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),o.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),Fe(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?fe(n.SAMPLE_ALPHA_TO_COVERAGE):Le(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ce(H){E!==H&&(H?n.frontFace(n.CW):n.frontFace(n.CCW),E=H)}function Se(H){H!==vd?(fe(n.CULL_FACE),H!==R&&(H===Nh?n.cullFace(n.BACK):H===Md?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Le(n.CULL_FACE),R=H}function Ze(H){H!==I&&(F&&n.lineWidth(H),I=H)}function Fe(H,ie,ee){H?(fe(n.POLYGON_OFFSET_FILL),(A!==ie||C!==ee)&&(A=ie,C=ee,a.getReversed()&&(ie=-ie,ee=-ee),n.polygonOffset(ie,ee))):Le(n.POLYGON_OFFSET_FILL)}function rt(H){H?fe(n.SCISSOR_TEST):Le(n.SCISSOR_TEST)}function lt(H){H===void 0&&(H=n.TEXTURE0+U-1),z!==H&&(n.activeTexture(H),z=H)}function pt(H,ie,ee){ee===void 0&&(z===null?ee=n.TEXTURE0+U-1:ee=z);let ye=G[ee];ye===void 0&&(ye={type:void 0,texture:void 0},G[ee]=ye),(ye.type!==H||ye.texture!==ie)&&(z!==ee&&(n.activeTexture(ee),z=ee),n.bindTexture(H,ie||Ee[H]),ye.type=H,ye.texture=ie)}function Y(){let H=G[z];H!==void 0&&H.type!==void 0&&(n.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function $t(){try{n.compressedTexImage2D(...arguments)}catch(H){Ge("WebGLState:",H)}}function it(){try{n.compressedTexImage3D(...arguments)}catch(H){Ge("WebGLState:",H)}}function St(){try{n.texSubImage2D(...arguments)}catch(H){Ge("WebGLState:",H)}}function ve(){try{n.texSubImage3D(...arguments)}catch(H){Ge("WebGLState:",H)}}function Vt(){try{n.compressedTexSubImage2D(...arguments)}catch(H){Ge("WebGLState:",H)}}function ke(){try{n.compressedTexSubImage3D(...arguments)}catch(H){Ge("WebGLState:",H)}}function Xe(){try{n.texStorage2D(...arguments)}catch(H){Ge("WebGLState:",H)}}function B(){try{n.texStorage3D(...arguments)}catch(H){Ge("WebGLState:",H)}}function P(){try{n.texImage2D(...arguments)}catch(H){Ge("WebGLState:",H)}}function J(){try{n.texImage3D(...arguments)}catch(H){Ge("WebGLState:",H)}}function le(H){return f[H]!==void 0?f[H]:n.getParameter(H)}function se(H,ie){f[H]!==ie&&(n.pixelStorei(H,ie),f[H]=ie)}function pe(H){q.equals(H)===!1&&(n.scissor(H.x,H.y,H.z,H.w),q.copy(H))}function Me(H){ae.equals(H)===!1&&(n.viewport(H.x,H.y,H.z,H.w),ae.copy(H))}function te(H,ie){let ee=c.get(ie);ee===void 0&&(ee=new WeakMap,c.set(ie,ee));let ye=ee.get(H);ye===void 0&&(ye=n.getUniformBlockIndex(ie,H.name),n.uniformBlockBinding(ie,ye,ye),ee.set(H,ye))}function ne(H,ie,ee){let ue=c.get(ie).get(H);l[ue]!==ee&&(n.bindBufferBase(n.UNIFORM_BUFFER,ue,ee),l[ue]=ee)}function xe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),h={},f={},z=null,G={},u={},l={},d=new WeakMap,m=[],y=null,p=!1,g=null,b=null,w=null,v=null,_=null,T=null,x=null,S=new Ve(0,0,0),N=0,M=!1,E=null,R=null,I=null,A=null,C=null,q.set(0,0,n.canvas.width,n.canvas.height),ae.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:fe,disable:Le,bindFramebuffer:bt,drawBuffers:ze,useProgram:tt,setBlending:ge,setMaterial:de,setFlipSided:Ce,setCullFace:Se,setLineWidth:Ze,setPolygonOffset:Fe,setScissorTest:rt,activeTexture:lt,bindTexture:pt,unbindTexture:Y,compressedTexImage2D:$t,compressedTexImage3D:it,texImage2D:P,texImage3D:J,pixelStorei:se,getParameter:le,updateUBOMapping:te,uniformBlockBinding:ne,texStorage2D:Xe,texStorage3D:B,texSubImage2D:St,texSubImage3D:ve,compressedTexSubImage2D:Vt,compressedTexSubImage3D:ke,scissor:pe,viewport:Me,reset:xe}}function oM(n,e,t,i,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new he,h=new WeakMap,f=new Set,u,d=new WeakMap,m=new Set,y=new FinalizationRegistry(B=>m.delete(B)),p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(B,P){return p?new OffscreenCanvas(B,P):Zr("canvas")}function b(B,P,J){let le=1,se=Xe(B);if((se.width>J||se.height>J)&&(le=J/Math.max(se.width,se.height)),le<1)if(typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&B instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&B instanceof ImageBitmap||typeof VideoFrame<"u"&&B instanceof VideoFrame){let pe=Math.floor(le*se.width),Me=Math.floor(le*se.height);u===void 0&&(u=g(pe,Me));let te=P?g(pe,Me):u;return te.width=pe,te.height=Me,te.getContext("2d").drawImage(B,0,0,pe,Me),He("WebGLRenderer: Texture has been resized from ("+se.width+"x"+se.height+") to ("+pe+"x"+Me+")."),te}else return"data"in B&&He("WebGLRenderer: Image in DataTexture is too big ("+se.width+"x"+se.height+")."),B;return B}function w(B){return B.generateMipmaps}function v(B){n.generateMipmap(B)}function _(B){return B.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:B.isWebGL3DRenderTarget?n.TEXTURE_3D:B.isWebGLArrayRenderTarget||B.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function T(B,P,J,le,se,pe=!1){if(B!==null){if(n[B]!==void 0)return n[B];He("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+B+"'")}let Me;le&&(Me=e.get("EXT_texture_norm16"),Me||He("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let te=P;if(P===n.RED&&(J===n.FLOAT&&(te=n.R32F),J===n.HALF_FLOAT&&(te=n.R16F),J===n.UNSIGNED_BYTE&&(te=n.R8),J===n.UNSIGNED_SHORT&&Me&&(te=Me.R16_EXT),J===n.SHORT&&Me&&(te=Me.R16_SNORM_EXT)),P===n.RED_INTEGER&&(J===n.UNSIGNED_BYTE&&(te=n.R8UI),J===n.UNSIGNED_SHORT&&(te=n.R16UI),J===n.UNSIGNED_INT&&(te=n.R32UI),J===n.BYTE&&(te=n.R8I),J===n.SHORT&&(te=n.R16I),J===n.INT&&(te=n.R32I)),P===n.RG&&(J===n.FLOAT&&(te=n.RG32F),J===n.HALF_FLOAT&&(te=n.RG16F),J===n.UNSIGNED_BYTE&&(te=n.RG8),J===n.UNSIGNED_SHORT&&Me&&(te=Me.RG16_EXT),J===n.SHORT&&Me&&(te=Me.RG16_SNORM_EXT)),P===n.RG_INTEGER&&(J===n.UNSIGNED_BYTE&&(te=n.RG8UI),J===n.UNSIGNED_SHORT&&(te=n.RG16UI),J===n.UNSIGNED_INT&&(te=n.RG32UI),J===n.BYTE&&(te=n.RG8I),J===n.SHORT&&(te=n.RG16I),J===n.INT&&(te=n.RG32I)),P===n.RGB_INTEGER&&(J===n.UNSIGNED_BYTE&&(te=n.RGB8UI),J===n.UNSIGNED_SHORT&&(te=n.RGB16UI),J===n.UNSIGNED_INT&&(te=n.RGB32UI),J===n.BYTE&&(te=n.RGB8I),J===n.SHORT&&(te=n.RGB16I),J===n.INT&&(te=n.RGB32I)),P===n.RGBA_INTEGER&&(J===n.UNSIGNED_BYTE&&(te=n.RGBA8UI),J===n.UNSIGNED_SHORT&&(te=n.RGBA16UI),J===n.UNSIGNED_INT&&(te=n.RGBA32UI),J===n.BYTE&&(te=n.RGBA8I),J===n.SHORT&&(te=n.RGBA16I),J===n.INT&&(te=n.RGBA32I)),P===n.RGB&&(J===n.UNSIGNED_SHORT&&Me&&(te=Me.RGB16_EXT),J===n.SHORT&&Me&&(te=Me.RGB16_SNORM_EXT),J===n.UNSIGNED_INT_5_9_9_9_REV&&(te=n.RGB9_E5),J===n.UNSIGNED_INT_10F_11F_11F_REV&&(te=n.R11F_G11F_B10F)),P===n.RGBA){let ne=pe?$r:ut.getTransfer(se);J===n.FLOAT&&(te=n.RGBA32F),J===n.HALF_FLOAT&&(te=n.RGBA16F),J===n.UNSIGNED_BYTE&&(te=ne===_t?n.SRGB8_ALPHA8:n.RGBA8),J===n.UNSIGNED_SHORT&&Me&&(te=Me.RGBA16_EXT),J===n.SHORT&&Me&&(te=Me.RGBA16_SNORM_EXT),J===n.UNSIGNED_SHORT_4_4_4_4&&(te=n.RGBA4),J===n.UNSIGNED_SHORT_5_5_5_1&&(te=n.RGB5_A1)}return(te===n.R16F||te===n.R32F||te===n.RG16F||te===n.RG32F||te===n.RGBA16F||te===n.RGBA32F)&&e.get("EXT_color_buffer_float"),te}function x(B,P){let J;return B?P===null||P===ii||P===Ps?J=n.DEPTH24_STENCIL8:P===Yn?J=n.DEPTH32F_STENCIL8:P===_r&&(J=n.DEPTH24_STENCIL8,He("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):P===null||P===ii||P===Ps?J=n.DEPTH_COMPONENT24:P===Yn?J=n.DEPTH_COMPONENT32F:P===_r&&(J=n.DEPTH_COMPONENT16),J}function S(B,P){return w(B)===!0||B.isFramebufferTexture&&B.minFilter!==an&&B.minFilter!==An?Math.log2(Math.max(P.width,P.height))+1:B.mipmaps.length>0?B.mipmaps.length:B.isCompressedTexture&&Array.isArray(B.image)?P.mipmaps.length:1}function N(B){let P=new WeakRef(B);i.get(B).__ref=P,m.add(P),y.register(B,P,P)}function M(B){let P=i.get(B).__ref;P!==void 0&&(m.delete(P),y.unregister(P))}function E(B){I(B.target)}function R(B){A(B.target)}function I(B){B.removeEventListener("dispose",E),M(B),U(B),B.isVideoTexture&&h.delete(B),B.isHTMLTexture&&f.delete(B)}function A(B){B.removeEventListener("dispose",R),M(B),k(B)}function C(){for(let B of m){let P=B.deref();P!==void 0&&(P.isRenderTarget===!0?A(P):I(P))}m.clear(),f.clear()}function U(B){let P=i.get(B);if(P.__webglInit===void 0)return;let J=B.source,le=d.get(J);if(le){let se=le[P.__cacheKey];se.usedTimes--,se.usedTimes===0&&F(B),Object.keys(le).length===0&&d.delete(J)}i.remove(B)}function F(B){let P=i.get(B);n.deleteTexture(P.__webglTexture);let J=B.source,le=d.get(J);delete le[P.__cacheKey],a.memory.textures--}function k(B){let P=i.get(B);P.__depthDisposeCallback&&P.__depthDisposeCallback();let J=B.depthTexture;if(J&&J.renderTarget===B&&I(J),B.isWebGLCubeRenderTarget)for(let se=0;se<6;se++){if(Array.isArray(P.__webglFramebuffer[se]))for(let pe=0;pe<P.__webglFramebuffer[se].length;pe++)n.deleteFramebuffer(P.__webglFramebuffer[se][pe]);else n.deleteFramebuffer(P.__webglFramebuffer[se]);P.__webglDepthbuffer&&n.deleteRenderbuffer(P.__webglDepthbuffer[se])}else{if(Array.isArray(P.__webglFramebuffer))for(let se=0;se<P.__webglFramebuffer.length;se++)n.deleteFramebuffer(P.__webglFramebuffer[se]);else n.deleteFramebuffer(P.__webglFramebuffer);if(P.__webglDepthbuffer&&n.deleteRenderbuffer(P.__webglDepthbuffer),P.__webglMultisampledFramebuffer&&n.deleteFramebuffer(P.__webglMultisampledFramebuffer),P.__webglColorRenderbuffer)for(let se=0;se<P.__webglColorRenderbuffer.length;se++)P.__webglColorRenderbuffer[se]&&n.deleteRenderbuffer(P.__webglColorRenderbuffer[se]);P.__webglDepthRenderbuffer&&n.deleteRenderbuffer(P.__webglDepthRenderbuffer)}let le=B.textures;for(let se=0,pe=le.length;se<pe;se++){let Me=i.get(le[se]);Me.__webglTexture&&(n.deleteTexture(Me.__webglTexture),a.memory.textures--),i.remove(le[se])}i.remove(B)}let D=0;function z(){D=0}function G(){return D}function $(B){D=B}function Z(){let B=D;return B>=s.maxTextures&&He("WebGLTextures: Trying to use "+(B+1)+" texture units while this GPU supports only "+s.maxTextures),D+=1,B}function q(B){let P=[];return P.push(B.wrapS),P.push(B.wrapT),P.push(B.wrapR||0),P.push(B.magFilter),P.push(B.minFilter),P.push(B.anisotropy),P.push(B.internalFormat),P.push(B.format),P.push(B.type),P.push(B.generateMipmaps),P.push(B.mipmapsAutoUpdate),P.push(B.premultiplyAlpha),P.push(B.flipY),P.push(B.unpackAlignment),P.push(B.colorSpace),P.join()}function ae(B,P){let J=i.get(B);if(B.isVideoTexture&&Vt(B),B.isRenderTargetTexture===!1&&B.isExternalTexture!==!0&&B.version>0&&J.__version!==B.version){let le=B.image;if(le===null)He("WebGLRenderer: Texture marked for update but no image data found.");else if(le.complete===!1)He("WebGLRenderer: Texture marked for update but image is incomplete");else{de(J,B,P);return}}else B.isExternalTexture&&(J.__webglTexture=B.sourceTexture?B.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,J.__webglTexture,n.TEXTURE0+P)}function oe(B,P){let J=i.get(B);if(B.isRenderTargetTexture===!1&&B.version>0&&J.__version!==B.version){de(J,B,P);return}else B.isExternalTexture&&(J.__webglTexture=B.sourceTexture?B.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,J.__webglTexture,n.TEXTURE0+P)}function Ee(B,P){let J=i.get(B);if(B.isRenderTargetTexture===!1&&B.version>0&&J.__version!==B.version){de(J,B,P);return}t.bindTexture(n.TEXTURE_3D,J.__webglTexture,n.TEXTURE0+P)}function fe(B,P){let J=i.get(B);if(B.version>0&&J.__version!==B.version){Ce(J,B,P);return}t.bindTexture(n.TEXTURE_CUBE_MAP,J.__webglTexture,n.TEXTURE0+P)}let Le={[sr]:n.REPEAT,[li]:n.CLAMP_TO_EDGE,[Go]:n.MIRRORED_REPEAT},bt={[an]:n.NEAREST,[Vd]:n.NEAREST_MIPMAP_NEAREST,[wa]:n.NEAREST_MIPMAP_LINEAR,[An]:n.LINEAR,[Ml]:n.LINEAR_MIPMAP_NEAREST,[Di]:n.LINEAR_MIPMAP_LINEAR},ze={[qd]:n.NEVER,[eu]:n.ALWAYS,[Yd]:n.LESS,[jh]:n.LEQUAL,[$d]:n.EQUAL,[Qh]:n.GEQUAL,[Zd]:n.GREATER,[Kd]:n.NOTEQUAL};function tt(B,P){if(P.type===Yn&&e.has("OES_texture_float_linear")===!1&&(P.magFilter===An||P.magFilter===Ml||P.magFilter===wa||P.magFilter===Di||P.minFilter===An||P.minFilter===Ml||P.minFilter===wa||P.minFilter===Di)&&He("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(B,n.TEXTURE_WRAP_S,Le[P.wrapS]),n.texParameteri(B,n.TEXTURE_WRAP_T,Le[P.wrapT]),(B===n.TEXTURE_3D||B===n.TEXTURE_2D_ARRAY)&&n.texParameteri(B,n.TEXTURE_WRAP_R,Le[P.wrapR]),n.texParameteri(B,n.TEXTURE_MAG_FILTER,bt[P.magFilter]),n.texParameteri(B,n.TEXTURE_MIN_FILTER,bt[P.minFilter]),P.compareFunction&&(n.texParameteri(B,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(B,n.TEXTURE_COMPARE_FUNC,ze[P.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(P.magFilter===an||P.minFilter!==wa&&P.minFilter!==Di||P.type===Yn&&e.has("OES_texture_float_linear")===!1)return;if(P.anisotropy>1||i.get(P).__currentAnisotropy){let J=e.get("EXT_texture_filter_anisotropic");n.texParameterf(B,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(P.anisotropy,s.getMaxAnisotropy())),i.get(P).__currentAnisotropy=P.anisotropy}}}function st(B,P){let J=!1;B.__webglInit===void 0&&(B.__webglInit=!0,P.addEventListener("dispose",E),N(P));let le=P.source,se=d.get(le);se===void 0&&(se={},d.set(le,se));let pe=q(P);if(pe!==B.__cacheKey){se[pe]===void 0&&(se[pe]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,J=!0),se[pe].usedTimes++;let Me=se[B.__cacheKey];Me!==void 0&&(se[B.__cacheKey].usedTimes--,Me.usedTimes===0&&F(P)),B.__cacheKey=pe,B.__webglTexture=se[pe].texture}return J}function re(B,P,J){return Math.floor(Math.floor(B/J)/P)}function ge(B,P,J,le){let pe=B.updateRanges;if(pe.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,P.width,P.height,J,le,P.data);else{pe.sort((H,ie)=>H.start-ie.start);let Me=0;for(let H=1;H<pe.length;H++){let ie=pe[Me],ee=pe[H],ye=ie.start+ie.count,ue=re(ee.start,P.width,4),me=re(ie.start,P.width,4);ee.start<=ye+1&&ue===me&&re(ee.start+ee.count-1,P.width,4)===ue?ie.count=Math.max(ie.count,ee.start+ee.count-ie.start):(++Me,pe[Me]=ee)}pe.length=Me+1;let te=t.getParameter(n.UNPACK_ROW_LENGTH),ne=t.getParameter(n.UNPACK_SKIP_PIXELS),xe=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,P.width);for(let H=0,ie=pe.length;H<ie;H++){let ee=pe[H],ye=Math.floor(ee.start/4),ue=Math.ceil(ee.count/4),me=ye%P.width,Oe=Math.floor(ye/P.width),Qe=ue,ce=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,me),t.pixelStorei(n.UNPACK_SKIP_ROWS,Oe),t.texSubImage2D(n.TEXTURE_2D,0,me,Oe,Qe,ce,J,le,P.data)}B.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,te),t.pixelStorei(n.UNPACK_SKIP_PIXELS,ne),t.pixelStorei(n.UNPACK_SKIP_ROWS,xe)}}function de(B,P,J){let le=n.TEXTURE_2D;(P.isDataArrayTexture||P.isCompressedArrayTexture)&&(le=n.TEXTURE_2D_ARRAY),P.isData3DTexture&&(le=n.TEXTURE_3D);let se=st(B,P),pe=P.source;t.bindTexture(le,B.__webglTexture,n.TEXTURE0+J);let Me=i.get(pe);if(pe.version!==Me.__version||se===!0){if(t.activeTexture(n.TEXTURE0+J),(typeof ImageBitmap<"u"&&P.image instanceof ImageBitmap)===!1){let ce=ut.getPrimaries(ut.workingColorSpace),Be=P.colorSpace===Fi?null:ut.getPrimaries(P.colorSpace),Je=P.colorSpace===Fi||ce===Be?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,P.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Je)}t.pixelStorei(n.UNPACK_ALIGNMENT,P.unpackAlignment);let ne=b(P.image,!1,s.maxTextureSize);ne=ke(P,ne);let xe=r.convert(P.format,P.colorSpace),H=r.convert(P.type),ie=T(P.internalFormat,xe,H,P.normalized,P.colorSpace,P.isVideoTexture);tt(le,P);let ee,ye=P.mipmaps,ue=P.isVideoTexture!==!0,me=Me.__version===void 0||se===!0,Oe=pe.dataReady,Qe=S(P,ne);if(P.isDepthTexture)ie=x(P.format===Ui,P.type),me&&(ue?t.texStorage2D(n.TEXTURE_2D,1,ie,ne.width,ne.height):t.texImage2D(n.TEXTURE_2D,0,ie,ne.width,ne.height,0,xe,H,null));else if(P.isDataTexture)if(ye.length>0){ue&&me&&t.texStorage2D(n.TEXTURE_2D,Qe,ie,ye[0].width,ye[0].height);for(let ce=0,Be=ye.length;ce<Be;ce++)ee=ye[ce],ue?Oe&&t.texSubImage2D(n.TEXTURE_2D,ce,0,0,ee.width,ee.height,xe,H,ee.data):t.texImage2D(n.TEXTURE_2D,ce,ie,ee.width,ee.height,0,xe,H,ee.data);P.generateMipmaps=!1}else ue?(me&&t.texStorage2D(n.TEXTURE_2D,Qe,ie,ne.width,ne.height),Oe&&ge(P,ne,xe,H)):t.texImage2D(n.TEXTURE_2D,0,ie,ne.width,ne.height,0,xe,H,ne.data);else if(P.isCompressedTexture)if(P.isCompressedArrayTexture){ue&&me&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Qe,ie,ye[0].width,ye[0].height,ne.depth);for(let ce=0,Be=ye.length;ce<Be;ce++)if(ee=ye[ce],P.format!==ri)if(xe!==null)if(ue){if(Oe)if(P.layerUpdates.size>0){let Je=ou(ee.width,ee.height,P.format,P.type);for(let Te of P.layerUpdates){let vt=ee.data.subarray(Te*Je/ee.data.BYTES_PER_ELEMENT,(Te+1)*Je/ee.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ce,0,0,Te,ee.width,ee.height,1,xe,vt)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ce,0,0,0,ee.width,ee.height,ne.depth,xe,ee.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ce,ie,ee.width,ee.height,ne.depth,0,ee.data,0,0);else He("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ue?Oe&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ce,0,0,0,ee.width,ee.height,ne.depth,xe,H,ee.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ce,ie,ee.width,ee.height,ne.depth,0,xe,H,ee.data);P.layerUpdates.size>0&&P.clearLayerUpdates()}else{ue&&me&&t.texStorage2D(n.TEXTURE_2D,Qe,ie,ye[0].width,ye[0].height);for(let ce=0,Be=ye.length;ce<Be;ce++)ee=ye[ce],P.format!==ri?xe!==null?ue?Oe&&t.compressedTexSubImage2D(n.TEXTURE_2D,ce,0,0,ee.width,ee.height,xe,ee.data):t.compressedTexImage2D(n.TEXTURE_2D,ce,ie,ee.width,ee.height,0,ee.data):He("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ue?Oe&&t.texSubImage2D(n.TEXTURE_2D,ce,0,0,ee.width,ee.height,xe,H,ee.data):t.texImage2D(n.TEXTURE_2D,ce,ie,ee.width,ee.height,0,xe,H,ee.data)}else if(P.isDataArrayTexture)if(ue){if(me&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Qe,ie,ne.width,ne.height,ne.depth),Oe)if(P.layerUpdates.size>0){let ce=ou(ne.width,ne.height,P.format,P.type);for(let Be of P.layerUpdates){let Je=ne.data.subarray(Be*ce/ne.data.BYTES_PER_ELEMENT,(Be+1)*ce/ne.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Be,ne.width,ne.height,1,xe,H,Je)}P.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,xe,H,ne.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,ie,ne.width,ne.height,ne.depth,0,xe,H,ne.data);else if(P.isData3DTexture)ue?(me&&t.texStorage3D(n.TEXTURE_3D,Qe,ie,ne.width,ne.height,ne.depth),Oe&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,xe,H,ne.data)):t.texImage3D(n.TEXTURE_3D,0,ie,ne.width,ne.height,ne.depth,0,xe,H,ne.data);else if(P.isFramebufferTexture){if(me)if(ue)t.texStorage2D(n.TEXTURE_2D,Qe,ie,ne.width,ne.height);else{let ce=ne.width,Be=ne.height;for(let Je=0;Je<Qe;Je++)t.texImage2D(n.TEXTURE_2D,Je,ie,ce,Be,0,xe,H,null),ce>>=1,Be>>=1}}else if(P.isHTMLTexture){if("texElementImage2D"in n){let ce=n.canvas;if(ce.hasAttribute("layoutsubtree")||ce.setAttribute("layoutsubtree","true"),ne.parentNode!==ce){ce.appendChild(ne),f.add(P),ce.onpaint=Be=>{let Je=Be.changedElements;for(let Te of f)Je.includes(Te.image)&&(Te.needsUpdate=!0)},ce.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,ne);else{let Je=n.RGBA,Te=n.RGBA,vt=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Je,Te,vt,ne)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(ye.length>0){if(ue&&me){let ce=Xe(ye[0]);t.texStorage2D(n.TEXTURE_2D,Qe,ie,ce.width,ce.height)}for(let ce=0,Be=ye.length;ce<Be;ce++)ee=ye[ce],ue?Oe&&t.texSubImage2D(n.TEXTURE_2D,ce,0,0,xe,H,ee):t.texImage2D(n.TEXTURE_2D,ce,ie,xe,H,ee);P.generateMipmaps=!1}else if(ue){if(me){let ce=Xe(ne);t.texStorage2D(n.TEXTURE_2D,Qe,ie,ce.width,ce.height)}Oe&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,xe,H,ne)}else t.texImage2D(n.TEXTURE_2D,0,ie,xe,H,ne);w(P)&&P.mipmapsAutoUpdate===!0&&v(le),Me.__version=pe.version,P.onUpdate&&P.onUpdate(P)}B.__version=P.version}function Ce(B,P,J){if(P.image.length!==6)return;let le=st(B,P),se=P.source;t.bindTexture(n.TEXTURE_CUBE_MAP,B.__webglTexture,n.TEXTURE0+J);let pe=i.get(se);if(se.version!==pe.__version||le===!0){t.activeTexture(n.TEXTURE0+J);let Me=ut.getPrimaries(ut.workingColorSpace),te=P.colorSpace===Fi?null:ut.getPrimaries(P.colorSpace),ne=P.colorSpace===Fi||Me===te?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,P.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,P.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ne);let xe=P.isCompressedTexture||P.image[0].isCompressedTexture,H=P.image[0]&&P.image[0].isDataTexture,ie=[];for(let Te=0;Te<6;Te++)!xe&&!H?ie[Te]=b(P.image[Te],!0,s.maxCubemapSize):ie[Te]=H?P.image[Te].image:P.image[Te],ie[Te]=ke(P,ie[Te]);let ee=ie[0],ye=r.convert(P.format,P.colorSpace),ue=r.convert(P.type),me=T(P.internalFormat,ye,ue,P.normalized,P.colorSpace),Oe=P.isVideoTexture!==!0,Qe=pe.__version===void 0||le===!0,ce=se.dataReady,Be=S(P,ee);tt(n.TEXTURE_CUBE_MAP,P);let Je;if(P.isDepthTexture){if(me=x(P.format===Ui,P.type),Qe)if(Oe)t.texStorage2D(n.TEXTURE_CUBE_MAP,1,me,ee.width,ee.height);else for(let Te=0;Te<6;Te++)t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,me,ee.width,ee.height,0,ye,ue,null)}else if(xe){Oe&&Qe&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Be,me,ee.width,ee.height);for(let Te=0;Te<6;Te++){Je=ie[Te].mipmaps;for(let vt=0;vt<Je.length;vt++){let nn=Je[vt];P.format!==ri?ye!==null?Oe?ce&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Te,vt,0,0,nn.width,nn.height,ye,nn.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Te,vt,me,nn.width,nn.height,0,nn.data):He("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Oe?ce&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Te,vt,0,0,nn.width,nn.height,ye,ue,nn.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Te,vt,me,nn.width,nn.height,0,ye,ue,nn.data)}}}else{if(Je=P.mipmaps,Oe&&Qe){Je.length>0&&Be++;let Te=Xe(ie[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Be,me,Te.width,Te.height)}for(let Te=0;Te<6;Te++)if(H){Oe?ce&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,0,0,ie[Te].width,ie[Te].height,ye,ue,ie[Te].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,me,ie[Te].width,ie[Te].height,0,ye,ue,ie[Te].data);for(let vt=0;vt<Je.length;vt++){let Wi=Je[vt].image[Te].image;Oe?ce&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Te,vt+1,0,0,Wi.width,Wi.height,ye,ue,Wi.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Te,vt+1,me,Wi.width,Wi.height,0,ye,ue,Wi.data)}}else{Oe?ce&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,0,0,ye,ue,ie[Te]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,me,ye,ue,ie[Te]);for(let vt=0;vt<Je.length;vt++){let nn=Je[vt];Oe?ce&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Te,vt+1,0,0,ye,ue,nn.image[Te]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Te,vt+1,me,ye,ue,nn.image[Te])}}}w(P)&&P.mipmapsAutoUpdate===!0&&v(n.TEXTURE_CUBE_MAP),pe.__version=se.version,P.onUpdate&&P.onUpdate(P)}B.__version=P.version}function Se(B,P,J,le,se,pe){let Me=r.convert(J.format,J.colorSpace),te=r.convert(J.type),ne=T(J.internalFormat,Me,te,J.normalized,J.colorSpace),xe=i.get(P),H=i.get(J);if(H.__renderTarget=P,!xe.__hasExternalTextures){let ie=Math.max(1,P.width>>pe),ee=Math.max(1,P.height>>pe);se===n.TEXTURE_3D||se===n.TEXTURE_2D_ARRAY?t.texImage3D(se,pe,ne,ie,ee,P.depth,0,Me,te,null):t.texImage2D(se,pe,ne,ie,ee,0,Me,te,null)}t.bindFramebuffer(n.FRAMEBUFFER,B),ve(P)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,le,se,H.__webglTexture,0,St(P)):(se===n.TEXTURE_2D||se>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&se<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,le,se,H.__webglTexture,pe),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ze(B,P,J){if(n.bindRenderbuffer(n.RENDERBUFFER,B),P.depthBuffer){let le=P.depthTexture,se=le&&le.isDepthTexture?le.type:null,pe=x(P.stencilBuffer,se),Me=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;ve(P)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,St(P),pe,P.width,P.height):J?n.renderbufferStorageMultisample(n.RENDERBUFFER,St(P),pe,P.width,P.height):n.renderbufferStorage(n.RENDERBUFFER,pe,P.width,P.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Me,n.RENDERBUFFER,B)}else{let le=P.textures;for(let se=0;se<le.length;se++){let pe=le[se],Me=r.convert(pe.format,pe.colorSpace),te=r.convert(pe.type),ne=T(pe.internalFormat,Me,te,pe.normalized,pe.colorSpace);ve(P)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,St(P),ne,P.width,P.height):J?n.renderbufferStorageMultisample(n.RENDERBUFFER,St(P),ne,P.width,P.height):n.renderbufferStorage(n.RENDERBUFFER,ne,P.width,P.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Fe(B,P,J){let le=P.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,B),!(P.depthTexture&&P.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let se=i.get(P.depthTexture);se.__renderTarget=P;let pe=le?P.depthTexture.image[0]:P.depthTexture.image;(!se.__webglTexture||pe.width!==P.width||pe.height!==P.height)&&(pe.width=P.width,pe.height=P.height,P.depthTexture.needsUpdate=!0),le?fe(P.depthTexture,0):ae(P.depthTexture,0);let Me=se.__webglTexture,te=St(P),ne=le?n.TEXTURE_CUBE_MAP_POSITIVE_X+J:n.TEXTURE_2D,xe=P.depthTexture.format===Ui?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(P.depthTexture.format===Ci)ve(P)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,xe,ne,Me,0,te):n.framebufferTexture2D(n.FRAMEBUFFER,xe,ne,Me,0);else if(P.depthTexture.format===Ui)ve(P)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,xe,ne,Me,0,te):n.framebufferTexture2D(n.FRAMEBUFFER,xe,ne,Me,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function rt(B){let P=i.get(B),J=B.isWebGLCubeRenderTarget===!0;if(P.__boundDepthTexture!==B.depthTexture){let le=B.depthTexture;if(P.__depthDisposeCallback&&P.__depthDisposeCallback(),le){let se=()=>{delete P.__boundDepthTexture,delete P.__depthDisposeCallback,le.removeEventListener("dispose",se)};le.addEventListener("dispose",se),P.__depthDisposeCallback=se}P.__boundDepthTexture=le}if(B.depthTexture&&!P.__autoAllocateDepthBuffer)if(J)for(let le=0;le<6;le++)Fe(P.__webglFramebuffer[le],B,le);else B.texture.mipmaps.length>0?Fe(P.__webglFramebuffer[0],B,0):Fe(P.__webglFramebuffer,B,0);else if(J){P.__webglDepthbuffer=[];for(let le=0;le<6;le++)if(t.bindFramebuffer(n.FRAMEBUFFER,P.__webglFramebuffer[le]),P.__webglDepthbuffer[le]===void 0)P.__webglDepthbuffer[le]=n.createRenderbuffer(),Ze(P.__webglDepthbuffer[le],B,!1);else{let se=B.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,pe=P.__webglDepthbuffer[le];n.bindRenderbuffer(n.RENDERBUFFER,pe),n.framebufferRenderbuffer(n.FRAMEBUFFER,se,n.RENDERBUFFER,pe)}}else if(B.texture.mipmaps.length>0?t.bindFramebuffer(n.FRAMEBUFFER,P.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,P.__webglFramebuffer),P.__webglDepthbuffer===void 0)P.__webglDepthbuffer=n.createRenderbuffer(),Ze(P.__webglDepthbuffer,B,!1);else{let se=B.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,pe=P.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,pe),n.framebufferRenderbuffer(n.FRAMEBUFFER,se,n.RENDERBUFFER,pe)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function lt(B,P,J){let le=i.get(B);P!==void 0&&Se(le.__webglFramebuffer,B,B.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),J!==void 0&&rt(B)}function pt(B){let P=B.texture,J=i.get(B),le=i.get(P);B.addEventListener("dispose",R),N(B);let se=B.textures,pe=B.isWebGLCubeRenderTarget===!0,Me=se.length>1;if(Me||(le.__webglTexture===void 0&&(le.__webglTexture=n.createTexture()),le.__version=P.version,a.memory.textures++),pe){J.__webglFramebuffer=[];for(let te=0;te<6;te++)if(P.mipmaps.length>0){J.__webglFramebuffer[te]=[];for(let ne=0;ne<P.mipmaps.length;ne++)J.__webglFramebuffer[te][ne]=n.createFramebuffer()}else J.__webglFramebuffer[te]=n.createFramebuffer()}else{if(P.mipmaps.length>0){J.__webglFramebuffer=[];for(let te=0;te<P.mipmaps.length;te++)J.__webglFramebuffer[te]=n.createFramebuffer()}else J.__webglFramebuffer=n.createFramebuffer();if(Me)for(let te=0,ne=se.length;te<ne;te++){let xe=i.get(se[te]);xe.__webglTexture===void 0&&(xe.__webglTexture=n.createTexture(),a.memory.textures++)}if(B.samples>0&&ve(B)===!1){J.__webglMultisampledFramebuffer=n.createFramebuffer(),J.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let te=0;te<se.length;te++){let ne=se[te];J.__webglColorRenderbuffer[te]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,J.__webglColorRenderbuffer[te]);let xe=r.convert(ne.format,ne.colorSpace),H=r.convert(ne.type),ie=T(ne.internalFormat,xe,H,ne.normalized,ne.colorSpace,B.isXRRenderTarget===!0),ee=St(B);n.renderbufferStorageMultisample(n.RENDERBUFFER,ee,ie,B.width,B.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+te,n.RENDERBUFFER,J.__webglColorRenderbuffer[te])}n.bindRenderbuffer(n.RENDERBUFFER,null),B.depthBuffer&&(J.__webglDepthRenderbuffer=n.createRenderbuffer(),Ze(J.__webglDepthRenderbuffer,B,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(pe){t.bindTexture(n.TEXTURE_CUBE_MAP,le.__webglTexture),tt(n.TEXTURE_CUBE_MAP,P);for(let te=0;te<6;te++)if(P.mipmaps.length>0)for(let ne=0;ne<P.mipmaps.length;ne++)Se(J.__webglFramebuffer[te][ne],B,P,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+te,ne);else Se(J.__webglFramebuffer[te],B,P,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0);w(P)?v(n.TEXTURE_CUBE_MAP):P.mipmaps.length>0&&n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_MAX_LEVEL,P.mipmaps.length-1),t.unbindTexture()}else if(Me){for(let te=0,ne=se.length;te<ne;te++){let xe=se[te],H=i.get(xe),ie=n.TEXTURE_2D;(B.isWebGL3DRenderTarget||B.isWebGLArrayRenderTarget)&&(ie=B.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ie,H.__webglTexture),tt(ie,xe),Se(J.__webglFramebuffer,B,xe,n.COLOR_ATTACHMENT0+te,ie,0),w(xe)&&v(ie)}t.unbindTexture()}else{let te=n.TEXTURE_2D;if((B.isWebGL3DRenderTarget||B.isWebGLArrayRenderTarget)&&(te=B.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(te,le.__webglTexture),tt(te,P),P.mipmaps.length>0)for(let ne=0;ne<P.mipmaps.length;ne++)Se(J.__webglFramebuffer[ne],B,P,n.COLOR_ATTACHMENT0,te,ne);else Se(J.__webglFramebuffer,B,P,n.COLOR_ATTACHMENT0,te,0);w(P)?v(te):P.mipmaps.length>0&&n.texParameteri(te,n.TEXTURE_MAX_LEVEL,P.mipmaps.length-1),t.unbindTexture()}B.depthBuffer&&rt(B)}function Y(B){let P=B.textures;for(let J=0,le=P.length;J<le;J++){let se=P[J];if(w(se)&&se.mipmapsAutoUpdate===!0){let pe=_(B),Me=i.get(se).__webglTexture;t.bindTexture(pe,Me),v(pe),t.unbindTexture()}}}let $t=[];function it(B){if(B.samples>0){if(ve(B)===!1){let P=B.textures,J=B.width,le=B.height,se=n.COLOR_BUFFER_BIT,pe=B.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Me=i.get(B),te=P.length>1;if(te)for(let xe=0;xe<P.length;xe++)t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+xe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+xe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Me.__webglMultisampledFramebuffer),B.texture.mipmaps.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Me.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Me.__webglFramebuffer);for(let xe=0;xe<P.length;xe++){if(B.resolveDepthBuffer&&(B.depthBuffer&&(se|=n.DEPTH_BUFFER_BIT),B.stencilBuffer&&B.resolveStencilBuffer&&(se|=n.STENCIL_BUFFER_BIT)),te){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Me.__webglColorRenderbuffer[xe]);let H=i.get(P[xe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,H,0)}n.blitFramebuffer(0,0,J,le,0,0,J,le,se,n.NEAREST),l===!0&&($t.length=0,$t.push(n.COLOR_ATTACHMENT0+xe),B.depthBuffer&&B.storeMultisampledDepthBuffer===!1&&$t.push(pe),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,$t))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),te)for(let xe=0;xe<P.length;xe++){t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+xe,n.RENDERBUFFER,Me.__webglColorRenderbuffer[xe]);let H=i.get(P[xe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+xe,n.TEXTURE_2D,H,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Me.__webglMultisampledFramebuffer)}else if(B.depthBuffer&&B.storeMultisampledDepthBuffer===!1&&l){let P=B.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[P])}}}function St(B){return Math.min(s.maxSamples,B.samples)}function ve(B){let P=i.get(B);return B.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&P.__useRenderToTexture!==!1}function Vt(B){let P=a.render.frame;h.get(B)!==P&&(h.set(B,P),B.update())}function ke(B,P){let J=B.colorSpace,le=B.format,se=B.type;return B.isCompressedTexture===!0||B.isVideoTexture===!0||J!==Yr&&J!==Fi&&(ut.getTransfer(J)===_t?(le!==ri||se!==In)&&He("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ge("WebGLTextures: Unsupported texture color space:",J)),P}function Xe(B){return typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement?(c.width=B.naturalWidth||B.width,c.height=B.naturalHeight||B.height):typeof VideoFrame<"u"&&B instanceof VideoFrame?(c.width=B.displayWidth,c.height=B.displayHeight):(c.width=B.width,c.height=B.height),c}this.allocateTextureUnit=Z,this.resetTextureUnits=z,this.getTextureUnits=G,this.setTextureUnits=$,this.setTexture2D=ae,this.setTexture2DArray=oe,this.setTexture3D=Ee,this.setTextureCube=fe,this.rebindTextures=lt,this.setupRenderTarget=pt,this.updateRenderTargetMipmap=Y,this.updateMultisampleRenderTarget=it,this.setupDepthRenderbuffer=rt,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=ve,this.dispose=C}function lM(n,e){function t(i,s=Fi){let r,a=ut.getTransfer(s);if(i===In)return n.UNSIGNED_BYTE;if(i===Sl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Tl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===$h)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Zh)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===qh)return n.BYTE;if(i===Yh)return n.SHORT;if(i===_r)return n.UNSIGNED_SHORT;if(i===bl)return n.INT;if(i===ii)return n.UNSIGNED_INT;if(i===Yn)return n.FLOAT;if(i===si)return n.HALF_FLOAT;if(i===Kh)return n.ALPHA;if(i===Jh)return n.RGB;if(i===ri)return n.RGBA;if(i===Ci)return n.DEPTH_COMPONENT;if(i===Ui)return n.DEPTH_STENCIL;if(i===wl)return n.RED;if(i===El)return n.RED_INTEGER;if(i===rs)return n.RG;if(i===Al)return n.RG_INTEGER;if(i===Rl)return n.RGBA_INTEGER;if(i===Ea||i===Aa||i===Ra||i===Ca)if(a===_t)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Ea)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Aa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ra)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ca)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Ea)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Aa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ra)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ca)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Cl||i===Pl||i===Il||i===Ll)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Cl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Pl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Il)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ll)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Nl||i===Dl||i===Ul||i===Fl||i===Ol||i===Pa||i===Bl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Nl||i===Dl)return a===_t?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Ul)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Fl)return r.COMPRESSED_R11_EAC;if(i===Ol)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Pa)return r.COMPRESSED_RG11_EAC;if(i===Bl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===kl||i===zl||i===Hl||i===Vl||i===Gl||i===Wl||i===Xl||i===ql||i===Yl||i===$l||i===Zl||i===Kl||i===Jl||i===jl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===kl)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===zl)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Hl)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Vl)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Gl)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Wl)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Xl)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===ql)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Yl)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===$l)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Zl)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Kl)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Jl)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===jl)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ql||i===ec||i===tc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Ql)return a===_t?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ec)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===tc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===nc||i===ic||i===Ia||i===sc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===nc)return r.COMPRESSED_RED_RGTC1_EXT;if(i===ic)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ia)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===sc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ps?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var cM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,hM=`
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

}`,gu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new oa(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new qn({vertexShader:cM,fragmentShader:hM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ke(new Xn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},xu=class extends ci{constructor(e,t){super();let i=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,f=null,u=null,d=null,m=null,y=typeof XRWebGLBinding<"u",p=new gu,g={},b=t.getContextAttributes(),w=null,v=null,_=[],T=[],x=new he,S=null,N=null,M=new jt;M.viewport=new Lt;let E=new jt;E.viewport=new Lt;let R=[M,E],I=new gl,A=null,C=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let ae=_[q];return ae===void 0&&(ae=new lr,_[q]=ae),ae.getTargetRaySpace()},this.getControllerGrip=function(q){let ae=_[q];return ae===void 0&&(ae=new lr,_[q]=ae),ae.getGripSpace()},this.getHand=function(q){let ae=_[q];return ae===void 0&&(ae=new lr,_[q]=ae),ae.getHandSpace()};function U(q){let ae=T.indexOf(q.inputSource);if(ae===-1)return;let oe=_[ae];oe!==void 0&&(oe.update(q.inputSource,q.frame,c||a),oe.dispatchEvent({type:q.type,data:q.inputSource}))}function F(){s.removeEventListener("select",U),s.removeEventListener("selectstart",U),s.removeEventListener("selectend",U),s.removeEventListener("squeeze",U),s.removeEventListener("squeezestart",U),s.removeEventListener("squeezeend",U),s.removeEventListener("end",F),s.removeEventListener("inputsourceschange",k);for(let q=0;q<_.length;q++){let ae=T[q];ae!==null&&(T[q]=null,_[q].disconnect(ae))}A=null,C=null,p.reset();for(let q in g)delete g[q];if(e.setRenderTarget(w),d=null,u=null,f=null,s=null,v=null,Z.stop(),i.isPresenting=!1,e.setPixelRatio(S),e.setSize(x.width,x.height,!1),N!==null){let q=N.camera;q.fov=N.fov,q.zoom=N.zoom,q.updateProjectionMatrix(),N=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,i.isPresenting===!0&&He("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,i.isPresenting===!0&&He("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return f===null&&y&&(f=new XRWebGLBinding(s,t)),f},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(w=e.getRenderTarget(),s.addEventListener("select",U),s.addEventListener("selectstart",U),s.addEventListener("selectend",U),s.addEventListener("squeeze",U),s.addEventListener("squeezestart",U),s.addEventListener("squeezeend",U),s.addEventListener("end",F),s.addEventListener("inputsourceschange",k),b.xrCompatible!==!0&&await t.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(x),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let oe=null,Ee=null,fe=null;b.depth&&(fe=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,oe=b.stencil?Ui:Ci,Ee=b.stencil?Ps:ii);let Le={colorFormat:t.RGBA8,depthFormat:fe,scaleFactor:r};f=this.getBinding(),u=f.createProjectionLayer(Le),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),v=new Bn(u.textureWidth,u.textureHeight,{format:ri,type:In,depthTexture:new Ni(u.textureWidth,u.textureHeight,Ee,void 0,void 0,void 0,void 0,void 0,void 0,oe),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let oe={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,oe),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),v=new Bn(d.framebufferWidth,d.framebufferHeight,{format:ri,type:In,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Z.setContext(s),Z.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function k(q){for(let ae=0;ae<q.removed.length;ae++){let oe=q.removed[ae],Ee=T.indexOf(oe);Ee>=0&&(T[Ee]=null,_[Ee].disconnect(oe))}for(let ae=0;ae<q.added.length;ae++){let oe=q.added[ae],Ee=T.indexOf(oe);if(Ee===-1){for(let Le=0;Le<_.length;Le++)if(Le>=T.length){T.push(oe),Ee=Le;break}else if(T[Le]===null){T[Le]=oe,Ee=Le;break}if(Ee===-1)break}let fe=_[Ee];fe&&fe.connect(oe)}}function D(q,ae){ae===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(ae.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let ae=q.near,oe=q.far;p.texture!==null&&(p.depthNear>0&&(ae=p.depthNear),p.depthFar>0&&(oe=p.depthFar)),I.near=E.near=M.near=ae,I.far=E.far=M.far=oe,(A!==I.near||C!==I.far)&&(s.updateRenderState({depthNear:I.near,depthFar:I.far}),A=I.near,C=I.far),I.layers.mask=q.layers.mask|6,M.layers.mask=I.layers.mask&-5,E.layers.mask=I.layers.mask&-3;let Ee=q.parent,fe=I.cameras;D(I,Ee);for(let Le=0;Le<fe.length;Le++)D(fe[Le],Ee);I.projectionMatrix.copy(M.projectionMatrix),I.projectionMatrixInverse.copy(M.projectionMatrixInverse),N===null&&q.isPerspectiveCamera&&(N={camera:q,fov:q.fov,zoom:q.zoom}),z(q,I,Ee)};function z(q,ae,oe){oe===null?q.matrix.copy(ae.matrixWorld):(q.matrix.copy(oe.matrixWorld),q.matrix.invert(),q.matrix.multiply(ae.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(ae.projectionMatrix),q.projectionMatrixInverse.copy(ae.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Xo*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return I},this.getFoveation=function(){if(!(u===null&&d===null))return l},this.setFoveation=function(q){l=q,u!==null&&(u.fixedFoveation=q),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=q)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(I)},this.getCameraTexture=function(q){return g[q]};let G=null;function $(q,ae){if(h=ae.getViewerPose(c||a),m=ae,h!==null){let oe=h.views;d!==null&&(e.setRenderTargetFramebuffer(v,d.framebuffer),e.setRenderTarget(v));let Ee=!1;oe.length!==I.cameras.length&&(I.cameras.length=0,Ee=!0);for(let ze=0;ze<oe.length;ze++){let tt=oe[ze],st=null;if(d!==null)st=d.getViewport(tt);else{let ge=f.getViewSubImage(u,tt);st=ge.viewport,ze===0&&(e.setRenderTargetTextures(v,ge.colorTexture,ge.depthStencilTexture),e.setRenderTarget(v))}let re=R[ze];re===void 0&&(re=new jt,re.layers.enable(ze),re.viewport=new Lt,R[ze]=re),re.matrix.fromArray(tt.transform.matrix),re.matrix.decompose(re.position,re.quaternion,re.scale),re.projectionMatrix.fromArray(tt.projectionMatrix),re.projectionMatrixInverse.copy(re.projectionMatrix).invert(),re.viewport.set(st.x,st.y,st.width,st.height),ze===0&&(I.matrix.copy(re.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),Ee===!0&&I.cameras.push(re)}let fe=s.enabledFeatures;if(fe&&fe.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){f=i.getBinding();let ze=f.getDepthInformation(oe[0]);ze&&ze.isValid&&ze.texture&&p.init(ze,s.renderState)}if(fe&&fe.includes("camera-access")&&y){e.state.unbindTexture(),f=i.getBinding();for(let ze=0;ze<oe.length;ze++){let tt=oe[ze].camera;if(tt){let st=g[tt];st||(st=new oa,g[tt]=st);let re=f.getCameraImage(tt);st.sourceTexture=re}}}}for(let oe=0;oe<_.length;oe++){let Ee=T[oe],fe=_[oe];Ee!==null&&fe!==void 0&&fe.update(Ee,ae,c||a)}G&&G(q,ae),ae.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ae}),m=null}let Z=new Dp;Z.setAnimationLoop($),this.setAnimationLoop=function(q){G=q},this.dispose=function(){}}},uM=new mt,Wp=new qe;Wp.set(-1,0,0,0,1,0,0,0,1);function fM(n,e){function t(p,g){p.matrixAutoUpdate===!0&&p.updateMatrix(),g.value.copy(p.matrix)}function i(p,g){g.color.getRGB(p.fogColor.value,su(n)),g.isFog?(p.fogNear.value=g.near,p.fogFar.value=g.far):g.isFogExp2&&(p.fogDensity.value=g.density)}function s(p,g,b,w,v){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(p,g):g.isMeshLambertMaterial?(r(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(p,g),f(p,g)):g.isMeshPhongMaterial?(r(p,g),h(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(p,g),u(p,g),g.isMeshPhysicalMaterial&&d(p,g,v)):g.isMeshMatcapMaterial?(r(p,g),m(p,g)):g.isMeshDepthMaterial?r(p,g):g.isMeshDistanceMaterial?(r(p,g),y(p,g)):g.isMeshNormalMaterial?r(p,g):g.isLineBasicMaterial?(a(p,g),g.isLineDashedMaterial&&o(p,g)):g.isPointsMaterial?l(p,g,b,w):g.isSpriteMaterial?c(p,g):g.isShadowMaterial?(p.color.value.copy(g.color),p.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(p,g){p.opacity.value=g.opacity,g.color&&p.diffuse.value.copy(g.color),g.emissive&&p.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(p.map.value=g.map,t(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.bumpMap&&(p.bumpMap.value=g.bumpMap,t(g.bumpMap,p.bumpMapTransform),p.bumpScale.value=g.bumpScale,g.side===pn&&(p.bumpScale.value*=-1)),g.normalMap&&(p.normalMap.value=g.normalMap,t(g.normalMap,p.normalMapTransform),p.normalScale.value.copy(g.normalScale),g.side===pn&&p.normalScale.value.negate()),g.displacementMap&&(p.displacementMap.value=g.displacementMap,t(g.displacementMap,p.displacementMapTransform),p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias),g.emissiveMap&&(p.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,p.emissiveMapTransform)),g.specularMap&&(p.specularMap.value=g.specularMap,t(g.specularMap,p.specularMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest);let b=e.get(g),w=b.envMap,v=b.envMapRotation;w&&(p.envMap.value=w,p.envMapRotation.value.setFromMatrix4(uM.makeRotationFromEuler(v)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(Wp),p.reflectivity.value=g.reflectivity,p.ior.value=g.ior,p.refractionRatio.value=g.refractionRatio),g.lightMap&&(p.lightMap.value=g.lightMap,p.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,p.lightMapTransform)),g.aoMap&&(p.aoMap.value=g.aoMap,p.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,p.aoMapTransform))}function a(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,g.map&&(p.map.value=g.map,t(g.map,p.mapTransform))}function o(p,g){p.dashSize.value=g.dashSize,p.totalSize.value=g.dashSize+g.gapSize,p.scale.value=g.scale}function l(p,g,b,w){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.size.value=g.size*b,p.scale.value=w*.5,g.map&&(p.map.value=g.map,t(g.map,p.uvTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function c(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.rotation.value=g.rotation,g.map&&(p.map.value=g.map,t(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function h(p,g){p.specular.value.copy(g.specular),p.shininess.value=Math.max(g.shininess,1e-4)}function f(p,g){g.gradientMap&&(p.gradientMap.value=g.gradientMap)}function u(p,g){p.metalness.value=g.metalness,g.metalnessMap&&(p.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,p.metalnessMapTransform)),p.roughness.value=g.roughness,g.roughnessMap&&(p.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,p.roughnessMapTransform)),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)}function d(p,g,b){p.ior.value=g.ior,g.diffuseRoughness>0&&(p.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap&&(p.diffuseRoughnessMap.value=g.diffuseRoughnessMap,t(g.diffuseRoughnessMap,p.diffuseRoughnessMapTransform))),g.sheen>0&&(p.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),p.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(p.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,p.sheenColorMapTransform)),g.sheenRoughnessMap&&(p.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,p.sheenRoughnessMapTransform))),g.clearcoat>0&&(p.clearcoat.value=g.clearcoat,p.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(p.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,p.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(p.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===pn&&p.clearcoatNormalScale.value.negate())),g.dispersion>0&&(p.dispersion.value=g.dispersion),g.retroreflectivity>0&&(p.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(p.iridescence.value=g.iridescence,p.iridescenceIOR.value=g.iridescenceIOR,p.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,p.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap&&(p.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,p.iridescenceMapTransform)),g.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),g.transmission>0&&(p.transmission.value=g.transmission,p.transmissionSamplerMap.value=b.texture,p.transmissionSamplerSize.value.set(b.width,b.height),g.transmissionMap&&(p.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,p.transmissionMapTransform)),p.thickness.value=g.thickness,g.thicknessMap&&(p.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=g.attenuationDistance,p.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(p.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(p.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=g.specularIntensity,p.specularColor.value.copy(g.specularColor),g.specularColorMap&&(p.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,p.specularColorMapTransform)),g.specularIntensityMap&&(p.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,p.specularIntensityMapTransform))}function m(p,g){g.matcap&&(p.matcap.value=g.matcap)}function y(p,g){let b=e.get(g).light;p.referencePosition.value.setFromMatrixPosition(b.matrixWorld),p.nearDistance.value=b.shadow.camera.near,p.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function dM(n,e,t,i){let s={},r={};function a(b,w){let v=w.program;i.uniformBlockBinding(b,v,s[b.id])}function o(b,w){let v=s[b.id];v===void 0&&(m(b),v=l(b),s[b.id]=v,b.addEventListener("dispose",p));let _=w.program;i.updateUBOMapping(b,_);let T=e.render.frame;r[b.id]!==T&&(c(b),r[b.id]=T)}function l(b){let w=n.createBuffer(),v=b.__size,_=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,w),n.bufferData(n.UNIFORM_BUFFER,v,_),n.bindBuffer(n.UNIFORM_BUFFER,null),w}function c(b){let w=s[b.id],v=b.uniforms,_=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,w);for(let T=0,x=v.length;T<x;T++){let S=v[T];if(Array.isArray(S))for(let N=0,M=S.length;N<M;N++)h(S[N],T,N,_);else h(S,T,0,_)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function h(b,w,v,_){if(u(b,w,v,_)===!0){let T=b.__offset,x=b.value;if(Array.isArray(x)){let S=0;for(let N=0;N<x.length;N++){let M=x[N],E=y(M,!0);f(M,b.__data,S),S+=E.storage/Float32Array.BYTES_PER_ELEMENT}}else f(x,b.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,T,b.__data)}}function f(b,w,v){typeof b=="number"||typeof b=="boolean"?w[v]=b:b.isMatrix3?(w[v]=b.elements[0],w[v+1]=b.elements[1],w[v+2]=b.elements[2],w[v+3]=0,w[v+4]=b.elements[3],w[v+5]=b.elements[4],w[v+6]=b.elements[5],w[v+7]=0,w[v+8]=b.elements[6],w[v+9]=b.elements[7],w[v+10]=b.elements[8],w[v+11]=0):ArrayBuffer.isView(b)?w.set(b.subarray(0,w.length-v),v):b.toArray(w,v)}function u(b,w,v,_){let T=b.value,x=w+"_"+v;if(Array.isArray(T)){_[x]===void 0&&(_[x]=[]);let S=_[x],N=!1;for(let M=0;M<T.length;M++)d(T[M],S,M)===!0&&(N=!0);return N}return d(T,_,x)}function d(b,w,v){if(w[v]===void 0)return typeof b=="number"||typeof b=="boolean"?w[v]=b:ArrayBuffer.isView(b)?w[v]=b.slice():w[v]=b.clone(),!0;{let _=w[v];if(typeof b=="number"||typeof b=="boolean"){if(_!==b)return w[v]=b,!0}else{if(ArrayBuffer.isView(b))return!0;if(_.equals(b)===!1)return _.copy(b),!0}}return!1}function m(b){let w=b.uniforms,v=0,_=16;for(let x=0,S=w.length;x<S;x++){let N=Array.isArray(w[x])?w[x]:[w[x]];for(let M=0,E=N.length;M<E;M++){let R=N[M],I=Array.isArray(R.value)?R.value:[R.value],A=Array.isArray(w[x])||Array.isArray(R.value),C=v;for(let F=0,k=I.length;F<k;F++){let D=I[F],z=y(D,A),G=v%_,$=G%z.boundary,Z=G+$;v+=$,Z!==0&&_-Z<z.storage&&(v+=_-Z),F===0&&(C=v),v+=z.storage}let U=R.type==="int"?Int32Array:R.type==="uint"?Uint32Array:Float32Array;R.__data=new U((v-C)/Float32Array.BYTES_PER_ELEMENT),R.__offset=C}}let T=v%_;return T>0&&(v+=_-T),b.__size=v,b.__cache={},this}function y(b,w){let v={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(v.boundary=4,v.storage=4):b.isVector2?(v.boundary=8,v.storage=8):b.isVector3||b.isColor?(v.boundary=16,v.storage=12):b.isVector4?(v.boundary=16,v.storage=16):b.isMatrix3?(v.boundary=16,v.storage=48):b.isMatrix4?(v.boundary=16,v.storage=64):b.isTexture?He("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(b)?(v.boundary=16,v.storage=b.byteLength):He("WebGLRenderer: Unsupported uniform value type.",b),w===!0&&(v.boundary=16,v.storage=Math.ceil(v.storage/16)*16),v}function p(b){let w=b.target;w.removeEventListener("dispose",p),n.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function g(){for(let b in s)n.deleteBuffer(s[b]);s={},r={}}return{bind:a,update:o,dispose:g}}var pM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),xi=null;function mM(){return xi===null&&(xi=new sa(pM,16,16,rs,si),xi.name="DFG_LUT",xi.minFilter=An,xi.magFilter=An,xi.wrapS=li,xi.wrapT=li,xi.generateMipmaps=!1,xi.needsUpdate=!0),xi}var Ua=class{constructor(e={}){let{canvas:t=Jd(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:u=!1,outputBufferType:d=In}=e;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=a;let y=d,p=new Set([Rl,Al,El]),g=new Set([In,ii,_r,Ps,Sl,Tl]),b=new Uint32Array(4),w=new Int32Array(4),v={textures:[],min:[],max:[],resolution:[]},_=null,T=null,x=[],S=[],N=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=gi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let M=this,E=!1,R=null,I=null,A=null,C=null;this._outputColorSpace=fn;let U=0,F=0,k=null,D=-1,z=null,G=new Lt,$=new Lt,Z=null,q=new Ve(0),ae=0,oe=t.width,Ee=t.height,fe=1,Le=null,bt=null,ze=new Lt(0,0,oe,Ee),tt=new Lt(0,0,oe,Ee),st=!1,re=new ji,ge=new Ko,de=!1,Ce=!1,Se=new mt,Ze=new V,Fe=new Lt,rt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},lt=!1;function pt(){return k===null?fe:1}let Y=i;function $t(L,W){return t.getContext(L,W)}let it,St,ve,Vt,ke,Xe,B,P,J,le,se,pe,Me,te,ne,xe,H,ie,ee,ye,ue,me,Oe;try{let L={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",Be,!1),t.addEventListener("webglcontextrestored",Je,!1),t.addEventListener("webglcontextcreationerror",Te,!1),Y===null){let W="webgl2";if(Y=$t(W,L),Y===null)throw $t(W)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Qe()}catch(L){throw t.removeEventListener("webglcontextlost",Be,!1),t.removeEventListener("webglcontextrestored",Je,!1),t.removeEventListener("webglcontextcreationerror",Te,!1),Ge("WebGLRenderer: "+L.message),L}function Qe(){it=new E_(Y),it.init(),ue=new lM(Y,it),St=new m_(Y,it,e,ue),ve=new aM(Y,it),St.reversedDepthBuffer&&u&&ve.buffers.depth.setReversed(!0),I=Y.createFramebuffer(),A=Y.createFramebuffer(),C=Y.createFramebuffer(),Vt=new C_(Y),ke=new qv,Xe=new oM(Y,it,ve,ke,St,ue,Vt),B=new w_(M),P=new Ig(Y),me=new d_(Y,P),J=new A_(Y,P,Vt,me),le=new I_(Y,J,P,me,Vt),ie=new P_(Y,St,Xe),ne=new g_(ke),se=new Xv(M,B,it,St,me,ne),pe=new fM(M,ke),Me=new $v,te=new eM(it),H=new f_(M,B,ve,le,m,l),xe=new rM(M,le,St),Oe=new dM(Y,Vt,St,ve),ee=new p_(Y,it,Vt),ye=new R_(Y,it,Vt),Vt.programs=se.programs,M.capabilities=St,M.extensions=it,M.properties=ke,M.renderLists=Me,M.shadowMap=xe,M.state=ve,M.info=Vt}y!==In&&(N=new N_(y,t.width,t.height,o,s,r));let ce=new xu(M,Y);this.xr=ce,this.getContext=function(){return Y},this.getContextAttributes=function(){return Y.getContextAttributes()},this.forceContextLoss=function(){let L=it.get("WEBGL_lose_context");L&&L.loseContext()},this.forceContextRestore=function(){let L=it.get("WEBGL_lose_context");L&&L.restoreContext()},this.getPixelRatio=function(){return fe},this.setPixelRatio=function(L){L!==void 0&&(fe=L,this.setSize(oe,Ee,!1))},this.getSize=function(L){return L.set(oe,Ee)},this.setSize=function(L,W,Q=!0){if(ce.isPresenting){He("WebGLRenderer: Can't change size while VR device is presenting.");return}oe=L,Ee=W,t.width=Math.floor(L*fe),t.height=Math.floor(W*fe),Q===!0&&(t.style.width=L+"px",t.style.height=W+"px"),N!==null&&N.setSize(t.width,t.height),this.setViewport(0,0,L,W)},this.getDrawingBufferSize=function(L){return L.set(oe*fe,Ee*fe).floor()},this.setDrawingBufferSize=function(L,W,Q){oe=L,Ee=W,fe=Q,t.width=Math.floor(L*Q),t.height=Math.floor(W*Q),this.setViewport(0,0,L,W)},this.setEffects=function(L){if(y===In){Ge("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(L){for(let W=0;W<L.length;W++)if(L[W].isOutputPass===!0){He("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}N.setEffects(L||[])},this.getCurrentViewport=function(L){return L.copy(G)},this.getViewport=function(L){return L.copy(ze)},this.setViewport=function(L,W,Q,K){L.isVector4?ze.set(L.x,L.y,L.z,L.w):ze.set(L,W,Q,K),ve.viewport(G.copy(ze).multiplyScalar(pt()).round())},this.getScissor=function(L){return L.copy(tt)},this.setScissor=function(L,W,Q,K){L.isVector4?tt.set(L.x,L.y,L.z,L.w):tt.set(L,W,Q,K),ve.scissor($.copy(tt).multiplyScalar(pt()).round())},this.getScissorTest=function(){return st},this.setScissorTest=function(L){ve.setScissorTest(st=L)},this.setOpaqueSort=function(L){Le=L},this.setTransparentSort=function(L){bt=L},this.getClearColor=function(L){return L.copy(H.getClearColor())},this.setClearColor=function(){H.setClearColor(...arguments)},this.getClearAlpha=function(){return H.getClearAlpha()},this.setClearAlpha=function(){H.setClearAlpha(...arguments)},this.clear=function(L=!0,W=!0,Q=!0){let K=0;if(L){let j=!1;if(k!==null){let be=k.texture.format;j=p.has(be)}if(j){let be=k.texture.type,Ie=g.has(be),_e=H.getClearColor(),Ae=H.getClearAlpha(),Ue=_e.r,$e=_e.g,ct=_e.b;Ie?(b[0]=Ue,b[1]=$e,b[2]=ct,b[3]=Ae,Y.clearBufferuiv(Y.COLOR,0,b)):(w[0]=Ue,w[1]=$e,w[2]=ct,w[3]=Ae,Y.clearBufferiv(Y.COLOR,0,w))}else K|=Y.COLOR_BUFFER_BIT}W&&(K|=Y.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Q&&(K|=Y.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),K!==0&&Y.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(L){L.setRenderer(this),R=L},this.dispose=function(){t.removeEventListener("webglcontextlost",Be,!1),t.removeEventListener("webglcontextrestored",Je,!1),t.removeEventListener("webglcontextcreationerror",Te,!1),H.dispose(),Me.dispose(),te.dispose(),Xe.dispose(),ke.dispose(),B.dispose(),le.dispose(),J.dispose(),me.dispose(),Oe.dispose(),se.dispose(),ce.dispose(),ce.removeEventListener("sessionstart",Pf),ce.removeEventListener("sessionend",If),ds.stop()};function Be(L){L.preventDefault(),Kr("WebGLRenderer: Context Lost."),E=!0}function Je(){Kr("WebGLRenderer: Context Restored."),E=!1;let L=Vt.autoReset,W=xe.enabled,Q=xe.autoUpdate,K=xe.needsUpdate,j=xe.type;Qe(),Vt.autoReset=L,xe.enabled=W,xe.autoUpdate=Q,xe.needsUpdate=K,xe.type=j}function Te(L){Ge("WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function vt(L){let W=L.target;W.removeEventListener("dispose",vt),nn(W)}function nn(L){Wi(L),ke.remove(L)}function Wi(L){let W=ke.get(L).programs;W!==void 0&&(W.forEach(function(Q){se.releaseProgram(Q)}),L.isShaderMaterial&&se.releaseShaderCache(L))}this.renderBufferDirect=function(L,W,Q,K,j,be){W===null&&(W=rt);let Ie=j.isMesh&&j.matrixWorld.determinantAffine()<0,_e=mm(L,W,Q,K,j);ve.setMaterial(K,Ie);let Ae=Q.index,Ue=1;if(K.wireframe===!0){if(Ae=J.getWireframeAttribute(Q),Ae===void 0)return;Ue=2}let $e=Q.drawRange,ct=Q.attributes.position,Ne=$e.start*Ue,ht=($e.start+$e.count)*Ue;be!==null&&(Ne=Math.max(Ne,be.start*Ue),ht=Math.min(ht,(be.start+be.count)*Ue)),Ae!==null?(Ne=Math.max(Ne,0),ht=Math.min(ht,Ae.count)):ct!=null&&(Ne=Math.max(Ne,0),ht=Math.min(ht,ct.count));let Zt=ht-Ne;if(Zt<0||Zt===1/0)return;me.setup(j,K,_e,Q,Ae);let At,Tt=ee;if(Ae!==null&&(At=P.get(Ae),Tt=ye,Tt.setIndex(At)),j.isMesh)K.wireframe===!0?(ve.setLineWidth(K.wireframeLinewidth*pt()),Tt.setMode(Y.LINES)):Tt.setMode(Y.TRIANGLES);else if(j.isLine){let xn=K.linewidth;xn===void 0&&(xn=1),ve.setLineWidth(xn*pt()),j.isLineSegments?Tt.setMode(Y.LINES):j.isLineLoop?Tt.setMode(Y.LINE_LOOP):Tt.setMode(Y.LINE_STRIP)}else j.isPoints?Tt.setMode(Y.POINTS):j.isSprite&&Tt.setMode(Y.TRIANGLES);if(j.isBatchedMesh)if(it.get("WEBGL_multi_draw"))Tt.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{let xn=j._multiDrawStarts,De=j._multiDrawCounts,wn=j._multiDrawCount,yt=Ae?P.get(Ae).bytesPerElement:1,ps=ke.get(K).currentProgram.getUniforms();for(let yn=0;yn<wn;yn++)ps.setValue(Y,"_gl_DrawID",yn),Tt.render(xn[yn]/yt,De[yn])}else if(j.isInstancedMesh)Tt.renderInstances(Ne,Zt,j.count);else if(Q.isInstancedBufferGeometry){let xn=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,De=Math.min(Q.instanceCount,xn);Tt.renderInstances(Ne,Zt,De)}else Tt.render(Ne,Zt)};function Cf(L,W,Q,K){R!==null&&L.isNodeMaterial&&R.setObject(K,L),de===!0&&ne.setState(L,Q,!1),L.transparent===!0&&L.side===mi&&L.forceSinglePass===!1?(L.side=pn,L.needsUpdate=!0,Lr(L,W,K),L.side=ss,L.needsUpdate=!0,Lr(L,W,K),L.side=mi):Lr(L,W,K)}this.compile=function(L,W,Q=null){Q===null&&(Q=L),R!==null&&R.renderStart(L,W,Q),T=te.get(Q),T.init(W),S.push(T),Q.traverseVisible(function(j){j.isLight&&j.layers.test(W.layers)&&(T.pushLight(j),j.castShadow&&T.pushShadow(j))}),L!==Q&&L.traverseVisible(function(j){j.isLight&&j.layers.test(W.layers)&&(T.pushLight(j),j.castShadow&&T.pushShadow(j))}),T.setupLights(),R!==null&&R.updateLights(T.state.lightsArray),Ce=this.localClippingEnabled,de=ne.init(this.clippingPlanes,Ce),de===!0&&ne.setGlobalState(this.clippingPlanes,W),R!==null&&xe.render(T.state.shadowsArray,Q,W);let K=new Set;return L.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;let be=j.material;if(be)if(Array.isArray(be))for(let Ie=0;Ie<be.length;Ie++){let _e=be[Ie];Cf(_e,Q,W,j),K.add(_e)}else Cf(be,Q,W,j),K.add(be)}),T=S.pop(),R!==null&&R.renderEnd(),K},this.compileAsync=function(L,W,Q=null){let K=this.compile(L,W,Q);return new Promise(j=>{function be(){if(K.forEach(function(Ie){let Ae=ke.get(Ie).currentProgram;(Ae===void 0||Ae.isReady())&&K.delete(Ie)}),K.size===0){j(L);return}setTimeout(be,10)}it.get("KHR_parallel_shader_compile")!==null?be():setTimeout(be,10)})};let Yc=null;function dm(L){Yc&&Yc(L)}function Pf(){ds.stop()}function If(){ds.start()}let ds=new Dp;ds.setAnimationLoop(dm),typeof self<"u"&&ds.setContext(self),this.setAnimationLoop=function(L){Yc=L,ce.setAnimationLoop(L),L===null?ds.stop():ds.start()},ce.addEventListener("sessionstart",Pf),ce.addEventListener("sessionend",If),this.render=function(L,W){if(W!==void 0&&W.isCamera!==!0){Ge("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;R!==null&&R.renderStart(L,W);let Q=ce.enabled===!0&&ce.isPresenting===!0,K=N!==null&&(k===null||Q)&&N.begin(M,k);if(L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),ce.enabled===!0&&ce.isPresenting===!0&&(N===null||N.isCompositing()===!1)&&(ce.cameraAutoUpdate===!0&&ce.updateCamera(W),W=ce.getCamera()),L.isScene===!0&&L.onBeforeRender(M,L,W,k),T=te.get(L,S.length),T.init(W),T.state.textureUnits=Xe.getTextureUnits(),S.push(T),Se.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),W.isArrayCamera?ge.setFromArrayCamera(W):re.setFromProjectionMatrix(Se,Gn,W.reversedDepth),Ce=this.localClippingEnabled,de=ne.init(this.clippingPlanes,Ce),_=Me.get(L,x.length),_.init(),x.push(_),this.info.render.frame++,ce.enabled===!0&&ce.isPresenting===!0){let Ie=M.xr.getDepthSensingMesh();Ie!==null&&$c(Ie,W,-1/0,M.sortObjects)}$c(L,W,0,M.sortObjects),_.finish(),R!==null&&R.updateLights(T.state.lightsArray),M.sortObjects===!0&&_.sort(Le,bt),lt=ce.enabled===!1||ce.isPresenting===!1||ce.hasDepthSensing()===!1,lt&&H.addToRenderList(_,L),this.info.autoReset===!0&&this.info.reset(),de===!0&&ne.beginShadows();let j=T.state.shadowsArray;if(xe.render(j,L,W),de===!0&&ne.endShadows(),(K&&N.hasRenderPass())===!1){let Ie=_.opaque,_e=_.transmissive;if(T.setupLights(),W.isArrayCamera){let Ae=W.cameras;if(_e.length>0)for(let Ue=0,$e=Ae.length;Ue<$e;Ue++){let ct=Ae[Ue];Nf(Ie,_e,L,ct)}lt&&H.render(L);for(let Ue=0,$e=Ae.length;Ue<$e;Ue++){let ct=Ae[Ue];Lf(_,L,ct,ct.viewport)}}else _e.length>0&&Nf(Ie,_e,L,W),lt&&H.render(L),Lf(_,L,W)}k!==null&&F===0&&(Xe.updateMultisampleRenderTarget(k),Xe.updateRenderTargetMipmap(k)),K&&N.end(M),L.isScene===!0&&L.onAfterRender(M,L,W),me.resetDefaultState(),D=-1,z=null,S.pop(),S.length>0?(T=S[S.length-1],Xe.setTextureUnits(T.state.textureUnits),de===!0&&ne.setGlobalState(M.clippingPlanes,T.state.camera)):T=null,x.pop(),x.length>0?_=x[x.length-1]:_=null,R!==null&&R.renderEnd()};function $c(L,W,Q,K){if(L.visible===!1)return;if(L.layers.test(W.layers)){if(L.isGroup)Q=L.renderOrder;else if(L.isLOD)L.autoUpdate===!0&&L.update(W);else if(L.isLight)T.pushLight(L),L.castShadow&&T.pushShadow(L);else if(L.isSprite){let Ie=W.isArrayCamera?ge:re;if(!L.frustumCulled||L.intersectsFrustum(Ie)){K&&Fe.setFromMatrixPosition(L.matrixWorld).applyMatrix4(Se);let _e=le.update(L),Ae=L.material;Ae.visible&&_.push(L,_e,Ae,Q,Fe.z,null,W)}}else if(L.isMesh||L.isLine||L.isPoints){let Ie=W.isArrayCamera?ge:re;if(!L.frustumCulled||L.intersectsFrustum(Ie)){let _e=le.update(L),Ae=L.material;if(K&&(L.boundingSphere!==void 0?(L.boundingSphere===null&&L.computeBoundingSphere(),Fe.copy(L.boundingSphere.center)):(_e.boundingSphere===null&&_e.computeBoundingSphere(),Fe.copy(_e.boundingSphere.center)),Fe.applyMatrix4(L.matrixWorld).applyMatrix4(Se)),Array.isArray(Ae)){let Ue=_e.groups;for(let $e=0,ct=Ue.length;$e<ct;$e++){let Ne=Ue[$e],ht=Ae[Ne.materialIndex];ht&&ht.visible&&_.push(L,_e,ht,Q,Fe.z,Ne,W)}}else Ae.visible&&_.push(L,_e,Ae,Q,Fe.z,null,W)}}}let be=L.children;for(let Ie=0,_e=be.length;Ie<_e;Ie++)$c(be[Ie],W,Q,K)}function Lf(L,W,Q,K){let{opaque:j,transmissive:be,transparent:Ie}=L;T.setupLightsView(Q),de===!0&&ne.setGlobalState(M.clippingPlanes,Q),K&&ve.viewport(G.copy(K)),j.length>0&&ro(j,W,Q),be.length>0&&ro(be,W,Q),Ie.length>0&&ro(Ie,W,Q),ve.buffers.depth.setTest(!0),ve.buffers.depth.setMask(!0),ve.buffers.color.setMask(!0),ve.setPolygonOffset(!1)}function Nf(L,W,Q,K){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[K.id]===void 0){let Ne=it.has("EXT_color_buffer_half_float")||it.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[K.id]=new Bn(1,1,{generateMipmaps:!0,type:Ne?si:In,minFilter:Di,samples:Math.max(4,St.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ut.workingColorSpace})}let be=T.state.transmissionRenderTarget[K.id],Ie=K.viewport||G;be.setSize(Ie.z*M.transmissionResolutionScale,Ie.w*M.transmissionResolutionScale);let _e=M.getRenderTarget(),Ae=M.getActiveCubeFace(),Ue=M.getActiveMipmapLevel();M.setRenderTarget(be),M.getClearColor(q),ae=M.getClearAlpha(),ae<1&&M.setClearColor(16777215,.5),M.clear(),lt&&H.render(Q);let $e=M.toneMapping;M.toneMapping=gi;let ct=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),T.setupLightsView(K),de===!0&&ne.setGlobalState(M.clippingPlanes,K),ro(L,Q,K),Xe.updateMultisampleRenderTarget(be),Xe.updateRenderTargetMipmap(be),it.has("WEBGL_multisampled_render_to_texture")===!1){let Ne=!1;for(let ht=0,Zt=W.length;ht<Zt;ht++){let At=W[ht],{object:Tt,geometry:xn,material:De,group:wn}=At;if(De.side===mi&&Tt.layers.test(K.layers)){let yt=De.side;De.side=pn,De.needsUpdate=!0,Df(Tt,Q,K,xn,De,wn),De.side=yt,De.needsUpdate=!0,Ne=!0}}Ne===!0&&(Xe.updateMultisampleRenderTarget(be),Xe.updateRenderTargetMipmap(be))}M.setRenderTarget(_e,Ae,Ue),M.setClearColor(q,ae),ct!==void 0&&(K.viewport=ct),M.toneMapping=$e}function ro(L,W,Q){let K=W.isScene===!0?W.overrideMaterial:null;for(let j=0,be=L.length;j<be;j++){let Ie=L[j],{object:_e,geometry:Ae,group:Ue}=Ie,$e=Ie.material;$e.allowOverride===!0&&K!==null&&($e=K),_e.layers.test(Q.layers)&&Df(_e,W,Q,Ae,$e,Ue)}}function Df(L,W,Q,K,j,be){R!==null&&j.isNodeMaterial&&R.setObject(L,j),L.onBeforeRender(M,W,Q,K,j,be),L.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),j.onBeforeRender(M,W,Q,K,L,be),j.transparent===!0&&j.side===mi&&j.forceSinglePass===!1?(j.side=pn,j.needsUpdate=!0,M.renderBufferDirect(Q,W,K,j,L,be),j.side=ss,j.needsUpdate=!0,M.renderBufferDirect(Q,W,K,j,L,be),j.side=mi):M.renderBufferDirect(Q,W,K,j,L,be),L.onAfterRender(M,W,Q,K,j,be)}function Uf(L){let W=0;for(let Q of L)Q.texture!==null&&W++;return W}function Lr(L,W,Q){W.isScene!==!0&&(W=rt);let K=ke.get(L),j=T.state.lights,be=T.state.shadowsArray,Ie=j.state.version,_e=se.getParameters(L,j.state,be,W,Q,T.state.lightProbeGridArray),Ae=se.getProgramCacheKey(_e),Ue=K.programs;K.environment=L.isMeshStandardMaterial||L.isMeshLambertMaterial||L.isMeshPhongMaterial?W.environment:null,K.fog=W.fog;let $e=L.isMeshStandardMaterial||L.isMeshLambertMaterial&&!L.envMap||L.isMeshPhongMaterial&&!L.envMap;K.envMap=B.get(L.envMap||K.environment,$e),K.envMapRotation=K.environment!==null&&L.envMap===null?W.environmentRotation:L.envMapRotation,Ue===void 0&&(L.addEventListener("dispose",vt),Ue=new Map,K.programs=Ue,K.programVariants=new Map);let ct=Ue.get(Ae);if(ct!==void 0){if(K.currentProgram===ct&&K.lightsStateVersion===Ie)return Of(L,_e),ct}else _e.uniforms=se.getUniforms(L),R!==null&&L.isNodeMaterial&&R.build(L,Q,_e),L.onBeforeCompile(_e,M),ct=se.acquireProgram(_e,Ae),Ue.set(Ae,ct),K.uniforms=_e.uniforms;let Ne=K.uniforms;return(!L.isShaderMaterial&&!L.isRawShaderMaterial||L.clipping===!0)&&(Ne.clippingPlanes=ne.uniform),Of(L,_e),K.needsLights=xm(L),K.lightsStateVersion=Ie,K.needsLights&&(Ne.ambientLightColor.value=j.state.ambient,Ne.lightProbe.value=j.state.probe,Ne.sunLights.value=j.state.sun,Ne.sunLightShadows.value=j.state.sunShadow,Ne.directionalLights.value=j.state.directional,Ne.directionalLightShadows.value=j.state.directionalShadow,Ne.spotLights.value=j.state.spot,Ne.spotLightShadows.value=j.state.spotShadow,Ne.rectAreaLights.value=j.state.rectArea,Ne.ltc_1.value=j.state.rectAreaLTC1,Ne.ltc_2.value=j.state.rectAreaLTC2,Ne.pointLights.value=j.state.point,Ne.pointLightShadows.value=j.state.pointShadow,Ne.hemisphereLights.value=j.state.hemi,Ne.sunShadowMatrix.value=j.state.sunShadowMatrix,Ne.sunShadowCascade.value=j.state.sunShadowCascade,Ne.directionalShadowMatrix.value=j.state.directionalShadowMatrix,Ne.spotLightMatrix.value=j.state.spotLightMatrix,Ne.spotLightMap.value=j.state.spotLightMap,Ne.pointShadowMatrix.value=j.state.pointShadowMatrix),K.numLightProbeGrids=Uf(T.state.lightProbeGridArray),K.currentProgram=ct,K.uniformsList=null,ct}function pm(L,W,Q,K,j){let be=ke.get(L),Ie=be.currentProgram.id+","+K+","+j,_e=be.programVariants.get(Ie);return _e===void 0?(_e=Lr(L,W,Q),be.programVariants.set(Ie,_e)):(be.currentProgram=_e,be.uniformsList=null,be.outputColorSpace=K,be.toneMapping=j),_e}function Ff(L){if(L.uniformsList===null){let W=L.currentProgram.getUniforms();L.uniformsList=Mr.seqWithValue(W.seq,L.uniforms)}return L.uniformsList}function Of(L,W){let Q=ke.get(L);Q.outputColorSpace=W.outputColorSpace,Q.batching=W.batching,Q.batchingColor=W.batchingColor,Q.instancing=W.instancing,Q.instancingColor=W.instancingColor,Q.instancingMorph=W.instancingMorph,Q.skinning=W.skinning,Q.morphTargets=W.morphTargets,Q.morphNormals=W.morphNormals,Q.morphColors=W.morphColors,Q.morphTargetsCount=W.morphTargetsCount,Q.numClippingPlanes=W.numClippingPlanes,Q.numIntersection=W.numClipIntersection,Q.vertexAlphas=W.vertexAlphas,Q.vertexTangents=W.vertexTangents,Q.toneMapping=W.toneMapping}function mm(L,W,Q,K,j){W.isScene!==!0&&(W=rt),Xe.resetTextureUnits();let be=W.fog,Ie=K.isMeshStandardMaterial||K.isMeshLambertMaterial||K.isMeshPhongMaterial?W.environment:null,_e=k===null?M.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:ut.workingColorSpace,Ae=K.isMeshStandardMaterial||K.isMeshLambertMaterial&&!K.envMap||K.isMeshPhongMaterial&&!K.envMap,Ue=B.get(K.envMap||Ie,Ae),$e=K.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,ct=!!Q.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),Ne=!!Q.morphAttributes.position,ht=!!Q.morphAttributes.normal,Zt=!!Q.morphAttributes.color,At=gi;K.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(At=M.toneMapping);let Tt=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,xn=Tt!==void 0?Tt.length:0,De=ke.get(K),wn=T.state.lights;if(de===!0&&(Ce===!0||L!==z)){let Ut=L===z&&K.id===D;ne.setState(K,L,Ut)}let yt=!1,ps=!1;K.version===De.__version?De.needsLights&&De.lightsStateVersion!==wn.state.version||j.isBatchedMesh&&De.batching===!1||!j.isBatchedMesh&&De.batching===!0||j.isBatchedMesh&&De.batchingColor===!0&&j._colorsTexture===null||j.isBatchedMesh&&De.batchingColor===!1&&j._colorsTexture!==null||j.isInstancedMesh&&De.instancing===!1||!j.isInstancedMesh&&De.instancing===!0||j.isSkinnedMesh&&De.skinning===!1||!j.isSkinnedMesh&&De.skinning===!0||j.isInstancedMesh&&De.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&De.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&De.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&De.instancingMorph===!1&&j.morphTexture!==null||De.envMap!==Ue||K.fog===!0&&De.fog!==be||De.numClippingPlanes!==void 0&&(De.numClippingPlanes!==ne.numPlanes||De.numIntersection!==ne.numIntersection)||De.vertexAlphas!==$e||De.vertexTangents!==ct||De.morphTargets!==Ne||De.morphNormals!==ht||De.morphColors!==Zt||De.morphTargetsCount!==xn||De.numLightProbeGrids!==Uf(T.state.lightProbeGridArray)?yt=!0:(De.outputColorSpace!==_e||De.toneMapping!==At)&&(ps=!0):(yt=!0,De.__version=K.version);let yn=De.currentProgram;(yt===!0||ps===!0)&&(yn=ps===!0?pm(K,W,j,_e,At):Lr(K,W,j),R&&K.isNodeMaterial&&R.onUpdateProgram(K,yn,De));let ao=!1,Xi=!1,ms=!1,dt=yn.getUniforms(),un=De.uniforms;if(ve.useProgram(yn.program)&&(ao=!0,Xi=!0,ms=!0),K.id!==D&&(D=K.id,Xi=!0),ao||z!==L){ve.buffers.depth.getReversed()&&L.reversedDepth!==!0&&(L._reversedDepth=!0,L.updateProjectionMatrix()),dt.setValue(Y,"projectionMatrix",L.projectionMatrix),dt.setValue(Y,"viewMatrix",L.matrixWorldInverse);let sn=dt.map.cameraPosition;sn!==void 0&&sn.setValue(Y,Ze.setFromMatrixPosition(L.matrixWorld)),St.logarithmicDepthBuffer&&dt.setValue(Y,"logDepthBufFC",2/(Math.log(L.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&dt.setValue(Y,"isOrthographic",L.isOrthographicCamera===!0),z!==L&&(z=L,Xi=!0,ms=!0)}if(De.needsLights&&(wn.state.sunShadowMap.length>0&&dt.setValue(Y,"sunShadowMap",wn.state.sunShadowMap,Xe),wn.state.directionalShadowMap.length>0&&dt.setValue(Y,"directionalShadowMap",wn.state.directionalShadowMap,Xe),wn.state.spotShadowMap.length>0&&dt.setValue(Y,"spotShadowMap",wn.state.spotShadowMap,Xe),wn.state.pointShadowMap.length>0&&dt.setValue(Y,"pointShadowMap",wn.state.pointShadowMap,Xe)),j.isSkinnedMesh){dt.setOptional(Y,j,"bindMatrix"),dt.setOptional(Y,j,"bindMatrixInverse");let Ut=j.skeleton;Ut&&(Ut.boneTexture===null&&Ut.computeBoneTexture(),dt.setValue(Y,"boneTexture",Ut.boneTexture,Xe))}j.isBatchedMesh&&(dt.setOptional(Y,j,"batchingTexture"),dt.setValue(Y,"batchingTexture",j._matricesTexture,Xe),dt.setOptional(Y,j,"batchingIdTexture"),dt.setValue(Y,"batchingIdTexture",j._indirectTexture,Xe),dt.setOptional(Y,j,"batchingColorTexture"),j._colorsTexture!==null&&dt.setValue(Y,"batchingColorTexture",j._colorsTexture,Xe));let Jn=Q.morphAttributes;if((Jn.position!==void 0||Jn.normal!==void 0||Jn.color!==void 0)&&ie.update(j,Q,yn),(Xi||De.receiveShadow!==j.receiveShadow)&&(De.receiveShadow=j.receiveShadow,dt.setValue(Y,"receiveShadow",j.receiveShadow)),(K.isMeshStandardMaterial||K.isMeshLambertMaterial||K.isMeshPhongMaterial)&&K.envMap===null&&W.environment!==null&&(un.envMapIntensity.value=W.environmentIntensity),un.dfgLUT!==void 0&&(un.dfgLUT.value=mM()),Xi){if(dt.setValue(Y,"toneMappingExposure",M.toneMappingExposure),De.needsLights&&gm(un,ms),be&&K.fog===!0&&pe.refreshFogUniforms(un,be),pe.refreshMaterialUniforms(un,K,fe,Ee,T.state.transmissionRenderTarget[L.id]),De.needsLights&&De.numLightProbeGrids>0){let Ut=v,sn=0;for(let Mi of T.state.lightProbeGridArray)Mi.texture!==null&&(Ut.textures[sn]=Mi.texture,Ut.min[sn]=Mi.boundingBox.min,Ut.max[sn]=Mi.boundingBox.max,Ut.resolution[sn]=Mi.resolution,sn++);for(let Mi in Ut)Ut[Mi].length=sn;un.probesSH.value=Ut.textures,un.probesMin.value=Ut.min,un.probesMax.value=Ut.max,un.probesResolution.value=Ut.resolution}Mr.upload(Y,Ff(De),un,Xe)}if(K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(Mr.upload(Y,Ff(De),un,Xe),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&dt.setValue(Y,"center",j.center),dt.setValue(Y,"modelViewMatrix",j.modelViewMatrix),dt.setValue(Y,"normalMatrix",j.normalMatrix),dt.setValue(Y,"modelMatrix",j.matrixWorld),K.uniformsGroups!==void 0){let Ut=K.uniformsGroups;for(let sn=0,Mi=Ut.length;sn<Mi;sn++){let kf=Ut[sn];Oe.update(kf,yn),Oe.bind(kf,yn)}}return yn}function gm(L,W){L.ambientLightColor.needsUpdate=W,L.lightProbe.needsUpdate=W,L.sunLights.needsUpdate=W,L.sunLightShadows.needsUpdate=W,L.directionalLights.needsUpdate=W,L.directionalLightShadows.needsUpdate=W,L.pointLights.needsUpdate=W,L.pointLightShadows.needsUpdate=W,L.spotLights.needsUpdate=W,L.spotLightShadows.needsUpdate=W,L.rectAreaLights.needsUpdate=W,L.hemisphereLights.needsUpdate=W}function xm(L){return L.isMeshLambertMaterial||L.isMeshToonMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isShadowMaterial||L.isShaderMaterial&&L.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return k},this.setRenderTargetTextures=function(L,W,Q){let K=ke.get(L);K.__autoAllocateDepthBuffer=L.resolveDepthBuffer===!1,K.__autoAllocateDepthBuffer===!1&&(K.__useRenderToTexture=!1),ke.get(L.texture).__webglTexture=W,ke.get(L.depthTexture).__webglTexture=K.__autoAllocateDepthBuffer?void 0:Q,K.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(L,W){let Q=ke.get(L);Q.__webglFramebuffer=W,Q.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(L,W=0,Q=0){k=L,U=W,F=Q;let K=null,j=!1,be=!1;if(L){let _e=ke.get(L);if(_e.__useDefaultFramebuffer!==void 0){ve.bindFramebuffer(Y.FRAMEBUFFER,_e.__webglFramebuffer),G.copy(L.viewport),$.copy(L.scissor),Z=L.scissorTest,ve.viewport(G),ve.scissor($),ve.setScissorTest(Z),D=-1;return}else if(_e.__webglFramebuffer===void 0)Xe.setupRenderTarget(L);else if(_e.__hasExternalTextures)Xe.rebindTextures(L,ke.get(L.texture).__webglTexture,ke.get(L.depthTexture).__webglTexture);else if(L.depthBuffer){let $e=L.depthTexture;if(_e.__boundDepthTexture!==$e){if($e!==null&&ke.has($e)&&(L.width!==$e.image.width||L.height!==$e.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Xe.setupDepthRenderbuffer(L)}}let Ae=L.texture;(Ae.isData3DTexture||Ae.isDataArrayTexture||Ae.isCompressedArrayTexture)&&(be=!0);let Ue=ke.get(L).__webglFramebuffer;L.isWebGLCubeRenderTarget?(Array.isArray(Ue[W])?K=Ue[W][Q]:K=Ue[W],j=!0):L.samples>0&&Xe.useMultisampledRTT(L)===!1?K=ke.get(L).__webglMultisampledFramebuffer:Array.isArray(Ue)?K=Ue[Q]:K=Ue,G.copy(L.viewport),$.copy(L.scissor),Z=L.scissorTest}else G.copy(ze).multiplyScalar(fe).floor(),$.copy(tt).multiplyScalar(fe).floor(),Z=st;if(Q!==0&&(K=I),ve.bindFramebuffer(Y.FRAMEBUFFER,K)&&ve.drawBuffers(L,K),ve.viewport(G),ve.scissor($),ve.setScissorTest(Z),j){let _e=ke.get(L.texture);Y.framebufferTexture2D(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_CUBE_MAP_POSITIVE_X+W,_e.__webglTexture,Q)}else if(be){let _e=W;for(let Ae=0;Ae<L.textures.length;Ae++){let Ue=ke.get(L.textures[Ae]);Y.framebufferTextureLayer(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0+Ae,Ue.__webglTexture,Q,_e)}}else if(L!==null&&Q!==0){let _e=ke.get(L.texture);Y.framebufferTexture2D(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,_e.__webglTexture,Q)}D=-1};function Bf(L){let W=ke.get(L);return(W.__readFormat!==L.format||W.__readType!==L.type)&&(W.__readFormat=L.format,W.__readType=L.type,W.__formatReadable=St.textureFormatReadable(L.format),W.__typeReadable=St.textureTypeReadable(L.type)),W}this.readRenderTargetPixels=function(L,W,Q,K,j,be,Ie,_e=0){if(!(L&&L.isWebGLRenderTarget)){Ge("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ae=ke.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Ie!==void 0&&(Ae=Ae[Ie],Array.isArray(Ae)&&(Ae=Ae[0])),Ae){ve.bindFramebuffer(Y.FRAMEBUFFER,Ae);try{let Ue=L.textures[_e],$e=Ue.format,ct=Ue.type;L.textures.length>1&&Y.readBuffer(Y.COLOR_ATTACHMENT0+_e);let Ne=Bf(Ue);if(Ne.__formatReadable===!1){Ge("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ne.__typeReadable===!1){Ge("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=L.width-K&&Q>=0&&Q<=L.height-j&&Y.readPixels(W,Q,K,j,ue.convert($e),ue.convert(ct),be)}finally{let Ue=k!==null?ke.get(k).__webglFramebuffer:null;ve.bindFramebuffer(Y.FRAMEBUFFER,Ue)}}},this.readRenderTargetPixelsAsync=async function(L,W,Q,K,j,be,Ie,_e=0){if(!(L&&L.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ae=ke.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Ie!==void 0&&(Ae=Ae[Ie],Array.isArray(Ae)&&(Ae=Ae[0])),Ae)if(W>=0&&W<=L.width-K&&Q>=0&&Q<=L.height-j){ve.bindFramebuffer(Y.FRAMEBUFFER,Ae);let Ue=L.textures[_e],$e=Ue.format,ct=Ue.type;L.textures.length>1&&Y.readBuffer(Y.COLOR_ATTACHMENT0+_e);let Ne=Bf(Ue);if(Ne.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ne.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ht=Y.createBuffer();Y.bindBuffer(Y.PIXEL_PACK_BUFFER,ht),Y.bufferData(Y.PIXEL_PACK_BUFFER,be.byteLength,Y.STREAM_READ),Y.readPixels(W,Q,K,j,ue.convert($e),ue.convert(ct),0),Y.bindBuffer(Y.PIXEL_PACK_BUFFER,null);let Zt=k!==null?ke.get(k).__webglFramebuffer:null;ve.bindFramebuffer(Y.FRAMEBUFFER,Zt);let At=Y.fenceSync(Y.SYNC_GPU_COMMANDS_COMPLETE,0);return Y.flush(),await Qd(Y,At,4),Y.bindBuffer(Y.PIXEL_PACK_BUFFER,ht),Y.getBufferSubData(Y.PIXEL_PACK_BUFFER,0,be),Y.bindBuffer(Y.PIXEL_PACK_BUFFER,null),Y.deleteBuffer(ht),Y.deleteSync(At),be}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(L,W=null,Q=0){let K=Math.pow(2,-Q),j=Math.floor(L.image.width*K),be=Math.floor(L.image.height*K),Ie=W!==null?W.x:0,_e=W!==null?W.y:0;Xe.setTexture2D(L,0),Y.copyTexSubImage2D(Y.TEXTURE_2D,Q,0,0,Ie,_e,j,be),ve.unbindTexture()},this.copyTextureToTexture=function(L,W,Q=null,K=null,j=0,be=0){let Ie,_e,Ae,Ue,$e,ct,Ne,ht,Zt,At=L.isCompressedTexture?L.mipmaps[be]:L.image;if(Q!==null)Ie=Q.max.x-Q.min.x,_e=Q.max.y-Q.min.y,Ae=Q.isBox3?Q.max.z-Q.min.z:1,Ue=Q.min.x,$e=Q.min.y,ct=Q.isBox3?Q.min.z:0;else{let dt=Math.pow(2,-j);Ie=Math.floor(At.width*dt),_e=Math.floor(At.height*dt),L.isDataArrayTexture?Ae=At.depth:L.isData3DTexture?Ae=Math.floor(At.depth*dt):Ae=1,Ue=0,$e=0,ct=0}K!==null?(Ne=K.x,ht=K.y,Zt=K.z):(Ne=0,ht=0,Zt=0);let Tt=ue.convert(W.format),xn=ue.convert(W.type),De;W.isData3DTexture?(Xe.setTexture3D(W,0),De=Y.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(Xe.setTexture2DArray(W,0),De=Y.TEXTURE_2D_ARRAY):(Xe.setTexture2D(W,0),De=Y.TEXTURE_2D),ve.activeTexture(Y.TEXTURE0),ve.pixelStorei(Y.UNPACK_FLIP_Y_WEBGL,W.flipY),ve.pixelStorei(Y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),ve.pixelStorei(Y.UNPACK_ALIGNMENT,W.unpackAlignment);let wn=ve.getParameter(Y.UNPACK_ROW_LENGTH),yt=ve.getParameter(Y.UNPACK_IMAGE_HEIGHT),ps=ve.getParameter(Y.UNPACK_SKIP_PIXELS),yn=ve.getParameter(Y.UNPACK_SKIP_ROWS),ao=ve.getParameter(Y.UNPACK_SKIP_IMAGES);ve.pixelStorei(Y.UNPACK_ROW_LENGTH,At.width),ve.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,At.height),ve.pixelStorei(Y.UNPACK_SKIP_PIXELS,Ue),ve.pixelStorei(Y.UNPACK_SKIP_ROWS,$e),ve.pixelStorei(Y.UNPACK_SKIP_IMAGES,ct);let Xi=L.isDataArrayTexture||L.isData3DTexture,ms=W.isDataArrayTexture||W.isData3DTexture;if(L.isDepthTexture){let dt=ke.get(L),un=ke.get(W),Jn=ke.get(dt.__renderTarget),Ut=ke.get(un.__renderTarget);ve.bindFramebuffer(Y.READ_FRAMEBUFFER,Jn.__webglFramebuffer),ve.bindFramebuffer(Y.DRAW_FRAMEBUFFER,Ut.__webglFramebuffer);for(let sn=0;sn<Ae;sn++)Xi&&(Y.framebufferTextureLayer(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,ke.get(L).__webglTexture,j,ct+sn),Y.framebufferTextureLayer(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,ke.get(W).__webglTexture,be,Zt+sn)),Y.blitFramebuffer(Ue,$e,Ue+Ie,$e+_e,Ne,ht,Ne+Ie,ht+_e,Y.DEPTH_BUFFER_BIT,Y.NEAREST);ve.bindFramebuffer(Y.READ_FRAMEBUFFER,null),ve.bindFramebuffer(Y.DRAW_FRAMEBUFFER,null)}else if(j!==0||L.isRenderTargetTexture||ke.has(L)){let dt=ke.get(L),un=ke.get(W);ve.bindFramebuffer(Y.READ_FRAMEBUFFER,A),ve.bindFramebuffer(Y.DRAW_FRAMEBUFFER,C);for(let Jn=0;Jn<Ae;Jn++)Xi?Y.framebufferTextureLayer(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,dt.__webglTexture,j,ct+Jn):Y.framebufferTexture2D(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,dt.__webglTexture,j),ms?Y.framebufferTextureLayer(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,un.__webglTexture,be,Zt+Jn):Y.framebufferTexture2D(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,un.__webglTexture,be),j!==0?Y.blitFramebuffer(Ue,$e,Ue+Ie,$e+_e,Ne,ht,Ne+Ie,ht+_e,Y.COLOR_BUFFER_BIT,Y.NEAREST):ms?Y.copyTexSubImage3D(De,be,Ne,ht,Zt+Jn,Ue,$e,Ie,_e):Y.copyTexSubImage2D(De,be,Ne,ht,Ue,$e,Ie,_e);ve.bindFramebuffer(Y.READ_FRAMEBUFFER,null),ve.bindFramebuffer(Y.DRAW_FRAMEBUFFER,null)}else ms?L.isDataTexture||L.isData3DTexture?Y.texSubImage3D(De,be,Ne,ht,Zt,Ie,_e,Ae,Tt,xn,At.data):W.isCompressedArrayTexture?Y.compressedTexSubImage3D(De,be,Ne,ht,Zt,Ie,_e,Ae,Tt,At.data):Y.texSubImage3D(De,be,Ne,ht,Zt,Ie,_e,Ae,Tt,xn,At):L.isDataTexture?Y.texSubImage2D(Y.TEXTURE_2D,be,Ne,ht,Ie,_e,Tt,xn,At.data):L.isCompressedTexture?Y.compressedTexSubImage2D(Y.TEXTURE_2D,be,Ne,ht,At.width,At.height,Tt,At.data):Y.texSubImage2D(Y.TEXTURE_2D,be,Ne,ht,Ie,_e,Tt,xn,At);ve.pixelStorei(Y.UNPACK_ROW_LENGTH,wn),ve.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,yt),ve.pixelStorei(Y.UNPACK_SKIP_PIXELS,ps),ve.pixelStorei(Y.UNPACK_SKIP_ROWS,yn),ve.pixelStorei(Y.UNPACK_SKIP_IMAGES,ao),be===0&&W.generateMipmaps===!0&&W.mipmapsAutoUpdate===!0&&Y.generateMipmap(De),ve.unbindTexture()},this.initRenderTarget=function(L){ke.get(L).__webglFramebuffer===void 0&&Xe.setupRenderTarget(L)},this.initTexture=function(L){L.isCubeTexture?Xe.setTextureCube(L,0):L.isData3DTexture?Xe.setTexture3D(L,0):L.isDataArrayTexture||L.isCompressedArrayTexture?Xe.setTexture2DArray(L,0):Xe.setTexture2D(L,0),ve.unbindTexture()},this.resetState=function(){U=0,F=0,k=null,ve.reset(),me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Gn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=ut._getDrawingBufferColorSpace(e),t.unpackColorSpace=ut._getUnpackColorSpace()}};function gM(n,e,t){let i=n.n,s=[];for(let r=0;r<n.layers;r++){let a=new Uint8Array(i*i),o=new Float32Array(i*i);for(let l=0;l<i;l++)for(let c=0;c<i;c++){let h=((r*i+l)*t+c)*4,f=l*i+c;a[f]=e[h],o[f]=(e[h+1]<<8|e[h+2])/100-2}s.push({cls:a,h:o})}return s}async function yu(n,e="maps/"){let t=await(await fetch(e+n+".json")).json(),i=new Image;i.src=e+n+".png",await i.decode();let s=document.createElement("canvas");s.width=i.width,s.height=i.height;let r=s.getContext("2d",{willReadFrequently:!0});r.drawImage(i,0,0);let a=r.getImageData(0,0,i.width,i.height).data;return{info:t,layers:gM(t,a,i.width)}}var os=n=>Math.round(n/.08)*.08;function _u(n,e){let t=n.n,i=n.cell,s=e.length,r=t*t,a=s>1,o={n:t,cell:i,L:s,info:n,size:t*i,top:[],bot:[],cls:[],flags:new Uint8Array(r),voidKill:a},l=new Uint8Array(r);for(let h of e)for(let f=0;f<r;f++){let u=h.cls[f]&3;(u===1||u===2)&&(l[f]=1)}let c=new Uint8Array(r);{let f=new Uint8Array(r);for(let u=0;u<t;u++)for(let d=0;d<t;d++){let m=0;for(let y=-5;y<=5&&!m;y++){let p=d+y;p>=0&&p<t&&l[u*t+p]&&(m=1)}f[u*t+d]=m}for(let u=0;u<t;u++)for(let d=0;d<t;d++){let m=0;for(let y=-5;y<=5&&!m;y++){let p=u+y;p>=0&&p<t&&f[p*t+d]&&(m=1)}c[u*t+d]=m}}for(let h of e)MM(t,h.cls,h.h,a);for(let[h,f,u,d,m,y]of xM[n.id]||[]){let p=e[0];for(let g=f;g<=d;g++)for(let b=h;b<=u;b++){let w=g*t+b,v=u-h>=d-f?b:g;v>=m&&v<=y||((p.cls[w]&3)===1||(p.cls[w]&3)===2)&&(p.cls[w]=p.cls[w]&-4|3)}}for(let h of e)bM(t,h.cls,h.h);for(let h of e)TM(t,h.cls,h.h);for(let h=0;h<s;h++){let{cls:f,h:u}=e[h],d=new Float32Array(r).fill(NaN),m=new Float32Array(r).fill(NaN),y=new Uint8Array(r),p=a?h===0?3.95:4.6:6.2,g=qp(t,f,u,7),b=SM(t,f,u);for(let w=0;w<r;w++){let v=f[w],_=v&3;o.flags[w]|=v&-4;let T=u[w],x=NaN,S=NaN;if(_===1)x=os(T);else if(_===2)x=os(b[w]+1.05);else if(_===3||_===0&&!a&&c[w]){let N=g[w]>-1e8?g[w]:T;x=os(Math.ceil((N+p)/.6)*.6),a&&(x=os(N+p))}else _===0&&a&&h===0&&c[w]&&wM(e,w);isNaN(x)||(S=h===0?-30:os(T)-.36,y[w]=_===0?3:_),d[w]=x,m[w]=S}o.top.push(d),o.bot.push(m),o.cls.push(y)}if(a){let h=o.top[0],f=o.bot[1],u=o.cls[0];for(let d=0;d<r;d++)u[d]===3&&!isNaN(f[d])&&h[d]>f[d]&&(h[d]=f[d])}o.idx=(h,f)=>{let u=Math.floor(h/i),d=Math.floor(f/i);return u<0||d<0||u>=t||d>=t?-1:d*t+u};for(let h=0;h<o.L;h++)yM(o,h);return a||vM(o,e[0]),o}var xM={dust2:[[220,182,254,184,230,242]]};function yM(n,e){let t=n.n,i=n.cell,s=n.cls[e],r=n.top[e],a=n.bot[e];n.props=n.props||[],n.propCell=n.propCell||[];let o=new Int32Array(t*t);n.propCell[e]=o;let l=new Uint8Array(t*t),c=[],h=[];for(let f=0;f<t*t;f++){if(l[f]||s[f]!==2)continue;for(c.length=0,h.length=0,c.push(f),l[f]=1;c.length;){let D=c.pop();h.push(D);let z=D%t,G=(D-z)/t;for(let $ of[z>0?D-1:-1,z<t-1?D+1:-1,G>0?D-t:-1,G<t-1?D+t:-1])$>=0&&!l[$]&&s[$]===2&&(l[$]=1,c.push($))}if(h.length<6||h.length>420)continue;let u=0,d=0;for(let D of h)u+=D%t,d+=Math.floor(D/t);u/=h.length,d/=h.length;let m=0,y=0,p=0;for(let D of h){let z=D%t-u,G=Math.floor(D/t)-d;m+=z*z,y+=G*G,p+=z*G}let g=.5*Math.atan2(2*p,m-y);Math.abs(m-y)<1e-6&&Math.abs(p)<1e-6&&(g=0);let b=(g%(Math.PI/2)+Math.PI/2)%(Math.PI/2);(b<.14||b>Math.PI/2-.14)&&(g=Math.round(g/(Math.PI/2))*(Math.PI/2));let w=Math.cos(g),v=Math.sin(g),_=1e9,T=-1e9,x=1e9,S=-1e9;for(let D of h){let z=D%t-u,G=Math.floor(D/t)-d,$=z*w+G*v,Z=-z*v+G*w;_=Math.min(_,$),T=Math.max(T,$),x=Math.min(x,Z),S=Math.max(S,Z)}let N=(T-_)/2+.5,M=(S-x)/2+.5,E=(_+T)/2,R=(x+S)/2,I=u+E*w-R*v,A=d+E*v+R*w,C=1e9,U=-1e9;for(let D of h)U=Math.max(U,r[D]);for(let D of h){let z=D%t;for(let G of[D-1,D+1,D-t,D+t])G>=0&&G<t*t&&s[G]===1&&Math.abs(G%t-z)<=1&&(C=Math.min(C,r[G]))}if(C>1e8)continue;let F=n.props.length+1,k=Math.ceil(Math.max(N,M))+1;for(let D=Math.floor(A)-k;D<=Math.ceil(A)+k;D++)for(let z=Math.floor(I)-k;z<=Math.ceil(I)+k;z++){if(z<0||D<0||z>=t||D>=t)continue;let G=D*t+z,$=z-I,Z=D-A,q=$*w+Z*v,ae=-$*v+Z*w,oe=Math.abs(q)<=N-.35&&Math.abs(ae)<=M-.35;oe&&(s[G]===1||s[G]===2)?(s[G]=2,r[G]=U,o[G]=F):!oe&&s[G]===2&&h.includes(G)&&(s[G]=1,r[G]=Math.round(C/.08)*.08)}n.props.push({l:e,x:(I+.5)*i,z:(A+.5)*i,hu:N*i,hv:M*i,ang:g,y0:C,y1:U,cells:h.length})}}var _M={dust2:[[142,188,224,220],[30,203,128,257],[46,158,64,205],[68,253,102,290],[126,212,162,252],[336,276,374,334]],mirage:[[110,76,306,114],[200,92,228,136],[320,360,432,412],[210,204,238,254]]};function vM(n,e){let t=n.n,i=t*t,s=n.cell,r=n.top[0],a=n.cls[0],o=new Float32Array(i).fill(NaN),l=new Float32Array(i).fill(NaN),c=new Uint8Array(i),h=qp(t,e.cls,e.h,7),f=v=>a[v]===1||a[v]===2,u=v=>!f(v),d=v=>os(Math.ceil(((h[v]>-1e8?h[v]:r[v])+6.2)/.6)*.6);for(let[v,_,T,x]of _M[n.info.id]||[]){let S=-1e9;for(let N=_;N<=x;N++)for(let M=v;M<=T;M++){let E=N*t+M;a[E]===1&&r[E]>S&&(S=r[E])}for(let N=_;N<=x;N++)for(let M=v;M<=T;M++){let E=N*t+M;if(!f(E))continue;let R=os(S+2.9);l[E]=R,o[E]=Math.max(R+.5,d(E)-.6),c[E]=4}}let m=Math.round(3.2/s),y=Math.round(2/s),p=new Uint16Array(i),g=new Uint16Array(i);for(let v=0;v<t;v++){let _=0;for(;_<t;){if(u(v*t+_)){_++;continue}let T=_;for(;T<t&&!u(v*t+T);)T++;for(let x=_;x<T;x++)p[v*t+x]=T-_;_=T}}for(let v=0;v<t;v++){let _=0;for(;_<t;){if(u(_*t+v)){_++;continue}let T=_;for(;T<t&&!u(T*t+v);)T++;for(let x=_;x<T;x++)g[x*t+v]=T-_;_=T}}let b=(v,_)=>{c[v]||(l[v]=os(_+2.45),o[v]=d(v),c[v]=4)},w=v=>{let _=-1e9;for(let T of v)r[T]>_&&(_=r[T]);return _};for(let v=0;v<t;v++){let _=0;for(;_<t;){let T=_*t+v;if(u(T)||p[T]>m){_++;continue}let x=_;for(;x<t&&!u(x*t+v)&&p[x*t+v]<=m;)x++;if(x-_<=y&&_>0&&x<t&&!u((_-1)*t+v)&&!u(x*t+v)&&p[(_-1)*t+v]>m+2&&p[x*t+v]>m+2){let N=[];for(let E=_;E<x;E++)N.push(E*t+v);let M=w(N);for(let E of N)b(E,M)}_=x}}for(let v=0;v<t;v++){let _=0;for(;_<t;){let T=v*t+_;if(u(T)||g[T]>m){_++;continue}let x=_;for(;x<t&&!u(v*t+x)&&g[v*t+x]<=m;)x++;if(x-_<=y&&_>0&&x<t&&!u(v*t+_-1)&&!u(v*t+x)&&g[v*t+_-1]>m+2&&g[v*t+x]>m+2){let N=[];for(let E=_;E<x;E++)N.push(v*t+E);let M=w(N);for(let E of N)b(E,M)}_=x}}n.top.push(o),n.bot.push(l),n.cls.push(c),n.L=2,n.slabs=!0}function MM(n,e,t,i){let s=n*n,r=new Uint8Array(s),a=[],o=[],l=h=>(e[h]&3)===3;for(let h=0;h<s;h++){if(r[h]||!l(h))continue;a.length=0,o.length=0,a.push(h),r[h]=1;let f=!1;for(;a.length;){let u=a.pop();o.push(u);let d=u%n,m=(u-d)/n;for(let y of[d>0?u-1:-1,d<n-1?u+1:-1,m>0?u-n:-1,m<n-1?u+n:-1])y<0||((e[y]&3)===0&&(f=!0),!r[y]&&l(y)&&(r[y]=1,a.push(y)))}if(o.length<40&&!f)for(let u of o)c(u)}function c(h){let f=h%n,u=(h-f)/n,d=0,m=0;for(let y=-2;y<=2;y++)for(let p=-2;p<=2;p++){let g=f+p,b=u+y;if(g<0||b<0||g>=n||b>=n)continue;let w=b*n+g;(e[w]&3)===1&&(d+=t[w],m++)}e[h]=e[h]&-4|1,m&&(t[h]=d/m)}if(!i)for(let h=0;h<2;h++){let f=new Uint8Array(s);for(let u=0;u<s;u++){let d=e[u]&3;f[u]=d===3||d===0?1:0}for(let u=1;u<n-1;u++)for(let d=1;d<n-1;d++){let m=u*n+d,y=0;for(let p=-1;p<=1;p++)for(let g=-1;g<=1;g++)y+=f[m+p*n+g];f[m]&&y<=3&&(e[m]&3)===3?c(m):!f[m]&&y>=7&&(e[m]&3)===1&&(e[m]=e[m]&-4|3)}}}var Xp=1.7;function bM(n,e,t){let i=n*n,s=new Uint8Array(i);for(let l=0;l<i;l++)s[l]=(e[l]&3)===1?1:0;{let l=new Uint8Array(i);for(let c=0;c<n;c++)for(let h=0;h<n;h++){let f=c*n+h;if(!s[f])continue;let u=0;for(let d=-4;d<=4&&!u;d++)for(let m=-4;m<=4;m++){let y=h+m,p=c+d;if(y<0||p<0||y>=n||p>=n)continue;let g=e[p*n+y]&3;if(g===3||g===0){u=1;break}}l[f]=u}for(let c=0;c<7;c++){for(let h=1;h<n-1;h++)for(let f=1;f<n-1;f++){let u=h*n+f;if(l[u]!==1&&l[u]!==2)continue;let d=0,m=0;for(let y=-1;y<=1;y++)for(let p=-1;p<=1;p++){let g=u+y*n+p;s[g]&&(l[g]===0||l[g]===3)&&(d+=t[g],m++)}m&&(t[u]=d/m,l[u]=2)}for(let h=0;h<i;h++)l[h]===2&&(l[h]=3)}}let r=new Uint8Array(i);for(let l=0;l<n;l++)for(let c=0;c<n;c++){let h=l*n+c;s[h]&&(c+1<n&&s[h+1]&&Math.abs(t[h]-t[h+1])<=Xp&&(r[h]|=1),l+1<n&&s[h+n]&&Math.abs(t[h]-t[h+n])<=Xp&&(r[h]|=2))}let a=Float32Array.from(t),o=new Float32Array(i);for(let l=0;l<48;l++){for(let h=0;h<n;h++)for(let f=0;f<n;f++){let u=h*n+f;if(!s[u]){o[u]=a[u];continue}let d=a[u]*2,m=2;r[u]&1&&(d+=a[u+1],m++),r[u]&2&&(d+=a[u+n],m++),f>0&&r[u-1]&1&&(d+=a[u-1],m++),h>0&&r[u-n]&2&&(d+=a[u-n],m++),o[u]=d/m}let c=a;a=o,o=c}for(let l=0;l<i;l++)s[l]&&(t[l]=a[l])}function qp(n,e,t,i){let s=n*n,r=new Float32Array(s).fill(-1e9),a=new Float32Array(s).fill(-1e9);for(let o=0;o<s;o++)(e[o]&3)===1&&(r[o]=t[o]);for(let o=0;o<n;o++)for(let l=0;l<n;l++){let c=-1e9;for(let h=Math.max(0,l-i);h<=Math.min(n-1,l+i);h++){let f=r[o*n+h];f>c&&(c=f)}a[o*n+l]=c}for(let o=0;o<n;o++)for(let l=0;l<n;l++){let c=-1e9;for(let h=Math.max(0,o-i);h<=Math.min(n-1,o+i);h++){let f=a[h*n+l];f>c&&(c=f)}r[o*n+l]=c}return r}function SM(n,e,t){let i=n*n,s=new Float32Array(i),r=new Uint8Array(i),a=[],o=[];for(let l=0;l<i;l++){if(r[l]||(e[l]&3)!==2)continue;a.length=0,o.length=0,a.push(l),r[l]=1;let c=-1e9;for(;a.length;){let h=a.pop();o.push(h),t[h]>c&&(c=t[h]);let f=h%n,u=(h-f)/n;for(let d of[f>0?h-1:-1,f<n-1?h+1:-1,u>0?h-n:-1,u<n-1?h+n:-1])d>=0&&!r[d]&&(e[d]&3)===2&&(r[d]=1,a.push(d))}if(o.length>900)for(let h of o)s[h]=t[h];else for(let h of o)s[h]=c}return s}function TM(n,e,t){let i=n*n,s=new Uint8Array(i);for(let f=0;f<i;f++)s[f]=(e[f]&3)===1?1:0;let r=new Uint8Array(i);for(let f=2;f<n-2;f++)for(let u=2;u<n-2;u++){let d=f*n+u;if(!s[d])continue;let m=0;for(let y of[2,-2,2*n,-2*n]){let p=d+y;s[p]&&(m=Math.max(m,Math.abs(t[p]-t[d])/2))}r[d]=m<.045?1:0}let a=new Int32Array(i).fill(-1),o=[],l=[],c=0;for(let f=0;f<i;f++)if(!(!r[f]||a[f]>=0)){for(o.length=0,l.length=0,o.push(f),a[f]=c;o.length;){let u=o.pop();l.push(u);let d=u%n;for(let m of[d>0?u-1:-1,d<n-1?u+1:-1,u-n,u+n])m>=0&&m<i&&r[m]&&a[m]<0&&Math.abs(t[m]-t[u])<.12&&(a[m]=c,o.push(m))}if(l.length>=25){let u=l.map(m=>t[m]).sort((m,y)=>m-y),d=u[u.length>>1];for(let m of l)t[m]=d}else for(let u of l)r[u]=0;c++}let h=Float32Array.from(t);for(let f=0;f<80;f++)for(let u=1;u<n-1;u++)for(let d=1;d<n-1;d++){let m=u*n+d;if(!s[m]||r[m])continue;let y=0,p=0;for(let g of[m-1,m+1,m-n,m+n])s[g]&&Math.abs(h[g]-h[m])<1.7&&(y+=h[g],p++);p&&(h[m]=y/p)}for(let f=0;f<i;f++)s[f]&&(t[f]=h[f])}function wM(n,e){for(let t of n){let i=t.cls[e]&3;if(i===1||i===2)return!0}return!1}function Oi(n,e,t,i,s,r=.4){for(let[a,o]of vu){let l=n.idx(e+a*r,t+o*r);if(l<0)return!0;for(let c=0;c<n.L;c++){let h=n.top[c][l];if(!isNaN(h)&&h>i+.62&&n.bot[c][l]<i+s)return!0}}return!1}var vu=[[0,0],[1,1],[1,-1],[-1,1],[-1,-1],[1,0],[-1,0],[0,1],[0,-1]];function Mu(n,e,t,i,s=.38){let r=-1/0;for(let[a,o]of vu){let l=n.idx(e+a*s,t+o*s);if(!(l<0))for(let c=0;c<n.L;c++){let h=n.top[c][l];isNaN(h)||h<=i+.62&&h>r&&n.bot[c][l]<i+.1+.62&&(r=h)}}return r}function fc(n,e,t,i,s=.38){let r=1/0;for(let[a,o]of vu){let l=n.idx(e+a*s,t+o*s);if(!(l<0))for(let c=0;c<n.L;c++){let h=n.bot[c][l];isNaN(h)||h>i+.2&&h<r&&(r=h)}}return r}function Sr(n,e,t,i=1e9){let s=n.idx(e,t);if(s<0)return-1/0;let r=-1/0;for(let a=0;a<n.L;a++){let o=n.top[a][s];!isNaN(o)&&o<=i&&o>r&&(r=o)}return r}function ls(n,e,t,i,s,r,a,o=200){let l=n.cell,c=n.n,h=Math.floor(e/l),f=Math.floor(i/l),u=s>0?1:-1,d=a>0?1:-1,m=s!==0?Math.abs(l/s):1/0,y=a!==0?Math.abs(l/a):1/0,p=s!==0?(s>0?(h+1)*l-e:e-h*l)/Math.abs(s):1/0,g=a!==0?(a>0?(f+1)*l-i:i-f*l)/Math.abs(a):1/0,b=0,w=-1;for(let v=0;v<4e3;v++){if(h<0||f<0||h>=c||f>=c)return null;let _=Math.min(p,g,o),T=f*c+h,x=t+r*b,S=t+r*_;for(let N=0;N<n.L;N++){let M=n.top[N][T];if(isNaN(M))continue;let E=n.bot[N][T];if(x>=E&&x<=M&&v>0)return{t:b,nx:w===0?-u:0,ny:0,nz:w===1?-d:0,cell:T,layer:N};if(x>=E&&x<=M&&v===0)return{t:0,nx:0,ny:1,nz:0,cell:T,layer:N};if(x>M&&S<=M&&r<0)return{t:(M-t)/r,nx:0,ny:1,nz:0,cell:T,layer:N};if(x<E&&S>=E&&r>0)return{t:(E-t)/r,nx:0,ny:-1,nz:0,cell:T,layer:N}}if(_>=o)return null;b=_,p<g?(h+=u,p+=m,w=0):(f+=d,g+=y,w=1)}return null}function dc(n,e,t,i){let s=n.idx(e,i);if(s<0)return!1;for(let r=0;r<n.L;r++){let a=n.top[r][s];if(!isNaN(a)&&t<=a&&t>=n.bot[r][s])return!0}return!1}function _i(n,e,t){let i=n.idx(e,t);return i<0?0:n.flags[i]}function bu(n,e){let t=[];for(let i=0;i<n.n*n.n;i++)n.flags[i]&e&&t.push(i);return t}var Yp={dust2:{floor:[.8,.66,.46],floorHi:[.84,.71,.51],wall:[.93,.82,.63],wallTop:[.86,.74,.55],trim:[.72,.6,.43],crate:[1,.95,.88],stone:[.82,.72,.56],metal:[.27,.47,.72],slab:[.62,.47,.32],sky:["#5c9ce0","#f6e3c0"],fog:"#efdcb9",sun:"#fff0d2",ground:"#cfae7c",hemiSky:"#cfe3ff",wallTex:"blocks",floorTex:"sand"},mirage:{floor:[.74,.68,.58],floorHi:[.79,.73,.63],wall:[.94,.87,.74],wallTop:[.78,.43,.3],trim:[.68,.58,.46],crate:[1,.95,.9],stone:[.8,.74,.64],metal:[.24,.55,.58],slab:[.74,.42,.3],sky:["#5b9fe0","#f5dcb8"],fog:"#efdabb",sun:"#fff1da",ground:"#c9ae88",hemiSky:"#d4e6ff",wallTex:"plaster",floorTex:"tiles"},vertigo:{floor:[.66,.66,.64],floorHi:[.72,.72,.69],wall:[.8,.8,.77],wallTop:[.62,.62,.6],trim:[.55,.55,.53],crate:[.98,.95,.9],stone:[.92,.72,.22],metal:[.25,.45,.75],slab:[.6,.6,.58],sky:["#3f87d6","#d2e6f6"],fog:"#cadcea",sun:"#ffffff",ground:"#6d7f8f",hemiSky:"#d6e8ff",wallTex:"concrete",floorTex:"slabs"}},pc=n=>Yp[n]||Yp.dust2;function Su(n,e){let t=n*374761393+e*668265263|0;return t=(t^t>>>13)*1274126177,((t^t>>>16)>>>0)/4294967296}var $p=(n,e,t)=>[n[0]+(e[0]-n[0])*t,n[1]+(e[1]-n[1])*t,n[2]+(e[2]-n[2])*t],cn=(n,e)=>[n[0]*e,n[1]*e,n[2]*e],Zp=n=>Math.max(0,Math.min(1,n));function EM(n){let e=n|0;return()=>{e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function vi(n,e){let t=document.createElement("canvas");t.width=t.height=n;let i=t.getContext("2d");e(i,n);let s=new Li(t);return s.wrapS=s.wrapT=sr,s.colorSpace=fn,s.anisotropy=8,s}function cs(n,e,t,i,s=235,r=2400,a=3){n.fillStyle=`rgb(${s},${s},${s})`,n.fillRect(0,0,e,e);for(let o=0;o<r;o++){let l=s+(t()-.5)*i;n.fillStyle=`rgba(${l|0},${l|0},${l|0},0.5)`;let c=1+t()*a;n.fillRect(t()*e,t()*e,c,c)}}var Tu={};function AM(n){if(Tu[n])return Tu[n];let e=EM(n.length*977+n.charCodeAt(0)),t;return n==="blocks"?t=vi(256,(i,s)=>{cs(i,s,e,40,232,3e3);let r=4;for(let a=0;a<r;a++){let o=a*s/r;i.fillStyle="rgba(120,100,80,.35)",i.fillRect(0,o,s,3);let l=a%2?s/4:0;for(let c=0;c<3;c++){let h=(l+c*s/2)%s;i.fillRect(h,o,3,s/r)}for(let c=0;c<6;c++)i.fillStyle=`rgba(255,250,240,${.08+e()*.08})`,i.fillRect(e()*s,o+4+e()*(s/r-8),20+e()*50,6+e()*10)}i.fillStyle="rgba(90,70,50,.04)";for(let a=0;a<14;a++)i.beginPath(),i.arc(e()*s,e()*s,4+e()*18,0,7),i.fill()}):n==="plaster"?t=vi(256,(i,s)=>{cs(i,s,e,26,238,2600);for(let r=0;r<10;r++)i.fillStyle=`rgba(150,130,100,${.03+e()*.04})`,i.beginPath(),i.ellipse(e()*s,e()*s,10+e()*40,6+e()*26,e()*3,0,7),i.fill();i.strokeStyle="rgba(110,90,70,.35)",i.lineWidth=1;for(let r=0;r<5;r++){let a=e()*s,o=e()*s;i.beginPath(),i.moveTo(a,o);for(let l=0;l<6;l++)a+=(e()-.5)*24,o+=e()*14,i.lineTo(a,o);i.stroke()}}):n==="concrete"?t=vi(256,(i,s)=>{cs(i,s,e,30,228,3500,2),i.fillStyle="rgba(80,80,80,.35)",i.fillRect(0,0,s,2),i.fillRect(0,0,2,s),i.fillRect(s/2,0,2,s),i.fillStyle="rgba(60,60,60,.45)";for(let[r,a]of[[.25,.25],[.75,.25],[.25,.75],[.75,.75]])i.beginPath(),i.arc(r*s,a*s,3,0,7),i.fill();for(let r=0;r<8;r++)i.fillStyle=`rgba(90,85,80,${.06+e()*.08})`,i.fillRect(e()*s,e()*s,2+e()*4,20+e()*60)}):n==="sand"?t=vi(256,(i,s)=>{cs(i,s,e,46,230,5e3,2);for(let r=0;r<40;r++)i.fillStyle=`rgba(150,120,80,${.06+e()*.06})`,i.beginPath(),i.ellipse(e()*s,e()*s,8+e()*30,3+e()*8,e()*3,0,7),i.fill();for(let r=0;r<25;r++)i.fillStyle="rgba(120,100,80,.35)",i.fillRect(e()*s,e()*s,2+e()*3,2+e()*3)}):n==="tiles"?t=vi(256,(i,s)=>{cs(i,s,e,30,232,3e3,2);let r=4;i.fillStyle="rgba(110,95,75,.4)";for(let a=0;a<=r;a++)i.fillRect(a*s/r-1,0,2,s),i.fillRect(0,a*s/r-1,s,2);for(let a=0;a<r;a++)for(let o=0;o<r;o++)i.fillStyle=`rgba(${e()<.5?"255,250,240":"120,100,80"},${.05+e()*.07})`,i.fillRect(a*s/r+2,o*s/r+2,s/r-4,s/r-4)}):n==="slabs"?t=vi(256,(i,s)=>{cs(i,s,e,34,226,4e3,2),i.fillStyle="rgba(70,70,70,.35)",i.fillRect(0,0,s,2),i.fillRect(0,0,2,s),i.fillRect(0,s/2,s,2);for(let r=0;r<6;r++)i.fillStyle=`rgba(60,60,60,${.05+e()*.08})`,i.beginPath(),i.ellipse(e()*s,e()*s,10+e()*30,6+e()*14,e()*3,0,7),i.fill()}):n==="crate"?t=vi(128,(i,s)=>{i.fillStyle="#a7773f",i.fillRect(0,0,s,s);for(let r=0;r<6;r++)i.fillStyle=r%2?"#9a6c38":"#b17f46",i.fillRect(0,r*s/6,s,s/6),i.fillStyle="rgba(60,35,15,.5)",i.fillRect(0,r*s/6,s,1);for(let r=0;r<120;r++)i.fillStyle=`rgba(70,40,15,${e()*.25})`,i.fillRect(e()*s,e()*s,6+e()*20,1);i.strokeStyle="#7a5228",i.lineWidth=12,i.strokeRect(6,6,s-12,s-12),i.lineWidth=11,i.beginPath(),i.moveTo(10,10),i.lineTo(s-10,s-10),i.stroke(),i.strokeStyle="rgba(40,20,5,.6)",i.lineWidth=1.5,i.strokeRect(12,12,s-24,s-24),i.strokeRect(.5,.5,s-1,s-1),i.fillStyle="#3b2a1a";for(let[r,a]of[[6,6],[s-6,6],[6,s-6],[s-6,s-6]])i.beginPath(),i.arc(r,a,2.5,0,7),i.fill()}):n==="metal"?t=vi(128,(i,s)=>{cs(i,s,e,20,225,900,2);for(let r=0;r<16;r++)i.fillStyle=r%2?"rgba(0,0,0,.18)":"rgba(255,255,255,.12)",i.fillRect(r*s/16,0,s/16,s);for(let r=0;r<10;r++)i.fillStyle=`rgba(110,60,30,${.1+e()*.2})`,i.fillRect(e()*s,e()*s,4+e()*12,2+e()*16);i.fillStyle="rgba(0,0,0,.3)",i.fillRect(0,0,s,4),i.fillRect(0,s-4,s,4)}):n==="stone"?t=vi(128,(i,s)=>{cs(i,s,e,40,228,1500,2),i.fillStyle="rgba(90,75,55,.4)",i.fillRect(0,0,s,3),i.fillRect(0,s/2,s,2),i.fillRect(s/2,0,2,s/2),i.fillRect(s/4,s/2,2,s/2)}):n==="wood"&&(t=vi(128,(i,s)=>{i.fillStyle="#d9c3a3",i.fillRect(0,0,s,s);for(let r=0;r<4;r++)i.fillStyle=`rgba(90,60,30,${.15+e()*.1})`,i.fillRect(0,r*s/4,s,s/4-3),i.fillStyle="rgba(50,30,10,.5)",i.fillRect(0,r*s/4-2,s,3);for(let r=0;r<80;r++)i.fillStyle=`rgba(70,40,15,${e()*.2})`,i.fillRect(e()*s,e()*s,8+e()*30,1)})),Tu[n]=t,t}function Tr(){return{pos:[],nor:[],col:[],uv:[]}}function RM(n,e,t,i,s,r){n.pos.push(e[0],e[1],e[2]),n.nor.push(t[0],t[1],t[2]),n.col.push(i[0],i[1],i[2]),n.uv.push(s,r)}function ka(n,e,t,i,s,r,a){let o=t[0]-e[0],l=t[1]-e[1],c=t[2]-e[2],h=i[0]-e[0],f=i[1]-e[1],u=i[2]-e[2],d=l*u-c*f,m=c*h-o*u,y=o*f-l*h,p=Math.hypot(d,m,y)||1,g=[d/p,m/p,y/p],b=[e,t,i];for(let w=0;w<3;w++){let v=r(b[w]);RM(n,b[w],g,a?a[w]:s,v[0],v[1])}}function ai(n,e,t,i,s,r){let[a,o,l]=e,c=o[0]-a[0],h=o[1]-a[1],f=o[2]-a[2],u=l[0]-a[0],d=l[1]-a[1],m=l[2]-a[2],y=h*m-f*d,p=f*u-c*m,g=c*d-h*u,b=e,w=r;y*t[0]+p*t[1]+g*t[2]<0&&(b=[e[0],e[3],e[2],e[1]],r&&(w=[r[0],r[3],r[2],r[1]])),ka(n,b[0],b[1],b[2],i,s,w&&[w[0],w[1],w[2]]),ka(n,b[0],b[2],b[3],i,s,w&&[w[0],w[2],w[3]])}var Ba=n=>e=>[e[0]/n,e[2]/n],wu=(n,e,t)=>i=>[(i[0]*e-i[2]*n)/t,i[1]/t];function Kp(n,e){let t=pc(e),i=n.n,s=n.cell,r={wall:Tr(),floor:Tr(),crate:Tr(),metal:Tr(),stone:Tr(),wood:Tr()},a=(h,f,u,d=.05)=>{let m=1+(Su(f,u)-.5)*2*d;return[h[0]*m,h[1]*m,h[2]*m]};for(let h=0;h<n.L;h++){let f=n.top[h],u=n.bot[h],d=n.cls[h],m=T=>T>=0&&T<i*i&&d[T]===3,y=new Uint8Array(i*i);{let T=new Uint8Array(i*i),x=[],S=[];for(let N=0;N<i*i;N++){if(T[N]||d[N]!==2)continue;x.length=0,S.length=0,x.push(N),T[N]=1;let M=1e9,E=-1,R=1e9,I=-1;for(;x.length;){let D=x.pop();S.push(D);let z=D%i,G=(D-z)/i;M=Math.min(M,z),E=Math.max(E,z),R=Math.min(R,G),I=Math.max(I,G);for(let $ of[z>0?D-1:-1,z<i-1?D+1:-1,G>0?D-i:-1,G<i-1?D+i:-1])$>=0&&!T[$]&&d[$]===2&&(T[$]=1,x.push($))}let A=(E-M+1)*s,C=(I-R+1)*s,U=Math.max(A,C),F=Math.min(A,C),k=1;S.length>260?k=3:U>3.2&&F>1.4&&U/F>1.7?k=e==="vertigo"?3:2:Su(M,R)<.18&&(k=3);for(let D of S)y[D]=k}}let p=(T,x,S)=>{let N=0,M=0;for(let E=-1;E<=0;E++)for(let R=-1;R<=0;R++){let I=x+R,A=S+E;if(I<0||A<0||I>=i||A>=i)continue;let C=A*i+I;d[C]!==1||isNaN(f[C])||Math.abs(f[C]-T)>.6||(N+=f[C],M++)}return M?N/M:T},g=new Uint8Array(i*i),b=Ba(2.2);for(let T=0;T<i;T++)for(let x=0;x<i;x++){let S=T*i+x;if(d[S]===3){let Z=0,q=0;for(let ae of[x>0?S-1:-1,x<i-1?S+1:-1,T>0?S-i:-1,T<i-1?S+i:-1])ae>=0&&d[ae]===1&&(Z+=f[ae],q++);if(q){let ae=Z/q-.01,oe=x*s,Ee=(x+1)*s,fe=T*s,Le=(T+1)*s,bt=cn(t.floor,.62);ai(r.floor,[[oe,ae,fe],[oe,ae,Le],[Ee,ae,Le],[Ee,ae,fe]],[0,1,0],bt,b)}continue}if(n.propCell&&n.propCell[h]&&n.propCell[h][S]){let q=n.props[n.propCell[h][S]-1].y0,ae=x*s,oe=(x+1)*s,Ee=T*s,fe=(T+1)*s;ai(r.floor,[[ae,q,Ee],[ae,q,fe],[oe,q,fe],[oe,q,Ee]],[0,1,0],cn(t.floor,.7),b);continue}if(d[S]!==1||isNaN(f[S]))continue;let N=f[S],M=p(N,x,T),E=p(N,x+1,T),R=p(N,x,T+1),I=p(N,x+1,T+1),A=m(S-1)||m(S+1)||m(S-i)||m(S+i)||m(S-i-1)||m(S-i+1)||m(S+i-1)||m(S+i+1);if(Math.abs(M-N)<.004&&Math.abs(E-N)<.004&&Math.abs(R-N)<.004&&Math.abs(I-N)<.004&&!A)continue;g[S]=1;let U=x*s,F=(x+1)*s,k=T*s,D=(T+1)*s,z=a($p(t.floor,t.floorHi,Zp(N/6)),x>>3,T>>3,.04),G=(Z,q)=>{let ae=0;for(let oe=-1;oe<=0;oe++)for(let Ee=-1;Ee<=0;Ee++){let fe=Z+Ee,Le=q+oe;fe>=0&&Le>=0&&fe<i&&Le<i&&d[Le*i+fe]===3&&ae++}return cn(z,1-ae*.13)},$=[G(x,T),G(x,T+1),G(x+1,T+1),G(x+1,T)];ka(r.floor,[U,M,k],[U,R,D],[F,I,D],z,b,[$[0],$[1],$[2]]),ka(r.floor,[U,M,k],[F,I,D],[F,E,k],z,b,[$[0],$[2],$[3]])}let w=n.propCell?n.propCell[h]:null,v=T=>isNaN(f[T])||g[T]||d[T]===3||w&&w[T]?null:(d[T]*1e5+y[T]*1e4+Math.round(f[T]*100))*1e4+(h>0?Math.round(u[T]*100)+5e3:0);for(let T=0;T<i;T++)for(let x=0;x<i;x++){let S=T*i+x;if(g[S])continue;let N=v(S);if(N===null)continue;let M=1;for(;x+M<i&&!g[S+M]&&v(S+M)===N;)M++;let E=1;e:for(;T+E<i;){for(let D=0;D<M;D++){let z=(T+E)*i+x+D;if(g[z]||v(z)!==N)break e}E++}for(let D=0;D<E;D++)for(let z=0;z<M;z++)g[(T+D)*i+x+z]=1;let R=f[S],I=x*s,A=(x+M)*s,C=T*s,U=(T+E)*s,F=d[S],k=[[I,R,C],[I,R,U],[A,R,U],[A,R,C]];if(F===1)ai(r.floor,k,[0,1,0],a($p(t.floor,t.floorHi,Zp(R/6)),x>>3,T>>3,.04),b);else if(F===2){let D=y[S];ai(D===1?r.crate:D===2?r.metal:r.stone,k,[0,1,0],D===1?t.crate:D===2?cn(t.metal,1.1):t.stone,Ba(D===1?1.1:2))}else F===4&&ai(r.wood,k,[0,1,0],cn(t.wallTop,.95),Ba(2));if(h>0){let D=u[S];ai(F===4?r.wood:r.floor,[[I,D,C],[I,D,U],[A,D,U],[A,D,C]],[0,-1,0],F===4?t.slab:cn(t.floor,.6),Ba(2))}}let _=[[1,0],[-1,0],[0,1],[0,-1]];for(let T=0;T<4;T++){let[x,S]=_[T],N=x!==0?"z":"x";for(let M=0;M<i;M++){let E=null,R=()=>{if(!E)return;let{s:I,e:A,y0:C,y1:U,cl:F,line:k,kd:D}=E,z;if(N==="z"){let oe=(x>0?k+1:k)*s;z=[[oe,C,I*s],[oe,C,(A+1)*s],[oe,U,(A+1)*s],[oe,U,I*s]]}else{let oe=(S>0?k+1:k)*s;z=[[I*s,C,oe],[(A+1)*s,C,oe],[(A+1)*s,U,oe],[I*s,U,oe]]}let G=T<2?.93:.84,$,Z,q;if(F===2){$=D===1?r.crate:D===2?r.metal:r.stone,Z=cn(D===1?t.crate:D===2?t.metal:t.stone,G);let oe=D===1?1.1:2;q=Ee=>[(Ee[0]*S-Ee[2]*x)/oe,(Ee[1]-C)/oe]}else F===4?($=r.wood,Z=cn(t.slab,G),q=wu(x,S,2)):($=r.wall,Z=cn(t.trim,G),q=wu(x,S,2.2));let ae=cn(Z,.8);ai($,z,[x,0,S],Z,q,[ae,ae,Z,Z]),E=null};for(let I=0;I<i;I++){let A=N==="z"?M:I,C=N==="z"?I:M,U=C*i+A,F=null;if(!isNaN(f[U])&&d[U]!==3&&!(w&&w[U])){let k=A+x,D=C+S,z=k<0||D<0||k>=i||D>=i?-1:D*i+k,G=f[U],$=u[U];if(z>=0&&!isNaN(f[z]))d[U]===1&&d[z]===1&&Math.abs(f[U]-f[z])<=.6||f[z]>=G&&u[z]<=$?G=$:u[z]<=$+.01&&($=Math.max($,f[z]));else if(h===0){let Z=1e9;for(let q=0;q<n.L;q++)z>=0&&!isNaN(n.top[q][z])&&n.cls[q][z]!==4&&(Z=Math.min(Z,n.top[q][z]));$=Z<1e9?Math.max($,Z):n.voidKill?-25:Math.max($,G-8)}G-$>.01&&(F={y0:Math.round($*100)/100,y1:Math.round(G*100)/100,cl:d[U],kd:y[U]})}F&&E&&E.y0===F.y0&&E.y1===F.y1&&E.cl===F.cl&&E.kd===F.kd&&E.e===I-1?E.e=I:(R(),F&&(E={s:I,e:I,...F,line:M}))}R()}}PM(n,h,r,t)}for(let h of n.props||[]){let f=Math.max(h.hu,h.hv)*2,u=Math.min(h.hu,h.hv)*2,d=1;h.cells>260?d=3:f>3.2&&u>1.3&&f/u>1.7?d=e==="vertigo"?3:2:Su(Math.round(h.x*7),Math.round(h.z*7))<.16&&(d=3);let m=d===1?r.crate:d===2?r.metal:r.stone,y=d===1?t.crate:d===2?t.metal:t.stone,p=d===1?1.1:2,g=Math.cos(h.ang),b=Math.sin(h.ang),w=(S,N,M)=>[h.x+S*g-N*b,M,h.z+S*b+N*g],v=h.y0-.05,_=h.y1,T=[[-h.hu,-h.hv],[h.hu,-h.hv],[h.hu,h.hv],[-h.hu,h.hv]];for(let S=0;S<4;S++){let N=T[S],M=T[(S+1)%4],E=Math.hypot(M[0]-N[0],M[1]-N[1]),R=(N[0]+M[0])/2,I=(N[1]+M[1])/2,A=Math.hypot(R,I),C=[(R*g-I*b)/A,0,(R*b+I*g)/A],U=.82+.14*Math.abs(C[0]),F=cn(y,U),k=cn(F,.8),D=w(N[0],N[1],v),z=w(M[0],M[1],v),G=w(M[0],M[1],_),$=w(N[0],N[1],_),Z=Math.max(1,Math.round(E/p)),q=Math.max(1,Math.round((_-v)/p));ai(m,[D,z,G,$],C,F,oe=>[Math.hypot(oe[0]-D[0],oe[2]-D[2])/E*Z,(oe[1]-v)/(_-v)*q],[k,k,F,F])}let x=T.map(([S,N])=>w(S,N,_));ai(m,x,[0,1,0],cn(y,1.04),S=>{let N=S[0]-h.x,M=S[2]-h.z;return[(N*g+M*b+h.hu)/p,(-N*b+M*g+h.hv)/p]})}let o=new Rt,l=0,c=(h,f)=>{if(!h.pos.length)return;let u=new on;u.setAttribute("position",new gt(h.pos,3)),u.setAttribute("normal",new gt(h.nor,3)),u.setAttribute("color",new gt(h.col,3)),u.setAttribute("uv",new gt(h.uv,2)),u.computeBoundingSphere();let d=new Ke(u,new bn({vertexColors:!0,map:typeof document<"u"?AM(f):null}));d.matrixAutoUpdate=!1,d.castShadow=!0,d.receiveShadow=!0,o.add(d),l+=h.pos.length/9};return c(r.wall,t.wallTex),c(r.floor,t.floorTex),c(r.crate,"crate"),c(r.metal,"metal"),c(r.stone,"stone"),c(r.wood,"wood"),o.matrixAutoUpdate=!1,{mesh:o,tris:l,theme:t}}var CM=(()=>{let n=[];return n[0]=[],n[1]=[0,4,7],n[2]=[1,5,4],n[3]=[0,1,5,7],n[4]=[2,6,5],n[5]=[0,4,5,2,6,7],n[6]=[1,2,6,4],n[7]=[0,1,2,6,7],n[8]=[3,7,6],n[9]=[0,4,6,3],n[10]=[1,5,6,3,7,4],n[11]=[0,1,5,6,3],n[12]=[2,3,7,5],n[13]=[0,4,5,2,3],n[14]=[1,2,3,7,4],n[15]=[0,1,2,3],n})();function PM(n,e,t,i){let s=n.n,r=n.cell,a=n.top[e],o=n.bot[e],l=n.cls[e],c=d=>l[d]===3,h=t.wall,f=Ba(2.2),u=[0,0,0,0];for(let d=0;d<s-1;d++)for(let m=0;m<s-1;m++){u[0]=d*s+m,u[1]=d*s+m+1,u[2]=(d+1)*s+m+1,u[3]=(d+1)*s+m;let y=0;for(let x=0;x<4;x++)c(u[x])&&(y|=1<<x);if(!y)continue;let p=CM[y],g=(m+.5)*r,b=(d+.5)*r,w=[[g,b],[g+r,b],[g+r,b+r],[g,b+r]],v=p.map(x=>{if(x<4)return[w[x][0],w[x][1],a[u[x]],NaN,x];let S=x-4,N=(S+1)%4,M=c(u[S])?S:N,E=M===S?N:S,R=u[M],I=u[E],A;return!isNaN(a[I])&&l[I]===1?A=a[I]-.12:!isNaN(a[I])&&l[I]===2?A=a[I]-1.2:e===0?A=n.voidKill?-25:a[R]-8:A=o[R],[(w[S][0]+w[N][0])/2,(w[S][1]+w[N][1])/2,a[R],A,-1]});for(let x=1;x<v.length-1;x++)ka(h,[v[0][0],v[0][2],v[0][1]],[v[x+1][0],v[x+1][2],v[x+1][1]],[v[x][0],v[x][2],v[x][1]],i.wallTop,f);let _=0,T=0;for(let x of v)_+=x[0],T+=x[1];_/=v.length,T/=v.length;for(let x=0;x<v.length;x++){let S=v[x],N=v[(x+1)%v.length];if(S[4]>=0||N[4]>=0)continue;let M=N[1]-S[1],E=-(N[0]-S[0]),R=Math.hypot(M,E);M/=R,E/=R;let I=(S[0]+N[0])/2-_,A=(S[1]+N[1])/2-T;M*I+E*A<0&&(M=-M,E=-E);let C=.86+.1*Math.abs(M)-.04*Math.abs(E),U=cn(i.wall,C),F=cn(i.trim,C*.95),k=cn(U,.95),D=Math.min(S[2],S[3]+.45),z=Math.min(N[2],N[3]+.45),G=[S[0],S[3],S[1]],$=[N[0],N[3],N[1]],Z=[S[0],D,S[1]],q=[N[0],z,N[1]],ae=[S[0],S[2],S[1]],oe=[N[0],N[2],N[1]],Ee=wu(M,E,2.2);ai(h,[G,$,q,Z],[M,0,E],F,Ee,[cn(F,.75),cn(F,.75),F,F]),(S[2]>D+.01||N[2]>z+.01)&&ai(h,[Z,q,oe,ae],[M,0,E],U,Ee,[k,k,U,U])}}}function Jp(n,e,t,i=1){let s=pc(t),r=e.size;n.background=new Ve(s.sky[1]),n.fog=new Qr(s.fog,70,t==="vertigo"?460:330);let a=new V(.45,.62,.3).normalize(),o=new Ke(new Ts(900,24,12),new qn({side:pn,depthWrite:!1,fog:!1,uniforms:{a:{value:new Ve(s.sky[0])},b:{value:new Ve(s.sky[1])},sd:{value:a}},vertexShader:"varying vec3 vp; void main(){ vp = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.); }",fragmentShader:`uniform vec3 a; uniform vec3 b; uniform vec3 sd; varying vec3 vp; void main(){ vec3 col = mix(b, a, smoothstep(-0.05, 0.55, vp.y)); float s = max(dot(vp, sd), 0.); col += vec3(1.,.93,.75) * (pow(s, 700.) * 2.5 + pow(s, 14.) * .2); gl_FragColor = vec4(col, 1.);
#include <colorspace_fragment>
}`}));o.position.set(r/2,0,r/2),o.frustumCulled=!1,n.add(o),n.add(new di(s.hemiSky,s.ground,1));let l=new pi(s.sun,2.2);if(l.position.set(r/2+a.x*r,a.y*r,r/2+a.z*r),l.target.position.set(r/2,0,r/2),i>0){l.castShadow=!0;let h=l.shadow.camera,f=r*.62;h.left=-f,h.right=f,h.top=f,h.bottom=-f,h.near=1,h.far=r*2.4;let u=i>1?4096:2048;l.shadow.mapSize.set(u,u),l.shadow.bias=-8e-4,l.shadow.normalBias=.06}n.add(l,l.target),n.add(new ba("#ffffff",.1));let c=IM(7);if(t==="vertigo"){let h=new dn(1,1,1),f=new bn({color:"#ffffff"}),u=new Wn(h,f,140),d=new Gt;for(let y=0;y<140;y++){let p=c()*Math.PI*2,g=120+c()*320,b=40+c()*140;d.position.set(r/2+Math.cos(p)*g,-160+b/2,r/2+Math.sin(p)*g),d.scale.set(14+c()*26,b,14+c()*26),d.updateMatrix(),u.setMatrixAt(y,d.matrix),u.setColorAt(y,new Ve().setHSL(.58,.14,.45+c()*.25))}n.add(u);let m=new Ke(new Xn(3e3,3e3),new bn({color:s.ground}));m.rotation.x=-Math.PI/2,m.position.set(r/2,-160,r/2),n.add(m)}else{let h=new Ke(new Xn(3e3,3e3),new bn({color:s.ground}));h.rotation.x=-Math.PI/2,h.position.set(r/2,-.6,r/2),n.add(h);let f=new Ms(1,1,6,1),u=new bn({color:s.ground,flatShading:!0}),d=new Wn(f,u,40),m=new Gt;for(let y=0;y<40;y++){let p=y/40*Math.PI*2,g=260+c()*160,b=25+c()*50;m.position.set(r/2+Math.cos(p)*g,b/2-1,r/2+Math.sin(p)*g),m.scale.set(60+c()*60,b,60+c()*60),m.rotation.y=c()*3,m.updateMatrix(),d.setMatrixAt(y,m.matrix)}n.add(d)}return l}function IM(n){return()=>{n|=0,n=n+1831565813|0;let e=Math.imul(n^n>>>15,1|n);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}var Bi=.0254,nt={gravity:800*Bi,jump:301.993*Bi,accel:5.5,airAccel:12,friction:5.2,stop:80*Bi,airCap:30*Bi,hStand:72*Bi,hCrouch:54*Bi,eyeStand:64*Bi,eyeCrouch:46*Bi,walk:.52,crouchMul:.34,r:.4};function mc(n,e,t,i=0){return{x:n,y:e,z:t,vx:0,vy:0,vz:0,yaw:i,pitch:0,duck:0,onGround:!0,landT:0,h:nt.hStand,alive:!0,jumpHeld:!1}}var Tn=n=>nt.eyeStand+(nt.eyeCrouch-nt.eyeStand)*n.duck;function gc(n,e,t,i,s){let r=t.crouch?1:0;if(r>e.duck)e.duck=Math.min(1,e.duck+i*8);else if(r<e.duck){let p=Math.max(0,e.duck-i*8),g=nt.hStand+(nt.hCrouch-nt.hStand)*p;fc(n,e.x,e.z,e.y)>=e.y+g&&(e.duck=p)}let a=e.h;e.h=nt.hStand+(nt.hCrouch-nt.hStand)*e.duck,!e.onGround&&e.h<a&&(e.y+=(a-e.h)*.5);let o=s*(e.duck>.5?nt.crouchMul:t.walk?nt.walk:1),l=Math.sin(e.yaw),c=Math.cos(e.yaw),h=-l*t.f+c*t.s,f=-c*t.f-l*t.s,u=Math.hypot(h,f);if(u>1e-6?(h/=u,f/=u):o=0,e.onGround)if(t.jump&&!e.jumpHeld&&fc(n,e.x,e.z,e.y)>e.y+e.h+.05)e.vy=nt.jump,e.onGround=!1,e.jumpHeld=!0;else{let p=Math.hypot(e.vx,e.vz);if(p>.001){let g=Math.max(p,nt.stop)*nt.friction*i*(e.landT>0?1.4:1),b=Math.max(0,p-g)/p;e.vx*=b,e.vz*=b}jp(e,h,f,o,nt.accel,i)}e.onGround||jp(e,h,f,Math.min(o,nt.airCap),nt.airAccel,i,o),t.jump||(e.jumpHeld=!1),e.landT>0&&(e.landT-=i);let d=e.x+e.vx*i;Oi(n,d,e.z,e.y,e.h,nt.r)?e.vx=0:e.x=d;let m=e.z+e.vz*i;Oi(n,e.x,m,e.y,e.h,nt.r)?e.vz=0:e.z=m;let y=Mu(n,e.x,e.z,e.y,nt.r-.02);if(e.onGround&&(y>=e.y-.62&&y>-1/0?(e.y=y,e.vy=0):e.onGround=!1),!e.onGround){e.vy-=nt.gravity*i,e.y+=e.vy*i;let p=fc(n,e.x,e.z,e.y-e.vy*i);e.y+e.h>p&&e.vy>0&&(e.y=p-e.h,e.vy=0);let g=Mu(n,e.x,e.z,e.y-e.vy*i,nt.r-.02);if(e.vy<=0&&e.y<=g){let b=-e.vy;return e.y=g,e.vy=0,e.onGround=!0,e.landT=.12,b}}return 0}function jp(n,e,t,i,s,r,a){let o=n.vx*e+n.vz*t,l=i-o;if(l<=0)return;let c=s*r*(a||i);c>l&&(c=l),n.vx+=c*e,n.vz+=c*t}function Eu(n){let e=n/Bi;return e>580?Math.round((e-580)*(100/444)):0}function NM(n){let e=n.h,t=e/nt.hStand;return[{part:"head",y0:e-.27*t,y1:e,r:.13},{part:"chest",y0:e-.62*t,y1:e-.27*t,r:.22},{part:"stomach",y0:e-.9*t,y1:e-.62*t,r:.2},{part:"leg",y0:0,y1:e-.9*t,r:.18}]}function Qp(n,e,t,i,s,r,a,o){let l=null;for(let c of NM(n)){let h=n.x,f=n.z,u=e-h,d=i-f,m=s*s+a*a,y=2*(u*s+d*a),p=u*u+d*d-c.r*c.r,g;if(m<1e-9){if(p>0)continue;g=0}else{let w=y*y-4*m*p;if(w<0||(g=(-y-Math.sqrt(w))/(2*m),g<0&&(g=(-y+Math.sqrt(w))/(2*m)),g<0))continue}let b=t+r*g;b<n.y+c.y0||b>n.y+c.y1||g<=o&&(!l||g<l.t)&&(l={t:g,part:c.part})}return l}var DM=1.15,Au=.74;function t0(n){let t=n.n/2,i=t*t,s=n.cell*2,r=[];for(let v=0;v<n.L;v++)r.push(new Float32Array(i).fill(NaN));for(let v=0;v<t;v++)for(let _=0;_<t;_++){let T=(_+.5)*s,x=(v+.5)*s,S=n.idx(T,x);for(let N=0;N<n.L;N++){let M=n.top[N][S];if(isNaN(M))continue;let E=n.cls[N][S];E===3||E===4||Oi(n,T,x,M,nt.hCrouch+.05,.36)||(r[N][v*t+_]=M)}}let a={W:n,k:2,m:t,c:s,H:r,L:n.L};a.node=(v,_)=>v*i+_,a.pos=v=>{let _=Math.floor(v/i),T=v%i;return[(T%t+.5)*s,r[_][T],(Math.floor(T/t)+.5)*s,_]},a.nearest=(v,_,T)=>{let x=Math.floor(v/s),S=Math.floor(T/s),N=-1,M=1e9;for(let E=0;E<=6&&N<0;E++)for(let R=-E;R<=E;R++)for(let I=-E;I<=E;I++){if(Math.max(Math.abs(I),Math.abs(R))!==E)continue;let A=x+I,C=S+R;if(A<0||C<0||A>=t||C>=t)continue;let U=C*t+A;for(let F=0;F<n.L;F++){let k=r[F][U];if(isNaN(k)||a.main&&!a.main[F*i+U])continue;let D=Math.abs(k-_)*3+Math.hypot(I,R);D<M&&(M=D,N=F*i+U)}}return N};let o=[1,-1,0,0,1,1,-1,-1],l=[0,0,1,-1,1,-1,1,-1];a.neighbors=(v,_)=>{_.length=0;let T=Math.floor(v/i),x=v%i,S=x%t,N=(x-S)/t,M=r[T][x];for(let E=0;E<8;E++){let R=S+o[E],I=N+l[E];if(R<0||I<0||R>=t||I>=t)continue;let A=I*t+R;if(!(E>=4&&(!c(T,N*t+R,M)||!c(T,I*t+S,M))))for(let C=0;C<n.L;C++){let U=r[C][A];if(isNaN(U))continue;let F=U-M;F>DM||-F>2.2||F>Au&&E>=4||_.push(C*i+A,(E>=4?1.414:1)+(F>Au?4:0))}}return _};function c(v,_,T){for(let x=0;x<n.L;x++){let S=r[x][_];if(!isNaN(S)&&Math.abs(S-T)<=Au)return!0}return!1}let h=new Uint8Array(n.L*i);for(let v=0;v<n.L;v++)for(let _=0;_<i;_++){if(isNaN(r[v][_]))continue;let T=_%t,x=(_-T)/t,S=0;for(let N=0;N<8;N++){let M=T+o[N],E=x+l[N];(M<0||E<0||M>=t||E>=t||!c(v,E*t+M,r[v][_]))&&S++}h[v*i+_]=S}a.edge=h,a.N=i;let f=n.L*i,u=[],d=Array.from({length:0}),m=new Map,y=new Uint8Array(f),p=new Uint8Array(f),g=bu(n,32),b=-1;for(let v of g){let _=(v%n.n+.5)*n.cell,T=(Math.floor(v/n.n)+.5)*n.cell,x=Math.floor(T/a.c)*t+Math.floor(_/a.c);for(let S=n.L-1;S>=0;S--)if(!isNaN(r[S][x])){b=S*i+x;break}if(b>=0)break}if(b<0)for(let v=0;v<f&&b<0;v++)isNaN(r[Math.floor(v/i)][v%i])||(b=v);let w=[b];for(y[b]=1;w.length;){let v=w.pop();a.neighbors(v,u);for(let _=0;_<u.length;_+=2){let T=u[_],x=m.get(T);x||m.set(T,x=[]),x.push(v),y[T]||(y[T]=1,w.push(T))}}for(w=[b],p[b]=1;w.length;){let v=w.pop(),_=m.get(v);if(_)for(let T of _)p[T]||(p[T]=1,w.push(T))}a.main=new Uint8Array(f);for(let v=0;v<f;v++)a.main[v]=y[v]&p[v];return a}var Ls={a:[],f:[]};function n0(n,e,t,i=6e4){if(e<0||t<0)return null;let s=n.L*n.N;(!n.g||n.g.length!==s)&&(n.g=new Float32Array(s),n.came=new Int32Array(s),n.seen=new Uint32Array(s),n.closed=new Uint32Array(s),n.stamp=0);let r=n.g,a=n.came,o=n.seen,l=n.closed,c=++n.stamp,[h,,f]=n.pos(t),u=p=>{let g=n.pos(p);return Math.hypot(g[0]-h,g[2]-f)/n.c};Ls.a.length=0,Ls.f.length=0,e0(e,u(e)),r[e]=0,a[e]=-1,o[e]=c;let d=[],m=0;for(;Ls.a.length&&m++<i;){let p=UM();if(p===t)break;if(l[p]!==c){l[p]=c,n.neighbors(p,d);for(let g=0;g<d.length;g+=2){let b=d[g],w=r[p]+d[g+1]+n.edge[b]*.35;o[b]===c&&w>=r[b]||(o[b]=c,r[b]=w,a[b]=p,e0(b,w+u(b)))}}}if(o[t]!==c)return null;let y=[];for(let p=t;p!==-1;p=a[p])y.push(n.pos(p));return y.reverse(),FM(n,y)}function e0(n,e){let t=Ls.a,i=Ls.f;t.push(n),i.push(e);let s=t.length-1;for(;s>0;){let r=s-1>>1;if(i[r]<=i[s])break;[t[r],t[s]]=[t[s],t[r]],[i[r],i[s]]=[i[s],i[r]],s=r}}function UM(){let n=Ls.a,e=Ls.f,t=n[0],i=n.pop(),s=e.pop();if(n.length){n[0]=i,e[0]=s;let r=0;for(;;){let a=2*r+1,o=a+1,l=r;if(a<n.length&&e[a]<e[l]&&(l=a),o<n.length&&e[o]<e[l]&&(l=o),l===r)break;[n[l],n[r]]=[n[r],n[l]],[e[l],e[r]]=[e[r],e[l]],r=l}}return t}function FM(n,e){if(e.length<3)return e;let t=[e[0]];for(let i=1;i<e.length-1;i++){let s=t[t.length-1],r=e[i+1],a=[e[i][0]-s[0],e[i][2]-s[2]],o=[r[0]-e[i][0],r[2]-e[i][2]];(Math.abs(a[0]*o[1]-a[1]*o[0])>1e-4||Math.abs(e[i][1]-s[1])>.3||Math.hypot(e[i][0]-s[0],e[i][2]-s[2])>n.c*6)&&t.push(e[i])}return t.push(e[e.length-1]),t}function za(n,e){let t=n.W,i=new Set;for(let s of bu(t,e)){let r=(s%t.n+.5)*t.cell,a=(Math.floor(s/t.n)+.5)*t.cell,o=Math.floor(r/n.c),l=Math.floor(a/n.c),c=l*n.m+o;for(let h=t.L-1;h>=0;h--)if(!isNaN(n.H[h][c])&&n.main[h*n.N+c]){i.add(h*n.N+c);break}}return[...i]}var ft=n=>({auto:!1,pellets:1,hs:4,range:8192,rangeMod:.98,spread:.004,move:.12,kick:.6,sway:.4,kickCap:12,recover:9,scope:null,...n}),je={knife:ft({name:"Cuchillo",cat:"knife",side:"both",price:0,reward:1500,dmg:40,ap:.85,rpm:150,mag:0,reserve:0,speed:250,range:64,auto:!0}),glock:ft({name:"Glock-18",cat:"pistol",side:"T",price:200,reward:300,dmg:30,ap:.47,rpm:400,mag:20,reserve:120,reload:2.2,speed:240,rangeMod:.85,spread:.007,move:.05,kick:.9,sway:.4,kickCap:5}),usp:ft({name:"USP-S",cat:"pistol",side:"CT",price:200,reward:300,dmg:35,ap:.505,rpm:352,mag:12,reserve:24,reload:2.2,speed:240,rangeMod:.91,spread:.004,move:.045,kick:1.1,sway:.3,kickCap:5,silent:!0}),p2000:ft({name:"P2000",cat:"pistol",side:"CT",price:200,reward:300,dmg:35,ap:.505,rpm:352,mag:13,reserve:52,reload:2.2,speed:240,rangeMod:.91,spread:.005,move:.045,kick:1.1,sway:.3,kickCap:5}),dualies:ft({name:"Dual Berettas",cat:"pistol",side:"both",price:300,reward:300,dmg:38,ap:.575,rpm:500,mag:30,reserve:120,reload:3.8,speed:240,rangeMod:.79,spread:.009,move:.05,kick:1,sway:.5,kickCap:6}),p250:ft({name:"P250",cat:"pistol",side:"both",price:300,reward:300,dmg:38,ap:.64,rpm:400,mag:13,reserve:26,reload:2.2,speed:240,rangeMod:.85,spread:.007,move:.05,kick:1.3,sway:.4,kickCap:6}),tec9:ft({name:"Tec-9",cat:"pistol",side:"T",price:500,reward:300,dmg:33,ap:.903,rpm:500,mag:18,reserve:90,reload:2.5,speed:240,rangeMod:.831,spread:.009,move:.04,kick:1.2,sway:.5,kickCap:7}),fiveseven:ft({name:"Five-SeveN",cat:"pistol",side:"CT",price:500,reward:300,dmg:32,ap:.9115,rpm:400,mag:20,reserve:100,reload:2.2,speed:240,rangeMod:.81,spread:.007,move:.045,kick:1.1,sway:.4,kickCap:6}),cz75:ft({name:"CZ75-Auto",cat:"pistol",side:"both",price:500,reward:100,dmg:31,ap:.776,rpm:600,mag:12,reserve:12,reload:2.7,speed:240,rangeMod:.85,spread:.008,move:.05,kick:1.1,sway:.6,kickCap:8,auto:!0}),deagle:ft({name:"Desert Eagle",cat:"pistol",side:"both",price:700,reward:300,dmg:53,ap:.932,rpm:267,mag:7,reserve:35,reload:2.2,speed:230,rangeMod:.81,spread:.006,move:.1,kick:3.4,sway:.6,kickCap:8,recover:7}),r8:ft({name:"R8 Revolver",cat:"pistol",side:"both",price:600,reward:300,dmg:86,ap:.932,rpm:120,mag:8,reserve:8,reload:2.3,speed:220,rangeMod:.94,spread:.006,move:.1,kick:3.6,sway:.4,kickCap:8}),mac10:ft({name:"MAC-10",cat:"smg",side:"T",price:1050,reward:600,dmg:29,ap:.575,rpm:800,mag:30,reserve:100,reload:2.6,speed:240,rangeMod:.8,auto:!0,spread:.009,move:.025,kick:.6,sway:.7,kickCap:7}),mp9:ft({name:"MP9",cat:"smg",side:"CT",price:1250,reward:600,dmg:26,ap:.6,rpm:857,mag:30,reserve:120,reload:2.1,speed:240,rangeMod:.87,auto:!0,spread:.008,move:.025,kick:.55,sway:.6,kickCap:7}),mp7:ft({name:"MP7",cat:"smg",side:"both",price:1500,reward:600,dmg:29,ap:.625,rpm:750,mag:30,reserve:120,reload:3.1,speed:220,rangeMod:.85,auto:!0,spread:.007,move:.03,kick:.5,sway:.5,kickCap:7}),mp5:ft({name:"MP5-SD",cat:"smg",side:"both",price:1500,reward:600,dmg:27,ap:.625,rpm:750,mag:30,reserve:120,reload:2.6,speed:235,rangeMod:.85,auto:!0,spread:.007,move:.025,kick:.45,sway:.5,kickCap:6,silent:!0}),ump:ft({name:"UMP-45",cat:"smg",side:"both",price:1200,reward:600,dmg:35,ap:.65,rpm:666,mag:25,reserve:100,reload:3.5,speed:230,rangeMod:.75,auto:!0,spread:.008,move:.03,kick:.6,sway:.5,kickCap:7}),p90:ft({name:"P90",cat:"smg",side:"both",price:2350,reward:300,dmg:26,ap:.69,rpm:857,mag:50,reserve:100,reload:3.3,speed:230,rangeMod:.86,auto:!0,spread:.008,move:.03,kick:.45,sway:.6,kickCap:7}),bizon:ft({name:"PP-Bizon",cat:"smg",side:"both",price:1400,reward:600,dmg:27,ap:.575,rpm:750,mag:64,reserve:120,reload:2.4,speed:240,rangeMod:.8,auto:!0,spread:.009,move:.03,kick:.45,sway:.6,kickCap:6}),nova:ft({name:"Nova",cat:"heavy",side:"both",price:1050,reward:900,dmg:26,ap:.5,rpm:68,mag:8,reserve:32,reload:4,speed:220,rangeMod:.7,pellets:9,spread:.06,move:.04,kick:3,sway:.5,range:3e3}),xm1014:ft({name:"XM1014",cat:"heavy",side:"both",price:2e3,reward:900,dmg:20,ap:.8,rpm:171,mag:7,reserve:32,reload:3.5,speed:215,rangeMod:.7,pellets:6,spread:.065,move:.04,kick:2.5,sway:.6,range:3500}),sawedoff:ft({name:"Sawed-Off",cat:"heavy",side:"T",price:1100,reward:900,dmg:32,ap:.75,rpm:71,mag:7,reserve:32,reload:3.6,speed:210,rangeMod:.45,pellets:8,spread:.09,move:.04,kick:3,sway:.6,range:1400}),mag7:ft({name:"MAG-7",cat:"heavy",side:"CT",price:1300,reward:900,dmg:30,ap:.75,rpm:71,mag:5,reserve:32,reload:2.5,speed:225,rangeMod:.45,pellets:8,spread:.05,move:.04,kick:3,sway:.5,range:1400}),m249:ft({name:"M249",cat:"heavy",side:"both",price:5200,reward:300,dmg:32,ap:.8,rpm:750,mag:100,reserve:200,reload:5.7,speed:195,rangeMod:.97,auto:!0,spread:.009,move:.15,kick:.6,sway:.8,kickCap:9}),negev:ft({name:"Negev",cat:"heavy",side:"both",price:1700,reward:300,dmg:35,ap:.71,rpm:800,mag:150,reserve:300,reload:5.7,speed:150,rangeMod:.97,auto:!0,spread:.012,move:.15,kick:.7,sway:.6,kickCap:6}),galil:ft({name:"Galil AR",cat:"rifle",side:"T",price:1800,reward:300,dmg:30,ap:.775,rpm:666,mag:35,reserve:90,reload:3,speed:215,auto:!0,spread:.005,move:.14,kick:.62,sway:.5,kickCap:10}),famas:ft({name:"FAMAS",cat:"rifle",side:"CT",price:2050,reward:300,dmg:30,ap:.7,rpm:666,mag:25,reserve:90,reload:3.3,speed:220,auto:!0,spread:.005,move:.14,kick:.6,sway:.5,kickCap:10}),ak47:ft({name:"AK-47",cat:"rifle",side:"T",price:2700,reward:300,dmg:36,ap:.775,rpm:600,mag:30,reserve:90,reload:2.5,speed:215,auto:!0,spread:.0049,move:.16,kick:.82,sway:.75,kickCap:13}),m4a4:ft({name:"M4A4",cat:"rifle",side:"CT",price:3100,reward:300,dmg:33,ap:.7,rpm:666,mag:30,reserve:90,reload:3.1,speed:225,auto:!0,spread:.0042,move:.15,kick:.68,sway:.6,kickCap:11}),m4a1s:ft({name:"M4A1-S",cat:"rifle",side:"CT",price:2900,reward:300,dmg:38,ap:.7,rpm:600,mag:20,reserve:80,reload:3.1,speed:225,auto:!0,spread:.0035,move:.15,kick:.58,sway:.45,kickCap:9,silent:!0}),sg553:ft({name:"SG 553",cat:"rifle",side:"T",price:3e3,reward:300,dmg:30,ap:1,rpm:545,mag:30,reserve:90,reload:2.8,speed:210,auto:!0,spread:.0045,move:.15,kick:.72,sway:.6,kickCap:11,scope:[1.8]}),aug:ft({name:"AUG",cat:"rifle",side:"CT",price:3300,reward:300,dmg:28,ap:.9,rpm:600,mag:30,reserve:90,reload:3.8,speed:220,auto:!0,spread:.004,move:.15,kick:.62,sway:.5,kickCap:10,scope:[1.8]}),ssg08:ft({name:"SSG 08",cat:"sniper",side:"both",price:1700,reward:300,dmg:88,ap:.85,rpm:48,mag:10,reserve:90,reload:3.7,speed:230,rangeMod:.99,spread:.035,scoped:.0012,move:.12,kick:3,sway:.2,kickCap:4,scope:[3.6,9]}),awp:ft({name:"AWP",cat:"sniper",side:"both",price:4750,reward:100,dmg:115,ap:.975,rpm:41,mag:5,reserve:30,reload:3.7,speed:200,rangeMod:.99,spread:.08,scoped:9e-4,move:.2,kick:4.5,sway:.2,kickCap:5,scope:[2.25,9]}),g3sg1:ft({name:"G3SG1",cat:"sniper",side:"T",price:5e3,reward:300,dmg:80,ap:.825,rpm:240,mag:20,reserve:90,reload:4.7,speed:215,rangeMod:.98,auto:!0,spread:.05,scoped:.0018,move:.2,kick:1.6,sway:.4,kickCap:6,scope:[2.25,9]}),scar20:ft({name:"SCAR-20",cat:"sniper",side:"CT",price:5e3,reward:300,dmg:80,ap:.825,rpm:240,mag:20,reserve:90,reload:3.1,speed:215,rangeMod:.98,auto:!0,spread:.05,scoped:.0018,move:.2,kick:1.6,sway:.4,kickCap:6,scope:[2.25,9]}),zeus:ft({name:"Zeus x27",cat:"equip",side:"both",price:200,reward:0,dmg:500,ap:1,rpm:30,mag:1,reserve:0,reload:0,speed:245,range:183,spread:.01,move:.02,kick:1}),vest:{name:"Chaleco",cat:"gear",side:"both",price:650},vesthelm:{name:"Chaleco + Casco",cat:"gear",side:"both",price:1e3},defuser:{name:"Kit de desactivaci\xF3n",cat:"gear",side:"CT",price:400},he:{name:"Granada HE",cat:"grenade",side:"both",price:300,reward:300},flash:{name:"Flashbang",cat:"grenade",side:"both",price:200,reward:300,max:2},smoke:{name:"Humo",cat:"grenade",side:"both",price:300,reward:300},molotov:{name:"Molotov",cat:"grenade",side:"T",price:400,reward:300},incendiary:{name:"Incendiaria",cat:"grenade",side:"CT",price:500,reward:300},decoy:{name:"Se\xF1uelo",cat:"grenade",side:"both",price:50,reward:300},c4:{name:"C4",cat:"c4",side:"T",price:0}};for(let[n,e]of Object.entries(je))e.id=n;var xc=[{name:"Pistolas",items:{T:["glock","dualies","p250","tec9","cz75","deagle","r8"],CT:["usp","p2000","dualies","p250","fiveseven","cz75","deagle","r8"]}},{name:"Intermedias",items:{T:["mac10","mp7","mp5","ump","p90","bizon","nova","xm1014","sawedoff","m249","negev"],CT:["mp9","mp7","mp5","ump","p90","bizon","nova","xm1014","mag7","m249","negev"]}},{name:"Rifles",items:{T:["galil","ak47","sg553","ssg08","awp","g3sg1"],CT:["famas","m4a4","m4a1s","aug","ssg08","awp","scar20"]}},{name:"Equipo",items:{T:["vest","vesthelm","zeus"],CT:["vest","vesthelm","defuser","zeus"]}},{name:"Granadas",items:{T:["molotov","decoy","flash","smoke","he"],CT:["incendiary","decoy","flash","smoke","he"]}}],Ns=n=>{let e=je[n].cat;return e==="pistol"?2:e==="knife"?3:e==="grenade"?4:e==="c4"?5:e==="equip"?3:1},Ln={start:800,max:16e3,winElim:3250,winBombT:3500,winDefuse:3500,winTime:3250,loss:[1400,1900,2400,2900,3400],plantBonus:800,plantReward:300,defuseReward:300,teamKill:-300},OM={head:4,chest:1,stomach:1.25,arm:1,leg:.75};function Ru(n,e,t,i,s,r=4){let a=n*(t==="head"?r:OM[t]),o=0,l=t!=="leg"&&(t!=="head"||s);if(i>0&&l){let c=a*e;o=(a-c)*.5,o>i&&(o=i,c=a-i*2),a=c}return{hp:Math.max(1,Math.round(a)),armor:Math.round(o)}}var Cu=.0254,Pt={g:800*.4*Cu,speed:750*.9*Cu,step:1/64,fuse:{he:1.6,flash:1.6},molAir:2,smokeLife:18,fireLife:7,decoyLife:15,smokeR:3.6,fireR:2.6,heR:350*Cu,heDmg:98};function i0(n,e,t,i,s,r,a,o,l,c,h=1){let f=Pt.speed*(.3+.7*h),u=o+10*Math.PI/180*(1-Math.abs(o)/(Math.PI/2)),d=-Math.sin(a)*Math.cos(u),m=Math.sin(u),y=-Math.cos(a)*Math.cos(u);return{type:n,owner:e,team:t,x:i+d*.3,y:s+m*.3,z:r+y*.3,vx:d*f+l*1.25,vy:m*f,vz:y*f+c*1.25,t:0,acc:0,rest:!1,state:"fly",life:0}}function s0(n,e,t,i){for(e.acc+=t;e.acc>=Pt.step;){e.acc-=Pt.step;let s=Pt.step;if(e.state==="fly"){if(e.t+=s,!e.rest){e.vy-=Pt.g*s;let a=Math.hypot(e.vx,e.vy,e.vz),o=a*s;if(o>1e-5){let l=ls(n,e.x,e.y,e.z,e.vx/a,e.vy/a,e.vz/a,o+.04);if(l&&l.t<=o+.04){let c=Math.max(0,l.t-.04);e.x+=e.vx/a*c,e.y+=e.vy/a*c,e.z+=e.vz/a*c;let h=[l.nx,l.ny,l.nz];if((e.type==="molotov"||e.type==="incendiary")&&h[1]>.7){yc(n,e,i);continue}let f=e.vx*h[0]+e.vy*h[1]+e.vz*h[2];e.vx-=2*f*h[0],e.vy-=2*f*h[1],e.vz-=2*f*h[2],e.vx*=.45,e.vy*=.45,e.vz*=.45,h[1]>.7&&(e.vx*=.75,e.vz*=.75,Math.abs(e.vy)<1.2&&(e.vy=0,Math.hypot(e.vx,e.vz)<.25&&(e.rest=!0))),a>2&&i.push({type:"bounce",g:e})}else e.x+=e.vx*s,e.y+=e.vy*s,e.z+=e.vz*s}if(!e.rest&&e.vy===0){let l=Sr(n,e.x,e.z,e.y+.3);l>-1e8&&e.y-l<.06?(e.y=l+.03,e.vx*=Math.max(0,1-s*2.5),e.vz*=Math.max(0,1-s*2.5),Math.hypot(e.vx,e.vz)<.2&&(e.rest=!0)):e.vy=-.01}if(e.y<-40){e.state="done",i.push({type:"end",g:e});continue}}let r=Pt.fuse[e.type];r&&e.t>=r?yc(n,e,i):(e.type==="molotov"||e.type==="incendiary")&&e.t>=Pt.molAir?(e.air=!0,yc(n,e,i)):(e.type==="smoke"||e.type==="decoy")&&e.rest&&e.t>.9&&yc(n,e,i)}else e.state==="active"&&(e.life-=s,e.life<=0&&(e.state="done",i.push({type:"end",g:e})))}}function yc(n,e,t){if(e.state="active",e.vx=e.vy=e.vz=0,e.type==="smoke")e.life=Pt.smokeLife;else if(e.type==="decoy")e.life=Pt.decoyLife;else if(e.type==="molotov"||e.type==="incendiary")if(e.air)e.life=.01;else{e.life=Pt.fireLife;let i=Sr(n,e.x,e.z,e.y+.5);i>-1e8&&(e.y=i)}else e.life=.01;t.push({type:"det",g:e})}function r0(n,e,t,i,s,r,a){for(let o of n){if(o.type!=="smoke"||o.state!=="active"||o.life<.6)continue;let l=Pt.smokeR*Math.min(1,(Pt.smokeLife-o.life)*1.5+.2),c=o.x,h=o.y+1.2,f=o.z,u=s-e,d=r-t,m=a-i,y=u*u+d*d+m*m,p=y>0?((c-e)*u+(h-t)*d+(f-i)*m)/y:0;p=Math.max(0,Math.min(1,p));let g=e+u*p-c,b=(t+d*p-h)*1.4,w=i+m*p-f;if(g*g+b*b+w*w<l*l)return!0}return!1}function a0(n,e,t,i){for(let s of n)if(!(s.type!=="molotov"&&s.type!=="incendiary"||s.state!=="active"||s.air)&&Math.abs(t-s.y)<1.2&&Math.hypot(e-s.x,i-s.z)<Pt.fireR)return s;return null}var Ot={freeze:12,live:115,buy:20,post:6,bomb:40,plant:3.2,defuse:10,kit:5,over:10},Pu={rapida:{win:5,max:8,name:"R\xE1pida"},corta:{win:9,max:16,name:"Corta"},comp:{win:13,max:24,name:"Competitiva"}},o0=["Toto","Lalo","Pipo","Chino","Fede","Nacho","Rulo","Coco","Tincho","Beto","Pato","Quique"],Ds=(n,e)=>(n^e)===0?"T":"CT",l0=n=>n==="T"?"glock":"usp";function Iu(n){let e={},t=!0,i=0,s=[1,1],r=null,a=new Map,o=0,l=0,c=!1,h=1;e.setup=M=>{n.players.clear();let E=n.cfg,R=[0,0],I=M.slice().sort((U,F)=>U.slot-F.slot);for(let U of I)(U.pref===0||U.pref===1)&&R[U.pref]++;for(let U of I){let F=U.pref;F!==0&&F!==1&&(F=R[0]<=R[1]?0:1,R[F]++);let k=f(U.id,U.name,!1,F);k.skT=(U.sk&&U.sk[0])|0,k.skCT=(U.sk&&U.sk[1])|0,k.fin=U.fin|0,n.players.set(U.id,k)}let A=E.bots?Math.max(R[0],R[1],E.size||5):0,C=0;for(let U=0;U<2;U++)for(let F=R[U];F<A;F++){let k="bot"+C++,D=f(k,o0[C%o0.length]+" (bot)",!0,U);D.skT=Math.floor(Math.random()*4),D.skCT=Math.floor(Math.random()*4),D.fin=Math.random()<.7?0:Math.floor(Math.random()*6),n.players.set(k,D)}n.round=0,n.score=[0,0],n.half=0,s=[1,1],c=!1;for(let U of n.players.values())U.team=Ds(U.grp,0);n.spawns={T:u("T"),CT:u("CT")}};function f(M,E,R,I){return{id:M,name:E,bot:R,grp:I,team:"T",x:0,y:0,z:0,yaw:0,pitch:0,vx:0,vz:0,duck:0,hp:100,ar:0,helm:!1,money:Ln.start,alive:!1,k:0,d:0,a:0,mvp:0,dmgR:0,inv:{p:null,s:null,g:[],c4:!1,kit:!1,zeus:!1,v:1,pa:null,sa:null},god:!1}}function u(M){let E=n.nav,R=za(E,M==="T"?16:32),I=0,A=0,C=R.map(Z=>E.pos(Z));for(let Z of C)I+=Z[0],A+=Z[2];I/=C.length,A/=C.length,C.sort((Z,q)=>Math.hypot(Z[0]-I,Z[2]-A)-Math.hypot(q[0]-I,q[2]-A));let U=[];for(let Z of C)if(U.every(q=>Math.hypot(q[0]-Z[0],q[2]-Z[2])>1.5)&&U.push(Z),U.length>=12)break;let F=n.info.zones,k=n.W.cell,D=((F.A[0]+F.A[2])/2+(F.B[0]+F.B[2])/2)/2*k,z=((F.A[1]+F.A[3])/2+(F.B[1]+F.B[3])/2)/2*k,G=M==="T"?D:(F.T[0]+F.T[2])/2*k,$=M==="T"?z:(F.T[1]+F.T[3])/2*k;return{pts:U.map(Z=>[Z[0],Z[1],Z[2],Math.atan2(-(G-Z[0]),-($-Z[2]))]),cx:I,cz:A}}e.adopt=()=>{n.spawns={T:u("T"),CT:u("CT")}},e.buyZone=M=>{let E=n.spawns[M.team];return Math.hypot(M.x-E.cx,M.z-E.cz)<22||_i(n.W,M.x,M.z)&(M.team==="T"?16:32)},e.canBuyTime=()=>n.phase==="freeze"||n.phase==="live"&&Ot.live-n.timeLeft<Ot.buy&&n.bomb.state!=="planted",e.startMatch=()=>{n.phase="freeze",d(!0)};function d(M){n.round++,n.phase="freeze",n.timeLeft=Ot.freeze,n.drops.clear(),n.nades.length=0,a.clear(),r=null,n.bomb={state:"carried",carrier:null,x:0,y:0,z:0,t:0};let E={T:0,CT:0},R={},I=[...n.players.values()].sort(()=>Math.random()-.5);for(let C of I){C.team=Ds(C.grp,n.half),!C.alive||M?(C.inv={p:null,s:l0(C.team),g:[],c4:!1,kit:!1,zeus:!1,v:(C.inv.v||0)+1,pa:null,sa:null},!C.alive&&!M&&(C.ar=0,C.helm=!1),M&&(C.ar=0,C.helm=!1)):(C.inv.c4=!1,C.team==="T"&&(C.inv.kit=!1),C.inv.pa=C.inv.sa=null,C.inv.v++),C.hp=100,C.alive=!0,C.dmgR=0,C.dmgBy={};let U=n.spawns[C.team].pts,F=E[C.team]++%U.length;R[C.id]=U[F]}let A=I.filter(C=>C.team==="T");if(A.length){let C=A[Math.floor(Math.random()*A.length)];C.inv.c4=!0,n.bomb.carrier=C.id}t=!0,n.emit("rs",{pos:R,round:n.round}),n.emit("st",e.snapshot())}function m(M,E){if(n.phase!=="live"&&n.phase!=="freeze")return;n.phase="post",n.timeLeft=Ot.post;let R=[...n.players.values()].find(k=>k.team===M)?.grp??(M===Ds(0,n.half)?0:1);n.score[R]++;let I=E==="bomb"?Ln.winBombT:E==="defuse"?Ln.winDefuse:E==="time"?Ln.winTime:Ln.winElim,A=1-R;s[A]=Math.min(5,s[A]+1),s[R]=Math.max(0,s[R]-1);let C=Ln.loss[Math.max(0,s[A]-1)];for(let k of n.players.values())if(k.grp===R)g(k,I);else{if(E==="time"&&k.team==="T"&&k.alive)continue;g(k,C+(k.team==="T"&&n.bomb.state==="defused"?Ln.plantBonus:0))}let U=null,F=-1;for(let k of n.players.values())if(k.grp===R){let D=(k.rk||0)*10+k.dmgR/100+(k.id===r&&E==="bomb"?30:0)+(k.defused?30:0);D>F&&(F=D,U=k)}U&&U.mvp++;for(let k of n.players.values())k.rk=0,k.defused=!1;t=!0,n.emit("ev",{t:"end",win:M,reason:E,score:n.score.slice(),mvp:U&&U.id,loss:C})}function y(){let M=Pu[n.cfg.len];if(n.score[0]>=M.win||n.score[1]>=M.win||n.round>=M.max){n.phase="over",n.timeLeft=Ot.over,l=Ot.over;let R=n.score[0]>n.score[1]?0:n.score[1]>n.score[0]?1:-1;n.emit("ev",{t:"over",wg:R,score:n.score.slice()}),t=!0,setTimeout(()=>{if(c)return;c=!0;let I=[...n.players.values()].filter(C=>!C.bot&&(R<0||C.grp===R)).map(C=>C.id),A=R<0?"Empate "+n.score.join(" \u2013 "):"\u{1F451} Ganan "+p(R)+" "+Math.max(...n.score)+" \u2013 "+Math.min(...n.score);n.end(I,A)},Ot.over*1e3);return}if(n.round===M.max/2){n.half=1,s=[1,1];for(let R of n.players.values())R.money=Ln.start,R.alive=!1,R.ar=0,R.helm=!1;n.emit("ev",{t:"half"}),d(!0);return}d(!1)}let p=M=>{let E=[...n.players.values()].filter(R=>R.grp===M&&!R.bot).map(R=>R.name);return E.length?E.slice(0,3).join(", "):Ds(M,n.half)==="T"?"los Terroristas":"los Contraterroristas"};function g(M,E){M.money=Math.max(0,Math.min(Ln.max,M.money+E))}function b(){if(n.phase!=="live")return;let M=0,E=0,R=0,I=0;for(let A of n.players.values())A.team==="T"?(R++,A.alive&&M++):(I++,A.alive&&E++);if(I&&E===0)return m("T","elim");if(R&&M===0&&n.bomb.state!=="planted")return m("CT","elim")}e.tick=M=>{if(n.phase!=="lobby"){if(n.timeLeft-=M,n.phase==="freeze"&&n.timeLeft<=0)n.phase="live",n.timeLeft=Ot.live,t=!0,n.emit("ev",{t:"go"});else if(n.phase==="live"){let E=n.bomb;if(E.state==="planted"){E.t-=M,n.timeLeft=E.t;for(let[R,I]of a){let A=n.players.get(R);if(!A||!A.alive||Math.hypot(A.x-E.x,A.z-E.z)>2.2){a.delete(R);continue}A.bot&&n.time-I.t0>=I.dur&&T(A)}E.t<=0&&E.state==="planted"&&x()}else n.timeLeft<=0&&m("CT","time");if(o-=M,o<=0){o=.25;for(let R of n.players.values()){if(!R.alive)continue;let I=a0(n.nades,R.x,R.y,R.z);I&&e.damage(R.id,I.owner,10,"fire",I.type,{raw:!0})}}}else n.phase==="post"&&n.timeLeft<=0&&y();i-=M,(t&&i<=0||i<-2)&&(i=.1,t=!1,n.emit("st",e.snapshot()))}},e.markDirty=()=>{t=!0},e.snapshot=()=>({ph:n.phase,tl:+n.timeLeft.toFixed(2),r:n.round,sc:n.score,hf:n.half,b:{s:n.bomb.state,c:n.bomb.carrier,x:+n.bomb.x.toFixed(2),y:+n.bomb.y.toFixed(2),z:+n.bomb.z.toFixed(2),t:+n.bomb.t.toFixed(2),site:n.bomb.site},dr:[...n.drops.values()].map(M=>[M.id,M.w,+M.x.toFixed(2),+M.y.toFixed(2),+M.z.toFixed(2),M.ammo]),p:[...n.players.values()].map(M=>[M.id,M.name,M.bot?1:0,M.grp,M.team,M.hp,M.ar,M.helm?1:0,M.money,M.alive?1:0,M.k,M.d,M.a,M.mvp,M.inv,M.god?1:0,M.skT|0,M.skCT|0,M.fin|0])}),e.damage=(M,E,R,I,A,C={})=>{let U=n.players.get(M),F=n.players.get(E);if(!U||!U.alive||n.phase==="over"||F&&F!==U&&F.team===U.team||U.god)return;let k,D=0;if(C.raw)k=Math.round(R);else{let z=je[A],G=Ru(R,C.ap??(z?.ap||.5),I,U.ar,U.helm);k=G.hp,D=G.armor}k=Math.min(k,U.hp),U.hp-=k,U.ar=Math.max(0,U.ar-D),F&&F!==U&&(F.dmgR+=k,U.dmgBy[E]=(U.dmgBy[E]||0)+k),t=!0,n.emit("ev",{t:"hurt",v:M,a:E,n:k,hs:I==="head",w:A,helm:U.helm&&I==="head"}),U.hp<=0&&w(U,F,A,I==="head",C.wb)};function w(M,E,R,I,A){if(M.hp=0,M.alive=!1,M.d++,E&&E!==M)if(E.team!==M.team){E.k++,E.rk=(E.rk||0)+1;let U=je[R];g(E,U?.reward??300)}else E.k--,g(E,Ln.teamKill);for(let[U,F]of Object.entries(M.dmgBy||{}))if(U!==E?.id&&F>=41){let k=n.players.get(U);k&&k.team!==M.team&&k.a++}let C=M.inv.p||(M.inv.s&&M.inv.s!==l0(M.team)?M.inv.s:null)||M.inv.s;C&&_(C,M.x,M.y,M.z,null,M.yaw),M.inv.c4&&(M.inv.c4=!1,v(M)),M.inv.kit&&_("defuser",M.x+.3,M.y,M.z,null,0),M.inv={...M.inv,p:null,s:null,g:[],kit:!1,zeus:!1,c4:!1,v:M.inv.v+1},a.delete(M.id),t=!0,n.emit("ev",{t:"kill",k:E?E.id:null,v:M.id,w:R,hs:!!I,wb:!!A}),b()}function v(M){n.bomb.state="dropped",n.bomb.carrier=null,n.bomb.x=M.x,n.bomb.y=M.y,n.bomb.z=M.z,n.emit("ev",{t:"bombdrop"})}function _(M,E,R,I,A,C=0){let U=h++,F=E-Math.sin(C)*.6,k=I-Math.cos(C)*.6,D=!n.solidAt(F,R+.3,k);n.drops.set(U,{id:U,w:M,x:D?F:E,y:n.floorAt(D?F:E,D?k:I,R+.6)+.05,z:D?k:I,ammo:A||null}),t=!0}e.handle=(M,E,R,I={})=>{let A=n.players.get(R);if(A)switch(M){case"hit":{if(!A.alive&&n.phase!=="post")return;let C=je[E.w];if(!C)return;let U=C.cat==="knife"?180:C.dmg*C.pellets*1.01;e.damage(E.t,R,Math.min(+E.d||0,U),E.part,E.w,{wb:E.wb});break}case"buy":S(A,E.i);break;case"drop":{if(!A.alive)return;let C=E.s;if(C==="zeus"){A.inv.zeus=!1,A.inv.v++,t=!0;return}if(C==="c4"){if(!A.inv.c4)return;A.inv.c4=!1,A.inv.v++,v({x:E.x,y:E.y,z:E.z}),n.bomb.x-=Math.sin(E.yaw)*.6,n.bomb.z-=Math.cos(E.yaw)*.6,n.bomb.y=n.floorAt(n.bomb.x,n.bomb.z,E.y+.6),t=!0;return}let U=C==="p"?A.inv.p:C==="s"?A.inv.s:null;if(!U)return;A.inv[C]=null,A.inv.v++,_(U,E.x,E.y,E.z,E.ammo,E.yaw);break}case"take":{if(!A.alive)return;if(E.id==="c4"){if(A.team!=="T"||n.bomb.state!=="dropped"||Math.hypot(A.x-n.bomb.x,A.z-n.bomb.z)>1.8)return;A.inv.c4=!0,A.inv.v++,n.bomb.state="carried",n.bomb.carrier=A.id,t=!0,n.emit("ev",{t:"bombpick",p:A.id});return}let C=n.drops.get(E.id);if(!C||Math.hypot(A.x-C.x,A.z-C.z)>2.2)return;if(C.w==="defuser"){if(A.team!=="CT"||A.inv.kit)return;A.inv.kit=!0,A.inv.v++,n.drops.delete(C.id),t=!0;return}let U=Ns(C.w)===1?"p":"s";if(A.inv[U]){if(!E.swap)return;_(A.inv[U],A.x,A.y,A.z,E.ammo,A.yaw)}A.inv[U]=C.w,A.inv[U+"a"]=C.ammo,A.inv.v++,n.drops.delete(C.id),t=!0;break}case"nade":{let C=A.inv.g.indexOf(E.type);if(C<0)return;A.inv.g.splice(C,1),A.inv.v++,t=!0;break}case"plant":{let C=_i(n.W,E.x,E.z)&12;if(!A.alive||!A.inv.c4||n.phase!=="live"||!C||n.bomb.state==="planted")return;A.inv.c4=!1,A.inv.v++,Object.assign(n.bomb,{state:"planted",carrier:null,x:E.x,y:E.y,z:E.z,t:Ot.bomb,site:C&4?"A":"B"}),r=A.id,g(A,Ln.plantReward),t=!0,n.emit("ev",{t:"plant",p:A.id,site:n.bomb.site}),b();break}case"defst":{if(!A.alive||A.team!=="CT"||n.bomb.state!=="planted"||Math.hypot(A.x-n.bomb.x,A.z-n.bomb.z)>2.2)return;a.set(A.id,{t0:n.time,dur:A.inv.kit?Ot.kit:Ot.defuse}),n.emit("ev",{t:"defst",p:A.id,kit:A.inv.kit});break}case"defx":a.delete(R);break;case"defok":{let C=a.get(R);if(!C||!A.alive||n.bomb.state!=="planted"||n.time-C.t0<C.dur-.5)return;T(A);break}case"adm":I.admin&&N(A,E);break;case"fall":A.alive&&e.damage(R,R,Math.min(999,+E.d||0),"chest","world",{raw:!0});break}},e.botDefuse=M=>{a.has(M.id)||e.handle("defst",{},M.id)},e.isDefusing=M=>a.has(M);function T(M){a.clear(),n.bomb.state="defused",M.defused=!0,g(M,Ln.defuseReward),n.emit("ev",{t:"defused",p:M.id}),m("CT","defuse")}function x(){let M=n.bomb;M.state="exploded",n.emit("ev",{t:"boom",x:M.x,y:M.y,z:M.z});let E=1750*.0254/3;for(let R of n.players.values()){if(!R.alive)continue;let I=Math.hypot(R.x-M.x,R.y-M.y,R.z-M.z),A=500*Math.exp(-(I*I)/(2*E*E));if(A>1){let C=Ru(A,.5,"chest",R.ar,R.helm);R.hp-=Math.min(R.hp,C.hp),R.ar=Math.max(0,R.ar-C.armor),R.hp<=0&&(R.alive=!1,R.d++,n.emit("ev",{t:"kill",k:null,v:R.id,w:"c4"}))}}t=!0,m("T","bomb")}e.heBlast=(M,E)=>{for(let R of n.players.values()){if(!R.alive)continue;let I=Math.hypot(R.x-M.x,R.y+1-M.y,R.z-M.z);if(I>Pt.heR||!E(M,R))continue;let A=Pt.heDmg*(1-I/Pt.heR);A<1||e.damage(R.id,M.owner,A,"chest","he",{ap:.5})}};function S(M,E){let R=je[E],I=U=>n.emitTo(M.id,"ev",{t:"deny",why:U});if(!R||!M.alive)return;if(!e.canBuyTime())return I("Se termin\xF3 el tiempo de compra");if(!e.buyZone(M))return I("Ten\xE9s que estar en tu zona de compra");if(R.side!=="both"&&R.side!==M.team)return I("No disponible para tu equipo");let A=R.price,C=M.inv;if(E==="vest"){if(M.ar>=100)return I("Ya ten\xE9s chaleco")}else if(E==="vesthelm"){if(M.ar>=100&&M.helm)return I("Ya ten\xE9s chaleco y casco");M.ar>=100&&(A=350)}else if(E==="defuser"){if(C.kit)return I("Ya ten\xE9s el kit")}else if(E==="zeus"){if(C.zeus)return I("Ya ten\xE9s la Zeus")}else if(R.cat==="grenade"){let U=C.g.length,F=C.g.filter(k=>k===E||(k==="molotov"||k==="incendiary")&&(E==="molotov"||E==="incendiary")).length;if(U>=4)return I("Llev\xE1s el m\xE1ximo de granadas");if(F>=(R.max||1))return I("No pod\xE9s llevar m\xE1s de esa granada")}else{let U=Ns(E)===1?"p":"s";if(C[U]===E)return I("Ya ten\xE9s esa arma")}if(M.money<A)return I("No te alcanza la plata");if(M.money-=A,E==="vest")M.ar=100;else if(E==="vesthelm")M.ar=100,M.helm=!0;else if(E==="defuser")C.kit=!0;else if(E==="zeus")C.zeus=!0;else if(R.cat==="grenade")C.g.push(E);else{let U=Ns(E)===1?"p":"s";C[U]&&_(C[U],M.x,M.y,M.z,null,M.yaw+Math.PI),C[U]=E,C[U+"a"]=null}C.v++,t=!0,n.emitTo(M.id,"ev",{t:"bought",i:E})}e.buy=S;function N(M,E){if(E.a==="god")M.god=!!E.v,t=!0;else if(E.a==="money")M.money=Ln.max,t=!0;else if(E.a==="win")(n.phase==="live"||n.phase==="freeze")&&(n.phase="live",m(M.team,"elim"));else if(E.a==="kill")for(let R of n.players.values())R.alive&&R.team!==M.team&&w(R,M,"knife",!0,!1);else E.a==="heal"&&(M.hp=100,M.ar=100,M.helm=!0,t=!0)}return e}var Lu=.0254,c0=Math.PI/180,BM={pistol:.12,smg:.16,rifle:.36,sniper:.6,heavy:.3,equip:0,knife:0},kM=n=>n.id==="awp"?.85:n.id==="deagle"||n.id==="r8"?.3:n.id==="ak47"?.42:n.cat==="heavy"&&n.pellets>1?0:BM[n.cat]??0;function Ha(n,e){let t=n.scope&&n.cat==="sniper"&&e.scoped?n.scoped:n.spread,i=n.speed*Lu*(e.scoped&&n.cat==="sniper"?.5:1),s=Math.max(0,Math.min(1,(e.speed-i*.34)/(i*.66)));return t+=n.move*s,e.onGround||(t+=n.cat==="sniper"?.25:.12),e.duck>.5&&e.onGround&&(t*=.75),n.auto&&n.pellets===1&&(t+=Math.min(.022,e.shots*.0016)),n.cat==="pistol"&&!n.auto&&(t+=Math.min(.03,e.shots*.006)),t}function _c(n,e,t){if(n.pellets>1||n.cat==="sniper")return[n.kick,(t()-.5)*n.sway];let i=e===0?n.kick*.6:e<9?n.kick:n.kick*.25,s=(t()-.5)*n.sway*.5;return n.auto&&n.cat!=="pistol"&&(e>=7&&e<14?s+=-n.sway*1.1:e>=14&&e<22?s+=n.sway*1.25:e>=22&&(s+=Math.sin(e*.9)*n.sway)),[i,s]}function wr(n,e,t,i,s,r){let a=r()*Math.PI*2,o=s*(r()*.6+r()*.4),l=e+t*c0+Math.sin(a)*o,c=n-i*c0+Math.cos(a)*o;return[-Math.sin(c)*Math.cos(l),Math.sin(l),-Math.cos(c)*Math.cos(l)]}function vc(n,e,t,i,s,r,a,o,l,c,h){let f=Math.min(c.range*Lu,300),u=c.dmg,d=kM(c),m=!1,y=i,p=s,g=r,b=0,w=[];for(let v=0;v<3;v++){let _=f-b;if(_<=0)break;let T=ls(n,y,p,g,a,o,l,_),x=T?T.t:_,S=null;for(let R of h){if(!R.alive||R.id===t||Math.abs(R.x-y)>x+2||Math.abs(R.z-g)>x+2)continue;let I=Qp(R,y,p,g,a,o,l,x);I&&(!S||I.t<S.t)&&(S={...I,id:R.id})}if(S){let R=b+S.t,I=u*Math.pow(c.rangeMod,R/Lu/500),A=[y+a*S.t,p+o*S.t,g+l*S.t];return{end:A,hit:{id:S.id,part:S.part,dmg:I,pos:A},impacts:w,wb:m}}if(!T)return{end:[y+a*_,p+o*_,g+l*_],hit:null,impacts:w,wb:m};let N=[y+a*x,p+o*x,g+l*x];if(w.push([N[0],N[1],N[2],T.nx,T.ny,T.nz]),d<=0)return{end:N,hit:null,impacts:w,wb:m};let M=0,E=.03;for(;M<d&&dc(n,N[0]+a*(M+E),N[1]+o*(M+E),N[2]+l*(M+E));)M+=E;if(M>=d)return{end:N,hit:null,impacts:w,wb:m};M+=E,u*=Math.max(.15,1-M/d)*.75,d-=M,m=!0,b+=x+M,y=N[0]+a*M,p=N[1]+o*M,g=N[2]+l*M,w.push([y,p,g,-a,-o,-l])}return{end:[y,p,g],hit:null,impacts:w,wb:m}}function Va(n,e,t,i){let s=t[0],r=t[1],a=t[2];for(let o of[1.55,1.1]){let l=i[0],c=i[1]+o*(i[3]||1),h=i[2],f=l-s,u=c-r,d=h-a,m=Math.hypot(f,u,d),y=ls(n,s,r,a,f/m,u/m,d/m,m);if(!(y&&y.t<m-.1)&&!r0(e,s,r,a,l,c,h))return!0}return!1}var h0=.0254,Mc=Math.PI/180,bc={facil:{react:.62,turn:170,err:3.6,hs:.15,ctrl:.25,name:"F\xE1cil"},normal:{react:.4,turn:290,err:2.1,hs:.3,ctrl:.5,name:"Normal"},dificil:{react:.26,turn:430,err:1.25,hs:.45,ctrl:.75,name:"Dif\xEDcil"},experto:{react:.17,turn:620,err:.65,hs:.6,ctrl:.9,name:"Experto"}},Bt=Math.random,Nu=(n,e)=>{let t=n-e;for(;t>Math.PI;)t-=Math.PI*2;for(;t<-Math.PI;)t+=Math.PI*2;return t};function Du(n,e){let t={},i={site:"A"},s=0,r={A:za(n.nav,4),B:za(n.nav,8)},a=new Map;t.brain=y=>{let p=a.get(y.id);return p||(p={path:null,pi:0,goal:null,repath:0,tgt:null,react:0,err:[0,0],fireT:0,burst:0,shots:0,pp:0,py:0,strafe:1,strafeT:0,stuck:0,last:[0,0],buyT:0,bought:!1,hold:null,plantT:0,lastKnown:null,lkT:0,blind:0,mag:{},reload:0,look:null,wantScope:!1,jumpT:0},a.set(y.id,p)),p},t.reset=()=>a.clear(),t.roundStart=()=>{i.site=Bt()<.5?"A":"B";let y=0;for(let p of n.players.values()){if(!p.bot)continue;let g=t.brain(p);Object.assign(g,{path:null,goal:null,tgt:null,hold:null,plantT:0,bought:!1,buyT:.6+Bt()*2.2,lastKnown:null,blind:0,reload:0,shots:0,pp:0,py:0,mag:{},look:null}),g.site=p.team==="CT"?y++%2===0?"A":"B":i.site,p.team==="CT"&&Bt()<.25&&(g.site=g.site==="A"?"B":"A")}},t.place=(y,p)=>{y.pl=mc(p[0],p[1],p[2],p[3]),y.pl.pitch=0},t.heard=(y,p,g,b,w)=>{for(let v of n.players.values()){if(!v.bot||!v.alive||v.team===b||!v.pl)continue;if(Math.hypot(v.pl.x-y,v.pl.z-g)<(w?40:14)){let T=t.brain(v);T.tgt||(T.lastKnown=[y,p,g],T.lkT=4)}}},t.flash=(y,p)=>{let g=t.brain(y);g.blind=Math.max(g.blind,p)};function o(y){let p=y.inv;return p.p||p.s||"knife"}function l(y){let p=()=>y.money,g=y.team==="T",b=[];p()>=5750&&Bt()<.18?b.push("awp"):p()>=3700?b.push(g?"ak47":Bt()<.5?"m4a4":"m4a1s"):p()>=2900?b.push(g?"galil":"famas"):p()>=1850&&n.round>1&&b.push(g?"mac10":"mp9");for(let w of b)e.buy(y,w);p()>=1e3?e.buy(y,"vesthelm"):p()>=650&&(n.round===1||n.round===c()+1||Bt()<.5)&&e.buy(y,"vest"),!g&&p()>=400&&Bt()<.6&&e.buy(y,"defuser"),n.round===1&&p()>=500&&!y.inv.p&&Bt()<.3&&e.buy(y,g?"tec9":"fiveseven")}let c=()=>({rapida:4,corta:8,comp:12})[n.cfg.len];function h(y,p,g,b,w){let v=n.nav,_=y.pl,T=v.nearest(_.x,_.y,_.z),x=v.nearest(g,b,w);p.path=n0(v,T,x),p.pi=1,p.goal=[g,b,w],p.repath=6+Bt()*2,p.path||(p.repath=1.5+Bt())}let f=y=>n.nav.pos(y[Math.floor(Bt()*y.length)]);t.tick=y=>{let p=bc[n.cfg.diff]||bc.normal;s-=y;let g=s<=0;g&&(s=.1);let b=n.phase==="live",w=n.phase==="freeze";for(let v of n.players.values()){if(!v.bot||!v.pl)continue;let _=t.brain(v),T=v.pl;if(!v.alive)continue;let x=o(v),S=je[x];if(_.mag[x]===void 0&&(_.mag[x]=S.mag||0),_.blind=Math.max(0,_.blind-y),_.fireT-=y,_.lkT-=y,_.repath-=y,_.jumpT-=y,_.reload>0&&(_.reload-=y,_.reload<=0&&(_.mag[x]=S.mag)),w){_.buyT-=y,_.buyT<=0&&!_.bought&&(_.bought=!0,l(v)),d(v,_,0,0,!1,y,S);continue}if(g&&_.blind<=0){let C=[T.x,T.y+Tn(T),T.z],U=null,F=1e9;for(let k of n.players.values()){if(!k.alive||k.team===v.team)continue;let D=k.x-T.x,z=k.z-T.z,G=Math.hypot(D,z);if(G>90)continue;let $=Math.abs(Nu(Math.atan2(-D,-z),T.yaw)),Z=_.tgt===k.id;if($>(Z?2.6:1.45)&&G>2.5||!Va(n.W,n.nades,C,[k.x,k.y,k.z,k.h/nt.hStand]))continue;let q=G*(Z?.6:1);q<F&&(F=q,U=k)}U?(_.tgt!==U.id&&(_.tgt=U.id,_.react=p.react*(.8+Bt()*.5),_.err=[(Bt()-.5)*2*p.err*Mc*3,(Bt()-.5)*2*p.err*Mc*2],_.head=Bt()<p.hs),_.lastKnown=[U.x,U.y,U.z],_.lkT=5):_.tgt&&(_.tgt=null)}_.blind>0&&(_.tgt=null);let N=_.tgt?n.players.get(_.tgt):null,M=0,E=0,R=!1,I=!1;if(N&&N.alive){let C=T.x,U=T.y+Tn(T),F=T.z,k=N.y+(_.head?N.h-.12:N.h*.68),D=N.x-C,z=k-U,G=N.z-F,$=Math.hypot(D,G),Z=Math.atan2(-D,-G)+_.err[0],q=Math.atan2(z,$)+_.err[1];_.err[0]*=Math.max(0,1-y*2.2),_.err[1]*=Math.max(0,1-y*2.2),u(T,Z,q,p.turn*Mc*y),_.react-=y;let ae=Math.hypot(Nu(T.yaw,Z-_.err[0]),T.pitch-(q-_.err[1]));_.strafeT-=y,_.strafeT<=0&&(_.strafeT=.4+Bt()*.8,_.strafe=Bt()<.5?-1:1);let oe=S.cat==="rifle"||S.cat==="sniper"||S.cat==="heavy"&&S.pellets===1||$>14;if(!oe||_.reload>0){let Le=[Math.cos(T.yaw),-Math.sin(T.yaw)];M=Le[0]*_.strafe,E=Le[1]*_.strafe}S.cat==="sniper"&&(_.wantScope=!0);let Ee=Math.hypot(T.vx,T.vz);_.react<=0&&ae<Math.max(.02,.6/Math.max(3,$))+.03&&_.reload<=0&&_.fireT<=0&&(!oe||Ee<S.speed*h0*.4||$<6)&&(_.mag[x]<=0&&S.mag?(_.reload=S.reload,_.shots=0):m(v,_,S,x,p,$)),_.reload<=0&&_.mag[x]<=0&&S.mag&&(_.reload=S.reload,_.shots=0)}else{_.wantScope=!1,_.shots&&_.fireT<-.35&&(_.shots=0),S.mag&&_.mag[x]<S.mag*.4&&_.reload<=0&&(_.reload=S.reload);let C=n.bomb,U=null,F=!1;if(v.team==="T"?v.inv.c4?_i(n.W,T.x,T.z)&12&&b&&T.onGround?(_.plantT+=y,F=!0,n.setPlanting(v.id,_.plantT),_.plantT>=3.2&&(_.plantT=0,n.setPlanting(v.id,0),e.handle("plant",{x:T.x,y:T.y,z:T.z},v.id))):(_.plantT=0,(!_.goal||_.goalKind!=="site")&&(U=f(r[_.site]),_.goalKind="site")):C.state==="dropped"?((_.goalKind!=="bomb"||_.repath<=0)&&(U=[C.x,C.y,C.z],_.goalKind="bomb"),Math.hypot(T.x-C.x,T.z-C.z)<1.2&&e.handle("take",{id:"c4"},v.id)):C.state==="planted"?_.goalKind!=="post"&&(U=[C.x+(Bt()-.5)*10,C.y,C.z+(Bt()-.5)*10],_.goalKind="post"):(!_.goal||_.goalKind!=="site")&&(U=f(r[_.site]),_.goalKind="site"):C.state==="planted"?Math.hypot(T.x-C.x,T.z-C.z)<1.1?(F=!0,I=!0,e.botDefuse(v),_.look=[C.x,C.y,C.z]):(_.goalKind!=="defuse"||_.repath<=0)&&(U=[C.x,C.y,C.z],_.goalKind="defuse"):(!_.goal||_.goalKind!=="hold")&&(U=f(r[_.site]),_.goalKind="hold"),!U&&_.goal&&!_.path&&_.repath<=0&&(_.goal=null),U&&h(v,_,U[0],U[1],U[2]),!F&&_.path&&_.pi<_.path.length){let z=_.path[_.pi],G=z[0]-T.x,$=z[2]-T.z,Z=Math.hypot(G,$);Z<.55?_.pi++:(M=G/Z,E=$/Z,z[1]-T.y>.45&&Z<1.6&&_.jumpT<=0&&(_.jump=!0,_.jumpT=.8));let q=Math.hypot(T.x-_.last[0],T.z-_.last[1]);_.stuck=q<y*.6?_.stuck+y:0,_.last=[T.x,T.z],_.stuck>.6&&(_.jump=!0,_.stuck>1.6&&(_.stuck=0,_.goal=null,_.path=null))}else if(!F&&_.goalKind==="hold"&&_.path&&_.pi>=_.path.length){if(!_.look){let z=n.spawns.T;_.look=[z.cx,T.y+1.5,z.cz]}Bt()<y*.05&&(_.goal=null)}else!F&&_.goalKind==="site"&&_.path&&_.pi>=_.path.length&&(_.goal=null);let k=null,D=0;if(_.lastKnown&&_.lkT>0){let z=_.lastKnown;k=Math.atan2(-(z[0]-T.x),-(z[2]-T.z)),D=Math.atan2(z[1]+1.4-T.y-Tn(T),Math.hypot(z[0]-T.x,z[2]-T.z))}else M||E?k=Math.atan2(-M,-E):_.look&&(k=Math.atan2(-(_.look[0]-T.x),-(_.look[2]-T.z)));k!==null&&u(T,k,D,p.turn*.55*Mc*y)}let A=(S.recover||9)*y;_.pp=Math.max(0,_.pp-A*(_.fireT<-.05?1:.3)),_.py*=Math.max(0,1-y*4),R=!!N&&S.cat!=="knife",d(v,_,M,E,R,y,S,I)}};function u(y,p,g,b){let w=Nu(p,y.yaw);y.yaw+=Math.max(-b,Math.min(b,w));let v=g-y.pitch;y.pitch+=Math.max(-b,Math.min(b,v)),y.pitch=Math.max(-1.45,Math.min(1.45,y.pitch))}function d(y,p,g,b,w,v,_,T=!1){let x=y.pl,S=-Math.sin(x.yaw),N=-Math.cos(x.yaw),M=Math.cos(x.yaw),E=-Math.sin(x.yaw),R={f:g*S+b*N,s:g*M+b*E,jump:!!p.jump,crouch:T,walk:w};p.jump=!1,(n.phase==="freeze"||n.planting(y.id)>0||e.isDefusing(y.id))&&(R.f=R.s=0,R.jump=!1);let A=_.speed*h0*(p.wantScope&&_.cat==="sniper"?.42:1),C=v;for(;C>1e-6;){let U=Math.min(C,.011111111111111112),F=gc(n.W,x,R,U,A);F&&n.fallDamage(y,F),C-=U}x.y<-20&&y.alive&&e.damage(y.id,y.id,999,"chest","world",{raw:!0});for(let U of n.players.values()){if(U===y||!U.alive||Math.abs(U.y-x.y)>1.6)continue;let F=x.x-U.x,k=x.z-U.z,D=Math.hypot(F,k);if(D<.62){let z=D>1e-4?(.62-D)/D*.5:0,G=x.x+(D>1e-4?F*z:.05),$=x.z+(D>1e-4?k*z:.03);Oi(n.W,G,$,x.y,x.h,nt.r)||(x.x=G,x.z=$)}}y.x=x.x,y.y=x.y,y.z=x.z,y.yaw=x.yaw,y.pitch=x.pitch,y.duck=x.duck,y.h=x.h,y.vx=x.vx,y.vz=x.vz,y.onGround=x.onGround,y.wpn=y.inv.c4&&p.plantT>0?"c4":o(y),y.scoped=p.wantScope&&_.cat==="sniper"}function m(y,p,g,b,w,v){let _=y.pl,T={speed:Math.hypot(_.vx,_.vz),onGround:_.onGround,duck:_.duck,scoped:y.scoped,shots:p.shots},x=Ha(g,T),[S,N]=_c(g,p.shots,Bt),M=[_.x,_.y+Tn(_),_.z];n.fireBullets(y.id,b,M,R=>wr(_.yaw,_.pitch,p.pp*(1-w.ctrl*.85),p.py*(1-w.ctrl*.85),x,R)),p.pp=Math.min(g.kickCap||12,p.pp+S),p.py+=N,p.shots++,g.mag&&p.mag[b]--;let E=60/g.rpm;if(g.auto){let R=v>25?2:v>12?4:8;p.shots%R===0?p.fireT=E+.25+Bt()*.25*(2-w.ctrl):p.fireT=E,p.shots%R===0&&(p.shots=0)}else p.fireT=Math.max(E,g.cat==="pistol"?.2+Bt()*.2:E)}return t}var wt=new Gt,Sc=new Ve,hw=new V(0,1,0),u0=new V;function f0(n){let e={},i=new Wn(new dn(1,1,1),new ln({color:"#ffffff"}),700);i.instanceMatrix.setUsage(vr),i.frustumCulled=!1,i.count=0,i.instanceColor=new fi(new Float32Array(700*3),3),n.add(i);let s=[];e.particle=(R,I,A,C,U,F,k,D,z,G=9.8,$=0)=>{s.length>=700&&s.shift(),s.push({x:R,y:I,z:A,vx:C,vy:U,vz:F,s:k,life:D,max:D,c:new Ve(z),g:G,grow:$})};let r=64,a=new dn(1,1,1);a.translate(0,0,-.5);let o=new Wn(a,new ln({color:"#ffe9a8",transparent:!0,opacity:.85,depthWrite:!1}),r);o.instanceMatrix.setUsage(vr),o.frustumCulled=!1,o.count=0,n.add(o);let l=[];e.tracer=(R,I)=>{l.length>=r&&l.shift();let A=Math.hypot(I[0]-R[0],I[1]-R[1],I[2]-R[2]);l.push({a:[...R],b:[...I],d:A,t:0,life:Math.min(.25,A/280+.04)})};let c=220,h=new Xn(.07,.07),f=new Wn(h,new ln({color:"#1d1a17",polygonOffset:!0,polygonOffsetFactor:-2,depthWrite:!1}),c);f.count=0,f.frustumCulled=!1,n.add(f);let u=0;e.decal=(R,I)=>{wt.position.set(R[0]+I[0]*.01,R[1]+I[1]*.01,R[2]+I[2]*.01),u0.set(I[0],I[1],I[2]),wt.quaternion.setFromUnitVectors(new V(0,0,1),u0),wt.rotateZ(Math.random()*3),wt.scale.setScalar(.7+Math.random()*.6),wt.updateMatrix(),f.setMatrixAt(u,wt.matrix),u=(u+1)%c,f.count=Math.max(f.count,u===0?c:u),f.instanceMatrix.needsUpdate=!0},e.clearDecals=()=>{f.count=0,u=0},e.impact=(R,I,A="#cdb894")=>{e.decal(R,I);for(let C=0;C<5;C++)e.particle(R[0],R[1],R[2],I[0]*2+(Math.random()-.5)*2,I[1]*2+Math.random()*1.5,I[2]*2+(Math.random()-.5)*2,.03+Math.random()*.03,.35+Math.random()*.3,A,6);e.particle(R[0],R[1],R[2],I[0]*.5,.4,I[2]*.5,.08,.5,"#d9cdb5",-.5,.25),e.particle(R[0],R[1],R[2],0,0,0,.05,.05,"#fff2a0",0)},e.blood=(R,I,A)=>{let C=A?10:6;for(let U=0;U<C;U++)e.particle(R[0],R[1],R[2],I[0]*2.5+(Math.random()-.5)*2,I[1]*2+Math.random()*1.2,I[2]*2.5+(Math.random()-.5)*2,.035+Math.random()*.04,.4+Math.random()*.3,A?"#b3121a":"#8f1015",8)};let d=new Ss(1,0),m=new ln({color:"#ffd27a",transparent:!0,opacity:.95,depthWrite:!1});e.muzzleMesh=()=>{let R=new Ke(d,m);return R.visible=!1,R.scale.set(.05,.05,.14),R};let y=new pr("#ffcf80",0,7,2);n.add(y);let p=0;e.flashLight=(R,I=1)=>{y.position.set(R[0],R[1],R[2]),y.intensity=6*I,p=.05};let g=400,b=new es(1,0),w=new Wn(b,new bn({color:"#b9bcc0",flatShading:!0}),g);w.instanceMatrix.setUsage(vr),w.count=0,w.frustumCulled=!1,n.add(w),w.instanceColor=new fi(new Float32Array(g*3),3);let v=[];e.smoke=(R,I)=>{let A=[];for(let C=0;C<38;C++){let U=Math.random()*Math.PI*2,F=Math.sqrt(Math.random())*Pt.smokeR*.85,k=Math.random()*2.6;A.push({x:R.x+Math.cos(U)*F,y:R.y+.4+k,z:R.z+Math.sin(U)*F,s:.9+Math.random()*.9,ph:Math.random()*6,c:.82+Math.random()*.14})}v.push({g:R,balls:A})},e.clearSmokes=()=>{v.length=0,S.length=0};let _=260,T=new Ms(.22,.7,4);T.translate(0,.35,0);let x=new Wn(T,new ln({color:"#ffffff"}),_);x.instanceColor=new fi(new Float32Array(_*3),3),x.instanceMatrix.setUsage(vr),x.count=0,x.frustumCulled=!1,n.add(x);let S=[],N=new pr("#ff8a3a",0,9,1.6);n.add(N),e.fire=(R,I,A)=>{let C=[];for(let U=0;U<26;U++){let F=Math.random()*Math.PI*2,k=Math.sqrt(Math.random())*Pt.fireR,D=R.x+Math.cos(F)*k,z=R.z+Math.sin(F)*k,G=A(I,D,z,R.y+.6);G<R.y-1.2||G>R.y+.7||C.push({x:D,y:G,z,ph:Math.random()*6,s:.7+Math.random()*.8})}S.push({g:R,fl:C})};let M=[],E=new es(1,1);return e.explosion=(R,I)=>{let A=new Ke(E,new ln({color:"#ffb347",transparent:!0,opacity:.9,depthWrite:!1}));A.position.set(R[0],R[1]+.3,R[2]),n.add(A),M.push({m:A,t:0,life:I?1.1:.45,size:I?9:2.6});for(let C=0;C<(I?70:30);C++){let U=Math.random()*6.28,F=Math.random()*1.4,k=(I?12:7)*(.4+Math.random());e.particle(R[0],R[1]+.3,R[2],Math.cos(U)*Math.cos(F)*k,Math.sin(F)*k,Math.sin(U)*Math.cos(F)*k,.06+Math.random()*.08,.6+Math.random()*.6,Math.random()<.5?"#ffb347":"#3a3530",9)}for(let C=0;C<(I?24:10);C++)e.particle(R[0]+(Math.random()-.5)*2,R[1]+.5+Math.random(),R[2]+(Math.random()-.5)*2,Math.random()-.5,1+Math.random(),Math.random()-.5,.5,2+Math.random()*1.5,"#4a4642",-.3,I?1.6:.8);e.flashLight(R,I?6:3),p=I?.35:.15},e.flashPop=R=>{e.flashLight(R,8),p=.08;for(let I=0;I<14;I++)e.particle(R[0],R[1],R[2],(Math.random()-.5)*6,(Math.random()-.5)*6,(Math.random()-.5)*6,.04,.25,"#ffffff",0)},e.update=(R,I,A)=>{let C=0;for(let k=s.length-1;k>=0;k--){let D=s[k];if(D.life-=R,D.life<=0){s.splice(k,1);continue}D.vy-=D.g*R,D.x+=D.vx*R,D.y+=D.vy*R,D.z+=D.vz*R,D.vx*=1-R*1.5,D.vz*=1-R*1.5;let z=D.life/D.max,G=D.s*(1+D.grow*(1-z)*8)*(D.grow?1:Math.min(1,z*2));wt.position.set(D.x,D.y,D.z),wt.rotation.set(D.x*7,D.y*5,0),wt.scale.setScalar(G),wt.updateMatrix(),i.setMatrixAt(C,wt.matrix),i.setColorAt(C,D.c),C++}i.count=C,i.instanceMatrix.needsUpdate=!0,i.instanceColor&&(i.instanceColor.needsUpdate=!0),C=0;for(let k=l.length-1;k>=0;k--){let D=l[k];if(D.t+=R,D.t>D.life){l.splice(k,1);continue}let z=D.t/D.life,G=Math.min(D.d,3.5),$=Math.min(D.d,D.d*z+G*.5),Z=Math.max(0,$-G),q=(D.b[0]-D.a[0])/D.d,ae=(D.b[1]-D.a[1])/D.d,oe=(D.b[2]-D.a[2])/D.d;wt.position.set(D.a[0]+q*$,D.a[1]+ae*$,D.a[2]+oe*$),wt.lookAt(D.a[0]+q*($+1),D.a[1]+ae*($+1),D.a[2]+oe*($+1)),wt.rotateY(Math.PI),wt.scale.set(.012,.012,Math.max(.01,$-Z)),wt.updateMatrix(),o.setMatrixAt(C++,wt.matrix)}o.count=C,o.instanceMatrix.needsUpdate=!0,C=0;for(let k=v.length-1;k>=0;k--){let D=v[k],z=D.g;if(z.state!=="active"){v.splice(k,1);continue}let G=Pt.smokeLife-z.life,$=Math.min(1,G/1.2),Z=Math.min(1,z.life/1.5);for(let q of D.balls){if(C>=g)break;let ae=$*Z;wt.position.set(z.x+(q.x-z.x)*(.3+.7*$),z.y+(q.y-z.y)*(.3+.7*$)+Math.sin(I*.6+q.ph)*.08,z.z+(q.z-z.z)*(.3+.7*$)),wt.rotation.set(q.ph,I*.05+q.ph,0),wt.scale.setScalar(Math.max(.01,q.s*ae*1.25)),wt.updateMatrix(),w.setMatrixAt(C,wt.matrix),Sc.setScalar(q.c),w.setColorAt(C,Sc),C++}}w.count=C,w.instanceMatrix.needsUpdate=!0,w.instanceColor&&(w.instanceColor.needsUpdate=!0),C=0;let U=0,F=null;for(let k=S.length-1;k>=0;k--){let D=S[k],z=D.g;if(z.state!=="active"||z.life<=0){S.splice(k,1);continue}let G=Math.min(1,z.life/1.2)*Math.min(1,(Pt.fireLife-z.life)*4+.3);for(let $ of D.fl){if(C>=_)break;let Z=.7+Math.sin(I*14+$.ph)*.2+Math.sin(I*23+$.ph*2)*.1;wt.position.set($.x,$.y,$.z),wt.rotation.set(0,$.ph+I,0),wt.scale.set($.s*G,$.s*G*Z*1.3,$.s*G),wt.updateMatrix(),x.setMatrixAt(C,wt.matrix),Sc.setRGB(1,.45+Z*.35,.1),x.setColorAt(C,Sc),C++}U+=G,F=z}x.count=C,x.instanceMatrix.needsUpdate=!0,x.instanceColor&&(x.instanceColor.needsUpdate=!0),F?(N.position.set(F.x,F.y+1,F.z),N.intensity=Math.min(1,U)*(3+Math.sin(I*20)*.8)):N.intensity=0;for(let k=M.length-1;k>=0;k--){let D=M[k];D.t+=R;let z=D.t/D.life;if(z>=1){n.remove(D.m),D.m.material.dispose(),M.splice(k,1);continue}D.m.scale.setScalar(D.size*(.3+.7*Math.sqrt(z))),D.m.material.opacity=.9*(1-z),D.m.material.color.setRGB(1,.7-z*.4,.3-z*.25)}p>0&&(p-=R,p<=0&&(y.intensity=0))},e}function ki(n,e=!1){let t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},a={},o=n[0].morphTargetsRelative,l=new on;l.morphTargetsRelative=o;let c=0;for(let h=0;h<n.length;++h){let f=n[h],u=0,d=0;if(t!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let m in f.attributes){if(!i.has(m))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+m+'" attribute exists among all geometries, or in none of them.'),null;r[m]===void 0&&(r[m]=[]),r[m].push(f.attributes[m]),u++}if(u!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let m in f.morphAttributes){if(!s.has(m))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;if(f.morphAttributes[m].length!==n[0].morphAttributes[m].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have the same number of morph targets for the "'+m+'" morph attribute.'),null;a[m]===void 0&&(a[m]=[]),a[m].push(f.morphAttributes[m]),d++}if(d!==s.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of morph attributes."),null;if(e){let m;if(t)m=f.index.count;else if(f.attributes.position!==void 0)m=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,m,h),c+=m}}if(t){let h=0,f=[];for(let u=0;u<n.length;++u){let d=n[u].index;for(let m=0;m<d.count;++m)f.push(d.getX(m)+h);h+=n[u].attributes.position.count}l.setIndex(f)}for(let h in r){let f=d0(r[h]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,f)}for(let h in a){let f=a[h][0].length;if(f!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let u=0;u<f;++u){let d=[];for(let y=0;y<a[h].length;++y)d.push(a[h][y][u]);let m=d0(d);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(m)}}}return l}function d0(n){let e,t,i,s=-1,r=0;for(let c=0;c<n.length;++c){let h=n[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let a=new e(r),o=new Mn(a,t,i),l=0;for(let c=0;c<n.length;++c){let h=n[c];if(h.isInterleavedBufferAttribute){let f=l/t;for(let u=0,d=h.count;u<d;u++)for(let m=0;m<t;m++){let y=h.getComponent(u,m);o.setComponent(u+f,m,y)}}else a.set(h.array,l);l+=h.count*t}return s!==void 0&&(o.gpuType=s),o}var $n=new bn({vertexColors:!0,flatShading:!0}),Ac=new bn({vertexColors:!0,flatShading:!0}),Tc=new Ve;function Ic(n,e){n=n.index?n.toNonIndexed():n,n.computeVertexNormals();let t=n.attributes.position.count,i=new Float32Array(t*3),s=n.attributes.normal.array;Tc.set(e);for(let r=0;r<t;r++){let a=.8+s[r*3+1]*.2+s[r*3]*.06;i[r*3]=Tc.r*a,i[r*3+1]=Tc.g*a,i[r*3+2]=Tc.b*a}n.setAttribute("color",new Mn(i,3));for(let r of Object.keys(n.attributes))r!=="position"&&r!=="normal"&&r!=="color"&&n.deleteAttribute(r);return n}function Ye(n,e,t,i=0){let s=new fr(n.map(a=>new he(a[0],a[1]))),r=new xa(s,{depth:e,bevelEnabled:!1,steps:1,curveSegments:3});return r.translate(0,0,-e/2),r.rotateY(Math.PI/2),r.translate(i,0,0),Ic(r,t)}function xt(n,e,t,i,s,r=7,a=0,o=n){let l=new Qi(o,n,t-e,r);return l.rotateX(-Math.PI/2),l.translate(a,i,-(e+t)/2),Ic(l,s)}function Re(n,e,t,i,s,r,a=0){let o=new dn(n,e,t);return o.translate(a,s,-i),Ic(o,r)}var Rc=[{name:"Original",b:null,w:null,sw:"#3a3c40"},{name:"Desierto",b:"#b59a6c",w:"#8a6c44",sw:"#b59a6c"},{name:"Bosque",b:"#4f6040",w:"#3d4a30",sw:"#4f6040"},{name:"\xC1rtico",b:"#dfe4ea",w:"#b9c2cc",sw:"#dfe4ea"},{name:"Ne\xF3n",b:"#2b1f47",w:"#ff3fa4",sw:"#ff3fa4"},{name:"Oro",b:"#c9a23a",w:"#6b4a24",sw:"#c9a23a"}],zM="#34373c",wc="#8b5a2e",HM="#6e4423",Uu="#5a5f66";function x0(n){let e=[],t=(a,o="m")=>e.push([a,o]),i=null,s=[.3,.05],r=(a,o=.28,l=.11,c=.032)=>t(Ye([[.03,.02],[-.02,.02],[-.02-Math.sin(o)*l,.02-l],[.03-Math.sin(o)*l,.02-l]],c,a),"w");switch(n){case"ak47":case"galil":case"sg553":{let a=n==="ak47"?wc:n==="galil"?"#4b4635":"#55543f";t(Ye([[-.07,.02],[.27,.02],[.27,.095],[-.07,.095]],.046,n==="ak47"?"#2c2d2f":n==="galil"?"#3a3830":"#4a4a3e"),"b"),t(Ye([[-.07,.09],[-.44,.07],[-.46,-.06],[-.41,-.07],[-.2,0],[-.07,.02]],.038,a),"w"),t(Ye([[.27,.025],[.5,.035],[.5,.09],[.27,.095]],.05,a),"w"),t(Ye([[.27,.098],[.53,.105],[.53,.125],[.27,.12]],.026,zM),"m"),t(xt(.011,.5,.72,.065,"#1c1d1f")),t(Re(.006,.05,.012,.66,.1,"#1c1d1f")),t(xt(.016,.69,.75,.065,"#1c1d1f",6)),t(Re(.02,.025,.04,.2,.105,"#1c1d1f")),n==="sg553"&&t(xt(.02,-.02,.14,.14,"#1d1d1d",8)),r(n==="ak47"?HM:"#2a2a2a"),t(Ye([[.09,.02],[.17,.02],[.27,-.17],[.19,-.19]],.032,n==="ak47"?"#7a4f2a":"#2b2b2b"),"w"),t(Ye([[.04,.02],[.08,.02],[.08,-.025],[.04,-.03]],.008,"#1c1d1f"),"m"),i=[.38,.03],s=[.75,.065];break}case"m4a4":case"m4a1s":case"famas":case"aug":{if(n==="famas"||n==="aug"){let a=n==="aug"?"#5d6a52":"#3c4248";t(Ye([[-.36,0],[.28,0],[.32,.08],[.28,.11],[-.36,.11],[-.38,.05]],.055,a),"b"),n==="famas"?t(Ye([[-.2,.11],[.2,.11],[.22,.16],[-.18,.16]],.016,a),"b"):t(xt(.022,-.06,.12,.15,"#1d1d1d",8)),t(xt(.011,.3,.52,.05,"#1c1d1f")),r("#2a2a2a",.2),t(Ye([[-.18,0],[-.1,0],[-.08,-.15],[-.16,-.16]],.03,"#262626"),"w"),t(Ye([[.12,0],[.17,0],[.15,-.09],[.11,-.09]],.03,a),"b"),i=[.14,-.03],s=[.52,.05]}else t(Ye([[-.06,.02],[.24,.02],[.24,.1],[-.06,.1]],.046,"#2f3236"),"b"),t(Ye([[-.06,.1],[.24,.1],[.24,.12],[-.06,.12]],.028,"#1f2124"),"m"),t(xt(.012,-.32,-.06,.075,"#25272a",6)),t(Ye([[-.2,.1],[-.38,.1],[-.38,-.02],[-.3,-.02],[-.2,.05]],.036,"#222428"),"w"),t(Ye([[.24,.025],[.5,.03],[.5,.105],[.24,.105]],.05,"#2a2c30"),"b"),t(Re(.012,.045,.012,.5,.13,"#1c1d1f")),t(Re(.03,.02,.03,0,.135,"#1c1d1f")),n==="m4a1s"?(t(xt(.011,.5,.55,.065,"#1c1d1f")),t(xt(.022,.55,.82,.065,"#1a1b1d",10)),s=[.82,.065]):(t(xt(.011,.5,.7,.065,"#1c1d1f")),t(xt(.015,.66,.72,.065,"#1c1d1f",6)),s=[.72,.065]),r("#232427",.3),t(Ye([[.09,.02],[.155,.02],[.18,-.15],[.115,-.155]],.03,"#26272a"),"w"),i=[.38,.03];break}case"awp":case"ssg08":case"g3sg1":case"scar20":{let a=n==="awp"?"#3f5b3a":n==="ssg08"?"#3e4c5e":n==="g3sg1"?"#2d302d":"#2b2e33",o=n==="awp"?1.15:1;t(Ye([[-.52,.04],[-.3,.06],[-.1,.03],[.4,.03],[.42,.09],[-.06,.1*o],[-.22,.1*o],[-.52,.09*o],[-.54,-.07],[-.44,-.08],[-.2,-.05],[-.08,-.06],[-.06,0]],.05*o,a),"b"),t(Ye([[-.14,.04],[-.24,.04],[-.24,-.02],[-.14,-.02]],.052*o,"#0d0d0d"),"m"),t(xt(.013*o,.4,n==="awp"?1.05:.92,.065,"#1c1d1f",7,0,.011*o)),t(xt(.028*o,-.08,.26,.15*o,"#191a1c",10)),t(xt(.036*o,.2,.3,.15*o,"#191a1c",10,0,.028*o)),t(xt(.033*o,-.14,-.07,.15*o,"#191a1c",10,0,.026*o)),t(Re(.016,.05,.02,.02,.12*o,"#1c1d1f")),t(Re(.016,.05,.02,.18,.12*o,"#1c1d1f")),(n==="awp"||n==="ssg08")&&t(Re(.06,.012,.012,-.04,.09,"#2a2a2a",.04)),t(Ye(n==="g3sg1"||n==="scar20"?[[.06,.03],[.12,.03],[.13,-.12],[.07,-.12]]:[[.06,.03],[.12,.03],[.12,-.04],[.06,-.04]],.03,"#222"),"w"),i=[.3,.02],s=[n==="awp"?1.05:.92,.065];break}case"p90":{t(Ye([[-.22,.02],[.28,.02],[.32,.07],[.3,.11],[-.22,.12],[-.25,-.04],[-.12,-.08],[-.05,-.02],[.02,-.08],[.1,-.08],[.12,.02]],.06,"#3a3c3e"),"b"),t(Ye([[-.18,.12],[.2,.12],[.2,.15],[-.18,.15]],.04,"#2a2a2a"),"m"),t(xt(.011,.3,.38,.06,"#1c1d1f")),i=[.12,-.04],s=[.38,.06];break}case"mac10":{t(Ye([[-.05,.02],[.2,.02],[.2,.11],[-.05,.11]],.06,"#2a2b2e"),"b"),t(xt(.012,.2,.27,.07,"#1c1d1f")),t(Ye([[-.01,.02],[.04,.02],[.04,-.2],[-.01,-.2]],.03,"#222"),"w"),t(Re(.004,.06,.14,-.12,.08,"#1c1d1f",.02)),i=[.17,0],s=[.27,.07];break}case"mp9":case"mp7":case"ump":case"mp5":case"bizon":{let a=n==="ump"||n==="mp5"||n==="bizon"?.36:.28;t(Ye([[-.06,.02],[a,.02],[a,.1],[-.06,.1]],.05,n==="mp7"?"#3a3d3f":"#2a2c30"),"b"),t(Ye([[-.06,.09],[-.28,.08],[-.28,0],[-.24,0],[-.06,.04]],.03,"#1f2124"),"w"),r("#232427",.25),n==="bizon"?t(xt(.03,.06,.32,-.01,"#2b2b2b",8)):t(Ye([[.07,.02],[.12,.02],[n==="mp5"?.16:.12,-.15],[n==="mp5"?.11:.07,-.15]],.028,"#222"),"w"),n==="mp5"?(t(xt(.022,a,a+.18,.06,"#1a1b1d",10)),s=[a+.18,.06]):(t(xt(.011,a,a+.06,.06,"#1c1d1f")),s=[a+.06,.06]),i=[a*.75,.01];break}case"nova":case"xm1014":case"sawedoff":case"mag7":{let a=n==="sawedoff"||n==="mag7",o=a?.42:.68;t(Ye([[-.05,.02],[.18,.02],[.18,.1],[-.05,.1]],.05,"#2b2d30"),"b"),t(xt(.016,.18,o,.075,"#1c1d1f",8)),t(xt(.014,.18,o-.06,.04,"#1f2022",8)),t(Ye([[.24,.01],[.46,.01],[.46,.06],[.24,.06]],.045,n==="sawedoff"?wc:"#2a2a2a"),"w"),n==="mag7"&&t(Ye([[.04,.02],[.12,.02],[.12,-.14],[.04,-.14]],.04,"#2a2a2a"),"w"),n==="sawedoff"?t(Ye([[-.05,.08],[-.12,.06],[-.18,-.08],[-.1,-.09],[-.05,.02]],.035,wc),"w"):n!=="mag7"?t(Ye([[-.05,.09],[-.42,.06],[-.44,-.07],[-.38,-.08],[-.05,.02]],.04,n==="nova"?"#2a2a2a":"#26272a"),"w"):r("#232427"),i=[.35,0],s=[o,.075];break}case"m249":case"negev":{t(Ye([[-.1,.02],[.32,.02],[.32,.13],[-.1,.13]],.07,"#3a3d36"),"b"),t(Ye([[-.1,.1],[-.44,.08],[-.44,-.06],[-.1,.02]],.04,"#26272a"),"w"),t(xt(.016,.32,.82,.07,"#1c1d1f",8)),t(Ye([[.32,.03],[.55,.03],[.55,.1],[.32,.1]],.06,"#2b2b2b"),"b"),t(Re(.1,.12,.13,.12,-.04,"#3b3b2e",.05)),r("#232427"),i=[.45,.02],s=[.82,.07];break}case"deagle":case"r8":{n==="r8"?(t(xt(.012,.03,.24,.07,Uu,8)),t(xt(.03,-.01,.05,.05,Uu,6)),t(Ye([[-.04,.02],[.04,.02],[.04,.08],[-.04,.08]],.03,Uu),"b"),r(wc,.35,.1,.03),s=[.24,.07]):(t(Ye([[-.05,.035],[.2,.035],[.21,.06],[.2,.092],[-.05,.092]],.032,"#9aa0a8"),"b"),t(Ye([[-.04,0],[.17,0],[.17,.035],[-.04,.035]],.03,"#8a9098"),"b"),t(Re(.012,.012,.01,.195,.1,"#1c1d1f")),r("#26272a",.25,.11,.036),s=[.21,.065]);break}case"zeus":{t(Ye([[-.04,.02],[.13,.02],[.14,.07],[-.04,.07]],.04,"#2a3a6a"),"b"),t(Re(.045,.035,.02,.14,.045,"#e6c84a")),r("#222",.25,.09),s=[.15,.045];break}case"knife":{t(Ye([[-.12,-.012],[-.005,-.014],[-.005,.014],[-.12,.012],[-.13,0]],.024,"#1f2023"),"w"),t(Ye([[-.005,-.03],[.012,-.03],[.012,.024],[-.005,.024]],.03,"#3a3c40"),"m"),t(Ye([[.012,-.016],[.17,-.012],[.215,.006],[.17,.016],[.06,.016],[.012,.016]],.005,"#c9cfd6"),"b"),t(Ye([[.03,.016],[.16,.016],[.16,.019],[.03,.019]],.007,"#8d949c"),"m"),s=[.21,0];break}case"he":t(Ic(new es(.037,0),"#3d4a2c")),t(Re(.016,.02,.016,0,.04,"#999")),t(Re(.008,.05,.016,-.02,.025,"#aaa",.03));break;case"flash":t(xt(.028,-.055,.055,0,"#a0a8b2",8)),t(Re(.016,.02,.016,0,.032,"#777"));break;case"smoke":t(xt(.03,-.065,.065,0,"#5a6670",8)),t(Re(.02,.012,.02,0,.034,"#888"));break;case"decoy":t(xt(.026,-.05,.05,0,"#6b6b5b",6));break;case"incendiary":t(xt(.028,-.06,.06,0,"#a2552c",8));break;case"molotov":t(xt(.03,-.06,.04,0,"#5d7a3a",8)),t(xt(.012,.04,.1,0,"#4d6a2a",6)),t(xt(.016,.1,.13,0,"#e8d6b0",5));break;case"c4":t(Re(.2,.06,.13,0,0,"#b8a27a")),t(Re(.07,.03,.05,.01,.04,"#1d1d1d",.03)),t(Re(.05,.012,.03,.01,.058,"#5bdc6d",.03)),t(Re(.18,.02,.02,-.04,.035,"#a33"));break;case"defuser":t(Re(.16,.05,.1,0,0,"#2d3a55")),t(Re(.04,.04,.12,0,.03,"#d4b13a",.05));break;default:{let a=n==="dualies"?"#9aa0a8":n==="fiveseven"?"#4b4f55":n==="tec9"?"#2d2f33":"#34373c",o=n==="tec9"?.22:.18;t(Ye([[-.04,.032],[o,.032],[o,.075],[-.03,.075],[-.045,.06]],.028,a),"b"),t(Ye([[-.035,0],[o-.02,0],[o-.02,.032],[-.035,.032]],.026,"#222428"),"m"),r(n==="cz75"?"#3a2a1a":"#202124",.22,.1,.03),n==="tec9"&&t(Ye([[.06,0],[.1,0],[.1,-.16],[.06,-.16]],.024,"#202124"),"w"),n==="usp"?(t(xt(.017,o,o+.15,.055,"#1a1b1d",10)),s=[o+.15,.055]):s=[o,.055],t(Re(.008,.012,.008,o-.01,.082,"#111"))}}return{parts:e,fore:i,muzzle:s}}var Fu=new Map,Xa=new Map;function qa(n){if(!Xa.has(n)){let e=x0(n);Xa.set(n,{fore:e.fore,muzzle:e.muzzle})}return Xa.get(n)}function Er(n,e=0){let t=n+":"+e;if(Fu.has(t))return Fu.get(t);let i=x0(n),s=Rc[e]||Rc[0],r=je[n]&&je[n].dmg,a=i.parts.map(([l,c])=>{if(!s.b||!r||c!=="b"&&c!=="w"||n==="knife"&&c==="w")return l;let h=l.clone(),f=new Ve(c==="b"?s.b:s.w),u=h.attributes.color.array,d=h.attributes.normal.array;for(let m=0;m<u.length/3;m++){let y=.8+d[m*3+1]*.2+d[m*3]*.06;u[m*3]=f.r*y,u[m*3+1]=f.g*y,u[m*3+2]=f.b*y}return h}),o=ki(a);return Fu.set(t,o),Xa.has(n)||Xa.set(n,{fore:i.fore,muzzle:i.muzzle}),o}function Ya(n,e=0){return new Ke(Er(n,e),$n)}var Cc={T:[{name:"F\xE9nix",shirt:"#8a7350",pants:"#5d5446",vest:"#6b5c40",glove:"#2b2b2b",boots:"#2b2620",skin:"#c79a74",head:"balaclava",hc:"#2b2b2b"},{name:"\xC9lite",shirt:"#5a3b2a",pants:"#3b4658",vest:"#3a2a20",glove:"#3a2a20",boots:"#1d1a17",skin:"#b98a66",head:"glasses",hc:"#1d1a17"},{name:"Guerrilla",shirt:"#5f6a3c",pants:"#7a6b4a",vest:"#4d5530",glove:"#3b3626",boots:"#3a2e20",skin:"#a7764f",head:"bandana",hc:"#a52a24"},{name:"Sombra",shirt:"#4a4d52",pants:"#33363b",vest:"#2a2c30",glove:"#1b1c1e",boots:"#151617",skin:"#c79a74",head:"goggles",hc:"#1d1e20"}],CT:[{name:"SWAT",shirt:"#36495f",pants:"#2f3b4a",vest:"#232d38",glove:"#1d1f22",boots:"#1d1f22",skin:"#c79a74",head:"helmet",hc:"#26303b"},{name:"GIGN",shirt:"#2b3a6b",pants:"#25305a",vest:"#1c2440",glove:"#15181f",boots:"#15181f",skin:"#c79a74",head:"visor",hc:"#1c2440"},{name:"SAS",shirt:"#2d2f33",pants:"#2a2c30",vest:"#4a4d45",glove:"#1b1c1e",boots:"#151617",skin:"#c79a74",head:"gasmask",hc:"#1b1c1e"},{name:"Comando",shirt:"#6b6a4a",pants:"#5d5a3e",vest:"#4a4a32",glove:"#3b3a2a",boots:"#2e2a20",skin:"#a7764f",head:"headset",hc:"#4a4a32"}]},y0=(n,e)=>(Cc[n]||Cc.T)[((e|0)%4+4)%4],Ou={};function VM(n,e){let t=n+e;if(Ou[t])return Ou[t];let i=y0(n,e),s=ki([Re(.4,.5,.24,0,.27,i.shirt),Re(.44,.36,.28,0,.32,i.vest),Re(.1,.1,.05,.15,.26,i.vest,-.11),Re(.1,.1,.05,.15,.26,i.vest,.11),Re(.1,.1,.05,.15,.38,i.vest,.11),Re(.42,.07,.26,0,.03,"#2a2620"),Re(.06,.06,.04,.13,.03,"#8a7a50"),Re(.5,.12,.26,0,.47,i.shirt)]),r=[Re(.22,.25,.23,0,.12,i.skin)],a=i.hc;i.head==="balaclava"?r.push(Re(.235,.26,.24,0,.125,a),Re(.18,.05,.02,.12,.15,i.skin),Re(.04,.025,.01,.13,.155,"#111",-.05),Re(.04,.025,.01,.13,.155,"#111",.05)):i.head==="glasses"?r.push(Re(.235,.08,.24,0,.23,a),Re(.2,.04,.02,.12,.15,"#111"),Re(.24,.05,.08,-.08,.2,a)):i.head==="bandana"?r.push(Re(.24,.07,.245,0,.21,a),Re(.06,.1,.03,-.12,.17,a),Re(.05,.02,.01,.12,.15,"#111",-.05),Re(.05,.02,.01,.12,.15,"#111",.05)):i.head==="goggles"?r.push(Re(.235,.26,.24,0,.125,a),Re(.2,.06,.04,.12,.16,"#3a6070"),Re(.24,.02,.25,0,.16,"#111")):i.head==="helmet"?r.push(Re(.26,.12,.27,0,.23,a),Re(.2,.05,.03,.13,.17,"#111"),Re(.05,.08,.05,0,.14,"#333",.13)):i.head==="visor"?r.push(Re(.27,.28,.27,0,.14,a),Re(.2,.12,.02,.135,.13,"#5a7a9a")):i.head==="gasmask"?r.push(Re(.24,.26,.24,0,.125,a),Re(.18,.06,.02,.12,.16,"#6a7a7a"),Re(.07,.07,.06,.14,.06,"#333"),Re(.05,.05,.06,.12,.05,"#555",-.07),Re(.05,.05,.06,.12,.05,"#555",.07)):i.head==="headset"&&r.push(Re(.26,.11,.27,0,.23,a),Re(.04,.08,.06,0,.12,"#222",-.125),Re(.04,.08,.06,0,.12,"#222",.125),Re(.2,.05,.03,.13,.17,"#111"));let o=ki(r),l=ki([Re(.15,.46,.16,0,-.23,i.pants),Re(.04,.12,.1,0,-.2,i.vest,.09)]),c=ki([Re(.14,.42,.15,0,-.21,i.pants),Re(.16,.1,.06,.06,-.04,"#222"),Re(.16,.12,.24,.04,-.4,i.boots)]),h=Re(.12,.12,1,0,0,i.shirt),f=Re(.105,.105,1,0,0,i.shirt),u=ki([Re(.09,.09,.1,0,0,i.glove)]);return Ou[t]={torso:s,head:o,thigh:l,shin:c,upper:h,fore:f,hand:u,S:i}}function Lc(n,e=0){let t=VM(n,e),i=new Rt,s=new Rt;i.add(s);let r=new Rt;r.position.y=.92,s.add(r);let a=[];for(let f of[-.11,.11]){let u=new Rt;u.position.set(f,0,0),r.add(u),u.add(new Ke(t.thigh,$n));let d=new Rt;d.position.y=-.46,u.add(d),d.add(new Ke(t.shin,$n)),a.push({hip:u,knee:d})}let o=new Rt;r.add(o),o.add(new Ke(t.torso,$n));let l=new Rt;l.position.y=.53,o.add(l),l.add(new Ke(t.head,$n));let c=new Rt;c.matrixAutoUpdate=!0,o.add(c);let h=[];for(let f=0;f<2;f++){let u=new Ke(t.upper,$n),d=new Ke(t.fore,$n),m=new Ke(t.hand,$n);o.add(u,d,m),h.push({u,f:d,h:m})}return i.userData={body:s,hips:r,legs:a,chest:o,neck:l,gun:c,arms:h,gunId:null,phase:0,team:n,si:e},i}function Nc(n,e,t=0){let i=n.userData,s=e+":"+t;if(i.gunId!==s&&(i.gunId=s,i.gun.clear(),i.info=e?qa(e):null,i.wid=e,e)){let r=Ya(e,t);r.scale.setScalar(1.12),i.gun.add(r)}}var Ga=new V,GM=new V,WM=new V,XM=new V,qM=new V;function _0(n,e,t,i,s,r){Ga.subVectors(e,n);let a=Ga.length(),o=(t+i)*.995;a>o&&(Ga.multiplyScalar(o/a),a=o);let l=GM.copy(n).add(Ga),c=(t*t-i*i+a*a)/(2*a),h=Math.sqrt(Math.max(0,t*t-c*c)),f=WM.copy(Ga).normalize(),u=XM.copy(s).sub(n);return u.sub(qM.copy(f).multiplyScalar(u.dot(f))).normalize(),r.copy(n).addScaledVector(f,c).addScaledVector(u,h),l}var YM=new V(0,1,0),p0=new mt;function Pc(n,e,t){let i=e.distanceTo(t);n.position.copy(e).add(t).multiplyScalar(.5),p0.lookAt(e,t,YM),n.quaternion.setFromRotationMatrix(p0),n.scale.set(1,1,Math.max(.01,i))}var Bu=new V,Ec=new V,ku=new V,m0=new V;function Dc(n,e,t){let i=n.userData;i.phase+=t*Math.min(e.speed,6)*2.4;let s=Math.min(1,e.speed/3)*.6,r=Math.sin(i.phase)*s,a=e.duck;i.hips.position.y=.92-a*.36;let[o,l]=i.legs;o.hip.rotation.x=r-a*1.2,l.hip.rotation.x=-r-a*1.2,o.knee.rotation.x=Math.max(0,-Math.sin(i.phase)*s)*1.2+a*2,l.knee.rotation.x=Math.max(0,Math.sin(i.phase)*s)*1.2+a*2,e.onGround||(o.hip.rotation.x=-.6,l.hip.rotation.x=.2,o.knee.rotation.x=.9,l.knee.rotation.x=.4),i.chest.rotation.x=a*.2;let c=Math.max(-1.2,Math.min(1.2,e.pitch));i.neck.rotation.x=c*.55;let h=i.info,f=i.wid?je[i.wid]?.cat||i.wid:null,u=f==="pistol"||i.wid==="zeus";if(f==="knife"||f==="grenade"||f==="c4"||i.wid==="defuser")i.gun.position.set(.27,.16,-.22),i.gun.rotation.set(c*.5+.3,0,0);else{let d=u?.42:.28;i.gun.position.set(.11,.4+Math.sin(c)*d,-Math.cos(c)*d),i.gun.rotation.set(c,0,0)}i.gun.updateMatrix();for(let d=0;d<2;d++){let m=i.arms[d],y=d===0;Bu.set(y?.24:-.24,.46,0);let p=null;h&&(y?p=Ec.set(0,0,f==="knife"?.06:0).applyMatrix4(i.gun.matrix):h.fore&&f!=="knife"?p=Ec.set(0,h.fore[1]*1.12-.02,-h.fore[0]*1.12).applyMatrix4(i.gun.matrix):u&&(p=Ec.set(-.04,-.04,.02).applyMatrix4(i.gun.matrix))),p||(p=Ec.set(y?.3:-.3,.02,-.05+r*.15*(y?-1:1))),m0.set(y?.7:-.7,-.5,.4);let g=_0(Bu,p,.29,.27,m0,ku);Pc(m.u,Bu,ku),Pc(m.f,ku,g),m.h.position.copy(g),m.h.quaternion.copy(m.f.quaternion)}if(i.body.rotation.x=0,i.body.position.y=0,e.dead>0){let d=Math.min(1,e.dead);i.body.rotation.x=d*1.45,i.body.position.y=d*.15}}function v0(){let n=new Rt,e=new Rt;n.add(e);let t=new Rt;e.add(t);let i=[];for(let s=0;s<2;s++){let r=new Ke(new dn(.08,.08,1),Ac),a=new Ke(new dn(.07,.07,1),Ac),o=new Rt;n.add(r,a,o),i.push({u:r,f:a,h:o})}return n.userData={hold:e,gun:t,arms:i,id:null,team:null},n}var zu={};function $M(n,e){let t=n+e;if(zu[t])return zu[t];let i=y0(n,e),s=Re(.085,.085,1,0,0,i.shirt),r=ki([Re(.072,.072,1,0,0,i.shirt),Re(.082,.082,.14,.43,0,i.vest)]),a=ki([Re(.062,.08,.085,0,-.01,i.glove),Re(.07,.028,.05,.015,-.045,i.glove),Re(.026,.026,.06,.02,.03,i.glove,.03)]);return zu[t]={sleeve:s,forearm:r,hand:a}}function M0(n,e,t,i=0,s=0){let r=n.userData,a=e+t+i+":"+s;if(r.key===a)return;r.key=a,r.id=e,r.team=t,r.gun.clear();for(let h of r.arms)h.h.clear();if(!e)return;let o=je[e]?.cat||e,l=new Ke(Er(e,s),Ac);r.gun.add(l),r.info=qa(e),r.cat=o;let c=$M(t,i);for(let h of r.arms)h.u.geometry=c.sleeve,h.f.geometry=c.forearm,h.h.add(new Ke(c.hand,Ac));r.base=o==="pistol"||e==="zeus"?[.12,-.1,-.37]:o==="knife"?[.14,-.13,-.33]:o==="grenade"||o==="c4"||e==="defuser"?[.12,-.12,-.28]:o==="sniper"?[.13,-.17,-.46]:[.12,-.125,-.28],r.rot=o==="knife"?[.35,.55,-.25]:o==="grenade"||o==="c4"?[.1,.2,0]:[.03,.07,0],n.traverse(h=>{h.renderOrder=10,h.frustumCulled=!1})}var Hu=new V,Vu=new V,Gu=new V,g0=new V,Wa=new mt;function b0(n){let e=n.userData;if(!e.id)return;e.hold.updateMatrix(),e.gun.updateMatrix(),Wa.multiplyMatrices(e.hold.matrix,e.gun.matrix);let t=e.info||{},i=e.cat;for(let s=0;s<2;s++){let r=e.arms[s],a=s===0;Hu.set(a?.2:-.22,-.3,.12);let o=null;a?o=Vu.set(.004,-.012,i==="knife"?.065:0).applyMatrix4(Wa):t.fore&&i!=="knife"?o=Vu.set(-.004,t.fore[1]-.03,-t.fore[0]).applyMatrix4(Wa):(i==="pistol"||e.id==="zeus")&&(o=Vu.set(-.035,-.065,.025).applyMatrix4(Wa));let l=!!o;if(r.u.visible=r.f.visible=r.h.visible=l,!l)continue;g0.set(a?.6:-.65,-.7,.3);let c=_0(Hu,o,.4,.4,g0,Gu);Pc(r.u,Hu,Gu),Pc(r.f,Gu,c),r.h.position.copy(c),r.h.quaternion.setFromRotationMatrix(Wa),a||r.h.rotateZ(.35)}}var Pe=null,$a=null,Wu=null,zi={x:0,y:0,z:0,yaw:0};function Za(){if(Pe){Pe.state==="suspended"&&Pe.resume();return}try{Pe=new(window.AudioContext||window.webkitAudioContext),$a=Pe.createGain(),$a.gain.value=.55;let n=Pe.createDynamicsCompressor();n.threshold.value=-14,n.ratio.value=6,$a.connect(n),n.connect(Pe.destination),Wu=Pe.createBuffer(1,Pe.sampleRate*1.5,Pe.sampleRate);let e=Wu.getChannelData(0);for(let t=0;t<e.length;t++)e[t]=Math.random()*2-1}catch{Pe=null}}function T0(n,e,t,i){zi.x=n,zi.y=e,zi.z=t,zi.yaw=i}function Nt(n,e=1,t=30){let i=Pe.createGain(),s=e,r=0;if(n){let a=n[0]-zi.x,o=n[1]-zi.y,l=n[2]-zi.z,c=Math.hypot(a,o,l);if(s*=1/(1+(c/t)**2*3),c>.5){let h=Math.cos(zi.yaw),f=-Math.sin(zi.yaw);r=Math.max(-1,Math.min(1,(a*h+l*f)/c))*.8}}if(s<.004)return null;if(i.gain.value=s,Pe.createStereoPanner){let a=Pe.createStereoPanner();a.pan.value=r,i.connect(a),a.connect($a)}else i.connect($a);return i}function kt(n,e,t,i,s,r=.7,a="lowpass",o=.002,l=1){let c=Pe.createBufferSource();c.buffer=Wu,c.playbackRate.value=.8+Math.random()*.4;let h=Pe.createBiquadFilter();h.type=a,h.Q.value=r,h.frequency.setValueAtTime(i,e),h.frequency.exponentialRampToValueAtTime(Math.max(30,s),e+t);let f=Pe.createGain();f.gain.setValueAtTime(1e-4,e),f.gain.exponentialRampToValueAtTime(l,e+o),f.gain.exponentialRampToValueAtTime(1e-4,e+t),c.connect(h),h.connect(f),f.connect(n),c.start(e,Math.random()),c.stop(e+t+.05)}function qt(n,e,t,i,s,r="sine",a=.5,o=.003){let l=Pe.createOscillator();l.type=r,l.frequency.setValueAtTime(i,e),s!==i&&l.frequency.exponentialRampToValueAtTime(Math.max(20,s),e+t);let c=Pe.createGain();c.gain.setValueAtTime(1e-4,e),c.gain.exponentialRampToValueAtTime(a,e+o),c.gain.exponentialRampToValueAtTime(1e-4,e+t),l.connect(c),c.connect(n),l.start(e),l.stop(e+t+.05)}var S0={pistol:{f:2400,d:.18,b:160,v:.8},smg:{f:2e3,d:.16,b:130,v:.75},rifle:{f:1600,d:.26,b:95,v:1},sniper:{f:1200,d:.55,b:70,v:1.25},heavy:{f:1300,d:.32,b:80,v:1.05},equip:{f:4e3,d:.3,b:300,v:.6}};function Xu(n,e,t,i){if(!Pe)return;let s=S0[n]||S0.rifle,r=Pe.currentTime,a=Nt(e,(t?.35:s.v)*(e?1:.6),t?12:60);if(a){if(n==="equip"){kt(a,r,.35,6e3,3e3,2,"bandpass",.002,.7),qt(a,r,.3,90,60,"sawtooth",.4);return}if(t){kt(a,r,.09,1800,500,1,"lowpass",.001,.9),qt(a,r,.05,300,120,"triangle",.3);return}kt(a,r,s.d,s.f*(i?.7:1),200,.9,"lowpass",.001,1),kt(a,r,.04,6e3,2500,.8,"highpass",.001,.45),qt(a,r,s.d*.7,s.b*1.6,s.b*.5,"sine",.9),e&&kt(a,r+.05,s.d*2.5,700,150,.5,"lowpass",.02,.18)}}function qu(n,e=1){if(!Pe)return;let t=Nt(n,.5*e,9);if(!t)return;let i=Pe.currentTime;kt(t,i,.06,900+Math.random()*400,200,1.2,"lowpass",.002,.7),qt(t,i,.04,90,60,"sine",.25)}function w0(n){if(!Pe)return;let e=Nt(n,.6,10);if(!e)return;let t=Pe.currentTime;kt(e,t,.1,700,120,1,"lowpass",.002,.9)}function Ka(n,e=2200,t=.4){if(!Pe)return;let i=Nt(n,t,8);if(!i)return;let s=Pe.currentTime;kt(i,s,.03,e,e*.5,3,"bandpass",.001,.9)}function E0(n){if(!Pe)return;let e=Pe.currentTime,t=Nt(n,.45,8);t&&(kt(t,e,.04,1500,700,3,"bandpass",.001,.8),kt(t,e+.35,.05,2600,1300,4,"bandpass",.001,.9),kt(t,e+.8,.05,1800,900,4,"bandpass",.001,.9))}function Uc(n,e){if(!Pe)return;let t=Pe.currentTime,i=Nt(null,.45);n?qt(i,t,e?.25:.12,e?2900:1500,e?2700:900,"triangle",.5):kt(i,t,.07,900,300,1,"lowpass",.002,.6)}function A0(){if(!Pe)return;let n=Pe.currentTime,e=Nt(null,.6);kt(e,n,.12,600,150,1,"lowpass",.002,.9),qt(e,n,.1,140,70,"sine",.6)}function R0(){if(!Pe)return;let n=Pe.currentTime,e=Nt(null,.25);qt(e,n,.08,1300,1300,"square",.25),qt(e,n+.07,.12,1750,1750,"square",.25)}function Yu(n,e){if(!Pe)return;let t=Pe.currentTime,i=Nt(n,e?1.6:1.2,e?200:70);i&&(kt(i,t,e?2.4:1.2,1800,60,.6,"lowpass",.004,1),qt(i,t,e?1.4:.7,80,30,"sine",1))}function C0(n){if(!Pe)return;let e=Pe.currentTime,t=Nt(n,1.1,50);t&&(kt(t,e,.4,5e3,800,.7,"lowpass",.002,1),qt(t,e,.2,120,50,"sine",.8))}function P0(n){if(!Pe||n<.3)return;let e=Pe.currentTime,t=Nt(null,.12);qt(t,e,n,3200,3150,"sine",.3,.02)}function $u(n){if(!Pe)return;let e=Pe.currentTime,t=Nt(n,.7,25);t&&kt(t,e,2.2,2500,500,.4,"highpass",.05,.5)}function I0(n){if(!Pe)return;let e=Pe.currentTime,t=Nt(n,.9,25);t&&(kt(t,e,1.2,1200,300,.6,"lowpass",.01,.9),kt(t,e+.05,.3,3e3,1500,2,"bandpass",.001,.5))}function L0(n){if(!Pe)return;let e=Pe.currentTime,t=Nt(n,.25,12);t&&kt(t,e,.25,900+Math.random()*500,300,1,"lowpass",.02,.6)}function N0(n){if(!Pe)return;let e=Pe.currentTime,t=Nt(n,.5,15);t&&(qt(t,e,.06,900,500,"triangle",.4),kt(t,e,.04,2500,1200,2,"bandpass",.001,.4))}function Zu(){if(!Pe)return;let n=Pe.currentTime,e=Nt(null,.4);kt(e,n,.18,400,1600,1,"bandpass",.05,.5)}function Ku(n,e){if(!Pe)return;let t=Pe.currentTime,i=Nt(n,.6,40);i&&qt(i,t,.12,e?2600:2100,e?2600:2100,"square",.2)}function Ju(){if(!Pe)return;let n=Pe.currentTime,e=Nt(null,.3);qt(e,n,.06,1400+Math.random()*600,1400,"square",.15)}function ju(n){if(!Pe)return;let e=Pe.currentTime,t=Nt(n,.6,15);t&&(kt(t,e,.2,3e3,1500,3,"bandpass",.001,.8),qt(t,e+.1,.25,600,900,"triangle",.3))}function D0(){if(!Pe)return;let n=Pe.currentTime,e=Nt(null,.35);qt(e,n,.06,900,900,"triangle",.4),qt(e,n+.05,.08,1350,1350,"triangle",.35)}function U0(){if(!Pe)return;let n=Pe.currentTime,e=Nt(null,.3);qt(e,n,.15,220,180,"square",.25)}function F0(){if(!Pe)return;let n=Pe.currentTime,e=Nt(null,.35);kt(e,n,.08,2e3,900,2,"bandpass",.002,.8)}function O0(n){if(!Pe)return;let e=Pe.currentTime,t=Nt(null,.32);(n?[523,659,784,1047]:[440,415,392,330]).forEach((s,r)=>{qt(t,e+r*.11,.5,s,s,"triangle",.35),qt(t,e+r*.11,.5,s/2,s/2,"sawtooth",.08)})}function Qu(){if(!Pe)return;let n=Pe.currentTime,e=Nt(null,.25);[392,523].forEach((t,i)=>qt(e,n+i*.12,.25,t,t,"triangle",.35))}var Et=n=>document.getElementById(n),ef=n=>String(n).replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]),B0=["#3b8cff","#a64bff","#ff8a2b","#ffd43b"],KM=[["ak47","AK-47"],["m4a4","M4A4"],["awp","AWP"],["deagle","Desert Eagle"],["usp","USP-S"],["knife","Cuchillo"]];function k0(n){let{G:e,store:t}=n,i={},s=t.get("ls:look",{t:-1,sk:[0,0],f:0,pw:"ak47"}),r="play",a=new Pi,o=document.createElement("canvas");o.width=2,o.height=256;{let I=o.getContext("2d"),A=I.createLinearGradient(0,0,0,256);A.addColorStop(0,"#0f2a6b"),A.addColorStop(.55,"#2d63d6"),A.addColorStop(1,"#7fc4ff"),I.fillStyle=A,I.fillRect(0,0,2,256)}let l=new Li(o);l.colorSpace=fn,a.background=l;let c=new jt(30,innerWidth/innerHeight,.1,100);a.add(new di("#cfe2ff","#2a3a6a",1.4));let h=new pi("#fff4e0",2.6);h.position.set(2,4,3),a.add(h);let f=new pi("#7fd0ff",2.2);f.position.set(-3,2.5,-3),a.add(f);let u=new Ke(new Qi(.75,.85,.18,24),new bn({color:"#1b2f66"}));u.position.y=-.09,a.add(u);let d=new Ke(new ya(.8,.025,6,40),new ln({color:"#7fe0ff"}));d.rotation.x=Math.PI/2,d.position.y=.01,a.add(d);let m=new Rt;a.add(m);for(let I=0;I<14;I++){let A=new Ke(new Xn(.5,30),new ln({color:"#9fd4ff",transparent:!0,opacity:.06,depthWrite:!1}));A.rotation.z=I/14*Math.PI,m.add(A)}m.position.set(0,1.2,-6);let y=new Rt;a.add(y);let p=null,g="",b=.4,w=null,v=0,_=new Rt;a.add(_);function T(){return s.t===1?"CT":"T"}function x(){let I=T(),A=s.sk[I==="T"?0:1],C=r==="locker"?s.pw:I==="T"?"ak47":"m4a4",U=I+A+C+s.f;if(U!==g&&(g=U,y.clear(),p=Lc(I,A),Nc(p,C,s.f),y.add(p),_.clear(),r==="locker")){let F=new Ke(Er(C,s.f),$n);F.scale.setScalar(1.8),F.rotation.y=Math.PI/2,_.add(F)}}i.render=(I,A)=>{v+=A,w||(b+=A*.25),y.rotation.y=Math.PI+Math.sin(b)*.6+.35,p&&Dc(p,{speed:0,duck:0,pitch:Math.sin(v*1.3)*.04-.05,onGround:!0,dead:0},A),m.rotation.z+=A*.05,_.position.set(-1.25,1.3+Math.sin(v*1.5)*.04,.2),_.rotation.y=Math.PI/2+Math.sin(v*.7)*.4;let C=innerWidth/innerHeight;c.aspect=C,c.fov=C<1?46:30,c.updateProjectionMatrix(),c.position.set(C<1?0:.15,1.15,5.2),c.lookAt(C<1?0:.15,.95,0),I.setClearColor("#0f2a6b"),I.clear(),I.render(a,c)},addEventListener("pointerdown",I=>{e.phase==="lobby"&&I.target.tagName==="CANVAS"&&(w={x:I.clientX,s:b})}),addEventListener("pointermove",I=>{w&&(b=w.s-(I.clientX-w.x)*.01)}),addEventListener("pointerup",()=>{w=null});function S(){t.set("ls:look",s),n.sendPref({t:s.t,sk:s.sk,f:s.f})}i.myPref=()=>({t:s.t,sk:s.sk,f:s.f}),i.show=()=>{Et("lobby").hidden=!1;for(let I of document.querySelectorAll("#lobby nav button"))I.onclick=()=>{r=I.dataset.tab,R()};for(let I of document.querySelectorAll("[data-pref]"))I.onclick=()=>{s.t=+I.dataset.pref,S(),R()};Et("goBtn").onclick=()=>{n.isHost()&&N()&&n.onStart()},Et("modeBtn").onclick=()=>{Et("modeSel").hidden=!1,R()},Et("modeClose").onclick=()=>{Et("modeSel").hidden=!0},M(),R()},i.hide=()=>{Et("lobby").hidden=!0,Et("modeSel").hidden=!0},i.refresh=()=>{Et("lobby").hidden||R()};function N(){let I=(n.ctx().players||[]).length;return e.cfg.bots||I>=2}function M(){let I=Et("modes");I.innerHTML="";for(let F of[2,3,5]){let k=document.createElement("div");k.className="mode",k.dataset.s=F,k.innerHTML=`<b>${F}<i>VS</i>${F}</b><small>${F===5?"Cl\xE1sico competitivo":F===3?"Escuadra":"Duelo de parejas"}</small>`,k.onclick=()=>{n.isHost()&&(e.cfg.size=F,n.pushCfg())},I.appendChild(k)}let A=Et("botsSeg");A.innerHTML="";for(let[F,k]of[[!0,"Con bots"],[!1,"Sin bots"]]){let D=document.createElement("button");D.textContent=k,D.dataset.v=F,D.onclick=()=>{n.isHost()&&(e.cfg.bots=F,n.pushCfg())},A.appendChild(D)}let C=(F,k,D)=>{F.innerHTML="";for(let[z,G]of k){let $=document.createElement("button");$.textContent=G,$.dataset.k=z,$.onclick=()=>{n.isHost()&&(e.cfg[D]=z,n.pushCfg())},F.appendChild($)}};C(Et("len"),Object.entries(n.LENGTHS).map(([F,k])=>[F,k.name+" \xB7 a "+k.win]),"len"),C(Et("diff"),Object.entries(n.DIFF).map(([F,k])=>[F,k.name]),"diff");let U=Et("maps");U.innerHTML="";for(let F of n.MAPS){let k=document.createElement("div");k.className="mcard",k.dataset.id=F.id;let D=document.createElement("canvas");D.width=200,D.height=200,k.appendChild(D);let z=document.createElement("div");z.className="mn",z.innerHTML=F.name+"<small>"+F.sub+"</small>",k.appendChild(z),k.onclick=()=>{n.isHost()&&(e.cfg.map=F.id,t.set("ls:map",F.id),n.pushCfg())},U.appendChild(k),n.mapThumb(F.id).then(G=>{if(G){let $=D.getContext("2d");$.fillStyle="#0b1530",$.fillRect(0,0,200,200),$.drawImage(G,0,0,200,200)}})}}function E(){let I=Et("lockerGrid");I.innerHTML="";for(let[k,D]of[["T",0],["CT",1]]){let z=document.createElement("h5");z.textContent=k==="T"?"TERRORISTAS":"CONTRATERRORISTAS",I.appendChild(z);let G=document.createElement("div");G.className="tiles",Cc[k].forEach(($,Z)=>{let q=document.createElement("div");q.className="tile"+(s.sk[D]===Z?" on":""),q.style.setProperty("--r",B0[Z]),q.innerHTML=`<div class="sw"><i style="background:${$.shirt}"></i><i style="background:${$.vest}"></i><i style="background:${$.hc}"></i></div><b>${ef($.name)}</b><small>${["Com\xFAn","Rara","\xC9pica","Legendaria"][Z]}</small>`,q.onclick=()=>{s.sk[D]=Z,s.t,s.t=D,S(),R()},G.appendChild(q)}),I.appendChild(G)}let A=document.createElement("h5");A.textContent="ACABADO DE ARMAS",I.appendChild(A);let C=document.createElement("div");C.className="tiles fin",Rc.forEach((k,D)=>{let z=document.createElement("div");z.className="tile"+(s.f===D?" on":""),z.style.setProperty("--r",B0[Math.min(3,Math.floor(D/1.6))]),z.innerHTML=`<div class="sw"><i style="background:${k.sw}"></i><i style="background:${k.w||"#6b4a2a"}"></i></div><b>${ef(k.name)}</b>`,z.onclick=()=>{s.f=D,S(),R()},C.appendChild(z)}),I.appendChild(C);let U=document.createElement("h5");U.textContent="VER CON",I.appendChild(U);let F=document.createElement("div");F.className="chips";for(let[k,D]of KM){let z=document.createElement("button");z.textContent=D,z.className=s.pw===k?"on":"",z.onclick=()=>{s.pw=k,t.set("ls:look",s),R()},F.appendChild(z)}I.appendChild(F)}function R(){let I=n.ctx(),A=n.isHost(),C=n.myId();for(let Z of document.querySelectorAll("#lobby nav button"))Z.classList.toggle("on",Z.dataset.tab===r);Et("tabPlay").hidden=r!=="play",Et("tabLocker").hidden=r!=="locker",r==="locker"&&E(),Et("meName").textContent=I.me.name,Et("roomInfo").textContent=I.online?`Sala ${I.roomCode||""} \xB7 ${(I.players||[]).length} jugador${(I.players||[]).length===1?"":"es"}`:"Pr\xE1ctica sin conexi\xF3n";for(let Z of document.querySelectorAll("[data-pref]"))Z.classList.toggle("on",+Z.dataset.pref===s.t);let U=(I.players||[]).map(Z=>({...Z,pr:e.prefs[Z.id]||{}})),F=[0,0],k={};for(let Z of U){let q=Z.pr.t??-1;(q===0||q===1)&&(k[Z.id]=q,F[q]++)}for(let Z of U.slice().sort((q,ae)=>q.slot-ae.slot))if(k[Z.id]===void 0){let q=F[0]<=F[1]?0:1;k[Z.id]=q,F[q]++}let D=e.cfg.bots?Math.max(F[0],F[1],e.cfg.size):Math.max(F[0],F[1]);Et("party").innerHTML="<h4>GRUPO</h4>"+U.map(Z=>`<div class="pm ${k[Z.id]?"ct":"t"} ${Z.id===C?"me":""}"><i></i><span>${ef(Z.name)}</span><small>${k[Z.id]?"CT":"T"}${(Z.pr.t??-1)===-1?" \xB7 auto":""}${Z.id===I.hostId?" \xB7 \u{1F451} host":""}</small></div>`).join("")+(e.cfg.bots?`<div class="pm bot"><i></i><span>+ ${Math.max(0,D*2-U.length)} bots</span><small>${n.DIFF[e.cfg.diff].name}</small></div>`:"");let z=n.MAPS.find(Z=>Z.id===e.cfg.map)||n.MAPS[0];Et("modeTitle").textContent=`${D} VS ${D}`,Et("modeSub").textContent=`${z.name} \xB7 ${e.cfg.bots?"con bots":"sin bots"} \xB7 ${n.LENGTHS[e.cfg.len].name}`,n.mapThumb(z.id).then(Z=>{if(!Z)return;let q=Et("modeMap"),ae=q.getContext("2d");ae.fillStyle="#0b1530",ae.fillRect(0,0,q.width,q.height),ae.drawImage(Z,0,0,q.width,q.height)}),Et("modeBtn").textContent=A?"CAMBIAR MODO":"VER MODO";let G=Et("goBtn"),$=N();G.disabled=!A||!$,G.innerHTML=A?$?"JUGAR":"FALTAN JUGADORES":"ESPERANDO AL HOST",Et("goNote").textContent=!$&&A?"Sin bots hacen falta al menos 2 jugadores en la sala.":A?"":"El host elige el modo y empieza la partida.";for(let Z of document.querySelectorAll("#modes .mode"))Z.classList.toggle("on",+Z.dataset.s===e.cfg.size);for(let Z of document.querySelectorAll("#botsSeg button"))Z.classList.toggle("on",String(e.cfg.bots)===Z.dataset.v);for(let Z of document.querySelectorAll("#len button"))Z.classList.toggle("on",Z.dataset.k===e.cfg.len);for(let Z of document.querySelectorAll("#diff button"))Z.classList.toggle("on",Z.dataset.k===e.cfg.diff);for(let Z of document.querySelectorAll(".mcard"))Z.classList.toggle("on",Z.dataset.id===e.cfg.map);Et("modeSel").classList.toggle("ro",!A),x()}return i}var tf=n=>document.getElementById(n),Us=n=>String(n).replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]),Hn=(n,e)=>{n._v!==e&&(n._v=e,n.textContent=e)},Fs=n=>je[n]?je[n].name:n==="c4"?"C4":n==="world"?"ca\xEDda":n;function nf(n){let e=n.n,t=document.createElement("canvas");t.width=e,t.height=e;let i=t.getContext("2d"),s=i.createImageData(e,e),r=s.data;for(let o=0;o<e*e;o++){let l=-1e9,c=0;for(let y=n.L-1;y>=0;y--){let p=n.top[y][o];if(!isNaN(p)&&n.cls[y][o]!==3&&n.cls[y][o]!==4){(y===n.L-1||l<-1e8)&&(l=p,c=n.cls[y][o]);break}}let h=0,f=0,u=0,d=0;if(l>-1e8){let y=Math.max(0,Math.min(1,l/6.5));h=70+y*120,f=78+y*110,u=88+y*70,d=235,c===2&&(h*=.62,f*=.62,u*=.62)}else{let y=!1;for(let p=0;p<n.L;p++)n.cls[p][o]===3&&(y=!0);y&&(h=f=u=22,d=230)}n.flags[o]&12&&d&&(h=h*.6+120,f=f*.6+40,u*=.6),r[o*4]=h,r[o*4+1]=f,r[o*4+2]=u,r[o*4+3]=d}i.putImageData(s,0,0);let a=n.info.zones;i.font="bold 34px Rajdhani, sans-serif",i.textAlign="center",i.textBaseline="middle";for(let o of["A","B"]){let l=a[o];l&&(i.fillStyle="#000",i.fillText(o,(l[0]+l[2])/2+1,(l[1]+l[3])/2+1),i.fillStyle="#ffd25a",i.fillText(o,(l[0]+l[2])/2,(l[1]+l[3])/2))}return t}function z0(n,e,t,i,s,r,a){let o=n.getContext("2d"),l=n.width,c=1.25;o.clearRect(0,0,l,l),o.save(),o.beginPath(),o.rect(0,0,l,l),o.clip(),o.translate(l/2,l/2),o.rotate(i.yaw),o.scale(c,c);let h=i.x/t.cell,f=i.z/t.cell;o.drawImage(e,-h,-f);let u=(d,m,y,p=3.4)=>{o.fillStyle=y,o.beginPath(),o.arc(d/t.cell-h,m/t.cell-f,p/c,0,7),o.fill(),o.strokeStyle="#000",o.lineWidth=1/c,o.stroke()};if(r&&(r.s==="planted"||r.s==="dropped")&&(a==="T"||r.s==="planted"&&r.seen)){o.fillStyle=r.s==="planted"?"#ff4038":"#ffb03a";let d=r.x/t.cell-h,m=r.z/t.cell-f;o.fillRect(d-4/c,m-3/c,8/c,6/c)}for(let d of s)u(d.x,d.z,d.col,d.me?0:3.4);o.restore(),o.fillStyle="#fff",o.beginPath(),o.moveTo(l/2,l/2-7),o.lineTo(l/2+5,l/2+5),o.lineTo(l/2,l/2+2),o.lineTo(l/2-5,l/2+5),o.closePath(),o.fill()}var We={el:{},init(){for(let n of["hud","moneyV","moneyAdd","scT","scCT","pipsT","pipsCT","clock","clockV","bombIco","feed","hpV","arV","helmV","ammo","wname","magV","resV","slots","xhair","hitmark","centerMsg","prog","progL","progB","hint","dmgDir","scope","flash","hurt","spec","banner","ban1","ban2","buyHint","zoneName","board"])this.el[n]=tf(n)},money(n){Hn(this.el.moneyV,String(n))},moneyDelta(n,e){if(!n)return;let t=document.createElement("div");t.className=n<0?"neg":"",t.textContent=(n>0?"+$":"-$")+Math.abs(n)+(e?"  "+e:""),this.el.moneyAdd.appendChild(t),setTimeout(()=>t.remove(),2300)},vitals(n,e,t){Hn(this.el.hpV,String(n)),Hn(this.el.arV,String(e)),this.el.helmV.hidden=!t,this.el.hpV.parentElement.classList.toggle("low",n<=25)},ammo(n,e,t,i){Hn(this.el.wname,n),this.el.ammo.querySelector(".nums").style.visibility=i?"":"hidden",Hn(this.el.magV,String(e)),Hn(this.el.resV,String(t)),this.el.ammo.classList.toggle("low",i&&e<=5)},clock(n,e,t){let i=Math.max(0,Math.ceil(n));Hn(this.el.clockV,t?"":Math.floor(i/60)+":"+String(i%60).padStart(2,"0")),this.el.clock.classList.toggle("red",e),this.el.bombIco.hidden=!t},score(n,e,t,i,s,r){Hn(this.el.scT,String(n)),Hn(this.el.scCT,String(e));let a=(o,l,c)=>{let h=l+"/"+c;o._k!==h&&(o._k=h,o.innerHTML=Array.from({length:c},(f,u)=>`<i class="${u<l?"":"dead"}"></i>`).join(""))};a(this.el.pipsT,t,i),a(this.el.pipsCT,s,r)},feed(n,e,t,i,s,r){let a=document.createElement("div");for(r&&(a.className="mine"),a.innerHTML=(n?`<span class="${n.team}">${Us(n.name)}</span>`:"")+`<span class="w">${Us(Fs(t))}${s?" \u27C2":""}${i?" \u271B":""}</span><span class="${e.team}">${Us(e.name)}</span>`,this.el.feed.appendChild(a);this.el.feed.children.length>6;)this.el.feed.firstChild.remove();setTimeout(()=>a.remove(),7e3)},slots(n,e){let t=n.map(i=>i.key+i.id).join()+e;this.el.slots._k!==t&&(this.el.slots._k=t,this.el.slots.innerHTML=n.map(i=>`<div class="${i.slot===e?"on":""}"><b>${i.key}</b>${Us(i.name)}</div>`).join(""))},showSlots(){this.el.slots.style.opacity=1,clearTimeout(this._st),this._st=setTimeout(()=>this.el.slots.style.opacity=.35,1800)},crosshair(n,e,t){let i=Math.round(n),s=this.el.xhair;if(s._g===i+""+e)return;s._g=i+""+e,s.style.display=e?"":"none";let[r,a,o,l]=s.children;r.style.left=-(i+8)+"px",a.style.left=i+"px",o.style.top=-(i+8)+"px",l.style.top=i+"px"},hit(n){let e=this.el.hitmark;e.classList.remove("on"),e.offsetWidth,e.classList.add("on"),e.style.filter=n?"drop-shadow(0 0 2px red) sepia(1) saturate(8) hue-rotate(-30deg)":""},center(n,e=2200){let t=this.el.centerMsg;t.textContent=n,t.style.opacity=1,clearTimeout(this._ct),e&&(this._ct=setTimeout(()=>t.style.opacity=0,e))},progress(n,e){if(e==null){this.el.prog.hidden=!0;return}this.el.prog.hidden=!1,Hn(this.el.progL,n),this.el.progB.style.width=(e*100).toFixed(1)+"%"},hint(n){Hn(this.el.hint,n||"")},dmgDir(n){let e=document.createElement("i");e.style.transform=`rotate(${n}rad) translateY(-140px)`,this.el.dmgDir.appendChild(e),setTimeout(()=>e.remove(),1500)},banner(n,e,t){let i=this.el.banner;if(!e){i.hidden=!0;return}i.className=n||"",i.hidden=!1,Hn(this.el.ban1,e),Hn(this.el.ban2,t||"")}};function H0(n,e){let t=[...n.players.values()],i=o=>`<tr class="${o.team} ${o.alive?"":"dead"} ${o.id===e?"me":""}"><td>${Us(o.name)}${o.inv&&o.inv.c4&&n.players.get(e)?.team==="T"?" \u{1F4A3}":""}</td><td>$${o.money}</td><td>${o.k}</td><td>${o.d}</td><td>${o.a}</td><td>${o.mvp?"\u2605"+o.mvp:""}</td><td>${o.ping||""}</td></tr>`,s=o=>{let l=t.filter(c=>c.team===o).sort((c,h)=>h.k-c.k||c.d-h.d);return`<div class="tt ${o}">${o==="T"?"TERRORISTAS":"CONTRATERRORISTAS"}</div><table><tr><th>Jugador</th><th>Plata</th><th>K</th><th>D</th><th>A</th><th>MVP</th><th></th></tr>${l.map(i).join("")}</table>`},r=n.score[n.half===0?0:1],a=n.score[n.half===0?1:0];return`<div class="bh"><span>${Us(n.mapName)} \xB7 Ronda ${n.round}</span><span><b style="color:var(--t)">${r}</b> \u2013 <b style="color:var(--ct)">${a}</b></span></div>${s("T")}${s("CT")}`}function V0(n,e,t,i){let s=tf("buyCols");s.innerHTML="",xc.forEach((r,a)=>{let o=document.createElement("div");o.className="bcol",o.dataset.c=a,o.innerHTML=`<h5><b>${a+1}</b>${r.name}</h5>`,r.items[n].forEach((l,c)=>{let h=je[l],f=document.createElement("div");f.className="bit",f.dataset.id=l,f.innerHTML=`<span class="k">${c+1}</span><span class="n">${Us(h.name)}</span><span class="p">$${h.price}</span>`;let u=e(l);u&&f.appendChild(u),f.onclick=()=>t(l),f.onmouseenter=()=>i(l),o.appendChild(f)}),s.appendChild(o)})}function Fc(n,e){tf("buyMoney").textContent=n.money;for(let t of document.querySelectorAll("#buyCols .bit")){let i=t.dataset.id,r=je[i].price;i==="vesthelm"&&n.ar>=100&&!n.helm&&(r=350),t.querySelector(".p").textContent="$"+r;let a=n.inv.p===i||n.inv.s===i||i==="vest"&&n.ar>=100||i==="vesthelm"&&n.ar>=100&&n.helm||i==="defuser"&&n.inv.kit||i==="zeus"&&n.inv.zeus||n.inv.g.includes(i);t.classList.toggle("own",a),t.classList.toggle("no",n.money<r)}for(let t of document.querySelectorAll("#buyCols .bcol"))t.classList.toggle("sel",+t.dataset.c===e)}function G0(n){let e=je[n];return e?e.dmg?`${e.name} \u2014 $${e.price} \xB7 da\xF1o ${e.dmg} \xB7 cargador ${e.mag||"-"} \xB7 ${e.rpm} disparos/min \xB7 penetraci\xF3n de blindaje ${Math.round(e.ap*100)}% \xB7 premio por baja $${e.reward}`:`${e.name} \u2014 $${e.price}`+(e.cat==="grenade"?` \xB7 premio por baja $${e.reward}`:""):""}var zc=n=>(n.team==="T"?n.skT:n.skCT)|0,W0=.0254,X0=Math.PI/180,tn=n=>document.getElementById(n),df=[{id:"dust2",name:"Dust II",sub:"Desierto \xB7 cl\xE1sico"},{id:"mirage",name:"Mirage",sub:"Pueblo marroqu\xED"},{id:"vertigo",name:"Vertigo",sub:"Rascacielos en obra"}],io={get(n,e){try{let t=localStorage.getItem(n);return t?JSON.parse(t):e}catch{return e}},set(n,e){try{localStorage.setItem(n,JSON.stringify(e))}catch{}}},X={players:new Map,drops:new Map,nades:[],bomb:{state:"none",x:0,y:0,z:0,t:0},phase:"lobby",timeLeft:0,round:0,score:[0,0],half:0,time:0,cfg:{map:io.get("ls:map","dust2"),len:"corta",size:5,bots:!0,diff:"normal"},prefs:{}},zt=null,ot="local",It=null,Yt=null,Hc={},_f=!1,Wt,mn,Jt,ja,Pr,Cn,gn,Oc=null,pf=null,Mt=()=>!zt||zt.isHost||!zt.online;function Dn(n,e,t){zt&&zt.online&&Arcade.send(n,e,t)}X.emit=(n,e)=>{Dn(n,e),Af(n,e,ot)};X.emitTo=(n,e,t)=>{let i=X.players.get(n);n===ot?Af(e,t,ot):i&&!i.bot&&Dn(e,t,{to:n})};X.end=(n,e)=>{zt&&zt.online?Arcade.end({winners:n,text:e}):setTimeout(C1,500)};X.solidAt=(n,e,t)=>dc(X.W,n,e,t);X.floorAt=(n,e,t)=>{let i=Sr(X.W,n,e,t);return i>-1e8?i:t-.5};var Vc=new Map;X.setPlanting=(n,e)=>{e>0?Vc.set(n,e):Vc.delete(n)};X.planting=n=>Vc.get(n)||0;X.fallDamage=(n,e)=>{let t=Eu(e);t>0&&It&&It.damage(n.id,n.id,t,"leg","world",{raw:!0})};function Ht(n,e){Mt()?It&&It.handle(n,e,ot,{admin:Arcade.admin&&Arcade.admin.active}):Dn(n,e,{to:zt.hostId})}var JM=["hit","buy","drop","take","nade","plant","defst","defx","defok","adm","fall"],O={pl:null,slot:"s",drawT:0,fireT:0,reloadT:0,shots:0,pp:0,py:0,scope:0,ammo:{p:[0,0],s:[0,0]},ammoW:{p:null,s:null},invV:-1,gsel:0,plantT:0,defT:0,defusing:!1,trig:!1,trig2:!1,nadeHold:0,nadeCd:0,stepT:0,deadT:0,spec:null,blind:0,blindMax:0,shake:0,bob:0,kick:0,lastSlot:"k",zeus:!1,sway:[0,0],swayT:[0,0],pickCd:0,voidSent:!1,lastMoney:null,rescope:0,knife2:!1},Dt=()=>X.players.get(ot),Xt=new Set,Pn=!1,so=!1,Ir=!1,Rr=io.get("ls:sens",.0021),hn={mx:0,mz:0,fire:!1,look:null},Gi=matchMedia("(pointer: coarse)").matches,Q0=io.get("ls:q",Gi?0:2);addEventListener("keydown",n=>{if(n.repeat&&!["KeyW","KeyA","KeyS","KeyD"].includes(n.code)){n.code==="Tab"&&n.preventDefault();return}if(X.phase!=="lobby"){if(Xt.add(n.code),["Tab","Space","ControlLeft","ControlRight","AltLeft","KeyB"].includes(n.code)&&n.preventDefault(),Un){p1(n);return}Mf(n.code)}});addEventListener("beforeunload",n=>{if(X.phase!=="lobby")return n.preventDefault(),n.returnValue="",""});function em(){let n=document.documentElement;try{let e=n.requestFullscreen?n.requestFullscreen({navigationUI:"hide"}):null,t=()=>{try{navigator.keyboard&&navigator.keyboard.lock&&navigator.keyboard.lock().catch(()=>{})}catch{}};e&&e.then?e.then(t).catch(()=>{}):t()}catch{}}addEventListener("keydown",n=>{(n.ctrlKey||n.metaKey)&&["KeyW","KeyS","KeyD","KeyA","KeyR","KeyQ","KeyE","KeyG","KeyB","KeyF"].includes(n.code)&&X.phase!=="lobby"&&n.preventDefault()},!0);addEventListener("keyup",n=>{Xt.delete(n.code),n.code==="KeyE"&&O.defusing&&Xc()});addEventListener("blur",()=>{Xt.clear(),Pn=so=!1});addEventListener("mousedown",n=>{if(Za(),!(X.phase==="lobby"||Un)){if(!Ir&&!Gi){document.fullscreenElement||em(),to();return}n.button===0&&(Pn=!0),n.button===2&&(so=!0,Tf())}});addEventListener("mouseup",n=>{n.button===0&&(Pn=!1),n.button===2&&(so=!1)});addEventListener("contextmenu",n=>n.preventDefault());addEventListener("mousemove",n=>{if(!Ir||!O.pl||X.phase==="lobby")return;let e=O.scope?e1():1;vf(n.movementX*Rr/e,n.movementY*Rr/e)});addEventListener("wheel",n=>{Ir&&X.phase!=="lobby"&&!Un&&tm(n.deltaY>0?1:-1)},{passive:!0});function vf(n,e){let t=O.pl;t&&(t.yaw-=n,t.pitch=Math.max(-1.5,Math.min(1.5,t.pitch-e)),O.swayT[0]+=n*4,O.swayT[1]+=e*4)}function to(){let n=Wt.domElement;try{let e=n.requestPointerLock&&n.requestPointerLock();e&&e.catch&&e.catch(()=>{})}catch{}}document.addEventListener("pointerlockchange",()=>{Ir=document.pointerLockElement===Wt.domElement,Wc()});function Wc(){tn("clickPlay").hidden=Ir||Gi||X.phase==="lobby"||Un||!_f}function Mf(n){let e=Dt();if(e){if(n==="KeyB"){qc();return}if(n!=="Tab"){if(n==="BracketLeft"||n==="BracketRight"){Rr=Math.max(4e-4,Math.min(.01,Rr*(n==="BracketLeft"?.9:1.1))),io.set("ls:sens",Rr),We.center("Sensibilidad "+(Rr*1e3).toFixed(2),1200);return}if(!e.alive){n==="Space"&&Rf(1);return}if(n==="Digit1")Nn("p");else if(n==="Digit2")Nn("s");else if(n==="Digit3")O.slot==="k"&&e.inv.zeus?Nn("z"):(O.slot,Nn("k"));else if(n==="Digit4"){let t=e.inv.g;t.length&&(O.slot==="g"&&(O.gsel=(O.gsel+1)%t.length),Nn("g",!0))}else n==="Digit5"?Nn("c4"):n==="KeyQ"?Nn(O.lastSlot):n==="KeyR"?nm():n==="KeyG"?t1():n==="KeyE"?im():n==="KeyF"&&(O.inspect=1.6)}}}function jM(){if(!Gi)return;tn("touch").hidden=!1;let n=tn("stick"),e=n.firstElementChild,t=null,i=null;n.addEventListener("touchstart",r=>{t=r.changedTouches[0].identifier;let o=n.getBoundingClientRect();i=[o.left+o.width/2,o.top+o.height/2],r.preventDefault()},{passive:!1}),addEventListener("touchmove",r=>{for(let a of r.changedTouches)if(a.identifier===t){let o=(a.clientX-i[0])/55,l=(a.clientY-i[1])/55,c=Math.hypot(o,l);c>1&&(o/=c,l/=c),hn.mx=o,hn.mz=l,e.style.transform=`translate(${o*40}px,${l*40}px)`}else hn.look&&a.identifier===hn.look.id&&(vf((a.clientX-hn.look.x)*.006,(a.clientY-hn.look.y)*.006),hn.look.x=a.clientX,hn.look.y=a.clientY)},{passive:!0}),addEventListener("touchend",r=>{for(let a of r.changedTouches)a.identifier===t&&(t=null,hn.mx=hn.mz=0,e.style.transform=""),hn.look&&a.identifier===hn.look.id&&(hn.look=null)}),Wt.domElement.addEventListener("touchstart",r=>{let a=r.changedTouches[0];a.clientX>innerWidth*.35&&(hn.look={id:a.identifier,x:a.clientX,y:a.clientY}),Za()},{passive:!0});let s=(r,a,o)=>{let l=tn(r);l.addEventListener("touchstart",c=>{c.preventDefault(),a()},{passive:!1}),l.addEventListener("touchend",c=>{c.preventDefault(),o&&o()},{passive:!1})};s("tFire",()=>Pn=!0,()=>Pn=!1),s("tJump",()=>Xt.add("Space"),()=>Xt.delete("Space")),s("tDuck",()=>Xt.add("KeyC"),()=>Xt.delete("KeyC")),s("tReload",()=>Mf("KeyR")),s("tSwitch",()=>tm(1)),s("tBuy",()=>qc()),s("tUse",()=>{Xt.add("KeyE"),im()},()=>{Xt.delete("KeyE"),O.defusing&&Xc()}),s("tScope",()=>Tf())}function fs(n,e=Dt()){if(!e)return null;let t=e.inv;return n==="p"?t.p:n==="s"?t.s:n==="k"?"knife":n==="z"?t.zeus?"zeus":null:n==="g"?t.g.length?t.g[Math.min(O.gsel,t.g.length-1)]:null:n==="c4"&&t.c4?"c4":null}var Kn=()=>fs(O.slot)||"knife";function Nn(n,e){fs(n)&&(n===O.slot&&!e||(n!==O.slot&&(O.lastSlot=O.slot),O.slot=n,O.drawT=n==="k"?.35:.6,O.reloadT=0,O.scope=0,O.plantT=0,O.nadeHold=0,O.defusing&&Xc(),Ka(null,1400,.25),We.showSlots()))}function tm(n){let e=["p","s","k","z","g","c4"].filter(i=>fs(i));if(!e.length)return;let t=e.indexOf(O.slot);Nn(e[(t+n+e.length)%e.length])}function bf(){return fs("p")?"p":fs("s")?"s":"k"}function Sf(){let n=Dt();if(!(!n||n.inv.v===O.invV)){O.invV=n.inv.v;for(let e of["p","s"]){let t=n.inv[e];if(t!==O.ammoW[e]){let i=O.ammoW[e];O.ammoW[e]=t;let s=je[t];O.ammo[e]=t?n.inv[e+"a"]?[...n.inv[e+"a"]]:[s.mag,s.reserve]:[0,0],t&&e==="p"&&n.alive&&X.phase!=="post"&&i!==t&&Nn("p",!0)}}fs(O.slot)||Nn(bf(),!0)}}function nm(){let n=O.slot;if(n!=="p"&&n!=="s")return;let e=je[Kn()],t=O.ammo[n];!e.mag||t[0]>=e.mag||t[1]<=0||O.reloadT>0||O.drawT>0||(O.reloadT=e.reload,O.scope=0,E0(null))}function QM(){let n=O.slot,e=je[Kn()],t=O.ammo[n];if(!t||!e.mag)return;let i=e.mag-t[0],s=Vi("ls.ammo")?i:Math.min(i,t[1]);t[0]+=s,Vi("ls.ammo")||(t[1]-=s)}var e1=()=>{let n=je[Kn()];return n&&n.scope?n.scope[Math.max(0,O.scope-1)]:1};function Tf(){let n=Dt();if(!n||!n.alive)return;let e=Kn(),t=je[e];if(t&&t.scope&&O.reloadT<=0&&O.drawT<=0){O.scope=(O.scope+1)%(t.scope.length+1),Ka(null,3e3,.2);return}e==="knife"&&O.fireT<=0&&O.drawT<=0&&am(!0),t&&t.cat==="grenade"&&(O.nadeHold=.3)}function t1(){let n=Dt(),e=O.slot;if(!n.alive)return;let t=O.pl;e==="p"||e==="s"?Ht("drop",{s:e,x:t.x,y:t.y,z:t.z,yaw:t.yaw,ammo:O.ammo[e]}):e==="c4"&&Ht("drop",{s:"c4",x:t.x,y:t.y,z:t.z,yaw:t.yaw})}function im(){let n=Dt();if(!n||!n.alive||!O.pl)return;let e=O.pl,t=X.bomb;if(n.team==="CT"&&t.state==="planted"&&Math.hypot(e.x-t.x,e.z-t.z)<1.7&&Math.abs(e.y-t.y)<1.6&&e.onGround){O.defusing||(O.defusing=!0,O.defT=0,Ht("defst",{}),ju(null));return}let i=sm();i&&Ht("take",{id:i.id,swap:!0,ammo:O.ammo[Ns(i.w)===1?"p":"s"]})}function Xc(){O.defusing=!1,O.defT=0,Ht("defx",{})}function sm(){let n=O.pl,e=null,t=1e9,i=-Math.sin(n.yaw),s=-Math.cos(n.yaw);for(let r of X.drops.values()){let a=r.x-n.x,o=r.z-n.z,l=Math.hypot(a,o);if(l>2.2||Math.abs(r.y-n.y)>1.5)continue;let c=(a*i+o*s)/Math.max(.01,l);l>.8&&c<.75||l<t&&(t=l,e=r)}return e}var sf=[];function wf(){sf.length=0;for(let n of X.players.values()){if(!n.alive)continue;let e=nt.hStand+(nt.hCrouch-nt.hStand)*(n.duck||0);sf.push({id:n.id,x:n.x,y:n.y,z:n.z,h:e,alive:!0})}return sf}var Qa=new V;function n1(n){if(n.id===ot&&!O.spec)return Cn&&Cn.userData.gun.getWorldPosition(Qa),null;let e=-Math.sin(n.yaw)*Math.cos(n.pitch),t=Math.sin(n.pitch),i=-Math.cos(n.yaw)*Math.cos(n.pitch);return[n.x+e*.75+Math.cos(n.yaw)*.12,n.y+Tn(n)-.18+t*.6,n.z+i*.75-Math.sin(n.yaw)*.12]}var i1=0;X.fireBullets=(n,e,t,i,s)=>{let r=s||je[e],a=X.players.get(n),o=wf(),l=[],c=[],h=new Map,f=!1;for(let d=0;d<r.pellets;d++){let m=i(Math.random),y=vc(X.W,X.nades,n,t[0],t[1],t[2],m[0],m[1],m[2],r,o);l.push(y.end.map(p=>+p.toFixed(2)));for(let p of y.impacts)c.push(p.map(g=>+g.toFixed(2)));if(y.hit){let p=h.get(y.hit.id)||{d:0,part:"leg",pos:y.hit.pos,wb:y.wb};p.d+=y.hit.dmg,q0(y.hit.part)>q0(p.part)&&(p.part=y.hit.part),h.set(y.hit.id,p),y.wb&&(f=!0)}}let u=[...h.entries()].map(([d,m])=>[d,m.pos.map(y=>+y.toFixed(2)),m.part==="head"?1:0]);rm(n,e,t,l,c,u,r),Dn("sh",{i:n,w:e,o:t.map(d=>+d.toFixed(2)),e:l,m:c.slice(0,8),h:u});for(let[d,m]of h){let y={t:d,w:e,part:m.part,d:+m.d.toFixed(1),wb:m.wb};n===ot?Ht("hit",y):Mt()&&It&&It.handle("hit",y,n)}Mt()&&Yt&&a&&Yt.heard(t[0],t[1],t[2],a.team,!r.silent)};var q0=n=>n==="head"?3:n==="chest"?2:n==="stomach"?1:0;function rm(n,e,t,i,s,r,a){a=a||je[e];let o=X.players.get(n),l=n===ot&&!O.spec,c=O.spec===n,h=l||c?null:n1(o||{yaw:0,pitch:0,x:t[0],y:t[1]-1.6,z:t[2]}),f=l||c?[Qa.x,Qa.y,Qa.z]:h;if(a.cat!=="knife"){for(let u of i)(a.pellets>1?Math.random()<.35:i1++%(a.cat==="pistol"?1:2)===0)&&gn.tracer(f,u);!a.silent&&a.cat!=="equip"&&gn.flashLight(f,a.cat==="sniper"?1.5:1),o&&o.model&&(o.flashT=.05),(l||c)&&(O.flashT=.05)}for(let u of s)gn.impact([u[0],u[1],u[2]],[u[3],u[4],u[5]],pc(X.cfg.map).floor?"#b8a07a":"#999");for(let u of r){let d=[u[1][0]-t[0],u[1][1]-t[1],u[1][2]-t[2]],m=Math.hypot(...d)||1;gn.blood(u[1],d.map(y=>y/m),u[2])}a.cat!=="knife"&&Xu(a.cat,l?null:t,!!a.silent,e==="deagle"||e==="r8")}function s1(){let n=Dt(),e=O.pl,t=Kn(),i=je[t];if(!i||O.drawT>0||O.reloadT>0||O.fireT>0||X.phase==="freeze"||X.phase==="over")return;if(i.cat==="knife"){(!O.trig||i.auto)&&am(!1);return}if(!i.auto&&O.trig)return;let s=O.slot==="z"?null:O.slot;if(s&&O.ammo[s][0]<=0){O.trig||(Ka(null,2600,.35),O.trig=!0),nm();return}O.trig=!0,Vi("ls.aim")&&r1();let r={speed:Math.hypot(e.vx,e.vz),onGround:e.onGround,duck:e.duck,scoped:O.scope>0,shots:O.shots},a=Vi("ls.norecoil")?i.spread*.2:Ha(i,r),o=[e.x,e.y+Tn(e),e.z],l=Vi("ls.norecoil")?0:O.pp,c=Vi("ls.norecoil")?0:O.py;X.fireBullets(ot,t,o,u=>wr(e.yaw,e.pitch,l,c,a,u));let[h,f]=_c(i,O.shots,Math.random);O.pp=Math.min(i.kickCap||12,O.pp+h),O.py+=f,O.shots++,O.kick=Math.min(1,O.kick+(i.cat==="sniper"?1:i.cat==="pistol"?.6:.4)),O.fireT=60/i.rpm,s&&!Vi("ls.ammo")&&O.ammo[s][0]--,t==="zeus"&&Ht("drop",{s:"zeus"}),(t==="awp"||t==="ssg08")&&O.scope&&(O.rescope=O.scope,O.scope=0)}function am(n){let e=O.pl,t=je.knife,i=[e.x,e.y+Tn(e),e.z],s={...t,dmg:n?65:40,range:72,rangeMod:1,pellets:1},r=wr(e.yaw,e.pitch,0,0,0,Math.random),a=vc(X.W,X.nades,ot,i[0],i[1],i[2],r[0],r[1],r[2],s,wf());if(a.hit){let o=X.players.get(a.hit.id);o&&Math.cos(Ef(o.yaw,e.yaw))>.5&&(a.hit.dmg=n?180:90)}if(a.hit)Ht("hit",{t:a.hit.id,w:"knife",part:"chest",d:a.hit.dmg}),gn.blood(a.hit.pos,r,!1),Uc(!1);else if(a.impacts.length){let o=a.impacts[0];gn.impact([o[0],o[1],o[2]],[o[3],o[4],o[5]]),Ka(o,1800,.5)}else Zu();O.fireT=n?1:.45,O.kick=1,O.knife2=n,Dn("sh",{i:ot,w:"knife",o:i,e:[a.end],m:[],h:a.hit?[[a.hit.id,a.hit.pos,0]]:[]})}var Ef=(n,e)=>{let t=n-e;for(;t>Math.PI;)t-=Math.PI*2;for(;t<-Math.PI;)t+=Math.PI*2;return t};function r1(){let n=Dt(),e=O.pl,t=[e.x,e.y+Tn(e),e.z],i=null,s=.35;for(let r of X.players.values()){if(!r.alive||r.team===n.team)continue;let a=r.y+(nt.hStand+(nt.hCrouch-nt.hStand)*(r.duck||0))-.12,o=r.x-t[0],l=a-t[1],c=r.z-t[2],h=Math.atan2(-o,-c),f=Math.atan2(l,Math.hypot(o,c)),u=Math.hypot(Ef(h,e.yaw),f-e.pitch);u<s&&Va(X.W,X.nades,t,[r.x,r.y,r.z,1])&&(s=u,i=[h,f])}i&&(e.yaw=i[0],e.pitch=i[1])}function a1(n){let e=Dt(),t=O.pl,i=Kn();if(!je[i]||je[i].cat!=="grenade"||O.nadeCd>0)return;let s=[t.x,t.y+Tn(t),t.z],r={i:ot,ty:i,tm:e.team,o:s.map(o=>+o.toFixed(3)),yaw:+t.yaw.toFixed(4),pitch:+t.pitch.toFixed(4),v:[+t.vx.toFixed(3),+t.vz.toFixed(3)],pw:n};om(r),Dn("nd",r),Ht("nade",{type:i}),O.nadeCd=.6,O.kick=.8,Zu();let a=e.inv.g.indexOf(i);a>=0&&(e.inv.g=e.inv.g.slice(),e.inv.g.splice(a,1)),setTimeout(()=>{fs("g")?Nn("g",!0):Nn(bf(),!0)},350)}var no=new Map;function om(n){let e=i0(n.ty,n.i,n.tm,n.o[0],n.o[1],n.o[2],n.yaw,n.pitch,n.v[0],n.v[1],n.pw);e.key=Math.random(),X.nades.push(e);let t=Ya(n.ty);t.scale.setScalar(1.6),mn.add(t),no.set(e,t)}var rf=[];function o1(n){rf.length=0;for(let e of X.nades)s0(X.W,e,n,rf);for(let e of rf)l1(e);for(let e=X.nades.length-1;e>=0;e--){let t=X.nades[e],i=no.get(t);if(i&&(t.state==="fly"||t.type==="smoke"||t.type==="decoy"?(i.position.set(t.x,t.y,t.z),i.rotation.x+=n*(t.rest?0:9),i.visible=t.state!=="done"):i.visible=!1),t.type==="decoy"&&t.state==="active"&&(t.dc=(t.dc||0)-n,t.dc<=0)){t.dc=.25+Math.random()*1.2;let s=1+Math.floor(Math.random()*3);for(let r=0;r<s;r++)setTimeout(()=>Xu("rifle",[t.x,t.y,t.z]),r*110);Mt()&&Yt&&Yt.heard(t.x,t.y,t.z,t.team,!0)}(t.type==="molotov"||t.type==="incendiary")&&t.state==="active"&&!t.air&&(t.ft=(t.ft||0)-n,t.ft<=0&&(t.ft=.6,L0([t.x,t.y,t.z]))),t.state==="done"&&(X.nades.splice(e,1),i&&(mn.remove(i),no.delete(t)))}}function l1(n){let e=n.g,t=[e.x,e.y,e.z];if(n.type==="bounce"){N0(t);return}if(n.type==="det")if(e.type==="he")gn.explosion(t,!1),Yu(t,!1),cm(t,12,.5),Mt()&&It&&It.heBlast(e,(i,s)=>{let r=Math.hypot(s.x-i.x,s.y+1-i.y,s.z-i.z),a=ls(X.W,i.x,i.y+.15,i.z,(s.x-i.x)/r,(s.y+1-i.y-.15)/r,(s.z-i.z)/r,r);return!a||a.t>=r-.2});else if(e.type==="flash"){if(gn.flashPop(t),C0(t),c1(e),Mt()&&Yt){for(let i of X.players.values())if(i.bot&&i.alive){let s=lm(e,i.x,i.y+Tn(i),i.z,i.yaw,i.pitch);s>0&&Yt.flash(i,s)}}}else if(e.type==="smoke"){gn.smoke(e,X.W),$u(t);for(let i of X.nades)(i.type==="molotov"||i.type==="incendiary")&&i.state==="active"&&Math.hypot(i.x-e.x,i.z-e.z)<Pt.smokeR+1&&(i.life=Math.min(i.life,.3))}else if(e.type==="molotov"||e.type==="incendiary"){if(e.air){gn.explosion(t,!1);return}if(X.nades.some(s=>s.type==="smoke"&&s.state==="active"&&Math.hypot(s.x-e.x,s.z-e.z)<Pt.smokeR)){e.life=.05,$u(t);return}gn.fire(e,X.W,Sr),I0(t)}else e.type==="decoy"&&(e.dc=.5)}function lm(n,e,t,i,s,r){let a=n.x-e,o=n.y-t,l=n.z-i,c=Math.hypot(a,o,l);if(c>40)return 0;let h=ls(X.W,e,t,i,a/c,o/c,l/c,c);if(h&&h.t<c-.25)return 0;let f=-Math.sin(s)*Math.cos(r),u=Math.sin(r),d=-Math.cos(s)*Math.cos(r),m=(a*f+o*u+l*d)/c,y=m>.6?1:m>0?.35+m:.18,p=c<10?1:Math.max(0,1-(c-10)/30);return 4.9*y*p}function c1(n){let e=Dt();if(!e||!e.alive||!O.pl)return;let t=O.pl,i=lm(n,t.x,t.y+Tn(t),t.z,t.yaw,t.pitch);i>.15&&(O.blind=Math.max(O.blind,i),O.blindMax=Math.max(O.blind,1),P0(i))}function cm(n,e,t){if(!O.pl)return;let i=Math.hypot(n[0]-O.pl.x,n[2]-O.pl.z);i<e&&(O.shake=Math.max(O.shake,t*(1-i/e)))}function Af(n,e,t,i){switch(n){case"st":h1(e);break;case"rs":u1(e);break;case"ev":d1(e);break;case"p":{let s=X.players.get(t);s&&t!==ot&&Y0(s,e);break}case"pb":if(!Mt())for(let s of e){let r=X.players.get(s[0]);r&&Y0(r,s.slice(1))}break;case"sh":if(e.i!==ot){let s=X.players.get(e.i);rm(e.i,e.w,e.o,e.e,e.m||[],e.h||[]),e.w==="knife"&&e.h&&e.h.length&&Uc(!1),Mt()&&Yt&&s&&Yt.heard(e.o[0],e.o[1],e.o[2],s.team,!(je[e.w]||{}).silent)}break;case"nd":e.i!==ot&&om(e);break}}function Y0(n,e){n.nx=e[0],n.ny=e[1],n.nz=e[2],n.nyaw=e[3],n.npitch=e[4],n.duck=e[5],n.wpn=e[6],n.flags=e[7]|0,n.vx=e[8]||0,n.vz=e[9]||0,n.netT=X.time,n.scoped=!!(n.flags&1),n.onGround=!(n.flags&2),(n.x===void 0||Math.hypot(n.x-n.nx,n.z-n.nz)>4)&&(n.x=n.nx,n.y=n.ny,n.z=n.nz,n.yaw=n.nyaw,n.pitch=n.npitch)}function h1(n){let e=X.phase;X.phase=n.ph,X.timeLeft=n.tl,X.round=n.r,X.score=n.sc,X.half=n.hf;let t=n.b;if(Object.assign(X.bomb,{state:t.s,carrier:t.c,x:t.x,y:t.y,z:t.z,t:t.t,site:t.site}),!Mt()){let r=new Set;for(let a of n.dr)r.add(a[0]),X.drops.set(a[0],{id:a[0],w:a[1],x:a[2],y:a[3],z:a[4],ammo:a[5]});for(let a of[...X.drops.keys()])r.has(a)||X.drops.delete(a)}let i=new Set;for(let r of n.p){let[a,o,l,c,h,f,u,d,m,y,p,g,b,w,v,_,T,x,S]=r;i.add(a);let N=X.players.get(a);N||(N={id:a,x:0,y:0,z:0,yaw:0,pitch:0,duck:0,h:nt.hStand},X.players.set(a,N)),Mt()||Object.assign(N,{name:o,bot:!!l,grp:c,team:h,hp:f,ar:u,helm:!!d,money:m,alive:!!y,k:p,d:g,a:b,mvp:w,inv:v,god:!!_,skT:T,skCT:x,fin:S})}if(!Mt())for(let r of[...X.players.keys()])i.has(r)||X.players.delete(r);let s=Dt();s&&(O.lastMoney!==null&&s.money>O.lastMoney&&We.moneyDelta(s.money-O.lastMoney),O.lastMoney=s.money,Sf()),Un&&Fc(s,us)}function u1(n){gn.clearSmokes(),gn.clearDecals();for(let t of no.values())mn.remove(t);no.clear(),X.nades.length=0,Vc.clear(),We.banner(null);for(let t of X.players.values())t.deadT=0,t.alive=!0;let e=n.pos[ot];if(e&&(O.pl=mc(e[0],e[1],e[2],e[3])),Mt()&&Yt){for(let t of X.players.values())t.bot&&n.pos[t.id]&&Yt.place(t,n.pos[t.id]);Yt.roundStart()}for(let[t,i]of Object.entries(n.pos)){let s=X.players.get(t);s&&(s.x=s.nx=i[0],s.y=s.ny=i[1],s.z=s.nz=i[2],s.yaw=s.nyaw=i[3],s.pitch=0)}Object.assign(O,{deadT:0,spec:null,blind:0,plantT:0,defusing:!1,defT:0,scope:0,reloadT:0,drawT:.4,shots:0,pp:0,py:0,voidSent:!1,nadeHold:0}),O.invV=-1,O.ammoW={p:null,s:null},Sf(),Nn(bf(),!0),(n.round===1||X.round===1)&&We.center("Ronda 1 \u2014 \xA1suerte!"),Qu()}function f1(n){let e=X.players.get(n);return e?e.name:"\u2014"}function d1(n){let e=Dt();switch(n.t){case"go":We.center(e&&e.team==="T"?"\xA1Vamos! Plant\xE1 la bomba":"\xA1Vamos! Defend\xE9 los sitios",1800),Qu();break;case"hurt":{if(n.v===ot){A0(),eo=Math.min(1,eo+n.n/60);let t=X.players.get(n.a);if(t&&t.id!==ot&&O.pl){let i=Math.atan2(-(t.x-O.pl.x),-(t.z-O.pl.z))-O.pl.yaw;We.dmgDir(-i)}O.pl&&n.w!=="world"&&n.w!=="molotov"&&n.w!=="incendiary"&&(O.pl.vx*=.45,O.pl.vz*=.45,O.punchHit=1.2)}n.a===ot&&n.v!==ot&&(We.hit(n.hs),Uc(n.hs,n.helm));break}case"kill":{let t=n.k?X.players.get(n.k):null,i=X.players.get(n.v);i&&(i.alive=!1,i.deadT=.001),i&&We.feed(t,i,n.w,n.hs,n.wb,n.k===ot||n.v===ot),n.k===ot&&n.v!==ot&&R0(),n.v===ot&&(O.deadT=.001,O.scope=0,O.defusing=!1,We.progress(null));break}case"end":{let t=e?e.team:"T",i=n.win===t,s={elim:"eliminaron al otro equipo",bomb:"la bomba explot\xF3",defuse:"desactivaron la bomba",time:"se termin\xF3 el tiempo"};We.banner(n.win,n.win==="T"?"GANAN LOS TERRORISTAS":"GANAN LOS CONTRATERRORISTAS","Porque "+s[n.reason]+(n.mvp?" \xB7 MVP: "+f1(n.mvp):"")),O0(i);break}case"over":{let t=n.wg,i=Dt(),s=i?i.grp:0,r=t<0?"EMPATE":t===s?"\xA1VICTORIA!":"DERROTA";We.banner(t<0?"":Ds(t,X.half),r,`${n.score[s]} \u2013 ${n.score[1-s]} \xB7 Volviendo a la sala en ${Ot.over} s`);let a=Ot.over;clearInterval(kc),kc=setInterval(()=>{if(a--,a<=0){clearInterval(kc);return}We.banner(t<0?"":Ds(t,X.half),r,`${n.score[s]} \u2013 ${n.score[1-s]} \xB7 Volviendo a la sala en ${a} s`)},1e3);break}case"half":We.center("Cambio de lado \u2014 empieza la segunda mitad",4e3);break;case"plant":We.center("La bomba fue plantada en el sitio "+n.site,3e3),Ku([X.bomb.x,X.bomb.y,X.bomb.z],!0),X.bomb.seen=!0;break;case"defst":ju([X.bomb.x,X.bomb.y,X.bomb.z]);break;case"defused":We.center("Desactivaron la bomba",3e3);break;case"boom":gn.explosion([n.x,n.y,n.z],!0),Yu([n.x,n.y,n.z],!0),cm([n.x,n.y,n.z],60,1.2);break;case"bombdrop":e&&e.team==="T"&&We.center("Se cay\xF3 la bomba",1600);break;case"bombpick":n.p===ot&&(We.center("Agarraste la bomba (5)",1600),F0());break;case"deny":We.center(n.why,1500),U0();break;case"bought":D0();break}}var kc=0,eo=0,Un=!1,us=-1,Zn=null,af={};function hm(n){if(af[n]){let e=document.createElement("canvas");return e.width=192,e.height=48,e.getContext("2d").drawImage(af[n],0,0),e}try{Zn||(Zn={r:new Ua({antialias:!0,alpha:!0,preserveDrawingBuffer:!0}),s:new Pi,c:new Es(-.62,.62,.155,-.155,.01,10)},Zn.r.setSize(192,48),Zn.s.add(new di("#fff","#666",2.2)),Zn.c.position.set(3,0,0),Zn.c.lookAt(0,0,0));let e=Er(n);e.computeBoundingBox();let t=e.boundingBox,i=new Ke(e,$n),s=Math.max(.12,t.max.z-t.min.z,(t.max.y-t.min.y)*4);i.scale.setScalar(1.1/s),i.position.set(0,-(t.max.y+t.min.y)/2/s*1.1,-(t.max.z+t.min.z)/2/s*1.1),Zn.s.add(i),Zn.r.render(Zn.s,Zn.c),Zn.s.remove(i);let r=document.createElement("canvas");return r.width=192,r.height=48,r.getContext("2d").drawImage(Zn.r.domElement,0,0),af[n]=r,hm(n)}catch{return null}}var $0=null;function qc(n){let e=Dt();if(!e)return;if(n!==void 0?n:!Un){if(!e.alive)return;if(!mf()){We.center(X.phase==="live"?"Se termin\xF3 el tiempo de compra":"No pod\xE9s comprar ahora",1400);return}$0!==e.team&&($0=e.team,V0(e.team,hm,i=>Ht("buy",{i}),i=>{tn("buyInfo").textContent=G0(i)})),us=-1,Fc(e,us),Un=!0,tn("buy").hidden=!1,document.exitPointerLock&&document.exitPointerLock()}else Un=!1,tn("buy").hidden=!0,Gi||to();Wc()}function mf(){let n=Dt();if(!n||!n.alive||!O.pl||!(X.phase==="freeze"||X.phase==="live"&&Ot.live-X.timeLeft<Ot.buy&&X.bomb.state!=="planted"))return!1;let t=X.spawns?X.spawns[n.team]:null;return!t||Math.hypot(O.pl.x-t.cx,O.pl.z-t.cz)<22||!!(_i(X.W,O.pl.x,O.pl.z)&(n.team==="T"?16:32))}function p1(n){if(n.code==="KeyB"||n.code==="Escape"){qc(!1);return}let e=parseInt(n.key,10);if(!(e>=1&&e<=9))return;let t=Dt();if(us<0)e<=5&&(us=e-1);else{let i=xc[us].items[t.team];i[e-1]&&Ht("buy",{i:i[e-1]}),us=-1}Fc(t,us)}tn("buy").addEventListener("mousedown",n=>n.stopPropagation());function m1(){Wt=new Ua({antialias:!1,powerPreference:"high-performance"}),Wt.setPixelRatio(Math.min(devicePixelRatio,Gi?1:1.5)),Wt.setSize(innerWidth,innerHeight),Wt.autoClear=!1,Wt.toneMapping=Ta,Wt.toneMappingExposure=1.05,Wt.shadowMap.enabled=Q0>0,Wt.shadowMap.type=xl,Wt.shadowMap.autoUpdate=!1,tn("view").appendChild(Wt.domElement),mn=new Pi,Jt=new jt(74,innerWidth/innerHeight,.05,1500),ja=new Pi,Pr=new jt(66,innerWidth/innerHeight,.01,10),ja.add(new di("#ffffff","#555",1.3));let n=new pi("#fff",1.1);n.position.set(1,2,1),ja.add(n),Cn=v0(),ja.add(Cn);let e=g1();Cn.userData.flash=e,addEventListener("resize",()=>{Wt.setSize(innerWidth,innerHeight),Jt.aspect=Pr.aspect=innerWidth/innerHeight,Jt.updateProjectionMatrix(),Pr.updateProjectionMatrix()}),Wt.domElement.addEventListener("click",()=>{X.phase!=="lobby"&&!Ir&&!Gi&&!Un&&to()}),tn("clickPlay").addEventListener("click",()=>{Za(),to()})}function g1(){let n=new Ke(new Ss(1,0),new ln({color:"#ffd27a",transparent:!0,opacity:.95,depthWrite:!1}));return n.scale.set(.04,.04,.12),n.visible=!1,n.renderOrder=11,Cn.add(n),n}async function x1(n){tn("loading").hidden=!1,tn("loadMsg").textContent="Cargando "+(df.find(s=>s.id===n)?.name||n)+"\u2026",await new Promise(s=>setTimeout(s,30));let e=Hc[n]||(Hc[n]=await yu(n)),t=e.W||(e.W=_u(e.info,e.layers));for(X.W=t,X.info=e.info,X.nav=e.nav||(e.nav=t0(t)),X.mapName=df.find(s=>s.id===n)?.name||n;mn.children.length;)mn.remove(mn.children[0]);Oc&&Oc.traverse(s=>{s.geometry&&s.geometry.dispose(),s.material&&s.material.dispose()}),Oc=Kp(t,n).mesh,mn.add(Oc),Jp(mn,t,n,Q0),Wt.shadowMap.needsUpdate=!0,gn=f0(mn),pf=nf(t);for(let s of X.players.values())s.model&&(s.model=null,s.tag=null);for(let s of Cr.values())mn.remove(s);Cr.clear(),Hi=null,_f=!0,tn("loading").hidden=!0}function y1(n,e){let t=document.createElement("canvas");t.width=256,t.height=48;let i=t.getContext("2d");i.font="bold 30px Rajdhani, sans-serif",i.textAlign="center",i.fillStyle="rgba(0,0,0,.5)";let s=Math.min(250,i.measureText(n).width+20);i.fillRect(128-s/2,4,s,40),i.fillStyle=e==="T"?"#f0c060":"#8ab8ff",i.fillText(n,128,35);let r=new ia(new hr({map:new Li(t),depthTest:!1,transparent:!0,sizeAttenuation:!1}));return r.scale.set(.1,.019,1),r.renderOrder=20,r}var _1=new ln({color:"#ff3030",wireframe:!0,depthTest:!1,transparent:!0,opacity:.8}),um=new dn(.7,1.8,.7);um.translate(0,.9,0);function v1(n){let e=Dt();for(let t of X.players.values()){let i=t.id===ot,s=t.team+zc(t);if(!t.model||t.modelTeam!==s){t.model&&mn.remove(t.model),t.model=Lc(t.team,zc(t)),t.modelTeam=s,mn.add(t.model),t.tag=null;let l=new Ke(um,_1);l.renderOrder=19,l.visible=!1,t.model.add(l),t.esp=l;let c=gn.muzzleMesh();t.model.userData.gun.add(c),t.mflash=c}let r=t.model;if(!i&&!(Mt()&&t.bot)&&t.nx!==void 0){let l=Math.min(1,n*14);t.x+=(t.nx-t.x)*l+(t.vx||0)*n*.5,t.y+=(t.ny-t.y)*l,t.z+=(t.nz-t.z)*l+(t.vz||0)*n*.5,isFinite(t.x)||(t.x=t.nx,t.y=t.ny,t.z=t.nz),t.yaw+=Ef(t.nyaw||0,t.yaw||0)*l,t.pitch=(t.pitch||0)+((t.npitch||0)-(t.pitch||0))*l}let a=i&&!O.spec&&(e&&e.alive||O.deadT<.01)||O.spec===t.id;if(r.visible=!a&&(t.alive||(t.deadT||0)>0),!r.visible)continue;r.position.set(t.x,t.y,t.z),r.rotation.y=t.yaw,t.alive||(t.deadT=Math.min(3,(t.deadT||0)+n*2.5));let o=Math.hypot(t.vx||0,t.vz||0);if(Nc(r,t.alive?t.wpn||"knife":null,t.fin|0),t.mflash&&t.wpn){let l=qa(t.wpn);t.mflash.position.set(0,l.muzzle[1]*1.12,-l.muzzle[0]*1.12-.05),t.mflash.parent!==r.userData.gun&&r.userData.gun.add(t.mflash)}Dc(r,{speed:t.alive?o:0,duck:t.duck||0,pitch:t.pitch||0,onGround:t.onGround!==!1,dead:t.alive?0:t.deadT},n),t.mflash&&(t.flashT=(t.flashT||0)-n,t.mflash.visible=t.flashT>0,t.mflash.visible&&(t.mflash.rotation.z=Math.random()*3)),e&&t.team===e.team&&!i&&t.alive?(t.tag||(t.tag=y1(t.name,t.team),r.add(t.tag)),t.tag.visible=!0,t.tag.position.y=2.15-(t.duck||0)*.45):t.tag&&(t.tag.visible=!1),t.esp.visible=!!(Vi("ls.wall")&&e&&t.team!==e.team&&t.alive),!i&&t.alive&&o>3.6&&t.onGround!==!1&&(t.stepT=(t.stepT||0)-n,t.stepT<=0&&(t.stepT=.34,qu([t.x,t.y,t.z])))}}var Cr=new Map,Hi=null,Ja=null,Bc=0;function M1(n){for(let[t,i]of X.drops){let s=Cr.get(t);s||(s=Ya(i.w),s.scale.setScalar(1.2),s.rotation.set(0,Math.random()*6,Math.PI/2*.98),mn.add(s),Cr.set(t,s)),s.position.set(i.x,i.y+.04,i.z)}for(let[t,i]of Cr)X.drops.has(t)||(mn.remove(i),Cr.delete(t));let e=X.bomb;if(Hi||(Hi=Ya("c4"),Hi.scale.setScalar(1.6),mn.add(Hi),Ja=new Ke(new Ts(.03,6,4),new ln({color:"#ff2020"})),Ja.position.set(-.05,.05,.03),Hi.add(Ja)),Hi.visible=e.state==="planted"||e.state==="dropped"||e.state==="defused",Hi.visible&&Hi.position.set(e.x,e.y+.05,e.z),e.state==="planted"){let t=Math.max(0,e.t),i=Math.max(.12,Math.min(1,t/35));Bc-=n,Ja.visible=Bc>i*.6,Bc<=0&&(Bc=i,Ku([e.x,e.y,e.z],t<10))}else Ja.visible=!1}var of=0,lf=0;function b1(n){let e=Dt();if(!e||!O.pl)return;let t=O.pl;if(Sf(),!e.alive){O.deadT+=n;return}O.drawT-=n,O.fireT-=n,O.nadeCd-=n,O.pickCd-=n,O.inspect&&(O.inspect=Math.max(0,O.inspect-n)),O.reloadT>0&&(O.reloadT-=n,O.reloadT<=0&&QM()),O.rescope&&O.fireT<=0&&((Kn()==="awp"||Kn()==="ssg08")&&(O.scope=O.rescope),O.rescope=0);let i=Kn(),s=je[i]||je.knife,r=X.phase==="freeze"||O.plantT>0||O.defusing||Un&&!1,a=0,o=0;Un||(Xt.has("KeyW")&&(a+=1),Xt.has("KeyS")&&(a-=1),Xt.has("KeyD")&&(o+=1),Xt.has("KeyA")&&(o-=1)),(hn.mx||hn.mz)&&(a=-hn.mz,o=hn.mx);let l={f:r?0:a,s:r?0:o,jump:!r&&Xt.has("Space"),crouch:Xt.has("KeyC")||Xt.has("ControlLeft")||Xt.has("ControlRight"),walk:Xt.has("ShiftLeft")||Xt.has("ShiftRight")},c=(s.speed||250)*W0*(O.scope&&s.cat==="sniper"?.5:O.scope?.7:1);(i==="c4"||je[i]?.cat==="grenade")&&(c=245*W0),Vi("ls.speed")&&(c*=1.6);let h=n,f=0,u=t.onGround;for(;h>1e-6;){let g=Math.min(h,.008333333333333333),b=gc(X.W,t,l,g,c);b&&(f=b),h-=g}for(let g of X.players.values()){if(g.id===ot||!g.alive||Math.abs(g.y-t.y)>1.6)continue;let b=t.x-g.x,w=t.z-g.z,v=Math.hypot(b,w);if(v<.62&&v>1e-4){let _=(.62-v)/v,T=t.x+b*_,x=t.z+w*_;Oi(X.W,T,x,t.y,t.h,nt.r)||(t.x=T,t.z=x)}}if(f){let g=Eu(f);g>0&&Ht("fall",{d:g}),w0(null)}t.y<-20&&!O.voidSent&&(O.voidSent=!0,Ht("fall",{d:999}));let d=Math.hypot(t.vx,t.vz);if(t.onGround&&d>3.6&&(O.stepT-=n,O.stepT<=0&&(O.stepT=.36,qu(null,.45))),O.bob+=n*d*1.4*(t.onGround?1:0),e.x=t.x,e.y=t.y,e.z=t.z,e.yaw=t.yaw,e.pitch=t.pitch,e.duck=t.duck,e.vx=t.vx,e.vz=t.vz,e.onGround=t.onGround,e.wpn=i,e.h=t.h,e.scoped=O.scope>0,O.fireT<-.06&&(O.pp=Math.max(0,O.pp-(s.recover||9)*n*(1+O.pp*.15)),O.py*=Math.exp(-n*7),O.pp<.4&&(O.shots=0)),Pn||(O.trig=!1),(je[i]||{}).cat==="grenade")Pn&&!O.nadeHold&&O.drawT<=0&&(O.nadeHold=1),O.nadeHold&&!Pn&&!so&&X.phase!=="freeze"&&(a1(Pn?.6:O.nadeHold===.3?.3:1),O.nadeHold=0);else if(i==="c4"){let g=_i(X.W,t.x,t.z)&12;if(Pn&&g&&t.onGround&&X.phase==="live"&&O.drawT<=0){O.plantT||Ju();let b=O.plantT;O.plantT+=n,Math.floor(b*4)!==Math.floor(O.plantT*4)&&Ju(),We.progress("Plantando la bomba\u2026",O.plantT/Ot.plant),O.plantT>=Ot.plant&&(O.plantT=0,We.progress(null),Ht("plant",{x:t.x,y:t.y,z:t.z}))}else O.plantT&&We.progress(null),O.plantT=0,Pn&&!g&&!O.trig&&(We.center("Ten\xE9s que estar en un sitio de bomba (A o B)",1300),O.trig=!0)}else Pn&&!Un&&s1();if(O.defusing){let g=X.bomb;if(g.state!=="planted"||!Xt.has("KeyE")||Math.hypot(t.x-g.x,t.z-g.z)>1.9)Xc();else{O.defT+=n;let b=e.inv.kit?Ot.kit:Ot.defuse;We.progress(e.inv.kit?"Desactivando (con kit)\u2026":"Desactivando\u2026",O.defT/b),O.defT>=b&&(Ht("defok",{}),O.defusing=!1,We.progress(null))}}else O.plantT||We.progress(null);if(O.pickCd<=0){for(let b of X.drops.values())if(!(Math.hypot(b.x-t.x,b.z-t.z)>.9||Math.abs(b.y-t.y)>1.2)&&(b.w==="defuser"?e.team==="CT"&&!e.inv.kit:!fs(Ns(b.w)===1?"p":"s"))){Ht("take",{id:b.id}),O.pickCd=.6;break}let g=X.bomb;e.team==="T"&&g.state==="dropped"&&Math.hypot(g.x-t.x,g.z-t.z)<1&&Math.abs(g.y-t.y)<1.4&&(Ht("take",{id:"c4"}),O.pickCd=.8)}let y="",p=sm();p&&(y="E \xB7 agarrar "+Fs(p.w)),e.team==="CT"&&X.bomb.state==="planted"&&Math.hypot(t.x-X.bomb.x,t.z-X.bomb.z)<1.7&&!O.defusing&&(y="Manten\xE9 E para desactivar"),i==="c4"&&_i(X.W,t.x,t.z)&12&&!O.plantT&&X.phase==="live"&&(y="Manten\xE9 clic para plantar"),We.hint(y),of-=n,of<=0&&(of=.05,Dn("p",[+t.x.toFixed(2),+t.y.toFixed(2),+t.z.toFixed(2),+t.yaw.toFixed(3),+t.pitch.toFixed(3),+t.duck.toFixed(2),i,(O.scope?1:0)|(t.onGround?0:2),+t.vx.toFixed(2),+t.vz.toFixed(2)],{volatile:!0}))}function S1(n){if(lf-=n,lf>0)return;lf=.05;let e=[];for(let t of X.players.values())t.bot&&t.pl&&e.push([t.id,+t.x.toFixed(2),+t.y.toFixed(2),+t.z.toFixed(2),+t.yaw.toFixed(3),+t.pitch.toFixed(3),+(t.duck||0).toFixed(2),t.wpn||"knife",(t.scoped?1:0)|(t.onGround?0:2),+(t.vx||0).toFixed(2),+(t.vz||0).toFixed(2)]);e.length&&Dn("pb",e,{volatile:!0})}var Z0=new ni(0,0,0,"YXZ"),hs=[];function Rf(n){let e=Dt();if(!e)return;if(hs=[...X.players.values()].filter(i=>i.alive&&i.team===e.team),hs.length||(hs=[...X.players.values()].filter(i=>i.alive)),!hs.length){O.spec=null;return}let t=hs.findIndex(i=>i.id===O.spec);O.spec=hs[(t+n+hs.length)%hs.length].id}function T1(n){let e=Dt();if(!e||!O.pl)return;let t,i,s,r,a,o=Kn(),l=e.team,c=O.scope,h=zc(e),f=e.fin|0;if(e.alive){let b=O.pl;t=b.x,i=b.y+Tn(b),s=b.z,r=b.yaw-O.py*.5*X0,a=b.pitch+O.pp*.5*X0+(O.punchHit||0)*.02,O.spec=null}else if(O.deadT<2.2||!X.players.size){let b=O.pl,w=Math.min(1,O.deadT/1.2);r=b.yaw+O.deadT*.3,a=-.35*w+b.pitch*(1-w),t=b.x+Math.sin(r)*2.6*w,s=b.z+Math.cos(r)*2.6*w,i=b.y+Tn(b)*(1-w)+1.6*w,o=null}else{let b=O.spec&&X.players.get(O.spec);(!b||!b.alive)&&Rf(1);let w=O.spec&&X.players.get(O.spec);if(w)t=w.x,i=w.y+Tn({duck:w.duck||0}),s=w.z,r=w.yaw,a=w.pitch,o=w.wpn||"knife",l=w.team,c=w.scoped?1:0,h=zc(w),f=w.fin|0;else{let v=O.pl;t=v.x,i=v.y+3,s=v.z,r=v.yaw,a=-.5,o=null}}O.punchHit=Math.max(0,(O.punchHit||0)-n*6),O.shake>0&&(O.shake=Math.max(0,O.shake-n*1.5),t+=(Math.random()-.5)*O.shake*.12,i+=(Math.random()-.5)*O.shake*.12),Jt.position.set(t,i,s),Z0.set(a,r,0),Jt.quaternion.setFromEuler(Z0);let u=je[o],m=74/(c&&u&&u.scope?u.scope[Math.max(0,c-1)]:1);Math.abs(Jt.fov-m)>.01&&(Jt.fov=m,Jt.updateProjectionMatrix()),T0(t,i,s,r);let y=c&&u&&u.cat==="sniper";if(Cn.visible=!!o&&!y&&(e.alive||O.spec),Cn.visible){M0(Cn,o,l,h,f);let b=Cn.userData,w=b.base||[.13,-.14,-.36];O.sway[0]+=(O.swayT[0]-O.sway[0])*Math.min(1,n*10),O.sway[1]+=(O.swayT[1]-O.sway[1])*Math.min(1,n*10),O.swayT[0]*=Math.exp(-n*10),O.swayT[1]*=Math.exp(-n*10),O.kick=Math.max(0,O.kick-n*7);let v=e.alive?O.bob:X.time*2,_=e.alive?Math.min(1,Math.hypot(O.pl.vx,O.pl.vz)/5):.3,T=w[0]+Math.cos(v)*.008*_+O.sway[0]*.02,x=w[1]+Math.abs(Math.sin(v))*.01*_-O.sway[1]*.02,S=w[2]+O.kick*.045,N=O.kick*.12,M=0,E=0;if(e.alive&&O.reloadT>0){let C=je[Kn()],U=1-O.reloadT/C.reload,F=Math.sin(Math.min(1,U)*Math.PI);N-=F*.6,x-=F*.06,E+=F*.4}if(e.alive&&O.drawT>0){let C=Math.max(0,O.drawT)/.6;x-=C*.25,N-=C*.8}if(e.alive&&O.inspect){let C=Math.sin(Math.min(1,O.inspect/1.6)*Math.PI);M+=C*1.1,E+=C*.5,T-=C*.08}if(o==="knife"&&e.alive&&O.fireT>0){let C=O.fireT/(O.knife2?1:.45);M-=Math.sin(C*Math.PI)*.9,S-=Math.sin(C*Math.PI)*.08}(O.plantT>0||O.defusing)&&(x-=.08,N-=.7);let R=b.rot||[0,0,0];b.hold.position.set(T,x,S),b.hold.rotation.set(N+R[0],M+R[1],E+R[2]),b0(Cn),Cn.position.copy(Jt.position),Cn.quaternion.copy(Jt.quaternion),Pr.position.copy(Jt.position),Pr.quaternion.copy(Jt.quaternion);let I=b.flash;O.flashT=(O.flashT||0)-n;let A=qa(o);I&&(I.visible=O.flashT>0&&u&&!u.silent&&u.cat!=="knife",I.visible&&(I.position.set(0,A.muzzle[1],-A.muzzle[0]-.05).applyMatrix4(b.hold.matrix),I.quaternion.setFromEuler(b.hold.rotation),I.rotateZ(Math.random()*3))),b.gun.updateWorldMatrix(!0,!1),Qa.set(0,A.muzzle[1],-A.muzzle[0]).applyMatrix4(b.gun.matrixWorld)}tn("scope").hidden=!y;let p=!y&&(e.alive||O.spec)&&!(u&&u.cat==="sniper"),g=4;e.alive&&u&&u.dmg&&(g=3+Ha(u,{speed:Math.hypot(O.pl.vx,O.pl.vz),onGround:O.pl.onGround,duck:O.pl.duck,scoped:O.scope>0,shots:O.shots})*900),We.crosshair(Math.min(60,g),p)}var cf=0,hf=0;function w1(n){let e=Dt();if(!e||(eo=Math.max(0,eo-n*1.4),We.el.hurt.style.opacity=eo.toFixed(2),O.blind=Math.max(0,O.blind-n),We.el.flash.style.opacity=Math.min(1,O.blind/1.6).toFixed(3),cf-=n,cf>0))return;cf=.05;let t=O.spec&&!e.alive?X.players.get(O.spec):e;We.money(e.money),We.vitals(t?t.hp:0,t?t.ar:0,t&&t.helm);let i=e.alive?Kn():t&&t.wpn,s=je[i],r=O.slot,a=r==="p"||r==="s"?O.ammo[r]:null;We.ammo(i?Fs(i):"",a?a[0]:0,a?a[1]:0,e.alive&&!!a&&!!s&&!!s.mag);let o=[];e.alive&&(e.inv.p&&o.push({key:1,slot:"p",id:e.inv.p,name:Fs(e.inv.p)}),e.inv.s&&o.push({key:2,slot:"s",id:e.inv.s,name:Fs(e.inv.s)}),o.push({key:3,slot:"k",id:"knife",name:"Cuchillo"}),e.inv.zeus&&o.push({key:3,slot:"z",id:"zeus",name:"Zeus x27"}),e.inv.g.length&&o.push({key:4,slot:"g",id:e.inv.g.join(),name:e.inv.g.map(Fs).join(" \xB7 ")}),e.inv.c4&&o.push({key:5,slot:"c4",id:"c4",name:"C4"}),e.inv.kit&&o.push({key:"",slot:"kit",id:"kit",name:"Kit de desactivaci\xF3n"})),We.slots(o,O.slot);let l=X.bomb.state==="planted";We.clock(X.timeLeft,l||X.phase==="live"&&X.timeLeft<10,l);let c=X.score[X.half],h=X.score[1-X.half],f=0,u=0,d=0,m=0;for(let g of X.players.values())g.team==="T"?(u++,g.alive&&f++):(m++,g.alive&&d++);if(We.score(c,h,f,u,d,m),We.el.buyHint.hidden=!(mf()&&!Un),Un)if(!mf())qc(!1);else{let g=tn("buyTime");g.textContent=X.phase==="freeze"?"Tiempo de compra: "+Math.ceil(X.timeLeft+Ot.buy)+" s":"Tiempo de compra: "+Math.max(0,Math.ceil(Ot.buy-(Ot.live-X.timeLeft)))+" s"}let y=We.el.spec;!e.alive&&O.deadT>2.2&&t&&t!==e?(y.hidden=!1,y.innerHTML="Mirando a <b>"+t.name.replace(/</g,"")+"</b><small>Clic o Espacio: siguiente</small>"):y.hidden=!0,X.phase==="freeze"&&e.alive?We.center("La ronda empieza en "+Math.ceil(X.timeLeft)+" \xB7 B para comprar",0):X.phase==="freeze"||We.el.centerMsg.textContent.startsWith("La ronda empieza")&&We.center("",1);let p=Xt.has("Tab")||X.phase==="over";if(We.el.board.hidden=!p,p&&(We.el.board.innerHTML=H0(X,ot)),hf-=.05,hf<=0&&pf){hf=.1;let g=t&&t!==e?{x:t.x,z:t.z,yaw:t.yaw}:{x:O.pl.x,z:O.pl.z,yaw:O.pl.yaw},b=[],w=[O.pl.x,O.pl.y+1.6,O.pl.z];for(let _ of X.players.values())_.alive&&(_.team===e.team?b.push({x:_.x,z:_.z,col:_.team==="T"?"#f0c060":"#8ab8ff",me:_.id===ot}):e.alive&&_.seenT>X.time-.6&&b.push({x:_.x,z:_.z,col:"#ff4040"}));if(z0(tn("radar"),pf,X.W,g,b,{s:X.bomb.state,x:X.bomb.x,z:X.bomb.z,seen:!0},e.team),e.alive)for(let _ of X.players.values())_.alive&&_.team!==e.team&&Math.hypot(_.x-O.pl.x,_.z-O.pl.z)<60&&Va(X.W,X.nades,w,[_.x,_.y,_.z,1])&&(_.seenT=X.time);let v=_i(X.W,g.x,g.z);We.el.zoneName.textContent=v&4?"Sitio A":v&8?"Sitio B":v&16?"Base T":v&32?"Base CT":""}}var K0=performance.now();function fm(n){requestAnimationFrame(fm);let e=Math.min(.05,(n-K0)/1e3);if(K0=n,X.phase==="lobby"&&Os&&Wt){Os.render(Wt,e);return}if(X.phase!=="lobby"&&_f){let t=window.__ls&&window.__ls.ff||0;for(let i=0;i<t;i++)J0(.05);if(J0(e),gn.update(e,X.time,Jt),T1(e),w1(e),window.__ls.cam){let i=window.__ls.cam;Jt.position.set(i[0],i[1],i[2]),Jt.lookAt(i[3],i[4],i[5]),Jt.fov!==74&&(Jt.fov=74,Jt.updateProjectionMatrix()),Cn.visible=!1}Pn&&Dt()&&!Dt().alive&&O.deadT>2.2&&(Pn=!1,Rf(1)),Wt.clear(),Wt.render(mn,Jt),Wt.clearDepth(),Cn.visible&&Wt.render(ja,Pr)}}function J0(n){X.time+=n,Mt()&&It?(It.tick(n),Yt&&Yt.tick(n),S1(n)):X.phase!=="lobby"&&(X.timeLeft-=n,X.bomb.state==="planted"&&(X.bomb.t-=n)),b1(n),o1(n),v1(n),M1(n)}var Vi=n=>!!(window.Arcade&&Arcade.admin&&Arcade.admin.get(n));function E1(){Arcade.admin&&(Arcade.admin.define([{id:"ls.god",label:"Inmortal",type:"toggle"},{id:"ls.wall",label:"Ver a trav\xE9s de paredes",type:"toggle"},{id:"ls.aim",label:"Aimbot (al disparar)",type:"toggle"},{id:"ls.norecoil",label:"Sin retroceso ni dispersi\xF3n",type:"toggle"},{id:"ls.ammo",label:"Balas infinitas",type:"toggle"},{id:"ls.speed",label:"S\xFAper velocidad",type:"toggle"},{id:"ls.money",label:"Plata al m\xE1ximo",type:"button"},{id:"ls.heal",label:"Curarme + chaleco",type:"button"},{id:"ls.kill",label:"Matar a los enemigos",type:"button"},{id:"ls.win",label:"Ganar la ronda",type:"button"}]),Arcade.admin.on("ls.god",n=>Ht("adm",{a:"god",v:!!n})),Arcade.admin.on("ls.money",()=>Ht("adm",{a:"money"})),Arcade.admin.on("ls.heal",()=>Ht("adm",{a:"heal"})),Arcade.admin.on("ls.kill",()=>Ht("adm",{a:"kill"})),Arcade.admin.on("ls.win",()=>Ht("adm",{a:"win"})))}var uf={};function A1(n){return uf[n]||(uf[n]=(async()=>{try{let e=Hc[n]||(Hc[n]=await yu(n));return e.W=e.W||_u(e.info,e.layers),nf(e.W)}catch(e){return console.warn(e),null}})()),uf[n]}var Os=null;function gf(){Os.show()}function xf(){Os.refresh()}function Ar(){Mt()&&(Dn("cfg",{cfg:X.cfg,prefs:X.prefs}),xf())}var Gc=new Set,ff=0;async function j0(n){if(X.cfg=n.cfg,X.prefs=n.prefs||{},Os.hide(),await x1(X.cfg.map),X.phase="loading",tn("hud").hidden=!1,Mt()){Gc.add(ot);let e=()=>{((zt.players||[]).every(i=>Gc.has(i.id))||ff<=0)&&R1()};ff=1,setTimeout(()=>{ff=0,e()},15e3),X.tryBegin=e,e()}else Dn("ready",{},{to:zt.hostId});Wc(),Gi||to()}var yf=!1;function R1(){if(yf)return;yf=!0,It=Iu(X);let n=(zt.players||[{id:ot,name:"Jugador",slot:0}]).map(e=>{let t=X.prefs[e.id]||{};return{id:e.id,name:e.name,slot:e.slot,pref:t.t??-1,sk:t.sk||[0,0],fin:t.f||0}});It.setup(n),Yt=Du(X,It),It.startMatch()}function C1(){X.phase="lobby",yf=!1,It=null,Yt=null,Gc.clear(),X.players.clear(),X.drops.clear(),X.nades.length=0,tn("hud").hidden=!0,We.banner(null),clearInterval(kc),document.exitPointerLock&&document.exitPointerLock(),gf(),Wc()}function P1(){if(!(X.phase==="lobby"||X.phase==="loading"||It)){It=Iu(X),It.adopt(),Yt=Du(X,It);for(let n of X.players.values())n.bot&&n.alive&&Yt.place(n,[n.x,n.y,n.z,n.yaw]),n.dmgBy||(n.dmgBy={});Yt.roundStart(),It.markDirty()}}async function I1(){We.init(),m1(),jM(),requestAnimationFrame(fm),zt=await Arcade.ready(),ot=zt.me.id,(!zt.players||!zt.players.length)&&(zt.players=[zt.me]),tn("loading").hidden=!0,E1();for(let e of JM)Arcade.on(e,(t,i,s)=>{Mt()&&It&&It.handle(e,t,i,s||{})});for(let e of["st","rs","ev","p","pb","sh","nd"])Arcade.on(e,(t,i)=>{(e==="ev"||e==="st"||e==="rs")&&Mt()||Af(e,t,i)});Arcade.on("cfg",e=>{Mt()||(X.cfg=e.cfg,X.prefs=e.prefs||{},X.phase==="lobby"&&xf())}),Arcade.on("pref",(e,t)=>{Mt()&&(X.prefs[t]=e,Ar())}),Arcade.on("start",e=>{X.phase==="lobby"&&j0(e)}),Arcade.on("ready",(e,t)=>{Mt()&&(Gc.add(t),X.tryBegin&&X.tryBegin())}),Arcade.on("hello",(e,t)=>{Mt()&&X.phase==="lobby"&&Ar()}),Arcade.onPlayerLeft(e=>{zt.players=(zt.players||[]).filter(i=>i.id!==e);let t=X.players.get(e);t&&Mt()&&It&&(t.bot=!0,t.name=t.name+" (bot)",t.alive&&Yt&&Yt.place(t,[t.x,t.y,t.z,t.yaw]),It.markDirty()),X.phase==="lobby"&&xf(),Mt()&&X.tryBegin&&X.tryBegin()}),Arcade.onHostChanged(()=>{Mt()&&(P1(),X.phase==="lobby"&&(gf(),Ar()))});let n=X.emit;X.emit=(e,t)=>{if(e==="start"){Dn("start",t),j0(t);return}n(e,t)},Os=k0({G:X,store:io,MAPS:df,LENGTHS:Pu,DIFF:bc,mapThumb:A1,ctx:()=>zt,myId:()=>ot,isHost:Mt,pushCfg:Ar,sendPref:e=>{X.prefs[ot]=e,Mt()?Ar():Dn("pref",e,{to:zt.hostId})},onStart:()=>{Za(),Gi||em(),X.emit("start",{cfg:X.cfg,prefs:X.prefs})}}),X.prefs[ot]=Os.myPref(),gf(),Mt()?Ar():(Dn("hello",{},{to:zt.hostId}),Dn("pref",X.prefs[ot],{to:zt.hostId}))}I1();window.__ls={G:X,M:O,me:Dt,req:Ht,get H(){return It},get BOTS(){return Yt},get camera(){return Jt},keys:Xt,look:vf,onKey:Mf,traceShot:vc,targets:wf,shotDir:wr,setMouse(n,e){Pn=n,so=!!e,e&&Tf()}};
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
