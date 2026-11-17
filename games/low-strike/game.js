var Zu=0,Rc=1,$u=2;var Xr=1,Ju=2,js=3,Wi=0,Jt=1,si=2,hs=0,Qs=1,Cc=2,Ic=3,Pc=4,Ku=5;var us=100,ju=101,Qu=102,ef=103,tf=104,nf=200,sf=201,rf=202,af=203,Lc=204,Nc=205,of=206,lf=207,cf=208,hf=209,uf=210,ff=211,df=212,pf=213,mf=214,Ja=0,Ka=1,ja=2,Vs=3,Qa=4,eo=5,to=6,no=7,Ro=0,gf=1,xf=2,ri=0,Dc=1,Uc=2,Fc=3,Oc=4,Bc=5,zc=6,kc=7;var Hc=300,fs=301,er=302,Co=303,Io=304,io=1e3,jn=1001,so=1002,Xt=1003,_f=1004;var qr=1005;var hn=1006,Po=1007;var Mi=1008;var xn=1009,Vc=1010,Gc=1011,tr=1012,Lo=1013,Yn=1014,Bn=1015,Zn=1016,No=1017,Do=1018,ds=1020,Wc=35902,Xc=35899,qc=1021,Yc=1022,$n=1023,_i=1026,bi=1027,Uo=1028,Fo=1029,Xi=1030,Oo=1031;var Bo=1033,Yr=33776,Zr=33777,$r=33778,Jr=33779,zo=35840,ko=35841,Ho=35842,Vo=35843,Go=36196,Wo=37492,Xo=37496,qo=37488,Yo=37489,Kr=37490,Zo=37491,$o=37808,Jo=37809,Ko=37810,jo=37811,Qo=37812,el=37813,tl=37814,nl=37815,il=37816,sl=37817,rl=37818,al=37819,ol=37820,ll=37821,cl=36492,hl=36494,ul=36495,fl=36283,dl=36284,jr=36285,pl=36286;var Sr=2300,ro=2301,Za=2302,vc=2303,Mc=2400,bc=2401,Sc=2402;var yf=3200;var ml=0,vf=1,Si="",wn="srgb",Tr="srgb-linear",wr="linear",st="srgb";var $a=7680;var Mf=519,bf=512,Sf=513,Tf=514,Zc=515,wf=516,Ef=517,$c=518,Jc=519,Kc=35044,nr=35048;var jc="300 es",Un=2e3,Gs=2001;function kp(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Hp(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Er(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Af(){let n=Er("canvas");return n.style.display="block",n}var vu={},Ws=null;function Ar(...n){let e="THREE."+n.shift();Ws?Ws("log",e,...n):console.log(e,...n)}function Rf(n){let e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Le(...n){n=Rf(n);let e="THREE."+n.shift();if(Ws)Ws("warn",e,...n);else{let t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function Ne(...n){n=Rf(n);let e="THREE."+n.shift();if(Ws)Ws("error",e,...n);else{let t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function br(...n){let e=n.join(" ");e in vu||(vu[e]=!0,Le(...n))}function Cf(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}var If={[Ja]:Ja,[ja]:to,[Qa]:Qa,[Vs]:eo,[Ka]:Ka,[to]:ja,[no]:no,[eo]:Vs},Qn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let s=i[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Kl=Math.PI/180,ao=180/Math.PI;function ps(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(tn[n&255]+tn[n>>8&255]+tn[n>>16&255]+tn[n>>24&255]+"-"+tn[e&255]+tn[e>>8&255]+"-"+tn[e>>16&15|64]+tn[e>>24&255]+"-"+tn[t&63|128]+tn[t>>8&255]+"-"+tn[t>>16&255]+tn[t>>24&255]+tn[i&255]+tn[i>>8&255]+tn[i>>16&255]+tn[i>>24&255]).toLowerCase()}function Ke(n,e,t){return Math.max(e,Math.min(t,n))}function Vp(n,e){return(n%e+e)%e}function jl(n,e,t){return(1-t)*n+t*e}function Pf(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function gl(n){switch(n.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Lf(n,e){if(e.constructor===Float32Array)return n;let t=gl(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(n/t,-1)}function Nf(n,e){if(e.constructor===Float32Array)return n;let t=gl(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(n*t)}var Oe=class{static{this.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Ke(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ei=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,o){let l=i[s+0],c=i[s+1],h=i[s+2],p=i[s+3],f=r[a+0],m=r[a+1],x=r[a+2],y=r[a+3];if(p!==y||l!==f||c!==m||h!==x){let u=l*f+c*m+h*x+p*y;u<0&&(f=-f,m=-m,x=-x,y=-y,u=-u);let d=1-o;if(u<.9995){let M=Math.acos(u),C=Math.sin(M);d=Math.sin(d*M)/C,o=Math.sin(o*M)/C,l=l*d+f*o,c=c*d+m*o,h=h*d+x*o,p=p*d+y*o}else{l=l*d+f*o,c=c*d+m*o,h=h*d+x*o,p=p*d+y*o;let M=1/Math.sqrt(l*l+c*c+h*h+p*p);l*=M,c*=M,h*=M,p*=M}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=p}static multiplyQuaternionsFlat(e,t,i,s,r,a){let o=i[s],l=i[s+1],c=i[s+2],h=i[s+3],p=r[a],f=r[a+1],m=r[a+2],x=r[a+3];return e[t]=o*x+h*p+l*m-c*f,e[t+1]=l*x+h*f+c*p-o*m,e[t+2]=c*x+h*m+o*f-l*p,e[t+3]=h*x-o*p-l*f-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(s/2),p=o(r/2),f=l(i/2),m=l(s/2),x=l(r/2);switch(a){case"XYZ":this._x=f*h*p+c*m*x,this._y=c*m*p-f*h*x,this._z=c*h*x+f*m*p,this._w=c*h*p-f*m*x;break;case"YXZ":this._x=f*h*p+c*m*x,this._y=c*m*p-f*h*x,this._z=c*h*x-f*m*p,this._w=c*h*p+f*m*x;break;case"ZXY":this._x=f*h*p-c*m*x,this._y=c*m*p+f*h*x,this._z=c*h*x+f*m*p,this._w=c*h*p-f*m*x;break;case"ZYX":this._x=f*h*p-c*m*x,this._y=c*m*p+f*h*x,this._z=c*h*x-f*m*p,this._w=c*h*p+f*m*x;break;case"YZX":this._x=f*h*p+c*m*x,this._y=c*m*p+f*h*x,this._z=c*h*x-f*m*p,this._w=c*h*p-f*m*x;break;case"XZY":this._x=f*h*p-c*m*x,this._y=c*m*p-f*h*x,this._z=c*h*x+f*m*p,this._w=c*h*p+f*m*x;break;default:Le("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],p=t[10],f=i+o+p;if(f>0){let m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(h-l)*m,this._y=(r-c)*m,this._z=(a-s)*m}else if(i>o&&i>p){let m=2*Math.sqrt(1+i-o-p);this._w=(h-l)/m,this._x=.25*m,this._y=(s+a)/m,this._z=(r+c)/m}else if(o>p){let m=2*Math.sqrt(1+o-i-p);this._w=(r-c)/m,this._x=(s+a)/m,this._y=.25*m,this._z=(l+h)/m}else{let m=2*Math.sqrt(1+p-i-o);this._w=(a-s)/m,this._x=(r+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ke(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-i*c,this._z=r*h+a*c+i*l-s*o,this._w=a*h-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},X=class{static{this.prototype.isVector3=!0}constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Mu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Mu.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*i),h=2*(o*t-r*s),p=2*(r*i-a*t);return this.x=t+l*c+a*p-o*h,this.y=i+l*h+o*c-r*p,this.z=s+l*p+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this.z=Ke(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this.z=Ke(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ql.copy(this).projectOnVector(e),this.sub(Ql)}reflect(e){return this.sub(Ql.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Ke(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ql=new X,Mu=new ei,Be=class{static{this.prototype.isMatrix3=!0}constructor(e,t,i,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c)}set(e,t,i,s,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],p=i[7],f=i[2],m=i[5],x=i[8],y=s[0],u=s[3],d=s[6],M=s[1],C=s[4],b=s[7],_=s[2],S=s[5],g=s[8];return r[0]=a*y+o*M+l*_,r[3]=a*u+o*C+l*S,r[6]=a*d+o*b+l*g,r[1]=c*y+h*M+p*_,r[4]=c*u+h*C+p*S,r[7]=c*d+h*b+p*g,r[2]=f*y+m*M+x*_,r[5]=f*u+m*C+x*S,r[8]=f*d+m*b+x*g,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-i*r*h+i*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],p=h*a-o*c,f=o*l-h*r,m=c*r-a*l,x=t*p+i*f+s*m;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/x;return e[0]=p*y,e[1]=(s*c-h*i)*y,e[2]=(o*i-s*a)*y,e[3]=f*y,e[4]=(h*t-s*l)*y,e[5]=(s*r-o*t)*y,e[6]=m*y,e[7]=(i*l-c*t)*y,e[8]=(a*t-i*r)*y,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return br("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ec.makeScale(e,t)),this}rotate(e){return br("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ec.makeRotation(-e)),this}translate(e,t){return br("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ec.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},ec=new Be,bu=new Be().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Su=new Be().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Gp(){let n={enabled:!0,workingColorSpace:Tr,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===st&&(s.r=xi(s.r),s.g=xi(s.g),s.b=xi(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===st&&(s.r=Hs(s.r),s.g=Hs(s.g),s.b=Hs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Si?wr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Tr]:{primaries:e,whitePoint:i,transfer:wr,toXYZ:bu,fromXYZ:Su,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:wn},outputColorSpaceConfig:{drawingBufferColorSpace:wn}},[wn]:{primaries:e,whitePoint:i,transfer:st,toXYZ:bu,fromXYZ:Su,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:wn}}}),n}var $e=Gp();function xi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Hs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Ss,oo=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Ss===void 0&&(Ss=Er("canvas")),Ss.width=e.width,Ss.height=e.height;let s=Ss.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Ss}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Er("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=xi(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(xi(t[i]/255)*255):t[i]=xi(t[i]);return{data:t,width:e.width,height:e.height}}else return Le("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Wp=0,Xs=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Wp++}),this.uuid=ps(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(tc(s[a].image)):r.push(tc(s[a]))}else r=tc(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function tc(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?oo.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Le("Texture: Unable to serialize Texture."),{})}var Xp=0,nc=new X,un=class n extends Qn{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=jn,s=jn,r=hn,a=Mi,o=$n,l=xn,c=n.DEFAULT_ANISOTROPY,h=Si){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Xp++}),this.uuid=ps(),this.name="",this.source=new Xs(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Oe(0,0),this.repeat=new Oe(1,1),this.center=new Oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Be,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(nc).x}get height(){return this.source.getSize(nc).y}get depth(){return this.source.getSize(nc).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){Le(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Le(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Hc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case io:e.x=e.x-Math.floor(e.x);break;case jn:e.x=e.x<0?0:1;break;case so:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case io:e.y=e.y-Math.floor(e.y);break;case jn:e.y=e.y<0?0:1;break;case so:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};un.DEFAULT_IMAGE=null;un.DEFAULT_MAPPING=Hc;un.DEFAULT_ANISOTROPY=1;var _t=class{static{this.prototype.isVector4=!0}constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,c=l[0],h=l[4],p=l[8],f=l[1],m=l[5],x=l[9],y=l[2],u=l[6],d=l[10];if(Math.abs(h-f)<.01&&Math.abs(p-y)<.01&&Math.abs(x-u)<.01){if(Math.abs(h+f)<.1&&Math.abs(p+y)<.1&&Math.abs(x+u)<.1&&Math.abs(c+m+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let C=(c+1)/2,b=(m+1)/2,_=(d+1)/2,S=(h+f)/4,g=(p+y)/4,T=(x+u)/4;return C>b&&C>_?C<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(C),s=S/i,r=g/i):b>_?b<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),i=S/s,r=T/s):_<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(_),i=g/r,s=T/r),this.set(i,s,r,t),this}let M=Math.sqrt((u-x)*(u-x)+(p-y)*(p-y)+(f-h)*(f-h));return Math.abs(M)<.001&&(M=1),this.x=(u-x)/M,this.y=(p-y)/M,this.z=(f-h)/M,this.w=Math.acos((c+m+d-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this.z=Ke(this.z,e.z,t.z),this.w=Ke(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this.z=Ke(this.z,e,t),this.w=Ke(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},lo=class extends Qn{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:hn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new _t(0,0,e,t),this.scissorTest=!1,this.viewport=new _t(0,0,e,t),this.textures=[];let s=i.count;for(let r=0;r<s;r++)this.textures[r]=new un({width:e,height:t,depth:i.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:hn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Xs(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},En=class extends lo{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Rr=class extends un{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Xt,this.minFilter=Xt,this.wrapR=jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var co=class extends un{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Xt,this.minFilter=Xt,this.wrapR=jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var ot=class n{static{this.prototype.isMatrix4=!0}constructor(e,t,i,s,r,a,o,l,c,h,p,f,m,x,y,u){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c,h,p,f,m,x,y,u)}set(e,t,i,s,r,a,o,l,c,h,p,f,m,x,y,u){let d=this.elements;return d[0]=e,d[4]=t,d[8]=i,d[12]=s,d[1]=r,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=h,d[10]=p,d[14]=f,d[3]=m,d[7]=x,d[11]=y,d[15]=u,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,i=e.elements,s=1/Ts.setFromMatrixColumn(e,0).length(),r=1/Ts.setFromMatrixColumn(e,1).length(),a=1/Ts.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),p=Math.sin(r);if(e.order==="XYZ"){let f=a*h,m=a*p,x=o*h,y=o*p;t[0]=l*h,t[4]=-l*p,t[8]=c,t[1]=m+x*c,t[5]=f-y*c,t[9]=-o*l,t[2]=y-f*c,t[6]=x+m*c,t[10]=a*l}else if(e.order==="YXZ"){let f=l*h,m=l*p,x=c*h,y=c*p;t[0]=f+y*o,t[4]=x*o-m,t[8]=a*c,t[1]=a*p,t[5]=a*h,t[9]=-o,t[2]=m*o-x,t[6]=y+f*o,t[10]=a*l}else if(e.order==="ZXY"){let f=l*h,m=l*p,x=c*h,y=c*p;t[0]=f-y*o,t[4]=-a*p,t[8]=x+m*o,t[1]=m+x*o,t[5]=a*h,t[9]=y-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let f=a*h,m=a*p,x=o*h,y=o*p;t[0]=l*h,t[4]=x*c-m,t[8]=f*c+y,t[1]=l*p,t[5]=y*c+f,t[9]=m*c-x,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let f=a*l,m=a*c,x=o*l,y=o*c;t[0]=l*h,t[4]=y-f*p,t[8]=x*p+m,t[1]=p,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=m*p+x,t[10]=f-y*p}else if(e.order==="XZY"){let f=a*l,m=a*c,x=o*l,y=o*c;t[0]=l*h,t[4]=-p,t[8]=c*h,t[1]=f*p+y,t[5]=a*h,t[9]=m*p-x,t[2]=x*p-m,t[6]=o*h,t[10]=y*p+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(qp,e,Yp)}lookAt(e,t,i){let s=this.elements;return Sn.subVectors(e,t),Sn.lengthSq()===0&&(Sn.z=1),Sn.normalize(),Ni.crossVectors(i,Sn),Ni.lengthSq()===0&&(Math.abs(i.z)===1?Sn.x+=1e-4:Sn.z+=1e-4,Sn.normalize(),Ni.crossVectors(i,Sn)),Ni.normalize(),Ta.crossVectors(Sn,Ni),s[0]=Ni.x,s[4]=Ta.x,s[8]=Sn.x,s[1]=Ni.y,s[5]=Ta.y,s[9]=Sn.y,s[2]=Ni.z,s[6]=Ta.z,s[10]=Sn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],p=i[5],f=i[9],m=i[13],x=i[2],y=i[6],u=i[10],d=i[14],M=i[3],C=i[7],b=i[11],_=i[15],S=s[0],g=s[4],T=s[8],U=s[12],v=s[1],E=s[5],w=s[9],L=s[13],A=s[2],P=s[6],D=s[10],B=s[14],k=s[3],O=s[7],G=s[11],J=s[15];return r[0]=a*S+o*v+l*A+c*k,r[4]=a*g+o*E+l*P+c*O,r[8]=a*T+o*w+l*D+c*G,r[12]=a*U+o*L+l*B+c*J,r[1]=h*S+p*v+f*A+m*k,r[5]=h*g+p*E+f*P+m*O,r[9]=h*T+p*w+f*D+m*G,r[13]=h*U+p*L+f*B+m*J,r[2]=x*S+y*v+u*A+d*k,r[6]=x*g+y*E+u*P+d*O,r[10]=x*T+y*w+u*D+d*G,r[14]=x*U+y*L+u*B+d*J,r[3]=M*S+C*v+b*A+_*k,r[7]=M*g+C*E+b*P+_*O,r[11]=M*T+C*w+b*D+_*G,r[15]=M*U+C*L+b*B+_*J,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],p=e[6],f=e[10],m=e[14],x=e[3],y=e[7],u=e[11],d=e[15],M=l*m-c*f,C=o*m-c*p,b=o*f-l*p,_=a*m-c*h,S=a*f-l*h,g=a*p-o*h;return t*(y*M-u*C+d*b)-i*(x*M-u*_+d*S)+s*(x*C-y*_+d*g)-r*(x*b-y*S+u*g)}determinantAffine(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],h=e[10];return t*(a*h-o*c)-i*(r*h-o*l)+s*(r*c-a*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],p=e[9],f=e[10],m=e[11],x=e[12],y=e[13],u=e[14],d=e[15],M=t*o-i*a,C=t*l-s*a,b=t*c-r*a,_=i*l-s*o,S=i*c-r*o,g=s*c-r*l,T=h*y-p*x,U=h*u-f*x,v=h*d-m*x,E=p*u-f*y,w=p*d-m*y,L=f*d-m*u,A=M*L-C*w+b*E+_*v-S*U+g*T;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let P=1/A;return e[0]=(o*L-l*w+c*E)*P,e[1]=(s*w-i*L-r*E)*P,e[2]=(y*g-u*S+d*_)*P,e[3]=(f*S-p*g-m*_)*P,e[4]=(l*v-a*L-c*U)*P,e[5]=(t*L-s*v+r*U)*P,e[6]=(u*b-x*g-d*C)*P,e[7]=(h*g-f*b+m*C)*P,e[8]=(a*w-o*v+c*T)*P,e[9]=(i*v-t*w-r*T)*P,e[10]=(x*S-y*b+d*M)*P,e[11]=(p*b-h*S-m*M)*P,e[12]=(o*U-a*E-l*T)*P,e[13]=(t*E-i*U+s*T)*P,e[14]=(y*C-x*_-u*M)*P,e[15]=(h*_-p*C+f*M)*P,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+i,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,p=o+o,f=r*c,m=r*h,x=r*p,y=a*h,u=a*p,d=o*p,M=l*c,C=l*h,b=l*p,_=i.x,S=i.y,g=i.z;return s[0]=(1-(y+d))*_,s[1]=(m+b)*_,s[2]=(x-C)*_,s[3]=0,s[4]=(m-b)*S,s[5]=(1-(f+d))*S,s[6]=(u+M)*S,s[7]=0,s[8]=(x+C)*g,s[9]=(u-M)*g,s[10]=(1-(f+y))*g,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let a=Ts.set(s[0],s[1],s[2]).length(),o=Ts.set(s[4],s[5],s[6]).length(),l=Ts.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Vn.copy(this);let c=1/a,h=1/o,p=1/l;return Vn.elements[0]*=c,Vn.elements[1]*=c,Vn.elements[2]*=c,Vn.elements[4]*=h,Vn.elements[5]*=h,Vn.elements[6]*=h,Vn.elements[8]*=p,Vn.elements[9]*=p,Vn.elements[10]*=p,t.setFromRotationMatrix(Vn),i.x=a,i.y=o,i.z=l,this}makePerspective(e,t,i,s,r,a,o=Un,l=!1){let c=this.elements,h=2*r/(t-e),p=2*r/(i-s),f=(t+e)/(t-e),m=(i+s)/(i-s),x,y;if(l)x=r/(a-r),y=a*r/(a-r);else if(o===Un)x=-(a+r)/(a-r),y=-2*a*r/(a-r);else if(o===Gs)x=-a/(a-r),y=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=p,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=x,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,a,o=Un,l=!1){let c=this.elements,h=2/(t-e),p=2/(i-s),f=-(t+e)/(t-e),m=-(i+s)/(i-s),x,y;if(l)x=1/(a-r),y=a/(a-r);else if(o===Un)x=-2/(a-r),y=-(a+r)/(a-r);else if(o===Gs)x=-1/(a-r),y=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=p,c[9]=0,c[13]=m,c[2]=0,c[6]=0,c[10]=x,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},Ts=new X,Vn=new ot,qp=new X(0,0,0),Yp=new X(1,1,1),Ni=new X,Ta=new X,Sn=new X,Tu=new ot,wu=new ei,qn=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],p=s[2],f=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(Ke(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ke(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-p,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ke(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-p,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ke(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ke(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-p,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Ke(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:Le("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Tu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Tu,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return wu.setFromEuler(this),this.setFromQuaternion(wu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};qn.DEFAULT_ORDER="XYZ";var Cr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Zp=0,Eu=new X,ws=new ei,ui=new ot,wa=new X,dr=new X,$p=new X,Jp=new ei,Au=new X(1,0,0),Ru=new X(0,1,0),Cu=new X(0,0,1),Iu={type:"added"},Kp={type:"removed"},Es={type:"childadded",child:null},ic={type:"childremoved",child:null},At=class n extends Qn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Zp++}),this.uuid=ps(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new X,t=new qn,i=new ei,s=new X(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ot},normalMatrix:{value:new Be}}),this.matrix=new ot,this.matrixWorld=new ot,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Cr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ws.setFromAxisAngle(e,t),this.quaternion.multiply(ws),this}rotateOnWorldAxis(e,t){return ws.setFromAxisAngle(e,t),this.quaternion.premultiply(ws),this}rotateX(e){return this.rotateOnAxis(Au,e)}rotateY(e){return this.rotateOnAxis(Ru,e)}rotateZ(e){return this.rotateOnAxis(Cu,e)}translateOnAxis(e,t){return Eu.copy(e).applyQuaternion(this.quaternion),this.position.add(Eu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Au,e)}translateY(e){return this.translateOnAxis(Ru,e)}translateZ(e){return this.translateOnAxis(Cu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ui.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?wa.copy(e):wa.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),dr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ui.lookAt(dr,wa,this.up):ui.lookAt(wa,dr,this.up),this.quaternion.setFromRotationMatrix(ui),s&&(ui.extractRotation(s.matrixWorld),ws.setFromRotationMatrix(ui),this.quaternion.premultiply(ws.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ne("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Iu),Es.child=e,this.dispatchEvent(Es),Es.child=null):Ne("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Kp),ic.child=e,this.dispatchEvent(ic),ic.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ui.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ui.multiply(e.parent.matrixWorld)),e.applyMatrix4(ui),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Iu),Es.child=e,this.dispatchEvent(Es),Es.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(dr,e,$p),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(dr,Jp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let p=l[c];r(e.shapes,p)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),p=a(e.shapes),f=a(e.skeletons),m=a(e.animations),x=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),p.length>0&&(i.shapes=p),f.length>0&&(i.skeletons=f),m.length>0&&(i.animations=m),x.length>0&&(i.nodes=x)}return i.object=s,i;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};At.DEFAULT_UP=new X(0,1,0);At.DEFAULT_MATRIX_AUTO_UPDATE=!0;At.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Wt=class extends At{constructor(){super(),this.isGroup=!0,this.type="Group"}},jp={type:"move"},qs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Wt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Wt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Wt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let y of e.hand.values()){let u=t.getJointPose(y,i),d=this._getHandJoint(c,y);u!==null&&(d.matrix.fromArray(u.transform.matrix),d.matrix.decompose(d.position,d.quaternion,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=u.radius),d.visible=u!==null}let h=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],f=h.position.distanceTo(p.position),m=.02,x=.005;c.inputState.pinching&&f>m+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=m-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(jp)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Wt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},Df={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Di={h:0,s:0,l:0},Ea={h:0,s:0,l:0};function sc(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var De=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=wn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,$e.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=$e.workingColorSpace){return this.r=e,this.g=t,this.b=i,$e.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=$e.workingColorSpace){if(e=Vp(e,1),t=Ke(t,0,1),i=Ke(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=sc(a,r,e+1/3),this.g=sc(a,r,e),this.b=sc(a,r,e-1/3)}return $e.colorSpaceToWorking(this,s),this}setStyle(e,t=wn){function i(r){r!==void 0&&parseFloat(r)<1&&Le("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Le("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Le("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=wn){let i=Df[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Le("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=xi(e.r),this.g=xi(e.g),this.b=xi(e.b),this}copyLinearToSRGB(e){return this.r=Hs(e.r),this.g=Hs(e.g),this.b=Hs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=wn){return $e.workingToColorSpace(nn.copy(this),e),Math.round(Ke(nn.r*255,0,255))*65536+Math.round(Ke(nn.g*255,0,255))*256+Math.round(Ke(nn.b*255,0,255))}getHexString(e=wn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=$e.workingColorSpace){$e.workingToColorSpace(nn.copy(this),t);let i=nn.r,s=nn.g,r=nn.b,a=Math.max(i,s,r),o=Math.min(i,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let p=a-o;switch(c=h<=.5?p/(a+o):p/(2-a-o),a){case i:l=(s-r)/p+(s<r?6:0);break;case s:l=(r-i)/p+2;break;case r:l=(i-s)/p+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=$e.workingColorSpace){return $e.workingToColorSpace(nn.copy(this),t),e.r=nn.r,e.g=nn.g,e.b=nn.b,e}getStyle(e=wn){$e.workingToColorSpace(nn.copy(this),e);let t=nn.r,i=nn.g,s=nn.b;return e!==wn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Di),this.setHSL(Di.h+e,Di.s+t,Di.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Di),e.getHSL(Ea);let i=jl(Di.h,Ea.h,t),s=jl(Di.s,Ea.s,t),r=jl(Di.l,Ea.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},nn=new De;De.NAMES=Df;var Ir=class n{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new De(e),this.near=t,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},is=class extends At{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new qn,this.environmentIntensity=1,this.environmentRotation=new qn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Gn=new X,fi=new X,rc=new X,di=new X,As=new X,Rs=new X,Pu=new X,ac=new X,oc=new X,lc=new X,cc=new _t,hc=new _t,uc=new _t,gi=class n{constructor(e=new X,t=new X,i=new X){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Gn.subVectors(e,t),s.cross(Gn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Gn.subVectors(s,t),fi.subVectors(i,t),rc.subVectors(e,t);let a=Gn.dot(Gn),o=Gn.dot(fi),l=Gn.dot(rc),c=fi.dot(fi),h=fi.dot(rc),p=a*c-o*o;if(p===0)return r.set(0,0,0),null;let f=1/p,m=(c*l-o*h)*f,x=(a*h-o*l)*f;return r.set(1-m-x,x,m)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,di)===null?!1:di.x>=0&&di.y>=0&&di.x+di.y<=1}static getInterpolation(e,t,i,s,r,a,o,l){return this.getBarycoord(e,t,i,s,di)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,di.x),l.addScaledVector(a,di.y),l.addScaledVector(o,di.z),l)}static getInterpolatedAttribute(e,t,i,s,r,a){return cc.setScalar(0),hc.setScalar(0),uc.setScalar(0),cc.fromBufferAttribute(e,t),hc.fromBufferAttribute(e,i),uc.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(cc,r.x),a.addScaledVector(hc,r.y),a.addScaledVector(uc,r.z),a}static isFrontFacing(e,t,i,s){return Gn.subVectors(i,t),fi.subVectors(e,t),Gn.cross(fi).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Gn.subVectors(this.c,this.b),fi.subVectors(this.a,this.b),Gn.cross(fi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,a,o;As.subVectors(s,i),Rs.subVectors(r,i),ac.subVectors(e,i);let l=As.dot(ac),c=Rs.dot(ac);if(l<=0&&c<=0)return t.copy(i);oc.subVectors(e,s);let h=As.dot(oc),p=Rs.dot(oc);if(h>=0&&p<=h)return t.copy(s);let f=l*p-h*c;if(f<=0&&l>=0&&h<=0&&l-h>0)return a=l/(l-h),t.copy(i).addScaledVector(As,a);lc.subVectors(e,r);let m=As.dot(lc),x=Rs.dot(lc);if(x>=0&&m<=x)return t.copy(r);let y=m*c-l*x;if(y<=0&&c>=0&&x<=0)return o=c/(c-x),t.copy(i).addScaledVector(Rs,o);let u=h*x-m*p;if(u<=0&&p-h>=0&&m-x>=0)return Pu.subVectors(r,s),o=(p-h)/(p-h+(m-x)),t.copy(s).addScaledVector(Pu,o);let d=1/(u+y+f);return a=y*d,o=f*d,t.copy(i).addScaledVector(As,a).addScaledVector(Rs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},ti=class{constructor(e=new X(1/0,1/0,1/0),t=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Wn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Wn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Wn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Wn):Wn.fromBufferAttribute(r,a),Wn.applyMatrix4(e.matrixWorld),this.expandByPoint(Wn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Aa.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Aa.copy(i.boundingBox)),Aa.applyMatrix4(e.matrixWorld),this.union(Aa)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Wn),Wn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(pr),Ra.subVectors(this.max,pr),Cs.subVectors(e.a,pr),Is.subVectors(e.b,pr),Ps.subVectors(e.c,pr),Ui.subVectors(Is,Cs),Fi.subVectors(Ps,Is),Qi.subVectors(Cs,Ps);let t=[0,-Ui.z,Ui.y,0,-Fi.z,Fi.y,0,-Qi.z,Qi.y,Ui.z,0,-Ui.x,Fi.z,0,-Fi.x,Qi.z,0,-Qi.x,-Ui.y,Ui.x,0,-Fi.y,Fi.x,0,-Qi.y,Qi.x,0];return!fc(t,Cs,Is,Ps,Ra)||(t=[1,0,0,0,1,0,0,0,1],!fc(t,Cs,Is,Ps,Ra))?!1:(Ca.crossVectors(Ui,Fi),t=[Ca.x,Ca.y,Ca.z],fc(t,Cs,Is,Ps,Ra))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Wn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Wn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(pi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),pi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),pi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),pi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),pi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),pi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),pi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),pi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(pi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},pi=[new X,new X,new X,new X,new X,new X,new X,new X],Wn=new X,Aa=new ti,Cs=new X,Is=new X,Ps=new X,Ui=new X,Fi=new X,Qi=new X,pr=new X,Ra=new X,Ca=new X,es=new X;function fc(n,e,t,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){es.fromArray(n,r);let o=s.x*Math.abs(es.x)+s.y*Math.abs(es.y)+s.z*Math.abs(es.z),l=e.dot(es),c=t.dot(es),h=i.dot(es);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Dt=new X,Ia=new Oe,Qp=0,sn=class extends Qn{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Qp++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Kc,this.updateRanges=[],this.gpuType=Bn,this.version=0,this._normalizationScale=e!==void 0?gl(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ia.fromBufferAttribute(this,t),Ia.applyMatrix3(e),this.setXY(t,Ia.x,Ia.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Dt.fromBufferAttribute(this,t),Dt.applyMatrix3(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Dt.fromBufferAttribute(this,t),Dt.applyMatrix4(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Dt.fromBufferAttribute(this,t),Dt.applyNormalMatrix(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Dt.fromBufferAttribute(this,t),Dt.transformDirection(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,t,i){return this.normalized&&(i=this._normalize(i)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Lf(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Nf(e,this.array)}};var Pr=class extends sn{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Lr=class extends sn{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var ft=class extends sn{constructor(e,t,i){super(new Float32Array(e),t,i)}},em=new ti,mr=new X,dc=new X,Bi=class{constructor(e=new X,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):em.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;mr.subVectors(e,this.center);let t=mr.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(mr,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(dc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(mr.copy(e.center).add(dc)),this.expandByPoint(mr.copy(e.center).sub(dc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},tm=0,Dn=new ot,pc=new At,Ls=new X,Tn=new ti,gr=new ti,Gt=new X,rn=class n extends Qn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:tm++}),this.uuid=ps(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(kp(e)?Lr:Pr)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Be().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Dn.makeRotationFromQuaternion(e),this.applyMatrix4(Dn),this}rotateX(e){return Dn.makeRotationX(e),this.applyMatrix4(Dn),this}rotateY(e){return Dn.makeRotationY(e),this.applyMatrix4(Dn),this}rotateZ(e){return Dn.makeRotationZ(e),this.applyMatrix4(Dn),this}translate(e,t,i){return Dn.makeTranslation(e,t,i),this.applyMatrix4(Dn),this}scale(e,t,i){return Dn.makeScale(e,t,i),this.applyMatrix4(Dn),this}lookAt(e){return pc.lookAt(e),pc.updateMatrix(),this.applyMatrix4(pc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ls).negate(),this.translate(Ls.x,Ls.y,Ls.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ft(i,3))}else{let i=Math.min(e.length,t.count);for(let s=0;s<i;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Le("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ti);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ne("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];Tn.setFromBufferAttribute(r),this.morphTargetsRelative?(Gt.addVectors(this.boundingBox.min,Tn.min),this.boundingBox.expandByPoint(Gt),Gt.addVectors(this.boundingBox.max,Tn.max),this.boundingBox.expandByPoint(Gt)):(this.boundingBox.expandByPoint(Tn.min),this.boundingBox.expandByPoint(Tn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ne('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Bi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ne("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new X,1/0);return}if(e){let i=this.boundingSphere.center;if(Tn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];gr.setFromBufferAttribute(o),this.morphTargetsRelative?(Gt.addVectors(Tn.min,gr.min),Tn.expandByPoint(Gt),Gt.addVectors(Tn.max,gr.max),Tn.expandByPoint(Gt)):(Tn.expandByPoint(gr.min),Tn.expandByPoint(gr.max))}Tn.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)Gt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Gt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Gt.fromBufferAttribute(o,c),l&&(Ls.fromBufferAttribute(e,c),Gt.add(Ls)),s=Math.max(s,i.distanceToSquared(Gt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ne('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ne("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new sn(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));let o=[],l=[],c=new Uint8Array(i.count);for(let U=0;U<i.count;U++)o[U]=new X,l[U]=new X;let h=new X,p=new X,f=new X,m=new Oe,x=new Oe,y=new Oe,u=new X,d=new X;function M(U,v,E){c[U]=c[v]=c[E]=1,h.fromBufferAttribute(i,U),p.fromBufferAttribute(i,v),f.fromBufferAttribute(i,E),m.fromBufferAttribute(r,U),x.fromBufferAttribute(r,v),y.fromBufferAttribute(r,E),p.sub(h),f.sub(h),x.sub(m),y.sub(m);let w=1/(x.x*y.y-y.x*x.y);isFinite(w)&&(u.copy(p).multiplyScalar(y.y).addScaledVector(f,-x.y).multiplyScalar(w),d.copy(f).multiplyScalar(x.x).addScaledVector(p,-y.x).multiplyScalar(w),o[U].add(u),o[v].add(u),o[E].add(u),l[U].add(d),l[v].add(d),l[E].add(d))}let C=this.groups;C.length===0&&(C=[{start:0,count:e.count}]);for(let U=0,v=C.length;U<v;++U){let E=C[U],w=E.start,L=E.count;for(let A=w,P=w+L;A<P;A+=3)M(e.getX(A+0),e.getX(A+1),e.getX(A+2))}let b=new X,_=new X,S=new X,g=new X;function T(U){S.fromBufferAttribute(s,U),g.copy(S);let v=o[U];b.copy(v),b.sub(S.multiplyScalar(S.dot(v))).normalize(),_.crossVectors(g,v);let w=_.dot(l[U])<0?-1:1;a.setXYZW(U,b.x,b.y,b.z,w)}for(let U=0,v=i.count;U<v;++U)c[U]&&T(U);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new sn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,m=i.count;f<m;f++)i.setXYZ(f,0,0,0);let s=new X,r=new X,a=new X,o=new X,l=new X,c=new X,h=new X,p=new X;if(e)for(let f=0,m=e.count;f<m;f+=3){let x=e.getX(f+0),y=e.getX(f+1),u=e.getX(f+2);s.fromBufferAttribute(t,x),r.fromBufferAttribute(t,y),a.fromBufferAttribute(t,u),h.subVectors(a,r),p.subVectors(s,r),h.cross(p),o.fromBufferAttribute(i,x),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,u),o.add(h),l.add(h),c.add(h),i.setXYZ(x,o.x,o.y,o.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(u,c.x,c.y,c.z)}else for(let f=0,m=t.count;f<m;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),h.subVectors(a,r),p.subVectors(s,r),h.cross(p),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Gt.fromBufferAttribute(e,t),Gt.normalize(),e.setXYZ(t,Gt.x,Gt.y,Gt.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,p=o.normalized,f=new c.constructor(l.length*h),m=0,x=0;for(let y=0,u=l.length;y<u;y++){o.isInterleavedBufferAttribute?m=l[y]*o.data.stride+o.offset:m=l[y]*h;for(let d=0;d<h;d++)f[x++]=c[m++]}return new sn(f,h,p)}if(this.index===null)return Le("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,i);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,p=c.length;h<p;h++){let f=c[h],m=e(f,i);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let p=0,f=c.length;p<f;p++){let m=c[p];h.push(m.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],p=r[c];for(let f=0,m=p.length;f<m;f++)h.push(p[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let p=a[c];this.addGroup(p.start,p.count,p.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Nr=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Kc,this.updateRanges=[],this.version=0,this.uuid=ps()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=Lu(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let i=new this.array.constructor(e.arrayBuffers[t]),s=new this.constructor(i,this.stride);return s.setUsage(this.usage),s}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=Lu(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let i={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return i.usage=this.usage,i}};function Lu(n){return n.buffer._uuid===void 0&&(n.buffer._uuid=ps()),n.byteOffset===0&&n.byteLength===n.buffer.byteLength?n.buffer._uuid:n.buffer._uuid+":"+n.byteOffset+":"+n.byteLength}var cn=new X,Ys=class n{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s,this._normalizationScale=e!==void 0?gl(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)cn.fromBufferAttribute(this,t),cn.applyMatrix4(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)cn.fromBufferAttribute(this,t),cn.applyNormalMatrix(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)cn.fromBufferAttribute(this,t),cn.transformDirection(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,t,i){return this.normalized&&(i=this._normalize(i)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),i=this._normalize(i)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Ar("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new sn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Ar("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Lf(e,this.data.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Nf(e,this.data.array)}},mc=new X,nm=new X,im=new Be,Xn=class{constructor(e=new X(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=mc.subVectors(i,t).cross(nm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let s=e.delta(mc),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||im.getNormalMatrix(e),s=this.coplanarPoint(mc).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},sm=0,yi=class extends Qn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:sm++}),this.uuid=ps(),this.name="",this.type="Material",this.blending=Qs,this.side=Wi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Lc,this.blendDst=Nc,this.blendEquation=us,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new De(0,0,0),this.blendAlpha=0,this.depthFunc=Vs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Mf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=$a,this.stencilZFail=$a,this.stencilZPass=$a,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){Le(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Le(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new De().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new Xn().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Oe().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Oe().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Zs=class extends yi{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new De(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Ns,xr=new X,Ds=new X,Us=new X,Fs=new Oe,_r=new Oe,Uf=new ot,Pa=new X,yr=new X,La=new X,Nu=new Oe,gc=new Oe,Du=new Oe,Dr=class extends At{constructor(e=new Zs){if(super(),this.isSprite=!0,this.type="Sprite",Ns===void 0){Ns=new rn;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Nr(t,5);Ns.setIndex([0,1,2,0,2,3]),Ns.setAttribute("position",new Ys(i,3,0,!1)),Ns.setAttribute("uv",new Ys(i,2,3,!1))}this.geometry=Ns,this.material=e,this.center=new Oe(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&Ne('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ds.setFromMatrixScale(this.matrixWorld),Uf.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Us.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ds.multiplyScalar(-Us.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let a=this.center;Na(Pa.set(-.5,-.5,0),Us,a,Ds,s,r),Na(yr.set(.5,-.5,0),Us,a,Ds,s,r),Na(La.set(.5,.5,0),Us,a,Ds,s,r),Nu.set(0,0),gc.set(1,0),Du.set(1,1);let o=e.ray.intersectTriangle(Pa,yr,La,!1,xr);if(o===null&&(Na(yr.set(-.5,.5,0),Us,a,Ds,s,r),gc.set(0,1),o=e.ray.intersectTriangle(Pa,La,yr,!1,xr),o===null))return;let l=e.ray.origin.distanceTo(xr);l<e.near||l>e.far||t.push({distance:l,point:xr.clone(),uv:gi.getInterpolation(xr,Pa,yr,La,Nu,gc,Du,new Oe),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}toJSON(e){let t=super.toJSON(e);return t.object.center=this.center.toArray(),t}};function Na(n,e,t,i,s,r){Fs.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(_r.x=r*Fs.x-s*Fs.y,_r.y=s*Fs.x+r*Fs.y):_r.copy(Fs),n.copy(e),n.x+=_r.x,n.y+=_r.y,n.applyMatrix4(Uf)}var mi=new X,xc=new X,Da=new X,Ua=new X,ho=class{constructor(e=new X,t=new X(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,mi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=mi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(mi.copy(this.origin).addScaledVector(this.direction,t),mi.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){xc.copy(e).add(t).multiplyScalar(.5),Da.copy(t).sub(e).normalize(),Ua.copy(this.origin).sub(xc);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Da),o=Ua.dot(this.direction),l=-Ua.dot(Da),c=Ua.lengthSq(),h=Math.abs(1-a*a),p,f,m,x;if(h>0)if(p=a*l-o,f=a*o-l,x=r*h,p>=0)if(f>=-x)if(f<=x){let y=1/h;p*=y,f*=y,m=p*(p+a*f+2*o)+f*(a*p+f+2*l)+c}else f=r,p=Math.max(0,-(a*f+o)),m=-p*p+f*(f+2*l)+c;else f=-r,p=Math.max(0,-(a*f+o)),m=-p*p+f*(f+2*l)+c;else f<=-x?(p=Math.max(0,-(-a*r+o)),f=p>0?-r:Math.min(Math.max(-r,-l),r),m=-p*p+f*(f+2*l)+c):f<=x?(p=0,f=Math.min(Math.max(-r,-l),r),m=f*(f+2*l)+c):(p=Math.max(0,-(a*r+o)),f=p>0?r:Math.min(Math.max(-r,-l),r),m=-p*p+f*(f+2*l)+c);else f=a>0?-r:r,p=Math.max(0,-(a*f+o)),m=-p*p+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,p),s&&s.copy(xc).addScaledVector(Da,f),m}intersectSphere(e,t){if(e.radius<0)return null;mi.subVectors(e.center,this.origin);let i=mi.dot(this.direction),s=mi.dot(mi)-i*i,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,p=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),h>=0?(r=(e.min.y-f.y)*h,a=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,a=(e.min.y-f.y)*h),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),p>=0?(o=(e.min.z-f.z)*p,l=(e.max.z-f.z)*p):(o=(e.max.z-f.z)*p,l=(e.min.z-f.z)*p),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,mi)!==null}intersectTriangle(e,t,i,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,p=e.x-a.x,f=e.y-a.y,m=e.z-a.z,x=t.x-a.x,y=t.y-a.y,u=t.z-a.z,d=i.x-a.x,M=i.y-a.y,C=i.z-a.z,b=Math.abs(l),_=Math.abs(c),S=Math.abs(h),g,T,U,v,E,w,L,A,P,D,B,k;if(b>=_&&b>=S?(U=l,w=p,P=x,k=d,l>=0?(g=c,T=h,v=f,E=m,L=y,A=u,D=M,B=C):(g=h,T=c,v=m,E=f,L=u,A=y,D=C,B=M)):_>=S?(U=c,w=f,P=y,k=M,c>=0?(g=h,T=l,v=m,E=p,L=u,A=x,D=C,B=d):(g=l,T=h,v=p,E=m,L=x,A=u,D=d,B=C)):(U=h,w=m,P=u,k=C,h>=0?(g=l,T=c,v=p,E=f,L=x,A=y,D=d,B=M):(g=c,T=l,v=f,E=p,L=y,A=x,D=M,B=d)),U===0)return null;let O=g/U,G=T/U,J=1/U,te=v-O*w,oe=E-G*w,$=L-O*P,ue=A-G*P,le=D-O*k,Ae=B-G*k,ve=le*ue-Ae*$,Fe=te*Ae-oe*le,Lt=$*oe-ue*te;if(s){if(ve<0||Fe<0||Lt<0)return null}else if((ve<0||Fe<0||Lt<0)&&(ve>0||Fe>0||Lt>0))return null;let Pe=ve+Fe+Lt;if(Pe===0)return null;let rt=J*(ve*w+Fe*P+Lt*k);return(Pe>0?rt<0:rt>0)?null:this.at(rt/Pe,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},fn=class extends yi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new De(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qn,this.combine=Ro,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Uu=new ot,ts=new ho,Fa=new Bi,Fu=new X,Oa=new X,Ba=new X,za=new X,_c=new X,ka=new X,Ou=new X,Ha=new X,je=class extends At{constructor(e=new rn,t=new fn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){ka.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],p=r[l];h!==0&&(_c.fromBufferAttribute(p,e),a?ka.addScaledVector(_c,h):ka.addScaledVector(_c.sub(t),h))}t.add(ka)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Fa.copy(i.boundingSphere),Fa.applyMatrix4(r),ts.copy(e.ray).recast(e.near),!(Fa.containsPoint(ts.origin)===!1&&(ts.intersectSphere(Fa,Fu)===null||ts.origin.distanceToSquared(Fu)>(e.far-e.near)**2))&&(Uu.copy(r).invert(),ts.copy(e.ray).applyMatrix4(Uu),!(i.boundingBox!==null&&ts.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ts)))}_computeIntersections(e,t,i){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,p=r.attributes.normal,f=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,y=f.length;x<y;x++){let u=f[x],d=a[u.materialIndex],M=Math.max(u.start,m.start),C=Math.min(o.count,Math.min(u.start+u.count,m.start+m.count));for(let b=M,_=C;b<_;b+=3){let S=o.getX(b),g=o.getX(b+1),T=o.getX(b+2);s=Va(this,d,e,i,c,h,p,S,g,T),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=u.materialIndex,t.push(s))}}else{let x=Math.max(0,m.start),y=Math.min(o.count,m.start+m.count);for(let u=x,d=y;u<d;u+=3){let M=o.getX(u),C=o.getX(u+1),b=o.getX(u+2);s=Va(this,a,e,i,c,h,p,M,C,b),s&&(s.faceIndex=Math.floor(u/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let x=0,y=f.length;x<y;x++){let u=f[x],d=a[u.materialIndex],M=Math.max(u.start,m.start),C=Math.min(l.count,Math.min(u.start+u.count,m.start+m.count));for(let b=M,_=C;b<_;b+=3){let S=b,g=b+1,T=b+2;s=Va(this,d,e,i,c,h,p,S,g,T),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=u.materialIndex,t.push(s))}}else{let x=Math.max(0,m.start),y=Math.min(l.count,m.start+m.count);for(let u=x,d=y;u<d;u+=3){let M=u,C=u+1,b=u+2;s=Va(this,a,e,i,c,h,p,M,C,b),s&&(s.faceIndex=Math.floor(u/3),t.push(s))}}}};function rm(n,e,t,i,s,r,a,o){let l;if(e.side===Jt?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,e.side===Wi,o),l===null)return null;Ha.copy(o),Ha.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(Ha);return c<t.near||c>t.far?null:{distance:c,point:Ha.clone(),object:n}}function Va(n,e,t,i,s,r,a,o,l,c){n.getVertexPosition(o,Oa),n.getVertexPosition(l,Ba),n.getVertexPosition(c,za);let h=rm(n,e,t,i,Oa,Ba,za,Ou);if(h){let p=new X;gi.getBarycoord(Ou,Oa,Ba,za,p),s&&(h.uv=gi.getInterpolatedAttribute(s,o,l,c,p,new Oe)),r&&(h.uv1=gi.getInterpolatedAttribute(r,o,l,c,p,new Oe)),a&&(h.normal=gi.getInterpolatedAttribute(a,o,l,c,p,new X),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let f={a:o,b:l,c,normal:new X,materialIndex:0};gi.getNormal(Oa,Ba,za,f.normal),h.face=f,h.barycoord=p}return h}var Ur=class extends un{constructor(e=null,t=1,i=1,s,r,a,o,l,c=Xt,h=Xt,p,f){super(null,a,o,l,c,h,s,r,p,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ni=class extends sn{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Os=new ot,Bu=new ot,Ga=[],zu=new ti,am=new ot,vr=new je,Mr=new Bi,Fn=class extends je{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ni(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,am)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ti),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Os),zu.copy(e.boundingBox).applyMatrix4(Os),this.boundingBox.union(zu)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Bi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Os),Mr.copy(e.boundingSphere).applyMatrix4(Os),this.boundingSphere.union(Mr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,a=e*r+1;for(let o=0;o<i.length;o++)i[o]=s[a+o]}raycast(e,t){let i=this.matrixWorld,s=this.count;if(vr.geometry=this.geometry,vr.material=this.material,vr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Mr.copy(this.boundingSphere),Mr.applyMatrix4(i),e.ray.intersectsSphere(Mr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Os),Bu.multiplyMatrices(i,Os),vr.matrixWorld=Bu,vr.raycast(e,Ga);for(let a=0,o=Ga.length;a<o;a++){let l=Ga[a];l.instanceId=r,l.object=this,t.push(l)}Ga.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new ni(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Ur(new Float32Array(s*this.count),s,this.count,Uo,Bn));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<i.length;c++)a+=i[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;return r[l]=o,r.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},ns=new Bi,om=new Oe(.5,.5),Wa=new X,zi=class{constructor(e=new Xn,t=new Xn,i=new Xn,s=new Xn,r=new Xn,a=new Xn){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Un,i=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],p=r[5],f=r[6],m=r[7],x=r[8],y=r[9],u=r[10],d=r[11],M=r[12],C=r[13],b=r[14],_=r[15];if(s[0].setComponents(c-a,m-h,d-x,_-M).normalize(),s[1].setComponents(c+a,m+h,d+x,_+M).normalize(),s[2].setComponents(c+o,m+p,d+y,_+C).normalize(),s[3].setComponents(c-o,m-p,d-y,_-C).normalize(),i)s[4].setComponents(l,f,u,b).normalize(),s[5].setComponents(c-l,m-f,d-u,_-b).normalize();else if(s[4].setComponents(c-l,m-f,d-u,_-b).normalize(),t===Un)s[5].setComponents(c+l,m+f,d+u,_+b).normalize();else if(t===Gs)s[5].setComponents(l,f,u,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ns.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ns.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ns)}intersectsSprite(e){ns.center.set(0,0,0);let t=om.distanceTo(e.center);return ns.radius=.7071067811865476+t,ns.applyMatrix4(e.matrixWorld),this.intersectsSphere(ns)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(Wa.x=s.normal.x>0?e.max.x:e.min.x,Wa.y=s.normal.y>0?e.max.y:e.min.y,Wa.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Wa)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},ku=new ot,uo=class n{constructor(){this.coordinateSystem=Un,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,i=this._frustums;for(let s=0;s<t.length;s++){let r=t[s];ku.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),i[s]===void 0&&(i[s]=new zi),i[s].setFromProjectionMatrix(ku,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,i=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new zi),t[s].copy(i[s]);return this._count=e._count,this}clone(){return new n().copy(this)}};var Fr=class extends un{constructor(e=[],t=fs,i,s,r,a,o,l,c,h){super(e,t,i,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Or=class extends un{constructor(e,t,i,s,r,a,o,l,c){super(e,t,i,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var vi=class extends un{constructor(e,t,i=Yn,s,r,a,o=Xt,l=Xt,c,h=_i,p=1){if(h!==_i&&h!==bi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:p};super(f,s,r,a,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Xs(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Br=class extends vi{constructor(e,t=Yn,i=fs,s,r,a=Xt,o=Xt,l,c=_i){let h={width:e,height:e,depth:1},p=[h,h,h,h,h,h];super(e,e,t,i,s,r,a,o,l,c),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},zr=class extends un{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},dn=class n extends rn{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],p=[],f=0,m=0;x("z","y","x",-1,-1,i,t,e,a,r,0),x("z","y","x",1,-1,i,t,-e,a,r,1),x("x","z","y",1,1,e,i,t,s,a,2),x("x","z","y",1,-1,e,i,-t,s,a,3),x("x","y","z",1,-1,e,t,i,s,r,4),x("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new ft(c,3)),this.setAttribute("normal",new ft(h,3)),this.setAttribute("uv",new ft(p,2));function x(y,u,d,M,C,b,_,S,g,T,U){let v=b/g,E=_/T,w=b/2,L=_/2,A=S/2,P=g+1,D=T+1,B=0,k=0,O=new X;for(let G=0;G<D;G++){let J=G*E-L;for(let te=0;te<P;te++){let oe=te*v-w;O[y]=oe*M,O[u]=J*C,O[d]=A,c.push(O.x,O.y,O.z),O[y]=0,O[u]=0,O[d]=S>0?1:-1,h.push(O.x,O.y,O.z),p.push(te/g),p.push(1-G/T),B+=1}}for(let G=0;G<T;G++)for(let J=0;J<g;J++){let te=f+J+P*G,oe=f+J+P*(G+1),$=f+(J+1)+P*(G+1),ue=f+(J+1)+P*G;l.push(te,oe,ue),l.push(oe,$,ue),k+=6}o.addGroup(m,k,U),m+=k,f+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var fo=class n extends rn{constructor(e=1,t=1,i=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],p=[],f=[],m=[],x=0,y=[],u=i/2,d=0;M(),a===!1&&(e>0&&C(!0),t>0&&C(!1)),this.setIndex(h),this.setAttribute("position",new ft(p,3)),this.setAttribute("normal",new ft(f,3)),this.setAttribute("uv",new ft(m,2));function M(){let b=new X,_=new X,S=0,g=(t-e)/i;for(let T=0;T<=r;T++){let U=[],v=T/r,E=v*(t-e)+e;for(let w=0;w<=s;w++){let L=w/s,A=L*l+o,P=Math.sin(A),D=Math.cos(A);_.x=E*P,_.y=-v*i+u,_.z=E*D,p.push(_.x,_.y,_.z),b.set(P,g,D).normalize(),f.push(b.x,b.y,b.z),m.push(L,1-v),U.push(x++)}y.push(U)}for(let T=0;T<s;T++)for(let U=0;U<r;U++){let v=y[U][T],E=y[U+1][T],w=y[U+1][T+1],L=y[U][T+1];(e>0||U!==0)&&(h.push(v,E,L),S+=3),(t>0||U!==r-1)&&(h.push(E,w,L),S+=3)}c.addGroup(d,S,0),d+=S}function C(b){let _=x,S=new Oe,g=new X,T=0,U=b===!0?e:t,v=b===!0?1:-1;for(let w=1;w<=s;w++)p.push(0,u*v,0),f.push(0,v,0),m.push(.5,.5),x++;let E=x;for(let w=0;w<=s;w++){let A=w/s*l+o,P=Math.cos(A),D=Math.sin(A);g.x=U*D,g.y=u*v,g.z=U*P,p.push(g.x,g.y,g.z),f.push(0,v,0),S.x=P*.5+.5,S.y=D*.5*v+.5,m.push(S.x,S.y),x++}for(let w=0;w<s;w++){let L=_+w,A=E+w;b===!0?h.push(A,A+1,L):h.push(A+1,A,L),T+=3}c.addGroup(d,T,b===!0?1:2),d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},ss=class n extends fo{constructor(e=1,t=1,i=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,i,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},kr=class n extends rn{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};let r=[],a=[];o(s),c(i),h(),this.setAttribute("position",new ft(r,3)),this.setAttribute("normal",new ft(r.slice(),3)),this.setAttribute("uv",new ft(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(M){let C=new X,b=new X,_=new X;for(let S=0;S<t.length;S+=3)m(t[S+0],C),m(t[S+1],b),m(t[S+2],_),l(C,b,_,M)}function l(M,C,b,_){let S=_+1,g=[];for(let T=0;T<=S;T++){g[T]=[];let U=M.clone().lerp(b,T/S),v=C.clone().lerp(b,T/S),E=S-T;for(let w=0;w<=E;w++)w===0&&T===S?g[T][w]=U:g[T][w]=U.clone().lerp(v,w/E)}for(let T=0;T<S;T++)for(let U=0;U<2*(S-T)-1;U++){let v=Math.floor(U/2);U%2===0?(f(g[T][v+1]),f(g[T+1][v]),f(g[T][v])):(f(g[T][v+1]),f(g[T+1][v+1]),f(g[T+1][v]))}}function c(M){let C=new X;for(let b=0;b<r.length;b+=3)C.x=r[b+0],C.y=r[b+1],C.z=r[b+2],C.normalize().multiplyScalar(M),r[b+0]=C.x,r[b+1]=C.y,r[b+2]=C.z}function h(){let M=new X;for(let C=0;C<r.length;C+=3){M.x=r[C+0],M.y=r[C+1],M.z=r[C+2];let b=u(M)/2/Math.PI+.5,_=d(M)/Math.PI+.5;a.push(b,1-_)}x(),p()}function p(){for(let M=0;M<a.length;M+=6){let C=a[M+0],b=a[M+2],_=a[M+4],S=Math.max(C,b,_),g=Math.min(C,b,_);S>.9&&g<.1&&(C<.2&&(a[M+0]+=1),b<.2&&(a[M+2]+=1),_<.2&&(a[M+4]+=1))}}function f(M){r.push(M.x,M.y,M.z)}function m(M,C){let b=M*3;C.x=e[b+0],C.y=e[b+1],C.z=e[b+2]}function x(){let M=new X,C=new X,b=new X,_=new X,S=new Oe,g=new Oe,T=new Oe;for(let U=0,v=0;U<r.length;U+=9,v+=6){M.set(r[U+0],r[U+1],r[U+2]),C.set(r[U+3],r[U+4],r[U+5]),b.set(r[U+6],r[U+7],r[U+8]),S.set(a[v+0],a[v+1]),g.set(a[v+2],a[v+3]),T.set(a[v+4],a[v+5]),_.copy(M).add(C).add(b).divideScalar(3);let E=u(_);y(S,v+0,M,E),y(g,v+2,C,E),y(T,v+4,b,E)}}function y(M,C,b,_){_<0&&M.x===1&&(a[C]=M.x-1),b.x===0&&b.z===0&&(a[C]=_/2/Math.PI+.5)}function u(M){return Math.atan2(M.z,-M.x)}function d(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.detail)}};var $s=class n extends kr{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}};var rs=class n extends kr{constructor(e=1,t=0){let i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},ii=class n extends rn{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(i),l=Math.floor(s),c=o+1,h=l+1,p=e/o,f=t/l,m=[],x=[],y=[],u=[];for(let d=0;d<h;d++){let M=d*f-a;for(let C=0;C<c;C++){let b=C*p-r;x.push(b,-M,0),y.push(0,0,1),u.push(C/o),u.push(1-d/l)}}for(let d=0;d<l;d++)for(let M=0;M<o;M++){let C=M+c*d,b=M+c*(d+1),_=M+1+c*(d+1),S=M+1+c*d;m.push(C,b,S),m.push(b,_,S)}this.setIndex(m),this.setAttribute("position",new ft(x,3)),this.setAttribute("normal",new ft(y,3)),this.setAttribute("uv",new ft(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}};var as=class n extends rn{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(a+o,Math.PI),c=0,h=[],p=new X,f=new X,m=[],x=[],y=[],u=[];for(let d=0;d<=i;d++){let M=[],C=d/i,b=a+C*o,_=e*Math.cos(b),S=Math.sqrt(e*e-_*_),g=0;d===0&&a===0?g=.5/t:d===i&&l===Math.PI&&(g=-.5/t);for(let T=0;T<=t;T++){let U=T/t,v=s+U*r;p.x=-S*Math.cos(v),p.y=_,p.z=S*Math.sin(v),x.push(p.x,p.y,p.z),f.copy(p).normalize(),y.push(f.x,f.y,f.z),u.push(U+g,1-C),M.push(c++)}h.push(M)}for(let d=0;d<i;d++)for(let M=0;M<t;M++){let C=h[d][M+1],b=h[d][M],_=h[d+1][M],S=h[d+1][M+1];(d!==0||a>0)&&m.push(C,b,S),(d!==i-1||l<Math.PI)&&m.push(b,_,S)}this.setIndex(m),this.setAttribute("position",new ft(x,3)),this.setAttribute("normal",new ft(y,3)),this.setAttribute("uv",new ft(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};function ms(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];if(Hu(s))s.isRenderTargetTexture?(Le("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(Hu(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][i]=r}else e[t][i]=s.slice();else e[t][i]=s}}return e}function an(n){let e={};for(let t=0;t<n.length;t++){let i=ms(n[t]);for(let s in i)e[s]=i[s]}return e}function Hu(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function lm(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Qc(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:$e.workingColorSpace}var Ff={clone:ms,merge:an},cm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,hm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,On=class extends yi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=cm,this.fragmentShader=hm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ms(e.uniforms),this.uniformsGroups=lm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=t[s.value]||null;break;case"c":this.uniforms[i].value=new De().setHex(s.value);break;case"v2":this.uniforms[i].value=new Oe().fromArray(s.value);break;case"v3":this.uniforms[i].value=new X().fromArray(s.value);break;case"v4":this.uniforms[i].value=new _t().fromArray(s.value);break;case"m3":this.uniforms[i].value=new Be().fromArray(s.value);break;case"m4":this.uniforms[i].value=new ot().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},po=class extends On{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var gn=class extends yi{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new De(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new De(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ml,this.normalScale=new Oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qn,this.combine=Ro,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},mo=class extends yi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=yf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},go=class extends yi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Bs(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function Xa(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var ki=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];e:{t:{let a;n:{i:if(!(e<s)){for(let o=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=s,s=t[++i],e<s)break t}a=t.length;break n}if(!(e>=r)){let o=t[1];e<o&&(i=2,r=o);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break t}a=i,i=0;break n}break e}for(;i<a;){let o=i+a>>>1;e<t[o]?a=o:i=o+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=i[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},xo=class extends ki{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Mc,endingEnd:Mc}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case bc:r=e,o=2*t-i;break;case Sc:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case bc:a=e,l=2*i-t;break;case Sc:a=1,l=i+s[1]-s[0];break;default:a=e-1,l=t}let c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,p=this._offsetNext,f=this._weightPrev,m=this._weightNext,x=(i-t)/(s-t),y=x*x,u=y*x,d=-f*u+2*f*y-f*x,M=(1+f)*u+(-1.5-2*f)*y+(-.5+f)*x+1,C=(-1-m)*u+(1.5+m)*y+.5*x,b=m*u-m*y;for(let _=0;_!==o;++_)r[_]=d*a[h+_]+M*a[c+_]+C*a[l+_]+b*a[p+_];return r}},_o=class extends ki{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(i-t)/(s-t),p=1-h;for(let f=0;f!==o;++f)r[f]=a[c+f]*p+a[l+f]*h;return r}},yo=class extends ki{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},vo=class extends ki{interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this.inTangents,p=this.outTangents;if(!h||!p){let x=(i-t)/(s-t),y=1-x;for(let u=0;u!==o;++u)r[u]=a[c+u]*y+a[l+u]*x;return r}let f=o*2,m=e-1;for(let x=0;x!==o;++x){let y=a[c+x],u=a[l+x],d=m*f+x*2,M=p[d],C=p[d+1],b=e*f+x*2,_=h[b],S=h[b+1],g=fm(i,t,M,_,s);r[x]=Of(g,y,C,S,u)}return r}};function Of(n,e,t,i,s){let r=1-n;return r*r*r*e+3*r*r*n*t+3*r*n*n*i+n*n*n*s}function um(n,e,t,i,s){let r=1-n;return 3*r*r*(t-e)+6*r*n*(i-t)+3*n*n*(s-i)}function fm(n,e,t,i,s){let r=(n-e)/(s-e);for(let a=0;a<8;a++){let o=Of(r,e,t,i,s)-n;if(Math.abs(o)<1e-10)break;let l=um(r,e,t,i,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var An=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Bs(t,this.TimeBufferType),this.values=Bs(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Bs(e.times,Array),values:Bs(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s),Xa(e.settings)&&(i.settings={inTangents:Bs(e.settings.inTangents,Array),outTangents:Bs(e.settings.outTangents,Array)})}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new yo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new _o(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new xo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new vo(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Sr:t=this.InterpolantFactoryMethodDiscrete;break;case ro:t=this.InterpolantFactoryMethodLinear;break;case Za:t=this.InterpolantFactoryMethodSmooth;break;case vc:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Le("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Sr;case this.InterpolantFactoryMethodLinear:return ro;case this.InterpolantFactoryMethodSmooth:return Za;case this.InterpolantFactoryMethodBezier:return vc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e;Xa(this.settings)&&(Vu(this.settings.inTangents,e),Vu(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e;Xa(this.settings)&&(Gu(this.settings.inTangents,e),Gu(this.settings.outTangents,e))}return this}trim(e,t){let i=this.times,s=i.length,r=0,a=s-1;for(;r!==s&&i[r]<e;)++r;for(;a!==-1&&i[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Ne("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(Ne("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){Ne("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){Ne("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&Hp(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Ne("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Za,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(s)l=!0;else{let p=o*i,f=p-i,m=p+i;for(let x=0;x!==i;++x){let y=t[p+x];if(y!==t[f+x]||y!==t[m+x]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let p=o*i,f=a*i;for(let m=0;m!==i;++m)t[f+m]=t[p+m]}++a}}if(r>0){e[a]=e[r];for(let o=r*i,l=a*i,c=0;c!==i;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,Xa(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Vu(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]+=e}function Gu(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]*=e}An.prototype.ValueTypeName="";An.prototype.TimeBufferType=Float32Array;An.prototype.ValueBufferType=Float32Array;An.prototype.DefaultInterpolation=ro;var Hi=class extends An{constructor(e,t,i){super(e,t,i)}};Hi.prototype.ValueTypeName="bool";Hi.prototype.ValueBufferType=Array;Hi.prototype.DefaultInterpolation=Sr;Hi.prototype.InterpolantFactoryMethodLinear=void 0;Hi.prototype.InterpolantFactoryMethodSmooth=void 0;var Mo=class extends An{constructor(e,t,i,s){super(e,t,i,s)}};Mo.prototype.ValueTypeName="color";var bo=class extends An{constructor(e,t,i,s){super(e,t,i,s)}};bo.prototype.ValueTypeName="number";var So=class extends ki{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-t)/(s-t),c=e*o;for(let h=c+o;c!==h;c+=4)ei.slerpFlat(r,0,a,c-o,a,c,l);return r}},Hr=class extends An{constructor(e,t,i,s){super(e,t,i,s)}InterpolantFactoryMethodLinear(e){return new So(this.times,this.values,this.getValueSize(),e)}};Hr.prototype.ValueTypeName="quaternion";Hr.prototype.InterpolantFactoryMethodSmooth=void 0;var Vi=class extends An{constructor(e,t,i){super(e,t,i)}};Vi.prototype.ValueTypeName="string";Vi.prototype.ValueBufferType=Array;Vi.prototype.DefaultInterpolation=Sr;Vi.prototype.InterpolantFactoryMethodLinear=void 0;Vi.prototype.InterpolantFactoryMethodSmooth=void 0;var To=class extends An{constructor(e,t,i,s){super(e,t,i,s)}};To.prototype.ValueTypeName="vector";var wo=class{constructor(e,t,i){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,p){return c.push(h,p),this},this.removeHandler=function(h){let p=c.indexOf(h);return p!==-1&&c.splice(p,2),this},this.getHandler=function(h){for(let p=0,f=c.length;p<f;p+=2){let m=c[p],x=c[p+1];if(m.global&&(m.lastIndex=0),m.test(h))return x}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Bf=new wo,Eo=class{constructor(e){this.manager=e!==void 0?e:Bf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};Eo.DEFAULT_MATERIAL_NAME="__DEFAULT";var os=class extends At{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new De(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Gi=class extends os{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(At.DEFAULT_UP),this.updateMatrix(),this.groundColor=new De(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},yc=new ot,Wu=new X,Xu=new X,Vr=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Oe(512,512),this.mapType=xn,this.map=null,this.mapPass=null,this.matrix=new ot,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new zi,this._frameExtents=new Oe(1,1),this._viewportCount=1,this._viewports=[new _t(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Wu.setFromMatrixPosition(e.matrixWorld),t.position.copy(Wu),Xu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Xu),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,s){yc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(yc,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===Gs||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(yc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},qa=new X,Ya=new ei,Kn=new X,Gr=class extends At{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ot,this.projectionMatrix=new ot,this.projectionMatrixInverse=new ot,this.coordinateSystem=Un,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(qa,Ya,Kn),Kn.x===1&&Kn.y===1&&Kn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(qa,Ya,Kn.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(qa,Ya,Kn),Kn.x===1&&Kn.y===1&&Kn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(qa,Ya,Kn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Oi=new X,qu=new Oe,Yu=new Oe,$t=class extends Gr{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ao*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Kl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ao*2*Math.atan(Math.tan(Kl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Oi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Oi.x,Oi.y).multiplyScalar(-e/Oi.z),Oi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Oi.x,Oi.y).multiplyScalar(-e/Oi.z)}getViewSize(e,t){return this.getViewBounds(e,qu,Yu),t.subVectors(Yu,qu)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Kl*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var Tc=class extends Vr{constructor(){super(new $t(90,1,.5,500)),this.isPointLightShadow=!0}},Js=class extends os{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Tc}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},ls=class extends Gr{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,a=i+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},wc=class extends Vr{constructor(){super(new ls(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},cs=class extends os{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(At.DEFAULT_UP),this.updateMatrix(),this.target=new At,this.shadow=new wc}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},Wr=class extends os{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var zs=-90,ks=1,Ks=class extends At{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new $t(zs,ks,e,t);s.layers=this.layers,this.add(s);let r=new $t(zs,ks,e,t);r.layers=this.layers,this.add(r);let a=new $t(zs,ks,e,t);a.layers=this.layers,this.add(a);let o=new $t(zs,ks,e,t);o.layers=this.layers,this.add(o);let l=new $t(zs,ks,e,t);l.layers=this.layers,this.add(l);let c=new $t(zs,ks,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===Un)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Gs)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,p=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;let y=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let u=!1;e.isWebGLRenderer===!0?u=e.state.buffers.depth.getReversed():u=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),u&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),u&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,s),u&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,s),u&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,s),u&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.mipmapsAutoUpdate=y,e.setRenderTarget(i,5,s),u&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(p,f,m),e.xr.enabled=x,i.texture.needsPMREMUpdate=!0}},Ao=class extends $t{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}};var eh="\\[\\]\\.:\\/",dm=new RegExp("["+eh+"]","g"),th="[^"+eh+"]",pm="[^"+eh.replace("\\.","")+"]",mm=/((?:WC+[\/:])*)/.source.replace("WC",th),gm=/(WCOD+)?/.source.replace("WCOD",pm),xm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",th),_m=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",th),ym=new RegExp("^"+mm+gm+xm+_m+"$"),vm=["material","materials","bones","map"],Ec=class{constructor(e,t,i){let s=i||dt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},dt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(dm,"")}static parseTrackName(e){let t=ym.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);vm.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=i(o.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Le("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){Ne("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ne("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ne("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ne("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ne("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){Ne("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){Ne("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;Ne("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Ne("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ne("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};dt.Composite=Ec;dt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};dt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};dt.prototype.GetterByBindingType=[dt.prototype._getValue_direct,dt.prototype._getValue_array,dt.prototype._getValue_arrayElement,dt.prototype._getValue_toArray];dt.prototype.SetterByBindingTypeAndVersioning=[[dt.prototype._setValue_direct,dt.prototype._setValue_direct_setNeedsUpdate,dt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[dt.prototype._setValue_array,dt.prototype._setValue_array_setNeedsUpdate,dt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[dt.prototype._setValue_arrayElement,dt.prototype._setValue_arrayElement_setNeedsUpdate,dt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[dt.prototype._setValue_fromArray,dt.prototype._setValue_fromArray_setNeedsUpdate,dt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var hv=new Float32Array(1);var Ac=class{static{this.prototype.isMatrix2=!0}constructor(e,t,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=s,this}};function nh(n,e,t,i){let s=Mm(i);switch(t){case qc:return n*e;case Uo:return n*e/s.components*s.byteLength;case Fo:return n*e/s.components*s.byteLength;case Xi:return n*e*2/s.components*s.byteLength;case Oo:return n*e*2/s.components*s.byteLength;case Yc:return n*e*3/s.components*s.byteLength;case $n:return n*e*4/s.components*s.byteLength;case Bo:return n*e*4/s.components*s.byteLength;case Yr:case Zr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case $r:case Jr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ko:case Vo:return Math.max(n,16)*Math.max(e,8)/4;case zo:case Ho:return Math.max(n,8)*Math.max(e,8)/2;case Go:case Wo:case qo:case Yo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Xo:case Kr:case Zo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case $o:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Jo:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Ko:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case jo:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Qo:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case el:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case tl:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case nl:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case il:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case sl:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case rl:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case al:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case ol:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case ll:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case cl:case hl:case ul:return Math.ceil(n/4)*Math.ceil(e/4)*16;case fl:case dl:return Math.ceil(n/4)*Math.ceil(e/4)*8;case jr:case pl:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Mm(n){switch(n){case xn:case Vc:return{byteLength:1,components:1};case tr:case Gc:case Zn:return{byteLength:2,components:1};case No:case Do:return{byteLength:2,components:4};case Yn:case Lo:case Bn:return{byteLength:4,components:1};case Wc:case Xc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Le("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function ad(){let n=null,e=!1,t=null,i=null;function s(r,a){i=n.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function Am(n){let e=new WeakMap;function t(o,l){let c=o.array,h=o.usage,p=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,h),o.onUploadCallback();let m;if(c instanceof Float32Array)m=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)m=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=n.HALF_FLOAT:m=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=n.SHORT;else if(c instanceof Uint32Array)m=n.UNSIGNED_INT;else if(c instanceof Int32Array)m=n.INT;else if(c instanceof Int8Array)m=n.BYTE;else if(c instanceof Uint8Array)m=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:p}}function i(o,l,c){let h=l.array,p=l.updateRanges;if(n.bindBuffer(c,o),p.length===0)n.bufferSubData(c,0,h);else{p.sort((m,x)=>m.start-x.start);let f=0;for(let m=1;m<p.length;m++){let x=p[f],y=p[m];y.start<=x.start+x.count+1?x.count=Math.max(x.count,y.start+y.count-x.start):(++f,p[f]=y)}p.length=f+1;for(let m=0,x=p.length;m<x;m++){let y=p[m];n.bufferSubData(c,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Rm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Cm=`#ifdef USE_ALPHAHASH
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
#endif`,Im=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Pm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Lm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Nm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Dm=`#ifdef USE_AOMAP
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
#endif`,Um=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Fm=`#ifdef USE_BATCHING
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
#endif`,Om=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Bm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,zm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,km=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Hm=`#ifdef USE_IRIDESCENCE
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
#endif`,Vm=`#ifdef USE_BUMPMAP
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
#endif`,Gm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Wm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Xm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,qm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ym=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Zm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,$m=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Jm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Km=`#define PI 3.141592653589793
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
} // validated`,jm=`vec3 transformedNormal = objectNormal;
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
#endif`,Qm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,e0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,t0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,n0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,i0="gl_FragColor = linearToOutputTexel( gl_FragColor );",s0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,r0=`#ifdef USE_ENVMAP
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
#endif`,a0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,o0=`#ifdef USE_ENVMAP
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
#endif`,l0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,c0=`#ifdef USE_ENVMAP
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
#endif`,h0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,u0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,f0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,d0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,p0=`#ifdef USE_GRADIENTMAP
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
}`,m0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,g0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,x0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,_0=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,y0=`#ifdef USE_ENVMAP
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
#endif`,v0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,M0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,b0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,S0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,T0=`PhysicalMaterial material;
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
#endif`,w0=`uniform sampler2D dfgLUT;
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
}`,E0=`
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
#endif`,A0=`#if defined( RE_IndirectDiffuse )
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
#endif`,R0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,C0=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,I0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,P0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,L0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,N0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,D0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,U0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,F0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,O0=`#if defined( USE_POINTS_UV )
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
#endif`,B0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,z0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,k0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,H0=`#if defined( USE_MORPHCOLORS )
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
#endif`,V0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,G0=`#ifdef USE_MORPHTARGETS
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
#endif`,W0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,X0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,q0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Y0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Z0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,J0=`#ifdef USE_NORMALMAP
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
#endif`,K0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,j0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Q0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,eg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,tg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ng=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ig=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,sg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,rg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ag=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,og=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,lg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,cg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,hg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ug=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,fg=`float getShadowMask() {
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
}`,dg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,pg=`#ifdef USE_SKINNING
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
#endif`,mg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,gg=`#ifdef USE_SKINNING
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
#endif`,xg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,_g=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,yg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,vg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Mg=`#ifdef USE_TRANSMISSION
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
#endif`,bg=`#ifdef USE_TRANSMISSION
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
#endif`,Sg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Tg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Eg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Ag=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Rg=`uniform sampler2D t2D;
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
}`,Cg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ig=`uniform float backgroundBlurriness;
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
}`,Pg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Lg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ng=`#include <common>
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
}`,Dg=`#if DEPTH_PACKING == 3200
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
}`,Ug=`#define DISTANCE
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
}`,Fg=`#define DISTANCE
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
}`,Og=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Bg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zg=`uniform float scale;
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
}`,kg=`uniform vec3 diffuse;
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
}`,Hg=`#include <common>
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
}`,Vg=`uniform vec3 diffuse;
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
}`,Gg=`#define LAMBERT
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
}`,Wg=`#define LAMBERT
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
}`,Xg=`#define MATCAP
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
}`,qg=`#define MATCAP
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
}`,Yg=`#define NORMAL
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
}`,Zg=`#define NORMAL
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
}`,$g=`#define PHONG
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
}`,Jg=`#define PHONG
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
}`,Kg=`#define STANDARD
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
}`,jg=`#define STANDARD
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
}`,Qg=`#define TOON
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
}`,ex=`#define TOON
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
}`,tx=`uniform float size;
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
}`,nx=`uniform vec3 diffuse;
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
}`,ix=`#include <common>
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
}`,sx=`uniform vec3 color;
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
}`,rx=`uniform float rotation;
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
}`,ax=`uniform vec3 diffuse;
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
}`,Ge={alphahash_fragment:Rm,alphahash_pars_fragment:Cm,alphamap_fragment:Im,alphamap_pars_fragment:Pm,alphatest_fragment:Lm,alphatest_pars_fragment:Nm,aomap_fragment:Dm,aomap_pars_fragment:Um,batching_pars_vertex:Fm,batching_vertex:Om,begin_vertex:Bm,beginnormal_vertex:zm,bsdfs:km,iridescence_fragment:Hm,bumpmap_pars_fragment:Vm,clipping_planes_fragment:Gm,clipping_planes_pars_fragment:Wm,clipping_planes_pars_vertex:Xm,clipping_planes_vertex:qm,color_fragment:Ym,color_pars_fragment:Zm,color_pars_vertex:$m,color_vertex:Jm,common:Km,defaultnormal_vertex:jm,displacementmap_pars_vertex:Qm,displacementmap_vertex:e0,emissivemap_fragment:t0,emissivemap_pars_fragment:n0,colorspace_fragment:i0,colorspace_pars_fragment:s0,envmap_fragment:r0,envmap_common_pars_fragment:a0,envmap_pars_fragment:o0,envmap_pars_vertex:l0,envmap_physical_pars_fragment:y0,envmap_vertex:c0,fog_vertex:h0,fog_pars_vertex:u0,fog_fragment:f0,fog_pars_fragment:d0,gradientmap_pars_fragment:p0,lightmap_pars_fragment:m0,lights_lambert_fragment:g0,lights_lambert_pars_fragment:x0,lights_pars_begin:_0,lights_toon_fragment:v0,lights_toon_pars_fragment:M0,lights_phong_fragment:b0,lights_phong_pars_fragment:S0,lights_physical_fragment:T0,lights_physical_pars_fragment:w0,lights_fragment_begin:E0,lights_fragment_maps:A0,lights_fragment_end:R0,lightprobes_pars_fragment:C0,logdepthbuf_fragment:I0,logdepthbuf_pars_fragment:P0,logdepthbuf_pars_vertex:L0,logdepthbuf_vertex:N0,map_fragment:D0,map_pars_fragment:U0,map_particle_fragment:F0,map_particle_pars_fragment:O0,metalnessmap_fragment:B0,metalnessmap_pars_fragment:z0,morphinstance_vertex:k0,morphcolor_vertex:H0,morphnormal_vertex:V0,morphtarget_pars_vertex:G0,morphtarget_vertex:W0,normal_fragment_begin:X0,normal_fragment_maps:q0,normal_pars_fragment:Y0,normal_pars_vertex:Z0,normal_vertex:$0,normalmap_pars_fragment:J0,clearcoat_normal_fragment_begin:K0,clearcoat_normal_fragment_maps:j0,clearcoat_pars_fragment:Q0,iridescence_pars_fragment:eg,opaque_fragment:tg,packing:ng,premultiplied_alpha_fragment:ig,project_vertex:sg,dithering_fragment:rg,dithering_pars_fragment:ag,roughnessmap_fragment:og,roughnessmap_pars_fragment:lg,shadowmap_pars_fragment:cg,shadowmap_pars_vertex:hg,shadowmap_vertex:ug,shadowmask_pars_fragment:fg,skinbase_vertex:dg,skinning_pars_vertex:pg,skinning_vertex:mg,skinnormal_vertex:gg,specularmap_fragment:xg,specularmap_pars_fragment:_g,tonemapping_fragment:yg,tonemapping_pars_fragment:vg,transmission_fragment:Mg,transmission_pars_fragment:bg,uv_pars_fragment:Sg,uv_pars_vertex:Tg,uv_vertex:wg,worldpos_vertex:Eg,background_vert:Ag,background_frag:Rg,backgroundCube_vert:Cg,backgroundCube_frag:Ig,cube_vert:Pg,cube_frag:Lg,depth_vert:Ng,depth_frag:Dg,distance_vert:Ug,distance_frag:Fg,equirect_vert:Og,equirect_frag:Bg,linedashed_vert:zg,linedashed_frag:kg,meshbasic_vert:Hg,meshbasic_frag:Vg,meshlambert_vert:Gg,meshlambert_frag:Wg,meshmatcap_vert:Xg,meshmatcap_frag:qg,meshnormal_vert:Yg,meshnormal_frag:Zg,meshphong_vert:$g,meshphong_frag:Jg,meshphysical_vert:Kg,meshphysical_frag:jg,meshtoon_vert:Qg,meshtoon_frag:ex,points_vert:tx,points_frag:nx,shadow_vert:ix,shadow_frag:sx,sprite_vert:rx,sprite_frag:ax},ye={common:{diffuse:{value:new De(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Be}},envmap:{envMap:{value:null},envMapRotation:{value:new Be},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Be}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Be}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Be},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Be},normalScale:{value:new Oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Be},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Be}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Be}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Be}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new De(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new De(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0},uvTransform:{value:new Be}},sprite:{diffuse:{value:new De(16777215)},opacity:{value:1},center:{value:new Oe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}}},oi={basic:{uniforms:an([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.fog]),vertexShader:Ge.meshbasic_vert,fragmentShader:Ge.meshbasic_frag},lambert:{uniforms:an([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new De(0)},envMapIntensity:{value:1}}]),vertexShader:Ge.meshlambert_vert,fragmentShader:Ge.meshlambert_frag},phong:{uniforms:an([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new De(0)},specular:{value:new De(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphong_vert,fragmentShader:Ge.meshphong_frag},standard:{uniforms:an([ye.common,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.roughnessmap,ye.metalnessmap,ye.fog,ye.lights,{emissive:{value:new De(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag},toon:{uniforms:an([ye.common,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.gradientmap,ye.fog,ye.lights,{emissive:{value:new De(0)}}]),vertexShader:Ge.meshtoon_vert,fragmentShader:Ge.meshtoon_frag},matcap:{uniforms:an([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,{matcap:{value:null}}]),vertexShader:Ge.meshmatcap_vert,fragmentShader:Ge.meshmatcap_frag},points:{uniforms:an([ye.points,ye.fog]),vertexShader:Ge.points_vert,fragmentShader:Ge.points_frag},dashed:{uniforms:an([ye.common,ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ge.linedashed_vert,fragmentShader:Ge.linedashed_frag},depth:{uniforms:an([ye.common,ye.displacementmap]),vertexShader:Ge.depth_vert,fragmentShader:Ge.depth_frag},normal:{uniforms:an([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,{opacity:{value:1}}]),vertexShader:Ge.meshnormal_vert,fragmentShader:Ge.meshnormal_frag},sprite:{uniforms:an([ye.sprite,ye.fog]),vertexShader:Ge.sprite_vert,fragmentShader:Ge.sprite_frag},background:{uniforms:{uvTransform:{value:new Be},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ge.background_vert,fragmentShader:Ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Be}},vertexShader:Ge.backgroundCube_vert,fragmentShader:Ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ge.cube_vert,fragmentShader:Ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ge.equirect_vert,fragmentShader:Ge.equirect_frag},distance:{uniforms:an([ye.common,ye.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ge.distance_vert,fragmentShader:Ge.distance_frag},shadow:{uniforms:an([ye.lights,ye.fog,{color:{value:new De(0)},opacity:{value:1}}]),vertexShader:Ge.shadow_vert,fragmentShader:Ge.shadow_frag}};oi.physical={uniforms:an([oi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Be},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Be},clearcoatNormalScale:{value:new Oe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Be},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Be},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Be},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Be},sheen:{value:0},sheenColor:{value:new De(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Be},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Be},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Be},transmissionSamplerSize:{value:new Oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Be},attenuationDistance:{value:0},attenuationColor:{value:new De(0)},specularColor:{value:new De(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Be},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Be},anisotropyVector:{value:new Oe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Be}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag};var xl={r:0,b:0,g:0},ox=new ot,od=new Be;od.set(-1,0,0,0,1,0,0,0,1);function lx(n,e,t,i,s,r){let a=new De(0),o=s===!0?0:1,l,c,h=null,p=0,f=null;function m(M){let C=M.isScene===!0?M.background:null;if(C&&C.isTexture){let b=M.backgroundBlurriness>0;C=e.get(C,b)}return C}function x(M){let C=!1,b=m(M);b===null?u(a,o):b&&b.isColor&&(u(b,1),C=!0);let _=n.xr.getEnvironmentBlendMode();_==="additive"?t.buffers.color.setClear(0,0,0,1,r):_==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||C)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function y(M,C){let b=m(C);b&&b.isCubeTexture?(c===void 0&&(c=new je(new dn(1,1,1),new On({name:"BackgroundCubeMaterial",uniforms:ms(oi.backgroundCube.uniforms),vertexShader:oi.backgroundCube.vertexShader,fragmentShader:oi.backgroundCube.fragmentShader,side:Jt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(_,S,g){this.matrixWorld.copyPosition(g.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=b,c.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(ox.makeRotationFromEuler(C.backgroundRotation)).transpose(),b.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(od),c.material.toneMapped=$e.getTransfer(b.colorSpace)!==st,(h!==b||p!==b.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,h=b,p=b.version,f=n.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null)):b&&b.isTexture&&(l===void 0&&(l=new je(new ii(2,2),new On({name:"BackgroundMaterial",uniforms:ms(oi.background.uniforms),vertexShader:oi.background.vertexShader,fragmentShader:oi.background.fragmentShader,side:Wi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=b,l.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,l.material.toneMapped=$e.getTransfer(b.colorSpace)!==st,b.matrixAutoUpdate===!0&&b.updateMatrix(),l.material.uniforms.uvTransform.value.copy(b.matrix),(h!==b||p!==b.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,h=b,p=b.version,f=n.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function u(M,C){M.getRGB(xl,Qc(n)),t.buffers.color.setClear(xl.r,xl.g,xl.b,C,r)}function d(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,C=1){a.set(M),o=C,u(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(M){o=M,u(a,o)},render:x,addToRenderList:y,dispose:d}}function cx(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null),r=s,a=!1;function o(E,w,L,A,P){let D=!1,B=p(E,A,L,w);r!==B&&(r=B,c(r.object)),D=m(E,A,L,P),D&&x(E,A,L,P),P!==null&&e.update(P,n.ELEMENT_ARRAY_BUFFER),(D||a)&&(a=!1,b(E,w,L,A),P!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(P).buffer))}function l(){return n.createVertexArray()}function c(E){return n.bindVertexArray(E)}function h(E){return n.deleteVertexArray(E)}function p(E,w,L,A){let P=A.wireframe===!0,D=i[w.id];D===void 0&&(D={},i[w.id]=D);let B=E.isInstancedMesh===!0?E.id:0,k=D[B];k===void 0&&(k={},D[B]=k);let O=k[L.id];O===void 0&&(O={},k[L.id]=O);let G=O[P];return G===void 0&&(G=f(l()),O[P]=G),G}function f(E){let w=[],L=[],A=[];for(let P=0;P<t;P++)w[P]=0,L[P]=0,A[P]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:L,attributeDivisors:A,object:E,attributes:{},index:null}}function m(E,w,L,A){let P=r.attributes,D=w.attributes,B=0,k=L.getAttributes();for(let O in k)if(k[O].location>=0){let J=P[O],te=D[O];if(te===void 0&&(O==="instanceMatrix"&&E.instanceMatrix&&(te=E.instanceMatrix),O==="instanceColor"&&E.instanceColor&&(te=E.instanceColor)),J===void 0||J.attribute!==te||te&&J.data!==te.data)return!0;B++}return r.attributesNum!==B||r.index!==A}function x(E,w,L,A){let P={},D=w.attributes,B=0,k=L.getAttributes();for(let O in k)if(k[O].location>=0){let J=D[O];J===void 0&&(O==="instanceMatrix"&&E.instanceMatrix&&(J=E.instanceMatrix),O==="instanceColor"&&E.instanceColor&&(J=E.instanceColor));let te={};te.attribute=J,J&&J.data&&(te.data=J.data),P[O]=te,B++}r.attributes=P,r.attributesNum=B,r.index=A}function y(){let E=r.newAttributes;for(let w=0,L=E.length;w<L;w++)E[w]=0}function u(E){d(E,0)}function d(E,w){let L=r.newAttributes,A=r.enabledAttributes,P=r.attributeDivisors;L[E]=1,A[E]===0&&(n.enableVertexAttribArray(E),A[E]=1),P[E]!==w&&(n.vertexAttribDivisor(E,w),P[E]=w)}function M(){let E=r.newAttributes,w=r.enabledAttributes;for(let L=0,A=w.length;L<A;L++)w[L]!==E[L]&&(n.disableVertexAttribArray(L),w[L]=0)}function C(E,w,L,A,P,D,B){B===!0?n.vertexAttribIPointer(E,w,L,P,D):n.vertexAttribPointer(E,w,L,A,P,D)}function b(E,w,L,A){y();let P=A.attributes,D=L.getAttributes(),B=w.defaultAttributeValues;for(let k in D){let O=D[k];if(O.location>=0){let G=P[k];if(G===void 0&&(k==="instanceMatrix"&&E.instanceMatrix&&(G=E.instanceMatrix),k==="instanceColor"&&E.instanceColor&&(G=E.instanceColor)),G!==void 0){let J=G.normalized,te=G.itemSize,oe=e.get(G);if(oe===void 0)continue;let $=oe.buffer,ue=oe.type,le=oe.bytesPerElement,Ae=ue===n.INT||ue===n.UNSIGNED_INT||G.gpuType===Lo;if(G.isInterleavedBufferAttribute){let ve=G.data,Fe=ve.isInterleavedBuffer===!0?ve.stride:ve.itemSize,Lt=G.offset;if(ve.isInstancedInterleavedBuffer||ve.isInstancedBufferAttribute){for(let Pe=0;Pe<O.locationSize;Pe++)d(O.location+Pe,ve.meshPerAttribute);E.isInstancedMesh!==!0&&A._maxInstanceCount===void 0&&(A._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let Pe=0;Pe<O.locationSize;Pe++)u(O.location+Pe);n.bindBuffer(n.ARRAY_BUFFER,$);for(let Pe=0;Pe<O.locationSize;Pe++)C(O.location+Pe,te/O.locationSize,ue,J,Fe*le,(Lt+te/O.locationSize*Pe)*le,Ae)}else{if(G.isInstancedBufferAttribute){for(let ve=0;ve<O.locationSize;ve++)d(O.location+ve,G.meshPerAttribute);E.isInstancedMesh!==!0&&A._maxInstanceCount===void 0&&(A._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let ve=0;ve<O.locationSize;ve++)u(O.location+ve);n.bindBuffer(n.ARRAY_BUFFER,$);for(let ve=0;ve<O.locationSize;ve++)C(O.location+ve,te/O.locationSize,ue,J,te*le,te/O.locationSize*ve*le,Ae)}}else if(B!==void 0){let J=B[k];if(J!==void 0)switch(J.length){case 2:n.vertexAttrib2fv(O.location,J);break;case 3:n.vertexAttrib3fv(O.location,J);break;case 4:n.vertexAttrib4fv(O.location,J);break;default:n.vertexAttrib1fv(O.location,J)}}}}M()}function _(){U();for(let E in i){let w=i[E];for(let L in w){let A=w[L];for(let P in A){let D=A[P];for(let B in D)h(D[B].object),delete D[B];delete A[P]}}delete i[E]}}function S(E){if(i[E.id]===void 0)return;let w=i[E.id];for(let L in w){let A=w[L];for(let P in A){let D=A[P];for(let B in D)h(D[B].object),delete D[B];delete A[P]}}delete i[E.id]}function g(E){for(let w in i){let L=i[w];for(let A in L){let P=L[A];if(P[E.id]===void 0)continue;let D=P[E.id];for(let B in D)h(D[B].object),delete D[B];delete P[E.id]}}}function T(E){for(let w in i){let L=i[w],A=E.isInstancedMesh===!0?E.id:0,P=L[A];if(P!==void 0){for(let D in P){let B=P[D];for(let k in B)h(B[k].object),delete B[k];delete P[D]}delete L[A],Object.keys(L).length===0&&delete i[w]}}}function U(){v(),a=!0,r!==s&&(r=s,c(r.object))}function v(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:U,resetDefaultState:v,dispose:_,releaseStatesOfGeometry:S,releaseStatesOfObject:T,releaseStatesOfProgram:g,initAttributes:y,enableAttribute:u,disableUnusedAttributes:M}}function hx(n,e,t){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),t.update(c,i,1)}function a(l,c,h){h!==0&&(n.drawArraysInstanced(i,l,c,h),t.update(c,i,h))}function o(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let f=0;for(let m=0;m<h;m++)f+=c[m];t.update(f,i,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function ux(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let g=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(g.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(g){return!(g!==$n&&i.convert(g)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(g){let T=g===Zn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(g!==xn&&g!==Bn&&!T&&i.convert(g)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(g){if(g==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";g="mediump"}return g==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(Le("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let p=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=t.logarithmicDepthBuffer===!0&&p===!1;t.reversedDepthBuffer===!0&&p===!1&&Le("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&p===!0&&Le("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let m=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=n.getParameter(n.MAX_TEXTURE_SIZE),u=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),d=n.getParameter(n.MAX_VERTEX_ATTRIBS),M=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),C=n.getParameter(n.MAX_VARYING_VECTORS),b=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),_=n.getParameter(n.MAX_SAMPLES),S=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:p,maxTextures:m,maxVertexTextures:x,maxTextureSize:y,maxCubemapSize:u,maxAttributes:d,maxVertexUniforms:M,maxVaryings:C,maxFragmentUniforms:b,maxSamples:_,samples:S}}function fx(n){let e=this,t=null,i=0,s=!1,r=!1,a=new Xn,o=new Be,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,f){let m=p.length!==0||f||i!==0||s;return s=f,i=p.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(p,f){t=h(p,f,0)},this.setState=function(p,f,m){let x=p.clippingPlanes,y=p.clipIntersection,u=p.clipShadows,d=n.get(p);if(!s||x===null||x.length===0||r&&!u)r?h(null):c();else{let M=r?0:i,C=M*4,b=d.clippingState||null;l.value=b,b=h(x,f,C,m);for(let _=0;_!==C;++_)b[_]=t[_];d.clippingState=b,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(p,f,m,x){let y=p!==null?p.length:0,u=null;if(y!==0){if(u=l.value,x!==!0||u===null){let d=m+y*4,M=f.matrixWorldInverse;o.getNormalMatrix(M),(u===null||u.length<d)&&(u=new Float32Array(d));for(let C=0,b=m;C!==y;++C,b+=4)a.copy(p[C]).applyMatrix4(M,o),a.normal.toArray(u,b),u[b+3]=a.constant}l.value=u,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,u}}var ta=class extends En{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Fr(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new dn(5,5,5),r=new On({name:"CubemapFromEquirect",uniforms:ms(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Jt,blending:hs});r.uniforms.tEquirect.value=t;let a=new je(s,r),o=t.minFilter;return t.minFilter===Mi&&(t.minFilter=hn),new Ks(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}},zf=256,dx=3,px=20,ld=256,cd=16,mx=3,gx=new X,xx=new De,yl=class n{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Ks(1,10,null),this._boxMesh=new je(new dn(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){let{size:a=256,position:o=gx}=r,l=this._renderer;this._setSize(a);let c=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);let p=l.autoClear,f=l.autoClearColor,m=l.autoClearDepth,x=l.autoClearStencil,y=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,y===null&&(e.background=l.getClearColor(xx));let u=new Ks(i,s,h);return u.position.copy(o),u.update(l,e),l.autoClear=p,l.autoClearColor=f,l.autoClearDepth=m,l.autoClearStencil=x,e.background=y,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Vf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Hf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(zf,Pf(e))}_fromTexture(e,t){e.mapping===fs||e.mapping===er?this._setSize(e.image.length===0?zf:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let i=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(i),i}_allocateTarget(){let e=this._cubeSize,t=kf(e,!1,!1),i=Math.log2(e)-dx;for(let s=0;s<=i;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==t||e&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=kf(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,i){let s=this._boxMesh,r=this._cubeCamera;s.material=i,r.renderTarget=e,r.activeMipmapLevel=t;let a=e.width>>t;e.viewport.set(0,0,a,a),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===fs||e.mapping===er?(this._cubemapMaterial===null&&(this._cubemapMaterial=Vf()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Hf()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=_x(),this._integrationMaterial=yx());let t=this._cubeSize,i=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/cd);for(let a=0;a<=i;a++){let o=n.lodToRoughness(a,i);if(a>i-mx)r.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{let l=o>0?Math.log2(t)+.5*Math.log2(6/(ld*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=l,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=vx());let i=this._blurMaterial,s=i.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,i),s.envMap.value=e.texture,this._renderCube(r,0,i)}};function kf(n,e,t){return new ta(n,{minFilter:Mi,generateMipmaps:e,type:Zn,colorSpace:Tr,depthBuffer:t})}function ia(n,e,t){return new On({name:n,uniforms:e,vertexShader:Ge.cube_vert,fragmentShader:t,side:Jt,blending:hs,depthTest:!1,depthWrite:!1})}function _x(){return ia("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${ld}u

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
	`)}function yx(){return ia("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:cd}},`

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
	`)}function vx(){return ia("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${px}
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
	`)}function Hf(){return ia("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function Vf(){return ia("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Mx(n){let e=new WeakMap,t=new WeakMap,i=null;function s(f,m=!1){return f==null?null:m?a(f):r(f)}function r(f){if(f&&f.isTexture){let m=f.mapping;if(m===Co||m===Io)if(e.has(f)){let x=e.get(f).texture;return o(x,f.mapping)}else{let x=f.image;if(x&&x.height>0){let y=new ta(x.height);return y.fromEquirectangularTexture(n,f),e.set(f,y),f.addEventListener("dispose",c),o(y.texture,f.mapping)}else return null}}return f}function a(f){if(f&&f.isTexture&&f.isPMREMTexture!==!0){let m=f.mapping,x=m===Co||m===Io,y=m===fs||m===er;if(x||y){let u=t.get(f),d=u!==void 0?u.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==d)return i===null&&(i=new yl(n)),u=x?i.fromEquirectangular(f,u):i.fromCubemap(f,u),u.texture.pmremVersion=f.pmremVersion,t.set(f,u),u.texture;if(u!==void 0)return u.texture;{let M=f.image;return x&&M&&M.height>0||y&&M&&l(M)?(i===null&&(i=new yl(n)),u=x?i.fromEquirectangular(f):i.fromCubemap(f),u.texture.pmremVersion=f.pmremVersion,t.set(f,u),f.addEventListener("dispose",h),u.texture):null}}}return f}function o(f,m){return m===Co?f.mapping=fs:m===Io&&(f.mapping=er),f}function l(f){let m=0,x=6;for(let y=0;y<x;y++)f[y]!==void 0&&m++;return m===x}function c(f){let m=f.target;m.removeEventListener("dispose",c);let x=e.get(m);x!==void 0&&(e.delete(m),x.dispose())}function h(f){let m=f.target;m.removeEventListener("dispose",h);let x=t.get(m);x!==void 0&&(t.delete(m),x.dispose())}function p(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:p}}function bx(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&br("WebGLRenderer: "+i+" extension not supported."),s}}}function Sx(n,e,t,i){let s={},r=new WeakMap,a=new FinalizationRegistry(x=>delete s[x]);function o(x){l(x.target)}function l(x){x.index!==null&&e.remove(x.index);for(let u in x.attributes)e.remove(x.attributes[u]);x.removeEventListener("dispose",o),delete s[x.id],a.unregister(x);let y=r.get(x);y&&(e.remove(y),r.delete(x)),i.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,t.memory.geometries--}function c(x,y){return s[y.id]!==void 0||(y.addEventListener("dispose",o),s[y.id]=new WeakRef(y),a.register(y,y.id,y),t.memory.geometries++),y}function h(x){let y=x.attributes;for(let u in y)e.update(y[u],n.ARRAY_BUFFER)}function p(x){let y=x.index,u=x.attributes.position,d=0;if(u===void 0)return;let M=y!==null?y.array.length:u.array.length/3-1,C=u.count>=65535?Lr:Pr,b=new C(Math.ceil(M/3)*6,1),_=b.array;if(y!==null){let g=y.array;d=y.version;for(let T=0,U=0;T<M;T+=3){let v=g[T+0],E=g[T+1],w=g[T+2];_[U++]=v,_[U++]=E,_[U++]=E,_[U++]=w,_[U++]=w,_[U++]=v}}else{d=u.version;for(let g=0,T=0;g<M;g+=3){let U=g+0,v=g+1,E=g+2;_[T++]=U,_[T++]=v,_[T++]=v,_[T++]=E,_[T++]=E,_[T++]=U}}b.version=d;let S=r.get(x);S&&e.remove(S),r.set(x,b)}function f(x){let y=r.get(x);if(y){let u=x.index;u!==null&&y.version<u.version&&p(x)}else p(x);return r.get(x)}function m(){for(let x in s){let y=s[x].deref();y!==void 0&&l(y)}}return{get:c,update:h,getWireframeAttribute:f,dispose:m}}function Tx(n,e,t){let i;function s(p){i=p}let r,a;function o(p){r=p.type,a=p.bytesPerElement}function l(p,f){n.drawElements(i,f,r,p*a),t.update(f,i,1)}function c(p,f,m){m!==0&&(n.drawElementsInstanced(i,f,r,p*a,m),t.update(f,i,m))}function h(p,f,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,p,0,m);let y=0;for(let u=0;u<m;u++)y+=f[u];t.update(y,i,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function wx(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(r/3);break;case n.LINES:t.lines+=o*(r/2);break;case n.LINE_STRIP:t.lines+=o*(r-1);break;case n.LINE_LOOP:t.lines+=o*r;break;case n.POINTS:t.points+=o*r;break;default:Ne("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function Ex(n,e,t){let i=new WeakMap,s=new _t;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=h!==void 0?h.length:0,f=i.get(o);if(f===void 0||f.count!==p){let U=function(){g.dispose(),i.delete(o),o.removeEventListener("dispose",U)};f!==void 0&&f.texture.dispose();let m=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,y=o.morphAttributes.color!==void 0,u=o.morphAttributes.position||[],d=o.morphAttributes.normal||[],M=o.morphAttributes.color||[],C=0;m===!0&&(C=1),x===!0&&(C=2),y===!0&&(C=3);let b=o.attributes.position.count*C,_=1;b>e.maxTextureSize&&(_=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);let S=new Float32Array(b*_*4*p),g=new Rr(S,b,_,p);g.type=Bn,g.needsUpdate=!0;let T=C*4;for(let v=0;v<p;v++){let E=u[v],w=d[v],L=M[v],A=b*_*4*v;for(let P=0;P<E.count;P++){let D=P*T;m===!0&&(s.fromBufferAttribute(E,P),S[A+D+0]=s.x,S[A+D+1]=s.y,S[A+D+2]=s.z,S[A+D+3]=0),x===!0&&(s.fromBufferAttribute(w,P),S[A+D+4]=s.x,S[A+D+5]=s.y,S[A+D+6]=s.z,S[A+D+7]=0),y===!0&&(s.fromBufferAttribute(L,P),S[A+D+8]=s.x,S[A+D+9]=s.y,S[A+D+10]=s.z,S[A+D+11]=L.itemSize===4?s.w:1)}}f={count:p,texture:g,size:new Oe(b,_)},i.set(o,f),o.addEventListener("dispose",U)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let m=0;for(let y=0;y<c.length;y++)m+=c[y];let x=o.morphTargetsRelative?1:1-m;l.getUniforms().setValue(n,"morphTargetBaseInfluence",x),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function Ax(n,e,t,i,s){let r=new WeakMap;function a(c){let h=s.render.frame,p=c.geometry,f=e.get(c,p);if(r.get(f)!==h&&(e.update(f),r.set(f,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let m=c.skeleton;r.get(m)!==h&&(m.update(),r.set(m,h))}return f}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}var Rx={[Dc]:"LINEAR_TONE_MAPPING",[Uc]:"REINHARD_TONE_MAPPING",[Fc]:"CINEON_TONE_MAPPING",[Oc]:"ACES_FILMIC_TONE_MAPPING",[zc]:"AGX_TONE_MAPPING",[kc]:"NEUTRAL_TONE_MAPPING",[Bc]:"CUSTOM_TONE_MAPPING"};function Cx(n,e,t,i,s,r){let a=new En(e,t,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=null,h=new rn;h.setAttribute("position",new ft([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new ft([0,2,0,0,2,0],2));let p=new po({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new je(h,p),m=new ls(-1,1,1,-1,0,1),x=null,y=null,u=!1,d,M=null,C=[],b=!1;this.setSize=function(_,S){a.setSize(_,S),o!==null&&o.setSize(_,S),l!==null&&l.setSize(_,S);for(let g=0;g<C.length;g++){let T=C[g];T.setSize&&T.setSize(_,S)}},this.setEffects=function(_){C=_,b=C.length>0&&C[0].isRenderPass===!0;let S=a.width,g=a.height;C.length>0&&o===null&&(o=new En(S,g,{type:Zn,depthBuffer:!1,stencilBuffer:!1}),l=new En(S,g,{type:Zn,depthBuffer:!1,stencilBuffer:!1}));let T=s===!0&&C.some(U=>U.needsDepthTexture===!0);T!==(a.depthTexture!==null)&&(T===!0&&c===null&&(c=new vi(S,g),r===!0&&(c.format=bi,c.type=ds)),a.dispose(),a.depthTexture=T?c:null,a.resolveDepthBuffer=T,a.storeMultisampledDepthBuffer=T);for(let U=0;U<C.length;U++){let v=C[U];v.setSize&&v.setSize(S,g),T&&v.needsDepthTexture===!0&&v.setDepthTexture&&v.setDepthTexture(c)}},this.begin=function(_,S){if(u||_.toneMapping===ri&&C.length===0)return!1;if(M=S,S!==null){let g=S.width,T=S.height;(a.width!==g||a.height!==T)&&this.setSize(g,T)}return b===!1&&_.setRenderTarget(a),d=_.toneMapping,_.toneMapping=ri,!0},this.hasRenderPass=function(){return b},this.end=function(_,S){_.toneMapping=d,u=!0;let g=a,T=o;for(let U=0;U<C.length;U++){let v=C[U];v.enabled!==!1&&(v.render(_,T,g,S),v.needsSwap!==!1&&(g=T,T=T===o?l:o))}if(x!==_.outputColorSpace||y!==_.toneMapping){x=_.outputColorSpace,y=_.toneMapping,p.defines={},$e.getTransfer(x)===st&&(p.defines.SRGB_TRANSFER="");let U=Rx[y];U&&(p.defines[U]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=g.texture,_.setRenderTarget(M),_.render(f,m),M=null,u=!1},this.isCompositing=function(){return u},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),h.dispose(),p.dispose()}}var hd=new un,ud=new vi(1,1),fd=new Br(1),dd=new Rr,pd=new co,md=new Fr,Gf=[],Wf=[],Xf=new Float32Array(16),qf=new Float32Array(9),Yf=new Float32Array(4);function sr(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=Gf[s];if(r===void 0&&(r=new Float32Array(s),Gf[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(r,o)}return r}function Bt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function zt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function vl(n,e){let t=Wf[e];t===void 0&&(t=new Int32Array(e),Wf[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Ix(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Px(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;n.uniform2fv(this.addr,e),zt(t,e)}}function Lx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Bt(t,e))return;n.uniform3fv(this.addr,e),zt(t,e)}}function Nx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;n.uniform4fv(this.addr,e),zt(t,e)}}function Dx(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Bt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),zt(t,e)}else{if(Bt(t,i))return;Yf.set(i),n.uniformMatrix2fv(this.addr,!1,Yf),zt(t,i)}}function Ux(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Bt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),zt(t,e)}else{if(Bt(t,i))return;qf.set(i),n.uniformMatrix3fv(this.addr,!1,qf),zt(t,i)}}function Fx(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Bt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),zt(t,e)}else{if(Bt(t,i))return;Xf.set(i),n.uniformMatrix4fv(this.addr,!1,Xf),zt(t,i)}}function Ox(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Bx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;n.uniform2iv(this.addr,e),zt(t,e)}}function zx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Bt(t,e))return;n.uniform3iv(this.addr,e),zt(t,e)}}function kx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;n.uniform4iv(this.addr,e),zt(t,e)}}function Hx(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Vx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;n.uniform2uiv(this.addr,e),zt(t,e)}}function Gx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Bt(t,e))return;n.uniform3uiv(this.addr,e),zt(t,e)}}function Wx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;n.uniform4uiv(this.addr,e),zt(t,e)}}function Ml(n){return n.version===0&&(n.compareFunction=Jc,n.needsUpdate=!0),n}function Xx(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?r=Ml(ud):r=hd,t.setTexture2D(e||r,s)}function qx(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||pd,s)}function Yx(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_CUBE_SHADOW?r=Ml(fd):r=md,t.setTextureCube(e||r,s)}function Zx(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||dd,s)}function $x(n){switch(n){case 5126:return Ix;case 35664:return Px;case 35665:return Lx;case 35666:return Nx;case 35674:return Dx;case 35675:return Ux;case 35676:return Fx;case 5124:case 35670:return Ox;case 35667:case 35671:return Bx;case 35668:case 35672:return zx;case 35669:case 35673:return kx;case 5125:return Hx;case 36294:return Vx;case 36295:return Gx;case 36296:return Wx;case 35678:case 36198:case 36298:case 36306:case 35682:return Xx;case 35679:case 36299:case 36307:return qx;case 35680:case 36300:case 36308:case 36293:return Yx;case 36289:case 36303:case 36311:case 36292:return Zx}}function Jx(n,e){n.uniform1fv(this.addr,e)}function Kx(n,e){let t=sr(e,this.size,2);n.uniform2fv(this.addr,t)}function jx(n,e){let t=sr(e,this.size,3);n.uniform3fv(this.addr,t)}function Qx(n,e){let t=sr(e,this.size,4);n.uniform4fv(this.addr,t)}function e_(n,e){let t=sr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function t_(n,e){let t=sr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function n_(n,e){let t=sr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function i_(n,e){n.uniform1iv(this.addr,e)}function s_(n,e){n.uniform2iv(this.addr,e)}function r_(n,e){n.uniform3iv(this.addr,e)}function a_(n,e){n.uniform4iv(this.addr,e)}function o_(n,e){n.uniform1uiv(this.addr,e)}function l_(n,e){n.uniform2uiv(this.addr,e)}function c_(n,e){n.uniform3uiv(this.addr,e)}function h_(n,e){n.uniform4uiv(this.addr,e)}function u_(n,e,t){let i=this.cache,s=e.length,r=vl(t,s);Bt(i,r)||(n.uniform1iv(this.addr,r),zt(i,r));let a;this.type===n.SAMPLER_2D_SHADOW?a=Ml(ud):a=hd;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function f_(n,e,t){let i=this.cache,s=e.length,r=vl(t,s);Bt(i,r)||(n.uniform1iv(this.addr,r),zt(i,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||pd,r[a])}function d_(n,e,t){let i=this.cache,s=e.length,r=vl(t,s);Bt(i,r)||(n.uniform1iv(this.addr,r),zt(i,r));let a;this.type===n.SAMPLER_CUBE_SHADOW?a=Ml(fd):a=md;for(let o=0;o!==s;++o)t.setTextureCube(e[o]||a,r[o])}function p_(n,e,t){let i=this.cache,s=e.length,r=vl(t,s);Bt(i,r)||(n.uniform1iv(this.addr,r),zt(i,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||dd,r[a])}function m_(n){switch(n){case 5126:return Jx;case 35664:return Kx;case 35665:return jx;case 35666:return Qx;case 35674:return e_;case 35675:return t_;case 35676:return n_;case 5124:case 35670:return i_;case 35667:case 35671:return s_;case 35668:case 35672:return r_;case 35669:case 35673:return a_;case 5125:return o_;case 36294:return l_;case 36295:return c_;case 36296:return h_;case 35678:case 36198:case 36298:case 36306:case 35682:return u_;case 35679:case 36299:case 36307:return f_;case 35680:case 36300:case 36308:case 36293:return d_;case 36289:case 36303:case 36311:case 36292:return p_}}var rh=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=$x(t.type)}},ah=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=m_(t.type)}},oh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],i)}}},ih=/(\w+)(\])?(\[|\.)?/g;function Zf(n,e){n.seq.push(e),n.map[e.id]=e}function g_(n,e,t){let i=n.name,s=i.length;for(ih.lastIndex=0;;){let r=ih.exec(i),a=ih.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Zf(t,c===void 0?new rh(o,n,e):new ah(o,n,e));break}else{let p=t.map[o];p===void 0&&(p=new oh(o),Zf(t,p)),t=p}}}var ir=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){let o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);g_(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&i.push(a)}return i}};function $f(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var x_=37297,__=0;function y_(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}var Jf=new Be;function v_(n){$e._getMatrix(Jf,$e.workingColorSpace,n);let e=`mat3( ${Jf.elements.map(t=>t.toFixed(4))} )`;switch($e.getTransfer(n)){case wr:return[e,"LinearTransferOETF"];case st:return[e,"sRGBTransferOETF"];default:return Le("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Kf(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+y_(n.getShaderSource(e),o)}else return r}function M_(n,e){let t=v_(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var b_={[Dc]:"Linear",[Uc]:"Reinhard",[Fc]:"Cineon",[Oc]:"ACESFilmic",[zc]:"AgX",[kc]:"Neutral",[Bc]:"Custom"};function S_(n,e){let t=b_[e];return t===void 0?(Le("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var _l=new X;function T_(){$e.getLuminanceCoefficients(_l);let n=_l.x.toFixed(4),e=_l.y.toFixed(4),t=_l.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function w_(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ea).join(`
`)}function E_(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function A_(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),a=r.name,o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function ea(n){return n!==""}function jf(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function Qf(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var R_=/^[ \t]*#include +<([\w\d./]+)>/gm;function lh(n){return n.replace(R_,C_)}function C_(n,e){let t=Ge[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return lh(t)}var I_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ed(n){return n.replace(I_,P_)}function P_(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function td(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}var L_={[Xr]:"SHADOWMAP_TYPE_PCF",[js]:"SHADOWMAP_TYPE_VSM"};function N_(n){return L_[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var D_={[er]:"ENVMAP_MODE_REFRACTION"};function U_(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":D_[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var F_={[Ro]:"ENVMAP_BLENDING_MULTIPLY",[gf]:"ENVMAP_BLENDING_MIX",[xf]:"ENVMAP_BLENDING_ADD"};function O_(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":F_[n.combine]||"ENVMAP_BLENDING_NONE"}function B_(n,e,t,i){let s=n.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=N_(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=U_(t),p=O_(t),f=w_(t),m=E_(r),x=s.createProgram(),y,u,d=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(ea).join(`
`),y.length>0&&(y+=`
`),u=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(ea).join(`
`),u.length>0&&(u+=`
`)):(y=[td(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ea).join(`
`),u=[td(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+p:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ri?"#define TONE_MAPPING":"",t.toneMapping!==ri?Ge.tonemapping_pars_fragment:"",t.toneMapping!==ri?S_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ge.colorspace_pars_fragment,M_("linearToOutputTexel",t.outputColorSpace),T_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ea).join(`
`)),a=lh(a),a=jf(a,t),a=Qf(a,t),o=lh(o),o=jf(o,t),o=Qf(o,t),a=ed(a),o=ed(o),t.isRawShaderMaterial!==!0&&(d=`#version 300 es
`,y=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,u=["#define varying in",t.glslVersion===jc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===jc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);let M=d+y+a,C=d+u+o,b=$f(s,s.VERTEX_SHADER,M),_=$f(s,s.FRAGMENT_SHADER,C);s.attachShader(x,b),s.attachShader(x,_),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function S(v){if(n.debug.checkShaderErrors){let E=s.getProgramInfoLog(x)||"",w=s.getShaderInfoLog(b)||"",L=s.getShaderInfoLog(_)||"",A=E.trim(),P=w.trim(),D=L.trim(),B=!0,k=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(B=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,x,b,_);else{let O=Kf(s,b,"vertex"),G=Kf(s,_,"fragment");Ne("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+v.name+`
Material Type: `+v.type+`

Program Info Log: `+A+`
`+O+`
`+G)}else A!==""?Le("WebGLProgram: Program Info Log:",A):(P===""||D==="")&&(k=!1);k&&(v.diagnostics={runnable:B,programLog:A,vertexShader:{log:P,prefix:y},fragmentShader:{log:D,prefix:u}})}s.deleteShader(b),s.deleteShader(_),g=new ir(s,x),T=A_(s,x)}let g;this.getUniforms=function(){return g===void 0&&S(this),g};let T;this.getAttributes=function(){return T===void 0&&S(this),T};let U=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=s.getProgramParameter(x,x_)),U},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=__++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=b,this.fragmentShader=_,this}var z_=0,ch=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new hh(e),t.set(e,i)),i}},hh=class{constructor(e){this.id=z_++,this.code=e,this.usedTimes=0}};function k_(n){return n===Xi||n===Kr||n===jr}function H_(n,e,t,i,s,r){let a=new Cr,o=new ch,l=new Set,c=[],h=new Map,p=i.logarithmicDepthBuffer,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(g){return l.add(g),g===0?"uv":`uv${g}`}function x(g,T,U,v,E,w){let L=v.fog,A=E.geometry,P=g.isMeshStandardMaterial||g.isMeshLambertMaterial||g.isMeshPhongMaterial?v.environment:null,D=g.isMeshStandardMaterial||g.isMeshLambertMaterial&&!g.envMap||g.isMeshPhongMaterial&&!g.envMap,B=e.get(g.envMap||P,D),k=f[g.type],O=i.precision;g.precision!==null&&(O=i.getMaxPrecision(g.precision),O!==g.precision&&Le("WebGLProgram.getParameters:",g.precision,"not supported, using",O,"instead."));let G=A.morphAttributes.position||A.morphAttributes.normal||A.morphAttributes.color,J=G!==void 0?G.length:0,te=0;A.morphAttributes.position!==void 0&&(te=1),A.morphAttributes.normal!==void 0&&(te=2),A.morphAttributes.color!==void 0&&(te=3);let oe,$,ue,le;if(k){let _e=oi[k];oe=_e.vertexShader,$=_e.fragmentShader}else{oe=g.vertexShader,$=g.fragmentShader;let _e=o.getVertexShaderStage(g),at=o.getFragmentShaderStage(g);o.update(g,_e,at),ue=_e.id,le=at.id}let Ae=n.getRenderTarget(),ve=n.state.buffers.depth.getReversed(),Fe=E.isInstancedMesh===!0,Lt=E.isBatchedMesh===!0,Pe=!!g.map,rt=!!g.matcap,lt=!!B,qe=lt&&B.isPMREMTexture===!0,Yt=!!g.aoMap,Ft=!!g.lightMap,mn=!!g.bumpMap&&g.wireframe===!1,Mt=!!g.normalMap,Jn=!!g.displacementMap,kt=!!g.emissiveMap,In=!!g.metalnessMap,Pn=!!g.roughnessMap,Ln=g.anisotropy>0,W=g.clearcoat>0,Nn=g.diffuseRoughness>0,gt=g.dispersion>0,xt=g.retroreflectivity>0,xe=g.iridescence>0,Ot=g.sheen>0,Ie=g.transmission>0,ze=Ln&&!!g.anisotropyMap,F=W&&!!g.clearcoatMap,R=W&&!!g.clearcoatNormalMap,Y=W&&!!g.clearcoatRoughnessMap,se=Nn&&!!g.diffuseRoughnessMap,ie=xe&&!!g.iridescenceMap,ce=xe&&!!g.iridescenceThicknessMap,me=Ot&&!!g.sheenColorMap,Q=Ot&&!!g.sheenRoughnessMap,ee=!!g.specularMap,fe=!!g.specularColorMap,z=!!g.specularIntensityMap,ne=Ie&&!!g.transmissionMap,j=Ie&&!!g.thicknessMap,de=!!g.gradientMap,ae=!!g.alphaMap,he=g.alphaTest>0,Re=!!g.alphaHash,Ve=!!g.extensions,re=ri;g.toneMapped&&(Ae===null||Ae.isXRRenderTarget===!0)&&(re=n.toneMapping);let Ce=qe?B.isCompressedCubeTexture?B.image[0].mipmaps:B.mipmaps:null,He={shaderID:k,shaderType:g.type,shaderName:g.name,vertexShader:oe,fragmentShader:$,defines:g.defines,customVertexShaderID:ue,customFragmentShaderID:le,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:O,batching:Lt,batchingColor:Lt&&E._colorsTexture!==null,instancing:Fe,instancingColor:Fe&&E.instanceColor!==null,instancingMorph:Fe&&E.morphTexture!==null,outputColorSpace:Ae===null?n.outputColorSpace:Ae.isXRRenderTarget===!0?Ae.texture.colorSpace:$e.workingColorSpace,alphaToCoverage:!!g.alphaToCoverage,map:Pe,matcap:rt,envMap:lt,envMapMode:lt&&B.mapping,envMapPMREM:qe,envMapMaxLod:qe?Ce.length-1:null,envMapSize:qe?Ce[0].width:null,aoMap:Yt,lightMap:Ft,bumpMap:mn,normalMap:Mt,displacementMap:Jn,emissiveMap:kt,normalMapObjectSpace:Mt&&g.normalMapType===vf,normalMapTangentSpace:Mt&&g.normalMapType===ml,packedNormalMap:Mt&&g.normalMapType===ml&&k_(g.normalMap.format),metalnessMap:In,roughnessMap:Pn,anisotropy:Ln,anisotropyMap:ze,clearcoat:W,clearcoatMap:F,clearcoatNormalMap:R,clearcoatRoughnessMap:Y,diffuseRoughness:Nn,diffuseRoughnessMap:se,dispersion:gt,retroreflection:xt,iridescence:xe,iridescenceMap:ie,iridescenceThicknessMap:ce,sheen:Ot,sheenColorMap:me,sheenRoughnessMap:Q,specularMap:ee,specularColorMap:fe,specularIntensityMap:z,transmission:Ie,transmissionMap:ne,thicknessMap:j,gradientMap:de,opaque:g.transparent===!1&&g.blending===Qs&&g.alphaToCoverage===!1,alphaMap:ae,alphaTest:he,alphaHash:Re,combine:g.combine,mapUv:Pe&&m(g.map.channel),aoMapUv:Yt&&m(g.aoMap.channel),lightMapUv:Ft&&m(g.lightMap.channel),bumpMapUv:mn&&m(g.bumpMap.channel),normalMapUv:Mt&&m(g.normalMap.channel),displacementMapUv:Jn&&m(g.displacementMap.channel),emissiveMapUv:kt&&m(g.emissiveMap.channel),metalnessMapUv:In&&m(g.metalnessMap.channel),roughnessMapUv:Pn&&m(g.roughnessMap.channel),anisotropyMapUv:ze&&m(g.anisotropyMap.channel),clearcoatMapUv:F&&m(g.clearcoatMap.channel),clearcoatNormalMapUv:R&&m(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Y&&m(g.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:se&&m(g.diffuseRoughnessMap.channel),iridescenceMapUv:ie&&m(g.iridescenceMap.channel),iridescenceThicknessMapUv:ce&&m(g.iridescenceThicknessMap.channel),sheenColorMapUv:me&&m(g.sheenColorMap.channel),sheenRoughnessMapUv:Q&&m(g.sheenRoughnessMap.channel),specularMapUv:ee&&m(g.specularMap.channel),specularColorMapUv:fe&&m(g.specularColorMap.channel),specularIntensityMapUv:z&&m(g.specularIntensityMap.channel),transmissionMapUv:ne&&m(g.transmissionMap.channel),thicknessMapUv:j&&m(g.thicknessMap.channel),alphaMapUv:ae&&m(g.alphaMap.channel),vertexTangents:!!A.attributes.tangent&&(Mt||Ln),vertexNormals:!!A.attributes.normal,vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!A.attributes.color&&A.attributes.color.itemSize===4,pointsUvs:E.isPoints===!0&&!!A.attributes.uv&&(Pe||ae),fog:!!L,useFog:g.fog===!0,fogExp2:!!L&&L.isFogExp2,flatShading:g.wireframe===!1&&(g.flatShading===!0||A.attributes.normal===void 0&&Mt===!1&&(g.isMeshLambertMaterial||g.isMeshPhongMaterial||g.isMeshStandardMaterial||g.isMeshPhysicalMaterial)),sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:ve,skinning:E.isSkinnedMesh===!0,hasPositionAttribute:A.attributes.position!==void 0,morphTargets:A.morphAttributes.position!==void 0,morphNormals:A.morphAttributes.normal!==void 0,morphColors:A.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:te,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:w.filter(_e=>_e.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:g.dithering,shadowMapEnabled:n.shadowMap.enabled&&U.length>0,shadowMapType:n.shadowMap.type,toneMapping:re,decodeVideoTexture:Pe&&g.map.isVideoTexture===!0&&$e.getTransfer(g.map.colorSpace)===st,decodeVideoTextureEmissive:kt&&g.emissiveMap.isVideoTexture===!0&&$e.getTransfer(g.emissiveMap.colorSpace)===st,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===si,flipSided:g.side===Jt,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:Ve&&g.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ve&&g.extensions.multiDraw===!0||Lt)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return He.vertexUv1s=l.has(1),He.vertexUv2s=l.has(2),He.vertexUv3s=l.has(3),l.clear(),He}function y(g){let T=[];if(g.shaderID?T.push(g.shaderID):(T.push(g.customVertexShaderID),T.push(g.customFragmentShaderID)),g.defines!==void 0)for(let U in g.defines)T.push(U),T.push(g.defines[U]);return g.isRawShaderMaterial===!1&&(u(T,g),d(T,g),T.push(n.outputColorSpace)),T.push(g.customProgramCacheKey),T.join()}function u(g,T){g.push(T.precision),g.push(T.outputColorSpace),g.push(T.envMapMode),g.push(T.envMapPMREM),g.push(T.envMapMaxLod),g.push(T.envMapSize),g.push(T.mapUv),g.push(T.alphaMapUv),g.push(T.lightMapUv),g.push(T.aoMapUv),g.push(T.bumpMapUv),g.push(T.normalMapUv),g.push(T.displacementMapUv),g.push(T.emissiveMapUv),g.push(T.metalnessMapUv),g.push(T.roughnessMapUv),g.push(T.anisotropyMapUv),g.push(T.clearcoatMapUv),g.push(T.clearcoatNormalMapUv),g.push(T.clearcoatRoughnessMapUv),g.push(T.diffuseRoughnessMapUv),g.push(T.iridescenceMapUv),g.push(T.iridescenceThicknessMapUv),g.push(T.sheenColorMapUv),g.push(T.sheenRoughnessMapUv),g.push(T.specularMapUv),g.push(T.specularColorMapUv),g.push(T.specularIntensityMapUv),g.push(T.transmissionMapUv),g.push(T.thicknessMapUv),g.push(T.combine),g.push(T.fogExp2),g.push(T.sizeAttenuation),g.push(T.morphTargetsCount),g.push(T.numSunLights),g.push(T.numDirLights),g.push(T.numPointLights),g.push(T.numSpotLights),g.push(T.numSpotLightMaps),g.push(T.numHemiLights),g.push(T.numRectAreaLights),g.push(T.numSunLightShadows),g.push(T.numDirLightShadows),g.push(T.numPointLightShadows),g.push(T.numSpotLightShadows),g.push(T.numSpotLightShadowsWithMaps),g.push(T.numLightProbes),g.push(T.numLightProbeGrids),g.push(T.shadowMapType),g.push(T.toneMapping),g.push(T.numClippingPlanes),g.push(T.numClipIntersection),g.push(T.depthPacking)}function d(g,T){a.disableAll(),T.instancing&&a.enable(0),T.instancingColor&&a.enable(1),T.instancingMorph&&a.enable(2),T.matcap&&a.enable(3),T.envMap&&a.enable(4),T.normalMapObjectSpace&&a.enable(5),T.normalMapTangentSpace&&a.enable(6),T.clearcoat&&a.enable(7),T.iridescence&&a.enable(8),T.alphaTest&&a.enable(9),T.vertexColors&&a.enable(10),T.vertexAlphas&&a.enable(11),T.vertexUv1s&&a.enable(12),T.vertexUv2s&&a.enable(13),T.vertexUv3s&&a.enable(14),T.vertexTangents&&a.enable(15),T.anisotropy&&a.enable(16),T.alphaHash&&a.enable(17),T.batching&&a.enable(18),T.dispersion&&a.enable(19),T.retroreflection&&a.enable(24),T.diffuseRoughness&&a.enable(25),T.batchingColor&&a.enable(20),T.gradientMap&&a.enable(21),T.packedNormalMap&&a.enable(22),T.vertexNormals&&a.enable(23),g.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),T.numLightProbeGrids>0&&a.enable(22),T.hasPositionAttribute&&a.enable(23),g.push(a.mask)}function M(g){let T=f[g.type],U;if(T){let v=oi[T];U=Ff.clone(v.uniforms)}else U=g.uniforms;return U}function C(g,T){let U=h.get(T);return U!==void 0?++U.usedTimes:(U=new B_(n,T,g,s),c.push(U),h.set(T,U)),U}function b(g){if(--g.usedTimes===0){let T=c.indexOf(g);c[T]=c[c.length-1],c.pop(),h.delete(g.cacheKey),g.destroy()}}function _(g){o.remove(g)}function S(){o.dispose()}return{getParameters:x,getProgramCacheKey:y,getUniforms:M,acquireProgram:C,releaseProgram:b,releaseShaderCache:_,programs:c,dispose:S}}function V_(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,l){n.get(a)[o]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function G_(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function nd(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function id(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function a(f){let m=0;return f.isInstancedMesh&&(m+=2),f.isSkinnedMesh&&(m+=1),m}function o(f,m,x,y,u,d){let M=n[e];return M===void 0?(M={id:f.id,object:f,geometry:m,material:x,materialVariant:a(f),groupOrder:y,renderOrder:f.renderOrder,z:u,group:d},n[e]=M):(M.id=f.id,M.object=f,M.geometry=m,M.material=x,M.materialVariant=a(f),M.groupOrder=y,M.renderOrder=f.renderOrder,M.z=u,M.group=d),e++,M}function l(f,m,x,y,u,d,M){M.reversedDepth===!0&&(u=-u);let C=o(f,m,x,y,u,d);x.transmission>0?i.push(C):x.transparent===!0?s.push(C):t.push(C)}function c(f,m,x,y,u,d){let M=o(f,m,x,y,u,d);x.transmission>0?i.unshift(M):x.transparent===!0?s.unshift(M):t.unshift(M)}function h(f,m){t.length>1&&t.sort(f||G_),i.length>1&&i.sort(m||nd),s.length>1&&s.sort(m||nd)}function p(){for(let f=e,m=n.length;f<m;f++){let x=n[f];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:p,sort:h}}function W_(){let n=new WeakMap;function e(i,s){let r=n.get(i),a;return r===void 0?(a=new id,n.set(i,[a])):s>=r.length?(a=new id,r.push(a)):a=r[s],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function X_(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new X,color:new De};break;case"SpotLight":t={position:new X,direction:new X,color:new De,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new X,color:new De,distance:0,decay:0};break;case"HemisphereLight":t={direction:new X,skyColor:new De,groundColor:new De};break;case"RectAreaLight":t={color:new De,position:new X,halfWidth:new X,halfHeight:new X};break}return n[e.id]=t,t}}}function q_(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var Y_=0;function Z_(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function $_(n){let e=new X_,t=q_(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new X);let s=new X,r=new ot,a=new ot;function o(c){let h=0,p=0,f=0;for(let w=0;w<9;w++)i.probe[w].set(0,0,0);let m=0,x=0,y=0,u=0,d=0,M=0,C=0,b=0,_=0,S=0,g=0,T=0,U=0,v=0;c.sort(Z_);for(let w=0,L=c.length;w<L;w++){let A=c[w],P=A.color,D=A.intensity,B=A.distance,k=null;if(A.shadow&&A.shadow.map&&(A.shadow.map.texture.format===Xi?k=A.shadow.map.texture:k=A.shadow.map.depthTexture||A.shadow.map.texture),A.isAmbientLight)h+=P.r*D,p+=P.g*D,f+=P.b*D;else if(A.isLightProbe){for(let O=0;O<9;O++)i.probe[O].addScaledVector(A.sh.coefficients[O],D);v++}else if(A.isSunLight){let O=e.get(A);if(O.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){let G=A.shadow,J=t.get(A);J.shadowIntensity=G.intensity,J.shadowBias=G.bias,J.shadowNormalBias=G.normalBias,J.shadowRadius=G.radius,J.shadowMapSize.copy(G.mapSize).multiply(G.getFrameExtents()),i.sunShadow[x]=J,i.sunShadowMap[x]=k;let te=G.getViewportCount();for(let oe=0;oe<te;oe++)i.sunShadowMatrix[y+oe]=G.getMatrix(oe),i.sunShadowCascade[y+oe]=G._cascadeData[oe];y+=te,x++}i.sun[m]=O,m++}else if(A.isDirectionalLight){let O=e.get(A);if(O.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){let G=A.shadow,J=t.get(A);J.shadowIntensity=G.intensity,J.shadowBias=G.bias,J.shadowNormalBias=G.normalBias,J.shadowRadius=G.radius,J.shadowMapSize=G.mapSize,i.directionalShadow[u]=J,i.directionalShadowMap[u]=k,i.directionalShadowMatrix[u]=A.shadow.matrix,_++}i.directional[u]=O,u++}else if(A.isSpotLight){let O=e.get(A);O.position.setFromMatrixPosition(A.matrixWorld),O.color.copy(P).multiplyScalar(D),O.distance=B,O.coneCos=Math.cos(A.angle),O.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),O.decay=A.decay,i.spot[M]=O;let G=A.shadow;if(A.map&&(i.spotLightMap[T]=A.map,T++,G.updateMatrices(A),A.castShadow&&U++),i.spotLightMatrix[M]=G.matrix,A.castShadow){let J=t.get(A);J.shadowIntensity=G.intensity,J.shadowBias=G.bias,J.shadowNormalBias=G.normalBias,J.shadowRadius=G.radius,J.shadowMapSize=G.mapSize,i.spotShadow[M]=J,i.spotShadowMap[M]=k,g++}M++}else if(A.isRectAreaLight){let O=e.get(A);O.color.copy(P).multiplyScalar(D),O.halfWidth.set(A.width*.5,0,0),O.halfHeight.set(0,A.height*.5,0),i.rectArea[C]=O,C++}else if(A.isPointLight){let O=e.get(A);if(O.color.copy(A.color).multiplyScalar(A.intensity),O.distance=A.distance,O.decay=A.decay,A.castShadow){let G=A.shadow,J=t.get(A);J.shadowIntensity=G.intensity,J.shadowBias=G.bias,J.shadowNormalBias=G.normalBias,J.shadowRadius=G.radius,J.shadowMapSize=G.mapSize,J.shadowCameraNear=G.camera.near,J.shadowCameraFar=G.camera.far,i.pointShadow[d]=J,i.pointShadowMap[d]=k,i.pointShadowMatrix[d]=A.shadow.matrix,S++}i.point[d]=O,d++}else if(A.isHemisphereLight){let O=e.get(A);O.skyColor.copy(A.color).multiplyScalar(D),O.groundColor.copy(A.groundColor).multiplyScalar(D),i.hemi[b]=O,b++}}C>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ye.LTC_FLOAT_1,i.rectAreaLTC2=ye.LTC_FLOAT_2):(i.rectAreaLTC1=ye.LTC_HALF_1,i.rectAreaLTC2=ye.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=p,i.ambient[2]=f;let E=i.hash;(E.sunLength!==m||E.directionalLength!==u||E.pointLength!==d||E.spotLength!==M||E.rectAreaLength!==C||E.hemiLength!==b||E.numSunShadows!==x||E.numDirectionalShadows!==_||E.numPointShadows!==S||E.numSpotShadows!==g||E.numSpotMaps!==T||E.numLightProbes!==v)&&(i.sun.length=m,i.directional.length=u,i.spot.length=M,i.rectArea.length=C,i.point.length=d,i.hemi.length=b,i.sunShadow.length=x,i.sunShadowMap.length=x,i.sunShadowMatrix.length=y,i.sunShadowCascade.length=y,i.directionalShadow.length=_,i.directionalShadowMap.length=_,i.directionalShadowMatrix.length=_,i.pointShadow.length=S,i.pointShadowMap.length=S,i.pointShadowMatrix.length=S,i.spotShadow.length=g,i.spotShadowMap.length=g,i.spotLightMatrix.length=g+T-U,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=U,i.numLightProbes=v,E.sunLength=m,E.directionalLength=u,E.pointLength=d,E.spotLength=M,E.rectAreaLength=C,E.hemiLength=b,E.numSunShadows=x,E.numDirectionalShadows=_,E.numPointShadows=S,E.numSpotShadows=g,E.numSpotMaps=T,E.numLightProbes=v,i.version=Y_++)}function l(c,h){let p=0,f=0,m=0,x=0,y=0,u=0,d=h.matrixWorldInverse;for(let M=0,C=c.length;M<C;M++){let b=c[M];if(b.isSunLight){let _=i.sun[p];_.direction.setFromMatrixPosition(b.matrixWorld),_.direction.transformDirection(d),p++}else if(b.isDirectionalLight){let _=i.directional[f];_.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(d),f++}else if(b.isSpotLight){let _=i.spot[x];_.position.setFromMatrixPosition(b.matrixWorld),_.position.applyMatrix4(d),_.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(d),x++}else if(b.isRectAreaLight){let _=i.rectArea[y];_.position.setFromMatrixPosition(b.matrixWorld),_.position.applyMatrix4(d),a.identity(),r.copy(b.matrixWorld),r.premultiply(d),a.extractRotation(r),_.halfWidth.set(b.width*.5,0,0),_.halfHeight.set(0,b.height*.5,0),_.halfWidth.applyMatrix4(a),_.halfHeight.applyMatrix4(a),y++}else if(b.isPointLight){let _=i.point[m];_.position.setFromMatrixPosition(b.matrixWorld),_.position.applyMatrix4(d),m++}else if(b.isHemisphereLight){let _=i.hemi[u];_.direction.setFromMatrixPosition(b.matrixWorld),_.direction.transformDirection(d),u++}}}return{setup:o,setupView:l,state:i}}function sd(n){let e=new $_(n),t=[],i=[],s=[];function r(p){h.camera=p,t.length=0,i.length=0,s.length=0}function a(p){p.isLightProbeGrid?s.push(p):t.push(p)}function o(p){i.push(p)}function l(){e.setup(t),s.sort((p,f)=>p.priority-f.priority||p.id-f.id)}function c(p){e.setupView(t,p)}let h={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function J_(n){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new sd(n),e.set(s,[o])):r>=a.length?(o=new sd(n),a.push(o)):o=a[r],o}function i(){e=new WeakMap}return{get:t,dispose:i}}var K_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,j_=`uniform sampler2D shadow_pass;
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
}`,Q_=[new X(1,0,0),new X(-1,0,0),new X(0,1,0),new X(0,-1,0),new X(0,0,1),new X(0,0,-1)],ey=[new X(0,-1,0),new X(0,-1,0),new X(0,0,1),new X(0,0,-1),new X(0,-1,0),new X(0,-1,0)],rd=new ot,Qr=new X,sh=new X;function ty(n,e,t){let i=new zi,s=new Oe,r=new Oe,a=new _t,o=new mo,l=new go,c={},h=t.maxTextureSize,p={[Wi]:Jt,[Jt]:Wi,[si]:si},f=new On({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Oe},radius:{value:4}},vertexShader:K_,fragmentShader:j_}),m=f.clone();m.defines.HORIZONTAL_PASS=1;let x=new rn;x.setAttribute("position",new sn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new je(x,f),u=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Xr;let d=this.type;this.render=function(S,g,T){if(u.enabled===!1||u.autoUpdate===!1&&u.needsUpdate===!1||S.length===0)return;this.type===Ju&&(Le("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Xr);let U=n.getRenderTarget(),v=n.getActiveCubeFace(),E=n.getActiveMipmapLevel(),w=n.state;w.setBlending(hs),w.buffers.depth.getReversed()===!0?w.buffers.color.setClear(0,0,0,0):w.buffers.color.setClear(1,1,1,1),w.buffers.depth.setTest(!0),w.setScissorTest(!1);let L=d!==this.type;L&&g.traverse(function(A){A.material&&(Array.isArray(A.material)?A.material.forEach(P=>P.needsUpdate=!0):A.material.needsUpdate=!0)});for(let A=0,P=S.length;A<P;A++){let D=S[A],B=D.shadow;if(B===void 0){Le("WebGLShadowMap:",D,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;s.copy(B.mapSize);let k=B.getFrameExtents();s.multiply(k),r.copy(B.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/k.x),s.x=r.x*k.x,B.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/k.y),s.y=r.y*k.y,B.mapSize.y=r.y));let O=n.state.buffers.depth.getReversed();if(B.camera._reversedDepth=O,B.map===null||L===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===js){if(D.isPointLight){Le("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new En(s.x,s.y,{format:Xi,type:Zn,minFilter:hn,magFilter:hn,generateMipmaps:!1}),B.map.texture.name=D.name+".shadowMap",B.map.depthTexture=new vi(s.x,s.y,Bn),B.map.depthTexture.name=D.name+".shadowMapDepth",B.map.depthTexture.format=_i,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Xt,B.map.depthTexture.magFilter=Xt}else D.isPointLight?(B.map=new ta(s.x),B.map.depthTexture=new Br(s.x,Yn)):(B.map=new En(s.x,s.y),B.map.depthTexture=new vi(s.x,s.y,Yn)),B.map.depthTexture.name=D.name+".shadowMap",B.map.depthTexture.format=_i,this.type===Xr?(B.map.depthTexture.compareFunction=O?$c:Zc,B.map.depthTexture.minFilter=hn,B.map.depthTexture.magFilter=hn):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Xt,B.map.depthTexture.magFilter=Xt);B.camera.updateProjectionMatrix()}B.map.isWebGLCubeRenderTarget!==!0&&(B.map.width!==s.x||B.map.height!==s.y)&&B.map.setSize(s.x,s.y);let G=B.map.isWebGLCubeRenderTarget?6:B.getViewportCount();D.isPointLight!==!0&&B.updateMatrices(D,T);let J=(B.camera.layers.mask&4294967294)!==0?B.camera.layers:T.layers;for(let te=0;te<G;te++){let oe=B.getCamera(te);if(D.isPointLight){let $=B.camera,ue=B.matrix,le=D.distance||$.far;le!==$.far&&($.far=le,$.updateProjectionMatrix()),Qr.setFromMatrixPosition(D.matrixWorld),$.position.copy(Qr),sh.copy($.position),sh.add(Q_[te]),$.up.copy(ey[te]),$.lookAt(sh),$.updateMatrixWorld(),ue.makeTranslation(-Qr.x,-Qr.y,-Qr.z),rd.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),B._frustum.setFromProjectionMatrix(rd,$.coordinateSystem,$.reversedDepth)}if(B.map.isWebGLCubeRenderTarget)n.setRenderTarget(B.map,te),n.clear();else{te===0&&(n.setRenderTarget(B.map),n.clear());let $=B.getViewport(te);a.set(r.x*$.x,r.y*$.y,r.x*$.z,r.y*$.w),w.viewport(a)}i=B.getFrustum(te),b(g,T,oe,D,J,this.type)}B.isPointLightShadow!==!0&&this.type===js&&M(B,T),B.needsUpdate=!1}d=this.type,u.needsUpdate=!1,n.setRenderTarget(U,v,E)};function M(S,g){let T=e.update(y);f.defines.VSM_SAMPLES!==S.blurSamples&&(f.defines.VSM_SAMPLES=S.blurSamples,m.defines.VSM_SAMPLES=S.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),S.mapPass===null?S.mapPass=new En(s.x,s.y,{format:Xi,type:Zn}):(S.mapPass.width!==S.map.width||S.mapPass.height!==S.map.height)&&S.mapPass.setSize(S.map.width,S.map.height),f.uniforms.shadow_pass.value=S.map.depthTexture,f.uniforms.resolution.value.set(S.map.width,S.map.height),f.uniforms.radius.value=S.radius,n.setRenderTarget(S.mapPass),n.clear(),n.renderBufferDirect(g,null,T,f,y,null),m.uniforms.shadow_pass.value=S.mapPass.texture,m.uniforms.resolution.value.set(S.map.width,S.map.height),m.uniforms.radius.value=S.radius,n.setRenderTarget(S.map),n.clear(),n.renderBufferDirect(g,null,T,m,y,null)}function C(S,g,T,U){let v=null,E=T.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(E!==void 0)v=E;else if(v=T.isPointLight===!0?l:o,n.localClippingEnabled&&g.clipShadows===!0&&Array.isArray(g.clippingPlanes)&&g.clippingPlanes.length!==0||g.displacementMap&&g.displacementScale!==0||g.alphaMap&&g.alphaTest>0||g.map&&g.alphaTest>0||g.alphaToCoverage===!0){let w=v.uuid,L=g.uuid,A=c[w];A===void 0&&(A={},c[w]=A);let P=A[L];P===void 0&&(P=v.clone(),A[L]=P,g.addEventListener("dispose",_)),v=P}if(v.visible=g.visible,v.wireframe=g.wireframe,U===js?v.side=g.shadowSide!==null?g.shadowSide:g.side:v.side=g.shadowSide!==null?g.shadowSide:p[g.side],v.alphaMap=g.alphaMap,v.alphaTest=g.alphaToCoverage===!0?.5:g.alphaTest,v.map=g.map,v.clipShadows=g.clipShadows,v.clippingPlanes=g.clippingPlanes,v.clipIntersection=g.clipIntersection,v.displacementMap=g.displacementMap,v.displacementScale=g.displacementScale,v.displacementBias=g.displacementBias,v.wireframeLinewidth=g.wireframeLinewidth,v.linewidth=g.linewidth,T.isPointLight===!0&&v.isMeshDistanceMaterial===!0){let w=n.properties.get(v);w.light=T}return v}function b(S,g,T,U,v,E){if(S.visible===!1)return;if(S.layers.test(v)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&E===js)&&(!S.frustumCulled||S.intersectsFrustum(i))){S.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,S.matrixWorld);let A=e.update(S),P=S.material;if(Array.isArray(P)){let D=A.groups;for(let B=0,k=D.length;B<k;B++){let O=D[B],G=P[O.materialIndex];if(G&&G.visible){let J=C(S,G,U,E);S.onBeforeShadow(n,S,g,T,A,J,O),n.renderBufferDirect(T,null,A,J,S,O),S.onAfterShadow(n,S,g,T,A,J,O)}}}else if(P.visible){let D=C(S,P,U,E);S.onBeforeShadow(n,S,g,T,A,D,null),n.renderBufferDirect(T,null,A,D,S,null),S.onAfterShadow(n,S,g,T,A,D,null)}}let L=S.children;for(let A=0,P=L.length;A<P;A++)b(L[A],g,T,U,v,E)}function _(S){S.target.removeEventListener("dispose",_);for(let T in c){let U=c[T],v=S.target.uuid;v in U&&(U[v].dispose(),delete U[v])}}}function ny(n,e){function t(){let z=!1,ne=new _t,j=null,de=new _t(0,0,0,0);return{setMask:function(ae){j!==ae&&!z&&(n.colorMask(ae,ae,ae,ae),j=ae)},setLocked:function(ae){z=ae},setClear:function(ae,he,Re,Ve,re){re===!0&&(ae*=Ve,he*=Ve,Re*=Ve),ne.set(ae,he,Re,Ve),de.equals(ne)===!1&&(n.clearColor(ae,he,Re,Ve),de.copy(ne))},reset:function(){z=!1,j=null,de.set(-1,0,0,0)}}}function i(){let z=!1,ne=!1,j=null,de=null,ae=null;return{setReversed:function(he){if(ne!==he){let Re=e.get("EXT_clip_control");he?Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.ZERO_TO_ONE_EXT):Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.NEGATIVE_ONE_TO_ONE_EXT),ne=he;let Ve=ae;ae=null,this.setClear(Ve)}},getReversed:function(){return ne},setTest:function(he){he?ve(n.DEPTH_TEST):Fe(n.DEPTH_TEST)},setMask:function(he){j!==he&&!z&&(n.depthMask(he),j=he)},setFunc:function(he){if(ne&&(he=If[he]),de!==he){switch(he){case Ja:n.depthFunc(n.NEVER);break;case Ka:n.depthFunc(n.ALWAYS);break;case ja:n.depthFunc(n.LESS);break;case Vs:n.depthFunc(n.LEQUAL);break;case Qa:n.depthFunc(n.EQUAL);break;case eo:n.depthFunc(n.GEQUAL);break;case to:n.depthFunc(n.GREATER);break;case no:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}de=he}},setLocked:function(he){z=he},setClear:function(he){ae!==he&&(ae=he,ne&&(he=1-he),n.clearDepth(he))},reset:function(){z=!1,j=null,de=null,ae=null,ne=!1}}}function s(){let z=!1,ne=null,j=null,de=null,ae=null,he=null,Re=null,Ve=null,re=null;return{setTest:function(Ce){z||(Ce?ve(n.STENCIL_TEST):Fe(n.STENCIL_TEST))},setMask:function(Ce){ne!==Ce&&!z&&(n.stencilMask(Ce),ne=Ce)},setFunc:function(Ce,He,_e){(j!==Ce||de!==He||ae!==_e)&&(n.stencilFunc(Ce,He,_e),j=Ce,de=He,ae=_e)},setOp:function(Ce,He,_e){(he!==Ce||Re!==He||Ve!==_e)&&(n.stencilOp(Ce,He,_e),he=Ce,Re=He,Ve=_e)},setLocked:function(Ce){z=Ce},setClear:function(Ce){re!==Ce&&(n.clearStencil(Ce),re=Ce)},reset:function(){z=!1,ne=null,j=null,de=null,ae=null,he=null,Re=null,Ve=null,re=null}}}let r=new t,a=new i,o=new s,l={},c=new WeakMap,h={},p={},f={},m=new WeakMap,x=[],y=null,u=!1,d=null,M=null,C=null,b=null,_=null,S=null,g=null,T=new De(0,0,0),U=0,v=!1,E=null,w=null,L=null,A=null,P=null,D=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),B=!1,k=0,O=n.getParameter(n.VERSION);O.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(O)[1]),B=k>=1):O.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),B=k>=2);let G=null,J={},te=n.getParameter(n.SCISSOR_BOX),oe=n.getParameter(n.VIEWPORT),$=new _t().fromArray(te),ue=new _t().fromArray(oe);function le(z,ne,j,de){let ae=new Uint8Array(4),he=n.createTexture();n.bindTexture(z,he),n.texParameteri(z,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(z,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Re=0;Re<j;Re++)z===n.TEXTURE_3D||z===n.TEXTURE_2D_ARRAY?n.texImage3D(ne,0,n.RGBA,1,1,de,0,n.RGBA,n.UNSIGNED_BYTE,ae):n.texImage2D(ne+Re,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ae);return he}let Ae={};Ae[n.TEXTURE_2D]=le(n.TEXTURE_2D,n.TEXTURE_2D,1),Ae[n.TEXTURE_CUBE_MAP]=le(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ae[n.TEXTURE_2D_ARRAY]=le(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Ae[n.TEXTURE_3D]=le(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ve(n.DEPTH_TEST),a.setFunc(Vs),mn(!1),Mt(Rc),ve(n.CULL_FACE),Yt(hs);function ve(z){h[z]!==!0&&(n.enable(z),h[z]=!0)}function Fe(z){h[z]!==!1&&(n.disable(z),h[z]=!1)}function Lt(z,ne){return f[z]!==ne?(n.bindFramebuffer(z,ne),f[z]=ne,z===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=ne),z===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=ne),!0):!1}function Pe(z,ne){let j=x,de=!1;if(z){j=m.get(ne),j===void 0&&(j=[],m.set(ne,j));let ae=z.textures;if(j.length!==ae.length||j[0]!==n.COLOR_ATTACHMENT0){for(let he=0,Re=ae.length;he<Re;he++)j[he]=n.COLOR_ATTACHMENT0+he;j.length=ae.length,de=!0}}else j[0]!==n.BACK&&(j[0]=n.BACK,de=!0);de&&n.drawBuffers(j)}function rt(z){return y!==z?(n.useProgram(z),y=z,!0):!1}let lt={[us]:n.FUNC_ADD,[ju]:n.FUNC_SUBTRACT,[Qu]:n.FUNC_REVERSE_SUBTRACT};lt[ef]=n.MIN,lt[tf]=n.MAX;let qe={[nf]:n.ZERO,[sf]:n.ONE,[rf]:n.SRC_COLOR,[Lc]:n.SRC_ALPHA,[uf]:n.SRC_ALPHA_SATURATE,[cf]:n.DST_COLOR,[of]:n.DST_ALPHA,[af]:n.ONE_MINUS_SRC_COLOR,[Nc]:n.ONE_MINUS_SRC_ALPHA,[hf]:n.ONE_MINUS_DST_COLOR,[lf]:n.ONE_MINUS_DST_ALPHA,[ff]:n.CONSTANT_COLOR,[df]:n.ONE_MINUS_CONSTANT_COLOR,[pf]:n.CONSTANT_ALPHA,[mf]:n.ONE_MINUS_CONSTANT_ALPHA};function Yt(z,ne,j,de,ae,he,Re,Ve,re,Ce){if(z===hs){u===!0&&(Fe(n.BLEND),u=!1);return}if(u===!1&&(ve(n.BLEND),u=!0),z!==Ku){if(z!==d||Ce!==v){if((M!==us||_!==us)&&(n.blendEquation(n.FUNC_ADD),M=us,_=us),Ce)switch(z){case Qs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Cc:n.blendFunc(n.ONE,n.ONE);break;case Ic:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Pc:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Ne("WebGLState: Invalid blending: ",z);break}else switch(z){case Qs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Cc:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Ic:Ne("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Pc:Ne("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ne("WebGLState: Invalid blending: ",z);break}C=null,b=null,S=null,g=null,T.set(0,0,0),U=0,d=z,v=Ce}return}ae=ae||ne,he=he||j,Re=Re||de,(ne!==M||ae!==_)&&(n.blendEquationSeparate(lt[ne],lt[ae]),M=ne,_=ae),(j!==C||de!==b||he!==S||Re!==g)&&(n.blendFuncSeparate(qe[j],qe[de],qe[he],qe[Re]),C=j,b=de,S=he,g=Re),(Ve.equals(T)===!1||re!==U)&&(n.blendColor(Ve.r,Ve.g,Ve.b,re),T.copy(Ve),U=re),d=z,v=!1}function Ft(z,ne){z.side===si?Fe(n.CULL_FACE):ve(n.CULL_FACE);let j=z.side===Jt;ne&&(j=!j),mn(j),z.blending===Qs&&z.transparent===!1?Yt(hs):Yt(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),a.setFunc(z.depthFunc),a.setTest(z.depthTest),a.setMask(z.depthWrite),r.setMask(z.colorWrite);let de=z.stencilWrite;o.setTest(de),de&&(o.setMask(z.stencilWriteMask),o.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),o.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),kt(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?ve(n.SAMPLE_ALPHA_TO_COVERAGE):Fe(n.SAMPLE_ALPHA_TO_COVERAGE)}function mn(z){E!==z&&(z?n.frontFace(n.CW):n.frontFace(n.CCW),E=z)}function Mt(z){z!==Zu?(ve(n.CULL_FACE),z!==w&&(z===Rc?n.cullFace(n.BACK):z===$u?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Fe(n.CULL_FACE),w=z}function Jn(z){z!==L&&(B&&n.lineWidth(z),L=z)}function kt(z,ne,j){z?(ve(n.POLYGON_OFFSET_FILL),(A!==ne||P!==j)&&(A=ne,P=j,a.getReversed()&&(ne=-ne,j=-j),n.polygonOffset(ne,j))):Fe(n.POLYGON_OFFSET_FILL)}function In(z){z?ve(n.SCISSOR_TEST):Fe(n.SCISSOR_TEST)}function Pn(z){z===void 0&&(z=n.TEXTURE0+D-1),G!==z&&(n.activeTexture(z),G=z)}function Ln(z,ne,j){j===void 0&&(G===null?j=n.TEXTURE0+D-1:j=G);let de=J[j];de===void 0&&(de={type:void 0,texture:void 0},J[j]=de),(de.type!==z||de.texture!==ne)&&(G!==j&&(n.activeTexture(j),G=j),n.bindTexture(z,ne||Ae[z]),de.type=z,de.texture=ne)}function W(){let z=J[G];z!==void 0&&z.type!==void 0&&(n.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function Nn(){try{n.compressedTexImage2D(...arguments)}catch(z){Ne("WebGLState:",z)}}function gt(){try{n.compressedTexImage3D(...arguments)}catch(z){Ne("WebGLState:",z)}}function xt(){try{n.texSubImage2D(...arguments)}catch(z){Ne("WebGLState:",z)}}function xe(){try{n.texSubImage3D(...arguments)}catch(z){Ne("WebGLState:",z)}}function Ot(){try{n.compressedTexSubImage2D(...arguments)}catch(z){Ne("WebGLState:",z)}}function Ie(){try{n.compressedTexSubImage3D(...arguments)}catch(z){Ne("WebGLState:",z)}}function ze(){try{n.texStorage2D(...arguments)}catch(z){Ne("WebGLState:",z)}}function F(){try{n.texStorage3D(...arguments)}catch(z){Ne("WebGLState:",z)}}function R(){try{n.texImage2D(...arguments)}catch(z){Ne("WebGLState:",z)}}function Y(){try{n.texImage3D(...arguments)}catch(z){Ne("WebGLState:",z)}}function se(z){return p[z]!==void 0?p[z]:n.getParameter(z)}function ie(z,ne){p[z]!==ne&&(n.pixelStorei(z,ne),p[z]=ne)}function ce(z){$.equals(z)===!1&&(n.scissor(z.x,z.y,z.z,z.w),$.copy(z))}function me(z){ue.equals(z)===!1&&(n.viewport(z.x,z.y,z.z,z.w),ue.copy(z))}function Q(z,ne){let j=c.get(ne);j===void 0&&(j=new WeakMap,c.set(ne,j));let de=j.get(z);de===void 0&&(de=n.getUniformBlockIndex(ne,z.name),n.uniformBlockBinding(ne,de,de),j.set(z,de))}function ee(z,ne,j){let ae=c.get(ne).get(z);l[ae]!==j&&(n.bindBufferBase(n.UNIFORM_BUFFER,ae,j),l[ae]=j)}function fe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),h={},p={},G=null,J={},f={},l={},m=new WeakMap,x=[],y=null,u=!1,d=null,M=null,C=null,b=null,_=null,S=null,g=null,T=new De(0,0,0),U=0,v=!1,E=null,w=null,L=null,A=null,P=null,$.set(0,0,n.canvas.width,n.canvas.height),ue.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ve,disable:Fe,bindFramebuffer:Lt,drawBuffers:Pe,useProgram:rt,setBlending:Yt,setMaterial:Ft,setFlipSided:mn,setCullFace:Mt,setLineWidth:Jn,setPolygonOffset:kt,setScissorTest:In,activeTexture:Pn,bindTexture:Ln,unbindTexture:W,compressedTexImage2D:Nn,compressedTexImage3D:gt,texImage2D:R,texImage3D:Y,pixelStorei:ie,getParameter:se,updateUBOMapping:Q,uniformBlockBinding:ee,texStorage2D:ze,texStorage3D:F,texSubImage2D:xt,texSubImage3D:xe,compressedTexSubImage2D:Ot,compressedTexSubImage3D:Ie,scissor:ce,viewport:me,reset:fe}}function iy(n,e,t,i,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Oe,h=new WeakMap,p=new Set,f,m=new WeakMap,x=new Set,y=new FinalizationRegistry(F=>x.delete(F)),u=!1;try{u=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function d(F,R){return u?new OffscreenCanvas(F,R):Er("canvas")}function M(F,R,Y){let se=1,ie=ze(F);if((ie.width>Y||ie.height>Y)&&(se=Y/Math.max(ie.width,ie.height)),se<1)if(typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&F instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&F instanceof ImageBitmap||typeof VideoFrame<"u"&&F instanceof VideoFrame){let ce=Math.floor(se*ie.width),me=Math.floor(se*ie.height);f===void 0&&(f=d(ce,me));let Q=R?d(ce,me):f;return Q.width=ce,Q.height=me,Q.getContext("2d").drawImage(F,0,0,ce,me),Le("WebGLRenderer: Texture has been resized from ("+ie.width+"x"+ie.height+") to ("+ce+"x"+me+")."),Q}else return"data"in F&&Le("WebGLRenderer: Image in DataTexture is too big ("+ie.width+"x"+ie.height+")."),F;return F}function C(F){return F.generateMipmaps}function b(F){n.generateMipmap(F)}function _(F){return F.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:F.isWebGL3DRenderTarget?n.TEXTURE_3D:F.isWebGLArrayRenderTarget||F.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function S(F,R,Y,se,ie,ce=!1){if(F!==null){if(n[F]!==void 0)return n[F];Le("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+F+"'")}let me;se&&(me=e.get("EXT_texture_norm16"),me||Le("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Q=R;if(R===n.RED&&(Y===n.FLOAT&&(Q=n.R32F),Y===n.HALF_FLOAT&&(Q=n.R16F),Y===n.UNSIGNED_BYTE&&(Q=n.R8),Y===n.UNSIGNED_SHORT&&me&&(Q=me.R16_EXT),Y===n.SHORT&&me&&(Q=me.R16_SNORM_EXT)),R===n.RED_INTEGER&&(Y===n.UNSIGNED_BYTE&&(Q=n.R8UI),Y===n.UNSIGNED_SHORT&&(Q=n.R16UI),Y===n.UNSIGNED_INT&&(Q=n.R32UI),Y===n.BYTE&&(Q=n.R8I),Y===n.SHORT&&(Q=n.R16I),Y===n.INT&&(Q=n.R32I)),R===n.RG&&(Y===n.FLOAT&&(Q=n.RG32F),Y===n.HALF_FLOAT&&(Q=n.RG16F),Y===n.UNSIGNED_BYTE&&(Q=n.RG8),Y===n.UNSIGNED_SHORT&&me&&(Q=me.RG16_EXT),Y===n.SHORT&&me&&(Q=me.RG16_SNORM_EXT)),R===n.RG_INTEGER&&(Y===n.UNSIGNED_BYTE&&(Q=n.RG8UI),Y===n.UNSIGNED_SHORT&&(Q=n.RG16UI),Y===n.UNSIGNED_INT&&(Q=n.RG32UI),Y===n.BYTE&&(Q=n.RG8I),Y===n.SHORT&&(Q=n.RG16I),Y===n.INT&&(Q=n.RG32I)),R===n.RGB_INTEGER&&(Y===n.UNSIGNED_BYTE&&(Q=n.RGB8UI),Y===n.UNSIGNED_SHORT&&(Q=n.RGB16UI),Y===n.UNSIGNED_INT&&(Q=n.RGB32UI),Y===n.BYTE&&(Q=n.RGB8I),Y===n.SHORT&&(Q=n.RGB16I),Y===n.INT&&(Q=n.RGB32I)),R===n.RGBA_INTEGER&&(Y===n.UNSIGNED_BYTE&&(Q=n.RGBA8UI),Y===n.UNSIGNED_SHORT&&(Q=n.RGBA16UI),Y===n.UNSIGNED_INT&&(Q=n.RGBA32UI),Y===n.BYTE&&(Q=n.RGBA8I),Y===n.SHORT&&(Q=n.RGBA16I),Y===n.INT&&(Q=n.RGBA32I)),R===n.RGB&&(Y===n.UNSIGNED_SHORT&&me&&(Q=me.RGB16_EXT),Y===n.SHORT&&me&&(Q=me.RGB16_SNORM_EXT),Y===n.UNSIGNED_INT_5_9_9_9_REV&&(Q=n.RGB9_E5),Y===n.UNSIGNED_INT_10F_11F_11F_REV&&(Q=n.R11F_G11F_B10F)),R===n.RGBA){let ee=ce?wr:$e.getTransfer(ie);Y===n.FLOAT&&(Q=n.RGBA32F),Y===n.HALF_FLOAT&&(Q=n.RGBA16F),Y===n.UNSIGNED_BYTE&&(Q=ee===st?n.SRGB8_ALPHA8:n.RGBA8),Y===n.UNSIGNED_SHORT&&me&&(Q=me.RGBA16_EXT),Y===n.SHORT&&me&&(Q=me.RGBA16_SNORM_EXT),Y===n.UNSIGNED_SHORT_4_4_4_4&&(Q=n.RGBA4),Y===n.UNSIGNED_SHORT_5_5_5_1&&(Q=n.RGB5_A1)}return(Q===n.R16F||Q===n.R32F||Q===n.RG16F||Q===n.RG32F||Q===n.RGBA16F||Q===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function g(F,R){let Y;return F?R===null||R===Yn||R===ds?Y=n.DEPTH24_STENCIL8:R===Bn?Y=n.DEPTH32F_STENCIL8:R===tr&&(Y=n.DEPTH24_STENCIL8,Le("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):R===null||R===Yn||R===ds?Y=n.DEPTH_COMPONENT24:R===Bn?Y=n.DEPTH_COMPONENT32F:R===tr&&(Y=n.DEPTH_COMPONENT16),Y}function T(F,R){return C(F)===!0||F.isFramebufferTexture&&F.minFilter!==Xt&&F.minFilter!==hn?Math.log2(Math.max(R.width,R.height))+1:F.mipmaps.length>0?F.mipmaps.length:F.isCompressedTexture&&Array.isArray(F.image)?R.mipmaps.length:1}function U(F){let R=new WeakRef(F);i.get(F).__ref=R,x.add(R),y.register(F,R,R)}function v(F){let R=i.get(F).__ref;R!==void 0&&(x.delete(R),y.unregister(R))}function E(F){L(F.target)}function w(F){A(F.target)}function L(F){F.removeEventListener("dispose",E),v(F),D(F),F.isVideoTexture&&h.delete(F),F.isHTMLTexture&&p.delete(F)}function A(F){F.removeEventListener("dispose",w),v(F),k(F)}function P(){for(let F of x){let R=F.deref();R!==void 0&&(R.isRenderTarget===!0?A(R):L(R))}x.clear(),p.clear()}function D(F){let R=i.get(F);if(R.__webglInit===void 0)return;let Y=F.source,se=m.get(Y);if(se){let ie=se[R.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&B(F),Object.keys(se).length===0&&m.delete(Y)}i.remove(F)}function B(F){let R=i.get(F);n.deleteTexture(R.__webglTexture);let Y=F.source,se=m.get(Y);delete se[R.__cacheKey],a.memory.textures--}function k(F){let R=i.get(F);R.__depthDisposeCallback&&R.__depthDisposeCallback();let Y=F.depthTexture;if(Y&&Y.renderTarget===F&&L(Y),F.isWebGLCubeRenderTarget)for(let ie=0;ie<6;ie++){if(Array.isArray(R.__webglFramebuffer[ie]))for(let ce=0;ce<R.__webglFramebuffer[ie].length;ce++)n.deleteFramebuffer(R.__webglFramebuffer[ie][ce]);else n.deleteFramebuffer(R.__webglFramebuffer[ie]);R.__webglDepthbuffer&&n.deleteRenderbuffer(R.__webglDepthbuffer[ie])}else{if(Array.isArray(R.__webglFramebuffer))for(let ie=0;ie<R.__webglFramebuffer.length;ie++)n.deleteFramebuffer(R.__webglFramebuffer[ie]);else n.deleteFramebuffer(R.__webglFramebuffer);if(R.__webglDepthbuffer&&n.deleteRenderbuffer(R.__webglDepthbuffer),R.__webglMultisampledFramebuffer&&n.deleteFramebuffer(R.__webglMultisampledFramebuffer),R.__webglColorRenderbuffer)for(let ie=0;ie<R.__webglColorRenderbuffer.length;ie++)R.__webglColorRenderbuffer[ie]&&n.deleteRenderbuffer(R.__webglColorRenderbuffer[ie]);R.__webglDepthRenderbuffer&&n.deleteRenderbuffer(R.__webglDepthRenderbuffer)}let se=F.textures;for(let ie=0,ce=se.length;ie<ce;ie++){let me=i.get(se[ie]);me.__webglTexture&&(n.deleteTexture(me.__webglTexture),a.memory.textures--),i.remove(se[ie])}i.remove(F)}let O=0;function G(){O=0}function J(){return O}function te(F){O=F}function oe(){let F=O;return F>=s.maxTextures&&Le("WebGLTextures: Trying to use "+(F+1)+" texture units while this GPU supports only "+s.maxTextures),O+=1,F}function $(F){let R=[];return R.push(F.wrapS),R.push(F.wrapT),R.push(F.wrapR||0),R.push(F.magFilter),R.push(F.minFilter),R.push(F.anisotropy),R.push(F.internalFormat),R.push(F.format),R.push(F.type),R.push(F.generateMipmaps),R.push(F.mipmapsAutoUpdate),R.push(F.premultiplyAlpha),R.push(F.flipY),R.push(F.unpackAlignment),R.push(F.colorSpace),R.join()}function ue(F,R){let Y=i.get(F);if(F.isVideoTexture&&Ot(F),F.isRenderTargetTexture===!1&&F.isExternalTexture!==!0&&F.version>0&&Y.__version!==F.version){let se=F.image;if(se===null)Le("WebGLRenderer: Texture marked for update but no image data found.");else if(se.complete===!1)Le("WebGLRenderer: Texture marked for update but image is incomplete");else{Ft(Y,F,R);return}}else F.isExternalTexture&&(Y.__webglTexture=F.sourceTexture?F.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,Y.__webglTexture,n.TEXTURE0+R)}function le(F,R){let Y=i.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&Y.__version!==F.version){Ft(Y,F,R);return}else F.isExternalTexture&&(Y.__webglTexture=F.sourceTexture?F.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,Y.__webglTexture,n.TEXTURE0+R)}function Ae(F,R){let Y=i.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&Y.__version!==F.version){Ft(Y,F,R);return}t.bindTexture(n.TEXTURE_3D,Y.__webglTexture,n.TEXTURE0+R)}function ve(F,R){let Y=i.get(F);if(F.version>0&&Y.__version!==F.version){mn(Y,F,R);return}t.bindTexture(n.TEXTURE_CUBE_MAP,Y.__webglTexture,n.TEXTURE0+R)}let Fe={[io]:n.REPEAT,[jn]:n.CLAMP_TO_EDGE,[so]:n.MIRRORED_REPEAT},Lt={[Xt]:n.NEAREST,[_f]:n.NEAREST_MIPMAP_NEAREST,[qr]:n.NEAREST_MIPMAP_LINEAR,[hn]:n.LINEAR,[Po]:n.LINEAR_MIPMAP_NEAREST,[Mi]:n.LINEAR_MIPMAP_LINEAR},Pe={[bf]:n.NEVER,[Jc]:n.ALWAYS,[Sf]:n.LESS,[Zc]:n.LEQUAL,[Tf]:n.EQUAL,[$c]:n.GEQUAL,[wf]:n.GREATER,[Ef]:n.NOTEQUAL};function rt(F,R){if(R.type===Bn&&e.has("OES_texture_float_linear")===!1&&(R.magFilter===hn||R.magFilter===Po||R.magFilter===qr||R.magFilter===Mi||R.minFilter===hn||R.minFilter===Po||R.minFilter===qr||R.minFilter===Mi)&&Le("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(F,n.TEXTURE_WRAP_S,Fe[R.wrapS]),n.texParameteri(F,n.TEXTURE_WRAP_T,Fe[R.wrapT]),(F===n.TEXTURE_3D||F===n.TEXTURE_2D_ARRAY)&&n.texParameteri(F,n.TEXTURE_WRAP_R,Fe[R.wrapR]),n.texParameteri(F,n.TEXTURE_MAG_FILTER,Lt[R.magFilter]),n.texParameteri(F,n.TEXTURE_MIN_FILTER,Lt[R.minFilter]),R.compareFunction&&(n.texParameteri(F,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(F,n.TEXTURE_COMPARE_FUNC,Pe[R.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(R.magFilter===Xt||R.minFilter!==qr&&R.minFilter!==Mi||R.type===Bn&&e.has("OES_texture_float_linear")===!1)return;if(R.anisotropy>1||i.get(R).__currentAnisotropy){let Y=e.get("EXT_texture_filter_anisotropic");n.texParameterf(F,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,s.getMaxAnisotropy())),i.get(R).__currentAnisotropy=R.anisotropy}}}function lt(F,R){let Y=!1;F.__webglInit===void 0&&(F.__webglInit=!0,R.addEventListener("dispose",E),U(R));let se=R.source,ie=m.get(se);ie===void 0&&(ie={},m.set(se,ie));let ce=$(R);if(ce!==F.__cacheKey){ie[ce]===void 0&&(ie[ce]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,Y=!0),ie[ce].usedTimes++;let me=ie[F.__cacheKey];me!==void 0&&(ie[F.__cacheKey].usedTimes--,me.usedTimes===0&&B(R)),F.__cacheKey=ce,F.__webglTexture=ie[ce].texture}return Y}function qe(F,R,Y){return Math.floor(Math.floor(F/Y)/R)}function Yt(F,R,Y,se){let ce=F.updateRanges;if(ce.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,R.width,R.height,Y,se,R.data);else{ce.sort((z,ne)=>z.start-ne.start);let me=0;for(let z=1;z<ce.length;z++){let ne=ce[me],j=ce[z],de=ne.start+ne.count,ae=qe(j.start,R.width,4),he=qe(ne.start,R.width,4);j.start<=de+1&&ae===he&&qe(j.start+j.count-1,R.width,4)===ae?ne.count=Math.max(ne.count,j.start+j.count-ne.start):(++me,ce[me]=j)}ce.length=me+1;let Q=t.getParameter(n.UNPACK_ROW_LENGTH),ee=t.getParameter(n.UNPACK_SKIP_PIXELS),fe=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,R.width);for(let z=0,ne=ce.length;z<ne;z++){let j=ce[z],de=Math.floor(j.start/4),ae=Math.ceil(j.count/4),he=de%R.width,Re=Math.floor(de/R.width),Ve=ae,re=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,he),t.pixelStorei(n.UNPACK_SKIP_ROWS,Re),t.texSubImage2D(n.TEXTURE_2D,0,he,Re,Ve,re,Y,se,R.data)}F.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,Q),t.pixelStorei(n.UNPACK_SKIP_PIXELS,ee),t.pixelStorei(n.UNPACK_SKIP_ROWS,fe)}}function Ft(F,R,Y){let se=n.TEXTURE_2D;(R.isDataArrayTexture||R.isCompressedArrayTexture)&&(se=n.TEXTURE_2D_ARRAY),R.isData3DTexture&&(se=n.TEXTURE_3D);let ie=lt(F,R),ce=R.source;t.bindTexture(se,F.__webglTexture,n.TEXTURE0+Y);let me=i.get(ce);if(ce.version!==me.__version||ie===!0){if(t.activeTexture(n.TEXTURE0+Y),(typeof ImageBitmap<"u"&&R.image instanceof ImageBitmap)===!1){let re=$e.getPrimaries($e.workingColorSpace),Ce=R.colorSpace===Si?null:$e.getPrimaries(R.colorSpace),He=R.colorSpace===Si||re===Ce?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,R.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,He)}t.pixelStorei(n.UNPACK_ALIGNMENT,R.unpackAlignment);let ee=M(R.image,!1,s.maxTextureSize);ee=Ie(R,ee);let fe=r.convert(R.format,R.colorSpace),z=r.convert(R.type),ne=S(R.internalFormat,fe,z,R.normalized,R.colorSpace,R.isVideoTexture);rt(se,R);let j,de=R.mipmaps,ae=R.isVideoTexture!==!0,he=me.__version===void 0||ie===!0,Re=ce.dataReady,Ve=T(R,ee);if(R.isDepthTexture)ne=g(R.format===bi,R.type),he&&(ae?t.texStorage2D(n.TEXTURE_2D,1,ne,ee.width,ee.height):t.texImage2D(n.TEXTURE_2D,0,ne,ee.width,ee.height,0,fe,z,null));else if(R.isDataTexture)if(de.length>0){ae&&he&&t.texStorage2D(n.TEXTURE_2D,Ve,ne,de[0].width,de[0].height);for(let re=0,Ce=de.length;re<Ce;re++)j=de[re],ae?Re&&t.texSubImage2D(n.TEXTURE_2D,re,0,0,j.width,j.height,fe,z,j.data):t.texImage2D(n.TEXTURE_2D,re,ne,j.width,j.height,0,fe,z,j.data);R.generateMipmaps=!1}else ae?(he&&t.texStorage2D(n.TEXTURE_2D,Ve,ne,ee.width,ee.height),Re&&Yt(R,ee,fe,z)):t.texImage2D(n.TEXTURE_2D,0,ne,ee.width,ee.height,0,fe,z,ee.data);else if(R.isCompressedTexture)if(R.isCompressedArrayTexture){ae&&he&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ve,ne,de[0].width,de[0].height,ee.depth);for(let re=0,Ce=de.length;re<Ce;re++)if(j=de[re],R.format!==$n)if(fe!==null)if(ae){if(Re)if(R.layerUpdates.size>0){let He=nh(j.width,j.height,R.format,R.type);for(let _e of R.layerUpdates){let at=j.data.subarray(_e*He/j.data.BYTES_PER_ELEMENT,(_e+1)*He/j.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,re,0,0,_e,j.width,j.height,1,fe,at)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,re,0,0,0,j.width,j.height,ee.depth,fe,j.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,re,ne,j.width,j.height,ee.depth,0,j.data,0,0);else Le("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ae?Re&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,re,0,0,0,j.width,j.height,ee.depth,fe,z,j.data):t.texImage3D(n.TEXTURE_2D_ARRAY,re,ne,j.width,j.height,ee.depth,0,fe,z,j.data);R.layerUpdates.size>0&&R.clearLayerUpdates()}else{ae&&he&&t.texStorage2D(n.TEXTURE_2D,Ve,ne,de[0].width,de[0].height);for(let re=0,Ce=de.length;re<Ce;re++)j=de[re],R.format!==$n?fe!==null?ae?Re&&t.compressedTexSubImage2D(n.TEXTURE_2D,re,0,0,j.width,j.height,fe,j.data):t.compressedTexImage2D(n.TEXTURE_2D,re,ne,j.width,j.height,0,j.data):Le("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ae?Re&&t.texSubImage2D(n.TEXTURE_2D,re,0,0,j.width,j.height,fe,z,j.data):t.texImage2D(n.TEXTURE_2D,re,ne,j.width,j.height,0,fe,z,j.data)}else if(R.isDataArrayTexture)if(ae){if(he&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ve,ne,ee.width,ee.height,ee.depth),Re)if(R.layerUpdates.size>0){let re=nh(ee.width,ee.height,R.format,R.type);for(let Ce of R.layerUpdates){let He=ee.data.subarray(Ce*re/ee.data.BYTES_PER_ELEMENT,(Ce+1)*re/ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Ce,ee.width,ee.height,1,fe,z,He)}R.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,fe,z,ee.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,ne,ee.width,ee.height,ee.depth,0,fe,z,ee.data);else if(R.isData3DTexture)ae?(he&&t.texStorage3D(n.TEXTURE_3D,Ve,ne,ee.width,ee.height,ee.depth),Re&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,fe,z,ee.data)):t.texImage3D(n.TEXTURE_3D,0,ne,ee.width,ee.height,ee.depth,0,fe,z,ee.data);else if(R.isFramebufferTexture){if(he)if(ae)t.texStorage2D(n.TEXTURE_2D,Ve,ne,ee.width,ee.height);else{let re=ee.width,Ce=ee.height;for(let He=0;He<Ve;He++)t.texImage2D(n.TEXTURE_2D,He,ne,re,Ce,0,fe,z,null),re>>=1,Ce>>=1}}else if(R.isHTMLTexture){if("texElementImage2D"in n){let re=n.canvas;if(re.hasAttribute("layoutsubtree")||re.setAttribute("layoutsubtree","true"),ee.parentNode!==re){re.appendChild(ee),p.add(R),re.onpaint=Ce=>{let He=Ce.changedElements;for(let _e of p)He.includes(_e.image)&&(_e.needsUpdate=!0)},re.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,ee);else{let He=n.RGBA,_e=n.RGBA,at=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,He,_e,at,ee)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(de.length>0){if(ae&&he){let re=ze(de[0]);t.texStorage2D(n.TEXTURE_2D,Ve,ne,re.width,re.height)}for(let re=0,Ce=de.length;re<Ce;re++)j=de[re],ae?Re&&t.texSubImage2D(n.TEXTURE_2D,re,0,0,fe,z,j):t.texImage2D(n.TEXTURE_2D,re,ne,fe,z,j);R.generateMipmaps=!1}else if(ae){if(he){let re=ze(ee);t.texStorage2D(n.TEXTURE_2D,Ve,ne,re.width,re.height)}Re&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,fe,z,ee)}else t.texImage2D(n.TEXTURE_2D,0,ne,fe,z,ee);C(R)&&R.mipmapsAutoUpdate===!0&&b(se),me.__version=ce.version,R.onUpdate&&R.onUpdate(R)}F.__version=R.version}function mn(F,R,Y){if(R.image.length!==6)return;let se=lt(F,R),ie=R.source;t.bindTexture(n.TEXTURE_CUBE_MAP,F.__webglTexture,n.TEXTURE0+Y);let ce=i.get(ie);if(ie.version!==ce.__version||se===!0){t.activeTexture(n.TEXTURE0+Y);let me=$e.getPrimaries($e.workingColorSpace),Q=R.colorSpace===Si?null:$e.getPrimaries(R.colorSpace),ee=R.colorSpace===Si||me===Q?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,R.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,R.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee);let fe=R.isCompressedTexture||R.image[0].isCompressedTexture,z=R.image[0]&&R.image[0].isDataTexture,ne=[];for(let _e=0;_e<6;_e++)!fe&&!z?ne[_e]=M(R.image[_e],!0,s.maxCubemapSize):ne[_e]=z?R.image[_e].image:R.image[_e],ne[_e]=Ie(R,ne[_e]);let j=ne[0],de=r.convert(R.format,R.colorSpace),ae=r.convert(R.type),he=S(R.internalFormat,de,ae,R.normalized,R.colorSpace),Re=R.isVideoTexture!==!0,Ve=ce.__version===void 0||se===!0,re=ie.dataReady,Ce=T(R,j);rt(n.TEXTURE_CUBE_MAP,R);let He;if(R.isDepthTexture){if(he=g(R.format===bi,R.type),Ve)if(Re)t.texStorage2D(n.TEXTURE_CUBE_MAP,1,he,j.width,j.height);else for(let _e=0;_e<6;_e++)t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,he,j.width,j.height,0,de,ae,null)}else if(fe){Re&&Ve&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ce,he,j.width,j.height);for(let _e=0;_e<6;_e++){He=ne[_e].mipmaps;for(let at=0;at<He.length;at++){let Ht=He[at];R.format!==$n?de!==null?Re?re&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,at,0,0,Ht.width,Ht.height,de,Ht.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,at,he,Ht.width,Ht.height,0,Ht.data):Le("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Re?re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,at,0,0,Ht.width,Ht.height,de,ae,Ht.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,at,he,Ht.width,Ht.height,0,de,ae,Ht.data)}}}else{if(He=R.mipmaps,Re&&Ve){He.length>0&&Ce++;let _e=ze(ne[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Ce,he,_e.width,_e.height)}for(let _e=0;_e<6;_e++)if(z){Re?re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,ne[_e].width,ne[_e].height,de,ae,ne[_e].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,he,ne[_e].width,ne[_e].height,0,de,ae,ne[_e].data);for(let at=0;at<He.length;at++){let Pi=He[at].image[_e].image;Re?re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,at+1,0,0,Pi.width,Pi.height,de,ae,Pi.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,at+1,he,Pi.width,Pi.height,0,de,ae,Pi.data)}}else{Re?re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,de,ae,ne[_e]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,he,de,ae,ne[_e]);for(let at=0;at<He.length;at++){let Ht=He[at];Re?re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,at+1,0,0,de,ae,Ht.image[_e]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,at+1,he,de,ae,Ht.image[_e])}}}C(R)&&R.mipmapsAutoUpdate===!0&&b(n.TEXTURE_CUBE_MAP),ce.__version=ie.version,R.onUpdate&&R.onUpdate(R)}F.__version=R.version}function Mt(F,R,Y,se,ie,ce){let me=r.convert(Y.format,Y.colorSpace),Q=r.convert(Y.type),ee=S(Y.internalFormat,me,Q,Y.normalized,Y.colorSpace),fe=i.get(R),z=i.get(Y);if(z.__renderTarget=R,!fe.__hasExternalTextures){let ne=Math.max(1,R.width>>ce),j=Math.max(1,R.height>>ce);ie===n.TEXTURE_3D||ie===n.TEXTURE_2D_ARRAY?t.texImage3D(ie,ce,ee,ne,j,R.depth,0,me,Q,null):t.texImage2D(ie,ce,ee,ne,j,0,me,Q,null)}t.bindFramebuffer(n.FRAMEBUFFER,F),xe(R)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,se,ie,z.__webglTexture,0,xt(R)):(ie===n.TEXTURE_2D||ie>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,se,ie,z.__webglTexture,ce),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Jn(F,R,Y){if(n.bindRenderbuffer(n.RENDERBUFFER,F),R.depthBuffer){let se=R.depthTexture,ie=se&&se.isDepthTexture?se.type:null,ce=g(R.stencilBuffer,ie),me=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;xe(R)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,xt(R),ce,R.width,R.height):Y?n.renderbufferStorageMultisample(n.RENDERBUFFER,xt(R),ce,R.width,R.height):n.renderbufferStorage(n.RENDERBUFFER,ce,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,me,n.RENDERBUFFER,F)}else{let se=R.textures;for(let ie=0;ie<se.length;ie++){let ce=se[ie],me=r.convert(ce.format,ce.colorSpace),Q=r.convert(ce.type),ee=S(ce.internalFormat,me,Q,ce.normalized,ce.colorSpace);xe(R)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,xt(R),ee,R.width,R.height):Y?n.renderbufferStorageMultisample(n.RENDERBUFFER,xt(R),ee,R.width,R.height):n.renderbufferStorage(n.RENDERBUFFER,ee,R.width,R.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function kt(F,R,Y){let se=R.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,F),!(R.depthTexture&&R.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ie=i.get(R.depthTexture);ie.__renderTarget=R;let ce=se?R.depthTexture.image[0]:R.depthTexture.image;(!ie.__webglTexture||ce.width!==R.width||ce.height!==R.height)&&(ce.width=R.width,ce.height=R.height,R.depthTexture.needsUpdate=!0),se?ve(R.depthTexture,0):ue(R.depthTexture,0);let me=ie.__webglTexture,Q=xt(R),ee=se?n.TEXTURE_CUBE_MAP_POSITIVE_X+Y:n.TEXTURE_2D,fe=R.depthTexture.format===bi?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(R.depthTexture.format===_i)xe(R)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,fe,ee,me,0,Q):n.framebufferTexture2D(n.FRAMEBUFFER,fe,ee,me,0);else if(R.depthTexture.format===bi)xe(R)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,fe,ee,me,0,Q):n.framebufferTexture2D(n.FRAMEBUFFER,fe,ee,me,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function In(F){let R=i.get(F),Y=F.isWebGLCubeRenderTarget===!0;if(R.__boundDepthTexture!==F.depthTexture){let se=F.depthTexture;if(R.__depthDisposeCallback&&R.__depthDisposeCallback(),se){let ie=()=>{delete R.__boundDepthTexture,delete R.__depthDisposeCallback,se.removeEventListener("dispose",ie)};se.addEventListener("dispose",ie),R.__depthDisposeCallback=ie}R.__boundDepthTexture=se}if(F.depthTexture&&!R.__autoAllocateDepthBuffer)if(Y)for(let se=0;se<6;se++)kt(R.__webglFramebuffer[se],F,se);else F.texture.mipmaps.length>0?kt(R.__webglFramebuffer[0],F,0):kt(R.__webglFramebuffer,F,0);else if(Y){R.__webglDepthbuffer=[];for(let se=0;se<6;se++)if(t.bindFramebuffer(n.FRAMEBUFFER,R.__webglFramebuffer[se]),R.__webglDepthbuffer[se]===void 0)R.__webglDepthbuffer[se]=n.createRenderbuffer(),Jn(R.__webglDepthbuffer[se],F,!1);else{let ie=F.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ce=R.__webglDepthbuffer[se];n.bindRenderbuffer(n.RENDERBUFFER,ce),n.framebufferRenderbuffer(n.FRAMEBUFFER,ie,n.RENDERBUFFER,ce)}}else if(F.texture.mipmaps.length>0?t.bindFramebuffer(n.FRAMEBUFFER,R.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,R.__webglFramebuffer),R.__webglDepthbuffer===void 0)R.__webglDepthbuffer=n.createRenderbuffer(),Jn(R.__webglDepthbuffer,F,!1);else{let ie=F.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ce=R.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ce),n.framebufferRenderbuffer(n.FRAMEBUFFER,ie,n.RENDERBUFFER,ce)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Pn(F,R,Y){let se=i.get(F);R!==void 0&&Mt(se.__webglFramebuffer,F,F.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),Y!==void 0&&In(F)}function Ln(F){let R=F.texture,Y=i.get(F),se=i.get(R);F.addEventListener("dispose",w),U(F);let ie=F.textures,ce=F.isWebGLCubeRenderTarget===!0,me=ie.length>1;if(me||(se.__webglTexture===void 0&&(se.__webglTexture=n.createTexture()),se.__version=R.version,a.memory.textures++),ce){Y.__webglFramebuffer=[];for(let Q=0;Q<6;Q++)if(R.mipmaps.length>0){Y.__webglFramebuffer[Q]=[];for(let ee=0;ee<R.mipmaps.length;ee++)Y.__webglFramebuffer[Q][ee]=n.createFramebuffer()}else Y.__webglFramebuffer[Q]=n.createFramebuffer()}else{if(R.mipmaps.length>0){Y.__webglFramebuffer=[];for(let Q=0;Q<R.mipmaps.length;Q++)Y.__webglFramebuffer[Q]=n.createFramebuffer()}else Y.__webglFramebuffer=n.createFramebuffer();if(me)for(let Q=0,ee=ie.length;Q<ee;Q++){let fe=i.get(ie[Q]);fe.__webglTexture===void 0&&(fe.__webglTexture=n.createTexture(),a.memory.textures++)}if(F.samples>0&&xe(F)===!1){Y.__webglMultisampledFramebuffer=n.createFramebuffer(),Y.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let Q=0;Q<ie.length;Q++){let ee=ie[Q];Y.__webglColorRenderbuffer[Q]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,Y.__webglColorRenderbuffer[Q]);let fe=r.convert(ee.format,ee.colorSpace),z=r.convert(ee.type),ne=S(ee.internalFormat,fe,z,ee.normalized,ee.colorSpace,F.isXRRenderTarget===!0),j=xt(F);n.renderbufferStorageMultisample(n.RENDERBUFFER,j,ne,F.width,F.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Q,n.RENDERBUFFER,Y.__webglColorRenderbuffer[Q])}n.bindRenderbuffer(n.RENDERBUFFER,null),F.depthBuffer&&(Y.__webglDepthRenderbuffer=n.createRenderbuffer(),Jn(Y.__webglDepthRenderbuffer,F,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ce){t.bindTexture(n.TEXTURE_CUBE_MAP,se.__webglTexture),rt(n.TEXTURE_CUBE_MAP,R);for(let Q=0;Q<6;Q++)if(R.mipmaps.length>0)for(let ee=0;ee<R.mipmaps.length;ee++)Mt(Y.__webglFramebuffer[Q][ee],F,R,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ee);else Mt(Y.__webglFramebuffer[Q],F,R,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0);C(R)?b(n.TEXTURE_CUBE_MAP):R.mipmaps.length>0&&n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_MAX_LEVEL,R.mipmaps.length-1),t.unbindTexture()}else if(me){for(let Q=0,ee=ie.length;Q<ee;Q++){let fe=ie[Q],z=i.get(fe),ne=n.TEXTURE_2D;(F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(ne=F.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ne,z.__webglTexture),rt(ne,fe),Mt(Y.__webglFramebuffer,F,fe,n.COLOR_ATTACHMENT0+Q,ne,0),C(fe)&&b(ne)}t.unbindTexture()}else{let Q=n.TEXTURE_2D;if((F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(Q=F.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Q,se.__webglTexture),rt(Q,R),R.mipmaps.length>0)for(let ee=0;ee<R.mipmaps.length;ee++)Mt(Y.__webglFramebuffer[ee],F,R,n.COLOR_ATTACHMENT0,Q,ee);else Mt(Y.__webglFramebuffer,F,R,n.COLOR_ATTACHMENT0,Q,0);C(R)?b(Q):R.mipmaps.length>0&&n.texParameteri(Q,n.TEXTURE_MAX_LEVEL,R.mipmaps.length-1),t.unbindTexture()}F.depthBuffer&&In(F)}function W(F){let R=F.textures;for(let Y=0,se=R.length;Y<se;Y++){let ie=R[Y];if(C(ie)&&ie.mipmapsAutoUpdate===!0){let ce=_(F),me=i.get(ie).__webglTexture;t.bindTexture(ce,me),b(ce),t.unbindTexture()}}}let Nn=[];function gt(F){if(F.samples>0){if(xe(F)===!1){let R=F.textures,Y=F.width,se=F.height,ie=n.COLOR_BUFFER_BIT,ce=F.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,me=i.get(F),Q=R.length>1;if(Q)for(let fe=0;fe<R.length;fe++)t.bindFramebuffer(n.FRAMEBUFFER,me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,me.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,me.__webglMultisampledFramebuffer),F.texture.mipmaps.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,me.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,me.__webglFramebuffer);for(let fe=0;fe<R.length;fe++){if(F.resolveDepthBuffer&&(F.depthBuffer&&(ie|=n.DEPTH_BUFFER_BIT),F.stencilBuffer&&F.resolveStencilBuffer&&(ie|=n.STENCIL_BUFFER_BIT)),Q){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,me.__webglColorRenderbuffer[fe]);let z=i.get(R[fe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,z,0)}n.blitFramebuffer(0,0,Y,se,0,0,Y,se,ie,n.NEAREST),l===!0&&(Nn.length=0,Nn.push(n.COLOR_ATTACHMENT0+fe),F.depthBuffer&&F.storeMultisampledDepthBuffer===!1&&Nn.push(ce),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Nn))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Q)for(let fe=0;fe<R.length;fe++){t.bindFramebuffer(n.FRAMEBUFFER,me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.RENDERBUFFER,me.__webglColorRenderbuffer[fe]);let z=i.get(R[fe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,me.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.TEXTURE_2D,z,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,me.__webglMultisampledFramebuffer)}else if(F.depthBuffer&&F.storeMultisampledDepthBuffer===!1&&l){let R=F.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[R])}}}function xt(F){return Math.min(s.maxSamples,F.samples)}function xe(F){let R=i.get(F);return F.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&R.__useRenderToTexture!==!1}function Ot(F){let R=a.render.frame;h.get(F)!==R&&(h.set(F,R),F.update())}function Ie(F,R){let Y=F.colorSpace,se=F.format,ie=F.type;return F.isCompressedTexture===!0||F.isVideoTexture===!0||Y!==Tr&&Y!==Si&&($e.getTransfer(Y)===st?(se!==$n||ie!==xn)&&Le("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ne("WebGLTextures: Unsupported texture color space:",Y)),R}function ze(F){return typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement?(c.width=F.naturalWidth||F.width,c.height=F.naturalHeight||F.height):typeof VideoFrame<"u"&&F instanceof VideoFrame?(c.width=F.displayWidth,c.height=F.displayHeight):(c.width=F.width,c.height=F.height),c}this.allocateTextureUnit=oe,this.resetTextureUnits=G,this.getTextureUnits=J,this.setTextureUnits=te,this.setTexture2D=ue,this.setTexture2DArray=le,this.setTexture3D=Ae,this.setTextureCube=ve,this.rebindTextures=Pn,this.setupRenderTarget=Ln,this.updateRenderTargetMipmap=W,this.updateMultisampleRenderTarget=gt,this.setupDepthRenderbuffer=In,this.setupFrameBufferTexture=Mt,this.useMultisampledRTT=xe,this.dispose=P}function sy(n,e){function t(i,s=Si){let r,a=$e.getTransfer(s);if(i===xn)return n.UNSIGNED_BYTE;if(i===No)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Do)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Wc)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Xc)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Vc)return n.BYTE;if(i===Gc)return n.SHORT;if(i===tr)return n.UNSIGNED_SHORT;if(i===Lo)return n.INT;if(i===Yn)return n.UNSIGNED_INT;if(i===Bn)return n.FLOAT;if(i===Zn)return n.HALF_FLOAT;if(i===qc)return n.ALPHA;if(i===Yc)return n.RGB;if(i===$n)return n.RGBA;if(i===_i)return n.DEPTH_COMPONENT;if(i===bi)return n.DEPTH_STENCIL;if(i===Uo)return n.RED;if(i===Fo)return n.RED_INTEGER;if(i===Xi)return n.RG;if(i===Oo)return n.RG_INTEGER;if(i===Bo)return n.RGBA_INTEGER;if(i===Yr||i===Zr||i===$r||i===Jr)if(a===st)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Yr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Zr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===$r)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Jr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Yr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Zr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===$r)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Jr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===zo||i===ko||i===Ho||i===Vo)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===zo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ko)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ho)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Vo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Go||i===Wo||i===Xo||i===qo||i===Yo||i===Kr||i===Zo)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Go||i===Wo)return a===st?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Xo)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===qo)return r.COMPRESSED_R11_EAC;if(i===Yo)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Kr)return r.COMPRESSED_RG11_EAC;if(i===Zo)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===$o||i===Jo||i===Ko||i===jo||i===Qo||i===el||i===tl||i===nl||i===il||i===sl||i===rl||i===al||i===ol||i===ll)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===$o)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Jo)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ko)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===jo)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Qo)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===el)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===tl)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===nl)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===il)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===sl)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===rl)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===al)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===ol)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ll)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===cl||i===hl||i===ul)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===cl)return a===st?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===hl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===ul)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===fl||i===dl||i===jr||i===pl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===fl)return r.COMPRESSED_RED_RGTC1_EXT;if(i===dl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===jr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===pl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ds?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var ry=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ay=`
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

}`,uh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new zr(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new On({vertexShader:ry,fragmentShader:ay,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new je(new ii(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},fh=class extends Qn{constructor(e,t){super();let i=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,p=null,f=null,m=null,x=null,y=typeof XRWebGLBinding<"u",u=new uh,d={},M=t.getContextAttributes(),C=null,b=null,_=[],S=[],g=new Oe,T=null,U=null,v=new $t;v.viewport=new _t;let E=new $t;E.viewport=new _t;let w=[v,E],L=new Ao,A=null,P=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let ue=_[$];return ue===void 0&&(ue=new qs,_[$]=ue),ue.getTargetRaySpace()},this.getControllerGrip=function($){let ue=_[$];return ue===void 0&&(ue=new qs,_[$]=ue),ue.getGripSpace()},this.getHand=function($){let ue=_[$];return ue===void 0&&(ue=new qs,_[$]=ue),ue.getHandSpace()};function D($){let ue=S.indexOf($.inputSource);if(ue===-1)return;let le=_[ue];le!==void 0&&(le.update($.inputSource,$.frame,c||a),le.dispatchEvent({type:$.type,data:$.inputSource}))}function B(){s.removeEventListener("select",D),s.removeEventListener("selectstart",D),s.removeEventListener("selectend",D),s.removeEventListener("squeeze",D),s.removeEventListener("squeezestart",D),s.removeEventListener("squeezeend",D),s.removeEventListener("end",B),s.removeEventListener("inputsourceschange",k);for(let $=0;$<_.length;$++){let ue=S[$];ue!==null&&(S[$]=null,_[$].disconnect(ue))}A=null,P=null,u.reset();for(let $ in d)delete d[$];if(e.setRenderTarget(C),m=null,f=null,p=null,s=null,b=null,oe.stop(),i.isPresenting=!1,e.setPixelRatio(T),e.setSize(g.width,g.height,!1),U!==null){let $=U.camera;$.fov=U.fov,$.zoom=U.zoom,$.updateProjectionMatrix(),U=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,i.isPresenting===!0&&Le("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){o=$,i.isPresenting===!0&&Le("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return p===null&&y&&(p=new XRWebGLBinding(s,t)),p},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(C=e.getRenderTarget(),s.addEventListener("select",D),s.addEventListener("selectstart",D),s.addEventListener("selectend",D),s.addEventListener("squeeze",D),s.addEventListener("squeezestart",D),s.addEventListener("squeezeend",D),s.addEventListener("end",B),s.addEventListener("inputsourceschange",k),M.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(g),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let le=null,Ae=null,ve=null;M.depth&&(ve=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,le=M.stencil?bi:_i,Ae=M.stencil?ds:Yn);let Fe={colorFormat:t.RGBA8,depthFormat:ve,scaleFactor:r};p=this.getBinding(),f=p.createProjectionLayer(Fe),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),b=new En(f.textureWidth,f.textureHeight,{format:$n,type:xn,depthTexture:new vi(f.textureWidth,f.textureHeight,Ae,void 0,void 0,void 0,void 0,void 0,void 0,le),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let le={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,t,le),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),b=new En(m.framebufferWidth,m.framebufferHeight,{format:$n,type:xn,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1,storeMultisampledDepthBuffer:m.ignoreDepthValues===!1,storeMultisampledStencilBuffer:m.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),oe.setContext(s),oe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return u.getDepthTexture()};function k($){for(let ue=0;ue<$.removed.length;ue++){let le=$.removed[ue],Ae=S.indexOf(le);Ae>=0&&(S[Ae]=null,_[Ae].disconnect(le))}for(let ue=0;ue<$.added.length;ue++){let le=$.added[ue],Ae=S.indexOf(le);if(Ae===-1){for(let Fe=0;Fe<_.length;Fe++)if(Fe>=S.length){S.push(le),Ae=Fe;break}else if(S[Fe]===null){S[Fe]=le,Ae=Fe;break}if(Ae===-1)break}let ve=_[Ae];ve&&ve.connect(le)}}function O($,ue){ue===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(ue.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;let ue=$.near,le=$.far;u.texture!==null&&(u.depthNear>0&&(ue=u.depthNear),u.depthFar>0&&(le=u.depthFar)),L.near=E.near=v.near=ue,L.far=E.far=v.far=le,(A!==L.near||P!==L.far)&&(s.updateRenderState({depthNear:L.near,depthFar:L.far}),A=L.near,P=L.far),L.layers.mask=$.layers.mask|6,v.layers.mask=L.layers.mask&-5,E.layers.mask=L.layers.mask&-3;let Ae=$.parent,ve=L.cameras;O(L,Ae);for(let Fe=0;Fe<ve.length;Fe++)O(ve[Fe],Ae);L.projectionMatrix.copy(v.projectionMatrix),L.projectionMatrixInverse.copy(v.projectionMatrixInverse),U===null&&$.isPerspectiveCamera&&(U={camera:$,fov:$.fov,zoom:$.zoom}),G($,L,Ae)};function G($,ue,le){le===null?$.matrix.copy(ue.matrixWorld):($.matrix.copy(le.matrixWorld),$.matrix.invert(),$.matrix.multiply(ue.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(ue.projectionMatrix),$.projectionMatrixInverse.copy(ue.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=ao*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return L},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function($){l=$,f!==null&&(f.fixedFoveation=$),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=$)},this.hasDepthSensing=function(){return u.texture!==null},this.getDepthSensingMesh=function(){return u.getMesh(L)},this.getCameraTexture=function($){return d[$]};let J=null;function te($,ue){if(h=ue.getViewerPose(c||a),x=ue,h!==null){let le=h.views;m!==null&&(e.setRenderTargetFramebuffer(b,m.framebuffer),e.setRenderTarget(b));let Ae=!1;le.length!==L.cameras.length&&(L.cameras.length=0,Ae=!0);for(let Pe=0;Pe<le.length;Pe++){let rt=le[Pe],lt=null;if(m!==null)lt=m.getViewport(rt);else{let Yt=p.getViewSubImage(f,rt);lt=Yt.viewport,Pe===0&&(e.setRenderTargetTextures(b,Yt.colorTexture,Yt.depthStencilTexture),e.setRenderTarget(b))}let qe=w[Pe];qe===void 0&&(qe=new $t,qe.layers.enable(Pe),qe.viewport=new _t,w[Pe]=qe),qe.matrix.fromArray(rt.transform.matrix),qe.matrix.decompose(qe.position,qe.quaternion,qe.scale),qe.projectionMatrix.fromArray(rt.projectionMatrix),qe.projectionMatrixInverse.copy(qe.projectionMatrix).invert(),qe.viewport.set(lt.x,lt.y,lt.width,lt.height),Pe===0&&(L.matrix.copy(qe.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),Ae===!0&&L.cameras.push(qe)}let ve=s.enabledFeatures;if(ve&&ve.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){p=i.getBinding();let Pe=p.getDepthInformation(le[0]);Pe&&Pe.isValid&&Pe.texture&&u.init(Pe,s.renderState)}if(ve&&ve.includes("camera-access")&&y){e.state.unbindTexture(),p=i.getBinding();for(let Pe=0;Pe<le.length;Pe++){let rt=le[Pe].camera;if(rt){let lt=d[rt];lt||(lt=new zr,d[rt]=lt);let qe=p.getCameraImage(rt);lt.sourceTexture=qe}}}}for(let le=0;le<_.length;le++){let Ae=S[le],ve=_[le];Ae!==null&&ve!==void 0&&ve.update(Ae,ue,c||a)}J&&J($,ue),ue.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ue}),x=null}let oe=new ad;oe.setAnimationLoop(te),this.setAnimationLoop=function($){J=$},this.dispose=function(){}}},oy=new ot,gd=new Be;gd.set(-1,0,0,0,1,0,0,0,1);function ly(n,e){function t(u,d){u.matrixAutoUpdate===!0&&u.updateMatrix(),d.value.copy(u.matrix)}function i(u,d){d.color.getRGB(u.fogColor.value,Qc(n)),d.isFog?(u.fogNear.value=d.near,u.fogFar.value=d.far):d.isFogExp2&&(u.fogDensity.value=d.density)}function s(u,d,M,C,b){d.isNodeMaterial?d.uniformsNeedUpdate=!1:d.isMeshBasicMaterial?r(u,d):d.isMeshLambertMaterial?(r(u,d),d.envMap&&(u.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(r(u,d),p(u,d)):d.isMeshPhongMaterial?(r(u,d),h(u,d),d.envMap&&(u.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(r(u,d),f(u,d),d.isMeshPhysicalMaterial&&m(u,d,b)):d.isMeshMatcapMaterial?(r(u,d),x(u,d)):d.isMeshDepthMaterial?r(u,d):d.isMeshDistanceMaterial?(r(u,d),y(u,d)):d.isMeshNormalMaterial?r(u,d):d.isLineBasicMaterial?(a(u,d),d.isLineDashedMaterial&&o(u,d)):d.isPointsMaterial?l(u,d,M,C):d.isSpriteMaterial?c(u,d):d.isShadowMaterial?(u.color.value.copy(d.color),u.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(u,d){u.opacity.value=d.opacity,d.color&&u.diffuse.value.copy(d.color),d.emissive&&u.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(u.map.value=d.map,t(d.map,u.mapTransform)),d.alphaMap&&(u.alphaMap.value=d.alphaMap,t(d.alphaMap,u.alphaMapTransform)),d.bumpMap&&(u.bumpMap.value=d.bumpMap,t(d.bumpMap,u.bumpMapTransform),u.bumpScale.value=d.bumpScale,d.side===Jt&&(u.bumpScale.value*=-1)),d.normalMap&&(u.normalMap.value=d.normalMap,t(d.normalMap,u.normalMapTransform),u.normalScale.value.copy(d.normalScale),d.side===Jt&&u.normalScale.value.negate()),d.displacementMap&&(u.displacementMap.value=d.displacementMap,t(d.displacementMap,u.displacementMapTransform),u.displacementScale.value=d.displacementScale,u.displacementBias.value=d.displacementBias),d.emissiveMap&&(u.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,u.emissiveMapTransform)),d.specularMap&&(u.specularMap.value=d.specularMap,t(d.specularMap,u.specularMapTransform)),d.alphaTest>0&&(u.alphaTest.value=d.alphaTest);let M=e.get(d),C=M.envMap,b=M.envMapRotation;C&&(u.envMap.value=C,u.envMapRotation.value.setFromMatrix4(oy.makeRotationFromEuler(b)).transpose(),C.isCubeTexture&&C.isRenderTargetTexture===!1&&u.envMapRotation.value.premultiply(gd),u.reflectivity.value=d.reflectivity,u.ior.value=d.ior,u.refractionRatio.value=d.refractionRatio),d.lightMap&&(u.lightMap.value=d.lightMap,u.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,u.lightMapTransform)),d.aoMap&&(u.aoMap.value=d.aoMap,u.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,u.aoMapTransform))}function a(u,d){u.diffuse.value.copy(d.color),u.opacity.value=d.opacity,d.map&&(u.map.value=d.map,t(d.map,u.mapTransform))}function o(u,d){u.dashSize.value=d.dashSize,u.totalSize.value=d.dashSize+d.gapSize,u.scale.value=d.scale}function l(u,d,M,C){u.diffuse.value.copy(d.color),u.opacity.value=d.opacity,u.size.value=d.size*M,u.scale.value=C*.5,d.map&&(u.map.value=d.map,t(d.map,u.uvTransform)),d.alphaMap&&(u.alphaMap.value=d.alphaMap,t(d.alphaMap,u.alphaMapTransform)),d.alphaTest>0&&(u.alphaTest.value=d.alphaTest)}function c(u,d){u.diffuse.value.copy(d.color),u.opacity.value=d.opacity,u.rotation.value=d.rotation,d.map&&(u.map.value=d.map,t(d.map,u.mapTransform)),d.alphaMap&&(u.alphaMap.value=d.alphaMap,t(d.alphaMap,u.alphaMapTransform)),d.alphaTest>0&&(u.alphaTest.value=d.alphaTest)}function h(u,d){u.specular.value.copy(d.specular),u.shininess.value=Math.max(d.shininess,1e-4)}function p(u,d){d.gradientMap&&(u.gradientMap.value=d.gradientMap)}function f(u,d){u.metalness.value=d.metalness,d.metalnessMap&&(u.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,u.metalnessMapTransform)),u.roughness.value=d.roughness,d.roughnessMap&&(u.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,u.roughnessMapTransform)),d.envMap&&(u.envMapIntensity.value=d.envMapIntensity)}function m(u,d,M){u.ior.value=d.ior,d.diffuseRoughness>0&&(u.diffuseRoughness.value=d.diffuseRoughness,d.diffuseRoughnessMap&&(u.diffuseRoughnessMap.value=d.diffuseRoughnessMap,t(d.diffuseRoughnessMap,u.diffuseRoughnessMapTransform))),d.sheen>0&&(u.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),u.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(u.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,u.sheenColorMapTransform)),d.sheenRoughnessMap&&(u.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,u.sheenRoughnessMapTransform))),d.clearcoat>0&&(u.clearcoat.value=d.clearcoat,u.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(u.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,u.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(u.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,u.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(u.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,u.clearcoatNormalMapTransform),u.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Jt&&u.clearcoatNormalScale.value.negate())),d.dispersion>0&&(u.dispersion.value=d.dispersion),d.retroreflectivity>0&&(u.retroreflectivity.value=d.retroreflectivity),d.iridescence>0&&(u.iridescence.value=d.iridescence,u.iridescenceIOR.value=d.iridescenceIOR,u.iridescenceThicknessMinimum.value=d.iridescenceThicknessMinimum,u.iridescenceThicknessMaximum.value=d.iridescenceThicknessMaximum,d.iridescenceMap&&(u.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,u.iridescenceMapTransform)),d.iridescenceThicknessMap&&(u.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,u.iridescenceThicknessMapTransform))),d.transmission>0&&(u.transmission.value=d.transmission,u.transmissionSamplerMap.value=M.texture,u.transmissionSamplerSize.value.set(M.width,M.height),d.transmissionMap&&(u.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,u.transmissionMapTransform)),u.thickness.value=d.thickness,d.thicknessMap&&(u.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,u.thicknessMapTransform)),u.attenuationDistance.value=d.attenuationDistance,u.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(u.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(u.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,u.anisotropyMapTransform))),u.specularIntensity.value=d.specularIntensity,u.specularColor.value.copy(d.specularColor),d.specularColorMap&&(u.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,u.specularColorMapTransform)),d.specularIntensityMap&&(u.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,u.specularIntensityMapTransform))}function x(u,d){d.matcap&&(u.matcap.value=d.matcap)}function y(u,d){let M=e.get(d).light;u.referencePosition.value.setFromMatrixPosition(M.matrixWorld),u.nearDistance.value=M.shadow.camera.near,u.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function cy(n,e,t,i){let s={},r={};function a(M,C){let b=C.program;i.uniformBlockBinding(M,b,s[M.id])}function o(M,C){let b=s[M.id];b===void 0&&(x(M),b=l(M),s[M.id]=b,M.addEventListener("dispose",u));let _=C.program;i.updateUBOMapping(M,_);let S=e.render.frame;r[M.id]!==S&&(c(M),r[M.id]=S)}function l(M){let C=n.createBuffer(),b=M.__size,_=M.usage;return n.bindBuffer(n.UNIFORM_BUFFER,C),n.bufferData(n.UNIFORM_BUFFER,b,_),n.bindBuffer(n.UNIFORM_BUFFER,null),C}function c(M){let C=s[M.id],b=M.uniforms,_=M.__cache;n.bindBuffer(n.UNIFORM_BUFFER,C);for(let S=0,g=b.length;S<g;S++){let T=b[S];if(Array.isArray(T))for(let U=0,v=T.length;U<v;U++)h(T[U],S,U,_);else h(T,S,0,_)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function h(M,C,b,_){if(f(M,C,b,_)===!0){let S=M.__offset,g=M.value;if(Array.isArray(g)){let T=0;for(let U=0;U<g.length;U++){let v=g[U],E=y(v,!0);p(v,M.__data,T),T+=E.storage/Float32Array.BYTES_PER_ELEMENT}}else p(g,M.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,S,M.__data)}}function p(M,C,b){typeof M=="number"||typeof M=="boolean"?C[b]=M:M.isMatrix3?(C[b]=M.elements[0],C[b+1]=M.elements[1],C[b+2]=M.elements[2],C[b+3]=0,C[b+4]=M.elements[3],C[b+5]=M.elements[4],C[b+6]=M.elements[5],C[b+7]=0,C[b+8]=M.elements[6],C[b+9]=M.elements[7],C[b+10]=M.elements[8],C[b+11]=0):ArrayBuffer.isView(M)?C.set(M.subarray(0,C.length-b),b):M.toArray(C,b)}function f(M,C,b,_){let S=M.value,g=C+"_"+b;if(Array.isArray(S)){_[g]===void 0&&(_[g]=[]);let T=_[g],U=!1;for(let v=0;v<S.length;v++)m(S[v],T,v)===!0&&(U=!0);return U}return m(S,_,g)}function m(M,C,b){if(C[b]===void 0)return typeof M=="number"||typeof M=="boolean"?C[b]=M:ArrayBuffer.isView(M)?C[b]=M.slice():C[b]=M.clone(),!0;{let _=C[b];if(typeof M=="number"||typeof M=="boolean"){if(_!==M)return C[b]=M,!0}else{if(ArrayBuffer.isView(M))return!0;if(_.equals(M)===!1)return _.copy(M),!0}}return!1}function x(M){let C=M.uniforms,b=0,_=16;for(let g=0,T=C.length;g<T;g++){let U=Array.isArray(C[g])?C[g]:[C[g]];for(let v=0,E=U.length;v<E;v++){let w=U[v],L=Array.isArray(w.value)?w.value:[w.value],A=Array.isArray(C[g])||Array.isArray(w.value),P=b;for(let B=0,k=L.length;B<k;B++){let O=L[B],G=y(O,A),J=b%_,te=J%G.boundary,oe=J+te;b+=te,oe!==0&&_-oe<G.storage&&(b+=_-oe),B===0&&(P=b),b+=G.storage}let D=w.type==="int"?Int32Array:w.type==="uint"?Uint32Array:Float32Array;w.__data=new D((b-P)/Float32Array.BYTES_PER_ELEMENT),w.__offset=P}}let S=b%_;return S>0&&(b+=_-S),M.__size=b,M.__cache={},this}function y(M,C){let b={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(b.boundary=4,b.storage=4):M.isVector2?(b.boundary=8,b.storage=8):M.isVector3||M.isColor?(b.boundary=16,b.storage=12):M.isVector4?(b.boundary=16,b.storage=16):M.isMatrix3?(b.boundary=16,b.storage=48):M.isMatrix4?(b.boundary=16,b.storage=64):M.isTexture?Le("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(b.boundary=16,b.storage=M.byteLength):Le("WebGLRenderer: Unsupported uniform value type.",M),C===!0&&(b.boundary=16,b.storage=Math.ceil(b.storage/16)*16),b}function u(M){let C=M.target;C.removeEventListener("dispose",u),n.deleteBuffer(s[C.id]),delete s[C.id],delete r[C.id]}function d(){for(let M in s)n.deleteBuffer(s[M]);s={},r={}}return{bind:a,update:o,dispose:d}}var hy=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ai=null;function uy(){return ai===null&&(ai=new Ur(hy,16,16,Xi,Zn),ai.name="DFG_LUT",ai.minFilter=hn,ai.magFilter=hn,ai.wrapS=jn,ai.wrapT=jn,ai.generateMipmaps=!1,ai.needsUpdate=!0),ai}var na=class{constructor(e={}){let{canvas:t=Af(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:f=!1,outputBufferType:m=xn}=e;this.isWebGLRenderer=!0;let x;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=i.getContextAttributes().alpha}else x=a;let y=m,u=new Set([Bo,Oo,Fo]),d=new Set([xn,Yn,tr,ds,No,Do]),M=new Uint32Array(4),C=new Int32Array(4),b={textures:[],min:[],max:[],resolution:[]},_=null,S=null,g=[],T=[],U=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ri,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let v=this,E=!1,w=null,L=null,A=null,P=null;this._outputColorSpace=wn;let D=0,B=0,k=null,O=-1,G=null,J=new _t,te=new _t,oe=null,$=new De(0),ue=0,le=t.width,Ae=t.height,ve=1,Fe=null,Lt=null,Pe=new _t(0,0,le,Ae),rt=new _t(0,0,le,Ae),lt=!1,qe=new zi,Yt=new uo,Ft=!1,mn=!1,Mt=new ot,Jn=new X,kt=new _t,In={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Pn=!1;function Ln(){return k===null?ve:1}let W=i;function Nn(I,V){return t.getContext(I,V)}let gt,xt,xe,Ot,Ie,ze,F,R,Y,se,ie,ce,me,Q,ee,fe,z,ne,j,de,ae,he,Re;try{let I={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",Ce,!1),t.addEventListener("webglcontextrestored",He,!1),t.addEventListener("webglcontextcreationerror",_e,!1),W===null){let V="webgl2";if(W=Nn(V,I),W===null)throw Nn(V)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ve()}catch(I){throw t.removeEventListener("webglcontextlost",Ce,!1),t.removeEventListener("webglcontextrestored",He,!1),t.removeEventListener("webglcontextcreationerror",_e,!1),Ne("WebGLRenderer: "+I.message),I}function Ve(){gt=new bx(W),gt.init(),ae=new sy(W,gt),xt=new ux(W,gt,e,ae),xe=new ny(W,gt),xt.reversedDepthBuffer&&f&&xe.buffers.depth.setReversed(!0),L=W.createFramebuffer(),A=W.createFramebuffer(),P=W.createFramebuffer(),Ot=new wx(W),Ie=new V_,ze=new iy(W,gt,xe,Ie,xt,ae,Ot),F=new Mx(v),R=new Am(W),he=new cx(W,R),Y=new Sx(W,R,Ot,he),se=new Ax(W,Y,R,he,Ot),ne=new Ex(W,xt,ze),ee=new fx(Ie),ie=new H_(v,F,gt,xt,he,ee),ce=new ly(v,Ie),me=new W_,Q=new J_(gt),z=new lx(v,F,xe,se,x,l),fe=new ty(v,se,xt),Re=new cy(W,Ot,xt,xe),j=new hx(W,gt,Ot),de=new Tx(W,gt,Ot),Ot.programs=ie.programs,v.capabilities=xt,v.extensions=gt,v.properties=Ie,v.renderLists=me,v.shadowMap=fe,v.state=xe,v.info=Ot}y!==xn&&(U=new Cx(y,t.width,t.height,o,s,r));let re=new fh(v,W);this.xr=re,this.getContext=function(){return W},this.getContextAttributes=function(){return W.getContextAttributes()},this.forceContextLoss=function(){let I=gt.get("WEBGL_lose_context");I&&I.loseContext()},this.forceContextRestore=function(){let I=gt.get("WEBGL_lose_context");I&&I.restoreContext()},this.getPixelRatio=function(){return ve},this.setPixelRatio=function(I){I!==void 0&&(ve=I,this.setSize(le,Ae,!1))},this.getSize=function(I){return I.set(le,Ae)},this.setSize=function(I,V,K=!0){if(re.isPresenting){Le("WebGLRenderer: Can't change size while VR device is presenting.");return}le=I,Ae=V,t.width=Math.floor(I*ve),t.height=Math.floor(V*ve),K===!0&&(t.style.width=I+"px",t.style.height=V+"px"),U!==null&&U.setSize(t.width,t.height),this.setViewport(0,0,I,V)},this.getDrawingBufferSize=function(I){return I.set(le*ve,Ae*ve).floor()},this.setDrawingBufferSize=function(I,V,K){le=I,Ae=V,ve=K,t.width=Math.floor(I*K),t.height=Math.floor(V*K),this.setViewport(0,0,I,V)},this.setEffects=function(I){if(y===xn){Ne("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(I){for(let V=0;V<I.length;V++)if(I[V].isOutputPass===!0){Le("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}U.setEffects(I||[])},this.getCurrentViewport=function(I){return I.copy(J)},this.getViewport=function(I){return I.copy(Pe)},this.setViewport=function(I,V,K,q){I.isVector4?Pe.set(I.x,I.y,I.z,I.w):Pe.set(I,V,K,q),xe.viewport(J.copy(Pe).multiplyScalar(Ln()).round())},this.getScissor=function(I){return I.copy(rt)},this.setScissor=function(I,V,K,q){I.isVector4?rt.set(I.x,I.y,I.z,I.w):rt.set(I,V,K,q),xe.scissor(te.copy(rt).multiplyScalar(Ln()).round())},this.getScissorTest=function(){return lt},this.setScissorTest=function(I){xe.setScissorTest(lt=I)},this.setOpaqueSort=function(I){Fe=I},this.setTransparentSort=function(I){Lt=I},this.getClearColor=function(I){return I.copy(z.getClearColor())},this.setClearColor=function(){z.setClearColor(...arguments)},this.getClearAlpha=function(){return z.getClearAlpha()},this.setClearAlpha=function(){z.setClearAlpha(...arguments)},this.clear=function(I=!0,V=!0,K=!0){let q=0;if(I){let Z=!1;if(k!==null){let ge=k.texture.format;Z=u.has(ge)}if(Z){let ge=k.texture.type,Se=d.has(ge),pe=z.getClearColor(),Me=z.getClearAlpha(),Ee=pe.r,ke=pe.g,Ye=pe.b;Se?(M[0]=Ee,M[1]=ke,M[2]=Ye,M[3]=Me,W.clearBufferuiv(W.COLOR,0,M)):(C[0]=Ee,C[1]=ke,C[2]=Ye,C[3]=Me,W.clearBufferiv(W.COLOR,0,C))}else q|=W.COLOR_BUFFER_BIT}V&&(q|=W.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),K&&(q|=W.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),q!==0&&W.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(I){I.setRenderer(this),w=I},this.dispose=function(){t.removeEventListener("webglcontextlost",Ce,!1),t.removeEventListener("webglcontextrestored",He,!1),t.removeEventListener("webglcontextcreationerror",_e,!1),z.dispose(),me.dispose(),Q.dispose(),ze.dispose(),Ie.dispose(),F.dispose(),se.dispose(),Y.dispose(),he.dispose(),Re.dispose(),ie.dispose(),re.dispose(),re.removeEventListener("sessionstart",hu),re.removeEventListener("sessionend",uu),Ji.stop()};function Ce(I){I.preventDefault(),Ar("WebGLRenderer: Context Lost."),E=!0}function He(){Ar("WebGLRenderer: Context Restored."),E=!1;let I=Ot.autoReset,V=fe.enabled,K=fe.autoUpdate,q=fe.needsUpdate,Z=fe.type;Ve(),Ot.autoReset=I,fe.enabled=V,fe.autoUpdate=K,fe.needsUpdate=q,fe.type=Z}function _e(I){Ne("WebGLRenderer: A WebGL context could not be created. Reason: ",I.statusMessage)}function at(I){let V=I.target;V.removeEventListener("dispose",at),Ht(V)}function Ht(I){Pi(I),Ie.remove(I)}function Pi(I){let V=Ie.get(I).programs;V!==void 0&&(V.forEach(function(K){ie.releaseProgram(K)}),I.isShaderMaterial&&ie.releaseShaderCache(I))}this.renderBufferDirect=function(I,V,K,q,Z,ge){V===null&&(V=In);let Se=Z.isMesh&&Z.matrixWorld.determinantAffine()<0,pe=Op(I,V,K,q,Z);xe.setMaterial(q,Se);let Me=K.index,Ee=1;if(q.wireframe===!0){if(Me=Y.getWireframeAttribute(K),Me===void 0)return;Ee=2}let ke=K.drawRange,Ye=K.attributes.position,Te=ke.start*Ee,Ze=(ke.start+ke.count)*Ee;ge!==null&&(Te=Math.max(Te,ge.start*Ee),Ze=Math.min(Ze,(ge.start+ge.count)*Ee)),Me!==null?(Te=Math.max(Te,0),Ze=Math.min(Ze,Me.count)):Ye!=null&&(Te=Math.max(Te,0),Ze=Math.min(Ze,Ye.count));let Nt=Ze-Te;if(Nt<0||Nt===1/0)return;he.setup(Z,q,pe,K,Me);let ut,ct=j;if(Me!==null&&(ut=R.get(Me),ct=de,ct.setIndex(ut)),Z.isMesh)q.wireframe===!0?(xe.setLineWidth(q.wireframeLinewidth*Ln()),ct.setMode(W.LINES)):ct.setMode(W.TRIANGLES);else if(Z.isLine){let Qt=q.linewidth;Qt===void 0&&(Qt=1),xe.setLineWidth(Qt*Ln()),Z.isLineSegments?ct.setMode(W.LINES):Z.isLineLoop?ct.setMode(W.LINE_LOOP):ct.setMode(W.LINE_STRIP)}else Z.isPoints?ct.setMode(W.POINTS):Z.isSprite&&ct.setMode(W.TRIANGLES);if(Z.isBatchedMesh)if(gt.get("WEBGL_multi_draw"))ct.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{let Qt=Z._multiDrawStarts,we=Z._multiDrawCounts,ln=Z._multiDrawCount,it=Me?R.get(Me).bytesPerElement:1,Ki=Ie.get(q).currentProgram.getUniforms();for(let en=0;en<ln;en++)Ki.setValue(W,"_gl_DrawID",en),ct.render(Qt[en]/it,we[en])}else if(Z.isInstancedMesh)ct.renderInstances(Te,Nt,Z.count);else if(K.isInstancedBufferGeometry){let Qt=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,we=Math.min(K.instanceCount,Qt);ct.renderInstances(Te,Nt,we)}else ct.render(Te,Nt)};function cu(I,V,K,q){w!==null&&I.isNodeMaterial&&w.setObject(q,I),Ft===!0&&ee.setState(I,K,!1),I.transparent===!0&&I.side===si&&I.forceSinglePass===!1?(I.side=Jt,I.needsUpdate=!0,fr(I,V,q),I.side=Wi,I.needsUpdate=!0,fr(I,V,q),I.side=si):fr(I,V,q)}this.compile=function(I,V,K=null){K===null&&(K=I),w!==null&&w.renderStart(I,V,K),S=Q.get(K),S.init(V),T.push(S),K.traverseVisible(function(Z){Z.isLight&&Z.layers.test(V.layers)&&(S.pushLight(Z),Z.castShadow&&S.pushShadow(Z))}),I!==K&&I.traverseVisible(function(Z){Z.isLight&&Z.layers.test(V.layers)&&(S.pushLight(Z),Z.castShadow&&S.pushShadow(Z))}),S.setupLights(),w!==null&&w.updateLights(S.state.lightsArray),mn=this.localClippingEnabled,Ft=ee.init(this.clippingPlanes,mn),Ft===!0&&ee.setGlobalState(this.clippingPlanes,V),w!==null&&fe.render(S.state.shadowsArray,K,V);let q=new Set;return I.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;let ge=Z.material;if(ge)if(Array.isArray(ge))for(let Se=0;Se<ge.length;Se++){let pe=ge[Se];cu(pe,K,V,Z),q.add(pe)}else cu(ge,K,V,Z),q.add(ge)}),S=T.pop(),w!==null&&w.renderEnd(),q},this.compileAsync=function(I,V,K=null){let q=this.compile(I,V,K);return new Promise(Z=>{function ge(){if(q.forEach(function(Se){let Me=Ie.get(Se).currentProgram;(Me===void 0||Me.isReady())&&q.delete(Se)}),q.size===0){Z(I);return}setTimeout(ge,10)}gt.get("KHR_parallel_shader_compile")!==null?ge():setTimeout(ge,10)})};let $l=null;function Up(I){$l&&$l(I)}function hu(){Ji.stop()}function uu(){Ji.start()}let Ji=new ad;Ji.setAnimationLoop(Up),typeof self<"u"&&Ji.setContext(self),this.setAnimationLoop=function(I){$l=I,re.setAnimationLoop(I),I===null?Ji.stop():Ji.start()},re.addEventListener("sessionstart",hu),re.addEventListener("sessionend",uu),this.render=function(I,V){if(V!==void 0&&V.isCamera!==!0){Ne("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;w!==null&&w.renderStart(I,V);let K=re.enabled===!0&&re.isPresenting===!0,q=U!==null&&(k===null||K)&&U.begin(v,k);if(I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),re.enabled===!0&&re.isPresenting===!0&&(U===null||U.isCompositing()===!1)&&(re.cameraAutoUpdate===!0&&re.updateCamera(V),V=re.getCamera()),I.isScene===!0&&I.onBeforeRender(v,I,V,k),S=Q.get(I,T.length),S.init(V),S.state.textureUnits=ze.getTextureUnits(),T.push(S),Mt.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),V.isArrayCamera?Yt.setFromArrayCamera(V):qe.setFromProjectionMatrix(Mt,Un,V.reversedDepth),mn=this.localClippingEnabled,Ft=ee.init(this.clippingPlanes,mn),_=me.get(I,g.length),_.init(),g.push(_),this.info.render.frame++,re.enabled===!0&&re.isPresenting===!0){let Se=v.xr.getDepthSensingMesh();Se!==null&&Jl(Se,V,-1/0,v.sortObjects)}Jl(I,V,0,v.sortObjects),_.finish(),w!==null&&w.updateLights(S.state.lightsArray),v.sortObjects===!0&&_.sort(Fe,Lt),Pn=re.enabled===!1||re.isPresenting===!1||re.hasDepthSensing()===!1,Pn&&z.addToRenderList(_,I),this.info.autoReset===!0&&this.info.reset(),Ft===!0&&ee.beginShadows();let Z=S.state.shadowsArray;if(fe.render(Z,I,V),Ft===!0&&ee.endShadows(),(q&&U.hasRenderPass())===!1){let Se=_.opaque,pe=_.transmissive;if(S.setupLights(),V.isArrayCamera){let Me=V.cameras;if(pe.length>0)for(let Ee=0,ke=Me.length;Ee<ke;Ee++){let Ye=Me[Ee];du(Se,pe,I,Ye)}Pn&&z.render(I);for(let Ee=0,ke=Me.length;Ee<ke;Ee++){let Ye=Me[Ee];fu(_,I,Ye,Ye.viewport)}}else pe.length>0&&du(Se,pe,I,V),Pn&&z.render(I),fu(_,I,V)}k!==null&&B===0&&(ze.updateMultisampleRenderTarget(k),ze.updateRenderTargetMipmap(k)),q&&U.end(v),I.isScene===!0&&I.onAfterRender(v,I,V),he.resetDefaultState(),O=-1,G=null,T.pop(),T.length>0?(S=T[T.length-1],ze.setTextureUnits(S.state.textureUnits),Ft===!0&&ee.setGlobalState(v.clippingPlanes,S.state.camera)):S=null,g.pop(),g.length>0?_=g[g.length-1]:_=null,w!==null&&w.renderEnd()};function Jl(I,V,K,q){if(I.visible===!1)return;if(I.layers.test(V.layers)){if(I.isGroup)K=I.renderOrder;else if(I.isLOD)I.autoUpdate===!0&&I.update(V);else if(I.isLight)S.pushLight(I),I.castShadow&&S.pushShadow(I);else if(I.isSprite){let Se=V.isArrayCamera?Yt:qe;if(!I.frustumCulled||I.intersectsFrustum(Se)){q&&kt.setFromMatrixPosition(I.matrixWorld).applyMatrix4(Mt);let pe=se.update(I),Me=I.material;Me.visible&&_.push(I,pe,Me,K,kt.z,null,V)}}else if(I.isMesh||I.isLine||I.isPoints){let Se=V.isArrayCamera?Yt:qe;if(!I.frustumCulled||I.intersectsFrustum(Se)){let pe=se.update(I),Me=I.material;if(q&&(I.boundingSphere!==void 0?(I.boundingSphere===null&&I.computeBoundingSphere(),kt.copy(I.boundingSphere.center)):(pe.boundingSphere===null&&pe.computeBoundingSphere(),kt.copy(pe.boundingSphere.center)),kt.applyMatrix4(I.matrixWorld).applyMatrix4(Mt)),Array.isArray(Me)){let Ee=pe.groups;for(let ke=0,Ye=Ee.length;ke<Ye;ke++){let Te=Ee[ke],Ze=Me[Te.materialIndex];Ze&&Ze.visible&&_.push(I,pe,Ze,K,kt.z,Te,V)}}else Me.visible&&_.push(I,pe,Me,K,kt.z,null,V)}}}let ge=I.children;for(let Se=0,pe=ge.length;Se<pe;Se++)Jl(ge[Se],V,K,q)}function fu(I,V,K,q){let{opaque:Z,transmissive:ge,transparent:Se}=I;S.setupLightsView(K),Ft===!0&&ee.setGlobalState(v.clippingPlanes,K),q&&xe.viewport(J.copy(q)),Z.length>0&&ba(Z,V,K),ge.length>0&&ba(ge,V,K),Se.length>0&&ba(Se,V,K),xe.buffers.depth.setTest(!0),xe.buffers.depth.setMask(!0),xe.buffers.color.setMask(!0),xe.setPolygonOffset(!1)}function du(I,V,K,q){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[q.id]===void 0){let Te=gt.has("EXT_color_buffer_half_float")||gt.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[q.id]=new En(1,1,{generateMipmaps:!0,type:Te?Zn:xn,minFilter:Mi,samples:Math.max(4,xt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:$e.workingColorSpace})}let ge=S.state.transmissionRenderTarget[q.id],Se=q.viewport||J;ge.setSize(Se.z*v.transmissionResolutionScale,Se.w*v.transmissionResolutionScale);let pe=v.getRenderTarget(),Me=v.getActiveCubeFace(),Ee=v.getActiveMipmapLevel();v.setRenderTarget(ge),v.getClearColor($),ue=v.getClearAlpha(),ue<1&&v.setClearColor(16777215,.5),v.clear(),Pn&&z.render(K);let ke=v.toneMapping;v.toneMapping=ri;let Ye=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),S.setupLightsView(q),Ft===!0&&ee.setGlobalState(v.clippingPlanes,q),ba(I,K,q),ze.updateMultisampleRenderTarget(ge),ze.updateRenderTargetMipmap(ge),gt.has("WEBGL_multisampled_render_to_texture")===!1){let Te=!1;for(let Ze=0,Nt=V.length;Ze<Nt;Ze++){let ut=V[Ze],{object:ct,geometry:Qt,material:we,group:ln}=ut;if(we.side===si&&ct.layers.test(q.layers)){let it=we.side;we.side=Jt,we.needsUpdate=!0,pu(ct,K,q,Qt,we,ln),we.side=it,we.needsUpdate=!0,Te=!0}}Te===!0&&(ze.updateMultisampleRenderTarget(ge),ze.updateRenderTargetMipmap(ge))}v.setRenderTarget(pe,Me,Ee),v.setClearColor($,ue),Ye!==void 0&&(q.viewport=Ye),v.toneMapping=ke}function ba(I,V,K){let q=V.isScene===!0?V.overrideMaterial:null;for(let Z=0,ge=I.length;Z<ge;Z++){let Se=I[Z],{object:pe,geometry:Me,group:Ee}=Se,ke=Se.material;ke.allowOverride===!0&&q!==null&&(ke=q),pe.layers.test(K.layers)&&pu(pe,V,K,Me,ke,Ee)}}function pu(I,V,K,q,Z,ge){w!==null&&Z.isNodeMaterial&&w.setObject(I,Z),I.onBeforeRender(v,V,K,q,Z,ge),I.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,I.matrixWorld),I.normalMatrix.getNormalMatrix(I.modelViewMatrix),Z.onBeforeRender(v,V,K,q,I,ge),Z.transparent===!0&&Z.side===si&&Z.forceSinglePass===!1?(Z.side=Jt,Z.needsUpdate=!0,v.renderBufferDirect(K,V,q,Z,I,ge),Z.side=Wi,Z.needsUpdate=!0,v.renderBufferDirect(K,V,q,Z,I,ge),Z.side=si):v.renderBufferDirect(K,V,q,Z,I,ge),I.onAfterRender(v,V,K,q,Z,ge)}function mu(I){let V=0;for(let K of I)K.texture!==null&&V++;return V}function fr(I,V,K){V.isScene!==!0&&(V=In);let q=Ie.get(I),Z=S.state.lights,ge=S.state.shadowsArray,Se=Z.state.version,pe=ie.getParameters(I,Z.state,ge,V,K,S.state.lightProbeGridArray),Me=ie.getProgramCacheKey(pe),Ee=q.programs;q.environment=I.isMeshStandardMaterial||I.isMeshLambertMaterial||I.isMeshPhongMaterial?V.environment:null,q.fog=V.fog;let ke=I.isMeshStandardMaterial||I.isMeshLambertMaterial&&!I.envMap||I.isMeshPhongMaterial&&!I.envMap;q.envMap=F.get(I.envMap||q.environment,ke),q.envMapRotation=q.environment!==null&&I.envMap===null?V.environmentRotation:I.envMapRotation,Ee===void 0&&(I.addEventListener("dispose",at),Ee=new Map,q.programs=Ee,q.programVariants=new Map);let Ye=Ee.get(Me);if(Ye!==void 0){if(q.currentProgram===Ye&&q.lightsStateVersion===Se)return xu(I,pe),Ye}else pe.uniforms=ie.getUniforms(I),w!==null&&I.isNodeMaterial&&w.build(I,K,pe),I.onBeforeCompile(pe,v),Ye=ie.acquireProgram(pe,Me),Ee.set(Me,Ye),q.uniforms=pe.uniforms;let Te=q.uniforms;return(!I.isShaderMaterial&&!I.isRawShaderMaterial||I.clipping===!0)&&(Te.clippingPlanes=ee.uniform),xu(I,pe),q.needsLights=zp(I),q.lightsStateVersion=Se,q.needsLights&&(Te.ambientLightColor.value=Z.state.ambient,Te.lightProbe.value=Z.state.probe,Te.sunLights.value=Z.state.sun,Te.sunLightShadows.value=Z.state.sunShadow,Te.directionalLights.value=Z.state.directional,Te.directionalLightShadows.value=Z.state.directionalShadow,Te.spotLights.value=Z.state.spot,Te.spotLightShadows.value=Z.state.spotShadow,Te.rectAreaLights.value=Z.state.rectArea,Te.ltc_1.value=Z.state.rectAreaLTC1,Te.ltc_2.value=Z.state.rectAreaLTC2,Te.pointLights.value=Z.state.point,Te.pointLightShadows.value=Z.state.pointShadow,Te.hemisphereLights.value=Z.state.hemi,Te.sunShadowMatrix.value=Z.state.sunShadowMatrix,Te.sunShadowCascade.value=Z.state.sunShadowCascade,Te.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Te.spotLightMatrix.value=Z.state.spotLightMatrix,Te.spotLightMap.value=Z.state.spotLightMap,Te.pointShadowMatrix.value=Z.state.pointShadowMatrix),q.numLightProbeGrids=mu(S.state.lightProbeGridArray),q.currentProgram=Ye,q.uniformsList=null,Ye}function Fp(I,V,K,q,Z){let ge=Ie.get(I),Se=ge.currentProgram.id+","+q+","+Z,pe=ge.programVariants.get(Se);return pe===void 0?(pe=fr(I,V,K),ge.programVariants.set(Se,pe)):(ge.currentProgram=pe,ge.uniformsList=null,ge.outputColorSpace=q,ge.toneMapping=Z),pe}function gu(I){if(I.uniformsList===null){let V=I.currentProgram.getUniforms();I.uniformsList=ir.seqWithValue(V.seq,I.uniforms)}return I.uniformsList}function xu(I,V){let K=Ie.get(I);K.outputColorSpace=V.outputColorSpace,K.batching=V.batching,K.batchingColor=V.batchingColor,K.instancing=V.instancing,K.instancingColor=V.instancingColor,K.instancingMorph=V.instancingMorph,K.skinning=V.skinning,K.morphTargets=V.morphTargets,K.morphNormals=V.morphNormals,K.morphColors=V.morphColors,K.morphTargetsCount=V.morphTargetsCount,K.numClippingPlanes=V.numClippingPlanes,K.numIntersection=V.numClipIntersection,K.vertexAlphas=V.vertexAlphas,K.vertexTangents=V.vertexTangents,K.toneMapping=V.toneMapping}function Op(I,V,K,q,Z){V.isScene!==!0&&(V=In),ze.resetTextureUnits();let ge=V.fog,Se=q.isMeshStandardMaterial||q.isMeshLambertMaterial||q.isMeshPhongMaterial?V.environment:null,pe=k===null?v.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:$e.workingColorSpace,Me=q.isMeshStandardMaterial||q.isMeshLambertMaterial&&!q.envMap||q.isMeshPhongMaterial&&!q.envMap,Ee=F.get(q.envMap||Se,Me),ke=q.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,Ye=!!K.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Te=!!K.morphAttributes.position,Ze=!!K.morphAttributes.normal,Nt=!!K.morphAttributes.color,ut=ri;q.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(ut=v.toneMapping);let ct=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,Qt=ct!==void 0?ct.length:0,we=Ie.get(q),ln=S.state.lights;if(Ft===!0&&(mn===!0||I!==G)){let bt=I===G&&q.id===O;ee.setState(q,I,bt)}let it=!1,Ki=!1;q.version===we.__version?we.needsLights&&we.lightsStateVersion!==ln.state.version||Z.isBatchedMesh&&we.batching===!1||!Z.isBatchedMesh&&we.batching===!0||Z.isBatchedMesh&&we.batchingColor===!0&&Z._colorsTexture===null||Z.isBatchedMesh&&we.batchingColor===!1&&Z._colorsTexture!==null||Z.isInstancedMesh&&we.instancing===!1||!Z.isInstancedMesh&&we.instancing===!0||Z.isSkinnedMesh&&we.skinning===!1||!Z.isSkinnedMesh&&we.skinning===!0||Z.isInstancedMesh&&we.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&we.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&we.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&we.instancingMorph===!1&&Z.morphTexture!==null||we.envMap!==Ee||q.fog===!0&&we.fog!==ge||we.numClippingPlanes!==void 0&&(we.numClippingPlanes!==ee.numPlanes||we.numIntersection!==ee.numIntersection)||we.vertexAlphas!==ke||we.vertexTangents!==Ye||we.morphTargets!==Te||we.morphNormals!==Ze||we.morphColors!==Nt||we.morphTargetsCount!==Qt||we.numLightProbeGrids!==mu(S.state.lightProbeGridArray)?it=!0:(we.outputColorSpace!==pe||we.toneMapping!==ut)&&(Ki=!0):(it=!0,we.__version=q.version);let en=we.currentProgram;(it===!0||Ki===!0)&&(en=Ki===!0?Fp(q,V,Z,pe,ut):fr(q,V,Z),w&&q.isNodeMaterial&&w.onUpdateProgram(q,en,we));let Sa=!1,Li=!1,ji=!1,tt=en.getUniforms(),Zt=we.uniforms;if(xe.useProgram(en.program)&&(Sa=!0,Li=!0,ji=!0),q.id!==O&&(O=q.id,Li=!0),Sa||G!==I){xe.buffers.depth.getReversed()&&I.reversedDepth!==!0&&(I._reversedDepth=!0,I.updateProjectionMatrix()),tt.setValue(W,"projectionMatrix",I.projectionMatrix),tt.setValue(W,"viewMatrix",I.matrixWorldInverse);let Vt=tt.map.cameraPosition;Vt!==void 0&&Vt.setValue(W,Jn.setFromMatrixPosition(I.matrixWorld)),xt.logarithmicDepthBuffer&&tt.setValue(W,"logDepthBufFC",2/(Math.log(I.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&tt.setValue(W,"isOrthographic",I.isOrthographicCamera===!0),G!==I&&(G=I,Li=!0,ji=!0)}if(we.needsLights&&(ln.state.sunShadowMap.length>0&&tt.setValue(W,"sunShadowMap",ln.state.sunShadowMap,ze),ln.state.directionalShadowMap.length>0&&tt.setValue(W,"directionalShadowMap",ln.state.directionalShadowMap,ze),ln.state.spotShadowMap.length>0&&tt.setValue(W,"spotShadowMap",ln.state.spotShadowMap,ze),ln.state.pointShadowMap.length>0&&tt.setValue(W,"pointShadowMap",ln.state.pointShadowMap,ze)),Z.isSkinnedMesh){tt.setOptional(W,Z,"bindMatrix"),tt.setOptional(W,Z,"bindMatrixInverse");let bt=Z.skeleton;bt&&(bt.boneTexture===null&&bt.computeBoneTexture(),tt.setValue(W,"boneTexture",bt.boneTexture,ze))}Z.isBatchedMesh&&(tt.setOptional(W,Z,"batchingTexture"),tt.setValue(W,"batchingTexture",Z._matricesTexture,ze),tt.setOptional(W,Z,"batchingIdTexture"),tt.setValue(W,"batchingIdTexture",Z._indirectTexture,ze),tt.setOptional(W,Z,"batchingColorTexture"),Z._colorsTexture!==null&&tt.setValue(W,"batchingColorTexture",Z._colorsTexture,ze));let Hn=K.morphAttributes;if((Hn.position!==void 0||Hn.normal!==void 0||Hn.color!==void 0)&&ne.update(Z,K,en),(Li||we.receiveShadow!==Z.receiveShadow)&&(we.receiveShadow=Z.receiveShadow,tt.setValue(W,"receiveShadow",Z.receiveShadow)),(q.isMeshStandardMaterial||q.isMeshLambertMaterial||q.isMeshPhongMaterial)&&q.envMap===null&&V.environment!==null&&(Zt.envMapIntensity.value=V.environmentIntensity),Zt.dfgLUT!==void 0&&(Zt.dfgLUT.value=uy()),Li){if(tt.setValue(W,"toneMappingExposure",v.toneMappingExposure),we.needsLights&&Bp(Zt,ji),ge&&q.fog===!0&&ce.refreshFogUniforms(Zt,ge),ce.refreshMaterialUniforms(Zt,q,ve,Ae,S.state.transmissionRenderTarget[I.id]),we.needsLights&&we.numLightProbeGrids>0){let bt=b,Vt=0;for(let hi of S.state.lightProbeGridArray)hi.texture!==null&&(bt.textures[Vt]=hi.texture,bt.min[Vt]=hi.boundingBox.min,bt.max[Vt]=hi.boundingBox.max,bt.resolution[Vt]=hi.resolution,Vt++);for(let hi in bt)bt[hi].length=Vt;Zt.probesSH.value=bt.textures,Zt.probesMin.value=bt.min,Zt.probesMax.value=bt.max,Zt.probesResolution.value=bt.resolution}ir.upload(W,gu(we),Zt,ze)}if(q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(ir.upload(W,gu(we),Zt,ze),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&tt.setValue(W,"center",Z.center),tt.setValue(W,"modelViewMatrix",Z.modelViewMatrix),tt.setValue(W,"normalMatrix",Z.normalMatrix),tt.setValue(W,"modelMatrix",Z.matrixWorld),q.uniformsGroups!==void 0){let bt=q.uniformsGroups;for(let Vt=0,hi=bt.length;Vt<hi;Vt++){let yu=bt[Vt];Re.update(yu,en),Re.bind(yu,en)}}return en}function Bp(I,V){I.ambientLightColor.needsUpdate=V,I.lightProbe.needsUpdate=V,I.sunLights.needsUpdate=V,I.sunLightShadows.needsUpdate=V,I.directionalLights.needsUpdate=V,I.directionalLightShadows.needsUpdate=V,I.pointLights.needsUpdate=V,I.pointLightShadows.needsUpdate=V,I.spotLights.needsUpdate=V,I.spotLightShadows.needsUpdate=V,I.rectAreaLights.needsUpdate=V,I.hemisphereLights.needsUpdate=V}function zp(I){return I.isMeshLambertMaterial||I.isMeshToonMaterial||I.isMeshPhongMaterial||I.isMeshStandardMaterial||I.isShadowMaterial||I.isShaderMaterial&&I.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return k},this.setRenderTargetTextures=function(I,V,K){let q=Ie.get(I);q.__autoAllocateDepthBuffer=I.resolveDepthBuffer===!1,q.__autoAllocateDepthBuffer===!1&&(q.__useRenderToTexture=!1),Ie.get(I.texture).__webglTexture=V,Ie.get(I.depthTexture).__webglTexture=q.__autoAllocateDepthBuffer?void 0:K,q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(I,V){let K=Ie.get(I);K.__webglFramebuffer=V,K.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(I,V=0,K=0){k=I,D=V,B=K;let q=null,Z=!1,ge=!1;if(I){let pe=Ie.get(I);if(pe.__useDefaultFramebuffer!==void 0){xe.bindFramebuffer(W.FRAMEBUFFER,pe.__webglFramebuffer),J.copy(I.viewport),te.copy(I.scissor),oe=I.scissorTest,xe.viewport(J),xe.scissor(te),xe.setScissorTest(oe),O=-1;return}else if(pe.__webglFramebuffer===void 0)ze.setupRenderTarget(I);else if(pe.__hasExternalTextures)ze.rebindTextures(I,Ie.get(I.texture).__webglTexture,Ie.get(I.depthTexture).__webglTexture);else if(I.depthBuffer){let ke=I.depthTexture;if(pe.__boundDepthTexture!==ke){if(ke!==null&&Ie.has(ke)&&(I.width!==ke.image.width||I.height!==ke.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ze.setupDepthRenderbuffer(I)}}let Me=I.texture;(Me.isData3DTexture||Me.isDataArrayTexture||Me.isCompressedArrayTexture)&&(ge=!0);let Ee=Ie.get(I).__webglFramebuffer;I.isWebGLCubeRenderTarget?(Array.isArray(Ee[V])?q=Ee[V][K]:q=Ee[V],Z=!0):I.samples>0&&ze.useMultisampledRTT(I)===!1?q=Ie.get(I).__webglMultisampledFramebuffer:Array.isArray(Ee)?q=Ee[K]:q=Ee,J.copy(I.viewport),te.copy(I.scissor),oe=I.scissorTest}else J.copy(Pe).multiplyScalar(ve).floor(),te.copy(rt).multiplyScalar(ve).floor(),oe=lt;if(K!==0&&(q=L),xe.bindFramebuffer(W.FRAMEBUFFER,q)&&xe.drawBuffers(I,q),xe.viewport(J),xe.scissor(te),xe.setScissorTest(oe),Z){let pe=Ie.get(I.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_CUBE_MAP_POSITIVE_X+V,pe.__webglTexture,K)}else if(ge){let pe=V;for(let Me=0;Me<I.textures.length;Me++){let Ee=Ie.get(I.textures[Me]);W.framebufferTextureLayer(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0+Me,Ee.__webglTexture,K,pe)}}else if(I!==null&&K!==0){let pe=Ie.get(I.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,pe.__webglTexture,K)}O=-1};function _u(I){let V=Ie.get(I);return(V.__readFormat!==I.format||V.__readType!==I.type)&&(V.__readFormat=I.format,V.__readType=I.type,V.__formatReadable=xt.textureFormatReadable(I.format),V.__typeReadable=xt.textureTypeReadable(I.type)),V}this.readRenderTargetPixels=function(I,V,K,q,Z,ge,Se,pe=0){if(!(I&&I.isWebGLRenderTarget)){Ne("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Me=Ie.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&Se!==void 0&&(Me=Me[Se],Array.isArray(Me)&&(Me=Me[0])),Me){xe.bindFramebuffer(W.FRAMEBUFFER,Me);try{let Ee=I.textures[pe],ke=Ee.format,Ye=Ee.type;I.textures.length>1&&W.readBuffer(W.COLOR_ATTACHMENT0+pe);let Te=_u(Ee);if(Te.__formatReadable===!1){Ne("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Te.__typeReadable===!1){Ne("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=I.width-q&&K>=0&&K<=I.height-Z&&W.readPixels(V,K,q,Z,ae.convert(ke),ae.convert(Ye),ge)}finally{let Ee=k!==null?Ie.get(k).__webglFramebuffer:null;xe.bindFramebuffer(W.FRAMEBUFFER,Ee)}}},this.readRenderTargetPixelsAsync=async function(I,V,K,q,Z,ge,Se,pe=0){if(!(I&&I.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Me=Ie.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&Se!==void 0&&(Me=Me[Se],Array.isArray(Me)&&(Me=Me[0])),Me)if(V>=0&&V<=I.width-q&&K>=0&&K<=I.height-Z){xe.bindFramebuffer(W.FRAMEBUFFER,Me);let Ee=I.textures[pe],ke=Ee.format,Ye=Ee.type;I.textures.length>1&&W.readBuffer(W.COLOR_ATTACHMENT0+pe);let Te=_u(Ee);if(Te.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Te.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ze=W.createBuffer();W.bindBuffer(W.PIXEL_PACK_BUFFER,Ze),W.bufferData(W.PIXEL_PACK_BUFFER,ge.byteLength,W.STREAM_READ),W.readPixels(V,K,q,Z,ae.convert(ke),ae.convert(Ye),0),W.bindBuffer(W.PIXEL_PACK_BUFFER,null);let Nt=k!==null?Ie.get(k).__webglFramebuffer:null;xe.bindFramebuffer(W.FRAMEBUFFER,Nt);let ut=W.fenceSync(W.SYNC_GPU_COMMANDS_COMPLETE,0);return W.flush(),await Cf(W,ut,4),W.bindBuffer(W.PIXEL_PACK_BUFFER,Ze),W.getBufferSubData(W.PIXEL_PACK_BUFFER,0,ge),W.bindBuffer(W.PIXEL_PACK_BUFFER,null),W.deleteBuffer(Ze),W.deleteSync(ut),ge}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(I,V=null,K=0){let q=Math.pow(2,-K),Z=Math.floor(I.image.width*q),ge=Math.floor(I.image.height*q),Se=V!==null?V.x:0,pe=V!==null?V.y:0;ze.setTexture2D(I,0),W.copyTexSubImage2D(W.TEXTURE_2D,K,0,0,Se,pe,Z,ge),xe.unbindTexture()},this.copyTextureToTexture=function(I,V,K=null,q=null,Z=0,ge=0){let Se,pe,Me,Ee,ke,Ye,Te,Ze,Nt,ut=I.isCompressedTexture?I.mipmaps[ge]:I.image;if(K!==null)Se=K.max.x-K.min.x,pe=K.max.y-K.min.y,Me=K.isBox3?K.max.z-K.min.z:1,Ee=K.min.x,ke=K.min.y,Ye=K.isBox3?K.min.z:0;else{let tt=Math.pow(2,-Z);Se=Math.floor(ut.width*tt),pe=Math.floor(ut.height*tt),I.isDataArrayTexture?Me=ut.depth:I.isData3DTexture?Me=Math.floor(ut.depth*tt):Me=1,Ee=0,ke=0,Ye=0}q!==null?(Te=q.x,Ze=q.y,Nt=q.z):(Te=0,Ze=0,Nt=0);let ct=ae.convert(V.format),Qt=ae.convert(V.type),we;V.isData3DTexture?(ze.setTexture3D(V,0),we=W.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(ze.setTexture2DArray(V,0),we=W.TEXTURE_2D_ARRAY):(ze.setTexture2D(V,0),we=W.TEXTURE_2D),xe.activeTexture(W.TEXTURE0),xe.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,V.flipY),xe.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),xe.pixelStorei(W.UNPACK_ALIGNMENT,V.unpackAlignment);let ln=xe.getParameter(W.UNPACK_ROW_LENGTH),it=xe.getParameter(W.UNPACK_IMAGE_HEIGHT),Ki=xe.getParameter(W.UNPACK_SKIP_PIXELS),en=xe.getParameter(W.UNPACK_SKIP_ROWS),Sa=xe.getParameter(W.UNPACK_SKIP_IMAGES);xe.pixelStorei(W.UNPACK_ROW_LENGTH,ut.width),xe.pixelStorei(W.UNPACK_IMAGE_HEIGHT,ut.height),xe.pixelStorei(W.UNPACK_SKIP_PIXELS,Ee),xe.pixelStorei(W.UNPACK_SKIP_ROWS,ke),xe.pixelStorei(W.UNPACK_SKIP_IMAGES,Ye);let Li=I.isDataArrayTexture||I.isData3DTexture,ji=V.isDataArrayTexture||V.isData3DTexture;if(I.isDepthTexture){let tt=Ie.get(I),Zt=Ie.get(V),Hn=Ie.get(tt.__renderTarget),bt=Ie.get(Zt.__renderTarget);xe.bindFramebuffer(W.READ_FRAMEBUFFER,Hn.__webglFramebuffer),xe.bindFramebuffer(W.DRAW_FRAMEBUFFER,bt.__webglFramebuffer);for(let Vt=0;Vt<Me;Vt++)Li&&(W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,Ie.get(I).__webglTexture,Z,Ye+Vt),W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,Ie.get(V).__webglTexture,ge,Nt+Vt)),W.blitFramebuffer(Ee,ke,Ee+Se,ke+pe,Te,Ze,Te+Se,Ze+pe,W.DEPTH_BUFFER_BIT,W.NEAREST);xe.bindFramebuffer(W.READ_FRAMEBUFFER,null),xe.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else if(Z!==0||I.isRenderTargetTexture||Ie.has(I)){let tt=Ie.get(I),Zt=Ie.get(V);xe.bindFramebuffer(W.READ_FRAMEBUFFER,A),xe.bindFramebuffer(W.DRAW_FRAMEBUFFER,P);for(let Hn=0;Hn<Me;Hn++)Li?W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,tt.__webglTexture,Z,Ye+Hn):W.framebufferTexture2D(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,tt.__webglTexture,Z),ji?W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,Zt.__webglTexture,ge,Nt+Hn):W.framebufferTexture2D(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,Zt.__webglTexture,ge),Z!==0?W.blitFramebuffer(Ee,ke,Ee+Se,ke+pe,Te,Ze,Te+Se,Ze+pe,W.COLOR_BUFFER_BIT,W.NEAREST):ji?W.copyTexSubImage3D(we,ge,Te,Ze,Nt+Hn,Ee,ke,Se,pe):W.copyTexSubImage2D(we,ge,Te,Ze,Ee,ke,Se,pe);xe.bindFramebuffer(W.READ_FRAMEBUFFER,null),xe.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else ji?I.isDataTexture||I.isData3DTexture?W.texSubImage3D(we,ge,Te,Ze,Nt,Se,pe,Me,ct,Qt,ut.data):V.isCompressedArrayTexture?W.compressedTexSubImage3D(we,ge,Te,Ze,Nt,Se,pe,Me,ct,ut.data):W.texSubImage3D(we,ge,Te,Ze,Nt,Se,pe,Me,ct,Qt,ut):I.isDataTexture?W.texSubImage2D(W.TEXTURE_2D,ge,Te,Ze,Se,pe,ct,Qt,ut.data):I.isCompressedTexture?W.compressedTexSubImage2D(W.TEXTURE_2D,ge,Te,Ze,ut.width,ut.height,ct,ut.data):W.texSubImage2D(W.TEXTURE_2D,ge,Te,Ze,Se,pe,ct,Qt,ut);xe.pixelStorei(W.UNPACK_ROW_LENGTH,ln),xe.pixelStorei(W.UNPACK_IMAGE_HEIGHT,it),xe.pixelStorei(W.UNPACK_SKIP_PIXELS,Ki),xe.pixelStorei(W.UNPACK_SKIP_ROWS,en),xe.pixelStorei(W.UNPACK_SKIP_IMAGES,Sa),ge===0&&V.generateMipmaps===!0&&V.mipmapsAutoUpdate===!0&&W.generateMipmap(we),xe.unbindTexture()},this.initRenderTarget=function(I){Ie.get(I).__webglFramebuffer===void 0&&ze.setupRenderTarget(I)},this.initTexture=function(I){I.isCubeTexture?ze.setTextureCube(I,0):I.isData3DTexture?ze.setTexture3D(I,0):I.isDataArrayTexture||I.isCompressedArrayTexture?ze.setTexture2DArray(I,0):ze.setTexture2D(I,0),xe.unbindTexture()},this.resetState=function(){D=0,B=0,k=null,xe.reset(),he.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Un}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=$e._getDrawingBufferColorSpace(e),t.unpackColorSpace=$e._getUnpackColorSpace()}};function fy(n,e,t){let i=n.n,s=[];for(let r=0;r<n.layers;r++){let a=new Uint8Array(i*i),o=new Float32Array(i*i);for(let l=0;l<i;l++)for(let c=0;c<i;c++){let h=((r*i+l)*t+c)*4,p=l*i+c;a[p]=e[h],o[p]=(e[h+1]<<8|e[h+2])/100-2}s.push({cls:a,h:o})}return s}async function dh(n,e="maps/"){let t=await(await fetch(e+n+".json")).json(),i=new Image;i.src=e+n+".png",await i.decode();let s=document.createElement("canvas");s.width=i.width,s.height=i.height;let r=s.getContext("2d",{willReadFrequently:!0});r.drawImage(i,0,0);let a=r.getImageData(0,0,i.width,i.height).data;return{info:t,layers:fy(t,a,i.width)}}var sa=n=>Math.round(n/.08)*.08;function ph(n,e){let t=n.n,i=n.cell,s=e.length,r=t*t,a=s>1,o={n:t,cell:i,L:s,info:n,size:t*i,top:[],bot:[],cls:[],flags:new Uint8Array(r),voidKill:a},l=new Uint8Array(r);for(let h of e)for(let p=0;p<r;p++){let f=h.cls[p]&3;(f===1||f===2)&&(l[p]=1)}let c=new Uint8Array(r);{let p=new Uint8Array(r);for(let f=0;f<t;f++)for(let m=0;m<t;m++){let x=0;for(let y=-5;y<=5&&!x;y++){let u=m+y;u>=0&&u<t&&l[f*t+u]&&(x=1)}p[f*t+m]=x}for(let f=0;f<t;f++)for(let m=0;m<t;m++){let x=0;for(let y=-5;y<=5&&!x;y++){let u=f+y;u>=0&&u<t&&p[u*t+m]&&(x=1)}c[f*t+m]=x}}for(let h of e)dy(t,h.cls,h.h);for(let h=0;h<s;h++){let{cls:p,h:f}=e[h],m=new Float32Array(r).fill(NaN),x=new Float32Array(r).fill(NaN),y=new Uint8Array(r),u=a?h===0?3.95:4.6:6.2,d=py(t,p,f,7),M=my(t,p,f);for(let C=0;C<r;C++){let b=p[C],_=b&3;o.flags[C]|=b&-4;let S=f[C],g=NaN,T=NaN;if(_===1)g=sa(S);else if(_===2)g=sa(M[C]+1.05);else if(_===3||_===0&&!a&&c[C]){let U=d[C]>-1e8?d[C]:S;g=sa(Math.ceil((U+u)/.6)*.6),a&&(g=sa(U+u))}else _===0&&a&&h===0&&c[C]&&gy(e,C);isNaN(g)||(T=h===0?-30:sa(S)-.36,y[C]=_===0?3:_),m[C]=g,x[C]=T}o.top.push(m),o.bot.push(x),o.cls.push(y)}if(a){let h=o.top[0],p=o.bot[1],f=o.cls[0];for(let m=0;m<r;m++)f[m]===3&&!isNaN(p[m])&&h[m]>p[m]&&(h[m]=p[m])}return o.idx=(h,p)=>{let f=Math.floor(h/i),m=Math.floor(p/i);return f<0||m<0||f>=t||m>=t?-1:m*t+f},o}var xd=1.7;function dy(n,e,t){let i=n*n,s=new Uint8Array(i);for(let l=0;l<i;l++)s[l]=(e[l]&3)===1?1:0;let r=new Uint8Array(i);for(let l=0;l<n;l++)for(let c=0;c<n;c++){let h=l*n+c;s[h]&&(c+1<n&&s[h+1]&&Math.abs(t[h]-t[h+1])<=xd&&(r[h]|=1),l+1<n&&s[h+n]&&Math.abs(t[h]-t[h+n])<=xd&&(r[h]|=2))}let a=Float32Array.from(t),o=new Float32Array(i);for(let l=0;l<48;l++){for(let h=0;h<n;h++)for(let p=0;p<n;p++){let f=h*n+p;if(!s[f]){o[f]=a[f];continue}let m=a[f]*2,x=2;r[f]&1&&(m+=a[f+1],x++),r[f]&2&&(m+=a[f+n],x++),p>0&&r[f-1]&1&&(m+=a[f-1],x++),h>0&&r[f-n]&2&&(m+=a[f-n],x++),o[f]=m/x}let c=a;a=o,o=c}for(let l=0;l<i;l++)s[l]&&(t[l]=a[l])}function py(n,e,t,i){let s=n*n,r=new Float32Array(s).fill(-1e9),a=new Float32Array(s).fill(-1e9);for(let o=0;o<s;o++)(e[o]&3)===1&&(r[o]=t[o]);for(let o=0;o<n;o++)for(let l=0;l<n;l++){let c=-1e9;for(let h=Math.max(0,l-i);h<=Math.min(n-1,l+i);h++){let p=r[o*n+h];p>c&&(c=p)}a[o*n+l]=c}for(let o=0;o<n;o++)for(let l=0;l<n;l++){let c=-1e9;for(let h=Math.max(0,o-i);h<=Math.min(n-1,o+i);h++){let p=a[h*n+l];p>c&&(c=p)}r[o*n+l]=c}return r}function my(n,e,t){let i=n*n,s=new Float32Array(i),r=new Uint8Array(i),a=[],o=[];for(let l=0;l<i;l++){if(r[l]||(e[l]&3)!==2)continue;a.length=0,o.length=0,a.push(l),r[l]=1;let c=-1e9;for(;a.length;){let h=a.pop();o.push(h),t[h]>c&&(c=t[h]);let p=h%n,f=(h-p)/n;for(let m of[p>0?h-1:-1,p<n-1?h+1:-1,f>0?h-n:-1,f<n-1?h+n:-1])m>=0&&!r[m]&&(e[m]&3)===2&&(r[m]=1,a.push(m))}if(o.length>900)for(let h of o)s[h]=t[h];else for(let h of o)s[h]=c}return s}function gy(n,e){for(let t of n){let i=t.cls[e]&3;if(i===1||i===2)return!0}return!1}function Ti(n,e,t,i,s,r=.4){for(let[a,o]of mh){let l=n.idx(e+a*r,t+o*r);if(l<0)return!0;for(let c=0;c<n.L;c++){let h=n.top[c][l];if(!isNaN(h)&&h>i+.5&&n.bot[c][l]<i+s)return!0}}return!1}var mh=[[0,0],[1,1],[1,-1],[-1,1],[-1,-1],[1,0],[-1,0],[0,1],[0,-1]];function gh(n,e,t,i,s=.38){let r=-1/0;for(let[a,o]of mh){let l=n.idx(e+a*s,t+o*s);if(!(l<0))for(let c=0;c<n.L;c++){let h=n.top[c][l];isNaN(h)||h<=i+.5&&h>r&&n.bot[c][l]<i+.1+.5&&(r=h)}}return r}function Sl(n,e,t,i,s=.38){let r=1/0;for(let[a,o]of mh){let l=n.idx(e+a*s,t+o*s);if(!(l<0))for(let c=0;c<n.L;c++){let h=n.bot[c][l];isNaN(h)||h>i+.2&&h<r&&(r=h)}}return r}function rr(n,e,t,i=1e9){let s=n.idx(e,t);if(s<0)return-1/0;let r=-1/0;for(let a=0;a<n.L;a++){let o=n.top[a][s];!isNaN(o)&&o<=i&&o>r&&(r=o)}return r}function qi(n,e,t,i,s,r,a,o=200){let l=n.cell,c=n.n,h=Math.floor(e/l),p=Math.floor(i/l),f=s>0?1:-1,m=a>0?1:-1,x=s!==0?Math.abs(l/s):1/0,y=a!==0?Math.abs(l/a):1/0,u=s!==0?(s>0?(h+1)*l-e:e-h*l)/Math.abs(s):1/0,d=a!==0?(a>0?(p+1)*l-i:i-p*l)/Math.abs(a):1/0,M=0,C=-1;for(let b=0;b<4e3;b++){if(h<0||p<0||h>=c||p>=c)return null;let _=Math.min(u,d,o),S=p*c+h,g=t+r*M,T=t+r*_;for(let U=0;U<n.L;U++){let v=n.top[U][S];if(isNaN(v))continue;let E=n.bot[U][S];if(g>=E&&g<=v&&b>0)return{t:M,nx:C===0?-f:0,ny:0,nz:C===1?-m:0,cell:S,layer:U};if(g>=E&&g<=v&&b===0)return{t:0,nx:0,ny:1,nz:0,cell:S,layer:U};if(g>v&&T<=v&&r<0)return{t:(v-t)/r,nx:0,ny:1,nz:0,cell:S,layer:U};if(g<E&&T>=E&&r>0)return{t:(E-t)/r,nx:0,ny:-1,nz:0,cell:S,layer:U}}if(_>=o)return null;M=_,u<d?(h+=f,u+=x,C=0):(p+=m,d+=y,C=1)}return null}function Tl(n,e,t,i){let s=n.idx(e,i);if(s<0)return!1;for(let r=0;r<n.L;r++){let a=n.top[r][s];if(!isNaN(a)&&t<=a&&t>=n.bot[r][s])return!0}return!1}function li(n,e,t){let i=n.idx(e,t);return i<0?0:n.flags[i]}function xh(n,e){let t=[];for(let i=0;i<n.n*n.n;i++)n.flags[i]&e&&t.push(i);return t}var _d={dust2:{floor:[.8,.66,.45],floorHi:[.86,.73,.52],wall:[.86,.76,.58],wallTop:[.92,.84,.68],obst:[.62,.45,.27],obst2:[.72,.64,.48],sky:["#7fb7e8","#f3e2c2"],fog:"#e9d8b8",sun:"#fff1d6",ground:"#c9a873"},mirage:{floor:[.72,.64,.53],floorHi:[.8,.7,.58],wall:[.85,.74,.58],wallTop:[.8,.55,.4],obst:[.55,.4,.28],obst2:[.66,.6,.52],sky:["#6fa9e0","#f6dcb6"],fog:"#efd9bb",sun:"#fff0d8",ground:"#c8ad86"},vertigo:{floor:[.6,.6,.58],floorHi:[.68,.67,.63],wall:[.74,.73,.69],wallTop:[.86,.66,.2],obst:[.85,.62,.15],obst2:[.52,.53,.55],sky:["#3f87d6","#cfe4f5"],fog:"#c9dbe9",sun:"#ffffff",ground:"#6d7f8f"}},wl=n=>_d[n]||_d.dust2;function yd(n,e){let t=n*374761393+e*668265263|0;return t=(t^t>>>13)*1274126177,((t^t>>>16)>>>0)/4294967296}function bd(n,e){let t=wl(e),i=n.n,s=n.cell,r=[],a=[],o=[],l=(m,x,y,u,d,M,C,b)=>{for(let _ of[m,x,y,m,y,u])r.push(_[0],_[1],_[2]),a.push(d,M,C),o.push(b[0],b[1],b[2])},c=(m,x,y,u)=>{let d=x[0]-m[0],M=x[1]-m[1],C=x[2]-m[2],b=y[0]-m[0],_=y[1]-m[1],S=y[2]-m[2],g=M*S-C*_,T=C*b-d*S,U=d*_-M*b,v=Math.hypot(g,T,U)||1;g/=v,T/=v,U/=v;for(let E of[m,x,y])r.push(E[0],E[1],E[2]),a.push(g,T,U),o.push(u[0],u[1],u[2])},h=(m,x,y,u=.06)=>{let d=1+(yd(x,y)-.5)*2*u;return[m[0]*d,m[1]*d,m[2]*d]};for(let m=0;m<n.L;m++){let x=n.top[m],y=n.bot[m],u=n.cls[m],d=new Uint8Array(i*i),M=(S,g,T,U)=>{let v=0,E=0;for(let w=-1;w<=0;w++)for(let L=-1;L<=0;L++){let A=T+L,P=U+w;if(A<0||P<0||A>=i||P>=i)continue;let D=P*i+A;u[D]!==1||isNaN(x[D])||Math.abs(x[D]-g)>.6||(v+=x[D],E++)}return E?v/E:g},C=new Uint8Array(i*i);for(let S=0;S<i;S++)for(let g=0;g<i;g++){let T=S*i+g;if(u[T]!==1||isNaN(x[T]))continue;let U=x[T],v=M(T,U,g,S),E=M(T,U,g+1,S),w=M(T,U,g,S+1),L=M(T,U,g+1,S+1);if(Math.abs(v-U)<.004&&Math.abs(E-U)<.004&&Math.abs(w-U)<.004&&Math.abs(L-U)<.004){d[T]=1;continue}C[T]=1;let A=g*s,P=(g+1)*s,D=S*s,B=(S+1)*s,k=h(vd(t.floor,t.floorHi,Md(U/6)),g>>2,S>>2,.05);if(c([A,v,D],[A,w,B],[P,L,B],k),c([A,v,D],[P,L,B],[P,E,D],k),m>0){let O=y[T];l([A,O,D],[P,O,D],[P,O,B],[A,O,B],0,-1,0,ra(t.floor,.55))}}let b=S=>isNaN(x[S])||C[S]?null:u[S]*1e4+Math.round(x[S]*100);for(let S=0;S<i;S++)for(let g=0;g<i;g++){let T=S*i+g;if(C[T])continue;let U=b(T);if(U===null)continue;let v=1;for(;g+v<i&&!C[T+v]&&b(T+v)===U;)v++;let E=1;e:for(;S+E<i;){for(let O=0;O<v;O++){let G=(S+E)*i+g+O;if(C[G]||b(G)!==U)break e}E++}for(let O=0;O<E;O++)for(let G=0;G<v;G++)C[(S+O)*i+g+G]=1;let w=x[T],L=g*s,A=(g+v)*s,P=S*s,D=(S+E)*s,B=u[T],k=B===1?vd(t.floor,t.floorHi,Md(w/6)):B===2?yd(g,S)<.5?t.obst:t.obst2:t.wallTop;if(k=h(k,g,S),l([L,w,P],[L,w,D],[A,w,D],[A,w,P],0,1,0,k),m>0){let O=y[T];l([L,O,P],[A,O,P],[A,O,D],[L,O,D],0,-1,0,ra(t.floor,.55))}}let _=[[1,0],[-1,0],[0,1],[0,-1]];for(let S=0;S<4;S++){let[g,T]=_[S],U=g!==0?"z":"x";for(let v=0;v<i;v++){let E=null,w=()=>{if(!E)return;let{s:L,e:A,y0:P,y1:D,cl:B,line:k}=E,O,G,J,te;if(U==="z"){let le=(g>0?k+1:k)*s;O=[le,P,L*s],G=[le,P,(A+1)*s],J=[le,D,(A+1)*s],te=[le,D,L*s],g<0&&([O,G,J,te]=[G,O,te,J])}else{let le=(T>0?k+1:k)*s;O=[(A+1)*s,P,le],G=[L*s,P,le],J=[L*s,D,le],te=[(A+1)*s,D,le],T<0&&([O,G,J,te]=[G,O,te,J])}let oe=B===2?t.obst:B===1?ra(t.floor,.86):t.wall,$=h(ra(oe,S<2?.93:.82),L,k,.04),ue=ra($,D-P>1.2?.72:.85);for(let le of[O,te,J,O,J,G]){r.push(le[0],le[1],le[2]),a.push(g,0,T);let Ae=le[1]===P?ue:$;o.push(Ae[0],Ae[1],Ae[2])}E=null};for(let L=0;L<i;L++){let A=U==="z"?v:L,P=U==="z"?L:v,D=P*i+A,B=null;if(!isNaN(x[D])){let k=A+g,O=P+T,G=k<0||O<0||k>=i||O>=i?-1:O*i+k,J=x[D],te=y[D];if(G>=0&&!isNaN(x[G]))u[D]===1&&u[G]===1&&Math.abs(x[D]-x[G])<=.6||x[G]>=J&&y[G]<=te?J=te:y[G]<=te+.01&&(te=Math.max(te,x[G]));else if(m===0){let oe=1e9;for(let $=0;$<n.L;$++)G>=0&&!isNaN(n.top[$][G])&&(oe=Math.min(oe,n.top[$][G]));te=oe<1e9?Math.max(te,oe):n.voidKill?-25:Math.max(te,J-8)}J-te>.01&&(B={y0:Math.round(te*100)/100,y1:Math.round(J*100)/100,cl:u[D]})}B&&E&&E.y0===B.y0&&E.y1===B.y1&&E.cl===B.cl&&E.e===L-1?E.e=L:(w(),B&&(E={s:L,e:L,...B,line:v}))}w()}}}let p=new rn;p.setAttribute("position",new ft(r,3)),p.setAttribute("normal",new ft(a,3)),p.setAttribute("color",new ft(o,3)),p.computeBoundingSphere();let f=new je(p,new gn({vertexColors:!0}));return f.matrixAutoUpdate=!1,{mesh:f,tris:r.length/9,theme:t}}var vd=(n,e,t)=>[n[0]+(e[0]-n[0])*t,n[1]+(e[1]-n[1])*t,n[2]+(e[2]-n[2])*t],ra=(n,e)=>[n[0]*e,n[1]*e,n[2]*e],Md=n=>Math.max(0,Math.min(1,n));function Sd(n,e,t){let i=wl(t),s=e.size;n.background=new De(i.sky[1]),n.fog=new Ir(i.fog,60,t==="vertigo"?420:300);let r=new je(new as(900,24,12),new On({side:Jt,depthWrite:!1,fog:!1,uniforms:{a:{value:new De(i.sky[0])},b:{value:new De(i.sky[1])}},vertexShader:"varying float vy; void main(){ vy = normalize(position).y; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.); }",fragmentShader:`uniform vec3 a; uniform vec3 b; varying float vy; void main(){ gl_FragColor = vec4(mix(b, a, smoothstep(-0.05, 0.6, vy)), 1.);
#include <colorspace_fragment>
}`}));r.position.set(s/2,0,s/2),r.frustumCulled=!1,n.add(r),n.add(new Gi("#ffffff",i.ground,.75));let a=new cs(i.sun,1.35);a.position.set(s/2+140,260,s/2+90),a.target.position.set(s/2,0,s/2),n.add(a,a.target);let o=new Wr("#ffffff",.18);n.add(o);let l=xy(7);if(t==="vertigo"){let c=new dn(1,1,1),h=new gn({color:"#8a9db0"}),p=new Fn(c,h,140),f=new At;for(let x=0;x<140;x++){let y=l()*Math.PI*2,u=120+l()*320,d=40+l()*140;f.position.set(s/2+Math.cos(y)*u,-160+d/2,s/2+Math.sin(y)*u),f.scale.set(14+l()*26,d,14+l()*26),f.updateMatrix(),p.setMatrixAt(x,f.matrix)}n.add(p);let m=new je(new ii(3e3,3e3),new gn({color:i.ground}));m.rotation.x=-Math.PI/2,m.position.set(s/2,-160,s/2),n.add(m)}else{let c=new je(new ii(3e3,3e3),new gn({color:i.ground}));c.rotation.x=-Math.PI/2,c.position.set(s/2,-.6,s/2),n.add(c);let h=new ss(1,1,6,1),p=new gn({color:i.ground,flatShading:!0}),f=new Fn(h,p,40),m=new At;for(let x=0;x<40;x++){let y=x/40*Math.PI*2,u=260+l()*160,d=25+l()*50;m.position.set(s/2+Math.cos(y)*u,d/2-1,s/2+Math.sin(y)*u),m.scale.set(60+l()*60,d,60+l()*60),m.rotation.y=l()*3,m.updateMatrix(),f.setMatrixAt(x,m.matrix)}n.add(f)}}function xy(n){return()=>{n|=0,n=n+1831565813|0;let e=Math.imul(n^n>>>15,1|n);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}var wi=.0254,We={gravity:800*wi,jump:301.993*wi,accel:5.5,airAccel:12,friction:5.2,stop:80*wi,airCap:30*wi,hStand:72*wi,hCrouch:54*wi,eyeStand:64*wi,eyeCrouch:46*wi,walk:.52,crouchMul:.34,r:.4};function El(n,e,t,i=0){return{x:n,y:e,z:t,vx:0,vy:0,vz:0,yaw:i,pitch:0,duck:0,onGround:!0,landT:0,h:We.hStand,alive:!0,jumpHeld:!1}}var on=n=>We.eyeStand+(We.eyeCrouch-We.eyeStand)*n.duck;function Al(n,e,t,i,s){let r=t.crouch?1:0;if(r>e.duck)e.duck=Math.min(1,e.duck+i*8);else if(r<e.duck){let u=Math.max(0,e.duck-i*8),d=We.hStand+(We.hCrouch-We.hStand)*u;Sl(n,e.x,e.z,e.y)>=e.y+d&&(e.duck=u)}let a=e.h;e.h=We.hStand+(We.hCrouch-We.hStand)*e.duck,!e.onGround&&e.h<a&&(e.y+=(a-e.h)*.5);let o=s*(e.duck>.5?We.crouchMul:t.walk?We.walk:1),l=Math.sin(e.yaw),c=Math.cos(e.yaw),h=-l*t.f+c*t.s,p=-c*t.f-l*t.s,f=Math.hypot(h,p);if(f>1e-6?(h/=f,p/=f):o=0,e.onGround)if(t.jump&&!e.jumpHeld&&Sl(n,e.x,e.z,e.y)>e.y+e.h+.05)e.vy=We.jump,e.onGround=!1,e.jumpHeld=!0;else{let u=Math.hypot(e.vx,e.vz);if(u>.001){let d=Math.max(u,We.stop)*We.friction*i*(e.landT>0?1.4:1),M=Math.max(0,u-d)/u;e.vx*=M,e.vz*=M}Td(e,h,p,o,We.accel,i)}e.onGround||Td(e,h,p,Math.min(o,We.airCap),We.airAccel,i,o),t.jump||(e.jumpHeld=!1),e.landT>0&&(e.landT-=i);let m=e.x+e.vx*i;Ti(n,m,e.z,e.y,e.h,We.r)?e.vx=0:e.x=m;let x=e.z+e.vz*i;Ti(n,e.x,x,e.y,e.h,We.r)?e.vz=0:e.z=x;let y=gh(n,e.x,e.z,e.y,We.r-.02);if(e.onGround&&(y>=e.y-.5&&y>-1/0?(e.y=y,e.vy=0):e.onGround=!1),!e.onGround){e.vy-=We.gravity*i,e.y+=e.vy*i;let u=Sl(n,e.x,e.z,e.y-e.vy*i);e.y+e.h>u&&e.vy>0&&(e.y=u-e.h,e.vy=0);let d=gh(n,e.x,e.z,e.y-e.vy*i,We.r-.02);if(e.vy<=0&&e.y<=d){let M=-e.vy;return e.y=d,e.vy=0,e.onGround=!0,e.landT=.12,M}}return 0}function Td(n,e,t,i,s,r,a){let o=n.vx*e+n.vz*t,l=i-o;if(l<=0)return;let c=s*r*(a||i);c>l&&(c=l),n.vx+=c*e,n.vz+=c*t}function _h(n){let e=n/wi;return e>580?Math.round((e-580)*(100/444)):0}function _y(n){let e=n.h,t=e/We.hStand;return[{part:"head",y0:e-.27*t,y1:e,r:.13},{part:"chest",y0:e-.62*t,y1:e-.27*t,r:.22},{part:"stomach",y0:e-.9*t,y1:e-.62*t,r:.2},{part:"leg",y0:0,y1:e-.9*t,r:.18}]}function wd(n,e,t,i,s,r,a,o){let l=null;for(let c of _y(n)){let h=n.x,p=n.z,f=e-h,m=i-p,x=s*s+a*a,y=2*(f*s+m*a),u=f*f+m*m-c.r*c.r,d;if(x<1e-9){if(u>0)continue;d=0}else{let C=y*y-4*x*u;if(C<0||(d=(-y-Math.sqrt(C))/(2*x),d<0&&(d=(-y+Math.sqrt(C))/(2*x)),d<0))continue}let M=t+r*d;M<n.y+c.y0||M>n.y+c.y1||d<=o&&(!l||d<l.t)&&(l={t:d,part:c.part})}return l}var yy=1.15;function Ad(n){let t=n.n/2,i=t*t,s=n.cell*2,r=[];for(let b=0;b<n.L;b++)r.push(new Float32Array(i).fill(NaN));for(let b=0;b<t;b++)for(let _=0;_<t;_++){let S=(_+.5)*s,g=(b+.5)*s,T=n.idx(S,g);for(let U=0;U<n.L;U++){let v=n.top[U][T];isNaN(v)||n.cls[U][T]===3||Ti(n,S,g,v,We.hCrouch+.05,.36)||(r[U][b*t+_]=v)}}let a={W:n,k:2,m:t,c:s,H:r,L:n.L};a.node=(b,_)=>b*i+_,a.pos=b=>{let _=Math.floor(b/i),S=b%i;return[(S%t+.5)*s,r[_][S],(Math.floor(S/t)+.5)*s,_]},a.nearest=(b,_,S)=>{let g=Math.floor(b/s),T=Math.floor(S/s),U=-1,v=1e9;for(let E=0;E<=6&&U<0;E++)for(let w=-E;w<=E;w++)for(let L=-E;L<=E;L++){if(Math.max(Math.abs(L),Math.abs(w))!==E)continue;let A=g+L,P=T+w;if(A<0||P<0||A>=t||P>=t)continue;let D=P*t+A;for(let B=0;B<n.L;B++){let k=r[B][D];if(isNaN(k)||a.main&&!a.main[B*i+D])continue;let O=Math.abs(k-_)*3+Math.hypot(L,w);O<v&&(v=O,U=B*i+D)}}return U};let o=[1,-1,0,0,1,1,-1,-1],l=[0,0,1,-1,1,-1,1,-1];a.neighbors=(b,_)=>{_.length=0;let S=Math.floor(b/i),g=b%i,T=g%t,U=(g-T)/t,v=r[S][g];for(let E=0;E<8;E++){let w=T+o[E],L=U+l[E];if(w<0||L<0||w>=t||L>=t)continue;let A=L*t+w;if(!(E>=4&&(!c(S,U*t+w,v)||!c(S,L*t+T,v))))for(let P=0;P<n.L;P++){let D=r[P][A];if(isNaN(D))continue;let B=D-v;B>yy||-B>2.2||B>.5&&E>=4||_.push(P*i+A,(E>=4?1.414:1)+(B>.5?4:0))}}return _};function c(b,_,S){for(let g=0;g<n.L;g++){let T=r[g][_];if(!isNaN(T)&&Math.abs(T-S)<=.5)return!0}return!1}let h=new Uint8Array(n.L*i);for(let b=0;b<n.L;b++)for(let _=0;_<i;_++){if(isNaN(r[b][_]))continue;let S=_%t,g=(_-S)/t,T=0;for(let U=0;U<8;U++){let v=S+o[U],E=g+l[U];(v<0||E<0||v>=t||E>=t||!c(b,E*t+v,r[b][_]))&&T++}h[b*i+_]=T}a.edge=h,a.N=i;let p=n.L*i,f=[],m=Array.from({length:0}),x=new Map,y=new Uint8Array(p),u=new Uint8Array(p),d=xh(n,32),M=-1;for(let b of d){let _=(b%n.n+.5)*n.cell,S=(Math.floor(b/n.n)+.5)*n.cell,g=Math.floor(S/a.c)*t+Math.floor(_/a.c);for(let T=n.L-1;T>=0;T--)if(!isNaN(r[T][g])){M=T*i+g;break}if(M>=0)break}if(M<0)for(let b=0;b<p&&M<0;b++)isNaN(r[Math.floor(b/i)][b%i])||(M=b);let C=[M];for(y[M]=1;C.length;){let b=C.pop();a.neighbors(b,f);for(let _=0;_<f.length;_+=2){let S=f[_],g=x.get(S);g||x.set(S,g=[]),g.push(b),y[S]||(y[S]=1,C.push(S))}}for(C=[M],u[M]=1;C.length;){let b=C.pop(),_=x.get(b);if(_)for(let S of _)u[S]||(u[S]=1,C.push(S))}a.main=new Uint8Array(p);for(let b=0;b<p;b++)a.main[b]=y[b]&u[b];return a}var gs={a:[],f:[]};function Rd(n,e,t,i=6e4){if(e<0||t<0)return null;let s=n.L*n.N;(!n.g||n.g.length!==s)&&(n.g=new Float32Array(s),n.came=new Int32Array(s),n.seen=new Uint32Array(s),n.closed=new Uint32Array(s),n.stamp=0);let r=n.g,a=n.came,o=n.seen,l=n.closed,c=++n.stamp,[h,,p]=n.pos(t),f=u=>{let d=n.pos(u);return Math.hypot(d[0]-h,d[2]-p)/n.c};gs.a.length=0,gs.f.length=0,Ed(e,f(e)),r[e]=0,a[e]=-1,o[e]=c;let m=[],x=0;for(;gs.a.length&&x++<i;){let u=vy();if(u===t)break;if(l[u]!==c){l[u]=c,n.neighbors(u,m);for(let d=0;d<m.length;d+=2){let M=m[d],C=r[u]+m[d+1]+n.edge[M]*.35;o[M]===c&&C>=r[M]||(o[M]=c,r[M]=C,a[M]=u,Ed(M,C+f(M)))}}}if(o[t]!==c)return null;let y=[];for(let u=t;u!==-1;u=a[u])y.push(n.pos(u));return y.reverse(),My(n,y)}function Ed(n,e){let t=gs.a,i=gs.f;t.push(n),i.push(e);let s=t.length-1;for(;s>0;){let r=s-1>>1;if(i[r]<=i[s])break;[t[r],t[s]]=[t[s],t[r]],[i[r],i[s]]=[i[s],i[r]],s=r}}function vy(){let n=gs.a,e=gs.f,t=n[0],i=n.pop(),s=e.pop();if(n.length){n[0]=i,e[0]=s;let r=0;for(;;){let a=2*r+1,o=a+1,l=r;if(a<n.length&&e[a]<e[l]&&(l=a),o<n.length&&e[o]<e[l]&&(l=o),l===r)break;[n[l],n[r]]=[n[r],n[l]],[e[l],e[r]]=[e[r],e[l]],r=l}}return t}function My(n,e){if(e.length<3)return e;let t=[e[0]];for(let i=1;i<e.length-1;i++){let s=t[t.length-1],r=e[i+1],a=[e[i][0]-s[0],e[i][2]-s[2]],o=[r[0]-e[i][0],r[2]-e[i][2]];(Math.abs(a[0]*o[1]-a[1]*o[0])>1e-4||Math.abs(e[i][1]-s[1])>.3||Math.hypot(e[i][0]-s[0],e[i][2]-s[2])>n.c*6)&&t.push(e[i])}return t.push(e[e.length-1]),t}function oa(n,e){let t=n.W,i=new Set;for(let s of xh(t,e)){let r=(s%t.n+.5)*t.cell,a=(Math.floor(s/t.n)+.5)*t.cell,o=Math.floor(r/n.c),l=Math.floor(a/n.c),c=l*n.m+o;for(let h=t.L-1;h>=0;h--)if(!isNaN(n.H[h][c])&&n.main[h*n.N+c]){i.add(h*n.N+c);break}}return[...i]}var Je=n=>({auto:!1,pellets:1,hs:4,range:8192,rangeMod:.98,spread:.004,move:.12,kick:.6,sway:.4,kickCap:12,recover:9,scope:null,...n}),Xe={knife:Je({name:"Cuchillo",cat:"knife",side:"both",price:0,reward:1500,dmg:40,ap:.85,rpm:150,mag:0,reserve:0,speed:250,range:64,auto:!0}),glock:Je({name:"Glock-18",cat:"pistol",side:"T",price:200,reward:300,dmg:30,ap:.47,rpm:400,mag:20,reserve:120,reload:2.2,speed:240,rangeMod:.85,spread:.007,move:.05,kick:.9,sway:.4,kickCap:5}),usp:Je({name:"USP-S",cat:"pistol",side:"CT",price:200,reward:300,dmg:35,ap:.505,rpm:352,mag:12,reserve:24,reload:2.2,speed:240,rangeMod:.91,spread:.004,move:.045,kick:1.1,sway:.3,kickCap:5,silent:!0}),p2000:Je({name:"P2000",cat:"pistol",side:"CT",price:200,reward:300,dmg:35,ap:.505,rpm:352,mag:13,reserve:52,reload:2.2,speed:240,rangeMod:.91,spread:.005,move:.045,kick:1.1,sway:.3,kickCap:5}),dualies:Je({name:"Dual Berettas",cat:"pistol",side:"both",price:300,reward:300,dmg:38,ap:.575,rpm:500,mag:30,reserve:120,reload:3.8,speed:240,rangeMod:.79,spread:.009,move:.05,kick:1,sway:.5,kickCap:6}),p250:Je({name:"P250",cat:"pistol",side:"both",price:300,reward:300,dmg:38,ap:.64,rpm:400,mag:13,reserve:26,reload:2.2,speed:240,rangeMod:.85,spread:.007,move:.05,kick:1.3,sway:.4,kickCap:6}),tec9:Je({name:"Tec-9",cat:"pistol",side:"T",price:500,reward:300,dmg:33,ap:.903,rpm:500,mag:18,reserve:90,reload:2.5,speed:240,rangeMod:.831,spread:.009,move:.04,kick:1.2,sway:.5,kickCap:7}),fiveseven:Je({name:"Five-SeveN",cat:"pistol",side:"CT",price:500,reward:300,dmg:32,ap:.9115,rpm:400,mag:20,reserve:100,reload:2.2,speed:240,rangeMod:.81,spread:.007,move:.045,kick:1.1,sway:.4,kickCap:6}),cz75:Je({name:"CZ75-Auto",cat:"pistol",side:"both",price:500,reward:100,dmg:31,ap:.776,rpm:600,mag:12,reserve:12,reload:2.7,speed:240,rangeMod:.85,spread:.008,move:.05,kick:1.1,sway:.6,kickCap:8,auto:!0}),deagle:Je({name:"Desert Eagle",cat:"pistol",side:"both",price:700,reward:300,dmg:53,ap:.932,rpm:267,mag:7,reserve:35,reload:2.2,speed:230,rangeMod:.81,spread:.006,move:.1,kick:3.4,sway:.6,kickCap:8,recover:7}),r8:Je({name:"R8 Revolver",cat:"pistol",side:"both",price:600,reward:300,dmg:86,ap:.932,rpm:120,mag:8,reserve:8,reload:2.3,speed:220,rangeMod:.94,spread:.006,move:.1,kick:3.6,sway:.4,kickCap:8}),mac10:Je({name:"MAC-10",cat:"smg",side:"T",price:1050,reward:600,dmg:29,ap:.575,rpm:800,mag:30,reserve:100,reload:2.6,speed:240,rangeMod:.8,auto:!0,spread:.009,move:.025,kick:.6,sway:.7,kickCap:7}),mp9:Je({name:"MP9",cat:"smg",side:"CT",price:1250,reward:600,dmg:26,ap:.6,rpm:857,mag:30,reserve:120,reload:2.1,speed:240,rangeMod:.87,auto:!0,spread:.008,move:.025,kick:.55,sway:.6,kickCap:7}),mp7:Je({name:"MP7",cat:"smg",side:"both",price:1500,reward:600,dmg:29,ap:.625,rpm:750,mag:30,reserve:120,reload:3.1,speed:220,rangeMod:.85,auto:!0,spread:.007,move:.03,kick:.5,sway:.5,kickCap:7}),mp5:Je({name:"MP5-SD",cat:"smg",side:"both",price:1500,reward:600,dmg:27,ap:.625,rpm:750,mag:30,reserve:120,reload:2.6,speed:235,rangeMod:.85,auto:!0,spread:.007,move:.025,kick:.45,sway:.5,kickCap:6,silent:!0}),ump:Je({name:"UMP-45",cat:"smg",side:"both",price:1200,reward:600,dmg:35,ap:.65,rpm:666,mag:25,reserve:100,reload:3.5,speed:230,rangeMod:.75,auto:!0,spread:.008,move:.03,kick:.6,sway:.5,kickCap:7}),p90:Je({name:"P90",cat:"smg",side:"both",price:2350,reward:300,dmg:26,ap:.69,rpm:857,mag:50,reserve:100,reload:3.3,speed:230,rangeMod:.86,auto:!0,spread:.008,move:.03,kick:.45,sway:.6,kickCap:7}),bizon:Je({name:"PP-Bizon",cat:"smg",side:"both",price:1400,reward:600,dmg:27,ap:.575,rpm:750,mag:64,reserve:120,reload:2.4,speed:240,rangeMod:.8,auto:!0,spread:.009,move:.03,kick:.45,sway:.6,kickCap:6}),nova:Je({name:"Nova",cat:"heavy",side:"both",price:1050,reward:900,dmg:26,ap:.5,rpm:68,mag:8,reserve:32,reload:4,speed:220,rangeMod:.7,pellets:9,spread:.06,move:.04,kick:3,sway:.5,range:3e3}),xm1014:Je({name:"XM1014",cat:"heavy",side:"both",price:2e3,reward:900,dmg:20,ap:.8,rpm:171,mag:7,reserve:32,reload:3.5,speed:215,rangeMod:.7,pellets:6,spread:.065,move:.04,kick:2.5,sway:.6,range:3500}),sawedoff:Je({name:"Sawed-Off",cat:"heavy",side:"T",price:1100,reward:900,dmg:32,ap:.75,rpm:71,mag:7,reserve:32,reload:3.6,speed:210,rangeMod:.45,pellets:8,spread:.09,move:.04,kick:3,sway:.6,range:1400}),mag7:Je({name:"MAG-7",cat:"heavy",side:"CT",price:1300,reward:900,dmg:30,ap:.75,rpm:71,mag:5,reserve:32,reload:2.5,speed:225,rangeMod:.45,pellets:8,spread:.05,move:.04,kick:3,sway:.5,range:1400}),m249:Je({name:"M249",cat:"heavy",side:"both",price:5200,reward:300,dmg:32,ap:.8,rpm:750,mag:100,reserve:200,reload:5.7,speed:195,rangeMod:.97,auto:!0,spread:.009,move:.15,kick:.6,sway:.8,kickCap:9}),negev:Je({name:"Negev",cat:"heavy",side:"both",price:1700,reward:300,dmg:35,ap:.71,rpm:800,mag:150,reserve:300,reload:5.7,speed:150,rangeMod:.97,auto:!0,spread:.012,move:.15,kick:.7,sway:.6,kickCap:6}),galil:Je({name:"Galil AR",cat:"rifle",side:"T",price:1800,reward:300,dmg:30,ap:.775,rpm:666,mag:35,reserve:90,reload:3,speed:215,auto:!0,spread:.005,move:.14,kick:.62,sway:.5,kickCap:10}),famas:Je({name:"FAMAS",cat:"rifle",side:"CT",price:2050,reward:300,dmg:30,ap:.7,rpm:666,mag:25,reserve:90,reload:3.3,speed:220,auto:!0,spread:.005,move:.14,kick:.6,sway:.5,kickCap:10}),ak47:Je({name:"AK-47",cat:"rifle",side:"T",price:2700,reward:300,dmg:36,ap:.775,rpm:600,mag:30,reserve:90,reload:2.5,speed:215,auto:!0,spread:.0049,move:.16,kick:.82,sway:.75,kickCap:13}),m4a4:Je({name:"M4A4",cat:"rifle",side:"CT",price:3100,reward:300,dmg:33,ap:.7,rpm:666,mag:30,reserve:90,reload:3.1,speed:225,auto:!0,spread:.0042,move:.15,kick:.68,sway:.6,kickCap:11}),m4a1s:Je({name:"M4A1-S",cat:"rifle",side:"CT",price:2900,reward:300,dmg:38,ap:.7,rpm:600,mag:20,reserve:80,reload:3.1,speed:225,auto:!0,spread:.0035,move:.15,kick:.58,sway:.45,kickCap:9,silent:!0}),sg553:Je({name:"SG 553",cat:"rifle",side:"T",price:3e3,reward:300,dmg:30,ap:1,rpm:545,mag:30,reserve:90,reload:2.8,speed:210,auto:!0,spread:.0045,move:.15,kick:.72,sway:.6,kickCap:11,scope:[1.8]}),aug:Je({name:"AUG",cat:"rifle",side:"CT",price:3300,reward:300,dmg:28,ap:.9,rpm:600,mag:30,reserve:90,reload:3.8,speed:220,auto:!0,spread:.004,move:.15,kick:.62,sway:.5,kickCap:10,scope:[1.8]}),ssg08:Je({name:"SSG 08",cat:"sniper",side:"both",price:1700,reward:300,dmg:88,ap:.85,rpm:48,mag:10,reserve:90,reload:3.7,speed:230,rangeMod:.99,spread:.035,scoped:.0012,move:.12,kick:3,sway:.2,kickCap:4,scope:[3.6,9]}),awp:Je({name:"AWP",cat:"sniper",side:"both",price:4750,reward:100,dmg:115,ap:.975,rpm:41,mag:5,reserve:30,reload:3.7,speed:200,rangeMod:.99,spread:.08,scoped:9e-4,move:.2,kick:4.5,sway:.2,kickCap:5,scope:[2.25,9]}),g3sg1:Je({name:"G3SG1",cat:"sniper",side:"T",price:5e3,reward:300,dmg:80,ap:.825,rpm:240,mag:20,reserve:90,reload:4.7,speed:215,rangeMod:.98,auto:!0,spread:.05,scoped:.0018,move:.2,kick:1.6,sway:.4,kickCap:6,scope:[2.25,9]}),scar20:Je({name:"SCAR-20",cat:"sniper",side:"CT",price:5e3,reward:300,dmg:80,ap:.825,rpm:240,mag:20,reserve:90,reload:3.1,speed:215,rangeMod:.98,auto:!0,spread:.05,scoped:.0018,move:.2,kick:1.6,sway:.4,kickCap:6,scope:[2.25,9]}),zeus:Je({name:"Zeus x27",cat:"equip",side:"both",price:200,reward:0,dmg:500,ap:1,rpm:30,mag:1,reserve:0,reload:0,speed:245,range:183,spread:.01,move:.02,kick:1}),vest:{name:"Chaleco",cat:"gear",side:"both",price:650},vesthelm:{name:"Chaleco + Casco",cat:"gear",side:"both",price:1e3},defuser:{name:"Kit de desactivaci\xF3n",cat:"gear",side:"CT",price:400},he:{name:"Granada HE",cat:"grenade",side:"both",price:300,reward:300},flash:{name:"Flashbang",cat:"grenade",side:"both",price:200,reward:300,max:2},smoke:{name:"Humo",cat:"grenade",side:"both",price:300,reward:300},molotov:{name:"Molotov",cat:"grenade",side:"T",price:400,reward:300},incendiary:{name:"Incendiaria",cat:"grenade",side:"CT",price:500,reward:300},decoy:{name:"Se\xF1uelo",cat:"grenade",side:"both",price:50,reward:300},c4:{name:"C4",cat:"c4",side:"T",price:0}};for(let[n,e]of Object.entries(Xe))e.id=n;var Rl=[{name:"Pistolas",items:{T:["glock","dualies","p250","tec9","cz75","deagle","r8"],CT:["usp","p2000","dualies","p250","fiveseven","cz75","deagle","r8"]}},{name:"Intermedias",items:{T:["mac10","mp7","mp5","ump","p90","bizon","nova","xm1014","sawedoff","m249","negev"],CT:["mp9","mp7","mp5","ump","p90","bizon","nova","xm1014","mag7","m249","negev"]}},{name:"Rifles",items:{T:["galil","ak47","sg553","ssg08","awp","g3sg1"],CT:["famas","m4a4","m4a1s","aug","ssg08","awp","scar20"]}},{name:"Equipo",items:{T:["vest","vesthelm","zeus"],CT:["vest","vesthelm","defuser","zeus"]}},{name:"Granadas",items:{T:["molotov","decoy","flash","smoke","he"],CT:["incendiary","decoy","flash","smoke","he"]}}],xs=n=>{let e=Xe[n].cat;return e==="pistol"?2:e==="knife"?3:e==="grenade"?4:e==="c4"?5:e==="equip"?3:1},_n={start:800,max:16e3,winElim:3250,winBombT:3500,winDefuse:3500,winTime:3250,loss:[1400,1900,2400,2900,3400],plantBonus:800,plantReward:300,defuseReward:300,teamKill:-300},by={head:4,chest:1,stomach:1.25,arm:1,leg:.75};function yh(n,e,t,i,s,r=4){let a=n*(t==="head"?r:by[t]),o=0,l=t!=="leg"&&(t!=="head"||s);if(i>0&&l){let c=a*e;o=(a-c)*.5,o>i&&(o=i,c=a-i*2),a=c}return{hp:Math.max(1,Math.round(a)),armor:Math.round(o)}}var vh=.0254,pt={g:800*.4*vh,speed:750*.9*vh,step:1/64,fuse:{he:1.6,flash:1.6},molAir:2,smokeLife:18,fireLife:7,decoyLife:15,smokeR:3.6,fireR:2.6,heR:350*vh,heDmg:98};function Cd(n,e,t,i,s,r,a,o,l,c,h=1){let p=pt.speed*(.3+.7*h),f=o+10*Math.PI/180*(1-Math.abs(o)/(Math.PI/2)),m=-Math.sin(a)*Math.cos(f),x=Math.sin(f),y=-Math.cos(a)*Math.cos(f);return{type:n,owner:e,team:t,x:i+m*.3,y:s+x*.3,z:r+y*.3,vx:m*p+l*1.25,vy:x*p,vz:y*p+c*1.25,t:0,acc:0,rest:!1,state:"fly",life:0}}function Id(n,e,t,i){for(e.acc+=t;e.acc>=pt.step;){e.acc-=pt.step;let s=pt.step;if(e.state==="fly"){if(e.t+=s,!e.rest){e.vy-=pt.g*s;let a=Math.hypot(e.vx,e.vy,e.vz),o=a*s;if(o>1e-5){let l=qi(n,e.x,e.y,e.z,e.vx/a,e.vy/a,e.vz/a,o+.04);if(l&&l.t<=o+.04){let c=Math.max(0,l.t-.04);e.x+=e.vx/a*c,e.y+=e.vy/a*c,e.z+=e.vz/a*c;let h=[l.nx,l.ny,l.nz];if((e.type==="molotov"||e.type==="incendiary")&&h[1]>.7){Cl(n,e,i);continue}let p=e.vx*h[0]+e.vy*h[1]+e.vz*h[2];e.vx-=2*p*h[0],e.vy-=2*p*h[1],e.vz-=2*p*h[2],e.vx*=.45,e.vy*=.45,e.vz*=.45,h[1]>.7&&(e.vx*=.75,e.vz*=.75,Math.abs(e.vy)<1.2&&(e.vy=0,Math.hypot(e.vx,e.vz)<.25&&(e.rest=!0))),a>2&&i.push({type:"bounce",g:e})}else e.x+=e.vx*s,e.y+=e.vy*s,e.z+=e.vz*s}if(!e.rest&&e.vy===0){let l=rr(n,e.x,e.z,e.y+.3);l>-1e8&&e.y-l<.06?(e.y=l+.03,e.vx*=Math.max(0,1-s*2.5),e.vz*=Math.max(0,1-s*2.5),Math.hypot(e.vx,e.vz)<.2&&(e.rest=!0)):e.vy=-.01}if(e.y<-40){e.state="done",i.push({type:"end",g:e});continue}}let r=pt.fuse[e.type];r&&e.t>=r?Cl(n,e,i):(e.type==="molotov"||e.type==="incendiary")&&e.t>=pt.molAir?(e.air=!0,Cl(n,e,i)):(e.type==="smoke"||e.type==="decoy")&&e.rest&&e.t>.9&&Cl(n,e,i)}else e.state==="active"&&(e.life-=s,e.life<=0&&(e.state="done",i.push({type:"end",g:e})))}}function Cl(n,e,t){if(e.state="active",e.vx=e.vy=e.vz=0,e.type==="smoke")e.life=pt.smokeLife;else if(e.type==="decoy")e.life=pt.decoyLife;else if(e.type==="molotov"||e.type==="incendiary")if(e.air)e.life=.01;else{e.life=pt.fireLife;let i=rr(n,e.x,e.z,e.y+.5);i>-1e8&&(e.y=i)}else e.life=.01;t.push({type:"det",g:e})}function Pd(n,e,t,i,s,r,a){for(let o of n){if(o.type!=="smoke"||o.state!=="active"||o.life<.6)continue;let l=pt.smokeR*Math.min(1,(pt.smokeLife-o.life)*1.5+.2),c=o.x,h=o.y+1.2,p=o.z,f=s-e,m=r-t,x=a-i,y=f*f+m*m+x*x,u=y>0?((c-e)*f+(h-t)*m+(p-i)*x)/y:0;u=Math.max(0,Math.min(1,u));let d=e+f*u-c,M=(t+m*u-h)*1.4,C=i+x*u-p;if(d*d+M*M+C*C<l*l)return!0}return!1}function Ld(n,e,t,i){for(let s of n)if(!(s.type!=="molotov"&&s.type!=="incendiary"||s.state!=="active"||s.air)&&Math.abs(t-s.y)<1.2&&Math.hypot(e-s.x,i-s.z)<pt.fireR)return s;return null}var St={freeze:12,live:115,buy:20,post:6,bomb:40,plant:3.2,defuse:10,kit:5,over:10},Il={rapida:{win:5,max:8,name:"R\xE1pida"},corta:{win:9,max:16,name:"Corta"},comp:{win:13,max:24,name:"Competitiva"}},Nd=["Toto","Lalo","Pipo","Chino","Fede","Nacho","Rulo","Coco","Tincho","Beto","Pato","Quique"],_s=(n,e)=>(n^e)===0?"T":"CT",Dd=n=>n==="T"?"glock":"usp";function Mh(n){let e={},t=!0,i=0,s=[1,1],r=null,a=new Map,o=0,l=0,c=!1,h=1;e.setup=v=>{n.players.clear();let E=n.cfg,w=[0,0],L=v.slice().sort((D,B)=>D.slot-B.slot);for(let D of L)(D.pref===0||D.pref===1)&&w[D.pref]++;for(let D of L){let B=D.pref;B!==0&&B!==1&&(B=w[0]<=w[1]?0:1,w[B]++),n.players.set(D.id,p(D.id,D.name,!1,B))}let A=Math.max(w[0],w[1],E.fill),P=0;for(let D=0;D<2;D++)for(let B=w[D];B<A;B++){let k="bot"+P++;n.players.set(k,p(k,Nd[P%Nd.length]+" (bot)",!0,D))}n.round=0,n.score=[0,0],n.half=0,s=[1,1],c=!1;for(let D of n.players.values())D.team=_s(D.grp,0);n.spawns={T:f("T"),CT:f("CT")}};function p(v,E,w,L){return{id:v,name:E,bot:w,grp:L,team:"T",x:0,y:0,z:0,yaw:0,pitch:0,vx:0,vz:0,duck:0,hp:100,ar:0,helm:!1,money:_n.start,alive:!1,k:0,d:0,a:0,mvp:0,dmgR:0,inv:{p:null,s:null,g:[],c4:!1,kit:!1,zeus:!1,v:1,pa:null,sa:null},god:!1}}function f(v){let E=n.nav,w=oa(E,v==="T"?16:32),L=0,A=0,P=w.map(oe=>E.pos(oe));for(let oe of P)L+=oe[0],A+=oe[2];L/=P.length,A/=P.length,P.sort((oe,$)=>Math.hypot(oe[0]-L,oe[2]-A)-Math.hypot($[0]-L,$[2]-A));let D=[];for(let oe of P)if(D.every($=>Math.hypot($[0]-oe[0],$[2]-oe[2])>1.5)&&D.push(oe),D.length>=12)break;let B=n.info.zones,k=n.W.cell,O=((B.A[0]+B.A[2])/2+(B.B[0]+B.B[2])/2)/2*k,G=((B.A[1]+B.A[3])/2+(B.B[1]+B.B[3])/2)/2*k,J=v==="T"?O:(B.T[0]+B.T[2])/2*k,te=v==="T"?G:(B.T[1]+B.T[3])/2*k;return{pts:D.map(oe=>[oe[0],oe[1],oe[2],Math.atan2(-(J-oe[0]),-(te-oe[2]))]),cx:L,cz:A}}e.adopt=()=>{n.spawns={T:f("T"),CT:f("CT")}},e.buyZone=v=>{let E=n.spawns[v.team];return Math.hypot(v.x-E.cx,v.z-E.cz)<22||li(n.W,v.x,v.z)&(v.team==="T"?16:32)},e.canBuyTime=()=>n.phase==="freeze"||n.phase==="live"&&St.live-n.timeLeft<St.buy&&n.bomb.state!=="planted",e.startMatch=()=>{n.phase="freeze",m(!0)};function m(v){n.round++,n.phase="freeze",n.timeLeft=St.freeze,n.drops.clear(),n.nades.length=0,a.clear(),r=null,n.bomb={state:"carried",carrier:null,x:0,y:0,z:0,t:0};let E={T:0,CT:0},w={},L=[...n.players.values()].sort(()=>Math.random()-.5);for(let P of L){P.team=_s(P.grp,n.half),!P.alive||v?(P.inv={p:null,s:Dd(P.team),g:[],c4:!1,kit:!1,zeus:!1,v:(P.inv.v||0)+1,pa:null,sa:null},!P.alive&&!v&&(P.ar=0,P.helm=!1),v&&(P.ar=0,P.helm=!1)):(P.inv.c4=!1,P.team==="T"&&(P.inv.kit=!1),P.inv.pa=P.inv.sa=null,P.inv.v++),P.hp=100,P.alive=!0,P.dmgR=0,P.dmgBy={};let D=n.spawns[P.team].pts,B=E[P.team]++%D.length;w[P.id]=D[B]}let A=L.filter(P=>P.team==="T");if(A.length){let P=A[Math.floor(Math.random()*A.length)];P.inv.c4=!0,n.bomb.carrier=P.id}t=!0,n.emit("rs",{pos:w,round:n.round}),n.emit("st",e.snapshot())}function x(v,E){if(n.phase!=="live"&&n.phase!=="freeze")return;n.phase="post",n.timeLeft=St.post;let w=[...n.players.values()].find(k=>k.team===v)?.grp??(v===_s(0,n.half)?0:1);n.score[w]++;let L=E==="bomb"?_n.winBombT:E==="defuse"?_n.winDefuse:E==="time"?_n.winTime:_n.winElim,A=1-w;s[A]=Math.min(5,s[A]+1),s[w]=Math.max(0,s[w]-1);let P=_n.loss[Math.max(0,s[A]-1)];for(let k of n.players.values())if(k.grp===w)d(k,L);else{if(E==="time"&&k.team==="T"&&k.alive)continue;d(k,P+(k.team==="T"&&n.bomb.state==="defused"?_n.plantBonus:0))}let D=null,B=-1;for(let k of n.players.values())if(k.grp===w){let O=(k.rk||0)*10+k.dmgR/100+(k.id===r&&E==="bomb"?30:0)+(k.defused?30:0);O>B&&(B=O,D=k)}D&&D.mvp++;for(let k of n.players.values())k.rk=0,k.defused=!1;t=!0,n.emit("ev",{t:"end",win:v,reason:E,score:n.score.slice(),mvp:D&&D.id,loss:P})}function y(){let v=Il[n.cfg.len];if(n.score[0]>=v.win||n.score[1]>=v.win||n.round>=v.max){n.phase="over",n.timeLeft=St.over,l=St.over;let w=n.score[0]>n.score[1]?0:n.score[1]>n.score[0]?1:-1;n.emit("ev",{t:"over",wg:w,score:n.score.slice()}),t=!0,setTimeout(()=>{if(c)return;c=!0;let L=[...n.players.values()].filter(P=>!P.bot&&(w<0||P.grp===w)).map(P=>P.id),A=w<0?"Empate "+n.score.join(" \u2013 "):"\u{1F451} Ganan "+u(w)+" "+Math.max(...n.score)+" \u2013 "+Math.min(...n.score);n.end(L,A)},St.over*1e3);return}if(n.round===v.max/2){n.half=1,s=[1,1];for(let w of n.players.values())w.money=_n.start,w.alive=!1,w.ar=0,w.helm=!1;n.emit("ev",{t:"half"}),m(!0);return}m(!1)}let u=v=>{let E=[...n.players.values()].filter(w=>w.grp===v&&!w.bot).map(w=>w.name);return E.length?E.slice(0,3).join(", "):_s(v,n.half)==="T"?"los Terroristas":"los Contraterroristas"};function d(v,E){v.money=Math.max(0,Math.min(_n.max,v.money+E))}function M(){if(n.phase!=="live")return;let v=0,E=0,w=0,L=0;for(let A of n.players.values())A.team==="T"?(w++,A.alive&&v++):(L++,A.alive&&E++);if(L&&E===0)return x("T","elim");if(w&&v===0&&n.bomb.state!=="planted")return x("CT","elim")}e.tick=v=>{if(n.phase!=="lobby"){if(n.timeLeft-=v,n.phase==="freeze"&&n.timeLeft<=0)n.phase="live",n.timeLeft=St.live,t=!0,n.emit("ev",{t:"go"});else if(n.phase==="live"){let E=n.bomb;if(E.state==="planted"){E.t-=v,n.timeLeft=E.t;for(let[w,L]of a){let A=n.players.get(w);if(!A||!A.alive||Math.hypot(A.x-E.x,A.z-E.z)>2.2){a.delete(w);continue}A.bot&&n.time-L.t0>=L.dur&&S(A)}E.t<=0&&E.state==="planted"&&g()}else n.timeLeft<=0&&x("CT","time");if(o-=v,o<=0){o=.25;for(let w of n.players.values()){if(!w.alive)continue;let L=Ld(n.nades,w.x,w.y,w.z);L&&e.damage(w.id,L.owner,10,"fire",L.type,{raw:!0})}}}else n.phase==="post"&&n.timeLeft<=0&&y();i-=v,(t&&i<=0||i<-2)&&(i=.1,t=!1,n.emit("st",e.snapshot()))}},e.markDirty=()=>{t=!0},e.snapshot=()=>({ph:n.phase,tl:+n.timeLeft.toFixed(2),r:n.round,sc:n.score,hf:n.half,b:{s:n.bomb.state,c:n.bomb.carrier,x:+n.bomb.x.toFixed(2),y:+n.bomb.y.toFixed(2),z:+n.bomb.z.toFixed(2),t:+n.bomb.t.toFixed(2),site:n.bomb.site},dr:[...n.drops.values()].map(v=>[v.id,v.w,+v.x.toFixed(2),+v.y.toFixed(2),+v.z.toFixed(2),v.ammo]),p:[...n.players.values()].map(v=>[v.id,v.name,v.bot?1:0,v.grp,v.team,v.hp,v.ar,v.helm?1:0,v.money,v.alive?1:0,v.k,v.d,v.a,v.mvp,v.inv,v.god?1:0])}),e.damage=(v,E,w,L,A,P={})=>{let D=n.players.get(v),B=n.players.get(E);if(!D||!D.alive||n.phase==="over"||B&&B!==D&&B.team===D.team||D.god)return;let k,O=0;if(P.raw)k=Math.round(w);else{let G=Xe[A],J=yh(w,P.ap??(G?.ap||.5),L,D.ar,D.helm);k=J.hp,O=J.armor}k=Math.min(k,D.hp),D.hp-=k,D.ar=Math.max(0,D.ar-O),B&&B!==D&&(B.dmgR+=k,D.dmgBy[E]=(D.dmgBy[E]||0)+k),t=!0,n.emit("ev",{t:"hurt",v,a:E,n:k,hs:L==="head",w:A,helm:D.helm&&L==="head"}),D.hp<=0&&C(D,B,A,L==="head",P.wb)};function C(v,E,w,L,A){if(v.hp=0,v.alive=!1,v.d++,E&&E!==v)if(E.team!==v.team){E.k++,E.rk=(E.rk||0)+1;let D=Xe[w];d(E,D?.reward??300)}else E.k--,d(E,_n.teamKill);for(let[D,B]of Object.entries(v.dmgBy||{}))if(D!==E?.id&&B>=41){let k=n.players.get(D);k&&k.team!==v.team&&k.a++}let P=v.inv.p||(v.inv.s&&v.inv.s!==Dd(v.team)?v.inv.s:null)||v.inv.s;P&&_(P,v.x,v.y,v.z,null,v.yaw),v.inv.c4&&(v.inv.c4=!1,b(v)),v.inv.kit&&_("defuser",v.x+.3,v.y,v.z,null,0),v.inv={...v.inv,p:null,s:null,g:[],kit:!1,zeus:!1,c4:!1,v:v.inv.v+1},a.delete(v.id),t=!0,n.emit("ev",{t:"kill",k:E?E.id:null,v:v.id,w,hs:!!L,wb:!!A}),M()}function b(v){n.bomb.state="dropped",n.bomb.carrier=null,n.bomb.x=v.x,n.bomb.y=v.y,n.bomb.z=v.z,n.emit("ev",{t:"bombdrop"})}function _(v,E,w,L,A,P=0){let D=h++,B=E-Math.sin(P)*.6,k=L-Math.cos(P)*.6,O=!n.solidAt(B,w+.3,k);n.drops.set(D,{id:D,w:v,x:O?B:E,y:n.floorAt(O?B:E,O?k:L,w+.6)+.05,z:O?k:L,ammo:A||null}),t=!0}e.handle=(v,E,w,L={})=>{let A=n.players.get(w);if(A)switch(v){case"hit":{if(!A.alive&&n.phase!=="post")return;let P=Xe[E.w];if(!P)return;let D=P.cat==="knife"?180:P.dmg*P.pellets*1.01;e.damage(E.t,w,Math.min(+E.d||0,D),E.part,E.w,{wb:E.wb});break}case"buy":T(A,E.i);break;case"drop":{if(!A.alive)return;let P=E.s;if(P==="zeus"){A.inv.zeus=!1,A.inv.v++,t=!0;return}if(P==="c4"){if(!A.inv.c4)return;A.inv.c4=!1,A.inv.v++,b({x:E.x,y:E.y,z:E.z}),n.bomb.x-=Math.sin(E.yaw)*.6,n.bomb.z-=Math.cos(E.yaw)*.6,n.bomb.y=n.floorAt(n.bomb.x,n.bomb.z,E.y+.6),t=!0;return}let D=P==="p"?A.inv.p:P==="s"?A.inv.s:null;if(!D)return;A.inv[P]=null,A.inv.v++,_(D,E.x,E.y,E.z,E.ammo,E.yaw);break}case"take":{if(!A.alive)return;if(E.id==="c4"){if(A.team!=="T"||n.bomb.state!=="dropped"||Math.hypot(A.x-n.bomb.x,A.z-n.bomb.z)>1.8)return;A.inv.c4=!0,A.inv.v++,n.bomb.state="carried",n.bomb.carrier=A.id,t=!0,n.emit("ev",{t:"bombpick",p:A.id});return}let P=n.drops.get(E.id);if(!P||Math.hypot(A.x-P.x,A.z-P.z)>2.2)return;if(P.w==="defuser"){if(A.team!=="CT"||A.inv.kit)return;A.inv.kit=!0,A.inv.v++,n.drops.delete(P.id),t=!0;return}let D=xs(P.w)===1?"p":"s";if(A.inv[D]){if(!E.swap)return;_(A.inv[D],A.x,A.y,A.z,E.ammo,A.yaw)}A.inv[D]=P.w,A.inv[D+"a"]=P.ammo,A.inv.v++,n.drops.delete(P.id),t=!0;break}case"nade":{let P=A.inv.g.indexOf(E.type);if(P<0)return;A.inv.g.splice(P,1),A.inv.v++,t=!0;break}case"plant":{let P=li(n.W,E.x,E.z)&12;if(!A.alive||!A.inv.c4||n.phase!=="live"||!P||n.bomb.state==="planted")return;A.inv.c4=!1,A.inv.v++,Object.assign(n.bomb,{state:"planted",carrier:null,x:E.x,y:E.y,z:E.z,t:St.bomb,site:P&4?"A":"B"}),r=A.id,d(A,_n.plantReward),t=!0,n.emit("ev",{t:"plant",p:A.id,site:n.bomb.site}),M();break}case"defst":{if(!A.alive||A.team!=="CT"||n.bomb.state!=="planted"||Math.hypot(A.x-n.bomb.x,A.z-n.bomb.z)>2.2)return;a.set(A.id,{t0:n.time,dur:A.inv.kit?St.kit:St.defuse}),n.emit("ev",{t:"defst",p:A.id,kit:A.inv.kit});break}case"defx":a.delete(w);break;case"defok":{let P=a.get(w);if(!P||!A.alive||n.bomb.state!=="planted"||n.time-P.t0<P.dur-.5)return;S(A);break}case"adm":L.admin&&U(A,E);break;case"fall":A.alive&&e.damage(w,w,Math.min(999,+E.d||0),"chest","world",{raw:!0});break}},e.botDefuse=v=>{a.has(v.id)||e.handle("defst",{},v.id)},e.isDefusing=v=>a.has(v);function S(v){a.clear(),n.bomb.state="defused",v.defused=!0,d(v,_n.defuseReward),n.emit("ev",{t:"defused",p:v.id}),x("CT","defuse")}function g(){let v=n.bomb;v.state="exploded",n.emit("ev",{t:"boom",x:v.x,y:v.y,z:v.z});let E=1750*.0254/3;for(let w of n.players.values()){if(!w.alive)continue;let L=Math.hypot(w.x-v.x,w.y-v.y,w.z-v.z),A=500*Math.exp(-(L*L)/(2*E*E));if(A>1){let P=yh(A,.5,"chest",w.ar,w.helm);w.hp-=Math.min(w.hp,P.hp),w.ar=Math.max(0,w.ar-P.armor),w.hp<=0&&(w.alive=!1,w.d++,n.emit("ev",{t:"kill",k:null,v:w.id,w:"c4"}))}}t=!0,x("T","bomb")}e.heBlast=(v,E)=>{for(let w of n.players.values()){if(!w.alive)continue;let L=Math.hypot(w.x-v.x,w.y+1-v.y,w.z-v.z);if(L>pt.heR||!E(v,w))continue;let A=pt.heDmg*(1-L/pt.heR);A<1||e.damage(w.id,v.owner,A,"chest","he",{ap:.5})}};function T(v,E){let w=Xe[E],L=D=>n.emitTo(v.id,"ev",{t:"deny",why:D});if(!w||!v.alive)return;if(!e.canBuyTime())return L("Se termin\xF3 el tiempo de compra");if(!e.buyZone(v))return L("Ten\xE9s que estar en tu zona de compra");if(w.side!=="both"&&w.side!==v.team)return L("No disponible para tu equipo");let A=w.price,P=v.inv;if(E==="vest"){if(v.ar>=100)return L("Ya ten\xE9s chaleco")}else if(E==="vesthelm"){if(v.ar>=100&&v.helm)return L("Ya ten\xE9s chaleco y casco");v.ar>=100&&(A=350)}else if(E==="defuser"){if(P.kit)return L("Ya ten\xE9s el kit")}else if(E==="zeus"){if(P.zeus)return L("Ya ten\xE9s la Zeus")}else if(w.cat==="grenade"){let D=P.g.length,B=P.g.filter(k=>k===E||(k==="molotov"||k==="incendiary")&&(E==="molotov"||E==="incendiary")).length;if(D>=4)return L("Llev\xE1s el m\xE1ximo de granadas");if(B>=(w.max||1))return L("No pod\xE9s llevar m\xE1s de esa granada")}else{let D=xs(E)===1?"p":"s";if(P[D]===E)return L("Ya ten\xE9s esa arma")}if(v.money<A)return L("No te alcanza la plata");if(v.money-=A,E==="vest")v.ar=100;else if(E==="vesthelm")v.ar=100,v.helm=!0;else if(E==="defuser")P.kit=!0;else if(E==="zeus")P.zeus=!0;else if(w.cat==="grenade")P.g.push(E);else{let D=xs(E)===1?"p":"s";P[D]&&_(P[D],v.x,v.y,v.z,null,v.yaw+Math.PI),P[D]=E,P[D+"a"]=null}P.v++,t=!0,n.emitTo(v.id,"ev",{t:"bought",i:E})}e.buy=T;function U(v,E){if(E.a==="god")v.god=!!E.v,t=!0;else if(E.a==="money")v.money=_n.max,t=!0;else if(E.a==="win")(n.phase==="live"||n.phase==="freeze")&&(n.phase="live",x(v.team,"elim"));else if(E.a==="kill")for(let w of n.players.values())w.alive&&w.team!==v.team&&C(w,v,"knife",!0,!1);else E.a==="heal"&&(v.hp=100,v.ar=100,v.helm=!0,t=!0)}return e}var bh=.0254,Ud=Math.PI/180,Sy={pistol:.12,smg:.16,rifle:.36,sniper:.6,heavy:.3,equip:0,knife:0},Ty=n=>n.id==="awp"?.85:n.id==="deagle"||n.id==="r8"?.3:n.id==="ak47"?.42:n.cat==="heavy"&&n.pellets>1?0:Sy[n.cat]??0;function la(n,e){let t=n.scope&&n.cat==="sniper"&&e.scoped?n.scoped:n.spread,i=n.speed*bh*(e.scoped&&n.cat==="sniper"?.5:1),s=Math.max(0,Math.min(1,(e.speed-i*.34)/(i*.66)));return t+=n.move*s,e.onGround||(t+=n.cat==="sniper"?.25:.12),e.duck>.5&&e.onGround&&(t*=.75),n.auto&&n.pellets===1&&(t+=Math.min(.022,e.shots*.0016)),n.cat==="pistol"&&!n.auto&&(t+=Math.min(.03,e.shots*.006)),t}function Pl(n,e,t){if(n.pellets>1||n.cat==="sniper")return[n.kick,(t()-.5)*n.sway];let i=e===0?n.kick*.6:e<9?n.kick:n.kick*.25,s=(t()-.5)*n.sway*.5;return n.auto&&n.cat!=="pistol"&&(e>=7&&e<14?s+=-n.sway*1.1:e>=14&&e<22?s+=n.sway*1.25:e>=22&&(s+=Math.sin(e*.9)*n.sway)),[i,s]}function ar(n,e,t,i,s,r){let a=r()*Math.PI*2,o=s*(r()*.6+r()*.4),l=e+t*Ud+Math.sin(a)*o,c=n-i*Ud+Math.cos(a)*o;return[-Math.sin(c)*Math.cos(l),Math.sin(l),-Math.cos(c)*Math.cos(l)]}function Ll(n,e,t,i,s,r,a,o,l,c,h){let p=Math.min(c.range*bh,300),f=c.dmg,m=Ty(c),x=!1,y=i,u=s,d=r,M=0,C=[];for(let b=0;b<3;b++){let _=p-M;if(_<=0)break;let S=qi(n,y,u,d,a,o,l,_),g=S?S.t:_,T=null;for(let w of h){if(!w.alive||w.id===t||Math.abs(w.x-y)>g+2||Math.abs(w.z-d)>g+2)continue;let L=wd(w,y,u,d,a,o,l,g);L&&(!T||L.t<T.t)&&(T={...L,id:w.id})}if(T){let w=M+T.t,L=f*Math.pow(c.rangeMod,w/bh/500),A=[y+a*T.t,u+o*T.t,d+l*T.t];return{end:A,hit:{id:T.id,part:T.part,dmg:L,pos:A},impacts:C,wb:x}}if(!S)return{end:[y+a*_,u+o*_,d+l*_],hit:null,impacts:C,wb:x};let U=[y+a*g,u+o*g,d+l*g];if(C.push([U[0],U[1],U[2],S.nx,S.ny,S.nz]),m<=0)return{end:U,hit:null,impacts:C,wb:x};let v=0,E=.03;for(;v<m&&Tl(n,U[0]+a*(v+E),U[1]+o*(v+E),U[2]+l*(v+E));)v+=E;if(v>=m)return{end:U,hit:null,impacts:C,wb:x};v+=E,f*=Math.max(.15,1-v/m)*.75,m-=v,x=!0,M+=g+v,y=U[0]+a*v,u=U[1]+o*v,d=U[2]+l*v,C.push([y,u,d,-a,-o,-l])}return{end:[y,u,d],hit:null,impacts:C,wb:x}}function ca(n,e,t,i){let s=t[0],r=t[1],a=t[2];for(let o of[1.55,1.1]){let l=i[0],c=i[1]+o*(i[3]||1),h=i[2],p=l-s,f=c-r,m=h-a,x=Math.hypot(p,f,m),y=qi(n,s,r,a,p/x,f/x,m/x,x);if(!(y&&y.t<x-.1)&&!Pd(e,s,r,a,l,c,h))return!0}return!1}var Fd=.0254,Nl=Math.PI/180,ha={facil:{react:.62,turn:170,err:3.6,hs:.15,ctrl:.25,name:"F\xE1cil"},normal:{react:.4,turn:290,err:2.1,hs:.3,ctrl:.5,name:"Normal"},dificil:{react:.26,turn:430,err:1.25,hs:.45,ctrl:.75,name:"Dif\xEDcil"},experto:{react:.17,turn:620,err:.65,hs:.6,ctrl:.9,name:"Experto"}},Tt=Math.random,Sh=(n,e)=>{let t=n-e;for(;t>Math.PI;)t-=Math.PI*2;for(;t<-Math.PI;)t+=Math.PI*2;return t};function Th(n,e){let t={},i={site:"A"},s=0,r={A:oa(n.nav,4),B:oa(n.nav,8)},a=new Map;t.brain=y=>{let u=a.get(y.id);return u||(u={path:null,pi:0,goal:null,repath:0,tgt:null,react:0,err:[0,0],fireT:0,burst:0,shots:0,pp:0,py:0,strafe:1,strafeT:0,stuck:0,last:[0,0],buyT:0,bought:!1,hold:null,plantT:0,lastKnown:null,lkT:0,blind:0,mag:{},reload:0,look:null,wantScope:!1,jumpT:0},a.set(y.id,u)),u},t.reset=()=>a.clear(),t.roundStart=()=>{i.site=Tt()<.5?"A":"B";let y=0;for(let u of n.players.values()){if(!u.bot)continue;let d=t.brain(u);Object.assign(d,{path:null,goal:null,tgt:null,hold:null,plantT:0,bought:!1,buyT:.6+Tt()*2.2,lastKnown:null,blind:0,reload:0,shots:0,pp:0,py:0,mag:{},look:null}),d.site=u.team==="CT"?y++%2===0?"A":"B":i.site,u.team==="CT"&&Tt()<.25&&(d.site=d.site==="A"?"B":"A")}},t.place=(y,u)=>{y.pl=El(u[0],u[1],u[2],u[3]),y.pl.pitch=0},t.heard=(y,u,d,M,C)=>{for(let b of n.players.values()){if(!b.bot||!b.alive||b.team===M||!b.pl)continue;if(Math.hypot(b.pl.x-y,b.pl.z-d)<(C?40:14)){let S=t.brain(b);S.tgt||(S.lastKnown=[y,u,d],S.lkT=4)}}},t.flash=(y,u)=>{let d=t.brain(y);d.blind=Math.max(d.blind,u)};function o(y){let u=y.inv;return u.p||u.s||"knife"}function l(y){let u=()=>y.money,d=y.team==="T",M=[];u()>=5750&&Tt()<.18?M.push("awp"):u()>=3700?M.push(d?"ak47":Tt()<.5?"m4a4":"m4a1s"):u()>=2900?M.push(d?"galil":"famas"):u()>=1850&&n.round>1&&M.push(d?"mac10":"mp9");for(let C of M)e.buy(y,C);u()>=1e3?e.buy(y,"vesthelm"):u()>=650&&(n.round===1||n.round===c()+1||Tt()<.5)&&e.buy(y,"vest"),!d&&u()>=400&&Tt()<.6&&e.buy(y,"defuser"),n.round===1&&u()>=500&&!y.inv.p&&Tt()<.3&&e.buy(y,d?"tec9":"fiveseven")}let c=()=>({rapida:4,corta:8,comp:12})[n.cfg.len];function h(y,u,d,M,C){let b=n.nav,_=y.pl,S=b.nearest(_.x,_.y,_.z),g=b.nearest(d,M,C);u.path=Rd(b,S,g),u.pi=1,u.goal=[d,M,C],u.repath=6+Tt()*2,u.path||(u.repath=1.5+Tt())}let p=y=>n.nav.pos(y[Math.floor(Tt()*y.length)]);t.tick=y=>{let u=ha[n.cfg.diff]||ha.normal;s-=y;let d=s<=0;d&&(s=.1);let M=n.phase==="live",C=n.phase==="freeze";for(let b of n.players.values()){if(!b.bot||!b.pl)continue;let _=t.brain(b),S=b.pl;if(!b.alive)continue;let g=o(b),T=Xe[g];if(_.mag[g]===void 0&&(_.mag[g]=T.mag||0),_.blind=Math.max(0,_.blind-y),_.fireT-=y,_.lkT-=y,_.repath-=y,_.jumpT-=y,_.reload>0&&(_.reload-=y,_.reload<=0&&(_.mag[g]=T.mag)),C){_.buyT-=y,_.buyT<=0&&!_.bought&&(_.bought=!0,l(b)),m(b,_,0,0,!1,y,T);continue}if(d&&_.blind<=0){let P=[S.x,S.y+on(S),S.z],D=null,B=1e9;for(let k of n.players.values()){if(!k.alive||k.team===b.team)continue;let O=k.x-S.x,G=k.z-S.z,J=Math.hypot(O,G);if(J>90)continue;let te=Math.abs(Sh(Math.atan2(-O,-G),S.yaw)),oe=_.tgt===k.id;if(te>(oe?2.6:1.45)&&J>2.5||!ca(n.W,n.nades,P,[k.x,k.y,k.z,k.h/We.hStand]))continue;let $=J*(oe?.6:1);$<B&&(B=$,D=k)}D?(_.tgt!==D.id&&(_.tgt=D.id,_.react=u.react*(.8+Tt()*.5),_.err=[(Tt()-.5)*2*u.err*Nl*3,(Tt()-.5)*2*u.err*Nl*2],_.head=Tt()<u.hs),_.lastKnown=[D.x,D.y,D.z],_.lkT=5):_.tgt&&(_.tgt=null)}_.blind>0&&(_.tgt=null);let U=_.tgt?n.players.get(_.tgt):null,v=0,E=0,w=!1,L=!1;if(U&&U.alive){let P=S.x,D=S.y+on(S),B=S.z,k=U.y+(_.head?U.h-.12:U.h*.68),O=U.x-P,G=k-D,J=U.z-B,te=Math.hypot(O,J),oe=Math.atan2(-O,-J)+_.err[0],$=Math.atan2(G,te)+_.err[1];_.err[0]*=Math.max(0,1-y*2.2),_.err[1]*=Math.max(0,1-y*2.2),f(S,oe,$,u.turn*Nl*y),_.react-=y;let ue=Math.hypot(Sh(S.yaw,oe-_.err[0]),S.pitch-($-_.err[1]));_.strafeT-=y,_.strafeT<=0&&(_.strafeT=.4+Tt()*.8,_.strafe=Tt()<.5?-1:1);let le=T.cat==="rifle"||T.cat==="sniper"||T.cat==="heavy"&&T.pellets===1||te>14;if(!le||_.reload>0){let Fe=[Math.cos(S.yaw),-Math.sin(S.yaw)];v=Fe[0]*_.strafe,E=Fe[1]*_.strafe}T.cat==="sniper"&&(_.wantScope=!0);let Ae=Math.hypot(S.vx,S.vz);_.react<=0&&ue<Math.max(.02,.6/Math.max(3,te))+.03&&_.reload<=0&&_.fireT<=0&&(!le||Ae<T.speed*Fd*.4||te<6)&&(_.mag[g]<=0&&T.mag?(_.reload=T.reload,_.shots=0):x(b,_,T,g,u,te)),_.reload<=0&&_.mag[g]<=0&&T.mag&&(_.reload=T.reload,_.shots=0)}else{_.wantScope=!1,_.shots&&_.fireT<-.35&&(_.shots=0),T.mag&&_.mag[g]<T.mag*.4&&_.reload<=0&&(_.reload=T.reload);let P=n.bomb,D=null,B=!1;if(b.team==="T"?b.inv.c4?li(n.W,S.x,S.z)&12&&M&&S.onGround?(_.plantT+=y,B=!0,n.setPlanting(b.id,_.plantT),_.plantT>=3.2&&(_.plantT=0,n.setPlanting(b.id,0),e.handle("plant",{x:S.x,y:S.y,z:S.z},b.id))):(_.plantT=0,(!_.goal||_.goalKind!=="site")&&(D=p(r[_.site]),_.goalKind="site")):P.state==="dropped"?((_.goalKind!=="bomb"||_.repath<=0)&&(D=[P.x,P.y,P.z],_.goalKind="bomb"),Math.hypot(S.x-P.x,S.z-P.z)<1.2&&e.handle("take",{id:"c4"},b.id)):P.state==="planted"?_.goalKind!=="post"&&(D=[P.x+(Tt()-.5)*10,P.y,P.z+(Tt()-.5)*10],_.goalKind="post"):(!_.goal||_.goalKind!=="site")&&(D=p(r[_.site]),_.goalKind="site"):P.state==="planted"?Math.hypot(S.x-P.x,S.z-P.z)<1.1?(B=!0,L=!0,e.botDefuse(b),_.look=[P.x,P.y,P.z]):(_.goalKind!=="defuse"||_.repath<=0)&&(D=[P.x,P.y,P.z],_.goalKind="defuse"):(!_.goal||_.goalKind!=="hold")&&(D=p(r[_.site]),_.goalKind="hold"),!D&&_.goal&&!_.path&&_.repath<=0&&(_.goal=null),D&&h(b,_,D[0],D[1],D[2]),!B&&_.path&&_.pi<_.path.length){let G=_.path[_.pi],J=G[0]-S.x,te=G[2]-S.z,oe=Math.hypot(J,te);oe<.55?_.pi++:(v=J/oe,E=te/oe,G[1]-S.y>.45&&oe<1.6&&_.jumpT<=0&&(_.jump=!0,_.jumpT=.8));let $=Math.hypot(S.x-_.last[0],S.z-_.last[1]);_.stuck=$<y*.6?_.stuck+y:0,_.last=[S.x,S.z],_.stuck>.6&&(_.jump=!0,_.stuck>1.6&&(_.stuck=0,_.goal=null,_.path=null))}else if(!B&&_.goalKind==="hold"&&_.path&&_.pi>=_.path.length){if(!_.look){let G=n.spawns.T;_.look=[G.cx,S.y+1.5,G.cz]}Tt()<y*.05&&(_.goal=null)}else!B&&_.goalKind==="site"&&_.path&&_.pi>=_.path.length&&(_.goal=null);let k=null,O=0;if(_.lastKnown&&_.lkT>0){let G=_.lastKnown;k=Math.atan2(-(G[0]-S.x),-(G[2]-S.z)),O=Math.atan2(G[1]+1.4-S.y-on(S),Math.hypot(G[0]-S.x,G[2]-S.z))}else v||E?k=Math.atan2(-v,-E):_.look&&(k=Math.atan2(-(_.look[0]-S.x),-(_.look[2]-S.z)));k!==null&&f(S,k,O,u.turn*.55*Nl*y)}let A=(T.recover||9)*y;_.pp=Math.max(0,_.pp-A*(_.fireT<-.05?1:.3)),_.py*=Math.max(0,1-y*4),w=!!U&&T.cat!=="knife",m(b,_,v,E,w,y,T,L)}};function f(y,u,d,M){let C=Sh(u,y.yaw);y.yaw+=Math.max(-M,Math.min(M,C));let b=d-y.pitch;y.pitch+=Math.max(-M,Math.min(M,b)),y.pitch=Math.max(-1.45,Math.min(1.45,y.pitch))}function m(y,u,d,M,C,b,_,S=!1){let g=y.pl,T=-Math.sin(g.yaw),U=-Math.cos(g.yaw),v=Math.cos(g.yaw),E=-Math.sin(g.yaw),w={f:d*T+M*U,s:d*v+M*E,jump:!!u.jump,crouch:S,walk:C};u.jump=!1,(n.phase==="freeze"||n.planting(y.id)>0||e.isDefusing(y.id))&&(w.f=w.s=0,w.jump=!1);let A=_.speed*Fd*(u.wantScope&&_.cat==="sniper"?.42:1),P=b;for(;P>1e-6;){let D=Math.min(P,.011111111111111112),B=Al(n.W,g,w,D,A);B&&n.fallDamage(y,B),P-=D}g.y<-20&&y.alive&&e.damage(y.id,y.id,999,"chest","world",{raw:!0});for(let D of n.players.values()){if(D===y||!D.alive||Math.abs(D.y-g.y)>1.6)continue;let B=g.x-D.x,k=g.z-D.z,O=Math.hypot(B,k);if(O<.62){let G=O>1e-4?(.62-O)/O*.5:0,J=g.x+(O>1e-4?B*G:.05),te=g.z+(O>1e-4?k*G:.03);Ti(n.W,J,te,g.y,g.h,We.r)||(g.x=J,g.z=te)}}y.x=g.x,y.y=g.y,y.z=g.z,y.yaw=g.yaw,y.pitch=g.pitch,y.duck=g.duck,y.h=g.h,y.vx=g.vx,y.vz=g.vz,y.onGround=g.onGround,y.wpn=y.inv.c4&&u.plantT>0?"c4":o(y),y.scoped=u.wantScope&&_.cat==="sniper"}function x(y,u,d,M,C,b){let _=y.pl,S={speed:Math.hypot(_.vx,_.vz),onGround:_.onGround,duck:_.duck,scoped:y.scoped,shots:u.shots},g=la(d,S),[T,U]=Pl(d,u.shots,Tt),v=[_.x,_.y+on(_),_.z];n.fireBullets(y.id,M,v,w=>ar(_.yaw,_.pitch,u.pp*(1-C.ctrl*.85),u.py*(1-C.ctrl*.85),g,w)),u.pp=Math.min(d.kickCap||12,u.pp+T),u.py+=U,u.shots++,d.mag&&u.mag[M]--;let E=60/d.rpm;if(d.auto){let w=b>25?2:b>12?4:8;u.shots%w===0?u.fireT=E+.25+Tt()*.25*(2-C.ctrl):u.fireT=E,u.shots%w===0&&(u.shots=0)}else u.fireT=Math.max(E,d.cat==="pistol"?.2+Tt()*.2:E)}return t}var ht=new At,Dl=new De,s1=new X(0,1,0),Od=new X;function Bd(n){let e={},i=new Fn(new dn(1,1,1),new fn({color:"#ffffff"}),700);i.instanceMatrix.setUsage(nr),i.frustumCulled=!1,i.count=0,i.instanceColor=new ni(new Float32Array(700*3),3),n.add(i);let s=[];e.particle=(w,L,A,P,D,B,k,O,G,J=9.8,te=0)=>{s.length>=700&&s.shift(),s.push({x:w,y:L,z:A,vx:P,vy:D,vz:B,s:k,life:O,max:O,c:new De(G),g:J,grow:te})};let r=64,a=new dn(1,1,1);a.translate(0,0,-.5);let o=new Fn(a,new fn({color:"#ffe9a8",transparent:!0,opacity:.85,depthWrite:!1}),r);o.instanceMatrix.setUsage(nr),o.frustumCulled=!1,o.count=0,n.add(o);let l=[];e.tracer=(w,L)=>{l.length>=r&&l.shift();let A=Math.hypot(L[0]-w[0],L[1]-w[1],L[2]-w[2]);l.push({a:[...w],b:[...L],d:A,t:0,life:Math.min(.25,A/280+.04)})};let c=220,h=new ii(.07,.07),p=new Fn(h,new fn({color:"#1d1a17",polygonOffset:!0,polygonOffsetFactor:-2,depthWrite:!1}),c);p.count=0,p.frustumCulled=!1,n.add(p);let f=0;e.decal=(w,L)=>{ht.position.set(w[0]+L[0]*.01,w[1]+L[1]*.01,w[2]+L[2]*.01),Od.set(L[0],L[1],L[2]),ht.quaternion.setFromUnitVectors(new X(0,0,1),Od),ht.rotateZ(Math.random()*3),ht.scale.setScalar(.7+Math.random()*.6),ht.updateMatrix(),p.setMatrixAt(f,ht.matrix),f=(f+1)%c,p.count=Math.max(p.count,f===0?c:f),p.instanceMatrix.needsUpdate=!0},e.clearDecals=()=>{p.count=0,f=0},e.impact=(w,L,A="#cdb894")=>{e.decal(w,L);for(let P=0;P<5;P++)e.particle(w[0],w[1],w[2],L[0]*2+(Math.random()-.5)*2,L[1]*2+Math.random()*1.5,L[2]*2+(Math.random()-.5)*2,.03+Math.random()*.03,.35+Math.random()*.3,A,6);e.particle(w[0],w[1],w[2],L[0]*.5,.4,L[2]*.5,.08,.5,"#d9cdb5",-.5,.25),e.particle(w[0],w[1],w[2],0,0,0,.05,.05,"#fff2a0",0)},e.blood=(w,L,A)=>{let P=A?10:6;for(let D=0;D<P;D++)e.particle(w[0],w[1],w[2],L[0]*2.5+(Math.random()-.5)*2,L[1]*2+Math.random()*1.2,L[2]*2.5+(Math.random()-.5)*2,.035+Math.random()*.04,.4+Math.random()*.3,A?"#b3121a":"#8f1015",8)};let m=new rs(1,0),x=new fn({color:"#ffd27a",transparent:!0,opacity:.95,depthWrite:!1});e.muzzleMesh=()=>{let w=new je(m,x);return w.visible=!1,w.scale.set(.05,.05,.14),w};let y=new Js("#ffcf80",0,7,2);n.add(y);let u=0;e.flashLight=(w,L=1)=>{y.position.set(w[0],w[1],w[2]),y.intensity=6*L,u=.05};let d=400,M=new $s(1,0),C=new Fn(M,new gn({color:"#b9bcc0",flatShading:!0}),d);C.instanceMatrix.setUsage(nr),C.count=0,C.frustumCulled=!1,n.add(C),C.instanceColor=new ni(new Float32Array(d*3),3);let b=[];e.smoke=(w,L)=>{let A=[];for(let P=0;P<38;P++){let D=Math.random()*Math.PI*2,B=Math.sqrt(Math.random())*pt.smokeR*.85,k=Math.random()*2.6;A.push({x:w.x+Math.cos(D)*B,y:w.y+.4+k,z:w.z+Math.sin(D)*B,s:.9+Math.random()*.9,ph:Math.random()*6,c:.82+Math.random()*.14})}b.push({g:w,balls:A})},e.clearSmokes=()=>{b.length=0,T.length=0};let _=260,S=new ss(.22,.7,4);S.translate(0,.35,0);let g=new Fn(S,new fn({color:"#ffffff"}),_);g.instanceColor=new ni(new Float32Array(_*3),3),g.instanceMatrix.setUsage(nr),g.count=0,g.frustumCulled=!1,n.add(g);let T=[],U=new Js("#ff8a3a",0,9,1.6);n.add(U),e.fire=(w,L,A)=>{let P=[];for(let D=0;D<26;D++){let B=Math.random()*Math.PI*2,k=Math.sqrt(Math.random())*pt.fireR,O=w.x+Math.cos(B)*k,G=w.z+Math.sin(B)*k,J=A(L,O,G,w.y+.6);J<w.y-1.2||J>w.y+.7||P.push({x:O,y:J,z:G,ph:Math.random()*6,s:.7+Math.random()*.8})}T.push({g:w,fl:P})};let v=[],E=new $s(1,1);return e.explosion=(w,L)=>{let A=new je(E,new fn({color:"#ffb347",transparent:!0,opacity:.9,depthWrite:!1}));A.position.set(w[0],w[1]+.3,w[2]),n.add(A),v.push({m:A,t:0,life:L?1.1:.45,size:L?9:2.6});for(let P=0;P<(L?70:30);P++){let D=Math.random()*6.28,B=Math.random()*1.4,k=(L?12:7)*(.4+Math.random());e.particle(w[0],w[1]+.3,w[2],Math.cos(D)*Math.cos(B)*k,Math.sin(B)*k,Math.sin(D)*Math.cos(B)*k,.06+Math.random()*.08,.6+Math.random()*.6,Math.random()<.5?"#ffb347":"#3a3530",9)}for(let P=0;P<(L?24:10);P++)e.particle(w[0]+(Math.random()-.5)*2,w[1]+.5+Math.random(),w[2]+(Math.random()-.5)*2,Math.random()-.5,1+Math.random(),Math.random()-.5,.5,2+Math.random()*1.5,"#4a4642",-.3,L?1.6:.8);e.flashLight(w,L?6:3),u=L?.35:.15},e.flashPop=w=>{e.flashLight(w,8),u=.08;for(let L=0;L<14;L++)e.particle(w[0],w[1],w[2],(Math.random()-.5)*6,(Math.random()-.5)*6,(Math.random()-.5)*6,.04,.25,"#ffffff",0)},e.update=(w,L,A)=>{let P=0;for(let k=s.length-1;k>=0;k--){let O=s[k];if(O.life-=w,O.life<=0){s.splice(k,1);continue}O.vy-=O.g*w,O.x+=O.vx*w,O.y+=O.vy*w,O.z+=O.vz*w,O.vx*=1-w*1.5,O.vz*=1-w*1.5;let G=O.life/O.max,J=O.s*(1+O.grow*(1-G)*8)*(O.grow?1:Math.min(1,G*2));ht.position.set(O.x,O.y,O.z),ht.rotation.set(O.x*7,O.y*5,0),ht.scale.setScalar(J),ht.updateMatrix(),i.setMatrixAt(P,ht.matrix),i.setColorAt(P,O.c),P++}i.count=P,i.instanceMatrix.needsUpdate=!0,i.instanceColor&&(i.instanceColor.needsUpdate=!0),P=0;for(let k=l.length-1;k>=0;k--){let O=l[k];if(O.t+=w,O.t>O.life){l.splice(k,1);continue}let G=O.t/O.life,J=Math.min(O.d,3.5),te=Math.min(O.d,O.d*G+J*.5),oe=Math.max(0,te-J),$=(O.b[0]-O.a[0])/O.d,ue=(O.b[1]-O.a[1])/O.d,le=(O.b[2]-O.a[2])/O.d;ht.position.set(O.a[0]+$*te,O.a[1]+ue*te,O.a[2]+le*te),ht.lookAt(O.a[0]+$*(te+1),O.a[1]+ue*(te+1),O.a[2]+le*(te+1)),ht.rotateY(Math.PI),ht.scale.set(.012,.012,Math.max(.01,te-oe)),ht.updateMatrix(),o.setMatrixAt(P++,ht.matrix)}o.count=P,o.instanceMatrix.needsUpdate=!0,P=0;for(let k=b.length-1;k>=0;k--){let O=b[k],G=O.g;if(G.state!=="active"){b.splice(k,1);continue}let J=pt.smokeLife-G.life,te=Math.min(1,J/1.2),oe=Math.min(1,G.life/1.5);for(let $ of O.balls){if(P>=d)break;let ue=te*oe;ht.position.set(G.x+($.x-G.x)*(.3+.7*te),G.y+($.y-G.y)*(.3+.7*te)+Math.sin(L*.6+$.ph)*.08,G.z+($.z-G.z)*(.3+.7*te)),ht.rotation.set($.ph,L*.05+$.ph,0),ht.scale.setScalar(Math.max(.01,$.s*ue*1.25)),ht.updateMatrix(),C.setMatrixAt(P,ht.matrix),Dl.setScalar($.c),C.setColorAt(P,Dl),P++}}C.count=P,C.instanceMatrix.needsUpdate=!0,C.instanceColor&&(C.instanceColor.needsUpdate=!0),P=0;let D=0,B=null;for(let k=T.length-1;k>=0;k--){let O=T[k],G=O.g;if(G.state!=="active"||G.life<=0){T.splice(k,1);continue}let J=Math.min(1,G.life/1.2)*Math.min(1,(pt.fireLife-G.life)*4+.3);for(let te of O.fl){if(P>=_)break;let oe=.7+Math.sin(L*14+te.ph)*.2+Math.sin(L*23+te.ph*2)*.1;ht.position.set(te.x,te.y,te.z),ht.rotation.set(0,te.ph+L,0),ht.scale.set(te.s*J,te.s*J*oe*1.3,te.s*J),ht.updateMatrix(),g.setMatrixAt(P,ht.matrix),Dl.setRGB(1,.45+oe*.35,.1),g.setColorAt(P,Dl),P++}D+=J,B=G}g.count=P,g.instanceMatrix.needsUpdate=!0,g.instanceColor&&(g.instanceColor.needsUpdate=!0),B?(U.position.set(B.x,B.y+1,B.z),U.intensity=Math.min(1,D)*(3+Math.sin(L*20)*.8)):U.intensity=0;for(let k=v.length-1;k>=0;k--){let O=v[k];O.t+=w;let G=O.t/O.life;if(G>=1){n.remove(O.m),O.m.material.dispose(),v.splice(k,1);continue}O.m.scale.setScalar(O.size*(.3+.7*Math.sqrt(G))),O.m.material.opacity=.9*(1-G),O.m.material.color.setRGB(1,.7-G*.4,.3-G*.25)}u>0&&(u-=w,u<=0&&(y.intensity=0))},e}function kd(n,e=!1){let t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},a={},o=n[0].morphTargetsRelative,l=new rn;l.morphTargetsRelative=o;let c=0;for(let h=0;h<n.length;++h){let p=n[h],f=0,m=0;if(t!==(p.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let x in p.attributes){if(!i.has(x))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+x+'" attribute exists among all geometries, or in none of them.'),null;r[x]===void 0&&(r[x]=[]),r[x].push(p.attributes[x]),f++}if(f!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==p.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let x in p.morphAttributes){if(!s.has(x))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;if(p.morphAttributes[x].length!==n[0].morphAttributes[x].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have the same number of morph targets for the "'+x+'" morph attribute.'),null;a[x]===void 0&&(a[x]=[]),a[x].push(p.morphAttributes[x]),m++}if(m!==s.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of morph attributes."),null;if(e){let x;if(t)x=p.index.count;else if(p.attributes.position!==void 0)x=p.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,x,h),c+=x}}if(t){let h=0,p=[];for(let f=0;f<n.length;++f){let m=n[f].index;for(let x=0;x<m.count;++x)p.push(m.getX(x)+h);h+=n[f].attributes.position.count}l.setIndex(p)}for(let h in r){let p=zd(r[h]);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,p)}for(let h in a){let p=a[h][0].length;if(p!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let f=0;f<p;++f){let m=[];for(let y=0;y<a[h].length;++y)m.push(a[h][y][f]);let x=zd(m);if(!x)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(x)}}}return l}function zd(n){let e,t,i,s=-1,r=0;for(let c=0;c<n.length;++c){let h=n[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let a=new e(r),o=new sn(a,t,i),l=0;for(let c=0;c<n.length;++c){let h=n[c];if(h.isInterleavedBufferAttribute){let p=l/t;for(let f=0,m=h.count;f<m;f++)for(let x=0;x<t;x++){let y=h.getComponent(f,x);o.setComponent(f+p,x,y)}}else a.set(h.array,l);l+=h.count*t}return s!==void 0&&(o.gpuType=s),o}var wy=n=>new De(n);function ys(n){let e=[];for(let t of n){let[i,s,r,a,o,l,c,h=0,p=0]=t,f=new dn(i,s,r).toNonIndexed();h&&f.rotateX(h),p&&f.rotateY(p),f.translate(a,o,l);let m=wy(c),x=f.attributes.position.count,y=new Float32Array(x*3),u=f.attributes.normal.array;for(let d=0;d<x;d++){let M=.82+u[d*3+1]*.18+u[d*3]*.05;y[d*3]=m.r*M,y[d*3+1]=m.g*M,y[d*3+2]=m.b*M}f.setAttribute("color",new sn(y,3)),e.push(f)}return kd(e)}var Ei=new gn({vertexColors:!0}),Hd=new gn({vertexColors:!0,depthTest:!0}),ci="#2a2c30";var Rh="#8a5a32";var Vd="#9aa0a8",Ey={glock:{k:"p",body:"#3a3c40"},usp:{k:"p",body:"#30343a",sil:.13},p2000:{k:"p",body:"#30343a"},dualies:{k:"p",body:Vd},p250:{k:"p",body:"#3d3f44"},tec9:{k:"p",body:"#2d2f33",long:1.25,mag:1.6},fiveseven:{k:"p",body:"#4b4f55"},cz75:{k:"p",body:"#3a3a3a",mag:1.3},deagle:{k:"p",body:Vd,big:1.35},r8:{k:"r",body:"#55585e"},mac10:{k:"s",body:ci,len:.26,mag:.16},mp9:{k:"s",body:ci,len:.32,stock:1},mp7:{k:"s",body:"#3a3d3f",len:.34,stock:1},mp5:{k:"s",body:ci,len:.42,stock:1,sil:.14,curve:1},ump:{k:"s",body:"#2f3134",len:.42,stock:1,mag:.18},p90:{k:"p90",body:"#3a3c3e"},bizon:{k:"s",body:ci,len:.44,stock:1,helical:1},nova:{k:"sg",body:ci,wood:"#3d3f42"},xm1014:{k:"sg",body:ci,wood:ci,auto:1},sawedoff:{k:"sg",body:"#3d3d3d",wood:Rh,short:1},mag7:{k:"sg",body:"#3a3d40",wood:ci,short:1,box:1},m249:{k:"mg",body:"#3a3d36"},negev:{k:"mg",body:"#45453c"},galil:{k:"ar",body:"#3c3a33",wood:"#4a4535",mag:"curve"},famas:{k:"bp",body:"#3a3f44",handle:1},ak47:{k:"ar",body:"#2e2e2e",wood:Rh,mag:"curve"},m4a4:{k:"ar",body:"#2f3236",wood:"#2f3236",rail:1},m4a1s:{k:"ar",body:"#33363a",wood:"#33363a",rail:1,sil:.2},sg553:{k:"ar",body:"#4b4a40",wood:"#4b4a40",scope:1,mag:"curve"},aug:{k:"bp",body:"#5b6650",scope:1},ssg08:{k:"sn",body:"#3d4a5a",len:.95},awp:{k:"sn",body:"#3e5a3a",len:1.12,big:1},g3sg1:{k:"sn",body:"#2f3230",len:1,auto:1},scar20:{k:"sn",body:"#2c2f33",len:1,auto:1},zeus:{k:"z",body:"#2a3a6a"},knife:{k:"kn"},he:{k:"gr",body:"#3d4a2c"},flash:{k:"gr",body:"#9aa3ad"},smoke:{k:"gr",body:"#5a6670",tall:1},molotov:{k:"mo"},incendiary:{k:"gr",body:"#a2552c",tall:1},decoy:{k:"gr",body:"#6b6b5b"},c4:{k:"c4"},defuser:{k:"kit"}},wh=new Map;function Ul(n){if(wh.has(n))return wh.get(n);let e=Ey[n]||{k:"p",body:ci},t=e.body||ci,i=[];switch(e.k){case"p":{let r=e.big||1,a=e.long||1;i.push([.034*r,.04*r,.19*r*a,0,.02*r,-.06*r,t],[.03*r,.11*r,.05*r,0,-.05*r,.015*r,"#222",.25],[.02,.025,.04,0,-.012*r,-.035,"#222"]),e.mag&&i.push([.026,.09*e.mag,.035,0,-.1,-.04,"#222"]),e.sil&&i.push([.03,.03,e.sil,0,.02,-.15*r-e.sil/2,"#1d1d1d"]);break}case"r":i.push([.03,.035,.17,0,.03,-.1,t],[.045,.05,.05,0,.02,-.02,t],[.03,.11,.045,0,-.04,.03,Rh,.3]);break;case"s":{let r=e.len;i.push([.05,.075,r,0,0,-r/2+.06,t],[.032,.11,.045,0,-.08,.02,"#222",.2],[.03,e.mag||.15,.04,0,-.1,-r*.35,"#1e1e1e",e.curve?.25:0],[.02,.02,.08,0,.01,-r+.02,"#1b1b1b"]),e.stock&&i.push([.03,.05,.16,0,-.01,.13,"#222"]),e.sil&&i.push([.04,.04,e.sil,0,.01,-r+.02-e.sil/2,"#1a1a1a"]),e.helical&&i.push([.05,.05,.22,0,-.06,-.2,"#2e2e2e"]);break}case"p90":i.push([.06,.1,.48,0,0,-.14,t],[.04,.03,.3,0,.065,-.18,"#222"],[.025,.025,.06,0,0,-.41,"#151515"]);break;case"sg":{let r=e.short?.5:.78;i.push([.05,.07,.24,0,0,-.06,t],[.022,.022,r,0,.02,-r/2-.12,"#1e1e1e"],[.035,.035,.24,0,-.025,-.3,e.wood,0,0]),e.short?i.push([.032,.11,.045,0,-.07,.04,"#222",.3]):i.push([.045,.08,.26,0,-.04,.17,e.wood]),e.box&&i.push([.035,.12,.05,0,-.08,-.14,"#222"]);break}case"mg":i.push([.08,.1,.42,0,0,-.08,t],[.03,.03,.55,0,.02,-.55,"#1e1e1e"],[.1,.11,.12,.06,-.08,-.08,"#3b3b2e"],[.05,.08,.24,0,-.02,.24,"#2a2a2a"],[.05,.03,.04,0,-.04,-.75,"#222"]);break;case"ar":{i.push([.05,.075,.32,0,0,-.08,t],[.022,.022,.32,0,.015,-.4,"#1d1d1d"],[.048,.055,.22,0,0,-.3,e.wood],[.045,.085,.26,0,-.025,.18,e.wood],[.03,.1,.04,0,-.07,.05,"#222",.3]),e.mag==="curve"?i.push([.032,.15,.05,0,-.1,-.11,"#2a2a2a",-.35]):i.push([.032,.14,.045,0,-.1,-.1,"#222",-.1]),e.rail&&i.push([.03,.035,.18,0,.055,-.08,"#25282b"]),e.sil&&i.push([.035,.035,e.sil,0,.015,-.56-e.sil/2+.02,"#1a1a1a"]),e.scope&&i.push([.04,.04,.16,0,.07,-.05,"#1e1e1e"]),!e.rail&&!e.scope&&i.push([.01,.03,.01,0,.045,-.5,"#1d1d1d"]);break}case"bp":i.push([.06,.1,.5,0,0,-.08,t],[.022,.022,.18,0,.02,-.42,"#1e1e1e"],[.03,.12,.05,0,-.1,.06,"#222"],[.03,.09,.04,0,-.08,-.16,"#222",.2]),e.handle&&i.push([.02,.04,.34,0,.08,-.12,t]),e.scope&&i.push([.045,.045,.16,0,.08,-.08,"#1e1e1e"]);break;case"sn":{let r=e.len,a=e.big?1.15:1;i.push([.055*a,.08*a,.36,0,0,-.05,t],[.024*a,.024*a,r*.55,0,.015,-.23-r*.275,"#1d1d1d"],[.05,.1*a,.28,0,-.035,.24,t],[.045,.045,.28,0,.085,-.06,"#181818"],[.06,.06,.04,0,.085,-.2,"#181818"],[.06,.06,.04,0,.085,.08,"#181818"],[.03,.08,.06,0,-.08,-.02,"#222"]),e.auto&&i.push([.035,.12,.05,0,-.1,-.12,"#222"]);break}case"z":i.push([.04,.06,.16,0,0,-.04,t],[.03,.1,.045,0,-.06,.03,"#222",.25],[.05,.04,.03,0,0,-.13,"#e6c84a"]);break;case"kn":i.push([.008,.035,.2,0,0,-.14,"#c9cdd2"],[.026,.03,.11,0,-.005,.02,"#222"],[.04,.012,.012,0,0,-.04,"#444"]);break;case"gr":{let r=e.tall?.12:.085;i.push([.065,r,.065,0,0,0,t],[.03,.03,.03,0,r/2+.015,0,"#888"],[.012,.06,.02,.03,r/2,0,"#999"]);break}case"mo":i.push([.06,.12,.06,0,0,0,"#5d7a3a"],[.03,.06,.03,0,.09,0,"#4d6a2a"],[.035,.04,.035,0,.13,0,"#e8d6b0"]);break;case"c4":i.push([.2,.06,.13,0,0,0,"#b8a27a"],[.07,.03,.05,.03,.04,0,"#1d1d1d"],[.05,.012,.03,.03,.056,0,"#5bdc6d"],[.18,.02,.02,0,.035,-.04,"#a33"]);break;case"kit":i.push([.16,.05,.1,0,0,0,"#2d3a55"],[.04,.04,.12,.05,.03,0,"#d4b13a"]);break}let s=ys(i);return wh.set(n,s),s}function ua(n){return new je(Ul(n),Ei)}var Gd={T:{shirt:"#8a7350",pants:"#5d5446",skin:"#c79a74",head:"#2b2b2b",vest:"#6b5c40",boots:"#2b2620",glove:"#2b2b2b"},CT:{shirt:"#36495f",pants:"#2f3b4a",skin:"#c79a74",head:"#26303b",vest:"#232d38",boots:"#1d1f22",glove:"#1d1f22"}},Eh={};function Ay(n){if(Eh[n])return Eh[n];let e=Gd[n],t=n==="CT",i=ys([[.44,.52,.26,0,.26,0,e.shirt],[.46,.4,.29,0,.3,0,e.vest],[.2,.12,.08,.1,.38,-.15,t?"#1b232c":"#4d4230"],[.3,.1,.2,0,-.01,0,"#2a2620"]]),s=ys(t?[[.22,.24,.23,0,.12,0,e.skin],[.25,.12,.26,0,.23,.005,"#3a4a3a"],[.2,.06,.03,0,.13,-.12,"#111"],[.06,.08,.05,0,.12,.12,"#333"]]:[[.22,.25,.23,0,.12,0,e.head],[.2,.07,.02,0,.14,-.115,e.skin],[.06,.03,.015,-.05,.145,-.125,"#111"],[.06,.03,.015,.05,.145,-.125,"#111"]]),r=ys([[.15,.48,.16,0,-.24,0,e.pants],[.16,.44,.17,0,-.66,0,e.pants],[.16,.08,.24,0,-.86,-.03,e.boots],[.165,.12,.08,0,-.45,-.07,t?"#222":"#4d4537"]]),a=ys([[.12,.3,.12,0,-.15,0,e.shirt],[.1,.28,.1,0,-.42,0,e.shirt],[.1,.09,.1,0,-.6,0,e.glove]]);return Eh[n]={torso:i,head:s,leg:r,arm:a}}function Wd(n){let e=Ay(n),t=new Wt,i=new Wt;t.add(i);let s=new Wt;s.position.y=.92,i.add(s);let r=new je(e.leg,Ei),a=new je(e.leg,Ei);r.position.set(-.11,0,0),a.position.set(.11,0,0),s.add(r,a);let o=new Wt;o.position.y=0,s.add(o);let l=new je(e.torso,Ei);o.add(l);let c=new Wt;c.position.y=.53,o.add(c);let h=new je(e.head,Ei);c.add(h);let p=new je(e.arm,Ei),f=new je(e.arm,Ei);f.position.set(.27,.47,0),p.position.set(-.27,.47,0),o.add(p,f);let m=new Wt;return m.position.set(.12,.3,-.38),o.add(m),t.userData={body:i,hips:s,legL:r,legR:a,chest:o,neck:c,armL:p,armR:f,gun:m,gunId:null,phase:0},t}function Xd(n,e){let t=n.userData;if(t.gunId!==e&&(t.gunId=e,t.gun.clear(),e)){let i=ua(e);i.scale.setScalar(1.15),t.gun.add(i)}}function qd(n,e,t){let i=n.userData;i.phase+=t*Math.min(e.speed,6)*2.4;let s=Math.sin(i.phase)*Math.min(1,e.speed/3)*.7,r=e.duck;i.hips.position.y=.92-r*.4,i.legL.rotation.x=s-r*1.1,i.legR.rotation.x=-s-r*1.1,e.onGround||(i.legL.rotation.x=-.5,i.legR.rotation.x=.3),i.chest.rotation.x=r*.25;let a=Math.max(-1.2,Math.min(1.2,e.pitch));i.armR.rotation.x=-1.35+a*.9-r*.25,i.armL.rotation.x=-1.25+a*.9-r*.25,i.armR.rotation.z=.15,i.armL.rotation.z=-.55,i.armL.position.z=-.05,i.gun.position.set(.04,.47-Math.cos(a)*.08+Math.sin(a)*.45-.12,-.42*Math.cos(a)),i.gun.rotation.x=a,i.neck.rotation.x=a*.5,i.body.rotation.x=0,i.body.position.y=0,e.dead>0&&(i.body.rotation.x=Math.min(1,e.dead)*1.45,i.body.position.y=Math.min(1,e.dead)*.15)}function Yd(){let n=new Wt,e=new Wt;n.add(e);let t=new Wt;e.add(t);let i=new Wt;return e.add(i),n.userData={hold:e,gun:t,arms:i,id:null,team:null},n}var Ah={};function Ry(n,e){let t=n+e;if(Ah[t])return Ah[t];let i=Gd[n],s=[[.075,.075,.42,.06,-.08,.25,i.shirt],[.07,.07,.08,.04,-.06,.02,i.glove]],r=e==="two"?[[.07,.07,.42,-.12,-.12,.05,i.shirt,0,.5],[.068,.068,.08,-.03,-.05,-.17,i.glove]]:e==="pistol"?[[.07,.07,.4,-.07,-.12,.22,i.shirt,0,.25],[.068,.068,.08,-.02,-.07,.03,i.glove]]:[];return Ah[t]=ys([...s,...r])}function Zd(n,e,t){let i=n.userData;if(i.id===e&&i.team===t||(i.id=e,i.team=t,i.gun.clear(),i.arms.clear(),!e))return;let s=Xe[e]?.cat||e,r=new je(Ul(e),Hd);i.gun.add(r),(s==="grenade"||e==="c4")&&(r.scale.setScalar(.7),r.position.set(.02,.02,0));let a=s==="pistol"?"pistol":s==="knife"||s==="grenade"||s==="c4"||s==="equip"||e==="defuser"?"one":"two";i.arms.add(new je(Ry(t,a),Hd)),i.base=s==="pistol"?[.14,-.15,-.34]:s==="knife"?[.16,-.16,-.3]:s==="grenade"||s==="c4"?[.17,-.19,-.38]:s==="sniper"?[.13,-.15,-.36]:[.13,-.14,-.36],n.traverse(o=>{o.renderOrder=10,o.frustumCulled=!1})}var be=null,fa=null,Ch=null,Ai={x:0,y:0,z:0,yaw:0};function da(){if(be){be.state==="suspended"&&be.resume();return}try{be=new(window.AudioContext||window.webkitAudioContext),fa=be.createGain(),fa.gain.value=.55;let n=be.createDynamicsCompressor();n.threshold.value=-14,n.ratio.value=6,fa.connect(n),n.connect(be.destination),Ch=be.createBuffer(1,be.sampleRate*1.5,be.sampleRate);let e=Ch.getChannelData(0);for(let t=0;t<e.length;t++)e[t]=Math.random()*2-1}catch{be=null}}function Jd(n,e,t,i){Ai.x=n,Ai.y=e,Ai.z=t,Ai.yaw=i}function yt(n,e=1,t=30){let i=be.createGain(),s=e,r=0;if(n){let a=n[0]-Ai.x,o=n[1]-Ai.y,l=n[2]-Ai.z,c=Math.hypot(a,o,l);if(s*=1/(1+(c/t)**2*3),c>.5){let h=Math.cos(Ai.yaw),p=-Math.sin(Ai.yaw);r=Math.max(-1,Math.min(1,(a*h+l*p)/c))*.8}}if(s<.004)return null;if(i.gain.value=s,be.createStereoPanner){let a=be.createStereoPanner();a.pan.value=r,i.connect(a),a.connect(fa)}else i.connect(fa);return i}function wt(n,e,t,i,s,r=.7,a="lowpass",o=.002,l=1){let c=be.createBufferSource();c.buffer=Ch,c.playbackRate.value=.8+Math.random()*.4;let h=be.createBiquadFilter();h.type=a,h.Q.value=r,h.frequency.setValueAtTime(i,e),h.frequency.exponentialRampToValueAtTime(Math.max(30,s),e+t);let p=be.createGain();p.gain.setValueAtTime(1e-4,e),p.gain.exponentialRampToValueAtTime(l,e+o),p.gain.exponentialRampToValueAtTime(1e-4,e+t),c.connect(h),h.connect(p),p.connect(n),c.start(e,Math.random()),c.stop(e+t+.05)}function It(n,e,t,i,s,r="sine",a=.5,o=.003){let l=be.createOscillator();l.type=r,l.frequency.setValueAtTime(i,e),s!==i&&l.frequency.exponentialRampToValueAtTime(Math.max(20,s),e+t);let c=be.createGain();c.gain.setValueAtTime(1e-4,e),c.gain.exponentialRampToValueAtTime(a,e+o),c.gain.exponentialRampToValueAtTime(1e-4,e+t),l.connect(c),c.connect(n),l.start(e),l.stop(e+t+.05)}var $d={pistol:{f:2400,d:.18,b:160,v:.8},smg:{f:2e3,d:.16,b:130,v:.75},rifle:{f:1600,d:.26,b:95,v:1},sniper:{f:1200,d:.55,b:70,v:1.25},heavy:{f:1300,d:.32,b:80,v:1.05},equip:{f:4e3,d:.3,b:300,v:.6}};function Ih(n,e,t,i){if(!be)return;let s=$d[n]||$d.rifle,r=be.currentTime,a=yt(e,(t?.35:s.v)*(e?1:.6),t?12:60);if(a){if(n==="equip"){wt(a,r,.35,6e3,3e3,2,"bandpass",.002,.7),It(a,r,.3,90,60,"sawtooth",.4);return}if(t){wt(a,r,.09,1800,500,1,"lowpass",.001,.9),It(a,r,.05,300,120,"triangle",.3);return}wt(a,r,s.d,s.f*(i?.7:1),200,.9,"lowpass",.001,1),wt(a,r,.04,6e3,2500,.8,"highpass",.001,.45),It(a,r,s.d*.7,s.b*1.6,s.b*.5,"sine",.9),e&&wt(a,r+.05,s.d*2.5,700,150,.5,"lowpass",.02,.18)}}function Ph(n,e=1){if(!be)return;let t=yt(n,.5*e,9);if(!t)return;let i=be.currentTime;wt(t,i,.06,900+Math.random()*400,200,1.2,"lowpass",.002,.7),It(t,i,.04,90,60,"sine",.25)}function Kd(n){if(!be)return;let e=yt(n,.6,10);if(!e)return;let t=be.currentTime;wt(e,t,.1,700,120,1,"lowpass",.002,.9)}function pa(n,e=2200,t=.4){if(!be)return;let i=yt(n,t,8);if(!i)return;let s=be.currentTime;wt(i,s,.03,e,e*.5,3,"bandpass",.001,.9)}function jd(n){if(!be)return;let e=be.currentTime,t=yt(n,.45,8);t&&(wt(t,e,.04,1500,700,3,"bandpass",.001,.8),wt(t,e+.35,.05,2600,1300,4,"bandpass",.001,.9),wt(t,e+.8,.05,1800,900,4,"bandpass",.001,.9))}function Fl(n,e){if(!be)return;let t=be.currentTime,i=yt(null,.45);n?It(i,t,e?.25:.12,e?2900:1500,e?2700:900,"triangle",.5):wt(i,t,.07,900,300,1,"lowpass",.002,.6)}function Qd(){if(!be)return;let n=be.currentTime,e=yt(null,.6);wt(e,n,.12,600,150,1,"lowpass",.002,.9),It(e,n,.1,140,70,"sine",.6)}function ep(){if(!be)return;let n=be.currentTime,e=yt(null,.25);It(e,n,.08,1300,1300,"square",.25),It(e,n+.07,.12,1750,1750,"square",.25)}function Lh(n,e){if(!be)return;let t=be.currentTime,i=yt(n,e?1.6:1.2,e?200:70);i&&(wt(i,t,e?2.4:1.2,1800,60,.6,"lowpass",.004,1),It(i,t,e?1.4:.7,80,30,"sine",1))}function tp(n){if(!be)return;let e=be.currentTime,t=yt(n,1.1,50);t&&(wt(t,e,.4,5e3,800,.7,"lowpass",.002,1),It(t,e,.2,120,50,"sine",.8))}function np(n){if(!be||n<.3)return;let e=be.currentTime,t=yt(null,.12);It(t,e,n,3200,3150,"sine",.3,.02)}function Nh(n){if(!be)return;let e=be.currentTime,t=yt(n,.7,25);t&&wt(t,e,2.2,2500,500,.4,"highpass",.05,.5)}function ip(n){if(!be)return;let e=be.currentTime,t=yt(n,.9,25);t&&(wt(t,e,1.2,1200,300,.6,"lowpass",.01,.9),wt(t,e+.05,.3,3e3,1500,2,"bandpass",.001,.5))}function sp(n){if(!be)return;let e=be.currentTime,t=yt(n,.25,12);t&&wt(t,e,.25,900+Math.random()*500,300,1,"lowpass",.02,.6)}function rp(n){if(!be)return;let e=be.currentTime,t=yt(n,.5,15);t&&(It(t,e,.06,900,500,"triangle",.4),wt(t,e,.04,2500,1200,2,"bandpass",.001,.4))}function Dh(){if(!be)return;let n=be.currentTime,e=yt(null,.4);wt(e,n,.18,400,1600,1,"bandpass",.05,.5)}function Uh(n,e){if(!be)return;let t=be.currentTime,i=yt(n,.6,40);i&&It(i,t,.12,e?2600:2100,e?2600:2100,"square",.2)}function Fh(){if(!be)return;let n=be.currentTime,e=yt(null,.3);It(e,n,.06,1400+Math.random()*600,1400,"square",.15)}function Oh(n){if(!be)return;let e=be.currentTime,t=yt(n,.6,15);t&&(wt(t,e,.2,3e3,1500,3,"bandpass",.001,.8),It(t,e+.1,.25,600,900,"triangle",.3))}function ap(){if(!be)return;let n=be.currentTime,e=yt(null,.35);It(e,n,.06,900,900,"triangle",.4),It(e,n+.05,.08,1350,1350,"triangle",.35)}function op(){if(!be)return;let n=be.currentTime,e=yt(null,.3);It(e,n,.15,220,180,"square",.25)}function lp(){if(!be)return;let n=be.currentTime,e=yt(null,.35);wt(e,n,.08,2e3,900,2,"bandpass",.002,.8)}function cp(n){if(!be)return;let e=be.currentTime,t=yt(null,.32);(n?[523,659,784,1047]:[440,415,392,330]).forEach((s,r)=>{It(t,e+r*.11,.5,s,s,"triangle",.35),It(t,e+r*.11,.5,s/2,s/2,"sawtooth",.08)})}function Bh(){if(!be)return;let n=be.currentTime,e=yt(null,.25);[392,523].forEach((t,i)=>It(e,n+i*.12,.25,t,t,"triangle",.35))}var zh=n=>document.getElementById(n),vs=n=>String(n).replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]),Rn=(n,e)=>{n._v!==e&&(n._v=e,n.textContent=e)},Ms=n=>Xe[n]?Xe[n].name:n==="c4"?"C4":n==="world"?"ca\xEDda":n;function kh(n){let e=n.n,t=document.createElement("canvas");t.width=e,t.height=e;let i=t.getContext("2d"),s=i.createImageData(e,e),r=s.data;for(let o=0;o<e*e;o++){let l=-1e9,c=0;for(let y=n.L-1;y>=0;y--){let u=n.top[y][o];if(!isNaN(u)&&n.cls[y][o]!==3){(y===n.L-1||l<-1e8)&&(l=u,c=n.cls[y][o]);break}}let h=0,p=0,f=0,m=0;if(l>-1e8){let y=Math.max(0,Math.min(1,l/6.5));h=70+y*120,p=78+y*110,f=88+y*70,m=235,c===2&&(h*=.62,p*=.62,f*=.62)}else{let y=!1;for(let u=0;u<n.L;u++)n.cls[u][o]===3&&(y=!0);y&&(h=p=f=22,m=230)}n.flags[o]&12&&m&&(h=h*.6+120,p=p*.6+40,f*=.6),r[o*4]=h,r[o*4+1]=p,r[o*4+2]=f,r[o*4+3]=m}i.putImageData(s,0,0);let a=n.info.zones;i.font="bold 34px Rajdhani, sans-serif",i.textAlign="center",i.textBaseline="middle";for(let o of["A","B"]){let l=a[o];l&&(i.fillStyle="#000",i.fillText(o,(l[0]+l[2])/2+1,(l[1]+l[3])/2+1),i.fillStyle="#ffd25a",i.fillText(o,(l[0]+l[2])/2,(l[1]+l[3])/2))}return t}function hp(n,e,t,i,s,r,a){let o=n.getContext("2d"),l=n.width,c=1.25;o.clearRect(0,0,l,l),o.save(),o.beginPath(),o.rect(0,0,l,l),o.clip(),o.translate(l/2,l/2),o.rotate(i.yaw),o.scale(c,c);let h=i.x/t.cell,p=i.z/t.cell;o.drawImage(e,-h,-p);let f=(m,x,y,u=3.4)=>{o.fillStyle=y,o.beginPath(),o.arc(m/t.cell-h,x/t.cell-p,u/c,0,7),o.fill(),o.strokeStyle="#000",o.lineWidth=1/c,o.stroke()};if(r&&(r.s==="planted"||r.s==="dropped")&&(a==="T"||r.s==="planted"&&r.seen)){o.fillStyle=r.s==="planted"?"#ff4038":"#ffb03a";let m=r.x/t.cell-h,x=r.z/t.cell-p;o.fillRect(m-4/c,x-3/c,8/c,6/c)}for(let m of s)f(m.x,m.z,m.col,m.me?0:3.4);o.restore(),o.fillStyle="#fff",o.beginPath(),o.moveTo(l/2,l/2-7),o.lineTo(l/2+5,l/2+5),o.lineTo(l/2,l/2+2),o.lineTo(l/2-5,l/2+5),o.closePath(),o.fill()}var Ue={el:{},init(){for(let n of["hud","moneyV","moneyAdd","scT","scCT","pipsT","pipsCT","clock","clockV","bombIco","feed","hpV","arV","helmV","ammo","wname","magV","resV","slots","xhair","hitmark","centerMsg","prog","progL","progB","hint","dmgDir","scope","flash","hurt","spec","banner","ban1","ban2","buyHint","zoneName","board"])this.el[n]=zh(n)},money(n){Rn(this.el.moneyV,String(n))},moneyDelta(n,e){if(!n)return;let t=document.createElement("div");t.className=n<0?"neg":"",t.textContent=(n>0?"+$":"-$")+Math.abs(n)+(e?"  "+e:""),this.el.moneyAdd.appendChild(t),setTimeout(()=>t.remove(),2300)},vitals(n,e,t){Rn(this.el.hpV,String(n)),Rn(this.el.arV,String(e)),this.el.helmV.hidden=!t,this.el.hpV.parentElement.classList.toggle("low",n<=25)},ammo(n,e,t,i){Rn(this.el.wname,n),this.el.ammo.querySelector(".nums").style.visibility=i?"":"hidden",Rn(this.el.magV,String(e)),Rn(this.el.resV,String(t)),this.el.ammo.classList.toggle("low",i&&e<=5)},clock(n,e,t){let i=Math.max(0,Math.ceil(n));Rn(this.el.clockV,t?"":Math.floor(i/60)+":"+String(i%60).padStart(2,"0")),this.el.clock.classList.toggle("red",e),this.el.bombIco.hidden=!t},score(n,e,t,i,s,r){Rn(this.el.scT,String(n)),Rn(this.el.scCT,String(e));let a=(o,l,c)=>{let h=l+"/"+c;o._k!==h&&(o._k=h,o.innerHTML=Array.from({length:c},(p,f)=>`<i class="${f<l?"":"dead"}"></i>`).join(""))};a(this.el.pipsT,t,i),a(this.el.pipsCT,s,r)},feed(n,e,t,i,s,r){let a=document.createElement("div");for(r&&(a.className="mine"),a.innerHTML=(n?`<span class="${n.team}">${vs(n.name)}</span>`:"")+`<span class="w">${vs(Ms(t))}${s?" \u27C2":""}${i?" \u271B":""}</span><span class="${e.team}">${vs(e.name)}</span>`,this.el.feed.appendChild(a);this.el.feed.children.length>6;)this.el.feed.firstChild.remove();setTimeout(()=>a.remove(),7e3)},slots(n,e){let t=n.map(i=>i.key+i.id).join()+e;this.el.slots._k!==t&&(this.el.slots._k=t,this.el.slots.innerHTML=n.map(i=>`<div class="${i.slot===e?"on":""}"><b>${i.key}</b>${vs(i.name)}</div>`).join(""))},showSlots(){this.el.slots.style.opacity=1,clearTimeout(this._st),this._st=setTimeout(()=>this.el.slots.style.opacity=.35,1800)},crosshair(n,e,t){let i=Math.round(n),s=this.el.xhair;if(s._g===i+""+e)return;s._g=i+""+e,s.style.display=e?"":"none";let[r,a,o,l]=s.children;r.style.left=-(i+8)+"px",a.style.left=i+"px",o.style.top=-(i+8)+"px",l.style.top=i+"px"},hit(n){let e=this.el.hitmark;e.classList.remove("on"),e.offsetWidth,e.classList.add("on"),e.style.filter=n?"drop-shadow(0 0 2px red) sepia(1) saturate(8) hue-rotate(-30deg)":""},center(n,e=2200){let t=this.el.centerMsg;t.textContent=n,t.style.opacity=1,clearTimeout(this._ct),e&&(this._ct=setTimeout(()=>t.style.opacity=0,e))},progress(n,e){if(e==null){this.el.prog.hidden=!0;return}this.el.prog.hidden=!1,Rn(this.el.progL,n),this.el.progB.style.width=(e*100).toFixed(1)+"%"},hint(n){Rn(this.el.hint,n||"")},dmgDir(n){let e=document.createElement("i");e.style.transform=`rotate(${n}rad) translateY(-140px)`,this.el.dmgDir.appendChild(e),setTimeout(()=>e.remove(),1500)},banner(n,e,t){let i=this.el.banner;if(!e){i.hidden=!0;return}i.className=n||"",i.hidden=!1,Rn(this.el.ban1,e),Rn(this.el.ban2,t||"")}};function up(n,e){let t=[...n.players.values()],i=o=>`<tr class="${o.team} ${o.alive?"":"dead"} ${o.id===e?"me":""}"><td>${vs(o.name)}${o.inv&&o.inv.c4&&n.players.get(e)?.team==="T"?" \u{1F4A3}":""}</td><td>$${o.money}</td><td>${o.k}</td><td>${o.d}</td><td>${o.a}</td><td>${o.mvp?"\u2605"+o.mvp:""}</td><td>${o.ping||""}</td></tr>`,s=o=>{let l=t.filter(c=>c.team===o).sort((c,h)=>h.k-c.k||c.d-h.d);return`<div class="tt ${o}">${o==="T"?"TERRORISTAS":"CONTRATERRORISTAS"}</div><table><tr><th>Jugador</th><th>Plata</th><th>K</th><th>D</th><th>A</th><th>MVP</th><th></th></tr>${l.map(i).join("")}</table>`},r=n.score[n.half===0?0:1],a=n.score[n.half===0?1:0];return`<div class="bh"><span>${vs(n.mapName)} \xB7 Ronda ${n.round}</span><span><b style="color:var(--t)">${r}</b> \u2013 <b style="color:var(--ct)">${a}</b></span></div>${s("T")}${s("CT")}`}function fp(n,e,t,i){let s=zh("buyCols");s.innerHTML="",Rl.forEach((r,a)=>{let o=document.createElement("div");o.className="bcol",o.dataset.c=a,o.innerHTML=`<h5><b>${a+1}</b>${r.name}</h5>`,r.items[n].forEach((l,c)=>{let h=Xe[l],p=document.createElement("div");p.className="bit",p.dataset.id=l,p.innerHTML=`<span class="k">${c+1}</span><span class="n">${vs(h.name)}</span><span class="p">$${h.price}</span>`;let f=e(l);f&&p.appendChild(f),p.onclick=()=>t(l),p.onmouseenter=()=>i(l),o.appendChild(p)}),s.appendChild(o)})}function Ol(n,e){zh("buyMoney").textContent=n.money;for(let t of document.querySelectorAll("#buyCols .bit")){let i=t.dataset.id,r=Xe[i].price;i==="vesthelm"&&n.ar>=100&&!n.helm&&(r=350),t.querySelector(".p").textContent="$"+r;let a=n.inv.p===i||n.inv.s===i||i==="vest"&&n.ar>=100||i==="vesthelm"&&n.ar>=100&&n.helm||i==="defuser"&&n.inv.kit||i==="zeus"&&n.inv.zeus||n.inv.g.includes(i);t.classList.toggle("own",a),t.classList.toggle("no",n.money<r)}for(let t of document.querySelectorAll("#buyCols .bcol"))t.classList.toggle("sel",+t.dataset.c===e)}function dp(n){let e=Xe[n];return e?e.dmg?`${e.name} \u2014 $${e.price} \xB7 da\xF1o ${e.dmg} \xB7 cargador ${e.mag||"-"} \xB7 ${e.rpm} disparos/min \xB7 penetraci\xF3n de blindaje ${Math.round(e.ap*100)}% \xB7 premio por baja $${e.reward}`:`${e.name} \u2014 $${e.price}`+(e.cat==="grenade"?` \xB7 premio por baja $${e.reward}`:""):""}var pp=.0254,mp=Math.PI/180,nt=n=>document.getElementById(n),Hl=[{id:"dust2",name:"Dust II",sub:"Desierto \xB7 cl\xE1sico"},{id:"mirage",name:"Mirage",sub:"Pueblo marroqu\xED"},{id:"vertigo",name:"Vertigo",sub:"Rascacielos en obra"}],Xl={get(n,e){try{let t=localStorage.getItem(n);return t?JSON.parse(t):e}catch{return e}},set(n,e){try{localStorage.setItem(n,JSON.stringify(e))}catch{}}},H={players:new Map,drops:new Map,nades:[],bomb:{state:"none",x:0,y:0,z:0,t:0},phase:"lobby",timeLeft:0,round:0,score:[0,0],half:0,time:0,cfg:{map:Xl.get("ls:map","dust2"),len:"corta",fill:5,diff:"normal"},prefs:{}},Ct=null,Qe="local",mt=null,Pt=null,Vl={},Qh=!1,vn,Kt,Ut,ga,cr,Mn,jt,Bl=null,$h=null,et=()=>!Ct||Ct.isHost||!Ct.online;function Cn(n,e,t){Ct&&Ct.online&&Arcade.send(n,e,t)}H.emit=(n,e)=>{Cn(n,e),ou(n,e,Qe)};H.emitTo=(n,e,t)=>{let i=H.players.get(n);n===Qe?ou(e,t,Qe):i&&!i.bot&&Cn(e,t,{to:n})};H.end=(n,e)=>{Ct&&Ct.online?Arcade.end({winners:n,text:e}):setTimeout(ov,500)};H.solidAt=(n,e,t)=>Tl(H.W,n,e,t);H.floorAt=(n,e,t)=>{let i=rr(H.W,n,e,t);return i>-1e8?i:t-.5};var Gl=new Map;H.setPlanting=(n,e)=>{e>0?Gl.set(n,e):Gl.delete(n)};H.planting=n=>Gl.get(n)||0;H.fallDamage=(n,e)=>{let t=_h(e);t>0&&mt&&mt.damage(n.id,n.id,t,"leg","world",{raw:!0})};function Et(n,e){et()?mt&&mt.handle(n,e,Qe,{admin:Arcade.admin&&Arcade.admin.active}):Cn(n,e,{to:Ct.hostId})}var Iy=["hit","buy","drop","take","nade","plant","defst","defx","defok","adm","fall"],N={pl:null,slot:"s",drawT:0,fireT:0,reloadT:0,shots:0,pp:0,py:0,scope:0,ammo:{p:[0,0],s:[0,0]},ammoW:{p:null,s:null},invV:-1,gsel:0,plantT:0,defT:0,defusing:!1,trig:!1,trig2:!1,nadeHold:0,nadeCd:0,stepT:0,deadT:0,spec:null,blind:0,blindMax:0,shake:0,bob:0,kick:0,lastSlot:"k",zeus:!1,sway:[0,0],swayT:[0,0],pickCd:0,voidSent:!1,lastMoney:null,rescope:0,knife2:!1},vt=()=>H.players.get(Qe),Rt=new Set,pn=!1,Ma=!1,ur=!1,or=Xl.get("ls:sens",.0021),qt={mx:0,mz:0,fire:!1,look:null},bs=matchMedia("(pointer: coarse)").matches;addEventListener("keydown",n=>{if(n.repeat&&!["KeyW","KeyA","KeyS","KeyD"].includes(n.code)){n.code==="Tab"&&n.preventDefault();return}if(H.phase!=="lobby"){if(Rt.add(n.code),["Tab","Space","ControlLeft","ControlRight","AltLeft","KeyB"].includes(n.code)&&n.preventDefault(),bn){Yy(n);return}tu(n.code)}});addEventListener("keyup",n=>{Rt.delete(n.code),n.code==="KeyE"&&N.defusing&&Yl()});addEventListener("blur",()=>{Rt.clear(),pn=Ma=!1});addEventListener("mousedown",n=>{if(da(),!(H.phase==="lobby"||bn)){if(!ur&&!bs){_a();return}n.button===0&&(pn=!0),n.button===2&&(Ma=!0,su())}});addEventListener("mouseup",n=>{n.button===0&&(pn=!1),n.button===2&&(Ma=!1)});addEventListener("contextmenu",n=>n.preventDefault());addEventListener("mousemove",n=>{if(!ur||!N.pl||H.phase==="lobby")return;let e=N.scope?Ny():1;eu(n.movementX*or/e,n.movementY*or/e)});addEventListener("wheel",n=>{ur&&H.phase!=="lobby"&&!bn&&Sp(n.deltaY>0?1:-1)},{passive:!0});function eu(n,e){let t=N.pl;t&&(t.yaw-=n,t.pitch=Math.max(-1.5,Math.min(1.5,t.pitch-e)),N.swayT[0]+=n*4,N.swayT[1]+=e*4)}function _a(){let n=vn.domElement;try{let e=n.requestPointerLock&&n.requestPointerLock();e&&e.catch&&e.catch(()=>{})}catch{}}document.addEventListener("pointerlockchange",()=>{ur=document.pointerLockElement===vn.domElement,ql()});function ql(){nt("clickPlay").hidden=ur||bs||H.phase==="lobby"||bn||!Qh}function tu(n){let e=vt();if(e){if(n==="KeyB"){Zl();return}if(n!=="Tab"){if(n==="BracketLeft"||n==="BracketRight"){or=Math.max(4e-4,Math.min(.01,or*(n==="BracketLeft"?.9:1.1))),Xl.set("ls:sens",or),Ue.center("Sensibilidad "+(or*1e3).toFixed(2),1200);return}if(!e.alive){n==="Space"&&lu(1);return}if(n==="Digit1")yn("p");else if(n==="Digit2")yn("s");else if(n==="Digit3")N.slot==="k"&&e.inv.zeus?yn("z"):(N.slot,yn("k"));else if(n==="Digit4"){let t=e.inv.g;t.length&&(N.slot==="g"&&(N.gsel=(N.gsel+1)%t.length),yn("g",!0))}else n==="Digit5"?yn("c4"):n==="KeyQ"?yn(N.lastSlot):n==="KeyR"?Tp():n==="KeyG"?Dy():n==="KeyE"?wp():n==="KeyF"&&(N.inspect=1.6)}}}function Py(){if(!bs)return;nt("touch").hidden=!1;let n=nt("stick"),e=n.firstElementChild,t=null,i=null;n.addEventListener("touchstart",r=>{t=r.changedTouches[0].identifier;let o=n.getBoundingClientRect();i=[o.left+o.width/2,o.top+o.height/2],r.preventDefault()},{passive:!1}),addEventListener("touchmove",r=>{for(let a of r.changedTouches)if(a.identifier===t){let o=(a.clientX-i[0])/55,l=(a.clientY-i[1])/55,c=Math.hypot(o,l);c>1&&(o/=c,l/=c),qt.mx=o,qt.mz=l,e.style.transform=`translate(${o*40}px,${l*40}px)`}else qt.look&&a.identifier===qt.look.id&&(eu((a.clientX-qt.look.x)*.006,(a.clientY-qt.look.y)*.006),qt.look.x=a.clientX,qt.look.y=a.clientY)},{passive:!0}),addEventListener("touchend",r=>{for(let a of r.changedTouches)a.identifier===t&&(t=null,qt.mx=qt.mz=0,e.style.transform=""),qt.look&&a.identifier===qt.look.id&&(qt.look=null)}),vn.domElement.addEventListener("touchstart",r=>{let a=r.changedTouches[0];a.clientX>innerWidth*.35&&(qt.look={id:a.identifier,x:a.clientX,y:a.clientY}),da()},{passive:!0});let s=(r,a,o)=>{let l=nt(r);l.addEventListener("touchstart",c=>{c.preventDefault(),a()},{passive:!1}),l.addEventListener("touchend",c=>{c.preventDefault(),o&&o()},{passive:!1})};s("tFire",()=>pn=!0,()=>pn=!1),s("tJump",()=>Rt.add("Space"),()=>Rt.delete("Space")),s("tDuck",()=>Rt.add("KeyC"),()=>Rt.delete("KeyC")),s("tReload",()=>tu("KeyR")),s("tSwitch",()=>Sp(1)),s("tBuy",()=>Zl()),s("tUse",()=>{Rt.add("KeyE"),wp()},()=>{Rt.delete("KeyE"),N.defusing&&Yl()}),s("tScope",()=>su())}function $i(n,e=vt()){if(!e)return null;let t=e.inv;return n==="p"?t.p:n==="s"?t.s:n==="k"?"knife":n==="z"?t.zeus?"zeus":null:n==="g"?t.g.length?t.g[Math.min(N.gsel,t.g.length-1)]:null:n==="c4"&&t.c4?"c4":null}var kn=()=>$i(N.slot)||"knife";function yn(n,e){$i(n)&&(n===N.slot&&!e||(n!==N.slot&&(N.lastSlot=N.slot),N.slot=n,N.drawT=n==="k"?.35:.6,N.reloadT=0,N.scope=0,N.plantT=0,N.nadeHold=0,N.defusing&&Yl(),pa(null,1400,.25),Ue.showSlots()))}function Sp(n){let e=["p","s","k","z","g","c4"].filter(i=>$i(i));if(!e.length)return;let t=e.indexOf(N.slot);yn(e[(t+n+e.length)%e.length])}function nu(){return $i("p")?"p":$i("s")?"s":"k"}function iu(){let n=vt();if(!(!n||n.inv.v===N.invV)){N.invV=n.inv.v;for(let e of["p","s"]){let t=n.inv[e];if(t!==N.ammoW[e]){let i=N.ammoW[e];N.ammoW[e]=t;let s=Xe[t];N.ammo[e]=t?n.inv[e+"a"]?[...n.inv[e+"a"]]:[s.mag,s.reserve]:[0,0],t&&e==="p"&&n.alive&&H.phase!=="post"&&i!==t&&yn("p",!0)}}$i(N.slot)||yn(nu(),!0)}}function Tp(){let n=N.slot;if(n!=="p"&&n!=="s")return;let e=Xe[kn()],t=N.ammo[n];!e.mag||t[0]>=e.mag||t[1]<=0||N.reloadT>0||N.drawT>0||(N.reloadT=e.reload,N.scope=0,jd(null))}function Ly(){let n=N.slot,e=Xe[kn()],t=N.ammo[n];if(!t||!e.mag)return;let i=e.mag-t[0],s=Ci("ls.ammo")?i:Math.min(i,t[1]);t[0]+=s,Ci("ls.ammo")||(t[1]-=s)}var Ny=()=>{let n=Xe[kn()];return n&&n.scope?n.scope[Math.max(0,N.scope-1)]:1};function su(){let n=vt();if(!n||!n.alive)return;let e=kn(),t=Xe[e];if(t&&t.scope&&N.reloadT<=0&&N.drawT<=0){N.scope=(N.scope+1)%(t.scope.length+1),pa(null,3e3,.2);return}e==="knife"&&N.fireT<=0&&N.drawT<=0&&Rp(!0),t&&t.cat==="grenade"&&(N.nadeHold=.3)}function Dy(){let n=vt(),e=N.slot;if(!n.alive)return;let t=N.pl;e==="p"||e==="s"?Et("drop",{s:e,x:t.x,y:t.y,z:t.z,yaw:t.yaw,ammo:N.ammo[e]}):e==="c4"&&Et("drop",{s:"c4",x:t.x,y:t.y,z:t.z,yaw:t.yaw})}function wp(){let n=vt();if(!n||!n.alive||!N.pl)return;let e=N.pl,t=H.bomb;if(n.team==="CT"&&t.state==="planted"&&Math.hypot(e.x-t.x,e.z-t.z)<1.7&&Math.abs(e.y-t.y)<1.6&&e.onGround){N.defusing||(N.defusing=!0,N.defT=0,Et("defst",{}),Oh(null));return}let i=Ep();i&&Et("take",{id:i.id,swap:!0,ammo:N.ammo[xs(i.w)===1?"p":"s"]})}function Yl(){N.defusing=!1,N.defT=0,Et("defx",{})}function Ep(){let n=N.pl,e=null,t=1e9,i=-Math.sin(n.yaw),s=-Math.cos(n.yaw);for(let r of H.drops.values()){let a=r.x-n.x,o=r.z-n.z,l=Math.hypot(a,o);if(l>2.2||Math.abs(r.y-n.y)>1.5)continue;let c=(a*i+o*s)/Math.max(.01,l);l>.8&&c<.75||l<t&&(t=l,e=r)}return e}var Hh=[];function ru(){Hh.length=0;for(let n of H.players.values()){if(!n.alive)continue;let e=We.hStand+(We.hCrouch-We.hStand)*(n.duck||0);Hh.push({id:n.id,x:n.x,y:n.y,z:n.z,h:e,alive:!0})}return Hh}var hr=new X;function Uy(n){if(n.id===Qe&&!N.spec)return Mn&&Mn.userData.gun.getWorldPosition(hr),null;let e=-Math.sin(n.yaw)*Math.cos(n.pitch),t=Math.sin(n.pitch),i=-Math.cos(n.yaw)*Math.cos(n.pitch);return[n.x+e*.75+Math.cos(n.yaw)*.12,n.y+on(n)-.18+t*.6,n.z+i*.75-Math.sin(n.yaw)*.12]}var Fy=0;H.fireBullets=(n,e,t,i,s)=>{let r=s||Xe[e],a=H.players.get(n),o=ru(),l=[],c=[],h=new Map,p=!1;for(let m=0;m<r.pellets;m++){let x=i(Math.random),y=Ll(H.W,H.nades,n,t[0],t[1],t[2],x[0],x[1],x[2],r,o);l.push(y.end.map(u=>+u.toFixed(2)));for(let u of y.impacts)c.push(u.map(d=>+d.toFixed(2)));if(y.hit){let u=h.get(y.hit.id)||{d:0,part:"leg",pos:y.hit.pos,wb:y.wb};u.d+=y.hit.dmg,gp(y.hit.part)>gp(u.part)&&(u.part=y.hit.part),h.set(y.hit.id,u),y.wb&&(p=!0)}}let f=[...h.entries()].map(([m,x])=>[m,x.pos.map(y=>+y.toFixed(2)),x.part==="head"?1:0]);Ap(n,e,t,l,c,f,r),Cn("sh",{i:n,w:e,o:t.map(m=>+m.toFixed(2)),e:l,m:c.slice(0,8),h:f});for(let[m,x]of h){let y={t:m,w:e,part:x.part,d:+x.d.toFixed(1),wb:x.wb};n===Qe?Et("hit",y):et()&&mt&&mt.handle("hit",y,n)}et()&&Pt&&a&&Pt.heard(t[0],t[1],t[2],a.team,!r.silent)};var gp=n=>n==="head"?3:n==="chest"?2:n==="stomach"?1:0;function Ap(n,e,t,i,s,r,a){a=a||Xe[e];let o=H.players.get(n),l=n===Qe&&!N.spec,c=N.spec===n,h=l||c?null:Uy(o||{yaw:0,pitch:0,x:t[0],y:t[1]-1.6,z:t[2]}),p=l||c?[hr.x,hr.y,hr.z]:h;if(a.cat!=="knife"){for(let f of i)(a.pellets>1?Math.random()<.35:Fy++%(a.cat==="pistol"?1:2)===0)&&jt.tracer(p,f);!a.silent&&a.cat!=="equip"&&jt.flashLight(p,a.cat==="sniper"?1.5:1),o&&o.model&&(o.flashT=.05),(l||c)&&(N.flashT=.05)}for(let f of s)jt.impact([f[0],f[1],f[2]],[f[3],f[4],f[5]],wl(H.cfg.map).floor?"#b8a07a":"#999");for(let f of r){let m=[f[1][0]-t[0],f[1][1]-t[1],f[1][2]-t[2]],x=Math.hypot(...m)||1;jt.blood(f[1],m.map(y=>y/x),f[2])}a.cat!=="knife"&&Ih(a.cat,l?null:t,!!a.silent,e==="deagle"||e==="r8")}function Oy(){let n=vt(),e=N.pl,t=kn(),i=Xe[t];if(!i||N.drawT>0||N.reloadT>0||N.fireT>0||H.phase==="freeze"||H.phase==="over")return;if(i.cat==="knife"){(!N.trig||i.auto)&&Rp(!1);return}if(!i.auto&&N.trig)return;let s=N.slot==="z"?null:N.slot;if(s&&N.ammo[s][0]<=0){N.trig||(pa(null,2600,.35),N.trig=!0),Tp();return}N.trig=!0,Ci("ls.aim")&&By();let r={speed:Math.hypot(e.vx,e.vz),onGround:e.onGround,duck:e.duck,scoped:N.scope>0,shots:N.shots},a=Ci("ls.norecoil")?i.spread*.2:la(i,r),o=[e.x,e.y+on(e),e.z],l=Ci("ls.norecoil")?0:N.pp,c=Ci("ls.norecoil")?0:N.py;H.fireBullets(Qe,t,o,f=>ar(e.yaw,e.pitch,l,c,a,f));let[h,p]=Pl(i,N.shots,Math.random);N.pp=Math.min(i.kickCap||12,N.pp+h),N.py+=p,N.shots++,N.kick=Math.min(1,N.kick+(i.cat==="sniper"?1:i.cat==="pistol"?.6:.4)),N.fireT=60/i.rpm,s&&!Ci("ls.ammo")&&N.ammo[s][0]--,t==="zeus"&&Et("drop",{s:"zeus"}),(t==="awp"||t==="ssg08")&&N.scope&&(N.rescope=N.scope,N.scope=0)}function Rp(n){let e=N.pl,t=Xe.knife,i=[e.x,e.y+on(e),e.z],s={...t,dmg:n?65:40,range:72,rangeMod:1,pellets:1},r=ar(e.yaw,e.pitch,0,0,0,Math.random),a=Ll(H.W,H.nades,Qe,i[0],i[1],i[2],r[0],r[1],r[2],s,ru());if(a.hit){let o=H.players.get(a.hit.id);o&&Math.cos(au(o.yaw,e.yaw))>.5&&(a.hit.dmg=n?180:90)}if(a.hit)Et("hit",{t:a.hit.id,w:"knife",part:"chest",d:a.hit.dmg}),jt.blood(a.hit.pos,r,!1),Fl(!1);else if(a.impacts.length){let o=a.impacts[0];jt.impact([o[0],o[1],o[2]],[o[3],o[4],o[5]]),pa(o,1800,.5)}else Dh();N.fireT=n?1:.45,N.kick=1,N.knife2=n,Cn("sh",{i:Qe,w:"knife",o:i,e:[a.end],m:[],h:a.hit?[[a.hit.id,a.hit.pos,0]]:[]})}var au=(n,e)=>{let t=n-e;for(;t>Math.PI;)t-=Math.PI*2;for(;t<-Math.PI;)t+=Math.PI*2;return t};function By(){let n=vt(),e=N.pl,t=[e.x,e.y+on(e),e.z],i=null,s=.35;for(let r of H.players.values()){if(!r.alive||r.team===n.team)continue;let a=r.y+(We.hStand+(We.hCrouch-We.hStand)*(r.duck||0))-.12,o=r.x-t[0],l=a-t[1],c=r.z-t[2],h=Math.atan2(-o,-c),p=Math.atan2(l,Math.hypot(o,c)),f=Math.hypot(au(h,e.yaw),p-e.pitch);f<s&&ca(H.W,H.nades,t,[r.x,r.y,r.z,1])&&(s=f,i=[h,p])}i&&(e.yaw=i[0],e.pitch=i[1])}function zy(n){let e=vt(),t=N.pl,i=kn();if(!Xe[i]||Xe[i].cat!=="grenade"||N.nadeCd>0)return;let s=[t.x,t.y+on(t),t.z],r={i:Qe,ty:i,tm:e.team,o:s.map(o=>+o.toFixed(3)),yaw:+t.yaw.toFixed(4),pitch:+t.pitch.toFixed(4),v:[+t.vx.toFixed(3),+t.vz.toFixed(3)],pw:n};Cp(r),Cn("nd",r),Et("nade",{type:i}),N.nadeCd=.6,N.kick=.8,Dh();let a=e.inv.g.indexOf(i);a>=0&&(e.inv.g=e.inv.g.slice(),e.inv.g.splice(a,1)),setTimeout(()=>{$i("g")?yn("g",!0):yn(nu(),!0)},350)}var ya=new Map;function Cp(n){let e=Cd(n.ty,n.i,n.tm,n.o[0],n.o[1],n.o[2],n.yaw,n.pitch,n.v[0],n.v[1],n.pw);e.key=Math.random(),H.nades.push(e);let t=ua(n.ty);t.scale.setScalar(1.6),Kt.add(t),ya.set(e,t)}var Vh=[];function ky(n){Vh.length=0;for(let e of H.nades)Id(H.W,e,n,Vh);for(let e of Vh)Hy(e);for(let e=H.nades.length-1;e>=0;e--){let t=H.nades[e],i=ya.get(t);if(i&&(t.state==="fly"||t.type==="smoke"||t.type==="decoy"?(i.position.set(t.x,t.y,t.z),i.rotation.x+=n*(t.rest?0:9),i.visible=t.state!=="done"):i.visible=!1),t.type==="decoy"&&t.state==="active"&&(t.dc=(t.dc||0)-n,t.dc<=0)){t.dc=.25+Math.random()*1.2;let s=1+Math.floor(Math.random()*3);for(let r=0;r<s;r++)setTimeout(()=>Ih("rifle",[t.x,t.y,t.z]),r*110);et()&&Pt&&Pt.heard(t.x,t.y,t.z,t.team,!0)}(t.type==="molotov"||t.type==="incendiary")&&t.state==="active"&&!t.air&&(t.ft=(t.ft||0)-n,t.ft<=0&&(t.ft=.6,sp([t.x,t.y,t.z]))),t.state==="done"&&(H.nades.splice(e,1),i&&(Kt.remove(i),ya.delete(t)))}}function Hy(n){let e=n.g,t=[e.x,e.y,e.z];if(n.type==="bounce"){rp(t);return}if(n.type==="det")if(e.type==="he")jt.explosion(t,!1),Lh(t,!1),Pp(t,12,.5),et()&&mt&&mt.heBlast(e,(i,s)=>{let r=Math.hypot(s.x-i.x,s.y+1-i.y,s.z-i.z),a=qi(H.W,i.x,i.y+.15,i.z,(s.x-i.x)/r,(s.y+1-i.y-.15)/r,(s.z-i.z)/r,r);return!a||a.t>=r-.2});else if(e.type==="flash"){if(jt.flashPop(t),tp(t),Vy(e),et()&&Pt){for(let i of H.players.values())if(i.bot&&i.alive){let s=Ip(e,i.x,i.y+on(i),i.z,i.yaw,i.pitch);s>0&&Pt.flash(i,s)}}}else if(e.type==="smoke"){jt.smoke(e,H.W),Nh(t);for(let i of H.nades)(i.type==="molotov"||i.type==="incendiary")&&i.state==="active"&&Math.hypot(i.x-e.x,i.z-e.z)<pt.smokeR+1&&(i.life=Math.min(i.life,.3))}else if(e.type==="molotov"||e.type==="incendiary"){if(e.air){jt.explosion(t,!1);return}if(H.nades.some(s=>s.type==="smoke"&&s.state==="active"&&Math.hypot(s.x-e.x,s.z-e.z)<pt.smokeR)){e.life=.05,Nh(t);return}jt.fire(e,H.W,rr),ip(t)}else e.type==="decoy"&&(e.dc=.5)}function Ip(n,e,t,i,s,r){let a=n.x-e,o=n.y-t,l=n.z-i,c=Math.hypot(a,o,l);if(c>40)return 0;let h=qi(H.W,e,t,i,a/c,o/c,l/c,c);if(h&&h.t<c-.25)return 0;let p=-Math.sin(s)*Math.cos(r),f=Math.sin(r),m=-Math.cos(s)*Math.cos(r),x=(a*p+o*f+l*m)/c,y=x>.6?1:x>0?.35+x:.18,u=c<10?1:Math.max(0,1-(c-10)/30);return 4.9*y*u}function Vy(n){let e=vt();if(!e||!e.alive||!N.pl)return;let t=N.pl,i=Ip(n,t.x,t.y+on(t),t.z,t.yaw,t.pitch);i>.15&&(N.blind=Math.max(N.blind,i),N.blindMax=Math.max(N.blind,1),np(i))}function Pp(n,e,t){if(!N.pl)return;let i=Math.hypot(n[0]-N.pl.x,n[2]-N.pl.z);i<e&&(N.shake=Math.max(N.shake,t*(1-i/e)))}function ou(n,e,t,i){switch(n){case"st":Gy(e);break;case"rs":Wy(e);break;case"ev":qy(e);break;case"p":{let s=H.players.get(t);s&&t!==Qe&&xp(s,e);break}case"pb":if(!et())for(let s of e){let r=H.players.get(s[0]);r&&xp(r,s.slice(1))}break;case"sh":if(e.i!==Qe){let s=H.players.get(e.i);Ap(e.i,e.w,e.o,e.e,e.m||[],e.h||[]),e.w==="knife"&&e.h&&e.h.length&&Fl(!1),et()&&Pt&&s&&Pt.heard(e.o[0],e.o[1],e.o[2],s.team,!(Xe[e.w]||{}).silent)}break;case"nd":e.i!==Qe&&Cp(e);break}}function xp(n,e){n.nx=e[0],n.ny=e[1],n.nz=e[2],n.nyaw=e[3],n.npitch=e[4],n.duck=e[5],n.wpn=e[6],n.flags=e[7]|0,n.vx=e[8]||0,n.vz=e[9]||0,n.netT=H.time,n.scoped=!!(n.flags&1),n.onGround=!(n.flags&2),(n.x===void 0||Math.hypot(n.x-n.nx,n.z-n.nz)>4)&&(n.x=n.nx,n.y=n.ny,n.z=n.nz,n.yaw=n.nyaw,n.pitch=n.npitch)}function Gy(n){let e=H.phase;H.phase=n.ph,H.timeLeft=n.tl,H.round=n.r,H.score=n.sc,H.half=n.hf;let t=n.b;if(Object.assign(H.bomb,{state:t.s,carrier:t.c,x:t.x,y:t.y,z:t.z,t:t.t,site:t.site}),!et()){let r=new Set;for(let a of n.dr)r.add(a[0]),H.drops.set(a[0],{id:a[0],w:a[1],x:a[2],y:a[3],z:a[4],ammo:a[5]});for(let a of[...H.drops.keys()])r.has(a)||H.drops.delete(a)}let i=new Set;for(let r of n.p){let[a,o,l,c,h,p,f,m,x,y,u,d,M,C,b,_]=r;i.add(a);let S=H.players.get(a);S||(S={id:a,x:0,y:0,z:0,yaw:0,pitch:0,duck:0,h:We.hStand},H.players.set(a,S)),et()||Object.assign(S,{name:o,bot:!!l,grp:c,team:h,hp:p,ar:f,helm:!!m,money:x,alive:!!y,k:u,d,a:M,mvp:C,inv:b,god:!!_})}if(!et())for(let r of[...H.players.keys()])i.has(r)||H.players.delete(r);let s=vt();s&&(N.lastMoney!==null&&s.money>N.lastMoney&&Ue.moneyDelta(s.money-N.lastMoney),N.lastMoney=s.money,iu()),bn&&Ol(s,Zi)}function Wy(n){jt.clearSmokes(),jt.clearDecals();for(let t of ya.values())Kt.remove(t);ya.clear(),H.nades.length=0,Gl.clear(),Ue.banner(null);for(let t of H.players.values())t.deadT=0,t.alive=!0;let e=n.pos[Qe];if(e&&(N.pl=El(e[0],e[1],e[2],e[3])),et()&&Pt){for(let t of H.players.values())t.bot&&n.pos[t.id]&&Pt.place(t,n.pos[t.id]);Pt.roundStart()}for(let[t,i]of Object.entries(n.pos)){let s=H.players.get(t);s&&(s.x=s.nx=i[0],s.y=s.ny=i[1],s.z=s.nz=i[2],s.yaw=s.nyaw=i[3],s.pitch=0)}Object.assign(N,{deadT:0,spec:null,blind:0,plantT:0,defusing:!1,defT:0,scope:0,reloadT:0,drawT:.4,shots:0,pp:0,py:0,voidSent:!1,nadeHold:0}),N.invV=-1,N.ammoW={p:null,s:null},iu(),yn(nu(),!0),(n.round===1||H.round===1)&&Ue.center("Ronda 1 \u2014 \xA1suerte!"),Bh()}function Xy(n){let e=H.players.get(n);return e?e.name:"\u2014"}function qy(n){let e=vt();switch(n.t){case"go":Ue.center(e&&e.team==="T"?"\xA1Vamos! Plant\xE1 la bomba":"\xA1Vamos! Defend\xE9 los sitios",1800),Bh();break;case"hurt":{if(n.v===Qe){Qd(),xa=Math.min(1,xa+n.n/60);let t=H.players.get(n.a);if(t&&t.id!==Qe&&N.pl){let i=Math.atan2(-(t.x-N.pl.x),-(t.z-N.pl.z))-N.pl.yaw;Ue.dmgDir(-i)}N.pl&&n.w!=="world"&&n.w!=="molotov"&&n.w!=="incendiary"&&(N.pl.vx*=.45,N.pl.vz*=.45,N.punchHit=1.2)}n.a===Qe&&n.v!==Qe&&(Ue.hit(n.hs),Fl(n.hs,n.helm));break}case"kill":{let t=n.k?H.players.get(n.k):null,i=H.players.get(n.v);i&&(i.alive=!1,i.deadT=.001),i&&Ue.feed(t,i,n.w,n.hs,n.wb,n.k===Qe||n.v===Qe),n.k===Qe&&n.v!==Qe&&ep(),n.v===Qe&&(N.deadT=.001,N.scope=0,N.defusing=!1,Ue.progress(null));break}case"end":{let t=e?e.team:"T",i=n.win===t,s={elim:"eliminaron al otro equipo",bomb:"la bomba explot\xF3",defuse:"desactivaron la bomba",time:"se termin\xF3 el tiempo"};Ue.banner(n.win,n.win==="T"?"GANAN LOS TERRORISTAS":"GANAN LOS CONTRATERRORISTAS","Porque "+s[n.reason]+(n.mvp?" \xB7 MVP: "+Xy(n.mvp):"")),cp(i);break}case"over":{let t=n.wg,i=vt(),s=i?i.grp:0,r=t<0?"EMPATE":t===s?"\xA1VICTORIA!":"DERROTA";Ue.banner(t<0?"":_s(t,H.half),r,`${n.score[s]} \u2013 ${n.score[1-s]} \xB7 Volviendo a la sala en ${St.over} s`);let a=St.over;clearInterval(kl),kl=setInterval(()=>{if(a--,a<=0){clearInterval(kl);return}Ue.banner(t<0?"":_s(t,H.half),r,`${n.score[s]} \u2013 ${n.score[1-s]} \xB7 Volviendo a la sala en ${a} s`)},1e3);break}case"half":Ue.center("Cambio de lado \u2014 empieza la segunda mitad",4e3);break;case"plant":Ue.center("La bomba fue plantada en el sitio "+n.site,3e3),Uh([H.bomb.x,H.bomb.y,H.bomb.z],!0),H.bomb.seen=!0;break;case"defst":Oh([H.bomb.x,H.bomb.y,H.bomb.z]);break;case"defused":Ue.center("Desactivaron la bomba",3e3);break;case"boom":jt.explosion([n.x,n.y,n.z],!0),Lh([n.x,n.y,n.z],!0),Pp([n.x,n.y,n.z],60,1.2);break;case"bombdrop":e&&e.team==="T"&&Ue.center("Se cay\xF3 la bomba",1600);break;case"bombpick":n.p===Qe&&(Ue.center("Agarraste la bomba (5)",1600),lp());break;case"deny":Ue.center(n.why,1500),op();break;case"bought":ap();break}}var kl=0,xa=0,bn=!1,Zi=-1,zn=null,Gh={};function Lp(n){if(Gh[n]){let e=document.createElement("canvas");return e.width=192,e.height=48,e.getContext("2d").drawImage(Gh[n],0,0),e}try{zn||(zn={r:new na({antialias:!0,alpha:!0,preserveDrawingBuffer:!0}),s:new is,c:new ls(-.62,.62,.155,-.155,.01,10)},zn.r.setSize(192,48),zn.s.add(new Gi("#fff","#666",2.2)),zn.c.position.set(3,0,0),zn.c.lookAt(0,0,0));let e=Ul(n);e.computeBoundingBox();let t=e.boundingBox,i=new je(e,Ei),s=Math.max(.12,t.max.z-t.min.z,(t.max.y-t.min.y)*4);i.scale.setScalar(1.1/s),i.position.set(0,-(t.max.y+t.min.y)/2/s*1.1,-(t.max.z+t.min.z)/2/s*1.1),zn.s.add(i),zn.r.render(zn.s,zn.c),zn.s.remove(i);let r=document.createElement("canvas");return r.width=192,r.height=48,r.getContext("2d").drawImage(zn.r.domElement,0,0),Gh[n]=r,Lp(n)}catch{return null}}var _p=null;function Zl(n){let e=vt();if(!e)return;if(n!==void 0?n:!bn){if(!e.alive)return;if(!Jh()){Ue.center(H.phase==="live"?"Se termin\xF3 el tiempo de compra":"No pod\xE9s comprar ahora",1400);return}_p!==e.team&&(_p=e.team,fp(e.team,Lp,i=>Et("buy",{i}),i=>{nt("buyInfo").textContent=dp(i)})),Zi=-1,Ol(e,Zi),bn=!0,nt("buy").hidden=!1,document.exitPointerLock&&document.exitPointerLock()}else bn=!1,nt("buy").hidden=!0,bs||_a();ql()}function Jh(){let n=vt();if(!n||!n.alive||!N.pl||!(H.phase==="freeze"||H.phase==="live"&&St.live-H.timeLeft<St.buy&&H.bomb.state!=="planted"))return!1;let t=H.spawns?H.spawns[n.team]:null;return!t||Math.hypot(N.pl.x-t.cx,N.pl.z-t.cz)<22||!!(li(H.W,N.pl.x,N.pl.z)&(n.team==="T"?16:32))}function Yy(n){if(n.code==="KeyB"||n.code==="Escape"){Zl(!1);return}let e=parseInt(n.key,10);if(!(e>=1&&e<=9))return;let t=vt();if(Zi<0)e<=5&&(Zi=e-1);else{let i=Rl[Zi].items[t.team];i[e-1]&&Et("buy",{i:i[e-1]}),Zi=-1}Ol(t,Zi)}nt("buy").addEventListener("mousedown",n=>n.stopPropagation());function Zy(){vn=new na({antialias:!1,powerPreference:"high-performance"}),vn.setPixelRatio(Math.min(devicePixelRatio,bs?1:1.5)),vn.setSize(innerWidth,innerHeight),vn.autoClear=!1,nt("view").appendChild(vn.domElement),Kt=new is,Ut=new $t(74,innerWidth/innerHeight,.05,1500),ga=new is,cr=new $t(58,innerWidth/innerHeight,.01,10),ga.add(new Gi("#ffffff","#555",1.3));let n=new cs("#fff",1.1);n.position.set(1,2,1),ga.add(n),Mn=Yd(),ga.add(Mn);let e=$y();Mn.userData.flash=e,addEventListener("resize",()=>{vn.setSize(innerWidth,innerHeight),Ut.aspect=cr.aspect=innerWidth/innerHeight,Ut.updateProjectionMatrix(),cr.updateProjectionMatrix()}),vn.domElement.addEventListener("click",()=>{H.phase!=="lobby"&&!ur&&!bs&&!bn&&_a()}),nt("clickPlay").addEventListener("click",()=>{da(),_a()})}function $y(){let n=new je(new rs(1,0),new fn({color:"#ffd27a",transparent:!0,opacity:.95,depthWrite:!1}));return n.scale.set(.04,.04,.12),n.visible=!1,n.renderOrder=11,Mn.add(n),n}async function Jy(n){nt("loading").hidden=!1,nt("loadMsg").textContent="Cargando "+(Hl.find(s=>s.id===n)?.name||n)+"\u2026",await new Promise(s=>setTimeout(s,30));let e=Vl[n]||(Vl[n]=await dh(n)),t=e.W||(e.W=ph(e.info,e.layers));for(H.W=t,H.info=e.info,H.nav=e.nav||(e.nav=Ad(t)),H.mapName=Hl.find(s=>s.id===n)?.name||n;Kt.children.length;)Kt.remove(Kt.children[0]);Bl&&Bl.geometry.dispose(),Bl=bd(t,n).mesh,Kt.add(Bl),Sd(Kt,t,n),jt=Bd(Kt),$h=kh(t);for(let s of H.players.values())s.model&&(s.model=null,s.tag=null);for(let s of lr.values())Kt.remove(s);lr.clear(),Ri=null,Qh=!0,nt("loading").hidden=!0}function Ky(n,e){let t=document.createElement("canvas");t.width=256,t.height=48;let i=t.getContext("2d");i.font="bold 30px Rajdhani, sans-serif",i.textAlign="center",i.fillStyle="rgba(0,0,0,.5)";let s=Math.min(250,i.measureText(n).width+20);i.fillRect(128-s/2,4,s,40),i.fillStyle=e==="T"?"#f0c060":"#8ab8ff",i.fillText(n,128,35);let r=new Dr(new Zs({map:new Or(t),depthTest:!1,transparent:!0}));return r.scale.set(.75,.14,1),r.renderOrder=20,r}var jy=new fn({color:"#ff3030",wireframe:!0,depthTest:!1,transparent:!0,opacity:.8}),Np=new dn(.7,1.8,.7);Np.translate(0,.9,0);function Qy(n){let e=vt();for(let t of H.players.values()){let i=t.id===Qe;if(!t.model||t.modelTeam!==t.team){t.model&&Kt.remove(t.model),t.model=Wd(t.team),t.modelTeam=t.team,Kt.add(t.model),t.tag=null;let o=new je(Np,jy);o.renderOrder=19,o.visible=!1,t.model.add(o),t.esp=o;let l=jt.muzzleMesh();t.model.userData.gun.add(l),l.position.set(0,.02,-.75),t.mflash=l}let s=t.model;if(!i&&!(et()&&t.bot)&&t.nx!==void 0){let o=Math.min(1,n*14);t.x+=(t.nx-t.x)*o+(t.vx||0)*n*.5,t.y+=(t.ny-t.y)*o,t.z+=(t.nz-t.z)*o+(t.vz||0)*n*.5,isFinite(t.x)||(t.x=t.nx,t.y=t.ny,t.z=t.nz),t.yaw+=au(t.nyaw||0,t.yaw||0)*o,t.pitch=(t.pitch||0)+((t.npitch||0)-(t.pitch||0))*o}let r=i&&!N.spec&&(e&&e.alive||N.deadT<.01)||N.spec===t.id;if(s.visible=!r&&(t.alive||(t.deadT||0)>0),!s.visible)continue;s.position.set(t.x,t.y,t.z),s.rotation.y=t.yaw,t.alive||(t.deadT=Math.min(3,(t.deadT||0)+n*2.5));let a=Math.hypot(t.vx||0,t.vz||0);Xd(s,t.alive?t.wpn||"knife":null),qd(s,{speed:t.alive?a:0,duck:t.duck||0,pitch:t.pitch||0,onGround:t.onGround!==!1,dead:t.alive?0:t.deadT},n),t.mflash&&(t.flashT=(t.flashT||0)-n,t.mflash.visible=t.flashT>0,t.mflash.visible&&(t.mflash.rotation.z=Math.random()*3)),e&&t.team===e.team&&!i&&t.alive?(t.tag||(t.tag=Ky(t.name,t.team),s.add(t.tag)),t.tag.visible=!0,t.tag.position.y=2.15-(t.duck||0)*.45):t.tag&&(t.tag.visible=!1),t.esp.visible=!!(Ci("ls.wall")&&e&&t.team!==e.team&&t.alive),!i&&t.alive&&a>3.6&&t.onGround!==!1&&(t.stepT=(t.stepT||0)-n,t.stepT<=0&&(t.stepT=.34,Ph([t.x,t.y,t.z])))}}var lr=new Map,Ri=null,ma=null,zl=0;function ev(n){for(let[t,i]of H.drops){let s=lr.get(t);s||(s=ua(i.w),s.scale.setScalar(1.2),s.rotation.set(0,Math.random()*6,Math.PI/2*.98),Kt.add(s),lr.set(t,s)),s.position.set(i.x,i.y+.04,i.z)}for(let[t,i]of lr)H.drops.has(t)||(Kt.remove(i),lr.delete(t));let e=H.bomb;if(Ri||(Ri=ua("c4"),Ri.scale.setScalar(1.6),Kt.add(Ri),ma=new je(new as(.03,6,4),new fn({color:"#ff2020"})),ma.position.set(-.05,.05,.03),Ri.add(ma)),Ri.visible=e.state==="planted"||e.state==="dropped"||e.state==="defused",Ri.visible&&Ri.position.set(e.x,e.y+.05,e.z),e.state==="planted"){let t=Math.max(0,e.t),i=Math.max(.12,Math.min(1,t/35));zl-=n,ma.visible=zl>i*.6,zl<=0&&(zl=i,Uh([e.x,e.y,e.z],t<10))}else ma.visible=!1}var Wh=0,Xh=0;function tv(n){let e=vt();if(!e||!N.pl)return;let t=N.pl;if(iu(),!e.alive){N.deadT+=n;return}N.drawT-=n,N.fireT-=n,N.nadeCd-=n,N.pickCd-=n,N.inspect&&(N.inspect=Math.max(0,N.inspect-n)),N.reloadT>0&&(N.reloadT-=n,N.reloadT<=0&&Ly()),N.rescope&&N.fireT<=0&&((kn()==="awp"||kn()==="ssg08")&&(N.scope=N.rescope),N.rescope=0);let i=kn(),s=Xe[i]||Xe.knife,r=H.phase==="freeze"||N.plantT>0||N.defusing||bn&&!1,a=0,o=0;bn||(Rt.has("KeyW")&&(a+=1),Rt.has("KeyS")&&(a-=1),Rt.has("KeyD")&&(o+=1),Rt.has("KeyA")&&(o-=1)),(qt.mx||qt.mz)&&(a=-qt.mz,o=qt.mx);let l={f:r?0:a,s:r?0:o,jump:!r&&Rt.has("Space"),crouch:Rt.has("KeyC")||Rt.has("ControlLeft")||Rt.has("ControlRight"),walk:Rt.has("ShiftLeft")||Rt.has("ShiftRight")},c=(s.speed||250)*pp*(N.scope&&s.cat==="sniper"?.5:N.scope?.7:1);(i==="c4"||Xe[i]?.cat==="grenade")&&(c=245*pp),Ci("ls.speed")&&(c*=1.6);let h=n,p=0,f=t.onGround;for(;h>1e-6;){let d=Math.min(h,.008333333333333333),M=Al(H.W,t,l,d,c);M&&(p=M),h-=d}for(let d of H.players.values()){if(d.id===Qe||!d.alive||Math.abs(d.y-t.y)>1.6)continue;let M=t.x-d.x,C=t.z-d.z,b=Math.hypot(M,C);if(b<.62&&b>1e-4){let _=(.62-b)/b,S=t.x+M*_,g=t.z+C*_;Ti(H.W,S,g,t.y,t.h,We.r)||(t.x=S,t.z=g)}}if(p){let d=_h(p);d>0&&Et("fall",{d}),Kd(null)}t.y<-20&&!N.voidSent&&(N.voidSent=!0,Et("fall",{d:999}));let m=Math.hypot(t.vx,t.vz);if(t.onGround&&m>3.6&&(N.stepT-=n,N.stepT<=0&&(N.stepT=.36,Ph(null,.45))),N.bob+=n*m*1.4*(t.onGround?1:0),e.x=t.x,e.y=t.y,e.z=t.z,e.yaw=t.yaw,e.pitch=t.pitch,e.duck=t.duck,e.vx=t.vx,e.vz=t.vz,e.onGround=t.onGround,e.wpn=i,e.h=t.h,e.scoped=N.scope>0,N.fireT<-.06&&(N.pp=Math.max(0,N.pp-(s.recover||9)*n*(1+N.pp*.15)),N.py*=Math.exp(-n*7),N.pp<.4&&(N.shots=0)),pn||(N.trig=!1),(Xe[i]||{}).cat==="grenade")pn&&!N.nadeHold&&N.drawT<=0&&(N.nadeHold=1),N.nadeHold&&!pn&&!Ma&&H.phase!=="freeze"&&(zy(pn?.6:N.nadeHold===.3?.3:1),N.nadeHold=0);else if(i==="c4"){let d=li(H.W,t.x,t.z)&12;if(pn&&d&&t.onGround&&H.phase==="live"&&N.drawT<=0){N.plantT||Fh();let M=N.plantT;N.plantT+=n,Math.floor(M*4)!==Math.floor(N.plantT*4)&&Fh(),Ue.progress("Plantando la bomba\u2026",N.plantT/St.plant),N.plantT>=St.plant&&(N.plantT=0,Ue.progress(null),Et("plant",{x:t.x,y:t.y,z:t.z}))}else N.plantT&&Ue.progress(null),N.plantT=0,pn&&!d&&!N.trig&&(Ue.center("Ten\xE9s que estar en un sitio de bomba (A o B)",1300),N.trig=!0)}else pn&&!bn&&Oy();if(N.defusing){let d=H.bomb;if(d.state!=="planted"||!Rt.has("KeyE")||Math.hypot(t.x-d.x,t.z-d.z)>1.9)Yl();else{N.defT+=n;let M=e.inv.kit?St.kit:St.defuse;Ue.progress(e.inv.kit?"Desactivando (con kit)\u2026":"Desactivando\u2026",N.defT/M),N.defT>=M&&(Et("defok",{}),N.defusing=!1,Ue.progress(null))}}else N.plantT||Ue.progress(null);if(N.pickCd<=0){for(let M of H.drops.values())if(!(Math.hypot(M.x-t.x,M.z-t.z)>.9||Math.abs(M.y-t.y)>1.2)&&(M.w==="defuser"?e.team==="CT"&&!e.inv.kit:!$i(xs(M.w)===1?"p":"s"))){Et("take",{id:M.id}),N.pickCd=.6;break}let d=H.bomb;e.team==="T"&&d.state==="dropped"&&Math.hypot(d.x-t.x,d.z-t.z)<1&&Math.abs(d.y-t.y)<1.4&&(Et("take",{id:"c4"}),N.pickCd=.8)}let y="",u=Ep();u&&(y="E \xB7 agarrar "+Ms(u.w)),e.team==="CT"&&H.bomb.state==="planted"&&Math.hypot(t.x-H.bomb.x,t.z-H.bomb.z)<1.7&&!N.defusing&&(y="Manten\xE9 E para desactivar"),i==="c4"&&li(H.W,t.x,t.z)&12&&!N.plantT&&H.phase==="live"&&(y="Manten\xE9 clic para plantar"),Ue.hint(y),Wh-=n,Wh<=0&&(Wh=.05,Cn("p",[+t.x.toFixed(2),+t.y.toFixed(2),+t.z.toFixed(2),+t.yaw.toFixed(3),+t.pitch.toFixed(3),+t.duck.toFixed(2),i,(N.scope?1:0)|(t.onGround?0:2),+t.vx.toFixed(2),+t.vz.toFixed(2)],{volatile:!0}))}function nv(n){if(Xh-=n,Xh>0)return;Xh=.05;let e=[];for(let t of H.players.values())t.bot&&t.pl&&e.push([t.id,+t.x.toFixed(2),+t.y.toFixed(2),+t.z.toFixed(2),+t.yaw.toFixed(3),+t.pitch.toFixed(3),+(t.duck||0).toFixed(2),t.wpn||"knife",(t.scoped?1:0)|(t.onGround?0:2),+(t.vx||0).toFixed(2),+(t.vz||0).toFixed(2)]);e.length&&Cn("pb",e,{volatile:!0})}var yp=new qn(0,0,0,"YXZ"),Yi=[];function lu(n){let e=vt();if(!e)return;if(Yi=[...H.players.values()].filter(i=>i.alive&&i.team===e.team),Yi.length||(Yi=[...H.players.values()].filter(i=>i.alive)),!Yi.length){N.spec=null;return}let t=Yi.findIndex(i=>i.id===N.spec);N.spec=Yi[(t+n+Yi.length)%Yi.length].id}function iv(n){let e=vt();if(!e||!N.pl)return;let t,i,s,r,a,o=kn(),l=e.team,c=N.scope;if(e.alive){let u=N.pl;t=u.x,i=u.y+on(u),s=u.z,r=u.yaw-N.py*.5*mp,a=u.pitch+N.pp*.5*mp+(N.punchHit||0)*.02,N.spec=null}else if(N.deadT<2.2||!H.players.size){let u=N.pl,d=Math.min(1,N.deadT/1.2);r=u.yaw+N.deadT*.3,a=-.35*d+u.pitch*(1-d),t=u.x+Math.sin(r)*2.6*d,s=u.z+Math.cos(r)*2.6*d,i=u.y+on(u)*(1-d)+1.6*d,o=null}else{let u=N.spec&&H.players.get(N.spec);(!u||!u.alive)&&lu(1);let d=N.spec&&H.players.get(N.spec);if(d)t=d.x,i=d.y+on({duck:d.duck||0}),s=d.z,r=d.yaw,a=d.pitch,o=d.wpn||"knife",l=d.team,c=d.scoped?1:0;else{let M=N.pl;t=M.x,i=M.y+3,s=M.z,r=M.yaw,a=-.5,o=null}}N.punchHit=Math.max(0,(N.punchHit||0)-n*6),N.shake>0&&(N.shake=Math.max(0,N.shake-n*1.5),t+=(Math.random()-.5)*N.shake*.12,i+=(Math.random()-.5)*N.shake*.12),Ut.position.set(t,i,s),yp.set(a,r,0),Ut.quaternion.setFromEuler(yp);let h=Xe[o],f=74/(c&&h&&h.scope?h.scope[Math.max(0,c-1)]:1);Math.abs(Ut.fov-f)>.01&&(Ut.fov=f,Ut.updateProjectionMatrix()),Jd(t,i,s,r);let m=c&&h&&h.cat==="sniper";if(Mn.visible=!!o&&!m&&(e.alive||N.spec),Mn.visible){Zd(Mn,o,l);let u=Mn.userData,d=u.base||[.13,-.14,-.36];N.sway[0]+=(N.swayT[0]-N.sway[0])*Math.min(1,n*10),N.sway[1]+=(N.swayT[1]-N.sway[1])*Math.min(1,n*10),N.swayT[0]*=Math.exp(-n*10),N.swayT[1]*=Math.exp(-n*10),N.kick=Math.max(0,N.kick-n*7);let M=e.alive?N.bob:H.time*2,C=e.alive?Math.min(1,Math.hypot(N.pl.vx,N.pl.vz)/5):.3,b=d[0]+Math.cos(M)*.008*C+N.sway[0]*.02,_=d[1]+Math.abs(Math.sin(M))*.01*C-N.sway[1]*.02,S=d[2]+N.kick*.045,g=N.kick*.12,T=0,U=0;if(e.alive&&N.reloadT>0){let w=Xe[kn()],L=1-N.reloadT/w.reload,A=Math.sin(Math.min(1,L)*Math.PI);g-=A*.6,_-=A*.06,U+=A*.4}if(e.alive&&N.drawT>0){let w=Math.max(0,N.drawT)/.6;_-=w*.25,g-=w*.8}if(e.alive&&N.inspect){let w=Math.sin(Math.min(1,N.inspect/1.6)*Math.PI);T+=w*1.1,U+=w*.5,b-=w*.08}if(o==="knife"&&e.alive&&N.fireT>0){let w=N.fireT/(N.knife2?1:.45);T-=Math.sin(w*Math.PI)*.9,S-=Math.sin(w*Math.PI)*.08}(N.plantT>0||N.defusing)&&(_-=.08,g-=.7),u.hold.position.set(b,_,S),u.hold.rotation.set(g,T,U),Mn.position.copy(Ut.position),Mn.quaternion.copy(Ut.quaternion),cr.position.copy(Ut.position),cr.quaternion.copy(Ut.quaternion);let v=u.flash;if(N.flashT=(N.flashT||0)-n,v&&(v.visible=N.flashT>0&&h&&!h.silent&&h.cat!=="knife",v.visible)){u.gun.getWorldPosition(hr);let w={pistol:.2,smg:.38,rifle:.58,sniper:.95,heavy:.6}[h.cat]||.4;v.position.set(b,_+.02,S-w),v.rotation.z=Math.random()*3}u.gun.updateWorldMatrix(!0,!1);let E=h&&{pistol:.2,smg:.38,rifle:.58,sniper:.95,heavy:.6}[h.cat]||.3;hr.set(0,.02,-E).applyMatrix4(u.gun.matrixWorld)}nt("scope").hidden=!m;let x=!m&&(e.alive||N.spec)&&!(h&&h.cat==="sniper"),y=4;e.alive&&h&&h.dmg&&(y=3+la(h,{speed:Math.hypot(N.pl.vx,N.pl.vz),onGround:N.pl.onGround,duck:N.pl.duck,scoped:N.scope>0,shots:N.shots})*900),Ue.crosshair(Math.min(60,y),x)}var qh=0,Yh=0;function sv(n){let e=vt();if(!e||(xa=Math.max(0,xa-n*1.4),Ue.el.hurt.style.opacity=xa.toFixed(2),N.blind=Math.max(0,N.blind-n),Ue.el.flash.style.opacity=Math.min(1,N.blind/1.6).toFixed(3),qh-=n,qh>0))return;qh=.05;let t=N.spec&&!e.alive?H.players.get(N.spec):e;Ue.money(e.money),Ue.vitals(t?t.hp:0,t?t.ar:0,t&&t.helm);let i=e.alive?kn():t&&t.wpn,s=Xe[i],r=N.slot,a=r==="p"||r==="s"?N.ammo[r]:null;Ue.ammo(i?Ms(i):"",a?a[0]:0,a?a[1]:0,e.alive&&!!a&&!!s&&!!s.mag);let o=[];e.alive&&(e.inv.p&&o.push({key:1,slot:"p",id:e.inv.p,name:Ms(e.inv.p)}),e.inv.s&&o.push({key:2,slot:"s",id:e.inv.s,name:Ms(e.inv.s)}),o.push({key:3,slot:"k",id:"knife",name:"Cuchillo"}),e.inv.zeus&&o.push({key:3,slot:"z",id:"zeus",name:"Zeus x27"}),e.inv.g.length&&o.push({key:4,slot:"g",id:e.inv.g.join(),name:e.inv.g.map(Ms).join(" \xB7 ")}),e.inv.c4&&o.push({key:5,slot:"c4",id:"c4",name:"C4"}),e.inv.kit&&o.push({key:"",slot:"kit",id:"kit",name:"Kit de desactivaci\xF3n"})),Ue.slots(o,N.slot);let l=H.bomb.state==="planted";Ue.clock(H.timeLeft,l||H.phase==="live"&&H.timeLeft<10,l);let c=H.score[H.half],h=H.score[1-H.half],p=0,f=0,m=0,x=0;for(let d of H.players.values())d.team==="T"?(f++,d.alive&&p++):(x++,d.alive&&m++);if(Ue.score(c,h,p,f,m,x),Ue.el.buyHint.hidden=!(Jh()&&!bn),bn)if(!Jh())Zl(!1);else{let d=nt("buyTime");d.textContent=H.phase==="freeze"?"Tiempo de compra: "+Math.ceil(H.timeLeft+St.buy)+" s":"Tiempo de compra: "+Math.max(0,Math.ceil(St.buy-(St.live-H.timeLeft)))+" s"}let y=Ue.el.spec;!e.alive&&N.deadT>2.2&&t&&t!==e?(y.hidden=!1,y.innerHTML="Mirando a <b>"+t.name.replace(/</g,"")+"</b><small>Clic o Espacio: siguiente</small>"):y.hidden=!0,H.phase==="freeze"&&e.alive?Ue.center("La ronda empieza en "+Math.ceil(H.timeLeft)+" \xB7 B para comprar",0):H.phase==="freeze"||Ue.el.centerMsg.textContent.startsWith("La ronda empieza")&&Ue.center("",1);let u=Rt.has("Tab")||H.phase==="over";if(Ue.el.board.hidden=!u,u&&(Ue.el.board.innerHTML=up(H,Qe)),Yh-=.05,Yh<=0&&$h){Yh=.1;let d=t&&t!==e?{x:t.x,z:t.z,yaw:t.yaw}:{x:N.pl.x,z:N.pl.z,yaw:N.pl.yaw},M=[],C=[N.pl.x,N.pl.y+1.6,N.pl.z];for(let _ of H.players.values())_.alive&&(_.team===e.team?M.push({x:_.x,z:_.z,col:_.team==="T"?"#f0c060":"#8ab8ff",me:_.id===Qe}):e.alive&&_.seenT>H.time-.6&&M.push({x:_.x,z:_.z,col:"#ff4040"}));if(hp(nt("radar"),$h,H.W,d,M,{s:H.bomb.state,x:H.bomb.x,z:H.bomb.z,seen:!0},e.team),e.alive)for(let _ of H.players.values())_.alive&&_.team!==e.team&&Math.hypot(_.x-N.pl.x,_.z-N.pl.z)<60&&ca(H.W,H.nades,C,[_.x,_.y,_.z,1])&&(_.seenT=H.time);let b=li(H.W,d.x,d.z);Ue.el.zoneName.textContent=b&4?"Sitio A":b&8?"Sitio B":b&16?"Base T":b&32?"Base CT":""}}var vp=performance.now();function Dp(n){requestAnimationFrame(Dp);let e=Math.min(.05,(n-vp)/1e3);if(vp=n,H.phase!=="lobby"&&Qh){let t=window.__ls&&window.__ls.ff||0;for(let i=0;i<t;i++)Mp(.05);if(Mp(e),jt.update(e,H.time,Ut),iv(e),sv(e),window.__ls.cam){let i=window.__ls.cam;Ut.position.set(i[0],i[1],i[2]),Ut.lookAt(i[3],i[4],i[5]),Ut.fov!==74&&(Ut.fov=74,Ut.updateProjectionMatrix()),Mn.visible=!1}pn&&vt()&&!vt().alive&&N.deadT>2.2&&(pn=!1,lu(1)),vn.clear(),vn.render(Kt,Ut),vn.clearDepth(),Mn.visible&&vn.render(ga,cr)}}function Mp(n){H.time+=n,et()&&mt?(mt.tick(n),Pt&&Pt.tick(n),nv(n)):H.phase!=="lobby"&&(H.timeLeft-=n,H.bomb.state==="planted"&&(H.bomb.t-=n)),tv(n),ky(n),Qy(n),ev(n)}var Ci=n=>!!(window.Arcade&&Arcade.admin&&Arcade.admin.get(n));function rv(){Arcade.admin&&(Arcade.admin.define([{id:"ls.god",label:"Inmortal",type:"toggle"},{id:"ls.wall",label:"Ver a trav\xE9s de paredes",type:"toggle"},{id:"ls.aim",label:"Aimbot (al disparar)",type:"toggle"},{id:"ls.norecoil",label:"Sin retroceso ni dispersi\xF3n",type:"toggle"},{id:"ls.ammo",label:"Balas infinitas",type:"toggle"},{id:"ls.speed",label:"S\xFAper velocidad",type:"toggle"},{id:"ls.money",label:"Plata al m\xE1ximo",type:"button"},{id:"ls.heal",label:"Curarme + chaleco",type:"button"},{id:"ls.kill",label:"Matar a los enemigos",type:"button"},{id:"ls.win",label:"Ganar la ronda",type:"button"}]),Arcade.admin.on("ls.god",n=>Et("adm",{a:"god",v:!!n})),Arcade.admin.on("ls.money",()=>Et("adm",{a:"money"})),Arcade.admin.on("ls.heal",()=>Et("adm",{a:"heal"})),Arcade.admin.on("ls.kill",()=>Et("adm",{a:"kill"})),Arcade.admin.on("ls.win",()=>Et("adm",{a:"win"})))}function Kh(){nt("lobby").hidden=!1;let n=et();nt("hostNote").hidden=n;let e=(i,s,r)=>{i.innerHTML="";for(let[a,o]of s){let l=document.createElement("button");l.textContent=o,l.dataset.k=a,l.onclick=()=>{et()&&(H.cfg[r]=a,Ii())},i.appendChild(l)}};e(nt("len"),Object.entries(Il).map(([i,s])=>[i,s.name+" (a "+s.win+")"]),"len"),e(nt("diff"),Object.entries(ha).map(([i,s])=>[i,s.name]),"diff"),nt("fillMinus").onclick=()=>{et()&&(H.cfg.fill=Math.max(1,H.cfg.fill-1),Ii())},nt("fillPlus").onclick=()=>{et()&&(H.cfg.fill=Math.min(5,H.cfg.fill+1),Ii())};for(let i of document.querySelectorAll("[data-pref]"))i.onclick=()=>{let s=+i.dataset.pref;H.prefs[Qe]=s,et()?Ii():Cn("pref",{v:s},{to:Ct.hostId}),va()};nt("goBtn").onclick=()=>{et()&&(da(),H.emit("start",{cfg:H.cfg,prefs:H.prefs}))};let t=nt("maps");t.innerHTML="";for(let i of Hl){let s=document.createElement("div");s.className="mcard",s.dataset.id=i.id;let r=document.createElement("canvas");r.width=256,r.height=256,s.appendChild(r);let a=document.createElement("div");a.className="mn",a.innerHTML=i.name+"<small>"+i.sub+"</small>",s.appendChild(a),s.onclick=()=>{et()&&(H.cfg.map=i.id,Xl.set("ls:map",i.id),Ii())},t.appendChild(s),(async()=>{try{let o=Vl[i.id]||(Vl[i.id]=await dh(i.id));o.W=o.W||ph(o.info,o.layers);let l=kh(o.W),c=r.getContext("2d");c.fillStyle="#0d0f12",c.fillRect(0,0,256,256),c.drawImage(l,0,0,256,256)}catch(o){console.warn(o)}})()}va()}function Ii(){et()&&(Cn("cfg",{cfg:H.cfg,prefs:H.prefs}),va())}function va(){for(let o of document.querySelectorAll("#len button"))o.classList.toggle("on",o.dataset.k===H.cfg.len);for(let o of document.querySelectorAll("#diff button"))o.classList.toggle("on",o.dataset.k===H.cfg.diff);for(let o of document.querySelectorAll(".mcard"))o.classList.toggle("on",o.dataset.id===H.cfg.map);nt("fillN").textContent=H.cfg.fill;let n=(Ct.players||[]).map(o=>({...o,pref:H.prefs[o.id]??-1})),e=[0,0],t={};for(let o of n)(o.pref===0||o.pref===1)&&(t[o.id]=o.pref,e[o.pref]++);for(let o of n.sort((l,c)=>l.slot-c.slot))if(t[o.id]===void 0){let l=e[0]<=e[1]?0:1;t[o.id]=l,e[l]++}let i=Math.max(e[0],e[1],H.cfg.fill),s=o=>String(o).replace(/</g,"&lt;"),r=o=>n.filter(l=>t[l.id]===o).map(l=>`<div class="${l.id===Qe?"me":""}">${s(l.name)}${l.pref===-1?' <small style="color:#889">(auto)</small>':""}</div>`).join("")+Array.from({length:i-e[o]},()=>'<div class="bot">bot</div>').join("");nt("listT").innerHTML=r(0),nt("listCT").innerHTML=r(1);let a=nt("goBtn");a.disabled=!et(),a.textContent=et()?"EMPEZAR":"ESPERANDO AL HOST\u2026",nt("lbSub").textContent=`${i} contra ${i} \xB7 ${Hl.find(o=>o.id===H.cfg.map)?.name} \xB7 ${Il[H.cfg.len].name} \xB7 bots ${ha[H.cfg.diff].name.toLowerCase()}`}var Wl=new Set,Zh=0;async function bp(n){if(H.cfg=n.cfg,H.prefs=n.prefs||{},nt("lobby").hidden=!0,await Jy(H.cfg.map),H.phase="loading",nt("hud").hidden=!1,et()){Wl.add(Qe);let e=()=>{((Ct.players||[]).every(i=>Wl.has(i.id))||Zh<=0)&&av()};Zh=1,setTimeout(()=>{Zh=0,e()},15e3),H.tryBegin=e,e()}else Cn("ready",{},{to:Ct.hostId});ql(),bs||_a()}var jh=!1;function av(){if(jh)return;jh=!0,mt=Mh(H);let n=(Ct.players||[{id:Qe,name:"Jugador",slot:0}]).map(e=>({id:e.id,name:e.name,slot:e.slot,pref:H.prefs[e.id]??-1}));mt.setup(n),Pt=Th(H,mt),mt.startMatch()}function ov(){H.phase="lobby",jh=!1,mt=null,Pt=null,Wl.clear(),H.players.clear(),H.drops.clear(),H.nades.length=0,nt("hud").hidden=!0,Ue.banner(null),clearInterval(kl),document.exitPointerLock&&document.exitPointerLock(),Kh(),ql()}function lv(){if(!(H.phase==="lobby"||H.phase==="loading"||mt)){mt=Mh(H),mt.adopt(),Pt=Th(H,mt);for(let n of H.players.values())n.bot&&n.alive&&Pt.place(n,[n.x,n.y,n.z,n.yaw]),n.dmgBy||(n.dmgBy={});Pt.roundStart(),mt.markDirty()}}async function cv(){Ue.init(),Zy(),Py(),requestAnimationFrame(Dp),Ct=await Arcade.ready(),Qe=Ct.me.id,(!Ct.players||!Ct.players.length)&&(Ct.players=[Ct.me]),nt("loading").hidden=!0,rv();for(let e of Iy)Arcade.on(e,(t,i,s)=>{et()&&mt&&mt.handle(e,t,i,s||{})});for(let e of["st","rs","ev","p","pb","sh","nd"])Arcade.on(e,(t,i)=>{(e==="ev"||e==="st"||e==="rs")&&et()||ou(e,t,i)});Arcade.on("cfg",e=>{et()||(H.cfg=e.cfg,H.prefs=e.prefs||{},H.phase==="lobby"&&va())}),Arcade.on("pref",(e,t)=>{et()&&(H.prefs[t]=e.v,Ii())}),Arcade.on("start",e=>{H.phase==="lobby"&&bp(e)}),Arcade.on("ready",(e,t)=>{et()&&(Wl.add(t),H.tryBegin&&H.tryBegin())}),Arcade.on("hello",(e,t)=>{et()&&H.phase==="lobby"&&Ii()}),Arcade.onPlayerLeft(e=>{Ct.players=(Ct.players||[]).filter(i=>i.id!==e);let t=H.players.get(e);t&&et()&&mt&&(t.bot=!0,t.name=t.name+" (bot)",t.alive&&Pt&&Pt.place(t,[t.x,t.y,t.z,t.yaw]),mt.markDirty()),H.phase==="lobby"&&va(),et()&&H.tryBegin&&H.tryBegin()}),Arcade.onHostChanged(()=>{et()&&(lv(),H.phase==="lobby"&&(Kh(),Ii()))});let n=H.emit;H.emit=(e,t)=>{if(e==="start"){Cn("start",t),bp(t);return}n(e,t)},Kh(),et()?Ii():Cn("hello",{},{to:Ct.hostId})}cv();window.__ls={G:H,M:N,me:vt,req:Et,get H(){return mt},get BOTS(){return Pt},get camera(){return Ut},keys:Rt,look:eu,onKey:tu,traceShot:Ll,targets:ru,shotDir:ar,setMouse(n,e){pn=n,Ma=!!e,e&&su()}};
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
