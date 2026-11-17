var Rd=0,Vh=1,Cd=2;var Ua=1,El=2,Tr=3,hs=0,mn=1,yi=2,Ds=0,wr=1,Gh=2,Wh=3,Xh=4,Pd=5;var Us=100,Id=101,Ld=102,Nd=103,Dd=104,Ud=200,Fd=201,Od=202,Bd=203,qh=204,Yh=205,kd=206,zd=207,Hd=208,Vd=209,Gd=210,Wd=211,Xd=212,qd=213,Yd=214,Xo=0,qo=1,Yo=2,ur=3,$o=4,Zo=5,Ko=6,Jo=7,Al=0,$d=1,Zd=2,_i=0,$h=1,Zh=2,Kh=3,Fa=4,Jh=5,jh=6,Qh=7;var eu=300,Fs=301,Er=302,Rl=303,Cl=304,fr=1e3,ui=1001,jo=1002,cn=1003,Kd=1004;var Oa=1005;var Pn=1006,Pl=1007;var Bi=1008;var Ln=1009,tu=1010,nu=1011,Ar=1012,Il=1013,oi=1014,Kn=1015,li=1016,Ll=1017,Nl=1018,Os=1020,iu=35902,su=35899,ru=1021,au=1022,ci=1023,Ni=1026,ki=1027,Dl=1028,Ul=1029,us=1030,Fl=1031;var Ol=1033,Ba=33776,ka=33777,za=33778,Ha=33779,Bl=35840,kl=35841,zl=35842,Hl=35843,Vl=36196,Gl=37492,Wl=37496,Xl=37488,ql=37489,Va=37490,Yl=37491,$l=37808,Zl=37809,Kl=37810,Jl=37811,jl=37812,Ql=37813,ec=37814,tc=37815,nc=37816,ic=37817,sc=37818,rc=37819,ac=37820,oc=37821,lc=36492,cc=36494,hc=36495,uc=36283,fc=36284,Ga=36285,dc=36286;var ia=2300,Qo=2301,Go=2302,Ph=2303,Ih=2400,Lh=2401,Nh=2402;var Jd=3200;var pc=0,jd=1,zi="",dn="srgb",sa="srgb-linear",ra="linear",vt="srgb";var Wo=7680;var Qd=519,ep=512,tp=513,np=514,ou=515,ip=516,sp=517,lu=518,cu=519,hu=35044,Rr=35048;var uu="300 es",Yn=2e3,dr=2001;function Em(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Am(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function aa(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function rp(){let n=aa("canvas");return n.style.display="block",n}var $f={},pr=null;function oa(...n){let e="THREE."+n.shift();pr?pr("log",e,...n):console.log(e,...n)}function ap(n){let e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function He(...n){n=ap(n);let e="THREE."+n.shift();if(pr)pr("warn",e,...n);else{let t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function Ge(...n){n=ap(n);let e="THREE."+n.shift();if(pr)pr("error",e,...n);else{let t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function ea(...n){let e=n.join(" ");e in $f||($f[e]=!0,He(...n))}function op(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}var lp={[Xo]:Xo,[Yo]:Ko,[$o]:$o,[ur]:Zo,[qo]:qo,[Ko]:Yo,[Jo]:Jo,[Zo]:ur},fi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let s=i[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},Mn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var sh=Math.PI/180,el=180/Math.PI;function fs(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Mn[n&255]+Mn[n>>8&255]+Mn[n>>16&255]+Mn[n>>24&255]+"-"+Mn[e&255]+Mn[e>>8&255]+"-"+Mn[e>>16&15|64]+Mn[e>>24&255]+"-"+Mn[t&63|128]+Mn[t>>8&255]+"-"+Mn[t>>16&255]+Mn[t>>24&255]+Mn[i&255]+Mn[i>>8&255]+Mn[i>>16&255]+Mn[i>>24&255]).toLowerCase()}function ot(n,e,t){return Math.max(e,Math.min(t,n))}function Rm(n,e){return(n%e+e)%e}function rh(n,e,t){return(1-t)*n+t*e}function cp(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function mc(n){switch(n.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function hp(n,e){if(e.constructor===Float32Array)return n;let t=mc(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(n/t,-1)}function up(n,e){if(e.constructor===Float32Array)return n;let t=mc(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(n*t)}var he=class{static{this.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ot(this.x,e.x,t.x),this.y=ot(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ot(this.x,e,t),this.y=ot(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ot(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(ot(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},di=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,o){let l=i[s+0],c=i[s+1],h=i[s+2],f=i[s+3],u=r[a+0],d=r[a+1],m=r[a+2],_=r[a+3];if(f!==_||l!==u||c!==d||h!==m){let p=l*u+c*d+h*m+f*_;p<0&&(u=-u,d=-d,m=-m,_=-_,p=-p);let g=1-o;if(p<.9995){let M=Math.acos(p),E=Math.sin(M);g=Math.sin(g*M)/E,o=Math.sin(o*M)/E,l=l*g+u*o,c=c*g+d*o,h=h*g+m*o,f=f*g+_*o}else{l=l*g+u*o,c=c*g+d*o,h=h*g+m*o,f=f*g+_*o;let M=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=M,c*=M,h*=M,f*=M}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,s,r,a){let o=i[s],l=i[s+1],c=i[s+2],h=i[s+3],f=r[a],u=r[a+1],d=r[a+2],m=r[a+3];return e[t]=o*m+h*f+l*d-c*u,e[t+1]=l*m+h*u+c*f-o*d,e[t+2]=c*m+h*d+o*u-l*f,e[t+3]=h*m-o*f-l*u-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(s/2),f=o(r/2),u=l(i/2),d=l(s/2),m=l(r/2);switch(a){case"XYZ":this._x=u*h*f+c*d*m,this._y=c*d*f-u*h*m,this._z=c*h*m+u*d*f,this._w=c*h*f-u*d*m;break;case"YXZ":this._x=u*h*f+c*d*m,this._y=c*d*f-u*h*m,this._z=c*h*m-u*d*f,this._w=c*h*f+u*d*m;break;case"ZXY":this._x=u*h*f-c*d*m,this._y=c*d*f+u*h*m,this._z=c*h*m+u*d*f,this._w=c*h*f-u*d*m;break;case"ZYX":this._x=u*h*f-c*d*m,this._y=c*d*f+u*h*m,this._z=c*h*m-u*d*f,this._w=c*h*f+u*d*m;break;case"YZX":this._x=u*h*f+c*d*m,this._y=c*d*f+u*h*m,this._z=c*h*m-u*d*f,this._w=c*h*f-u*d*m;break;case"XZY":this._x=u*h*f-c*d*m,this._y=c*d*f-u*h*m,this._z=c*h*m+u*d*f,this._w=c*h*f+u*d*m;break;default:He("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],f=t[10],u=i+o+f;if(u>0){let d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(a-s)*d}else if(i>o&&i>f){let d=2*Math.sqrt(1+i-o-f);this._w=(h-l)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+c)/d}else if(o>f){let d=2*Math.sqrt(1+o-i-f);this._w=(r-c)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+f-i-o);this._w=(a-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ot(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-i*c,this._z=r*h+a*c+i*l-s*o,this._w=a*h-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},W=class{static{this.prototype.isVector3=!0}constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Zf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Zf.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*i),h=2*(o*t-r*s),f=2*(r*i-a*t);return this.x=t+l*c+a*f-o*h,this.y=i+l*h+o*c-r*f,this.z=s+l*f+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ot(this.x,e.x,t.x),this.y=ot(this.y,e.y,t.y),this.z=ot(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ot(this.x,e,t),this.y=ot(this.y,e,t),this.z=ot(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ot(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ah.copy(this).projectOnVector(e),this.sub(ah)}reflect(e){return this.sub(ah.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(ot(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ah=new W,Zf=new di,Ye=class{static{this.prototype.isMatrix3=!0}constructor(e,t,i,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c)}set(e,t,i,s,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],f=i[7],u=i[2],d=i[5],m=i[8],_=s[0],p=s[3],g=s[6],M=s[1],E=s[4],y=s[7],v=s[2],b=s[5],x=s[8];return r[0]=a*_+o*M+l*v,r[3]=a*p+o*E+l*b,r[6]=a*g+o*y+l*x,r[1]=c*_+h*M+f*v,r[4]=c*p+h*E+f*b,r[7]=c*g+h*y+f*x,r[2]=u*_+d*M+m*v,r[5]=u*p+d*E+m*b,r[8]=u*g+d*y+m*x,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-i*r*h+i*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],f=h*a-o*c,u=o*l-h*r,d=c*r-a*l,m=t*f+i*u+s*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/m;return e[0]=f*_,e[1]=(s*c-h*i)*_,e[2]=(o*i-s*a)*_,e[3]=u*_,e[4]=(h*t-s*l)*_,e[5]=(s*r-o*t)*_,e[6]=d*_,e[7]=(i*l-c*t)*_,e[8]=(a*t-i*r)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return ea("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(oh.makeScale(e,t)),this}rotate(e){return ea("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(oh.makeRotation(-e)),this}translate(e,t){return ea("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(oh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},oh=new Ye,Kf=new Ye().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Jf=new Ye().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Cm(){let n={enabled:!0,workingColorSpace:sa,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===vt&&(s.r=Li(s.r),s.g=Li(s.g),s.b=Li(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===vt&&(s.r=hr(s.r),s.g=hr(s.g),s.b=hr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===zi?ra:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[sa]:{primaries:e,whitePoint:i,transfer:ra,toXYZ:Kf,fromXYZ:Jf,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:dn},outputColorSpaceConfig:{drawingBufferColorSpace:dn}},[dn]:{primaries:e,whitePoint:i,transfer:vt,toXYZ:Kf,fromXYZ:Jf,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:dn}}}),n}var ut=Cm();function Li(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function hr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var qs,tl=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{qs===void 0&&(qs=aa("canvas")),qs.width=e.width,qs.height=e.height;let s=qs.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=qs}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=aa("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Li(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Li(t[i]/255)*255):t[i]=Li(t[i]);return{data:t,width:e.width,height:e.height}}else return He("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Pm=0,mr=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Pm++}),this.uuid=fs(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(lh(s[a].image)):r.push(lh(s[a]))}else r=lh(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function lh(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?tl.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(He("Texture: Unable to serialize Texture."),{})}var Im=0,ch=new W,In=class n extends fi{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=ui,s=ui,r=Pn,a=Bi,o=ci,l=Ln,c=n.DEFAULT_ANISOTROPY,h=zi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Im++}),this.uuid=fs(),this.name="",this.source=new mr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new he(0,0),this.repeat=new he(1,1),this.center=new he(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ye,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(ch).x}get height(){return this.source.getSize(ch).y}get depth(){return this.source.getSize(ch).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){He(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){He(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==eu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case fr:e.x=e.x-Math.floor(e.x);break;case ui:e.x=e.x<0?0:1;break;case jo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case fr:e.y=e.y-Math.floor(e.y);break;case ui:e.y=e.y<0?0:1;break;case jo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};In.DEFAULT_IMAGE=null;In.DEFAULT_MAPPING=eu;In.DEFAULT_ANISOTROPY=1;var Lt=class{static{this.prototype.isVector4=!0}constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,c=l[0],h=l[4],f=l[8],u=l[1],d=l[5],m=l[9],_=l[2],p=l[6],g=l[10];if(Math.abs(h-u)<.01&&Math.abs(f-_)<.01&&Math.abs(m-p)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+_)<.1&&Math.abs(m+p)<.1&&Math.abs(c+d+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let E=(c+1)/2,y=(d+1)/2,v=(g+1)/2,b=(h+u)/4,x=(f+_)/4,T=(m+p)/4;return E>y&&E>v?E<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(E),s=b/i,r=x/i):y>v?y<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),i=b/s,r=T/s):v<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(v),i=x/r,s=T/r),this.set(i,s,r,t),this}let M=Math.sqrt((p-m)*(p-m)+(f-_)*(f-_)+(u-h)*(u-h));return Math.abs(M)<.001&&(M=1),this.x=(p-m)/M,this.y=(f-_)/M,this.z=(u-h)/M,this.w=Math.acos((c+d+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ot(this.x,e.x,t.x),this.y=ot(this.y,e.y,t.y),this.z=ot(this.z,e.z,t.z),this.w=ot(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ot(this.x,e,t),this.y=ot(this.y,e,t),this.z=ot(this.z,e,t),this.w=ot(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ot(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},nl=class extends fi{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Pn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Lt(0,0,e,t),this.scissorTest=!1,this.viewport=new Lt(0,0,e,t),this.textures=[];let s=i.count;for(let r=0;r<s;r++)this.textures[r]=new In({width:e,height:t,depth:i.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Pn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new mr(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},kn=class extends nl{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},la=class extends In{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=cn,this.minFilter=cn,this.wrapR=ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var il=class extends In{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=cn,this.minFilter=cn,this.wrapR=ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var xt=class n{static{this.prototype.isMatrix4=!0}constructor(e,t,i,s,r,a,o,l,c,h,f,u,d,m,_,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c,h,f,u,d,m,_,p)}set(e,t,i,s,r,a,o,l,c,h,f,u,d,m,_,p){let g=this.elements;return g[0]=e,g[4]=t,g[8]=i,g[12]=s,g[1]=r,g[5]=a,g[9]=o,g[13]=l,g[2]=c,g[6]=h,g[10]=f,g[14]=u,g[3]=d,g[7]=m,g[11]=_,g[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,i=e.elements,s=1/Ys.setFromMatrixColumn(e,0).length(),r=1/Ys.setFromMatrixColumn(e,1).length(),a=1/Ys.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){let u=a*h,d=a*f,m=o*h,_=o*f;t[0]=l*h,t[4]=-l*f,t[8]=c,t[1]=d+m*c,t[5]=u-_*c,t[9]=-o*l,t[2]=_-u*c,t[6]=m+d*c,t[10]=a*l}else if(e.order==="YXZ"){let u=l*h,d=l*f,m=c*h,_=c*f;t[0]=u+_*o,t[4]=m*o-d,t[8]=a*c,t[1]=a*f,t[5]=a*h,t[9]=-o,t[2]=d*o-m,t[6]=_+u*o,t[10]=a*l}else if(e.order==="ZXY"){let u=l*h,d=l*f,m=c*h,_=c*f;t[0]=u-_*o,t[4]=-a*f,t[8]=m+d*o,t[1]=d+m*o,t[5]=a*h,t[9]=_-u*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let u=a*h,d=a*f,m=o*h,_=o*f;t[0]=l*h,t[4]=m*c-d,t[8]=u*c+_,t[1]=l*f,t[5]=_*c+u,t[9]=d*c-m,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let u=a*l,d=a*c,m=o*l,_=o*c;t[0]=l*h,t[4]=_-u*f,t[8]=m*f+d,t[1]=f,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=d*f+m,t[10]=u-_*f}else if(e.order==="XZY"){let u=a*l,d=a*c,m=o*l,_=o*c;t[0]=l*h,t[4]=-f,t[8]=c*h,t[1]=u*f+_,t[5]=a*h,t[9]=d*f-m,t[2]=m*f-d,t[6]=o*h,t[10]=_*f+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Lm,e,Nm)}lookAt(e,t,i){let s=this.elements;return On.subVectors(e,t),On.lengthSq()===0&&(On.z=1),On.normalize(),ji.crossVectors(i,On),ji.lengthSq()===0&&(Math.abs(i.z)===1?On.x+=1e-4:On.z+=1e-4,On.normalize(),ji.crossVectors(i,On)),ji.normalize(),xo.crossVectors(On,ji),s[0]=ji.x,s[4]=xo.x,s[8]=On.x,s[1]=ji.y,s[5]=xo.y,s[9]=On.y,s[2]=ji.z,s[6]=xo.z,s[10]=On.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],f=i[5],u=i[9],d=i[13],m=i[2],_=i[6],p=i[10],g=i[14],M=i[3],E=i[7],y=i[11],v=i[15],b=s[0],x=s[4],T=s[8],P=s[12],S=s[1],A=s[5],D=s[9],C=s[13],w=s[2],R=s[6],L=s[10],B=s[14],z=s[3],U=s[7],F=s[11],H=s[15];return r[0]=a*b+o*S+l*w+c*z,r[4]=a*x+o*A+l*R+c*U,r[8]=a*T+o*D+l*L+c*F,r[12]=a*P+o*C+l*B+c*H,r[1]=h*b+f*S+u*w+d*z,r[5]=h*x+f*A+u*R+d*U,r[9]=h*T+f*D+u*L+d*F,r[13]=h*P+f*C+u*B+d*H,r[2]=m*b+_*S+p*w+g*z,r[6]=m*x+_*A+p*R+g*U,r[10]=m*T+_*D+p*L+g*F,r[14]=m*P+_*C+p*B+g*H,r[3]=M*b+E*S+y*w+v*z,r[7]=M*x+E*A+y*R+v*U,r[11]=M*T+E*D+y*L+v*F,r[15]=M*P+E*C+y*B+v*H,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],f=e[6],u=e[10],d=e[14],m=e[3],_=e[7],p=e[11],g=e[15],M=l*d-c*u,E=o*d-c*f,y=o*u-l*f,v=a*d-c*h,b=a*u-l*h,x=a*f-o*h;return t*(_*M-p*E+g*y)-i*(m*M-p*v+g*b)+s*(m*E-_*v+g*x)-r*(m*y-_*b+p*x)}determinantAffine(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],h=e[10];return t*(a*h-o*c)-i*(r*h-o*l)+s*(r*c-a*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],f=e[9],u=e[10],d=e[11],m=e[12],_=e[13],p=e[14],g=e[15],M=t*o-i*a,E=t*l-s*a,y=t*c-r*a,v=i*l-s*o,b=i*c-r*o,x=s*c-r*l,T=h*_-f*m,P=h*p-u*m,S=h*g-d*m,A=f*p-u*_,D=f*g-d*_,C=u*g-d*p,w=M*C-E*D+y*A+v*S-b*P+x*T;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let R=1/w;return e[0]=(o*C-l*D+c*A)*R,e[1]=(s*D-i*C-r*A)*R,e[2]=(_*x-p*b+g*v)*R,e[3]=(u*b-f*x-d*v)*R,e[4]=(l*S-a*C-c*P)*R,e[5]=(t*C-s*S+r*P)*R,e[6]=(p*y-m*x-g*E)*R,e[7]=(h*x-u*y+d*E)*R,e[8]=(a*D-o*S+c*T)*R,e[9]=(i*S-t*D-r*T)*R,e[10]=(m*b-_*y+g*M)*R,e[11]=(f*y-h*b-d*M)*R,e[12]=(o*P-a*A-l*T)*R,e[13]=(t*A-i*P+s*T)*R,e[14]=(_*E-m*v-p*M)*R,e[15]=(h*v-f*E+u*M)*R,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+i,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,f=o+o,u=r*c,d=r*h,m=r*f,_=a*h,p=a*f,g=o*f,M=l*c,E=l*h,y=l*f,v=i.x,b=i.y,x=i.z;return s[0]=(1-(_+g))*v,s[1]=(d+y)*v,s[2]=(m-E)*v,s[3]=0,s[4]=(d-y)*b,s[5]=(1-(u+g))*b,s[6]=(p+M)*b,s[7]=0,s[8]=(m+E)*x,s[9]=(p-M)*x,s[10]=(1-(u+_))*x,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let a=Ys.set(s[0],s[1],s[2]).length(),o=Ys.set(s[4],s[5],s[6]).length(),l=Ys.set(s[8],s[9],s[10]).length();r<0&&(a=-a),ti.copy(this);let c=1/a,h=1/o,f=1/l;return ti.elements[0]*=c,ti.elements[1]*=c,ti.elements[2]*=c,ti.elements[4]*=h,ti.elements[5]*=h,ti.elements[6]*=h,ti.elements[8]*=f,ti.elements[9]*=f,ti.elements[10]*=f,t.setFromRotationMatrix(ti),i.x=a,i.y=o,i.z=l,this}makePerspective(e,t,i,s,r,a,o=Yn,l=!1){let c=this.elements,h=2*r/(t-e),f=2*r/(i-s),u=(t+e)/(t-e),d=(i+s)/(i-s),m,_;if(l)m=r/(a-r),_=a*r/(a-r);else if(o===Yn)m=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===dr)m=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=f,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,a,o=Yn,l=!1){let c=this.elements,h=2/(t-e),f=2/(i-s),u=-(t+e)/(t-e),d=-(i+s)/(i-s),m,_;if(l)m=1/(a-r),_=a/(a-r);else if(o===Yn)m=-2/(a-r),_=-(a+r)/(a-r);else if(o===dr)m=-1/(a-r),_=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=f,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=m,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},Ys=new W,ti=new xt,Lm=new W(0,0,0),Nm=new W(1,1,1),ji=new W,xo=new W,On=new W,jf=new xt,Qf=new di,ri=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],f=s[2],u=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(ot(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ot(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(ot(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ot(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ot(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-ot(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:He("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return jf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(jf,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Qf.setFromEuler(this),this.setFromQuaternion(Qf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ri.DEFAULT_ORDER="XYZ";var ca=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Dm=0,ed=new W,$s=new di,Ei=new xt,yo=new W,Wr=new W,Um=new W,Fm=new di,td=new W(1,0,0),nd=new W(0,1,0),id=new W(0,0,1),sd={type:"added"},Om={type:"removed"},Zs={type:"childadded",child:null},hh={type:"childremoved",child:null},Gt=class n extends fi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Dm++}),this.uuid=fs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new W,t=new ri,i=new di,s=new W(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new xt},normalMatrix:{value:new Ye}}),this.matrix=new xt,this.matrixWorld=new xt,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ca,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return $s.setFromAxisAngle(e,t),this.quaternion.multiply($s),this}rotateOnWorldAxis(e,t){return $s.setFromAxisAngle(e,t),this.quaternion.premultiply($s),this}rotateX(e){return this.rotateOnAxis(td,e)}rotateY(e){return this.rotateOnAxis(nd,e)}rotateZ(e){return this.rotateOnAxis(id,e)}translateOnAxis(e,t){return ed.copy(e).applyQuaternion(this.quaternion),this.position.add(ed.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(td,e)}translateY(e){return this.translateOnAxis(nd,e)}translateZ(e){return this.translateOnAxis(id,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ei.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?yo.copy(e):yo.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Wr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ei.lookAt(Wr,yo,this.up):Ei.lookAt(yo,Wr,this.up),this.quaternion.setFromRotationMatrix(Ei),s&&(Ei.extractRotation(s.matrixWorld),$s.setFromRotationMatrix(Ei),this.quaternion.premultiply($s.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ge("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(sd),Zs.child=e,this.dispatchEvent(Zs),Zs.child=null):Ge("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Om),hh.child=e,this.dispatchEvent(hh),hh.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ei.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ei.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ei),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(sd),Zs.child=e,this.dispatchEvent(Zs),Zs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wr,e,Um),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wr,Fm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),f=a(e.shapes),u=a(e.skeletons),d=a(e.animations),m=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),f.length>0&&(i.shapes=f),u.length>0&&(i.skeletons=u),d.length>0&&(i.animations=d),m.length>0&&(i.nodes=m)}return i.object=s,i;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Gt.DEFAULT_UP=new W(0,1,0);Gt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Rt=class extends Gt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Bm={type:"move"},gr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Rt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Rt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Rt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let _ of e.hand.values()){let p=t.getJointPose(_,i),g=this._getHandJoint(c,_);p!==null&&(g.matrix.fromArray(p.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=p.radius),g.visible=p!==null}let h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],u=h.position.distanceTo(f.position),d=.02,m=.005;c.inputState.pinching&&u>d+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=d-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Bm)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Rt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},fp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Qi={h:0,s:0,l:0},_o={h:0,s:0,l:0};function uh(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var Ve=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=dn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ut.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=ut.workingColorSpace){return this.r=e,this.g=t,this.b=i,ut.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=ut.workingColorSpace){if(e=Rm(e,1),t=ot(t,0,1),i=ot(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=uh(a,r,e+1/3),this.g=uh(a,r,e),this.b=uh(a,r,e-1/3)}return ut.colorSpaceToWorking(this,s),this}setStyle(e,t=dn){function i(r){r!==void 0&&parseFloat(r)<1&&He("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:He("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);He("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=dn){let i=fp[e.toLowerCase()];return i!==void 0?this.setHex(i,t):He("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Li(e.r),this.g=Li(e.g),this.b=Li(e.b),this}copyLinearToSRGB(e){return this.r=hr(e.r),this.g=hr(e.g),this.b=hr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=dn){return ut.workingToColorSpace(bn.copy(this),e),Math.round(ot(bn.r*255,0,255))*65536+Math.round(ot(bn.g*255,0,255))*256+Math.round(ot(bn.b*255,0,255))}getHexString(e=dn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ut.workingColorSpace){ut.workingToColorSpace(bn.copy(this),t);let i=bn.r,s=bn.g,r=bn.b,a=Math.max(i,s,r),o=Math.min(i,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let f=a-o;switch(c=h<=.5?f/(a+o):f/(2-a-o),a){case i:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-i)/f+2;break;case r:l=(i-s)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=ut.workingColorSpace){return ut.workingToColorSpace(bn.copy(this),t),e.r=bn.r,e.g=bn.g,e.b=bn.b,e}getStyle(e=dn){ut.workingToColorSpace(bn.copy(this),e);let t=bn.r,i=bn.g,s=bn.b;return e!==dn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Qi),this.setHSL(Qi.h+e,Qi.s+t,Qi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Qi),e.getHSL(_o);let i=rh(Qi.h,_o.h,t),s=rh(Qi.s,_o.s,t),r=rh(Qi.l,_o.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},bn=new Ve;Ve.NAMES=fp;var ha=class n{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new Ve(e),this.near=t,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},ai=class extends Gt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ri,this.environmentIntensity=1,this.environmentRotation=new ri,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},ni=new W,Ai=new W,fh=new W,Ri=new W,Ks=new W,Js=new W,rd=new W,dh=new W,ph=new W,mh=new W,gh=new Lt,xh=new Lt,yh=new Lt,Ii=class n{constructor(e=new W,t=new W,i=new W){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),ni.subVectors(e,t),s.cross(ni);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){ni.subVectors(s,t),Ai.subVectors(i,t),fh.subVectors(e,t);let a=ni.dot(ni),o=ni.dot(Ai),l=ni.dot(fh),c=Ai.dot(Ai),h=Ai.dot(fh),f=a*c-o*o;if(f===0)return r.set(0,0,0),null;let u=1/f,d=(c*l-o*h)*u,m=(a*h-o*l)*u;return r.set(1-d-m,m,d)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Ri)===null?!1:Ri.x>=0&&Ri.y>=0&&Ri.x+Ri.y<=1}static getInterpolation(e,t,i,s,r,a,o,l){return this.getBarycoord(e,t,i,s,Ri)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ri.x),l.addScaledVector(a,Ri.y),l.addScaledVector(o,Ri.z),l)}static getInterpolatedAttribute(e,t,i,s,r,a){return gh.setScalar(0),xh.setScalar(0),yh.setScalar(0),gh.fromBufferAttribute(e,t),xh.fromBufferAttribute(e,i),yh.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(gh,r.x),a.addScaledVector(xh,r.y),a.addScaledVector(yh,r.z),a}static isFrontFacing(e,t,i,s){return ni.subVectors(i,t),Ai.subVectors(e,t),ni.cross(Ai).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ni.subVectors(this.c,this.b),Ai.subVectors(this.a,this.b),ni.cross(Ai).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,a,o;Ks.subVectors(s,i),Js.subVectors(r,i),dh.subVectors(e,i);let l=Ks.dot(dh),c=Js.dot(dh);if(l<=0&&c<=0)return t.copy(i);ph.subVectors(e,s);let h=Ks.dot(ph),f=Js.dot(ph);if(h>=0&&f<=h)return t.copy(s);let u=l*f-h*c;if(u<=0&&l>=0&&h<=0&&l-h>0)return a=l/(l-h),t.copy(i).addScaledVector(Ks,a);mh.subVectors(e,r);let d=Ks.dot(mh),m=Js.dot(mh);if(m>=0&&d<=m)return t.copy(r);let _=d*c-l*m;if(_<=0&&c>=0&&m<=0)return o=c/(c-m),t.copy(i).addScaledVector(Js,o);let p=h*m-d*f;if(p<=0&&f-h>=0&&d-m>=0)return rd.subVectors(r,s),o=(f-h)/(f-h+(d-m)),t.copy(s).addScaledVector(rd,o);let g=1/(p+_+u);return a=_*g,o=u*g,t.copy(i).addScaledVector(Ks,a).addScaledVector(Js,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},pi=class{constructor(e=new W(1/0,1/0,1/0),t=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(ii.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(ii.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=ii.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,ii):ii.fromBufferAttribute(r,a),ii.applyMatrix4(e.matrixWorld),this.expandByPoint(ii);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),vo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),vo.copy(i.boundingBox)),vo.applyMatrix4(e.matrixWorld),this.union(vo)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ii),ii.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Xr),Mo.subVectors(this.max,Xr),js.subVectors(e.a,Xr),Qs.subVectors(e.b,Xr),er.subVectors(e.c,Xr),es.subVectors(Qs,js),ts.subVectors(er,Qs),Ts.subVectors(js,er);let t=[0,-es.z,es.y,0,-ts.z,ts.y,0,-Ts.z,Ts.y,es.z,0,-es.x,ts.z,0,-ts.x,Ts.z,0,-Ts.x,-es.y,es.x,0,-ts.y,ts.x,0,-Ts.y,Ts.x,0];return!_h(t,js,Qs,er,Mo)||(t=[1,0,0,0,1,0,0,0,1],!_h(t,js,Qs,er,Mo))?!1:(bo.crossVectors(es,ts),t=[bo.x,bo.y,bo.z],_h(t,js,Qs,er,Mo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ii).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ii).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ci[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ci[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ci[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ci[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ci[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ci[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ci[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ci[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ci),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Ci=[new W,new W,new W,new W,new W,new W,new W,new W],ii=new W,vo=new pi,js=new W,Qs=new W,er=new W,es=new W,ts=new W,Ts=new W,Xr=new W,Mo=new W,bo=new W,ws=new W;function _h(n,e,t,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){ws.fromArray(n,r);let o=s.x*Math.abs(ws.x)+s.y*Math.abs(ws.y)+s.z*Math.abs(ws.z),l=e.dot(ws),c=t.dot(ws),h=i.dot(ws);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Qt=new W,So=new he,km=0,Sn=class extends fi{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:km++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=hu,this.updateRanges=[],this.gpuType=Kn,this.version=0,this._normalizationScale=e!==void 0?mc(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)So.fromBufferAttribute(this,t),So.applyMatrix3(e),this.setXY(t,So.x,So.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Qt.fromBufferAttribute(this,t),Qt.applyMatrix3(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Qt.fromBufferAttribute(this,t),Qt.applyMatrix4(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Qt.fromBufferAttribute(this,t),Qt.applyNormalMatrix(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Qt.fromBufferAttribute(this,t),Qt.transformDirection(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,t,i){return this.normalized&&(i=this._normalize(i)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):hp(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):up(e,this.array)}};var ua=class extends Sn{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var fa=class extends Sn{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var dt=class extends Sn{constructor(e,t,i){super(new Float32Array(e),t,i)}},zm=new pi,qr=new W,vh=new W,is=class{constructor(e=new W,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):zm.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;qr.subVectors(e,this.center);let t=qr.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(qr,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(vh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(qr.copy(e.center).add(vh)),this.expandByPoint(qr.copy(e.center).sub(vh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Hm=0,qn=new xt,Mh=new Gt,tr=new W,Bn=new pi,Yr=new pi,ln=new W,nn=class n extends fi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Hm++}),this.uuid=fs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Em(e)?fa:ua)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Ye().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return qn.makeRotationFromQuaternion(e),this.applyMatrix4(qn),this}rotateX(e){return qn.makeRotationX(e),this.applyMatrix4(qn),this}rotateY(e){return qn.makeRotationY(e),this.applyMatrix4(qn),this}rotateZ(e){return qn.makeRotationZ(e),this.applyMatrix4(qn),this}translate(e,t,i){return qn.makeTranslation(e,t,i),this.applyMatrix4(qn),this}scale(e,t,i){return qn.makeScale(e,t,i),this.applyMatrix4(qn),this}lookAt(e){return Mh.lookAt(e),Mh.updateMatrix(),this.applyMatrix4(Mh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(tr).negate(),this.translate(tr.x,tr.y,tr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new dt(i,3))}else{let i=Math.min(e.length,t.count);for(let s=0;s<i;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&He("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new pi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ge("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];Bn.setFromBufferAttribute(r),this.morphTargetsRelative?(ln.addVectors(this.boundingBox.min,Bn.min),this.boundingBox.expandByPoint(ln),ln.addVectors(this.boundingBox.max,Bn.max),this.boundingBox.expandByPoint(ln)):(this.boundingBox.expandByPoint(Bn.min),this.boundingBox.expandByPoint(Bn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ge('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new is);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ge("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new W,1/0);return}if(e){let i=this.boundingSphere.center;if(Bn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Yr.setFromBufferAttribute(o),this.morphTargetsRelative?(ln.addVectors(Bn.min,Yr.min),Bn.expandByPoint(ln),ln.addVectors(Bn.max,Yr.max),Bn.expandByPoint(ln)):(Bn.expandByPoint(Yr.min),Bn.expandByPoint(Yr.max))}Bn.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)ln.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(ln));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)ln.fromBufferAttribute(o,c),l&&(tr.fromBufferAttribute(e,c),ln.add(tr)),s=Math.max(s,i.distanceToSquared(ln))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ge('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ge("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new Sn(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));let o=[],l=[],c=new Uint8Array(i.count);for(let P=0;P<i.count;P++)o[P]=new W,l[P]=new W;let h=new W,f=new W,u=new W,d=new he,m=new he,_=new he,p=new W,g=new W;function M(P,S,A){c[P]=c[S]=c[A]=1,h.fromBufferAttribute(i,P),f.fromBufferAttribute(i,S),u.fromBufferAttribute(i,A),d.fromBufferAttribute(r,P),m.fromBufferAttribute(r,S),_.fromBufferAttribute(r,A),f.sub(h),u.sub(h),m.sub(d),_.sub(d);let D=1/(m.x*_.y-_.x*m.y);isFinite(D)&&(p.copy(f).multiplyScalar(_.y).addScaledVector(u,-m.y).multiplyScalar(D),g.copy(u).multiplyScalar(m.x).addScaledVector(f,-_.x).multiplyScalar(D),o[P].add(p),o[S].add(p),o[A].add(p),l[P].add(g),l[S].add(g),l[A].add(g))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let P=0,S=E.length;P<S;++P){let A=E[P],D=A.start,C=A.count;for(let w=D,R=D+C;w<R;w+=3)M(e.getX(w+0),e.getX(w+1),e.getX(w+2))}let y=new W,v=new W,b=new W,x=new W;function T(P){b.fromBufferAttribute(s,P),x.copy(b);let S=o[P];y.copy(S),y.sub(b.multiplyScalar(b.dot(S))).normalize(),v.crossVectors(x,S);let D=v.dot(l[P])<0?-1:1;a.setXYZW(P,y.x,y.y,y.z,D)}for(let P=0,S=i.count;P<S;++P)c[P]&&T(P);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new Sn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let u=0,d=i.count;u<d;u++)i.setXYZ(u,0,0,0);let s=new W,r=new W,a=new W,o=new W,l=new W,c=new W,h=new W,f=new W;if(e)for(let u=0,d=e.count;u<d;u+=3){let m=e.getX(u+0),_=e.getX(u+1),p=e.getX(u+2);s.fromBufferAttribute(t,m),r.fromBufferAttribute(t,_),a.fromBufferAttribute(t,p),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),o.fromBufferAttribute(i,m),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,p),o.add(h),l.add(h),c.add(h),i.setXYZ(m,o.x,o.y,o.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let u=0,d=t.count;u<d;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)ln.fromBufferAttribute(e,t),ln.normalize(),e.setXYZ(t,ln.x,ln.y,ln.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,f=o.normalized,u=new c.constructor(l.length*h),d=0,m=0;for(let _=0,p=l.length;_<p;_++){o.isInterleavedBufferAttribute?d=l[_]*o.data.stride+o.offset:d=l[_]*h;for(let g=0;g<h;g++)u[m++]=c[d++]}return new Sn(u,h,f)}if(this.index===null)return He("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,i);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,f=c.length;h<f;h++){let u=c[h],d=e(u,i);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let f=0,u=c.length;f<u;f++){let d=c[f];h.push(d.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],f=r[c];for(let u=0,d=f.length;u<d;u++)h.push(f[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},da=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=hu,this.updateRanges=[],this.version=0,this.uuid=fs()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=ad(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let i=new this.array.constructor(e.arrayBuffers[t]),s=new this.constructor(i,this.stride);return s.setUsage(this.usage),s}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=ad(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let i={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return i.usage=this.usage,i}};function ad(n){return n.buffer._uuid===void 0&&(n.buffer._uuid=fs()),n.byteOffset===0&&n.byteLength===n.buffer.byteLength?n.buffer._uuid:n.buffer._uuid+":"+n.byteOffset+":"+n.byteLength}var Cn=new W,xr=class n{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s,this._normalizationScale=e!==void 0?mc(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Cn.fromBufferAttribute(this,t),Cn.applyMatrix4(e),this.setXYZ(t,Cn.x,Cn.y,Cn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Cn.fromBufferAttribute(this,t),Cn.applyNormalMatrix(e),this.setXYZ(t,Cn.x,Cn.y,Cn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Cn.fromBufferAttribute(this,t),Cn.transformDirection(e),this.setXYZ(t,Cn.x,Cn.y,Cn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,t,i){return this.normalized&&(i=this._normalize(i)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),i=this._normalize(i)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){oa("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Sn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){oa("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):hp(e,this.data.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):up(e,this.data.array)}},bh=new W,Vm=new W,Gm=new Ye,si=class{constructor(e=new W(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=bh.subVectors(i,t).cross(Vm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let s=e.delta(bh),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||Gm.getNormalMatrix(e),s=this.coplanarPoint(bh).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Wm=0,Di=class extends fi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Wm++}),this.uuid=fs(),this.name="",this.type="Material",this.blending=wr,this.side=hs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=qh,this.blendDst=Yh,this.blendEquation=Us,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ve(0,0,0),this.blendAlpha=0,this.depthFunc=ur,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Qd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Wo,this.stencilZFail=Wo,this.stencilZPass=Wo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){He(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){He(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ve().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new si().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new he().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new he().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},yr=class extends Di{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ve(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},nr,$r=new W,ir=new W,sr=new W,rr=new he,Zr=new he,dp=new xt,To=new W,Kr=new W,wo=new W,od=new he,Sh=new he,ld=new he,pa=class extends Gt{constructor(e=new yr){if(super(),this.isSprite=!0,this.type="Sprite",nr===void 0){nr=new nn;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new da(t,5);nr.setIndex([0,1,2,0,2,3]),nr.setAttribute("position",new xr(i,3,0,!1)),nr.setAttribute("uv",new xr(i,2,3,!1))}this.geometry=nr,this.material=e,this.center=new he(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&Ge('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ir.setFromMatrixScale(this.matrixWorld),dp.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),sr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ir.multiplyScalar(-sr.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let a=this.center;Eo(To.set(-.5,-.5,0),sr,a,ir,s,r),Eo(Kr.set(.5,-.5,0),sr,a,ir,s,r),Eo(wo.set(.5,.5,0),sr,a,ir,s,r),od.set(0,0),Sh.set(1,0),ld.set(1,1);let o=e.ray.intersectTriangle(To,Kr,wo,!1,$r);if(o===null&&(Eo(Kr.set(-.5,.5,0),sr,a,ir,s,r),Sh.set(0,1),o=e.ray.intersectTriangle(To,wo,Kr,!1,$r),o===null))return;let l=e.ray.origin.distanceTo($r);l<e.near||l>e.far||t.push({distance:l,point:$r.clone(),uv:Ii.getInterpolation($r,To,Kr,wo,od,Sh,ld,new he),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}toJSON(e){let t=super.toJSON(e);return t.object.center=this.center.toArray(),t}};function Eo(n,e,t,i,s,r){rr.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(Zr.x=r*rr.x-s*rr.y,Zr.y=s*rr.x+r*rr.y):Zr.copy(rr),n.copy(e),n.x+=Zr.x,n.y+=Zr.y,n.applyMatrix4(dp)}var Pi=new W,Th=new W,Ao=new W,Ro=new W,sl=class{constructor(e=new W,t=new W(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Pi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Pi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Pi.copy(this.origin).addScaledVector(this.direction,t),Pi.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Th.copy(e).add(t).multiplyScalar(.5),Ao.copy(t).sub(e).normalize(),Ro.copy(this.origin).sub(Th);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Ao),o=Ro.dot(this.direction),l=-Ro.dot(Ao),c=Ro.lengthSq(),h=Math.abs(1-a*a),f,u,d,m;if(h>0)if(f=a*l-o,u=a*o-l,m=r*h,f>=0)if(u>=-m)if(u<=m){let _=1/h;f*=_,u*=_,d=f*(f+a*u+2*o)+u*(a*f+u+2*l)+c}else u=r,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*l)+c;else u=-r,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*l)+c;else u<=-m?(f=Math.max(0,-(-a*r+o)),u=f>0?-r:Math.min(Math.max(-r,-l),r),d=-f*f+u*(u+2*l)+c):u<=m?(f=0,u=Math.min(Math.max(-r,-l),r),d=u*(u+2*l)+c):(f=Math.max(0,-(a*r+o)),u=f>0?r:Math.min(Math.max(-r,-l),r),d=-f*f+u*(u+2*l)+c);else u=a>0?-r:r,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Th).addScaledVector(Ao,u),d}intersectSphere(e,t){if(e.radius<0)return null;Pi.subVectors(e.center,this.origin);let i=Pi.dot(this.direction),s=Pi.dot(Pi)-i*i,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return c>=0?(i=(e.min.x-u.x)*c,s=(e.max.x-u.x)*c):(i=(e.max.x-u.x)*c,s=(e.min.x-u.x)*c),h>=0?(r=(e.min.y-u.y)*h,a=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,a=(e.min.y-u.y)*h),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(e.min.z-u.z)*f,l=(e.max.z-u.z)*f):(o=(e.max.z-u.z)*f,l=(e.min.z-u.z)*f),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Pi)!==null}intersectTriangle(e,t,i,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,f=e.x-a.x,u=e.y-a.y,d=e.z-a.z,m=t.x-a.x,_=t.y-a.y,p=t.z-a.z,g=i.x-a.x,M=i.y-a.y,E=i.z-a.z,y=Math.abs(l),v=Math.abs(c),b=Math.abs(h),x,T,P,S,A,D,C,w,R,L,B,z;if(y>=v&&y>=b?(P=l,D=f,R=m,z=g,l>=0?(x=c,T=h,S=u,A=d,C=_,w=p,L=M,B=E):(x=h,T=c,S=d,A=u,C=p,w=_,L=E,B=M)):v>=b?(P=c,D=u,R=_,z=M,c>=0?(x=h,T=l,S=d,A=f,C=p,w=m,L=E,B=g):(x=l,T=h,S=f,A=d,C=m,w=p,L=g,B=E)):(P=h,D=d,R=p,z=E,h>=0?(x=l,T=c,S=f,A=u,C=m,w=_,L=g,B=M):(x=c,T=l,S=u,A=f,C=_,w=m,L=M,B=g)),P===0)return null;let U=x/P,F=T/P,H=1/P,$=S-U*D,J=A-F*D,V=C-U*R,ee=w-F*R,oe=L-U*z,Te=B-F*z,fe=oe*ee-Te*V,Le=$*Te-J*oe,St=V*J-ee*$;if(s){if(fe<0||Le<0||St<0)return null}else if((fe<0||Le<0||St<0)&&(fe>0||Le>0||St>0))return null;let ze=fe+Le+St;if(ze===0)return null;let tt=H*(fe*D+Le*R+St*z);return(ze>0?tt<0:tt>0)?null:this.at(tt/ze,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},$t=class extends Di{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ri,this.combine=Al,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},cd=new xt,Es=new sl,Co=new is,hd=new W,Po=new W,Io=new W,Lo=new W,wh=new W,No=new W,ud=new W,Do=new W,$e=class extends Gt{constructor(e=new nn,t=new $t){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){No.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],f=r[l];h!==0&&(wh.fromBufferAttribute(f,e),a?No.addScaledVector(wh,h):No.addScaledVector(wh.sub(t),h))}t.add(No)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Co.copy(i.boundingSphere),Co.applyMatrix4(r),Es.copy(e.ray).recast(e.near),!(Co.containsPoint(Es.origin)===!1&&(Es.intersectSphere(Co,hd)===null||Es.origin.distanceToSquared(hd)>(e.far-e.near)**2))&&(cd.copy(r).invert(),Es.copy(e.ray).applyMatrix4(cd),!(i.boundingBox!==null&&Es.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Es)))}_computeIntersections(e,t,i){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,u=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,_=u.length;m<_;m++){let p=u[m],g=a[p.materialIndex],M=Math.max(p.start,d.start),E=Math.min(o.count,Math.min(p.start+p.count,d.start+d.count));for(let y=M,v=E;y<v;y+=3){let b=o.getX(y),x=o.getX(y+1),T=o.getX(y+2);s=Uo(this,g,e,i,c,h,f,b,x,T),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let m=Math.max(0,d.start),_=Math.min(o.count,d.start+d.count);for(let p=m,g=_;p<g;p+=3){let M=o.getX(p),E=o.getX(p+1),y=o.getX(p+2);s=Uo(this,a,e,i,c,h,f,M,E,y),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let m=0,_=u.length;m<_;m++){let p=u[m],g=a[p.materialIndex],M=Math.max(p.start,d.start),E=Math.min(l.count,Math.min(p.start+p.count,d.start+d.count));for(let y=M,v=E;y<v;y+=3){let b=y,x=y+1,T=y+2;s=Uo(this,g,e,i,c,h,f,b,x,T),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let m=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let p=m,g=_;p<g;p+=3){let M=p,E=p+1,y=p+2;s=Uo(this,a,e,i,c,h,f,M,E,y),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}};function Xm(n,e,t,i,s,r,a,o){let l;if(e.side===mn?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,e.side===hs,o),l===null)return null;Do.copy(o),Do.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(Do);return c<t.near||c>t.far?null:{distance:c,point:Do.clone(),object:n}}function Uo(n,e,t,i,s,r,a,o,l,c){n.getVertexPosition(o,Po),n.getVertexPosition(l,Io),n.getVertexPosition(c,Lo);let h=Xm(n,e,t,i,Po,Io,Lo,ud);if(h){let f=new W;Ii.getBarycoord(ud,Po,Io,Lo,f),s&&(h.uv=Ii.getInterpolatedAttribute(s,o,l,c,f,new he)),r&&(h.uv1=Ii.getInterpolatedAttribute(r,o,l,c,f,new he)),a&&(h.normal=Ii.getInterpolatedAttribute(a,o,l,c,f,new W),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new W,materialIndex:0};Ii.getNormal(Po,Io,Lo,u.normal),h.face=u,h.barycoord=f}return h}var ma=class extends In{constructor(e=null,t=1,i=1,s,r,a,o,l,c=cn,h=cn,f,u){super(null,a,o,l,c,h,s,r,f,u),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var mi=class extends Sn{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},ar=new xt,fd=new xt,Fo=[],dd=new pi,qm=new xt,Jr=new $e,jr=new is,zn=class extends $e{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new mi(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,qm)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new pi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,ar),dd.copy(e.boundingBox).applyMatrix4(ar),this.boundingBox.union(dd)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new is),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,ar),jr.copy(e.boundingSphere).applyMatrix4(ar),this.boundingSphere.union(jr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,a=e*r+1;for(let o=0;o<i.length;o++)i[o]=s[a+o]}raycast(e,t){let i=this.matrixWorld,s=this.count;if(Jr.geometry=this.geometry,Jr.material=this.material,Jr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),jr.copy(this.boundingSphere),jr.applyMatrix4(i),e.ray.intersectsSphere(jr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ar),fd.multiplyMatrices(i,ar),Jr.matrixWorld=fd,Jr.raycast(e,Fo);for(let a=0,o=Fo.length;a<o;a++){let l=Fo[a];l.instanceId=r,l.object=this,t.push(l)}Fo.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new mi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new ma(new Float32Array(s*this.count),s,this.count,Dl,Kn));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<i.length;c++)a+=i[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;return r[l]=o,r.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},As=new is,Ym=new he(.5,.5),Oo=new W,ss=class{constructor(e=new si,t=new si,i=new si,s=new si,r=new si,a=new si){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Yn,i=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],f=r[5],u=r[6],d=r[7],m=r[8],_=r[9],p=r[10],g=r[11],M=r[12],E=r[13],y=r[14],v=r[15];if(s[0].setComponents(c-a,d-h,g-m,v-M).normalize(),s[1].setComponents(c+a,d+h,g+m,v+M).normalize(),s[2].setComponents(c+o,d+f,g+_,v+E).normalize(),s[3].setComponents(c-o,d-f,g-_,v-E).normalize(),i)s[4].setComponents(l,u,p,y).normalize(),s[5].setComponents(c-l,d-u,g-p,v-y).normalize();else if(s[4].setComponents(c-l,d-u,g-p,v-y).normalize(),t===Yn)s[5].setComponents(c+l,d+u,g+p,v+y).normalize();else if(t===dr)s[5].setComponents(l,u,p,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),As.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),As.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(As)}intersectsSprite(e){As.center.set(0,0,0);let t=Ym.distanceTo(e.center);return As.radius=.7071067811865476+t,As.applyMatrix4(e.matrixWorld),this.intersectsSphere(As)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(Oo.x=s.normal.x>0?e.max.x:e.min.x,Oo.y=s.normal.y>0?e.max.y:e.min.y,Oo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Oo)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},pd=new xt,rl=class n{constructor(){this.coordinateSystem=Yn,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,i=this._frustums;for(let s=0;s<t.length;s++){let r=t[s];pd.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),i[s]===void 0&&(i[s]=new ss),i[s].setFromProjectionMatrix(pd,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,i=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new ss),t[s].copy(i[s]);return this._count=e._count,this}clone(){return new n().copy(this)}};var ga=class extends In{constructor(e=[],t=Fs,i,s,r,a,o,l,c,h){super(e,t,i,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Ui=class extends In{constructor(e,t,i,s,r,a,o,l,c){super(e,t,i,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Fi=class extends In{constructor(e,t,i=oi,s,r,a,o=cn,l=cn,c,h=Ni,f=1){if(h!==Ni&&h!==ki)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:e,height:t,depth:f};super(u,s,r,a,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new mr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},xa=class extends Fi{constructor(e,t=oi,i=Fs,s,r,a=cn,o=cn,l,c=Ni){let h={width:e,height:e,depth:1},f=[h,h,h,h,h,h];super(e,e,t,i,s,r,a,o,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},ya=class extends In{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},pn=class n extends nn{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],f=[],u=0,d=0;m("z","y","x",-1,-1,i,t,e,a,r,0),m("z","y","x",1,-1,i,t,-e,a,r,1),m("x","z","y",1,1,e,i,t,s,a,2),m("x","z","y",1,-1,e,i,-t,s,a,3),m("x","y","z",1,-1,e,t,i,s,r,4),m("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new dt(c,3)),this.setAttribute("normal",new dt(h,3)),this.setAttribute("uv",new dt(f,2));function m(_,p,g,M,E,y,v,b,x,T,P){let S=y/x,A=v/T,D=y/2,C=v/2,w=b/2,R=x+1,L=T+1,B=0,z=0,U=new W;for(let F=0;F<L;F++){let H=F*A-C;for(let $=0;$<R;$++){let J=$*S-D;U[_]=J*M,U[p]=H*E,U[g]=w,c.push(U.x,U.y,U.z),U[_]=0,U[p]=0,U[g]=b>0?1:-1,h.push(U.x,U.y,U.z),f.push($/x),f.push(1-F/T),B+=1}}for(let F=0;F<T;F++)for(let H=0;H<x;H++){let $=u+H+R*F,J=u+H+R*(F+1),V=u+(H+1)+R*(F+1),ee=u+(H+1)+R*F;l.push($,J,ee),l.push(J,V,ee),z+=6}o.addGroup(d,z,P),d+=z,u+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var _a=class n extends nn{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);let r=[],a=[],o=[],l=[],c=new W,h=new he;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let f=0,u=3;f<=t;f++,u+=3){let d=i+f/t*s;c.x=e*Math.cos(d),c.y=e*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[u]/e+1)/2,h.y=(a[u+1]/e+1)/2,l.push(h.x,h.y)}for(let f=1;f<=t;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new dt(a,3)),this.setAttribute("normal",new dt(o,3)),this.setAttribute("uv",new dt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}},rs=class n extends nn{constructor(e=1,t=1,i=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],f=[],u=[],d=[],m=0,_=[],p=i/2,g=0;M(),a===!1&&(e>0&&E(!0),t>0&&E(!1)),this.setIndex(h),this.setAttribute("position",new dt(f,3)),this.setAttribute("normal",new dt(u,3)),this.setAttribute("uv",new dt(d,2));function M(){let y=new W,v=new W,b=0,x=(t-e)/i;for(let T=0;T<=r;T++){let P=[],S=T/r,A=S*(t-e)+e;for(let D=0;D<=s;D++){let C=D/s,w=C*l+o,R=Math.sin(w),L=Math.cos(w);v.x=A*R,v.y=-S*i+p,v.z=A*L,f.push(v.x,v.y,v.z),y.set(R,x,L).normalize(),u.push(y.x,y.y,y.z),d.push(C,1-S),P.push(m++)}_.push(P)}for(let T=0;T<s;T++)for(let P=0;P<r;P++){let S=_[P][T],A=_[P+1][T],D=_[P+1][T+1],C=_[P][T+1];(e>0||P!==0)&&(h.push(S,A,C),b+=3),(t>0||P!==r-1)&&(h.push(A,D,C),b+=3)}c.addGroup(g,b,0),g+=b}function E(y){let v=m,b=new he,x=new W,T=0,P=y===!0?e:t,S=y===!0?1:-1;for(let D=1;D<=s;D++)f.push(0,p*S,0),u.push(0,S,0),d.push(.5,.5),m++;let A=m;for(let D=0;D<=s;D++){let w=D/s*l+o,R=Math.cos(w),L=Math.sin(w);x.x=P*L,x.y=p*S,x.z=P*R,f.push(x.x,x.y,x.z),u.push(0,S,0),b.x=R*.5+.5,b.y=L*.5*S+.5,d.push(b.x,b.y),m++}for(let D=0;D<s;D++){let C=v+D,w=A+D;y===!0?h.push(w,w+1,C):h.push(w+1,w,C),T+=3}c.addGroup(g,T,y===!0?1:2),g+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Cs=class n extends rs{constructor(e=1,t=1,i=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,i,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},va=class n extends nn{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};let r=[],a=[];o(s),c(i),h(),this.setAttribute("position",new dt(r,3)),this.setAttribute("normal",new dt(r.slice(),3)),this.setAttribute("uv",new dt(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(M){let E=new W,y=new W,v=new W;for(let b=0;b<t.length;b+=3)d(t[b+0],E),d(t[b+1],y),d(t[b+2],v),l(E,y,v,M)}function l(M,E,y,v){let b=v+1,x=[];for(let T=0;T<=b;T++){x[T]=[];let P=M.clone().lerp(y,T/b),S=E.clone().lerp(y,T/b),A=b-T;for(let D=0;D<=A;D++)D===0&&T===b?x[T][D]=P:x[T][D]=P.clone().lerp(S,D/A)}for(let T=0;T<b;T++)for(let P=0;P<2*(b-T)-1;P++){let S=Math.floor(P/2);P%2===0?(u(x[T][S+1]),u(x[T+1][S]),u(x[T][S])):(u(x[T][S+1]),u(x[T+1][S+1]),u(x[T+1][S]))}}function c(M){let E=new W;for(let y=0;y<r.length;y+=3)E.x=r[y+0],E.y=r[y+1],E.z=r[y+2],E.normalize().multiplyScalar(M),r[y+0]=E.x,r[y+1]=E.y,r[y+2]=E.z}function h(){let M=new W;for(let E=0;E<r.length;E+=3){M.x=r[E+0],M.y=r[E+1],M.z=r[E+2];let y=p(M)/2/Math.PI+.5,v=g(M)/Math.PI+.5;a.push(y,1-v)}m(),f()}function f(){for(let M=0;M<a.length;M+=6){let E=a[M+0],y=a[M+2],v=a[M+4],b=Math.max(E,y,v),x=Math.min(E,y,v);b>.9&&x<.1&&(E<.2&&(a[M+0]+=1),y<.2&&(a[M+2]+=1),v<.2&&(a[M+4]+=1))}}function u(M){r.push(M.x,M.y,M.z)}function d(M,E){let y=M*3;E.x=e[y+0],E.y=e[y+1],E.z=e[y+2]}function m(){let M=new W,E=new W,y=new W,v=new W,b=new he,x=new he,T=new he;for(let P=0,S=0;P<r.length;P+=9,S+=6){M.set(r[P+0],r[P+1],r[P+2]),E.set(r[P+3],r[P+4],r[P+5]),y.set(r[P+6],r[P+7],r[P+8]),b.set(a[S+0],a[S+1]),x.set(a[S+2],a[S+3]),T.set(a[S+4],a[S+5]),v.copy(M).add(E).add(y).divideScalar(3);let A=p(v);_(b,S+0,M,A),_(x,S+2,E,A),_(T,S+4,y,A)}}function _(M,E,y,v){v<0&&M.x===1&&(a[E]=M.x-1),y.x===0&&y.z===0&&(a[E]=v/2/Math.PI+.5)}function p(M){return Math.atan2(M.z,-M.x)}function g(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.detail)}};var Hn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){He("Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),s=0,r=i.length,a;t?a=t:a=e*i[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=i[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===a)return s/(r-1);let h=i[s],u=i[s+1]-h,d=(a-h)/u;return(s+d)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new he:new W);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new W,s=[],r=[],a=[],o=new W,l=new xt;for(let d=0;d<=e;d++){let m=d/e;s[d]=this.getTangentAt(m,new W)}r[0]=new W,a[0]=new W;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),f=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),f<=c&&(c=f,i.set(0,1,0)),u<=c&&i.set(0,0,1),o.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(s[d-1],s[d]),o.length()>Number.EPSILON){o.normalize();let m=Math.acos(ot(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(o,m))}a[d].crossVectors(s[d],r[d])}if(t===!0){let d=Math.acos(ot(r[0].dot(r[e]),-1,1));d/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(d=-d);for(let m=1;m<=e;m++)r[m].applyMatrix4(l.makeRotationAxis(s[m],d*m)),a[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}},_r=class extends Hn{constructor(e=0,t=0,i=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new he){let i=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),u=l-this.aX,d=c-this.aY;l=u*h-d*f+this.aX,c=u*f+d*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},al=class extends _r{constructor(e,t,i,s,r,a){super(e,t,i,i,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function fu(){let n=0,e=0,t=0,i=0;function s(r,a,o,l){n=r,e=o,t=-3*r+3*a-2*o-l,i=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,f){let u=(a-r)/c-(o-r)/(c+h)+(o-a)/h,d=(o-a)/h-(l-a)/(h+f)+(l-o)/f;u*=h,d*=h,s(a,o,u,d)},calc:function(r){let a=r*r,o=a*r;return n+e*r+t*a+i*o}}}var md=new W,gd=new W,Eh=new fu,Ah=new fu,Rh=new fu,ol=class extends Hn{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new W){let i=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(gd.subVectors(s[0],s[1]).add(s[0]),c=gd);let f=s[o%r],u=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(md.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=md),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,m=Math.pow(c.distanceToSquared(f),d),_=Math.pow(f.distanceToSquared(u),d),p=Math.pow(u.distanceToSquared(h),d);_<1e-4&&(_=1),m<1e-4&&(m=_),p<1e-4&&(p=_),Eh.initNonuniformCatmullRom(c.x,f.x,u.x,h.x,m,_,p),Ah.initNonuniformCatmullRom(c.y,f.y,u.y,h.y,m,_,p),Rh.initNonuniformCatmullRom(c.z,f.z,u.z,h.z,m,_,p)}else this.curveType==="catmullrom"&&(Eh.initCatmullRom(c.x,f.x,u.x,h.x,this.tension),Ah.initCatmullRom(c.y,f.y,u.y,h.y,this.tension),Rh.initCatmullRom(c.z,f.z,u.z,h.z,this.tension));return i.set(Eh.calc(l),Ah.calc(l),Rh.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new W().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function xd(n,e,t,i,s){let r=(i-e)*.5,a=(s-t)*.5,o=n*n,l=n*o;return(2*t-2*i+r+a)*l+(-3*t+3*i-2*r-a)*o+r*n+t}function $m(n,e){let t=1-n;return t*t*e}function Zm(n,e){return 2*(1-n)*n*e}function Km(n,e){return n*n*e}function ta(n,e,t,i){return $m(n,e)+Zm(n,t)+Km(n,i)}function Jm(n,e){let t=1-n;return t*t*t*e}function jm(n,e){let t=1-n;return 3*t*t*n*e}function Qm(n,e){return 3*(1-n)*n*n*e}function eg(n,e){return n*n*n*e}function na(n,e,t,i,s){return Jm(n,e)+jm(n,t)+Qm(n,i)+eg(n,s)}var Ma=class extends Hn{constructor(e=new he,t=new he,i=new he,s=new he){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new he){let i=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(na(e,s.x,r.x,a.x,o.x),na(e,s.y,r.y,a.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ll=class extends Hn{constructor(e=new W,t=new W,i=new W,s=new W){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new W){let i=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(na(e,s.x,r.x,a.x,o.x),na(e,s.y,r.y,a.y,o.y),na(e,s.z,r.z,a.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ba=class extends Hn{constructor(e=new he,t=new he){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new he){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new he){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},cl=class extends Hn{constructor(e=new W,t=new W){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new W){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new W){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Sa=class extends Hn{constructor(e=new he,t=new he,i=new he){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new he){let i=t,s=this.v0,r=this.v1,a=this.v2;return i.set(ta(e,s.x,r.x,a.x),ta(e,s.y,r.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},hl=class extends Hn{constructor(e=new W,t=new W,i=new W){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new W){let i=t,s=this.v0,r=this.v1,a=this.v2;return i.set(ta(e,s.x,r.x,a.x),ta(e,s.y,r.y,a.y),ta(e,s.z,r.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ta=class extends Hn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new he){let i=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],f=s[a>s.length-3?s.length-1:a+2];return i.set(xd(o,l.x,c.x,h.x,f.x),xd(o,l.y,c.y,h.y,f.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new he().fromArray(s))}return this}},Dh=Object.freeze({__proto__:null,ArcCurve:al,CatmullRomCurve3:ol,CubicBezierCurve:Ma,CubicBezierCurve3:ll,EllipseCurve:_r,LineCurve:ba,LineCurve3:cl,QuadraticBezierCurve:Sa,QuadraticBezierCurve3:hl,SplineCurve:Ta}),ul=class extends Hn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Dh[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let a=s[r]-i,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this.cacheLengths=null,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(new Dh[s.type]().fromJSON(s))}return this.cacheLengths=null,this}},wa=class extends ul{constructor(e){super(),this.type="Path",this.currentPoint=new he,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new ba(this.currentPoint.clone(),new he(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){let r=new Sa(this.currentPoint.clone(),new he(e,t),new he(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,a){let o=new Ma(this.currentPoint.clone(),new he(e,t),new he(i,s),new he(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new Ta(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,i,s,r,a),this}absarc(e,t,i,s,r,a){return this.absellipse(e,t,i,i,s,r,a),this}ellipse(e,t,i,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,i,s,r,a,o,l),this}absellipse(e,t,i,s,r,a,o,l){let c=new _r(e,t,i,s,r,a,o,l);if(this.curves.length>0){let f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},vr=class extends wa{constructor(e){super(e),this.uuid=fs(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(new wa().fromJSON(s))}return this}};function tg(n,e,t=2){let i=e&&e.length,s=i?e[0]*t:n.length,r=pp(n,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(i&&(r=ag(n,e,r,t)),n.length>80*t){o=n[0],l=n[1];let h=o,f=l;for(let u=t;u<s;u+=t){let d=n[u],m=n[u+1];d<o&&(o=d),m<l&&(l=m),d>h&&(h=d),m>f&&(f=m)}c=Math.max(h-o,f-l),c=c!==0?32767/c:0}return Ea(r,a,t,o,l,c,0),a}function pp(n,e,t,i,s){let r;if(s===xg(n,e,t,i)>0)for(let a=e;a<t;a+=i)r=yd(a/i|0,n[a],n[a+1],r);else for(let a=t-i;a>=e;a-=i)r=yd(a/i|0,n[a],n[a+1],r);return r&&Mr(r,r.next)&&(Ra(r),r=r.next),r}function Ps(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(Mr(t,t.next)||Ot(t.prev,t,t.next)===0)){if(Ra(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function Ea(n,e,t,i,s,r,a){if(!n)return;!a&&r&&ug(n,i,s,r);let o=n;for(;n.prev!==n.next;){let l=n.prev,c=n.next;if(r?ig(n,i,s,r):ng(n)){e.push(l.i,n.i,c.i),Ra(n),n=c.next,o=c.next;continue}if(n=c,n===o){a?a===1?(n=sg(Ps(n),e),Ea(n,e,t,i,s,r,2)):a===2&&rg(n,e,t,i,s,r):Ea(Ps(n),e,t,i,s,r,1);break}}}function ng(n){let e=n.prev,t=n,i=n.next;if(Ot(e,t,i)>=0)return!1;let s=e.x,r=t.x,a=i.x,o=e.y,l=t.y,c=i.y,h=Math.min(s,r,a),f=Math.min(o,l,c),u=Math.max(s,r,a),d=Math.max(o,l,c),m=i.next;for(;m!==e;){if(m.x>=h&&m.x<=u&&m.y>=f&&m.y<=d&&Qr(s,o,r,l,a,c,m.x,m.y)&&Ot(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function ig(n,e,t,i){let s=n.prev,r=n,a=n.next;if(Ot(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,f=r.y,u=a.y,d=Math.min(o,l,c),m=Math.min(h,f,u),_=Math.max(o,l,c),p=Math.max(h,f,u),g=Uh(d,m,e,t,i),M=Uh(_,p,e,t,i),E=n.prevZ,y=n.nextZ;for(;E&&E.z>=g&&y&&y.z<=M;){if(E.x>=d&&E.x<=_&&E.y>=m&&E.y<=p&&E!==s&&E!==a&&Qr(o,h,l,f,c,u,E.x,E.y)&&Ot(E.prev,E,E.next)>=0||(E=E.prevZ,y.x>=d&&y.x<=_&&y.y>=m&&y.y<=p&&y!==s&&y!==a&&Qr(o,h,l,f,c,u,y.x,y.y)&&Ot(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;E&&E.z>=g;){if(E.x>=d&&E.x<=_&&E.y>=m&&E.y<=p&&E!==s&&E!==a&&Qr(o,h,l,f,c,u,E.x,E.y)&&Ot(E.prev,E,E.next)>=0)return!1;E=E.prevZ}for(;y&&y.z<=M;){if(y.x>=d&&y.x<=_&&y.y>=m&&y.y<=p&&y!==s&&y!==a&&Qr(o,h,l,f,c,u,y.x,y.y)&&Ot(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function sg(n,e){let t=n;do{let i=t.prev,s=t.next.next;!Mr(i,s)&&gp(i,t,t.next,s)&&Aa(i,s)&&Aa(s,i)&&(e.push(i.i,t.i,s.i),Ra(t),Ra(t.next),t=n=s),t=t.next}while(t!==n);return Ps(t)}function rg(n,e,t,i,s,r){let a=n;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&pg(a,o)){let l=xp(a,o);a=Ps(a,a.next),l=Ps(l,l.next),Ea(a,e,t,i,s,r,0),Ea(l,e,t,i,s,r,0);return}o=o.next}a=a.next}while(a!==n)}function ag(n,e,t,i){let s=[];for(let r=0,a=e.length;r<a;r++){let o=e[r]*i,l=r<a-1?e[r+1]*i:n.length,c=pp(n,o,l,i,!1);c===c.next&&(c.steiner=!0),s.push(dg(c))}s.sort(og);for(let r=0;r<s.length;r++)t=lg(s[r],t);return t}function og(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){let i=(n.next.y-n.y)/(n.next.x-n.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=i-s}return t}function lg(n,e){let t=cg(n,e);if(!t)return e;let i=xp(t,n);return Ps(i,i.next),Ps(t,t.next)}function cg(n,e){let t=e,i=n.x,s=n.y,r=-1/0,a;if(Mr(n,t))return t;do{if(Mr(n,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let f=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=i&&f>r&&(r=f,a=t.x<t.next.x?t:t.next,f===i))return a}t=t.next}while(t!==e);if(!a)return null;let o=a,l=a.x,c=a.y,h=1/0;t=a;do{if(i>=t.x&&t.x>=l&&i!==t.x&&mp(s<c?i:r,s,l,c,s<c?r:i,s,t.x,t.y)){let f=Math.abs(s-t.y)/(i-t.x);Aa(t,n)&&(f<h||f===h&&(t.x>a.x||t.x===a.x&&hg(a,t)))&&(a=t,h=f)}t=t.next}while(t!==o);return a}function hg(n,e){return Ot(n.prev,n,e.prev)<0&&Ot(e.next,n,n.next)<0}function ug(n,e,t,i){let s=n;do s.z===0&&(s.z=Uh(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,fg(s)}function fg(n){let e,t=1;do{let i=n,s;n=null;let r=null;for(e=0;i;){e++;let a=i,o=0;for(let c=0;c<t&&(o++,a=a.nextZ,!!a);c++);let l=t;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||i.z<=a.z)?(s=i,i=i.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=a}r.nextZ=null,t*=2}while(e>1);return n}function Uh(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function dg(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function mp(n,e,t,i,s,r,a,o){return(s-a)*(e-o)>=(n-a)*(r-o)&&(n-a)*(i-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(i-o)}function Qr(n,e,t,i,s,r,a,o){return!(n===a&&e===o)&&mp(n,e,t,i,s,r,a,o)}function pg(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!mg(n,e)&&(Aa(n,e)&&Aa(e,n)&&gg(n,e)&&(Ot(n.prev,n,e.prev)||Ot(n,e.prev,e))||Mr(n,e)&&Ot(n.prev,n,n.next)>0&&Ot(e.prev,e,e.next)>0)}function Ot(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function Mr(n,e){return n.x===e.x&&n.y===e.y}function gp(n,e,t,i){let s=ko(Ot(n,e,t)),r=ko(Ot(n,e,i)),a=ko(Ot(t,i,n)),o=ko(Ot(t,i,e));return!!(s!==r&&a!==o||s===0&&Bo(n,t,e)||r===0&&Bo(n,i,e)||a===0&&Bo(t,n,i)||o===0&&Bo(t,e,i))}function Bo(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function ko(n){return n>0?1:n<0?-1:0}function mg(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&gp(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function Aa(n,e){return Ot(n.prev,n,n.next)<0?Ot(n,e,n.next)>=0&&Ot(n,n.prev,e)>=0:Ot(n,e,n.prev)<0||Ot(n,n.next,e)<0}function gg(n,e){let t=n,i=!1,s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function xp(n,e){let t=Fh(n.i,n.x,n.y),i=Fh(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function yd(n,e,t,i){let s=Fh(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function Ra(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Fh(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function xg(n,e,t,i){let s=0;for(let r=e,a=t-i;r<t;r+=i)s+=(n[a]-n[r])*(n[r+1]+n[a+1]),a=r;return s}var Oh=class{static triangulate(e,t,i=2){return tg(e,t,i)}},Rs=class n{static area(e){let t=e.length,i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return n.area(e)<0}static triangulateShape(e,t){let i=[],s=[],r=[];_d(e),vd(i,e);let a=e.length;t.forEach(_d);for(let l=0;l<t.length;l++)s.push(a),a+=t[l].length,vd(i,t[l]);let o=Oh.triangulate(i,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function _d(n){let e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function vd(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}var Ca=class n extends nn{constructor(e=new vr([new he(.5,.5),new he(-.5,.5),new he(-.5,-.5),new he(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,s=[],r=[];for(let o=0,l=e.length;o<l;o++){let c=e[o];a(c)}this.setAttribute("position",new dt(s,3)),this.setAttribute("uv",new dt(r,2)),this.computeVertexNormals();function a(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,f=t.depth!==void 0?t.depth:1,u=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,m=t.bevelSize!==void 0?t.bevelSize:d-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,p=t.bevelSegments!==void 0?t.bevelSegments:3,g=t.extrudePath,M=t.UVGenerator!==void 0?t.UVGenerator:yg,E,y=!1,v,b,x,T;if(g){E=g.getSpacedPoints(h),y=!0,u=!1;let ae=g.isCatmullRomCurve3?g.closed:!1;v=g.computeFrenetFrames(h,ae),b=new W,x=new W,T=new W}u||(p=0,d=0,m=0,_=0);let P=o.extractPoints(c),S=P.shape,A=P.holes;if(!Rs.isClockWise(S)){S=S.reverse();for(let ae=0,ge=A.length;ae<ge;ae++){let de=A[ae];Rs.isClockWise(de)&&(A[ae]=de.reverse())}}function C(ae){let de=10000000000000001e-36,Ce=ae[0];for(let Se=1;Se<=ae.length;Se++){let Je=Se%ae.length,Fe=ae[Je],at=Fe.x-Ce.x,lt=Fe.y-Ce.y,gt=at*at+lt*lt,Y=Math.max(Math.abs(Fe.x),Math.abs(Fe.y),Math.abs(Ce.x),Math.abs(Ce.y)),Jt=de*Y*Y;if(gt<=Jt){ae.splice(Je,1),Se--;continue}Ce=Fe}}C(S),A.forEach(C);let w=A.length,R=S;for(let ae=0;ae<w;ae++){let ge=A[ae];S=S.concat(ge)}function L(ae,ge,de){return ge||Ge("ExtrudeGeometry: vec does not exist"),ae.clone().addScaledVector(ge,de)}let B=S.length;function z(ae,ge,de){let Ce,Se,Je,Fe=ae.x-ge.x,at=ae.y-ge.y,lt=de.x-ae.x,gt=de.y-ae.y,Y=Fe*Fe+at*at,Jt=Fe*gt-at*lt;if(Math.abs(Jt)>Number.EPSILON){let it=Math.sqrt(Y),Tt=Math.sqrt(lt*lt+gt*gt),ve=ge.x-at/it,Vt=ge.y+Fe/it,ke=de.x-gt/Tt,Xe=de.y+lt/Tt,k=((ke-ve)*gt-(Xe-Vt)*lt)/(Fe*gt-at*lt);Ce=ve+Fe*k-ae.x,Se=Vt+at*k-ae.y;let I=Ce*Ce+Se*Se;if(I<=2)return new he(Ce,Se);Je=Math.sqrt(I/2)}else{let it=!1;Fe>Number.EPSILON?lt>Number.EPSILON&&(it=!0):Fe<-Number.EPSILON?lt<-Number.EPSILON&&(it=!0):Math.sign(at)===Math.sign(gt)&&(it=!0),it?(Ce=-at,Se=Fe,Je=Math.sqrt(Y)):(Ce=Fe,Se=at,Je=Math.sqrt(Y/2))}return new he(Ce/Je,Se/Je)}let U=[];for(let ae=0,ge=R.length,de=ge-1,Ce=ae+1;ae<ge;ae++,de++,Ce++)de===ge&&(de=0),Ce===ge&&(Ce=0),U[ae]=z(R[ae],R[de],R[Ce]);let F=[],H,$=U.concat();for(let ae=0,ge=w;ae<ge;ae++){let de=A[ae];H=[];for(let Ce=0,Se=de.length,Je=Se-1,Fe=Ce+1;Ce<Se;Ce++,Je++,Fe++)Je===Se&&(Je=0),Fe===Se&&(Fe=0),H[Ce]=z(de[Ce],de[Je],de[Fe]);F.push(H),$=$.concat(H)}let J;if(p===0)J=Rs.triangulateShape(R,A);else{let ae=[],ge=[];for(let de=0;de<p;de++){let Ce=de/p,Se=d*Math.cos(Ce*Math.PI/2),Je=m*Math.sin(Ce*Math.PI/2)+_;for(let Fe=0,at=R.length;Fe<at;Fe++){let lt=L(R[Fe],U[Fe],Je);Le(lt.x,lt.y,-Se),Ce===0&&ae.push(lt)}for(let Fe=0,at=w;Fe<at;Fe++){let lt=A[Fe];H=F[Fe];let gt=[];for(let Y=0,Jt=lt.length;Y<Jt;Y++){let it=L(lt[Y],H[Y],Je);Le(it.x,it.y,-Se),Ce===0&&gt.push(it)}Ce===0&&ge.push(gt)}}J=Rs.triangulateShape(ae,ge)}let V=J.length,ee=m+_;for(let ae=0;ae<B;ae++){let ge=u?L(S[ae],$[ae],ee):S[ae];y?(x.copy(v.normals[0]).multiplyScalar(ge.x),b.copy(v.binormals[0]).multiplyScalar(ge.y),T.copy(E[0]).add(x).add(b),Le(T.x,T.y,T.z)):Le(ge.x,ge.y,0)}for(let ae=1;ae<=h;ae++)for(let ge=0;ge<B;ge++){let de=u?L(S[ge],$[ge],ee):S[ge];y?(x.copy(v.normals[ae]).multiplyScalar(de.x),b.copy(v.binormals[ae]).multiplyScalar(de.y),T.copy(E[ae]).add(x).add(b),Le(T.x,T.y,T.z)):Le(de.x,de.y,f/h*ae)}for(let ae=p-1;ae>=0;ae--){let ge=ae/p,de=d*Math.cos(ge*Math.PI/2),Ce=m*Math.sin(ge*Math.PI/2)+_;for(let Se=0,Je=R.length;Se<Je;Se++){let Fe=L(R[Se],U[Se],Ce);Le(Fe.x,Fe.y,f+de)}for(let Se=0,Je=A.length;Se<Je;Se++){let Fe=A[Se];H=F[Se];for(let at=0,lt=Fe.length;at<lt;at++){let gt=L(Fe[at],H[at],Ce);y?Le(gt.x,gt.y+E[h-1].y,E[h-1].x+de):Le(gt.x,gt.y,f+de)}}}oe(),Te();function oe(){let ae=s.length/3;if(u){let ge=0,de=B*ge;for(let Ce=0;Ce<V;Ce++){let Se=J[Ce];St(Se[2]+de,Se[1]+de,Se[0]+de)}ge=h+p*2,de=B*ge;for(let Ce=0;Ce<V;Ce++){let Se=J[Ce];St(Se[0]+de,Se[1]+de,Se[2]+de)}}else{for(let ge=0;ge<V;ge++){let de=J[ge];St(de[2],de[1],de[0])}for(let ge=0;ge<V;ge++){let de=J[ge];St(de[0]+B*h,de[1]+B*h,de[2]+B*h)}}i.addGroup(ae,s.length/3-ae,0)}function Te(){let ae=s.length/3,ge=0;fe(R,ge),ge+=R.length;for(let de=0,Ce=A.length;de<Ce;de++){let Se=A[de];fe(Se,ge),ge+=Se.length}i.addGroup(ae,s.length/3-ae,1)}function fe(ae,ge){let de=ae.length;for(;--de>=0;){let Ce=de,Se=de-1;Se<0&&(Se=ae.length-1);for(let Je=0,Fe=h+p*2;Je<Fe;Je++){let at=B*Je,lt=B*(Je+1),gt=ge+Ce+at,Y=ge+Se+at,Jt=ge+Se+lt,it=ge+Ce+lt;ze(gt,Y,Jt,it)}}}function Le(ae,ge,de){l.push(ae),l.push(ge),l.push(de)}function St(ae,ge,de){tt(ae),tt(ge),tt(de);let Ce=s.length/3,Se=M.generateTopUV(i,s,Ce-3,Ce-2,Ce-1);rt(Se[0]),rt(Se[1]),rt(Se[2])}function ze(ae,ge,de,Ce){tt(ae),tt(ge),tt(Ce),tt(ge),tt(de),tt(Ce);let Se=s.length/3,Je=M.generateSideWallUV(i,s,Se-6,Se-3,Se-2,Se-1);rt(Je[0]),rt(Je[1]),rt(Je[3]),rt(Je[1]),rt(Je[2]),rt(Je[3])}function tt(ae){s.push(l[ae*3+0]),s.push(l[ae*3+1]),s.push(l[ae*3+2])}function rt(ae){r.push(ae.x),r.push(ae.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return _g(t,i,e)}static fromJSON(e,t){let i=[];for(let r=0,a=e.shapes.length;r<a;r++){let o=t[e.shapes[r]];i.push(o)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Dh[s.type]().fromJSON(s)),new n(i,e.options)}},yg={generateTopUV:function(n,e,t,i,s){let r=e[t*3],a=e[t*3+1],o=e[i*3],l=e[i*3+1],c=e[s*3],h=e[s*3+1];return[new he(r,a),new he(o,l),new he(c,h)]},generateSideWallUV:function(n,e,t,i,s,r){let a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[i*3],h=e[i*3+1],f=e[i*3+2],u=e[s*3],d=e[s*3+1],m=e[s*3+2],_=e[r*3],p=e[r*3+1],g=e[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new he(a,1-l),new he(c,1-f),new he(u,1-m),new he(_,1-g)]:[new he(o,1-l),new he(h,1-f),new he(d,1-m),new he(p,1-g)]}};function _g(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){let r=n[i];t.shapes.push(r.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var as=class n extends va{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}};var Is=class n extends va{constructor(e=1,t=0){let i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},$n=class n extends nn{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(i),l=Math.floor(s),c=o+1,h=l+1,f=e/o,u=t/l,d=[],m=[],_=[],p=[];for(let g=0;g<h;g++){let M=g*u-a;for(let E=0;E<c;E++){let y=E*f-r;m.push(y,-M,0),_.push(0,0,1),p.push(E/o),p.push(1-g/l)}}for(let g=0;g<l;g++)for(let M=0;M<o;M++){let E=M+c*g,y=M+c*(g+1),v=M+1+c*(g+1),b=M+1+c*g;d.push(E,y,b),d.push(y,v,b)}this.setIndex(d),this.setAttribute("position",new dt(m,3)),this.setAttribute("normal",new dt(_,3)),this.setAttribute("uv",new dt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}};var Ls=class n extends nn{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(a+o,Math.PI),c=0,h=[],f=new W,u=new W,d=[],m=[],_=[],p=[];for(let g=0;g<=i;g++){let M=[],E=g/i,y=a+E*o,v=e*Math.cos(y),b=Math.sqrt(e*e-v*v),x=0;g===0&&a===0?x=.5/t:g===i&&l===Math.PI&&(x=-.5/t);for(let T=0;T<=t;T++){let P=T/t,S=s+P*r;f.x=-b*Math.cos(S),f.y=v,f.z=b*Math.sin(S),m.push(f.x,f.y,f.z),u.copy(f).normalize(),_.push(u.x,u.y,u.z),p.push(P+x,1-E),M.push(c++)}h.push(M)}for(let g=0;g<i;g++)for(let M=0;M<t;M++){let E=h[g][M+1],y=h[g][M],v=h[g+1][M],b=h[g+1][M+1];(g!==0||a>0)&&d.push(E,y,b),(g!==i-1||l<Math.PI)&&d.push(y,v,b)}this.setIndex(d),this.setAttribute("position",new dt(m,3)),this.setAttribute("normal",new dt(_,3)),this.setAttribute("uv",new dt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Pa=class n extends nn{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},i=Math.floor(i),s=Math.floor(s);let l=[],c=[],h=[],f=[],u=new W,d=new W,m=new W;for(let _=0;_<=i;_++){let p=a+_/i*o;for(let g=0;g<=s;g++){let M=g/s*r;d.x=(e+t*Math.cos(p))*Math.cos(M),d.y=(e+t*Math.cos(p))*Math.sin(M),d.z=t*Math.sin(p),c.push(d.x,d.y,d.z),u.x=e*Math.cos(M),u.y=e*Math.sin(M),m.subVectors(d,u).normalize(),h.push(m.x,m.y,m.z),f.push(g/s),f.push(_/i)}}for(let _=1;_<=i;_++)for(let p=1;p<=s;p++){let g=(s+1)*_+p-1,M=(s+1)*(_-1)+p-1,E=(s+1)*(_-1)+p,y=(s+1)*_+p;l.push(g,M,y),l.push(M,E,y)}this.setIndex(l),this.setAttribute("position",new dt(c,3)),this.setAttribute("normal",new dt(h,3)),this.setAttribute("uv",new dt(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};function Bs(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];if(Md(s))s.isRenderTargetTexture?(He("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(Md(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][i]=r}else e[t][i]=s.slice();else e[t][i]=s}}return e}function wn(n){let e={};for(let t=0;t<n.length;t++){let i=Bs(n[t]);for(let s in i)e[s]=i[s]}return e}function Md(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function vg(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function du(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ut.workingColorSpace}var yp={clone:Bs,merge:wn},Mg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,bg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Zn=class extends Di{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Mg,this.fragmentShader=bg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Bs(e.uniforms),this.uniformsGroups=vg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=t[s.value]||null;break;case"c":this.uniforms[i].value=new Ve().setHex(s.value);break;case"v2":this.uniforms[i].value=new he().fromArray(s.value);break;case"v3":this.uniforms[i].value=new W().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Lt().fromArray(s.value);break;case"m3":this.uniforms[i].value=new Ye().fromArray(s.value);break;case"m4":this.uniforms[i].value=new xt().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},fl=class extends Zn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var Tn=class extends Di{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=pc,this.normalScale=new he(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ri,this.combine=Al,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},dl=class extends Di{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Jd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},pl=class extends Di{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function or(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function zo(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var os=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];e:{t:{let a;n:{i:if(!(e<s)){for(let o=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=s,s=t[++i],e<s)break t}a=t.length;break n}if(!(e>=r)){let o=t[1];e<o&&(i=2,r=o);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break t}a=i,i=0;break n}break e}for(;i<a;){let o=i+a>>>1;e<t[o]?a=o:i=o+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=i[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},ml=class extends os{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ih,endingEnd:Ih}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Lh:r=e,o=2*t-i;break;case Nh:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Lh:a=e,l=2*i-t;break;case Nh:a=1,l=i+s[1]-s[0];break;default:a=e-1,l=t}let c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,f=this._offsetNext,u=this._weightPrev,d=this._weightNext,m=(i-t)/(s-t),_=m*m,p=_*m,g=-u*p+2*u*_-u*m,M=(1+u)*p+(-1.5-2*u)*_+(-.5+u)*m+1,E=(-1-d)*p+(1.5+d)*_+.5*m,y=d*p-d*_;for(let v=0;v!==o;++v)r[v]=g*a[h+v]+M*a[c+v]+E*a[l+v]+y*a[f+v];return r}},gl=class extends os{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(i-t)/(s-t),f=1-h;for(let u=0;u!==o;++u)r[u]=a[c+u]*f+a[l+u]*h;return r}},xl=class extends os{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},yl=class extends os{interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this.inTangents,f=this.outTangents;if(!h||!f){let m=(i-t)/(s-t),_=1-m;for(let p=0;p!==o;++p)r[p]=a[c+p]*_+a[l+p]*m;return r}let u=o*2,d=e-1;for(let m=0;m!==o;++m){let _=a[c+m],p=a[l+m],g=d*u+m*2,M=f[g],E=f[g+1],y=e*u+m*2,v=h[y],b=h[y+1],x=Tg(i,t,M,v,s);r[m]=_p(x,_,E,b,p)}return r}};function _p(n,e,t,i,s){let r=1-n;return r*r*r*e+3*r*r*n*t+3*r*n*n*i+n*n*n*s}function Sg(n,e,t,i,s){let r=1-n;return 3*r*r*(t-e)+6*r*n*(i-t)+3*n*n*(s-i)}function Tg(n,e,t,i,s){let r=(n-e)/(s-e);for(let a=0;a<8;a++){let o=_p(r,e,t,i,s)-n;if(Math.abs(o)<1e-10)break;let l=Sg(r,e,t,i,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var Vn=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=or(t,this.TimeBufferType),this.values=or(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:or(e.times,Array),values:or(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s),zo(e.settings)&&(i.settings={inTangents:or(e.settings.inTangents,Array),outTangents:or(e.settings.outTangents,Array)})}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new xl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new gl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ml(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new yl(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case ia:t=this.InterpolantFactoryMethodDiscrete;break;case Qo:t=this.InterpolantFactoryMethodLinear;break;case Go:t=this.InterpolantFactoryMethodSmooth;break;case Ph:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return He("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ia;case this.InterpolantFactoryMethodLinear:return Qo;case this.InterpolantFactoryMethodSmooth:return Go;case this.InterpolantFactoryMethodBezier:return Ph}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e;zo(this.settings)&&(bd(this.settings.inTangents,e),bd(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e;zo(this.settings)&&(Sd(this.settings.inTangents,e),Sd(this.settings.outTangents,e))}return this}trim(e,t){let i=this.times,s=i.length,r=0,a=s-1;for(;r!==s&&i[r]<e;)++r;for(;a!==-1&&i[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Ge("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(Ge("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){Ge("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){Ge("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&Am(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Ge("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Go,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(s)l=!0;else{let f=o*i,u=f-i,d=f+i;for(let m=0;m!==i;++m){let _=t[f+m];if(_!==t[u+m]||_!==t[d+m]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let f=o*i,u=a*i;for(let d=0;d!==i;++d)t[u+d]=t[f+d]}++a}}if(r>0){e[a]=e[r];for(let o=r*i,l=a*i,c=0;c!==i;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,zo(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function bd(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]+=e}function Sd(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]*=e}Vn.prototype.ValueTypeName="";Vn.prototype.TimeBufferType=Float32Array;Vn.prototype.ValueBufferType=Float32Array;Vn.prototype.DefaultInterpolation=Qo;var ls=class extends Vn{constructor(e,t,i){super(e,t,i)}};ls.prototype.ValueTypeName="bool";ls.prototype.ValueBufferType=Array;ls.prototype.DefaultInterpolation=ia;ls.prototype.InterpolantFactoryMethodLinear=void 0;ls.prototype.InterpolantFactoryMethodSmooth=void 0;var _l=class extends Vn{constructor(e,t,i,s){super(e,t,i,s)}};_l.prototype.ValueTypeName="color";var vl=class extends Vn{constructor(e,t,i,s){super(e,t,i,s)}};vl.prototype.ValueTypeName="number";var Ml=class extends os{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-t)/(s-t),c=e*o;for(let h=c+o;c!==h;c+=4)di.slerpFlat(r,0,a,c-o,a,c,l);return r}},Ia=class extends Vn{constructor(e,t,i,s){super(e,t,i,s)}InterpolantFactoryMethodLinear(e){return new Ml(this.times,this.values,this.getValueSize(),e)}};Ia.prototype.ValueTypeName="quaternion";Ia.prototype.InterpolantFactoryMethodSmooth=void 0;var cs=class extends Vn{constructor(e,t,i){super(e,t,i)}};cs.prototype.ValueTypeName="string";cs.prototype.ValueBufferType=Array;cs.prototype.DefaultInterpolation=ia;cs.prototype.InterpolantFactoryMethodLinear=void 0;cs.prototype.InterpolantFactoryMethodSmooth=void 0;var bl=class extends Vn{constructor(e,t,i,s){super(e,t,i,s)}};bl.prototype.ValueTypeName="vector";var Sl=class{constructor(e,t,i){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,f){return c.push(h,f),this},this.removeHandler=function(h){let f=c.indexOf(h);return f!==-1&&c.splice(f,2),this},this.getHandler=function(h){for(let f=0,u=c.length;f<u;f+=2){let d=c[f],m=c[f+1];if(d.global&&(d.lastIndex=0),d.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},vp=new Sl,Tl=class{constructor(e){this.manager=e!==void 0?e:vp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};Tl.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ns=class extends Gt{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ve(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},gi=class extends Ns{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Gt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ve(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Ch=new xt,Td=new W,wd=new W,La=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new he(512,512),this.mapType=Ln,this.map=null,this.mapPass=null,this.matrix=new xt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ss,this._frameExtents=new he(1,1),this._viewportCount=1,this._viewports=[new Lt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Td.setFromMatrixPosition(e.matrixWorld),t.position.copy(Td),wd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(wd),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,s){Ch.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(Ch,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===dr||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(Ch)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Ho=new W,Vo=new di,hi=new W,Na=class extends Gt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new xt,this.projectionMatrix=new xt,this.projectionMatrixInverse=new xt,this.coordinateSystem=Yn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ho,Vo,hi),hi.x===1&&hi.y===1&&hi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ho,Vo,hi.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(Ho,Vo,hi),hi.x===1&&hi.y===1&&hi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ho,Vo,hi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ns=new W,Ed=new he,Ad=new he,tn=class extends Na{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=el*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(sh*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return el*2*Math.atan(Math.tan(sh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){ns.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ns.x,ns.y).multiplyScalar(-e/ns.z),ns.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ns.x,ns.y).multiplyScalar(-e/ns.z)}getViewSize(e,t){return this.getViewBounds(e,Ed,Ad),t.subVectors(Ad,Ed)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(sh*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var Bh=class extends La{constructor(){super(new tn(90,1,.5,500)),this.isPointLightShadow=!0}},br=class extends Ns{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Bh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Oi=class extends Na{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,a=i+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},kh=class extends La{constructor(){super(new Oi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},xi=class extends Ns{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Gt.DEFAULT_UP),this.updateMatrix(),this.target=new Gt,this.shadow=new kh}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},Da=class extends Ns{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var lr=-90,cr=1,Sr=class extends Gt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new tn(lr,cr,e,t);s.layers=this.layers,this.add(s);let r=new tn(lr,cr,e,t);r.layers=this.layers,this.add(r);let a=new tn(lr,cr,e,t);a.layers=this.layers,this.add(a);let o=new tn(lr,cr,e,t);o.layers=this.layers,this.add(o);let l=new tn(lr,cr,e,t);l.layers=this.layers,this.add(l);let c=new tn(lr,cr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===Yn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===dr)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,f=e.getRenderTarget(),u=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let _=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.mipmapsAutoUpdate=_,e.setRenderTarget(i,5,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(f,u,d),e.xr.enabled=m,i.texture.needsPMREMUpdate=!0}},wl=class extends tn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}};var pu="\\[\\]\\.:\\/",wg=new RegExp("["+pu+"]","g"),mu="[^"+pu+"]",Eg="[^"+pu.replace("\\.","")+"]",Ag=/((?:WC+[\/:])*)/.source.replace("WC",mu),Rg=/(WCOD+)?/.source.replace("WCOD",Eg),Cg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",mu),Pg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",mu),Ig=new RegExp("^"+Ag+Rg+Cg+Pg+"$"),Lg=["material","materials","bones","map"],zh=class{constructor(e,t,i){let s=i||Ct.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Ct=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(wg,"")}static parseTrackName(e){let t=Ig.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);Lg.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=i(o.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){He("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){Ge("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ge("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ge("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ge("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ge("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){Ge("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){Ge("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;Ge("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Ge("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ge("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ct.Composite=zh;Ct.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ct.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ct.prototype.GetterByBindingType=[Ct.prototype._getValue_direct,Ct.prototype._getValue_array,Ct.prototype._getValue_arrayElement,Ct.prototype._getValue_toArray];Ct.prototype.SetterByBindingTypeAndVersioning=[[Ct.prototype._setValue_direct,Ct.prototype._setValue_direct_setNeedsUpdate,Ct.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ct.prototype._setValue_array,Ct.prototype._setValue_array_setNeedsUpdate,Ct.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ct.prototype._setValue_arrayElement,Ct.prototype._setValue_arrayElement_setNeedsUpdate,Ct.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ct.prototype._setValue_fromArray,Ct.prototype._setValue_fromArray_setNeedsUpdate,Ct.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var V1=new Float32Array(1);var Hh=class{static{this.prototype.isMatrix2=!0}constructor(e,t,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=s,this}};function gu(n,e,t,i){let s=Ng(i);switch(t){case ru:return n*e;case Dl:return n*e/s.components*s.byteLength;case Ul:return n*e/s.components*s.byteLength;case us:return n*e*2/s.components*s.byteLength;case Fl:return n*e*2/s.components*s.byteLength;case au:return n*e*3/s.components*s.byteLength;case ci:return n*e*4/s.components*s.byteLength;case Ol:return n*e*4/s.components*s.byteLength;case Ba:case ka:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case za:case Ha:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case kl:case Hl:return Math.max(n,16)*Math.max(e,8)/4;case Bl:case zl:return Math.max(n,8)*Math.max(e,8)/2;case Vl:case Gl:case Xl:case ql:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Wl:case Va:case Yl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case $l:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Zl:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Kl:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Jl:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case jl:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Ql:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case ec:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case tc:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case nc:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case ic:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case sc:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case rc:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case ac:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case oc:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case lc:case cc:case hc:return Math.ceil(n/4)*Math.ceil(e/4)*16;case uc:case fc:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Ga:case dc:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Ng(n){switch(n){case Ln:case tu:return{byteLength:1,components:1};case Ar:case nu:case li:return{byteLength:2,components:1};case Ll:case Nl:return{byteLength:2,components:4};case oi:case Il:case Kn:return{byteLength:4,components:1};case iu:case su:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?He("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function Vp(){let n=null,e=!1,t=null,i=null;function s(r,a){i=n.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function kg(n){let e=new WeakMap;function t(o,l){let c=o.array,h=o.usage,f=c.byteLength,u=n.createBuffer();n.bindBuffer(l,u),n.bufferData(l,c,h),o.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,l,c){let h=l.array,f=l.updateRanges;if(n.bindBuffer(c,o),f.length===0)n.bufferSubData(c,0,h);else{f.sort((d,m)=>d.start-m.start);let u=0;for(let d=1;d<f.length;d++){let m=f[u],_=f[d];_.start<=m.start+m.count+1?m.count=Math.max(m.count,_.start+_.count-m.start):(++u,f[u]=_)}f.length=u+1;for(let d=0,m=f.length;d<m;d++){let _=f[d];n.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var zg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Hg=`#ifdef USE_ALPHAHASH
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
#endif`,Vg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Gg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Wg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Xg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,qg=`#ifdef USE_AOMAP
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
#endif`,Yg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,$g=`#ifdef USE_BATCHING
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
#endif`,Zg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Kg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Jg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,jg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Qg=`#ifdef USE_IRIDESCENCE
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
#endif`,ex=`#ifdef USE_BUMPMAP
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
#endif`,tx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,nx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ix=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,sx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,rx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,ax=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,ox=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,lx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,cx=`#define PI 3.141592653589793
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
} // validated`,hx=`vec3 transformedNormal = objectNormal;
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
#endif`,ux=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,fx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,dx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,px=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,mx="gl_FragColor = linearToOutputTexel( gl_FragColor );",gx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,xx=`#ifdef USE_ENVMAP
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
#endif`,yx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,_x=`#ifdef USE_ENVMAP
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
#endif`,vx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Mx=`#ifdef USE_ENVMAP
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
#endif`,bx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Sx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Tx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,wx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ex=`#ifdef USE_GRADIENTMAP
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
}`,Ax=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Rx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Cx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Px=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Ix=`#ifdef USE_ENVMAP
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
#endif`,Lx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Nx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Dx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ux=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Fx=`PhysicalMaterial material;
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
#endif`,Ox=`uniform sampler2D dfgLUT;
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
}`,Bx=`
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
#endif`,kx=`#if defined( RE_IndirectDiffuse )
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
#endif`,zx=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Hx=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,Vx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Gx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Wx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Xx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,qx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Yx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,$x=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Zx=`#if defined( USE_POINTS_UV )
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
#endif`,Kx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Jx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,jx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Qx=`#if defined( USE_MORPHCOLORS )
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
#endif`,ey=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ty=`#ifdef USE_MORPHTARGETS
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
#endif`,ny=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,iy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,sy=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ry=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ay=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,oy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,ly=`#ifdef USE_NORMALMAP
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
#endif`,cy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,hy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,uy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,fy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,dy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,py=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,my=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,gy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,xy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,yy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,_y=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,vy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,My=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,by=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Sy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Ty=`float getShadowMask() {
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
}`,wy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ey=`#ifdef USE_SKINNING
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
#endif`,Ay=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ry=`#ifdef USE_SKINNING
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
#endif`,Cy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Py=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Iy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ly=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ny=`#ifdef USE_TRANSMISSION
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
#endif`,Dy=`#ifdef USE_TRANSMISSION
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
#endif`,Uy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Fy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Oy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,By=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,ky=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,zy=`uniform sampler2D t2D;
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
}`,Hy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Vy=`uniform float backgroundBlurriness;
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
}`,Gy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Wy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xy=`#include <common>
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
}`,qy=`#if DEPTH_PACKING == 3200
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
}`,Yy=`#define DISTANCE
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
}`,$y=`#define DISTANCE
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
}`,Zy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ky=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jy=`uniform float scale;
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
}`,jy=`uniform vec3 diffuse;
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
}`,Qy=`#include <common>
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
}`,e_=`uniform vec3 diffuse;
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
}`,t_=`#define LAMBERT
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
}`,n_=`#define LAMBERT
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
}`,i_=`#define MATCAP
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
}`,s_=`#define MATCAP
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
}`,r_=`#define NORMAL
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
}`,a_=`#define NORMAL
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
}`,o_=`#define PHONG
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
}`,l_=`#define PHONG
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
}`,c_=`#define STANDARD
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
}`,h_=`#define STANDARD
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
}`,u_=`#define TOON
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
}`,f_=`#define TOON
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
}`,d_=`uniform float size;
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
}`,p_=`uniform vec3 diffuse;
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
}`,m_=`#include <common>
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
}`,g_=`uniform vec3 color;
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
}`,x_=`uniform float rotation;
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
}`,y_=`uniform vec3 diffuse;
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
}`,et={alphahash_fragment:zg,alphahash_pars_fragment:Hg,alphamap_fragment:Vg,alphamap_pars_fragment:Gg,alphatest_fragment:Wg,alphatest_pars_fragment:Xg,aomap_fragment:qg,aomap_pars_fragment:Yg,batching_pars_vertex:$g,batching_vertex:Zg,begin_vertex:Kg,beginnormal_vertex:Jg,bsdfs:jg,iridescence_fragment:Qg,bumpmap_pars_fragment:ex,clipping_planes_fragment:tx,clipping_planes_pars_fragment:nx,clipping_planes_pars_vertex:ix,clipping_planes_vertex:sx,color_fragment:rx,color_pars_fragment:ax,color_pars_vertex:ox,color_vertex:lx,common:cx,defaultnormal_vertex:hx,displacementmap_pars_vertex:ux,displacementmap_vertex:fx,emissivemap_fragment:dx,emissivemap_pars_fragment:px,colorspace_fragment:mx,colorspace_pars_fragment:gx,envmap_fragment:xx,envmap_common_pars_fragment:yx,envmap_pars_fragment:_x,envmap_pars_vertex:vx,envmap_physical_pars_fragment:Ix,envmap_vertex:Mx,fog_vertex:bx,fog_pars_vertex:Sx,fog_fragment:Tx,fog_pars_fragment:wx,gradientmap_pars_fragment:Ex,lightmap_pars_fragment:Ax,lights_lambert_fragment:Rx,lights_lambert_pars_fragment:Cx,lights_pars_begin:Px,lights_toon_fragment:Lx,lights_toon_pars_fragment:Nx,lights_phong_fragment:Dx,lights_phong_pars_fragment:Ux,lights_physical_fragment:Fx,lights_physical_pars_fragment:Ox,lights_fragment_begin:Bx,lights_fragment_maps:kx,lights_fragment_end:zx,lightprobes_pars_fragment:Hx,logdepthbuf_fragment:Vx,logdepthbuf_pars_fragment:Gx,logdepthbuf_pars_vertex:Wx,logdepthbuf_vertex:Xx,map_fragment:qx,map_pars_fragment:Yx,map_particle_fragment:$x,map_particle_pars_fragment:Zx,metalnessmap_fragment:Kx,metalnessmap_pars_fragment:Jx,morphinstance_vertex:jx,morphcolor_vertex:Qx,morphnormal_vertex:ey,morphtarget_pars_vertex:ty,morphtarget_vertex:ny,normal_fragment_begin:iy,normal_fragment_maps:sy,normal_pars_fragment:ry,normal_pars_vertex:ay,normal_vertex:oy,normalmap_pars_fragment:ly,clearcoat_normal_fragment_begin:cy,clearcoat_normal_fragment_maps:hy,clearcoat_pars_fragment:uy,iridescence_pars_fragment:fy,opaque_fragment:dy,packing:py,premultiplied_alpha_fragment:my,project_vertex:gy,dithering_fragment:xy,dithering_pars_fragment:yy,roughnessmap_fragment:_y,roughnessmap_pars_fragment:vy,shadowmap_pars_fragment:My,shadowmap_pars_vertex:by,shadowmap_vertex:Sy,shadowmask_pars_fragment:Ty,skinbase_vertex:wy,skinning_pars_vertex:Ey,skinning_vertex:Ay,skinnormal_vertex:Ry,specularmap_fragment:Cy,specularmap_pars_fragment:Py,tonemapping_fragment:Iy,tonemapping_pars_fragment:Ly,transmission_fragment:Ny,transmission_pars_fragment:Dy,uv_pars_fragment:Uy,uv_pars_vertex:Fy,uv_vertex:Oy,worldpos_vertex:By,background_vert:ky,background_frag:zy,backgroundCube_vert:Hy,backgroundCube_frag:Vy,cube_vert:Gy,cube_frag:Wy,depth_vert:Xy,depth_frag:qy,distance_vert:Yy,distance_frag:$y,equirect_vert:Zy,equirect_frag:Ky,linedashed_vert:Jy,linedashed_frag:jy,meshbasic_vert:Qy,meshbasic_frag:e_,meshlambert_vert:t_,meshlambert_frag:n_,meshmatcap_vert:i_,meshmatcap_frag:s_,meshnormal_vert:r_,meshnormal_frag:a_,meshphong_vert:o_,meshphong_frag:l_,meshphysical_vert:c_,meshphysical_frag:h_,meshtoon_vert:u_,meshtoon_frag:f_,points_vert:d_,points_frag:p_,shadow_vert:m_,shadow_frag:g_,sprite_vert:x_,sprite_frag:y_},Ae={common:{diffuse:{value:new Ve(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ye}},envmap:{envMap:{value:null},envMapRotation:{value:new Ye},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ye},normalScale:{value:new he(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ve(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Ve(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0},uvTransform:{value:new Ye}},sprite:{diffuse:{value:new Ve(16777215)},opacity:{value:1},center:{value:new he(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}}},Mi={basic:{uniforms:wn([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.fog]),vertexShader:et.meshbasic_vert,fragmentShader:et.meshbasic_frag},lambert:{uniforms:wn([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new Ve(0)},envMapIntensity:{value:1}}]),vertexShader:et.meshlambert_vert,fragmentShader:et.meshlambert_frag},phong:{uniforms:wn([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new Ve(0)},specular:{value:new Ve(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:et.meshphong_vert,fragmentShader:et.meshphong_frag},standard:{uniforms:wn([Ae.common,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.roughnessmap,Ae.metalnessmap,Ae.fog,Ae.lights,{emissive:{value:new Ve(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag},toon:{uniforms:wn([Ae.common,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.gradientmap,Ae.fog,Ae.lights,{emissive:{value:new Ve(0)}}]),vertexShader:et.meshtoon_vert,fragmentShader:et.meshtoon_frag},matcap:{uniforms:wn([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,{matcap:{value:null}}]),vertexShader:et.meshmatcap_vert,fragmentShader:et.meshmatcap_frag},points:{uniforms:wn([Ae.points,Ae.fog]),vertexShader:et.points_vert,fragmentShader:et.points_frag},dashed:{uniforms:wn([Ae.common,Ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:et.linedashed_vert,fragmentShader:et.linedashed_frag},depth:{uniforms:wn([Ae.common,Ae.displacementmap]),vertexShader:et.depth_vert,fragmentShader:et.depth_frag},normal:{uniforms:wn([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,{opacity:{value:1}}]),vertexShader:et.meshnormal_vert,fragmentShader:et.meshnormal_frag},sprite:{uniforms:wn([Ae.sprite,Ae.fog]),vertexShader:et.sprite_vert,fragmentShader:et.sprite_frag},background:{uniforms:{uvTransform:{value:new Ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:et.background_vert,fragmentShader:et.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ye}},vertexShader:et.backgroundCube_vert,fragmentShader:et.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:et.cube_vert,fragmentShader:et.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:et.equirect_vert,fragmentShader:et.equirect_frag},distance:{uniforms:wn([Ae.common,Ae.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:et.distance_vert,fragmentShader:et.distance_frag},shadow:{uniforms:wn([Ae.lights,Ae.fog,{color:{value:new Ve(0)},opacity:{value:1}}]),vertexShader:et.shadow_vert,fragmentShader:et.shadow_frag}};Mi.physical={uniforms:wn([Mi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ye},clearcoatNormalScale:{value:new he(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ye},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Ye},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ye},sheen:{value:0},sheenColor:{value:new Ve(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ye},transmissionSamplerSize:{value:new he},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ye},attenuationDistance:{value:0},attenuationColor:{value:new Ve(0)},specularColor:{value:new Ve(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ye},anisotropyVector:{value:new he},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ye}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag};var gc={r:0,b:0,g:0},__=new xt,Gp=new Ye;Gp.set(-1,0,0,0,1,0,0,0,1);function v_(n,e,t,i,s,r){let a=new Ve(0),o=s===!0?0:1,l,c,h=null,f=0,u=null;function d(M){let E=M.isScene===!0?M.background:null;if(E&&E.isTexture){let y=M.backgroundBlurriness>0;E=e.get(E,y)}return E}function m(M){let E=!1,y=d(M);y===null?p(a,o):y&&y.isColor&&(p(y,1),E=!0);let v=n.xr.getEnvironmentBlendMode();v==="additive"?t.buffers.color.setClear(0,0,0,1,r):v==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||E)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function _(M,E){let y=d(E);y&&y.isCubeTexture?(c===void 0&&(c=new $e(new pn(1,1,1),new Zn({name:"BackgroundCubeMaterial",uniforms:Bs(Mi.backgroundCube.uniforms),vertexShader:Mi.backgroundCube.vertexShader,fragmentShader:Mi.backgroundCube.fragmentShader,side:mn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(v,b,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(__.makeRotationFromEuler(E.backgroundRotation)).transpose(),y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Gp),c.material.toneMapped=ut.getTransfer(y.colorSpace)!==vt,(h!==y||f!==y.version||u!==n.toneMapping)&&(c.material.needsUpdate=!0,h=y,f=y.version,u=n.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new $e(new $n(2,2),new Zn({name:"BackgroundMaterial",uniforms:Bs(Mi.background.uniforms),vertexShader:Mi.background.vertexShader,fragmentShader:Mi.background.fragmentShader,side:hs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=ut.getTransfer(y.colorSpace)!==vt,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||f!==y.version||u!==n.toneMapping)&&(l.material.needsUpdate=!0,h=y,f=y.version,u=n.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function p(M,E){M.getRGB(gc,du(n)),t.buffers.color.setClear(gc.r,gc.g,gc.b,E,r)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,E=1){a.set(M),o=E,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(M){o=M,p(a,o)},render:m,addToRenderList:_,dispose:g}}function M_(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=u(null),r=s,a=!1;function o(A,D,C,w,R){let L=!1,B=f(A,w,C,D);r!==B&&(r=B,c(r.object)),L=d(A,w,C,R),L&&m(A,w,C,R),R!==null&&e.update(R,n.ELEMENT_ARRAY_BUFFER),(L||a)&&(a=!1,y(A,D,C,w),R!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(R).buffer))}function l(){return n.createVertexArray()}function c(A){return n.bindVertexArray(A)}function h(A){return n.deleteVertexArray(A)}function f(A,D,C,w){let R=w.wireframe===!0,L=i[D.id];L===void 0&&(L={},i[D.id]=L);let B=A.isInstancedMesh===!0?A.id:0,z=L[B];z===void 0&&(z={},L[B]=z);let U=z[C.id];U===void 0&&(U={},z[C.id]=U);let F=U[R];return F===void 0&&(F=u(l()),U[R]=F),F}function u(A){let D=[],C=[],w=[];for(let R=0;R<t;R++)D[R]=0,C[R]=0,w[R]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:C,attributeDivisors:w,object:A,attributes:{},index:null}}function d(A,D,C,w){let R=r.attributes,L=D.attributes,B=0,z=C.getAttributes();for(let U in z)if(z[U].location>=0){let H=R[U],$=L[U];if($===void 0&&(U==="instanceMatrix"&&A.instanceMatrix&&($=A.instanceMatrix),U==="instanceColor"&&A.instanceColor&&($=A.instanceColor)),H===void 0||H.attribute!==$||$&&H.data!==$.data)return!0;B++}return r.attributesNum!==B||r.index!==w}function m(A,D,C,w){let R={},L=D.attributes,B=0,z=C.getAttributes();for(let U in z)if(z[U].location>=0){let H=L[U];H===void 0&&(U==="instanceMatrix"&&A.instanceMatrix&&(H=A.instanceMatrix),U==="instanceColor"&&A.instanceColor&&(H=A.instanceColor));let $={};$.attribute=H,H&&H.data&&($.data=H.data),R[U]=$,B++}r.attributes=R,r.attributesNum=B,r.index=w}function _(){let A=r.newAttributes;for(let D=0,C=A.length;D<C;D++)A[D]=0}function p(A){g(A,0)}function g(A,D){let C=r.newAttributes,w=r.enabledAttributes,R=r.attributeDivisors;C[A]=1,w[A]===0&&(n.enableVertexAttribArray(A),w[A]=1),R[A]!==D&&(n.vertexAttribDivisor(A,D),R[A]=D)}function M(){let A=r.newAttributes,D=r.enabledAttributes;for(let C=0,w=D.length;C<w;C++)D[C]!==A[C]&&(n.disableVertexAttribArray(C),D[C]=0)}function E(A,D,C,w,R,L,B){B===!0?n.vertexAttribIPointer(A,D,C,R,L):n.vertexAttribPointer(A,D,C,w,R,L)}function y(A,D,C,w){_();let R=w.attributes,L=C.getAttributes(),B=D.defaultAttributeValues;for(let z in L){let U=L[z];if(U.location>=0){let F=R[z];if(F===void 0&&(z==="instanceMatrix"&&A.instanceMatrix&&(F=A.instanceMatrix),z==="instanceColor"&&A.instanceColor&&(F=A.instanceColor)),F!==void 0){let H=F.normalized,$=F.itemSize,J=e.get(F);if(J===void 0)continue;let V=J.buffer,ee=J.type,oe=J.bytesPerElement,Te=ee===n.INT||ee===n.UNSIGNED_INT||F.gpuType===Il;if(F.isInterleavedBufferAttribute){let fe=F.data,Le=fe.isInterleavedBuffer===!0?fe.stride:fe.itemSize,St=F.offset;if(fe.isInstancedInterleavedBuffer||fe.isInstancedBufferAttribute){for(let ze=0;ze<U.locationSize;ze++)g(U.location+ze,fe.meshPerAttribute);A.isInstancedMesh!==!0&&w._maxInstanceCount===void 0&&(w._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let ze=0;ze<U.locationSize;ze++)p(U.location+ze);n.bindBuffer(n.ARRAY_BUFFER,V);for(let ze=0;ze<U.locationSize;ze++)E(U.location+ze,$/U.locationSize,ee,H,Le*oe,(St+$/U.locationSize*ze)*oe,Te)}else{if(F.isInstancedBufferAttribute){for(let fe=0;fe<U.locationSize;fe++)g(U.location+fe,F.meshPerAttribute);A.isInstancedMesh!==!0&&w._maxInstanceCount===void 0&&(w._maxInstanceCount=F.meshPerAttribute*F.count)}else for(let fe=0;fe<U.locationSize;fe++)p(U.location+fe);n.bindBuffer(n.ARRAY_BUFFER,V);for(let fe=0;fe<U.locationSize;fe++)E(U.location+fe,$/U.locationSize,ee,H,$*oe,$/U.locationSize*fe*oe,Te)}}else if(B!==void 0){let H=B[z];if(H!==void 0)switch(H.length){case 2:n.vertexAttrib2fv(U.location,H);break;case 3:n.vertexAttrib3fv(U.location,H);break;case 4:n.vertexAttrib4fv(U.location,H);break;default:n.vertexAttrib1fv(U.location,H)}}}}M()}function v(){P();for(let A in i){let D=i[A];for(let C in D){let w=D[C];for(let R in w){let L=w[R];for(let B in L)h(L[B].object),delete L[B];delete w[R]}}delete i[A]}}function b(A){if(i[A.id]===void 0)return;let D=i[A.id];for(let C in D){let w=D[C];for(let R in w){let L=w[R];for(let B in L)h(L[B].object),delete L[B];delete w[R]}}delete i[A.id]}function x(A){for(let D in i){let C=i[D];for(let w in C){let R=C[w];if(R[A.id]===void 0)continue;let L=R[A.id];for(let B in L)h(L[B].object),delete L[B];delete R[A.id]}}}function T(A){for(let D in i){let C=i[D],w=A.isInstancedMesh===!0?A.id:0,R=C[w];if(R!==void 0){for(let L in R){let B=R[L];for(let z in B)h(B[z].object),delete B[z];delete R[L]}delete C[w],Object.keys(C).length===0&&delete i[D]}}}function P(){S(),a=!0,r!==s&&(r=s,c(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:P,resetDefaultState:S,dispose:v,releaseStatesOfGeometry:b,releaseStatesOfObject:T,releaseStatesOfProgram:x,initAttributes:_,enableAttribute:p,disableUnusedAttributes:M}}function b_(n,e,t){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),t.update(c,i,1)}function a(l,c,h){h!==0&&(n.drawArraysInstanced(i,l,c,h),t.update(c,i,h))}function o(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let u=0;for(let d=0;d<h;d++)u+=c[d];t.update(u,i,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function S_(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let x=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(x){return!(x!==ci&&i.convert(x)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(x){let T=x===li&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(x!==Ln&&x!==Kn&&!T&&i.convert(x)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(x){if(x==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(He("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),u=t.logarithmicDepthBuffer===!0&&f===!1;t.reversedDepthBuffer===!0&&f===!1&&He("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&f===!0&&He("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),g=n.getParameter(n.MAX_VERTEX_ATTRIBS),M=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),E=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),v=n.getParameter(n.MAX_SAMPLES),b=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:p,maxAttributes:g,maxVertexUniforms:M,maxVaryings:E,maxFragmentUniforms:y,maxSamples:v,samples:b}}function T_(n){let e=this,t=null,i=0,s=!1,r=!1,a=new si,o=new Ye,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){let d=f.length!==0||u||i!==0||s;return s=u,i=f.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,u){t=h(f,u,0)},this.setState=function(f,u,d){let m=f.clippingPlanes,_=f.clipIntersection,p=f.clipShadows,g=n.get(f);if(!s||m===null||m.length===0||r&&!p)r?h(null):c();else{let M=r?0:i,E=M*4,y=g.clippingState||null;l.value=y,y=h(m,u,E,d);for(let v=0;v!==E;++v)y[v]=t[v];g.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(f,u,d,m){let _=f!==null?f.length:0,p=null;if(_!==0){if(p=l.value,m!==!0||p===null){let g=d+_*4,M=u.matrixWorldInverse;o.getNormalMatrix(M),(p===null||p.length<g)&&(p=new Float32Array(g));for(let E=0,y=d;E!==_;++E,y+=4)a.copy(f[E]).applyMatrix4(M,o),a.normal.toArray(p,y),p[y+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}var qa=class extends kn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new ga(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new pn(5,5,5),r=new Zn({name:"CubemapFromEquirect",uniforms:Bs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:mn,blending:Ds});r.uniforms.tEquirect.value=t;let a=new $e(s,r),o=t.minFilter;return t.minFilter===Bi&&(t.minFilter=Pn),new Sr(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}},Mp=256,w_=3,E_=20,Wp=256,Xp=16,A_=3,R_=new W,C_=new Ve,yc=class n{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Sr(1,10,null),this._boxMesh=new $e(new pn(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){let{size:a=256,position:o=R_}=r,l=this._renderer;this._setSize(a);let c=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);let f=l.autoClear,u=l.autoClearColor,d=l.autoClearDepth,m=l.autoClearStencil,_=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,_===null&&(e.background=l.getClearColor(C_));let p=new Sr(i,s,h);return p.position.copy(o),p.update(l,e),l.autoClear=f,l.autoClearColor=u,l.autoClearDepth=d,l.autoClearStencil=m,e.background=_,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Tp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Sp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(Mp,cp(e))}_fromTexture(e,t){e.mapping===Fs||e.mapping===Er?this._setSize(e.image.length===0?Mp:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let i=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(i),i}_allocateTarget(){let e=this._cubeSize,t=bp(e,!1,!1),i=Math.log2(e)-w_;for(let s=0;s<=i;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==t||e&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=bp(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,i){let s=this._boxMesh,r=this._cubeCamera;s.material=i,r.renderTarget=e,r.activeMipmapLevel=t;let a=e.width>>t;e.viewport.set(0,0,a,a),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===Fs||e.mapping===Er?(this._cubemapMaterial===null&&(this._cubemapMaterial=Tp()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Sp()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=P_(),this._integrationMaterial=I_());let t=this._cubeSize,i=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/Xp);for(let a=0;a<=i;a++){let o=n.lodToRoughness(a,i);if(a>i-A_)r.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{let l=o>0?Math.log2(t)+.5*Math.log2(6/(Wp*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=l,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=L_());let i=this._blurMaterial,s=i.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,i),s.envMap.value=e.texture,this._renderCube(r,0,i)}};function bp(n,e,t){return new qa(n,{minFilter:Bi,generateMipmaps:e,type:li,colorSpace:sa,depthBuffer:t})}function Ya(n,e,t){return new Zn({name:n,uniforms:e,vertexShader:et.cube_vert,fragmentShader:t,side:mn,blending:Ds,depthTest:!1,depthWrite:!1})}function P_(){return Ya("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Wp}u

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
	`)}function I_(){return Ya("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Xp}},`

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
	`)}function L_(){return Ya("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${E_}
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
	`)}function Sp(){return Ya("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function Tp(){return Ya("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function N_(n){let e=new WeakMap,t=new WeakMap,i=null;function s(u,d=!1){return u==null?null:d?a(u):r(u)}function r(u){if(u&&u.isTexture){let d=u.mapping;if(d===Rl||d===Cl)if(e.has(u)){let m=e.get(u).texture;return o(m,u.mapping)}else{let m=u.image;if(m&&m.height>0){let _=new qa(m.height);return _.fromEquirectangularTexture(n,u),e.set(u,_),u.addEventListener("dispose",c),o(_.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture&&u.isPMREMTexture!==!0){let d=u.mapping,m=d===Rl||d===Cl,_=d===Fs||d===Er;if(m||_){let p=t.get(u),g=p!==void 0?p.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==g)return i===null&&(i=new yc(n)),p=m?i.fromEquirectangular(u,p):i.fromCubemap(u,p),p.texture.pmremVersion=u.pmremVersion,t.set(u,p),p.texture;if(p!==void 0)return p.texture;{let M=u.image;return m&&M&&M.height>0||_&&M&&l(M)?(i===null&&(i=new yc(n)),p=m?i.fromEquirectangular(u):i.fromCubemap(u),p.texture.pmremVersion=u.pmremVersion,t.set(u,p),u.addEventListener("dispose",h),p.texture):null}}}return u}function o(u,d){return d===Rl?u.mapping=Fs:d===Cl&&(u.mapping=Er),u}function l(u){let d=0,m=6;for(let _=0;_<m;_++)u[_]!==void 0&&d++;return d===m}function c(u){let d=u.target;d.removeEventListener("dispose",c);let m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function h(u){let d=u.target;d.removeEventListener("dispose",h);let m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function f(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:f}}function D_(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&ea("WebGLRenderer: "+i+" extension not supported."),s}}}function U_(n,e,t,i){let s={},r=new WeakMap,a=new FinalizationRegistry(m=>delete s[m]);function o(m){l(m.target)}function l(m){m.index!==null&&e.remove(m.index);for(let p in m.attributes)e.remove(m.attributes[p]);m.removeEventListener("dispose",o),delete s[m.id],a.unregister(m);let _=r.get(m);_&&(e.remove(_),r.delete(m)),i.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,t.memory.geometries--}function c(m,_){return s[_.id]!==void 0||(_.addEventListener("dispose",o),s[_.id]=new WeakRef(_),a.register(_,_.id,_),t.memory.geometries++),_}function h(m){let _=m.attributes;for(let p in _)e.update(_[p],n.ARRAY_BUFFER)}function f(m){let _=m.index,p=m.attributes.position,g=0;if(p===void 0)return;let M=_!==null?_.array.length:p.array.length/3-1,E=p.count>=65535?fa:ua,y=new E(Math.ceil(M/3)*6,1),v=y.array;if(_!==null){let x=_.array;g=_.version;for(let T=0,P=0;T<M;T+=3){let S=x[T+0],A=x[T+1],D=x[T+2];v[P++]=S,v[P++]=A,v[P++]=A,v[P++]=D,v[P++]=D,v[P++]=S}}else{g=p.version;for(let x=0,T=0;x<M;x+=3){let P=x+0,S=x+1,A=x+2;v[T++]=P,v[T++]=S,v[T++]=S,v[T++]=A,v[T++]=A,v[T++]=P}}y.version=g;let b=r.get(m);b&&e.remove(b),r.set(m,y)}function u(m){let _=r.get(m);if(_){let p=m.index;p!==null&&_.version<p.version&&f(m)}else f(m);return r.get(m)}function d(){for(let m in s){let _=s[m].deref();_!==void 0&&l(_)}}return{get:c,update:h,getWireframeAttribute:u,dispose:d}}function F_(n,e,t){let i;function s(f){i=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,u){n.drawElements(i,u,r,f*a),t.update(u,i,1)}function c(f,u,d){d!==0&&(n.drawElementsInstanced(i,u,r,f*a,d),t.update(u,i,d))}function h(f,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,r,f,0,d);let _=0;for(let p=0;p<d;p++)_+=u[p];t.update(_,i,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function O_(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(r/3);break;case n.LINES:t.lines+=o*(r/2);break;case n.LINE_STRIP:t.lines+=o*(r-1);break;case n.LINE_LOOP:t.lines+=o*r;break;case n.POINTS:t.points+=o*r;break;default:Ge("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function B_(n,e,t){let i=new WeakMap,s=new Lt;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0,u=i.get(o);if(u===void 0||u.count!==f){let P=function(){x.dispose(),i.delete(o),o.removeEventListener("dispose",P)};u!==void 0&&u.texture.dispose();let d=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],g=o.morphAttributes.normal||[],M=o.morphAttributes.color||[],E=0;d===!0&&(E=1),m===!0&&(E=2),_===!0&&(E=3);let y=o.attributes.position.count*E,v=1;y>e.maxTextureSize&&(v=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let b=new Float32Array(y*v*4*f),x=new la(b,y,v,f);x.type=Kn,x.needsUpdate=!0;let T=E*4;for(let S=0;S<f;S++){let A=p[S],D=g[S],C=M[S],w=y*v*4*S;for(let R=0;R<A.count;R++){let L=R*T;d===!0&&(s.fromBufferAttribute(A,R),b[w+L+0]=s.x,b[w+L+1]=s.y,b[w+L+2]=s.z,b[w+L+3]=0),m===!0&&(s.fromBufferAttribute(D,R),b[w+L+4]=s.x,b[w+L+5]=s.y,b[w+L+6]=s.z,b[w+L+7]=0),_===!0&&(s.fromBufferAttribute(C,R),b[w+L+8]=s.x,b[w+L+9]=s.y,b[w+L+10]=s.z,b[w+L+11]=C.itemSize===4?s.w:1)}}u={count:f,texture:x,size:new he(y,v)},i.set(o,u),o.addEventListener("dispose",P)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let d=0;for(let _=0;_<c.length;_++)d+=c[_];let m=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(n,"morphTargetBaseInfluence",m),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:r}}function k_(n,e,t,i,s){let r=new WeakMap;function a(c){let h=s.render.frame,f=c.geometry,u=e.get(c,f);if(r.get(u)!==h&&(e.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let d=c.skeleton;r.get(d)!==h&&(d.update(),r.set(d,h))}return u}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}var z_={[$h]:"LINEAR_TONE_MAPPING",[Zh]:"REINHARD_TONE_MAPPING",[Kh]:"CINEON_TONE_MAPPING",[Fa]:"ACES_FILMIC_TONE_MAPPING",[jh]:"AGX_TONE_MAPPING",[Qh]:"NEUTRAL_TONE_MAPPING",[Jh]:"CUSTOM_TONE_MAPPING"};function H_(n,e,t,i,s,r){let a=new kn(e,t,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=null,h=new nn;h.setAttribute("position",new dt([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new dt([0,2,0,0,2,0],2));let f=new fl({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new $e(h,f),d=new Oi(-1,1,1,-1,0,1),m=null,_=null,p=!1,g,M=null,E=[],y=!1;this.setSize=function(v,b){a.setSize(v,b),o!==null&&o.setSize(v,b),l!==null&&l.setSize(v,b);for(let x=0;x<E.length;x++){let T=E[x];T.setSize&&T.setSize(v,b)}},this.setEffects=function(v){E=v,y=E.length>0&&E[0].isRenderPass===!0;let b=a.width,x=a.height;E.length>0&&o===null&&(o=new kn(b,x,{type:li,depthBuffer:!1,stencilBuffer:!1}),l=new kn(b,x,{type:li,depthBuffer:!1,stencilBuffer:!1}));let T=s===!0&&E.some(P=>P.needsDepthTexture===!0);T!==(a.depthTexture!==null)&&(T===!0&&c===null&&(c=new Fi(b,x),r===!0&&(c.format=ki,c.type=Os)),a.dispose(),a.depthTexture=T?c:null,a.resolveDepthBuffer=T,a.storeMultisampledDepthBuffer=T);for(let P=0;P<E.length;P++){let S=E[P];S.setSize&&S.setSize(b,x),T&&S.needsDepthTexture===!0&&S.setDepthTexture&&S.setDepthTexture(c)}},this.begin=function(v,b){if(p||v.toneMapping===_i&&E.length===0)return!1;if(M=b,b!==null){let x=b.width,T=b.height;(a.width!==x||a.height!==T)&&this.setSize(x,T)}return y===!1&&v.setRenderTarget(a),g=v.toneMapping,v.toneMapping=_i,!0},this.hasRenderPass=function(){return y},this.end=function(v,b){v.toneMapping=g,p=!0;let x=a,T=o;for(let P=0;P<E.length;P++){let S=E[P];S.enabled!==!1&&(S.render(v,T,x,b),S.needsSwap!==!1&&(x=T,T=T===o?l:o))}if(m!==v.outputColorSpace||_!==v.toneMapping){m=v.outputColorSpace,_=v.toneMapping,f.defines={},ut.getTransfer(m)===vt&&(f.defines.SRGB_TRANSFER="");let P=z_[_];P&&(f.defines[P]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=x.texture,v.setRenderTarget(M),v.render(u,d),M=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),h.dispose(),f.dispose()}}var qp=new In,Yp=new Fi(1,1),$p=new xa(1),Zp=new la,Kp=new il,Jp=new ga,wp=[],Ep=[],Ap=new Float32Array(16),Rp=new Float32Array(9),Cp=new Float32Array(4);function Pr(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=wp[s];if(r===void 0&&(r=new Float32Array(s),wp[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(r,o)}return r}function sn(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function rn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function _c(n,e){let t=Ep[e];t===void 0&&(t=new Int32Array(e),Ep[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function V_(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function G_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(sn(t,e))return;n.uniform2fv(this.addr,e),rn(t,e)}}function W_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(sn(t,e))return;n.uniform3fv(this.addr,e),rn(t,e)}}function X_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(sn(t,e))return;n.uniform4fv(this.addr,e),rn(t,e)}}function q_(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(sn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),rn(t,e)}else{if(sn(t,i))return;Cp.set(i),n.uniformMatrix2fv(this.addr,!1,Cp),rn(t,i)}}function Y_(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(sn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),rn(t,e)}else{if(sn(t,i))return;Rp.set(i),n.uniformMatrix3fv(this.addr,!1,Rp),rn(t,i)}}function $_(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(sn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),rn(t,e)}else{if(sn(t,i))return;Ap.set(i),n.uniformMatrix4fv(this.addr,!1,Ap),rn(t,i)}}function Z_(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function K_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(sn(t,e))return;n.uniform2iv(this.addr,e),rn(t,e)}}function J_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(sn(t,e))return;n.uniform3iv(this.addr,e),rn(t,e)}}function j_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(sn(t,e))return;n.uniform4iv(this.addr,e),rn(t,e)}}function Q_(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function ev(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(sn(t,e))return;n.uniform2uiv(this.addr,e),rn(t,e)}}function tv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(sn(t,e))return;n.uniform3uiv(this.addr,e),rn(t,e)}}function nv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(sn(t,e))return;n.uniform4uiv(this.addr,e),rn(t,e)}}function vc(n){return n.version===0&&(n.compareFunction=cu,n.needsUpdate=!0),n}function iv(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?r=vc(Yp):r=qp,t.setTexture2D(e||r,s)}function sv(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Kp,s)}function rv(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_CUBE_SHADOW?r=vc($p):r=Jp,t.setTextureCube(e||r,s)}function av(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Zp,s)}function ov(n){switch(n){case 5126:return V_;case 35664:return G_;case 35665:return W_;case 35666:return X_;case 35674:return q_;case 35675:return Y_;case 35676:return $_;case 5124:case 35670:return Z_;case 35667:case 35671:return K_;case 35668:case 35672:return J_;case 35669:case 35673:return j_;case 5125:return Q_;case 36294:return ev;case 36295:return tv;case 36296:return nv;case 35678:case 36198:case 36298:case 36306:case 35682:return iv;case 35679:case 36299:case 36307:return sv;case 35680:case 36300:case 36308:case 36293:return rv;case 36289:case 36303:case 36311:case 36292:return av}}function lv(n,e){n.uniform1fv(this.addr,e)}function cv(n,e){let t=Pr(e,this.size,2);n.uniform2fv(this.addr,t)}function hv(n,e){let t=Pr(e,this.size,3);n.uniform3fv(this.addr,t)}function uv(n,e){let t=Pr(e,this.size,4);n.uniform4fv(this.addr,t)}function fv(n,e){let t=Pr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function dv(n,e){let t=Pr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function pv(n,e){let t=Pr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function mv(n,e){n.uniform1iv(this.addr,e)}function gv(n,e){n.uniform2iv(this.addr,e)}function xv(n,e){n.uniform3iv(this.addr,e)}function yv(n,e){n.uniform4iv(this.addr,e)}function _v(n,e){n.uniform1uiv(this.addr,e)}function vv(n,e){n.uniform2uiv(this.addr,e)}function Mv(n,e){n.uniform3uiv(this.addr,e)}function bv(n,e){n.uniform4uiv(this.addr,e)}function Sv(n,e,t){let i=this.cache,s=e.length,r=_c(t,s);sn(i,r)||(n.uniform1iv(this.addr,r),rn(i,r));let a;this.type===n.SAMPLER_2D_SHADOW?a=vc(Yp):a=qp;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function Tv(n,e,t){let i=this.cache,s=e.length,r=_c(t,s);sn(i,r)||(n.uniform1iv(this.addr,r),rn(i,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Kp,r[a])}function wv(n,e,t){let i=this.cache,s=e.length,r=_c(t,s);sn(i,r)||(n.uniform1iv(this.addr,r),rn(i,r));let a;this.type===n.SAMPLER_CUBE_SHADOW?a=vc($p):a=Jp;for(let o=0;o!==s;++o)t.setTextureCube(e[o]||a,r[o])}function Ev(n,e,t){let i=this.cache,s=e.length,r=_c(t,s);sn(i,r)||(n.uniform1iv(this.addr,r),rn(i,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Zp,r[a])}function Av(n){switch(n){case 5126:return lv;case 35664:return cv;case 35665:return hv;case 35666:return uv;case 35674:return fv;case 35675:return dv;case 35676:return pv;case 5124:case 35670:return mv;case 35667:case 35671:return gv;case 35668:case 35672:return xv;case 35669:case 35673:return yv;case 5125:return _v;case 36294:return vv;case 36295:return Mv;case 36296:return bv;case 35678:case 36198:case 36298:case 36306:case 35682:return Sv;case 35679:case 36299:case 36307:return Tv;case 35680:case 36300:case 36308:case 36293:return wv;case 36289:case 36303:case 36311:case 36292:return Ev}}var _u=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=ov(t.type)}},vu=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Av(t.type)}},Mu=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],i)}}},xu=/(\w+)(\])?(\[|\.)?/g;function Pp(n,e){n.seq.push(e),n.map[e.id]=e}function Rv(n,e,t){let i=n.name,s=i.length;for(xu.lastIndex=0;;){let r=xu.exec(i),a=xu.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Pp(t,c===void 0?new _u(o,n,e):new vu(o,n,e));break}else{let f=t.map[o];f===void 0&&(f=new Mu(o),Pp(t,f)),t=f}}}var Cr=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){let o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);Rv(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&i.push(a)}return i}};function Ip(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var Cv=37297,Pv=0;function Iv(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}var Lp=new Ye;function Lv(n){ut._getMatrix(Lp,ut.workingColorSpace,n);let e=`mat3( ${Lp.elements.map(t=>t.toFixed(4))} )`;switch(ut.getTransfer(n)){case ra:return[e,"LinearTransferOETF"];case vt:return[e,"sRGBTransferOETF"];default:return He("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Np(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+Iv(n.getShaderSource(e),o)}else return r}function Nv(n,e){let t=Lv(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var Dv={[$h]:"Linear",[Zh]:"Reinhard",[Kh]:"Cineon",[Fa]:"ACESFilmic",[jh]:"AgX",[Qh]:"Neutral",[Jh]:"Custom"};function Uv(n,e){let t=Dv[e];return t===void 0?(He("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var xc=new W;function Fv(){ut.getLuminanceCoefficients(xc);let n=xc.x.toFixed(4),e=xc.y.toFixed(4),t=xc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ov(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Xa).join(`
`)}function Bv(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function kv(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),a=r.name,o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function Xa(n){return n!==""}function Dp(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function Up(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var zv=/^[ \t]*#include +<([\w\d./]+)>/gm;function bu(n){return n.replace(zv,Hv)}function Hv(n,e){let t=et[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return bu(t)}var Vv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Fp(n){return n.replace(Vv,Gv)}function Gv(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Op(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}var Wv={[Ua]:"SHADOWMAP_TYPE_PCF",[Tr]:"SHADOWMAP_TYPE_VSM"};function Xv(n){return Wv[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var qv={[Er]:"ENVMAP_MODE_REFRACTION"};function Yv(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":qv[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var $v={[Al]:"ENVMAP_BLENDING_MULTIPLY",[$d]:"ENVMAP_BLENDING_MIX",[Zd]:"ENVMAP_BLENDING_ADD"};function Zv(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":$v[n.combine]||"ENVMAP_BLENDING_NONE"}function Kv(n,e,t,i){let s=n.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=Xv(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=Yv(t),f=Zv(t),u=Ov(t),d=Bv(r),m=s.createProgram(),_,p,g=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d].filter(Xa).join(`
`),_.length>0&&(_+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d].filter(Xa).join(`
`),p.length>0&&(p+=`
`)):(_=[Op(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Xa).join(`
`),p=[Op(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==_i?"#define TONE_MAPPING":"",t.toneMapping!==_i?et.tonemapping_pars_fragment:"",t.toneMapping!==_i?Uv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",et.colorspace_pars_fragment,Nv("linearToOutputTexel",t.outputColorSpace),Fv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Xa).join(`
`)),a=bu(a),a=Dp(a,t),a=Up(a,t),o=bu(o),o=Dp(o,t),o=Up(o,t),a=Fp(a),o=Fp(o),t.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,_=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,p=["#define varying in",t.glslVersion===uu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===uu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let M=g+_+a,E=g+p+o,y=Ip(s,s.VERTEX_SHADER,M),v=Ip(s,s.FRAGMENT_SHADER,E);s.attachShader(m,y),s.attachShader(m,v),t.index0AttributeName!==void 0?s.bindAttribLocation(m,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function b(S){if(n.debug.checkShaderErrors){let A=s.getProgramInfoLog(m)||"",D=s.getShaderInfoLog(y)||"",C=s.getShaderInfoLog(v)||"",w=A.trim(),R=D.trim(),L=C.trim(),B=!0,z=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(B=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,m,y,v);else{let U=Np(s,y,"vertex"),F=Np(s,v,"fragment");Ge("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Material Name: `+S.name+`
Material Type: `+S.type+`

Program Info Log: `+w+`
`+U+`
`+F)}else w!==""?He("WebGLProgram: Program Info Log:",w):(R===""||L==="")&&(z=!1);z&&(S.diagnostics={runnable:B,programLog:w,vertexShader:{log:R,prefix:_},fragmentShader:{log:L,prefix:p}})}s.deleteShader(y),s.deleteShader(v),x=new Cr(s,m),T=kv(s,m)}let x;this.getUniforms=function(){return x===void 0&&b(this),x};let T;this.getAttributes=function(){return T===void 0&&b(this),T};let P=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=s.getProgramParameter(m,Cv)),P},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Pv++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=y,this.fragmentShader=v,this}var Jv=0,Su=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Tu(e),t.set(e,i)),i}},Tu=class{constructor(e){this.id=Jv++,this.code=e,this.usedTimes=0}};function jv(n){return n===us||n===Va||n===Ga}function Qv(n,e,t,i,s,r){let a=new ca,o=new Su,l=new Set,c=[],h=new Map,f=i.logarithmicDepthBuffer,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(x){return l.add(x),x===0?"uv":`uv${x}`}function m(x,T,P,S,A,D){let C=S.fog,w=A.geometry,R=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?S.environment:null,L=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,B=e.get(x.envMap||R,L),z=u[x.type],U=i.precision;x.precision!==null&&(U=i.getMaxPrecision(x.precision),U!==x.precision&&He("WebGLProgram.getParameters:",x.precision,"not supported, using",U,"instead."));let F=w.morphAttributes.position||w.morphAttributes.normal||w.morphAttributes.color,H=F!==void 0?F.length:0,$=0;w.morphAttributes.position!==void 0&&($=1),w.morphAttributes.normal!==void 0&&($=2),w.morphAttributes.color!==void 0&&($=3);let J,V,ee,oe;if(z){let Ee=Mi[z];J=Ee.vertexShader,V=Ee.fragmentShader}else{J=x.vertexShader,V=x.fragmentShader;let Ee=o.getVertexShaderStage(x),Mt=o.getFragmentShaderStage(x);o.update(x,Ee,Mt),ee=Ee.id,oe=Mt.id}let Te=n.getRenderTarget(),fe=n.state.buffers.depth.getReversed(),Le=A.isInstancedMesh===!0,St=A.isBatchedMesh===!0,ze=!!x.map,tt=!!x.matcap,rt=!!B,ae=rt&&B.isPMREMTexture===!0,ge=!!x.aoMap,de=!!x.lightMap,Ce=!!x.bumpMap&&x.wireframe===!1,Se=!!x.normalMap,Je=!!x.displacementMap,Fe=!!x.emissiveMap,at=!!x.metalnessMap,lt=!!x.roughnessMap,gt=x.anisotropy>0,Y=x.clearcoat>0,Jt=x.diffuseRoughness>0,it=x.dispersion>0,Tt=x.retroreflectivity>0,ve=x.iridescence>0,Vt=x.sheen>0,ke=x.transmission>0,Xe=gt&&!!x.anisotropyMap,k=Y&&!!x.clearcoatMap,I=Y&&!!x.clearcoatNormalMap,K=Y&&!!x.clearcoatRoughnessMap,le=Jt&&!!x.diffuseRoughnessMap,re=ve&&!!x.iridescenceMap,pe=ve&&!!x.iridescenceThicknessMap,Me=Vt&&!!x.sheenColorMap,ne=Vt&&!!x.sheenRoughnessMap,ie=!!x.specularMap,xe=!!x.specularColorMap,G=!!x.specularIntensityMap,se=ke&&!!x.transmissionMap,te=ke&&!!x.thicknessMap,ye=!!x.gradientMap,ue=!!x.alphaMap,me=x.alphaTest>0,Oe=!!x.alphaHash,Qe=!!x.extensions,ce=_i;x.toneMapped&&(Te===null||Te.isXRRenderTarget===!0)&&(ce=n.toneMapping);let Be=ae?B.isCompressedCubeTexture?B.image[0].mipmaps:B.mipmaps:null,je={shaderID:z,shaderType:x.type,shaderName:x.name,vertexShader:J,fragmentShader:V,defines:x.defines,customVertexShaderID:ee,customFragmentShaderID:oe,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:U,batching:St,batchingColor:St&&A._colorsTexture!==null,instancing:Le,instancingColor:Le&&A.instanceColor!==null,instancingMorph:Le&&A.morphTexture!==null,outputColorSpace:Te===null?n.outputColorSpace:Te.isXRRenderTarget===!0?Te.texture.colorSpace:ut.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:ze,matcap:tt,envMap:rt,envMapMode:rt&&B.mapping,envMapPMREM:ae,envMapMaxLod:ae?Be.length-1:null,envMapSize:ae?Be[0].width:null,aoMap:ge,lightMap:de,bumpMap:Ce,normalMap:Se,displacementMap:Je,emissiveMap:Fe,normalMapObjectSpace:Se&&x.normalMapType===jd,normalMapTangentSpace:Se&&x.normalMapType===pc,packedNormalMap:Se&&x.normalMapType===pc&&jv(x.normalMap.format),metalnessMap:at,roughnessMap:lt,anisotropy:gt,anisotropyMap:Xe,clearcoat:Y,clearcoatMap:k,clearcoatNormalMap:I,clearcoatRoughnessMap:K,diffuseRoughness:Jt,diffuseRoughnessMap:le,dispersion:it,retroreflection:Tt,iridescence:ve,iridescenceMap:re,iridescenceThicknessMap:pe,sheen:Vt,sheenColorMap:Me,sheenRoughnessMap:ne,specularMap:ie,specularColorMap:xe,specularIntensityMap:G,transmission:ke,transmissionMap:se,thicknessMap:te,gradientMap:ye,opaque:x.transparent===!1&&x.blending===wr&&x.alphaToCoverage===!1,alphaMap:ue,alphaTest:me,alphaHash:Oe,combine:x.combine,mapUv:ze&&d(x.map.channel),aoMapUv:ge&&d(x.aoMap.channel),lightMapUv:de&&d(x.lightMap.channel),bumpMapUv:Ce&&d(x.bumpMap.channel),normalMapUv:Se&&d(x.normalMap.channel),displacementMapUv:Je&&d(x.displacementMap.channel),emissiveMapUv:Fe&&d(x.emissiveMap.channel),metalnessMapUv:at&&d(x.metalnessMap.channel),roughnessMapUv:lt&&d(x.roughnessMap.channel),anisotropyMapUv:Xe&&d(x.anisotropyMap.channel),clearcoatMapUv:k&&d(x.clearcoatMap.channel),clearcoatNormalMapUv:I&&d(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:K&&d(x.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:le&&d(x.diffuseRoughnessMap.channel),iridescenceMapUv:re&&d(x.iridescenceMap.channel),iridescenceThicknessMapUv:pe&&d(x.iridescenceThicknessMap.channel),sheenColorMapUv:Me&&d(x.sheenColorMap.channel),sheenRoughnessMapUv:ne&&d(x.sheenRoughnessMap.channel),specularMapUv:ie&&d(x.specularMap.channel),specularColorMapUv:xe&&d(x.specularColorMap.channel),specularIntensityMapUv:G&&d(x.specularIntensityMap.channel),transmissionMapUv:se&&d(x.transmissionMap.channel),thicknessMapUv:te&&d(x.thicknessMap.channel),alphaMapUv:ue&&d(x.alphaMap.channel),vertexTangents:!!w.attributes.tangent&&(Se||gt),vertexNormals:!!w.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!w.attributes.color&&w.attributes.color.itemSize===4,pointsUvs:A.isPoints===!0&&!!w.attributes.uv&&(ze||ue),fog:!!C,useFog:x.fog===!0,fogExp2:!!C&&C.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||w.attributes.normal===void 0&&Se===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:fe,skinning:A.isSkinnedMesh===!0,hasPositionAttribute:w.attributes.position!==void 0,morphTargets:w.morphAttributes.position!==void 0,morphNormals:w.morphAttributes.normal!==void 0,morphColors:w.morphAttributes.color!==void 0,morphTargetsCount:H,morphTextureStride:$,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:D.filter(Ee=>Ee.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:ce,decodeVideoTexture:ze&&x.map.isVideoTexture===!0&&ut.getTransfer(x.map.colorSpace)===vt,decodeVideoTextureEmissive:Fe&&x.emissiveMap.isVideoTexture===!0&&ut.getTransfer(x.emissiveMap.colorSpace)===vt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===yi,flipSided:x.side===mn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Qe&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Qe&&x.extensions.multiDraw===!0||St)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return je.vertexUv1s=l.has(1),je.vertexUv2s=l.has(2),je.vertexUv3s=l.has(3),l.clear(),je}function _(x){let T=[];if(x.shaderID?T.push(x.shaderID):(T.push(x.customVertexShaderID),T.push(x.customFragmentShaderID)),x.defines!==void 0)for(let P in x.defines)T.push(P),T.push(x.defines[P]);return x.isRawShaderMaterial===!1&&(p(T,x),g(T,x),T.push(n.outputColorSpace)),T.push(x.customProgramCacheKey),T.join()}function p(x,T){x.push(T.precision),x.push(T.outputColorSpace),x.push(T.envMapMode),x.push(T.envMapPMREM),x.push(T.envMapMaxLod),x.push(T.envMapSize),x.push(T.mapUv),x.push(T.alphaMapUv),x.push(T.lightMapUv),x.push(T.aoMapUv),x.push(T.bumpMapUv),x.push(T.normalMapUv),x.push(T.displacementMapUv),x.push(T.emissiveMapUv),x.push(T.metalnessMapUv),x.push(T.roughnessMapUv),x.push(T.anisotropyMapUv),x.push(T.clearcoatMapUv),x.push(T.clearcoatNormalMapUv),x.push(T.clearcoatRoughnessMapUv),x.push(T.diffuseRoughnessMapUv),x.push(T.iridescenceMapUv),x.push(T.iridescenceThicknessMapUv),x.push(T.sheenColorMapUv),x.push(T.sheenRoughnessMapUv),x.push(T.specularMapUv),x.push(T.specularColorMapUv),x.push(T.specularIntensityMapUv),x.push(T.transmissionMapUv),x.push(T.thicknessMapUv),x.push(T.combine),x.push(T.fogExp2),x.push(T.sizeAttenuation),x.push(T.morphTargetsCount),x.push(T.numSunLights),x.push(T.numDirLights),x.push(T.numPointLights),x.push(T.numSpotLights),x.push(T.numSpotLightMaps),x.push(T.numHemiLights),x.push(T.numRectAreaLights),x.push(T.numSunLightShadows),x.push(T.numDirLightShadows),x.push(T.numPointLightShadows),x.push(T.numSpotLightShadows),x.push(T.numSpotLightShadowsWithMaps),x.push(T.numLightProbes),x.push(T.numLightProbeGrids),x.push(T.shadowMapType),x.push(T.toneMapping),x.push(T.numClippingPlanes),x.push(T.numClipIntersection),x.push(T.depthPacking)}function g(x,T){a.disableAll(),T.instancing&&a.enable(0),T.instancingColor&&a.enable(1),T.instancingMorph&&a.enable(2),T.matcap&&a.enable(3),T.envMap&&a.enable(4),T.normalMapObjectSpace&&a.enable(5),T.normalMapTangentSpace&&a.enable(6),T.clearcoat&&a.enable(7),T.iridescence&&a.enable(8),T.alphaTest&&a.enable(9),T.vertexColors&&a.enable(10),T.vertexAlphas&&a.enable(11),T.vertexUv1s&&a.enable(12),T.vertexUv2s&&a.enable(13),T.vertexUv3s&&a.enable(14),T.vertexTangents&&a.enable(15),T.anisotropy&&a.enable(16),T.alphaHash&&a.enable(17),T.batching&&a.enable(18),T.dispersion&&a.enable(19),T.retroreflection&&a.enable(24),T.diffuseRoughness&&a.enable(25),T.batchingColor&&a.enable(20),T.gradientMap&&a.enable(21),T.packedNormalMap&&a.enable(22),T.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),T.numLightProbeGrids>0&&a.enable(22),T.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function M(x){let T=u[x.type],P;if(T){let S=Mi[T];P=yp.clone(S.uniforms)}else P=x.uniforms;return P}function E(x,T){let P=h.get(T);return P!==void 0?++P.usedTimes:(P=new Kv(n,T,x,s),c.push(P),h.set(T,P)),P}function y(x){if(--x.usedTimes===0){let T=c.indexOf(x);c[T]=c[c.length-1],c.pop(),h.delete(x.cacheKey),x.destroy()}}function v(x){o.remove(x)}function b(){o.dispose()}return{getParameters:m,getProgramCacheKey:_,getUniforms:M,acquireProgram:E,releaseProgram:y,releaseShaderCache:v,programs:c,dispose:b}}function eM(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,l){n.get(a)[o]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function tM(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function Bp(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function kp(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function a(u){let d=0;return u.isInstancedMesh&&(d+=2),u.isSkinnedMesh&&(d+=1),d}function o(u,d,m,_,p,g){let M=n[e];return M===void 0?(M={id:u.id,object:u,geometry:d,material:m,materialVariant:a(u),groupOrder:_,renderOrder:u.renderOrder,z:p,group:g},n[e]=M):(M.id=u.id,M.object=u,M.geometry=d,M.material=m,M.materialVariant=a(u),M.groupOrder=_,M.renderOrder=u.renderOrder,M.z=p,M.group=g),e++,M}function l(u,d,m,_,p,g,M){M.reversedDepth===!0&&(p=-p);let E=o(u,d,m,_,p,g);m.transmission>0?i.push(E):m.transparent===!0?s.push(E):t.push(E)}function c(u,d,m,_,p,g){let M=o(u,d,m,_,p,g);m.transmission>0?i.unshift(M):m.transparent===!0?s.unshift(M):t.unshift(M)}function h(u,d){t.length>1&&t.sort(u||tM),i.length>1&&i.sort(d||Bp),s.length>1&&s.sort(d||Bp)}function f(){for(let u=e,d=n.length;u<d;u++){let m=n[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:f,sort:h}}function nM(){let n=new WeakMap;function e(i,s){let r=n.get(i),a;return r===void 0?(a=new kp,n.set(i,[a])):s>=r.length?(a=new kp,r.push(a)):a=r[s],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function iM(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new W,color:new Ve};break;case"SpotLight":t={position:new W,direction:new W,color:new Ve,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new W,color:new Ve,distance:0,decay:0};break;case"HemisphereLight":t={direction:new W,skyColor:new Ve,groundColor:new Ve};break;case"RectAreaLight":t={color:new Ve,position:new W,halfWidth:new W,halfHeight:new W};break}return n[e.id]=t,t}}}function sM(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var rM=0;function aM(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function oM(n){let e=new iM,t=sM(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new W);let s=new W,r=new xt,a=new xt;function o(c){let h=0,f=0,u=0;for(let D=0;D<9;D++)i.probe[D].set(0,0,0);let d=0,m=0,_=0,p=0,g=0,M=0,E=0,y=0,v=0,b=0,x=0,T=0,P=0,S=0;c.sort(aM);for(let D=0,C=c.length;D<C;D++){let w=c[D],R=w.color,L=w.intensity,B=w.distance,z=null;if(w.shadow&&w.shadow.map&&(w.shadow.map.texture.format===us?z=w.shadow.map.texture:z=w.shadow.map.depthTexture||w.shadow.map.texture),w.isAmbientLight)h+=R.r*L,f+=R.g*L,u+=R.b*L;else if(w.isLightProbe){for(let U=0;U<9;U++)i.probe[U].addScaledVector(w.sh.coefficients[U],L);S++}else if(w.isSunLight){let U=e.get(w);if(U.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){let F=w.shadow,H=t.get(w);H.shadowIntensity=F.intensity,H.shadowBias=F.bias,H.shadowNormalBias=F.normalBias,H.shadowRadius=F.radius,H.shadowMapSize.copy(F.mapSize).multiply(F.getFrameExtents()),i.sunShadow[m]=H,i.sunShadowMap[m]=z;let $=F.getViewportCount();for(let J=0;J<$;J++)i.sunShadowMatrix[_+J]=F.getMatrix(J),i.sunShadowCascade[_+J]=F._cascadeData[J];_+=$,m++}i.sun[d]=U,d++}else if(w.isDirectionalLight){let U=e.get(w);if(U.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){let F=w.shadow,H=t.get(w);H.shadowIntensity=F.intensity,H.shadowBias=F.bias,H.shadowNormalBias=F.normalBias,H.shadowRadius=F.radius,H.shadowMapSize=F.mapSize,i.directionalShadow[p]=H,i.directionalShadowMap[p]=z,i.directionalShadowMatrix[p]=w.shadow.matrix,v++}i.directional[p]=U,p++}else if(w.isSpotLight){let U=e.get(w);U.position.setFromMatrixPosition(w.matrixWorld),U.color.copy(R).multiplyScalar(L),U.distance=B,U.coneCos=Math.cos(w.angle),U.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),U.decay=w.decay,i.spot[M]=U;let F=w.shadow;if(w.map&&(i.spotLightMap[T]=w.map,T++,F.updateMatrices(w),w.castShadow&&P++),i.spotLightMatrix[M]=F.matrix,w.castShadow){let H=t.get(w);H.shadowIntensity=F.intensity,H.shadowBias=F.bias,H.shadowNormalBias=F.normalBias,H.shadowRadius=F.radius,H.shadowMapSize=F.mapSize,i.spotShadow[M]=H,i.spotShadowMap[M]=z,x++}M++}else if(w.isRectAreaLight){let U=e.get(w);U.color.copy(R).multiplyScalar(L),U.halfWidth.set(w.width*.5,0,0),U.halfHeight.set(0,w.height*.5,0),i.rectArea[E]=U,E++}else if(w.isPointLight){let U=e.get(w);if(U.color.copy(w.color).multiplyScalar(w.intensity),U.distance=w.distance,U.decay=w.decay,w.castShadow){let F=w.shadow,H=t.get(w);H.shadowIntensity=F.intensity,H.shadowBias=F.bias,H.shadowNormalBias=F.normalBias,H.shadowRadius=F.radius,H.shadowMapSize=F.mapSize,H.shadowCameraNear=F.camera.near,H.shadowCameraFar=F.camera.far,i.pointShadow[g]=H,i.pointShadowMap[g]=z,i.pointShadowMatrix[g]=w.shadow.matrix,b++}i.point[g]=U,g++}else if(w.isHemisphereLight){let U=e.get(w);U.skyColor.copy(w.color).multiplyScalar(L),U.groundColor.copy(w.groundColor).multiplyScalar(L),i.hemi[y]=U,y++}}E>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ae.LTC_FLOAT_1,i.rectAreaLTC2=Ae.LTC_FLOAT_2):(i.rectAreaLTC1=Ae.LTC_HALF_1,i.rectAreaLTC2=Ae.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=f,i.ambient[2]=u;let A=i.hash;(A.sunLength!==d||A.directionalLength!==p||A.pointLength!==g||A.spotLength!==M||A.rectAreaLength!==E||A.hemiLength!==y||A.numSunShadows!==m||A.numDirectionalShadows!==v||A.numPointShadows!==b||A.numSpotShadows!==x||A.numSpotMaps!==T||A.numLightProbes!==S)&&(i.sun.length=d,i.directional.length=p,i.spot.length=M,i.rectArea.length=E,i.point.length=g,i.hemi.length=y,i.sunShadow.length=m,i.sunShadowMap.length=m,i.sunShadowMatrix.length=_,i.sunShadowCascade.length=_,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.directionalShadowMatrix.length=v,i.pointShadow.length=b,i.pointShadowMap.length=b,i.pointShadowMatrix.length=b,i.spotShadow.length=x,i.spotShadowMap.length=x,i.spotLightMatrix.length=x+T-P,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=P,i.numLightProbes=S,A.sunLength=d,A.directionalLength=p,A.pointLength=g,A.spotLength=M,A.rectAreaLength=E,A.hemiLength=y,A.numSunShadows=m,A.numDirectionalShadows=v,A.numPointShadows=b,A.numSpotShadows=x,A.numSpotMaps=T,A.numLightProbes=S,i.version=rM++)}function l(c,h){let f=0,u=0,d=0,m=0,_=0,p=0,g=h.matrixWorldInverse;for(let M=0,E=c.length;M<E;M++){let y=c[M];if(y.isSunLight){let v=i.sun[f];v.direction.setFromMatrixPosition(y.matrixWorld),v.direction.transformDirection(g),f++}else if(y.isDirectionalLight){let v=i.directional[u];v.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(g),u++}else if(y.isSpotLight){let v=i.spot[m];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(g),v.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(g),m++}else if(y.isRectAreaLight){let v=i.rectArea[_];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(g),a.identity(),r.copy(y.matrixWorld),r.premultiply(g),a.extractRotation(r),v.halfWidth.set(y.width*.5,0,0),v.halfHeight.set(0,y.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),_++}else if(y.isPointLight){let v=i.point[d];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(g),d++}else if(y.isHemisphereLight){let v=i.hemi[p];v.direction.setFromMatrixPosition(y.matrixWorld),v.direction.transformDirection(g),p++}}}return{setup:o,setupView:l,state:i}}function zp(n){let e=new oM(n),t=[],i=[],s=[];function r(f){h.camera=f,t.length=0,i.length=0,s.length=0}function a(f){f.isLightProbeGrid?s.push(f):t.push(f)}function o(f){i.push(f)}function l(){e.setup(t),s.sort((f,u)=>f.priority-u.priority||f.id-u.id)}function c(f){e.setupView(t,f)}let h={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function lM(n){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new zp(n),e.set(s,[o])):r>=a.length?(o=new zp(n),a.push(o)):o=a[r],o}function i(){e=new WeakMap}return{get:t,dispose:i}}var cM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,hM=`uniform sampler2D shadow_pass;
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
}`,uM=[new W(1,0,0),new W(-1,0,0),new W(0,1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1)],fM=[new W(0,-1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1),new W(0,-1,0),new W(0,-1,0)],Hp=new xt,Wa=new W,yu=new W;function dM(n,e,t){let i=new ss,s=new he,r=new he,a=new Lt,o=new dl,l=new pl,c={},h=t.maxTextureSize,f={[hs]:mn,[mn]:hs,[yi]:yi},u=new Zn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new he},radius:{value:4}},vertexShader:cM,fragmentShader:hM}),d=u.clone();d.defines.HORIZONTAL_PASS=1;let m=new nn;m.setAttribute("position",new Sn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new $e(m,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ua;let g=this.type;this.render=function(b,x,T){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||b.length===0)return;this.type===El&&(He("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ua);let P=n.getRenderTarget(),S=n.getActiveCubeFace(),A=n.getActiveMipmapLevel(),D=n.state;D.setBlending(Ds),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);let C=g!==this.type;C&&x.traverse(function(w){w.material&&(Array.isArray(w.material)?w.material.forEach(R=>R.needsUpdate=!0):w.material.needsUpdate=!0)});for(let w=0,R=b.length;w<R;w++){let L=b[w],B=L.shadow;if(B===void 0){He("WebGLShadowMap:",L,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;s.copy(B.mapSize);let z=B.getFrameExtents();s.multiply(z),r.copy(B.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/z.x),s.x=r.x*z.x,B.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/z.y),s.y=r.y*z.y,B.mapSize.y=r.y));let U=n.state.buffers.depth.getReversed();if(B.camera._reversedDepth=U,B.map===null||C===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===Tr){if(L.isPointLight){He("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new kn(s.x,s.y,{format:us,type:li,minFilter:Pn,magFilter:Pn,generateMipmaps:!1}),B.map.texture.name=L.name+".shadowMap",B.map.depthTexture=new Fi(s.x,s.y,Kn),B.map.depthTexture.name=L.name+".shadowMapDepth",B.map.depthTexture.format=Ni,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=cn,B.map.depthTexture.magFilter=cn}else L.isPointLight?(B.map=new qa(s.x),B.map.depthTexture=new xa(s.x,oi)):(B.map=new kn(s.x,s.y),B.map.depthTexture=new Fi(s.x,s.y,oi)),B.map.depthTexture.name=L.name+".shadowMap",B.map.depthTexture.format=Ni,this.type===Ua?(B.map.depthTexture.compareFunction=U?lu:ou,B.map.depthTexture.minFilter=Pn,B.map.depthTexture.magFilter=Pn):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=cn,B.map.depthTexture.magFilter=cn);B.camera.updateProjectionMatrix()}B.map.isWebGLCubeRenderTarget!==!0&&(B.map.width!==s.x||B.map.height!==s.y)&&B.map.setSize(s.x,s.y);let F=B.map.isWebGLCubeRenderTarget?6:B.getViewportCount();L.isPointLight!==!0&&B.updateMatrices(L,T);let H=(B.camera.layers.mask&4294967294)!==0?B.camera.layers:T.layers;for(let $=0;$<F;$++){let J=B.getCamera($);if(L.isPointLight){let V=B.camera,ee=B.matrix,oe=L.distance||V.far;oe!==V.far&&(V.far=oe,V.updateProjectionMatrix()),Wa.setFromMatrixPosition(L.matrixWorld),V.position.copy(Wa),yu.copy(V.position),yu.add(uM[$]),V.up.copy(fM[$]),V.lookAt(yu),V.updateMatrixWorld(),ee.makeTranslation(-Wa.x,-Wa.y,-Wa.z),Hp.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),B._frustum.setFromProjectionMatrix(Hp,V.coordinateSystem,V.reversedDepth)}if(B.map.isWebGLCubeRenderTarget)n.setRenderTarget(B.map,$),n.clear();else{$===0&&(n.setRenderTarget(B.map),n.clear());let V=B.getViewport($);a.set(r.x*V.x,r.y*V.y,r.x*V.z,r.y*V.w),D.viewport(a)}i=B.getFrustum($),y(x,T,J,L,H,this.type)}B.isPointLightShadow!==!0&&this.type===Tr&&M(B,T),B.needsUpdate=!1}g=this.type,p.needsUpdate=!1,n.setRenderTarget(P,S,A)};function M(b,x){let T=e.update(_);u.defines.VSM_SAMPLES!==b.blurSamples&&(u.defines.VSM_SAMPLES=b.blurSamples,d.defines.VSM_SAMPLES=b.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),b.mapPass===null?b.mapPass=new kn(s.x,s.y,{format:us,type:li}):(b.mapPass.width!==b.map.width||b.mapPass.height!==b.map.height)&&b.mapPass.setSize(b.map.width,b.map.height),u.uniforms.shadow_pass.value=b.map.depthTexture,u.uniforms.resolution.value.set(b.map.width,b.map.height),u.uniforms.radius.value=b.radius,n.setRenderTarget(b.mapPass),n.clear(),n.renderBufferDirect(x,null,T,u,_,null),d.uniforms.shadow_pass.value=b.mapPass.texture,d.uniforms.resolution.value.set(b.map.width,b.map.height),d.uniforms.radius.value=b.radius,n.setRenderTarget(b.map),n.clear(),n.renderBufferDirect(x,null,T,d,_,null)}function E(b,x,T,P){let S=null,A=T.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(A!==void 0)S=A;else if(S=T.isPointLight===!0?l:o,n.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0||x.alphaToCoverage===!0){let D=S.uuid,C=x.uuid,w=c[D];w===void 0&&(w={},c[D]=w);let R=w[C];R===void 0&&(R=S.clone(),w[C]=R,x.addEventListener("dispose",v)),S=R}if(S.visible=x.visible,S.wireframe=x.wireframe,P===Tr?S.side=x.shadowSide!==null?x.shadowSide:x.side:S.side=x.shadowSide!==null?x.shadowSide:f[x.side],S.alphaMap=x.alphaMap,S.alphaTest=x.alphaToCoverage===!0?.5:x.alphaTest,S.map=x.map,S.clipShadows=x.clipShadows,S.clippingPlanes=x.clippingPlanes,S.clipIntersection=x.clipIntersection,S.displacementMap=x.displacementMap,S.displacementScale=x.displacementScale,S.displacementBias=x.displacementBias,S.wireframeLinewidth=x.wireframeLinewidth,S.linewidth=x.linewidth,T.isPointLight===!0&&S.isMeshDistanceMaterial===!0){let D=n.properties.get(S);D.light=T}return S}function y(b,x,T,P,S,A){if(b.visible===!1)return;if(b.layers.test(S)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&A===Tr)&&(!b.frustumCulled||b.intersectsFrustum(i))){b.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,b.matrixWorld);let w=e.update(b),R=b.material;if(Array.isArray(R)){let L=w.groups;for(let B=0,z=L.length;B<z;B++){let U=L[B],F=R[U.materialIndex];if(F&&F.visible){let H=E(b,F,P,A);b.onBeforeShadow(n,b,x,T,w,H,U),n.renderBufferDirect(T,null,w,H,b,U),b.onAfterShadow(n,b,x,T,w,H,U)}}}else if(R.visible){let L=E(b,R,P,A);b.onBeforeShadow(n,b,x,T,w,L,null),n.renderBufferDirect(T,null,w,L,b,null),b.onAfterShadow(n,b,x,T,w,L,null)}}let C=b.children;for(let w=0,R=C.length;w<R;w++)y(C[w],x,T,P,S,A)}function v(b){b.target.removeEventListener("dispose",v);for(let T in c){let P=c[T],S=b.target.uuid;S in P&&(P[S].dispose(),delete P[S])}}}function pM(n,e){function t(){let G=!1,se=new Lt,te=null,ye=new Lt(0,0,0,0);return{setMask:function(ue){te!==ue&&!G&&(n.colorMask(ue,ue,ue,ue),te=ue)},setLocked:function(ue){G=ue},setClear:function(ue,me,Oe,Qe,ce){ce===!0&&(ue*=Qe,me*=Qe,Oe*=Qe),se.set(ue,me,Oe,Qe),ye.equals(se)===!1&&(n.clearColor(ue,me,Oe,Qe),ye.copy(se))},reset:function(){G=!1,te=null,ye.set(-1,0,0,0)}}}function i(){let G=!1,se=!1,te=null,ye=null,ue=null;return{setReversed:function(me){if(se!==me){let Oe=e.get("EXT_clip_control");me?Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.ZERO_TO_ONE_EXT):Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.NEGATIVE_ONE_TO_ONE_EXT),se=me;let Qe=ue;ue=null,this.setClear(Qe)}},getReversed:function(){return se},setTest:function(me){me?fe(n.DEPTH_TEST):Le(n.DEPTH_TEST)},setMask:function(me){te!==me&&!G&&(n.depthMask(me),te=me)},setFunc:function(me){if(se&&(me=lp[me]),ye!==me){switch(me){case Xo:n.depthFunc(n.NEVER);break;case qo:n.depthFunc(n.ALWAYS);break;case Yo:n.depthFunc(n.LESS);break;case ur:n.depthFunc(n.LEQUAL);break;case $o:n.depthFunc(n.EQUAL);break;case Zo:n.depthFunc(n.GEQUAL);break;case Ko:n.depthFunc(n.GREATER);break;case Jo:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ye=me}},setLocked:function(me){G=me},setClear:function(me){ue!==me&&(ue=me,se&&(me=1-me),n.clearDepth(me))},reset:function(){G=!1,te=null,ye=null,ue=null,se=!1}}}function s(){let G=!1,se=null,te=null,ye=null,ue=null,me=null,Oe=null,Qe=null,ce=null;return{setTest:function(Be){G||(Be?fe(n.STENCIL_TEST):Le(n.STENCIL_TEST))},setMask:function(Be){se!==Be&&!G&&(n.stencilMask(Be),se=Be)},setFunc:function(Be,je,Ee){(te!==Be||ye!==je||ue!==Ee)&&(n.stencilFunc(Be,je,Ee),te=Be,ye=je,ue=Ee)},setOp:function(Be,je,Ee){(me!==Be||Oe!==je||Qe!==Ee)&&(n.stencilOp(Be,je,Ee),me=Be,Oe=je,Qe=Ee)},setLocked:function(Be){G=Be},setClear:function(Be){ce!==Be&&(n.clearStencil(Be),ce=Be)},reset:function(){G=!1,se=null,te=null,ye=null,ue=null,me=null,Oe=null,Qe=null,ce=null}}}let r=new t,a=new i,o=new s,l={},c=new WeakMap,h={},f={},u={},d=new WeakMap,m=[],_=null,p=!1,g=null,M=null,E=null,y=null,v=null,b=null,x=null,T=new Ve(0,0,0),P=0,S=!1,A=null,D=null,C=null,w=null,R=null,L=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),B=!1,z=0,U=n.getParameter(n.VERSION);U.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(U)[1]),B=z>=1):U.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(U)[1]),B=z>=2);let F=null,H={},$=n.getParameter(n.SCISSOR_BOX),J=n.getParameter(n.VIEWPORT),V=new Lt().fromArray($),ee=new Lt().fromArray(J);function oe(G,se,te,ye){let ue=new Uint8Array(4),me=n.createTexture();n.bindTexture(G,me),n.texParameteri(G,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(G,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Oe=0;Oe<te;Oe++)G===n.TEXTURE_3D||G===n.TEXTURE_2D_ARRAY?n.texImage3D(se,0,n.RGBA,1,1,ye,0,n.RGBA,n.UNSIGNED_BYTE,ue):n.texImage2D(se+Oe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ue);return me}let Te={};Te[n.TEXTURE_2D]=oe(n.TEXTURE_2D,n.TEXTURE_2D,1),Te[n.TEXTURE_CUBE_MAP]=oe(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Te[n.TEXTURE_2D_ARRAY]=oe(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Te[n.TEXTURE_3D]=oe(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),fe(n.DEPTH_TEST),a.setFunc(ur),Ce(!1),Se(Vh),fe(n.CULL_FACE),ge(Ds);function fe(G){h[G]!==!0&&(n.enable(G),h[G]=!0)}function Le(G){h[G]!==!1&&(n.disable(G),h[G]=!1)}function St(G,se){return u[G]!==se?(n.bindFramebuffer(G,se),u[G]=se,G===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=se),G===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=se),!0):!1}function ze(G,se){let te=m,ye=!1;if(G){te=d.get(se),te===void 0&&(te=[],d.set(se,te));let ue=G.textures;if(te.length!==ue.length||te[0]!==n.COLOR_ATTACHMENT0){for(let me=0,Oe=ue.length;me<Oe;me++)te[me]=n.COLOR_ATTACHMENT0+me;te.length=ue.length,ye=!0}}else te[0]!==n.BACK&&(te[0]=n.BACK,ye=!0);ye&&n.drawBuffers(te)}function tt(G){return _!==G?(n.useProgram(G),_=G,!0):!1}let rt={[Us]:n.FUNC_ADD,[Id]:n.FUNC_SUBTRACT,[Ld]:n.FUNC_REVERSE_SUBTRACT};rt[Nd]=n.MIN,rt[Dd]=n.MAX;let ae={[Ud]:n.ZERO,[Fd]:n.ONE,[Od]:n.SRC_COLOR,[qh]:n.SRC_ALPHA,[Gd]:n.SRC_ALPHA_SATURATE,[Hd]:n.DST_COLOR,[kd]:n.DST_ALPHA,[Bd]:n.ONE_MINUS_SRC_COLOR,[Yh]:n.ONE_MINUS_SRC_ALPHA,[Vd]:n.ONE_MINUS_DST_COLOR,[zd]:n.ONE_MINUS_DST_ALPHA,[Wd]:n.CONSTANT_COLOR,[Xd]:n.ONE_MINUS_CONSTANT_COLOR,[qd]:n.CONSTANT_ALPHA,[Yd]:n.ONE_MINUS_CONSTANT_ALPHA};function ge(G,se,te,ye,ue,me,Oe,Qe,ce,Be){if(G===Ds){p===!0&&(Le(n.BLEND),p=!1);return}if(p===!1&&(fe(n.BLEND),p=!0),G!==Pd){if(G!==g||Be!==S){if((M!==Us||v!==Us)&&(n.blendEquation(n.FUNC_ADD),M=Us,v=Us),Be)switch(G){case wr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Gh:n.blendFunc(n.ONE,n.ONE);break;case Wh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Xh:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Ge("WebGLState: Invalid blending: ",G);break}else switch(G){case wr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Gh:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Wh:Ge("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Xh:Ge("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ge("WebGLState: Invalid blending: ",G);break}E=null,y=null,b=null,x=null,T.set(0,0,0),P=0,g=G,S=Be}return}ue=ue||se,me=me||te,Oe=Oe||ye,(se!==M||ue!==v)&&(n.blendEquationSeparate(rt[se],rt[ue]),M=se,v=ue),(te!==E||ye!==y||me!==b||Oe!==x)&&(n.blendFuncSeparate(ae[te],ae[ye],ae[me],ae[Oe]),E=te,y=ye,b=me,x=Oe),(Qe.equals(T)===!1||ce!==P)&&(n.blendColor(Qe.r,Qe.g,Qe.b,ce),T.copy(Qe),P=ce),g=G,S=!1}function de(G,se){G.side===yi?Le(n.CULL_FACE):fe(n.CULL_FACE);let te=G.side===mn;se&&(te=!te),Ce(te),G.blending===wr&&G.transparent===!1?ge(Ds):ge(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),a.setFunc(G.depthFunc),a.setTest(G.depthTest),a.setMask(G.depthWrite),r.setMask(G.colorWrite);let ye=G.stencilWrite;o.setTest(ye),ye&&(o.setMask(G.stencilWriteMask),o.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),o.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),Fe(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?fe(n.SAMPLE_ALPHA_TO_COVERAGE):Le(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ce(G){A!==G&&(G?n.frontFace(n.CW):n.frontFace(n.CCW),A=G)}function Se(G){G!==Rd?(fe(n.CULL_FACE),G!==D&&(G===Vh?n.cullFace(n.BACK):G===Cd?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Le(n.CULL_FACE),D=G}function Je(G){G!==C&&(B&&n.lineWidth(G),C=G)}function Fe(G,se,te){G?(fe(n.POLYGON_OFFSET_FILL),(w!==se||R!==te)&&(w=se,R=te,a.getReversed()&&(se=-se,te=-te),n.polygonOffset(se,te))):Le(n.POLYGON_OFFSET_FILL)}function at(G){G?fe(n.SCISSOR_TEST):Le(n.SCISSOR_TEST)}function lt(G){G===void 0&&(G=n.TEXTURE0+L-1),F!==G&&(n.activeTexture(G),F=G)}function gt(G,se,te){te===void 0&&(F===null?te=n.TEXTURE0+L-1:te=F);let ye=H[te];ye===void 0&&(ye={type:void 0,texture:void 0},H[te]=ye),(ye.type!==G||ye.texture!==se)&&(F!==te&&(n.activeTexture(te),F=te),n.bindTexture(G,se||Te[G]),ye.type=G,ye.texture=se)}function Y(){let G=H[F];G!==void 0&&G.type!==void 0&&(n.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function Jt(){try{n.compressedTexImage2D(...arguments)}catch(G){Ge("WebGLState:",G)}}function it(){try{n.compressedTexImage3D(...arguments)}catch(G){Ge("WebGLState:",G)}}function Tt(){try{n.texSubImage2D(...arguments)}catch(G){Ge("WebGLState:",G)}}function ve(){try{n.texSubImage3D(...arguments)}catch(G){Ge("WebGLState:",G)}}function Vt(){try{n.compressedTexSubImage2D(...arguments)}catch(G){Ge("WebGLState:",G)}}function ke(){try{n.compressedTexSubImage3D(...arguments)}catch(G){Ge("WebGLState:",G)}}function Xe(){try{n.texStorage2D(...arguments)}catch(G){Ge("WebGLState:",G)}}function k(){try{n.texStorage3D(...arguments)}catch(G){Ge("WebGLState:",G)}}function I(){try{n.texImage2D(...arguments)}catch(G){Ge("WebGLState:",G)}}function K(){try{n.texImage3D(...arguments)}catch(G){Ge("WebGLState:",G)}}function le(G){return f[G]!==void 0?f[G]:n.getParameter(G)}function re(G,se){f[G]!==se&&(n.pixelStorei(G,se),f[G]=se)}function pe(G){V.equals(G)===!1&&(n.scissor(G.x,G.y,G.z,G.w),V.copy(G))}function Me(G){ee.equals(G)===!1&&(n.viewport(G.x,G.y,G.z,G.w),ee.copy(G))}function ne(G,se){let te=c.get(se);te===void 0&&(te=new WeakMap,c.set(se,te));let ye=te.get(G);ye===void 0&&(ye=n.getUniformBlockIndex(se,G.name),n.uniformBlockBinding(se,ye,ye),te.set(G,ye))}function ie(G,se,te){let ue=c.get(se).get(G);l[ue]!==te&&(n.bindBufferBase(n.UNIFORM_BUFFER,ue,te),l[ue]=te)}function xe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),h={},f={},F=null,H={},u={},l={},d=new WeakMap,m=[],_=null,p=!1,g=null,M=null,E=null,y=null,v=null,b=null,x=null,T=new Ve(0,0,0),P=0,S=!1,A=null,D=null,C=null,w=null,R=null,V.set(0,0,n.canvas.width,n.canvas.height),ee.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:fe,disable:Le,bindFramebuffer:St,drawBuffers:ze,useProgram:tt,setBlending:ge,setMaterial:de,setFlipSided:Ce,setCullFace:Se,setLineWidth:Je,setPolygonOffset:Fe,setScissorTest:at,activeTexture:lt,bindTexture:gt,unbindTexture:Y,compressedTexImage2D:Jt,compressedTexImage3D:it,texImage2D:I,texImage3D:K,pixelStorei:re,getParameter:le,updateUBOMapping:ne,uniformBlockBinding:ie,texStorage2D:Xe,texStorage3D:k,texSubImage2D:Tt,texSubImage3D:ve,compressedTexSubImage2D:Vt,compressedTexSubImage3D:ke,scissor:pe,viewport:Me,reset:xe}}function mM(n,e,t,i,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new he,h=new WeakMap,f=new Set,u,d=new WeakMap,m=new Set,_=new FinalizationRegistry(k=>m.delete(k)),p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(k,I){return p?new OffscreenCanvas(k,I):aa("canvas")}function M(k,I,K){let le=1,re=Xe(k);if((re.width>K||re.height>K)&&(le=K/Math.max(re.width,re.height)),le<1)if(typeof HTMLImageElement<"u"&&k instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&k instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&k instanceof ImageBitmap||typeof VideoFrame<"u"&&k instanceof VideoFrame){let pe=Math.floor(le*re.width),Me=Math.floor(le*re.height);u===void 0&&(u=g(pe,Me));let ne=I?g(pe,Me):u;return ne.width=pe,ne.height=Me,ne.getContext("2d").drawImage(k,0,0,pe,Me),He("WebGLRenderer: Texture has been resized from ("+re.width+"x"+re.height+") to ("+pe+"x"+Me+")."),ne}else return"data"in k&&He("WebGLRenderer: Image in DataTexture is too big ("+re.width+"x"+re.height+")."),k;return k}function E(k){return k.generateMipmaps}function y(k){n.generateMipmap(k)}function v(k){return k.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:k.isWebGL3DRenderTarget?n.TEXTURE_3D:k.isWebGLArrayRenderTarget||k.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function b(k,I,K,le,re,pe=!1){if(k!==null){if(n[k]!==void 0)return n[k];He("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+k+"'")}let Me;le&&(Me=e.get("EXT_texture_norm16"),Me||He("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ne=I;if(I===n.RED&&(K===n.FLOAT&&(ne=n.R32F),K===n.HALF_FLOAT&&(ne=n.R16F),K===n.UNSIGNED_BYTE&&(ne=n.R8),K===n.UNSIGNED_SHORT&&Me&&(ne=Me.R16_EXT),K===n.SHORT&&Me&&(ne=Me.R16_SNORM_EXT)),I===n.RED_INTEGER&&(K===n.UNSIGNED_BYTE&&(ne=n.R8UI),K===n.UNSIGNED_SHORT&&(ne=n.R16UI),K===n.UNSIGNED_INT&&(ne=n.R32UI),K===n.BYTE&&(ne=n.R8I),K===n.SHORT&&(ne=n.R16I),K===n.INT&&(ne=n.R32I)),I===n.RG&&(K===n.FLOAT&&(ne=n.RG32F),K===n.HALF_FLOAT&&(ne=n.RG16F),K===n.UNSIGNED_BYTE&&(ne=n.RG8),K===n.UNSIGNED_SHORT&&Me&&(ne=Me.RG16_EXT),K===n.SHORT&&Me&&(ne=Me.RG16_SNORM_EXT)),I===n.RG_INTEGER&&(K===n.UNSIGNED_BYTE&&(ne=n.RG8UI),K===n.UNSIGNED_SHORT&&(ne=n.RG16UI),K===n.UNSIGNED_INT&&(ne=n.RG32UI),K===n.BYTE&&(ne=n.RG8I),K===n.SHORT&&(ne=n.RG16I),K===n.INT&&(ne=n.RG32I)),I===n.RGB_INTEGER&&(K===n.UNSIGNED_BYTE&&(ne=n.RGB8UI),K===n.UNSIGNED_SHORT&&(ne=n.RGB16UI),K===n.UNSIGNED_INT&&(ne=n.RGB32UI),K===n.BYTE&&(ne=n.RGB8I),K===n.SHORT&&(ne=n.RGB16I),K===n.INT&&(ne=n.RGB32I)),I===n.RGBA_INTEGER&&(K===n.UNSIGNED_BYTE&&(ne=n.RGBA8UI),K===n.UNSIGNED_SHORT&&(ne=n.RGBA16UI),K===n.UNSIGNED_INT&&(ne=n.RGBA32UI),K===n.BYTE&&(ne=n.RGBA8I),K===n.SHORT&&(ne=n.RGBA16I),K===n.INT&&(ne=n.RGBA32I)),I===n.RGB&&(K===n.UNSIGNED_SHORT&&Me&&(ne=Me.RGB16_EXT),K===n.SHORT&&Me&&(ne=Me.RGB16_SNORM_EXT),K===n.UNSIGNED_INT_5_9_9_9_REV&&(ne=n.RGB9_E5),K===n.UNSIGNED_INT_10F_11F_11F_REV&&(ne=n.R11F_G11F_B10F)),I===n.RGBA){let ie=pe?ra:ut.getTransfer(re);K===n.FLOAT&&(ne=n.RGBA32F),K===n.HALF_FLOAT&&(ne=n.RGBA16F),K===n.UNSIGNED_BYTE&&(ne=ie===vt?n.SRGB8_ALPHA8:n.RGBA8),K===n.UNSIGNED_SHORT&&Me&&(ne=Me.RGBA16_EXT),K===n.SHORT&&Me&&(ne=Me.RGBA16_SNORM_EXT),K===n.UNSIGNED_SHORT_4_4_4_4&&(ne=n.RGBA4),K===n.UNSIGNED_SHORT_5_5_5_1&&(ne=n.RGB5_A1)}return(ne===n.R16F||ne===n.R32F||ne===n.RG16F||ne===n.RG32F||ne===n.RGBA16F||ne===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ne}function x(k,I){let K;return k?I===null||I===oi||I===Os?K=n.DEPTH24_STENCIL8:I===Kn?K=n.DEPTH32F_STENCIL8:I===Ar&&(K=n.DEPTH24_STENCIL8,He("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):I===null||I===oi||I===Os?K=n.DEPTH_COMPONENT24:I===Kn?K=n.DEPTH_COMPONENT32F:I===Ar&&(K=n.DEPTH_COMPONENT16),K}function T(k,I){return E(k)===!0||k.isFramebufferTexture&&k.minFilter!==cn&&k.minFilter!==Pn?Math.log2(Math.max(I.width,I.height))+1:k.mipmaps.length>0?k.mipmaps.length:k.isCompressedTexture&&Array.isArray(k.image)?I.mipmaps.length:1}function P(k){let I=new WeakRef(k);i.get(k).__ref=I,m.add(I),_.register(k,I,I)}function S(k){let I=i.get(k).__ref;I!==void 0&&(m.delete(I),_.unregister(I))}function A(k){C(k.target)}function D(k){w(k.target)}function C(k){k.removeEventListener("dispose",A),S(k),L(k),k.isVideoTexture&&h.delete(k),k.isHTMLTexture&&f.delete(k)}function w(k){k.removeEventListener("dispose",D),S(k),z(k)}function R(){for(let k of m){let I=k.deref();I!==void 0&&(I.isRenderTarget===!0?w(I):C(I))}m.clear(),f.clear()}function L(k){let I=i.get(k);if(I.__webglInit===void 0)return;let K=k.source,le=d.get(K);if(le){let re=le[I.__cacheKey];re.usedTimes--,re.usedTimes===0&&B(k),Object.keys(le).length===0&&d.delete(K)}i.remove(k)}function B(k){let I=i.get(k);n.deleteTexture(I.__webglTexture);let K=k.source,le=d.get(K);delete le[I.__cacheKey],a.memory.textures--}function z(k){let I=i.get(k);I.__depthDisposeCallback&&I.__depthDisposeCallback();let K=k.depthTexture;if(K&&K.renderTarget===k&&C(K),k.isWebGLCubeRenderTarget)for(let re=0;re<6;re++){if(Array.isArray(I.__webglFramebuffer[re]))for(let pe=0;pe<I.__webglFramebuffer[re].length;pe++)n.deleteFramebuffer(I.__webglFramebuffer[re][pe]);else n.deleteFramebuffer(I.__webglFramebuffer[re]);I.__webglDepthbuffer&&n.deleteRenderbuffer(I.__webglDepthbuffer[re])}else{if(Array.isArray(I.__webglFramebuffer))for(let re=0;re<I.__webglFramebuffer.length;re++)n.deleteFramebuffer(I.__webglFramebuffer[re]);else n.deleteFramebuffer(I.__webglFramebuffer);if(I.__webglDepthbuffer&&n.deleteRenderbuffer(I.__webglDepthbuffer),I.__webglMultisampledFramebuffer&&n.deleteFramebuffer(I.__webglMultisampledFramebuffer),I.__webglColorRenderbuffer)for(let re=0;re<I.__webglColorRenderbuffer.length;re++)I.__webglColorRenderbuffer[re]&&n.deleteRenderbuffer(I.__webglColorRenderbuffer[re]);I.__webglDepthRenderbuffer&&n.deleteRenderbuffer(I.__webglDepthRenderbuffer)}let le=k.textures;for(let re=0,pe=le.length;re<pe;re++){let Me=i.get(le[re]);Me.__webglTexture&&(n.deleteTexture(Me.__webglTexture),a.memory.textures--),i.remove(le[re])}i.remove(k)}let U=0;function F(){U=0}function H(){return U}function $(k){U=k}function J(){let k=U;return k>=s.maxTextures&&He("WebGLTextures: Trying to use "+(k+1)+" texture units while this GPU supports only "+s.maxTextures),U+=1,k}function V(k){let I=[];return I.push(k.wrapS),I.push(k.wrapT),I.push(k.wrapR||0),I.push(k.magFilter),I.push(k.minFilter),I.push(k.anisotropy),I.push(k.internalFormat),I.push(k.format),I.push(k.type),I.push(k.generateMipmaps),I.push(k.mipmapsAutoUpdate),I.push(k.premultiplyAlpha),I.push(k.flipY),I.push(k.unpackAlignment),I.push(k.colorSpace),I.join()}function ee(k,I){let K=i.get(k);if(k.isVideoTexture&&Vt(k),k.isRenderTargetTexture===!1&&k.isExternalTexture!==!0&&k.version>0&&K.__version!==k.version){let le=k.image;if(le===null)He("WebGLRenderer: Texture marked for update but no image data found.");else if(le.complete===!1)He("WebGLRenderer: Texture marked for update but image is incomplete");else{de(K,k,I);return}}else k.isExternalTexture&&(K.__webglTexture=k.sourceTexture?k.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,K.__webglTexture,n.TEXTURE0+I)}function oe(k,I){let K=i.get(k);if(k.isRenderTargetTexture===!1&&k.version>0&&K.__version!==k.version){de(K,k,I);return}else k.isExternalTexture&&(K.__webglTexture=k.sourceTexture?k.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,K.__webglTexture,n.TEXTURE0+I)}function Te(k,I){let K=i.get(k);if(k.isRenderTargetTexture===!1&&k.version>0&&K.__version!==k.version){de(K,k,I);return}t.bindTexture(n.TEXTURE_3D,K.__webglTexture,n.TEXTURE0+I)}function fe(k,I){let K=i.get(k);if(k.version>0&&K.__version!==k.version){Ce(K,k,I);return}t.bindTexture(n.TEXTURE_CUBE_MAP,K.__webglTexture,n.TEXTURE0+I)}let Le={[fr]:n.REPEAT,[ui]:n.CLAMP_TO_EDGE,[jo]:n.MIRRORED_REPEAT},St={[cn]:n.NEAREST,[Kd]:n.NEAREST_MIPMAP_NEAREST,[Oa]:n.NEAREST_MIPMAP_LINEAR,[Pn]:n.LINEAR,[Pl]:n.LINEAR_MIPMAP_NEAREST,[Bi]:n.LINEAR_MIPMAP_LINEAR},ze={[ep]:n.NEVER,[cu]:n.ALWAYS,[tp]:n.LESS,[ou]:n.LEQUAL,[np]:n.EQUAL,[lu]:n.GEQUAL,[ip]:n.GREATER,[sp]:n.NOTEQUAL};function tt(k,I){if(I.type===Kn&&e.has("OES_texture_float_linear")===!1&&(I.magFilter===Pn||I.magFilter===Pl||I.magFilter===Oa||I.magFilter===Bi||I.minFilter===Pn||I.minFilter===Pl||I.minFilter===Oa||I.minFilter===Bi)&&He("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(k,n.TEXTURE_WRAP_S,Le[I.wrapS]),n.texParameteri(k,n.TEXTURE_WRAP_T,Le[I.wrapT]),(k===n.TEXTURE_3D||k===n.TEXTURE_2D_ARRAY)&&n.texParameteri(k,n.TEXTURE_WRAP_R,Le[I.wrapR]),n.texParameteri(k,n.TEXTURE_MAG_FILTER,St[I.magFilter]),n.texParameteri(k,n.TEXTURE_MIN_FILTER,St[I.minFilter]),I.compareFunction&&(n.texParameteri(k,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(k,n.TEXTURE_COMPARE_FUNC,ze[I.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(I.magFilter===cn||I.minFilter!==Oa&&I.minFilter!==Bi||I.type===Kn&&e.has("OES_texture_float_linear")===!1)return;if(I.anisotropy>1||i.get(I).__currentAnisotropy){let K=e.get("EXT_texture_filter_anisotropic");n.texParameterf(k,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(I.anisotropy,s.getMaxAnisotropy())),i.get(I).__currentAnisotropy=I.anisotropy}}}function rt(k,I){let K=!1;k.__webglInit===void 0&&(k.__webglInit=!0,I.addEventListener("dispose",A),P(I));let le=I.source,re=d.get(le);re===void 0&&(re={},d.set(le,re));let pe=V(I);if(pe!==k.__cacheKey){re[pe]===void 0&&(re[pe]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,K=!0),re[pe].usedTimes++;let Me=re[k.__cacheKey];Me!==void 0&&(re[k.__cacheKey].usedTimes--,Me.usedTimes===0&&B(I)),k.__cacheKey=pe,k.__webglTexture=re[pe].texture}return K}function ae(k,I,K){return Math.floor(Math.floor(k/K)/I)}function ge(k,I,K,le){let pe=k.updateRanges;if(pe.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,I.width,I.height,K,le,I.data);else{pe.sort((G,se)=>G.start-se.start);let Me=0;for(let G=1;G<pe.length;G++){let se=pe[Me],te=pe[G],ye=se.start+se.count,ue=ae(te.start,I.width,4),me=ae(se.start,I.width,4);te.start<=ye+1&&ue===me&&ae(te.start+te.count-1,I.width,4)===ue?se.count=Math.max(se.count,te.start+te.count-se.start):(++Me,pe[Me]=te)}pe.length=Me+1;let ne=t.getParameter(n.UNPACK_ROW_LENGTH),ie=t.getParameter(n.UNPACK_SKIP_PIXELS),xe=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,I.width);for(let G=0,se=pe.length;G<se;G++){let te=pe[G],ye=Math.floor(te.start/4),ue=Math.ceil(te.count/4),me=ye%I.width,Oe=Math.floor(ye/I.width),Qe=ue,ce=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,me),t.pixelStorei(n.UNPACK_SKIP_ROWS,Oe),t.texSubImage2D(n.TEXTURE_2D,0,me,Oe,Qe,ce,K,le,I.data)}k.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,ne),t.pixelStorei(n.UNPACK_SKIP_PIXELS,ie),t.pixelStorei(n.UNPACK_SKIP_ROWS,xe)}}function de(k,I,K){let le=n.TEXTURE_2D;(I.isDataArrayTexture||I.isCompressedArrayTexture)&&(le=n.TEXTURE_2D_ARRAY),I.isData3DTexture&&(le=n.TEXTURE_3D);let re=rt(k,I),pe=I.source;t.bindTexture(le,k.__webglTexture,n.TEXTURE0+K);let Me=i.get(pe);if(pe.version!==Me.__version||re===!0){if(t.activeTexture(n.TEXTURE0+K),(typeof ImageBitmap<"u"&&I.image instanceof ImageBitmap)===!1){let ce=ut.getPrimaries(ut.workingColorSpace),Be=I.colorSpace===zi?null:ut.getPrimaries(I.colorSpace),je=I.colorSpace===zi||ce===Be?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,I.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,je)}t.pixelStorei(n.UNPACK_ALIGNMENT,I.unpackAlignment);let ie=M(I.image,!1,s.maxTextureSize);ie=ke(I,ie);let xe=r.convert(I.format,I.colorSpace),G=r.convert(I.type),se=b(I.internalFormat,xe,G,I.normalized,I.colorSpace,I.isVideoTexture);tt(le,I);let te,ye=I.mipmaps,ue=I.isVideoTexture!==!0,me=Me.__version===void 0||re===!0,Oe=pe.dataReady,Qe=T(I,ie);if(I.isDepthTexture)se=x(I.format===ki,I.type),me&&(ue?t.texStorage2D(n.TEXTURE_2D,1,se,ie.width,ie.height):t.texImage2D(n.TEXTURE_2D,0,se,ie.width,ie.height,0,xe,G,null));else if(I.isDataTexture)if(ye.length>0){ue&&me&&t.texStorage2D(n.TEXTURE_2D,Qe,se,ye[0].width,ye[0].height);for(let ce=0,Be=ye.length;ce<Be;ce++)te=ye[ce],ue?Oe&&t.texSubImage2D(n.TEXTURE_2D,ce,0,0,te.width,te.height,xe,G,te.data):t.texImage2D(n.TEXTURE_2D,ce,se,te.width,te.height,0,xe,G,te.data);I.generateMipmaps=!1}else ue?(me&&t.texStorage2D(n.TEXTURE_2D,Qe,se,ie.width,ie.height),Oe&&ge(I,ie,xe,G)):t.texImage2D(n.TEXTURE_2D,0,se,ie.width,ie.height,0,xe,G,ie.data);else if(I.isCompressedTexture)if(I.isCompressedArrayTexture){ue&&me&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Qe,se,ye[0].width,ye[0].height,ie.depth);for(let ce=0,Be=ye.length;ce<Be;ce++)if(te=ye[ce],I.format!==ci)if(xe!==null)if(ue){if(Oe)if(I.layerUpdates.size>0){let je=gu(te.width,te.height,I.format,I.type);for(let Ee of I.layerUpdates){let Mt=te.data.subarray(Ee*je/te.data.BYTES_PER_ELEMENT,(Ee+1)*je/te.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ce,0,0,Ee,te.width,te.height,1,xe,Mt)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ce,0,0,0,te.width,te.height,ie.depth,xe,te.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ce,se,te.width,te.height,ie.depth,0,te.data,0,0);else He("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ue?Oe&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ce,0,0,0,te.width,te.height,ie.depth,xe,G,te.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ce,se,te.width,te.height,ie.depth,0,xe,G,te.data);I.layerUpdates.size>0&&I.clearLayerUpdates()}else{ue&&me&&t.texStorage2D(n.TEXTURE_2D,Qe,se,ye[0].width,ye[0].height);for(let ce=0,Be=ye.length;ce<Be;ce++)te=ye[ce],I.format!==ci?xe!==null?ue?Oe&&t.compressedTexSubImage2D(n.TEXTURE_2D,ce,0,0,te.width,te.height,xe,te.data):t.compressedTexImage2D(n.TEXTURE_2D,ce,se,te.width,te.height,0,te.data):He("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ue?Oe&&t.texSubImage2D(n.TEXTURE_2D,ce,0,0,te.width,te.height,xe,G,te.data):t.texImage2D(n.TEXTURE_2D,ce,se,te.width,te.height,0,xe,G,te.data)}else if(I.isDataArrayTexture)if(ue){if(me&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Qe,se,ie.width,ie.height,ie.depth),Oe)if(I.layerUpdates.size>0){let ce=gu(ie.width,ie.height,I.format,I.type);for(let Be of I.layerUpdates){let je=ie.data.subarray(Be*ce/ie.data.BYTES_PER_ELEMENT,(Be+1)*ce/ie.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Be,ie.width,ie.height,1,xe,G,je)}I.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,xe,G,ie.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,se,ie.width,ie.height,ie.depth,0,xe,G,ie.data);else if(I.isData3DTexture)ue?(me&&t.texStorage3D(n.TEXTURE_3D,Qe,se,ie.width,ie.height,ie.depth),Oe&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,xe,G,ie.data)):t.texImage3D(n.TEXTURE_3D,0,se,ie.width,ie.height,ie.depth,0,xe,G,ie.data);else if(I.isFramebufferTexture){if(me)if(ue)t.texStorage2D(n.TEXTURE_2D,Qe,se,ie.width,ie.height);else{let ce=ie.width,Be=ie.height;for(let je=0;je<Qe;je++)t.texImage2D(n.TEXTURE_2D,je,se,ce,Be,0,xe,G,null),ce>>=1,Be>>=1}}else if(I.isHTMLTexture){if("texElementImage2D"in n){let ce=n.canvas;if(ce.hasAttribute("layoutsubtree")||ce.setAttribute("layoutsubtree","true"),ie.parentNode!==ce){ce.appendChild(ie),f.add(I),ce.onpaint=Be=>{let je=Be.changedElements;for(let Ee of f)je.includes(Ee.image)&&(Ee.needsUpdate=!0)},ce.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,ie);else{let je=n.RGBA,Ee=n.RGBA,Mt=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,je,Ee,Mt,ie)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(ye.length>0){if(ue&&me){let ce=Xe(ye[0]);t.texStorage2D(n.TEXTURE_2D,Qe,se,ce.width,ce.height)}for(let ce=0,Be=ye.length;ce<Be;ce++)te=ye[ce],ue?Oe&&t.texSubImage2D(n.TEXTURE_2D,ce,0,0,xe,G,te):t.texImage2D(n.TEXTURE_2D,ce,se,xe,G,te);I.generateMipmaps=!1}else if(ue){if(me){let ce=Xe(ie);t.texStorage2D(n.TEXTURE_2D,Qe,se,ce.width,ce.height)}Oe&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,xe,G,ie)}else t.texImage2D(n.TEXTURE_2D,0,se,xe,G,ie);E(I)&&I.mipmapsAutoUpdate===!0&&y(le),Me.__version=pe.version,I.onUpdate&&I.onUpdate(I)}k.__version=I.version}function Ce(k,I,K){if(I.image.length!==6)return;let le=rt(k,I),re=I.source;t.bindTexture(n.TEXTURE_CUBE_MAP,k.__webglTexture,n.TEXTURE0+K);let pe=i.get(re);if(re.version!==pe.__version||le===!0){t.activeTexture(n.TEXTURE0+K);let Me=ut.getPrimaries(ut.workingColorSpace),ne=I.colorSpace===zi?null:ut.getPrimaries(I.colorSpace),ie=I.colorSpace===zi||Me===ne?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,I.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,I.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ie);let xe=I.isCompressedTexture||I.image[0].isCompressedTexture,G=I.image[0]&&I.image[0].isDataTexture,se=[];for(let Ee=0;Ee<6;Ee++)!xe&&!G?se[Ee]=M(I.image[Ee],!0,s.maxCubemapSize):se[Ee]=G?I.image[Ee].image:I.image[Ee],se[Ee]=ke(I,se[Ee]);let te=se[0],ye=r.convert(I.format,I.colorSpace),ue=r.convert(I.type),me=b(I.internalFormat,ye,ue,I.normalized,I.colorSpace),Oe=I.isVideoTexture!==!0,Qe=pe.__version===void 0||le===!0,ce=re.dataReady,Be=T(I,te);tt(n.TEXTURE_CUBE_MAP,I);let je;if(I.isDepthTexture){if(me=x(I.format===ki,I.type),Qe)if(Oe)t.texStorage2D(n.TEXTURE_CUBE_MAP,1,me,te.width,te.height);else for(let Ee=0;Ee<6;Ee++)t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,me,te.width,te.height,0,ye,ue,null)}else if(xe){Oe&&Qe&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Be,me,te.width,te.height);for(let Ee=0;Ee<6;Ee++){je=se[Ee].mipmaps;for(let Mt=0;Mt<je.length;Mt++){let an=je[Mt];I.format!==ci?ye!==null?Oe?ce&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Mt,0,0,an.width,an.height,ye,an.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Mt,me,an.width,an.height,0,an.data):He("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Oe?ce&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Mt,0,0,an.width,an.height,ye,ue,an.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Mt,me,an.width,an.height,0,ye,ue,an.data)}}}else{if(je=I.mipmaps,Oe&&Qe){je.length>0&&Be++;let Ee=Xe(se[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Be,me,Ee.width,Ee.height)}for(let Ee=0;Ee<6;Ee++)if(G){Oe?ce&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,0,0,se[Ee].width,se[Ee].height,ye,ue,se[Ee].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,me,se[Ee].width,se[Ee].height,0,ye,ue,se[Ee].data);for(let Mt=0;Mt<je.length;Mt++){let Ki=je[Mt].image[Ee].image;Oe?ce&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Mt+1,0,0,Ki.width,Ki.height,ye,ue,Ki.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Mt+1,me,Ki.width,Ki.height,0,ye,ue,Ki.data)}}else{Oe?ce&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,0,0,ye,ue,se[Ee]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,me,ye,ue,se[Ee]);for(let Mt=0;Mt<je.length;Mt++){let an=je[Mt];Oe?ce&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Mt+1,0,0,ye,ue,an.image[Ee]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Mt+1,me,ye,ue,an.image[Ee])}}}E(I)&&I.mipmapsAutoUpdate===!0&&y(n.TEXTURE_CUBE_MAP),pe.__version=re.version,I.onUpdate&&I.onUpdate(I)}k.__version=I.version}function Se(k,I,K,le,re,pe){let Me=r.convert(K.format,K.colorSpace),ne=r.convert(K.type),ie=b(K.internalFormat,Me,ne,K.normalized,K.colorSpace),xe=i.get(I),G=i.get(K);if(G.__renderTarget=I,!xe.__hasExternalTextures){let se=Math.max(1,I.width>>pe),te=Math.max(1,I.height>>pe);re===n.TEXTURE_3D||re===n.TEXTURE_2D_ARRAY?t.texImage3D(re,pe,ie,se,te,I.depth,0,Me,ne,null):t.texImage2D(re,pe,ie,se,te,0,Me,ne,null)}t.bindFramebuffer(n.FRAMEBUFFER,k),ve(I)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,le,re,G.__webglTexture,0,Tt(I)):(re===n.TEXTURE_2D||re>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&re<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,le,re,G.__webglTexture,pe),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Je(k,I,K){if(n.bindRenderbuffer(n.RENDERBUFFER,k),I.depthBuffer){let le=I.depthTexture,re=le&&le.isDepthTexture?le.type:null,pe=x(I.stencilBuffer,re),Me=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;ve(I)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Tt(I),pe,I.width,I.height):K?n.renderbufferStorageMultisample(n.RENDERBUFFER,Tt(I),pe,I.width,I.height):n.renderbufferStorage(n.RENDERBUFFER,pe,I.width,I.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Me,n.RENDERBUFFER,k)}else{let le=I.textures;for(let re=0;re<le.length;re++){let pe=le[re],Me=r.convert(pe.format,pe.colorSpace),ne=r.convert(pe.type),ie=b(pe.internalFormat,Me,ne,pe.normalized,pe.colorSpace);ve(I)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Tt(I),ie,I.width,I.height):K?n.renderbufferStorageMultisample(n.RENDERBUFFER,Tt(I),ie,I.width,I.height):n.renderbufferStorage(n.RENDERBUFFER,ie,I.width,I.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Fe(k,I,K){let le=I.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,k),!(I.depthTexture&&I.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let re=i.get(I.depthTexture);re.__renderTarget=I;let pe=le?I.depthTexture.image[0]:I.depthTexture.image;(!re.__webglTexture||pe.width!==I.width||pe.height!==I.height)&&(pe.width=I.width,pe.height=I.height,I.depthTexture.needsUpdate=!0),le?fe(I.depthTexture,0):ee(I.depthTexture,0);let Me=re.__webglTexture,ne=Tt(I),ie=le?n.TEXTURE_CUBE_MAP_POSITIVE_X+K:n.TEXTURE_2D,xe=I.depthTexture.format===ki?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(I.depthTexture.format===Ni)ve(I)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,xe,ie,Me,0,ne):n.framebufferTexture2D(n.FRAMEBUFFER,xe,ie,Me,0);else if(I.depthTexture.format===ki)ve(I)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,xe,ie,Me,0,ne):n.framebufferTexture2D(n.FRAMEBUFFER,xe,ie,Me,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function at(k){let I=i.get(k),K=k.isWebGLCubeRenderTarget===!0;if(I.__boundDepthTexture!==k.depthTexture){let le=k.depthTexture;if(I.__depthDisposeCallback&&I.__depthDisposeCallback(),le){let re=()=>{delete I.__boundDepthTexture,delete I.__depthDisposeCallback,le.removeEventListener("dispose",re)};le.addEventListener("dispose",re),I.__depthDisposeCallback=re}I.__boundDepthTexture=le}if(k.depthTexture&&!I.__autoAllocateDepthBuffer)if(K)for(let le=0;le<6;le++)Fe(I.__webglFramebuffer[le],k,le);else k.texture.mipmaps.length>0?Fe(I.__webglFramebuffer[0],k,0):Fe(I.__webglFramebuffer,k,0);else if(K){I.__webglDepthbuffer=[];for(let le=0;le<6;le++)if(t.bindFramebuffer(n.FRAMEBUFFER,I.__webglFramebuffer[le]),I.__webglDepthbuffer[le]===void 0)I.__webglDepthbuffer[le]=n.createRenderbuffer(),Je(I.__webglDepthbuffer[le],k,!1);else{let re=k.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,pe=I.__webglDepthbuffer[le];n.bindRenderbuffer(n.RENDERBUFFER,pe),n.framebufferRenderbuffer(n.FRAMEBUFFER,re,n.RENDERBUFFER,pe)}}else if(k.texture.mipmaps.length>0?t.bindFramebuffer(n.FRAMEBUFFER,I.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,I.__webglFramebuffer),I.__webglDepthbuffer===void 0)I.__webglDepthbuffer=n.createRenderbuffer(),Je(I.__webglDepthbuffer,k,!1);else{let re=k.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,pe=I.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,pe),n.framebufferRenderbuffer(n.FRAMEBUFFER,re,n.RENDERBUFFER,pe)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function lt(k,I,K){let le=i.get(k);I!==void 0&&Se(le.__webglFramebuffer,k,k.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),K!==void 0&&at(k)}function gt(k){let I=k.texture,K=i.get(k),le=i.get(I);k.addEventListener("dispose",D),P(k);let re=k.textures,pe=k.isWebGLCubeRenderTarget===!0,Me=re.length>1;if(Me||(le.__webglTexture===void 0&&(le.__webglTexture=n.createTexture()),le.__version=I.version,a.memory.textures++),pe){K.__webglFramebuffer=[];for(let ne=0;ne<6;ne++)if(I.mipmaps.length>0){K.__webglFramebuffer[ne]=[];for(let ie=0;ie<I.mipmaps.length;ie++)K.__webglFramebuffer[ne][ie]=n.createFramebuffer()}else K.__webglFramebuffer[ne]=n.createFramebuffer()}else{if(I.mipmaps.length>0){K.__webglFramebuffer=[];for(let ne=0;ne<I.mipmaps.length;ne++)K.__webglFramebuffer[ne]=n.createFramebuffer()}else K.__webglFramebuffer=n.createFramebuffer();if(Me)for(let ne=0,ie=re.length;ne<ie;ne++){let xe=i.get(re[ne]);xe.__webglTexture===void 0&&(xe.__webglTexture=n.createTexture(),a.memory.textures++)}if(k.samples>0&&ve(k)===!1){K.__webglMultisampledFramebuffer=n.createFramebuffer(),K.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let ne=0;ne<re.length;ne++){let ie=re[ne];K.__webglColorRenderbuffer[ne]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,K.__webglColorRenderbuffer[ne]);let xe=r.convert(ie.format,ie.colorSpace),G=r.convert(ie.type),se=b(ie.internalFormat,xe,G,ie.normalized,ie.colorSpace,k.isXRRenderTarget===!0),te=Tt(k);n.renderbufferStorageMultisample(n.RENDERBUFFER,te,se,k.width,k.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ne,n.RENDERBUFFER,K.__webglColorRenderbuffer[ne])}n.bindRenderbuffer(n.RENDERBUFFER,null),k.depthBuffer&&(K.__webglDepthRenderbuffer=n.createRenderbuffer(),Je(K.__webglDepthRenderbuffer,k,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(pe){t.bindTexture(n.TEXTURE_CUBE_MAP,le.__webglTexture),tt(n.TEXTURE_CUBE_MAP,I);for(let ne=0;ne<6;ne++)if(I.mipmaps.length>0)for(let ie=0;ie<I.mipmaps.length;ie++)Se(K.__webglFramebuffer[ne][ie],k,I,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ie);else Se(K.__webglFramebuffer[ne],k,I,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0);E(I)?y(n.TEXTURE_CUBE_MAP):I.mipmaps.length>0&&n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_MAX_LEVEL,I.mipmaps.length-1),t.unbindTexture()}else if(Me){for(let ne=0,ie=re.length;ne<ie;ne++){let xe=re[ne],G=i.get(xe),se=n.TEXTURE_2D;(k.isWebGL3DRenderTarget||k.isWebGLArrayRenderTarget)&&(se=k.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(se,G.__webglTexture),tt(se,xe),Se(K.__webglFramebuffer,k,xe,n.COLOR_ATTACHMENT0+ne,se,0),E(xe)&&y(se)}t.unbindTexture()}else{let ne=n.TEXTURE_2D;if((k.isWebGL3DRenderTarget||k.isWebGLArrayRenderTarget)&&(ne=k.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ne,le.__webglTexture),tt(ne,I),I.mipmaps.length>0)for(let ie=0;ie<I.mipmaps.length;ie++)Se(K.__webglFramebuffer[ie],k,I,n.COLOR_ATTACHMENT0,ne,ie);else Se(K.__webglFramebuffer,k,I,n.COLOR_ATTACHMENT0,ne,0);E(I)?y(ne):I.mipmaps.length>0&&n.texParameteri(ne,n.TEXTURE_MAX_LEVEL,I.mipmaps.length-1),t.unbindTexture()}k.depthBuffer&&at(k)}function Y(k){let I=k.textures;for(let K=0,le=I.length;K<le;K++){let re=I[K];if(E(re)&&re.mipmapsAutoUpdate===!0){let pe=v(k),Me=i.get(re).__webglTexture;t.bindTexture(pe,Me),y(pe),t.unbindTexture()}}}let Jt=[];function it(k){if(k.samples>0){if(ve(k)===!1){let I=k.textures,K=k.width,le=k.height,re=n.COLOR_BUFFER_BIT,pe=k.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Me=i.get(k),ne=I.length>1;if(ne)for(let xe=0;xe<I.length;xe++)t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+xe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+xe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Me.__webglMultisampledFramebuffer),k.texture.mipmaps.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Me.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Me.__webglFramebuffer);for(let xe=0;xe<I.length;xe++){if(k.resolveDepthBuffer&&(k.depthBuffer&&(re|=n.DEPTH_BUFFER_BIT),k.stencilBuffer&&k.resolveStencilBuffer&&(re|=n.STENCIL_BUFFER_BIT)),ne){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Me.__webglColorRenderbuffer[xe]);let G=i.get(I[xe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,G,0)}n.blitFramebuffer(0,0,K,le,0,0,K,le,re,n.NEAREST),l===!0&&(Jt.length=0,Jt.push(n.COLOR_ATTACHMENT0+xe),k.depthBuffer&&k.storeMultisampledDepthBuffer===!1&&Jt.push(pe),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Jt))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ne)for(let xe=0;xe<I.length;xe++){t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+xe,n.RENDERBUFFER,Me.__webglColorRenderbuffer[xe]);let G=i.get(I[xe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+xe,n.TEXTURE_2D,G,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Me.__webglMultisampledFramebuffer)}else if(k.depthBuffer&&k.storeMultisampledDepthBuffer===!1&&l){let I=k.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[I])}}}function Tt(k){return Math.min(s.maxSamples,k.samples)}function ve(k){let I=i.get(k);return k.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&I.__useRenderToTexture!==!1}function Vt(k){let I=a.render.frame;h.get(k)!==I&&(h.set(k,I),k.update())}function ke(k,I){let K=k.colorSpace,le=k.format,re=k.type;return k.isCompressedTexture===!0||k.isVideoTexture===!0||K!==sa&&K!==zi&&(ut.getTransfer(K)===vt?(le!==ci||re!==Ln)&&He("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ge("WebGLTextures: Unsupported texture color space:",K)),I}function Xe(k){return typeof HTMLImageElement<"u"&&k instanceof HTMLImageElement?(c.width=k.naturalWidth||k.width,c.height=k.naturalHeight||k.height):typeof VideoFrame<"u"&&k instanceof VideoFrame?(c.width=k.displayWidth,c.height=k.displayHeight):(c.width=k.width,c.height=k.height),c}this.allocateTextureUnit=J,this.resetTextureUnits=F,this.getTextureUnits=H,this.setTextureUnits=$,this.setTexture2D=ee,this.setTexture2DArray=oe,this.setTexture3D=Te,this.setTextureCube=fe,this.rebindTextures=lt,this.setupRenderTarget=gt,this.updateRenderTargetMipmap=Y,this.updateMultisampleRenderTarget=it,this.setupDepthRenderbuffer=at,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=ve,this.dispose=R}function gM(n,e){function t(i,s=zi){let r,a=ut.getTransfer(s);if(i===Ln)return n.UNSIGNED_BYTE;if(i===Ll)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Nl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===iu)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===su)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===tu)return n.BYTE;if(i===nu)return n.SHORT;if(i===Ar)return n.UNSIGNED_SHORT;if(i===Il)return n.INT;if(i===oi)return n.UNSIGNED_INT;if(i===Kn)return n.FLOAT;if(i===li)return n.HALF_FLOAT;if(i===ru)return n.ALPHA;if(i===au)return n.RGB;if(i===ci)return n.RGBA;if(i===Ni)return n.DEPTH_COMPONENT;if(i===ki)return n.DEPTH_STENCIL;if(i===Dl)return n.RED;if(i===Ul)return n.RED_INTEGER;if(i===us)return n.RG;if(i===Fl)return n.RG_INTEGER;if(i===Ol)return n.RGBA_INTEGER;if(i===Ba||i===ka||i===za||i===Ha)if(a===vt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Ba)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ka)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===za)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ha)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Ba)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ka)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===za)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ha)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Bl||i===kl||i===zl||i===Hl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Bl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===kl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===zl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Hl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Vl||i===Gl||i===Wl||i===Xl||i===ql||i===Va||i===Yl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Vl||i===Gl)return a===vt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Wl)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Xl)return r.COMPRESSED_R11_EAC;if(i===ql)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Va)return r.COMPRESSED_RG11_EAC;if(i===Yl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===$l||i===Zl||i===Kl||i===Jl||i===jl||i===Ql||i===ec||i===tc||i===nc||i===ic||i===sc||i===rc||i===ac||i===oc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===$l)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Zl)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Kl)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Jl)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===jl)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ql)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ec)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===tc)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===nc)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ic)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===sc)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===rc)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===ac)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===oc)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===lc||i===cc||i===hc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===lc)return a===vt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===cc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===hc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===uc||i===fc||i===Ga||i===dc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===uc)return r.COMPRESSED_RED_RGTC1_EXT;if(i===fc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ga)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===dc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Os?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var xM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,yM=`
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

}`,wu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new ya(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new Zn({vertexShader:xM,fragmentShader:yM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new $e(new $n(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Eu=class extends fi{constructor(e,t){super();let i=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,f=null,u=null,d=null,m=null,_=typeof XRWebGLBinding<"u",p=new wu,g={},M=t.getContextAttributes(),E=null,y=null,v=[],b=[],x=new he,T=null,P=null,S=new tn;S.viewport=new Lt;let A=new tn;A.viewport=new Lt;let D=[S,A],C=new wl,w=null,R=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let ee=v[V];return ee===void 0&&(ee=new gr,v[V]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(V){let ee=v[V];return ee===void 0&&(ee=new gr,v[V]=ee),ee.getGripSpace()},this.getHand=function(V){let ee=v[V];return ee===void 0&&(ee=new gr,v[V]=ee),ee.getHandSpace()};function L(V){let ee=b.indexOf(V.inputSource);if(ee===-1)return;let oe=v[ee];oe!==void 0&&(oe.update(V.inputSource,V.frame,c||a),oe.dispatchEvent({type:V.type,data:V.inputSource}))}function B(){s.removeEventListener("select",L),s.removeEventListener("selectstart",L),s.removeEventListener("selectend",L),s.removeEventListener("squeeze",L),s.removeEventListener("squeezestart",L),s.removeEventListener("squeezeend",L),s.removeEventListener("end",B),s.removeEventListener("inputsourceschange",z);for(let V=0;V<v.length;V++){let ee=b[V];ee!==null&&(b[V]=null,v[V].disconnect(ee))}w=null,R=null,p.reset();for(let V in g)delete g[V];if(e.setRenderTarget(E),d=null,u=null,f=null,s=null,y=null,J.stop(),i.isPresenting=!1,e.setPixelRatio(T),e.setSize(x.width,x.height,!1),P!==null){let V=P.camera;V.fov=P.fov,V.zoom=P.zoom,V.updateProjectionMatrix(),P=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){r=V,i.isPresenting===!0&&He("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){o=V,i.isPresenting===!0&&He("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(V){c=V},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return f===null&&_&&(f=new XRWebGLBinding(s,t)),f},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(V){if(s=V,s!==null){if(E=e.getRenderTarget(),s.addEventListener("select",L),s.addEventListener("selectstart",L),s.addEventListener("selectend",L),s.addEventListener("squeeze",L),s.addEventListener("squeezestart",L),s.addEventListener("squeezeend",L),s.addEventListener("end",B),s.addEventListener("inputsourceschange",z),M.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(x),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let oe=null,Te=null,fe=null;M.depth&&(fe=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,oe=M.stencil?ki:Ni,Te=M.stencil?Os:oi);let Le={colorFormat:t.RGBA8,depthFormat:fe,scaleFactor:r};f=this.getBinding(),u=f.createProjectionLayer(Le),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),y=new kn(u.textureWidth,u.textureHeight,{format:ci,type:Ln,depthTexture:new Fi(u.textureWidth,u.textureHeight,Te,void 0,void 0,void 0,void 0,void 0,void 0,oe),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let oe={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,oe),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),y=new kn(d.framebufferWidth,d.framebufferHeight,{format:ci,type:Ln,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),J.setContext(s),J.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function z(V){for(let ee=0;ee<V.removed.length;ee++){let oe=V.removed[ee],Te=b.indexOf(oe);Te>=0&&(b[Te]=null,v[Te].disconnect(oe))}for(let ee=0;ee<V.added.length;ee++){let oe=V.added[ee],Te=b.indexOf(oe);if(Te===-1){for(let Le=0;Le<v.length;Le++)if(Le>=b.length){b.push(oe),Te=Le;break}else if(b[Le]===null){b[Le]=oe,Te=Le;break}if(Te===-1)break}let fe=v[Te];fe&&fe.connect(oe)}}function U(V,ee){ee===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(ee.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(s===null)return;let ee=V.near,oe=V.far;p.texture!==null&&(p.depthNear>0&&(ee=p.depthNear),p.depthFar>0&&(oe=p.depthFar)),C.near=A.near=S.near=ee,C.far=A.far=S.far=oe,(w!==C.near||R!==C.far)&&(s.updateRenderState({depthNear:C.near,depthFar:C.far}),w=C.near,R=C.far),C.layers.mask=V.layers.mask|6,S.layers.mask=C.layers.mask&-5,A.layers.mask=C.layers.mask&-3;let Te=V.parent,fe=C.cameras;U(C,Te);for(let Le=0;Le<fe.length;Le++)U(fe[Le],Te);C.projectionMatrix.copy(S.projectionMatrix),C.projectionMatrixInverse.copy(S.projectionMatrixInverse),P===null&&V.isPerspectiveCamera&&(P={camera:V,fov:V.fov,zoom:V.zoom}),F(V,C,Te)};function F(V,ee,oe){oe===null?V.matrix.copy(ee.matrixWorld):(V.matrix.copy(oe.matrixWorld),V.matrix.invert(),V.matrix.multiply(ee.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(ee.projectionMatrix),V.projectionMatrixInverse.copy(ee.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=el*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(u===null&&d===null))return l},this.setFoveation=function(V){l=V,u!==null&&(u.fixedFoveation=V),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=V)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(C)},this.getCameraTexture=function(V){return g[V]};let H=null;function $(V,ee){if(h=ee.getViewerPose(c||a),m=ee,h!==null){let oe=h.views;d!==null&&(e.setRenderTargetFramebuffer(y,d.framebuffer),e.setRenderTarget(y));let Te=!1;oe.length!==C.cameras.length&&(C.cameras.length=0,Te=!0);for(let ze=0;ze<oe.length;ze++){let tt=oe[ze],rt=null;if(d!==null)rt=d.getViewport(tt);else{let ge=f.getViewSubImage(u,tt);rt=ge.viewport,ze===0&&(e.setRenderTargetTextures(y,ge.colorTexture,ge.depthStencilTexture),e.setRenderTarget(y))}let ae=D[ze];ae===void 0&&(ae=new tn,ae.layers.enable(ze),ae.viewport=new Lt,D[ze]=ae),ae.matrix.fromArray(tt.transform.matrix),ae.matrix.decompose(ae.position,ae.quaternion,ae.scale),ae.projectionMatrix.fromArray(tt.projectionMatrix),ae.projectionMatrixInverse.copy(ae.projectionMatrix).invert(),ae.viewport.set(rt.x,rt.y,rt.width,rt.height),ze===0&&(C.matrix.copy(ae.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),Te===!0&&C.cameras.push(ae)}let fe=s.enabledFeatures;if(fe&&fe.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){f=i.getBinding();let ze=f.getDepthInformation(oe[0]);ze&&ze.isValid&&ze.texture&&p.init(ze,s.renderState)}if(fe&&fe.includes("camera-access")&&_){e.state.unbindTexture(),f=i.getBinding();for(let ze=0;ze<oe.length;ze++){let tt=oe[ze].camera;if(tt){let rt=g[tt];rt||(rt=new ya,g[tt]=rt);let ae=f.getCameraImage(tt);rt.sourceTexture=ae}}}}for(let oe=0;oe<v.length;oe++){let Te=b[oe],fe=v[oe];Te!==null&&fe!==void 0&&fe.update(Te,ee,c||a)}H&&H(V,ee),ee.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ee}),m=null}let J=new Vp;J.setAnimationLoop($),this.setAnimationLoop=function(V){H=V},this.dispose=function(){}}},_M=new xt,jp=new Ye;jp.set(-1,0,0,0,1,0,0,0,1);function vM(n,e){function t(p,g){p.matrixAutoUpdate===!0&&p.updateMatrix(),g.value.copy(p.matrix)}function i(p,g){g.color.getRGB(p.fogColor.value,du(n)),g.isFog?(p.fogNear.value=g.near,p.fogFar.value=g.far):g.isFogExp2&&(p.fogDensity.value=g.density)}function s(p,g,M,E,y){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(p,g):g.isMeshLambertMaterial?(r(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(p,g),f(p,g)):g.isMeshPhongMaterial?(r(p,g),h(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(p,g),u(p,g),g.isMeshPhysicalMaterial&&d(p,g,y)):g.isMeshMatcapMaterial?(r(p,g),m(p,g)):g.isMeshDepthMaterial?r(p,g):g.isMeshDistanceMaterial?(r(p,g),_(p,g)):g.isMeshNormalMaterial?r(p,g):g.isLineBasicMaterial?(a(p,g),g.isLineDashedMaterial&&o(p,g)):g.isPointsMaterial?l(p,g,M,E):g.isSpriteMaterial?c(p,g):g.isShadowMaterial?(p.color.value.copy(g.color),p.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(p,g){p.opacity.value=g.opacity,g.color&&p.diffuse.value.copy(g.color),g.emissive&&p.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(p.map.value=g.map,t(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.bumpMap&&(p.bumpMap.value=g.bumpMap,t(g.bumpMap,p.bumpMapTransform),p.bumpScale.value=g.bumpScale,g.side===mn&&(p.bumpScale.value*=-1)),g.normalMap&&(p.normalMap.value=g.normalMap,t(g.normalMap,p.normalMapTransform),p.normalScale.value.copy(g.normalScale),g.side===mn&&p.normalScale.value.negate()),g.displacementMap&&(p.displacementMap.value=g.displacementMap,t(g.displacementMap,p.displacementMapTransform),p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias),g.emissiveMap&&(p.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,p.emissiveMapTransform)),g.specularMap&&(p.specularMap.value=g.specularMap,t(g.specularMap,p.specularMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest);let M=e.get(g),E=M.envMap,y=M.envMapRotation;E&&(p.envMap.value=E,p.envMapRotation.value.setFromMatrix4(_M.makeRotationFromEuler(y)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(jp),p.reflectivity.value=g.reflectivity,p.ior.value=g.ior,p.refractionRatio.value=g.refractionRatio),g.lightMap&&(p.lightMap.value=g.lightMap,p.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,p.lightMapTransform)),g.aoMap&&(p.aoMap.value=g.aoMap,p.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,p.aoMapTransform))}function a(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,g.map&&(p.map.value=g.map,t(g.map,p.mapTransform))}function o(p,g){p.dashSize.value=g.dashSize,p.totalSize.value=g.dashSize+g.gapSize,p.scale.value=g.scale}function l(p,g,M,E){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.size.value=g.size*M,p.scale.value=E*.5,g.map&&(p.map.value=g.map,t(g.map,p.uvTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function c(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.rotation.value=g.rotation,g.map&&(p.map.value=g.map,t(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function h(p,g){p.specular.value.copy(g.specular),p.shininess.value=Math.max(g.shininess,1e-4)}function f(p,g){g.gradientMap&&(p.gradientMap.value=g.gradientMap)}function u(p,g){p.metalness.value=g.metalness,g.metalnessMap&&(p.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,p.metalnessMapTransform)),p.roughness.value=g.roughness,g.roughnessMap&&(p.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,p.roughnessMapTransform)),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)}function d(p,g,M){p.ior.value=g.ior,g.diffuseRoughness>0&&(p.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap&&(p.diffuseRoughnessMap.value=g.diffuseRoughnessMap,t(g.diffuseRoughnessMap,p.diffuseRoughnessMapTransform))),g.sheen>0&&(p.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),p.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(p.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,p.sheenColorMapTransform)),g.sheenRoughnessMap&&(p.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,p.sheenRoughnessMapTransform))),g.clearcoat>0&&(p.clearcoat.value=g.clearcoat,p.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(p.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,p.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(p.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===mn&&p.clearcoatNormalScale.value.negate())),g.dispersion>0&&(p.dispersion.value=g.dispersion),g.retroreflectivity>0&&(p.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(p.iridescence.value=g.iridescence,p.iridescenceIOR.value=g.iridescenceIOR,p.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,p.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap&&(p.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,p.iridescenceMapTransform)),g.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),g.transmission>0&&(p.transmission.value=g.transmission,p.transmissionSamplerMap.value=M.texture,p.transmissionSamplerSize.value.set(M.width,M.height),g.transmissionMap&&(p.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,p.transmissionMapTransform)),p.thickness.value=g.thickness,g.thicknessMap&&(p.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=g.attenuationDistance,p.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(p.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(p.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=g.specularIntensity,p.specularColor.value.copy(g.specularColor),g.specularColorMap&&(p.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,p.specularColorMapTransform)),g.specularIntensityMap&&(p.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,p.specularIntensityMapTransform))}function m(p,g){g.matcap&&(p.matcap.value=g.matcap)}function _(p,g){let M=e.get(g).light;p.referencePosition.value.setFromMatrixPosition(M.matrixWorld),p.nearDistance.value=M.shadow.camera.near,p.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function MM(n,e,t,i){let s={},r={};function a(M,E){let y=E.program;i.uniformBlockBinding(M,y,s[M.id])}function o(M,E){let y=s[M.id];y===void 0&&(m(M),y=l(M),s[M.id]=y,M.addEventListener("dispose",p));let v=E.program;i.updateUBOMapping(M,v);let b=e.render.frame;r[M.id]!==b&&(c(M),r[M.id]=b)}function l(M){let E=n.createBuffer(),y=M.__size,v=M.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,y,v),n.bindBuffer(n.UNIFORM_BUFFER,null),E}function c(M){let E=s[M.id],y=M.uniforms,v=M.__cache;n.bindBuffer(n.UNIFORM_BUFFER,E);for(let b=0,x=y.length;b<x;b++){let T=y[b];if(Array.isArray(T))for(let P=0,S=T.length;P<S;P++)h(T[P],b,P,v);else h(T,b,0,v)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function h(M,E,y,v){if(u(M,E,y,v)===!0){let b=M.__offset,x=M.value;if(Array.isArray(x)){let T=0;for(let P=0;P<x.length;P++){let S=x[P],A=_(S,!0);f(S,M.__data,T),T+=A.storage/Float32Array.BYTES_PER_ELEMENT}}else f(x,M.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,b,M.__data)}}function f(M,E,y){typeof M=="number"||typeof M=="boolean"?E[y]=M:M.isMatrix3?(E[y]=M.elements[0],E[y+1]=M.elements[1],E[y+2]=M.elements[2],E[y+3]=0,E[y+4]=M.elements[3],E[y+5]=M.elements[4],E[y+6]=M.elements[5],E[y+7]=0,E[y+8]=M.elements[6],E[y+9]=M.elements[7],E[y+10]=M.elements[8],E[y+11]=0):ArrayBuffer.isView(M)?E.set(M.subarray(0,E.length-y),y):M.toArray(E,y)}function u(M,E,y,v){let b=M.value,x=E+"_"+y;if(Array.isArray(b)){v[x]===void 0&&(v[x]=[]);let T=v[x],P=!1;for(let S=0;S<b.length;S++)d(b[S],T,S)===!0&&(P=!0);return P}return d(b,v,x)}function d(M,E,y){if(E[y]===void 0)return typeof M=="number"||typeof M=="boolean"?E[y]=M:ArrayBuffer.isView(M)?E[y]=M.slice():E[y]=M.clone(),!0;{let v=E[y];if(typeof M=="number"||typeof M=="boolean"){if(v!==M)return E[y]=M,!0}else{if(ArrayBuffer.isView(M))return!0;if(v.equals(M)===!1)return v.copy(M),!0}}return!1}function m(M){let E=M.uniforms,y=0,v=16;for(let x=0,T=E.length;x<T;x++){let P=Array.isArray(E[x])?E[x]:[E[x]];for(let S=0,A=P.length;S<A;S++){let D=P[S],C=Array.isArray(D.value)?D.value:[D.value],w=Array.isArray(E[x])||Array.isArray(D.value),R=y;for(let B=0,z=C.length;B<z;B++){let U=C[B],F=_(U,w),H=y%v,$=H%F.boundary,J=H+$;y+=$,J!==0&&v-J<F.storage&&(y+=v-J),B===0&&(R=y),y+=F.storage}let L=D.type==="int"?Int32Array:D.type==="uint"?Uint32Array:Float32Array;D.__data=new L((y-R)/Float32Array.BYTES_PER_ELEMENT),D.__offset=R}}let b=y%v;return b>0&&(y+=v-b),M.__size=y,M.__cache={},this}function _(M,E){let y={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(y.boundary=4,y.storage=4):M.isVector2?(y.boundary=8,y.storage=8):M.isVector3||M.isColor?(y.boundary=16,y.storage=12):M.isVector4?(y.boundary=16,y.storage=16):M.isMatrix3?(y.boundary=16,y.storage=48):M.isMatrix4?(y.boundary=16,y.storage=64):M.isTexture?He("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(y.boundary=16,y.storage=M.byteLength):He("WebGLRenderer: Unsupported uniform value type.",M),E===!0&&(y.boundary=16,y.storage=Math.ceil(y.storage/16)*16),y}function p(M){let E=M.target;E.removeEventListener("dispose",p),n.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function g(){for(let M in s)n.deleteBuffer(s[M]);s={},r={}}return{bind:a,update:o,dispose:g}}var bM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),vi=null;function SM(){return vi===null&&(vi=new ma(bM,16,16,us,li),vi.name="DFG_LUT",vi.minFilter=Pn,vi.magFilter=Pn,vi.wrapS=ui,vi.wrapT=ui,vi.generateMipmaps=!1,vi.needsUpdate=!0),vi}var ks=class{constructor(e={}){let{canvas:t=rp(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:u=!1,outputBufferType:d=Ln}=e;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=a;let _=d,p=new Set([Ol,Fl,Ul]),g=new Set([Ln,oi,Ar,Os,Ll,Nl]),M=new Uint32Array(4),E=new Int32Array(4),y={textures:[],min:[],max:[],resolution:[]},v=null,b=null,x=[],T=[],P=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=_i,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let S=this,A=!1,D=null,C=null,w=null,R=null;this._outputColorSpace=dn;let L=0,B=0,z=null,U=-1,F=null,H=new Lt,$=new Lt,J=null,V=new Ve(0),ee=0,oe=t.width,Te=t.height,fe=1,Le=null,St=null,ze=new Lt(0,0,oe,Te),tt=new Lt(0,0,oe,Te),rt=!1,ae=new ss,ge=new rl,de=!1,Ce=!1,Se=new xt,Je=new W,Fe=new Lt,at={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},lt=!1;function gt(){return z===null?fe:1}let Y=i;function Jt(N,q){return t.getContext(N,q)}let it,Tt,ve,Vt,ke,Xe,k,I,K,le,re,pe,Me,ne,ie,xe,G,se,te,ye,ue,me,Oe;try{let N={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",Be,!1),t.addEventListener("webglcontextrestored",je,!1),t.addEventListener("webglcontextcreationerror",Ee,!1),Y===null){let q="webgl2";if(Y=Jt(q,N),Y===null)throw Jt(q)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Qe()}catch(N){throw t.removeEventListener("webglcontextlost",Be,!1),t.removeEventListener("webglcontextrestored",je,!1),t.removeEventListener("webglcontextcreationerror",Ee,!1),Ge("WebGLRenderer: "+N.message),N}function Qe(){it=new D_(Y),it.init(),ue=new gM(Y,it),Tt=new S_(Y,it,e,ue),ve=new pM(Y,it),Tt.reversedDepthBuffer&&u&&ve.buffers.depth.setReversed(!0),C=Y.createFramebuffer(),w=Y.createFramebuffer(),R=Y.createFramebuffer(),Vt=new O_(Y),ke=new eM,Xe=new mM(Y,it,ve,ke,Tt,ue,Vt),k=new N_(S),I=new kg(Y),me=new M_(Y,I),K=new U_(Y,I,Vt,me),le=new k_(Y,K,I,me,Vt),se=new B_(Y,Tt,Xe),ie=new T_(ke),re=new Qv(S,k,it,Tt,me,ie),pe=new vM(S,ke),Me=new nM,ne=new lM(it),G=new v_(S,k,ve,le,m,l),xe=new dM(S,le,Tt),Oe=new MM(Y,Vt,Tt,ve),te=new b_(Y,it,Vt),ye=new F_(Y,it,Vt),Vt.programs=re.programs,S.capabilities=Tt,S.extensions=it,S.properties=ke,S.renderLists=Me,S.shadowMap=xe,S.state=ve,S.info=Vt}_!==Ln&&(P=new H_(_,t.width,t.height,o,s,r));let ce=new Eu(S,Y);this.xr=ce,this.getContext=function(){return Y},this.getContextAttributes=function(){return Y.getContextAttributes()},this.forceContextLoss=function(){let N=it.get("WEBGL_lose_context");N&&N.loseContext()},this.forceContextRestore=function(){let N=it.get("WEBGL_lose_context");N&&N.restoreContext()},this.getPixelRatio=function(){return fe},this.setPixelRatio=function(N){N!==void 0&&(fe=N,this.setSize(oe,Te,!1))},this.getSize=function(N){return N.set(oe,Te)},this.setSize=function(N,q,Q=!0){if(ce.isPresenting){He("WebGLRenderer: Can't change size while VR device is presenting.");return}oe=N,Te=q,t.width=Math.floor(N*fe),t.height=Math.floor(q*fe),Q===!0&&(t.style.width=N+"px",t.style.height=q+"px"),P!==null&&P.setSize(t.width,t.height),this.setViewport(0,0,N,q)},this.getDrawingBufferSize=function(N){return N.set(oe*fe,Te*fe).floor()},this.setDrawingBufferSize=function(N,q,Q){oe=N,Te=q,fe=Q,t.width=Math.floor(N*Q),t.height=Math.floor(q*Q),this.setViewport(0,0,N,q)},this.setEffects=function(N){if(_===Ln){Ge("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(N){for(let q=0;q<N.length;q++)if(N[q].isOutputPass===!0){He("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}P.setEffects(N||[])},this.getCurrentViewport=function(N){return N.copy(H)},this.getViewport=function(N){return N.copy(ze)},this.setViewport=function(N,q,Q,Z){N.isVector4?ze.set(N.x,N.y,N.z,N.w):ze.set(N,q,Q,Z),ve.viewport(H.copy(ze).multiplyScalar(gt()).round())},this.getScissor=function(N){return N.copy(tt)},this.setScissor=function(N,q,Q,Z){N.isVector4?tt.set(N.x,N.y,N.z,N.w):tt.set(N,q,Q,Z),ve.scissor($.copy(tt).multiplyScalar(gt()).round())},this.getScissorTest=function(){return rt},this.setScissorTest=function(N){ve.setScissorTest(rt=N)},this.setOpaqueSort=function(N){Le=N},this.setTransparentSort=function(N){St=N},this.getClearColor=function(N){return N.copy(G.getClearColor())},this.setClearColor=function(){G.setClearColor(...arguments)},this.getClearAlpha=function(){return G.getClearAlpha()},this.setClearAlpha=function(){G.setClearAlpha(...arguments)},this.clear=function(N=!0,q=!0,Q=!0){let Z=0;if(N){let j=!1;if(z!==null){let be=z.texture.format;j=p.has(be)}if(j){let be=z.texture.type,Ie=g.has(be),_e=G.getClearColor(),Re=G.getClearAlpha(),Ue=_e.r,Ke=_e.g,ct=_e.b;Ie?(M[0]=Ue,M[1]=Ke,M[2]=ct,M[3]=Re,Y.clearBufferuiv(Y.COLOR,0,M)):(E[0]=Ue,E[1]=Ke,E[2]=ct,E[3]=Re,Y.clearBufferiv(Y.COLOR,0,E))}else Z|=Y.COLOR_BUFFER_BIT}q&&(Z|=Y.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Q&&(Z|=Y.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Z!==0&&Y.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(N){N.setRenderer(this),D=N},this.dispose=function(){t.removeEventListener("webglcontextlost",Be,!1),t.removeEventListener("webglcontextrestored",je,!1),t.removeEventListener("webglcontextcreationerror",Ee,!1),G.dispose(),Me.dispose(),ne.dispose(),Xe.dispose(),ke.dispose(),k.dispose(),le.dispose(),K.dispose(),me.dispose(),Oe.dispose(),re.dispose(),ce.dispose(),ce.removeEventListener("sessionstart",Bf),ce.removeEventListener("sessionend",kf),Ms.stop()};function Be(N){N.preventDefault(),oa("WebGLRenderer: Context Lost."),A=!0}function je(){oa("WebGLRenderer: Context Restored."),A=!1;let N=Vt.autoReset,q=xe.enabled,Q=xe.autoUpdate,Z=xe.needsUpdate,j=xe.type;Qe(),Vt.autoReset=N,xe.enabled=q,xe.autoUpdate=Q,xe.needsUpdate=Z,xe.type=j}function Ee(N){Ge("WebGLRenderer: A WebGL context could not be created. Reason: ",N.statusMessage)}function Mt(N){let q=N.target;q.removeEventListener("dispose",Mt),an(q)}function an(N){Ki(N),ke.remove(N)}function Ki(N){let q=ke.get(N).programs;q!==void 0&&(q.forEach(function(Q){re.releaseProgram(Q)}),N.isShaderMaterial&&re.releaseShaderCache(N))}this.renderBufferDirect=function(N,q,Q,Z,j,be){q===null&&(q=at);let Ie=j.isMesh&&j.matrixWorld.determinantAffine()<0,_e=Sm(N,q,Q,Z,j);ve.setMaterial(Z,Ie);let Re=Q.index,Ue=1;if(Z.wireframe===!0){if(Re=K.getWireframeAttribute(Q),Re===void 0)return;Ue=2}let Ke=Q.drawRange,ct=Q.attributes.position,Ne=Ke.start*Ue,ht=(Ke.start+Ke.count)*Ue;be!==null&&(Ne=Math.max(Ne,be.start*Ue),ht=Math.min(ht,(be.start+be.count)*Ue)),Re!==null?(Ne=Math.max(Ne,0),ht=Math.min(ht,Re.count)):ct!=null&&(Ne=Math.max(Ne,0),ht=Math.min(ht,ct.count));let jt=ht-Ne;if(jt<0||jt===1/0)return;me.setup(j,Z,_e,Q,Re);let At,wt=te;if(Re!==null&&(At=I.get(Re),wt=ye,wt.setIndex(At)),j.isMesh)Z.wireframe===!0?(ve.setLineWidth(Z.wireframeLinewidth*gt()),wt.setMode(Y.LINES)):wt.setMode(Y.TRIANGLES);else if(j.isLine){let _n=Z.linewidth;_n===void 0&&(_n=1),ve.setLineWidth(_n*gt()),j.isLineSegments?wt.setMode(Y.LINES):j.isLineLoop?wt.setMode(Y.LINE_LOOP):wt.setMode(Y.LINE_STRIP)}else j.isPoints?wt.setMode(Y.POINTS):j.isSprite&&wt.setMode(Y.TRIANGLES);if(j.isBatchedMesh)if(it.get("WEBGL_multi_draw"))wt.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{let _n=j._multiDrawStarts,De=j._multiDrawCounts,Rn=j._multiDrawCount,_t=Re?I.get(Re).bytesPerElement:1,bs=ke.get(Z).currentProgram.getUniforms();for(let vn=0;vn<Rn;vn++)bs.setValue(Y,"_gl_DrawID",vn),wt.render(_n[vn]/_t,De[vn])}else if(j.isInstancedMesh)wt.renderInstances(Ne,jt,j.count);else if(Q.isInstancedBufferGeometry){let _n=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,De=Math.min(Q.instanceCount,_n);wt.renderInstances(Ne,jt,De)}else wt.render(Ne,jt)};function Of(N,q,Q,Z){D!==null&&N.isNodeMaterial&&D.setObject(Z,N),de===!0&&ie.setState(N,Q,!1),N.transparent===!0&&N.side===yi&&N.forceSinglePass===!1?(N.side=mn,N.needsUpdate=!0,Gr(N,q,Z),N.side=hs,N.needsUpdate=!0,Gr(N,q,Z),N.side=yi):Gr(N,q,Z)}this.compile=function(N,q,Q=null){Q===null&&(Q=N),D!==null&&D.renderStart(N,q,Q),b=ne.get(Q),b.init(q),T.push(b),Q.traverseVisible(function(j){j.isLight&&j.layers.test(q.layers)&&(b.pushLight(j),j.castShadow&&b.pushShadow(j))}),N!==Q&&N.traverseVisible(function(j){j.isLight&&j.layers.test(q.layers)&&(b.pushLight(j),j.castShadow&&b.pushShadow(j))}),b.setupLights(),D!==null&&D.updateLights(b.state.lightsArray),Ce=this.localClippingEnabled,de=ie.init(this.clippingPlanes,Ce),de===!0&&ie.setGlobalState(this.clippingPlanes,q),D!==null&&xe.render(b.state.shadowsArray,Q,q);let Z=new Set;return N.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;let be=j.material;if(be)if(Array.isArray(be))for(let Ie=0;Ie<be.length;Ie++){let _e=be[Ie];Of(_e,Q,q,j),Z.add(_e)}else Of(be,Q,q,j),Z.add(be)}),b=T.pop(),D!==null&&D.renderEnd(),Z},this.compileAsync=function(N,q,Q=null){let Z=this.compile(N,q,Q);return new Promise(j=>{function be(){if(Z.forEach(function(Ie){let Re=ke.get(Ie).currentProgram;(Re===void 0||Re.isReady())&&Z.delete(Ie)}),Z.size===0){j(N);return}setTimeout(be,10)}it.get("KHR_parallel_shader_compile")!==null?be():setTimeout(be,10)})};let nh=null;function Mm(N){nh&&nh(N)}function Bf(){Ms.stop()}function kf(){Ms.start()}let Ms=new Vp;Ms.setAnimationLoop(Mm),typeof self<"u"&&Ms.setContext(self),this.setAnimationLoop=function(N){nh=N,ce.setAnimationLoop(N),N===null?Ms.stop():Ms.start()},ce.addEventListener("sessionstart",Bf),ce.addEventListener("sessionend",kf),this.render=function(N,q){if(q!==void 0&&q.isCamera!==!0){Ge("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;D!==null&&D.renderStart(N,q);let Q=ce.enabled===!0&&ce.isPresenting===!0,Z=P!==null&&(z===null||Q)&&P.begin(S,z);if(N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),ce.enabled===!0&&ce.isPresenting===!0&&(P===null||P.isCompositing()===!1)&&(ce.cameraAutoUpdate===!0&&ce.updateCamera(q),q=ce.getCamera()),N.isScene===!0&&N.onBeforeRender(S,N,q,z),b=ne.get(N,T.length),b.init(q),b.state.textureUnits=Xe.getTextureUnits(),T.push(b),Se.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),q.isArrayCamera?ge.setFromArrayCamera(q):ae.setFromProjectionMatrix(Se,Yn,q.reversedDepth),Ce=this.localClippingEnabled,de=ie.init(this.clippingPlanes,Ce),v=Me.get(N,x.length),v.init(),x.push(v),this.info.render.frame++,ce.enabled===!0&&ce.isPresenting===!0){let Ie=S.xr.getDepthSensingMesh();Ie!==null&&ih(Ie,q,-1/0,S.sortObjects)}ih(N,q,0,S.sortObjects),v.finish(),D!==null&&D.updateLights(b.state.lightsArray),S.sortObjects===!0&&v.sort(Le,St),lt=ce.enabled===!1||ce.isPresenting===!1||ce.hasDepthSensing()===!1,lt&&G.addToRenderList(v,N),this.info.autoReset===!0&&this.info.reset(),de===!0&&ie.beginShadows();let j=b.state.shadowsArray;if(xe.render(j,N,q),de===!0&&ie.endShadows(),(Z&&P.hasRenderPass())===!1){let Ie=v.opaque,_e=v.transmissive;if(b.setupLights(),q.isArrayCamera){let Re=q.cameras;if(_e.length>0)for(let Ue=0,Ke=Re.length;Ue<Ke;Ue++){let ct=Re[Ue];Hf(Ie,_e,N,ct)}lt&&G.render(N);for(let Ue=0,Ke=Re.length;Ue<Ke;Ue++){let ct=Re[Ue];zf(v,N,ct,ct.viewport)}}else _e.length>0&&Hf(Ie,_e,N,q),lt&&G.render(N),zf(v,N,q)}z!==null&&B===0&&(Xe.updateMultisampleRenderTarget(z),Xe.updateRenderTargetMipmap(z)),Z&&P.end(S),N.isScene===!0&&N.onAfterRender(S,N,q),me.resetDefaultState(),U=-1,F=null,T.pop(),T.length>0?(b=T[T.length-1],Xe.setTextureUnits(b.state.textureUnits),de===!0&&ie.setGlobalState(S.clippingPlanes,b.state.camera)):b=null,x.pop(),x.length>0?v=x[x.length-1]:v=null,D!==null&&D.renderEnd()};function ih(N,q,Q,Z){if(N.visible===!1)return;if(N.layers.test(q.layers)){if(N.isGroup)Q=N.renderOrder;else if(N.isLOD)N.autoUpdate===!0&&N.update(q);else if(N.isLight)b.pushLight(N),N.castShadow&&b.pushShadow(N);else if(N.isSprite){let Ie=q.isArrayCamera?ge:ae;if(!N.frustumCulled||N.intersectsFrustum(Ie)){Z&&Fe.setFromMatrixPosition(N.matrixWorld).applyMatrix4(Se);let _e=le.update(N),Re=N.material;Re.visible&&v.push(N,_e,Re,Q,Fe.z,null,q)}}else if(N.isMesh||N.isLine||N.isPoints){let Ie=q.isArrayCamera?ge:ae;if(!N.frustumCulled||N.intersectsFrustum(Ie)){let _e=le.update(N),Re=N.material;if(Z&&(N.boundingSphere!==void 0?(N.boundingSphere===null&&N.computeBoundingSphere(),Fe.copy(N.boundingSphere.center)):(_e.boundingSphere===null&&_e.computeBoundingSphere(),Fe.copy(_e.boundingSphere.center)),Fe.applyMatrix4(N.matrixWorld).applyMatrix4(Se)),Array.isArray(Re)){let Ue=_e.groups;for(let Ke=0,ct=Ue.length;Ke<ct;Ke++){let Ne=Ue[Ke],ht=Re[Ne.materialIndex];ht&&ht.visible&&v.push(N,_e,ht,Q,Fe.z,Ne,q)}}else Re.visible&&v.push(N,_e,Re,Q,Fe.z,null,q)}}}let be=N.children;for(let Ie=0,_e=be.length;Ie<_e;Ie++)ih(be[Ie],q,Q,Z)}function zf(N,q,Q,Z){let{opaque:j,transmissive:be,transparent:Ie}=N;b.setupLightsView(Q),de===!0&&ie.setGlobalState(S.clippingPlanes,Q),Z&&ve.viewport(H.copy(Z)),j.length>0&&mo(j,q,Q),be.length>0&&mo(be,q,Q),Ie.length>0&&mo(Ie,q,Q),ve.buffers.depth.setTest(!0),ve.buffers.depth.setMask(!0),ve.buffers.color.setMask(!0),ve.setPolygonOffset(!1)}function Hf(N,q,Q,Z){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[Z.id]===void 0){let Ne=it.has("EXT_color_buffer_half_float")||it.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[Z.id]=new kn(1,1,{generateMipmaps:!0,type:Ne?li:Ln,minFilter:Bi,samples:Math.max(4,Tt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ut.workingColorSpace})}let be=b.state.transmissionRenderTarget[Z.id],Ie=Z.viewport||H;be.setSize(Ie.z*S.transmissionResolutionScale,Ie.w*S.transmissionResolutionScale);let _e=S.getRenderTarget(),Re=S.getActiveCubeFace(),Ue=S.getActiveMipmapLevel();S.setRenderTarget(be),S.getClearColor(V),ee=S.getClearAlpha(),ee<1&&S.setClearColor(16777215,.5),S.clear(),lt&&G.render(Q);let Ke=S.toneMapping;S.toneMapping=_i;let ct=Z.viewport;if(Z.viewport!==void 0&&(Z.viewport=void 0),b.setupLightsView(Z),de===!0&&ie.setGlobalState(S.clippingPlanes,Z),mo(N,Q,Z),Xe.updateMultisampleRenderTarget(be),Xe.updateRenderTargetMipmap(be),it.has("WEBGL_multisampled_render_to_texture")===!1){let Ne=!1;for(let ht=0,jt=q.length;ht<jt;ht++){let At=q[ht],{object:wt,geometry:_n,material:De,group:Rn}=At;if(De.side===yi&&wt.layers.test(Z.layers)){let _t=De.side;De.side=mn,De.needsUpdate=!0,Vf(wt,Q,Z,_n,De,Rn),De.side=_t,De.needsUpdate=!0,Ne=!0}}Ne===!0&&(Xe.updateMultisampleRenderTarget(be),Xe.updateRenderTargetMipmap(be))}S.setRenderTarget(_e,Re,Ue),S.setClearColor(V,ee),ct!==void 0&&(Z.viewport=ct),S.toneMapping=Ke}function mo(N,q,Q){let Z=q.isScene===!0?q.overrideMaterial:null;for(let j=0,be=N.length;j<be;j++){let Ie=N[j],{object:_e,geometry:Re,group:Ue}=Ie,Ke=Ie.material;Ke.allowOverride===!0&&Z!==null&&(Ke=Z),_e.layers.test(Q.layers)&&Vf(_e,q,Q,Re,Ke,Ue)}}function Vf(N,q,Q,Z,j,be){D!==null&&j.isNodeMaterial&&D.setObject(N,j),N.onBeforeRender(S,q,Q,Z,j,be),N.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,N.matrixWorld),N.normalMatrix.getNormalMatrix(N.modelViewMatrix),j.onBeforeRender(S,q,Q,Z,N,be),j.transparent===!0&&j.side===yi&&j.forceSinglePass===!1?(j.side=mn,j.needsUpdate=!0,S.renderBufferDirect(Q,q,Z,j,N,be),j.side=hs,j.needsUpdate=!0,S.renderBufferDirect(Q,q,Z,j,N,be),j.side=yi):S.renderBufferDirect(Q,q,Z,j,N,be),N.onAfterRender(S,q,Q,Z,j,be)}function Gf(N){let q=0;for(let Q of N)Q.texture!==null&&q++;return q}function Gr(N,q,Q){q.isScene!==!0&&(q=at);let Z=ke.get(N),j=b.state.lights,be=b.state.shadowsArray,Ie=j.state.version,_e=re.getParameters(N,j.state,be,q,Q,b.state.lightProbeGridArray),Re=re.getProgramCacheKey(_e),Ue=Z.programs;Z.environment=N.isMeshStandardMaterial||N.isMeshLambertMaterial||N.isMeshPhongMaterial?q.environment:null,Z.fog=q.fog;let Ke=N.isMeshStandardMaterial||N.isMeshLambertMaterial&&!N.envMap||N.isMeshPhongMaterial&&!N.envMap;Z.envMap=k.get(N.envMap||Z.environment,Ke),Z.envMapRotation=Z.environment!==null&&N.envMap===null?q.environmentRotation:N.envMapRotation,Ue===void 0&&(N.addEventListener("dispose",Mt),Ue=new Map,Z.programs=Ue,Z.programVariants=new Map);let ct=Ue.get(Re);if(ct!==void 0){if(Z.currentProgram===ct&&Z.lightsStateVersion===Ie)return Xf(N,_e),ct}else _e.uniforms=re.getUniforms(N),D!==null&&N.isNodeMaterial&&D.build(N,Q,_e),N.onBeforeCompile(_e,S),ct=re.acquireProgram(_e,Re),Ue.set(Re,ct),Z.uniforms=_e.uniforms;let Ne=Z.uniforms;return(!N.isShaderMaterial&&!N.isRawShaderMaterial||N.clipping===!0)&&(Ne.clippingPlanes=ie.uniform),Xf(N,_e),Z.needsLights=wm(N),Z.lightsStateVersion=Ie,Z.needsLights&&(Ne.ambientLightColor.value=j.state.ambient,Ne.lightProbe.value=j.state.probe,Ne.sunLights.value=j.state.sun,Ne.sunLightShadows.value=j.state.sunShadow,Ne.directionalLights.value=j.state.directional,Ne.directionalLightShadows.value=j.state.directionalShadow,Ne.spotLights.value=j.state.spot,Ne.spotLightShadows.value=j.state.spotShadow,Ne.rectAreaLights.value=j.state.rectArea,Ne.ltc_1.value=j.state.rectAreaLTC1,Ne.ltc_2.value=j.state.rectAreaLTC2,Ne.pointLights.value=j.state.point,Ne.pointLightShadows.value=j.state.pointShadow,Ne.hemisphereLights.value=j.state.hemi,Ne.sunShadowMatrix.value=j.state.sunShadowMatrix,Ne.sunShadowCascade.value=j.state.sunShadowCascade,Ne.directionalShadowMatrix.value=j.state.directionalShadowMatrix,Ne.spotLightMatrix.value=j.state.spotLightMatrix,Ne.spotLightMap.value=j.state.spotLightMap,Ne.pointShadowMatrix.value=j.state.pointShadowMatrix),Z.numLightProbeGrids=Gf(b.state.lightProbeGridArray),Z.currentProgram=ct,Z.uniformsList=null,ct}function bm(N,q,Q,Z,j){let be=ke.get(N),Ie=be.currentProgram.id+","+Z+","+j,_e=be.programVariants.get(Ie);return _e===void 0?(_e=Gr(N,q,Q),be.programVariants.set(Ie,_e)):(be.currentProgram=_e,be.uniformsList=null,be.outputColorSpace=Z,be.toneMapping=j),_e}function Wf(N){if(N.uniformsList===null){let q=N.currentProgram.getUniforms();N.uniformsList=Cr.seqWithValue(q.seq,N.uniforms)}return N.uniformsList}function Xf(N,q){let Q=ke.get(N);Q.outputColorSpace=q.outputColorSpace,Q.batching=q.batching,Q.batchingColor=q.batchingColor,Q.instancing=q.instancing,Q.instancingColor=q.instancingColor,Q.instancingMorph=q.instancingMorph,Q.skinning=q.skinning,Q.morphTargets=q.morphTargets,Q.morphNormals=q.morphNormals,Q.morphColors=q.morphColors,Q.morphTargetsCount=q.morphTargetsCount,Q.numClippingPlanes=q.numClippingPlanes,Q.numIntersection=q.numClipIntersection,Q.vertexAlphas=q.vertexAlphas,Q.vertexTangents=q.vertexTangents,Q.toneMapping=q.toneMapping}function Sm(N,q,Q,Z,j){q.isScene!==!0&&(q=at),Xe.resetTextureUnits();let be=q.fog,Ie=Z.isMeshStandardMaterial||Z.isMeshLambertMaterial||Z.isMeshPhongMaterial?q.environment:null,_e=z===null?S.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:ut.workingColorSpace,Re=Z.isMeshStandardMaterial||Z.isMeshLambertMaterial&&!Z.envMap||Z.isMeshPhongMaterial&&!Z.envMap,Ue=k.get(Z.envMap||Ie,Re),Ke=Z.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,ct=!!Q.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),Ne=!!Q.morphAttributes.position,ht=!!Q.morphAttributes.normal,jt=!!Q.morphAttributes.color,At=_i;Z.toneMapped&&(z===null||z.isXRRenderTarget===!0)&&(At=S.toneMapping);let wt=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,_n=wt!==void 0?wt.length:0,De=ke.get(Z),Rn=b.state.lights;if(de===!0&&(Ce===!0||N!==F)){let Ft=N===F&&Z.id===U;ie.setState(Z,N,Ft)}let _t=!1,bs=!1;Z.version===De.__version?De.needsLights&&De.lightsStateVersion!==Rn.state.version||j.isBatchedMesh&&De.batching===!1||!j.isBatchedMesh&&De.batching===!0||j.isBatchedMesh&&De.batchingColor===!0&&j._colorsTexture===null||j.isBatchedMesh&&De.batchingColor===!1&&j._colorsTexture!==null||j.isInstancedMesh&&De.instancing===!1||!j.isInstancedMesh&&De.instancing===!0||j.isSkinnedMesh&&De.skinning===!1||!j.isSkinnedMesh&&De.skinning===!0||j.isInstancedMesh&&De.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&De.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&De.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&De.instancingMorph===!1&&j.morphTexture!==null||De.envMap!==Ue||Z.fog===!0&&De.fog!==be||De.numClippingPlanes!==void 0&&(De.numClippingPlanes!==ie.numPlanes||De.numIntersection!==ie.numIntersection)||De.vertexAlphas!==Ke||De.vertexTangents!==ct||De.morphTargets!==Ne||De.morphNormals!==ht||De.morphColors!==jt||De.morphTargetsCount!==_n||De.numLightProbeGrids!==Gf(b.state.lightProbeGridArray)?_t=!0:(De.outputColorSpace!==_e||De.toneMapping!==At)&&(bs=!0):(_t=!0,De.__version=Z.version);let vn=De.currentProgram;(_t===!0||bs===!0)&&(vn=bs===!0?bm(Z,q,j,_e,At):Gr(Z,q,j),D&&Z.isNodeMaterial&&D.onUpdateProgram(Z,vn,De));let go=!1,Ji=!1,Ss=!1,mt=vn.getUniforms(),fn=De.uniforms;if(ve.useProgram(vn.program)&&(go=!0,Ji=!0,Ss=!0),Z.id!==U&&(U=Z.id,Ji=!0),go||F!==N){ve.buffers.depth.getReversed()&&N.reversedDepth!==!0&&(N._reversedDepth=!0,N.updateProjectionMatrix()),mt.setValue(Y,"projectionMatrix",N.projectionMatrix),mt.setValue(Y,"viewMatrix",N.matrixWorldInverse);let on=mt.map.cameraPosition;on!==void 0&&on.setValue(Y,Je.setFromMatrixPosition(N.matrixWorld)),Tt.logarithmicDepthBuffer&&mt.setValue(Y,"logDepthBufFC",2/(Math.log(N.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&mt.setValue(Y,"isOrthographic",N.isOrthographicCamera===!0),F!==N&&(F=N,Ji=!0,Ss=!0)}if(De.needsLights&&(Rn.state.sunShadowMap.length>0&&mt.setValue(Y,"sunShadowMap",Rn.state.sunShadowMap,Xe),Rn.state.directionalShadowMap.length>0&&mt.setValue(Y,"directionalShadowMap",Rn.state.directionalShadowMap,Xe),Rn.state.spotShadowMap.length>0&&mt.setValue(Y,"spotShadowMap",Rn.state.spotShadowMap,Xe),Rn.state.pointShadowMap.length>0&&mt.setValue(Y,"pointShadowMap",Rn.state.pointShadowMap,Xe)),j.isSkinnedMesh){mt.setOptional(Y,j,"bindMatrix"),mt.setOptional(Y,j,"bindMatrixInverse");let Ft=j.skeleton;Ft&&(Ft.boneTexture===null&&Ft.computeBoneTexture(),mt.setValue(Y,"boneTexture",Ft.boneTexture,Xe))}j.isBatchedMesh&&(mt.setOptional(Y,j,"batchingTexture"),mt.setValue(Y,"batchingTexture",j._matricesTexture,Xe),mt.setOptional(Y,j,"batchingIdTexture"),mt.setValue(Y,"batchingIdTexture",j._indirectTexture,Xe),mt.setOptional(Y,j,"batchingColorTexture"),j._colorsTexture!==null&&mt.setValue(Y,"batchingColorTexture",j._colorsTexture,Xe));let ei=Q.morphAttributes;if((ei.position!==void 0||ei.normal!==void 0||ei.color!==void 0)&&se.update(j,Q,vn),(Ji||De.receiveShadow!==j.receiveShadow)&&(De.receiveShadow=j.receiveShadow,mt.setValue(Y,"receiveShadow",j.receiveShadow)),(Z.isMeshStandardMaterial||Z.isMeshLambertMaterial||Z.isMeshPhongMaterial)&&Z.envMap===null&&q.environment!==null&&(fn.envMapIntensity.value=q.environmentIntensity),fn.dfgLUT!==void 0&&(fn.dfgLUT.value=SM()),Ji){if(mt.setValue(Y,"toneMappingExposure",S.toneMappingExposure),De.needsLights&&Tm(fn,Ss),be&&Z.fog===!0&&pe.refreshFogUniforms(fn,be),pe.refreshMaterialUniforms(fn,Z,fe,Te,b.state.transmissionRenderTarget[N.id]),De.needsLights&&De.numLightProbeGrids>0){let Ft=y,on=0;for(let wi of b.state.lightProbeGridArray)wi.texture!==null&&(Ft.textures[on]=wi.texture,Ft.min[on]=wi.boundingBox.min,Ft.max[on]=wi.boundingBox.max,Ft.resolution[on]=wi.resolution,on++);for(let wi in Ft)Ft[wi].length=on;fn.probesSH.value=Ft.textures,fn.probesMin.value=Ft.min,fn.probesMax.value=Ft.max,fn.probesResolution.value=Ft.resolution}Cr.upload(Y,Wf(De),fn,Xe)}if(Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(Cr.upload(Y,Wf(De),fn,Xe),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&mt.setValue(Y,"center",j.center),mt.setValue(Y,"modelViewMatrix",j.modelViewMatrix),mt.setValue(Y,"normalMatrix",j.normalMatrix),mt.setValue(Y,"modelMatrix",j.matrixWorld),Z.uniformsGroups!==void 0){let Ft=Z.uniformsGroups;for(let on=0,wi=Ft.length;on<wi;on++){let Yf=Ft[on];Oe.update(Yf,vn),Oe.bind(Yf,vn)}}return vn}function Tm(N,q){N.ambientLightColor.needsUpdate=q,N.lightProbe.needsUpdate=q,N.sunLights.needsUpdate=q,N.sunLightShadows.needsUpdate=q,N.directionalLights.needsUpdate=q,N.directionalLightShadows.needsUpdate=q,N.pointLights.needsUpdate=q,N.pointLightShadows.needsUpdate=q,N.spotLights.needsUpdate=q,N.spotLightShadows.needsUpdate=q,N.rectAreaLights.needsUpdate=q,N.hemisphereLights.needsUpdate=q}function wm(N){return N.isMeshLambertMaterial||N.isMeshToonMaterial||N.isMeshPhongMaterial||N.isMeshStandardMaterial||N.isShadowMaterial||N.isShaderMaterial&&N.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return z},this.setRenderTargetTextures=function(N,q,Q){let Z=ke.get(N);Z.__autoAllocateDepthBuffer=N.resolveDepthBuffer===!1,Z.__autoAllocateDepthBuffer===!1&&(Z.__useRenderToTexture=!1),ke.get(N.texture).__webglTexture=q,ke.get(N.depthTexture).__webglTexture=Z.__autoAllocateDepthBuffer?void 0:Q,Z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(N,q){let Q=ke.get(N);Q.__webglFramebuffer=q,Q.__useDefaultFramebuffer=q===void 0},this.setRenderTarget=function(N,q=0,Q=0){z=N,L=q,B=Q;let Z=null,j=!1,be=!1;if(N){let _e=ke.get(N);if(_e.__useDefaultFramebuffer!==void 0){ve.bindFramebuffer(Y.FRAMEBUFFER,_e.__webglFramebuffer),H.copy(N.viewport),$.copy(N.scissor),J=N.scissorTest,ve.viewport(H),ve.scissor($),ve.setScissorTest(J),U=-1;return}else if(_e.__webglFramebuffer===void 0)Xe.setupRenderTarget(N);else if(_e.__hasExternalTextures)Xe.rebindTextures(N,ke.get(N.texture).__webglTexture,ke.get(N.depthTexture).__webglTexture);else if(N.depthBuffer){let Ke=N.depthTexture;if(_e.__boundDepthTexture!==Ke){if(Ke!==null&&ke.has(Ke)&&(N.width!==Ke.image.width||N.height!==Ke.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Xe.setupDepthRenderbuffer(N)}}let Re=N.texture;(Re.isData3DTexture||Re.isDataArrayTexture||Re.isCompressedArrayTexture)&&(be=!0);let Ue=ke.get(N).__webglFramebuffer;N.isWebGLCubeRenderTarget?(Array.isArray(Ue[q])?Z=Ue[q][Q]:Z=Ue[q],j=!0):N.samples>0&&Xe.useMultisampledRTT(N)===!1?Z=ke.get(N).__webglMultisampledFramebuffer:Array.isArray(Ue)?Z=Ue[Q]:Z=Ue,H.copy(N.viewport),$.copy(N.scissor),J=N.scissorTest}else H.copy(ze).multiplyScalar(fe).floor(),$.copy(tt).multiplyScalar(fe).floor(),J=rt;if(Q!==0&&(Z=C),ve.bindFramebuffer(Y.FRAMEBUFFER,Z)&&ve.drawBuffers(N,Z),ve.viewport(H),ve.scissor($),ve.setScissorTest(J),j){let _e=ke.get(N.texture);Y.framebufferTexture2D(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_CUBE_MAP_POSITIVE_X+q,_e.__webglTexture,Q)}else if(be){let _e=q;for(let Re=0;Re<N.textures.length;Re++){let Ue=ke.get(N.textures[Re]);Y.framebufferTextureLayer(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0+Re,Ue.__webglTexture,Q,_e)}}else if(N!==null&&Q!==0){let _e=ke.get(N.texture);Y.framebufferTexture2D(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,_e.__webglTexture,Q)}U=-1};function qf(N){let q=ke.get(N);return(q.__readFormat!==N.format||q.__readType!==N.type)&&(q.__readFormat=N.format,q.__readType=N.type,q.__formatReadable=Tt.textureFormatReadable(N.format),q.__typeReadable=Tt.textureTypeReadable(N.type)),q}this.readRenderTargetPixels=function(N,q,Q,Z,j,be,Ie,_e=0){if(!(N&&N.isWebGLRenderTarget)){Ge("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Re=ke.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&Ie!==void 0&&(Re=Re[Ie],Array.isArray(Re)&&(Re=Re[0])),Re){ve.bindFramebuffer(Y.FRAMEBUFFER,Re);try{let Ue=N.textures[_e],Ke=Ue.format,ct=Ue.type;N.textures.length>1&&Y.readBuffer(Y.COLOR_ATTACHMENT0+_e);let Ne=qf(Ue);if(Ne.__formatReadable===!1){Ge("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ne.__typeReadable===!1){Ge("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=N.width-Z&&Q>=0&&Q<=N.height-j&&Y.readPixels(q,Q,Z,j,ue.convert(Ke),ue.convert(ct),be)}finally{let Ue=z!==null?ke.get(z).__webglFramebuffer:null;ve.bindFramebuffer(Y.FRAMEBUFFER,Ue)}}},this.readRenderTargetPixelsAsync=async function(N,q,Q,Z,j,be,Ie,_e=0){if(!(N&&N.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Re=ke.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&Ie!==void 0&&(Re=Re[Ie],Array.isArray(Re)&&(Re=Re[0])),Re)if(q>=0&&q<=N.width-Z&&Q>=0&&Q<=N.height-j){ve.bindFramebuffer(Y.FRAMEBUFFER,Re);let Ue=N.textures[_e],Ke=Ue.format,ct=Ue.type;N.textures.length>1&&Y.readBuffer(Y.COLOR_ATTACHMENT0+_e);let Ne=qf(Ue);if(Ne.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ne.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ht=Y.createBuffer();Y.bindBuffer(Y.PIXEL_PACK_BUFFER,ht),Y.bufferData(Y.PIXEL_PACK_BUFFER,be.byteLength,Y.STREAM_READ),Y.readPixels(q,Q,Z,j,ue.convert(Ke),ue.convert(ct),0),Y.bindBuffer(Y.PIXEL_PACK_BUFFER,null);let jt=z!==null?ke.get(z).__webglFramebuffer:null;ve.bindFramebuffer(Y.FRAMEBUFFER,jt);let At=Y.fenceSync(Y.SYNC_GPU_COMMANDS_COMPLETE,0);return Y.flush(),await op(Y,At,4),Y.bindBuffer(Y.PIXEL_PACK_BUFFER,ht),Y.getBufferSubData(Y.PIXEL_PACK_BUFFER,0,be),Y.bindBuffer(Y.PIXEL_PACK_BUFFER,null),Y.deleteBuffer(ht),Y.deleteSync(At),be}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(N,q=null,Q=0){let Z=Math.pow(2,-Q),j=Math.floor(N.image.width*Z),be=Math.floor(N.image.height*Z),Ie=q!==null?q.x:0,_e=q!==null?q.y:0;Xe.setTexture2D(N,0),Y.copyTexSubImage2D(Y.TEXTURE_2D,Q,0,0,Ie,_e,j,be),ve.unbindTexture()},this.copyTextureToTexture=function(N,q,Q=null,Z=null,j=0,be=0){let Ie,_e,Re,Ue,Ke,ct,Ne,ht,jt,At=N.isCompressedTexture?N.mipmaps[be]:N.image;if(Q!==null)Ie=Q.max.x-Q.min.x,_e=Q.max.y-Q.min.y,Re=Q.isBox3?Q.max.z-Q.min.z:1,Ue=Q.min.x,Ke=Q.min.y,ct=Q.isBox3?Q.min.z:0;else{let mt=Math.pow(2,-j);Ie=Math.floor(At.width*mt),_e=Math.floor(At.height*mt),N.isDataArrayTexture?Re=At.depth:N.isData3DTexture?Re=Math.floor(At.depth*mt):Re=1,Ue=0,Ke=0,ct=0}Z!==null?(Ne=Z.x,ht=Z.y,jt=Z.z):(Ne=0,ht=0,jt=0);let wt=ue.convert(q.format),_n=ue.convert(q.type),De;q.isData3DTexture?(Xe.setTexture3D(q,0),De=Y.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(Xe.setTexture2DArray(q,0),De=Y.TEXTURE_2D_ARRAY):(Xe.setTexture2D(q,0),De=Y.TEXTURE_2D),ve.activeTexture(Y.TEXTURE0),ve.pixelStorei(Y.UNPACK_FLIP_Y_WEBGL,q.flipY),ve.pixelStorei(Y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),ve.pixelStorei(Y.UNPACK_ALIGNMENT,q.unpackAlignment);let Rn=ve.getParameter(Y.UNPACK_ROW_LENGTH),_t=ve.getParameter(Y.UNPACK_IMAGE_HEIGHT),bs=ve.getParameter(Y.UNPACK_SKIP_PIXELS),vn=ve.getParameter(Y.UNPACK_SKIP_ROWS),go=ve.getParameter(Y.UNPACK_SKIP_IMAGES);ve.pixelStorei(Y.UNPACK_ROW_LENGTH,At.width),ve.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,At.height),ve.pixelStorei(Y.UNPACK_SKIP_PIXELS,Ue),ve.pixelStorei(Y.UNPACK_SKIP_ROWS,Ke),ve.pixelStorei(Y.UNPACK_SKIP_IMAGES,ct);let Ji=N.isDataArrayTexture||N.isData3DTexture,Ss=q.isDataArrayTexture||q.isData3DTexture;if(N.isDepthTexture){let mt=ke.get(N),fn=ke.get(q),ei=ke.get(mt.__renderTarget),Ft=ke.get(fn.__renderTarget);ve.bindFramebuffer(Y.READ_FRAMEBUFFER,ei.__webglFramebuffer),ve.bindFramebuffer(Y.DRAW_FRAMEBUFFER,Ft.__webglFramebuffer);for(let on=0;on<Re;on++)Ji&&(Y.framebufferTextureLayer(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,ke.get(N).__webglTexture,j,ct+on),Y.framebufferTextureLayer(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,ke.get(q).__webglTexture,be,jt+on)),Y.blitFramebuffer(Ue,Ke,Ue+Ie,Ke+_e,Ne,ht,Ne+Ie,ht+_e,Y.DEPTH_BUFFER_BIT,Y.NEAREST);ve.bindFramebuffer(Y.READ_FRAMEBUFFER,null),ve.bindFramebuffer(Y.DRAW_FRAMEBUFFER,null)}else if(j!==0||N.isRenderTargetTexture||ke.has(N)){let mt=ke.get(N),fn=ke.get(q);ve.bindFramebuffer(Y.READ_FRAMEBUFFER,w),ve.bindFramebuffer(Y.DRAW_FRAMEBUFFER,R);for(let ei=0;ei<Re;ei++)Ji?Y.framebufferTextureLayer(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,mt.__webglTexture,j,ct+ei):Y.framebufferTexture2D(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,mt.__webglTexture,j),Ss?Y.framebufferTextureLayer(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,fn.__webglTexture,be,jt+ei):Y.framebufferTexture2D(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,fn.__webglTexture,be),j!==0?Y.blitFramebuffer(Ue,Ke,Ue+Ie,Ke+_e,Ne,ht,Ne+Ie,ht+_e,Y.COLOR_BUFFER_BIT,Y.NEAREST):Ss?Y.copyTexSubImage3D(De,be,Ne,ht,jt+ei,Ue,Ke,Ie,_e):Y.copyTexSubImage2D(De,be,Ne,ht,Ue,Ke,Ie,_e);ve.bindFramebuffer(Y.READ_FRAMEBUFFER,null),ve.bindFramebuffer(Y.DRAW_FRAMEBUFFER,null)}else Ss?N.isDataTexture||N.isData3DTexture?Y.texSubImage3D(De,be,Ne,ht,jt,Ie,_e,Re,wt,_n,At.data):q.isCompressedArrayTexture?Y.compressedTexSubImage3D(De,be,Ne,ht,jt,Ie,_e,Re,wt,At.data):Y.texSubImage3D(De,be,Ne,ht,jt,Ie,_e,Re,wt,_n,At):N.isDataTexture?Y.texSubImage2D(Y.TEXTURE_2D,be,Ne,ht,Ie,_e,wt,_n,At.data):N.isCompressedTexture?Y.compressedTexSubImage2D(Y.TEXTURE_2D,be,Ne,ht,At.width,At.height,wt,At.data):Y.texSubImage2D(Y.TEXTURE_2D,be,Ne,ht,Ie,_e,wt,_n,At);ve.pixelStorei(Y.UNPACK_ROW_LENGTH,Rn),ve.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,_t),ve.pixelStorei(Y.UNPACK_SKIP_PIXELS,bs),ve.pixelStorei(Y.UNPACK_SKIP_ROWS,vn),ve.pixelStorei(Y.UNPACK_SKIP_IMAGES,go),be===0&&q.generateMipmaps===!0&&q.mipmapsAutoUpdate===!0&&Y.generateMipmap(De),ve.unbindTexture()},this.initRenderTarget=function(N){ke.get(N).__webglFramebuffer===void 0&&Xe.setupRenderTarget(N)},this.initTexture=function(N){N.isCubeTexture?Xe.setTextureCube(N,0):N.isData3DTexture?Xe.setTexture3D(N,0):N.isDataArrayTexture||N.isCompressedArrayTexture?Xe.setTexture2DArray(N,0):Xe.setTexture2D(N,0),ve.unbindTexture()},this.resetState=function(){L=0,B=0,z=null,ve.reset(),me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Yn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=ut._getDrawingBufferColorSpace(e),t.unpackColorSpace=ut._getUnpackColorSpace()}};function TM(n,e,t){let i=n.n,s=[];for(let r=0;r<n.layers;r++){let a=new Uint8Array(i*i),o=new Float32Array(i*i);for(let l=0;l<i;l++)for(let c=0;c<i;c++){let h=((r*i+l)*t+c)*4,f=l*i+c;a[f]=e[h],o[f]=(e[h+1]<<8|e[h+2])/100-2}s.push({cls:a,h:o})}return s}async function Au(n,e="maps/"){let t=await(await fetch(e+n+".json")).json(),i=new Image;i.src=e+n+".png",await i.decode();let s=document.createElement("canvas");s.width=i.width,s.height=i.height;let r=s.getContext("2d",{willReadFrequently:!0});r.drawImage(i,0,0);let a=r.getImageData(0,0,i.width,i.height).data;return{info:t,layers:TM(t,a,i.width)}}var ds=n=>Math.round(n/.08)*.08;function Ru(n,e){let t=n.n,i=n.cell,s=e.length,r=t*t,a=s>1,o={n:t,cell:i,L:s,info:n,size:t*i,top:[],bot:[],cls:[],flags:new Uint8Array(r),voidKill:a},l=new Uint8Array(r);for(let f of e)for(let u=0;u<r;u++){let d=f.cls[u]&3;(d===1||d===2)&&(l[u]=1)}let c=new Uint8Array(r);{let u=new Uint8Array(r);for(let d=0;d<t;d++)for(let m=0;m<t;m++){let _=0;for(let p=-5;p<=5&&!_;p++){let g=m+p;g>=0&&g<t&&l[d*t+g]&&(_=1)}u[d*t+m]=_}for(let d=0;d<t;d++)for(let m=0;m<t;m++){let _=0;for(let p=-5;p<=5&&!_;p++){let g=d+p;g>=0&&g<t&&u[g*t+m]&&(_=1)}c[d*t+m]=_}}let h=!!n.clean;if(!h)for(let f of e)CM(t,f.cls,f.h,a);for(let[f,u,d,m,_,p]of wM[n.id]||[]){let g=e[0];for(let M=u;M<=m;M++)for(let E=f;E<=d;E++){let y=M*t+E,v=d-f>=m-u?E:M;v>=_&&v<=p||((g.cls[y]&3)===1||(g.cls[y]&3)===2)&&(g.cls[y]=g.cls[y]&-4|3)}}if(!h)for(let f of e)PM(t,f.cls,f.h);if(!h)for(let f of e)LM(t,f.cls,f.h);for(let f=0;f<s;f++){let{cls:u,h:d}=e[f],m=new Float32Array(r).fill(NaN),_=new Float32Array(r).fill(NaN),p=new Uint8Array(r),g=a?f===0?3.95:4.6:6.2,M=e0(t,u,d,7),E=IM(t,u,d);for(let y=0;y<r;y++){let v=u[y],b=v&3;o.flags[y]|=v&-4;let x=d[y],T=NaN,P=NaN;if(b===1)T=ds(x);else if(b===2)T=ds(E[y]+1.05);else if(b===3||b===0&&!a&&c[y]){let S=M[y]>-1e8?M[y]:x;T=ds(Math.ceil((S+g)/.6)*.6),a&&(T=ds(S+g))}else b===0&&a&&f===0&&c[y]&&NM(e,y);isNaN(T)||(P=f===0?-30:ds(x)-.36,p[y]=b===0?3:b),m[y]=T,_[y]=P}o.top.push(m),o.bot.push(_),o.cls.push(p)}if(a){let f=o.top[0],u=o.bot[1],d=o.cls[0];for(let m=0;m<r;m++)d[m]===3&&!isNaN(u[m])&&f[m]>u[m]&&(f[m]=u[m])}o.idx=(f,u)=>{let d=Math.floor(f/i),m=Math.floor(u/i);return d<0||m<0||d>=t||m>=t?-1:m*t+d};for(let f=0;f<o.L;f++)EM(o,f);return a||RM(o,e[0]),o}var wM={dust2:[[220,182,254,184,230,242]]};function EM(n,e){let t=n.n,i=n.cell,s=n.cls[e],r=n.top[e],a=n.bot[e];n.props=n.props||[],n.propCell=n.propCell||[];let o=new Int32Array(t*t);n.propCell[e]=o;let l=new Uint8Array(t*t),c=[],h=[];for(let f=0;f<t*t;f++){if(l[f]||s[f]!==2)continue;for(c.length=0,h.length=0,c.push(f),l[f]=1;c.length;){let U=c.pop();h.push(U);let F=U%t,H=(U-F)/t;for(let $ of[F>0?U-1:-1,F<t-1?U+1:-1,H>0?U-t:-1,H<t-1?U+t:-1])$>=0&&!l[$]&&s[$]===2&&(l[$]=1,c.push($))}if(h.length<6||h.length>420)continue;let u=0,d=0;for(let U of h)u+=U%t,d+=Math.floor(U/t);u/=h.length,d/=h.length;let m=0,_=0,p=0;for(let U of h){let F=U%t-u,H=Math.floor(U/t)-d;m+=F*F,_+=H*H,p+=F*H}let g=.5*Math.atan2(2*p,m-_);Math.abs(m-_)<1e-6&&Math.abs(p)<1e-6&&(g=0);let M=(g%(Math.PI/2)+Math.PI/2)%(Math.PI/2);(M<.14||M>Math.PI/2-.14)&&(g=Math.round(g/(Math.PI/2))*(Math.PI/2));let E=Math.cos(g),y=Math.sin(g),v=1e9,b=-1e9,x=1e9,T=-1e9;for(let U of h){let F=U%t-u,H=Math.floor(U/t)-d,$=F*E+H*y,J=-F*y+H*E;v=Math.min(v,$),b=Math.max(b,$),x=Math.min(x,J),T=Math.max(T,J)}let P=(b-v)/2+.5,S=(T-x)/2+.5,A=(v+b)/2,D=(x+T)/2,C=u+A*E-D*y,w=d+A*y+D*E,R=1e9,L=-1e9;for(let U of h)L=Math.max(L,r[U]);for(let U of h){let F=U%t;for(let H of[U-1,U+1,U-t,U+t])H>=0&&H<t*t&&s[H]===1&&Math.abs(H%t-F)<=1&&(R=Math.min(R,r[H]))}if(R>1e8)continue;let B=n.props.length+1,z=Math.ceil(Math.max(P,S))+1;for(let U=Math.floor(w)-z;U<=Math.ceil(w)+z;U++)for(let F=Math.floor(C)-z;F<=Math.ceil(C)+z;F++){if(F<0||U<0||F>=t||U>=t)continue;let H=U*t+F,$=F-C,J=U-w,V=$*E+J*y,ee=-$*y+J*E,oe=Math.abs(V)<=P-.35&&Math.abs(ee)<=S-.35;oe&&(s[H]===1||s[H]===2)?(s[H]=2,r[H]=L,o[H]=B):!oe&&s[H]===2&&h.includes(H)&&(s[H]=1,r[H]=Math.round(R/.08)*.08)}n.props.push({l:e,x:(C+.5)*i,z:(w+.5)*i,hu:P*i,hv:S*i,ang:g,y0:R,y1:L,cells:h.length})}}var AM={dust2:[[142,188,224,220],[30,203,128,257],[46,158,64,205],[68,253,102,290],[126,212,162,252],[336,276,374,334]],mirage:[[110,76,306,114],[200,92,228,136],[320,360,432,412],[210,204,238,254]]};function RM(n,e){let t=n.n,i=t*t,s=n.cell,r=n.top[0],a=n.cls[0],o=new Float32Array(i).fill(NaN),l=new Float32Array(i).fill(NaN),c=new Uint8Array(i),h=e0(t,e.cls,e.h,7),f=y=>a[y]===1||a[y]===2,u=y=>!f(y),d=y=>ds(Math.ceil(((h[y]>-1e8?h[y]:r[y])+6.2)/.6)*.6);for(let[y,v,b,x]of AM[n.info.id]||[]){let T=-1e9;for(let P=v;P<=x;P++)for(let S=y;S<=b;S++){let A=P*t+S;a[A]===1&&r[A]>T&&(T=r[A])}for(let P=v;P<=x;P++)for(let S=y;S<=b;S++){let A=P*t+S;if(!f(A))continue;let D=ds(T+2.9);l[A]=D,o[A]=Math.max(D+.5,d(A)-.6),c[A]=4}}let m=Math.round(3.2/s),_=Math.round(2/s),p=new Uint16Array(i),g=new Uint16Array(i);for(let y=0;y<t;y++){let v=0;for(;v<t;){if(u(y*t+v)){v++;continue}let b=v;for(;b<t&&!u(y*t+b);)b++;for(let x=v;x<b;x++)p[y*t+x]=b-v;v=b}}for(let y=0;y<t;y++){let v=0;for(;v<t;){if(u(v*t+y)){v++;continue}let b=v;for(;b<t&&!u(b*t+y);)b++;for(let x=v;x<b;x++)g[x*t+y]=b-v;v=b}}let M=(y,v)=>{c[y]||(l[y]=ds(v+2.45),o[y]=d(y),c[y]=4)},E=y=>{let v=-1e9;for(let b of y)r[b]>v&&(v=r[b]);return v};for(let y=0;y<t;y++){let v=0;for(;v<t;){let b=v*t+y;if(u(b)||p[b]>m){v++;continue}let x=v;for(;x<t&&!u(x*t+y)&&p[x*t+y]<=m;)x++;if(x-v<=_&&v>0&&x<t&&!u((v-1)*t+y)&&!u(x*t+y)&&p[(v-1)*t+y]>m+2&&p[x*t+y]>m+2){let P=[];for(let A=v;A<x;A++)P.push(A*t+y);let S=E(P);for(let A of P)M(A,S)}v=x}}for(let y=0;y<t;y++){let v=0;for(;v<t;){let b=y*t+v;if(u(b)||g[b]>m){v++;continue}let x=v;for(;x<t&&!u(y*t+x)&&g[y*t+x]<=m;)x++;if(x-v<=_&&v>0&&x<t&&!u(y*t+v-1)&&!u(y*t+x)&&g[y*t+v-1]>m+2&&g[y*t+x]>m+2){let P=[];for(let A=v;A<x;A++)P.push(y*t+A);let S=E(P);for(let A of P)M(A,S)}v=x}}n.top.push(o),n.bot.push(l),n.cls.push(c),n.L=2,n.slabs=!0}function CM(n,e,t,i){let s=n*n,r=new Uint8Array(s),a=[],o=[],l=h=>(e[h]&3)===3;for(let h=0;h<s;h++){if(r[h]||!l(h))continue;a.length=0,o.length=0,a.push(h),r[h]=1;let f=!1;for(;a.length;){let u=a.pop();o.push(u);let d=u%n,m=(u-d)/n;for(let _ of[d>0?u-1:-1,d<n-1?u+1:-1,m>0?u-n:-1,m<n-1?u+n:-1])_<0||((e[_]&3)===0&&(f=!0),!r[_]&&l(_)&&(r[_]=1,a.push(_)))}if(o.length<40&&!f)for(let u of o)c(u)}function c(h){let f=h%n,u=(h-f)/n,d=0,m=0;for(let _=-2;_<=2;_++)for(let p=-2;p<=2;p++){let g=f+p,M=u+_;if(g<0||M<0||g>=n||M>=n)continue;let E=M*n+g;(e[E]&3)===1&&(d+=t[E],m++)}e[h]=e[h]&-4|1,m&&(t[h]=d/m)}if(!i)for(let h=0;h<2;h++){let f=new Uint8Array(s);for(let u=0;u<s;u++){let d=e[u]&3;f[u]=d===3||d===0?1:0}for(let u=1;u<n-1;u++)for(let d=1;d<n-1;d++){let m=u*n+d,_=0;for(let p=-1;p<=1;p++)for(let g=-1;g<=1;g++)_+=f[m+p*n+g];f[m]&&_<=3&&(e[m]&3)===3?c(m):!f[m]&&_>=7&&(e[m]&3)===1&&(e[m]=e[m]&-4|3)}}}var Qp=1.7;function PM(n,e,t){let i=n*n,s=new Uint8Array(i);for(let l=0;l<i;l++)s[l]=(e[l]&3)===1?1:0;{let l=new Uint8Array(i);for(let c=0;c<n;c++)for(let h=0;h<n;h++){let f=c*n+h;if(!s[f])continue;let u=0;for(let d=-4;d<=4&&!u;d++)for(let m=-4;m<=4;m++){let _=h+m,p=c+d;if(_<0||p<0||_>=n||p>=n)continue;let g=e[p*n+_]&3;if(g===3||g===0){u=1;break}}l[f]=u}for(let c=0;c<7;c++){for(let h=1;h<n-1;h++)for(let f=1;f<n-1;f++){let u=h*n+f;if(l[u]!==1&&l[u]!==2)continue;let d=0,m=0;for(let _=-1;_<=1;_++)for(let p=-1;p<=1;p++){let g=u+_*n+p;s[g]&&(l[g]===0||l[g]===3)&&(d+=t[g],m++)}m&&(t[u]=d/m,l[u]=2)}for(let h=0;h<i;h++)l[h]===2&&(l[h]=3)}}let r=new Uint8Array(i);for(let l=0;l<n;l++)for(let c=0;c<n;c++){let h=l*n+c;s[h]&&(c+1<n&&s[h+1]&&Math.abs(t[h]-t[h+1])<=Qp&&(r[h]|=1),l+1<n&&s[h+n]&&Math.abs(t[h]-t[h+n])<=Qp&&(r[h]|=2))}let a=Float32Array.from(t),o=new Float32Array(i);for(let l=0;l<48;l++){for(let h=0;h<n;h++)for(let f=0;f<n;f++){let u=h*n+f;if(!s[u]){o[u]=a[u];continue}let d=a[u]*2,m=2;r[u]&1&&(d+=a[u+1],m++),r[u]&2&&(d+=a[u+n],m++),f>0&&r[u-1]&1&&(d+=a[u-1],m++),h>0&&r[u-n]&2&&(d+=a[u-n],m++),o[u]=d/m}let c=a;a=o,o=c}for(let l=0;l<i;l++)s[l]&&(t[l]=a[l])}function e0(n,e,t,i){let s=n*n,r=new Float32Array(s).fill(-1e9),a=new Float32Array(s).fill(-1e9);for(let o=0;o<s;o++)(e[o]&3)===1&&(r[o]=t[o]);for(let o=0;o<n;o++)for(let l=0;l<n;l++){let c=-1e9;for(let h=Math.max(0,l-i);h<=Math.min(n-1,l+i);h++){let f=r[o*n+h];f>c&&(c=f)}a[o*n+l]=c}for(let o=0;o<n;o++)for(let l=0;l<n;l++){let c=-1e9;for(let h=Math.max(0,o-i);h<=Math.min(n-1,o+i);h++){let f=a[h*n+l];f>c&&(c=f)}r[o*n+l]=c}return r}function IM(n,e,t){let i=n*n,s=new Float32Array(i),r=new Uint8Array(i),a=[],o=[];for(let l=0;l<i;l++){if(r[l]||(e[l]&3)!==2)continue;a.length=0,o.length=0,a.push(l),r[l]=1;let c=-1e9;for(;a.length;){let h=a.pop();o.push(h),t[h]>c&&(c=t[h]);let f=h%n,u=(h-f)/n;for(let d of[f>0?h-1:-1,f<n-1?h+1:-1,u>0?h-n:-1,u<n-1?h+n:-1])d>=0&&!r[d]&&(e[d]&3)===2&&(r[d]=1,a.push(d))}if(o.length>900)for(let h of o)s[h]=t[h];else for(let h of o)s[h]=c}return s}function LM(n,e,t){let i=n*n,s=new Uint8Array(i);for(let f=0;f<i;f++)s[f]=(e[f]&3)===1?1:0;let r=new Uint8Array(i);for(let f=2;f<n-2;f++)for(let u=2;u<n-2;u++){let d=f*n+u;if(!s[d])continue;let m=0;for(let _ of[2,-2,2*n,-2*n]){let p=d+_;s[p]&&(m=Math.max(m,Math.abs(t[p]-t[d])/2))}r[d]=m<.045?1:0}let a=new Int32Array(i).fill(-1),o=[],l=[],c=0;for(let f=0;f<i;f++)if(!(!r[f]||a[f]>=0)){for(o.length=0,l.length=0,o.push(f),a[f]=c;o.length;){let u=o.pop();l.push(u);let d=u%n;for(let m of[d>0?u-1:-1,d<n-1?u+1:-1,u-n,u+n])m>=0&&m<i&&r[m]&&a[m]<0&&Math.abs(t[m]-t[u])<.12&&(a[m]=c,o.push(m))}if(l.length>=25){let u=l.map(m=>t[m]).sort((m,_)=>m-_),d=u[u.length>>1];for(let m of l)t[m]=d}else for(let u of l)r[u]=0;c++}let h=Float32Array.from(t);for(let f=0;f<80;f++)for(let u=1;u<n-1;u++)for(let d=1;d<n-1;d++){let m=u*n+d;if(!s[m]||r[m])continue;let _=0,p=0;for(let g of[m-1,m+1,m-n,m+n])s[g]&&Math.abs(h[g]-h[m])<1.7&&(_+=h[g],p++);p&&(h[m]=_/p)}for(let f=0;f<i;f++)s[f]&&(t[f]=h[f])}function NM(n,e){for(let t of n){let i=t.cls[e]&3;if(i===1||i===2)return!0}return!1}function Hi(n,e,t,i,s,r=.4){for(let[a,o]of Cu){let l=n.idx(e+a*r,t+o*r);if(l<0)return!0;for(let c=0;c<n.L;c++){let h=n.top[c][l];if(!isNaN(h)&&h>i+.62&&n.bot[c][l]<i+s)return!0}}return!1}var Cu=[[0,0],[1,1],[1,-1],[-1,1],[-1,-1],[1,0],[-1,0],[0,1],[0,-1]];function Pu(n,e,t,i,s=.38){let r=-1/0;for(let[a,o]of Cu){let l=n.idx(e+a*s,t+o*s);if(!(l<0))for(let c=0;c<n.L;c++){let h=n.top[c][l];isNaN(h)||h<=i+.62&&h>r&&n.bot[c][l]<i+.1+.62&&(r=h)}}return r}function Mc(n,e,t,i,s=.38){let r=1/0;for(let[a,o]of Cu){let l=n.idx(e+a*s,t+o*s);if(!(l<0))for(let c=0;c<n.L;c++){let h=n.bot[c][l];isNaN(h)||h>i+.2&&h<r&&(r=h)}}return r}function ps(n,e,t,i=1e9){let s=n.idx(e,t);if(s<0)return-1/0;let r=-1/0;for(let a=0;a<n.L;a++){let o=n.top[a][s];!isNaN(o)&&o<=i&&o>r&&(r=o)}return r}function Vi(n,e,t,i,s,r,a,o=200){let l=n.cell,c=n.n,h=Math.floor(e/l),f=Math.floor(i/l),u=s>0?1:-1,d=a>0?1:-1,m=s!==0?Math.abs(l/s):1/0,_=a!==0?Math.abs(l/a):1/0,p=s!==0?(s>0?(h+1)*l-e:e-h*l)/Math.abs(s):1/0,g=a!==0?(a>0?(f+1)*l-i:i-f*l)/Math.abs(a):1/0,M=0,E=-1;for(let y=0;y<4e3;y++){if(h<0||f<0||h>=c||f>=c)return null;let v=Math.min(p,g,o),b=f*c+h,x=t+r*M,T=t+r*v;for(let P=0;P<n.L;P++){let S=n.top[P][b];if(isNaN(S))continue;let A=n.bot[P][b];if(x>=A&&x<=S&&y>0)return{t:M,nx:E===0?-u:0,ny:0,nz:E===1?-d:0,cell:b,layer:P};if(x>=A&&x<=S&&y===0)return{t:0,nx:0,ny:1,nz:0,cell:b,layer:P};if(x>S&&T<=S&&r<0)return{t:(S-t)/r,nx:0,ny:1,nz:0,cell:b,layer:P};if(x<A&&T>=A&&r>0)return{t:(A-t)/r,nx:0,ny:-1,nz:0,cell:b,layer:P}}if(v>=o)return null;M=v,p<g?(h+=u,p+=m,E=0):(f+=d,g+=_,E=1)}return null}function bc(n,e,t,i){let s=n.idx(e,i);if(s<0)return!1;for(let r=0;r<n.L;r++){let a=n.top[r][s];if(!isNaN(a)&&t<=a&&t>=n.bot[r][s])return!0}return!1}function bi(n,e,t){let i=n.idx(e,t);return i<0?0:n.flags[i]}function Iu(n,e){let t=[];for(let i=0;i<n.n*n.n;i++)n.flags[i]&e&&t.push(i);return t}var t0={dust2:{floor:[.8,.66,.46],floorHi:[.84,.71,.51],wall:[.93,.82,.63],wallTop:[.86,.74,.55],trim:[.72,.6,.43],crate:[1,.95,.88],stone:[.82,.72,.56],metal:[.27,.47,.72],slab:[.62,.47,.32],sky:["#5c9ce0","#f6e3c0"],fog:"#efdcb9",sun:"#fff0d2",ground:"#cfae7c",hemiSky:"#cfe3ff",wallTex:"blocks",floorTex:"sand"},mirage:{floor:[.74,.68,.58],floorHi:[.79,.73,.63],wall:[.94,.87,.74],wallTop:[.78,.43,.3],trim:[.68,.58,.46],crate:[1,.95,.9],stone:[.8,.74,.64],metal:[.24,.55,.58],slab:[.74,.42,.3],sky:["#5b9fe0","#f5dcb8"],fog:"#efdabb",sun:"#fff1da",ground:"#c9ae88",hemiSky:"#d4e6ff",wallTex:"plaster",floorTex:"tiles"},vertigo:{floor:[.66,.66,.64],floorHi:[.72,.72,.69],wall:[.8,.8,.77],wallTop:[.62,.62,.6],trim:[.55,.55,.53],crate:[.98,.95,.9],stone:[.92,.72,.22],metal:[.25,.45,.75],slab:[.6,.6,.58],sky:["#3f87d6","#d2e6f6"],fog:"#cadcea",sun:"#ffffff",ground:"#6d7f8f",hemiSky:"#d6e8ff",wallTex:"concrete",floorTex:"slabs"}},Tc=n=>t0[n]||t0.dust2;function Lu(n,e){let t=n*374761393+e*668265263|0;return t=(t^t>>>13)*1274126177,((t^t>>>16)>>>0)/4294967296}var n0=(n,e,t)=>[n[0]+(e[0]-n[0])*t,n[1]+(e[1]-n[1])*t,n[2]+(e[2]-n[2])*t],Wt=(n,e)=>[n[0]*e,n[1]*e,n[2]*e],i0=n=>Math.max(0,Math.min(1,n));function DM(n){let e=n|0;return()=>{e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function Si(n,e){let t=document.createElement("canvas");t.width=t.height=n;let i=t.getContext("2d");e(i,n);let s=new Ui(t);return s.wrapS=s.wrapT=fr,s.colorSpace=dn,s.anisotropy=8,s}function ms(n,e,t,i,s=235,r=2400,a=3){n.fillStyle=`rgb(${s},${s},${s})`,n.fillRect(0,0,e,e);for(let o=0;o<r;o++){let l=s+(t()-.5)*i;n.fillStyle=`rgba(${l|0},${l|0},${l|0},0.5)`;let c=1+t()*a;n.fillRect(t()*e,t()*e,c,c)}}var Nu={};function UM(n){if(Nu[n])return Nu[n];let e=DM(n.length*977+n.charCodeAt(0)),t;return n==="blocks"?t=Si(256,(i,s)=>{ms(i,s,e,40,232,3e3);let r=4;for(let a=0;a<r;a++){let o=a*s/r;i.fillStyle="rgba(120,100,80,.35)",i.fillRect(0,o,s,3);let l=a%2?s/4:0;for(let c=0;c<3;c++){let h=(l+c*s/2)%s;i.fillRect(h,o,3,s/r)}for(let c=0;c<6;c++)i.fillStyle=`rgba(255,250,240,${.08+e()*.08})`,i.fillRect(e()*s,o+4+e()*(s/r-8),20+e()*50,6+e()*10)}i.fillStyle="rgba(90,70,50,.04)";for(let a=0;a<14;a++)i.beginPath(),i.arc(e()*s,e()*s,4+e()*18,0,7),i.fill()}):n==="plaster"?t=Si(256,(i,s)=>{ms(i,s,e,26,238,2600);for(let r=0;r<10;r++)i.fillStyle=`rgba(150,130,100,${.03+e()*.04})`,i.beginPath(),i.ellipse(e()*s,e()*s,10+e()*40,6+e()*26,e()*3,0,7),i.fill();i.strokeStyle="rgba(110,90,70,.35)",i.lineWidth=1;for(let r=0;r<5;r++){let a=e()*s,o=e()*s;i.beginPath(),i.moveTo(a,o);for(let l=0;l<6;l++)a+=(e()-.5)*24,o+=e()*14,i.lineTo(a,o);i.stroke()}}):n==="concrete"?t=Si(256,(i,s)=>{ms(i,s,e,30,228,3500,2),i.fillStyle="rgba(80,80,80,.35)",i.fillRect(0,0,s,2),i.fillRect(0,0,2,s),i.fillRect(s/2,0,2,s),i.fillStyle="rgba(60,60,60,.45)";for(let[r,a]of[[.25,.25],[.75,.25],[.25,.75],[.75,.75]])i.beginPath(),i.arc(r*s,a*s,3,0,7),i.fill();for(let r=0;r<8;r++)i.fillStyle=`rgba(90,85,80,${.06+e()*.08})`,i.fillRect(e()*s,e()*s,2+e()*4,20+e()*60)}):n==="sand"?t=Si(256,(i,s)=>{ms(i,s,e,46,230,5e3,2);for(let r=0;r<40;r++)i.fillStyle=`rgba(150,120,80,${.06+e()*.06})`,i.beginPath(),i.ellipse(e()*s,e()*s,8+e()*30,3+e()*8,e()*3,0,7),i.fill();for(let r=0;r<25;r++)i.fillStyle="rgba(120,100,80,.35)",i.fillRect(e()*s,e()*s,2+e()*3,2+e()*3)}):n==="tiles"?t=Si(256,(i,s)=>{ms(i,s,e,30,232,3e3,2);let r=4;i.fillStyle="rgba(110,95,75,.4)";for(let a=0;a<=r;a++)i.fillRect(a*s/r-1,0,2,s),i.fillRect(0,a*s/r-1,s,2);for(let a=0;a<r;a++)for(let o=0;o<r;o++)i.fillStyle=`rgba(${e()<.5?"255,250,240":"120,100,80"},${.05+e()*.07})`,i.fillRect(a*s/r+2,o*s/r+2,s/r-4,s/r-4)}):n==="slabs"?t=Si(256,(i,s)=>{ms(i,s,e,34,226,4e3,2),i.fillStyle="rgba(70,70,70,.35)",i.fillRect(0,0,s,2),i.fillRect(0,0,2,s),i.fillRect(0,s/2,s,2);for(let r=0;r<6;r++)i.fillStyle=`rgba(60,60,60,${.05+e()*.08})`,i.beginPath(),i.ellipse(e()*s,e()*s,10+e()*30,6+e()*14,e()*3,0,7),i.fill()}):n==="crate"?t=Si(128,(i,s)=>{i.fillStyle="#a7773f",i.fillRect(0,0,s,s);for(let r=0;r<6;r++)i.fillStyle=r%2?"#9a6c38":"#b17f46",i.fillRect(0,r*s/6,s,s/6),i.fillStyle="rgba(60,35,15,.5)",i.fillRect(0,r*s/6,s,1);for(let r=0;r<120;r++)i.fillStyle=`rgba(70,40,15,${e()*.25})`,i.fillRect(e()*s,e()*s,6+e()*20,1);i.strokeStyle="#7a5228",i.lineWidth=12,i.strokeRect(6,6,s-12,s-12),i.lineWidth=11,i.beginPath(),i.moveTo(10,10),i.lineTo(s-10,s-10),i.stroke(),i.strokeStyle="rgba(40,20,5,.6)",i.lineWidth=1.5,i.strokeRect(12,12,s-24,s-24),i.strokeRect(.5,.5,s-1,s-1),i.fillStyle="#3b2a1a";for(let[r,a]of[[6,6],[s-6,6],[6,s-6],[s-6,s-6]])i.beginPath(),i.arc(r,a,2.5,0,7),i.fill()}):n==="metal"?t=Si(128,(i,s)=>{ms(i,s,e,20,225,900,2);for(let r=0;r<16;r++)i.fillStyle=r%2?"rgba(0,0,0,.18)":"rgba(255,255,255,.12)",i.fillRect(r*s/16,0,s/16,s);for(let r=0;r<10;r++)i.fillStyle=`rgba(110,60,30,${.1+e()*.2})`,i.fillRect(e()*s,e()*s,4+e()*12,2+e()*16);i.fillStyle="rgba(0,0,0,.3)",i.fillRect(0,0,s,4),i.fillRect(0,s-4,s,4)}):n==="stone"?t=Si(128,(i,s)=>{ms(i,s,e,40,228,1500,2),i.fillStyle="rgba(90,75,55,.4)",i.fillRect(0,0,s,3),i.fillRect(0,s/2,s,2),i.fillRect(s/2,0,2,s/2),i.fillRect(s/4,s/2,2,s/2)}):n==="wood"&&(t=Si(128,(i,s)=>{i.fillStyle="#d9c3a3",i.fillRect(0,0,s,s);for(let r=0;r<4;r++)i.fillStyle=`rgba(90,60,30,${.15+e()*.1})`,i.fillRect(0,r*s/4,s,s/4-3),i.fillStyle="rgba(50,30,10,.5)",i.fillRect(0,r*s/4-2,s,3);for(let r=0;r<80;r++)i.fillStyle=`rgba(70,40,15,${e()*.2})`,i.fillRect(e()*s,e()*s,8+e()*30,1)})),Nu[n]=t,t}function zs(){return{pos:[],nor:[],col:[],uv:[]}}function FM(n,e,t,i,s,r){n.pos.push(e[0],e[1],e[2]),n.nor.push(t[0],t[1],t[2]),n.col.push(i[0],i[1],i[2]),n.uv.push(s,r)}function $a(n,e,t,i,s,r,a){let o=t[0]-e[0],l=t[1]-e[1],c=t[2]-e[2],h=i[0]-e[0],f=i[1]-e[1],u=i[2]-e[2],d=l*u-c*f,m=c*h-o*u,_=o*f-l*h,p=Math.hypot(d,m,_)||1,g=[d/p,m/p,_/p],M=[e,t,i];for(let E=0;E<3;E++){let y=r(M[E]);FM(n,M[E],g,a?a[E]:s,y[0],y[1])}}function Jn(n,e,t,i,s,r){let[a,o,l]=e,c=o[0]-a[0],h=o[1]-a[1],f=o[2]-a[2],u=l[0]-a[0],d=l[1]-a[1],m=l[2]-a[2],_=h*m-f*d,p=f*u-c*m,g=c*d-h*u,M=e,E=r;_*t[0]+p*t[1]+g*t[2]<0&&(M=[e[0],e[3],e[2],e[1]],r&&(E=[r[0],r[3],r[2],r[1]])),$a(n,M[0],M[1],M[2],i,s,E&&[E[0],E[1],E[2]]),$a(n,M[0],M[2],M[3],i,s,E&&[E[0],E[2],E[3]])}var Lr=n=>e=>[e[0]/n,e[2]/n],Sc=(n,e,t)=>i=>[(i[0]*e-i[2]*n)/t,i[1]/t];function s0(n,e){let t=Tc(e),i=n.n,s=n.cell,r={wall:zs(),floor:zs(),crate:zs(),metal:zs(),stone:zs(),wood:zs(),plain:zs()},a=(h,f,u,d=.05)=>{let m=1+(Lu(f,u)-.5)*2*d;return[h[0]*m,h[1]*m,h[2]*m]};for(let h=0;h<n.L;h++){let f=n.top[h],u=n.bot[h],d=n.cls[h],m=b=>b>=0&&b<i*i&&d[b]===3,_=new Uint8Array(i*i);{let b=new Uint8Array(i*i),x=[],T=[];for(let P=0;P<i*i;P++){if(b[P]||d[P]!==2)continue;x.length=0,T.length=0,x.push(P),b[P]=1;let S=1e9,A=-1,D=1e9,C=-1;for(;x.length;){let U=x.pop();T.push(U);let F=U%i,H=(U-F)/i;S=Math.min(S,F),A=Math.max(A,F),D=Math.min(D,H),C=Math.max(C,H);for(let $ of[F>0?U-1:-1,F<i-1?U+1:-1,H>0?U-i:-1,H<i-1?U+i:-1])$>=0&&!b[$]&&d[$]===2&&(b[$]=1,x.push($))}let w=(A-S+1)*s,R=(C-D+1)*s,L=Math.max(w,R),B=Math.min(w,R),z=1;T.length>260?z=3:L>3.2&&B>1.4&&L/B>1.7?z=e==="vertigo"?3:2:Lu(S,D)<.18&&(z=3);for(let U of T)_[U]=z}}let p=(b,x,T)=>{let P=0,S=0;for(let A=-1;A<=0;A++)for(let D=-1;D<=0;D++){let C=x+D,w=T+A;if(C<0||w<0||C>=i||w>=i)continue;let R=w*i+C;d[R]!==1||isNaN(f[R])||Math.abs(f[R]-b)>.6||(P+=f[R],S++)}return S?P/S:b},g=new Uint8Array(i*i),M=Lr(2.2);for(let b=0;b<i;b++)for(let x=0;x<i;x++){let T=b*i+x;if(d[T]===3){let J=0,V=0;for(let ee of[x>0?T-1:-1,x<i-1?T+1:-1,b>0?T-i:-1,b<i-1?T+i:-1])ee>=0&&d[ee]===1&&(J+=f[ee],V++);if(V){let ee=J/V-.01,oe=x*s,Te=(x+1)*s,fe=b*s,Le=(b+1)*s,St=Wt(t.floor,.62);Jn(r.floor,[[oe,ee,fe],[oe,ee,Le],[Te,ee,Le],[Te,ee,fe]],[0,1,0],St,M)}continue}if(n.propCell&&n.propCell[h]&&n.propCell[h][T]){let V=n.props[n.propCell[h][T]-1].y0,ee=x*s,oe=(x+1)*s,Te=b*s,fe=(b+1)*s;Jn(r.floor,[[ee,V,Te],[ee,V,fe],[oe,V,fe],[oe,V,Te]],[0,1,0],Wt(t.floor,.7),M);continue}if(d[T]!==1||isNaN(f[T]))continue;let P=f[T],S=p(P,x,b),A=p(P,x+1,b),D=p(P,x,b+1),C=p(P,x+1,b+1),w=m(T-1)||m(T+1)||m(T-i)||m(T+i)||m(T-i-1)||m(T-i+1)||m(T+i-1)||m(T+i+1);if(Math.abs(S-P)<.004&&Math.abs(A-P)<.004&&Math.abs(D-P)<.004&&Math.abs(C-P)<.004&&!w)continue;g[T]=1;let L=x*s,B=(x+1)*s,z=b*s,U=(b+1)*s,F=a(n0(t.floor,t.floorHi,i0(P/6)),x>>3,b>>3,.04),H=(J,V)=>{let ee=0;for(let oe=-1;oe<=0;oe++)for(let Te=-1;Te<=0;Te++){let fe=J+Te,Le=V+oe;fe>=0&&Le>=0&&fe<i&&Le<i&&d[Le*i+fe]===3&&ee++}return Wt(F,1-ee*.13)},$=[H(x,b),H(x,b+1),H(x+1,b+1),H(x+1,b)];$a(r.floor,[L,S,z],[L,D,U],[B,C,U],F,M,[$[0],$[1],$[2]]),$a(r.floor,[L,S,z],[B,C,U],[B,A,z],F,M,[$[0],$[2],$[3]])}let E=n.propCell?n.propCell[h]:null,y=b=>isNaN(f[b])||g[b]||d[b]===3||E&&E[b]?null:(d[b]*1e5+_[b]*1e4+Math.round(f[b]*100))*1e4+(h>0?Math.round(u[b]*100)+5e3:0);for(let b=0;b<i;b++)for(let x=0;x<i;x++){let T=b*i+x;if(g[T])continue;let P=y(T);if(P===null)continue;let S=1;for(;x+S<i&&!g[T+S]&&y(T+S)===P;)S++;let A=1;e:for(;b+A<i;){for(let U=0;U<S;U++){let F=(b+A)*i+x+U;if(g[F]||y(F)!==P)break e}A++}for(let U=0;U<A;U++)for(let F=0;F<S;F++)g[(b+U)*i+x+F]=1;let D=f[T],C=x*s,w=(x+S)*s,R=b*s,L=(b+A)*s,B=d[T],z=[[C,D,R],[C,D,L],[w,D,L],[w,D,R]];if(B===1)Jn(r.floor,z,[0,1,0],a(n0(t.floor,t.floorHi,i0(D/6)),x>>3,b>>3,.04),M);else if(B===2){let U=_[T];Jn(U===1?r.crate:U===2?r.metal:r.stone,z,[0,1,0],U===1?t.crate:U===2?Wt(t.metal,1.1):t.stone,Lr(U===1?1.1:2))}else B===4&&Jn(r.wood,z,[0,1,0],Wt(t.wallTop,.95),Lr(2));if(h>0){let U=u[T];Jn(B===4?r.wood:r.floor,[[C,U,R],[C,U,L],[w,U,L],[w,U,R]],[0,-1,0],B===4?t.slab:Wt(t.floor,.6),Lr(2))}}let v=[[1,0],[-1,0],[0,1],[0,-1]];for(let b=0;b<4;b++){let[x,T]=v[b],P=x!==0?"z":"x";for(let S=0;S<i;S++){let A=null,D=()=>{if(!A)return;let{s:C,e:w,y0:R,y1:L,cl:B,line:z,kd:U}=A,F;if(P==="z"){let oe=(x>0?z+1:z)*s;F=[[oe,R,C*s],[oe,R,(w+1)*s],[oe,L,(w+1)*s],[oe,L,C*s]]}else{let oe=(T>0?z+1:z)*s;F=[[C*s,R,oe],[(w+1)*s,R,oe],[(w+1)*s,L,oe],[C*s,L,oe]]}let H=b<2?.93:.84,$,J,V;if(B===2){$=U===1?r.crate:U===2?r.metal:r.stone,J=Wt(U===1?t.crate:U===2?t.metal:t.stone,H);let oe=U===1?1.1:2;V=Te=>[(Te[0]*T-Te[2]*x)/oe,(Te[1]-R)/oe]}else B===4?($=r.wood,J=Wt(t.slab,H),V=Sc(x,T,2)):($=r.wall,J=Wt(t.trim,H),V=Sc(x,T,2.2));let ee=Wt(J,.8);Jn($,F,[x,0,T],J,V,[ee,ee,J,J]),A=null};for(let C=0;C<i;C++){let w=P==="z"?S:C,R=P==="z"?C:S,L=R*i+w,B=null;if(!isNaN(f[L])&&d[L]!==3&&!(E&&E[L])){let z=w+x,U=R+T,F=z<0||U<0||z>=i||U>=i?-1:U*i+z,H=f[L],$=u[L];if(F>=0&&!isNaN(f[F]))d[L]===1&&d[F]===1&&Math.abs(f[L]-f[F])<=.6||f[F]>=H&&u[F]<=$?H=$:u[F]<=$+.01&&($=Math.max($,f[F]));else if(h===0){let J=1e9;for(let V=0;V<n.L;V++)F>=0&&!isNaN(n.top[V][F])&&n.cls[V][F]!==4&&(J=Math.min(J,n.top[V][F]));$=J<1e9?Math.max($,J):n.voidKill?-25:Math.max($,H-8)}H-$>.01&&(B={y0:Math.round($*100)/100,y1:Math.round(H*100)/100,cl:d[L],kd:_[L]})}B&&A&&A.y0===B.y0&&A.y1===B.y1&&A.cl===B.cl&&A.kd===B.kd&&A.e===C-1?A.e=C:(D(),B&&(A={s:C,e:C,...B,line:S}))}D()}}BM(n,h,r,t)}kM(n,e,r,t);for(let h of n.props||[]){let f=Math.max(h.hu,h.hv)*2,u=Math.min(h.hu,h.hv)*2,d=1;h.cells>260?d=3:f>3.2&&u>1.3&&f/u>1.7?d=e==="vertigo"?3:2:Lu(Math.round(h.x*7),Math.round(h.z*7))<.16&&(d=3);let m=d===1?r.crate:d===2?r.metal:r.stone,_=d===1?t.crate:d===2?t.metal:t.stone,p=d===1?1.1:2,g=Math.cos(h.ang),M=Math.sin(h.ang),E=(T,P,S)=>[h.x+T*g-P*M,S,h.z+T*M+P*g],y=h.y0-.05,v=h.y1,b=[[-h.hu,-h.hv],[h.hu,-h.hv],[h.hu,h.hv],[-h.hu,h.hv]];for(let T=0;T<4;T++){let P=b[T],S=b[(T+1)%4],A=Math.hypot(S[0]-P[0],S[1]-P[1]),D=(P[0]+S[0])/2,C=(P[1]+S[1])/2,w=Math.hypot(D,C),R=[(D*g-C*M)/w,0,(D*M+C*g)/w],L=.82+.14*Math.abs(R[0]),B=Wt(_,L),z=Wt(B,.8),U=E(P[0],P[1],y),F=E(S[0],S[1],y),H=E(S[0],S[1],v),$=E(P[0],P[1],v),J=Math.max(1,Math.round(A/p)),V=Math.max(1,Math.round((v-y)/p));Jn(m,[U,F,H,$],R,B,oe=>[Math.hypot(oe[0]-U[0],oe[2]-U[2])/A*J,(oe[1]-y)/(v-y)*V],[z,z,B,B])}let x=b.map(([T,P])=>E(T,P,v));Jn(m,x,[0,1,0],Wt(_,1.04),T=>{let P=T[0]-h.x,S=T[2]-h.z;return[(P*g+S*M+h.hu)/p,(-P*M+S*g+h.hv)/p]})}let o=new Rt,l=0,c=(h,f)=>{if(!h.pos.length)return;let u=new nn;u.setAttribute("position",new dt(h.pos,3)),u.setAttribute("normal",new dt(h.nor,3)),u.setAttribute("color",new dt(h.col,3)),u.setAttribute("uv",new dt(h.uv,2)),u.computeBoundingSphere();let d=new $e(u,new Tn({vertexColors:!0,map:f&&typeof document<"u"?UM(f):null}));d.matrixAutoUpdate=!1,d.castShadow=!0,d.receiveShadow=!0,o.add(d),l+=h.pos.length/9};return c(r.wall,t.wallTex),c(r.floor,t.floorTex),c(r.crate,"crate"),c(r.metal,"metal"),c(r.stone,"stone"),c(r.wood,"wood"),c(r.plain,null),o.matrixAutoUpdate=!1,{mesh:o,tris:l,theme:t}}var OM=(()=>{let n=[];return n[0]=[],n[1]=[0,4,7],n[2]=[1,5,4],n[3]=[0,1,5,7],n[4]=[2,6,5],n[5]=[0,4,5,2,6,7],n[6]=[1,2,6,4],n[7]=[0,1,2,6,7],n[8]=[3,7,6],n[9]=[0,4,6,3],n[10]=[1,5,6,3,7,4],n[11]=[0,1,5,6,3],n[12]=[2,3,7,5],n[13]=[0,4,5,2,3],n[14]=[1,2,3,7,4],n[15]=[0,1,2,3],n})();function BM(n,e,t,i){let s=n.n,r=n.cell,a=n.top[e],o=n.bot[e],l=n.cls[e],c=d=>l[d]===3,h=t.wall,f=Lr(2.2),u=[0,0,0,0];for(let d=0;d<s-1;d++)for(let m=0;m<s-1;m++){u[0]=d*s+m,u[1]=d*s+m+1,u[2]=(d+1)*s+m+1,u[3]=(d+1)*s+m;let _=0;for(let x=0;x<4;x++)c(u[x])&&(_|=1<<x);if(!_)continue;let p=OM[_],g=(m+.5)*r,M=(d+.5)*r,E=[[g,M],[g+r,M],[g+r,M+r],[g,M+r]],y=p.map(x=>{if(x<4)return[E[x][0],E[x][1],a[u[x]],NaN,x];let T=x-4,P=(T+1)%4,S=c(u[T])?T:P,A=S===T?P:T,D=u[S],C=u[A],w;return!isNaN(a[C])&&l[C]===1?w=a[C]-.12:!isNaN(a[C])&&l[C]===2?w=a[C]-1.2:e===0?w=n.voidKill?-25:a[D]-8:w=o[D],[(E[T][0]+E[P][0])/2,(E[T][1]+E[P][1])/2,a[D],w,-1]});for(let x=1;x<y.length-1;x++)$a(h,[y[0][0],y[0][2],y[0][1]],[y[x+1][0],y[x+1][2],y[x+1][1]],[y[x][0],y[x][2],y[x][1]],i.wallTop,f);let v=0,b=0;for(let x of y)v+=x[0],b+=x[1];v/=y.length,b/=y.length;for(let x=0;x<y.length;x++){let T=y[x],P=y[(x+1)%y.length];if(T[4]>=0||P[4]>=0)continue;let S=P[1]-T[1],A=-(P[0]-T[0]),D=Math.hypot(S,A);S/=D,A/=D;let C=(T[0]+P[0])/2-v,w=(T[1]+P[1])/2-b;S*C+A*w<0&&(S=-S,A=-A);let R=.86+.1*Math.abs(S)-.04*Math.abs(A),L=Wt(i.wall,R),B=Wt(i.trim,R*.95),z=Wt(L,.95),U=Math.min(T[2],T[3]+.45),F=Math.min(P[2],P[3]+.45),H=[T[0],T[3],T[1]],$=[P[0],P[3],P[1]],J=[T[0],U,T[1]],V=[P[0],F,P[1]],ee=[T[0],T[2],T[1]],oe=[P[0],P[2],P[1]],Te=Sc(S,A,2.2);Jn(h,[H,$,V,J],[S,0,A],B,Te,[Wt(B,.75),Wt(B,.75),B,B]),(T[2]>U+.01||P[2]>F+.01)&&Jn(h,[J,V,oe,ee],[S,0,A],L,Te,[z,z,L,L])}}}function r0(n,e,t,i=1){let s=Tc(t),r=e.size;n.background=new Ve(s.sky[1]),n.fog=new ha(s.fog,70,t==="vertigo"?460:330);let a=new W(.45,.62,.3).normalize(),o=new $e(new Ls(900,24,12),new Zn({side:mn,depthWrite:!1,fog:!1,uniforms:{a:{value:new Ve(s.sky[0])},b:{value:new Ve(s.sky[1])},sd:{value:a}},vertexShader:"varying vec3 vp; void main(){ vp = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.); }",fragmentShader:`uniform vec3 a; uniform vec3 b; uniform vec3 sd; varying vec3 vp; void main(){ vec3 col = mix(b, a, smoothstep(-0.05, 0.55, vp.y)); float s = max(dot(vp, sd), 0.); col += vec3(1.,.93,.75) * (pow(s, 700.) * 2.5 + pow(s, 14.) * .2); gl_FragColor = vec4(col, 1.);
#include <colorspace_fragment>
}`}));o.position.set(r/2,0,r/2),o.frustumCulled=!1,n.add(o),n.add(new gi(s.hemiSky,s.ground,1));let l=new xi(s.sun,2.2);if(l.position.set(r/2+a.x*r,a.y*r,r/2+a.z*r),l.target.position.set(r/2,0,r/2),i>0){l.castShadow=!0;let h=l.shadow.camera,f=r*.62;h.left=-f,h.right=f,h.top=f,h.bottom=-f,h.near=1,h.far=r*2.4;let u=i>1?4096:2048;l.shadow.mapSize.set(u,u),l.shadow.bias=-8e-4,l.shadow.normalBias=.06}n.add(l,l.target),n.add(new Da("#ffffff",.1));let c=a0(7);if(t==="vertigo"){let h=new pn(1,1,1),f=new Tn({color:"#ffffff"}),u=new zn(h,f,140),d=new Gt;for(let _=0;_<140;_++){let p=c()*Math.PI*2,g=120+c()*320,M=40+c()*140;d.position.set(r/2+Math.cos(p)*g,-160+M/2,r/2+Math.sin(p)*g),d.scale.set(14+c()*26,M,14+c()*26),d.updateMatrix(),u.setMatrixAt(_,d.matrix),u.setColorAt(_,new Ve().setHSL(.58,.14,.45+c()*.25))}n.add(u);let m=new $e(new $n(3e3,3e3),new Tn({color:s.ground}));m.rotation.x=-Math.PI/2,m.position.set(r/2,-160,r/2),n.add(m)}else{let h=new $e(new $n(3e3,3e3),new Tn({color:s.ground}));h.rotation.x=-Math.PI/2,h.position.set(r/2,-.6,r/2),n.add(h);let f=new Cs(1,1,6,1),u=new Tn({color:s.ground,flatShading:!0}),d=new zn(f,u,40),m=new Gt;for(let _=0;_<40;_++){let p=_/40*Math.PI*2,g=260+c()*160,M=25+c()*50;m.position.set(r/2+Math.cos(p)*g,M/2-1,r/2+Math.sin(p)*g),m.scale.set(60+c()*60,M,60+c()*60),m.rotation.y=c()*3,m.updateMatrix(),d.setMatrixAt(_,m.matrix)}n.add(d)}return l}function a0(n){return()=>{n|=0,n=n+1831565813|0;let e=Math.imul(n^n>>>15,1|n);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function Gn(n,e,t,i,s,r,a,o,l=1){let c=e-s/2,h=e+s/2,f=t-r/2,u=t+r/2,d=i-a/2,m=i+a/2,_=[[[h,f,d],[h,f,m],[h,u,m],[h,u,d],[1,0,0],.9],[[c,f,d],[c,f,m],[c,u,m],[c,u,d],[-1,0,0],.9],[[c,f,m],[h,f,m],[h,u,m],[c,u,m],[0,0,1],.82],[[c,f,d],[h,f,d],[h,u,d],[c,u,d],[0,0,-1],.82],[[c,u,d],[c,u,m],[h,u,m],[h,u,d],[0,1,0],1]];for(let[p,g,M,E,y,v]of _)Jn(n,[p,g,M,E],y,Wt(o,v),y[1]?Lr(l):Sc(y[0],y[2],l))}function kM(n,e,t,i){let s=n.n,r=n.cell,a=n.top[0],o=n.cls[0],l=g=>o[g]===3,c=g=>o[g]===1,h=a0(e.length*131),f=e==="vertigo"?[.32,.45,.55]:[.16,.13,.11],u=e==="mirage"?[.85,.78,.66]:e==="vertigo"?[.45,.47,.5]:[.62,.48,.32],d=e==="mirage"?[.2,.52,.55]:[.35,.5,.68],m=e==="dust2"?[[.22,.42,.62],[.45,.3,.18]]:e==="mirage"?[[.2,.48,.5],[.5,.33,.2]]:[[.55,.56,.58],[.7,.55,.15]],_=[[1,0],[-1,0],[0,1],[0,-1]];for(let[g,M]of _){let E=g===0;for(let y=1;y<s-1;y++){let v=-1,b=0,x=0,T=P=>{if(v<0)return;let S=(P-v)*r,A=x-b;if(S>3&&A>3.2){let D=Math.floor(S/4.2);for(let C=0;C<D;C++){let w=(v+(C+.5)*(P-v)/D)*r,R=h(),L=(g>0||M>0?y+1:y)*r,B=.03,z=E?w:L-g*B,U=E?L-M*B:w,F=E?1:.1,H=E?.1:1;if(R<.16&&A>3){let $=m[Math.floor(h()*2)];Gn(t.plain,z,b+1.15,U,F*1.4+(E?0:.06),2.3,H*1.4+(E?.06:0),u),Gn(t.plain,z-g*.02,b+1.1,U-M*.02,F*1.2+(E?0:.06),2.2,H*1.2+(E?.06:0),$)}else if(A>4.2){let $=b+3.4;if(Gn(t.plain,z,$,U,F*1.1+(E?0:.08),1.35,H*1.1+(E?.08:0),u),Gn(t.plain,z-g*.02,$,U-M*.02,F*.85+(E?0:.08),1.1,H*.85+(E?.08:0),f),Gn(t.plain,z-g*.08,$-.7,U-M*.08,F*1.25+(E?0:.18),.08,H*1.25+(E?.18:0),u),R>.72)for(let J of[-1,1]){let V=E?J*.75:0,ee=E?0:J*.75;Gn(t.plain,z+V-g*.04,$,U+ee-M*.04,F*.38+(E?0:.05),1.15,H*.38+(E?.05:0),d)}else if(e==="mirage"&&R>.5){let J=[[.75,.25,.2],[.85,.65,.25],[.25,.45,.6]][Math.floor(h()*3)];Gn(t.plain,z-g*.45,$+.85,U-M*.45,E?1.5:.9,.08,E?.9:1.5,J)}}}}v=-1};for(let P=1;P<s-1;P++){let S=E?P:y,A=E?y:P,D=A*s+S,C=(A+M)*s+(S+g),w=c(D)&&l(C)&&!isNaN(a[C]);w&&v>=0&&Math.abs(a[D]-b)<.35&&Math.abs(a[C]-x)<.7||(T(P),w&&(v=P,b=a[D],x=a[C]))}T(s-1)}}if(n.slabs){let g=n.top[1],M=n.bot[1],E=n.cls[1];for(let y=1;y<s-1;y++)for(let v=1;v<s-1;v++){let b=y*s+v;if(!(E[b]!==4||M[b]-a[b]>2.8||!c(b)&&o[b]!==2))for(let[x,T]of _){let P=(y+T)*s+v+x;if(!l(P))continue;let S=(v+.5+x*.5)*r-x*.06,A=(y+.5+T*.5)*r-T*.06,D=M[b]-a[b];Gn(t.wood,S,a[b]+D/2,A,x?.14:r,D,T?.14:r,Wt(i.slab,1.1),2)}}}let p=[];for(let g=0;g<900&&p.length<(e==="mirage"?26:18);g++){let M=2+Math.floor(h()*(s-4)),E=2+Math.floor(h()*(s-4)),y=E*s+M;if(!c(y))continue;let v=0;for(let[P,S]of _)l((E+S*2)*s+M+P*2)&&v++;if(v!==2||n.flags[y]&60)continue;let b=(M+.5)*r,x=(E+.5)*r,T=a[y];if(!p.some(P=>Math.hypot(P[0]-b,P[1]-x)<8))if(p.push([b,x]),e==="mirage"&&h()<.35){Gn(t.plain,b,T+.3,x,.7,.6,.7,[.7,.42,.28]);for(let P=0;P<5;P++){let S=P/5*Math.PI*2;Gn(t.plain,b+Math.cos(S)*.35,T+.85,x+Math.sin(S)*.35,.5,.08,.5,[.28,.5,.22])}}else{let P=e==="vertigo"?[.85,.55,.1]:h()<.5?[.3,.42,.55]:[.55,.3,.2];Gn(t.plain,b,T+.45,x,.6,.9,.6,P),Gn(t.plain,b,T+.3,x,.64,.06,.64,Wt(P,.7)),Gn(t.plain,b,T+.65,x,.64,.06,.64,Wt(P,.7))}}}var Gi=.0254,nt={gravity:800*Gi,jump:301.993*Gi,accel:5.5,airAccel:12,friction:5.2,stop:80*Gi,airCap:30*Gi,hStand:72*Gi,hCrouch:54*Gi,eyeStand:64*Gi,eyeCrouch:46*Gi,walk:.52,crouchMul:.34,r:.4};function wc(n,e,t,i=0){return{x:n,y:e,z:t,vx:0,vy:0,vz:0,yaw:i,pitch:0,duck:0,onGround:!0,landT:0,h:nt.hStand,alive:!0,jumpHeld:!1}}var En=n=>nt.eyeStand+(nt.eyeCrouch-nt.eyeStand)*n.duck;function Ec(n,e,t,i,s){let r=t.crouch?1:0;if(r>e.duck)e.duck=Math.min(1,e.duck+i*8);else if(r<e.duck){let p=Math.max(0,e.duck-i*8),g=nt.hStand+(nt.hCrouch-nt.hStand)*p;Mc(n,e.x,e.z,e.y)>=e.y+g&&(e.duck=p)}let a=e.h;e.h=nt.hStand+(nt.hCrouch-nt.hStand)*e.duck,!e.onGround&&e.h<a&&(e.y+=(a-e.h)*.5);let o=s*(e.duck>.5?nt.crouchMul:t.walk?nt.walk:1),l=Math.sin(e.yaw),c=Math.cos(e.yaw),h=-l*t.f+c*t.s,f=-c*t.f-l*t.s,u=Math.hypot(h,f);if(u>1e-6?(h/=u,f/=u):o=0,e.onGround)if(t.jump&&!e.jumpHeld&&Mc(n,e.x,e.z,e.y)>e.y+e.h+.05)e.vy=nt.jump,e.onGround=!1,e.jumpHeld=!0;else{let p=Math.hypot(e.vx,e.vz);if(p>.001){let g=Math.max(p,nt.stop)*nt.friction*i*(e.landT>0?1.4:1),M=Math.max(0,p-g)/p;e.vx*=M,e.vz*=M}o0(e,h,f,o,nt.accel,i)}e.onGround||o0(e,h,f,Math.min(o,nt.airCap),nt.airAccel,i,o),t.jump||(e.jumpHeld=!1),e.landT>0&&(e.landT-=i);let d=e.x+e.vx*i;Hi(n,d,e.z,e.y,e.h,nt.r)?e.vx=0:e.x=d;let m=e.z+e.vz*i;Hi(n,e.x,m,e.y,e.h,nt.r)?e.vz=0:e.z=m;let _=Pu(n,e.x,e.z,e.y,nt.r-.02);if(e.onGround&&(_>=e.y-.62&&_>-1/0?(e.y=_,e.vy=0):e.onGround=!1),!e.onGround){e.vy-=nt.gravity*i,e.y+=e.vy*i;let p=Mc(n,e.x,e.z,e.y-e.vy*i);e.y+e.h>p&&e.vy>0&&(e.y=p-e.h,e.vy=0);let g=Pu(n,e.x,e.z,e.y-e.vy*i,nt.r-.02);if(e.vy<=0&&e.y<=g){let M=-e.vy;return e.y=g,e.vy=0,e.onGround=!0,e.landT=.12,M}}return 0}function o0(n,e,t,i,s,r,a){let o=n.vx*e+n.vz*t,l=i-o;if(l<=0)return;let c=s*r*(a||i);c>l&&(c=l),n.vx+=c*e,n.vz+=c*t}function Du(n){let e=n/Gi;return e>580?Math.round((e-580)*(100/444)):0}function HM(n){let e=n.h,t=e/nt.hStand;return[{part:"head",y0:e-.27*t,y1:e,r:.13},{part:"chest",y0:e-.62*t,y1:e-.27*t,r:.22},{part:"stomach",y0:e-.9*t,y1:e-.62*t,r:.2},{part:"leg",y0:0,y1:e-.9*t,r:.18}]}function l0(n,e,t,i,s,r,a,o){let l=null;for(let c of HM(n)){let h=n.x,f=n.z,u=e-h,d=i-f,m=s*s+a*a,_=2*(u*s+d*a),p=u*u+d*d-c.r*c.r,g;if(m<1e-9){if(p>0)continue;g=0}else{let E=_*_-4*m*p;if(E<0||(g=(-_-Math.sqrt(E))/(2*m),g<0&&(g=(-_+Math.sqrt(E))/(2*m)),g<0))continue}let M=t+r*g;M<n.y+c.y0||M>n.y+c.y1||g<=o&&(!l||g<l.t)&&(l={t:g,part:c.part})}return l}var VM=1.15,Uu=.74;function h0(n){let t=n.n/2,i=t*t,s=n.cell*2,r=[];for(let y=0;y<n.L;y++)r.push(new Float32Array(i).fill(NaN));for(let y=0;y<t;y++)for(let v=0;v<t;v++){let b=(v+.5)*s,x=(y+.5)*s,T=n.idx(b,x);for(let P=0;P<n.L;P++){let S=n.top[P][T];if(isNaN(S))continue;let A=n.cls[P][T];A===3||A===4||Hi(n,b,x,S,nt.hCrouch+.05,.36)||(r[P][y*t+v]=S)}}let a={W:n,k:2,m:t,c:s,H:r,L:n.L};a.node=(y,v)=>y*i+v,a.pos=y=>{let v=Math.floor(y/i),b=y%i;return[(b%t+.5)*s,r[v][b],(Math.floor(b/t)+.5)*s,v]},a.nearest=(y,v,b)=>{let x=Math.floor(y/s),T=Math.floor(b/s),P=-1,S=1e9;for(let A=0;A<=6&&P<0;A++)for(let D=-A;D<=A;D++)for(let C=-A;C<=A;C++){if(Math.max(Math.abs(C),Math.abs(D))!==A)continue;let w=x+C,R=T+D;if(w<0||R<0||w>=t||R>=t)continue;let L=R*t+w;for(let B=0;B<n.L;B++){let z=r[B][L];if(isNaN(z)||a.main&&!a.main[B*i+L])continue;let U=Math.abs(z-v)*3+Math.hypot(C,D);U<S&&(S=U,P=B*i+L)}}return P};let o=[1,-1,0,0,1,1,-1,-1],l=[0,0,1,-1,1,-1,1,-1];a.neighbors=(y,v)=>{v.length=0;let b=Math.floor(y/i),x=y%i,T=x%t,P=(x-T)/t,S=r[b][x];for(let A=0;A<8;A++){let D=T+o[A],C=P+l[A];if(D<0||C<0||D>=t||C>=t)continue;let w=C*t+D;if(!(A>=4&&(!c(b,P*t+D,S)||!c(b,C*t+T,S))))for(let R=0;R<n.L;R++){let L=r[R][w];if(isNaN(L))continue;let B=L-S;B>VM||-B>2.2||B>Uu&&A>=4||v.push(R*i+w,(A>=4?1.414:1)+(B>Uu?4:0))}}return v};function c(y,v,b){for(let x=0;x<n.L;x++){let T=r[x][v];if(!isNaN(T)&&Math.abs(T-b)<=Uu)return!0}return!1}let h=new Uint8Array(n.L*i);for(let y=0;y<n.L;y++)for(let v=0;v<i;v++){if(isNaN(r[y][v]))continue;let b=v%t,x=(v-b)/t,T=0;for(let P=0;P<8;P++){let S=b+o[P],A=x+l[P];(S<0||A<0||S>=t||A>=t||!c(y,A*t+S,r[y][v]))&&T++}h[y*i+v]=T}a.edge=h,a.N=i;let f=n.L*i,u=[],d=Array.from({length:0}),m=new Map,_=new Uint8Array(f),p=new Uint8Array(f),g=Iu(n,32),M=-1;for(let y of g){let v=(y%n.n+.5)*n.cell,b=(Math.floor(y/n.n)+.5)*n.cell,x=Math.floor(b/a.c)*t+Math.floor(v/a.c);for(let T=n.L-1;T>=0;T--)if(!isNaN(r[T][x])){M=T*i+x;break}if(M>=0)break}if(M<0)for(let y=0;y<f&&M<0;y++)isNaN(r[Math.floor(y/i)][y%i])||(M=y);let E=[M];for(_[M]=1;E.length;){let y=E.pop();a.neighbors(y,u);for(let v=0;v<u.length;v+=2){let b=u[v],x=m.get(b);x||m.set(b,x=[]),x.push(y),_[b]||(_[b]=1,E.push(b))}}for(E=[M],p[M]=1;E.length;){let y=E.pop(),v=m.get(y);if(v)for(let b of v)p[b]||(p[b]=1,E.push(b))}a.main=new Uint8Array(f);for(let y=0;y<f;y++)a.main[y]=_[y]&p[y];return a}var Hs={a:[],f:[]};function u0(n,e,t,i=6e4){if(e<0||t<0)return null;let s=n.L*n.N;(!n.g||n.g.length!==s)&&(n.g=new Float32Array(s),n.came=new Int32Array(s),n.seen=new Uint32Array(s),n.closed=new Uint32Array(s),n.stamp=0);let r=n.g,a=n.came,o=n.seen,l=n.closed,c=++n.stamp,[h,,f]=n.pos(t),u=p=>{let g=n.pos(p);return Math.hypot(g[0]-h,g[2]-f)/n.c};Hs.a.length=0,Hs.f.length=0,c0(e,u(e)),r[e]=0,a[e]=-1,o[e]=c;let d=[],m=0;for(;Hs.a.length&&m++<i;){let p=GM();if(p===t)break;if(l[p]!==c){l[p]=c,n.neighbors(p,d);for(let g=0;g<d.length;g+=2){let M=d[g],E=r[p]+d[g+1]+n.edge[M]*.35;o[M]===c&&E>=r[M]||(o[M]=c,r[M]=E,a[M]=p,c0(M,E+u(M)))}}}if(o[t]!==c)return null;let _=[];for(let p=t;p!==-1;p=a[p])_.push(n.pos(p));return _.reverse(),WM(n,_)}function c0(n,e){let t=Hs.a,i=Hs.f;t.push(n),i.push(e);let s=t.length-1;for(;s>0;){let r=s-1>>1;if(i[r]<=i[s])break;[t[r],t[s]]=[t[s],t[r]],[i[r],i[s]]=[i[s],i[r]],s=r}}function GM(){let n=Hs.a,e=Hs.f,t=n[0],i=n.pop(),s=e.pop();if(n.length){n[0]=i,e[0]=s;let r=0;for(;;){let a=2*r+1,o=a+1,l=r;if(a<n.length&&e[a]<e[l]&&(l=a),o<n.length&&e[o]<e[l]&&(l=o),l===r)break;[n[l],n[r]]=[n[r],n[l]],[e[l],e[r]]=[e[r],e[l]],r=l}}return t}function WM(n,e){if(e.length<3)return e;let t=[e[0]];for(let i=1;i<e.length-1;i++){let s=t[t.length-1],r=e[i+1],a=[e[i][0]-s[0],e[i][2]-s[2]],o=[r[0]-e[i][0],r[2]-e[i][2]];(Math.abs(a[0]*o[1]-a[1]*o[0])>1e-4||Math.abs(e[i][1]-s[1])>.3||Math.hypot(e[i][0]-s[0],e[i][2]-s[2])>n.c*6)&&t.push(e[i])}return t.push(e[e.length-1]),t}function Za(n,e){let t=n.W,i=new Set;for(let s of Iu(t,e)){let r=(s%t.n+.5)*t.cell,a=(Math.floor(s/t.n)+.5)*t.cell,o=Math.floor(r/n.c),l=Math.floor(a/n.c),c=l*n.m+o;for(let h=t.L-1;h>=0;h--)if(!isNaN(n.H[h][c])&&n.main[h*n.N+c]){i.add(h*n.N+c);break}}return[...i]}var ft=n=>({auto:!1,pellets:1,hs:4,range:8192,rangeMod:.98,spread:.004,move:.12,kick:.6,sway:.4,kickCap:12,recover:9,scope:null,...n}),Ze={knife:ft({name:"Cuchillo",cat:"knife",side:"both",price:0,reward:1500,dmg:40,ap:.85,rpm:150,mag:0,reserve:0,speed:250,range:64,auto:!0}),glock:ft({name:"Glock-18",cat:"pistol",side:"T",price:200,reward:300,dmg:30,ap:.47,rpm:400,mag:20,reserve:120,reload:2.2,speed:240,rangeMod:.85,spread:.007,move:.05,kick:.9,sway:.4,kickCap:5}),usp:ft({name:"USP-S",cat:"pistol",side:"CT",price:200,reward:300,dmg:35,ap:.505,rpm:352,mag:12,reserve:24,reload:2.2,speed:240,rangeMod:.91,spread:.004,move:.045,kick:1.1,sway:.3,kickCap:5,silent:!0}),p2000:ft({name:"P2000",cat:"pistol",side:"CT",price:200,reward:300,dmg:35,ap:.505,rpm:352,mag:13,reserve:52,reload:2.2,speed:240,rangeMod:.91,spread:.005,move:.045,kick:1.1,sway:.3,kickCap:5}),dualies:ft({name:"Dual Berettas",cat:"pistol",side:"both",price:300,reward:300,dmg:38,ap:.575,rpm:500,mag:30,reserve:120,reload:3.8,speed:240,rangeMod:.79,spread:.009,move:.05,kick:1,sway:.5,kickCap:6}),p250:ft({name:"P250",cat:"pistol",side:"both",price:300,reward:300,dmg:38,ap:.64,rpm:400,mag:13,reserve:26,reload:2.2,speed:240,rangeMod:.85,spread:.007,move:.05,kick:1.3,sway:.4,kickCap:6}),tec9:ft({name:"Tec-9",cat:"pistol",side:"T",price:500,reward:300,dmg:33,ap:.903,rpm:500,mag:18,reserve:90,reload:2.5,speed:240,rangeMod:.831,spread:.009,move:.04,kick:1.2,sway:.5,kickCap:7}),fiveseven:ft({name:"Five-SeveN",cat:"pistol",side:"CT",price:500,reward:300,dmg:32,ap:.9115,rpm:400,mag:20,reserve:100,reload:2.2,speed:240,rangeMod:.81,spread:.007,move:.045,kick:1.1,sway:.4,kickCap:6}),cz75:ft({name:"CZ75-Auto",cat:"pistol",side:"both",price:500,reward:100,dmg:31,ap:.776,rpm:600,mag:12,reserve:12,reload:2.7,speed:240,rangeMod:.85,spread:.008,move:.05,kick:1.1,sway:.6,kickCap:8,auto:!0}),deagle:ft({name:"Desert Eagle",cat:"pistol",side:"both",price:700,reward:300,dmg:53,ap:.932,rpm:267,mag:7,reserve:35,reload:2.2,speed:230,rangeMod:.81,spread:.006,move:.1,kick:3.4,sway:.6,kickCap:8,recover:7}),r8:ft({name:"R8 Revolver",cat:"pistol",side:"both",price:600,reward:300,dmg:86,ap:.932,rpm:120,mag:8,reserve:8,reload:2.3,speed:220,rangeMod:.94,spread:.006,move:.1,kick:3.6,sway:.4,kickCap:8}),mac10:ft({name:"MAC-10",cat:"smg",side:"T",price:1050,reward:600,dmg:29,ap:.575,rpm:800,mag:30,reserve:100,reload:2.6,speed:240,rangeMod:.8,auto:!0,spread:.009,move:.025,kick:.6,sway:.7,kickCap:7}),mp9:ft({name:"MP9",cat:"smg",side:"CT",price:1250,reward:600,dmg:26,ap:.6,rpm:857,mag:30,reserve:120,reload:2.1,speed:240,rangeMod:.87,auto:!0,spread:.008,move:.025,kick:.55,sway:.6,kickCap:7}),mp7:ft({name:"MP7",cat:"smg",side:"both",price:1500,reward:600,dmg:29,ap:.625,rpm:750,mag:30,reserve:120,reload:3.1,speed:220,rangeMod:.85,auto:!0,spread:.007,move:.03,kick:.5,sway:.5,kickCap:7}),mp5:ft({name:"MP5-SD",cat:"smg",side:"both",price:1500,reward:600,dmg:27,ap:.625,rpm:750,mag:30,reserve:120,reload:2.6,speed:235,rangeMod:.85,auto:!0,spread:.007,move:.025,kick:.45,sway:.5,kickCap:6,silent:!0}),ump:ft({name:"UMP-45",cat:"smg",side:"both",price:1200,reward:600,dmg:35,ap:.65,rpm:666,mag:25,reserve:100,reload:3.5,speed:230,rangeMod:.75,auto:!0,spread:.008,move:.03,kick:.6,sway:.5,kickCap:7}),p90:ft({name:"P90",cat:"smg",side:"both",price:2350,reward:300,dmg:26,ap:.69,rpm:857,mag:50,reserve:100,reload:3.3,speed:230,rangeMod:.86,auto:!0,spread:.008,move:.03,kick:.45,sway:.6,kickCap:7}),bizon:ft({name:"PP-Bizon",cat:"smg",side:"both",price:1400,reward:600,dmg:27,ap:.575,rpm:750,mag:64,reserve:120,reload:2.4,speed:240,rangeMod:.8,auto:!0,spread:.009,move:.03,kick:.45,sway:.6,kickCap:6}),nova:ft({name:"Nova",cat:"heavy",side:"both",price:1050,reward:900,dmg:26,ap:.5,rpm:68,mag:8,reserve:32,reload:4,speed:220,rangeMod:.7,pellets:9,spread:.06,move:.04,kick:3,sway:.5,range:3e3}),xm1014:ft({name:"XM1014",cat:"heavy",side:"both",price:2e3,reward:900,dmg:20,ap:.8,rpm:171,mag:7,reserve:32,reload:3.5,speed:215,rangeMod:.7,pellets:6,spread:.065,move:.04,kick:2.5,sway:.6,range:3500}),sawedoff:ft({name:"Sawed-Off",cat:"heavy",side:"T",price:1100,reward:900,dmg:32,ap:.75,rpm:71,mag:7,reserve:32,reload:3.6,speed:210,rangeMod:.45,pellets:8,spread:.09,move:.04,kick:3,sway:.6,range:1400}),mag7:ft({name:"MAG-7",cat:"heavy",side:"CT",price:1300,reward:900,dmg:30,ap:.75,rpm:71,mag:5,reserve:32,reload:2.5,speed:225,rangeMod:.45,pellets:8,spread:.05,move:.04,kick:3,sway:.5,range:1400}),m249:ft({name:"M249",cat:"heavy",side:"both",price:5200,reward:300,dmg:32,ap:.8,rpm:750,mag:100,reserve:200,reload:5.7,speed:195,rangeMod:.97,auto:!0,spread:.009,move:.15,kick:.6,sway:.8,kickCap:9}),negev:ft({name:"Negev",cat:"heavy",side:"both",price:1700,reward:300,dmg:35,ap:.71,rpm:800,mag:150,reserve:300,reload:5.7,speed:150,rangeMod:.97,auto:!0,spread:.012,move:.15,kick:.7,sway:.6,kickCap:6}),galil:ft({name:"Galil AR",cat:"rifle",side:"T",price:1800,reward:300,dmg:30,ap:.775,rpm:666,mag:35,reserve:90,reload:3,speed:215,auto:!0,spread:.005,move:.14,kick:.62,sway:.5,kickCap:10}),famas:ft({name:"FAMAS",cat:"rifle",side:"CT",price:2050,reward:300,dmg:30,ap:.7,rpm:666,mag:25,reserve:90,reload:3.3,speed:220,auto:!0,spread:.005,move:.14,kick:.6,sway:.5,kickCap:10}),ak47:ft({name:"AK-47",cat:"rifle",side:"T",price:2700,reward:300,dmg:36,ap:.775,rpm:600,mag:30,reserve:90,reload:2.5,speed:215,auto:!0,spread:.0049,move:.16,kick:.82,sway:.75,kickCap:13}),m4a4:ft({name:"M4A4",cat:"rifle",side:"CT",price:3100,reward:300,dmg:33,ap:.7,rpm:666,mag:30,reserve:90,reload:3.1,speed:225,auto:!0,spread:.0042,move:.15,kick:.68,sway:.6,kickCap:11}),m4a1s:ft({name:"M4A1-S",cat:"rifle",side:"CT",price:2900,reward:300,dmg:38,ap:.7,rpm:600,mag:20,reserve:80,reload:3.1,speed:225,auto:!0,spread:.0035,move:.15,kick:.58,sway:.45,kickCap:9,silent:!0}),sg553:ft({name:"SG 553",cat:"rifle",side:"T",price:3e3,reward:300,dmg:30,ap:1,rpm:545,mag:30,reserve:90,reload:2.8,speed:210,auto:!0,spread:.0045,move:.15,kick:.72,sway:.6,kickCap:11,scope:[1.8]}),aug:ft({name:"AUG",cat:"rifle",side:"CT",price:3300,reward:300,dmg:28,ap:.9,rpm:600,mag:30,reserve:90,reload:3.8,speed:220,auto:!0,spread:.004,move:.15,kick:.62,sway:.5,kickCap:10,scope:[1.8]}),ssg08:ft({name:"SSG 08",cat:"sniper",side:"both",price:1700,reward:300,dmg:88,ap:.85,rpm:48,mag:10,reserve:90,reload:3.7,speed:230,rangeMod:.99,spread:.035,scoped:.0012,move:.12,kick:3,sway:.2,kickCap:4,scope:[3.6,9]}),awp:ft({name:"AWP",cat:"sniper",side:"both",price:4750,reward:100,dmg:115,ap:.975,rpm:41,mag:5,reserve:30,reload:3.7,speed:200,rangeMod:.99,spread:.08,scoped:9e-4,move:.2,kick:4.5,sway:.2,kickCap:5,scope:[2.25,9]}),g3sg1:ft({name:"G3SG1",cat:"sniper",side:"T",price:5e3,reward:300,dmg:80,ap:.825,rpm:240,mag:20,reserve:90,reload:4.7,speed:215,rangeMod:.98,auto:!0,spread:.05,scoped:.0018,move:.2,kick:1.6,sway:.4,kickCap:6,scope:[2.25,9]}),scar20:ft({name:"SCAR-20",cat:"sniper",side:"CT",price:5e3,reward:300,dmg:80,ap:.825,rpm:240,mag:20,reserve:90,reload:3.1,speed:215,rangeMod:.98,auto:!0,spread:.05,scoped:.0018,move:.2,kick:1.6,sway:.4,kickCap:6,scope:[2.25,9]}),zeus:ft({name:"Zeus x27",cat:"equip",side:"both",price:200,reward:0,dmg:500,ap:1,rpm:30,mag:1,reserve:0,reload:0,speed:245,range:183,spread:.01,move:.02,kick:1}),vest:{name:"Chaleco",cat:"gear",side:"both",price:650},vesthelm:{name:"Chaleco + Casco",cat:"gear",side:"both",price:1e3},defuser:{name:"Kit de desactivaci\xF3n",cat:"gear",side:"CT",price:400},he:{name:"Granada HE",cat:"grenade",side:"both",price:300,reward:300},flash:{name:"Flashbang",cat:"grenade",side:"both",price:200,reward:300,max:2},smoke:{name:"Humo",cat:"grenade",side:"both",price:300,reward:300},molotov:{name:"Molotov",cat:"grenade",side:"T",price:400,reward:300},incendiary:{name:"Incendiaria",cat:"grenade",side:"CT",price:500,reward:300},decoy:{name:"Se\xF1uelo",cat:"grenade",side:"both",price:50,reward:300},c4:{name:"C4",cat:"c4",side:"T",price:0}};for(let[n,e]of Object.entries(Ze))e.id=n;var Nr=[{name:"Equipo",items:{T:["vest","vesthelm","zeus"],CT:["vest","vesthelm","zeus","defuser"]}},{name:"Pistolas",items:{T:["glock","p250","dualies","tec9","deagle"],CT:["usp","p250","dualies","fiveseven","deagle"]}},{name:"Intermedias",items:{T:["mac10","mp7","nova","xm1014","p90"],CT:["mp9","mp7","nova","xm1014","p90"]}},{name:"Rifles",items:{T:["galil","ak47","sg553","ssg08","awp"],CT:["famas","m4a4","aug","ssg08","awp"]}},{name:"Granadas",items:{T:["flash","smoke","he","molotov","decoy"],CT:["flash","smoke","he","incendiary","decoy"]}}],f0={vest:["Protege el cuerpo","Reduce el da\xF1o de las balas"],vesthelm:["Chaleco y casco","Te salva de muchos tiros a la cabeza"],zeus:["Descarga el\xE9ctrica de un solo uso","Mata de cerca"],defuser:["Desactiv\xE1s la bomba en 5 segundos"],glock:["Pistola b\xE1sica de los T","Buena movi\xE9ndose"],usp:["Pistola b\xE1sica de los CT","Con silenciador, muy precisa"],p250:["Barata y fuerte","Atraviesa chalecos"],dualies:["Dos pistolas","Cargador grande"],tec9:["Autom\xE1tica liviana","Muy fuerte de cerca"],fiveseven:["Precisa y r\xE1pida","Buena contra chalecos"],deagle:["Un tiro a la cabeza alcanza","Mucho retroceso"],mac10:["Subfusil barato","Premio por baja $600"],mp9:["Subfusil de los CT","Premio por baja $600"],mp7:["Subfusil equilibrado","Buena precisi\xF3n"],nova:["Escopeta de bombeo","Letal de cerca"],xm1014:["Escopeta autom\xE1tica","Mucho da\xF1o en poco tiempo"],p90:["Cargador de 50","Ideal para correr"],galil:["Rifle barato de los T"],famas:["Rifle barato de los CT"],ak47:["Un tiro a la cabeza mata","El rifle de los T"],m4a4:["Rifle preciso de los CT"],sg553:["Rifle con mira"],aug:["Rifle con mira"],ssg08:["Francotirador liviano","Se mueve r\xE1pido"],awp:["Mata de un tiro al cuerpo","Lento al moverse"],flash:["Ciega a los que la miran"],smoke:["Tapa la vista 18 segundos","Apaga el fuego"],he:["Explota y hace da\xF1o"],molotov:["Fuego en el piso por 7 segundos"],incendiary:["Fuego en el piso por 7 segundos"],decoy:["Hace ruido de disparos"]},Vs=n=>{let e=Ze[n].cat;return e==="pistol"?2:e==="knife"?3:e==="grenade"?4:e==="c4"?5:e==="equip"?3:1},Nn={start:800,max:16e3,winElim:3250,winBombT:3500,winDefuse:3500,winTime:3250,loss:[1400,1900,2400,2900,3400],plantBonus:800,plantReward:300,defuseReward:300,teamKill:-300},XM={head:4,chest:1,stomach:1.25,arm:1,leg:.75};function Fu(n,e,t,i,s,r=4){let a=n*(t==="head"?r:XM[t]),o=0,l=t!=="leg"&&(t!=="head"||s);if(i>0&&l){let c=a*e;o=(a-c)*.5,o>i&&(o=i,c=a-i*2),a=c}return{hp:Math.max(1,Math.round(a)),armor:Math.round(o)}}var Ou=.0254,Pt={g:800*.4*Ou,speed:750*.9*Ou,step:1/64,fuse:{he:1.6,flash:1.6},molAir:2,smokeLife:18,fireLife:7,decoyLife:15,smokeR:3.6,fireR:2.6,heR:350*Ou,heDmg:98};function d0(n,e,t,i,s,r,a,o,l,c,h=1){let f=Pt.speed*(.3+.7*h),u=o+10*Math.PI/180*(1-Math.abs(o)/(Math.PI/2)),d=-Math.sin(a)*Math.cos(u),m=Math.sin(u),_=-Math.cos(a)*Math.cos(u);return{type:n,owner:e,team:t,x:i+d*.1,y:s+m*.1-.05,z:r+_*.1,vx:d*f+l*1.25,vy:m*f,vz:_*f+c*1.25,t:0,acc:0,rest:!1,state:"fly",life:0}}function p0(n,e,t,i){for(e.acc+=t;e.acc>=Pt.step;){e.acc-=Pt.step;let s=Pt.step;if(e.state==="fly"){if(e.t+=s,!e.rest){e.vy-=Pt.g*s;let a=Math.hypot(e.vx,e.vy,e.vz),o=a*s;if(o>1e-5){let l=Vi(n,e.x,e.y,e.z,e.vx/a,e.vy/a,e.vz/a,o+.04);if(l&&l.t<=o+.04){let c=Math.max(0,l.t-.04);e.x+=e.vx/a*c,e.y+=e.vy/a*c,e.z+=e.vz/a*c;let h=[l.nx,l.ny,l.nz];if((e.type==="molotov"||e.type==="incendiary")&&h[1]>.7){Ac(n,e,i);continue}let f=e.vx*h[0]+e.vy*h[1]+e.vz*h[2];e.vx-=2*f*h[0],e.vy-=2*f*h[1],e.vz-=2*f*h[2],e.vx*=.45,e.vy*=.45,e.vz*=.45,h[1]>.7&&(e.vx*=.75,e.vz*=.75,Math.abs(e.vy)<1.2&&(e.vy=0,Math.hypot(e.vx,e.vz)<.25&&(e.rest=!0))),a>2&&i.push({type:"bounce",g:e})}else e.x+=e.vx*s,e.y+=e.vy*s,e.z+=e.vz*s}if(!e.rest&&e.vy===0){let l=ps(n,e.x,e.z,e.y+.3);l>-1e8&&e.y-l<.06?(e.y=l+.03,e.vx*=Math.max(0,1-s*2.5),e.vz*=Math.max(0,1-s*2.5),Math.hypot(e.vx,e.vz)<.2&&(e.rest=!0)):e.vy=-.01}if(e.y<-40){e.state="done",i.push({type:"end",g:e});continue}}let r=Pt.fuse[e.type];r&&e.t>=r?Ac(n,e,i):(e.type==="molotov"||e.type==="incendiary")&&e.t>=Pt.molAir?(e.air=!0,Ac(n,e,i)):(e.type==="smoke"||e.type==="decoy")&&e.rest&&e.t>.9&&Ac(n,e,i)}else e.state==="active"&&(e.life-=s,e.life<=0&&(e.state="done",i.push({type:"end",g:e})))}}function Ac(n,e,t){if(e.state="active",e.vx=e.vy=e.vz=0,e.type==="smoke")e.life=Pt.smokeLife;else if(e.type==="decoy")e.life=Pt.decoyLife;else if(e.type==="molotov"||e.type==="incendiary")if(e.air)e.life=.01;else{e.life=Pt.fireLife;let i=ps(n,e.x,e.z,e.y+.5);i>-1e8&&(e.y=i)}else e.life=.01;t.push({type:"det",g:e})}function m0(n,e,t,i,s,r,a){for(let o of n){if(o.type!=="smoke"||o.state!=="active"||o.life<.6)continue;let l=Pt.smokeR*Math.min(1,(Pt.smokeLife-o.life)*1.5+.2),c=o.x,h=o.y+1.2,f=o.z,u=s-e,d=r-t,m=a-i,_=u*u+d*d+m*m,p=_>0?((c-e)*u+(h-t)*d+(f-i)*m)/_:0;p=Math.max(0,Math.min(1,p));let g=e+u*p-c,M=(t+d*p-h)*1.4,E=i+m*p-f;if(g*g+M*M+E*E<l*l)return!0}return!1}function g0(n,e,t,i){for(let s of n)if(!(s.type!=="molotov"&&s.type!=="incendiary"||s.state!=="active"||s.air)&&Math.abs(t-s.y)<1.2&&Math.hypot(e-s.x,i-s.z)<Pt.fireR)return s;return null}var Bt={freeze:12,live:115,buy:20,post:6,bomb:40,plant:3.2,defuse:10,kit:5,over:10},Bu={rapida:{win:5,max:8,name:"R\xE1pida"},corta:{win:9,max:16,name:"Corta"},comp:{win:13,max:24,name:"Competitiva"}},x0=["Toto","Lalo","Pipo","Chino","Fede","Nacho","Rulo","Coco","Tincho","Beto","Pato","Quique"],Gs=(n,e)=>(n^e)===0?"T":"CT",y0=n=>n==="T"?"glock":"usp";function ku(n){let e={},t=!0,i=0,s=[1,1],r=null,a=new Map,o=0,l=0,c=!1,h=1;e.setup=S=>{n.players.clear();let A=n.cfg,D=[0,0],C=S.slice().sort((L,B)=>L.slot-B.slot);for(let L of C)(L.pref===0||L.pref===1)&&D[L.pref]++;for(let L of C){let B=L.pref;B!==0&&B!==1&&(B=D[0]<=D[1]?0:1,D[B]++);let z=f(L.id,L.name,!1,B);z.skT=(L.sk&&L.sk[0])|0,z.skCT=(L.sk&&L.sk[1])|0,z.fin=L.fin&&typeof L.fin=="object"?L.fin:L.fin|0,n.players.set(L.id,z)}let w=A.bots?Math.max(D[0],D[1],A.size||5):0,R=0;for(let L=0;L<2;L++)for(let B=D[L];B<w;B++){let z="bot"+R++,U=f(z,x0[R%x0.length]+" (bot)",!0,L);U.skT=Math.floor(Math.random()*4),U.skCT=Math.floor(Math.random()*4),U.fin=Math.random()<.7?0:Math.floor(Math.random()*6),n.players.set(z,U)}n.round=0,n.score=[0,0],n.half=0,s=[1,1],c=!1;for(let L of n.players.values())L.team=Gs(L.grp,0);n.spawns={T:u("T"),CT:u("CT")}};function f(S,A,D,C){return{id:S,name:A,bot:D,grp:C,team:"T",x:0,y:0,z:0,yaw:0,pitch:0,vx:0,vz:0,duck:0,hp:100,ar:0,helm:!1,money:Nn.start,alive:!1,k:0,d:0,a:0,mvp:0,dmgR:0,inv:{p:null,s:null,g:[],c4:!1,kit:!1,zeus:!1,v:1,pa:null,sa:null},god:!1}}function u(S){let A=n.nav,D=Za(A,S==="T"?16:32),C=0,w=0,R=D.map(J=>A.pos(J));for(let J of R)C+=J[0],w+=J[2];C/=R.length,w/=R.length,R.sort((J,V)=>Math.hypot(J[0]-C,J[2]-w)-Math.hypot(V[0]-C,V[2]-w));let L=[];for(let J of R)if(L.every(V=>Math.hypot(V[0]-J[0],V[2]-J[2])>1.5)&&L.push(J),L.length>=12)break;let B=n.info.zones,z=n.W.cell,U=((B.A[0]+B.A[2])/2+(B.B[0]+B.B[2])/2)/2*z,F=((B.A[1]+B.A[3])/2+(B.B[1]+B.B[3])/2)/2*z,H=S==="T"?U:(B.T[0]+B.T[2])/2*z,$=S==="T"?F:(B.T[1]+B.T[3])/2*z;return{pts:L.map(J=>[J[0],J[1],J[2],Math.atan2(-(H-J[0]),-($-J[2]))]),cx:C,cz:w}}e.adopt=()=>{n.spawns={T:u("T"),CT:u("CT")}},e.buyZone=S=>{let A=n.spawns[S.team];return Math.hypot(S.x-A.cx,S.z-A.cz)<22||bi(n.W,S.x,S.z)&(S.team==="T"?16:32)},e.canBuyTime=()=>n.phase==="freeze"||n.phase==="live"&&Bt.live-n.timeLeft<Bt.buy&&n.bomb.state!=="planted",e.startMatch=()=>{n.phase="freeze",d(!0)};function d(S){n.round++,n.phase="freeze",n.timeLeft=Bt.freeze,n.drops.clear(),n.nades.length=0,a.clear(),r=null,n.bomb={state:"carried",carrier:null,x:0,y:0,z:0,t:0};let A={T:0,CT:0},D={},C=[...n.players.values()].sort(()=>Math.random()-.5);for(let R of C){R.team=Gs(R.grp,n.half),!R.alive||S?(R.inv={p:null,s:y0(R.team),g:[],c4:!1,kit:!1,zeus:!1,v:(R.inv.v||0)+1,pa:null,sa:null},!R.alive&&!S&&(R.ar=0,R.helm=!1),S&&(R.ar=0,R.helm=!1)):(R.inv.c4=!1,R.team==="T"&&(R.inv.kit=!1),R.inv.pa=R.inv.sa=null,R.inv.v++),R.hp=100,R.alive=!0,R.dmgR=0,R.dmgBy={};let L=n.spawns[R.team].pts,B=A[R.team]++%L.length;D[R.id]=L[B]}let w=C.filter(R=>R.team==="T");if(w.length){let R=w[Math.floor(Math.random()*w.length)];R.inv.c4=!0,n.bomb.carrier=R.id}t=!0,n.emit("rs",{pos:D,round:n.round}),n.emit("st",e.snapshot())}function m(S,A){if(n.phase!=="live"&&n.phase!=="freeze")return;n.phase="post",n.timeLeft=Bt.post;let D=[...n.players.values()].find(z=>z.team===S)?.grp??(S===Gs(0,n.half)?0:1);n.score[D]++;let C=A==="bomb"?Nn.winBombT:A==="defuse"?Nn.winDefuse:A==="time"?Nn.winTime:Nn.winElim,w=1-D;s[w]=Math.min(5,s[w]+1),s[D]=Math.max(0,s[D]-1);let R=Nn.loss[Math.max(0,s[w]-1)];for(let z of n.players.values())if(z.grp===D)g(z,C);else{if(A==="time"&&z.team==="T"&&z.alive)continue;g(z,R+(z.team==="T"&&n.bomb.state==="defused"?Nn.plantBonus:0))}let L=null,B=-1;for(let z of n.players.values())if(z.grp===D){let U=(z.rk||0)*10+z.dmgR/100+(z.id===r&&A==="bomb"?30:0)+(z.defused?30:0);U>B&&(B=U,L=z)}L&&L.mvp++;for(let z of n.players.values())z.rk=0,z.defused=!1;t=!0,n.emit("ev",{t:"end",win:S,reason:A,score:n.score.slice(),mvp:L&&L.id,loss:R})}function _(){let S=Bu[n.cfg.len];if(n.score[0]>=S.win||n.score[1]>=S.win||n.round>=S.max){n.phase="over",n.timeLeft=Bt.over,l=Bt.over;let D=n.score[0]>n.score[1]?0:n.score[1]>n.score[0]?1:-1;n.emit("ev",{t:"over",wg:D,score:n.score.slice()}),t=!0,setTimeout(()=>{if(c)return;c=!0;let C=[...n.players.values()].filter(R=>!R.bot&&(D<0||R.grp===D)).map(R=>R.id),w=D<0?"Empate "+n.score.join(" \u2013 "):"\u{1F451} Ganan "+p(D)+" "+Math.max(...n.score)+" \u2013 "+Math.min(...n.score);n.end(C,w)},Bt.over*1e3);return}if(n.round===S.max/2){n.half=1,s=[1,1];for(let D of n.players.values())D.money=Nn.start,D.alive=!1,D.ar=0,D.helm=!1;n.emit("ev",{t:"half"}),d(!0);return}d(!1)}let p=S=>{let A=[...n.players.values()].filter(D=>D.grp===S&&!D.bot).map(D=>D.name);return A.length?A.slice(0,3).join(", "):Gs(S,n.half)==="T"?"los Terroristas":"los Contraterroristas"};function g(S,A){S.money=Math.max(0,Math.min(Nn.max,S.money+A))}function M(){if(n.phase!=="live")return;let S=0,A=0,D=0,C=0;for(let w of n.players.values())w.team==="T"?(D++,w.alive&&S++):(C++,w.alive&&A++);if(C&&A===0)return m("T","elim");if(D&&S===0&&n.bomb.state!=="planted")return m("CT","elim")}e.tick=S=>{if(n.phase!=="lobby"){if(n.timeLeft-=S,n.phase==="freeze"&&n.timeLeft<=0)n.phase="live",n.timeLeft=Bt.live,t=!0,n.emit("ev",{t:"go"});else if(n.phase==="live"){let A=n.bomb;if(A.state==="planted"){A.t-=S,n.timeLeft=A.t;for(let[D,C]of a){let w=n.players.get(D);if(!w||!w.alive||Math.hypot(w.x-A.x,w.z-A.z)>2.2){a.delete(D);continue}w.bot&&n.time-C.t0>=C.dur&&b(w)}A.t<=0&&A.state==="planted"&&x()}else n.timeLeft<=0&&m("CT","time");if(o-=S,o<=0){o=.25;for(let D of n.players.values()){if(!D.alive)continue;let C=g0(n.nades,D.x,D.y,D.z);C&&e.damage(D.id,C.owner,10,"fire",C.type,{raw:!0})}}}else n.phase==="post"&&n.timeLeft<=0&&_();i-=S,(t&&i<=0||i<-2)&&(i=.1,t=!1,n.emit("st",e.snapshot()))}},e.markDirty=()=>{t=!0},e.snapshot=()=>({ph:n.phase,tl:+n.timeLeft.toFixed(2),r:n.round,sc:n.score,hf:n.half,b:{s:n.bomb.state,c:n.bomb.carrier,x:+n.bomb.x.toFixed(2),y:+n.bomb.y.toFixed(2),z:+n.bomb.z.toFixed(2),t:+n.bomb.t.toFixed(2),site:n.bomb.site},dr:[...n.drops.values()].map(S=>[S.id,S.w,+S.x.toFixed(2),+S.y.toFixed(2),+S.z.toFixed(2),S.ammo]),p:[...n.players.values()].map(S=>[S.id,S.name,S.bot?1:0,S.grp,S.team,S.hp,S.ar,S.helm?1:0,S.money,S.alive?1:0,S.k,S.d,S.a,S.mvp,S.inv,S.god?1:0,S.skT|0,S.skCT|0,S.fin||0])}),e.damage=(S,A,D,C,w,R={})=>{let L=n.players.get(S),B=n.players.get(A);if(!L||!L.alive||n.phase==="over"||B&&B!==L&&B.team===L.team||L.god)return;let z,U=0;if(R.raw)z=Math.round(D);else{let F=Ze[w],H=Fu(D,R.ap??(F?.ap||.5),C,L.ar,L.helm);z=H.hp,U=H.armor}z=Math.min(z,L.hp),L.hp-=z,L.ar=Math.max(0,L.ar-U),B&&B!==L&&(B.dmgR+=z,L.dmgBy[A]=(L.dmgBy[A]||0)+z),t=!0,n.emit("ev",{t:"hurt",v:S,a:A,n:z,hs:C==="head",w,helm:L.helm&&C==="head"}),L.hp<=0&&E(L,B,w,C==="head",R.wb)};function E(S,A,D,C,w){if(S.hp=0,S.alive=!1,S.d++,A&&A!==S)if(A.team!==S.team){A.k++,A.rk=(A.rk||0)+1;let L=Ze[D];g(A,L?.reward??300)}else A.k--,g(A,Nn.teamKill);for(let[L,B]of Object.entries(S.dmgBy||{}))if(L!==A?.id&&B>=41){let z=n.players.get(L);z&&z.team!==S.team&&z.a++}let R=S.inv.p||(S.inv.s&&S.inv.s!==y0(S.team)?S.inv.s:null)||S.inv.s;R&&v(R,S.x,S.y,S.z,null,S.yaw),S.inv.c4&&(S.inv.c4=!1,y(S)),S.inv.kit&&v("defuser",S.x+.3,S.y,S.z,null,0),S.inv={...S.inv,p:null,s:null,g:[],kit:!1,zeus:!1,c4:!1,v:S.inv.v+1},a.delete(S.id),t=!0,n.emit("ev",{t:"kill",k:A?A.id:null,v:S.id,w:D,hs:!!C,wb:!!w}),M()}function y(S){n.bomb.state="dropped",n.bomb.carrier=null,n.bomb.x=S.x,n.bomb.y=S.y,n.bomb.z=S.z,n.emit("ev",{t:"bombdrop"})}function v(S,A,D,C,w,R=0){let L=h++,B=A-Math.sin(R)*.6,z=C-Math.cos(R)*.6,U=!n.solidAt(B,D+.3,z);n.drops.set(L,{id:L,w:S,x:U?B:A,y:n.floorAt(U?B:A,U?z:C,D+.6)+.05,z:U?z:C,ammo:w||null}),t=!0}e.handle=(S,A,D,C={})=>{let w=n.players.get(D);if(w)switch(S){case"hit":{if(!w.alive&&n.phase!=="post")return;let R=Ze[A.w];if(!R)return;let L=R.cat==="knife"?180:R.dmg*R.pellets*1.01;e.damage(A.t,D,Math.min(+A.d||0,L),A.part,A.w,{wb:A.wb});break}case"buy":T(w,A.i);break;case"drop":{if(!w.alive)return;let R=A.s;if(R==="zeus"){w.inv.zeus=!1,w.inv.v++,t=!0;return}if(R==="c4"){if(!w.inv.c4)return;w.inv.c4=!1,w.inv.v++,y({x:A.x,y:A.y,z:A.z}),n.bomb.x-=Math.sin(A.yaw)*.6,n.bomb.z-=Math.cos(A.yaw)*.6,n.bomb.y=n.floorAt(n.bomb.x,n.bomb.z,A.y+.6),t=!0;return}let L=R==="p"?w.inv.p:R==="s"?w.inv.s:null;if(!L)return;w.inv[R]=null,w.inv.v++,v(L,A.x,A.y,A.z,A.ammo,A.yaw);break}case"take":{if(!w.alive)return;if(A.id==="c4"){if(w.team!=="T"||n.bomb.state!=="dropped"||Math.hypot(w.x-n.bomb.x,w.z-n.bomb.z)>1.8)return;w.inv.c4=!0,w.inv.v++,n.bomb.state="carried",n.bomb.carrier=w.id,t=!0,n.emit("ev",{t:"bombpick",p:w.id});return}let R=n.drops.get(A.id);if(!R||Math.hypot(w.x-R.x,w.z-R.z)>2.2)return;if(R.w==="defuser"){if(w.team!=="CT"||w.inv.kit)return;w.inv.kit=!0,w.inv.v++,n.drops.delete(R.id),t=!0;return}let L=Vs(R.w)===1?"p":"s";if(w.inv[L]){if(!A.swap)return;v(w.inv[L],w.x,w.y,w.z,A.ammo,w.yaw)}w.inv[L]=R.w,w.inv[L+"a"]=R.ammo,w.inv.v++,n.drops.delete(R.id),t=!0;break}case"nade":{let R=w.inv.g.indexOf(A.type);if(R<0)return;w.inv.g.splice(R,1),w.inv.v++,t=!0;break}case"plant":{let R=bi(n.W,A.x,A.z)&12;if(!w.alive||!w.inv.c4||n.phase!=="live"||!R||n.bomb.state==="planted")return;w.inv.c4=!1,w.inv.v++,Object.assign(n.bomb,{state:"planted",carrier:null,x:A.x,y:A.y,z:A.z,t:Bt.bomb,site:R&4?"A":"B"}),r=w.id,g(w,Nn.plantReward),t=!0,n.emit("ev",{t:"plant",p:w.id,site:n.bomb.site}),M();break}case"defst":{if(!w.alive||w.team!=="CT"||n.bomb.state!=="planted"||Math.hypot(w.x-n.bomb.x,w.z-n.bomb.z)>2.2)return;a.set(w.id,{t0:n.time,dur:w.inv.kit?Bt.kit:Bt.defuse}),n.emit("ev",{t:"defst",p:w.id,kit:w.inv.kit});break}case"defx":a.delete(D);break;case"defok":{let R=a.get(D);if(!R||!w.alive||n.bomb.state!=="planted"||n.time-R.t0<R.dur-.5)return;b(w);break}case"adm":C.admin&&P(w,A);break;case"fall":w.alive&&e.damage(D,D,Math.min(999,+A.d||0),"chest","world",{raw:!0});break}},e.botDefuse=S=>{a.has(S.id)||e.handle("defst",{},S.id)},e.isDefusing=S=>a.has(S);function b(S){a.clear(),n.bomb.state="defused",S.defused=!0,g(S,Nn.defuseReward),n.emit("ev",{t:"defused",p:S.id}),m("CT","defuse")}function x(){let S=n.bomb;S.state="exploded",n.emit("ev",{t:"boom",x:S.x,y:S.y,z:S.z});let A=1750*.0254/3;for(let D of n.players.values()){if(!D.alive)continue;let C=Math.hypot(D.x-S.x,D.y-S.y,D.z-S.z),w=500*Math.exp(-(C*C)/(2*A*A));if(w>1){let R=Fu(w,.5,"chest",D.ar,D.helm);D.hp-=Math.min(D.hp,R.hp),D.ar=Math.max(0,D.ar-R.armor),D.hp<=0&&(D.alive=!1,D.d++,n.emit("ev",{t:"kill",k:null,v:D.id,w:"c4"}))}}t=!0,m("T","bomb")}e.heBlast=(S,A)=>{for(let D of n.players.values()){if(!D.alive)continue;let C=Math.hypot(D.x-S.x,D.y+1-S.y,D.z-S.z);if(C>Pt.heR||!A(S,D))continue;let w=Pt.heDmg*(1-C/Pt.heR);w<1||e.damage(D.id,S.owner,w,"chest","he",{ap:.5})}};function T(S,A){let D=Ze[A],C=L=>n.emitTo(S.id,"ev",{t:"deny",why:L});if(!D||!S.alive)return;if(!e.canBuyTime())return C("Se termin\xF3 el tiempo de compra");if(!e.buyZone(S))return C("Ten\xE9s que estar en tu zona de compra");if(D.side!=="both"&&D.side!==S.team)return C("No disponible para tu equipo");let w=D.price,R=S.inv;if(A==="vest"){if(S.ar>=100)return C("Ya ten\xE9s chaleco")}else if(A==="vesthelm"){if(S.ar>=100&&S.helm)return C("Ya ten\xE9s chaleco y casco");S.ar>=100&&(w=350)}else if(A==="defuser"){if(R.kit)return C("Ya ten\xE9s el kit")}else if(A==="zeus"){if(R.zeus)return C("Ya ten\xE9s la Zeus")}else if(D.cat==="grenade"){let L=R.g.length,B=R.g.filter(z=>z===A||(z==="molotov"||z==="incendiary")&&(A==="molotov"||A==="incendiary")).length;if(L>=4)return C("Llev\xE1s el m\xE1ximo de granadas");if(B>=(D.max||1))return C("No pod\xE9s llevar m\xE1s de esa granada")}else{let L=Vs(A)===1?"p":"s";if(R[L]===A)return C("Ya ten\xE9s esa arma")}if(S.money<w)return C("No te alcanza la plata");if(S.money-=w,A==="vest")S.ar=100;else if(A==="vesthelm")S.ar=100,S.helm=!0;else if(A==="defuser")R.kit=!0;else if(A==="zeus")R.zeus=!0;else if(D.cat==="grenade")R.g.push(A);else{let L=Vs(A)===1?"p":"s";R[L]&&v(R[L],S.x,S.y,S.z,null,S.yaw+Math.PI),R[L]=A,R[L+"a"]=null}R.v++,t=!0,n.emitTo(S.id,"ev",{t:"bought",i:A})}e.buy=T;function P(S,A){if(A.a==="god")S.god=!!A.v,t=!0;else if(A.a==="money")S.money=Nn.max,t=!0;else if(A.a==="win")(n.phase==="live"||n.phase==="freeze")&&(n.phase="live",m(S.team,"elim"));else if(A.a==="kill")for(let D of n.players.values())D.alive&&D.team!==S.team&&E(D,S,"knife",!0,!1);else A.a==="heal"&&(S.hp=100,S.ar=100,S.helm=!0,t=!0)}return e}var zu=.0254,_0=Math.PI/180,qM={pistol:.12,smg:.16,rifle:.36,sniper:.6,heavy:.3,equip:0,knife:0},YM=n=>n.id==="awp"?.85:n.id==="deagle"||n.id==="r8"?.3:n.id==="ak47"?.42:n.cat==="heavy"&&n.pellets>1?0:qM[n.cat]??0;function Ka(n,e){let t=n.scope&&n.cat==="sniper"&&e.scoped?n.scoped:n.spread,i=n.speed*zu*(e.scoped&&n.cat==="sniper"?.5:1),s=Math.max(0,Math.min(1,(e.speed-i*.34)/(i*.66)));return t+=n.move*s,e.onGround||(t+=n.cat==="sniper"?.25:.12),e.duck>.5&&e.onGround&&(t*=.75),n.auto&&n.pellets===1&&(t+=Math.min(.022,e.shots*.0016)),n.cat==="pistol"&&!n.auto&&(t+=Math.min(.03,e.shots*.006)),t}function Rc(n,e,t){if(n.pellets>1||n.cat==="sniper")return[n.kick,(t()-.5)*n.sway];let i=e===0?n.kick*.6:e<9?n.kick:n.kick*.25,s=(t()-.5)*n.sway*.5;return n.auto&&n.cat!=="pistol"&&(e>=7&&e<14?s+=-n.sway*1.1:e>=14&&e<22?s+=n.sway*1.25:e>=22&&(s+=Math.sin(e*.9)*n.sway)),[i,s]}function Dr(n,e,t,i,s,r){let a=r()*Math.PI*2,o=s*(r()*.6+r()*.4),l=e+t*_0+Math.sin(a)*o,c=n-i*_0+Math.cos(a)*o;return[-Math.sin(c)*Math.cos(l),Math.sin(l),-Math.cos(c)*Math.cos(l)]}function Cc(n,e,t,i,s,r,a,o,l,c,h){let f=Math.min(c.range*zu,300),u=c.dmg,d=YM(c),m=!1,_=i,p=s,g=r,M=0,E=[];for(let y=0;y<3;y++){let v=f-M;if(v<=0)break;let b=Vi(n,_,p,g,a,o,l,v),x=b?b.t:v,T=null;for(let D of h){if(!D.alive||D.id===t||Math.abs(D.x-_)>x+2||Math.abs(D.z-g)>x+2)continue;let C=l0(D,_,p,g,a,o,l,x);C&&(!T||C.t<T.t)&&(T={...C,id:D.id})}if(T){let D=M+T.t,C=u*Math.pow(c.rangeMod,D/zu/500),w=[_+a*T.t,p+o*T.t,g+l*T.t];return{end:w,hit:{id:T.id,part:T.part,dmg:C,pos:w},impacts:E,wb:m}}if(!b)return{end:[_+a*v,p+o*v,g+l*v],hit:null,impacts:E,wb:m};let P=[_+a*x,p+o*x,g+l*x];if(E.push([P[0],P[1],P[2],b.nx,b.ny,b.nz]),d<=0)return{end:P,hit:null,impacts:E,wb:m};let S=0,A=.03;for(;S<d&&bc(n,P[0]+a*(S+A),P[1]+o*(S+A),P[2]+l*(S+A));)S+=A;if(S>=d)return{end:P,hit:null,impacts:E,wb:m};S+=A,u*=Math.max(.15,1-S/d)*.75,d-=S,m=!0,M+=x+S,_=P[0]+a*S,p=P[1]+o*S,g=P[2]+l*S,E.push([_,p,g,-a,-o,-l])}return{end:[_,p,g],hit:null,impacts:E,wb:m}}function Ja(n,e,t,i){let s=t[0],r=t[1],a=t[2];for(let o of[1.55,1.1]){let l=i[0],c=i[1]+o*(i[3]||1),h=i[2],f=l-s,u=c-r,d=h-a,m=Math.hypot(f,u,d),_=Vi(n,s,r,a,f/m,u/m,d/m,m);if(!(_&&_.t<m-.1)&&!m0(e,s,r,a,l,c,h))return!0}return!1}var v0=.0254,Pc=Math.PI/180,Ic={facil:{react:.62,turn:170,err:3.6,hs:.15,ctrl:.25,name:"F\xE1cil"},normal:{react:.4,turn:290,err:2.1,hs:.3,ctrl:.5,name:"Normal"},dificil:{react:.26,turn:430,err:1.25,hs:.45,ctrl:.75,name:"Dif\xEDcil"},experto:{react:.17,turn:620,err:.65,hs:.6,ctrl:.9,name:"Experto"}},Xt=Math.random,Hu=(n,e)=>{let t=n-e;for(;t>Math.PI;)t-=Math.PI*2;for(;t<-Math.PI;)t+=Math.PI*2;return t};function Vu(n,e){let t={},i={site:"A"},s=0,r={A:Za(n.nav,4),B:Za(n.nav,8)},a=new Map;t.brain=_=>{let p=a.get(_.id);return p||(p={path:null,pi:0,goal:null,repath:0,tgt:null,react:0,err:[0,0],fireT:0,burst:0,shots:0,pp:0,py:0,strafe:1,strafeT:0,stuck:0,last:[0,0],buyT:0,bought:!1,hold:null,plantT:0,lastKnown:null,lkT:0,blind:0,mag:{},reload:0,look:null,wantScope:!1,jumpT:0},a.set(_.id,p)),p},t.reset=()=>a.clear(),t.roundStart=()=>{i.site=Xt()<.5?"A":"B";let _=0;for(let p of n.players.values()){if(!p.bot)continue;let g=t.brain(p);Object.assign(g,{path:null,goal:null,tgt:null,hold:null,plantT:0,bought:!1,buyT:.6+Xt()*2.2,lastKnown:null,blind:0,reload:0,shots:0,pp:0,py:0,mag:{},look:null}),g.site=p.team==="CT"?_++%2===0?"A":"B":i.site,p.team==="CT"&&Xt()<.25&&(g.site=g.site==="A"?"B":"A")}},t.place=(_,p)=>{_.pl=wc(p[0],p[1],p[2],p[3]),_.pl.pitch=0},t.heard=(_,p,g,M,E)=>{for(let y of n.players.values()){if(!y.bot||!y.alive||y.team===M||!y.pl)continue;if(Math.hypot(y.pl.x-_,y.pl.z-g)<(E?40:14)){let b=t.brain(y);b.tgt||(b.lastKnown=[_,p,g],b.lkT=4)}}},t.flash=(_,p)=>{let g=t.brain(_);g.blind=Math.max(g.blind,p)};function o(_){let p=_.inv;return p.p||p.s||"knife"}function l(_){let p=()=>_.money,g=_.team==="T",M=[];p()>=5750&&Xt()<.18?M.push("awp"):p()>=3700?M.push(g?"ak47":"m4a4"):p()>=2900?M.push(g?"galil":"famas"):p()>=1850&&n.round>1&&M.push(g?"mac10":"mp9");for(let E of M)e.buy(_,E);p()>=1e3?e.buy(_,"vesthelm"):p()>=650&&(n.round===1||n.round===c()+1||Xt()<.5)&&e.buy(_,"vest"),!g&&p()>=400&&Xt()<.6&&e.buy(_,"defuser"),n.round===1&&p()>=500&&!_.inv.p&&Xt()<.3&&e.buy(_,g?"tec9":"fiveseven")}let c=()=>({rapida:4,corta:8,comp:12})[n.cfg.len];function h(_,p,g,M,E){let y=n.nav,v=_.pl,b=y.nearest(v.x,v.y,v.z),x=y.nearest(g,M,E);p.path=u0(y,b,x),p.pi=1,p.goal=[g,M,E],p.repath=6+Xt()*2,p.path||(p.repath=1.5+Xt())}let f=_=>n.nav.pos(_[Math.floor(Xt()*_.length)]);t.tick=_=>{let p=Ic[n.cfg.diff]||Ic.normal;s-=_;let g=s<=0;g&&(s=.1);let M=n.phase==="live",E=n.phase==="freeze";for(let y of n.players.values()){if(!y.bot||!y.pl)continue;let v=t.brain(y),b=y.pl;if(!y.alive)continue;let x=o(y),T=Ze[x];if(v.mag[x]===void 0&&(v.mag[x]=T.mag||0),v.blind=Math.max(0,v.blind-_),v.fireT-=_,v.lkT-=_,v.repath-=_,v.jumpT-=_,v.reload>0&&(v.reload-=_,v.reload<=0&&(v.mag[x]=T.mag)),E){v.buyT-=_,v.buyT<=0&&!v.bought&&(v.bought=!0,l(y)),d(y,v,0,0,!1,_,T);continue}if(g&&v.blind<=0){let R=[b.x,b.y+En(b),b.z],L=null,B=1e9;for(let z of n.players.values()){if(!z.alive||z.team===y.team)continue;let U=z.x-b.x,F=z.z-b.z,H=Math.hypot(U,F);if(H>90)continue;let $=Math.abs(Hu(Math.atan2(-U,-F),b.yaw)),J=v.tgt===z.id;if($>(J?2.6:1.45)&&H>2.5||!Ja(n.W,n.nades,R,[z.x,z.y,z.z,z.h/nt.hStand]))continue;let V=H*(J?.6:1);V<B&&(B=V,L=z)}L?(v.tgt!==L.id&&(v.tgt=L.id,v.react=p.react*(.8+Xt()*.5),v.err=[(Xt()-.5)*2*p.err*Pc*3,(Xt()-.5)*2*p.err*Pc*2],v.head=Xt()<p.hs),v.lastKnown=[L.x,L.y,L.z],v.lkT=5):v.tgt&&(v.tgt=null)}v.blind>0&&(v.tgt=null);let P=v.tgt?n.players.get(v.tgt):null,S=0,A=0,D=!1,C=!1;if(P&&P.alive){let R=b.x,L=b.y+En(b),B=b.z,z=P.y+(v.head?P.h-.12:P.h*.68),U=P.x-R,F=z-L,H=P.z-B,$=Math.hypot(U,H),J=Math.atan2(-U,-H)+v.err[0],V=Math.atan2(F,$)+v.err[1];v.err[0]*=Math.max(0,1-_*2.2),v.err[1]*=Math.max(0,1-_*2.2),u(b,J,V,p.turn*Pc*_),v.react-=_;let ee=Math.hypot(Hu(b.yaw,J-v.err[0]),b.pitch-(V-v.err[1]));v.strafeT-=_,v.strafeT<=0&&(v.strafeT=.4+Xt()*.8,v.strafe=Xt()<.5?-1:1);let oe=T.cat==="rifle"||T.cat==="sniper"||T.cat==="heavy"&&T.pellets===1||$>14;if(!oe||v.reload>0){let Le=[Math.cos(b.yaw),-Math.sin(b.yaw)];S=Le[0]*v.strafe,A=Le[1]*v.strafe}T.cat==="sniper"&&(v.wantScope=!0);let Te=Math.hypot(b.vx,b.vz);v.react<=0&&ee<Math.max(.02,.6/Math.max(3,$))+.03&&v.reload<=0&&v.fireT<=0&&(!oe||Te<T.speed*v0*.4||$<6)&&(v.mag[x]<=0&&T.mag?(v.reload=T.reload,v.shots=0):m(y,v,T,x,p,$)),v.reload<=0&&v.mag[x]<=0&&T.mag&&(v.reload=T.reload,v.shots=0)}else{v.wantScope=!1,v.shots&&v.fireT<-.35&&(v.shots=0),T.mag&&v.mag[x]<T.mag*.4&&v.reload<=0&&(v.reload=T.reload);let R=n.bomb,L=null,B=!1;if(y.team==="T"?y.inv.c4?bi(n.W,b.x,b.z)&12&&M&&b.onGround?(v.plantT+=_,B=!0,n.setPlanting(y.id,v.plantT),v.plantT>=3.2&&(v.plantT=0,n.setPlanting(y.id,0),e.handle("plant",{x:b.x,y:b.y,z:b.z},y.id))):(v.plantT=0,(!v.goal||v.goalKind!=="site")&&(L=f(r[v.site]),v.goalKind="site")):R.state==="dropped"?((v.goalKind!=="bomb"||v.repath<=0)&&(L=[R.x,R.y,R.z],v.goalKind="bomb"),Math.hypot(b.x-R.x,b.z-R.z)<1.2&&e.handle("take",{id:"c4"},y.id)):R.state==="planted"?v.goalKind!=="post"&&(L=[R.x+(Xt()-.5)*10,R.y,R.z+(Xt()-.5)*10],v.goalKind="post"):(!v.goal||v.goalKind!=="site")&&(L=f(r[v.site]),v.goalKind="site"):R.state==="planted"?Math.hypot(b.x-R.x,b.z-R.z)<1.1?(B=!0,C=!0,e.botDefuse(y),v.look=[R.x,R.y,R.z]):(v.goalKind!=="defuse"||v.repath<=0)&&(L=[R.x,R.y,R.z],v.goalKind="defuse"):(!v.goal||v.goalKind!=="hold")&&(L=f(r[v.site]),v.goalKind="hold"),!L&&v.goal&&!v.path&&v.repath<=0&&(v.goal=null),L&&h(y,v,L[0],L[1],L[2]),!B&&v.path&&v.pi<v.path.length){let F=v.path[v.pi],H=F[0]-b.x,$=F[2]-b.z,J=Math.hypot(H,$);J<.55?v.pi++:(S=H/J,A=$/J,F[1]-b.y>.45&&J<1.6&&v.jumpT<=0&&(v.jump=!0,v.jumpT=.8));let V=Math.hypot(b.x-v.last[0],b.z-v.last[1]);v.stuck=V<_*.6?v.stuck+_:0,v.last=[b.x,b.z],v.stuck>.6&&(v.jump=!0,v.stuck>1.6&&(v.stuck=0,v.goal=null,v.path=null))}else if(!B&&v.goalKind==="hold"&&v.path&&v.pi>=v.path.length){if(!v.look){let F=n.spawns.T;v.look=[F.cx,b.y+1.5,F.cz]}Xt()<_*.05&&(v.goal=null)}else!B&&v.goalKind==="site"&&v.path&&v.pi>=v.path.length&&(v.goal=null);let z=null,U=0;if(v.lastKnown&&v.lkT>0){let F=v.lastKnown;z=Math.atan2(-(F[0]-b.x),-(F[2]-b.z)),U=Math.atan2(F[1]+1.4-b.y-En(b),Math.hypot(F[0]-b.x,F[2]-b.z))}else S||A?z=Math.atan2(-S,-A):v.look&&(z=Math.atan2(-(v.look[0]-b.x),-(v.look[2]-b.z)));z!==null&&u(b,z,U,p.turn*.55*Pc*_)}let w=(T.recover||9)*_;v.pp=Math.max(0,v.pp-w*(v.fireT<-.05?1:.3)),v.py*=Math.max(0,1-_*4),D=!!P&&T.cat!=="knife",d(y,v,S,A,D,_,T,C)}};function u(_,p,g,M){let E=Hu(p,_.yaw);_.yaw+=Math.max(-M,Math.min(M,E));let y=g-_.pitch;_.pitch+=Math.max(-M,Math.min(M,y)),_.pitch=Math.max(-1.45,Math.min(1.45,_.pitch))}function d(_,p,g,M,E,y,v,b=!1){let x=_.pl,T=-Math.sin(x.yaw),P=-Math.cos(x.yaw),S=Math.cos(x.yaw),A=-Math.sin(x.yaw),D={f:g*T+M*P,s:g*S+M*A,jump:!!p.jump,crouch:b,walk:E};p.jump=!1,(n.phase==="freeze"||n.planting(_.id)>0||e.isDefusing(_.id))&&(D.f=D.s=0,D.jump=!1);let w=v.speed*v0*(p.wantScope&&v.cat==="sniper"?.42:1),R=y;for(;R>1e-6;){let L=Math.min(R,.011111111111111112),B=Ec(n.W,x,D,L,w);B&&n.fallDamage(_,B),R-=L}x.y<-20&&_.alive&&e.damage(_.id,_.id,999,"chest","world",{raw:!0});for(let L of n.players.values()){if(L===_||!L.alive||Math.abs(L.y-x.y)>1.6)continue;let B=x.x-L.x,z=x.z-L.z,U=Math.hypot(B,z);if(U<.62){let F=U>1e-4?(.62-U)/U*.5:0,H=x.x+(U>1e-4?B*F:.05),$=x.z+(U>1e-4?z*F:.03);Hi(n.W,H,$,x.y,x.h,nt.r)||(x.x=H,x.z=$)}}_.x=x.x,_.y=x.y,_.z=x.z,_.yaw=x.yaw,_.pitch=x.pitch,_.duck=x.duck,_.h=x.h,_.vx=x.vx,_.vz=x.vz,_.onGround=x.onGround,_.wpn=_.inv.c4&&p.plantT>0?"c4":o(_),_.scoped=p.wantScope&&v.cat==="sniper"}function m(_,p,g,M,E,y){let v=_.pl,b={speed:Math.hypot(v.vx,v.vz),onGround:v.onGround,duck:v.duck,scoped:_.scoped,shots:p.shots},x=Ka(g,b),[T,P]=Rc(g,p.shots,Xt),S=[v.x,v.y+En(v),v.z];n.fireBullets(_.id,M,S,D=>Dr(v.yaw,v.pitch,p.pp*(1-E.ctrl*.85),p.py*(1-E.ctrl*.85),x,D)),p.pp=Math.min(g.kickCap||12,p.pp+T),p.py+=P,p.shots++,g.mag&&p.mag[M]--;let A=60/g.rpm;if(g.auto){let D=y>25?2:y>12?4:8;p.shots%D===0?p.fireT=A+.25+Xt()*.25*(2-E.ctrl):p.fireT=A,p.shots%D===0&&(p.shots=0)}else p.fireT=Math.max(A,g.cat==="pistol"?.2+Xt()*.2:A)}return t}var pt=new Gt,Lc=new Ve,_w=new W(0,1,0),Nc=new W;function M0(n){let e={},i=new zn(new pn(1,1,1),new $t({color:"#ffffff"}),700);i.instanceMatrix.setUsage(Rr),i.frustumCulled=!1,i.count=0,i.instanceColor=new mi(new Float32Array(700*3),3),n.add(i);let s=[];e.particle=(C,w,R,L,B,z,U,F,H,$=9.8,J=0,V=null)=>{s.length>=700&&s.shift();let ee={x:C,y:w,z:R,vx:L,vy:B,vz:z,s:U,life:F,max:F,c:new Ve(H),g:$,grow:J,fy:V};return s.push(ee),ee},e.floorAt=null,e.shell=(C,w,R,L)=>{let B=e.floorAt?e.floorAt(C[0],C[2],C[1]):C[1]-1.5,z=e.particle(C[0],C[1],C[2],w*(1.5+Math.random()),1.6+Math.random(),R*(1.5+Math.random()),L?.03:.022,1.6,L?"#2d6b2a":"#c9a23a",9.8,0,B+.01);z.shell=!0};let r=64,a=new pn(1,1,1);a.translate(0,0,-.5);let o=new zn(a,new $t({color:"#ffe9a8",transparent:!0,opacity:.85,depthWrite:!1}),r);o.instanceMatrix.setUsage(Rr),o.frustumCulled=!1,o.count=0,n.add(o);let l=[];e.tracer=(C,w)=>{l.length>=r&&l.shift();let R=Math.hypot(w[0]-C[0],w[1]-C[1],w[2]-C[2]);l.push({a:[...C],b:[...w],d:R,t:0,life:Math.min(.25,R/280+.04)})};let c=220,h=new $n(.07,.07),f=new zn(h,new $t({color:"#1d1a17",polygonOffset:!0,polygonOffsetFactor:-2,depthWrite:!1}),c);f.count=0,f.frustumCulled=!1,n.add(f);let u=0;e.decal=(C,w)=>{pt.position.set(C[0]+w[0]*.01,C[1]+w[1]*.01,C[2]+w[2]*.01),Nc.set(w[0],w[1],w[2]),pt.quaternion.setFromUnitVectors(new W(0,0,1),Nc),pt.rotateZ(Math.random()*3),pt.scale.setScalar(.7+Math.random()*.6),pt.updateMatrix(),f.setMatrixAt(u,pt.matrix),u=(u+1)%c,f.count=Math.max(f.count,u===0?c:u),f.instanceMatrix.needsUpdate=!0};let d={};e.decalC=(C,w,R,L)=>{let B=d[R];if(!B){let z=new zn(new _a(.5,7),new $t({color:R,transparent:!0,opacity:.85,polygonOffset:!0,polygonOffsetFactor:-3,depthWrite:!1}),80);z.count=0,z.frustumCulled=!1,n.add(z),B=d[R]={m:z,i:0}}pt.position.set(C[0]+w[0]*.012,C[1]+w[1]*.012,C[2]+w[2]*.012),Nc.set(w[0],w[1],w[2]),pt.quaternion.setFromUnitVectors(new W(0,0,1),Nc),pt.rotateZ(Math.random()*6),pt.scale.set(L*(.8+Math.random()*.5),L*(.6+Math.random()*.5),1),pt.updateMatrix(),B.m.setMatrixAt(B.i,pt.matrix),B.i=(B.i+1)%80,B.m.count=Math.max(B.m.count,B.i===0?80:B.i),B.m.instanceMatrix.needsUpdate=!0},e.clearDecals=()=>{f.count=0,u=0;for(let C in d)d[C].m.count=0,d[C].i=0},e.impact=(C,w,R="#cdb894")=>{e.decal(C,w);for(let L=0;L<5;L++)e.particle(C[0],C[1],C[2],w[0]*2+(Math.random()-.5)*2,w[1]*2+Math.random()*1.5,w[2]*2+(Math.random()-.5)*2,.03+Math.random()*.03,.35+Math.random()*.3,R,6);if(e.particle(C[0],C[1],C[2],w[0]*.5,.4,w[2]*.5,.08,.5,"#d9cdb5",-.5,.25),e.particle(C[0],C[1],C[2],0,0,0,.05,.05,"#fff2a0",0),Math.random()<.45)for(let L=0;L<4;L++)e.particle(C[0],C[1],C[2],w[0]*3+(Math.random()-.5)*5,w[1]*3+Math.random()*3,w[2]*3+(Math.random()-.5)*5,.012,.18+Math.random()*.15,"#ffd060",12)},e.muzzleSmoke=C=>{for(let w=0;w<2;w++)e.particle(C[0],C[1],C[2],(Math.random()-.5)*.3,.25+Math.random()*.2,(Math.random()-.5)*.3,.05,.6+Math.random()*.4,"#bdbab4",-.2,.22)},e.dust=C=>{for(let w=0;w<2;w++)e.particle(C[0]+(Math.random()-.5)*.3,C[1]+.03,C[2]+(Math.random()-.5)*.3,(Math.random()-.5)*.4,.2,(Math.random()-.5)*.4,.05,.5,"#d8c4a0",.2,.15)},e.blood=(C,w,R)=>{let L=R?10:6;for(let B=0;B<L;B++)e.particle(C[0],C[1],C[2],w[0]*2.5+(Math.random()-.5)*2,w[1]*2+Math.random()*1.2,w[2]*2.5+(Math.random()-.5)*2,.035+Math.random()*.04,.4+Math.random()*.3,R?"#b3121a":"#8f1015",8)};let m=new Is(1,0),_=new $t({color:"#ffd27a",transparent:!0,opacity:.95,depthWrite:!1});e.muzzleMesh=()=>{let C=new $e(m,_);return C.visible=!1,C.scale.set(.05,.05,.14),C};let p=new br("#ffcf80",0,7,2);n.add(p);let g=0;e.flashLight=(C,w=1)=>{p.position.set(C[0],C[1],C[2]),p.intensity=6*w,g=.05};let M=400,E=new as(1,0),y=new zn(E,new Tn({color:"#b9bcc0",flatShading:!0}),M);y.instanceMatrix.setUsage(Rr),y.count=0,y.frustumCulled=!1,n.add(y),y.instanceColor=new mi(new Float32Array(M*3),3);let v=[];e.smoke=(C,w)=>{let R=[];for(let L=0;L<38;L++){let B=Math.random()*Math.PI*2,z=Math.sqrt(Math.random())*Pt.smokeR*.85,U=Math.random()*2.6;R.push({x:C.x+Math.cos(B)*z,y:C.y+.4+U,z:C.z+Math.sin(B)*z,s:.9+Math.random()*.9,ph:Math.random()*6,c:.82+Math.random()*.14})}v.push({g:C,balls:R})},e.clearSmokes=()=>{v.length=0,P.length=0};let b=260,x=new Cs(.22,.7,4);x.translate(0,.35,0);let T=new zn(x,new $t({color:"#ffffff"}),b);T.instanceColor=new mi(new Float32Array(b*3),3),T.instanceMatrix.setUsage(Rr),T.count=0,T.frustumCulled=!1,n.add(T);let P=[],S=new br("#ff8a3a",0,9,1.6);n.add(S),e.fire=(C,w,R)=>{let L=[];for(let B=0;B<26;B++){let z=Math.random()*Math.PI*2,U=Math.sqrt(Math.random())*Pt.fireR,F=C.x+Math.cos(z)*U,H=C.z+Math.sin(z)*U,$=R(w,F,H,C.y+.6);$<C.y-1.2||$>C.y+.7||L.push({x:F,y:$,z:H,ph:Math.random()*6,s:.7+Math.random()*.8})}P.push({g:C,fl:L})};let A=[],D=new as(1,1);return e.explosion=(C,w)=>{let R=new $e(D,new $t({color:"#ffb347",transparent:!0,opacity:.9,depthWrite:!1}));R.position.set(C[0],C[1]+.3,C[2]),n.add(R),A.push({m:R,t:0,life:w?1.1:.45,size:w?9:2.6});for(let L=0;L<(w?70:30);L++){let B=Math.random()*6.28,z=Math.random()*1.4,U=(w?12:7)*(.4+Math.random());e.particle(C[0],C[1]+.3,C[2],Math.cos(B)*Math.cos(z)*U,Math.sin(z)*U,Math.sin(B)*Math.cos(z)*U,.06+Math.random()*.08,.6+Math.random()*.6,Math.random()<.5?"#ffb347":"#3a3530",9)}for(let L=0;L<(w?24:10);L++)e.particle(C[0]+(Math.random()-.5)*2,C[1]+.5+Math.random(),C[2]+(Math.random()-.5)*2,Math.random()-.5,1+Math.random(),Math.random()-.5,.5,2+Math.random()*1.5,"#4a4642",-.3,w?1.6:.8);e.flashLight(C,w?6:3),g=w?.35:.15},e.flashPop=C=>{e.flashLight(C,8),g=.08;for(let w=0;w<14;w++)e.particle(C[0],C[1],C[2],(Math.random()-.5)*6,(Math.random()-.5)*6,(Math.random()-.5)*6,.04,.25,"#ffffff",0)},e.update=(C,w,R)=>{let L=0;for(let U=s.length-1;U>=0;U--){let F=s[U];if(F.life-=C,F.life<=0){s.splice(U,1);continue}F.vy-=F.g*C,F.x+=F.vx*C,F.y+=F.vy*C,F.z+=F.vz*C,F.fy!==null&&F.fy!==void 0&&F.y<F.fy&&(F.y=F.fy,F.vy=Math.abs(F.vy)>.6?-F.vy*.3:0,F.vx*=.5,F.vz*=.5,F.g=F.vy?9.8:0),F.vx*=1-C*1.5,F.vz*=1-C*1.5;let H=F.life/F.max,$=F.shell?F.s:F.s*(1+F.grow*(1-H)*8)*(F.grow?1:Math.min(1,H*2));pt.position.set(F.x,F.y,F.z),pt.rotation.set(F.x*7,F.y*5,0),F.shell?pt.scale.set($*.5,$*.5,$*1.6):pt.scale.setScalar($),pt.updateMatrix(),i.setMatrixAt(L,pt.matrix),i.setColorAt(L,F.c),L++}i.count=L,i.instanceMatrix.needsUpdate=!0,i.instanceColor&&(i.instanceColor.needsUpdate=!0),L=0;for(let U=l.length-1;U>=0;U--){let F=l[U];if(F.t+=C,F.t>F.life){l.splice(U,1);continue}let H=F.t/F.life,$=Math.min(F.d,3.5),J=Math.min(F.d,F.d*H+$*.5),V=Math.max(0,J-$),ee=(F.b[0]-F.a[0])/F.d,oe=(F.b[1]-F.a[1])/F.d,Te=(F.b[2]-F.a[2])/F.d;pt.position.set(F.a[0]+ee*J,F.a[1]+oe*J,F.a[2]+Te*J),pt.lookAt(F.a[0]+ee*(J+1),F.a[1]+oe*(J+1),F.a[2]+Te*(J+1)),pt.rotateY(Math.PI),pt.scale.set(.012,.012,Math.max(.01,J-V)),pt.updateMatrix(),o.setMatrixAt(L++,pt.matrix)}o.count=L,o.instanceMatrix.needsUpdate=!0,L=0;for(let U=v.length-1;U>=0;U--){let F=v[U],H=F.g;if(H.state!=="active"){v.splice(U,1);continue}let $=Pt.smokeLife-H.life,J=Math.min(1,$/1.2),V=Math.min(1,H.life/1.5);for(let ee of F.balls){if(L>=M)break;let oe=J*V;pt.position.set(H.x+(ee.x-H.x)*(.3+.7*J),H.y+(ee.y-H.y)*(.3+.7*J)+Math.sin(w*.6+ee.ph)*.08,H.z+(ee.z-H.z)*(.3+.7*J)),pt.rotation.set(ee.ph,w*.05+ee.ph,0),pt.scale.setScalar(Math.max(.01,ee.s*oe*1.25)),pt.updateMatrix(),y.setMatrixAt(L,pt.matrix),Lc.setScalar(ee.c),y.setColorAt(L,Lc),L++}}y.count=L,y.instanceMatrix.needsUpdate=!0,y.instanceColor&&(y.instanceColor.needsUpdate=!0),L=0;let B=0,z=null;for(let U=P.length-1;U>=0;U--){let F=P[U],H=F.g;if(H.state!=="active"||H.life<=0){P.splice(U,1);continue}let $=Math.min(1,H.life/1.2)*Math.min(1,(Pt.fireLife-H.life)*4+.3);for(let J of F.fl){if(L>=b)break;let V=.7+Math.sin(w*14+J.ph)*.2+Math.sin(w*23+J.ph*2)*.1;pt.position.set(J.x,J.y,J.z),pt.rotation.set(0,J.ph+w,0),pt.scale.set(J.s*$,J.s*$*V*1.3,J.s*$),pt.updateMatrix(),T.setMatrixAt(L,pt.matrix),Lc.setRGB(1,.45+V*.35,.1),T.setColorAt(L,Lc),L++}B+=$,z=H}T.count=L,T.instanceMatrix.needsUpdate=!0,T.instanceColor&&(T.instanceColor.needsUpdate=!0),z?(S.position.set(z.x,z.y+1,z.z),S.intensity=Math.min(1,B)*(3+Math.sin(w*20)*.8)):S.intensity=0;for(let U=A.length-1;U>=0;U--){let F=A[U];F.t+=C;let H=F.t/F.life;if(H>=1){n.remove(F.m),F.m.material.dispose(),A.splice(U,1);continue}F.m.scale.setScalar(F.size*(.3+.7*Math.sqrt(H))),F.m.material.opacity=.9*(1-H),F.m.material.color.setRGB(1,.7-H*.4,.3-H*.25)}g>0&&(g-=C,g<=0&&(p.intensity=0))},e}function Wi(n,e=!1){let t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},a={},o=n[0].morphTargetsRelative,l=new nn;l.morphTargetsRelative=o;let c=0;for(let h=0;h<n.length;++h){let f=n[h],u=0,d=0;if(t!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let m in f.attributes){if(!i.has(m))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+m+'" attribute exists among all geometries, or in none of them.'),null;r[m]===void 0&&(r[m]=[]),r[m].push(f.attributes[m]),u++}if(u!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let m in f.morphAttributes){if(!s.has(m))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;if(f.morphAttributes[m].length!==n[0].morphAttributes[m].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have the same number of morph targets for the "'+m+'" morph attribute.'),null;a[m]===void 0&&(a[m]=[]),a[m].push(f.morphAttributes[m]),d++}if(d!==s.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of morph attributes."),null;if(e){let m;if(t)m=f.index.count;else if(f.attributes.position!==void 0)m=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,m,h),c+=m}}if(t){let h=0,f=[];for(let u=0;u<n.length;++u){let d=n[u].index;for(let m=0;m<d.count;++m)f.push(d.getX(m)+h);h+=n[u].attributes.position.count}l.setIndex(f)}for(let h in r){let f=b0(r[h]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,f)}for(let h in a){let f=a[h][0].length;if(f!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let u=0;u<f;++u){let d=[];for(let _=0;_<a[h].length;++_)d.push(a[h][_][u]);let m=b0(d);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(m)}}}return l}function b0(n){let e,t,i,s=-1,r=0;for(let c=0;c<n.length;++c){let h=n[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let a=new e(r),o=new Sn(a,t,i),l=0;for(let c=0;c<n.length;++c){let h=n[c];if(h.isInterleavedBufferAttribute){let f=l/t;for(let u=0,d=h.count;u<d;u++)for(let m=0;m<t;m++){let _=h.getComponent(u,m);o.setComponent(u+f,m,_)}}else a.set(h.array,l);l+=h.count*t}return s!==void 0&&(o.gpuType=s),o}var jn=new Tn({vertexColors:!0,flatShading:!0}),eo=new Tn({vertexColors:!0,flatShading:!0}),Dc=new Ve;function kc(n,e){n=n.index?n.toNonIndexed():n,n.computeVertexNormals();let t=n.attributes.position.count,i=new Float32Array(t*3),s=n.attributes.normal.array;Dc.set(e);for(let r=0;r<t;r++){let a=.8+s[r*3+1]*.2+s[r*3]*.06;i[r*3]=Dc.r*a,i[r*3+1]=Dc.g*a,i[r*3+2]=Dc.b*a}n.setAttribute("color",new Sn(i,3));for(let r of Object.keys(n.attributes))r!=="position"&&r!=="normal"&&r!=="color"&&n.deleteAttribute(r);return n}function qe(n,e,t,i=0){let s=new vr(n.map(a=>new he(a[0],a[1]))),r=new Ca(s,{depth:e,bevelEnabled:!1,steps:1,curveSegments:3});return r.translate(0,0,-e/2),r.rotateY(Math.PI/2),r.translate(i,0,0),kc(r,t)}function yt(n,e,t,i,s,r=7,a=0,o=n){let l=new rs(o,n,t-e,r);return l.rotateX(-Math.PI/2),l.translate(a,i,-(e+t)/2),kc(l,s)}function we(n,e,t,i,s,r,a=0){let o=new pn(n,e,t);return o.translate(a,s,-i),kc(o,r)}var no=[{name:"Original",b:null,w:null,sw:"#3a3c40"},{name:"Desierto",b:"#b59a6c",w:"#8a6c44",sw:"#b59a6c"},{name:"Bosque",b:"#4f6040",w:"#3d4a30",sw:"#4f6040"},{name:"\xC1rtico",b:"#dfe4ea",w:"#b9c2cc",sw:"#dfe4ea"},{name:"Ne\xF3n",b:"#2b1f47",w:"#ff3fa4",sw:"#ff3fa4"},{name:"Oro",b:"#c9a23a",w:"#6b4a24",sw:"#c9a23a"},{name:"Carmes\xED",b:"#7a1a1a",w:"#2a1a1a",sw:"#9a2020"},{name:"Cobalto",b:"#1f3f8a",w:"#9aa6b8",sw:"#2f5fc0"}],zc=(n,e)=>n&&typeof n=="object"?n[e]|0:n|0,$M="#34373c",Uc="#8b5a2e",ZM="#6e4423",Gu="#5a5f66";function E0(n){let e=[],t=(o,l="m")=>e.push([o,l]),i=null,s=[.3,.05],r=(o,l=.28,c=.11,h=.032)=>t(qe([[.03,.02],[-.02,.02],[-.02-Math.sin(l)*c,.02-c],[.03-Math.sin(l)*c,.02-c]],h,o),"w");switch(n){case"ak47":case"galil":case"sg553":{let o=n==="ak47"?Uc:n==="galil"?"#4b4635":"#55543f";t(qe([[-.07,.02],[.27,.02],[.27,.095],[-.07,.095]],.046,n==="ak47"?"#2c2d2f":n==="galil"?"#3a3830":"#4a4a3e"),"b"),t(qe([[-.07,.09],[-.44,.07],[-.46,-.06],[-.41,-.07],[-.2,0],[-.07,.02]],.038,o),"w"),t(qe([[.27,.025],[.5,.035],[.5,.09],[.27,.095]],.05,o),"w"),t(qe([[.27,.098],[.53,.105],[.53,.125],[.27,.12]],.026,$M),"m"),t(yt(.011,.5,.72,.065,"#1c1d1f")),t(we(.006,.05,.012,.66,.1,"#1c1d1f")),t(yt(.016,.69,.75,.065,"#1c1d1f",6)),t(we(.02,.025,.04,.2,.105,"#1c1d1f")),n==="sg553"&&t(yt(.02,-.02,.14,.14,"#1d1d1d",8)),r(n==="ak47"?ZM:"#2a2a2a"),t(qe([[.09,.02],[.17,.02],[.27,-.17],[.19,-.19]],.032,n==="ak47"?"#7a4f2a":"#2b2b2b"),"w"),t(qe([[.04,.02],[.08,.02],[.08,-.025],[.04,-.03]],.008,"#1c1d1f"),"m"),i=[.38,.03],s=[.75,.065];break}case"m4a4":case"m4a1s":case"famas":case"aug":{if(n==="famas"||n==="aug"){let o=n==="aug"?"#5d6a52":"#3c4248";t(qe([[-.36,0],[.28,0],[.32,.08],[.28,.11],[-.36,.11],[-.38,.05]],.055,o),"b"),n==="famas"?t(qe([[-.2,.11],[.2,.11],[.22,.16],[-.18,.16]],.016,o),"b"):t(yt(.022,-.06,.12,.15,"#1d1d1d",8)),t(yt(.011,.3,.52,.05,"#1c1d1f")),r("#2a2a2a",.2),t(qe([[-.18,0],[-.1,0],[-.08,-.15],[-.16,-.16]],.03,"#262626"),"w"),t(qe([[.12,0],[.17,0],[.15,-.09],[.11,-.09]],.03,o),"b"),i=[.14,-.03],s=[.52,.05]}else t(qe([[-.06,.02],[.24,.02],[.24,.1],[-.06,.1]],.046,"#2f3236"),"b"),t(qe([[-.06,.1],[.24,.1],[.24,.12],[-.06,.12]],.028,"#1f2124"),"m"),t(yt(.012,-.32,-.06,.075,"#25272a",6)),t(qe([[-.2,.1],[-.38,.1],[-.38,-.02],[-.3,-.02],[-.2,.05]],.036,"#222428"),"w"),t(qe([[.24,.025],[.5,.03],[.5,.105],[.24,.105]],.05,"#2a2c30"),"b"),t(we(.012,.045,.012,.5,.13,"#1c1d1f")),t(we(.03,.02,.03,0,.135,"#1c1d1f")),n==="m4a1s"?(t(yt(.011,.5,.55,.065,"#1c1d1f")),t(yt(.022,.55,.82,.065,"#1a1b1d",10)),s=[.82,.065]):(t(yt(.011,.5,.7,.065,"#1c1d1f")),t(yt(.015,.66,.72,.065,"#1c1d1f",6)),s=[.72,.065]),r("#232427",.3),t(qe([[.09,.02],[.155,.02],[.18,-.15],[.115,-.155]],.03,"#26272a"),"w"),i=[.38,.03];break}case"awp":case"ssg08":case"g3sg1":case"scar20":{let o=n==="awp"?"#3f5b3a":n==="ssg08"?"#3e4c5e":n==="g3sg1"?"#2d302d":"#2b2e33",l=n==="awp"?1.15:1;t(qe([[-.52,.04],[-.3,.06],[-.1,.03],[.4,.03],[.42,.09],[-.06,.1*l],[-.22,.1*l],[-.52,.09*l],[-.54,-.07],[-.44,-.08],[-.2,-.05],[-.08,-.06],[-.06,0]],.05*l,o),"b"),t(qe([[-.14,.04],[-.24,.04],[-.24,-.02],[-.14,-.02]],.052*l,"#0d0d0d"),"m"),t(yt(.013*l,.4,n==="awp"?1.05:.92,.065,"#1c1d1f",7,0,.011*l)),t(yt(.028*l,-.08,.26,.15*l,"#191a1c",10)),t(yt(.036*l,.2,.3,.15*l,"#191a1c",10,0,.028*l)),t(yt(.033*l,-.14,-.07,.15*l,"#191a1c",10,0,.026*l)),t(we(.016,.05,.02,.02,.12*l,"#1c1d1f")),t(we(.016,.05,.02,.18,.12*l,"#1c1d1f")),(n==="awp"||n==="ssg08")&&t(we(.06,.012,.012,-.04,.09,"#2a2a2a",.04)),t(qe(n==="g3sg1"||n==="scar20"?[[.06,.03],[.12,.03],[.13,-.12],[.07,-.12]]:[[.06,.03],[.12,.03],[.12,-.04],[.06,-.04]],.03,"#222"),"w"),i=[.3,.02],s=[n==="awp"?1.05:.92,.065];break}case"p90":{t(qe([[-.22,.02],[.28,.02],[.32,.07],[.3,.11],[-.22,.12],[-.25,-.04],[-.12,-.08],[-.05,-.02],[.02,-.08],[.1,-.08],[.12,.02]],.06,"#3a3c3e"),"b"),t(qe([[-.18,.12],[.2,.12],[.2,.15],[-.18,.15]],.04,"#2a2a2a"),"m"),t(yt(.011,.3,.38,.06,"#1c1d1f")),i=[.12,-.04],s=[.38,.06];break}case"mac10":{t(qe([[-.05,.02],[.2,.02],[.2,.11],[-.05,.11]],.06,"#2a2b2e"),"b"),t(yt(.012,.2,.27,.07,"#1c1d1f")),t(qe([[-.01,.02],[.04,.02],[.04,-.2],[-.01,-.2]],.03,"#222"),"w"),t(we(.004,.06,.14,-.12,.08,"#1c1d1f",.02)),i=[.17,0],s=[.27,.07];break}case"mp9":case"mp7":case"ump":case"mp5":case"bizon":{let o=n==="ump"||n==="mp5"||n==="bizon"?.36:.28;t(qe([[-.06,.02],[o,.02],[o,.1],[-.06,.1]],.05,n==="mp7"?"#3a3d3f":"#2a2c30"),"b"),t(qe([[-.06,.09],[-.28,.08],[-.28,0],[-.24,0],[-.06,.04]],.03,"#1f2124"),"w"),r("#232427",.25),n==="bizon"?t(yt(.03,.06,.32,-.01,"#2b2b2b",8)):t(qe([[.07,.02],[.12,.02],[n==="mp5"?.16:.12,-.15],[n==="mp5"?.11:.07,-.15]],.028,"#222"),"w"),n==="mp5"?(t(yt(.022,o,o+.18,.06,"#1a1b1d",10)),s=[o+.18,.06]):(t(yt(.011,o,o+.06,.06,"#1c1d1f")),s=[o+.06,.06]),i=[o*.75,.01];break}case"nova":case"xm1014":case"sawedoff":case"mag7":{let o=n==="sawedoff"||n==="mag7",l=o?.42:.68;t(qe([[-.05,.02],[.18,.02],[.18,.1],[-.05,.1]],.05,"#2b2d30"),"b"),t(yt(.016,.18,l,.075,"#1c1d1f",8)),t(yt(.014,.18,l-.06,.04,"#1f2022",8)),t(qe([[.24,.01],[.46,.01],[.46,.06],[.24,.06]],.045,n==="sawedoff"?Uc:"#2a2a2a"),"w"),n==="mag7"&&t(qe([[.04,.02],[.12,.02],[.12,-.14],[.04,-.14]],.04,"#2a2a2a"),"w"),n==="sawedoff"?t(qe([[-.05,.08],[-.12,.06],[-.18,-.08],[-.1,-.09],[-.05,.02]],.035,Uc),"w"):n!=="mag7"?t(qe([[-.05,.09],[-.42,.06],[-.44,-.07],[-.38,-.08],[-.05,.02]],.04,n==="nova"?"#2a2a2a":"#26272a"),"w"):r("#232427"),i=[.35,0],s=[l,.075];break}case"m249":case"negev":{t(qe([[-.1,.02],[.32,.02],[.32,.13],[-.1,.13]],.07,"#3a3d36"),"b"),t(qe([[-.1,.1],[-.44,.08],[-.44,-.06],[-.1,.02]],.04,"#26272a"),"w"),t(yt(.016,.32,.82,.07,"#1c1d1f",8)),t(qe([[.32,.03],[.55,.03],[.55,.1],[.32,.1]],.06,"#2b2b2b"),"b"),t(we(.1,.12,.13,.12,-.04,"#3b3b2e",.05)),r("#232427"),i=[.45,.02],s=[.82,.07];break}case"deagle":case"r8":{n==="r8"?(t(yt(.012,.03,.24,.07,Gu,8)),t(yt(.03,-.01,.05,.05,Gu,6)),t(qe([[-.04,.02],[.04,.02],[.04,.08],[-.04,.08]],.03,Gu),"b"),r(Uc,.35,.1,.03),s=[.24,.07]):(t(qe([[-.05,.035],[.2,.035],[.21,.06],[.2,.092],[-.05,.092]],.032,"#9aa0a8"),"b"),t(qe([[-.04,0],[.17,0],[.17,.035],[-.04,.035]],.03,"#8a9098"),"b"),t(we(.012,.012,.01,.195,.1,"#1c1d1f")),r("#26272a",.25,.11,.036),s=[.21,.065]);break}case"zeus":{t(qe([[-.04,.02],[.13,.02],[.14,.07],[-.04,.07]],.04,"#2a3a6a"),"b"),t(we(.045,.035,.02,.14,.045,"#e6c84a")),r("#222",.25,.09),s=[.15,.045];break}case"knife":{t(qe([[-.12,-.012],[-.005,-.014],[-.005,.014],[-.12,.012],[-.13,0]],.024,"#1f2023"),"w"),t(qe([[-.005,-.03],[.012,-.03],[.012,.024],[-.005,.024]],.03,"#3a3c40"),"m"),t(qe([[.012,-.016],[.17,-.012],[.215,.006],[.17,.016],[.06,.016],[.012,.016]],.005,"#c9cfd6"),"b"),t(qe([[.03,.016],[.16,.016],[.16,.019],[.03,.019]],.007,"#8d949c"),"m"),s=[.21,0];break}case"he":t(kc(new as(.037,0),"#3d4a2c")),t(we(.016,.02,.016,0,.04,"#999")),t(we(.008,.05,.016,-.02,.025,"#aaa",.03));break;case"flash":t(yt(.028,-.055,.055,0,"#a0a8b2",8)),t(we(.016,.02,.016,0,.032,"#777"));break;case"smoke":t(yt(.03,-.065,.065,0,"#5a6670",8)),t(we(.02,.012,.02,0,.034,"#888"));break;case"decoy":t(yt(.026,-.05,.05,0,"#6b6b5b",6));break;case"incendiary":t(yt(.028,-.06,.06,0,"#a2552c",8));break;case"molotov":t(yt(.03,-.06,.04,0,"#5d7a3a",8)),t(yt(.012,.04,.1,0,"#4d6a2a",6)),t(yt(.016,.1,.13,0,"#e8d6b0",5));break;case"c4":t(we(.2,.06,.13,0,0,"#b8a27a")),t(we(.07,.03,.05,.01,.04,"#1d1d1d",.03)),t(we(.05,.012,.03,.01,.058,"#5bdc6d",.03)),t(we(.18,.02,.02,-.04,.035,"#a33"));break;case"defuser":t(we(.16,.05,.1,0,0,"#2d3a55")),t(we(.04,.04,.12,0,.03,"#d4b13a",.05));break;default:{let o=n==="dualies"?"#9aa0a8":n==="fiveseven"?"#4b4f55":n==="tec9"?"#2d2f33":"#34373c",l=n==="tec9"?.22:.18;t(qe([[-.04,.032],[l,.032],[l,.075],[-.03,.075],[-.045,.06]],.028,o),"b"),t(qe([[-.035,0],[l-.02,0],[l-.02,.032],[-.035,.032]],.026,"#222428"),"m"),r(n==="cz75"?"#3a2a1a":"#202124",.22,.1,.03),n==="tec9"&&t(qe([[.06,0],[.1,0],[.1,-.16],[.06,-.16]],.024,"#202124"),"w"),n==="usp"?(t(yt(.017,l,l+.15,.055,"#1a1b1d",10)),s=[l+.15,.055]):s=[l,.055],t(we(.008,.012,.008,l-.01,.082,"#111"))}}let a=Ze[n];if(a&&a.dmg&&a.cat!=="knife"&&a.cat!=="equip"){let o=a.cat==="pistol";t(qe([[.025,0],[.07,0],[.07,-.006],[.06,-.035],[.025,-.035],[.025,-.029],[.057,-.029],[.064,-.006],[.025,-.006]],.008,"#18191b"),"m"),t(we(.004,.02,.008,.045,-.012,"#0e0e0f")),t(o?we(.004,.012,.05,.06,.06,"#0b0b0c",.016):we(.004,.022,.07,.1,.07,"#0b0b0c",.026))}return{parts:e,fore:i,muzzle:s}}var Wu=new Map,to=new Map;function io(n){if(!to.has(n)){let e=E0(n);to.set(n,{fore:e.fore,muzzle:e.muzzle})}return to.get(n)}function Xi(n,e=0){let t=n+":"+e;if(Wu.has(t))return Wu.get(t);let i=E0(n),s=no[e]||no[0],r=Ze[n]&&Ze[n].dmg,a=i.parts.map(([l,c])=>{if(!s.b||!r||c!=="b"&&c!=="w"||n==="knife"&&c==="w")return l;let h=l.clone(),f=new Ve(c==="b"?s.b:s.w),u=h.attributes.color.array,d=h.attributes.normal.array;for(let m=0;m<u.length/3;m++){let _=.8+d[m*3+1]*.2+d[m*3]*.06;u[m*3]=f.r*_,u[m*3+1]=f.g*_,u[m*3+2]=f.b*_}return h}),o=Wi(a);return Wu.set(t,o),to.has(n)||to.set(n,{fore:i.fore,muzzle:i.muzzle}),o}function Fr(n,e=0){return new $e(Xi(n,e),jn)}var Oc={T:[{name:"F\xE9nix",shirt:"#8a7350",pants:"#5d5446",vest:"#6b5c40",glove:"#2b2b2b",boots:"#2b2620",skin:"#c79a74",head:"balaclava",hc:"#2b2b2b"},{name:"\xC9lite",shirt:"#5a3b2a",pants:"#3b4658",vest:"#3a2a20",glove:"#3a2a20",boots:"#1d1a17",skin:"#b98a66",head:"glasses",hc:"#1d1a17"},{name:"Guerrilla",shirt:"#5f6a3c",pants:"#7a6b4a",vest:"#4d5530",glove:"#3b3626",boots:"#3a2e20",skin:"#a7764f",head:"bandana",hc:"#a52a24"},{name:"Sombra",shirt:"#4a4d52",pants:"#33363b",vest:"#2a2c30",glove:"#1b1c1e",boots:"#151617",skin:"#c79a74",head:"goggles",hc:"#1d1e20"}],CT:[{name:"SWAT",shirt:"#36495f",pants:"#2f3b4a",vest:"#232d38",glove:"#1d1f22",boots:"#1d1f22",skin:"#c79a74",head:"helmet",hc:"#26303b"},{name:"GIGN",shirt:"#2b3a6b",pants:"#25305a",vest:"#1c2440",glove:"#15181f",boots:"#15181f",skin:"#c79a74",head:"visor",hc:"#1c2440"},{name:"SAS",shirt:"#2d2f33",pants:"#2a2c30",vest:"#4a4d45",glove:"#1b1c1e",boots:"#151617",skin:"#c79a74",head:"gasmask",hc:"#1b1c1e"},{name:"Comando",shirt:"#6b6a4a",pants:"#5d5a3e",vest:"#4a4a32",glove:"#3b3a2a",boots:"#2e2a20",skin:"#a7764f",head:"headset",hc:"#4a4a32"}]},A0=(n,e)=>(Oc[n]||Oc.T)[((e|0)%4+4)%4],Xu={};function KM(n,e){let t=n+e;if(Xu[t])return Xu[t];let i=A0(n,e),s=Wi([we(.4,.5,.24,0,.27,i.shirt),we(.44,.36,.28,0,.32,i.vest),we(.1,.1,.05,.15,.26,i.vest,-.11),we(.1,.1,.05,.15,.26,i.vest,.11),we(.1,.1,.05,.15,.38,i.vest,.11),we(.42,.07,.26,0,.03,"#2a2620"),we(.06,.06,.04,.13,.03,"#8a7a50"),we(.5,.12,.26,0,.47,i.shirt)]),r=[we(.22,.25,.23,0,.12,i.skin)],a=i.hc;i.head==="balaclava"?r.push(we(.235,.26,.24,0,.125,a),we(.18,.05,.02,.12,.15,i.skin),we(.04,.025,.01,.13,.155,"#111",-.05),we(.04,.025,.01,.13,.155,"#111",.05)):i.head==="glasses"?r.push(we(.235,.08,.24,0,.23,a),we(.2,.04,.02,.12,.15,"#111"),we(.24,.05,.08,-.08,.2,a)):i.head==="bandana"?r.push(we(.24,.07,.245,0,.21,a),we(.06,.1,.03,-.12,.17,a),we(.05,.02,.01,.12,.15,"#111",-.05),we(.05,.02,.01,.12,.15,"#111",.05)):i.head==="goggles"?r.push(we(.235,.26,.24,0,.125,a),we(.2,.06,.04,.12,.16,"#3a6070"),we(.24,.02,.25,0,.16,"#111")):i.head==="helmet"?r.push(we(.26,.12,.27,0,.23,a),we(.2,.05,.03,.13,.17,"#111"),we(.05,.08,.05,0,.14,"#333",.13)):i.head==="visor"?r.push(we(.27,.28,.27,0,.14,a),we(.2,.12,.02,.135,.13,"#5a7a9a")):i.head==="gasmask"?r.push(we(.24,.26,.24,0,.125,a),we(.18,.06,.02,.12,.16,"#6a7a7a"),we(.07,.07,.06,.14,.06,"#333"),we(.05,.05,.06,.12,.05,"#555",-.07),we(.05,.05,.06,.12,.05,"#555",.07)):i.head==="headset"&&r.push(we(.26,.11,.27,0,.23,a),we(.04,.08,.06,0,.12,"#222",-.125),we(.04,.08,.06,0,.12,"#222",.125),we(.2,.05,.03,.13,.17,"#111"));let o=Wi(r),l=Wi([we(.15,.46,.16,0,-.23,i.pants),we(.04,.12,.1,0,-.2,i.vest,.09)]),c=Wi([we(.14,.42,.15,0,-.21,i.pants),we(.16,.1,.06,.06,-.04,"#222"),we(.16,.12,.24,.04,-.4,i.boots)]),h=we(.12,.12,1,0,0,i.shirt),f=we(.105,.105,1,0,0,i.shirt),u=Wi([we(.09,.09,.1,0,0,i.glove)]);return Xu[t]={torso:s,head:o,thigh:l,shin:c,upper:h,fore:f,hand:u,S:i}}function Hc(n,e=0){let t=KM(n,e),i=new Rt,s=new Rt;i.add(s);let r=new Rt;r.position.y=.92,s.add(r);let a=[];for(let f of[-.11,.11]){let u=new Rt;u.position.set(f,0,0),r.add(u),u.add(new $e(t.thigh,jn));let d=new Rt;d.position.y=-.46,u.add(d),d.add(new $e(t.shin,jn)),a.push({hip:u,knee:d})}let o=new Rt;r.add(o),o.add(new $e(t.torso,jn));let l=new Rt;l.position.y=.53,o.add(l),l.add(new $e(t.head,jn));let c=new Rt;c.matrixAutoUpdate=!0,o.add(c);let h=[];for(let f=0;f<2;f++){let u=new $e(t.upper,jn),d=new $e(t.fore,jn),m=new $e(t.hand,jn);o.add(u,d,m),h.push({u,f:d,h:m})}return i.userData={body:s,hips:r,legs:a,chest:o,neck:l,gun:c,arms:h,gunId:null,phase:0,team:n,si:e},i}function Vc(n,e,t=0){let i=n.userData,s=e+":"+t;if(i.gunId!==s&&(i.gunId=s,i.gun.clear(),i.info=e?io(e):null,i.wid=e,e)){let r=Fr(e,t);if(r.scale.setScalar(1.12),i.gun.add(r),e==="dualies"){let a=Fr(e,t);a.scale.setScalar(1.12),a.position.x=-.24,i.gun.add(a)}}}var ja=new W,JM=new W,jM=new W,QM=new W,e1=new W;function R0(n,e,t,i,s,r){ja.subVectors(e,n);let a=ja.length(),o=(t+i)*.995;a>o&&(ja.multiplyScalar(o/a),a=o);let l=JM.copy(n).add(ja),c=(t*t-i*i+a*a)/(2*a),h=Math.sqrt(Math.max(0,t*t-c*c)),f=jM.copy(ja).normalize(),u=QM.copy(s).sub(n);return u.sub(e1.copy(f).multiplyScalar(u.dot(f))).normalize(),r.copy(n).addScaledVector(f,c).addScaledVector(u,h),l}var t1=new W(0,1,0),S0=new xt;function Bc(n,e,t){let i=e.distanceTo(t);n.position.copy(e).add(t).multiplyScalar(.5),S0.lookAt(e,t,t1),n.quaternion.setFromRotationMatrix(S0),n.scale.set(1,1,Math.max(.01,i))}var qu=new W,Qa=new W,Yu=new W,T0=new W;function Gc(n,e,t){let i=n.userData;i.phase+=t*Math.min(e.speed,6)*2.4;let s=Math.min(1,e.speed/3)*.6,r=Math.sin(i.phase)*s,a=e.duck;i.hips.position.y=.92-a*.36;let[o,l]=i.legs;o.hip.rotation.x=r-a*1.2,l.hip.rotation.x=-r-a*1.2,o.knee.rotation.x=Math.max(0,-Math.sin(i.phase)*s)*1.2+a*2,l.knee.rotation.x=Math.max(0,Math.sin(i.phase)*s)*1.2+a*2,e.onGround||(o.hip.rotation.x=-.6,l.hip.rotation.x=.2,o.knee.rotation.x=.9,l.knee.rotation.x=.4),i.chest.rotation.x=a*.2;let c=Math.max(-1.2,Math.min(1.2,e.pitch));i.neck.rotation.x=c*.55;let h=i.info,f=i.wid?Ze[i.wid]?.cat||i.wid:null,u=f==="pistol"||i.wid==="zeus";if(f==="knife"||f==="grenade"||f==="c4"||i.wid==="defuser")i.gun.position.set(.27,.16,-.22),i.gun.rotation.set(c*.5+.3,0,0);else{let d=u?.42:.28;i.gun.position.set(.11,.4+Math.sin(c)*d,-Math.cos(c)*d),i.gun.rotation.set(c,0,0)}i.gun.updateMatrix();for(let d=0;d<2;d++){let m=i.arms[d],_=d===0;qu.set(_?.24:-.24,.46,0);let p=null;h&&(_?p=Qa.set(0,0,f==="knife"?.06:0).applyMatrix4(i.gun.matrix):h.fore&&f!=="knife"?p=Qa.set(0,h.fore[1]*1.12-.02,-h.fore[0]*1.12).applyMatrix4(i.gun.matrix):i.wid==="dualies"?p=Qa.set(-.24,0,0).applyMatrix4(i.gun.matrix):u&&(p=Qa.set(-.04,-.04,.02).applyMatrix4(i.gun.matrix))),p||(p=Qa.set(_?.3:-.3,.02,-.05+r*.15*(_?-1:1))),T0.set(_?.7:-.7,-.5,.4);let g=R0(qu,p,.29,.27,T0,Yu);Bc(m.u,qu,Yu),Bc(m.f,Yu,g),m.h.position.copy(g),m.h.quaternion.copy(m.f.quaternion)}if(i.body.rotation.x=0,i.body.position.y=0,e.dead>0){let d=Math.min(1,e.dead);i.body.rotation.x=d*1.45,i.body.position.y=d*.15}}function C0(){let n=new Rt,e=new Rt;n.add(e);let t=new Rt;e.add(t);let i=[];for(let s=0;s<2;s++){let r=new $e(new pn(.08,.08,1),eo),a=new $e(new pn(.07,.07,1),eo),o=new Rt;n.add(r,a,o),i.push({u:r,f:a,h:o})}return n.userData={hold:e,gun:t,arms:i,id:null,team:null},n}var $u={};function n1(n,e){let t=n+e;if($u[t])return $u[t];let i=A0(n,e),s=we(.07,.07,1,0,0,i.shirt),r=Wi([we(.058,.058,1,0,0,i.shirt),we(.066,.066,.14,.43,0,i.vest)]),a=Wi([we(.05,.065,.07,0,-.01,i.glove),we(.056,.024,.042,.012,-.038,i.glove),we(.022,.022,.05,.016,.026,i.glove,.026)]);return $u[t]={sleeve:s,forearm:r,hand:a}}function P0(n,e,t,i=0,s=0){let r=n.userData,a=e+t+i+":"+s;if(r.key===a)return;r.key=a,r.id=e,r.team=t,r.gun.clear();for(let h of r.arms)h.h.clear();if(!e)return;let o=Ze[e]?.cat||e,l=new $e(Xi(e,s),eo);if(r.gun.add(l),r.dual=e==="dualies",r.dual){let h=new $e(Xi(e,s),eo);h.position.set(-.21,0,.02),h.rotation.y=-.08,r.gun.add(h)}r.info=io(e),r.cat=o;let c=n1(t,i);for(let h of r.arms)h.u.geometry=c.sleeve,h.f.geometry=c.forearm,h.h.add(new $e(c.hand,eo));r.base=e==="dualies"?[.12,-.15,-.48]:o==="pistol"||e==="zeus"?[.15,-.125,-.44]:o==="knife"?[.17,-.18,-.4]:o==="grenade"||o==="c4"||e==="defuser"?[.16,-.17,-.38]:o==="sniper"?[.19,-.22,-.55]:[.19,-.2,-.43],r.rot=o==="knife"?[.35,.55,-.25]:o==="grenade"||o==="c4"?[.1,.2,0]:[.03,.07,0],n.traverse(h=>{h.renderOrder=10,h.frustumCulled=!1})}var Zu=new W,Fc=new W,Ku=new W,w0=new W,Ur=new xt;function I0(n){let e=n.userData;if(!e.id)return;e.hold.updateMatrix(),e.gun.updateMatrix(),Ur.multiplyMatrices(e.hold.matrix,e.gun.matrix);let t=e.info||{},i=e.cat;for(let s=0;s<2;s++){let r=e.arms[s],a=s===0;Zu.set(a?.2:-.22,-.3,.12);let o=null;a?o=Fc.set(.004,-.012,i==="knife"?.065:0).applyMatrix4(Ur):t.fore&&i!=="knife"?o=Fc.set(-.004,t.fore[1]-.03,-t.fore[0]).applyMatrix4(Ur):e.dual?o=Fc.set(-.206,-.012,.02).applyMatrix4(Ur):(i==="pistol"||e.id==="zeus")&&(o=Fc.set(-.035,-.065,.025).applyMatrix4(Ur));let l=!!o;if(r.u.visible=r.f.visible=r.h.visible=l,!l)continue;w0.set(a?.6:-.65,-.7,.3);let c=R0(Zu,o,.4,.4,w0,Ku);Bc(r.u,Zu,Ku),Bc(r.f,Ku,c),r.h.position.copy(c),r.h.quaternion.setFromRotationMatrix(Ur),!a&&!e.dual&&r.h.rotateZ(.35)}}var Pe=null,so=null,Ju=null,qi={x:0,y:0,z:0,yaw:0};function ro(){if(Pe){Pe.state==="suspended"&&Pe.resume();return}try{Pe=new(window.AudioContext||window.webkitAudioContext),so=Pe.createGain(),so.gain.value=.55;let n=Pe.createDynamicsCompressor();n.threshold.value=-14,n.ratio.value=6,so.connect(n),n.connect(Pe.destination),Ju=Pe.createBuffer(1,Pe.sampleRate*1.5,Pe.sampleRate);let e=Ju.getChannelData(0);for(let t=0;t<e.length;t++)e[t]=Math.random()*2-1}catch{Pe=null}}function N0(n,e,t,i){qi.x=n,qi.y=e,qi.z=t,qi.yaw=i}function Nt(n,e=1,t=30){let i=Pe.createGain(),s=e,r=0;if(n){let a=n[0]-qi.x,o=n[1]-qi.y,l=n[2]-qi.z,c=Math.hypot(a,o,l);if(s*=1/(1+(c/t)**2*3),c>.5){let h=Math.cos(qi.yaw),f=-Math.sin(qi.yaw);r=Math.max(-1,Math.min(1,(a*h+l*f)/c))*.8}}if(s<.004)return null;if(i.gain.value=s,Pe.createStereoPanner){let a=Pe.createStereoPanner();a.pan.value=r,i.connect(a),a.connect(so)}else i.connect(so);return i}function kt(n,e,t,i,s,r=.7,a="lowpass",o=.002,l=1){let c=Pe.createBufferSource();c.buffer=Ju,c.playbackRate.value=.8+Math.random()*.4;let h=Pe.createBiquadFilter();h.type=a,h.Q.value=r,h.frequency.setValueAtTime(i,e),h.frequency.exponentialRampToValueAtTime(Math.max(30,s),e+t);let f=Pe.createGain();f.gain.setValueAtTime(1e-4,e),f.gain.exponentialRampToValueAtTime(l,e+o),f.gain.exponentialRampToValueAtTime(1e-4,e+t),c.connect(h),h.connect(f),f.connect(n),c.start(e,Math.random()),c.stop(e+t+.05)}function Zt(n,e,t,i,s,r="sine",a=.5,o=.003){let l=Pe.createOscillator();l.type=r,l.frequency.setValueAtTime(i,e),s!==i&&l.frequency.exponentialRampToValueAtTime(Math.max(20,s),e+t);let c=Pe.createGain();c.gain.setValueAtTime(1e-4,e),c.gain.exponentialRampToValueAtTime(a,e+o),c.gain.exponentialRampToValueAtTime(1e-4,e+t),l.connect(c),c.connect(n),l.start(e),l.stop(e+t+.05)}var L0={pistol:{f:2400,d:.18,b:160,v:.8},smg:{f:2e3,d:.16,b:130,v:.75},rifle:{f:1600,d:.26,b:95,v:1},sniper:{f:1200,d:.55,b:70,v:1.25},heavy:{f:1300,d:.32,b:80,v:1.05},equip:{f:4e3,d:.3,b:300,v:.6}};function ju(n,e,t,i){if(!Pe)return;let s=L0[n]||L0.rifle,r=Pe.currentTime,a=Nt(e,(t?.35:s.v)*(e?1:.6),t?12:60);if(a){if(n==="equip"){kt(a,r,.35,6e3,3e3,2,"bandpass",.002,.7),Zt(a,r,.3,90,60,"sawtooth",.4);return}if(t){kt(a,r,.09,1800,500,1,"lowpass",.001,.9),Zt(a,r,.05,300,120,"triangle",.3);return}kt(a,r,s.d,s.f*(i?.7:1),200,.9,"lowpass",.001,1),kt(a,r,.04,6e3,2500,.8,"highpass",.001,.45),Zt(a,r,s.d*.7,s.b*1.6,s.b*.5,"sine",.9),e&&kt(a,r+.05,s.d*2.5,700,150,.5,"lowpass",.02,.18)}}function Qu(n,e=1){if(!Pe)return;let t=Nt(n,.5*e,9);if(!t)return;let i=Pe.currentTime;kt(t,i,.06,900+Math.random()*400,200,1.2,"lowpass",.002,.7),Zt(t,i,.04,90,60,"sine",.25)}function D0(n){if(!Pe)return;let e=Nt(n,.6,10);if(!e)return;let t=Pe.currentTime;kt(e,t,.1,700,120,1,"lowpass",.002,.9)}function ao(n,e=2200,t=.4){if(!Pe)return;let i=Nt(n,t,8);if(!i)return;let s=Pe.currentTime;kt(i,s,.03,e,e*.5,3,"bandpass",.001,.9)}function U0(n){if(!Pe)return;let e=Pe.currentTime,t=Nt(n,.45,8);t&&(kt(t,e,.04,1500,700,3,"bandpass",.001,.8),kt(t,e+.35,.05,2600,1300,4,"bandpass",.001,.9),kt(t,e+.8,.05,1800,900,4,"bandpass",.001,.9))}function Wc(n,e){if(!Pe)return;let t=Pe.currentTime,i=Nt(null,.45);n?Zt(i,t,e?.25:.12,e?2900:1500,e?2700:900,"triangle",.5):kt(i,t,.07,900,300,1,"lowpass",.002,.6)}function F0(){if(!Pe)return;let n=Pe.currentTime,e=Nt(null,.6);kt(e,n,.12,600,150,1,"lowpass",.002,.9),Zt(e,n,.1,140,70,"sine",.6)}function O0(){if(!Pe)return;let n=Pe.currentTime,e=Nt(null,.25);Zt(e,n,.08,1300,1300,"square",.25),Zt(e,n+.07,.12,1750,1750,"square",.25)}function ef(n,e){if(!Pe)return;let t=Pe.currentTime,i=Nt(n,e?1.6:1.2,e?200:70);i&&(kt(i,t,e?2.4:1.2,1800,60,.6,"lowpass",.004,1),Zt(i,t,e?1.4:.7,80,30,"sine",1))}function B0(n){if(!Pe)return;let e=Pe.currentTime,t=Nt(n,1.1,50);t&&(kt(t,e,.4,5e3,800,.7,"lowpass",.002,1),Zt(t,e,.2,120,50,"sine",.8))}function k0(n){if(!Pe||n<.3)return;let e=Pe.currentTime,t=Nt(null,.12);Zt(t,e,n,3200,3150,"sine",.3,.02)}function tf(n){if(!Pe)return;let e=Pe.currentTime,t=Nt(n,.7,25);t&&kt(t,e,2.2,2500,500,.4,"highpass",.05,.5)}function z0(n){if(!Pe)return;let e=Pe.currentTime,t=Nt(n,.9,25);t&&(kt(t,e,1.2,1200,300,.6,"lowpass",.01,.9),kt(t,e+.05,.3,3e3,1500,2,"bandpass",.001,.5))}function H0(n){if(!Pe)return;let e=Pe.currentTime,t=Nt(n,.25,12);t&&kt(t,e,.25,900+Math.random()*500,300,1,"lowpass",.02,.6)}function V0(n){if(!Pe)return;let e=Pe.currentTime,t=Nt(n,.5,15);t&&(Zt(t,e,.06,900,500,"triangle",.4),kt(t,e,.04,2500,1200,2,"bandpass",.001,.4))}function nf(){if(!Pe)return;let n=Pe.currentTime,e=Nt(null,.4);kt(e,n,.18,400,1600,1,"bandpass",.05,.5)}function sf(n,e){if(!Pe)return;let t=Pe.currentTime,i=Nt(n,.6,40);i&&Zt(i,t,.12,e?2600:2100,e?2600:2100,"square",.2)}function rf(){if(!Pe)return;let n=Pe.currentTime,e=Nt(null,.3);Zt(e,n,.06,1400+Math.random()*600,1400,"square",.15)}function af(n){if(!Pe)return;let e=Pe.currentTime,t=Nt(n,.6,15);t&&(kt(t,e,.2,3e3,1500,3,"bandpass",.001,.8),Zt(t,e+.1,.25,600,900,"triangle",.3))}function G0(){if(!Pe)return;let n=Pe.currentTime,e=Nt(null,.35);Zt(e,n,.06,900,900,"triangle",.4),Zt(e,n+.05,.08,1350,1350,"triangle",.35)}function W0(){if(!Pe)return;let n=Pe.currentTime,e=Nt(null,.3);Zt(e,n,.15,220,180,"square",.25)}function X0(){if(!Pe)return;let n=Pe.currentTime,e=Nt(null,.35);kt(e,n,.08,2e3,900,2,"bandpass",.002,.8)}function q0(n){if(!Pe)return;let e=Pe.currentTime,t=Nt(null,.32);(n?[523,659,784,1047]:[440,415,392,330]).forEach((s,r)=>{Zt(t,e+r*.11,.5,s,s,"triangle",.35),Zt(t,e+r*.11,.5,s/2,s/2,"sawtooth",.08)})}function of(){if(!Pe)return;let n=Pe.currentTime,e=Nt(null,.25);[392,523].forEach((t,i)=>Zt(e,n+i*.12,.25,t,t,"triangle",.35))}var gn=null,lf={},s1=new $t({color:"#ffffff"});function r1(n,e,t,i){e.fillStyle="#fff",e.strokeStyle="#fff",e.lineWidth=3,e.lineJoin="round";let s=t/2,r=i/2,a=(o,l)=>{e.beginPath(),e.moveTo(o-12*l,r-16*l),e.lineTo(o-5*l,r-16*l),e.lineTo(o,r-10*l),e.lineTo(o+5*l,r-16*l),e.lineTo(o+12*l,r-16*l),e.lineTo(o+15*l,r-4*l),e.lineTo(o+13*l,r+18*l),e.lineTo(o-13*l,r+18*l),e.lineTo(o-15*l,r-4*l),e.closePath(),e.fill(),e.fillStyle="#000",e.font=`bold ${10*l}px sans-serif`,e.textAlign="center",e.fillText("100",o,r+8*l),e.fillStyle="#fff"};if(n==="vest")a(s,1);else if(n==="vesthelm")a(s+10,1),e.beginPath(),e.arc(s-14,r+6,11,Math.PI,0),e.lineTo(s-1,r+8),e.lineTo(s-27,r+8),e.closePath(),e.fill();else if(n==="defuser")e.beginPath(),e.moveTo(s-20,r+8),e.quadraticCurveTo(s,r-14,s+18,r-4),e.stroke(),e.beginPath(),e.moveTo(s-20,r-6),e.quadraticCurveTo(s,r+14,s+18,r+4),e.stroke(),e.beginPath(),e.arc(s-2,r+1,3,0,7),e.fill();else if(n==="flash"||n==="smoke"||n==="decoy"||n==="incendiary"){let o=n==="smoke"?30:24,l=n==="smoke"?13:12;if(e.beginPath(),e.roundRect(s-l/2,r-o/2+4,l,o,3),e.fill(),e.fillRect(s-3,r-o/2,6,5),e.fillRect(s+2,r-o/2+1,10,3),e.fillRect(s+9,r-o/2+1,3,12),e.fillStyle="#000",n==="smoke")for(let c=0;c<3;c++)e.fillRect(s-4,r-6+c*7,8,2);n==="decoy"&&e.fillRect(s-4,r,8,3),n==="flash"&&e.fillRect(s-l/2,r+2,l,2)}else if(n==="he"){e.beginPath(),e.ellipse(s,r+4,11,13,0,0,7),e.fill(),e.fillRect(s-3,r-12,6,6),e.fillRect(s+2,r-11,9,3),e.fillRect(s+8,r-11,3,13),e.fillStyle="#000";for(let o=-1;o<=1;o++)e.fillRect(s-10,r+4+o*6,20,1.5)}else if(n==="molotov")e.beginPath(),e.moveTo(s-3,r-16),e.lineTo(s+3,r-16),e.lineTo(s+3,r-6),e.lineTo(s+9,r),e.lineTo(s+9,r+16),e.lineTo(s-9,r+16),e.lineTo(s-9,r),e.lineTo(s-3,r-6),e.closePath(),e.fill(),e.fillRect(s-5,r-22,4,7);else if(n==="c4")e.fillRect(s-20,r-9,40,18),e.fillStyle="#000",e.fillRect(s-4,r-6,14,7);else if(n==="hs")e.beginPath(),e.arc(s,r-2,10,0,7),e.fill(),e.fillStyle="#000",e.fillRect(s-7,r-4,5,4),e.fillRect(s+2,r-4,5,4),e.fillStyle="#fff",e.fillRect(s-6,r+6,12,6);else if(n==="world"||n==="skull")e.beginPath(),e.arc(s,r-3,10,0,7),e.fill(),e.fillRect(s-6,r+4,12,7);else if(n==="fire")e.beginPath(),e.moveTo(s,r-16),e.quadraticCurveTo(s+14,r,s+8,r+14),e.lineTo(s-8,r+14),e.quadraticCurveTo(s-14,r,s,r-16),e.fill();else return!1;return!0}function Ti(n,e=160,t=56){let i=n+e+"x"+t;if(lf[i])return lf[i];let s=document.createElement("canvas");s.width=e,s.height=t;let r=s.getContext("2d");if(!r1(n,r,e,t))try{gn||(gn={r:new ks({alpha:!0,antialias:!0,preserveDrawingBuffer:!0}),s:new ai,c:new Oi(-1,1,1,-1,.01,10)},gn.c.position.set(3,0,0),gn.c.lookAt(0,0,0),gn.r.setClearColor(0,0)),gn.r.setSize(e,t);let a=Xi(n);a.computeBoundingBox();let o=a.boundingBox,l=new $e(a,s1),c=o.max.z-o.min.z,h=o.max.y-o.min.y,f=e/t,u=Math.max(c/2/f,h/2)*1.12;gn.c.left=-u*f,gn.c.right=u*f,gn.c.top=u,gn.c.bottom=-u,gn.c.updateProjectionMatrix(),l.position.set(0,-(o.max.y+o.min.y)/2,-(o.max.z+o.min.z)/2),gn.s.add(l),gn.r.render(gn.s,gn.c),gn.s.remove(l),r.drawImage(gn.r.domElement,0,0)}catch{}return lf[i]=s.toDataURL()}var Et=n=>document.getElementById(n),cf=n=>String(n).replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]),Y0=["#3b8cff","#a64bff","#ff8a2b","#ffd43b"],a1=["knife",...new Set(Nr.slice(1,4).flatMap(n=>[...n.items.T,...n.items.CT]))];function $0(n){let{G:e,store:t}=n,i={},s=t.get("ls:look",{t:-1,sk:[0,0],wf:{},pw:"ak47"});s.wf||(s.wf={}),s.pw||(s.pw="ak47");let r=w=>s.wf[w]|0,a="play",o=new ai,l=document.createElement("canvas");l.width=2,l.height=256;{let w=l.getContext("2d"),R=w.createLinearGradient(0,0,0,256);R.addColorStop(0,"#0f2a6b"),R.addColorStop(.55,"#2d63d6"),R.addColorStop(1,"#7fc4ff"),w.fillStyle=R,w.fillRect(0,0,2,256)}let c=new Ui(l);c.colorSpace=dn,o.background=c;let h=new tn(30,innerWidth/innerHeight,.1,100);o.add(new gi("#cfe2ff","#2a3a6a",1.4));let f=new xi("#fff4e0",2.6);f.position.set(2,4,3),o.add(f);let u=new xi("#7fd0ff",2.2);u.position.set(-3,2.5,-3),o.add(u);let d=new $e(new rs(.75,.85,.18,24),new Tn({color:"#1b2f66"}));d.position.y=-.09,o.add(d);let m=new $e(new Pa(.8,.025,6,40),new $t({color:"#7fe0ff"}));m.rotation.x=Math.PI/2,m.position.y=.01,o.add(m);let _=new Rt;o.add(_);for(let w=0;w<14;w++){let R=new $e(new $n(.5,30),new $t({color:"#9fd4ff",transparent:!0,opacity:.06,depthWrite:!1}));R.rotation.z=w/14*Math.PI,_.add(R)}_.position.set(0,1.2,-6);let p=new Rt;o.add(p);let g=null,M="",E=.4,y=null,v=0,b=new Rt;o.add(b);function x(){return s.t===1?"CT":"T"}function T(){let w=x(),R=s.sk[w==="T"?0:1],L=a==="locker"?s.pw:w==="T"?"ak47":"m4a4",B=w+R+L+r(L);if(B!==M&&(M=B,p.clear(),g=Hc(w,R),Vc(g,L,r(L)),p.add(g),b.clear(),a==="locker")){let z=new $e(Xi(L,r(L)),jn);z.scale.setScalar(1.8),z.rotation.y=Math.PI/2,b.add(z)}}i.render=(w,R)=>{v+=R,y||(E+=R*.25),p.rotation.y=Math.PI+Math.sin(E)*.6+.35,g&&Gc(g,{speed:0,duck:0,pitch:Math.sin(v*1.3)*.04-.05,onGround:!0,dead:0},R),_.rotation.z+=R*.05,b.position.set(-1.25,1.3+Math.sin(v*1.5)*.04,.2),b.rotation.y=Math.PI/2+Math.sin(v*.7)*.4;let L=innerWidth/innerHeight;h.aspect=L,h.fov=L<1?46:30,h.updateProjectionMatrix(),h.position.set(L<1?0:.15,1.15,5.2),h.lookAt(L<1?0:.15,.95,0),w.setClearColor("#0f2a6b"),w.clear(),w.render(o,h)},addEventListener("pointerdown",w=>{e.phase==="lobby"&&w.target.tagName==="CANVAS"&&(y={x:w.clientX,s:E})}),addEventListener("pointermove",w=>{y&&(E=y.s-(w.clientX-y.x)*.01)}),addEventListener("pointerup",()=>{y=null});function P(){t.set("ls:look",s),n.sendPref({t:s.t,sk:s.sk,f:s.wf})}i.myPref=()=>({t:s.t,sk:s.sk,f:s.wf}),i.show=()=>{Et("lobby").hidden=!1;for(let w of document.querySelectorAll("#lobby nav button"))w.onclick=()=>{a=w.dataset.tab,C()};for(let w of document.querySelectorAll("[data-pref]"))w.onclick=()=>{s.t=+w.dataset.pref,P(),C()};Et("goBtn").onclick=()=>{n.isHost()&&S()&&n.onStart()},Et("modeBtn").onclick=()=>{Et("modeSel").hidden=!1,C()},Et("modeClose").onclick=()=>{Et("modeSel").hidden=!0},A(),C()},i.hide=()=>{Et("lobby").hidden=!0,Et("modeSel").hidden=!0},i.refresh=()=>{Et("lobby").hidden||C()};function S(){let w=(n.ctx().players||[]).length;return e.cfg.bots||w>=2}function A(){let w=Et("modes");w.innerHTML="";for(let z of[2,3,5]){let U=document.createElement("div");U.className="mode",U.dataset.s=z,U.innerHTML=`<b>${z}<i>VS</i>${z}</b><small>${z===5?"Cl\xE1sico competitivo":z===3?"Escuadra":"Duelo de parejas"}</small>`,U.onclick=()=>{n.isHost()&&(e.cfg.size=z,n.pushCfg())},w.appendChild(U)}let R=Et("botsSeg");R.innerHTML="";for(let[z,U]of[[!0,"Con bots"],[!1,"Sin bots"]]){let F=document.createElement("button");F.textContent=U,F.dataset.v=z,F.onclick=()=>{n.isHost()&&(e.cfg.bots=z,n.pushCfg())},R.appendChild(F)}let L=(z,U,F)=>{z.innerHTML="";for(let[H,$]of U){let J=document.createElement("button");J.textContent=$,J.dataset.k=H,J.onclick=()=>{n.isHost()&&(e.cfg[F]=H,n.pushCfg())},z.appendChild(J)}};L(Et("len"),Object.entries(n.LENGTHS).map(([z,U])=>[z,U.name+" \xB7 a "+U.win]),"len"),L(Et("diff"),Object.entries(n.DIFF).map(([z,U])=>[z,U.name]),"diff");let B=Et("maps");B.innerHTML="";for(let z of n.MAPS){let U=document.createElement("div");U.className="mcard",U.dataset.id=z.id;let F=document.createElement("canvas");F.width=200,F.height=200,U.appendChild(F);let H=document.createElement("div");H.className="mn",H.innerHTML=z.name+"<small>"+z.sub+"</small>",U.appendChild(H),U.onclick=()=>{n.isHost()&&(e.cfg.map=z.id,t.set("ls:map",z.id),n.pushCfg())},B.appendChild(U),n.mapThumb(z.id).then($=>{if($){let J=F.getContext("2d");J.fillStyle="#0b1530",J.fillRect(0,0,200,200),J.drawImage($,0,0,200,200)}})}}function D(){let w=Et("lockerGrid");w.innerHTML="";for(let[U,F]of[["T",0],["CT",1]]){let H=document.createElement("h5");H.textContent=U==="T"?"TERRORISTAS":"CONTRATERRORISTAS",w.appendChild(H);let $=document.createElement("div");$.className="tiles",Oc[U].forEach((J,V)=>{let ee=document.createElement("div");ee.className="tile"+(s.sk[F]===V?" on":""),ee.style.setProperty("--r",Y0[V]),ee.innerHTML=`<div class="sw"><i style="background:${J.shirt}"></i><i style="background:${J.vest}"></i><i style="background:${J.hc}"></i></div><b>${cf(J.name)}</b><small>${["Com\xFAn","Rara","\xC9pica","Legendaria"][V]}</small>`,ee.onclick=()=>{s.sk[F]=V,s.t,s.t=F,P(),C()},$.appendChild(ee)}),w.appendChild($)}let R=document.createElement("h5");R.textContent="SKINS DE ARMAS \xB7 ELEG\xCD UN ARMA",w.appendChild(R);let L=document.createElement("div");L.className="wpick";for(let U of a1){let F=document.createElement("button");F.className=s.pw===U?"on":"",F.title=Ze[U].name,F.innerHTML=`<img src="${Ti(U,120,40)}"><small>${Ze[U].name}</small>${r(U)?`<i style="background:${no[r(U)].sw}"></i>`:""}`,F.onclick=()=>{s.pw=U,t.set("ls:look",s),C()},L.appendChild(F)}w.appendChild(L);let B=document.createElement("h5");B.textContent="ACABADO DE "+Ze[s.pw].name.toUpperCase(),w.appendChild(B);let z=document.createElement("div");z.className="tiles fin",no.forEach((U,F)=>{let H=document.createElement("div");H.className="tile"+(r(s.pw)===F?" on":""),H.style.setProperty("--r",Y0[Math.min(3,Math.floor(F/2))]),H.innerHTML=`<div class="sw"><i style="background:${U.sw}"></i><i style="background:${U.w||"#6b4a2a"}"></i></div><b>${cf(U.name)}</b>`,H.onclick=()=>{F?s.wf[s.pw]=F:delete s.wf[s.pw],P(),C()},z.appendChild(H)}),w.appendChild(z)}function C(){let w=n.ctx(),R=n.isHost(),L=n.myId();for(let V of document.querySelectorAll("#lobby nav button"))V.classList.toggle("on",V.dataset.tab===a);Et("tabPlay").hidden=a!=="play",Et("tabLocker").hidden=a!=="locker",a==="locker"&&D(),Et("meName").textContent=w.me.name,Et("roomInfo").textContent=w.online?`Sala ${w.roomCode||""} \xB7 ${(w.players||[]).length} jugador${(w.players||[]).length===1?"":"es"}`:"Pr\xE1ctica sin conexi\xF3n";for(let V of document.querySelectorAll("[data-pref]"))V.classList.toggle("on",+V.dataset.pref===s.t);let B=(w.players||[]).map(V=>({...V,pr:e.prefs[V.id]||{}})),z=[0,0],U={};for(let V of B){let ee=V.pr.t??-1;(ee===0||ee===1)&&(U[V.id]=ee,z[ee]++)}for(let V of B.slice().sort((ee,oe)=>ee.slot-oe.slot))if(U[V.id]===void 0){let ee=z[0]<=z[1]?0:1;U[V.id]=ee,z[ee]++}let F=e.cfg.bots?Math.max(z[0],z[1],e.cfg.size):Math.max(z[0],z[1]);Et("party").innerHTML="<h4>GRUPO</h4>"+B.map(V=>`<div class="pm ${U[V.id]?"ct":"t"} ${V.id===L?"me":""}"><i></i><span>${cf(V.name)}</span><small>${U[V.id]?"CT":"T"}${(V.pr.t??-1)===-1?" \xB7 auto":""}${V.id===w.hostId?" \xB7 \u{1F451} host":""}</small></div>`).join("")+(e.cfg.bots?`<div class="pm bot"><i></i><span>+ ${Math.max(0,F*2-B.length)} bots</span><small>${n.DIFF[e.cfg.diff].name}</small></div>`:"");let H=n.MAPS.find(V=>V.id===e.cfg.map)||n.MAPS[0];Et("modeTitle").textContent=`${F} VS ${F}`,Et("modeSub").textContent=`${H.name} \xB7 ${e.cfg.bots?"con bots":"sin bots"} \xB7 ${n.LENGTHS[e.cfg.len].name}`,n.mapThumb(H.id).then(V=>{if(!V)return;let ee=Et("modeMap"),oe=ee.getContext("2d");oe.fillStyle="#0b1530",oe.fillRect(0,0,ee.width,ee.height),oe.drawImage(V,0,0,ee.width,ee.height)}),Et("modeBtn").textContent=R?"CAMBIAR MODO":"VER MODO";let $=Et("goBtn"),J=S();$.disabled=!R||!J,$.innerHTML=R?J?"JUGAR":"FALTAN JUGADORES":"ESPERANDO AL HOST",Et("goNote").textContent=!J&&R?"Sin bots hacen falta al menos 2 jugadores en la sala.":R?"":"El host elige el modo y empieza la partida.";for(let V of document.querySelectorAll("#modes .mode"))V.classList.toggle("on",+V.dataset.s===e.cfg.size);for(let V of document.querySelectorAll("#botsSeg button"))V.classList.toggle("on",String(e.cfg.bots)===V.dataset.v);for(let V of document.querySelectorAll("#len button"))V.classList.toggle("on",V.dataset.k===e.cfg.len);for(let V of document.querySelectorAll("#diff button"))V.classList.toggle("on",V.dataset.k===e.cfg.diff);for(let V of document.querySelectorAll(".mcard"))V.classList.toggle("on",V.dataset.id===e.cfg.map);Et("modeSel").classList.toggle("ro",!R),T()}return i}var gs=n=>document.getElementById(n),xs=n=>String(n).replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]),Wn=(n,e)=>{n._v!==e&&(n._v=e,n.textContent=e)},Or=n=>Ze[n]?Ze[n].name:n==="c4"?"C4":n==="world"?"ca\xEDda":n;function hf(n){let e=n.n,t=document.createElement("canvas");t.width=e,t.height=e;let i=t.getContext("2d"),s=i.createImageData(e,e),r=s.data;for(let o=0;o<e*e;o++){let l=-1e9,c=0;for(let _=n.L-1;_>=0;_--){let p=n.top[_][o];if(!isNaN(p)&&n.cls[_][o]!==3&&n.cls[_][o]!==4){(_===n.L-1||l<-1e8)&&(l=p,c=n.cls[_][o]);break}}let h=0,f=0,u=0,d=0;if(l>-1e8){let _=Math.max(0,Math.min(1,l/6.5));h=70+_*120,f=78+_*110,u=88+_*70,d=235,c===2&&(h*=.62,f*=.62,u*=.62)}else{let _=!1;for(let p=0;p<n.L;p++)n.cls[p][o]===3&&(_=!0);_&&(h=f=u=22,d=230)}n.flags[o]&12&&d&&(h=h*.6+120,f=f*.6+40,u*=.6),r[o*4]=h,r[o*4+1]=f,r[o*4+2]=u,r[o*4+3]=d}i.putImageData(s,0,0);let a=n.info.zones;i.font="bold 34px Rajdhani, sans-serif",i.textAlign="center",i.textBaseline="middle";for(let o of["A","B"]){let l=a[o];l&&(i.fillStyle="#000",i.fillText(o,(l[0]+l[2])/2+1,(l[1]+l[3])/2+1),i.fillStyle="#ffd25a",i.fillText(o,(l[0]+l[2])/2,(l[1]+l[3])/2))}return t}function Z0(n,e,t,i,s,r,a){let o=n.getContext("2d"),l=n.width,c=1.25;o.clearRect(0,0,l,l),o.save(),o.beginPath(),o.rect(0,0,l,l),o.clip(),o.translate(l/2,l/2),o.rotate(i.yaw),o.scale(c,c);let h=i.x/t.cell,f=i.z/t.cell;o.drawImage(e,-h,-f);let u=(d,m,_,p=3.4)=>{o.fillStyle=_,o.beginPath(),o.arc(d/t.cell-h,m/t.cell-f,p/c,0,7),o.fill(),o.strokeStyle="#000",o.lineWidth=1/c,o.stroke()};if(r&&(r.s==="planted"||r.s==="dropped")&&(a==="T"||r.s==="planted"&&r.seen)){o.fillStyle=r.s==="planted"?"#ff4038":"#ffb03a";let d=r.x/t.cell-h,m=r.z/t.cell-f;o.fillRect(d-4/c,m-3/c,8/c,6/c)}for(let d of s)u(d.x,d.z,d.col,d.me?0:3.4);o.restore(),o.fillStyle="#fff",o.beginPath(),o.moveTo(l/2,l/2-7),o.lineTo(l/2+5,l/2+5),o.lineTo(l/2,l/2+2),o.lineTo(l/2-5,l/2+5),o.closePath(),o.fill()}var We={el:{},init(){for(let n of["hud","moneyV","moneyAdd","scT","scCT","pipsT","pipsCT","clock","clockV","bombIco","feed","hpV","arV","helmV","hpB","arB","ammo","wname","magV","resV","slots","xhair","hitmark","centerMsg","prog","progL","progB","hint","dmgDir","scope","flash","hurt","spec","banner","ban1","ban2","buyHint","zoneName","board"])this.el[n]=gs(n)},money(n){Wn(this.el.moneyV,String(n))},moneyDelta(n,e){if(!n)return;let t=document.createElement("div");t.className=n<0?"neg":"",t.textContent=(n>0?"+$":"-$")+Math.abs(n)+(e?"  "+e:""),this.el.moneyAdd.appendChild(t),setTimeout(()=>t.remove(),2300)},vitals(n,e,t){Wn(this.el.hpV,String(n)),Wn(this.el.arV,String(e)),this.el.helmV.hidden=!t,this.el.hpV.parentElement.classList.toggle("low",n<=25),this.el.hpB.style.width=n+"%",this.el.arB.style.width=e+"%"},ammo(n,e,t,i){Wn(this.el.wname,n),this.el.ammo.querySelector(".nums").style.visibility=i?"":"hidden",Wn(this.el.magV,String(e)),Wn(this.el.resV,String(t)),this.el.ammo.classList.toggle("low",i&&e<=5)},clock(n,e,t){let i=Math.max(0,Math.ceil(n));Wn(this.el.clockV,t?"":Math.floor(i/60)+":"+String(i%60).padStart(2,"0")),this.el.clock.classList.toggle("red",e),this.el.bombIco.hidden=!t},score(n,e,t,i){Wn(this.el.scT,String(n)),Wn(this.el.scCT,String(e));let s=(r,a)=>{let o=a.map(l=>l.n+l.a).join();r._k!==o&&(r._k=o,r.innerHTML=a.map(l=>`<i class="${l.a?"":"dead"}" title="${xs(l.n)}">${xs(l.n.slice(0,1).toUpperCase())}</i>`).join(""))};s(this.el.pipsT,t),s(this.el.pipsCT,i)},feed(n,e,t,i,s,r){let a=document.createElement("div");r&&(a.className="mine");let o=t==="world"?Ti("skull",60,40):t==="molotov"||t==="incendiary"?Ti("fire",60,40):Ti(t,120,40);for(a.innerHTML=(n?`<span class="${n.team}">${xs(n.name)}</span>`:"")+`<img src="${o}">`+(s?'<span class="w">\u27C2</span>':"")+(i?`<img class="hs" src="${Ti("hs",40,40)}">`:"")+`<span class="${e.team}">${xs(e.name)}</span>`,this.el.feed.appendChild(a);this.el.feed.children.length>6;)this.el.feed.firstChild.remove();setTimeout(()=>a.remove(),7e3)},slots(n,e,t=[],i=0){let s=n.map(a=>a.key+a.id).join()+e+"|"+t.join()+i;if(this.el.slots._k===s)return;this.el.slots._k=s;let r=n.map(a=>`<div class="sl ${a.slot===e?"on":""}"><img src="${Ti(a.id,a.id==="knife"?110:150,44)}"><b>${a.key}</b></div>`).join("");t.length&&(r+=`<div class="sl ${e==="g"?"on":""}"><div class="nades">${t.map((a,o)=>`<img class="${e==="g"&&o===i?"on":""}" src="${Ti(a,44,52)}">`).join("")}</div><b>4</b></div>`),this.el.slots.innerHTML=r},showSlots(){this.el.slots.style.opacity=1,clearTimeout(this._st),this._st=setTimeout(()=>this.el.slots.style.opacity=.35,1800)},crosshair(n,e,t){let i=Math.round(n),s=this.el.xhair;if(s._g===i+""+e)return;s._g=i+""+e,s.style.display=e?"":"none";let[r,a,o,l]=s.children;r.style.left=-(i+8)+"px",a.style.left=i+"px",o.style.top=-(i+8)+"px",l.style.top=i+"px"},hit(n){let e=this.el.hitmark;e.classList.remove("on"),e.offsetWidth,e.classList.add("on"),e.style.filter=n?"drop-shadow(0 0 2px red) sepia(1) saturate(8) hue-rotate(-30deg)":""},center(n,e=2200){let t=this.el.centerMsg;t.textContent=n,t.style.opacity=1,clearTimeout(this._ct),e&&(this._ct=setTimeout(()=>t.style.opacity=0,e))},progress(n,e){if(e==null){this.el.prog.hidden=!0;return}this.el.prog.hidden=!1,Wn(this.el.progL,n),this.el.progB.style.width=(e*100).toFixed(1)+"%"},hint(n){Wn(this.el.hint,n||"")},dmgDir(n){let e=document.createElement("i");e.style.transform=`rotate(${n}rad) translateY(-140px)`,this.el.dmgDir.appendChild(e),setTimeout(()=>e.remove(),1500)},banner(n,e,t){let i=this.el.banner;if(!e){i.hidden=!0;return}i.className=n||"",i.hidden=!1,Wn(this.el.ban1,e),Wn(this.el.ban2,t||"")}};function K0(n,e){let t=[...n.players.values()],i=o=>`<tr class="${o.team} ${o.alive?"":"dead"} ${o.id===e?"me":""}"><td>${xs(o.name)}${o.inv&&o.inv.c4&&n.players.get(e)?.team==="T"?" \u{1F4A3}":""}</td><td>$${o.money}</td><td>${o.k}</td><td>${o.d}</td><td>${o.a}</td><td>${o.mvp?"\u2605"+o.mvp:""}</td><td>${o.ping||""}</td></tr>`,s=o=>{let l=t.filter(c=>c.team===o).sort((c,h)=>h.k-c.k||c.d-h.d);return`<div class="tt ${o}">${o==="T"?"TERRORISTAS":"CONTRATERRORISTAS"}</div><table><tr><th>Jugador</th><th>Plata</th><th>K</th><th>D</th><th>A</th><th>MVP</th><th></th></tr>${l.map(i).join("")}</table>`},r=n.score[n.half===0?0:1],a=n.score[n.half===0?1:0];return`<div class="bh"><span>${xs(n.mapName)} \xB7 Ronda ${n.round}</span><span><b style="color:var(--t)">${r}</b> \u2013 <b style="color:var(--ct)">${a}</b></span></div>${s("T")}${s("CT")}`}function J0(n,e,t,i){let s=gs("buyCols");s.innerHTML="",Nr.forEach((r,a)=>{let o=document.createElement("div");o.className="bcol",o.dataset.c=a,o.innerHTML=`<h5><b>${a+1}</b>${r.name}</h5>`,r.items[n].forEach((l,c)=>{let h=Ze[l],f=document.createElement("div");f.className="bit",f.dataset.id=l,f.innerHTML=`<span class="k">${c+1}</span><span class="n">${xs(h.name)}</span><img src="${Ti(l,200,64)}"><span class="p">$${h.price}</span>`,f.onclick=()=>t(l),f.onmouseenter=()=>i(l),f.onmouseleave=()=>i(null),o.appendChild(f)}),s.appendChild(o)})}function Xc(n,e){gs("buyMoney").textContent=n.money;for(let t of document.querySelectorAll("#buyCols .bit")){let i=t.dataset.id,r=Ze[i].price;i==="vesthelm"&&n.ar>=100&&!n.helm&&(r=350),t.querySelector(".p").textContent="$"+r;let a=n.inv.p===i||n.inv.s===i||i==="vest"&&n.ar>=100||i==="vesthelm"&&n.ar>=100&&n.helm||i==="defuser"&&n.inv.kit||i==="zeus"&&n.inv.zeus||n.inv.g.includes(i);t.classList.toggle("own",a),t.classList.toggle("no",n.money<r),t.classList.toggle("ok",n.money>=r&&!a)}for(let t of document.querySelectorAll("#buyCols .bcol"))t.classList.toggle("sel",+t.dataset.c===e)}function uf(n){let e=gs("buyInfo");if(!n){e.hidden=!0;return}let t=Ze[n];if(t)if(e.hidden=!1,gs("biName").textContent=t.name,gs("biList").innerHTML=(f0[n]||[]).map(i=>`<li>${xs(i)}</li>`).join("")+(t.reward?`<li>Premio por baja: $${t.reward}</li>`:""),t.dmg&&t.cat!=="knife"){let i=(s,r)=>`<i style="width:${Math.min(100,s/r*100).toFixed(0)}%"></i>`;gs("biStats").innerHTML=`<span>Da\xF1o</span>${i(t.dmg*t.pellets,120)}<span>Cadencia</span>${i(t.rpm,900)}<span>Blindaje</span>${i(t.ap*100,100)}<span>Movilidad</span>${i(t.speed,250)}<span>Cargador</span><span>${t.mag} / ${t.reserve}</span>`}else gs("biStats").innerHTML=""}var Zc=n=>(n.team==="T"?n.skT:n.skCT)|0,j0=.0254,Q0=Math.PI/180,un=n=>document.getElementById(n),Mf=[{id:"dust2",name:"Dust II",sub:"Desierto \xB7 cl\xE1sico"},{id:"mirage",name:"Mirage",sub:"Pueblo marroqu\xED"},{id:"vertigo",name:"Vertigo",sub:"Rascacielos en obra"}],po={get(n,e){try{let t=localStorage.getItem(n);return t?JSON.parse(t):e}catch{return e}},set(n,e){try{localStorage.setItem(n,JSON.stringify(e))}catch{}}},X={players:new Map,drops:new Map,nades:[],bomb:{state:"none",x:0,y:0,z:0,t:0},phase:"lobby",timeLeft:0,round:0,score:[0,0],half:0,time:0,cfg:{map:po.get("ls:map","dust2"),len:"corta",size:5,bots:!0,diff:"normal"},prefs:{}},zt=null,st="local",It=null,Kt=null,Kc={},Af=!1,qt,yn,en,lo,Hr,xn,Dt,qc=null,bf=null,bt=()=>!zt||zt.isHost||!zt.online;function Un(n,e,t){zt&&zt.online&&Arcade.send(n,e,t)}X.emit=(n,e)=>{Un(n,e),Uf(n,e,st)};X.emitTo=(n,e,t)=>{let i=X.players.get(n);n===st?Uf(e,t,st):i&&!i.bot&&Un(e,t,{to:n})};X.end=(n,e)=>{zt&&zt.online?Arcade.end({winners:n,text:e}):setTimeout(k1,500)};X.solidAt=(n,e,t)=>bc(X.W,n,e,t);X.floorAt=(n,e,t)=>{let i=ps(X.W,n,e,t);return i>-1e8?i:t-.5};var Jc=new Map;X.setPlanting=(n,e)=>{e>0?Jc.set(n,e):Jc.delete(n)};X.planting=n=>Jc.get(n)||0;X.fallDamage=(n,e)=>{let t=Du(e);t>0&&It&&It.damage(n.id,n.id,t,"leg","world",{raw:!0})};function Ht(n,e){bt()?It&&It.handle(n,e,st,{admin:Arcade.admin&&Arcade.admin.active}):Un(n,e,{to:zt.hostId})}var o1=["hit","buy","drop","take","nade","plant","defst","defx","defok","adm","fall"],O={pl:null,slot:"s",throwT:0,throwPow:1,drawT:0,fireT:0,reloadT:0,shots:0,pp:0,py:0,scope:0,ammo:{p:[0,0],s:[0,0]},ammoW:{p:null,s:null},invV:-1,gsel:0,plantT:0,defT:0,defusing:!1,trig:!1,trig2:!1,nadeHold:0,nadeCd:0,stepT:0,deadT:0,spec:null,blind:0,blindMax:0,shake:0,bob:0,kick:0,lastSlot:"k",zeus:!1,sway:[0,0],swayT:[0,0],pickCd:0,voidSent:!1,lastMoney:null,rescope:0,knife2:!1},Ut=()=>X.players.get(st),Yt=new Set,An=!1,Ws=!1,Vr=!1,kr=po.get("ls:sens",.0021),hn={mx:0,mz:0,fire:!1,look:null},Zi=matchMedia("(pointer: coarse)").matches,om=po.get("ls:q",Zi?0:2);addEventListener("keydown",n=>{if(n.repeat&&!["KeyW","KeyA","KeyS","KeyD"].includes(n.code)){n.code==="Tab"&&n.preventDefault();return}if(X.phase!=="lobby"){if(Yt.add(n.code),["Tab","Space","ControlLeft","ControlRight","AltLeft","KeyB"].includes(n.code)&&n.preventDefault(),Fn){T1(n);return}Cf(n.code)}});addEventListener("beforeunload",n=>{if(X.phase!=="lobby")return n.preventDefault(),n.returnValue="",""});function lm(){let n=document.documentElement;try{let e=n.requestFullscreen?n.requestFullscreen({navigationUI:"hide"}):null,t=()=>{try{navigator.keyboard&&navigator.keyboard.lock&&navigator.keyboard.lock().catch(()=>{})}catch{}};e&&e.then?e.then(t).catch(()=>{}):t()}catch{}}addEventListener("keydown",n=>{(n.ctrlKey||n.metaKey)&&["KeyW","KeyS","KeyD","KeyA","KeyR","KeyQ","KeyE","KeyG","KeyB","KeyF"].includes(n.code)&&X.phase!=="lobby"&&n.preventDefault()},!0);addEventListener("keyup",n=>{Yt.delete(n.code),n.code==="KeyE"&&O.defusing&&eh()});addEventListener("blur",()=>{Yt.clear(),An=Ws=!1});addEventListener("mousedown",n=>{if(ro(),!(X.phase==="lobby"||Fn)){if(!Vr&&!Zi){document.fullscreenElement||lm(),uo();return}n.button===0&&(An=!0),n.button===2&&(Ws=!0,Lf())}});addEventListener("mouseup",n=>{n.button===0&&(An=!1),n.button===2&&(Ws=!1)});addEventListener("contextmenu",n=>n.preventDefault());addEventListener("mousemove",n=>{if(!Vr||!O.pl||X.phase==="lobby")return;let e=O.scope?h1():1;Rf(n.movementX*kr/e,n.movementY*kr/e)});addEventListener("wheel",n=>{Vr&&X.phase!=="lobby"&&!Fn&&cm(n.deltaY>0?1:-1)},{passive:!0});function Rf(n,e){let t=O.pl;t&&(t.yaw-=n,t.pitch=Math.max(-1.5,Math.min(1.5,t.pitch-e)),O.swayT[0]+=n*4,O.swayT[1]+=e*4)}function uo(){let n=qt.domElement;try{let e=n.requestPointerLock&&n.requestPointerLock();e&&e.catch&&e.catch(()=>{})}catch{}}document.addEventListener("pointerlockchange",()=>{Vr=document.pointerLockElement===qt.domElement,Qc()});function Qc(){un("clickPlay").hidden=Vr||Zi||X.phase==="lobby"||Fn||!Af}function Cf(n){let e=Ut();if(e){if(n==="KeyB"){th();return}if(n!=="Tab"){if(n==="BracketLeft"||n==="BracketRight"){kr=Math.max(4e-4,Math.min(.01,kr*(n==="BracketLeft"?.9:1.1))),po.set("ls:sens",kr),We.center("Sensibilidad "+(kr*1e3).toFixed(2),1200);return}if(!e.alive){n==="Space"&&Ff(1);return}if(n==="Digit1")Dn("p");else if(n==="Digit2")Dn("s");else if(n==="Digit3")O.slot==="k"&&e.inv.zeus?Dn("z"):(O.slot,Dn("k"));else if(n==="Digit4"){let t=e.inv.g;t.length&&(O.slot==="g"&&(O.gsel=(O.gsel+1)%t.length),Dn("g",!0))}else n==="Digit5"?Dn("c4"):n==="KeyQ"?Dn(O.lastSlot):n==="KeyR"?hm():n==="KeyG"?u1():n==="KeyE"?um():n==="KeyF"&&(O.inspect=1.6)}}}function l1(){if(!Zi)return;un("touch").hidden=!1;let n=un("stick"),e=n.firstElementChild,t=null,i=null;n.addEventListener("touchstart",r=>{t=r.changedTouches[0].identifier;let o=n.getBoundingClientRect();i=[o.left+o.width/2,o.top+o.height/2],r.preventDefault()},{passive:!1}),addEventListener("touchmove",r=>{for(let a of r.changedTouches)if(a.identifier===t){let o=(a.clientX-i[0])/55,l=(a.clientY-i[1])/55,c=Math.hypot(o,l);c>1&&(o/=c,l/=c),hn.mx=o,hn.mz=l,e.style.transform=`translate(${o*40}px,${l*40}px)`}else hn.look&&a.identifier===hn.look.id&&(Rf((a.clientX-hn.look.x)*.006,(a.clientY-hn.look.y)*.006),hn.look.x=a.clientX,hn.look.y=a.clientY)},{passive:!0}),addEventListener("touchend",r=>{for(let a of r.changedTouches)a.identifier===t&&(t=null,hn.mx=hn.mz=0,e.style.transform=""),hn.look&&a.identifier===hn.look.id&&(hn.look=null)}),qt.domElement.addEventListener("touchstart",r=>{let a=r.changedTouches[0];a.clientX>innerWidth*.35&&(hn.look={id:a.identifier,x:a.clientX,y:a.clientY}),ro()},{passive:!0});let s=(r,a,o)=>{let l=un(r);l.addEventListener("touchstart",c=>{c.preventDefault(),a()},{passive:!1}),l.addEventListener("touchend",c=>{c.preventDefault(),o&&o()},{passive:!1})};s("tFire",()=>An=!0,()=>An=!1),s("tJump",()=>Yt.add("Space"),()=>Yt.delete("Space")),s("tDuck",()=>Yt.add("KeyC"),()=>Yt.delete("KeyC")),s("tReload",()=>Cf("KeyR")),s("tSwitch",()=>cm(1)),s("tBuy",()=>th()),s("tUse",()=>{Yt.add("KeyE"),um()},()=>{Yt.delete("KeyE"),O.defusing&&eh()}),s("tScope",()=>Lf())}function vs(n,e=Ut()){if(!e)return null;let t=e.inv;return n==="p"?t.p:n==="s"?t.s:n==="k"?"knife":n==="z"?t.zeus?"zeus":null:n==="g"?t.g.length?t.g[Math.min(O.gsel,t.g.length-1)]:null:n==="c4"&&t.c4?"c4":null}var Xn=()=>vs(O.slot)||"knife";function Dn(n,e){vs(n)&&(n===O.slot&&!e||(n!==O.slot&&(O.lastSlot=O.slot),O.slot=n,O.drawT=n==="k"?.35:.6,O.reloadT=0,O.scope=0,O.plantT=0,O.nadeHold=0,O.defusing&&eh(),ao(null,1400,.25),We.showSlots()))}function cm(n){let e=["p","s","k","z","g","c4"].filter(i=>vs(i));if(!e.length)return;let t=e.indexOf(O.slot);Dn(e[(t+n+e.length)%e.length])}function Pf(){return vs("p")?"p":vs("s")?"s":"k"}function If(){let n=Ut();if(!(!n||n.inv.v===O.invV)){O.invV=n.inv.v;for(let e of["p","s"]){let t=n.inv[e];if(t!==O.ammoW[e]){let i=O.ammoW[e];O.ammoW[e]=t;let s=Ze[t];O.ammo[e]=t?n.inv[e+"a"]?[...n.inv[e+"a"]]:[s.mag,s.reserve]:[0,0],t&&e==="p"&&n.alive&&X.phase!=="post"&&i!==t&&Dn("p",!0)}}vs(O.slot)||Dn(Pf(),!0)}}function hm(){let n=O.slot;if(n!=="p"&&n!=="s")return;let e=Ze[Xn()],t=O.ammo[n];!e.mag||t[0]>=e.mag||t[1]<=0||O.reloadT>0||O.drawT>0||(O.reloadT=e.reload,O.scope=0,U0(null))}function c1(){let n=O.slot,e=Ze[Xn()],t=O.ammo[n];if(!t||!e.mag)return;let i=e.mag-t[0],s=$i("ls.ammo")?i:Math.min(i,t[1]);t[0]+=s,$i("ls.ammo")||(t[1]-=s)}var h1=()=>{let n=Ze[Xn()];return n&&n.scope?n.scope[Math.max(0,O.scope-1)]:1};function Lf(){let n=Ut();if(!n||!n.alive)return;let e=Xn(),t=Ze[e];if(t&&t.scope&&O.reloadT<=0&&O.drawT<=0){O.scope=(O.scope+1)%(t.scope.length+1),ao(null,3e3,.2);return}e==="knife"&&O.fireT<=0&&O.drawT<=0&&pm(!0),t&&t.cat==="grenade"&&!An&&O.throwT<=0&&(O.nadeHold=.3)}function u1(){let n=Ut(),e=O.slot;if(!n.alive)return;let t=O.pl;e==="p"||e==="s"?Ht("drop",{s:e,x:t.x,y:t.y,z:t.z,yaw:t.yaw,ammo:O.ammo[e]}):e==="c4"&&Ht("drop",{s:"c4",x:t.x,y:t.y,z:t.z,yaw:t.yaw})}function um(){let n=Ut();if(!n||!n.alive||!O.pl)return;let e=O.pl,t=X.bomb;if(n.team==="CT"&&t.state==="planted"&&Math.hypot(e.x-t.x,e.z-t.z)<1.7&&Math.abs(e.y-t.y)<1.6&&e.onGround){O.defusing||(O.defusing=!0,O.defT=0,Ht("defst",{}),af(null));return}let i=fm();i&&Ht("take",{id:i.id,swap:!0,ammo:O.ammo[Vs(i.w)===1?"p":"s"]})}function eh(){O.defusing=!1,O.defT=0,Ht("defx",{})}function fm(){let n=O.pl,e=null,t=1e9,i=-Math.sin(n.yaw),s=-Math.cos(n.yaw);for(let r of X.drops.values()){let a=r.x-n.x,o=r.z-n.z,l=Math.hypot(a,o);if(l>2.2||Math.abs(r.y-n.y)>1.5)continue;let c=(a*i+o*s)/Math.max(.01,l);l>.8&&c<.75||l<t&&(t=l,e=r)}return e}var ff=[];function Nf(){ff.length=0;for(let n of X.players.values()){if(!n.alive)continue;let e=nt.hStand+(nt.hCrouch-nt.hStand)*(n.duck||0);ff.push({id:n.id,x:n.x,y:n.y,z:n.z,h:e,alive:!0})}return ff}var co=new W;function f1(n){if(n.id===st&&!O.spec)return xn&&xn.userData.gun.getWorldPosition(co),null;let e=-Math.sin(n.yaw)*Math.cos(n.pitch),t=Math.sin(n.pitch),i=-Math.cos(n.yaw)*Math.cos(n.pitch);return[n.x+e*.75+Math.cos(n.yaw)*.12,n.y+En(n)-.18+t*.6,n.z+i*.75-Math.sin(n.yaw)*.12]}var d1=0;X.fireBullets=(n,e,t,i,s)=>{let r=s||Ze[e],a=X.players.get(n),o=Nf(),l=[],c=[],h=new Map,f=!1;for(let d=0;d<r.pellets;d++){let m=i(Math.random),_=Cc(X.W,X.nades,n,t[0],t[1],t[2],m[0],m[1],m[2],r,o);l.push(_.end.map(p=>+p.toFixed(2)));for(let p of _.impacts)c.push(p.map(g=>+g.toFixed(2)));if(_.hit){let p=h.get(_.hit.id)||{d:0,part:"leg",pos:_.hit.pos,wb:_.wb};p.d+=_.hit.dmg,em(_.hit.part)>em(p.part)&&(p.part=_.hit.part),h.set(_.hit.id,p),_.wb&&(f=!0)}}let u=[...h.entries()].map(([d,m])=>[d,m.pos.map(_=>+_.toFixed(2)),m.part==="head"?1:0]);dm(n,e,t,l,c,u,r),Un("sh",{i:n,w:e,o:t.map(d=>+d.toFixed(2)),e:l,m:c.slice(0,8),h:u});for(let[d,m]of h){let _={t:d,w:e,part:m.part,d:+m.d.toFixed(1),wb:m.wb};n===st?Ht("hit",_):bt()&&It&&It.handle("hit",_,n)}bt()&&Kt&&a&&Kt.heard(t[0],t[1],t[2],a.team,!r.silent)};var em=n=>n==="head"?3:n==="chest"?2:n==="stomach"?1:0;function dm(n,e,t,i,s,r,a){a=a||Ze[e];let o=X.players.get(n),l=n===st&&!O.spec,c=O.spec===n,h=l||c?null:f1(o||{yaw:0,pitch:0,x:t[0],y:t[1]-1.6,z:t[2]}),f=l||c?[co.x,co.y,co.z]:h;if(a.cat!=="knife"){for(let u of i)(a.pellets>1?Math.random()<.35:d1++%(a.cat==="pistol"?1:2)===0)&&Dt.tracer(f,u);if(!a.silent&&a.cat!=="equip"&&Dt.flashLight(f,a.cat==="sniper"?1.5:1),o&&o.model&&(o.flashT=.05),(l||c)&&(O.flashT=.05),f&&a.cat!=="equip"){Dt.muzzleSmoke(f);let u=o?o.id===st&&O.pl?O.pl.yaw:o.yaw||0:0;e==="nova"||e==="sawedoff"||e==="mag7"||e==="awp"||e==="ssg08"||e==="r8"||Dt.shell([f[0]+Math.sin(u)*.25,f[1]-.05,f[2]+Math.cos(u)*.25],Math.cos(u),-Math.sin(u),a.pellets>1)}}for(let u of s)Dt.impact([u[0],u[1],u[2]],[u[3],u[4],u[5]],Tc(X.cfg.map).floor?"#b8a07a":"#999");for(let u of r){let d=[u[1][0]-t[0],u[1][1]-t[1],u[1][2]-t[2]],m=Math.hypot(...d)||1,_=d.map(g=>g/m);Dt.blood(u[1],_,u[2]);let p=Vi(X.W,u[1][0],u[1][1],u[1][2],_[0],_[1]-.3,_[2],2.5);p&&Dt.decalC([u[1][0]+_[0]*p.t,u[1][1]+(_[1]-.3)*p.t,u[1][2]+_[2]*p.t],[p.nx,p.ny,p.nz],"#6e0b0e",.35+(u[2]?.2:0))}a.cat!=="knife"&&ju(a.cat,l?null:t,!!a.silent,e==="deagle"||e==="r8")}function p1(){let n=Ut(),e=O.pl,t=Xn(),i=Ze[t];if(!i||O.drawT>0||O.reloadT>0||O.fireT>0||X.phase==="freeze"||X.phase==="over")return;if(i.cat==="knife"){(!O.trig||i.auto)&&pm(!1);return}if(!i.auto&&O.trig)return;let s=O.slot==="z"?null:O.slot;if(s&&O.ammo[s][0]<=0){O.trig||(ao(null,2600,.35),O.trig=!0),hm();return}O.trig=!0,$i("ls.aim")&&m1();let r={speed:Math.hypot(e.vx,e.vz),onGround:e.onGround,duck:e.duck,scoped:O.scope>0,shots:O.shots},a=$i("ls.norecoil")?i.spread*.2:Ka(i,r),o=[e.x,e.y+En(e),e.z],l=$i("ls.norecoil")?0:O.pp,c=$i("ls.norecoil")?0:O.py;X.fireBullets(st,t,o,u=>Dr(e.yaw,e.pitch,l,c,a,u));let[h,f]=Rc(i,O.shots,Math.random);O.pp=Math.min(i.kickCap||12,O.pp+h),O.py+=f,O.shots++,O.kick=Math.min(1,O.kick+(i.cat==="sniper"?1:i.cat==="pistol"?.6:.4)),O.fireT=60/i.rpm,s&&!$i("ls.ammo")&&O.ammo[s][0]--,t==="zeus"&&Ht("drop",{s:"zeus"}),(t==="awp"||t==="ssg08")&&O.scope&&(O.rescope=O.scope,O.scope=0)}function pm(n){let e=O.pl,t=Ze.knife,i=[e.x,e.y+En(e),e.z],s={...t,dmg:n?65:40,range:72,rangeMod:1,pellets:1},r=Dr(e.yaw,e.pitch,0,0,0,Math.random),a=Cc(X.W,X.nades,st,i[0],i[1],i[2],r[0],r[1],r[2],s,Nf());if(a.hit){let o=X.players.get(a.hit.id);o&&Math.cos(Df(o.yaw,e.yaw))>.5&&(a.hit.dmg=n?180:90)}if(a.hit)Ht("hit",{t:a.hit.id,w:"knife",part:"chest",d:a.hit.dmg}),Dt.blood(a.hit.pos,r,!1),Wc(!1);else if(a.impacts.length){let o=a.impacts[0];Dt.impact([o[0],o[1],o[2]],[o[3],o[4],o[5]]),ao(o,1800,.5)}else nf();O.fireT=n?1:.45,O.kick=1,O.knife2=n,Un("sh",{i:st,w:"knife",o:i,e:[a.end],m:[],h:a.hit?[[a.hit.id,a.hit.pos,0]]:[]})}var Df=(n,e)=>{let t=n-e;for(;t>Math.PI;)t-=Math.PI*2;for(;t<-Math.PI;)t+=Math.PI*2;return t};function m1(){let n=Ut(),e=O.pl,t=[e.x,e.y+En(e),e.z],i=null,s=.35;for(let r of X.players.values()){if(!r.alive||r.team===n.team)continue;let a=r.y+(nt.hStand+(nt.hCrouch-nt.hStand)*(r.duck||0))-.12,o=r.x-t[0],l=a-t[1],c=r.z-t[2],h=Math.atan2(-o,-c),f=Math.atan2(l,Math.hypot(o,c)),u=Math.hypot(Df(h,e.yaw),f-e.pitch);u<s&&Ja(X.W,X.nades,t,[r.x,r.y,r.z,1])&&(s=u,i=[h,f])}i&&(e.yaw=i[0],e.pitch=i[1])}function g1(n){let e=Ut(),t=O.pl,i=Xn();if(!Ze[i]||Ze[i].cat!=="grenade"||O.nadeCd>0)return;let s=[t.x,t.y+En(t),t.z],r={i:st,ty:i,tm:e.team,o:s.map(o=>+o.toFixed(3)),yaw:+t.yaw.toFixed(4),pitch:+t.pitch.toFixed(4),v:[+t.vx.toFixed(3),+t.vz.toFixed(3)],pw:n};mm(r),Un("nd",r),Ht("nade",{type:i}),O.nadeCd=.6,nf();let a=e.inv.g.indexOf(i);a>=0&&(e.inv.g=e.inv.g.slice(),e.inv.g.splice(a,1)),setTimeout(()=>{O.throwT=0,vs("g")?Dn("g",!0):Dn(Pf(),!0)},380)}var fo=new Map;function mm(n){let e=d0(n.ty,n.i,n.tm,n.o[0],n.o[1],n.o[2],n.yaw,n.pitch,n.v[0],n.v[1],n.pw);e.key=Math.random(),X.nades.push(e);let t=Fr(n.ty);t.scale.setScalar(1.6),yn.add(t),fo.set(e,t)}var df=[];function x1(n){df.length=0;for(let e of X.nades)p0(X.W,e,n,df);for(let e of df)y1(e);for(let e=X.nades.length-1;e>=0;e--){let t=X.nades[e],i=fo.get(t);if(t.state==="fly"&&!t.rest&&Math.random()<.5&&Dt.particle(t.x,t.y,t.z,0,.1,0,.03,.4,"#cfcac0",-.1,.1),i&&(t.state==="fly"||t.type==="smoke"||t.type==="decoy"?(i.position.set(t.x,t.y,t.z),i.rotation.x+=n*(t.rest?0:9),i.visible=t.state!=="done"):i.visible=!1),t.type==="decoy"&&t.state==="active"&&(t.dc=(t.dc||0)-n,t.dc<=0)){t.dc=.25+Math.random()*1.2;let s=1+Math.floor(Math.random()*3);for(let r=0;r<s;r++)setTimeout(()=>ju("rifle",[t.x,t.y,t.z]),r*110);bt()&&Kt&&Kt.heard(t.x,t.y,t.z,t.team,!0)}(t.type==="molotov"||t.type==="incendiary")&&t.state==="active"&&!t.air&&(t.ft=(t.ft||0)-n,t.ft<=0&&(t.ft=.6,H0([t.x,t.y,t.z]))),t.state==="done"&&(X.nades.splice(e,1),i&&(yn.remove(i),fo.delete(t)))}}function y1(n){let e=n.g,t=[e.x,e.y,e.z];if(n.type==="bounce"){V0(t);return}if(n.type==="det")if(e.type==="he"){Dt.explosion(t,!1),ef(t,!1);let i=ps(X.W,e.x,e.z,e.y+.5);i>-1e8&&e.y-i<1.5&&Dt.decalC([e.x,i,e.z],[0,1,0],"#1d1a17",2.6),xm(t,12,.5),bt()&&It&&It.heBlast(e,(s,r)=>{let a=Math.hypot(r.x-s.x,r.y+1-s.y,r.z-s.z),o=Vi(X.W,s.x,s.y+.15,s.z,(r.x-s.x)/a,(r.y+1-s.y-.15)/a,(r.z-s.z)/a,a);return!o||o.t>=a-.2})}else if(e.type==="flash"){if(Dt.flashPop(t),B0(t),_1(e),bt()&&Kt){for(let i of X.players.values())if(i.bot&&i.alive){let s=gm(e,i.x,i.y+En(i),i.z,i.yaw,i.pitch);s>0&&Kt.flash(i,s)}}}else if(e.type==="smoke"){Dt.smoke(e,X.W),tf(t);for(let i of X.nades)(i.type==="molotov"||i.type==="incendiary")&&i.state==="active"&&Math.hypot(i.x-e.x,i.z-e.z)<Pt.smokeR+1&&(i.life=Math.min(i.life,.3))}else if(e.type==="molotov"||e.type==="incendiary"){if(e.air){Dt.explosion(t,!1);return}if(X.nades.some(s=>s.type==="smoke"&&s.state==="active"&&Math.hypot(s.x-e.x,s.z-e.z)<Pt.smokeR)){e.life=.05,tf(t);return}Dt.fire(e,X.W,ps),z0(t)}else e.type==="decoy"&&(e.dc=.5)}function gm(n,e,t,i,s,r){let a=n.x-e,o=n.y-t,l=n.z-i,c=Math.hypot(a,o,l);if(c>40)return 0;let h=Vi(X.W,e,t,i,a/c,o/c,l/c,c);if(h&&h.t<c-.25)return 0;let f=-Math.sin(s)*Math.cos(r),u=Math.sin(r),d=-Math.cos(s)*Math.cos(r),m=(a*f+o*u+l*d)/c,_=m>.6?1:m>0?.35+m:.18,p=c<10?1:Math.max(0,1-(c-10)/30);return 4.9*_*p}function _1(n){let e=Ut();if(!e||!e.alive||!O.pl)return;let t=O.pl,i=gm(n,t.x,t.y+En(t),t.z,t.yaw,t.pitch);i>.15&&(O.blind=Math.max(O.blind,i),O.blindMax=Math.max(O.blind,1),k0(i))}function xm(n,e,t){if(!O.pl)return;let i=Math.hypot(n[0]-O.pl.x,n[2]-O.pl.z);i<e&&(O.shake=Math.max(O.shake,t*(1-i/e)))}function Uf(n,e,t,i){switch(n){case"st":v1(e);break;case"rs":M1(e);break;case"ev":S1(e);break;case"p":{let s=X.players.get(t);s&&t!==st&&tm(s,e);break}case"pb":if(!bt())for(let s of e){let r=X.players.get(s[0]);r&&tm(r,s.slice(1))}break;case"sh":if(e.i!==st){let s=X.players.get(e.i);dm(e.i,e.w,e.o,e.e,e.m||[],e.h||[]),e.w==="knife"&&e.h&&e.h.length&&Wc(!1),bt()&&Kt&&s&&Kt.heard(e.o[0],e.o[1],e.o[2],s.team,!(Ze[e.w]||{}).silent)}break;case"nd":e.i!==st&&mm(e);break}}function tm(n,e){n.nx=e[0],n.ny=e[1],n.nz=e[2],n.nyaw=e[3],n.npitch=e[4],n.duck=e[5],n.wpn=e[6],n.flags=e[7]|0,n.vx=e[8]||0,n.vz=e[9]||0,n.netT=X.time,n.scoped=!!(n.flags&1),n.onGround=!(n.flags&2),(n.x===void 0||Math.hypot(n.x-n.nx,n.z-n.nz)>4)&&(n.x=n.nx,n.y=n.ny,n.z=n.nz,n.yaw=n.nyaw,n.pitch=n.npitch)}function v1(n){let e=X.phase;X.phase=n.ph,X.timeLeft=n.tl,X.round=n.r,X.score=n.sc,X.half=n.hf;let t=n.b;if(Object.assign(X.bomb,{state:t.s,carrier:t.c,x:t.x,y:t.y,z:t.z,t:t.t,site:t.site}),!bt()){let r=new Set;for(let a of n.dr)r.add(a[0]),X.drops.set(a[0],{id:a[0],w:a[1],x:a[2],y:a[3],z:a[4],ammo:a[5]});for(let a of[...X.drops.keys()])r.has(a)||X.drops.delete(a)}let i=new Set;for(let r of n.p){let[a,o,l,c,h,f,u,d,m,_,p,g,M,E,y,v,b,x,T]=r;i.add(a);let P=X.players.get(a);P||(P={id:a,x:0,y:0,z:0,yaw:0,pitch:0,duck:0,h:nt.hStand},X.players.set(a,P)),bt()||Object.assign(P,{name:o,bot:!!l,grp:c,team:h,hp:f,ar:u,helm:!!d,money:m,alive:!!_,k:p,d:g,a:M,mvp:E,inv:y,god:!!v,skT:b,skCT:x,fin:T})}if(!bt())for(let r of[...X.players.keys()])i.has(r)||X.players.delete(r);let s=Ut();s&&(O.lastMoney!==null&&s.money>O.lastMoney&&We.moneyDelta(s.money-O.lastMoney),O.lastMoney=s.money,If()),Fn&&Xc(s,_s)}function M1(n){Dt.clearSmokes(),Dt.clearDecals();for(let t of fo.values())yn.remove(t);fo.clear(),X.nades.length=0,Jc.clear(),We.banner(null);for(let t of X.players.values())t.deadT=0,t.alive=!0;let e=n.pos[st];if(e&&(O.pl=wc(e[0],e[1],e[2],e[3])),bt()&&Kt){for(let t of X.players.values())t.bot&&n.pos[t.id]&&Kt.place(t,n.pos[t.id]);Kt.roundStart()}for(let[t,i]of Object.entries(n.pos)){let s=X.players.get(t);s&&(s.x=s.nx=i[0],s.y=s.ny=i[1],s.z=s.nz=i[2],s.yaw=s.nyaw=i[3],s.pitch=0)}Object.assign(O,{deadT:0,spec:null,blind:0,plantT:0,defusing:!1,defT:0,scope:0,reloadT:0,drawT:.4,shots:0,pp:0,py:0,voidSent:!1,nadeHold:0}),O.invV=-1,O.ammoW={p:null,s:null},If(),O.throwT=0,Dn(Pf(),!0),(n.round===1||X.round===1)&&We.center("Ronda 1 \u2014 \xA1suerte!"),of()}function b1(n){let e=X.players.get(n);return e?e.name:"\u2014"}function S1(n){let e=Ut();switch(n.t){case"go":We.center(e&&e.team==="T"?"\xA1Vamos! Plant\xE1 la bomba":"\xA1Vamos! Defend\xE9 los sitios",1800),of();break;case"hurt":{if(n.v===st){F0(),ho=Math.min(1,ho+n.n/60);let t=X.players.get(n.a);if(t&&t.id!==st&&O.pl){let i=Math.atan2(-(t.x-O.pl.x),-(t.z-O.pl.z))-O.pl.yaw;We.dmgDir(-i)}O.pl&&n.w!=="world"&&n.w!=="molotov"&&n.w!=="incendiary"&&(O.pl.vx*=.45,O.pl.vz*=.45,O.punchHit=1.2)}n.a===st&&n.v!==st&&(We.hit(n.hs),Wc(n.hs,n.helm));break}case"kill":{let t=n.k?X.players.get(n.k):null,i=X.players.get(n.v);i&&(i.alive=!1,i.deadT=.001),i&&We.feed(t,i,n.w,n.hs,n.wb,n.k===st||n.v===st),n.k===st&&n.v!==st&&O0(),n.v===st&&(O.deadT=.001,O.scope=0,O.defusing=!1,We.progress(null));break}case"end":{let t=e?e.team:"T",i=n.win===t,s={elim:"eliminaron al otro equipo",bomb:"la bomba explot\xF3",defuse:"desactivaron la bomba",time:"se termin\xF3 el tiempo"};We.banner(n.win,n.win==="T"?"GANAN LOS TERRORISTAS":"GANAN LOS CONTRATERRORISTAS","Porque "+s[n.reason]+(n.mvp?" \xB7 MVP: "+b1(n.mvp):"")),q0(i);break}case"over":{let t=n.wg,i=Ut(),s=i?i.grp:0,r=t<0?"EMPATE":t===s?"\xA1VICTORIA!":"DERROTA";We.banner(t<0?"":Gs(t,X.half),r,`${n.score[s]} \u2013 ${n.score[1-s]} \xB7 Volviendo a la sala en ${Bt.over} s`);let a=Bt.over;clearInterval($c),$c=setInterval(()=>{if(a--,a<=0){clearInterval($c);return}We.banner(t<0?"":Gs(t,X.half),r,`${n.score[s]} \u2013 ${n.score[1-s]} \xB7 Volviendo a la sala en ${a} s`)},1e3);break}case"half":We.center("Cambio de lado \u2014 empieza la segunda mitad",4e3);break;case"plant":We.center("La bomba fue plantada en el sitio "+n.site,3e3),sf([X.bomb.x,X.bomb.y,X.bomb.z],!0),X.bomb.seen=!0;break;case"defst":af([X.bomb.x,X.bomb.y,X.bomb.z]);break;case"defused":We.center("Desactivaron la bomba",3e3);break;case"boom":Dt.explosion([n.x,n.y,n.z],!0),ef([n.x,n.y,n.z],!0),xm([n.x,n.y,n.z],60,1.2);break;case"bombdrop":e&&e.team==="T"&&We.center("Se cay\xF3 la bomba",1600);break;case"bombpick":n.p===st&&(We.center("Agarraste la bomba (5)",1600),X0());break;case"deny":We.center(n.why,1500),W0();break;case"bought":G0();break}}var $c=0,ho=0,Fn=!1,_s=-1,Qn=null,pf={};function ym(n){if(pf[n]){let e=document.createElement("canvas");return e.width=192,e.height=48,e.getContext("2d").drawImage(pf[n],0,0),e}try{Qn||(Qn={r:new ks({antialias:!0,alpha:!0,preserveDrawingBuffer:!0}),s:new ai,c:new Oi(-.62,.62,.155,-.155,.01,10)},Qn.r.setSize(192,48),Qn.s.add(new gi("#fff","#666",2.2)),Qn.c.position.set(3,0,0),Qn.c.lookAt(0,0,0));let e=Xi(n);e.computeBoundingBox();let t=e.boundingBox,i=new $e(e,jn),s=Math.max(.12,t.max.z-t.min.z,(t.max.y-t.min.y)*4);i.scale.setScalar(1.1/s),i.position.set(0,-(t.max.y+t.min.y)/2/s*1.1,-(t.max.z+t.min.z)/2/s*1.1),Qn.s.add(i),Qn.r.render(Qn.s,Qn.c),Qn.s.remove(i);let r=document.createElement("canvas");return r.width=192,r.height=48,r.getContext("2d").drawImage(Qn.r.domElement,0,0),pf[n]=r,ym(n)}catch{return null}}var nm=null;function th(n){let e=Ut();if(!e)return;if(n!==void 0?n:!Fn){if(!e.alive)return;if(!Sf()){We.center(X.phase==="live"?"Se termin\xF3 el tiempo de compra":"No pod\xE9s comprar ahora",1400);return}nm!==e.team&&(nm=e.team,J0(e.team,ym,i=>Ht("buy",{i}),i=>uf(i))),_s=-1,Xc(e,_s),Fn=!0,un("buy").hidden=!1,document.exitPointerLock&&document.exitPointerLock()}else Fn=!1,un("buy").hidden=!0,uf(null),Zi||uo();Qc()}function Sf(){let n=Ut();if(!n||!n.alive||!O.pl||!(X.phase==="freeze"||X.phase==="live"&&Bt.live-X.timeLeft<Bt.buy&&X.bomb.state!=="planted"))return!1;let t=X.spawns?X.spawns[n.team]:null;return!t||Math.hypot(O.pl.x-t.cx,O.pl.z-t.cz)<22||!!(bi(X.W,O.pl.x,O.pl.z)&(n.team==="T"?16:32))}function T1(n){if(n.code==="KeyB"||n.code==="Escape"){th(!1);return}let e=parseInt(n.key,10);if(!(e>=1&&e<=9))return;let t=Ut();if(_s<0)e<=5&&(_s=e-1);else{let i=Nr[_s].items[t.team];i[e-1]&&Ht("buy",{i:i[e-1]}),_s=-1}Xc(t,_s)}un("buy").addEventListener("mousedown",n=>n.stopPropagation());function w1(){qt=new ks({antialias:!1,powerPreference:"high-performance"}),qt.setPixelRatio(Math.min(devicePixelRatio,Zi?1:1.5)),qt.setSize(innerWidth,innerHeight),qt.autoClear=!1,qt.toneMapping=Fa,qt.toneMappingExposure=1.05,qt.shadowMap.enabled=om>0,qt.shadowMap.type=El,qt.shadowMap.autoUpdate=!1,un("view").appendChild(qt.domElement),yn=new ai,en=new tn(74,innerWidth/innerHeight,.05,1500),lo=new ai,Hr=new tn(66,innerWidth/innerHeight,.01,10),lo.add(new gi("#ffffff","#555",1.3));let n=new xi("#fff",1.1);n.position.set(1,2,1),lo.add(n),xn=C0(),lo.add(xn);let e=E1();xn.userData.flash=e,addEventListener("resize",()=>{qt.setSize(innerWidth,innerHeight),en.aspect=Hr.aspect=innerWidth/innerHeight,en.updateProjectionMatrix(),Hr.updateProjectionMatrix()}),qt.domElement.addEventListener("click",()=>{X.phase!=="lobby"&&!Vr&&!Zi&&!Fn&&uo()}),un("clickPlay").addEventListener("click",()=>{ro(),uo()})}function E1(){let n=new $e(new Is(1,0),new $t({color:"#ffd27a",transparent:!0,opacity:.95,depthWrite:!1}));return n.scale.set(.04,.04,.12),n.visible=!1,n.renderOrder=11,xn.add(n),n}async function A1(n){un("loading").hidden=!1,un("loadMsg").textContent="Cargando "+(Mf.find(s=>s.id===n)?.name||n)+"\u2026",await new Promise(s=>setTimeout(s,30));let e=Kc[n]||(Kc[n]=await Au(n)),t=e.W||(e.W=Ru(e.info,e.layers));for(X.W=t,X.info=e.info,X.nav=e.nav||(e.nav=h0(t)),X.mapName=Mf.find(s=>s.id===n)?.name||n;yn.children.length;)yn.remove(yn.children[0]);qc&&qc.traverse(s=>{s.geometry&&s.geometry.dispose(),s.material&&s.material.dispose()}),qc=s0(t,n).mesh,yn.add(qc),r0(yn,t,n,om),qt.shadowMap.needsUpdate=!0,Dt=M0(yn),Dt.floorAt=(s,r,a)=>ps(X.W,s,r,a+.2),bf=hf(t);for(let s of X.players.values())s.model&&(s.model=null,s.tag=null);for(let s of zr.values())yn.remove(s);zr.clear(),Yi=null,Af=!0,un("loading").hidden=!0}function R1(n,e){let t=document.createElement("canvas");t.width=256,t.height=48;let i=t.getContext("2d");i.font="bold 30px Rajdhani, sans-serif",i.textAlign="center",i.fillStyle="rgba(0,0,0,.5)";let s=Math.min(250,i.measureText(n).width+20);i.fillRect(128-s/2,4,s,40),i.fillStyle=e==="T"?"#f0c060":"#8ab8ff",i.fillText(n,128,35);let r=new pa(new yr({map:new Ui(t),depthTest:!1,transparent:!0,sizeAttenuation:!1}));return r.scale.set(.1,.019,1),r.renderOrder=20,r}var C1=new $t({color:"#ff3030",wireframe:!0,depthTest:!1,transparent:!0,opacity:.8}),_m=new pn(.7,1.8,.7);_m.translate(0,.9,0);function P1(n){let e=Ut();for(let t of X.players.values()){let i=t.id===st,s=t.team+Zc(t);if(!t.model||t.modelTeam!==s){t.model&&yn.remove(t.model),t.model=Hc(t.team,Zc(t)),t.modelTeam=s,yn.add(t.model),t.tag=null;let l=new $e(_m,C1);l.renderOrder=19,l.visible=!1,t.model.add(l),t.esp=l;let c=Dt.muzzleMesh();t.model.userData.gun.add(c),t.mflash=c}let r=t.model;if(!i&&!(bt()&&t.bot)&&t.nx!==void 0){let l=Math.min(1,n*14);t.x+=(t.nx-t.x)*l+(t.vx||0)*n*.5,t.y+=(t.ny-t.y)*l,t.z+=(t.nz-t.z)*l+(t.vz||0)*n*.5,isFinite(t.x)||(t.x=t.nx,t.y=t.ny,t.z=t.nz),t.yaw+=Df(t.nyaw||0,t.yaw||0)*l,t.pitch=(t.pitch||0)+((t.npitch||0)-(t.pitch||0))*l}let a=i&&!O.spec&&(e&&e.alive||O.deadT<.01)||O.spec===t.id;if(r.visible=!a&&(t.alive||(t.deadT||0)>0),!r.visible)continue;r.position.set(t.x,t.y,t.z),r.rotation.y=t.yaw,t.alive||(t.deadT=Math.min(3,(t.deadT||0)+n*2.5));let o=Math.hypot(t.vx||0,t.vz||0);if(Vc(r,t.alive?t.wpn||"knife":null,zc(t.fin,t.wpn||"knife")),t.mflash&&t.wpn){let l=io(t.wpn);t.mflash.position.set(0,l.muzzle[1]*1.12,-l.muzzle[0]*1.12-.05),t.mflash.parent!==r.userData.gun&&r.userData.gun.add(t.mflash)}Gc(r,{speed:t.alive?o:0,duck:t.duck||0,pitch:t.pitch||0,onGround:t.onGround!==!1,dead:t.alive?0:t.deadT},n),t.mflash&&(t.flashT=(t.flashT||0)-n,t.mflash.visible=t.flashT>0,t.mflash.visible&&(t.mflash.rotation.z=Math.random()*3)),e&&t.team===e.team&&!i&&t.alive?(t.tag||(t.tag=R1(t.name,t.team),r.add(t.tag)),t.tag.visible=!0,t.tag.position.y=2.15-(t.duck||0)*.45):t.tag&&(t.tag.visible=!1),t.esp.visible=!!($i("ls.wall")&&e&&t.team!==e.team&&t.alive),!i&&t.alive&&o>3.6&&t.onGround!==!1&&(t.stepT=(t.stepT||0)-n,t.stepT<=0&&(t.stepT=.34,Qu([t.x,t.y,t.z]),X.cfg.map==="dust2"&&Dt.dust([t.x,t.y,t.z])))}}var zr=new Map,Yi=null,oo=null,Yc=0;function I1(n){for(let[t,i]of X.drops){let s=zr.get(t);s||(s=Fr(i.w),s.scale.setScalar(1.2),s.rotation.set(0,Math.random()*6,Math.PI/2*.98),yn.add(s),zr.set(t,s)),s.position.set(i.x,i.y+.04,i.z)}for(let[t,i]of zr)X.drops.has(t)||(yn.remove(i),zr.delete(t));let e=X.bomb;if(Yi||(Yi=Fr("c4"),Yi.scale.setScalar(1.6),yn.add(Yi),oo=new $e(new Ls(.03,6,4),new $t({color:"#ff2020"})),oo.position.set(-.05,.05,.03),Yi.add(oo)),Yi.visible=e.state==="planted"||e.state==="dropped"||e.state==="defused",Yi.visible&&Yi.position.set(e.x,e.y+.05,e.z),e.state==="planted"){let t=Math.max(0,e.t),i=Math.max(.12,Math.min(1,t/35));Yc-=n,oo.visible=Yc>i*.6,Yc<=0&&(Yc=i,sf([e.x,e.y,e.z],t<10))}else oo.visible=!1}var mf=0,gf=0;function L1(n){let e=Ut();if(!e||!O.pl)return;let t=O.pl;if(If(),!e.alive){O.deadT+=n;return}O.drawT-=n,O.fireT-=n,O.nadeCd-=n,O.pickCd-=n,O.inspect&&(O.inspect=Math.max(0,O.inspect-n)),O.reloadT>0&&(O.reloadT-=n,O.reloadT<=0&&c1()),O.rescope&&O.fireT<=0&&((Xn()==="awp"||Xn()==="ssg08")&&(O.scope=O.rescope),O.rescope=0);let i=Xn(),s=Ze[i]||Ze.knife,r=X.phase==="freeze"||O.plantT>0||O.defusing||Fn&&!1,a=0,o=0;Fn||(Yt.has("KeyW")&&(a+=1),Yt.has("KeyS")&&(a-=1),Yt.has("KeyD")&&(o+=1),Yt.has("KeyA")&&(o-=1)),(hn.mx||hn.mz)&&(a=-hn.mz,o=hn.mx);let l={f:r?0:a,s:r?0:o,jump:!r&&Yt.has("Space"),crouch:Yt.has("KeyC")||Yt.has("ControlLeft")||Yt.has("ControlRight"),walk:Yt.has("ShiftLeft")||Yt.has("ShiftRight")},c=(s.speed||250)*j0*(O.scope&&s.cat==="sniper"?.5:O.scope?.7:1);(i==="c4"||Ze[i]?.cat==="grenade")&&(c=245*j0),$i("ls.speed")&&(c*=1.6);let h=n,f=0,u=t.onGround;for(;h>1e-6;){let g=Math.min(h,.008333333333333333),M=Ec(X.W,t,l,g,c);M&&(f=M),h-=g}for(let g of X.players.values()){if(g.id===st||!g.alive||Math.abs(g.y-t.y)>1.6)continue;let M=t.x-g.x,E=t.z-g.z,y=Math.hypot(M,E);if(y<.62&&y>1e-4){let v=(.62-y)/y,b=t.x+M*v,x=t.z+E*v;Hi(X.W,b,x,t.y,t.h,nt.r)||(t.x=b,t.z=x)}}if(f){let g=Du(f);g>0&&Ht("fall",{d:g}),D0(null)}t.y<-20&&!O.voidSent&&(O.voidSent=!0,Ht("fall",{d:999}));let d=Math.hypot(t.vx,t.vz);if(t.onGround&&d>3.6&&(O.stepT-=n,O.stepT<=0&&(O.stepT=.36,Qu(null,.45))),O.bob+=n*d*1.4*(t.onGround?1:0),e.x=t.x,e.y=t.y,e.z=t.z,e.yaw=t.yaw,e.pitch=t.pitch,e.duck=t.duck,e.vx=t.vx,e.vz=t.vz,e.onGround=t.onGround,e.wpn=i,e.h=t.h,e.scoped=O.scope>0,O.fireT<-.06&&(O.pp=Math.max(0,O.pp-(s.recover||9)*n*(1+O.pp*.15)),O.py*=Math.exp(-n*7),O.pp<.4&&(O.shots=0)),An||(O.trig=!1),(Ze[i]||{}).cat==="grenade"){if(An&&!O.nadeHold&&O.throwT<=0&&(O.nadeHold=Ws?.6:1),An&&Ws&&O.nadeHold&&(O.nadeHold=.6),O.nadeHold&&!An&&!Ws&&O.drawT<=0&&O.throwT<=0&&(X.phase==="freeze"?(We.center("Esper\xE1 a que empiece la ronda",1e3),O.nadeHold=0):(O.throwT=.45,O.throwPow=O.nadeHold,O.nadeHold=0)),O.throwT>0){let g=O.throwT;O.throwT-=n,g>.3&&O.throwT<=.3&&g1(O.throwPow||1)}}else if(i==="c4"){let g=bi(X.W,t.x,t.z)&12;if(An&&g&&t.onGround&&X.phase==="live"&&O.drawT<=0){O.plantT||rf();let M=O.plantT;O.plantT+=n,Math.floor(M*4)!==Math.floor(O.plantT*4)&&rf(),We.progress("Plantando la bomba\u2026",O.plantT/Bt.plant),O.plantT>=Bt.plant&&(O.plantT=0,We.progress(null),Ht("plant",{x:t.x,y:t.y,z:t.z}))}else O.plantT&&We.progress(null),O.plantT=0,An&&!g&&!O.trig&&(We.center("Ten\xE9s que estar en un sitio de bomba (A o B)",1300),O.trig=!0)}else An&&!Fn&&p1();if(O.defusing){let g=X.bomb;if(g.state!=="planted"||!Yt.has("KeyE")||Math.hypot(t.x-g.x,t.z-g.z)>1.9)eh();else{O.defT+=n;let M=e.inv.kit?Bt.kit:Bt.defuse;We.progress(e.inv.kit?"Desactivando (con kit)\u2026":"Desactivando\u2026",O.defT/M),O.defT>=M&&(Ht("defok",{}),O.defusing=!1,We.progress(null))}}else O.plantT||We.progress(null);if(O.pickCd<=0){for(let M of X.drops.values())if(!(Math.hypot(M.x-t.x,M.z-t.z)>.9||Math.abs(M.y-t.y)>1.2)&&(M.w==="defuser"?e.team==="CT"&&!e.inv.kit:!vs(Vs(M.w)===1?"p":"s"))){Ht("take",{id:M.id}),O.pickCd=.6;break}let g=X.bomb;e.team==="T"&&g.state==="dropped"&&Math.hypot(g.x-t.x,g.z-t.z)<1&&Math.abs(g.y-t.y)<1.4&&(Ht("take",{id:"c4"}),O.pickCd=.8)}let _="",p=fm();p&&(_="E \xB7 agarrar "+Or(p.w)),e.team==="CT"&&X.bomb.state==="planted"&&Math.hypot(t.x-X.bomb.x,t.z-X.bomb.z)<1.7&&!O.defusing&&(_="Manten\xE9 E para desactivar"),i==="c4"&&bi(X.W,t.x,t.z)&12&&!O.plantT&&X.phase==="live"&&(_="Manten\xE9 clic para plantar"),We.hint(_),mf-=n,mf<=0&&(mf=.05,Un("p",[+t.x.toFixed(2),+t.y.toFixed(2),+t.z.toFixed(2),+t.yaw.toFixed(3),+t.pitch.toFixed(3),+t.duck.toFixed(2),i,(O.scope?1:0)|(t.onGround?0:2),+t.vx.toFixed(2),+t.vz.toFixed(2)],{volatile:!0}))}function N1(n){if(gf-=n,gf>0)return;gf=.05;let e=[];for(let t of X.players.values())t.bot&&t.pl&&e.push([t.id,+t.x.toFixed(2),+t.y.toFixed(2),+t.z.toFixed(2),+t.yaw.toFixed(3),+t.pitch.toFixed(3),+(t.duck||0).toFixed(2),t.wpn||"knife",(t.scoped?1:0)|(t.onGround?0:2),+(t.vx||0).toFixed(2),+(t.vz||0).toFixed(2)]);e.length&&Un("pb",e,{volatile:!0})}var im=new ri(0,0,0,"YXZ"),ys=[];function Ff(n){let e=Ut();if(!e)return;if(ys=[...X.players.values()].filter(i=>i.alive&&i.team===e.team),ys.length||(ys=[...X.players.values()].filter(i=>i.alive)),!ys.length){O.spec=null;return}let t=ys.findIndex(i=>i.id===O.spec);O.spec=ys[(t+n+ys.length)%ys.length].id}function D1(n){let e=Ut();if(!e||!O.pl)return;let t,i,s,r,a,o=Xn(),l=e.team,c=O.scope,h=Zc(e),f=zc(e.fin,Xn());if(e.alive){let M=O.pl;t=M.x,i=M.y+En(M),s=M.z,r=M.yaw-O.py*.5*Q0,a=M.pitch+O.pp*.5*Q0+(O.punchHit||0)*.02,O.spec=null}else if(O.deadT<2.2||!X.players.size){let M=O.pl,E=Math.min(1,O.deadT/1.2);r=M.yaw+O.deadT*.3,a=-.35*E+M.pitch*(1-E),t=M.x+Math.sin(r)*2.6*E,s=M.z+Math.cos(r)*2.6*E,i=M.y+En(M)*(1-E)+1.6*E,o=null}else{let M=O.spec&&X.players.get(O.spec);(!M||!M.alive)&&Ff(1);let E=O.spec&&X.players.get(O.spec);if(E)t=E.x,i=E.y+En({duck:E.duck||0}),s=E.z,r=E.yaw,a=E.pitch,o=E.wpn||"knife",l=E.team,c=E.scoped?1:0,h=Zc(E),f=zc(E.fin,o);else{let y=O.pl;t=y.x,i=y.y+3,s=y.z,r=y.yaw,a=-.5,o=null}}O.punchHit=Math.max(0,(O.punchHit||0)-n*6),O.shake>0&&(O.shake=Math.max(0,O.shake-n*1.5),t+=(Math.random()-.5)*O.shake*.12,i+=(Math.random()-.5)*O.shake*.12),en.position.set(t,i,s),im.set(a,r,0),en.quaternion.setFromEuler(im);let u=Ze[o],m=74/(c&&u&&u.scope?u.scope[Math.max(0,c-1)]:1);Math.abs(en.fov-m)>.01&&(en.fov=m,en.updateProjectionMatrix()),N0(t,i,s,r);let _=c&&u&&u.cat==="sniper";if(xn.visible=!!o&&!_&&(e.alive||O.spec),xn.visible){P0(xn,o,l,h,f);let M=xn.userData,E=M.base||[.13,-.14,-.36];O.sway[0]+=(O.swayT[0]-O.sway[0])*Math.min(1,n*10),O.sway[1]+=(O.swayT[1]-O.sway[1])*Math.min(1,n*10),O.swayT[0]*=Math.exp(-n*10),O.swayT[1]*=Math.exp(-n*10),O.kick=Math.max(0,O.kick-n*7);let y=e.alive?O.bob:X.time*2,v=e.alive?Math.min(1,Math.hypot(O.pl.vx,O.pl.vz)/5):.3,b=E[0]+Math.cos(y)*.008*v+O.sway[0]*.02,x=E[1]+Math.abs(Math.sin(y))*.01*v-O.sway[1]*.02,T=E[2]+O.kick*.045,P=O.kick*.12,S=0,A=0;if(e.alive&&O.reloadT>0){let R=Ze[Xn()],L=1-O.reloadT/R.reload,B=Math.sin(Math.min(1,L)*Math.PI);P-=B*.6,x-=B*.06,A+=B*.4}if(e.alive&&O.drawT>0){let R=Math.max(0,O.drawT)/.6;x-=R*.25,P-=R*.8}if(e.alive&&O.inspect){let R=Math.sin(Math.min(1,O.inspect/1.6)*Math.PI);S+=R*1.1,A+=R*.5,b-=R*.08}if(o==="knife"&&e.alive&&O.fireT>0){let R=O.fireT/(O.knife2?1:.45);S-=Math.sin(R*Math.PI)*.9,T-=Math.sin(R*Math.PI)*.08}if((O.plantT>0||O.defusing)&&(x-=.08,P-=.7),e.alive&&O.nadeHold&&(x-=.03,T+=.06,P+=.25),e.alive&&O.throwT>0){let R=1-O.throwT/.45,L=Math.sin(Math.min(1,R)*Math.PI);T-=L*.25,x+=L*.12,P-=L*1.2,R>.4&&(xn.userData.gun.visible=!1)}else xn.userData.gun.visible=!0;let D=M.rot||[0,0,0];M.hold.position.set(b,x,T),M.hold.rotation.set(P+D[0],S+D[1],A+D[2]),I0(xn),xn.position.copy(en.position),xn.quaternion.copy(en.quaternion),Hr.position.copy(en.position),Hr.quaternion.copy(en.quaternion);let C=M.flash;O.flashT=(O.flashT||0)-n;let w=io(o);C&&(C.visible=O.flashT>0&&u&&!u.silent&&u.cat!=="knife",C.visible&&(C.position.set(0,w.muzzle[1],-w.muzzle[0]-.05).applyMatrix4(M.hold.matrix),C.quaternion.setFromEuler(M.hold.rotation),C.rotateZ(Math.random()*3))),M.gun.updateWorldMatrix(!0,!1),co.set(0,w.muzzle[1],-w.muzzle[0]).applyMatrix4(M.gun.matrixWorld)}un("scope").hidden=!_;let p=!_&&(e.alive||O.spec)&&!(u&&u.cat==="sniper"),g=4;e.alive&&u&&u.dmg&&(g=3+Ka(u,{speed:Math.hypot(O.pl.vx,O.pl.vz),onGround:O.pl.onGround,duck:O.pl.duck,scoped:O.scope>0,shots:O.shots})*900),We.crosshair(Math.min(60,g),p)}var xf=0,yf=0;function U1(n){let e=Ut();if(!e||(ho=Math.max(0,ho-n*1.4),We.el.hurt.style.opacity=Math.max(ho,e.alive&&e.hp<=30?.22+.14*Math.sin(X.time*4):0).toFixed(2),O.blind=Math.max(0,O.blind-n),We.el.flash.style.opacity=Math.min(1,O.blind/1.6).toFixed(3),xf-=n,xf>0))return;xf=.05;let t=O.spec&&!e.alive?X.players.get(O.spec):e;We.money(e.money),We.vitals(t?t.hp:0,t?t.ar:0,t&&t.helm);let i=e.alive?Xn():t&&t.wpn,s=Ze[i],r=O.slot,a=r==="p"||r==="s"?O.ammo[r]:null;We.ammo(i?Or(i):"",a?a[0]:0,a?a[1]:0,e.alive&&!!a&&!!s&&!!s.mag);let o=[];e.alive&&(e.inv.p&&o.push({key:1,slot:"p",id:e.inv.p,name:Or(e.inv.p)}),e.inv.s&&o.push({key:2,slot:"s",id:e.inv.s,name:Or(e.inv.s)}),o.push({key:3,slot:"k",id:"knife",name:"Cuchillo"}),e.inv.zeus&&o.push({key:3,slot:"z",id:"zeus",name:"Zeus x27"}),e.inv.g.length&&o.push({key:4,slot:"g",id:e.inv.g.join(),name:e.inv.g.map(Or).join(" \xB7 ")}),e.inv.c4&&o.push({key:5,slot:"c4",id:"c4",name:"C4"}),e.inv.kit&&o.push({key:"",slot:"kit",id:"kit",name:"Kit de desactivaci\xF3n"})),We.slots(o.filter(M=>M.slot!=="g"&&M.slot!=="kit"),O.slot,e.alive?e.inv.g:[],O.gsel);let l=X.bomb.state==="planted";We.clock(X.timeLeft,l||X.phase==="live"&&X.timeLeft<10,l);let c=X.score[X.half],h=X.score[1-X.half],f=0,u=0,d=0,m=0;for(let M of X.players.values())M.team==="T"?(u++,M.alive&&f++):(m++,M.alive&&d++);let _=M=>[...X.players.values()].filter(E=>E.team===M).map(E=>({n:E.name,a:E.alive}));if(We.score(c,h,_("T"),_("CT")),We.el.buyHint.hidden=!(Sf()&&!Fn),Fn)if(!Sf())th(!1);else{let M=un("buyTime"),E=X.phase==="freeze"?Math.ceil(X.timeLeft+Bt.buy):Math.max(0,Math.ceil(Bt.buy-(Bt.live-X.timeLeft)));M.textContent="0:"+String(E).padStart(2,"0")}let p=We.el.spec;!e.alive&&O.deadT>2.2&&t&&t!==e?(p.hidden=!1,p.innerHTML="Mirando a <b>"+t.name.replace(/</g,"")+"</b><small>Clic o Espacio: siguiente</small>"):p.hidden=!0,X.phase==="freeze"&&e.alive?We.center("La ronda empieza en "+Math.ceil(X.timeLeft)+" \xB7 B para comprar",0):X.phase==="freeze"||We.el.centerMsg.textContent.startsWith("La ronda empieza")&&We.center("",1);let g=Yt.has("Tab")||X.phase==="over";if(We.el.board.hidden=!g,g&&(We.el.board.innerHTML=K0(X,st)),yf-=.05,yf<=0&&bf){yf=.1;let M=t&&t!==e?{x:t.x,z:t.z,yaw:t.yaw}:{x:O.pl.x,z:O.pl.z,yaw:O.pl.yaw},E=[],y=[O.pl.x,O.pl.y+1.6,O.pl.z];for(let b of X.players.values())b.alive&&(b.team===e.team?E.push({x:b.x,z:b.z,col:b.team==="T"?"#f0c060":"#8ab8ff",me:b.id===st}):e.alive&&b.seenT>X.time-.6&&E.push({x:b.x,z:b.z,col:"#ff4040"}));if(Z0(un("radar"),bf,X.W,M,E,{s:X.bomb.state,x:X.bomb.x,z:X.bomb.z,seen:!0},e.team),e.alive)for(let b of X.players.values())b.alive&&b.team!==e.team&&Math.hypot(b.x-O.pl.x,b.z-O.pl.z)<60&&Ja(X.W,X.nades,y,[b.x,b.y,b.z,1])&&(b.seenT=X.time);let v=bi(X.W,M.x,M.z);We.el.zoneName.textContent=v&4?"Sitio A":v&8?"Sitio B":v&16?"Base T":v&32?"Base CT":""}}var sm=performance.now();function vm(n){requestAnimationFrame(vm);let e=Math.min(.05,(n-sm)/1e3);if(sm=n,X.phase==="lobby"&&Xs&&qt){Xs.render(qt,e);return}if(X.phase!=="lobby"&&Af){let t=window.__ls&&window.__ls.ff||0;for(let i=0;i<t;i++)rm(.05);if(rm(e),Dt.update(e,X.time,en),D1(e),U1(e),window.__ls.cam){let i=window.__ls.cam;en.position.set(i[0],i[1],i[2]),en.lookAt(i[3],i[4],i[5]),en.fov!==74&&(en.fov=74,en.updateProjectionMatrix()),xn.visible=!1}An&&Ut()&&!Ut().alive&&O.deadT>2.2&&(An=!1,Ff(1)),qt.clear(),qt.render(yn,en),qt.clearDepth(),xn.visible&&qt.render(lo,Hr)}}function rm(n){X.time+=n,bt()&&It?(It.tick(n),Kt&&Kt.tick(n),N1(n)):X.phase!=="lobby"&&(X.timeLeft-=n,X.bomb.state==="planted"&&(X.bomb.t-=n)),L1(n),x1(n),P1(n),I1(n)}var $i=n=>!!(window.Arcade&&Arcade.admin&&Arcade.admin.get(n));function F1(){Arcade.admin&&(Arcade.admin.define([{id:"ls.god",label:"Inmortal",type:"toggle"},{id:"ls.wall",label:"Ver a trav\xE9s de paredes",type:"toggle"},{id:"ls.aim",label:"Aimbot (al disparar)",type:"toggle"},{id:"ls.norecoil",label:"Sin retroceso ni dispersi\xF3n",type:"toggle"},{id:"ls.ammo",label:"Balas infinitas",type:"toggle"},{id:"ls.speed",label:"S\xFAper velocidad",type:"toggle"},{id:"ls.money",label:"Plata al m\xE1ximo",type:"button"},{id:"ls.heal",label:"Curarme + chaleco",type:"button"},{id:"ls.kill",label:"Matar a los enemigos",type:"button"},{id:"ls.win",label:"Ganar la ronda",type:"button"}]),Arcade.admin.on("ls.god",n=>Ht("adm",{a:"god",v:!!n})),Arcade.admin.on("ls.money",()=>Ht("adm",{a:"money"})),Arcade.admin.on("ls.heal",()=>Ht("adm",{a:"heal"})),Arcade.admin.on("ls.kill",()=>Ht("adm",{a:"kill"})),Arcade.admin.on("ls.win",()=>Ht("adm",{a:"win"})))}var _f={};function O1(n){return _f[n]||(_f[n]=(async()=>{try{let e=Kc[n]||(Kc[n]=await Au(n));return e.W=e.W||Ru(e.info,e.layers),hf(e.W)}catch(e){return console.warn(e),null}})()),_f[n]}var Xs=null;function Tf(){Xs.show()}function wf(){Xs.refresh()}function Br(){bt()&&(Un("cfg",{cfg:X.cfg,prefs:X.prefs}),wf())}var jc=new Set,vf=0;async function am(n){if(X.cfg=n.cfg,X.prefs=n.prefs||{},Xs.hide(),await A1(X.cfg.map),X.phase="loading",un("hud").hidden=!1,bt()){jc.add(st);let e=()=>{((zt.players||[]).every(i=>jc.has(i.id))||vf<=0)&&B1()};vf=1,setTimeout(()=>{vf=0,e()},15e3),X.tryBegin=e,e()}else Un("ready",{},{to:zt.hostId});Qc(),Zi||uo()}var Ef=!1;function B1(){if(Ef)return;Ef=!0,It=ku(X);let n=(zt.players||[{id:st,name:"Jugador",slot:0}]).map(e=>{let t=X.prefs[e.id]||{};return{id:e.id,name:e.name,slot:e.slot,pref:t.t??-1,sk:t.sk||[0,0],fin:t.f||0}});It.setup(n),Kt=Vu(X,It),It.startMatch()}function k1(){X.phase="lobby",Ef=!1,It=null,Kt=null,jc.clear(),X.players.clear(),X.drops.clear(),X.nades.length=0,un("hud").hidden=!0,We.banner(null),clearInterval($c),document.exitPointerLock&&document.exitPointerLock(),Tf(),Qc()}function z1(){if(!(X.phase==="lobby"||X.phase==="loading"||It)){It=ku(X),It.adopt(),Kt=Vu(X,It);for(let n of X.players.values())n.bot&&n.alive&&Kt.place(n,[n.x,n.y,n.z,n.yaw]),n.dmgBy||(n.dmgBy={});Kt.roundStart(),It.markDirty()}}async function H1(){We.init(),w1(),l1(),requestAnimationFrame(vm),zt=await Arcade.ready(),st=zt.me.id,(!zt.players||!zt.players.length)&&(zt.players=[zt.me]),un("loading").hidden=!0,F1();for(let e of o1)Arcade.on(e,(t,i,s)=>{bt()&&It&&It.handle(e,t,i,s||{})});for(let e of["st","rs","ev","p","pb","sh","nd"])Arcade.on(e,(t,i)=>{(e==="ev"||e==="st"||e==="rs")&&bt()||Uf(e,t,i)});Arcade.on("cfg",e=>{bt()||(X.cfg=e.cfg,X.prefs=e.prefs||{},X.phase==="lobby"&&wf())}),Arcade.on("pref",(e,t)=>{bt()&&(X.prefs[t]=e,Br())}),Arcade.on("start",e=>{X.phase==="lobby"&&am(e)}),Arcade.on("ready",(e,t)=>{bt()&&(jc.add(t),X.tryBegin&&X.tryBegin())}),Arcade.on("hello",(e,t)=>{bt()&&X.phase==="lobby"&&Br()}),Arcade.onPlayerLeft(e=>{zt.players=(zt.players||[]).filter(i=>i.id!==e);let t=X.players.get(e);t&&bt()&&It&&(t.bot=!0,t.name=t.name+" (bot)",t.alive&&Kt&&Kt.place(t,[t.x,t.y,t.z,t.yaw]),It.markDirty()),X.phase==="lobby"&&wf(),bt()&&X.tryBegin&&X.tryBegin()}),Arcade.onHostChanged(()=>{bt()&&(z1(),X.phase==="lobby"&&(Tf(),Br()))});let n=X.emit;X.emit=(e,t)=>{if(e==="start"){Un("start",t),am(t);return}n(e,t)},Xs=$0({G:X,store:po,MAPS:Mf,LENGTHS:Bu,DIFF:Ic,mapThumb:O1,ctx:()=>zt,myId:()=>st,isHost:bt,pushCfg:Br,sendPref:e=>{X.prefs[st]=e,bt()?Br():Un("pref",e,{to:zt.hostId})},onStart:()=>{ro(),Zi||lm(),X.emit("start",{cfg:X.cfg,prefs:X.prefs})}}),X.prefs[st]=Xs.myPref(),Tf(),bt()?Br():(Un("hello",{},{to:zt.hostId}),Un("pref",X.prefs[st],{to:zt.hostId}))}H1();window.__ls={G:X,M:O,me:Ut,req:Ht,get H(){return It},get BOTS(){return Kt},get camera(){return en},keys:Yt,look:Rf,onKey:Cf,traceShot:Cc,targets:Nf,shotDir:Dr,setMouse(n,e){An=n,Ws=!!e,e&&Lf()}};
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
