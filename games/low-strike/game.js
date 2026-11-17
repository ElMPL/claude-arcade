var Kd=0,cu=1,Jd=2;var jo=1,Gl=2,Vr=3,Di=0,un=1,si=2,Zs=0,Gr=1,hu=2,uu=3,fu=4,jd=5;var Ks=100,Qd=101,ep=102,tp=103,np=104,ip=200,sp=201,rp=202,op=203,du=204,pu=205,ap=206,lp=207,cp=208,hp=209,up=210,fp=211,dp=212,pp=213,mp=214,ll=0,cl=1,hl=2,Ir=3,ul=4,fl=5,dl=6,pl=7,Wl=0,gp=1,xp=2,Ui=0,mu=1,gu=2,xu=3,Qo=4,yu=5,_u=6,vu=7;var Mu=300,Js=301,Wr=302,Xl=303,ql=304,ps=1e3,Ti=1001,ml=1002,yn=1003,yp=1004;var ea=1005;var Mn=1006,Yl=1007;var _i=1008;var On=1009,bu=1010,Su=1011,Xr=1012,$l=1013,vi=1014,ri=1015,Mi=1016,Zl=1017,Kl=1018,js=1020,wu=35902,Tu=35899,Eu=1021,Au=1022,Zn=1023,Ki=1026,es=1027,Jl=1028,jl=1029,Ss=1030,Ql=1031;var ec=1033,ta=33776,na=33777,ia=33778,sa=33779,tc=35840,nc=35841,ic=35842,sc=35843,rc=36196,oc=37492,ac=37496,lc=37488,cc=37489,ra=37490,hc=37491,uc=37808,fc=37809,dc=37810,pc=37811,mc=37812,gc=37813,xc=37814,yc=37815,_c=37816,vc=37817,Mc=37818,bc=37819,Sc=37820,wc=37821,Tc=36492,Ec=36494,Ac=36495,Rc=36283,Cc=36284,oa=36285,Pc=36286;var bo=2300,gl=2301,ol=2302,Jh=2303,jh=2400,Qh=2401,eu=2402;var _p=3200;var aa=0,vp=1,ts="",cn="srgb",So="srgb-linear",wo="linear",St="srgb";var al=7680;var Mp=519,bp=512,Sp=513,wp=514,Ru=515,Tp=516,Ep=517,Cu=518,Pu=519,Iu=35044,qr=35048;var Lu="300 es",ei=2e3,Lr=2001;function rg(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function og(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function To(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Ap(){let n=To("canvas");return n.style.display="block",n}var gd={},Nr=null;function Eo(...n){let e="THREE."+n.shift();Nr?Nr("log",e,...n):console.log(e,...n)}function Rp(n){let e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function qe(...n){n=Rp(n);let e="THREE."+n.shift();if(Nr)Nr("warn",e,...n);else{let t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function $e(...n){n=Rp(n);let e="THREE."+n.shift();if(Nr)Nr("error",e,...n);else{let t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function _o(...n){let e=n.join(" ");e in gd||(gd[e]=!0,qe(...n))}function Cp(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}var Pp={[ll]:ll,[hl]:dl,[ul]:ul,[Ir]:fl,[cl]:cl,[dl]:hl,[pl]:pl,[fl]:Ir},Ei=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let s=i[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},An=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Th=Math.PI/180,xl=180/Math.PI;function ws(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(An[n&255]+An[n>>8&255]+An[n>>16&255]+An[n>>24&255]+"-"+An[e&255]+An[e>>8&255]+"-"+An[e>>16&15|64]+An[e>>24&255]+"-"+An[t&63|128]+An[t>>8&255]+"-"+An[t>>16&255]+An[t>>24&255]+An[i&255]+An[i>>8&255]+An[i>>16&255]+An[i>>24&255]).toLowerCase()}function ut(n,e,t){return Math.max(e,Math.min(t,n))}function ag(n,e){return(n%e+e)%e}function Eh(n,e,t){return(1-t)*n+t*e}function Ip(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Ic(n){switch(n.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Lp(n,e){if(e.constructor===Float32Array)return n;let t=Ic(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(n/t,-1)}function Np(n,e){if(e.constructor===Float32Array)return n;let t=Ic(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(n*t)}var fe=class{static{this.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ut(this.x,e.x,t.x),this.y=ut(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ut(this.x,e,t),this.y=ut(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ut(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(ut(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ai=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],h=i[s+2],f=i[s+3],u=r[o+0],d=r[o+1],p=r[o+2],_=r[o+3];if(f!==_||l!==u||c!==d||h!==p){let x=l*u+c*d+h*p+f*_;x<0&&(u=-u,d=-d,p=-p,_=-_,x=-x);let g=1-a;if(x<.9995){let v=Math.acos(x),w=Math.sin(v);g=Math.sin(g*v)/w,a=Math.sin(a*v)/w,l=l*g+u*a,c=c*g+d*a,h=h*g+p*a,f=f*g+_*a}else{l=l*g+u*a,c=c*g+d*a,h=h*g+p*a,f=f*g+_*a;let v=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=v,c*=v,h*=v,f*=v}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],f=r[o],u=r[o+1],d=r[o+2],p=r[o+3];return e[t]=a*p+h*f+l*d-c*u,e[t+1]=l*p+h*u+c*f-a*d,e[t+2]=c*p+h*d+a*u-l*f,e[t+3]=h*p-a*f-l*u-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),f=a(r/2),u=l(i/2),d=l(s/2),p=l(r/2);switch(o){case"XYZ":this._x=u*h*f+c*d*p,this._y=c*d*f-u*h*p,this._z=c*h*p+u*d*f,this._w=c*h*f-u*d*p;break;case"YXZ":this._x=u*h*f+c*d*p,this._y=c*d*f-u*h*p,this._z=c*h*p-u*d*f,this._w=c*h*f+u*d*p;break;case"ZXY":this._x=u*h*f-c*d*p,this._y=c*d*f+u*h*p,this._z=c*h*p+u*d*f,this._w=c*h*f-u*d*p;break;case"ZYX":this._x=u*h*f-c*d*p,this._y=c*d*f+u*h*p,this._z=c*h*p-u*d*f,this._w=c*h*f+u*d*p;break;case"YZX":this._x=u*h*f+c*d*p,this._y=c*d*f+u*h*p,this._z=c*h*p-u*d*f,this._w=c*h*f-u*d*p;break;case"XZY":this._x=u*h*f-c*d*p,this._y=c*d*f-u*h*p,this._z=c*h*p+u*d*f,this._w=c*h*f+u*d*p;break;default:qe("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],f=t[10],u=i+a+f;if(u>0){let d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(i>a&&i>f){let d=2*Math.sqrt(1+i-a-f);this._w=(h-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>f){let d=2*Math.sqrt(1+a-i-f);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+f-i-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ut(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-s*a,this._w=o*h-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let l=1-t;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},W=class{static{this.prototype.isVector3=!0}constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(xd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(xd.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),h=2*(a*t-r*s),f=2*(r*i-o*t);return this.x=t+l*c+o*f-a*h,this.y=i+l*h+a*c-r*f,this.z=s+l*f+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ut(this.x,e.x,t.x),this.y=ut(this.y,e.y,t.y),this.z=ut(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ut(this.x,e,t),this.y=ut(this.y,e,t),this.z=ut(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ut(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ah.copy(this).projectOnVector(e),this.sub(Ah)}reflect(e){return this.sub(Ah.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(ut(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ah=new W,xd=new Ai,je=class{static{this.prototype.isMatrix3=!0}constructor(e,t,i,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],f=i[7],u=i[2],d=i[5],p=i[8],_=s[0],x=s[3],g=s[6],v=s[1],w=s[4],S=s[7],C=s[2],A=s[5],m=s[8];return r[0]=o*_+a*v+l*C,r[3]=o*x+a*w+l*A,r[6]=o*g+a*S+l*m,r[1]=c*_+h*v+f*C,r[4]=c*x+h*w+f*A,r[7]=c*g+h*S+f*m,r[2]=u*_+d*v+p*C,r[5]=u*x+d*w+p*A,r[8]=u*g+d*S+p*m,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-i*r*h+i*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],f=h*o-a*c,u=a*l-h*r,d=c*r-o*l,p=t*f+i*u+s*d;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/p;return e[0]=f*_,e[1]=(s*c-h*i)*_,e[2]=(a*i-s*o)*_,e[3]=u*_,e[4]=(h*t-s*l)*_,e[5]=(s*r-a*t)*_,e[6]=d*_,e[7]=(i*l-c*t)*_,e[8]=(o*t-i*r)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return _o("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Rh.makeScale(e,t)),this}rotate(e){return _o("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Rh.makeRotation(-e)),this}translate(e,t){return _o("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Rh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Rh=new je,yd=new je().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),_d=new je().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function lg(){let n={enabled:!0,workingColorSpace:So,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===St&&(s.r=Zi(s.r),s.g=Zi(s.g),s.b=Zi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===St&&(s.r=Pr(s.r),s.g=Pr(s.g),s.b=Pr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ts?wo:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[So]:{primaries:e,whitePoint:i,transfer:wo,toXYZ:yd,fromXYZ:_d,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:cn},outputColorSpaceConfig:{drawingBufferColorSpace:cn}},[cn]:{primaries:e,whitePoint:i,transfer:St,toXYZ:yd,fromXYZ:_d,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:cn}}}),n}var mt=lg();function Zi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Pr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var fr,yl=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{fr===void 0&&(fr=To("canvas")),fr.width=e.width,fr.height=e.height;let s=fr.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=fr}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=To("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Zi(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Zi(t[i]/255)*255):t[i]=Zi(t[i]);return{data:t,width:e.width,height:e.height}}else return qe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},cg=0,Dr=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:cg++}),this.uuid=ws(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Ch(s[o].image)):r.push(Ch(s[o]))}else r=Ch(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function Ch(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?yl.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(qe("Texture: Unable to serialize Texture."),{})}var hg=0,Ph=new W,Dn=class n extends Ei{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=Ti,s=Ti,r=Mn,o=_i,a=Zn,l=On,c=n.DEFAULT_ANISOTROPY,h=ts){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:hg++}),this.uuid=ws(),this.name="",this.source=new Dr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new fe(0,0),this.repeat=new fe(1,1),this.center=new fe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new je,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Ph).x}get height(){return this.source.getSize(Ph).y}get depth(){return this.source.getSize(Ph).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){qe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){qe(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Mu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ps:e.x=e.x-Math.floor(e.x);break;case Ti:e.x=e.x<0?0:1;break;case ml:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ps:e.y=e.y-Math.floor(e.y);break;case Ti:e.y=e.y<0?0:1;break;case ml:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Dn.DEFAULT_IMAGE=null;Dn.DEFAULT_MAPPING=Mu;Dn.DEFAULT_ANISOTROPY=1;var Dt=class{static{this.prototype.isVector4=!0}constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,c=l[0],h=l[4],f=l[8],u=l[1],d=l[5],p=l[9],_=l[2],x=l[6],g=l[10];if(Math.abs(h-u)<.01&&Math.abs(f-_)<.01&&Math.abs(p-x)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+_)<.1&&Math.abs(p+x)<.1&&Math.abs(c+d+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let w=(c+1)/2,S=(d+1)/2,C=(g+1)/2,A=(h+u)/4,m=(f+_)/4,b=(p+x)/4;return w>S&&w>C?w<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(w),s=A/i,r=m/i):S>C?S<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),i=A/s,r=b/s):C<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),i=m/r,s=b/r),this.set(i,s,r,t),this}let v=Math.sqrt((x-p)*(x-p)+(f-_)*(f-_)+(u-h)*(u-h));return Math.abs(v)<.001&&(v=1),this.x=(x-p)/v,this.y=(f-_)/v,this.z=(u-h)/v,this.w=Math.acos((c+d+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ut(this.x,e.x,t.x),this.y=ut(this.y,e.y,t.y),this.z=ut(this.z,e.z,t.z),this.w=ut(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ut(this.x,e,t),this.y=ut(this.y,e,t),this.z=ut(this.z,e,t),this.w=ut(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ut(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},_l=class extends Ei{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Mn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Dt(0,0,e,t),this.scissorTest=!1,this.viewport=new Dt(0,0,e,t),this.textures=[];let s=i.count;for(let r=0;r<s;r++)this.textures[r]=new Dn({width:e,height:t,depth:i.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Mn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Dr(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Xn=class extends _l{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Ao=class extends Dn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=yn,this.minFilter=yn,this.wrapR=Ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var vl=class extends Dn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=yn,this.minFilter=yn,this.wrapR=Ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var vt=class n{static{this.prototype.isMatrix4=!0}constructor(e,t,i,s,r,o,a,l,c,h,f,u,d,p,_,x){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,h,f,u,d,p,_,x)}set(e,t,i,s,r,o,a,l,c,h,f,u,d,p,_,x){let g=this.elements;return g[0]=e,g[4]=t,g[8]=i,g[12]=s,g[1]=r,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=h,g[10]=f,g[14]=u,g[3]=d,g[7]=p,g[11]=_,g[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,i=e.elements,s=1/dr.setFromMatrixColumn(e,0).length(),r=1/dr.setFromMatrixColumn(e,1).length(),o=1/dr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){let u=o*h,d=o*f,p=a*h,_=a*f;t[0]=l*h,t[4]=-l*f,t[8]=c,t[1]=d+p*c,t[5]=u-_*c,t[9]=-a*l,t[2]=_-u*c,t[6]=p+d*c,t[10]=o*l}else if(e.order==="YXZ"){let u=l*h,d=l*f,p=c*h,_=c*f;t[0]=u+_*a,t[4]=p*a-d,t[8]=o*c,t[1]=o*f,t[5]=o*h,t[9]=-a,t[2]=d*a-p,t[6]=_+u*a,t[10]=o*l}else if(e.order==="ZXY"){let u=l*h,d=l*f,p=c*h,_=c*f;t[0]=u-_*a,t[4]=-o*f,t[8]=p+d*a,t[1]=d+p*a,t[5]=o*h,t[9]=_-u*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let u=o*h,d=o*f,p=a*h,_=a*f;t[0]=l*h,t[4]=p*c-d,t[8]=u*c+_,t[1]=l*f,t[5]=_*c+u,t[9]=d*c-p,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let u=o*l,d=o*c,p=a*l,_=a*c;t[0]=l*h,t[4]=_-u*f,t[8]=p*f+d,t[1]=f,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=d*f+p,t[10]=u-_*f}else if(e.order==="XZY"){let u=o*l,d=o*c,p=a*l,_=a*c;t[0]=l*h,t[4]=-f,t[8]=c*h,t[1]=u*f+_,t[5]=o*h,t[9]=d*f-p,t[2]=p*f-d,t[6]=a*h,t[10]=_*f+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ug,e,fg)}lookAt(e,t,i){let s=this.elements;return Gn.subVectors(e,t),Gn.lengthSq()===0&&(Gn.z=1),Gn.normalize(),cs.crossVectors(i,Gn),cs.lengthSq()===0&&(Math.abs(i.z)===1?Gn.x+=1e-4:Gn.z+=1e-4,Gn.normalize(),cs.crossVectors(i,Gn)),cs.normalize(),Da.crossVectors(Gn,cs),s[0]=cs.x,s[4]=Da.x,s[8]=Gn.x,s[1]=cs.y,s[5]=Da.y,s[9]=Gn.y,s[2]=cs.z,s[6]=Da.z,s[10]=Gn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],f=i[5],u=i[9],d=i[13],p=i[2],_=i[6],x=i[10],g=i[14],v=i[3],w=i[7],S=i[11],C=i[15],A=s[0],m=s[4],b=s[8],P=s[12],M=s[1],E=s[5],R=s[9],y=s[13],T=s[2],I=s[6],N=s[10],z=s[14],B=s[3],F=s[7],U=s[11],V=s[15];return r[0]=o*A+a*M+l*T+c*B,r[4]=o*m+a*E+l*I+c*F,r[8]=o*b+a*R+l*N+c*U,r[12]=o*P+a*y+l*z+c*V,r[1]=h*A+f*M+u*T+d*B,r[5]=h*m+f*E+u*I+d*F,r[9]=h*b+f*R+u*N+d*U,r[13]=h*P+f*y+u*z+d*V,r[2]=p*A+_*M+x*T+g*B,r[6]=p*m+_*E+x*I+g*F,r[10]=p*b+_*R+x*N+g*U,r[14]=p*P+_*y+x*z+g*V,r[3]=v*A+w*M+S*T+C*B,r[7]=v*m+w*E+S*I+C*F,r[11]=v*b+w*R+S*N+C*U,r[15]=v*P+w*y+S*z+C*V,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],f=e[6],u=e[10],d=e[14],p=e[3],_=e[7],x=e[11],g=e[15],v=l*d-c*u,w=a*d-c*f,S=a*u-l*f,C=o*d-c*h,A=o*u-l*h,m=o*f-a*h;return t*(_*v-x*w+g*S)-i*(p*v-x*C+g*A)+s*(p*w-_*C+g*m)-r*(p*S-_*A+x*m)}determinantAffine(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[1],o=e[5],a=e[9],l=e[2],c=e[6],h=e[10];return t*(o*h-a*c)-i*(r*h-a*l)+s*(r*c-o*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],f=e[9],u=e[10],d=e[11],p=e[12],_=e[13],x=e[14],g=e[15],v=t*a-i*o,w=t*l-s*o,S=t*c-r*o,C=i*l-s*a,A=i*c-r*a,m=s*c-r*l,b=h*_-f*p,P=h*x-u*p,M=h*g-d*p,E=f*x-u*_,R=f*g-d*_,y=u*g-d*x,T=v*y-w*R+S*E+C*M-A*P+m*b;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let I=1/T;return e[0]=(a*y-l*R+c*E)*I,e[1]=(s*R-i*y-r*E)*I,e[2]=(_*m-x*A+g*C)*I,e[3]=(u*A-f*m-d*C)*I,e[4]=(l*M-o*y-c*P)*I,e[5]=(t*y-s*M+r*P)*I,e[6]=(x*S-p*m-g*w)*I,e[7]=(h*m-u*S+d*w)*I,e[8]=(o*R-a*M+c*b)*I,e[9]=(i*M-t*R-r*b)*I,e[10]=(p*A-_*S+g*v)*I,e[11]=(f*S-h*A-d*v)*I,e[12]=(a*P-o*E-l*b)*I,e[13]=(t*E-i*P+s*b)*I,e[14]=(_*w-p*C-x*v)*I,e[15]=(h*C-f*w+u*v)*I,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,f=a+a,u=r*c,d=r*h,p=r*f,_=o*h,x=o*f,g=a*f,v=l*c,w=l*h,S=l*f,C=i.x,A=i.y,m=i.z;return s[0]=(1-(_+g))*C,s[1]=(d+S)*C,s[2]=(p-w)*C,s[3]=0,s[4]=(d-S)*A,s[5]=(1-(u+g))*A,s[6]=(x+v)*A,s[7]=0,s[8]=(p+w)*m,s[9]=(x-v)*m,s[10]=(1-(u+_))*m,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let o=dr.set(s[0],s[1],s[2]).length(),a=dr.set(s[4],s[5],s[6]).length(),l=dr.set(s[8],s[9],s[10]).length();r<0&&(o=-o),di.copy(this);let c=1/o,h=1/a,f=1/l;return di.elements[0]*=c,di.elements[1]*=c,di.elements[2]*=c,di.elements[4]*=h,di.elements[5]*=h,di.elements[6]*=h,di.elements[8]*=f,di.elements[9]*=f,di.elements[10]*=f,t.setFromRotationMatrix(di),i.x=o,i.y=a,i.z=l,this}makePerspective(e,t,i,s,r,o,a=ei,l=!1){let c=this.elements,h=2*r/(t-e),f=2*r/(i-s),u=(t+e)/(t-e),d=(i+s)/(i-s),p,_;if(l)p=r/(o-r),_=o*r/(o-r);else if(a===ei)p=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===Lr)p=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=f,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=ei,l=!1){let c=this.elements,h=2/(t-e),f=2/(i-s),u=-(t+e)/(t-e),d=-(i+s)/(i-s),p,_;if(l)p=1/(o-r),_=o/(o-r);else if(a===ei)p=-2/(o-r),_=-(o+r)/(o-r);else if(a===Lr)p=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=f,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},dr=new W,di=new vt,ug=new W(0,0,0),fg=new W(1,1,1),cs=new W,Da=new W,Gn=new W,vd=new vt,Md=new Ai,ti=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],f=s[2],u=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(ut(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ut(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(ut(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ut(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ut(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-ut(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:qe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return vd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(vd,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Md.setFromEuler(this),this.setFromQuaternion(Md,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ti.DEFAULT_ORDER="XYZ";var Ro=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},dg=0,bd=new W,pr=new Ai,Gi=new vt,Ua=new W,lo=new W,pg=new W,mg=new Ai,Sd=new W(1,0,0),wd=new W(0,1,0),Td=new W(0,0,1),Ed={type:"added"},gg={type:"removed"},mr={type:"childadded",child:null},Ih={type:"childremoved",child:null},Ut=class n extends Ei{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:dg++}),this.uuid=ws(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new W,t=new ti,i=new Ai,s=new W(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new vt},normalMatrix:{value:new je}}),this.matrix=new vt,this.matrixWorld=new vt,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ro,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return pr.setFromAxisAngle(e,t),this.quaternion.multiply(pr),this}rotateOnWorldAxis(e,t){return pr.setFromAxisAngle(e,t),this.quaternion.premultiply(pr),this}rotateX(e){return this.rotateOnAxis(Sd,e)}rotateY(e){return this.rotateOnAxis(wd,e)}rotateZ(e){return this.rotateOnAxis(Td,e)}translateOnAxis(e,t){return bd.copy(e).applyQuaternion(this.quaternion),this.position.add(bd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Sd,e)}translateY(e){return this.translateOnAxis(wd,e)}translateZ(e){return this.translateOnAxis(Td,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Gi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Ua.copy(e):Ua.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),lo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Gi.lookAt(lo,Ua,this.up):Gi.lookAt(Ua,lo,this.up),this.quaternion.setFromRotationMatrix(Gi),s&&(Gi.extractRotation(s.matrixWorld),pr.setFromRotationMatrix(Gi),this.quaternion.premultiply(pr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?($e("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ed),mr.child=e,this.dispatchEvent(mr),mr.child=null):$e("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(gg),Ih.child=e,this.dispatchEvent(Ih),Ih.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Gi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Gi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Gi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ed),mr.child=e,this.dispatchEvent(mr),mr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(lo,e,pg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(lo,mg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,i)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),f=o(e.shapes),u=o(e.skeletons),d=o(e.animations),p=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),f.length>0&&(i.shapes=f),u.length>0&&(i.skeletons=u),d.length>0&&(i.animations=d),p.length>0&&(i.nodes=p)}return i.object=s,i;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Ut.DEFAULT_UP=new W(0,1,0);Ut.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ct=class extends Ut{constructor(){super(),this.isGroup=!0,this.type="Group"}},xg={type:"move"},Ur=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ct,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ct,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ct,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let _ of e.hand.values()){let x=t.getJointPose(_,i),g=this._getHandJoint(c,_);x!==null&&(g.matrix.fromArray(x.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=x.radius),g.visible=x!==null}let h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],u=h.position.distanceTo(f.position),d=.02,p=.005;c.inputState.pinching&&u>d+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=d-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(xg)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Ct;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},Dp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},hs={h:0,s:0,l:0},Fa={h:0,s:0,l:0};function Lh(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var We=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=cn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,mt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=mt.workingColorSpace){return this.r=e,this.g=t,this.b=i,mt.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=mt.workingColorSpace){if(e=ag(e,1),t=ut(t,0,1),i=ut(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=Lh(o,r,e+1/3),this.g=Lh(o,r,e),this.b=Lh(o,r,e-1/3)}return mt.colorSpaceToWorking(this,s),this}setStyle(e,t=cn){function i(r){r!==void 0&&parseFloat(r)<1&&qe("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:qe("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);qe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=cn){let i=Dp[e.toLowerCase()];return i!==void 0?this.setHex(i,t):qe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Zi(e.r),this.g=Zi(e.g),this.b=Zi(e.b),this}copyLinearToSRGB(e){return this.r=Pr(e.r),this.g=Pr(e.g),this.b=Pr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=cn){return mt.workingToColorSpace(Rn.copy(this),e),Math.round(ut(Rn.r*255,0,255))*65536+Math.round(ut(Rn.g*255,0,255))*256+Math.round(ut(Rn.b*255,0,255))}getHexString(e=cn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=mt.workingColorSpace){mt.workingToColorSpace(Rn.copy(this),t);let i=Rn.r,s=Rn.g,r=Rn.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let f=o-a;switch(c=h<=.5?f/(o+a):f/(2-o-a),o){case i:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-i)/f+2;break;case r:l=(i-s)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=mt.workingColorSpace){return mt.workingToColorSpace(Rn.copy(this),t),e.r=Rn.r,e.g=Rn.g,e.b=Rn.b,e}getStyle(e=cn){mt.workingToColorSpace(Rn.copy(this),e);let t=Rn.r,i=Rn.g,s=Rn.b;return e!==cn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(hs),this.setHSL(hs.h+e,hs.s+t,hs.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(hs),e.getHSL(Fa);let i=Eh(hs.h,Fa.h,t),s=Eh(hs.s,Fa.s,t),r=Eh(hs.l,Fa.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Rn=new We;We.NAMES=Dp;var Co=class n{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new We(e),this.near=t,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},qn=class extends Ut{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ti,this.environmentIntensity=1,this.environmentRotation=new ti,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},pi=new W,Wi=new W,Nh=new W,Xi=new W,gr=new W,xr=new W,Ad=new W,Dh=new W,Uh=new W,Fh=new W,Oh=new Dt,zh=new Dt,kh=new Dt,$i=class n{constructor(e=new W,t=new W,i=new W){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),pi.subVectors(e,t),s.cross(pi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){pi.subVectors(s,t),Wi.subVectors(i,t),Nh.subVectors(e,t);let o=pi.dot(pi),a=pi.dot(Wi),l=pi.dot(Nh),c=Wi.dot(Wi),h=Wi.dot(Nh),f=o*c-a*a;if(f===0)return r.set(0,0,0),null;let u=1/f,d=(c*l-a*h)*u,p=(o*h-a*l)*u;return r.set(1-d-p,p,d)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Xi)===null?!1:Xi.x>=0&&Xi.y>=0&&Xi.x+Xi.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,Xi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Xi.x),l.addScaledVector(o,Xi.y),l.addScaledVector(a,Xi.z),l)}static getInterpolatedAttribute(e,t,i,s,r,o){return Oh.setScalar(0),zh.setScalar(0),kh.setScalar(0),Oh.fromBufferAttribute(e,t),zh.fromBufferAttribute(e,i),kh.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Oh,r.x),o.addScaledVector(zh,r.y),o.addScaledVector(kh,r.z),o}static isFrontFacing(e,t,i,s){return pi.subVectors(i,t),Wi.subVectors(e,t),pi.cross(Wi).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return pi.subVectors(this.c,this.b),Wi.subVectors(this.a,this.b),pi.cross(Wi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,o,a;gr.subVectors(s,i),xr.subVectors(r,i),Dh.subVectors(e,i);let l=gr.dot(Dh),c=xr.dot(Dh);if(l<=0&&c<=0)return t.copy(i);Uh.subVectors(e,s);let h=gr.dot(Uh),f=xr.dot(Uh);if(h>=0&&f<=h)return t.copy(s);let u=l*f-h*c;if(u<=0&&l>=0&&h<=0&&l-h>0)return o=l/(l-h),t.copy(i).addScaledVector(gr,o);Fh.subVectors(e,r);let d=gr.dot(Fh),p=xr.dot(Fh);if(p>=0&&d<=p)return t.copy(r);let _=d*c-l*p;if(_<=0&&c>=0&&p<=0)return a=c/(c-p),t.copy(i).addScaledVector(xr,a);let x=h*p-d*f;if(x<=0&&f-h>=0&&d-p>=0)return Ad.subVectors(r,s),a=(f-h)/(f-h+(d-p)),t.copy(s).addScaledVector(Ad,a);let g=1/(x+_+u);return o=_*g,a=u*g,t.copy(i).addScaledVector(gr,o).addScaledVector(xr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Ri=class{constructor(e=new W(1/0,1/0,1/0),t=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(mi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(mi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=mi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,mi):mi.fromBufferAttribute(r,o),mi.applyMatrix4(e.matrixWorld),this.expandByPoint(mi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Oa.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Oa.copy(i.boundingBox)),Oa.applyMatrix4(e.matrixWorld),this.union(Oa)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,mi),mi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(co),za.subVectors(this.max,co),yr.subVectors(e.a,co),_r.subVectors(e.b,co),vr.subVectors(e.c,co),us.subVectors(_r,yr),fs.subVectors(vr,_r),ks.subVectors(yr,vr);let t=[0,-us.z,us.y,0,-fs.z,fs.y,0,-ks.z,ks.y,us.z,0,-us.x,fs.z,0,-fs.x,ks.z,0,-ks.x,-us.y,us.x,0,-fs.y,fs.x,0,-ks.y,ks.x,0];return!Bh(t,yr,_r,vr,za)||(t=[1,0,0,0,1,0,0,0,1],!Bh(t,yr,_r,vr,za))?!1:(ka.crossVectors(us,fs),t=[ka.x,ka.y,ka.z],Bh(t,yr,_r,vr,za))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,mi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(mi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(qi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),qi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),qi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),qi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),qi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),qi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),qi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),qi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(qi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},qi=[new W,new W,new W,new W,new W,new W,new W,new W],mi=new W,Oa=new Ri,yr=new W,_r=new W,vr=new W,us=new W,fs=new W,ks=new W,co=new W,za=new W,ka=new W,Bs=new W;function Bh(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Bs.fromArray(n,r);let a=s.x*Math.abs(Bs.x)+s.y*Math.abs(Bs.y)+s.z*Math.abs(Bs.z),l=e.dot(Bs),c=t.dot(Bs),h=i.dot(Bs);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var on=new W,Ba=new fe,yg=0,Qt=class extends Ei{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:yg++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Iu,this.updateRanges=[],this.gpuType=ri,this.version=0,this._normalizationScale=e!==void 0?Ic(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ba.fromBufferAttribute(this,t),Ba.applyMatrix3(e),this.setXY(t,Ba.x,Ba.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)on.fromBufferAttribute(this,t),on.applyMatrix3(e),this.setXYZ(t,on.x,on.y,on.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)on.fromBufferAttribute(this,t),on.applyMatrix4(e),this.setXYZ(t,on.x,on.y,on.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)on.fromBufferAttribute(this,t),on.applyNormalMatrix(e),this.setXYZ(t,on.x,on.y,on.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)on.fromBufferAttribute(this,t),on.transformDirection(e),this.setXYZ(t,on.x,on.y,on.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,t,i){return this.normalized&&(i=this._normalize(i)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Lp(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Np(e,this.array)}};var Po=class extends Qt{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Io=class extends Qt{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var st=class extends Qt{constructor(e,t,i){super(new Float32Array(e),t,i)}},_g=new Ri,ho=new W,Hh=new W,ms=class{constructor(e=new W,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):_g.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ho.subVectors(e,this.center);let t=ho.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(ho,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Hh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ho.copy(e.center).add(Hh)),this.expandByPoint(ho.copy(e.center).sub(Hh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},vg=0,Qn=new vt,Vh=new Ut,Mr=new W,Wn=new Ri,uo=new Ri,xn=new W,Zt=class n extends Ei{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:vg++}),this.uuid=ws(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(rg(e)?Io:Po)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new je().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Qn.makeRotationFromQuaternion(e),this.applyMatrix4(Qn),this}rotateX(e){return Qn.makeRotationX(e),this.applyMatrix4(Qn),this}rotateY(e){return Qn.makeRotationY(e),this.applyMatrix4(Qn),this}rotateZ(e){return Qn.makeRotationZ(e),this.applyMatrix4(Qn),this}translate(e,t,i){return Qn.makeTranslation(e,t,i),this.applyMatrix4(Qn),this}scale(e,t,i){return Qn.makeScale(e,t,i),this.applyMatrix4(Qn),this}lookAt(e){return Vh.lookAt(e),Vh.updateMatrix(),this.applyMatrix4(Vh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Mr).negate(),this.translate(Mr.x,Mr.y,Mr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new st(i,3))}else{let i=Math.min(e.length,t.count);for(let s=0;s<i;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&qe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ri);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){$e("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];Wn.setFromBufferAttribute(r),this.morphTargetsRelative?(xn.addVectors(this.boundingBox.min,Wn.min),this.boundingBox.expandByPoint(xn),xn.addVectors(this.boundingBox.max,Wn.max),this.boundingBox.expandByPoint(xn)):(this.boundingBox.expandByPoint(Wn.min),this.boundingBox.expandByPoint(Wn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&$e('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ms);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){$e("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new W,1/0);return}if(e){let i=this.boundingSphere.center;if(Wn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];uo.setFromBufferAttribute(a),this.morphTargetsRelative?(xn.addVectors(Wn.min,uo.min),Wn.expandByPoint(xn),xn.addVectors(Wn.max,uo.max),Wn.expandByPoint(xn)):(Wn.expandByPoint(uo.min),Wn.expandByPoint(uo.max))}Wn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)xn.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(xn));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)xn.fromBufferAttribute(a,c),l&&(Mr.fromBufferAttribute(e,c),xn.add(Mr)),s=Math.max(s,i.distanceToSquared(xn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&$e('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){$e("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new Qt(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));let a=[],l=[],c=new Uint8Array(i.count);for(let P=0;P<i.count;P++)a[P]=new W,l[P]=new W;let h=new W,f=new W,u=new W,d=new fe,p=new fe,_=new fe,x=new W,g=new W;function v(P,M,E){c[P]=c[M]=c[E]=1,h.fromBufferAttribute(i,P),f.fromBufferAttribute(i,M),u.fromBufferAttribute(i,E),d.fromBufferAttribute(r,P),p.fromBufferAttribute(r,M),_.fromBufferAttribute(r,E),f.sub(h),u.sub(h),p.sub(d),_.sub(d);let R=1/(p.x*_.y-_.x*p.y);isFinite(R)&&(x.copy(f).multiplyScalar(_.y).addScaledVector(u,-p.y).multiplyScalar(R),g.copy(u).multiplyScalar(p.x).addScaledVector(f,-_.x).multiplyScalar(R),a[P].add(x),a[M].add(x),a[E].add(x),l[P].add(g),l[M].add(g),l[E].add(g))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let P=0,M=w.length;P<M;++P){let E=w[P],R=E.start,y=E.count;for(let T=R,I=R+y;T<I;T+=3)v(e.getX(T+0),e.getX(T+1),e.getX(T+2))}let S=new W,C=new W,A=new W,m=new W;function b(P){A.fromBufferAttribute(s,P),m.copy(A);let M=a[P];S.copy(M),S.sub(A.multiplyScalar(A.dot(M))).normalize(),C.crossVectors(m,M);let R=C.dot(l[P])<0?-1:1;o.setXYZW(P,S.x,S.y,S.z,R)}for(let P=0,M=i.count;P<M;++P)c[P]&&b(P);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new Qt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let u=0,d=i.count;u<d;u++)i.setXYZ(u,0,0,0);let s=new W,r=new W,o=new W,a=new W,l=new W,c=new W,h=new W,f=new W;if(e)for(let u=0,d=e.count;u<d;u+=3){let p=e.getX(u+0),_=e.getX(u+1),x=e.getX(u+2);s.fromBufferAttribute(t,p),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,x),h.subVectors(o,r),f.subVectors(s,r),h.cross(f),a.fromBufferAttribute(i,p),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,x),a.add(h),l.add(h),c.add(h),i.setXYZ(p,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(x,c.x,c.y,c.z)}else for(let u=0,d=t.count;u<d;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),o.fromBufferAttribute(t,u+2),h.subVectors(o,r),f.subVectors(s,r),h.cross(f),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)xn.fromBufferAttribute(e,t),xn.normalize(),e.setXYZ(t,xn.x,xn.y,xn.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,f=a.normalized,u=new c.constructor(l.length*h),d=0,p=0;for(let _=0,x=l.length;_<x;_++){a.isInterleavedBufferAttribute?d=l[_]*a.data.stride+a.offset:d=l[_]*h;for(let g=0;g<h;g++)u[p++]=c[d++]}return new Qt(u,h,f)}if(this.index===null)return qe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,i);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,f=c.length;h<f;h++){let u=c[h],d=e(u,i);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let f=0,u=c.length;f<u;f++){let d=c[f];h.push(d.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],f=r[c];for(let u=0,d=f.length;u<d;u++)h.push(f[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Lo=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Iu,this.updateRanges=[],this.version=0,this.uuid=ws()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=Rd(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let i=new this.array.constructor(e.arrayBuffers[t]),s=new this.constructor(i,this.stride);return s.setUsage(this.usage),s}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=Rd(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let i={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return i.usage=this.usage,i}};function Rd(n){return n.buffer._uuid===void 0&&(n.buffer._uuid=ws()),n.byteOffset===0&&n.byteLength===n.buffer.byteLength?n.buffer._uuid:n.buffer._uuid+":"+n.byteOffset+":"+n.byteLength}var Nn=new W,Fr=class n{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s,this._normalizationScale=e!==void 0?Ic(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Nn.fromBufferAttribute(this,t),Nn.applyMatrix4(e),this.setXYZ(t,Nn.x,Nn.y,Nn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Nn.fromBufferAttribute(this,t),Nn.applyNormalMatrix(e),this.setXYZ(t,Nn.x,Nn.y,Nn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Nn.fromBufferAttribute(this,t),Nn.transformDirection(e),this.setXYZ(t,Nn.x,Nn.y,Nn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,t,i){return this.normalized&&(i=this._normalize(i)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),i=this._normalize(i)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Eo("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Qt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Eo("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Lp(e,this.data.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Np(e,this.data.array)}},Gh=new W,Mg=new W,bg=new je,gi=class{constructor(e=new W(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=Gh.subVectors(i,t).cross(Mg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let s=e.delta(Gh),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||bg.getNormalMatrix(e),s=this.coplanarPoint(Gh).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Sg=0,Ci=class extends Ei{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Sg++}),this.uuid=ws(),this.name="",this.type="Material",this.blending=Gr,this.side=Di,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=du,this.blendDst=pu,this.blendEquation=Ks,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new We(0,0,0),this.blendAlpha=0,this.depthFunc=Ir,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Mp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=al,this.stencilZFail=al,this.stencilZPass=al,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){qe(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){qe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new We().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new gi().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new fe().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new fe().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Or=class extends Ci{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new We(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},br,fo=new W,Sr=new W,wr=new W,Tr=new fe,po=new fe,Up=new vt,Ha=new W,mo=new W,Va=new W,Cd=new fe,Wh=new fe,Pd=new fe,No=class extends Ut{constructor(e=new Or){if(super(),this.isSprite=!0,this.type="Sprite",br===void 0){br=new Zt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Lo(t,5);br.setIndex([0,1,2,0,2,3]),br.setAttribute("position",new Fr(i,3,0,!1)),br.setAttribute("uv",new Fr(i,2,3,!1))}this.geometry=br,this.material=e,this.center=new fe(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&$e('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Sr.setFromMatrixScale(this.matrixWorld),Up.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),wr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Sr.multiplyScalar(-wr.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let o=this.center;Ga(Ha.set(-.5,-.5,0),wr,o,Sr,s,r),Ga(mo.set(.5,-.5,0),wr,o,Sr,s,r),Ga(Va.set(.5,.5,0),wr,o,Sr,s,r),Cd.set(0,0),Wh.set(1,0),Pd.set(1,1);let a=e.ray.intersectTriangle(Ha,mo,Va,!1,fo);if(a===null&&(Ga(mo.set(-.5,.5,0),wr,o,Sr,s,r),Wh.set(0,1),a=e.ray.intersectTriangle(Ha,Va,mo,!1,fo),a===null))return;let l=e.ray.origin.distanceTo(fo);l<e.near||l>e.far||t.push({distance:l,point:fo.clone(),uv:$i.getInterpolation(fo,Ha,mo,Va,Cd,Wh,Pd,new fe),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}toJSON(e){let t=super.toJSON(e);return t.object.center=this.center.toArray(),t}};function Ga(n,e,t,i,s,r){Tr.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(po.x=r*Tr.x-s*Tr.y,po.y=s*Tr.x+r*Tr.y):po.copy(Tr),n.copy(e),n.x+=po.x,n.y+=po.y,n.applyMatrix4(Up)}var Yi=new W,Xh=new W,Wa=new W,Xa=new W,Ml=class{constructor(e=new W,t=new W(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Yi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Yi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Yi.copy(this.origin).addScaledVector(this.direction,t),Yi.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Xh.copy(e).add(t).multiplyScalar(.5),Wa.copy(t).sub(e).normalize(),Xa.copy(this.origin).sub(Xh);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Wa),a=Xa.dot(this.direction),l=-Xa.dot(Wa),c=Xa.lengthSq(),h=Math.abs(1-o*o),f,u,d,p;if(h>0)if(f=o*l-a,u=o*a-l,p=r*h,f>=0)if(u>=-p)if(u<=p){let _=1/h;f*=_,u*=_,d=f*(f+o*u+2*a)+u*(o*f+u+2*l)+c}else u=r,f=Math.max(0,-(o*u+a)),d=-f*f+u*(u+2*l)+c;else u=-r,f=Math.max(0,-(o*u+a)),d=-f*f+u*(u+2*l)+c;else u<=-p?(f=Math.max(0,-(-o*r+a)),u=f>0?-r:Math.min(Math.max(-r,-l),r),d=-f*f+u*(u+2*l)+c):u<=p?(f=0,u=Math.min(Math.max(-r,-l),r),d=u*(u+2*l)+c):(f=Math.max(0,-(o*r+a)),u=f>0?r:Math.min(Math.max(-r,-l),r),d=-f*f+u*(u+2*l)+c);else u=o>0?-r:r,f=Math.max(0,-(o*u+a)),d=-f*f+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Xh).addScaledVector(Wa,u),d}intersectSphere(e,t){if(e.radius<0)return null;Yi.subVectors(e.center,this.origin);let i=Yi.dot(this.direction),s=Yi.dot(Yi)-i*i,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return c>=0?(i=(e.min.x-u.x)*c,s=(e.max.x-u.x)*c):(i=(e.max.x-u.x)*c,s=(e.min.x-u.x)*c),h>=0?(r=(e.min.y-u.y)*h,o=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,o=(e.min.y-u.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(e.min.z-u.z)*f,l=(e.max.z-u.z)*f):(a=(e.max.z-u.z)*f,l=(e.min.z-u.z)*f),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Yi)!==null}intersectTriangle(e,t,i,s,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,f=e.x-o.x,u=e.y-o.y,d=e.z-o.z,p=t.x-o.x,_=t.y-o.y,x=t.z-o.z,g=i.x-o.x,v=i.y-o.y,w=i.z-o.z,S=Math.abs(l),C=Math.abs(c),A=Math.abs(h),m,b,P,M,E,R,y,T,I,N,z,B;if(S>=C&&S>=A?(P=l,R=f,I=p,B=g,l>=0?(m=c,b=h,M=u,E=d,y=_,T=x,N=v,z=w):(m=h,b=c,M=d,E=u,y=x,T=_,N=w,z=v)):C>=A?(P=c,R=u,I=_,B=v,c>=0?(m=h,b=l,M=d,E=f,y=x,T=p,N=w,z=g):(m=l,b=h,M=f,E=d,y=p,T=x,N=g,z=w)):(P=h,R=d,I=x,B=w,h>=0?(m=l,b=c,M=f,E=u,y=p,T=_,N=g,z=v):(m=c,b=l,M=u,E=f,y=_,T=p,N=v,z=g)),P===0)return null;let F=m/P,U=b/P,V=1/P,$=M-F*R,ee=E-U*R,H=y-F*I,K=T-U*I,Q=N-F*B,he=z-U*B,ie=Q*K-he*H,ce=$*he-ee*Q,Le=H*ee-K*$;if(s){if(ie<0||ce<0||Le<0)return null}else if((ie<0||ce<0||Le<0)&&(ie>0||ce>0||Le>0))return null;let Ce=ie+ce+Le;if(Ce===0)return null;let Ne=V*(ie*R+ce*I+Le*B);return(Ce>0?Ne<0:Ne>0)?null:this.at(Ne/Ce,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},en=class extends Ci{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new We(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ti,this.combine=Wl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Id=new vt,Hs=new Ml,qa=new ms,Ld=new W,Ya=new W,$a=new W,Za=new W,qh=new W,Ka=new W,Nd=new W,Ja=new W,He=class extends Ut{constructor(e=new Zt,t=new en){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){Ka.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],f=r[l];h!==0&&(qh.fromBufferAttribute(f,e),o?Ka.addScaledVector(qh,h):Ka.addScaledVector(qh.sub(t),h))}t.add(Ka)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),qa.copy(i.boundingSphere),qa.applyMatrix4(r),Hs.copy(e.ray).recast(e.near),!(qa.containsPoint(Hs.origin)===!1&&(Hs.intersectSphere(qa,Ld)===null||Hs.origin.distanceToSquared(Ld)>(e.far-e.near)**2))&&(Id.copy(r).invert(),Hs.copy(e.ray).applyMatrix4(Id),!(i.boundingBox!==null&&Hs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Hs)))}_computeIntersections(e,t,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,u=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,_=u.length;p<_;p++){let x=u[p],g=o[x.materialIndex],v=Math.max(x.start,d.start),w=Math.min(a.count,Math.min(x.start+x.count,d.start+d.count));for(let S=v,C=w;S<C;S+=3){let A=a.getX(S),m=a.getX(S+1),b=a.getX(S+2);s=ja(this,g,e,i,c,h,f,A,m,b),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=x.materialIndex,t.push(s))}}else{let p=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let x=p,g=_;x<g;x+=3){let v=a.getX(x),w=a.getX(x+1),S=a.getX(x+2);s=ja(this,o,e,i,c,h,f,v,w,S),s&&(s.faceIndex=Math.floor(x/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,_=u.length;p<_;p++){let x=u[p],g=o[x.materialIndex],v=Math.max(x.start,d.start),w=Math.min(l.count,Math.min(x.start+x.count,d.start+d.count));for(let S=v,C=w;S<C;S+=3){let A=S,m=S+1,b=S+2;s=ja(this,g,e,i,c,h,f,A,m,b),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=x.materialIndex,t.push(s))}}else{let p=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let x=p,g=_;x<g;x+=3){let v=x,w=x+1,S=x+2;s=ja(this,o,e,i,c,h,f,v,w,S),s&&(s.faceIndex=Math.floor(x/3),t.push(s))}}}};function wg(n,e,t,i,s,r,o,a){let l;if(e.side===un?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===Di,a),l===null)return null;Ja.copy(a),Ja.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(Ja);return c<t.near||c>t.far?null:{distance:c,point:Ja.clone(),object:n}}function ja(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,Ya),n.getVertexPosition(l,$a),n.getVertexPosition(c,Za);let h=wg(n,e,t,i,Ya,$a,Za,Nd);if(h){let f=new W;$i.getBarycoord(Nd,Ya,$a,Za,f),s&&(h.uv=$i.getInterpolatedAttribute(s,a,l,c,f,new fe)),r&&(h.uv1=$i.getInterpolatedAttribute(r,a,l,c,f,new fe)),o&&(h.normal=$i.getInterpolatedAttribute(o,a,l,c,f,new W),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new W,materialIndex:0};$i.getNormal(Ya,$a,Za,u.normal),h.face=u,h.barycoord=f}return h}var Ws=class extends Dn{constructor(e=null,t=1,i=1,s,r,o,a,l,c=yn,h=yn,f,u){super(null,o,a,l,c,h,s,r,f,u),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Pi=class extends Qt{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Er=new vt,Dd=new vt,Qa=[],Ud=new Ri,Tg=new vt,go=new He,xo=new ms,Un=class extends He{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Pi(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,Tg)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ri),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Er),Ud.copy(e.boundingBox).applyMatrix4(Er),this.boundingBox.union(Ud)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ms),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Er),xo.copy(e.boundingSphere).applyMatrix4(Er),this.boundingSphere.union(xo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(e,t){let i=this.matrixWorld,s=this.count;if(go.geometry=this.geometry,go.material=this.material,go.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),xo.copy(this.boundingSphere),xo.applyMatrix4(i),e.ray.intersectsSphere(xo)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Er),Dd.multiplyMatrices(i,Er),go.matrixWorld=Dd,go.raycast(e,Qa);for(let o=0,a=Qa.length;o<a;o++){let l=Qa[o];l.instanceId=r,l.object=this,t.push(l)}Qa.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Pi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Ws(new Float32Array(s*this.count),s,this.count,Jl,ri));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<i.length;c++)o+=i[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;return r[l]=a,r.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Vs=new ms,Eg=new fe(.5,.5),el=new W,gs=class{constructor(e=new gi,t=new gi,i=new gi,s=new gi,r=new gi,o=new gi){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=ei,i=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],f=r[5],u=r[6],d=r[7],p=r[8],_=r[9],x=r[10],g=r[11],v=r[12],w=r[13],S=r[14],C=r[15];if(s[0].setComponents(c-o,d-h,g-p,C-v).normalize(),s[1].setComponents(c+o,d+h,g+p,C+v).normalize(),s[2].setComponents(c+a,d+f,g+_,C+w).normalize(),s[3].setComponents(c-a,d-f,g-_,C-w).normalize(),i)s[4].setComponents(l,u,x,S).normalize(),s[5].setComponents(c-l,d-u,g-x,C-S).normalize();else if(s[4].setComponents(c-l,d-u,g-x,C-S).normalize(),t===ei)s[5].setComponents(c+l,d+u,g+x,C+S).normalize();else if(t===Lr)s[5].setComponents(l,u,x,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Vs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Vs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Vs)}intersectsSprite(e){Vs.center.set(0,0,0);let t=Eg.distanceTo(e.center);return Vs.radius=.7071067811865476+t,Vs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Vs)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(el.x=s.normal.x>0?e.max.x:e.min.x,el.y=s.normal.y>0?e.max.y:e.min.y,el.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(el)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Fd=new vt,bl=class n{constructor(){this.coordinateSystem=ei,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,i=this._frustums;for(let s=0;s<t.length;s++){let r=t[s];Fd.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),i[s]===void 0&&(i[s]=new gs),i[s].setFromProjectionMatrix(Fd,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,i=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new gs),t[s].copy(i[s]);return this._count=e._count,this}clone(){return new n().copy(this)}};var Do=class extends Dn{constructor(e=[],t=Js,i,s,r,o,a,l,c,h){super(e,t,i,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Ji=class extends Dn{constructor(e,t,i,s,r,o,a,l,c){super(e,t,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var ji=class extends Dn{constructor(e,t,i=vi,s,r,o,a=yn,l=yn,c,h=Ki,f=1){if(h!==Ki&&h!==es)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:e,height:t,depth:f};super(u,s,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Dr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Uo=class extends ji{constructor(e,t=vi,i=Js,s,r,o=yn,a=yn,l,c=Ki){let h={width:e,height:e,depth:1},f=[h,h,h,h,h,h];super(e,e,t,i,s,r,o,a,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Fo=class extends Dn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Vt=class n extends Zt{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],f=[],u=0,d=0;p("z","y","x",-1,-1,i,t,e,o,r,0),p("z","y","x",1,-1,i,t,-e,o,r,1),p("x","z","y",1,1,e,i,t,s,o,2),p("x","z","y",1,-1,e,i,-t,s,o,3),p("x","y","z",1,-1,e,t,i,s,r,4),p("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new st(c,3)),this.setAttribute("normal",new st(h,3)),this.setAttribute("uv",new st(f,2));function p(_,x,g,v,w,S,C,A,m,b,P){let M=S/m,E=C/b,R=S/2,y=C/2,T=A/2,I=m+1,N=b+1,z=0,B=0,F=new W;for(let U=0;U<N;U++){let V=U*E-y;for(let $=0;$<I;$++){let ee=$*M-R;F[_]=ee*v,F[x]=V*w,F[g]=T,c.push(F.x,F.y,F.z),F[_]=0,F[x]=0,F[g]=A>0?1:-1,h.push(F.x,F.y,F.z),f.push($/m),f.push(1-U/b),z+=1}}for(let U=0;U<b;U++)for(let V=0;V<m;V++){let $=u+V+I*U,ee=u+V+I*(U+1),H=u+(V+1)+I*(U+1),K=u+(V+1)+I*U;l.push($,ee,K),l.push(ee,H,K),B+=6}a.addGroup(d,B,P),d+=B,u+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var xs=class n extends Zt{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new W,h=new fe;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let f=0,u=3;f<=t;f++,u+=3){let d=i+f/t*s;c.x=e*Math.cos(d),c.y=e*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[u]/e+1)/2,h.y=(o[u+1]/e+1)/2,l.push(h.x,h.y)}for(let f=1;f<=t;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new st(o,3)),this.setAttribute("normal",new st(a,3)),this.setAttribute("uv",new st(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}},xi=class n extends Zt{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],f=[],u=[],d=[],p=0,_=[],x=i/2,g=0;v(),o===!1&&(e>0&&w(!0),t>0&&w(!1)),this.setIndex(h),this.setAttribute("position",new st(f,3)),this.setAttribute("normal",new st(u,3)),this.setAttribute("uv",new st(d,2));function v(){let S=new W,C=new W,A=0,m=(t-e)/i;for(let b=0;b<=r;b++){let P=[],M=b/r,E=M*(t-e)+e;for(let R=0;R<=s;R++){let y=R/s,T=y*l+a,I=Math.sin(T),N=Math.cos(T);C.x=E*I,C.y=-M*i+x,C.z=E*N,f.push(C.x,C.y,C.z),S.set(I,m,N).normalize(),u.push(S.x,S.y,S.z),d.push(y,1-M),P.push(p++)}_.push(P)}for(let b=0;b<s;b++)for(let P=0;P<r;P++){let M=_[P][b],E=_[P+1][b],R=_[P+1][b+1],y=_[P][b+1];(e>0||P!==0)&&(h.push(M,E,y),A+=3),(t>0||P!==r-1)&&(h.push(E,R,y),A+=3)}c.addGroup(g,A,0),g+=A}function w(S){let C=p,A=new fe,m=new W,b=0,P=S===!0?e:t,M=S===!0?1:-1;for(let R=1;R<=s;R++)f.push(0,x*M,0),u.push(0,M,0),d.push(.5,.5),p++;let E=p;for(let R=0;R<=s;R++){let T=R/s*l+a,I=Math.cos(T),N=Math.sin(T);m.x=P*N,m.y=x*M,m.z=P*I,f.push(m.x,m.y,m.z),u.push(0,M,0),A.x=I*.5+.5,A.y=N*.5*M+.5,d.push(A.x,A.y),p++}for(let R=0;R<s;R++){let y=C+R,T=E+R;S===!0?h.push(T,T+1,y):h.push(T+1,T,y),b+=3}c.addGroup(g,b,S===!0?1:2),g+=b}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Xs=class n extends xi{constructor(e=1,t=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Oo=class n extends Zt{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};let r=[],o=[];a(s),c(i),h(),this.setAttribute("position",new st(r,3)),this.setAttribute("normal",new st(r.slice(),3)),this.setAttribute("uv",new st(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(v){let w=new W,S=new W,C=new W;for(let A=0;A<t.length;A+=3)d(t[A+0],w),d(t[A+1],S),d(t[A+2],C),l(w,S,C,v)}function l(v,w,S,C){let A=C+1,m=[];for(let b=0;b<=A;b++){m[b]=[];let P=v.clone().lerp(S,b/A),M=w.clone().lerp(S,b/A),E=A-b;for(let R=0;R<=E;R++)R===0&&b===A?m[b][R]=P:m[b][R]=P.clone().lerp(M,R/E)}for(let b=0;b<A;b++)for(let P=0;P<2*(A-b)-1;P++){let M=Math.floor(P/2);P%2===0?(u(m[b][M+1]),u(m[b+1][M]),u(m[b][M])):(u(m[b][M+1]),u(m[b+1][M+1]),u(m[b+1][M]))}}function c(v){let w=new W;for(let S=0;S<r.length;S+=3)w.x=r[S+0],w.y=r[S+1],w.z=r[S+2],w.normalize().multiplyScalar(v),r[S+0]=w.x,r[S+1]=w.y,r[S+2]=w.z}function h(){let v=new W;for(let w=0;w<r.length;w+=3){v.x=r[w+0],v.y=r[w+1],v.z=r[w+2];let S=x(v)/2/Math.PI+.5,C=g(v)/Math.PI+.5;o.push(S,1-C)}p(),f()}function f(){for(let v=0;v<o.length;v+=6){let w=o[v+0],S=o[v+2],C=o[v+4],A=Math.max(w,S,C),m=Math.min(w,S,C);A>.9&&m<.1&&(w<.2&&(o[v+0]+=1),S<.2&&(o[v+2]+=1),C<.2&&(o[v+4]+=1))}}function u(v){r.push(v.x,v.y,v.z)}function d(v,w){let S=v*3;w.x=e[S+0],w.y=e[S+1],w.z=e[S+2]}function p(){let v=new W,w=new W,S=new W,C=new W,A=new fe,m=new fe,b=new fe;for(let P=0,M=0;P<r.length;P+=9,M+=6){v.set(r[P+0],r[P+1],r[P+2]),w.set(r[P+3],r[P+4],r[P+5]),S.set(r[P+6],r[P+7],r[P+8]),A.set(o[M+0],o[M+1]),m.set(o[M+2],o[M+3]),b.set(o[M+4],o[M+5]),C.copy(v).add(w).add(S).divideScalar(3);let E=x(C);_(A,M+0,v,E),_(m,M+2,w,E),_(b,M+4,S,E)}}function _(v,w,S,C){C<0&&v.x===1&&(o[w]=v.x-1),S.x===0&&S.z===0&&(o[w]=C/2/Math.PI+.5)}function x(v){return Math.atan2(v.z,-v.x)}function g(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.detail)}};var Yn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){qe("Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),s=0,r=i.length,o;t?o=t:o=e*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);let h=i[s],u=i[s+1]-h,d=(o-h)/u;return(s+d)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new fe:new W);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new W,s=[],r=[],o=[],a=new W,l=new vt;for(let d=0;d<=e;d++){let p=d/e;s[d]=this.getTangentAt(p,new W)}r[0]=new W,o[0]=new W;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),f=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),f<=c&&(c=f,i.set(0,1,0)),u<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(ut(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,p))}o[d].crossVectors(s[d],r[d])}if(t===!0){let d=Math.acos(ut(r[0].dot(r[e]),-1,1));d/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(d=-d);for(let p=1;p<=e;p++)r[p].applyMatrix4(l.makeRotationAxis(s[p],d*p)),o[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}},zr=class extends Yn{constructor(e=0,t=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new fe){let i=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),u=l-this.aX,d=c-this.aY;l=u*h-d*f+this.aX,c=u*f+d*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Sl=class extends zr{constructor(e,t,i,s,r,o){super(e,t,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Nu(){let n=0,e=0,t=0,i=0;function s(r,o,a,l){n=r,e=a,t=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,f){let u=(o-r)/c-(a-r)/(c+h)+(a-o)/h,d=(a-o)/h-(l-o)/(h+f)+(l-a)/f;u*=h,d*=h,s(o,a,u,d)},calc:function(r){let o=r*r,a=o*r;return n+e*r+t*o+i*a}}}var Od=new W,zd=new W,Yh=new Nu,$h=new Nu,Zh=new Nu,wl=class extends Yn{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new W){let i=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(zd.subVectors(s[0],s[1]).add(s[0]),c=zd);let f=s[a%r],u=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Od.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Od),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(f),d),_=Math.pow(f.distanceToSquared(u),d),x=Math.pow(u.distanceToSquared(h),d);_<1e-4&&(_=1),p<1e-4&&(p=_),x<1e-4&&(x=_),Yh.initNonuniformCatmullRom(c.x,f.x,u.x,h.x,p,_,x),$h.initNonuniformCatmullRom(c.y,f.y,u.y,h.y,p,_,x),Zh.initNonuniformCatmullRom(c.z,f.z,u.z,h.z,p,_,x)}else this.curveType==="catmullrom"&&(Yh.initCatmullRom(c.x,f.x,u.x,h.x,this.tension),$h.initCatmullRom(c.y,f.y,u.y,h.y,this.tension),Zh.initCatmullRom(c.z,f.z,u.z,h.z,this.tension));return i.set(Yh.calc(l),$h.calc(l),Zh.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new W().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function kd(n,e,t,i,s){let r=(i-e)*.5,o=(s-t)*.5,a=n*n,l=n*a;return(2*t-2*i+r+o)*l+(-3*t+3*i-2*r-o)*a+r*n+t}function Ag(n,e){let t=1-n;return t*t*e}function Rg(n,e){return 2*(1-n)*n*e}function Cg(n,e){return n*n*e}function vo(n,e,t,i){return Ag(n,e)+Rg(n,t)+Cg(n,i)}function Pg(n,e){let t=1-n;return t*t*t*e}function Ig(n,e){let t=1-n;return 3*t*t*n*e}function Lg(n,e){return 3*(1-n)*n*n*e}function Ng(n,e){return n*n*n*e}function Mo(n,e,t,i,s){return Pg(n,e)+Ig(n,t)+Lg(n,i)+Ng(n,s)}var zo=class extends Yn{constructor(e=new fe,t=new fe,i=new fe,s=new fe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new fe){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Mo(e,s.x,r.x,o.x,a.x),Mo(e,s.y,r.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Tl=class extends Yn{constructor(e=new W,t=new W,i=new W,s=new W){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new W){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Mo(e,s.x,r.x,o.x,a.x),Mo(e,s.y,r.y,o.y,a.y),Mo(e,s.z,r.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ko=class extends Yn{constructor(e=new fe,t=new fe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new fe){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new fe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},El=class extends Yn{constructor(e=new W,t=new W){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new W){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new W){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Bo=class extends Yn{constructor(e=new fe,t=new fe,i=new fe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new fe){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(vo(e,s.x,r.x,o.x),vo(e,s.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Al=class extends Yn{constructor(e=new W,t=new W,i=new W){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new W){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(vo(e,s.x,r.x,o.x),vo(e,s.y,r.y,o.y),vo(e,s.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ho=class extends Yn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new fe){let i=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],f=s[o>s.length-3?s.length-1:o+2];return i.set(kd(a,l.x,c.x,h.x,f.x),kd(a,l.y,c.y,h.y,f.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new fe().fromArray(s))}return this}},tu=Object.freeze({__proto__:null,ArcCurve:Sl,CatmullRomCurve3:wl,CubicBezierCurve:zo,CubicBezierCurve3:Tl,EllipseCurve:zr,LineCurve:ko,LineCurve3:El,QuadraticBezierCurve:Bo,QuadraticBezierCurve3:Al,SplineCurve:Ho}),Rl=class extends Yn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new tu[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let o=s[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this.cacheLengths=null,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(new tu[s.type]().fromJSON(s))}return this.cacheLengths=null,this}},Vo=class extends Rl{constructor(e){super(),this.type="Path",this.currentPoint=new fe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new ko(this.currentPoint.clone(),new fe(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){let r=new Bo(this.currentPoint.clone(),new fe(e,t),new fe(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,o){let a=new zo(this.currentPoint.clone(),new fe(e,t),new fe(i,s),new fe(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new Ho(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,i,s,r,o),this}absarc(e,t,i,s,r,o){return this.absellipse(e,t,i,i,s,r,o),this}ellipse(e,t,i,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,i,s,r,o,a,l),this}absellipse(e,t,i,s,r,o,a,l){let c=new zr(e,t,i,s,r,o,a,l);if(this.curves.length>0){let f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},kr=class extends Vo{constructor(e){super(e),this.uuid=ws(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(new Vo().fromJSON(s))}return this}};function Dg(n,e,t=2){let i=e&&e.length,s=i?e[0]*t:n.length,r=Fp(n,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(i&&(r=kg(n,e,r,t)),n.length>80*t){a=n[0],l=n[1];let h=a,f=l;for(let u=t;u<s;u+=t){let d=n[u],p=n[u+1];d<a&&(a=d),p<l&&(l=p),d>h&&(h=d),p>f&&(f=p)}c=Math.max(h-a,f-l),c=c!==0?32767/c:0}return Go(r,o,t,a,l,c,0),o}function Fp(n,e,t,i,s){let r;if(s===Kg(n,e,t,i)>0)for(let o=e;o<t;o+=i)r=Bd(o/i|0,n[o],n[o+1],r);else for(let o=t-i;o>=e;o-=i)r=Bd(o/i|0,n[o],n[o+1],r);return r&&Br(r,r.next)&&(Xo(r),r=r.next),r}function qs(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(Br(t,t.next)||Ht(t.prev,t,t.next)===0)){if(Xo(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function Go(n,e,t,i,s,r,o){if(!n)return;!o&&r&&Wg(n,i,s,r);let a=n;for(;n.prev!==n.next;){let l=n.prev,c=n.next;if(r?Fg(n,i,s,r):Ug(n)){e.push(l.i,n.i,c.i),Xo(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=Og(qs(n),e),Go(n,e,t,i,s,r,2)):o===2&&zg(n,e,t,i,s,r):Go(qs(n),e,t,i,s,r,1);break}}}function Ug(n){let e=n.prev,t=n,i=n.next;if(Ht(e,t,i)>=0)return!1;let s=e.x,r=t.x,o=i.x,a=e.y,l=t.y,c=i.y,h=Math.min(s,r,o),f=Math.min(a,l,c),u=Math.max(s,r,o),d=Math.max(a,l,c),p=i.next;for(;p!==e;){if(p.x>=h&&p.x<=u&&p.y>=f&&p.y<=d&&yo(s,a,r,l,o,c,p.x,p.y)&&Ht(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function Fg(n,e,t,i){let s=n.prev,r=n,o=n.next;if(Ht(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,f=r.y,u=o.y,d=Math.min(a,l,c),p=Math.min(h,f,u),_=Math.max(a,l,c),x=Math.max(h,f,u),g=nu(d,p,e,t,i),v=nu(_,x,e,t,i),w=n.prevZ,S=n.nextZ;for(;w&&w.z>=g&&S&&S.z<=v;){if(w.x>=d&&w.x<=_&&w.y>=p&&w.y<=x&&w!==s&&w!==o&&yo(a,h,l,f,c,u,w.x,w.y)&&Ht(w.prev,w,w.next)>=0||(w=w.prevZ,S.x>=d&&S.x<=_&&S.y>=p&&S.y<=x&&S!==s&&S!==o&&yo(a,h,l,f,c,u,S.x,S.y)&&Ht(S.prev,S,S.next)>=0))return!1;S=S.nextZ}for(;w&&w.z>=g;){if(w.x>=d&&w.x<=_&&w.y>=p&&w.y<=x&&w!==s&&w!==o&&yo(a,h,l,f,c,u,w.x,w.y)&&Ht(w.prev,w,w.next)>=0)return!1;w=w.prevZ}for(;S&&S.z<=v;){if(S.x>=d&&S.x<=_&&S.y>=p&&S.y<=x&&S!==s&&S!==o&&yo(a,h,l,f,c,u,S.x,S.y)&&Ht(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function Og(n,e){let t=n;do{let i=t.prev,s=t.next.next;!Br(i,s)&&zp(i,t,t.next,s)&&Wo(i,s)&&Wo(s,i)&&(e.push(i.i,t.i,s.i),Xo(t),Xo(t.next),t=n=s),t=t.next}while(t!==n);return qs(t)}function zg(n,e,t,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Yg(o,a)){let l=kp(o,a);o=qs(o,o.next),l=qs(l,l.next),Go(o,e,t,i,s,r,0),Go(l,e,t,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function kg(n,e,t,i){let s=[];for(let r=0,o=e.length;r<o;r++){let a=e[r]*i,l=r<o-1?e[r+1]*i:n.length,c=Fp(n,a,l,i,!1);c===c.next&&(c.steiner=!0),s.push(qg(c))}s.sort(Bg);for(let r=0;r<s.length;r++)t=Hg(s[r],t);return t}function Bg(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){let i=(n.next.y-n.y)/(n.next.x-n.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=i-s}return t}function Hg(n,e){let t=Vg(n,e);if(!t)return e;let i=kp(t,n);return qs(i,i.next),qs(t,t.next)}function Vg(n,e){let t=e,i=n.x,s=n.y,r=-1/0,o;if(Br(n,t))return t;do{if(Br(n,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let f=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=i&&f>r&&(r=f,o=t.x<t.next.x?t:t.next,f===i))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;t=o;do{if(i>=t.x&&t.x>=l&&i!==t.x&&Op(s<c?i:r,s,l,c,s<c?r:i,s,t.x,t.y)){let f=Math.abs(s-t.y)/(i-t.x);Wo(t,n)&&(f<h||f===h&&(t.x>o.x||t.x===o.x&&Gg(o,t)))&&(o=t,h=f)}t=t.next}while(t!==a);return o}function Gg(n,e){return Ht(n.prev,n,e.prev)<0&&Ht(e.next,n,n.next)<0}function Wg(n,e,t,i){let s=n;do s.z===0&&(s.z=nu(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,Xg(s)}function Xg(n){let e,t=1;do{let i=n,s;n=null;let r=null;for(e=0;i;){e++;let o=i,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||i.z<=o.z)?(s=i,i=i.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=o}r.nextZ=null,t*=2}while(e>1);return n}function nu(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function qg(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function Op(n,e,t,i,s,r,o,a){return(s-o)*(e-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(i-a)}function yo(n,e,t,i,s,r,o,a){return!(n===o&&e===a)&&Op(n,e,t,i,s,r,o,a)}function Yg(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!$g(n,e)&&(Wo(n,e)&&Wo(e,n)&&Zg(n,e)&&(Ht(n.prev,n,e.prev)||Ht(n,e.prev,e))||Br(n,e)&&Ht(n.prev,n,n.next)>0&&Ht(e.prev,e,e.next)>0)}function Ht(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function Br(n,e){return n.x===e.x&&n.y===e.y}function zp(n,e,t,i){let s=nl(Ht(n,e,t)),r=nl(Ht(n,e,i)),o=nl(Ht(t,i,n)),a=nl(Ht(t,i,e));return!!(s!==r&&o!==a||s===0&&tl(n,t,e)||r===0&&tl(n,i,e)||o===0&&tl(t,n,i)||a===0&&tl(t,e,i))}function tl(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function nl(n){return n>0?1:n<0?-1:0}function $g(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&zp(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function Wo(n,e){return Ht(n.prev,n,n.next)<0?Ht(n,e,n.next)>=0&&Ht(n,n.prev,e)>=0:Ht(n,e,n.prev)<0||Ht(n,n.next,e)<0}function Zg(n,e){let t=n,i=!1,s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function kp(n,e){let t=iu(n.i,n.x,n.y),i=iu(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function Bd(n,e,t,i){let s=iu(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function Xo(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function iu(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Kg(n,e,t,i){let s=0;for(let r=e,o=t-i;r<t;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}var su=class{static triangulate(e,t,i=2){return Dg(e,t,i)}},Gs=class n{static area(e){let t=e.length,i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return n.area(e)<0}static triangulateShape(e,t){let i=[],s=[],r=[];Hd(e),Vd(i,e);let o=e.length;t.forEach(Hd);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,Vd(i,t[l]);let a=su.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function Hd(n){let e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function Vd(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}var qo=class n extends Zt{constructor(e=new kr([new fe(.5,.5),new fe(-.5,.5),new fe(-.5,-.5),new fe(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new st(s,3)),this.setAttribute("uv",new st(r,2)),this.computeVertexNormals();function o(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,f=t.depth!==void 0?t.depth:1,u=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,p=t.bevelSize!==void 0?t.bevelSize:d-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,x=t.bevelSegments!==void 0?t.bevelSegments:3,g=t.extrudePath,v=t.UVGenerator!==void 0?t.UVGenerator:Jg,w,S=!1,C,A,m,b;if(g){w=g.getSpacedPoints(h),S=!0,u=!1;let oe=g.isCatmullRomCurve3?g.closed:!1;C=g.computeFrenetFrames(h,oe),A=new W,m=new W,b=new W}u||(x=0,d=0,p=0,_=0);let P=a.extractPoints(c),M=P.shape,E=P.holes;if(!Gs.isClockWise(M)){M=M.reverse();for(let oe=0,me=E.length;oe<me;oe++){let de=E[oe];Gs.isClockWise(de)&&(E[oe]=de.reverse())}}function y(oe){let de=10000000000000001e-36,Ee=oe[0];for(let _e=1;_e<=oe.length;_e++){let Xe=_e%oe.length,ke=oe[Xe],ht=ke.x-Ee.x,ft=ke.y-Ee.y,_t=ht*ht+ft*ft,Y=Math.max(Math.abs(ke.x),Math.abs(ke.y),Math.abs(Ee.x),Math.abs(Ee.y)),sn=de*Y*Y;if(_t<=sn){oe.splice(Xe,1),_e--;continue}Ee=ke}}y(M),E.forEach(y);let T=E.length,I=M;for(let oe=0;oe<T;oe++){let me=E[oe];M=M.concat(me)}function N(oe,me,de){return me||$e("ExtrudeGeometry: vec does not exist"),oe.clone().addScaledVector(me,de)}let z=M.length;function B(oe,me,de){let Ee,_e,Xe,ke=oe.x-me.x,ht=oe.y-me.y,ft=de.x-oe.x,_t=de.y-oe.y,Y=ke*ke+ht*ht,sn=ke*_t-ht*ft;if(Math.abs(sn)>Number.EPSILON){let lt=Math.sqrt(Y),Et=Math.sqrt(ft*ft+_t*_t),Se=me.x-ht/lt,$t=me.y+ke/lt,Ge=de.x-_t/Et,Je=de.y+ft/Et,k=((Ge-Se)*_t-(Je-$t)*ft)/(ke*_t-ht*ft);Ee=Se+ke*k-oe.x,_e=$t+ht*k-oe.y;let L=Ee*Ee+_e*_e;if(L<=2)return new fe(Ee,_e);Xe=Math.sqrt(L/2)}else{let lt=!1;ke>Number.EPSILON?ft>Number.EPSILON&&(lt=!0):ke<-Number.EPSILON?ft<-Number.EPSILON&&(lt=!0):Math.sign(ht)===Math.sign(_t)&&(lt=!0),lt?(Ee=-ht,_e=ke,Xe=Math.sqrt(Y)):(Ee=ke,_e=ht,Xe=Math.sqrt(Y/2))}return new fe(Ee/Xe,_e/Xe)}let F=[];for(let oe=0,me=I.length,de=me-1,Ee=oe+1;oe<me;oe++,de++,Ee++)de===me&&(de=0),Ee===me&&(Ee=0),F[oe]=B(I[oe],I[de],I[Ee]);let U=[],V,$=F.concat();for(let oe=0,me=T;oe<me;oe++){let de=E[oe];V=[];for(let Ee=0,_e=de.length,Xe=_e-1,ke=Ee+1;Ee<_e;Ee++,Xe++,ke++)Xe===_e&&(Xe=0),ke===_e&&(ke=0),V[Ee]=B(de[Ee],de[Xe],de[ke]);U.push(V),$=$.concat(V)}let ee;if(x===0)ee=Gs.triangulateShape(I,E);else{let oe=[],me=[];for(let de=0;de<x;de++){let Ee=de/x,_e=d*Math.cos(Ee*Math.PI/2),Xe=p*Math.sin(Ee*Math.PI/2)+_;for(let ke=0,ht=I.length;ke<ht;ke++){let ft=N(I[ke],F[ke],Xe);ce(ft.x,ft.y,-_e),Ee===0&&oe.push(ft)}for(let ke=0,ht=T;ke<ht;ke++){let ft=E[ke];V=U[ke];let _t=[];for(let Y=0,sn=ft.length;Y<sn;Y++){let lt=N(ft[Y],V[Y],Xe);ce(lt.x,lt.y,-_e),Ee===0&&_t.push(lt)}Ee===0&&me.push(_t)}}ee=Gs.triangulateShape(oe,me)}let H=ee.length,K=p+_;for(let oe=0;oe<z;oe++){let me=u?N(M[oe],$[oe],K):M[oe];S?(m.copy(C.normals[0]).multiplyScalar(me.x),A.copy(C.binormals[0]).multiplyScalar(me.y),b.copy(w[0]).add(m).add(A),ce(b.x,b.y,b.z)):ce(me.x,me.y,0)}for(let oe=1;oe<=h;oe++)for(let me=0;me<z;me++){let de=u?N(M[me],$[me],K):M[me];S?(m.copy(C.normals[oe]).multiplyScalar(de.x),A.copy(C.binormals[oe]).multiplyScalar(de.y),b.copy(w[oe]).add(m).add(A),ce(b.x,b.y,b.z)):ce(de.x,de.y,f/h*oe)}for(let oe=x-1;oe>=0;oe--){let me=oe/x,de=d*Math.cos(me*Math.PI/2),Ee=p*Math.sin(me*Math.PI/2)+_;for(let _e=0,Xe=I.length;_e<Xe;_e++){let ke=N(I[_e],F[_e],Ee);ce(ke.x,ke.y,f+de)}for(let _e=0,Xe=E.length;_e<Xe;_e++){let ke=E[_e];V=U[_e];for(let ht=0,ft=ke.length;ht<ft;ht++){let _t=N(ke[ht],V[ht],Ee);S?ce(_t.x,_t.y+w[h-1].y,w[h-1].x+de):ce(_t.x,_t.y,f+de)}}}Q(),he();function Q(){let oe=s.length/3;if(u){let me=0,de=z*me;for(let Ee=0;Ee<H;Ee++){let _e=ee[Ee];Le(_e[2]+de,_e[1]+de,_e[0]+de)}me=h+x*2,de=z*me;for(let Ee=0;Ee<H;Ee++){let _e=ee[Ee];Le(_e[0]+de,_e[1]+de,_e[2]+de)}}else{for(let me=0;me<H;me++){let de=ee[me];Le(de[2],de[1],de[0])}for(let me=0;me<H;me++){let de=ee[me];Le(de[0]+z*h,de[1]+z*h,de[2]+z*h)}}i.addGroup(oe,s.length/3-oe,0)}function he(){let oe=s.length/3,me=0;ie(I,me),me+=I.length;for(let de=0,Ee=E.length;de<Ee;de++){let _e=E[de];ie(_e,me),me+=_e.length}i.addGroup(oe,s.length/3-oe,1)}function ie(oe,me){let de=oe.length;for(;--de>=0;){let Ee=de,_e=de-1;_e<0&&(_e=oe.length-1);for(let Xe=0,ke=h+x*2;Xe<ke;Xe++){let ht=z*Xe,ft=z*(Xe+1),_t=me+Ee+ht,Y=me+_e+ht,sn=me+_e+ft,lt=me+Ee+ft;Ce(_t,Y,sn,lt)}}}function ce(oe,me,de){l.push(oe),l.push(me),l.push(de)}function Le(oe,me,de){Ne(oe),Ne(me),Ne(de);let Ee=s.length/3,_e=v.generateTopUV(i,s,Ee-3,Ee-2,Ee-1);Ye(_e[0]),Ye(_e[1]),Ye(_e[2])}function Ce(oe,me,de,Ee){Ne(oe),Ne(me),Ne(Ee),Ne(me),Ne(de),Ne(Ee);let _e=s.length/3,Xe=v.generateSideWallUV(i,s,_e-6,_e-3,_e-2,_e-1);Ye(Xe[0]),Ye(Xe[1]),Ye(Xe[3]),Ye(Xe[1]),Ye(Xe[2]),Ye(Xe[3])}function Ne(oe){s.push(l[oe*3+0]),s.push(l[oe*3+1]),s.push(l[oe*3+2])}function Ye(oe){r.push(oe.x),r.push(oe.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return jg(t,i,e)}static fromJSON(e,t){let i=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];i.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new tu[s.type]().fromJSON(s)),new n(i,e.options)}},Jg={generateTopUV:function(n,e,t,i,s){let r=e[t*3],o=e[t*3+1],a=e[i*3],l=e[i*3+1],c=e[s*3],h=e[s*3+1];return[new fe(r,o),new fe(a,l),new fe(c,h)]},generateSideWallUV:function(n,e,t,i,s,r){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[i*3],h=e[i*3+1],f=e[i*3+2],u=e[s*3],d=e[s*3+1],p=e[s*3+2],_=e[r*3],x=e[r*3+1],g=e[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new fe(o,1-l),new fe(c,1-f),new fe(u,1-p),new fe(_,1-g)]:[new fe(a,1-l),new fe(h,1-f),new fe(d,1-p),new fe(x,1-g)]}};function jg(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){let r=n[i];t.shapes.push(r.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var ys=class n extends Oo{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}};var Ys=class n extends Oo{constructor(e=1,t=0){let i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},ni=class n extends Zt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,f=e/a,u=t/l,d=[],p=[],_=[],x=[];for(let g=0;g<h;g++){let v=g*u-o;for(let w=0;w<c;w++){let S=w*f-r;p.push(S,-v,0),_.push(0,0,1),x.push(w/a),x.push(1-g/l)}}for(let g=0;g<l;g++)for(let v=0;v<a;v++){let w=v+c*g,S=v+c*(g+1),C=v+1+c*(g+1),A=v+1+c*g;d.push(w,S,A),d.push(S,C,A)}this.setIndex(d),this.setAttribute("position",new st(p,3)),this.setAttribute("normal",new st(_,3)),this.setAttribute("uv",new st(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}};var Ii=class n extends Zt{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,h=[],f=new W,u=new W,d=[],p=[],_=[],x=[];for(let g=0;g<=i;g++){let v=[],w=g/i,S=o+w*a,C=e*Math.cos(S),A=Math.sqrt(e*e-C*C),m=0;g===0&&o===0?m=.5/t:g===i&&l===Math.PI&&(m=-.5/t);for(let b=0;b<=t;b++){let P=b/t,M=s+P*r;f.x=-A*Math.cos(M),f.y=C,f.z=A*Math.sin(M),p.push(f.x,f.y,f.z),u.copy(f).normalize(),_.push(u.x,u.y,u.z),x.push(P+m,1-w),v.push(c++)}h.push(v)}for(let g=0;g<i;g++)for(let v=0;v<t;v++){let w=h[g][v+1],S=h[g][v],C=h[g+1][v],A=h[g+1][v+1];(g!==0||o>0)&&d.push(w,S,A),(g!==i-1||l<Math.PI)&&d.push(S,C,A)}this.setIndex(d),this.setAttribute("position",new st(p,3)),this.setAttribute("normal",new st(_,3)),this.setAttribute("uv",new st(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Yo=class n extends Zt{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},i=Math.floor(i),s=Math.floor(s);let l=[],c=[],h=[],f=[],u=new W,d=new W,p=new W;for(let _=0;_<=i;_++){let x=o+_/i*a;for(let g=0;g<=s;g++){let v=g/s*r;d.x=(e+t*Math.cos(x))*Math.cos(v),d.y=(e+t*Math.cos(x))*Math.sin(v),d.z=t*Math.sin(x),c.push(d.x,d.y,d.z),u.x=e*Math.cos(v),u.y=e*Math.sin(v),p.subVectors(d,u).normalize(),h.push(p.x,p.y,p.z),f.push(g/s),f.push(_/i)}}for(let _=1;_<=i;_++)for(let x=1;x<=s;x++){let g=(s+1)*_+x-1,v=(s+1)*(_-1)+x-1,w=(s+1)*(_-1)+x,S=(s+1)*_+x;l.push(g,v,S),l.push(v,w,S)}this.setIndex(l),this.setAttribute("position",new st(c,3)),this.setAttribute("normal",new st(h,3)),this.setAttribute("uv",new st(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};function Qs(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];if(Gd(s))s.isRenderTargetTexture?(qe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(Gd(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[t][i]=r}else e[t][i]=s.slice();else e[t][i]=s}}return e}function Cn(n){let e={};for(let t=0;t<n.length;t++){let i=Qs(n[t]);for(let s in i)e[s]=i[s]}return e}function Gd(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function Qg(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Du(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:mt.workingColorSpace}var Bp={clone:Qs,merge:Cn},ex=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,tx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ii=class extends Ci{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ex,this.fragmentShader=tx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Qs(e.uniforms),this.uniformsGroups=Qg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=t[s.value]||null;break;case"c":this.uniforms[i].value=new We().setHex(s.value);break;case"v2":this.uniforms[i].value=new fe().fromArray(s.value);break;case"v3":this.uniforms[i].value=new W().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Dt().fromArray(s.value);break;case"m3":this.uniforms[i].value=new je().fromArray(s.value);break;case"m4":this.uniforms[i].value=new vt().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Cl=class extends ii{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},yi=class extends Ci{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new We(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new We(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=aa,this.normalScale=new fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ti,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var Fn=class extends Ci{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new We(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new We(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=aa,this.normalScale=new fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ti,this.combine=Wl,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Pl=class extends Ci{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=_p,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Il=class extends Ci{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Ar(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function il(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var _s=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];e:{t:{let o;n:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break t}o=t.length;break n}if(!(e>=r)){let a=t[1];e<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break t}o=i,i=0;break n}break e}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Ll=class extends _s{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:jh,endingEnd:jh}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Qh:r=e,a=2*t-i;break;case eu:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Qh:o=e,l=2*i-t;break;case eu:o=1,l=i+s[1]-s[0];break;default:o=e-1,l=t}let c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,f=this._offsetNext,u=this._weightPrev,d=this._weightNext,p=(i-t)/(s-t),_=p*p,x=_*p,g=-u*x+2*u*_-u*p,v=(1+u)*x+(-1.5-2*u)*_+(-.5+u)*p+1,w=(-1-d)*x+(1.5+d)*_+.5*p,S=d*x-d*_;for(let C=0;C!==a;++C)r[C]=g*o[h+C]+v*o[c+C]+w*o[l+C]+S*o[f+C];return r}},Nl=class extends _s{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(i-t)/(s-t),f=1-h;for(let u=0;u!==a;++u)r[u]=o[c+u]*f+o[l+u]*h;return r}},Dl=class extends _s{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Ul=class extends _s{interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this.inTangents,f=this.outTangents;if(!h||!f){let p=(i-t)/(s-t),_=1-p;for(let x=0;x!==a;++x)r[x]=o[c+x]*_+o[l+x]*p;return r}let u=a*2,d=e-1;for(let p=0;p!==a;++p){let _=o[c+p],x=o[l+p],g=d*u+p*2,v=f[g],w=f[g+1],S=e*u+p*2,C=h[S],A=h[S+1],m=ix(i,t,v,C,s);r[p]=Hp(m,_,w,A,x)}return r}};function Hp(n,e,t,i,s){let r=1-n;return r*r*r*e+3*r*r*n*t+3*r*n*n*i+n*n*n*s}function nx(n,e,t,i,s){let r=1-n;return 3*r*r*(t-e)+6*r*n*(i-t)+3*n*n*(s-i)}function ix(n,e,t,i,s){let r=(n-e)/(s-e);for(let o=0;o<8;o++){let a=Hp(r,e,t,i,s)-n;if(Math.abs(a)<1e-10)break;let l=nx(r,e,t,i,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var $n=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ar(t,this.TimeBufferType),this.values=Ar(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Ar(e.times,Array),values:Ar(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s),il(e.settings)&&(i.settings={inTangents:Ar(e.settings.inTangents,Array),outTangents:Ar(e.settings.outTangents,Array)})}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Dl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Nl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ll(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Ul(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case bo:t=this.InterpolantFactoryMethodDiscrete;break;case gl:t=this.InterpolantFactoryMethodLinear;break;case ol:t=this.InterpolantFactoryMethodSmooth;break;case Jh:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return qe("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return bo;case this.InterpolantFactoryMethodLinear:return gl;case this.InterpolantFactoryMethodSmooth:return ol;case this.InterpolantFactoryMethodBezier:return Jh}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e;il(this.settings)&&(Wd(this.settings.inTangents,e),Wd(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e;il(this.settings)&&(Xd(this.settings.inTangents,e),Xd(this.settings.outTangents,e))}return this}trim(e,t){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&($e("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&($e("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){$e("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){$e("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&og(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){$e("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===ol,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(s)l=!0;else{let f=a*i,u=f-i,d=f+i;for(let p=0;p!==i;++p){let _=t[f+p];if(_!==t[u+p]||_!==t[d+p]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let f=a*i,u=o*i;for(let d=0;d!==i;++d)t[u+d]=t[f+d]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,il(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Wd(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]+=e}function Xd(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]*=e}$n.prototype.ValueTypeName="";$n.prototype.TimeBufferType=Float32Array;$n.prototype.ValueBufferType=Float32Array;$n.prototype.DefaultInterpolation=gl;var vs=class extends $n{constructor(e,t,i){super(e,t,i)}};vs.prototype.ValueTypeName="bool";vs.prototype.ValueBufferType=Array;vs.prototype.DefaultInterpolation=bo;vs.prototype.InterpolantFactoryMethodLinear=void 0;vs.prototype.InterpolantFactoryMethodSmooth=void 0;var Fl=class extends $n{constructor(e,t,i,s){super(e,t,i,s)}};Fl.prototype.ValueTypeName="color";var Ol=class extends $n{constructor(e,t,i,s){super(e,t,i,s)}};Ol.prototype.ValueTypeName="number";var zl=class extends _s{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(s-t),c=e*a;for(let h=c+a;c!==h;c+=4)Ai.slerpFlat(r,0,o,c-a,o,c,l);return r}},$o=class extends $n{constructor(e,t,i,s){super(e,t,i,s)}InterpolantFactoryMethodLinear(e){return new zl(this.times,this.values,this.getValueSize(),e)}};$o.prototype.ValueTypeName="quaternion";$o.prototype.InterpolantFactoryMethodSmooth=void 0;var Ms=class extends $n{constructor(e,t,i){super(e,t,i)}};Ms.prototype.ValueTypeName="string";Ms.prototype.ValueBufferType=Array;Ms.prototype.DefaultInterpolation=bo;Ms.prototype.InterpolantFactoryMethodLinear=void 0;Ms.prototype.InterpolantFactoryMethodSmooth=void 0;var kl=class extends $n{constructor(e,t,i,s){super(e,t,i,s)}};kl.prototype.ValueTypeName="vector";var Bl=class{constructor(e,t,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,f){return c.push(h,f),this},this.removeHandler=function(h){let f=c.indexOf(h);return f!==-1&&c.splice(f,2),this},this.getHandler=function(h){for(let f=0,u=c.length;f<u;f+=2){let d=c[f],p=c[f+1];if(d.global&&(d.lastIndex=0),d.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Vp=new Bl,Hl=class{constructor(e){this.manager=e!==void 0?e:Vp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};Hl.DEFAULT_MATERIAL_NAME="__DEFAULT";var $s=class extends Ut{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new We(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Li=class extends $s{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ut.DEFAULT_UP),this.updateMatrix(),this.groundColor=new We(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Kh=new vt,qd=new W,Yd=new W,Zo=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new fe(512,512),this.mapType=On,this.map=null,this.mapPass=null,this.matrix=new vt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new gs,this._frameExtents=new fe(1,1),this._viewportCount=1,this._viewports=[new Dt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;qd.setFromMatrixPosition(e.matrixWorld),t.position.copy(qd),Yd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Yd),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,s){Kh.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(Kh,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===Lr||e.reversedDepth?t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),t.multiply(Kh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},sl=new W,rl=new Ai,wi=new W,Ko=class extends Ut{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new vt,this.projectionMatrix=new vt,this.projectionMatrixInverse=new vt,this.coordinateSystem=ei,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(sl,rl,wi),wi.x===1&&wi.y===1&&wi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(sl,rl,wi.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(sl,rl,wi),wi.x===1&&wi.y===1&&wi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(sl,rl,wi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ds=new W,$d=new fe,Zd=new fe,hn=class extends Ko{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=xl*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Th*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return xl*2*Math.atan(Math.tan(Th*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){ds.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ds.x,ds.y).multiplyScalar(-e/ds.z),ds.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ds.x,ds.y).multiplyScalar(-e/ds.z)}getViewSize(e,t){return this.getViewBounds(e,$d,Zd),t.subVectors(Zd,$d)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Th*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var ru=class extends Zo{constructor(){super(new hn(90,1,.5,500)),this.isPointLightShadow=!0}},bs=class extends $s{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new ru}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Qi=class extends Ko{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},ou=class extends Zo{constructor(){super(new Qi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ni=class extends $s{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ut.DEFAULT_UP),this.updateMatrix(),this.target=new Ut,this.shadow=new ou}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},Jo=class extends $s{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var Rr=-90,Cr=1,Hr=class extends Ut{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new hn(Rr,Cr,e,t);s.layers=this.layers,this.add(s);let r=new hn(Rr,Cr,e,t);r.layers=this.layers,this.add(r);let o=new hn(Rr,Cr,e,t);o.layers=this.layers,this.add(o);let a=new hn(Rr,Cr,e,t);a.layers=this.layers,this.add(a);let l=new hn(Rr,Cr,e,t);l.layers=this.layers,this.add(l);let c=new hn(Rr,Cr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===ei)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Lr)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,f=e.getRenderTarget(),u=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let _=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let x=!1;e.isWebGLRenderer===!0?x=e.state.buffers.depth.getReversed():x=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,2,s),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,3,s),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,s),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.mipmapsAutoUpdate=_,e.setRenderTarget(i,5,s),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(f,u,d),e.xr.enabled=p,i.texture.needsPMREMUpdate=!0}},Vl=class extends hn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}};var Uu="\\[\\]\\.:\\/",sx=new RegExp("["+Uu+"]","g"),Fu="[^"+Uu+"]",rx="[^"+Uu.replace("\\.","")+"]",ox=/((?:WC+[\/:])*)/.source.replace("WC",Fu),ax=/(WCOD+)?/.source.replace("WCOD",rx),lx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Fu),cx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Fu),hx=new RegExp("^"+ox+ax+lx+cx+"$"),ux=["material","materials","bones","map"],au=class{constructor(e,t,i){let s=i||It.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},It=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(sx,"")}static parseTrackName(e){let t=hx.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);ux.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=i(a.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){qe("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){$e("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){$e("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){$e("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){$e("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){$e("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){$e("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){$e("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;$e("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){$e("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){$e("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};It.Composite=au;It.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};It.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};It.prototype.GetterByBindingType=[It.prototype._getValue_direct,It.prototype._getValue_array,It.prototype._getValue_arrayElement,It.prototype._getValue_toArray];It.prototype.SetterByBindingTypeAndVersioning=[[It.prototype._setValue_direct,It.prototype._setValue_direct_setNeedsUpdate,It.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[It.prototype._setValue_array,It.prototype._setValue_array_setNeedsUpdate,It.prototype._setValue_array_setMatrixWorldNeedsUpdate],[It.prototype._setValue_arrayElement,It.prototype._setValue_arrayElement_setNeedsUpdate,It.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[It.prototype._setValue_fromArray,It.prototype._setValue_fromArray_setNeedsUpdate,It.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Eb=new Float32Array(1);var lu=class{static{this.prototype.isMatrix2=!0}constructor(e,t,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=s,this}};function Ou(n,e,t,i){let s=fx(i);switch(t){case Eu:return n*e;case Jl:return n*e/s.components*s.byteLength;case jl:return n*e/s.components*s.byteLength;case Ss:return n*e*2/s.components*s.byteLength;case Ql:return n*e*2/s.components*s.byteLength;case Au:return n*e*3/s.components*s.byteLength;case Zn:return n*e*4/s.components*s.byteLength;case ec:return n*e*4/s.components*s.byteLength;case ta:case na:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ia:case sa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case nc:case sc:return Math.max(n,16)*Math.max(e,8)/4;case tc:case ic:return Math.max(n,8)*Math.max(e,8)/2;case rc:case oc:case lc:case cc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ac:case ra:case hc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case uc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case fc:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case dc:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case pc:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case mc:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case gc:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case xc:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case yc:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case _c:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case vc:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Mc:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case bc:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Sc:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case wc:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Tc:case Ec:case Ac:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Rc:case Cc:return Math.ceil(n/4)*Math.ceil(e/4)*8;case oa:case Pc:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function fx(n){switch(n){case On:case bu:return{byteLength:1,components:1};case Xr:case Su:case Mi:return{byteLength:2,components:1};case Zl:case Kl:return{byteLength:2,components:4};case vi:case $l:case ri:return{byteLength:4,components:1};case wu:case Tu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?qe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function h0(){let n=null,e=!1,t=null,i=null;function s(r,o){i=n.requestAnimationFrame(s),t(r,o)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function yx(n){let e=new WeakMap;function t(a,l){let c=a.array,h=a.usage,f=c.byteLength,u=n.createBuffer();n.bindBuffer(l,u),n.bufferData(l,c,h),a.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){let h=l.array,f=l.updateRanges;if(n.bindBuffer(c,a),f.length===0)n.bufferSubData(c,0,h);else{f.sort((d,p)=>d.start-p.start);let u=0;for(let d=1;d<f.length;d++){let p=f[u],_=f[d];_.start<=p.start+p.count+1?p.count=Math.max(p.count,_.start+_.count-p.start):(++u,f[u]=_)}f.length=u+1;for(let d=0,p=f.length;d<p;d++){let _=f[d];n.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var _x=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,vx=`#ifdef USE_ALPHAHASH
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
#endif`,Mx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,bx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Sx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,wx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Tx=`#ifdef USE_AOMAP
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
#endif`,Ex=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ax=`#ifdef USE_BATCHING
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
#endif`,Rx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Cx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Px=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ix=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Lx=`#ifdef USE_IRIDESCENCE
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
#endif`,Nx=`#ifdef USE_BUMPMAP
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
#endif`,Dx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ux=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Fx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ox=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,zx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,kx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Bx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Hx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Vx=`#define PI 3.141592653589793
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
} // validated`,Gx=`vec3 transformedNormal = objectNormal;
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
#endif`,Wx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Xx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,qx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Yx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,$x="gl_FragColor = linearToOutputTexel( gl_FragColor );",Zx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Kx=`#ifdef USE_ENVMAP
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
#endif`,Jx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,jx=`#ifdef USE_ENVMAP
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
#endif`,Qx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ey=`#ifdef USE_ENVMAP
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
#endif`,ty=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ny=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,iy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,sy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ry=`#ifdef USE_GRADIENTMAP
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
}`,oy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ay=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ly=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,cy=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,hy=`#ifdef USE_ENVMAP
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
#endif`,uy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,fy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,dy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,py=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,my=`PhysicalMaterial material;
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
#endif`,gy=`uniform sampler2D dfgLUT;
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
}`,xy=`
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
#endif`,yy=`#if defined( RE_IndirectDiffuse )
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
#endif`,_y=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,vy=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,My=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,by=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Sy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ty=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ey=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ay=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ry=`#if defined( USE_POINTS_UV )
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
#endif`,Cy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Py=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Iy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ly=`#if defined( USE_MORPHCOLORS )
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
#endif`,Ny=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Dy=`#ifdef USE_MORPHTARGETS
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
#endif`,Uy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Fy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Oy=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,zy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ky=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,By=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Hy=`#ifdef USE_NORMALMAP
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
#endif`,Vy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Gy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Wy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Xy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,qy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Yy=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,$y=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Zy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ky=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Jy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,jy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Qy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,e_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,t_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,n_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,i_=`float getShadowMask() {
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
}`,s_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,r_=`#ifdef USE_SKINNING
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
#endif`,o_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,a_=`#ifdef USE_SKINNING
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
#endif`,l_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,c_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,h_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,u_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,f_=`#ifdef USE_TRANSMISSION
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
#endif`,d_=`#ifdef USE_TRANSMISSION
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
#endif`,p_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,m_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,g_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,x_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,y_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,__=`uniform sampler2D t2D;
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
}`,v_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,M_=`uniform float backgroundBlurriness;
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
}`,b_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,S_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,w_=`#include <common>
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
}`,T_=`#if DEPTH_PACKING == 3200
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
}`,E_=`#define DISTANCE
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
}`,A_=`#define DISTANCE
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
}`,R_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,C_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,P_=`uniform float scale;
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
}`,I_=`uniform vec3 diffuse;
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
}`,L_=`#include <common>
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
}`,N_=`uniform vec3 diffuse;
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
}`,D_=`#define LAMBERT
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
}`,U_=`#define LAMBERT
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
}`,F_=`#define MATCAP
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
}`,O_=`#define MATCAP
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
}`,z_=`#define NORMAL
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
}`,k_=`#define NORMAL
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
}`,B_=`#define PHONG
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
}`,H_=`#define PHONG
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
}`,V_=`#define STANDARD
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
}`,G_=`#define STANDARD
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
}`,W_=`#define TOON
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
}`,X_=`#define TOON
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
}`,q_=`uniform float size;
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
}`,Y_=`uniform vec3 diffuse;
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
}`,$_=`#include <common>
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
}`,Z_=`uniform vec3 color;
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
}`,K_=`uniform float rotation;
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
}`,J_=`uniform vec3 diffuse;
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
}`,rt={alphahash_fragment:_x,alphahash_pars_fragment:vx,alphamap_fragment:Mx,alphamap_pars_fragment:bx,alphatest_fragment:Sx,alphatest_pars_fragment:wx,aomap_fragment:Tx,aomap_pars_fragment:Ex,batching_pars_vertex:Ax,batching_vertex:Rx,begin_vertex:Cx,beginnormal_vertex:Px,bsdfs:Ix,iridescence_fragment:Lx,bumpmap_pars_fragment:Nx,clipping_planes_fragment:Dx,clipping_planes_pars_fragment:Ux,clipping_planes_pars_vertex:Fx,clipping_planes_vertex:Ox,color_fragment:zx,color_pars_fragment:kx,color_pars_vertex:Bx,color_vertex:Hx,common:Vx,defaultnormal_vertex:Gx,displacementmap_pars_vertex:Wx,displacementmap_vertex:Xx,emissivemap_fragment:qx,emissivemap_pars_fragment:Yx,colorspace_fragment:$x,colorspace_pars_fragment:Zx,envmap_fragment:Kx,envmap_common_pars_fragment:Jx,envmap_pars_fragment:jx,envmap_pars_vertex:Qx,envmap_physical_pars_fragment:hy,envmap_vertex:ey,fog_vertex:ty,fog_pars_vertex:ny,fog_fragment:iy,fog_pars_fragment:sy,gradientmap_pars_fragment:ry,lightmap_pars_fragment:oy,lights_lambert_fragment:ay,lights_lambert_pars_fragment:ly,lights_pars_begin:cy,lights_toon_fragment:uy,lights_toon_pars_fragment:fy,lights_phong_fragment:dy,lights_phong_pars_fragment:py,lights_physical_fragment:my,lights_physical_pars_fragment:gy,lights_fragment_begin:xy,lights_fragment_maps:yy,lights_fragment_end:_y,lightprobes_pars_fragment:vy,logdepthbuf_fragment:My,logdepthbuf_pars_fragment:by,logdepthbuf_pars_vertex:Sy,logdepthbuf_vertex:wy,map_fragment:Ty,map_pars_fragment:Ey,map_particle_fragment:Ay,map_particle_pars_fragment:Ry,metalnessmap_fragment:Cy,metalnessmap_pars_fragment:Py,morphinstance_vertex:Iy,morphcolor_vertex:Ly,morphnormal_vertex:Ny,morphtarget_pars_vertex:Dy,morphtarget_vertex:Uy,normal_fragment_begin:Fy,normal_fragment_maps:Oy,normal_pars_fragment:zy,normal_pars_vertex:ky,normal_vertex:By,normalmap_pars_fragment:Hy,clearcoat_normal_fragment_begin:Vy,clearcoat_normal_fragment_maps:Gy,clearcoat_pars_fragment:Wy,iridescence_pars_fragment:Xy,opaque_fragment:qy,packing:Yy,premultiplied_alpha_fragment:$y,project_vertex:Zy,dithering_fragment:Ky,dithering_pars_fragment:Jy,roughnessmap_fragment:jy,roughnessmap_pars_fragment:Qy,shadowmap_pars_fragment:e_,shadowmap_pars_vertex:t_,shadowmap_vertex:n_,shadowmask_pars_fragment:i_,skinbase_vertex:s_,skinning_pars_vertex:r_,skinning_vertex:o_,skinnormal_vertex:a_,specularmap_fragment:l_,specularmap_pars_fragment:c_,tonemapping_fragment:h_,tonemapping_pars_fragment:u_,transmission_fragment:f_,transmission_pars_fragment:d_,uv_pars_fragment:p_,uv_pars_vertex:m_,uv_vertex:g_,worldpos_vertex:x_,background_vert:y_,background_frag:__,backgroundCube_vert:v_,backgroundCube_frag:M_,cube_vert:b_,cube_frag:S_,depth_vert:w_,depth_frag:T_,distance_vert:E_,distance_frag:A_,equirect_vert:R_,equirect_frag:C_,linedashed_vert:P_,linedashed_frag:I_,meshbasic_vert:L_,meshbasic_frag:N_,meshlambert_vert:D_,meshlambert_frag:U_,meshmatcap_vert:F_,meshmatcap_frag:O_,meshnormal_vert:z_,meshnormal_frag:k_,meshphong_vert:B_,meshphong_frag:H_,meshphysical_vert:V_,meshphysical_frag:G_,meshtoon_vert:W_,meshtoon_frag:X_,points_vert:q_,points_frag:Y_,shadow_vert:$_,shadow_frag:Z_,sprite_vert:K_,sprite_frag:J_},Re={common:{diffuse:{value:new We(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new je}},envmap:{envMap:{value:null},envMapRotation:{value:new je},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new je},normalScale:{value:new fe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new We(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new We(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0},uvTransform:{value:new je}},sprite:{diffuse:{value:new We(16777215)},opacity:{value:1},center:{value:new fe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}}},Oi={basic:{uniforms:Cn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.fog]),vertexShader:rt.meshbasic_vert,fragmentShader:rt.meshbasic_frag},lambert:{uniforms:Cn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new We(0)},envMapIntensity:{value:1}}]),vertexShader:rt.meshlambert_vert,fragmentShader:rt.meshlambert_frag},phong:{uniforms:Cn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new We(0)},specular:{value:new We(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:rt.meshphong_vert,fragmentShader:rt.meshphong_frag},standard:{uniforms:Cn([Re.common,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.roughnessmap,Re.metalnessmap,Re.fog,Re.lights,{emissive:{value:new We(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag},toon:{uniforms:Cn([Re.common,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.gradientmap,Re.fog,Re.lights,{emissive:{value:new We(0)}}]),vertexShader:rt.meshtoon_vert,fragmentShader:rt.meshtoon_frag},matcap:{uniforms:Cn([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,{matcap:{value:null}}]),vertexShader:rt.meshmatcap_vert,fragmentShader:rt.meshmatcap_frag},points:{uniforms:Cn([Re.points,Re.fog]),vertexShader:rt.points_vert,fragmentShader:rt.points_frag},dashed:{uniforms:Cn([Re.common,Re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:rt.linedashed_vert,fragmentShader:rt.linedashed_frag},depth:{uniforms:Cn([Re.common,Re.displacementmap]),vertexShader:rt.depth_vert,fragmentShader:rt.depth_frag},normal:{uniforms:Cn([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,{opacity:{value:1}}]),vertexShader:rt.meshnormal_vert,fragmentShader:rt.meshnormal_frag},sprite:{uniforms:Cn([Re.sprite,Re.fog]),vertexShader:rt.sprite_vert,fragmentShader:rt.sprite_frag},background:{uniforms:{uvTransform:{value:new je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:rt.background_vert,fragmentShader:rt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new je}},vertexShader:rt.backgroundCube_vert,fragmentShader:rt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:rt.cube_vert,fragmentShader:rt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:rt.equirect_vert,fragmentShader:rt.equirect_frag},distance:{uniforms:Cn([Re.common,Re.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:rt.distance_vert,fragmentShader:rt.distance_frag},shadow:{uniforms:Cn([Re.lights,Re.fog,{color:{value:new We(0)},opacity:{value:1}}]),vertexShader:rt.shadow_vert,fragmentShader:rt.shadow_frag}};Oi.physical={uniforms:Cn([Oi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new je},clearcoatNormalScale:{value:new fe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new je},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new je},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new je},sheen:{value:0},sheenColor:{value:new We(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new je},transmissionSamplerSize:{value:new fe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new je},attenuationDistance:{value:0},attenuationColor:{value:new We(0)},specularColor:{value:new We(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new je},anisotropyVector:{value:new fe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new je}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag};var Lc={r:0,b:0,g:0},j_=new vt,u0=new je;u0.set(-1,0,0,0,1,0,0,0,1);function Q_(n,e,t,i,s,r){let o=new We(0),a=s===!0?0:1,l,c,h=null,f=0,u=null;function d(v){let w=v.isScene===!0?v.background:null;if(w&&w.isTexture){let S=v.backgroundBlurriness>0;w=e.get(w,S)}return w}function p(v){let w=!1,S=d(v);S===null?x(o,a):S&&S.isColor&&(x(S,1),w=!0);let C=n.xr.getEnvironmentBlendMode();C==="additive"?t.buffers.color.setClear(0,0,0,1,r):C==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||w)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function _(v,w){let S=d(w);S&&S.isCubeTexture?(c===void 0&&(c=new He(new Vt(1,1,1),new ii({name:"BackgroundCubeMaterial",uniforms:Qs(Oi.backgroundCube.uniforms),vertexShader:Oi.backgroundCube.vertexShader,fragmentShader:Oi.backgroundCube.fragmentShader,side:un,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(C,A,m){this.matrixWorld.copyPosition(m.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=S,c.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(j_.makeRotationFromEuler(w.backgroundRotation)).transpose(),S.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(u0),c.material.toneMapped=mt.getTransfer(S.colorSpace)!==St,(h!==S||f!==S.version||u!==n.toneMapping)&&(c.material.needsUpdate=!0,h=S,f=S.version,u=n.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new He(new ni(2,2),new ii({name:"BackgroundMaterial",uniforms:Qs(Oi.background.uniforms),vertexShader:Oi.background.vertexShader,fragmentShader:Oi.background.fragmentShader,side:Di,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=mt.getTransfer(S.colorSpace)!==St,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(h!==S||f!==S.version||u!==n.toneMapping)&&(l.material.needsUpdate=!0,h=S,f=S.version,u=n.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function x(v,w){v.getRGB(Lc,Du(n)),t.buffers.color.setClear(Lc.r,Lc.g,Lc.b,w,r)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(v,w=1){o.set(v),a=w,x(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(v){a=v,x(o,a)},render:p,addToRenderList:_,dispose:g}}function ev(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=u(null),r=s,o=!1;function a(E,R,y,T,I){let N=!1,z=f(E,T,y,R);r!==z&&(r=z,c(r.object)),N=d(E,T,y,I),N&&p(E,T,y,I),I!==null&&e.update(I,n.ELEMENT_ARRAY_BUFFER),(N||o)&&(o=!1,S(E,R,y,T),I!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(I).buffer))}function l(){return n.createVertexArray()}function c(E){return n.bindVertexArray(E)}function h(E){return n.deleteVertexArray(E)}function f(E,R,y,T){let I=T.wireframe===!0,N=i[R.id];N===void 0&&(N={},i[R.id]=N);let z=E.isInstancedMesh===!0?E.id:0,B=N[z];B===void 0&&(B={},N[z]=B);let F=B[y.id];F===void 0&&(F={},B[y.id]=F);let U=F[I];return U===void 0&&(U=u(l()),F[I]=U),U}function u(E){let R=[],y=[],T=[];for(let I=0;I<t;I++)R[I]=0,y[I]=0,T[I]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:y,attributeDivisors:T,object:E,attributes:{},index:null}}function d(E,R,y,T){let I=r.attributes,N=R.attributes,z=0,B=y.getAttributes();for(let F in B)if(B[F].location>=0){let V=I[F],$=N[F];if($===void 0&&(F==="instanceMatrix"&&E.instanceMatrix&&($=E.instanceMatrix),F==="instanceColor"&&E.instanceColor&&($=E.instanceColor)),V===void 0||V.attribute!==$||$&&V.data!==$.data)return!0;z++}return r.attributesNum!==z||r.index!==T}function p(E,R,y,T){let I={},N=R.attributes,z=0,B=y.getAttributes();for(let F in B)if(B[F].location>=0){let V=N[F];V===void 0&&(F==="instanceMatrix"&&E.instanceMatrix&&(V=E.instanceMatrix),F==="instanceColor"&&E.instanceColor&&(V=E.instanceColor));let $={};$.attribute=V,V&&V.data&&($.data=V.data),I[F]=$,z++}r.attributes=I,r.attributesNum=z,r.index=T}function _(){let E=r.newAttributes;for(let R=0,y=E.length;R<y;R++)E[R]=0}function x(E){g(E,0)}function g(E,R){let y=r.newAttributes,T=r.enabledAttributes,I=r.attributeDivisors;y[E]=1,T[E]===0&&(n.enableVertexAttribArray(E),T[E]=1),I[E]!==R&&(n.vertexAttribDivisor(E,R),I[E]=R)}function v(){let E=r.newAttributes,R=r.enabledAttributes;for(let y=0,T=R.length;y<T;y++)R[y]!==E[y]&&(n.disableVertexAttribArray(y),R[y]=0)}function w(E,R,y,T,I,N,z){z===!0?n.vertexAttribIPointer(E,R,y,I,N):n.vertexAttribPointer(E,R,y,T,I,N)}function S(E,R,y,T){_();let I=T.attributes,N=y.getAttributes(),z=R.defaultAttributeValues;for(let B in N){let F=N[B];if(F.location>=0){let U=I[B];if(U===void 0&&(B==="instanceMatrix"&&E.instanceMatrix&&(U=E.instanceMatrix),B==="instanceColor"&&E.instanceColor&&(U=E.instanceColor)),U!==void 0){let V=U.normalized,$=U.itemSize,ee=e.get(U);if(ee===void 0)continue;let H=ee.buffer,K=ee.type,Q=ee.bytesPerElement,he=K===n.INT||K===n.UNSIGNED_INT||U.gpuType===$l;if(U.isInterleavedBufferAttribute){let ie=U.data,ce=ie.isInterleavedBuffer===!0?ie.stride:ie.itemSize,Le=U.offset;if(ie.isInstancedInterleavedBuffer||ie.isInstancedBufferAttribute){for(let Ce=0;Ce<F.locationSize;Ce++)g(F.location+Ce,ie.meshPerAttribute);E.isInstancedMesh!==!0&&T._maxInstanceCount===void 0&&(T._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let Ce=0;Ce<F.locationSize;Ce++)x(F.location+Ce);n.bindBuffer(n.ARRAY_BUFFER,H);for(let Ce=0;Ce<F.locationSize;Ce++)w(F.location+Ce,$/F.locationSize,K,V,ce*Q,(Le+$/F.locationSize*Ce)*Q,he)}else{if(U.isInstancedBufferAttribute){for(let ie=0;ie<F.locationSize;ie++)g(F.location+ie,U.meshPerAttribute);E.isInstancedMesh!==!0&&T._maxInstanceCount===void 0&&(T._maxInstanceCount=U.meshPerAttribute*U.count)}else for(let ie=0;ie<F.locationSize;ie++)x(F.location+ie);n.bindBuffer(n.ARRAY_BUFFER,H);for(let ie=0;ie<F.locationSize;ie++)w(F.location+ie,$/F.locationSize,K,V,$*Q,$/F.locationSize*ie*Q,he)}}else if(z!==void 0){let V=z[B];if(V!==void 0)switch(V.length){case 2:n.vertexAttrib2fv(F.location,V);break;case 3:n.vertexAttrib3fv(F.location,V);break;case 4:n.vertexAttrib4fv(F.location,V);break;default:n.vertexAttrib1fv(F.location,V)}}}}v()}function C(){P();for(let E in i){let R=i[E];for(let y in R){let T=R[y];for(let I in T){let N=T[I];for(let z in N)h(N[z].object),delete N[z];delete T[I]}}delete i[E]}}function A(E){if(i[E.id]===void 0)return;let R=i[E.id];for(let y in R){let T=R[y];for(let I in T){let N=T[I];for(let z in N)h(N[z].object),delete N[z];delete T[I]}}delete i[E.id]}function m(E){for(let R in i){let y=i[R];for(let T in y){let I=y[T];if(I[E.id]===void 0)continue;let N=I[E.id];for(let z in N)h(N[z].object),delete N[z];delete I[E.id]}}}function b(E){for(let R in i){let y=i[R],T=E.isInstancedMesh===!0?E.id:0,I=y[T];if(I!==void 0){for(let N in I){let z=I[N];for(let B in z)h(z[B].object),delete z[B];delete I[N]}delete y[T],Object.keys(y).length===0&&delete i[R]}}}function P(){M(),o=!0,r!==s&&(r=s,c(r.object))}function M(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:P,resetDefaultState:M,dispose:C,releaseStatesOfGeometry:A,releaseStatesOfObject:b,releaseStatesOfProgram:m,initAttributes:_,enableAttribute:x,disableUnusedAttributes:v}}function tv(n,e,t){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),t.update(c,i,1)}function o(l,c,h){h!==0&&(n.drawArraysInstanced(i,l,c,h),t.update(c,i,h))}function a(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let u=0;for(let d=0;d<h;d++)u+=c[d];t.update(u,i,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function nv(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let m=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(m.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(m){return!(m!==Zn&&i.convert(m)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(m){let b=m===Mi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(m!==On&&m!==ri&&!b&&i.convert(m)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(m){if(m==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";m="mediump"}return m==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(qe("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),u=t.logarithmicDepthBuffer===!0&&f===!1;t.reversedDepthBuffer===!0&&f===!1&&qe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&f===!0&&qe("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),x=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),g=n.getParameter(n.MAX_VERTEX_ATTRIBS),v=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),w=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),C=n.getParameter(n.MAX_SAMPLES),A=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:p,maxTextureSize:_,maxCubemapSize:x,maxAttributes:g,maxVertexUniforms:v,maxVaryings:w,maxFragmentUniforms:S,maxSamples:C,samples:A}}function iv(n){let e=this,t=null,i=0,s=!1,r=!1,o=new gi,a=new je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){let d=f.length!==0||u||i!==0||s;return s=u,i=f.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,u){t=h(f,u,0)},this.setState=function(f,u,d){let p=f.clippingPlanes,_=f.clipIntersection,x=f.clipShadows,g=n.get(f);if(!s||p===null||p.length===0||r&&!x)r?h(null):c();else{let v=r?0:i,w=v*4,S=g.clippingState||null;l.value=S,S=h(p,u,w,d);for(let C=0;C!==w;++C)S[C]=t[C];g.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(f,u,d,p){let _=f!==null?f.length:0,x=null;if(_!==0){if(x=l.value,p!==!0||x===null){let g=d+_*4,v=u.matrixWorldInverse;a.getNormalMatrix(v),(x===null||x.length<g)&&(x=new Float32Array(g));for(let w=0,S=d;w!==_;++w,S+=4)o.copy(f[w]).applyMatrix4(v,a),o.normal.toArray(x,S),x[S+3]=o.constant}l.value=x,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,x}}var ha=class extends Xn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Do(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Vt(5,5,5),r=new ii({name:"CubemapFromEquirect",uniforms:Qs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:un,blending:Zs});r.uniforms.tEquirect.value=t;let o=new He(s,r),a=t.minFilter;return t.minFilter===_i&&(t.minFilter=Mn),new Hr(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}},Gp=256,sv=3,rv=20,f0=256,d0=16,ov=3,av=new W,lv=new We,$r=class n{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Hr(1,10,null),this._boxMesh=new He(new Vt(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){let{size:o=256,position:a=av}=r,l=this._renderer;this._setSize(o);let c=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);let f=l.autoClear,u=l.autoClearColor,d=l.autoClearDepth,p=l.autoClearStencil,_=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,_===null&&(e.background=l.getClearColor(lv));let x=new Hr(i,s,h);return x.position.copy(a),x.update(l,e),l.autoClear=f,l.autoClearColor=u,l.autoClearDepth=d,l.autoClearStencil=p,e.background=_,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=qp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Xp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(Gp,Ip(e))}_fromTexture(e,t){e.mapping===Js||e.mapping===Wr?this._setSize(e.image.length===0?Gp:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let i=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(i),i}_allocateTarget(){let e=this._cubeSize,t=Wp(e,!1,!1),i=Math.log2(e)-sv;for(let s=0;s<=i;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==t||e&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=Wp(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,i){let s=this._boxMesh,r=this._cubeCamera;s.material=i,r.renderTarget=e,r.activeMipmapLevel=t;let o=e.width>>t;e.viewport.set(0,0,o,o),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===Js||e.mapping===Wr?(this._cubemapMaterial===null&&(this._cubemapMaterial=qp()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Xp()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=cv(),this._integrationMaterial=hv());let t=this._cubeSize,i=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/d0);for(let o=0;o<=i;o++){let a=n.lodToRoughness(o,i);if(o>i-ov)r.roughness.value=a,this._renderCube(e,o,this._integrationMaterial);else{let l=a>0?Math.log2(t)+.5*Math.log2(6/(f0*Math.pow(a,4)))+.5:0;s.roughness.value=a,s.lodBias.value=l,this._renderCube(e,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=uv());let i=this._blurMaterial,s=i.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,i),s.envMap.value=e.texture,this._renderCube(r,0,i)}};function Wp(n,e,t){return new ha(n,{minFilter:_i,generateMipmaps:e,type:Mi,colorSpace:So,depthBuffer:t})}function ua(n,e,t){return new ii({name:n,uniforms:e,vertexShader:rt.cube_vert,fragmentShader:t,side:un,blending:Zs,depthTest:!1,depthWrite:!1})}function cv(){return ua("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${f0}u

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
	`)}function hv(){return ua("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:d0}},`

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
	`)}function uv(){return ua("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${rv}
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
	`)}function Xp(){return ua("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function qp(){return ua("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function fv(n){let e=new WeakMap,t=new WeakMap,i=null;function s(u,d=!1){return u==null?null:d?o(u):r(u)}function r(u){if(u&&u.isTexture){let d=u.mapping;if(d===Xl||d===ql)if(e.has(u)){let p=e.get(u).texture;return a(p,u.mapping)}else{let p=u.image;if(p&&p.height>0){let _=new ha(p.height);return _.fromEquirectangularTexture(n,u),e.set(u,_),u.addEventListener("dispose",c),a(_.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture&&u.isPMREMTexture!==!0){let d=u.mapping,p=d===Xl||d===ql,_=d===Js||d===Wr;if(p||_){let x=t.get(u),g=x!==void 0?x.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==g)return i===null&&(i=new $r(n)),x=p?i.fromEquirectangular(u,x):i.fromCubemap(u,x),x.texture.pmremVersion=u.pmremVersion,t.set(u,x),x.texture;if(x!==void 0)return x.texture;{let v=u.image;return p&&v&&v.height>0||_&&v&&l(v)?(i===null&&(i=new $r(n)),x=p?i.fromEquirectangular(u):i.fromCubemap(u),x.texture.pmremVersion=u.pmremVersion,t.set(u,x),u.addEventListener("dispose",h),x.texture):null}}}return u}function a(u,d){return d===Xl?u.mapping=Js:d===ql&&(u.mapping=Wr),u}function l(u){let d=0,p=6;for(let _=0;_<p;_++)u[_]!==void 0&&d++;return d===p}function c(u){let d=u.target;d.removeEventListener("dispose",c);let p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function h(u){let d=u.target;d.removeEventListener("dispose",h);let p=t.get(d);p!==void 0&&(t.delete(d),p.dispose())}function f(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:f}}function dv(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&_o("WebGLRenderer: "+i+" extension not supported."),s}}}function pv(n,e,t,i){let s={},r=new WeakMap,o=new FinalizationRegistry(p=>delete s[p]);function a(p){l(p.target)}function l(p){p.index!==null&&e.remove(p.index);for(let x in p.attributes)e.remove(p.attributes[x]);p.removeEventListener("dispose",a),delete s[p.id],o.unregister(p);let _=r.get(p);_&&(e.remove(_),r.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function c(p,_){return s[_.id]!==void 0||(_.addEventListener("dispose",a),s[_.id]=new WeakRef(_),o.register(_,_.id,_),t.memory.geometries++),_}function h(p){let _=p.attributes;for(let x in _)e.update(_[x],n.ARRAY_BUFFER)}function f(p){let _=p.index,x=p.attributes.position,g=0;if(x===void 0)return;let v=_!==null?_.array.length:x.array.length/3-1,w=x.count>=65535?Io:Po,S=new w(Math.ceil(v/3)*6,1),C=S.array;if(_!==null){let m=_.array;g=_.version;for(let b=0,P=0;b<v;b+=3){let M=m[b+0],E=m[b+1],R=m[b+2];C[P++]=M,C[P++]=E,C[P++]=E,C[P++]=R,C[P++]=R,C[P++]=M}}else{g=x.version;for(let m=0,b=0;m<v;m+=3){let P=m+0,M=m+1,E=m+2;C[b++]=P,C[b++]=M,C[b++]=M,C[b++]=E,C[b++]=E,C[b++]=P}}S.version=g;let A=r.get(p);A&&e.remove(A),r.set(p,S)}function u(p){let _=r.get(p);if(_){let x=p.index;x!==null&&_.version<x.version&&f(p)}else f(p);return r.get(p)}function d(){for(let p in s){let _=s[p].deref();_!==void 0&&l(_)}}return{get:c,update:h,getWireframeAttribute:u,dispose:d}}function mv(n,e,t){let i;function s(f){i=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,u){n.drawElements(i,u,r,f*o),t.update(u,i,1)}function c(f,u,d){d!==0&&(n.drawElementsInstanced(i,u,r,f*o,d),t.update(u,i,d))}function h(f,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,r,f,0,d);let _=0;for(let x=0;x<d;x++)_+=u[x];t.update(_,i,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function gv(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:$e("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function xv(n,e,t){let i=new WeakMap,s=new Dt;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=h!==void 0?h.length:0,u=i.get(a);if(u===void 0||u.count!==f){let P=function(){m.dispose(),i.delete(a),a.removeEventListener("dispose",P)};u!==void 0&&u.texture.dispose();let d=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,x=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],v=a.morphAttributes.color||[],w=0;d===!0&&(w=1),p===!0&&(w=2),_===!0&&(w=3);let S=a.attributes.position.count*w,C=1;S>e.maxTextureSize&&(C=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);let A=new Float32Array(S*C*4*f),m=new Ao(A,S,C,f);m.type=ri,m.needsUpdate=!0;let b=w*4;for(let M=0;M<f;M++){let E=x[M],R=g[M],y=v[M],T=S*C*4*M;for(let I=0;I<E.count;I++){let N=I*b;d===!0&&(s.fromBufferAttribute(E,I),A[T+N+0]=s.x,A[T+N+1]=s.y,A[T+N+2]=s.z,A[T+N+3]=0),p===!0&&(s.fromBufferAttribute(R,I),A[T+N+4]=s.x,A[T+N+5]=s.y,A[T+N+6]=s.z,A[T+N+7]=0),_===!0&&(s.fromBufferAttribute(y,I),A[T+N+8]=s.x,A[T+N+9]=s.y,A[T+N+10]=s.z,A[T+N+11]=y.itemSize===4?s.w:1)}}u={count:f,texture:m,size:new fe(S,C)},i.set(a,u),a.addEventListener("dispose",P)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let d=0;for(let _=0;_<c.length;_++)d+=c[_];let p=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(n,"morphTargetBaseInfluence",p),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:r}}function yv(n,e,t,i,s){let r=new WeakMap;function o(c){let h=s.render.frame,f=c.geometry,u=e.get(c,f);if(r.get(u)!==h&&(e.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let d=c.skeleton;r.get(d)!==h&&(d.update(),r.set(d,h))}return u}function a(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:o,dispose:a}}var _v={[mu]:"LINEAR_TONE_MAPPING",[gu]:"REINHARD_TONE_MAPPING",[xu]:"CINEON_TONE_MAPPING",[Qo]:"ACES_FILMIC_TONE_MAPPING",[_u]:"AGX_TONE_MAPPING",[vu]:"NEUTRAL_TONE_MAPPING",[yu]:"CUSTOM_TONE_MAPPING"};function vv(n,e,t,i,s,r){let o=new Xn(e,t,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=null,h=new Zt;h.setAttribute("position",new st([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new st([0,2,0,0,2,0],2));let f=new Cl({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new He(h,f),d=new Qi(-1,1,1,-1,0,1),p=null,_=null,x=!1,g,v=null,w=[],S=!1;this.setSize=function(C,A){o.setSize(C,A),a!==null&&a.setSize(C,A),l!==null&&l.setSize(C,A);for(let m=0;m<w.length;m++){let b=w[m];b.setSize&&b.setSize(C,A)}},this.setEffects=function(C){w=C,S=w.length>0&&w[0].isRenderPass===!0;let A=o.width,m=o.height;w.length>0&&a===null&&(a=new Xn(A,m,{type:Mi,depthBuffer:!1,stencilBuffer:!1}),l=new Xn(A,m,{type:Mi,depthBuffer:!1,stencilBuffer:!1}));let b=s===!0&&w.some(P=>P.needsDepthTexture===!0);b!==(o.depthTexture!==null)&&(b===!0&&c===null&&(c=new ji(A,m),r===!0&&(c.format=es,c.type=js)),o.dispose(),o.depthTexture=b?c:null,o.resolveDepthBuffer=b,o.storeMultisampledDepthBuffer=b);for(let P=0;P<w.length;P++){let M=w[P];M.setSize&&M.setSize(A,m),b&&M.needsDepthTexture===!0&&M.setDepthTexture&&M.setDepthTexture(c)}},this.begin=function(C,A){if(x||C.toneMapping===Ui&&w.length===0)return!1;if(v=A,A!==null){let m=A.width,b=A.height;(o.width!==m||o.height!==b)&&this.setSize(m,b)}return S===!1&&C.setRenderTarget(o),g=C.toneMapping,C.toneMapping=Ui,!0},this.hasRenderPass=function(){return S},this.end=function(C,A){C.toneMapping=g,x=!0;let m=o,b=a;for(let P=0;P<w.length;P++){let M=w[P];M.enabled!==!1&&(M.render(C,b,m,A),M.needsSwap!==!1&&(m=b,b=b===a?l:a))}if(p!==C.outputColorSpace||_!==C.toneMapping){p=C.outputColorSpace,_=C.toneMapping,f.defines={},mt.getTransfer(p)===St&&(f.defines.SRGB_TRANSFER="");let P=_v[_];P&&(f.defines[P]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=m.texture,C.setRenderTarget(v),C.render(u,d),v=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),h.dispose(),f.dispose()}}var p0=new Dn,m0=new ji(1,1),g0=new Uo(1),x0=new Ao,y0=new vl,_0=new Do,Yp=[],$p=[],Zp=new Float32Array(16),Kp=new Float32Array(9),Jp=new Float32Array(4);function Zr(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=Yp[s];if(r===void 0&&(r=new Float32Array(s),Yp[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function fn(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function dn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Dc(n,e){let t=$p[e];t===void 0&&(t=new Int32Array(e),$p[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Mv(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function bv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(fn(t,e))return;n.uniform2fv(this.addr,e),dn(t,e)}}function Sv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(fn(t,e))return;n.uniform3fv(this.addr,e),dn(t,e)}}function wv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(fn(t,e))return;n.uniform4fv(this.addr,e),dn(t,e)}}function Tv(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(fn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),dn(t,e)}else{if(fn(t,i))return;Jp.set(i),n.uniformMatrix2fv(this.addr,!1,Jp),dn(t,i)}}function Ev(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(fn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),dn(t,e)}else{if(fn(t,i))return;Kp.set(i),n.uniformMatrix3fv(this.addr,!1,Kp),dn(t,i)}}function Av(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(fn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),dn(t,e)}else{if(fn(t,i))return;Zp.set(i),n.uniformMatrix4fv(this.addr,!1,Zp),dn(t,i)}}function Rv(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Cv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(fn(t,e))return;n.uniform2iv(this.addr,e),dn(t,e)}}function Pv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(fn(t,e))return;n.uniform3iv(this.addr,e),dn(t,e)}}function Iv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(fn(t,e))return;n.uniform4iv(this.addr,e),dn(t,e)}}function Lv(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Nv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(fn(t,e))return;n.uniform2uiv(this.addr,e),dn(t,e)}}function Dv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(fn(t,e))return;n.uniform3uiv(this.addr,e),dn(t,e)}}function Uv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(fn(t,e))return;n.uniform4uiv(this.addr,e),dn(t,e)}}function Uc(n){return n.version===0&&(n.compareFunction=Pu,n.needsUpdate=!0),n}function Fv(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?r=Uc(m0):r=p0,t.setTexture2D(e||r,s)}function Ov(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||y0,s)}function zv(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_CUBE_SHADOW?r=Uc(g0):r=_0,t.setTextureCube(e||r,s)}function kv(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||x0,s)}function Bv(n){switch(n){case 5126:return Mv;case 35664:return bv;case 35665:return Sv;case 35666:return wv;case 35674:return Tv;case 35675:return Ev;case 35676:return Av;case 5124:case 35670:return Rv;case 35667:case 35671:return Cv;case 35668:case 35672:return Pv;case 35669:case 35673:return Iv;case 5125:return Lv;case 36294:return Nv;case 36295:return Dv;case 36296:return Uv;case 35678:case 36198:case 36298:case 36306:case 35682:return Fv;case 35679:case 36299:case 36307:return Ov;case 35680:case 36300:case 36308:case 36293:return zv;case 36289:case 36303:case 36311:case 36292:return kv}}function Hv(n,e){n.uniform1fv(this.addr,e)}function Vv(n,e){let t=Zr(e,this.size,2);n.uniform2fv(this.addr,t)}function Gv(n,e){let t=Zr(e,this.size,3);n.uniform3fv(this.addr,t)}function Wv(n,e){let t=Zr(e,this.size,4);n.uniform4fv(this.addr,t)}function Xv(n,e){let t=Zr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function qv(n,e){let t=Zr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Yv(n,e){let t=Zr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function $v(n,e){n.uniform1iv(this.addr,e)}function Zv(n,e){n.uniform2iv(this.addr,e)}function Kv(n,e){n.uniform3iv(this.addr,e)}function Jv(n,e){n.uniform4iv(this.addr,e)}function jv(n,e){n.uniform1uiv(this.addr,e)}function Qv(n,e){n.uniform2uiv(this.addr,e)}function e1(n,e){n.uniform3uiv(this.addr,e)}function t1(n,e){n.uniform4uiv(this.addr,e)}function n1(n,e,t){let i=this.cache,s=e.length,r=Dc(t,s);fn(i,r)||(n.uniform1iv(this.addr,r),dn(i,r));let o;this.type===n.SAMPLER_2D_SHADOW?o=Uc(m0):o=p0;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function i1(n,e,t){let i=this.cache,s=e.length,r=Dc(t,s);fn(i,r)||(n.uniform1iv(this.addr,r),dn(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||y0,r[o])}function s1(n,e,t){let i=this.cache,s=e.length,r=Dc(t,s);fn(i,r)||(n.uniform1iv(this.addr,r),dn(i,r));let o;this.type===n.SAMPLER_CUBE_SHADOW?o=Uc(g0):o=_0;for(let a=0;a!==s;++a)t.setTextureCube(e[a]||o,r[a])}function r1(n,e,t){let i=this.cache,s=e.length,r=Dc(t,s);fn(i,r)||(n.uniform1iv(this.addr,r),dn(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||x0,r[o])}function o1(n){switch(n){case 5126:return Hv;case 35664:return Vv;case 35665:return Gv;case 35666:return Wv;case 35674:return Xv;case 35675:return qv;case 35676:return Yv;case 5124:case 35670:return $v;case 35667:case 35671:return Zv;case 35668:case 35672:return Kv;case 35669:case 35673:return Jv;case 5125:return jv;case 36294:return Qv;case 36295:return e1;case 36296:return t1;case 35678:case 36198:case 36298:case 36306:case 35682:return n1;case 35679:case 36299:case 36307:return i1;case 35680:case 36300:case 36308:case 36293:return s1;case 36289:case 36303:case 36311:case 36292:return r1}}var Bu=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Bv(t.type)}},Hu=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=o1(t.type)}},Vu=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],i)}}},zu=/(\w+)(\])?(\[|\.)?/g;function jp(n,e){n.seq.push(e),n.map[e.id]=e}function a1(n,e,t){let i=n.name,s=i.length;for(zu.lastIndex=0;;){let r=zu.exec(i),o=zu.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){jp(t,c===void 0?new Bu(a,n,e):new Hu(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new Vu(a),jp(t,f)),t=f}}}var Yr=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){let a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);a1(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&i.push(o)}return i}};function Qp(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var l1=37297,c1=0;function h1(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}var e0=new je;function u1(n){mt._getMatrix(e0,mt.workingColorSpace,n);let e=`mat3( ${e0.elements.map(t=>t.toFixed(4))} )`;switch(mt.getTransfer(n)){case wo:return[e,"LinearTransferOETF"];case St:return[e,"sRGBTransferOETF"];default:return qe("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function t0(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+h1(n.getShaderSource(e),a)}else return r}function f1(n,e){let t=u1(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var d1={[mu]:"Linear",[gu]:"Reinhard",[xu]:"Cineon",[Qo]:"ACESFilmic",[_u]:"AgX",[vu]:"Neutral",[yu]:"Custom"};function p1(n,e){let t=d1[e];return t===void 0?(qe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Nc=new W;function m1(){mt.getLuminanceCoefficients(Nc);let n=Nc.x.toFixed(4),e=Nc.y.toFixed(4),t=Nc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function g1(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ca).join(`
`)}function x1(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function y1(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function ca(n){return n!==""}function n0(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function i0(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var _1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Gu(n){return n.replace(_1,v1)}function v1(n,e){let t=rt[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return Gu(t)}var M1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function s0(n){return n.replace(M1,b1)}function b1(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function r0(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}var S1={[jo]:"SHADOWMAP_TYPE_PCF",[Vr]:"SHADOWMAP_TYPE_VSM"};function w1(n){return S1[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var T1={[Wr]:"ENVMAP_MODE_REFRACTION"};function E1(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":T1[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var A1={[Wl]:"ENVMAP_BLENDING_MULTIPLY",[gp]:"ENVMAP_BLENDING_MIX",[xp]:"ENVMAP_BLENDING_ADD"};function R1(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":A1[n.combine]||"ENVMAP_BLENDING_NONE"}function C1(n,e,t,i){let s=n.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=w1(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=E1(t),f=R1(t),u=g1(t),d=x1(r),p=s.createProgram(),_,x,g=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d].filter(ca).join(`
`),_.length>0&&(_+=`
`),x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d].filter(ca).join(`
`),x.length>0&&(x+=`
`)):(_=[r0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ca).join(`
`),x=[r0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ui?"#define TONE_MAPPING":"",t.toneMapping!==Ui?rt.tonemapping_pars_fragment:"",t.toneMapping!==Ui?p1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",rt.colorspace_pars_fragment,f1("linearToOutputTexel",t.outputColorSpace),m1(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ca).join(`
`)),o=Gu(o),o=n0(o,t),o=i0(o,t),a=Gu(a),a=n0(a,t),a=i0(a,t),o=s0(o),a=s0(a),t.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,_=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,x=["#define varying in",t.glslVersion===Lu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Lu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);let v=g+_+o,w=g+x+a,S=Qp(s,s.VERTEX_SHADER,v),C=Qp(s,s.FRAGMENT_SHADER,w);s.attachShader(p,S),s.attachShader(p,C),t.index0AttributeName!==void 0?s.bindAttribLocation(p,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(p,0,"position"),s.linkProgram(p);function A(M){if(n.debug.checkShaderErrors){let E=s.getProgramInfoLog(p)||"",R=s.getShaderInfoLog(S)||"",y=s.getShaderInfoLog(C)||"",T=E.trim(),I=R.trim(),N=y.trim(),z=!0,B=!0;if(s.getProgramParameter(p,s.LINK_STATUS)===!1)if(z=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,p,S,C);else{let F=t0(s,S,"vertex"),U=t0(s,C,"fragment");$e("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(p,s.VALIDATE_STATUS)+`

Material Name: `+M.name+`
Material Type: `+M.type+`

Program Info Log: `+T+`
`+F+`
`+U)}else T!==""?qe("WebGLProgram: Program Info Log:",T):(I===""||N==="")&&(B=!1);B&&(M.diagnostics={runnable:z,programLog:T,vertexShader:{log:I,prefix:_},fragmentShader:{log:N,prefix:x}})}s.deleteShader(S),s.deleteShader(C),m=new Yr(s,p),b=y1(s,p)}let m;this.getUniforms=function(){return m===void 0&&A(this),m};let b;this.getAttributes=function(){return b===void 0&&A(this),b};let P=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=s.getProgramParameter(p,l1)),P},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=c1++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=S,this.fragmentShader=C,this}var P1=0,Wu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Xu(e),t.set(e,i)),i}},Xu=class{constructor(e){this.id=P1++,this.code=e,this.usedTimes=0}};function I1(n){return n===Ss||n===ra||n===oa}function L1(n,e,t,i,s,r){let o=new Ro,a=new Wu,l=new Set,c=[],h=new Map,f=i.logarithmicDepthBuffer,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(m){return l.add(m),m===0?"uv":`uv${m}`}function p(m,b,P,M,E,R){let y=M.fog,T=E.geometry,I=m.isMeshStandardMaterial||m.isMeshLambertMaterial||m.isMeshPhongMaterial?M.environment:null,N=m.isMeshStandardMaterial||m.isMeshLambertMaterial&&!m.envMap||m.isMeshPhongMaterial&&!m.envMap,z=e.get(m.envMap||I,N),B=u[m.type],F=i.precision;m.precision!==null&&(F=i.getMaxPrecision(m.precision),F!==m.precision&&qe("WebGLProgram.getParameters:",m.precision,"not supported, using",F,"instead."));let U=T.morphAttributes.position||T.morphAttributes.normal||T.morphAttributes.color,V=U!==void 0?U.length:0,$=0;T.morphAttributes.position!==void 0&&($=1),T.morphAttributes.normal!==void 0&&($=2),T.morphAttributes.color!==void 0&&($=3);let ee,H,K,Q;if(B){let Ae=Oi[B];ee=Ae.vertexShader,H=Ae.fragmentShader}else{ee=m.vertexShader,H=m.fragmentShader;let Ae=a.getVertexShaderStage(m),wt=a.getFragmentShaderStage(m);a.update(m,Ae,wt),K=Ae.id,Q=wt.id}let he=n.getRenderTarget(),ie=n.state.buffers.depth.getReversed(),ce=E.isInstancedMesh===!0,Le=E.isBatchedMesh===!0,Ce=!!m.map,Ne=!!m.matcap,Ye=!!z,oe=Ye&&z.isPMREMTexture===!0,me=!!m.aoMap,de=!!m.lightMap,Ee=!!m.bumpMap&&m.wireframe===!1,_e=!!m.normalMap,Xe=!!m.displacementMap,ke=!!m.emissiveMap,ht=!!m.metalnessMap,ft=!!m.roughnessMap,_t=m.anisotropy>0,Y=m.clearcoat>0,sn=m.diffuseRoughness>0,lt=m.dispersion>0,Et=m.retroreflectivity>0,Se=m.iridescence>0,$t=m.sheen>0,Ge=m.transmission>0,Je=_t&&!!m.anisotropyMap,k=Y&&!!m.clearcoatMap,L=Y&&!!m.clearcoatNormalMap,J=Y&&!!m.clearcoatRoughnessMap,ue=sn&&!!m.diffuseRoughnessMap,le=Se&&!!m.iridescenceMap,xe=Se&&!!m.iridescenceThicknessMap,we=$t&&!!m.sheenColorMap,se=$t&&!!m.sheenRoughnessMap,re=!!m.specularMap,ve=!!m.specularColorMap,G=!!m.specularIntensityMap,ae=Ge&&!!m.transmissionMap,ne=Ge&&!!m.thicknessMap,Me=!!m.gradientMap,ge=!!m.alphaMap,ye=m.alphaTest>0,Be=!!m.alphaHash,it=!!m.extensions,pe=Ui;m.toneMapped&&(he===null||he.isXRRenderTarget===!0)&&(pe=n.toneMapping);let Ve=oe?z.isCompressedCubeTexture?z.image[0].mipmaps:z.mipmaps:null,tt={shaderID:B,shaderType:m.type,shaderName:m.name,vertexShader:ee,fragmentShader:H,defines:m.defines,customVertexShaderID:K,customFragmentShaderID:Q,isRawShaderMaterial:m.isRawShaderMaterial===!0,glslVersion:m.glslVersion,precision:F,batching:Le,batchingColor:Le&&E._colorsTexture!==null,instancing:ce,instancingColor:ce&&E.instanceColor!==null,instancingMorph:ce&&E.morphTexture!==null,outputColorSpace:he===null?n.outputColorSpace:he.isXRRenderTarget===!0?he.texture.colorSpace:mt.workingColorSpace,alphaToCoverage:!!m.alphaToCoverage,map:Ce,matcap:Ne,envMap:Ye,envMapMode:Ye&&z.mapping,envMapPMREM:oe,envMapMaxLod:oe?Ve.length-1:null,envMapSize:oe?Ve[0].width:null,aoMap:me,lightMap:de,bumpMap:Ee,normalMap:_e,displacementMap:Xe,emissiveMap:ke,normalMapObjectSpace:_e&&m.normalMapType===vp,normalMapTangentSpace:_e&&m.normalMapType===aa,packedNormalMap:_e&&m.normalMapType===aa&&I1(m.normalMap.format),metalnessMap:ht,roughnessMap:ft,anisotropy:_t,anisotropyMap:Je,clearcoat:Y,clearcoatMap:k,clearcoatNormalMap:L,clearcoatRoughnessMap:J,diffuseRoughness:sn,diffuseRoughnessMap:ue,dispersion:lt,retroreflection:Et,iridescence:Se,iridescenceMap:le,iridescenceThicknessMap:xe,sheen:$t,sheenColorMap:we,sheenRoughnessMap:se,specularMap:re,specularColorMap:ve,specularIntensityMap:G,transmission:Ge,transmissionMap:ae,thicknessMap:ne,gradientMap:Me,opaque:m.transparent===!1&&m.blending===Gr&&m.alphaToCoverage===!1,alphaMap:ge,alphaTest:ye,alphaHash:Be,combine:m.combine,mapUv:Ce&&d(m.map.channel),aoMapUv:me&&d(m.aoMap.channel),lightMapUv:de&&d(m.lightMap.channel),bumpMapUv:Ee&&d(m.bumpMap.channel),normalMapUv:_e&&d(m.normalMap.channel),displacementMapUv:Xe&&d(m.displacementMap.channel),emissiveMapUv:ke&&d(m.emissiveMap.channel),metalnessMapUv:ht&&d(m.metalnessMap.channel),roughnessMapUv:ft&&d(m.roughnessMap.channel),anisotropyMapUv:Je&&d(m.anisotropyMap.channel),clearcoatMapUv:k&&d(m.clearcoatMap.channel),clearcoatNormalMapUv:L&&d(m.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:J&&d(m.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ue&&d(m.diffuseRoughnessMap.channel),iridescenceMapUv:le&&d(m.iridescenceMap.channel),iridescenceThicknessMapUv:xe&&d(m.iridescenceThicknessMap.channel),sheenColorMapUv:we&&d(m.sheenColorMap.channel),sheenRoughnessMapUv:se&&d(m.sheenRoughnessMap.channel),specularMapUv:re&&d(m.specularMap.channel),specularColorMapUv:ve&&d(m.specularColorMap.channel),specularIntensityMapUv:G&&d(m.specularIntensityMap.channel),transmissionMapUv:ae&&d(m.transmissionMap.channel),thicknessMapUv:ne&&d(m.thicknessMap.channel),alphaMapUv:ge&&d(m.alphaMap.channel),vertexTangents:!!T.attributes.tangent&&(_e||_t),vertexNormals:!!T.attributes.normal,vertexColors:m.vertexColors,vertexAlphas:m.vertexColors===!0&&!!T.attributes.color&&T.attributes.color.itemSize===4,pointsUvs:E.isPoints===!0&&!!T.attributes.uv&&(Ce||ge),fog:!!y,useFog:m.fog===!0,fogExp2:!!y&&y.isFogExp2,flatShading:m.wireframe===!1&&(m.flatShading===!0||T.attributes.normal===void 0&&_e===!1&&(m.isMeshLambertMaterial||m.isMeshPhongMaterial||m.isMeshStandardMaterial||m.isMeshPhysicalMaterial)),sizeAttenuation:m.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:ie,skinning:E.isSkinnedMesh===!0,hasPositionAttribute:T.attributes.position!==void 0,morphTargets:T.morphAttributes.position!==void 0,morphNormals:T.morphAttributes.normal!==void 0,morphColors:T.morphAttributes.color!==void 0,morphTargetsCount:V,morphTextureStride:$,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:R.filter(Ae=>Ae.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:m.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:pe,decodeVideoTexture:Ce&&m.map.isVideoTexture===!0&&mt.getTransfer(m.map.colorSpace)===St,decodeVideoTextureEmissive:ke&&m.emissiveMap.isVideoTexture===!0&&mt.getTransfer(m.emissiveMap.colorSpace)===St,premultipliedAlpha:m.premultipliedAlpha,doubleSided:m.side===si,flipSided:m.side===un,useDepthPacking:m.depthPacking>=0,depthPacking:m.depthPacking||0,index0AttributeName:m.index0AttributeName,extensionClipCullDistance:it&&m.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(it&&m.extensions.multiDraw===!0||Le)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:m.customProgramCacheKey()};return tt.vertexUv1s=l.has(1),tt.vertexUv2s=l.has(2),tt.vertexUv3s=l.has(3),l.clear(),tt}function _(m){let b=[];if(m.shaderID?b.push(m.shaderID):(b.push(m.customVertexShaderID),b.push(m.customFragmentShaderID)),m.defines!==void 0)for(let P in m.defines)b.push(P),b.push(m.defines[P]);return m.isRawShaderMaterial===!1&&(x(b,m),g(b,m),b.push(n.outputColorSpace)),b.push(m.customProgramCacheKey),b.join()}function x(m,b){m.push(b.precision),m.push(b.outputColorSpace),m.push(b.envMapMode),m.push(b.envMapPMREM),m.push(b.envMapMaxLod),m.push(b.envMapSize),m.push(b.mapUv),m.push(b.alphaMapUv),m.push(b.lightMapUv),m.push(b.aoMapUv),m.push(b.bumpMapUv),m.push(b.normalMapUv),m.push(b.displacementMapUv),m.push(b.emissiveMapUv),m.push(b.metalnessMapUv),m.push(b.roughnessMapUv),m.push(b.anisotropyMapUv),m.push(b.clearcoatMapUv),m.push(b.clearcoatNormalMapUv),m.push(b.clearcoatRoughnessMapUv),m.push(b.diffuseRoughnessMapUv),m.push(b.iridescenceMapUv),m.push(b.iridescenceThicknessMapUv),m.push(b.sheenColorMapUv),m.push(b.sheenRoughnessMapUv),m.push(b.specularMapUv),m.push(b.specularColorMapUv),m.push(b.specularIntensityMapUv),m.push(b.transmissionMapUv),m.push(b.thicknessMapUv),m.push(b.combine),m.push(b.fogExp2),m.push(b.sizeAttenuation),m.push(b.morphTargetsCount),m.push(b.numSunLights),m.push(b.numDirLights),m.push(b.numPointLights),m.push(b.numSpotLights),m.push(b.numSpotLightMaps),m.push(b.numHemiLights),m.push(b.numRectAreaLights),m.push(b.numSunLightShadows),m.push(b.numDirLightShadows),m.push(b.numPointLightShadows),m.push(b.numSpotLightShadows),m.push(b.numSpotLightShadowsWithMaps),m.push(b.numLightProbes),m.push(b.numLightProbeGrids),m.push(b.shadowMapType),m.push(b.toneMapping),m.push(b.numClippingPlanes),m.push(b.numClipIntersection),m.push(b.depthPacking)}function g(m,b){o.disableAll(),b.instancing&&o.enable(0),b.instancingColor&&o.enable(1),b.instancingMorph&&o.enable(2),b.matcap&&o.enable(3),b.envMap&&o.enable(4),b.normalMapObjectSpace&&o.enable(5),b.normalMapTangentSpace&&o.enable(6),b.clearcoat&&o.enable(7),b.iridescence&&o.enable(8),b.alphaTest&&o.enable(9),b.vertexColors&&o.enable(10),b.vertexAlphas&&o.enable(11),b.vertexUv1s&&o.enable(12),b.vertexUv2s&&o.enable(13),b.vertexUv3s&&o.enable(14),b.vertexTangents&&o.enable(15),b.anisotropy&&o.enable(16),b.alphaHash&&o.enable(17),b.batching&&o.enable(18),b.dispersion&&o.enable(19),b.retroreflection&&o.enable(24),b.diffuseRoughness&&o.enable(25),b.batchingColor&&o.enable(20),b.gradientMap&&o.enable(21),b.packedNormalMap&&o.enable(22),b.vertexNormals&&o.enable(23),m.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reversedDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),b.numLightProbeGrids>0&&o.enable(22),b.hasPositionAttribute&&o.enable(23),m.push(o.mask)}function v(m){let b=u[m.type],P;if(b){let M=Oi[b];P=Bp.clone(M.uniforms)}else P=m.uniforms;return P}function w(m,b){let P=h.get(b);return P!==void 0?++P.usedTimes:(P=new C1(n,b,m,s),c.push(P),h.set(b,P)),P}function S(m){if(--m.usedTimes===0){let b=c.indexOf(m);c[b]=c[c.length-1],c.pop(),h.delete(m.cacheKey),m.destroy()}}function C(m){a.remove(m)}function A(){a.dispose()}return{getParameters:p,getProgramCacheKey:_,getUniforms:v,acquireProgram:w,releaseProgram:S,releaseShaderCache:C,programs:c,dispose:A}}function N1(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function D1(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function o0(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function a0(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(u){let d=0;return u.isInstancedMesh&&(d+=2),u.isSkinnedMesh&&(d+=1),d}function a(u,d,p,_,x,g){let v=n[e];return v===void 0?(v={id:u.id,object:u,geometry:d,material:p,materialVariant:o(u),groupOrder:_,renderOrder:u.renderOrder,z:x,group:g},n[e]=v):(v.id=u.id,v.object=u,v.geometry=d,v.material=p,v.materialVariant=o(u),v.groupOrder=_,v.renderOrder=u.renderOrder,v.z=x,v.group=g),e++,v}function l(u,d,p,_,x,g,v){v.reversedDepth===!0&&(x=-x);let w=a(u,d,p,_,x,g);p.transmission>0?i.push(w):p.transparent===!0?s.push(w):t.push(w)}function c(u,d,p,_,x,g){let v=a(u,d,p,_,x,g);p.transmission>0?i.unshift(v):p.transparent===!0?s.unshift(v):t.unshift(v)}function h(u,d){t.length>1&&t.sort(u||D1),i.length>1&&i.sort(d||o0),s.length>1&&s.sort(d||o0)}function f(){for(let u=e,d=n.length;u<d;u++){let p=n[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:f,sort:h}}function U1(){let n=new WeakMap;function e(i,s){let r=n.get(i),o;return r===void 0?(o=new a0,n.set(i,[o])):s>=r.length?(o=new a0,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function F1(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new W,color:new We};break;case"SpotLight":t={position:new W,direction:new W,color:new We,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new W,color:new We,distance:0,decay:0};break;case"HemisphereLight":t={direction:new W,skyColor:new We,groundColor:new We};break;case"RectAreaLight":t={color:new We,position:new W,halfWidth:new W,halfHeight:new W};break}return n[e.id]=t,t}}}function O1(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var z1=0;function k1(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function B1(n){let e=new F1,t=O1(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new W);let s=new W,r=new vt,o=new vt;function a(c){let h=0,f=0,u=0;for(let R=0;R<9;R++)i.probe[R].set(0,0,0);let d=0,p=0,_=0,x=0,g=0,v=0,w=0,S=0,C=0,A=0,m=0,b=0,P=0,M=0;c.sort(k1);for(let R=0,y=c.length;R<y;R++){let T=c[R],I=T.color,N=T.intensity,z=T.distance,B=null;if(T.shadow&&T.shadow.map&&(T.shadow.map.texture.format===Ss?B=T.shadow.map.texture:B=T.shadow.map.depthTexture||T.shadow.map.texture),T.isAmbientLight)h+=I.r*N,f+=I.g*N,u+=I.b*N;else if(T.isLightProbe){for(let F=0;F<9;F++)i.probe[F].addScaledVector(T.sh.coefficients[F],N);M++}else if(T.isSunLight){let F=e.get(T);if(F.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){let U=T.shadow,V=t.get(T);V.shadowIntensity=U.intensity,V.shadowBias=U.bias,V.shadowNormalBias=U.normalBias,V.shadowRadius=U.radius,V.shadowMapSize.copy(U.mapSize).multiply(U.getFrameExtents()),i.sunShadow[p]=V,i.sunShadowMap[p]=B;let $=U.getViewportCount();for(let ee=0;ee<$;ee++)i.sunShadowMatrix[_+ee]=U.getMatrix(ee),i.sunShadowCascade[_+ee]=U._cascadeData[ee];_+=$,p++}i.sun[d]=F,d++}else if(T.isDirectionalLight){let F=e.get(T);if(F.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){let U=T.shadow,V=t.get(T);V.shadowIntensity=U.intensity,V.shadowBias=U.bias,V.shadowNormalBias=U.normalBias,V.shadowRadius=U.radius,V.shadowMapSize=U.mapSize,i.directionalShadow[x]=V,i.directionalShadowMap[x]=B,i.directionalShadowMatrix[x]=T.shadow.matrix,C++}i.directional[x]=F,x++}else if(T.isSpotLight){let F=e.get(T);F.position.setFromMatrixPosition(T.matrixWorld),F.color.copy(I).multiplyScalar(N),F.distance=z,F.coneCos=Math.cos(T.angle),F.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),F.decay=T.decay,i.spot[v]=F;let U=T.shadow;if(T.map&&(i.spotLightMap[b]=T.map,b++,U.updateMatrices(T),T.castShadow&&P++),i.spotLightMatrix[v]=U.matrix,T.castShadow){let V=t.get(T);V.shadowIntensity=U.intensity,V.shadowBias=U.bias,V.shadowNormalBias=U.normalBias,V.shadowRadius=U.radius,V.shadowMapSize=U.mapSize,i.spotShadow[v]=V,i.spotShadowMap[v]=B,m++}v++}else if(T.isRectAreaLight){let F=e.get(T);F.color.copy(I).multiplyScalar(N),F.halfWidth.set(T.width*.5,0,0),F.halfHeight.set(0,T.height*.5,0),i.rectArea[w]=F,w++}else if(T.isPointLight){let F=e.get(T);if(F.color.copy(T.color).multiplyScalar(T.intensity),F.distance=T.distance,F.decay=T.decay,T.castShadow){let U=T.shadow,V=t.get(T);V.shadowIntensity=U.intensity,V.shadowBias=U.bias,V.shadowNormalBias=U.normalBias,V.shadowRadius=U.radius,V.shadowMapSize=U.mapSize,V.shadowCameraNear=U.camera.near,V.shadowCameraFar=U.camera.far,i.pointShadow[g]=V,i.pointShadowMap[g]=B,i.pointShadowMatrix[g]=T.shadow.matrix,A++}i.point[g]=F,g++}else if(T.isHemisphereLight){let F=e.get(T);F.skyColor.copy(T.color).multiplyScalar(N),F.groundColor.copy(T.groundColor).multiplyScalar(N),i.hemi[S]=F,S++}}w>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Re.LTC_FLOAT_1,i.rectAreaLTC2=Re.LTC_FLOAT_2):(i.rectAreaLTC1=Re.LTC_HALF_1,i.rectAreaLTC2=Re.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=f,i.ambient[2]=u;let E=i.hash;(E.sunLength!==d||E.directionalLength!==x||E.pointLength!==g||E.spotLength!==v||E.rectAreaLength!==w||E.hemiLength!==S||E.numSunShadows!==p||E.numDirectionalShadows!==C||E.numPointShadows!==A||E.numSpotShadows!==m||E.numSpotMaps!==b||E.numLightProbes!==M)&&(i.sun.length=d,i.directional.length=x,i.spot.length=v,i.rectArea.length=w,i.point.length=g,i.hemi.length=S,i.sunShadow.length=p,i.sunShadowMap.length=p,i.sunShadowMatrix.length=_,i.sunShadowCascade.length=_,i.directionalShadow.length=C,i.directionalShadowMap.length=C,i.directionalShadowMatrix.length=C,i.pointShadow.length=A,i.pointShadowMap.length=A,i.pointShadowMatrix.length=A,i.spotShadow.length=m,i.spotShadowMap.length=m,i.spotLightMatrix.length=m+b-P,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=P,i.numLightProbes=M,E.sunLength=d,E.directionalLength=x,E.pointLength=g,E.spotLength=v,E.rectAreaLength=w,E.hemiLength=S,E.numSunShadows=p,E.numDirectionalShadows=C,E.numPointShadows=A,E.numSpotShadows=m,E.numSpotMaps=b,E.numLightProbes=M,i.version=z1++)}function l(c,h){let f=0,u=0,d=0,p=0,_=0,x=0,g=h.matrixWorldInverse;for(let v=0,w=c.length;v<w;v++){let S=c[v];if(S.isSunLight){let C=i.sun[f];C.direction.setFromMatrixPosition(S.matrixWorld),C.direction.transformDirection(g),f++}else if(S.isDirectionalLight){let C=i.directional[u];C.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(g),u++}else if(S.isSpotLight){let C=i.spot[p];C.position.setFromMatrixPosition(S.matrixWorld),C.position.applyMatrix4(g),C.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(g),p++}else if(S.isRectAreaLight){let C=i.rectArea[_];C.position.setFromMatrixPosition(S.matrixWorld),C.position.applyMatrix4(g),o.identity(),r.copy(S.matrixWorld),r.premultiply(g),o.extractRotation(r),C.halfWidth.set(S.width*.5,0,0),C.halfHeight.set(0,S.height*.5,0),C.halfWidth.applyMatrix4(o),C.halfHeight.applyMatrix4(o),_++}else if(S.isPointLight){let C=i.point[d];C.position.setFromMatrixPosition(S.matrixWorld),C.position.applyMatrix4(g),d++}else if(S.isHemisphereLight){let C=i.hemi[x];C.direction.setFromMatrixPosition(S.matrixWorld),C.direction.transformDirection(g),x++}}}return{setup:a,setupView:l,state:i}}function l0(n){let e=new B1(n),t=[],i=[],s=[];function r(f){h.camera=f,t.length=0,i.length=0,s.length=0}function o(f){f.isLightProbeGrid?s.push(f):t.push(f)}function a(f){i.push(f)}function l(){e.setup(t),s.sort((f,u)=>f.priority-u.priority||f.id-u.id)}function c(f){e.setupView(t,f)}let h={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function H1(n){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new l0(n),e.set(s,[a])):r>=o.length?(a=new l0(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}var V1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,G1=`uniform sampler2D shadow_pass;
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
}`,W1=[new W(1,0,0),new W(-1,0,0),new W(0,1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1)],X1=[new W(0,-1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1),new W(0,-1,0),new W(0,-1,0)],c0=new vt,la=new W,ku=new W;function q1(n,e,t){let i=new gs,s=new fe,r=new fe,o=new Dt,a=new Pl,l=new Il,c={},h=t.maxTextureSize,f={[Di]:un,[un]:Di,[si]:si},u=new ii({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new fe},radius:{value:4}},vertexShader:V1,fragmentShader:G1}),d=u.clone();d.defines.HORIZONTAL_PASS=1;let p=new Zt;p.setAttribute("position",new Qt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new He(p,u),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=jo;let g=this.type;this.render=function(A,m,b){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||A.length===0)return;this.type===Gl&&(qe("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=jo);let P=n.getRenderTarget(),M=n.getActiveCubeFace(),E=n.getActiveMipmapLevel(),R=n.state;R.setBlending(Zs),R.buffers.depth.getReversed()===!0?R.buffers.color.setClear(0,0,0,0):R.buffers.color.setClear(1,1,1,1),R.buffers.depth.setTest(!0),R.setScissorTest(!1);let y=g!==this.type;y&&m.traverse(function(T){T.material&&(Array.isArray(T.material)?T.material.forEach(I=>I.needsUpdate=!0):T.material.needsUpdate=!0)});for(let T=0,I=A.length;T<I;T++){let N=A[T],z=N.shadow;if(z===void 0){qe("WebGLShadowMap:",N,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;s.copy(z.mapSize);let B=z.getFrameExtents();s.multiply(B),r.copy(z.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/B.x),s.x=r.x*B.x,z.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/B.y),s.y=r.y*B.y,z.mapSize.y=r.y));let F=n.state.buffers.depth.getReversed();if(z.camera._reversedDepth=F,z.map===null||y===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===Vr){if(N.isPointLight){qe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new Xn(s.x,s.y,{format:Ss,type:Mi,minFilter:Mn,magFilter:Mn,generateMipmaps:!1}),z.map.texture.name=N.name+".shadowMap",z.map.depthTexture=new ji(s.x,s.y,ri),z.map.depthTexture.name=N.name+".shadowMapDepth",z.map.depthTexture.format=Ki,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=yn,z.map.depthTexture.magFilter=yn}else N.isPointLight?(z.map=new ha(s.x),z.map.depthTexture=new Uo(s.x,vi)):(z.map=new Xn(s.x,s.y),z.map.depthTexture=new ji(s.x,s.y,vi)),z.map.depthTexture.name=N.name+".shadowMap",z.map.depthTexture.format=Ki,this.type===jo?(z.map.depthTexture.compareFunction=F?Cu:Ru,z.map.depthTexture.minFilter=Mn,z.map.depthTexture.magFilter=Mn):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=yn,z.map.depthTexture.magFilter=yn);z.camera.updateProjectionMatrix()}z.map.isWebGLCubeRenderTarget!==!0&&(z.map.width!==s.x||z.map.height!==s.y)&&z.map.setSize(s.x,s.y);let U=z.map.isWebGLCubeRenderTarget?6:z.getViewportCount();N.isPointLight!==!0&&z.updateMatrices(N,b);let V=(z.camera.layers.mask&4294967294)!==0?z.camera.layers:b.layers;for(let $=0;$<U;$++){let ee=z.getCamera($);if(N.isPointLight){let H=z.camera,K=z.matrix,Q=N.distance||H.far;Q!==H.far&&(H.far=Q,H.updateProjectionMatrix()),la.setFromMatrixPosition(N.matrixWorld),H.position.copy(la),ku.copy(H.position),ku.add(W1[$]),H.up.copy(X1[$]),H.lookAt(ku),H.updateMatrixWorld(),K.makeTranslation(-la.x,-la.y,-la.z),c0.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),z._frustum.setFromProjectionMatrix(c0,H.coordinateSystem,H.reversedDepth)}if(z.map.isWebGLCubeRenderTarget)n.setRenderTarget(z.map,$),n.clear();else{$===0&&(n.setRenderTarget(z.map),n.clear());let H=z.getViewport($);o.set(r.x*H.x,r.y*H.y,r.x*H.z,r.y*H.w),R.viewport(o)}i=z.getFrustum($),S(m,b,ee,N,V,this.type)}z.isPointLightShadow!==!0&&this.type===Vr&&v(z,b),z.needsUpdate=!1}g=this.type,x.needsUpdate=!1,n.setRenderTarget(P,M,E)};function v(A,m){let b=e.update(_);u.defines.VSM_SAMPLES!==A.blurSamples&&(u.defines.VSM_SAMPLES=A.blurSamples,d.defines.VSM_SAMPLES=A.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),A.mapPass===null?A.mapPass=new Xn(s.x,s.y,{format:Ss,type:Mi}):(A.mapPass.width!==A.map.width||A.mapPass.height!==A.map.height)&&A.mapPass.setSize(A.map.width,A.map.height),u.uniforms.shadow_pass.value=A.map.depthTexture,u.uniforms.resolution.value.set(A.map.width,A.map.height),u.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(m,null,b,u,_,null),d.uniforms.shadow_pass.value=A.mapPass.texture,d.uniforms.resolution.value.set(A.map.width,A.map.height),d.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(m,null,b,d,_,null)}function w(A,m,b,P){let M=null,E=b.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(E!==void 0)M=E;else if(M=b.isPointLight===!0?l:a,n.localClippingEnabled&&m.clipShadows===!0&&Array.isArray(m.clippingPlanes)&&m.clippingPlanes.length!==0||m.displacementMap&&m.displacementScale!==0||m.alphaMap&&m.alphaTest>0||m.map&&m.alphaTest>0||m.alphaToCoverage===!0){let R=M.uuid,y=m.uuid,T=c[R];T===void 0&&(T={},c[R]=T);let I=T[y];I===void 0&&(I=M.clone(),T[y]=I,m.addEventListener("dispose",C)),M=I}if(M.visible=m.visible,M.wireframe=m.wireframe,P===Vr?M.side=m.shadowSide!==null?m.shadowSide:m.side:M.side=m.shadowSide!==null?m.shadowSide:f[m.side],M.alphaMap=m.alphaMap,M.alphaTest=m.alphaToCoverage===!0?.5:m.alphaTest,M.map=m.map,M.clipShadows=m.clipShadows,M.clippingPlanes=m.clippingPlanes,M.clipIntersection=m.clipIntersection,M.displacementMap=m.displacementMap,M.displacementScale=m.displacementScale,M.displacementBias=m.displacementBias,M.wireframeLinewidth=m.wireframeLinewidth,M.linewidth=m.linewidth,b.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let R=n.properties.get(M);R.light=b}return M}function S(A,m,b,P,M,E){if(A.visible===!1)return;if(A.layers.test(M)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&E===Vr)&&(!A.frustumCulled||A.intersectsFrustum(i))){A.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,A.matrixWorld);let T=e.update(A),I=A.material;if(Array.isArray(I)){let N=T.groups;for(let z=0,B=N.length;z<B;z++){let F=N[z],U=I[F.materialIndex];if(U&&U.visible){let V=w(A,U,P,E);A.onBeforeShadow(n,A,m,b,T,V,F),n.renderBufferDirect(b,null,T,V,A,F),A.onAfterShadow(n,A,m,b,T,V,F)}}}else if(I.visible){let N=w(A,I,P,E);A.onBeforeShadow(n,A,m,b,T,N,null),n.renderBufferDirect(b,null,T,N,A,null),A.onAfterShadow(n,A,m,b,T,N,null)}}let y=A.children;for(let T=0,I=y.length;T<I;T++)S(y[T],m,b,P,M,E)}function C(A){A.target.removeEventListener("dispose",C);for(let b in c){let P=c[b],M=A.target.uuid;M in P&&(P[M].dispose(),delete P[M])}}}function Y1(n,e){function t(){let G=!1,ae=new Dt,ne=null,Me=new Dt(0,0,0,0);return{setMask:function(ge){ne!==ge&&!G&&(n.colorMask(ge,ge,ge,ge),ne=ge)},setLocked:function(ge){G=ge},setClear:function(ge,ye,Be,it,pe){pe===!0&&(ge*=it,ye*=it,Be*=it),ae.set(ge,ye,Be,it),Me.equals(ae)===!1&&(n.clearColor(ge,ye,Be,it),Me.copy(ae))},reset:function(){G=!1,ne=null,Me.set(-1,0,0,0)}}}function i(){let G=!1,ae=!1,ne=null,Me=null,ge=null;return{setReversed:function(ye){if(ae!==ye){let Be=e.get("EXT_clip_control");ye?Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.ZERO_TO_ONE_EXT):Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.NEGATIVE_ONE_TO_ONE_EXT),ae=ye;let it=ge;ge=null,this.setClear(it)}},getReversed:function(){return ae},setTest:function(ye){ye?ie(n.DEPTH_TEST):ce(n.DEPTH_TEST)},setMask:function(ye){ne!==ye&&!G&&(n.depthMask(ye),ne=ye)},setFunc:function(ye){if(ae&&(ye=Pp[ye]),Me!==ye){switch(ye){case ll:n.depthFunc(n.NEVER);break;case cl:n.depthFunc(n.ALWAYS);break;case hl:n.depthFunc(n.LESS);break;case Ir:n.depthFunc(n.LEQUAL);break;case ul:n.depthFunc(n.EQUAL);break;case fl:n.depthFunc(n.GEQUAL);break;case dl:n.depthFunc(n.GREATER);break;case pl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Me=ye}},setLocked:function(ye){G=ye},setClear:function(ye){ge!==ye&&(ge=ye,ae&&(ye=1-ye),n.clearDepth(ye))},reset:function(){G=!1,ne=null,Me=null,ge=null,ae=!1}}}function s(){let G=!1,ae=null,ne=null,Me=null,ge=null,ye=null,Be=null,it=null,pe=null;return{setTest:function(Ve){G||(Ve?ie(n.STENCIL_TEST):ce(n.STENCIL_TEST))},setMask:function(Ve){ae!==Ve&&!G&&(n.stencilMask(Ve),ae=Ve)},setFunc:function(Ve,tt,Ae){(ne!==Ve||Me!==tt||ge!==Ae)&&(n.stencilFunc(Ve,tt,Ae),ne=Ve,Me=tt,ge=Ae)},setOp:function(Ve,tt,Ae){(ye!==Ve||Be!==tt||it!==Ae)&&(n.stencilOp(Ve,tt,Ae),ye=Ve,Be=tt,it=Ae)},setLocked:function(Ve){G=Ve},setClear:function(Ve){pe!==Ve&&(n.clearStencil(Ve),pe=Ve)},reset:function(){G=!1,ae=null,ne=null,Me=null,ge=null,ye=null,Be=null,it=null,pe=null}}}let r=new t,o=new i,a=new s,l={},c=new WeakMap,h={},f={},u={},d=new WeakMap,p=[],_=null,x=!1,g=null,v=null,w=null,S=null,C=null,A=null,m=null,b=new We(0,0,0),P=0,M=!1,E=null,R=null,y=null,T=null,I=null,N=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),z=!1,B=0,F=n.getParameter(n.VERSION);F.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(F)[1]),z=B>=1):F.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),z=B>=2);let U=null,V={},$=n.getParameter(n.SCISSOR_BOX),ee=n.getParameter(n.VIEWPORT),H=new Dt().fromArray($),K=new Dt().fromArray(ee);function Q(G,ae,ne,Me){let ge=new Uint8Array(4),ye=n.createTexture();n.bindTexture(G,ye),n.texParameteri(G,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(G,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Be=0;Be<ne;Be++)G===n.TEXTURE_3D||G===n.TEXTURE_2D_ARRAY?n.texImage3D(ae,0,n.RGBA,1,1,Me,0,n.RGBA,n.UNSIGNED_BYTE,ge):n.texImage2D(ae+Be,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ge);return ye}let he={};he[n.TEXTURE_2D]=Q(n.TEXTURE_2D,n.TEXTURE_2D,1),he[n.TEXTURE_CUBE_MAP]=Q(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),he[n.TEXTURE_2D_ARRAY]=Q(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),he[n.TEXTURE_3D]=Q(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ie(n.DEPTH_TEST),o.setFunc(Ir),Ee(!1),_e(cu),ie(n.CULL_FACE),me(Zs);function ie(G){h[G]!==!0&&(n.enable(G),h[G]=!0)}function ce(G){h[G]!==!1&&(n.disable(G),h[G]=!1)}function Le(G,ae){return u[G]!==ae?(n.bindFramebuffer(G,ae),u[G]=ae,G===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=ae),G===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=ae),!0):!1}function Ce(G,ae){let ne=p,Me=!1;if(G){ne=d.get(ae),ne===void 0&&(ne=[],d.set(ae,ne));let ge=G.textures;if(ne.length!==ge.length||ne[0]!==n.COLOR_ATTACHMENT0){for(let ye=0,Be=ge.length;ye<Be;ye++)ne[ye]=n.COLOR_ATTACHMENT0+ye;ne.length=ge.length,Me=!0}}else ne[0]!==n.BACK&&(ne[0]=n.BACK,Me=!0);Me&&n.drawBuffers(ne)}function Ne(G){return _!==G?(n.useProgram(G),_=G,!0):!1}let Ye={[Ks]:n.FUNC_ADD,[Qd]:n.FUNC_SUBTRACT,[ep]:n.FUNC_REVERSE_SUBTRACT};Ye[tp]=n.MIN,Ye[np]=n.MAX;let oe={[ip]:n.ZERO,[sp]:n.ONE,[rp]:n.SRC_COLOR,[du]:n.SRC_ALPHA,[up]:n.SRC_ALPHA_SATURATE,[cp]:n.DST_COLOR,[ap]:n.DST_ALPHA,[op]:n.ONE_MINUS_SRC_COLOR,[pu]:n.ONE_MINUS_SRC_ALPHA,[hp]:n.ONE_MINUS_DST_COLOR,[lp]:n.ONE_MINUS_DST_ALPHA,[fp]:n.CONSTANT_COLOR,[dp]:n.ONE_MINUS_CONSTANT_COLOR,[pp]:n.CONSTANT_ALPHA,[mp]:n.ONE_MINUS_CONSTANT_ALPHA};function me(G,ae,ne,Me,ge,ye,Be,it,pe,Ve){if(G===Zs){x===!0&&(ce(n.BLEND),x=!1);return}if(x===!1&&(ie(n.BLEND),x=!0),G!==jd){if(G!==g||Ve!==M){if((v!==Ks||C!==Ks)&&(n.blendEquation(n.FUNC_ADD),v=Ks,C=Ks),Ve)switch(G){case Gr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case hu:n.blendFunc(n.ONE,n.ONE);break;case uu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case fu:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:$e("WebGLState: Invalid blending: ",G);break}else switch(G){case Gr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case hu:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case uu:$e("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case fu:$e("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:$e("WebGLState: Invalid blending: ",G);break}w=null,S=null,A=null,m=null,b.set(0,0,0),P=0,g=G,M=Ve}return}ge=ge||ae,ye=ye||ne,Be=Be||Me,(ae!==v||ge!==C)&&(n.blendEquationSeparate(Ye[ae],Ye[ge]),v=ae,C=ge),(ne!==w||Me!==S||ye!==A||Be!==m)&&(n.blendFuncSeparate(oe[ne],oe[Me],oe[ye],oe[Be]),w=ne,S=Me,A=ye,m=Be),(it.equals(b)===!1||pe!==P)&&(n.blendColor(it.r,it.g,it.b,pe),b.copy(it),P=pe),g=G,M=!1}function de(G,ae){G.side===si?ce(n.CULL_FACE):ie(n.CULL_FACE);let ne=G.side===un;ae&&(ne=!ne),Ee(ne),G.blending===Gr&&G.transparent===!1?me(Zs):me(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),o.setFunc(G.depthFunc),o.setTest(G.depthTest),o.setMask(G.depthWrite),r.setMask(G.colorWrite);let Me=G.stencilWrite;a.setTest(Me),Me&&(a.setMask(G.stencilWriteMask),a.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),a.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),ke(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?ie(n.SAMPLE_ALPHA_TO_COVERAGE):ce(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ee(G){E!==G&&(G?n.frontFace(n.CW):n.frontFace(n.CCW),E=G)}function _e(G){G!==Kd?(ie(n.CULL_FACE),G!==R&&(G===cu?n.cullFace(n.BACK):G===Jd?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ce(n.CULL_FACE),R=G}function Xe(G){G!==y&&(z&&n.lineWidth(G),y=G)}function ke(G,ae,ne){G?(ie(n.POLYGON_OFFSET_FILL),(T!==ae||I!==ne)&&(T=ae,I=ne,o.getReversed()&&(ae=-ae,ne=-ne),n.polygonOffset(ae,ne))):ce(n.POLYGON_OFFSET_FILL)}function ht(G){G?ie(n.SCISSOR_TEST):ce(n.SCISSOR_TEST)}function ft(G){G===void 0&&(G=n.TEXTURE0+N-1),U!==G&&(n.activeTexture(G),U=G)}function _t(G,ae,ne){ne===void 0&&(U===null?ne=n.TEXTURE0+N-1:ne=U);let Me=V[ne];Me===void 0&&(Me={type:void 0,texture:void 0},V[ne]=Me),(Me.type!==G||Me.texture!==ae)&&(U!==ne&&(n.activeTexture(ne),U=ne),n.bindTexture(G,ae||he[G]),Me.type=G,Me.texture=ae)}function Y(){let G=V[U];G!==void 0&&G.type!==void 0&&(n.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function sn(){try{n.compressedTexImage2D(...arguments)}catch(G){$e("WebGLState:",G)}}function lt(){try{n.compressedTexImage3D(...arguments)}catch(G){$e("WebGLState:",G)}}function Et(){try{n.texSubImage2D(...arguments)}catch(G){$e("WebGLState:",G)}}function Se(){try{n.texSubImage3D(...arguments)}catch(G){$e("WebGLState:",G)}}function $t(){try{n.compressedTexSubImage2D(...arguments)}catch(G){$e("WebGLState:",G)}}function Ge(){try{n.compressedTexSubImage3D(...arguments)}catch(G){$e("WebGLState:",G)}}function Je(){try{n.texStorage2D(...arguments)}catch(G){$e("WebGLState:",G)}}function k(){try{n.texStorage3D(...arguments)}catch(G){$e("WebGLState:",G)}}function L(){try{n.texImage2D(...arguments)}catch(G){$e("WebGLState:",G)}}function J(){try{n.texImage3D(...arguments)}catch(G){$e("WebGLState:",G)}}function ue(G){return f[G]!==void 0?f[G]:n.getParameter(G)}function le(G,ae){f[G]!==ae&&(n.pixelStorei(G,ae),f[G]=ae)}function xe(G){H.equals(G)===!1&&(n.scissor(G.x,G.y,G.z,G.w),H.copy(G))}function we(G){K.equals(G)===!1&&(n.viewport(G.x,G.y,G.z,G.w),K.copy(G))}function se(G,ae){let ne=c.get(ae);ne===void 0&&(ne=new WeakMap,c.set(ae,ne));let Me=ne.get(G);Me===void 0&&(Me=n.getUniformBlockIndex(ae,G.name),n.uniformBlockBinding(ae,Me,Me),ne.set(G,Me))}function re(G,ae,ne){let ge=c.get(ae).get(G);l[ge]!==ne&&(n.bindBufferBase(n.UNIFORM_BUFFER,ge,ne),l[ge]=ne)}function ve(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),h={},f={},U=null,V={},u={},l={},d=new WeakMap,p=[],_=null,x=!1,g=null,v=null,w=null,S=null,C=null,A=null,m=null,b=new We(0,0,0),P=0,M=!1,E=null,R=null,y=null,T=null,I=null,H.set(0,0,n.canvas.width,n.canvas.height),K.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ie,disable:ce,bindFramebuffer:Le,drawBuffers:Ce,useProgram:Ne,setBlending:me,setMaterial:de,setFlipSided:Ee,setCullFace:_e,setLineWidth:Xe,setPolygonOffset:ke,setScissorTest:ht,activeTexture:ft,bindTexture:_t,unbindTexture:Y,compressedTexImage2D:sn,compressedTexImage3D:lt,texImage2D:L,texImage3D:J,pixelStorei:le,getParameter:ue,updateUBOMapping:se,uniformBlockBinding:re,texStorage2D:Je,texStorage3D:k,texSubImage2D:Et,texSubImage3D:Se,compressedTexSubImage2D:$t,compressedTexSubImage3D:Ge,scissor:xe,viewport:we,reset:ve}}function $1(n,e,t,i,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new fe,h=new WeakMap,f=new Set,u,d=new WeakMap,p=new Set,_=new FinalizationRegistry(k=>p.delete(k)),x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(k,L){return x?new OffscreenCanvas(k,L):To("canvas")}function v(k,L,J){let ue=1,le=Je(k);if((le.width>J||le.height>J)&&(ue=J/Math.max(le.width,le.height)),ue<1)if(typeof HTMLImageElement<"u"&&k instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&k instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&k instanceof ImageBitmap||typeof VideoFrame<"u"&&k instanceof VideoFrame){let xe=Math.floor(ue*le.width),we=Math.floor(ue*le.height);u===void 0&&(u=g(xe,we));let se=L?g(xe,we):u;return se.width=xe,se.height=we,se.getContext("2d").drawImage(k,0,0,xe,we),qe("WebGLRenderer: Texture has been resized from ("+le.width+"x"+le.height+") to ("+xe+"x"+we+")."),se}else return"data"in k&&qe("WebGLRenderer: Image in DataTexture is too big ("+le.width+"x"+le.height+")."),k;return k}function w(k){return k.generateMipmaps}function S(k){n.generateMipmap(k)}function C(k){return k.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:k.isWebGL3DRenderTarget?n.TEXTURE_3D:k.isWebGLArrayRenderTarget||k.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function A(k,L,J,ue,le,xe=!1){if(k!==null){if(n[k]!==void 0)return n[k];qe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+k+"'")}let we;ue&&(we=e.get("EXT_texture_norm16"),we||qe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let se=L;if(L===n.RED&&(J===n.FLOAT&&(se=n.R32F),J===n.HALF_FLOAT&&(se=n.R16F),J===n.UNSIGNED_BYTE&&(se=n.R8),J===n.UNSIGNED_SHORT&&we&&(se=we.R16_EXT),J===n.SHORT&&we&&(se=we.R16_SNORM_EXT)),L===n.RED_INTEGER&&(J===n.UNSIGNED_BYTE&&(se=n.R8UI),J===n.UNSIGNED_SHORT&&(se=n.R16UI),J===n.UNSIGNED_INT&&(se=n.R32UI),J===n.BYTE&&(se=n.R8I),J===n.SHORT&&(se=n.R16I),J===n.INT&&(se=n.R32I)),L===n.RG&&(J===n.FLOAT&&(se=n.RG32F),J===n.HALF_FLOAT&&(se=n.RG16F),J===n.UNSIGNED_BYTE&&(se=n.RG8),J===n.UNSIGNED_SHORT&&we&&(se=we.RG16_EXT),J===n.SHORT&&we&&(se=we.RG16_SNORM_EXT)),L===n.RG_INTEGER&&(J===n.UNSIGNED_BYTE&&(se=n.RG8UI),J===n.UNSIGNED_SHORT&&(se=n.RG16UI),J===n.UNSIGNED_INT&&(se=n.RG32UI),J===n.BYTE&&(se=n.RG8I),J===n.SHORT&&(se=n.RG16I),J===n.INT&&(se=n.RG32I)),L===n.RGB_INTEGER&&(J===n.UNSIGNED_BYTE&&(se=n.RGB8UI),J===n.UNSIGNED_SHORT&&(se=n.RGB16UI),J===n.UNSIGNED_INT&&(se=n.RGB32UI),J===n.BYTE&&(se=n.RGB8I),J===n.SHORT&&(se=n.RGB16I),J===n.INT&&(se=n.RGB32I)),L===n.RGBA_INTEGER&&(J===n.UNSIGNED_BYTE&&(se=n.RGBA8UI),J===n.UNSIGNED_SHORT&&(se=n.RGBA16UI),J===n.UNSIGNED_INT&&(se=n.RGBA32UI),J===n.BYTE&&(se=n.RGBA8I),J===n.SHORT&&(se=n.RGBA16I),J===n.INT&&(se=n.RGBA32I)),L===n.RGB&&(J===n.UNSIGNED_SHORT&&we&&(se=we.RGB16_EXT),J===n.SHORT&&we&&(se=we.RGB16_SNORM_EXT),J===n.UNSIGNED_INT_5_9_9_9_REV&&(se=n.RGB9_E5),J===n.UNSIGNED_INT_10F_11F_11F_REV&&(se=n.R11F_G11F_B10F)),L===n.RGBA){let re=xe?wo:mt.getTransfer(le);J===n.FLOAT&&(se=n.RGBA32F),J===n.HALF_FLOAT&&(se=n.RGBA16F),J===n.UNSIGNED_BYTE&&(se=re===St?n.SRGB8_ALPHA8:n.RGBA8),J===n.UNSIGNED_SHORT&&we&&(se=we.RGBA16_EXT),J===n.SHORT&&we&&(se=we.RGBA16_SNORM_EXT),J===n.UNSIGNED_SHORT_4_4_4_4&&(se=n.RGBA4),J===n.UNSIGNED_SHORT_5_5_5_1&&(se=n.RGB5_A1)}return(se===n.R16F||se===n.R32F||se===n.RG16F||se===n.RG32F||se===n.RGBA16F||se===n.RGBA32F)&&e.get("EXT_color_buffer_float"),se}function m(k,L){let J;return k?L===null||L===vi||L===js?J=n.DEPTH24_STENCIL8:L===ri?J=n.DEPTH32F_STENCIL8:L===Xr&&(J=n.DEPTH24_STENCIL8,qe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):L===null||L===vi||L===js?J=n.DEPTH_COMPONENT24:L===ri?J=n.DEPTH_COMPONENT32F:L===Xr&&(J=n.DEPTH_COMPONENT16),J}function b(k,L){return w(k)===!0||k.isFramebufferTexture&&k.minFilter!==yn&&k.minFilter!==Mn?Math.log2(Math.max(L.width,L.height))+1:k.mipmaps.length>0?k.mipmaps.length:k.isCompressedTexture&&Array.isArray(k.image)?L.mipmaps.length:1}function P(k){let L=new WeakRef(k);i.get(k).__ref=L,p.add(L),_.register(k,L,L)}function M(k){let L=i.get(k).__ref;L!==void 0&&(p.delete(L),_.unregister(L))}function E(k){y(k.target)}function R(k){T(k.target)}function y(k){k.removeEventListener("dispose",E),M(k),N(k),k.isVideoTexture&&h.delete(k),k.isHTMLTexture&&f.delete(k)}function T(k){k.removeEventListener("dispose",R),M(k),B(k)}function I(){for(let k of p){let L=k.deref();L!==void 0&&(L.isRenderTarget===!0?T(L):y(L))}p.clear(),f.clear()}function N(k){let L=i.get(k);if(L.__webglInit===void 0)return;let J=k.source,ue=d.get(J);if(ue){let le=ue[L.__cacheKey];le.usedTimes--,le.usedTimes===0&&z(k),Object.keys(ue).length===0&&d.delete(J)}i.remove(k)}function z(k){let L=i.get(k);n.deleteTexture(L.__webglTexture);let J=k.source,ue=d.get(J);delete ue[L.__cacheKey],o.memory.textures--}function B(k){let L=i.get(k);L.__depthDisposeCallback&&L.__depthDisposeCallback();let J=k.depthTexture;if(J&&J.renderTarget===k&&y(J),k.isWebGLCubeRenderTarget)for(let le=0;le<6;le++){if(Array.isArray(L.__webglFramebuffer[le]))for(let xe=0;xe<L.__webglFramebuffer[le].length;xe++)n.deleteFramebuffer(L.__webglFramebuffer[le][xe]);else n.deleteFramebuffer(L.__webglFramebuffer[le]);L.__webglDepthbuffer&&n.deleteRenderbuffer(L.__webglDepthbuffer[le])}else{if(Array.isArray(L.__webglFramebuffer))for(let le=0;le<L.__webglFramebuffer.length;le++)n.deleteFramebuffer(L.__webglFramebuffer[le]);else n.deleteFramebuffer(L.__webglFramebuffer);if(L.__webglDepthbuffer&&n.deleteRenderbuffer(L.__webglDepthbuffer),L.__webglMultisampledFramebuffer&&n.deleteFramebuffer(L.__webglMultisampledFramebuffer),L.__webglColorRenderbuffer)for(let le=0;le<L.__webglColorRenderbuffer.length;le++)L.__webglColorRenderbuffer[le]&&n.deleteRenderbuffer(L.__webglColorRenderbuffer[le]);L.__webglDepthRenderbuffer&&n.deleteRenderbuffer(L.__webglDepthRenderbuffer)}let ue=k.textures;for(let le=0,xe=ue.length;le<xe;le++){let we=i.get(ue[le]);we.__webglTexture&&(n.deleteTexture(we.__webglTexture),o.memory.textures--),i.remove(ue[le])}i.remove(k)}let F=0;function U(){F=0}function V(){return F}function $(k){F=k}function ee(){let k=F;return k>=s.maxTextures&&qe("WebGLTextures: Trying to use "+(k+1)+" texture units while this GPU supports only "+s.maxTextures),F+=1,k}function H(k){let L=[];return L.push(k.wrapS),L.push(k.wrapT),L.push(k.wrapR||0),L.push(k.magFilter),L.push(k.minFilter),L.push(k.anisotropy),L.push(k.internalFormat),L.push(k.format),L.push(k.type),L.push(k.generateMipmaps),L.push(k.mipmapsAutoUpdate),L.push(k.premultiplyAlpha),L.push(k.flipY),L.push(k.unpackAlignment),L.push(k.colorSpace),L.join()}function K(k,L){let J=i.get(k);if(k.isVideoTexture&&$t(k),k.isRenderTargetTexture===!1&&k.isExternalTexture!==!0&&k.version>0&&J.__version!==k.version){let ue=k.image;if(ue===null)qe("WebGLRenderer: Texture marked for update but no image data found.");else if(ue.complete===!1)qe("WebGLRenderer: Texture marked for update but image is incomplete");else{de(J,k,L);return}}else k.isExternalTexture&&(J.__webglTexture=k.sourceTexture?k.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,J.__webglTexture,n.TEXTURE0+L)}function Q(k,L){let J=i.get(k);if(k.isRenderTargetTexture===!1&&k.version>0&&J.__version!==k.version){de(J,k,L);return}else k.isExternalTexture&&(J.__webglTexture=k.sourceTexture?k.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,J.__webglTexture,n.TEXTURE0+L)}function he(k,L){let J=i.get(k);if(k.isRenderTargetTexture===!1&&k.version>0&&J.__version!==k.version){de(J,k,L);return}t.bindTexture(n.TEXTURE_3D,J.__webglTexture,n.TEXTURE0+L)}function ie(k,L){let J=i.get(k);if(k.version>0&&J.__version!==k.version){Ee(J,k,L);return}t.bindTexture(n.TEXTURE_CUBE_MAP,J.__webglTexture,n.TEXTURE0+L)}let ce={[ps]:n.REPEAT,[Ti]:n.CLAMP_TO_EDGE,[ml]:n.MIRRORED_REPEAT},Le={[yn]:n.NEAREST,[yp]:n.NEAREST_MIPMAP_NEAREST,[ea]:n.NEAREST_MIPMAP_LINEAR,[Mn]:n.LINEAR,[Yl]:n.LINEAR_MIPMAP_NEAREST,[_i]:n.LINEAR_MIPMAP_LINEAR},Ce={[bp]:n.NEVER,[Pu]:n.ALWAYS,[Sp]:n.LESS,[Ru]:n.LEQUAL,[wp]:n.EQUAL,[Cu]:n.GEQUAL,[Tp]:n.GREATER,[Ep]:n.NOTEQUAL};function Ne(k,L){if(L.type===ri&&e.has("OES_texture_float_linear")===!1&&(L.magFilter===Mn||L.magFilter===Yl||L.magFilter===ea||L.magFilter===_i||L.minFilter===Mn||L.minFilter===Yl||L.minFilter===ea||L.minFilter===_i)&&qe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(k,n.TEXTURE_WRAP_S,ce[L.wrapS]),n.texParameteri(k,n.TEXTURE_WRAP_T,ce[L.wrapT]),(k===n.TEXTURE_3D||k===n.TEXTURE_2D_ARRAY)&&n.texParameteri(k,n.TEXTURE_WRAP_R,ce[L.wrapR]),n.texParameteri(k,n.TEXTURE_MAG_FILTER,Le[L.magFilter]),n.texParameteri(k,n.TEXTURE_MIN_FILTER,Le[L.minFilter]),L.compareFunction&&(n.texParameteri(k,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(k,n.TEXTURE_COMPARE_FUNC,Ce[L.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(L.magFilter===yn||L.minFilter!==ea&&L.minFilter!==_i||L.type===ri&&e.has("OES_texture_float_linear")===!1)return;if(L.anisotropy>1||i.get(L).__currentAnisotropy){let J=e.get("EXT_texture_filter_anisotropic");n.texParameterf(k,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(L.anisotropy,s.getMaxAnisotropy())),i.get(L).__currentAnisotropy=L.anisotropy}}}function Ye(k,L){let J=!1;k.__webglInit===void 0&&(k.__webglInit=!0,L.addEventListener("dispose",E),P(L));let ue=L.source,le=d.get(ue);le===void 0&&(le={},d.set(ue,le));let xe=H(L);if(xe!==k.__cacheKey){le[xe]===void 0&&(le[xe]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,J=!0),le[xe].usedTimes++;let we=le[k.__cacheKey];we!==void 0&&(le[k.__cacheKey].usedTimes--,we.usedTimes===0&&z(L)),k.__cacheKey=xe,k.__webglTexture=le[xe].texture}return J}function oe(k,L,J){return Math.floor(Math.floor(k/J)/L)}function me(k,L,J,ue){let xe=k.updateRanges;if(xe.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,L.width,L.height,J,ue,L.data);else{xe.sort((G,ae)=>G.start-ae.start);let we=0;for(let G=1;G<xe.length;G++){let ae=xe[we],ne=xe[G],Me=ae.start+ae.count,ge=oe(ne.start,L.width,4),ye=oe(ae.start,L.width,4);ne.start<=Me+1&&ge===ye&&oe(ne.start+ne.count-1,L.width,4)===ge?ae.count=Math.max(ae.count,ne.start+ne.count-ae.start):(++we,xe[we]=ne)}xe.length=we+1;let se=t.getParameter(n.UNPACK_ROW_LENGTH),re=t.getParameter(n.UNPACK_SKIP_PIXELS),ve=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,L.width);for(let G=0,ae=xe.length;G<ae;G++){let ne=xe[G],Me=Math.floor(ne.start/4),ge=Math.ceil(ne.count/4),ye=Me%L.width,Be=Math.floor(Me/L.width),it=ge,pe=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,ye),t.pixelStorei(n.UNPACK_SKIP_ROWS,Be),t.texSubImage2D(n.TEXTURE_2D,0,ye,Be,it,pe,J,ue,L.data)}k.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,se),t.pixelStorei(n.UNPACK_SKIP_PIXELS,re),t.pixelStorei(n.UNPACK_SKIP_ROWS,ve)}}function de(k,L,J){let ue=n.TEXTURE_2D;(L.isDataArrayTexture||L.isCompressedArrayTexture)&&(ue=n.TEXTURE_2D_ARRAY),L.isData3DTexture&&(ue=n.TEXTURE_3D);let le=Ye(k,L),xe=L.source;t.bindTexture(ue,k.__webglTexture,n.TEXTURE0+J);let we=i.get(xe);if(xe.version!==we.__version||le===!0){if(t.activeTexture(n.TEXTURE0+J),(typeof ImageBitmap<"u"&&L.image instanceof ImageBitmap)===!1){let pe=mt.getPrimaries(mt.workingColorSpace),Ve=L.colorSpace===ts?null:mt.getPrimaries(L.colorSpace),tt=L.colorSpace===ts||pe===Ve?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,L.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,tt)}t.pixelStorei(n.UNPACK_ALIGNMENT,L.unpackAlignment);let re=v(L.image,!1,s.maxTextureSize);re=Ge(L,re);let ve=r.convert(L.format,L.colorSpace),G=r.convert(L.type),ae=A(L.internalFormat,ve,G,L.normalized,L.colorSpace,L.isVideoTexture);Ne(ue,L);let ne,Me=L.mipmaps,ge=L.isVideoTexture!==!0,ye=we.__version===void 0||le===!0,Be=xe.dataReady,it=b(L,re);if(L.isDepthTexture)ae=m(L.format===es,L.type),ye&&(ge?t.texStorage2D(n.TEXTURE_2D,1,ae,re.width,re.height):t.texImage2D(n.TEXTURE_2D,0,ae,re.width,re.height,0,ve,G,null));else if(L.isDataTexture)if(Me.length>0){ge&&ye&&t.texStorage2D(n.TEXTURE_2D,it,ae,Me[0].width,Me[0].height);for(let pe=0,Ve=Me.length;pe<Ve;pe++)ne=Me[pe],ge?Be&&t.texSubImage2D(n.TEXTURE_2D,pe,0,0,ne.width,ne.height,ve,G,ne.data):t.texImage2D(n.TEXTURE_2D,pe,ae,ne.width,ne.height,0,ve,G,ne.data);L.generateMipmaps=!1}else ge?(ye&&t.texStorage2D(n.TEXTURE_2D,it,ae,re.width,re.height),Be&&me(L,re,ve,G)):t.texImage2D(n.TEXTURE_2D,0,ae,re.width,re.height,0,ve,G,re.data);else if(L.isCompressedTexture)if(L.isCompressedArrayTexture){ge&&ye&&t.texStorage3D(n.TEXTURE_2D_ARRAY,it,ae,Me[0].width,Me[0].height,re.depth);for(let pe=0,Ve=Me.length;pe<Ve;pe++)if(ne=Me[pe],L.format!==Zn)if(ve!==null)if(ge){if(Be)if(L.layerUpdates.size>0){let tt=Ou(ne.width,ne.height,L.format,L.type);for(let Ae of L.layerUpdates){let wt=ne.data.subarray(Ae*tt/ne.data.BYTES_PER_ELEMENT,(Ae+1)*tt/ne.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,pe,0,0,Ae,ne.width,ne.height,1,ve,wt)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,pe,0,0,0,ne.width,ne.height,re.depth,ve,ne.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,pe,ae,ne.width,ne.height,re.depth,0,ne.data,0,0);else qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ge?Be&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,pe,0,0,0,ne.width,ne.height,re.depth,ve,G,ne.data):t.texImage3D(n.TEXTURE_2D_ARRAY,pe,ae,ne.width,ne.height,re.depth,0,ve,G,ne.data);L.layerUpdates.size>0&&L.clearLayerUpdates()}else{ge&&ye&&t.texStorage2D(n.TEXTURE_2D,it,ae,Me[0].width,Me[0].height);for(let pe=0,Ve=Me.length;pe<Ve;pe++)ne=Me[pe],L.format!==Zn?ve!==null?ge?Be&&t.compressedTexSubImage2D(n.TEXTURE_2D,pe,0,0,ne.width,ne.height,ve,ne.data):t.compressedTexImage2D(n.TEXTURE_2D,pe,ae,ne.width,ne.height,0,ne.data):qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ge?Be&&t.texSubImage2D(n.TEXTURE_2D,pe,0,0,ne.width,ne.height,ve,G,ne.data):t.texImage2D(n.TEXTURE_2D,pe,ae,ne.width,ne.height,0,ve,G,ne.data)}else if(L.isDataArrayTexture)if(ge){if(ye&&t.texStorage3D(n.TEXTURE_2D_ARRAY,it,ae,re.width,re.height,re.depth),Be)if(L.layerUpdates.size>0){let pe=Ou(re.width,re.height,L.format,L.type);for(let Ve of L.layerUpdates){let tt=re.data.subarray(Ve*pe/re.data.BYTES_PER_ELEMENT,(Ve+1)*pe/re.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Ve,re.width,re.height,1,ve,G,tt)}L.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,ve,G,re.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,ae,re.width,re.height,re.depth,0,ve,G,re.data);else if(L.isData3DTexture)ge?(ye&&t.texStorage3D(n.TEXTURE_3D,it,ae,re.width,re.height,re.depth),Be&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,ve,G,re.data)):t.texImage3D(n.TEXTURE_3D,0,ae,re.width,re.height,re.depth,0,ve,G,re.data);else if(L.isFramebufferTexture){if(ye)if(ge)t.texStorage2D(n.TEXTURE_2D,it,ae,re.width,re.height);else{let pe=re.width,Ve=re.height;for(let tt=0;tt<it;tt++)t.texImage2D(n.TEXTURE_2D,tt,ae,pe,Ve,0,ve,G,null),pe>>=1,Ve>>=1}}else if(L.isHTMLTexture){if("texElementImage2D"in n){let pe=n.canvas;if(pe.hasAttribute("layoutsubtree")||pe.setAttribute("layoutsubtree","true"),re.parentNode!==pe){pe.appendChild(re),f.add(L),pe.onpaint=Ve=>{let tt=Ve.changedElements;for(let Ae of f)tt.includes(Ae.image)&&(Ae.needsUpdate=!0)},pe.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,re);else{let tt=n.RGBA,Ae=n.RGBA,wt=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,tt,Ae,wt,re)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Me.length>0){if(ge&&ye){let pe=Je(Me[0]);t.texStorage2D(n.TEXTURE_2D,it,ae,pe.width,pe.height)}for(let pe=0,Ve=Me.length;pe<Ve;pe++)ne=Me[pe],ge?Be&&t.texSubImage2D(n.TEXTURE_2D,pe,0,0,ve,G,ne):t.texImage2D(n.TEXTURE_2D,pe,ae,ve,G,ne);L.generateMipmaps=!1}else if(ge){if(ye){let pe=Je(re);t.texStorage2D(n.TEXTURE_2D,it,ae,pe.width,pe.height)}Be&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ve,G,re)}else t.texImage2D(n.TEXTURE_2D,0,ae,ve,G,re);w(L)&&L.mipmapsAutoUpdate===!0&&S(ue),we.__version=xe.version,L.onUpdate&&L.onUpdate(L)}k.__version=L.version}function Ee(k,L,J){if(L.image.length!==6)return;let ue=Ye(k,L),le=L.source;t.bindTexture(n.TEXTURE_CUBE_MAP,k.__webglTexture,n.TEXTURE0+J);let xe=i.get(le);if(le.version!==xe.__version||ue===!0){t.activeTexture(n.TEXTURE0+J);let we=mt.getPrimaries(mt.workingColorSpace),se=L.colorSpace===ts?null:mt.getPrimaries(L.colorSpace),re=L.colorSpace===ts||we===se?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,L.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,L.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,re);let ve=L.isCompressedTexture||L.image[0].isCompressedTexture,G=L.image[0]&&L.image[0].isDataTexture,ae=[];for(let Ae=0;Ae<6;Ae++)!ve&&!G?ae[Ae]=v(L.image[Ae],!0,s.maxCubemapSize):ae[Ae]=G?L.image[Ae].image:L.image[Ae],ae[Ae]=Ge(L,ae[Ae]);let ne=ae[0],Me=r.convert(L.format,L.colorSpace),ge=r.convert(L.type),ye=A(L.internalFormat,Me,ge,L.normalized,L.colorSpace),Be=L.isVideoTexture!==!0,it=xe.__version===void 0||ue===!0,pe=le.dataReady,Ve=b(L,ne);Ne(n.TEXTURE_CUBE_MAP,L);let tt;if(L.isDepthTexture){if(ye=m(L.format===es,L.type),it)if(Be)t.texStorage2D(n.TEXTURE_CUBE_MAP,1,ye,ne.width,ne.height);else for(let Ae=0;Ae<6;Ae++)t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,ye,ne.width,ne.height,0,Me,ge,null)}else if(ve){Be&&it&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ve,ye,ne.width,ne.height);for(let Ae=0;Ae<6;Ae++){tt=ae[Ae].mipmaps;for(let wt=0;wt<tt.length;wt++){let mn=tt[wt];L.format!==Zn?Me!==null?Be?pe&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,wt,0,0,mn.width,mn.height,Me,mn.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,wt,ye,mn.width,mn.height,0,mn.data):qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Be?pe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,wt,0,0,mn.width,mn.height,Me,ge,mn.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,wt,ye,mn.width,mn.height,0,Me,ge,mn.data)}}}else{if(tt=L.mipmaps,Be&&it){tt.length>0&&Ve++;let Ae=Je(ae[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Ve,ye,Ae.width,Ae.height)}for(let Ae=0;Ae<6;Ae++)if(G){Be?pe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,0,0,ae[Ae].width,ae[Ae].height,Me,ge,ae[Ae].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,ye,ae[Ae].width,ae[Ae].height,0,Me,ge,ae[Ae].data);for(let wt=0;wt<tt.length;wt++){let as=tt[wt].image[Ae].image;Be?pe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,wt+1,0,0,as.width,as.height,Me,ge,as.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,wt+1,ye,as.width,as.height,0,Me,ge,as.data)}}else{Be?pe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,0,0,Me,ge,ae[Ae]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,ye,Me,ge,ae[Ae]);for(let wt=0;wt<tt.length;wt++){let mn=tt[wt];Be?pe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,wt+1,0,0,Me,ge,mn.image[Ae]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,wt+1,ye,Me,ge,mn.image[Ae])}}}w(L)&&L.mipmapsAutoUpdate===!0&&S(n.TEXTURE_CUBE_MAP),xe.__version=le.version,L.onUpdate&&L.onUpdate(L)}k.__version=L.version}function _e(k,L,J,ue,le,xe){let we=r.convert(J.format,J.colorSpace),se=r.convert(J.type),re=A(J.internalFormat,we,se,J.normalized,J.colorSpace),ve=i.get(L),G=i.get(J);if(G.__renderTarget=L,!ve.__hasExternalTextures){let ae=Math.max(1,L.width>>xe),ne=Math.max(1,L.height>>xe);le===n.TEXTURE_3D||le===n.TEXTURE_2D_ARRAY?t.texImage3D(le,xe,re,ae,ne,L.depth,0,we,se,null):t.texImage2D(le,xe,re,ae,ne,0,we,se,null)}t.bindFramebuffer(n.FRAMEBUFFER,k),Se(L)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ue,le,G.__webglTexture,0,Et(L)):(le===n.TEXTURE_2D||le>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&le<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ue,le,G.__webglTexture,xe),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Xe(k,L,J){if(n.bindRenderbuffer(n.RENDERBUFFER,k),L.depthBuffer){let ue=L.depthTexture,le=ue&&ue.isDepthTexture?ue.type:null,xe=m(L.stencilBuffer,le),we=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Se(L)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Et(L),xe,L.width,L.height):J?n.renderbufferStorageMultisample(n.RENDERBUFFER,Et(L),xe,L.width,L.height):n.renderbufferStorage(n.RENDERBUFFER,xe,L.width,L.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,we,n.RENDERBUFFER,k)}else{let ue=L.textures;for(let le=0;le<ue.length;le++){let xe=ue[le],we=r.convert(xe.format,xe.colorSpace),se=r.convert(xe.type),re=A(xe.internalFormat,we,se,xe.normalized,xe.colorSpace);Se(L)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Et(L),re,L.width,L.height):J?n.renderbufferStorageMultisample(n.RENDERBUFFER,Et(L),re,L.width,L.height):n.renderbufferStorage(n.RENDERBUFFER,re,L.width,L.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ke(k,L,J){let ue=L.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,k),!(L.depthTexture&&L.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let le=i.get(L.depthTexture);le.__renderTarget=L;let xe=ue?L.depthTexture.image[0]:L.depthTexture.image;(!le.__webglTexture||xe.width!==L.width||xe.height!==L.height)&&(xe.width=L.width,xe.height=L.height,L.depthTexture.needsUpdate=!0),ue?ie(L.depthTexture,0):K(L.depthTexture,0);let we=le.__webglTexture,se=Et(L),re=ue?n.TEXTURE_CUBE_MAP_POSITIVE_X+J:n.TEXTURE_2D,ve=L.depthTexture.format===es?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(L.depthTexture.format===Ki)Se(L)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ve,re,we,0,se):n.framebufferTexture2D(n.FRAMEBUFFER,ve,re,we,0);else if(L.depthTexture.format===es)Se(L)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ve,re,we,0,se):n.framebufferTexture2D(n.FRAMEBUFFER,ve,re,we,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ht(k){let L=i.get(k),J=k.isWebGLCubeRenderTarget===!0;if(L.__boundDepthTexture!==k.depthTexture){let ue=k.depthTexture;if(L.__depthDisposeCallback&&L.__depthDisposeCallback(),ue){let le=()=>{delete L.__boundDepthTexture,delete L.__depthDisposeCallback,ue.removeEventListener("dispose",le)};ue.addEventListener("dispose",le),L.__depthDisposeCallback=le}L.__boundDepthTexture=ue}if(k.depthTexture&&!L.__autoAllocateDepthBuffer)if(J)for(let ue=0;ue<6;ue++)ke(L.__webglFramebuffer[ue],k,ue);else k.texture.mipmaps.length>0?ke(L.__webglFramebuffer[0],k,0):ke(L.__webglFramebuffer,k,0);else if(J){L.__webglDepthbuffer=[];for(let ue=0;ue<6;ue++)if(t.bindFramebuffer(n.FRAMEBUFFER,L.__webglFramebuffer[ue]),L.__webglDepthbuffer[ue]===void 0)L.__webglDepthbuffer[ue]=n.createRenderbuffer(),Xe(L.__webglDepthbuffer[ue],k,!1);else{let le=k.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,xe=L.__webglDepthbuffer[ue];n.bindRenderbuffer(n.RENDERBUFFER,xe),n.framebufferRenderbuffer(n.FRAMEBUFFER,le,n.RENDERBUFFER,xe)}}else if(k.texture.mipmaps.length>0?t.bindFramebuffer(n.FRAMEBUFFER,L.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,L.__webglFramebuffer),L.__webglDepthbuffer===void 0)L.__webglDepthbuffer=n.createRenderbuffer(),Xe(L.__webglDepthbuffer,k,!1);else{let le=k.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,xe=L.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,xe),n.framebufferRenderbuffer(n.FRAMEBUFFER,le,n.RENDERBUFFER,xe)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function ft(k,L,J){let ue=i.get(k);L!==void 0&&_e(ue.__webglFramebuffer,k,k.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),J!==void 0&&ht(k)}function _t(k){let L=k.texture,J=i.get(k),ue=i.get(L);k.addEventListener("dispose",R),P(k);let le=k.textures,xe=k.isWebGLCubeRenderTarget===!0,we=le.length>1;if(we||(ue.__webglTexture===void 0&&(ue.__webglTexture=n.createTexture()),ue.__version=L.version,o.memory.textures++),xe){J.__webglFramebuffer=[];for(let se=0;se<6;se++)if(L.mipmaps.length>0){J.__webglFramebuffer[se]=[];for(let re=0;re<L.mipmaps.length;re++)J.__webglFramebuffer[se][re]=n.createFramebuffer()}else J.__webglFramebuffer[se]=n.createFramebuffer()}else{if(L.mipmaps.length>0){J.__webglFramebuffer=[];for(let se=0;se<L.mipmaps.length;se++)J.__webglFramebuffer[se]=n.createFramebuffer()}else J.__webglFramebuffer=n.createFramebuffer();if(we)for(let se=0,re=le.length;se<re;se++){let ve=i.get(le[se]);ve.__webglTexture===void 0&&(ve.__webglTexture=n.createTexture(),o.memory.textures++)}if(k.samples>0&&Se(k)===!1){J.__webglMultisampledFramebuffer=n.createFramebuffer(),J.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let se=0;se<le.length;se++){let re=le[se];J.__webglColorRenderbuffer[se]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,J.__webglColorRenderbuffer[se]);let ve=r.convert(re.format,re.colorSpace),G=r.convert(re.type),ae=A(re.internalFormat,ve,G,re.normalized,re.colorSpace,k.isXRRenderTarget===!0),ne=Et(k);n.renderbufferStorageMultisample(n.RENDERBUFFER,ne,ae,k.width,k.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+se,n.RENDERBUFFER,J.__webglColorRenderbuffer[se])}n.bindRenderbuffer(n.RENDERBUFFER,null),k.depthBuffer&&(J.__webglDepthRenderbuffer=n.createRenderbuffer(),Xe(J.__webglDepthRenderbuffer,k,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(xe){t.bindTexture(n.TEXTURE_CUBE_MAP,ue.__webglTexture),Ne(n.TEXTURE_CUBE_MAP,L);for(let se=0;se<6;se++)if(L.mipmaps.length>0)for(let re=0;re<L.mipmaps.length;re++)_e(J.__webglFramebuffer[se][re],k,L,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+se,re);else _e(J.__webglFramebuffer[se],k,L,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0);w(L)?S(n.TEXTURE_CUBE_MAP):L.mipmaps.length>0&&n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_MAX_LEVEL,L.mipmaps.length-1),t.unbindTexture()}else if(we){for(let se=0,re=le.length;se<re;se++){let ve=le[se],G=i.get(ve),ae=n.TEXTURE_2D;(k.isWebGL3DRenderTarget||k.isWebGLArrayRenderTarget)&&(ae=k.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ae,G.__webglTexture),Ne(ae,ve),_e(J.__webglFramebuffer,k,ve,n.COLOR_ATTACHMENT0+se,ae,0),w(ve)&&S(ae)}t.unbindTexture()}else{let se=n.TEXTURE_2D;if((k.isWebGL3DRenderTarget||k.isWebGLArrayRenderTarget)&&(se=k.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(se,ue.__webglTexture),Ne(se,L),L.mipmaps.length>0)for(let re=0;re<L.mipmaps.length;re++)_e(J.__webglFramebuffer[re],k,L,n.COLOR_ATTACHMENT0,se,re);else _e(J.__webglFramebuffer,k,L,n.COLOR_ATTACHMENT0,se,0);w(L)?S(se):L.mipmaps.length>0&&n.texParameteri(se,n.TEXTURE_MAX_LEVEL,L.mipmaps.length-1),t.unbindTexture()}k.depthBuffer&&ht(k)}function Y(k){let L=k.textures;for(let J=0,ue=L.length;J<ue;J++){let le=L[J];if(w(le)&&le.mipmapsAutoUpdate===!0){let xe=C(k),we=i.get(le).__webglTexture;t.bindTexture(xe,we),S(xe),t.unbindTexture()}}}let sn=[];function lt(k){if(k.samples>0){if(Se(k)===!1){let L=k.textures,J=k.width,ue=k.height,le=n.COLOR_BUFFER_BIT,xe=k.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,we=i.get(k),se=L.length>1;if(se)for(let ve=0;ve<L.length;ve++)t.bindFramebuffer(n.FRAMEBUFFER,we.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,we.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,we.__webglMultisampledFramebuffer),k.texture.mipmaps.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,we.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,we.__webglFramebuffer);for(let ve=0;ve<L.length;ve++){if(k.resolveDepthBuffer&&(k.depthBuffer&&(le|=n.DEPTH_BUFFER_BIT),k.stencilBuffer&&k.resolveStencilBuffer&&(le|=n.STENCIL_BUFFER_BIT)),se){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,we.__webglColorRenderbuffer[ve]);let G=i.get(L[ve]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,G,0)}n.blitFramebuffer(0,0,J,ue,0,0,J,ue,le,n.NEAREST),l===!0&&(sn.length=0,sn.push(n.COLOR_ATTACHMENT0+ve),k.depthBuffer&&k.storeMultisampledDepthBuffer===!1&&sn.push(xe),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,sn))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),se)for(let ve=0;ve<L.length;ve++){t.bindFramebuffer(n.FRAMEBUFFER,we.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.RENDERBUFFER,we.__webglColorRenderbuffer[ve]);let G=i.get(L[ve]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,we.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.TEXTURE_2D,G,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,we.__webglMultisampledFramebuffer)}else if(k.depthBuffer&&k.storeMultisampledDepthBuffer===!1&&l){let L=k.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[L])}}}function Et(k){return Math.min(s.maxSamples,k.samples)}function Se(k){let L=i.get(k);return k.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&L.__useRenderToTexture!==!1}function $t(k){let L=o.render.frame;h.get(k)!==L&&(h.set(k,L),k.update())}function Ge(k,L){let J=k.colorSpace,ue=k.format,le=k.type;return k.isCompressedTexture===!0||k.isVideoTexture===!0||J!==So&&J!==ts&&(mt.getTransfer(J)===St?(ue!==Zn||le!==On)&&qe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):$e("WebGLTextures: Unsupported texture color space:",J)),L}function Je(k){return typeof HTMLImageElement<"u"&&k instanceof HTMLImageElement?(c.width=k.naturalWidth||k.width,c.height=k.naturalHeight||k.height):typeof VideoFrame<"u"&&k instanceof VideoFrame?(c.width=k.displayWidth,c.height=k.displayHeight):(c.width=k.width,c.height=k.height),c}this.allocateTextureUnit=ee,this.resetTextureUnits=U,this.getTextureUnits=V,this.setTextureUnits=$,this.setTexture2D=K,this.setTexture2DArray=Q,this.setTexture3D=he,this.setTextureCube=ie,this.rebindTextures=ft,this.setupRenderTarget=_t,this.updateRenderTargetMipmap=Y,this.updateMultisampleRenderTarget=lt,this.setupDepthRenderbuffer=ht,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=Se,this.dispose=I}function Z1(n,e){function t(i,s=ts){let r,o=mt.getTransfer(s);if(i===On)return n.UNSIGNED_BYTE;if(i===Zl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Kl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===wu)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Tu)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===bu)return n.BYTE;if(i===Su)return n.SHORT;if(i===Xr)return n.UNSIGNED_SHORT;if(i===$l)return n.INT;if(i===vi)return n.UNSIGNED_INT;if(i===ri)return n.FLOAT;if(i===Mi)return n.HALF_FLOAT;if(i===Eu)return n.ALPHA;if(i===Au)return n.RGB;if(i===Zn)return n.RGBA;if(i===Ki)return n.DEPTH_COMPONENT;if(i===es)return n.DEPTH_STENCIL;if(i===Jl)return n.RED;if(i===jl)return n.RED_INTEGER;if(i===Ss)return n.RG;if(i===Ql)return n.RG_INTEGER;if(i===ec)return n.RGBA_INTEGER;if(i===ta||i===na||i===ia||i===sa)if(o===St)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===ta)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===na)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ia)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===sa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===ta)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===na)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ia)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===sa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===tc||i===nc||i===ic||i===sc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===tc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===nc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ic)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===sc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===rc||i===oc||i===ac||i===lc||i===cc||i===ra||i===hc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===rc||i===oc)return o===St?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===ac)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===lc)return r.COMPRESSED_R11_EAC;if(i===cc)return r.COMPRESSED_SIGNED_R11_EAC;if(i===ra)return r.COMPRESSED_RG11_EAC;if(i===hc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===uc||i===fc||i===dc||i===pc||i===mc||i===gc||i===xc||i===yc||i===_c||i===vc||i===Mc||i===bc||i===Sc||i===wc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===uc)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===fc)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===dc)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===pc)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===mc)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===gc)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===xc)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===yc)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===_c)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===vc)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Mc)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===bc)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Sc)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===wc)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Tc||i===Ec||i===Ac)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Tc)return o===St?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ec)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ac)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Rc||i===Cc||i===oa||i===Pc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Rc)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Cc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===oa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Pc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===js?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var K1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,J1=`
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

}`,qu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new Fo(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new ii({vertexShader:K1,fragmentShader:J1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new He(new ni(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Yu=class extends Ei{constructor(e,t){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,f=null,u=null,d=null,p=null,_=typeof XRWebGLBinding<"u",x=new qu,g={},v=t.getContextAttributes(),w=null,S=null,C=[],A=[],m=new fe,b=null,P=null,M=new hn;M.viewport=new Dt;let E=new hn;E.viewport=new Dt;let R=[M,E],y=new Vl,T=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let K=C[H];return K===void 0&&(K=new Ur,C[H]=K),K.getTargetRaySpace()},this.getControllerGrip=function(H){let K=C[H];return K===void 0&&(K=new Ur,C[H]=K),K.getGripSpace()},this.getHand=function(H){let K=C[H];return K===void 0&&(K=new Ur,C[H]=K),K.getHandSpace()};function N(H){let K=A.indexOf(H.inputSource);if(K===-1)return;let Q=C[K];Q!==void 0&&(Q.update(H.inputSource,H.frame,c||o),Q.dispatchEvent({type:H.type,data:H.inputSource}))}function z(){s.removeEventListener("select",N),s.removeEventListener("selectstart",N),s.removeEventListener("selectend",N),s.removeEventListener("squeeze",N),s.removeEventListener("squeezestart",N),s.removeEventListener("squeezeend",N),s.removeEventListener("end",z),s.removeEventListener("inputsourceschange",B);for(let H=0;H<C.length;H++){let K=A[H];K!==null&&(A[H]=null,C[H].disconnect(K))}T=null,I=null,x.reset();for(let H in g)delete g[H];if(e.setRenderTarget(w),d=null,u=null,f=null,s=null,S=null,ee.stop(),i.isPresenting=!1,e.setPixelRatio(b),e.setSize(m.width,m.height,!1),P!==null){let H=P.camera;H.fov=P.fov,H.zoom=P.zoom,H.updateProjectionMatrix(),P=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){r=H,i.isPresenting===!0&&qe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){a=H,i.isPresenting===!0&&qe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(H){c=H},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return f===null&&_&&(f=new XRWebGLBinding(s,t)),f},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(H){if(s=H,s!==null){if(w=e.getRenderTarget(),s.addEventListener("select",N),s.addEventListener("selectstart",N),s.addEventListener("selectend",N),s.addEventListener("squeeze",N),s.addEventListener("squeezestart",N),s.addEventListener("squeezeend",N),s.addEventListener("end",z),s.addEventListener("inputsourceschange",B),v.xrCompatible!==!0&&await t.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(m),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let Q=null,he=null,ie=null;v.depth&&(ie=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Q=v.stencil?es:Ki,he=v.stencil?js:vi);let ce={colorFormat:t.RGBA8,depthFormat:ie,scaleFactor:r};f=this.getBinding(),u=f.createProjectionLayer(ce),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),S=new Xn(u.textureWidth,u.textureHeight,{format:Zn,type:On,depthTexture:new ji(u.textureWidth,u.textureHeight,he,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let Q={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,Q),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),S=new Xn(d.framebufferWidth,d.framebufferHeight,{format:Zn,type:On,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),ee.setContext(s),ee.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function B(H){for(let K=0;K<H.removed.length;K++){let Q=H.removed[K],he=A.indexOf(Q);he>=0&&(A[he]=null,C[he].disconnect(Q))}for(let K=0;K<H.added.length;K++){let Q=H.added[K],he=A.indexOf(Q);if(he===-1){for(let ce=0;ce<C.length;ce++)if(ce>=A.length){A.push(Q),he=ce;break}else if(A[ce]===null){A[ce]=Q,he=ce;break}if(he===-1)break}let ie=C[he];ie&&ie.connect(Q)}}function F(H,K){K===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(K.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(s===null)return;let K=H.near,Q=H.far;x.texture!==null&&(x.depthNear>0&&(K=x.depthNear),x.depthFar>0&&(Q=x.depthFar)),y.near=E.near=M.near=K,y.far=E.far=M.far=Q,(T!==y.near||I!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),T=y.near,I=y.far),y.layers.mask=H.layers.mask|6,M.layers.mask=y.layers.mask&-5,E.layers.mask=y.layers.mask&-3;let he=H.parent,ie=y.cameras;F(y,he);for(let ce=0;ce<ie.length;ce++)F(ie[ce],he);y.projectionMatrix.copy(M.projectionMatrix),y.projectionMatrixInverse.copy(M.projectionMatrixInverse),P===null&&H.isPerspectiveCamera&&(P={camera:H,fov:H.fov,zoom:H.zoom}),U(H,y,he)};function U(H,K,Q){Q===null?H.matrix.copy(K.matrixWorld):(H.matrix.copy(Q.matrixWorld),H.matrix.invert(),H.matrix.multiply(K.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy(K.projectionMatrix),H.projectionMatrixInverse.copy(K.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=xl*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(u===null&&d===null))return l},this.setFoveation=function(H){l=H,u!==null&&(u.fixedFoveation=H),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=H)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(y)},this.getCameraTexture=function(H){return g[H]};let V=null;function $(H,K){if(h=K.getViewerPose(c||o),p=K,h!==null){let Q=h.views;d!==null&&(e.setRenderTargetFramebuffer(S,d.framebuffer),e.setRenderTarget(S));let he=!1;Q.length!==y.cameras.length&&(y.cameras.length=0,he=!0);for(let Ce=0;Ce<Q.length;Ce++){let Ne=Q[Ce],Ye=null;if(d!==null)Ye=d.getViewport(Ne);else{let me=f.getViewSubImage(u,Ne);Ye=me.viewport,Ce===0&&(e.setRenderTargetTextures(S,me.colorTexture,me.depthStencilTexture),e.setRenderTarget(S))}let oe=R[Ce];oe===void 0&&(oe=new hn,oe.layers.enable(Ce),oe.viewport=new Dt,R[Ce]=oe),oe.matrix.fromArray(Ne.transform.matrix),oe.matrix.decompose(oe.position,oe.quaternion,oe.scale),oe.projectionMatrix.fromArray(Ne.projectionMatrix),oe.projectionMatrixInverse.copy(oe.projectionMatrix).invert(),oe.viewport.set(Ye.x,Ye.y,Ye.width,Ye.height),Ce===0&&(y.matrix.copy(oe.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),he===!0&&y.cameras.push(oe)}let ie=s.enabledFeatures;if(ie&&ie.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){f=i.getBinding();let Ce=f.getDepthInformation(Q[0]);Ce&&Ce.isValid&&Ce.texture&&x.init(Ce,s.renderState)}if(ie&&ie.includes("camera-access")&&_){e.state.unbindTexture(),f=i.getBinding();for(let Ce=0;Ce<Q.length;Ce++){let Ne=Q[Ce].camera;if(Ne){let Ye=g[Ne];Ye||(Ye=new Fo,g[Ne]=Ye);let oe=f.getCameraImage(Ne);Ye.sourceTexture=oe}}}}for(let Q=0;Q<C.length;Q++){let he=A[Q],ie=C[Q];he!==null&&ie!==void 0&&ie.update(he,K,c||o)}V&&V(H,K),K.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:K}),p=null}let ee=new h0;ee.setAnimationLoop($),this.setAnimationLoop=function(H){V=H},this.dispose=function(){}}},j1=new vt,v0=new je;v0.set(-1,0,0,0,1,0,0,0,1);function Q1(n,e){function t(x,g){x.matrixAutoUpdate===!0&&x.updateMatrix(),g.value.copy(x.matrix)}function i(x,g){g.color.getRGB(x.fogColor.value,Du(n)),g.isFog?(x.fogNear.value=g.near,x.fogFar.value=g.far):g.isFogExp2&&(x.fogDensity.value=g.density)}function s(x,g,v,w,S){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(x,g):g.isMeshLambertMaterial?(r(x,g),g.envMap&&(x.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(x,g),f(x,g)):g.isMeshPhongMaterial?(r(x,g),h(x,g),g.envMap&&(x.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(x,g),u(x,g),g.isMeshPhysicalMaterial&&d(x,g,S)):g.isMeshMatcapMaterial?(r(x,g),p(x,g)):g.isMeshDepthMaterial?r(x,g):g.isMeshDistanceMaterial?(r(x,g),_(x,g)):g.isMeshNormalMaterial?r(x,g):g.isLineBasicMaterial?(o(x,g),g.isLineDashedMaterial&&a(x,g)):g.isPointsMaterial?l(x,g,v,w):g.isSpriteMaterial?c(x,g):g.isShadowMaterial?(x.color.value.copy(g.color),x.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(x,g){x.opacity.value=g.opacity,g.color&&x.diffuse.value.copy(g.color),g.emissive&&x.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(x.map.value=g.map,t(g.map,x.mapTransform)),g.alphaMap&&(x.alphaMap.value=g.alphaMap,t(g.alphaMap,x.alphaMapTransform)),g.bumpMap&&(x.bumpMap.value=g.bumpMap,t(g.bumpMap,x.bumpMapTransform),x.bumpScale.value=g.bumpScale,g.side===un&&(x.bumpScale.value*=-1)),g.normalMap&&(x.normalMap.value=g.normalMap,t(g.normalMap,x.normalMapTransform),x.normalScale.value.copy(g.normalScale),g.side===un&&x.normalScale.value.negate()),g.displacementMap&&(x.displacementMap.value=g.displacementMap,t(g.displacementMap,x.displacementMapTransform),x.displacementScale.value=g.displacementScale,x.displacementBias.value=g.displacementBias),g.emissiveMap&&(x.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,x.emissiveMapTransform)),g.specularMap&&(x.specularMap.value=g.specularMap,t(g.specularMap,x.specularMapTransform)),g.alphaTest>0&&(x.alphaTest.value=g.alphaTest);let v=e.get(g),w=v.envMap,S=v.envMapRotation;w&&(x.envMap.value=w,x.envMapRotation.value.setFromMatrix4(j1.makeRotationFromEuler(S)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&x.envMapRotation.value.premultiply(v0),x.reflectivity.value=g.reflectivity,x.ior.value=g.ior,x.refractionRatio.value=g.refractionRatio),g.lightMap&&(x.lightMap.value=g.lightMap,x.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,x.lightMapTransform)),g.aoMap&&(x.aoMap.value=g.aoMap,x.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,x.aoMapTransform))}function o(x,g){x.diffuse.value.copy(g.color),x.opacity.value=g.opacity,g.map&&(x.map.value=g.map,t(g.map,x.mapTransform))}function a(x,g){x.dashSize.value=g.dashSize,x.totalSize.value=g.dashSize+g.gapSize,x.scale.value=g.scale}function l(x,g,v,w){x.diffuse.value.copy(g.color),x.opacity.value=g.opacity,x.size.value=g.size*v,x.scale.value=w*.5,g.map&&(x.map.value=g.map,t(g.map,x.uvTransform)),g.alphaMap&&(x.alphaMap.value=g.alphaMap,t(g.alphaMap,x.alphaMapTransform)),g.alphaTest>0&&(x.alphaTest.value=g.alphaTest)}function c(x,g){x.diffuse.value.copy(g.color),x.opacity.value=g.opacity,x.rotation.value=g.rotation,g.map&&(x.map.value=g.map,t(g.map,x.mapTransform)),g.alphaMap&&(x.alphaMap.value=g.alphaMap,t(g.alphaMap,x.alphaMapTransform)),g.alphaTest>0&&(x.alphaTest.value=g.alphaTest)}function h(x,g){x.specular.value.copy(g.specular),x.shininess.value=Math.max(g.shininess,1e-4)}function f(x,g){g.gradientMap&&(x.gradientMap.value=g.gradientMap)}function u(x,g){x.metalness.value=g.metalness,g.metalnessMap&&(x.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,x.metalnessMapTransform)),x.roughness.value=g.roughness,g.roughnessMap&&(x.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,x.roughnessMapTransform)),g.envMap&&(x.envMapIntensity.value=g.envMapIntensity)}function d(x,g,v){x.ior.value=g.ior,g.diffuseRoughness>0&&(x.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap&&(x.diffuseRoughnessMap.value=g.diffuseRoughnessMap,t(g.diffuseRoughnessMap,x.diffuseRoughnessMapTransform))),g.sheen>0&&(x.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),x.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(x.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,x.sheenColorMapTransform)),g.sheenRoughnessMap&&(x.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,x.sheenRoughnessMapTransform))),g.clearcoat>0&&(x.clearcoat.value=g.clearcoat,x.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(x.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,x.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(x.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===un&&x.clearcoatNormalScale.value.negate())),g.dispersion>0&&(x.dispersion.value=g.dispersion),g.retroreflectivity>0&&(x.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(x.iridescence.value=g.iridescence,x.iridescenceIOR.value=g.iridescenceIOR,x.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,x.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap&&(x.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,x.iridescenceMapTransform)),g.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),g.transmission>0&&(x.transmission.value=g.transmission,x.transmissionSamplerMap.value=v.texture,x.transmissionSamplerSize.value.set(v.width,v.height),g.transmissionMap&&(x.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,x.transmissionMapTransform)),x.thickness.value=g.thickness,g.thicknessMap&&(x.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=g.attenuationDistance,x.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(x.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(x.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=g.specularIntensity,x.specularColor.value.copy(g.specularColor),g.specularColorMap&&(x.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,x.specularColorMapTransform)),g.specularIntensityMap&&(x.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,x.specularIntensityMapTransform))}function p(x,g){g.matcap&&(x.matcap.value=g.matcap)}function _(x,g){let v=e.get(g).light;x.referencePosition.value.setFromMatrixPosition(v.matrixWorld),x.nearDistance.value=v.shadow.camera.near,x.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function eM(n,e,t,i){let s={},r={};function o(v,w){let S=w.program;i.uniformBlockBinding(v,S,s[v.id])}function a(v,w){let S=s[v.id];S===void 0&&(p(v),S=l(v),s[v.id]=S,v.addEventListener("dispose",x));let C=w.program;i.updateUBOMapping(v,C);let A=e.render.frame;r[v.id]!==A&&(c(v),r[v.id]=A)}function l(v){let w=n.createBuffer(),S=v.__size,C=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,w),n.bufferData(n.UNIFORM_BUFFER,S,C),n.bindBuffer(n.UNIFORM_BUFFER,null),w}function c(v){let w=s[v.id],S=v.uniforms,C=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,w);for(let A=0,m=S.length;A<m;A++){let b=S[A];if(Array.isArray(b))for(let P=0,M=b.length;P<M;P++)h(b[P],A,P,C);else h(b,A,0,C)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function h(v,w,S,C){if(u(v,w,S,C)===!0){let A=v.__offset,m=v.value;if(Array.isArray(m)){let b=0;for(let P=0;P<m.length;P++){let M=m[P],E=_(M,!0);f(M,v.__data,b),b+=E.storage/Float32Array.BYTES_PER_ELEMENT}}else f(m,v.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,A,v.__data)}}function f(v,w,S){typeof v=="number"||typeof v=="boolean"?w[S]=v:v.isMatrix3?(w[S]=v.elements[0],w[S+1]=v.elements[1],w[S+2]=v.elements[2],w[S+3]=0,w[S+4]=v.elements[3],w[S+5]=v.elements[4],w[S+6]=v.elements[5],w[S+7]=0,w[S+8]=v.elements[6],w[S+9]=v.elements[7],w[S+10]=v.elements[8],w[S+11]=0):ArrayBuffer.isView(v)?w.set(v.subarray(0,w.length-S),S):v.toArray(w,S)}function u(v,w,S,C){let A=v.value,m=w+"_"+S;if(Array.isArray(A)){C[m]===void 0&&(C[m]=[]);let b=C[m],P=!1;for(let M=0;M<A.length;M++)d(A[M],b,M)===!0&&(P=!0);return P}return d(A,C,m)}function d(v,w,S){if(w[S]===void 0)return typeof v=="number"||typeof v=="boolean"?w[S]=v:ArrayBuffer.isView(v)?w[S]=v.slice():w[S]=v.clone(),!0;{let C=w[S];if(typeof v=="number"||typeof v=="boolean"){if(C!==v)return w[S]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(C.equals(v)===!1)return C.copy(v),!0}}return!1}function p(v){let w=v.uniforms,S=0,C=16;for(let m=0,b=w.length;m<b;m++){let P=Array.isArray(w[m])?w[m]:[w[m]];for(let M=0,E=P.length;M<E;M++){let R=P[M],y=Array.isArray(R.value)?R.value:[R.value],T=Array.isArray(w[m])||Array.isArray(R.value),I=S;for(let z=0,B=y.length;z<B;z++){let F=y[z],U=_(F,T),V=S%C,$=V%U.boundary,ee=V+$;S+=$,ee!==0&&C-ee<U.storage&&(S+=C-ee),z===0&&(I=S),S+=U.storage}let N=R.type==="int"?Int32Array:R.type==="uint"?Uint32Array:Float32Array;R.__data=new N((S-I)/Float32Array.BYTES_PER_ELEMENT),R.__offset=I}}let A=S%C;return A>0&&(S+=C-A),v.__size=S,v.__cache={},this}function _(v,w){let S={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(S.boundary=4,S.storage=4):v.isVector2?(S.boundary=8,S.storage=8):v.isVector3||v.isColor?(S.boundary=16,S.storage=12):v.isVector4?(S.boundary=16,S.storage=16):v.isMatrix3?(S.boundary=16,S.storage=48):v.isMatrix4?(S.boundary=16,S.storage=64):v.isTexture?qe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(S.boundary=16,S.storage=v.byteLength):qe("WebGLRenderer: Unsupported uniform value type.",v),w===!0&&(S.boundary=16,S.storage=Math.ceil(S.storage/16)*16),S}function x(v){let w=v.target;w.removeEventListener("dispose",x),n.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function g(){for(let v in s)n.deleteBuffer(s[v]);s={},r={}}return{bind:o,update:a,dispose:g}}var tM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Fi=null;function nM(){return Fi===null&&(Fi=new Ws(tM,16,16,Ss,Mi),Fi.name="DFG_LUT",Fi.minFilter=Mn,Fi.magFilter=Mn,Fi.wrapS=Ti,Fi.wrapT=Ti,Fi.generateMipmaps=!1,Fi.needsUpdate=!0),Fi}var er=class{constructor(e={}){let{canvas:t=Ap(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:u=!1,outputBufferType:d=On}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;let _=d,x=new Set([ec,Ql,jl]),g=new Set([On,vi,Xr,js,Zl,Kl]),v=new Uint32Array(4),w=new Int32Array(4),S={textures:[],min:[],max:[],resolution:[]},C=null,A=null,m=[],b=[],P=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ui,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let M=this,E=!1,R=null,y=null,T=null,I=null;this._outputColorSpace=cn;let N=0,z=0,B=null,F=-1,U=null,V=new Dt,$=new Dt,ee=null,H=new We(0),K=0,Q=t.width,he=t.height,ie=1,ce=null,Le=null,Ce=new Dt(0,0,Q,he),Ne=new Dt(0,0,Q,he),Ye=!1,oe=new gs,me=new bl,de=!1,Ee=!1,_e=new vt,Xe=new W,ke=new Dt,ht={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ft=!1;function _t(){return B===null?ie:1}let Y=i;function sn(D,q){return t.getContext(D,q)}let lt,Et,Se,$t,Ge,Je,k,L,J,ue,le,xe,we,se,re,ve,G,ae,ne,Me,ge,ye,Be;try{let D={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",Ve,!1),t.addEventListener("webglcontextrestored",tt,!1),t.addEventListener("webglcontextcreationerror",Ae,!1),Y===null){let q="webgl2";if(Y=sn(q,D),Y===null)throw sn(q)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}it()}catch(D){throw t.removeEventListener("webglcontextlost",Ve,!1),t.removeEventListener("webglcontextrestored",tt,!1),t.removeEventListener("webglcontextcreationerror",Ae,!1),$e("WebGLRenderer: "+D.message),D}function it(){lt=new dv(Y),lt.init(),ge=new Z1(Y,lt),Et=new nv(Y,lt,e,ge),Se=new Y1(Y,lt),Et.reversedDepthBuffer&&u&&Se.buffers.depth.setReversed(!0),y=Y.createFramebuffer(),T=Y.createFramebuffer(),I=Y.createFramebuffer(),$t=new gv(Y),Ge=new N1,Je=new $1(Y,lt,Se,Ge,Et,ge,$t),k=new fv(M),L=new yx(Y),ye=new ev(Y,L),J=new pv(Y,L,$t,ye),ue=new yv(Y,J,L,ye,$t),ae=new xv(Y,Et,Je),re=new iv(Ge),le=new L1(M,k,lt,Et,ye,re),xe=new Q1(M,Ge),we=new U1,se=new H1(lt),G=new Q_(M,k,Se,ue,p,l),ve=new q1(M,ue,Et),Be=new eM(Y,$t,Et,Se),ne=new tv(Y,lt,$t),Me=new mv(Y,lt,$t),$t.programs=le.programs,M.capabilities=Et,M.extensions=lt,M.properties=Ge,M.renderLists=we,M.shadowMap=ve,M.state=Se,M.info=$t}_!==On&&(P=new vv(_,t.width,t.height,a,s,r));let pe=new Yu(M,Y);this.xr=pe,this.getContext=function(){return Y},this.getContextAttributes=function(){return Y.getContextAttributes()},this.forceContextLoss=function(){let D=lt.get("WEBGL_lose_context");D&&D.loseContext()},this.forceContextRestore=function(){let D=lt.get("WEBGL_lose_context");D&&D.restoreContext()},this.getPixelRatio=function(){return ie},this.setPixelRatio=function(D){D!==void 0&&(ie=D,this.setSize(Q,he,!1))},this.getSize=function(D){return D.set(Q,he)},this.setSize=function(D,q,te=!0){if(pe.isPresenting){qe("WebGLRenderer: Can't change size while VR device is presenting.");return}Q=D,he=q,t.width=Math.floor(D*ie),t.height=Math.floor(q*ie),te===!0&&(t.style.width=D+"px",t.style.height=q+"px"),P!==null&&P.setSize(t.width,t.height),this.setViewport(0,0,D,q)},this.getDrawingBufferSize=function(D){return D.set(Q*ie,he*ie).floor()},this.setDrawingBufferSize=function(D,q,te){Q=D,he=q,ie=te,t.width=Math.floor(D*te),t.height=Math.floor(q*te),this.setViewport(0,0,D,q)},this.setEffects=function(D){if(_===On){$e("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(D){for(let q=0;q<D.length;q++)if(D[q].isOutputPass===!0){qe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}P.setEffects(D||[])},this.getCurrentViewport=function(D){return D.copy(V)},this.getViewport=function(D){return D.copy(Ce)},this.setViewport=function(D,q,te,Z){D.isVector4?Ce.set(D.x,D.y,D.z,D.w):Ce.set(D,q,te,Z),Se.viewport(V.copy(Ce).multiplyScalar(_t()).round())},this.getScissor=function(D){return D.copy(Ne)},this.setScissor=function(D,q,te,Z){D.isVector4?Ne.set(D.x,D.y,D.z,D.w):Ne.set(D,q,te,Z),Se.scissor($.copy(Ne).multiplyScalar(_t()).round())},this.getScissorTest=function(){return Ye},this.setScissorTest=function(D){Se.setScissorTest(Ye=D)},this.setOpaqueSort=function(D){ce=D},this.setTransparentSort=function(D){Le=D},this.getClearColor=function(D){return D.copy(G.getClearColor())},this.setClearColor=function(){G.setClearColor(...arguments)},this.getClearAlpha=function(){return G.getClearAlpha()},this.setClearAlpha=function(){G.setClearAlpha(...arguments)},this.clear=function(D=!0,q=!0,te=!0){let Z=0;if(D){let j=!1;if(B!==null){let Te=B.texture.format;j=x.has(Te)}if(j){let Te=B.texture.type,De=g.has(Te),be=G.getClearColor(),Pe=G.getClearAlpha(),Oe=be.r,Qe=be.g,dt=be.b;De?(v[0]=Oe,v[1]=Qe,v[2]=dt,v[3]=Pe,Y.clearBufferuiv(Y.COLOR,0,v)):(w[0]=Oe,w[1]=Qe,w[2]=dt,w[3]=Pe,Y.clearBufferiv(Y.COLOR,0,w))}else Z|=Y.COLOR_BUFFER_BIT}q&&(Z|=Y.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),te&&(Z|=Y.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Z!==0&&Y.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(D){D.setRenderer(this),R=D},this.dispose=function(){t.removeEventListener("webglcontextlost",Ve,!1),t.removeEventListener("webglcontextrestored",tt,!1),t.removeEventListener("webglcontextcreationerror",Ae,!1),G.dispose(),we.dispose(),se.dispose(),Je.dispose(),Ge.dispose(),k.dispose(),ue.dispose(),J.dispose(),ye.dispose(),Be.dispose(),le.dispose(),pe.dispose(),pe.removeEventListener("sessionstart",od),pe.removeEventListener("sessionend",ad),Fs.stop()};function Ve(D){D.preventDefault(),Eo("WebGLRenderer: Context Lost."),E=!0}function tt(){Eo("WebGLRenderer: Context Restored."),E=!1;let D=$t.autoReset,q=ve.enabled,te=ve.autoUpdate,Z=ve.needsUpdate,j=ve.type;it(),$t.autoReset=D,ve.enabled=q,ve.autoUpdate=te,ve.needsUpdate=Z,ve.type=j}function Ae(D){$e("WebGLRenderer: A WebGL context could not be created. Reason: ",D.statusMessage)}function wt(D){let q=D.target;q.removeEventListener("dispose",wt),mn(q)}function mn(D){as(D),Ge.remove(D)}function as(D){let q=Ge.get(D).programs;q!==void 0&&(q.forEach(function(te){le.releaseProgram(te)}),D.isShaderMaterial&&le.releaseShaderCache(D))}this.renderBufferDirect=function(D,q,te,Z,j,Te){q===null&&(q=ht);let De=j.isMesh&&j.matrixWorld.determinantAffine()<0,be=ng(D,q,te,Z,j);Se.setMaterial(Z,De);let Pe=te.index,Oe=1;if(Z.wireframe===!0){if(Pe=J.getWireframeAttribute(te),Pe===void 0)return;Oe=2}let Qe=te.drawRange,dt=te.attributes.position,Ue=Qe.start*Oe,pt=(Qe.start+Qe.count)*Oe;Te!==null&&(Ue=Math.max(Ue,Te.start*Oe),pt=Math.min(pt,(Te.start+Te.count)*Oe)),Pe!==null?(Ue=Math.max(Ue,0),pt=Math.min(pt,Pe.count)):dt!=null&&(Ue=Math.max(Ue,0),pt=Math.min(pt,dt.count));let rn=pt-Ue;if(rn<0||rn===1/0)return;ye.setup(j,Z,be,te,Pe);let Rt,At=ne;if(Pe!==null&&(Rt=L.get(Pe),At=Me,At.setIndex(Rt)),j.isMesh)Z.wireframe===!0?(Se.setLineWidth(Z.wireframeLinewidth*_t()),At.setMode(Y.LINES)):At.setMode(Y.TRIANGLES);else if(j.isLine){let Tn=Z.linewidth;Tn===void 0&&(Tn=1),Se.setLineWidth(Tn*_t()),j.isLineSegments?At.setMode(Y.LINES):j.isLineLoop?At.setMode(Y.LINE_LOOP):At.setMode(Y.LINE_STRIP)}else j.isPoints?At.setMode(Y.POINTS):j.isSprite&&At.setMode(Y.TRIANGLES);if(j.isBatchedMesh)if(lt.get("WEBGL_multi_draw"))At.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{let Tn=j._multiDrawStarts,Fe=j._multiDrawCounts,Ln=j._multiDrawCount,bt=Pe?L.get(Pe).bytesPerElement:1,Os=Ge.get(Z).currentProgram.getUniforms();for(let En=0;En<Ln;En++)Os.setValue(Y,"_gl_DrawID",En),At.render(Tn[En]/bt,Fe[En])}else if(j.isInstancedMesh)At.renderInstances(Ue,rn,j.count);else if(te.isInstancedBufferGeometry){let Tn=te._maxInstanceCount!==void 0?te._maxInstanceCount:1/0,Fe=Math.min(te.instanceCount,Tn);At.renderInstances(Ue,rn,Fe)}else At.render(Ue,rn)};function rd(D,q,te,Z){R!==null&&D.isNodeMaterial&&R.setObject(Z,D),de===!0&&re.setState(D,te,!1),D.transparent===!0&&D.side===si&&D.forceSinglePass===!1?(D.side=un,D.needsUpdate=!0,ao(D,q,Z),D.side=Di,D.needsUpdate=!0,ao(D,q,Z),D.side=si):ao(D,q,Z)}this.compile=function(D,q,te=null){te===null&&(te=D),R!==null&&R.renderStart(D,q,te),A=se.get(te),A.init(q),b.push(A),te.traverseVisible(function(j){j.isLight&&j.layers.test(q.layers)&&(A.pushLight(j),j.castShadow&&A.pushShadow(j))}),D!==te&&D.traverseVisible(function(j){j.isLight&&j.layers.test(q.layers)&&(A.pushLight(j),j.castShadow&&A.pushShadow(j))}),A.setupLights(),R!==null&&R.updateLights(A.state.lightsArray),Ee=this.localClippingEnabled,de=re.init(this.clippingPlanes,Ee),de===!0&&re.setGlobalState(this.clippingPlanes,q),R!==null&&ve.render(A.state.shadowsArray,te,q);let Z=new Set;return D.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;let Te=j.material;if(Te)if(Array.isArray(Te))for(let De=0;De<Te.length;De++){let be=Te[De];rd(be,te,q,j),Z.add(be)}else rd(Te,te,q,j),Z.add(Te)}),A=b.pop(),R!==null&&R.renderEnd(),Z},this.compileAsync=function(D,q,te=null){let Z=this.compile(D,q,te);return new Promise(j=>{function Te(){if(Z.forEach(function(De){let Pe=Ge.get(De).currentProgram;(Pe===void 0||Pe.isReady())&&Z.delete(De)}),Z.size===0){j(D);return}setTimeout(Te,10)}lt.get("KHR_parallel_shader_compile")!==null?Te():setTimeout(Te,10)})};let Sh=null;function eg(D){Sh&&Sh(D)}function od(){Fs.stop()}function ad(){Fs.start()}let Fs=new h0;Fs.setAnimationLoop(eg),typeof self<"u"&&Fs.setContext(self),this.setAnimationLoop=function(D){Sh=D,pe.setAnimationLoop(D),D===null?Fs.stop():Fs.start()},pe.addEventListener("sessionstart",od),pe.addEventListener("sessionend",ad),this.render=function(D,q){if(q!==void 0&&q.isCamera!==!0){$e("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;R!==null&&R.renderStart(D,q);let te=pe.enabled===!0&&pe.isPresenting===!0,Z=P!==null&&(B===null||te)&&P.begin(M,B);if(D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),pe.enabled===!0&&pe.isPresenting===!0&&(P===null||P.isCompositing()===!1)&&(pe.cameraAutoUpdate===!0&&pe.updateCamera(q),q=pe.getCamera()),D.isScene===!0&&D.onBeforeRender(M,D,q,B),A=se.get(D,b.length),A.init(q),A.state.textureUnits=Je.getTextureUnits(),b.push(A),_e.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),q.isArrayCamera?me.setFromArrayCamera(q):oe.setFromProjectionMatrix(_e,ei,q.reversedDepth),Ee=this.localClippingEnabled,de=re.init(this.clippingPlanes,Ee),C=we.get(D,m.length),C.init(),m.push(C),this.info.render.frame++,pe.enabled===!0&&pe.isPresenting===!0){let De=M.xr.getDepthSensingMesh();De!==null&&wh(De,q,-1/0,M.sortObjects)}wh(D,q,0,M.sortObjects),C.finish(),R!==null&&R.updateLights(A.state.lightsArray),M.sortObjects===!0&&C.sort(ce,Le),ft=pe.enabled===!1||pe.isPresenting===!1||pe.hasDepthSensing()===!1,ft&&G.addToRenderList(C,D),this.info.autoReset===!0&&this.info.reset(),de===!0&&re.beginShadows();let j=A.state.shadowsArray;if(ve.render(j,D,q),de===!0&&re.endShadows(),(Z&&P.hasRenderPass())===!1){let De=C.opaque,be=C.transmissive;if(A.setupLights(),q.isArrayCamera){let Pe=q.cameras;if(be.length>0)for(let Oe=0,Qe=Pe.length;Oe<Qe;Oe++){let dt=Pe[Oe];cd(De,be,D,dt)}ft&&G.render(D);for(let Oe=0,Qe=Pe.length;Oe<Qe;Oe++){let dt=Pe[Oe];ld(C,D,dt,dt.viewport)}}else be.length>0&&cd(De,be,D,q),ft&&G.render(D),ld(C,D,q)}B!==null&&z===0&&(Je.updateMultisampleRenderTarget(B),Je.updateRenderTargetMipmap(B)),Z&&P.end(M),D.isScene===!0&&D.onAfterRender(M,D,q),ye.resetDefaultState(),F=-1,U=null,b.pop(),b.length>0?(A=b[b.length-1],Je.setTextureUnits(A.state.textureUnits),de===!0&&re.setGlobalState(M.clippingPlanes,A.state.camera)):A=null,m.pop(),m.length>0?C=m[m.length-1]:C=null,R!==null&&R.renderEnd()};function wh(D,q,te,Z){if(D.visible===!1)return;if(D.layers.test(q.layers)){if(D.isGroup)te=D.renderOrder;else if(D.isLOD)D.autoUpdate===!0&&D.update(q);else if(D.isLight)A.pushLight(D),D.castShadow&&A.pushShadow(D);else if(D.isSprite){let De=q.isArrayCamera?me:oe;if(!D.frustumCulled||D.intersectsFrustum(De)){Z&&ke.setFromMatrixPosition(D.matrixWorld).applyMatrix4(_e);let be=ue.update(D),Pe=D.material;Pe.visible&&C.push(D,be,Pe,te,ke.z,null,q)}}else if(D.isMesh||D.isLine||D.isPoints){let De=q.isArrayCamera?me:oe;if(!D.frustumCulled||D.intersectsFrustum(De)){let be=ue.update(D),Pe=D.material;if(Z&&(D.boundingSphere!==void 0?(D.boundingSphere===null&&D.computeBoundingSphere(),ke.copy(D.boundingSphere.center)):(be.boundingSphere===null&&be.computeBoundingSphere(),ke.copy(be.boundingSphere.center)),ke.applyMatrix4(D.matrixWorld).applyMatrix4(_e)),Array.isArray(Pe)){let Oe=be.groups;for(let Qe=0,dt=Oe.length;Qe<dt;Qe++){let Ue=Oe[Qe],pt=Pe[Ue.materialIndex];pt&&pt.visible&&C.push(D,be,pt,te,ke.z,Ue,q)}}else Pe.visible&&C.push(D,be,Pe,te,ke.z,null,q)}}}let Te=D.children;for(let De=0,be=Te.length;De<be;De++)wh(Te[De],q,te,Z)}function ld(D,q,te,Z){let{opaque:j,transmissive:Te,transparent:De}=D;A.setupLightsView(te),de===!0&&re.setGlobalState(M.clippingPlanes,te),Z&&Se.viewport(V.copy(Z)),j.length>0&&La(j,q,te),Te.length>0&&La(Te,q,te),De.length>0&&La(De,q,te),Se.buffers.depth.setTest(!0),Se.buffers.depth.setMask(!0),Se.buffers.color.setMask(!0),Se.setPolygonOffset(!1)}function cd(D,q,te,Z){if((te.isScene===!0?te.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[Z.id]===void 0){let Ue=lt.has("EXT_color_buffer_half_float")||lt.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[Z.id]=new Xn(1,1,{generateMipmaps:!0,type:Ue?Mi:On,minFilter:_i,samples:Math.max(4,Et.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:mt.workingColorSpace})}let Te=A.state.transmissionRenderTarget[Z.id],De=Z.viewport||V;Te.setSize(De.z*M.transmissionResolutionScale,De.w*M.transmissionResolutionScale);let be=M.getRenderTarget(),Pe=M.getActiveCubeFace(),Oe=M.getActiveMipmapLevel();M.setRenderTarget(Te),M.getClearColor(H),K=M.getClearAlpha(),K<1&&M.setClearColor(16777215,.5),M.clear(),ft&&G.render(te);let Qe=M.toneMapping;M.toneMapping=Ui;let dt=Z.viewport;if(Z.viewport!==void 0&&(Z.viewport=void 0),A.setupLightsView(Z),de===!0&&re.setGlobalState(M.clippingPlanes,Z),La(D,te,Z),Je.updateMultisampleRenderTarget(Te),Je.updateRenderTargetMipmap(Te),lt.has("WEBGL_multisampled_render_to_texture")===!1){let Ue=!1;for(let pt=0,rn=q.length;pt<rn;pt++){let Rt=q[pt],{object:At,geometry:Tn,material:Fe,group:Ln}=Rt;if(Fe.side===si&&At.layers.test(Z.layers)){let bt=Fe.side;Fe.side=un,Fe.needsUpdate=!0,hd(At,te,Z,Tn,Fe,Ln),Fe.side=bt,Fe.needsUpdate=!0,Ue=!0}}Ue===!0&&(Je.updateMultisampleRenderTarget(Te),Je.updateRenderTargetMipmap(Te))}M.setRenderTarget(be,Pe,Oe),M.setClearColor(H,K),dt!==void 0&&(Z.viewport=dt),M.toneMapping=Qe}function La(D,q,te){let Z=q.isScene===!0?q.overrideMaterial:null;for(let j=0,Te=D.length;j<Te;j++){let De=D[j],{object:be,geometry:Pe,group:Oe}=De,Qe=De.material;Qe.allowOverride===!0&&Z!==null&&(Qe=Z),be.layers.test(te.layers)&&hd(be,q,te,Pe,Qe,Oe)}}function hd(D,q,te,Z,j,Te){R!==null&&j.isNodeMaterial&&R.setObject(D,j),D.onBeforeRender(M,q,te,Z,j,Te),D.modelViewMatrix.multiplyMatrices(te.matrixWorldInverse,D.matrixWorld),D.normalMatrix.getNormalMatrix(D.modelViewMatrix),j.onBeforeRender(M,q,te,Z,D,Te),j.transparent===!0&&j.side===si&&j.forceSinglePass===!1?(j.side=un,j.needsUpdate=!0,M.renderBufferDirect(te,q,Z,j,D,Te),j.side=Di,j.needsUpdate=!0,M.renderBufferDirect(te,q,Z,j,D,Te),j.side=si):M.renderBufferDirect(te,q,Z,j,D,Te),D.onAfterRender(M,q,te,Z,j,Te)}function ud(D){let q=0;for(let te of D)te.texture!==null&&q++;return q}function ao(D,q,te){q.isScene!==!0&&(q=ht);let Z=Ge.get(D),j=A.state.lights,Te=A.state.shadowsArray,De=j.state.version,be=le.getParameters(D,j.state,Te,q,te,A.state.lightProbeGridArray),Pe=le.getProgramCacheKey(be),Oe=Z.programs;Z.environment=D.isMeshStandardMaterial||D.isMeshLambertMaterial||D.isMeshPhongMaterial?q.environment:null,Z.fog=q.fog;let Qe=D.isMeshStandardMaterial||D.isMeshLambertMaterial&&!D.envMap||D.isMeshPhongMaterial&&!D.envMap;Z.envMap=k.get(D.envMap||Z.environment,Qe),Z.envMapRotation=Z.environment!==null&&D.envMap===null?q.environmentRotation:D.envMapRotation,Oe===void 0&&(D.addEventListener("dispose",wt),Oe=new Map,Z.programs=Oe,Z.programVariants=new Map);let dt=Oe.get(Pe);if(dt!==void 0){if(Z.currentProgram===dt&&Z.lightsStateVersion===De)return dd(D,be),dt}else be.uniforms=le.getUniforms(D),R!==null&&D.isNodeMaterial&&R.build(D,te,be),D.onBeforeCompile(be,M),dt=le.acquireProgram(be,Pe),Oe.set(Pe,dt),Z.uniforms=be.uniforms;let Ue=Z.uniforms;return(!D.isShaderMaterial&&!D.isRawShaderMaterial||D.clipping===!0)&&(Ue.clippingPlanes=re.uniform),dd(D,be),Z.needsLights=sg(D),Z.lightsStateVersion=De,Z.needsLights&&(Ue.ambientLightColor.value=j.state.ambient,Ue.lightProbe.value=j.state.probe,Ue.sunLights.value=j.state.sun,Ue.sunLightShadows.value=j.state.sunShadow,Ue.directionalLights.value=j.state.directional,Ue.directionalLightShadows.value=j.state.directionalShadow,Ue.spotLights.value=j.state.spot,Ue.spotLightShadows.value=j.state.spotShadow,Ue.rectAreaLights.value=j.state.rectArea,Ue.ltc_1.value=j.state.rectAreaLTC1,Ue.ltc_2.value=j.state.rectAreaLTC2,Ue.pointLights.value=j.state.point,Ue.pointLightShadows.value=j.state.pointShadow,Ue.hemisphereLights.value=j.state.hemi,Ue.sunShadowMatrix.value=j.state.sunShadowMatrix,Ue.sunShadowCascade.value=j.state.sunShadowCascade,Ue.directionalShadowMatrix.value=j.state.directionalShadowMatrix,Ue.spotLightMatrix.value=j.state.spotLightMatrix,Ue.spotLightMap.value=j.state.spotLightMap,Ue.pointShadowMatrix.value=j.state.pointShadowMatrix),Z.numLightProbeGrids=ud(A.state.lightProbeGridArray),Z.currentProgram=dt,Z.uniformsList=null,dt}function tg(D,q,te,Z,j){let Te=Ge.get(D),De=Te.currentProgram.id+","+Z+","+j,be=Te.programVariants.get(De);return be===void 0?(be=ao(D,q,te),Te.programVariants.set(De,be)):(Te.currentProgram=be,Te.uniformsList=null,Te.outputColorSpace=Z,Te.toneMapping=j),be}function fd(D){if(D.uniformsList===null){let q=D.currentProgram.getUniforms();D.uniformsList=Yr.seqWithValue(q.seq,D.uniforms)}return D.uniformsList}function dd(D,q){let te=Ge.get(D);te.outputColorSpace=q.outputColorSpace,te.batching=q.batching,te.batchingColor=q.batchingColor,te.instancing=q.instancing,te.instancingColor=q.instancingColor,te.instancingMorph=q.instancingMorph,te.skinning=q.skinning,te.morphTargets=q.morphTargets,te.morphNormals=q.morphNormals,te.morphColors=q.morphColors,te.morphTargetsCount=q.morphTargetsCount,te.numClippingPlanes=q.numClippingPlanes,te.numIntersection=q.numClipIntersection,te.vertexAlphas=q.vertexAlphas,te.vertexTangents=q.vertexTangents,te.toneMapping=q.toneMapping}function ng(D,q,te,Z,j){q.isScene!==!0&&(q=ht),Je.resetTextureUnits();let Te=q.fog,De=Z.isMeshStandardMaterial||Z.isMeshLambertMaterial||Z.isMeshPhongMaterial?q.environment:null,be=B===null?M.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:mt.workingColorSpace,Pe=Z.isMeshStandardMaterial||Z.isMeshLambertMaterial&&!Z.envMap||Z.isMeshPhongMaterial&&!Z.envMap,Oe=k.get(Z.envMap||De,Pe),Qe=Z.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,dt=!!te.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),Ue=!!te.morphAttributes.position,pt=!!te.morphAttributes.normal,rn=!!te.morphAttributes.color,Rt=Ui;Z.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(Rt=M.toneMapping);let At=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,Tn=At!==void 0?At.length:0,Fe=Ge.get(Z),Ln=A.state.lights;if(de===!0&&(Ee===!0||D!==U)){let Bt=D===U&&Z.id===F;re.setState(Z,D,Bt)}let bt=!1,Os=!1;Z.version===Fe.__version?Fe.needsLights&&Fe.lightsStateVersion!==Ln.state.version||j.isBatchedMesh&&Fe.batching===!1||!j.isBatchedMesh&&Fe.batching===!0||j.isBatchedMesh&&Fe.batchingColor===!0&&j._colorsTexture===null||j.isBatchedMesh&&Fe.batchingColor===!1&&j._colorsTexture!==null||j.isInstancedMesh&&Fe.instancing===!1||!j.isInstancedMesh&&Fe.instancing===!0||j.isSkinnedMesh&&Fe.skinning===!1||!j.isSkinnedMesh&&Fe.skinning===!0||j.isInstancedMesh&&Fe.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&Fe.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&Fe.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&Fe.instancingMorph===!1&&j.morphTexture!==null||Fe.envMap!==Oe||Z.fog===!0&&Fe.fog!==Te||Fe.numClippingPlanes!==void 0&&(Fe.numClippingPlanes!==re.numPlanes||Fe.numIntersection!==re.numIntersection)||Fe.vertexAlphas!==Qe||Fe.vertexTangents!==dt||Fe.morphTargets!==Ue||Fe.morphNormals!==pt||Fe.morphColors!==rn||Fe.morphTargetsCount!==Tn||Fe.numLightProbeGrids!==ud(A.state.lightProbeGridArray)?bt=!0:(Fe.outputColorSpace!==be||Fe.toneMapping!==Rt)&&(Os=!0):(bt=!0,Fe.__version=Z.version);let En=Fe.currentProgram;(bt===!0||Os===!0)&&(En=Os===!0?tg(Z,q,j,be,Rt):ao(Z,q,j),R&&Z.isNodeMaterial&&R.onUpdateProgram(Z,En,Fe));let Na=!1,ls=!1,zs=!1,yt=En.getUniforms(),vn=Fe.uniforms;if(Se.useProgram(En.program)&&(Na=!0,ls=!0,zs=!0),Z.id!==F&&(F=Z.id,ls=!0),Na||U!==D){Se.buffers.depth.getReversed()&&D.reversedDepth!==!0&&(D._reversedDepth=!0,D.updateProjectionMatrix()),yt.setValue(Y,"projectionMatrix",D.projectionMatrix),yt.setValue(Y,"viewMatrix",D.matrixWorldInverse);let gn=yt.map.cameraPosition;gn!==void 0&&gn.setValue(Y,Xe.setFromMatrixPosition(D.matrixWorld)),Et.logarithmicDepthBuffer&&yt.setValue(Y,"logDepthBufFC",2/(Math.log(D.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&yt.setValue(Y,"isOrthographic",D.isOrthographicCamera===!0),U!==D&&(U=D,ls=!0,zs=!0)}if(Fe.needsLights&&(Ln.state.sunShadowMap.length>0&&yt.setValue(Y,"sunShadowMap",Ln.state.sunShadowMap,Je),Ln.state.directionalShadowMap.length>0&&yt.setValue(Y,"directionalShadowMap",Ln.state.directionalShadowMap,Je),Ln.state.spotShadowMap.length>0&&yt.setValue(Y,"spotShadowMap",Ln.state.spotShadowMap,Je),Ln.state.pointShadowMap.length>0&&yt.setValue(Y,"pointShadowMap",Ln.state.pointShadowMap,Je)),j.isSkinnedMesh){yt.setOptional(Y,j,"bindMatrix"),yt.setOptional(Y,j,"bindMatrixInverse");let Bt=j.skeleton;Bt&&(Bt.boneTexture===null&&Bt.computeBoneTexture(),yt.setValue(Y,"boneTexture",Bt.boneTexture,Je))}j.isBatchedMesh&&(yt.setOptional(Y,j,"batchingTexture"),yt.setValue(Y,"batchingTexture",j._matricesTexture,Je),yt.setOptional(Y,j,"batchingIdTexture"),yt.setValue(Y,"batchingIdTexture",j._indirectTexture,Je),yt.setOptional(Y,j,"batchingColorTexture"),j._colorsTexture!==null&&yt.setValue(Y,"batchingColorTexture",j._colorsTexture,Je));let fi=te.morphAttributes;if((fi.position!==void 0||fi.normal!==void 0||fi.color!==void 0)&&ae.update(j,te,En),(ls||Fe.receiveShadow!==j.receiveShadow)&&(Fe.receiveShadow=j.receiveShadow,yt.setValue(Y,"receiveShadow",j.receiveShadow)),(Z.isMeshStandardMaterial||Z.isMeshLambertMaterial||Z.isMeshPhongMaterial)&&Z.envMap===null&&q.environment!==null&&(vn.envMapIntensity.value=q.environmentIntensity),vn.dfgLUT!==void 0&&(vn.dfgLUT.value=nM()),ls){if(yt.setValue(Y,"toneMappingExposure",M.toneMappingExposure),Fe.needsLights&&ig(vn,zs),Te&&Z.fog===!0&&xe.refreshFogUniforms(vn,Te),xe.refreshMaterialUniforms(vn,Z,ie,he,A.state.transmissionRenderTarget[D.id]),Fe.needsLights&&Fe.numLightProbeGrids>0){let Bt=S,gn=0;for(let Vi of A.state.lightProbeGridArray)Vi.texture!==null&&(Bt.textures[gn]=Vi.texture,Bt.min[gn]=Vi.boundingBox.min,Bt.max[gn]=Vi.boundingBox.max,Bt.resolution[gn]=Vi.resolution,gn++);for(let Vi in Bt)Bt[Vi].length=gn;vn.probesSH.value=Bt.textures,vn.probesMin.value=Bt.min,vn.probesMax.value=Bt.max,vn.probesResolution.value=Bt.resolution}Yr.upload(Y,fd(Fe),vn,Je)}if(Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(Yr.upload(Y,fd(Fe),vn,Je),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&yt.setValue(Y,"center",j.center),yt.setValue(Y,"modelViewMatrix",j.modelViewMatrix),yt.setValue(Y,"normalMatrix",j.normalMatrix),yt.setValue(Y,"modelMatrix",j.matrixWorld),Z.uniformsGroups!==void 0){let Bt=Z.uniformsGroups;for(let gn=0,Vi=Bt.length;gn<Vi;gn++){let md=Bt[gn];Be.update(md,En),Be.bind(md,En)}}return En}function ig(D,q){D.ambientLightColor.needsUpdate=q,D.lightProbe.needsUpdate=q,D.sunLights.needsUpdate=q,D.sunLightShadows.needsUpdate=q,D.directionalLights.needsUpdate=q,D.directionalLightShadows.needsUpdate=q,D.pointLights.needsUpdate=q,D.pointLightShadows.needsUpdate=q,D.spotLights.needsUpdate=q,D.spotLightShadows.needsUpdate=q,D.rectAreaLights.needsUpdate=q,D.hemisphereLights.needsUpdate=q}function sg(D){return D.isMeshLambertMaterial||D.isMeshToonMaterial||D.isMeshPhongMaterial||D.isMeshStandardMaterial||D.isShadowMaterial||D.isShaderMaterial&&D.lights===!0}this.getActiveCubeFace=function(){return N},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return B},this.setRenderTargetTextures=function(D,q,te){let Z=Ge.get(D);Z.__autoAllocateDepthBuffer=D.resolveDepthBuffer===!1,Z.__autoAllocateDepthBuffer===!1&&(Z.__useRenderToTexture=!1),Ge.get(D.texture).__webglTexture=q,Ge.get(D.depthTexture).__webglTexture=Z.__autoAllocateDepthBuffer?void 0:te,Z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(D,q){let te=Ge.get(D);te.__webglFramebuffer=q,te.__useDefaultFramebuffer=q===void 0},this.setRenderTarget=function(D,q=0,te=0){B=D,N=q,z=te;let Z=null,j=!1,Te=!1;if(D){let be=Ge.get(D);if(be.__useDefaultFramebuffer!==void 0){Se.bindFramebuffer(Y.FRAMEBUFFER,be.__webglFramebuffer),V.copy(D.viewport),$.copy(D.scissor),ee=D.scissorTest,Se.viewport(V),Se.scissor($),Se.setScissorTest(ee),F=-1;return}else if(be.__webglFramebuffer===void 0)Je.setupRenderTarget(D);else if(be.__hasExternalTextures)Je.rebindTextures(D,Ge.get(D.texture).__webglTexture,Ge.get(D.depthTexture).__webglTexture);else if(D.depthBuffer){let Qe=D.depthTexture;if(be.__boundDepthTexture!==Qe){if(Qe!==null&&Ge.has(Qe)&&(D.width!==Qe.image.width||D.height!==Qe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Je.setupDepthRenderbuffer(D)}}let Pe=D.texture;(Pe.isData3DTexture||Pe.isDataArrayTexture||Pe.isCompressedArrayTexture)&&(Te=!0);let Oe=Ge.get(D).__webglFramebuffer;D.isWebGLCubeRenderTarget?(Array.isArray(Oe[q])?Z=Oe[q][te]:Z=Oe[q],j=!0):D.samples>0&&Je.useMultisampledRTT(D)===!1?Z=Ge.get(D).__webglMultisampledFramebuffer:Array.isArray(Oe)?Z=Oe[te]:Z=Oe,V.copy(D.viewport),$.copy(D.scissor),ee=D.scissorTest}else V.copy(Ce).multiplyScalar(ie).floor(),$.copy(Ne).multiplyScalar(ie).floor(),ee=Ye;if(te!==0&&(Z=y),Se.bindFramebuffer(Y.FRAMEBUFFER,Z)&&Se.drawBuffers(D,Z),Se.viewport(V),Se.scissor($),Se.setScissorTest(ee),j){let be=Ge.get(D.texture);Y.framebufferTexture2D(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_CUBE_MAP_POSITIVE_X+q,be.__webglTexture,te)}else if(Te){let be=q;for(let Pe=0;Pe<D.textures.length;Pe++){let Oe=Ge.get(D.textures[Pe]);Y.framebufferTextureLayer(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0+Pe,Oe.__webglTexture,te,be)}}else if(D!==null&&te!==0){let be=Ge.get(D.texture);Y.framebufferTexture2D(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,be.__webglTexture,te)}F=-1};function pd(D){let q=Ge.get(D);return(q.__readFormat!==D.format||q.__readType!==D.type)&&(q.__readFormat=D.format,q.__readType=D.type,q.__formatReadable=Et.textureFormatReadable(D.format),q.__typeReadable=Et.textureTypeReadable(D.type)),q}this.readRenderTargetPixels=function(D,q,te,Z,j,Te,De,be=0){if(!(D&&D.isWebGLRenderTarget)){$e("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pe=Ge.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&De!==void 0&&(Pe=Pe[De],Array.isArray(Pe)&&(Pe=Pe[0])),Pe){Se.bindFramebuffer(Y.FRAMEBUFFER,Pe);try{let Oe=D.textures[be],Qe=Oe.format,dt=Oe.type;D.textures.length>1&&Y.readBuffer(Y.COLOR_ATTACHMENT0+be);let Ue=pd(Oe);if(Ue.__formatReadable===!1){$e("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ue.__typeReadable===!1){$e("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=D.width-Z&&te>=0&&te<=D.height-j&&Y.readPixels(q,te,Z,j,ge.convert(Qe),ge.convert(dt),Te)}finally{let Oe=B!==null?Ge.get(B).__webglFramebuffer:null;Se.bindFramebuffer(Y.FRAMEBUFFER,Oe)}}},this.readRenderTargetPixelsAsync=async function(D,q,te,Z,j,Te,De,be=0){if(!(D&&D.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pe=Ge.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&De!==void 0&&(Pe=Pe[De],Array.isArray(Pe)&&(Pe=Pe[0])),Pe)if(q>=0&&q<=D.width-Z&&te>=0&&te<=D.height-j){Se.bindFramebuffer(Y.FRAMEBUFFER,Pe);let Oe=D.textures[be],Qe=Oe.format,dt=Oe.type;D.textures.length>1&&Y.readBuffer(Y.COLOR_ATTACHMENT0+be);let Ue=pd(Oe);if(Ue.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ue.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let pt=Y.createBuffer();Y.bindBuffer(Y.PIXEL_PACK_BUFFER,pt),Y.bufferData(Y.PIXEL_PACK_BUFFER,Te.byteLength,Y.STREAM_READ),Y.readPixels(q,te,Z,j,ge.convert(Qe),ge.convert(dt),0),Y.bindBuffer(Y.PIXEL_PACK_BUFFER,null);let rn=B!==null?Ge.get(B).__webglFramebuffer:null;Se.bindFramebuffer(Y.FRAMEBUFFER,rn);let Rt=Y.fenceSync(Y.SYNC_GPU_COMMANDS_COMPLETE,0);return Y.flush(),await Cp(Y,Rt,4),Y.bindBuffer(Y.PIXEL_PACK_BUFFER,pt),Y.getBufferSubData(Y.PIXEL_PACK_BUFFER,0,Te),Y.bindBuffer(Y.PIXEL_PACK_BUFFER,null),Y.deleteBuffer(pt),Y.deleteSync(Rt),Te}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(D,q=null,te=0){let Z=Math.pow(2,-te),j=Math.floor(D.image.width*Z),Te=Math.floor(D.image.height*Z),De=q!==null?q.x:0,be=q!==null?q.y:0;Je.setTexture2D(D,0),Y.copyTexSubImage2D(Y.TEXTURE_2D,te,0,0,De,be,j,Te),Se.unbindTexture()},this.copyTextureToTexture=function(D,q,te=null,Z=null,j=0,Te=0){let De,be,Pe,Oe,Qe,dt,Ue,pt,rn,Rt=D.isCompressedTexture?D.mipmaps[Te]:D.image;if(te!==null)De=te.max.x-te.min.x,be=te.max.y-te.min.y,Pe=te.isBox3?te.max.z-te.min.z:1,Oe=te.min.x,Qe=te.min.y,dt=te.isBox3?te.min.z:0;else{let yt=Math.pow(2,-j);De=Math.floor(Rt.width*yt),be=Math.floor(Rt.height*yt),D.isDataArrayTexture?Pe=Rt.depth:D.isData3DTexture?Pe=Math.floor(Rt.depth*yt):Pe=1,Oe=0,Qe=0,dt=0}Z!==null?(Ue=Z.x,pt=Z.y,rn=Z.z):(Ue=0,pt=0,rn=0);let At=ge.convert(q.format),Tn=ge.convert(q.type),Fe;q.isData3DTexture?(Je.setTexture3D(q,0),Fe=Y.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(Je.setTexture2DArray(q,0),Fe=Y.TEXTURE_2D_ARRAY):(Je.setTexture2D(q,0),Fe=Y.TEXTURE_2D),Se.activeTexture(Y.TEXTURE0),Se.pixelStorei(Y.UNPACK_FLIP_Y_WEBGL,q.flipY),Se.pixelStorei(Y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),Se.pixelStorei(Y.UNPACK_ALIGNMENT,q.unpackAlignment);let Ln=Se.getParameter(Y.UNPACK_ROW_LENGTH),bt=Se.getParameter(Y.UNPACK_IMAGE_HEIGHT),Os=Se.getParameter(Y.UNPACK_SKIP_PIXELS),En=Se.getParameter(Y.UNPACK_SKIP_ROWS),Na=Se.getParameter(Y.UNPACK_SKIP_IMAGES);Se.pixelStorei(Y.UNPACK_ROW_LENGTH,Rt.width),Se.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,Rt.height),Se.pixelStorei(Y.UNPACK_SKIP_PIXELS,Oe),Se.pixelStorei(Y.UNPACK_SKIP_ROWS,Qe),Se.pixelStorei(Y.UNPACK_SKIP_IMAGES,dt);let ls=D.isDataArrayTexture||D.isData3DTexture,zs=q.isDataArrayTexture||q.isData3DTexture;if(D.isDepthTexture){let yt=Ge.get(D),vn=Ge.get(q),fi=Ge.get(yt.__renderTarget),Bt=Ge.get(vn.__renderTarget);Se.bindFramebuffer(Y.READ_FRAMEBUFFER,fi.__webglFramebuffer),Se.bindFramebuffer(Y.DRAW_FRAMEBUFFER,Bt.__webglFramebuffer);for(let gn=0;gn<Pe;gn++)ls&&(Y.framebufferTextureLayer(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Ge.get(D).__webglTexture,j,dt+gn),Y.framebufferTextureLayer(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Ge.get(q).__webglTexture,Te,rn+gn)),Y.blitFramebuffer(Oe,Qe,Oe+De,Qe+be,Ue,pt,Ue+De,pt+be,Y.DEPTH_BUFFER_BIT,Y.NEAREST);Se.bindFramebuffer(Y.READ_FRAMEBUFFER,null),Se.bindFramebuffer(Y.DRAW_FRAMEBUFFER,null)}else if(j!==0||D.isRenderTargetTexture||Ge.has(D)){let yt=Ge.get(D),vn=Ge.get(q);Se.bindFramebuffer(Y.READ_FRAMEBUFFER,T),Se.bindFramebuffer(Y.DRAW_FRAMEBUFFER,I);for(let fi=0;fi<Pe;fi++)ls?Y.framebufferTextureLayer(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,yt.__webglTexture,j,dt+fi):Y.framebufferTexture2D(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,yt.__webglTexture,j),zs?Y.framebufferTextureLayer(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,vn.__webglTexture,Te,rn+fi):Y.framebufferTexture2D(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,vn.__webglTexture,Te),j!==0?Y.blitFramebuffer(Oe,Qe,Oe+De,Qe+be,Ue,pt,Ue+De,pt+be,Y.COLOR_BUFFER_BIT,Y.NEAREST):zs?Y.copyTexSubImage3D(Fe,Te,Ue,pt,rn+fi,Oe,Qe,De,be):Y.copyTexSubImage2D(Fe,Te,Ue,pt,Oe,Qe,De,be);Se.bindFramebuffer(Y.READ_FRAMEBUFFER,null),Se.bindFramebuffer(Y.DRAW_FRAMEBUFFER,null)}else zs?D.isDataTexture||D.isData3DTexture?Y.texSubImage3D(Fe,Te,Ue,pt,rn,De,be,Pe,At,Tn,Rt.data):q.isCompressedArrayTexture?Y.compressedTexSubImage3D(Fe,Te,Ue,pt,rn,De,be,Pe,At,Rt.data):Y.texSubImage3D(Fe,Te,Ue,pt,rn,De,be,Pe,At,Tn,Rt):D.isDataTexture?Y.texSubImage2D(Y.TEXTURE_2D,Te,Ue,pt,De,be,At,Tn,Rt.data):D.isCompressedTexture?Y.compressedTexSubImage2D(Y.TEXTURE_2D,Te,Ue,pt,Rt.width,Rt.height,At,Rt.data):Y.texSubImage2D(Y.TEXTURE_2D,Te,Ue,pt,De,be,At,Tn,Rt);Se.pixelStorei(Y.UNPACK_ROW_LENGTH,Ln),Se.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,bt),Se.pixelStorei(Y.UNPACK_SKIP_PIXELS,Os),Se.pixelStorei(Y.UNPACK_SKIP_ROWS,En),Se.pixelStorei(Y.UNPACK_SKIP_IMAGES,Na),Te===0&&q.generateMipmaps===!0&&q.mipmapsAutoUpdate===!0&&Y.generateMipmap(Fe),Se.unbindTexture()},this.initRenderTarget=function(D){Ge.get(D).__webglFramebuffer===void 0&&Je.setupRenderTarget(D)},this.initTexture=function(D){D.isCubeTexture?Je.setTextureCube(D,0):D.isData3DTexture?Je.setTexture3D(D,0):D.isDataArrayTexture||D.isCompressedArrayTexture?Je.setTexture2DArray(D,0):Je.setTexture2D(D,0),Se.unbindTexture()},this.resetState=function(){N=0,z=0,B=null,Se.reset(),ye.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ei}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=mt._getDrawingBufferColorSpace(e),t.unpackColorSpace=mt._getUnpackColorSpace()}};var Fc=class extends qn{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let e=new Vt;e.deleteAttribute("uv");let t=new yi({side:un}),i=new yi,s=new bs(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new He(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let o=new Un(e,i,6),a=new Ut;a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),a.updateMatrix(),o.setMatrixAt(0,a.matrix),a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),a.updateMatrix(),o.setMatrixAt(1,a.matrix),a.position.set(6.167,.857,7.803),a.rotation.set(0,.561,0),a.scale.set(3.927,6.285,3.687),a.updateMatrix(),o.setMatrixAt(2,a.matrix),a.position.set(-2.017,.018,6.124),a.rotation.set(0,.333,0),a.scale.set(2.002,4.566,2.064),a.updateMatrix(),o.setMatrixAt(3,a.matrix),a.position.set(2.291,-.756,-2.621),a.rotation.set(0,-.286,0),a.scale.set(1.546,1.552,1.496),a.updateMatrix(),o.setMatrixAt(4,a.matrix),a.position.set(-2.193,-.369,-5.547),a.rotation.set(0,.516,0),a.scale.set(3.875,3.487,2.986),a.updateMatrix(),o.setMatrixAt(5,a.matrix),this.add(o);let l=new He(e,Kr(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new He(e,Kr(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let h=new He(e,Kr(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let f=new He(e,Kr(43));f.position.set(-.462,8.89,14.52),f.scale.set(4.38,5.441,.088),this.add(f);let u=new He(e,Kr(20));u.position.set(3.235,11.486,-12.541),u.scale.set(2.5,2,.1),this.add(u);let d=new He(e,Kr(100));d.position.set(0,20,0),d.scale.set(1,.1,1),this.add(d)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function Kr(n){return new Fn({color:0,emissive:16777215,emissiveIntensity:n})}function iM(n,e,t){let i=n.n,s=[];if(n.format==="spans"){let r=null;for(let o=0;o<n.layers;o++){let a=new Uint8Array(i*i),l=new Float32Array(i*i),c=new Float32Array(i*i);o===0&&(r=new Uint8Array(i*i));for(let h=0;h<i;h++)for(let f=0;f<i;f++){let u=h*i+f,d=((2*o*i+h)*t+f)*4,p=(((2*o+1)*i+h)*t+f)*4,_=e[d];_?(a[u]=_-1,l[u]=(e[d+1]<<8|e[d+2])/100-2,c[u]=o===0?-30:(e[p+1]<<8|e[p+2])/100-2):(l[u]=NaN,c[u]=NaN,a[u]=0),o===0&&(r[u]=e[p])}s.push({cls:a,top:l,bot:c})}return s.flags=r,s}for(let r=0;r<n.layers;r++){let o=new Uint8Array(i*i),a=new Float32Array(i*i);for(let l=0;l<i;l++)for(let c=0;c<i;c++){let h=((r*i+l)*t+c)*4,f=l*i+c;o[f]=e[h],a[f]=(e[h+1]<<8|e[h+2])/100-2}s.push({cls:o,h:a})}return s}async function $u(n,e="maps/"){let t=await(await fetch(e+n+".json")).json(),i=new Image;i.src=e+n+".png",await i.decode();let s=document.createElement("canvas");s.width=i.width,s.height=i.height;let r=s.getContext("2d",{willReadFrequently:!0});r.drawImage(i,0,0);let o=r.getImageData(0,0,i.width,i.height).data,a={info:t,layers:iM(t,o,i.width)};return t.mesh&&(a.mesh=new Uint16Array(await(await fetch(e+t.mesh)).arrayBuffer())),a}var Es=n=>Math.round(n/.08)*.08;function Oc(n,e){let t=n.n,i=n.cell,s=e.length,r=t*t;if(n.format==="spans"){let f={n:t,cell:i,L:s,info:n,size:t*i,top:[],bot:[],cls:[],flags:e.flags||new Uint8Array(r),voidKill:!1,imported:!0};for(let u of e)f.top.push(u.top),f.bot.push(u.bot),f.cls.push(u.cls);return f.idx=(u,d)=>{let p=Math.floor(u/i),_=Math.floor(d/i);return p<0||_<0||p>=t||_>=t?-1:_*t+p},f.props=[],f.propCell=[],f}let o=s>1,a={n:t,cell:i,L:s,info:n,size:t*i,top:[],bot:[],cls:[],flags:new Uint8Array(r),voidKill:o},l=new Uint8Array(r);for(let f of e)for(let u=0;u<r;u++){let d=f.cls[u]&3;(d===1||d===2)&&(l[u]=1)}let c=new Uint8Array(r);{let u=new Uint8Array(r);for(let d=0;d<t;d++)for(let p=0;p<t;p++){let _=0;for(let x=-5;x<=5&&!_;x++){let g=p+x;g>=0&&g<t&&l[d*t+g]&&(_=1)}u[d*t+p]=_}for(let d=0;d<t;d++)for(let p=0;p<t;p++){let _=0;for(let x=-5;x<=5&&!_;x++){let g=d+x;g>=0&&g<t&&u[g*t+p]&&(_=1)}c[d*t+p]=_}}let h=!!n.clean;if(!h)for(let f of e)lM(t,f.cls,f.h,o);for(let[f,u,d,p,_,x]of sM[n.id]||[]){let g=e[0];for(let v=u;v<=p;v++)for(let w=f;w<=d;w++){let S=v*t+w,C=d-f>=p-u?w:v;C>=_&&C<=x||((g.cls[S]&3)===1||(g.cls[S]&3)===2)&&(g.cls[S]=g.cls[S]&-4|3)}}if(!h)for(let f of e)cM(t,f.cls,f.h);if(!h)for(let f of e)uM(t,f.cls,f.h);for(let f=0;f<s;f++){let{cls:u,h:d}=e[f],p=new Float32Array(r).fill(NaN),_=new Float32Array(r).fill(NaN),x=new Uint8Array(r),g=o?f===0?3.95:4.6:6.2,v=b0(t,u,d,7),w=hM(t,u,d);for(let S=0;S<r;S++){let C=u[S],A=C&3;a.flags[S]|=C&-4;let m=d[S],b=NaN,P=NaN;if(A===1)b=Es(m);else if(A===2)b=Es(w[S]+1.05);else if(A===3||A===0&&!o&&c[S]){let M=v[S]>-1e8?v[S]:m;b=Es(Math.ceil((M+g)/.6)*.6),o&&(b=Es(M+g))}else A===0&&o&&f===0&&c[S]&&fM(e,S);isNaN(b)||(P=f===0?-30:Es(m)-.36,x[S]=A===0?3:A),p[S]=b,_[S]=P}a.top.push(p),a.bot.push(_),a.cls.push(x)}if(o){let f=a.top[0],u=a.bot[1],d=a.cls[0];for(let p=0;p<r;p++)d[p]===3&&!isNaN(u[p])&&f[p]>u[p]&&(f[p]=u[p])}a.idx=(f,u)=>{let d=Math.floor(f/i),p=Math.floor(u/i);return d<0||p<0||d>=t||p>=t?-1:p*t+d};for(let f=0;f<a.L;f++)rM(a,f);return o||aM(a,e[0]),a}var sM={dust2:[[220,182,254,184,230,242]]};function rM(n,e){let t=n.n,i=n.cell,s=n.cls[e],r=n.top[e],o=n.bot[e];n.props=n.props||[],n.propCell=n.propCell||[];let a=new Int32Array(t*t);n.propCell[e]=a;let l=new Uint8Array(t*t),c=[],h=[];for(let f=0;f<t*t;f++){if(l[f]||s[f]!==2)continue;for(c.length=0,h.length=0,c.push(f),l[f]=1;c.length;){let F=c.pop();h.push(F);let U=F%t,V=(F-U)/t;for(let $ of[U>0?F-1:-1,U<t-1?F+1:-1,V>0?F-t:-1,V<t-1?F+t:-1])$>=0&&!l[$]&&s[$]===2&&(l[$]=1,c.push($))}if(h.length<6||h.length>420)continue;let u=0,d=0;for(let F of h)u+=F%t,d+=Math.floor(F/t);u/=h.length,d/=h.length;let p=0,_=0,x=0;for(let F of h){let U=F%t-u,V=Math.floor(F/t)-d;p+=U*U,_+=V*V,x+=U*V}let g=.5*Math.atan2(2*x,p-_);Math.abs(p-_)<1e-6&&Math.abs(x)<1e-6&&(g=0);let v=(g%(Math.PI/2)+Math.PI/2)%(Math.PI/2);(v<.14||v>Math.PI/2-.14)&&(g=Math.round(g/(Math.PI/2))*(Math.PI/2));let w=Math.cos(g),S=Math.sin(g),C=1e9,A=-1e9,m=1e9,b=-1e9;for(let F of h){let U=F%t-u,V=Math.floor(F/t)-d,$=U*w+V*S,ee=-U*S+V*w;C=Math.min(C,$),A=Math.max(A,$),m=Math.min(m,ee),b=Math.max(b,ee)}let P=(A-C)/2+.5,M=(b-m)/2+.5,E=(C+A)/2,R=(m+b)/2,y=u+E*w-R*S,T=d+E*S+R*w,I=1e9,N=-1e9;for(let F of h)N=Math.max(N,r[F]);for(let F of h){let U=F%t;for(let V of[F-1,F+1,F-t,F+t])V>=0&&V<t*t&&s[V]===1&&Math.abs(V%t-U)<=1&&(I=Math.min(I,r[V]))}if(I>1e8)continue;let z=n.props.length+1,B=Math.ceil(Math.max(P,M))+1;for(let F=Math.floor(T)-B;F<=Math.ceil(T)+B;F++)for(let U=Math.floor(y)-B;U<=Math.ceil(y)+B;U++){if(U<0||F<0||U>=t||F>=t)continue;let V=F*t+U,$=U-y,ee=F-T,H=$*w+ee*S,K=-$*S+ee*w,Q=Math.abs(H)<=P-.35&&Math.abs(K)<=M-.35;Q&&(s[V]===1||s[V]===2)?(s[V]=2,r[V]=N,a[V]=z):!Q&&s[V]===2&&h.includes(V)&&(s[V]=1,r[V]=Math.round(I/.08)*.08)}n.props.push({l:e,x:(y+.5)*i,z:(T+.5)*i,hu:P*i,hv:M*i,ang:g,y0:I,y1:N,cells:h.length})}}var oM={dust2:[[142,188,224,220],[30,203,128,257],[46,158,64,205],[68,253,102,290],[126,212,162,252],[336,276,374,334]],mirage:[[110,76,306,114],[200,92,228,136],[320,360,432,412],[210,204,238,254]]};function aM(n,e){let t=n.n,i=t*t,s=n.cell,r=n.top[0],o=n.cls[0],a=new Float32Array(i).fill(NaN),l=new Float32Array(i).fill(NaN),c=new Uint8Array(i),h=b0(t,e.cls,e.h,7),f=S=>o[S]===1||o[S]===2,u=S=>!f(S),d=S=>Es(Math.ceil(((h[S]>-1e8?h[S]:r[S])+6.2)/.6)*.6);for(let[S,C,A,m]of oM[n.info.id]||[]){let b=-1e9;for(let P=C;P<=m;P++)for(let M=S;M<=A;M++){let E=P*t+M;o[E]===1&&r[E]>b&&(b=r[E])}for(let P=C;P<=m;P++)for(let M=S;M<=A;M++){let E=P*t+M;if(!f(E))continue;let R=Es(b+2.9);l[E]=R,a[E]=Math.max(R+.5,d(E)-.6),c[E]=4}}let p=Math.round(3.2/s),_=Math.round(2/s),x=new Uint16Array(i),g=new Uint16Array(i);for(let S=0;S<t;S++){let C=0;for(;C<t;){if(u(S*t+C)){C++;continue}let A=C;for(;A<t&&!u(S*t+A);)A++;for(let m=C;m<A;m++)x[S*t+m]=A-C;C=A}}for(let S=0;S<t;S++){let C=0;for(;C<t;){if(u(C*t+S)){C++;continue}let A=C;for(;A<t&&!u(A*t+S);)A++;for(let m=C;m<A;m++)g[m*t+S]=A-C;C=A}}let v=(S,C)=>{c[S]||(l[S]=Es(C+2.45),a[S]=d(S),c[S]=4)},w=S=>{let C=-1e9;for(let A of S)r[A]>C&&(C=r[A]);return C};for(let S=0;S<t;S++){let C=0;for(;C<t;){let A=C*t+S;if(u(A)||x[A]>p){C++;continue}let m=C;for(;m<t&&!u(m*t+S)&&x[m*t+S]<=p;)m++;if(m-C<=_&&C>0&&m<t&&!u((C-1)*t+S)&&!u(m*t+S)&&x[(C-1)*t+S]>p+2&&x[m*t+S]>p+2){let P=[];for(let E=C;E<m;E++)P.push(E*t+S);let M=w(P);for(let E of P)v(E,M)}C=m}}for(let S=0;S<t;S++){let C=0;for(;C<t;){let A=S*t+C;if(u(A)||g[A]>p){C++;continue}let m=C;for(;m<t&&!u(S*t+m)&&g[S*t+m]<=p;)m++;if(m-C<=_&&C>0&&m<t&&!u(S*t+C-1)&&!u(S*t+m)&&g[S*t+C-1]>p+2&&g[S*t+m]>p+2){let P=[];for(let E=C;E<m;E++)P.push(S*t+E);let M=w(P);for(let E of P)v(E,M)}C=m}}n.top.push(a),n.bot.push(l),n.cls.push(c),n.L=2,n.slabs=!0}function lM(n,e,t,i){let s=n*n,r=new Uint8Array(s),o=[],a=[],l=h=>(e[h]&3)===3;for(let h=0;h<s;h++){if(r[h]||!l(h))continue;o.length=0,a.length=0,o.push(h),r[h]=1;let f=!1;for(;o.length;){let u=o.pop();a.push(u);let d=u%n,p=(u-d)/n;for(let _ of[d>0?u-1:-1,d<n-1?u+1:-1,p>0?u-n:-1,p<n-1?u+n:-1])_<0||((e[_]&3)===0&&(f=!0),!r[_]&&l(_)&&(r[_]=1,o.push(_)))}if(a.length<40&&!f)for(let u of a)c(u)}function c(h){let f=h%n,u=(h-f)/n,d=0,p=0;for(let _=-2;_<=2;_++)for(let x=-2;x<=2;x++){let g=f+x,v=u+_;if(g<0||v<0||g>=n||v>=n)continue;let w=v*n+g;(e[w]&3)===1&&(d+=t[w],p++)}e[h]=e[h]&-4|1,p&&(t[h]=d/p)}if(!i)for(let h=0;h<2;h++){let f=new Uint8Array(s);for(let u=0;u<s;u++){let d=e[u]&3;f[u]=d===3||d===0?1:0}for(let u=1;u<n-1;u++)for(let d=1;d<n-1;d++){let p=u*n+d,_=0;for(let x=-1;x<=1;x++)for(let g=-1;g<=1;g++)_+=f[p+x*n+g];f[p]&&_<=3&&(e[p]&3)===3?c(p):!f[p]&&_>=7&&(e[p]&3)===1&&(e[p]=e[p]&-4|3)}}}var M0=1.7;function cM(n,e,t){let i=n*n,s=new Uint8Array(i);for(let l=0;l<i;l++)s[l]=(e[l]&3)===1?1:0;{let l=new Uint8Array(i);for(let c=0;c<n;c++)for(let h=0;h<n;h++){let f=c*n+h;if(!s[f])continue;let u=0;for(let d=-4;d<=4&&!u;d++)for(let p=-4;p<=4;p++){let _=h+p,x=c+d;if(_<0||x<0||_>=n||x>=n)continue;let g=e[x*n+_]&3;if(g===3||g===0){u=1;break}}l[f]=u}for(let c=0;c<7;c++){for(let h=1;h<n-1;h++)for(let f=1;f<n-1;f++){let u=h*n+f;if(l[u]!==1&&l[u]!==2)continue;let d=0,p=0;for(let _=-1;_<=1;_++)for(let x=-1;x<=1;x++){let g=u+_*n+x;s[g]&&(l[g]===0||l[g]===3)&&(d+=t[g],p++)}p&&(t[u]=d/p,l[u]=2)}for(let h=0;h<i;h++)l[h]===2&&(l[h]=3)}}let r=new Uint8Array(i);for(let l=0;l<n;l++)for(let c=0;c<n;c++){let h=l*n+c;s[h]&&(c+1<n&&s[h+1]&&Math.abs(t[h]-t[h+1])<=M0&&(r[h]|=1),l+1<n&&s[h+n]&&Math.abs(t[h]-t[h+n])<=M0&&(r[h]|=2))}let o=Float32Array.from(t),a=new Float32Array(i);for(let l=0;l<48;l++){for(let h=0;h<n;h++)for(let f=0;f<n;f++){let u=h*n+f;if(!s[u]){a[u]=o[u];continue}let d=o[u]*2,p=2;r[u]&1&&(d+=o[u+1],p++),r[u]&2&&(d+=o[u+n],p++),f>0&&r[u-1]&1&&(d+=o[u-1],p++),h>0&&r[u-n]&2&&(d+=o[u-n],p++),a[u]=d/p}let c=o;o=a,a=c}for(let l=0;l<i;l++)s[l]&&(t[l]=o[l])}function b0(n,e,t,i){let s=n*n,r=new Float32Array(s).fill(-1e9),o=new Float32Array(s).fill(-1e9);for(let a=0;a<s;a++)(e[a]&3)===1&&(r[a]=t[a]);for(let a=0;a<n;a++)for(let l=0;l<n;l++){let c=-1e9;for(let h=Math.max(0,l-i);h<=Math.min(n-1,l+i);h++){let f=r[a*n+h];f>c&&(c=f)}o[a*n+l]=c}for(let a=0;a<n;a++)for(let l=0;l<n;l++){let c=-1e9;for(let h=Math.max(0,a-i);h<=Math.min(n-1,a+i);h++){let f=o[h*n+l];f>c&&(c=f)}r[a*n+l]=c}return r}function hM(n,e,t){let i=n*n,s=new Float32Array(i),r=new Uint8Array(i),o=[],a=[];for(let l=0;l<i;l++){if(r[l]||(e[l]&3)!==2)continue;o.length=0,a.length=0,o.push(l),r[l]=1;let c=-1e9;for(;o.length;){let h=o.pop();a.push(h),t[h]>c&&(c=t[h]);let f=h%n,u=(h-f)/n;for(let d of[f>0?h-1:-1,f<n-1?h+1:-1,u>0?h-n:-1,u<n-1?h+n:-1])d>=0&&!r[d]&&(e[d]&3)===2&&(r[d]=1,o.push(d))}if(a.length>900)for(let h of a)s[h]=t[h];else for(let h of a)s[h]=c}return s}function uM(n,e,t){let i=n*n,s=new Uint8Array(i);for(let f=0;f<i;f++)s[f]=(e[f]&3)===1?1:0;let r=new Uint8Array(i);for(let f=2;f<n-2;f++)for(let u=2;u<n-2;u++){let d=f*n+u;if(!s[d])continue;let p=0;for(let _ of[2,-2,2*n,-2*n]){let x=d+_;s[x]&&(p=Math.max(p,Math.abs(t[x]-t[d])/2))}r[d]=p<.045?1:0}let o=new Int32Array(i).fill(-1),a=[],l=[],c=0;for(let f=0;f<i;f++)if(!(!r[f]||o[f]>=0)){for(a.length=0,l.length=0,a.push(f),o[f]=c;a.length;){let u=a.pop();l.push(u);let d=u%n;for(let p of[d>0?u-1:-1,d<n-1?u+1:-1,u-n,u+n])p>=0&&p<i&&r[p]&&o[p]<0&&Math.abs(t[p]-t[u])<.12&&(o[p]=c,a.push(p))}if(l.length>=25){let u=l.map(p=>t[p]).sort((p,_)=>p-_),d=u[u.length>>1];for(let p of l)t[p]=d}else for(let u of l)r[u]=0;c++}let h=Float32Array.from(t);for(let f=0;f<80;f++)for(let u=1;u<n-1;u++)for(let d=1;d<n-1;d++){let p=u*n+d;if(!s[p]||r[p])continue;let _=0,x=0;for(let g of[p-1,p+1,p-n,p+n])s[g]&&Math.abs(h[g]-h[p])<1.7&&(_+=h[g],x++);x&&(h[p]=_/x)}for(let f=0;f<i;f++)s[f]&&(t[f]=h[f])}function fM(n,e){for(let t of n){let i=t.cls[e]&3;if(i===1||i===2)return!0}return!1}function Zu(n,e,t,i,s){let r=n.cell,o=n.n,a=Math.floor((e-i)/r),l=Math.floor((e+i)/r),c=Math.floor((t-i)/r),h=Math.floor((t+i)/r);for(let f=c;f<=h;f++)for(let u=a;u<=l;u++){if(u<0||f<0||u>=o||f>=o){if(s(-1))return!0;continue}if(s(f*o+u))return!0}return!1}function bi(n,e,t,i,s,r=.4){return Zu(n,e,t,r,o=>{if(o<0)return!0;for(let a=0;a<n.L;a++){let l=n.top[a][o];if(!isNaN(l)&&l>i+.62&&n.bot[a][o]<i+s)return!0}return!1})}function Ku(n,e,t,i,s=.38){let r=-1/0;return Zu(n,e,t,s,o=>{if(o<0)return!1;for(let a=0;a<n.L;a++){let l=n.top[a][o];isNaN(l)||l<=i+.62&&l>r&&n.bot[a][o]<i+.1+.62&&(r=l)}return!1}),r}function zc(n,e,t,i,s=.38){let r=1/0;return Zu(n,e,t,s,o=>{if(o<0)return!1;for(let a=0;a<n.L;a++){let l=n.bot[a][o];isNaN(l)||l>i+.2&&l<r&&(r=l)}return!1}),r}function As(n,e,t,i=1e9){let s=n.idx(e,t);if(s<0)return-1/0;let r=-1/0;for(let o=0;o<n.L;o++){let a=n.top[o][s];!isNaN(a)&&a<=i&&a>r&&(r=a)}return r}function zi(n,e,t,i,s,r,o,a=200){let l=n.cell,c=n.n,h=Math.floor(e/l),f=Math.floor(i/l),u=s>0?1:-1,d=o>0?1:-1,p=s!==0?Math.abs(l/s):1/0,_=o!==0?Math.abs(l/o):1/0,x=s!==0?(s>0?(h+1)*l-e:e-h*l)/Math.abs(s):1/0,g=o!==0?(o>0?(f+1)*l-i:i-f*l)/Math.abs(o):1/0,v=0,w=-1;for(let S=0;S<4e3;S++){if(h<0||f<0||h>=c||f>=c)return null;let C=Math.min(x,g,a),A=f*c+h,m=t+r*v,b=t+r*C;for(let P=0;P<n.L;P++){let M=n.top[P][A];if(isNaN(M))continue;let E=n.bot[P][A];if(m>=E&&m<=M&&S>0)return{t:v,nx:w===0?-u:0,ny:0,nz:w===1?-d:0,cell:A,layer:P};if(m>=E&&m<=M&&S===0)return{t:0,nx:0,ny:1,nz:0,cell:A,layer:P};if(m>M&&b<=M&&r<0)return{t:(M-t)/r,nx:0,ny:1,nz:0,cell:A,layer:P};if(m<E&&b>=E&&r>0)return{t:(E-t)/r,nx:0,ny:-1,nz:0,cell:A,layer:P}}if(C>=a)return null;v=C,x<g?(h+=u,x+=p,w=0):(f+=d,g+=_,w=1)}return null}function S0(n,e,t,i,s,r,o){let a=s-e,l=r-t,c=o-i,h=Math.hypot(a,l,c);if(h<.001)return!0;let f=zi(n,e,t,i,a/h,l/h,c/h,h);return!f||f.t>=h-.05}function kc(n,e,t,i){let s=n.idx(e,i);if(s<0)return!1;for(let r=0;r<n.L;r++){let o=n.top[r][s];if(!isNaN(o)&&t<=o&&t>=n.bot[r][s])return!0}return!1}function oi(n,e,t){let i=n.idx(e,t);return i<0?0:n.flags[i]}function Ju(n,e){let t=[];for(let i=0;i<n.n*n.n;i++)n.flags[i]&e&&t.push(i);return t}var Pt=512;function fa(n){let e=n|0;return()=>{e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function bn(n){let t=new Float32Array(65536),i=fa(n);for(let o=0;o<256*256;o++)t[o]=i();let s=o=>o*o*(3-2*o),r=(o,a,l)=>{let c=Math.floor(o),h=Math.floor(a),f=s(o-c),u=s(a-h),d=(c%l+l)%l,p=(h%l+l)%l,_=(d+1)%l,x=(p+1)%l,g=t[p*256+d],v=t[p*256+_],w=t[x*256+d],S=t[x*256+_];return g+(v-g)*f+(w-g)*u+(g-v-w+S)*f*u};return(o,a,l=4,c=4,h=.5)=>{let f=0,u=1,d=0,p=l;for(let _=0;_<c;_++)f+=r(o*p,a*p,p)*u,d+=u,u*=h,p*=2;return f/d}}function Si(n,e=2.5){let t=new Uint8ClampedArray(Pt*Pt*4),i=new Float32Array(Pt*Pt);for(let o=0;o<Pt;o++)for(let a=0;a<Pt;a++){let l=n(a/Pt,o/Pt),c=o*Pt+a;t[c*4]=l[0]*255,t[c*4+1]=l[1]*255,t[c*4+2]=l[2]*255,t[c*4+3]=255,i[c]=l[3]}let s=new Uint8ClampedArray(Pt*Pt*4);for(let o=0;o<Pt;o++)for(let a=0;a<Pt;a++){let l=i[o*Pt+(a-1+Pt)%Pt],c=i[o*Pt+(a+1)%Pt],h=i[(o-1+Pt)%Pt*Pt+a],f=i[(o+1)%Pt*Pt+a],u=(l-c)*e,d=(f-h)*e,p=1,_=Math.hypot(u,d,p);u/=_,d/=_,p/=_;let x=(o*Pt+a)*4;s[x]=(u*.5+.5)*255,s[x+1]=(d*.5+.5)*255,s[x+2]=(p*.5+.5)*255,s[x+3]=255}let r=(o,a)=>{let l=new Ws(o,Pt,Pt,Zn);return l.wrapS=l.wrapT=ps,l.magFilter=Mn,l.minFilter=_i,l.generateMipmaps=!0,l.anisotropy=8,a&&(l.colorSpace=cn),l.needsUpdate=!0,l};return{map:r(t,!0),normalMap:r(s,!1)}}var at=n=>n<0?0:n>1?1:n,Bc=(n,e,t)=>n+(e-n)*t,w0={blocks(){let n=bn(11),e=bn(12),t=fa(5),i=6,s=[],r=[];for(let o=0;o<i;o++){let a=[0],l=0;for(;l<1;)l+=.22+t()*.2,a.push(Math.min(1,l));1-a[a.length-2]<.12&&a.splice(a.length-2,1),r.push(a),s.push(t())}return Si((o,a)=>{let l=Math.floor(a*i),c=a*i-l,h=r[l],f=(o+s[l])%1,u=0;for(;u<h.length-2&&f>h[u+1];)u++;let d=h[u],p=h[u+1],_=(f-d)/(p-d),x=Math.min(_*(p-d)*9,(1-_)*(p-d)*9),g=Math.min(c,1-c)*1.5,v=Math.min(x,g)+(n(o,a,32,3)-.5)*.06,w=.9+(l*7+u*13)%11/11*.12,S=n(o,a,16,5),C=e(o*.3,a*3,8,3),A=w*(.86+S*.16)+(C-.5)*.06,m=.6+S*.35;if(v<.035)A*=.62,m=.05;else if(v<.08){let P=(v-.035)/.045;A*=Bc(.8,1,P),m=Bc(.25,m,P)}return e(o,a,64,2)>.78&&(A*=.85,m-=.2),[at(A*1),at(A*.97),at(A*.92),m]},3.2)},plaster(){let n=bn(21),e=bn(22),t=bn(23);return Si((i,s)=>{let r=n(i,s,3,4),o=e(i,s,48,3),a=.88+(r-.5)*.14+(o-.5)*.06,l=r*.4+o*.12;Math.abs(t(i,s,5,5)-.5)<.004&&n(i*2,s*2,3,2)>.55&&(a*=.82,l-=.1);let h=t(i+.37,s*.5,4,3);if(h>.6&&(a*=1-(h-.6)*.25),n(i+.5,s+.3,5,4)>.79){let u=(i*16+Math.floor(s*32)%2*.5)%1,d=s*32%1,p=u<.08||d<.16;return a=p?.7:.78+o*.1,l=p?-.2:.05,[at(a*1.02),at(a*.86),at(a*.74),l]}return[at(a),at(a*.985),at(a*.95),l]},2.2)},sand(){let n=bn(31),e=bn(32),t=fa(9),i=[];for(let s=0;s<70;s++)i.push([t(),t(),.002+t()*.006]);return Si((s,r)=>{let o=n(s,r,64,3),a=Math.sin((r+e(s,r,4,3)*.3)*Math.PI*28)*.5+.5,l=e(s,r,4,3),c=.86+(o-.5)*.14+(l-.5)*.1+a*.025,h=a*.25+o*.3;for(let[f,u,d]of i){let p=Math.abs(s-f),_=Math.abs(r-u);p=Math.min(p,1-p),_=Math.min(_,1-_);let x=Math.hypot(p,_);x<d?(c=.68+o*.15,h=.7+(1-x/d)*.5):x<d*1.6&&(c*=.9)}return[at(c),at(c*.95),at(c*.86),h]},2)},tiles(){let n=bn(41),e=fa(4),t=[],i=5;for(let s=0;s<i;s++)for(let r=0;r<i;r++)t.push([(r+.2+e()*.6)/i,(s+.2+e()*.6)/i,.85+e()*.15]);return Si((s,r)=>{let o=9,a=9,l=1;for(let[d,p,_]of t)for(let x=-1;x<=1;x++)for(let g=-1;g<=1;g++){let v=Math.hypot(s-d-g,r-p-x);v<o?(a=o,o=v,l=_):v<a&&(a=v)}let c=a-o,h=n(s,r,32,4),f=l*(.84+h*.16),u=.6+h*.3;if(c<.01)f*=.7,u=0;else if(c<.026){let d=(c-.01)/.016;f*=Bc(.88,1,d),u=Bc(.2,u,d)}return[at(f),at(f*.97),at(f*.92),u]},3)},stone(){let n=bn(51),e=bn(52);return Si((t,i)=>{let s=n(t,i,8,5),r=e(t,i,3,3),o=.74+s*.24+(r-.5)*.1;return[at(o),at(o*.96),at(o*.9),s*.8+r*.3]},3.5)},wood(){let n=bn(61),e=fa(6),t=[];for(let i=0;i<6;i++)t.push(.8+e()*.2);return Si((i,s)=>{let r=Math.floor(s*6),o=s*6-r,a=Math.sin((i*40+n(i,s,8,3)*6+r*3)*Math.PI)*.5+.5,l=n(i*.2,s,64,2),c=t[r]*(.82+a*.1+l*.08),h=.5+a*.15;return(o<.04||o>.96)&&(c*=.45,h=0),n(i+.3,s,6,2)>.8&&(c*=.8),[at(c),at(c*.86),at(c*.7),h]},2.5)},crate(){let n=bn(71);return Si((e,t)=>{let i=Math.min(e,t,1-e,1-t),s=Math.abs(e-t),r=Math.abs(e+t-1),o=t*5%1,a=n(e,t*.2,32,3),l=.78+a*.14,c=.4+a*.1;return o<.04&&(l*=.55,c=.1),(i<.09||s<.06)&&(l=.86+a*.1,c=.9,i<.09&&i>.08&&(l*=.6)),r<.004&&(l*=.9),Math.abs(i-.045)<.012&&(e*8%1<.08||t*8%1<.08)&&(l=.35,c=1),[at(l),at(l*.84),at(l*.66),c]},3)},concrete(){let n=bn(81),e=bn(82);return Si((t,i)=>{let s=n(t,i,32,4),r=e(t,i,4,3),o=.8+(s-.5)*.12+(r-.5)*.12,a=s*.3;(t%.5<.006||i%.5<.006)&&(o*=.75,a=0);for(let[l,c]of[[.125,.125],[.375,.125],[.125,.375],[.375,.375]])Math.hypot(t%.5-l,i%.5-c)<.012&&(o*=.55,a=-.3);return[at(o),at(o),at(o*.97),a]},2.5)},roof(){let n=bn(91);return Si((e,t)=>{let i=e*8%1,s=t*8%1,r=Math.sin(i*Math.PI),o=.72+r*.26+(n(e,t,32,3)-.5)*.12,a=r*.7+(1-s)*.25;return s<.06&&(o*=.55,a=-.2),[at(o),at(o*.92),at(o*.86),a]},3)},metal(){let n=bn(95);return Si((e,t)=>{let i=Math.sin(e*Math.PI*24)*.5+.5,s=n(e,t,16,4),r=n(e+.2,t,4,4)>.66,o=.7+i*.25+(s-.5)*.1;return r?[at(o*.9),at(o*.6),at(o*.4),i*.5]:[at(o),at(o),at(o),i*.5]},2)},fabric(){let n=bn(99);return Si((e,t)=>{let i=Math.sin(e*Math.PI*160)*Math.sin(t*Math.PI*160)*.5+.5,s=n(e,t,16,3),r=.85+i*.08+(s-.5)*.12;return[at(r),at(r),at(r),i*.3]},1.5)}},ju={};function dM(n){if(ju[n])return ju[n];let e=w0[n]||w0.stone;return ju[n]=e()}function Hc(n,e={}){let t=n?dM(n):null;return new yi({vertexColors:!0,map:t?t.map:null,normalMap:t?t.normalMap:null,normalScale:new fe(e.bump??1,e.bump??1),roughness:e.rough??.92,metalness:e.metal??0,side:e.side??Di})}var T0={dust2:{floor:[.8,.66,.46],floorHi:[.84,.71,.51],wall:[.93,.82,.63],wallTop:[.86,.74,.55],trim:[.72,.6,.43],crate:[1,.95,.88],stone:[.82,.72,.56],metal:[.27,.47,.72],slab:[.62,.47,.32],sky:["#5c9ce0","#f6e3c0"],fog:"#efdcb9",sun:"#fff0d2",ground:"#cfae7c",hemiSky:"#cfe3ff",wallTex:"blocks",floorTex:"sand"},mirage:{floor:[.74,.68,.58],floorHi:[.79,.73,.63],wall:[.94,.87,.74],wallTop:[.78,.43,.3],trim:[.68,.58,.46],crate:[1,.95,.9],stone:[.8,.74,.64],metal:[.24,.55,.58],slab:[.74,.42,.3],sky:["#5b9fe0","#f5dcb8"],fog:"#efdabb",sun:"#fff1da",ground:"#c9ae88",hemiSky:"#d4e6ff",wallTex:"plaster",floorTex:"tiles"},vertigo:{floor:[.66,.66,.64],floorHi:[.72,.72,.69],wall:[.8,.8,.77],wallTop:[.62,.62,.6],trim:[.55,.55,.53],crate:[.98,.95,.9],stone:[.92,.72,.22],metal:[.25,.45,.75],slab:[.6,.6,.58],sky:["#3f87d6","#d2e6f6"],fog:"#cadcea",sun:"#ffffff",ground:"#6d7f8f",hemiSky:"#d6e8ff",wallTex:"concrete",floorTex:"slabs"}},pa=n=>T0[n]||T0.dust2;function Vc(n,e){let t=n*374761393+e*668265263|0;return t=(t^t>>>13)*1274126177,((t^t>>>16)>>>0)/4294967296}var E0=(n,e,t)=>[n[0]+(e[0]-n[0])*t,n[1]+(e[1]-n[1])*t,n[2]+(e[2]-n[2])*t],Kt=(n,e)=>[n[0]*e,n[1]*e,n[2]*e],A0=n=>Math.max(0,Math.min(1,n));function pM(n){let e=n|0;return()=>{e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function ki(n,e){let t=document.createElement("canvas");t.width=t.height=n;let i=t.getContext("2d");e(i,n);let s=new Ji(t);return s.wrapS=s.wrapT=ps,s.colorSpace=cn,s.anisotropy=8,s}function Rs(n,e,t,i,s=235,r=2400,o=3){n.fillStyle=`rgb(${s},${s},${s})`,n.fillRect(0,0,e,e);for(let a=0;a<r;a++){let l=s+(t()-.5)*i;n.fillStyle=`rgba(${l|0},${l|0},${l|0},0.5)`;let c=1+t()*o;n.fillRect(t()*e,t()*e,c,c)}}var Qu={};function mM(n){if(Qu[n])return Qu[n];let e=pM(n.length*977+n.charCodeAt(0)),t;return n==="blocks"?t=ki(256,(i,s)=>{Rs(i,s,e,40,232,3e3);let r=4;for(let o=0;o<r;o++){let a=o*s/r;i.fillStyle="rgba(120,100,80,.35)",i.fillRect(0,a,s,3);let l=o%2?s/4:0;for(let c=0;c<3;c++){let h=(l+c*s/2)%s;i.fillRect(h,a,3,s/r)}for(let c=0;c<6;c++)i.fillStyle=`rgba(255,250,240,${.08+e()*.08})`,i.fillRect(e()*s,a+4+e()*(s/r-8),20+e()*50,6+e()*10)}i.fillStyle="rgba(90,70,50,.04)";for(let o=0;o<14;o++)i.beginPath(),i.arc(e()*s,e()*s,4+e()*18,0,7),i.fill()}):n==="plaster"?t=ki(256,(i,s)=>{Rs(i,s,e,26,238,2600);for(let r=0;r<10;r++)i.fillStyle=`rgba(150,130,100,${.03+e()*.04})`,i.beginPath(),i.ellipse(e()*s,e()*s,10+e()*40,6+e()*26,e()*3,0,7),i.fill();i.strokeStyle="rgba(110,90,70,.35)",i.lineWidth=1;for(let r=0;r<5;r++){let o=e()*s,a=e()*s;i.beginPath(),i.moveTo(o,a);for(let l=0;l<6;l++)o+=(e()-.5)*24,a+=e()*14,i.lineTo(o,a);i.stroke()}}):n==="concrete"?t=ki(256,(i,s)=>{Rs(i,s,e,30,228,3500,2),i.fillStyle="rgba(80,80,80,.35)",i.fillRect(0,0,s,2),i.fillRect(0,0,2,s),i.fillRect(s/2,0,2,s),i.fillStyle="rgba(60,60,60,.45)";for(let[r,o]of[[.25,.25],[.75,.25],[.25,.75],[.75,.75]])i.beginPath(),i.arc(r*s,o*s,3,0,7),i.fill();for(let r=0;r<8;r++)i.fillStyle=`rgba(90,85,80,${.06+e()*.08})`,i.fillRect(e()*s,e()*s,2+e()*4,20+e()*60)}):n==="sand"?t=ki(256,(i,s)=>{Rs(i,s,e,46,230,5e3,2);for(let r=0;r<40;r++)i.fillStyle=`rgba(150,120,80,${.06+e()*.06})`,i.beginPath(),i.ellipse(e()*s,e()*s,8+e()*30,3+e()*8,e()*3,0,7),i.fill();for(let r=0;r<25;r++)i.fillStyle="rgba(120,100,80,.35)",i.fillRect(e()*s,e()*s,2+e()*3,2+e()*3)}):n==="tiles"?t=ki(256,(i,s)=>{Rs(i,s,e,30,232,3e3,2);let r=4;i.fillStyle="rgba(110,95,75,.4)";for(let o=0;o<=r;o++)i.fillRect(o*s/r-1,0,2,s),i.fillRect(0,o*s/r-1,s,2);for(let o=0;o<r;o++)for(let a=0;a<r;a++)i.fillStyle=`rgba(${e()<.5?"255,250,240":"120,100,80"},${.05+e()*.07})`,i.fillRect(o*s/r+2,a*s/r+2,s/r-4,s/r-4)}):n==="slabs"?t=ki(256,(i,s)=>{Rs(i,s,e,34,226,4e3,2),i.fillStyle="rgba(70,70,70,.35)",i.fillRect(0,0,s,2),i.fillRect(0,0,2,s),i.fillRect(0,s/2,s,2);for(let r=0;r<6;r++)i.fillStyle=`rgba(60,60,60,${.05+e()*.08})`,i.beginPath(),i.ellipse(e()*s,e()*s,10+e()*30,6+e()*14,e()*3,0,7),i.fill()}):n==="crate"?t=ki(128,(i,s)=>{i.fillStyle="#a7773f",i.fillRect(0,0,s,s);for(let r=0;r<6;r++)i.fillStyle=r%2?"#9a6c38":"#b17f46",i.fillRect(0,r*s/6,s,s/6),i.fillStyle="rgba(60,35,15,.5)",i.fillRect(0,r*s/6,s,1);for(let r=0;r<120;r++)i.fillStyle=`rgba(70,40,15,${e()*.25})`,i.fillRect(e()*s,e()*s,6+e()*20,1);i.strokeStyle="#7a5228",i.lineWidth=12,i.strokeRect(6,6,s-12,s-12),i.lineWidth=11,i.beginPath(),i.moveTo(10,10),i.lineTo(s-10,s-10),i.stroke(),i.strokeStyle="rgba(40,20,5,.6)",i.lineWidth=1.5,i.strokeRect(12,12,s-24,s-24),i.strokeRect(.5,.5,s-1,s-1),i.fillStyle="#3b2a1a";for(let[r,o]of[[6,6],[s-6,6],[6,s-6],[s-6,s-6]])i.beginPath(),i.arc(r,o,2.5,0,7),i.fill()}):n==="metal"?t=ki(128,(i,s)=>{Rs(i,s,e,20,225,900,2);for(let r=0;r<16;r++)i.fillStyle=r%2?"rgba(0,0,0,.18)":"rgba(255,255,255,.12)",i.fillRect(r*s/16,0,s/16,s);for(let r=0;r<10;r++)i.fillStyle=`rgba(110,60,30,${.1+e()*.2})`,i.fillRect(e()*s,e()*s,4+e()*12,2+e()*16);i.fillStyle="rgba(0,0,0,.3)",i.fillRect(0,0,s,4),i.fillRect(0,s-4,s,4)}):n==="stone"?t=ki(128,(i,s)=>{Rs(i,s,e,40,228,1500,2),i.fillStyle="rgba(90,75,55,.4)",i.fillRect(0,0,s,3),i.fillRect(0,s/2,s,2),i.fillRect(s/2,0,2,s/2),i.fillRect(s/4,s/2,2,s/2)}):n==="wood"&&(t=ki(128,(i,s)=>{i.fillStyle="#d9c3a3",i.fillRect(0,0,s,s);for(let r=0;r<4;r++)i.fillStyle=`rgba(90,60,30,${.15+e()*.1})`,i.fillRect(0,r*s/4,s,s/4-3),i.fillStyle="rgba(50,30,10,.5)",i.fillRect(0,r*s/4-2,s,3);for(let r=0;r<80;r++)i.fillStyle=`rgba(70,40,15,${e()*.2})`,i.fillRect(e()*s,e()*s,8+e()*30,1)})),Qu[n]=t,t}function tr(){return{pos:[],nor:[],col:[],uv:[]}}function gM(n,e,t,i,s,r){n.pos.push(e[0],e[1],e[2]),n.nor.push(t[0],t[1],t[2]),n.col.push(i[0],i[1],i[2]),n.uv.push(s,r)}function da(n,e,t,i,s,r,o){let a=t[0]-e[0],l=t[1]-e[1],c=t[2]-e[2],h=i[0]-e[0],f=i[1]-e[1],u=i[2]-e[2],d=l*u-c*f,p=c*h-a*u,_=a*f-l*h,x=Math.hypot(d,p,_)||1,g=[d/x,p/x,_/x],v=[e,t,i];for(let w=0;w<3;w++){let S=r(v[w]);gM(n,v[w],g,o?o[w]:s,S[0],S[1])}}function ai(n,e,t,i,s,r){let[o,a,l]=e,c=a[0]-o[0],h=a[1]-o[1],f=a[2]-o[2],u=l[0]-o[0],d=l[1]-o[1],p=l[2]-o[2],_=h*p-f*d,x=f*u-c*p,g=c*d-h*u,v=e,w=r;_*t[0]+x*t[1]+g*t[2]<0&&(v=[e[0],e[3],e[2],e[1]],r&&(w=[r[0],r[3],r[2],r[1]])),da(n,v[0],v[1],v[2],i,s,w&&[w[0],w[1],w[2]]),da(n,v[0],v[2],v[3],i,s,w&&[w[0],w[2],w[3]])}var Jr=n=>e=>[e[0]/n,e[2]/n],Gc=(n,e,t)=>i=>[(i[0]*e-i[2]*n)/t,i[1]/t];function C0(n,e){let t=pa(e),i=n.n,s=n.cell,r={wall:tr(),floor:tr(),crate:tr(),metal:tr(),stone:tr(),wood:tr(),plain:tr()},o=(h,f,u,d=.05)=>{let p=1+(Vc(f,u)-.5)*2*d;return[h[0]*p,h[1]*p,h[2]*p]};for(let h=0;h<n.L;h++){let f=n.top[h],u=n.bot[h],d=n.cls[h],p=A=>A>=0&&A<i*i&&d[A]===3,_=new Uint8Array(i*i);{let A=new Uint8Array(i*i),m=[],b=[];for(let P=0;P<i*i;P++){if(A[P]||d[P]!==2)continue;m.length=0,b.length=0,m.push(P),A[P]=1;let M=1e9,E=-1,R=1e9,y=-1;for(;m.length;){let F=m.pop();b.push(F);let U=F%i,V=(F-U)/i;M=Math.min(M,U),E=Math.max(E,U),R=Math.min(R,V),y=Math.max(y,V);for(let $ of[U>0?F-1:-1,U<i-1?F+1:-1,V>0?F-i:-1,V<i-1?F+i:-1])$>=0&&!A[$]&&d[$]===2&&(A[$]=1,m.push($))}let T=(E-M+1)*s,I=(y-R+1)*s,N=Math.max(T,I),z=Math.min(T,I),B=1;b.length>260?B=3:N>3.2&&z>1.4&&N/z>1.7?B=e==="vertigo"?3:2:Vc(M,R)<.18&&(B=3);for(let F of b)_[F]=B}}let x=(A,m,b)=>{let P=0,M=0;for(let E=-1;E<=0;E++)for(let R=-1;R<=0;R++){let y=m+R,T=b+E;if(y<0||T<0||y>=i||T>=i)continue;let I=T*i+y;d[I]!==1||isNaN(f[I])||Math.abs(f[I]-A)>.6||(P+=f[I],M++)}return M?P/M:A},g=new Uint8Array(i*i),v=Jr(2.2);for(let A=0;A<i;A++)for(let m=0;m<i;m++){let b=A*i+m;if(d[b]===3){let ee=0,H=0;for(let K of[m>0?b-1:-1,m<i-1?b+1:-1,A>0?b-i:-1,A<i-1?b+i:-1])K>=0&&d[K]===1&&(ee+=f[K],H++);if(H){let K=ee/H-.01,Q=m*s,he=(m+1)*s,ie=A*s,ce=(A+1)*s,Le=Kt(t.floor,.62);ai(r.floor,[[Q,K,ie],[Q,K,ce],[he,K,ce],[he,K,ie]],[0,1,0],Le,v)}continue}if(n.propCell&&n.propCell[h]&&n.propCell[h][b]){let H=n.props[n.propCell[h][b]-1].y0,K=m*s,Q=(m+1)*s,he=A*s,ie=(A+1)*s;ai(r.floor,[[K,H,he],[K,H,ie],[Q,H,ie],[Q,H,he]],[0,1,0],Kt(t.floor,.7),v);continue}if(d[b]!==1||isNaN(f[b]))continue;let P=f[b],M=x(P,m,A),E=x(P,m+1,A),R=x(P,m,A+1),y=x(P,m+1,A+1),T=p(b-1)||p(b+1)||p(b-i)||p(b+i)||p(b-i-1)||p(b-i+1)||p(b+i-1)||p(b+i+1);if(Math.abs(M-P)<.004&&Math.abs(E-P)<.004&&Math.abs(R-P)<.004&&Math.abs(y-P)<.004&&!T)continue;g[b]=1;let N=m*s,z=(m+1)*s,B=A*s,F=(A+1)*s,U=o(E0(t.floor,t.floorHi,A0(P/6)),m>>3,A>>3,.04),V=(ee,H)=>{let K=0;for(let Q=-1;Q<=0;Q++)for(let he=-1;he<=0;he++){let ie=ee+he,ce=H+Q;ie>=0&&ce>=0&&ie<i&&ce<i&&d[ce*i+ie]===3&&K++}return Kt(U,1-K*.13)},$=[V(m,A),V(m,A+1),V(m+1,A+1),V(m+1,A)];da(r.floor,[N,M,B],[N,R,F],[z,y,F],U,v,[$[0],$[1],$[2]]),da(r.floor,[N,M,B],[z,y,F],[z,E,B],U,v,[$[0],$[2],$[3]])}let w=n.propCell?n.propCell[h]:null,S=A=>isNaN(f[A])||g[A]||d[A]===3||w&&w[A]?null:(d[A]*1e5+_[A]*1e4+Math.round(f[A]*100))*1e4+(h>0?Math.round(u[A]*100)+5e3:0);for(let A=0;A<i;A++)for(let m=0;m<i;m++){let b=A*i+m;if(g[b])continue;let P=S(b);if(P===null)continue;let M=1;for(;m+M<i&&!g[b+M]&&S(b+M)===P;)M++;let E=1;e:for(;A+E<i;){for(let F=0;F<M;F++){let U=(A+E)*i+m+F;if(g[U]||S(U)!==P)break e}E++}for(let F=0;F<E;F++)for(let U=0;U<M;U++)g[(A+F)*i+m+U]=1;let R=f[b],y=m*s,T=(m+M)*s,I=A*s,N=(A+E)*s,z=d[b],B=[[y,R,I],[y,R,N],[T,R,N],[T,R,I]];if(z===1)ai(r.floor,B,[0,1,0],o(E0(t.floor,t.floorHi,A0(R/6)),m>>3,A>>3,.04),v);else if(z===2){let F=_[b];ai(F===1?r.crate:F===2?r.metal:r.stone,B,[0,1,0],F===1?t.crate:F===2?Kt(t.metal,1.1):t.stone,Jr(F===1?1.1:2))}else z===4&&ai(r.wood,B,[0,1,0],Kt(t.wallTop,.95),Jr(2));if(h>0){let F=u[b];ai(z===4?r.wood:r.floor,[[y,F,I],[y,F,N],[T,F,N],[T,F,I]],[0,-1,0],z===4?t.slab:Kt(t.floor,.6),Jr(2))}}let C=[[1,0],[-1,0],[0,1],[0,-1]];for(let A=0;A<4;A++){let[m,b]=C[A],P=m!==0?"z":"x";for(let M=0;M<i;M++){let E=null,R=()=>{if(!E)return;let{s:y,e:T,y0:I,y1:N,cl:z,line:B,kd:F}=E,U;if(P==="z"){let Q=(m>0?B+1:B)*s;U=[[Q,I,y*s],[Q,I,(T+1)*s],[Q,N,(T+1)*s],[Q,N,y*s]]}else{let Q=(b>0?B+1:B)*s;U=[[y*s,I,Q],[(T+1)*s,I,Q],[(T+1)*s,N,Q],[y*s,N,Q]]}let V=A<2?.93:.84,$,ee,H;if(z===2){$=F===1?r.crate:F===2?r.metal:r.stone,ee=Kt(F===1?t.crate:F===2?t.metal:t.stone,V);let Q=F===1?1.1:2;H=he=>[(he[0]*b-he[2]*m)/Q,(he[1]-I)/Q]}else z===4?($=r.wood,ee=Kt(t.slab,V),H=Gc(m,b,2)):($=r.wall,ee=Kt(t.trim,V),H=Gc(m,b,2.2));let K=Kt(ee,.8);ai($,U,[m,0,b],ee,H,[K,K,ee,ee]),E=null};for(let y=0;y<i;y++){let T=P==="z"?M:y,I=P==="z"?y:M,N=I*i+T,z=null;if(!isNaN(f[N])&&d[N]!==3&&!(w&&w[N])){let B=T+m,F=I+b,U=B<0||F<0||B>=i||F>=i?-1:F*i+B,V=f[N],$=u[N];if(U>=0&&!isNaN(f[U]))d[N]===1&&d[U]===1&&Math.abs(f[N]-f[U])<=.6||f[U]>=V&&u[U]<=$?V=$:u[U]<=$+.01&&($=Math.max($,f[U]));else if(h===0){let ee=1e9;for(let H=0;H<n.L;H++)U>=0&&!isNaN(n.top[H][U])&&n.cls[H][U]!==4&&(ee=Math.min(ee,n.top[H][U]));$=ee<1e9?Math.max($,ee):n.voidKill?-25:Math.max($,V-8)}V-$>.01&&(z={y0:Math.round($*100)/100,y1:Math.round(V*100)/100,cl:d[N],kd:_[N]})}z&&E&&E.y0===z.y0&&E.y1===z.y1&&E.cl===z.cl&&E.kd===z.kd&&E.e===y-1?E.e=y:(R(),z&&(E={s:y,e:y,...z,line:M}))}R()}}yM(n,h,r,t)}_M(n,e,r,t);for(let h of n.props||[]){let f=Math.max(h.hu,h.hv)*2,u=Math.min(h.hu,h.hv)*2,d=1;h.cells>260?d=3:f>3.2&&u>1.3&&f/u>1.7?d=e==="vertigo"?3:2:Vc(Math.round(h.x*7),Math.round(h.z*7))<.16&&(d=3);let p=d===1?r.crate:d===2?r.metal:r.stone,_=d===1?t.crate:d===2?t.metal:t.stone,x=d===1?1.1:2,g=Math.cos(h.ang),v=Math.sin(h.ang),w=(b,P,M)=>[h.x+b*g-P*v,M,h.z+b*v+P*g],S=h.y0-.05,C=h.y1,A=[[-h.hu,-h.hv],[h.hu,-h.hv],[h.hu,h.hv],[-h.hu,h.hv]];for(let b=0;b<4;b++){let P=A[b],M=A[(b+1)%4],E=Math.hypot(M[0]-P[0],M[1]-P[1]),R=(P[0]+M[0])/2,y=(P[1]+M[1])/2,T=Math.hypot(R,y),I=[(R*g-y*v)/T,0,(R*v+y*g)/T],N=.82+.14*Math.abs(I[0]),z=Kt(_,N),B=Kt(z,.8),F=w(P[0],P[1],S),U=w(M[0],M[1],S),V=w(M[0],M[1],C),$=w(P[0],P[1],C),ee=Math.max(1,Math.round(E/x)),H=Math.max(1,Math.round((C-S)/x));ai(p,[F,U,V,$],I,z,Q=>[Math.hypot(Q[0]-F[0],Q[2]-F[2])/E*ee,(Q[1]-S)/(C-S)*H],[B,B,z,z])}let m=A.map(([b,P])=>w(b,P,C));ai(p,m,[0,1,0],Kt(_,1.04),b=>{let P=b[0]-h.x,M=b[2]-h.z;return[(P*g+M*v+h.hu)/x,(-P*v+M*g+h.hv)/x]})}let a=new Ct,l=0,c=(h,f)=>{if(!h.pos.length)return;let u=new Zt;u.setAttribute("position",new st(h.pos,3)),u.setAttribute("normal",new st(h.nor,3)),u.setAttribute("color",new st(h.col,3)),u.setAttribute("uv",new st(h.uv,2)),u.computeBoundingSphere();let d=new He(u,new Fn({vertexColors:!0,map:f&&typeof document<"u"?mM(f):null}));d.matrixAutoUpdate=!1,d.castShadow=!0,d.receiveShadow=!0,a.add(d),l+=h.pos.length/9};return c(r.wall,t.wallTex),c(r.floor,t.floorTex),c(r.crate,"crate"),c(r.metal,"metal"),c(r.stone,"stone"),c(r.wood,"wood"),c(r.plain,null),a.matrixAutoUpdate=!1,{mesh:a,tris:l,theme:t}}var xM=(()=>{let n=[];return n[0]=[],n[1]=[0,4,7],n[2]=[1,5,4],n[3]=[0,1,5,7],n[4]=[2,6,5],n[5]=[0,4,5,2,6,7],n[6]=[1,2,6,4],n[7]=[0,1,2,6,7],n[8]=[3,7,6],n[9]=[0,4,6,3],n[10]=[1,5,6,3,7,4],n[11]=[0,1,5,6,3],n[12]=[2,3,7,5],n[13]=[0,4,5,2,3],n[14]=[1,2,3,7,4],n[15]=[0,1,2,3],n})();function yM(n,e,t,i){let s=n.n,r=n.cell,o=n.top[e],a=n.bot[e],l=n.cls[e],c=d=>l[d]===3,h=t.wall,f=Jr(2.2),u=[0,0,0,0];for(let d=0;d<s-1;d++)for(let p=0;p<s-1;p++){u[0]=d*s+p,u[1]=d*s+p+1,u[2]=(d+1)*s+p+1,u[3]=(d+1)*s+p;let _=0;for(let m=0;m<4;m++)c(u[m])&&(_|=1<<m);if(!_)continue;let x=xM[_],g=(p+.5)*r,v=(d+.5)*r,w=[[g,v],[g+r,v],[g+r,v+r],[g,v+r]],S=x.map(m=>{if(m<4)return[w[m][0],w[m][1],o[u[m]],NaN,m];let b=m-4,P=(b+1)%4,M=c(u[b])?b:P,E=M===b?P:b,R=u[M],y=u[E],T;return!isNaN(o[y])&&l[y]===1?T=o[y]-.12:!isNaN(o[y])&&l[y]===2?T=o[y]-1.2:e===0?T=n.voidKill?-25:o[R]-8:T=a[R],[(w[b][0]+w[P][0])/2,(w[b][1]+w[P][1])/2,o[R],T,-1]});for(let m=1;m<S.length-1;m++)da(h,[S[0][0],S[0][2],S[0][1]],[S[m+1][0],S[m+1][2],S[m+1][1]],[S[m][0],S[m][2],S[m][1]],i.wallTop,f);let C=0,A=0;for(let m of S)C+=m[0],A+=m[1];C/=S.length,A/=S.length;for(let m=0;m<S.length;m++){let b=S[m],P=S[(m+1)%S.length];if(b[4]>=0||P[4]>=0)continue;let M=P[1]-b[1],E=-(P[0]-b[0]),R=Math.hypot(M,E);M/=R,E/=R;let y=(b[0]+P[0])/2-C,T=(b[1]+P[1])/2-A;M*y+E*T<0&&(M=-M,E=-E);let I=.86+.1*Math.abs(M)-.04*Math.abs(E),N=Kt(i.wall,I),z=Kt(i.trim,I*.95),B=Kt(N,.95),F=Math.min(b[2],b[3]+.45),U=Math.min(P[2],P[3]+.45),V=[b[0],b[3],b[1]],$=[P[0],P[3],P[1]],ee=[b[0],F,b[1]],H=[P[0],U,P[1]],K=[b[0],b[2],b[1]],Q=[P[0],P[2],P[1]],he=Gc(M,E,2.2);ai(h,[V,$,H,ee],[M,0,E],z,he,[Kt(z,.75),Kt(z,.75),z,z]),(b[2]>F+.01||P[2]>U+.01)&&ai(h,[ee,H,Q,K],[M,0,E],N,he,[B,B,N,N])}}}function P0(n,e,t,i=1){let s=pa(t),r=e.size;n.background=new We(s.sky[1]),n.fog=new Co(s.fog,70,t==="vertigo"?460:330);let o=new W(.45,.62,.3).normalize(),a=new He(new Ii(900,24,12),new ii({side:un,depthWrite:!1,fog:!1,uniforms:{a:{value:new We(s.sky[0])},b:{value:new We(s.sky[1])},sd:{value:o}},vertexShader:"varying vec3 vp; void main(){ vp = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.); }",fragmentShader:`uniform vec3 a; uniform vec3 b; uniform vec3 sd; varying vec3 vp; void main(){ vec3 col = mix(b, a, smoothstep(-0.05, 0.55, vp.y)); float s = max(dot(vp, sd), 0.); col += vec3(1.,.93,.75) * (pow(s, 700.) * 2.5 + pow(s, 14.) * .2); gl_FragColor = vec4(col, 1.);
#include <colorspace_fragment>
}`}));a.position.set(r/2,0,r/2),a.frustumCulled=!1,n.add(a),n.add(new Li(s.hemiSky,s.ground,1));let l=new Ni(s.sun,2.2);if(l.position.set(r/2+o.x*r,o.y*r,r/2+o.z*r),l.target.position.set(r/2,0,r/2),i>0){l.castShadow=!0;let h=l.shadow.camera,f=r*.62;h.left=-f,h.right=f,h.top=f,h.bottom=-f,h.near=1,h.far=r*2.4;let u=i>1?4096:2048;l.shadow.mapSize.set(u,u),l.shadow.bias=-8e-4,l.shadow.normalBias=.06}n.add(l,l.target),n.add(new Jo("#ffffff",.1));let c=I0(7);if(t==="vertigo"){let h=new Vt(1,1,1),f=new Fn({color:"#ffffff"}),u=new Un(h,f,140),d=new Ut;for(let _=0;_<140;_++){let x=c()*Math.PI*2,g=120+c()*320,v=40+c()*140;d.position.set(r/2+Math.cos(x)*g,-160+v/2,r/2+Math.sin(x)*g),d.scale.set(14+c()*26,v,14+c()*26),d.updateMatrix(),u.setMatrixAt(_,d.matrix),u.setColorAt(_,new We().setHSL(.58,.14,.45+c()*.25))}n.add(u);let p=new He(new ni(3e3,3e3),new Fn({color:s.ground}));p.rotation.x=-Math.PI/2,p.position.set(r/2,-160,r/2),n.add(p)}else{let h=new He(new ni(3e3,3e3),new Fn({color:s.ground}));h.rotation.x=-Math.PI/2,h.position.set(r/2,-.6,r/2),n.add(h);let f=new Xs(1,1,6,1),u=new Fn({color:s.ground,flatShading:!0}),d=new Un(f,u,40),p=new Ut;for(let _=0;_<40;_++){let x=_/40*Math.PI*2,g=260+c()*160,v=25+c()*50;p.position.set(r/2+Math.cos(x)*g,v/2-1,r/2+Math.sin(x)*g),p.scale.set(60+c()*60,v,60+c()*60),p.rotation.y=c()*3,p.updateMatrix(),d.setMatrixAt(_,p.matrix)}n.add(d)}return l}function I0(n){return()=>{n|=0,n=n+1831565813|0;let e=Math.imul(n^n>>>15,1|n);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function Kn(n,e,t,i,s,r,o,a,l=1){let c=e-s/2,h=e+s/2,f=t-r/2,u=t+r/2,d=i-o/2,p=i+o/2,_=[[[h,f,d],[h,f,p],[h,u,p],[h,u,d],[1,0,0],.9],[[c,f,d],[c,f,p],[c,u,p],[c,u,d],[-1,0,0],.9],[[c,f,p],[h,f,p],[h,u,p],[c,u,p],[0,0,1],.82],[[c,f,d],[h,f,d],[h,u,d],[c,u,d],[0,0,-1],.82],[[c,u,d],[c,u,p],[h,u,p],[h,u,d],[0,1,0],1]];for(let[x,g,v,w,S,C]of _)ai(n,[x,g,v,w],S,Kt(a,C),S[1]?Jr(l):Gc(S[0],S[2],l))}function _M(n,e,t,i){let s=n.n,r=n.cell,o=n.top[0],a=n.cls[0],l=g=>a[g]===3,c=g=>a[g]===1,h=I0(e.length*131),f=e==="vertigo"?[.32,.45,.55]:[.16,.13,.11],u=e==="mirage"?[.85,.78,.66]:e==="vertigo"?[.45,.47,.5]:[.62,.48,.32],d=e==="mirage"?[.2,.52,.55]:[.35,.5,.68],p=e==="dust2"?[[.22,.42,.62],[.45,.3,.18]]:e==="mirage"?[[.2,.48,.5],[.5,.33,.2]]:[[.55,.56,.58],[.7,.55,.15]],_=[[1,0],[-1,0],[0,1],[0,-1]];for(let[g,v]of _){let w=g===0;for(let S=1;S<s-1;S++){let C=-1,A=0,m=0,b=P=>{if(C<0)return;let M=(P-C)*r,E=m-A;if(M>3&&E>3.2){let R=Math.floor(M/4.2);for(let y=0;y<R;y++){let T=(C+(y+.5)*(P-C)/R)*r,I=h(),N=(g>0||v>0?S+1:S)*r,z=.03,B=w?T:N-g*z,F=w?N-v*z:T,U=w?1:.1,V=w?.1:1;if(I<.16&&E>3){let $=p[Math.floor(h()*2)];Kn(t.plain,B,A+1.15,F,U*1.4+(w?0:.06),2.3,V*1.4+(w?.06:0),u),Kn(t.plain,B-g*.02,A+1.1,F-v*.02,U*1.2+(w?0:.06),2.2,V*1.2+(w?.06:0),$)}else if(E>4.2){let $=A+3.4;if(Kn(t.plain,B,$,F,U*1.1+(w?0:.08),1.35,V*1.1+(w?.08:0),u),Kn(t.plain,B-g*.02,$,F-v*.02,U*.85+(w?0:.08),1.1,V*.85+(w?.08:0),f),Kn(t.plain,B-g*.08,$-.7,F-v*.08,U*1.25+(w?0:.18),.08,V*1.25+(w?.18:0),u),I>.72)for(let ee of[-1,1]){let H=w?ee*.75:0,K=w?0:ee*.75;Kn(t.plain,B+H-g*.04,$,F+K-v*.04,U*.38+(w?0:.05),1.15,V*.38+(w?.05:0),d)}else if(e==="mirage"&&I>.5){let ee=[[.75,.25,.2],[.85,.65,.25],[.25,.45,.6]][Math.floor(h()*3)];Kn(t.plain,B-g*.45,$+.85,F-v*.45,w?1.5:.9,.08,w?.9:1.5,ee)}}}}C=-1};for(let P=1;P<s-1;P++){let M=w?P:S,E=w?S:P,R=E*s+M,y=(E+v)*s+(M+g),T=c(R)&&l(y)&&!isNaN(o[y]);T&&C>=0&&Math.abs(o[R]-A)<.35&&Math.abs(o[y]-m)<.7||(b(P),T&&(C=P,A=o[R],m=o[y]))}b(s-1)}}if(n.slabs){let g=n.top[1],v=n.bot[1],w=n.cls[1];for(let S=1;S<s-1;S++)for(let C=1;C<s-1;C++){let A=S*s+C;if(!(w[A]!==4||v[A]-o[A]>2.8||!c(A)&&a[A]!==2))for(let[m,b]of _){let P=(S+b)*s+C+m;if(!l(P))continue;let M=(C+.5+m*.5)*r-m*.06,E=(S+.5+b*.5)*r-b*.06,R=v[A]-o[A];Kn(t.wood,M,o[A]+R/2,E,m?.14:r,R,b?.14:r,Kt(i.slab,1.1),2)}}}let x=[];for(let g=0;g<900&&x.length<(e==="mirage"?26:18);g++){let v=2+Math.floor(h()*(s-4)),w=2+Math.floor(h()*(s-4)),S=w*s+v;if(!c(S))continue;let C=0;for(let[P,M]of _)l((w+M*2)*s+v+P*2)&&C++;if(C!==2||n.flags[S]&60)continue;let A=(v+.5)*r,m=(w+.5)*r,b=o[S];if(!x.some(P=>Math.hypot(P[0]-A,P[1]-m)<8))if(x.push([A,m]),e==="mirage"&&h()<.35){Kn(t.plain,A,b+.3,m,.7,.6,.7,[.7,.42,.28]);for(let P=0;P<5;P++){let M=P/5*Math.PI*2;Kn(t.plain,A+Math.cos(M)*.35,b+.85,m+Math.sin(M)*.35,.5,.08,.5,[.28,.5,.22])}}else{let P=e==="vertigo"?[.85,.55,.1]:h()<.5?[.3,.42,.55]:[.55,.3,.2];Kn(t.plain,A,b+.45,m,.6,.9,.6,P),Kn(t.plain,A,b+.3,m,.64,.06,.64,Kt(P,.7)),Kn(t.plain,A,b+.65,m,.64,.06,.64,Kt(P,.7))}}}var R0={dust2:{floor:[[.9,.76,.56],"sand",3.2],road:[[.8,.72,.6],"tiles",3],wall:[[.95,.84,.66],"blocks",2.6],trim:[[.8,.69,.52],"stone",1.6],crate:[[1,.95,.88],"crate",1.6256],door:[[.66,.48,.3],"wood",1.6],concrete:[[.8,.76,.68],"concrete",2.4],rock:[[.76,.65,.52],"stone",2],metal:[[.42,.44,.47],"metal",1.5],dark:[[.16,.14,.12],null,1],ceiling:[[.66,.5,.34],"wood",2],roof:[[.86,.74,.56],"blocks",2.6]},mirage:{floor:[[.92,.84,.7],"tiles",2.2],wall:[[.97,.9,.77],"plaster",3],ceiling:[[.66,.47,.32],"wood",2],roof:[[.8,.44,.3],"roof",2]}};function L0(n,e,t,i,s){let r=R0[i]||R0.dust2,o=pa(i),a=new Ct,l=t.origin||[0,0,0],c=0;for(let _ of t.parts)c+=_.tris;let h=new Array(c),f=0,u=0;for(let _ of t.parts){for(let x=0;x<_.tris;x++){let g=_.cat;if(_.cat==="floor"&&s&&r.roof){let v=f+x*9,w=(e[v]+e[v+3]+e[v+6])/300,S=(e[v+1]+e[v+4]+e[v+7])/300,C=(e[v+2]+e[v+5]+e[v+8])/300;vM(s,w,S,C)&&(g="roof")}h[u+x]=g}f+=_.tris*9,u+=_.tris}let d=[...new Set(h)],p=0;for(let _ of d){let x=[];for(let E=0;E<c;E++)h[E]===_&&x.push(E);let g=x.length,v=new Float32Array(g*9),w=new Float32Array(g*9),S=new Float32Array(g*6),C=new Float32Array(g*9),[A,m,b]=r[_]||r.wall||[[.8,.8,.8],null,2];for(let E=0;E<g;E++){let R=x[E]*9;for(let ie=0;ie<9;ie++)v[E*9+ie]=e[R+ie]/100;let y=E*9,T=v[y+3]-v[y],I=v[y+4]-v[y+1],N=v[y+5]-v[y+2],z=v[y+6]-v[y],B=v[y+7]-v[y+1],F=v[y+8]-v[y+2],U=I*F-N*B,V=N*z-T*F,$=T*B-I*z,ee=Math.hypot(U,V,$)||1;U/=ee,V/=ee,$/=ee;let H=Math.abs(U),K=Math.abs(V),Q=Math.abs($),he=1+(Vc(Math.floor(v[y]/3),Math.floor(v[y+2]/3+v[y+1]/4))-.5)*.07;for(let ie=0;ie<3;ie++){let ce=v[y+ie*3],Le=v[y+ie*3+1],Ce=v[y+ie*3+2];C[y+ie*3]=U,C[y+ie*3+1]=V,C[y+ie*3+2]=$;let Ne=he;if(K<.5){let _e=MM(n,ce,Ce,Le+.15),Xe=_e>-1e8?Le-_e:9;Xe<.3?Ne*=.72:Xe<.9&&(Ne*=.8+(Xe-.3)/.6*.2)}w[y+ie*3]=A[0]*Ne,w[y+ie*3+1]=A[1]*Ne,w[y+ie*3+2]=A[2]*Ne;let Ye=ce-l[0],oe=Le-l[1],me=Ce-l[2],de,Ee;K>=H&&K>=Q?(de=Ye,Ee=me):H>=Q?(de=me,Ee=-oe):(de=Ye,Ee=-oe),S[E*6+ie*2]=de/b,S[E*6+ie*2+1]=Ee/b}}p+=g;let P=new Zt;P.setAttribute("position",new Qt(v,3)),P.setAttribute("normal",new Qt(C,3)),P.setAttribute("color",new Qt(w,3)),P.setAttribute("uv",new Qt(S,2)),P.computeBoundingSphere();let M=new He(P,Hc(m,{side:si,rough:_==="metal"?.6:.92,metal:_==="metal"?.3:0,bump:_==="floor"||_==="roof"?.9:1.1}));M.castShadow=!0,M.receiveShadow=!0,M.matrixAutoUpdate=!1,a.add(M)}return a.matrixAutoUpdate=!1,{mesh:a,tris:p,theme:o}}function vM(n,e,t,i){if(t<3.5)return!1;let s=Math.floor(e/n.c),r=Math.floor(i/n.c);for(let o=-1;o<=1;o++)for(let a=-1;a<=1;a++){let l=s+a,c=r+o;if(l<0||c<0||l>=n.m||c>=n.m)continue;let h=c*n.m+l;for(let f=0;f<n.L;f++){let u=n.H[f][h];if(!isNaN(u)&&Math.abs(u-t)<.9&&n.main[f*n.N+h])return!1}}return!0}function MM(n,e,t,i){let s=n.idx(e,t);if(s<0)return-1/0;let r=-1/0;for(let o=0;o<n.L;o++){let a=n.top[o][s];!isNaN(a)&&a<=i&&a>r&&(r=a)}return r}var ns=.0254,nt={gravity:800*ns,jump:301.993*ns,accel:5.5,airAccel:12,friction:5.2,stop:80*ns,airCap:30*ns,hStand:72*ns,hCrouch:54*ns,eyeStand:64*ns,eyeCrouch:46*ns,walk:.52,crouchMul:.34,r:.4};function Wc(n,e,t,i=0){return{x:n,y:e,z:t,vx:0,vy:0,vz:0,yaw:i,pitch:0,duck:0,onGround:!0,landT:0,h:nt.hStand,alive:!0,jumpHeld:!1}}var Pn=n=>nt.eyeStand+(nt.eyeCrouch-nt.eyeStand)*n.duck;function Xc(n,e,t,i,s){let r=t.crouch?1:0;if(r>e.duck)e.duck=Math.min(1,e.duck+i*8);else if(r<e.duck){let x=Math.max(0,e.duck-i*8),g=nt.hStand+(nt.hCrouch-nt.hStand)*x;zc(n,e.x,e.z,e.y)>=e.y+g&&(e.duck=x)}let o=e.h;e.h=nt.hStand+(nt.hCrouch-nt.hStand)*e.duck,!e.onGround&&e.h<o&&(e.y+=(o-e.h)*.5);let a=s*(e.duck>.5?nt.crouchMul:t.walk?nt.walk:1),l=Math.sin(e.yaw),c=Math.cos(e.yaw),h=-l*t.f+c*t.s,f=-c*t.f-l*t.s,u=Math.hypot(h,f);if(u>1e-6?(h/=u,f/=u):a=0,e.onGround)if(t.jump&&!e.jumpHeld&&zc(n,e.x,e.z,e.y)>e.y+e.h+.05)e.vy=nt.jump,e.onGround=!1,e.jumpHeld=!0;else{let x=Math.hypot(e.vx,e.vz);if(x>.001){let g=Math.max(x,nt.stop)*nt.friction*i*(e.landT>0?1.4:1),v=Math.max(0,x-g)/x;e.vx*=v,e.vz*=v}N0(e,h,f,a,nt.accel,i)}e.onGround||N0(e,h,f,Math.min(a,nt.airCap),nt.airAccel,i,a),t.jump||(e.jumpHeld=!1),e.landT>0&&(e.landT-=i),bi(n,e.x,e.z,e.y,e.h,nt.r)&&bM(n,e);let d=e.x+e.vx*i;bi(n,d,e.z,e.y,e.h,nt.r)?e.vx=0:e.x=d;let p=e.z+e.vz*i;bi(n,e.x,p,e.y,e.h,nt.r)?e.vz=0:e.z=p;let _=Ku(n,e.x,e.z,e.y,nt.r-.02);if(e.onGround&&(_>=e.y-.62&&_>-1/0?(e.y=_,e.vy=0):e.onGround=!1),!e.onGround){e.vy-=nt.gravity*i;let x=e.y;e.y+=e.vy*i;let g=zc(n,e.x,e.z,x);e.y+e.h>g&&e.vy>0&&(e.y=Math.max(x,g-e.h),e.vy=0);let v=Ku(n,e.x,e.z,e.y-e.vy*i,nt.r-.02);if(e.vy<=0&&e.y<=v){let w=-e.vy;return e.y=v,e.vy=0,e.onGround=!0,e.landT=.12,w}}return SM(n,e),0}function bM(n,e){for(let t=.04;t<=.8;t+=.04)for(let i=0;i<16;i++){let s=i*Math.PI/8,r=e.x+Math.cos(s)*t,o=e.z+Math.sin(s)*t;for(let a of[0,.62*.9])if(!bi(n,r,o,e.y+a,e.h,nt.r))return e.x=r,e.z=o,e.y+=a,!0}return!1}function SM(n,e){let t=n.idx(e.x,e.z);if(!(t<0))for(let i=0;i<n.L;i++){let s=n.top[i][t],r=n.bot[i][t];if(!isNaN(s)&&r<e.y-.05&&s>e.y+.02&&s-e.y<2.5){e.y=s,e.vy=Math.max(0,e.vy),e.onGround=!0;return}}}function N0(n,e,t,i,s,r,o){let a=n.vx*e+n.vz*t,l=i-a;if(l<=0)return;let c=s*r*(o||i);c>l&&(c=l),n.vx+=c*e,n.vz+=c*t}function ef(n){let e=n/ns;return e>580?Math.round((e-580)*(100/444)):0}function wM(n){let e=n.h,t=e/nt.hStand;return[{part:"head",y0:e-.27*t,y1:e,r:.13},{part:"chest",y0:e-.62*t,y1:e-.27*t,r:.22},{part:"stomach",y0:e-.9*t,y1:e-.62*t,r:.2},{part:"leg",y0:0,y1:e-.9*t,r:.18}]}function U0(n,e,t,i,s,r,o,a){let l=null;for(let c of wM(n)){let h=n.x,f=n.z,u=e-h,d=i-f,p=s*s+o*o,_=2*(u*s+d*o),x=u*u+d*d-c.r*c.r,g;if(p<1e-9){if(x>0)continue;g=0}else{let w=_*_-4*p*x;if(w<0||(g=(-_-Math.sqrt(w))/(2*p),g<0&&(g=(-_+Math.sqrt(w))/(2*p)),g<0))continue}let v=t+r*g;v<n.y+c.y0||v>n.y+c.y1||g<=a&&(!l||g<l.t)&&(l={t:g,part:c.part})}return l}var TM=1.15,tf=.74;function jr(n){let e=Math.max(1,Math.round(.55/n.cell)),t=Math.floor(n.n/e),i=t*t,s=n.cell*e,r=[];for(let g=0;g<n.L;g++)r.push(new Float32Array(i).fill(NaN));for(let g=0;g<t;g++)for(let v=0;v<t;v++){let w=(v+.5)*s,S=(g+.5)*s,C=n.idx(w,S);for(let A=0;A<n.L;A++){let m=n.top[A][C];if(isNaN(m))continue;let b=n.cls[A][C];b===3||b===4||bi(n,w,S,m,nt.hCrouch+.05,.36)||(r[A][g*t+v]=m)}}let o={W:n,k:e,m:t,c:s,H:r,L:n.L};o.node=(g,v)=>g*i+v,o.pos=g=>{let v=Math.floor(g/i),w=g%i;return[(w%t+.5)*s,r[v][w],(Math.floor(w/t)+.5)*s,v]},o.nearest=(g,v,w)=>{let S=Math.floor(g/s),C=Math.floor(w/s),A=-1,m=1e9;for(let b=0;b<=6&&A<0;b++)for(let P=-b;P<=b;P++)for(let M=-b;M<=b;M++){if(Math.max(Math.abs(M),Math.abs(P))!==b)continue;let E=S+M,R=C+P;if(E<0||R<0||E>=t||R>=t)continue;let y=R*t+E;for(let T=0;T<n.L;T++){let I=r[T][y];if(isNaN(I)||o.main&&!o.main[T*i+y])continue;let N=Math.abs(I-v)*3+Math.hypot(M,P);N<m&&(m=N,A=T*i+y)}}return A};let a=[1,-1,0,0,1,1,-1,-1],l=[0,0,1,-1,1,-1,1,-1];o.neighbors=(g,v)=>{v.length=0;let w=Math.floor(g/i),S=g%i,C=S%t,A=(S-C)/t,m=r[w][S];for(let b=0;b<8;b++){let P=C+a[b],M=A+l[b];if(P<0||M<0||P>=t||M>=t)continue;let E=M*t+P;if(!(b>=4&&(!c(w,A*t+P,m)||!c(w,M*t+C,m))))for(let R=0;R<n.L;R++){let y=r[R][E];if(isNaN(y))continue;let T=y-m;T>TM||-T>2.2||T>tf&&b>=4||v.push(R*i+E,(b>=4?1.414:1)+(T>tf?4:0))}}return v};function c(g,v,w){for(let S=0;S<n.L;S++){let C=r[S][v];if(!isNaN(C)&&Math.abs(C-w)<=tf)return!0}return!1}let h=new Uint8Array(n.L*i);for(let g=0;g<n.L;g++)for(let v=0;v<i;v++){if(isNaN(r[g][v]))continue;let w=v%t,S=(v-w)/t,C=0;for(let A=0;A<8;A++){let m=w+a[A],b=S+l[A];(m<0||b<0||m>=t||b>=t||!c(g,b*t+m,r[g][v]))&&C++}h[g*i+v]=C}o.edge=h,o.N=i;let f=n.L*i,u=[],d=Ju(n,32),p=[];for(let g=0;g<d.length&&p.length<8;g+=Math.max(1,Math.floor(d.length/8))){let v=d[g],w=(v%n.n+.5)*n.cell,S=(Math.floor(v/n.n)+.5)*n.cell,C=Math.floor(S/o.c)*t+Math.floor(w/o.c);for(let A=0;A<n.L;A++)if(!isNaN(r[A][C])){p.push(A*i+C);break}}if(!p.length){for(let g=0;g<f;g++)if(!isNaN(r[Math.floor(g/i)][g%i])){p.push(g);break}}let _=null,x=-1;for(let g of p){if(_&&_[g])continue;let v=new Uint8Array(f),w=new Uint8Array(f),S=new Map,C=[g];for(v[g]=1;C.length;){let b=C.pop();o.neighbors(b,u);for(let P=0;P<u.length;P+=2){let M=u[P],E=S.get(M);E||S.set(M,E=[]),E.push(b),v[M]||(v[M]=1,C.push(M))}}for(C=[g],w[g]=1;C.length;){let b=C.pop(),P=S.get(b);if(P)for(let M of P)w[M]||(w[M]=1,C.push(M))}let A=new Uint8Array(f),m=0;for(let b=0;b<f;b++)v[b]&w[b]&&(A[b]=1,m++);m>x&&(x=m,_=A)}return o.main=_,o}var nr={a:[],f:[]};function Cs(n,e,t,i=6e4){if(e<0||t<0)return null;let s=n.L*n.N;(!n.g||n.g.length!==s)&&(n.g=new Float32Array(s),n.came=new Int32Array(s),n.seen=new Uint32Array(s),n.closed=new Uint32Array(s),n.stamp=0);let r=n.g,o=n.came,a=n.seen,l=n.closed,c=++n.stamp,[h,,f]=n.pos(t),u=x=>{let g=n.pos(x);return Math.hypot(g[0]-h,g[2]-f)/n.c};nr.a.length=0,nr.f.length=0,F0(e,u(e)),r[e]=0,o[e]=-1,a[e]=c;let d=[],p=0;for(;nr.a.length&&p++<i;){let x=EM();if(x===t)break;if(l[x]!==c){l[x]=c,n.neighbors(x,d);for(let g=0;g<d.length;g+=2){let v=d[g],w=r[x]+d[g+1]+n.edge[v]*.35;a[v]===c&&w>=r[v]||(a[v]=c,r[v]=w,o[v]=x,F0(v,w+u(v)))}}}if(a[t]!==c)return null;let _=[];for(let x=t;x!==-1;x=o[x])_.push(n.pos(x));return _.reverse(),AM(n,_)}function F0(n,e){let t=nr.a,i=nr.f;t.push(n),i.push(e);let s=t.length-1;for(;s>0;){let r=s-1>>1;if(i[r]<=i[s])break;[t[r],t[s]]=[t[s],t[r]],[i[r],i[s]]=[i[s],i[r]],s=r}}function EM(){let n=nr.a,e=nr.f,t=n[0],i=n.pop(),s=e.pop();if(n.length){n[0]=i,e[0]=s;let r=0;for(;;){let o=2*r+1,a=o+1,l=r;if(o<n.length&&e[o]<e[l]&&(l=o),a<n.length&&e[a]<e[l]&&(l=a),l===r)break;[n[l],n[r]]=[n[r],n[l]],[e[l],e[r]]=[e[r],e[l]],r=l}}return t}function AM(n,e){if(e.length<3)return e;let t=[e[0]];for(let i=1;i<e.length-1;i++){let s=t[t.length-1],r=e[i+1],o=[e[i][0]-s[0],e[i][2]-s[2]],a=[r[0]-e[i][0],r[2]-e[i][2]];(Math.abs(o[0]*a[1]-o[1]*a[0])>1e-4||Math.abs(e[i][1]-s[1])>.3||Math.hypot(e[i][0]-s[0],e[i][2]-s[2])>n.c*6)&&t.push(e[i])}return t.push(e[e.length-1]),t}function li(n,e){let t=n.W,i=new Set;for(let s of Ju(t,e)){let r=(s%t.n+.5)*t.cell,o=(Math.floor(s/t.n)+.5)*t.cell,a=Math.floor(r/n.c),l=Math.floor(o/n.c),c=l*n.m+a;for(let h=t.L-1;h>=0;h--)if(!isNaN(n.H[h][c])&&n.main[h*n.N+c]){i.add(h*n.N+c);break}}return[...i]}function nf(n,e,t=1.45){let{m:i,N:s,H:r}=e,o=n.L*s;if(!e.main)return 0;let a=[[1,0],[-1,0],[0,1],[0,-1]],l=(w,S)=>{let C=Math.floor(w/s),A=w%s,m=A%i,b=(A-m)/i,P=r[C][A];for(let[M,E]of a){let R=m+M,y=b+E;if(R<0||y<0||R>=i||y>=i)continue;let T=y*i+R;for(let I=0;I<n.L;I++){let N=r[I][T];!isNaN(N)&&N-P<=t&&S(I*s+T)}}},c=new Uint8Array(o),h=[];for(let w=0;w<o;w++)e.main[w]&&(c[w]=1,h.push(w));for(;h.length;){let w=h.pop();l(w,S=>{c[S]||(c[S]=1,h.push(S))})}let f=new Map;for(let w=0;w<o;w++)c[w]&&l(w,S=>{if(!c[S])return;let C=f.get(S);C||f.set(S,C=[]),C.push(w)});let u=new Uint8Array(o);for(let w=0;w<o;w++)e.main[w]&&(u[w]=1,h.push(w));for(;h.length;){let w=h.pop(),S=f.get(w);if(S)for(let C of S)u[C]||(u[C]=1,h.push(C))}let d=new Uint8Array(o).fill(255),p=new Float32Array(o),_=[];for(let w=0;w<o;w++)e.main[w]&&(d[w]=0,p[w]=r[Math.floor(w/s)][w%s],_.push(w));let x=w=>r[Math.floor(w/s)][w%s];for(let w=0;w<_.length;w++){let S=_[w],C=x(S);l(S,A=>{if(e.main[A])return;let m=x(A)-C,b=d[S]+(m>.7?1:0),P=e.main[S]?C:p[S];b<d[A]&&(d[A]=b,p[A]=P,_.push(A))})}let g=w=>!e.main[w]&&d[w]<255&&(d[w]>2||x(w)-p[w]>2.6),v=0;for(let w=0;w<o;w++){let S=c[w]&&!u[w];if(!S&&!g(w))continue;if(!S){let M=Math.floor(w/s),E=w%s,R=E%i,y=(E-R)/i,T=r[M][E];for(let I=0;I<e.k;I++)for(let N=0;N<e.k;N++){let z=(y*e.k+I)*n.n+R*e.k+N,B=-1,F=.4;for(let V=0;V<n.L;V++){let $=n.top[V][z];!isNaN($)&&Math.abs($-T)<F&&(F=Math.abs($-T),B=V)}if(B<0)continue;let U=B+1<n.L&&!isNaN(n.bot[B+1][z])?n.bot[B+1][z]:60;n.top[B][z]=Math.min(U,n.top[B][z]+2.2),n.cls[B][z]=3,v++}continue}let C=Math.floor(w/s),A=w%s,m=A%i,b=(A-m)/i,P=r[C][A];for(let M=0;M<e.k;M++)for(let E=0;E<e.k;E++){let R=(b*e.k+M)*n.n+m*e.k+E,y=-1,T=.4;for(let N=0;N<n.L;N++){let z=n.top[N][R];!isNaN(z)&&Math.abs(z-P)<T&&(T=Math.abs(z-P),y=N)}if(y<0)continue;let I=y+1<n.L&&!isNaN(n.bot[y+1][R])?n.bot[y+1][R]:40;n.top[y][R]=I,n.cls[y][R]=3,v++}}return v}function O0(n,e,t=null){let i=n.L*n.N,s=new Float64Array(i).fill(1/0),r=[],o=[],a=(c,h)=>{o.push([c,h]);let f=o.length-1;for(;f>0;){let u=f-1>>1;if(o[u][0]<=o[f][0])break;[o[u],o[f]]=[o[f],o[u]],f=u}},l=()=>{let c=o[0],h=o.pop();if(o.length){o[0]=h;let f=0;for(;;){let u=f*2+1,d=u+1,p=f;if(u<o.length&&o[u][0]<o[p][0]&&(p=u),d<o.length&&o[d][0]<o[p][0]&&(p=d),p===f)break;[o[p],o[f]]=[o[f],o[p]],f=p}}return c};for(let c of e)s[c]=0,a(0,c);for(;o.length;){let[c,h]=l();if(!(c>s[h])){t?r=t.get(h)||[]:n.neighbors(h,r);for(let f=0;f<r.length;f+=2){let u=r[f],d=c+r[f+1];n.main[u]&&d<s[u]&&(s[u]=d,a(d,u))}}}return s}function z0(n,e){let t=li(e,16),i=li(e,32),s=li(e,4),r=li(e,8);if(!t.length||!i.length||!s.length||!r.length)return null;let o=[],a=O0(e,t),l=O0(e,i),c=(E,R)=>E.reduce((y,T)=>Math.min(y,R[T]),1/0),h=E=>Math.max(c(E,a),c(E,l))+.3*(c(E,a)+c(E,l)),f=h(s)<=h(r)?"A":"B",u=f==="A"?s:r,d=e.L*e.N,p=new Uint8Array(d),_=E=>{let R=0,y=0,T=0;for(let N of E){let z=e.pos(N);R+=z[0],y+=z[1],T+=z[2]}let I=E.length;return e.nearest(R/I,y/I,T/I)},x=_(t),g=_(i),v=_(u),w=[];for(let[E,R]of[[x,v],[v,x],[g,v],[v,g],[x,g],[g,x]]){let y=Cs(e,E,R);if(y)for(let T of y){let I=e.nearest(T[0],T[1],T[2]);I>=0&&w.push([I,16])}}for(let E of t)w.push([E,14]);for(let E of i)w.push([E,14]);for(let E of u)w.push([E,16]);let S=new Int8Array(d).fill(-1),C=[];for(let[E,R]of w)R>S[E]&&(S[E]=R,C.push(E));for(;C.length;){let E=C.pop();if(p[E]=1,!(S[E]<=0)){e.neighbors(E,o);for(let R=0;R<o.length;R+=2){let y=o[R];e.main[y]&&S[E]-1>S[y]&&(S[y]=S[E]-1,C.push(y))}}}let A=[],m=new Set,b=Uint8Array.from(p);for(let E=0;E<d;E++)if(p[E]){e.neighbors(E,A);for(let R=0;R<A.length;R+=2)e.main[A[R]]&&(b[A[R]]=1)}p.set(b);for(let E=0;E<d;E++)if(p[E]){e.neighbors(E,A);for(let R=0;R<A.length;R+=2){let y=A[R];!p[y]&&e.main[y]&&m.add(y)}}let P=[];for(let E of m){let R=Math.floor(E/e.N),y=E%e.N,T=y%e.m,I=Math.floor(y/e.m),N=e.H[R][y];for(let z=0;z<e.k;z++)for(let B=0;B<e.k;B++){let F=T*e.k+B,U=I*e.k+z,V=U*n.n+F,$=-1,ee=.35;for(let he=0;he<n.L;he++){let ie=n.top[he][V];!isNaN(ie)&&Math.abs(ie-N)<ee&&(ee=Math.abs(ie-N),$=he)}if($<0)continue;let H=!1;for(let he=0;he<e.L&&!H;he++){let ie=he*e.N+y;p[ie]&&Math.abs(e.H[he][y]-N)<3.4&&ie!==E&&(H=!0)}if(H)continue;let K=n.top[$][V],Q=$+1<n.L&&!isNaN(n.bot[$+1][V])?n.bot[$+1][V]:1/0;n.top[$][V]=Math.min(K+3.2,Q),n.cls[$][V]=3,P.push([F,U,K,Math.min(3.2,Q-K)])}}let M=f==="A"?8:4;for(let E=0;E<n.flags.length;E++)n.flags[E]&=~M;return{site:f,cells:P}}function k0(n,e){let t=new Vt(1,1,1),i=[],s=[],r=[],o=[],a=t.attributes.position.array,l=t.attributes.normal.array,c=t.attributes.uv.array,h=t.index.array,f=(p,_,x,g,v)=>{for(let w=0;w<h.length;w++){let S=h[w],C=p+(a[S*3]+.5)*n.cell,A=x+(a[S*3+1]+.5)*(g-x),m=_+(a[S*3+2]+.5)*n.cell;i.push(C,A,m),s.push(l[S*3],l[S*3+1],l[S*3+2]),r.push((C+m)/1.2,A/1.2),o.push(v[0],v[1],v[2])}};for(let[p,_,x,g]of e){let v=p*n.cell,w=_*n.cell,S=p+_>>2&1;if(g<1.4){f(v,w,x,x+g,[.78,.62,.42]);continue}f(v,w,x,x+1,[.78,.62,.42]),f(v,w,x+1,x+1.3,S?[.95,.75,.15]:[.14,.14,.14]),f(v,w,x+1.3,x+g,[.72,.57,.38])}let u=new Zt;u.setAttribute("position",new st(i,3)),u.setAttribute("normal",new st(s,3)),u.setAttribute("uv",new st(r,2)),u.setAttribute("color",new st(o,3));let d=new He(u,Hc("crate"));return d.castShadow=!0,d.receiveShadow=!0,d}var gt=n=>({auto:!1,pellets:1,hs:4,range:8192,rangeMod:.98,spread:.004,move:.12,kick:.6,sway:.4,kickCap:12,recover:9,scope:null,...n}),et={knife:gt({name:"Cuchillo",cat:"knife",side:"both",price:0,reward:1500,dmg:40,ap:.85,rpm:150,mag:0,reserve:0,speed:250,range:64,auto:!0}),glock:gt({name:"Glock-18",cat:"pistol",side:"T",price:200,reward:300,dmg:30,ap:.47,rpm:400,mag:20,reserve:120,reload:2.2,speed:240,rangeMod:.85,spread:.007,move:.05,kick:.9,sway:.4,kickCap:5}),usp:gt({name:"USP-S",cat:"pistol",side:"CT",price:200,reward:300,dmg:35,ap:.505,rpm:352,mag:12,reserve:24,reload:2.2,speed:240,rangeMod:.91,spread:.004,move:.045,kick:1.1,sway:.3,kickCap:5,silent:!0}),p2000:gt({name:"P2000",cat:"pistol",side:"CT",price:200,reward:300,dmg:35,ap:.505,rpm:352,mag:13,reserve:52,reload:2.2,speed:240,rangeMod:.91,spread:.005,move:.045,kick:1.1,sway:.3,kickCap:5}),dualies:gt({name:"Dual Berettas",cat:"pistol",side:"both",price:300,reward:300,dmg:38,ap:.575,rpm:500,mag:30,reserve:120,reload:3.8,speed:240,rangeMod:.79,spread:.009,move:.05,kick:1,sway:.5,kickCap:6}),p250:gt({name:"P250",cat:"pistol",side:"both",price:300,reward:300,dmg:38,ap:.64,rpm:400,mag:13,reserve:26,reload:2.2,speed:240,rangeMod:.85,spread:.007,move:.05,kick:1.3,sway:.4,kickCap:6}),tec9:gt({name:"Tec-9",cat:"pistol",side:"T",price:500,reward:300,dmg:33,ap:.903,rpm:500,mag:18,reserve:90,reload:2.5,speed:240,rangeMod:.831,spread:.009,move:.04,kick:1.2,sway:.5,kickCap:7}),fiveseven:gt({name:"Five-SeveN",cat:"pistol",side:"CT",price:500,reward:300,dmg:32,ap:.9115,rpm:400,mag:20,reserve:100,reload:2.2,speed:240,rangeMod:.81,spread:.007,move:.045,kick:1.1,sway:.4,kickCap:6}),cz75:gt({name:"CZ75-Auto",cat:"pistol",side:"both",price:500,reward:100,dmg:31,ap:.776,rpm:600,mag:12,reserve:12,reload:2.7,speed:240,rangeMod:.85,spread:.008,move:.05,kick:1.1,sway:.6,kickCap:8,auto:!0}),deagle:gt({name:"Desert Eagle",cat:"pistol",side:"both",price:700,reward:300,dmg:53,ap:.932,rpm:267,mag:7,reserve:35,reload:2.2,speed:230,rangeMod:.81,spread:.006,move:.1,kick:3.4,sway:.6,kickCap:8,recover:7}),r8:gt({name:"R8 Revolver",cat:"pistol",side:"both",price:600,reward:300,dmg:86,ap:.932,rpm:120,mag:8,reserve:8,reload:2.3,speed:220,rangeMod:.94,spread:.006,move:.1,kick:3.6,sway:.4,kickCap:8}),mac10:gt({name:"MAC-10",cat:"smg",side:"T",price:1050,reward:600,dmg:29,ap:.575,rpm:800,mag:30,reserve:100,reload:2.6,speed:240,rangeMod:.8,auto:!0,spread:.009,move:.025,kick:.6,sway:.7,kickCap:7}),mp9:gt({name:"MP9",cat:"smg",side:"CT",price:1250,reward:600,dmg:26,ap:.6,rpm:857,mag:30,reserve:120,reload:2.1,speed:240,rangeMod:.87,auto:!0,spread:.008,move:.025,kick:.55,sway:.6,kickCap:7}),mp7:gt({name:"MP7",cat:"smg",side:"both",price:1500,reward:600,dmg:29,ap:.625,rpm:750,mag:30,reserve:120,reload:3.1,speed:220,rangeMod:.85,auto:!0,spread:.007,move:.03,kick:.5,sway:.5,kickCap:7}),mp5:gt({name:"MP5-SD",cat:"smg",side:"both",price:1500,reward:600,dmg:27,ap:.625,rpm:750,mag:30,reserve:120,reload:2.6,speed:235,rangeMod:.85,auto:!0,spread:.007,move:.025,kick:.45,sway:.5,kickCap:6,silent:!0}),ump:gt({name:"UMP-45",cat:"smg",side:"both",price:1200,reward:600,dmg:35,ap:.65,rpm:666,mag:25,reserve:100,reload:3.5,speed:230,rangeMod:.75,auto:!0,spread:.008,move:.03,kick:.6,sway:.5,kickCap:7}),p90:gt({name:"P90",cat:"smg",side:"both",price:2350,reward:300,dmg:26,ap:.69,rpm:857,mag:50,reserve:100,reload:3.3,speed:230,rangeMod:.86,auto:!0,spread:.008,move:.03,kick:.45,sway:.6,kickCap:7}),bizon:gt({name:"PP-Bizon",cat:"smg",side:"both",price:1400,reward:600,dmg:27,ap:.575,rpm:750,mag:64,reserve:120,reload:2.4,speed:240,rangeMod:.8,auto:!0,spread:.009,move:.03,kick:.45,sway:.6,kickCap:6}),nova:gt({name:"Nova",cat:"heavy",side:"both",price:1050,reward:900,dmg:26,ap:.5,rpm:68,mag:8,reserve:32,reload:4,speed:220,rangeMod:.7,pellets:9,spread:.06,move:.04,kick:3,sway:.5,range:3e3}),xm1014:gt({name:"XM1014",cat:"heavy",side:"both",price:2e3,reward:900,dmg:20,ap:.8,rpm:171,mag:7,reserve:32,reload:3.5,speed:215,rangeMod:.7,pellets:6,spread:.065,move:.04,kick:2.5,sway:.6,range:3500}),sawedoff:gt({name:"Sawed-Off",cat:"heavy",side:"T",price:1100,reward:900,dmg:32,ap:.75,rpm:71,mag:7,reserve:32,reload:3.6,speed:210,rangeMod:.45,pellets:8,spread:.09,move:.04,kick:3,sway:.6,range:1400}),mag7:gt({name:"MAG-7",cat:"heavy",side:"CT",price:1300,reward:900,dmg:30,ap:.75,rpm:71,mag:5,reserve:32,reload:2.5,speed:225,rangeMod:.45,pellets:8,spread:.05,move:.04,kick:3,sway:.5,range:1400}),m249:gt({name:"M249",cat:"heavy",side:"both",price:5200,reward:300,dmg:32,ap:.8,rpm:750,mag:100,reserve:200,reload:5.7,speed:195,rangeMod:.97,auto:!0,spread:.009,move:.15,kick:.6,sway:.8,kickCap:9}),negev:gt({name:"Negev",cat:"heavy",side:"both",price:1700,reward:300,dmg:35,ap:.71,rpm:800,mag:150,reserve:300,reload:5.7,speed:150,rangeMod:.97,auto:!0,spread:.012,move:.15,kick:.7,sway:.6,kickCap:6}),galil:gt({name:"Galil AR",cat:"rifle",side:"T",price:1800,reward:300,dmg:30,ap:.775,rpm:666,mag:35,reserve:90,reload:3,speed:215,auto:!0,spread:.005,move:.14,kick:.62,sway:.5,kickCap:10}),famas:gt({name:"FAMAS",cat:"rifle",side:"CT",price:2050,reward:300,dmg:30,ap:.7,rpm:666,mag:25,reserve:90,reload:3.3,speed:220,auto:!0,spread:.005,move:.14,kick:.6,sway:.5,kickCap:10}),ak47:gt({name:"AK-47",cat:"rifle",side:"T",price:2700,reward:300,dmg:36,ap:.775,rpm:600,mag:30,reserve:90,reload:2.5,speed:215,auto:!0,spread:.0049,move:.16,kick:.82,sway:.75,kickCap:13}),m4a4:gt({name:"M4A4",cat:"rifle",side:"CT",price:3100,reward:300,dmg:33,ap:.7,rpm:666,mag:30,reserve:90,reload:3.1,speed:225,auto:!0,spread:.0042,move:.15,kick:.68,sway:.6,kickCap:11}),m4a1s:gt({name:"M4A1-S",cat:"rifle",side:"CT",price:2900,reward:300,dmg:38,ap:.7,rpm:600,mag:20,reserve:80,reload:3.1,speed:225,auto:!0,spread:.0035,move:.15,kick:.58,sway:.45,kickCap:9,silent:!0}),sg553:gt({name:"SG 553",cat:"rifle",side:"T",price:3e3,reward:300,dmg:30,ap:1,rpm:545,mag:30,reserve:90,reload:2.8,speed:210,auto:!0,spread:.0045,move:.15,kick:.72,sway:.6,kickCap:11,scope:[1.8]}),aug:gt({name:"AUG",cat:"rifle",side:"CT",price:3300,reward:300,dmg:28,ap:.9,rpm:600,mag:30,reserve:90,reload:3.8,speed:220,auto:!0,spread:.004,move:.15,kick:.62,sway:.5,kickCap:10,scope:[1.8]}),ssg08:gt({name:"SSG 08",cat:"sniper",side:"both",price:1700,reward:300,dmg:88,ap:.85,rpm:48,mag:10,reserve:90,reload:3.7,speed:230,rangeMod:.99,spread:.035,scoped:.0012,move:.12,kick:3,sway:.2,kickCap:4,scope:[3.6,9]}),awp:gt({name:"AWP",cat:"sniper",side:"both",price:4750,reward:100,dmg:115,ap:.975,rpm:41,mag:5,reserve:30,reload:3.7,speed:200,rangeMod:.99,spread:.08,scoped:9e-4,move:.2,kick:4.5,sway:.2,kickCap:5,scope:[2.25,9]}),g3sg1:gt({name:"G3SG1",cat:"sniper",side:"T",price:5e3,reward:300,dmg:80,ap:.825,rpm:240,mag:20,reserve:90,reload:4.7,speed:215,rangeMod:.98,auto:!0,spread:.05,scoped:.0018,move:.2,kick:1.6,sway:.4,kickCap:6,scope:[2.25,9]}),scar20:gt({name:"SCAR-20",cat:"sniper",side:"CT",price:5e3,reward:300,dmg:80,ap:.825,rpm:240,mag:20,reserve:90,reload:3.1,speed:215,rangeMod:.98,auto:!0,spread:.05,scoped:.0018,move:.2,kick:1.6,sway:.4,kickCap:6,scope:[2.25,9]}),zeus:gt({name:"Zeus x27",cat:"equip",side:"both",price:200,reward:0,dmg:500,ap:1,rpm:30,mag:1,reserve:0,reload:0,speed:245,range:183,spread:.01,move:.02,kick:1}),vest:{name:"Chaleco",cat:"gear",side:"both",price:650},vesthelm:{name:"Chaleco + Casco",cat:"gear",side:"both",price:1e3},defuser:{name:"Kit de desactivaci\xF3n",cat:"gear",side:"CT",price:400},he:{name:"Granada HE",cat:"grenade",side:"both",price:300,reward:300},flash:{name:"Flashbang",cat:"grenade",side:"both",price:200,reward:300,max:2},smoke:{name:"Humo",cat:"grenade",side:"both",price:300,reward:300},molotov:{name:"Molotov",cat:"grenade",side:"T",price:400,reward:300},incendiary:{name:"Incendiaria",cat:"grenade",side:"CT",price:500,reward:300},decoy:{name:"Se\xF1uelo",cat:"grenade",side:"both",price:50,reward:300},c4:{name:"C4",cat:"c4",side:"T",price:0}};for(let[n,e]of Object.entries(et))e.id=n;var qc=[{name:"Equipo",items:{T:["vest","vesthelm","zeus"],CT:["vest","vesthelm","zeus","defuser"]}},{name:"Pistolas",items:{T:["glock","p250","dualies","tec9","deagle"],CT:["usp","p250","dualies","fiveseven","deagle"]}},{name:"Intermedias",items:{T:["mac10","mp7","nova","xm1014","p90"],CT:["mp9","mp7","nova","xm1014","p90"]}},{name:"Rifles",items:{T:["galil","ak47","sg553","ssg08","awp"],CT:["famas","m4a4","aug","ssg08","awp"]}},{name:"Granadas",items:{T:["flash","smoke","he","molotov","decoy"],CT:["flash","smoke","he","incendiary","decoy"]}}],B0={vest:["Protege el cuerpo","Reduce el da\xF1o de las balas"],vesthelm:["Chaleco y casco","Te salva de muchos tiros a la cabeza"],zeus:["Descarga el\xE9ctrica de un solo uso","Mata de cerca"],defuser:["Desactiv\xE1s la bomba en 5 segundos"],glock:["Pistola b\xE1sica de los T","Buena movi\xE9ndose"],usp:["Pistola b\xE1sica de los CT","Con silenciador, muy precisa"],p250:["Barata y fuerte","Atraviesa chalecos"],dualies:["Dos pistolas","Cargador grande"],tec9:["Autom\xE1tica liviana","Muy fuerte de cerca"],fiveseven:["Precisa y r\xE1pida","Buena contra chalecos"],deagle:["Un tiro a la cabeza alcanza","Mucho retroceso"],mac10:["Subfusil barato","Premio por baja $600"],mp9:["Subfusil de los CT","Premio por baja $600"],mp7:["Subfusil equilibrado","Buena precisi\xF3n"],nova:["Escopeta de bombeo","Letal de cerca"],xm1014:["Escopeta autom\xE1tica","Mucho da\xF1o en poco tiempo"],p90:["Cargador de 50","Ideal para correr"],galil:["Rifle barato de los T"],famas:["Rifle barato de los CT"],ak47:["Un tiro a la cabeza mata","El rifle de los T"],m4a4:["Rifle preciso de los CT"],sg553:["Rifle con mira"],aug:["Rifle con mira"],ssg08:["Francotirador liviano","Se mueve r\xE1pido"],awp:["Mata de un tiro al cuerpo","Lento al moverse"],flash:["Ciega a los que la miran"],smoke:["Tapa la vista 18 segundos","Apaga el fuego"],he:["Explota y hace da\xF1o"],molotov:["Fuego en el piso por 7 segundos"],incendiary:["Fuego en el piso por 7 segundos"],decoy:["Hace ruido de disparos"]},ir=n=>{let e=et[n].cat;return e==="pistol"?2:e==="knife"?3:e==="grenade"?4:e==="c4"?5:e==="equip"?3:1},zn={start:800,max:16e3,winElim:3250,winBombT:3500,winDefuse:3500,winTime:3250,loss:[1400,1900,2400,2900,3400],plantBonus:800,plantReward:300,defuseReward:300,teamKill:-300},RM={head:4,chest:1,stomach:1.25,arm:1,leg:.75};function sf(n,e,t,i,s,r=4){let o=n*(t==="head"?r:RM[t]),a=0,l=t!=="leg"&&(t!=="head"||s);if(i>0&&l){let c=o*e;a=(o-c)*.5,a>i&&(a=i,c=o-i*2),o=c}return{hp:Math.max(1,Math.round(o)),armor:Math.round(a)}}var rf=.0254,Lt={g:800*.4*rf,speed:750*.9*rf,step:1/64,fuse:{he:1.6,flash:1.6},molAir:2,smokeLife:18,fireLife:7,decoyLife:15,smokeR:3.6,fireR:2.6,heR:350*rf,heDmg:98};function H0(n,e,t,i,s,r,o,a,l,c,h=1){let f=Lt.speed*(.3+.7*h),u=a+10*Math.PI/180*(1-Math.abs(a)/(Math.PI/2)),d=-Math.sin(o)*Math.cos(u),p=Math.sin(u),_=-Math.cos(o)*Math.cos(u);return{type:n,owner:e,team:t,x:i+d*.1,y:s+p*.1-.05,z:r+_*.1,vx:d*f+l*1.25,vy:p*f,vz:_*f+c*1.25,t:0,acc:0,rest:!1,state:"fly",life:0}}function V0(n,e,t,i){for(e.acc+=t;e.acc>=Lt.step;){e.acc-=Lt.step;let s=Lt.step;if(e.state==="fly"){if(e.t+=s,!e.rest){e.vy-=Lt.g*s;let o=Math.hypot(e.vx,e.vy,e.vz),a=o*s;if(a>1e-5){let l=zi(n,e.x,e.y,e.z,e.vx/o,e.vy/o,e.vz/o,a+.04);if(l&&l.t<=a+.04){let c=Math.max(0,l.t-.04);e.x+=e.vx/o*c,e.y+=e.vy/o*c,e.z+=e.vz/o*c;let h=[l.nx,l.ny,l.nz];if((e.type==="molotov"||e.type==="incendiary")&&h[1]>.7){Yc(n,e,i);continue}let f=e.vx*h[0]+e.vy*h[1]+e.vz*h[2];e.vx-=2*f*h[0],e.vy-=2*f*h[1],e.vz-=2*f*h[2],e.vx*=.45,e.vy*=.45,e.vz*=.45,h[1]>.7&&(e.vx*=.75,e.vz*=.75,Math.abs(e.vy)<1.2&&(e.vy=0,Math.hypot(e.vx,e.vz)<.25&&(e.rest=!0))),o>2&&i.push({type:"bounce",g:e})}else e.x+=e.vx*s,e.y+=e.vy*s,e.z+=e.vz*s}if(!e.rest&&e.vy===0){let l=As(n,e.x,e.z,e.y+.3);l>-1e8&&e.y-l<.06?(e.y=l+.03,e.vx*=Math.max(0,1-s*2.5),e.vz*=Math.max(0,1-s*2.5),Math.hypot(e.vx,e.vz)<.2&&(e.rest=!0)):e.vy=-.01}if(e.y<-40){e.state="done",i.push({type:"end",g:e});continue}}let r=Lt.fuse[e.type];r&&e.t>=r?Yc(n,e,i):(e.type==="molotov"||e.type==="incendiary")&&e.t>=Lt.molAir?(e.air=!0,Yc(n,e,i)):(e.type==="smoke"||e.type==="decoy")&&e.rest&&e.t>.9&&Yc(n,e,i)}else e.state==="active"&&(e.life-=s,e.life<=0&&(e.state="done",i.push({type:"end",g:e})))}}function Yc(n,e,t){if(e.state="active",e.vx=e.vy=e.vz=0,e.type==="smoke")e.life=Lt.smokeLife;else if(e.type==="decoy")e.life=Lt.decoyLife;else if(e.type==="molotov"||e.type==="incendiary")if(e.air)e.life=.01;else{e.life=Lt.fireLife;let i=As(n,e.x,e.z,e.y+.5);i>-1e8&&(e.y=i)}else e.life=.01;t.push({type:"det",g:e})}function G0(n,e,t,i,s,r,o){for(let a of n){if(a.type!=="smoke"||a.state!=="active"||a.life<.6)continue;let l=Lt.smokeR*Math.min(1,(Lt.smokeLife-a.life)*1.5+.2),c=a.x,h=a.y+1.2,f=a.z,u=s-e,d=r-t,p=o-i,_=u*u+d*d+p*p,x=_>0?((c-e)*u+(h-t)*d+(f-i)*p)/_:0;x=Math.max(0,Math.min(1,x));let g=e+u*x-c,v=(t+d*x-h)*1.4,w=i+p*x-f;if(g*g+v*v+w*w<l*l)return!0}return!1}function W0(n,e,t,i){for(let s of n)if(!(s.type!=="molotov"&&s.type!=="incendiary"||s.state!=="active"||s.air)&&Math.abs(t-s.y)<1.2&&Math.hypot(e-s.x,i-s.z)<Lt.fireR)return s;return null}var Gt={freeze:12,live:115,buy:20,post:6,bomb:40,plant:3.2,defuse:10,kit:5,over:10},of={rapida:{win:5,max:8,name:"R\xE1pida"},corta:{win:9,max:16,name:"Corta"},comp:{win:13,max:24,name:"Competitiva"}},X0=["Toto","Lalo","Pipo","Chino","Fede","Nacho","Rulo","Coco","Tincho","Beto","Pato","Quique"],sr=(n,e)=>(n^e)===0?"T":"CT",q0=n=>n==="T"?"glock":"usp";function af(n){let e={},t=!0,i=0,s=[1,1],r=null,o=new Map,a=0,l=0,c=!1,h=1;e.setup=M=>{n.players.clear();let E=n.cfg,R=[0,0],y=M.slice().sort((N,z)=>N.slot-z.slot);for(let N of y)(N.pref===0||N.pref===1)&&R[N.pref]++;for(let N of y){let z=N.pref;z!==0&&z!==1&&(z=R[0]<=R[1]?0:1,R[z]++);let B=f(N.id,N.name,!1,z);B.skT=0,B.skCT=0,B.fin=0,n.players.set(N.id,B)}let T=E.bots?Math.max(R[0],R[1],E.size||5):0,I=0;for(let N=0;N<2;N++)for(let z=R[N];z<T;z++){let B="bot"+I++,F=f(B,X0[I%X0.length]+" (bot)",!0,N);F.skT=0,F.skCT=0,F.fin=0,n.players.set(B,F)}n.round=0,n.score=[0,0],n.half=0,s=[1,1],c=!1;for(let N of n.players.values())N.team=sr(N.grp,0);n.spawns={T:u("T"),CT:u("CT")}};function f(M,E,R,y){return{id:M,name:E,bot:R,grp:y,team:"T",x:0,y:0,z:0,yaw:0,pitch:0,vx:0,vz:0,duck:0,hp:100,ar:0,helm:!1,money:zn.start,alive:!1,k:0,d:0,a:0,mvp:0,dmgR:0,inv:{p:null,s:null,g:[],c4:!1,kit:!1,zeus:!1,v:1,pa:null,sa:null},god:!1}}function u(M){let E=n.nav,R=li(E,M==="T"?16:32),y=H=>{let K=Math.floor(H/E.N),Q=H%E.N,he=Q%E.m,ie=Math.floor(Q/E.m),ce=E.H[K][Q];for(let Le=-2;Le<=2;Le++)for(let Ce=-2;Ce<=2;Ce++){let Ne=he+Ce,Ye=ie+Le;if(Ne<0||Ye<0||Ne>=E.m||Ye>=E.m)return!1;let oe=E.H[K][Ye*E.m+Ne];if(isNaN(oe)||Math.abs(oe-ce)>.35)return!1}return!0},T=R.filter(y);T.length<10&&(T=R);let I=0,N=0,z=T.map(H=>E.pos(H));for(let H of z)I+=H[0],N+=H[2];I/=z.length,N/=z.length,z.sort((H,K)=>Math.hypot(H[0]-I,H[2]-N)-Math.hypot(K[0]-I,K[2]-N));let B=[];for(let H of[2,1.5,1.1]){for(let K of z){if(B.length>=12)break;B.every(Q=>Math.hypot(Q[0]-K[0],Q[2]-K[2])>H)&&B.push(K)}if(B.length>=10)break}let F=n.info.zones,U=n.W.cell,V=H=>{let K=F[H];return E.nearest((K[0]+K[2])/2*U,99,(K[1]+K[3])/2*U)},$=[V("A"),V("B")].filter(H=>H>=0),ee=H=>{let K=E.nearest(H[0],H[1],H[2]),Q=null;for(let ce of $){let Le=Cs(E,K,ce);Le&&(!Q||Le.length<Q.length)&&(Q=Le)}if(!Q||Q.length<2)return Math.atan2(-(I-H[0]),-(N-H[2]));let he=0,ie=Q[Math.min(Q.length-1,3)];for(let ce=1;ce<Q.length&&(he+=Math.hypot(Q[ce][0]-Q[ce-1][0],Q[ce][2]-Q[ce-1][2]),!(he>25));ce++)S0(n.W,H[0],H[1]+1.6,H[2],Q[ce][0],Q[ce][1]+1.2,Q[ce][2])&&(ie=Q[ce]);return Math.atan2(-(ie[0]-H[0]),-(ie[2]-H[2]))};return{pts:B.map(H=>[H[0],H[1],H[2],ee(H)]),cx:I,cz:N}}e.adopt=()=>{n.spawns={T:u("T"),CT:u("CT")}},e.buyZone=M=>{let E=n.spawns[M.team];return Math.hypot(M.x-E.cx,M.z-E.cz)<22||oi(n.W,M.x,M.z)&(M.team==="T"?16:32)},e.canBuyTime=()=>n.phase==="freeze"||n.phase==="live"&&Gt.live-n.timeLeft<Gt.buy&&n.bomb.state!=="planted",e.startMatch=()=>{n.phase="freeze",d(!0)};function d(M){n.round++,n.phase="freeze",n.timeLeft=Gt.freeze,n.drops.clear(),n.nades.length=0,o.clear(),r=null,n.bomb={state:"carried",carrier:null,x:0,y:0,z:0,t:0};let E={T:0,CT:0},R={},y=[...n.players.values()].sort(()=>Math.random()-.5);for(let I of y){I.team=sr(I.grp,n.half),!I.alive||M?(I.inv={p:null,s:q0(I.team),g:[],c4:!1,kit:!1,zeus:!1,v:(I.inv.v||0)+1,pa:null,sa:null},!I.alive&&!M&&(I.ar=0,I.helm=!1),M&&(I.ar=0,I.helm=!1)):(I.inv.c4=!1,I.team==="T"&&(I.inv.kit=!1),I.inv.pa=I.inv.sa=null,I.inv.v++),I.hp=100,I.alive=!0,I.dmgR=0,I.dmgBy={};let N=n.spawns[I.team].pts,z=E[I.team]++%N.length;R[I.id]=N[z]}let T=y.filter(I=>I.team==="T");if(T.length){let I=T[Math.floor(Math.random()*T.length)];I.inv.c4=!0,n.bomb.carrier=I.id}t=!0,n.emit("rs",{pos:R,round:n.round}),n.emit("st",e.snapshot())}function p(M,E){if(n.phase!=="live"&&n.phase!=="freeze")return;n.phase="post",n.timeLeft=Gt.post;let R=[...n.players.values()].find(B=>B.team===M)?.grp??(M===sr(0,n.half)?0:1);n.score[R]++;let y=E==="bomb"?zn.winBombT:E==="defuse"?zn.winDefuse:E==="time"?zn.winTime:zn.winElim,T=1-R;s[T]=Math.min(5,s[T]+1),s[R]=Math.max(0,s[R]-1);let I=zn.loss[Math.max(0,s[T]-1)];for(let B of n.players.values())if(B.grp===R)g(B,y);else{if(E==="time"&&B.team==="T"&&B.alive)continue;g(B,I+(B.team==="T"&&n.bomb.state==="defused"?zn.plantBonus:0))}let N=null,z=-1;for(let B of n.players.values())if(B.grp===R){let F=(B.rk||0)*10+B.dmgR/100+(B.id===r&&E==="bomb"?30:0)+(B.defused?30:0);F>z&&(z=F,N=B)}N&&N.mvp++;for(let B of n.players.values())B.rk=0,B.defused=!1;t=!0,n.emit("ev",{t:"end",win:M,reason:E,score:n.score.slice(),mvp:N&&N.id,loss:I})}function _(){let M=of[n.cfg.len];if(n.score[0]>=M.win||n.score[1]>=M.win||n.round>=M.max){n.phase="over",n.timeLeft=Gt.over,l=Gt.over;let R=n.score[0]>n.score[1]?0:n.score[1]>n.score[0]?1:-1;n.emit("ev",{t:"over",wg:R,score:n.score.slice()}),t=!0,setTimeout(()=>{if(c)return;c=!0;let y=[...n.players.values()].filter(I=>!I.bot&&(R<0||I.grp===R)).map(I=>I.id),T=R<0?"Empate "+n.score.join(" \u2013 "):"\u{1F451} Ganan "+x(R)+" "+Math.max(...n.score)+" \u2013 "+Math.min(...n.score);n.end(y,T)},Gt.over*1e3);return}if(n.round===M.max/2){n.half=1,s=[1,1];for(let R of n.players.values())R.money=zn.start,R.alive=!1,R.ar=0,R.helm=!1;n.emit("ev",{t:"half"}),d(!0);return}d(!1)}let x=M=>{let E=[...n.players.values()].filter(R=>R.grp===M&&!R.bot).map(R=>R.name);return E.length?E.slice(0,3).join(", "):sr(M,n.half)==="T"?"los Terroristas":"los Contraterroristas"};function g(M,E){M.money=Math.max(0,Math.min(zn.max,M.money+E))}function v(){if(n.phase!=="live")return;let M=0,E=0,R=0,y=0;for(let T of n.players.values())T.team==="T"?(R++,T.alive&&M++):(y++,T.alive&&E++);if(y&&E===0)return p("T","elim");if(R&&M===0&&n.bomb.state!=="planted")return p("CT","elim")}e.tick=M=>{if(n.phase!=="lobby"){if(n.timeLeft-=M,n.phase==="freeze"&&n.timeLeft<=0)n.phase="live",n.timeLeft=Gt.live,t=!0,n.emit("ev",{t:"go"});else if(n.phase==="live"){let E=n.bomb;if(E.state==="planted"){E.t-=M,n.timeLeft=E.t;for(let[R,y]of o){let T=n.players.get(R);if(!T||!T.alive||Math.hypot(T.x-E.x,T.z-E.z)>2.2){o.delete(R);continue}T.bot&&n.time-y.t0>=y.dur&&A(T)}E.t<=0&&E.state==="planted"&&m()}else n.timeLeft<=0&&p("CT","time");if(a-=M,a<=0){a=.25;for(let R of n.players.values()){if(!R.alive)continue;let y=W0(n.nades,R.x,R.y,R.z);y&&e.damage(R.id,y.owner,10,"fire",y.type,{raw:!0})}}}else n.phase==="post"&&n.timeLeft<=0&&_();i-=M,(t&&i<=0||i<-2)&&(i=.1,t=!1,n.emit("st",e.snapshot()))}},e.markDirty=()=>{t=!0},e.snapshot=()=>({ph:n.phase,tl:+n.timeLeft.toFixed(2),r:n.round,sc:n.score,hf:n.half,b:{s:n.bomb.state,c:n.bomb.carrier,x:+n.bomb.x.toFixed(2),y:+n.bomb.y.toFixed(2),z:+n.bomb.z.toFixed(2),t:+n.bomb.t.toFixed(2),site:n.bomb.site},dr:[...n.drops.values()].map(M=>[M.id,M.w,+M.x.toFixed(2),+M.y.toFixed(2),+M.z.toFixed(2),M.ammo]),p:[...n.players.values()].map(M=>[M.id,M.name,M.bot?1:0,M.grp,M.team,M.hp,M.ar,M.helm?1:0,M.money,M.alive?1:0,M.k,M.d,M.a,M.mvp,M.inv,M.god?1:0,M.skT|0,M.skCT|0,M.fin||0])}),e.damage=(M,E,R,y,T,I={})=>{let N=n.players.get(M),z=n.players.get(E);if(!N||!N.alive||n.phase==="over"||z&&z!==N&&z.team===N.team||N.god)return;let B,F=0;if(I.raw)B=Math.round(R);else{let U=et[T],V=sf(R,I.ap??(U?.ap||.5),y,N.ar,N.helm);B=V.hp,F=V.armor}B=Math.min(B,N.hp),N.hp-=B,N.ar=Math.max(0,N.ar-F),z&&z!==N&&(z.dmgR+=B,N.dmgBy[E]=(N.dmgBy[E]||0)+B),t=!0,n.emit("ev",{t:"hurt",v:M,a:E,n:B,hs:y==="head",w:T,helm:N.helm&&y==="head"}),N.hp<=0&&w(N,z,T,y==="head",I.wb)};function w(M,E,R,y,T){if(M.hp=0,M.alive=!1,M.d++,E&&E!==M)if(E.team!==M.team){E.k++,E.rk=(E.rk||0)+1;let N=et[R];g(E,N?.reward??300)}else E.k--,g(E,zn.teamKill);for(let[N,z]of Object.entries(M.dmgBy||{}))if(N!==E?.id&&z>=41){let B=n.players.get(N);B&&B.team!==M.team&&B.a++}let I=M.inv.p||(M.inv.s&&M.inv.s!==q0(M.team)?M.inv.s:null)||M.inv.s;I&&C(I,M.x,M.y,M.z,null,M.yaw),M.inv.c4&&(M.inv.c4=!1,S(M)),M.inv.kit&&C("defuser",M.x+.3,M.y,M.z,null,0),M.inv={...M.inv,p:null,s:null,g:[],kit:!1,zeus:!1,c4:!1,v:M.inv.v+1},o.delete(M.id),t=!0,n.emit("ev",{t:"kill",k:E?E.id:null,v:M.id,w:R,hs:!!y,wb:!!T}),v()}function S(M){n.bomb.state="dropped",n.bomb.carrier=null,n.bomb.x=M.x,n.bomb.y=M.y,n.bomb.z=M.z,n.emit("ev",{t:"bombdrop"})}function C(M,E,R,y,T,I=0){let N=h++,z=E-Math.sin(I)*.6,B=y-Math.cos(I)*.6,F=!n.solidAt(z,R+.3,B);n.drops.set(N,{id:N,w:M,x:F?z:E,y:n.floorAt(F?z:E,F?B:y,R+.6)+.05,z:F?B:y,ammo:T||null}),t=!0}e.handle=(M,E,R,y={})=>{let T=n.players.get(R);if(T)switch(M){case"hit":{if(!T.alive&&n.phase!=="post")return;let I=et[E.w];if(!I)return;let N=I.cat==="knife"?180:I.dmg*I.pellets*1.01;e.damage(E.t,R,Math.min(+E.d||0,N),E.part,E.w,{wb:E.wb});break}case"buy":b(T,E.i);break;case"drop":{if(!T.alive)return;let I=E.s;if(I==="zeus"){T.inv.zeus=!1,T.inv.v++,t=!0;return}if(I==="c4"){if(!T.inv.c4)return;T.inv.c4=!1,T.inv.v++,S({x:E.x,y:E.y,z:E.z}),n.bomb.x-=Math.sin(E.yaw)*.6,n.bomb.z-=Math.cos(E.yaw)*.6,n.bomb.y=n.floorAt(n.bomb.x,n.bomb.z,E.y+.6),t=!0;return}let N=I==="p"?T.inv.p:I==="s"?T.inv.s:null;if(!N)return;T.inv[I]=null,T.inv.v++,C(N,E.x,E.y,E.z,E.ammo,E.yaw);break}case"take":{if(!T.alive)return;if(E.id==="c4"){if(T.team!=="T"||n.bomb.state!=="dropped"||Math.hypot(T.x-n.bomb.x,T.z-n.bomb.z)>1.8)return;T.inv.c4=!0,T.inv.v++,n.bomb.state="carried",n.bomb.carrier=T.id,t=!0,n.emit("ev",{t:"bombpick",p:T.id});return}let I=n.drops.get(E.id);if(!I||Math.hypot(T.x-I.x,T.z-I.z)>2.2)return;if(I.w==="defuser"){if(T.team!=="CT"||T.inv.kit)return;T.inv.kit=!0,T.inv.v++,n.drops.delete(I.id),t=!0;return}let N=ir(I.w)===1?"p":"s";if(T.inv[N]){if(!E.swap)return;C(T.inv[N],T.x,T.y,T.z,E.ammo,T.yaw)}T.inv[N]=I.w,T.inv[N+"a"]=I.ammo,T.inv.v++,n.drops.delete(I.id),t=!0;break}case"nade":{let I=T.inv.g.indexOf(E.type);if(I<0)return;T.inv.g.splice(I,1),T.inv.v++,t=!0;break}case"plant":{let I=oi(n.W,E.x,E.z)&12;if(!T.alive||!T.inv.c4||n.phase!=="live"||!I||n.bomb.state==="planted")return;T.inv.c4=!1,T.inv.v++,Object.assign(n.bomb,{state:"planted",carrier:null,x:E.x,y:E.y,z:E.z,t:Gt.bomb,site:I&4?"A":"B"}),r=T.id,g(T,zn.plantReward),t=!0,n.emit("ev",{t:"plant",p:T.id,site:n.bomb.site}),v();break}case"defst":{if(!T.alive||T.team!=="CT"||n.bomb.state!=="planted"||Math.hypot(T.x-n.bomb.x,T.z-n.bomb.z)>2.2)return;o.set(T.id,{t0:n.time,dur:T.inv.kit?Gt.kit:Gt.defuse}),n.emit("ev",{t:"defst",p:T.id,kit:T.inv.kit});break}case"defx":o.delete(R);break;case"defok":{let I=o.get(R);if(!I||!T.alive||n.bomb.state!=="planted"||n.time-I.t0<I.dur-.5)return;A(T);break}case"adm":y.admin&&P(T,E);break;case"fall":T.alive&&e.damage(R,R,Math.min(999,+E.d||0),"chest","world",{raw:!0});break}},e.botDefuse=M=>{o.has(M.id)||e.handle("defst",{},M.id)},e.isDefusing=M=>o.has(M);function A(M){o.clear(),n.bomb.state="defused",M.defused=!0,g(M,zn.defuseReward),n.emit("ev",{t:"defused",p:M.id}),p("CT","defuse")}function m(){let M=n.bomb;M.state="exploded",n.emit("ev",{t:"boom",x:M.x,y:M.y,z:M.z});let E=1750*.0254/3;for(let R of n.players.values()){if(!R.alive)continue;let y=Math.hypot(R.x-M.x,R.y-M.y,R.z-M.z),T=500*Math.exp(-(y*y)/(2*E*E));if(T>1){let I=sf(T,.5,"chest",R.ar,R.helm);R.hp-=Math.min(R.hp,I.hp),R.ar=Math.max(0,R.ar-I.armor),R.hp<=0&&(R.alive=!1,R.d++,n.emit("ev",{t:"kill",k:null,v:R.id,w:"c4"}))}}t=!0,p("T","bomb")}e.heBlast=(M,E)=>{for(let R of n.players.values()){if(!R.alive)continue;let y=Math.hypot(R.x-M.x,R.y+1-M.y,R.z-M.z);if(y>Lt.heR||!E(M,R))continue;let T=Lt.heDmg*(1-y/Lt.heR);T<1||e.damage(R.id,M.owner,T,"chest","he",{ap:.5})}};function b(M,E){let R=et[E],y=N=>n.emitTo(M.id,"ev",{t:"deny",why:N});if(!R||!M.alive)return;if(!e.canBuyTime())return y("Se termin\xF3 el tiempo de compra");if(!e.buyZone(M))return y("Ten\xE9s que estar en tu zona de compra");if(R.side!=="both"&&R.side!==M.team)return y("No disponible para tu equipo");let T=R.price,I=M.inv;if(E==="vest"){if(M.ar>=100)return y("Ya ten\xE9s chaleco")}else if(E==="vesthelm"){if(M.ar>=100&&M.helm)return y("Ya ten\xE9s chaleco y casco");M.ar>=100&&(T=350)}else if(E==="defuser"){if(I.kit)return y("Ya ten\xE9s el kit")}else if(E==="zeus"){if(I.zeus)return y("Ya ten\xE9s la Zeus")}else if(R.cat==="grenade"){let N=I.g.length,z=I.g.filter(B=>B===E||(B==="molotov"||B==="incendiary")&&(E==="molotov"||E==="incendiary")).length;if(N>=4)return y("Llev\xE1s el m\xE1ximo de granadas");if(z>=(R.max||1))return y("No pod\xE9s llevar m\xE1s de esa granada")}else{let N=ir(E)===1?"p":"s";if(I[N]===E)return y("Ya ten\xE9s esa arma")}if(M.money<T)return y("No te alcanza la plata");if(M.money-=T,E==="vest")M.ar=100;else if(E==="vesthelm")M.ar=100,M.helm=!0;else if(E==="defuser")I.kit=!0;else if(E==="zeus")I.zeus=!0;else if(R.cat==="grenade")I.g.push(E);else{let N=ir(E)===1?"p":"s";I[N]&&C(I[N],M.x,M.y,M.z,null,M.yaw+Math.PI),I[N]=E,I[N+"a"]=null}I.v++,t=!0,n.emitTo(M.id,"ev",{t:"bought",i:E})}e.buy=b;function P(M,E){if(E.a==="god")M.god=!!E.v,t=!0;else if(E.a==="money")M.money=zn.max,t=!0;else if(E.a==="win")(n.phase==="live"||n.phase==="freeze")&&(n.phase="live",p(M.team,"elim"));else if(E.a==="kill")for(let R of n.players.values())R.alive&&R.team!==M.team&&w(R,M,"knife",!0,!1);else E.a==="heal"&&(M.hp=100,M.ar=100,M.helm=!0,t=!0)}return e}var lf=.0254,Y0=Math.PI/180,CM={pistol:.12,smg:.16,rifle:.36,sniper:.6,heavy:.3,equip:0,knife:0},PM=n=>n.id==="awp"?.85:n.id==="deagle"||n.id==="r8"?.3:n.id==="ak47"?.42:n.cat==="heavy"&&n.pellets>1?0:CM[n.cat]??0;function ma(n,e){let t=n.scope&&n.cat==="sniper"&&e.scoped?n.scoped:n.spread,i=n.speed*lf*(e.scoped&&n.cat==="sniper"?.5:1),s=Math.max(0,Math.min(1,(e.speed-i*.34)/(i*.66)));return t+=n.move*s,e.onGround||(t+=n.cat==="sniper"?.25:.12),e.duck>.5&&e.onGround&&(t*=.75),n.auto&&n.pellets===1&&(t+=Math.min(.022,e.shots*.0016)),n.cat==="pistol"&&!n.auto&&(t+=Math.min(.03,e.shots*.006)),t}function $c(n,e,t){if(n.pellets>1||n.cat==="sniper")return[n.kick,(t()-.5)*n.sway];let i=e===0?n.kick*.6:e<9?n.kick:n.kick*.25,s=(t()-.5)*n.sway*.5;return n.auto&&n.cat!=="pistol"&&(e>=7&&e<14?s+=-n.sway*1.1:e>=14&&e<22?s+=n.sway*1.25:e>=22&&(s+=Math.sin(e*.9)*n.sway)),[i,s]}function Qr(n,e,t,i,s,r){let o=r()*Math.PI*2,a=s*(r()*.6+r()*.4),l=e+t*Y0+Math.sin(o)*a,c=n-i*Y0+Math.cos(o)*a;return[-Math.sin(c)*Math.cos(l),Math.sin(l),-Math.cos(c)*Math.cos(l)]}function Zc(n,e,t,i,s,r,o,a,l,c,h){let f=Math.min(c.range*lf,300),u=c.dmg,d=PM(c),p=!1,_=i,x=s,g=r,v=0,w=[];for(let S=0;S<3;S++){let C=f-v;if(C<=0)break;let A=zi(n,_,x,g,o,a,l,C),m=A?A.t:C,b=null;for(let R of h){if(!R.alive||R.id===t||Math.abs(R.x-_)>m+2||Math.abs(R.z-g)>m+2)continue;let y=U0(R,_,x,g,o,a,l,m);y&&(!b||y.t<b.t)&&(b={...y,id:R.id})}if(b){let R=v+b.t,y=u*Math.pow(c.rangeMod,R/lf/500),T=[_+o*b.t,x+a*b.t,g+l*b.t];return{end:T,hit:{id:b.id,part:b.part,dmg:y,pos:T},impacts:w,wb:p}}if(!A)return{end:[_+o*C,x+a*C,g+l*C],hit:null,impacts:w,wb:p};let P=[_+o*m,x+a*m,g+l*m];if(w.push([P[0],P[1],P[2],A.nx,A.ny,A.nz]),d<=0)return{end:P,hit:null,impacts:w,wb:p};let M=0,E=.03;for(;M<d&&kc(n,P[0]+o*(M+E),P[1]+a*(M+E),P[2]+l*(M+E));)M+=E;if(M>=d)return{end:P,hit:null,impacts:w,wb:p};M+=E,u*=Math.max(.15,1-M/d)*.75,d-=M,p=!0,v+=m+M,_=P[0]+o*M,x=P[1]+a*M,g=P[2]+l*M,w.push([_,x,g,-o,-a,-l])}return{end:[_,x,g],hit:null,impacts:w,wb:p}}function ga(n,e,t,i){let s=t[0],r=t[1],o=t[2];for(let a of[1.55,1.1]){let l=i[0],c=i[1]+a*(i[3]||1),h=i[2],f=l-s,u=c-r,d=h-o,p=Math.hypot(f,u,d),_=zi(n,s,r,o,f/p,u/p,d/p,p);if(!(_&&_.t<p-.1)&&!G0(e,s,r,o,l,c,h))return!0}return!1}var $0=.0254,Kc=Math.PI/180,jc={facil:{react:.75,turn:150,err:5.5,hs:.04,ctrl:.2,track:1.6,settle:1.1,name:"F\xE1cil"},normal:{react:.52,turn:220,err:4,hs:.1,ctrl:.42,track:1.1,settle:1.5,name:"Normal"},dificil:{react:.36,turn:320,err:2.8,hs:.2,ctrl:.62,track:.7,settle:2,name:"Dif\xEDcil"},experto:{react:.26,turn:450,err:1.9,hs:.32,ctrl:.8,track:.45,settle:2.6,name:"Experto"}},Mt=Math.random,Jc=(n,e)=>{let t=n-e;for(;t>Math.PI;)t-=Math.PI*2;for(;t<-Math.PI;)t+=Math.PI*2;return t};function cf(n,e){let t={},i={site:"A"},s=0,r={A:li(n.nav,4),B:li(n.nav,8)};t.refreshNav=()=>{r.A=li(n.nav,4),r.B=li(n.nav,8)};let o=new Map,a={T:{},CT:{}},l=m=>a[m.team];function c(m,b){if(!m||m.length<2)return null;let P=0;for(let M=m.length-1;M>0;M--)if(P+=Math.hypot(m[M][0]-m[M-1][0],m[M][2]-m[M-1][2]),P>=b)return m[M-1];return m[0]}function h(m,b){if(!m||m.length<2)return null;let P=0;for(let M=1;M<m.length;M++)if(P+=Math.hypot(m[M][0]-m[M-1][0],m[M][2]-m[M-1][2]),P>=b)return m[M];return m[m.length-1]}let f=m=>{let b=n.nav,P=0,M=0,E=0;for(let y of m){let T=b.pos(y);P+=T[0],M+=T[1],E+=T[2]}let R=Math.max(1,m.length);return[P/R,M/R,E/R]};t.brain=m=>{let b=o.get(m.id);return b||(b={path:null,pi:0,goal:null,repath:0,tgt:null,react:0,err:[0,0],fireT:0,burst:0,shots:0,pp:0,py:0,strafe:1,strafeT:0,stuck:0,last:[0,0],buyT:0,bought:!1,hold:null,plantT:0,lastKnown:null,lkT:0,blind:0,mag:{},reload:0,look:null,wantScope:!1,jumpT:0},o.set(m.id,b)),b},t.reset=()=>o.clear(),t.roundStart=()=>{t._nav!==n.nav&&(t._nav=n.nav,t.refreshNav()),i.site=n.wingSite||(Mt()<.5?"A":"B"),a.T={},a.CT={};let m=n.nav,b={A:f(r.A),B:f(r.B)},P=n.spawns.T,M=n.spawns.CT;for(let R of["A","B"]){if(!r[R].length)continue;let y=Cs(m,m.nearest(P.cx,P.pts[0]?P.pts[0][1]:b[R][1],P.cz),m.nearest(b[R][0],b[R][1],b[R][2]));i["stage"+R]=c(y,16+Mt()*6);let T=y?y.slice().reverse():null;i["entry"+R]=h(T,14);let I=Cs(m,m.nearest(b[R][0],b[R][1],b[R][2]),m.nearest(M.cx,M.pts[0]?M.pts[0][1]:b[R][1],M.cz));i["ctEntry"+R]=h(I,14)}i.go=!1,i.goT=18+Mt()*22,i.siteC=b;let E=0;for(let R of n.players.values()){if(!R.bot)continue;let y=t.brain(R);Object.assign(y,{path:null,goal:null,goalKind:null,rotated:!1,tgt:null,hold:null,plantT:0,bought:!1,buyT:.6+Mt()*2.2,lastKnown:null,blind:0,reload:0,shots:0,pp:0,py:0,mag:{},look:null}),y.site=R.team==="CT"?E++%2===0?"A":"B":i.site,R.team==="CT"&&Mt()<.25&&(y.site=y.site==="A"?"B":"A"),n.wingSite&&(y.site=n.wingSite)}},t.place=(m,b)=>{m.pl=Wc(b[0],b[1],b[2],b[3]),m.pl.pitch=0},t.heard=(m,b,P,M,E)=>{for(let R of n.players.values()){if(!R.bot||!R.alive||R.team===M||!R.pl)continue;if(Math.hypot(R.pl.x-m,R.pl.z-P)<(E?40:14)){let T=t.brain(R);T.tgt||(T.lastKnown=[m,b,P],T.lkT=4)}}},t.flash=(m,b)=>{let P=t.brain(m);P.blind=Math.max(P.blind,b)};let u=m=>{let b=0;for(let P of n.players.values())P.team===m&&P.alive&&b++;return b};function d(m){let b=t.brain(m);return!!(b.lastKnown&&b.lkT>3)}function p(m){let b=m.inv;return b.p||b.s||"knife"}function _(m){let b=()=>m.money,P=m.team==="T",M=[];b()>=5750&&Mt()<.18?M.push("awp"):b()>=3700?M.push(P?"ak47":"m4a4"):b()>=2900?M.push(P?"galil":"famas"):b()>=1850&&n.round>1&&M.push(P?"mac10":"mp9");for(let E of M)e.buy(m,E);b()>=1e3?e.buy(m,"vesthelm"):b()>=650&&(n.round===1||n.round===x()+1||Mt()<.5)&&e.buy(m,"vest"),!P&&b()>=400&&Mt()<.6&&e.buy(m,"defuser"),n.round===1&&b()>=500&&!m.inv.p&&Mt()<.3&&e.buy(m,P?"tec9":"fiveseven")}let x=()=>({rapida:4,corta:8,comp:12})[n.cfg.len];function g(m,b,P,M,E){let R=n.nav,y=m.pl,T=R.nearest(y.x,y.y,y.z),I=R.nearest(P,M,E);b.path=Cs(R,T,I),b.pi=1,b.goal=[P,M,E],b.repath=6+Mt()*2,b.path||(b.repath=1.5+Mt())}let v=m=>n.nav.pos(m[Math.floor(Mt()*m.length)]);t.tick=m=>{let b=jc[n.cfg.diff]||jc.normal;s-=m;let P=s<=0;P&&(s=.1);let M=n.phase==="live",E=n.phase==="freeze";for(let R of n.players.values()){if(!R.bot||!R.pl)continue;let y=t.brain(R),T=R.pl;if(!R.alive)continue;let I=p(R),N=et[I];if(y.mag[I]===void 0&&(y.mag[I]=N.mag||0),y.blind=Math.max(0,y.blind-m),y.fireT-=m,y.lkT-=m,y.repath-=m,y.jumpT-=m,y.reload>0&&(y.reload-=m,y.reload<=0&&(y.mag[I]=N.mag)),E){y.buyT-=m,y.buyT<=0&&!y.bought&&(y.bought=!0,_(R)),S(R,y,0,0,!1,m,N);continue}if(P&&y.blind<=0){let ee=[T.x,T.y+Pn(T),T.z],H=null,K=1e9;for(let Q of n.players.values()){if(!Q.alive||Q.team===R.team)continue;let he=Q.x-T.x,ie=Q.z-T.z,ce=Math.hypot(he,ie);if(ce>90)continue;let Le=Math.abs(Jc(Math.atan2(-he,-ie),T.yaw)),Ce=y.tgt===Q.id;if(Le>(Ce?2.6:1.45)&&ce>2.5||!ga(n.W,n.nades,ee,[Q.x,Q.y,Q.z,Q.h/nt.hStand]))continue;let Ne=ce*(Ce?.6:1);Ne<K&&(K=Ne,H=Q)}if(H){if(y.tgt!==H.id){let Q=H.x-T.x,he=H.z-T.z,ie=Math.abs(Jc(Math.atan2(-Q,-he),T.yaw));y.tgt=H.id,y.react=b.react*(.8+Mt()*.6)*(1+ie*.5)+Math.min(.25,K/160);let ce=b.err*Kc*(1+ie*.6);y.err=[(Mt()<.5?-1:1)*ce*(.6+Mt()*.8),(Mt()-.35)*ce*.8],y.head=Mt()<b.hs;let Le=oi(n.W,H.x,H.z);Le&4?l(R).seen={site:"A",t:8}:Le&8&&(l(R).seen={site:"B",t:8})}y.lastKnown=[H.x,H.y,H.z],y.lkT=5}else y.tgt&&(y.tgt=null)}y.blind>0&&(y.tgt=null);let z=y.tgt?n.players.get(y.tgt):null,B=0,F=0,U=!1,V=!1;if(z&&z.alive){let ee=T.x,H=T.y+Pn(T),K=T.z,Q=z.y+(y.head?z.h-.12:z.h*.6),he=z.x-ee,ie=Q-H,ce=z.z-K,Le=Math.hypot(he,ce),Ce=((z.vx||0)*ce-(z.vz||0)*he)/Math.max(1,Le),Ne=Math.max(-.08,Math.min(.08,-Ce/Math.max(4,Le)*b.track*.35)),Ye=Math.atan2(-he,-ce)+y.err[0]+Ne,oe=Math.atan2(ie,Le)+y.err[1];y.err[0]*=Math.max(0,1-m*b.settle),y.err[1]*=Math.max(0,1-m*b.settle),y.rcyc=(y.rcyc||0)+m,y.retreat=R.hp<35&&Le<25&&y.rcyc%1.5<.55,w(T,Ye,oe,b.turn*Kc*m),y.react-=m;let me=Math.hypot(Jc(T.yaw,Ye-y.err[0]),T.pitch-(oe-y.err[1]));y.strafeT-=m,y.strafeT<=0&&(y.strafeT=.4+Mt()*.8,y.strafe=Mt()<.5?-1:1);let de=N.cat==="rifle"||N.cat==="sniper"||N.cat==="heavy"&&N.pellets===1||Le>14;if(!de||y.reload>0){let Xe=[Math.cos(T.yaw),-Math.sin(T.yaw)];B=Xe[0]*y.strafe,F=Xe[1]*y.strafe}(y.reload>0||y.retreat)&&(B+=Math.sin(T.yaw)*.8,F+=Math.cos(T.yaw)*.8),N.cat==="sniper"&&(y.wantScope=!0);let Ee=Math.hypot(T.vx,T.vz);y.react<=0&&me<Math.max(.02,.6/Math.max(3,Le))+.03&&y.reload<=0&&y.fireT<=0&&(!de||Ee<N.speed*$0*.4||Le<6)&&(y.mag[I]<=0&&N.mag?(y.reload=N.reload,y.shots=0):C(R,y,N,I,b,Le)),y.reload<=0&&y.mag[I]<=0&&N.mag&&(y.reload=N.reload,y.shots=0)}else{y.wantScope=!1,y.shots&&y.fireT<-.35&&(y.shots=0),N.mag&&y.mag[I]<N.mag*.4&&y.reload<=0&&(y.reload=N.reload);let ee=n.bomb,H=null,K=!1;if(R.team==="T"&&M&&!i.go){i.goT-=m/Math.max(1,u("T"));let ce=i["stage"+y.site];if(!ce||i.goT<=0||n.timeLeft<60)i.go=!0;else{let Le=0,Ce=0;for(let Ne of n.players.values())Ne.team==="T"&&Ne.alive&&(Ce++,Math.hypot(Ne.x-ce[0],Ne.z-ce[2])<9&&Le++);Ce&&Le>=Math.ceil(Ce*.75)&&(i.go=!0)}}let Q=l(R).seen;if(Q&&(Q.t-=m/Math.max(1,u(R.team)),Q.t<=0&&(l(R).seen=null)),R.team==="T"){let ce=i["stage"+y.site];if(ee.state==="dropped")(y.goalKind!=="bomb"||y.repath<=0)&&(H=[ee.x,ee.y,ee.z],y.goalKind="bomb"),Math.hypot(T.x-ee.x,T.z-ee.z)<1.2&&e.handle("take",{id:"c4"},R.id);else if(ee.state==="planted"){if(y.goalKind!=="post"){let Le=Mt()*6.28,Ce=5+Mt()*7;H=[ee.x+Math.cos(Le)*Ce,ee.y,ee.z+Math.sin(Le)*Ce],y.goalKind="post",y.look=i["ctEntry"+(oi(n.W,ee.x,ee.z)&8?"B":"A")]||[ee.x,ee.y,ee.z]}}else!i.go&&ce?y.goalKind!=="stage"&&(H=[ce[0]+(Mt()-.5)*5,ce[1],ce[2]+(Mt()-.5)*5],y.goalKind="stage",y.look=i.siteC[y.site]):R.inv.c4?oi(n.W,T.x,T.z)&12&&M&&T.onGround&&!d(R)?(y.plantT+=m,K=!0,n.setPlanting(R.id,y.plantT),y.plantT>=3.2&&(y.plantT=0,n.setPlanting(R.id,0),e.handle("plant",{x:T.x,y:T.y,z:T.z},R.id))):(y.plantT=0,(!y.goal||y.goalKind!=="site")&&(H=v(r[y.site]),y.goalKind="site")):(!y.goal||y.goalKind!=="site")&&(H=v(r[y.site]),y.goalKind="site",y.look=null)}else ee.state==="planted"?Math.hypot(T.x-ee.x,T.z-ee.z)<1.1?(K=!0,V=!0,e.botDefuse(R),y.look=[ee.x,ee.y,ee.z]):(y.goalKind!=="defuse"||y.repath<=0)&&(H=[ee.x,ee.y,ee.z],y.goalKind="defuse"):Q&&Q.site!==y.site&&!y.rotated&&Mt()<.6?(y.rotated=!0,u("CT")>1&&Mt()<.7&&(y.site=Q.site,y.goal=null,y.goalKind=null)):(!y.goal||y.goalKind!=="hold")&&(H=v(r[y.site]),y.goalKind="hold",y.look=i["entry"+y.site]||null);if(!H&&y.goal&&!y.path&&y.repath<=0&&(y.goal=null),H&&g(R,y,H[0],H[1],H[2]),!K&&y.path&&y.pi<y.path.length){let ce=y.path[y.pi],Le=ce[0]-T.x,Ce=ce[2]-T.z,Ne=Math.hypot(Le,Ce);Ne<.55?y.pi++:(B=Le/Ne,F=Ce/Ne,ce[1]-T.y>.45&&Ne<1.6&&y.jumpT<=0&&(y.jump=!0,y.jumpT=.8));let Ye=Math.hypot(T.x-y.last[0],T.z-y.last[1]);y.stuck=Ye<m*.6?y.stuck+m:0,y.last=[T.x,T.z],y.stuck>.6&&(y.jump=!0,y.stuck>1.6&&(y.stuck=0,y.goal=null,y.path=null))}else if(!K&&y.goalKind==="hold"&&y.path&&y.pi>=y.path.length){if(!y.look){let ce=n.spawns.T;y.look=[ce.cx,T.y+1.5,ce.cz]}y.crouchT=(y.crouchT||0)+m,V=y.crouchT%9>6,Mt()<m*.03&&(y.goal=null)}else!K&&y.goalKind==="site"&&y.path&&y.pi>=y.path.length?y.goal=null:!K&&(y.goalKind==="stage"||y.goalKind==="post")&&y.path&&y.pi>=y.path.length;let he=null,ie=0;if(y.lastKnown&&y.lkT>0){let ce=y.lastKnown;he=Math.atan2(-(ce[0]-T.x),-(ce[2]-T.z)),ie=Math.atan2(ce[1]+1.4-T.y-Pn(T),Math.hypot(ce[0]-T.x,ce[2]-T.z))}else(B||F)&&!(y.goalKind==="hold"&&y.look&&y.path&&y.pi>=y.path.length-3)?he=Math.atan2(-B,-F):y.look&&(he=Math.atan2(-(y.look[0]-T.x),-(y.look[2]-T.z)));he!==null&&w(T,he,ie,b.turn*.55*Kc*m)}let $=(N.recover||9)*m;y.pp=Math.max(0,y.pp-$*(y.fireT<-.05?1:.3)),y.py*=Math.max(0,1-m*4),U=!!z&&N.cat!=="knife",S(R,y,B,F,U,m,N,V)}};function w(m,b,P,M){let E=Jc(b,m.yaw);m.yaw+=Math.max(-M,Math.min(M,E));let R=P-m.pitch;m.pitch+=Math.max(-M,Math.min(M,R)),m.pitch=Math.max(-1.45,Math.min(1.45,m.pitch))}function S(m,b,P,M,E,R,y,T=!1){let I=m.pl,N=-Math.sin(I.yaw),z=-Math.cos(I.yaw),B=Math.cos(I.yaw),F=-Math.sin(I.yaw),U={f:P*N+M*z,s:P*B+M*F,jump:!!b.jump,crouch:T,walk:E};b.jump=!1,(n.phase==="freeze"||n.planting(m.id)>0||e.isDefusing(m.id))&&(U.f=U.s=0,U.jump=!1);let $=y.speed*$0*(b.wantScope&&y.cat==="sniper"?.42:1);{let H=Math.hypot(U.f,U.s);H>1&&(U.f/=H,U.s/=H)}let ee=R;for(;ee>1e-6;){let H=Math.min(ee,.011111111111111112),K=Xc(n.W,I,U,H,$);K&&n.fallDamage(m,K),ee-=H}I.y<-20&&m.alive&&e.damage(m.id,m.id,999,"chest","world",{raw:!0});for(let H of n.players.values()){if(H===m||!H.alive||Math.abs(H.y-I.y)>1.6)continue;let K=I.x-H.x,Q=I.z-H.z,he=Math.hypot(K,Q);if(he<.62){let ie=he>1e-4?(.62-he)/he*.5:0,ce=I.x+(he>1e-4?K*ie:.05),Le=I.z+(he>1e-4?Q*ie:.03);bi(n.W,ce,Le,I.y,I.h,nt.r)||(I.x=ce,I.z=Le)}}m.x=I.x,m.y=I.y,m.z=I.z,m.yaw=I.yaw,m.pitch=I.pitch,m.duck=I.duck,m.h=I.h,m.vx=I.vx,m.vz=I.vz,m.onGround=I.onGround,m.wpn=m.inv.c4&&b.plantT>0?"c4":p(m),m.scoped=b.wantScope&&y.cat==="sniper"}function C(m,b,P,M,E,R){let y=m.pl,T={speed:Math.hypot(y.vx,y.vz),onGround:y.onGround,duck:y.duck,scoped:m.scoped,shots:b.shots},I=ma(P,T),[N,z]=$c(P,b.shots,Mt),B=[y.x,y.y+Pn(y),y.z];n.fireBullets(m.id,M,B,U=>Qr(y.yaw,y.pitch,b.pp*(1-E.ctrl*.85),b.py*(1-E.ctrl*.85),I,U)),b.pp=Math.min(P.kickCap||12,b.pp+N),b.py+=z,b.shots++,P.mag&&b.mag[M]--;let F=60/P.rpm;if(P.auto){let U=R>25?2:R>12?4:8;b.shots%U===0?(b.fireT=F+.25+Mt()*.3*(2-E.ctrl),b.shots=0,A(b,E)):b.fireT=F}else b.fireT=Math.max(F,P.cat==="pistol"?.22+Mt()*.25:F),P.cat!=="sniper"&&A(b,E,.5)}function A(m,b,P=1){let M=b.err*Kc*.45*P;m.err[0]+=(Mt()-.5)*2*M,m.err[1]+=(Mt()-.4)*M,m.head=Mt()<b.hs}return t}var xt=new Ut,Qc=new We,c2=new W(0,1,0),eh=new W;function Z0(n){let e={},i=new Un(new Vt(1,1,1),new en({color:"#ffffff"}),700);i.instanceMatrix.setUsage(qr),i.frustumCulled=!1,i.count=0,i.instanceColor=new Pi(new Float32Array(700*3),3),n.add(i);let s=[];e.particle=(y,T,I,N,z,B,F,U,V,$=9.8,ee=0,H=null)=>{s.length>=700&&s.shift();let K={x:y,y:T,z:I,vx:N,vy:z,vz:B,s:F,life:U,max:U,c:new We(V),g:$,grow:ee,fy:H};return s.push(K),K},e.floorAt=null,e.shell=(y,T,I,N)=>{let z=e.floorAt?e.floorAt(y[0],y[2],y[1]):y[1]-1.5,B=e.particle(y[0],y[1],y[2],T*(1.5+Math.random()),1.6+Math.random(),I*(1.5+Math.random()),N?.03:.022,1.6,N?"#2d6b2a":"#c9a23a",9.8,0,z+.01);B.shell=!0};let r=64,o=new Vt(1,1,1);o.translate(0,0,-.5);let a=new Un(o,new en({color:"#ffe9a8",transparent:!0,opacity:.85,depthWrite:!1}),r);a.instanceMatrix.setUsage(qr),a.frustumCulled=!1,a.count=0,n.add(a);let l=[];e.tracer=(y,T)=>{l.length>=r&&l.shift();let I=Math.hypot(T[0]-y[0],T[1]-y[1],T[2]-y[2]);l.push({a:[...y],b:[...T],d:I,t:0,life:Math.min(.25,I/280+.04)})};let c=220,h=new ni(.07,.07),f=new Un(h,new en({color:"#1d1a17",polygonOffset:!0,polygonOffsetFactor:-2,depthWrite:!1}),c);f.count=0,f.frustumCulled=!1,n.add(f);let u=0;e.decal=(y,T)=>{xt.position.set(y[0]+T[0]*.01,y[1]+T[1]*.01,y[2]+T[2]*.01),eh.set(T[0],T[1],T[2]),xt.quaternion.setFromUnitVectors(new W(0,0,1),eh),xt.rotateZ(Math.random()*3),xt.scale.setScalar(.7+Math.random()*.6),xt.updateMatrix(),f.setMatrixAt(u,xt.matrix),u=(u+1)%c,f.count=Math.max(f.count,u===0?c:u),f.instanceMatrix.needsUpdate=!0};let d={};e.decalC=(y,T,I,N)=>{let z=d[I];if(!z){let B=new Un(new xs(.5,7),new en({color:I,transparent:!0,opacity:.85,polygonOffset:!0,polygonOffsetFactor:-3,depthWrite:!1}),80);B.count=0,B.frustumCulled=!1,n.add(B),z=d[I]={m:B,i:0}}xt.position.set(y[0]+T[0]*.012,y[1]+T[1]*.012,y[2]+T[2]*.012),eh.set(T[0],T[1],T[2]),xt.quaternion.setFromUnitVectors(new W(0,0,1),eh),xt.rotateZ(Math.random()*6),xt.scale.set(N*(.8+Math.random()*.5),N*(.6+Math.random()*.5),1),xt.updateMatrix(),z.m.setMatrixAt(z.i,xt.matrix),z.i=(z.i+1)%80,z.m.count=Math.max(z.m.count,z.i===0?80:z.i),z.m.instanceMatrix.needsUpdate=!0},e.clearDecals=()=>{f.count=0,u=0;for(let y in d)d[y].m.count=0,d[y].i=0},e.impact=(y,T,I="#cdb894")=>{e.decal(y,T);for(let N=0;N<5;N++)e.particle(y[0],y[1],y[2],T[0]*2+(Math.random()-.5)*2,T[1]*2+Math.random()*1.5,T[2]*2+(Math.random()-.5)*2,.03+Math.random()*.03,.35+Math.random()*.3,I,6);if(e.particle(y[0],y[1],y[2],T[0]*.5,.4,T[2]*.5,.08,.5,"#d9cdb5",-.5,.25),e.particle(y[0],y[1],y[2],0,0,0,.05,.05,"#fff2a0",0),Math.random()<.45)for(let N=0;N<4;N++)e.particle(y[0],y[1],y[2],T[0]*3+(Math.random()-.5)*5,T[1]*3+Math.random()*3,T[2]*3+(Math.random()-.5)*5,.012,.18+Math.random()*.15,"#ffd060",12)},e.muzzleSmoke=y=>{for(let T=0;T<2;T++)e.particle(y[0],y[1],y[2],(Math.random()-.5)*.3,.25+Math.random()*.2,(Math.random()-.5)*.3,.05,.6+Math.random()*.4,"#bdbab4",-.2,.22)},e.dust=y=>{for(let T=0;T<2;T++)e.particle(y[0]+(Math.random()-.5)*.3,y[1]+.03,y[2]+(Math.random()-.5)*.3,(Math.random()-.5)*.4,.2,(Math.random()-.5)*.4,.05,.5,"#d8c4a0",.2,.15)},e.blood=(y,T,I)=>{let N=I?10:6;for(let z=0;z<N;z++)e.particle(y[0],y[1],y[2],T[0]*2.5+(Math.random()-.5)*2,T[1]*2+Math.random()*1.2,T[2]*2.5+(Math.random()-.5)*2,.035+Math.random()*.04,.4+Math.random()*.3,I?"#b3121a":"#8f1015",8)};let p=new Ys(1,0),_=new en({color:"#ffd27a",transparent:!0,opacity:.95,depthWrite:!1});e.muzzleMesh=()=>{let y=new He(p,_);return y.visible=!1,y.scale.set(.05,.05,.14),y};let x=new bs("#ffcf80",0,7,2);n.add(x);let g=0;e.flashLight=(y,T=1)=>{x.position.set(y[0],y[1],y[2]),x.intensity=6*T,g=.05};let v=400,w=new ys(1,0),S=new Un(w,new Fn({color:"#b9bcc0",flatShading:!0}),v);S.instanceMatrix.setUsage(qr),S.count=0,S.frustumCulled=!1,n.add(S),S.instanceColor=new Pi(new Float32Array(v*3),3);let C=[];e.smoke=(y,T)=>{let I=[];for(let N=0;N<38;N++){let z=Math.random()*Math.PI*2,B=Math.sqrt(Math.random())*Lt.smokeR*.85,F=Math.random()*2.6;I.push({x:y.x+Math.cos(z)*B,y:y.y+.4+F,z:y.z+Math.sin(z)*B,s:.9+Math.random()*.9,ph:Math.random()*6,c:.82+Math.random()*.14})}C.push({g:y,balls:I})},e.clearSmokes=()=>{C.length=0,P.length=0};let A=260,m=new Xs(.22,.7,4);m.translate(0,.35,0);let b=new Un(m,new en({color:"#ffffff"}),A);b.instanceColor=new Pi(new Float32Array(A*3),3),b.instanceMatrix.setUsage(qr),b.count=0,b.frustumCulled=!1,n.add(b);let P=[],M=new bs("#ff8a3a",0,9,1.6);n.add(M),e.fire=(y,T,I)=>{let N=[];for(let z=0;z<26;z++){let B=Math.random()*Math.PI*2,F=Math.sqrt(Math.random())*Lt.fireR,U=y.x+Math.cos(B)*F,V=y.z+Math.sin(B)*F,$=I(T,U,V,y.y+.6);$<y.y-1.2||$>y.y+.7||N.push({x:U,y:$,z:V,ph:Math.random()*6,s:.7+Math.random()*.8})}P.push({g:y,fl:N})};let E=[],R=new ys(1,1);return e.explosion=(y,T)=>{let I=new He(R,new en({color:"#ffb347",transparent:!0,opacity:.9,depthWrite:!1}));I.position.set(y[0],y[1]+.3,y[2]),n.add(I),E.push({m:I,t:0,life:T?1.1:.45,size:T?9:2.6});for(let N=0;N<(T?70:30);N++){let z=Math.random()*6.28,B=Math.random()*1.4,F=(T?12:7)*(.4+Math.random());e.particle(y[0],y[1]+.3,y[2],Math.cos(z)*Math.cos(B)*F,Math.sin(B)*F,Math.sin(z)*Math.cos(B)*F,.06+Math.random()*.08,.6+Math.random()*.6,Math.random()<.5?"#ffb347":"#3a3530",9)}for(let N=0;N<(T?24:10);N++)e.particle(y[0]+(Math.random()-.5)*2,y[1]+.5+Math.random(),y[2]+(Math.random()-.5)*2,Math.random()-.5,1+Math.random(),Math.random()-.5,.5,2+Math.random()*1.5,"#4a4642",-.3,T?1.6:.8);e.flashLight(y,T?6:3),g=T?.35:.15},e.flashPop=y=>{e.flashLight(y,8),g=.08;for(let T=0;T<14;T++)e.particle(y[0],y[1],y[2],(Math.random()-.5)*6,(Math.random()-.5)*6,(Math.random()-.5)*6,.04,.25,"#ffffff",0)},e.update=(y,T,I)=>{let N=0;for(let F=s.length-1;F>=0;F--){let U=s[F];if(U.life-=y,U.life<=0){s.splice(F,1);continue}U.vy-=U.g*y,U.x+=U.vx*y,U.y+=U.vy*y,U.z+=U.vz*y,U.fy!==null&&U.fy!==void 0&&U.y<U.fy&&(U.y=U.fy,U.vy=Math.abs(U.vy)>.6?-U.vy*.3:0,U.vx*=.5,U.vz*=.5,U.g=U.vy?9.8:0),U.vx*=1-y*1.5,U.vz*=1-y*1.5;let V=U.life/U.max,$=U.shell?U.s:U.s*(1+U.grow*(1-V)*8)*(U.grow?1:Math.min(1,V*2));xt.position.set(U.x,U.y,U.z),xt.rotation.set(U.x*7,U.y*5,0),U.shell?xt.scale.set($*.5,$*.5,$*1.6):xt.scale.setScalar($),xt.updateMatrix(),i.setMatrixAt(N,xt.matrix),i.setColorAt(N,U.c),N++}i.count=N,i.instanceMatrix.needsUpdate=!0,i.instanceColor&&(i.instanceColor.needsUpdate=!0),N=0;for(let F=l.length-1;F>=0;F--){let U=l[F];if(U.t+=y,U.t>U.life){l.splice(F,1);continue}let V=U.t/U.life,$=Math.min(U.d,3.5),ee=Math.min(U.d,U.d*V+$*.5),H=Math.max(0,ee-$),K=(U.b[0]-U.a[0])/U.d,Q=(U.b[1]-U.a[1])/U.d,he=(U.b[2]-U.a[2])/U.d;xt.position.set(U.a[0]+K*ee,U.a[1]+Q*ee,U.a[2]+he*ee),xt.lookAt(U.a[0]+K*(ee+1),U.a[1]+Q*(ee+1),U.a[2]+he*(ee+1)),xt.rotateY(Math.PI),xt.scale.set(.012,.012,Math.max(.01,ee-H)),xt.updateMatrix(),a.setMatrixAt(N++,xt.matrix)}a.count=N,a.instanceMatrix.needsUpdate=!0,N=0;for(let F=C.length-1;F>=0;F--){let U=C[F],V=U.g;if(V.state!=="active"){C.splice(F,1);continue}let $=Lt.smokeLife-V.life,ee=Math.min(1,$/1.2),H=Math.min(1,V.life/1.5);for(let K of U.balls){if(N>=v)break;let Q=ee*H;xt.position.set(V.x+(K.x-V.x)*(.3+.7*ee),V.y+(K.y-V.y)*(.3+.7*ee)+Math.sin(T*.6+K.ph)*.08,V.z+(K.z-V.z)*(.3+.7*ee)),xt.rotation.set(K.ph,T*.05+K.ph,0),xt.scale.setScalar(Math.max(.01,K.s*Q*1.25)),xt.updateMatrix(),S.setMatrixAt(N,xt.matrix),Qc.setScalar(K.c),S.setColorAt(N,Qc),N++}}S.count=N,S.instanceMatrix.needsUpdate=!0,S.instanceColor&&(S.instanceColor.needsUpdate=!0),N=0;let z=0,B=null;for(let F=P.length-1;F>=0;F--){let U=P[F],V=U.g;if(V.state!=="active"||V.life<=0){P.splice(F,1);continue}let $=Math.min(1,V.life/1.2)*Math.min(1,(Lt.fireLife-V.life)*4+.3);for(let ee of U.fl){if(N>=A)break;let H=.7+Math.sin(T*14+ee.ph)*.2+Math.sin(T*23+ee.ph*2)*.1;xt.position.set(ee.x,ee.y,ee.z),xt.rotation.set(0,ee.ph+T,0),xt.scale.set(ee.s*$,ee.s*$*H*1.3,ee.s*$),xt.updateMatrix(),b.setMatrixAt(N,xt.matrix),Qc.setRGB(1,.45+H*.35,.1),b.setColorAt(N,Qc),N++}z+=$,B=V}b.count=N,b.instanceMatrix.needsUpdate=!0,b.instanceColor&&(b.instanceColor.needsUpdate=!0),B?(M.position.set(B.x,B.y+1,B.z),M.intensity=Math.min(1,z)*(3+Math.sin(T*20)*.8)):M.intensity=0;for(let F=E.length-1;F>=0;F--){let U=E[F];U.t+=y;let V=U.t/U.life;if(V>=1){n.remove(U.m),U.m.material.dispose(),E.splice(F,1);continue}U.m.scale.setScalar(U.size*(.3+.7*Math.sqrt(V))),U.m.material.opacity=.9*(1-V),U.m.material.color.setRGB(1,.7-V*.4,.3-V*.25)}g>0&&(g-=y,g<=0&&(x.intensity=0))},e}function Bi(n,e=!1){let t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},o={},a=n[0].morphTargetsRelative,l=new Zt;l.morphTargetsRelative=a;let c=0;for(let h=0;h<n.length;++h){let f=n[h],u=0,d=0;if(t!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let p in f.attributes){if(!i.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(f.attributes[p]),u++}if(u!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let p in f.morphAttributes){if(!s.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;if(f.morphAttributes[p].length!==n[0].morphAttributes[p].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have the same number of morph targets for the "'+p+'" morph attribute.'),null;o[p]===void 0&&(o[p]=[]),o[p].push(f.morphAttributes[p]),d++}if(d!==s.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of morph attributes."),null;if(e){let p;if(t)p=f.index.count;else if(f.attributes.position!==void 0)p=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,p,h),c+=p}}if(t){let h=0,f=[];for(let u=0;u<n.length;++u){let d=n[u].index;for(let p=0;p<d.count;++p)f.push(d.getX(p)+h);h+=n[u].attributes.position.count}l.setIndex(f)}for(let h in r){let f=K0(r[h]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,f)}for(let h in o){let f=o[h][0].length;if(f!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let u=0;u<f;++u){let d=[];for(let _=0;_<o[h].length;++_)d.push(o[h][_][u]);let p=K0(d);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(p)}}}return l}function K0(n){let e,t,i,s=-1,r=0;for(let c=0;c<n.length;++c){let h=n[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let o=new e(r),a=new Qt(o,t,i),l=0;for(let c=0;c<n.length;++c){let h=n[c];if(h.isInterleavedBufferAttribute){let f=l/t;for(let u=0,d=h.count;u<d;u++)for(let p=0;p<t;p++){let _=h.getComponent(u,p);a.setComponent(u+f,p,_)}}else o.set(h.array,l);l+=h.count*t}return s!==void 0&&(a.gpuType=s),a}var xa=new W;function ci(n,e,t,i,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),l=Math.PI/4;xa.copy(e),xa[i]=0,xa.normalize();let c=.5*o/(o+a),h=1-xa.angleTo(n)/l;return Math.sign(xa[t])===1?h*c:a/(o+a)+c+c*(1-h)}var th=class n extends Vt{constructor(e=1,t=1,i=1,s=2,r=.1){let o=s*2+1;if(r=Math.min(e/2,t/2,i/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:i,segments:s,radius:r},o===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let l=new W,c=new W,h=new W(e,t,i).divideScalar(2).subScalar(r),f=this.attributes.position.array,u=this.attributes.normal.array,d=this.attributes.uv.array,p=f.length/6,_=new W,x=.5/o;for(let g=0,v=0;g<f.length;g+=3,v+=2)switch(l.fromArray(f,g),c.copy(l),c.x-=Math.sign(c.x)*x,c.y-=Math.sign(c.y)*x,c.z-=Math.sign(c.z)*x,c.normalize(),f[g+0]=h.x*Math.sign(l.x)+c.x*r,f[g+1]=h.y*Math.sign(l.y)+c.y*r,f[g+2]=h.z*Math.sign(l.z)+c.z*r,u[g+0]=c.x,u[g+1]=c.y,u[g+2]=c.z,Math.floor(g/p)){case 0:_.set(1,0,0),d[v+0]=ci(_,c,"z","y",r,i),d[v+1]=1-ci(_,c,"y","z",r,t);break;case 1:_.set(-1,0,0),d[v+0]=1-ci(_,c,"z","y",r,i),d[v+1]=1-ci(_,c,"y","z",r,t);break;case 2:_.set(0,1,0),d[v+0]=1-ci(_,c,"x","z",r,e),d[v+1]=ci(_,c,"z","x",r,i);break;case 3:_.set(0,-1,0),d[v+0]=1-ci(_,c,"x","z",r,e),d[v+1]=1-ci(_,c,"z","x",r,i);break;case 4:_.set(0,0,1),d[v+0]=1-ci(_,c,"x","y",r,e),d[v+1]=1-ci(_,c,"y","x",r,t);break;case 5:_.set(0,0,-1),d[v+0]=ci(_,c,"x","y",r,e),d[v+1]=1-ci(_,c,"y","x",r,t);break}}static fromJSON(e){return new n(e.width,e.height,e.depth,e.segments,e.radius)}};var Hi=new yi({vertexColors:!0,roughness:.82,metalness:.04}),va=new yi({vertexColors:!0,roughness:.6,metalness:.15}),nh=new We;function hi(n,e){n.attributes.normal||n.computeVertexNormals(),n=n.index?n.toNonIndexed():n;let t=n.attributes.position.count,i=new Float32Array(t*3),s=n.attributes.normal.array;nh.set(e);for(let r=0;r<t;r++){let o=.8+s[r*3+1]*.2+s[r*3]*.06;i[r*3]=nh.r*o,i[r*3+1]=nh.g*o,i[r*3+2]=nh.b*o}n.setAttribute("color",new Qt(i,3));for(let r of Object.keys(n.attributes))r!=="position"&&r!=="normal"&&r!=="color"&&n.deleteAttribute(r);return n}function Ke(n,e,t,i=0){let s=new kr(n.map(a=>new fe(a[0],a[1]))),r=Math.min(.006,e*.18),o=new qo(s,{depth:Math.max(.001,e-r*2),bevelEnabled:!0,bevelThickness:r,bevelSize:r*.8,bevelSegments:2,steps:1,curveSegments:8});return o.translate(0,0,-e/2+r),o.rotateY(Math.PI/2),o.translate(i,0,0),hi(o,t)}function ot(n,e,t,i,s,r=7,o=0,a=n){let l=new xi(a,n,t-e,Math.max(14,r*2));return l.rotateX(-Math.PI/2),l.translate(o,i,-(e+t)/2),hi(l,s)}function ze(n,e,t,i,s,r,o=0){let a=new Vt(n,e,t);return a.translate(o,s,-i),hi(a,r)}function Jt(n,e,t,i,s,r,o=0,a=Math.min(n,e,t)*.3){let l=new th(n,e,t,2,Math.min(a,Math.min(n,e,t)*.49));return l.translate(o,s,-i),hi(l,r)}function rr(n,e,t,i,s,r,o=0,a=!1){let l=new Ii(1,18,12,0,Math.PI*2,0,a?Math.PI/2:Math.PI);return l.scale(n,e,t),l.translate(o,s,-i),hi(l,r)}function hf(n,e,t,i,s,r=0,o=0){let a=new xi(n,e,t,14);return a.translate(o,i,-r),hi(a,s)}var J0=[{name:"Original",b:null,w:null,sw:"#3a3c40"},{name:"Desierto",b:"#b59a6c",w:"#8a6c44",sw:"#b59a6c"},{name:"Bosque",b:"#4f6040",w:"#3d4a30",sw:"#4f6040"},{name:"\xC1rtico",b:"#dfe4ea",w:"#b9c2cc",sw:"#dfe4ea"},{name:"Ne\xF3n",b:"#2b1f47",w:"#ff3fa4",sw:"#ff3fa4"},{name:"Oro",b:"#c9a23a",w:"#6b4a24",sw:"#c9a23a"},{name:"Carmes\xED",b:"#7a1a1a",w:"#2a1a1a",sw:"#9a2020"},{name:"Cobalto",b:"#1f3f8a",w:"#9aa6b8",sw:"#2f5fc0"}],oh=(n,e)=>n&&typeof n=="object"?n[e]|0:n|0,IM="#34373c",ih="#8b5a2e",LM="#6e4423",uf="#5a5f66";function nm(n){let e=[],t=(l,c="m")=>e.push([l,c]),i=null,s=[.3,.05],r=(l,c=.28,h=.11,f=.032)=>t(Ke([[.03,.02],[-.02,.02],[-.02-Math.sin(c)*h,.02-h],[.03-Math.sin(c)*h,.02-h]],f,l),"w");switch(n){case"ak47":case"galil":case"sg553":{let l=n==="ak47"?ih:n==="galil"?"#4b4635":"#55543f";t(Ke([[-.07,.02],[.27,.02],[.27,.095],[-.07,.095]],.046,n==="ak47"?"#2c2d2f":n==="galil"?"#3a3830":"#4a4a3e"),"b"),t(Ke([[-.07,.09],[-.44,.07],[-.46,-.06],[-.41,-.07],[-.2,0],[-.07,.02]],.038,l),"w"),t(Ke([[.27,.025],[.5,.035],[.5,.09],[.27,.095]],.05,l),"w"),t(Ke([[.27,.098],[.53,.105],[.53,.125],[.27,.12]],.026,IM),"m"),t(ot(.011,.5,.72,.065,"#1c1d1f")),t(ze(.006,.05,.012,.66,.1,"#1c1d1f")),t(ot(.016,.69,.75,.065,"#1c1d1f",6)),t(ze(.02,.025,.04,.2,.105,"#1c1d1f")),n==="sg553"&&t(ot(.02,-.02,.14,.14,"#1d1d1d",8)),r(n==="ak47"?LM:"#2a2a2a"),t(Ke([[.09,.02],[.17,.02],[.27,-.17],[.19,-.19]],.032,n==="ak47"?"#7a4f2a":"#2b2b2b"),"w"),t(Ke([[.04,.02],[.08,.02],[.08,-.025],[.04,-.03]],.008,"#1c1d1f"),"m"),i=[.38,.03],s=[.75,.065];break}case"m4a4":case"m4a1s":case"famas":case"aug":{if(n==="famas"||n==="aug"){let l=n==="aug"?"#5d6a52":"#3c4248";t(Ke([[-.36,0],[.28,0],[.32,.08],[.28,.11],[-.36,.11],[-.38,.05]],.055,l),"b"),n==="famas"?t(Ke([[-.2,.11],[.2,.11],[.22,.16],[-.18,.16]],.016,l),"b"):t(ot(.022,-.06,.12,.15,"#1d1d1d",8)),t(ot(.011,.3,.52,.05,"#1c1d1f")),r("#2a2a2a",.2),t(Ke([[-.18,0],[-.1,0],[-.08,-.15],[-.16,-.16]],.03,"#262626"),"w"),t(Ke([[.12,0],[.17,0],[.15,-.09],[.11,-.09]],.03,l),"b"),i=[.14,-.03],s=[.52,.05]}else t(Ke([[-.06,.02],[.24,.02],[.24,.1],[-.06,.1]],.046,"#2f3236"),"b"),t(Ke([[-.06,.1],[.24,.1],[.24,.12],[-.06,.12]],.028,"#1f2124"),"m"),t(ot(.012,-.32,-.06,.075,"#25272a",6)),t(Ke([[-.2,.1],[-.38,.1],[-.38,-.02],[-.3,-.02],[-.2,.05]],.036,"#222428"),"w"),t(Ke([[.24,.025],[.5,.03],[.5,.105],[.24,.105]],.05,"#2a2c30"),"b"),t(ze(.012,.045,.012,.5,.13,"#1c1d1f")),t(ze(.03,.02,.03,0,.135,"#1c1d1f")),n==="m4a1s"?(t(ot(.011,.5,.55,.065,"#1c1d1f")),t(ot(.022,.55,.82,.065,"#1a1b1d",10)),s=[.82,.065]):(t(ot(.011,.5,.7,.065,"#1c1d1f")),t(ot(.015,.66,.72,.065,"#1c1d1f",6)),s=[.72,.065]),r("#232427",.3),t(Ke([[.09,.02],[.155,.02],[.18,-.15],[.115,-.155]],.03,"#26272a"),"w"),i=[.38,.03];break}case"awp":case"ssg08":case"g3sg1":case"scar20":{let l=n==="awp"?"#3f5b3a":n==="ssg08"?"#3e4c5e":n==="g3sg1"?"#2d302d":"#2b2e33",c=n==="awp"?1.15:1;t(Ke([[-.52,.04],[-.3,.06],[-.1,.03],[.4,.03],[.42,.09],[-.06,.1*c],[-.22,.1*c],[-.52,.09*c],[-.54,-.07],[-.44,-.08],[-.2,-.05],[-.08,-.06],[-.06,0]],.05*c,l),"b"),t(Ke([[-.14,.04],[-.24,.04],[-.24,-.02],[-.14,-.02]],.052*c,"#0d0d0d"),"m"),t(ot(.013*c,.4,n==="awp"?1.05:.92,.065,"#1c1d1f",7,0,.011*c)),t(ot(.028*c,-.08,.26,.15*c,"#191a1c",10)),t(ot(.036*c,.2,.3,.15*c,"#191a1c",10,0,.028*c)),t(ot(.033*c,-.14,-.07,.15*c,"#191a1c",10,0,.026*c)),t(ze(.016,.05,.02,.02,.12*c,"#1c1d1f")),t(ze(.016,.05,.02,.18,.12*c,"#1c1d1f")),(n==="awp"||n==="ssg08")&&t(ze(.06,.012,.012,-.04,.09,"#2a2a2a",.04)),t(Ke(n==="g3sg1"||n==="scar20"?[[.06,.03],[.12,.03],[.13,-.12],[.07,-.12]]:[[.06,.03],[.12,.03],[.12,-.04],[.06,-.04]],.03,"#222"),"w"),i=[.3,.02],s=[n==="awp"?1.05:.92,.065];break}case"p90":{t(Ke([[-.22,.02],[.28,.02],[.32,.07],[.3,.11],[-.22,.12],[-.25,-.04],[-.12,-.08],[-.05,-.02],[.02,-.08],[.1,-.08],[.12,.02]],.06,"#3a3c3e"),"b"),t(Ke([[-.18,.12],[.2,.12],[.2,.15],[-.18,.15]],.04,"#2a2a2a"),"m"),t(ot(.011,.3,.38,.06,"#1c1d1f")),i=[.12,-.04],s=[.38,.06];break}case"mac10":{t(Ke([[-.05,.02],[.2,.02],[.2,.11],[-.05,.11]],.06,"#2a2b2e"),"b"),t(ot(.012,.2,.27,.07,"#1c1d1f")),t(Ke([[-.01,.02],[.04,.02],[.04,-.2],[-.01,-.2]],.03,"#222"),"w"),t(ze(.004,.06,.14,-.12,.08,"#1c1d1f",.02)),i=[.17,0],s=[.27,.07];break}case"mp9":case"mp7":case"ump":case"mp5":case"bizon":{let l=n==="ump"||n==="mp5"||n==="bizon"?.36:.28;t(Ke([[-.06,.02],[l,.02],[l,.1],[-.06,.1]],.05,n==="mp7"?"#3a3d3f":"#2a2c30"),"b"),t(Ke([[-.06,.09],[-.28,.08],[-.28,0],[-.24,0],[-.06,.04]],.03,"#1f2124"),"w"),r("#232427",.25),n==="bizon"?t(ot(.03,.06,.32,-.01,"#2b2b2b",8)):t(Ke([[.07,.02],[.12,.02],[n==="mp5"?.16:.12,-.15],[n==="mp5"?.11:.07,-.15]],.028,"#222"),"w"),n==="mp5"?(t(ot(.022,l,l+.18,.06,"#1a1b1d",10)),s=[l+.18,.06]):(t(ot(.011,l,l+.06,.06,"#1c1d1f")),s=[l+.06,.06]),i=[l*.75,.01];break}case"nova":case"xm1014":case"sawedoff":case"mag7":{let l=n==="sawedoff"||n==="mag7",c=l?.42:.68;t(Ke([[-.05,.02],[.18,.02],[.18,.1],[-.05,.1]],.05,"#2b2d30"),"b"),t(ot(.016,.18,c,.075,"#1c1d1f",8)),t(ot(.014,.18,c-.06,.04,"#1f2022",8)),t(Ke([[.24,.01],[.46,.01],[.46,.06],[.24,.06]],.045,n==="sawedoff"?ih:"#2a2a2a"),"w"),n==="mag7"&&t(Ke([[.04,.02],[.12,.02],[.12,-.14],[.04,-.14]],.04,"#2a2a2a"),"w"),n==="sawedoff"?t(Ke([[-.05,.08],[-.12,.06],[-.18,-.08],[-.1,-.09],[-.05,.02]],.035,ih),"w"):n!=="mag7"?t(Ke([[-.05,.09],[-.42,.06],[-.44,-.07],[-.38,-.08],[-.05,.02]],.04,n==="nova"?"#2a2a2a":"#26272a"),"w"):r("#232427"),i=[.35,0],s=[c,.075];break}case"m249":case"negev":{t(Ke([[-.1,.02],[.32,.02],[.32,.13],[-.1,.13]],.07,"#3a3d36"),"b"),t(Ke([[-.1,.1],[-.44,.08],[-.44,-.06],[-.1,.02]],.04,"#26272a"),"w"),t(ot(.016,.32,.82,.07,"#1c1d1f",8)),t(Ke([[.32,.03],[.55,.03],[.55,.1],[.32,.1]],.06,"#2b2b2b"),"b"),t(ze(.1,.12,.13,.12,-.04,"#3b3b2e",.05)),r("#232427"),i=[.45,.02],s=[.82,.07];break}case"deagle":case"r8":{n==="r8"?(t(ot(.012,.03,.24,.07,uf,8)),t(ot(.03,-.01,.05,.05,uf,6)),t(Ke([[-.04,.02],[.04,.02],[.04,.08],[-.04,.08]],.03,uf),"b"),r(ih,.35,.1,.03),s=[.24,.07]):(t(Ke([[-.05,.035],[.2,.035],[.21,.06],[.2,.092],[-.05,.092]],.032,"#9aa0a8"),"b"),t(Ke([[-.04,0],[.17,0],[.17,.035],[-.04,.035]],.03,"#8a9098"),"b"),t(ze(.012,.012,.01,.195,.1,"#1c1d1f")),r("#26272a",.25,.11,.036),s=[.21,.065]);break}case"zeus":{t(Ke([[-.04,.02],[.13,.02],[.14,.07],[-.04,.07]],.04,"#2a3a6a"),"b"),t(ze(.045,.035,.02,.14,.045,"#e6c84a")),r("#222",.25,.09),s=[.15,.045];break}case"knife":{t(Ke([[-.12,-.012],[-.005,-.014],[-.005,.014],[-.12,.012],[-.13,0]],.024,"#1f2023"),"w"),t(Ke([[-.005,-.03],[.012,-.03],[.012,.024],[-.005,.024]],.03,"#3a3c40"),"m"),t(Ke([[.012,-.016],[.17,-.012],[.215,.006],[.17,.016],[.06,.016],[.012,.016]],.005,"#c9cfd6"),"b"),t(Ke([[.03,.016],[.16,.016],[.16,.019],[.03,.019]],.007,"#8d949c"),"m"),s=[.21,0];break}case"he":t(hi(new ys(.037,0),"#3d4a2c")),t(ze(.016,.02,.016,0,.04,"#999")),t(ze(.008,.05,.016,-.02,.025,"#aaa",.03));break;case"flash":t(ot(.028,-.055,.055,0,"#a0a8b2",8)),t(ze(.016,.02,.016,0,.032,"#777"));break;case"smoke":t(ot(.03,-.065,.065,0,"#5a6670",8)),t(ze(.02,.012,.02,0,.034,"#888"));break;case"decoy":t(ot(.026,-.05,.05,0,"#6b6b5b",6));break;case"incendiary":t(ot(.028,-.06,.06,0,"#a2552c",8));break;case"molotov":t(ot(.03,-.06,.04,0,"#5d7a3a",8)),t(ot(.012,.04,.1,0,"#4d6a2a",6)),t(ot(.016,.1,.13,0,"#e8d6b0",5));break;case"c4":t(ze(.2,.06,.13,0,0,"#b8a27a")),t(ze(.07,.03,.05,.01,.04,"#1d1d1d",.03)),t(ze(.05,.012,.03,.01,.058,"#5bdc6d",.03)),t(ze(.18,.02,.02,-.04,.035,"#a33"));break;case"defuser":t(ze(.16,.05,.1,0,0,"#2d3a55")),t(ze(.04,.04,.12,0,.03,"#d4b13a",.05));break;default:{let l=n==="dualies"?"#9aa0a8":n==="fiveseven"?"#4b4f55":n==="tec9"?"#2d2f33":"#34373c",c=n==="tec9"?.22:.18;t(Ke([[-.04,.032],[c,.032],[c,.075],[-.03,.075],[-.045,.06]],.028,l),"b"),t(Ke([[-.035,0],[c-.02,0],[c-.02,.032],[-.035,.032]],.026,"#222428"),"m"),r(n==="cz75"?"#3a2a1a":"#202124",.22,.1,.03),n==="tec9"&&t(Ke([[.06,0],[.1,0],[.1,-.16],[.06,-.16]],.024,"#202124"),"w"),n==="usp"?(t(ot(.017,c,c+.15,.055,"#1a1b1d",10)),s=[c+.15,.055]):s=[c,.055],t(ze(.008,.012,.008,c-.01,.082,"#111"))}}let o=(l,c,h,f,u,d="#141516",p=.006,_=.006)=>{for(let x=0;x<f;x++)t(ze(u,p,_,l+(c-l)*(f>1?x/(f-1):0),h,d))};if(n==="ak47"||n==="galil"||n==="sg553"){t(ot(.012,.27,.5,.13,"#2a2b2d",8)),t(ze(.05,.03,.03,.26,.122,"#1c1d1f")),t(ze(.008,.012,.03,.08,.06,"#151617",.026)),o(-.05,.22,.098,6,.05,"#232426",.004,.008);for(let l=0;l<4;l++)t(ze(.034,.006,.006,.13+l*.028,-.04-l*.035,"#1e1f21"));t(ze(.05,.016,.02,.48,.03,"#1c1d1f"))}if(n==="m4a4"||n==="m4a1s"){for(let l=0;l<12;l++)t(ze(.03,.008,.006,-.05+l*.026,.126,"#121314"));for(let l=0;l<4;l++)for(let c of[-.026,.026])t(ze(.004,.012,.022,.29+l*.05,.065,"#121314",c));t(Ke([[.48,.105],[.5,.17],[.505,.17],[.52,.105]],.012,"#1c1d1f"),"m"),t(ze(.03,.012,.03,-.07,.112,"#1c1d1f")),t(ot(.008,.12,.15,.08,"#1c1d1f",6,.03));for(let l=0;l<4;l++)t(ze(.04,.006,.005,-.33+l*.07,.065,"#121314",.016));for(let l=0;l<3;l++)t(ze(.032,.005,.005,.13+l*.03,-.05-l*.03,"#1b1c1e"))}if((n==="famas"||n==="aug")&&(o(-.2,.2,.114,8,.012,"#1a1b1c",.005,.03),t(ze(.02,.03,.06,.25,.06,"#1a1b1c"))),n==="awp"||n==="ssg08"||n==="scar20"||n==="g3sg1"){let l=n==="awp"?1.15:1;t(hi(new xs(.031*l,12).rotateY(Math.PI).translate(0,.15*l,-.302),"#3a6f9a")),t(hi(new xs(.025*l,12).translate(0,.15*l,.142),"#1d3a55")),t(ot(.01,.05,.08,.17*l,"#161718",8,0)),t(ze(.03,.012,.012,-.12,.08,"#1c1d1f",.05)),t(hi(new Ii(.013,6,4).translate(.06,.08,.12),"#222")),n==="awp"&&(t(ze(.012,.03,.02,.36,.03,"#1c1d1f")),o(.43,.6,.065,4,.012,"#121314",.032,.03))}if(n==="deagle"||["glock","usp","p2000","p250","fiveseven","cz75","dualies","tec9"].includes(n)){let l=n==="deagle"?.092:.075,c=n==="deagle"?-.045:-.035;for(let h=0;h<5;h++)for(let f of[-.017,.017])t(ze(.004,.03,.004,c+.006+h*.009,l-.02,"#0f1011",f*(n==="deagle"?1.05:.95)));t(ze(.012,.016,.01,c-.004,l-.004,"#111"))}if(n==="nova"||n==="xm1014")for(let l=0;l<5;l++)t(ze(.006,.05,.05,.27+l*.04,.035,"#151515"));["mp9","mp7","ump","mp5","bizon","mac10","p90"].includes(n)&&(o(-.02,.18,.105,7,.016,"#121314",.006,.02),t(ze(.024,.012,.012,.02,.07,"#111",.03))),(n==="m249"||n==="negev")&&(o(-.06,.28,.135,10,.02,"#151615",.008,.03),t(ot(.008,.6,.65,.115,"#1c1d1f",6)));let a=et[n];if(a&&a.dmg&&a.cat!=="knife"&&a.cat!=="equip"){let l=a.cat==="pistol";t(Ke([[.025,0],[.07,0],[.07,-.006],[.06,-.035],[.025,-.035],[.025,-.029],[.057,-.029],[.064,-.006],[.025,-.006]],.008,"#18191b"),"m"),t(ze(.004,.02,.008,.045,-.012,"#0e0e0f")),t(l?ze(.004,.012,.05,.06,.06,"#0b0b0c",.016):ze(.004,.022,.07,.1,.07,"#0b0b0c",.026))}return{parts:e,fore:i,muzzle:s}}var ff=new Map,Ma=new Map;function ba(n){if(!Ma.has(n)){let e=nm(n);Ma.set(n,{fore:e.fore,muzzle:e.muzzle})}return Ma.get(n)}function or(n,e=0){let t=n+":"+e;if(ff.has(t))return ff.get(t);let i=nm(n),s=J0[e]||J0[0],r=et[n]&&et[n].dmg,o=i.parts.map(([l,c])=>{if(!s.b||!r||c!=="b"&&c!=="w"||n==="knife"&&c==="w")return l;let h=l.clone(),f=new We(c==="b"?s.b:s.w),u=h.attributes.color.array,d=h.attributes.normal.array;for(let p=0;p<u.length/3;p++){let _=.8+d[p*3+1]*.2+d[p*3]*.06;u[p*3]=f.r*_,u[p*3+1]=f.g*_,u[p*3+2]=f.b*_}return h}),a=Bi(o);return ff.set(t,a),Ma.has(n)||Ma.set(n,{fore:i.fore,muzzle:i.muzzle}),a}function to(n,e=0){return new He(or(n,e),Hi)}var j0={T:[{name:"Terrorista",shirt:"#4e3b2b",pants:"#363b43",vest:"#3b3426",glove:"#1c1c1c",boots:"#2a241d",skin:"#c49670",head:"balaclava",hc:"#1b1b1b"}],CT:[{name:"Contraterrorista",shirt:"#30342f",pants:"#2c302c",vest:"#3e443a",glove:"#151515",boots:"#141414",skin:"#c49670",head:"sas",hc:"#262a26"}]},im=n=>(j0[n]||j0.T)[0],df={};function NM(n){let e=n;if(df[e])return df[e];let t=im(n),i=n==="T",s=[Jt(.4,.5,.24,0,.27,t.shirt,0,.07),rr(.25,.08,.13,0,.47,t.shirt),hf(.06,.07,.08,.55,t.shirt),Jt(.42,.07,.26,0,.03,"#26221c",0,.02),ze(.06,.06,.04,.13,.03,"#8a7a50")];if(i){s.push(ze(.08,.46,.02,.125,.27,"#2e241a",-.12),ze(.08,.46,.02,.125,.27,"#2e241a",.12)),s.push(Jt(.36,.2,.27,0,.27,t.vest,0,.04),Jt(.06,.32,.27,0,.38,t.vest,.13,.02),Jt(.06,.32,.27,0,.38,t.vest,-.13,.02));for(let _ of[-.1,0,.1])s.push(Jt(.085,.13,.05,.155,.27,"#4a4130",_,.015),Jt(.075,.03,.055,.157,.33,"#2a251c",_,.01));s.push(ze(.05,.1,.04,.13,.42,"#1b1b1b",.12),ze(.01,.06,.01,.13,.5,"#111",.13)),s.push(Jt(.3,.3,.1,-.17,.3,"#3a3326",0,.04))}else{s.push(Jt(.44,.38,.29,0,.32,t.vest,0,.05),Jt(.3,.1,.3,0,.5,t.vest,0,.04));for(let _ of[-.11,0,.11])s.push(Jt(.09,.12,.05,.165,.22,"#353a31",_,.015));s.push(ze(.12,.08,.04,.165,.38,"#2a2e27",-.08),ze(.06,.04,.01,.17,.4,"#8a8f84",.09)),s.push(ze(.14,.12,.07,.12,.42,"#20231f",.15)),s.push(Jt(.44,.36,.05,-.15,.32,t.vest,0,.02)),s.push(ze(.12,.1,.245,0,.1,"#3b4038",.1),ze(.1,.08,.245,0,.16,"#24271f",-.12))}let r=Bi(s),o=[rr(.115,.135,.12,0,.12,t.skin)],a=t.hc;i?(o.push(rr(.122,.142,.127,0,.125,a)),o.push(Jt(.15,.045,.03,.112,.15,t.skin,0,.012)),o.push(ze(.035,.022,.01,.133,.152,"#111",-.05),ze(.035,.022,.01,.133,.152,"#111",.05)),o.push(Jt(.19,.045,.04,.1,.225,"#23303a",0,.015),rr(.127,.012,.128,0,.225,"#111"))):(o.push(rr(.142,.135,.148,0,.17,a,0,!0),rr(.148,.02,.155,0,.17,a)),o.push(ze(.03,.05,.08,0,.21,"#1c1f1b",.145),ze(.03,.05,.08,0,.21,"#1c1f1b",-.145)),o.push(ze(.05,.04,.04,.1,.3,"#111")),o.push(Jt(.2,.065,.05,.11,.155,"#0e0e0e",0,.02),Jt(.16,.04,.012,.137,.156,"#33424a",0,.005)),o.push(rr(.1,.07,.06,.09,.07,"#1d1f1d")),o.push(ot(.032,.12,.18,.04,"#3c3f3a",8,-.07),ot(.032,.12,.18,.04,"#3c3f3a",8,.07)),o.push(ze(.04,.05,.03,.16,.06,"#555")));let l=Bi(o),c=Bi([hf(.088,.07,.48,-.23,t.pants),ze(.04,.12,.1,0,-.2,i?"#2b2f35":t.vest,.09),...i?[]:[ze(.1,.16,.06,.02,-.15,"#20231f",.085)]]),h=Bi([hf(.068,.056,.42,-.2,t.pants),Jt(.15,.11,.07,.055,-.04,i?"#1f1f1f":"#191b19",0,.03),Jt(.14,.13,.26,.045,-.4,t.boots,0,.04),Jt(.15,.03,.27,.045,-.465,"#0f0f0f",0,.012)]),f=(_,x,g)=>{let v=new xi(_,x,1,14);return v.rotateX(Math.PI/2),hi(v,g)},u=f(.066,.058,t.shirt),d=f(.055,.047,t.shirt),p=Bi([Jt(.085,.09,.11,0,0,t.glove,0,.03)]);return df[e]={torso:r,head:l,thigh:c,shin:h,upper:u,fore:d,hand:p,S:t}}function ah(n,e=0){let t=NM(n),i=new Ct,s=new Ct;i.add(s);let r=new Ct;r.position.y=.92,s.add(r);let o=[];for(let f of[-.11,.11]){let u=new Ct;u.position.set(f,0,0),r.add(u),u.add(new He(t.thigh,Hi));let d=new Ct;d.position.y=-.46,u.add(d),d.add(new He(t.shin,Hi)),o.push({hip:u,knee:d})}let a=new Ct;r.add(a),a.add(new He(t.torso,Hi));let l=new Ct;l.position.y=.53,a.add(l),l.add(new He(t.head,Hi));let c=new Ct;c.matrixAutoUpdate=!0,a.add(c);let h=[];for(let f=0;f<2;f++){let u=new He(t.upper,Hi),d=new He(t.fore,Hi),p=new He(t.hand,Hi);a.add(u,d,p),h.push({u,f:d,h:p})}return i.userData={body:s,hips:r,legs:o,chest:a,neck:l,gun:c,arms:h,gunId:null,phase:0,team:n,si:e},i}function lh(n,e,t=0){let i=n.userData,s=e+":"+t;if(i.gunId!==s&&(i.gunId=s,i.gun.clear(),i.info=e?ba(e):null,i.wid=e,e)){let r=to(e,t);if(r.scale.setScalar(1.12),i.gun.add(r),e==="dualies"){let o=to(e,t);o.scale.setScalar(1.12),o.position.x=-.24,i.gun.add(o)}}}var ya=new W,DM=new W,UM=new W,FM=new W,OM=new W;function sm(n,e,t,i,s,r){ya.subVectors(e,n);let o=ya.length(),a=(t+i)*.995;o>a&&(ya.multiplyScalar(a/o),o=a);let l=DM.copy(n).add(ya),c=(t*t-i*i+o*o)/(2*o),h=Math.sqrt(Math.max(0,t*t-c*c)),f=UM.copy(ya).normalize(),u=FM.copy(s).sub(n);return u.sub(OM.copy(f).multiplyScalar(u.dot(f))).normalize(),r.copy(n).addScaledVector(f,c).addScaledVector(u,h),l}var zM=new W(0,1,0),Q0=new vt;function rh(n,e,t){let i=e.distanceTo(t);n.position.copy(e).add(t).multiplyScalar(.5),Q0.lookAt(e,t,zM),n.quaternion.setFromRotationMatrix(Q0),n.scale.set(1,1,Math.max(.01,i))}var pf=new W,_a=new W,mf=new W,em=new W;function ch(n,e,t){let i=n.userData;i.phase+=t*Math.min(e.speed,6)*2.4;let s=Math.min(1,e.speed/3)*.6,r=Math.sin(i.phase)*s,o=e.duck;i.hips.position.y=.92-o*.36;let[a,l]=i.legs;a.hip.rotation.x=r-o*1.2,l.hip.rotation.x=-r-o*1.2,a.knee.rotation.x=Math.max(0,-Math.sin(i.phase)*s)*1.2+o*2,l.knee.rotation.x=Math.max(0,Math.sin(i.phase)*s)*1.2+o*2,e.onGround||(a.hip.rotation.x=-.6,l.hip.rotation.x=.2,a.knee.rotation.x=.9,l.knee.rotation.x=.4),i.chest.rotation.x=o*.2;let c=Math.max(-1.2,Math.min(1.2,e.pitch));i.neck.rotation.x=c*.55;let h=i.info,f=i.wid?et[i.wid]?.cat||i.wid:null,u=f==="pistol"||i.wid==="zeus";if(f==="knife"||f==="grenade"||f==="c4"||i.wid==="defuser")i.gun.position.set(.27,.16,-.22),i.gun.rotation.set(c*.5+.3,0,0);else{let d=u?.42:.28;i.gun.position.set(.11,.4+Math.sin(c)*d,-Math.cos(c)*d),i.gun.rotation.set(c,0,0)}i.gun.updateMatrix();for(let d=0;d<2;d++){let p=i.arms[d],_=d===0;pf.set(_?.24:-.24,.46,0);let x=null;h&&(_?x=_a.set(0,0,f==="knife"?.06:0).applyMatrix4(i.gun.matrix):h.fore&&f!=="knife"?x=_a.set(0,h.fore[1]*1.12-.02,-h.fore[0]*1.12).applyMatrix4(i.gun.matrix):i.wid==="dualies"?x=_a.set(-.24,0,0).applyMatrix4(i.gun.matrix):u&&(x=_a.set(-.04,-.04,.02).applyMatrix4(i.gun.matrix))),x||(x=_a.set(_?.3:-.3,.02,-.05+r*.15*(_?-1:1))),em.set(_?.7:-.7,-.5,.4);let g=sm(pf,x,.29,.27,em,mf);rh(p.u,pf,mf),rh(p.f,mf,g),p.h.position.copy(g),p.h.quaternion.copy(p.f.quaternion)}if(i.body.rotation.x=0,i.body.position.y=0,e.dead>0){let d=Math.min(1,e.dead);i.body.rotation.x=d*1.45,i.body.position.y=d*.15}}function rm(){let n=new Ct,e=new Ct;n.add(e);let t=new Ct;e.add(t);let i=[];for(let s=0;s<2;s++){let r=new He(new Vt(.08,.08,1),va),o=new He(new Vt(.07,.07,1),va),a=new Ct;n.add(r,o,a),i.push({u:r,f:o,h:a})}return n.userData={hold:e,gun:t,arms:i,id:null,team:null},n}var gf={};function kM(n,e){let t=n+e;if(gf[t])return gf[t];let i=im(n,e),s=(l,c,h,f,u)=>{let d=new xi(l,c,h,16);return d.rotateX(Math.PI/2),d.translate(0,0,-f),hi(d,u)},r=Bi([s(.04,.036,1,0,i.shirt),s(.042,.042,.06,-.45,"#1c1c1c")]),o=Bi([s(.033,.029,1,0,i.shirt),s(.038,.037,.16,.42,i.vest),s(.031,.031,.05,.49,i.glove)]),a=Bi([Jt(.05,.065,.075,0,-.01,i.glove,0,.018),Jt(.056,.026,.045,.012,-.038,i.glove,0,.011),ot(.011,-.012,.04,.026,i.glove,8,.026),...[0,1,2,3].map(l=>ot(.0085,0,.03,-.045,i.glove,6,-.02+l*.013))]);return gf[t]={sleeve:r,forearm:o,hand:a}}function om(n,e,t,i=0,s=0){let r=n.userData,o=e+t+i+":"+s;if(r.key===o)return;r.key=o,r.id=e,r.team=t,r.gun.clear();for(let h of r.arms)h.h.clear();if(!e)return;let a=et[e]?.cat||e,l=new He(or(e,s),va);if(r.gun.add(l),r.dual=e==="dualies",r.dual){let h=new He(or(e,s),va);h.position.set(-.21,0,.02),h.rotation.y=-.08,r.gun.add(h)}r.info=ba(e),r.cat=a;let c=kM(t,i);for(let h of r.arms)h.u.geometry=c.sleeve,h.f.geometry=c.forearm,h.h.add(new He(c.hand,va));r.base=e==="dualies"?[.12,-.15,-.48]:a==="pistol"||e==="zeus"?[.15,-.125,-.44]:a==="knife"?[.17,-.18,-.4]:a==="grenade"||a==="c4"||e==="defuser"?[.16,-.17,-.38]:a==="sniper"?[.19,-.22,-.55]:[.19,-.2,-.43],r.rot=a==="knife"?[.35,.55,-.25]:a==="grenade"||a==="c4"?[.1,.2,0]:[.03,.07,0],n.traverse(h=>{h.renderOrder=10,h.frustumCulled=!1})}var xf=new W,sh=new W,yf=new W,tm=new W,eo=new vt;function am(n){let e=n.userData;if(!e.id)return;e.hold.updateMatrix(),e.gun.updateMatrix(),eo.multiplyMatrices(e.hold.matrix,e.gun.matrix);let t=e.info||{},i=e.cat;for(let s=0;s<2;s++){let r=e.arms[s],o=s===0;xf.set(o?.2:-.22,-.3,.12);let a=null;o?a=sh.set(.004,-.012,i==="knife"?.065:0).applyMatrix4(eo):t.fore&&i!=="knife"?a=sh.set(-.004,t.fore[1]-.03,-t.fore[0]).applyMatrix4(eo):e.dual?a=sh.set(-.206,-.012,.02).applyMatrix4(eo):(i==="pistol"||e.id==="zeus")&&(a=sh.set(-.035,-.065,.025).applyMatrix4(eo));let l=!!a;if(r.u.visible=r.f.visible=r.h.visible=l,!l)continue;tm.set(o?.6:-.65,-.7,.3);let c=sm(xf,a,.4,.4,tm,yf);rh(r.u,xf,yf),rh(r.f,yf,c),r.h.position.copy(c),r.h.quaternion.setFromRotationMatrix(eo),!o&&!e.dual&&r.h.rotateZ(.35)}}var Ie=null,ar=null,_f=null,cm=.55,is={x:0,y:0,z:0,yaw:0};function Sa(){if(Ie){Ie.state==="suspended"&&Ie.resume();return}try{Ie=new(window.AudioContext||window.webkitAudioContext),ar=Ie.createGain(),ar.gain.value=cm;let n=Ie.createDynamicsCompressor();n.threshold.value=-14,n.ratio.value=6,ar.connect(n),n.connect(Ie.destination),_f=Ie.createBuffer(1,Ie.sampleRate*1.5,Ie.sampleRate);let e=_f.getChannelData(0);for(let t=0;t<e.length;t++)e[t]=Math.random()*2-1}catch{Ie=null}}function hh(n){cm=n,ar&&(ar.gain.value=n)}function hm(n,e,t,i){is.x=n,is.y=e,is.z=t,is.yaw=i}function Ft(n,e=1,t=30){let i=Ie.createGain(),s=e,r=0;if(n){let o=n[0]-is.x,a=n[1]-is.y,l=n[2]-is.z,c=Math.hypot(o,a,l);if(s*=1/(1+(c/t)**2*3),c>.5){let h=Math.cos(is.yaw),f=-Math.sin(is.yaw);r=Math.max(-1,Math.min(1,(o*h+l*f)/c))*.8}}if(s<.004)return null;if(i.gain.value=s,Ie.createStereoPanner){let o=Ie.createStereoPanner();o.pan.value=r,i.connect(o),o.connect(ar)}else i.connect(ar);return i}function Wt(n,e,t,i,s,r=.7,o="lowpass",a=.002,l=1){let c=Ie.createBufferSource();c.buffer=_f,c.playbackRate.value=.8+Math.random()*.4;let h=Ie.createBiquadFilter();h.type=o,h.Q.value=r,h.frequency.setValueAtTime(i,e),h.frequency.exponentialRampToValueAtTime(Math.max(30,s),e+t);let f=Ie.createGain();f.gain.setValueAtTime(1e-4,e),f.gain.exponentialRampToValueAtTime(l,e+a),f.gain.exponentialRampToValueAtTime(1e-4,e+t),c.connect(h),h.connect(f),f.connect(n),c.start(e,Math.random()),c.stop(e+t+.05)}function tn(n,e,t,i,s,r="sine",o=.5,a=.003){let l=Ie.createOscillator();l.type=r,l.frequency.setValueAtTime(i,e),s!==i&&l.frequency.exponentialRampToValueAtTime(Math.max(20,s),e+t);let c=Ie.createGain();c.gain.setValueAtTime(1e-4,e),c.gain.exponentialRampToValueAtTime(o,e+a),c.gain.exponentialRampToValueAtTime(1e-4,e+t),l.connect(c),c.connect(n),l.start(e),l.stop(e+t+.05)}var lm={pistol:{f:2400,d:.18,b:160,v:.8},smg:{f:2e3,d:.16,b:130,v:.75},rifle:{f:1600,d:.26,b:95,v:1},sniper:{f:1200,d:.55,b:70,v:1.25},heavy:{f:1300,d:.32,b:80,v:1.05},equip:{f:4e3,d:.3,b:300,v:.6}};function vf(n,e,t,i){if(!Ie)return;let s=lm[n]||lm.rifle,r=Ie.currentTime,o=Ft(e,(t?.35:s.v)*(e?1:.6),t?12:60);if(o){if(n==="equip"){Wt(o,r,.35,6e3,3e3,2,"bandpass",.002,.7),tn(o,r,.3,90,60,"sawtooth",.4);return}if(t){Wt(o,r,.09,1800,500,1,"lowpass",.001,.9),tn(o,r,.05,300,120,"triangle",.3);return}Wt(o,r,s.d,s.f*(i?.7:1),200,.9,"lowpass",.001,1),Wt(o,r,.04,6e3,2500,.8,"highpass",.001,.45),tn(o,r,s.d*.7,s.b*1.6,s.b*.5,"sine",.9),e&&Wt(o,r+.05,s.d*2.5,700,150,.5,"lowpass",.02,.18)}}function Mf(n,e=1){if(!Ie)return;let t=Ft(n,.5*e,9);if(!t)return;let i=Ie.currentTime;Wt(t,i,.06,900+Math.random()*400,200,1.2,"lowpass",.002,.7),tn(t,i,.04,90,60,"sine",.25)}function um(n){if(!Ie)return;let e=Ft(n,.6,10);if(!e)return;let t=Ie.currentTime;Wt(e,t,.1,700,120,1,"lowpass",.002,.9)}function wa(n,e=2200,t=.4){if(!Ie)return;let i=Ft(n,t,8);if(!i)return;let s=Ie.currentTime;Wt(i,s,.03,e,e*.5,3,"bandpass",.001,.9)}function fm(n){if(!Ie)return;let e=Ie.currentTime,t=Ft(n,.45,8);t&&(Wt(t,e,.04,1500,700,3,"bandpass",.001,.8),Wt(t,e+.35,.05,2600,1300,4,"bandpass",.001,.9),Wt(t,e+.8,.05,1800,900,4,"bandpass",.001,.9))}function uh(n,e){if(!Ie)return;let t=Ie.currentTime,i=Ft(null,.45);n?tn(i,t,e?.25:.12,e?2900:1500,e?2700:900,"triangle",.5):Wt(i,t,.07,900,300,1,"lowpass",.002,.6)}function dm(){if(!Ie)return;let n=Ie.currentTime,e=Ft(null,.6);Wt(e,n,.12,600,150,1,"lowpass",.002,.9),tn(e,n,.1,140,70,"sine",.6)}function pm(){if(!Ie)return;let n=Ie.currentTime,e=Ft(null,.25);tn(e,n,.08,1300,1300,"square",.25),tn(e,n+.07,.12,1750,1750,"square",.25)}function bf(n,e){if(!Ie)return;let t=Ie.currentTime,i=Ft(n,e?1.6:1.2,e?200:70);i&&(Wt(i,t,e?2.4:1.2,1800,60,.6,"lowpass",.004,1),tn(i,t,e?1.4:.7,80,30,"sine",1))}function mm(n){if(!Ie)return;let e=Ie.currentTime,t=Ft(n,1.1,50);t&&(Wt(t,e,.4,5e3,800,.7,"lowpass",.002,1),tn(t,e,.2,120,50,"sine",.8))}function gm(n){if(!Ie||n<.3)return;let e=Ie.currentTime,t=Ft(null,.12);tn(t,e,n,3200,3150,"sine",.3,.02)}function Sf(n){if(!Ie)return;let e=Ie.currentTime,t=Ft(n,.7,25);t&&Wt(t,e,2.2,2500,500,.4,"highpass",.05,.5)}function xm(n){if(!Ie)return;let e=Ie.currentTime,t=Ft(n,.9,25);t&&(Wt(t,e,1.2,1200,300,.6,"lowpass",.01,.9),Wt(t,e+.05,.3,3e3,1500,2,"bandpass",.001,.5))}function ym(n){if(!Ie)return;let e=Ie.currentTime,t=Ft(n,.25,12);t&&Wt(t,e,.25,900+Math.random()*500,300,1,"lowpass",.02,.6)}function _m(n){if(!Ie)return;let e=Ie.currentTime,t=Ft(n,.5,15);t&&(tn(t,e,.06,900,500,"triangle",.4),Wt(t,e,.04,2500,1200,2,"bandpass",.001,.4))}function wf(){if(!Ie)return;let n=Ie.currentTime,e=Ft(null,.4);Wt(e,n,.18,400,1600,1,"bandpass",.05,.5)}function Tf(n,e){if(!Ie)return;let t=Ie.currentTime,i=Ft(n,.6,40);i&&tn(i,t,.12,e?2600:2100,e?2600:2100,"square",.2)}function Ef(){if(!Ie)return;let n=Ie.currentTime,e=Ft(null,.3);tn(e,n,.06,1400+Math.random()*600,1400,"square",.15)}function Af(n){if(!Ie)return;let e=Ie.currentTime,t=Ft(n,.6,15);t&&(Wt(t,e,.2,3e3,1500,3,"bandpass",.001,.8),tn(t,e+.1,.25,600,900,"triangle",.3))}function vm(){if(!Ie)return;let n=Ie.currentTime,e=Ft(null,.35);tn(e,n,.06,900,900,"triangle",.4),tn(e,n+.05,.08,1350,1350,"triangle",.35)}function Mm(){if(!Ie)return;let n=Ie.currentTime,e=Ft(null,.3);tn(e,n,.15,220,180,"square",.25)}function bm(){if(!Ie)return;let n=Ie.currentTime,e=Ft(null,.35);Wt(e,n,.08,2e3,900,2,"bandpass",.002,.8)}function Sm(n){if(!Ie)return;let e=Ie.currentTime,t=Ft(null,.32);(n?[523,659,784,1047]:[440,415,392,330]).forEach((s,r)=>{tn(t,e+r*.11,.5,s,s,"triangle",.35),tn(t,e+r*.11,.5,s/2,s/2,"sawtooth",.08)})}function Rf(){if(!Ie)return;let n=Ie.currentTime,e=Ft(null,.25);[392,523].forEach((t,i)=>tn(e,n+i*.12,.25,t,t,"triangle",.35))}var Ot=n=>document.getElementById(n),HM=n=>String(n).replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]);function wm(n){let{G:e,store:t}=n,i={},s={t:t.get("ls:look",{t:-1}).t??-1},r=new qn,o=document.createElement("canvas");o.width=2,o.height=256;{let M=o.getContext("2d"),E=M.createLinearGradient(0,0,0,256);E.addColorStop(0,"#0f2a6b"),E.addColorStop(.55,"#2d63d6"),E.addColorStop(1,"#7fc4ff"),M.fillStyle=E,M.fillRect(0,0,2,256)}let a=new Ji(o);a.colorSpace=cn,r.background=a;let l=new hn(30,innerWidth/innerHeight,.1,100);r.add(new Li("#cfe2ff","#2a3a6a",1.4));let c=new Ni("#fff4e0",2.6);c.position.set(2,4,3),r.add(c);let h=new Ni("#7fd0ff",2.2);h.position.set(-3,2.5,-3),r.add(h);let f=new He(new xi(.75,.85,.18,24),new Fn({color:"#1b2f66"}));f.position.y=-.09,r.add(f);let u=new He(new Yo(.8,.025,6,40),new en({color:"#7fe0ff"}));u.rotation.x=Math.PI/2,u.position.y=.01,r.add(u);let d=new Ct;r.add(d);for(let M=0;M<14;M++){let E=new He(new ni(.5,30),new en({color:"#9fd4ff",transparent:!0,opacity:.06,depthWrite:!1}));E.rotation.z=M/14*Math.PI,d.add(E)}d.position.set(0,1.2,-6);let p=new Ct;r.add(p);let _=null,x="",g=.4,v=null,w=0;function S(){return s.t===1?"CT":"T"}function C(){let M=S(),E=M==="T"?"ak47":"m4a4";M!==x&&(x=M,p.clear(),_=ah(M,0),lh(_,E,0),p.add(_))}i.render=(M,E)=>{w+=E,v||(g+=E*.25),p.rotation.y=Math.PI+Math.sin(g)*.6+.35,_&&ch(_,{speed:0,duck:0,pitch:Math.sin(w*1.3)*.04-.05,onGround:!0,dead:0},E),d.rotation.z+=E*.05;let R=innerWidth/innerHeight;l.aspect=R,l.fov=R<1?46:30,l.updateProjectionMatrix(),l.position.set(R<1?0:.15,1.15,5.2),l.lookAt(R<1?0:.15,.95,0),M.setClearColor("#0f2a6b"),M.clear(),M.render(r,l)},addEventListener("pointerdown",M=>{e.phase==="lobby"&&M.target.tagName==="CANVAS"&&(v={x:M.clientX,s:g})}),addEventListener("pointermove",M=>{v&&(g=v.s-(M.clientX-v.x)*.01)}),addEventListener("pointerup",()=>{v=null});function A(){t.set("ls:look",s),n.sendPref({t:s.t})}i.myPref=()=>({t:s.t}),i.show=()=>{Ot("lobby").hidden=!1;for(let M of document.querySelectorAll("#lobby nav button"))M.onclick=()=>{M.dataset.tab==="settings"?(M.classList.add("on"),n.openSettings(()=>P())):P()};for(let M of document.querySelectorAll("[data-pref]"))M.onclick=()=>{s.t=+M.dataset.pref,A(),P()};Ot("goBtn").onclick=()=>{n.isHost()&&m()&&n.onStart()},Ot("modeBtn").onclick=()=>{Ot("modeSel").hidden=!1,P()},Ot("modeClose").onclick=()=>{Ot("modeSel").hidden=!0},b(),P()},i.hide=()=>{Ot("lobby").hidden=!0,Ot("modeSel").hidden=!0},i.refresh=()=>{Ot("lobby").hidden||P()};function m(){let M=(n.ctx().players||[]).length;return e.cfg.bots||M>=2}function b(){let M=Ot("modes");M.innerHTML="";for(let T of[2,3,5]){let I=document.createElement("div");I.className="mode",I.dataset.s=T,I.innerHTML=`<b>${T}<i>VS</i>${T}</b><small>${T===5?"Cl\xE1sico competitivo":T===3?"Escuadra":"Duelo de parejas"}</small>`,I.onclick=()=>{n.isHost()&&(e.cfg.size=T,n.pushCfg())},M.appendChild(I)}let E=Ot("botsSeg");E.innerHTML="";for(let[T,I]of[[!0,"Con bots"],[!1,"Sin bots"]]){let N=document.createElement("button");N.textContent=I,N.dataset.v=T,N.onclick=()=>{n.isHost()&&(e.cfg.bots=T,n.pushCfg())},E.appendChild(N)}let R=(T,I,N)=>{T.innerHTML="";for(let[z,B]of I){let F=document.createElement("button");F.textContent=B,F.dataset.k=z,F.onclick=()=>{n.isHost()&&(e.cfg[N]=z,n.pushCfg())},T.appendChild(F)}};R(Ot("len"),Object.entries(n.LENGTHS).map(([T,I])=>[T,I.name+" \xB7 a "+I.win]),"len"),R(Ot("diff"),Object.entries(n.DIFF).map(([T,I])=>[T,I.name]),"diff");let y=Ot("maps");y.innerHTML="";for(let T of n.MAPS){let I=document.createElement("div");I.className="mcard",I.dataset.id=T.id;let N=document.createElement("canvas");N.width=200,N.height=200,I.appendChild(N);let z=document.createElement("div");z.className="mn",z.innerHTML=T.name+"<small>"+T.sub+"</small>",I.appendChild(z),I.onclick=()=>{n.isHost()&&(e.cfg.map=T.id,t.set("ls:map",T.id),n.pushCfg())},y.appendChild(I),n.mapThumb(T.id).then(B=>{if(B){let F=N.getContext("2d");F.fillStyle="#0b1530",F.fillRect(0,0,200,200),F.drawImage(B,0,0,200,200)}})}}function P(){let M=n.ctx(),E=n.isHost(),R=n.myId();for(let U of document.querySelectorAll("#lobby nav button"))U.classList.toggle("on",U.dataset.tab==="play");Ot("meName").textContent=M.me.name,Ot("roomInfo").textContent=M.online?`Sala ${M.roomCode||""} \xB7 ${(M.players||[]).length} jugador${(M.players||[]).length===1?"":"es"}`:"Pr\xE1ctica sin conexi\xF3n";for(let U of document.querySelectorAll("[data-pref]"))U.classList.toggle("on",+U.dataset.pref===s.t);let y=(M.players||[]).map(U=>({...U,pr:e.prefs[U.id]||{}})),T=[0,0],I={};for(let U of y){let V=U.pr.t??-1;(V===0||V===1)&&(I[U.id]=V,T[V]++)}for(let U of y.slice().sort((V,$)=>V.slot-$.slot))if(I[U.id]===void 0){let V=T[0]<=T[1]?0:1;I[U.id]=V,T[V]++}let N=e.cfg.bots?Math.max(T[0],T[1],e.cfg.size):Math.max(T[0],T[1]);Ot("party").innerHTML="<h4>GRUPO</h4>"+y.map(U=>`<div class="pm ${I[U.id]?"ct":"t"} ${U.id===R?"me":""}"><i></i><span>${HM(U.name)}</span><small>${I[U.id]?"CT":"T"}${(U.pr.t??-1)===-1?" \xB7 auto":""}${U.id===M.hostId?" \xB7 \u{1F451} host":""}</small></div>`).join("")+(e.cfg.bots?`<div class="pm bot"><i></i><span>+ ${Math.max(0,N*2-y.length)} bots</span><small>${n.DIFF[e.cfg.diff].name}</small></div>`:"");let z=n.MAPS.find(U=>U.id===e.cfg.map)||n.MAPS[0];Ot("modeTitle").textContent=`${N} VS ${N}`,Ot("modeSub").textContent=`${z.name} \xB7 ${e.cfg.bots?"con bots":"sin bots"} \xB7 ${n.LENGTHS[e.cfg.len].name}`,n.mapThumb(z.id).then(U=>{if(!U)return;let V=Ot("modeMap"),$=V.getContext("2d");$.fillStyle="#0b1530",$.fillRect(0,0,V.width,V.height),$.drawImage(U,0,0,V.width,V.height)}),Ot("modeBtn").textContent=E?"CAMBIAR MODO":"VER MODO";let B=Ot("goBtn"),F=m();B.disabled=!E||!F,B.innerHTML=E?F?"JUGAR":"FALTAN JUGADORES":"ESPERANDO AL HOST",Ot("goNote").textContent=!F&&E?"Sin bots hacen falta al menos 2 jugadores en la sala.":E?"":"El host elige el modo y empieza la partida.";for(let U of document.querySelectorAll("#modes .mode"))U.classList.toggle("on",+U.dataset.s===e.cfg.size);for(let U of document.querySelectorAll("#botsSeg button"))U.classList.toggle("on",String(e.cfg.bots)===U.dataset.v);for(let U of document.querySelectorAll("#len button"))U.classList.toggle("on",U.dataset.k===e.cfg.len);for(let U of document.querySelectorAll("#diff button"))U.classList.toggle("on",U.dataset.k===e.cfg.diff);for(let U of document.querySelectorAll(".mcard"))U.classList.toggle("on",U.dataset.id===e.cfg.map);Ot("modeSel").classList.toggle("ro",!E),C()}return i}var fh="ls:cfg",Tm={sens:2.1,invert:!1,xStatic:!1,xColor:"#5dff6a",xSize:8,xGap:4,xThick:2,xDot:!1,xOutline:!0,vol:.8,quality:2},VM=["#5dff6a","#00e5ff","#ffe14a","#ff4a4a","#ff4af0","#ffffff"];function Em(n,e){let t=Object.assign({},Tm,n.get(fh,{})),i=n.get("ls:sens",null);i&&!n.get(fh,null)&&(t.sens=+(i*1e3).toFixed(2));let s=n.get("ls:q",null);s!==null&&!n.get(fh,null)&&(t.quality=s);let r=()=>{n.set(fh,t),e&&e(t)},o=document.createElement("div");o.id="settings",o.className="fn-overlay",o.hidden=!0,document.body.appendChild(o);let a=null,l=(_,x)=>`<div class="st-row"><label>${_}</label><div class="st-c">${x}</div></div>`,c=(_,x,g,v,w=S=>S)=>`<input type="range" data-k="${_}" min="${x}" max="${g}" step="${v}" value="${t[_]}"><output data-o="${_}">${w(t[_])}</output>`,h=(_,x,g)=>`<div class="seg" data-t="${_}"><button data-v="1" class="${t[_]?"on":""}">${x}</button><button data-v="0" class="${t[_]?"":"on"}">${g}</button></div>`,f={sens:_=>(+_).toFixed(2),vol:_=>Math.round(_*100)+"%",xSize:_=>_,xGap:_=>_,xThick:_=>_};function u(){o.innerHTML=`<div class="ms-box st-box">
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
          ${l("Color",`<div class="st-cols6">${VM.map(_=>`<button class="sw ${t.xColor===_?"on":""}" data-c="${_}" style="background:${_}"></button>`).join("")}</div>`)}
          ${l("Largo",c("xSize",2,16,1,f.xSize))}
          ${l("Separaci\xF3n",c("xGap",0,12,1,f.xGap))}
          ${l("Grosor",c("xThick",1,5,1,f.xThick))}
          ${l("Punto central",h("xDot","S\xED","No"))}
          ${l("Contorno",h("xOutline","S\xED","No"))}
        </div>
      </div>
      <div class="st-btns"><button class="fn-play small ghost" id="stReset">VALORES POR DEFECTO</button><button class="fn-play small" id="stClose">LISTO</button></div>
    </div>`;for(let _ of o.querySelectorAll("input[type=range]"))_.oninput=()=>{let x=_.dataset.k;t[x]=+_.value,o.querySelector(`[data-o="${x}"]`).textContent=(f[x]||(g=>g))(t[x]),r(),d()};for(let _ of o.querySelectorAll("[data-t]"))for(let x of _.children)x.onclick=()=>{t[_.dataset.t]=x.dataset.v==="1",r(),u()};for(let _ of o.querySelectorAll("[data-q] button"))_.onclick=()=>{t.quality=+_.dataset.v,r(),u()};for(let _ of o.querySelectorAll("[data-c]"))_.onclick=()=>{t.xColor=_.dataset.c,r(),u()};o.querySelector("#stReset").onclick=()=>{Object.assign(t,Tm),r(),u()},o.querySelector("#stClose").onclick=()=>p(),d()}function d(){Cf(o.querySelector("#stX"),t,t.xGap)}function p(){o.hidden=!0;let _=a;a=null,_&&_()}return{S:t,open(_){a=_||null,u(),o.hidden=!1},close:p,isOpen:()=>!o.hidden}}function Cf(n,e,t){if(!n)return;let i=Math.round(t),s=e.xSize,r=e.xThick,o=[i,s,r,e.xColor,e.xDot,e.xOutline].join();if(n._k===o)return;n._k=o;let[a,l,c,h,f]=n.children,u=e.xOutline?"0 0 0 1px rgba(0,0,0,.7)":"none",d=-Math.floor(r/2);for(let p of[a,l,c,h])p.style.background=e.xColor,p.style.boxShadow=u,p.style.display=s>0?"":"none";a.style.cssText+=`;width:${s}px;height:${r}px;top:${d}px;left:${-(i+s)}px`,l.style.cssText+=`;width:${s}px;height:${r}px;top:${d}px;left:${i}px`,c.style.cssText+=`;width:${r}px;height:${s}px;left:${d}px;top:${-(i+s)}px`,h.style.cssText+=`;width:${r}px;height:${s}px;left:${d}px;top:${i}px`,f.style.cssText=`display:${e.xDot?"block":"none"};position:absolute;width:${r}px;height:${r}px;left:${d}px;top:${d}px;background:${e.xColor};box-shadow:${u}`}var Sn=null,Pf={},GM=new en({color:"#ffffff"});function WM(n,e,t,i){e.fillStyle="#fff",e.strokeStyle="#fff",e.lineWidth=3,e.lineJoin="round";let s=t/2,r=i/2,o=(a,l)=>{e.beginPath(),e.moveTo(a-12*l,r-16*l),e.lineTo(a-5*l,r-16*l),e.lineTo(a,r-10*l),e.lineTo(a+5*l,r-16*l),e.lineTo(a+12*l,r-16*l),e.lineTo(a+15*l,r-4*l),e.lineTo(a+13*l,r+18*l),e.lineTo(a-13*l,r+18*l),e.lineTo(a-15*l,r-4*l),e.closePath(),e.fill(),e.fillStyle="#000",e.font=`bold ${10*l}px sans-serif`,e.textAlign="center",e.fillText("100",a,r+8*l),e.fillStyle="#fff"};if(n==="vest")o(s,1);else if(n==="vesthelm")o(s+10,1),e.beginPath(),e.arc(s-14,r+6,11,Math.PI,0),e.lineTo(s-1,r+8),e.lineTo(s-27,r+8),e.closePath(),e.fill();else if(n==="defuser")e.beginPath(),e.moveTo(s-20,r+8),e.quadraticCurveTo(s,r-14,s+18,r-4),e.stroke(),e.beginPath(),e.moveTo(s-20,r-6),e.quadraticCurveTo(s,r+14,s+18,r+4),e.stroke(),e.beginPath(),e.arc(s-2,r+1,3,0,7),e.fill();else if(n==="flash"||n==="smoke"||n==="decoy"||n==="incendiary"){let a=n==="smoke"?30:24,l=n==="smoke"?13:12;if(e.beginPath(),e.roundRect(s-l/2,r-a/2+4,l,a,3),e.fill(),e.fillRect(s-3,r-a/2,6,5),e.fillRect(s+2,r-a/2+1,10,3),e.fillRect(s+9,r-a/2+1,3,12),e.fillStyle="#000",n==="smoke")for(let c=0;c<3;c++)e.fillRect(s-4,r-6+c*7,8,2);n==="decoy"&&e.fillRect(s-4,r,8,3),n==="flash"&&e.fillRect(s-l/2,r+2,l,2)}else if(n==="he"){e.beginPath(),e.ellipse(s,r+4,11,13,0,0,7),e.fill(),e.fillRect(s-3,r-12,6,6),e.fillRect(s+2,r-11,9,3),e.fillRect(s+8,r-11,3,13),e.fillStyle="#000";for(let a=-1;a<=1;a++)e.fillRect(s-10,r+4+a*6,20,1.5)}else if(n==="molotov")e.beginPath(),e.moveTo(s-3,r-16),e.lineTo(s+3,r-16),e.lineTo(s+3,r-6),e.lineTo(s+9,r),e.lineTo(s+9,r+16),e.lineTo(s-9,r+16),e.lineTo(s-9,r),e.lineTo(s-3,r-6),e.closePath(),e.fill(),e.fillRect(s-5,r-22,4,7);else if(n==="c4")e.fillRect(s-20,r-9,40,18),e.fillStyle="#000",e.fillRect(s-4,r-6,14,7);else if(n==="hs")e.beginPath(),e.arc(s,r-2,10,0,7),e.fill(),e.fillStyle="#000",e.fillRect(s-7,r-4,5,4),e.fillRect(s+2,r-4,5,4),e.fillStyle="#fff",e.fillRect(s-6,r+6,12,6);else if(n==="world"||n==="skull")e.beginPath(),e.arc(s,r-3,10,0,7),e.fill(),e.fillRect(s-6,r+4,12,7);else if(n==="fire")e.beginPath(),e.moveTo(s,r-16),e.quadraticCurveTo(s+14,r,s+8,r+14),e.lineTo(s-8,r+14),e.quadraticCurveTo(s-14,r,s,r-16),e.fill();else return!1;return!0}function Ps(n,e=160,t=56){let i=n+e+"x"+t;if(Pf[i])return Pf[i];let s=document.createElement("canvas");s.width=e,s.height=t;let r=s.getContext("2d");if(!WM(n,r,e,t))try{Sn||(Sn={r:new er({alpha:!0,antialias:!0,preserveDrawingBuffer:!0}),s:new qn,c:new Qi(-1,1,1,-1,.01,10)},Sn.c.position.set(3,0,0),Sn.c.lookAt(0,0,0),Sn.r.setClearColor(0,0)),Sn.r.setSize(e,t);let o=or(n);o.computeBoundingBox();let a=o.boundingBox,l=new He(o,GM),c=a.max.z-a.min.z,h=a.max.y-a.min.y,f=e/t,u=Math.max(c/2/f,h/2)*1.12;Sn.c.left=-u*f,Sn.c.right=u*f,Sn.c.top=u,Sn.c.bottom=-u,Sn.c.updateProjectionMatrix(),l.position.set(0,-(a.max.y+a.min.y)/2,-(a.max.z+a.min.z)/2),Sn.s.add(l),Sn.r.render(Sn.s,Sn.c),Sn.s.remove(l),r.drawImage(Sn.r.domElement,0,0)}catch{}return Pf[i]=s.toDataURL()}var Is=n=>document.getElementById(n),Ls=n=>String(n).replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]),Jn=(n,e)=>{n._v!==e&&(n._v=e,n.textContent=e)},no=n=>et[n]?et[n].name:n==="c4"?"C4":n==="world"?"ca\xEDda":n;function If(n){let e=n.n,t=document.createElement("canvas");t.width=e,t.height=e;let i=t.getContext("2d"),s=i.createImageData(e,e),r=s.data,o=1e9,a=-1e9;for(let h=0;h<e*e;h++)if(n.cls[0][h]===1||n.cls[0][h]===2){let f=n.top[0][h];f<o&&(o=f),f>a&&(a=f)}let l=Math.max(3,Math.min(a-o,14));for(let h=0;h<e*e;h++){let f=0,u=0,d=0,p=0,_=n.cls[0][h],x=n.top[0][h];if((_===1||_===2)&&!isNaN(x)&&x-o<l+1){let v=Math.max(0,Math.min(1,(x-o)/l));f=70+v*130,u=78+v*118,d=88+v*80,p=235,n.L>1&&!isNaN(n.top[1][h])&&(f*=.72,u*=.72,d*=.8)}else if(_===3){let v=!1;for(let w of[1,-1,e,-e]){let S=h+w;S>=0&&S<e*e&&n.cls[0][S]===1&&(v=!0)}v&&(f=u=d=22,p=230)}n.flags[h]&12&&p&&(f=f*.6+120,u=u*.6+40,d*=.6),r[h*4]=f,r[h*4+1]=u,r[h*4+2]=d,r[h*4+3]=p}i.putImageData(s,0,0);let c=n.info.zones;i.font="bold 34px Rajdhani, sans-serif",i.textAlign="center",i.textBaseline="middle";for(let h of["A","B"]){let f=c[h];f&&(i.fillStyle="#000",i.fillText(h,(f[0]+f[2])/2+1,(f[1]+f[3])/2+1),i.fillStyle="#ffd25a",i.fillText(h,(f[0]+f[2])/2,(f[1]+f[3])/2))}return t}function Am(n,e,t,i,s,r,o){let a=n.getContext("2d"),l=n.width,c=1.25;a.clearRect(0,0,l,l),a.save(),a.beginPath(),a.rect(0,0,l,l),a.clip(),a.translate(l/2,l/2),a.rotate(i.yaw),a.scale(c,c);let h=i.x/t.cell,f=i.z/t.cell;a.drawImage(e,-h,-f);let u=(d,p,_,x=3.4)=>{a.fillStyle=_,a.beginPath(),a.arc(d/t.cell-h,p/t.cell-f,x/c,0,7),a.fill(),a.strokeStyle="#000",a.lineWidth=1/c,a.stroke()};if(r&&(r.s==="planted"||r.s==="dropped")&&(o==="T"||r.s==="planted"&&r.seen)){a.fillStyle=r.s==="planted"?"#ff4038":"#ffb03a";let d=r.x/t.cell-h,p=r.z/t.cell-f;a.fillRect(d-4/c,p-3/c,8/c,6/c)}for(let d of s)u(d.x,d.z,d.col,d.me?0:3.4);a.restore(),a.fillStyle="#fff",a.beginPath(),a.moveTo(l/2,l/2-7),a.lineTo(l/2+5,l/2+5),a.lineTo(l/2,l/2+2),a.lineTo(l/2-5,l/2+5),a.closePath(),a.fill()}var Ze={el:{},init(){for(let n of["hud","moneyV","moneyAdd","scT","scCT","pipsT","pipsCT","clock","clockV","bombIco","feed","hpV","arV","helmV","hpB","arB","ammo","wname","magV","resV","slots","xhair","hitmark","centerMsg","prog","progL","progB","hint","dmgDir","scope","flash","hurt","spec","banner","ban1","ban2","buyHint","zoneName","board"])this.el[n]=Is(n)},money(n){Jn(this.el.moneyV,String(n))},moneyDelta(n,e){if(!n)return;let t=document.createElement("div");t.className=n<0?"neg":"",t.textContent=(n>0?"+$":"-$")+Math.abs(n)+(e?"  "+e:""),this.el.moneyAdd.appendChild(t),setTimeout(()=>t.remove(),2300)},vitals(n,e,t){Jn(this.el.hpV,String(n)),Jn(this.el.arV,String(e)),this.el.helmV.hidden=!t,this.el.hpV.parentElement.classList.toggle("low",n<=25),this.el.hpB.style.width=n+"%",this.el.arB.style.width=e+"%"},ammo(n,e,t,i){Jn(this.el.wname,n),this.el.ammo.querySelector(".nums").style.visibility=i?"":"hidden",Jn(this.el.magV,String(e)),Jn(this.el.resV,String(t)),this.el.ammo.classList.toggle("low",i&&e<=5)},clock(n,e,t){let i=Math.max(0,Math.ceil(n));Jn(this.el.clockV,t?"":Math.floor(i/60)+":"+String(i%60).padStart(2,"0")),this.el.clock.classList.toggle("red",e),this.el.bombIco.hidden=!t},score(n,e,t,i){Jn(this.el.scT,String(n)),Jn(this.el.scCT,String(e));let s=(r,o)=>{let a=o.map(l=>l.n+l.a).join();r._k!==a&&(r._k=a,r.innerHTML=o.map(l=>`<i class="${l.a?"":"dead"}" title="${Ls(l.n)}">${Ls(l.n.slice(0,1).toUpperCase())}</i>`).join(""))};s(this.el.pipsT,t),s(this.el.pipsCT,i)},feed(n,e,t,i,s,r){let o=document.createElement("div");r&&(o.className="mine");let a=t==="world"?Ps("skull",60,40):t==="molotov"||t==="incendiary"?Ps("fire",60,40):Ps(t,120,40);for(o.innerHTML=(n?`<span class="${n.team}">${Ls(n.name)}</span>`:"")+`<img src="${a}">`+(s?'<span class="w">\u27C2</span>':"")+(i?`<img class="hs" src="${Ps("hs",40,40)}">`:"")+`<span class="${e.team}">${Ls(e.name)}</span>`,this.el.feed.appendChild(o);this.el.feed.children.length>6;)this.el.feed.firstChild.remove();setTimeout(()=>o.remove(),7e3)},slots(n,e,t=[],i=0){let s=n.map(o=>o.key+o.id).join()+e+"|"+t.join()+i;if(this.el.slots._k===s)return;this.el.slots._k=s;let r=n.map(o=>`<div class="sl ${o.slot===e?"on":""}"><img src="${Ps(o.id,o.id==="knife"?110:150,44)}"><b>${o.key}</b></div>`).join("");t.length&&(r+=`<div class="sl ${e==="g"?"on":""}"><div class="nades">${t.map((o,a)=>`<img class="${e==="g"&&a===i?"on":""}" src="${Ps(o,44,52)}">`).join("")}</div><b>4</b></div>`),this.el.slots.innerHTML=r},showSlots(){this.el.slots.style.opacity=1,clearTimeout(this._st),this._st=setTimeout(()=>this.el.slots.style.opacity=.35,1800)},crosshair(n,e,t){let i=this.el.xhair;i._show!==e&&(i._show=e,i.style.display=e?"":"none"),e&&Cf(i,t,n)},hit(n){let e=this.el.hitmark;e.classList.remove("on"),e.offsetWidth,e.classList.add("on"),e.style.filter=n?"drop-shadow(0 0 2px red) sepia(1) saturate(8) hue-rotate(-30deg)":""},center(n,e=2200){let t=this.el.centerMsg;t.textContent=n,t.style.opacity=1,clearTimeout(this._ct),e&&(this._ct=setTimeout(()=>t.style.opacity=0,e))},progress(n,e){if(e==null){this.el.prog.hidden=!0;return}this.el.prog.hidden=!1,Jn(this.el.progL,n),this.el.progB.style.width=(e*100).toFixed(1)+"%"},hint(n){Jn(this.el.hint,n||"")},dmgDir(n){let e=document.createElement("i");e.style.transform=`rotate(${n}rad) translateY(-140px)`,this.el.dmgDir.appendChild(e),setTimeout(()=>e.remove(),1500)},banner(n,e,t){let i=this.el.banner;if(!e){i.hidden=!0;return}i.className=n||"",i.hidden=!1,Jn(this.el.ban1,e),Jn(this.el.ban2,t||"")}};function Rm(n,e){let t=[...n.players.values()],i=a=>`<tr class="${a.team} ${a.alive?"":"dead"} ${a.id===e?"me":""}"><td>${Ls(a.name)}${a.inv&&a.inv.c4&&n.players.get(e)?.team==="T"?" \u{1F4A3}":""}</td><td>$${a.money}</td><td>${a.k}</td><td>${a.d}</td><td>${a.a}</td><td>${a.mvp?"\u2605"+a.mvp:""}</td><td>${a.ping||""}</td></tr>`,s=a=>{let l=t.filter(c=>c.team===a).sort((c,h)=>h.k-c.k||c.d-h.d);return`<div class="tt ${a}">${a==="T"?"TERRORISTAS":"CONTRATERRORISTAS"}</div><table><tr><th>Jugador</th><th>Plata</th><th>K</th><th>D</th><th>A</th><th>MVP</th><th></th></tr>${l.map(i).join("")}</table>`},r=n.score[n.half===0?0:1],o=n.score[n.half===0?1:0];return`<div class="bh"><span>${Ls(n.mapName)} \xB7 Ronda ${n.round}</span><span><b style="color:var(--t)">${r}</b> \u2013 <b style="color:var(--ct)">${o}</b></span></div>${s("T")}${s("CT")}`}function Cm(n,e,t,i){let s=Is("buyCols");s.innerHTML="",qc.forEach((r,o)=>{let a=document.createElement("div");a.className="bcol",a.dataset.c=o,a.innerHTML=`<h5><b>${o+1}</b>${r.name}</h5>`,r.items[n].forEach((l,c)=>{let h=et[l],f=document.createElement("div");f.className="bit",f.dataset.id=l,f.innerHTML=`<span class="k">${c+1}</span><span class="n">${Ls(h.name)}</span><img src="${Ps(l,200,64)}"><span class="p">$${h.price}</span>`,f.onclick=()=>t(l),f.onmouseenter=()=>i(l),f.onmouseleave=()=>i(null),a.appendChild(f)}),s.appendChild(a)})}function dh(n,e){Is("buyMoney").textContent=n.money;for(let t of document.querySelectorAll("#buyCols .bit")){let i=t.dataset.id,r=et[i].price;i==="vesthelm"&&n.ar>=100&&!n.helm&&(r=350),t.querySelector(".p").textContent="$"+r;let o=n.inv.p===i||n.inv.s===i||i==="vest"&&n.ar>=100||i==="vesthelm"&&n.ar>=100&&n.helm||i==="defuser"&&n.inv.kit||i==="zeus"&&n.inv.zeus||n.inv.g.includes(i);t.classList.toggle("own",o),t.classList.toggle("no",n.money<r),t.classList.toggle("ok",n.money>=r&&!o)}for(let t of document.querySelectorAll("#buyCols .bcol"))t.classList.toggle("sel",+t.dataset.c===e)}function Lf(n){let e=Is("buyInfo");if(!n){e.hidden=!0;return}let t=et[n];if(t)if(e.hidden=!1,Is("biName").textContent=t.name,Is("biList").innerHTML=(B0[n]||[]).map(i=>`<li>${Ls(i)}</li>`).join("")+(t.reward?`<li>Premio por baja: $${t.reward}</li>`:""),t.dmg&&t.cat!=="knife"){let i=(s,r)=>`<i style="width:${Math.min(100,s/r*100).toFixed(0)}%"></i>`;Is("biStats").innerHTML=`<span>Da\xF1o</span>${i(t.dmg*t.pellets,120)}<span>Cadencia</span>${i(t.rpm,900)}<span>Blindaje</span>${i(t.ap*100,100)}<span>Movilidad</span>${i(t.speed,250)}<span>Cargador</span><span>${t.mag} / ${t.reserve}</span>`}else Is("biStats").innerHTML=""}var gh=n=>(n.team==="T"?n.skT:n.skCT)|0,Pm=.0254,Im=Math.PI/180,pn=n=>document.getElementById(n),Gf=[{id:"dust2",name:"Dust II",sub:"Desierto \xB7 cl\xE1sico"},{id:"mirage",name:"Mirage",sub:"Pueblo marroqu\xED"}],vh={get(n,e){try{let t=localStorage.getItem(n);return t?JSON.parse(t):e}catch{return e}},set(n,e){try{localStorage.setItem(n,JSON.stringify(e))}catch{}}},X={players:new Map,drops:new Map,nades:[],bomb:{state:"none",x:0,y:0,z:0,t:0},phase:"lobby",timeLeft:0,round:0,score:[0,0],half:0,time:0,cfg:{map:vh.get("ls:map","dust2"),len:"corta",size:5,bots:!0,diff:"normal"},prefs:{}},qt=null,ct="local",Nt=null,nn=null,xh={},Zf=!1,Xt,ln,an,lr,ro,wn,zt,Ta=null,Wf=null,Tt=()=>!qt||qt.isHost||!qt.online;function Bn(n,e,t){qt&&qt.online&&Arcade.send(n,e,t)}X.emit=(n,e)=>{Bn(n,e),id(n,e,ct)};X.emitTo=(n,e,t)=>{let i=X.players.get(n);n===ct?id(e,t,ct):i&&!i.bot&&Bn(e,t,{to:n})};X.end=(n,e)=>{qt&&qt.online?Arcade.end({winners:n,text:e}):setTimeout(Sb,500)};X.solidAt=(n,e,t)=>kc(X.W,n,e,t);X.floorAt=(n,e,t)=>{let i=As(X.W,n,e,t);return i>-1e8?i:t-.5};var yh=new Map;X.setPlanting=(n,e)=>{e>0?yh.set(n,e):yh.delete(n)};X.planting=n=>yh.get(n)||0;X.fallDamage=(n,e)=>{let t=ef(e);t>0&&Nt&&Nt.damage(n.id,n.id,t,"leg","world",{raw:!0})};function Yt(n,e){Tt()?Nt&&Nt.handle(n,e,ct,{admin:Arcade.admin&&Arcade.admin.active}):Bn(n,e,{to:qt.hostId})}var XM=["hit","buy","drop","take","nade","plant","defst","defx","defok","adm","fall"],O={pl:null,slot:"s",throwT:0,throwPow:1,drawT:0,fireT:0,reloadT:0,shots:0,pp:0,py:0,scope:0,ammo:{p:[0,0],s:[0,0]},ammoW:{p:null,s:null},invV:-1,gsel:0,plantT:0,defT:0,defusing:!1,trig:!1,trig2:!1,nadeHold:0,nadeCd:0,stepT:0,deadT:0,spec:null,blind:0,blindMax:0,shake:0,bob:0,kick:0,lastSlot:"k",zeus:!1,sway:[0,0],swayT:[0,0],pickCd:0,voidSent:!1,lastMoney:null,rescope:0,knife2:!1},kt=()=>X.players.get(ct),Ia=Em(vh,n=>{hh(n.vol*.7)}),Hn=Ia.S;hh(Hn.vol*.7);var jt=new Set,In=!1,cr=!1,hr=!1,km=0,Nf=6,_n={mx:0,mz:0,fire:!1,look:null},os=matchMedia("(pointer: coarse)").matches,Bm=os?Math.min(1,Hn.quality):Hn.quality;addEventListener("keydown",n=>{if(n.repeat&&!["KeyW","KeyA","KeyS","KeyD"].includes(n.code)){n.code==="Tab"&&n.preventDefault();return}if(X.phase!=="lobby"){if(jt.add(n.code),["Tab","Space","ControlLeft","ControlRight","AltLeft","KeyB"].includes(n.code)&&n.preventDefault(),Vn){lb(n);return}Jf(n.code)}});addEventListener("beforeunload",n=>{if(X.phase!=="lobby")return n.preventDefault(),n.returnValue="",""});function Hm(){let n=document.documentElement;try{let e=n.requestFullscreen?n.requestFullscreen({navigationUI:"hide"}):null,t=()=>{try{navigator.keyboard&&navigator.keyboard.lock&&navigator.keyboard.lock().catch(()=>{})}catch{}};e&&e.then?e.then(t).catch(()=>{}):t()}catch{}}addEventListener("keydown",n=>{(n.ctrlKey||n.metaKey)&&["KeyW","KeyS","KeyD","KeyA","KeyR","KeyQ","KeyE","KeyG","KeyB","KeyF"].includes(n.code)&&X.phase!=="lobby"&&n.preventDefault()},!0);addEventListener("keyup",n=>{jt.delete(n.code),n.code==="KeyE"&&O.defusing&&Mh()});addEventListener("blur",()=>{jt.clear(),In=cr=!1});addEventListener("mousedown",n=>{if(Sa(),!(X.phase==="lobby"||Vn)){if(!hr&&!os){document.fullscreenElement||Hm(),Ca();return}n.button===0&&(In=!0),n.button===2&&(cr=!0,ed())}});addEventListener("mouseup",n=>{n.button===0&&(In=!1),n.button===2&&(cr=!1)});addEventListener("contextmenu",n=>n.preventDefault());addEventListener("mousemove",n=>{if(!hr||!O.pl||X.phase==="lobby")return;let e=n.movementX,t=n.movementY,i=Math.abs(e)+Math.abs(t);if(performance.now()-km<80||i>120&&i>Nf*7)return;Nf=Nf*.85+Math.min(i,150)*.15;let r=O.scope?$M():1,o=Hn.sens/1e3;Kf(e*o/r,t*o/r*(Hn.invert?-1:1))});addEventListener("wheel",n=>{hr&&X.phase!=="lobby"&&!Vn&&Vm(n.deltaY>0?1:-1)},{passive:!0});function Kf(n,e){let t=O.pl;t&&(t.yaw-=n,t.pitch=Math.max(-1.5,Math.min(1.5,t.pitch-e)),O.swayT[0]+=n*4,O.swayT[1]+=e*4)}function Ca(){if(Ia.isOpen())return;let n=Xt.domElement;if(!n.requestPointerLock)return;let e=()=>{try{let t=n.requestPointerLock();t&&t.catch&&t.catch(()=>{})}catch{}};try{let t=n.requestPointerLock({unadjustedMovement:!0});t&&t.catch&&t.catch(e)}catch{e()}}document.addEventListener("pointerlockchange",()=>{hr=document.pointerLockElement===Xt.domElement,hr&&(km=performance.now()),oo()});function oo(){pn("clickPlay").hidden=hr||os||X.phase==="lobby"||Vn||!Zf||Ia.isOpen()}function Jf(n){let e=kt();if(e){if(n==="KeyB"){bh();return}if(n!=="Tab"){if(n==="BracketLeft"||n==="BracketRight"){Hn.sens=+Math.max(.4,Math.min(8,Hn.sens*(n==="BracketLeft"?.92:1.08))).toFixed(2),vh.set("ls:cfg",Hn),Ze.center("Sensibilidad "+Hn.sens.toFixed(2),1200);return}if(!e.alive){n==="Space"&&sd(1);return}if(n==="Digit1")kn("p");else if(n==="Digit2")kn("s");else if(n==="Digit3")O.slot==="k"&&e.inv.zeus?kn("z"):(O.slot,kn("k"));else if(n==="Digit4"){let t=e.inv.g;t.length&&(O.slot==="g"&&(O.gsel=(O.gsel+1)%t.length),kn("g",!0))}else n==="Digit5"?kn("c4"):n==="KeyQ"?kn(O.lastSlot):n==="KeyR"?Gm():n==="KeyG"?ZM():n==="KeyE"?Wm():n==="KeyF"&&(O.inspect=1.6)}}}function qM(){if(!os)return;pn("touch").hidden=!1;let n=pn("stick"),e=n.firstElementChild,t=null,i=null;n.addEventListener("touchstart",r=>{t=r.changedTouches[0].identifier;let a=n.getBoundingClientRect();i=[a.left+a.width/2,a.top+a.height/2],r.preventDefault()},{passive:!1}),addEventListener("touchmove",r=>{for(let o of r.changedTouches)if(o.identifier===t){let a=(o.clientX-i[0])/55,l=(o.clientY-i[1])/55,c=Math.hypot(a,l);c>1&&(a/=c,l/=c),_n.mx=a,_n.mz=l,e.style.transform=`translate(${a*40}px,${l*40}px)`}else _n.look&&o.identifier===_n.look.id&&(Kf((o.clientX-_n.look.x)*.006,(o.clientY-_n.look.y)*.006),_n.look.x=o.clientX,_n.look.y=o.clientY)},{passive:!0}),addEventListener("touchend",r=>{for(let o of r.changedTouches)o.identifier===t&&(t=null,_n.mx=_n.mz=0,e.style.transform=""),_n.look&&o.identifier===_n.look.id&&(_n.look=null)}),Xt.domElement.addEventListener("touchstart",r=>{let o=r.changedTouches[0];o.clientX>innerWidth*.35&&(_n.look={id:o.identifier,x:o.clientX,y:o.clientY}),Sa()},{passive:!0});let s=(r,o,a)=>{let l=pn(r);l.addEventListener("touchstart",c=>{c.preventDefault(),o()},{passive:!1}),l.addEventListener("touchend",c=>{c.preventDefault(),a&&a()},{passive:!1})};s("tFire",()=>In=!0,()=>In=!1),s("tJump",()=>jt.add("Space"),()=>jt.delete("Space")),s("tDuck",()=>jt.add("KeyC"),()=>jt.delete("KeyC")),s("tReload",()=>Jf("KeyR")),s("tSwitch",()=>Vm(1)),s("tBuy",()=>bh()),s("tUse",()=>{jt.add("KeyE"),Wm()},()=>{jt.delete("KeyE"),O.defusing&&Mh()}),s("tScope",()=>ed())}function Us(n,e=kt()){if(!e)return null;let t=e.inv;return n==="p"?t.p:n==="s"?t.s:n==="k"?"knife":n==="z"?t.zeus?"zeus":null:n==="g"?t.g.length?t.g[Math.min(O.gsel,t.g.length-1)]:null:n==="c4"&&t.c4?"c4":null}var jn=()=>Us(O.slot)||"knife";function kn(n,e){Us(n)&&(n===O.slot&&!e||(n!==O.slot&&(O.lastSlot=O.slot),O.slot=n,O.drawT=n==="k"?.35:.6,O.reloadT=0,O.scope=0,O.plantT=0,O.nadeHold=0,O.defusing&&Mh(),wa(null,1400,.25),Ze.showSlots()))}function Vm(n){let e=["p","s","k","z","g","c4"].filter(i=>Us(i));if(!e.length)return;let t=e.indexOf(O.slot);kn(e[(t+n+e.length)%e.length])}function jf(){return Us("p")?"p":Us("s")?"s":"k"}function Qf(){let n=kt();if(!(!n||n.inv.v===O.invV)){O.invV=n.inv.v;for(let e of["p","s"]){let t=n.inv[e];if(t!==O.ammoW[e]){let i=O.ammoW[e];O.ammoW[e]=t;let s=et[t];O.ammo[e]=t?n.inv[e+"a"]?[...n.inv[e+"a"]]:[s.mag,s.reserve]:[0,0],t&&e==="p"&&n.alive&&X.phase!=="post"&&i!==t&&kn("p",!0)}}Us(O.slot)||kn(jf(),!0)}}function Gm(){let n=O.slot;if(n!=="p"&&n!=="s")return;let e=et[jn()],t=O.ammo[n];!e.mag||t[0]>=e.mag||t[1]<=0||O.reloadT>0||O.drawT>0||(O.reloadT=e.reload,O.scope=0,fm(null))}function YM(){let n=O.slot,e=et[jn()],t=O.ammo[n];if(!t||!e.mag)return;let i=e.mag-t[0],s=rs("ls.ammo")?i:Math.min(i,t[1]);t[0]+=s,rs("ls.ammo")||(t[1]-=s)}var $M=()=>{let n=et[jn()];return n&&n.scope?n.scope[Math.max(0,O.scope-1)]:1};function ed(){let n=kt();if(!n||!n.alive)return;let e=jn(),t=et[e];if(t&&t.scope&&O.reloadT<=0&&O.drawT<=0){O.scope=(O.scope+1)%(t.scope.length+1),wa(null,3e3,.2);return}e==="knife"&&O.fireT<=0&&O.drawT<=0&&Ym(!0),t&&t.cat==="grenade"&&!In&&O.throwT<=0&&(O.nadeHold=.3)}function ZM(){let n=kt(),e=O.slot;if(!n.alive)return;let t=O.pl;e==="p"||e==="s"?Yt("drop",{s:e,x:t.x,y:t.y,z:t.z,yaw:t.yaw,ammo:O.ammo[e]}):e==="c4"&&Yt("drop",{s:"c4",x:t.x,y:t.y,z:t.z,yaw:t.yaw})}function Wm(){let n=kt();if(!n||!n.alive||!O.pl)return;let e=O.pl,t=X.bomb;if(n.team==="CT"&&t.state==="planted"&&Math.hypot(e.x-t.x,e.z-t.z)<1.7&&Math.abs(e.y-t.y)<1.6&&e.onGround){O.defusing||(O.defusing=!0,O.defT=0,Yt("defst",{}),Af(null));return}let i=Xm();i&&Yt("take",{id:i.id,swap:!0,ammo:O.ammo[ir(i.w)===1?"p":"s"]})}function Mh(){O.defusing=!1,O.defT=0,Yt("defx",{})}function Xm(){let n=O.pl,e=null,t=1e9,i=-Math.sin(n.yaw),s=-Math.cos(n.yaw);for(let r of X.drops.values()){let o=r.x-n.x,a=r.z-n.z,l=Math.hypot(o,a);if(l>2.2||Math.abs(r.y-n.y)>1.5)continue;let c=(o*i+a*s)/Math.max(.01,l);l>.8&&c<.75||l<t&&(t=l,e=r)}return e}var Df=[];function td(){Df.length=0;for(let n of X.players.values()){if(!n.alive)continue;let e=nt.hStand+(nt.hCrouch-nt.hStand)*(n.duck||0);Df.push({id:n.id,x:n.x,y:n.y,z:n.z,h:e,alive:!0})}return Df}var Aa=new W;function KM(n){if(n.id===ct&&!O.spec)return wn&&wn.userData.gun.getWorldPosition(Aa),null;let e=-Math.sin(n.yaw)*Math.cos(n.pitch),t=Math.sin(n.pitch),i=-Math.cos(n.yaw)*Math.cos(n.pitch);return[n.x+e*.75+Math.cos(n.yaw)*.12,n.y+Pn(n)-.18+t*.6,n.z+i*.75-Math.sin(n.yaw)*.12]}var JM=0;X.fireBullets=(n,e,t,i,s)=>{let r=s||et[e],o=X.players.get(n),a=td(),l=[],c=[],h=new Map,f=!1;for(let d=0;d<r.pellets;d++){let p=i(Math.random),_=Zc(X.W,X.nades,n,t[0],t[1],t[2],p[0],p[1],p[2],r,a);l.push(_.end.map(x=>+x.toFixed(2)));for(let x of _.impacts)c.push(x.map(g=>+g.toFixed(2)));if(_.hit){let x=h.get(_.hit.id)||{d:0,part:"leg",pos:_.hit.pos,wb:_.wb};x.d+=_.hit.dmg,Lm(_.hit.part)>Lm(x.part)&&(x.part=_.hit.part),h.set(_.hit.id,x),_.wb&&(f=!0)}}let u=[...h.entries()].map(([d,p])=>[d,p.pos.map(_=>+_.toFixed(2)),p.part==="head"?1:0]);qm(n,e,t,l,c,u,r),Bn("sh",{i:n,w:e,o:t.map(d=>+d.toFixed(2)),e:l,m:c.slice(0,8),h:u});for(let[d,p]of h){let _={t:d,w:e,part:p.part,d:+p.d.toFixed(1),wb:p.wb};n===ct?Yt("hit",_):Tt()&&Nt&&Nt.handle("hit",_,n)}Tt()&&nn&&o&&nn.heard(t[0],t[1],t[2],o.team,!r.silent)};var Lm=n=>n==="head"?3:n==="chest"?2:n==="stomach"?1:0;function qm(n,e,t,i,s,r,o){o=o||et[e];let a=X.players.get(n),l=n===ct&&!O.spec,c=O.spec===n,h=l||c?null:KM(a||{yaw:0,pitch:0,x:t[0],y:t[1]-1.6,z:t[2]}),f=l||c?[Aa.x,Aa.y,Aa.z]:h;if(o.cat!=="knife"){for(let u of i)(o.pellets>1?Math.random()<.35:JM++%(o.cat==="pistol"?1:2)===0)&&zt.tracer(f,u);if(!o.silent&&o.cat!=="equip"&&zt.flashLight(f,o.cat==="sniper"?1.5:1),a&&a.model&&(a.flashT=.05),(l||c)&&(O.flashT=.05),f&&o.cat!=="equip"){zt.muzzleSmoke(f);let u=a?a.id===ct&&O.pl?O.pl.yaw:a.yaw||0:0;e==="nova"||e==="sawedoff"||e==="mag7"||e==="awp"||e==="ssg08"||e==="r8"||zt.shell([f[0]+Math.sin(u)*.25,f[1]-.05,f[2]+Math.cos(u)*.25],Math.cos(u),-Math.sin(u),o.pellets>1)}}for(let u of s)zt.impact([u[0],u[1],u[2]],[u[3],u[4],u[5]],pa(X.cfg.map).floor?"#b8a07a":"#999");for(let u of r){let d=[u[1][0]-t[0],u[1][1]-t[1],u[1][2]-t[2]],p=Math.hypot(...d)||1,_=d.map(g=>g/p);zt.blood(u[1],_,u[2]);let x=zi(X.W,u[1][0],u[1][1],u[1][2],_[0],_[1]-.3,_[2],2.5);x&&zt.decalC([u[1][0]+_[0]*x.t,u[1][1]+(_[1]-.3)*x.t,u[1][2]+_[2]*x.t],[x.nx,x.ny,x.nz],"#6e0b0e",.35+(u[2]?.2:0))}o.cat!=="knife"&&vf(o.cat,l?null:t,!!o.silent,e==="deagle"||e==="r8")}function jM(){let n=kt(),e=O.pl,t=jn(),i=et[t];if(!i||O.drawT>0||O.reloadT>0||O.fireT>0||X.phase==="freeze"||X.phase==="over")return;if(i.cat==="knife"){(!O.trig||i.auto)&&Ym(!1);return}if(!i.auto&&O.trig)return;let s=O.slot==="z"?null:O.slot;if(s&&O.ammo[s][0]<=0){O.trig||(wa(null,2600,.35),O.trig=!0),Gm();return}O.trig=!0,rs("ls.aim")&&QM();let r={speed:Math.hypot(e.vx,e.vz),onGround:e.onGround,duck:e.duck,scoped:O.scope>0,shots:O.shots},o=rs("ls.norecoil")?i.spread*.2:ma(i,r),a=[e.x,e.y+Pn(e),e.z],l=rs("ls.norecoil")?0:O.pp,c=rs("ls.norecoil")?0:O.py;X.fireBullets(ct,t,a,u=>Qr(e.yaw,e.pitch,l,c,o,u));let[h,f]=$c(i,O.shots,Math.random);O.pp=Math.min(i.kickCap||12,O.pp+h),O.py+=f,O.shots++,O.kick=Math.min(1,O.kick+(i.cat==="sniper"?1:i.cat==="pistol"?.6:.4)),O.fireT=60/i.rpm,s&&!rs("ls.ammo")&&O.ammo[s][0]--,t==="zeus"&&Yt("drop",{s:"zeus"}),(t==="awp"||t==="ssg08")&&O.scope&&(O.rescope=O.scope,O.scope=0)}function Ym(n){let e=O.pl,t=et.knife,i=[e.x,e.y+Pn(e),e.z],s={...t,dmg:n?65:40,range:72,rangeMod:1,pellets:1},r=Qr(e.yaw,e.pitch,0,0,0,Math.random),o=Zc(X.W,X.nades,ct,i[0],i[1],i[2],r[0],r[1],r[2],s,td());if(o.hit){let a=X.players.get(o.hit.id);a&&Math.cos(nd(a.yaw,e.yaw))>.5&&(o.hit.dmg=n?180:90)}if(o.hit)Yt("hit",{t:o.hit.id,w:"knife",part:"chest",d:o.hit.dmg}),zt.blood(o.hit.pos,r,!1),uh(!1);else if(o.impacts.length){let a=o.impacts[0];zt.impact([a[0],a[1],a[2]],[a[3],a[4],a[5]]),wa(a,1800,.5)}else wf();O.fireT=n?1:.45,O.kick=1,O.knife2=n,Bn("sh",{i:ct,w:"knife",o:i,e:[o.end],m:[],h:o.hit?[[o.hit.id,o.hit.pos,0]]:[]})}var nd=(n,e)=>{let t=n-e;for(;t>Math.PI;)t-=Math.PI*2;for(;t<-Math.PI;)t+=Math.PI*2;return t};function QM(){let n=kt(),e=O.pl,t=[e.x,e.y+Pn(e),e.z],i=null,s=.35;for(let r of X.players.values()){if(!r.alive||r.team===n.team)continue;let o=r.y+(nt.hStand+(nt.hCrouch-nt.hStand)*(r.duck||0))-.12,a=r.x-t[0],l=o-t[1],c=r.z-t[2],h=Math.atan2(-a,-c),f=Math.atan2(l,Math.hypot(a,c)),u=Math.hypot(nd(h,e.yaw),f-e.pitch);u<s&&ga(X.W,X.nades,t,[r.x,r.y,r.z,1])&&(s=u,i=[h,f])}i&&(e.yaw=i[0],e.pitch=i[1])}function eb(n){let e=kt(),t=O.pl,i=jn();if(!et[i]||et[i].cat!=="grenade"||O.nadeCd>0)return;let s=[t.x,t.y+Pn(t),t.z],r={i:ct,ty:i,tm:e.team,o:s.map(a=>+a.toFixed(3)),yaw:+t.yaw.toFixed(4),pitch:+t.pitch.toFixed(4),v:[+t.vx.toFixed(3),+t.vz.toFixed(3)],pw:n};$m(r),Bn("nd",r),Yt("nade",{type:i}),O.nadeCd=.6,wf();let o=e.inv.g.indexOf(i);o>=0&&(e.inv.g=e.inv.g.slice(),e.inv.g.splice(o,1)),setTimeout(()=>{O.throwT=0,Us("g")?kn("g",!0):kn(jf(),!0)},380)}var Pa=new Map;function $m(n){let e=H0(n.ty,n.i,n.tm,n.o[0],n.o[1],n.o[2],n.yaw,n.pitch,n.v[0],n.v[1],n.pw);e.key=Math.random(),X.nades.push(e);let t=to(n.ty);t.scale.setScalar(1.6),ln.add(t),Pa.set(e,t)}var Uf=[];function tb(n){Uf.length=0;for(let e of X.nades)V0(X.W,e,n,Uf);for(let e of Uf)nb(e);for(let e=X.nades.length-1;e>=0;e--){let t=X.nades[e],i=Pa.get(t);if(t.state==="fly"&&!t.rest&&Math.random()<.5&&zt.particle(t.x,t.y,t.z,0,.1,0,.03,.4,"#cfcac0",-.1,.1),i&&(t.state==="fly"||t.type==="smoke"||t.type==="decoy"?(i.position.set(t.x,t.y,t.z),i.rotation.x+=n*(t.rest?0:9),i.visible=t.state!=="done"):i.visible=!1),t.type==="decoy"&&t.state==="active"&&(t.dc=(t.dc||0)-n,t.dc<=0)){t.dc=.25+Math.random()*1.2;let s=1+Math.floor(Math.random()*3);for(let r=0;r<s;r++)setTimeout(()=>vf("rifle",[t.x,t.y,t.z]),r*110);Tt()&&nn&&nn.heard(t.x,t.y,t.z,t.team,!0)}(t.type==="molotov"||t.type==="incendiary")&&t.state==="active"&&!t.air&&(t.ft=(t.ft||0)-n,t.ft<=0&&(t.ft=.6,ym([t.x,t.y,t.z]))),t.state==="done"&&(X.nades.splice(e,1),i&&(ln.remove(i),Pa.delete(t)))}}function nb(n){let e=n.g,t=[e.x,e.y,e.z];if(n.type==="bounce"){_m(t);return}if(n.type==="det")if(e.type==="he"){zt.explosion(t,!1),bf(t,!1);let i=As(X.W,e.x,e.z,e.y+.5);i>-1e8&&e.y-i<1.5&&zt.decalC([e.x,i,e.z],[0,1,0],"#1d1a17",2.6),Km(t,12,.5),Tt()&&Nt&&Nt.heBlast(e,(s,r)=>{let o=Math.hypot(r.x-s.x,r.y+1-s.y,r.z-s.z),a=zi(X.W,s.x,s.y+.15,s.z,(r.x-s.x)/o,(r.y+1-s.y-.15)/o,(r.z-s.z)/o,o);return!a||a.t>=o-.2})}else if(e.type==="flash"){if(zt.flashPop(t),mm(t),ib(e),Tt()&&nn){for(let i of X.players.values())if(i.bot&&i.alive){let s=Zm(e,i.x,i.y+Pn(i),i.z,i.yaw,i.pitch);s>0&&nn.flash(i,s)}}}else if(e.type==="smoke"){zt.smoke(e,X.W),Sf(t);for(let i of X.nades)(i.type==="molotov"||i.type==="incendiary")&&i.state==="active"&&Math.hypot(i.x-e.x,i.z-e.z)<Lt.smokeR+1&&(i.life=Math.min(i.life,.3))}else if(e.type==="molotov"||e.type==="incendiary"){if(e.air){zt.explosion(t,!1);return}if(X.nades.some(s=>s.type==="smoke"&&s.state==="active"&&Math.hypot(s.x-e.x,s.z-e.z)<Lt.smokeR)){e.life=.05,Sf(t);return}zt.fire(e,X.W,As),xm(t)}else e.type==="decoy"&&(e.dc=.5)}function Zm(n,e,t,i,s,r){let o=n.x-e,a=n.y-t,l=n.z-i,c=Math.hypot(o,a,l);if(c>40)return 0;let h=zi(X.W,e,t,i,o/c,a/c,l/c,c);if(h&&h.t<c-.25)return 0;let f=-Math.sin(s)*Math.cos(r),u=Math.sin(r),d=-Math.cos(s)*Math.cos(r),p=(o*f+a*u+l*d)/c,_=p>.6?1:p>0?.35+p:.18,x=c<10?1:Math.max(0,1-(c-10)/30);return 4.9*_*x}function ib(n){let e=kt();if(!e||!e.alive||!O.pl)return;let t=O.pl,i=Zm(n,t.x,t.y+Pn(t),t.z,t.yaw,t.pitch);i>.15&&(O.blind=Math.max(O.blind,i),O.blindMax=Math.max(O.blind,1),gm(i))}function Km(n,e,t){if(!O.pl)return;let i=Math.hypot(n[0]-O.pl.x,n[2]-O.pl.z);i<e&&(O.shake=Math.max(O.shake,t*(1-i/e)))}function id(n,e,t,i){switch(n){case"st":sb(e);break;case"rs":rb(e);break;case"ev":ab(e);break;case"p":{let s=X.players.get(t);s&&t!==ct&&Nm(s,e);break}case"pb":if(!Tt())for(let s of e){let r=X.players.get(s[0]);r&&Nm(r,s.slice(1))}break;case"sh":if(e.i!==ct){let s=X.players.get(e.i);qm(e.i,e.w,e.o,e.e,e.m||[],e.h||[]),e.w==="knife"&&e.h&&e.h.length&&uh(!1),Tt()&&nn&&s&&nn.heard(e.o[0],e.o[1],e.o[2],s.team,!(et[e.w]||{}).silent)}break;case"nd":e.i!==ct&&$m(e);break}}function Nm(n,e){n.nx=e[0],n.ny=e[1],n.nz=e[2],n.nyaw=e[3],n.npitch=e[4],n.duck=e[5],n.wpn=e[6],n.flags=e[7]|0,n.vx=e[8]||0,n.vz=e[9]||0,n.netT=X.time,n.scoped=!!(n.flags&1),n.onGround=!(n.flags&2),(n.x===void 0||Math.hypot(n.x-n.nx,n.z-n.nz)>4)&&(n.x=n.nx,n.y=n.ny,n.z=n.nz,n.yaw=n.nyaw,n.pitch=n.npitch)}function sb(n){let e=X.phase;X.phase=n.ph,X.timeLeft=n.tl,X.round=n.r,X.score=n.sc,X.half=n.hf;let t=n.b;if(Object.assign(X.bomb,{state:t.s,carrier:t.c,x:t.x,y:t.y,z:t.z,t:t.t,site:t.site}),!Tt()){let r=new Set;for(let o of n.dr)r.add(o[0]),X.drops.set(o[0],{id:o[0],w:o[1],x:o[2],y:o[3],z:o[4],ammo:o[5]});for(let o of[...X.drops.keys()])r.has(o)||X.drops.delete(o)}let i=new Set;for(let r of n.p){let[o,a,l,c,h,f,u,d,p,_,x,g,v,w,S,C,A,m,b]=r;i.add(o);let P=X.players.get(o);P||(P={id:o,x:0,y:0,z:0,yaw:0,pitch:0,duck:0,h:nt.hStand},X.players.set(o,P)),Tt()||Object.assign(P,{name:a,bot:!!l,grp:c,team:h,hp:f,ar:u,helm:!!d,money:p,alive:!!_,k:x,d:g,a:v,mvp:w,inv:S,god:!!C,skT:A,skCT:m,fin:b})}if(!Tt())for(let r of[...X.players.keys()])i.has(r)||X.players.delete(r);let s=kt();s&&(O.lastMoney!==null&&s.money>O.lastMoney&&Ze.moneyDelta(s.money-O.lastMoney),O.lastMoney=s.money,Qf()),Vn&&dh(s,Ds)}function rb(n){zt.clearSmokes(),zt.clearDecals();for(let t of Pa.values())ln.remove(t);Pa.clear(),X.nades.length=0,yh.clear(),Ze.banner(null);for(let t of X.players.values())t.deadT=0,t.alive=!0;let e=n.pos[ct];if(e&&(O.pl=Wc(e[0],e[1],e[2],e[3])),Tt()&&nn){for(let t of X.players.values())t.bot&&n.pos[t.id]&&nn.place(t,n.pos[t.id]);nn.roundStart()}for(let[t,i]of Object.entries(n.pos)){let s=X.players.get(t);s&&(s.x=s.nx=i[0],s.y=s.ny=i[1],s.z=s.nz=i[2],s.yaw=s.nyaw=i[3],s.pitch=0)}Object.assign(O,{deadT:0,spec:null,blind:0,plantT:0,defusing:!1,defT:0,scope:0,reloadT:0,drawT:.4,shots:0,pp:0,py:0,voidSent:!1,nadeHold:0}),O.invV=-1,O.ammoW={p:null,s:null},Qf(),O.throwT=0,kn(jf(),!0),(n.round===1||X.round===1)&&Ze.center("Ronda 1 \u2014 \xA1suerte!"),Rf()}function ob(n){let e=X.players.get(n);return e?e.name:"\u2014"}function ab(n){let e=kt();switch(n.t){case"go":Ze.center(e&&e.team==="T"?"\xA1Vamos! Plant\xE1 la bomba":"\xA1Vamos! Defend\xE9 los sitios",1800),Rf();break;case"hurt":{if(n.v===ct){dm(),Ra=Math.min(1,Ra+n.n/60);let t=X.players.get(n.a);if(t&&t.id!==ct&&O.pl){let i=Math.atan2(-(t.x-O.pl.x),-(t.z-O.pl.z))-O.pl.yaw;Ze.dmgDir(-i)}O.pl&&n.w!=="world"&&n.w!=="molotov"&&n.w!=="incendiary"&&(O.pl.vx*=.45,O.pl.vz*=.45,O.punchHit=1.2)}n.a===ct&&n.v!==ct&&(Ze.hit(n.hs),uh(n.hs,n.helm));break}case"kill":{let t=n.k?X.players.get(n.k):null,i=X.players.get(n.v);i&&(i.alive=!1,i.deadT=.001),i&&Ze.feed(t,i,n.w,n.hs,n.wb,n.k===ct||n.v===ct),n.k===ct&&n.v!==ct&&pm(),n.v===ct&&(O.deadT=.001,O.scope=0,O.defusing=!1,Ze.progress(null));break}case"end":{let t=e?e.team:"T",i=n.win===t,s={elim:"eliminaron al otro equipo",bomb:"la bomba explot\xF3",defuse:"desactivaron la bomba",time:"se termin\xF3 el tiempo"};Ze.banner(n.win,n.win==="T"?"GANAN LOS TERRORISTAS":"GANAN LOS CONTRATERRORISTAS","Porque "+s[n.reason]+(n.mvp?" \xB7 MVP: "+ob(n.mvp):"")),Sm(i);break}case"over":{let t=n.wg,i=kt(),s=i?i.grp:0,r=t<0?"EMPATE":t===s?"\xA1VICTORIA!":"DERROTA";Ze.banner(t<0?"":sr(t,X.half),r,`${n.score[s]} \u2013 ${n.score[1-s]} \xB7 Volviendo a la sala en ${Gt.over} s`);let o=Gt.over;clearInterval(mh),mh=setInterval(()=>{if(o--,o<=0){clearInterval(mh);return}Ze.banner(t<0?"":sr(t,X.half),r,`${n.score[s]} \u2013 ${n.score[1-s]} \xB7 Volviendo a la sala en ${o} s`)},1e3);break}case"half":Ze.center("Cambio de lado \u2014 empieza la segunda mitad",4e3);break;case"plant":Ze.center("La bomba fue plantada en el sitio "+n.site,3e3),Tf([X.bomb.x,X.bomb.y,X.bomb.z],!0),X.bomb.seen=!0;break;case"defst":Af([X.bomb.x,X.bomb.y,X.bomb.z]);break;case"defused":Ze.center("Desactivaron la bomba",3e3);break;case"boom":zt.explosion([n.x,n.y,n.z],!0),bf([n.x,n.y,n.z],!0),Km([n.x,n.y,n.z],60,1.2);break;case"bombdrop":e&&e.team==="T"&&Ze.center("Se cay\xF3 la bomba",1600);break;case"bombpick":n.p===ct&&(Ze.center("Agarraste la bomba (5)",1600),bm());break;case"deny":Ze.center(n.why,1500),Mm();break;case"bought":vm();break}}var mh=0,Ra=0,Vn=!1,Ds=-1,ui=null,Ff={};function Jm(n){if(Ff[n]){let e=document.createElement("canvas");return e.width=192,e.height=48,e.getContext("2d").drawImage(Ff[n],0,0),e}try{ui||(ui={r:new er({antialias:!0,alpha:!0,preserveDrawingBuffer:!0}),s:new qn,c:new Qi(-.62,.62,.155,-.155,.01,10)},ui.r.setSize(192,48),ui.s.add(new Li("#fff","#666",2.2)),ui.c.position.set(3,0,0),ui.c.lookAt(0,0,0));let e=or(n);e.computeBoundingBox();let t=e.boundingBox,i=new He(e,Hi),s=Math.max(.12,t.max.z-t.min.z,(t.max.y-t.min.y)*4);i.scale.setScalar(1.1/s),i.position.set(0,-(t.max.y+t.min.y)/2/s*1.1,-(t.max.z+t.min.z)/2/s*1.1),ui.s.add(i),ui.r.render(ui.s,ui.c),ui.s.remove(i);let r=document.createElement("canvas");return r.width=192,r.height=48,r.getContext("2d").drawImage(ui.r.domElement,0,0),Ff[n]=r,Jm(n)}catch{return null}}var Dm=null;function bh(n){let e=kt();if(!e)return;if(n!==void 0?n:!Vn){if(!e.alive)return;if(!Xf()){Ze.center(X.phase==="live"?"Se termin\xF3 el tiempo de compra":"No pod\xE9s comprar ahora",1400);return}Dm!==e.team&&(Dm=e.team,Cm(e.team,Jm,i=>Yt("buy",{i}),i=>Lf(i))),Ds=-1,dh(e,Ds),Vn=!0,pn("buy").hidden=!1,document.exitPointerLock&&document.exitPointerLock()}else Vn=!1,pn("buy").hidden=!0,Lf(null),os||Ca();oo()}function Xf(){let n=kt();if(!n||!n.alive||!O.pl||!(X.phase==="freeze"||X.phase==="live"&&Gt.live-X.timeLeft<Gt.buy&&X.bomb.state!=="planted"))return!1;let t=X.spawns?X.spawns[n.team]:null;return!t||Math.hypot(O.pl.x-t.cx,O.pl.z-t.cz)<22||!!(oi(X.W,O.pl.x,O.pl.z)&(n.team==="T"?16:32))}function lb(n){if(n.code==="KeyB"||n.code==="Escape"){bh(!1);return}let e=parseInt(n.key,10);if(!(e>=1&&e<=9))return;let t=kt();if(Ds<0)e<=5&&(Ds=e-1);else{let i=qc[Ds].items[t.team];i[e-1]&&Yt("buy",{i:i[e-1]}),Ds=-1}dh(t,Ds)}pn("buy").addEventListener("mousedown",n=>n.stopPropagation());function cb(){Xt=new er({antialias:!1,powerPreference:"high-performance"}),Xt.setPixelRatio(Math.min(devicePixelRatio,os?1:1.5)),Xt.setSize(innerWidth,innerHeight),Xt.autoClear=!1,Xt.toneMapping=Qo,Xt.toneMappingExposure=.95,Xt.shadowMap.enabled=Bm>0,Xt.shadowMap.type=Gl,Xt.shadowMap.autoUpdate=!1,pn("view").appendChild(Xt.domElement),ln=new qn;{let i=new $r(Xt).fromScene(new Fc,.04).texture;ln.environment=i,ln.environmentIntensity=.18}an=new hn(74,innerWidth/innerHeight,.05,1500),lr=new qn,ro=new hn(66,innerWidth/innerHeight,.01,10),lr.add(new Li("#ffffff","#555",1.3));let n=new Ni("#fff",1.1);n.position.set(1,2,1),lr.add(n),lr.environment=ln.environment,lr.environmentIntensity=.7,wn=rm(),lr.add(wn);let e=hb();wn.userData.flash=e,addEventListener("resize",()=>{Xt.setSize(innerWidth,innerHeight),an.aspect=ro.aspect=innerWidth/innerHeight,an.updateProjectionMatrix(),ro.updateProjectionMatrix()}),Xt.domElement.addEventListener("click",()=>{X.phase!=="lobby"&&!hr&&!os&&!Vn&&Ca()}),pn("clickPlay").addEventListener("click",t=>{t.target.id!=="cpSettings"&&(Sa(),hh(Hn.vol*.7),Ca())}),pn("cpSettings").addEventListener("click",t=>{t.stopPropagation(),Ia.open(()=>oo()),oo()})}function hb(){let n=new He(new Ys(1,0),new en({color:"#ffd27a",transparent:!0,opacity:.95,depthWrite:!1}));return n.scale.set(.04,.04,.12),n.visible=!1,n.renderOrder=11,wn.add(n),n}async function ub(n){pn("loading").hidden=!1,pn("loadMsg").textContent="Cargando "+(Gf.find(r=>r.id===n)?.name||n)+"\u2026",await new Promise(r=>setTimeout(r,30));let e=xh[n]||(xh[n]=await $u(n)),t,i=null;if(X.cfg.size===2){if(!e.wing){let r=e.layers.map(l=>({...l,cls:l.cls.slice(),top:l.top?l.top.slice():l.top,bot:l.bot?l.bot.slice():l.bot,h:l.h?l.h.slice():l.h}));e.layers.flags&&(r.flags=e.layers.flags.slice());let o=Oc(e.info,r);e.mesh&&nf(o,jr(o));let a=z0(o,jr(o));e.wing={W:o,nav:jr(o),r:a}}t=e.wing.W,X.nav=e.wing.nav,i=e.wing.r}else e.W||(e.W=Oc(e.info,e.layers),e.mesh&&nf(e.W,jr(e.W))),t=e.W,X.nav=e.nav||(e.nav=jr(t));for(X.W=t,X.info=e.info,X.wingSite=i?i.site:null,X.mapName=Gf.find(r=>r.id===n)?.name||n;ln.children.length;)ln.remove(ln.children[0]);Ta&&Ta.traverse(r=>{r.geometry&&r.geometry.dispose(),r.material&&r.material.dispose()}),Ta=(e.mesh?L0(t,e.mesh,e.info,n,X.nav):C0(t,n)).mesh,ln.add(Ta),i&&i.cells.length&&Ta.add(k0(t,i.cells)),P0(ln,t,n,Bm),Xt.shadowMap.needsUpdate=!0,zt=Z0(ln),zt.floorAt=(r,o,a)=>As(X.W,r,o,a+.2),Wf=If(t);for(let r of X.players.values())r.model&&(r.model=null,r.tag=null);for(let r of so.values())ln.remove(r);so.clear(),ss=null,Zf=!0,pn("loading").hidden=!0}function fb(n,e){let t=document.createElement("canvas");t.width=256,t.height=48;let i=t.getContext("2d");i.font="bold 30px Rajdhani, sans-serif",i.textAlign="center",i.fillStyle="rgba(0,0,0,.5)";let s=Math.min(250,i.measureText(n).width+20);i.fillRect(128-s/2,4,s,40),i.fillStyle=e==="T"?"#f0c060":"#8ab8ff",i.fillText(n,128,35);let r=new No(new Or({map:new Ji(t),depthTest:!1,transparent:!0,sizeAttenuation:!1}));return r.scale.set(.1,.019,1),r.renderOrder=20,r}var db=new en({color:"#ff3030",wireframe:!0,depthTest:!1,transparent:!0,opacity:.8}),jm=new Vt(.7,1.8,.7);jm.translate(0,.9,0);function pb(n){let e=kt();for(let t of X.players.values()){let i=t.id===ct,s=t.team+gh(t);if(!t.model||t.modelTeam!==s){t.model&&ln.remove(t.model),t.model=ah(t.team,gh(t)),t.modelTeam=s,ln.add(t.model),t.tag=null;let l=new He(jm,db);l.renderOrder=19,l.visible=!1,t.model.add(l),t.esp=l;let c=zt.muzzleMesh();t.model.userData.gun.add(c),t.mflash=c}let r=t.model;if(!i&&!(Tt()&&t.bot)&&t.nx!==void 0){let l=Math.min(1,n*14);t.x+=(t.nx-t.x)*l+(t.vx||0)*n*.5,t.y+=(t.ny-t.y)*l,t.z+=(t.nz-t.z)*l+(t.vz||0)*n*.5,isFinite(t.x)||(t.x=t.nx,t.y=t.ny,t.z=t.nz),t.yaw+=nd(t.nyaw||0,t.yaw||0)*l,t.pitch=(t.pitch||0)+((t.npitch||0)-(t.pitch||0))*l}let o=i&&!O.spec&&(e&&e.alive||O.deadT<.01)||O.spec===t.id;if(r.visible=!o&&(t.alive||(t.deadT||0)>0),!r.visible)continue;r.position.set(t.x,t.y,t.z),r.rotation.y=t.yaw,t.alive||(t.deadT=Math.min(3,(t.deadT||0)+n*2.5));let a=Math.hypot(t.vx||0,t.vz||0);if(lh(r,t.alive?t.wpn||"knife":null,oh(t.fin,t.wpn||"knife")),t.mflash&&t.wpn){let l=ba(t.wpn);t.mflash.position.set(0,l.muzzle[1]*1.12,-l.muzzle[0]*1.12-.05),t.mflash.parent!==r.userData.gun&&r.userData.gun.add(t.mflash)}ch(r,{speed:t.alive?a:0,duck:t.duck||0,pitch:t.pitch||0,onGround:t.onGround!==!1,dead:t.alive?0:t.deadT},n),t.mflash&&(t.flashT=(t.flashT||0)-n,t.mflash.visible=t.flashT>0,t.mflash.visible&&(t.mflash.rotation.z=Math.random()*3)),e&&t.team===e.team&&!i&&t.alive?(t.tag||(t.tag=fb(t.name,t.team),r.add(t.tag)),t.tag.visible=!0,t.tag.position.y=2.15-(t.duck||0)*.45):t.tag&&(t.tag.visible=!1),t.esp.visible=!!(rs("ls.wall")&&e&&t.team!==e.team&&t.alive),!i&&t.alive&&a>3.6&&t.onGround!==!1&&(t.stepT=(t.stepT||0)-n,t.stepT<=0&&(t.stepT=.34,Mf([t.x,t.y,t.z]),X.cfg.map==="dust2"&&zt.dust([t.x,t.y,t.z])))}}var so=new Map,ss=null,Ea=null,ph=0;function mb(n){for(let[t,i]of X.drops){let s=so.get(t);s||(s=to(i.w),s.scale.setScalar(1.2),s.rotation.set(0,Math.random()*6,Math.PI/2*.98),ln.add(s),so.set(t,s)),s.position.set(i.x,i.y+.04,i.z)}for(let[t,i]of so)X.drops.has(t)||(ln.remove(i),so.delete(t));let e=X.bomb;if(ss||(ss=to("c4"),ss.scale.setScalar(1.6),ln.add(ss),Ea=new He(new Ii(.03,6,4),new en({color:"#ff2020"})),Ea.position.set(-.05,.05,.03),ss.add(Ea)),ss.visible=e.state==="planted"||e.state==="dropped"||e.state==="defused",ss.visible&&ss.position.set(e.x,e.y+.05,e.z),e.state==="planted"){let t=Math.max(0,e.t),i=Math.max(.12,Math.min(1,t/35));ph-=n,Ea.visible=ph>i*.6,ph<=0&&(ph=i,Tf([e.x,e.y,e.z],t<10))}else Ea.visible=!1}var Of=0,zf=0;function gb(n){let e=kt();if(!e||!O.pl)return;let t=O.pl;if(Qf(),!e.alive){O.deadT+=n;return}O.drawT-=n,O.fireT-=n,O.nadeCd-=n,O.pickCd-=n,O.inspect&&(O.inspect=Math.max(0,O.inspect-n)),O.reloadT>0&&(O.reloadT-=n,O.reloadT<=0&&YM()),O.rescope&&O.fireT<=0&&((jn()==="awp"||jn()==="ssg08")&&(O.scope=O.rescope),O.rescope=0);let i=jn(),s=et[i]||et.knife,r=X.phase==="freeze"||O.plantT>0||O.defusing||Vn&&!1,o=0,a=0;Vn||(jt.has("KeyW")&&(o+=1),jt.has("KeyS")&&(o-=1),jt.has("KeyD")&&(a+=1),jt.has("KeyA")&&(a-=1)),(_n.mx||_n.mz)&&(o=-_n.mz,a=_n.mx);let l={f:r?0:o,s:r?0:a,jump:!r&&jt.has("Space"),crouch:jt.has("KeyC")||jt.has("ControlLeft")||jt.has("ControlRight"),walk:jt.has("ShiftLeft")||jt.has("ShiftRight")},c=(s.speed||250)*Pm*(O.scope&&s.cat==="sniper"?.5:O.scope?.7:1);(i==="c4"||et[i]?.cat==="grenade")&&(c=245*Pm),rs("ls.speed")&&(c*=1.6);let h=n,f=0,u=t.onGround;for(;h>1e-6;){let g=Math.min(h,.008333333333333333),v=Xc(X.W,t,l,g,c);v&&(f=v),h-=g}for(let g of X.players.values()){if(g.id===ct||!g.alive||Math.abs(g.y-t.y)>1.6)continue;let v=t.x-g.x,w=t.z-g.z,S=Math.hypot(v,w);if(S<.62&&S>1e-4){let C=(.62-S)/S,A=t.x+v*C,m=t.z+w*C;bi(X.W,A,m,t.y,t.h,nt.r)||(t.x=A,t.z=m)}}if(f){let g=ef(f);g>0&&Yt("fall",{d:g}),um(null)}t.y<-20&&!O.voidSent&&(O.voidSent=!0,Yt("fall",{d:999}));let d=Math.hypot(t.vx,t.vz);if(t.onGround&&d>3.6&&(O.stepT-=n,O.stepT<=0&&(O.stepT=.36,Mf(null,.45))),O.bob+=n*d*1.4*(t.onGround?1:0),e.x=t.x,e.y=t.y,e.z=t.z,e.yaw=t.yaw,e.pitch=t.pitch,e.duck=t.duck,e.vx=t.vx,e.vz=t.vz,e.onGround=t.onGround,e.wpn=i,e.h=t.h,e.scoped=O.scope>0,O.fireT<-.06&&(O.pp=Math.max(0,O.pp-(s.recover||9)*n*(1+O.pp*.15)),O.py*=Math.exp(-n*7),O.pp<.4&&(O.shots=0)),In||(O.trig=!1),(et[i]||{}).cat==="grenade"){if(In&&!O.nadeHold&&O.throwT<=0&&(O.nadeHold=cr?.6:1),In&&cr&&O.nadeHold&&(O.nadeHold=.6),O.nadeHold&&!In&&!cr&&O.drawT<=0&&O.throwT<=0&&(X.phase==="freeze"?(Ze.center("Esper\xE1 a que empiece la ronda",1e3),O.nadeHold=0):(O.throwT=.45,O.throwPow=O.nadeHold,O.nadeHold=0)),O.throwT>0){let g=O.throwT;O.throwT-=n,g>.3&&O.throwT<=.3&&eb(O.throwPow||1)}}else if(i==="c4"){let g=oi(X.W,t.x,t.z)&12;if(In&&g&&t.onGround&&X.phase==="live"&&O.drawT<=0){O.plantT||Ef();let v=O.plantT;O.plantT+=n,Math.floor(v*4)!==Math.floor(O.plantT*4)&&Ef(),Ze.progress("Plantando la bomba\u2026",O.plantT/Gt.plant),O.plantT>=Gt.plant&&(O.plantT=0,Ze.progress(null),Yt("plant",{x:t.x,y:t.y,z:t.z}))}else O.plantT&&Ze.progress(null),O.plantT=0,In&&!g&&!O.trig&&(Ze.center("Ten\xE9s que estar en un sitio de bomba (A o B)",1300),O.trig=!0)}else In&&!Vn&&jM();if(O.defusing){let g=X.bomb;if(g.state!=="planted"||!jt.has("KeyE")||Math.hypot(t.x-g.x,t.z-g.z)>1.9)Mh();else{O.defT+=n;let v=e.inv.kit?Gt.kit:Gt.defuse;Ze.progress(e.inv.kit?"Desactivando (con kit)\u2026":"Desactivando\u2026",O.defT/v),O.defT>=v&&(Yt("defok",{}),O.defusing=!1,Ze.progress(null))}}else O.plantT||Ze.progress(null);if(O.pickCd<=0){for(let v of X.drops.values())if(!(Math.hypot(v.x-t.x,v.z-t.z)>.9||Math.abs(v.y-t.y)>1.2)&&(v.w==="defuser"?e.team==="CT"&&!e.inv.kit:!Us(ir(v.w)===1?"p":"s"))){Yt("take",{id:v.id}),O.pickCd=.6;break}let g=X.bomb;e.team==="T"&&g.state==="dropped"&&Math.hypot(g.x-t.x,g.z-t.z)<1&&Math.abs(g.y-t.y)<1.4&&(Yt("take",{id:"c4"}),O.pickCd=.8)}let _="",x=Xm();x&&(_="E \xB7 agarrar "+no(x.w)),e.team==="CT"&&X.bomb.state==="planted"&&Math.hypot(t.x-X.bomb.x,t.z-X.bomb.z)<1.7&&!O.defusing&&(_="Manten\xE9 E para desactivar"),i==="c4"&&oi(X.W,t.x,t.z)&12&&!O.plantT&&X.phase==="live"&&(_="Manten\xE9 clic para plantar"),Ze.hint(_),Of-=n,Of<=0&&(Of=.05,Bn("p",[+t.x.toFixed(2),+t.y.toFixed(2),+t.z.toFixed(2),+t.yaw.toFixed(3),+t.pitch.toFixed(3),+t.duck.toFixed(2),i,(O.scope?1:0)|(t.onGround?0:2),+t.vx.toFixed(2),+t.vz.toFixed(2)],{volatile:!0}))}function xb(n){if(zf-=n,zf>0)return;zf=.05;let e=[];for(let t of X.players.values())t.bot&&t.pl&&e.push([t.id,+t.x.toFixed(2),+t.y.toFixed(2),+t.z.toFixed(2),+t.yaw.toFixed(3),+t.pitch.toFixed(3),+(t.duck||0).toFixed(2),t.wpn||"knife",(t.scoped?1:0)|(t.onGround?0:2),+(t.vx||0).toFixed(2),+(t.vz||0).toFixed(2)]);e.length&&Bn("pb",e,{volatile:!0})}var Um=new ti(0,0,0,"YXZ"),Ns=[];function sd(n){let e=kt();if(!e)return;if(Ns=[...X.players.values()].filter(i=>i.alive&&i.team===e.team),Ns.length||(Ns=[...X.players.values()].filter(i=>i.alive)),!Ns.length){O.spec=null;return}let t=Ns.findIndex(i=>i.id===O.spec);O.spec=Ns[(t+n+Ns.length)%Ns.length].id}function yb(n){let e=kt();if(!e||!O.pl)return;let t,i,s,r,o,a=jn(),l=e.team,c=O.scope,h=gh(e),f=oh(e.fin,jn());if(e.alive){let v=O.pl;t=v.x,i=v.y+Pn(v),s=v.z,r=v.yaw-O.py*.5*Im,o=v.pitch+O.pp*.5*Im+(O.punchHit||0)*.02,O.spec=null}else if(O.deadT<2.2||!X.players.size){let v=O.pl,w=Math.min(1,O.deadT/1.2);r=v.yaw+O.deadT*.3,o=-.35*w+v.pitch*(1-w),t=v.x+Math.sin(r)*2.6*w,s=v.z+Math.cos(r)*2.6*w,i=v.y+Pn(v)*(1-w)+1.6*w,a=null}else{let v=O.spec&&X.players.get(O.spec);(!v||!v.alive)&&sd(1);let w=O.spec&&X.players.get(O.spec);if(w)t=w.x,i=w.y+Pn({duck:w.duck||0}),s=w.z,r=w.yaw,o=w.pitch,a=w.wpn||"knife",l=w.team,c=w.scoped?1:0,h=gh(w),f=oh(w.fin,a);else{let S=O.pl;t=S.x,i=S.y+3,s=S.z,r=S.yaw,o=-.5,a=null}}O.punchHit=Math.max(0,(O.punchHit||0)-n*6),O.shake>0&&(O.shake=Math.max(0,O.shake-n*1.5),t+=(Math.random()-.5)*O.shake*.12,i+=(Math.random()-.5)*O.shake*.12),an.position.set(t,i,s),Um.set(o,r,0),an.quaternion.setFromEuler(Um);let u=et[a],p=74/(c&&u&&u.scope?u.scope[Math.max(0,c-1)]:1);Math.abs(an.fov-p)>.01&&(an.fov=p,an.updateProjectionMatrix()),hm(t,i,s,r);let _=c&&u&&u.cat==="sniper";if(wn.visible=!!a&&!_&&(e.alive||O.spec),wn.visible){om(wn,a,l,h,f);let v=wn.userData,w=v.base||[.13,-.14,-.36];O.sway[0]+=(O.swayT[0]-O.sway[0])*Math.min(1,n*10),O.sway[1]+=(O.swayT[1]-O.sway[1])*Math.min(1,n*10),O.swayT[0]*=Math.exp(-n*10),O.swayT[1]*=Math.exp(-n*10),O.kick=Math.max(0,O.kick-n*7);let S=e.alive?O.bob:X.time*2,C=e.alive?Math.min(1,Math.hypot(O.pl.vx,O.pl.vz)/5):.3,A=w[0]+Math.cos(S)*.008*C+O.sway[0]*.02,m=w[1]+Math.abs(Math.sin(S))*.01*C-O.sway[1]*.02,b=w[2]+O.kick*.045,P=O.kick*.12,M=0,E=0;if(e.alive&&O.reloadT>0){let I=et[jn()],N=1-O.reloadT/I.reload,z=Math.sin(Math.min(1,N)*Math.PI);P-=z*.6,m-=z*.06,E+=z*.4}if(e.alive&&O.drawT>0){let I=Math.max(0,O.drawT)/.6;m-=I*.25,P-=I*.8}if(e.alive&&O.inspect){let I=Math.sin(Math.min(1,O.inspect/1.6)*Math.PI);M+=I*1.1,E+=I*.5,A-=I*.08}if(a==="knife"&&e.alive&&O.fireT>0){let I=O.fireT/(O.knife2?1:.45);M-=Math.sin(I*Math.PI)*.9,b-=Math.sin(I*Math.PI)*.08}if((O.plantT>0||O.defusing)&&(m-=.08,P-=.7),e.alive&&O.nadeHold&&(m-=.03,b+=.06,P+=.25),e.alive&&O.throwT>0){let I=1-O.throwT/.45,N=Math.sin(Math.min(1,I)*Math.PI);b-=N*.25,m+=N*.12,P-=N*1.2,I>.4&&(wn.userData.gun.visible=!1)}else wn.userData.gun.visible=!0;let R=v.rot||[0,0,0];v.hold.position.set(A,m,b),v.hold.rotation.set(P+R[0],M+R[1],E+R[2]),am(wn),wn.position.copy(an.position),wn.quaternion.copy(an.quaternion),ro.position.copy(an.position),ro.quaternion.copy(an.quaternion);let y=v.flash;O.flashT=(O.flashT||0)-n;let T=ba(a);y&&(y.visible=O.flashT>0&&u&&!u.silent&&u.cat!=="knife",y.visible&&(y.position.set(0,T.muzzle[1],-T.muzzle[0]-.05).applyMatrix4(v.hold.matrix),y.quaternion.setFromEuler(v.hold.rotation),y.rotateZ(Math.random()*3))),v.gun.updateWorldMatrix(!0,!1),Aa.set(0,T.muzzle[1],-T.muzzle[0]).applyMatrix4(v.gun.matrixWorld)}pn("scope").hidden=!_;let x=!_&&(e.alive||O.spec)&&!(u&&u.cat==="sniper"),g=Hn.xGap;!Hn.xStatic&&e.alive&&u&&u.dmg&&(g=Hn.xGap+Math.max(0,ma(u,{speed:Math.hypot(O.pl.vx,O.pl.vz),onGround:O.pl.onGround,duck:O.pl.duck,scoped:O.scope>0,shots:O.shots})*900-1)),Ze.crosshair(Math.min(60,g),x,Hn)}var kf=0,Bf=0;function _b(n){let e=kt();if(!e||(Ra=Math.max(0,Ra-n*1.4),Ze.el.hurt.style.opacity=Math.max(Ra,e.alive&&e.hp<=30?.22+.14*Math.sin(X.time*4):0).toFixed(2),O.blind=Math.max(0,O.blind-n),Ze.el.flash.style.opacity=Math.min(1,O.blind/1.6).toFixed(3),kf-=n,kf>0))return;kf=.05;let t=O.spec&&!e.alive?X.players.get(O.spec):e;Ze.money(e.money),Ze.vitals(t?t.hp:0,t?t.ar:0,t&&t.helm);let i=e.alive?jn():t&&t.wpn,s=et[i],r=O.slot,o=r==="p"||r==="s"?O.ammo[r]:null;Ze.ammo(i?no(i):"",o?o[0]:0,o?o[1]:0,e.alive&&!!o&&!!s&&!!s.mag);let a=[];e.alive&&(e.inv.p&&a.push({key:1,slot:"p",id:e.inv.p,name:no(e.inv.p)}),e.inv.s&&a.push({key:2,slot:"s",id:e.inv.s,name:no(e.inv.s)}),a.push({key:3,slot:"k",id:"knife",name:"Cuchillo"}),e.inv.zeus&&a.push({key:3,slot:"z",id:"zeus",name:"Zeus x27"}),e.inv.g.length&&a.push({key:4,slot:"g",id:e.inv.g.join(),name:e.inv.g.map(no).join(" \xB7 ")}),e.inv.c4&&a.push({key:5,slot:"c4",id:"c4",name:"C4"}),e.inv.kit&&a.push({key:"",slot:"kit",id:"kit",name:"Kit de desactivaci\xF3n"})),Ze.slots(a.filter(v=>v.slot!=="g"&&v.slot!=="kit"),O.slot,e.alive?e.inv.g:[],O.gsel);let l=X.bomb.state==="planted";Ze.clock(X.timeLeft,l||X.phase==="live"&&X.timeLeft<10,l);let c=X.score[X.half],h=X.score[1-X.half],f=0,u=0,d=0,p=0;for(let v of X.players.values())v.team==="T"?(u++,v.alive&&f++):(p++,v.alive&&d++);let _=v=>[...X.players.values()].filter(w=>w.team===v).map(w=>({n:w.name,a:w.alive}));if(Ze.score(c,h,_("T"),_("CT")),Ze.el.buyHint.hidden=!(Xf()&&!Vn),Vn)if(!Xf())bh(!1);else{let v=pn("buyTime"),w=X.phase==="freeze"?Math.ceil(X.timeLeft+Gt.buy):Math.max(0,Math.ceil(Gt.buy-(Gt.live-X.timeLeft)));v.textContent="0:"+String(w).padStart(2,"0")}let x=Ze.el.spec;!e.alive&&O.deadT>2.2&&t&&t!==e?(x.hidden=!1,x.innerHTML="Mirando a <b>"+t.name.replace(/</g,"")+"</b><small>Clic o Espacio: siguiente</small>"):x.hidden=!0,X.phase==="freeze"&&e.alive?Ze.center("La ronda empieza en "+Math.ceil(X.timeLeft)+" \xB7 B para comprar",0):X.phase==="freeze"||Ze.el.centerMsg.textContent.startsWith("La ronda empieza")&&Ze.center("",1);let g=jt.has("Tab")||X.phase==="over";if(Ze.el.board.hidden=!g,g&&(Ze.el.board.innerHTML=Rm(X,ct)),Bf-=.05,Bf<=0&&Wf){Bf=.1;let v=t&&t!==e?{x:t.x,z:t.z,yaw:t.yaw}:{x:O.pl.x,z:O.pl.z,yaw:O.pl.yaw},w=[],S=[O.pl.x,O.pl.y+1.6,O.pl.z];for(let A of X.players.values())A.alive&&(A.team===e.team?w.push({x:A.x,z:A.z,col:A.team==="T"?"#f0c060":"#8ab8ff",me:A.id===ct}):e.alive&&A.seenT>X.time-.6&&w.push({x:A.x,z:A.z,col:"#ff4040"}));if(Am(pn("radar"),Wf,X.W,v,w,{s:X.bomb.state,x:X.bomb.x,z:X.bomb.z,seen:!0},e.team),e.alive)for(let A of X.players.values())A.alive&&A.team!==e.team&&Math.hypot(A.x-O.pl.x,A.z-O.pl.z)<60&&ga(X.W,X.nades,S,[A.x,A.y,A.z,1])&&(A.seenT=X.time);let C=oi(X.W,v.x,v.z);Ze.el.zoneName.textContent=C&4?"Sitio A":C&8?"Sitio B":C&16?"Base T":C&32?"Base CT":""}}var Fm=performance.now();function Qm(n){requestAnimationFrame(Qm);let e=Math.min(.05,(n-Fm)/1e3);if(Fm=n,X.phase==="lobby"&&ur&&Xt){ur.render(Xt,e);return}if(X.phase!=="lobby"&&Zf){let t=window.__ls&&window.__ls.ff||0;for(let i=0;i<t;i++)Om(.05);if(Om(e),zt.update(e,X.time,an),yb(e),_b(e),window.__ls.cam){let i=window.__ls.cam;an.position.set(i[0],i[1],i[2]),an.lookAt(i[3],i[4],i[5]),an.fov!==74&&(an.fov=74,an.updateProjectionMatrix()),wn.visible=!1}In&&kt()&&!kt().alive&&O.deadT>2.2&&(In=!1,sd(1)),Xt.clear(),Xt.render(ln,an),Xt.clearDepth(),wn.visible&&Xt.render(lr,ro)}}function Om(n){X.time+=n,Tt()&&Nt?(Nt.tick(n),nn&&nn.tick(n),xb(n)):X.phase!=="lobby"&&(X.timeLeft-=n,X.bomb.state==="planted"&&(X.bomb.t-=n)),gb(n),tb(n),pb(n),mb(n)}var rs=n=>!!(window.Arcade&&Arcade.admin&&Arcade.admin.get(n));function vb(){Arcade.admin&&(Arcade.admin.define([{id:"ls.god",label:"Inmortal",type:"toggle"},{id:"ls.wall",label:"Ver a trav\xE9s de paredes",type:"toggle"},{id:"ls.aim",label:"Aimbot (al disparar)",type:"toggle"},{id:"ls.norecoil",label:"Sin retroceso ni dispersi\xF3n",type:"toggle"},{id:"ls.ammo",label:"Balas infinitas",type:"toggle"},{id:"ls.speed",label:"S\xFAper velocidad",type:"toggle"},{id:"ls.money",label:"Plata al m\xE1ximo",type:"button"},{id:"ls.heal",label:"Curarme + chaleco",type:"button"},{id:"ls.kill",label:"Matar a los enemigos",type:"button"},{id:"ls.win",label:"Ganar la ronda",type:"button"}]),Arcade.admin.on("ls.god",n=>Yt("adm",{a:"god",v:!!n})),Arcade.admin.on("ls.money",()=>Yt("adm",{a:"money"})),Arcade.admin.on("ls.heal",()=>Yt("adm",{a:"heal"})),Arcade.admin.on("ls.kill",()=>Yt("adm",{a:"kill"})),Arcade.admin.on("ls.win",()=>Yt("adm",{a:"win"})))}var Hf={};function Mb(n){return Hf[n]||(Hf[n]=(async()=>{try{let e=xh[n]||(xh[n]=await $u(n));return e.W=e.W||Oc(e.info,e.layers),If(e.W)}catch(e){return console.warn(e),null}})()),Hf[n]}var ur=null;function qf(){ur.show()}function Yf(){ur.refresh()}function io(){Tt()&&(Bn("cfg",{cfg:X.cfg,prefs:X.prefs}),Yf())}var _h=new Set,Vf=0;async function zm(n){if(X.cfg=n.cfg,X.prefs=n.prefs||{},ur.hide(),await ub(X.cfg.map),X.phase="loading",pn("hud").hidden=!1,Tt()){_h.add(ct);let e=()=>{((qt.players||[]).every(i=>_h.has(i.id))||Vf<=0)&&bb()};Vf=1,setTimeout(()=>{Vf=0,e()},15e3),X.tryBegin=e,e()}else Bn("ready",{},{to:qt.hostId});oo(),os||Ca()}var $f=!1;function bb(){if($f)return;$f=!0,Nt=af(X);let n=(qt.players||[{id:ct,name:"Jugador",slot:0}]).map(e=>{let t=X.prefs[e.id]||{};return{id:e.id,name:e.name,slot:e.slot,pref:t.t??-1}});Nt.setup(n),nn=cf(X,Nt),Nt.startMatch()}function Sb(){X.phase="lobby",$f=!1,Nt=null,nn=null,_h.clear(),X.players.clear(),X.drops.clear(),X.nades.length=0,pn("hud").hidden=!0,Ze.banner(null),clearInterval(mh),document.exitPointerLock&&document.exitPointerLock(),qf(),oo()}function wb(){if(!(X.phase==="lobby"||X.phase==="loading"||Nt)){Nt=af(X),Nt.adopt(),nn=cf(X,Nt);for(let n of X.players.values())n.bot&&n.alive&&nn.place(n,[n.x,n.y,n.z,n.yaw]),n.dmgBy||(n.dmgBy={});nn.roundStart(),Nt.markDirty()}}async function Tb(){Ze.init(),cb(),qM(),requestAnimationFrame(Qm),qt=await Arcade.ready(),ct=qt.me.id,(!qt.players||!qt.players.length)&&(qt.players=[qt.me]),pn("loading").hidden=!0,vb();for(let e of XM)Arcade.on(e,(t,i,s)=>{Tt()&&Nt&&Nt.handle(e,t,i,s||{})});for(let e of["st","rs","ev","p","pb","sh","nd"])Arcade.on(e,(t,i)=>{(e==="ev"||e==="st"||e==="rs")&&Tt()||id(e,t,i)});Arcade.on("cfg",e=>{Tt()||(X.cfg=e.cfg,X.prefs=e.prefs||{},X.phase==="lobby"&&Yf())}),Arcade.on("pref",(e,t)=>{Tt()&&(X.prefs[t]=e,io())}),Arcade.on("start",e=>{X.phase==="lobby"&&zm(e)}),Arcade.on("ready",(e,t)=>{Tt()&&(_h.add(t),X.tryBegin&&X.tryBegin())}),Arcade.on("hello",(e,t)=>{Tt()&&X.phase==="lobby"&&io()}),Arcade.onPlayerLeft(e=>{qt.players=(qt.players||[]).filter(i=>i.id!==e);let t=X.players.get(e);t&&Tt()&&Nt&&(t.bot=!0,t.name=t.name+" (bot)",t.alive&&nn&&nn.place(t,[t.x,t.y,t.z,t.yaw]),Nt.markDirty()),X.phase==="lobby"&&Yf(),Tt()&&X.tryBegin&&X.tryBegin()}),Arcade.onHostChanged(()=>{Tt()&&(wb(),X.phase==="lobby"&&(qf(),io()))});let n=X.emit;X.emit=(e,t)=>{if(e==="start"){Bn("start",t),zm(t);return}n(e,t)},ur=wm({G:X,store:vh,MAPS:Gf,LENGTHS:of,DIFF:jc,mapThumb:Mb,ctx:()=>qt,myId:()=>ct,isHost:Tt,pushCfg:io,openSettings:e=>Ia.open(e),sendPref:e=>{X.prefs[ct]=e,Tt()?io():Bn("pref",e,{to:qt.hostId})},onStart:()=>{Sa(),os||Hm(),X.emit("start",{cfg:X.cfg,prefs:X.prefs})}}),X.prefs[ct]=ur.myPref(),qf(),Tt()?io():(Bn("hello",{},{to:qt.hostId}),Bn("pref",X.prefs[ct],{to:qt.hostId}))}Tb();window.__ls={G:X,M:O,me:kt,req:Yt,get H(){return Nt},get BOTS(){return nn},get camera(){return an},keys:jt,look:Kf,onKey:Jf,traceShot:Zc,targets:td,shotDir:Qr,setMouse(n,e){In=n,cr=!!e,e&&ed()}};
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
