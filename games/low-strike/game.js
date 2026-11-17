var Nd=0,Zh=1,Dd=2;var za=1,Cl=2,Ir=3,fs=0,xn=1,Jn=2,Fs=0,Lr=1,Kh=2,Jh=3,jh=4,Ud=5;var Os=100,Fd=101,Od=102,Bd=103,zd=104,kd=200,Hd=201,Vd=202,Gd=203,Qh=204,eu=205,Wd=206,Xd=207,qd=208,Yd=209,$d=210,Zd=211,Kd=212,Jd=213,jd=214,$o=0,Zo=1,Ko=2,yr=3,Jo=4,jo=5,Qo=6,el=7,Pl=0,Qd=1,ep=2,Mi=0,tu=1,nu=2,iu=3,ka=4,su=5,ru=6,au=7;var ou=300,Bs=301,Nr=302,Il=303,Ll=304,_r=1e3,pi=1001,tl=1002,dn=1003,tp=1004;var Ha=1005;var Pn=1006,Nl=1007;var ki=1008;var Ln=1009,lu=1010,cu=1011,Dr=1012,Dl=1013,hi=1014,jn=1015,ui=1016,Ul=1017,Fl=1018,zs=1020,hu=35902,uu=35899,fu=1021,du=1022,fi=1023,Di=1026,Hi=1027,Ol=1028,Bl=1029,ds=1030,zl=1031;var kl=1033,Va=33776,Ga=33777,Wa=33778,Xa=33779,Hl=35840,Vl=35841,Gl=35842,Wl=35843,Xl=36196,ql=37492,Yl=37496,$l=37488,Zl=37489,qa=37490,Kl=37491,Jl=37808,jl=37809,Ql=37810,ec=37811,tc=37812,nc=37813,ic=37814,sc=37815,rc=37816,ac=37817,oc=37818,lc=37819,cc=37820,hc=37821,uc=36492,fc=36494,dc=36495,pc=36283,mc=36284,Ya=36285,gc=36286;var la=2300,nl=2301,qo=2302,Oh=2303,Bh=2400,zh=2401,kh=2402;var np=3200;var xc=0,ip=1,Vi="",gn="srgb",ca="srgb-linear",ha="linear",bt="srgb";var Yo=7680;var sp=519,rp=512,ap=513,op=514,pu=515,lp=516,cp=517,mu=518,gu=519,xu=35044,Ur=35048;var yu="300 es",$n=2e3,vr=2001;function zm(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function km(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function ua(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function hp(){let n=ua("canvas");return n.style.display="block",n}var Qf={},Mr=null;function fa(...n){let e="THREE."+n.shift();Mr?Mr("log",e,...n):console.log(e,...n)}function up(n){let e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Ge(...n){n=up(n);let e="THREE."+n.shift();if(Mr)Mr("warn",e,...n);else{let t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function Xe(...n){n=up(n);let e="THREE."+n.shift();if(Mr)Mr("error",e,...n);else{let t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function ra(...n){let e=n.join(" ");e in Qf||(Qf[e]=!0,Ge(...n))}function fp(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}var dp={[$o]:$o,[Ko]:Qo,[Jo]:Jo,[yr]:jo,[Zo]:Zo,[Qo]:Ko,[el]:el,[jo]:yr},mi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let s=i[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},Sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var uh=Math.PI/180,il=180/Math.PI;function ps(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Sn[n&255]+Sn[n>>8&255]+Sn[n>>16&255]+Sn[n>>24&255]+"-"+Sn[e&255]+Sn[e>>8&255]+"-"+Sn[e>>16&15|64]+Sn[e>>24&255]+"-"+Sn[t&63|128]+Sn[t>>8&255]+"-"+Sn[t>>16&255]+Sn[t>>24&255]+Sn[i&255]+Sn[i>>8&255]+Sn[i>>16&255]+Sn[i>>24&255]).toLowerCase()}function ct(n,e,t){return Math.max(e,Math.min(t,n))}function Hm(n,e){return(n%e+e)%e}function fh(n,e,t){return(1-t)*n+t*e}function pp(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function yc(n){switch(n.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function mp(n,e){if(e.constructor===Float32Array)return n;let t=yc(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(n/t,-1)}function gp(n,e){if(e.constructor===Float32Array)return n;let t=yc(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(n*t)}var pe=class{static{this.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ct(this.x,e.x,t.x),this.y=ct(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ct(this.x,e,t),this.y=ct(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ct(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(ct(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},gi=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,o){let l=i[s+0],c=i[s+1],h=i[s+2],f=i[s+3],u=r[a+0],d=r[a+1],m=r[a+2],M=r[a+3];if(f!==M||l!==u||c!==d||h!==m){let x=l*u+c*d+h*m+f*M;x<0&&(u=-u,d=-d,m=-m,M=-M,x=-x);let g=1-o;if(x<.9995){let b=Math.acos(x),E=Math.sin(b);g=Math.sin(g*b)/E,o=Math.sin(o*b)/E,l=l*g+u*o,c=c*g+d*o,h=h*g+m*o,f=f*g+M*o}else{l=l*g+u*o,c=c*g+d*o,h=h*g+m*o,f=f*g+M*o;let b=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=b,c*=b,h*=b,f*=b}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,s,r,a){let o=i[s],l=i[s+1],c=i[s+2],h=i[s+3],f=r[a],u=r[a+1],d=r[a+2],m=r[a+3];return e[t]=o*m+h*f+l*d-c*u,e[t+1]=l*m+h*u+c*f-o*d,e[t+2]=c*m+h*d+o*u-l*f,e[t+3]=h*m-o*f-l*u-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(s/2),f=o(r/2),u=l(i/2),d=l(s/2),m=l(r/2);switch(a){case"XYZ":this._x=u*h*f+c*d*m,this._y=c*d*f-u*h*m,this._z=c*h*m+u*d*f,this._w=c*h*f-u*d*m;break;case"YXZ":this._x=u*h*f+c*d*m,this._y=c*d*f-u*h*m,this._z=c*h*m-u*d*f,this._w=c*h*f+u*d*m;break;case"ZXY":this._x=u*h*f-c*d*m,this._y=c*d*f+u*h*m,this._z=c*h*m+u*d*f,this._w=c*h*f-u*d*m;break;case"ZYX":this._x=u*h*f-c*d*m,this._y=c*d*f+u*h*m,this._z=c*h*m-u*d*f,this._w=c*h*f+u*d*m;break;case"YZX":this._x=u*h*f+c*d*m,this._y=c*d*f+u*h*m,this._z=c*h*m-u*d*f,this._w=c*h*f-u*d*m;break;case"XZY":this._x=u*h*f-c*d*m,this._y=c*d*f-u*h*m,this._z=c*h*m+u*d*f,this._w=c*h*f+u*d*m;break;default:Ge("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],f=t[10],u=i+o+f;if(u>0){let d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(a-s)*d}else if(i>o&&i>f){let d=2*Math.sqrt(1+i-o-f);this._w=(h-l)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+c)/d}else if(o>f){let d=2*Math.sqrt(1+o-i-f);this._w=(r-c)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+f-i-o);this._w=(a-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ct(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-i*c,this._z=r*h+a*c+i*l-s*o,this._w=a*h-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},W=class{static{this.prototype.isVector3=!0}constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ed.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ed.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*i),h=2*(o*t-r*s),f=2*(r*i-a*t);return this.x=t+l*c+a*f-o*h,this.y=i+l*h+o*c-r*f,this.z=s+l*f+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ct(this.x,e.x,t.x),this.y=ct(this.y,e.y,t.y),this.z=ct(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ct(this.x,e,t),this.y=ct(this.y,e,t),this.z=ct(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ct(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return dh.copy(this).projectOnVector(e),this.sub(dh)}reflect(e){return this.sub(dh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(ct(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},dh=new W,ed=new gi,Je=class{static{this.prototype.isMatrix3=!0}constructor(e,t,i,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c)}set(e,t,i,s,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],f=i[7],u=i[2],d=i[5],m=i[8],M=s[0],x=s[3],g=s[6],b=s[1],E=s[4],S=s[7],P=s[2],A=s[5],p=s[8];return r[0]=a*M+o*b+l*P,r[3]=a*x+o*E+l*A,r[6]=a*g+o*S+l*p,r[1]=c*M+h*b+f*P,r[4]=c*x+h*E+f*A,r[7]=c*g+h*S+f*p,r[2]=u*M+d*b+m*P,r[5]=u*x+d*E+m*A,r[8]=u*g+d*S+m*p,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-i*r*h+i*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],f=h*a-o*c,u=o*l-h*r,d=c*r-a*l,m=t*f+i*u+s*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let M=1/m;return e[0]=f*M,e[1]=(s*c-h*i)*M,e[2]=(o*i-s*a)*M,e[3]=u*M,e[4]=(h*t-s*l)*M,e[5]=(s*r-o*t)*M,e[6]=d*M,e[7]=(i*l-c*t)*M,e[8]=(a*t-i*r)*M,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return ra("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ph.makeScale(e,t)),this}rotate(e){return ra("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ph.makeRotation(-e)),this}translate(e,t){return ra("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ph.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},ph=new Je,td=new Je().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),nd=new Je().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Vm(){let n={enabled:!0,workingColorSpace:ca,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===bt&&(s.r=Ni(s.r),s.g=Ni(s.g),s.b=Ni(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===bt&&(s.r=xr(s.r),s.g=xr(s.g),s.b=xr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Vi?ha:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[ca]:{primaries:e,whitePoint:i,transfer:ha,toXYZ:td,fromXYZ:nd,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:gn},outputColorSpaceConfig:{drawingBufferColorSpace:gn}},[gn]:{primaries:e,whitePoint:i,transfer:bt,toXYZ:td,fromXYZ:nd,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:gn}}}),n}var dt=Vm();function Ni(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function xr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Qs,sl=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Qs===void 0&&(Qs=ua("canvas")),Qs.width=e.width,Qs.height=e.height;let s=Qs.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Qs}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=ua("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Ni(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ni(t[i]/255)*255):t[i]=Ni(t[i]);return{data:t,width:e.width,height:e.height}}else return Ge("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Gm=0,br=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Gm++}),this.uuid=ps(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(mh(s[a].image)):r.push(mh(s[a]))}else r=mh(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function mh(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?sl.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Ge("Texture: Unable to serialize Texture."),{})}var Wm=0,gh=new W,In=class n extends mi{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=pi,s=pi,r=Pn,a=ki,o=fi,l=Ln,c=n.DEFAULT_ANISOTROPY,h=Vi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Wm++}),this.uuid=ps(),this.name="",this.source=new br(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new pe(0,0),this.repeat=new pe(1,1),this.center=new pe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Je,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(gh).x}get height(){return this.source.getSize(gh).y}get depth(){return this.source.getSize(gh).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){Ge(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ge(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ou)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case _r:e.x=e.x-Math.floor(e.x);break;case pi:e.x=e.x<0?0:1;break;case tl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case _r:e.y=e.y-Math.floor(e.y);break;case pi:e.y=e.y<0?0:1;break;case tl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};In.DEFAULT_IMAGE=null;In.DEFAULT_MAPPING=ou;In.DEFAULT_ANISOTROPY=1;var Lt=class{static{this.prototype.isVector4=!0}constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,c=l[0],h=l[4],f=l[8],u=l[1],d=l[5],m=l[9],M=l[2],x=l[6],g=l[10];if(Math.abs(h-u)<.01&&Math.abs(f-M)<.01&&Math.abs(m-x)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+M)<.1&&Math.abs(m+x)<.1&&Math.abs(c+d+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let E=(c+1)/2,S=(d+1)/2,P=(g+1)/2,A=(h+u)/4,p=(f+M)/4,v=(m+x)/4;return E>S&&E>P?E<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(E),s=A/i,r=p/i):S>P?S<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),i=A/s,r=v/s):P<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(P),i=p/r,s=v/r),this.set(i,s,r,t),this}let b=Math.sqrt((x-m)*(x-m)+(f-M)*(f-M)+(u-h)*(u-h));return Math.abs(b)<.001&&(b=1),this.x=(x-m)/b,this.y=(f-M)/b,this.z=(u-h)/b,this.w=Math.acos((c+d+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ct(this.x,e.x,t.x),this.y=ct(this.y,e.y,t.y),this.z=ct(this.z,e.z,t.z),this.w=ct(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ct(this.x,e,t),this.y=ct(this.y,e,t),this.z=ct(this.z,e,t),this.w=ct(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ct(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},rl=class extends mi{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Pn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Lt(0,0,e,t),this.scissorTest=!1,this.viewport=new Lt(0,0,e,t),this.textures=[];let s=i.count;for(let r=0;r<s;r++)this.textures[r]=new In({width:e,height:t,depth:i.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Pn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new br(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},kn=class extends rl{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},da=class extends In{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=dn,this.minFilter=dn,this.wrapR=pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var al=class extends In{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=dn,this.minFilter=dn,this.wrapR=pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var _t=class n{static{this.prototype.isMatrix4=!0}constructor(e,t,i,s,r,a,o,l,c,h,f,u,d,m,M,x){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c,h,f,u,d,m,M,x)}set(e,t,i,s,r,a,o,l,c,h,f,u,d,m,M,x){let g=this.elements;return g[0]=e,g[4]=t,g[8]=i,g[12]=s,g[1]=r,g[5]=a,g[9]=o,g[13]=l,g[2]=c,g[6]=h,g[10]=f,g[14]=u,g[3]=d,g[7]=m,g[11]=M,g[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,i=e.elements,s=1/er.setFromMatrixColumn(e,0).length(),r=1/er.setFromMatrixColumn(e,1).length(),a=1/er.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){let u=a*h,d=a*f,m=o*h,M=o*f;t[0]=l*h,t[4]=-l*f,t[8]=c,t[1]=d+m*c,t[5]=u-M*c,t[9]=-o*l,t[2]=M-u*c,t[6]=m+d*c,t[10]=a*l}else if(e.order==="YXZ"){let u=l*h,d=l*f,m=c*h,M=c*f;t[0]=u+M*o,t[4]=m*o-d,t[8]=a*c,t[1]=a*f,t[5]=a*h,t[9]=-o,t[2]=d*o-m,t[6]=M+u*o,t[10]=a*l}else if(e.order==="ZXY"){let u=l*h,d=l*f,m=c*h,M=c*f;t[0]=u-M*o,t[4]=-a*f,t[8]=m+d*o,t[1]=d+m*o,t[5]=a*h,t[9]=M-u*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let u=a*h,d=a*f,m=o*h,M=o*f;t[0]=l*h,t[4]=m*c-d,t[8]=u*c+M,t[1]=l*f,t[5]=M*c+u,t[9]=d*c-m,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let u=a*l,d=a*c,m=o*l,M=o*c;t[0]=l*h,t[4]=M-u*f,t[8]=m*f+d,t[1]=f,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=d*f+m,t[10]=u-M*f}else if(e.order==="XZY"){let u=a*l,d=a*c,m=o*l,M=o*c;t[0]=l*h,t[4]=-f,t[8]=c*h,t[1]=u*f+M,t[5]=a*h,t[9]=d*f-m,t[2]=m*f-d,t[6]=o*h,t[10]=M*f+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Xm,e,qm)}lookAt(e,t,i){let s=this.elements;return Bn.subVectors(e,t),Bn.lengthSq()===0&&(Bn.z=1),Bn.normalize(),Qi.crossVectors(i,Bn),Qi.lengthSq()===0&&(Math.abs(i.z)===1?Bn.x+=1e-4:Bn.z+=1e-4,Bn.normalize(),Qi.crossVectors(i,Bn)),Qi.normalize(),vo.crossVectors(Bn,Qi),s[0]=Qi.x,s[4]=vo.x,s[8]=Bn.x,s[1]=Qi.y,s[5]=vo.y,s[9]=Bn.y,s[2]=Qi.z,s[6]=vo.z,s[10]=Bn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],f=i[5],u=i[9],d=i[13],m=i[2],M=i[6],x=i[10],g=i[14],b=i[3],E=i[7],S=i[11],P=i[15],A=s[0],p=s[4],v=s[8],C=s[12],y=s[1],w=s[5],R=s[9],_=s[13],T=s[2],I=s[6],N=s[10],B=s[14],k=s[3],F=s[7],U=s[11],H=s[15];return r[0]=a*A+o*y+l*T+c*k,r[4]=a*p+o*w+l*I+c*F,r[8]=a*v+o*R+l*N+c*U,r[12]=a*C+o*_+l*B+c*H,r[1]=h*A+f*y+u*T+d*k,r[5]=h*p+f*w+u*I+d*F,r[9]=h*v+f*R+u*N+d*U,r[13]=h*C+f*_+u*B+d*H,r[2]=m*A+M*y+x*T+g*k,r[6]=m*p+M*w+x*I+g*F,r[10]=m*v+M*R+x*N+g*U,r[14]=m*C+M*_+x*B+g*H,r[3]=b*A+E*y+S*T+P*k,r[7]=b*p+E*w+S*I+P*F,r[11]=b*v+E*R+S*N+P*U,r[15]=b*C+E*_+S*B+P*H,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],f=e[6],u=e[10],d=e[14],m=e[3],M=e[7],x=e[11],g=e[15],b=l*d-c*u,E=o*d-c*f,S=o*u-l*f,P=a*d-c*h,A=a*u-l*h,p=a*f-o*h;return t*(M*b-x*E+g*S)-i*(m*b-x*P+g*A)+s*(m*E-M*P+g*p)-r*(m*S-M*A+x*p)}determinantAffine(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],h=e[10];return t*(a*h-o*c)-i*(r*h-o*l)+s*(r*c-a*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],f=e[9],u=e[10],d=e[11],m=e[12],M=e[13],x=e[14],g=e[15],b=t*o-i*a,E=t*l-s*a,S=t*c-r*a,P=i*l-s*o,A=i*c-r*o,p=s*c-r*l,v=h*M-f*m,C=h*x-u*m,y=h*g-d*m,w=f*x-u*M,R=f*g-d*M,_=u*g-d*x,T=b*_-E*R+S*w+P*y-A*C+p*v;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let I=1/T;return e[0]=(o*_-l*R+c*w)*I,e[1]=(s*R-i*_-r*w)*I,e[2]=(M*p-x*A+g*P)*I,e[3]=(u*A-f*p-d*P)*I,e[4]=(l*y-a*_-c*C)*I,e[5]=(t*_-s*y+r*C)*I,e[6]=(x*S-m*p-g*E)*I,e[7]=(h*p-u*S+d*E)*I,e[8]=(a*R-o*y+c*v)*I,e[9]=(i*y-t*R-r*v)*I,e[10]=(m*A-M*S+g*b)*I,e[11]=(f*S-h*A-d*b)*I,e[12]=(o*C-a*w-l*v)*I,e[13]=(t*w-i*C+s*v)*I,e[14]=(M*E-m*P-x*b)*I,e[15]=(h*P-f*E+u*b)*I,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+i,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,f=o+o,u=r*c,d=r*h,m=r*f,M=a*h,x=a*f,g=o*f,b=l*c,E=l*h,S=l*f,P=i.x,A=i.y,p=i.z;return s[0]=(1-(M+g))*P,s[1]=(d+S)*P,s[2]=(m-E)*P,s[3]=0,s[4]=(d-S)*A,s[5]=(1-(u+g))*A,s[6]=(x+b)*A,s[7]=0,s[8]=(m+E)*p,s[9]=(x-b)*p,s[10]=(1-(u+M))*p,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let a=er.set(s[0],s[1],s[2]).length(),o=er.set(s[4],s[5],s[6]).length(),l=er.set(s[8],s[9],s[10]).length();r<0&&(a=-a),si.copy(this);let c=1/a,h=1/o,f=1/l;return si.elements[0]*=c,si.elements[1]*=c,si.elements[2]*=c,si.elements[4]*=h,si.elements[5]*=h,si.elements[6]*=h,si.elements[8]*=f,si.elements[9]*=f,si.elements[10]*=f,t.setFromRotationMatrix(si),i.x=a,i.y=o,i.z=l,this}makePerspective(e,t,i,s,r,a,o=$n,l=!1){let c=this.elements,h=2*r/(t-e),f=2*r/(i-s),u=(t+e)/(t-e),d=(i+s)/(i-s),m,M;if(l)m=r/(a-r),M=a*r/(a-r);else if(o===$n)m=-(a+r)/(a-r),M=-2*a*r/(a-r);else if(o===vr)m=-a/(a-r),M=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=f,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=M,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,a,o=$n,l=!1){let c=this.elements,h=2/(t-e),f=2/(i-s),u=-(t+e)/(t-e),d=-(i+s)/(i-s),m,M;if(l)m=1/(a-r),M=a/(a-r);else if(o===$n)m=-2/(a-r),M=-(a+r)/(a-r);else if(o===vr)m=-1/(a-r),M=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=f,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=m,c[14]=M,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},er=new W,si=new _t,Xm=new W(0,0,0),qm=new W(1,1,1),Qi=new W,vo=new W,Bn=new W,id=new _t,sd=new gi,li=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],f=s[2],u=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(ct(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ct(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(ct(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ct(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ct(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-ct(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:Ge("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return id.makeRotationFromQuaternion(e),this.setFromRotationMatrix(id,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return sd.setFromEuler(this),this.setFromQuaternion(sd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};li.DEFAULT_ORDER="XYZ";var pa=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Ym=0,rd=new W,tr=new gi,Ai=new _t,Mo=new W,Zr=new W,$m=new W,Zm=new gi,ad=new W(1,0,0),od=new W(0,1,0),ld=new W(0,0,1),cd={type:"added"},Km={type:"removed"},nr={type:"childadded",child:null},xh={type:"childremoved",child:null},Wt=class n extends mi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ym++}),this.uuid=ps(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new W,t=new li,i=new gi,s=new W(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new _t},normalMatrix:{value:new Je}}),this.matrix=new _t,this.matrixWorld=new _t,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new pa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return tr.setFromAxisAngle(e,t),this.quaternion.multiply(tr),this}rotateOnWorldAxis(e,t){return tr.setFromAxisAngle(e,t),this.quaternion.premultiply(tr),this}rotateX(e){return this.rotateOnAxis(ad,e)}rotateY(e){return this.rotateOnAxis(od,e)}rotateZ(e){return this.rotateOnAxis(ld,e)}translateOnAxis(e,t){return rd.copy(e).applyQuaternion(this.quaternion),this.position.add(rd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ad,e)}translateY(e){return this.translateOnAxis(od,e)}translateZ(e){return this.translateOnAxis(ld,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ai.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Mo.copy(e):Mo.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Zr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ai.lookAt(Zr,Mo,this.up):Ai.lookAt(Mo,Zr,this.up),this.quaternion.setFromRotationMatrix(Ai),s&&(Ai.extractRotation(s.matrixWorld),tr.setFromRotationMatrix(Ai),this.quaternion.premultiply(tr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Xe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(cd),nr.child=e,this.dispatchEvent(nr),nr.child=null):Xe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Km),xh.child=e,this.dispatchEvent(xh),xh.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ai.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ai.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ai),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(cd),nr.child=e,this.dispatchEvent(nr),nr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zr,e,$m),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zr,Zm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),f=a(e.shapes),u=a(e.skeletons),d=a(e.animations),m=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),f.length>0&&(i.shapes=f),u.length>0&&(i.skeletons=u),d.length>0&&(i.animations=d),m.length>0&&(i.nodes=m)}return i.object=s,i;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Wt.DEFAULT_UP=new W(0,1,0);Wt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Rt=class extends Wt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Jm={type:"move"},Sr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Rt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Rt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Rt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let M of e.hand.values()){let x=t.getJointPose(M,i),g=this._getHandJoint(c,M);x!==null&&(g.matrix.fromArray(x.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=x.radius),g.visible=x!==null}let h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],u=h.position.distanceTo(f.position),d=.02,m=.005;c.inputState.pinching&&u>d+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=d-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Jm)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Rt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},xp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},es={h:0,s:0,l:0},bo={h:0,s:0,l:0};function yh(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var We=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=gn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,dt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=dt.workingColorSpace){return this.r=e,this.g=t,this.b=i,dt.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=dt.workingColorSpace){if(e=Hm(e,1),t=ct(t,0,1),i=ct(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=yh(a,r,e+1/3),this.g=yh(a,r,e),this.b=yh(a,r,e-1/3)}return dt.colorSpaceToWorking(this,s),this}setStyle(e,t=gn){function i(r){r!==void 0&&parseFloat(r)<1&&Ge("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ge("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Ge("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=gn){let i=xp[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Ge("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ni(e.r),this.g=Ni(e.g),this.b=Ni(e.b),this}copyLinearToSRGB(e){return this.r=xr(e.r),this.g=xr(e.g),this.b=xr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=gn){return dt.workingToColorSpace(Tn.copy(this),e),Math.round(ct(Tn.r*255,0,255))*65536+Math.round(ct(Tn.g*255,0,255))*256+Math.round(ct(Tn.b*255,0,255))}getHexString(e=gn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=dt.workingColorSpace){dt.workingToColorSpace(Tn.copy(this),t);let i=Tn.r,s=Tn.g,r=Tn.b,a=Math.max(i,s,r),o=Math.min(i,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let f=a-o;switch(c=h<=.5?f/(a+o):f/(2-a-o),a){case i:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-i)/f+2;break;case r:l=(i-s)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=dt.workingColorSpace){return dt.workingToColorSpace(Tn.copy(this),t),e.r=Tn.r,e.g=Tn.g,e.b=Tn.b,e}getStyle(e=gn){dt.workingToColorSpace(Tn.copy(this),e);let t=Tn.r,i=Tn.g,s=Tn.b;return e!==gn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(es),this.setHSL(es.h+e,es.s+t,es.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(es),e.getHSL(bo);let i=fh(es.h,bo.h,t),s=fh(es.s,bo.s,t),r=fh(es.l,bo.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Tn=new We;We.NAMES=xp;var ma=class n{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new We(e),this.near=t,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},ci=class extends Wt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new li,this.environmentIntensity=1,this.environmentRotation=new li,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},ri=new W,Ri=new W,_h=new W,Ci=new W,ir=new W,sr=new W,hd=new W,vh=new W,Mh=new W,bh=new W,Sh=new Lt,Th=new Lt,wh=new Lt,Li=class n{constructor(e=new W,t=new W,i=new W){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),ri.subVectors(e,t),s.cross(ri);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){ri.subVectors(s,t),Ri.subVectors(i,t),_h.subVectors(e,t);let a=ri.dot(ri),o=ri.dot(Ri),l=ri.dot(_h),c=Ri.dot(Ri),h=Ri.dot(_h),f=a*c-o*o;if(f===0)return r.set(0,0,0),null;let u=1/f,d=(c*l-o*h)*u,m=(a*h-o*l)*u;return r.set(1-d-m,m,d)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Ci)===null?!1:Ci.x>=0&&Ci.y>=0&&Ci.x+Ci.y<=1}static getInterpolation(e,t,i,s,r,a,o,l){return this.getBarycoord(e,t,i,s,Ci)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ci.x),l.addScaledVector(a,Ci.y),l.addScaledVector(o,Ci.z),l)}static getInterpolatedAttribute(e,t,i,s,r,a){return Sh.setScalar(0),Th.setScalar(0),wh.setScalar(0),Sh.fromBufferAttribute(e,t),Th.fromBufferAttribute(e,i),wh.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Sh,r.x),a.addScaledVector(Th,r.y),a.addScaledVector(wh,r.z),a}static isFrontFacing(e,t,i,s){return ri.subVectors(i,t),Ri.subVectors(e,t),ri.cross(Ri).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ri.subVectors(this.c,this.b),Ri.subVectors(this.a,this.b),ri.cross(Ri).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,a,o;ir.subVectors(s,i),sr.subVectors(r,i),vh.subVectors(e,i);let l=ir.dot(vh),c=sr.dot(vh);if(l<=0&&c<=0)return t.copy(i);Mh.subVectors(e,s);let h=ir.dot(Mh),f=sr.dot(Mh);if(h>=0&&f<=h)return t.copy(s);let u=l*f-h*c;if(u<=0&&l>=0&&h<=0&&l-h>0)return a=l/(l-h),t.copy(i).addScaledVector(ir,a);bh.subVectors(e,r);let d=ir.dot(bh),m=sr.dot(bh);if(m>=0&&d<=m)return t.copy(r);let M=d*c-l*m;if(M<=0&&c>=0&&m<=0)return o=c/(c-m),t.copy(i).addScaledVector(sr,o);let x=h*m-d*f;if(x<=0&&f-h>=0&&d-m>=0)return hd.subVectors(r,s),o=(f-h)/(f-h+(d-m)),t.copy(s).addScaledVector(hd,o);let g=1/(x+M+u);return a=M*g,o=u*g,t.copy(i).addScaledVector(ir,a).addScaledVector(sr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},xi=class{constructor(e=new W(1/0,1/0,1/0),t=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(ai.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(ai.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=ai.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,ai):ai.fromBufferAttribute(r,a),ai.applyMatrix4(e.matrixWorld),this.expandByPoint(ai);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),So.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),So.copy(i.boundingBox)),So.applyMatrix4(e.matrixWorld),this.union(So)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ai),ai.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Kr),To.subVectors(this.max,Kr),rr.subVectors(e.a,Kr),ar.subVectors(e.b,Kr),or.subVectors(e.c,Kr),ts.subVectors(ar,rr),ns.subVectors(or,ar),As.subVectors(rr,or);let t=[0,-ts.z,ts.y,0,-ns.z,ns.y,0,-As.z,As.y,ts.z,0,-ts.x,ns.z,0,-ns.x,As.z,0,-As.x,-ts.y,ts.x,0,-ns.y,ns.x,0,-As.y,As.x,0];return!Eh(t,rr,ar,or,To)||(t=[1,0,0,0,1,0,0,0,1],!Eh(t,rr,ar,or,To))?!1:(wo.crossVectors(ts,ns),t=[wo.x,wo.y,wo.z],Eh(t,rr,ar,or,To))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ai).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ai).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Pi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Pi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Pi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Pi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Pi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Pi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Pi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Pi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Pi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Pi=[new W,new W,new W,new W,new W,new W,new W,new W],ai=new W,So=new xi,rr=new W,ar=new W,or=new W,ts=new W,ns=new W,As=new W,Kr=new W,To=new W,wo=new W,Rs=new W;function Eh(n,e,t,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){Rs.fromArray(n,r);let o=s.x*Math.abs(Rs.x)+s.y*Math.abs(Rs.y)+s.z*Math.abs(Rs.z),l=e.dot(Rs),c=t.dot(Rs),h=i.dot(Rs);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var tn=new W,Eo=new pe,jm=0,Zt=class extends mi{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:jm++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=xu,this.updateRanges=[],this.gpuType=jn,this.version=0,this._normalizationScale=e!==void 0?yc(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Eo.fromBufferAttribute(this,t),Eo.applyMatrix3(e),this.setXY(t,Eo.x,Eo.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)tn.fromBufferAttribute(this,t),tn.applyMatrix3(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)tn.fromBufferAttribute(this,t),tn.applyMatrix4(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)tn.fromBufferAttribute(this,t),tn.applyNormalMatrix(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)tn.fromBufferAttribute(this,t),tn.transformDirection(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,t,i){return this.normalized&&(i=this._normalize(i)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):mp(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):gp(e,this.array)}};var ga=class extends Zt{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var xa=class extends Zt{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var it=class extends Zt{constructor(e,t,i){super(new Float32Array(e),t,i)}},Qm=new xi,Jr=new W,Ah=new W,ss=class{constructor(e=new W,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):Qm.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Jr.subVectors(e,this.center);let t=Jr.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Jr,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ah.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Jr.copy(e.center).add(Ah)),this.expandByPoint(Jr.copy(e.center).sub(Ah))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},eg=0,Yn=new _t,Rh=new Wt,lr=new W,zn=new xi,jr=new xi,fn=new W,Xt=class n extends mi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:eg++}),this.uuid=ps(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(zm(e)?xa:ga)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Je().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Yn.makeRotationFromQuaternion(e),this.applyMatrix4(Yn),this}rotateX(e){return Yn.makeRotationX(e),this.applyMatrix4(Yn),this}rotateY(e){return Yn.makeRotationY(e),this.applyMatrix4(Yn),this}rotateZ(e){return Yn.makeRotationZ(e),this.applyMatrix4(Yn),this}translate(e,t,i){return Yn.makeTranslation(e,t,i),this.applyMatrix4(Yn),this}scale(e,t,i){return Yn.makeScale(e,t,i),this.applyMatrix4(Yn),this}lookAt(e){return Rh.lookAt(e),Rh.updateMatrix(),this.applyMatrix4(Rh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(lr).negate(),this.translate(lr.x,lr.y,lr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new it(i,3))}else{let i=Math.min(e.length,t.count);for(let s=0;s<i;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Ge("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new xi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Xe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];zn.setFromBufferAttribute(r),this.morphTargetsRelative?(fn.addVectors(this.boundingBox.min,zn.min),this.boundingBox.expandByPoint(fn),fn.addVectors(this.boundingBox.max,zn.max),this.boundingBox.expandByPoint(fn)):(this.boundingBox.expandByPoint(zn.min),this.boundingBox.expandByPoint(zn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Xe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ss);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Xe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new W,1/0);return}if(e){let i=this.boundingSphere.center;if(zn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];jr.setFromBufferAttribute(o),this.morphTargetsRelative?(fn.addVectors(zn.min,jr.min),zn.expandByPoint(fn),fn.addVectors(zn.max,jr.max),zn.expandByPoint(fn)):(zn.expandByPoint(jr.min),zn.expandByPoint(jr.max))}zn.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)fn.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(fn));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)fn.fromBufferAttribute(o,c),l&&(lr.fromBufferAttribute(e,c),fn.add(lr)),s=Math.max(s,i.distanceToSquared(fn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Xe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Xe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new Zt(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));let o=[],l=[],c=new Uint8Array(i.count);for(let C=0;C<i.count;C++)o[C]=new W,l[C]=new W;let h=new W,f=new W,u=new W,d=new pe,m=new pe,M=new pe,x=new W,g=new W;function b(C,y,w){c[C]=c[y]=c[w]=1,h.fromBufferAttribute(i,C),f.fromBufferAttribute(i,y),u.fromBufferAttribute(i,w),d.fromBufferAttribute(r,C),m.fromBufferAttribute(r,y),M.fromBufferAttribute(r,w),f.sub(h),u.sub(h),m.sub(d),M.sub(d);let R=1/(m.x*M.y-M.x*m.y);isFinite(R)&&(x.copy(f).multiplyScalar(M.y).addScaledVector(u,-m.y).multiplyScalar(R),g.copy(u).multiplyScalar(m.x).addScaledVector(f,-M.x).multiplyScalar(R),o[C].add(x),o[y].add(x),o[w].add(x),l[C].add(g),l[y].add(g),l[w].add(g))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let C=0,y=E.length;C<y;++C){let w=E[C],R=w.start,_=w.count;for(let T=R,I=R+_;T<I;T+=3)b(e.getX(T+0),e.getX(T+1),e.getX(T+2))}let S=new W,P=new W,A=new W,p=new W;function v(C){A.fromBufferAttribute(s,C),p.copy(A);let y=o[C];S.copy(y),S.sub(A.multiplyScalar(A.dot(y))).normalize(),P.crossVectors(p,y);let R=P.dot(l[C])<0?-1:1;a.setXYZW(C,S.x,S.y,S.z,R)}for(let C=0,y=i.count;C<y;++C)c[C]&&v(C);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new Zt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let u=0,d=i.count;u<d;u++)i.setXYZ(u,0,0,0);let s=new W,r=new W,a=new W,o=new W,l=new W,c=new W,h=new W,f=new W;if(e)for(let u=0,d=e.count;u<d;u+=3){let m=e.getX(u+0),M=e.getX(u+1),x=e.getX(u+2);s.fromBufferAttribute(t,m),r.fromBufferAttribute(t,M),a.fromBufferAttribute(t,x),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),o.fromBufferAttribute(i,m),l.fromBufferAttribute(i,M),c.fromBufferAttribute(i,x),o.add(h),l.add(h),c.add(h),i.setXYZ(m,o.x,o.y,o.z),i.setXYZ(M,l.x,l.y,l.z),i.setXYZ(x,c.x,c.y,c.z)}else for(let u=0,d=t.count;u<d;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)fn.fromBufferAttribute(e,t),fn.normalize(),e.setXYZ(t,fn.x,fn.y,fn.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,f=o.normalized,u=new c.constructor(l.length*h),d=0,m=0;for(let M=0,x=l.length;M<x;M++){o.isInterleavedBufferAttribute?d=l[M]*o.data.stride+o.offset:d=l[M]*h;for(let g=0;g<h;g++)u[m++]=c[d++]}return new Zt(u,h,f)}if(this.index===null)return Ge("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,i);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,f=c.length;h<f;h++){let u=c[h],d=e(u,i);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let f=0,u=c.length;f<u;f++){let d=c[f];h.push(d.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],f=r[c];for(let u=0,d=f.length;u<d;u++)h.push(f[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},ya=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=xu,this.updateRanges=[],this.version=0,this.uuid=ps()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=ud(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let i=new this.array.constructor(e.arrayBuffers[t]),s=new this.constructor(i,this.stride);return s.setUsage(this.usage),s}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=ud(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let i={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return i.usage=this.usage,i}};function ud(n){return n.buffer._uuid===void 0&&(n.buffer._uuid=ps()),n.byteOffset===0&&n.byteLength===n.buffer.byteLength?n.buffer._uuid:n.buffer._uuid+":"+n.byteOffset+":"+n.byteLength}var Cn=new W,Tr=class n{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s,this._normalizationScale=e!==void 0?yc(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Cn.fromBufferAttribute(this,t),Cn.applyMatrix4(e),this.setXYZ(t,Cn.x,Cn.y,Cn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Cn.fromBufferAttribute(this,t),Cn.applyNormalMatrix(e),this.setXYZ(t,Cn.x,Cn.y,Cn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Cn.fromBufferAttribute(this,t),Cn.transformDirection(e),this.setXYZ(t,Cn.x,Cn.y,Cn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,t,i){return this.normalized&&(i=this._normalize(i)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),i=this._normalize(i)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){fa("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Zt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){fa("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):mp(e,this.data.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):gp(e,this.data.array)}},Ch=new W,tg=new W,ng=new Je,oi=class{constructor(e=new W(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=Ch.subVectors(i,t).cross(tg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let s=e.delta(Ch),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||ng.getNormalMatrix(e),s=this.coplanarPoint(Ch).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},ig=0,Ui=class extends mi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ig++}),this.uuid=ps(),this.name="",this.type="Material",this.blending=Lr,this.side=fs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Qh,this.blendDst=eu,this.blendEquation=Os,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new We(0,0,0),this.blendAlpha=0,this.depthFunc=yr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=sp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Yo,this.stencilZFail=Yo,this.stencilZPass=Yo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){Ge(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ge(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new We().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new oi().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new pe().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new pe().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},wr=class extends Ui{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new We(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},cr,Qr=new W,hr=new W,ur=new W,fr=new pe,ea=new pe,yp=new _t,Ao=new W,ta=new W,Ro=new W,fd=new pe,Ph=new pe,dd=new pe,_a=class extends Wt{constructor(e=new wr){if(super(),this.isSprite=!0,this.type="Sprite",cr===void 0){cr=new Xt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new ya(t,5);cr.setIndex([0,1,2,0,2,3]),cr.setAttribute("position",new Tr(i,3,0,!1)),cr.setAttribute("uv",new Tr(i,2,3,!1))}this.geometry=cr,this.material=e,this.center=new pe(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&Xe('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),hr.setFromMatrixScale(this.matrixWorld),yp.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ur.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&hr.multiplyScalar(-ur.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let a=this.center;Co(Ao.set(-.5,-.5,0),ur,a,hr,s,r),Co(ta.set(.5,-.5,0),ur,a,hr,s,r),Co(Ro.set(.5,.5,0),ur,a,hr,s,r),fd.set(0,0),Ph.set(1,0),dd.set(1,1);let o=e.ray.intersectTriangle(Ao,ta,Ro,!1,Qr);if(o===null&&(Co(ta.set(-.5,.5,0),ur,a,hr,s,r),Ph.set(0,1),o=e.ray.intersectTriangle(Ao,Ro,ta,!1,Qr),o===null))return;let l=e.ray.origin.distanceTo(Qr);l<e.near||l>e.far||t.push({distance:l,point:Qr.clone(),uv:Li.getInterpolation(Qr,Ao,ta,Ro,fd,Ph,dd,new pe),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}toJSON(e){let t=super.toJSON(e);return t.object.center=this.center.toArray(),t}};function Co(n,e,t,i,s,r){fr.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(ea.x=r*fr.x-s*fr.y,ea.y=s*fr.x+r*fr.y):ea.copy(fr),n.copy(e),n.x+=ea.x,n.y+=ea.y,n.applyMatrix4(yp)}var Ii=new W,Ih=new W,Po=new W,Io=new W,ol=class{constructor(e=new W,t=new W(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ii)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ii.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ii.copy(this.origin).addScaledVector(this.direction,t),Ii.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Ih.copy(e).add(t).multiplyScalar(.5),Po.copy(t).sub(e).normalize(),Io.copy(this.origin).sub(Ih);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Po),o=Io.dot(this.direction),l=-Io.dot(Po),c=Io.lengthSq(),h=Math.abs(1-a*a),f,u,d,m;if(h>0)if(f=a*l-o,u=a*o-l,m=r*h,f>=0)if(u>=-m)if(u<=m){let M=1/h;f*=M,u*=M,d=f*(f+a*u+2*o)+u*(a*f+u+2*l)+c}else u=r,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*l)+c;else u=-r,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*l)+c;else u<=-m?(f=Math.max(0,-(-a*r+o)),u=f>0?-r:Math.min(Math.max(-r,-l),r),d=-f*f+u*(u+2*l)+c):u<=m?(f=0,u=Math.min(Math.max(-r,-l),r),d=u*(u+2*l)+c):(f=Math.max(0,-(a*r+o)),u=f>0?r:Math.min(Math.max(-r,-l),r),d=-f*f+u*(u+2*l)+c);else u=a>0?-r:r,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Ih).addScaledVector(Po,u),d}intersectSphere(e,t){if(e.radius<0)return null;Ii.subVectors(e.center,this.origin);let i=Ii.dot(this.direction),s=Ii.dot(Ii)-i*i,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return c>=0?(i=(e.min.x-u.x)*c,s=(e.max.x-u.x)*c):(i=(e.max.x-u.x)*c,s=(e.min.x-u.x)*c),h>=0?(r=(e.min.y-u.y)*h,a=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,a=(e.min.y-u.y)*h),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(e.min.z-u.z)*f,l=(e.max.z-u.z)*f):(o=(e.max.z-u.z)*f,l=(e.min.z-u.z)*f),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Ii)!==null}intersectTriangle(e,t,i,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,f=e.x-a.x,u=e.y-a.y,d=e.z-a.z,m=t.x-a.x,M=t.y-a.y,x=t.z-a.z,g=i.x-a.x,b=i.y-a.y,E=i.z-a.z,S=Math.abs(l),P=Math.abs(c),A=Math.abs(h),p,v,C,y,w,R,_,T,I,N,B,k;if(S>=P&&S>=A?(C=l,R=f,I=m,k=g,l>=0?(p=c,v=h,y=u,w=d,_=M,T=x,N=b,B=E):(p=h,v=c,y=d,w=u,_=x,T=M,N=E,B=b)):P>=A?(C=c,R=u,I=M,k=b,c>=0?(p=h,v=l,y=d,w=f,_=x,T=m,N=E,B=g):(p=l,v=h,y=f,w=d,_=m,T=x,N=g,B=E)):(C=h,R=d,I=x,k=E,h>=0?(p=l,v=c,y=f,w=u,_=m,T=M,N=g,B=b):(p=c,v=l,y=u,w=f,_=M,T=m,N=b,B=g)),C===0)return null;let F=p/C,U=v/C,H=1/C,Z=y-F*R,$=w-U*R,G=_-F*I,ee=T-U*I,te=N-F*k,le=B-U*k,ce=te*ee-le*G,he=Z*le-$*te,ze=G*$-ee*Z;if(s){if(ce<0||he<0||ze<0)return null}else if((ce<0||he<0||ze<0)&&(ce>0||he>0||ze>0))return null;let Pe=ce+he+ze;if(Pe===0)return null;let Oe=H*(ce*R+he*I+ze*k);return(Pe>0?Oe<0:Oe>0)?null:this.at(Oe/Pe,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Kt=class extends Ui{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new We(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new li,this.combine=Pl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},pd=new _t,Cs=new ol,Lo=new ss,md=new W,No=new W,Do=new W,Uo=new W,Lh=new W,Fo=new W,gd=new W,Oo=new W,Ye=class extends Wt{constructor(e=new Xt,t=new Kt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){Fo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],f=r[l];h!==0&&(Lh.fromBufferAttribute(f,e),a?Fo.addScaledVector(Lh,h):Fo.addScaledVector(Lh.sub(t),h))}t.add(Fo)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Lo.copy(i.boundingSphere),Lo.applyMatrix4(r),Cs.copy(e.ray).recast(e.near),!(Lo.containsPoint(Cs.origin)===!1&&(Cs.intersectSphere(Lo,md)===null||Cs.origin.distanceToSquared(md)>(e.far-e.near)**2))&&(pd.copy(r).invert(),Cs.copy(e.ray).applyMatrix4(pd),!(i.boundingBox!==null&&Cs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Cs)))}_computeIntersections(e,t,i){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,u=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,M=u.length;m<M;m++){let x=u[m],g=a[x.materialIndex],b=Math.max(x.start,d.start),E=Math.min(o.count,Math.min(x.start+x.count,d.start+d.count));for(let S=b,P=E;S<P;S+=3){let A=o.getX(S),p=o.getX(S+1),v=o.getX(S+2);s=Bo(this,g,e,i,c,h,f,A,p,v),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=x.materialIndex,t.push(s))}}else{let m=Math.max(0,d.start),M=Math.min(o.count,d.start+d.count);for(let x=m,g=M;x<g;x+=3){let b=o.getX(x),E=o.getX(x+1),S=o.getX(x+2);s=Bo(this,a,e,i,c,h,f,b,E,S),s&&(s.faceIndex=Math.floor(x/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let m=0,M=u.length;m<M;m++){let x=u[m],g=a[x.materialIndex],b=Math.max(x.start,d.start),E=Math.min(l.count,Math.min(x.start+x.count,d.start+d.count));for(let S=b,P=E;S<P;S+=3){let A=S,p=S+1,v=S+2;s=Bo(this,g,e,i,c,h,f,A,p,v),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=x.materialIndex,t.push(s))}}else{let m=Math.max(0,d.start),M=Math.min(l.count,d.start+d.count);for(let x=m,g=M;x<g;x+=3){let b=x,E=x+1,S=x+2;s=Bo(this,a,e,i,c,h,f,b,E,S),s&&(s.faceIndex=Math.floor(x/3),t.push(s))}}}};function sg(n,e,t,i,s,r,a,o){let l;if(e.side===xn?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,e.side===fs,o),l===null)return null;Oo.copy(o),Oo.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(Oo);return c<t.near||c>t.far?null:{distance:c,point:Oo.clone(),object:n}}function Bo(n,e,t,i,s,r,a,o,l,c){n.getVertexPosition(o,No),n.getVertexPosition(l,Do),n.getVertexPosition(c,Uo);let h=sg(n,e,t,i,No,Do,Uo,gd);if(h){let f=new W;Li.getBarycoord(gd,No,Do,Uo,f),s&&(h.uv=Li.getInterpolatedAttribute(s,o,l,c,f,new pe)),r&&(h.uv1=Li.getInterpolatedAttribute(r,o,l,c,f,new pe)),a&&(h.normal=Li.getInterpolatedAttribute(a,o,l,c,f,new W),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new W,materialIndex:0};Li.getNormal(No,Do,Uo,u.normal),h.face=u,h.barycoord=f}return h}var va=class extends In{constructor(e=null,t=1,i=1,s,r,a,o,l,c=dn,h=dn,f,u){super(null,a,o,l,c,h,s,r,f,u),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var yi=class extends Zt{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},dr=new _t,xd=new _t,zo=[],yd=new xi,rg=new _t,na=new Ye,ia=new ss,Hn=class extends Ye{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new yi(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,rg)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new xi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,dr),yd.copy(e.boundingBox).applyMatrix4(dr),this.boundingBox.union(yd)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ss),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,dr),ia.copy(e.boundingSphere).applyMatrix4(dr),this.boundingSphere.union(ia)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,a=e*r+1;for(let o=0;o<i.length;o++)i[o]=s[a+o]}raycast(e,t){let i=this.matrixWorld,s=this.count;if(na.geometry=this.geometry,na.material=this.material,na.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ia.copy(this.boundingSphere),ia.applyMatrix4(i),e.ray.intersectsSphere(ia)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,dr),xd.multiplyMatrices(i,dr),na.matrixWorld=xd,na.raycast(e,zo);for(let a=0,o=zo.length;a<o;a++){let l=zo[a];l.instanceId=r,l.object=this,t.push(l)}zo.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new yi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new va(new Float32Array(s*this.count),s,this.count,Ol,jn));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<i.length;c++)a+=i[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;return r[l]=o,r.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Ps=new ss,ag=new pe(.5,.5),ko=new W,rs=class{constructor(e=new oi,t=new oi,i=new oi,s=new oi,r=new oi,a=new oi){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=$n,i=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],f=r[5],u=r[6],d=r[7],m=r[8],M=r[9],x=r[10],g=r[11],b=r[12],E=r[13],S=r[14],P=r[15];if(s[0].setComponents(c-a,d-h,g-m,P-b).normalize(),s[1].setComponents(c+a,d+h,g+m,P+b).normalize(),s[2].setComponents(c+o,d+f,g+M,P+E).normalize(),s[3].setComponents(c-o,d-f,g-M,P-E).normalize(),i)s[4].setComponents(l,u,x,S).normalize(),s[5].setComponents(c-l,d-u,g-x,P-S).normalize();else if(s[4].setComponents(c-l,d-u,g-x,P-S).normalize(),t===$n)s[5].setComponents(c+l,d+u,g+x,P+S).normalize();else if(t===vr)s[5].setComponents(l,u,x,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ps.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ps.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ps)}intersectsSprite(e){Ps.center.set(0,0,0);let t=ag.distanceTo(e.center);return Ps.radius=.7071067811865476+t,Ps.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ps)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(ko.x=s.normal.x>0?e.max.x:e.min.x,ko.y=s.normal.y>0?e.max.y:e.min.y,ko.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ko)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},_d=new _t,ll=class n{constructor(){this.coordinateSystem=$n,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,i=this._frustums;for(let s=0;s<t.length;s++){let r=t[s];_d.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),i[s]===void 0&&(i[s]=new rs),i[s].setFromProjectionMatrix(_d,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,i=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new rs),t[s].copy(i[s]);return this._count=e._count,this}clone(){return new n().copy(this)}};var Ma=class extends In{constructor(e=[],t=Bs,i,s,r,a,o,l,c,h){super(e,t,i,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Fi=class extends In{constructor(e,t,i,s,r,a,o,l,c){super(e,t,i,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Oi=class extends In{constructor(e,t,i=hi,s,r,a,o=dn,l=dn,c,h=Di,f=1){if(h!==Di&&h!==Hi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:e,height:t,depth:f};super(u,s,r,a,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new br(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},ba=class extends Oi{constructor(e,t=hi,i=Bs,s,r,a=dn,o=dn,l,c=Di){let h={width:e,height:e,depth:1},f=[h,h,h,h,h,h];super(e,e,t,i,s,r,a,o,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Sa=class extends In{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},rn=class n extends Xt{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],f=[],u=0,d=0;m("z","y","x",-1,-1,i,t,e,a,r,0),m("z","y","x",1,-1,i,t,-e,a,r,1),m("x","z","y",1,1,e,i,t,s,a,2),m("x","z","y",1,-1,e,i,-t,s,a,3),m("x","y","z",1,-1,e,t,i,s,r,4),m("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new it(c,3)),this.setAttribute("normal",new it(h,3)),this.setAttribute("uv",new it(f,2));function m(M,x,g,b,E,S,P,A,p,v,C){let y=S/p,w=P/v,R=S/2,_=P/2,T=A/2,I=p+1,N=v+1,B=0,k=0,F=new W;for(let U=0;U<N;U++){let H=U*w-_;for(let Z=0;Z<I;Z++){let $=Z*y-R;F[M]=$*b,F[x]=H*E,F[g]=T,c.push(F.x,F.y,F.z),F[M]=0,F[x]=0,F[g]=A>0?1:-1,h.push(F.x,F.y,F.z),f.push(Z/p),f.push(1-U/v),B+=1}}for(let U=0;U<v;U++)for(let H=0;H<p;H++){let Z=u+H+I*U,$=u+H+I*(U+1),G=u+(H+1)+I*(U+1),ee=u+(H+1)+I*U;l.push(Z,$,ee),l.push($,G,ee),k+=6}o.addGroup(d,k,C),d+=k,u+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var as=class n extends Xt{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);let r=[],a=[],o=[],l=[],c=new W,h=new pe;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let f=0,u=3;f<=t;f++,u+=3){let d=i+f/t*s;c.x=e*Math.cos(d),c.y=e*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[u]/e+1)/2,h.y=(a[u+1]/e+1)/2,l.push(h.x,h.y)}for(let f=1;f<=t;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new it(a,3)),this.setAttribute("normal",new it(o,3)),this.setAttribute("uv",new it(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}},os=class n extends Xt{constructor(e=1,t=1,i=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],f=[],u=[],d=[],m=0,M=[],x=i/2,g=0;b(),a===!1&&(e>0&&E(!0),t>0&&E(!1)),this.setIndex(h),this.setAttribute("position",new it(f,3)),this.setAttribute("normal",new it(u,3)),this.setAttribute("uv",new it(d,2));function b(){let S=new W,P=new W,A=0,p=(t-e)/i;for(let v=0;v<=r;v++){let C=[],y=v/r,w=y*(t-e)+e;for(let R=0;R<=s;R++){let _=R/s,T=_*l+o,I=Math.sin(T),N=Math.cos(T);P.x=w*I,P.y=-y*i+x,P.z=w*N,f.push(P.x,P.y,P.z),S.set(I,p,N).normalize(),u.push(S.x,S.y,S.z),d.push(_,1-y),C.push(m++)}M.push(C)}for(let v=0;v<s;v++)for(let C=0;C<r;C++){let y=M[C][v],w=M[C+1][v],R=M[C+1][v+1],_=M[C][v+1];(e>0||C!==0)&&(h.push(y,w,_),A+=3),(t>0||C!==r-1)&&(h.push(w,R,_),A+=3)}c.addGroup(g,A,0),g+=A}function E(S){let P=m,A=new pe,p=new W,v=0,C=S===!0?e:t,y=S===!0?1:-1;for(let R=1;R<=s;R++)f.push(0,x*y,0),u.push(0,y,0),d.push(.5,.5),m++;let w=m;for(let R=0;R<=s;R++){let T=R/s*l+o,I=Math.cos(T),N=Math.sin(T);p.x=C*N,p.y=x*y,p.z=C*I,f.push(p.x,p.y,p.z),u.push(0,y,0),A.x=I*.5+.5,A.y=N*.5*y+.5,d.push(A.x,A.y),m++}for(let R=0;R<s;R++){let _=P+R,T=w+R;S===!0?h.push(T,T+1,_):h.push(T+1,T,_),v+=3}c.addGroup(g,v,S===!0?1:2),g+=v}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Ls=class n extends os{constructor(e=1,t=1,i=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,i,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Ta=class n extends Xt{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};let r=[],a=[];o(s),c(i),h(),this.setAttribute("position",new it(r,3)),this.setAttribute("normal",new it(r.slice(),3)),this.setAttribute("uv",new it(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(b){let E=new W,S=new W,P=new W;for(let A=0;A<t.length;A+=3)d(t[A+0],E),d(t[A+1],S),d(t[A+2],P),l(E,S,P,b)}function l(b,E,S,P){let A=P+1,p=[];for(let v=0;v<=A;v++){p[v]=[];let C=b.clone().lerp(S,v/A),y=E.clone().lerp(S,v/A),w=A-v;for(let R=0;R<=w;R++)R===0&&v===A?p[v][R]=C:p[v][R]=C.clone().lerp(y,R/w)}for(let v=0;v<A;v++)for(let C=0;C<2*(A-v)-1;C++){let y=Math.floor(C/2);C%2===0?(u(p[v][y+1]),u(p[v+1][y]),u(p[v][y])):(u(p[v][y+1]),u(p[v+1][y+1]),u(p[v+1][y]))}}function c(b){let E=new W;for(let S=0;S<r.length;S+=3)E.x=r[S+0],E.y=r[S+1],E.z=r[S+2],E.normalize().multiplyScalar(b),r[S+0]=E.x,r[S+1]=E.y,r[S+2]=E.z}function h(){let b=new W;for(let E=0;E<r.length;E+=3){b.x=r[E+0],b.y=r[E+1],b.z=r[E+2];let S=x(b)/2/Math.PI+.5,P=g(b)/Math.PI+.5;a.push(S,1-P)}m(),f()}function f(){for(let b=0;b<a.length;b+=6){let E=a[b+0],S=a[b+2],P=a[b+4],A=Math.max(E,S,P),p=Math.min(E,S,P);A>.9&&p<.1&&(E<.2&&(a[b+0]+=1),S<.2&&(a[b+2]+=1),P<.2&&(a[b+4]+=1))}}function u(b){r.push(b.x,b.y,b.z)}function d(b,E){let S=b*3;E.x=e[S+0],E.y=e[S+1],E.z=e[S+2]}function m(){let b=new W,E=new W,S=new W,P=new W,A=new pe,p=new pe,v=new pe;for(let C=0,y=0;C<r.length;C+=9,y+=6){b.set(r[C+0],r[C+1],r[C+2]),E.set(r[C+3],r[C+4],r[C+5]),S.set(r[C+6],r[C+7],r[C+8]),A.set(a[y+0],a[y+1]),p.set(a[y+2],a[y+3]),v.set(a[y+4],a[y+5]),P.copy(b).add(E).add(S).divideScalar(3);let w=x(P);M(A,y+0,b,w),M(p,y+2,E,w),M(v,y+4,S,w)}}function M(b,E,S,P){P<0&&b.x===1&&(a[E]=b.x-1),S.x===0&&S.z===0&&(a[E]=P/2/Math.PI+.5)}function x(b){return Math.atan2(b.z,-b.x)}function g(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.detail)}};var Vn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ge("Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),s=0,r=i.length,a;t?a=t:a=e*i[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=i[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===a)return s/(r-1);let h=i[s],u=i[s+1]-h,d=(a-h)/u;return(s+d)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new pe:new W);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new W,s=[],r=[],a=[],o=new W,l=new _t;for(let d=0;d<=e;d++){let m=d/e;s[d]=this.getTangentAt(m,new W)}r[0]=new W,a[0]=new W;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),f=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),f<=c&&(c=f,i.set(0,1,0)),u<=c&&i.set(0,0,1),o.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(s[d-1],s[d]),o.length()>Number.EPSILON){o.normalize();let m=Math.acos(ct(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(o,m))}a[d].crossVectors(s[d],r[d])}if(t===!0){let d=Math.acos(ct(r[0].dot(r[e]),-1,1));d/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(d=-d);for(let m=1;m<=e;m++)r[m].applyMatrix4(l.makeRotationAxis(s[m],d*m)),a[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}},Er=class extends Vn{constructor(e=0,t=0,i=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new pe){let i=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),u=l-this.aX,d=c-this.aY;l=u*h-d*f+this.aX,c=u*f+d*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},cl=class extends Er{constructor(e,t,i,s,r,a){super(e,t,i,i,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function _u(){let n=0,e=0,t=0,i=0;function s(r,a,o,l){n=r,e=o,t=-3*r+3*a-2*o-l,i=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,f){let u=(a-r)/c-(o-r)/(c+h)+(o-a)/h,d=(o-a)/h-(l-a)/(h+f)+(l-o)/f;u*=h,d*=h,s(a,o,u,d)},calc:function(r){let a=r*r,o=a*r;return n+e*r+t*a+i*o}}}var vd=new W,Md=new W,Nh=new _u,Dh=new _u,Uh=new _u,hl=class extends Vn{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new W){let i=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(Md.subVectors(s[0],s[1]).add(s[0]),c=Md);let f=s[o%r],u=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(vd.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=vd),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,m=Math.pow(c.distanceToSquared(f),d),M=Math.pow(f.distanceToSquared(u),d),x=Math.pow(u.distanceToSquared(h),d);M<1e-4&&(M=1),m<1e-4&&(m=M),x<1e-4&&(x=M),Nh.initNonuniformCatmullRom(c.x,f.x,u.x,h.x,m,M,x),Dh.initNonuniformCatmullRom(c.y,f.y,u.y,h.y,m,M,x),Uh.initNonuniformCatmullRom(c.z,f.z,u.z,h.z,m,M,x)}else this.curveType==="catmullrom"&&(Nh.initCatmullRom(c.x,f.x,u.x,h.x,this.tension),Dh.initCatmullRom(c.y,f.y,u.y,h.y,this.tension),Uh.initCatmullRom(c.z,f.z,u.z,h.z,this.tension));return i.set(Nh.calc(l),Dh.calc(l),Uh.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new W().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function bd(n,e,t,i,s){let r=(i-e)*.5,a=(s-t)*.5,o=n*n,l=n*o;return(2*t-2*i+r+a)*l+(-3*t+3*i-2*r-a)*o+r*n+t}function og(n,e){let t=1-n;return t*t*e}function lg(n,e){return 2*(1-n)*n*e}function cg(n,e){return n*n*e}function aa(n,e,t,i){return og(n,e)+lg(n,t)+cg(n,i)}function hg(n,e){let t=1-n;return t*t*t*e}function ug(n,e){let t=1-n;return 3*t*t*n*e}function fg(n,e){return 3*(1-n)*n*n*e}function dg(n,e){return n*n*n*e}function oa(n,e,t,i,s){return hg(n,e)+ug(n,t)+fg(n,i)+dg(n,s)}var wa=class extends Vn{constructor(e=new pe,t=new pe,i=new pe,s=new pe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new pe){let i=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(oa(e,s.x,r.x,a.x,o.x),oa(e,s.y,r.y,a.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ul=class extends Vn{constructor(e=new W,t=new W,i=new W,s=new W){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new W){let i=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(oa(e,s.x,r.x,a.x,o.x),oa(e,s.y,r.y,a.y,o.y),oa(e,s.z,r.z,a.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ea=class extends Vn{constructor(e=new pe,t=new pe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new pe){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new pe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},fl=class extends Vn{constructor(e=new W,t=new W){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new W){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new W){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Aa=class extends Vn{constructor(e=new pe,t=new pe,i=new pe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new pe){let i=t,s=this.v0,r=this.v1,a=this.v2;return i.set(aa(e,s.x,r.x,a.x),aa(e,s.y,r.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},dl=class extends Vn{constructor(e=new W,t=new W,i=new W){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new W){let i=t,s=this.v0,r=this.v1,a=this.v2;return i.set(aa(e,s.x,r.x,a.x),aa(e,s.y,r.y,a.y),aa(e,s.z,r.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ra=class extends Vn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new pe){let i=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],f=s[a>s.length-3?s.length-1:a+2];return i.set(bd(o,l.x,c.x,h.x,f.x),bd(o,l.y,c.y,h.y,f.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new pe().fromArray(s))}return this}},Hh=Object.freeze({__proto__:null,ArcCurve:cl,CatmullRomCurve3:hl,CubicBezierCurve:wa,CubicBezierCurve3:ul,EllipseCurve:Er,LineCurve:Ea,LineCurve3:fl,QuadraticBezierCurve:Aa,QuadraticBezierCurve3:dl,SplineCurve:Ra}),pl=class extends Vn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Hh[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let a=s[r]-i,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this.cacheLengths=null,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(new Hh[s.type]().fromJSON(s))}return this.cacheLengths=null,this}},Ca=class extends pl{constructor(e){super(),this.type="Path",this.currentPoint=new pe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new Ea(this.currentPoint.clone(),new pe(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){let r=new Aa(this.currentPoint.clone(),new pe(e,t),new pe(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,a){let o=new wa(this.currentPoint.clone(),new pe(e,t),new pe(i,s),new pe(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new Ra(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,i,s,r,a),this}absarc(e,t,i,s,r,a){return this.absellipse(e,t,i,i,s,r,a),this}ellipse(e,t,i,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,i,s,r,a,o,l),this}absellipse(e,t,i,s,r,a,o,l){let c=new Er(e,t,i,s,r,a,o,l);if(this.curves.length>0){let f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Ar=class extends Ca{constructor(e){super(e),this.uuid=ps(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(new Ca().fromJSON(s))}return this}};function pg(n,e,t=2){let i=e&&e.length,s=i?e[0]*t:n.length,r=_p(n,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(i&&(r=_g(n,e,r,t)),n.length>80*t){o=n[0],l=n[1];let h=o,f=l;for(let u=t;u<s;u+=t){let d=n[u],m=n[u+1];d<o&&(o=d),m<l&&(l=m),d>h&&(h=d),m>f&&(f=m)}c=Math.max(h-o,f-l),c=c!==0?32767/c:0}return Pa(r,a,t,o,l,c,0),a}function _p(n,e,t,i,s){let r;if(s===Pg(n,e,t,i)>0)for(let a=e;a<t;a+=i)r=Sd(a/i|0,n[a],n[a+1],r);else for(let a=t-i;a>=e;a-=i)r=Sd(a/i|0,n[a],n[a+1],r);return r&&Rr(r,r.next)&&(La(r),r=r.next),r}function Ns(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(Rr(t,t.next)||Bt(t.prev,t,t.next)===0)){if(La(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function Pa(n,e,t,i,s,r,a){if(!n)return;!a&&r&&Tg(n,i,s,r);let o=n;for(;n.prev!==n.next;){let l=n.prev,c=n.next;if(r?gg(n,i,s,r):mg(n)){e.push(l.i,n.i,c.i),La(n),n=c.next,o=c.next;continue}if(n=c,n===o){a?a===1?(n=xg(Ns(n),e),Pa(n,e,t,i,s,r,2)):a===2&&yg(n,e,t,i,s,r):Pa(Ns(n),e,t,i,s,r,1);break}}}function mg(n){let e=n.prev,t=n,i=n.next;if(Bt(e,t,i)>=0)return!1;let s=e.x,r=t.x,a=i.x,o=e.y,l=t.y,c=i.y,h=Math.min(s,r,a),f=Math.min(o,l,c),u=Math.max(s,r,a),d=Math.max(o,l,c),m=i.next;for(;m!==e;){if(m.x>=h&&m.x<=u&&m.y>=f&&m.y<=d&&sa(s,o,r,l,a,c,m.x,m.y)&&Bt(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function gg(n,e,t,i){let s=n.prev,r=n,a=n.next;if(Bt(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,f=r.y,u=a.y,d=Math.min(o,l,c),m=Math.min(h,f,u),M=Math.max(o,l,c),x=Math.max(h,f,u),g=Vh(d,m,e,t,i),b=Vh(M,x,e,t,i),E=n.prevZ,S=n.nextZ;for(;E&&E.z>=g&&S&&S.z<=b;){if(E.x>=d&&E.x<=M&&E.y>=m&&E.y<=x&&E!==s&&E!==a&&sa(o,h,l,f,c,u,E.x,E.y)&&Bt(E.prev,E,E.next)>=0||(E=E.prevZ,S.x>=d&&S.x<=M&&S.y>=m&&S.y<=x&&S!==s&&S!==a&&sa(o,h,l,f,c,u,S.x,S.y)&&Bt(S.prev,S,S.next)>=0))return!1;S=S.nextZ}for(;E&&E.z>=g;){if(E.x>=d&&E.x<=M&&E.y>=m&&E.y<=x&&E!==s&&E!==a&&sa(o,h,l,f,c,u,E.x,E.y)&&Bt(E.prev,E,E.next)>=0)return!1;E=E.prevZ}for(;S&&S.z<=b;){if(S.x>=d&&S.x<=M&&S.y>=m&&S.y<=x&&S!==s&&S!==a&&sa(o,h,l,f,c,u,S.x,S.y)&&Bt(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function xg(n,e){let t=n;do{let i=t.prev,s=t.next.next;!Rr(i,s)&&Mp(i,t,t.next,s)&&Ia(i,s)&&Ia(s,i)&&(e.push(i.i,t.i,s.i),La(t),La(t.next),t=n=s),t=t.next}while(t!==n);return Ns(t)}function yg(n,e,t,i,s,r){let a=n;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Ag(a,o)){let l=bp(a,o);a=Ns(a,a.next),l=Ns(l,l.next),Pa(a,e,t,i,s,r,0),Pa(l,e,t,i,s,r,0);return}o=o.next}a=a.next}while(a!==n)}function _g(n,e,t,i){let s=[];for(let r=0,a=e.length;r<a;r++){let o=e[r]*i,l=r<a-1?e[r+1]*i:n.length,c=_p(n,o,l,i,!1);c===c.next&&(c.steiner=!0),s.push(Eg(c))}s.sort(vg);for(let r=0;r<s.length;r++)t=Mg(s[r],t);return t}function vg(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){let i=(n.next.y-n.y)/(n.next.x-n.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=i-s}return t}function Mg(n,e){let t=bg(n,e);if(!t)return e;let i=bp(t,n);return Ns(i,i.next),Ns(t,t.next)}function bg(n,e){let t=e,i=n.x,s=n.y,r=-1/0,a;if(Rr(n,t))return t;do{if(Rr(n,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let f=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=i&&f>r&&(r=f,a=t.x<t.next.x?t:t.next,f===i))return a}t=t.next}while(t!==e);if(!a)return null;let o=a,l=a.x,c=a.y,h=1/0;t=a;do{if(i>=t.x&&t.x>=l&&i!==t.x&&vp(s<c?i:r,s,l,c,s<c?r:i,s,t.x,t.y)){let f=Math.abs(s-t.y)/(i-t.x);Ia(t,n)&&(f<h||f===h&&(t.x>a.x||t.x===a.x&&Sg(a,t)))&&(a=t,h=f)}t=t.next}while(t!==o);return a}function Sg(n,e){return Bt(n.prev,n,e.prev)<0&&Bt(e.next,n,n.next)<0}function Tg(n,e,t,i){let s=n;do s.z===0&&(s.z=Vh(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,wg(s)}function wg(n){let e,t=1;do{let i=n,s;n=null;let r=null;for(e=0;i;){e++;let a=i,o=0;for(let c=0;c<t&&(o++,a=a.nextZ,!!a);c++);let l=t;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||i.z<=a.z)?(s=i,i=i.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=a}r.nextZ=null,t*=2}while(e>1);return n}function Vh(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function Eg(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function vp(n,e,t,i,s,r,a,o){return(s-a)*(e-o)>=(n-a)*(r-o)&&(n-a)*(i-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(i-o)}function sa(n,e,t,i,s,r,a,o){return!(n===a&&e===o)&&vp(n,e,t,i,s,r,a,o)}function Ag(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!Rg(n,e)&&(Ia(n,e)&&Ia(e,n)&&Cg(n,e)&&(Bt(n.prev,n,e.prev)||Bt(n,e.prev,e))||Rr(n,e)&&Bt(n.prev,n,n.next)>0&&Bt(e.prev,e,e.next)>0)}function Bt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function Rr(n,e){return n.x===e.x&&n.y===e.y}function Mp(n,e,t,i){let s=Vo(Bt(n,e,t)),r=Vo(Bt(n,e,i)),a=Vo(Bt(t,i,n)),o=Vo(Bt(t,i,e));return!!(s!==r&&a!==o||s===0&&Ho(n,t,e)||r===0&&Ho(n,i,e)||a===0&&Ho(t,n,i)||o===0&&Ho(t,e,i))}function Ho(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function Vo(n){return n>0?1:n<0?-1:0}function Rg(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&Mp(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function Ia(n,e){return Bt(n.prev,n,n.next)<0?Bt(n,e,n.next)>=0&&Bt(n,n.prev,e)>=0:Bt(n,e,n.prev)<0||Bt(n,n.next,e)<0}function Cg(n,e){let t=n,i=!1,s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function bp(n,e){let t=Gh(n.i,n.x,n.y),i=Gh(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function Sd(n,e,t,i){let s=Gh(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function La(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Gh(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Pg(n,e,t,i){let s=0;for(let r=e,a=t-i;r<t;r+=i)s+=(n[a]-n[r])*(n[r+1]+n[a+1]),a=r;return s}var Wh=class{static triangulate(e,t,i=2){return pg(e,t,i)}},Is=class n{static area(e){let t=e.length,i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return n.area(e)<0}static triangulateShape(e,t){let i=[],s=[],r=[];Td(e),wd(i,e);let a=e.length;t.forEach(Td);for(let l=0;l<t.length;l++)s.push(a),a+=t[l].length,wd(i,t[l]);let o=Wh.triangulate(i,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function Td(n){let e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function wd(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}var Na=class n extends Xt{constructor(e=new Ar([new pe(.5,.5),new pe(-.5,.5),new pe(-.5,-.5),new pe(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,s=[],r=[];for(let o=0,l=e.length;o<l;o++){let c=e[o];a(c)}this.setAttribute("position",new it(s,3)),this.setAttribute("uv",new it(r,2)),this.computeVertexNormals();function a(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,f=t.depth!==void 0?t.depth:1,u=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,m=t.bevelSize!==void 0?t.bevelSize:d-.1,M=t.bevelOffset!==void 0?t.bevelOffset:0,x=t.bevelSegments!==void 0?t.bevelSegments:3,g=t.extrudePath,b=t.UVGenerator!==void 0?t.UVGenerator:Ig,E,S=!1,P,A,p,v;if(g){E=g.getSpacedPoints(h),S=!0,u=!1;let ae=g.isCatmullRomCurve3?g.closed:!1;P=g.computeFrenetFrames(h,ae),A=new W,p=new W,v=new W}u||(x=0,d=0,m=0,M=0);let C=o.extractPoints(c),y=C.shape,w=C.holes;if(!Is.isClockWise(y)){y=y.reverse();for(let ae=0,xe=w.length;ae<xe;ae++){let ge=w[ae];Is.isClockWise(ge)&&(w[ae]=ge.reverse())}}function _(ae){let ge=10000000000000001e-36,Ie=ae[0];for(let Ee=1;Ee<=ae.length;Ee++){let Ke=Ee%ae.length,Be=ae[Ke],lt=Be.x-Ie.x,ht=Be.y-Ie.y,yt=lt*lt+ht*ht,Y=Math.max(Math.abs(Be.x),Math.abs(Be.y),Math.abs(Ie.x),Math.abs(Ie.y)),Qt=ge*Y*Y;if(yt<=Qt){ae.splice(Ke,1),Ee--;continue}Ie=Be}}_(y),w.forEach(_);let T=w.length,I=y;for(let ae=0;ae<T;ae++){let xe=w[ae];y=y.concat(xe)}function N(ae,xe,ge){return xe||Xe("ExtrudeGeometry: vec does not exist"),ae.clone().addScaledVector(xe,ge)}let B=y.length;function k(ae,xe,ge){let Ie,Ee,Ke,Be=ae.x-xe.x,lt=ae.y-xe.y,ht=ge.x-ae.x,yt=ge.y-ae.y,Y=Be*Be+lt*lt,Qt=Be*yt-lt*ht;if(Math.abs(Qt)>Number.EPSILON){let at=Math.sqrt(Y),wt=Math.sqrt(ht*ht+yt*yt),Se=xe.x-lt/at,Gt=xe.y+Be/at,Ve=ge.x-yt/wt,Ze=ge.y+ht/wt,z=((Ve-Se)*yt-(Ze-Gt)*ht)/(Be*yt-lt*ht);Ie=Se+Be*z-ae.x,Ee=Gt+lt*z-ae.y;let L=Ie*Ie+Ee*Ee;if(L<=2)return new pe(Ie,Ee);Ke=Math.sqrt(L/2)}else{let at=!1;Be>Number.EPSILON?ht>Number.EPSILON&&(at=!0):Be<-Number.EPSILON?ht<-Number.EPSILON&&(at=!0):Math.sign(lt)===Math.sign(yt)&&(at=!0),at?(Ie=-lt,Ee=Be,Ke=Math.sqrt(Y)):(Ie=Be,Ee=lt,Ke=Math.sqrt(Y/2))}return new pe(Ie/Ke,Ee/Ke)}let F=[];for(let ae=0,xe=I.length,ge=xe-1,Ie=ae+1;ae<xe;ae++,ge++,Ie++)ge===xe&&(ge=0),Ie===xe&&(Ie=0),F[ae]=k(I[ae],I[ge],I[Ie]);let U=[],H,Z=F.concat();for(let ae=0,xe=T;ae<xe;ae++){let ge=w[ae];H=[];for(let Ie=0,Ee=ge.length,Ke=Ee-1,Be=Ie+1;Ie<Ee;Ie++,Ke++,Be++)Ke===Ee&&(Ke=0),Be===Ee&&(Be=0),H[Ie]=k(ge[Ie],ge[Ke],ge[Be]);U.push(H),Z=Z.concat(H)}let $;if(x===0)$=Is.triangulateShape(I,w);else{let ae=[],xe=[];for(let ge=0;ge<x;ge++){let Ie=ge/x,Ee=d*Math.cos(Ie*Math.PI/2),Ke=m*Math.sin(Ie*Math.PI/2)+M;for(let Be=0,lt=I.length;Be<lt;Be++){let ht=N(I[Be],F[Be],Ke);he(ht.x,ht.y,-Ee),Ie===0&&ae.push(ht)}for(let Be=0,lt=T;Be<lt;Be++){let ht=w[Be];H=U[Be];let yt=[];for(let Y=0,Qt=ht.length;Y<Qt;Y++){let at=N(ht[Y],H[Y],Ke);he(at.x,at.y,-Ee),Ie===0&&yt.push(at)}Ie===0&&xe.push(yt)}}$=Is.triangulateShape(ae,xe)}let G=$.length,ee=m+M;for(let ae=0;ae<B;ae++){let xe=u?N(y[ae],Z[ae],ee):y[ae];S?(p.copy(P.normals[0]).multiplyScalar(xe.x),A.copy(P.binormals[0]).multiplyScalar(xe.y),v.copy(E[0]).add(p).add(A),he(v.x,v.y,v.z)):he(xe.x,xe.y,0)}for(let ae=1;ae<=h;ae++)for(let xe=0;xe<B;xe++){let ge=u?N(y[xe],Z[xe],ee):y[xe];S?(p.copy(P.normals[ae]).multiplyScalar(ge.x),A.copy(P.binormals[ae]).multiplyScalar(ge.y),v.copy(E[ae]).add(p).add(A),he(v.x,v.y,v.z)):he(ge.x,ge.y,f/h*ae)}for(let ae=x-1;ae>=0;ae--){let xe=ae/x,ge=d*Math.cos(xe*Math.PI/2),Ie=m*Math.sin(xe*Math.PI/2)+M;for(let Ee=0,Ke=I.length;Ee<Ke;Ee++){let Be=N(I[Ee],F[Ee],Ie);he(Be.x,Be.y,f+ge)}for(let Ee=0,Ke=w.length;Ee<Ke;Ee++){let Be=w[Ee];H=U[Ee];for(let lt=0,ht=Be.length;lt<ht;lt++){let yt=N(Be[lt],H[lt],Ie);S?he(yt.x,yt.y+E[h-1].y,E[h-1].x+ge):he(yt.x,yt.y,f+ge)}}}te(),le();function te(){let ae=s.length/3;if(u){let xe=0,ge=B*xe;for(let Ie=0;Ie<G;Ie++){let Ee=$[Ie];ze(Ee[2]+ge,Ee[1]+ge,Ee[0]+ge)}xe=h+x*2,ge=B*xe;for(let Ie=0;Ie<G;Ie++){let Ee=$[Ie];ze(Ee[0]+ge,Ee[1]+ge,Ee[2]+ge)}}else{for(let xe=0;xe<G;xe++){let ge=$[xe];ze(ge[2],ge[1],ge[0])}for(let xe=0;xe<G;xe++){let ge=$[xe];ze(ge[0]+B*h,ge[1]+B*h,ge[2]+B*h)}}i.addGroup(ae,s.length/3-ae,0)}function le(){let ae=s.length/3,xe=0;ce(I,xe),xe+=I.length;for(let ge=0,Ie=w.length;ge<Ie;ge++){let Ee=w[ge];ce(Ee,xe),xe+=Ee.length}i.addGroup(ae,s.length/3-ae,1)}function ce(ae,xe){let ge=ae.length;for(;--ge>=0;){let Ie=ge,Ee=ge-1;Ee<0&&(Ee=ae.length-1);for(let Ke=0,Be=h+x*2;Ke<Be;Ke++){let lt=B*Ke,ht=B*(Ke+1),yt=xe+Ie+lt,Y=xe+Ee+lt,Qt=xe+Ee+ht,at=xe+Ie+ht;Pe(yt,Y,Qt,at)}}}function he(ae,xe,ge){l.push(ae),l.push(xe),l.push(ge)}function ze(ae,xe,ge){Oe(ae),Oe(xe),Oe(ge);let Ie=s.length/3,Ee=b.generateTopUV(i,s,Ie-3,Ie-2,Ie-1);je(Ee[0]),je(Ee[1]),je(Ee[2])}function Pe(ae,xe,ge,Ie){Oe(ae),Oe(xe),Oe(Ie),Oe(xe),Oe(ge),Oe(Ie);let Ee=s.length/3,Ke=b.generateSideWallUV(i,s,Ee-6,Ee-3,Ee-2,Ee-1);je(Ke[0]),je(Ke[1]),je(Ke[3]),je(Ke[1]),je(Ke[2]),je(Ke[3])}function Oe(ae){s.push(l[ae*3+0]),s.push(l[ae*3+1]),s.push(l[ae*3+2])}function je(ae){r.push(ae.x),r.push(ae.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return Lg(t,i,e)}static fromJSON(e,t){let i=[];for(let r=0,a=e.shapes.length;r<a;r++){let o=t[e.shapes[r]];i.push(o)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Hh[s.type]().fromJSON(s)),new n(i,e.options)}},Ig={generateTopUV:function(n,e,t,i,s){let r=e[t*3],a=e[t*3+1],o=e[i*3],l=e[i*3+1],c=e[s*3],h=e[s*3+1];return[new pe(r,a),new pe(o,l),new pe(c,h)]},generateSideWallUV:function(n,e,t,i,s,r){let a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[i*3],h=e[i*3+1],f=e[i*3+2],u=e[s*3],d=e[s*3+1],m=e[s*3+2],M=e[r*3],x=e[r*3+1],g=e[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new pe(a,1-l),new pe(c,1-f),new pe(u,1-m),new pe(M,1-g)]:[new pe(o,1-l),new pe(h,1-f),new pe(d,1-m),new pe(x,1-g)]}};function Lg(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){let r=n[i];t.shapes.push(r.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var ls=class n extends Ta{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}};var Ds=class n extends Ta{constructor(e=1,t=0){let i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},Zn=class n extends Xt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(i),l=Math.floor(s),c=o+1,h=l+1,f=e/o,u=t/l,d=[],m=[],M=[],x=[];for(let g=0;g<h;g++){let b=g*u-a;for(let E=0;E<c;E++){let S=E*f-r;m.push(S,-b,0),M.push(0,0,1),x.push(E/o),x.push(1-g/l)}}for(let g=0;g<l;g++)for(let b=0;b<o;b++){let E=b+c*g,S=b+c*(g+1),P=b+1+c*(g+1),A=b+1+c*g;d.push(E,S,A),d.push(S,P,A)}this.setIndex(d),this.setAttribute("position",new it(m,3)),this.setAttribute("normal",new it(M,3)),this.setAttribute("uv",new it(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}};var Bi=class n extends Xt{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(a+o,Math.PI),c=0,h=[],f=new W,u=new W,d=[],m=[],M=[],x=[];for(let g=0;g<=i;g++){let b=[],E=g/i,S=a+E*o,P=e*Math.cos(S),A=Math.sqrt(e*e-P*P),p=0;g===0&&a===0?p=.5/t:g===i&&l===Math.PI&&(p=-.5/t);for(let v=0;v<=t;v++){let C=v/t,y=s+C*r;f.x=-A*Math.cos(y),f.y=P,f.z=A*Math.sin(y),m.push(f.x,f.y,f.z),u.copy(f).normalize(),M.push(u.x,u.y,u.z),x.push(C+p,1-E),b.push(c++)}h.push(b)}for(let g=0;g<i;g++)for(let b=0;b<t;b++){let E=h[g][b+1],S=h[g][b],P=h[g+1][b],A=h[g+1][b+1];(g!==0||a>0)&&d.push(E,S,A),(g!==i-1||l<Math.PI)&&d.push(S,P,A)}this.setIndex(d),this.setAttribute("position",new it(m,3)),this.setAttribute("normal",new it(M,3)),this.setAttribute("uv",new it(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Da=class n extends Xt{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},i=Math.floor(i),s=Math.floor(s);let l=[],c=[],h=[],f=[],u=new W,d=new W,m=new W;for(let M=0;M<=i;M++){let x=a+M/i*o;for(let g=0;g<=s;g++){let b=g/s*r;d.x=(e+t*Math.cos(x))*Math.cos(b),d.y=(e+t*Math.cos(x))*Math.sin(b),d.z=t*Math.sin(x),c.push(d.x,d.y,d.z),u.x=e*Math.cos(b),u.y=e*Math.sin(b),m.subVectors(d,u).normalize(),h.push(m.x,m.y,m.z),f.push(g/s),f.push(M/i)}}for(let M=1;M<=i;M++)for(let x=1;x<=s;x++){let g=(s+1)*M+x-1,b=(s+1)*(M-1)+x-1,E=(s+1)*(M-1)+x,S=(s+1)*M+x;l.push(g,b,S),l.push(b,E,S)}this.setIndex(l),this.setAttribute("position",new it(c,3)),this.setAttribute("normal",new it(h,3)),this.setAttribute("uv",new it(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};function ks(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];if(Ed(s))s.isRenderTargetTexture?(Ge("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(Ed(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][i]=r}else e[t][i]=s.slice();else e[t][i]=s}}return e}function wn(n){let e={};for(let t=0;t<n.length;t++){let i=ks(n[t]);for(let s in i)e[s]=i[s]}return e}function Ed(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function Ng(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function vu(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:dt.workingColorSpace}var Sp={clone:ks,merge:wn},Dg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ug=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Kn=class extends Ui{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Dg,this.fragmentShader=Ug,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ks(e.uniforms),this.uniformsGroups=Ng(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=t[s.value]||null;break;case"c":this.uniforms[i].value=new We().setHex(s.value);break;case"v2":this.uniforms[i].value=new pe().fromArray(s.value);break;case"v3":this.uniforms[i].value=new W().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Lt().fromArray(s.value);break;case"m3":this.uniforms[i].value=new Je().fromArray(s.value);break;case"m4":this.uniforms[i].value=new _t().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},ml=class extends Kn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var an=class extends Ui{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new We(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new We(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=xc,this.normalScale=new pe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new li,this.combine=Pl,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},gl=class extends Ui{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=np,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},xl=class extends Ui{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function pr(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function Go(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var cs=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];e:{t:{let a;n:{i:if(!(e<s)){for(let o=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=s,s=t[++i],e<s)break t}a=t.length;break n}if(!(e>=r)){let o=t[1];e<o&&(i=2,r=o);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break t}a=i,i=0;break n}break e}for(;i<a;){let o=i+a>>>1;e<t[o]?a=o:i=o+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=i[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},yl=class extends cs{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Bh,endingEnd:Bh}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case zh:r=e,o=2*t-i;break;case kh:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case zh:a=e,l=2*i-t;break;case kh:a=1,l=i+s[1]-s[0];break;default:a=e-1,l=t}let c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,f=this._offsetNext,u=this._weightPrev,d=this._weightNext,m=(i-t)/(s-t),M=m*m,x=M*m,g=-u*x+2*u*M-u*m,b=(1+u)*x+(-1.5-2*u)*M+(-.5+u)*m+1,E=(-1-d)*x+(1.5+d)*M+.5*m,S=d*x-d*M;for(let P=0;P!==o;++P)r[P]=g*a[h+P]+b*a[c+P]+E*a[l+P]+S*a[f+P];return r}},_l=class extends cs{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(i-t)/(s-t),f=1-h;for(let u=0;u!==o;++u)r[u]=a[c+u]*f+a[l+u]*h;return r}},vl=class extends cs{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Ml=class extends cs{interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this.inTangents,f=this.outTangents;if(!h||!f){let m=(i-t)/(s-t),M=1-m;for(let x=0;x!==o;++x)r[x]=a[c+x]*M+a[l+x]*m;return r}let u=o*2,d=e-1;for(let m=0;m!==o;++m){let M=a[c+m],x=a[l+m],g=d*u+m*2,b=f[g],E=f[g+1],S=e*u+m*2,P=h[S],A=h[S+1],p=Og(i,t,b,P,s);r[m]=Tp(p,M,E,A,x)}return r}};function Tp(n,e,t,i,s){let r=1-n;return r*r*r*e+3*r*r*n*t+3*r*n*n*i+n*n*n*s}function Fg(n,e,t,i,s){let r=1-n;return 3*r*r*(t-e)+6*r*n*(i-t)+3*n*n*(s-i)}function Og(n,e,t,i,s){let r=(n-e)/(s-e);for(let a=0;a<8;a++){let o=Tp(r,e,t,i,s)-n;if(Math.abs(o)<1e-10)break;let l=Fg(r,e,t,i,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var Gn=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=pr(t,this.TimeBufferType),this.values=pr(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:pr(e.times,Array),values:pr(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s),Go(e.settings)&&(i.settings={inTangents:pr(e.settings.inTangents,Array),outTangents:pr(e.settings.outTangents,Array)})}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new vl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new _l(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new yl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Ml(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case la:t=this.InterpolantFactoryMethodDiscrete;break;case nl:t=this.InterpolantFactoryMethodLinear;break;case qo:t=this.InterpolantFactoryMethodSmooth;break;case Oh:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Ge("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return la;case this.InterpolantFactoryMethodLinear:return nl;case this.InterpolantFactoryMethodSmooth:return qo;case this.InterpolantFactoryMethodBezier:return Oh}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e;Go(this.settings)&&(Ad(this.settings.inTangents,e),Ad(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e;Go(this.settings)&&(Rd(this.settings.inTangents,e),Rd(this.settings.outTangents,e))}return this}trim(e,t){let i=this.times,s=i.length,r=0,a=s-1;for(;r!==s&&i[r]<e;)++r;for(;a!==-1&&i[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Xe("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(Xe("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){Xe("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){Xe("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&km(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Xe("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===qo,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(s)l=!0;else{let f=o*i,u=f-i,d=f+i;for(let m=0;m!==i;++m){let M=t[f+m];if(M!==t[u+m]||M!==t[d+m]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let f=o*i,u=a*i;for(let d=0;d!==i;++d)t[u+d]=t[f+d]}++a}}if(r>0){e[a]=e[r];for(let o=r*i,l=a*i,c=0;c!==i;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,Go(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Ad(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]+=e}function Rd(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]*=e}Gn.prototype.ValueTypeName="";Gn.prototype.TimeBufferType=Float32Array;Gn.prototype.ValueBufferType=Float32Array;Gn.prototype.DefaultInterpolation=nl;var hs=class extends Gn{constructor(e,t,i){super(e,t,i)}};hs.prototype.ValueTypeName="bool";hs.prototype.ValueBufferType=Array;hs.prototype.DefaultInterpolation=la;hs.prototype.InterpolantFactoryMethodLinear=void 0;hs.prototype.InterpolantFactoryMethodSmooth=void 0;var bl=class extends Gn{constructor(e,t,i,s){super(e,t,i,s)}};bl.prototype.ValueTypeName="color";var Sl=class extends Gn{constructor(e,t,i,s){super(e,t,i,s)}};Sl.prototype.ValueTypeName="number";var Tl=class extends cs{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-t)/(s-t),c=e*o;for(let h=c+o;c!==h;c+=4)gi.slerpFlat(r,0,a,c-o,a,c,l);return r}},Ua=class extends Gn{constructor(e,t,i,s){super(e,t,i,s)}InterpolantFactoryMethodLinear(e){return new Tl(this.times,this.values,this.getValueSize(),e)}};Ua.prototype.ValueTypeName="quaternion";Ua.prototype.InterpolantFactoryMethodSmooth=void 0;var us=class extends Gn{constructor(e,t,i){super(e,t,i)}};us.prototype.ValueTypeName="string";us.prototype.ValueBufferType=Array;us.prototype.DefaultInterpolation=la;us.prototype.InterpolantFactoryMethodLinear=void 0;us.prototype.InterpolantFactoryMethodSmooth=void 0;var wl=class extends Gn{constructor(e,t,i,s){super(e,t,i,s)}};wl.prototype.ValueTypeName="vector";var El=class{constructor(e,t,i){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,f){return c.push(h,f),this},this.removeHandler=function(h){let f=c.indexOf(h);return f!==-1&&c.splice(f,2),this},this.getHandler=function(h){for(let f=0,u=c.length;f<u;f+=2){let d=c[f],m=c[f+1];if(d.global&&(d.lastIndex=0),d.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},wp=new El,Al=class{constructor(e){this.manager=e!==void 0?e:wp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};Al.DEFAULT_MATERIAL_NAME="__DEFAULT";var Us=class extends Wt{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new We(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},_i=class extends Us{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Wt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new We(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Fh=new _t,Cd=new W,Pd=new W,Fa=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new pe(512,512),this.mapType=Ln,this.map=null,this.mapPass=null,this.matrix=new _t,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new rs,this._frameExtents=new pe(1,1),this._viewportCount=1,this._viewports=[new Lt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Cd.setFromMatrixPosition(e.matrixWorld),t.position.copy(Cd),Pd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Pd),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,s){Fh.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(Fh,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===vr||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(Fh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Wo=new W,Xo=new gi,di=new W,Oa=class extends Wt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _t,this.projectionMatrix=new _t,this.projectionMatrixInverse=new _t,this.coordinateSystem=$n,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Wo,Xo,di),di.x===1&&di.y===1&&di.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Wo,Xo,di.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(Wo,Xo,di),di.x===1&&di.y===1&&di.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Wo,Xo,di.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},is=new W,Id=new pe,Ld=new pe,sn=class extends Oa{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=il*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(uh*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return il*2*Math.atan(Math.tan(uh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){is.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(is.x,is.y).multiplyScalar(-e/is.z),is.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(is.x,is.y).multiplyScalar(-e/is.z)}getViewSize(e,t){return this.getViewBounds(e,Id,Ld),t.subVectors(Ld,Id)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(uh*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var Xh=class extends Fa{constructor(){super(new sn(90,1,.5,500)),this.isPointLightShadow=!0}},Cr=class extends Us{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Xh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},zi=class extends Oa{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,a=i+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},qh=class extends Fa{constructor(){super(new zi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},vi=class extends Us{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Wt.DEFAULT_UP),this.updateMatrix(),this.target=new Wt,this.shadow=new qh}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},Ba=class extends Us{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var mr=-90,gr=1,Pr=class extends Wt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new sn(mr,gr,e,t);s.layers=this.layers,this.add(s);let r=new sn(mr,gr,e,t);r.layers=this.layers,this.add(r);let a=new sn(mr,gr,e,t);a.layers=this.layers,this.add(a);let o=new sn(mr,gr,e,t);o.layers=this.layers,this.add(o);let l=new sn(mr,gr,e,t);l.layers=this.layers,this.add(l);let c=new sn(mr,gr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===$n)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===vr)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,f=e.getRenderTarget(),u=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let M=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let x=!1;e.isWebGLRenderer===!0?x=e.state.buffers.depth.getReversed():x=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,s),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,s),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,s),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.mipmapsAutoUpdate=M,e.setRenderTarget(i,5,s),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(f,u,d),e.xr.enabled=m,i.texture.needsPMREMUpdate=!0}},Rl=class extends sn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}};var Mu="\\[\\]\\.:\\/",Bg=new RegExp("["+Mu+"]","g"),bu="[^"+Mu+"]",zg="[^"+Mu.replace("\\.","")+"]",kg=/((?:WC+[\/:])*)/.source.replace("WC",bu),Hg=/(WCOD+)?/.source.replace("WCOD",zg),Vg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",bu),Gg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",bu),Wg=new RegExp("^"+kg+Hg+Vg+Gg+"$"),Xg=["material","materials","bones","map"],Yh=class{constructor(e,t,i){let s=i||Ct.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Ct=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Bg,"")}static parseTrackName(e){let t=Wg.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);Xg.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=i(o.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ge("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){Xe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Xe("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Xe("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Xe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Xe("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){Xe("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){Xe("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;Xe("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Xe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Xe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ct.Composite=Yh;Ct.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ct.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ct.prototype.GetterByBindingType=[Ct.prototype._getValue_direct,Ct.prototype._getValue_array,Ct.prototype._getValue_arrayElement,Ct.prototype._getValue_toArray];Ct.prototype.SetterByBindingTypeAndVersioning=[[Ct.prototype._setValue_direct,Ct.prototype._setValue_direct_setNeedsUpdate,Ct.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ct.prototype._setValue_array,Ct.prototype._setValue_array_setNeedsUpdate,Ct.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ct.prototype._setValue_arrayElement,Ct.prototype._setValue_arrayElement_setNeedsUpdate,Ct.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ct.prototype._setValue_fromArray,Ct.prototype._setValue_fromArray_setNeedsUpdate,Ct.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var ib=new Float32Array(1);var $h=class{static{this.prototype.isMatrix2=!0}constructor(e,t,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=s,this}};function Su(n,e,t,i){let s=qg(i);switch(t){case fu:return n*e;case Ol:return n*e/s.components*s.byteLength;case Bl:return n*e/s.components*s.byteLength;case ds:return n*e*2/s.components*s.byteLength;case zl:return n*e*2/s.components*s.byteLength;case du:return n*e*3/s.components*s.byteLength;case fi:return n*e*4/s.components*s.byteLength;case kl:return n*e*4/s.components*s.byteLength;case Va:case Ga:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Wa:case Xa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Vl:case Wl:return Math.max(n,16)*Math.max(e,8)/4;case Hl:case Gl:return Math.max(n,8)*Math.max(e,8)/2;case Xl:case ql:case $l:case Zl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Yl:case qa:case Kl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Jl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case jl:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Ql:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case ec:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case tc:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case nc:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case ic:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case sc:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case rc:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case ac:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case oc:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case lc:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case cc:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case hc:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case uc:case fc:case dc:return Math.ceil(n/4)*Math.ceil(e/4)*16;case pc:case mc:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Ya:case gc:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function qg(n){switch(n){case Ln:case lu:return{byteLength:1,components:1};case Dr:case cu:case ui:return{byteLength:2,components:1};case Ul:case Fl:return{byteLength:2,components:4};case hi:case Dl:case jn:return{byteLength:4,components:1};case hu:case uu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Ge("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function Yp(){let n=null,e=!1,t=null,i=null;function s(r,a){i=n.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function jg(n){let e=new WeakMap;function t(o,l){let c=o.array,h=o.usage,f=c.byteLength,u=n.createBuffer();n.bindBuffer(l,u),n.bufferData(l,c,h),o.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,l,c){let h=l.array,f=l.updateRanges;if(n.bindBuffer(c,o),f.length===0)n.bufferSubData(c,0,h);else{f.sort((d,m)=>d.start-m.start);let u=0;for(let d=1;d<f.length;d++){let m=f[u],M=f[d];M.start<=m.start+m.count+1?m.count=Math.max(m.count,M.start+M.count-m.start):(++u,f[u]=M)}f.length=u+1;for(let d=0,m=f.length;d<m;d++){let M=f[d];n.bufferSubData(c,M.start*h.BYTES_PER_ELEMENT,h,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Qg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ex=`#ifdef USE_ALPHAHASH
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
#endif`,tx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,nx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ix=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,sx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,rx=`#ifdef USE_AOMAP
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
#endif`,ax=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ox=`#ifdef USE_BATCHING
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
#endif`,lx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,cx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,hx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ux=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,fx=`#ifdef USE_IRIDESCENCE
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
#endif`,dx=`#ifdef USE_BUMPMAP
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
#endif`,px=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,mx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,gx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,xx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,yx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,_x=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,vx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Mx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,bx=`#define PI 3.141592653589793
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
} // validated`,Sx=`vec3 transformedNormal = objectNormal;
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
#endif`,Tx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,wx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ex=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ax=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Rx="gl_FragColor = linearToOutputTexel( gl_FragColor );",Cx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Px=`#ifdef USE_ENVMAP
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
#endif`,Ix=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Lx=`#ifdef USE_ENVMAP
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
#endif`,Nx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Dx=`#ifdef USE_ENVMAP
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
#endif`,Ux=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Fx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ox=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Bx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,zx=`#ifdef USE_GRADIENTMAP
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
}`,kx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Hx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Vx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Gx=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Wx=`#ifdef USE_ENVMAP
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
#endif`,Xx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,qx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Yx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,$x=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Zx=`PhysicalMaterial material;
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
#endif`,Kx=`uniform sampler2D dfgLUT;
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
}`,Jx=`
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
#endif`,jx=`#if defined( RE_IndirectDiffuse )
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
#endif`,Qx=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ey=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,ty=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ny=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,iy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ry=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ay=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,oy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ly=`#if defined( USE_POINTS_UV )
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
#endif`,cy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,hy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,uy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,fy=`#if defined( USE_MORPHCOLORS )
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
#endif`,dy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,py=`#ifdef USE_MORPHTARGETS
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
#endif`,my=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,xy=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,yy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_y=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,My=`#ifdef USE_NORMALMAP
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
#endif`,by=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Sy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ty=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,wy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ey=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ay=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Ry=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Cy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Py=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Iy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ly=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ny=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Dy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Uy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Fy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Oy=`float getShadowMask() {
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
}`,By=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,zy=`#ifdef USE_SKINNING
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
#endif`,ky=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Hy=`#ifdef USE_SKINNING
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
#endif`,Vy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Gy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Wy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Xy=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,qy=`#ifdef USE_TRANSMISSION
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
#endif`,Yy=`#ifdef USE_TRANSMISSION
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
#endif`,$y=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Zy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ky=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Jy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,jy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Qy=`uniform sampler2D t2D;
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
}`,e_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,t_=`uniform float backgroundBlurriness;
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
}`,n_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,i_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,s_=`#include <common>
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
}`,r_=`#if DEPTH_PACKING == 3200
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
}`,a_=`#define DISTANCE
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
}`,o_=`#define DISTANCE
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
}`,l_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,c_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,h_=`uniform float scale;
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
}`,u_=`uniform vec3 diffuse;
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
}`,f_=`#include <common>
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
}`,d_=`uniform vec3 diffuse;
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
}`,p_=`#define LAMBERT
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
}`,m_=`#define LAMBERT
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
}`,g_=`#define MATCAP
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
}`,x_=`#define MATCAP
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
}`,y_=`#define NORMAL
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
}`,__=`#define NORMAL
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
}`,v_=`#define PHONG
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
}`,M_=`#define PHONG
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
}`,b_=`#define STANDARD
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
}`,S_=`#define STANDARD
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
}`,T_=`#define TOON
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
}`,w_=`#define TOON
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
}`,E_=`uniform float size;
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
}`,A_=`uniform vec3 diffuse;
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
}`,R_=`#include <common>
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
}`,C_=`uniform vec3 color;
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
}`,P_=`uniform float rotation;
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
}`,I_=`uniform vec3 diffuse;
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
}`,st={alphahash_fragment:Qg,alphahash_pars_fragment:ex,alphamap_fragment:tx,alphamap_pars_fragment:nx,alphatest_fragment:ix,alphatest_pars_fragment:sx,aomap_fragment:rx,aomap_pars_fragment:ax,batching_pars_vertex:ox,batching_vertex:lx,begin_vertex:cx,beginnormal_vertex:hx,bsdfs:ux,iridescence_fragment:fx,bumpmap_pars_fragment:dx,clipping_planes_fragment:px,clipping_planes_pars_fragment:mx,clipping_planes_pars_vertex:gx,clipping_planes_vertex:xx,color_fragment:yx,color_pars_fragment:_x,color_pars_vertex:vx,color_vertex:Mx,common:bx,defaultnormal_vertex:Sx,displacementmap_pars_vertex:Tx,displacementmap_vertex:wx,emissivemap_fragment:Ex,emissivemap_pars_fragment:Ax,colorspace_fragment:Rx,colorspace_pars_fragment:Cx,envmap_fragment:Px,envmap_common_pars_fragment:Ix,envmap_pars_fragment:Lx,envmap_pars_vertex:Nx,envmap_physical_pars_fragment:Wx,envmap_vertex:Dx,fog_vertex:Ux,fog_pars_vertex:Fx,fog_fragment:Ox,fog_pars_fragment:Bx,gradientmap_pars_fragment:zx,lightmap_pars_fragment:kx,lights_lambert_fragment:Hx,lights_lambert_pars_fragment:Vx,lights_pars_begin:Gx,lights_toon_fragment:Xx,lights_toon_pars_fragment:qx,lights_phong_fragment:Yx,lights_phong_pars_fragment:$x,lights_physical_fragment:Zx,lights_physical_pars_fragment:Kx,lights_fragment_begin:Jx,lights_fragment_maps:jx,lights_fragment_end:Qx,lightprobes_pars_fragment:ey,logdepthbuf_fragment:ty,logdepthbuf_pars_fragment:ny,logdepthbuf_pars_vertex:iy,logdepthbuf_vertex:sy,map_fragment:ry,map_pars_fragment:ay,map_particle_fragment:oy,map_particle_pars_fragment:ly,metalnessmap_fragment:cy,metalnessmap_pars_fragment:hy,morphinstance_vertex:uy,morphcolor_vertex:fy,morphnormal_vertex:dy,morphtarget_pars_vertex:py,morphtarget_vertex:my,normal_fragment_begin:gy,normal_fragment_maps:xy,normal_pars_fragment:yy,normal_pars_vertex:_y,normal_vertex:vy,normalmap_pars_fragment:My,clearcoat_normal_fragment_begin:by,clearcoat_normal_fragment_maps:Sy,clearcoat_pars_fragment:Ty,iridescence_pars_fragment:wy,opaque_fragment:Ey,packing:Ay,premultiplied_alpha_fragment:Ry,project_vertex:Cy,dithering_fragment:Py,dithering_pars_fragment:Iy,roughnessmap_fragment:Ly,roughnessmap_pars_fragment:Ny,shadowmap_pars_fragment:Dy,shadowmap_pars_vertex:Uy,shadowmap_vertex:Fy,shadowmask_pars_fragment:Oy,skinbase_vertex:By,skinning_pars_vertex:zy,skinning_vertex:ky,skinnormal_vertex:Hy,specularmap_fragment:Vy,specularmap_pars_fragment:Gy,tonemapping_fragment:Wy,tonemapping_pars_fragment:Xy,transmission_fragment:qy,transmission_pars_fragment:Yy,uv_pars_fragment:$y,uv_pars_vertex:Zy,uv_vertex:Ky,worldpos_vertex:Jy,background_vert:jy,background_frag:Qy,backgroundCube_vert:e_,backgroundCube_frag:t_,cube_vert:n_,cube_frag:i_,depth_vert:s_,depth_frag:r_,distance_vert:a_,distance_frag:o_,equirect_vert:l_,equirect_frag:c_,linedashed_vert:h_,linedashed_frag:u_,meshbasic_vert:f_,meshbasic_frag:d_,meshlambert_vert:p_,meshlambert_frag:m_,meshmatcap_vert:g_,meshmatcap_frag:x_,meshnormal_vert:y_,meshnormal_frag:__,meshphong_vert:v_,meshphong_frag:M_,meshphysical_vert:b_,meshphysical_frag:S_,meshtoon_vert:T_,meshtoon_frag:w_,points_vert:E_,points_frag:A_,shadow_vert:R_,shadow_frag:C_,sprite_vert:P_,sprite_frag:I_},Re={common:{diffuse:{value:new We(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Je}},envmap:{envMap:{value:null},envMapRotation:{value:new Je},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Je},normalScale:{value:new pe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new We(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new We(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0},uvTransform:{value:new Je}},sprite:{diffuse:{value:new We(16777215)},opacity:{value:1},center:{value:new pe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}}},Si={basic:{uniforms:wn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.fog]),vertexShader:st.meshbasic_vert,fragmentShader:st.meshbasic_frag},lambert:{uniforms:wn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new We(0)},envMapIntensity:{value:1}}]),vertexShader:st.meshlambert_vert,fragmentShader:st.meshlambert_frag},phong:{uniforms:wn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new We(0)},specular:{value:new We(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:st.meshphong_vert,fragmentShader:st.meshphong_frag},standard:{uniforms:wn([Re.common,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.roughnessmap,Re.metalnessmap,Re.fog,Re.lights,{emissive:{value:new We(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag},toon:{uniforms:wn([Re.common,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.gradientmap,Re.fog,Re.lights,{emissive:{value:new We(0)}}]),vertexShader:st.meshtoon_vert,fragmentShader:st.meshtoon_frag},matcap:{uniforms:wn([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,{matcap:{value:null}}]),vertexShader:st.meshmatcap_vert,fragmentShader:st.meshmatcap_frag},points:{uniforms:wn([Re.points,Re.fog]),vertexShader:st.points_vert,fragmentShader:st.points_frag},dashed:{uniforms:wn([Re.common,Re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:st.linedashed_vert,fragmentShader:st.linedashed_frag},depth:{uniforms:wn([Re.common,Re.displacementmap]),vertexShader:st.depth_vert,fragmentShader:st.depth_frag},normal:{uniforms:wn([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,{opacity:{value:1}}]),vertexShader:st.meshnormal_vert,fragmentShader:st.meshnormal_frag},sprite:{uniforms:wn([Re.sprite,Re.fog]),vertexShader:st.sprite_vert,fragmentShader:st.sprite_frag},background:{uniforms:{uvTransform:{value:new Je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:st.background_vert,fragmentShader:st.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Je}},vertexShader:st.backgroundCube_vert,fragmentShader:st.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:st.cube_vert,fragmentShader:st.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:st.equirect_vert,fragmentShader:st.equirect_frag},distance:{uniforms:wn([Re.common,Re.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:st.distance_vert,fragmentShader:st.distance_frag},shadow:{uniforms:wn([Re.lights,Re.fog,{color:{value:new We(0)},opacity:{value:1}}]),vertexShader:st.shadow_vert,fragmentShader:st.shadow_frag}};Si.physical={uniforms:wn([Si.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Je},clearcoatNormalScale:{value:new pe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Je},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Je},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Je},sheen:{value:0},sheenColor:{value:new We(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Je},transmissionSamplerSize:{value:new pe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Je},attenuationDistance:{value:0},attenuationColor:{value:new We(0)},specularColor:{value:new We(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Je},anisotropyVector:{value:new pe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Je}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag};var _c={r:0,b:0,g:0},L_=new _t,$p=new Je;$p.set(-1,0,0,0,1,0,0,0,1);function N_(n,e,t,i,s,r){let a=new We(0),o=s===!0?0:1,l,c,h=null,f=0,u=null;function d(b){let E=b.isScene===!0?b.background:null;if(E&&E.isTexture){let S=b.backgroundBlurriness>0;E=e.get(E,S)}return E}function m(b){let E=!1,S=d(b);S===null?x(a,o):S&&S.isColor&&(x(S,1),E=!0);let P=n.xr.getEnvironmentBlendMode();P==="additive"?t.buffers.color.setClear(0,0,0,1,r):P==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||E)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function M(b,E){let S=d(E);S&&S.isCubeTexture?(c===void 0&&(c=new Ye(new rn(1,1,1),new Kn({name:"BackgroundCubeMaterial",uniforms:ks(Si.backgroundCube.uniforms),vertexShader:Si.backgroundCube.vertexShader,fragmentShader:Si.backgroundCube.fragmentShader,side:xn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(P,A,p){this.matrixWorld.copyPosition(p.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=S,c.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(L_.makeRotationFromEuler(E.backgroundRotation)).transpose(),S.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply($p),c.material.toneMapped=dt.getTransfer(S.colorSpace)!==bt,(h!==S||f!==S.version||u!==n.toneMapping)&&(c.material.needsUpdate=!0,h=S,f=S.version,u=n.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new Ye(new Zn(2,2),new Kn({name:"BackgroundMaterial",uniforms:ks(Si.background.uniforms),vertexShader:Si.background.vertexShader,fragmentShader:Si.background.fragmentShader,side:fs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=dt.getTransfer(S.colorSpace)!==bt,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(h!==S||f!==S.version||u!==n.toneMapping)&&(l.material.needsUpdate=!0,h=S,f=S.version,u=n.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function x(b,E){b.getRGB(_c,vu(n)),t.buffers.color.setClear(_c.r,_c.g,_c.b,E,r)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(b,E=1){a.set(b),o=E,x(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(b){o=b,x(a,o)},render:m,addToRenderList:M,dispose:g}}function D_(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=u(null),r=s,a=!1;function o(w,R,_,T,I){let N=!1,B=f(w,T,_,R);r!==B&&(r=B,c(r.object)),N=d(w,T,_,I),N&&m(w,T,_,I),I!==null&&e.update(I,n.ELEMENT_ARRAY_BUFFER),(N||a)&&(a=!1,S(w,R,_,T),I!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(I).buffer))}function l(){return n.createVertexArray()}function c(w){return n.bindVertexArray(w)}function h(w){return n.deleteVertexArray(w)}function f(w,R,_,T){let I=T.wireframe===!0,N=i[R.id];N===void 0&&(N={},i[R.id]=N);let B=w.isInstancedMesh===!0?w.id:0,k=N[B];k===void 0&&(k={},N[B]=k);let F=k[_.id];F===void 0&&(F={},k[_.id]=F);let U=F[I];return U===void 0&&(U=u(l()),F[I]=U),U}function u(w){let R=[],_=[],T=[];for(let I=0;I<t;I++)R[I]=0,_[I]=0,T[I]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:_,attributeDivisors:T,object:w,attributes:{},index:null}}function d(w,R,_,T){let I=r.attributes,N=R.attributes,B=0,k=_.getAttributes();for(let F in k)if(k[F].location>=0){let H=I[F],Z=N[F];if(Z===void 0&&(F==="instanceMatrix"&&w.instanceMatrix&&(Z=w.instanceMatrix),F==="instanceColor"&&w.instanceColor&&(Z=w.instanceColor)),H===void 0||H.attribute!==Z||Z&&H.data!==Z.data)return!0;B++}return r.attributesNum!==B||r.index!==T}function m(w,R,_,T){let I={},N=R.attributes,B=0,k=_.getAttributes();for(let F in k)if(k[F].location>=0){let H=N[F];H===void 0&&(F==="instanceMatrix"&&w.instanceMatrix&&(H=w.instanceMatrix),F==="instanceColor"&&w.instanceColor&&(H=w.instanceColor));let Z={};Z.attribute=H,H&&H.data&&(Z.data=H.data),I[F]=Z,B++}r.attributes=I,r.attributesNum=B,r.index=T}function M(){let w=r.newAttributes;for(let R=0,_=w.length;R<_;R++)w[R]=0}function x(w){g(w,0)}function g(w,R){let _=r.newAttributes,T=r.enabledAttributes,I=r.attributeDivisors;_[w]=1,T[w]===0&&(n.enableVertexAttribArray(w),T[w]=1),I[w]!==R&&(n.vertexAttribDivisor(w,R),I[w]=R)}function b(){let w=r.newAttributes,R=r.enabledAttributes;for(let _=0,T=R.length;_<T;_++)R[_]!==w[_]&&(n.disableVertexAttribArray(_),R[_]=0)}function E(w,R,_,T,I,N,B){B===!0?n.vertexAttribIPointer(w,R,_,I,N):n.vertexAttribPointer(w,R,_,T,I,N)}function S(w,R,_,T){M();let I=T.attributes,N=_.getAttributes(),B=R.defaultAttributeValues;for(let k in N){let F=N[k];if(F.location>=0){let U=I[k];if(U===void 0&&(k==="instanceMatrix"&&w.instanceMatrix&&(U=w.instanceMatrix),k==="instanceColor"&&w.instanceColor&&(U=w.instanceColor)),U!==void 0){let H=U.normalized,Z=U.itemSize,$=e.get(U);if($===void 0)continue;let G=$.buffer,ee=$.type,te=$.bytesPerElement,le=ee===n.INT||ee===n.UNSIGNED_INT||U.gpuType===Dl;if(U.isInterleavedBufferAttribute){let ce=U.data,he=ce.isInterleavedBuffer===!0?ce.stride:ce.itemSize,ze=U.offset;if(ce.isInstancedInterleavedBuffer||ce.isInstancedBufferAttribute){for(let Pe=0;Pe<F.locationSize;Pe++)g(F.location+Pe,ce.meshPerAttribute);w.isInstancedMesh!==!0&&T._maxInstanceCount===void 0&&(T._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let Pe=0;Pe<F.locationSize;Pe++)x(F.location+Pe);n.bindBuffer(n.ARRAY_BUFFER,G);for(let Pe=0;Pe<F.locationSize;Pe++)E(F.location+Pe,Z/F.locationSize,ee,H,he*te,(ze+Z/F.locationSize*Pe)*te,le)}else{if(U.isInstancedBufferAttribute){for(let ce=0;ce<F.locationSize;ce++)g(F.location+ce,U.meshPerAttribute);w.isInstancedMesh!==!0&&T._maxInstanceCount===void 0&&(T._maxInstanceCount=U.meshPerAttribute*U.count)}else for(let ce=0;ce<F.locationSize;ce++)x(F.location+ce);n.bindBuffer(n.ARRAY_BUFFER,G);for(let ce=0;ce<F.locationSize;ce++)E(F.location+ce,Z/F.locationSize,ee,H,Z*te,Z/F.locationSize*ce*te,le)}}else if(B!==void 0){let H=B[k];if(H!==void 0)switch(H.length){case 2:n.vertexAttrib2fv(F.location,H);break;case 3:n.vertexAttrib3fv(F.location,H);break;case 4:n.vertexAttrib4fv(F.location,H);break;default:n.vertexAttrib1fv(F.location,H)}}}}b()}function P(){C();for(let w in i){let R=i[w];for(let _ in R){let T=R[_];for(let I in T){let N=T[I];for(let B in N)h(N[B].object),delete N[B];delete T[I]}}delete i[w]}}function A(w){if(i[w.id]===void 0)return;let R=i[w.id];for(let _ in R){let T=R[_];for(let I in T){let N=T[I];for(let B in N)h(N[B].object),delete N[B];delete T[I]}}delete i[w.id]}function p(w){for(let R in i){let _=i[R];for(let T in _){let I=_[T];if(I[w.id]===void 0)continue;let N=I[w.id];for(let B in N)h(N[B].object),delete N[B];delete I[w.id]}}}function v(w){for(let R in i){let _=i[R],T=w.isInstancedMesh===!0?w.id:0,I=_[T];if(I!==void 0){for(let N in I){let B=I[N];for(let k in B)h(B[k].object),delete B[k];delete I[N]}delete _[T],Object.keys(_).length===0&&delete i[R]}}}function C(){y(),a=!0,r!==s&&(r=s,c(r.object))}function y(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:C,resetDefaultState:y,dispose:P,releaseStatesOfGeometry:A,releaseStatesOfObject:v,releaseStatesOfProgram:p,initAttributes:M,enableAttribute:x,disableUnusedAttributes:b}}function U_(n,e,t){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),t.update(c,i,1)}function a(l,c,h){h!==0&&(n.drawArraysInstanced(i,l,c,h),t.update(c,i,h))}function o(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let u=0;for(let d=0;d<h;d++)u+=c[d];t.update(u,i,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function F_(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let p=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(p.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(p){return!(p!==fi&&i.convert(p)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(p){let v=p===ui&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(p!==Ln&&p!==jn&&!v&&i.convert(p)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(p){if(p==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";p="mediump"}return p==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(Ge("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),u=t.logarithmicDepthBuffer===!0&&f===!1;t.reversedDepthBuffer===!0&&f===!1&&Ge("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&f===!0&&Ge("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=n.getParameter(n.MAX_TEXTURE_SIZE),x=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),g=n.getParameter(n.MAX_VERTEX_ATTRIBS),b=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),E=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),P=n.getParameter(n.MAX_SAMPLES),A=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:m,maxTextureSize:M,maxCubemapSize:x,maxAttributes:g,maxVertexUniforms:b,maxVaryings:E,maxFragmentUniforms:S,maxSamples:P,samples:A}}function O_(n){let e=this,t=null,i=0,s=!1,r=!1,a=new oi,o=new Je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){let d=f.length!==0||u||i!==0||s;return s=u,i=f.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,u){t=h(f,u,0)},this.setState=function(f,u,d){let m=f.clippingPlanes,M=f.clipIntersection,x=f.clipShadows,g=n.get(f);if(!s||m===null||m.length===0||r&&!x)r?h(null):c();else{let b=r?0:i,E=b*4,S=g.clippingState||null;l.value=S,S=h(m,u,E,d);for(let P=0;P!==E;++P)S[P]=t[P];g.clippingState=S,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(f,u,d,m){let M=f!==null?f.length:0,x=null;if(M!==0){if(x=l.value,m!==!0||x===null){let g=d+M*4,b=u.matrixWorldInverse;o.getNormalMatrix(b),(x===null||x.length<g)&&(x=new Float32Array(g));for(let E=0,S=d;E!==M;++E,S+=4)a.copy(f[E]).applyMatrix4(b,o),a.normal.toArray(x,S),x[S+3]=a.constant}l.value=x,l.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,x}}var Ka=class extends kn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Ma(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new rn(5,5,5),r=new Kn({name:"CubemapFromEquirect",uniforms:ks(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:xn,blending:Fs});r.uniforms.tEquirect.value=t;let a=new Ye(s,r),o=t.minFilter;return t.minFilter===ki&&(t.minFilter=Pn),new Pr(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}},Ep=256,B_=3,z_=20,Zp=256,Kp=16,k_=3,H_=new W,V_=new We,Mc=class n{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Pr(1,10,null),this._boxMesh=new Ye(new rn(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){let{size:a=256,position:o=H_}=r,l=this._renderer;this._setSize(a);let c=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);let f=l.autoClear,u=l.autoClearColor,d=l.autoClearDepth,m=l.autoClearStencil,M=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,M===null&&(e.background=l.getClearColor(V_));let x=new Pr(i,s,h);return x.position.copy(o),x.update(l,e),l.autoClear=f,l.autoClearColor=u,l.autoClearDepth=d,l.autoClearStencil=m,e.background=M,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Cp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Rp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(Ep,pp(e))}_fromTexture(e,t){e.mapping===Bs||e.mapping===Nr?this._setSize(e.image.length===0?Ep:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let i=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(i),i}_allocateTarget(){let e=this._cubeSize,t=Ap(e,!1,!1),i=Math.log2(e)-B_;for(let s=0;s<=i;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==t||e&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=Ap(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,i){let s=this._boxMesh,r=this._cubeCamera;s.material=i,r.renderTarget=e,r.activeMipmapLevel=t;let a=e.width>>t;e.viewport.set(0,0,a,a),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===Bs||e.mapping===Nr?(this._cubemapMaterial===null&&(this._cubemapMaterial=Cp()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Rp()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=G_(),this._integrationMaterial=W_());let t=this._cubeSize,i=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/Kp);for(let a=0;a<=i;a++){let o=n.lodToRoughness(a,i);if(a>i-k_)r.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{let l=o>0?Math.log2(t)+.5*Math.log2(6/(Zp*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=l,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=X_());let i=this._blurMaterial,s=i.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,i),s.envMap.value=e.texture,this._renderCube(r,0,i)}};function Ap(n,e,t){return new Ka(n,{minFilter:ki,generateMipmaps:e,type:ui,colorSpace:ca,depthBuffer:t})}function Ja(n,e,t){return new Kn({name:n,uniforms:e,vertexShader:st.cube_vert,fragmentShader:t,side:xn,blending:Fs,depthTest:!1,depthWrite:!1})}function G_(){return Ja("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Zp}u

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
	`)}function W_(){return Ja("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Kp}},`

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
	`)}function X_(){return Ja("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${z_}
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
	`)}function Rp(){return Ja("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function Cp(){return Ja("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function q_(n){let e=new WeakMap,t=new WeakMap,i=null;function s(u,d=!1){return u==null?null:d?a(u):r(u)}function r(u){if(u&&u.isTexture){let d=u.mapping;if(d===Il||d===Ll)if(e.has(u)){let m=e.get(u).texture;return o(m,u.mapping)}else{let m=u.image;if(m&&m.height>0){let M=new Ka(m.height);return M.fromEquirectangularTexture(n,u),e.set(u,M),u.addEventListener("dispose",c),o(M.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture&&u.isPMREMTexture!==!0){let d=u.mapping,m=d===Il||d===Ll,M=d===Bs||d===Nr;if(m||M){let x=t.get(u),g=x!==void 0?x.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==g)return i===null&&(i=new Mc(n)),x=m?i.fromEquirectangular(u,x):i.fromCubemap(u,x),x.texture.pmremVersion=u.pmremVersion,t.set(u,x),x.texture;if(x!==void 0)return x.texture;{let b=u.image;return m&&b&&b.height>0||M&&b&&l(b)?(i===null&&(i=new Mc(n)),x=m?i.fromEquirectangular(u):i.fromCubemap(u),x.texture.pmremVersion=u.pmremVersion,t.set(u,x),u.addEventListener("dispose",h),x.texture):null}}}return u}function o(u,d){return d===Il?u.mapping=Bs:d===Ll&&(u.mapping=Nr),u}function l(u){let d=0,m=6;for(let M=0;M<m;M++)u[M]!==void 0&&d++;return d===m}function c(u){let d=u.target;d.removeEventListener("dispose",c);let m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function h(u){let d=u.target;d.removeEventListener("dispose",h);let m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function f(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:f}}function Y_(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&ra("WebGLRenderer: "+i+" extension not supported."),s}}}function $_(n,e,t,i){let s={},r=new WeakMap,a=new FinalizationRegistry(m=>delete s[m]);function o(m){l(m.target)}function l(m){m.index!==null&&e.remove(m.index);for(let x in m.attributes)e.remove(m.attributes[x]);m.removeEventListener("dispose",o),delete s[m.id],a.unregister(m);let M=r.get(m);M&&(e.remove(M),r.delete(m)),i.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,t.memory.geometries--}function c(m,M){return s[M.id]!==void 0||(M.addEventListener("dispose",o),s[M.id]=new WeakRef(M),a.register(M,M.id,M),t.memory.geometries++),M}function h(m){let M=m.attributes;for(let x in M)e.update(M[x],n.ARRAY_BUFFER)}function f(m){let M=m.index,x=m.attributes.position,g=0;if(x===void 0)return;let b=M!==null?M.array.length:x.array.length/3-1,E=x.count>=65535?xa:ga,S=new E(Math.ceil(b/3)*6,1),P=S.array;if(M!==null){let p=M.array;g=M.version;for(let v=0,C=0;v<b;v+=3){let y=p[v+0],w=p[v+1],R=p[v+2];P[C++]=y,P[C++]=w,P[C++]=w,P[C++]=R,P[C++]=R,P[C++]=y}}else{g=x.version;for(let p=0,v=0;p<b;p+=3){let C=p+0,y=p+1,w=p+2;P[v++]=C,P[v++]=y,P[v++]=y,P[v++]=w,P[v++]=w,P[v++]=C}}S.version=g;let A=r.get(m);A&&e.remove(A),r.set(m,S)}function u(m){let M=r.get(m);if(M){let x=m.index;x!==null&&M.version<x.version&&f(m)}else f(m);return r.get(m)}function d(){for(let m in s){let M=s[m].deref();M!==void 0&&l(M)}}return{get:c,update:h,getWireframeAttribute:u,dispose:d}}function Z_(n,e,t){let i;function s(f){i=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,u){n.drawElements(i,u,r,f*a),t.update(u,i,1)}function c(f,u,d){d!==0&&(n.drawElementsInstanced(i,u,r,f*a,d),t.update(u,i,d))}function h(f,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,r,f,0,d);let M=0;for(let x=0;x<d;x++)M+=u[x];t.update(M,i,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function K_(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(r/3);break;case n.LINES:t.lines+=o*(r/2);break;case n.LINE_STRIP:t.lines+=o*(r-1);break;case n.LINE_LOOP:t.lines+=o*r;break;case n.POINTS:t.points+=o*r;break;default:Xe("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function J_(n,e,t){let i=new WeakMap,s=new Lt;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0,u=i.get(o);if(u===void 0||u.count!==f){let C=function(){p.dispose(),i.delete(o),o.removeEventListener("dispose",C)};u!==void 0&&u.texture.dispose();let d=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,M=o.morphAttributes.color!==void 0,x=o.morphAttributes.position||[],g=o.morphAttributes.normal||[],b=o.morphAttributes.color||[],E=0;d===!0&&(E=1),m===!0&&(E=2),M===!0&&(E=3);let S=o.attributes.position.count*E,P=1;S>e.maxTextureSize&&(P=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);let A=new Float32Array(S*P*4*f),p=new da(A,S,P,f);p.type=jn,p.needsUpdate=!0;let v=E*4;for(let y=0;y<f;y++){let w=x[y],R=g[y],_=b[y],T=S*P*4*y;for(let I=0;I<w.count;I++){let N=I*v;d===!0&&(s.fromBufferAttribute(w,I),A[T+N+0]=s.x,A[T+N+1]=s.y,A[T+N+2]=s.z,A[T+N+3]=0),m===!0&&(s.fromBufferAttribute(R,I),A[T+N+4]=s.x,A[T+N+5]=s.y,A[T+N+6]=s.z,A[T+N+7]=0),M===!0&&(s.fromBufferAttribute(_,I),A[T+N+8]=s.x,A[T+N+9]=s.y,A[T+N+10]=s.z,A[T+N+11]=_.itemSize===4?s.w:1)}}u={count:f,texture:p,size:new pe(S,P)},i.set(o,u),o.addEventListener("dispose",C)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let d=0;for(let M=0;M<c.length;M++)d+=c[M];let m=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(n,"morphTargetBaseInfluence",m),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:r}}function j_(n,e,t,i,s){let r=new WeakMap;function a(c){let h=s.render.frame,f=c.geometry,u=e.get(c,f);if(r.get(u)!==h&&(e.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let d=c.skeleton;r.get(d)!==h&&(d.update(),r.set(d,h))}return u}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}var Q_={[tu]:"LINEAR_TONE_MAPPING",[nu]:"REINHARD_TONE_MAPPING",[iu]:"CINEON_TONE_MAPPING",[ka]:"ACES_FILMIC_TONE_MAPPING",[ru]:"AGX_TONE_MAPPING",[au]:"NEUTRAL_TONE_MAPPING",[su]:"CUSTOM_TONE_MAPPING"};function ev(n,e,t,i,s,r){let a=new kn(e,t,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=null,h=new Xt;h.setAttribute("position",new it([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new it([0,2,0,0,2,0],2));let f=new ml({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new Ye(h,f),d=new zi(-1,1,1,-1,0,1),m=null,M=null,x=!1,g,b=null,E=[],S=!1;this.setSize=function(P,A){a.setSize(P,A),o!==null&&o.setSize(P,A),l!==null&&l.setSize(P,A);for(let p=0;p<E.length;p++){let v=E[p];v.setSize&&v.setSize(P,A)}},this.setEffects=function(P){E=P,S=E.length>0&&E[0].isRenderPass===!0;let A=a.width,p=a.height;E.length>0&&o===null&&(o=new kn(A,p,{type:ui,depthBuffer:!1,stencilBuffer:!1}),l=new kn(A,p,{type:ui,depthBuffer:!1,stencilBuffer:!1}));let v=s===!0&&E.some(C=>C.needsDepthTexture===!0);v!==(a.depthTexture!==null)&&(v===!0&&c===null&&(c=new Oi(A,p),r===!0&&(c.format=Hi,c.type=zs)),a.dispose(),a.depthTexture=v?c:null,a.resolveDepthBuffer=v,a.storeMultisampledDepthBuffer=v);for(let C=0;C<E.length;C++){let y=E[C];y.setSize&&y.setSize(A,p),v&&y.needsDepthTexture===!0&&y.setDepthTexture&&y.setDepthTexture(c)}},this.begin=function(P,A){if(x||P.toneMapping===Mi&&E.length===0)return!1;if(b=A,A!==null){let p=A.width,v=A.height;(a.width!==p||a.height!==v)&&this.setSize(p,v)}return S===!1&&P.setRenderTarget(a),g=P.toneMapping,P.toneMapping=Mi,!0},this.hasRenderPass=function(){return S},this.end=function(P,A){P.toneMapping=g,x=!0;let p=a,v=o;for(let C=0;C<E.length;C++){let y=E[C];y.enabled!==!1&&(y.render(P,v,p,A),y.needsSwap!==!1&&(p=v,v=v===o?l:o))}if(m!==P.outputColorSpace||M!==P.toneMapping){m=P.outputColorSpace,M=P.toneMapping,f.defines={},dt.getTransfer(m)===bt&&(f.defines.SRGB_TRANSFER="");let C=Q_[M];C&&(f.defines[C]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=p.texture,P.setRenderTarget(b),P.render(u,d),b=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),h.dispose(),f.dispose()}}var Jp=new In,jp=new Oi(1,1),Qp=new ba(1),e0=new da,t0=new al,n0=new Ma,Pp=[],Ip=[],Lp=new Float32Array(16),Np=new Float32Array(9),Dp=new Float32Array(4);function Or(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=Pp[s];if(r===void 0&&(r=new Float32Array(s),Pp[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(r,o)}return r}function on(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function ln(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function bc(n,e){let t=Ip[e];t===void 0&&(t=new Int32Array(e),Ip[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function tv(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function nv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(on(t,e))return;n.uniform2fv(this.addr,e),ln(t,e)}}function iv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(on(t,e))return;n.uniform3fv(this.addr,e),ln(t,e)}}function sv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(on(t,e))return;n.uniform4fv(this.addr,e),ln(t,e)}}function rv(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(on(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),ln(t,e)}else{if(on(t,i))return;Dp.set(i),n.uniformMatrix2fv(this.addr,!1,Dp),ln(t,i)}}function av(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(on(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),ln(t,e)}else{if(on(t,i))return;Np.set(i),n.uniformMatrix3fv(this.addr,!1,Np),ln(t,i)}}function ov(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(on(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),ln(t,e)}else{if(on(t,i))return;Lp.set(i),n.uniformMatrix4fv(this.addr,!1,Lp),ln(t,i)}}function lv(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function cv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(on(t,e))return;n.uniform2iv(this.addr,e),ln(t,e)}}function hv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(on(t,e))return;n.uniform3iv(this.addr,e),ln(t,e)}}function uv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(on(t,e))return;n.uniform4iv(this.addr,e),ln(t,e)}}function fv(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function dv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(on(t,e))return;n.uniform2uiv(this.addr,e),ln(t,e)}}function pv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(on(t,e))return;n.uniform3uiv(this.addr,e),ln(t,e)}}function mv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(on(t,e))return;n.uniform4uiv(this.addr,e),ln(t,e)}}function Sc(n){return n.version===0&&(n.compareFunction=gu,n.needsUpdate=!0),n}function gv(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?r=Sc(jp):r=Jp,t.setTexture2D(e||r,s)}function xv(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||t0,s)}function yv(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_CUBE_SHADOW?r=Sc(Qp):r=n0,t.setTextureCube(e||r,s)}function _v(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||e0,s)}function vv(n){switch(n){case 5126:return tv;case 35664:return nv;case 35665:return iv;case 35666:return sv;case 35674:return rv;case 35675:return av;case 35676:return ov;case 5124:case 35670:return lv;case 35667:case 35671:return cv;case 35668:case 35672:return hv;case 35669:case 35673:return uv;case 5125:return fv;case 36294:return dv;case 36295:return pv;case 36296:return mv;case 35678:case 36198:case 36298:case 36306:case 35682:return gv;case 35679:case 36299:case 36307:return xv;case 35680:case 36300:case 36308:case 36293:return yv;case 36289:case 36303:case 36311:case 36292:return _v}}function Mv(n,e){n.uniform1fv(this.addr,e)}function bv(n,e){let t=Or(e,this.size,2);n.uniform2fv(this.addr,t)}function Sv(n,e){let t=Or(e,this.size,3);n.uniform3fv(this.addr,t)}function Tv(n,e){let t=Or(e,this.size,4);n.uniform4fv(this.addr,t)}function wv(n,e){let t=Or(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Ev(n,e){let t=Or(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Av(n,e){let t=Or(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Rv(n,e){n.uniform1iv(this.addr,e)}function Cv(n,e){n.uniform2iv(this.addr,e)}function Pv(n,e){n.uniform3iv(this.addr,e)}function Iv(n,e){n.uniform4iv(this.addr,e)}function Lv(n,e){n.uniform1uiv(this.addr,e)}function Nv(n,e){n.uniform2uiv(this.addr,e)}function Dv(n,e){n.uniform3uiv(this.addr,e)}function Uv(n,e){n.uniform4uiv(this.addr,e)}function Fv(n,e,t){let i=this.cache,s=e.length,r=bc(t,s);on(i,r)||(n.uniform1iv(this.addr,r),ln(i,r));let a;this.type===n.SAMPLER_2D_SHADOW?a=Sc(jp):a=Jp;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function Ov(n,e,t){let i=this.cache,s=e.length,r=bc(t,s);on(i,r)||(n.uniform1iv(this.addr,r),ln(i,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||t0,r[a])}function Bv(n,e,t){let i=this.cache,s=e.length,r=bc(t,s);on(i,r)||(n.uniform1iv(this.addr,r),ln(i,r));let a;this.type===n.SAMPLER_CUBE_SHADOW?a=Sc(Qp):a=n0;for(let o=0;o!==s;++o)t.setTextureCube(e[o]||a,r[o])}function zv(n,e,t){let i=this.cache,s=e.length,r=bc(t,s);on(i,r)||(n.uniform1iv(this.addr,r),ln(i,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||e0,r[a])}function kv(n){switch(n){case 5126:return Mv;case 35664:return bv;case 35665:return Sv;case 35666:return Tv;case 35674:return wv;case 35675:return Ev;case 35676:return Av;case 5124:case 35670:return Rv;case 35667:case 35671:return Cv;case 35668:case 35672:return Pv;case 35669:case 35673:return Iv;case 5125:return Lv;case 36294:return Nv;case 36295:return Dv;case 36296:return Uv;case 35678:case 36198:case 36298:case 36306:case 35682:return Fv;case 35679:case 36299:case 36307:return Ov;case 35680:case 36300:case 36308:case 36293:return Bv;case 36289:case 36303:case 36311:case 36292:return zv}}var Eu=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=vv(t.type)}},Au=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=kv(t.type)}},Ru=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],i)}}},Tu=/(\w+)(\])?(\[|\.)?/g;function Up(n,e){n.seq.push(e),n.map[e.id]=e}function Hv(n,e,t){let i=n.name,s=i.length;for(Tu.lastIndex=0;;){let r=Tu.exec(i),a=Tu.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Up(t,c===void 0?new Eu(o,n,e):new Au(o,n,e));break}else{let f=t.map[o];f===void 0&&(f=new Ru(o),Up(t,f)),t=f}}}var Fr=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){let o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);Hv(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&i.push(a)}return i}};function Fp(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var Vv=37297,Gv=0;function Wv(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}var Op=new Je;function Xv(n){dt._getMatrix(Op,dt.workingColorSpace,n);let e=`mat3( ${Op.elements.map(t=>t.toFixed(4))} )`;switch(dt.getTransfer(n)){case ha:return[e,"LinearTransferOETF"];case bt:return[e,"sRGBTransferOETF"];default:return Ge("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Bp(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+Wv(n.getShaderSource(e),o)}else return r}function qv(n,e){let t=Xv(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var Yv={[tu]:"Linear",[nu]:"Reinhard",[iu]:"Cineon",[ka]:"ACESFilmic",[ru]:"AgX",[au]:"Neutral",[su]:"Custom"};function $v(n,e){let t=Yv[e];return t===void 0?(Ge("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var vc=new W;function Zv(){dt.getLuminanceCoefficients(vc);let n=vc.x.toFixed(4),e=vc.y.toFixed(4),t=vc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Kv(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Za).join(`
`)}function Jv(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function jv(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),a=r.name,o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function Za(n){return n!==""}function zp(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function kp(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Qv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Cu(n){return n.replace(Qv,e1)}function e1(n,e){let t=st[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return Cu(t)}var t1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Hp(n){return n.replace(t1,n1)}function n1(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Vp(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}var i1={[za]:"SHADOWMAP_TYPE_PCF",[Ir]:"SHADOWMAP_TYPE_VSM"};function s1(n){return i1[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var r1={[Nr]:"ENVMAP_MODE_REFRACTION"};function a1(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":r1[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var o1={[Pl]:"ENVMAP_BLENDING_MULTIPLY",[Qd]:"ENVMAP_BLENDING_MIX",[ep]:"ENVMAP_BLENDING_ADD"};function l1(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":o1[n.combine]||"ENVMAP_BLENDING_NONE"}function c1(n,e,t,i){let s=n.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=s1(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=a1(t),f=l1(t),u=Kv(t),d=Jv(r),m=s.createProgram(),M,x,g=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(M=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d].filter(Za).join(`
`),M.length>0&&(M+=`
`),x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d].filter(Za).join(`
`),x.length>0&&(x+=`
`)):(M=[Vp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Za).join(`
`),x=[Vp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Mi?"#define TONE_MAPPING":"",t.toneMapping!==Mi?st.tonemapping_pars_fragment:"",t.toneMapping!==Mi?$v("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",st.colorspace_pars_fragment,qv("linearToOutputTexel",t.outputColorSpace),Zv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Za).join(`
`)),a=Cu(a),a=zp(a,t),a=kp(a,t),o=Cu(o),o=zp(o,t),o=kp(o,t),a=Hp(a),o=Hp(o),t.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,M=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,x=["#define varying in",t.glslVersion===yu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===yu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);let b=g+M+a,E=g+x+o,S=Fp(s,s.VERTEX_SHADER,b),P=Fp(s,s.FRAGMENT_SHADER,E);s.attachShader(m,S),s.attachShader(m,P),t.index0AttributeName!==void 0?s.bindAttribLocation(m,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function A(y){if(n.debug.checkShaderErrors){let w=s.getProgramInfoLog(m)||"",R=s.getShaderInfoLog(S)||"",_=s.getShaderInfoLog(P)||"",T=w.trim(),I=R.trim(),N=_.trim(),B=!0,k=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(B=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,m,S,P);else{let F=Bp(s,S,"vertex"),U=Bp(s,P,"fragment");Xe("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Material Name: `+y.name+`
Material Type: `+y.type+`

Program Info Log: `+T+`
`+F+`
`+U)}else T!==""?Ge("WebGLProgram: Program Info Log:",T):(I===""||N==="")&&(k=!1);k&&(y.diagnostics={runnable:B,programLog:T,vertexShader:{log:I,prefix:M},fragmentShader:{log:N,prefix:x}})}s.deleteShader(S),s.deleteShader(P),p=new Fr(s,m),v=jv(s,m)}let p;this.getUniforms=function(){return p===void 0&&A(this),p};let v;this.getAttributes=function(){return v===void 0&&A(this),v};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=s.getProgramParameter(m,Vv)),C},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Gv++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=S,this.fragmentShader=P,this}var h1=0,Pu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Iu(e),t.set(e,i)),i}},Iu=class{constructor(e){this.id=h1++,this.code=e,this.usedTimes=0}};function u1(n){return n===ds||n===qa||n===Ya}function f1(n,e,t,i,s,r){let a=new pa,o=new Pu,l=new Set,c=[],h=new Map,f=i.logarithmicDepthBuffer,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(p){return l.add(p),p===0?"uv":`uv${p}`}function m(p,v,C,y,w,R){let _=y.fog,T=w.geometry,I=p.isMeshStandardMaterial||p.isMeshLambertMaterial||p.isMeshPhongMaterial?y.environment:null,N=p.isMeshStandardMaterial||p.isMeshLambertMaterial&&!p.envMap||p.isMeshPhongMaterial&&!p.envMap,B=e.get(p.envMap||I,N),k=u[p.type],F=i.precision;p.precision!==null&&(F=i.getMaxPrecision(p.precision),F!==p.precision&&Ge("WebGLProgram.getParameters:",p.precision,"not supported, using",F,"instead."));let U=T.morphAttributes.position||T.morphAttributes.normal||T.morphAttributes.color,H=U!==void 0?U.length:0,Z=0;T.morphAttributes.position!==void 0&&(Z=1),T.morphAttributes.normal!==void 0&&(Z=2),T.morphAttributes.color!==void 0&&(Z=3);let $,G,ee,te;if(k){let Ae=Si[k];$=Ae.vertexShader,G=Ae.fragmentShader}else{$=p.vertexShader,G=p.fragmentShader;let Ae=o.getVertexShaderStage(p),St=o.getFragmentShaderStage(p);o.update(p,Ae,St),ee=Ae.id,te=St.id}let le=n.getRenderTarget(),ce=n.state.buffers.depth.getReversed(),he=w.isInstancedMesh===!0,ze=w.isBatchedMesh===!0,Pe=!!p.map,Oe=!!p.matcap,je=!!B,ae=je&&B.isPMREMTexture===!0,xe=!!p.aoMap,ge=!!p.lightMap,Ie=!!p.bumpMap&&p.wireframe===!1,Ee=!!p.normalMap,Ke=!!p.displacementMap,Be=!!p.emissiveMap,lt=!!p.metalnessMap,ht=!!p.roughnessMap,yt=p.anisotropy>0,Y=p.clearcoat>0,Qt=p.diffuseRoughness>0,at=p.dispersion>0,wt=p.retroreflectivity>0,Se=p.iridescence>0,Gt=p.sheen>0,Ve=p.transmission>0,Ze=yt&&!!p.anisotropyMap,z=Y&&!!p.clearcoatMap,L=Y&&!!p.clearcoatNormalMap,J=Y&&!!p.clearcoatRoughnessMap,fe=Qt&&!!p.diffuseRoughnessMap,oe=Se&&!!p.iridescenceMap,ye=Se&&!!p.iridescenceThicknessMap,Te=Gt&&!!p.sheenColorMap,ie=Gt&&!!p.sheenRoughnessMap,se=!!p.specularMap,ve=!!p.specularColorMap,V=!!p.specularIntensityMap,re=Ve&&!!p.transmissionMap,ne=Ve&&!!p.thicknessMap,Me=!!p.gradientMap,me=!!p.alphaMap,_e=p.alphaTest>0,ke=!!p.alphaHash,nt=!!p.extensions,de=Mi;p.toneMapped&&(le===null||le.isXRRenderTarget===!0)&&(de=n.toneMapping);let He=ae?B.isCompressedCubeTexture?B.image[0].mipmaps:B.mipmaps:null,tt={shaderID:k,shaderType:p.type,shaderName:p.name,vertexShader:$,fragmentShader:G,defines:p.defines,customVertexShaderID:ee,customFragmentShaderID:te,isRawShaderMaterial:p.isRawShaderMaterial===!0,glslVersion:p.glslVersion,precision:F,batching:ze,batchingColor:ze&&w._colorsTexture!==null,instancing:he,instancingColor:he&&w.instanceColor!==null,instancingMorph:he&&w.morphTexture!==null,outputColorSpace:le===null?n.outputColorSpace:le.isXRRenderTarget===!0?le.texture.colorSpace:dt.workingColorSpace,alphaToCoverage:!!p.alphaToCoverage,map:Pe,matcap:Oe,envMap:je,envMapMode:je&&B.mapping,envMapPMREM:ae,envMapMaxLod:ae?He.length-1:null,envMapSize:ae?He[0].width:null,aoMap:xe,lightMap:ge,bumpMap:Ie,normalMap:Ee,displacementMap:Ke,emissiveMap:Be,normalMapObjectSpace:Ee&&p.normalMapType===ip,normalMapTangentSpace:Ee&&p.normalMapType===xc,packedNormalMap:Ee&&p.normalMapType===xc&&u1(p.normalMap.format),metalnessMap:lt,roughnessMap:ht,anisotropy:yt,anisotropyMap:Ze,clearcoat:Y,clearcoatMap:z,clearcoatNormalMap:L,clearcoatRoughnessMap:J,diffuseRoughness:Qt,diffuseRoughnessMap:fe,dispersion:at,retroreflection:wt,iridescence:Se,iridescenceMap:oe,iridescenceThicknessMap:ye,sheen:Gt,sheenColorMap:Te,sheenRoughnessMap:ie,specularMap:se,specularColorMap:ve,specularIntensityMap:V,transmission:Ve,transmissionMap:re,thicknessMap:ne,gradientMap:Me,opaque:p.transparent===!1&&p.blending===Lr&&p.alphaToCoverage===!1,alphaMap:me,alphaTest:_e,alphaHash:ke,combine:p.combine,mapUv:Pe&&d(p.map.channel),aoMapUv:xe&&d(p.aoMap.channel),lightMapUv:ge&&d(p.lightMap.channel),bumpMapUv:Ie&&d(p.bumpMap.channel),normalMapUv:Ee&&d(p.normalMap.channel),displacementMapUv:Ke&&d(p.displacementMap.channel),emissiveMapUv:Be&&d(p.emissiveMap.channel),metalnessMapUv:lt&&d(p.metalnessMap.channel),roughnessMapUv:ht&&d(p.roughnessMap.channel),anisotropyMapUv:Ze&&d(p.anisotropyMap.channel),clearcoatMapUv:z&&d(p.clearcoatMap.channel),clearcoatNormalMapUv:L&&d(p.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:J&&d(p.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:fe&&d(p.diffuseRoughnessMap.channel),iridescenceMapUv:oe&&d(p.iridescenceMap.channel),iridescenceThicknessMapUv:ye&&d(p.iridescenceThicknessMap.channel),sheenColorMapUv:Te&&d(p.sheenColorMap.channel),sheenRoughnessMapUv:ie&&d(p.sheenRoughnessMap.channel),specularMapUv:se&&d(p.specularMap.channel),specularColorMapUv:ve&&d(p.specularColorMap.channel),specularIntensityMapUv:V&&d(p.specularIntensityMap.channel),transmissionMapUv:re&&d(p.transmissionMap.channel),thicknessMapUv:ne&&d(p.thicknessMap.channel),alphaMapUv:me&&d(p.alphaMap.channel),vertexTangents:!!T.attributes.tangent&&(Ee||yt),vertexNormals:!!T.attributes.normal,vertexColors:p.vertexColors,vertexAlphas:p.vertexColors===!0&&!!T.attributes.color&&T.attributes.color.itemSize===4,pointsUvs:w.isPoints===!0&&!!T.attributes.uv&&(Pe||me),fog:!!_,useFog:p.fog===!0,fogExp2:!!_&&_.isFogExp2,flatShading:p.wireframe===!1&&(p.flatShading===!0||T.attributes.normal===void 0&&Ee===!1&&(p.isMeshLambertMaterial||p.isMeshPhongMaterial||p.isMeshStandardMaterial||p.isMeshPhysicalMaterial)),sizeAttenuation:p.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:ce,skinning:w.isSkinnedMesh===!0,hasPositionAttribute:T.attributes.position!==void 0,morphTargets:T.morphAttributes.position!==void 0,morphNormals:T.morphAttributes.normal!==void 0,morphColors:T.morphAttributes.color!==void 0,morphTargetsCount:H,morphTextureStride:Z,numSunLights:v.sun.length,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numSunLightShadows:v.sunShadowMap.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numLightProbeGrids:R.filter(Ae=>Ae.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:p.dithering,shadowMapEnabled:n.shadowMap.enabled&&C.length>0,shadowMapType:n.shadowMap.type,toneMapping:de,decodeVideoTexture:Pe&&p.map.isVideoTexture===!0&&dt.getTransfer(p.map.colorSpace)===bt,decodeVideoTextureEmissive:Be&&p.emissiveMap.isVideoTexture===!0&&dt.getTransfer(p.emissiveMap.colorSpace)===bt,premultipliedAlpha:p.premultipliedAlpha,doubleSided:p.side===Jn,flipSided:p.side===xn,useDepthPacking:p.depthPacking>=0,depthPacking:p.depthPacking||0,index0AttributeName:p.index0AttributeName,extensionClipCullDistance:nt&&p.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(nt&&p.extensions.multiDraw===!0||ze)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:p.customProgramCacheKey()};return tt.vertexUv1s=l.has(1),tt.vertexUv2s=l.has(2),tt.vertexUv3s=l.has(3),l.clear(),tt}function M(p){let v=[];if(p.shaderID?v.push(p.shaderID):(v.push(p.customVertexShaderID),v.push(p.customFragmentShaderID)),p.defines!==void 0)for(let C in p.defines)v.push(C),v.push(p.defines[C]);return p.isRawShaderMaterial===!1&&(x(v,p),g(v,p),v.push(n.outputColorSpace)),v.push(p.customProgramCacheKey),v.join()}function x(p,v){p.push(v.precision),p.push(v.outputColorSpace),p.push(v.envMapMode),p.push(v.envMapPMREM),p.push(v.envMapMaxLod),p.push(v.envMapSize),p.push(v.mapUv),p.push(v.alphaMapUv),p.push(v.lightMapUv),p.push(v.aoMapUv),p.push(v.bumpMapUv),p.push(v.normalMapUv),p.push(v.displacementMapUv),p.push(v.emissiveMapUv),p.push(v.metalnessMapUv),p.push(v.roughnessMapUv),p.push(v.anisotropyMapUv),p.push(v.clearcoatMapUv),p.push(v.clearcoatNormalMapUv),p.push(v.clearcoatRoughnessMapUv),p.push(v.diffuseRoughnessMapUv),p.push(v.iridescenceMapUv),p.push(v.iridescenceThicknessMapUv),p.push(v.sheenColorMapUv),p.push(v.sheenRoughnessMapUv),p.push(v.specularMapUv),p.push(v.specularColorMapUv),p.push(v.specularIntensityMapUv),p.push(v.transmissionMapUv),p.push(v.thicknessMapUv),p.push(v.combine),p.push(v.fogExp2),p.push(v.sizeAttenuation),p.push(v.morphTargetsCount),p.push(v.numSunLights),p.push(v.numDirLights),p.push(v.numPointLights),p.push(v.numSpotLights),p.push(v.numSpotLightMaps),p.push(v.numHemiLights),p.push(v.numRectAreaLights),p.push(v.numSunLightShadows),p.push(v.numDirLightShadows),p.push(v.numPointLightShadows),p.push(v.numSpotLightShadows),p.push(v.numSpotLightShadowsWithMaps),p.push(v.numLightProbes),p.push(v.numLightProbeGrids),p.push(v.shadowMapType),p.push(v.toneMapping),p.push(v.numClippingPlanes),p.push(v.numClipIntersection),p.push(v.depthPacking)}function g(p,v){a.disableAll(),v.instancing&&a.enable(0),v.instancingColor&&a.enable(1),v.instancingMorph&&a.enable(2),v.matcap&&a.enable(3),v.envMap&&a.enable(4),v.normalMapObjectSpace&&a.enable(5),v.normalMapTangentSpace&&a.enable(6),v.clearcoat&&a.enable(7),v.iridescence&&a.enable(8),v.alphaTest&&a.enable(9),v.vertexColors&&a.enable(10),v.vertexAlphas&&a.enable(11),v.vertexUv1s&&a.enable(12),v.vertexUv2s&&a.enable(13),v.vertexUv3s&&a.enable(14),v.vertexTangents&&a.enable(15),v.anisotropy&&a.enable(16),v.alphaHash&&a.enable(17),v.batching&&a.enable(18),v.dispersion&&a.enable(19),v.retroreflection&&a.enable(24),v.diffuseRoughness&&a.enable(25),v.batchingColor&&a.enable(20),v.gradientMap&&a.enable(21),v.packedNormalMap&&a.enable(22),v.vertexNormals&&a.enable(23),p.push(a.mask),a.disableAll(),v.fog&&a.enable(0),v.useFog&&a.enable(1),v.flatShading&&a.enable(2),v.logarithmicDepthBuffer&&a.enable(3),v.reversedDepthBuffer&&a.enable(4),v.skinning&&a.enable(5),v.morphTargets&&a.enable(6),v.morphNormals&&a.enable(7),v.morphColors&&a.enable(8),v.premultipliedAlpha&&a.enable(9),v.shadowMapEnabled&&a.enable(10),v.doubleSided&&a.enable(11),v.flipSided&&a.enable(12),v.useDepthPacking&&a.enable(13),v.dithering&&a.enable(14),v.transmission&&a.enable(15),v.sheen&&a.enable(16),v.opaque&&a.enable(17),v.pointsUvs&&a.enable(18),v.decodeVideoTexture&&a.enable(19),v.decodeVideoTextureEmissive&&a.enable(20),v.alphaToCoverage&&a.enable(21),v.numLightProbeGrids>0&&a.enable(22),v.hasPositionAttribute&&a.enable(23),p.push(a.mask)}function b(p){let v=u[p.type],C;if(v){let y=Si[v];C=Sp.clone(y.uniforms)}else C=p.uniforms;return C}function E(p,v){let C=h.get(v);return C!==void 0?++C.usedTimes:(C=new c1(n,v,p,s),c.push(C),h.set(v,C)),C}function S(p){if(--p.usedTimes===0){let v=c.indexOf(p);c[v]=c[c.length-1],c.pop(),h.delete(p.cacheKey),p.destroy()}}function P(p){o.remove(p)}function A(){o.dispose()}return{getParameters:m,getProgramCacheKey:M,getUniforms:b,acquireProgram:E,releaseProgram:S,releaseShaderCache:P,programs:c,dispose:A}}function d1(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,l){n.get(a)[o]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function p1(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function Gp(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Wp(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function a(u){let d=0;return u.isInstancedMesh&&(d+=2),u.isSkinnedMesh&&(d+=1),d}function o(u,d,m,M,x,g){let b=n[e];return b===void 0?(b={id:u.id,object:u,geometry:d,material:m,materialVariant:a(u),groupOrder:M,renderOrder:u.renderOrder,z:x,group:g},n[e]=b):(b.id=u.id,b.object=u,b.geometry=d,b.material=m,b.materialVariant=a(u),b.groupOrder=M,b.renderOrder=u.renderOrder,b.z=x,b.group=g),e++,b}function l(u,d,m,M,x,g,b){b.reversedDepth===!0&&(x=-x);let E=o(u,d,m,M,x,g);m.transmission>0?i.push(E):m.transparent===!0?s.push(E):t.push(E)}function c(u,d,m,M,x,g){let b=o(u,d,m,M,x,g);m.transmission>0?i.unshift(b):m.transparent===!0?s.unshift(b):t.unshift(b)}function h(u,d){t.length>1&&t.sort(u||p1),i.length>1&&i.sort(d||Gp),s.length>1&&s.sort(d||Gp)}function f(){for(let u=e,d=n.length;u<d;u++){let m=n[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:f,sort:h}}function m1(){let n=new WeakMap;function e(i,s){let r=n.get(i),a;return r===void 0?(a=new Wp,n.set(i,[a])):s>=r.length?(a=new Wp,r.push(a)):a=r[s],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function g1(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new W,color:new We};break;case"SpotLight":t={position:new W,direction:new W,color:new We,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new W,color:new We,distance:0,decay:0};break;case"HemisphereLight":t={direction:new W,skyColor:new We,groundColor:new We};break;case"RectAreaLight":t={color:new We,position:new W,halfWidth:new W,halfHeight:new W};break}return n[e.id]=t,t}}}function x1(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var y1=0;function _1(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function v1(n){let e=new g1,t=x1(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new W);let s=new W,r=new _t,a=new _t;function o(c){let h=0,f=0,u=0;for(let R=0;R<9;R++)i.probe[R].set(0,0,0);let d=0,m=0,M=0,x=0,g=0,b=0,E=0,S=0,P=0,A=0,p=0,v=0,C=0,y=0;c.sort(_1);for(let R=0,_=c.length;R<_;R++){let T=c[R],I=T.color,N=T.intensity,B=T.distance,k=null;if(T.shadow&&T.shadow.map&&(T.shadow.map.texture.format===ds?k=T.shadow.map.texture:k=T.shadow.map.depthTexture||T.shadow.map.texture),T.isAmbientLight)h+=I.r*N,f+=I.g*N,u+=I.b*N;else if(T.isLightProbe){for(let F=0;F<9;F++)i.probe[F].addScaledVector(T.sh.coefficients[F],N);y++}else if(T.isSunLight){let F=e.get(T);if(F.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){let U=T.shadow,H=t.get(T);H.shadowIntensity=U.intensity,H.shadowBias=U.bias,H.shadowNormalBias=U.normalBias,H.shadowRadius=U.radius,H.shadowMapSize.copy(U.mapSize).multiply(U.getFrameExtents()),i.sunShadow[m]=H,i.sunShadowMap[m]=k;let Z=U.getViewportCount();for(let $=0;$<Z;$++)i.sunShadowMatrix[M+$]=U.getMatrix($),i.sunShadowCascade[M+$]=U._cascadeData[$];M+=Z,m++}i.sun[d]=F,d++}else if(T.isDirectionalLight){let F=e.get(T);if(F.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){let U=T.shadow,H=t.get(T);H.shadowIntensity=U.intensity,H.shadowBias=U.bias,H.shadowNormalBias=U.normalBias,H.shadowRadius=U.radius,H.shadowMapSize=U.mapSize,i.directionalShadow[x]=H,i.directionalShadowMap[x]=k,i.directionalShadowMatrix[x]=T.shadow.matrix,P++}i.directional[x]=F,x++}else if(T.isSpotLight){let F=e.get(T);F.position.setFromMatrixPosition(T.matrixWorld),F.color.copy(I).multiplyScalar(N),F.distance=B,F.coneCos=Math.cos(T.angle),F.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),F.decay=T.decay,i.spot[b]=F;let U=T.shadow;if(T.map&&(i.spotLightMap[v]=T.map,v++,U.updateMatrices(T),T.castShadow&&C++),i.spotLightMatrix[b]=U.matrix,T.castShadow){let H=t.get(T);H.shadowIntensity=U.intensity,H.shadowBias=U.bias,H.shadowNormalBias=U.normalBias,H.shadowRadius=U.radius,H.shadowMapSize=U.mapSize,i.spotShadow[b]=H,i.spotShadowMap[b]=k,p++}b++}else if(T.isRectAreaLight){let F=e.get(T);F.color.copy(I).multiplyScalar(N),F.halfWidth.set(T.width*.5,0,0),F.halfHeight.set(0,T.height*.5,0),i.rectArea[E]=F,E++}else if(T.isPointLight){let F=e.get(T);if(F.color.copy(T.color).multiplyScalar(T.intensity),F.distance=T.distance,F.decay=T.decay,T.castShadow){let U=T.shadow,H=t.get(T);H.shadowIntensity=U.intensity,H.shadowBias=U.bias,H.shadowNormalBias=U.normalBias,H.shadowRadius=U.radius,H.shadowMapSize=U.mapSize,H.shadowCameraNear=U.camera.near,H.shadowCameraFar=U.camera.far,i.pointShadow[g]=H,i.pointShadowMap[g]=k,i.pointShadowMatrix[g]=T.shadow.matrix,A++}i.point[g]=F,g++}else if(T.isHemisphereLight){let F=e.get(T);F.skyColor.copy(T.color).multiplyScalar(N),F.groundColor.copy(T.groundColor).multiplyScalar(N),i.hemi[S]=F,S++}}E>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Re.LTC_FLOAT_1,i.rectAreaLTC2=Re.LTC_FLOAT_2):(i.rectAreaLTC1=Re.LTC_HALF_1,i.rectAreaLTC2=Re.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=f,i.ambient[2]=u;let w=i.hash;(w.sunLength!==d||w.directionalLength!==x||w.pointLength!==g||w.spotLength!==b||w.rectAreaLength!==E||w.hemiLength!==S||w.numSunShadows!==m||w.numDirectionalShadows!==P||w.numPointShadows!==A||w.numSpotShadows!==p||w.numSpotMaps!==v||w.numLightProbes!==y)&&(i.sun.length=d,i.directional.length=x,i.spot.length=b,i.rectArea.length=E,i.point.length=g,i.hemi.length=S,i.sunShadow.length=m,i.sunShadowMap.length=m,i.sunShadowMatrix.length=M,i.sunShadowCascade.length=M,i.directionalShadow.length=P,i.directionalShadowMap.length=P,i.directionalShadowMatrix.length=P,i.pointShadow.length=A,i.pointShadowMap.length=A,i.pointShadowMatrix.length=A,i.spotShadow.length=p,i.spotShadowMap.length=p,i.spotLightMatrix.length=p+v-C,i.spotLightMap.length=v,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=y,w.sunLength=d,w.directionalLength=x,w.pointLength=g,w.spotLength=b,w.rectAreaLength=E,w.hemiLength=S,w.numSunShadows=m,w.numDirectionalShadows=P,w.numPointShadows=A,w.numSpotShadows=p,w.numSpotMaps=v,w.numLightProbes=y,i.version=y1++)}function l(c,h){let f=0,u=0,d=0,m=0,M=0,x=0,g=h.matrixWorldInverse;for(let b=0,E=c.length;b<E;b++){let S=c[b];if(S.isSunLight){let P=i.sun[f];P.direction.setFromMatrixPosition(S.matrixWorld),P.direction.transformDirection(g),f++}else if(S.isDirectionalLight){let P=i.directional[u];P.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),P.direction.sub(s),P.direction.transformDirection(g),u++}else if(S.isSpotLight){let P=i.spot[m];P.position.setFromMatrixPosition(S.matrixWorld),P.position.applyMatrix4(g),P.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),P.direction.sub(s),P.direction.transformDirection(g),m++}else if(S.isRectAreaLight){let P=i.rectArea[M];P.position.setFromMatrixPosition(S.matrixWorld),P.position.applyMatrix4(g),a.identity(),r.copy(S.matrixWorld),r.premultiply(g),a.extractRotation(r),P.halfWidth.set(S.width*.5,0,0),P.halfHeight.set(0,S.height*.5,0),P.halfWidth.applyMatrix4(a),P.halfHeight.applyMatrix4(a),M++}else if(S.isPointLight){let P=i.point[d];P.position.setFromMatrixPosition(S.matrixWorld),P.position.applyMatrix4(g),d++}else if(S.isHemisphereLight){let P=i.hemi[x];P.direction.setFromMatrixPosition(S.matrixWorld),P.direction.transformDirection(g),x++}}}return{setup:o,setupView:l,state:i}}function Xp(n){let e=new v1(n),t=[],i=[],s=[];function r(f){h.camera=f,t.length=0,i.length=0,s.length=0}function a(f){f.isLightProbeGrid?s.push(f):t.push(f)}function o(f){i.push(f)}function l(){e.setup(t),s.sort((f,u)=>f.priority-u.priority||f.id-u.id)}function c(f){e.setupView(t,f)}let h={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function M1(n){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new Xp(n),e.set(s,[o])):r>=a.length?(o=new Xp(n),a.push(o)):o=a[r],o}function i(){e=new WeakMap}return{get:t,dispose:i}}var b1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,S1=`uniform sampler2D shadow_pass;
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
}`,T1=[new W(1,0,0),new W(-1,0,0),new W(0,1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1)],w1=[new W(0,-1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1),new W(0,-1,0),new W(0,-1,0)],qp=new _t,$a=new W,wu=new W;function E1(n,e,t){let i=new rs,s=new pe,r=new pe,a=new Lt,o=new gl,l=new xl,c={},h=t.maxTextureSize,f={[fs]:xn,[xn]:fs,[Jn]:Jn},u=new Kn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pe},radius:{value:4}},vertexShader:b1,fragmentShader:S1}),d=u.clone();d.defines.HORIZONTAL_PASS=1;let m=new Xt;m.setAttribute("position",new Zt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let M=new Ye(m,u),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=za;let g=this.type;this.render=function(A,p,v){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||A.length===0)return;this.type===Cl&&(Ge("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=za);let C=n.getRenderTarget(),y=n.getActiveCubeFace(),w=n.getActiveMipmapLevel(),R=n.state;R.setBlending(Fs),R.buffers.depth.getReversed()===!0?R.buffers.color.setClear(0,0,0,0):R.buffers.color.setClear(1,1,1,1),R.buffers.depth.setTest(!0),R.setScissorTest(!1);let _=g!==this.type;_&&p.traverse(function(T){T.material&&(Array.isArray(T.material)?T.material.forEach(I=>I.needsUpdate=!0):T.material.needsUpdate=!0)});for(let T=0,I=A.length;T<I;T++){let N=A[T],B=N.shadow;if(B===void 0){Ge("WebGLShadowMap:",N,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;s.copy(B.mapSize);let k=B.getFrameExtents();s.multiply(k),r.copy(B.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/k.x),s.x=r.x*k.x,B.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/k.y),s.y=r.y*k.y,B.mapSize.y=r.y));let F=n.state.buffers.depth.getReversed();if(B.camera._reversedDepth=F,B.map===null||_===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===Ir){if(N.isPointLight){Ge("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new kn(s.x,s.y,{format:ds,type:ui,minFilter:Pn,magFilter:Pn,generateMipmaps:!1}),B.map.texture.name=N.name+".shadowMap",B.map.depthTexture=new Oi(s.x,s.y,jn),B.map.depthTexture.name=N.name+".shadowMapDepth",B.map.depthTexture.format=Di,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=dn,B.map.depthTexture.magFilter=dn}else N.isPointLight?(B.map=new Ka(s.x),B.map.depthTexture=new ba(s.x,hi)):(B.map=new kn(s.x,s.y),B.map.depthTexture=new Oi(s.x,s.y,hi)),B.map.depthTexture.name=N.name+".shadowMap",B.map.depthTexture.format=Di,this.type===za?(B.map.depthTexture.compareFunction=F?mu:pu,B.map.depthTexture.minFilter=Pn,B.map.depthTexture.magFilter=Pn):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=dn,B.map.depthTexture.magFilter=dn);B.camera.updateProjectionMatrix()}B.map.isWebGLCubeRenderTarget!==!0&&(B.map.width!==s.x||B.map.height!==s.y)&&B.map.setSize(s.x,s.y);let U=B.map.isWebGLCubeRenderTarget?6:B.getViewportCount();N.isPointLight!==!0&&B.updateMatrices(N,v);let H=(B.camera.layers.mask&4294967294)!==0?B.camera.layers:v.layers;for(let Z=0;Z<U;Z++){let $=B.getCamera(Z);if(N.isPointLight){let G=B.camera,ee=B.matrix,te=N.distance||G.far;te!==G.far&&(G.far=te,G.updateProjectionMatrix()),$a.setFromMatrixPosition(N.matrixWorld),G.position.copy($a),wu.copy(G.position),wu.add(T1[Z]),G.up.copy(w1[Z]),G.lookAt(wu),G.updateMatrixWorld(),ee.makeTranslation(-$a.x,-$a.y,-$a.z),qp.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),B._frustum.setFromProjectionMatrix(qp,G.coordinateSystem,G.reversedDepth)}if(B.map.isWebGLCubeRenderTarget)n.setRenderTarget(B.map,Z),n.clear();else{Z===0&&(n.setRenderTarget(B.map),n.clear());let G=B.getViewport(Z);a.set(r.x*G.x,r.y*G.y,r.x*G.z,r.y*G.w),R.viewport(a)}i=B.getFrustum(Z),S(p,v,$,N,H,this.type)}B.isPointLightShadow!==!0&&this.type===Ir&&b(B,v),B.needsUpdate=!1}g=this.type,x.needsUpdate=!1,n.setRenderTarget(C,y,w)};function b(A,p){let v=e.update(M);u.defines.VSM_SAMPLES!==A.blurSamples&&(u.defines.VSM_SAMPLES=A.blurSamples,d.defines.VSM_SAMPLES=A.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),A.mapPass===null?A.mapPass=new kn(s.x,s.y,{format:ds,type:ui}):(A.mapPass.width!==A.map.width||A.mapPass.height!==A.map.height)&&A.mapPass.setSize(A.map.width,A.map.height),u.uniforms.shadow_pass.value=A.map.depthTexture,u.uniforms.resolution.value.set(A.map.width,A.map.height),u.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(p,null,v,u,M,null),d.uniforms.shadow_pass.value=A.mapPass.texture,d.uniforms.resolution.value.set(A.map.width,A.map.height),d.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(p,null,v,d,M,null)}function E(A,p,v,C){let y=null,w=v.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(w!==void 0)y=w;else if(y=v.isPointLight===!0?l:o,n.localClippingEnabled&&p.clipShadows===!0&&Array.isArray(p.clippingPlanes)&&p.clippingPlanes.length!==0||p.displacementMap&&p.displacementScale!==0||p.alphaMap&&p.alphaTest>0||p.map&&p.alphaTest>0||p.alphaToCoverage===!0){let R=y.uuid,_=p.uuid,T=c[R];T===void 0&&(T={},c[R]=T);let I=T[_];I===void 0&&(I=y.clone(),T[_]=I,p.addEventListener("dispose",P)),y=I}if(y.visible=p.visible,y.wireframe=p.wireframe,C===Ir?y.side=p.shadowSide!==null?p.shadowSide:p.side:y.side=p.shadowSide!==null?p.shadowSide:f[p.side],y.alphaMap=p.alphaMap,y.alphaTest=p.alphaToCoverage===!0?.5:p.alphaTest,y.map=p.map,y.clipShadows=p.clipShadows,y.clippingPlanes=p.clippingPlanes,y.clipIntersection=p.clipIntersection,y.displacementMap=p.displacementMap,y.displacementScale=p.displacementScale,y.displacementBias=p.displacementBias,y.wireframeLinewidth=p.wireframeLinewidth,y.linewidth=p.linewidth,v.isPointLight===!0&&y.isMeshDistanceMaterial===!0){let R=n.properties.get(y);R.light=v}return y}function S(A,p,v,C,y,w){if(A.visible===!1)return;if(A.layers.test(y)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&w===Ir)&&(!A.frustumCulled||A.intersectsFrustum(i))){A.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,A.matrixWorld);let T=e.update(A),I=A.material;if(Array.isArray(I)){let N=T.groups;for(let B=0,k=N.length;B<k;B++){let F=N[B],U=I[F.materialIndex];if(U&&U.visible){let H=E(A,U,C,w);A.onBeforeShadow(n,A,p,v,T,H,F),n.renderBufferDirect(v,null,T,H,A,F),A.onAfterShadow(n,A,p,v,T,H,F)}}}else if(I.visible){let N=E(A,I,C,w);A.onBeforeShadow(n,A,p,v,T,N,null),n.renderBufferDirect(v,null,T,N,A,null),A.onAfterShadow(n,A,p,v,T,N,null)}}let _=A.children;for(let T=0,I=_.length;T<I;T++)S(_[T],p,v,C,y,w)}function P(A){A.target.removeEventListener("dispose",P);for(let v in c){let C=c[v],y=A.target.uuid;y in C&&(C[y].dispose(),delete C[y])}}}function A1(n,e){function t(){let V=!1,re=new Lt,ne=null,Me=new Lt(0,0,0,0);return{setMask:function(me){ne!==me&&!V&&(n.colorMask(me,me,me,me),ne=me)},setLocked:function(me){V=me},setClear:function(me,_e,ke,nt,de){de===!0&&(me*=nt,_e*=nt,ke*=nt),re.set(me,_e,ke,nt),Me.equals(re)===!1&&(n.clearColor(me,_e,ke,nt),Me.copy(re))},reset:function(){V=!1,ne=null,Me.set(-1,0,0,0)}}}function i(){let V=!1,re=!1,ne=null,Me=null,me=null;return{setReversed:function(_e){if(re!==_e){let ke=e.get("EXT_clip_control");_e?ke.clipControlEXT(ke.LOWER_LEFT_EXT,ke.ZERO_TO_ONE_EXT):ke.clipControlEXT(ke.LOWER_LEFT_EXT,ke.NEGATIVE_ONE_TO_ONE_EXT),re=_e;let nt=me;me=null,this.setClear(nt)}},getReversed:function(){return re},setTest:function(_e){_e?ce(n.DEPTH_TEST):he(n.DEPTH_TEST)},setMask:function(_e){ne!==_e&&!V&&(n.depthMask(_e),ne=_e)},setFunc:function(_e){if(re&&(_e=dp[_e]),Me!==_e){switch(_e){case $o:n.depthFunc(n.NEVER);break;case Zo:n.depthFunc(n.ALWAYS);break;case Ko:n.depthFunc(n.LESS);break;case yr:n.depthFunc(n.LEQUAL);break;case Jo:n.depthFunc(n.EQUAL);break;case jo:n.depthFunc(n.GEQUAL);break;case Qo:n.depthFunc(n.GREATER);break;case el:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Me=_e}},setLocked:function(_e){V=_e},setClear:function(_e){me!==_e&&(me=_e,re&&(_e=1-_e),n.clearDepth(_e))},reset:function(){V=!1,ne=null,Me=null,me=null,re=!1}}}function s(){let V=!1,re=null,ne=null,Me=null,me=null,_e=null,ke=null,nt=null,de=null;return{setTest:function(He){V||(He?ce(n.STENCIL_TEST):he(n.STENCIL_TEST))},setMask:function(He){re!==He&&!V&&(n.stencilMask(He),re=He)},setFunc:function(He,tt,Ae){(ne!==He||Me!==tt||me!==Ae)&&(n.stencilFunc(He,tt,Ae),ne=He,Me=tt,me=Ae)},setOp:function(He,tt,Ae){(_e!==He||ke!==tt||nt!==Ae)&&(n.stencilOp(He,tt,Ae),_e=He,ke=tt,nt=Ae)},setLocked:function(He){V=He},setClear:function(He){de!==He&&(n.clearStencil(He),de=He)},reset:function(){V=!1,re=null,ne=null,Me=null,me=null,_e=null,ke=null,nt=null,de=null}}}let r=new t,a=new i,o=new s,l={},c=new WeakMap,h={},f={},u={},d=new WeakMap,m=[],M=null,x=!1,g=null,b=null,E=null,S=null,P=null,A=null,p=null,v=new We(0,0,0),C=0,y=!1,w=null,R=null,_=null,T=null,I=null,N=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),B=!1,k=0,F=n.getParameter(n.VERSION);F.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(F)[1]),B=k>=1):F.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),B=k>=2);let U=null,H={},Z=n.getParameter(n.SCISSOR_BOX),$=n.getParameter(n.VIEWPORT),G=new Lt().fromArray(Z),ee=new Lt().fromArray($);function te(V,re,ne,Me){let me=new Uint8Array(4),_e=n.createTexture();n.bindTexture(V,_e),n.texParameteri(V,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(V,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ke=0;ke<ne;ke++)V===n.TEXTURE_3D||V===n.TEXTURE_2D_ARRAY?n.texImage3D(re,0,n.RGBA,1,1,Me,0,n.RGBA,n.UNSIGNED_BYTE,me):n.texImage2D(re+ke,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,me);return _e}let le={};le[n.TEXTURE_2D]=te(n.TEXTURE_2D,n.TEXTURE_2D,1),le[n.TEXTURE_CUBE_MAP]=te(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),le[n.TEXTURE_2D_ARRAY]=te(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),le[n.TEXTURE_3D]=te(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ce(n.DEPTH_TEST),a.setFunc(yr),Ie(!1),Ee(Zh),ce(n.CULL_FACE),xe(Fs);function ce(V){h[V]!==!0&&(n.enable(V),h[V]=!0)}function he(V){h[V]!==!1&&(n.disable(V),h[V]=!1)}function ze(V,re){return u[V]!==re?(n.bindFramebuffer(V,re),u[V]=re,V===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=re),V===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=re),!0):!1}function Pe(V,re){let ne=m,Me=!1;if(V){ne=d.get(re),ne===void 0&&(ne=[],d.set(re,ne));let me=V.textures;if(ne.length!==me.length||ne[0]!==n.COLOR_ATTACHMENT0){for(let _e=0,ke=me.length;_e<ke;_e++)ne[_e]=n.COLOR_ATTACHMENT0+_e;ne.length=me.length,Me=!0}}else ne[0]!==n.BACK&&(ne[0]=n.BACK,Me=!0);Me&&n.drawBuffers(ne)}function Oe(V){return M!==V?(n.useProgram(V),M=V,!0):!1}let je={[Os]:n.FUNC_ADD,[Fd]:n.FUNC_SUBTRACT,[Od]:n.FUNC_REVERSE_SUBTRACT};je[Bd]=n.MIN,je[zd]=n.MAX;let ae={[kd]:n.ZERO,[Hd]:n.ONE,[Vd]:n.SRC_COLOR,[Qh]:n.SRC_ALPHA,[$d]:n.SRC_ALPHA_SATURATE,[qd]:n.DST_COLOR,[Wd]:n.DST_ALPHA,[Gd]:n.ONE_MINUS_SRC_COLOR,[eu]:n.ONE_MINUS_SRC_ALPHA,[Yd]:n.ONE_MINUS_DST_COLOR,[Xd]:n.ONE_MINUS_DST_ALPHA,[Zd]:n.CONSTANT_COLOR,[Kd]:n.ONE_MINUS_CONSTANT_COLOR,[Jd]:n.CONSTANT_ALPHA,[jd]:n.ONE_MINUS_CONSTANT_ALPHA};function xe(V,re,ne,Me,me,_e,ke,nt,de,He){if(V===Fs){x===!0&&(he(n.BLEND),x=!1);return}if(x===!1&&(ce(n.BLEND),x=!0),V!==Ud){if(V!==g||He!==y){if((b!==Os||P!==Os)&&(n.blendEquation(n.FUNC_ADD),b=Os,P=Os),He)switch(V){case Lr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Kh:n.blendFunc(n.ONE,n.ONE);break;case Jh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case jh:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Xe("WebGLState: Invalid blending: ",V);break}else switch(V){case Lr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Kh:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Jh:Xe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case jh:Xe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Xe("WebGLState: Invalid blending: ",V);break}E=null,S=null,A=null,p=null,v.set(0,0,0),C=0,g=V,y=He}return}me=me||re,_e=_e||ne,ke=ke||Me,(re!==b||me!==P)&&(n.blendEquationSeparate(je[re],je[me]),b=re,P=me),(ne!==E||Me!==S||_e!==A||ke!==p)&&(n.blendFuncSeparate(ae[ne],ae[Me],ae[_e],ae[ke]),E=ne,S=Me,A=_e,p=ke),(nt.equals(v)===!1||de!==C)&&(n.blendColor(nt.r,nt.g,nt.b,de),v.copy(nt),C=de),g=V,y=!1}function ge(V,re){V.side===Jn?he(n.CULL_FACE):ce(n.CULL_FACE);let ne=V.side===xn;re&&(ne=!ne),Ie(ne),V.blending===Lr&&V.transparent===!1?xe(Fs):xe(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),a.setFunc(V.depthFunc),a.setTest(V.depthTest),a.setMask(V.depthWrite),r.setMask(V.colorWrite);let Me=V.stencilWrite;o.setTest(Me),Me&&(o.setMask(V.stencilWriteMask),o.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),o.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),Be(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?ce(n.SAMPLE_ALPHA_TO_COVERAGE):he(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ie(V){w!==V&&(V?n.frontFace(n.CW):n.frontFace(n.CCW),w=V)}function Ee(V){V!==Nd?(ce(n.CULL_FACE),V!==R&&(V===Zh?n.cullFace(n.BACK):V===Dd?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):he(n.CULL_FACE),R=V}function Ke(V){V!==_&&(B&&n.lineWidth(V),_=V)}function Be(V,re,ne){V?(ce(n.POLYGON_OFFSET_FILL),(T!==re||I!==ne)&&(T=re,I=ne,a.getReversed()&&(re=-re,ne=-ne),n.polygonOffset(re,ne))):he(n.POLYGON_OFFSET_FILL)}function lt(V){V?ce(n.SCISSOR_TEST):he(n.SCISSOR_TEST)}function ht(V){V===void 0&&(V=n.TEXTURE0+N-1),U!==V&&(n.activeTexture(V),U=V)}function yt(V,re,ne){ne===void 0&&(U===null?ne=n.TEXTURE0+N-1:ne=U);let Me=H[ne];Me===void 0&&(Me={type:void 0,texture:void 0},H[ne]=Me),(Me.type!==V||Me.texture!==re)&&(U!==ne&&(n.activeTexture(ne),U=ne),n.bindTexture(V,re||le[V]),Me.type=V,Me.texture=re)}function Y(){let V=H[U];V!==void 0&&V.type!==void 0&&(n.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function Qt(){try{n.compressedTexImage2D(...arguments)}catch(V){Xe("WebGLState:",V)}}function at(){try{n.compressedTexImage3D(...arguments)}catch(V){Xe("WebGLState:",V)}}function wt(){try{n.texSubImage2D(...arguments)}catch(V){Xe("WebGLState:",V)}}function Se(){try{n.texSubImage3D(...arguments)}catch(V){Xe("WebGLState:",V)}}function Gt(){try{n.compressedTexSubImage2D(...arguments)}catch(V){Xe("WebGLState:",V)}}function Ve(){try{n.compressedTexSubImage3D(...arguments)}catch(V){Xe("WebGLState:",V)}}function Ze(){try{n.texStorage2D(...arguments)}catch(V){Xe("WebGLState:",V)}}function z(){try{n.texStorage3D(...arguments)}catch(V){Xe("WebGLState:",V)}}function L(){try{n.texImage2D(...arguments)}catch(V){Xe("WebGLState:",V)}}function J(){try{n.texImage3D(...arguments)}catch(V){Xe("WebGLState:",V)}}function fe(V){return f[V]!==void 0?f[V]:n.getParameter(V)}function oe(V,re){f[V]!==re&&(n.pixelStorei(V,re),f[V]=re)}function ye(V){G.equals(V)===!1&&(n.scissor(V.x,V.y,V.z,V.w),G.copy(V))}function Te(V){ee.equals(V)===!1&&(n.viewport(V.x,V.y,V.z,V.w),ee.copy(V))}function ie(V,re){let ne=c.get(re);ne===void 0&&(ne=new WeakMap,c.set(re,ne));let Me=ne.get(V);Me===void 0&&(Me=n.getUniformBlockIndex(re,V.name),n.uniformBlockBinding(re,Me,Me),ne.set(V,Me))}function se(V,re,ne){let me=c.get(re).get(V);l[me]!==ne&&(n.bindBufferBase(n.UNIFORM_BUFFER,me,ne),l[me]=ne)}function ve(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),h={},f={},U=null,H={},u={},l={},d=new WeakMap,m=[],M=null,x=!1,g=null,b=null,E=null,S=null,P=null,A=null,p=null,v=new We(0,0,0),C=0,y=!1,w=null,R=null,_=null,T=null,I=null,G.set(0,0,n.canvas.width,n.canvas.height),ee.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ce,disable:he,bindFramebuffer:ze,drawBuffers:Pe,useProgram:Oe,setBlending:xe,setMaterial:ge,setFlipSided:Ie,setCullFace:Ee,setLineWidth:Ke,setPolygonOffset:Be,setScissorTest:lt,activeTexture:ht,bindTexture:yt,unbindTexture:Y,compressedTexImage2D:Qt,compressedTexImage3D:at,texImage2D:L,texImage3D:J,pixelStorei:oe,getParameter:fe,updateUBOMapping:ie,uniformBlockBinding:se,texStorage2D:Ze,texStorage3D:z,texSubImage2D:wt,texSubImage3D:Se,compressedTexSubImage2D:Gt,compressedTexSubImage3D:Ve,scissor:ye,viewport:Te,reset:ve}}function R1(n,e,t,i,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new pe,h=new WeakMap,f=new Set,u,d=new WeakMap,m=new Set,M=new FinalizationRegistry(z=>m.delete(z)),x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(z,L){return x?new OffscreenCanvas(z,L):ua("canvas")}function b(z,L,J){let fe=1,oe=Ze(z);if((oe.width>J||oe.height>J)&&(fe=J/Math.max(oe.width,oe.height)),fe<1)if(typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&z instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&z instanceof ImageBitmap||typeof VideoFrame<"u"&&z instanceof VideoFrame){let ye=Math.floor(fe*oe.width),Te=Math.floor(fe*oe.height);u===void 0&&(u=g(ye,Te));let ie=L?g(ye,Te):u;return ie.width=ye,ie.height=Te,ie.getContext("2d").drawImage(z,0,0,ye,Te),Ge("WebGLRenderer: Texture has been resized from ("+oe.width+"x"+oe.height+") to ("+ye+"x"+Te+")."),ie}else return"data"in z&&Ge("WebGLRenderer: Image in DataTexture is too big ("+oe.width+"x"+oe.height+")."),z;return z}function E(z){return z.generateMipmaps}function S(z){n.generateMipmap(z)}function P(z){return z.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:z.isWebGL3DRenderTarget?n.TEXTURE_3D:z.isWebGLArrayRenderTarget||z.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function A(z,L,J,fe,oe,ye=!1){if(z!==null){if(n[z]!==void 0)return n[z];Ge("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+z+"'")}let Te;fe&&(Te=e.get("EXT_texture_norm16"),Te||Ge("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ie=L;if(L===n.RED&&(J===n.FLOAT&&(ie=n.R32F),J===n.HALF_FLOAT&&(ie=n.R16F),J===n.UNSIGNED_BYTE&&(ie=n.R8),J===n.UNSIGNED_SHORT&&Te&&(ie=Te.R16_EXT),J===n.SHORT&&Te&&(ie=Te.R16_SNORM_EXT)),L===n.RED_INTEGER&&(J===n.UNSIGNED_BYTE&&(ie=n.R8UI),J===n.UNSIGNED_SHORT&&(ie=n.R16UI),J===n.UNSIGNED_INT&&(ie=n.R32UI),J===n.BYTE&&(ie=n.R8I),J===n.SHORT&&(ie=n.R16I),J===n.INT&&(ie=n.R32I)),L===n.RG&&(J===n.FLOAT&&(ie=n.RG32F),J===n.HALF_FLOAT&&(ie=n.RG16F),J===n.UNSIGNED_BYTE&&(ie=n.RG8),J===n.UNSIGNED_SHORT&&Te&&(ie=Te.RG16_EXT),J===n.SHORT&&Te&&(ie=Te.RG16_SNORM_EXT)),L===n.RG_INTEGER&&(J===n.UNSIGNED_BYTE&&(ie=n.RG8UI),J===n.UNSIGNED_SHORT&&(ie=n.RG16UI),J===n.UNSIGNED_INT&&(ie=n.RG32UI),J===n.BYTE&&(ie=n.RG8I),J===n.SHORT&&(ie=n.RG16I),J===n.INT&&(ie=n.RG32I)),L===n.RGB_INTEGER&&(J===n.UNSIGNED_BYTE&&(ie=n.RGB8UI),J===n.UNSIGNED_SHORT&&(ie=n.RGB16UI),J===n.UNSIGNED_INT&&(ie=n.RGB32UI),J===n.BYTE&&(ie=n.RGB8I),J===n.SHORT&&(ie=n.RGB16I),J===n.INT&&(ie=n.RGB32I)),L===n.RGBA_INTEGER&&(J===n.UNSIGNED_BYTE&&(ie=n.RGBA8UI),J===n.UNSIGNED_SHORT&&(ie=n.RGBA16UI),J===n.UNSIGNED_INT&&(ie=n.RGBA32UI),J===n.BYTE&&(ie=n.RGBA8I),J===n.SHORT&&(ie=n.RGBA16I),J===n.INT&&(ie=n.RGBA32I)),L===n.RGB&&(J===n.UNSIGNED_SHORT&&Te&&(ie=Te.RGB16_EXT),J===n.SHORT&&Te&&(ie=Te.RGB16_SNORM_EXT),J===n.UNSIGNED_INT_5_9_9_9_REV&&(ie=n.RGB9_E5),J===n.UNSIGNED_INT_10F_11F_11F_REV&&(ie=n.R11F_G11F_B10F)),L===n.RGBA){let se=ye?ha:dt.getTransfer(oe);J===n.FLOAT&&(ie=n.RGBA32F),J===n.HALF_FLOAT&&(ie=n.RGBA16F),J===n.UNSIGNED_BYTE&&(ie=se===bt?n.SRGB8_ALPHA8:n.RGBA8),J===n.UNSIGNED_SHORT&&Te&&(ie=Te.RGBA16_EXT),J===n.SHORT&&Te&&(ie=Te.RGBA16_SNORM_EXT),J===n.UNSIGNED_SHORT_4_4_4_4&&(ie=n.RGBA4),J===n.UNSIGNED_SHORT_5_5_5_1&&(ie=n.RGB5_A1)}return(ie===n.R16F||ie===n.R32F||ie===n.RG16F||ie===n.RG32F||ie===n.RGBA16F||ie===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ie}function p(z,L){let J;return z?L===null||L===hi||L===zs?J=n.DEPTH24_STENCIL8:L===jn?J=n.DEPTH32F_STENCIL8:L===Dr&&(J=n.DEPTH24_STENCIL8,Ge("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):L===null||L===hi||L===zs?J=n.DEPTH_COMPONENT24:L===jn?J=n.DEPTH_COMPONENT32F:L===Dr&&(J=n.DEPTH_COMPONENT16),J}function v(z,L){return E(z)===!0||z.isFramebufferTexture&&z.minFilter!==dn&&z.minFilter!==Pn?Math.log2(Math.max(L.width,L.height))+1:z.mipmaps.length>0?z.mipmaps.length:z.isCompressedTexture&&Array.isArray(z.image)?L.mipmaps.length:1}function C(z){let L=new WeakRef(z);i.get(z).__ref=L,m.add(L),M.register(z,L,L)}function y(z){let L=i.get(z).__ref;L!==void 0&&(m.delete(L),M.unregister(L))}function w(z){_(z.target)}function R(z){T(z.target)}function _(z){z.removeEventListener("dispose",w),y(z),N(z),z.isVideoTexture&&h.delete(z),z.isHTMLTexture&&f.delete(z)}function T(z){z.removeEventListener("dispose",R),y(z),k(z)}function I(){for(let z of m){let L=z.deref();L!==void 0&&(L.isRenderTarget===!0?T(L):_(L))}m.clear(),f.clear()}function N(z){let L=i.get(z);if(L.__webglInit===void 0)return;let J=z.source,fe=d.get(J);if(fe){let oe=fe[L.__cacheKey];oe.usedTimes--,oe.usedTimes===0&&B(z),Object.keys(fe).length===0&&d.delete(J)}i.remove(z)}function B(z){let L=i.get(z);n.deleteTexture(L.__webglTexture);let J=z.source,fe=d.get(J);delete fe[L.__cacheKey],a.memory.textures--}function k(z){let L=i.get(z);L.__depthDisposeCallback&&L.__depthDisposeCallback();let J=z.depthTexture;if(J&&J.renderTarget===z&&_(J),z.isWebGLCubeRenderTarget)for(let oe=0;oe<6;oe++){if(Array.isArray(L.__webglFramebuffer[oe]))for(let ye=0;ye<L.__webglFramebuffer[oe].length;ye++)n.deleteFramebuffer(L.__webglFramebuffer[oe][ye]);else n.deleteFramebuffer(L.__webglFramebuffer[oe]);L.__webglDepthbuffer&&n.deleteRenderbuffer(L.__webglDepthbuffer[oe])}else{if(Array.isArray(L.__webglFramebuffer))for(let oe=0;oe<L.__webglFramebuffer.length;oe++)n.deleteFramebuffer(L.__webglFramebuffer[oe]);else n.deleteFramebuffer(L.__webglFramebuffer);if(L.__webglDepthbuffer&&n.deleteRenderbuffer(L.__webglDepthbuffer),L.__webglMultisampledFramebuffer&&n.deleteFramebuffer(L.__webglMultisampledFramebuffer),L.__webglColorRenderbuffer)for(let oe=0;oe<L.__webglColorRenderbuffer.length;oe++)L.__webglColorRenderbuffer[oe]&&n.deleteRenderbuffer(L.__webglColorRenderbuffer[oe]);L.__webglDepthRenderbuffer&&n.deleteRenderbuffer(L.__webglDepthRenderbuffer)}let fe=z.textures;for(let oe=0,ye=fe.length;oe<ye;oe++){let Te=i.get(fe[oe]);Te.__webglTexture&&(n.deleteTexture(Te.__webglTexture),a.memory.textures--),i.remove(fe[oe])}i.remove(z)}let F=0;function U(){F=0}function H(){return F}function Z(z){F=z}function $(){let z=F;return z>=s.maxTextures&&Ge("WebGLTextures: Trying to use "+(z+1)+" texture units while this GPU supports only "+s.maxTextures),F+=1,z}function G(z){let L=[];return L.push(z.wrapS),L.push(z.wrapT),L.push(z.wrapR||0),L.push(z.magFilter),L.push(z.minFilter),L.push(z.anisotropy),L.push(z.internalFormat),L.push(z.format),L.push(z.type),L.push(z.generateMipmaps),L.push(z.mipmapsAutoUpdate),L.push(z.premultiplyAlpha),L.push(z.flipY),L.push(z.unpackAlignment),L.push(z.colorSpace),L.join()}function ee(z,L){let J=i.get(z);if(z.isVideoTexture&&Gt(z),z.isRenderTargetTexture===!1&&z.isExternalTexture!==!0&&z.version>0&&J.__version!==z.version){let fe=z.image;if(fe===null)Ge("WebGLRenderer: Texture marked for update but no image data found.");else if(fe.complete===!1)Ge("WebGLRenderer: Texture marked for update but image is incomplete");else{ge(J,z,L);return}}else z.isExternalTexture&&(J.__webglTexture=z.sourceTexture?z.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,J.__webglTexture,n.TEXTURE0+L)}function te(z,L){let J=i.get(z);if(z.isRenderTargetTexture===!1&&z.version>0&&J.__version!==z.version){ge(J,z,L);return}else z.isExternalTexture&&(J.__webglTexture=z.sourceTexture?z.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,J.__webglTexture,n.TEXTURE0+L)}function le(z,L){let J=i.get(z);if(z.isRenderTargetTexture===!1&&z.version>0&&J.__version!==z.version){ge(J,z,L);return}t.bindTexture(n.TEXTURE_3D,J.__webglTexture,n.TEXTURE0+L)}function ce(z,L){let J=i.get(z);if(z.version>0&&J.__version!==z.version){Ie(J,z,L);return}t.bindTexture(n.TEXTURE_CUBE_MAP,J.__webglTexture,n.TEXTURE0+L)}let he={[_r]:n.REPEAT,[pi]:n.CLAMP_TO_EDGE,[tl]:n.MIRRORED_REPEAT},ze={[dn]:n.NEAREST,[tp]:n.NEAREST_MIPMAP_NEAREST,[Ha]:n.NEAREST_MIPMAP_LINEAR,[Pn]:n.LINEAR,[Nl]:n.LINEAR_MIPMAP_NEAREST,[ki]:n.LINEAR_MIPMAP_LINEAR},Pe={[rp]:n.NEVER,[gu]:n.ALWAYS,[ap]:n.LESS,[pu]:n.LEQUAL,[op]:n.EQUAL,[mu]:n.GEQUAL,[lp]:n.GREATER,[cp]:n.NOTEQUAL};function Oe(z,L){if(L.type===jn&&e.has("OES_texture_float_linear")===!1&&(L.magFilter===Pn||L.magFilter===Nl||L.magFilter===Ha||L.magFilter===ki||L.minFilter===Pn||L.minFilter===Nl||L.minFilter===Ha||L.minFilter===ki)&&Ge("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(z,n.TEXTURE_WRAP_S,he[L.wrapS]),n.texParameteri(z,n.TEXTURE_WRAP_T,he[L.wrapT]),(z===n.TEXTURE_3D||z===n.TEXTURE_2D_ARRAY)&&n.texParameteri(z,n.TEXTURE_WRAP_R,he[L.wrapR]),n.texParameteri(z,n.TEXTURE_MAG_FILTER,ze[L.magFilter]),n.texParameteri(z,n.TEXTURE_MIN_FILTER,ze[L.minFilter]),L.compareFunction&&(n.texParameteri(z,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(z,n.TEXTURE_COMPARE_FUNC,Pe[L.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(L.magFilter===dn||L.minFilter!==Ha&&L.minFilter!==ki||L.type===jn&&e.has("OES_texture_float_linear")===!1)return;if(L.anisotropy>1||i.get(L).__currentAnisotropy){let J=e.get("EXT_texture_filter_anisotropic");n.texParameterf(z,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(L.anisotropy,s.getMaxAnisotropy())),i.get(L).__currentAnisotropy=L.anisotropy}}}function je(z,L){let J=!1;z.__webglInit===void 0&&(z.__webglInit=!0,L.addEventListener("dispose",w),C(L));let fe=L.source,oe=d.get(fe);oe===void 0&&(oe={},d.set(fe,oe));let ye=G(L);if(ye!==z.__cacheKey){oe[ye]===void 0&&(oe[ye]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,J=!0),oe[ye].usedTimes++;let Te=oe[z.__cacheKey];Te!==void 0&&(oe[z.__cacheKey].usedTimes--,Te.usedTimes===0&&B(L)),z.__cacheKey=ye,z.__webglTexture=oe[ye].texture}return J}function ae(z,L,J){return Math.floor(Math.floor(z/J)/L)}function xe(z,L,J,fe){let ye=z.updateRanges;if(ye.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,L.width,L.height,J,fe,L.data);else{ye.sort((V,re)=>V.start-re.start);let Te=0;for(let V=1;V<ye.length;V++){let re=ye[Te],ne=ye[V],Me=re.start+re.count,me=ae(ne.start,L.width,4),_e=ae(re.start,L.width,4);ne.start<=Me+1&&me===_e&&ae(ne.start+ne.count-1,L.width,4)===me?re.count=Math.max(re.count,ne.start+ne.count-re.start):(++Te,ye[Te]=ne)}ye.length=Te+1;let ie=t.getParameter(n.UNPACK_ROW_LENGTH),se=t.getParameter(n.UNPACK_SKIP_PIXELS),ve=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,L.width);for(let V=0,re=ye.length;V<re;V++){let ne=ye[V],Me=Math.floor(ne.start/4),me=Math.ceil(ne.count/4),_e=Me%L.width,ke=Math.floor(Me/L.width),nt=me,de=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,_e),t.pixelStorei(n.UNPACK_SKIP_ROWS,ke),t.texSubImage2D(n.TEXTURE_2D,0,_e,ke,nt,de,J,fe,L.data)}z.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,ie),t.pixelStorei(n.UNPACK_SKIP_PIXELS,se),t.pixelStorei(n.UNPACK_SKIP_ROWS,ve)}}function ge(z,L,J){let fe=n.TEXTURE_2D;(L.isDataArrayTexture||L.isCompressedArrayTexture)&&(fe=n.TEXTURE_2D_ARRAY),L.isData3DTexture&&(fe=n.TEXTURE_3D);let oe=je(z,L),ye=L.source;t.bindTexture(fe,z.__webglTexture,n.TEXTURE0+J);let Te=i.get(ye);if(ye.version!==Te.__version||oe===!0){if(t.activeTexture(n.TEXTURE0+J),(typeof ImageBitmap<"u"&&L.image instanceof ImageBitmap)===!1){let de=dt.getPrimaries(dt.workingColorSpace),He=L.colorSpace===Vi?null:dt.getPrimaries(L.colorSpace),tt=L.colorSpace===Vi||de===He?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,L.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,tt)}t.pixelStorei(n.UNPACK_ALIGNMENT,L.unpackAlignment);let se=b(L.image,!1,s.maxTextureSize);se=Ve(L,se);let ve=r.convert(L.format,L.colorSpace),V=r.convert(L.type),re=A(L.internalFormat,ve,V,L.normalized,L.colorSpace,L.isVideoTexture);Oe(fe,L);let ne,Me=L.mipmaps,me=L.isVideoTexture!==!0,_e=Te.__version===void 0||oe===!0,ke=ye.dataReady,nt=v(L,se);if(L.isDepthTexture)re=p(L.format===Hi,L.type),_e&&(me?t.texStorage2D(n.TEXTURE_2D,1,re,se.width,se.height):t.texImage2D(n.TEXTURE_2D,0,re,se.width,se.height,0,ve,V,null));else if(L.isDataTexture)if(Me.length>0){me&&_e&&t.texStorage2D(n.TEXTURE_2D,nt,re,Me[0].width,Me[0].height);for(let de=0,He=Me.length;de<He;de++)ne=Me[de],me?ke&&t.texSubImage2D(n.TEXTURE_2D,de,0,0,ne.width,ne.height,ve,V,ne.data):t.texImage2D(n.TEXTURE_2D,de,re,ne.width,ne.height,0,ve,V,ne.data);L.generateMipmaps=!1}else me?(_e&&t.texStorage2D(n.TEXTURE_2D,nt,re,se.width,se.height),ke&&xe(L,se,ve,V)):t.texImage2D(n.TEXTURE_2D,0,re,se.width,se.height,0,ve,V,se.data);else if(L.isCompressedTexture)if(L.isCompressedArrayTexture){me&&_e&&t.texStorage3D(n.TEXTURE_2D_ARRAY,nt,re,Me[0].width,Me[0].height,se.depth);for(let de=0,He=Me.length;de<He;de++)if(ne=Me[de],L.format!==fi)if(ve!==null)if(me){if(ke)if(L.layerUpdates.size>0){let tt=Su(ne.width,ne.height,L.format,L.type);for(let Ae of L.layerUpdates){let St=ne.data.subarray(Ae*tt/ne.data.BYTES_PER_ELEMENT,(Ae+1)*tt/ne.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,de,0,0,Ae,ne.width,ne.height,1,ve,St)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,de,0,0,0,ne.width,ne.height,se.depth,ve,ne.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,de,re,ne.width,ne.height,se.depth,0,ne.data,0,0);else Ge("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else me?ke&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,de,0,0,0,ne.width,ne.height,se.depth,ve,V,ne.data):t.texImage3D(n.TEXTURE_2D_ARRAY,de,re,ne.width,ne.height,se.depth,0,ve,V,ne.data);L.layerUpdates.size>0&&L.clearLayerUpdates()}else{me&&_e&&t.texStorage2D(n.TEXTURE_2D,nt,re,Me[0].width,Me[0].height);for(let de=0,He=Me.length;de<He;de++)ne=Me[de],L.format!==fi?ve!==null?me?ke&&t.compressedTexSubImage2D(n.TEXTURE_2D,de,0,0,ne.width,ne.height,ve,ne.data):t.compressedTexImage2D(n.TEXTURE_2D,de,re,ne.width,ne.height,0,ne.data):Ge("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):me?ke&&t.texSubImage2D(n.TEXTURE_2D,de,0,0,ne.width,ne.height,ve,V,ne.data):t.texImage2D(n.TEXTURE_2D,de,re,ne.width,ne.height,0,ve,V,ne.data)}else if(L.isDataArrayTexture)if(me){if(_e&&t.texStorage3D(n.TEXTURE_2D_ARRAY,nt,re,se.width,se.height,se.depth),ke)if(L.layerUpdates.size>0){let de=Su(se.width,se.height,L.format,L.type);for(let He of L.layerUpdates){let tt=se.data.subarray(He*de/se.data.BYTES_PER_ELEMENT,(He+1)*de/se.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,He,se.width,se.height,1,ve,V,tt)}L.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,ve,V,se.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,re,se.width,se.height,se.depth,0,ve,V,se.data);else if(L.isData3DTexture)me?(_e&&t.texStorage3D(n.TEXTURE_3D,nt,re,se.width,se.height,se.depth),ke&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,ve,V,se.data)):t.texImage3D(n.TEXTURE_3D,0,re,se.width,se.height,se.depth,0,ve,V,se.data);else if(L.isFramebufferTexture){if(_e)if(me)t.texStorage2D(n.TEXTURE_2D,nt,re,se.width,se.height);else{let de=se.width,He=se.height;for(let tt=0;tt<nt;tt++)t.texImage2D(n.TEXTURE_2D,tt,re,de,He,0,ve,V,null),de>>=1,He>>=1}}else if(L.isHTMLTexture){if("texElementImage2D"in n){let de=n.canvas;if(de.hasAttribute("layoutsubtree")||de.setAttribute("layoutsubtree","true"),se.parentNode!==de){de.appendChild(se),f.add(L),de.onpaint=He=>{let tt=He.changedElements;for(let Ae of f)tt.includes(Ae.image)&&(Ae.needsUpdate=!0)},de.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,se);else{let tt=n.RGBA,Ae=n.RGBA,St=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,tt,Ae,St,se)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Me.length>0){if(me&&_e){let de=Ze(Me[0]);t.texStorage2D(n.TEXTURE_2D,nt,re,de.width,de.height)}for(let de=0,He=Me.length;de<He;de++)ne=Me[de],me?ke&&t.texSubImage2D(n.TEXTURE_2D,de,0,0,ve,V,ne):t.texImage2D(n.TEXTURE_2D,de,re,ve,V,ne);L.generateMipmaps=!1}else if(me){if(_e){let de=Ze(se);t.texStorage2D(n.TEXTURE_2D,nt,re,de.width,de.height)}ke&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ve,V,se)}else t.texImage2D(n.TEXTURE_2D,0,re,ve,V,se);E(L)&&L.mipmapsAutoUpdate===!0&&S(fe),Te.__version=ye.version,L.onUpdate&&L.onUpdate(L)}z.__version=L.version}function Ie(z,L,J){if(L.image.length!==6)return;let fe=je(z,L),oe=L.source;t.bindTexture(n.TEXTURE_CUBE_MAP,z.__webglTexture,n.TEXTURE0+J);let ye=i.get(oe);if(oe.version!==ye.__version||fe===!0){t.activeTexture(n.TEXTURE0+J);let Te=dt.getPrimaries(dt.workingColorSpace),ie=L.colorSpace===Vi?null:dt.getPrimaries(L.colorSpace),se=L.colorSpace===Vi||Te===ie?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,L.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,L.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,se);let ve=L.isCompressedTexture||L.image[0].isCompressedTexture,V=L.image[0]&&L.image[0].isDataTexture,re=[];for(let Ae=0;Ae<6;Ae++)!ve&&!V?re[Ae]=b(L.image[Ae],!0,s.maxCubemapSize):re[Ae]=V?L.image[Ae].image:L.image[Ae],re[Ae]=Ve(L,re[Ae]);let ne=re[0],Me=r.convert(L.format,L.colorSpace),me=r.convert(L.type),_e=A(L.internalFormat,Me,me,L.normalized,L.colorSpace),ke=L.isVideoTexture!==!0,nt=ye.__version===void 0||fe===!0,de=oe.dataReady,He=v(L,ne);Oe(n.TEXTURE_CUBE_MAP,L);let tt;if(L.isDepthTexture){if(_e=p(L.format===Hi,L.type),nt)if(ke)t.texStorage2D(n.TEXTURE_CUBE_MAP,1,_e,ne.width,ne.height);else for(let Ae=0;Ae<6;Ae++)t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,_e,ne.width,ne.height,0,Me,me,null)}else if(ve){ke&&nt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,He,_e,ne.width,ne.height);for(let Ae=0;Ae<6;Ae++){tt=re[Ae].mipmaps;for(let St=0;St<tt.length;St++){let hn=tt[St];L.format!==fi?Me!==null?ke?de&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,St,0,0,hn.width,hn.height,Me,hn.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,St,_e,hn.width,hn.height,0,hn.data):Ge("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ke?de&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,St,0,0,hn.width,hn.height,Me,me,hn.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,St,_e,hn.width,hn.height,0,Me,me,hn.data)}}}else{if(tt=L.mipmaps,ke&&nt){tt.length>0&&He++;let Ae=Ze(re[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,He,_e,Ae.width,Ae.height)}for(let Ae=0;Ae<6;Ae++)if(V){ke?de&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,0,0,re[Ae].width,re[Ae].height,Me,me,re[Ae].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,_e,re[Ae].width,re[Ae].height,0,Me,me,re[Ae].data);for(let St=0;St<tt.length;St++){let Ji=tt[St].image[Ae].image;ke?de&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,St+1,0,0,Ji.width,Ji.height,Me,me,Ji.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,St+1,_e,Ji.width,Ji.height,0,Me,me,Ji.data)}}else{ke?de&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,0,0,Me,me,re[Ae]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,_e,Me,me,re[Ae]);for(let St=0;St<tt.length;St++){let hn=tt[St];ke?de&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,St+1,0,0,Me,me,hn.image[Ae]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,St+1,_e,Me,me,hn.image[Ae])}}}E(L)&&L.mipmapsAutoUpdate===!0&&S(n.TEXTURE_CUBE_MAP),ye.__version=oe.version,L.onUpdate&&L.onUpdate(L)}z.__version=L.version}function Ee(z,L,J,fe,oe,ye){let Te=r.convert(J.format,J.colorSpace),ie=r.convert(J.type),se=A(J.internalFormat,Te,ie,J.normalized,J.colorSpace),ve=i.get(L),V=i.get(J);if(V.__renderTarget=L,!ve.__hasExternalTextures){let re=Math.max(1,L.width>>ye),ne=Math.max(1,L.height>>ye);oe===n.TEXTURE_3D||oe===n.TEXTURE_2D_ARRAY?t.texImage3D(oe,ye,se,re,ne,L.depth,0,Te,ie,null):t.texImage2D(oe,ye,se,re,ne,0,Te,ie,null)}t.bindFramebuffer(n.FRAMEBUFFER,z),Se(L)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,fe,oe,V.__webglTexture,0,wt(L)):(oe===n.TEXTURE_2D||oe>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&oe<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,fe,oe,V.__webglTexture,ye),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ke(z,L,J){if(n.bindRenderbuffer(n.RENDERBUFFER,z),L.depthBuffer){let fe=L.depthTexture,oe=fe&&fe.isDepthTexture?fe.type:null,ye=p(L.stencilBuffer,oe),Te=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Se(L)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,wt(L),ye,L.width,L.height):J?n.renderbufferStorageMultisample(n.RENDERBUFFER,wt(L),ye,L.width,L.height):n.renderbufferStorage(n.RENDERBUFFER,ye,L.width,L.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Te,n.RENDERBUFFER,z)}else{let fe=L.textures;for(let oe=0;oe<fe.length;oe++){let ye=fe[oe],Te=r.convert(ye.format,ye.colorSpace),ie=r.convert(ye.type),se=A(ye.internalFormat,Te,ie,ye.normalized,ye.colorSpace);Se(L)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,wt(L),se,L.width,L.height):J?n.renderbufferStorageMultisample(n.RENDERBUFFER,wt(L),se,L.width,L.height):n.renderbufferStorage(n.RENDERBUFFER,se,L.width,L.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Be(z,L,J){let fe=L.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,z),!(L.depthTexture&&L.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let oe=i.get(L.depthTexture);oe.__renderTarget=L;let ye=fe?L.depthTexture.image[0]:L.depthTexture.image;(!oe.__webglTexture||ye.width!==L.width||ye.height!==L.height)&&(ye.width=L.width,ye.height=L.height,L.depthTexture.needsUpdate=!0),fe?ce(L.depthTexture,0):ee(L.depthTexture,0);let Te=oe.__webglTexture,ie=wt(L),se=fe?n.TEXTURE_CUBE_MAP_POSITIVE_X+J:n.TEXTURE_2D,ve=L.depthTexture.format===Hi?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(L.depthTexture.format===Di)Se(L)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ve,se,Te,0,ie):n.framebufferTexture2D(n.FRAMEBUFFER,ve,se,Te,0);else if(L.depthTexture.format===Hi)Se(L)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ve,se,Te,0,ie):n.framebufferTexture2D(n.FRAMEBUFFER,ve,se,Te,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function lt(z){let L=i.get(z),J=z.isWebGLCubeRenderTarget===!0;if(L.__boundDepthTexture!==z.depthTexture){let fe=z.depthTexture;if(L.__depthDisposeCallback&&L.__depthDisposeCallback(),fe){let oe=()=>{delete L.__boundDepthTexture,delete L.__depthDisposeCallback,fe.removeEventListener("dispose",oe)};fe.addEventListener("dispose",oe),L.__depthDisposeCallback=oe}L.__boundDepthTexture=fe}if(z.depthTexture&&!L.__autoAllocateDepthBuffer)if(J)for(let fe=0;fe<6;fe++)Be(L.__webglFramebuffer[fe],z,fe);else z.texture.mipmaps.length>0?Be(L.__webglFramebuffer[0],z,0):Be(L.__webglFramebuffer,z,0);else if(J){L.__webglDepthbuffer=[];for(let fe=0;fe<6;fe++)if(t.bindFramebuffer(n.FRAMEBUFFER,L.__webglFramebuffer[fe]),L.__webglDepthbuffer[fe]===void 0)L.__webglDepthbuffer[fe]=n.createRenderbuffer(),Ke(L.__webglDepthbuffer[fe],z,!1);else{let oe=z.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ye=L.__webglDepthbuffer[fe];n.bindRenderbuffer(n.RENDERBUFFER,ye),n.framebufferRenderbuffer(n.FRAMEBUFFER,oe,n.RENDERBUFFER,ye)}}else if(z.texture.mipmaps.length>0?t.bindFramebuffer(n.FRAMEBUFFER,L.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,L.__webglFramebuffer),L.__webglDepthbuffer===void 0)L.__webglDepthbuffer=n.createRenderbuffer(),Ke(L.__webglDepthbuffer,z,!1);else{let oe=z.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ye=L.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ye),n.framebufferRenderbuffer(n.FRAMEBUFFER,oe,n.RENDERBUFFER,ye)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function ht(z,L,J){let fe=i.get(z);L!==void 0&&Ee(fe.__webglFramebuffer,z,z.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),J!==void 0&&lt(z)}function yt(z){let L=z.texture,J=i.get(z),fe=i.get(L);z.addEventListener("dispose",R),C(z);let oe=z.textures,ye=z.isWebGLCubeRenderTarget===!0,Te=oe.length>1;if(Te||(fe.__webglTexture===void 0&&(fe.__webglTexture=n.createTexture()),fe.__version=L.version,a.memory.textures++),ye){J.__webglFramebuffer=[];for(let ie=0;ie<6;ie++)if(L.mipmaps.length>0){J.__webglFramebuffer[ie]=[];for(let se=0;se<L.mipmaps.length;se++)J.__webglFramebuffer[ie][se]=n.createFramebuffer()}else J.__webglFramebuffer[ie]=n.createFramebuffer()}else{if(L.mipmaps.length>0){J.__webglFramebuffer=[];for(let ie=0;ie<L.mipmaps.length;ie++)J.__webglFramebuffer[ie]=n.createFramebuffer()}else J.__webglFramebuffer=n.createFramebuffer();if(Te)for(let ie=0,se=oe.length;ie<se;ie++){let ve=i.get(oe[ie]);ve.__webglTexture===void 0&&(ve.__webglTexture=n.createTexture(),a.memory.textures++)}if(z.samples>0&&Se(z)===!1){J.__webglMultisampledFramebuffer=n.createFramebuffer(),J.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let ie=0;ie<oe.length;ie++){let se=oe[ie];J.__webglColorRenderbuffer[ie]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,J.__webglColorRenderbuffer[ie]);let ve=r.convert(se.format,se.colorSpace),V=r.convert(se.type),re=A(se.internalFormat,ve,V,se.normalized,se.colorSpace,z.isXRRenderTarget===!0),ne=wt(z);n.renderbufferStorageMultisample(n.RENDERBUFFER,ne,re,z.width,z.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ie,n.RENDERBUFFER,J.__webglColorRenderbuffer[ie])}n.bindRenderbuffer(n.RENDERBUFFER,null),z.depthBuffer&&(J.__webglDepthRenderbuffer=n.createRenderbuffer(),Ke(J.__webglDepthRenderbuffer,z,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ye){t.bindTexture(n.TEXTURE_CUBE_MAP,fe.__webglTexture),Oe(n.TEXTURE_CUBE_MAP,L);for(let ie=0;ie<6;ie++)if(L.mipmaps.length>0)for(let se=0;se<L.mipmaps.length;se++)Ee(J.__webglFramebuffer[ie][se],z,L,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,se);else Ee(J.__webglFramebuffer[ie],z,L,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0);E(L)?S(n.TEXTURE_CUBE_MAP):L.mipmaps.length>0&&n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_MAX_LEVEL,L.mipmaps.length-1),t.unbindTexture()}else if(Te){for(let ie=0,se=oe.length;ie<se;ie++){let ve=oe[ie],V=i.get(ve),re=n.TEXTURE_2D;(z.isWebGL3DRenderTarget||z.isWebGLArrayRenderTarget)&&(re=z.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(re,V.__webglTexture),Oe(re,ve),Ee(J.__webglFramebuffer,z,ve,n.COLOR_ATTACHMENT0+ie,re,0),E(ve)&&S(re)}t.unbindTexture()}else{let ie=n.TEXTURE_2D;if((z.isWebGL3DRenderTarget||z.isWebGLArrayRenderTarget)&&(ie=z.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ie,fe.__webglTexture),Oe(ie,L),L.mipmaps.length>0)for(let se=0;se<L.mipmaps.length;se++)Ee(J.__webglFramebuffer[se],z,L,n.COLOR_ATTACHMENT0,ie,se);else Ee(J.__webglFramebuffer,z,L,n.COLOR_ATTACHMENT0,ie,0);E(L)?S(ie):L.mipmaps.length>0&&n.texParameteri(ie,n.TEXTURE_MAX_LEVEL,L.mipmaps.length-1),t.unbindTexture()}z.depthBuffer&&lt(z)}function Y(z){let L=z.textures;for(let J=0,fe=L.length;J<fe;J++){let oe=L[J];if(E(oe)&&oe.mipmapsAutoUpdate===!0){let ye=P(z),Te=i.get(oe).__webglTexture;t.bindTexture(ye,Te),S(ye),t.unbindTexture()}}}let Qt=[];function at(z){if(z.samples>0){if(Se(z)===!1){let L=z.textures,J=z.width,fe=z.height,oe=n.COLOR_BUFFER_BIT,ye=z.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Te=i.get(z),ie=L.length>1;if(ie)for(let ve=0;ve<L.length;ve++)t.bindFramebuffer(n.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Te.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Te.__webglMultisampledFramebuffer),z.texture.mipmaps.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Te.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Te.__webglFramebuffer);for(let ve=0;ve<L.length;ve++){if(z.resolveDepthBuffer&&(z.depthBuffer&&(oe|=n.DEPTH_BUFFER_BIT),z.stencilBuffer&&z.resolveStencilBuffer&&(oe|=n.STENCIL_BUFFER_BIT)),ie){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Te.__webglColorRenderbuffer[ve]);let V=i.get(L[ve]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,V,0)}n.blitFramebuffer(0,0,J,fe,0,0,J,fe,oe,n.NEAREST),l===!0&&(Qt.length=0,Qt.push(n.COLOR_ATTACHMENT0+ve),z.depthBuffer&&z.storeMultisampledDepthBuffer===!1&&Qt.push(ye),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Qt))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ie)for(let ve=0;ve<L.length;ve++){t.bindFramebuffer(n.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.RENDERBUFFER,Te.__webglColorRenderbuffer[ve]);let V=i.get(L[ve]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Te.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.TEXTURE_2D,V,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Te.__webglMultisampledFramebuffer)}else if(z.depthBuffer&&z.storeMultisampledDepthBuffer===!1&&l){let L=z.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[L])}}}function wt(z){return Math.min(s.maxSamples,z.samples)}function Se(z){let L=i.get(z);return z.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&L.__useRenderToTexture!==!1}function Gt(z){let L=a.render.frame;h.get(z)!==L&&(h.set(z,L),z.update())}function Ve(z,L){let J=z.colorSpace,fe=z.format,oe=z.type;return z.isCompressedTexture===!0||z.isVideoTexture===!0||J!==ca&&J!==Vi&&(dt.getTransfer(J)===bt?(fe!==fi||oe!==Ln)&&Ge("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Xe("WebGLTextures: Unsupported texture color space:",J)),L}function Ze(z){return typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement?(c.width=z.naturalWidth||z.width,c.height=z.naturalHeight||z.height):typeof VideoFrame<"u"&&z instanceof VideoFrame?(c.width=z.displayWidth,c.height=z.displayHeight):(c.width=z.width,c.height=z.height),c}this.allocateTextureUnit=$,this.resetTextureUnits=U,this.getTextureUnits=H,this.setTextureUnits=Z,this.setTexture2D=ee,this.setTexture2DArray=te,this.setTexture3D=le,this.setTextureCube=ce,this.rebindTextures=ht,this.setupRenderTarget=yt,this.updateRenderTargetMipmap=Y,this.updateMultisampleRenderTarget=at,this.setupDepthRenderbuffer=lt,this.setupFrameBufferTexture=Ee,this.useMultisampledRTT=Se,this.dispose=I}function C1(n,e){function t(i,s=Vi){let r,a=dt.getTransfer(s);if(i===Ln)return n.UNSIGNED_BYTE;if(i===Ul)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Fl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===hu)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===uu)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===lu)return n.BYTE;if(i===cu)return n.SHORT;if(i===Dr)return n.UNSIGNED_SHORT;if(i===Dl)return n.INT;if(i===hi)return n.UNSIGNED_INT;if(i===jn)return n.FLOAT;if(i===ui)return n.HALF_FLOAT;if(i===fu)return n.ALPHA;if(i===du)return n.RGB;if(i===fi)return n.RGBA;if(i===Di)return n.DEPTH_COMPONENT;if(i===Hi)return n.DEPTH_STENCIL;if(i===Ol)return n.RED;if(i===Bl)return n.RED_INTEGER;if(i===ds)return n.RG;if(i===zl)return n.RG_INTEGER;if(i===kl)return n.RGBA_INTEGER;if(i===Va||i===Ga||i===Wa||i===Xa)if(a===bt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Va)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ga)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Wa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Xa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Va)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ga)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Wa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Xa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Hl||i===Vl||i===Gl||i===Wl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Hl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Vl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Gl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Wl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Xl||i===ql||i===Yl||i===$l||i===Zl||i===qa||i===Kl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Xl||i===ql)return a===bt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Yl)return a===bt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===$l)return r.COMPRESSED_R11_EAC;if(i===Zl)return r.COMPRESSED_SIGNED_R11_EAC;if(i===qa)return r.COMPRESSED_RG11_EAC;if(i===Kl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Jl||i===jl||i===Ql||i===ec||i===tc||i===nc||i===ic||i===sc||i===rc||i===ac||i===oc||i===lc||i===cc||i===hc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Jl)return a===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===jl)return a===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ql)return a===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ec)return a===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===tc)return a===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===nc)return a===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ic)return a===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===sc)return a===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===rc)return a===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ac)return a===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===oc)return a===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===lc)return a===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===cc)return a===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===hc)return a===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===uc||i===fc||i===dc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===uc)return a===bt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===fc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===dc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===pc||i===mc||i===Ya||i===gc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===pc)return r.COMPRESSED_RED_RGTC1_EXT;if(i===mc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ya)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===gc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===zs?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var P1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,I1=`
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

}`,Lu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new Sa(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new Kn({vertexShader:P1,fragmentShader:I1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ye(new Zn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Nu=class extends mi{constructor(e,t){super();let i=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,f=null,u=null,d=null,m=null,M=typeof XRWebGLBinding<"u",x=new Lu,g={},b=t.getContextAttributes(),E=null,S=null,P=[],A=[],p=new pe,v=null,C=null,y=new sn;y.viewport=new Lt;let w=new sn;w.viewport=new Lt;let R=[y,w],_=new Rl,T=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let ee=P[G];return ee===void 0&&(ee=new Sr,P[G]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(G){let ee=P[G];return ee===void 0&&(ee=new Sr,P[G]=ee),ee.getGripSpace()},this.getHand=function(G){let ee=P[G];return ee===void 0&&(ee=new Sr,P[G]=ee),ee.getHandSpace()};function N(G){let ee=A.indexOf(G.inputSource);if(ee===-1)return;let te=P[ee];te!==void 0&&(te.update(G.inputSource,G.frame,c||a),te.dispatchEvent({type:G.type,data:G.inputSource}))}function B(){s.removeEventListener("select",N),s.removeEventListener("selectstart",N),s.removeEventListener("selectend",N),s.removeEventListener("squeeze",N),s.removeEventListener("squeezestart",N),s.removeEventListener("squeezeend",N),s.removeEventListener("end",B),s.removeEventListener("inputsourceschange",k);for(let G=0;G<P.length;G++){let ee=A[G];ee!==null&&(A[G]=null,P[G].disconnect(ee))}T=null,I=null,x.reset();for(let G in g)delete g[G];if(e.setRenderTarget(E),d=null,u=null,f=null,s=null,S=null,$.stop(),i.isPresenting=!1,e.setPixelRatio(v),e.setSize(p.width,p.height,!1),C!==null){let G=C.camera;G.fov=C.fov,G.zoom=C.zoom,G.updateProjectionMatrix(),C=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){r=G,i.isPresenting===!0&&Ge("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){o=G,i.isPresenting===!0&&Ge("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(G){c=G},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return f===null&&M&&(f=new XRWebGLBinding(s,t)),f},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(G){if(s=G,s!==null){if(E=e.getRenderTarget(),s.addEventListener("select",N),s.addEventListener("selectstart",N),s.addEventListener("selectend",N),s.addEventListener("squeeze",N),s.addEventListener("squeezestart",N),s.addEventListener("squeezeend",N),s.addEventListener("end",B),s.addEventListener("inputsourceschange",k),b.xrCompatible!==!0&&await t.makeXRCompatible(),v=e.getPixelRatio(),e.getSize(p),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let te=null,le=null,ce=null;b.depth&&(ce=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,te=b.stencil?Hi:Di,le=b.stencil?zs:hi);let he={colorFormat:t.RGBA8,depthFormat:ce,scaleFactor:r};f=this.getBinding(),u=f.createProjectionLayer(he),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),S=new kn(u.textureWidth,u.textureHeight,{format:fi,type:Ln,depthTexture:new Oi(u.textureWidth,u.textureHeight,le,void 0,void 0,void 0,void 0,void 0,void 0,te),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let te={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,te),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),S=new kn(d.framebufferWidth,d.framebufferHeight,{format:fi,type:Ln,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),$.setContext(s),$.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function k(G){for(let ee=0;ee<G.removed.length;ee++){let te=G.removed[ee],le=A.indexOf(te);le>=0&&(A[le]=null,P[le].disconnect(te))}for(let ee=0;ee<G.added.length;ee++){let te=G.added[ee],le=A.indexOf(te);if(le===-1){for(let he=0;he<P.length;he++)if(he>=A.length){A.push(te),le=he;break}else if(A[he]===null){A[he]=te,le=he;break}if(le===-1)break}let ce=P[le];ce&&ce.connect(te)}}function F(G,ee){ee===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(ee.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(s===null)return;let ee=G.near,te=G.far;x.texture!==null&&(x.depthNear>0&&(ee=x.depthNear),x.depthFar>0&&(te=x.depthFar)),_.near=w.near=y.near=ee,_.far=w.far=y.far=te,(T!==_.near||I!==_.far)&&(s.updateRenderState({depthNear:_.near,depthFar:_.far}),T=_.near,I=_.far),_.layers.mask=G.layers.mask|6,y.layers.mask=_.layers.mask&-5,w.layers.mask=_.layers.mask&-3;let le=G.parent,ce=_.cameras;F(_,le);for(let he=0;he<ce.length;he++)F(ce[he],le);_.projectionMatrix.copy(y.projectionMatrix),_.projectionMatrixInverse.copy(y.projectionMatrixInverse),C===null&&G.isPerspectiveCamera&&(C={camera:G,fov:G.fov,zoom:G.zoom}),U(G,_,le)};function U(G,ee,te){te===null?G.matrix.copy(ee.matrixWorld):(G.matrix.copy(te.matrixWorld),G.matrix.invert(),G.matrix.multiply(ee.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(ee.projectionMatrix),G.projectionMatrixInverse.copy(ee.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=il*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(u===null&&d===null))return l},this.setFoveation=function(G){l=G,u!==null&&(u.fixedFoveation=G),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=G)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(_)},this.getCameraTexture=function(G){return g[G]};let H=null;function Z(G,ee){if(h=ee.getViewerPose(c||a),m=ee,h!==null){let te=h.views;d!==null&&(e.setRenderTargetFramebuffer(S,d.framebuffer),e.setRenderTarget(S));let le=!1;te.length!==_.cameras.length&&(_.cameras.length=0,le=!0);for(let Pe=0;Pe<te.length;Pe++){let Oe=te[Pe],je=null;if(d!==null)je=d.getViewport(Oe);else{let xe=f.getViewSubImage(u,Oe);je=xe.viewport,Pe===0&&(e.setRenderTargetTextures(S,xe.colorTexture,xe.depthStencilTexture),e.setRenderTarget(S))}let ae=R[Pe];ae===void 0&&(ae=new sn,ae.layers.enable(Pe),ae.viewport=new Lt,R[Pe]=ae),ae.matrix.fromArray(Oe.transform.matrix),ae.matrix.decompose(ae.position,ae.quaternion,ae.scale),ae.projectionMatrix.fromArray(Oe.projectionMatrix),ae.projectionMatrixInverse.copy(ae.projectionMatrix).invert(),ae.viewport.set(je.x,je.y,je.width,je.height),Pe===0&&(_.matrix.copy(ae.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),le===!0&&_.cameras.push(ae)}let ce=s.enabledFeatures;if(ce&&ce.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&M){f=i.getBinding();let Pe=f.getDepthInformation(te[0]);Pe&&Pe.isValid&&Pe.texture&&x.init(Pe,s.renderState)}if(ce&&ce.includes("camera-access")&&M){e.state.unbindTexture(),f=i.getBinding();for(let Pe=0;Pe<te.length;Pe++){let Oe=te[Pe].camera;if(Oe){let je=g[Oe];je||(je=new Sa,g[Oe]=je);let ae=f.getCameraImage(Oe);je.sourceTexture=ae}}}}for(let te=0;te<P.length;te++){let le=A[te],ce=P[te];le!==null&&ce!==void 0&&ce.update(le,ee,c||a)}H&&H(G,ee),ee.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ee}),m=null}let $=new Yp;$.setAnimationLoop(Z),this.setAnimationLoop=function(G){H=G},this.dispose=function(){}}},L1=new _t,i0=new Je;i0.set(-1,0,0,0,1,0,0,0,1);function N1(n,e){function t(x,g){x.matrixAutoUpdate===!0&&x.updateMatrix(),g.value.copy(x.matrix)}function i(x,g){g.color.getRGB(x.fogColor.value,vu(n)),g.isFog?(x.fogNear.value=g.near,x.fogFar.value=g.far):g.isFogExp2&&(x.fogDensity.value=g.density)}function s(x,g,b,E,S){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(x,g):g.isMeshLambertMaterial?(r(x,g),g.envMap&&(x.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(x,g),f(x,g)):g.isMeshPhongMaterial?(r(x,g),h(x,g),g.envMap&&(x.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(x,g),u(x,g),g.isMeshPhysicalMaterial&&d(x,g,S)):g.isMeshMatcapMaterial?(r(x,g),m(x,g)):g.isMeshDepthMaterial?r(x,g):g.isMeshDistanceMaterial?(r(x,g),M(x,g)):g.isMeshNormalMaterial?r(x,g):g.isLineBasicMaterial?(a(x,g),g.isLineDashedMaterial&&o(x,g)):g.isPointsMaterial?l(x,g,b,E):g.isSpriteMaterial?c(x,g):g.isShadowMaterial?(x.color.value.copy(g.color),x.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(x,g){x.opacity.value=g.opacity,g.color&&x.diffuse.value.copy(g.color),g.emissive&&x.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(x.map.value=g.map,t(g.map,x.mapTransform)),g.alphaMap&&(x.alphaMap.value=g.alphaMap,t(g.alphaMap,x.alphaMapTransform)),g.bumpMap&&(x.bumpMap.value=g.bumpMap,t(g.bumpMap,x.bumpMapTransform),x.bumpScale.value=g.bumpScale,g.side===xn&&(x.bumpScale.value*=-1)),g.normalMap&&(x.normalMap.value=g.normalMap,t(g.normalMap,x.normalMapTransform),x.normalScale.value.copy(g.normalScale),g.side===xn&&x.normalScale.value.negate()),g.displacementMap&&(x.displacementMap.value=g.displacementMap,t(g.displacementMap,x.displacementMapTransform),x.displacementScale.value=g.displacementScale,x.displacementBias.value=g.displacementBias),g.emissiveMap&&(x.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,x.emissiveMapTransform)),g.specularMap&&(x.specularMap.value=g.specularMap,t(g.specularMap,x.specularMapTransform)),g.alphaTest>0&&(x.alphaTest.value=g.alphaTest);let b=e.get(g),E=b.envMap,S=b.envMapRotation;E&&(x.envMap.value=E,x.envMapRotation.value.setFromMatrix4(L1.makeRotationFromEuler(S)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&x.envMapRotation.value.premultiply(i0),x.reflectivity.value=g.reflectivity,x.ior.value=g.ior,x.refractionRatio.value=g.refractionRatio),g.lightMap&&(x.lightMap.value=g.lightMap,x.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,x.lightMapTransform)),g.aoMap&&(x.aoMap.value=g.aoMap,x.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,x.aoMapTransform))}function a(x,g){x.diffuse.value.copy(g.color),x.opacity.value=g.opacity,g.map&&(x.map.value=g.map,t(g.map,x.mapTransform))}function o(x,g){x.dashSize.value=g.dashSize,x.totalSize.value=g.dashSize+g.gapSize,x.scale.value=g.scale}function l(x,g,b,E){x.diffuse.value.copy(g.color),x.opacity.value=g.opacity,x.size.value=g.size*b,x.scale.value=E*.5,g.map&&(x.map.value=g.map,t(g.map,x.uvTransform)),g.alphaMap&&(x.alphaMap.value=g.alphaMap,t(g.alphaMap,x.alphaMapTransform)),g.alphaTest>0&&(x.alphaTest.value=g.alphaTest)}function c(x,g){x.diffuse.value.copy(g.color),x.opacity.value=g.opacity,x.rotation.value=g.rotation,g.map&&(x.map.value=g.map,t(g.map,x.mapTransform)),g.alphaMap&&(x.alphaMap.value=g.alphaMap,t(g.alphaMap,x.alphaMapTransform)),g.alphaTest>0&&(x.alphaTest.value=g.alphaTest)}function h(x,g){x.specular.value.copy(g.specular),x.shininess.value=Math.max(g.shininess,1e-4)}function f(x,g){g.gradientMap&&(x.gradientMap.value=g.gradientMap)}function u(x,g){x.metalness.value=g.metalness,g.metalnessMap&&(x.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,x.metalnessMapTransform)),x.roughness.value=g.roughness,g.roughnessMap&&(x.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,x.roughnessMapTransform)),g.envMap&&(x.envMapIntensity.value=g.envMapIntensity)}function d(x,g,b){x.ior.value=g.ior,g.diffuseRoughness>0&&(x.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap&&(x.diffuseRoughnessMap.value=g.diffuseRoughnessMap,t(g.diffuseRoughnessMap,x.diffuseRoughnessMapTransform))),g.sheen>0&&(x.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),x.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(x.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,x.sheenColorMapTransform)),g.sheenRoughnessMap&&(x.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,x.sheenRoughnessMapTransform))),g.clearcoat>0&&(x.clearcoat.value=g.clearcoat,x.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(x.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,x.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(x.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===xn&&x.clearcoatNormalScale.value.negate())),g.dispersion>0&&(x.dispersion.value=g.dispersion),g.retroreflectivity>0&&(x.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(x.iridescence.value=g.iridescence,x.iridescenceIOR.value=g.iridescenceIOR,x.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,x.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap&&(x.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,x.iridescenceMapTransform)),g.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),g.transmission>0&&(x.transmission.value=g.transmission,x.transmissionSamplerMap.value=b.texture,x.transmissionSamplerSize.value.set(b.width,b.height),g.transmissionMap&&(x.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,x.transmissionMapTransform)),x.thickness.value=g.thickness,g.thicknessMap&&(x.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=g.attenuationDistance,x.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(x.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(x.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=g.specularIntensity,x.specularColor.value.copy(g.specularColor),g.specularColorMap&&(x.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,x.specularColorMapTransform)),g.specularIntensityMap&&(x.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,x.specularIntensityMapTransform))}function m(x,g){g.matcap&&(x.matcap.value=g.matcap)}function M(x,g){let b=e.get(g).light;x.referencePosition.value.setFromMatrixPosition(b.matrixWorld),x.nearDistance.value=b.shadow.camera.near,x.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function D1(n,e,t,i){let s={},r={};function a(b,E){let S=E.program;i.uniformBlockBinding(b,S,s[b.id])}function o(b,E){let S=s[b.id];S===void 0&&(m(b),S=l(b),s[b.id]=S,b.addEventListener("dispose",x));let P=E.program;i.updateUBOMapping(b,P);let A=e.render.frame;r[b.id]!==A&&(c(b),r[b.id]=A)}function l(b){let E=n.createBuffer(),S=b.__size,P=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,S,P),n.bindBuffer(n.UNIFORM_BUFFER,null),E}function c(b){let E=s[b.id],S=b.uniforms,P=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,E);for(let A=0,p=S.length;A<p;A++){let v=S[A];if(Array.isArray(v))for(let C=0,y=v.length;C<y;C++)h(v[C],A,C,P);else h(v,A,0,P)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function h(b,E,S,P){if(u(b,E,S,P)===!0){let A=b.__offset,p=b.value;if(Array.isArray(p)){let v=0;for(let C=0;C<p.length;C++){let y=p[C],w=M(y,!0);f(y,b.__data,v),v+=w.storage/Float32Array.BYTES_PER_ELEMENT}}else f(p,b.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,A,b.__data)}}function f(b,E,S){typeof b=="number"||typeof b=="boolean"?E[S]=b:b.isMatrix3?(E[S]=b.elements[0],E[S+1]=b.elements[1],E[S+2]=b.elements[2],E[S+3]=0,E[S+4]=b.elements[3],E[S+5]=b.elements[4],E[S+6]=b.elements[5],E[S+7]=0,E[S+8]=b.elements[6],E[S+9]=b.elements[7],E[S+10]=b.elements[8],E[S+11]=0):ArrayBuffer.isView(b)?E.set(b.subarray(0,E.length-S),S):b.toArray(E,S)}function u(b,E,S,P){let A=b.value,p=E+"_"+S;if(Array.isArray(A)){P[p]===void 0&&(P[p]=[]);let v=P[p],C=!1;for(let y=0;y<A.length;y++)d(A[y],v,y)===!0&&(C=!0);return C}return d(A,P,p)}function d(b,E,S){if(E[S]===void 0)return typeof b=="number"||typeof b=="boolean"?E[S]=b:ArrayBuffer.isView(b)?E[S]=b.slice():E[S]=b.clone(),!0;{let P=E[S];if(typeof b=="number"||typeof b=="boolean"){if(P!==b)return E[S]=b,!0}else{if(ArrayBuffer.isView(b))return!0;if(P.equals(b)===!1)return P.copy(b),!0}}return!1}function m(b){let E=b.uniforms,S=0,P=16;for(let p=0,v=E.length;p<v;p++){let C=Array.isArray(E[p])?E[p]:[E[p]];for(let y=0,w=C.length;y<w;y++){let R=C[y],_=Array.isArray(R.value)?R.value:[R.value],T=Array.isArray(E[p])||Array.isArray(R.value),I=S;for(let B=0,k=_.length;B<k;B++){let F=_[B],U=M(F,T),H=S%P,Z=H%U.boundary,$=H+Z;S+=Z,$!==0&&P-$<U.storage&&(S+=P-$),B===0&&(I=S),S+=U.storage}let N=R.type==="int"?Int32Array:R.type==="uint"?Uint32Array:Float32Array;R.__data=new N((S-I)/Float32Array.BYTES_PER_ELEMENT),R.__offset=I}}let A=S%P;return A>0&&(S+=P-A),b.__size=S,b.__cache={},this}function M(b,E){let S={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(S.boundary=4,S.storage=4):b.isVector2?(S.boundary=8,S.storage=8):b.isVector3||b.isColor?(S.boundary=16,S.storage=12):b.isVector4?(S.boundary=16,S.storage=16):b.isMatrix3?(S.boundary=16,S.storage=48):b.isMatrix4?(S.boundary=16,S.storage=64):b.isTexture?Ge("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(b)?(S.boundary=16,S.storage=b.byteLength):Ge("WebGLRenderer: Unsupported uniform value type.",b),E===!0&&(S.boundary=16,S.storage=Math.ceil(S.storage/16)*16),S}function x(b){let E=b.target;E.removeEventListener("dispose",x),n.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function g(){for(let b in s)n.deleteBuffer(s[b]);s={},r={}}return{bind:a,update:o,dispose:g}}var U1=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),bi=null;function F1(){return bi===null&&(bi=new va(U1,16,16,ds,ui),bi.name="DFG_LUT",bi.minFilter=Pn,bi.magFilter=Pn,bi.wrapS=pi,bi.wrapT=pi,bi.generateMipmaps=!1,bi.needsUpdate=!0),bi}var Hs=class{constructor(e={}){let{canvas:t=hp(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:u=!1,outputBufferType:d=Ln}=e;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=a;let M=d,x=new Set([kl,zl,Bl]),g=new Set([Ln,hi,Dr,zs,Ul,Fl]),b=new Uint32Array(4),E=new Int32Array(4),S={textures:[],min:[],max:[],resolution:[]},P=null,A=null,p=[],v=[],C=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Mi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let y=this,w=!1,R=null,_=null,T=null,I=null;this._outputColorSpace=gn;let N=0,B=0,k=null,F=-1,U=null,H=new Lt,Z=new Lt,$=null,G=new We(0),ee=0,te=t.width,le=t.height,ce=1,he=null,ze=null,Pe=new Lt(0,0,te,le),Oe=new Lt(0,0,te,le),je=!1,ae=new rs,xe=new ll,ge=!1,Ie=!1,Ee=new _t,Ke=new W,Be=new Lt,lt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ht=!1;function yt(){return k===null?ce:1}let Y=i;function Qt(D,q){return t.getContext(D,q)}let at,wt,Se,Gt,Ve,Ze,z,L,J,fe,oe,ye,Te,ie,se,ve,V,re,ne,Me,me,_e,ke;try{let D={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",He,!1),t.addEventListener("webglcontextrestored",tt,!1),t.addEventListener("webglcontextcreationerror",Ae,!1),Y===null){let q="webgl2";if(Y=Qt(q,D),Y===null)throw Qt(q)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}nt()}catch(D){throw t.removeEventListener("webglcontextlost",He,!1),t.removeEventListener("webglcontextrestored",tt,!1),t.removeEventListener("webglcontextcreationerror",Ae,!1),Xe("WebGLRenderer: "+D.message),D}function nt(){at=new Y_(Y),at.init(),me=new C1(Y,at),wt=new F_(Y,at,e,me),Se=new A1(Y,at),wt.reversedDepthBuffer&&u&&Se.buffers.depth.setReversed(!0),_=Y.createFramebuffer(),T=Y.createFramebuffer(),I=Y.createFramebuffer(),Gt=new K_(Y),Ve=new d1,Ze=new R1(Y,at,Se,Ve,wt,me,Gt),z=new q_(y),L=new jg(Y),_e=new D_(Y,L),J=new $_(Y,L,Gt,_e),fe=new j_(Y,J,L,_e,Gt),re=new J_(Y,wt,Ze),se=new O_(Ve),oe=new f1(y,z,at,wt,_e,se),ye=new N1(y,Ve),Te=new m1,ie=new M1(at),V=new N_(y,z,Se,fe,m,l),ve=new E1(y,fe,wt),ke=new D1(Y,Gt,wt,Se),ne=new U_(Y,at,Gt),Me=new Z_(Y,at,Gt),Gt.programs=oe.programs,y.capabilities=wt,y.extensions=at,y.properties=Ve,y.renderLists=Te,y.shadowMap=ve,y.state=Se,y.info=Gt}M!==Ln&&(C=new ev(M,t.width,t.height,o,s,r));let de=new Nu(y,Y);this.xr=de,this.getContext=function(){return Y},this.getContextAttributes=function(){return Y.getContextAttributes()},this.forceContextLoss=function(){let D=at.get("WEBGL_lose_context");D&&D.loseContext()},this.forceContextRestore=function(){let D=at.get("WEBGL_lose_context");D&&D.restoreContext()},this.getPixelRatio=function(){return ce},this.setPixelRatio=function(D){D!==void 0&&(ce=D,this.setSize(te,le,!1))},this.getSize=function(D){return D.set(te,le)},this.setSize=function(D,q,Q=!0){if(de.isPresenting){Ge("WebGLRenderer: Can't change size while VR device is presenting.");return}te=D,le=q,t.width=Math.floor(D*ce),t.height=Math.floor(q*ce),Q===!0&&(t.style.width=D+"px",t.style.height=q+"px"),C!==null&&C.setSize(t.width,t.height),this.setViewport(0,0,D,q)},this.getDrawingBufferSize=function(D){return D.set(te*ce,le*ce).floor()},this.setDrawingBufferSize=function(D,q,Q){te=D,le=q,ce=Q,t.width=Math.floor(D*Q),t.height=Math.floor(q*Q),this.setViewport(0,0,D,q)},this.setEffects=function(D){if(M===Ln){Xe("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(D){for(let q=0;q<D.length;q++)if(D[q].isOutputPass===!0){Ge("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}C.setEffects(D||[])},this.getCurrentViewport=function(D){return D.copy(H)},this.getViewport=function(D){return D.copy(Pe)},this.setViewport=function(D,q,Q,K){D.isVector4?Pe.set(D.x,D.y,D.z,D.w):Pe.set(D,q,Q,K),Se.viewport(H.copy(Pe).multiplyScalar(yt()).round())},this.getScissor=function(D){return D.copy(Oe)},this.setScissor=function(D,q,Q,K){D.isVector4?Oe.set(D.x,D.y,D.z,D.w):Oe.set(D,q,Q,K),Se.scissor(Z.copy(Oe).multiplyScalar(yt()).round())},this.getScissorTest=function(){return je},this.setScissorTest=function(D){Se.setScissorTest(je=D)},this.setOpaqueSort=function(D){he=D},this.setTransparentSort=function(D){ze=D},this.getClearColor=function(D){return D.copy(V.getClearColor())},this.setClearColor=function(){V.setClearColor(...arguments)},this.getClearAlpha=function(){return V.getClearAlpha()},this.setClearAlpha=function(){V.setClearAlpha(...arguments)},this.clear=function(D=!0,q=!0,Q=!0){let K=0;if(D){let j=!1;if(k!==null){let we=k.texture.format;j=x.has(we)}if(j){let we=k.texture.type,Ne=g.has(we),be=V.getClearColor(),Ce=V.getClearAlpha(),Fe=be.r,Qe=be.g,ut=be.b;Ne?(b[0]=Fe,b[1]=Qe,b[2]=ut,b[3]=Ce,Y.clearBufferuiv(Y.COLOR,0,b)):(E[0]=Fe,E[1]=Qe,E[2]=ut,E[3]=Ce,Y.clearBufferiv(Y.COLOR,0,E))}else K|=Y.COLOR_BUFFER_BIT}q&&(K|=Y.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Q&&(K|=Y.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),K!==0&&Y.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(D){D.setRenderer(this),R=D},this.dispose=function(){t.removeEventListener("webglcontextlost",He,!1),t.removeEventListener("webglcontextrestored",tt,!1),t.removeEventListener("webglcontextcreationerror",Ae,!1),V.dispose(),Te.dispose(),ie.dispose(),Ze.dispose(),Ve.dispose(),z.dispose(),fe.dispose(),J.dispose(),_e.dispose(),ke.dispose(),oe.dispose(),de.dispose(),de.removeEventListener("sessionstart",Gf),de.removeEventListener("sessionend",Wf),Ts.stop()};function He(D){D.preventDefault(),fa("WebGLRenderer: Context Lost."),w=!0}function tt(){fa("WebGLRenderer: Context Restored."),w=!1;let D=Gt.autoReset,q=ve.enabled,Q=ve.autoUpdate,K=ve.needsUpdate,j=ve.type;nt(),Gt.autoReset=D,ve.enabled=q,ve.autoUpdate=Q,ve.needsUpdate=K,ve.type=j}function Ae(D){Xe("WebGLRenderer: A WebGL context could not be created. Reason: ",D.statusMessage)}function St(D){let q=D.target;q.removeEventListener("dispose",St),hn(q)}function hn(D){Ji(D),Ve.remove(D)}function Ji(D){let q=Ve.get(D).programs;q!==void 0&&(q.forEach(function(Q){oe.releaseProgram(Q)}),D.isShaderMaterial&&oe.releaseShaderCache(D))}this.renderBufferDirect=function(D,q,Q,K,j,we){q===null&&(q=lt);let Ne=j.isMesh&&j.matrixWorld.determinantAffine()<0,be=Fm(D,q,Q,K,j);Se.setMaterial(K,Ne);let Ce=Q.index,Fe=1;if(K.wireframe===!0){if(Ce=J.getWireframeAttribute(Q),Ce===void 0)return;Fe=2}let Qe=Q.drawRange,ut=Q.attributes.position,De=Qe.start*Fe,ft=(Qe.start+Qe.count)*Fe;we!==null&&(De=Math.max(De,we.start*Fe),ft=Math.min(ft,(we.start+we.count)*Fe)),Ce!==null?(De=Math.max(De,0),ft=Math.min(ft,Ce.count)):ut!=null&&(De=Math.max(De,0),ft=Math.min(ft,ut.count));let en=ft-De;if(en<0||en===1/0)return;_e.setup(j,K,be,Q,Ce);let At,Et=ne;if(Ce!==null&&(At=L.get(Ce),Et=Me,Et.setIndex(At)),j.isMesh)K.wireframe===!0?(Se.setLineWidth(K.wireframeLinewidth*yt()),Et.setMode(Y.LINES)):Et.setMode(Y.TRIANGLES);else if(j.isLine){let Mn=K.linewidth;Mn===void 0&&(Mn=1),Se.setLineWidth(Mn*yt()),j.isLineSegments?Et.setMode(Y.LINES):j.isLineLoop?Et.setMode(Y.LINE_LOOP):Et.setMode(Y.LINE_STRIP)}else j.isPoints?Et.setMode(Y.POINTS):j.isSprite&&Et.setMode(Y.TRIANGLES);if(j.isBatchedMesh)if(at.get("WEBGL_multi_draw"))Et.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{let Mn=j._multiDrawStarts,Ue=j._multiDrawCounts,Rn=j._multiDrawCount,Mt=Ce?L.get(Ce).bytesPerElement:1,ws=Ve.get(K).currentProgram.getUniforms();for(let bn=0;bn<Rn;bn++)ws.setValue(Y,"_gl_DrawID",bn),Et.render(Mn[bn]/Mt,Ue[bn])}else if(j.isInstancedMesh)Et.renderInstances(De,en,j.count);else if(Q.isInstancedBufferGeometry){let Mn=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,Ue=Math.min(Q.instanceCount,Mn);Et.renderInstances(De,en,Ue)}else Et.render(De,en)};function Vf(D,q,Q,K){R!==null&&D.isNodeMaterial&&R.setObject(K,D),ge===!0&&se.setState(D,Q,!1),D.transparent===!0&&D.side===Jn&&D.forceSinglePass===!1?(D.side=xn,D.needsUpdate=!0,$r(D,q,K),D.side=fs,D.needsUpdate=!0,$r(D,q,K),D.side=Jn):$r(D,q,K)}this.compile=function(D,q,Q=null){Q===null&&(Q=D),R!==null&&R.renderStart(D,q,Q),A=ie.get(Q),A.init(q),v.push(A),Q.traverseVisible(function(j){j.isLight&&j.layers.test(q.layers)&&(A.pushLight(j),j.castShadow&&A.pushShadow(j))}),D!==Q&&D.traverseVisible(function(j){j.isLight&&j.layers.test(q.layers)&&(A.pushLight(j),j.castShadow&&A.pushShadow(j))}),A.setupLights(),R!==null&&R.updateLights(A.state.lightsArray),Ie=this.localClippingEnabled,ge=se.init(this.clippingPlanes,Ie),ge===!0&&se.setGlobalState(this.clippingPlanes,q),R!==null&&ve.render(A.state.shadowsArray,Q,q);let K=new Set;return D.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;let we=j.material;if(we)if(Array.isArray(we))for(let Ne=0;Ne<we.length;Ne++){let be=we[Ne];Vf(be,Q,q,j),K.add(be)}else Vf(we,Q,q,j),K.add(we)}),A=v.pop(),R!==null&&R.renderEnd(),K},this.compileAsync=function(D,q,Q=null){let K=this.compile(D,q,Q);return new Promise(j=>{function we(){if(K.forEach(function(Ne){let Ce=Ve.get(Ne).currentProgram;(Ce===void 0||Ce.isReady())&&K.delete(Ne)}),K.size===0){j(D);return}setTimeout(we,10)}at.get("KHR_parallel_shader_compile")!==null?we():setTimeout(we,10)})};let ch=null;function Dm(D){ch&&ch(D)}function Gf(){Ts.stop()}function Wf(){Ts.start()}let Ts=new Yp;Ts.setAnimationLoop(Dm),typeof self<"u"&&Ts.setContext(self),this.setAnimationLoop=function(D){ch=D,de.setAnimationLoop(D),D===null?Ts.stop():Ts.start()},de.addEventListener("sessionstart",Gf),de.addEventListener("sessionend",Wf),this.render=function(D,q){if(q!==void 0&&q.isCamera!==!0){Xe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;R!==null&&R.renderStart(D,q);let Q=de.enabled===!0&&de.isPresenting===!0,K=C!==null&&(k===null||Q)&&C.begin(y,k);if(D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),de.enabled===!0&&de.isPresenting===!0&&(C===null||C.isCompositing()===!1)&&(de.cameraAutoUpdate===!0&&de.updateCamera(q),q=de.getCamera()),D.isScene===!0&&D.onBeforeRender(y,D,q,k),A=ie.get(D,v.length),A.init(q),A.state.textureUnits=Ze.getTextureUnits(),v.push(A),Ee.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),q.isArrayCamera?xe.setFromArrayCamera(q):ae.setFromProjectionMatrix(Ee,$n,q.reversedDepth),Ie=this.localClippingEnabled,ge=se.init(this.clippingPlanes,Ie),P=Te.get(D,p.length),P.init(),p.push(P),this.info.render.frame++,de.enabled===!0&&de.isPresenting===!0){let Ne=y.xr.getDepthSensingMesh();Ne!==null&&hh(Ne,q,-1/0,y.sortObjects)}hh(D,q,0,y.sortObjects),P.finish(),R!==null&&R.updateLights(A.state.lightsArray),y.sortObjects===!0&&P.sort(he,ze),ht=de.enabled===!1||de.isPresenting===!1||de.hasDepthSensing()===!1,ht&&V.addToRenderList(P,D),this.info.autoReset===!0&&this.info.reset(),ge===!0&&se.beginShadows();let j=A.state.shadowsArray;if(ve.render(j,D,q),ge===!0&&se.endShadows(),(K&&C.hasRenderPass())===!1){let Ne=P.opaque,be=P.transmissive;if(A.setupLights(),q.isArrayCamera){let Ce=q.cameras;if(be.length>0)for(let Fe=0,Qe=Ce.length;Fe<Qe;Fe++){let ut=Ce[Fe];qf(Ne,be,D,ut)}ht&&V.render(D);for(let Fe=0,Qe=Ce.length;Fe<Qe;Fe++){let ut=Ce[Fe];Xf(P,D,ut,ut.viewport)}}else be.length>0&&qf(Ne,be,D,q),ht&&V.render(D),Xf(P,D,q)}k!==null&&B===0&&(Ze.updateMultisampleRenderTarget(k),Ze.updateRenderTargetMipmap(k)),K&&C.end(y),D.isScene===!0&&D.onAfterRender(y,D,q),_e.resetDefaultState(),F=-1,U=null,v.pop(),v.length>0?(A=v[v.length-1],Ze.setTextureUnits(A.state.textureUnits),ge===!0&&se.setGlobalState(y.clippingPlanes,A.state.camera)):A=null,p.pop(),p.length>0?P=p[p.length-1]:P=null,R!==null&&R.renderEnd()};function hh(D,q,Q,K){if(D.visible===!1)return;if(D.layers.test(q.layers)){if(D.isGroup)Q=D.renderOrder;else if(D.isLOD)D.autoUpdate===!0&&D.update(q);else if(D.isLight)A.pushLight(D),D.castShadow&&A.pushShadow(D);else if(D.isSprite){let Ne=q.isArrayCamera?xe:ae;if(!D.frustumCulled||D.intersectsFrustum(Ne)){K&&Be.setFromMatrixPosition(D.matrixWorld).applyMatrix4(Ee);let be=fe.update(D),Ce=D.material;Ce.visible&&P.push(D,be,Ce,Q,Be.z,null,q)}}else if(D.isMesh||D.isLine||D.isPoints){let Ne=q.isArrayCamera?xe:ae;if(!D.frustumCulled||D.intersectsFrustum(Ne)){let be=fe.update(D),Ce=D.material;if(K&&(D.boundingSphere!==void 0?(D.boundingSphere===null&&D.computeBoundingSphere(),Be.copy(D.boundingSphere.center)):(be.boundingSphere===null&&be.computeBoundingSphere(),Be.copy(be.boundingSphere.center)),Be.applyMatrix4(D.matrixWorld).applyMatrix4(Ee)),Array.isArray(Ce)){let Fe=be.groups;for(let Qe=0,ut=Fe.length;Qe<ut;Qe++){let De=Fe[Qe],ft=Ce[De.materialIndex];ft&&ft.visible&&P.push(D,be,ft,Q,Be.z,De,q)}}else Ce.visible&&P.push(D,be,Ce,Q,Be.z,null,q)}}}let we=D.children;for(let Ne=0,be=we.length;Ne<be;Ne++)hh(we[Ne],q,Q,K)}function Xf(D,q,Q,K){let{opaque:j,transmissive:we,transparent:Ne}=D;A.setupLightsView(Q),ge===!0&&se.setGlobalState(y.clippingPlanes,Q),K&&Se.viewport(H.copy(K)),j.length>0&&yo(j,q,Q),we.length>0&&yo(we,q,Q),Ne.length>0&&yo(Ne,q,Q),Se.buffers.depth.setTest(!0),Se.buffers.depth.setMask(!0),Se.buffers.color.setMask(!0),Se.setPolygonOffset(!1)}function qf(D,q,Q,K){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[K.id]===void 0){let De=at.has("EXT_color_buffer_half_float")||at.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[K.id]=new kn(1,1,{generateMipmaps:!0,type:De?ui:Ln,minFilter:ki,samples:Math.max(4,wt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:dt.workingColorSpace})}let we=A.state.transmissionRenderTarget[K.id],Ne=K.viewport||H;we.setSize(Ne.z*y.transmissionResolutionScale,Ne.w*y.transmissionResolutionScale);let be=y.getRenderTarget(),Ce=y.getActiveCubeFace(),Fe=y.getActiveMipmapLevel();y.setRenderTarget(we),y.getClearColor(G),ee=y.getClearAlpha(),ee<1&&y.setClearColor(16777215,.5),y.clear(),ht&&V.render(Q);let Qe=y.toneMapping;y.toneMapping=Mi;let ut=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),A.setupLightsView(K),ge===!0&&se.setGlobalState(y.clippingPlanes,K),yo(D,Q,K),Ze.updateMultisampleRenderTarget(we),Ze.updateRenderTargetMipmap(we),at.has("WEBGL_multisampled_render_to_texture")===!1){let De=!1;for(let ft=0,en=q.length;ft<en;ft++){let At=q[ft],{object:Et,geometry:Mn,material:Ue,group:Rn}=At;if(Ue.side===Jn&&Et.layers.test(K.layers)){let Mt=Ue.side;Ue.side=xn,Ue.needsUpdate=!0,Yf(Et,Q,K,Mn,Ue,Rn),Ue.side=Mt,Ue.needsUpdate=!0,De=!0}}De===!0&&(Ze.updateMultisampleRenderTarget(we),Ze.updateRenderTargetMipmap(we))}y.setRenderTarget(be,Ce,Fe),y.setClearColor(G,ee),ut!==void 0&&(K.viewport=ut),y.toneMapping=Qe}function yo(D,q,Q){let K=q.isScene===!0?q.overrideMaterial:null;for(let j=0,we=D.length;j<we;j++){let Ne=D[j],{object:be,geometry:Ce,group:Fe}=Ne,Qe=Ne.material;Qe.allowOverride===!0&&K!==null&&(Qe=K),be.layers.test(Q.layers)&&Yf(be,q,Q,Ce,Qe,Fe)}}function Yf(D,q,Q,K,j,we){R!==null&&j.isNodeMaterial&&R.setObject(D,j),D.onBeforeRender(y,q,Q,K,j,we),D.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,D.matrixWorld),D.normalMatrix.getNormalMatrix(D.modelViewMatrix),j.onBeforeRender(y,q,Q,K,D,we),j.transparent===!0&&j.side===Jn&&j.forceSinglePass===!1?(j.side=xn,j.needsUpdate=!0,y.renderBufferDirect(Q,q,K,j,D,we),j.side=fs,j.needsUpdate=!0,y.renderBufferDirect(Q,q,K,j,D,we),j.side=Jn):y.renderBufferDirect(Q,q,K,j,D,we),D.onAfterRender(y,q,Q,K,j,we)}function $f(D){let q=0;for(let Q of D)Q.texture!==null&&q++;return q}function $r(D,q,Q){q.isScene!==!0&&(q=lt);let K=Ve.get(D),j=A.state.lights,we=A.state.shadowsArray,Ne=j.state.version,be=oe.getParameters(D,j.state,we,q,Q,A.state.lightProbeGridArray),Ce=oe.getProgramCacheKey(be),Fe=K.programs;K.environment=D.isMeshStandardMaterial||D.isMeshLambertMaterial||D.isMeshPhongMaterial?q.environment:null,K.fog=q.fog;let Qe=D.isMeshStandardMaterial||D.isMeshLambertMaterial&&!D.envMap||D.isMeshPhongMaterial&&!D.envMap;K.envMap=z.get(D.envMap||K.environment,Qe),K.envMapRotation=K.environment!==null&&D.envMap===null?q.environmentRotation:D.envMapRotation,Fe===void 0&&(D.addEventListener("dispose",St),Fe=new Map,K.programs=Fe,K.programVariants=new Map);let ut=Fe.get(Ce);if(ut!==void 0){if(K.currentProgram===ut&&K.lightsStateVersion===Ne)return Kf(D,be),ut}else be.uniforms=oe.getUniforms(D),R!==null&&D.isNodeMaterial&&R.build(D,Q,be),D.onBeforeCompile(be,y),ut=oe.acquireProgram(be,Ce),Fe.set(Ce,ut),K.uniforms=be.uniforms;let De=K.uniforms;return(!D.isShaderMaterial&&!D.isRawShaderMaterial||D.clipping===!0)&&(De.clippingPlanes=se.uniform),Kf(D,be),K.needsLights=Bm(D),K.lightsStateVersion=Ne,K.needsLights&&(De.ambientLightColor.value=j.state.ambient,De.lightProbe.value=j.state.probe,De.sunLights.value=j.state.sun,De.sunLightShadows.value=j.state.sunShadow,De.directionalLights.value=j.state.directional,De.directionalLightShadows.value=j.state.directionalShadow,De.spotLights.value=j.state.spot,De.spotLightShadows.value=j.state.spotShadow,De.rectAreaLights.value=j.state.rectArea,De.ltc_1.value=j.state.rectAreaLTC1,De.ltc_2.value=j.state.rectAreaLTC2,De.pointLights.value=j.state.point,De.pointLightShadows.value=j.state.pointShadow,De.hemisphereLights.value=j.state.hemi,De.sunShadowMatrix.value=j.state.sunShadowMatrix,De.sunShadowCascade.value=j.state.sunShadowCascade,De.directionalShadowMatrix.value=j.state.directionalShadowMatrix,De.spotLightMatrix.value=j.state.spotLightMatrix,De.spotLightMap.value=j.state.spotLightMap,De.pointShadowMatrix.value=j.state.pointShadowMatrix),K.numLightProbeGrids=$f(A.state.lightProbeGridArray),K.currentProgram=ut,K.uniformsList=null,ut}function Um(D,q,Q,K,j){let we=Ve.get(D),Ne=we.currentProgram.id+","+K+","+j,be=we.programVariants.get(Ne);return be===void 0?(be=$r(D,q,Q),we.programVariants.set(Ne,be)):(we.currentProgram=be,we.uniformsList=null,we.outputColorSpace=K,we.toneMapping=j),be}function Zf(D){if(D.uniformsList===null){let q=D.currentProgram.getUniforms();D.uniformsList=Fr.seqWithValue(q.seq,D.uniforms)}return D.uniformsList}function Kf(D,q){let Q=Ve.get(D);Q.outputColorSpace=q.outputColorSpace,Q.batching=q.batching,Q.batchingColor=q.batchingColor,Q.instancing=q.instancing,Q.instancingColor=q.instancingColor,Q.instancingMorph=q.instancingMorph,Q.skinning=q.skinning,Q.morphTargets=q.morphTargets,Q.morphNormals=q.morphNormals,Q.morphColors=q.morphColors,Q.morphTargetsCount=q.morphTargetsCount,Q.numClippingPlanes=q.numClippingPlanes,Q.numIntersection=q.numClipIntersection,Q.vertexAlphas=q.vertexAlphas,Q.vertexTangents=q.vertexTangents,Q.toneMapping=q.toneMapping}function Fm(D,q,Q,K,j){q.isScene!==!0&&(q=lt),Ze.resetTextureUnits();let we=q.fog,Ne=K.isMeshStandardMaterial||K.isMeshLambertMaterial||K.isMeshPhongMaterial?q.environment:null,be=k===null?y.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:dt.workingColorSpace,Ce=K.isMeshStandardMaterial||K.isMeshLambertMaterial&&!K.envMap||K.isMeshPhongMaterial&&!K.envMap,Fe=z.get(K.envMap||Ne,Ce),Qe=K.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,ut=!!Q.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),De=!!Q.morphAttributes.position,ft=!!Q.morphAttributes.normal,en=!!Q.morphAttributes.color,At=Mi;K.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(At=y.toneMapping);let Et=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,Mn=Et!==void 0?Et.length:0,Ue=Ve.get(K),Rn=A.state.lights;if(ge===!0&&(Ie===!0||D!==U)){let Ot=D===U&&K.id===F;se.setState(K,D,Ot)}let Mt=!1,ws=!1;K.version===Ue.__version?Ue.needsLights&&Ue.lightsStateVersion!==Rn.state.version||j.isBatchedMesh&&Ue.batching===!1||!j.isBatchedMesh&&Ue.batching===!0||j.isBatchedMesh&&Ue.batchingColor===!0&&j._colorsTexture===null||j.isBatchedMesh&&Ue.batchingColor===!1&&j._colorsTexture!==null||j.isInstancedMesh&&Ue.instancing===!1||!j.isInstancedMesh&&Ue.instancing===!0||j.isSkinnedMesh&&Ue.skinning===!1||!j.isSkinnedMesh&&Ue.skinning===!0||j.isInstancedMesh&&Ue.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&Ue.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&Ue.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&Ue.instancingMorph===!1&&j.morphTexture!==null||Ue.envMap!==Fe||K.fog===!0&&Ue.fog!==we||Ue.numClippingPlanes!==void 0&&(Ue.numClippingPlanes!==se.numPlanes||Ue.numIntersection!==se.numIntersection)||Ue.vertexAlphas!==Qe||Ue.vertexTangents!==ut||Ue.morphTargets!==De||Ue.morphNormals!==ft||Ue.morphColors!==en||Ue.morphTargetsCount!==Mn||Ue.numLightProbeGrids!==$f(A.state.lightProbeGridArray)?Mt=!0:(Ue.outputColorSpace!==be||Ue.toneMapping!==At)&&(ws=!0):(Mt=!0,Ue.__version=K.version);let bn=Ue.currentProgram;(Mt===!0||ws===!0)&&(bn=ws===!0?Um(K,q,j,be,At):$r(K,q,j),R&&K.isNodeMaterial&&R.onUpdateProgram(K,bn,Ue));let _o=!1,ji=!1,Es=!1,xt=bn.getUniforms(),mn=Ue.uniforms;if(Se.useProgram(bn.program)&&(_o=!0,ji=!0,Es=!0),K.id!==F&&(F=K.id,ji=!0),_o||U!==D){Se.buffers.depth.getReversed()&&D.reversedDepth!==!0&&(D._reversedDepth=!0,D.updateProjectionMatrix()),xt.setValue(Y,"projectionMatrix",D.projectionMatrix),xt.setValue(Y,"viewMatrix",D.matrixWorldInverse);let un=xt.map.cameraPosition;un!==void 0&&un.setValue(Y,Ke.setFromMatrixPosition(D.matrixWorld)),wt.logarithmicDepthBuffer&&xt.setValue(Y,"logDepthBufFC",2/(Math.log(D.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&xt.setValue(Y,"isOrthographic",D.isOrthographicCamera===!0),U!==D&&(U=D,ji=!0,Es=!0)}if(Ue.needsLights&&(Rn.state.sunShadowMap.length>0&&xt.setValue(Y,"sunShadowMap",Rn.state.sunShadowMap,Ze),Rn.state.directionalShadowMap.length>0&&xt.setValue(Y,"directionalShadowMap",Rn.state.directionalShadowMap,Ze),Rn.state.spotShadowMap.length>0&&xt.setValue(Y,"spotShadowMap",Rn.state.spotShadowMap,Ze),Rn.state.pointShadowMap.length>0&&xt.setValue(Y,"pointShadowMap",Rn.state.pointShadowMap,Ze)),j.isSkinnedMesh){xt.setOptional(Y,j,"bindMatrix"),xt.setOptional(Y,j,"bindMatrixInverse");let Ot=j.skeleton;Ot&&(Ot.boneTexture===null&&Ot.computeBoneTexture(),xt.setValue(Y,"boneTexture",Ot.boneTexture,Ze))}j.isBatchedMesh&&(xt.setOptional(Y,j,"batchingTexture"),xt.setValue(Y,"batchingTexture",j._matricesTexture,Ze),xt.setOptional(Y,j,"batchingIdTexture"),xt.setValue(Y,"batchingIdTexture",j._indirectTexture,Ze),xt.setOptional(Y,j,"batchingColorTexture"),j._colorsTexture!==null&&xt.setValue(Y,"batchingColorTexture",j._colorsTexture,Ze));let ii=Q.morphAttributes;if((ii.position!==void 0||ii.normal!==void 0||ii.color!==void 0)&&re.update(j,Q,bn),(ji||Ue.receiveShadow!==j.receiveShadow)&&(Ue.receiveShadow=j.receiveShadow,xt.setValue(Y,"receiveShadow",j.receiveShadow)),(K.isMeshStandardMaterial||K.isMeshLambertMaterial||K.isMeshPhongMaterial)&&K.envMap===null&&q.environment!==null&&(mn.envMapIntensity.value=q.environmentIntensity),mn.dfgLUT!==void 0&&(mn.dfgLUT.value=F1()),ji){if(xt.setValue(Y,"toneMappingExposure",y.toneMappingExposure),Ue.needsLights&&Om(mn,Es),we&&K.fog===!0&&ye.refreshFogUniforms(mn,we),ye.refreshMaterialUniforms(mn,K,ce,le,A.state.transmissionRenderTarget[D.id]),Ue.needsLights&&Ue.numLightProbeGrids>0){let Ot=S,un=0;for(let Ei of A.state.lightProbeGridArray)Ei.texture!==null&&(Ot.textures[un]=Ei.texture,Ot.min[un]=Ei.boundingBox.min,Ot.max[un]=Ei.boundingBox.max,Ot.resolution[un]=Ei.resolution,un++);for(let Ei in Ot)Ot[Ei].length=un;mn.probesSH.value=Ot.textures,mn.probesMin.value=Ot.min,mn.probesMax.value=Ot.max,mn.probesResolution.value=Ot.resolution}Fr.upload(Y,Zf(Ue),mn,Ze)}if(K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(Fr.upload(Y,Zf(Ue),mn,Ze),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&xt.setValue(Y,"center",j.center),xt.setValue(Y,"modelViewMatrix",j.modelViewMatrix),xt.setValue(Y,"normalMatrix",j.normalMatrix),xt.setValue(Y,"modelMatrix",j.matrixWorld),K.uniformsGroups!==void 0){let Ot=K.uniformsGroups;for(let un=0,Ei=Ot.length;un<Ei;un++){let jf=Ot[un];ke.update(jf,bn),ke.bind(jf,bn)}}return bn}function Om(D,q){D.ambientLightColor.needsUpdate=q,D.lightProbe.needsUpdate=q,D.sunLights.needsUpdate=q,D.sunLightShadows.needsUpdate=q,D.directionalLights.needsUpdate=q,D.directionalLightShadows.needsUpdate=q,D.pointLights.needsUpdate=q,D.pointLightShadows.needsUpdate=q,D.spotLights.needsUpdate=q,D.spotLightShadows.needsUpdate=q,D.rectAreaLights.needsUpdate=q,D.hemisphereLights.needsUpdate=q}function Bm(D){return D.isMeshLambertMaterial||D.isMeshToonMaterial||D.isMeshPhongMaterial||D.isMeshStandardMaterial||D.isShadowMaterial||D.isShaderMaterial&&D.lights===!0}this.getActiveCubeFace=function(){return N},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return k},this.setRenderTargetTextures=function(D,q,Q){let K=Ve.get(D);K.__autoAllocateDepthBuffer=D.resolveDepthBuffer===!1,K.__autoAllocateDepthBuffer===!1&&(K.__useRenderToTexture=!1),Ve.get(D.texture).__webglTexture=q,Ve.get(D.depthTexture).__webglTexture=K.__autoAllocateDepthBuffer?void 0:Q,K.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(D,q){let Q=Ve.get(D);Q.__webglFramebuffer=q,Q.__useDefaultFramebuffer=q===void 0},this.setRenderTarget=function(D,q=0,Q=0){k=D,N=q,B=Q;let K=null,j=!1,we=!1;if(D){let be=Ve.get(D);if(be.__useDefaultFramebuffer!==void 0){Se.bindFramebuffer(Y.FRAMEBUFFER,be.__webglFramebuffer),H.copy(D.viewport),Z.copy(D.scissor),$=D.scissorTest,Se.viewport(H),Se.scissor(Z),Se.setScissorTest($),F=-1;return}else if(be.__webglFramebuffer===void 0)Ze.setupRenderTarget(D);else if(be.__hasExternalTextures)Ze.rebindTextures(D,Ve.get(D.texture).__webglTexture,Ve.get(D.depthTexture).__webglTexture);else if(D.depthBuffer){let Qe=D.depthTexture;if(be.__boundDepthTexture!==Qe){if(Qe!==null&&Ve.has(Qe)&&(D.width!==Qe.image.width||D.height!==Qe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Ze.setupDepthRenderbuffer(D)}}let Ce=D.texture;(Ce.isData3DTexture||Ce.isDataArrayTexture||Ce.isCompressedArrayTexture)&&(we=!0);let Fe=Ve.get(D).__webglFramebuffer;D.isWebGLCubeRenderTarget?(Array.isArray(Fe[q])?K=Fe[q][Q]:K=Fe[q],j=!0):D.samples>0&&Ze.useMultisampledRTT(D)===!1?K=Ve.get(D).__webglMultisampledFramebuffer:Array.isArray(Fe)?K=Fe[Q]:K=Fe,H.copy(D.viewport),Z.copy(D.scissor),$=D.scissorTest}else H.copy(Pe).multiplyScalar(ce).floor(),Z.copy(Oe).multiplyScalar(ce).floor(),$=je;if(Q!==0&&(K=_),Se.bindFramebuffer(Y.FRAMEBUFFER,K)&&Se.drawBuffers(D,K),Se.viewport(H),Se.scissor(Z),Se.setScissorTest($),j){let be=Ve.get(D.texture);Y.framebufferTexture2D(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_CUBE_MAP_POSITIVE_X+q,be.__webglTexture,Q)}else if(we){let be=q;for(let Ce=0;Ce<D.textures.length;Ce++){let Fe=Ve.get(D.textures[Ce]);Y.framebufferTextureLayer(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0+Ce,Fe.__webglTexture,Q,be)}}else if(D!==null&&Q!==0){let be=Ve.get(D.texture);Y.framebufferTexture2D(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,be.__webglTexture,Q)}F=-1};function Jf(D){let q=Ve.get(D);return(q.__readFormat!==D.format||q.__readType!==D.type)&&(q.__readFormat=D.format,q.__readType=D.type,q.__formatReadable=wt.textureFormatReadable(D.format),q.__typeReadable=wt.textureTypeReadable(D.type)),q}this.readRenderTargetPixels=function(D,q,Q,K,j,we,Ne,be=0){if(!(D&&D.isWebGLRenderTarget)){Xe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=Ve.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&Ne!==void 0&&(Ce=Ce[Ne],Array.isArray(Ce)&&(Ce=Ce[0])),Ce){Se.bindFramebuffer(Y.FRAMEBUFFER,Ce);try{let Fe=D.textures[be],Qe=Fe.format,ut=Fe.type;D.textures.length>1&&Y.readBuffer(Y.COLOR_ATTACHMENT0+be);let De=Jf(Fe);if(De.__formatReadable===!1){Xe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(De.__typeReadable===!1){Xe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=D.width-K&&Q>=0&&Q<=D.height-j&&Y.readPixels(q,Q,K,j,me.convert(Qe),me.convert(ut),we)}finally{let Fe=k!==null?Ve.get(k).__webglFramebuffer:null;Se.bindFramebuffer(Y.FRAMEBUFFER,Fe)}}},this.readRenderTargetPixelsAsync=async function(D,q,Q,K,j,we,Ne,be=0){if(!(D&&D.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ce=Ve.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&Ne!==void 0&&(Ce=Ce[Ne],Array.isArray(Ce)&&(Ce=Ce[0])),Ce)if(q>=0&&q<=D.width-K&&Q>=0&&Q<=D.height-j){Se.bindFramebuffer(Y.FRAMEBUFFER,Ce);let Fe=D.textures[be],Qe=Fe.format,ut=Fe.type;D.textures.length>1&&Y.readBuffer(Y.COLOR_ATTACHMENT0+be);let De=Jf(Fe);if(De.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(De.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ft=Y.createBuffer();Y.bindBuffer(Y.PIXEL_PACK_BUFFER,ft),Y.bufferData(Y.PIXEL_PACK_BUFFER,we.byteLength,Y.STREAM_READ),Y.readPixels(q,Q,K,j,me.convert(Qe),me.convert(ut),0),Y.bindBuffer(Y.PIXEL_PACK_BUFFER,null);let en=k!==null?Ve.get(k).__webglFramebuffer:null;Se.bindFramebuffer(Y.FRAMEBUFFER,en);let At=Y.fenceSync(Y.SYNC_GPU_COMMANDS_COMPLETE,0);return Y.flush(),await fp(Y,At,4),Y.bindBuffer(Y.PIXEL_PACK_BUFFER,ft),Y.getBufferSubData(Y.PIXEL_PACK_BUFFER,0,we),Y.bindBuffer(Y.PIXEL_PACK_BUFFER,null),Y.deleteBuffer(ft),Y.deleteSync(At),we}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(D,q=null,Q=0){let K=Math.pow(2,-Q),j=Math.floor(D.image.width*K),we=Math.floor(D.image.height*K),Ne=q!==null?q.x:0,be=q!==null?q.y:0;Ze.setTexture2D(D,0),Y.copyTexSubImage2D(Y.TEXTURE_2D,Q,0,0,Ne,be,j,we),Se.unbindTexture()},this.copyTextureToTexture=function(D,q,Q=null,K=null,j=0,we=0){let Ne,be,Ce,Fe,Qe,ut,De,ft,en,At=D.isCompressedTexture?D.mipmaps[we]:D.image;if(Q!==null)Ne=Q.max.x-Q.min.x,be=Q.max.y-Q.min.y,Ce=Q.isBox3?Q.max.z-Q.min.z:1,Fe=Q.min.x,Qe=Q.min.y,ut=Q.isBox3?Q.min.z:0;else{let xt=Math.pow(2,-j);Ne=Math.floor(At.width*xt),be=Math.floor(At.height*xt),D.isDataArrayTexture?Ce=At.depth:D.isData3DTexture?Ce=Math.floor(At.depth*xt):Ce=1,Fe=0,Qe=0,ut=0}K!==null?(De=K.x,ft=K.y,en=K.z):(De=0,ft=0,en=0);let Et=me.convert(q.format),Mn=me.convert(q.type),Ue;q.isData3DTexture?(Ze.setTexture3D(q,0),Ue=Y.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(Ze.setTexture2DArray(q,0),Ue=Y.TEXTURE_2D_ARRAY):(Ze.setTexture2D(q,0),Ue=Y.TEXTURE_2D),Se.activeTexture(Y.TEXTURE0),Se.pixelStorei(Y.UNPACK_FLIP_Y_WEBGL,q.flipY),Se.pixelStorei(Y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),Se.pixelStorei(Y.UNPACK_ALIGNMENT,q.unpackAlignment);let Rn=Se.getParameter(Y.UNPACK_ROW_LENGTH),Mt=Se.getParameter(Y.UNPACK_IMAGE_HEIGHT),ws=Se.getParameter(Y.UNPACK_SKIP_PIXELS),bn=Se.getParameter(Y.UNPACK_SKIP_ROWS),_o=Se.getParameter(Y.UNPACK_SKIP_IMAGES);Se.pixelStorei(Y.UNPACK_ROW_LENGTH,At.width),Se.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,At.height),Se.pixelStorei(Y.UNPACK_SKIP_PIXELS,Fe),Se.pixelStorei(Y.UNPACK_SKIP_ROWS,Qe),Se.pixelStorei(Y.UNPACK_SKIP_IMAGES,ut);let ji=D.isDataArrayTexture||D.isData3DTexture,Es=q.isDataArrayTexture||q.isData3DTexture;if(D.isDepthTexture){let xt=Ve.get(D),mn=Ve.get(q),ii=Ve.get(xt.__renderTarget),Ot=Ve.get(mn.__renderTarget);Se.bindFramebuffer(Y.READ_FRAMEBUFFER,ii.__webglFramebuffer),Se.bindFramebuffer(Y.DRAW_FRAMEBUFFER,Ot.__webglFramebuffer);for(let un=0;un<Ce;un++)ji&&(Y.framebufferTextureLayer(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Ve.get(D).__webglTexture,j,ut+un),Y.framebufferTextureLayer(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Ve.get(q).__webglTexture,we,en+un)),Y.blitFramebuffer(Fe,Qe,Fe+Ne,Qe+be,De,ft,De+Ne,ft+be,Y.DEPTH_BUFFER_BIT,Y.NEAREST);Se.bindFramebuffer(Y.READ_FRAMEBUFFER,null),Se.bindFramebuffer(Y.DRAW_FRAMEBUFFER,null)}else if(j!==0||D.isRenderTargetTexture||Ve.has(D)){let xt=Ve.get(D),mn=Ve.get(q);Se.bindFramebuffer(Y.READ_FRAMEBUFFER,T),Se.bindFramebuffer(Y.DRAW_FRAMEBUFFER,I);for(let ii=0;ii<Ce;ii++)ji?Y.framebufferTextureLayer(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,xt.__webglTexture,j,ut+ii):Y.framebufferTexture2D(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,xt.__webglTexture,j),Es?Y.framebufferTextureLayer(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,mn.__webglTexture,we,en+ii):Y.framebufferTexture2D(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,mn.__webglTexture,we),j!==0?Y.blitFramebuffer(Fe,Qe,Fe+Ne,Qe+be,De,ft,De+Ne,ft+be,Y.COLOR_BUFFER_BIT,Y.NEAREST):Es?Y.copyTexSubImage3D(Ue,we,De,ft,en+ii,Fe,Qe,Ne,be):Y.copyTexSubImage2D(Ue,we,De,ft,Fe,Qe,Ne,be);Se.bindFramebuffer(Y.READ_FRAMEBUFFER,null),Se.bindFramebuffer(Y.DRAW_FRAMEBUFFER,null)}else Es?D.isDataTexture||D.isData3DTexture?Y.texSubImage3D(Ue,we,De,ft,en,Ne,be,Ce,Et,Mn,At.data):q.isCompressedArrayTexture?Y.compressedTexSubImage3D(Ue,we,De,ft,en,Ne,be,Ce,Et,At.data):Y.texSubImage3D(Ue,we,De,ft,en,Ne,be,Ce,Et,Mn,At):D.isDataTexture?Y.texSubImage2D(Y.TEXTURE_2D,we,De,ft,Ne,be,Et,Mn,At.data):D.isCompressedTexture?Y.compressedTexSubImage2D(Y.TEXTURE_2D,we,De,ft,At.width,At.height,Et,At.data):Y.texSubImage2D(Y.TEXTURE_2D,we,De,ft,Ne,be,Et,Mn,At);Se.pixelStorei(Y.UNPACK_ROW_LENGTH,Rn),Se.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,Mt),Se.pixelStorei(Y.UNPACK_SKIP_PIXELS,ws),Se.pixelStorei(Y.UNPACK_SKIP_ROWS,bn),Se.pixelStorei(Y.UNPACK_SKIP_IMAGES,_o),we===0&&q.generateMipmaps===!0&&q.mipmapsAutoUpdate===!0&&Y.generateMipmap(Ue),Se.unbindTexture()},this.initRenderTarget=function(D){Ve.get(D).__webglFramebuffer===void 0&&Ze.setupRenderTarget(D)},this.initTexture=function(D){D.isCubeTexture?Ze.setTextureCube(D,0):D.isData3DTexture?Ze.setTexture3D(D,0):D.isDataArrayTexture||D.isCompressedArrayTexture?Ze.setTexture2DArray(D,0):Ze.setTexture2D(D,0),Se.unbindTexture()},this.resetState=function(){N=0,B=0,k=null,Se.reset(),_e.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return $n}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=dt._getDrawingBufferColorSpace(e),t.unpackColorSpace=dt._getUnpackColorSpace()}};function O1(n,e,t){let i=n.n,s=[];if(n.format==="spans"){let r=null;for(let a=0;a<n.layers;a++){let o=new Uint8Array(i*i),l=new Float32Array(i*i),c=new Float32Array(i*i);a===0&&(r=new Uint8Array(i*i));for(let h=0;h<i;h++)for(let f=0;f<i;f++){let u=h*i+f,d=((2*a*i+h)*t+f)*4,m=(((2*a+1)*i+h)*t+f)*4,M=e[d];M?(o[u]=M-1,l[u]=(e[d+1]<<8|e[d+2])/100-2,c[u]=a===0?-30:(e[m+1]<<8|e[m+2])/100-2):(l[u]=NaN,c[u]=NaN,o[u]=0),a===0&&(r[u]=e[m])}s.push({cls:o,top:l,bot:c})}return s.flags=r,s}for(let r=0;r<n.layers;r++){let a=new Uint8Array(i*i),o=new Float32Array(i*i);for(let l=0;l<i;l++)for(let c=0;c<i;c++){let h=((r*i+l)*t+c)*4,f=l*i+c;a[f]=e[h],o[f]=(e[h+1]<<8|e[h+2])/100-2}s.push({cls:a,h:o})}return s}async function Du(n,e="maps/"){let t=await(await fetch(e+n+".json")).json(),i=new Image;i.src=e+n+".png",await i.decode();let s=document.createElement("canvas");s.width=i.width,s.height=i.height;let r=s.getContext("2d",{willReadFrequently:!0});r.drawImage(i,0,0);let a=r.getImageData(0,0,i.width,i.height).data,o={info:t,layers:O1(t,a,i.width)};return t.mesh&&(o.mesh=new Uint16Array(await(await fetch(e+t.mesh)).arrayBuffer())),o}var ms=n=>Math.round(n/.08)*.08;function Tc(n,e){let t=n.n,i=n.cell,s=e.length,r=t*t;if(n.format==="spans"){let f={n:t,cell:i,L:s,info:n,size:t*i,top:[],bot:[],cls:[],flags:e.flags||new Uint8Array(r),voidKill:!1,imported:!0};for(let u of e)f.top.push(u.top),f.bot.push(u.bot),f.cls.push(u.cls);return f.idx=(u,d)=>{let m=Math.floor(u/i),M=Math.floor(d/i);return m<0||M<0||m>=t||M>=t?-1:M*t+m},f.props=[],f.propCell=[],f}let a=s>1,o={n:t,cell:i,L:s,info:n,size:t*i,top:[],bot:[],cls:[],flags:new Uint8Array(r),voidKill:a},l=new Uint8Array(r);for(let f of e)for(let u=0;u<r;u++){let d=f.cls[u]&3;(d===1||d===2)&&(l[u]=1)}let c=new Uint8Array(r);{let u=new Uint8Array(r);for(let d=0;d<t;d++)for(let m=0;m<t;m++){let M=0;for(let x=-5;x<=5&&!M;x++){let g=m+x;g>=0&&g<t&&l[d*t+g]&&(M=1)}u[d*t+m]=M}for(let d=0;d<t;d++)for(let m=0;m<t;m++){let M=0;for(let x=-5;x<=5&&!M;x++){let g=d+x;g>=0&&g<t&&u[g*t+m]&&(M=1)}c[d*t+m]=M}}let h=!!n.clean;if(!h)for(let f of e)V1(t,f.cls,f.h,a);for(let[f,u,d,m,M,x]of B1[n.id]||[]){let g=e[0];for(let b=u;b<=m;b++)for(let E=f;E<=d;E++){let S=b*t+E,P=d-f>=m-u?E:b;P>=M&&P<=x||((g.cls[S]&3)===1||(g.cls[S]&3)===2)&&(g.cls[S]=g.cls[S]&-4|3)}}if(!h)for(let f of e)G1(t,f.cls,f.h);if(!h)for(let f of e)X1(t,f.cls,f.h);for(let f=0;f<s;f++){let{cls:u,h:d}=e[f],m=new Float32Array(r).fill(NaN),M=new Float32Array(r).fill(NaN),x=new Uint8Array(r),g=a?f===0?3.95:4.6:6.2,b=r0(t,u,d,7),E=W1(t,u,d);for(let S=0;S<r;S++){let P=u[S],A=P&3;o.flags[S]|=P&-4;let p=d[S],v=NaN,C=NaN;if(A===1)v=ms(p);else if(A===2)v=ms(E[S]+1.05);else if(A===3||A===0&&!a&&c[S]){let y=b[S]>-1e8?b[S]:p;v=ms(Math.ceil((y+g)/.6)*.6),a&&(v=ms(y+g))}else A===0&&a&&f===0&&c[S]&&q1(e,S);isNaN(v)||(C=f===0?-30:ms(p)-.36,x[S]=A===0?3:A),m[S]=v,M[S]=C}o.top.push(m),o.bot.push(M),o.cls.push(x)}if(a){let f=o.top[0],u=o.bot[1],d=o.cls[0];for(let m=0;m<r;m++)d[m]===3&&!isNaN(u[m])&&f[m]>u[m]&&(f[m]=u[m])}o.idx=(f,u)=>{let d=Math.floor(f/i),m=Math.floor(u/i);return d<0||m<0||d>=t||m>=t?-1:m*t+d};for(let f=0;f<o.L;f++)z1(o,f);return a||H1(o,e[0]),o}var B1={dust2:[[220,182,254,184,230,242]]};function z1(n,e){let t=n.n,i=n.cell,s=n.cls[e],r=n.top[e],a=n.bot[e];n.props=n.props||[],n.propCell=n.propCell||[];let o=new Int32Array(t*t);n.propCell[e]=o;let l=new Uint8Array(t*t),c=[],h=[];for(let f=0;f<t*t;f++){if(l[f]||s[f]!==2)continue;for(c.length=0,h.length=0,c.push(f),l[f]=1;c.length;){let F=c.pop();h.push(F);let U=F%t,H=(F-U)/t;for(let Z of[U>0?F-1:-1,U<t-1?F+1:-1,H>0?F-t:-1,H<t-1?F+t:-1])Z>=0&&!l[Z]&&s[Z]===2&&(l[Z]=1,c.push(Z))}if(h.length<6||h.length>420)continue;let u=0,d=0;for(let F of h)u+=F%t,d+=Math.floor(F/t);u/=h.length,d/=h.length;let m=0,M=0,x=0;for(let F of h){let U=F%t-u,H=Math.floor(F/t)-d;m+=U*U,M+=H*H,x+=U*H}let g=.5*Math.atan2(2*x,m-M);Math.abs(m-M)<1e-6&&Math.abs(x)<1e-6&&(g=0);let b=(g%(Math.PI/2)+Math.PI/2)%(Math.PI/2);(b<.14||b>Math.PI/2-.14)&&(g=Math.round(g/(Math.PI/2))*(Math.PI/2));let E=Math.cos(g),S=Math.sin(g),P=1e9,A=-1e9,p=1e9,v=-1e9;for(let F of h){let U=F%t-u,H=Math.floor(F/t)-d,Z=U*E+H*S,$=-U*S+H*E;P=Math.min(P,Z),A=Math.max(A,Z),p=Math.min(p,$),v=Math.max(v,$)}let C=(A-P)/2+.5,y=(v-p)/2+.5,w=(P+A)/2,R=(p+v)/2,_=u+w*E-R*S,T=d+w*S+R*E,I=1e9,N=-1e9;for(let F of h)N=Math.max(N,r[F]);for(let F of h){let U=F%t;for(let H of[F-1,F+1,F-t,F+t])H>=0&&H<t*t&&s[H]===1&&Math.abs(H%t-U)<=1&&(I=Math.min(I,r[H]))}if(I>1e8)continue;let B=n.props.length+1,k=Math.ceil(Math.max(C,y))+1;for(let F=Math.floor(T)-k;F<=Math.ceil(T)+k;F++)for(let U=Math.floor(_)-k;U<=Math.ceil(_)+k;U++){if(U<0||F<0||U>=t||F>=t)continue;let H=F*t+U,Z=U-_,$=F-T,G=Z*E+$*S,ee=-Z*S+$*E,te=Math.abs(G)<=C-.35&&Math.abs(ee)<=y-.35;te&&(s[H]===1||s[H]===2)?(s[H]=2,r[H]=N,o[H]=B):!te&&s[H]===2&&h.includes(H)&&(s[H]=1,r[H]=Math.round(I/.08)*.08)}n.props.push({l:e,x:(_+.5)*i,z:(T+.5)*i,hu:C*i,hv:y*i,ang:g,y0:I,y1:N,cells:h.length})}}var k1={dust2:[[142,188,224,220],[30,203,128,257],[46,158,64,205],[68,253,102,290],[126,212,162,252],[336,276,374,334]],mirage:[[110,76,306,114],[200,92,228,136],[320,360,432,412],[210,204,238,254]]};function H1(n,e){let t=n.n,i=t*t,s=n.cell,r=n.top[0],a=n.cls[0],o=new Float32Array(i).fill(NaN),l=new Float32Array(i).fill(NaN),c=new Uint8Array(i),h=r0(t,e.cls,e.h,7),f=S=>a[S]===1||a[S]===2,u=S=>!f(S),d=S=>ms(Math.ceil(((h[S]>-1e8?h[S]:r[S])+6.2)/.6)*.6);for(let[S,P,A,p]of k1[n.info.id]||[]){let v=-1e9;for(let C=P;C<=p;C++)for(let y=S;y<=A;y++){let w=C*t+y;a[w]===1&&r[w]>v&&(v=r[w])}for(let C=P;C<=p;C++)for(let y=S;y<=A;y++){let w=C*t+y;if(!f(w))continue;let R=ms(v+2.9);l[w]=R,o[w]=Math.max(R+.5,d(w)-.6),c[w]=4}}let m=Math.round(3.2/s),M=Math.round(2/s),x=new Uint16Array(i),g=new Uint16Array(i);for(let S=0;S<t;S++){let P=0;for(;P<t;){if(u(S*t+P)){P++;continue}let A=P;for(;A<t&&!u(S*t+A);)A++;for(let p=P;p<A;p++)x[S*t+p]=A-P;P=A}}for(let S=0;S<t;S++){let P=0;for(;P<t;){if(u(P*t+S)){P++;continue}let A=P;for(;A<t&&!u(A*t+S);)A++;for(let p=P;p<A;p++)g[p*t+S]=A-P;P=A}}let b=(S,P)=>{c[S]||(l[S]=ms(P+2.45),o[S]=d(S),c[S]=4)},E=S=>{let P=-1e9;for(let A of S)r[A]>P&&(P=r[A]);return P};for(let S=0;S<t;S++){let P=0;for(;P<t;){let A=P*t+S;if(u(A)||x[A]>m){P++;continue}let p=P;for(;p<t&&!u(p*t+S)&&x[p*t+S]<=m;)p++;if(p-P<=M&&P>0&&p<t&&!u((P-1)*t+S)&&!u(p*t+S)&&x[(P-1)*t+S]>m+2&&x[p*t+S]>m+2){let C=[];for(let w=P;w<p;w++)C.push(w*t+S);let y=E(C);for(let w of C)b(w,y)}P=p}}for(let S=0;S<t;S++){let P=0;for(;P<t;){let A=S*t+P;if(u(A)||g[A]>m){P++;continue}let p=P;for(;p<t&&!u(S*t+p)&&g[S*t+p]<=m;)p++;if(p-P<=M&&P>0&&p<t&&!u(S*t+P-1)&&!u(S*t+p)&&g[S*t+P-1]>m+2&&g[S*t+p]>m+2){let C=[];for(let w=P;w<p;w++)C.push(S*t+w);let y=E(C);for(let w of C)b(w,y)}P=p}}n.top.push(o),n.bot.push(l),n.cls.push(c),n.L=2,n.slabs=!0}function V1(n,e,t,i){let s=n*n,r=new Uint8Array(s),a=[],o=[],l=h=>(e[h]&3)===3;for(let h=0;h<s;h++){if(r[h]||!l(h))continue;a.length=0,o.length=0,a.push(h),r[h]=1;let f=!1;for(;a.length;){let u=a.pop();o.push(u);let d=u%n,m=(u-d)/n;for(let M of[d>0?u-1:-1,d<n-1?u+1:-1,m>0?u-n:-1,m<n-1?u+n:-1])M<0||((e[M]&3)===0&&(f=!0),!r[M]&&l(M)&&(r[M]=1,a.push(M)))}if(o.length<40&&!f)for(let u of o)c(u)}function c(h){let f=h%n,u=(h-f)/n,d=0,m=0;for(let M=-2;M<=2;M++)for(let x=-2;x<=2;x++){let g=f+x,b=u+M;if(g<0||b<0||g>=n||b>=n)continue;let E=b*n+g;(e[E]&3)===1&&(d+=t[E],m++)}e[h]=e[h]&-4|1,m&&(t[h]=d/m)}if(!i)for(let h=0;h<2;h++){let f=new Uint8Array(s);for(let u=0;u<s;u++){let d=e[u]&3;f[u]=d===3||d===0?1:0}for(let u=1;u<n-1;u++)for(let d=1;d<n-1;d++){let m=u*n+d,M=0;for(let x=-1;x<=1;x++)for(let g=-1;g<=1;g++)M+=f[m+x*n+g];f[m]&&M<=3&&(e[m]&3)===3?c(m):!f[m]&&M>=7&&(e[m]&3)===1&&(e[m]=e[m]&-4|3)}}}var s0=1.7;function G1(n,e,t){let i=n*n,s=new Uint8Array(i);for(let l=0;l<i;l++)s[l]=(e[l]&3)===1?1:0;{let l=new Uint8Array(i);for(let c=0;c<n;c++)for(let h=0;h<n;h++){let f=c*n+h;if(!s[f])continue;let u=0;for(let d=-4;d<=4&&!u;d++)for(let m=-4;m<=4;m++){let M=h+m,x=c+d;if(M<0||x<0||M>=n||x>=n)continue;let g=e[x*n+M]&3;if(g===3||g===0){u=1;break}}l[f]=u}for(let c=0;c<7;c++){for(let h=1;h<n-1;h++)for(let f=1;f<n-1;f++){let u=h*n+f;if(l[u]!==1&&l[u]!==2)continue;let d=0,m=0;for(let M=-1;M<=1;M++)for(let x=-1;x<=1;x++){let g=u+M*n+x;s[g]&&(l[g]===0||l[g]===3)&&(d+=t[g],m++)}m&&(t[u]=d/m,l[u]=2)}for(let h=0;h<i;h++)l[h]===2&&(l[h]=3)}}let r=new Uint8Array(i);for(let l=0;l<n;l++)for(let c=0;c<n;c++){let h=l*n+c;s[h]&&(c+1<n&&s[h+1]&&Math.abs(t[h]-t[h+1])<=s0&&(r[h]|=1),l+1<n&&s[h+n]&&Math.abs(t[h]-t[h+n])<=s0&&(r[h]|=2))}let a=Float32Array.from(t),o=new Float32Array(i);for(let l=0;l<48;l++){for(let h=0;h<n;h++)for(let f=0;f<n;f++){let u=h*n+f;if(!s[u]){o[u]=a[u];continue}let d=a[u]*2,m=2;r[u]&1&&(d+=a[u+1],m++),r[u]&2&&(d+=a[u+n],m++),f>0&&r[u-1]&1&&(d+=a[u-1],m++),h>0&&r[u-n]&2&&(d+=a[u-n],m++),o[u]=d/m}let c=a;a=o,o=c}for(let l=0;l<i;l++)s[l]&&(t[l]=a[l])}function r0(n,e,t,i){let s=n*n,r=new Float32Array(s).fill(-1e9),a=new Float32Array(s).fill(-1e9);for(let o=0;o<s;o++)(e[o]&3)===1&&(r[o]=t[o]);for(let o=0;o<n;o++)for(let l=0;l<n;l++){let c=-1e9;for(let h=Math.max(0,l-i);h<=Math.min(n-1,l+i);h++){let f=r[o*n+h];f>c&&(c=f)}a[o*n+l]=c}for(let o=0;o<n;o++)for(let l=0;l<n;l++){let c=-1e9;for(let h=Math.max(0,o-i);h<=Math.min(n-1,o+i);h++){let f=a[h*n+l];f>c&&(c=f)}r[o*n+l]=c}return r}function W1(n,e,t){let i=n*n,s=new Float32Array(i),r=new Uint8Array(i),a=[],o=[];for(let l=0;l<i;l++){if(r[l]||(e[l]&3)!==2)continue;a.length=0,o.length=0,a.push(l),r[l]=1;let c=-1e9;for(;a.length;){let h=a.pop();o.push(h),t[h]>c&&(c=t[h]);let f=h%n,u=(h-f)/n;for(let d of[f>0?h-1:-1,f<n-1?h+1:-1,u>0?h-n:-1,u<n-1?h+n:-1])d>=0&&!r[d]&&(e[d]&3)===2&&(r[d]=1,a.push(d))}if(o.length>900)for(let h of o)s[h]=t[h];else for(let h of o)s[h]=c}return s}function X1(n,e,t){let i=n*n,s=new Uint8Array(i);for(let f=0;f<i;f++)s[f]=(e[f]&3)===1?1:0;let r=new Uint8Array(i);for(let f=2;f<n-2;f++)for(let u=2;u<n-2;u++){let d=f*n+u;if(!s[d])continue;let m=0;for(let M of[2,-2,2*n,-2*n]){let x=d+M;s[x]&&(m=Math.max(m,Math.abs(t[x]-t[d])/2))}r[d]=m<.045?1:0}let a=new Int32Array(i).fill(-1),o=[],l=[],c=0;for(let f=0;f<i;f++)if(!(!r[f]||a[f]>=0)){for(o.length=0,l.length=0,o.push(f),a[f]=c;o.length;){let u=o.pop();l.push(u);let d=u%n;for(let m of[d>0?u-1:-1,d<n-1?u+1:-1,u-n,u+n])m>=0&&m<i&&r[m]&&a[m]<0&&Math.abs(t[m]-t[u])<.12&&(a[m]=c,o.push(m))}if(l.length>=25){let u=l.map(m=>t[m]).sort((m,M)=>m-M),d=u[u.length>>1];for(let m of l)t[m]=d}else for(let u of l)r[u]=0;c++}let h=Float32Array.from(t);for(let f=0;f<80;f++)for(let u=1;u<n-1;u++)for(let d=1;d<n-1;d++){let m=u*n+d;if(!s[m]||r[m])continue;let M=0,x=0;for(let g of[m-1,m+1,m-n,m+n])s[g]&&Math.abs(h[g]-h[m])<1.7&&(M+=h[g],x++);x&&(h[m]=M/x)}for(let f=0;f<i;f++)s[f]&&(t[f]=h[f])}function q1(n,e){for(let t of n){let i=t.cls[e]&3;if(i===1||i===2)return!0}return!1}function Gi(n,e,t,i,s,r=.4){for(let[a,o]of Uu){let l=n.idx(e+a*r,t+o*r);if(l<0)return!0;for(let c=0;c<n.L;c++){let h=n.top[c][l];if(!isNaN(h)&&h>i+.62&&n.bot[c][l]<i+s)return!0}}return!1}var Uu=[[0,0],[1,1],[1,-1],[-1,1],[-1,-1],[1,0],[-1,0],[0,1],[0,-1]];function Fu(n,e,t,i,s=.38){let r=-1/0;for(let[a,o]of Uu){let l=n.idx(e+a*s,t+o*s);if(!(l<0))for(let c=0;c<n.L;c++){let h=n.top[c][l];isNaN(h)||h<=i+.62&&h>r&&n.bot[c][l]<i+.1+.62&&(r=h)}}return r}function wc(n,e,t,i,s=.38){let r=1/0;for(let[a,o]of Uu){let l=n.idx(e+a*s,t+o*s);if(!(l<0))for(let c=0;c<n.L;c++){let h=n.bot[c][l];isNaN(h)||h>i+.2&&h<r&&(r=h)}}return r}function gs(n,e,t,i=1e9){let s=n.idx(e,t);if(s<0)return-1/0;let r=-1/0;for(let a=0;a<n.L;a++){let o=n.top[a][s];!isNaN(o)&&o<=i&&o>r&&(r=o)}return r}function Wi(n,e,t,i,s,r,a,o=200){let l=n.cell,c=n.n,h=Math.floor(e/l),f=Math.floor(i/l),u=s>0?1:-1,d=a>0?1:-1,m=s!==0?Math.abs(l/s):1/0,M=a!==0?Math.abs(l/a):1/0,x=s!==0?(s>0?(h+1)*l-e:e-h*l)/Math.abs(s):1/0,g=a!==0?(a>0?(f+1)*l-i:i-f*l)/Math.abs(a):1/0,b=0,E=-1;for(let S=0;S<4e3;S++){if(h<0||f<0||h>=c||f>=c)return null;let P=Math.min(x,g,o),A=f*c+h,p=t+r*b,v=t+r*P;for(let C=0;C<n.L;C++){let y=n.top[C][A];if(isNaN(y))continue;let w=n.bot[C][A];if(p>=w&&p<=y&&S>0)return{t:b,nx:E===0?-u:0,ny:0,nz:E===1?-d:0,cell:A,layer:C};if(p>=w&&p<=y&&S===0)return{t:0,nx:0,ny:1,nz:0,cell:A,layer:C};if(p>y&&v<=y&&r<0)return{t:(y-t)/r,nx:0,ny:1,nz:0,cell:A,layer:C};if(p<w&&v>=w&&r>0)return{t:(w-t)/r,nx:0,ny:-1,nz:0,cell:A,layer:C}}if(P>=o)return null;b=P,x<g?(h+=u,x+=m,E=0):(f+=d,g+=M,E=1)}return null}function Ec(n,e,t,i){let s=n.idx(e,i);if(s<0)return!1;for(let r=0;r<n.L;r++){let a=n.top[r][s];if(!isNaN(a)&&t<=a&&t>=n.bot[r][s])return!0}return!1}function Qn(n,e,t){let i=n.idx(e,t);return i<0?0:n.flags[i]}function Ou(n,e){let t=[];for(let i=0;i<n.n*n.n;i++)n.flags[i]&e&&t.push(i);return t}var a0={dust2:{floor:[.8,.66,.46],floorHi:[.84,.71,.51],wall:[.93,.82,.63],wallTop:[.86,.74,.55],trim:[.72,.6,.43],crate:[1,.95,.88],stone:[.82,.72,.56],metal:[.27,.47,.72],slab:[.62,.47,.32],sky:["#5c9ce0","#f6e3c0"],fog:"#efdcb9",sun:"#fff0d2",ground:"#cfae7c",hemiSky:"#cfe3ff",wallTex:"blocks",floorTex:"sand"},mirage:{floor:[.74,.68,.58],floorHi:[.79,.73,.63],wall:[.94,.87,.74],wallTop:[.78,.43,.3],trim:[.68,.58,.46],crate:[1,.95,.9],stone:[.8,.74,.64],metal:[.24,.55,.58],slab:[.74,.42,.3],sky:["#5b9fe0","#f5dcb8"],fog:"#efdabb",sun:"#fff1da",ground:"#c9ae88",hemiSky:"#d4e6ff",wallTex:"plaster",floorTex:"tiles"},vertigo:{floor:[.66,.66,.64],floorHi:[.72,.72,.69],wall:[.8,.8,.77],wallTop:[.62,.62,.6],trim:[.55,.55,.53],crate:[.98,.95,.9],stone:[.92,.72,.22],metal:[.25,.45,.75],slab:[.6,.6,.58],sky:["#3f87d6","#d2e6f6"],fog:"#cadcea",sun:"#ffffff",ground:"#6d7f8f",hemiSky:"#d6e8ff",wallTex:"concrete",floorTex:"slabs"}},Qa=n=>a0[n]||a0.dust2;function Ac(n,e){let t=n*374761393+e*668265263|0;return t=(t^t>>>13)*1274126177,((t^t>>>16)>>>0)/4294967296}var o0=(n,e,t)=>[n[0]+(e[0]-n[0])*t,n[1]+(e[1]-n[1])*t,n[2]+(e[2]-n[2])*t],qt=(n,e)=>[n[0]*e,n[1]*e,n[2]*e],l0=n=>Math.max(0,Math.min(1,n));function Y1(n){let e=n|0;return()=>{e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function Ti(n,e){let t=document.createElement("canvas");t.width=t.height=n;let i=t.getContext("2d");e(i,n);let s=new Fi(t);return s.wrapS=s.wrapT=_r,s.colorSpace=gn,s.anisotropy=8,s}function xs(n,e,t,i,s=235,r=2400,a=3){n.fillStyle=`rgb(${s},${s},${s})`,n.fillRect(0,0,e,e);for(let o=0;o<r;o++){let l=s+(t()-.5)*i;n.fillStyle=`rgba(${l|0},${l|0},${l|0},0.5)`;let c=1+t()*a;n.fillRect(t()*e,t()*e,c,c)}}var Bu={};function Cc(n){if(Bu[n])return Bu[n];let e=Y1(n.length*977+n.charCodeAt(0)),t;return n==="blocks"?t=Ti(256,(i,s)=>{xs(i,s,e,40,232,3e3);let r=4;for(let a=0;a<r;a++){let o=a*s/r;i.fillStyle="rgba(120,100,80,.35)",i.fillRect(0,o,s,3);let l=a%2?s/4:0;for(let c=0;c<3;c++){let h=(l+c*s/2)%s;i.fillRect(h,o,3,s/r)}for(let c=0;c<6;c++)i.fillStyle=`rgba(255,250,240,${.08+e()*.08})`,i.fillRect(e()*s,o+4+e()*(s/r-8),20+e()*50,6+e()*10)}i.fillStyle="rgba(90,70,50,.04)";for(let a=0;a<14;a++)i.beginPath(),i.arc(e()*s,e()*s,4+e()*18,0,7),i.fill()}):n==="plaster"?t=Ti(256,(i,s)=>{xs(i,s,e,26,238,2600);for(let r=0;r<10;r++)i.fillStyle=`rgba(150,130,100,${.03+e()*.04})`,i.beginPath(),i.ellipse(e()*s,e()*s,10+e()*40,6+e()*26,e()*3,0,7),i.fill();i.strokeStyle="rgba(110,90,70,.35)",i.lineWidth=1;for(let r=0;r<5;r++){let a=e()*s,o=e()*s;i.beginPath(),i.moveTo(a,o);for(let l=0;l<6;l++)a+=(e()-.5)*24,o+=e()*14,i.lineTo(a,o);i.stroke()}}):n==="concrete"?t=Ti(256,(i,s)=>{xs(i,s,e,30,228,3500,2),i.fillStyle="rgba(80,80,80,.35)",i.fillRect(0,0,s,2),i.fillRect(0,0,2,s),i.fillRect(s/2,0,2,s),i.fillStyle="rgba(60,60,60,.45)";for(let[r,a]of[[.25,.25],[.75,.25],[.25,.75],[.75,.75]])i.beginPath(),i.arc(r*s,a*s,3,0,7),i.fill();for(let r=0;r<8;r++)i.fillStyle=`rgba(90,85,80,${.06+e()*.08})`,i.fillRect(e()*s,e()*s,2+e()*4,20+e()*60)}):n==="sand"?t=Ti(256,(i,s)=>{xs(i,s,e,46,230,5e3,2);for(let r=0;r<40;r++)i.fillStyle=`rgba(150,120,80,${.06+e()*.06})`,i.beginPath(),i.ellipse(e()*s,e()*s,8+e()*30,3+e()*8,e()*3,0,7),i.fill();for(let r=0;r<25;r++)i.fillStyle="rgba(120,100,80,.35)",i.fillRect(e()*s,e()*s,2+e()*3,2+e()*3)}):n==="tiles"?t=Ti(256,(i,s)=>{xs(i,s,e,30,232,3e3,2);let r=4;i.fillStyle="rgba(110,95,75,.4)";for(let a=0;a<=r;a++)i.fillRect(a*s/r-1,0,2,s),i.fillRect(0,a*s/r-1,s,2);for(let a=0;a<r;a++)for(let o=0;o<r;o++)i.fillStyle=`rgba(${e()<.5?"255,250,240":"120,100,80"},${.05+e()*.07})`,i.fillRect(a*s/r+2,o*s/r+2,s/r-4,s/r-4)}):n==="slabs"?t=Ti(256,(i,s)=>{xs(i,s,e,34,226,4e3,2),i.fillStyle="rgba(70,70,70,.35)",i.fillRect(0,0,s,2),i.fillRect(0,0,2,s),i.fillRect(0,s/2,s,2);for(let r=0;r<6;r++)i.fillStyle=`rgba(60,60,60,${.05+e()*.08})`,i.beginPath(),i.ellipse(e()*s,e()*s,10+e()*30,6+e()*14,e()*3,0,7),i.fill()}):n==="crate"?t=Ti(128,(i,s)=>{i.fillStyle="#a7773f",i.fillRect(0,0,s,s);for(let r=0;r<6;r++)i.fillStyle=r%2?"#9a6c38":"#b17f46",i.fillRect(0,r*s/6,s,s/6),i.fillStyle="rgba(60,35,15,.5)",i.fillRect(0,r*s/6,s,1);for(let r=0;r<120;r++)i.fillStyle=`rgba(70,40,15,${e()*.25})`,i.fillRect(e()*s,e()*s,6+e()*20,1);i.strokeStyle="#7a5228",i.lineWidth=12,i.strokeRect(6,6,s-12,s-12),i.lineWidth=11,i.beginPath(),i.moveTo(10,10),i.lineTo(s-10,s-10),i.stroke(),i.strokeStyle="rgba(40,20,5,.6)",i.lineWidth=1.5,i.strokeRect(12,12,s-24,s-24),i.strokeRect(.5,.5,s-1,s-1),i.fillStyle="#3b2a1a";for(let[r,a]of[[6,6],[s-6,6],[6,s-6],[s-6,s-6]])i.beginPath(),i.arc(r,a,2.5,0,7),i.fill()}):n==="metal"?t=Ti(128,(i,s)=>{xs(i,s,e,20,225,900,2);for(let r=0;r<16;r++)i.fillStyle=r%2?"rgba(0,0,0,.18)":"rgba(255,255,255,.12)",i.fillRect(r*s/16,0,s/16,s);for(let r=0;r<10;r++)i.fillStyle=`rgba(110,60,30,${.1+e()*.2})`,i.fillRect(e()*s,e()*s,4+e()*12,2+e()*16);i.fillStyle="rgba(0,0,0,.3)",i.fillRect(0,0,s,4),i.fillRect(0,s-4,s,4)}):n==="stone"?t=Ti(128,(i,s)=>{xs(i,s,e,40,228,1500,2),i.fillStyle="rgba(90,75,55,.4)",i.fillRect(0,0,s,3),i.fillRect(0,s/2,s,2),i.fillRect(s/2,0,2,s/2),i.fillRect(s/4,s/2,2,s/2)}):n==="wood"&&(t=Ti(128,(i,s)=>{i.fillStyle="#d9c3a3",i.fillRect(0,0,s,s);for(let r=0;r<4;r++)i.fillStyle=`rgba(90,60,30,${.15+e()*.1})`,i.fillRect(0,r*s/4,s,s/4-3),i.fillStyle="rgba(50,30,10,.5)",i.fillRect(0,r*s/4-2,s,3);for(let r=0;r<80;r++)i.fillStyle=`rgba(70,40,15,${e()*.2})`,i.fillRect(e()*s,e()*s,8+e()*30,1)})),Bu[n]=t,t}function Gs(){return{pos:[],nor:[],col:[],uv:[]}}function $1(n,e,t,i,s,r){n.pos.push(e[0],e[1],e[2]),n.nor.push(t[0],t[1],t[2]),n.col.push(i[0],i[1],i[2]),n.uv.push(s,r)}function ja(n,e,t,i,s,r,a){let o=t[0]-e[0],l=t[1]-e[1],c=t[2]-e[2],h=i[0]-e[0],f=i[1]-e[1],u=i[2]-e[2],d=l*u-c*f,m=c*h-o*u,M=o*f-l*h,x=Math.hypot(d,m,M)||1,g=[d/x,m/x,M/x],b=[e,t,i];for(let E=0;E<3;E++){let S=r(b[E]);$1(n,b[E],g,a?a[E]:s,S[0],S[1])}}function ei(n,e,t,i,s,r){let[a,o,l]=e,c=o[0]-a[0],h=o[1]-a[1],f=o[2]-a[2],u=l[0]-a[0],d=l[1]-a[1],m=l[2]-a[2],M=h*m-f*d,x=f*u-c*m,g=c*d-h*u,b=e,E=r;M*t[0]+x*t[1]+g*t[2]<0&&(b=[e[0],e[3],e[2],e[1]],r&&(E=[r[0],r[3],r[2],r[1]])),ja(n,b[0],b[1],b[2],i,s,E&&[E[0],E[1],E[2]]),ja(n,b[0],b[2],b[3],i,s,E&&[E[0],E[2],E[3]])}var Br=n=>e=>[e[0]/n,e[2]/n],Rc=(n,e,t)=>i=>[(i[0]*e-i[2]*n)/t,i[1]/t];function h0(n,e){let t=Qa(e),i=n.n,s=n.cell,r={wall:Gs(),floor:Gs(),crate:Gs(),metal:Gs(),stone:Gs(),wood:Gs(),plain:Gs()},a=(h,f,u,d=.05)=>{let m=1+(Ac(f,u)-.5)*2*d;return[h[0]*m,h[1]*m,h[2]*m]};for(let h=0;h<n.L;h++){let f=n.top[h],u=n.bot[h],d=n.cls[h],m=A=>A>=0&&A<i*i&&d[A]===3,M=new Uint8Array(i*i);{let A=new Uint8Array(i*i),p=[],v=[];for(let C=0;C<i*i;C++){if(A[C]||d[C]!==2)continue;p.length=0,v.length=0,p.push(C),A[C]=1;let y=1e9,w=-1,R=1e9,_=-1;for(;p.length;){let F=p.pop();v.push(F);let U=F%i,H=(F-U)/i;y=Math.min(y,U),w=Math.max(w,U),R=Math.min(R,H),_=Math.max(_,H);for(let Z of[U>0?F-1:-1,U<i-1?F+1:-1,H>0?F-i:-1,H<i-1?F+i:-1])Z>=0&&!A[Z]&&d[Z]===2&&(A[Z]=1,p.push(Z))}let T=(w-y+1)*s,I=(_-R+1)*s,N=Math.max(T,I),B=Math.min(T,I),k=1;v.length>260?k=3:N>3.2&&B>1.4&&N/B>1.7?k=e==="vertigo"?3:2:Ac(y,R)<.18&&(k=3);for(let F of v)M[F]=k}}let x=(A,p,v)=>{let C=0,y=0;for(let w=-1;w<=0;w++)for(let R=-1;R<=0;R++){let _=p+R,T=v+w;if(_<0||T<0||_>=i||T>=i)continue;let I=T*i+_;d[I]!==1||isNaN(f[I])||Math.abs(f[I]-A)>.6||(C+=f[I],y++)}return y?C/y:A},g=new Uint8Array(i*i),b=Br(2.2);for(let A=0;A<i;A++)for(let p=0;p<i;p++){let v=A*i+p;if(d[v]===3){let $=0,G=0;for(let ee of[p>0?v-1:-1,p<i-1?v+1:-1,A>0?v-i:-1,A<i-1?v+i:-1])ee>=0&&d[ee]===1&&($+=f[ee],G++);if(G){let ee=$/G-.01,te=p*s,le=(p+1)*s,ce=A*s,he=(A+1)*s,ze=qt(t.floor,.62);ei(r.floor,[[te,ee,ce],[te,ee,he],[le,ee,he],[le,ee,ce]],[0,1,0],ze,b)}continue}if(n.propCell&&n.propCell[h]&&n.propCell[h][v]){let G=n.props[n.propCell[h][v]-1].y0,ee=p*s,te=(p+1)*s,le=A*s,ce=(A+1)*s;ei(r.floor,[[ee,G,le],[ee,G,ce],[te,G,ce],[te,G,le]],[0,1,0],qt(t.floor,.7),b);continue}if(d[v]!==1||isNaN(f[v]))continue;let C=f[v],y=x(C,p,A),w=x(C,p+1,A),R=x(C,p,A+1),_=x(C,p+1,A+1),T=m(v-1)||m(v+1)||m(v-i)||m(v+i)||m(v-i-1)||m(v-i+1)||m(v+i-1)||m(v+i+1);if(Math.abs(y-C)<.004&&Math.abs(w-C)<.004&&Math.abs(R-C)<.004&&Math.abs(_-C)<.004&&!T)continue;g[v]=1;let N=p*s,B=(p+1)*s,k=A*s,F=(A+1)*s,U=a(o0(t.floor,t.floorHi,l0(C/6)),p>>3,A>>3,.04),H=($,G)=>{let ee=0;for(let te=-1;te<=0;te++)for(let le=-1;le<=0;le++){let ce=$+le,he=G+te;ce>=0&&he>=0&&ce<i&&he<i&&d[he*i+ce]===3&&ee++}return qt(U,1-ee*.13)},Z=[H(p,A),H(p,A+1),H(p+1,A+1),H(p+1,A)];ja(r.floor,[N,y,k],[N,R,F],[B,_,F],U,b,[Z[0],Z[1],Z[2]]),ja(r.floor,[N,y,k],[B,_,F],[B,w,k],U,b,[Z[0],Z[2],Z[3]])}let E=n.propCell?n.propCell[h]:null,S=A=>isNaN(f[A])||g[A]||d[A]===3||E&&E[A]?null:(d[A]*1e5+M[A]*1e4+Math.round(f[A]*100))*1e4+(h>0?Math.round(u[A]*100)+5e3:0);for(let A=0;A<i;A++)for(let p=0;p<i;p++){let v=A*i+p;if(g[v])continue;let C=S(v);if(C===null)continue;let y=1;for(;p+y<i&&!g[v+y]&&S(v+y)===C;)y++;let w=1;e:for(;A+w<i;){for(let F=0;F<y;F++){let U=(A+w)*i+p+F;if(g[U]||S(U)!==C)break e}w++}for(let F=0;F<w;F++)for(let U=0;U<y;U++)g[(A+F)*i+p+U]=1;let R=f[v],_=p*s,T=(p+y)*s,I=A*s,N=(A+w)*s,B=d[v],k=[[_,R,I],[_,R,N],[T,R,N],[T,R,I]];if(B===1)ei(r.floor,k,[0,1,0],a(o0(t.floor,t.floorHi,l0(R/6)),p>>3,A>>3,.04),b);else if(B===2){let F=M[v];ei(F===1?r.crate:F===2?r.metal:r.stone,k,[0,1,0],F===1?t.crate:F===2?qt(t.metal,1.1):t.stone,Br(F===1?1.1:2))}else B===4&&ei(r.wood,k,[0,1,0],qt(t.wallTop,.95),Br(2));if(h>0){let F=u[v];ei(B===4?r.wood:r.floor,[[_,F,I],[_,F,N],[T,F,N],[T,F,I]],[0,-1,0],B===4?t.slab:qt(t.floor,.6),Br(2))}}let P=[[1,0],[-1,0],[0,1],[0,-1]];for(let A=0;A<4;A++){let[p,v]=P[A],C=p!==0?"z":"x";for(let y=0;y<i;y++){let w=null,R=()=>{if(!w)return;let{s:_,e:T,y0:I,y1:N,cl:B,line:k,kd:F}=w,U;if(C==="z"){let te=(p>0?k+1:k)*s;U=[[te,I,_*s],[te,I,(T+1)*s],[te,N,(T+1)*s],[te,N,_*s]]}else{let te=(v>0?k+1:k)*s;U=[[_*s,I,te],[(T+1)*s,I,te],[(T+1)*s,N,te],[_*s,N,te]]}let H=A<2?.93:.84,Z,$,G;if(B===2){Z=F===1?r.crate:F===2?r.metal:r.stone,$=qt(F===1?t.crate:F===2?t.metal:t.stone,H);let te=F===1?1.1:2;G=le=>[(le[0]*v-le[2]*p)/te,(le[1]-I)/te]}else B===4?(Z=r.wood,$=qt(t.slab,H),G=Rc(p,v,2)):(Z=r.wall,$=qt(t.trim,H),G=Rc(p,v,2.2));let ee=qt($,.8);ei(Z,U,[p,0,v],$,G,[ee,ee,$,$]),w=null};for(let _=0;_<i;_++){let T=C==="z"?y:_,I=C==="z"?_:y,N=I*i+T,B=null;if(!isNaN(f[N])&&d[N]!==3&&!(E&&E[N])){let k=T+p,F=I+v,U=k<0||F<0||k>=i||F>=i?-1:F*i+k,H=f[N],Z=u[N];if(U>=0&&!isNaN(f[U]))d[N]===1&&d[U]===1&&Math.abs(f[N]-f[U])<=.6||f[U]>=H&&u[U]<=Z?H=Z:u[U]<=Z+.01&&(Z=Math.max(Z,f[U]));else if(h===0){let $=1e9;for(let G=0;G<n.L;G++)U>=0&&!isNaN(n.top[G][U])&&n.cls[G][U]!==4&&($=Math.min($,n.top[G][U]));Z=$<1e9?Math.max(Z,$):n.voidKill?-25:Math.max(Z,H-8)}H-Z>.01&&(B={y0:Math.round(Z*100)/100,y1:Math.round(H*100)/100,cl:d[N],kd:M[N]})}B&&w&&w.y0===B.y0&&w.y1===B.y1&&w.cl===B.cl&&w.kd===B.kd&&w.e===_-1?w.e=_:(R(),B&&(w={s:_,e:_,...B,line:y}))}R()}}K1(n,h,r,t)}J1(n,e,r,t);for(let h of n.props||[]){let f=Math.max(h.hu,h.hv)*2,u=Math.min(h.hu,h.hv)*2,d=1;h.cells>260?d=3:f>3.2&&u>1.3&&f/u>1.7?d=e==="vertigo"?3:2:Ac(Math.round(h.x*7),Math.round(h.z*7))<.16&&(d=3);let m=d===1?r.crate:d===2?r.metal:r.stone,M=d===1?t.crate:d===2?t.metal:t.stone,x=d===1?1.1:2,g=Math.cos(h.ang),b=Math.sin(h.ang),E=(v,C,y)=>[h.x+v*g-C*b,y,h.z+v*b+C*g],S=h.y0-.05,P=h.y1,A=[[-h.hu,-h.hv],[h.hu,-h.hv],[h.hu,h.hv],[-h.hu,h.hv]];for(let v=0;v<4;v++){let C=A[v],y=A[(v+1)%4],w=Math.hypot(y[0]-C[0],y[1]-C[1]),R=(C[0]+y[0])/2,_=(C[1]+y[1])/2,T=Math.hypot(R,_),I=[(R*g-_*b)/T,0,(R*b+_*g)/T],N=.82+.14*Math.abs(I[0]),B=qt(M,N),k=qt(B,.8),F=E(C[0],C[1],S),U=E(y[0],y[1],S),H=E(y[0],y[1],P),Z=E(C[0],C[1],P),$=Math.max(1,Math.round(w/x)),G=Math.max(1,Math.round((P-S)/x));ei(m,[F,U,H,Z],I,B,te=>[Math.hypot(te[0]-F[0],te[2]-F[2])/w*$,(te[1]-S)/(P-S)*G],[k,k,B,B])}let p=A.map(([v,C])=>E(v,C,P));ei(m,p,[0,1,0],qt(M,1.04),v=>{let C=v[0]-h.x,y=v[2]-h.z;return[(C*g+y*b+h.hu)/x,(-C*b+y*g+h.hv)/x]})}let o=new Rt,l=0,c=(h,f)=>{if(!h.pos.length)return;let u=new Xt;u.setAttribute("position",new it(h.pos,3)),u.setAttribute("normal",new it(h.nor,3)),u.setAttribute("color",new it(h.col,3)),u.setAttribute("uv",new it(h.uv,2)),u.computeBoundingSphere();let d=new Ye(u,new an({vertexColors:!0,map:f&&typeof document<"u"?Cc(f):null}));d.matrixAutoUpdate=!1,d.castShadow=!0,d.receiveShadow=!0,o.add(d),l+=h.pos.length/9};return c(r.wall,t.wallTex),c(r.floor,t.floorTex),c(r.crate,"crate"),c(r.metal,"metal"),c(r.stone,"stone"),c(r.wood,"wood"),c(r.plain,null),o.matrixAutoUpdate=!1,{mesh:o,tris:l,theme:t}}var Z1=(()=>{let n=[];return n[0]=[],n[1]=[0,4,7],n[2]=[1,5,4],n[3]=[0,1,5,7],n[4]=[2,6,5],n[5]=[0,4,5,2,6,7],n[6]=[1,2,6,4],n[7]=[0,1,2,6,7],n[8]=[3,7,6],n[9]=[0,4,6,3],n[10]=[1,5,6,3,7,4],n[11]=[0,1,5,6,3],n[12]=[2,3,7,5],n[13]=[0,4,5,2,3],n[14]=[1,2,3,7,4],n[15]=[0,1,2,3],n})();function K1(n,e,t,i){let s=n.n,r=n.cell,a=n.top[e],o=n.bot[e],l=n.cls[e],c=d=>l[d]===3,h=t.wall,f=Br(2.2),u=[0,0,0,0];for(let d=0;d<s-1;d++)for(let m=0;m<s-1;m++){u[0]=d*s+m,u[1]=d*s+m+1,u[2]=(d+1)*s+m+1,u[3]=(d+1)*s+m;let M=0;for(let p=0;p<4;p++)c(u[p])&&(M|=1<<p);if(!M)continue;let x=Z1[M],g=(m+.5)*r,b=(d+.5)*r,E=[[g,b],[g+r,b],[g+r,b+r],[g,b+r]],S=x.map(p=>{if(p<4)return[E[p][0],E[p][1],a[u[p]],NaN,p];let v=p-4,C=(v+1)%4,y=c(u[v])?v:C,w=y===v?C:v,R=u[y],_=u[w],T;return!isNaN(a[_])&&l[_]===1?T=a[_]-.12:!isNaN(a[_])&&l[_]===2?T=a[_]-1.2:e===0?T=n.voidKill?-25:a[R]-8:T=o[R],[(E[v][0]+E[C][0])/2,(E[v][1]+E[C][1])/2,a[R],T,-1]});for(let p=1;p<S.length-1;p++)ja(h,[S[0][0],S[0][2],S[0][1]],[S[p+1][0],S[p+1][2],S[p+1][1]],[S[p][0],S[p][2],S[p][1]],i.wallTop,f);let P=0,A=0;for(let p of S)P+=p[0],A+=p[1];P/=S.length,A/=S.length;for(let p=0;p<S.length;p++){let v=S[p],C=S[(p+1)%S.length];if(v[4]>=0||C[4]>=0)continue;let y=C[1]-v[1],w=-(C[0]-v[0]),R=Math.hypot(y,w);y/=R,w/=R;let _=(v[0]+C[0])/2-P,T=(v[1]+C[1])/2-A;y*_+w*T<0&&(y=-y,w=-w);let I=.86+.1*Math.abs(y)-.04*Math.abs(w),N=qt(i.wall,I),B=qt(i.trim,I*.95),k=qt(N,.95),F=Math.min(v[2],v[3]+.45),U=Math.min(C[2],C[3]+.45),H=[v[0],v[3],v[1]],Z=[C[0],C[3],C[1]],$=[v[0],F,v[1]],G=[C[0],U,C[1]],ee=[v[0],v[2],v[1]],te=[C[0],C[2],C[1]],le=Rc(y,w,2.2);ei(h,[H,Z,G,$],[y,0,w],B,le,[qt(B,.75),qt(B,.75),B,B]),(v[2]>F+.01||C[2]>U+.01)&&ei(h,[$,G,te,ee],[y,0,w],N,le,[k,k,N,N])}}}function u0(n,e,t,i=1){let s=Qa(t),r=e.size;n.background=new We(s.sky[1]),n.fog=new ma(s.fog,70,t==="vertigo"?460:330);let a=new W(.45,.62,.3).normalize(),o=new Ye(new Bi(900,24,12),new Kn({side:xn,depthWrite:!1,fog:!1,uniforms:{a:{value:new We(s.sky[0])},b:{value:new We(s.sky[1])},sd:{value:a}},vertexShader:"varying vec3 vp; void main(){ vp = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.); }",fragmentShader:`uniform vec3 a; uniform vec3 b; uniform vec3 sd; varying vec3 vp; void main(){ vec3 col = mix(b, a, smoothstep(-0.05, 0.55, vp.y)); float s = max(dot(vp, sd), 0.); col += vec3(1.,.93,.75) * (pow(s, 700.) * 2.5 + pow(s, 14.) * .2); gl_FragColor = vec4(col, 1.);
#include <colorspace_fragment>
}`}));o.position.set(r/2,0,r/2),o.frustumCulled=!1,n.add(o),n.add(new _i(s.hemiSky,s.ground,1));let l=new vi(s.sun,2.2);if(l.position.set(r/2+a.x*r,a.y*r,r/2+a.z*r),l.target.position.set(r/2,0,r/2),i>0){l.castShadow=!0;let h=l.shadow.camera,f=r*.62;h.left=-f,h.right=f,h.top=f,h.bottom=-f,h.near=1,h.far=r*2.4;let u=i>1?4096:2048;l.shadow.mapSize.set(u,u),l.shadow.bias=-8e-4,l.shadow.normalBias=.06}n.add(l,l.target),n.add(new Ba("#ffffff",.1));let c=f0(7);if(t==="vertigo"){let h=new rn(1,1,1),f=new an({color:"#ffffff"}),u=new Hn(h,f,140),d=new Wt;for(let M=0;M<140;M++){let x=c()*Math.PI*2,g=120+c()*320,b=40+c()*140;d.position.set(r/2+Math.cos(x)*g,-160+b/2,r/2+Math.sin(x)*g),d.scale.set(14+c()*26,b,14+c()*26),d.updateMatrix(),u.setMatrixAt(M,d.matrix),u.setColorAt(M,new We().setHSL(.58,.14,.45+c()*.25))}n.add(u);let m=new Ye(new Zn(3e3,3e3),new an({color:s.ground}));m.rotation.x=-Math.PI/2,m.position.set(r/2,-160,r/2),n.add(m)}else{let h=new Ye(new Zn(3e3,3e3),new an({color:s.ground}));h.rotation.x=-Math.PI/2,h.position.set(r/2,-.6,r/2),n.add(h);let f=new Ls(1,1,6,1),u=new an({color:s.ground,flatShading:!0}),d=new Hn(f,u,40),m=new Wt;for(let M=0;M<40;M++){let x=M/40*Math.PI*2,g=260+c()*160,b=25+c()*50;m.position.set(r/2+Math.cos(x)*g,b/2-1,r/2+Math.sin(x)*g),m.scale.set(60+c()*60,b,60+c()*60),m.rotation.y=c()*3,m.updateMatrix(),d.setMatrixAt(M,m.matrix)}n.add(d)}return l}function f0(n){return()=>{n|=0,n=n+1831565813|0;let e=Math.imul(n^n>>>15,1|n);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function Wn(n,e,t,i,s,r,a,o,l=1){let c=e-s/2,h=e+s/2,f=t-r/2,u=t+r/2,d=i-a/2,m=i+a/2,M=[[[h,f,d],[h,f,m],[h,u,m],[h,u,d],[1,0,0],.9],[[c,f,d],[c,f,m],[c,u,m],[c,u,d],[-1,0,0],.9],[[c,f,m],[h,f,m],[h,u,m],[c,u,m],[0,0,1],.82],[[c,f,d],[h,f,d],[h,u,d],[c,u,d],[0,0,-1],.82],[[c,u,d],[c,u,m],[h,u,m],[h,u,d],[0,1,0],1]];for(let[x,g,b,E,S,P]of M)ei(n,[x,g,b,E],S,qt(o,P),S[1]?Br(l):Rc(S[0],S[2],l))}function J1(n,e,t,i){let s=n.n,r=n.cell,a=n.top[0],o=n.cls[0],l=g=>o[g]===3,c=g=>o[g]===1,h=f0(e.length*131),f=e==="vertigo"?[.32,.45,.55]:[.16,.13,.11],u=e==="mirage"?[.85,.78,.66]:e==="vertigo"?[.45,.47,.5]:[.62,.48,.32],d=e==="mirage"?[.2,.52,.55]:[.35,.5,.68],m=e==="dust2"?[[.22,.42,.62],[.45,.3,.18]]:e==="mirage"?[[.2,.48,.5],[.5,.33,.2]]:[[.55,.56,.58],[.7,.55,.15]],M=[[1,0],[-1,0],[0,1],[0,-1]];for(let[g,b]of M){let E=g===0;for(let S=1;S<s-1;S++){let P=-1,A=0,p=0,v=C=>{if(P<0)return;let y=(C-P)*r,w=p-A;if(y>3&&w>3.2){let R=Math.floor(y/4.2);for(let _=0;_<R;_++){let T=(P+(_+.5)*(C-P)/R)*r,I=h(),N=(g>0||b>0?S+1:S)*r,B=.03,k=E?T:N-g*B,F=E?N-b*B:T,U=E?1:.1,H=E?.1:1;if(I<.16&&w>3){let Z=m[Math.floor(h()*2)];Wn(t.plain,k,A+1.15,F,U*1.4+(E?0:.06),2.3,H*1.4+(E?.06:0),u),Wn(t.plain,k-g*.02,A+1.1,F-b*.02,U*1.2+(E?0:.06),2.2,H*1.2+(E?.06:0),Z)}else if(w>4.2){let Z=A+3.4;if(Wn(t.plain,k,Z,F,U*1.1+(E?0:.08),1.35,H*1.1+(E?.08:0),u),Wn(t.plain,k-g*.02,Z,F-b*.02,U*.85+(E?0:.08),1.1,H*.85+(E?.08:0),f),Wn(t.plain,k-g*.08,Z-.7,F-b*.08,U*1.25+(E?0:.18),.08,H*1.25+(E?.18:0),u),I>.72)for(let $ of[-1,1]){let G=E?$*.75:0,ee=E?0:$*.75;Wn(t.plain,k+G-g*.04,Z,F+ee-b*.04,U*.38+(E?0:.05),1.15,H*.38+(E?.05:0),d)}else if(e==="mirage"&&I>.5){let $=[[.75,.25,.2],[.85,.65,.25],[.25,.45,.6]][Math.floor(h()*3)];Wn(t.plain,k-g*.45,Z+.85,F-b*.45,E?1.5:.9,.08,E?.9:1.5,$)}}}}P=-1};for(let C=1;C<s-1;C++){let y=E?C:S,w=E?S:C,R=w*s+y,_=(w+b)*s+(y+g),T=c(R)&&l(_)&&!isNaN(a[_]);T&&P>=0&&Math.abs(a[R]-A)<.35&&Math.abs(a[_]-p)<.7||(v(C),T&&(P=C,A=a[R],p=a[_]))}v(s-1)}}if(n.slabs){let g=n.top[1],b=n.bot[1],E=n.cls[1];for(let S=1;S<s-1;S++)for(let P=1;P<s-1;P++){let A=S*s+P;if(!(E[A]!==4||b[A]-a[A]>2.8||!c(A)&&o[A]!==2))for(let[p,v]of M){let C=(S+v)*s+P+p;if(!l(C))continue;let y=(P+.5+p*.5)*r-p*.06,w=(S+.5+v*.5)*r-v*.06,R=b[A]-a[A];Wn(t.wood,y,a[A]+R/2,w,p?.14:r,R,v?.14:r,qt(i.slab,1.1),2)}}}let x=[];for(let g=0;g<900&&x.length<(e==="mirage"?26:18);g++){let b=2+Math.floor(h()*(s-4)),E=2+Math.floor(h()*(s-4)),S=E*s+b;if(!c(S))continue;let P=0;for(let[C,y]of M)l((E+y*2)*s+b+C*2)&&P++;if(P!==2||n.flags[S]&60)continue;let A=(b+.5)*r,p=(E+.5)*r,v=a[S];if(!x.some(C=>Math.hypot(C[0]-A,C[1]-p)<8))if(x.push([A,p]),e==="mirage"&&h()<.35){Wn(t.plain,A,v+.3,p,.7,.6,.7,[.7,.42,.28]);for(let C=0;C<5;C++){let y=C/5*Math.PI*2;Wn(t.plain,A+Math.cos(y)*.35,v+.85,p+Math.sin(y)*.35,.5,.08,.5,[.28,.5,.22])}}else{let C=e==="vertigo"?[.85,.55,.1]:h()<.5?[.3,.42,.55]:[.55,.3,.2];Wn(t.plain,A,v+.45,p,.6,.9,.6,C),Wn(t.plain,A,v+.3,p,.64,.06,.64,qt(C,.7)),Wn(t.plain,A,v+.65,p,.64,.06,.64,qt(C,.7))}}}var c0={dust2:{floor:[[.84,.71,.52],"sand",2.4],road:[[.74,.66,.54],"tiles",2.4],wall:[[.93,.82,.64],"blocks",2.4],trim:[[.78,.67,.5],"stone",1.6],crate:[[1,.95,.88],"crate",1.6256],door:[[.62,.45,.28],"wood",1.6],concrete:[[.78,.74,.66],"concrete",2.4],rock:[[.74,.63,.5],"stone",2],metal:[[.42,.44,.47],null,1],dark:[[.16,.14,.12],null,1],ceiling:[[.62,.48,.33],"wood",2]},mirage:{floor:[[.9,.8,.64],"tiles",2.4],wall:[[.96,.88,.74],"plaster",2.6],ceiling:[[.62,.44,.3],"wood",2]}};function d0(n,e,t,i,s){let r=c0[i]||c0.dust2,a=Qa(i),o=new Rt,l=t.origin||[0,0,0],c=0,h=0;for(let f of t.parts){let u=f.tris,d=new Float32Array(u*9),m=new Float32Array(u*9),M=new Float32Array(u*6),x=new Float32Array(u*9),[g,b,E]=r[f.cat]||r.wall||[[.8,.8,.8],null,2];for(let A=0;A<u;A++){for(let $=0;$<9;$++)d[A*9+$]=e[c+A*9+$]/100;let p=A*9,v=d[p+3]-d[p],C=d[p+4]-d[p+1],y=d[p+5]-d[p+2],w=d[p+6]-d[p],R=d[p+7]-d[p+1],_=d[p+8]-d[p+2],T=C*_-y*R,I=y*w-v*_,N=v*R-C*w,B=Math.hypot(T,I,N)||1;T/=B,I/=B,N/=B;let k=Math.abs(T),F=Math.abs(I),U=Math.abs(N),H=1+(Ac(Math.round(d[p]*3),Math.round(d[p+2]*3+d[p+1]*7))-.5)*.08,Z=g;i==="mirage"&&f.cat==="floor"&&s&&j1(s,(d[p]+d[p+3]+d[p+6])/3,(d[p+1]+d[p+4]+d[p+7])/3,(d[p+2]+d[p+5]+d[p+8])/3)&&(Z=[.72,.4,.28]);for(let $=0;$<3;$++){let G=d[p+$*3],ee=d[p+$*3+1],te=d[p+$*3+2];x[p+$*3]=T,x[p+$*3+1]=I,x[p+$*3+2]=N;let le=H;if(F<.5){let je=Q1(n,G,te,ee+.15),ae=je>-1e8?ee-je:9;ae<.45?le*=.8:ae<1&&(le*=.92)}m[p+$*3]=Z[0]*le,m[p+$*3+1]=Z[1]*le,m[p+$*3+2]=Z[2]*le;let ce=G-l[0],he=ee-l[1],ze=te-l[2],Pe,Oe;F>=k&&F>=U?(Pe=ce,Oe=ze):k>=U?(Pe=ze,Oe=he):(Pe=ce,Oe=he),M[A*6+$*2]=Pe/E,M[A*6+$*2+1]=Oe/E}}c+=u*9,h+=u;let S=new Xt;S.setAttribute("position",new Zt(d,3)),S.setAttribute("normal",new Zt(x,3)),S.setAttribute("color",new Zt(m,3)),S.setAttribute("uv",new Zt(M,2)),S.computeBoundingSphere();let P=new Ye(S,new an({vertexColors:!0,map:b?Cc(b):null,side:Jn}));P.castShadow=!0,P.receiveShadow=!0,P.matrixAutoUpdate=!1,o.add(P)}return o.matrixAutoUpdate=!1,{mesh:o,tris:h,theme:a}}function j1(n,e,t,i){if(t<3.5)return!1;let s=Math.floor(e/n.c),r=Math.floor(i/n.c);for(let a=-1;a<=1;a++)for(let o=-1;o<=1;o++){let l=s+o,c=r+a;if(l<0||c<0||l>=n.m||c>=n.m)continue;let h=c*n.m+l;for(let f=0;f<n.L;f++){let u=n.H[f][h];if(!isNaN(u)&&Math.abs(u-t)<.9&&n.main[f*n.N+h])return!1}}return!0}function Q1(n,e,t,i){let s=n.idx(e,t);if(s<0)return-1/0;let r=-1/0;for(let a=0;a<n.L;a++){let o=n.top[a][s];!isNaN(o)&&o<=i&&o>r&&(r=o)}return r}var Xi=.0254,rt={gravity:800*Xi,jump:301.993*Xi,accel:5.5,airAccel:12,friction:5.2,stop:80*Xi,airCap:30*Xi,hStand:72*Xi,hCrouch:54*Xi,eyeStand:64*Xi,eyeCrouch:46*Xi,walk:.52,crouchMul:.34,r:.4};function Pc(n,e,t,i=0){return{x:n,y:e,z:t,vx:0,vy:0,vz:0,yaw:i,pitch:0,duck:0,onGround:!0,landT:0,h:rt.hStand,alive:!0,jumpHeld:!1}}var En=n=>rt.eyeStand+(rt.eyeCrouch-rt.eyeStand)*n.duck;function Ic(n,e,t,i,s){let r=t.crouch?1:0;if(r>e.duck)e.duck=Math.min(1,e.duck+i*8);else if(r<e.duck){let x=Math.max(0,e.duck-i*8),g=rt.hStand+(rt.hCrouch-rt.hStand)*x;wc(n,e.x,e.z,e.y)>=e.y+g&&(e.duck=x)}let a=e.h;e.h=rt.hStand+(rt.hCrouch-rt.hStand)*e.duck,!e.onGround&&e.h<a&&(e.y+=(a-e.h)*.5);let o=s*(e.duck>.5?rt.crouchMul:t.walk?rt.walk:1),l=Math.sin(e.yaw),c=Math.cos(e.yaw),h=-l*t.f+c*t.s,f=-c*t.f-l*t.s,u=Math.hypot(h,f);if(u>1e-6?(h/=u,f/=u):o=0,e.onGround)if(t.jump&&!e.jumpHeld&&wc(n,e.x,e.z,e.y)>e.y+e.h+.05)e.vy=rt.jump,e.onGround=!1,e.jumpHeld=!0;else{let x=Math.hypot(e.vx,e.vz);if(x>.001){let g=Math.max(x,rt.stop)*rt.friction*i*(e.landT>0?1.4:1),b=Math.max(0,x-g)/x;e.vx*=b,e.vz*=b}p0(e,h,f,o,rt.accel,i)}e.onGround||p0(e,h,f,Math.min(o,rt.airCap),rt.airAccel,i,o),t.jump||(e.jumpHeld=!1),e.landT>0&&(e.landT-=i);let d=e.x+e.vx*i;Gi(n,d,e.z,e.y,e.h,rt.r)?e.vx=0:e.x=d;let m=e.z+e.vz*i;Gi(n,e.x,m,e.y,e.h,rt.r)?e.vz=0:e.z=m;let M=Fu(n,e.x,e.z,e.y,rt.r-.02);if(e.onGround&&(M>=e.y-.62&&M>-1/0?(e.y=M,e.vy=0):e.onGround=!1),!e.onGround){e.vy-=rt.gravity*i,e.y+=e.vy*i;let x=wc(n,e.x,e.z,e.y-e.vy*i);e.y+e.h>x&&e.vy>0&&(e.y=x-e.h,e.vy=0);let g=Fu(n,e.x,e.z,e.y-e.vy*i,rt.r-.02);if(e.vy<=0&&e.y<=g){let b=-e.vy;return e.y=g,e.vy=0,e.onGround=!0,e.landT=.12,b}}return 0}function p0(n,e,t,i,s,r,a){let o=n.vx*e+n.vz*t,l=i-o;if(l<=0)return;let c=s*r*(a||i);c>l&&(c=l),n.vx+=c*e,n.vz+=c*t}function zu(n){let e=n/Xi;return e>580?Math.round((e-580)*(100/444)):0}function tM(n){let e=n.h,t=e/rt.hStand;return[{part:"head",y0:e-.27*t,y1:e,r:.13},{part:"chest",y0:e-.62*t,y1:e-.27*t,r:.22},{part:"stomach",y0:e-.9*t,y1:e-.62*t,r:.2},{part:"leg",y0:0,y1:e-.9*t,r:.18}]}function m0(n,e,t,i,s,r,a,o){let l=null;for(let c of tM(n)){let h=n.x,f=n.z,u=e-h,d=i-f,m=s*s+a*a,M=2*(u*s+d*a),x=u*u+d*d-c.r*c.r,g;if(m<1e-9){if(x>0)continue;g=0}else{let E=M*M-4*m*x;if(E<0||(g=(-M-Math.sqrt(E))/(2*m),g<0&&(g=(-M+Math.sqrt(E))/(2*m)),g<0))continue}let b=t+r*g;b<n.y+c.y0||b>n.y+c.y1||g<=o&&(!l||g<l.t)&&(l={t:g,part:c.part})}return l}var nM=1.15,ku=.74;function Lc(n){let t=n.n/2,i=t*t,s=n.cell*2,r=[];for(let g=0;g<n.L;g++)r.push(new Float32Array(i).fill(NaN));for(let g=0;g<t;g++)for(let b=0;b<t;b++){let E=(b+.5)*s,S=(g+.5)*s,P=n.idx(E,S);for(let A=0;A<n.L;A++){let p=n.top[A][P];if(isNaN(p))continue;let v=n.cls[A][P];v===3||v===4||Gi(n,E,S,p,rt.hCrouch+.05,.36)||(r[A][g*t+b]=p)}}let a={W:n,k:2,m:t,c:s,H:r,L:n.L};a.node=(g,b)=>g*i+b,a.pos=g=>{let b=Math.floor(g/i),E=g%i;return[(E%t+.5)*s,r[b][E],(Math.floor(E/t)+.5)*s,b]},a.nearest=(g,b,E)=>{let S=Math.floor(g/s),P=Math.floor(E/s),A=-1,p=1e9;for(let v=0;v<=6&&A<0;v++)for(let C=-v;C<=v;C++)for(let y=-v;y<=v;y++){if(Math.max(Math.abs(y),Math.abs(C))!==v)continue;let w=S+y,R=P+C;if(w<0||R<0||w>=t||R>=t)continue;let _=R*t+w;for(let T=0;T<n.L;T++){let I=r[T][_];if(isNaN(I)||a.main&&!a.main[T*i+_])continue;let N=Math.abs(I-b)*3+Math.hypot(y,C);N<p&&(p=N,A=T*i+_)}}return A};let o=[1,-1,0,0,1,1,-1,-1],l=[0,0,1,-1,1,-1,1,-1];a.neighbors=(g,b)=>{b.length=0;let E=Math.floor(g/i),S=g%i,P=S%t,A=(S-P)/t,p=r[E][S];for(let v=0;v<8;v++){let C=P+o[v],y=A+l[v];if(C<0||y<0||C>=t||y>=t)continue;let w=y*t+C;if(!(v>=4&&(!c(E,A*t+C,p)||!c(E,y*t+P,p))))for(let R=0;R<n.L;R++){let _=r[R][w];if(isNaN(_))continue;let T=_-p;T>nM||-T>2.2||T>ku&&v>=4||b.push(R*i+w,(v>=4?1.414:1)+(T>ku?4:0))}}return b};function c(g,b,E){for(let S=0;S<n.L;S++){let P=r[S][b];if(!isNaN(P)&&Math.abs(P-E)<=ku)return!0}return!1}let h=new Uint8Array(n.L*i);for(let g=0;g<n.L;g++)for(let b=0;b<i;b++){if(isNaN(r[g][b]))continue;let E=b%t,S=(b-E)/t,P=0;for(let A=0;A<8;A++){let p=E+o[A],v=S+l[A];(p<0||v<0||p>=t||v>=t||!c(g,v*t+p,r[g][b]))&&P++}h[g*i+b]=P}a.edge=h,a.N=i;let f=n.L*i,u=[],d=Ou(n,32),m=[];for(let g=0;g<d.length&&m.length<8;g+=Math.max(1,Math.floor(d.length/8))){let b=d[g],E=(b%n.n+.5)*n.cell,S=(Math.floor(b/n.n)+.5)*n.cell,P=Math.floor(S/a.c)*t+Math.floor(E/a.c);for(let A=0;A<n.L;A++)if(!isNaN(r[A][P])){m.push(A*i+P);break}}if(!m.length){for(let g=0;g<f;g++)if(!isNaN(r[Math.floor(g/i)][g%i])){m.push(g);break}}let M=null,x=-1;for(let g of m){if(M&&M[g])continue;let b=new Uint8Array(f),E=new Uint8Array(f),S=new Map,P=[g];for(b[g]=1;P.length;){let v=P.pop();a.neighbors(v,u);for(let C=0;C<u.length;C+=2){let y=u[C],w=S.get(y);w||S.set(y,w=[]),w.push(v),b[y]||(b[y]=1,P.push(y))}}for(P=[g],E[g]=1;P.length;){let v=P.pop(),C=S.get(v);if(C)for(let y of C)E[y]||(E[y]=1,P.push(y))}let A=new Uint8Array(f),p=0;for(let v=0;v<f;v++)b[v]&E[v]&&(A[v]=1,p++);p>x&&(x=p,M=A)}return a.main=M,a}var Ws={a:[],f:[]};function zr(n,e,t,i=6e4){if(e<0||t<0)return null;let s=n.L*n.N;(!n.g||n.g.length!==s)&&(n.g=new Float32Array(s),n.came=new Int32Array(s),n.seen=new Uint32Array(s),n.closed=new Uint32Array(s),n.stamp=0);let r=n.g,a=n.came,o=n.seen,l=n.closed,c=++n.stamp,[h,,f]=n.pos(t),u=x=>{let g=n.pos(x);return Math.hypot(g[0]-h,g[2]-f)/n.c};Ws.a.length=0,Ws.f.length=0,g0(e,u(e)),r[e]=0,a[e]=-1,o[e]=c;let d=[],m=0;for(;Ws.a.length&&m++<i;){let x=iM();if(x===t)break;if(l[x]!==c){l[x]=c,n.neighbors(x,d);for(let g=0;g<d.length;g+=2){let b=d[g],E=r[x]+d[g+1]+n.edge[b]*.35;o[b]===c&&E>=r[b]||(o[b]=c,r[b]=E,a[b]=x,g0(b,E+u(b)))}}}if(o[t]!==c)return null;let M=[];for(let x=t;x!==-1;x=a[x])M.push(n.pos(x));return M.reverse(),sM(n,M)}function g0(n,e){let t=Ws.a,i=Ws.f;t.push(n),i.push(e);let s=t.length-1;for(;s>0;){let r=s-1>>1;if(i[r]<=i[s])break;[t[r],t[s]]=[t[s],t[r]],[i[r],i[s]]=[i[s],i[r]],s=r}}function iM(){let n=Ws.a,e=Ws.f,t=n[0],i=n.pop(),s=e.pop();if(n.length){n[0]=i,e[0]=s;let r=0;for(;;){let a=2*r+1,o=a+1,l=r;if(a<n.length&&e[a]<e[l]&&(l=a),o<n.length&&e[o]<e[l]&&(l=o),l===r)break;[n[l],n[r]]=[n[r],n[l]],[e[l],e[r]]=[e[r],e[l]],r=l}}return t}function sM(n,e){if(e.length<3)return e;let t=[e[0]];for(let i=1;i<e.length-1;i++){let s=t[t.length-1],r=e[i+1],a=[e[i][0]-s[0],e[i][2]-s[2]],o=[r[0]-e[i][0],r[2]-e[i][2]];(Math.abs(a[0]*o[1]-a[1]*o[0])>1e-4||Math.abs(e[i][1]-s[1])>.3||Math.hypot(e[i][0]-s[0],e[i][2]-s[2])>n.c*6)&&t.push(e[i])}return t.push(e[e.length-1]),t}function ti(n,e){let t=n.W,i=new Set;for(let s of Ou(t,e)){let r=(s%t.n+.5)*t.cell,a=(Math.floor(s/t.n)+.5)*t.cell,o=Math.floor(r/n.c),l=Math.floor(a/n.c),c=l*n.m+o;for(let h=t.L-1;h>=0;h--)if(!isNaN(n.H[h][c])&&n.main[h*n.N+c]){i.add(h*n.N+c);break}}return[...i]}function x0(n,e,t=null){let i=n.L*n.N,s=new Float64Array(i).fill(1/0),r=[],a=[],o=(c,h)=>{a.push([c,h]);let f=a.length-1;for(;f>0;){let u=f-1>>1;if(a[u][0]<=a[f][0])break;[a[u],a[f]]=[a[f],a[u]],f=u}},l=()=>{let c=a[0],h=a.pop();if(a.length){a[0]=h;let f=0;for(;;){let u=f*2+1,d=u+1,m=f;if(u<a.length&&a[u][0]<a[m][0]&&(m=u),d<a.length&&a[d][0]<a[m][0]&&(m=d),m===f)break;[a[m],a[f]]=[a[f],a[m]],f=m}}return c};for(let c of e)s[c]=0,o(0,c);for(;a.length;){let[c,h]=l();if(!(c>s[h])){t?r=t.get(h)||[]:n.neighbors(h,r);for(let f=0;f<r.length;f+=2){let u=r[f],d=c+r[f+1];n.main[u]&&d<s[u]&&(s[u]=d,o(d,u))}}}return s}function y0(n,e){let t=ti(e,16),i=ti(e,32),s=ti(e,4),r=ti(e,8);if(!t.length||!i.length||!s.length||!r.length)return null;let a=[],o=x0(e,t),l=x0(e,i),c=(w,R)=>w.reduce((_,T)=>Math.min(_,R[T]),1/0),h=w=>Math.max(c(w,o),c(w,l))+.3*(c(w,o)+c(w,l)),f=h(s)<=h(r)?"A":"B",u=f==="A"?s:r,d=e.L*e.N,m=new Uint8Array(d),M=w=>{let R=0,_=0,T=0;for(let N of w){let B=e.pos(N);R+=B[0],_+=B[1],T+=B[2]}let I=w.length;return e.nearest(R/I,_/I,T/I)},x=M(t),g=M(i),b=M(u),E=[];for(let[w,R]of[[x,b],[b,x],[g,b],[b,g],[x,g],[g,x]]){let _=zr(e,w,R);if(_)for(let T of _){let I=e.nearest(T[0],T[1],T[2]);I>=0&&E.push([I,16])}}for(let w of t)E.push([w,14]);for(let w of i)E.push([w,14]);for(let w of u)E.push([w,16]);let S=new Int8Array(d).fill(-1),P=[];for(let[w,R]of E)R>S[w]&&(S[w]=R,P.push(w));for(;P.length;){let w=P.pop();if(m[w]=1,!(S[w]<=0)){e.neighbors(w,a);for(let R=0;R<a.length;R+=2){let _=a[R];e.main[_]&&S[w]-1>S[_]&&(S[_]=S[w]-1,P.push(_))}}}let A=[],p=new Set,v=Uint8Array.from(m);for(let w=0;w<d;w++)if(m[w]){e.neighbors(w,A);for(let R=0;R<A.length;R+=2)e.main[A[R]]&&(v[A[R]]=1)}m.set(v);for(let w=0;w<d;w++)if(m[w]){e.neighbors(w,A);for(let R=0;R<A.length;R+=2){let _=A[R];!m[_]&&e.main[_]&&p.add(_)}}let C=[];for(let w of p){let R=Math.floor(w/e.N),_=w%e.N,T=_%e.m,I=Math.floor(_/e.m),N=e.H[R][_];for(let B=0;B<e.k;B++)for(let k=0;k<e.k;k++){let F=T*e.k+k,U=I*e.k+B,H=U*n.n+F,Z=-1,$=.35;for(let le=0;le<n.L;le++){let ce=n.top[le][H];!isNaN(ce)&&Math.abs(ce-N)<$&&($=Math.abs(ce-N),Z=le)}if(Z<0)continue;let G=!1;for(let le=0;le<e.L&&!G;le++){let ce=le*e.N+_;m[ce]&&Math.abs(e.H[le][_]-N)<3.4&&ce!==w&&(G=!0)}if(G)continue;let ee=n.top[Z][H],te=Z+1<n.L&&!isNaN(n.bot[Z+1][H])?n.bot[Z+1][H]:1/0;n.top[Z][H]=Math.min(ee+3.2,te),n.cls[Z][H]=3,C.push([F,U,ee,Math.min(3.2,te-ee)])}}let y=f==="A"?8:4;for(let w=0;w<n.flags.length;w++)n.flags[w]&=~y;return{site:f,cells:C}}function _0(n,e){let t=new rn(1,1,1),i=[],s=[],r=[],a=[],o=t.attributes.position.array,l=t.attributes.normal.array,c=t.attributes.uv.array,h=t.index.array,f=(m,M,x,g,b)=>{for(let E=0;E<h.length;E++){let S=h[E],P=m+(o[S*3]+.5)*n.cell,A=x+(o[S*3+1]+.5)*(g-x),p=M+(o[S*3+2]+.5)*n.cell;i.push(P,A,p),s.push(l[S*3],l[S*3+1],l[S*3+2]),r.push((P+p)/1.2,A/1.2),a.push(b[0],b[1],b[2])}};for(let[m,M,x,g]of e){let b=m*n.cell,E=M*n.cell,S=m+M>>2&1;if(g<1.4){f(b,E,x,x+g,[.78,.62,.42]);continue}f(b,E,x,x+1,[.78,.62,.42]),f(b,E,x+1,x+1.3,S?[.95,.75,.15]:[.14,.14,.14]),f(b,E,x+1.3,x+g,[.72,.57,.38])}let u=new Xt;u.setAttribute("position",new it(i,3)),u.setAttribute("normal",new it(s,3)),u.setAttribute("uv",new it(r,2)),u.setAttribute("color",new it(a,3));let d=new Ye(u,new an({map:Cc("crate"),vertexColors:!0}));return d.castShadow=!0,d.receiveShadow=!0,d}var pt=n=>({auto:!1,pellets:1,hs:4,range:8192,rangeMod:.98,spread:.004,move:.12,kick:.6,sway:.4,kickCap:12,recover:9,scope:null,...n}),et={knife:pt({name:"Cuchillo",cat:"knife",side:"both",price:0,reward:1500,dmg:40,ap:.85,rpm:150,mag:0,reserve:0,speed:250,range:64,auto:!0}),glock:pt({name:"Glock-18",cat:"pistol",side:"T",price:200,reward:300,dmg:30,ap:.47,rpm:400,mag:20,reserve:120,reload:2.2,speed:240,rangeMod:.85,spread:.007,move:.05,kick:.9,sway:.4,kickCap:5}),usp:pt({name:"USP-S",cat:"pistol",side:"CT",price:200,reward:300,dmg:35,ap:.505,rpm:352,mag:12,reserve:24,reload:2.2,speed:240,rangeMod:.91,spread:.004,move:.045,kick:1.1,sway:.3,kickCap:5,silent:!0}),p2000:pt({name:"P2000",cat:"pistol",side:"CT",price:200,reward:300,dmg:35,ap:.505,rpm:352,mag:13,reserve:52,reload:2.2,speed:240,rangeMod:.91,spread:.005,move:.045,kick:1.1,sway:.3,kickCap:5}),dualies:pt({name:"Dual Berettas",cat:"pistol",side:"both",price:300,reward:300,dmg:38,ap:.575,rpm:500,mag:30,reserve:120,reload:3.8,speed:240,rangeMod:.79,spread:.009,move:.05,kick:1,sway:.5,kickCap:6}),p250:pt({name:"P250",cat:"pistol",side:"both",price:300,reward:300,dmg:38,ap:.64,rpm:400,mag:13,reserve:26,reload:2.2,speed:240,rangeMod:.85,spread:.007,move:.05,kick:1.3,sway:.4,kickCap:6}),tec9:pt({name:"Tec-9",cat:"pistol",side:"T",price:500,reward:300,dmg:33,ap:.903,rpm:500,mag:18,reserve:90,reload:2.5,speed:240,rangeMod:.831,spread:.009,move:.04,kick:1.2,sway:.5,kickCap:7}),fiveseven:pt({name:"Five-SeveN",cat:"pistol",side:"CT",price:500,reward:300,dmg:32,ap:.9115,rpm:400,mag:20,reserve:100,reload:2.2,speed:240,rangeMod:.81,spread:.007,move:.045,kick:1.1,sway:.4,kickCap:6}),cz75:pt({name:"CZ75-Auto",cat:"pistol",side:"both",price:500,reward:100,dmg:31,ap:.776,rpm:600,mag:12,reserve:12,reload:2.7,speed:240,rangeMod:.85,spread:.008,move:.05,kick:1.1,sway:.6,kickCap:8,auto:!0}),deagle:pt({name:"Desert Eagle",cat:"pistol",side:"both",price:700,reward:300,dmg:53,ap:.932,rpm:267,mag:7,reserve:35,reload:2.2,speed:230,rangeMod:.81,spread:.006,move:.1,kick:3.4,sway:.6,kickCap:8,recover:7}),r8:pt({name:"R8 Revolver",cat:"pistol",side:"both",price:600,reward:300,dmg:86,ap:.932,rpm:120,mag:8,reserve:8,reload:2.3,speed:220,rangeMod:.94,spread:.006,move:.1,kick:3.6,sway:.4,kickCap:8}),mac10:pt({name:"MAC-10",cat:"smg",side:"T",price:1050,reward:600,dmg:29,ap:.575,rpm:800,mag:30,reserve:100,reload:2.6,speed:240,rangeMod:.8,auto:!0,spread:.009,move:.025,kick:.6,sway:.7,kickCap:7}),mp9:pt({name:"MP9",cat:"smg",side:"CT",price:1250,reward:600,dmg:26,ap:.6,rpm:857,mag:30,reserve:120,reload:2.1,speed:240,rangeMod:.87,auto:!0,spread:.008,move:.025,kick:.55,sway:.6,kickCap:7}),mp7:pt({name:"MP7",cat:"smg",side:"both",price:1500,reward:600,dmg:29,ap:.625,rpm:750,mag:30,reserve:120,reload:3.1,speed:220,rangeMod:.85,auto:!0,spread:.007,move:.03,kick:.5,sway:.5,kickCap:7}),mp5:pt({name:"MP5-SD",cat:"smg",side:"both",price:1500,reward:600,dmg:27,ap:.625,rpm:750,mag:30,reserve:120,reload:2.6,speed:235,rangeMod:.85,auto:!0,spread:.007,move:.025,kick:.45,sway:.5,kickCap:6,silent:!0}),ump:pt({name:"UMP-45",cat:"smg",side:"both",price:1200,reward:600,dmg:35,ap:.65,rpm:666,mag:25,reserve:100,reload:3.5,speed:230,rangeMod:.75,auto:!0,spread:.008,move:.03,kick:.6,sway:.5,kickCap:7}),p90:pt({name:"P90",cat:"smg",side:"both",price:2350,reward:300,dmg:26,ap:.69,rpm:857,mag:50,reserve:100,reload:3.3,speed:230,rangeMod:.86,auto:!0,spread:.008,move:.03,kick:.45,sway:.6,kickCap:7}),bizon:pt({name:"PP-Bizon",cat:"smg",side:"both",price:1400,reward:600,dmg:27,ap:.575,rpm:750,mag:64,reserve:120,reload:2.4,speed:240,rangeMod:.8,auto:!0,spread:.009,move:.03,kick:.45,sway:.6,kickCap:6}),nova:pt({name:"Nova",cat:"heavy",side:"both",price:1050,reward:900,dmg:26,ap:.5,rpm:68,mag:8,reserve:32,reload:4,speed:220,rangeMod:.7,pellets:9,spread:.06,move:.04,kick:3,sway:.5,range:3e3}),xm1014:pt({name:"XM1014",cat:"heavy",side:"both",price:2e3,reward:900,dmg:20,ap:.8,rpm:171,mag:7,reserve:32,reload:3.5,speed:215,rangeMod:.7,pellets:6,spread:.065,move:.04,kick:2.5,sway:.6,range:3500}),sawedoff:pt({name:"Sawed-Off",cat:"heavy",side:"T",price:1100,reward:900,dmg:32,ap:.75,rpm:71,mag:7,reserve:32,reload:3.6,speed:210,rangeMod:.45,pellets:8,spread:.09,move:.04,kick:3,sway:.6,range:1400}),mag7:pt({name:"MAG-7",cat:"heavy",side:"CT",price:1300,reward:900,dmg:30,ap:.75,rpm:71,mag:5,reserve:32,reload:2.5,speed:225,rangeMod:.45,pellets:8,spread:.05,move:.04,kick:3,sway:.5,range:1400}),m249:pt({name:"M249",cat:"heavy",side:"both",price:5200,reward:300,dmg:32,ap:.8,rpm:750,mag:100,reserve:200,reload:5.7,speed:195,rangeMod:.97,auto:!0,spread:.009,move:.15,kick:.6,sway:.8,kickCap:9}),negev:pt({name:"Negev",cat:"heavy",side:"both",price:1700,reward:300,dmg:35,ap:.71,rpm:800,mag:150,reserve:300,reload:5.7,speed:150,rangeMod:.97,auto:!0,spread:.012,move:.15,kick:.7,sway:.6,kickCap:6}),galil:pt({name:"Galil AR",cat:"rifle",side:"T",price:1800,reward:300,dmg:30,ap:.775,rpm:666,mag:35,reserve:90,reload:3,speed:215,auto:!0,spread:.005,move:.14,kick:.62,sway:.5,kickCap:10}),famas:pt({name:"FAMAS",cat:"rifle",side:"CT",price:2050,reward:300,dmg:30,ap:.7,rpm:666,mag:25,reserve:90,reload:3.3,speed:220,auto:!0,spread:.005,move:.14,kick:.6,sway:.5,kickCap:10}),ak47:pt({name:"AK-47",cat:"rifle",side:"T",price:2700,reward:300,dmg:36,ap:.775,rpm:600,mag:30,reserve:90,reload:2.5,speed:215,auto:!0,spread:.0049,move:.16,kick:.82,sway:.75,kickCap:13}),m4a4:pt({name:"M4A4",cat:"rifle",side:"CT",price:3100,reward:300,dmg:33,ap:.7,rpm:666,mag:30,reserve:90,reload:3.1,speed:225,auto:!0,spread:.0042,move:.15,kick:.68,sway:.6,kickCap:11}),m4a1s:pt({name:"M4A1-S",cat:"rifle",side:"CT",price:2900,reward:300,dmg:38,ap:.7,rpm:600,mag:20,reserve:80,reload:3.1,speed:225,auto:!0,spread:.0035,move:.15,kick:.58,sway:.45,kickCap:9,silent:!0}),sg553:pt({name:"SG 553",cat:"rifle",side:"T",price:3e3,reward:300,dmg:30,ap:1,rpm:545,mag:30,reserve:90,reload:2.8,speed:210,auto:!0,spread:.0045,move:.15,kick:.72,sway:.6,kickCap:11,scope:[1.8]}),aug:pt({name:"AUG",cat:"rifle",side:"CT",price:3300,reward:300,dmg:28,ap:.9,rpm:600,mag:30,reserve:90,reload:3.8,speed:220,auto:!0,spread:.004,move:.15,kick:.62,sway:.5,kickCap:10,scope:[1.8]}),ssg08:pt({name:"SSG 08",cat:"sniper",side:"both",price:1700,reward:300,dmg:88,ap:.85,rpm:48,mag:10,reserve:90,reload:3.7,speed:230,rangeMod:.99,spread:.035,scoped:.0012,move:.12,kick:3,sway:.2,kickCap:4,scope:[3.6,9]}),awp:pt({name:"AWP",cat:"sniper",side:"both",price:4750,reward:100,dmg:115,ap:.975,rpm:41,mag:5,reserve:30,reload:3.7,speed:200,rangeMod:.99,spread:.08,scoped:9e-4,move:.2,kick:4.5,sway:.2,kickCap:5,scope:[2.25,9]}),g3sg1:pt({name:"G3SG1",cat:"sniper",side:"T",price:5e3,reward:300,dmg:80,ap:.825,rpm:240,mag:20,reserve:90,reload:4.7,speed:215,rangeMod:.98,auto:!0,spread:.05,scoped:.0018,move:.2,kick:1.6,sway:.4,kickCap:6,scope:[2.25,9]}),scar20:pt({name:"SCAR-20",cat:"sniper",side:"CT",price:5e3,reward:300,dmg:80,ap:.825,rpm:240,mag:20,reserve:90,reload:3.1,speed:215,rangeMod:.98,auto:!0,spread:.05,scoped:.0018,move:.2,kick:1.6,sway:.4,kickCap:6,scope:[2.25,9]}),zeus:pt({name:"Zeus x27",cat:"equip",side:"both",price:200,reward:0,dmg:500,ap:1,rpm:30,mag:1,reserve:0,reload:0,speed:245,range:183,spread:.01,move:.02,kick:1}),vest:{name:"Chaleco",cat:"gear",side:"both",price:650},vesthelm:{name:"Chaleco + Casco",cat:"gear",side:"both",price:1e3},defuser:{name:"Kit de desactivaci\xF3n",cat:"gear",side:"CT",price:400},he:{name:"Granada HE",cat:"grenade",side:"both",price:300,reward:300},flash:{name:"Flashbang",cat:"grenade",side:"both",price:200,reward:300,max:2},smoke:{name:"Humo",cat:"grenade",side:"both",price:300,reward:300},molotov:{name:"Molotov",cat:"grenade",side:"T",price:400,reward:300},incendiary:{name:"Incendiaria",cat:"grenade",side:"CT",price:500,reward:300},decoy:{name:"Se\xF1uelo",cat:"grenade",side:"both",price:50,reward:300},c4:{name:"C4",cat:"c4",side:"T",price:0}};for(let[n,e]of Object.entries(et))e.id=n;var Nc=[{name:"Equipo",items:{T:["vest","vesthelm","zeus"],CT:["vest","vesthelm","zeus","defuser"]}},{name:"Pistolas",items:{T:["glock","p250","dualies","tec9","deagle"],CT:["usp","p250","dualies","fiveseven","deagle"]}},{name:"Intermedias",items:{T:["mac10","mp7","nova","xm1014","p90"],CT:["mp9","mp7","nova","xm1014","p90"]}},{name:"Rifles",items:{T:["galil","ak47","sg553","ssg08","awp"],CT:["famas","m4a4","aug","ssg08","awp"]}},{name:"Granadas",items:{T:["flash","smoke","he","molotov","decoy"],CT:["flash","smoke","he","incendiary","decoy"]}}],v0={vest:["Protege el cuerpo","Reduce el da\xF1o de las balas"],vesthelm:["Chaleco y casco","Te salva de muchos tiros a la cabeza"],zeus:["Descarga el\xE9ctrica de un solo uso","Mata de cerca"],defuser:["Desactiv\xE1s la bomba en 5 segundos"],glock:["Pistola b\xE1sica de los T","Buena movi\xE9ndose"],usp:["Pistola b\xE1sica de los CT","Con silenciador, muy precisa"],p250:["Barata y fuerte","Atraviesa chalecos"],dualies:["Dos pistolas","Cargador grande"],tec9:["Autom\xE1tica liviana","Muy fuerte de cerca"],fiveseven:["Precisa y r\xE1pida","Buena contra chalecos"],deagle:["Un tiro a la cabeza alcanza","Mucho retroceso"],mac10:["Subfusil barato","Premio por baja $600"],mp9:["Subfusil de los CT","Premio por baja $600"],mp7:["Subfusil equilibrado","Buena precisi\xF3n"],nova:["Escopeta de bombeo","Letal de cerca"],xm1014:["Escopeta autom\xE1tica","Mucho da\xF1o en poco tiempo"],p90:["Cargador de 50","Ideal para correr"],galil:["Rifle barato de los T"],famas:["Rifle barato de los CT"],ak47:["Un tiro a la cabeza mata","El rifle de los T"],m4a4:["Rifle preciso de los CT"],sg553:["Rifle con mira"],aug:["Rifle con mira"],ssg08:["Francotirador liviano","Se mueve r\xE1pido"],awp:["Mata de un tiro al cuerpo","Lento al moverse"],flash:["Ciega a los que la miran"],smoke:["Tapa la vista 18 segundos","Apaga el fuego"],he:["Explota y hace da\xF1o"],molotov:["Fuego en el piso por 7 segundos"],incendiary:["Fuego en el piso por 7 segundos"],decoy:["Hace ruido de disparos"]},Xs=n=>{let e=et[n].cat;return e==="pistol"?2:e==="knife"?3:e==="grenade"?4:e==="c4"?5:e==="equip"?3:1},Nn={start:800,max:16e3,winElim:3250,winBombT:3500,winDefuse:3500,winTime:3250,loss:[1400,1900,2400,2900,3400],plantBonus:800,plantReward:300,defuseReward:300,teamKill:-300},rM={head:4,chest:1,stomach:1.25,arm:1,leg:.75};function Hu(n,e,t,i,s,r=4){let a=n*(t==="head"?r:rM[t]),o=0,l=t!=="leg"&&(t!=="head"||s);if(i>0&&l){let c=a*e;o=(a-c)*.5,o>i&&(o=i,c=a-i*2),a=c}return{hp:Math.max(1,Math.round(a)),armor:Math.round(o)}}var Vu=.0254,Pt={g:800*.4*Vu,speed:750*.9*Vu,step:1/64,fuse:{he:1.6,flash:1.6},molAir:2,smokeLife:18,fireLife:7,decoyLife:15,smokeR:3.6,fireR:2.6,heR:350*Vu,heDmg:98};function M0(n,e,t,i,s,r,a,o,l,c,h=1){let f=Pt.speed*(.3+.7*h),u=o+10*Math.PI/180*(1-Math.abs(o)/(Math.PI/2)),d=-Math.sin(a)*Math.cos(u),m=Math.sin(u),M=-Math.cos(a)*Math.cos(u);return{type:n,owner:e,team:t,x:i+d*.1,y:s+m*.1-.05,z:r+M*.1,vx:d*f+l*1.25,vy:m*f,vz:M*f+c*1.25,t:0,acc:0,rest:!1,state:"fly",life:0}}function b0(n,e,t,i){for(e.acc+=t;e.acc>=Pt.step;){e.acc-=Pt.step;let s=Pt.step;if(e.state==="fly"){if(e.t+=s,!e.rest){e.vy-=Pt.g*s;let a=Math.hypot(e.vx,e.vy,e.vz),o=a*s;if(o>1e-5){let l=Wi(n,e.x,e.y,e.z,e.vx/a,e.vy/a,e.vz/a,o+.04);if(l&&l.t<=o+.04){let c=Math.max(0,l.t-.04);e.x+=e.vx/a*c,e.y+=e.vy/a*c,e.z+=e.vz/a*c;let h=[l.nx,l.ny,l.nz];if((e.type==="molotov"||e.type==="incendiary")&&h[1]>.7){Dc(n,e,i);continue}let f=e.vx*h[0]+e.vy*h[1]+e.vz*h[2];e.vx-=2*f*h[0],e.vy-=2*f*h[1],e.vz-=2*f*h[2],e.vx*=.45,e.vy*=.45,e.vz*=.45,h[1]>.7&&(e.vx*=.75,e.vz*=.75,Math.abs(e.vy)<1.2&&(e.vy=0,Math.hypot(e.vx,e.vz)<.25&&(e.rest=!0))),a>2&&i.push({type:"bounce",g:e})}else e.x+=e.vx*s,e.y+=e.vy*s,e.z+=e.vz*s}if(!e.rest&&e.vy===0){let l=gs(n,e.x,e.z,e.y+.3);l>-1e8&&e.y-l<.06?(e.y=l+.03,e.vx*=Math.max(0,1-s*2.5),e.vz*=Math.max(0,1-s*2.5),Math.hypot(e.vx,e.vz)<.2&&(e.rest=!0)):e.vy=-.01}if(e.y<-40){e.state="done",i.push({type:"end",g:e});continue}}let r=Pt.fuse[e.type];r&&e.t>=r?Dc(n,e,i):(e.type==="molotov"||e.type==="incendiary")&&e.t>=Pt.molAir?(e.air=!0,Dc(n,e,i)):(e.type==="smoke"||e.type==="decoy")&&e.rest&&e.t>.9&&Dc(n,e,i)}else e.state==="active"&&(e.life-=s,e.life<=0&&(e.state="done",i.push({type:"end",g:e})))}}function Dc(n,e,t){if(e.state="active",e.vx=e.vy=e.vz=0,e.type==="smoke")e.life=Pt.smokeLife;else if(e.type==="decoy")e.life=Pt.decoyLife;else if(e.type==="molotov"||e.type==="incendiary")if(e.air)e.life=.01;else{e.life=Pt.fireLife;let i=gs(n,e.x,e.z,e.y+.5);i>-1e8&&(e.y=i)}else e.life=.01;t.push({type:"det",g:e})}function S0(n,e,t,i,s,r,a){for(let o of n){if(o.type!=="smoke"||o.state!=="active"||o.life<.6)continue;let l=Pt.smokeR*Math.min(1,(Pt.smokeLife-o.life)*1.5+.2),c=o.x,h=o.y+1.2,f=o.z,u=s-e,d=r-t,m=a-i,M=u*u+d*d+m*m,x=M>0?((c-e)*u+(h-t)*d+(f-i)*m)/M:0;x=Math.max(0,Math.min(1,x));let g=e+u*x-c,b=(t+d*x-h)*1.4,E=i+m*x-f;if(g*g+b*b+E*E<l*l)return!0}return!1}function T0(n,e,t,i){for(let s of n)if(!(s.type!=="molotov"&&s.type!=="incendiary"||s.state!=="active"||s.air)&&Math.abs(t-s.y)<1.2&&Math.hypot(e-s.x,i-s.z)<Pt.fireR)return s;return null}var zt={freeze:12,live:115,buy:20,post:6,bomb:40,plant:3.2,defuse:10,kit:5,over:10},Gu={rapida:{win:5,max:8,name:"R\xE1pida"},corta:{win:9,max:16,name:"Corta"},comp:{win:13,max:24,name:"Competitiva"}},w0=["Toto","Lalo","Pipo","Chino","Fede","Nacho","Rulo","Coco","Tincho","Beto","Pato","Quique"],qs=(n,e)=>(n^e)===0?"T":"CT",E0=n=>n==="T"?"glock":"usp";function Wu(n){let e={},t=!0,i=0,s=[1,1],r=null,a=new Map,o=0,l=0,c=!1,h=1;e.setup=y=>{n.players.clear();let w=n.cfg,R=[0,0],_=y.slice().sort((N,B)=>N.slot-B.slot);for(let N of _)(N.pref===0||N.pref===1)&&R[N.pref]++;for(let N of _){let B=N.pref;B!==0&&B!==1&&(B=R[0]<=R[1]?0:1,R[B]++);let k=f(N.id,N.name,!1,B);k.skT=0,k.skCT=0,k.fin=0,n.players.set(N.id,k)}let T=w.bots?Math.max(R[0],R[1],w.size||5):0,I=0;for(let N=0;N<2;N++)for(let B=R[N];B<T;B++){let k="bot"+I++,F=f(k,w0[I%w0.length]+" (bot)",!0,N);F.skT=0,F.skCT=0,F.fin=0,n.players.set(k,F)}n.round=0,n.score=[0,0],n.half=0,s=[1,1],c=!1;for(let N of n.players.values())N.team=qs(N.grp,0);n.spawns={T:u("T"),CT:u("CT")}};function f(y,w,R,_){return{id:y,name:w,bot:R,grp:_,team:"T",x:0,y:0,z:0,yaw:0,pitch:0,vx:0,vz:0,duck:0,hp:100,ar:0,helm:!1,money:Nn.start,alive:!1,k:0,d:0,a:0,mvp:0,dmgR:0,inv:{p:null,s:null,g:[],c4:!1,kit:!1,zeus:!1,v:1,pa:null,sa:null},god:!1}}function u(y){let w=n.nav,R=ti(w,y==="T"?16:32),_=0,T=0,I=R.map($=>w.pos($));for(let $ of I)_+=$[0],T+=$[2];_/=I.length,T/=I.length,I.sort(($,G)=>Math.hypot($[0]-_,$[2]-T)-Math.hypot(G[0]-_,G[2]-T));let N=[];for(let $ of I)if(N.every(G=>Math.hypot(G[0]-$[0],G[2]-$[2])>1.5)&&N.push($),N.length>=12)break;let B=n.info.zones,k=n.W.cell,F=((B.A[0]+B.A[2])/2+(B.B[0]+B.B[2])/2)/2*k,U=((B.A[1]+B.A[3])/2+(B.B[1]+B.B[3])/2)/2*k,H=y==="T"?F:(B.T[0]+B.T[2])/2*k,Z=y==="T"?U:(B.T[1]+B.T[3])/2*k;return{pts:N.map($=>[$[0],$[1],$[2],Math.atan2(-(H-$[0]),-(Z-$[2]))]),cx:_,cz:T}}e.adopt=()=>{n.spawns={T:u("T"),CT:u("CT")}},e.buyZone=y=>{let w=n.spawns[y.team];return Math.hypot(y.x-w.cx,y.z-w.cz)<22||Qn(n.W,y.x,y.z)&(y.team==="T"?16:32)},e.canBuyTime=()=>n.phase==="freeze"||n.phase==="live"&&zt.live-n.timeLeft<zt.buy&&n.bomb.state!=="planted",e.startMatch=()=>{n.phase="freeze",d(!0)};function d(y){n.round++,n.phase="freeze",n.timeLeft=zt.freeze,n.drops.clear(),n.nades.length=0,a.clear(),r=null,n.bomb={state:"carried",carrier:null,x:0,y:0,z:0,t:0};let w={T:0,CT:0},R={},_=[...n.players.values()].sort(()=>Math.random()-.5);for(let I of _){I.team=qs(I.grp,n.half),!I.alive||y?(I.inv={p:null,s:E0(I.team),g:[],c4:!1,kit:!1,zeus:!1,v:(I.inv.v||0)+1,pa:null,sa:null},!I.alive&&!y&&(I.ar=0,I.helm=!1),y&&(I.ar=0,I.helm=!1)):(I.inv.c4=!1,I.team==="T"&&(I.inv.kit=!1),I.inv.pa=I.inv.sa=null,I.inv.v++),I.hp=100,I.alive=!0,I.dmgR=0,I.dmgBy={};let N=n.spawns[I.team].pts,B=w[I.team]++%N.length;R[I.id]=N[B]}let T=_.filter(I=>I.team==="T");if(T.length){let I=T[Math.floor(Math.random()*T.length)];I.inv.c4=!0,n.bomb.carrier=I.id}t=!0,n.emit("rs",{pos:R,round:n.round}),n.emit("st",e.snapshot())}function m(y,w){if(n.phase!=="live"&&n.phase!=="freeze")return;n.phase="post",n.timeLeft=zt.post;let R=[...n.players.values()].find(k=>k.team===y)?.grp??(y===qs(0,n.half)?0:1);n.score[R]++;let _=w==="bomb"?Nn.winBombT:w==="defuse"?Nn.winDefuse:w==="time"?Nn.winTime:Nn.winElim,T=1-R;s[T]=Math.min(5,s[T]+1),s[R]=Math.max(0,s[R]-1);let I=Nn.loss[Math.max(0,s[T]-1)];for(let k of n.players.values())if(k.grp===R)g(k,_);else{if(w==="time"&&k.team==="T"&&k.alive)continue;g(k,I+(k.team==="T"&&n.bomb.state==="defused"?Nn.plantBonus:0))}let N=null,B=-1;for(let k of n.players.values())if(k.grp===R){let F=(k.rk||0)*10+k.dmgR/100+(k.id===r&&w==="bomb"?30:0)+(k.defused?30:0);F>B&&(B=F,N=k)}N&&N.mvp++;for(let k of n.players.values())k.rk=0,k.defused=!1;t=!0,n.emit("ev",{t:"end",win:y,reason:w,score:n.score.slice(),mvp:N&&N.id,loss:I})}function M(){let y=Gu[n.cfg.len];if(n.score[0]>=y.win||n.score[1]>=y.win||n.round>=y.max){n.phase="over",n.timeLeft=zt.over,l=zt.over;let R=n.score[0]>n.score[1]?0:n.score[1]>n.score[0]?1:-1;n.emit("ev",{t:"over",wg:R,score:n.score.slice()}),t=!0,setTimeout(()=>{if(c)return;c=!0;let _=[...n.players.values()].filter(I=>!I.bot&&(R<0||I.grp===R)).map(I=>I.id),T=R<0?"Empate "+n.score.join(" \u2013 "):"\u{1F451} Ganan "+x(R)+" "+Math.max(...n.score)+" \u2013 "+Math.min(...n.score);n.end(_,T)},zt.over*1e3);return}if(n.round===y.max/2){n.half=1,s=[1,1];for(let R of n.players.values())R.money=Nn.start,R.alive=!1,R.ar=0,R.helm=!1;n.emit("ev",{t:"half"}),d(!0);return}d(!1)}let x=y=>{let w=[...n.players.values()].filter(R=>R.grp===y&&!R.bot).map(R=>R.name);return w.length?w.slice(0,3).join(", "):qs(y,n.half)==="T"?"los Terroristas":"los Contraterroristas"};function g(y,w){y.money=Math.max(0,Math.min(Nn.max,y.money+w))}function b(){if(n.phase!=="live")return;let y=0,w=0,R=0,_=0;for(let T of n.players.values())T.team==="T"?(R++,T.alive&&y++):(_++,T.alive&&w++);if(_&&w===0)return m("T","elim");if(R&&y===0&&n.bomb.state!=="planted")return m("CT","elim")}e.tick=y=>{if(n.phase!=="lobby"){if(n.timeLeft-=y,n.phase==="freeze"&&n.timeLeft<=0)n.phase="live",n.timeLeft=zt.live,t=!0,n.emit("ev",{t:"go"});else if(n.phase==="live"){let w=n.bomb;if(w.state==="planted"){w.t-=y,n.timeLeft=w.t;for(let[R,_]of a){let T=n.players.get(R);if(!T||!T.alive||Math.hypot(T.x-w.x,T.z-w.z)>2.2){a.delete(R);continue}T.bot&&n.time-_.t0>=_.dur&&A(T)}w.t<=0&&w.state==="planted"&&p()}else n.timeLeft<=0&&m("CT","time");if(o-=y,o<=0){o=.25;for(let R of n.players.values()){if(!R.alive)continue;let _=T0(n.nades,R.x,R.y,R.z);_&&e.damage(R.id,_.owner,10,"fire",_.type,{raw:!0})}}}else n.phase==="post"&&n.timeLeft<=0&&M();i-=y,(t&&i<=0||i<-2)&&(i=.1,t=!1,n.emit("st",e.snapshot()))}},e.markDirty=()=>{t=!0},e.snapshot=()=>({ph:n.phase,tl:+n.timeLeft.toFixed(2),r:n.round,sc:n.score,hf:n.half,b:{s:n.bomb.state,c:n.bomb.carrier,x:+n.bomb.x.toFixed(2),y:+n.bomb.y.toFixed(2),z:+n.bomb.z.toFixed(2),t:+n.bomb.t.toFixed(2),site:n.bomb.site},dr:[...n.drops.values()].map(y=>[y.id,y.w,+y.x.toFixed(2),+y.y.toFixed(2),+y.z.toFixed(2),y.ammo]),p:[...n.players.values()].map(y=>[y.id,y.name,y.bot?1:0,y.grp,y.team,y.hp,y.ar,y.helm?1:0,y.money,y.alive?1:0,y.k,y.d,y.a,y.mvp,y.inv,y.god?1:0,y.skT|0,y.skCT|0,y.fin||0])}),e.damage=(y,w,R,_,T,I={})=>{let N=n.players.get(y),B=n.players.get(w);if(!N||!N.alive||n.phase==="over"||B&&B!==N&&B.team===N.team||N.god)return;let k,F=0;if(I.raw)k=Math.round(R);else{let U=et[T],H=Hu(R,I.ap??(U?.ap||.5),_,N.ar,N.helm);k=H.hp,F=H.armor}k=Math.min(k,N.hp),N.hp-=k,N.ar=Math.max(0,N.ar-F),B&&B!==N&&(B.dmgR+=k,N.dmgBy[w]=(N.dmgBy[w]||0)+k),t=!0,n.emit("ev",{t:"hurt",v:y,a:w,n:k,hs:_==="head",w:T,helm:N.helm&&_==="head"}),N.hp<=0&&E(N,B,T,_==="head",I.wb)};function E(y,w,R,_,T){if(y.hp=0,y.alive=!1,y.d++,w&&w!==y)if(w.team!==y.team){w.k++,w.rk=(w.rk||0)+1;let N=et[R];g(w,N?.reward??300)}else w.k--,g(w,Nn.teamKill);for(let[N,B]of Object.entries(y.dmgBy||{}))if(N!==w?.id&&B>=41){let k=n.players.get(N);k&&k.team!==y.team&&k.a++}let I=y.inv.p||(y.inv.s&&y.inv.s!==E0(y.team)?y.inv.s:null)||y.inv.s;I&&P(I,y.x,y.y,y.z,null,y.yaw),y.inv.c4&&(y.inv.c4=!1,S(y)),y.inv.kit&&P("defuser",y.x+.3,y.y,y.z,null,0),y.inv={...y.inv,p:null,s:null,g:[],kit:!1,zeus:!1,c4:!1,v:y.inv.v+1},a.delete(y.id),t=!0,n.emit("ev",{t:"kill",k:w?w.id:null,v:y.id,w:R,hs:!!_,wb:!!T}),b()}function S(y){n.bomb.state="dropped",n.bomb.carrier=null,n.bomb.x=y.x,n.bomb.y=y.y,n.bomb.z=y.z,n.emit("ev",{t:"bombdrop"})}function P(y,w,R,_,T,I=0){let N=h++,B=w-Math.sin(I)*.6,k=_-Math.cos(I)*.6,F=!n.solidAt(B,R+.3,k);n.drops.set(N,{id:N,w:y,x:F?B:w,y:n.floorAt(F?B:w,F?k:_,R+.6)+.05,z:F?k:_,ammo:T||null}),t=!0}e.handle=(y,w,R,_={})=>{let T=n.players.get(R);if(T)switch(y){case"hit":{if(!T.alive&&n.phase!=="post")return;let I=et[w.w];if(!I)return;let N=I.cat==="knife"?180:I.dmg*I.pellets*1.01;e.damage(w.t,R,Math.min(+w.d||0,N),w.part,w.w,{wb:w.wb});break}case"buy":v(T,w.i);break;case"drop":{if(!T.alive)return;let I=w.s;if(I==="zeus"){T.inv.zeus=!1,T.inv.v++,t=!0;return}if(I==="c4"){if(!T.inv.c4)return;T.inv.c4=!1,T.inv.v++,S({x:w.x,y:w.y,z:w.z}),n.bomb.x-=Math.sin(w.yaw)*.6,n.bomb.z-=Math.cos(w.yaw)*.6,n.bomb.y=n.floorAt(n.bomb.x,n.bomb.z,w.y+.6),t=!0;return}let N=I==="p"?T.inv.p:I==="s"?T.inv.s:null;if(!N)return;T.inv[I]=null,T.inv.v++,P(N,w.x,w.y,w.z,w.ammo,w.yaw);break}case"take":{if(!T.alive)return;if(w.id==="c4"){if(T.team!=="T"||n.bomb.state!=="dropped"||Math.hypot(T.x-n.bomb.x,T.z-n.bomb.z)>1.8)return;T.inv.c4=!0,T.inv.v++,n.bomb.state="carried",n.bomb.carrier=T.id,t=!0,n.emit("ev",{t:"bombpick",p:T.id});return}let I=n.drops.get(w.id);if(!I||Math.hypot(T.x-I.x,T.z-I.z)>2.2)return;if(I.w==="defuser"){if(T.team!=="CT"||T.inv.kit)return;T.inv.kit=!0,T.inv.v++,n.drops.delete(I.id),t=!0;return}let N=Xs(I.w)===1?"p":"s";if(T.inv[N]){if(!w.swap)return;P(T.inv[N],T.x,T.y,T.z,w.ammo,T.yaw)}T.inv[N]=I.w,T.inv[N+"a"]=I.ammo,T.inv.v++,n.drops.delete(I.id),t=!0;break}case"nade":{let I=T.inv.g.indexOf(w.type);if(I<0)return;T.inv.g.splice(I,1),T.inv.v++,t=!0;break}case"plant":{let I=Qn(n.W,w.x,w.z)&12;if(!T.alive||!T.inv.c4||n.phase!=="live"||!I||n.bomb.state==="planted")return;T.inv.c4=!1,T.inv.v++,Object.assign(n.bomb,{state:"planted",carrier:null,x:w.x,y:w.y,z:w.z,t:zt.bomb,site:I&4?"A":"B"}),r=T.id,g(T,Nn.plantReward),t=!0,n.emit("ev",{t:"plant",p:T.id,site:n.bomb.site}),b();break}case"defst":{if(!T.alive||T.team!=="CT"||n.bomb.state!=="planted"||Math.hypot(T.x-n.bomb.x,T.z-n.bomb.z)>2.2)return;a.set(T.id,{t0:n.time,dur:T.inv.kit?zt.kit:zt.defuse}),n.emit("ev",{t:"defst",p:T.id,kit:T.inv.kit});break}case"defx":a.delete(R);break;case"defok":{let I=a.get(R);if(!I||!T.alive||n.bomb.state!=="planted"||n.time-I.t0<I.dur-.5)return;A(T);break}case"adm":_.admin&&C(T,w);break;case"fall":T.alive&&e.damage(R,R,Math.min(999,+w.d||0),"chest","world",{raw:!0});break}},e.botDefuse=y=>{a.has(y.id)||e.handle("defst",{},y.id)},e.isDefusing=y=>a.has(y);function A(y){a.clear(),n.bomb.state="defused",y.defused=!0,g(y,Nn.defuseReward),n.emit("ev",{t:"defused",p:y.id}),m("CT","defuse")}function p(){let y=n.bomb;y.state="exploded",n.emit("ev",{t:"boom",x:y.x,y:y.y,z:y.z});let w=1750*.0254/3;for(let R of n.players.values()){if(!R.alive)continue;let _=Math.hypot(R.x-y.x,R.y-y.y,R.z-y.z),T=500*Math.exp(-(_*_)/(2*w*w));if(T>1){let I=Hu(T,.5,"chest",R.ar,R.helm);R.hp-=Math.min(R.hp,I.hp),R.ar=Math.max(0,R.ar-I.armor),R.hp<=0&&(R.alive=!1,R.d++,n.emit("ev",{t:"kill",k:null,v:R.id,w:"c4"}))}}t=!0,m("T","bomb")}e.heBlast=(y,w)=>{for(let R of n.players.values()){if(!R.alive)continue;let _=Math.hypot(R.x-y.x,R.y+1-y.y,R.z-y.z);if(_>Pt.heR||!w(y,R))continue;let T=Pt.heDmg*(1-_/Pt.heR);T<1||e.damage(R.id,y.owner,T,"chest","he",{ap:.5})}};function v(y,w){let R=et[w],_=N=>n.emitTo(y.id,"ev",{t:"deny",why:N});if(!R||!y.alive)return;if(!e.canBuyTime())return _("Se termin\xF3 el tiempo de compra");if(!e.buyZone(y))return _("Ten\xE9s que estar en tu zona de compra");if(R.side!=="both"&&R.side!==y.team)return _("No disponible para tu equipo");let T=R.price,I=y.inv;if(w==="vest"){if(y.ar>=100)return _("Ya ten\xE9s chaleco")}else if(w==="vesthelm"){if(y.ar>=100&&y.helm)return _("Ya ten\xE9s chaleco y casco");y.ar>=100&&(T=350)}else if(w==="defuser"){if(I.kit)return _("Ya ten\xE9s el kit")}else if(w==="zeus"){if(I.zeus)return _("Ya ten\xE9s la Zeus")}else if(R.cat==="grenade"){let N=I.g.length,B=I.g.filter(k=>k===w||(k==="molotov"||k==="incendiary")&&(w==="molotov"||w==="incendiary")).length;if(N>=4)return _("Llev\xE1s el m\xE1ximo de granadas");if(B>=(R.max||1))return _("No pod\xE9s llevar m\xE1s de esa granada")}else{let N=Xs(w)===1?"p":"s";if(I[N]===w)return _("Ya ten\xE9s esa arma")}if(y.money<T)return _("No te alcanza la plata");if(y.money-=T,w==="vest")y.ar=100;else if(w==="vesthelm")y.ar=100,y.helm=!0;else if(w==="defuser")I.kit=!0;else if(w==="zeus")I.zeus=!0;else if(R.cat==="grenade")I.g.push(w);else{let N=Xs(w)===1?"p":"s";I[N]&&P(I[N],y.x,y.y,y.z,null,y.yaw+Math.PI),I[N]=w,I[N+"a"]=null}I.v++,t=!0,n.emitTo(y.id,"ev",{t:"bought",i:w})}e.buy=v;function C(y,w){if(w.a==="god")y.god=!!w.v,t=!0;else if(w.a==="money")y.money=Nn.max,t=!0;else if(w.a==="win")(n.phase==="live"||n.phase==="freeze")&&(n.phase="live",m(y.team,"elim"));else if(w.a==="kill")for(let R of n.players.values())R.alive&&R.team!==y.team&&E(R,y,"knife",!0,!1);else w.a==="heal"&&(y.hp=100,y.ar=100,y.helm=!0,t=!0)}return e}var Xu=.0254,A0=Math.PI/180,aM={pistol:.12,smg:.16,rifle:.36,sniper:.6,heavy:.3,equip:0,knife:0},oM=n=>n.id==="awp"?.85:n.id==="deagle"||n.id==="r8"?.3:n.id==="ak47"?.42:n.cat==="heavy"&&n.pellets>1?0:aM[n.cat]??0;function eo(n,e){let t=n.scope&&n.cat==="sniper"&&e.scoped?n.scoped:n.spread,i=n.speed*Xu*(e.scoped&&n.cat==="sniper"?.5:1),s=Math.max(0,Math.min(1,(e.speed-i*.34)/(i*.66)));return t+=n.move*s,e.onGround||(t+=n.cat==="sniper"?.25:.12),e.duck>.5&&e.onGround&&(t*=.75),n.auto&&n.pellets===1&&(t+=Math.min(.022,e.shots*.0016)),n.cat==="pistol"&&!n.auto&&(t+=Math.min(.03,e.shots*.006)),t}function Uc(n,e,t){if(n.pellets>1||n.cat==="sniper")return[n.kick,(t()-.5)*n.sway];let i=e===0?n.kick*.6:e<9?n.kick:n.kick*.25,s=(t()-.5)*n.sway*.5;return n.auto&&n.cat!=="pistol"&&(e>=7&&e<14?s+=-n.sway*1.1:e>=14&&e<22?s+=n.sway*1.25:e>=22&&(s+=Math.sin(e*.9)*n.sway)),[i,s]}function kr(n,e,t,i,s,r){let a=r()*Math.PI*2,o=s*(r()*.6+r()*.4),l=e+t*A0+Math.sin(a)*o,c=n-i*A0+Math.cos(a)*o;return[-Math.sin(c)*Math.cos(l),Math.sin(l),-Math.cos(c)*Math.cos(l)]}function Fc(n,e,t,i,s,r,a,o,l,c,h){let f=Math.min(c.range*Xu,300),u=c.dmg,d=oM(c),m=!1,M=i,x=s,g=r,b=0,E=[];for(let S=0;S<3;S++){let P=f-b;if(P<=0)break;let A=Wi(n,M,x,g,a,o,l,P),p=A?A.t:P,v=null;for(let R of h){if(!R.alive||R.id===t||Math.abs(R.x-M)>p+2||Math.abs(R.z-g)>p+2)continue;let _=m0(R,M,x,g,a,o,l,p);_&&(!v||_.t<v.t)&&(v={..._,id:R.id})}if(v){let R=b+v.t,_=u*Math.pow(c.rangeMod,R/Xu/500),T=[M+a*v.t,x+o*v.t,g+l*v.t];return{end:T,hit:{id:v.id,part:v.part,dmg:_,pos:T},impacts:E,wb:m}}if(!A)return{end:[M+a*P,x+o*P,g+l*P],hit:null,impacts:E,wb:m};let C=[M+a*p,x+o*p,g+l*p];if(E.push([C[0],C[1],C[2],A.nx,A.ny,A.nz]),d<=0)return{end:C,hit:null,impacts:E,wb:m};let y=0,w=.03;for(;y<d&&Ec(n,C[0]+a*(y+w),C[1]+o*(y+w),C[2]+l*(y+w));)y+=w;if(y>=d)return{end:C,hit:null,impacts:E,wb:m};y+=w,u*=Math.max(.15,1-y/d)*.75,d-=y,m=!0,b+=p+y,M=C[0]+a*y,x=C[1]+o*y,g=C[2]+l*y,E.push([M,x,g,-a,-o,-l])}return{end:[M,x,g],hit:null,impacts:E,wb:m}}function to(n,e,t,i){let s=t[0],r=t[1],a=t[2];for(let o of[1.55,1.1]){let l=i[0],c=i[1]+o*(i[3]||1),h=i[2],f=l-s,u=c-r,d=h-a,m=Math.hypot(f,u,d),M=Wi(n,s,r,a,f/m,u/m,d/m,m);if(!(M&&M.t<m-.1)&&!S0(e,s,r,a,l,c,h))return!0}return!1}var R0=.0254,Oc=Math.PI/180,zc={facil:{react:.75,turn:150,err:5.5,hs:.04,ctrl:.2,track:1.6,settle:1.1,name:"F\xE1cil"},normal:{react:.52,turn:220,err:4,hs:.1,ctrl:.42,track:1.1,settle:1.5,name:"Normal"},dificil:{react:.36,turn:320,err:2.8,hs:.2,ctrl:.62,track:.7,settle:2,name:"Dif\xEDcil"},experto:{react:.26,turn:450,err:1.9,hs:.32,ctrl:.8,track:.45,settle:2.6,name:"Experto"}},vt=Math.random,Bc=(n,e)=>{let t=n-e;for(;t>Math.PI;)t-=Math.PI*2;for(;t<-Math.PI;)t+=Math.PI*2;return t};function qu(n,e){let t={},i={site:"A"},s=0,r={A:ti(n.nav,4),B:ti(n.nav,8)};t.refreshNav=()=>{r.A=ti(n.nav,4),r.B=ti(n.nav,8)};let a=new Map,o={T:{},CT:{}},l=p=>o[p.team];function c(p,v){if(!p||p.length<2)return null;let C=0;for(let y=p.length-1;y>0;y--)if(C+=Math.hypot(p[y][0]-p[y-1][0],p[y][2]-p[y-1][2]),C>=v)return p[y-1];return p[0]}function h(p,v){if(!p||p.length<2)return null;let C=0;for(let y=1;y<p.length;y++)if(C+=Math.hypot(p[y][0]-p[y-1][0],p[y][2]-p[y-1][2]),C>=v)return p[y];return p[p.length-1]}let f=p=>{let v=n.nav,C=0,y=0,w=0;for(let _ of p){let T=v.pos(_);C+=T[0],y+=T[1],w+=T[2]}let R=Math.max(1,p.length);return[C/R,y/R,w/R]};t.brain=p=>{let v=a.get(p.id);return v||(v={path:null,pi:0,goal:null,repath:0,tgt:null,react:0,err:[0,0],fireT:0,burst:0,shots:0,pp:0,py:0,strafe:1,strafeT:0,stuck:0,last:[0,0],buyT:0,bought:!1,hold:null,plantT:0,lastKnown:null,lkT:0,blind:0,mag:{},reload:0,look:null,wantScope:!1,jumpT:0},a.set(p.id,v)),v},t.reset=()=>a.clear(),t.roundStart=()=>{t._nav!==n.nav&&(t._nav=n.nav,t.refreshNav()),i.site=n.wingSite||(vt()<.5?"A":"B"),o.T={},o.CT={};let p=n.nav,v={A:f(r.A),B:f(r.B)},C=n.spawns.T,y=n.spawns.CT;for(let R of["A","B"]){if(!r[R].length)continue;let _=zr(p,p.nearest(C.cx,C.pts[0]?C.pts[0][1]:v[R][1],C.cz),p.nearest(v[R][0],v[R][1],v[R][2]));i["stage"+R]=c(_,16+vt()*6);let T=_?_.slice().reverse():null;i["entry"+R]=h(T,14);let I=zr(p,p.nearest(v[R][0],v[R][1],v[R][2]),p.nearest(y.cx,y.pts[0]?y.pts[0][1]:v[R][1],y.cz));i["ctEntry"+R]=h(I,14)}i.go=!1,i.goT=18+vt()*22,i.siteC=v;let w=0;for(let R of n.players.values()){if(!R.bot)continue;let _=t.brain(R);Object.assign(_,{path:null,goal:null,goalKind:null,rotated:!1,tgt:null,hold:null,plantT:0,bought:!1,buyT:.6+vt()*2.2,lastKnown:null,blind:0,reload:0,shots:0,pp:0,py:0,mag:{},look:null}),_.site=R.team==="CT"?w++%2===0?"A":"B":i.site,R.team==="CT"&&vt()<.25&&(_.site=_.site==="A"?"B":"A"),n.wingSite&&(_.site=n.wingSite)}},t.place=(p,v)=>{p.pl=Pc(v[0],v[1],v[2],v[3]),p.pl.pitch=0},t.heard=(p,v,C,y,w)=>{for(let R of n.players.values()){if(!R.bot||!R.alive||R.team===y||!R.pl)continue;if(Math.hypot(R.pl.x-p,R.pl.z-C)<(w?40:14)){let T=t.brain(R);T.tgt||(T.lastKnown=[p,v,C],T.lkT=4)}}},t.flash=(p,v)=>{let C=t.brain(p);C.blind=Math.max(C.blind,v)};let u=p=>{let v=0;for(let C of n.players.values())C.team===p&&C.alive&&v++;return v};function d(p){let v=t.brain(p);return!!(v.lastKnown&&v.lkT>3)}function m(p){let v=p.inv;return v.p||v.s||"knife"}function M(p){let v=()=>p.money,C=p.team==="T",y=[];v()>=5750&&vt()<.18?y.push("awp"):v()>=3700?y.push(C?"ak47":"m4a4"):v()>=2900?y.push(C?"galil":"famas"):v()>=1850&&n.round>1&&y.push(C?"mac10":"mp9");for(let w of y)e.buy(p,w);v()>=1e3?e.buy(p,"vesthelm"):v()>=650&&(n.round===1||n.round===x()+1||vt()<.5)&&e.buy(p,"vest"),!C&&v()>=400&&vt()<.6&&e.buy(p,"defuser"),n.round===1&&v()>=500&&!p.inv.p&&vt()<.3&&e.buy(p,C?"tec9":"fiveseven")}let x=()=>({rapida:4,corta:8,comp:12})[n.cfg.len];function g(p,v,C,y,w){let R=n.nav,_=p.pl,T=R.nearest(_.x,_.y,_.z),I=R.nearest(C,y,w);v.path=zr(R,T,I),v.pi=1,v.goal=[C,y,w],v.repath=6+vt()*2,v.path||(v.repath=1.5+vt())}let b=p=>n.nav.pos(p[Math.floor(vt()*p.length)]);t.tick=p=>{let v=zc[n.cfg.diff]||zc.normal;s-=p;let C=s<=0;C&&(s=.1);let y=n.phase==="live",w=n.phase==="freeze";for(let R of n.players.values()){if(!R.bot||!R.pl)continue;let _=t.brain(R),T=R.pl;if(!R.alive)continue;let I=m(R),N=et[I];if(_.mag[I]===void 0&&(_.mag[I]=N.mag||0),_.blind=Math.max(0,_.blind-p),_.fireT-=p,_.lkT-=p,_.repath-=p,_.jumpT-=p,_.reload>0&&(_.reload-=p,_.reload<=0&&(_.mag[I]=N.mag)),w){_.buyT-=p,_.buyT<=0&&!_.bought&&(_.bought=!0,M(R)),S(R,_,0,0,!1,p,N);continue}if(C&&_.blind<=0){let $=[T.x,T.y+En(T),T.z],G=null,ee=1e9;for(let te of n.players.values()){if(!te.alive||te.team===R.team)continue;let le=te.x-T.x,ce=te.z-T.z,he=Math.hypot(le,ce);if(he>90)continue;let ze=Math.abs(Bc(Math.atan2(-le,-ce),T.yaw)),Pe=_.tgt===te.id;if(ze>(Pe?2.6:1.45)&&he>2.5||!to(n.W,n.nades,$,[te.x,te.y,te.z,te.h/rt.hStand]))continue;let Oe=he*(Pe?.6:1);Oe<ee&&(ee=Oe,G=te)}if(G){if(_.tgt!==G.id){let te=G.x-T.x,le=G.z-T.z,ce=Math.abs(Bc(Math.atan2(-te,-le),T.yaw));_.tgt=G.id,_.react=v.react*(.8+vt()*.6)*(1+ce*.5)+Math.min(.25,ee/160);let he=v.err*Oc*(1+ce*.6);_.err=[(vt()<.5?-1:1)*he*(.6+vt()*.8),(vt()-.35)*he*.8],_.head=vt()<v.hs;let ze=Qn(n.W,G.x,G.z);ze&4?l(R).seen={site:"A",t:8}:ze&8&&(l(R).seen={site:"B",t:8})}_.lastKnown=[G.x,G.y,G.z],_.lkT=5}else _.tgt&&(_.tgt=null)}_.blind>0&&(_.tgt=null);let B=_.tgt?n.players.get(_.tgt):null,k=0,F=0,U=!1,H=!1;if(B&&B.alive){let $=T.x,G=T.y+En(T),ee=T.z,te=B.y+(_.head?B.h-.12:B.h*.6),le=B.x-$,ce=te-G,he=B.z-ee,ze=Math.hypot(le,he),Pe=((B.vx||0)*he-(B.vz||0)*le)/Math.max(1,ze),Oe=Math.max(-.08,Math.min(.08,-Pe/Math.max(4,ze)*v.track*.35)),je=Math.atan2(-le,-he)+_.err[0]+Oe,ae=Math.atan2(ce,ze)+_.err[1];_.err[0]*=Math.max(0,1-p*v.settle),_.err[1]*=Math.max(0,1-p*v.settle),_.rcyc=(_.rcyc||0)+p,_.retreat=R.hp<35&&ze<25&&_.rcyc%1.5<.55,E(T,je,ae,v.turn*Oc*p),_.react-=p;let xe=Math.hypot(Bc(T.yaw,je-_.err[0]),T.pitch-(ae-_.err[1]));_.strafeT-=p,_.strafeT<=0&&(_.strafeT=.4+vt()*.8,_.strafe=vt()<.5?-1:1);let ge=N.cat==="rifle"||N.cat==="sniper"||N.cat==="heavy"&&N.pellets===1||ze>14;if(!ge||_.reload>0){let Ke=[Math.cos(T.yaw),-Math.sin(T.yaw)];k=Ke[0]*_.strafe,F=Ke[1]*_.strafe}(_.reload>0||_.retreat)&&(k+=Math.sin(T.yaw)*.8,F+=Math.cos(T.yaw)*.8),N.cat==="sniper"&&(_.wantScope=!0);let Ie=Math.hypot(T.vx,T.vz);_.react<=0&&xe<Math.max(.02,.6/Math.max(3,ze))+.03&&_.reload<=0&&_.fireT<=0&&(!ge||Ie<N.speed*R0*.4||ze<6)&&(_.mag[I]<=0&&N.mag?(_.reload=N.reload,_.shots=0):P(R,_,N,I,v,ze)),_.reload<=0&&_.mag[I]<=0&&N.mag&&(_.reload=N.reload,_.shots=0)}else{_.wantScope=!1,_.shots&&_.fireT<-.35&&(_.shots=0),N.mag&&_.mag[I]<N.mag*.4&&_.reload<=0&&(_.reload=N.reload);let $=n.bomb,G=null,ee=!1;if(R.team==="T"&&y&&!i.go){i.goT-=p/Math.max(1,u("T"));let he=i["stage"+_.site];if(!he||i.goT<=0||n.timeLeft<60)i.go=!0;else{let ze=0,Pe=0;for(let Oe of n.players.values())Oe.team==="T"&&Oe.alive&&(Pe++,Math.hypot(Oe.x-he[0],Oe.z-he[2])<9&&ze++);Pe&&ze>=Math.ceil(Pe*.75)&&(i.go=!0)}}let te=l(R).seen;if(te&&(te.t-=p/Math.max(1,u(R.team)),te.t<=0&&(l(R).seen=null)),R.team==="T"){let he=i["stage"+_.site];if($.state==="dropped")(_.goalKind!=="bomb"||_.repath<=0)&&(G=[$.x,$.y,$.z],_.goalKind="bomb"),Math.hypot(T.x-$.x,T.z-$.z)<1.2&&e.handle("take",{id:"c4"},R.id);else if($.state==="planted"){if(_.goalKind!=="post"){let ze=vt()*6.28,Pe=5+vt()*7;G=[$.x+Math.cos(ze)*Pe,$.y,$.z+Math.sin(ze)*Pe],_.goalKind="post",_.look=i["ctEntry"+(Qn(n.W,$.x,$.z)&8?"B":"A")]||[$.x,$.y,$.z]}}else!i.go&&he?_.goalKind!=="stage"&&(G=[he[0]+(vt()-.5)*5,he[1],he[2]+(vt()-.5)*5],_.goalKind="stage",_.look=i.siteC[_.site]):R.inv.c4?Qn(n.W,T.x,T.z)&12&&y&&T.onGround&&!d(R)?(_.plantT+=p,ee=!0,n.setPlanting(R.id,_.plantT),_.plantT>=3.2&&(_.plantT=0,n.setPlanting(R.id,0),e.handle("plant",{x:T.x,y:T.y,z:T.z},R.id))):(_.plantT=0,(!_.goal||_.goalKind!=="site")&&(G=b(r[_.site]),_.goalKind="site")):(!_.goal||_.goalKind!=="site")&&(G=b(r[_.site]),_.goalKind="site",_.look=null)}else $.state==="planted"?Math.hypot(T.x-$.x,T.z-$.z)<1.1?(ee=!0,H=!0,e.botDefuse(R),_.look=[$.x,$.y,$.z]):(_.goalKind!=="defuse"||_.repath<=0)&&(G=[$.x,$.y,$.z],_.goalKind="defuse"):te&&te.site!==_.site&&!_.rotated&&vt()<.6?(_.rotated=!0,u("CT")>1&&vt()<.7&&(_.site=te.site,_.goal=null,_.goalKind=null)):(!_.goal||_.goalKind!=="hold")&&(G=b(r[_.site]),_.goalKind="hold",_.look=i["entry"+_.site]||null);if(!G&&_.goal&&!_.path&&_.repath<=0&&(_.goal=null),G&&g(R,_,G[0],G[1],G[2]),!ee&&_.path&&_.pi<_.path.length){let he=_.path[_.pi],ze=he[0]-T.x,Pe=he[2]-T.z,Oe=Math.hypot(ze,Pe);Oe<.55?_.pi++:(k=ze/Oe,F=Pe/Oe,he[1]-T.y>.45&&Oe<1.6&&_.jumpT<=0&&(_.jump=!0,_.jumpT=.8));let je=Math.hypot(T.x-_.last[0],T.z-_.last[1]);_.stuck=je<p*.6?_.stuck+p:0,_.last=[T.x,T.z],_.stuck>.6&&(_.jump=!0,_.stuck>1.6&&(_.stuck=0,_.goal=null,_.path=null))}else if(!ee&&_.goalKind==="hold"&&_.path&&_.pi>=_.path.length){if(!_.look){let he=n.spawns.T;_.look=[he.cx,T.y+1.5,he.cz]}_.crouchT=(_.crouchT||0)+p,H=_.crouchT%9>6,vt()<p*.03&&(_.goal=null)}else!ee&&_.goalKind==="site"&&_.path&&_.pi>=_.path.length?_.goal=null:!ee&&(_.goalKind==="stage"||_.goalKind==="post")&&_.path&&_.pi>=_.path.length;let le=null,ce=0;if(_.lastKnown&&_.lkT>0){let he=_.lastKnown;le=Math.atan2(-(he[0]-T.x),-(he[2]-T.z)),ce=Math.atan2(he[1]+1.4-T.y-En(T),Math.hypot(he[0]-T.x,he[2]-T.z))}else(k||F)&&!(_.goalKind==="hold"&&_.look&&_.path&&_.pi>=_.path.length-3)?le=Math.atan2(-k,-F):_.look&&(le=Math.atan2(-(_.look[0]-T.x),-(_.look[2]-T.z)));le!==null&&E(T,le,ce,v.turn*.55*Oc*p)}let Z=(N.recover||9)*p;_.pp=Math.max(0,_.pp-Z*(_.fireT<-.05?1:.3)),_.py*=Math.max(0,1-p*4),U=!!B&&N.cat!=="knife",S(R,_,k,F,U,p,N,H)}};function E(p,v,C,y){let w=Bc(v,p.yaw);p.yaw+=Math.max(-y,Math.min(y,w));let R=C-p.pitch;p.pitch+=Math.max(-y,Math.min(y,R)),p.pitch=Math.max(-1.45,Math.min(1.45,p.pitch))}function S(p,v,C,y,w,R,_,T=!1){let I=p.pl,N=-Math.sin(I.yaw),B=-Math.cos(I.yaw),k=Math.cos(I.yaw),F=-Math.sin(I.yaw),U={f:C*N+y*B,s:C*k+y*F,jump:!!v.jump,crouch:T,walk:w};v.jump=!1,(n.phase==="freeze"||n.planting(p.id)>0||e.isDefusing(p.id))&&(U.f=U.s=0,U.jump=!1);let Z=_.speed*R0*(v.wantScope&&_.cat==="sniper"?.42:1);{let G=Math.hypot(U.f,U.s);G>1&&(U.f/=G,U.s/=G)}let $=R;for(;$>1e-6;){let G=Math.min($,.011111111111111112),ee=Ic(n.W,I,U,G,Z);ee&&n.fallDamage(p,ee),$-=G}I.y<-20&&p.alive&&e.damage(p.id,p.id,999,"chest","world",{raw:!0});for(let G of n.players.values()){if(G===p||!G.alive||Math.abs(G.y-I.y)>1.6)continue;let ee=I.x-G.x,te=I.z-G.z,le=Math.hypot(ee,te);if(le<.62){let ce=le>1e-4?(.62-le)/le*.5:0,he=I.x+(le>1e-4?ee*ce:.05),ze=I.z+(le>1e-4?te*ce:.03);Gi(n.W,he,ze,I.y,I.h,rt.r)||(I.x=he,I.z=ze)}}p.x=I.x,p.y=I.y,p.z=I.z,p.yaw=I.yaw,p.pitch=I.pitch,p.duck=I.duck,p.h=I.h,p.vx=I.vx,p.vz=I.vz,p.onGround=I.onGround,p.wpn=p.inv.c4&&v.plantT>0?"c4":m(p),p.scoped=v.wantScope&&_.cat==="sniper"}function P(p,v,C,y,w,R){let _=p.pl,T={speed:Math.hypot(_.vx,_.vz),onGround:_.onGround,duck:_.duck,scoped:p.scoped,shots:v.shots},I=eo(C,T),[N,B]=Uc(C,v.shots,vt),k=[_.x,_.y+En(_),_.z];n.fireBullets(p.id,y,k,U=>kr(_.yaw,_.pitch,v.pp*(1-w.ctrl*.85),v.py*(1-w.ctrl*.85),I,U)),v.pp=Math.min(C.kickCap||12,v.pp+N),v.py+=B,v.shots++,C.mag&&v.mag[y]--;let F=60/C.rpm;if(C.auto){let U=R>25?2:R>12?4:8;v.shots%U===0?(v.fireT=F+.25+vt()*.3*(2-w.ctrl),v.shots=0,A(v,w)):v.fireT=F}else v.fireT=Math.max(F,C.cat==="pistol"?.22+vt()*.25:F),C.cat!=="sniper"&&A(v,w,.5)}function A(p,v,C=1){let y=v.err*Oc*.45*C;p.err[0]+=(vt()-.5)*2*y,p.err[1]+=(vt()-.4)*y,p.head=vt()<v.hs}return t}var gt=new Wt,kc=new We,Ow=new W(0,1,0),Hc=new W;function C0(n){let e={},i=new Hn(new rn(1,1,1),new Kt({color:"#ffffff"}),700);i.instanceMatrix.setUsage(Ur),i.frustumCulled=!1,i.count=0,i.instanceColor=new yi(new Float32Array(700*3),3),n.add(i);let s=[];e.particle=(_,T,I,N,B,k,F,U,H,Z=9.8,$=0,G=null)=>{s.length>=700&&s.shift();let ee={x:_,y:T,z:I,vx:N,vy:B,vz:k,s:F,life:U,max:U,c:new We(H),g:Z,grow:$,fy:G};return s.push(ee),ee},e.floorAt=null,e.shell=(_,T,I,N)=>{let B=e.floorAt?e.floorAt(_[0],_[2],_[1]):_[1]-1.5,k=e.particle(_[0],_[1],_[2],T*(1.5+Math.random()),1.6+Math.random(),I*(1.5+Math.random()),N?.03:.022,1.6,N?"#2d6b2a":"#c9a23a",9.8,0,B+.01);k.shell=!0};let r=64,a=new rn(1,1,1);a.translate(0,0,-.5);let o=new Hn(a,new Kt({color:"#ffe9a8",transparent:!0,opacity:.85,depthWrite:!1}),r);o.instanceMatrix.setUsage(Ur),o.frustumCulled=!1,o.count=0,n.add(o);let l=[];e.tracer=(_,T)=>{l.length>=r&&l.shift();let I=Math.hypot(T[0]-_[0],T[1]-_[1],T[2]-_[2]);l.push({a:[..._],b:[...T],d:I,t:0,life:Math.min(.25,I/280+.04)})};let c=220,h=new Zn(.07,.07),f=new Hn(h,new Kt({color:"#1d1a17",polygonOffset:!0,polygonOffsetFactor:-2,depthWrite:!1}),c);f.count=0,f.frustumCulled=!1,n.add(f);let u=0;e.decal=(_,T)=>{gt.position.set(_[0]+T[0]*.01,_[1]+T[1]*.01,_[2]+T[2]*.01),Hc.set(T[0],T[1],T[2]),gt.quaternion.setFromUnitVectors(new W(0,0,1),Hc),gt.rotateZ(Math.random()*3),gt.scale.setScalar(.7+Math.random()*.6),gt.updateMatrix(),f.setMatrixAt(u,gt.matrix),u=(u+1)%c,f.count=Math.max(f.count,u===0?c:u),f.instanceMatrix.needsUpdate=!0};let d={};e.decalC=(_,T,I,N)=>{let B=d[I];if(!B){let k=new Hn(new as(.5,7),new Kt({color:I,transparent:!0,opacity:.85,polygonOffset:!0,polygonOffsetFactor:-3,depthWrite:!1}),80);k.count=0,k.frustumCulled=!1,n.add(k),B=d[I]={m:k,i:0}}gt.position.set(_[0]+T[0]*.012,_[1]+T[1]*.012,_[2]+T[2]*.012),Hc.set(T[0],T[1],T[2]),gt.quaternion.setFromUnitVectors(new W(0,0,1),Hc),gt.rotateZ(Math.random()*6),gt.scale.set(N*(.8+Math.random()*.5),N*(.6+Math.random()*.5),1),gt.updateMatrix(),B.m.setMatrixAt(B.i,gt.matrix),B.i=(B.i+1)%80,B.m.count=Math.max(B.m.count,B.i===0?80:B.i),B.m.instanceMatrix.needsUpdate=!0},e.clearDecals=()=>{f.count=0,u=0;for(let _ in d)d[_].m.count=0,d[_].i=0},e.impact=(_,T,I="#cdb894")=>{e.decal(_,T);for(let N=0;N<5;N++)e.particle(_[0],_[1],_[2],T[0]*2+(Math.random()-.5)*2,T[1]*2+Math.random()*1.5,T[2]*2+(Math.random()-.5)*2,.03+Math.random()*.03,.35+Math.random()*.3,I,6);if(e.particle(_[0],_[1],_[2],T[0]*.5,.4,T[2]*.5,.08,.5,"#d9cdb5",-.5,.25),e.particle(_[0],_[1],_[2],0,0,0,.05,.05,"#fff2a0",0),Math.random()<.45)for(let N=0;N<4;N++)e.particle(_[0],_[1],_[2],T[0]*3+(Math.random()-.5)*5,T[1]*3+Math.random()*3,T[2]*3+(Math.random()-.5)*5,.012,.18+Math.random()*.15,"#ffd060",12)},e.muzzleSmoke=_=>{for(let T=0;T<2;T++)e.particle(_[0],_[1],_[2],(Math.random()-.5)*.3,.25+Math.random()*.2,(Math.random()-.5)*.3,.05,.6+Math.random()*.4,"#bdbab4",-.2,.22)},e.dust=_=>{for(let T=0;T<2;T++)e.particle(_[0]+(Math.random()-.5)*.3,_[1]+.03,_[2]+(Math.random()-.5)*.3,(Math.random()-.5)*.4,.2,(Math.random()-.5)*.4,.05,.5,"#d8c4a0",.2,.15)},e.blood=(_,T,I)=>{let N=I?10:6;for(let B=0;B<N;B++)e.particle(_[0],_[1],_[2],T[0]*2.5+(Math.random()-.5)*2,T[1]*2+Math.random()*1.2,T[2]*2.5+(Math.random()-.5)*2,.035+Math.random()*.04,.4+Math.random()*.3,I?"#b3121a":"#8f1015",8)};let m=new Ds(1,0),M=new Kt({color:"#ffd27a",transparent:!0,opacity:.95,depthWrite:!1});e.muzzleMesh=()=>{let _=new Ye(m,M);return _.visible=!1,_.scale.set(.05,.05,.14),_};let x=new Cr("#ffcf80",0,7,2);n.add(x);let g=0;e.flashLight=(_,T=1)=>{x.position.set(_[0],_[1],_[2]),x.intensity=6*T,g=.05};let b=400,E=new ls(1,0),S=new Hn(E,new an({color:"#b9bcc0",flatShading:!0}),b);S.instanceMatrix.setUsage(Ur),S.count=0,S.frustumCulled=!1,n.add(S),S.instanceColor=new yi(new Float32Array(b*3),3);let P=[];e.smoke=(_,T)=>{let I=[];for(let N=0;N<38;N++){let B=Math.random()*Math.PI*2,k=Math.sqrt(Math.random())*Pt.smokeR*.85,F=Math.random()*2.6;I.push({x:_.x+Math.cos(B)*k,y:_.y+.4+F,z:_.z+Math.sin(B)*k,s:.9+Math.random()*.9,ph:Math.random()*6,c:.82+Math.random()*.14})}P.push({g:_,balls:I})},e.clearSmokes=()=>{P.length=0,C.length=0};let A=260,p=new Ls(.22,.7,4);p.translate(0,.35,0);let v=new Hn(p,new Kt({color:"#ffffff"}),A);v.instanceColor=new yi(new Float32Array(A*3),3),v.instanceMatrix.setUsage(Ur),v.count=0,v.frustumCulled=!1,n.add(v);let C=[],y=new Cr("#ff8a3a",0,9,1.6);n.add(y),e.fire=(_,T,I)=>{let N=[];for(let B=0;B<26;B++){let k=Math.random()*Math.PI*2,F=Math.sqrt(Math.random())*Pt.fireR,U=_.x+Math.cos(k)*F,H=_.z+Math.sin(k)*F,Z=I(T,U,H,_.y+.6);Z<_.y-1.2||Z>_.y+.7||N.push({x:U,y:Z,z:H,ph:Math.random()*6,s:.7+Math.random()*.8})}C.push({g:_,fl:N})};let w=[],R=new ls(1,1);return e.explosion=(_,T)=>{let I=new Ye(R,new Kt({color:"#ffb347",transparent:!0,opacity:.9,depthWrite:!1}));I.position.set(_[0],_[1]+.3,_[2]),n.add(I),w.push({m:I,t:0,life:T?1.1:.45,size:T?9:2.6});for(let N=0;N<(T?70:30);N++){let B=Math.random()*6.28,k=Math.random()*1.4,F=(T?12:7)*(.4+Math.random());e.particle(_[0],_[1]+.3,_[2],Math.cos(B)*Math.cos(k)*F,Math.sin(k)*F,Math.sin(B)*Math.cos(k)*F,.06+Math.random()*.08,.6+Math.random()*.6,Math.random()<.5?"#ffb347":"#3a3530",9)}for(let N=0;N<(T?24:10);N++)e.particle(_[0]+(Math.random()-.5)*2,_[1]+.5+Math.random(),_[2]+(Math.random()-.5)*2,Math.random()-.5,1+Math.random(),Math.random()-.5,.5,2+Math.random()*1.5,"#4a4642",-.3,T?1.6:.8);e.flashLight(_,T?6:3),g=T?.35:.15},e.flashPop=_=>{e.flashLight(_,8),g=.08;for(let T=0;T<14;T++)e.particle(_[0],_[1],_[2],(Math.random()-.5)*6,(Math.random()-.5)*6,(Math.random()-.5)*6,.04,.25,"#ffffff",0)},e.update=(_,T,I)=>{let N=0;for(let F=s.length-1;F>=0;F--){let U=s[F];if(U.life-=_,U.life<=0){s.splice(F,1);continue}U.vy-=U.g*_,U.x+=U.vx*_,U.y+=U.vy*_,U.z+=U.vz*_,U.fy!==null&&U.fy!==void 0&&U.y<U.fy&&(U.y=U.fy,U.vy=Math.abs(U.vy)>.6?-U.vy*.3:0,U.vx*=.5,U.vz*=.5,U.g=U.vy?9.8:0),U.vx*=1-_*1.5,U.vz*=1-_*1.5;let H=U.life/U.max,Z=U.shell?U.s:U.s*(1+U.grow*(1-H)*8)*(U.grow?1:Math.min(1,H*2));gt.position.set(U.x,U.y,U.z),gt.rotation.set(U.x*7,U.y*5,0),U.shell?gt.scale.set(Z*.5,Z*.5,Z*1.6):gt.scale.setScalar(Z),gt.updateMatrix(),i.setMatrixAt(N,gt.matrix),i.setColorAt(N,U.c),N++}i.count=N,i.instanceMatrix.needsUpdate=!0,i.instanceColor&&(i.instanceColor.needsUpdate=!0),N=0;for(let F=l.length-1;F>=0;F--){let U=l[F];if(U.t+=_,U.t>U.life){l.splice(F,1);continue}let H=U.t/U.life,Z=Math.min(U.d,3.5),$=Math.min(U.d,U.d*H+Z*.5),G=Math.max(0,$-Z),ee=(U.b[0]-U.a[0])/U.d,te=(U.b[1]-U.a[1])/U.d,le=(U.b[2]-U.a[2])/U.d;gt.position.set(U.a[0]+ee*$,U.a[1]+te*$,U.a[2]+le*$),gt.lookAt(U.a[0]+ee*($+1),U.a[1]+te*($+1),U.a[2]+le*($+1)),gt.rotateY(Math.PI),gt.scale.set(.012,.012,Math.max(.01,$-G)),gt.updateMatrix(),o.setMatrixAt(N++,gt.matrix)}o.count=N,o.instanceMatrix.needsUpdate=!0,N=0;for(let F=P.length-1;F>=0;F--){let U=P[F],H=U.g;if(H.state!=="active"){P.splice(F,1);continue}let Z=Pt.smokeLife-H.life,$=Math.min(1,Z/1.2),G=Math.min(1,H.life/1.5);for(let ee of U.balls){if(N>=b)break;let te=$*G;gt.position.set(H.x+(ee.x-H.x)*(.3+.7*$),H.y+(ee.y-H.y)*(.3+.7*$)+Math.sin(T*.6+ee.ph)*.08,H.z+(ee.z-H.z)*(.3+.7*$)),gt.rotation.set(ee.ph,T*.05+ee.ph,0),gt.scale.setScalar(Math.max(.01,ee.s*te*1.25)),gt.updateMatrix(),S.setMatrixAt(N,gt.matrix),kc.setScalar(ee.c),S.setColorAt(N,kc),N++}}S.count=N,S.instanceMatrix.needsUpdate=!0,S.instanceColor&&(S.instanceColor.needsUpdate=!0),N=0;let B=0,k=null;for(let F=C.length-1;F>=0;F--){let U=C[F],H=U.g;if(H.state!=="active"||H.life<=0){C.splice(F,1);continue}let Z=Math.min(1,H.life/1.2)*Math.min(1,(Pt.fireLife-H.life)*4+.3);for(let $ of U.fl){if(N>=A)break;let G=.7+Math.sin(T*14+$.ph)*.2+Math.sin(T*23+$.ph*2)*.1;gt.position.set($.x,$.y,$.z),gt.rotation.set(0,$.ph+T,0),gt.scale.set($.s*Z,$.s*Z*G*1.3,$.s*Z),gt.updateMatrix(),v.setMatrixAt(N,gt.matrix),kc.setRGB(1,.45+G*.35,.1),v.setColorAt(N,kc),N++}B+=Z,k=H}v.count=N,v.instanceMatrix.needsUpdate=!0,v.instanceColor&&(v.instanceColor.needsUpdate=!0),k?(y.position.set(k.x,k.y+1,k.z),y.intensity=Math.min(1,B)*(3+Math.sin(T*20)*.8)):y.intensity=0;for(let F=w.length-1;F>=0;F--){let U=w[F];U.t+=_;let H=U.t/U.life;if(H>=1){n.remove(U.m),U.m.material.dispose(),w.splice(F,1);continue}U.m.scale.setScalar(U.size*(.3+.7*Math.sqrt(H))),U.m.material.opacity=.9*(1-H),U.m.material.color.setRGB(1,.7-H*.4,.3-H*.25)}g>0&&(g-=_,g<=0&&(x.intensity=0))},e}function qi(n,e=!1){let t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},a={},o=n[0].morphTargetsRelative,l=new Xt;l.morphTargetsRelative=o;let c=0;for(let h=0;h<n.length;++h){let f=n[h],u=0,d=0;if(t!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let m in f.attributes){if(!i.has(m))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+m+'" attribute exists among all geometries, or in none of them.'),null;r[m]===void 0&&(r[m]=[]),r[m].push(f.attributes[m]),u++}if(u!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let m in f.morphAttributes){if(!s.has(m))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;if(f.morphAttributes[m].length!==n[0].morphAttributes[m].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have the same number of morph targets for the "'+m+'" morph attribute.'),null;a[m]===void 0&&(a[m]=[]),a[m].push(f.morphAttributes[m]),d++}if(d!==s.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of morph attributes."),null;if(e){let m;if(t)m=f.index.count;else if(f.attributes.position!==void 0)m=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,m,h),c+=m}}if(t){let h=0,f=[];for(let u=0;u<n.length;++u){let d=n[u].index;for(let m=0;m<d.count;++m)f.push(d.getX(m)+h);h+=n[u].attributes.position.count}l.setIndex(f)}for(let h in r){let f=P0(r[h]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,f)}for(let h in a){let f=a[h][0].length;if(f!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let u=0;u<f;++u){let d=[];for(let M=0;M<a[h].length;++M)d.push(a[h][M][u]);let m=P0(d);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(m)}}}return l}function P0(n){let e,t,i,s=-1,r=0;for(let c=0;c<n.length;++c){let h=n[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let a=new e(r),o=new Zt(a,t,i),l=0;for(let c=0;c<n.length;++c){let h=n[c];if(h.isInterleavedBufferAttribute){let f=l/t;for(let u=0,d=h.count;u<d;u++)for(let m=0;m<t;m++){let M=h.getComponent(u,m);o.setComponent(u+f,m,M)}}else a.set(h.array,l);l+=h.count*t}return s!==void 0&&(o.gpuType=s),o}var wi=new an({vertexColors:!0,flatShading:!0}),so=new an({vertexColors:!0,flatShading:!0}),Vc=new We;function Ys(n,e){n=n.index?n.toNonIndexed():n,n.computeVertexNormals();let t=n.attributes.position.count,i=new Float32Array(t*3),s=n.attributes.normal.array;Vc.set(e);for(let r=0;r<t;r++){let a=.8+s[r*3+1]*.2+s[r*3]*.06;i[r*3]=Vc.r*a,i[r*3+1]=Vc.g*a,i[r*3+2]=Vc.b*a}n.setAttribute("color",new Zt(i,3));for(let r of Object.keys(n.attributes))r!=="position"&&r!=="normal"&&r!=="color"&&n.deleteAttribute(r);return n}function $e(n,e,t,i=0){let s=new Ar(n.map(a=>new pe(a[0],a[1]))),r=new Na(s,{depth:e,bevelEnabled:!1,steps:1,curveSegments:3});return r.translate(0,0,-e/2),r.rotateY(Math.PI/2),r.translate(i,0,0),Ys(r,t)}function mt(n,e,t,i,s,r=7,a=0,o=n){let l=new os(o,n,t-e,r);return l.rotateX(-Math.PI/2),l.translate(a,i,-(e+t)/2),Ys(l,s)}function ue(n,e,t,i,s,r,a=0){let o=new rn(n,e,t);return o.translate(a,s,-i),Ys(o,r)}var I0=[{name:"Original",b:null,w:null,sw:"#3a3c40"},{name:"Desierto",b:"#b59a6c",w:"#8a6c44",sw:"#b59a6c"},{name:"Bosque",b:"#4f6040",w:"#3d4a30",sw:"#4f6040"},{name:"\xC1rtico",b:"#dfe4ea",w:"#b9c2cc",sw:"#dfe4ea"},{name:"Ne\xF3n",b:"#2b1f47",w:"#ff3fa4",sw:"#ff3fa4"},{name:"Oro",b:"#c9a23a",w:"#6b4a24",sw:"#c9a23a"},{name:"Carmes\xED",b:"#7a1a1a",w:"#2a1a1a",sw:"#9a2020"},{name:"Cobalto",b:"#1f3f8a",w:"#9aa6b8",sw:"#2f5fc0"}],qc=(n,e)=>n&&typeof n=="object"?n[e]|0:n|0,lM="#34373c",Gc="#8b5a2e",cM="#6e4423",Yu="#5a5f66";function F0(n){let e=[],t=(l,c="m")=>e.push([l,c]),i=null,s=[.3,.05],r=(l,c=.28,h=.11,f=.032)=>t($e([[.03,.02],[-.02,.02],[-.02-Math.sin(c)*h,.02-h],[.03-Math.sin(c)*h,.02-h]],f,l),"w");switch(n){case"ak47":case"galil":case"sg553":{let l=n==="ak47"?Gc:n==="galil"?"#4b4635":"#55543f";t($e([[-.07,.02],[.27,.02],[.27,.095],[-.07,.095]],.046,n==="ak47"?"#2c2d2f":n==="galil"?"#3a3830":"#4a4a3e"),"b"),t($e([[-.07,.09],[-.44,.07],[-.46,-.06],[-.41,-.07],[-.2,0],[-.07,.02]],.038,l),"w"),t($e([[.27,.025],[.5,.035],[.5,.09],[.27,.095]],.05,l),"w"),t($e([[.27,.098],[.53,.105],[.53,.125],[.27,.12]],.026,lM),"m"),t(mt(.011,.5,.72,.065,"#1c1d1f")),t(ue(.006,.05,.012,.66,.1,"#1c1d1f")),t(mt(.016,.69,.75,.065,"#1c1d1f",6)),t(ue(.02,.025,.04,.2,.105,"#1c1d1f")),n==="sg553"&&t(mt(.02,-.02,.14,.14,"#1d1d1d",8)),r(n==="ak47"?cM:"#2a2a2a"),t($e([[.09,.02],[.17,.02],[.27,-.17],[.19,-.19]],.032,n==="ak47"?"#7a4f2a":"#2b2b2b"),"w"),t($e([[.04,.02],[.08,.02],[.08,-.025],[.04,-.03]],.008,"#1c1d1f"),"m"),i=[.38,.03],s=[.75,.065];break}case"m4a4":case"m4a1s":case"famas":case"aug":{if(n==="famas"||n==="aug"){let l=n==="aug"?"#5d6a52":"#3c4248";t($e([[-.36,0],[.28,0],[.32,.08],[.28,.11],[-.36,.11],[-.38,.05]],.055,l),"b"),n==="famas"?t($e([[-.2,.11],[.2,.11],[.22,.16],[-.18,.16]],.016,l),"b"):t(mt(.022,-.06,.12,.15,"#1d1d1d",8)),t(mt(.011,.3,.52,.05,"#1c1d1f")),r("#2a2a2a",.2),t($e([[-.18,0],[-.1,0],[-.08,-.15],[-.16,-.16]],.03,"#262626"),"w"),t($e([[.12,0],[.17,0],[.15,-.09],[.11,-.09]],.03,l),"b"),i=[.14,-.03],s=[.52,.05]}else t($e([[-.06,.02],[.24,.02],[.24,.1],[-.06,.1]],.046,"#2f3236"),"b"),t($e([[-.06,.1],[.24,.1],[.24,.12],[-.06,.12]],.028,"#1f2124"),"m"),t(mt(.012,-.32,-.06,.075,"#25272a",6)),t($e([[-.2,.1],[-.38,.1],[-.38,-.02],[-.3,-.02],[-.2,.05]],.036,"#222428"),"w"),t($e([[.24,.025],[.5,.03],[.5,.105],[.24,.105]],.05,"#2a2c30"),"b"),t(ue(.012,.045,.012,.5,.13,"#1c1d1f")),t(ue(.03,.02,.03,0,.135,"#1c1d1f")),n==="m4a1s"?(t(mt(.011,.5,.55,.065,"#1c1d1f")),t(mt(.022,.55,.82,.065,"#1a1b1d",10)),s=[.82,.065]):(t(mt(.011,.5,.7,.065,"#1c1d1f")),t(mt(.015,.66,.72,.065,"#1c1d1f",6)),s=[.72,.065]),r("#232427",.3),t($e([[.09,.02],[.155,.02],[.18,-.15],[.115,-.155]],.03,"#26272a"),"w"),i=[.38,.03];break}case"awp":case"ssg08":case"g3sg1":case"scar20":{let l=n==="awp"?"#3f5b3a":n==="ssg08"?"#3e4c5e":n==="g3sg1"?"#2d302d":"#2b2e33",c=n==="awp"?1.15:1;t($e([[-.52,.04],[-.3,.06],[-.1,.03],[.4,.03],[.42,.09],[-.06,.1*c],[-.22,.1*c],[-.52,.09*c],[-.54,-.07],[-.44,-.08],[-.2,-.05],[-.08,-.06],[-.06,0]],.05*c,l),"b"),t($e([[-.14,.04],[-.24,.04],[-.24,-.02],[-.14,-.02]],.052*c,"#0d0d0d"),"m"),t(mt(.013*c,.4,n==="awp"?1.05:.92,.065,"#1c1d1f",7,0,.011*c)),t(mt(.028*c,-.08,.26,.15*c,"#191a1c",10)),t(mt(.036*c,.2,.3,.15*c,"#191a1c",10,0,.028*c)),t(mt(.033*c,-.14,-.07,.15*c,"#191a1c",10,0,.026*c)),t(ue(.016,.05,.02,.02,.12*c,"#1c1d1f")),t(ue(.016,.05,.02,.18,.12*c,"#1c1d1f")),(n==="awp"||n==="ssg08")&&t(ue(.06,.012,.012,-.04,.09,"#2a2a2a",.04)),t($e(n==="g3sg1"||n==="scar20"?[[.06,.03],[.12,.03],[.13,-.12],[.07,-.12]]:[[.06,.03],[.12,.03],[.12,-.04],[.06,-.04]],.03,"#222"),"w"),i=[.3,.02],s=[n==="awp"?1.05:.92,.065];break}case"p90":{t($e([[-.22,.02],[.28,.02],[.32,.07],[.3,.11],[-.22,.12],[-.25,-.04],[-.12,-.08],[-.05,-.02],[.02,-.08],[.1,-.08],[.12,.02]],.06,"#3a3c3e"),"b"),t($e([[-.18,.12],[.2,.12],[.2,.15],[-.18,.15]],.04,"#2a2a2a"),"m"),t(mt(.011,.3,.38,.06,"#1c1d1f")),i=[.12,-.04],s=[.38,.06];break}case"mac10":{t($e([[-.05,.02],[.2,.02],[.2,.11],[-.05,.11]],.06,"#2a2b2e"),"b"),t(mt(.012,.2,.27,.07,"#1c1d1f")),t($e([[-.01,.02],[.04,.02],[.04,-.2],[-.01,-.2]],.03,"#222"),"w"),t(ue(.004,.06,.14,-.12,.08,"#1c1d1f",.02)),i=[.17,0],s=[.27,.07];break}case"mp9":case"mp7":case"ump":case"mp5":case"bizon":{let l=n==="ump"||n==="mp5"||n==="bizon"?.36:.28;t($e([[-.06,.02],[l,.02],[l,.1],[-.06,.1]],.05,n==="mp7"?"#3a3d3f":"#2a2c30"),"b"),t($e([[-.06,.09],[-.28,.08],[-.28,0],[-.24,0],[-.06,.04]],.03,"#1f2124"),"w"),r("#232427",.25),n==="bizon"?t(mt(.03,.06,.32,-.01,"#2b2b2b",8)):t($e([[.07,.02],[.12,.02],[n==="mp5"?.16:.12,-.15],[n==="mp5"?.11:.07,-.15]],.028,"#222"),"w"),n==="mp5"?(t(mt(.022,l,l+.18,.06,"#1a1b1d",10)),s=[l+.18,.06]):(t(mt(.011,l,l+.06,.06,"#1c1d1f")),s=[l+.06,.06]),i=[l*.75,.01];break}case"nova":case"xm1014":case"sawedoff":case"mag7":{let l=n==="sawedoff"||n==="mag7",c=l?.42:.68;t($e([[-.05,.02],[.18,.02],[.18,.1],[-.05,.1]],.05,"#2b2d30"),"b"),t(mt(.016,.18,c,.075,"#1c1d1f",8)),t(mt(.014,.18,c-.06,.04,"#1f2022",8)),t($e([[.24,.01],[.46,.01],[.46,.06],[.24,.06]],.045,n==="sawedoff"?Gc:"#2a2a2a"),"w"),n==="mag7"&&t($e([[.04,.02],[.12,.02],[.12,-.14],[.04,-.14]],.04,"#2a2a2a"),"w"),n==="sawedoff"?t($e([[-.05,.08],[-.12,.06],[-.18,-.08],[-.1,-.09],[-.05,.02]],.035,Gc),"w"):n!=="mag7"?t($e([[-.05,.09],[-.42,.06],[-.44,-.07],[-.38,-.08],[-.05,.02]],.04,n==="nova"?"#2a2a2a":"#26272a"),"w"):r("#232427"),i=[.35,0],s=[c,.075];break}case"m249":case"negev":{t($e([[-.1,.02],[.32,.02],[.32,.13],[-.1,.13]],.07,"#3a3d36"),"b"),t($e([[-.1,.1],[-.44,.08],[-.44,-.06],[-.1,.02]],.04,"#26272a"),"w"),t(mt(.016,.32,.82,.07,"#1c1d1f",8)),t($e([[.32,.03],[.55,.03],[.55,.1],[.32,.1]],.06,"#2b2b2b"),"b"),t(ue(.1,.12,.13,.12,-.04,"#3b3b2e",.05)),r("#232427"),i=[.45,.02],s=[.82,.07];break}case"deagle":case"r8":{n==="r8"?(t(mt(.012,.03,.24,.07,Yu,8)),t(mt(.03,-.01,.05,.05,Yu,6)),t($e([[-.04,.02],[.04,.02],[.04,.08],[-.04,.08]],.03,Yu),"b"),r(Gc,.35,.1,.03),s=[.24,.07]):(t($e([[-.05,.035],[.2,.035],[.21,.06],[.2,.092],[-.05,.092]],.032,"#9aa0a8"),"b"),t($e([[-.04,0],[.17,0],[.17,.035],[-.04,.035]],.03,"#8a9098"),"b"),t(ue(.012,.012,.01,.195,.1,"#1c1d1f")),r("#26272a",.25,.11,.036),s=[.21,.065]);break}case"zeus":{t($e([[-.04,.02],[.13,.02],[.14,.07],[-.04,.07]],.04,"#2a3a6a"),"b"),t(ue(.045,.035,.02,.14,.045,"#e6c84a")),r("#222",.25,.09),s=[.15,.045];break}case"knife":{t($e([[-.12,-.012],[-.005,-.014],[-.005,.014],[-.12,.012],[-.13,0]],.024,"#1f2023"),"w"),t($e([[-.005,-.03],[.012,-.03],[.012,.024],[-.005,.024]],.03,"#3a3c40"),"m"),t($e([[.012,-.016],[.17,-.012],[.215,.006],[.17,.016],[.06,.016],[.012,.016]],.005,"#c9cfd6"),"b"),t($e([[.03,.016],[.16,.016],[.16,.019],[.03,.019]],.007,"#8d949c"),"m"),s=[.21,0];break}case"he":t(Ys(new ls(.037,0),"#3d4a2c")),t(ue(.016,.02,.016,0,.04,"#999")),t(ue(.008,.05,.016,-.02,.025,"#aaa",.03));break;case"flash":t(mt(.028,-.055,.055,0,"#a0a8b2",8)),t(ue(.016,.02,.016,0,.032,"#777"));break;case"smoke":t(mt(.03,-.065,.065,0,"#5a6670",8)),t(ue(.02,.012,.02,0,.034,"#888"));break;case"decoy":t(mt(.026,-.05,.05,0,"#6b6b5b",6));break;case"incendiary":t(mt(.028,-.06,.06,0,"#a2552c",8));break;case"molotov":t(mt(.03,-.06,.04,0,"#5d7a3a",8)),t(mt(.012,.04,.1,0,"#4d6a2a",6)),t(mt(.016,.1,.13,0,"#e8d6b0",5));break;case"c4":t(ue(.2,.06,.13,0,0,"#b8a27a")),t(ue(.07,.03,.05,.01,.04,"#1d1d1d",.03)),t(ue(.05,.012,.03,.01,.058,"#5bdc6d",.03)),t(ue(.18,.02,.02,-.04,.035,"#a33"));break;case"defuser":t(ue(.16,.05,.1,0,0,"#2d3a55")),t(ue(.04,.04,.12,0,.03,"#d4b13a",.05));break;default:{let l=n==="dualies"?"#9aa0a8":n==="fiveseven"?"#4b4f55":n==="tec9"?"#2d2f33":"#34373c",c=n==="tec9"?.22:.18;t($e([[-.04,.032],[c,.032],[c,.075],[-.03,.075],[-.045,.06]],.028,l),"b"),t($e([[-.035,0],[c-.02,0],[c-.02,.032],[-.035,.032]],.026,"#222428"),"m"),r(n==="cz75"?"#3a2a1a":"#202124",.22,.1,.03),n==="tec9"&&t($e([[.06,0],[.1,0],[.1,-.16],[.06,-.16]],.024,"#202124"),"w"),n==="usp"?(t(mt(.017,c,c+.15,.055,"#1a1b1d",10)),s=[c+.15,.055]):s=[c,.055],t(ue(.008,.012,.008,c-.01,.082,"#111"))}}let a=(l,c,h,f,u,d="#141516",m=.006,M=.006)=>{for(let x=0;x<f;x++)t(ue(u,m,M,l+(c-l)*(f>1?x/(f-1):0),h,d))};if(n==="ak47"||n==="galil"||n==="sg553"){t(mt(.012,.27,.5,.13,"#2a2b2d",8)),t(ue(.05,.03,.03,.26,.122,"#1c1d1f")),t(ue(.008,.012,.03,.08,.06,"#151617",.026)),a(-.05,.22,.098,6,.05,"#232426",.004,.008);for(let l=0;l<4;l++)t(ue(.034,.006,.006,.13+l*.028,-.04-l*.035,"#1e1f21"));t(ue(.05,.016,.02,.48,.03,"#1c1d1f"))}if(n==="m4a4"||n==="m4a1s"){for(let l=0;l<12;l++)t(ue(.03,.008,.006,-.05+l*.026,.126,"#121314"));for(let l=0;l<4;l++)for(let c of[-.026,.026])t(ue(.004,.012,.022,.29+l*.05,.065,"#121314",c));t($e([[.48,.105],[.5,.17],[.505,.17],[.52,.105]],.012,"#1c1d1f"),"m"),t(ue(.03,.012,.03,-.07,.112,"#1c1d1f")),t(mt(.008,.12,.15,.08,"#1c1d1f",6,.03));for(let l=0;l<4;l++)t(ue(.04,.006,.005,-.33+l*.07,.065,"#121314",.016));for(let l=0;l<3;l++)t(ue(.032,.005,.005,.13+l*.03,-.05-l*.03,"#1b1c1e"))}if((n==="famas"||n==="aug")&&(a(-.2,.2,.114,8,.012,"#1a1b1c",.005,.03),t(ue(.02,.03,.06,.25,.06,"#1a1b1c"))),n==="awp"||n==="ssg08"||n==="scar20"||n==="g3sg1"){let l=n==="awp"?1.15:1;t(Ys(new as(.031*l,12).rotateY(Math.PI).translate(0,.15*l,-.302),"#3a6f9a")),t(Ys(new as(.025*l,12).translate(0,.15*l,.142),"#1d3a55")),t(mt(.01,.05,.08,.17*l,"#161718",8,0)),t(ue(.03,.012,.012,-.12,.08,"#1c1d1f",.05)),t(Ys(new Bi(.013,6,4).translate(.06,.08,.12),"#222")),n==="awp"&&(t(ue(.012,.03,.02,.36,.03,"#1c1d1f")),a(.43,.6,.065,4,.012,"#121314",.032,.03))}if(n==="deagle"||["glock","usp","p2000","p250","fiveseven","cz75","dualies","tec9"].includes(n)){let l=n==="deagle"?.092:.075,c=n==="deagle"?-.045:-.035;for(let h=0;h<5;h++)for(let f of[-.017,.017])t(ue(.004,.03,.004,c+.006+h*.009,l-.02,"#0f1011",f*(n==="deagle"?1.05:.95)));t(ue(.012,.016,.01,c-.004,l-.004,"#111"))}if(n==="nova"||n==="xm1014")for(let l=0;l<5;l++)t(ue(.006,.05,.05,.27+l*.04,.035,"#151515"));["mp9","mp7","ump","mp5","bizon","mac10","p90"].includes(n)&&(a(-.02,.18,.105,7,.016,"#121314",.006,.02),t(ue(.024,.012,.012,.02,.07,"#111",.03))),(n==="m249"||n==="negev")&&(a(-.06,.28,.135,10,.02,"#151615",.008,.03),t(mt(.008,.6,.65,.115,"#1c1d1f",6)));let o=et[n];if(o&&o.dmg&&o.cat!=="knife"&&o.cat!=="equip"){let l=o.cat==="pistol";t($e([[.025,0],[.07,0],[.07,-.006],[.06,-.035],[.025,-.035],[.025,-.029],[.057,-.029],[.064,-.006],[.025,-.006]],.008,"#18191b"),"m"),t(ue(.004,.02,.008,.045,-.012,"#0e0e0f")),t(l?ue(.004,.012,.05,.06,.06,"#0b0b0c",.016):ue(.004,.022,.07,.1,.07,"#0b0b0c",.026))}return{parts:e,fore:i,muzzle:s}}var $u=new Map,ro=new Map;function ao(n){if(!ro.has(n)){let e=F0(n);ro.set(n,{fore:e.fore,muzzle:e.muzzle})}return ro.get(n)}function $s(n,e=0){let t=n+":"+e;if($u.has(t))return $u.get(t);let i=F0(n),s=I0[e]||I0[0],r=et[n]&&et[n].dmg,a=i.parts.map(([l,c])=>{if(!s.b||!r||c!=="b"&&c!=="w"||n==="knife"&&c==="w")return l;let h=l.clone(),f=new We(c==="b"?s.b:s.w),u=h.attributes.color.array,d=h.attributes.normal.array;for(let m=0;m<u.length/3;m++){let M=.8+d[m*3+1]*.2+d[m*3]*.06;u[m*3]=f.r*M,u[m*3+1]=f.g*M,u[m*3+2]=f.b*M}return h}),o=qi(a);return $u.set(t,o),ro.has(n)||ro.set(n,{fore:i.fore,muzzle:i.muzzle}),o}function Vr(n,e=0){return new Ye($s(n,e),wi)}var L0={T:[{name:"Terrorista",shirt:"#4e3b2b",pants:"#363b43",vest:"#3b3426",glove:"#1c1c1c",boots:"#2a241d",skin:"#c49670",head:"balaclava",hc:"#1b1b1b"}],CT:[{name:"Contraterrorista",shirt:"#30342f",pants:"#2c302c",vest:"#3e443a",glove:"#151515",boots:"#141414",skin:"#c49670",head:"sas",hc:"#262a26"}]},O0=n=>(L0[n]||L0.T)[0],Zu={};function hM(n){let e=n;if(Zu[e])return Zu[e];let t=O0(n),i=n==="T",s=[ue(.4,.5,.24,0,.27,t.shirt),ue(.5,.12,.26,0,.47,t.shirt),ue(.42,.07,.26,0,.03,"#26221c"),ue(.06,.06,.04,.13,.03,"#8a7a50")];if(i){s.push(ue(.08,.46,.02,.125,.27,"#2e241a",-.12),ue(.08,.46,.02,.125,.27,"#2e241a",.12)),s.push(ue(.36,.2,.27,0,.27,t.vest),ue(.06,.32,.27,0,.38,t.vest,.13),ue(.06,.32,.27,0,.38,t.vest,-.13));for(let m of[-.1,0,.1])s.push(ue(.085,.13,.05,.155,.27,"#4a4130",m),ue(.075,.03,.055,.157,.33,"#2a251c",m));s.push(ue(.05,.1,.04,.13,.42,"#1b1b1b",.12),ue(.01,.06,.01,.13,.5,"#111",.13)),s.push(ue(.3,.3,.1,-.17,.3,"#3a3326"))}else{s.push(ue(.44,.38,.29,0,.32,t.vest),ue(.3,.1,.3,0,.5,t.vest));for(let m of[-.11,0,.11])s.push(ue(.09,.12,.05,.165,.22,"#353a31",m));s.push(ue(.12,.08,.04,.165,.38,"#2a2e27",-.08),ue(.06,.04,.01,.17,.4,"#8a8f84",.09)),s.push(ue(.14,.12,.07,.12,.42,"#20231f",.15)),s.push(ue(.44,.36,.05,-.15,.32,t.vest)),s.push(ue(.12,.1,.245,0,.1,"#3b4038",.1),ue(.1,.08,.245,0,.16,"#24271f",-.12))}let r=qi(s),a=[ue(.22,.25,.23,0,.12,t.skin)],o=t.hc;i?(a.push(ue(.235,.265,.245,0,.125,o)),a.push(ue(.17,.05,.02,.122,.15,t.skin)),a.push(ue(.035,.022,.01,.133,.152,"#111",-.05),ue(.035,.022,.01,.133,.152,"#111",.05)),a.push(ue(.25,.05,.26,0,.255,"#141414")),a.push(ue(.2,.045,.03,.105,.225,"#23303a"),ue(.25,.02,.25,0,.225,"#111"))):(a.push(ue(.27,.13,.28,0,.235,o),ue(.29,.03,.3,0,.18,o)),a.push(ue(.03,.05,.08,0,.21,"#1c1f1b",.145),ue(.03,.05,.08,0,.21,"#1c1f1b",-.145)),a.push(ue(.05,.04,.04,.1,.3,"#111")),a.push(ue(.21,.065,.04,.125,.155,"#0e0e0e"),ue(.17,.04,.01,.146,.156,"#33424a")),a.push(ue(.22,.12,.06,.12,.07,"#1d1f1d")),a.push(ue(.06,.07,.07,.15,.04,"#3c3f3a",-.075),ue(.06,.07,.07,.15,.04,"#3c3f3a",.075)),a.push(ue(.04,.05,.03,.16,.06,"#555")));let l=qi(a),c=qi([ue(.15,.46,.16,0,-.23,t.pants),ue(.04,.12,.1,0,-.2,i?"#2b2f35":t.vest,.09),...i?[]:[ue(.1,.16,.06,.02,-.15,"#20231f",.085)]]),h=qi([ue(.14,.42,.15,0,-.21,t.pants),ue(.16,.1,.06,.06,-.04,i?"#1f1f1f":"#191b19"),ue(.16,.12,.24,.04,-.4,t.boots),ue(.17,.03,.25,.04,-.46,"#0f0f0f")]),f=ue(.12,.12,1,0,0,t.shirt),u=ue(.105,.105,1,0,0,t.shirt),d=qi([ue(.09,.09,.1,0,0,t.glove)]);return Zu[e]={torso:r,head:l,thigh:c,shin:h,upper:f,fore:u,hand:d,S:t}}function Yc(n,e=0){let t=hM(n),i=new Rt,s=new Rt;i.add(s);let r=new Rt;r.position.y=.92,s.add(r);let a=[];for(let f of[-.11,.11]){let u=new Rt;u.position.set(f,0,0),r.add(u),u.add(new Ye(t.thigh,wi));let d=new Rt;d.position.y=-.46,u.add(d),d.add(new Ye(t.shin,wi)),a.push({hip:u,knee:d})}let o=new Rt;r.add(o),o.add(new Ye(t.torso,wi));let l=new Rt;l.position.y=.53,o.add(l),l.add(new Ye(t.head,wi));let c=new Rt;c.matrixAutoUpdate=!0,o.add(c);let h=[];for(let f=0;f<2;f++){let u=new Ye(t.upper,wi),d=new Ye(t.fore,wi),m=new Ye(t.hand,wi);o.add(u,d,m),h.push({u,f:d,h:m})}return i.userData={body:s,hips:r,legs:a,chest:o,neck:l,gun:c,arms:h,gunId:null,phase:0,team:n,si:e},i}function $c(n,e,t=0){let i=n.userData,s=e+":"+t;if(i.gunId!==s&&(i.gunId=s,i.gun.clear(),i.info=e?ao(e):null,i.wid=e,e)){let r=Vr(e,t);if(r.scale.setScalar(1.12),i.gun.add(r),e==="dualies"){let a=Vr(e,t);a.scale.setScalar(1.12),a.position.x=-.24,i.gun.add(a)}}}var no=new W,uM=new W,fM=new W,dM=new W,pM=new W;function B0(n,e,t,i,s,r){no.subVectors(e,n);let a=no.length(),o=(t+i)*.995;a>o&&(no.multiplyScalar(o/a),a=o);let l=uM.copy(n).add(no),c=(t*t-i*i+a*a)/(2*a),h=Math.sqrt(Math.max(0,t*t-c*c)),f=fM.copy(no).normalize(),u=dM.copy(s).sub(n);return u.sub(pM.copy(f).multiplyScalar(u.dot(f))).normalize(),r.copy(n).addScaledVector(f,c).addScaledVector(u,h),l}var mM=new W(0,1,0),N0=new _t;function Xc(n,e,t){let i=e.distanceTo(t);n.position.copy(e).add(t).multiplyScalar(.5),N0.lookAt(e,t,mM),n.quaternion.setFromRotationMatrix(N0),n.scale.set(1,1,Math.max(.01,i))}var Ku=new W,io=new W,Ju=new W,D0=new W;function Zc(n,e,t){let i=n.userData;i.phase+=t*Math.min(e.speed,6)*2.4;let s=Math.min(1,e.speed/3)*.6,r=Math.sin(i.phase)*s,a=e.duck;i.hips.position.y=.92-a*.36;let[o,l]=i.legs;o.hip.rotation.x=r-a*1.2,l.hip.rotation.x=-r-a*1.2,o.knee.rotation.x=Math.max(0,-Math.sin(i.phase)*s)*1.2+a*2,l.knee.rotation.x=Math.max(0,Math.sin(i.phase)*s)*1.2+a*2,e.onGround||(o.hip.rotation.x=-.6,l.hip.rotation.x=.2,o.knee.rotation.x=.9,l.knee.rotation.x=.4),i.chest.rotation.x=a*.2;let c=Math.max(-1.2,Math.min(1.2,e.pitch));i.neck.rotation.x=c*.55;let h=i.info,f=i.wid?et[i.wid]?.cat||i.wid:null,u=f==="pistol"||i.wid==="zeus";if(f==="knife"||f==="grenade"||f==="c4"||i.wid==="defuser")i.gun.position.set(.27,.16,-.22),i.gun.rotation.set(c*.5+.3,0,0);else{let d=u?.42:.28;i.gun.position.set(.11,.4+Math.sin(c)*d,-Math.cos(c)*d),i.gun.rotation.set(c,0,0)}i.gun.updateMatrix();for(let d=0;d<2;d++){let m=i.arms[d],M=d===0;Ku.set(M?.24:-.24,.46,0);let x=null;h&&(M?x=io.set(0,0,f==="knife"?.06:0).applyMatrix4(i.gun.matrix):h.fore&&f!=="knife"?x=io.set(0,h.fore[1]*1.12-.02,-h.fore[0]*1.12).applyMatrix4(i.gun.matrix):i.wid==="dualies"?x=io.set(-.24,0,0).applyMatrix4(i.gun.matrix):u&&(x=io.set(-.04,-.04,.02).applyMatrix4(i.gun.matrix))),x||(x=io.set(M?.3:-.3,.02,-.05+r*.15*(M?-1:1))),D0.set(M?.7:-.7,-.5,.4);let g=B0(Ku,x,.29,.27,D0,Ju);Xc(m.u,Ku,Ju),Xc(m.f,Ju,g),m.h.position.copy(g),m.h.quaternion.copy(m.f.quaternion)}if(i.body.rotation.x=0,i.body.position.y=0,e.dead>0){let d=Math.min(1,e.dead);i.body.rotation.x=d*1.45,i.body.position.y=d*.15}}function z0(){let n=new Rt,e=new Rt;n.add(e);let t=new Rt;e.add(t);let i=[];for(let s=0;s<2;s++){let r=new Ye(new rn(.08,.08,1),so),a=new Ye(new rn(.07,.07,1),so),o=new Rt;n.add(r,a,o),i.push({u:r,f:a,h:o})}return n.userData={hold:e,gun:t,arms:i,id:null,team:null},n}var ju={};function gM(n,e){let t=n+e;if(ju[t])return ju[t];let i=O0(n,e),s=ue(.07,.07,1,0,0,i.shirt),r=qi([ue(.058,.058,1,0,0,i.shirt),ue(.066,.066,.14,.43,0,i.vest)]),a=qi([ue(.05,.065,.07,0,-.01,i.glove),ue(.056,.024,.042,.012,-.038,i.glove),ue(.022,.022,.05,.016,.026,i.glove,.026)]);return ju[t]={sleeve:s,forearm:r,hand:a}}function k0(n,e,t,i=0,s=0){let r=n.userData,a=e+t+i+":"+s;if(r.key===a)return;r.key=a,r.id=e,r.team=t,r.gun.clear();for(let h of r.arms)h.h.clear();if(!e)return;let o=et[e]?.cat||e,l=new Ye($s(e,s),so);if(r.gun.add(l),r.dual=e==="dualies",r.dual){let h=new Ye($s(e,s),so);h.position.set(-.21,0,.02),h.rotation.y=-.08,r.gun.add(h)}r.info=ao(e),r.cat=o;let c=gM(t,i);for(let h of r.arms)h.u.geometry=c.sleeve,h.f.geometry=c.forearm,h.h.add(new Ye(c.hand,so));r.base=e==="dualies"?[.12,-.15,-.48]:o==="pistol"||e==="zeus"?[.15,-.125,-.44]:o==="knife"?[.17,-.18,-.4]:o==="grenade"||o==="c4"||e==="defuser"?[.16,-.17,-.38]:o==="sniper"?[.19,-.22,-.55]:[.19,-.2,-.43],r.rot=o==="knife"?[.35,.55,-.25]:o==="grenade"||o==="c4"?[.1,.2,0]:[.03,.07,0],n.traverse(h=>{h.renderOrder=10,h.frustumCulled=!1})}var Qu=new W,Wc=new W,ef=new W,U0=new W,Hr=new _t;function H0(n){let e=n.userData;if(!e.id)return;e.hold.updateMatrix(),e.gun.updateMatrix(),Hr.multiplyMatrices(e.hold.matrix,e.gun.matrix);let t=e.info||{},i=e.cat;for(let s=0;s<2;s++){let r=e.arms[s],a=s===0;Qu.set(a?.2:-.22,-.3,.12);let o=null;a?o=Wc.set(.004,-.012,i==="knife"?.065:0).applyMatrix4(Hr):t.fore&&i!=="knife"?o=Wc.set(-.004,t.fore[1]-.03,-t.fore[0]).applyMatrix4(Hr):e.dual?o=Wc.set(-.206,-.012,.02).applyMatrix4(Hr):(i==="pistol"||e.id==="zeus")&&(o=Wc.set(-.035,-.065,.025).applyMatrix4(Hr));let l=!!o;if(r.u.visible=r.f.visible=r.h.visible=l,!l)continue;U0.set(a?.6:-.65,-.7,.3);let c=B0(Qu,o,.4,.4,U0,ef);Xc(r.u,Qu,ef),Xc(r.f,ef,c),r.h.position.copy(c),r.h.quaternion.setFromRotationMatrix(Hr),!a&&!e.dual&&r.h.rotateZ(.35)}}var Le=null,Zs=null,tf=null,G0=.55,Yi={x:0,y:0,z:0,yaw:0};function oo(){if(Le){Le.state==="suspended"&&Le.resume();return}try{Le=new(window.AudioContext||window.webkitAudioContext),Zs=Le.createGain(),Zs.gain.value=G0;let n=Le.createDynamicsCompressor();n.threshold.value=-14,n.ratio.value=6,Zs.connect(n),n.connect(Le.destination),tf=Le.createBuffer(1,Le.sampleRate*1.5,Le.sampleRate);let e=tf.getChannelData(0);for(let t=0;t<e.length;t++)e[t]=Math.random()*2-1}catch{Le=null}}function Kc(n){G0=n,Zs&&(Zs.gain.value=n)}function W0(n,e,t,i){Yi.x=n,Yi.y=e,Yi.z=t,Yi.yaw=i}function Nt(n,e=1,t=30){let i=Le.createGain(),s=e,r=0;if(n){let a=n[0]-Yi.x,o=n[1]-Yi.y,l=n[2]-Yi.z,c=Math.hypot(a,o,l);if(s*=1/(1+(c/t)**2*3),c>.5){let h=Math.cos(Yi.yaw),f=-Math.sin(Yi.yaw);r=Math.max(-1,Math.min(1,(a*h+l*f)/c))*.8}}if(s<.004)return null;if(i.gain.value=s,Le.createStereoPanner){let a=Le.createStereoPanner();a.pan.value=r,i.connect(a),a.connect(Zs)}else i.connect(Zs);return i}function kt(n,e,t,i,s,r=.7,a="lowpass",o=.002,l=1){let c=Le.createBufferSource();c.buffer=tf,c.playbackRate.value=.8+Math.random()*.4;let h=Le.createBiquadFilter();h.type=a,h.Q.value=r,h.frequency.setValueAtTime(i,e),h.frequency.exponentialRampToValueAtTime(Math.max(30,s),e+t);let f=Le.createGain();f.gain.setValueAtTime(1e-4,e),f.gain.exponentialRampToValueAtTime(l,e+o),f.gain.exponentialRampToValueAtTime(1e-4,e+t),c.connect(h),h.connect(f),f.connect(n),c.start(e,Math.random()),c.stop(e+t+.05)}function Jt(n,e,t,i,s,r="sine",a=.5,o=.003){let l=Le.createOscillator();l.type=r,l.frequency.setValueAtTime(i,e),s!==i&&l.frequency.exponentialRampToValueAtTime(Math.max(20,s),e+t);let c=Le.createGain();c.gain.setValueAtTime(1e-4,e),c.gain.exponentialRampToValueAtTime(a,e+o),c.gain.exponentialRampToValueAtTime(1e-4,e+t),l.connect(c),c.connect(n),l.start(e),l.stop(e+t+.05)}var V0={pistol:{f:2400,d:.18,b:160,v:.8},smg:{f:2e3,d:.16,b:130,v:.75},rifle:{f:1600,d:.26,b:95,v:1},sniper:{f:1200,d:.55,b:70,v:1.25},heavy:{f:1300,d:.32,b:80,v:1.05},equip:{f:4e3,d:.3,b:300,v:.6}};function nf(n,e,t,i){if(!Le)return;let s=V0[n]||V0.rifle,r=Le.currentTime,a=Nt(e,(t?.35:s.v)*(e?1:.6),t?12:60);if(a){if(n==="equip"){kt(a,r,.35,6e3,3e3,2,"bandpass",.002,.7),Jt(a,r,.3,90,60,"sawtooth",.4);return}if(t){kt(a,r,.09,1800,500,1,"lowpass",.001,.9),Jt(a,r,.05,300,120,"triangle",.3);return}kt(a,r,s.d,s.f*(i?.7:1),200,.9,"lowpass",.001,1),kt(a,r,.04,6e3,2500,.8,"highpass",.001,.45),Jt(a,r,s.d*.7,s.b*1.6,s.b*.5,"sine",.9),e&&kt(a,r+.05,s.d*2.5,700,150,.5,"lowpass",.02,.18)}}function sf(n,e=1){if(!Le)return;let t=Nt(n,.5*e,9);if(!t)return;let i=Le.currentTime;kt(t,i,.06,900+Math.random()*400,200,1.2,"lowpass",.002,.7),Jt(t,i,.04,90,60,"sine",.25)}function X0(n){if(!Le)return;let e=Nt(n,.6,10);if(!e)return;let t=Le.currentTime;kt(e,t,.1,700,120,1,"lowpass",.002,.9)}function lo(n,e=2200,t=.4){if(!Le)return;let i=Nt(n,t,8);if(!i)return;let s=Le.currentTime;kt(i,s,.03,e,e*.5,3,"bandpass",.001,.9)}function q0(n){if(!Le)return;let e=Le.currentTime,t=Nt(n,.45,8);t&&(kt(t,e,.04,1500,700,3,"bandpass",.001,.8),kt(t,e+.35,.05,2600,1300,4,"bandpass",.001,.9),kt(t,e+.8,.05,1800,900,4,"bandpass",.001,.9))}function Jc(n,e){if(!Le)return;let t=Le.currentTime,i=Nt(null,.45);n?Jt(i,t,e?.25:.12,e?2900:1500,e?2700:900,"triangle",.5):kt(i,t,.07,900,300,1,"lowpass",.002,.6)}function Y0(){if(!Le)return;let n=Le.currentTime,e=Nt(null,.6);kt(e,n,.12,600,150,1,"lowpass",.002,.9),Jt(e,n,.1,140,70,"sine",.6)}function $0(){if(!Le)return;let n=Le.currentTime,e=Nt(null,.25);Jt(e,n,.08,1300,1300,"square",.25),Jt(e,n+.07,.12,1750,1750,"square",.25)}function rf(n,e){if(!Le)return;let t=Le.currentTime,i=Nt(n,e?1.6:1.2,e?200:70);i&&(kt(i,t,e?2.4:1.2,1800,60,.6,"lowpass",.004,1),Jt(i,t,e?1.4:.7,80,30,"sine",1))}function Z0(n){if(!Le)return;let e=Le.currentTime,t=Nt(n,1.1,50);t&&(kt(t,e,.4,5e3,800,.7,"lowpass",.002,1),Jt(t,e,.2,120,50,"sine",.8))}function K0(n){if(!Le||n<.3)return;let e=Le.currentTime,t=Nt(null,.12);Jt(t,e,n,3200,3150,"sine",.3,.02)}function af(n){if(!Le)return;let e=Le.currentTime,t=Nt(n,.7,25);t&&kt(t,e,2.2,2500,500,.4,"highpass",.05,.5)}function J0(n){if(!Le)return;let e=Le.currentTime,t=Nt(n,.9,25);t&&(kt(t,e,1.2,1200,300,.6,"lowpass",.01,.9),kt(t,e+.05,.3,3e3,1500,2,"bandpass",.001,.5))}function j0(n){if(!Le)return;let e=Le.currentTime,t=Nt(n,.25,12);t&&kt(t,e,.25,900+Math.random()*500,300,1,"lowpass",.02,.6)}function Q0(n){if(!Le)return;let e=Le.currentTime,t=Nt(n,.5,15);t&&(Jt(t,e,.06,900,500,"triangle",.4),kt(t,e,.04,2500,1200,2,"bandpass",.001,.4))}function of(){if(!Le)return;let n=Le.currentTime,e=Nt(null,.4);kt(e,n,.18,400,1600,1,"bandpass",.05,.5)}function lf(n,e){if(!Le)return;let t=Le.currentTime,i=Nt(n,.6,40);i&&Jt(i,t,.12,e?2600:2100,e?2600:2100,"square",.2)}function cf(){if(!Le)return;let n=Le.currentTime,e=Nt(null,.3);Jt(e,n,.06,1400+Math.random()*600,1400,"square",.15)}function hf(n){if(!Le)return;let e=Le.currentTime,t=Nt(n,.6,15);t&&(kt(t,e,.2,3e3,1500,3,"bandpass",.001,.8),Jt(t,e+.1,.25,600,900,"triangle",.3))}function em(){if(!Le)return;let n=Le.currentTime,e=Nt(null,.35);Jt(e,n,.06,900,900,"triangle",.4),Jt(e,n+.05,.08,1350,1350,"triangle",.35)}function tm(){if(!Le)return;let n=Le.currentTime,e=Nt(null,.3);Jt(e,n,.15,220,180,"square",.25)}function nm(){if(!Le)return;let n=Le.currentTime,e=Nt(null,.35);kt(e,n,.08,2e3,900,2,"bandpass",.002,.8)}function im(n){if(!Le)return;let e=Le.currentTime,t=Nt(null,.32);(n?[523,659,784,1047]:[440,415,392,330]).forEach((s,r)=>{Jt(t,e+r*.11,.5,s,s,"triangle",.35),Jt(t,e+r*.11,.5,s/2,s/2,"sawtooth",.08)})}function uf(){if(!Le)return;let n=Le.currentTime,e=Nt(null,.25);[392,523].forEach((t,i)=>Jt(e,n+i*.12,.25,t,t,"triangle",.35))}var Dt=n=>document.getElementById(n),yM=n=>String(n).replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]);function sm(n){let{G:e,store:t}=n,i={},s={t:t.get("ls:look",{t:-1}).t??-1},r=new ci,a=document.createElement("canvas");a.width=2,a.height=256;{let y=a.getContext("2d"),w=y.createLinearGradient(0,0,0,256);w.addColorStop(0,"#0f2a6b"),w.addColorStop(.55,"#2d63d6"),w.addColorStop(1,"#7fc4ff"),y.fillStyle=w,y.fillRect(0,0,2,256)}let o=new Fi(a);o.colorSpace=gn,r.background=o;let l=new sn(30,innerWidth/innerHeight,.1,100);r.add(new _i("#cfe2ff","#2a3a6a",1.4));let c=new vi("#fff4e0",2.6);c.position.set(2,4,3),r.add(c);let h=new vi("#7fd0ff",2.2);h.position.set(-3,2.5,-3),r.add(h);let f=new Ye(new os(.75,.85,.18,24),new an({color:"#1b2f66"}));f.position.y=-.09,r.add(f);let u=new Ye(new Da(.8,.025,6,40),new Kt({color:"#7fe0ff"}));u.rotation.x=Math.PI/2,u.position.y=.01,r.add(u);let d=new Rt;r.add(d);for(let y=0;y<14;y++){let w=new Ye(new Zn(.5,30),new Kt({color:"#9fd4ff",transparent:!0,opacity:.06,depthWrite:!1}));w.rotation.z=y/14*Math.PI,d.add(w)}d.position.set(0,1.2,-6);let m=new Rt;r.add(m);let M=null,x="",g=.4,b=null,E=0;function S(){return s.t===1?"CT":"T"}function P(){let y=S(),w=y==="T"?"ak47":"m4a4";y!==x&&(x=y,m.clear(),M=Yc(y,0),$c(M,w,0),m.add(M))}i.render=(y,w)=>{E+=w,b||(g+=w*.25),m.rotation.y=Math.PI+Math.sin(g)*.6+.35,M&&Zc(M,{speed:0,duck:0,pitch:Math.sin(E*1.3)*.04-.05,onGround:!0,dead:0},w),d.rotation.z+=w*.05;let R=innerWidth/innerHeight;l.aspect=R,l.fov=R<1?46:30,l.updateProjectionMatrix(),l.position.set(R<1?0:.15,1.15,5.2),l.lookAt(R<1?0:.15,.95,0),y.setClearColor("#0f2a6b"),y.clear(),y.render(r,l)},addEventListener("pointerdown",y=>{e.phase==="lobby"&&y.target.tagName==="CANVAS"&&(b={x:y.clientX,s:g})}),addEventListener("pointermove",y=>{b&&(g=b.s-(y.clientX-b.x)*.01)}),addEventListener("pointerup",()=>{b=null});function A(){t.set("ls:look",s),n.sendPref({t:s.t})}i.myPref=()=>({t:s.t}),i.show=()=>{Dt("lobby").hidden=!1;for(let y of document.querySelectorAll("#lobby nav button"))y.onclick=()=>{y.dataset.tab==="settings"?(y.classList.add("on"),n.openSettings(()=>C())):C()};for(let y of document.querySelectorAll("[data-pref]"))y.onclick=()=>{s.t=+y.dataset.pref,A(),C()};Dt("goBtn").onclick=()=>{n.isHost()&&p()&&n.onStart()},Dt("modeBtn").onclick=()=>{Dt("modeSel").hidden=!1,C()},Dt("modeClose").onclick=()=>{Dt("modeSel").hidden=!0},v(),C()},i.hide=()=>{Dt("lobby").hidden=!0,Dt("modeSel").hidden=!0},i.refresh=()=>{Dt("lobby").hidden||C()};function p(){let y=(n.ctx().players||[]).length;return e.cfg.bots||y>=2}function v(){let y=Dt("modes");y.innerHTML="";for(let T of[2,3,5]){let I=document.createElement("div");I.className="mode",I.dataset.s=T,I.innerHTML=`<b>${T}<i>VS</i>${T}</b><small>${T===5?"Cl\xE1sico competitivo":T===3?"Escuadra":"Duelo de parejas"}</small>`,I.onclick=()=>{n.isHost()&&(e.cfg.size=T,n.pushCfg())},y.appendChild(I)}let w=Dt("botsSeg");w.innerHTML="";for(let[T,I]of[[!0,"Con bots"],[!1,"Sin bots"]]){let N=document.createElement("button");N.textContent=I,N.dataset.v=T,N.onclick=()=>{n.isHost()&&(e.cfg.bots=T,n.pushCfg())},w.appendChild(N)}let R=(T,I,N)=>{T.innerHTML="";for(let[B,k]of I){let F=document.createElement("button");F.textContent=k,F.dataset.k=B,F.onclick=()=>{n.isHost()&&(e.cfg[N]=B,n.pushCfg())},T.appendChild(F)}};R(Dt("len"),Object.entries(n.LENGTHS).map(([T,I])=>[T,I.name+" \xB7 a "+I.win]),"len"),R(Dt("diff"),Object.entries(n.DIFF).map(([T,I])=>[T,I.name]),"diff");let _=Dt("maps");_.innerHTML="";for(let T of n.MAPS){let I=document.createElement("div");I.className="mcard",I.dataset.id=T.id;let N=document.createElement("canvas");N.width=200,N.height=200,I.appendChild(N);let B=document.createElement("div");B.className="mn",B.innerHTML=T.name+"<small>"+T.sub+"</small>",I.appendChild(B),I.onclick=()=>{n.isHost()&&(e.cfg.map=T.id,t.set("ls:map",T.id),n.pushCfg())},_.appendChild(I),n.mapThumb(T.id).then(k=>{if(k){let F=N.getContext("2d");F.fillStyle="#0b1530",F.fillRect(0,0,200,200),F.drawImage(k,0,0,200,200)}})}}function C(){let y=n.ctx(),w=n.isHost(),R=n.myId();for(let U of document.querySelectorAll("#lobby nav button"))U.classList.toggle("on",U.dataset.tab==="play");Dt("meName").textContent=y.me.name,Dt("roomInfo").textContent=y.online?`Sala ${y.roomCode||""} \xB7 ${(y.players||[]).length} jugador${(y.players||[]).length===1?"":"es"}`:"Pr\xE1ctica sin conexi\xF3n";for(let U of document.querySelectorAll("[data-pref]"))U.classList.toggle("on",+U.dataset.pref===s.t);let _=(y.players||[]).map(U=>({...U,pr:e.prefs[U.id]||{}})),T=[0,0],I={};for(let U of _){let H=U.pr.t??-1;(H===0||H===1)&&(I[U.id]=H,T[H]++)}for(let U of _.slice().sort((H,Z)=>H.slot-Z.slot))if(I[U.id]===void 0){let H=T[0]<=T[1]?0:1;I[U.id]=H,T[H]++}let N=e.cfg.bots?Math.max(T[0],T[1],e.cfg.size):Math.max(T[0],T[1]);Dt("party").innerHTML="<h4>GRUPO</h4>"+_.map(U=>`<div class="pm ${I[U.id]?"ct":"t"} ${U.id===R?"me":""}"><i></i><span>${yM(U.name)}</span><small>${I[U.id]?"CT":"T"}${(U.pr.t??-1)===-1?" \xB7 auto":""}${U.id===y.hostId?" \xB7 \u{1F451} host":""}</small></div>`).join("")+(e.cfg.bots?`<div class="pm bot"><i></i><span>+ ${Math.max(0,N*2-_.length)} bots</span><small>${n.DIFF[e.cfg.diff].name}</small></div>`:"");let B=n.MAPS.find(U=>U.id===e.cfg.map)||n.MAPS[0];Dt("modeTitle").textContent=`${N} VS ${N}`,Dt("modeSub").textContent=`${B.name} \xB7 ${e.cfg.bots?"con bots":"sin bots"} \xB7 ${n.LENGTHS[e.cfg.len].name}`,n.mapThumb(B.id).then(U=>{if(!U)return;let H=Dt("modeMap"),Z=H.getContext("2d");Z.fillStyle="#0b1530",Z.fillRect(0,0,H.width,H.height),Z.drawImage(U,0,0,H.width,H.height)}),Dt("modeBtn").textContent=w?"CAMBIAR MODO":"VER MODO";let k=Dt("goBtn"),F=p();k.disabled=!w||!F,k.innerHTML=w?F?"JUGAR":"FALTAN JUGADORES":"ESPERANDO AL HOST",Dt("goNote").textContent=!F&&w?"Sin bots hacen falta al menos 2 jugadores en la sala.":w?"":"El host elige el modo y empieza la partida.";for(let U of document.querySelectorAll("#modes .mode"))U.classList.toggle("on",+U.dataset.s===e.cfg.size);for(let U of document.querySelectorAll("#botsSeg button"))U.classList.toggle("on",String(e.cfg.bots)===U.dataset.v);for(let U of document.querySelectorAll("#len button"))U.classList.toggle("on",U.dataset.k===e.cfg.len);for(let U of document.querySelectorAll("#diff button"))U.classList.toggle("on",U.dataset.k===e.cfg.diff);for(let U of document.querySelectorAll(".mcard"))U.classList.toggle("on",U.dataset.id===e.cfg.map);Dt("modeSel").classList.toggle("ro",!w),P()}return i}var jc="ls:cfg",rm={sens:2.1,invert:!1,xStatic:!1,xColor:"#5dff6a",xSize:8,xGap:4,xThick:2,xDot:!1,xOutline:!0,vol:.8,quality:2},_M=["#5dff6a","#00e5ff","#ffe14a","#ff4a4a","#ff4af0","#ffffff"];function am(n,e){let t=Object.assign({},rm,n.get(jc,{})),i=n.get("ls:sens",null);i&&!n.get(jc,null)&&(t.sens=+(i*1e3).toFixed(2));let s=n.get("ls:q",null);s!==null&&!n.get(jc,null)&&(t.quality=s);let r=()=>{n.set(jc,t),e&&e(t)},a=document.createElement("div");a.id="settings",a.className="fn-overlay",a.hidden=!0,document.body.appendChild(a);let o=null,l=(M,x)=>`<div class="st-row"><label>${M}</label><div class="st-c">${x}</div></div>`,c=(M,x,g,b,E=S=>S)=>`<input type="range" data-k="${M}" min="${x}" max="${g}" step="${b}" value="${t[M]}"><output data-o="${M}">${E(t[M])}</output>`,h=(M,x,g)=>`<div class="seg" data-t="${M}"><button data-v="1" class="${t[M]?"on":""}">${x}</button><button data-v="0" class="${t[M]?"":"on"}">${g}</button></div>`,f={sens:M=>(+M).toFixed(2),vol:M=>Math.round(M*100)+"%",xSize:M=>M,xGap:M=>M,xThick:M=>M};function u(){a.innerHTML=`<div class="ms-box st-box">
      <h2>CONFIGURACI\xD3N</h2>
      <div class="st-cols">
        <div>
          <h3>MOUSE</h3>
          ${l("Sensibilidad",c("sens",.4,8,.05,f.sens))}
          ${l("Invertir eje Y",h("invert","S\xED","No"))}
          <h3>SONIDO</h3>
          ${l("Volumen",c("vol",0,1,.05,f.vol))}
          <h3>GR\xC1FICOS</h3>
          ${l("Sombras",`<div class="seg" data-q><button data-v="0" class="${t.quality===0?"on":""}">No</button><button data-v="1" class="${t.quality===1?"on":""}">Bajas</button><button data-v="2" class="${t.quality===2?"on":""}">Altas</button></div>`)}
          <p class="note">Las sombras se aplican al cargar la pr\xF3xima partida.</p>
        </div>
        <div>
          <h3>MIRA</h3>
          <div class="st-prev"><div id="stX" class="xh"><i class="l"></i><i class="r"></i><i class="u"></i><i class="d"></i><b></b></div></div>
          ${l("Estilo",h("xStatic","Est\xE1tica","Din\xE1mica"))}
          ${l("Color",`<div class="st-cols6">${_M.map(M=>`<button class="sw ${t.xColor===M?"on":""}" data-c="${M}" style="background:${M}"></button>`).join("")}</div>`)}
          ${l("Largo",c("xSize",2,16,1,f.xSize))}
          ${l("Separaci\xF3n",c("xGap",0,12,1,f.xGap))}
          ${l("Grosor",c("xThick",1,5,1,f.xThick))}
          ${l("Punto central",h("xDot","S\xED","No"))}
          ${l("Contorno",h("xOutline","S\xED","No"))}
        </div>
      </div>
      <div class="st-btns"><button class="fn-play small ghost" id="stReset">VALORES POR DEFECTO</button><button class="fn-play small" id="stClose">LISTO</button></div>
    </div>`;for(let M of a.querySelectorAll("input[type=range]"))M.oninput=()=>{let x=M.dataset.k;t[x]=+M.value,a.querySelector(`[data-o="${x}"]`).textContent=(f[x]||(g=>g))(t[x]),r(),d()};for(let M of a.querySelectorAll("[data-t]"))for(let x of M.children)x.onclick=()=>{t[M.dataset.t]=x.dataset.v==="1",r(),u()};for(let M of a.querySelectorAll("[data-q] button"))M.onclick=()=>{t.quality=+M.dataset.v,r(),u()};for(let M of a.querySelectorAll("[data-c]"))M.onclick=()=>{t.xColor=M.dataset.c,r(),u()};a.querySelector("#stReset").onclick=()=>{Object.assign(t,rm),r(),u()},a.querySelector("#stClose").onclick=()=>m(),d()}function d(){ff(a.querySelector("#stX"),t,t.xGap)}function m(){a.hidden=!0;let M=o;o=null,M&&M()}return{S:t,open(M){o=M||null,u(),a.hidden=!1},close:m,isOpen:()=>!a.hidden}}function ff(n,e,t){if(!n)return;let i=Math.round(t),s=e.xSize,r=e.xThick,a=[i,s,r,e.xColor,e.xDot,e.xOutline].join();if(n._k===a)return;n._k=a;let[o,l,c,h,f]=n.children,u=e.xOutline?"0 0 0 1px rgba(0,0,0,.7)":"none",d=-Math.floor(r/2);for(let m of[o,l,c,h])m.style.background=e.xColor,m.style.boxShadow=u,m.style.display=s>0?"":"none";o.style.cssText+=`;width:${s}px;height:${r}px;top:${d}px;left:${-(i+s)}px`,l.style.cssText+=`;width:${s}px;height:${r}px;top:${d}px;left:${i}px`,c.style.cssText+=`;width:${r}px;height:${s}px;left:${d}px;top:${-(i+s)}px`,h.style.cssText+=`;width:${r}px;height:${s}px;left:${d}px;top:${i}px`,f.style.cssText=`display:${e.xDot?"block":"none"};position:absolute;width:${r}px;height:${r}px;left:${d}px;top:${d}px;background:${e.xColor};box-shadow:${u}`}var yn=null,df={},vM=new Kt({color:"#ffffff"});function MM(n,e,t,i){e.fillStyle="#fff",e.strokeStyle="#fff",e.lineWidth=3,e.lineJoin="round";let s=t/2,r=i/2,a=(o,l)=>{e.beginPath(),e.moveTo(o-12*l,r-16*l),e.lineTo(o-5*l,r-16*l),e.lineTo(o,r-10*l),e.lineTo(o+5*l,r-16*l),e.lineTo(o+12*l,r-16*l),e.lineTo(o+15*l,r-4*l),e.lineTo(o+13*l,r+18*l),e.lineTo(o-13*l,r+18*l),e.lineTo(o-15*l,r-4*l),e.closePath(),e.fill(),e.fillStyle="#000",e.font=`bold ${10*l}px sans-serif`,e.textAlign="center",e.fillText("100",o,r+8*l),e.fillStyle="#fff"};if(n==="vest")a(s,1);else if(n==="vesthelm")a(s+10,1),e.beginPath(),e.arc(s-14,r+6,11,Math.PI,0),e.lineTo(s-1,r+8),e.lineTo(s-27,r+8),e.closePath(),e.fill();else if(n==="defuser")e.beginPath(),e.moveTo(s-20,r+8),e.quadraticCurveTo(s,r-14,s+18,r-4),e.stroke(),e.beginPath(),e.moveTo(s-20,r-6),e.quadraticCurveTo(s,r+14,s+18,r+4),e.stroke(),e.beginPath(),e.arc(s-2,r+1,3,0,7),e.fill();else if(n==="flash"||n==="smoke"||n==="decoy"||n==="incendiary"){let o=n==="smoke"?30:24,l=n==="smoke"?13:12;if(e.beginPath(),e.roundRect(s-l/2,r-o/2+4,l,o,3),e.fill(),e.fillRect(s-3,r-o/2,6,5),e.fillRect(s+2,r-o/2+1,10,3),e.fillRect(s+9,r-o/2+1,3,12),e.fillStyle="#000",n==="smoke")for(let c=0;c<3;c++)e.fillRect(s-4,r-6+c*7,8,2);n==="decoy"&&e.fillRect(s-4,r,8,3),n==="flash"&&e.fillRect(s-l/2,r+2,l,2)}else if(n==="he"){e.beginPath(),e.ellipse(s,r+4,11,13,0,0,7),e.fill(),e.fillRect(s-3,r-12,6,6),e.fillRect(s+2,r-11,9,3),e.fillRect(s+8,r-11,3,13),e.fillStyle="#000";for(let o=-1;o<=1;o++)e.fillRect(s-10,r+4+o*6,20,1.5)}else if(n==="molotov")e.beginPath(),e.moveTo(s-3,r-16),e.lineTo(s+3,r-16),e.lineTo(s+3,r-6),e.lineTo(s+9,r),e.lineTo(s+9,r+16),e.lineTo(s-9,r+16),e.lineTo(s-9,r),e.lineTo(s-3,r-6),e.closePath(),e.fill(),e.fillRect(s-5,r-22,4,7);else if(n==="c4")e.fillRect(s-20,r-9,40,18),e.fillStyle="#000",e.fillRect(s-4,r-6,14,7);else if(n==="hs")e.beginPath(),e.arc(s,r-2,10,0,7),e.fill(),e.fillStyle="#000",e.fillRect(s-7,r-4,5,4),e.fillRect(s+2,r-4,5,4),e.fillStyle="#fff",e.fillRect(s-6,r+6,12,6);else if(n==="world"||n==="skull")e.beginPath(),e.arc(s,r-3,10,0,7),e.fill(),e.fillRect(s-6,r+4,12,7);else if(n==="fire")e.beginPath(),e.moveTo(s,r-16),e.quadraticCurveTo(s+14,r,s+8,r+14),e.lineTo(s-8,r+14),e.quadraticCurveTo(s-14,r,s,r-16),e.fill();else return!1;return!0}function ys(n,e=160,t=56){let i=n+e+"x"+t;if(df[i])return df[i];let s=document.createElement("canvas");s.width=e,s.height=t;let r=s.getContext("2d");if(!MM(n,r,e,t))try{yn||(yn={r:new Hs({alpha:!0,antialias:!0,preserveDrawingBuffer:!0}),s:new ci,c:new zi(-1,1,1,-1,.01,10)},yn.c.position.set(3,0,0),yn.c.lookAt(0,0,0),yn.r.setClearColor(0,0)),yn.r.setSize(e,t);let a=$s(n);a.computeBoundingBox();let o=a.boundingBox,l=new Ye(a,vM),c=o.max.z-o.min.z,h=o.max.y-o.min.y,f=e/t,u=Math.max(c/2/f,h/2)*1.12;yn.c.left=-u*f,yn.c.right=u*f,yn.c.top=u,yn.c.bottom=-u,yn.c.updateProjectionMatrix(),l.position.set(0,-(o.max.y+o.min.y)/2,-(o.max.z+o.min.z)/2),yn.s.add(l),yn.r.render(yn.s,yn.c),yn.s.remove(l),r.drawImage(yn.r.domElement,0,0)}catch{}return df[i]=s.toDataURL()}var _s=n=>document.getElementById(n),vs=n=>String(n).replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]),Xn=(n,e)=>{n._v!==e&&(n._v=e,n.textContent=e)},Gr=n=>et[n]?et[n].name:n==="c4"?"C4":n==="world"?"ca\xEDda":n;function pf(n){let e=n.n,t=document.createElement("canvas");t.width=e,t.height=e;let i=t.getContext("2d"),s=i.createImageData(e,e),r=s.data,a=1e9,o=-1e9;for(let h=0;h<e*e;h++)if(n.cls[0][h]===1||n.cls[0][h]===2){let f=n.top[0][h];f<a&&(a=f),f>o&&(o=f)}let l=Math.max(3,Math.min(o-a,14));for(let h=0;h<e*e;h++){let f=0,u=0,d=0,m=0,M=n.cls[0][h],x=n.top[0][h];if((M===1||M===2)&&!isNaN(x)&&x-a<l+1){let b=Math.max(0,Math.min(1,(x-a)/l));f=70+b*130,u=78+b*118,d=88+b*80,m=235,n.L>1&&!isNaN(n.top[1][h])&&(f*=.72,u*=.72,d*=.8)}else if(M===3){let b=!1;for(let E of[1,-1,e,-e]){let S=h+E;S>=0&&S<e*e&&n.cls[0][S]===1&&(b=!0)}b&&(f=u=d=22,m=230)}n.flags[h]&12&&m&&(f=f*.6+120,u=u*.6+40,d*=.6),r[h*4]=f,r[h*4+1]=u,r[h*4+2]=d,r[h*4+3]=m}i.putImageData(s,0,0);let c=n.info.zones;i.font="bold 34px Rajdhani, sans-serif",i.textAlign="center",i.textBaseline="middle";for(let h of["A","B"]){let f=c[h];f&&(i.fillStyle="#000",i.fillText(h,(f[0]+f[2])/2+1,(f[1]+f[3])/2+1),i.fillStyle="#ffd25a",i.fillText(h,(f[0]+f[2])/2,(f[1]+f[3])/2))}return t}function om(n,e,t,i,s,r,a){let o=n.getContext("2d"),l=n.width,c=1.25;o.clearRect(0,0,l,l),o.save(),o.beginPath(),o.rect(0,0,l,l),o.clip(),o.translate(l/2,l/2),o.rotate(i.yaw),o.scale(c,c);let h=i.x/t.cell,f=i.z/t.cell;o.drawImage(e,-h,-f);let u=(d,m,M,x=3.4)=>{o.fillStyle=M,o.beginPath(),o.arc(d/t.cell-h,m/t.cell-f,x/c,0,7),o.fill(),o.strokeStyle="#000",o.lineWidth=1/c,o.stroke()};if(r&&(r.s==="planted"||r.s==="dropped")&&(a==="T"||r.s==="planted"&&r.seen)){o.fillStyle=r.s==="planted"?"#ff4038":"#ffb03a";let d=r.x/t.cell-h,m=r.z/t.cell-f;o.fillRect(d-4/c,m-3/c,8/c,6/c)}for(let d of s)u(d.x,d.z,d.col,d.me?0:3.4);o.restore(),o.fillStyle="#fff",o.beginPath(),o.moveTo(l/2,l/2-7),o.lineTo(l/2+5,l/2+5),o.lineTo(l/2,l/2+2),o.lineTo(l/2-5,l/2+5),o.closePath(),o.fill()}var qe={el:{},init(){for(let n of["hud","moneyV","moneyAdd","scT","scCT","pipsT","pipsCT","clock","clockV","bombIco","feed","hpV","arV","helmV","hpB","arB","ammo","wname","magV","resV","slots","xhair","hitmark","centerMsg","prog","progL","progB","hint","dmgDir","scope","flash","hurt","spec","banner","ban1","ban2","buyHint","zoneName","board"])this.el[n]=_s(n)},money(n){Xn(this.el.moneyV,String(n))},moneyDelta(n,e){if(!n)return;let t=document.createElement("div");t.className=n<0?"neg":"",t.textContent=(n>0?"+$":"-$")+Math.abs(n)+(e?"  "+e:""),this.el.moneyAdd.appendChild(t),setTimeout(()=>t.remove(),2300)},vitals(n,e,t){Xn(this.el.hpV,String(n)),Xn(this.el.arV,String(e)),this.el.helmV.hidden=!t,this.el.hpV.parentElement.classList.toggle("low",n<=25),this.el.hpB.style.width=n+"%",this.el.arB.style.width=e+"%"},ammo(n,e,t,i){Xn(this.el.wname,n),this.el.ammo.querySelector(".nums").style.visibility=i?"":"hidden",Xn(this.el.magV,String(e)),Xn(this.el.resV,String(t)),this.el.ammo.classList.toggle("low",i&&e<=5)},clock(n,e,t){let i=Math.max(0,Math.ceil(n));Xn(this.el.clockV,t?"":Math.floor(i/60)+":"+String(i%60).padStart(2,"0")),this.el.clock.classList.toggle("red",e),this.el.bombIco.hidden=!t},score(n,e,t,i){Xn(this.el.scT,String(n)),Xn(this.el.scCT,String(e));let s=(r,a)=>{let o=a.map(l=>l.n+l.a).join();r._k!==o&&(r._k=o,r.innerHTML=a.map(l=>`<i class="${l.a?"":"dead"}" title="${vs(l.n)}">${vs(l.n.slice(0,1).toUpperCase())}</i>`).join(""))};s(this.el.pipsT,t),s(this.el.pipsCT,i)},feed(n,e,t,i,s,r){let a=document.createElement("div");r&&(a.className="mine");let o=t==="world"?ys("skull",60,40):t==="molotov"||t==="incendiary"?ys("fire",60,40):ys(t,120,40);for(a.innerHTML=(n?`<span class="${n.team}">${vs(n.name)}</span>`:"")+`<img src="${o}">`+(s?'<span class="w">\u27C2</span>':"")+(i?`<img class="hs" src="${ys("hs",40,40)}">`:"")+`<span class="${e.team}">${vs(e.name)}</span>`,this.el.feed.appendChild(a);this.el.feed.children.length>6;)this.el.feed.firstChild.remove();setTimeout(()=>a.remove(),7e3)},slots(n,e,t=[],i=0){let s=n.map(a=>a.key+a.id).join()+e+"|"+t.join()+i;if(this.el.slots._k===s)return;this.el.slots._k=s;let r=n.map(a=>`<div class="sl ${a.slot===e?"on":""}"><img src="${ys(a.id,a.id==="knife"?110:150,44)}"><b>${a.key}</b></div>`).join("");t.length&&(r+=`<div class="sl ${e==="g"?"on":""}"><div class="nades">${t.map((a,o)=>`<img class="${e==="g"&&o===i?"on":""}" src="${ys(a,44,52)}">`).join("")}</div><b>4</b></div>`),this.el.slots.innerHTML=r},showSlots(){this.el.slots.style.opacity=1,clearTimeout(this._st),this._st=setTimeout(()=>this.el.slots.style.opacity=.35,1800)},crosshair(n,e,t){let i=this.el.xhair;i._show!==e&&(i._show=e,i.style.display=e?"":"none"),e&&ff(i,t,n)},hit(n){let e=this.el.hitmark;e.classList.remove("on"),e.offsetWidth,e.classList.add("on"),e.style.filter=n?"drop-shadow(0 0 2px red) sepia(1) saturate(8) hue-rotate(-30deg)":""},center(n,e=2200){let t=this.el.centerMsg;t.textContent=n,t.style.opacity=1,clearTimeout(this._ct),e&&(this._ct=setTimeout(()=>t.style.opacity=0,e))},progress(n,e){if(e==null){this.el.prog.hidden=!0;return}this.el.prog.hidden=!1,Xn(this.el.progL,n),this.el.progB.style.width=(e*100).toFixed(1)+"%"},hint(n){Xn(this.el.hint,n||"")},dmgDir(n){let e=document.createElement("i");e.style.transform=`rotate(${n}rad) translateY(-140px)`,this.el.dmgDir.appendChild(e),setTimeout(()=>e.remove(),1500)},banner(n,e,t){let i=this.el.banner;if(!e){i.hidden=!0;return}i.className=n||"",i.hidden=!1,Xn(this.el.ban1,e),Xn(this.el.ban2,t||"")}};function lm(n,e){let t=[...n.players.values()],i=o=>`<tr class="${o.team} ${o.alive?"":"dead"} ${o.id===e?"me":""}"><td>${vs(o.name)}${o.inv&&o.inv.c4&&n.players.get(e)?.team==="T"?" \u{1F4A3}":""}</td><td>$${o.money}</td><td>${o.k}</td><td>${o.d}</td><td>${o.a}</td><td>${o.mvp?"\u2605"+o.mvp:""}</td><td>${o.ping||""}</td></tr>`,s=o=>{let l=t.filter(c=>c.team===o).sort((c,h)=>h.k-c.k||c.d-h.d);return`<div class="tt ${o}">${o==="T"?"TERRORISTAS":"CONTRATERRORISTAS"}</div><table><tr><th>Jugador</th><th>Plata</th><th>K</th><th>D</th><th>A</th><th>MVP</th><th></th></tr>${l.map(i).join("")}</table>`},r=n.score[n.half===0?0:1],a=n.score[n.half===0?1:0];return`<div class="bh"><span>${vs(n.mapName)} \xB7 Ronda ${n.round}</span><span><b style="color:var(--t)">${r}</b> \u2013 <b style="color:var(--ct)">${a}</b></span></div>${s("T")}${s("CT")}`}function cm(n,e,t,i){let s=_s("buyCols");s.innerHTML="",Nc.forEach((r,a)=>{let o=document.createElement("div");o.className="bcol",o.dataset.c=a,o.innerHTML=`<h5><b>${a+1}</b>${r.name}</h5>`,r.items[n].forEach((l,c)=>{let h=et[l],f=document.createElement("div");f.className="bit",f.dataset.id=l,f.innerHTML=`<span class="k">${c+1}</span><span class="n">${vs(h.name)}</span><img src="${ys(l,200,64)}"><span class="p">$${h.price}</span>`,f.onclick=()=>t(l),f.onmouseenter=()=>i(l),f.onmouseleave=()=>i(null),o.appendChild(f)}),s.appendChild(o)})}function Qc(n,e){_s("buyMoney").textContent=n.money;for(let t of document.querySelectorAll("#buyCols .bit")){let i=t.dataset.id,r=et[i].price;i==="vesthelm"&&n.ar>=100&&!n.helm&&(r=350),t.querySelector(".p").textContent="$"+r;let a=n.inv.p===i||n.inv.s===i||i==="vest"&&n.ar>=100||i==="vesthelm"&&n.ar>=100&&n.helm||i==="defuser"&&n.inv.kit||i==="zeus"&&n.inv.zeus||n.inv.g.includes(i);t.classList.toggle("own",a),t.classList.toggle("no",n.money<r),t.classList.toggle("ok",n.money>=r&&!a)}for(let t of document.querySelectorAll("#buyCols .bcol"))t.classList.toggle("sel",+t.dataset.c===e)}function mf(n){let e=_s("buyInfo");if(!n){e.hidden=!0;return}let t=et[n];if(t)if(e.hidden=!1,_s("biName").textContent=t.name,_s("biList").innerHTML=(v0[n]||[]).map(i=>`<li>${vs(i)}</li>`).join("")+(t.reward?`<li>Premio por baja: $${t.reward}</li>`:""),t.dmg&&t.cat!=="knife"){let i=(s,r)=>`<i style="width:${Math.min(100,s/r*100).toFixed(0)}%"></i>`;_s("biStats").innerHTML=`<span>Da\xF1o</span>${i(t.dmg*t.pellets,120)}<span>Cadencia</span>${i(t.rpm,900)}<span>Blindaje</span>${i(t.ap*100,100)}<span>Movilidad</span>${i(t.speed,250)}<span>Cargador</span><span>${t.mag} / ${t.reserve}</span>`}else _s("biStats").innerHTML=""}var nh=n=>(n.team==="T"?n.skT:n.skCT)|0,hm=.0254,um=Math.PI/180,cn=n=>document.getElementById(n),Ef=[{id:"dust2",name:"Dust II",sub:"Desierto \xB7 cl\xE1sico"},{id:"mirage",name:"Mirage",sub:"Pueblo marroqu\xED"}],ah={get(n,e){try{let t=localStorage.getItem(n);return t?JSON.parse(t):e}catch{return e}},set(n,e){try{localStorage.setItem(n,JSON.stringify(e))}catch{}}},X={players:new Map,drops:new Map,nades:[],bomb:{state:"none",x:0,y:0,z:0,t:0},phase:"lobby",timeLeft:0,round:0,score:[0,0],half:0,time:0,cfg:{map:ah.get("ls:map","dust2"),len:"corta",size:5,bots:!0,diff:"normal"},prefs:{}},Ht=null,ot="local",It=null,jt=null,ih={},Lf=!1,Yt,vn,nn,uo,qr,_n,Ut,co=null,Af=null,Tt=()=>!Ht||Ht.isHost||!Ht.online;function Un(n,e,t){Ht&&Ht.online&&Arcade.send(n,e,t)}X.emit=(n,e)=>{Un(n,e),kf(n,e,ot)};X.emitTo=(n,e,t)=>{let i=X.players.get(n);n===ot?kf(e,t,ot):i&&!i.bot&&Un(e,t,{to:n})};X.end=(n,e)=>{Ht&&Ht.online?Arcade.end({winners:n,text:e}):setTimeout(eb,500)};X.solidAt=(n,e,t)=>Ec(X.W,n,e,t);X.floorAt=(n,e,t)=>{let i=gs(X.W,n,e,t);return i>-1e8?i:t-.5};var sh=new Map;X.setPlanting=(n,e)=>{e>0?sh.set(n,e):sh.delete(n)};X.planting=n=>sh.get(n)||0;X.fallDamage=(n,e)=>{let t=zu(e);t>0&&It&&It.damage(n.id,n.id,t,"leg","world",{raw:!0})};function Vt(n,e){Tt()?It&&It.handle(n,e,ot,{admin:Arcade.admin&&Arcade.admin.active}):Un(n,e,{to:Ht.hostId})}var bM=["hit","buy","drop","take","nade","plant","defst","defx","defok","adm","fall"],O={pl:null,slot:"s",throwT:0,throwPow:1,drawT:0,fireT:0,reloadT:0,shots:0,pp:0,py:0,scope:0,ammo:{p:[0,0],s:[0,0]},ammoW:{p:null,s:null},invV:-1,gsel:0,plantT:0,defT:0,defusing:!1,trig:!1,trig2:!1,nadeHold:0,nadeCd:0,stepT:0,deadT:0,spec:null,blind:0,blindMax:0,shake:0,bob:0,kick:0,lastSlot:"k",zeus:!1,sway:[0,0],swayT:[0,0],pickCd:0,voidSent:!1,lastMoney:null,rescope:0,knife2:!1},Ft=()=>X.players.get(ot),xo=am(ah,n=>{Kc(n.vol*.7)}),Fn=xo.S;Kc(Fn.vol*.7);var $t=new Set,An=!1,Ks=!1,Js=!1,_m=0,gf=6,pn={mx:0,mz:0,fire:!1,look:null},Ki=matchMedia("(pointer: coarse)").matches,vm=Ki?Math.min(1,Fn.quality):Fn.quality;addEventListener("keydown",n=>{if(n.repeat&&!["KeyW","KeyA","KeyS","KeyD"].includes(n.code)){n.code==="Tab"&&n.preventDefault();return}if(X.phase!=="lobby"){if($t.add(n.code),["Tab","Space","ControlLeft","ControlRight","AltLeft","KeyB"].includes(n.code)&&n.preventDefault(),On){zM(n);return}Df(n.code)}});addEventListener("beforeunload",n=>{if(X.phase!=="lobby")return n.preventDefault(),n.returnValue="",""});function Mm(){let n=document.documentElement;try{let e=n.requestFullscreen?n.requestFullscreen({navigationUI:"hide"}):null,t=()=>{try{navigator.keyboard&&navigator.keyboard.lock&&navigator.keyboard.lock().catch(()=>{})}catch{}};e&&e.then?e.then(t).catch(()=>{}):t()}catch{}}addEventListener("keydown",n=>{(n.ctrlKey||n.metaKey)&&["KeyW","KeyS","KeyD","KeyA","KeyR","KeyQ","KeyE","KeyG","KeyB","KeyF"].includes(n.code)&&X.phase!=="lobby"&&n.preventDefault()},!0);addEventListener("keyup",n=>{$t.delete(n.code),n.code==="KeyE"&&O.defusing&&oh()});addEventListener("blur",()=>{$t.clear(),An=Ks=!1});addEventListener("mousedown",n=>{if(oo(),!(X.phase==="lobby"||On)){if(!Js&&!Ki){document.fullscreenElement||Mm(),mo();return}n.button===0&&(An=!0),n.button===2&&(Ks=!0,Of())}});addEventListener("mouseup",n=>{n.button===0&&(An=!1),n.button===2&&(Ks=!1)});addEventListener("contextmenu",n=>n.preventDefault());addEventListener("mousemove",n=>{if(!Js||!O.pl||X.phase==="lobby")return;let e=n.movementX,t=n.movementY,i=Math.abs(e)+Math.abs(t);if(performance.now()-_m<80||i>120&&i>gf*7)return;gf=gf*.85+Math.min(i,150)*.15;let r=O.scope?wM():1,a=Fn.sens/1e3;Nf(e*a/r,t*a/r*(Fn.invert?-1:1))});addEventListener("wheel",n=>{Js&&X.phase!=="lobby"&&!On&&bm(n.deltaY>0?1:-1)},{passive:!0});function Nf(n,e){let t=O.pl;t&&(t.yaw-=n,t.pitch=Math.max(-1.5,Math.min(1.5,t.pitch-e)),O.swayT[0]+=n*4,O.swayT[1]+=e*4)}function mo(){if(xo.isOpen())return;let n=Yt.domElement;if(!n.requestPointerLock)return;let e=()=>{try{let t=n.requestPointerLock();t&&t.catch&&t.catch(()=>{})}catch{}};try{let t=n.requestPointerLock({unadjustedMovement:!0});t&&t.catch&&t.catch(e)}catch{e()}}document.addEventListener("pointerlockchange",()=>{Js=document.pointerLockElement===Yt.domElement,Js&&(_m=performance.now()),Yr()});function Yr(){cn("clickPlay").hidden=Js||Ki||X.phase==="lobby"||On||!Lf||xo.isOpen()}function Df(n){let e=Ft();if(e){if(n==="KeyB"){lh();return}if(n!=="Tab"){if(n==="BracketLeft"||n==="BracketRight"){Fn.sens=+Math.max(.4,Math.min(8,Fn.sens*(n==="BracketLeft"?.92:1.08))).toFixed(2),ah.set("ls:cfg",Fn),qe.center("Sensibilidad "+Fn.sens.toFixed(2),1200);return}if(!e.alive){n==="Space"&&Hf(1);return}if(n==="Digit1")Dn("p");else if(n==="Digit2")Dn("s");else if(n==="Digit3")O.slot==="k"&&e.inv.zeus?Dn("z"):(O.slot,Dn("k"));else if(n==="Digit4"){let t=e.inv.g;t.length&&(O.slot==="g"&&(O.gsel=(O.gsel+1)%t.length),Dn("g",!0))}else n==="Digit5"?Dn("c4"):n==="KeyQ"?Dn(O.lastSlot):n==="KeyR"?Sm():n==="KeyG"?EM():n==="KeyE"?Tm():n==="KeyF"&&(O.inspect=1.6)}}}function SM(){if(!Ki)return;cn("touch").hidden=!1;let n=cn("stick"),e=n.firstElementChild,t=null,i=null;n.addEventListener("touchstart",r=>{t=r.changedTouches[0].identifier;let o=n.getBoundingClientRect();i=[o.left+o.width/2,o.top+o.height/2],r.preventDefault()},{passive:!1}),addEventListener("touchmove",r=>{for(let a of r.changedTouches)if(a.identifier===t){let o=(a.clientX-i[0])/55,l=(a.clientY-i[1])/55,c=Math.hypot(o,l);c>1&&(o/=c,l/=c),pn.mx=o,pn.mz=l,e.style.transform=`translate(${o*40}px,${l*40}px)`}else pn.look&&a.identifier===pn.look.id&&(Nf((a.clientX-pn.look.x)*.006,(a.clientY-pn.look.y)*.006),pn.look.x=a.clientX,pn.look.y=a.clientY)},{passive:!0}),addEventListener("touchend",r=>{for(let a of r.changedTouches)a.identifier===t&&(t=null,pn.mx=pn.mz=0,e.style.transform=""),pn.look&&a.identifier===pn.look.id&&(pn.look=null)}),Yt.domElement.addEventListener("touchstart",r=>{let a=r.changedTouches[0];a.clientX>innerWidth*.35&&(pn.look={id:a.identifier,x:a.clientX,y:a.clientY}),oo()},{passive:!0});let s=(r,a,o)=>{let l=cn(r);l.addEventListener("touchstart",c=>{c.preventDefault(),a()},{passive:!1}),l.addEventListener("touchend",c=>{c.preventDefault(),o&&o()},{passive:!1})};s("tFire",()=>An=!0,()=>An=!1),s("tJump",()=>$t.add("Space"),()=>$t.delete("Space")),s("tDuck",()=>$t.add("KeyC"),()=>$t.delete("KeyC")),s("tReload",()=>Df("KeyR")),s("tSwitch",()=>bm(1)),s("tBuy",()=>lh()),s("tUse",()=>{$t.add("KeyE"),Tm()},()=>{$t.delete("KeyE"),O.defusing&&oh()}),s("tScope",()=>Of())}function Ss(n,e=Ft()){if(!e)return null;let t=e.inv;return n==="p"?t.p:n==="s"?t.s:n==="k"?"knife":n==="z"?t.zeus?"zeus":null:n==="g"?t.g.length?t.g[Math.min(O.gsel,t.g.length-1)]:null:n==="c4"&&t.c4?"c4":null}var qn=()=>Ss(O.slot)||"knife";function Dn(n,e){Ss(n)&&(n===O.slot&&!e||(n!==O.slot&&(O.lastSlot=O.slot),O.slot=n,O.drawT=n==="k"?.35:.6,O.reloadT=0,O.scope=0,O.plantT=0,O.nadeHold=0,O.defusing&&oh(),lo(null,1400,.25),qe.showSlots()))}function bm(n){let e=["p","s","k","z","g","c4"].filter(i=>Ss(i));if(!e.length)return;let t=e.indexOf(O.slot);Dn(e[(t+n+e.length)%e.length])}function Uf(){return Ss("p")?"p":Ss("s")?"s":"k"}function Ff(){let n=Ft();if(!(!n||n.inv.v===O.invV)){O.invV=n.inv.v;for(let e of["p","s"]){let t=n.inv[e];if(t!==O.ammoW[e]){let i=O.ammoW[e];O.ammoW[e]=t;let s=et[t];O.ammo[e]=t?n.inv[e+"a"]?[...n.inv[e+"a"]]:[s.mag,s.reserve]:[0,0],t&&e==="p"&&n.alive&&X.phase!=="post"&&i!==t&&Dn("p",!0)}}Ss(O.slot)||Dn(Uf(),!0)}}function Sm(){let n=O.slot;if(n!=="p"&&n!=="s")return;let e=et[qn()],t=O.ammo[n];!e.mag||t[0]>=e.mag||t[1]<=0||O.reloadT>0||O.drawT>0||(O.reloadT=e.reload,O.scope=0,q0(null))}function TM(){let n=O.slot,e=et[qn()],t=O.ammo[n];if(!t||!e.mag)return;let i=e.mag-t[0],s=Zi("ls.ammo")?i:Math.min(i,t[1]);t[0]+=s,Zi("ls.ammo")||(t[1]-=s)}var wM=()=>{let n=et[qn()];return n&&n.scope?n.scope[Math.max(0,O.scope-1)]:1};function Of(){let n=Ft();if(!n||!n.alive)return;let e=qn(),t=et[e];if(t&&t.scope&&O.reloadT<=0&&O.drawT<=0){O.scope=(O.scope+1)%(t.scope.length+1),lo(null,3e3,.2);return}e==="knife"&&O.fireT<=0&&O.drawT<=0&&Am(!0),t&&t.cat==="grenade"&&!An&&O.throwT<=0&&(O.nadeHold=.3)}function EM(){let n=Ft(),e=O.slot;if(!n.alive)return;let t=O.pl;e==="p"||e==="s"?Vt("drop",{s:e,x:t.x,y:t.y,z:t.z,yaw:t.yaw,ammo:O.ammo[e]}):e==="c4"&&Vt("drop",{s:"c4",x:t.x,y:t.y,z:t.z,yaw:t.yaw})}function Tm(){let n=Ft();if(!n||!n.alive||!O.pl)return;let e=O.pl,t=X.bomb;if(n.team==="CT"&&t.state==="planted"&&Math.hypot(e.x-t.x,e.z-t.z)<1.7&&Math.abs(e.y-t.y)<1.6&&e.onGround){O.defusing||(O.defusing=!0,O.defT=0,Vt("defst",{}),hf(null));return}let i=wm();i&&Vt("take",{id:i.id,swap:!0,ammo:O.ammo[Xs(i.w)===1?"p":"s"]})}function oh(){O.defusing=!1,O.defT=0,Vt("defx",{})}function wm(){let n=O.pl,e=null,t=1e9,i=-Math.sin(n.yaw),s=-Math.cos(n.yaw);for(let r of X.drops.values()){let a=r.x-n.x,o=r.z-n.z,l=Math.hypot(a,o);if(l>2.2||Math.abs(r.y-n.y)>1.5)continue;let c=(a*i+o*s)/Math.max(.01,l);l>.8&&c<.75||l<t&&(t=l,e=r)}return e}var xf=[];function Bf(){xf.length=0;for(let n of X.players.values()){if(!n.alive)continue;let e=rt.hStand+(rt.hCrouch-rt.hStand)*(n.duck||0);xf.push({id:n.id,x:n.x,y:n.y,z:n.z,h:e,alive:!0})}return xf}var fo=new W;function AM(n){if(n.id===ot&&!O.spec)return _n&&_n.userData.gun.getWorldPosition(fo),null;let e=-Math.sin(n.yaw)*Math.cos(n.pitch),t=Math.sin(n.pitch),i=-Math.cos(n.yaw)*Math.cos(n.pitch);return[n.x+e*.75+Math.cos(n.yaw)*.12,n.y+En(n)-.18+t*.6,n.z+i*.75-Math.sin(n.yaw)*.12]}var RM=0;X.fireBullets=(n,e,t,i,s)=>{let r=s||et[e],a=X.players.get(n),o=Bf(),l=[],c=[],h=new Map,f=!1;for(let d=0;d<r.pellets;d++){let m=i(Math.random),M=Fc(X.W,X.nades,n,t[0],t[1],t[2],m[0],m[1],m[2],r,o);l.push(M.end.map(x=>+x.toFixed(2)));for(let x of M.impacts)c.push(x.map(g=>+g.toFixed(2)));if(M.hit){let x=h.get(M.hit.id)||{d:0,part:"leg",pos:M.hit.pos,wb:M.wb};x.d+=M.hit.dmg,fm(M.hit.part)>fm(x.part)&&(x.part=M.hit.part),h.set(M.hit.id,x),M.wb&&(f=!0)}}let u=[...h.entries()].map(([d,m])=>[d,m.pos.map(M=>+M.toFixed(2)),m.part==="head"?1:0]);Em(n,e,t,l,c,u,r),Un("sh",{i:n,w:e,o:t.map(d=>+d.toFixed(2)),e:l,m:c.slice(0,8),h:u});for(let[d,m]of h){let M={t:d,w:e,part:m.part,d:+m.d.toFixed(1),wb:m.wb};n===ot?Vt("hit",M):Tt()&&It&&It.handle("hit",M,n)}Tt()&&jt&&a&&jt.heard(t[0],t[1],t[2],a.team,!r.silent)};var fm=n=>n==="head"?3:n==="chest"?2:n==="stomach"?1:0;function Em(n,e,t,i,s,r,a){a=a||et[e];let o=X.players.get(n),l=n===ot&&!O.spec,c=O.spec===n,h=l||c?null:AM(o||{yaw:0,pitch:0,x:t[0],y:t[1]-1.6,z:t[2]}),f=l||c?[fo.x,fo.y,fo.z]:h;if(a.cat!=="knife"){for(let u of i)(a.pellets>1?Math.random()<.35:RM++%(a.cat==="pistol"?1:2)===0)&&Ut.tracer(f,u);if(!a.silent&&a.cat!=="equip"&&Ut.flashLight(f,a.cat==="sniper"?1.5:1),o&&o.model&&(o.flashT=.05),(l||c)&&(O.flashT=.05),f&&a.cat!=="equip"){Ut.muzzleSmoke(f);let u=o?o.id===ot&&O.pl?O.pl.yaw:o.yaw||0:0;e==="nova"||e==="sawedoff"||e==="mag7"||e==="awp"||e==="ssg08"||e==="r8"||Ut.shell([f[0]+Math.sin(u)*.25,f[1]-.05,f[2]+Math.cos(u)*.25],Math.cos(u),-Math.sin(u),a.pellets>1)}}for(let u of s)Ut.impact([u[0],u[1],u[2]],[u[3],u[4],u[5]],Qa(X.cfg.map).floor?"#b8a07a":"#999");for(let u of r){let d=[u[1][0]-t[0],u[1][1]-t[1],u[1][2]-t[2]],m=Math.hypot(...d)||1,M=d.map(g=>g/m);Ut.blood(u[1],M,u[2]);let x=Wi(X.W,u[1][0],u[1][1],u[1][2],M[0],M[1]-.3,M[2],2.5);x&&Ut.decalC([u[1][0]+M[0]*x.t,u[1][1]+(M[1]-.3)*x.t,u[1][2]+M[2]*x.t],[x.nx,x.ny,x.nz],"#6e0b0e",.35+(u[2]?.2:0))}a.cat!=="knife"&&nf(a.cat,l?null:t,!!a.silent,e==="deagle"||e==="r8")}function CM(){let n=Ft(),e=O.pl,t=qn(),i=et[t];if(!i||O.drawT>0||O.reloadT>0||O.fireT>0||X.phase==="freeze"||X.phase==="over")return;if(i.cat==="knife"){(!O.trig||i.auto)&&Am(!1);return}if(!i.auto&&O.trig)return;let s=O.slot==="z"?null:O.slot;if(s&&O.ammo[s][0]<=0){O.trig||(lo(null,2600,.35),O.trig=!0),Sm();return}O.trig=!0,Zi("ls.aim")&&PM();let r={speed:Math.hypot(e.vx,e.vz),onGround:e.onGround,duck:e.duck,scoped:O.scope>0,shots:O.shots},a=Zi("ls.norecoil")?i.spread*.2:eo(i,r),o=[e.x,e.y+En(e),e.z],l=Zi("ls.norecoil")?0:O.pp,c=Zi("ls.norecoil")?0:O.py;X.fireBullets(ot,t,o,u=>kr(e.yaw,e.pitch,l,c,a,u));let[h,f]=Uc(i,O.shots,Math.random);O.pp=Math.min(i.kickCap||12,O.pp+h),O.py+=f,O.shots++,O.kick=Math.min(1,O.kick+(i.cat==="sniper"?1:i.cat==="pistol"?.6:.4)),O.fireT=60/i.rpm,s&&!Zi("ls.ammo")&&O.ammo[s][0]--,t==="zeus"&&Vt("drop",{s:"zeus"}),(t==="awp"||t==="ssg08")&&O.scope&&(O.rescope=O.scope,O.scope=0)}function Am(n){let e=O.pl,t=et.knife,i=[e.x,e.y+En(e),e.z],s={...t,dmg:n?65:40,range:72,rangeMod:1,pellets:1},r=kr(e.yaw,e.pitch,0,0,0,Math.random),a=Fc(X.W,X.nades,ot,i[0],i[1],i[2],r[0],r[1],r[2],s,Bf());if(a.hit){let o=X.players.get(a.hit.id);o&&Math.cos(zf(o.yaw,e.yaw))>.5&&(a.hit.dmg=n?180:90)}if(a.hit)Vt("hit",{t:a.hit.id,w:"knife",part:"chest",d:a.hit.dmg}),Ut.blood(a.hit.pos,r,!1),Jc(!1);else if(a.impacts.length){let o=a.impacts[0];Ut.impact([o[0],o[1],o[2]],[o[3],o[4],o[5]]),lo(o,1800,.5)}else of();O.fireT=n?1:.45,O.kick=1,O.knife2=n,Un("sh",{i:ot,w:"knife",o:i,e:[a.end],m:[],h:a.hit?[[a.hit.id,a.hit.pos,0]]:[]})}var zf=(n,e)=>{let t=n-e;for(;t>Math.PI;)t-=Math.PI*2;for(;t<-Math.PI;)t+=Math.PI*2;return t};function PM(){let n=Ft(),e=O.pl,t=[e.x,e.y+En(e),e.z],i=null,s=.35;for(let r of X.players.values()){if(!r.alive||r.team===n.team)continue;let a=r.y+(rt.hStand+(rt.hCrouch-rt.hStand)*(r.duck||0))-.12,o=r.x-t[0],l=a-t[1],c=r.z-t[2],h=Math.atan2(-o,-c),f=Math.atan2(l,Math.hypot(o,c)),u=Math.hypot(zf(h,e.yaw),f-e.pitch);u<s&&to(X.W,X.nades,t,[r.x,r.y,r.z,1])&&(s=u,i=[h,f])}i&&(e.yaw=i[0],e.pitch=i[1])}function IM(n){let e=Ft(),t=O.pl,i=qn();if(!et[i]||et[i].cat!=="grenade"||O.nadeCd>0)return;let s=[t.x,t.y+En(t),t.z],r={i:ot,ty:i,tm:e.team,o:s.map(o=>+o.toFixed(3)),yaw:+t.yaw.toFixed(4),pitch:+t.pitch.toFixed(4),v:[+t.vx.toFixed(3),+t.vz.toFixed(3)],pw:n};Rm(r),Un("nd",r),Vt("nade",{type:i}),O.nadeCd=.6,of();let a=e.inv.g.indexOf(i);a>=0&&(e.inv.g=e.inv.g.slice(),e.inv.g.splice(a,1)),setTimeout(()=>{O.throwT=0,Ss("g")?Dn("g",!0):Dn(Uf(),!0)},380)}var go=new Map;function Rm(n){let e=M0(n.ty,n.i,n.tm,n.o[0],n.o[1],n.o[2],n.yaw,n.pitch,n.v[0],n.v[1],n.pw);e.key=Math.random(),X.nades.push(e);let t=Vr(n.ty);t.scale.setScalar(1.6),vn.add(t),go.set(e,t)}var yf=[];function LM(n){yf.length=0;for(let e of X.nades)b0(X.W,e,n,yf);for(let e of yf)NM(e);for(let e=X.nades.length-1;e>=0;e--){let t=X.nades[e],i=go.get(t);if(t.state==="fly"&&!t.rest&&Math.random()<.5&&Ut.particle(t.x,t.y,t.z,0,.1,0,.03,.4,"#cfcac0",-.1,.1),i&&(t.state==="fly"||t.type==="smoke"||t.type==="decoy"?(i.position.set(t.x,t.y,t.z),i.rotation.x+=n*(t.rest?0:9),i.visible=t.state!=="done"):i.visible=!1),t.type==="decoy"&&t.state==="active"&&(t.dc=(t.dc||0)-n,t.dc<=0)){t.dc=.25+Math.random()*1.2;let s=1+Math.floor(Math.random()*3);for(let r=0;r<s;r++)setTimeout(()=>nf("rifle",[t.x,t.y,t.z]),r*110);Tt()&&jt&&jt.heard(t.x,t.y,t.z,t.team,!0)}(t.type==="molotov"||t.type==="incendiary")&&t.state==="active"&&!t.air&&(t.ft=(t.ft||0)-n,t.ft<=0&&(t.ft=.6,j0([t.x,t.y,t.z]))),t.state==="done"&&(X.nades.splice(e,1),i&&(vn.remove(i),go.delete(t)))}}function NM(n){let e=n.g,t=[e.x,e.y,e.z];if(n.type==="bounce"){Q0(t);return}if(n.type==="det")if(e.type==="he"){Ut.explosion(t,!1),rf(t,!1);let i=gs(X.W,e.x,e.z,e.y+.5);i>-1e8&&e.y-i<1.5&&Ut.decalC([e.x,i,e.z],[0,1,0],"#1d1a17",2.6),Pm(t,12,.5),Tt()&&It&&It.heBlast(e,(s,r)=>{let a=Math.hypot(r.x-s.x,r.y+1-s.y,r.z-s.z),o=Wi(X.W,s.x,s.y+.15,s.z,(r.x-s.x)/a,(r.y+1-s.y-.15)/a,(r.z-s.z)/a,a);return!o||o.t>=a-.2})}else if(e.type==="flash"){if(Ut.flashPop(t),Z0(t),DM(e),Tt()&&jt){for(let i of X.players.values())if(i.bot&&i.alive){let s=Cm(e,i.x,i.y+En(i),i.z,i.yaw,i.pitch);s>0&&jt.flash(i,s)}}}else if(e.type==="smoke"){Ut.smoke(e,X.W),af(t);for(let i of X.nades)(i.type==="molotov"||i.type==="incendiary")&&i.state==="active"&&Math.hypot(i.x-e.x,i.z-e.z)<Pt.smokeR+1&&(i.life=Math.min(i.life,.3))}else if(e.type==="molotov"||e.type==="incendiary"){if(e.air){Ut.explosion(t,!1);return}if(X.nades.some(s=>s.type==="smoke"&&s.state==="active"&&Math.hypot(s.x-e.x,s.z-e.z)<Pt.smokeR)){e.life=.05,af(t);return}Ut.fire(e,X.W,gs),J0(t)}else e.type==="decoy"&&(e.dc=.5)}function Cm(n,e,t,i,s,r){let a=n.x-e,o=n.y-t,l=n.z-i,c=Math.hypot(a,o,l);if(c>40)return 0;let h=Wi(X.W,e,t,i,a/c,o/c,l/c,c);if(h&&h.t<c-.25)return 0;let f=-Math.sin(s)*Math.cos(r),u=Math.sin(r),d=-Math.cos(s)*Math.cos(r),m=(a*f+o*u+l*d)/c,M=m>.6?1:m>0?.35+m:.18,x=c<10?1:Math.max(0,1-(c-10)/30);return 4.9*M*x}function DM(n){let e=Ft();if(!e||!e.alive||!O.pl)return;let t=O.pl,i=Cm(n,t.x,t.y+En(t),t.z,t.yaw,t.pitch);i>.15&&(O.blind=Math.max(O.blind,i),O.blindMax=Math.max(O.blind,1),K0(i))}function Pm(n,e,t){if(!O.pl)return;let i=Math.hypot(n[0]-O.pl.x,n[2]-O.pl.z);i<e&&(O.shake=Math.max(O.shake,t*(1-i/e)))}function kf(n,e,t,i){switch(n){case"st":UM(e);break;case"rs":FM(e);break;case"ev":BM(e);break;case"p":{let s=X.players.get(t);s&&t!==ot&&dm(s,e);break}case"pb":if(!Tt())for(let s of e){let r=X.players.get(s[0]);r&&dm(r,s.slice(1))}break;case"sh":if(e.i!==ot){let s=X.players.get(e.i);Em(e.i,e.w,e.o,e.e,e.m||[],e.h||[]),e.w==="knife"&&e.h&&e.h.length&&Jc(!1),Tt()&&jt&&s&&jt.heard(e.o[0],e.o[1],e.o[2],s.team,!(et[e.w]||{}).silent)}break;case"nd":e.i!==ot&&Rm(e);break}}function dm(n,e){n.nx=e[0],n.ny=e[1],n.nz=e[2],n.nyaw=e[3],n.npitch=e[4],n.duck=e[5],n.wpn=e[6],n.flags=e[7]|0,n.vx=e[8]||0,n.vz=e[9]||0,n.netT=X.time,n.scoped=!!(n.flags&1),n.onGround=!(n.flags&2),(n.x===void 0||Math.hypot(n.x-n.nx,n.z-n.nz)>4)&&(n.x=n.nx,n.y=n.ny,n.z=n.nz,n.yaw=n.nyaw,n.pitch=n.npitch)}function UM(n){let e=X.phase;X.phase=n.ph,X.timeLeft=n.tl,X.round=n.r,X.score=n.sc,X.half=n.hf;let t=n.b;if(Object.assign(X.bomb,{state:t.s,carrier:t.c,x:t.x,y:t.y,z:t.z,t:t.t,site:t.site}),!Tt()){let r=new Set;for(let a of n.dr)r.add(a[0]),X.drops.set(a[0],{id:a[0],w:a[1],x:a[2],y:a[3],z:a[4],ammo:a[5]});for(let a of[...X.drops.keys()])r.has(a)||X.drops.delete(a)}let i=new Set;for(let r of n.p){let[a,o,l,c,h,f,u,d,m,M,x,g,b,E,S,P,A,p,v]=r;i.add(a);let C=X.players.get(a);C||(C={id:a,x:0,y:0,z:0,yaw:0,pitch:0,duck:0,h:rt.hStand},X.players.set(a,C)),Tt()||Object.assign(C,{name:o,bot:!!l,grp:c,team:h,hp:f,ar:u,helm:!!d,money:m,alive:!!M,k:x,d:g,a:b,mvp:E,inv:S,god:!!P,skT:A,skCT:p,fin:v})}if(!Tt())for(let r of[...X.players.keys()])i.has(r)||X.players.delete(r);let s=Ft();s&&(O.lastMoney!==null&&s.money>O.lastMoney&&qe.moneyDelta(s.money-O.lastMoney),O.lastMoney=s.money,Ff()),On&&Qc(s,bs)}function FM(n){Ut.clearSmokes(),Ut.clearDecals();for(let t of go.values())vn.remove(t);go.clear(),X.nades.length=0,sh.clear(),qe.banner(null);for(let t of X.players.values())t.deadT=0,t.alive=!0;let e=n.pos[ot];if(e&&(O.pl=Pc(e[0],e[1],e[2],e[3])),Tt()&&jt){for(let t of X.players.values())t.bot&&n.pos[t.id]&&jt.place(t,n.pos[t.id]);jt.roundStart()}for(let[t,i]of Object.entries(n.pos)){let s=X.players.get(t);s&&(s.x=s.nx=i[0],s.y=s.ny=i[1],s.z=s.nz=i[2],s.yaw=s.nyaw=i[3],s.pitch=0)}Object.assign(O,{deadT:0,spec:null,blind:0,plantT:0,defusing:!1,defT:0,scope:0,reloadT:0,drawT:.4,shots:0,pp:0,py:0,voidSent:!1,nadeHold:0}),O.invV=-1,O.ammoW={p:null,s:null},Ff(),O.throwT=0,Dn(Uf(),!0),(n.round===1||X.round===1)&&qe.center("Ronda 1 \u2014 \xA1suerte!"),uf()}function OM(n){let e=X.players.get(n);return e?e.name:"\u2014"}function BM(n){let e=Ft();switch(n.t){case"go":qe.center(e&&e.team==="T"?"\xA1Vamos! Plant\xE1 la bomba":"\xA1Vamos! Defend\xE9 los sitios",1800),uf();break;case"hurt":{if(n.v===ot){Y0(),po=Math.min(1,po+n.n/60);let t=X.players.get(n.a);if(t&&t.id!==ot&&O.pl){let i=Math.atan2(-(t.x-O.pl.x),-(t.z-O.pl.z))-O.pl.yaw;qe.dmgDir(-i)}O.pl&&n.w!=="world"&&n.w!=="molotov"&&n.w!=="incendiary"&&(O.pl.vx*=.45,O.pl.vz*=.45,O.punchHit=1.2)}n.a===ot&&n.v!==ot&&(qe.hit(n.hs),Jc(n.hs,n.helm));break}case"kill":{let t=n.k?X.players.get(n.k):null,i=X.players.get(n.v);i&&(i.alive=!1,i.deadT=.001),i&&qe.feed(t,i,n.w,n.hs,n.wb,n.k===ot||n.v===ot),n.k===ot&&n.v!==ot&&$0(),n.v===ot&&(O.deadT=.001,O.scope=0,O.defusing=!1,qe.progress(null));break}case"end":{let t=e?e.team:"T",i=n.win===t,s={elim:"eliminaron al otro equipo",bomb:"la bomba explot\xF3",defuse:"desactivaron la bomba",time:"se termin\xF3 el tiempo"};qe.banner(n.win,n.win==="T"?"GANAN LOS TERRORISTAS":"GANAN LOS CONTRATERRORISTAS","Porque "+s[n.reason]+(n.mvp?" \xB7 MVP: "+OM(n.mvp):"")),im(i);break}case"over":{let t=n.wg,i=Ft(),s=i?i.grp:0,r=t<0?"EMPATE":t===s?"\xA1VICTORIA!":"DERROTA";qe.banner(t<0?"":qs(t,X.half),r,`${n.score[s]} \u2013 ${n.score[1-s]} \xB7 Volviendo a la sala en ${zt.over} s`);let a=zt.over;clearInterval(th),th=setInterval(()=>{if(a--,a<=0){clearInterval(th);return}qe.banner(t<0?"":qs(t,X.half),r,`${n.score[s]} \u2013 ${n.score[1-s]} \xB7 Volviendo a la sala en ${a} s`)},1e3);break}case"half":qe.center("Cambio de lado \u2014 empieza la segunda mitad",4e3);break;case"plant":qe.center("La bomba fue plantada en el sitio "+n.site,3e3),lf([X.bomb.x,X.bomb.y,X.bomb.z],!0),X.bomb.seen=!0;break;case"defst":hf([X.bomb.x,X.bomb.y,X.bomb.z]);break;case"defused":qe.center("Desactivaron la bomba",3e3);break;case"boom":Ut.explosion([n.x,n.y,n.z],!0),rf([n.x,n.y,n.z],!0),Pm([n.x,n.y,n.z],60,1.2);break;case"bombdrop":e&&e.team==="T"&&qe.center("Se cay\xF3 la bomba",1600);break;case"bombpick":n.p===ot&&(qe.center("Agarraste la bomba (5)",1600),nm());break;case"deny":qe.center(n.why,1500),tm();break;case"bought":em();break}}var th=0,po=0,On=!1,bs=-1,ni=null,_f={};function Im(n){if(_f[n]){let e=document.createElement("canvas");return e.width=192,e.height=48,e.getContext("2d").drawImage(_f[n],0,0),e}try{ni||(ni={r:new Hs({antialias:!0,alpha:!0,preserveDrawingBuffer:!0}),s:new ci,c:new zi(-.62,.62,.155,-.155,.01,10)},ni.r.setSize(192,48),ni.s.add(new _i("#fff","#666",2.2)),ni.c.position.set(3,0,0),ni.c.lookAt(0,0,0));let e=$s(n);e.computeBoundingBox();let t=e.boundingBox,i=new Ye(e,wi),s=Math.max(.12,t.max.z-t.min.z,(t.max.y-t.min.y)*4);i.scale.setScalar(1.1/s),i.position.set(0,-(t.max.y+t.min.y)/2/s*1.1,-(t.max.z+t.min.z)/2/s*1.1),ni.s.add(i),ni.r.render(ni.s,ni.c),ni.s.remove(i);let r=document.createElement("canvas");return r.width=192,r.height=48,r.getContext("2d").drawImage(ni.r.domElement,0,0),_f[n]=r,Im(n)}catch{return null}}var pm=null;function lh(n){let e=Ft();if(!e)return;if(n!==void 0?n:!On){if(!e.alive)return;if(!Rf()){qe.center(X.phase==="live"?"Se termin\xF3 el tiempo de compra":"No pod\xE9s comprar ahora",1400);return}pm!==e.team&&(pm=e.team,cm(e.team,Im,i=>Vt("buy",{i}),i=>mf(i))),bs=-1,Qc(e,bs),On=!0,cn("buy").hidden=!1,document.exitPointerLock&&document.exitPointerLock()}else On=!1,cn("buy").hidden=!0,mf(null),Ki||mo();Yr()}function Rf(){let n=Ft();if(!n||!n.alive||!O.pl||!(X.phase==="freeze"||X.phase==="live"&&zt.live-X.timeLeft<zt.buy&&X.bomb.state!=="planted"))return!1;let t=X.spawns?X.spawns[n.team]:null;return!t||Math.hypot(O.pl.x-t.cx,O.pl.z-t.cz)<22||!!(Qn(X.W,O.pl.x,O.pl.z)&(n.team==="T"?16:32))}function zM(n){if(n.code==="KeyB"||n.code==="Escape"){lh(!1);return}let e=parseInt(n.key,10);if(!(e>=1&&e<=9))return;let t=Ft();if(bs<0)e<=5&&(bs=e-1);else{let i=Nc[bs].items[t.team];i[e-1]&&Vt("buy",{i:i[e-1]}),bs=-1}Qc(t,bs)}cn("buy").addEventListener("mousedown",n=>n.stopPropagation());function kM(){Yt=new Hs({antialias:!1,powerPreference:"high-performance"}),Yt.setPixelRatio(Math.min(devicePixelRatio,Ki?1:1.5)),Yt.setSize(innerWidth,innerHeight),Yt.autoClear=!1,Yt.toneMapping=ka,Yt.toneMappingExposure=1.05,Yt.shadowMap.enabled=vm>0,Yt.shadowMap.type=Cl,Yt.shadowMap.autoUpdate=!1,cn("view").appendChild(Yt.domElement),vn=new ci,nn=new sn(74,innerWidth/innerHeight,.05,1500),uo=new ci,qr=new sn(66,innerWidth/innerHeight,.01,10),uo.add(new _i("#ffffff","#555",1.3));let n=new vi("#fff",1.1);n.position.set(1,2,1),uo.add(n),_n=z0(),uo.add(_n);let e=HM();_n.userData.flash=e,addEventListener("resize",()=>{Yt.setSize(innerWidth,innerHeight),nn.aspect=qr.aspect=innerWidth/innerHeight,nn.updateProjectionMatrix(),qr.updateProjectionMatrix()}),Yt.domElement.addEventListener("click",()=>{X.phase!=="lobby"&&!Js&&!Ki&&!On&&mo()}),cn("clickPlay").addEventListener("click",t=>{t.target.id!=="cpSettings"&&(oo(),Kc(Fn.vol*.7),mo())}),cn("cpSettings").addEventListener("click",t=>{t.stopPropagation(),xo.open(()=>Yr()),Yr()})}function HM(){let n=new Ye(new Ds(1,0),new Kt({color:"#ffd27a",transparent:!0,opacity:.95,depthWrite:!1}));return n.scale.set(.04,.04,.12),n.visible=!1,n.renderOrder=11,_n.add(n),n}async function VM(n){cn("loading").hidden=!1,cn("loadMsg").textContent="Cargando "+(Ef.find(r=>r.id===n)?.name||n)+"\u2026",await new Promise(r=>setTimeout(r,30));let e=ih[n]||(ih[n]=await Du(n)),t,i=null;if(X.cfg.size===2){if(!e.wing){let r=e.layers.map(l=>({...l,cls:l.cls.slice(),top:l.top?l.top.slice():l.top,bot:l.bot?l.bot.slice():l.bot,h:l.h?l.h.slice():l.h}));e.layers.flags&&(r.flags=e.layers.flags.slice());let a=Tc(e.info,r),o=y0(a,Lc(a));e.wing={W:a,nav:Lc(a),r:o}}t=e.wing.W,X.nav=e.wing.nav,i=e.wing.r}else t=e.W||(e.W=Tc(e.info,e.layers)),X.nav=e.nav||(e.nav=Lc(t));for(X.W=t,X.info=e.info,X.wingSite=i?i.site:null,X.mapName=Ef.find(r=>r.id===n)?.name||n;vn.children.length;)vn.remove(vn.children[0]);co&&co.traverse(r=>{r.geometry&&r.geometry.dispose(),r.material&&r.material.dispose()}),co=(e.mesh?d0(t,e.mesh,e.info,n,X.nav):h0(t,n)).mesh,vn.add(co),i&&i.cells.length&&co.add(_0(t,i.cells)),u0(vn,t,n,vm),Yt.shadowMap.needsUpdate=!0,Ut=C0(vn),Ut.floorAt=(r,a,o)=>gs(X.W,r,a,o+.2),Af=pf(t);for(let r of X.players.values())r.model&&(r.model=null,r.tag=null);for(let r of Xr.values())vn.remove(r);Xr.clear(),$i=null,Lf=!0,cn("loading").hidden=!0}function GM(n,e){let t=document.createElement("canvas");t.width=256,t.height=48;let i=t.getContext("2d");i.font="bold 30px Rajdhani, sans-serif",i.textAlign="center",i.fillStyle="rgba(0,0,0,.5)";let s=Math.min(250,i.measureText(n).width+20);i.fillRect(128-s/2,4,s,40),i.fillStyle=e==="T"?"#f0c060":"#8ab8ff",i.fillText(n,128,35);let r=new _a(new wr({map:new Fi(t),depthTest:!1,transparent:!0,sizeAttenuation:!1}));return r.scale.set(.1,.019,1),r.renderOrder=20,r}var WM=new Kt({color:"#ff3030",wireframe:!0,depthTest:!1,transparent:!0,opacity:.8}),Lm=new rn(.7,1.8,.7);Lm.translate(0,.9,0);function XM(n){let e=Ft();for(let t of X.players.values()){let i=t.id===ot,s=t.team+nh(t);if(!t.model||t.modelTeam!==s){t.model&&vn.remove(t.model),t.model=Yc(t.team,nh(t)),t.modelTeam=s,vn.add(t.model),t.tag=null;let l=new Ye(Lm,WM);l.renderOrder=19,l.visible=!1,t.model.add(l),t.esp=l;let c=Ut.muzzleMesh();t.model.userData.gun.add(c),t.mflash=c}let r=t.model;if(!i&&!(Tt()&&t.bot)&&t.nx!==void 0){let l=Math.min(1,n*14);t.x+=(t.nx-t.x)*l+(t.vx||0)*n*.5,t.y+=(t.ny-t.y)*l,t.z+=(t.nz-t.z)*l+(t.vz||0)*n*.5,isFinite(t.x)||(t.x=t.nx,t.y=t.ny,t.z=t.nz),t.yaw+=zf(t.nyaw||0,t.yaw||0)*l,t.pitch=(t.pitch||0)+((t.npitch||0)-(t.pitch||0))*l}let a=i&&!O.spec&&(e&&e.alive||O.deadT<.01)||O.spec===t.id;if(r.visible=!a&&(t.alive||(t.deadT||0)>0),!r.visible)continue;r.position.set(t.x,t.y,t.z),r.rotation.y=t.yaw,t.alive||(t.deadT=Math.min(3,(t.deadT||0)+n*2.5));let o=Math.hypot(t.vx||0,t.vz||0);if($c(r,t.alive?t.wpn||"knife":null,qc(t.fin,t.wpn||"knife")),t.mflash&&t.wpn){let l=ao(t.wpn);t.mflash.position.set(0,l.muzzle[1]*1.12,-l.muzzle[0]*1.12-.05),t.mflash.parent!==r.userData.gun&&r.userData.gun.add(t.mflash)}Zc(r,{speed:t.alive?o:0,duck:t.duck||0,pitch:t.pitch||0,onGround:t.onGround!==!1,dead:t.alive?0:t.deadT},n),t.mflash&&(t.flashT=(t.flashT||0)-n,t.mflash.visible=t.flashT>0,t.mflash.visible&&(t.mflash.rotation.z=Math.random()*3)),e&&t.team===e.team&&!i&&t.alive?(t.tag||(t.tag=GM(t.name,t.team),r.add(t.tag)),t.tag.visible=!0,t.tag.position.y=2.15-(t.duck||0)*.45):t.tag&&(t.tag.visible=!1),t.esp.visible=!!(Zi("ls.wall")&&e&&t.team!==e.team&&t.alive),!i&&t.alive&&o>3.6&&t.onGround!==!1&&(t.stepT=(t.stepT||0)-n,t.stepT<=0&&(t.stepT=.34,sf([t.x,t.y,t.z]),X.cfg.map==="dust2"&&Ut.dust([t.x,t.y,t.z])))}}var Xr=new Map,$i=null,ho=null,eh=0;function qM(n){for(let[t,i]of X.drops){let s=Xr.get(t);s||(s=Vr(i.w),s.scale.setScalar(1.2),s.rotation.set(0,Math.random()*6,Math.PI/2*.98),vn.add(s),Xr.set(t,s)),s.position.set(i.x,i.y+.04,i.z)}for(let[t,i]of Xr)X.drops.has(t)||(vn.remove(i),Xr.delete(t));let e=X.bomb;if($i||($i=Vr("c4"),$i.scale.setScalar(1.6),vn.add($i),ho=new Ye(new Bi(.03,6,4),new Kt({color:"#ff2020"})),ho.position.set(-.05,.05,.03),$i.add(ho)),$i.visible=e.state==="planted"||e.state==="dropped"||e.state==="defused",$i.visible&&$i.position.set(e.x,e.y+.05,e.z),e.state==="planted"){let t=Math.max(0,e.t),i=Math.max(.12,Math.min(1,t/35));eh-=n,ho.visible=eh>i*.6,eh<=0&&(eh=i,lf([e.x,e.y,e.z],t<10))}else ho.visible=!1}var vf=0,Mf=0;function YM(n){let e=Ft();if(!e||!O.pl)return;let t=O.pl;if(Ff(),!e.alive){O.deadT+=n;return}O.drawT-=n,O.fireT-=n,O.nadeCd-=n,O.pickCd-=n,O.inspect&&(O.inspect=Math.max(0,O.inspect-n)),O.reloadT>0&&(O.reloadT-=n,O.reloadT<=0&&TM()),O.rescope&&O.fireT<=0&&((qn()==="awp"||qn()==="ssg08")&&(O.scope=O.rescope),O.rescope=0);let i=qn(),s=et[i]||et.knife,r=X.phase==="freeze"||O.plantT>0||O.defusing||On&&!1,a=0,o=0;On||($t.has("KeyW")&&(a+=1),$t.has("KeyS")&&(a-=1),$t.has("KeyD")&&(o+=1),$t.has("KeyA")&&(o-=1)),(pn.mx||pn.mz)&&(a=-pn.mz,o=pn.mx);let l={f:r?0:a,s:r?0:o,jump:!r&&$t.has("Space"),crouch:$t.has("KeyC")||$t.has("ControlLeft")||$t.has("ControlRight"),walk:$t.has("ShiftLeft")||$t.has("ShiftRight")},c=(s.speed||250)*hm*(O.scope&&s.cat==="sniper"?.5:O.scope?.7:1);(i==="c4"||et[i]?.cat==="grenade")&&(c=245*hm),Zi("ls.speed")&&(c*=1.6);let h=n,f=0,u=t.onGround;for(;h>1e-6;){let g=Math.min(h,.008333333333333333),b=Ic(X.W,t,l,g,c);b&&(f=b),h-=g}for(let g of X.players.values()){if(g.id===ot||!g.alive||Math.abs(g.y-t.y)>1.6)continue;let b=t.x-g.x,E=t.z-g.z,S=Math.hypot(b,E);if(S<.62&&S>1e-4){let P=(.62-S)/S,A=t.x+b*P,p=t.z+E*P;Gi(X.W,A,p,t.y,t.h,rt.r)||(t.x=A,t.z=p)}}if(f){let g=zu(f);g>0&&Vt("fall",{d:g}),X0(null)}t.y<-20&&!O.voidSent&&(O.voidSent=!0,Vt("fall",{d:999}));let d=Math.hypot(t.vx,t.vz);if(t.onGround&&d>3.6&&(O.stepT-=n,O.stepT<=0&&(O.stepT=.36,sf(null,.45))),O.bob+=n*d*1.4*(t.onGround?1:0),e.x=t.x,e.y=t.y,e.z=t.z,e.yaw=t.yaw,e.pitch=t.pitch,e.duck=t.duck,e.vx=t.vx,e.vz=t.vz,e.onGround=t.onGround,e.wpn=i,e.h=t.h,e.scoped=O.scope>0,O.fireT<-.06&&(O.pp=Math.max(0,O.pp-(s.recover||9)*n*(1+O.pp*.15)),O.py*=Math.exp(-n*7),O.pp<.4&&(O.shots=0)),An||(O.trig=!1),(et[i]||{}).cat==="grenade"){if(An&&!O.nadeHold&&O.throwT<=0&&(O.nadeHold=Ks?.6:1),An&&Ks&&O.nadeHold&&(O.nadeHold=.6),O.nadeHold&&!An&&!Ks&&O.drawT<=0&&O.throwT<=0&&(X.phase==="freeze"?(qe.center("Esper\xE1 a que empiece la ronda",1e3),O.nadeHold=0):(O.throwT=.45,O.throwPow=O.nadeHold,O.nadeHold=0)),O.throwT>0){let g=O.throwT;O.throwT-=n,g>.3&&O.throwT<=.3&&IM(O.throwPow||1)}}else if(i==="c4"){let g=Qn(X.W,t.x,t.z)&12;if(An&&g&&t.onGround&&X.phase==="live"&&O.drawT<=0){O.plantT||cf();let b=O.plantT;O.plantT+=n,Math.floor(b*4)!==Math.floor(O.plantT*4)&&cf(),qe.progress("Plantando la bomba\u2026",O.plantT/zt.plant),O.plantT>=zt.plant&&(O.plantT=0,qe.progress(null),Vt("plant",{x:t.x,y:t.y,z:t.z}))}else O.plantT&&qe.progress(null),O.plantT=0,An&&!g&&!O.trig&&(qe.center("Ten\xE9s que estar en un sitio de bomba (A o B)",1300),O.trig=!0)}else An&&!On&&CM();if(O.defusing){let g=X.bomb;if(g.state!=="planted"||!$t.has("KeyE")||Math.hypot(t.x-g.x,t.z-g.z)>1.9)oh();else{O.defT+=n;let b=e.inv.kit?zt.kit:zt.defuse;qe.progress(e.inv.kit?"Desactivando (con kit)\u2026":"Desactivando\u2026",O.defT/b),O.defT>=b&&(Vt("defok",{}),O.defusing=!1,qe.progress(null))}}else O.plantT||qe.progress(null);if(O.pickCd<=0){for(let b of X.drops.values())if(!(Math.hypot(b.x-t.x,b.z-t.z)>.9||Math.abs(b.y-t.y)>1.2)&&(b.w==="defuser"?e.team==="CT"&&!e.inv.kit:!Ss(Xs(b.w)===1?"p":"s"))){Vt("take",{id:b.id}),O.pickCd=.6;break}let g=X.bomb;e.team==="T"&&g.state==="dropped"&&Math.hypot(g.x-t.x,g.z-t.z)<1&&Math.abs(g.y-t.y)<1.4&&(Vt("take",{id:"c4"}),O.pickCd=.8)}let M="",x=wm();x&&(M="E \xB7 agarrar "+Gr(x.w)),e.team==="CT"&&X.bomb.state==="planted"&&Math.hypot(t.x-X.bomb.x,t.z-X.bomb.z)<1.7&&!O.defusing&&(M="Manten\xE9 E para desactivar"),i==="c4"&&Qn(X.W,t.x,t.z)&12&&!O.plantT&&X.phase==="live"&&(M="Manten\xE9 clic para plantar"),qe.hint(M),vf-=n,vf<=0&&(vf=.05,Un("p",[+t.x.toFixed(2),+t.y.toFixed(2),+t.z.toFixed(2),+t.yaw.toFixed(3),+t.pitch.toFixed(3),+t.duck.toFixed(2),i,(O.scope?1:0)|(t.onGround?0:2),+t.vx.toFixed(2),+t.vz.toFixed(2)],{volatile:!0}))}function $M(n){if(Mf-=n,Mf>0)return;Mf=.05;let e=[];for(let t of X.players.values())t.bot&&t.pl&&e.push([t.id,+t.x.toFixed(2),+t.y.toFixed(2),+t.z.toFixed(2),+t.yaw.toFixed(3),+t.pitch.toFixed(3),+(t.duck||0).toFixed(2),t.wpn||"knife",(t.scoped?1:0)|(t.onGround?0:2),+(t.vx||0).toFixed(2),+(t.vz||0).toFixed(2)]);e.length&&Un("pb",e,{volatile:!0})}var mm=new li(0,0,0,"YXZ"),Ms=[];function Hf(n){let e=Ft();if(!e)return;if(Ms=[...X.players.values()].filter(i=>i.alive&&i.team===e.team),Ms.length||(Ms=[...X.players.values()].filter(i=>i.alive)),!Ms.length){O.spec=null;return}let t=Ms.findIndex(i=>i.id===O.spec);O.spec=Ms[(t+n+Ms.length)%Ms.length].id}function ZM(n){let e=Ft();if(!e||!O.pl)return;let t,i,s,r,a,o=qn(),l=e.team,c=O.scope,h=nh(e),f=qc(e.fin,qn());if(e.alive){let b=O.pl;t=b.x,i=b.y+En(b),s=b.z,r=b.yaw-O.py*.5*um,a=b.pitch+O.pp*.5*um+(O.punchHit||0)*.02,O.spec=null}else if(O.deadT<2.2||!X.players.size){let b=O.pl,E=Math.min(1,O.deadT/1.2);r=b.yaw+O.deadT*.3,a=-.35*E+b.pitch*(1-E),t=b.x+Math.sin(r)*2.6*E,s=b.z+Math.cos(r)*2.6*E,i=b.y+En(b)*(1-E)+1.6*E,o=null}else{let b=O.spec&&X.players.get(O.spec);(!b||!b.alive)&&Hf(1);let E=O.spec&&X.players.get(O.spec);if(E)t=E.x,i=E.y+En({duck:E.duck||0}),s=E.z,r=E.yaw,a=E.pitch,o=E.wpn||"knife",l=E.team,c=E.scoped?1:0,h=nh(E),f=qc(E.fin,o);else{let S=O.pl;t=S.x,i=S.y+3,s=S.z,r=S.yaw,a=-.5,o=null}}O.punchHit=Math.max(0,(O.punchHit||0)-n*6),O.shake>0&&(O.shake=Math.max(0,O.shake-n*1.5),t+=(Math.random()-.5)*O.shake*.12,i+=(Math.random()-.5)*O.shake*.12),nn.position.set(t,i,s),mm.set(a,r,0),nn.quaternion.setFromEuler(mm);let u=et[o],m=74/(c&&u&&u.scope?u.scope[Math.max(0,c-1)]:1);Math.abs(nn.fov-m)>.01&&(nn.fov=m,nn.updateProjectionMatrix()),W0(t,i,s,r);let M=c&&u&&u.cat==="sniper";if(_n.visible=!!o&&!M&&(e.alive||O.spec),_n.visible){k0(_n,o,l,h,f);let b=_n.userData,E=b.base||[.13,-.14,-.36];O.sway[0]+=(O.swayT[0]-O.sway[0])*Math.min(1,n*10),O.sway[1]+=(O.swayT[1]-O.sway[1])*Math.min(1,n*10),O.swayT[0]*=Math.exp(-n*10),O.swayT[1]*=Math.exp(-n*10),O.kick=Math.max(0,O.kick-n*7);let S=e.alive?O.bob:X.time*2,P=e.alive?Math.min(1,Math.hypot(O.pl.vx,O.pl.vz)/5):.3,A=E[0]+Math.cos(S)*.008*P+O.sway[0]*.02,p=E[1]+Math.abs(Math.sin(S))*.01*P-O.sway[1]*.02,v=E[2]+O.kick*.045,C=O.kick*.12,y=0,w=0;if(e.alive&&O.reloadT>0){let I=et[qn()],N=1-O.reloadT/I.reload,B=Math.sin(Math.min(1,N)*Math.PI);C-=B*.6,p-=B*.06,w+=B*.4}if(e.alive&&O.drawT>0){let I=Math.max(0,O.drawT)/.6;p-=I*.25,C-=I*.8}if(e.alive&&O.inspect){let I=Math.sin(Math.min(1,O.inspect/1.6)*Math.PI);y+=I*1.1,w+=I*.5,A-=I*.08}if(o==="knife"&&e.alive&&O.fireT>0){let I=O.fireT/(O.knife2?1:.45);y-=Math.sin(I*Math.PI)*.9,v-=Math.sin(I*Math.PI)*.08}if((O.plantT>0||O.defusing)&&(p-=.08,C-=.7),e.alive&&O.nadeHold&&(p-=.03,v+=.06,C+=.25),e.alive&&O.throwT>0){let I=1-O.throwT/.45,N=Math.sin(Math.min(1,I)*Math.PI);v-=N*.25,p+=N*.12,C-=N*1.2,I>.4&&(_n.userData.gun.visible=!1)}else _n.userData.gun.visible=!0;let R=b.rot||[0,0,0];b.hold.position.set(A,p,v),b.hold.rotation.set(C+R[0],y+R[1],w+R[2]),H0(_n),_n.position.copy(nn.position),_n.quaternion.copy(nn.quaternion),qr.position.copy(nn.position),qr.quaternion.copy(nn.quaternion);let _=b.flash;O.flashT=(O.flashT||0)-n;let T=ao(o);_&&(_.visible=O.flashT>0&&u&&!u.silent&&u.cat!=="knife",_.visible&&(_.position.set(0,T.muzzle[1],-T.muzzle[0]-.05).applyMatrix4(b.hold.matrix),_.quaternion.setFromEuler(b.hold.rotation),_.rotateZ(Math.random()*3))),b.gun.updateWorldMatrix(!0,!1),fo.set(0,T.muzzle[1],-T.muzzle[0]).applyMatrix4(b.gun.matrixWorld)}cn("scope").hidden=!M;let x=!M&&(e.alive||O.spec)&&!(u&&u.cat==="sniper"),g=Fn.xGap;!Fn.xStatic&&e.alive&&u&&u.dmg&&(g=Fn.xGap+Math.max(0,eo(u,{speed:Math.hypot(O.pl.vx,O.pl.vz),onGround:O.pl.onGround,duck:O.pl.duck,scoped:O.scope>0,shots:O.shots})*900-1)),qe.crosshair(Math.min(60,g),x,Fn)}var bf=0,Sf=0;function KM(n){let e=Ft();if(!e||(po=Math.max(0,po-n*1.4),qe.el.hurt.style.opacity=Math.max(po,e.alive&&e.hp<=30?.22+.14*Math.sin(X.time*4):0).toFixed(2),O.blind=Math.max(0,O.blind-n),qe.el.flash.style.opacity=Math.min(1,O.blind/1.6).toFixed(3),bf-=n,bf>0))return;bf=.05;let t=O.spec&&!e.alive?X.players.get(O.spec):e;qe.money(e.money),qe.vitals(t?t.hp:0,t?t.ar:0,t&&t.helm);let i=e.alive?qn():t&&t.wpn,s=et[i],r=O.slot,a=r==="p"||r==="s"?O.ammo[r]:null;qe.ammo(i?Gr(i):"",a?a[0]:0,a?a[1]:0,e.alive&&!!a&&!!s&&!!s.mag);let o=[];e.alive&&(e.inv.p&&o.push({key:1,slot:"p",id:e.inv.p,name:Gr(e.inv.p)}),e.inv.s&&o.push({key:2,slot:"s",id:e.inv.s,name:Gr(e.inv.s)}),o.push({key:3,slot:"k",id:"knife",name:"Cuchillo"}),e.inv.zeus&&o.push({key:3,slot:"z",id:"zeus",name:"Zeus x27"}),e.inv.g.length&&o.push({key:4,slot:"g",id:e.inv.g.join(),name:e.inv.g.map(Gr).join(" \xB7 ")}),e.inv.c4&&o.push({key:5,slot:"c4",id:"c4",name:"C4"}),e.inv.kit&&o.push({key:"",slot:"kit",id:"kit",name:"Kit de desactivaci\xF3n"})),qe.slots(o.filter(b=>b.slot!=="g"&&b.slot!=="kit"),O.slot,e.alive?e.inv.g:[],O.gsel);let l=X.bomb.state==="planted";qe.clock(X.timeLeft,l||X.phase==="live"&&X.timeLeft<10,l);let c=X.score[X.half],h=X.score[1-X.half],f=0,u=0,d=0,m=0;for(let b of X.players.values())b.team==="T"?(u++,b.alive&&f++):(m++,b.alive&&d++);let M=b=>[...X.players.values()].filter(E=>E.team===b).map(E=>({n:E.name,a:E.alive}));if(qe.score(c,h,M("T"),M("CT")),qe.el.buyHint.hidden=!(Rf()&&!On),On)if(!Rf())lh(!1);else{let b=cn("buyTime"),E=X.phase==="freeze"?Math.ceil(X.timeLeft+zt.buy):Math.max(0,Math.ceil(zt.buy-(zt.live-X.timeLeft)));b.textContent="0:"+String(E).padStart(2,"0")}let x=qe.el.spec;!e.alive&&O.deadT>2.2&&t&&t!==e?(x.hidden=!1,x.innerHTML="Mirando a <b>"+t.name.replace(/</g,"")+"</b><small>Clic o Espacio: siguiente</small>"):x.hidden=!0,X.phase==="freeze"&&e.alive?qe.center("La ronda empieza en "+Math.ceil(X.timeLeft)+" \xB7 B para comprar",0):X.phase==="freeze"||qe.el.centerMsg.textContent.startsWith("La ronda empieza")&&qe.center("",1);let g=$t.has("Tab")||X.phase==="over";if(qe.el.board.hidden=!g,g&&(qe.el.board.innerHTML=lm(X,ot)),Sf-=.05,Sf<=0&&Af){Sf=.1;let b=t&&t!==e?{x:t.x,z:t.z,yaw:t.yaw}:{x:O.pl.x,z:O.pl.z,yaw:O.pl.yaw},E=[],S=[O.pl.x,O.pl.y+1.6,O.pl.z];for(let A of X.players.values())A.alive&&(A.team===e.team?E.push({x:A.x,z:A.z,col:A.team==="T"?"#f0c060":"#8ab8ff",me:A.id===ot}):e.alive&&A.seenT>X.time-.6&&E.push({x:A.x,z:A.z,col:"#ff4040"}));if(om(cn("radar"),Af,X.W,b,E,{s:X.bomb.state,x:X.bomb.x,z:X.bomb.z,seen:!0},e.team),e.alive)for(let A of X.players.values())A.alive&&A.team!==e.team&&Math.hypot(A.x-O.pl.x,A.z-O.pl.z)<60&&to(X.W,X.nades,S,[A.x,A.y,A.z,1])&&(A.seenT=X.time);let P=Qn(X.W,b.x,b.z);qe.el.zoneName.textContent=P&4?"Sitio A":P&8?"Sitio B":P&16?"Base T":P&32?"Base CT":""}}var gm=performance.now();function Nm(n){requestAnimationFrame(Nm);let e=Math.min(.05,(n-gm)/1e3);if(gm=n,X.phase==="lobby"&&js&&Yt){js.render(Yt,e);return}if(X.phase!=="lobby"&&Lf){let t=window.__ls&&window.__ls.ff||0;for(let i=0;i<t;i++)xm(.05);if(xm(e),Ut.update(e,X.time,nn),ZM(e),KM(e),window.__ls.cam){let i=window.__ls.cam;nn.position.set(i[0],i[1],i[2]),nn.lookAt(i[3],i[4],i[5]),nn.fov!==74&&(nn.fov=74,nn.updateProjectionMatrix()),_n.visible=!1}An&&Ft()&&!Ft().alive&&O.deadT>2.2&&(An=!1,Hf(1)),Yt.clear(),Yt.render(vn,nn),Yt.clearDepth(),_n.visible&&Yt.render(uo,qr)}}function xm(n){X.time+=n,Tt()&&It?(It.tick(n),jt&&jt.tick(n),$M(n)):X.phase!=="lobby"&&(X.timeLeft-=n,X.bomb.state==="planted"&&(X.bomb.t-=n)),YM(n),LM(n),XM(n),qM(n)}var Zi=n=>!!(window.Arcade&&Arcade.admin&&Arcade.admin.get(n));function JM(){Arcade.admin&&(Arcade.admin.define([{id:"ls.god",label:"Inmortal",type:"toggle"},{id:"ls.wall",label:"Ver a trav\xE9s de paredes",type:"toggle"},{id:"ls.aim",label:"Aimbot (al disparar)",type:"toggle"},{id:"ls.norecoil",label:"Sin retroceso ni dispersi\xF3n",type:"toggle"},{id:"ls.ammo",label:"Balas infinitas",type:"toggle"},{id:"ls.speed",label:"S\xFAper velocidad",type:"toggle"},{id:"ls.money",label:"Plata al m\xE1ximo",type:"button"},{id:"ls.heal",label:"Curarme + chaleco",type:"button"},{id:"ls.kill",label:"Matar a los enemigos",type:"button"},{id:"ls.win",label:"Ganar la ronda",type:"button"}]),Arcade.admin.on("ls.god",n=>Vt("adm",{a:"god",v:!!n})),Arcade.admin.on("ls.money",()=>Vt("adm",{a:"money"})),Arcade.admin.on("ls.heal",()=>Vt("adm",{a:"heal"})),Arcade.admin.on("ls.kill",()=>Vt("adm",{a:"kill"})),Arcade.admin.on("ls.win",()=>Vt("adm",{a:"win"})))}var Tf={};function jM(n){return Tf[n]||(Tf[n]=(async()=>{try{let e=ih[n]||(ih[n]=await Du(n));return e.W=e.W||Tc(e.info,e.layers),pf(e.W)}catch(e){return console.warn(e),null}})()),Tf[n]}var js=null;function Cf(){js.show()}function Pf(){js.refresh()}function Wr(){Tt()&&(Un("cfg",{cfg:X.cfg,prefs:X.prefs}),Pf())}var rh=new Set,wf=0;async function ym(n){if(X.cfg=n.cfg,X.prefs=n.prefs||{},js.hide(),await VM(X.cfg.map),X.phase="loading",cn("hud").hidden=!1,Tt()){rh.add(ot);let e=()=>{((Ht.players||[]).every(i=>rh.has(i.id))||wf<=0)&&QM()};wf=1,setTimeout(()=>{wf=0,e()},15e3),X.tryBegin=e,e()}else Un("ready",{},{to:Ht.hostId});Yr(),Ki||mo()}var If=!1;function QM(){if(If)return;If=!0,It=Wu(X);let n=(Ht.players||[{id:ot,name:"Jugador",slot:0}]).map(e=>{let t=X.prefs[e.id]||{};return{id:e.id,name:e.name,slot:e.slot,pref:t.t??-1}});It.setup(n),jt=qu(X,It),It.startMatch()}function eb(){X.phase="lobby",If=!1,It=null,jt=null,rh.clear(),X.players.clear(),X.drops.clear(),X.nades.length=0,cn("hud").hidden=!0,qe.banner(null),clearInterval(th),document.exitPointerLock&&document.exitPointerLock(),Cf(),Yr()}function tb(){if(!(X.phase==="lobby"||X.phase==="loading"||It)){It=Wu(X),It.adopt(),jt=qu(X,It);for(let n of X.players.values())n.bot&&n.alive&&jt.place(n,[n.x,n.y,n.z,n.yaw]),n.dmgBy||(n.dmgBy={});jt.roundStart(),It.markDirty()}}async function nb(){qe.init(),kM(),SM(),requestAnimationFrame(Nm),Ht=await Arcade.ready(),ot=Ht.me.id,(!Ht.players||!Ht.players.length)&&(Ht.players=[Ht.me]),cn("loading").hidden=!0,JM();for(let e of bM)Arcade.on(e,(t,i,s)=>{Tt()&&It&&It.handle(e,t,i,s||{})});for(let e of["st","rs","ev","p","pb","sh","nd"])Arcade.on(e,(t,i)=>{(e==="ev"||e==="st"||e==="rs")&&Tt()||kf(e,t,i)});Arcade.on("cfg",e=>{Tt()||(X.cfg=e.cfg,X.prefs=e.prefs||{},X.phase==="lobby"&&Pf())}),Arcade.on("pref",(e,t)=>{Tt()&&(X.prefs[t]=e,Wr())}),Arcade.on("start",e=>{X.phase==="lobby"&&ym(e)}),Arcade.on("ready",(e,t)=>{Tt()&&(rh.add(t),X.tryBegin&&X.tryBegin())}),Arcade.on("hello",(e,t)=>{Tt()&&X.phase==="lobby"&&Wr()}),Arcade.onPlayerLeft(e=>{Ht.players=(Ht.players||[]).filter(i=>i.id!==e);let t=X.players.get(e);t&&Tt()&&It&&(t.bot=!0,t.name=t.name+" (bot)",t.alive&&jt&&jt.place(t,[t.x,t.y,t.z,t.yaw]),It.markDirty()),X.phase==="lobby"&&Pf(),Tt()&&X.tryBegin&&X.tryBegin()}),Arcade.onHostChanged(()=>{Tt()&&(tb(),X.phase==="lobby"&&(Cf(),Wr()))});let n=X.emit;X.emit=(e,t)=>{if(e==="start"){Un("start",t),ym(t);return}n(e,t)},js=sm({G:X,store:ah,MAPS:Ef,LENGTHS:Gu,DIFF:zc,mapThumb:jM,ctx:()=>Ht,myId:()=>ot,isHost:Tt,pushCfg:Wr,openSettings:e=>xo.open(e),sendPref:e=>{X.prefs[ot]=e,Tt()?Wr():Un("pref",e,{to:Ht.hostId})},onStart:()=>{oo(),Ki||Mm(),X.emit("start",{cfg:X.cfg,prefs:X.prefs})}}),X.prefs[ot]=js.myPref(),Cf(),Tt()?Wr():(Un("hello",{},{to:Ht.hostId}),Un("pref",X.prefs[ot],{to:Ht.hostId}))}nb();window.__ls={G:X,M:O,me:Ft,req:Vt,get H(){return It},get BOTS(){return jt},get camera(){return nn},keys:$t,look:Nf,onKey:Df,traceShot:Fc,targets:Bf,shotDir:kr,setMouse(n,e){An=n,Ks=!!e,e&&Of()}};
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
