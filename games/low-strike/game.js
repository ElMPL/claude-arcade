var I0=0,Ou=1,L0=2;var ya=1,yc=2,ao=3,Gi=0,mn=1,pi=2,hr=0,lo=1,zu=2,Bu=3,Hu=4,N0=5;var ur=100,D0=101,U0=102,F0=103,k0=104,O0=200,z0=201,B0=202,H0=203,Vu=204,Gu=205,V0=206,G0=207,W0=208,X0=209,q0=210,$0=211,Y0=212,Z0=213,K0=214,Fl=0,kl=1,Ol=2,Zr=3,zl=4,Bl=5,Hl=6,Vl=7,vc=0,J0=1,j0=2,Wi=0,Wu=1,Xu=2,qu=3,va=4,$u=5,Yu=6,Zu=7;var Ku=300,fr=301,co=302,_c=303,Mc=304,Rs=1e3,ki=1001,Gl=1002,Mn=1003,Q0=1004;var _a=1005;var En=1006,bc=1007;var Ri=1008;var Xn=1009,Ju=1010,ju=1011,ho=1012,Sc=1013,Ci=1014,mi=1015,Pi=1016,Tc=1017,wc=1018,dr=1020,Qu=35902,tf=35899,ef=1021,nf=1022,ii=1023,as=1026,fs=1027,Ec=1028,Ac=1029,Fs=1030,Rc=1031;var Cc=1033,Ma=33776,ba=33777,Sa=33778,Ta=33779,Pc=35840,Ic=35841,Lc=35842,Nc=35843,Dc=36196,Uc=37492,Fc=37496,kc=37488,Oc=37489,wa=37490,zc=37491,Bc=37808,Hc=37809,Vc=37810,Gc=37811,Wc=37812,Xc=37813,qc=37814,$c=37815,Yc=37816,Zc=37817,Kc=37818,Jc=37819,jc=37820,Qc=37821,th=36492,eh=36494,nh=36495,ih=36283,sh=36284,Ea=36285,rh=36286;var Ho=2300,Wl=2301,Dl=2302,Eu=2303,Au=2400,Ru=2401,Cu=2402;var tp=3200;var Aa=0,ep=1,ds="",an="srgb",Vo="srgb-linear",Go="linear",Se="srgb";var Ul=7680;var np=519,ip=512,sp=513,rp=514,sf=515,op=516,ap=517,rf=518,of=519,af=35044,uo=35048;var lf="300 es",hi=2e3,Kr=2001;function ox(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function ax(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Wo(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function lp(){let n=Wo("canvas");return n.style.display="block",n}var Zd={},Jr=null;function Xo(...n){let t="THREE."+n.shift();Jr?Jr("log",t,...n):console.log(t,...n)}function cp(n){let t=n[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=n[1];e&&e.isStackTrace?n[0]+=" "+e.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Zt(...n){n=cp(n);let t="THREE."+n.shift();if(Jr)Jr("warn",t,...n);else{let e=n[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...n)}}function Kt(...n){n=cp(n);let t="THREE."+n.shift();if(Jr)Jr("error",t,...n);else{let e=n[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...n)}}function Oo(...n){let t=n.join(" ");t in Zd||(Zd[t]=!0,Zt(...n))}function hp(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}var up={[Fl]:Fl,[Ol]:Hl,[zl]:zl,[Zr]:Bl,[kl]:kl,[Hl]:Ol,[Vl]:Vl,[Bl]:Zr},Oi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){let i=this._listeners;if(i===void 0)return;let s=i[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let i=e[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},In=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Qh=Math.PI/180,Xl=180/Math.PI;function ks(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(In[n&255]+In[n>>8&255]+In[n>>16&255]+In[n>>24&255]+"-"+In[t&255]+In[t>>8&255]+"-"+In[t>>16&15|64]+In[t>>24&255]+"-"+In[e&63|128]+In[e>>8&255]+"-"+In[e>>16&255]+In[e>>24&255]+In[i&255]+In[i>>8&255]+In[i>>16&255]+In[i>>24&255]).toLowerCase()}function fe(n,t,e){return Math.max(t,Math.min(e,n))}function lx(n,t){return(n%t+t)%t}function tu(n,t,e){return(1-e)*n+e*t}function fp(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function oh(n){switch(n.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function dp(n,t){if(t.constructor===Float32Array)return n;let e=oh(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(n/e,-1)}function pp(n,t){if(t.constructor===Float32Array)return n;let e=oh(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(n*e)}var gt=class{static{this.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=fe(this.x,t.x,e.x),this.y=fe(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=fe(this.x,t,e),this.y=fe(this.y,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(fe(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(fe(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Nn=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let l=i[s+0],c=i[s+1],h=i[s+2],u=i[s+3],f=r[o+0],d=r[o+1],p=r[o+2],v=r[o+3];if(u!==v||l!==f||c!==d||h!==p){let g=l*f+c*d+h*p+u*v;g<0&&(f=-f,d=-d,p=-p,v=-v,g=-g);let m=1-a;if(g<.9995){let y=Math.acos(g),b=Math.sin(y);m=Math.sin(m*y)/b,a=Math.sin(a*y)/b,l=l*m+f*a,c=c*m+d*a,h=h*m+p*a,u=u*m+v*a}else{l=l*m+f*a,c=c*m+d*a,h=h*m+p*a,u=u*m+v*a;let y=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=y,c*=y,h*=y,u*=y}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],u=r[o],f=r[o+1],d=r[o+2],p=r[o+3];return t[e]=a*p+h*u+l*d-c*f,t[e+1]=l*p+h*f+c*u-a*d,t[e+2]=c*p+h*d+a*f-l*u,t[e+3]=h*p-a*u-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),u=a(r/2),f=l(i/2),d=l(s/2),p=l(r/2);switch(o){case"XYZ":this._x=f*h*u+c*d*p,this._y=c*d*u-f*h*p,this._z=c*h*p+f*d*u,this._w=c*h*u-f*d*p;break;case"YXZ":this._x=f*h*u+c*d*p,this._y=c*d*u-f*h*p,this._z=c*h*p-f*d*u,this._w=c*h*u+f*d*p;break;case"ZXY":this._x=f*h*u-c*d*p,this._y=c*d*u+f*h*p,this._z=c*h*p+f*d*u,this._w=c*h*u-f*d*p;break;case"ZYX":this._x=f*h*u-c*d*p,this._y=c*d*u+f*h*p,this._z=c*h*p-f*d*u,this._w=c*h*u+f*d*p;break;case"YZX":this._x=f*h*u+c*d*p,this._y=c*d*u+f*h*p,this._z=c*h*p-f*d*u,this._w=c*h*u-f*d*p;break;case"XZY":this._x=f*h*u-c*d*p,this._y=c*d*u-f*h*p,this._z=c*h*p+f*d*u,this._w=c*h*u+f*d*p;break;default:Zt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=i+a+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(i>a&&i>u){let d=2*Math.sqrt(1+i-a-u);this._w=(h-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>u){let d=2*Math.sqrt(1+a-i-u);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+u-i-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(fe(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-s*a,this._w=o*h-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let i=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},$=class{static{this.prototype.isVector3=!0}constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Kd.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Kd.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*i),h=2*(a*e-r*s),u=2*(r*i-o*e);return this.x=e+l*c+o*u-a*h,this.y=i+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=fe(this.x,t.x,e.x),this.y=fe(this.y,t.y,e.y),this.z=fe(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=fe(this.x,t,e),this.y=fe(this.y,t,e),this.z=fe(this.z,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(fe(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return eu.copy(this).projectOnVector(t),this.sub(eu)}reflect(t){return this.sub(eu.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(fe(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},eu=new $,Kd=new Nn,ee=class{static{this.prototype.isMatrix3=!0}constructor(t,e,i,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c)}set(t,e,i,s,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],u=i[7],f=i[2],d=i[5],p=i[8],v=s[0],g=s[3],m=s[6],y=s[1],b=s[4],M=s[7],R=s[2],T=s[5],x=s[8];return r[0]=o*v+a*y+l*R,r[3]=o*g+a*b+l*T,r[6]=o*m+a*M+l*x,r[1]=c*v+h*y+u*R,r[4]=c*g+h*b+u*T,r[7]=c*m+h*M+u*x,r[2]=f*v+d*y+p*R,r[5]=f*g+d*b+p*T,r[8]=f*m+d*M+p*x,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-i*r*h+i*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,f=a*l-h*r,d=c*r-o*l,p=e*u+i*f+s*d;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/p;return t[0]=u*v,t[1]=(s*c-h*i)*v,t[2]=(a*i-s*o)*v,t[3]=f*v,t[4]=(h*e-s*l)*v,t[5]=(s*r-a*e)*v,t[6]=d*v,t[7]=(i*l-c*e)*v,t[8]=(o*e-i*r)*v,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return Oo("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(nu.makeScale(t,e)),this}rotate(t){return Oo("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(nu.makeRotation(-t)),this}translate(t,e){return Oo("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(nu.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},nu=new ee,Jd=new ee().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),jd=new ee().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function cx(){let n={enabled:!0,workingColorSpace:Vo,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Se&&(s.r=os(s.r),s.g=os(s.g),s.b=os(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Se&&(s.r=Yr(s.r),s.g=Yr(s.g),s.b=Yr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ds?Go:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Vo]:{primaries:t,whitePoint:i,transfer:Go,toXYZ:Jd,fromXYZ:jd,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:an},outputColorSpaceConfig:{drawingBufferColorSpace:an}},[an]:{primaries:t,whitePoint:i,transfer:Se,toXYZ:Jd,fromXYZ:jd,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:an}}}),n}var ge=cx();function os(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Yr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Pr,ql=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Pr===void 0&&(Pr=Wo("canvas")),Pr.width=t.width,Pr.height=t.height;let s=Pr.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=Pr}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Wo("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=os(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(os(e[i]/255)*255):e[i]=os(e[i]);return{data:e,width:t.width,height:t.height}}else return Zt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},hx=0,jr=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:hx++}),this.uuid=ks(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(iu(s[o].image)):r.push(iu(s[o]))}else r=iu(s);i.url=r}return e||(t.images[this.uuid]=i),i}};function iu(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?ql.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Zt("Texture: Unable to serialize Texture."),{})}var ux=0,su=new $,zn=class n extends Oi{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=ki,s=ki,r=En,o=Ri,a=ii,l=Xn,c=n.DEFAULT_ANISOTROPY,h=ds){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ux++}),this.uuid=ks(),this.name="",this.source=new jr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new gt(0,0),this.repeat=new gt(1,1),this.center=new gt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ee,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(su).x}get height(){return this.source.getSize(su).y}get depth(){return this.source.getSize(su).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let i=t[e];if(i===void 0){Zt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Zt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ku)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Rs:t.x=t.x-Math.floor(t.x);break;case ki:t.x=t.x<0?0:1;break;case Gl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Rs:t.y=t.y-Math.floor(t.y);break;case ki:t.y=t.y<0?0:1;break;case Gl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};zn.DEFAULT_IMAGE=null;zn.DEFAULT_MAPPING=Ku;zn.DEFAULT_ANISOTROPY=1;var $e=class{static{this.prototype.isVector4=!0}constructor(t=0,e=0,i=0,s=1){this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r,l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],p=l[9],v=l[2],g=l[6],m=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-v)<.01&&Math.abs(p-g)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+v)<.1&&Math.abs(p+g)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let b=(c+1)/2,M=(d+1)/2,R=(m+1)/2,T=(h+f)/4,x=(u+v)/4,_=(p+g)/4;return b>M&&b>R?b<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(b),s=T/i,r=x/i):M>R?M<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),i=T/s,r=_/s):R<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),i=x/r,s=_/r),this.set(i,s,r,e),this}let y=Math.sqrt((g-p)*(g-p)+(u-v)*(u-v)+(f-h)*(f-h));return Math.abs(y)<.001&&(y=1),this.x=(g-p)/y,this.y=(u-v)/y,this.z=(f-h)/y,this.w=Math.acos((c+d+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=fe(this.x,t.x,e.x),this.y=fe(this.y,t.y,e.y),this.z=fe(this.z,t.z,e.z),this.w=fe(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=fe(this.x,t,e),this.y=fe(this.y,t,e),this.z=fe(this.z,t,e),this.w=fe(this.w,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(fe(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},$l=class extends Oi{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:En,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new $e(0,0,t,e),this.scissorTest=!1,this.viewport=new $e(0,0,t,e),this.textures=[];let s=i.count;for(let r=0;r<s;r++)this.textures[r]=new zn({width:t,height:e,depth:i.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:En,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new jr(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},jn=class extends $l{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},qo=class extends zn{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Mn,this.minFilter=Mn,this.wrapR=ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Yl=class extends zn{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Mn,this.minFilter=Mn,this.wrapR=ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var ye=class n{static{this.prototype.isMatrix4=!0}constructor(t,e,i,s,r,o,a,l,c,h,u,f,d,p,v,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c,h,u,f,d,p,v,g)}set(t,e,i,s,r,o,a,l,c,h,u,f,d,p,v,g){let m=this.elements;return m[0]=t,m[4]=e,m[8]=i,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=f,m[3]=d,m[7]=p,m[11]=v,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,i=t.elements,s=1/Ir.setFromMatrixColumn(t,0).length(),r=1/Ir.setFromMatrixColumn(t,1).length(),o=1/Ir.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let f=o*h,d=o*u,p=a*h,v=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=d+p*c,e[5]=f-v*c,e[9]=-a*l,e[2]=v-f*c,e[6]=p+d*c,e[10]=o*l}else if(t.order==="YXZ"){let f=l*h,d=l*u,p=c*h,v=c*u;e[0]=f+v*a,e[4]=p*a-d,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=d*a-p,e[6]=v+f*a,e[10]=o*l}else if(t.order==="ZXY"){let f=l*h,d=l*u,p=c*h,v=c*u;e[0]=f-v*a,e[4]=-o*u,e[8]=p+d*a,e[1]=d+p*a,e[5]=o*h,e[9]=v-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let f=o*h,d=o*u,p=a*h,v=a*u;e[0]=l*h,e[4]=p*c-d,e[8]=f*c+v,e[1]=l*u,e[5]=v*c+f,e[9]=d*c-p,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let f=o*l,d=o*c,p=a*l,v=a*c;e[0]=l*h,e[4]=v-f*u,e[8]=p*u+d,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=d*u+p,e[10]=f-v*u}else if(t.order==="XZY"){let f=o*l,d=o*c,p=a*l,v=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+v,e[5]=o*h,e[9]=d*u-p,e[2]=p*u-d,e[6]=a*h,e[10]=v*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(fx,t,dx)}lookAt(t,e,i){let s=this.elements;return Kn.subVectors(t,e),Kn.lengthSq()===0&&(Kn.z=1),Kn.normalize(),Ss.crossVectors(i,Kn),Ss.lengthSq()===0&&(Math.abs(i.z)===1?Kn.x+=1e-4:Kn.z+=1e-4,Kn.normalize(),Ss.crossVectors(i,Kn)),Ss.normalize(),ol.crossVectors(Kn,Ss),s[0]=Ss.x,s[4]=ol.x,s[8]=Kn.x,s[1]=Ss.y,s[5]=ol.y,s[9]=Kn.y,s[2]=Ss.z,s[6]=ol.z,s[10]=Kn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],u=i[5],f=i[9],d=i[13],p=i[2],v=i[6],g=i[10],m=i[14],y=i[3],b=i[7],M=i[11],R=i[15],T=s[0],x=s[4],_=s[8],A=s[12],S=s[1],C=s[5],I=s[9],w=s[13],P=s[2],O=s[6],W=s[10],q=s[14],B=s[3],U=s[7],H=s[11],E=s[15];return r[0]=o*T+a*S+l*P+c*B,r[4]=o*x+a*C+l*O+c*U,r[8]=o*_+a*I+l*W+c*H,r[12]=o*A+a*w+l*q+c*E,r[1]=h*T+u*S+f*P+d*B,r[5]=h*x+u*C+f*O+d*U,r[9]=h*_+u*I+f*W+d*H,r[13]=h*A+u*w+f*q+d*E,r[2]=p*T+v*S+g*P+m*B,r[6]=p*x+v*C+g*O+m*U,r[10]=p*_+v*I+g*W+m*H,r[14]=p*A+v*w+g*q+m*E,r[3]=y*T+b*S+M*P+R*B,r[7]=y*x+b*C+M*O+R*U,r[11]=y*_+b*I+M*W+R*H,r[15]=y*A+b*w+M*q+R*E,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],d=t[14],p=t[3],v=t[7],g=t[11],m=t[15],y=l*d-c*f,b=a*d-c*u,M=a*f-l*u,R=o*d-c*h,T=o*f-l*h,x=o*u-a*h;return e*(v*y-g*b+m*M)-i*(p*y-g*R+m*T)+s*(p*b-v*R+m*x)-r*(p*M-v*T+g*x)}determinantAffine(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[1],o=t[5],a=t[9],l=t[2],c=t[6],h=t[10];return e*(o*h-a*c)-i*(r*h-a*l)+s*(r*c-o*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],d=t[11],p=t[12],v=t[13],g=t[14],m=t[15],y=e*a-i*o,b=e*l-s*o,M=e*c-r*o,R=i*l-s*a,T=i*c-r*a,x=s*c-r*l,_=h*v-u*p,A=h*g-f*p,S=h*m-d*p,C=u*g-f*v,I=u*m-d*v,w=f*m-d*g,P=y*w-b*I+M*C+R*S-T*A+x*_;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let O=1/P;return t[0]=(a*w-l*I+c*C)*O,t[1]=(s*I-i*w-r*C)*O,t[2]=(v*x-g*T+m*R)*O,t[3]=(f*T-u*x-d*R)*O,t[4]=(l*S-o*w-c*A)*O,t[5]=(e*w-s*S+r*A)*O,t[6]=(g*M-p*x-m*b)*O,t[7]=(h*x-f*M+d*b)*O,t[8]=(o*I-a*S+c*_)*O,t[9]=(i*S-e*I-r*_)*O,t[10]=(p*T-v*M+m*y)*O,t[11]=(u*M-h*T-d*y)*O,t[12]=(a*A-o*C-l*_)*O,t[13]=(e*C-i*A+s*_)*O,t[14]=(v*b-p*R-g*y)*O,t[15]=(h*R-u*b+f*y)*O,this}scale(t){let e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,f=r*c,d=r*h,p=r*u,v=o*h,g=o*u,m=a*u,y=l*c,b=l*h,M=l*u,R=i.x,T=i.y,x=i.z;return s[0]=(1-(v+m))*R,s[1]=(d+M)*R,s[2]=(p-b)*R,s[3]=0,s[4]=(d-M)*T,s[5]=(1-(f+m))*T,s[6]=(g+y)*T,s[7]=0,s[8]=(p+b)*x,s[9]=(g-y)*x,s[10]=(1-(f+v))*x,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),e.identity(),this;let o=Ir.set(s[0],s[1],s[2]).length(),a=Ir.set(s[4],s[5],s[6]).length(),l=Ir.set(s[8],s[9],s[10]).length();r<0&&(o=-o),Si.copy(this);let c=1/o,h=1/a,u=1/l;return Si.elements[0]*=c,Si.elements[1]*=c,Si.elements[2]*=c,Si.elements[4]*=h,Si.elements[5]*=h,Si.elements[6]*=h,Si.elements[8]*=u,Si.elements[9]*=u,Si.elements[10]*=u,e.setFromRotationMatrix(Si),i.x=o,i.y=a,i.z=l,this}makePerspective(t,e,i,s,r,o,a=hi,l=!1){let c=this.elements,h=2*r/(e-t),u=2*r/(i-s),f=(e+t)/(e-t),d=(i+s)/(i-s),p,v;if(l)p=r/(o-r),v=o*r/(o-r);else if(a===hi)p=-(o+r)/(o-r),v=-2*o*r/(o-r);else if(a===Kr)p=-o/(o-r),v=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=hi,l=!1){let c=this.elements,h=2/(e-t),u=2/(i-s),f=-(e+t)/(e-t),d=-(i+s)/(i-s),p,v;if(l)p=1/(o-r),v=o/(o-r);else if(a===hi)p=-2/(o-r),v=-(o+r)/(o-r);else if(a===Kr)p=-1/(o-r),v=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=u,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=p,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},Ir=new $,Si=new ye,fx=new $(0,0,0),dx=new $(1,1,1),Ss=new $,ol=new $,Kn=new $,Qd=new ye,t0=new Nn,ui=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(fe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-fe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(fe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-fe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(fe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-fe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:Zt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Qd.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Qd,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return t0.setFromEuler(this),this.setFromQuaternion(t0,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ui.DEFAULT_ORDER="XYZ";var $o=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},px=0,e0=new $,Lr=new Nn,ts=new ye,al=new $,Ao=new $,mx=new $,gx=new Nn,n0=new $(1,0,0),i0=new $(0,1,0),s0=new $(0,0,1),r0={type:"added"},xx={type:"removed"},Nr={type:"childadded",child:null},ru={type:"childremoved",child:null},Be=class n extends Oi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:px++}),this.uuid=ks(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new $,e=new ui,i=new Nn,s=new $(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ye},normalMatrix:{value:new ee}}),this.matrix=new ye,this.matrixWorld=new ye,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new $o,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Lr.setFromAxisAngle(t,e),this.quaternion.multiply(Lr),this}rotateOnWorldAxis(t,e){return Lr.setFromAxisAngle(t,e),this.quaternion.premultiply(Lr),this}rotateX(t){return this.rotateOnAxis(n0,t)}rotateY(t){return this.rotateOnAxis(i0,t)}rotateZ(t){return this.rotateOnAxis(s0,t)}translateOnAxis(t,e){return e0.copy(t).applyQuaternion(this.quaternion),this.position.add(e0.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(n0,t)}translateY(t){return this.translateOnAxis(i0,t)}translateZ(t){return this.translateOnAxis(s0,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ts.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?al.copy(t):al.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Ao.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ts.lookAt(Ao,al,this.up):ts.lookAt(al,Ao,this.up),this.quaternion.setFromRotationMatrix(ts),s&&(ts.extractRotation(s.matrixWorld),Lr.setFromRotationMatrix(ts),this.quaternion.premultiply(Lr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Kt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(r0),Nr.child=t,this.dispatchEvent(Nr),Nr.child=null):Kt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(xx),ru.child=t,this.dispatchEvent(ru),ru.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ts.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ts.multiply(t.parent.matrixWorld)),t.applyMatrix4(ts),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(r0),Nr.child=t,this.dispatchEvent(Nr),Nr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ao,t,mx),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ao,gx,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,i=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*i-r[8]*s,r[13]+=i-r[1]*e-r[5]*i-r[9]*s,r[14]+=s-r[2]*e-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,i)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),f=o(t.skeletons),d=o(t.animations),p=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),p.length>0&&(i.nodes=p)}return i.object=s,i;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Be.DEFAULT_UP=new $(0,1,0);Be.DEFAULT_MATRIX_AUTO_UPDATE=!0;Be.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Re=class extends Be{constructor(){super(),this.isGroup=!0,this.type="Group"}},yx={type:"move"},Qr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Re,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Re,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new $,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new $),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Re,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new $,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new $,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let v of t.hand.values()){let g=e.getJointPose(v,i),m=this._getHandJoint(c,v);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.quaternion,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,p=.005;c.inputState.pinching&&f>d+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(yx)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new Re;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},mp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ts={h:0,s:0,l:0},ll={h:0,s:0,l:0};function ou(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var Xt=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=an){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ge.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=ge.workingColorSpace){return this.r=t,this.g=e,this.b=i,ge.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=ge.workingColorSpace){if(t=lx(t,1),e=fe(e,0,1),i=fe(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=ou(o,r,t+1/3),this.g=ou(o,r,t),this.b=ou(o,r,t-1/3)}return ge.colorSpaceToWorking(this,s),this}setStyle(t,e=an){function i(r){r!==void 0&&parseFloat(r)<1&&Zt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Zt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);Zt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=an){let i=mp[t.toLowerCase()];return i!==void 0?this.setHex(i,e):Zt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=os(t.r),this.g=os(t.g),this.b=os(t.b),this}copyLinearToSRGB(t){return this.r=Yr(t.r),this.g=Yr(t.g),this.b=Yr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=an){return ge.workingToColorSpace(Ln.copy(this),t),Math.round(fe(Ln.r*255,0,255))*65536+Math.round(fe(Ln.g*255,0,255))*256+Math.round(fe(Ln.b*255,0,255))}getHexString(t=an){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ge.workingColorSpace){ge.workingToColorSpace(Ln.copy(this),e);let i=Ln.r,s=Ln.g,r=Ln.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case i:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-i)/u+2;break;case r:l=(i-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ge.workingColorSpace){return ge.workingToColorSpace(Ln.copy(this),e),t.r=Ln.r,t.g=Ln.g,t.b=Ln.b,t}getStyle(t=an){ge.workingToColorSpace(Ln.copy(this),t);let e=Ln.r,i=Ln.g,s=Ln.b;return t!==an?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Ts),this.setHSL(Ts.h+t,Ts.s+e,Ts.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Ts),t.getHSL(ll);let i=tu(Ts.h,ll.h,e),s=tu(Ts.s,ll.s,e),r=tu(Ts.l,ll.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ln=new Xt;Xt.NAMES=mp;var Yo=class n{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new Xt(t),this.near=e,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Qn=class extends Be{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ui,this.environmentIntensity=1,this.environmentRotation=new ui,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Ti=new $,es=new $,au=new $,ns=new $,Dr=new $,Ur=new $,o0=new $,lu=new $,cu=new $,hu=new $,uu=new $e,fu=new $e,du=new $e,rs=class n{constructor(t=new $,e=new $,i=new $){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),Ti.subVectors(t,e),s.cross(Ti);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){Ti.subVectors(s,e),es.subVectors(i,e),au.subVectors(t,e);let o=Ti.dot(Ti),a=Ti.dot(es),l=Ti.dot(au),c=es.dot(es),h=es.dot(au),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let f=1/u,d=(c*l-a*h)*f,p=(o*h-a*l)*f;return r.set(1-d-p,p,d)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,ns)===null?!1:ns.x>=0&&ns.y>=0&&ns.x+ns.y<=1}static getInterpolation(t,e,i,s,r,o,a,l){return this.getBarycoord(t,e,i,s,ns)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ns.x),l.addScaledVector(o,ns.y),l.addScaledVector(a,ns.z),l)}static getInterpolatedAttribute(t,e,i,s,r,o){return uu.setScalar(0),fu.setScalar(0),du.setScalar(0),uu.fromBufferAttribute(t,e),fu.fromBufferAttribute(t,i),du.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(uu,r.x),o.addScaledVector(fu,r.y),o.addScaledVector(du,r.z),o}static isFrontFacing(t,e,i,s){return Ti.subVectors(i,e),es.subVectors(t,e),Ti.cross(es).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ti.subVectors(this.c,this.b),es.subVectors(this.a,this.b),Ti.cross(es).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,r=this.c,o,a;Dr.subVectors(s,i),Ur.subVectors(r,i),lu.subVectors(t,i);let l=Dr.dot(lu),c=Ur.dot(lu);if(l<=0&&c<=0)return e.copy(i);cu.subVectors(t,s);let h=Dr.dot(cu),u=Ur.dot(cu);if(h>=0&&u<=h)return e.copy(s);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0&&l-h>0)return o=l/(l-h),e.copy(i).addScaledVector(Dr,o);hu.subVectors(t,r);let d=Dr.dot(hu),p=Ur.dot(hu);if(p>=0&&d<=p)return e.copy(r);let v=d*c-l*p;if(v<=0&&c>=0&&p<=0)return a=c/(c-p),e.copy(i).addScaledVector(Ur,a);let g=h*p-d*u;if(g<=0&&u-h>=0&&d-p>=0)return o0.subVectors(r,s),a=(u-h)/(u-h+(d-p)),e.copy(s).addScaledVector(o0,a);let m=1/(g+v+f);return o=v*m,a=f*m,e.copy(i).addScaledVector(Dr,o).addScaledVector(Ur,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},zi=class{constructor(t=new $(1/0,1/0,1/0),e=new $(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(wi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(wi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=wi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,wi):wi.fromBufferAttribute(r,o),wi.applyMatrix4(t.matrixWorld),this.expandByPoint(wi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),cl.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),cl.copy(i.boundingBox)),cl.applyMatrix4(t.matrixWorld),this.union(cl)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,wi),wi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ro),hl.subVectors(this.max,Ro),Fr.subVectors(t.a,Ro),kr.subVectors(t.b,Ro),Or.subVectors(t.c,Ro),ws.subVectors(kr,Fr),Es.subVectors(Or,kr),Qs.subVectors(Fr,Or);let e=[0,-ws.z,ws.y,0,-Es.z,Es.y,0,-Qs.z,Qs.y,ws.z,0,-ws.x,Es.z,0,-Es.x,Qs.z,0,-Qs.x,-ws.y,ws.x,0,-Es.y,Es.x,0,-Qs.y,Qs.x,0];return!pu(e,Fr,kr,Or,hl)||(e=[1,0,0,0,1,0,0,0,1],!pu(e,Fr,kr,Or,hl))?!1:(ul.crossVectors(ws,Es),e=[ul.x,ul.y,ul.z],pu(e,Fr,kr,Or,hl))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,wi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(wi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(is[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),is[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),is[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),is[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),is[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),is[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),is[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),is[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(is),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},is=[new $,new $,new $,new $,new $,new $,new $,new $],wi=new $,cl=new zi,Fr=new $,kr=new $,Or=new $,ws=new $,Es=new $,Qs=new $,Ro=new $,hl=new $,ul=new $,tr=new $;function pu(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){tr.fromArray(n,r);let a=s.x*Math.abs(tr.x)+s.y*Math.abs(tr.y)+s.z*Math.abs(tr.z),l=t.dot(tr),c=e.dot(tr),h=i.dot(tr);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var fn=new $,fl=new gt,vx=0,qe=class extends Oi{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:vx++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=af,this.updateRanges=[],this.gpuType=mi,this.version=0,this._normalizationScale=t!==void 0?oh(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)fl.fromBufferAttribute(this,e),fl.applyMatrix3(t),this.setXY(e,fl.x,fl.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)fn.fromBufferAttribute(this,e),fn.applyMatrix3(t),this.setXYZ(e,fn.x,fn.y,fn.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)fn.fromBufferAttribute(this,e),fn.applyMatrix4(t),this.setXYZ(e,fn.x,fn.y,fn.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)fn.fromBufferAttribute(this,e),fn.applyNormalMatrix(t),this.setXYZ(e,fn.x,fn.y,fn.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)fn.fromBufferAttribute(this,e),fn.transformDirection(t),this.setXYZ(e,fn.x,fn.y,fn.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=this._denormalize(i)),i}setComponent(t,e,i){return this.normalized&&(i=this._normalize(i)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i),s=this._normalize(s)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i),s=this._normalize(s),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):dp(t,this.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):pp(t,this.array)}};var Zo=class extends qe{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var Ko=class extends qe{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var te=class extends qe{constructor(t,e,i){super(new Float32Array(t),e,i)}},_x=new zi,Co=new $,mu=new $,ls=class{constructor(t=new $,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):_x.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Co.subVectors(t,this.center);let e=Co.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(Co,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(mu.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Co.copy(t.center).add(mu)),this.expandByPoint(Co.copy(t.center).sub(mu))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Mx=0,ci=new ye,gu=new Be,zr=new $,Jn=new zi,Po=new zi,_n=new $,Ue=class n extends Oi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Mx++}),this.uuid=ks(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ox(t)?Ko:Zo)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new ee().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return ci.makeRotationFromQuaternion(t),this.applyMatrix4(ci),this}rotateX(t){return ci.makeRotationX(t),this.applyMatrix4(ci),this}rotateY(t){return ci.makeRotationY(t),this.applyMatrix4(ci),this}rotateZ(t){return ci.makeRotationZ(t),this.applyMatrix4(ci),this}translate(t,e,i){return ci.makeTranslation(t,e,i),this.applyMatrix4(ci),this}scale(t,e,i){return ci.makeScale(t,e,i),this.applyMatrix4(ci),this}lookAt(t){return gu.lookAt(t),gu.updateMatrix(),this.applyMatrix4(gu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(zr).negate(),this.translate(zr.x,zr.y,zr.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new te(i,3))}else{let i=Math.min(t.length,e.count);for(let s=0;s<i;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Zt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new zi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Kt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new $(-1/0,-1/0,-1/0),new $(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let r=e[i];Jn.setFromBufferAttribute(r),this.morphTargetsRelative?(_n.addVectors(this.boundingBox.min,Jn.min),this.boundingBox.expandByPoint(_n),_n.addVectors(this.boundingBox.max,Jn.max),this.boundingBox.expandByPoint(_n)):(this.boundingBox.expandByPoint(Jn.min),this.boundingBox.expandByPoint(Jn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Kt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ls);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Kt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new $,1/0);return}if(t){let i=this.boundingSphere.center;if(Jn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Po.setFromBufferAttribute(a),this.morphTargetsRelative?(_n.addVectors(Jn.min,Po.min),Jn.expandByPoint(_n),_n.addVectors(Jn.max,Po.max),Jn.expandByPoint(_n)):(Jn.expandByPoint(Po.min),Jn.expandByPoint(Po.max))}Jn.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)_n.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(_n));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)_n.fromBufferAttribute(a,c),l&&(zr.fromBufferAttribute(t,c),_n.add(zr)),s=Math.max(s,i.distanceToSquared(_n))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Kt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Kt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,s=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new qe(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));let a=[],l=[],c=new Uint8Array(i.count);for(let A=0;A<i.count;A++)a[A]=new $,l[A]=new $;let h=new $,u=new $,f=new $,d=new gt,p=new gt,v=new gt,g=new $,m=new $;function y(A,S,C){c[A]=c[S]=c[C]=1,h.fromBufferAttribute(i,A),u.fromBufferAttribute(i,S),f.fromBufferAttribute(i,C),d.fromBufferAttribute(r,A),p.fromBufferAttribute(r,S),v.fromBufferAttribute(r,C),u.sub(h),f.sub(h),p.sub(d),v.sub(d);let I=1/(p.x*v.y-v.x*p.y);isFinite(I)&&(g.copy(u).multiplyScalar(v.y).addScaledVector(f,-p.y).multiplyScalar(I),m.copy(f).multiplyScalar(p.x).addScaledVector(u,-v.x).multiplyScalar(I),a[A].add(g),a[S].add(g),a[C].add(g),l[A].add(m),l[S].add(m),l[C].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let A=0,S=b.length;A<S;++A){let C=b[A],I=C.start,w=C.count;for(let P=I,O=I+w;P<O;P+=3)y(t.getX(P+0),t.getX(P+1),t.getX(P+2))}let M=new $,R=new $,T=new $,x=new $;function _(A){T.fromBufferAttribute(s,A),x.copy(T);let S=a[A];M.copy(S),M.sub(T.multiplyScalar(T.dot(S))).normalize(),R.crossVectors(x,S);let I=R.dot(l[A])<0?-1:1;o.setXYZW(A,M.x,M.y,M.z,I)}for(let A=0,S=i.count;A<S;++A)c[A]&&_(A);this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new qe(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);let s=new $,r=new $,o=new $,a=new $,l=new $,c=new $,h=new $,u=new $;if(t)for(let f=0,d=t.count;f<d;f+=3){let p=t.getX(f+0),v=t.getX(f+1),g=t.getX(f+2);s.fromBufferAttribute(e,p),r.fromBufferAttribute(e,v),o.fromBufferAttribute(e,g),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(i,p),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,g),a.add(h),l.add(h),c.add(h),i.setXYZ(p,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)_n.fromBufferAttribute(t,e),_n.normalize(),t.setXYZ(e,_n.x,_n.y,_n.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h),d=0,p=0;for(let v=0,g=l.length;v<g;v++){a.isInterleavedBufferAttribute?d=l[v]*a.data.stride+a.offset:d=l[v]*h;for(let m=0;m<h;m++)f[p++]=c[d++]}return new qe(f,h,u)}if(this.index===null)return Zt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,i);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let f=c[h],d=t(f,i);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let d=c[u];h.push(d.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Jo=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=af,this.updateRanges=[],this.version=0,this.uuid=ks()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});let e=a0(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=this.array.slice(0).buffer);let i=new this.array.constructor(t.arrayBuffers[e]),s=new this.constructor(i,this.stride);return s.setUsage(this.usage),s}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});let e=a0(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let i={uuid:this.uuid,buffer:e,type:this.array.constructor.name,stride:this.stride};return i.usage=this.usage,i}};function a0(n){return n.buffer._uuid===void 0&&(n.buffer._uuid=ks()),n.byteOffset===0&&n.byteLength===n.buffer.byteLength?n.buffer._uuid:n.buffer._uuid+":"+n.byteOffset+":"+n.byteLength}var On=new $,to=class n{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s,this._normalizationScale=t!==void 0?oh(t.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)On.fromBufferAttribute(this,e),On.applyMatrix4(t),this.setXYZ(e,On.x,On.y,On.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)On.fromBufferAttribute(this,e),On.applyNormalMatrix(t),this.setXYZ(e,On.x,On.y,On.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)On.fromBufferAttribute(this,e),On.transformDirection(t),this.setXYZ(e,On.x,On.y,On.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=this._denormalize(i)),i}setComponent(t,e,i){return this.normalized&&(i=this._normalize(i)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=this._denormalize(e)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=this._denormalize(e)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=this._denormalize(e)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=this._denormalize(e)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),i=this._normalize(i)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),i=this._normalize(i),s=this._normalize(s)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),i=this._normalize(i),s=this._normalize(s),r=this._normalize(r)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){Xo("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new qe(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new n(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Xo("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):dp(t,this.data.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):pp(t,this.data.array)}},xu=new $,bx=new $,Sx=new ee,Ei=class{constructor(t=new $(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=xu.subVectors(i,e).cross(bx.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){let s=t.delta(xu),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return i===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||Sx.getNormalMatrix(t),s=this.coplanarPoint(xu).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Tx=0,Ai=class extends Oi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Tx++}),this.uuid=ks(),this.name="",this.type="Material",this.blending=lo,this.side=Gi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Vu,this.blendDst=Gu,this.blendEquation=ur,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xt(0,0,0),this.blendAlpha=0,this.depthFunc=Zr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=np,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ul,this.stencilZFail=Ul,this.stencilZPass=Ul,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){Zt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Zt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Xt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new Ei().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new gt().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new gt().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},sr=class extends Ai{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Xt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Br,Io=new $,Hr=new $,Vr=new $,Gr=new gt,Lo=new gt,gp=new ye,dl=new $,No=new $,pl=new $,l0=new gt,yu=new gt,c0=new gt,eo=class extends Be{constructor(t=new sr){if(super(),this.isSprite=!0,this.type="Sprite",Br===void 0){Br=new Ue;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Jo(e,5);Br.setIndex([0,1,2,0,2,3]),Br.setAttribute("position",new to(i,3,0,!1)),Br.setAttribute("uv",new to(i,2,3,!1))}this.geometry=Br,this.material=t,this.center=new gt(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&Kt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Hr.setFromMatrixScale(this.matrixWorld),gp.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Vr.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Hr.multiplyScalar(-Vr.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let o=this.center;ml(dl.set(-.5,-.5,0),Vr,o,Hr,s,r),ml(No.set(.5,-.5,0),Vr,o,Hr,s,r),ml(pl.set(.5,.5,0),Vr,o,Hr,s,r),l0.set(0,0),yu.set(1,0),c0.set(1,1);let a=t.ray.intersectTriangle(dl,No,pl,!1,Io);if(a===null&&(ml(No.set(-.5,.5,0),Vr,o,Hr,s,r),yu.set(0,1),a=t.ray.intersectTriangle(dl,pl,No,!1,Io),a===null))return;let l=t.ray.origin.distanceTo(Io);l<t.near||l>t.far||e.push({distance:l,point:Io.clone(),uv:rs.getInterpolation(Io,dl,No,pl,l0,yu,c0,new gt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}toJSON(t){let e=super.toJSON(t);return e.object.center=this.center.toArray(),e}};function ml(n,t,e,i,s,r){Gr.subVectors(n,e).addScalar(.5).multiply(i),s!==void 0?(Lo.x=r*Gr.x-s*Gr.y,Lo.y=s*Gr.x+r*Gr.y):Lo.copy(Gr),n.copy(t),n.x+=Lo.x,n.y+=Lo.y,n.applyMatrix4(gp)}var ss=new $,vu=new $,gl=new $,xl=new $,jo=class{constructor(t=new $,e=new $(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ss)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=ss.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ss.copy(this.origin).addScaledVector(this.direction,e),ss.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){vu.copy(t).add(e).multiplyScalar(.5),gl.copy(e).sub(t).normalize(),xl.copy(this.origin).sub(vu);let r=t.distanceTo(e)*.5,o=-this.direction.dot(gl),a=xl.dot(this.direction),l=-xl.dot(gl),c=xl.lengthSq(),h=Math.abs(1-o*o),u,f,d,p;if(h>0)if(u=o*l-a,f=o*a-l,p=r*h,u>=0)if(f>=-p)if(f<=p){let v=1/h;u*=v,f*=v,d=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f<=-p?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c):f<=p?(u=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(vu).addScaledVector(gl,f),d}intersectSphere(t,e){if(t.radius<0)return null;ss.subVectors(t.center,this.origin);let i=ss.dot(this.direction),s=ss.dot(ss)-i*i,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(i=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(i=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,ss)!==null}intersectTriangle(t,e,i,s,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,u=t.x-o.x,f=t.y-o.y,d=t.z-o.z,p=e.x-o.x,v=e.y-o.y,g=e.z-o.z,m=i.x-o.x,y=i.y-o.y,b=i.z-o.z,M=Math.abs(l),R=Math.abs(c),T=Math.abs(h),x,_,A,S,C,I,w,P,O,W,q,B;if(M>=R&&M>=T?(A=l,I=u,O=p,B=m,l>=0?(x=c,_=h,S=f,C=d,w=v,P=g,W=y,q=b):(x=h,_=c,S=d,C=f,w=g,P=v,W=b,q=y)):R>=T?(A=c,I=f,O=v,B=y,c>=0?(x=h,_=l,S=d,C=u,w=g,P=p,W=b,q=m):(x=l,_=h,S=u,C=d,w=p,P=g,W=m,q=b)):(A=h,I=d,O=g,B=b,h>=0?(x=l,_=c,S=u,C=f,w=p,P=v,W=m,q=y):(x=c,_=l,S=f,C=u,w=v,P=p,W=y,q=m)),A===0)return null;let U=x/A,H=_/A,E=1/A,F=S-U*I,G=C-H*I,z=w-U*O,N=P-H*O,V=W-U*B,Z=q-H*B,J=V*N-Z*z,it=F*Z-G*V,ut=z*G-N*F;if(s){if(J<0||it<0||ut<0)return null}else if((J<0||it<0||ut<0)&&(J>0||it>0||ut>0))return null;let Tt=J+it+ut;if(Tt===0)return null;let Dt=E*(J*I+it*O+ut*B);return(Tt>0?Dt<0:Dt>0)?null:this.at(Dt/Tt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},je=class extends Ai{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Xt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ui,this.combine=vc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},h0=new ye,er=new jo,yl=new ls,u0=new $,vl=new $,_l=new $,Ml=new $,_u=new $,bl=new $,f0=new $,Sl=new $,zt=class extends Be{constructor(t=new Ue,e=new je){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){bl.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(_u.fromBufferAttribute(u,t),o?bl.addScaledVector(_u,h):bl.addScaledVector(_u.sub(e),h))}e.add(bl)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),yl.copy(i.boundingSphere),yl.applyMatrix4(r),er.copy(t.ray).recast(t.near),!(yl.containsPoint(er.origin)===!1&&(er.intersectSphere(yl,u0)===null||er.origin.distanceToSquared(u0)>(t.far-t.near)**2))&&(h0.copy(r).invert(),er.copy(t.ray).applyMatrix4(h0),!(i.boundingBox!==null&&er.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,er)))}_computeIntersections(t,e,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,v=f.length;p<v;p++){let g=f[p],m=o[g.materialIndex],y=Math.max(g.start,d.start),b=Math.min(a.count,Math.min(g.start+g.count,d.start+d.count));for(let M=y,R=b;M<R;M+=3){let T=a.getX(M),x=a.getX(M+1),_=a.getX(M+2);s=Tl(this,m,t,i,c,h,u,T,x,_),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let p=Math.max(0,d.start),v=Math.min(a.count,d.start+d.count);for(let g=p,m=v;g<m;g+=3){let y=a.getX(g),b=a.getX(g+1),M=a.getX(g+2);s=Tl(this,o,t,i,c,h,u,y,b,M),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,v=f.length;p<v;p++){let g=f[p],m=o[g.materialIndex],y=Math.max(g.start,d.start),b=Math.min(l.count,Math.min(g.start+g.count,d.start+d.count));for(let M=y,R=b;M<R;M+=3){let T=M,x=M+1,_=M+2;s=Tl(this,m,t,i,c,h,u,T,x,_),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let p=Math.max(0,d.start),v=Math.min(l.count,d.start+d.count);for(let g=p,m=v;g<m;g+=3){let y=g,b=g+1,M=g+2;s=Tl(this,o,t,i,c,h,u,y,b,M),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}};function wx(n,t,e,i,s,r,o,a){let l;if(t.side===mn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,t.side===Gi,a),l===null)return null;Sl.copy(a),Sl.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(Sl);return c<e.near||c>e.far?null:{distance:c,point:Sl.clone(),object:n}}function Tl(n,t,e,i,s,r,o,a,l,c){n.getVertexPosition(a,vl),n.getVertexPosition(l,_l),n.getVertexPosition(c,Ml);let h=wx(n,t,e,i,vl,_l,Ml,f0);if(h){let u=new $;rs.getBarycoord(f0,vl,_l,Ml,u),s&&(h.uv=rs.getInterpolatedAttribute(s,a,l,c,u,new gt)),r&&(h.uv1=rs.getInterpolatedAttribute(r,a,l,c,u,new gt)),o&&(h.normal=rs.getInterpolatedAttribute(o,a,l,c,u,new $),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new $,materialIndex:0};rs.getNormal(vl,_l,Ml,f.normal),h.face=f,h.barycoord=u}return h}var rr=class extends zn{constructor(t=null,e=1,i=1,s,r,o,a,l,c=Mn,h=Mn,u,f){super(null,o,a,l,c,h,s,r,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Bi=class extends qe{constructor(t,e,i,s=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Wr=new ye,d0=new ye,wl=[],p0=new zi,Ex=new ye,Do=new zt,Uo=new ls,Bn=class extends zt{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Bi(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,Ex)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new zi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Wr),p0.copy(t.boundingBox).applyMatrix4(Wr),this.boundingBox.union(p0)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new ls),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Wr),Uo.copy(t.boundingSphere).applyMatrix4(Wr),this.boundingSphere.union(Uo)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),this.morphTexture=t.morphTexture!==null?t.morphTexture.clone():null,this.instanceColor=t.instanceColor!==null?t.instanceColor.clone():null,this.count=t.count,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let i=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=t*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(t,e){let i=this.matrixWorld,s=this.count;if(Do.geometry=this.geometry,Do.material=this.material,Do.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Uo.copy(this.boundingSphere),Uo.applyMatrix4(i),t.ray.intersectsSphere(Uo)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Wr),d0.multiplyMatrices(i,Wr),Do.matrixWorld=d0,Do.raycast(t,wl);for(let o=0,a=wl.length;o<a;o++){let l=wl[o];l.instanceId=r,l.object=this,e.push(l)}wl.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Bi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let i=e.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new rr(new Float32Array(s*this.count),s,this.count,Ec,mi));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<i.length;c++)o+=i[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;return r[l]=a,r.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},nr=new ls,Ax=new gt(.5,.5),El=new $,Cs=class{constructor(t=new Ei,e=new Ei,i=new Ei,s=new Ei,r=new Ei,o=new Ei){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=hi,i=!1){let s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],u=r[5],f=r[6],d=r[7],p=r[8],v=r[9],g=r[10],m=r[11],y=r[12],b=r[13],M=r[14],R=r[15];if(s[0].setComponents(c-o,d-h,m-p,R-y).normalize(),s[1].setComponents(c+o,d+h,m+p,R+y).normalize(),s[2].setComponents(c+a,d+u,m+v,R+b).normalize(),s[3].setComponents(c-a,d-u,m-v,R-b).normalize(),i)s[4].setComponents(l,f,g,M).normalize(),s[5].setComponents(c-l,d-f,m-g,R-M).normalize();else if(s[4].setComponents(c-l,d-f,m-g,R-M).normalize(),e===hi)s[5].setComponents(c+l,d+f,m+g,R+M).normalize();else if(e===Kr)s[5].setComponents(l,f,g,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),nr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),nr.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(nr)}intersectsSprite(t){nr.center.set(0,0,0);let e=Ax.distanceTo(t.center);return nr.radius=.7071067811865476+e,nr.applyMatrix4(t.matrixWorld),this.intersectsSphere(nr)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(El.x=s.normal.x>0?t.max.x:t.min.x,El.y=s.normal.y>0?t.max.y:t.min.y,El.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(El)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},m0=new ye,Zl=class n{constructor(){this.coordinateSystem=hi,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,i=this._frustums;for(let s=0;s<e.length;s++){let r=e[s];m0.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),i[s]===void 0&&(i[s]=new Cs),i[s].setFromProjectionMatrix(m0,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,i=t._frustums;for(let s=0;s<t._count;s++)e[s]===void 0&&(e[s]=new Cs),e[s].copy(i[s]);return this._count=t._count,this}clone(){return new n().copy(this)}};var no=class extends Ai{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Xt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Kl=new $,Jl=new $,g0=new ye,Fo=new jo,Al=new ls,Mu=new $,x0=new $,Qo=class extends Be{constructor(t=new Ue,e=new no){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[0];for(let s=1,r=e.count;s<r;s++)Kl.fromBufferAttribute(e,s-1),Jl.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=Kl.distanceTo(Jl);t.setAttribute("lineDistance",new te(i,1))}else Zt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Al.copy(i.boundingSphere),Al.applyMatrix4(s),Al.radius+=r,t.ray.intersectsSphere(Al)===!1)return;g0.copy(s).invert(),Fo.copy(t.ray).applyMatrix4(g0);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=i.index,f=i.attributes.position;if(h!==null){let d=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let v=d,g=p-1;v<g;v+=c){let m=h.getX(v),y=h.getX(v+1),b=Rl(this,t,Fo,l,m,y,v);b&&e.push(b)}if(this.isLineLoop){let v=h.getX(p-1),g=h.getX(d),m=Rl(this,t,Fo,l,v,g,p-1);m&&e.push(m)}}else{let d=Math.max(0,o.start),p=Math.min(f.count,o.start+o.count);for(let v=d,g=p-1;v<g;v+=c){let m=Rl(this,t,Fo,l,v,v+1,v);m&&e.push(m)}if(this.isLineLoop){let v=Rl(this,t,Fo,l,p-1,d,p-1);v&&e.push(v)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Rl(n,t,e,i,s,r,o){let a=n.geometry.attributes.position;if(Kl.fromBufferAttribute(a,s),Jl.fromBufferAttribute(a,r),e.distanceSqToSegment(Kl,Jl,Mu,x0)>i)return;Mu.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(Mu);if(!(c<t.near||c>t.far))return{distance:c,point:x0.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}var ta=class extends zn{constructor(t=[],e=fr,i,s,r,o,a,l,c,h){super(t,e,i,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},ti=class extends zn{constructor(t,e,i,s,r,o,a,l,c){super(t,e,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var cs=class extends zn{constructor(t,e,i=Ci,s,r,o,a=Mn,l=Mn,c,h=as,u=1){if(h!==as&&h!==fs)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:t,height:e,depth:u};super(f,s,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new jr(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},ea=class extends cs{constructor(t,e=Ci,i=fr,s,r,o=Mn,a=Mn,l,c=as){let h={width:t,height:t,depth:1},u=[h,h,h,h,h,h];super(t,t,e,i,s,r,o,a,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},na=class extends zn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Fe=class n extends Ue{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],f=0,d=0;p("z","y","x",-1,-1,i,e,t,o,r,0),p("z","y","x",1,-1,i,e,-t,o,r,1),p("x","z","y",1,1,t,i,e,s,o,2),p("x","z","y",1,-1,t,i,-e,s,o,3),p("x","y","z",1,-1,t,e,i,s,r,4),p("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new te(c,3)),this.setAttribute("normal",new te(h,3)),this.setAttribute("uv",new te(u,2));function p(v,g,m,y,b,M,R,T,x,_,A){let S=M/x,C=R/_,I=M/2,w=R/2,P=T/2,O=x+1,W=_+1,q=0,B=0,U=new $;for(let H=0;H<W;H++){let E=H*C-w;for(let F=0;F<O;F++){let G=F*S-I;U[v]=G*y,U[g]=E*b,U[m]=P,c.push(U.x,U.y,U.z),U[v]=0,U[g]=0,U[m]=T>0?1:-1,h.push(U.x,U.y,U.z),u.push(F/x),u.push(1-H/_),q+=1}}for(let H=0;H<_;H++)for(let E=0;E<x;E++){let F=f+E+O*H,G=f+E+O*(H+1),z=f+(E+1)+O*(H+1),N=f+(E+1)+O*H;l.push(F,G,N),l.push(G,z,N),B+=6}a.addGroup(d,B,A),d+=B,f+=q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},ia=class n extends Ue{constructor(t=1,e=1,i=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:i,radialSegments:s,heightSegments:r},e=Math.max(0,e),i=Math.max(1,Math.floor(i)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let o=[],a=[],l=[],c=[],h=e/2,u=Math.PI/2*t,f=e,d=2*u+f,p=i*2+r,v=s+1,g=new $,m=new $;for(let y=0;y<=p;y++){let b=0,M=0,R=0,T=0;if(y<=i){let A=y/i,S=A*Math.PI/2;M=-h-t*Math.cos(S),R=t*Math.sin(S),T=-t*Math.cos(S),b=A*u}else if(y<=i+r){let A=(y-i)/r;M=-h+A*e,R=t,T=0,b=u+A*f}else{let A=(y-i-r)/i,S=A*Math.PI/2;M=h+t*Math.sin(S),R=t*Math.cos(S),T=t*Math.sin(S),b=u+f+A*u}let x=Math.max(0,Math.min(1,b/d)),_=0;y===0?_=.5/s:y===p&&(_=-.5/s);for(let A=0;A<=s;A++){let S=A/s,C=S*Math.PI*2,I=Math.sin(C),w=Math.cos(C);m.x=-R*w,m.y=M,m.z=R*I,a.push(m.x,m.y,m.z),g.set(-R*w,T,R*I),g.normalize(),l.push(g.x,g.y,g.z),c.push(S+_,x)}if(y>0){let A=(y-1)*v;for(let S=0;S<s;S++){let C=A+S,I=A+S+1,w=y*v+S,P=y*v+S+1;o.push(C,I,w),o.push(I,P,w)}}}this.setIndex(o),this.setAttribute("position",new te(a,3)),this.setAttribute("normal",new te(l,3)),this.setAttribute("uv",new te(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},Ps=class n extends Ue{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],l=[],c=new $,h=new gt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){let d=i+u/e*s;c.x=t*Math.cos(d),c.y=t*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[f]/t+1)/2,h.y=(o[f+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new te(o,3)),this.setAttribute("normal",new te(a,3)),this.setAttribute("uv",new te(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Hn=class n extends Ue{constructor(t=1,e=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],f=[],d=[],p=0,v=[],g=i/2,m=0;y(),o===!1&&(t>0&&b(!0),e>0&&b(!1)),this.setIndex(h),this.setAttribute("position",new te(u,3)),this.setAttribute("normal",new te(f,3)),this.setAttribute("uv",new te(d,2));function y(){let M=new $,R=new $,T=0,x=(e-t)/i;for(let _=0;_<=r;_++){let A=[],S=_/r,C=S*(e-t)+t;for(let I=0;I<=s;I++){let w=I/s,P=w*l+a,O=Math.sin(P),W=Math.cos(P);R.x=C*O,R.y=-S*i+g,R.z=C*W,u.push(R.x,R.y,R.z),M.set(O,x,W).normalize(),f.push(M.x,M.y,M.z),d.push(w,1-S),A.push(p++)}v.push(A)}for(let _=0;_<s;_++)for(let A=0;A<r;A++){let S=v[A][_],C=v[A+1][_],I=v[A+1][_+1],w=v[A][_+1];(t>0||A!==0)&&(h.push(S,C,w),T+=3),(e>0||A!==r-1)&&(h.push(C,I,w),T+=3)}c.addGroup(m,T,0),m+=T}function b(M){let R=p,T=new gt,x=new $,_=0,A=M===!0?t:e,S=M===!0?1:-1;for(let I=1;I<=s;I++)u.push(0,g*S,0),f.push(0,S,0),d.push(.5,.5),p++;let C=p;for(let I=0;I<=s;I++){let P=I/s*l+a,O=Math.cos(P),W=Math.sin(P);x.x=A*W,x.y=g*S,x.z=A*O,u.push(x.x,x.y,x.z),f.push(0,S,0),T.x=O*.5+.5,T.y=W*.5*S+.5,d.push(T.x,T.y),p++}for(let I=0;I<s;I++){let w=R+I,P=C+I;M===!0?h.push(P,P+1,w):h.push(P+1,P,w),_+=3}c.addGroup(m,_,M===!0?1:2),m+=_}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},hs=class n extends Hn{constructor(t=1,e=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new n(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},sa=class n extends Ue{constructor(t=[],e=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:s};let r=[],o=[];a(s),c(i),h(),this.setAttribute("position",new te(r,3)),this.setAttribute("normal",new te(r.slice(),3)),this.setAttribute("uv",new te(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(y){let b=new $,M=new $,R=new $;for(let T=0;T<e.length;T+=3)d(e[T+0],b),d(e[T+1],M),d(e[T+2],R),l(b,M,R,y)}function l(y,b,M,R){let T=R+1,x=[];for(let _=0;_<=T;_++){x[_]=[];let A=y.clone().lerp(M,_/T),S=b.clone().lerp(M,_/T),C=T-_;for(let I=0;I<=C;I++)I===0&&_===T?x[_][I]=A:x[_][I]=A.clone().lerp(S,I/C)}for(let _=0;_<T;_++)for(let A=0;A<2*(T-_)-1;A++){let S=Math.floor(A/2);A%2===0?(f(x[_][S+1]),f(x[_+1][S]),f(x[_][S])):(f(x[_][S+1]),f(x[_+1][S+1]),f(x[_+1][S]))}}function c(y){let b=new $;for(let M=0;M<r.length;M+=3)b.x=r[M+0],b.y=r[M+1],b.z=r[M+2],b.normalize().multiplyScalar(y),r[M+0]=b.x,r[M+1]=b.y,r[M+2]=b.z}function h(){let y=new $;for(let b=0;b<r.length;b+=3){y.x=r[b+0],y.y=r[b+1],y.z=r[b+2];let M=g(y)/2/Math.PI+.5,R=m(y)/Math.PI+.5;o.push(M,1-R)}p(),u()}function u(){for(let y=0;y<o.length;y+=6){let b=o[y+0],M=o[y+2],R=o[y+4],T=Math.max(b,M,R),x=Math.min(b,M,R);T>.9&&x<.1&&(b<.2&&(o[y+0]+=1),M<.2&&(o[y+2]+=1),R<.2&&(o[y+4]+=1))}}function f(y){r.push(y.x,y.y,y.z)}function d(y,b){let M=y*3;b.x=t[M+0],b.y=t[M+1],b.z=t[M+2]}function p(){let y=new $,b=new $,M=new $,R=new $,T=new gt,x=new gt,_=new gt;for(let A=0,S=0;A<r.length;A+=9,S+=6){y.set(r[A+0],r[A+1],r[A+2]),b.set(r[A+3],r[A+4],r[A+5]),M.set(r[A+6],r[A+7],r[A+8]),T.set(o[S+0],o[S+1]),x.set(o[S+2],o[S+3]),_.set(o[S+4],o[S+5]),R.copy(y).add(b).add(M).divideScalar(3);let C=g(R);v(T,S+0,y,C),v(x,S+2,b,C),v(_,S+4,M,C)}}function v(y,b,M,R){R<0&&y.x===1&&(o[b]=y.x-1),M.x===0&&M.z===0&&(o[b]=R/2/Math.PI+.5)}function g(y){return Math.atan2(y.z,-y.x)}function m(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.vertices,t.indices,t.radius,t.detail)}};var ei=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Zt("Curve: .getPoint() not implemented.")}getPointAt(t,e){let i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],i,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)i=this.getPoint(o/t),r+=i.distanceTo(s),e.push(r),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let i=this.getLengths(),s=0,r=i.length,o;e?o=e:o=t*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);let h=i[s],f=i[s+1]-h,d=(o-h)/f;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new gt:new $);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e=!1){let i=new $,s=[],r=[],o=[],a=new $,l=new ye;for(let d=0;d<=t;d++){let p=d/t;s[d]=this.getTangentAt(p,new $)}r[0]=new $,o[0]=new $;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),f<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(fe(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,p))}o[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(fe(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(d=-d);for(let p=1;p<=t;p++)r[p].applyMatrix4(l.makeRotationAxis(s[p],d*p)),o[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}},io=class extends ei{constructor(t=0,e=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new gt){let i=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*u+this.aX,c=f*u+d*h+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},jl=class extends io{constructor(t,e,i,s,r,o){super(t,e,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function cf(){let n=0,t=0,e=0,i=0;function s(r,o,a,l){n=r,t=a,e=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let f=(o-r)/c-(a-r)/(c+h)+(a-o)/h,d=(a-o)/h-(l-o)/(h+u)+(l-a)/u;f*=h,d*=h,s(o,a,f,d)},calc:function(r){let o=r*r,a=o*r;return n+t*r+e*o+i*a}}}var y0=new $,v0=new $,bu=new cf,Su=new cf,Tu=new cf,Ql=class extends ei{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new $){let i=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(v0.subVectors(s[0],s[1]).add(s[0]),c=v0);let u=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(y0.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=y0),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(u),d),v=Math.pow(u.distanceToSquared(f),d),g=Math.pow(f.distanceToSquared(h),d);v<1e-4&&(v=1),p<1e-4&&(p=v),g<1e-4&&(g=v),bu.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,p,v,g),Su.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,p,v,g),Tu.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,p,v,g)}else this.curveType==="catmullrom"&&(bu.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),Su.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),Tu.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return i.set(bu.calc(l),Su.calc(l),Tu.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new $().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function _0(n,t,e,i,s){let r=(i-t)*.5,o=(s-e)*.5,a=n*n,l=n*a;return(2*e-2*i+r+o)*l+(-3*e+3*i-2*r-o)*a+r*n+e}function Rx(n,t){let e=1-n;return e*e*t}function Cx(n,t){return 2*(1-n)*n*t}function Px(n,t){return n*n*t}function zo(n,t,e,i){return Rx(n,t)+Cx(n,e)+Px(n,i)}function Ix(n,t){let e=1-n;return e*e*e*t}function Lx(n,t){let e=1-n;return 3*e*e*n*t}function Nx(n,t){return 3*(1-n)*n*n*t}function Dx(n,t){return n*n*n*t}function Bo(n,t,e,i,s){return Ix(n,t)+Lx(n,e)+Nx(n,i)+Dx(n,s)}var ra=class extends ei{constructor(t=new gt,e=new gt,i=new gt,s=new gt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new gt){let i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Bo(t,s.x,r.x,o.x,a.x),Bo(t,s.y,r.y,o.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},tc=class extends ei{constructor(t=new $,e=new $,i=new $,s=new $){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new $){let i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Bo(t,s.x,r.x,o.x,a.x),Bo(t,s.y,r.y,o.y,a.y),Bo(t,s.z,r.z,o.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},oa=class extends ei{constructor(t=new gt,e=new gt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new gt){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new gt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ec=class extends ei{constructor(t=new $,e=new $){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new $){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new $){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},aa=class extends ei{constructor(t=new gt,e=new gt,i=new gt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new gt){let i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(zo(t,s.x,r.x,o.x),zo(t,s.y,r.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},nc=class extends ei{constructor(t=new $,e=new $,i=new $){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new $){let i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(zo(t,s.x,r.x,o.x),zo(t,s.y,r.y,o.y),zo(t,s.z,r.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},la=class extends ei{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new gt){let i=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return i.set(_0(a,l.x,c.x,h.x,u.x),_0(a,l.y,c.y,h.y,u.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new gt().fromArray(s))}return this}},Pu=Object.freeze({__proto__:null,ArcCurve:jl,CatmullRomCurve3:Ql,CubicBezierCurve:ra,CubicBezierCurve3:tc,EllipseCurve:io,LineCurve:oa,LineCurve3:ec,QuadraticBezierCurve:aa,QuadraticBezierCurve3:nc,SplineCurve:la}),ic=class extends ei{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Pu[i](e,t))}return this}getPoint(t,e){let i=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let o=s[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let i=0,s=this.curves.length;i<s;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],i;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(e.push(h),i=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this.cacheLengths=null,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(new Pu[s.type]().fromJSON(s))}return this.cacheLengths=null,this}},ca=class extends ic{constructor(t){super(),this.type="Path",this.currentPoint=new gt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let i=new oa(this.currentPoint.clone(),new gt(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,s){let r=new aa(this.currentPoint.clone(),new gt(t,e),new gt(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(t,e,i,s,r,o){let a=new ra(this.currentPoint.clone(),new gt(t,e),new gt(i,s),new gt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),i=new la(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,i,s,r,o),this}absarc(t,e,i,s,r,o){return this.absellipse(t,e,i,i,s,r,o),this}ellipse(t,e,i,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,i,s,r,o,a,l),this}absellipse(t,e,i,s,r,o,a,l){let c=new io(t,e,i,s,r,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},so=class extends ca{constructor(t){super(t),this.uuid=ks(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let i=0,s=this.holes.length;i<s;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let s=t.holes[e];this.holes.push(new ca().fromJSON(s))}return this}};function Ux(n,t,e=2){let i=t&&t.length,s=i?t[0]*e:n.length,r=xp(n,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(i&&(r=Bx(n,t,r,e)),n.length>80*e){a=n[0],l=n[1];let h=a,u=l;for(let f=e;f<s;f+=e){let d=n[f],p=n[f+1];d<a&&(a=d),p<l&&(l=p),d>h&&(h=d),p>u&&(u=p)}c=Math.max(h-a,u-l),c=c!==0?32767/c:0}return ha(r,o,e,a,l,c,0),o}function xp(n,t,e,i,s){let r;if(s===Jx(n,t,e,i)>0)for(let o=t;o<e;o+=i)r=M0(o/i|0,n[o],n[o+1],r);else for(let o=e-i;o>=t;o-=i)r=M0(o/i|0,n[o],n[o+1],r);return r&&ro(r,r.next)&&(fa(r),r=r.next),r}function or(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(ro(e,e.next)||Je(e.prev,e,e.next)===0)){if(fa(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function ha(n,t,e,i,s,r,o){if(!n)return;!o&&r&&Xx(n,i,s,r);let a=n;for(;n.prev!==n.next;){let l=n.prev,c=n.next;if(r?kx(n,i,s,r):Fx(n)){t.push(l.i,n.i,c.i),fa(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=Ox(or(n),t),ha(n,t,e,i,s,r,2)):o===2&&zx(n,t,e,i,s,r):ha(or(n),t,e,i,s,r,1);break}}}function Fx(n){let t=n.prev,e=n,i=n.next;if(Je(t,e,i)>=0)return!1;let s=t.x,r=e.x,o=i.x,a=t.y,l=e.y,c=i.y,h=Math.min(s,r,o),u=Math.min(a,l,c),f=Math.max(s,r,o),d=Math.max(a,l,c),p=i.next;for(;p!==t;){if(p.x>=h&&p.x<=f&&p.y>=u&&p.y<=d&&ko(s,a,r,l,o,c,p.x,p.y)&&Je(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function kx(n,t,e,i){let s=n.prev,r=n,o=n.next;if(Je(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,u=r.y,f=o.y,d=Math.min(a,l,c),p=Math.min(h,u,f),v=Math.max(a,l,c),g=Math.max(h,u,f),m=Iu(d,p,t,e,i),y=Iu(v,g,t,e,i),b=n.prevZ,M=n.nextZ;for(;b&&b.z>=m&&M&&M.z<=y;){if(b.x>=d&&b.x<=v&&b.y>=p&&b.y<=g&&b!==s&&b!==o&&ko(a,h,l,u,c,f,b.x,b.y)&&Je(b.prev,b,b.next)>=0||(b=b.prevZ,M.x>=d&&M.x<=v&&M.y>=p&&M.y<=g&&M!==s&&M!==o&&ko(a,h,l,u,c,f,M.x,M.y)&&Je(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;b&&b.z>=m;){if(b.x>=d&&b.x<=v&&b.y>=p&&b.y<=g&&b!==s&&b!==o&&ko(a,h,l,u,c,f,b.x,b.y)&&Je(b.prev,b,b.next)>=0)return!1;b=b.prevZ}for(;M&&M.z<=y;){if(M.x>=d&&M.x<=v&&M.y>=p&&M.y<=g&&M!==s&&M!==o&&ko(a,h,l,u,c,f,M.x,M.y)&&Je(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function Ox(n,t){let e=n;do{let i=e.prev,s=e.next.next;!ro(i,s)&&vp(i,e,e.next,s)&&ua(i,s)&&ua(s,i)&&(t.push(i.i,e.i,s.i),fa(e),fa(e.next),e=n=s),e=e.next}while(e!==n);return or(e)}function zx(n,t,e,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Yx(o,a)){let l=_p(o,a);o=or(o,o.next),l=or(l,l.next),ha(o,t,e,i,s,r,0),ha(l,t,e,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function Bx(n,t,e,i){let s=[];for(let r=0,o=t.length;r<o;r++){let a=t[r]*i,l=r<o-1?t[r+1]*i:n.length,c=xp(n,a,l,i,!1);c===c.next&&(c.steiner=!0),s.push($x(c))}s.sort(Hx);for(let r=0;r<s.length;r++)e=Vx(s[r],e);return e}function Hx(n,t){let e=n.x-t.x;if(e===0&&(e=n.y-t.y,e===0)){let i=(n.next.y-n.y)/(n.next.x-n.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=i-s}return e}function Vx(n,t){let e=Gx(n,t);if(!e)return t;let i=_p(e,n);return or(i,i.next),or(e,e.next)}function Gx(n,t){let e=t,i=n.x,s=n.y,r=-1/0,o;if(ro(n,e))return e;do{if(ro(n,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let u=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=i&&u>r&&(r=u,o=e.x<e.next.x?e:e.next,u===i))return o}e=e.next}while(e!==t);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;e=o;do{if(i>=e.x&&e.x>=l&&i!==e.x&&yp(s<c?i:r,s,l,c,s<c?r:i,s,e.x,e.y)){let u=Math.abs(s-e.y)/(i-e.x);ua(e,n)&&(u<h||u===h&&(e.x>o.x||e.x===o.x&&Wx(o,e)))&&(o=e,h=u)}e=e.next}while(e!==a);return o}function Wx(n,t){return Je(n.prev,n,t.prev)<0&&Je(t.next,n,n.next)<0}function Xx(n,t,e,i){let s=n;do s.z===0&&(s.z=Iu(s.x,s.y,t,e,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,qx(s)}function qx(n){let t,e=1;do{let i=n,s;n=null;let r=null;for(t=0;i;){t++;let o=i,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||i.z<=o.z)?(s=i,i=i.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=o}r.nextZ=null,e*=2}while(t>1);return n}function Iu(n,t,e,i,s){return n=(n-e)*s|0,t=(t-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function $x(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function yp(n,t,e,i,s,r,o,a){return(s-o)*(t-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(i-a)}function ko(n,t,e,i,s,r,o,a){return!(n===o&&t===a)&&yp(n,t,e,i,s,r,o,a)}function Yx(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!Zx(n,t)&&(ua(n,t)&&ua(t,n)&&Kx(n,t)&&(Je(n.prev,n,t.prev)||Je(n,t.prev,t))||ro(n,t)&&Je(n.prev,n,n.next)>0&&Je(t.prev,t,t.next)>0)}function Je(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function ro(n,t){return n.x===t.x&&n.y===t.y}function vp(n,t,e,i){let s=Pl(Je(n,t,e)),r=Pl(Je(n,t,i)),o=Pl(Je(e,i,n)),a=Pl(Je(e,i,t));return!!(s!==r&&o!==a||s===0&&Cl(n,e,t)||r===0&&Cl(n,i,t)||o===0&&Cl(e,n,i)||a===0&&Cl(e,t,i))}function Cl(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function Pl(n){return n>0?1:n<0?-1:0}function Zx(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&vp(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function ua(n,t){return Je(n.prev,n,n.next)<0?Je(n,t,n.next)>=0&&Je(n,n.prev,t)>=0:Je(n,t,n.prev)<0||Je(n,n.next,t)<0}function Kx(n,t){let e=n,i=!1,s=(n.x+t.x)/2,r=(n.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function _p(n,t){let e=Lu(n.i,n.x,n.y),i=Lu(t.i,t.x,t.y),s=n.next,r=t.prev;return n.next=t,t.prev=n,e.next=s,s.prev=e,i.next=e,e.prev=i,r.next=i,i.prev=r,i}function M0(n,t,e,i){let s=Lu(n,t,e);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function fa(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Lu(n,t,e){return{i:n,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Jx(n,t,e,i){let s=0;for(let r=t,o=e-i;r<e;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}var Nu=class{static triangulate(t,e,i=2){return Ux(t,e,i)}},ir=class n{static area(t){let e=t.length,i=0;for(let s=e-1,r=0;r<e;s=r++)i+=t[s].x*t[r].y-t[r].x*t[s].y;return i*.5}static isClockWise(t){return n.area(t)<0}static triangulateShape(t,e){let i=[],s=[],r=[];b0(t),S0(i,t);let o=t.length;e.forEach(b0);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,S0(i,e[l]);let a=Nu.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function b0(n){let t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function S0(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}var da=class n extends Ue{constructor(t=new so([new gt(.5,.5),new gt(-.5,.5),new gt(-.5,-.5),new gt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let i=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){let c=t[a];o(c)}this.setAttribute("position",new te(s,3)),this.setAttribute("uv",new te(r,2)),this.computeVertexNormals();function o(a){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,p=e.bevelSize!==void 0?e.bevelSize:d-.1,v=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3,m=e.extrudePath,y=e.UVGenerator!==void 0?e.UVGenerator:jx,b,M=!1,R,T,x,_;if(m){b=m.getSpacedPoints(h),M=!0,f=!1;let at=m.isCatmullRomCurve3?m.closed:!1;R=m.computeFrenetFrames(h,at),T=new $,x=new $,_=new $}f||(g=0,d=0,p=0,v=0);let A=a.extractPoints(c),S=A.shape,C=A.holes;if(!ir.isClockWise(S)){S=S.reverse();for(let at=0,ht=C.length;at<ht;at++){let dt=C[at];ir.isClockWise(dt)&&(C[at]=dt.reverse())}}function w(at){let dt=10000000000000001e-36,pt=at[0];for(let yt=1;yt<=at.length;yt++){let Gt=yt%at.length,Lt=at[Gt],ie=Lt.x-pt.x,le=Lt.y-pt.y,de=ie*ie+le*le,Q=Math.max(Math.abs(Lt.x),Math.abs(Lt.y),Math.abs(pt.x),Math.abs(pt.y)),Ze=dt*Q*Q;if(de<=Ze){at.splice(Gt,1),yt--;continue}pt=Lt}}w(S),C.forEach(w);let P=C.length,O=S;for(let at=0;at<P;at++){let ht=C[at];S=S.concat(ht)}function W(at,ht,dt){return ht||Kt("ExtrudeGeometry: vec does not exist"),at.clone().addScaledVector(ht,dt)}let q=S.length;function B(at,ht,dt){let pt,yt,Gt,Lt=at.x-ht.x,ie=at.y-ht.y,le=dt.x-at.x,de=dt.y-at.y,Q=Lt*Lt+ie*ie,Ze=Lt*de-ie*le;if(Math.abs(Ze)>Number.EPSILON){let ue=Math.sqrt(Q),Ce=Math.sqrt(le*le+de*de),Et=ht.x-ie/ue,nn=ht.y+Lt/ue,Yt=dt.x-de/Ce,jt=dt.y+le/Ce,X=((Yt-Et)*de-(jt-nn)*le)/(Lt*de-ie*le);pt=Et+Lt*X-at.x,yt=nn+ie*X-at.y;let L=pt*pt+yt*yt;if(L<=2)return new gt(pt,yt);Gt=Math.sqrt(L/2)}else{let ue=!1;Lt>Number.EPSILON?le>Number.EPSILON&&(ue=!0):Lt<-Number.EPSILON?le<-Number.EPSILON&&(ue=!0):Math.sign(ie)===Math.sign(de)&&(ue=!0),ue?(pt=-ie,yt=Lt,Gt=Math.sqrt(Q)):(pt=Lt,yt=ie,Gt=Math.sqrt(Q/2))}return new gt(pt/Gt,yt/Gt)}let U=[];for(let at=0,ht=O.length,dt=ht-1,pt=at+1;at<ht;at++,dt++,pt++)dt===ht&&(dt=0),pt===ht&&(pt=0),U[at]=B(O[at],O[dt],O[pt]);let H=[],E,F=U.concat();for(let at=0,ht=P;at<ht;at++){let dt=C[at];E=[];for(let pt=0,yt=dt.length,Gt=yt-1,Lt=pt+1;pt<yt;pt++,Gt++,Lt++)Gt===yt&&(Gt=0),Lt===yt&&(Lt=0),E[pt]=B(dt[pt],dt[Gt],dt[Lt]);H.push(E),F=F.concat(E)}let G;if(g===0)G=ir.triangulateShape(O,C);else{let at=[],ht=[];for(let dt=0;dt<g;dt++){let pt=dt/g,yt=d*Math.cos(pt*Math.PI/2),Gt=p*Math.sin(pt*Math.PI/2)+v;for(let Lt=0,ie=O.length;Lt<ie;Lt++){let le=W(O[Lt],U[Lt],Gt);it(le.x,le.y,-yt),pt===0&&at.push(le)}for(let Lt=0,ie=P;Lt<ie;Lt++){let le=C[Lt];E=H[Lt];let de=[];for(let Q=0,Ze=le.length;Q<Ze;Q++){let ue=W(le[Q],E[Q],Gt);it(ue.x,ue.y,-yt),pt===0&&de.push(ue)}pt===0&&ht.push(de)}}G=ir.triangulateShape(at,ht)}let z=G.length,N=p+v;for(let at=0;at<q;at++){let ht=f?W(S[at],F[at],N):S[at];M?(x.copy(R.normals[0]).multiplyScalar(ht.x),T.copy(R.binormals[0]).multiplyScalar(ht.y),_.copy(b[0]).add(x).add(T),it(_.x,_.y,_.z)):it(ht.x,ht.y,0)}for(let at=1;at<=h;at++)for(let ht=0;ht<q;ht++){let dt=f?W(S[ht],F[ht],N):S[ht];M?(x.copy(R.normals[at]).multiplyScalar(dt.x),T.copy(R.binormals[at]).multiplyScalar(dt.y),_.copy(b[at]).add(x).add(T),it(_.x,_.y,_.z)):it(dt.x,dt.y,u/h*at)}for(let at=g-1;at>=0;at--){let ht=at/g,dt=d*Math.cos(ht*Math.PI/2),pt=p*Math.sin(ht*Math.PI/2)+v;for(let yt=0,Gt=O.length;yt<Gt;yt++){let Lt=W(O[yt],U[yt],pt);it(Lt.x,Lt.y,u+dt)}for(let yt=0,Gt=C.length;yt<Gt;yt++){let Lt=C[yt];E=H[yt];for(let ie=0,le=Lt.length;ie<le;ie++){let de=W(Lt[ie],E[ie],pt);M?it(de.x,de.y+b[h-1].y,b[h-1].x+dt):it(de.x,de.y,u+dt)}}}V(),Z();function V(){let at=s.length/3;if(f){let ht=0,dt=q*ht;for(let pt=0;pt<z;pt++){let yt=G[pt];ut(yt[2]+dt,yt[1]+dt,yt[0]+dt)}ht=h+g*2,dt=q*ht;for(let pt=0;pt<z;pt++){let yt=G[pt];ut(yt[0]+dt,yt[1]+dt,yt[2]+dt)}}else{for(let ht=0;ht<z;ht++){let dt=G[ht];ut(dt[2],dt[1],dt[0])}for(let ht=0;ht<z;ht++){let dt=G[ht];ut(dt[0]+q*h,dt[1]+q*h,dt[2]+q*h)}}i.addGroup(at,s.length/3-at,0)}function Z(){let at=s.length/3,ht=0;J(O,ht),ht+=O.length;for(let dt=0,pt=C.length;dt<pt;dt++){let yt=C[dt];J(yt,ht),ht+=yt.length}i.addGroup(at,s.length/3-at,1)}function J(at,ht){let dt=at.length;for(;--dt>=0;){let pt=dt,yt=dt-1;yt<0&&(yt=at.length-1);for(let Gt=0,Lt=h+g*2;Gt<Lt;Gt++){let ie=q*Gt,le=q*(Gt+1),de=ht+pt+ie,Q=ht+yt+ie,Ze=ht+yt+le,ue=ht+pt+le;Tt(de,Q,Ze,ue)}}}function it(at,ht,dt){l.push(at),l.push(ht),l.push(dt)}function ut(at,ht,dt){Dt(at),Dt(ht),Dt(dt);let pt=s.length/3,yt=y.generateTopUV(i,s,pt-3,pt-2,pt-1);Wt(yt[0]),Wt(yt[1]),Wt(yt[2])}function Tt(at,ht,dt,pt){Dt(at),Dt(ht),Dt(pt),Dt(ht),Dt(dt),Dt(pt);let yt=s.length/3,Gt=y.generateSideWallUV(i,s,yt-6,yt-3,yt-2,yt-1);Wt(Gt[0]),Wt(Gt[1]),Wt(Gt[3]),Wt(Gt[1]),Wt(Gt[2]),Wt(Gt[3])}function Dt(at){s.push(l[at*3+0]),s.push(l[at*3+1]),s.push(l[at*3+2])}function Wt(at){r.push(at.x),r.push(at.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return Qx(e,i,t)}static fromJSON(t,e){let i=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];i.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Pu[s.type]().fromJSON(s)),new n(i,t.options)}},jx={generateTopUV:function(n,t,e,i,s){let r=t[e*3],o=t[e*3+1],a=t[i*3],l=t[i*3+1],c=t[s*3],h=t[s*3+1];return[new gt(r,o),new gt(a,l),new gt(c,h)]},generateSideWallUV:function(n,t,e,i,s,r){let o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[i*3],h=t[i*3+1],u=t[i*3+2],f=t[s*3],d=t[s*3+1],p=t[s*3+2],v=t[r*3],g=t[r*3+1],m=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new gt(o,1-l),new gt(c,1-u),new gt(f,1-p),new gt(v,1-m)]:[new gt(a,1-l),new gt(h,1-u),new gt(d,1-p),new gt(g,1-m)]}};function Qx(n,t,e){if(e.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){let r=n[i];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Is=class n extends sa{constructor(t=1,e=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new n(t.radius,t.detail)}};var ar=class n extends sa{constructor(t=1,e=0){let i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new n(t.radius,t.detail)}},Wn=class n extends Ue{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,u=t/a,f=e/l,d=[],p=[],v=[],g=[];for(let m=0;m<h;m++){let y=m*f-o;for(let b=0;b<c;b++){let M=b*u-r;p.push(M,-y,0),v.push(0,0,1),g.push(b/a),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let y=0;y<a;y++){let b=y+c*m,M=y+c*(m+1),R=y+1+c*(m+1),T=y+1+c*m;d.push(b,M,T),d.push(M,R,T)}this.setIndex(d),this.setAttribute("position",new te(p,3)),this.setAttribute("normal",new te(v,3)),this.setAttribute("uv",new te(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}};var fi=class n extends Ue{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new $,f=new $,d=[],p=[],v=[],g=[];for(let m=0;m<=i;m++){let y=[],b=m/i,M=o+b*a,R=t*Math.cos(M),T=Math.sqrt(t*t-R*R),x=0;m===0&&o===0?x=.5/e:m===i&&l===Math.PI&&(x=-.5/e);for(let _=0;_<=e;_++){let A=_/e,S=s+A*r;u.x=-T*Math.cos(S),u.y=R,u.z=T*Math.sin(S),p.push(u.x,u.y,u.z),f.copy(u).normalize(),v.push(f.x,f.y,f.z),g.push(A+x,1-b),y.push(c++)}h.push(y)}for(let m=0;m<i;m++)for(let y=0;y<e;y++){let b=h[m][y+1],M=h[m][y],R=h[m+1][y],T=h[m+1][y+1];(m!==0||o>0)&&d.push(b,M,T),(m!==i-1||l<Math.PI)&&d.push(M,R,T)}this.setIndex(d),this.setAttribute("position",new te(p,3)),this.setAttribute("normal",new te(v,3)),this.setAttribute("uv",new te(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var lr=class n extends Ue{constructor(t=1,e=.4,i=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},i=Math.floor(i),s=Math.floor(s);let l=[],c=[],h=[],u=[],f=new $,d=new $,p=new $;for(let v=0;v<=i;v++){let g=o+v/i*a;for(let m=0;m<=s;m++){let y=m/s*r;d.x=(t+e*Math.cos(g))*Math.cos(y),d.y=(t+e*Math.cos(g))*Math.sin(y),d.z=e*Math.sin(g),c.push(d.x,d.y,d.z),f.x=t*Math.cos(y),f.y=t*Math.sin(y),p.subVectors(d,f).normalize(),h.push(p.x,p.y,p.z),u.push(m/s),u.push(v/i)}}for(let v=1;v<=i;v++)for(let g=1;g<=s;g++){let m=(s+1)*v+g-1,y=(s+1)*(v-1)+g-1,b=(s+1)*(v-1)+g,M=(s+1)*v+g;l.push(m,y,M),l.push(y,b,M)}this.setIndex(l),this.setAttribute("position",new te(c,3)),this.setAttribute("normal",new te(h,3)),this.setAttribute("uv",new te(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};function pr(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];if(T0(s))s.isRenderTargetTexture?(Zt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone();else if(Array.isArray(s))if(T0(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[e][i]=r}else t[e][i]=s.slice();else t[e][i]=s}}return t}function Dn(n){let t={};for(let e=0;e<n.length;e++){let i=pr(n[e]);for(let s in i)t[s]=i[s]}return t}function T0(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function ty(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function hf(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ge.workingColorSpace}var Mp={clone:pr,merge:Dn},ey=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ny=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,di=class extends Ai{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ey,this.fragmentShader=ny,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=pr(t.uniforms),this.uniformsGroups=ty(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let i in t.uniforms){let s=t.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=e[s.value]||null;break;case"c":this.uniforms[i].value=new Xt().setHex(s.value);break;case"v2":this.uniforms[i].value=new gt().fromArray(s.value);break;case"v3":this.uniforms[i].value=new $().fromArray(s.value);break;case"v4":this.uniforms[i].value=new $e().fromArray(s.value);break;case"m3":this.uniforms[i].value=new ee().fromArray(s.value);break;case"m4":this.uniforms[i].value=new ye().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},sc=class extends di{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},An=class extends Ai{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Xt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Aa,this.normalScale=new gt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ui,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var Vn=class extends Ai{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Xt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Aa,this.normalScale=new gt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ui,this.combine=vc,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},rc=class extends Ai{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=tp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},oc=class extends Ai{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Xr(n,t){return!n||n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function Il(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var Ls=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],r=e[i-1];t:{e:{let o;n:{i:if(!(t<s)){for(let a=i+2;;){if(s===void 0){if(t<r)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=e[++i],t<s)break e}o=e.length;break n}if(!(t>=r)){let a=e[1];t<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=e[--i-1],t>=r)break e}o=i,i=0;break n}break t}for(;i<o;){let a=i+o>>>1;t<e[a]?o=a:i=a+1}if(s=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=i[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},ac=class extends Ls{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Au,endingEnd:Au}}intervalChanged_(t,e,i){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Ru:r=t,a=2*e-i;break;case Cu:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Ru:o=t,l=2*i-e;break;case Cu:o=1,l=i+s[1]-s[0];break;default:o=t-1,l=e}let c=(i-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,p=(i-e)/(s-e),v=p*p,g=v*p,m=-f*g+2*f*v-f*p,y=(1+f)*g+(-1.5-2*f)*v+(-.5+f)*p+1,b=(-1-d)*g+(1.5+d)*v+.5*p,M=d*g-d*v;for(let R=0;R!==a;++R)r[R]=m*o[h+R]+y*o[c+R]+b*o[l+R]+M*o[u+R];return r}},lc=class extends Ls{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(i-e)/(s-e),u=1-h;for(let f=0;f!==a;++f)r[f]=o[c+f]*u+o[l+f]*h;return r}},cc=class extends Ls{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},hc=class extends Ls{interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this.inTangents,u=this.outTangents;if(!h||!u){let p=(i-e)/(s-e),v=1-p;for(let g=0;g!==a;++g)r[g]=o[c+g]*v+o[l+g]*p;return r}let f=a*2,d=t-1;for(let p=0;p!==a;++p){let v=o[c+p],g=o[l+p],m=d*f+p*2,y=u[m],b=u[m+1],M=t*f+p*2,R=h[M],T=h[M+1],x=sy(i,e,y,R,s);r[p]=bp(x,v,b,T,g)}return r}};function bp(n,t,e,i,s){let r=1-n;return r*r*r*t+3*r*r*n*e+3*r*n*n*i+n*n*n*s}function iy(n,t,e,i,s){let r=1-n;return 3*r*r*(e-t)+6*r*n*(i-e)+3*n*n*(s-i)}function sy(n,t,e,i,s){let r=(n-t)/(s-t);for(let o=0;o<8;o++){let a=bp(r,t,e,i,s)-n;if(Math.abs(a)<1e-10)break;let l=iy(r,t,e,i,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var ni=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Xr(e,this.TimeBufferType),this.values=Xr(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:Xr(t.times,Array),values:Xr(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s),Il(t.settings)&&(i.settings={inTangents:Xr(t.settings.inTangents,Array),outTangents:Xr(t.settings.outTangents,Array)})}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new cc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new lc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new ac(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new hc(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Ho:e=this.InterpolantFactoryMethodDiscrete;break;case Wl:e=this.InterpolantFactoryMethodLinear;break;case Dl:e=this.InterpolantFactoryMethodSmooth;break;case Eu:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Zt("KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ho;case this.InterpolantFactoryMethodLinear:return Wl;case this.InterpolantFactoryMethodSmooth:return Dl;case this.InterpolantFactoryMethodBezier:return Eu}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t;Il(this.settings)&&(w0(this.settings.inTangents,t),w0(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t;Il(this.settings)&&(E0(this.settings.inTangents,t),E0(this.settings.outTangents,t))}return this}trim(t,e){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<t;)++r;for(;o!==-1&&i[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Kt("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&(Kt("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){Kt("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){Kt("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&ax(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){Kt("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Dl,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(s)l=!0;else{let u=a*i,f=u-i,d=u+i;for(let p=0;p!==i;++p){let v=e[u+p];if(v!==e[f+p]||v!==e[d+p]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let u=a*i,f=o*i;for(let d=0;d!==i;++d)e[f+d]=e[u+d]}++o}}if(r>0){t[o]=t[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,Il(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function w0(n,t){for(let e=0,i=n.length;e!==i;e+=2)n[e]+=t}function E0(n,t){for(let e=0,i=n.length;e!==i;e+=2)n[e]*=t}ni.prototype.ValueTypeName="";ni.prototype.TimeBufferType=Float32Array;ni.prototype.ValueBufferType=Float32Array;ni.prototype.DefaultInterpolation=Wl;var Ns=class extends ni{constructor(t,e,i){super(t,e,i)}};Ns.prototype.ValueTypeName="bool";Ns.prototype.ValueBufferType=Array;Ns.prototype.DefaultInterpolation=Ho;Ns.prototype.InterpolantFactoryMethodLinear=void 0;Ns.prototype.InterpolantFactoryMethodSmooth=void 0;var uc=class extends ni{constructor(t,e,i,s){super(t,e,i,s)}};uc.prototype.ValueTypeName="color";var fc=class extends ni{constructor(t,e,i,s){super(t,e,i,s)}};fc.prototype.ValueTypeName="number";var dc=class extends Ls{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-e)/(s-e),c=t*a;for(let h=c+a;c!==h;c+=4)Nn.slerpFlat(r,0,o,c-a,o,c,l);return r}},pa=class extends ni{constructor(t,e,i,s){super(t,e,i,s)}InterpolantFactoryMethodLinear(t){return new dc(this.times,this.values,this.getValueSize(),t)}};pa.prototype.ValueTypeName="quaternion";pa.prototype.InterpolantFactoryMethodSmooth=void 0;var Ds=class extends ni{constructor(t,e,i){super(t,e,i)}};Ds.prototype.ValueTypeName="string";Ds.prototype.ValueBufferType=Array;Ds.prototype.DefaultInterpolation=Ho;Ds.prototype.InterpolantFactoryMethodLinear=void 0;Ds.prototype.InterpolantFactoryMethodSmooth=void 0;var pc=class extends ni{constructor(t,e,i,s){super(t,e,i,s)}};pc.prototype.ValueTypeName="vector";var mc=class{constructor(t,e,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let d=c[u],p=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Sp=new mc,gc=class{constructor(t){this.manager=t!==void 0?t:Sp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};gc.DEFAULT_MATERIAL_NAME="__DEFAULT";var cr=class extends Be{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Xt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Hi=class extends cr{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Be.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Xt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},wu=new ye,A0=new $,R0=new $,ma=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new gt(512,512),this.mapType=Xn,this.map=null,this.mapPass=null,this.matrix=new ye,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Cs,this._frameExtents=new gt(1,1),this._viewportCount=1,this._viewports=[new $e(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;A0.setFromMatrixPosition(t.matrixWorld),e.position.copy(A0),R0.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(R0),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,i,s){wu.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),i.setFromProjectionMatrix(wu,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===Kr||t.reversedDepth?e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),e.multiply(wu)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Ll=new $,Nl=new Nn,Fi=new $,ga=class extends Be{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ye,this.projectionMatrix=new ye,this.projectionMatrixInverse=new ye,this.coordinateSystem=hi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Ll,Nl,Fi),Fi.x===1&&Fi.y===1&&Fi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ll,Nl,Fi.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(Ll,Nl,Fi),Fi.x===1&&Fi.y===1&&Fi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ll,Nl,Fi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},As=new $,C0=new gt,P0=new gt,pn=class extends ga{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Xl*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Qh*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Xl*2*Math.atan(Math.tan(Qh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){As.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(As.x,As.y).multiplyScalar(-t/As.z),As.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(As.x,As.y).multiplyScalar(-t/As.z)}getViewSize(t,e){return this.getViewBounds(t,C0,P0),e.subVectors(P0,C0)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Qh*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Du=class extends ma{constructor(){super(new pn(90,1,.5,500)),this.isPointLightShadow=!0}},Us=class extends cr{constructor(t,e,i=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Du}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},us=class extends ga{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,o=i+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Uu=class extends ma{constructor(){super(new us(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Vi=class extends cr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Be.DEFAULT_UP),this.updateMatrix(),this.target=new Be,this.shadow=new Uu}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}},xa=class extends cr{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var qr=-90,$r=1,oo=class extends Be{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new pn(qr,$r,t,e);s.layers=this.layers,this.add(s);let r=new pn(qr,$r,t,e);r.layers=this.layers,this.add(r);let o=new pn(qr,$r,t,e);o.layers=this.layers,this.add(o);let a=new pn(qr,$r,t,e);a.layers=this.layers,this.add(a);let l=new pn(qr,$r,t,e);l.layers=this.layers,this.add(l);let c=new pn(qr,$r,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===hi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Kr)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;let v=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(i,1,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,2,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,3,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(i,4,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),i.texture.mipmapsAutoUpdate=v,t.setRenderTarget(i,5,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=p,i.texture.needsPMREMUpdate=!0}},xc=class extends pn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}};var uf="\\[\\]\\.:\\/",ry=new RegExp("["+uf+"]","g"),ff="[^"+uf+"]",oy="[^"+uf.replace("\\.","")+"]",ay=/((?:WC+[\/:])*)/.source.replace("WC",ff),ly=/(WCOD+)?/.source.replace("WCOD",oy),cy=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ff),hy=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ff),uy=new RegExp("^"+ay+ly+cy+hy+"$"),fy=["material","materials","bones","map"],Fu=class{constructor(t,e,i){let s=i||ze.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},ze=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(ry,"")}static parseTrackName(t){let e=uy.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);fy.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=i(a.children);if(l)return l}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Zt("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=e.objectIndex;switch(i){case"materials":if(!t.material){Kt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Kt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Kt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Kt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Kt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){Kt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){Kt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;Kt("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Kt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Kt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ze.Composite=Fu;ze.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ze.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ze.prototype.GetterByBindingType=[ze.prototype._getValue_direct,ze.prototype._getValue_array,ze.prototype._getValue_arrayElement,ze.prototype._getValue_toArray];ze.prototype.SetterByBindingTypeAndVersioning=[[ze.prototype._setValue_direct,ze.prototype._setValue_direct_setNeedsUpdate,ze.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ze.prototype._setValue_array,ze.prototype._setValue_array_setNeedsUpdate,ze.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ze.prototype._setValue_arrayElement,ze.prototype._setValue_arrayElement_setNeedsUpdate,ze.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ze.prototype._setValue_fromArray,ze.prototype._setValue_fromArray_setNeedsUpdate,ze.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var BS=new Float32Array(1);var ku=class{static{this.prototype.isMatrix2=!0}constructor(t,e,i,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=i,r[3]=s,this}};function df(n,t,e,i){let s=dy(i);switch(e){case ef:return n*t;case Ec:return n*t/s.components*s.byteLength;case Ac:return n*t/s.components*s.byteLength;case Fs:return n*t*2/s.components*s.byteLength;case Rc:return n*t*2/s.components*s.byteLength;case nf:return n*t*3/s.components*s.byteLength;case ii:return n*t*4/s.components*s.byteLength;case Cc:return n*t*4/s.components*s.byteLength;case Ma:case ba:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Sa:case Ta:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Ic:case Nc:return Math.max(n,16)*Math.max(t,8)/4;case Pc:case Lc:return Math.max(n,8)*Math.max(t,8)/2;case Dc:case Uc:case kc:case Oc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Fc:case wa:case zc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Bc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Hc:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Vc:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Gc:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Wc:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Xc:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case qc:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case $c:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Yc:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Zc:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Kc:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Jc:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case jc:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Qc:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case th:case eh:case nh:return Math.ceil(n/4)*Math.ceil(t/4)*16;case ih:case sh:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Ea:case rh:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function dy(n){switch(n){case Xn:case Ju:return{byteLength:1,components:1};case ho:case ju:case Pi:return{byteLength:2,components:1};case Tc:case wc:return{byteLength:2,components:4};case Ci:case Sc:case mi:return{byteLength:4,components:1};case Qu:case tf:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Zt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function Xp(){let n=null,t=!1,e=null,i=null;function s(r,o){i=n.requestAnimationFrame(s),e(r,o)}return{start:function(){t!==!0&&e!==null&&n!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function vy(n){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,u=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,h),a.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,l,c){let h=l.array,u=l.updateRanges;if(n.bindBuffer(c,a),u.length===0)n.bufferSubData(c,0,h);else{u.sort((d,p)=>d.start-p.start);let f=0;for(let d=1;d<u.length;d++){let p=u[f],v=u[d];v.start<=p.start+p.count+1?p.count=Math.max(p.count,v.start+v.count-p.start):(++f,u[f]=v)}u.length=f+1;for(let d=0,p=u.length;d<p;d++){let v=u[d];n.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(n.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var _y=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,My=`#ifdef USE_ALPHAHASH
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
#endif`,by=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Sy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ty=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,wy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ey=`#ifdef USE_AOMAP
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
#endif`,Ay=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ry=`#ifdef USE_BATCHING
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
#endif`,Cy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Py=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Iy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ly=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ny=`#ifdef USE_IRIDESCENCE
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
#endif`,Dy=`#ifdef USE_BUMPMAP
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
#endif`,Uy=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Fy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ky=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Oy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,zy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,By=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Hy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Vy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Gy=`#define PI 3.141592653589793
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
} // validated`,Wy=`vec3 transformedNormal = objectNormal;
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
#endif`,Xy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,qy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,$y=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Yy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Zy="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ky=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Jy=`#ifdef USE_ENVMAP
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
#endif`,jy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Qy=`#ifdef USE_ENVMAP
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
#endif`,t1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,e1=`#ifdef USE_ENVMAP
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
#endif`,n1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,i1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,s1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,r1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,o1=`#ifdef USE_GRADIENTMAP
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
}`,a1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,l1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,c1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,h1=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,u1=`#ifdef USE_ENVMAP
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
#endif`,f1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,d1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,p1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,m1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,g1=`PhysicalMaterial material;
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
#endif`,x1=`uniform sampler2D dfgLUT;
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
}`,y1=`
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
#endif`,v1=`#if defined( RE_IndirectDiffuse )
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
#endif`,_1=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,M1=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,b1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,S1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,T1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,w1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,E1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,A1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,R1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,C1=`#if defined( USE_POINTS_UV )
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
#endif`,P1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,I1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,L1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,N1=`#if defined( USE_MORPHCOLORS )
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
#endif`,D1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,U1=`#ifdef USE_MORPHTARGETS
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
#endif`,F1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,k1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,O1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,z1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,B1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,H1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,V1=`#ifdef USE_NORMALMAP
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
#endif`,G1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,W1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,X1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,q1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,$1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Y1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Z1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,K1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,J1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,j1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Q1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,tv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ev=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,nv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,iv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,sv=`float getShadowMask() {
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
}`,rv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ov=`#ifdef USE_SKINNING
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
#endif`,av=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,lv=`#ifdef USE_SKINNING
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
#endif`,cv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,hv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,uv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,fv=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,dv=`#ifdef USE_TRANSMISSION
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
#endif`,pv=`#ifdef USE_TRANSMISSION
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
#endif`,mv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,yv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,vv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,_v=`uniform sampler2D t2D;
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
}`,Mv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bv=`uniform float backgroundBlurriness;
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
}`,Sv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Tv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wv=`#include <common>
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
}`,Ev=`#if DEPTH_PACKING == 3200
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
}`,Av=`#define DISTANCE
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
}`,Rv=`#define DISTANCE
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
}`,Cv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Pv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Iv=`uniform float scale;
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
}`,Lv=`uniform vec3 diffuse;
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
}`,Nv=`#include <common>
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
}`,Dv=`uniform vec3 diffuse;
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
}`,Uv=`#define LAMBERT
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
}`,Fv=`#define LAMBERT
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
}`,kv=`#define MATCAP
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
}`,Ov=`#define MATCAP
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
}`,zv=`#define NORMAL
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
}`,Bv=`#define NORMAL
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
}`,Hv=`#define PHONG
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
}`,Vv=`#define PHONG
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
}`,Gv=`#define STANDARD
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
}`,Wv=`#define STANDARD
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
}`,Xv=`#define TOON
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
}`,qv=`#define TOON
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
}`,$v=`uniform float size;
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
}`,Yv=`uniform vec3 diffuse;
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
}`,Zv=`#include <common>
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
}`,Kv=`uniform vec3 color;
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
}`,Jv=`uniform float rotation;
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
}`,jv=`uniform vec3 diffuse;
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
}`,he={alphahash_fragment:_y,alphahash_pars_fragment:My,alphamap_fragment:by,alphamap_pars_fragment:Sy,alphatest_fragment:Ty,alphatest_pars_fragment:wy,aomap_fragment:Ey,aomap_pars_fragment:Ay,batching_pars_vertex:Ry,batching_vertex:Cy,begin_vertex:Py,beginnormal_vertex:Iy,bsdfs:Ly,iridescence_fragment:Ny,bumpmap_pars_fragment:Dy,clipping_planes_fragment:Uy,clipping_planes_pars_fragment:Fy,clipping_planes_pars_vertex:ky,clipping_planes_vertex:Oy,color_fragment:zy,color_pars_fragment:By,color_pars_vertex:Hy,color_vertex:Vy,common:Gy,defaultnormal_vertex:Wy,displacementmap_pars_vertex:Xy,displacementmap_vertex:qy,emissivemap_fragment:$y,emissivemap_pars_fragment:Yy,colorspace_fragment:Zy,colorspace_pars_fragment:Ky,envmap_fragment:Jy,envmap_common_pars_fragment:jy,envmap_pars_fragment:Qy,envmap_pars_vertex:t1,envmap_physical_pars_fragment:u1,envmap_vertex:e1,fog_vertex:n1,fog_pars_vertex:i1,fog_fragment:s1,fog_pars_fragment:r1,gradientmap_pars_fragment:o1,lightmap_pars_fragment:a1,lights_lambert_fragment:l1,lights_lambert_pars_fragment:c1,lights_pars_begin:h1,lights_toon_fragment:f1,lights_toon_pars_fragment:d1,lights_phong_fragment:p1,lights_phong_pars_fragment:m1,lights_physical_fragment:g1,lights_physical_pars_fragment:x1,lights_fragment_begin:y1,lights_fragment_maps:v1,lights_fragment_end:_1,lightprobes_pars_fragment:M1,logdepthbuf_fragment:b1,logdepthbuf_pars_fragment:S1,logdepthbuf_pars_vertex:T1,logdepthbuf_vertex:w1,map_fragment:E1,map_pars_fragment:A1,map_particle_fragment:R1,map_particle_pars_fragment:C1,metalnessmap_fragment:P1,metalnessmap_pars_fragment:I1,morphinstance_vertex:L1,morphcolor_vertex:N1,morphnormal_vertex:D1,morphtarget_pars_vertex:U1,morphtarget_vertex:F1,normal_fragment_begin:k1,normal_fragment_maps:O1,normal_pars_fragment:z1,normal_pars_vertex:B1,normal_vertex:H1,normalmap_pars_fragment:V1,clearcoat_normal_fragment_begin:G1,clearcoat_normal_fragment_maps:W1,clearcoat_pars_fragment:X1,iridescence_pars_fragment:q1,opaque_fragment:$1,packing:Y1,premultiplied_alpha_fragment:Z1,project_vertex:K1,dithering_fragment:J1,dithering_pars_fragment:j1,roughnessmap_fragment:Q1,roughnessmap_pars_fragment:tv,shadowmap_pars_fragment:ev,shadowmap_pars_vertex:nv,shadowmap_vertex:iv,shadowmask_pars_fragment:sv,skinbase_vertex:rv,skinning_pars_vertex:ov,skinning_vertex:av,skinnormal_vertex:lv,specularmap_fragment:cv,specularmap_pars_fragment:hv,tonemapping_fragment:uv,tonemapping_pars_fragment:fv,transmission_fragment:dv,transmission_pars_fragment:pv,uv_pars_fragment:mv,uv_pars_vertex:gv,uv_vertex:xv,worldpos_vertex:yv,background_vert:vv,background_frag:_v,backgroundCube_vert:Mv,backgroundCube_frag:bv,cube_vert:Sv,cube_frag:Tv,depth_vert:wv,depth_frag:Ev,distance_vert:Av,distance_frag:Rv,equirect_vert:Cv,equirect_frag:Pv,linedashed_vert:Iv,linedashed_frag:Lv,meshbasic_vert:Nv,meshbasic_frag:Dv,meshlambert_vert:Uv,meshlambert_frag:Fv,meshmatcap_vert:kv,meshmatcap_frag:Ov,meshnormal_vert:zv,meshnormal_frag:Bv,meshphong_vert:Hv,meshphong_frag:Vv,meshphysical_vert:Gv,meshphysical_frag:Wv,meshtoon_vert:Xv,meshtoon_frag:qv,points_vert:$v,points_frag:Yv,shadow_vert:Zv,shadow_frag:Kv,sprite_vert:Jv,sprite_frag:jv},Pt={common:{diffuse:{value:new Xt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ee},alphaMap:{value:null},alphaMapTransform:{value:new ee},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ee}},envmap:{envMap:{value:null},envMapRotation:{value:new ee},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ee}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ee}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ee},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ee},normalScale:{value:new gt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ee},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ee}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ee}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ee}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Xt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ee},alphaTest:{value:0},uvTransform:{value:new ee}},sprite:{diffuse:{value:new Xt(16777215)},opacity:{value:1},center:{value:new gt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ee},alphaMap:{value:null},alphaMapTransform:{value:new ee},alphaTest:{value:0}}},qi={basic:{uniforms:Dn([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.fog]),vertexShader:he.meshbasic_vert,fragmentShader:he.meshbasic_frag},lambert:{uniforms:Dn([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,Pt.lights,{emissive:{value:new Xt(0)},envMapIntensity:{value:1}}]),vertexShader:he.meshlambert_vert,fragmentShader:he.meshlambert_frag},phong:{uniforms:Dn([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,Pt.lights,{emissive:{value:new Xt(0)},specular:{value:new Xt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:he.meshphong_vert,fragmentShader:he.meshphong_frag},standard:{uniforms:Dn([Pt.common,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.roughnessmap,Pt.metalnessmap,Pt.fog,Pt.lights,{emissive:{value:new Xt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:he.meshphysical_vert,fragmentShader:he.meshphysical_frag},toon:{uniforms:Dn([Pt.common,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.gradientmap,Pt.fog,Pt.lights,{emissive:{value:new Xt(0)}}]),vertexShader:he.meshtoon_vert,fragmentShader:he.meshtoon_frag},matcap:{uniforms:Dn([Pt.common,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,{matcap:{value:null}}]),vertexShader:he.meshmatcap_vert,fragmentShader:he.meshmatcap_frag},points:{uniforms:Dn([Pt.points,Pt.fog]),vertexShader:he.points_vert,fragmentShader:he.points_frag},dashed:{uniforms:Dn([Pt.common,Pt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:he.linedashed_vert,fragmentShader:he.linedashed_frag},depth:{uniforms:Dn([Pt.common,Pt.displacementmap]),vertexShader:he.depth_vert,fragmentShader:he.depth_frag},normal:{uniforms:Dn([Pt.common,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,{opacity:{value:1}}]),vertexShader:he.meshnormal_vert,fragmentShader:he.meshnormal_frag},sprite:{uniforms:Dn([Pt.sprite,Pt.fog]),vertexShader:he.sprite_vert,fragmentShader:he.sprite_frag},background:{uniforms:{uvTransform:{value:new ee},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:he.background_vert,fragmentShader:he.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ee}},vertexShader:he.backgroundCube_vert,fragmentShader:he.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:he.cube_vert,fragmentShader:he.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:he.equirect_vert,fragmentShader:he.equirect_frag},distance:{uniforms:Dn([Pt.common,Pt.displacementmap,{referencePosition:{value:new $},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:he.distance_vert,fragmentShader:he.distance_frag},shadow:{uniforms:Dn([Pt.lights,Pt.fog,{color:{value:new Xt(0)},opacity:{value:1}}]),vertexShader:he.shadow_vert,fragmentShader:he.shadow_frag}};qi.physical={uniforms:Dn([qi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ee},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ee},clearcoatNormalScale:{value:new gt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ee},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new ee},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ee},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ee},sheen:{value:0},sheenColor:{value:new Xt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ee},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ee},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ee},transmissionSamplerSize:{value:new gt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ee},attenuationDistance:{value:0},attenuationColor:{value:new Xt(0)},specularColor:{value:new Xt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ee},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ee},anisotropyVector:{value:new gt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ee}}]),vertexShader:he.meshphysical_vert,fragmentShader:he.meshphysical_frag};var ah={r:0,b:0,g:0},Qv=new ye,qp=new ee;qp.set(-1,0,0,0,1,0,0,0,1);function t_(n,t,e,i,s,r){let o=new Xt(0),a=s===!0?0:1,l,c,h=null,u=0,f=null;function d(y){let b=y.isScene===!0?y.background:null;if(b&&b.isTexture){let M=y.backgroundBlurriness>0;b=t.get(b,M)}return b}function p(y){let b=!1,M=d(y);M===null?g(o,a):M&&M.isColor&&(g(M,1),b=!0);let R=n.xr.getEnvironmentBlendMode();R==="additive"?e.buffers.color.setClear(0,0,0,1,r):R==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(n.autoClear||b)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function v(y,b){let M=d(b);M&&M.isCubeTexture?(c===void 0&&(c=new zt(new Fe(1,1,1),new di({name:"BackgroundCubeMaterial",uniforms:pr(qi.backgroundCube.uniforms),vertexShader:qi.backgroundCube.vertexShader,fragmentShader:qi.backgroundCube.fragmentShader,side:mn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(R,T,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Qv.makeRotationFromEuler(b.backgroundRotation)).transpose(),M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(qp),c.material.toneMapped=ge.getTransfer(M.colorSpace)!==Se,(h!==M||u!==M.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,h=M,u=M.version,f=n.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new zt(new Wn(2,2),new di({name:"BackgroundMaterial",uniforms:pr(qi.background.uniforms),vertexShader:qi.background.vertexShader,fragmentShader:qi.background.fragmentShader,side:Gi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.toneMapped=ge.getTransfer(M.colorSpace)!==Se,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||u!==M.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,h=M,u=M.version,f=n.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function g(y,b){y.getRGB(ah,hf(n)),e.buffers.color.setClear(ah.r,ah.g,ah.b,b,r)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,b=1){o.set(y),a=b,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(y){a=y,g(o,a)},render:p,addToRenderList:v,dispose:m}}function e_(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null),r=s,o=!1;function a(C,I,w,P,O){let W=!1,q=u(C,P,w,I);r!==q&&(r=q,c(r.object)),W=d(C,P,w,O),W&&p(C,P,w,O),O!==null&&t.update(O,n.ELEMENT_ARRAY_BUFFER),(W||o)&&(o=!1,M(C,I,w,P),O!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(O).buffer))}function l(){return n.createVertexArray()}function c(C){return n.bindVertexArray(C)}function h(C){return n.deleteVertexArray(C)}function u(C,I,w,P){let O=P.wireframe===!0,W=i[I.id];W===void 0&&(W={},i[I.id]=W);let q=C.isInstancedMesh===!0?C.id:0,B=W[q];B===void 0&&(B={},W[q]=B);let U=B[w.id];U===void 0&&(U={},B[w.id]=U);let H=U[O];return H===void 0&&(H=f(l()),U[O]=H),H}function f(C){let I=[],w=[],P=[];for(let O=0;O<e;O++)I[O]=0,w[O]=0,P[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:w,attributeDivisors:P,object:C,attributes:{},index:null}}function d(C,I,w,P){let O=r.attributes,W=I.attributes,q=0,B=w.getAttributes();for(let U in B)if(B[U].location>=0){let E=O[U],F=W[U];if(F===void 0&&(U==="instanceMatrix"&&C.instanceMatrix&&(F=C.instanceMatrix),U==="instanceColor"&&C.instanceColor&&(F=C.instanceColor)),E===void 0||E.attribute!==F||F&&E.data!==F.data)return!0;q++}return r.attributesNum!==q||r.index!==P}function p(C,I,w,P){let O={},W=I.attributes,q=0,B=w.getAttributes();for(let U in B)if(B[U].location>=0){let E=W[U];E===void 0&&(U==="instanceMatrix"&&C.instanceMatrix&&(E=C.instanceMatrix),U==="instanceColor"&&C.instanceColor&&(E=C.instanceColor));let F={};F.attribute=E,E&&E.data&&(F.data=E.data),O[U]=F,q++}r.attributes=O,r.attributesNum=q,r.index=P}function v(){let C=r.newAttributes;for(let I=0,w=C.length;I<w;I++)C[I]=0}function g(C){m(C,0)}function m(C,I){let w=r.newAttributes,P=r.enabledAttributes,O=r.attributeDivisors;w[C]=1,P[C]===0&&(n.enableVertexAttribArray(C),P[C]=1),O[C]!==I&&(n.vertexAttribDivisor(C,I),O[C]=I)}function y(){let C=r.newAttributes,I=r.enabledAttributes;for(let w=0,P=I.length;w<P;w++)I[w]!==C[w]&&(n.disableVertexAttribArray(w),I[w]=0)}function b(C,I,w,P,O,W,q){q===!0?n.vertexAttribIPointer(C,I,w,O,W):n.vertexAttribPointer(C,I,w,P,O,W)}function M(C,I,w,P){v();let O=P.attributes,W=w.getAttributes(),q=I.defaultAttributeValues;for(let B in W){let U=W[B];if(U.location>=0){let H=O[B];if(H===void 0&&(B==="instanceMatrix"&&C.instanceMatrix&&(H=C.instanceMatrix),B==="instanceColor"&&C.instanceColor&&(H=C.instanceColor)),H!==void 0){let E=H.normalized,F=H.itemSize,G=t.get(H);if(G===void 0)continue;let z=G.buffer,N=G.type,V=G.bytesPerElement,Z=N===n.INT||N===n.UNSIGNED_INT||H.gpuType===Sc;if(H.isInterleavedBufferAttribute){let J=H.data,it=J.isInterleavedBuffer===!0?J.stride:J.itemSize,ut=H.offset;if(J.isInstancedInterleavedBuffer||J.isInstancedBufferAttribute){for(let Tt=0;Tt<U.locationSize;Tt++)m(U.location+Tt,J.meshPerAttribute);C.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let Tt=0;Tt<U.locationSize;Tt++)g(U.location+Tt);n.bindBuffer(n.ARRAY_BUFFER,z);for(let Tt=0;Tt<U.locationSize;Tt++)b(U.location+Tt,F/U.locationSize,N,E,it*V,(ut+F/U.locationSize*Tt)*V,Z)}else{if(H.isInstancedBufferAttribute){for(let J=0;J<U.locationSize;J++)m(U.location+J,H.meshPerAttribute);C.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=H.meshPerAttribute*H.count)}else for(let J=0;J<U.locationSize;J++)g(U.location+J);n.bindBuffer(n.ARRAY_BUFFER,z);for(let J=0;J<U.locationSize;J++)b(U.location+J,F/U.locationSize,N,E,F*V,F/U.locationSize*J*V,Z)}}else if(q!==void 0){let E=q[B];if(E!==void 0)switch(E.length){case 2:n.vertexAttrib2fv(U.location,E);break;case 3:n.vertexAttrib3fv(U.location,E);break;case 4:n.vertexAttrib4fv(U.location,E);break;default:n.vertexAttrib1fv(U.location,E)}}}}y()}function R(){A();for(let C in i){let I=i[C];for(let w in I){let P=I[w];for(let O in P){let W=P[O];for(let q in W)h(W[q].object),delete W[q];delete P[O]}}delete i[C]}}function T(C){if(i[C.id]===void 0)return;let I=i[C.id];for(let w in I){let P=I[w];for(let O in P){let W=P[O];for(let q in W)h(W[q].object),delete W[q];delete P[O]}}delete i[C.id]}function x(C){for(let I in i){let w=i[I];for(let P in w){let O=w[P];if(O[C.id]===void 0)continue;let W=O[C.id];for(let q in W)h(W[q].object),delete W[q];delete O[C.id]}}}function _(C){for(let I in i){let w=i[I],P=C.isInstancedMesh===!0?C.id:0,O=w[P];if(O!==void 0){for(let W in O){let q=O[W];for(let B in q)h(q[B].object),delete q[B];delete O[W]}delete w[P],Object.keys(w).length===0&&delete i[I]}}}function A(){S(),o=!0,r!==s&&(r=s,c(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:A,resetDefaultState:S,dispose:R,releaseStatesOfGeometry:T,releaseStatesOfObject:_,releaseStatesOfProgram:x,initAttributes:v,enableAttribute:g,disableUnusedAttributes:y}}function n_(n,t,e){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),e.update(c,i,1)}function o(l,c,h){h!==0&&(n.drawArraysInstanced(i,l,c,h),e.update(c,i,h))}function a(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let f=0;for(let d=0;d<h;d++)f+=c[d];e.update(f,i,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function i_(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let x=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(x){return!(x!==ii&&i.convert(x)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(x){let _=x===Pi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(x!==Xn&&x!==mi&&!_&&i.convert(x)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(x){if(x==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(Zt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),f=e.logarithmicDepthBuffer===!0&&u===!1;e.reversedDepthBuffer===!0&&u===!1&&Zt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&u===!0&&Zt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),y=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),b=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),R=n.getParameter(n.MAX_SAMPLES),T=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:u,maxTextures:d,maxVertexTextures:p,maxTextureSize:v,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:y,maxVaryings:b,maxFragmentUniforms:M,maxSamples:R,samples:T}}function s_(n){let t=this,e=null,i=0,s=!1,r=!1,o=new Ei,a=new ee,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||i!==0||s;return s=f,i=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){let p=u.clippingPlanes,v=u.clipIntersection,g=u.clipShadows,m=n.get(u);if(!s||p===null||p.length===0||r&&!g)r?h(null):c();else{let y=r?0:i,b=y*4,M=m.clippingState||null;l.value=M,M=h(p,f,b,d);for(let R=0;R!==b;++R)M[R]=e[R];m.clippingState=M,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(u,f,d,p){let v=u!==null?u.length:0,g=null;if(v!==0){if(g=l.value,p!==!0||g===null){let m=d+v*4,y=f.matrixWorldInverse;a.getNormalMatrix(y),(g===null||g.length<m)&&(g=new Float32Array(m));for(let b=0,M=d;b!==v;++b,M+=4)o.copy(u[b]).applyMatrix4(y,a),o.normal.toArray(g,M),g[M+3]=o.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,g}}var Pa=class extends jn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new ta(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Fe(5,5,5),r=new di({name:"CubemapFromEquirect",uniforms:pr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:mn,blending:hr});r.uniforms.tEquirect.value=e;let o=new zt(s,r),a=e.minFilter;return e.minFilter===Ri&&(e.minFilter=En),new oo(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}},Tp=256,r_=3,o_=20,$p=256,Yp=16,a_=3,l_=new $,c_=new Xt,po=class n{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new oo(1,10,null),this._boxMesh=new zt(new Fe(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,i=.1,s=100,r={}){let{size:o=256,position:a=l_}=r,l=this._renderer;this._setSize(o);let c=this._allocateTarget(),h=this._getSourceTarget(!0);e>0&&(h.texture.mipmapsAutoUpdate=!1);let u=l.autoClear,f=l.autoClearColor,d=l.autoClearDepth,p=l.autoClearStencil,v=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,v===null&&(t.background=l.getClearColor(c_));let g=new oo(i,s,h);return g.position.copy(a),g.update(l,t),l.autoClear=u,l.autoClearColor=f,l.autoClearDepth=d,l.autoClearStencil=p,t.background=v,e>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,e)),this._applyPMREM(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ap(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ep(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(Tp,fp(t))}_fromTexture(t,e){t.mapping===fr||t.mapping===co?this._setSize(t.image.length===0?Tp:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let i=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(i),i}_allocateTarget(){let t=this._cubeSize,e=wp(t,!1,!1),i=Math.log2(t)-r_;for(let s=0;s<=i;s++)e.texture.mipmaps.push({width:t>>s,height:t>>s});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){let e=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==e||t&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=wp(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,i){let s=this._boxMesh,r=this._cubeCamera;s.material=i,r.renderTarget=t,r.activeMipmapLevel=e;let o=t.width>>e;t.viewport.set(0,0,o,o),r.update(this._renderer,s),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===fr||t.mapping===co?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ap()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Ep()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=h_(),this._integrationMaterial=u_());let e=this._cubeSize,i=t.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/Yp);for(let o=0;o<=i;o++){let a=n.lodToRoughness(o,i);if(o>i-a_)r.roughness.value=a,this._renderCube(t,o,this._integrationMaterial);else{let l=a>0?Math.log2(e)+.5*Math.log2(6/($p*Math.pow(a,4)))+.5:0;s.roughness.value=a,s.lodBias.value=l,this._renderCube(t,o,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=f_());let i=this._blurMaterial,s=i.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(t,0,i),s.envMap.value=t.texture,this._renderCube(r,0,i)}};function wp(n,t,e){return new Pa(n,{minFilter:Ri,generateMipmaps:t,type:Pi,colorSpace:Vo,depthBuffer:e})}function Ia(n,t,e){return new di({name:n,uniforms:t,vertexShader:he.cube_vert,fragmentShader:e,side:mn,blending:hr,depthTest:!1,depthWrite:!1})}function h_(){return Ia("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${$p}u

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
	`)}function u_(){return Ia("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Yp}},`

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
	`)}function f_(){return Ia("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${o_}
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
	`)}function Ep(){return Ia("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function Ap(){return Ia("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function d_(n){let t=new WeakMap,e=new WeakMap,i=null;function s(f,d=!1){return f==null?null:d?o(f):r(f)}function r(f){if(f&&f.isTexture){let d=f.mapping;if(d===_c||d===Mc)if(t.has(f)){let p=t.get(f).texture;return a(p,f.mapping)}else{let p=f.image;if(p&&p.height>0){let v=new Pa(p.height);return v.fromEquirectangularTexture(n,f),t.set(f,v),f.addEventListener("dispose",c),a(v.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture&&f.isPMREMTexture!==!0){let d=f.mapping,p=d===_c||d===Mc,v=d===fr||d===co;if(p||v){let g=e.get(f),m=g!==void 0?g.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==m)return i===null&&(i=new po(n)),g=p?i.fromEquirectangular(f,g):i.fromCubemap(f,g),g.texture.pmremVersion=f.pmremVersion,e.set(f,g),g.texture;if(g!==void 0)return g.texture;{let y=f.image;return p&&y&&y.height>0||v&&y&&l(y)?(i===null&&(i=new po(n)),g=p?i.fromEquirectangular(f):i.fromCubemap(f),g.texture.pmremVersion=f.pmremVersion,e.set(f,g),f.addEventListener("dispose",h),g.texture):null}}}return f}function a(f,d){return d===_c?f.mapping=fr:d===Mc&&(f.mapping=co),f}function l(f){let d=0,p=6;for(let v=0;v<p;v++)f[v]!==void 0&&d++;return d===p}function c(f){let d=f.target;d.removeEventListener("dispose",c);let p=t.get(d);p!==void 0&&(t.delete(d),p.dispose())}function h(f){let d=f.target;d.removeEventListener("dispose",h);let p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function u(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:u}}function p_(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s=n.getExtension(i);return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let s=e(i);return s===null&&Oo("WebGLRenderer: "+i+" extension not supported."),s}}}function m_(n,t,e,i){let s={},r=new WeakMap,o=new FinalizationRegistry(p=>delete s[p]);function a(p){l(p.target)}function l(p){p.index!==null&&t.remove(p.index);for(let g in p.attributes)t.remove(p.attributes[g]);p.removeEventListener("dispose",a),delete s[p.id],o.unregister(p);let v=r.get(p);v&&(t.remove(v),r.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function c(p,v){return s[v.id]!==void 0||(v.addEventListener("dispose",a),s[v.id]=new WeakRef(v),o.register(v,v.id,v),e.memory.geometries++),v}function h(p){let v=p.attributes;for(let g in v)t.update(v[g],n.ARRAY_BUFFER)}function u(p){let v=p.index,g=p.attributes.position,m=0;if(g===void 0)return;let y=v!==null?v.array.length:g.array.length/3-1,b=g.count>=65535?Ko:Zo,M=new b(Math.ceil(y/3)*6,1),R=M.array;if(v!==null){let x=v.array;m=v.version;for(let _=0,A=0;_<y;_+=3){let S=x[_+0],C=x[_+1],I=x[_+2];R[A++]=S,R[A++]=C,R[A++]=C,R[A++]=I,R[A++]=I,R[A++]=S}}else{m=g.version;for(let x=0,_=0;x<y;x+=3){let A=x+0,S=x+1,C=x+2;R[_++]=A,R[_++]=S,R[_++]=S,R[_++]=C,R[_++]=C,R[_++]=A}}M.version=m;let T=r.get(p);T&&t.remove(T),r.set(p,M)}function f(p){let v=r.get(p);if(v){let g=p.index;g!==null&&v.version<g.version&&u(p)}else u(p);return r.get(p)}function d(){for(let p in s){let v=s[p].deref();v!==void 0&&l(v)}}return{get:c,update:h,getWireframeAttribute:f,dispose:d}}function g_(n,t,e){let i;function s(u){i=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function l(u,f){n.drawElements(i,f,r,u*o),e.update(f,i,1)}function c(u,f,d){d!==0&&(n.drawElementsInstanced(i,f,r,u*o,d),e.update(f,i,d))}function h(u,f,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,u,0,d);let v=0;for(let g=0;g<d;g++)v+=f[g];e.update(v,i,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function x_(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:Kt("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function y_(n,t,e){let i=new WeakMap,s=new $e;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,f=i.get(a);if(f===void 0||f.count!==u){let A=function(){x.dispose(),i.delete(a),a.removeEventListener("dispose",A)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],y=a.morphAttributes.color||[],b=0;d===!0&&(b=1),p===!0&&(b=2),v===!0&&(b=3);let M=a.attributes.position.count*b,R=1;M>t.maxTextureSize&&(R=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);let T=new Float32Array(M*R*4*u),x=new qo(T,M,R,u);x.type=mi,x.needsUpdate=!0;let _=b*4;for(let S=0;S<u;S++){let C=g[S],I=m[S],w=y[S],P=M*R*4*S;for(let O=0;O<C.count;O++){let W=O*_;d===!0&&(s.fromBufferAttribute(C,O),T[P+W+0]=s.x,T[P+W+1]=s.y,T[P+W+2]=s.z,T[P+W+3]=0),p===!0&&(s.fromBufferAttribute(I,O),T[P+W+4]=s.x,T[P+W+5]=s.y,T[P+W+6]=s.z,T[P+W+7]=0),v===!0&&(s.fromBufferAttribute(w,O),T[P+W+8]=s.x,T[P+W+9]=s.y,T[P+W+10]=s.z,T[P+W+11]=w.itemSize===4?s.w:1)}}f={count:u,texture:x,size:new gt(M,R)},i.set(a,f),a.addEventListener("dispose",A)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let d=0;for(let v=0;v<c.length;v++)d+=c[v];let p=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(n,"morphTargetBaseInfluence",p),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function v_(n,t,e,i,s){let r=new WeakMap;function o(c){let h=s.render.frame,u=c.geometry,f=t.get(c,u);if(r.get(f)!==h&&(t.update(f),r.set(f,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let d=c.skeleton;r.get(d)!==h&&(d.update(),r.set(d,h))}return f}function a(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}var __={[Wu]:"LINEAR_TONE_MAPPING",[Xu]:"REINHARD_TONE_MAPPING",[qu]:"CINEON_TONE_MAPPING",[va]:"ACES_FILMIC_TONE_MAPPING",[Yu]:"AGX_TONE_MAPPING",[Zu]:"NEUTRAL_TONE_MAPPING",[$u]:"CUSTOM_TONE_MAPPING"};function M_(n,t,e,i,s,r){let o=new jn(t,e,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=null,h=new Ue;h.setAttribute("position",new te([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new te([0,2,0,0,2,0],2));let u=new sc({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new zt(h,u),d=new us(-1,1,1,-1,0,1),p=null,v=null,g=!1,m,y=null,b=[],M=!1;this.setSize=function(R,T){o.setSize(R,T),a!==null&&a.setSize(R,T),l!==null&&l.setSize(R,T);for(let x=0;x<b.length;x++){let _=b[x];_.setSize&&_.setSize(R,T)}},this.setEffects=function(R){b=R,M=b.length>0&&b[0].isRenderPass===!0;let T=o.width,x=o.height;b.length>0&&a===null&&(a=new jn(T,x,{type:Pi,depthBuffer:!1,stencilBuffer:!1}),l=new jn(T,x,{type:Pi,depthBuffer:!1,stencilBuffer:!1}));let _=s===!0&&b.some(A=>A.needsDepthTexture===!0);_!==(o.depthTexture!==null)&&(_===!0&&c===null&&(c=new cs(T,x),r===!0&&(c.format=fs,c.type=dr)),o.dispose(),o.depthTexture=_?c:null,o.resolveDepthBuffer=_,o.storeMultisampledDepthBuffer=_);for(let A=0;A<b.length;A++){let S=b[A];S.setSize&&S.setSize(T,x),_&&S.needsDepthTexture===!0&&S.setDepthTexture&&S.setDepthTexture(c)}},this.begin=function(R,T){if(g||R.toneMapping===Wi&&b.length===0)return!1;if(y=T,T!==null){let x=T.width,_=T.height;(o.width!==x||o.height!==_)&&this.setSize(x,_)}return M===!1&&R.setRenderTarget(o),m=R.toneMapping,R.toneMapping=Wi,!0},this.hasRenderPass=function(){return M},this.end=function(R,T){R.toneMapping=m,g=!0;let x=o,_=a;for(let A=0;A<b.length;A++){let S=b[A];S.enabled!==!1&&(S.render(R,_,x,T),S.needsSwap!==!1&&(x=_,_=_===a?l:a))}if(p!==R.outputColorSpace||v!==R.toneMapping){p=R.outputColorSpace,v=R.toneMapping,u.defines={},ge.getTransfer(p)===Se&&(u.defines.SRGB_TRANSFER="");let A=__[v];A&&(u.defines[A]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=x.texture,R.setRenderTarget(y),R.render(f,d),y=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),h.dispose(),u.dispose()}}var Zp=new zn,Kp=new cs(1,1),Jp=new ea(1),jp=new qo,Qp=new Yl,tm=new ta,Rp=[],Cp=[],Pp=new Float32Array(16),Ip=new Float32Array(9),Lp=new Float32Array(4);function mo(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,r=Rp[s];if(r===void 0&&(r=new Float32Array(s),Rp[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function gn(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function xn(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function ch(n,t){let e=Cp[t];e===void 0&&(e=new Int32Array(t),Cp[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function b_(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function S_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(gn(e,t))return;n.uniform2fv(this.addr,t),xn(e,t)}}function T_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(gn(e,t))return;n.uniform3fv(this.addr,t),xn(e,t)}}function w_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(gn(e,t))return;n.uniform4fv(this.addr,t),xn(e,t)}}function E_(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(gn(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),xn(e,t)}else{if(gn(e,i))return;Lp.set(i),n.uniformMatrix2fv(this.addr,!1,Lp),xn(e,i)}}function A_(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(gn(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),xn(e,t)}else{if(gn(e,i))return;Ip.set(i),n.uniformMatrix3fv(this.addr,!1,Ip),xn(e,i)}}function R_(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(gn(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),xn(e,t)}else{if(gn(e,i))return;Pp.set(i),n.uniformMatrix4fv(this.addr,!1,Pp),xn(e,i)}}function C_(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function P_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(gn(e,t))return;n.uniform2iv(this.addr,t),xn(e,t)}}function I_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(gn(e,t))return;n.uniform3iv(this.addr,t),xn(e,t)}}function L_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(gn(e,t))return;n.uniform4iv(this.addr,t),xn(e,t)}}function N_(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function D_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(gn(e,t))return;n.uniform2uiv(this.addr,t),xn(e,t)}}function U_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(gn(e,t))return;n.uniform3uiv(this.addr,t),xn(e,t)}}function F_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(gn(e,t))return;n.uniform4uiv(this.addr,t),xn(e,t)}}function hh(n){return n.version===0&&(n.compareFunction=of,n.needsUpdate=!0),n}function k_(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?r=hh(Kp):r=Zp,e.setTexture2D(t||r,s)}function O_(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||Qp,s)}function z_(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_CUBE_SHADOW?r=hh(Jp):r=tm,e.setTextureCube(t||r,s)}function B_(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||jp,s)}function H_(n){switch(n){case 5126:return b_;case 35664:return S_;case 35665:return T_;case 35666:return w_;case 35674:return E_;case 35675:return A_;case 35676:return R_;case 5124:case 35670:return C_;case 35667:case 35671:return P_;case 35668:case 35672:return I_;case 35669:case 35673:return L_;case 5125:return N_;case 36294:return D_;case 36295:return U_;case 36296:return F_;case 35678:case 36198:case 36298:case 36306:case 35682:return k_;case 35679:case 36299:case 36307:return O_;case 35680:case 36300:case 36308:case 36293:return z_;case 36289:case 36303:case 36311:case 36292:return B_}}function V_(n,t){n.uniform1fv(this.addr,t)}function G_(n,t){let e=mo(t,this.size,2);n.uniform2fv(this.addr,e)}function W_(n,t){let e=mo(t,this.size,3);n.uniform3fv(this.addr,e)}function X_(n,t){let e=mo(t,this.size,4);n.uniform4fv(this.addr,e)}function q_(n,t){let e=mo(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function $_(n,t){let e=mo(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function Y_(n,t){let e=mo(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function Z_(n,t){n.uniform1iv(this.addr,t)}function K_(n,t){n.uniform2iv(this.addr,t)}function J_(n,t){n.uniform3iv(this.addr,t)}function j_(n,t){n.uniform4iv(this.addr,t)}function Q_(n,t){n.uniform1uiv(this.addr,t)}function tM(n,t){n.uniform2uiv(this.addr,t)}function eM(n,t){n.uniform3uiv(this.addr,t)}function nM(n,t){n.uniform4uiv(this.addr,t)}function iM(n,t,e){let i=this.cache,s=t.length,r=ch(e,s);gn(i,r)||(n.uniform1iv(this.addr,r),xn(i,r));let o;this.type===n.SAMPLER_2D_SHADOW?o=hh(Kp):o=Zp;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function sM(n,t,e){let i=this.cache,s=t.length,r=ch(e,s);gn(i,r)||(n.uniform1iv(this.addr,r),xn(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Qp,r[o])}function rM(n,t,e){let i=this.cache,s=t.length,r=ch(e,s);gn(i,r)||(n.uniform1iv(this.addr,r),xn(i,r));let o;this.type===n.SAMPLER_CUBE_SHADOW?o=hh(Jp):o=tm;for(let a=0;a!==s;++a)e.setTextureCube(t[a]||o,r[a])}function oM(n,t,e){let i=this.cache,s=t.length,r=ch(e,s);gn(i,r)||(n.uniform1iv(this.addr,r),xn(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||jp,r[o])}function aM(n){switch(n){case 5126:return V_;case 35664:return G_;case 35665:return W_;case 35666:return X_;case 35674:return q_;case 35675:return $_;case 35676:return Y_;case 5124:case 35670:return Z_;case 35667:case 35671:return K_;case 35668:case 35672:return J_;case 35669:case 35673:return j_;case 5125:return Q_;case 36294:return tM;case 36295:return eM;case 36296:return nM;case 35678:case 36198:case 36298:case 36306:case 35682:return iM;case 35679:case 36299:case 36307:return sM;case 35680:case 36300:case 36308:case 36293:return rM;case 36289:case 36303:case 36311:case 36292:return oM}}var gf=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=H_(e.type)}},xf=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=aM(e.type)}},yf=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],i)}}},pf=/(\w+)(\])?(\[|\.)?/g;function Np(n,t){n.seq.push(t),n.map[t.id]=t}function lM(n,t,e){let i=n.name,s=i.length;for(pf.lastIndex=0;;){let r=pf.exec(i),o=pf.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Np(e,c===void 0?new gf(a,n,t):new xf(a,n,t));break}else{let u=e.map[a];u===void 0&&(u=new yf(a),Np(e,u)),e=u}}}var fo=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){let a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);lM(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,i,s){let r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&i.push(o)}return i}};function Dp(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var cM=37297,hM=0;function uM(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}var Up=new ee;function fM(n){ge._getMatrix(Up,ge.workingColorSpace,n);let t=`mat3( ${Up.elements.map(e=>e.toFixed(4))} )`;switch(ge.getTransfer(n)){case Go:return[t,"LinearTransferOETF"];case Se:return[t,"sRGBTransferOETF"];default:return Zt("WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function Fp(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),r=(n.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+uM(n.getShaderSource(t),a)}else return r}function dM(n,t){let e=fM(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var pM={[Wu]:"Linear",[Xu]:"Reinhard",[qu]:"Cineon",[va]:"ACESFilmic",[Yu]:"AgX",[Zu]:"Neutral",[$u]:"Custom"};function mM(n,t){let e=pM[t];return e===void 0?(Zt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var lh=new $;function gM(){ge.getLuminanceCoefficients(lh);let n=lh.x.toFixed(4),t=lh.y.toFixed(4),e=lh.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function xM(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ca).join(`
`)}function yM(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function vM(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(t,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function Ca(n){return n!==""}function kp(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function Op(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var _M=/^[ \t]*#include +<([\w\d./]+)>/gm;function vf(n){return n.replace(_M,MM)}function MM(n,t){let e=he[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return vf(e)}var bM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function zp(n){return n.replace(bM,SM)}function SM(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Bp(n){let t=`precision ${n.precision} float;
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
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var TM={[ya]:"SHADOWMAP_TYPE_PCF",[ao]:"SHADOWMAP_TYPE_VSM"};function wM(n){return TM[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var EM={[co]:"ENVMAP_MODE_REFRACTION"};function AM(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":EM[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var RM={[vc]:"ENVMAP_BLENDING_MULTIPLY",[J0]:"ENVMAP_BLENDING_MIX",[j0]:"ENVMAP_BLENDING_ADD"};function CM(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":RM[n.combine]||"ENVMAP_BLENDING_NONE"}function PM(n,t,e,i){let s=n.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=wM(e),c=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=AM(e),u=CM(e),f=xM(e),d=yM(r),p=s.createProgram(),v,g,m=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(v=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d].filter(Ca).join(`
`),v.length>0&&(v+=`
`),g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d].filter(Ca).join(`
`),g.length>0&&(g+=`
`)):(v=[Bp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ca).join(`
`),g=[Bp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Wi?"#define TONE_MAPPING":"",e.toneMapping!==Wi?he.tonemapping_pars_fragment:"",e.toneMapping!==Wi?mM("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",he.colorspace_pars_fragment,dM("linearToOutputTexel",e.outputColorSpace),gM(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ca).join(`
`)),o=vf(o),o=kp(o,e),o=Op(o,e),a=vf(a),a=kp(a,e),a=Op(a,e),o=zp(o),a=zp(a),e.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,v=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,g=["#define varying in",e.glslVersion===lf?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===lf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let y=m+v+o,b=m+g+a,M=Dp(s,s.VERTEX_SHADER,y),R=Dp(s,s.FRAGMENT_SHADER,b);s.attachShader(p,M),s.attachShader(p,R),e.index0AttributeName!==void 0?s.bindAttribLocation(p,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(p,0,"position"),s.linkProgram(p);function T(S){if(n.debug.checkShaderErrors){let C=s.getProgramInfoLog(p)||"",I=s.getShaderInfoLog(M)||"",w=s.getShaderInfoLog(R)||"",P=C.trim(),O=I.trim(),W=w.trim(),q=!0,B=!0;if(s.getProgramParameter(p,s.LINK_STATUS)===!1)if(q=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,p,M,R);else{let U=Fp(s,M,"vertex"),H=Fp(s,R,"fragment");Kt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(p,s.VALIDATE_STATUS)+`

Material Name: `+S.name+`
Material Type: `+S.type+`

Program Info Log: `+P+`
`+U+`
`+H)}else P!==""?Zt("WebGLProgram: Program Info Log:",P):(O===""||W==="")&&(B=!1);B&&(S.diagnostics={runnable:q,programLog:P,vertexShader:{log:O,prefix:v},fragmentShader:{log:W,prefix:g}})}s.deleteShader(M),s.deleteShader(R),x=new fo(s,p),_=vM(s,p)}let x;this.getUniforms=function(){return x===void 0&&T(this),x};let _;this.getAttributes=function(){return _===void 0&&T(this),_};let A=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=s.getProgramParameter(p,cM)),A},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(p),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=hM++,this.cacheKey=t,this.usedTimes=1,this.program=p,this.vertexShader=M,this.fragmentShader=R,this}var IM=0,_f=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new Mf(t),e.set(t,i)),i}},Mf=class{constructor(t){this.id=IM++,this.code=t,this.usedTimes=0}};function LM(n){return n===Fs||n===wa||n===Ea}function NM(n,t,e,i,s,r){let o=new $o,a=new _f,l=new Set,c=[],h=new Map,u=i.logarithmicDepthBuffer,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(x){return l.add(x),x===0?"uv":`uv${x}`}function p(x,_,A,S,C,I){let w=S.fog,P=C.geometry,O=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?S.environment:null,W=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,q=t.get(x.envMap||O,W),B=f[x.type],U=i.precision;x.precision!==null&&(U=i.getMaxPrecision(x.precision),U!==x.precision&&Zt("WebGLProgram.getParameters:",x.precision,"not supported, using",U,"instead."));let H=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,E=H!==void 0?H.length:0,F=0;P.morphAttributes.position!==void 0&&(F=1),P.morphAttributes.normal!==void 0&&(F=2),P.morphAttributes.color!==void 0&&(F=3);let G,z,N,V;if(B){let Ct=qi[B];G=Ct.vertexShader,z=Ct.fragmentShader}else{G=x.vertexShader,z=x.fragmentShader;let Ct=a.getVertexShaderStage(x),we=a.getFragmentShaderStage(x);a.update(x,Ct,we),N=Ct.id,V=we.id}let Z=n.getRenderTarget(),J=n.state.buffers.depth.getReversed(),it=C.isInstancedMesh===!0,ut=C.isBatchedMesh===!0,Tt=!!x.map,Dt=!!x.matcap,Wt=!!q,at=Wt&&q.isPMREMTexture===!0,ht=!!x.aoMap,dt=!!x.lightMap,pt=!!x.bumpMap&&x.wireframe===!1,yt=!!x.normalMap,Gt=!!x.displacementMap,Lt=!!x.emissiveMap,ie=!!x.metalnessMap,le=!!x.roughnessMap,de=x.anisotropy>0,Q=x.clearcoat>0,Ze=x.diffuseRoughness>0,ue=x.dispersion>0,Ce=x.retroreflectivity>0,Et=x.iridescence>0,nn=x.sheen>0,Yt=x.transmission>0,jt=de&&!!x.anisotropyMap,X=Q&&!!x.clearcoatMap,L=Q&&!!x.clearcoatNormalMap,et=Q&&!!x.clearcoatRoughnessMap,mt=Ze&&!!x.diffuseRoughnessMap,ft=Et&&!!x.iridescenceMap,_t=Et&&!!x.iridescenceThicknessMap,At=nn&&!!x.sheenColorMap,ot=nn&&!!x.sheenRoughnessMap,lt=!!x.specularMap,bt=!!x.specularColorMap,K=!!x.specularIntensityMap,ct=Yt&&!!x.transmissionMap,rt=Yt&&!!x.thicknessMap,St=!!x.gradientMap,vt=!!x.alphaMap,Mt=x.alphaTest>0,Vt=!!x.alphaHash,ce=!!x.extensions,xt=Wi;x.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(xt=n.toneMapping);let qt=at?q.isCompressedCubeTexture?q.image[0].mipmaps:q.mipmaps:null,ae={shaderID:B,shaderType:x.type,shaderName:x.name,vertexShader:G,fragmentShader:z,defines:x.defines,customVertexShaderID:N,customFragmentShaderID:V,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:U,batching:ut,batchingColor:ut&&C._colorsTexture!==null,instancing:it,instancingColor:it&&C.instanceColor!==null,instancingMorph:it&&C.morphTexture!==null,outputColorSpace:Z===null?n.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:ge.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Tt,matcap:Dt,envMap:Wt,envMapMode:Wt&&q.mapping,envMapPMREM:at,envMapMaxLod:at?qt.length-1:null,envMapSize:at?qt[0].width:null,aoMap:ht,lightMap:dt,bumpMap:pt,normalMap:yt,displacementMap:Gt,emissiveMap:Lt,normalMapObjectSpace:yt&&x.normalMapType===ep,normalMapTangentSpace:yt&&x.normalMapType===Aa,packedNormalMap:yt&&x.normalMapType===Aa&&LM(x.normalMap.format),metalnessMap:ie,roughnessMap:le,anisotropy:de,anisotropyMap:jt,clearcoat:Q,clearcoatMap:X,clearcoatNormalMap:L,clearcoatRoughnessMap:et,diffuseRoughness:Ze,diffuseRoughnessMap:mt,dispersion:ue,retroreflection:Ce,iridescence:Et,iridescenceMap:ft,iridescenceThicknessMap:_t,sheen:nn,sheenColorMap:At,sheenRoughnessMap:ot,specularMap:lt,specularColorMap:bt,specularIntensityMap:K,transmission:Yt,transmissionMap:ct,thicknessMap:rt,gradientMap:St,opaque:x.transparent===!1&&x.blending===lo&&x.alphaToCoverage===!1,alphaMap:vt,alphaTest:Mt,alphaHash:Vt,combine:x.combine,mapUv:Tt&&d(x.map.channel),aoMapUv:ht&&d(x.aoMap.channel),lightMapUv:dt&&d(x.lightMap.channel),bumpMapUv:pt&&d(x.bumpMap.channel),normalMapUv:yt&&d(x.normalMap.channel),displacementMapUv:Gt&&d(x.displacementMap.channel),emissiveMapUv:Lt&&d(x.emissiveMap.channel),metalnessMapUv:ie&&d(x.metalnessMap.channel),roughnessMapUv:le&&d(x.roughnessMap.channel),anisotropyMapUv:jt&&d(x.anisotropyMap.channel),clearcoatMapUv:X&&d(x.clearcoatMap.channel),clearcoatNormalMapUv:L&&d(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:et&&d(x.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:mt&&d(x.diffuseRoughnessMap.channel),iridescenceMapUv:ft&&d(x.iridescenceMap.channel),iridescenceThicknessMapUv:_t&&d(x.iridescenceThicknessMap.channel),sheenColorMapUv:At&&d(x.sheenColorMap.channel),sheenRoughnessMapUv:ot&&d(x.sheenRoughnessMap.channel),specularMapUv:lt&&d(x.specularMap.channel),specularColorMapUv:bt&&d(x.specularColorMap.channel),specularIntensityMapUv:K&&d(x.specularIntensityMap.channel),transmissionMapUv:ct&&d(x.transmissionMap.channel),thicknessMapUv:rt&&d(x.thicknessMap.channel),alphaMapUv:vt&&d(x.alphaMap.channel),vertexTangents:!!P.attributes.tangent&&(yt||de),vertexNormals:!!P.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,pointsUvs:C.isPoints===!0&&!!P.attributes.uv&&(Tt||vt),fog:!!w,useFog:x.fog===!0,fogExp2:!!w&&w.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||P.attributes.normal===void 0&&yt===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:J,skinning:C.isSkinnedMesh===!0,hasPositionAttribute:P.attributes.position!==void 0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:E,morphTextureStride:F,numSunLights:_.sun.length,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numSunLightShadows:_.sunShadowMap.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numLightProbeGrids:I.filter(Ct=>Ct.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&A.length>0,shadowMapType:n.shadowMap.type,toneMapping:xt,decodeVideoTexture:Tt&&x.map.isVideoTexture===!0&&ge.getTransfer(x.map.colorSpace)===Se,decodeVideoTextureEmissive:Lt&&x.emissiveMap.isVideoTexture===!0&&ge.getTransfer(x.emissiveMap.colorSpace)===Se,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===pi,flipSided:x.side===mn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:ce&&x.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ce&&x.extensions.multiDraw===!0||ut)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return ae.vertexUv1s=l.has(1),ae.vertexUv2s=l.has(2),ae.vertexUv3s=l.has(3),l.clear(),ae}function v(x){let _=[];if(x.shaderID?_.push(x.shaderID):(_.push(x.customVertexShaderID),_.push(x.customFragmentShaderID)),x.defines!==void 0)for(let A in x.defines)_.push(A),_.push(x.defines[A]);return x.isRawShaderMaterial===!1&&(g(_,x),m(_,x),_.push(n.outputColorSpace)),_.push(x.customProgramCacheKey),_.join()}function g(x,_){x.push(_.precision),x.push(_.outputColorSpace),x.push(_.envMapMode),x.push(_.envMapPMREM),x.push(_.envMapMaxLod),x.push(_.envMapSize),x.push(_.mapUv),x.push(_.alphaMapUv),x.push(_.lightMapUv),x.push(_.aoMapUv),x.push(_.bumpMapUv),x.push(_.normalMapUv),x.push(_.displacementMapUv),x.push(_.emissiveMapUv),x.push(_.metalnessMapUv),x.push(_.roughnessMapUv),x.push(_.anisotropyMapUv),x.push(_.clearcoatMapUv),x.push(_.clearcoatNormalMapUv),x.push(_.clearcoatRoughnessMapUv),x.push(_.diffuseRoughnessMapUv),x.push(_.iridescenceMapUv),x.push(_.iridescenceThicknessMapUv),x.push(_.sheenColorMapUv),x.push(_.sheenRoughnessMapUv),x.push(_.specularMapUv),x.push(_.specularColorMapUv),x.push(_.specularIntensityMapUv),x.push(_.transmissionMapUv),x.push(_.thicknessMapUv),x.push(_.combine),x.push(_.fogExp2),x.push(_.sizeAttenuation),x.push(_.morphTargetsCount),x.push(_.numSunLights),x.push(_.numDirLights),x.push(_.numPointLights),x.push(_.numSpotLights),x.push(_.numSpotLightMaps),x.push(_.numHemiLights),x.push(_.numRectAreaLights),x.push(_.numSunLightShadows),x.push(_.numDirLightShadows),x.push(_.numPointLightShadows),x.push(_.numSpotLightShadows),x.push(_.numSpotLightShadowsWithMaps),x.push(_.numLightProbes),x.push(_.numLightProbeGrids),x.push(_.shadowMapType),x.push(_.toneMapping),x.push(_.numClippingPlanes),x.push(_.numClipIntersection),x.push(_.depthPacking)}function m(x,_){o.disableAll(),_.instancing&&o.enable(0),_.instancingColor&&o.enable(1),_.instancingMorph&&o.enable(2),_.matcap&&o.enable(3),_.envMap&&o.enable(4),_.normalMapObjectSpace&&o.enable(5),_.normalMapTangentSpace&&o.enable(6),_.clearcoat&&o.enable(7),_.iridescence&&o.enable(8),_.alphaTest&&o.enable(9),_.vertexColors&&o.enable(10),_.vertexAlphas&&o.enable(11),_.vertexUv1s&&o.enable(12),_.vertexUv2s&&o.enable(13),_.vertexUv3s&&o.enable(14),_.vertexTangents&&o.enable(15),_.anisotropy&&o.enable(16),_.alphaHash&&o.enable(17),_.batching&&o.enable(18),_.dispersion&&o.enable(19),_.retroreflection&&o.enable(24),_.diffuseRoughness&&o.enable(25),_.batchingColor&&o.enable(20),_.gradientMap&&o.enable(21),_.packedNormalMap&&o.enable(22),_.vertexNormals&&o.enable(23),x.push(o.mask),o.disableAll(),_.fog&&o.enable(0),_.useFog&&o.enable(1),_.flatShading&&o.enable(2),_.logarithmicDepthBuffer&&o.enable(3),_.reversedDepthBuffer&&o.enable(4),_.skinning&&o.enable(5),_.morphTargets&&o.enable(6),_.morphNormals&&o.enable(7),_.morphColors&&o.enable(8),_.premultipliedAlpha&&o.enable(9),_.shadowMapEnabled&&o.enable(10),_.doubleSided&&o.enable(11),_.flipSided&&o.enable(12),_.useDepthPacking&&o.enable(13),_.dithering&&o.enable(14),_.transmission&&o.enable(15),_.sheen&&o.enable(16),_.opaque&&o.enable(17),_.pointsUvs&&o.enable(18),_.decodeVideoTexture&&o.enable(19),_.decodeVideoTextureEmissive&&o.enable(20),_.alphaToCoverage&&o.enable(21),_.numLightProbeGrids>0&&o.enable(22),_.hasPositionAttribute&&o.enable(23),x.push(o.mask)}function y(x){let _=f[x.type],A;if(_){let S=qi[_];A=Mp.clone(S.uniforms)}else A=x.uniforms;return A}function b(x,_){let A=h.get(_);return A!==void 0?++A.usedTimes:(A=new PM(n,_,x,s),c.push(A),h.set(_,A)),A}function M(x){if(--x.usedTimes===0){let _=c.indexOf(x);c[_]=c[c.length-1],c.pop(),h.delete(x.cacheKey),x.destroy()}}function R(x){a.remove(x)}function T(){a.dispose()}return{getParameters:p,getProgramCacheKey:v,getUniforms:y,acquireProgram:b,releaseProgram:M,releaseShaderCache:R,programs:c,dispose:T}}function DM(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function UM(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.materialVariant!==t.materialVariant?n.materialVariant-t.materialVariant:n.z!==t.z?n.z-t.z:n.id-t.id}function Hp(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Vp(){let n=[],t=0,e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(f){let d=0;return f.isInstancedMesh&&(d+=2),f.isSkinnedMesh&&(d+=1),d}function a(f,d,p,v,g,m){let y=n[t];return y===void 0?(y={id:f.id,object:f,geometry:d,material:p,materialVariant:o(f),groupOrder:v,renderOrder:f.renderOrder,z:g,group:m},n[t]=y):(y.id=f.id,y.object=f,y.geometry=d,y.material=p,y.materialVariant=o(f),y.groupOrder=v,y.renderOrder=f.renderOrder,y.z=g,y.group=m),t++,y}function l(f,d,p,v,g,m,y){y.reversedDepth===!0&&(g=-g);let b=a(f,d,p,v,g,m);p.transmission>0?i.push(b):p.transparent===!0?s.push(b):e.push(b)}function c(f,d,p,v,g,m){let y=a(f,d,p,v,g,m);p.transmission>0?i.unshift(y):p.transparent===!0?s.unshift(y):e.unshift(y)}function h(f,d){e.length>1&&e.sort(f||UM),i.length>1&&i.sort(d||Hp),s.length>1&&s.sort(d||Hp)}function u(){for(let f=t,d=n.length;f<d;f++){let p=n[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:u,sort:h}}function FM(){let n=new WeakMap;function t(i,s){let r=n.get(i),o;return r===void 0?(o=new Vp,n.set(i,[o])):s>=r.length?(o=new Vp,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function kM(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new $,color:new Xt};break;case"SpotLight":e={position:new $,direction:new $,color:new Xt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new $,color:new Xt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new $,skyColor:new Xt,groundColor:new Xt};break;case"RectAreaLight":e={color:new Xt,position:new $,halfWidth:new $,halfHeight:new $};break}return n[t.id]=e,e}}}function OM(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var zM=0;function BM(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function HM(n){let t=new kM,e=OM(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new $);let s=new $,r=new ye,o=new ye;function a(c){let h=0,u=0,f=0;for(let I=0;I<9;I++)i.probe[I].set(0,0,0);let d=0,p=0,v=0,g=0,m=0,y=0,b=0,M=0,R=0,T=0,x=0,_=0,A=0,S=0;c.sort(BM);for(let I=0,w=c.length;I<w;I++){let P=c[I],O=P.color,W=P.intensity,q=P.distance,B=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===Fs?B=P.shadow.map.texture:B=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)h+=O.r*W,u+=O.g*W,f+=O.b*W;else if(P.isLightProbe){for(let U=0;U<9;U++)i.probe[U].addScaledVector(P.sh.coefficients[U],W);S++}else if(P.isSunLight){let U=t.get(P);if(U.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let H=P.shadow,E=e.get(P);E.shadowIntensity=H.intensity,E.shadowBias=H.bias,E.shadowNormalBias=H.normalBias,E.shadowRadius=H.radius,E.shadowMapSize.copy(H.mapSize).multiply(H.getFrameExtents()),i.sunShadow[p]=E,i.sunShadowMap[p]=B;let F=H.getViewportCount();for(let G=0;G<F;G++)i.sunShadowMatrix[v+G]=H.getMatrix(G),i.sunShadowCascade[v+G]=H._cascadeData[G];v+=F,p++}i.sun[d]=U,d++}else if(P.isDirectionalLight){let U=t.get(P);if(U.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let H=P.shadow,E=e.get(P);E.shadowIntensity=H.intensity,E.shadowBias=H.bias,E.shadowNormalBias=H.normalBias,E.shadowRadius=H.radius,E.shadowMapSize=H.mapSize,i.directionalShadow[g]=E,i.directionalShadowMap[g]=B,i.directionalShadowMatrix[g]=P.shadow.matrix,R++}i.directional[g]=U,g++}else if(P.isSpotLight){let U=t.get(P);U.position.setFromMatrixPosition(P.matrixWorld),U.color.copy(O).multiplyScalar(W),U.distance=q,U.coneCos=Math.cos(P.angle),U.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),U.decay=P.decay,i.spot[y]=U;let H=P.shadow;if(P.map&&(i.spotLightMap[_]=P.map,_++,H.updateMatrices(P),P.castShadow&&A++),i.spotLightMatrix[y]=H.matrix,P.castShadow){let E=e.get(P);E.shadowIntensity=H.intensity,E.shadowBias=H.bias,E.shadowNormalBias=H.normalBias,E.shadowRadius=H.radius,E.shadowMapSize=H.mapSize,i.spotShadow[y]=E,i.spotShadowMap[y]=B,x++}y++}else if(P.isRectAreaLight){let U=t.get(P);U.color.copy(O).multiplyScalar(W),U.halfWidth.set(P.width*.5,0,0),U.halfHeight.set(0,P.height*.5,0),i.rectArea[b]=U,b++}else if(P.isPointLight){let U=t.get(P);if(U.color.copy(P.color).multiplyScalar(P.intensity),U.distance=P.distance,U.decay=P.decay,P.castShadow){let H=P.shadow,E=e.get(P);E.shadowIntensity=H.intensity,E.shadowBias=H.bias,E.shadowNormalBias=H.normalBias,E.shadowRadius=H.radius,E.shadowMapSize=H.mapSize,E.shadowCameraNear=H.camera.near,E.shadowCameraFar=H.camera.far,i.pointShadow[m]=E,i.pointShadowMap[m]=B,i.pointShadowMatrix[m]=P.shadow.matrix,T++}i.point[m]=U,m++}else if(P.isHemisphereLight){let U=t.get(P);U.skyColor.copy(P.color).multiplyScalar(W),U.groundColor.copy(P.groundColor).multiplyScalar(W),i.hemi[M]=U,M++}}b>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Pt.LTC_FLOAT_1,i.rectAreaLTC2=Pt.LTC_FLOAT_2):(i.rectAreaLTC1=Pt.LTC_HALF_1,i.rectAreaLTC2=Pt.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=f;let C=i.hash;(C.sunLength!==d||C.directionalLength!==g||C.pointLength!==m||C.spotLength!==y||C.rectAreaLength!==b||C.hemiLength!==M||C.numSunShadows!==p||C.numDirectionalShadows!==R||C.numPointShadows!==T||C.numSpotShadows!==x||C.numSpotMaps!==_||C.numLightProbes!==S)&&(i.sun.length=d,i.directional.length=g,i.spot.length=y,i.rectArea.length=b,i.point.length=m,i.hemi.length=M,i.sunShadow.length=p,i.sunShadowMap.length=p,i.sunShadowMatrix.length=v,i.sunShadowCascade.length=v,i.directionalShadow.length=R,i.directionalShadowMap.length=R,i.directionalShadowMatrix.length=R,i.pointShadow.length=T,i.pointShadowMap.length=T,i.pointShadowMatrix.length=T,i.spotShadow.length=x,i.spotShadowMap.length=x,i.spotLightMatrix.length=x+_-A,i.spotLightMap.length=_,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=S,C.sunLength=d,C.directionalLength=g,C.pointLength=m,C.spotLength=y,C.rectAreaLength=b,C.hemiLength=M,C.numSunShadows=p,C.numDirectionalShadows=R,C.numPointShadows=T,C.numSpotShadows=x,C.numSpotMaps=_,C.numLightProbes=S,i.version=zM++)}function l(c,h){let u=0,f=0,d=0,p=0,v=0,g=0,m=h.matrixWorldInverse;for(let y=0,b=c.length;y<b;y++){let M=c[y];if(M.isSunLight){let R=i.sun[u];R.direction.setFromMatrixPosition(M.matrixWorld),R.direction.transformDirection(m),u++}else if(M.isDirectionalLight){let R=i.directional[f];R.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(m),f++}else if(M.isSpotLight){let R=i.spot[p];R.position.setFromMatrixPosition(M.matrixWorld),R.position.applyMatrix4(m),R.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(m),p++}else if(M.isRectAreaLight){let R=i.rectArea[v];R.position.setFromMatrixPosition(M.matrixWorld),R.position.applyMatrix4(m),o.identity(),r.copy(M.matrixWorld),r.premultiply(m),o.extractRotation(r),R.halfWidth.set(M.width*.5,0,0),R.halfHeight.set(0,M.height*.5,0),R.halfWidth.applyMatrix4(o),R.halfHeight.applyMatrix4(o),v++}else if(M.isPointLight){let R=i.point[d];R.position.setFromMatrixPosition(M.matrixWorld),R.position.applyMatrix4(m),d++}else if(M.isHemisphereLight){let R=i.hemi[g];R.direction.setFromMatrixPosition(M.matrixWorld),R.direction.transformDirection(m),g++}}}return{setup:a,setupView:l,state:i}}function Gp(n){let t=new HM(n),e=[],i=[],s=[];function r(u){h.camera=u,e.length=0,i.length=0,s.length=0}function o(u){u.isLightProbeGrid?s.push(u):e.push(u)}function a(u){i.push(u)}function l(){t.setup(e),s.sort((u,f)=>u.priority-f.priority||u.id-f.id)}function c(u){t.setupView(e,u)}let h={lightsArray:e,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function VM(n){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new Gp(n),t.set(s,[a])):r>=o.length?(a=new Gp(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}var GM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,WM=`uniform sampler2D shadow_pass;
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
}`,XM=[new $(1,0,0),new $(-1,0,0),new $(0,1,0),new $(0,-1,0),new $(0,0,1),new $(0,0,-1)],qM=[new $(0,-1,0),new $(0,-1,0),new $(0,0,1),new $(0,0,-1),new $(0,-1,0),new $(0,-1,0)],Wp=new ye,Ra=new $,mf=new $;function $M(n,t,e){let i=new Cs,s=new gt,r=new gt,o=new $e,a=new rc,l=new oc,c={},h=e.maxTextureSize,u={[Gi]:mn,[mn]:Gi,[pi]:pi},f=new di({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new gt},radius:{value:4}},vertexShader:GM,fragmentShader:WM}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let p=new Ue;p.setAttribute("position",new qe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new zt(p,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ya;let m=this.type;this.render=function(T,x,_){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||T.length===0)return;this.type===yc&&(Zt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ya);let A=n.getRenderTarget(),S=n.getActiveCubeFace(),C=n.getActiveMipmapLevel(),I=n.state;I.setBlending(hr),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);let w=m!==this.type;w&&x.traverse(function(P){P.material&&(Array.isArray(P.material)?P.material.forEach(O=>O.needsUpdate=!0):P.material.needsUpdate=!0)});for(let P=0,O=T.length;P<O;P++){let W=T[P],q=W.shadow;if(q===void 0){Zt("WebGLShadowMap:",W,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;s.copy(q.mapSize);let B=q.getFrameExtents();s.multiply(B),r.copy(q.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/B.x),s.x=r.x*B.x,q.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/B.y),s.y=r.y*B.y,q.mapSize.y=r.y));let U=n.state.buffers.depth.getReversed();if(q.camera._reversedDepth=U,q.map===null||w===!0){if(q.map!==null&&(q.map.depthTexture!==null&&(q.map.depthTexture.dispose(),q.map.depthTexture=null),q.map.dispose()),this.type===ao){if(W.isPointLight){Zt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}q.map=new jn(s.x,s.y,{format:Fs,type:Pi,minFilter:En,magFilter:En,generateMipmaps:!1}),q.map.texture.name=W.name+".shadowMap",q.map.depthTexture=new cs(s.x,s.y,mi),q.map.depthTexture.name=W.name+".shadowMapDepth",q.map.depthTexture.format=as,q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=Mn,q.map.depthTexture.magFilter=Mn}else W.isPointLight?(q.map=new Pa(s.x),q.map.depthTexture=new ea(s.x,Ci)):(q.map=new jn(s.x,s.y),q.map.depthTexture=new cs(s.x,s.y,Ci)),q.map.depthTexture.name=W.name+".shadowMap",q.map.depthTexture.format=as,this.type===ya?(q.map.depthTexture.compareFunction=U?rf:sf,q.map.depthTexture.minFilter=En,q.map.depthTexture.magFilter=En):(q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=Mn,q.map.depthTexture.magFilter=Mn);q.camera.updateProjectionMatrix()}q.map.isWebGLCubeRenderTarget!==!0&&(q.map.width!==s.x||q.map.height!==s.y)&&q.map.setSize(s.x,s.y);let H=q.map.isWebGLCubeRenderTarget?6:q.getViewportCount();W.isPointLight!==!0&&q.updateMatrices(W,_);let E=(q.camera.layers.mask&4294967294)!==0?q.camera.layers:_.layers;for(let F=0;F<H;F++){let G=q.getCamera(F);if(W.isPointLight){let z=q.camera,N=q.matrix,V=W.distance||z.far;V!==z.far&&(z.far=V,z.updateProjectionMatrix()),Ra.setFromMatrixPosition(W.matrixWorld),z.position.copy(Ra),mf.copy(z.position),mf.add(XM[F]),z.up.copy(qM[F]),z.lookAt(mf),z.updateMatrixWorld(),N.makeTranslation(-Ra.x,-Ra.y,-Ra.z),Wp.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),q._frustum.setFromProjectionMatrix(Wp,z.coordinateSystem,z.reversedDepth)}if(q.map.isWebGLCubeRenderTarget)n.setRenderTarget(q.map,F),n.clear();else{F===0&&(n.setRenderTarget(q.map),n.clear());let z=q.getViewport(F);o.set(r.x*z.x,r.y*z.y,r.x*z.z,r.y*z.w),I.viewport(o)}i=q.getFrustum(F),M(x,_,G,W,E,this.type)}q.isPointLightShadow!==!0&&this.type===ao&&y(q,_),q.needsUpdate=!1}m=this.type,g.needsUpdate=!1,n.setRenderTarget(A,S,C)};function y(T,x){let _=t.update(v);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,d.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),T.mapPass===null?T.mapPass=new jn(s.x,s.y,{format:Fs,type:Pi}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),f.uniforms.shadow_pass.value=T.map.depthTexture,f.uniforms.resolution.value.set(T.map.width,T.map.height),f.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(x,null,_,f,v,null),d.uniforms.shadow_pass.value=T.mapPass.texture,d.uniforms.resolution.value.set(T.map.width,T.map.height),d.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(x,null,_,d,v,null)}function b(T,x,_,A){let S=null,C=_.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(C!==void 0)S=C;else if(S=_.isPointLight===!0?l:a,n.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0||x.alphaToCoverage===!0){let I=S.uuid,w=x.uuid,P=c[I];P===void 0&&(P={},c[I]=P);let O=P[w];O===void 0&&(O=S.clone(),P[w]=O,x.addEventListener("dispose",R)),S=O}if(S.visible=x.visible,S.wireframe=x.wireframe,A===ao?S.side=x.shadowSide!==null?x.shadowSide:x.side:S.side=x.shadowSide!==null?x.shadowSide:u[x.side],S.alphaMap=x.alphaMap,S.alphaTest=x.alphaToCoverage===!0?.5:x.alphaTest,S.map=x.map,S.clipShadows=x.clipShadows,S.clippingPlanes=x.clippingPlanes,S.clipIntersection=x.clipIntersection,S.displacementMap=x.displacementMap,S.displacementScale=x.displacementScale,S.displacementBias=x.displacementBias,S.wireframeLinewidth=x.wireframeLinewidth,S.linewidth=x.linewidth,_.isPointLight===!0&&S.isMeshDistanceMaterial===!0){let I=n.properties.get(S);I.light=_}return S}function M(T,x,_,A,S,C){if(T.visible===!1)return;if(T.layers.test(S)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&C===ao)&&(!T.frustumCulled||T.intersectsFrustum(i))){T.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,T.matrixWorld);let P=t.update(T),O=T.material;if(Array.isArray(O)){let W=P.groups;for(let q=0,B=W.length;q<B;q++){let U=W[q],H=O[U.materialIndex];if(H&&H.visible){let E=b(T,H,A,C);T.onBeforeShadow(n,T,x,_,P,E,U),n.renderBufferDirect(_,null,P,E,T,U),T.onAfterShadow(n,T,x,_,P,E,U)}}}else if(O.visible){let W=b(T,O,A,C);T.onBeforeShadow(n,T,x,_,P,W,null),n.renderBufferDirect(_,null,P,W,T,null),T.onAfterShadow(n,T,x,_,P,W,null)}}let w=T.children;for(let P=0,O=w.length;P<O;P++)M(w[P],x,_,A,S,C)}function R(T){T.target.removeEventListener("dispose",R);for(let _ in c){let A=c[_],S=T.target.uuid;S in A&&(A[S].dispose(),delete A[S])}}}function YM(n,t){function e(){let K=!1,ct=new $e,rt=null,St=new $e(0,0,0,0);return{setMask:function(vt){rt!==vt&&!K&&(n.colorMask(vt,vt,vt,vt),rt=vt)},setLocked:function(vt){K=vt},setClear:function(vt,Mt,Vt,ce,xt){xt===!0&&(vt*=ce,Mt*=ce,Vt*=ce),ct.set(vt,Mt,Vt,ce),St.equals(ct)===!1&&(n.clearColor(vt,Mt,Vt,ce),St.copy(ct))},reset:function(){K=!1,rt=null,St.set(-1,0,0,0)}}}function i(){let K=!1,ct=!1,rt=null,St=null,vt=null;return{setReversed:function(Mt){if(ct!==Mt){let Vt=t.get("EXT_clip_control");Mt?Vt.clipControlEXT(Vt.LOWER_LEFT_EXT,Vt.ZERO_TO_ONE_EXT):Vt.clipControlEXT(Vt.LOWER_LEFT_EXT,Vt.NEGATIVE_ONE_TO_ONE_EXT),ct=Mt;let ce=vt;vt=null,this.setClear(ce)}},getReversed:function(){return ct},setTest:function(Mt){Mt?J(n.DEPTH_TEST):it(n.DEPTH_TEST)},setMask:function(Mt){rt!==Mt&&!K&&(n.depthMask(Mt),rt=Mt)},setFunc:function(Mt){if(ct&&(Mt=up[Mt]),St!==Mt){switch(Mt){case Fl:n.depthFunc(n.NEVER);break;case kl:n.depthFunc(n.ALWAYS);break;case Ol:n.depthFunc(n.LESS);break;case Zr:n.depthFunc(n.LEQUAL);break;case zl:n.depthFunc(n.EQUAL);break;case Bl:n.depthFunc(n.GEQUAL);break;case Hl:n.depthFunc(n.GREATER);break;case Vl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}St=Mt}},setLocked:function(Mt){K=Mt},setClear:function(Mt){vt!==Mt&&(vt=Mt,ct&&(Mt=1-Mt),n.clearDepth(Mt))},reset:function(){K=!1,rt=null,St=null,vt=null,ct=!1}}}function s(){let K=!1,ct=null,rt=null,St=null,vt=null,Mt=null,Vt=null,ce=null,xt=null;return{setTest:function(qt){K||(qt?J(n.STENCIL_TEST):it(n.STENCIL_TEST))},setMask:function(qt){ct!==qt&&!K&&(n.stencilMask(qt),ct=qt)},setFunc:function(qt,ae,Ct){(rt!==qt||St!==ae||vt!==Ct)&&(n.stencilFunc(qt,ae,Ct),rt=qt,St=ae,vt=Ct)},setOp:function(qt,ae,Ct){(Mt!==qt||Vt!==ae||ce!==Ct)&&(n.stencilOp(qt,ae,Ct),Mt=qt,Vt=ae,ce=Ct)},setLocked:function(qt){K=qt},setClear:function(qt){xt!==qt&&(n.clearStencil(qt),xt=qt)},reset:function(){K=!1,ct=null,rt=null,St=null,vt=null,Mt=null,Vt=null,ce=null,xt=null}}}let r=new e,o=new i,a=new s,l={},c=new WeakMap,h={},u={},f={},d=new WeakMap,p=[],v=null,g=!1,m=null,y=null,b=null,M=null,R=null,T=null,x=null,_=new Xt(0,0,0),A=0,S=!1,C=null,I=null,w=null,P=null,O=null,W=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),q=!1,B=0,U=n.getParameter(n.VERSION);U.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(U)[1]),q=B>=1):U.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(U)[1]),q=B>=2);let H=null,E={},F=n.getParameter(n.SCISSOR_BOX),G=n.getParameter(n.VIEWPORT),z=new $e().fromArray(F),N=new $e().fromArray(G);function V(K,ct,rt,St){let vt=new Uint8Array(4),Mt=n.createTexture();n.bindTexture(K,Mt),n.texParameteri(K,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(K,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Vt=0;Vt<rt;Vt++)K===n.TEXTURE_3D||K===n.TEXTURE_2D_ARRAY?n.texImage3D(ct,0,n.RGBA,1,1,St,0,n.RGBA,n.UNSIGNED_BYTE,vt):n.texImage2D(ct+Vt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,vt);return Mt}let Z={};Z[n.TEXTURE_2D]=V(n.TEXTURE_2D,n.TEXTURE_2D,1),Z[n.TEXTURE_CUBE_MAP]=V(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[n.TEXTURE_2D_ARRAY]=V(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Z[n.TEXTURE_3D]=V(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),J(n.DEPTH_TEST),o.setFunc(Zr),pt(!1),yt(Ou),J(n.CULL_FACE),ht(hr);function J(K){h[K]!==!0&&(n.enable(K),h[K]=!0)}function it(K){h[K]!==!1&&(n.disable(K),h[K]=!1)}function ut(K,ct){return f[K]!==ct?(n.bindFramebuffer(K,ct),f[K]=ct,K===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=ct),K===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=ct),!0):!1}function Tt(K,ct){let rt=p,St=!1;if(K){rt=d.get(ct),rt===void 0&&(rt=[],d.set(ct,rt));let vt=K.textures;if(rt.length!==vt.length||rt[0]!==n.COLOR_ATTACHMENT0){for(let Mt=0,Vt=vt.length;Mt<Vt;Mt++)rt[Mt]=n.COLOR_ATTACHMENT0+Mt;rt.length=vt.length,St=!0}}else rt[0]!==n.BACK&&(rt[0]=n.BACK,St=!0);St&&n.drawBuffers(rt)}function Dt(K){return v!==K?(n.useProgram(K),v=K,!0):!1}let Wt={[ur]:n.FUNC_ADD,[D0]:n.FUNC_SUBTRACT,[U0]:n.FUNC_REVERSE_SUBTRACT};Wt[F0]=n.MIN,Wt[k0]=n.MAX;let at={[O0]:n.ZERO,[z0]:n.ONE,[B0]:n.SRC_COLOR,[Vu]:n.SRC_ALPHA,[q0]:n.SRC_ALPHA_SATURATE,[W0]:n.DST_COLOR,[V0]:n.DST_ALPHA,[H0]:n.ONE_MINUS_SRC_COLOR,[Gu]:n.ONE_MINUS_SRC_ALPHA,[X0]:n.ONE_MINUS_DST_COLOR,[G0]:n.ONE_MINUS_DST_ALPHA,[$0]:n.CONSTANT_COLOR,[Y0]:n.ONE_MINUS_CONSTANT_COLOR,[Z0]:n.CONSTANT_ALPHA,[K0]:n.ONE_MINUS_CONSTANT_ALPHA};function ht(K,ct,rt,St,vt,Mt,Vt,ce,xt,qt){if(K===hr){g===!0&&(it(n.BLEND),g=!1);return}if(g===!1&&(J(n.BLEND),g=!0),K!==N0){if(K!==m||qt!==S){if((y!==ur||R!==ur)&&(n.blendEquation(n.FUNC_ADD),y=ur,R=ur),qt)switch(K){case lo:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case zu:n.blendFunc(n.ONE,n.ONE);break;case Bu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Hu:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Kt("WebGLState: Invalid blending: ",K);break}else switch(K){case lo:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case zu:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Bu:Kt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Hu:Kt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Kt("WebGLState: Invalid blending: ",K);break}b=null,M=null,T=null,x=null,_.set(0,0,0),A=0,m=K,S=qt}return}vt=vt||ct,Mt=Mt||rt,Vt=Vt||St,(ct!==y||vt!==R)&&(n.blendEquationSeparate(Wt[ct],Wt[vt]),y=ct,R=vt),(rt!==b||St!==M||Mt!==T||Vt!==x)&&(n.blendFuncSeparate(at[rt],at[St],at[Mt],at[Vt]),b=rt,M=St,T=Mt,x=Vt),(ce.equals(_)===!1||xt!==A)&&(n.blendColor(ce.r,ce.g,ce.b,xt),_.copy(ce),A=xt),m=K,S=!1}function dt(K,ct){K.side===pi?it(n.CULL_FACE):J(n.CULL_FACE);let rt=K.side===mn;ct&&(rt=!rt),pt(rt),K.blending===lo&&K.transparent===!1?ht(hr):ht(K.blending,K.blendEquation,K.blendSrc,K.blendDst,K.blendEquationAlpha,K.blendSrcAlpha,K.blendDstAlpha,K.blendColor,K.blendAlpha,K.premultipliedAlpha),o.setFunc(K.depthFunc),o.setTest(K.depthTest),o.setMask(K.depthWrite),r.setMask(K.colorWrite);let St=K.stencilWrite;a.setTest(St),St&&(a.setMask(K.stencilWriteMask),a.setFunc(K.stencilFunc,K.stencilRef,K.stencilFuncMask),a.setOp(K.stencilFail,K.stencilZFail,K.stencilZPass)),Lt(K.polygonOffset,K.polygonOffsetFactor,K.polygonOffsetUnits),K.alphaToCoverage===!0?J(n.SAMPLE_ALPHA_TO_COVERAGE):it(n.SAMPLE_ALPHA_TO_COVERAGE)}function pt(K){C!==K&&(K?n.frontFace(n.CW):n.frontFace(n.CCW),C=K)}function yt(K){K!==I0?(J(n.CULL_FACE),K!==I&&(K===Ou?n.cullFace(n.BACK):K===L0?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):it(n.CULL_FACE),I=K}function Gt(K){K!==w&&(q&&n.lineWidth(K),w=K)}function Lt(K,ct,rt){K?(J(n.POLYGON_OFFSET_FILL),(P!==ct||O!==rt)&&(P=ct,O=rt,o.getReversed()&&(ct=-ct,rt=-rt),n.polygonOffset(ct,rt))):it(n.POLYGON_OFFSET_FILL)}function ie(K){K?J(n.SCISSOR_TEST):it(n.SCISSOR_TEST)}function le(K){K===void 0&&(K=n.TEXTURE0+W-1),H!==K&&(n.activeTexture(K),H=K)}function de(K,ct,rt){rt===void 0&&(H===null?rt=n.TEXTURE0+W-1:rt=H);let St=E[rt];St===void 0&&(St={type:void 0,texture:void 0},E[rt]=St),(St.type!==K||St.texture!==ct)&&(H!==rt&&(n.activeTexture(rt),H=rt),n.bindTexture(K,ct||Z[K]),St.type=K,St.texture=ct)}function Q(){let K=E[H];K!==void 0&&K.type!==void 0&&(n.bindTexture(K.type,null),K.type=void 0,K.texture=void 0)}function Ze(){try{n.compressedTexImage2D(...arguments)}catch(K){Kt("WebGLState:",K)}}function ue(){try{n.compressedTexImage3D(...arguments)}catch(K){Kt("WebGLState:",K)}}function Ce(){try{n.texSubImage2D(...arguments)}catch(K){Kt("WebGLState:",K)}}function Et(){try{n.texSubImage3D(...arguments)}catch(K){Kt("WebGLState:",K)}}function nn(){try{n.compressedTexSubImage2D(...arguments)}catch(K){Kt("WebGLState:",K)}}function Yt(){try{n.compressedTexSubImage3D(...arguments)}catch(K){Kt("WebGLState:",K)}}function jt(){try{n.texStorage2D(...arguments)}catch(K){Kt("WebGLState:",K)}}function X(){try{n.texStorage3D(...arguments)}catch(K){Kt("WebGLState:",K)}}function L(){try{n.texImage2D(...arguments)}catch(K){Kt("WebGLState:",K)}}function et(){try{n.texImage3D(...arguments)}catch(K){Kt("WebGLState:",K)}}function mt(K){return u[K]!==void 0?u[K]:n.getParameter(K)}function ft(K,ct){u[K]!==ct&&(n.pixelStorei(K,ct),u[K]=ct)}function _t(K){z.equals(K)===!1&&(n.scissor(K.x,K.y,K.z,K.w),z.copy(K))}function At(K){N.equals(K)===!1&&(n.viewport(K.x,K.y,K.z,K.w),N.copy(K))}function ot(K,ct){let rt=c.get(ct);rt===void 0&&(rt=new WeakMap,c.set(ct,rt));let St=rt.get(K);St===void 0&&(St=n.getUniformBlockIndex(ct,K.name),n.uniformBlockBinding(ct,St,St),rt.set(K,St))}function lt(K,ct,rt){let vt=c.get(ct).get(K);l[vt]!==rt&&(n.bindBufferBase(n.UNIFORM_BUFFER,vt,rt),l[vt]=rt)}function bt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),h={},u={},H=null,E={},f={},l={},d=new WeakMap,p=[],v=null,g=!1,m=null,y=null,b=null,M=null,R=null,T=null,x=null,_=new Xt(0,0,0),A=0,S=!1,C=null,I=null,w=null,P=null,O=null,z.set(0,0,n.canvas.width,n.canvas.height),N.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:J,disable:it,bindFramebuffer:ut,drawBuffers:Tt,useProgram:Dt,setBlending:ht,setMaterial:dt,setFlipSided:pt,setCullFace:yt,setLineWidth:Gt,setPolygonOffset:Lt,setScissorTest:ie,activeTexture:le,bindTexture:de,unbindTexture:Q,compressedTexImage2D:Ze,compressedTexImage3D:ue,texImage2D:L,texImage3D:et,pixelStorei:ft,getParameter:mt,updateUBOMapping:ot,uniformBlockBinding:lt,texStorage2D:jt,texStorage3D:X,texSubImage2D:Ce,texSubImage3D:Et,compressedTexSubImage2D:nn,compressedTexSubImage3D:Yt,scissor:_t,viewport:At,reset:bt}}function ZM(n,t,e,i,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new gt,h=new WeakMap,u=new Set,f,d=new WeakMap,p=new Set,v=new FinalizationRegistry(X=>p.delete(X)),g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(X,L){return g?new OffscreenCanvas(X,L):Wo("canvas")}function y(X,L,et){let mt=1,ft=jt(X);if((ft.width>et||ft.height>et)&&(mt=et/Math.max(ft.width,ft.height)),mt<1)if(typeof HTMLImageElement<"u"&&X instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&X instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&X instanceof ImageBitmap||typeof VideoFrame<"u"&&X instanceof VideoFrame){let _t=Math.floor(mt*ft.width),At=Math.floor(mt*ft.height);f===void 0&&(f=m(_t,At));let ot=L?m(_t,At):f;return ot.width=_t,ot.height=At,ot.getContext("2d").drawImage(X,0,0,_t,At),Zt("WebGLRenderer: Texture has been resized from ("+ft.width+"x"+ft.height+") to ("+_t+"x"+At+")."),ot}else return"data"in X&&Zt("WebGLRenderer: Image in DataTexture is too big ("+ft.width+"x"+ft.height+")."),X;return X}function b(X){return X.generateMipmaps}function M(X){n.generateMipmap(X)}function R(X){return X.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:X.isWebGL3DRenderTarget?n.TEXTURE_3D:X.isWebGLArrayRenderTarget||X.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function T(X,L,et,mt,ft,_t=!1){if(X!==null){if(n[X]!==void 0)return n[X];Zt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+X+"'")}let At;mt&&(At=t.get("EXT_texture_norm16"),At||Zt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ot=L;if(L===n.RED&&(et===n.FLOAT&&(ot=n.R32F),et===n.HALF_FLOAT&&(ot=n.R16F),et===n.UNSIGNED_BYTE&&(ot=n.R8),et===n.UNSIGNED_SHORT&&At&&(ot=At.R16_EXT),et===n.SHORT&&At&&(ot=At.R16_SNORM_EXT)),L===n.RED_INTEGER&&(et===n.UNSIGNED_BYTE&&(ot=n.R8UI),et===n.UNSIGNED_SHORT&&(ot=n.R16UI),et===n.UNSIGNED_INT&&(ot=n.R32UI),et===n.BYTE&&(ot=n.R8I),et===n.SHORT&&(ot=n.R16I),et===n.INT&&(ot=n.R32I)),L===n.RG&&(et===n.FLOAT&&(ot=n.RG32F),et===n.HALF_FLOAT&&(ot=n.RG16F),et===n.UNSIGNED_BYTE&&(ot=n.RG8),et===n.UNSIGNED_SHORT&&At&&(ot=At.RG16_EXT),et===n.SHORT&&At&&(ot=At.RG16_SNORM_EXT)),L===n.RG_INTEGER&&(et===n.UNSIGNED_BYTE&&(ot=n.RG8UI),et===n.UNSIGNED_SHORT&&(ot=n.RG16UI),et===n.UNSIGNED_INT&&(ot=n.RG32UI),et===n.BYTE&&(ot=n.RG8I),et===n.SHORT&&(ot=n.RG16I),et===n.INT&&(ot=n.RG32I)),L===n.RGB_INTEGER&&(et===n.UNSIGNED_BYTE&&(ot=n.RGB8UI),et===n.UNSIGNED_SHORT&&(ot=n.RGB16UI),et===n.UNSIGNED_INT&&(ot=n.RGB32UI),et===n.BYTE&&(ot=n.RGB8I),et===n.SHORT&&(ot=n.RGB16I),et===n.INT&&(ot=n.RGB32I)),L===n.RGBA_INTEGER&&(et===n.UNSIGNED_BYTE&&(ot=n.RGBA8UI),et===n.UNSIGNED_SHORT&&(ot=n.RGBA16UI),et===n.UNSIGNED_INT&&(ot=n.RGBA32UI),et===n.BYTE&&(ot=n.RGBA8I),et===n.SHORT&&(ot=n.RGBA16I),et===n.INT&&(ot=n.RGBA32I)),L===n.RGB&&(et===n.UNSIGNED_SHORT&&At&&(ot=At.RGB16_EXT),et===n.SHORT&&At&&(ot=At.RGB16_SNORM_EXT),et===n.UNSIGNED_INT_5_9_9_9_REV&&(ot=n.RGB9_E5),et===n.UNSIGNED_INT_10F_11F_11F_REV&&(ot=n.R11F_G11F_B10F)),L===n.RGBA){let lt=_t?Go:ge.getTransfer(ft);et===n.FLOAT&&(ot=n.RGBA32F),et===n.HALF_FLOAT&&(ot=n.RGBA16F),et===n.UNSIGNED_BYTE&&(ot=lt===Se?n.SRGB8_ALPHA8:n.RGBA8),et===n.UNSIGNED_SHORT&&At&&(ot=At.RGBA16_EXT),et===n.SHORT&&At&&(ot=At.RGBA16_SNORM_EXT),et===n.UNSIGNED_SHORT_4_4_4_4&&(ot=n.RGBA4),et===n.UNSIGNED_SHORT_5_5_5_1&&(ot=n.RGB5_A1)}return(ot===n.R16F||ot===n.R32F||ot===n.RG16F||ot===n.RG32F||ot===n.RGBA16F||ot===n.RGBA32F)&&t.get("EXT_color_buffer_float"),ot}function x(X,L){let et;return X?L===null||L===Ci||L===dr?et=n.DEPTH24_STENCIL8:L===mi?et=n.DEPTH32F_STENCIL8:L===ho&&(et=n.DEPTH24_STENCIL8,Zt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):L===null||L===Ci||L===dr?et=n.DEPTH_COMPONENT24:L===mi?et=n.DEPTH_COMPONENT32F:L===ho&&(et=n.DEPTH_COMPONENT16),et}function _(X,L){return b(X)===!0||X.isFramebufferTexture&&X.minFilter!==Mn&&X.minFilter!==En?Math.log2(Math.max(L.width,L.height))+1:X.mipmaps.length>0?X.mipmaps.length:X.isCompressedTexture&&Array.isArray(X.image)?L.mipmaps.length:1}function A(X){let L=new WeakRef(X);i.get(X).__ref=L,p.add(L),v.register(X,L,L)}function S(X){let L=i.get(X).__ref;L!==void 0&&(p.delete(L),v.unregister(L))}function C(X){w(X.target)}function I(X){P(X.target)}function w(X){X.removeEventListener("dispose",C),S(X),W(X),X.isVideoTexture&&h.delete(X),X.isHTMLTexture&&u.delete(X)}function P(X){X.removeEventListener("dispose",I),S(X),B(X)}function O(){for(let X of p){let L=X.deref();L!==void 0&&(L.isRenderTarget===!0?P(L):w(L))}p.clear(),u.clear()}function W(X){let L=i.get(X);if(L.__webglInit===void 0)return;let et=X.source,mt=d.get(et);if(mt){let ft=mt[L.__cacheKey];ft.usedTimes--,ft.usedTimes===0&&q(X),Object.keys(mt).length===0&&d.delete(et)}i.remove(X)}function q(X){let L=i.get(X);n.deleteTexture(L.__webglTexture);let et=X.source,mt=d.get(et);delete mt[L.__cacheKey],o.memory.textures--}function B(X){let L=i.get(X);L.__depthDisposeCallback&&L.__depthDisposeCallback();let et=X.depthTexture;if(et&&et.renderTarget===X&&w(et),X.isWebGLCubeRenderTarget)for(let ft=0;ft<6;ft++){if(Array.isArray(L.__webglFramebuffer[ft]))for(let _t=0;_t<L.__webglFramebuffer[ft].length;_t++)n.deleteFramebuffer(L.__webglFramebuffer[ft][_t]);else n.deleteFramebuffer(L.__webglFramebuffer[ft]);L.__webglDepthbuffer&&n.deleteRenderbuffer(L.__webglDepthbuffer[ft])}else{if(Array.isArray(L.__webglFramebuffer))for(let ft=0;ft<L.__webglFramebuffer.length;ft++)n.deleteFramebuffer(L.__webglFramebuffer[ft]);else n.deleteFramebuffer(L.__webglFramebuffer);if(L.__webglDepthbuffer&&n.deleteRenderbuffer(L.__webglDepthbuffer),L.__webglMultisampledFramebuffer&&n.deleteFramebuffer(L.__webglMultisampledFramebuffer),L.__webglColorRenderbuffer)for(let ft=0;ft<L.__webglColorRenderbuffer.length;ft++)L.__webglColorRenderbuffer[ft]&&n.deleteRenderbuffer(L.__webglColorRenderbuffer[ft]);L.__webglDepthRenderbuffer&&n.deleteRenderbuffer(L.__webglDepthRenderbuffer)}let mt=X.textures;for(let ft=0,_t=mt.length;ft<_t;ft++){let At=i.get(mt[ft]);At.__webglTexture&&(n.deleteTexture(At.__webglTexture),o.memory.textures--),i.remove(mt[ft])}i.remove(X)}let U=0;function H(){U=0}function E(){return U}function F(X){U=X}function G(){let X=U;return X>=s.maxTextures&&Zt("WebGLTextures: Trying to use "+(X+1)+" texture units while this GPU supports only "+s.maxTextures),U+=1,X}function z(X){let L=[];return L.push(X.wrapS),L.push(X.wrapT),L.push(X.wrapR||0),L.push(X.magFilter),L.push(X.minFilter),L.push(X.anisotropy),L.push(X.internalFormat),L.push(X.format),L.push(X.type),L.push(X.generateMipmaps),L.push(X.mipmapsAutoUpdate),L.push(X.premultiplyAlpha),L.push(X.flipY),L.push(X.unpackAlignment),L.push(X.colorSpace),L.join()}function N(X,L){let et=i.get(X);if(X.isVideoTexture&&nn(X),X.isRenderTargetTexture===!1&&X.isExternalTexture!==!0&&X.version>0&&et.__version!==X.version){let mt=X.image;if(mt===null)Zt("WebGLRenderer: Texture marked for update but no image data found.");else if(mt.complete===!1)Zt("WebGLRenderer: Texture marked for update but image is incomplete");else{dt(et,X,L);return}}else X.isExternalTexture&&(et.__webglTexture=X.sourceTexture?X.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,et.__webglTexture,n.TEXTURE0+L)}function V(X,L){let et=i.get(X);if(X.isRenderTargetTexture===!1&&X.version>0&&et.__version!==X.version){dt(et,X,L);return}else X.isExternalTexture&&(et.__webglTexture=X.sourceTexture?X.sourceTexture:null);e.bindTexture(n.TEXTURE_2D_ARRAY,et.__webglTexture,n.TEXTURE0+L)}function Z(X,L){let et=i.get(X);if(X.isRenderTargetTexture===!1&&X.version>0&&et.__version!==X.version){dt(et,X,L);return}e.bindTexture(n.TEXTURE_3D,et.__webglTexture,n.TEXTURE0+L)}function J(X,L){let et=i.get(X);if(X.version>0&&et.__version!==X.version){pt(et,X,L);return}e.bindTexture(n.TEXTURE_CUBE_MAP,et.__webglTexture,n.TEXTURE0+L)}let it={[Rs]:n.REPEAT,[ki]:n.CLAMP_TO_EDGE,[Gl]:n.MIRRORED_REPEAT},ut={[Mn]:n.NEAREST,[Q0]:n.NEAREST_MIPMAP_NEAREST,[_a]:n.NEAREST_MIPMAP_LINEAR,[En]:n.LINEAR,[bc]:n.LINEAR_MIPMAP_NEAREST,[Ri]:n.LINEAR_MIPMAP_LINEAR},Tt={[ip]:n.NEVER,[of]:n.ALWAYS,[sp]:n.LESS,[sf]:n.LEQUAL,[rp]:n.EQUAL,[rf]:n.GEQUAL,[op]:n.GREATER,[ap]:n.NOTEQUAL};function Dt(X,L){if(L.type===mi&&t.has("OES_texture_float_linear")===!1&&(L.magFilter===En||L.magFilter===bc||L.magFilter===_a||L.magFilter===Ri||L.minFilter===En||L.minFilter===bc||L.minFilter===_a||L.minFilter===Ri)&&Zt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(X,n.TEXTURE_WRAP_S,it[L.wrapS]),n.texParameteri(X,n.TEXTURE_WRAP_T,it[L.wrapT]),(X===n.TEXTURE_3D||X===n.TEXTURE_2D_ARRAY)&&n.texParameteri(X,n.TEXTURE_WRAP_R,it[L.wrapR]),n.texParameteri(X,n.TEXTURE_MAG_FILTER,ut[L.magFilter]),n.texParameteri(X,n.TEXTURE_MIN_FILTER,ut[L.minFilter]),L.compareFunction&&(n.texParameteri(X,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(X,n.TEXTURE_COMPARE_FUNC,Tt[L.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(L.magFilter===Mn||L.minFilter!==_a&&L.minFilter!==Ri||L.type===mi&&t.has("OES_texture_float_linear")===!1)return;if(L.anisotropy>1||i.get(L).__currentAnisotropy){let et=t.get("EXT_texture_filter_anisotropic");n.texParameterf(X,et.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(L.anisotropy,s.getMaxAnisotropy())),i.get(L).__currentAnisotropy=L.anisotropy}}}function Wt(X,L){let et=!1;X.__webglInit===void 0&&(X.__webglInit=!0,L.addEventListener("dispose",C),A(L));let mt=L.source,ft=d.get(mt);ft===void 0&&(ft={},d.set(mt,ft));let _t=z(L);if(_t!==X.__cacheKey){ft[_t]===void 0&&(ft[_t]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,et=!0),ft[_t].usedTimes++;let At=ft[X.__cacheKey];At!==void 0&&(ft[X.__cacheKey].usedTimes--,At.usedTimes===0&&q(L)),X.__cacheKey=_t,X.__webglTexture=ft[_t].texture}return et}function at(X,L,et){return Math.floor(Math.floor(X/et)/L)}function ht(X,L,et,mt){let _t=X.updateRanges;if(_t.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,L.width,L.height,et,mt,L.data);else{_t.sort((K,ct)=>K.start-ct.start);let At=0;for(let K=1;K<_t.length;K++){let ct=_t[At],rt=_t[K],St=ct.start+ct.count,vt=at(rt.start,L.width,4),Mt=at(ct.start,L.width,4);rt.start<=St+1&&vt===Mt&&at(rt.start+rt.count-1,L.width,4)===vt?ct.count=Math.max(ct.count,rt.start+rt.count-ct.start):(++At,_t[At]=rt)}_t.length=At+1;let ot=e.getParameter(n.UNPACK_ROW_LENGTH),lt=e.getParameter(n.UNPACK_SKIP_PIXELS),bt=e.getParameter(n.UNPACK_SKIP_ROWS);e.pixelStorei(n.UNPACK_ROW_LENGTH,L.width);for(let K=0,ct=_t.length;K<ct;K++){let rt=_t[K],St=Math.floor(rt.start/4),vt=Math.ceil(rt.count/4),Mt=St%L.width,Vt=Math.floor(St/L.width),ce=vt,xt=1;e.pixelStorei(n.UNPACK_SKIP_PIXELS,Mt),e.pixelStorei(n.UNPACK_SKIP_ROWS,Vt),e.texSubImage2D(n.TEXTURE_2D,0,Mt,Vt,ce,xt,et,mt,L.data)}X.clearUpdateRanges(),e.pixelStorei(n.UNPACK_ROW_LENGTH,ot),e.pixelStorei(n.UNPACK_SKIP_PIXELS,lt),e.pixelStorei(n.UNPACK_SKIP_ROWS,bt)}}function dt(X,L,et){let mt=n.TEXTURE_2D;(L.isDataArrayTexture||L.isCompressedArrayTexture)&&(mt=n.TEXTURE_2D_ARRAY),L.isData3DTexture&&(mt=n.TEXTURE_3D);let ft=Wt(X,L),_t=L.source;e.bindTexture(mt,X.__webglTexture,n.TEXTURE0+et);let At=i.get(_t);if(_t.version!==At.__version||ft===!0){if(e.activeTexture(n.TEXTURE0+et),(typeof ImageBitmap<"u"&&L.image instanceof ImageBitmap)===!1){let xt=ge.getPrimaries(ge.workingColorSpace),qt=L.colorSpace===ds?null:ge.getPrimaries(L.colorSpace),ae=L.colorSpace===ds||xt===qt?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,L.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ae)}e.pixelStorei(n.UNPACK_ALIGNMENT,L.unpackAlignment);let lt=y(L.image,!1,s.maxTextureSize);lt=Yt(L,lt);let bt=r.convert(L.format,L.colorSpace),K=r.convert(L.type),ct=T(L.internalFormat,bt,K,L.normalized,L.colorSpace,L.isVideoTexture);Dt(mt,L);let rt,St=L.mipmaps,vt=L.isVideoTexture!==!0,Mt=At.__version===void 0||ft===!0,Vt=_t.dataReady,ce=_(L,lt);if(L.isDepthTexture)ct=x(L.format===fs,L.type),Mt&&(vt?e.texStorage2D(n.TEXTURE_2D,1,ct,lt.width,lt.height):e.texImage2D(n.TEXTURE_2D,0,ct,lt.width,lt.height,0,bt,K,null));else if(L.isDataTexture)if(St.length>0){vt&&Mt&&e.texStorage2D(n.TEXTURE_2D,ce,ct,St[0].width,St[0].height);for(let xt=0,qt=St.length;xt<qt;xt++)rt=St[xt],vt?Vt&&e.texSubImage2D(n.TEXTURE_2D,xt,0,0,rt.width,rt.height,bt,K,rt.data):e.texImage2D(n.TEXTURE_2D,xt,ct,rt.width,rt.height,0,bt,K,rt.data);L.generateMipmaps=!1}else vt?(Mt&&e.texStorage2D(n.TEXTURE_2D,ce,ct,lt.width,lt.height),Vt&&ht(L,lt,bt,K)):e.texImage2D(n.TEXTURE_2D,0,ct,lt.width,lt.height,0,bt,K,lt.data);else if(L.isCompressedTexture)if(L.isCompressedArrayTexture){vt&&Mt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,ce,ct,St[0].width,St[0].height,lt.depth);for(let xt=0,qt=St.length;xt<qt;xt++)if(rt=St[xt],L.format!==ii)if(bt!==null)if(vt){if(Vt)if(L.layerUpdates.size>0){let ae=df(rt.width,rt.height,L.format,L.type);for(let Ct of L.layerUpdates){let we=rt.data.subarray(Ct*ae/rt.data.BYTES_PER_ELEMENT,(Ct+1)*ae/rt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,xt,0,0,Ct,rt.width,rt.height,1,bt,we)}}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,xt,0,0,0,rt.width,rt.height,lt.depth,bt,rt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,xt,ct,rt.width,rt.height,lt.depth,0,rt.data,0,0);else Zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else vt?Vt&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,xt,0,0,0,rt.width,rt.height,lt.depth,bt,K,rt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,xt,ct,rt.width,rt.height,lt.depth,0,bt,K,rt.data);L.layerUpdates.size>0&&L.clearLayerUpdates()}else{vt&&Mt&&e.texStorage2D(n.TEXTURE_2D,ce,ct,St[0].width,St[0].height);for(let xt=0,qt=St.length;xt<qt;xt++)rt=St[xt],L.format!==ii?bt!==null?vt?Vt&&e.compressedTexSubImage2D(n.TEXTURE_2D,xt,0,0,rt.width,rt.height,bt,rt.data):e.compressedTexImage2D(n.TEXTURE_2D,xt,ct,rt.width,rt.height,0,rt.data):Zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):vt?Vt&&e.texSubImage2D(n.TEXTURE_2D,xt,0,0,rt.width,rt.height,bt,K,rt.data):e.texImage2D(n.TEXTURE_2D,xt,ct,rt.width,rt.height,0,bt,K,rt.data)}else if(L.isDataArrayTexture)if(vt){if(Mt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,ce,ct,lt.width,lt.height,lt.depth),Vt)if(L.layerUpdates.size>0){let xt=df(lt.width,lt.height,L.format,L.type);for(let qt of L.layerUpdates){let ae=lt.data.subarray(qt*xt/lt.data.BYTES_PER_ELEMENT,(qt+1)*xt/lt.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,qt,lt.width,lt.height,1,bt,K,ae)}L.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,lt.width,lt.height,lt.depth,bt,K,lt.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,ct,lt.width,lt.height,lt.depth,0,bt,K,lt.data);else if(L.isData3DTexture)vt?(Mt&&e.texStorage3D(n.TEXTURE_3D,ce,ct,lt.width,lt.height,lt.depth),Vt&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,lt.width,lt.height,lt.depth,bt,K,lt.data)):e.texImage3D(n.TEXTURE_3D,0,ct,lt.width,lt.height,lt.depth,0,bt,K,lt.data);else if(L.isFramebufferTexture){if(Mt)if(vt)e.texStorage2D(n.TEXTURE_2D,ce,ct,lt.width,lt.height);else{let xt=lt.width,qt=lt.height;for(let ae=0;ae<ce;ae++)e.texImage2D(n.TEXTURE_2D,ae,ct,xt,qt,0,bt,K,null),xt>>=1,qt>>=1}}else if(L.isHTMLTexture){if("texElementImage2D"in n){let xt=n.canvas;if(xt.hasAttribute("layoutsubtree")||xt.setAttribute("layoutsubtree","true"),lt.parentNode!==xt){xt.appendChild(lt),u.add(L),xt.onpaint=qt=>{let ae=qt.changedElements;for(let Ct of u)ae.includes(Ct.image)&&(Ct.needsUpdate=!0)},xt.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,lt);else{let ae=n.RGBA,Ct=n.RGBA,we=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,ae,Ct,we,lt)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(St.length>0){if(vt&&Mt){let xt=jt(St[0]);e.texStorage2D(n.TEXTURE_2D,ce,ct,xt.width,xt.height)}for(let xt=0,qt=St.length;xt<qt;xt++)rt=St[xt],vt?Vt&&e.texSubImage2D(n.TEXTURE_2D,xt,0,0,bt,K,rt):e.texImage2D(n.TEXTURE_2D,xt,ct,bt,K,rt);L.generateMipmaps=!1}else if(vt){if(Mt){let xt=jt(lt);e.texStorage2D(n.TEXTURE_2D,ce,ct,xt.width,xt.height)}Vt&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,bt,K,lt)}else e.texImage2D(n.TEXTURE_2D,0,ct,bt,K,lt);b(L)&&L.mipmapsAutoUpdate===!0&&M(mt),At.__version=_t.version,L.onUpdate&&L.onUpdate(L)}X.__version=L.version}function pt(X,L,et){if(L.image.length!==6)return;let mt=Wt(X,L),ft=L.source;e.bindTexture(n.TEXTURE_CUBE_MAP,X.__webglTexture,n.TEXTURE0+et);let _t=i.get(ft);if(ft.version!==_t.__version||mt===!0){e.activeTexture(n.TEXTURE0+et);let At=ge.getPrimaries(ge.workingColorSpace),ot=L.colorSpace===ds?null:ge.getPrimaries(L.colorSpace),lt=L.colorSpace===ds||At===ot?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,L.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),e.pixelStorei(n.UNPACK_ALIGNMENT,L.unpackAlignment),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,lt);let bt=L.isCompressedTexture||L.image[0].isCompressedTexture,K=L.image[0]&&L.image[0].isDataTexture,ct=[];for(let Ct=0;Ct<6;Ct++)!bt&&!K?ct[Ct]=y(L.image[Ct],!0,s.maxCubemapSize):ct[Ct]=K?L.image[Ct].image:L.image[Ct],ct[Ct]=Yt(L,ct[Ct]);let rt=ct[0],St=r.convert(L.format,L.colorSpace),vt=r.convert(L.type),Mt=T(L.internalFormat,St,vt,L.normalized,L.colorSpace),Vt=L.isVideoTexture!==!0,ce=_t.__version===void 0||mt===!0,xt=ft.dataReady,qt=_(L,rt);Dt(n.TEXTURE_CUBE_MAP,L);let ae;if(L.isDepthTexture){if(Mt=x(L.format===fs,L.type),ce)if(Vt)e.texStorage2D(n.TEXTURE_CUBE_MAP,1,Mt,rt.width,rt.height);else for(let Ct=0;Ct<6;Ct++)e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,0,Mt,rt.width,rt.height,0,St,vt,null)}else if(bt){Vt&&ce&&e.texStorage2D(n.TEXTURE_CUBE_MAP,qt,Mt,rt.width,rt.height);for(let Ct=0;Ct<6;Ct++){ae=ct[Ct].mipmaps;for(let we=0;we<ae.length;we++){let yn=ae[we];L.format!==ii?St!==null?Vt?xt&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,we,0,0,yn.width,yn.height,St,yn.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,we,Mt,yn.width,yn.height,0,yn.data):Zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Vt?xt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,we,0,0,yn.width,yn.height,St,vt,yn.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,we,Mt,yn.width,yn.height,0,St,vt,yn.data)}}}else{if(ae=L.mipmaps,Vt&&ce){ae.length>0&&qt++;let Ct=jt(ct[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,qt,Mt,Ct.width,Ct.height)}for(let Ct=0;Ct<6;Ct++)if(K){Vt?xt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,0,0,0,ct[Ct].width,ct[Ct].height,St,vt,ct[Ct].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,0,Mt,ct[Ct].width,ct[Ct].height,0,St,vt,ct[Ct].data);for(let we=0;we<ae.length;we++){let Ms=ae[we].image[Ct].image;Vt?xt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,we+1,0,0,Ms.width,Ms.height,St,vt,Ms.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,we+1,Mt,Ms.width,Ms.height,0,St,vt,Ms.data)}}else{Vt?xt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,0,0,0,St,vt,ct[Ct]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,0,Mt,St,vt,ct[Ct]);for(let we=0;we<ae.length;we++){let yn=ae[we];Vt?xt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,we+1,0,0,St,vt,yn.image[Ct]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,we+1,Mt,St,vt,yn.image[Ct])}}}b(L)&&L.mipmapsAutoUpdate===!0&&M(n.TEXTURE_CUBE_MAP),_t.__version=ft.version,L.onUpdate&&L.onUpdate(L)}X.__version=L.version}function yt(X,L,et,mt,ft,_t){let At=r.convert(et.format,et.colorSpace),ot=r.convert(et.type),lt=T(et.internalFormat,At,ot,et.normalized,et.colorSpace),bt=i.get(L),K=i.get(et);if(K.__renderTarget=L,!bt.__hasExternalTextures){let ct=Math.max(1,L.width>>_t),rt=Math.max(1,L.height>>_t);ft===n.TEXTURE_3D||ft===n.TEXTURE_2D_ARRAY?e.texImage3D(ft,_t,lt,ct,rt,L.depth,0,At,ot,null):e.texImage2D(ft,_t,lt,ct,rt,0,At,ot,null)}e.bindFramebuffer(n.FRAMEBUFFER,X),Et(L)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,mt,ft,K.__webglTexture,0,Ce(L)):(ft===n.TEXTURE_2D||ft>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ft<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,mt,ft,K.__webglTexture,_t),e.bindFramebuffer(n.FRAMEBUFFER,null)}function Gt(X,L,et){if(n.bindRenderbuffer(n.RENDERBUFFER,X),L.depthBuffer){let mt=L.depthTexture,ft=mt&&mt.isDepthTexture?mt.type:null,_t=x(L.stencilBuffer,ft),At=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Et(L)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ce(L),_t,L.width,L.height):et?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ce(L),_t,L.width,L.height):n.renderbufferStorage(n.RENDERBUFFER,_t,L.width,L.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,At,n.RENDERBUFFER,X)}else{let mt=L.textures;for(let ft=0;ft<mt.length;ft++){let _t=mt[ft],At=r.convert(_t.format,_t.colorSpace),ot=r.convert(_t.type),lt=T(_t.internalFormat,At,ot,_t.normalized,_t.colorSpace);Et(L)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ce(L),lt,L.width,L.height):et?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ce(L),lt,L.width,L.height):n.renderbufferStorage(n.RENDERBUFFER,lt,L.width,L.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Lt(X,L,et){let mt=L.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(n.FRAMEBUFFER,X),!(L.depthTexture&&L.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ft=i.get(L.depthTexture);ft.__renderTarget=L;let _t=mt?L.depthTexture.image[0]:L.depthTexture.image;(!ft.__webglTexture||_t.width!==L.width||_t.height!==L.height)&&(_t.width=L.width,_t.height=L.height,L.depthTexture.needsUpdate=!0),mt?J(L.depthTexture,0):N(L.depthTexture,0);let At=ft.__webglTexture,ot=Ce(L),lt=mt?n.TEXTURE_CUBE_MAP_POSITIVE_X+et:n.TEXTURE_2D,bt=L.depthTexture.format===fs?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(L.depthTexture.format===as)Et(L)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,bt,lt,At,0,ot):n.framebufferTexture2D(n.FRAMEBUFFER,bt,lt,At,0);else if(L.depthTexture.format===fs)Et(L)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,bt,lt,At,0,ot):n.framebufferTexture2D(n.FRAMEBUFFER,bt,lt,At,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ie(X){let L=i.get(X),et=X.isWebGLCubeRenderTarget===!0;if(L.__boundDepthTexture!==X.depthTexture){let mt=X.depthTexture;if(L.__depthDisposeCallback&&L.__depthDisposeCallback(),mt){let ft=()=>{delete L.__boundDepthTexture,delete L.__depthDisposeCallback,mt.removeEventListener("dispose",ft)};mt.addEventListener("dispose",ft),L.__depthDisposeCallback=ft}L.__boundDepthTexture=mt}if(X.depthTexture&&!L.__autoAllocateDepthBuffer)if(et)for(let mt=0;mt<6;mt++)Lt(L.__webglFramebuffer[mt],X,mt);else X.texture.mipmaps.length>0?Lt(L.__webglFramebuffer[0],X,0):Lt(L.__webglFramebuffer,X,0);else if(et){L.__webglDepthbuffer=[];for(let mt=0;mt<6;mt++)if(e.bindFramebuffer(n.FRAMEBUFFER,L.__webglFramebuffer[mt]),L.__webglDepthbuffer[mt]===void 0)L.__webglDepthbuffer[mt]=n.createRenderbuffer(),Gt(L.__webglDepthbuffer[mt],X,!1);else{let ft=X.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,_t=L.__webglDepthbuffer[mt];n.bindRenderbuffer(n.RENDERBUFFER,_t),n.framebufferRenderbuffer(n.FRAMEBUFFER,ft,n.RENDERBUFFER,_t)}}else if(X.texture.mipmaps.length>0?e.bindFramebuffer(n.FRAMEBUFFER,L.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,L.__webglFramebuffer),L.__webglDepthbuffer===void 0)L.__webglDepthbuffer=n.createRenderbuffer(),Gt(L.__webglDepthbuffer,X,!1);else{let ft=X.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,_t=L.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,_t),n.framebufferRenderbuffer(n.FRAMEBUFFER,ft,n.RENDERBUFFER,_t)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function le(X,L,et){let mt=i.get(X);L!==void 0&&yt(mt.__webglFramebuffer,X,X.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),et!==void 0&&ie(X)}function de(X){let L=X.texture,et=i.get(X),mt=i.get(L);X.addEventListener("dispose",I),A(X);let ft=X.textures,_t=X.isWebGLCubeRenderTarget===!0,At=ft.length>1;if(At||(mt.__webglTexture===void 0&&(mt.__webglTexture=n.createTexture()),mt.__version=L.version,o.memory.textures++),_t){et.__webglFramebuffer=[];for(let ot=0;ot<6;ot++)if(L.mipmaps.length>0){et.__webglFramebuffer[ot]=[];for(let lt=0;lt<L.mipmaps.length;lt++)et.__webglFramebuffer[ot][lt]=n.createFramebuffer()}else et.__webglFramebuffer[ot]=n.createFramebuffer()}else{if(L.mipmaps.length>0){et.__webglFramebuffer=[];for(let ot=0;ot<L.mipmaps.length;ot++)et.__webglFramebuffer[ot]=n.createFramebuffer()}else et.__webglFramebuffer=n.createFramebuffer();if(At)for(let ot=0,lt=ft.length;ot<lt;ot++){let bt=i.get(ft[ot]);bt.__webglTexture===void 0&&(bt.__webglTexture=n.createTexture(),o.memory.textures++)}if(X.samples>0&&Et(X)===!1){et.__webglMultisampledFramebuffer=n.createFramebuffer(),et.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,et.__webglMultisampledFramebuffer);for(let ot=0;ot<ft.length;ot++){let lt=ft[ot];et.__webglColorRenderbuffer[ot]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,et.__webglColorRenderbuffer[ot]);let bt=r.convert(lt.format,lt.colorSpace),K=r.convert(lt.type),ct=T(lt.internalFormat,bt,K,lt.normalized,lt.colorSpace,X.isXRRenderTarget===!0),rt=Ce(X);n.renderbufferStorageMultisample(n.RENDERBUFFER,rt,ct,X.width,X.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ot,n.RENDERBUFFER,et.__webglColorRenderbuffer[ot])}n.bindRenderbuffer(n.RENDERBUFFER,null),X.depthBuffer&&(et.__webglDepthRenderbuffer=n.createRenderbuffer(),Gt(et.__webglDepthRenderbuffer,X,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(_t){e.bindTexture(n.TEXTURE_CUBE_MAP,mt.__webglTexture),Dt(n.TEXTURE_CUBE_MAP,L);for(let ot=0;ot<6;ot++)if(L.mipmaps.length>0)for(let lt=0;lt<L.mipmaps.length;lt++)yt(et.__webglFramebuffer[ot][lt],X,L,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,lt);else yt(et.__webglFramebuffer[ot],X,L,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0);b(L)?M(n.TEXTURE_CUBE_MAP):L.mipmaps.length>0&&n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_MAX_LEVEL,L.mipmaps.length-1),e.unbindTexture()}else if(At){for(let ot=0,lt=ft.length;ot<lt;ot++){let bt=ft[ot],K=i.get(bt),ct=n.TEXTURE_2D;(X.isWebGL3DRenderTarget||X.isWebGLArrayRenderTarget)&&(ct=X.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(ct,K.__webglTexture),Dt(ct,bt),yt(et.__webglFramebuffer,X,bt,n.COLOR_ATTACHMENT0+ot,ct,0),b(bt)&&M(ct)}e.unbindTexture()}else{let ot=n.TEXTURE_2D;if((X.isWebGL3DRenderTarget||X.isWebGLArrayRenderTarget)&&(ot=X.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(ot,mt.__webglTexture),Dt(ot,L),L.mipmaps.length>0)for(let lt=0;lt<L.mipmaps.length;lt++)yt(et.__webglFramebuffer[lt],X,L,n.COLOR_ATTACHMENT0,ot,lt);else yt(et.__webglFramebuffer,X,L,n.COLOR_ATTACHMENT0,ot,0);b(L)?M(ot):L.mipmaps.length>0&&n.texParameteri(ot,n.TEXTURE_MAX_LEVEL,L.mipmaps.length-1),e.unbindTexture()}X.depthBuffer&&ie(X)}function Q(X){let L=X.textures;for(let et=0,mt=L.length;et<mt;et++){let ft=L[et];if(b(ft)&&ft.mipmapsAutoUpdate===!0){let _t=R(X),At=i.get(ft).__webglTexture;e.bindTexture(_t,At),M(_t),e.unbindTexture()}}}let Ze=[];function ue(X){if(X.samples>0){if(Et(X)===!1){let L=X.textures,et=X.width,mt=X.height,ft=n.COLOR_BUFFER_BIT,_t=X.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,At=i.get(X),ot=L.length>1;if(ot)for(let bt=0;bt<L.length;bt++)e.bindFramebuffer(n.FRAMEBUFFER,At.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+bt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,At.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+bt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,At.__webglMultisampledFramebuffer),X.texture.mipmaps.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,At.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,At.__webglFramebuffer);for(let bt=0;bt<L.length;bt++){if(X.resolveDepthBuffer&&(X.depthBuffer&&(ft|=n.DEPTH_BUFFER_BIT),X.stencilBuffer&&X.resolveStencilBuffer&&(ft|=n.STENCIL_BUFFER_BIT)),ot){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,At.__webglColorRenderbuffer[bt]);let K=i.get(L[bt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,K,0)}n.blitFramebuffer(0,0,et,mt,0,0,et,mt,ft,n.NEAREST),l===!0&&(Ze.length=0,Ze.push(n.COLOR_ATTACHMENT0+bt),X.depthBuffer&&X.storeMultisampledDepthBuffer===!1&&Ze.push(_t),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Ze))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ot)for(let bt=0;bt<L.length;bt++){e.bindFramebuffer(n.FRAMEBUFFER,At.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+bt,n.RENDERBUFFER,At.__webglColorRenderbuffer[bt]);let K=i.get(L[bt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,At.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+bt,n.TEXTURE_2D,K,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,At.__webglMultisampledFramebuffer)}else if(X.depthBuffer&&X.storeMultisampledDepthBuffer===!1&&l){let L=X.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[L])}}}function Ce(X){return Math.min(s.maxSamples,X.samples)}function Et(X){let L=i.get(X);return X.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&L.__useRenderToTexture!==!1}function nn(X){let L=o.render.frame;h.get(X)!==L&&(h.set(X,L),X.update())}function Yt(X,L){let et=X.colorSpace,mt=X.format,ft=X.type;return X.isCompressedTexture===!0||X.isVideoTexture===!0||et!==Vo&&et!==ds&&(ge.getTransfer(et)===Se?(mt!==ii||ft!==Xn)&&Zt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Kt("WebGLTextures: Unsupported texture color space:",et)),L}function jt(X){return typeof HTMLImageElement<"u"&&X instanceof HTMLImageElement?(c.width=X.naturalWidth||X.width,c.height=X.naturalHeight||X.height):typeof VideoFrame<"u"&&X instanceof VideoFrame?(c.width=X.displayWidth,c.height=X.displayHeight):(c.width=X.width,c.height=X.height),c}this.allocateTextureUnit=G,this.resetTextureUnits=H,this.getTextureUnits=E,this.setTextureUnits=F,this.setTexture2D=N,this.setTexture2DArray=V,this.setTexture3D=Z,this.setTextureCube=J,this.rebindTextures=le,this.setupRenderTarget=de,this.updateRenderTargetMipmap=Q,this.updateMultisampleRenderTarget=ue,this.setupDepthRenderbuffer=ie,this.setupFrameBufferTexture=yt,this.useMultisampledRTT=Et,this.dispose=O}function KM(n,t){function e(i,s=ds){let r,o=ge.getTransfer(s);if(i===Xn)return n.UNSIGNED_BYTE;if(i===Tc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===wc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Qu)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===tf)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Ju)return n.BYTE;if(i===ju)return n.SHORT;if(i===ho)return n.UNSIGNED_SHORT;if(i===Sc)return n.INT;if(i===Ci)return n.UNSIGNED_INT;if(i===mi)return n.FLOAT;if(i===Pi)return n.HALF_FLOAT;if(i===ef)return n.ALPHA;if(i===nf)return n.RGB;if(i===ii)return n.RGBA;if(i===as)return n.DEPTH_COMPONENT;if(i===fs)return n.DEPTH_STENCIL;if(i===Ec)return n.RED;if(i===Ac)return n.RED_INTEGER;if(i===Fs)return n.RG;if(i===Rc)return n.RG_INTEGER;if(i===Cc)return n.RGBA_INTEGER;if(i===Ma||i===ba||i===Sa||i===Ta)if(o===Se)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Ma)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ba)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Sa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ta)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Ma)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ba)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Sa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ta)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Pc||i===Ic||i===Lc||i===Nc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Pc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ic)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Lc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Nc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Dc||i===Uc||i===Fc||i===kc||i===Oc||i===wa||i===zc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Dc||i===Uc)return o===Se?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Fc)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===kc)return r.COMPRESSED_R11_EAC;if(i===Oc)return r.COMPRESSED_SIGNED_R11_EAC;if(i===wa)return r.COMPRESSED_RG11_EAC;if(i===zc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Bc||i===Hc||i===Vc||i===Gc||i===Wc||i===Xc||i===qc||i===$c||i===Yc||i===Zc||i===Kc||i===Jc||i===jc||i===Qc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Bc)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Hc)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Vc)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Gc)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Wc)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Xc)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===qc)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===$c)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Yc)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Zc)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Kc)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Jc)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===jc)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Qc)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===th||i===eh||i===nh)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===th)return o===Se?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===eh)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===nh)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===ih||i===sh||i===Ea||i===rh)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===ih)return r.COMPRESSED_RED_RGTC1_EXT;if(i===sh)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ea)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===rh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===dr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}var JM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,jM=`
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

}`,bf=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let i=new na(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new di({vertexShader:JM,fragmentShader:jM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new zt(new Wn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Sf=class extends Oi{constructor(t,e){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,p=null,v=typeof XRWebGLBinding<"u",g=new bf,m={},y=e.getContextAttributes(),b=null,M=null,R=[],T=[],x=new gt,_=null,A=null,S=new pn;S.viewport=new $e;let C=new pn;C.viewport=new $e;let I=[S,C],w=new xc,P=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(z){let N=R[z];return N===void 0&&(N=new Qr,R[z]=N),N.getTargetRaySpace()},this.getControllerGrip=function(z){let N=R[z];return N===void 0&&(N=new Qr,R[z]=N),N.getGripSpace()},this.getHand=function(z){let N=R[z];return N===void 0&&(N=new Qr,R[z]=N),N.getHandSpace()};function W(z){let N=T.indexOf(z.inputSource);if(N===-1)return;let V=R[N];V!==void 0&&(V.update(z.inputSource,z.frame,c||o),V.dispatchEvent({type:z.type,data:z.inputSource}))}function q(){s.removeEventListener("select",W),s.removeEventListener("selectstart",W),s.removeEventListener("selectend",W),s.removeEventListener("squeeze",W),s.removeEventListener("squeezestart",W),s.removeEventListener("squeezeend",W),s.removeEventListener("end",q),s.removeEventListener("inputsourceschange",B);for(let z=0;z<R.length;z++){let N=T[z];N!==null&&(T[z]=null,R[z].disconnect(N))}P=null,O=null,g.reset();for(let z in m)delete m[z];if(t.setRenderTarget(b),d=null,f=null,u=null,s=null,M=null,G.stop(),i.isPresenting=!1,t.setPixelRatio(_),t.setSize(x.width,x.height,!1),A!==null){let z=A.camera;z.fov=A.fov,z.zoom=A.zoom,z.updateProjectionMatrix(),A=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(z){r=z,i.isPresenting===!0&&Zt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(z){a=z,i.isPresenting===!0&&Zt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(z){c=z},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u===null&&v&&(u=new XRWebGLBinding(s,e)),u},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(z){if(s=z,s!==null){if(b=t.getRenderTarget(),s.addEventListener("select",W),s.addEventListener("selectstart",W),s.addEventListener("selectend",W),s.addEventListener("squeeze",W),s.addEventListener("squeezestart",W),s.addEventListener("squeezeend",W),s.addEventListener("end",q),s.addEventListener("inputsourceschange",B),y.xrCompatible!==!0&&await e.makeXRCompatible(),_=t.getPixelRatio(),t.getSize(x),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let V=null,Z=null,J=null;y.depth&&(J=y.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,V=y.stencil?fs:as,Z=y.stencil?dr:Ci);let it={colorFormat:e.RGBA8,depthFormat:J,scaleFactor:r};u=this.getBinding(),f=u.createProjectionLayer(it),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),M=new jn(f.textureWidth,f.textureHeight,{format:ii,type:Xn,depthTexture:new cs(f.textureWidth,f.textureHeight,Z,void 0,void 0,void 0,void 0,void 0,void 0,V),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let V={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,V),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),M=new jn(d.framebufferWidth,d.framebufferHeight,{format:ii,type:Xn,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),G.setContext(s),G.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function B(z){for(let N=0;N<z.removed.length;N++){let V=z.removed[N],Z=T.indexOf(V);Z>=0&&(T[Z]=null,R[Z].disconnect(V))}for(let N=0;N<z.added.length;N++){let V=z.added[N],Z=T.indexOf(V);if(Z===-1){for(let it=0;it<R.length;it++)if(it>=T.length){T.push(V),Z=it;break}else if(T[it]===null){T[it]=V,Z=it;break}if(Z===-1)break}let J=R[Z];J&&J.connect(V)}}function U(z,N){N===null?z.matrixWorld.copy(z.matrix):z.matrixWorld.multiplyMatrices(N.matrixWorld,z.matrix),z.matrixWorldInverse.copy(z.matrixWorld).invert()}this.updateCamera=function(z){if(s===null)return;let N=z.near,V=z.far;g.texture!==null&&(g.depthNear>0&&(N=g.depthNear),g.depthFar>0&&(V=g.depthFar)),w.near=C.near=S.near=N,w.far=C.far=S.far=V,(P!==w.near||O!==w.far)&&(s.updateRenderState({depthNear:w.near,depthFar:w.far}),P=w.near,O=w.far),w.layers.mask=z.layers.mask|6,S.layers.mask=w.layers.mask&-5,C.layers.mask=w.layers.mask&-3;let Z=z.parent,J=w.cameras;U(w,Z);for(let it=0;it<J.length;it++)U(J[it],Z);w.projectionMatrix.copy(S.projectionMatrix),w.projectionMatrixInverse.copy(S.projectionMatrixInverse),A===null&&z.isPerspectiveCamera&&(A={camera:z,fov:z.fov,zoom:z.zoom}),H(z,w,Z)};function H(z,N,V){V===null?z.matrix.copy(N.matrixWorld):(z.matrix.copy(V.matrixWorld),z.matrix.invert(),z.matrix.multiply(N.matrixWorld)),z.matrix.decompose(z.position,z.quaternion,z.scale),z.updateMatrixWorld(!0),z.projectionMatrix.copy(N.projectionMatrix),z.projectionMatrixInverse.copy(N.projectionMatrixInverse),z.isPerspectiveCamera&&(z.fov=Xl*2*Math.atan(1/z.projectionMatrix.elements[5]),z.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(z){l=z,f!==null&&(f.fixedFoveation=z),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=z)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(w)},this.getCameraTexture=function(z){return m[z]};let E=null;function F(z,N){if(h=N.getViewerPose(c||o),p=N,h!==null){let V=h.views;d!==null&&(t.setRenderTargetFramebuffer(M,d.framebuffer),t.setRenderTarget(M));let Z=!1;V.length!==w.cameras.length&&(w.cameras.length=0,Z=!0);for(let Tt=0;Tt<V.length;Tt++){let Dt=V[Tt],Wt=null;if(d!==null)Wt=d.getViewport(Dt);else{let ht=u.getViewSubImage(f,Dt);Wt=ht.viewport,Tt===0&&(t.setRenderTargetTextures(M,ht.colorTexture,ht.depthStencilTexture),t.setRenderTarget(M))}let at=I[Tt];at===void 0&&(at=new pn,at.layers.enable(Tt),at.viewport=new $e,I[Tt]=at),at.matrix.fromArray(Dt.transform.matrix),at.matrix.decompose(at.position,at.quaternion,at.scale),at.projectionMatrix.fromArray(Dt.projectionMatrix),at.projectionMatrixInverse.copy(at.projectionMatrix).invert(),at.viewport.set(Wt.x,Wt.y,Wt.width,Wt.height),Tt===0&&(w.matrix.copy(at.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),Z===!0&&w.cameras.push(at)}let J=s.enabledFeatures;if(J&&J.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){u=i.getBinding();let Tt=u.getDepthInformation(V[0]);Tt&&Tt.isValid&&Tt.texture&&g.init(Tt,s.renderState)}if(J&&J.includes("camera-access")&&v){t.state.unbindTexture(),u=i.getBinding();for(let Tt=0;Tt<V.length;Tt++){let Dt=V[Tt].camera;if(Dt){let Wt=m[Dt];Wt||(Wt=new na,m[Dt]=Wt);let at=u.getCameraImage(Dt);Wt.sourceTexture=at}}}}for(let V=0;V<R.length;V++){let Z=T[V],J=R[V];Z!==null&&J!==void 0&&J.update(Z,N,c||o)}E&&E(z,N),N.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:N}),p=null}let G=new Xp;G.setAnimationLoop(F),this.setAnimationLoop=function(z){E=z},this.dispose=function(){}}},QM=new ye,em=new ee;em.set(-1,0,0,0,1,0,0,0,1);function tb(n,t){function e(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function i(g,m){m.color.getRGB(g.fogColor.value,hf(n)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function s(g,m,y,b,M){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(g,m):m.isMeshLambertMaterial?(r(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(g,m),u(g,m)):m.isMeshPhongMaterial?(r(g,m),h(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(g,m),f(g,m),m.isMeshPhysicalMaterial&&d(g,m,M)):m.isMeshMatcapMaterial?(r(g,m),p(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),v(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(o(g,m),m.isLineDashedMaterial&&a(g,m)):m.isPointsMaterial?l(g,m,y,b):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,e(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===mn&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,e(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===mn&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,e(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,e(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let y=t.get(m),b=y.envMap,M=y.envMapRotation;b&&(g.envMap.value=b,g.envMapRotation.value.setFromMatrix4(QM.makeRotationFromEuler(M)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(em),g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,g.aoMapTransform))}function o(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform))}function a(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,y,b){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*y,g.scale.value=b*.5,m.map&&(g.map.value=m.map,e(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function u(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function f(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function d(g,m,y){g.ior.value=m.ior,m.diffuseRoughness>0&&(g.diffuseRoughness.value=m.diffuseRoughness,m.diffuseRoughnessMap&&(g.diffuseRoughnessMap.value=m.diffuseRoughnessMap,e(m.diffuseRoughnessMap,g.diffuseRoughnessMapTransform))),m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===mn&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.retroreflectivity>0&&(g.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessMinimum,g.iridescenceThicknessMaximum.value=m.iridescenceThicknessMaximum,m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=y.texture,g.transmissionSamplerSize.value.set(y.width,y.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function v(g,m){let y=t.get(m).light;g.referencePosition.value.setFromMatrixPosition(y.matrixWorld),g.nearDistance.value=y.shadow.camera.near,g.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function eb(n,t,e,i){let s={},r={};function o(y,b){let M=b.program;i.uniformBlockBinding(y,M,s[y.id])}function a(y,b){let M=s[y.id];M===void 0&&(p(y),M=l(y),s[y.id]=M,y.addEventListener("dispose",g));let R=b.program;i.updateUBOMapping(y,R);let T=t.render.frame;r[y.id]!==T&&(c(y),r[y.id]=T)}function l(y){let b=n.createBuffer(),M=y.__size,R=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,b),n.bufferData(n.UNIFORM_BUFFER,M,R),n.bindBuffer(n.UNIFORM_BUFFER,null),b}function c(y){let b=s[y.id],M=y.uniforms,R=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let T=0,x=M.length;T<x;T++){let _=M[T];if(Array.isArray(_))for(let A=0,S=_.length;A<S;A++)h(_[A],T,A,R);else h(_,T,0,R)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function h(y,b,M,R){if(f(y,b,M,R)===!0){let T=y.__offset,x=y.value;if(Array.isArray(x)){let _=0;for(let A=0;A<x.length;A++){let S=x[A],C=v(S,!0);u(S,y.__data,_),_+=C.storage/Float32Array.BYTES_PER_ELEMENT}}else u(x,y.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,T,y.__data)}}function u(y,b,M){typeof y=="number"||typeof y=="boolean"?b[M]=y:y.isMatrix3?(b[M]=y.elements[0],b[M+1]=y.elements[1],b[M+2]=y.elements[2],b[M+3]=0,b[M+4]=y.elements[3],b[M+5]=y.elements[4],b[M+6]=y.elements[5],b[M+7]=0,b[M+8]=y.elements[6],b[M+9]=y.elements[7],b[M+10]=y.elements[8],b[M+11]=0):ArrayBuffer.isView(y)?b.set(y.subarray(0,b.length-M),M):y.toArray(b,M)}function f(y,b,M,R){let T=y.value,x=b+"_"+M;if(Array.isArray(T)){R[x]===void 0&&(R[x]=[]);let _=R[x],A=!1;for(let S=0;S<T.length;S++)d(T[S],_,S)===!0&&(A=!0);return A}return d(T,R,x)}function d(y,b,M){if(b[M]===void 0)return typeof y=="number"||typeof y=="boolean"?b[M]=y:ArrayBuffer.isView(y)?b[M]=y.slice():b[M]=y.clone(),!0;{let R=b[M];if(typeof y=="number"||typeof y=="boolean"){if(R!==y)return b[M]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(R.equals(y)===!1)return R.copy(y),!0}}return!1}function p(y){let b=y.uniforms,M=0,R=16;for(let x=0,_=b.length;x<_;x++){let A=Array.isArray(b[x])?b[x]:[b[x]];for(let S=0,C=A.length;S<C;S++){let I=A[S],w=Array.isArray(I.value)?I.value:[I.value],P=Array.isArray(b[x])||Array.isArray(I.value),O=M;for(let q=0,B=w.length;q<B;q++){let U=w[q],H=v(U,P),E=M%R,F=E%H.boundary,G=E+F;M+=F,G!==0&&R-G<H.storage&&(M+=R-G),q===0&&(O=M),M+=H.storage}let W=I.type==="int"?Int32Array:I.type==="uint"?Uint32Array:Float32Array;I.__data=new W((M-O)/Float32Array.BYTES_PER_ELEMENT),I.__offset=O}}let T=M%R;return T>0&&(M+=R-T),y.__size=M,y.__cache={},this}function v(y,b){let M={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(M.boundary=4,M.storage=4):y.isVector2?(M.boundary=8,M.storage=8):y.isVector3||y.isColor?(M.boundary=16,M.storage=12):y.isVector4?(M.boundary=16,M.storage=16):y.isMatrix3?(M.boundary=16,M.storage=48):y.isMatrix4?(M.boundary=16,M.storage=64):y.isTexture?Zt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(M.boundary=16,M.storage=y.byteLength):Zt("WebGLRenderer: Unsupported uniform value type.",y),b===!0&&(M.boundary=16,M.storage=Math.ceil(M.storage/16)*16),M}function g(y){let b=y.target;b.removeEventListener("dispose",g),n.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function m(){for(let y in s)n.deleteBuffer(s[y]);s={},r={}}return{bind:o,update:a,dispose:m}}var nb=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Xi=null;function ib(){return Xi===null&&(Xi=new rr(nb,16,16,Fs,Pi),Xi.name="DFG_LUT",Xi.minFilter=En,Xi.magFilter=En,Xi.wrapS=ki,Xi.wrapT=ki,Xi.generateMipmaps=!1,Xi.needsUpdate=!0),Xi}var mr=class{constructor(t={}){let{canvas:e=lp(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1,outputBufferType:d=Xn}=t;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;let v=d,g=new Set([Cc,Rc,Ac]),m=new Set([Xn,Ci,ho,dr,Tc,wc]),y=new Uint32Array(4),b=new Int32Array(4),M={textures:[],min:[],max:[],resolution:[]},R=null,T=null,x=[],_=[],A=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Wi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let S=this,C=!1,I=null,w=null,P=null,O=null;this._outputColorSpace=an;let W=0,q=0,B=null,U=-1,H=null,E=new $e,F=new $e,G=null,z=new Xt(0),N=0,V=e.width,Z=e.height,J=1,it=null,ut=null,Tt=new $e(0,0,V,Z),Dt=new $e(0,0,V,Z),Wt=!1,at=new Cs,ht=new Zl,dt=!1,pt=!1,yt=new ye,Gt=new $,Lt=new $e,ie={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},le=!1;function de(){return B===null?J:1}let Q=i;function Ze(D,j){return e.getContext(D,j)}let ue,Ce,Et,nn,Yt,jt,X,L,et,mt,ft,_t,At,ot,lt,bt,K,ct,rt,St,vt,Mt,Vt;try{let D={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"187"}`),e.addEventListener("webglcontextlost",qt,!1),e.addEventListener("webglcontextrestored",ae,!1),e.addEventListener("webglcontextcreationerror",Ct,!1),Q===null){let j="webgl2";if(Q=Ze(j,D),Q===null)throw Ze(j)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}ce()}catch(D){throw e.removeEventListener("webglcontextlost",qt,!1),e.removeEventListener("webglcontextrestored",ae,!1),e.removeEventListener("webglcontextcreationerror",Ct,!1),Kt("WebGLRenderer: "+D.message),D}function ce(){ue=new p_(Q),ue.init(),vt=new KM(Q,ue),Ce=new i_(Q,ue,t,vt),Et=new YM(Q,ue),Ce.reversedDepthBuffer&&f&&Et.buffers.depth.setReversed(!0),w=Q.createFramebuffer(),P=Q.createFramebuffer(),O=Q.createFramebuffer(),nn=new x_(Q),Yt=new DM,jt=new ZM(Q,ue,Et,Yt,Ce,vt,nn),X=new d_(S),L=new vy(Q),Mt=new e_(Q,L),et=new m_(Q,L,nn,Mt),mt=new v_(Q,et,L,Mt,nn),ct=new y_(Q,Ce,jt),lt=new s_(Yt),ft=new NM(S,X,ue,Ce,Mt,lt),_t=new tb(S,Yt),At=new FM,ot=new VM(ue),K=new t_(S,X,Et,mt,p,l),bt=new $M(S,mt,Ce),Vt=new eb(Q,nn,Ce,Et),rt=new n_(Q,ue,nn),St=new g_(Q,ue,nn),nn.programs=ft.programs,S.capabilities=Ce,S.extensions=ue,S.properties=Yt,S.renderLists=At,S.shadowMap=bt,S.state=Et,S.info=nn}v!==Xn&&(A=new M_(v,e.width,e.height,a,s,r));let xt=new Sf(S,Q);this.xr=xt,this.getContext=function(){return Q},this.getContextAttributes=function(){return Q.getContextAttributes()},this.forceContextLoss=function(){let D=ue.get("WEBGL_lose_context");D&&D.loseContext()},this.forceContextRestore=function(){let D=ue.get("WEBGL_lose_context");D&&D.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(D){D!==void 0&&(J=D,this.setSize(V,Z,!1))},this.getSize=function(D){return D.set(V,Z)},this.setSize=function(D,j,st=!0){if(xt.isPresenting){Zt("WebGLRenderer: Can't change size while VR device is presenting.");return}V=D,Z=j,e.width=Math.floor(D*J),e.height=Math.floor(j*J),st===!0&&(e.style.width=D+"px",e.style.height=j+"px"),A!==null&&A.setSize(e.width,e.height),this.setViewport(0,0,D,j)},this.getDrawingBufferSize=function(D){return D.set(V*J,Z*J).floor()},this.setDrawingBufferSize=function(D,j,st){V=D,Z=j,J=st,e.width=Math.floor(D*st),e.height=Math.floor(j*st),this.setViewport(0,0,D,j)},this.setEffects=function(D){if(v===Xn){Kt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(D){for(let j=0;j<D.length;j++)if(D[j].isOutputPass===!0){Zt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(D||[])},this.getCurrentViewport=function(D){return D.copy(E)},this.getViewport=function(D){return D.copy(Tt)},this.setViewport=function(D,j,st,tt){D.isVector4?Tt.set(D.x,D.y,D.z,D.w):Tt.set(D,j,st,tt),Et.viewport(E.copy(Tt).multiplyScalar(de()).round())},this.getScissor=function(D){return D.copy(Dt)},this.setScissor=function(D,j,st,tt){D.isVector4?Dt.set(D.x,D.y,D.z,D.w):Dt.set(D,j,st,tt),Et.scissor(F.copy(Dt).multiplyScalar(de()).round())},this.getScissorTest=function(){return Wt},this.setScissorTest=function(D){Et.setScissorTest(Wt=D)},this.setOpaqueSort=function(D){it=D},this.setTransparentSort=function(D){ut=D},this.getClearColor=function(D){return D.copy(K.getClearColor())},this.setClearColor=function(){K.setClearColor(...arguments)},this.getClearAlpha=function(){return K.getClearAlpha()},this.setClearAlpha=function(){K.setClearAlpha(...arguments)},this.clear=function(D=!0,j=!0,st=!0){let tt=0;if(D){let nt=!1;if(B!==null){let Rt=B.texture.format;nt=g.has(Rt)}if(nt){let Rt=B.texture.type,Ft=m.has(Rt),wt=K.getClearColor(),Nt=K.getClearAlpha(),Bt=wt.r,re=wt.g,pe=wt.b;Ft?(y[0]=Bt,y[1]=re,y[2]=pe,y[3]=Nt,Q.clearBufferuiv(Q.COLOR,0,y)):(b[0]=Bt,b[1]=re,b[2]=pe,b[3]=Nt,Q.clearBufferiv(Q.COLOR,0,b))}else tt|=Q.COLOR_BUFFER_BIT}j&&(tt|=Q.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),st&&(tt|=Q.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),tt!==0&&Q.clear(tt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(D){D.setRenderer(this),I=D},this.dispose=function(){e.removeEventListener("webglcontextlost",qt,!1),e.removeEventListener("webglcontextrestored",ae,!1),e.removeEventListener("webglcontextcreationerror",Ct,!1),K.dispose(),At.dispose(),ot.dispose(),jt.dispose(),Yt.dispose(),X.dispose(),mt.dispose(),et.dispose(),Mt.dispose(),Vt.dispose(),ft.dispose(),xt.dispose(),xt.removeEventListener("sessionstart",zd),xt.removeEventListener("sessionend",Bd),Ks.stop()};function qt(D){D.preventDefault(),Xo("WebGLRenderer: Context Lost."),C=!0}function ae(){Xo("WebGLRenderer: Context Restored."),C=!1;let D=nn.autoReset,j=bt.enabled,st=bt.autoUpdate,tt=bt.needsUpdate,nt=bt.type;ce(),nn.autoReset=D,bt.enabled=j,bt.autoUpdate=st,bt.needsUpdate=tt,bt.type=nt}function Ct(D){Kt("WebGLRenderer: A WebGL context could not be created. Reason: ",D.statusMessage)}function we(D){let j=D.target;j.removeEventListener("dispose",we),yn(j)}function yn(D){Ms(D),Yt.remove(D)}function Ms(D){let j=Yt.get(D).programs;j!==void 0&&(j.forEach(function(st){ft.releaseProgram(st)}),D.isShaderMaterial&&ft.releaseShaderCache(D))}this.renderBufferDirect=function(D,j,st,tt,nt,Rt){j===null&&(j=ie);let Ft=nt.isMesh&&nt.matrixWorld.determinantAffine()<0,wt=ix(D,j,st,tt,nt);Et.setMaterial(tt,Ft);let Nt=st.index,Bt=1;if(tt.wireframe===!0){if(Nt=et.getWireframeAttribute(st),Nt===void 0)return;Bt=2}let re=st.drawRange,pe=st.attributes.position,kt=re.start*Bt,me=(re.start+re.count)*Bt;Rt!==null&&(kt=Math.max(kt,Rt.start*Bt),me=Math.min(me,(Rt.start+Rt.count)*Bt)),Nt!==null?(kt=Math.max(kt,0),me=Math.min(me,Nt.count)):pe!=null&&(kt=Math.max(kt,0),me=Math.min(me,pe.count));let un=me-kt;if(un<0||un===1/0)return;Mt.setup(nt,tt,wt,st,Nt);let De,Pe=rt;if(Nt!==null&&(De=L.get(Nt),Pe=St,Pe.setIndex(De)),nt.isMesh)tt.wireframe===!0?(Et.setLineWidth(tt.wireframeLinewidth*de()),Pe.setMode(Q.LINES)):Pe.setMode(Q.TRIANGLES);else if(nt.isLine){let Cn=tt.linewidth;Cn===void 0&&(Cn=1),Et.setLineWidth(Cn*de()),nt.isLineSegments?Pe.setMode(Q.LINES):nt.isLineLoop?Pe.setMode(Q.LINE_LOOP):Pe.setMode(Q.LINE_STRIP)}else nt.isPoints?Pe.setMode(Q.POINTS):nt.isSprite&&Pe.setMode(Q.TRIANGLES);if(nt.isBatchedMesh)if(ue.get("WEBGL_multi_draw"))Pe.renderMultiDraw(nt._multiDrawStarts,nt._multiDrawCounts,nt._multiDrawCount);else{let Cn=nt._multiDrawStarts,Ot=nt._multiDrawCounts,kn=nt._multiDrawCount,be=Nt?L.get(Nt).bytesPerElement:1,Js=Yt.get(tt).currentProgram.getUniforms();for(let Pn=0;Pn<kn;Pn++)Js.setValue(Q,"_gl_DrawID",Pn),Pe.render(Cn[Pn]/be,Ot[Pn])}else if(nt.isInstancedMesh)Pe.renderInstances(kt,un,nt.count);else if(st.isInstancedBufferGeometry){let Cn=st._maxInstanceCount!==void 0?st._maxInstanceCount:1/0,Ot=Math.min(st.instanceCount,Cn);Pe.renderInstances(kt,un,Ot)}else Pe.render(kt,un)};function Od(D,j,st,tt){I!==null&&D.isNodeMaterial&&I.setObject(tt,D),dt===!0&&lt.setState(D,st,!1),D.transparent===!0&&D.side===pi&&D.forceSinglePass===!1?(D.side=mn,D.needsUpdate=!0,Eo(D,j,tt),D.side=Gi,D.needsUpdate=!0,Eo(D,j,tt),D.side=pi):Eo(D,j,tt)}this.compile=function(D,j,st=null){st===null&&(st=D),I!==null&&I.renderStart(D,j,st),T=ot.get(st),T.init(j),_.push(T),st.traverseVisible(function(nt){nt.isLight&&nt.layers.test(j.layers)&&(T.pushLight(nt),nt.castShadow&&T.pushShadow(nt))}),D!==st&&D.traverseVisible(function(nt){nt.isLight&&nt.layers.test(j.layers)&&(T.pushLight(nt),nt.castShadow&&T.pushShadow(nt))}),T.setupLights(),I!==null&&I.updateLights(T.state.lightsArray),pt=this.localClippingEnabled,dt=lt.init(this.clippingPlanes,pt),dt===!0&&lt.setGlobalState(this.clippingPlanes,j),I!==null&&bt.render(T.state.shadowsArray,st,j);let tt=new Set;return D.traverse(function(nt){if(!(nt.isMesh||nt.isPoints||nt.isLine||nt.isSprite))return;let Rt=nt.material;if(Rt)if(Array.isArray(Rt))for(let Ft=0;Ft<Rt.length;Ft++){let wt=Rt[Ft];Od(wt,st,j,nt),tt.add(wt)}else Od(Rt,st,j,nt),tt.add(Rt)}),T=_.pop(),I!==null&&I.renderEnd(),tt},this.compileAsync=function(D,j,st=null){let tt=this.compile(D,j,st);return new Promise(nt=>{function Rt(){if(tt.forEach(function(Ft){let Nt=Yt.get(Ft).currentProgram;(Nt===void 0||Nt.isReady())&&tt.delete(Ft)}),tt.size===0){nt(D);return}setTimeout(Rt,10)}ue.get("KHR_parallel_shader_compile")!==null?Rt():setTimeout(Rt,10)})};let Jh=null;function ex(D){Jh&&Jh(D)}function zd(){Ks.stop()}function Bd(){Ks.start()}let Ks=new Xp;Ks.setAnimationLoop(ex),typeof self<"u"&&Ks.setContext(self),this.setAnimationLoop=function(D){Jh=D,xt.setAnimationLoop(D),D===null?Ks.stop():Ks.start()},xt.addEventListener("sessionstart",zd),xt.addEventListener("sessionend",Bd),this.render=function(D,j){if(j!==void 0&&j.isCamera!==!0){Kt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;I!==null&&I.renderStart(D,j);let st=xt.enabled===!0&&xt.isPresenting===!0,tt=A!==null&&(B===null||st)&&A.begin(S,B);if(D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),xt.enabled===!0&&xt.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(xt.cameraAutoUpdate===!0&&xt.updateCamera(j),j=xt.getCamera()),D.isScene===!0&&D.onBeforeRender(S,D,j,B),T=ot.get(D,_.length),T.init(j),T.state.textureUnits=jt.getTextureUnits(),_.push(T),yt.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),j.isArrayCamera?ht.setFromArrayCamera(j):at.setFromProjectionMatrix(yt,hi,j.reversedDepth),pt=this.localClippingEnabled,dt=lt.init(this.clippingPlanes,pt),R=At.get(D,x.length),R.init(),x.push(R),this.info.render.frame++,xt.enabled===!0&&xt.isPresenting===!0){let Ft=S.xr.getDepthSensingMesh();Ft!==null&&jh(Ft,j,-1/0,S.sortObjects)}jh(D,j,0,S.sortObjects),R.finish(),I!==null&&I.updateLights(T.state.lightsArray),S.sortObjects===!0&&R.sort(it,ut),le=xt.enabled===!1||xt.isPresenting===!1||xt.hasDepthSensing()===!1,le&&K.addToRenderList(R,D),this.info.autoReset===!0&&this.info.reset(),dt===!0&&lt.beginShadows();let nt=T.state.shadowsArray;if(bt.render(nt,D,j),dt===!0&&lt.endShadows(),(tt&&A.hasRenderPass())===!1){let Ft=R.opaque,wt=R.transmissive;if(T.setupLights(),j.isArrayCamera){let Nt=j.cameras;if(wt.length>0)for(let Bt=0,re=Nt.length;Bt<re;Bt++){let pe=Nt[Bt];Vd(Ft,wt,D,pe)}le&&K.render(D);for(let Bt=0,re=Nt.length;Bt<re;Bt++){let pe=Nt[Bt];Hd(R,D,pe,pe.viewport)}}else wt.length>0&&Vd(Ft,wt,D,j),le&&K.render(D),Hd(R,D,j)}B!==null&&q===0&&(jt.updateMultisampleRenderTarget(B),jt.updateRenderTargetMipmap(B)),tt&&A.end(S),D.isScene===!0&&D.onAfterRender(S,D,j),Mt.resetDefaultState(),U=-1,H=null,_.pop(),_.length>0?(T=_[_.length-1],jt.setTextureUnits(T.state.textureUnits),dt===!0&&lt.setGlobalState(S.clippingPlanes,T.state.camera)):T=null,x.pop(),x.length>0?R=x[x.length-1]:R=null,I!==null&&I.renderEnd()};function jh(D,j,st,tt){if(D.visible===!1)return;if(D.layers.test(j.layers)){if(D.isGroup)st=D.renderOrder;else if(D.isLOD)D.autoUpdate===!0&&D.update(j);else if(D.isLight)T.pushLight(D),D.castShadow&&T.pushShadow(D);else if(D.isSprite){let Ft=j.isArrayCamera?ht:at;if(!D.frustumCulled||D.intersectsFrustum(Ft)){tt&&Lt.setFromMatrixPosition(D.matrixWorld).applyMatrix4(yt);let wt=mt.update(D),Nt=D.material;Nt.visible&&R.push(D,wt,Nt,st,Lt.z,null,j)}}else if(D.isMesh||D.isLine||D.isPoints){let Ft=j.isArrayCamera?ht:at;if(!D.frustumCulled||D.intersectsFrustum(Ft)){let wt=mt.update(D),Nt=D.material;if(tt&&(D.boundingSphere!==void 0?(D.boundingSphere===null&&D.computeBoundingSphere(),Lt.copy(D.boundingSphere.center)):(wt.boundingSphere===null&&wt.computeBoundingSphere(),Lt.copy(wt.boundingSphere.center)),Lt.applyMatrix4(D.matrixWorld).applyMatrix4(yt)),Array.isArray(Nt)){let Bt=wt.groups;for(let re=0,pe=Bt.length;re<pe;re++){let kt=Bt[re],me=Nt[kt.materialIndex];me&&me.visible&&R.push(D,wt,me,st,Lt.z,kt,j)}}else Nt.visible&&R.push(D,wt,Nt,st,Lt.z,null,j)}}}let Rt=D.children;for(let Ft=0,wt=Rt.length;Ft<wt;Ft++)jh(Rt[Ft],j,st,tt)}function Hd(D,j,st,tt){let{opaque:nt,transmissive:Rt,transparent:Ft}=D;T.setupLightsView(st),dt===!0&&lt.setGlobalState(S.clippingPlanes,st),tt&&Et.viewport(E.copy(tt)),nt.length>0&&sl(nt,j,st),Rt.length>0&&sl(Rt,j,st),Ft.length>0&&sl(Ft,j,st),Et.buffers.depth.setTest(!0),Et.buffers.depth.setMask(!0),Et.buffers.color.setMask(!0),Et.setPolygonOffset(!1)}function Vd(D,j,st,tt){if((st.isScene===!0?st.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[tt.id]===void 0){let kt=ue.has("EXT_color_buffer_half_float")||ue.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[tt.id]=new jn(1,1,{generateMipmaps:!0,type:kt?Pi:Xn,minFilter:Ri,samples:Math.max(4,Ce.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ge.workingColorSpace})}let Rt=T.state.transmissionRenderTarget[tt.id],Ft=tt.viewport||E;Rt.setSize(Ft.z*S.transmissionResolutionScale,Ft.w*S.transmissionResolutionScale);let wt=S.getRenderTarget(),Nt=S.getActiveCubeFace(),Bt=S.getActiveMipmapLevel();S.setRenderTarget(Rt),S.getClearColor(z),N=S.getClearAlpha(),N<1&&S.setClearColor(16777215,.5),S.clear(),le&&K.render(st);let re=S.toneMapping;S.toneMapping=Wi;let pe=tt.viewport;if(tt.viewport!==void 0&&(tt.viewport=void 0),T.setupLightsView(tt),dt===!0&&lt.setGlobalState(S.clippingPlanes,tt),sl(D,st,tt),jt.updateMultisampleRenderTarget(Rt),jt.updateRenderTargetMipmap(Rt),ue.has("WEBGL_multisampled_render_to_texture")===!1){let kt=!1;for(let me=0,un=j.length;me<un;me++){let De=j[me],{object:Pe,geometry:Cn,material:Ot,group:kn}=De;if(Ot.side===pi&&Pe.layers.test(tt.layers)){let be=Ot.side;Ot.side=mn,Ot.needsUpdate=!0,Gd(Pe,st,tt,Cn,Ot,kn),Ot.side=be,Ot.needsUpdate=!0,kt=!0}}kt===!0&&(jt.updateMultisampleRenderTarget(Rt),jt.updateRenderTargetMipmap(Rt))}S.setRenderTarget(wt,Nt,Bt),S.setClearColor(z,N),pe!==void 0&&(tt.viewport=pe),S.toneMapping=re}function sl(D,j,st){let tt=j.isScene===!0?j.overrideMaterial:null;for(let nt=0,Rt=D.length;nt<Rt;nt++){let Ft=D[nt],{object:wt,geometry:Nt,group:Bt}=Ft,re=Ft.material;re.allowOverride===!0&&tt!==null&&(re=tt),wt.layers.test(st.layers)&&Gd(wt,j,st,Nt,re,Bt)}}function Gd(D,j,st,tt,nt,Rt){I!==null&&nt.isNodeMaterial&&I.setObject(D,nt),D.onBeforeRender(S,j,st,tt,nt,Rt),D.modelViewMatrix.multiplyMatrices(st.matrixWorldInverse,D.matrixWorld),D.normalMatrix.getNormalMatrix(D.modelViewMatrix),nt.onBeforeRender(S,j,st,tt,D,Rt),nt.transparent===!0&&nt.side===pi&&nt.forceSinglePass===!1?(nt.side=mn,nt.needsUpdate=!0,S.renderBufferDirect(st,j,tt,nt,D,Rt),nt.side=Gi,nt.needsUpdate=!0,S.renderBufferDirect(st,j,tt,nt,D,Rt),nt.side=pi):S.renderBufferDirect(st,j,tt,nt,D,Rt),D.onAfterRender(S,j,st,tt,nt,Rt)}function Wd(D){let j=0;for(let st of D)st.texture!==null&&j++;return j}function Eo(D,j,st){j.isScene!==!0&&(j=ie);let tt=Yt.get(D),nt=T.state.lights,Rt=T.state.shadowsArray,Ft=nt.state.version,wt=ft.getParameters(D,nt.state,Rt,j,st,T.state.lightProbeGridArray),Nt=ft.getProgramCacheKey(wt),Bt=tt.programs;tt.environment=D.isMeshStandardMaterial||D.isMeshLambertMaterial||D.isMeshPhongMaterial?j.environment:null,tt.fog=j.fog;let re=D.isMeshStandardMaterial||D.isMeshLambertMaterial&&!D.envMap||D.isMeshPhongMaterial&&!D.envMap;tt.envMap=X.get(D.envMap||tt.environment,re),tt.envMapRotation=tt.environment!==null&&D.envMap===null?j.environmentRotation:D.envMapRotation,Bt===void 0&&(D.addEventListener("dispose",we),Bt=new Map,tt.programs=Bt,tt.programVariants=new Map);let pe=Bt.get(Nt);if(pe!==void 0){if(tt.currentProgram===pe&&tt.lightsStateVersion===Ft)return qd(D,wt),pe}else wt.uniforms=ft.getUniforms(D),I!==null&&D.isNodeMaterial&&I.build(D,st,wt),D.onBeforeCompile(wt,S),pe=ft.acquireProgram(wt,Nt),Bt.set(Nt,pe),tt.uniforms=wt.uniforms;let kt=tt.uniforms;return(!D.isShaderMaterial&&!D.isRawShaderMaterial||D.clipping===!0)&&(kt.clippingPlanes=lt.uniform),qd(D,wt),tt.needsLights=rx(D),tt.lightsStateVersion=Ft,tt.needsLights&&(kt.ambientLightColor.value=nt.state.ambient,kt.lightProbe.value=nt.state.probe,kt.sunLights.value=nt.state.sun,kt.sunLightShadows.value=nt.state.sunShadow,kt.directionalLights.value=nt.state.directional,kt.directionalLightShadows.value=nt.state.directionalShadow,kt.spotLights.value=nt.state.spot,kt.spotLightShadows.value=nt.state.spotShadow,kt.rectAreaLights.value=nt.state.rectArea,kt.ltc_1.value=nt.state.rectAreaLTC1,kt.ltc_2.value=nt.state.rectAreaLTC2,kt.pointLights.value=nt.state.point,kt.pointLightShadows.value=nt.state.pointShadow,kt.hemisphereLights.value=nt.state.hemi,kt.sunShadowMatrix.value=nt.state.sunShadowMatrix,kt.sunShadowCascade.value=nt.state.sunShadowCascade,kt.directionalShadowMatrix.value=nt.state.directionalShadowMatrix,kt.spotLightMatrix.value=nt.state.spotLightMatrix,kt.spotLightMap.value=nt.state.spotLightMap,kt.pointShadowMatrix.value=nt.state.pointShadowMatrix),tt.numLightProbeGrids=Wd(T.state.lightProbeGridArray),tt.currentProgram=pe,tt.uniformsList=null,pe}function nx(D,j,st,tt,nt){let Rt=Yt.get(D),Ft=Rt.currentProgram.id+","+tt+","+nt,wt=Rt.programVariants.get(Ft);return wt===void 0?(wt=Eo(D,j,st),Rt.programVariants.set(Ft,wt)):(Rt.currentProgram=wt,Rt.uniformsList=null,Rt.outputColorSpace=tt,Rt.toneMapping=nt),wt}function Xd(D){if(D.uniformsList===null){let j=D.currentProgram.getUniforms();D.uniformsList=fo.seqWithValue(j.seq,D.uniforms)}return D.uniformsList}function qd(D,j){let st=Yt.get(D);st.outputColorSpace=j.outputColorSpace,st.batching=j.batching,st.batchingColor=j.batchingColor,st.instancing=j.instancing,st.instancingColor=j.instancingColor,st.instancingMorph=j.instancingMorph,st.skinning=j.skinning,st.morphTargets=j.morphTargets,st.morphNormals=j.morphNormals,st.morphColors=j.morphColors,st.morphTargetsCount=j.morphTargetsCount,st.numClippingPlanes=j.numClippingPlanes,st.numIntersection=j.numClipIntersection,st.vertexAlphas=j.vertexAlphas,st.vertexTangents=j.vertexTangents,st.toneMapping=j.toneMapping}function ix(D,j,st,tt,nt){j.isScene!==!0&&(j=ie),jt.resetTextureUnits();let Rt=j.fog,Ft=tt.isMeshStandardMaterial||tt.isMeshLambertMaterial||tt.isMeshPhongMaterial?j.environment:null,wt=B===null?S.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:ge.workingColorSpace,Nt=tt.isMeshStandardMaterial||tt.isMeshLambertMaterial&&!tt.envMap||tt.isMeshPhongMaterial&&!tt.envMap,Bt=X.get(tt.envMap||Ft,Nt),re=tt.vertexColors===!0&&!!st.attributes.color&&st.attributes.color.itemSize===4,pe=!!st.attributes.tangent&&(!!tt.normalMap||tt.anisotropy>0),kt=!!st.morphAttributes.position,me=!!st.morphAttributes.normal,un=!!st.morphAttributes.color,De=Wi;tt.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(De=S.toneMapping);let Pe=st.morphAttributes.position||st.morphAttributes.normal||st.morphAttributes.color,Cn=Pe!==void 0?Pe.length:0,Ot=Yt.get(tt),kn=T.state.lights;if(dt===!0&&(pt===!0||D!==H)){let Ke=D===H&&tt.id===U;lt.setState(tt,D,Ke)}let be=!1,Js=!1;tt.version===Ot.__version?Ot.needsLights&&Ot.lightsStateVersion!==kn.state.version||nt.isBatchedMesh&&Ot.batching===!1||!nt.isBatchedMesh&&Ot.batching===!0||nt.isBatchedMesh&&Ot.batchingColor===!0&&nt._colorsTexture===null||nt.isBatchedMesh&&Ot.batchingColor===!1&&nt._colorsTexture!==null||nt.isInstancedMesh&&Ot.instancing===!1||!nt.isInstancedMesh&&Ot.instancing===!0||nt.isSkinnedMesh&&Ot.skinning===!1||!nt.isSkinnedMesh&&Ot.skinning===!0||nt.isInstancedMesh&&Ot.instancingColor===!0&&nt.instanceColor===null||nt.isInstancedMesh&&Ot.instancingColor===!1&&nt.instanceColor!==null||nt.isInstancedMesh&&Ot.instancingMorph===!0&&nt.morphTexture===null||nt.isInstancedMesh&&Ot.instancingMorph===!1&&nt.morphTexture!==null||Ot.envMap!==Bt||tt.fog===!0&&Ot.fog!==Rt||Ot.numClippingPlanes!==void 0&&(Ot.numClippingPlanes!==lt.numPlanes||Ot.numIntersection!==lt.numIntersection)||Ot.vertexAlphas!==re||Ot.vertexTangents!==pe||Ot.morphTargets!==kt||Ot.morphNormals!==me||Ot.morphColors!==un||Ot.morphTargetsCount!==Cn||Ot.numLightProbeGrids!==Wd(T.state.lightProbeGridArray)?be=!0:(Ot.outputColorSpace!==wt||Ot.toneMapping!==De)&&(Js=!0):(be=!0,Ot.__version=tt.version);let Pn=Ot.currentProgram;(be===!0||Js===!0)&&(Pn=Js===!0?nx(tt,j,nt,wt,De):Eo(tt,j,nt),I&&tt.isNodeMaterial&&I.onUpdateProgram(tt,Pn,Ot));let rl=!1,bs=!1,js=!1,Me=Pn.getUniforms(),wn=Ot.uniforms;if(Et.useProgram(Pn.program)&&(rl=!0,bs=!0,js=!0),tt.id!==U&&(U=tt.id,bs=!0),rl||H!==D){Et.buffers.depth.getReversed()&&D.reversedDepth!==!0&&(D._reversedDepth=!0,D.updateProjectionMatrix()),Me.setValue(Q,"projectionMatrix",D.projectionMatrix),Me.setValue(Q,"viewMatrix",D.matrixWorldInverse);let vn=Me.map.cameraPosition;vn!==void 0&&vn.setValue(Q,Gt.setFromMatrixPosition(D.matrixWorld)),Ce.logarithmicDepthBuffer&&Me.setValue(Q,"logDepthBufFC",2/(Math.log(D.far+1)/Math.LN2)),(tt.isMeshPhongMaterial||tt.isMeshToonMaterial||tt.isMeshLambertMaterial||tt.isMeshBasicMaterial||tt.isMeshStandardMaterial||tt.isShaderMaterial)&&Me.setValue(Q,"isOrthographic",D.isOrthographicCamera===!0),H!==D&&(H=D,bs=!0,js=!0)}if(Ot.needsLights&&(kn.state.sunShadowMap.length>0&&Me.setValue(Q,"sunShadowMap",kn.state.sunShadowMap,jt),kn.state.directionalShadowMap.length>0&&Me.setValue(Q,"directionalShadowMap",kn.state.directionalShadowMap,jt),kn.state.spotShadowMap.length>0&&Me.setValue(Q,"spotShadowMap",kn.state.spotShadowMap,jt),kn.state.pointShadowMap.length>0&&Me.setValue(Q,"pointShadowMap",kn.state.pointShadowMap,jt)),nt.isSkinnedMesh){Me.setOptional(Q,nt,"bindMatrix"),Me.setOptional(Q,nt,"bindMatrixInverse");let Ke=nt.skeleton;Ke&&(Ke.boneTexture===null&&Ke.computeBoneTexture(),Me.setValue(Q,"boneTexture",Ke.boneTexture,jt))}nt.isBatchedMesh&&(Me.setOptional(Q,nt,"batchingTexture"),Me.setValue(Q,"batchingTexture",nt._matricesTexture,jt),Me.setOptional(Q,nt,"batchingIdTexture"),Me.setValue(Q,"batchingIdTexture",nt._indirectTexture,jt),Me.setOptional(Q,nt,"batchingColorTexture"),nt._colorsTexture!==null&&Me.setValue(Q,"batchingColorTexture",nt._colorsTexture,jt));let bi=st.morphAttributes;if((bi.position!==void 0||bi.normal!==void 0||bi.color!==void 0)&&ct.update(nt,st,Pn),(bs||Ot.receiveShadow!==nt.receiveShadow)&&(Ot.receiveShadow=nt.receiveShadow,Me.setValue(Q,"receiveShadow",nt.receiveShadow)),(tt.isMeshStandardMaterial||tt.isMeshLambertMaterial||tt.isMeshPhongMaterial)&&tt.envMap===null&&j.environment!==null&&(wn.envMapIntensity.value=j.environmentIntensity),wn.dfgLUT!==void 0&&(wn.dfgLUT.value=ib()),bs){if(Me.setValue(Q,"toneMappingExposure",S.toneMappingExposure),Ot.needsLights&&sx(wn,js),Rt&&tt.fog===!0&&_t.refreshFogUniforms(wn,Rt),_t.refreshMaterialUniforms(wn,tt,J,Z,T.state.transmissionRenderTarget[D.id]),Ot.needsLights&&Ot.numLightProbeGrids>0){let Ke=M,vn=0;for(let Qi of T.state.lightProbeGridArray)Qi.texture!==null&&(Ke.textures[vn]=Qi.texture,Ke.min[vn]=Qi.boundingBox.min,Ke.max[vn]=Qi.boundingBox.max,Ke.resolution[vn]=Qi.resolution,vn++);for(let Qi in Ke)Ke[Qi].length=vn;wn.probesSH.value=Ke.textures,wn.probesMin.value=Ke.min,wn.probesMax.value=Ke.max,wn.probesResolution.value=Ke.resolution}fo.upload(Q,Xd(Ot),wn,jt)}if(tt.isShaderMaterial&&tt.uniformsNeedUpdate===!0&&(fo.upload(Q,Xd(Ot),wn,jt),tt.uniformsNeedUpdate=!1),tt.isSpriteMaterial&&Me.setValue(Q,"center",nt.center),Me.setValue(Q,"modelViewMatrix",nt.modelViewMatrix),Me.setValue(Q,"normalMatrix",nt.normalMatrix),Me.setValue(Q,"modelMatrix",nt.matrixWorld),tt.uniformsGroups!==void 0){let Ke=tt.uniformsGroups;for(let vn=0,Qi=Ke.length;vn<Qi;vn++){let Yd=Ke[vn];Vt.update(Yd,Pn),Vt.bind(Yd,Pn)}}return Pn}function sx(D,j){D.ambientLightColor.needsUpdate=j,D.lightProbe.needsUpdate=j,D.sunLights.needsUpdate=j,D.sunLightShadows.needsUpdate=j,D.directionalLights.needsUpdate=j,D.directionalLightShadows.needsUpdate=j,D.pointLights.needsUpdate=j,D.pointLightShadows.needsUpdate=j,D.spotLights.needsUpdate=j,D.spotLightShadows.needsUpdate=j,D.rectAreaLights.needsUpdate=j,D.hemisphereLights.needsUpdate=j}function rx(D){return D.isMeshLambertMaterial||D.isMeshToonMaterial||D.isMeshPhongMaterial||D.isMeshStandardMaterial||D.isShadowMaterial||D.isShaderMaterial&&D.lights===!0}this.getActiveCubeFace=function(){return W},this.getActiveMipmapLevel=function(){return q},this.getRenderTarget=function(){return B},this.setRenderTargetTextures=function(D,j,st){let tt=Yt.get(D);tt.__autoAllocateDepthBuffer=D.resolveDepthBuffer===!1,tt.__autoAllocateDepthBuffer===!1&&(tt.__useRenderToTexture=!1),Yt.get(D.texture).__webglTexture=j,Yt.get(D.depthTexture).__webglTexture=tt.__autoAllocateDepthBuffer?void 0:st,tt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(D,j){let st=Yt.get(D);st.__webglFramebuffer=j,st.__useDefaultFramebuffer=j===void 0},this.setRenderTarget=function(D,j=0,st=0){B=D,W=j,q=st;let tt=null,nt=!1,Rt=!1;if(D){let wt=Yt.get(D);if(wt.__useDefaultFramebuffer!==void 0){Et.bindFramebuffer(Q.FRAMEBUFFER,wt.__webglFramebuffer),E.copy(D.viewport),F.copy(D.scissor),G=D.scissorTest,Et.viewport(E),Et.scissor(F),Et.setScissorTest(G),U=-1;return}else if(wt.__webglFramebuffer===void 0)jt.setupRenderTarget(D);else if(wt.__hasExternalTextures)jt.rebindTextures(D,Yt.get(D.texture).__webglTexture,Yt.get(D.depthTexture).__webglTexture);else if(D.depthBuffer){let re=D.depthTexture;if(wt.__boundDepthTexture!==re){if(re!==null&&Yt.has(re)&&(D.width!==re.image.width||D.height!==re.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");jt.setupDepthRenderbuffer(D)}}let Nt=D.texture;(Nt.isData3DTexture||Nt.isDataArrayTexture||Nt.isCompressedArrayTexture)&&(Rt=!0);let Bt=Yt.get(D).__webglFramebuffer;D.isWebGLCubeRenderTarget?(Array.isArray(Bt[j])?tt=Bt[j][st]:tt=Bt[j],nt=!0):D.samples>0&&jt.useMultisampledRTT(D)===!1?tt=Yt.get(D).__webglMultisampledFramebuffer:Array.isArray(Bt)?tt=Bt[st]:tt=Bt,E.copy(D.viewport),F.copy(D.scissor),G=D.scissorTest}else E.copy(Tt).multiplyScalar(J).floor(),F.copy(Dt).multiplyScalar(J).floor(),G=Wt;if(st!==0&&(tt=w),Et.bindFramebuffer(Q.FRAMEBUFFER,tt)&&Et.drawBuffers(D,tt),Et.viewport(E),Et.scissor(F),Et.setScissorTest(G),nt){let wt=Yt.get(D.texture);Q.framebufferTexture2D(Q.FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Q.TEXTURE_CUBE_MAP_POSITIVE_X+j,wt.__webglTexture,st)}else if(Rt){let wt=j;for(let Nt=0;Nt<D.textures.length;Nt++){let Bt=Yt.get(D.textures[Nt]);Q.framebufferTextureLayer(Q.FRAMEBUFFER,Q.COLOR_ATTACHMENT0+Nt,Bt.__webglTexture,st,wt)}}else if(D!==null&&st!==0){let wt=Yt.get(D.texture);Q.framebufferTexture2D(Q.FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Q.TEXTURE_2D,wt.__webglTexture,st)}U=-1};function $d(D){let j=Yt.get(D);return(j.__readFormat!==D.format||j.__readType!==D.type)&&(j.__readFormat=D.format,j.__readType=D.type,j.__formatReadable=Ce.textureFormatReadable(D.format),j.__typeReadable=Ce.textureTypeReadable(D.type)),j}this.readRenderTargetPixels=function(D,j,st,tt,nt,Rt,Ft,wt=0){if(!(D&&D.isWebGLRenderTarget)){Kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Nt=Yt.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&Ft!==void 0&&(Nt=Nt[Ft],Array.isArray(Nt)&&(Nt=Nt[0])),Nt){Et.bindFramebuffer(Q.FRAMEBUFFER,Nt);try{let Bt=D.textures[wt],re=Bt.format,pe=Bt.type;D.textures.length>1&&Q.readBuffer(Q.COLOR_ATTACHMENT0+wt);let kt=$d(Bt);if(kt.__formatReadable===!1){Kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(kt.__typeReadable===!1){Kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=D.width-tt&&st>=0&&st<=D.height-nt&&Q.readPixels(j,st,tt,nt,vt.convert(re),vt.convert(pe),Rt)}finally{let Bt=B!==null?Yt.get(B).__webglFramebuffer:null;Et.bindFramebuffer(Q.FRAMEBUFFER,Bt)}}},this.readRenderTargetPixelsAsync=async function(D,j,st,tt,nt,Rt,Ft,wt=0){if(!(D&&D.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Nt=Yt.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&Ft!==void 0&&(Nt=Nt[Ft],Array.isArray(Nt)&&(Nt=Nt[0])),Nt)if(j>=0&&j<=D.width-tt&&st>=0&&st<=D.height-nt){Et.bindFramebuffer(Q.FRAMEBUFFER,Nt);let Bt=D.textures[wt],re=Bt.format,pe=Bt.type;D.textures.length>1&&Q.readBuffer(Q.COLOR_ATTACHMENT0+wt);let kt=$d(Bt);if(kt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(kt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let me=Q.createBuffer();Q.bindBuffer(Q.PIXEL_PACK_BUFFER,me),Q.bufferData(Q.PIXEL_PACK_BUFFER,Rt.byteLength,Q.STREAM_READ),Q.readPixels(j,st,tt,nt,vt.convert(re),vt.convert(pe),0),Q.bindBuffer(Q.PIXEL_PACK_BUFFER,null);let un=B!==null?Yt.get(B).__webglFramebuffer:null;Et.bindFramebuffer(Q.FRAMEBUFFER,un);let De=Q.fenceSync(Q.SYNC_GPU_COMMANDS_COMPLETE,0);return Q.flush(),await hp(Q,De,4),Q.bindBuffer(Q.PIXEL_PACK_BUFFER,me),Q.getBufferSubData(Q.PIXEL_PACK_BUFFER,0,Rt),Q.bindBuffer(Q.PIXEL_PACK_BUFFER,null),Q.deleteBuffer(me),Q.deleteSync(De),Rt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(D,j=null,st=0){let tt=Math.pow(2,-st),nt=Math.floor(D.image.width*tt),Rt=Math.floor(D.image.height*tt),Ft=j!==null?j.x:0,wt=j!==null?j.y:0;jt.setTexture2D(D,0),Q.copyTexSubImage2D(Q.TEXTURE_2D,st,0,0,Ft,wt,nt,Rt),Et.unbindTexture()},this.copyTextureToTexture=function(D,j,st=null,tt=null,nt=0,Rt=0){let Ft,wt,Nt,Bt,re,pe,kt,me,un,De=D.isCompressedTexture?D.mipmaps[Rt]:D.image;if(st!==null)Ft=st.max.x-st.min.x,wt=st.max.y-st.min.y,Nt=st.isBox3?st.max.z-st.min.z:1,Bt=st.min.x,re=st.min.y,pe=st.isBox3?st.min.z:0;else{let Me=Math.pow(2,-nt);Ft=Math.floor(De.width*Me),wt=Math.floor(De.height*Me),D.isDataArrayTexture?Nt=De.depth:D.isData3DTexture?Nt=Math.floor(De.depth*Me):Nt=1,Bt=0,re=0,pe=0}tt!==null?(kt=tt.x,me=tt.y,un=tt.z):(kt=0,me=0,un=0);let Pe=vt.convert(j.format),Cn=vt.convert(j.type),Ot;j.isData3DTexture?(jt.setTexture3D(j,0),Ot=Q.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(jt.setTexture2DArray(j,0),Ot=Q.TEXTURE_2D_ARRAY):(jt.setTexture2D(j,0),Ot=Q.TEXTURE_2D),Et.activeTexture(Q.TEXTURE0),Et.pixelStorei(Q.UNPACK_FLIP_Y_WEBGL,j.flipY),Et.pixelStorei(Q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),Et.pixelStorei(Q.UNPACK_ALIGNMENT,j.unpackAlignment);let kn=Et.getParameter(Q.UNPACK_ROW_LENGTH),be=Et.getParameter(Q.UNPACK_IMAGE_HEIGHT),Js=Et.getParameter(Q.UNPACK_SKIP_PIXELS),Pn=Et.getParameter(Q.UNPACK_SKIP_ROWS),rl=Et.getParameter(Q.UNPACK_SKIP_IMAGES);Et.pixelStorei(Q.UNPACK_ROW_LENGTH,De.width),Et.pixelStorei(Q.UNPACK_IMAGE_HEIGHT,De.height),Et.pixelStorei(Q.UNPACK_SKIP_PIXELS,Bt),Et.pixelStorei(Q.UNPACK_SKIP_ROWS,re),Et.pixelStorei(Q.UNPACK_SKIP_IMAGES,pe);let bs=D.isDataArrayTexture||D.isData3DTexture,js=j.isDataArrayTexture||j.isData3DTexture;if(D.isDepthTexture){let Me=Yt.get(D),wn=Yt.get(j),bi=Yt.get(Me.__renderTarget),Ke=Yt.get(wn.__renderTarget);Et.bindFramebuffer(Q.READ_FRAMEBUFFER,bi.__webglFramebuffer),Et.bindFramebuffer(Q.DRAW_FRAMEBUFFER,Ke.__webglFramebuffer);for(let vn=0;vn<Nt;vn++)bs&&(Q.framebufferTextureLayer(Q.READ_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Yt.get(D).__webglTexture,nt,pe+vn),Q.framebufferTextureLayer(Q.DRAW_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Yt.get(j).__webglTexture,Rt,un+vn)),Q.blitFramebuffer(Bt,re,Bt+Ft,re+wt,kt,me,kt+Ft,me+wt,Q.DEPTH_BUFFER_BIT,Q.NEAREST);Et.bindFramebuffer(Q.READ_FRAMEBUFFER,null),Et.bindFramebuffer(Q.DRAW_FRAMEBUFFER,null)}else if(nt!==0||D.isRenderTargetTexture||Yt.has(D)){let Me=Yt.get(D),wn=Yt.get(j);Et.bindFramebuffer(Q.READ_FRAMEBUFFER,P),Et.bindFramebuffer(Q.DRAW_FRAMEBUFFER,O);for(let bi=0;bi<Nt;bi++)bs?Q.framebufferTextureLayer(Q.READ_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Me.__webglTexture,nt,pe+bi):Q.framebufferTexture2D(Q.READ_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Q.TEXTURE_2D,Me.__webglTexture,nt),js?Q.framebufferTextureLayer(Q.DRAW_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,wn.__webglTexture,Rt,un+bi):Q.framebufferTexture2D(Q.DRAW_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Q.TEXTURE_2D,wn.__webglTexture,Rt),nt!==0?Q.blitFramebuffer(Bt,re,Bt+Ft,re+wt,kt,me,kt+Ft,me+wt,Q.COLOR_BUFFER_BIT,Q.NEAREST):js?Q.copyTexSubImage3D(Ot,Rt,kt,me,un+bi,Bt,re,Ft,wt):Q.copyTexSubImage2D(Ot,Rt,kt,me,Bt,re,Ft,wt);Et.bindFramebuffer(Q.READ_FRAMEBUFFER,null),Et.bindFramebuffer(Q.DRAW_FRAMEBUFFER,null)}else js?D.isDataTexture||D.isData3DTexture?Q.texSubImage3D(Ot,Rt,kt,me,un,Ft,wt,Nt,Pe,Cn,De.data):j.isCompressedArrayTexture?Q.compressedTexSubImage3D(Ot,Rt,kt,me,un,Ft,wt,Nt,Pe,De.data):Q.texSubImage3D(Ot,Rt,kt,me,un,Ft,wt,Nt,Pe,Cn,De):D.isDataTexture?Q.texSubImage2D(Q.TEXTURE_2D,Rt,kt,me,Ft,wt,Pe,Cn,De.data):D.isCompressedTexture?Q.compressedTexSubImage2D(Q.TEXTURE_2D,Rt,kt,me,De.width,De.height,Pe,De.data):Q.texSubImage2D(Q.TEXTURE_2D,Rt,kt,me,Ft,wt,Pe,Cn,De);Et.pixelStorei(Q.UNPACK_ROW_LENGTH,kn),Et.pixelStorei(Q.UNPACK_IMAGE_HEIGHT,be),Et.pixelStorei(Q.UNPACK_SKIP_PIXELS,Js),Et.pixelStorei(Q.UNPACK_SKIP_ROWS,Pn),Et.pixelStorei(Q.UNPACK_SKIP_IMAGES,rl),Rt===0&&j.generateMipmaps===!0&&j.mipmapsAutoUpdate===!0&&Q.generateMipmap(Ot),Et.unbindTexture()},this.initRenderTarget=function(D){Yt.get(D).__webglFramebuffer===void 0&&jt.setupRenderTarget(D)},this.initTexture=function(D){D.isCubeTexture?jt.setTextureCube(D,0):D.isData3DTexture?jt.setTexture3D(D,0):D.isDataArrayTexture||D.isCompressedArrayTexture?jt.setTexture2DArray(D,0):jt.setTexture2D(D,0),Et.unbindTexture()},this.resetState=function(){W=0,q=0,B=null,Et.reset(),Mt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return hi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=ge._getDrawingBufferColorSpace(t),e.unpackColorSpace=ge._getUnpackColorSpace()}};var uh=class extends Qn{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let t=new Fe;t.deleteAttribute("uv");let e=new An({side:mn}),i=new An,s=new Us(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new zt(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let o=new Bn(t,i,6),a=new Be;a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),a.updateMatrix(),o.setMatrixAt(0,a.matrix),a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),a.updateMatrix(),o.setMatrixAt(1,a.matrix),a.position.set(6.167,.857,7.803),a.rotation.set(0,.561,0),a.scale.set(3.927,6.285,3.687),a.updateMatrix(),o.setMatrixAt(2,a.matrix),a.position.set(-2.017,.018,6.124),a.rotation.set(0,.333,0),a.scale.set(2.002,4.566,2.064),a.updateMatrix(),o.setMatrixAt(3,a.matrix),a.position.set(2.291,-.756,-2.621),a.rotation.set(0,-.286,0),a.scale.set(1.546,1.552,1.496),a.updateMatrix(),o.setMatrixAt(4,a.matrix),a.position.set(-2.193,-.369,-5.547),a.rotation.set(0,.516,0),a.scale.set(3.875,3.487,2.986),a.updateMatrix(),o.setMatrixAt(5,a.matrix),this.add(o);let l=new zt(t,go(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new zt(t,go(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let h=new zt(t,go(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let u=new zt(t,go(43));u.position.set(-.462,8.89,14.52),u.scale.set(4.38,5.441,.088),this.add(u);let f=new zt(t,go(20));f.position.set(3.235,11.486,-12.541),f.scale.set(2.5,2,.1),this.add(f);let d=new zt(t,go(100));d.position.set(0,20,0),d.scale.set(1,.1,1),this.add(d)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function go(n){return new Vn({color:0,emissive:16777215,emissiveIntensity:n})}function sb(n,t,e){let i=n.n,s=[];if(n.format==="spans"){let r=null;for(let o=0;o<n.layers;o++){let a=new Uint8Array(i*i),l=new Float32Array(i*i),c=new Float32Array(i*i);o===0&&(r=new Uint8Array(i*i));for(let h=0;h<i;h++)for(let u=0;u<i;u++){let f=h*i+u,d=((2*o*i+h)*e+u)*4,p=(((2*o+1)*i+h)*e+u)*4,v=t[d];v?(a[f]=v-1,l[f]=(t[d+1]<<8|t[d+2])/100-2,c[f]=o===0?-30:(t[p+1]<<8|t[p+2])/100-2):(l[f]=NaN,c[f]=NaN,a[f]=0),o===0&&(r[f]=t[p])}s.push({cls:a,top:l,bot:c})}return s.flags=r,s}for(let r=0;r<n.layers;r++){let o=new Uint8Array(i*i),a=new Float32Array(i*i);for(let l=0;l<i;l++)for(let c=0;c<i;c++){let h=((r*i+l)*e+c)*4,u=l*i+c;o[u]=t[h],a[u]=(t[h+1]<<8|t[h+2])/100-2}s.push({cls:o,h:a})}return s}async function Tf(n,t="maps/"){let e=await(await fetch(t+n+".json")).json(),i=new Image;i.src=t+n+".png",await i.decode();let s=document.createElement("canvas");s.width=i.width,s.height=i.height;let r=s.getContext("2d",{willReadFrequently:!0});r.drawImage(i,0,0);let o=r.getImageData(0,0,i.width,i.height).data,a={info:e,layers:sb(e,o,i.width)};return e.mesh&&(a.mesh=new Uint16Array(await(await fetch(t+e.mesh)).arrayBuffer())),a}var Os=n=>Math.round(n/.08)*.08;function wf(n,t){let e=n.n,i=n.cell,s=t.length,r=e*e;if(n.format==="spans"){let u={n:e,cell:i,L:s,info:n,size:e*i,top:[],bot:[],cls:[],flags:t.flags||new Uint8Array(r),voidKill:!1,imported:!0};for(let f of t)u.top.push(f.top),u.bot.push(f.bot),u.cls.push(f.cls);return u.idx=(f,d)=>{let p=Math.floor(f/i),v=Math.floor(d/i);return p<0||v<0||p>=e||v>=e?-1:v*e+p},u.props=[],u.propCell=[],u}let o=s>1,a={n:e,cell:i,L:s,info:n,size:e*i,top:[],bot:[],cls:[],flags:new Uint8Array(r),voidKill:o},l=new Uint8Array(r);for(let u of t)for(let f=0;f<r;f++){let d=u.cls[f]&3;(d===1||d===2)&&(l[f]=1)}let c=new Uint8Array(r);{let f=new Uint8Array(r);for(let d=0;d<e;d++)for(let p=0;p<e;p++){let v=0;for(let g=-5;g<=5&&!v;g++){let m=p+g;m>=0&&m<e&&l[d*e+m]&&(v=1)}f[d*e+p]=v}for(let d=0;d<e;d++)for(let p=0;p<e;p++){let v=0;for(let g=-5;g<=5&&!v;g++){let m=d+g;m>=0&&m<e&&f[m*e+p]&&(v=1)}c[d*e+p]=v}}let h=!!n.clean;if(!h)for(let u of t)cb(e,u.cls,u.h,o);for(let[u,f,d,p,v,g]of rb[n.id]||[]){let m=t[0];for(let y=f;y<=p;y++)for(let b=u;b<=d;b++){let M=y*e+b,R=d-u>=p-f?b:y;R>=v&&R<=g||((m.cls[M]&3)===1||(m.cls[M]&3)===2)&&(m.cls[M]=m.cls[M]&-4|3)}}if(!h)for(let u of t)hb(e,u.cls,u.h);if(!h)for(let u of t)fb(e,u.cls,u.h);for(let u=0;u<s;u++){let{cls:f,h:d}=t[u],p=new Float32Array(r).fill(NaN),v=new Float32Array(r).fill(NaN),g=new Uint8Array(r),m=o?u===0?3.95:4.6:6.2,y=im(e,f,d,7),b=ub(e,f,d);for(let M=0;M<r;M++){let R=f[M],T=R&3;a.flags[M]|=R&-4;let x=d[M],_=NaN,A=NaN;if(T===1)_=Os(x);else if(T===2)_=Os(b[M]+1.05);else if(T===3||T===0&&!o&&c[M]){let S=y[M]>-1e8?y[M]:x;_=Os(Math.ceil((S+m)/.6)*.6),o&&(_=Os(S+m))}else T===0&&o&&u===0&&c[M]&&db(t,M);isNaN(_)||(A=u===0?-30:Os(x)-.36,g[M]=T===0?3:T),p[M]=_,v[M]=A}a.top.push(p),a.bot.push(v),a.cls.push(g)}if(o){let u=a.top[0],f=a.bot[1],d=a.cls[0];for(let p=0;p<r;p++)d[p]===3&&!isNaN(f[p])&&u[p]>f[p]&&(u[p]=f[p])}a.idx=(u,f)=>{let d=Math.floor(u/i),p=Math.floor(f/i);return d<0||p<0||d>=e||p>=e?-1:p*e+d};for(let u=0;u<a.L;u++)ob(a,u);return o||lb(a,t[0]),a}var rb={dust2:[[220,182,254,184,230,242]]};function ob(n,t){let e=n.n,i=n.cell,s=n.cls[t],r=n.top[t],o=n.bot[t];n.props=n.props||[],n.propCell=n.propCell||[];let a=new Int32Array(e*e);n.propCell[t]=a;let l=new Uint8Array(e*e),c=[],h=[];for(let u=0;u<e*e;u++){if(l[u]||s[u]!==2)continue;for(c.length=0,h.length=0,c.push(u),l[u]=1;c.length;){let U=c.pop();h.push(U);let H=U%e,E=(U-H)/e;for(let F of[H>0?U-1:-1,H<e-1?U+1:-1,E>0?U-e:-1,E<e-1?U+e:-1])F>=0&&!l[F]&&s[F]===2&&(l[F]=1,c.push(F))}if(h.length<6||h.length>420)continue;let f=0,d=0;for(let U of h)f+=U%e,d+=Math.floor(U/e);f/=h.length,d/=h.length;let p=0,v=0,g=0;for(let U of h){let H=U%e-f,E=Math.floor(U/e)-d;p+=H*H,v+=E*E,g+=H*E}let m=.5*Math.atan2(2*g,p-v);Math.abs(p-v)<1e-6&&Math.abs(g)<1e-6&&(m=0);let y=(m%(Math.PI/2)+Math.PI/2)%(Math.PI/2);(y<.14||y>Math.PI/2-.14)&&(m=Math.round(m/(Math.PI/2))*(Math.PI/2));let b=Math.cos(m),M=Math.sin(m),R=1e9,T=-1e9,x=1e9,_=-1e9;for(let U of h){let H=U%e-f,E=Math.floor(U/e)-d,F=H*b+E*M,G=-H*M+E*b;R=Math.min(R,F),T=Math.max(T,F),x=Math.min(x,G),_=Math.max(_,G)}let A=(T-R)/2+.5,S=(_-x)/2+.5,C=(R+T)/2,I=(x+_)/2,w=f+C*b-I*M,P=d+C*M+I*b,O=1e9,W=-1e9;for(let U of h)W=Math.max(W,r[U]);for(let U of h){let H=U%e;for(let E of[U-1,U+1,U-e,U+e])E>=0&&E<e*e&&s[E]===1&&Math.abs(E%e-H)<=1&&(O=Math.min(O,r[E]))}if(O>1e8)continue;let q=n.props.length+1,B=Math.ceil(Math.max(A,S))+1;for(let U=Math.floor(P)-B;U<=Math.ceil(P)+B;U++)for(let H=Math.floor(w)-B;H<=Math.ceil(w)+B;H++){if(H<0||U<0||H>=e||U>=e)continue;let E=U*e+H,F=H-w,G=U-P,z=F*b+G*M,N=-F*M+G*b,V=Math.abs(z)<=A-.35&&Math.abs(N)<=S-.35;V&&(s[E]===1||s[E]===2)?(s[E]=2,r[E]=W,a[E]=q):!V&&s[E]===2&&h.includes(E)&&(s[E]=1,r[E]=Math.round(O/.08)*.08)}n.props.push({l:t,x:(w+.5)*i,z:(P+.5)*i,hu:A*i,hv:S*i,ang:m,y0:O,y1:W,cells:h.length})}}var ab={dust2:[[142,188,224,220],[30,203,128,257],[46,158,64,205],[68,253,102,290],[126,212,162,252],[336,276,374,334]],mirage:[[110,76,306,114],[200,92,228,136],[320,360,432,412],[210,204,238,254]]};function lb(n,t){let e=n.n,i=e*e,s=n.cell,r=n.top[0],o=n.cls[0],a=new Float32Array(i).fill(NaN),l=new Float32Array(i).fill(NaN),c=new Uint8Array(i),h=im(e,t.cls,t.h,7),u=M=>o[M]===1||o[M]===2,f=M=>!u(M),d=M=>Os(Math.ceil(((h[M]>-1e8?h[M]:r[M])+6.2)/.6)*.6);for(let[M,R,T,x]of ab[n.info.id]||[]){let _=-1e9;for(let A=R;A<=x;A++)for(let S=M;S<=T;S++){let C=A*e+S;o[C]===1&&r[C]>_&&(_=r[C])}for(let A=R;A<=x;A++)for(let S=M;S<=T;S++){let C=A*e+S;if(!u(C))continue;let I=Os(_+2.9);l[C]=I,a[C]=Math.max(I+.5,d(C)-.6),c[C]=4}}let p=Math.round(3.2/s),v=Math.round(2/s),g=new Uint16Array(i),m=new Uint16Array(i);for(let M=0;M<e;M++){let R=0;for(;R<e;){if(f(M*e+R)){R++;continue}let T=R;for(;T<e&&!f(M*e+T);)T++;for(let x=R;x<T;x++)g[M*e+x]=T-R;R=T}}for(let M=0;M<e;M++){let R=0;for(;R<e;){if(f(R*e+M)){R++;continue}let T=R;for(;T<e&&!f(T*e+M);)T++;for(let x=R;x<T;x++)m[x*e+M]=T-R;R=T}}let y=(M,R)=>{c[M]||(l[M]=Os(R+2.45),a[M]=d(M),c[M]=4)},b=M=>{let R=-1e9;for(let T of M)r[T]>R&&(R=r[T]);return R};for(let M=0;M<e;M++){let R=0;for(;R<e;){let T=R*e+M;if(f(T)||g[T]>p){R++;continue}let x=R;for(;x<e&&!f(x*e+M)&&g[x*e+M]<=p;)x++;if(x-R<=v&&R>0&&x<e&&!f((R-1)*e+M)&&!f(x*e+M)&&g[(R-1)*e+M]>p+2&&g[x*e+M]>p+2){let A=[];for(let C=R;C<x;C++)A.push(C*e+M);let S=b(A);for(let C of A)y(C,S)}R=x}}for(let M=0;M<e;M++){let R=0;for(;R<e;){let T=M*e+R;if(f(T)||m[T]>p){R++;continue}let x=R;for(;x<e&&!f(M*e+x)&&m[M*e+x]<=p;)x++;if(x-R<=v&&R>0&&x<e&&!f(M*e+R-1)&&!f(M*e+x)&&m[M*e+R-1]>p+2&&m[M*e+x]>p+2){let A=[];for(let C=R;C<x;C++)A.push(M*e+C);let S=b(A);for(let C of A)y(C,S)}R=x}}n.top.push(a),n.bot.push(l),n.cls.push(c),n.L=2,n.slabs=!0}function cb(n,t,e,i){let s=n*n,r=new Uint8Array(s),o=[],a=[],l=h=>(t[h]&3)===3;for(let h=0;h<s;h++){if(r[h]||!l(h))continue;o.length=0,a.length=0,o.push(h),r[h]=1;let u=!1;for(;o.length;){let f=o.pop();a.push(f);let d=f%n,p=(f-d)/n;for(let v of[d>0?f-1:-1,d<n-1?f+1:-1,p>0?f-n:-1,p<n-1?f+n:-1])v<0||((t[v]&3)===0&&(u=!0),!r[v]&&l(v)&&(r[v]=1,o.push(v)))}if(a.length<40&&!u)for(let f of a)c(f)}function c(h){let u=h%n,f=(h-u)/n,d=0,p=0;for(let v=-2;v<=2;v++)for(let g=-2;g<=2;g++){let m=u+g,y=f+v;if(m<0||y<0||m>=n||y>=n)continue;let b=y*n+m;(t[b]&3)===1&&(d+=e[b],p++)}t[h]=t[h]&-4|1,p&&(e[h]=d/p)}if(!i)for(let h=0;h<2;h++){let u=new Uint8Array(s);for(let f=0;f<s;f++){let d=t[f]&3;u[f]=d===3||d===0?1:0}for(let f=1;f<n-1;f++)for(let d=1;d<n-1;d++){let p=f*n+d,v=0;for(let g=-1;g<=1;g++)for(let m=-1;m<=1;m++)v+=u[p+g*n+m];u[p]&&v<=3&&(t[p]&3)===3?c(p):!u[p]&&v>=7&&(t[p]&3)===1&&(t[p]=t[p]&-4|3)}}}var nm=1.7;function hb(n,t,e){let i=n*n,s=new Uint8Array(i);for(let l=0;l<i;l++)s[l]=(t[l]&3)===1?1:0;{let l=new Uint8Array(i);for(let c=0;c<n;c++)for(let h=0;h<n;h++){let u=c*n+h;if(!s[u])continue;let f=0;for(let d=-4;d<=4&&!f;d++)for(let p=-4;p<=4;p++){let v=h+p,g=c+d;if(v<0||g<0||v>=n||g>=n)continue;let m=t[g*n+v]&3;if(m===3||m===0){f=1;break}}l[u]=f}for(let c=0;c<7;c++){for(let h=1;h<n-1;h++)for(let u=1;u<n-1;u++){let f=h*n+u;if(l[f]!==1&&l[f]!==2)continue;let d=0,p=0;for(let v=-1;v<=1;v++)for(let g=-1;g<=1;g++){let m=f+v*n+g;s[m]&&(l[m]===0||l[m]===3)&&(d+=e[m],p++)}p&&(e[f]=d/p,l[f]=2)}for(let h=0;h<i;h++)l[h]===2&&(l[h]=3)}}let r=new Uint8Array(i);for(let l=0;l<n;l++)for(let c=0;c<n;c++){let h=l*n+c;s[h]&&(c+1<n&&s[h+1]&&Math.abs(e[h]-e[h+1])<=nm&&(r[h]|=1),l+1<n&&s[h+n]&&Math.abs(e[h]-e[h+n])<=nm&&(r[h]|=2))}let o=Float32Array.from(e),a=new Float32Array(i);for(let l=0;l<48;l++){for(let h=0;h<n;h++)for(let u=0;u<n;u++){let f=h*n+u;if(!s[f]){a[f]=o[f];continue}let d=o[f]*2,p=2;r[f]&1&&(d+=o[f+1],p++),r[f]&2&&(d+=o[f+n],p++),u>0&&r[f-1]&1&&(d+=o[f-1],p++),h>0&&r[f-n]&2&&(d+=o[f-n],p++),a[f]=d/p}let c=o;o=a,a=c}for(let l=0;l<i;l++)s[l]&&(e[l]=o[l])}function im(n,t,e,i){let s=n*n,r=new Float32Array(s).fill(-1e9),o=new Float32Array(s).fill(-1e9);for(let a=0;a<s;a++)(t[a]&3)===1&&(r[a]=e[a]);for(let a=0;a<n;a++)for(let l=0;l<n;l++){let c=-1e9;for(let h=Math.max(0,l-i);h<=Math.min(n-1,l+i);h++){let u=r[a*n+h];u>c&&(c=u)}o[a*n+l]=c}for(let a=0;a<n;a++)for(let l=0;l<n;l++){let c=-1e9;for(let h=Math.max(0,a-i);h<=Math.min(n-1,a+i);h++){let u=o[h*n+l];u>c&&(c=u)}r[a*n+l]=c}return r}function ub(n,t,e){let i=n*n,s=new Float32Array(i),r=new Uint8Array(i),o=[],a=[];for(let l=0;l<i;l++){if(r[l]||(t[l]&3)!==2)continue;o.length=0,a.length=0,o.push(l),r[l]=1;let c=-1e9;for(;o.length;){let h=o.pop();a.push(h),e[h]>c&&(c=e[h]);let u=h%n,f=(h-u)/n;for(let d of[u>0?h-1:-1,u<n-1?h+1:-1,f>0?h-n:-1,f<n-1?h+n:-1])d>=0&&!r[d]&&(t[d]&3)===2&&(r[d]=1,o.push(d))}if(a.length>900)for(let h of a)s[h]=e[h];else for(let h of a)s[h]=c}return s}function fb(n,t,e){let i=n*n,s=new Uint8Array(i);for(let u=0;u<i;u++)s[u]=(t[u]&3)===1?1:0;let r=new Uint8Array(i);for(let u=2;u<n-2;u++)for(let f=2;f<n-2;f++){let d=u*n+f;if(!s[d])continue;let p=0;for(let v of[2,-2,2*n,-2*n]){let g=d+v;s[g]&&(p=Math.max(p,Math.abs(e[g]-e[d])/2))}r[d]=p<.045?1:0}let o=new Int32Array(i).fill(-1),a=[],l=[],c=0;for(let u=0;u<i;u++)if(!(!r[u]||o[u]>=0)){for(a.length=0,l.length=0,a.push(u),o[u]=c;a.length;){let f=a.pop();l.push(f);let d=f%n;for(let p of[d>0?f-1:-1,d<n-1?f+1:-1,f-n,f+n])p>=0&&p<i&&r[p]&&o[p]<0&&Math.abs(e[p]-e[f])<.12&&(o[p]=c,a.push(p))}if(l.length>=25){let f=l.map(p=>e[p]).sort((p,v)=>p-v),d=f[f.length>>1];for(let p of l)e[p]=d}else for(let f of l)r[f]=0;c++}let h=Float32Array.from(e);for(let u=0;u<80;u++)for(let f=1;f<n-1;f++)for(let d=1;d<n-1;d++){let p=f*n+d;if(!s[p]||r[p])continue;let v=0,g=0;for(let m of[p-1,p+1,p-n,p+n])s[m]&&Math.abs(h[m]-h[p])<1.7&&(v+=h[m],g++);g&&(h[p]=v/g)}for(let u=0;u<i;u++)s[u]&&(e[u]=h[u])}function db(n,t){for(let e of n){let i=e.cls[t]&3;if(i===1||i===2)return!0}return!1}function Ef(n,t,e,i,s){let r=n.cell,o=n.n,a=Math.floor((t-i)/r),l=Math.floor((t+i)/r),c=Math.floor((e-i)/r),h=Math.floor((e+i)/r);for(let u=c;u<=h;u++)for(let f=a;f<=l;f++){if(f<0||u<0||f>=o||u>=o){if(s(-1))return!0;continue}if(s(u*o+f))return!0}return!1}function qn(n,t,e,i,s,r=.4){return Ef(n,t,e,r,o=>{if(o<0)return!0;for(let a=0;a<n.L;a++){let l=n.top[a][o];if(!isNaN(l)&&l>i+.62&&n.bot[a][o]<i+s)return!0}return!1})}function fh(n,t,e,i,s=.38){let r=-1/0;return Ef(n,t,e,s,o=>{if(o<0)return!1;for(let a=0;a<n.L;a++){let l=n.top[a][o];isNaN(l)||l<=i+.62&&l>r&&n.bot[a][o]<i+.1+.62&&(r=l)}return!1}),r}function dh(n,t,e,i,s=.38){let r=1/0;return Ef(n,t,e,s,o=>{if(o<0)return!1;for(let a=0;a<n.L;a++){let l=n.bot[a][o];isNaN(l)||l>i+.2&&l<r&&(r=l)}return!1}),r}function zs(n,t,e,i=1e9){let s=n.idx(t,e);if(s<0)return-1/0;let r=-1/0;for(let o=0;o<n.L;o++){let a=n.top[o][s];!isNaN(a)&&a<=i&&a>r&&(r=a)}return r}function Ii(n,t,e,i,s,r,o,a=200){let l=n.cell,c=n.n,h=Math.floor(t/l),u=Math.floor(i/l),f=s>0?1:-1,d=o>0?1:-1,p=s!==0?Math.abs(l/s):1/0,v=o!==0?Math.abs(l/o):1/0,g=s!==0?(s>0?(h+1)*l-t:t-h*l)/Math.abs(s):1/0,m=o!==0?(o>0?(u+1)*l-i:i-u*l)/Math.abs(o):1/0,y=0,b=-1;for(let M=0;M<4e3;M++){if(h<0||u<0||h>=c||u>=c)return null;let R=Math.min(g,m,a),T=u*c+h,x=e+r*y,_=e+r*R;for(let A=0;A<n.L;A++){let S=n.top[A][T];if(isNaN(S))continue;let C=n.bot[A][T];if(x>=C&&x<=S&&M>0)return{t:y,nx:b===0?-f:0,ny:0,nz:b===1?-d:0,cell:T,layer:A};if(x>=C&&x<=S&&M===0)return{t:0,nx:0,ny:1,nz:0,cell:T,layer:A};if(x>S&&_<=S&&r<0)return{t:(S-e)/r,nx:0,ny:1,nz:0,cell:T,layer:A};if(x<C&&_>=C&&r>0)return{t:(C-e)/r,nx:0,ny:-1,nz:0,cell:T,layer:A}}if(R>=a)return null;y=R,g<m?(h+=f,g+=p,b=0):(u+=d,m+=v,b=1)}return null}function sm(n,t,e,i,s,r,o){let a=s-t,l=r-e,c=o-i,h=Math.hypot(a,l,c);if(h<.001)return!0;let u=Ii(n,t,e,i,a/h,l/h,c/h,h);return!u||u.t>=h-.05}function ph(n,t,e,i){let s=n.idx(t,i);if(s<0)return!1;for(let r=0;r<n.L;r++){let o=n.top[r][s];if(!isNaN(o)&&e<=o&&e>=n.bot[r][s])return!0}return!1}function gi(n,t,e){let i=n.idx(t,e);return i<0?0:n.flags[i]}function Af(n,t){let e=[];for(let i=0;i<n.n*n.n;i++)n.flags[i]&t&&e.push(i);return e}var ke=512;function gr(n){let t=n|0;return()=>{t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function sn(n){let e=new Float32Array(65536),i=gr(n);for(let o=0;o<256*256;o++)e[o]=i();let s=o=>o*o*(3-2*o),r=(o,a,l)=>{let c=Math.floor(o),h=Math.floor(a),u=s(o-c),f=s(a-h),d=(c%l+l)%l,p=(h%l+l)%l,v=(d+1)%l,g=(p+1)%l,m=e[p*256+d],y=e[p*256+v],b=e[g*256+d],M=e[g*256+v];return m+(y-m)*u+(b-m)*f+(m-y-b+M)*u*f};return(o,a,l=4,c=4,h=.5)=>{let u=0,f=1,d=0,p=l;for(let v=0;v<c;v++)u+=r(o*p,a*p,p)*f,d+=f,f*=h,p*=2;return u/d}}function si(n,t=2.5){let e=new Uint8ClampedArray(ke*ke*4),i=new Float32Array(ke*ke);for(let o=0;o<ke;o++)for(let a=0;a<ke;a++){let l=n(a/ke,o/ke),c=o*ke+a;e[c*4]=l[0]*255,e[c*4+1]=l[1]*255,e[c*4+2]=l[2]*255,e[c*4+3]=255,i[c]=l[3]}let s=new Uint8ClampedArray(ke*ke*4);for(let o=0;o<ke;o++)for(let a=0;a<ke;a++){let l=i[o*ke+(a-1+ke)%ke],c=i[o*ke+(a+1)%ke],h=i[(o-1+ke)%ke*ke+a],u=i[(o+1)%ke*ke+a],f=(l-c)*t,d=(u-h)*t,p=1,v=Math.hypot(f,d,p);f/=v,d/=v,p/=v;let g=(o*ke+a)*4;s[g]=(f*.5+.5)*255,s[g+1]=(d*.5+.5)*255,s[g+2]=(p*.5+.5)*255,s[g+3]=255}let r=(o,a)=>{let l=new rr(o,ke,ke,ii);return l.wrapS=l.wrapT=Rs,l.magFilter=En,l.minFilter=Ri,l.generateMipmaps=!0,l.anisotropy=8,a&&(l.colorSpace=an),l.needsUpdate=!0,l};return{map:r(e,!0),normalMap:r(s,!1)}}var Jt=n=>n<0?0:n>1?1:n,mh=(n,t,e)=>n+(t-n)*e,rm={blocks(){let n=sn(11),t=sn(12),e=sn(13),i=gr(5),s=6,r=[],o=[],a=[];for(let l=0;l<s;l++){let c=[0],h=0;for(;h<1;)h+=.2+i()*.22,c.push(Math.min(1,h));1-c[c.length-2]<.12&&c.splice(c.length-2,1),o.push(c),r.push(i()),a.push(c.map(()=>[.84+i()*.2,(i()-.5)*.05,i(),i()]))}return si((l,c)=>{let h=Math.floor(c*s),u=c*s-h,f=o[h],d=(l+r[h])%1,p=0;for(;p<f.length-2&&d>f[p+1];)p++;let v=f[p],g=f[p+1],m=(d-v)/(g-v),[y,b,M,R]=a[h][p],T=Math.min(m*(g-v)*9,(1-m)*(g-v)*9),x=Math.min(u,1-u)*1.5,_=(n(l,c,32,3)-.5)*.07,A=M<.5?m:1-m,S=R<.5?u:1-u,C=M>.55&&A*(g-v)*9+S*1.5<.22+e(l,c,24,2)*.1,I=Math.min(T,x)+_,w=n(l,c,16,5),P=t(l*.25,c*6,4,3),O=e(l,c,96,2),W=y*(.86+w*.14)+(P-.5)*.09+(O-.5)*.04,q=.62+w*.28+(P-.5)*.15;if(C&&(W*=.84,q=.3+O*.1),I<.03)W*=.58,q=.02;else if(I<.11){let U=(I-.03)/.08,H=U*U*(3-2*U);W*=mh(.76,1,H),q=mh(.2,q,H)}return t(l,c,64,2)>.76&&(W*=.86,q-=.18),[Jt(W*(1+b)),Jt(W*.965),Jt(W*(.9-b)),q]},3.6)},plaster(){let n=sn(21),t=sn(22),e=sn(23),i=sn(24);return si((s,r)=>{let o=n(s,r,2,4),a=i(s,r,8,3),l=t(s,r,64,3),c=t(s*1.6+r*.4,r*.8,12,2),h=.86+(o-.5)*.22+(a-.5)*.12+(l-.5)*.08+(c-.5)*.07,u=o*.25+c*.25+l*.12,f=e(s*1,r*.12,6,3);f>.55&&(h*=1-(f-.55)*.6*(.4+r*.6)),Math.abs(e(s,r,5,5)-.5)<.003&&n(s*2,r*2,3,2)>.62&&(h*=.9,u-=.08);let p=n(s+.5,r+.3,2,4)+(i(s,r,16,2)-.5)*.08;if(p>.7){if(p<.712)return h*=.82,u=.55,[Jt(h),Jt(h*.97),Jt(h*.93),u];let v=(s*14+Math.floor(r*28)%2*.5)%1,g=r*28%1,m=v<.07||g<.14,y=.72+i(Math.floor(s*14)/14,Math.floor(r*28)/28,64,1)*.16;return h=m?.66:y+l*.06,u=m?-.25:-.05,[Jt(h*1),Jt(h*.8),Jt(h*.66),u]}return[Jt(h),Jt(h*.98),Jt(h*.94),u]},2.4)},sand(){let n=sn(31),t=sn(32),e=gr(9),i=[];for(let s=0;s<70;s++)i.push([e(),e(),.002+e()*.006]);return si((s,r)=>{let o=n(s,r,64,3),a=Math.sin((r+t(s,r,4,3)*.3)*Math.PI*28)*.5+.5,l=t(s,r,4,3),c=.86+(o-.5)*.14+(l-.5)*.1+a*.025,h=a*.25+o*.3;for(let[u,f,d]of i){let p=Math.abs(s-u),v=Math.abs(r-f);p=Math.min(p,1-p),v=Math.min(v,1-v);let g=Math.hypot(p,v);g<d?(c=.68+o*.15,h=.7+(1-g/d)*.5):g<d*1.6&&(c*=.9)}return[Jt(c),Jt(c*.95),Jt(c*.86),h]},2)},tiles(){let n=sn(41),t=gr(4),e=[],i=5;for(let s=0;s<i;s++)for(let r=0;r<i;r++)e.push([(r+.2+t()*.6)/i,(s+.2+t()*.6)/i,.85+t()*.15]);return si((s,r)=>{let o=9,a=9,l=1;for(let[d,p,v]of e)for(let g=-1;g<=1;g++)for(let m=-1;m<=1;m++){let y=Math.hypot(s-d-m,r-p-g);y<o?(a=o,o=y,l=v):y<a&&(a=y)}let c=a-o,h=n(s,r,32,4),u=l*(.84+h*.16),f=.6+h*.3;if(c<.01)u*=.7,f=0;else if(c<.026){let d=(c-.01)/.016;u*=mh(.88,1,d),f=mh(.2,f,d)}return[Jt(u),Jt(u*.97),Jt(u*.92),f]},3)},slabs(){let n=sn(43),t=sn(44),e=gr(8),i=8,s=[],r=[];for(let o=0;o<i;o++){let a=[0],l=0;for(;l<1;)l+=.14+e()*.18,a.push(Math.min(1,l));1-a[a.length-2]<.08&&a.splice(a.length-2,1),s.push(a),r.push(a.map(()=>.86+e()*.14))}return si((o,a)=>{let l=Math.floor(a*i),c=a*i-l,h=s[l],u=0;for(;u<h.length-2&&o>h[u+1];)u++;let f=h[u],d=h[u+1],p=(o-f)/(d-f),v=Math.min(p*(d-f)*i,(1-p)*(d-f)*i,c,1-c),g=n(o,a,32,4),m=t(o,a,3,3),y=r[l][u]*(.82+g*.18)*(.92+m*.12),b=.6+g*.25-(1-Math.min(1,v*12))*.2;return v<.03&&(y*=.72,b=.05),Math.abs(t(o*2,a*2,6,3)-.5)<.004&&(y*=.8),[Jt(y),Jt(y*.96),Jt(y*.9),b]},2.6)},cobble(){let n=sn(45),t=gr(14),e=[],i=9;for(let s=0;s<i;s++)for(let r=0;r<i;r++)e.push([(r+.15+t()*.7)/i,(s+.15+t()*.7)/i,.8+t()*.2]);return si((s,r)=>{let o=9,a=9,l=1;for(let[p,v,g]of e){let m=Math.abs(s-p),y=Math.abs(r-v);if(m=Math.min(m,1-m),y=Math.min(y,1-y),m>.25||y>.25)continue;let b=Math.hypot(m,y);b<o?(a=o,o=b,l=g):b<a&&(a=b)}let c=a-o,h=n(s,r,48,3),u=Math.min(1,c*18),f=l*(.76+h*.18)*(.75+u*.25),d=u*.9+h*.1;return c<.01&&(f=.62+h*.1,d=0),[Jt(f),Jt(f*.92),Jt(f*.8),d]},3.2)},stone(){let n=sn(51),t=sn(52);return si((e,i)=>{let s=n(e,i,8,5),r=t(e,i,3,3),o=.74+s*.24+(r-.5)*.1;return[Jt(o),Jt(o*.96),Jt(o*.9),s*.8+r*.3]},3.5)},wood(){let n=sn(61),t=gr(6),e=[];for(let i=0;i<6;i++)e.push(.8+t()*.2);return si((i,s)=>{let r=Math.floor(s*6),o=s*6-r,a=Math.sin((i*40+n(i,s,8,3)*6+r*3)*Math.PI)*.5+.5,l=n(i*.2,s,64,2),c=e[r]*(.82+a*.1+l*.08),h=.5+a*.15;return(o<.04||o>.96)&&(c*=.45,h=0),n(i+.3,s,6,2)>.8&&(c*=.8),[Jt(c),Jt(c*.86),Jt(c*.7),h]},2.5)},crate(){let n=sn(71);return si((t,e)=>{let i=Math.min(t,e,1-t,1-e),s=Math.abs(t-e),r=Math.abs(t+e-1),o=e*5%1,a=n(t,e*.2,32,3),l=.78+a*.14,c=.4+a*.1;return o<.04&&(l*=.55,c=.1),(i<.09||s<.06)&&(l=.86+a*.1,c=.9,i<.09&&i>.08&&(l*=.6)),r<.004&&(l*=.9),Math.abs(i-.045)<.012&&(t*8%1<.08||e*8%1<.08)&&(l=.35,c=1),[Jt(l),Jt(l*.84),Jt(l*.66),c]},3)},concrete(){let n=sn(81),t=sn(82);return si((e,i)=>{let s=n(e,i,32,4),r=t(e,i,4,3),o=.8+(s-.5)*.12+(r-.5)*.12,a=s*.3;(e%.5<.006||i%.5<.006)&&(o*=.75,a=0);for(let[l,c]of[[.125,.125],[.375,.125],[.125,.375],[.375,.375]])Math.hypot(e%.5-l,i%.5-c)<.012&&(o*=.55,a=-.3);return[Jt(o),Jt(o),Jt(o*.97),a]},2.5)},roof(){let n=sn(91);return si((t,e)=>{let i=t*8%1,s=e*8%1,r=Math.sin(i*Math.PI),o=.72+r*.26+(n(t,e,32,3)-.5)*.12,a=r*.7+(1-s)*.25;return s<.06&&(o*=.55,a=-.2),[Jt(o),Jt(o*.92),Jt(o*.86),a]},3)},metal(){let n=sn(95);return si((t,e)=>{let i=Math.sin(t*Math.PI*24)*.5+.5,s=n(t,e,16,4),r=n(t+.2,e,4,4)>.66,o=.7+i*.25+(s-.5)*.1;return r?[Jt(o*.9),Jt(o*.6),Jt(o*.4),i*.5]:[Jt(o),Jt(o),Jt(o),i*.5]},2)},fabric(){let n=sn(99);return si((t,e)=>{let i=Math.sin(t*Math.PI*160)*Math.sin(e*Math.PI*160)*.5+.5,s=n(t,e,16,3),r=.85+i*.08+(s-.5)*.12;return[Jt(r),Jt(r),Jt(r),i*.3]},1.5)}},Rf={};function pb(n){if(Rf[n])return Rf[n];let t=rm[n]||rm.stone;return Rf[n]=t()}function $i(n,t={}){let e=n?pb(n):null;return new An({vertexColors:!0,map:e?e.map:null,normalMap:e?e.normalMap:null,normalScale:new gt(t.bump??1,t.bump??1),roughness:t.rough??.92,metalness:t.metal??0,side:t.side??Gi})}var om={dust2:{floor:[.8,.66,.46],floorHi:[.84,.71,.51],wall:[.93,.82,.63],wallTop:[.86,.74,.55],trim:[.72,.6,.43],crate:[1,.95,.88],stone:[.82,.72,.56],metal:[.27,.47,.72],slab:[.62,.47,.32],sky:["#5c9ce0","#f6e3c0"],fog:"#efdcb9",sun:"#fff0d2",ground:"#cfae7c",hemiSky:"#cfe3ff",wallTex:"blocks",floorTex:"sand"},mirage:{floor:[.74,.68,.58],floorHi:[.79,.73,.63],wall:[.94,.87,.74],wallTop:[.78,.43,.3],trim:[.68,.58,.46],crate:[1,.95,.9],stone:[.8,.74,.64],metal:[.24,.55,.58],slab:[.74,.42,.3],sky:["#5b9fe0","#f5dcb8"],fog:"#efdabb",sun:"#fff1da",ground:"#c9ae88",hemiSky:"#d4e6ff",wallTex:"plaster",floorTex:"tiles"},vertigo:{floor:[.66,.66,.64],floorHi:[.72,.72,.69],wall:[.8,.8,.77],wallTop:[.62,.62,.6],trim:[.55,.55,.53],crate:[.98,.95,.9],stone:[.92,.72,.22],metal:[.25,.45,.75],slab:[.6,.6,.58],sky:["#3f87d6","#d2e6f6"],fog:"#cadcea",sun:"#ffffff",ground:"#6d7f8f",hemiSky:"#d6e8ff",wallTex:"concrete",floorTex:"slabs"}},Pf=n=>om[n]||om.dust2;function gh(n,t){let e=n*374761393+t*668265263|0;return e=(e^e>>>13)*1274126177,((e^e>>>16)>>>0)/4294967296}var am=(n,t,e)=>[n[0]+(t[0]-n[0])*e,n[1]+(t[1]-n[1])*e,n[2]+(t[2]-n[2])*e],rn=(n,t)=>[n[0]*t,n[1]*t,n[2]*t],lm=n=>Math.max(0,Math.min(1,n));function mb(n){let t=n|0;return()=>{t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function Yi(n,t){let e=document.createElement("canvas");e.width=e.height=n;let i=e.getContext("2d");t(i,n);let s=new ti(e);return s.wrapS=s.wrapT=Rs,s.colorSpace=an,s.anisotropy=8,s}function Bs(n,t,e,i,s=235,r=2400,o=3){n.fillStyle=`rgb(${s},${s},${s})`,n.fillRect(0,0,t,t);for(let a=0;a<r;a++){let l=s+(e()-.5)*i;n.fillStyle=`rgba(${l|0},${l|0},${l|0},0.5)`;let c=1+e()*o;n.fillRect(e()*t,e()*t,c,c)}}var Cf={};function gb(n){if(Cf[n])return Cf[n];let t=mb(n.length*977+n.charCodeAt(0)),e;return n==="blocks"?e=Yi(256,(i,s)=>{Bs(i,s,t,40,232,3e3);let r=4;for(let o=0;o<r;o++){let a=o*s/r;i.fillStyle="rgba(120,100,80,.35)",i.fillRect(0,a,s,3);let l=o%2?s/4:0;for(let c=0;c<3;c++){let h=(l+c*s/2)%s;i.fillRect(h,a,3,s/r)}for(let c=0;c<6;c++)i.fillStyle=`rgba(255,250,240,${.08+t()*.08})`,i.fillRect(t()*s,a+4+t()*(s/r-8),20+t()*50,6+t()*10)}i.fillStyle="rgba(90,70,50,.04)";for(let o=0;o<14;o++)i.beginPath(),i.arc(t()*s,t()*s,4+t()*18,0,7),i.fill()}):n==="plaster"?e=Yi(256,(i,s)=>{Bs(i,s,t,26,238,2600);for(let r=0;r<10;r++)i.fillStyle=`rgba(150,130,100,${.03+t()*.04})`,i.beginPath(),i.ellipse(t()*s,t()*s,10+t()*40,6+t()*26,t()*3,0,7),i.fill();i.strokeStyle="rgba(110,90,70,.35)",i.lineWidth=1;for(let r=0;r<5;r++){let o=t()*s,a=t()*s;i.beginPath(),i.moveTo(o,a);for(let l=0;l<6;l++)o+=(t()-.5)*24,a+=t()*14,i.lineTo(o,a);i.stroke()}}):n==="concrete"?e=Yi(256,(i,s)=>{Bs(i,s,t,30,228,3500,2),i.fillStyle="rgba(80,80,80,.35)",i.fillRect(0,0,s,2),i.fillRect(0,0,2,s),i.fillRect(s/2,0,2,s),i.fillStyle="rgba(60,60,60,.45)";for(let[r,o]of[[.25,.25],[.75,.25],[.25,.75],[.75,.75]])i.beginPath(),i.arc(r*s,o*s,3,0,7),i.fill();for(let r=0;r<8;r++)i.fillStyle=`rgba(90,85,80,${.06+t()*.08})`,i.fillRect(t()*s,t()*s,2+t()*4,20+t()*60)}):n==="sand"?e=Yi(256,(i,s)=>{Bs(i,s,t,46,230,5e3,2);for(let r=0;r<40;r++)i.fillStyle=`rgba(150,120,80,${.06+t()*.06})`,i.beginPath(),i.ellipse(t()*s,t()*s,8+t()*30,3+t()*8,t()*3,0,7),i.fill();for(let r=0;r<25;r++)i.fillStyle="rgba(120,100,80,.35)",i.fillRect(t()*s,t()*s,2+t()*3,2+t()*3)}):n==="tiles"?e=Yi(256,(i,s)=>{Bs(i,s,t,30,232,3e3,2);let r=4;i.fillStyle="rgba(110,95,75,.4)";for(let o=0;o<=r;o++)i.fillRect(o*s/r-1,0,2,s),i.fillRect(0,o*s/r-1,s,2);for(let o=0;o<r;o++)for(let a=0;a<r;a++)i.fillStyle=`rgba(${t()<.5?"255,250,240":"120,100,80"},${.05+t()*.07})`,i.fillRect(o*s/r+2,a*s/r+2,s/r-4,s/r-4)}):n==="slabs"?e=Yi(256,(i,s)=>{Bs(i,s,t,34,226,4e3,2),i.fillStyle="rgba(70,70,70,.35)",i.fillRect(0,0,s,2),i.fillRect(0,0,2,s),i.fillRect(0,s/2,s,2);for(let r=0;r<6;r++)i.fillStyle=`rgba(60,60,60,${.05+t()*.08})`,i.beginPath(),i.ellipse(t()*s,t()*s,10+t()*30,6+t()*14,t()*3,0,7),i.fill()}):n==="crate"?e=Yi(128,(i,s)=>{i.fillStyle="#a7773f",i.fillRect(0,0,s,s);for(let r=0;r<6;r++)i.fillStyle=r%2?"#9a6c38":"#b17f46",i.fillRect(0,r*s/6,s,s/6),i.fillStyle="rgba(60,35,15,.5)",i.fillRect(0,r*s/6,s,1);for(let r=0;r<120;r++)i.fillStyle=`rgba(70,40,15,${t()*.25})`,i.fillRect(t()*s,t()*s,6+t()*20,1);i.strokeStyle="#7a5228",i.lineWidth=12,i.strokeRect(6,6,s-12,s-12),i.lineWidth=11,i.beginPath(),i.moveTo(10,10),i.lineTo(s-10,s-10),i.stroke(),i.strokeStyle="rgba(40,20,5,.6)",i.lineWidth=1.5,i.strokeRect(12,12,s-24,s-24),i.strokeRect(.5,.5,s-1,s-1),i.fillStyle="#3b2a1a";for(let[r,o]of[[6,6],[s-6,6],[6,s-6],[s-6,s-6]])i.beginPath(),i.arc(r,o,2.5,0,7),i.fill()}):n==="metal"?e=Yi(128,(i,s)=>{Bs(i,s,t,20,225,900,2);for(let r=0;r<16;r++)i.fillStyle=r%2?"rgba(0,0,0,.18)":"rgba(255,255,255,.12)",i.fillRect(r*s/16,0,s/16,s);for(let r=0;r<10;r++)i.fillStyle=`rgba(110,60,30,${.1+t()*.2})`,i.fillRect(t()*s,t()*s,4+t()*12,2+t()*16);i.fillStyle="rgba(0,0,0,.3)",i.fillRect(0,0,s,4),i.fillRect(0,s-4,s,4)}):n==="stone"?e=Yi(128,(i,s)=>{Bs(i,s,t,40,228,1500,2),i.fillStyle="rgba(90,75,55,.4)",i.fillRect(0,0,s,3),i.fillRect(0,s/2,s,2),i.fillRect(s/2,0,2,s/2),i.fillRect(s/4,s/2,2,s/2)}):n==="wood"&&(e=Yi(128,(i,s)=>{i.fillStyle="#d9c3a3",i.fillRect(0,0,s,s);for(let r=0;r<4;r++)i.fillStyle=`rgba(90,60,30,${.15+t()*.1})`,i.fillRect(0,r*s/4,s,s/4-3),i.fillStyle="rgba(50,30,10,.5)",i.fillRect(0,r*s/4-2,s,3);for(let r=0;r<80;r++)i.fillStyle=`rgba(70,40,15,${t()*.2})`,i.fillRect(t()*s,t()*s,8+t()*30,1)})),Cf[n]=e,e}function xr(){return{pos:[],nor:[],col:[],uv:[]}}function xb(n,t,e,i,s,r){n.pos.push(t[0],t[1],t[2]),n.nor.push(e[0],e[1],e[2]),n.col.push(i[0],i[1],i[2]),n.uv.push(s,r)}function La(n,t,e,i,s,r,o){let a=e[0]-t[0],l=e[1]-t[1],c=e[2]-t[2],h=i[0]-t[0],u=i[1]-t[1],f=i[2]-t[2],d=l*f-c*u,p=c*h-a*f,v=a*u-l*h,g=Math.hypot(d,p,v)||1,m=[d/g,p/g,v/g],y=[t,e,i];for(let b=0;b<3;b++){let M=r(y[b]);xb(n,y[b],m,o?o[b]:s,M[0],M[1])}}function xi(n,t,e,i,s,r){let[o,a,l]=t,c=a[0]-o[0],h=a[1]-o[1],u=a[2]-o[2],f=l[0]-o[0],d=l[1]-o[1],p=l[2]-o[2],v=h*p-u*d,g=u*f-c*p,m=c*d-h*f,y=t,b=r;v*e[0]+g*e[1]+m*e[2]<0&&(y=[t[0],t[3],t[2],t[1]],r&&(b=[r[0],r[3],r[2],r[1]])),La(n,y[0],y[1],y[2],i,s,b&&[b[0],b[1],b[2]]),La(n,y[0],y[2],y[3],i,s,b&&[b[0],b[2],b[3]])}var xo=n=>t=>[t[0]/n,t[2]/n],xh=(n,t,e)=>i=>[(i[0]*t-i[2]*n)/e,i[1]/e];function um(n,t){let e=Pf(t),i=n.n,s=n.cell,r={wall:xr(),floor:xr(),crate:xr(),metal:xr(),stone:xr(),wood:xr(),plain:xr()},o=(h,u,f,d=.05)=>{let p=1+(gh(u,f)-.5)*2*d;return[h[0]*p,h[1]*p,h[2]*p]};for(let h=0;h<n.L;h++){let u=n.top[h],f=n.bot[h],d=n.cls[h],p=T=>T>=0&&T<i*i&&d[T]===3,v=new Uint8Array(i*i);{let T=new Uint8Array(i*i),x=[],_=[];for(let A=0;A<i*i;A++){if(T[A]||d[A]!==2)continue;x.length=0,_.length=0,x.push(A),T[A]=1;let S=1e9,C=-1,I=1e9,w=-1;for(;x.length;){let U=x.pop();_.push(U);let H=U%i,E=(U-H)/i;S=Math.min(S,H),C=Math.max(C,H),I=Math.min(I,E),w=Math.max(w,E);for(let F of[H>0?U-1:-1,H<i-1?U+1:-1,E>0?U-i:-1,E<i-1?U+i:-1])F>=0&&!T[F]&&d[F]===2&&(T[F]=1,x.push(F))}let P=(C-S+1)*s,O=(w-I+1)*s,W=Math.max(P,O),q=Math.min(P,O),B=1;_.length>260?B=3:W>3.2&&q>1.4&&W/q>1.7?B=t==="vertigo"?3:2:gh(S,I)<.18&&(B=3);for(let U of _)v[U]=B}}let g=(T,x,_)=>{let A=0,S=0;for(let C=-1;C<=0;C++)for(let I=-1;I<=0;I++){let w=x+I,P=_+C;if(w<0||P<0||w>=i||P>=i)continue;let O=P*i+w;d[O]!==1||isNaN(u[O])||Math.abs(u[O]-T)>.6||(A+=u[O],S++)}return S?A/S:T},m=new Uint8Array(i*i),y=xo(2.2);for(let T=0;T<i;T++)for(let x=0;x<i;x++){let _=T*i+x;if(d[_]===3){let G=0,z=0;for(let N of[x>0?_-1:-1,x<i-1?_+1:-1,T>0?_-i:-1,T<i-1?_+i:-1])N>=0&&d[N]===1&&(G+=u[N],z++);if(z){let N=G/z-.01,V=x*s,Z=(x+1)*s,J=T*s,it=(T+1)*s,ut=rn(e.floor,.62);xi(r.floor,[[V,N,J],[V,N,it],[Z,N,it],[Z,N,J]],[0,1,0],ut,y)}continue}if(n.propCell&&n.propCell[h]&&n.propCell[h][_]){let z=n.props[n.propCell[h][_]-1].y0,N=x*s,V=(x+1)*s,Z=T*s,J=(T+1)*s;xi(r.floor,[[N,z,Z],[N,z,J],[V,z,J],[V,z,Z]],[0,1,0],rn(e.floor,.7),y);continue}if(d[_]!==1||isNaN(u[_]))continue;let A=u[_],S=g(A,x,T),C=g(A,x+1,T),I=g(A,x,T+1),w=g(A,x+1,T+1),P=p(_-1)||p(_+1)||p(_-i)||p(_+i)||p(_-i-1)||p(_-i+1)||p(_+i-1)||p(_+i+1);if(Math.abs(S-A)<.004&&Math.abs(C-A)<.004&&Math.abs(I-A)<.004&&Math.abs(w-A)<.004&&!P)continue;m[_]=1;let W=x*s,q=(x+1)*s,B=T*s,U=(T+1)*s,H=o(am(e.floor,e.floorHi,lm(A/6)),x>>3,T>>3,.04),E=(G,z)=>{let N=0;for(let V=-1;V<=0;V++)for(let Z=-1;Z<=0;Z++){let J=G+Z,it=z+V;J>=0&&it>=0&&J<i&&it<i&&d[it*i+J]===3&&N++}return rn(H,1-N*.13)},F=[E(x,T),E(x,T+1),E(x+1,T+1),E(x+1,T)];La(r.floor,[W,S,B],[W,I,U],[q,w,U],H,y,[F[0],F[1],F[2]]),La(r.floor,[W,S,B],[q,w,U],[q,C,B],H,y,[F[0],F[2],F[3]])}let b=n.propCell?n.propCell[h]:null,M=T=>isNaN(u[T])||m[T]||d[T]===3||b&&b[T]?null:(d[T]*1e5+v[T]*1e4+Math.round(u[T]*100))*1e4+(h>0?Math.round(f[T]*100)+5e3:0);for(let T=0;T<i;T++)for(let x=0;x<i;x++){let _=T*i+x;if(m[_])continue;let A=M(_);if(A===null)continue;let S=1;for(;x+S<i&&!m[_+S]&&M(_+S)===A;)S++;let C=1;t:for(;T+C<i;){for(let U=0;U<S;U++){let H=(T+C)*i+x+U;if(m[H]||M(H)!==A)break t}C++}for(let U=0;U<C;U++)for(let H=0;H<S;H++)m[(T+U)*i+x+H]=1;let I=u[_],w=x*s,P=(x+S)*s,O=T*s,W=(T+C)*s,q=d[_],B=[[w,I,O],[w,I,W],[P,I,W],[P,I,O]];if(q===1)xi(r.floor,B,[0,1,0],o(am(e.floor,e.floorHi,lm(I/6)),x>>3,T>>3,.04),y);else if(q===2){let U=v[_];xi(U===1?r.crate:U===2?r.metal:r.stone,B,[0,1,0],U===1?e.crate:U===2?rn(e.metal,1.1):e.stone,xo(U===1?1.1:2))}else q===4&&xi(r.wood,B,[0,1,0],rn(e.wallTop,.95),xo(2));if(h>0){let U=f[_];xi(q===4?r.wood:r.floor,[[w,U,O],[w,U,W],[P,U,W],[P,U,O]],[0,-1,0],q===4?e.slab:rn(e.floor,.6),xo(2))}}let R=[[1,0],[-1,0],[0,1],[0,-1]];for(let T=0;T<4;T++){let[x,_]=R[T],A=x!==0?"z":"x";for(let S=0;S<i;S++){let C=null,I=()=>{if(!C)return;let{s:w,e:P,y0:O,y1:W,cl:q,line:B,kd:U}=C,H;if(A==="z"){let V=(x>0?B+1:B)*s;H=[[V,O,w*s],[V,O,(P+1)*s],[V,W,(P+1)*s],[V,W,w*s]]}else{let V=(_>0?B+1:B)*s;H=[[w*s,O,V],[(P+1)*s,O,V],[(P+1)*s,W,V],[w*s,W,V]]}let E=T<2?.93:.84,F,G,z;if(q===2){F=U===1?r.crate:U===2?r.metal:r.stone,G=rn(U===1?e.crate:U===2?e.metal:e.stone,E);let V=U===1?1.1:2;z=Z=>[(Z[0]*_-Z[2]*x)/V,(Z[1]-O)/V]}else q===4?(F=r.wood,G=rn(e.slab,E),z=xh(x,_,2)):(F=r.wall,G=rn(e.trim,E),z=xh(x,_,2.2));let N=rn(G,.8);xi(F,H,[x,0,_],G,z,[N,N,G,G]),C=null};for(let w=0;w<i;w++){let P=A==="z"?S:w,O=A==="z"?w:S,W=O*i+P,q=null;if(!isNaN(u[W])&&d[W]!==3&&!(b&&b[W])){let B=P+x,U=O+_,H=B<0||U<0||B>=i||U>=i?-1:U*i+B,E=u[W],F=f[W];if(H>=0&&!isNaN(u[H]))d[W]===1&&d[H]===1&&Math.abs(u[W]-u[H])<=.6||u[H]>=E&&f[H]<=F?E=F:f[H]<=F+.01&&(F=Math.max(F,u[H]));else if(h===0){let G=1e9;for(let z=0;z<n.L;z++)H>=0&&!isNaN(n.top[z][H])&&n.cls[z][H]!==4&&(G=Math.min(G,n.top[z][H]));F=G<1e9?Math.max(F,G):n.voidKill?-25:Math.max(F,E-8)}E-F>.01&&(q={y0:Math.round(F*100)/100,y1:Math.round(E*100)/100,cl:d[W],kd:v[W]})}q&&C&&C.y0===q.y0&&C.y1===q.y1&&C.cl===q.cl&&C.kd===q.kd&&C.e===w-1?C.e=w:(I(),q&&(C={s:w,e:w,...q,line:S}))}I()}}vb(n,h,r,e)}_b(n,t,r,e);for(let h of n.props||[]){let u=Math.max(h.hu,h.hv)*2,f=Math.min(h.hu,h.hv)*2,d=1;h.cells>260?d=3:u>3.2&&f>1.3&&u/f>1.7?d=t==="vertigo"?3:2:gh(Math.round(h.x*7),Math.round(h.z*7))<.16&&(d=3);let p=d===1?r.crate:d===2?r.metal:r.stone,v=d===1?e.crate:d===2?e.metal:e.stone,g=d===1?1.1:2,m=Math.cos(h.ang),y=Math.sin(h.ang),b=(_,A,S)=>[h.x+_*m-A*y,S,h.z+_*y+A*m],M=h.y0-.05,R=h.y1,T=[[-h.hu,-h.hv],[h.hu,-h.hv],[h.hu,h.hv],[-h.hu,h.hv]];for(let _=0;_<4;_++){let A=T[_],S=T[(_+1)%4],C=Math.hypot(S[0]-A[0],S[1]-A[1]),I=(A[0]+S[0])/2,w=(A[1]+S[1])/2,P=Math.hypot(I,w),O=[(I*m-w*y)/P,0,(I*y+w*m)/P],W=.82+.14*Math.abs(O[0]),q=rn(v,W),B=rn(q,.8),U=b(A[0],A[1],M),H=b(S[0],S[1],M),E=b(S[0],S[1],R),F=b(A[0],A[1],R),G=Math.max(1,Math.round(C/g)),z=Math.max(1,Math.round((R-M)/g));xi(p,[U,H,E,F],O,q,V=>[Math.hypot(V[0]-U[0],V[2]-U[2])/C*G,(V[1]-M)/(R-M)*z],[B,B,q,q])}let x=T.map(([_,A])=>b(_,A,R));xi(p,x,[0,1,0],rn(v,1.04),_=>{let A=_[0]-h.x,S=_[2]-h.z;return[(A*m+S*y+h.hu)/g,(-A*y+S*m+h.hv)/g]})}let a=new Re,l=0,c=(h,u)=>{if(!h.pos.length)return;let f=new Ue;f.setAttribute("position",new te(h.pos,3)),f.setAttribute("normal",new te(h.nor,3)),f.setAttribute("color",new te(h.col,3)),f.setAttribute("uv",new te(h.uv,2)),f.computeBoundingSphere();let d=new zt(f,new Vn({vertexColors:!0,map:u&&typeof document<"u"?gb(u):null}));d.matrixAutoUpdate=!1,d.castShadow=!0,d.receiveShadow=!0,a.add(d),l+=h.pos.length/9};return c(r.wall,e.wallTex),c(r.floor,e.floorTex),c(r.crate,"crate"),c(r.metal,"metal"),c(r.stone,"stone"),c(r.wood,"wood"),c(r.plain,null),a.matrixAutoUpdate=!1,{mesh:a,tris:l,theme:e}}var yb=(()=>{let n=[];return n[0]=[],n[1]=[0,4,7],n[2]=[1,5,4],n[3]=[0,1,5,7],n[4]=[2,6,5],n[5]=[0,4,5,2,6,7],n[6]=[1,2,6,4],n[7]=[0,1,2,6,7],n[8]=[3,7,6],n[9]=[0,4,6,3],n[10]=[1,5,6,3,7,4],n[11]=[0,1,5,6,3],n[12]=[2,3,7,5],n[13]=[0,4,5,2,3],n[14]=[1,2,3,7,4],n[15]=[0,1,2,3],n})();function vb(n,t,e,i){let s=n.n,r=n.cell,o=n.top[t],a=n.bot[t],l=n.cls[t],c=d=>l[d]===3,h=e.wall,u=xo(2.2),f=[0,0,0,0];for(let d=0;d<s-1;d++)for(let p=0;p<s-1;p++){f[0]=d*s+p,f[1]=d*s+p+1,f[2]=(d+1)*s+p+1,f[3]=(d+1)*s+p;let v=0;for(let x=0;x<4;x++)c(f[x])&&(v|=1<<x);if(!v)continue;let g=yb[v],m=(p+.5)*r,y=(d+.5)*r,b=[[m,y],[m+r,y],[m+r,y+r],[m,y+r]],M=g.map(x=>{if(x<4)return[b[x][0],b[x][1],o[f[x]],NaN,x];let _=x-4,A=(_+1)%4,S=c(f[_])?_:A,C=S===_?A:_,I=f[S],w=f[C],P;return!isNaN(o[w])&&l[w]===1?P=o[w]-.12:!isNaN(o[w])&&l[w]===2?P=o[w]-1.2:t===0?P=n.voidKill?-25:o[I]-8:P=a[I],[(b[_][0]+b[A][0])/2,(b[_][1]+b[A][1])/2,o[I],P,-1]});for(let x=1;x<M.length-1;x++)La(h,[M[0][0],M[0][2],M[0][1]],[M[x+1][0],M[x+1][2],M[x+1][1]],[M[x][0],M[x][2],M[x][1]],i.wallTop,u);let R=0,T=0;for(let x of M)R+=x[0],T+=x[1];R/=M.length,T/=M.length;for(let x=0;x<M.length;x++){let _=M[x],A=M[(x+1)%M.length];if(_[4]>=0||A[4]>=0)continue;let S=A[1]-_[1],C=-(A[0]-_[0]),I=Math.hypot(S,C);S/=I,C/=I;let w=(_[0]+A[0])/2-R,P=(_[1]+A[1])/2-T;S*w+C*P<0&&(S=-S,C=-C);let O=.86+.1*Math.abs(S)-.04*Math.abs(C),W=rn(i.wall,O),q=rn(i.trim,O*.95),B=rn(W,.95),U=Math.min(_[2],_[3]+.45),H=Math.min(A[2],A[3]+.45),E=[_[0],_[3],_[1]],F=[A[0],A[3],A[1]],G=[_[0],U,_[1]],z=[A[0],H,A[1]],N=[_[0],_[2],_[1]],V=[A[0],A[2],A[1]],Z=xh(S,C,2.2);xi(h,[E,F,z,G],[S,0,C],q,Z,[rn(q,.75),rn(q,.75),q,q]),(_[2]>U+.01||A[2]>H+.01)&&xi(h,[G,z,V,N],[S,0,C],W,Z,[B,B,W,W])}}}function fm(n,t,e,i=1){let s=Pf(e),r=t.size;n.background=new Xt(s.sky[1]),n.fog=new Yo(s.fog,70,e==="vertigo"?460:330);let o=new $(.45,.62,.3).normalize(),a=new zt(new fi(900,24,12),new di({side:mn,depthWrite:!1,fog:!1,uniforms:{a:{value:new Xt(s.sky[0])},b:{value:new Xt(s.sky[1])},sd:{value:o}},vertexShader:"varying vec3 vp; void main(){ vp = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.); }",fragmentShader:`uniform vec3 a; uniform vec3 b; uniform vec3 sd; varying vec3 vp; void main(){ vec3 col = mix(b, a, smoothstep(-0.05, 0.55, vp.y)); float s = max(dot(vp, sd), 0.); col += vec3(1.,.93,.75) * (pow(s, 700.) * 2.5 + pow(s, 14.) * .2); gl_FragColor = vec4(col, 1.);
#include <colorspace_fragment>
}`}));a.position.set(r/2,0,r/2),a.frustumCulled=!1,n.add(a),n.add(new Hi(s.hemiSky,s.ground,1));let l=new Vi(s.sun,2.2);if(l.position.set(r/2+o.x*r,o.y*r,r/2+o.z*r),l.target.position.set(r/2,0,r/2),i>0){l.castShadow=!0;let h=l.shadow.camera,u=r*.62;h.left=-u,h.right=u,h.top=u,h.bottom=-u,h.near=1,h.far=r*2.4;let f=i>1?4096:2048;l.shadow.mapSize.set(f,f),l.shadow.bias=-8e-4,l.shadow.normalBias=.06}n.add(l,l.target),n.add(new xa("#ffffff",.1));let c=dm(7);if(e==="vertigo"){let h=new Fe(1,1,1),u=new Vn({color:"#ffffff"}),f=new Bn(h,u,140),d=new Be;for(let v=0;v<140;v++){let g=c()*Math.PI*2,m=120+c()*320,y=40+c()*140;d.position.set(r/2+Math.cos(g)*m,-160+y/2,r/2+Math.sin(g)*m),d.scale.set(14+c()*26,y,14+c()*26),d.updateMatrix(),f.setMatrixAt(v,d.matrix),f.setColorAt(v,new Xt().setHSL(.58,.14,.45+c()*.25))}n.add(f);let p=new zt(new Wn(3e3,3e3),new Vn({color:s.ground}));p.rotation.x=-Math.PI/2,p.position.set(r/2,-160,r/2),n.add(p)}else{let h=new zt(new Wn(3e3,3e3),new Vn({color:s.ground}));h.rotation.x=-Math.PI/2,h.position.set(r/2,-.6,r/2),n.add(h);let u=new hs(1,1,6,1),f=new Vn({color:s.ground,flatShading:!0}),d=new Bn(u,f,40),p=new Be;for(let v=0;v<40;v++){let g=v/40*Math.PI*2,m=260+c()*160,y=25+c()*50;p.position.set(r/2+Math.cos(g)*m,y/2-1,r/2+Math.sin(g)*m),p.scale.set(60+c()*60,y,60+c()*60),p.rotation.y=c()*3,p.updateMatrix(),d.setMatrixAt(v,p.matrix)}n.add(d)}return l}function dm(n){return()=>{n|=0,n=n+1831565813|0;let t=Math.imul(n^n>>>15,1|n);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function ri(n,t,e,i,s,r,o,a,l=1){let c=t-s/2,h=t+s/2,u=e-r/2,f=e+r/2,d=i-o/2,p=i+o/2,v=[[[h,u,d],[h,u,p],[h,f,p],[h,f,d],[1,0,0],.9],[[c,u,d],[c,u,p],[c,f,p],[c,f,d],[-1,0,0],.9],[[c,u,p],[h,u,p],[h,f,p],[c,f,p],[0,0,1],.82],[[c,u,d],[h,u,d],[h,f,d],[c,f,d],[0,0,-1],.82],[[c,f,d],[c,f,p],[h,f,p],[h,f,d],[0,1,0],1]];for(let[g,m,y,b,M,R]of v)xi(n,[g,m,y,b],M,rn(a,R),M[1]?xo(l):xh(M[0],M[2],l))}function _b(n,t,e,i){let s=n.n,r=n.cell,o=n.top[0],a=n.cls[0],l=m=>a[m]===3,c=m=>a[m]===1,h=dm(t.length*131),u=t==="vertigo"?[.32,.45,.55]:[.16,.13,.11],f=t==="mirage"?[.85,.78,.66]:t==="vertigo"?[.45,.47,.5]:[.62,.48,.32],d=t==="mirage"?[.2,.52,.55]:[.35,.5,.68],p=t==="dust2"?[[.22,.42,.62],[.45,.3,.18]]:t==="mirage"?[[.2,.48,.5],[.5,.33,.2]]:[[.55,.56,.58],[.7,.55,.15]],v=[[1,0],[-1,0],[0,1],[0,-1]];for(let[m,y]of v){let b=m===0;for(let M=1;M<s-1;M++){let R=-1,T=0,x=0,_=A=>{if(R<0)return;let S=(A-R)*r,C=x-T;if(S>3&&C>3.2){let I=Math.floor(S/4.2);for(let w=0;w<I;w++){let P=(R+(w+.5)*(A-R)/I)*r,O=h(),W=(m>0||y>0?M+1:M)*r,q=.03,B=b?P:W-m*q,U=b?W-y*q:P,H=b?1:.1,E=b?.1:1;if(O<.16&&C>3){let F=p[Math.floor(h()*2)];ri(e.plain,B,T+1.15,U,H*1.4+(b?0:.06),2.3,E*1.4+(b?.06:0),f),ri(e.plain,B-m*.02,T+1.1,U-y*.02,H*1.2+(b?0:.06),2.2,E*1.2+(b?.06:0),F)}else if(C>4.2){let F=T+3.4;if(ri(e.plain,B,F,U,H*1.1+(b?0:.08),1.35,E*1.1+(b?.08:0),f),ri(e.plain,B-m*.02,F,U-y*.02,H*.85+(b?0:.08),1.1,E*.85+(b?.08:0),u),ri(e.plain,B-m*.08,F-.7,U-y*.08,H*1.25+(b?0:.18),.08,E*1.25+(b?.18:0),f),O>.72)for(let G of[-1,1]){let z=b?G*.75:0,N=b?0:G*.75;ri(e.plain,B+z-m*.04,F,U+N-y*.04,H*.38+(b?0:.05),1.15,E*.38+(b?.05:0),d)}else if(t==="mirage"&&O>.5){let G=[[.75,.25,.2],[.85,.65,.25],[.25,.45,.6]][Math.floor(h()*3)];ri(e.plain,B-m*.45,F+.85,U-y*.45,b?1.5:.9,.08,b?.9:1.5,G)}}}}R=-1};for(let A=1;A<s-1;A++){let S=b?A:M,C=b?M:A,I=C*s+S,w=(C+y)*s+(S+m),P=c(I)&&l(w)&&!isNaN(o[w]);P&&R>=0&&Math.abs(o[I]-T)<.35&&Math.abs(o[w]-x)<.7||(_(A),P&&(R=A,T=o[I],x=o[w]))}_(s-1)}}if(n.slabs){let m=n.top[1],y=n.bot[1],b=n.cls[1];for(let M=1;M<s-1;M++)for(let R=1;R<s-1;R++){let T=M*s+R;if(!(b[T]!==4||y[T]-o[T]>2.8||!c(T)&&a[T]!==2))for(let[x,_]of v){let A=(M+_)*s+R+x;if(!l(A))continue;let S=(R+.5+x*.5)*r-x*.06,C=(M+.5+_*.5)*r-_*.06,I=y[T]-o[T];ri(e.wood,S,o[T]+I/2,C,x?.14:r,I,_?.14:r,rn(i.slab,1.1),2)}}}let g=[];for(let m=0;m<900&&g.length<(t==="mirage"?26:18);m++){let y=2+Math.floor(h()*(s-4)),b=2+Math.floor(h()*(s-4)),M=b*s+y;if(!c(M))continue;let R=0;for(let[A,S]of v)l((b+S*2)*s+y+A*2)&&R++;if(R!==2||n.flags[M]&60)continue;let T=(y+.5)*r,x=(b+.5)*r,_=o[M];if(!g.some(A=>Math.hypot(A[0]-T,A[1]-x)<8))if(g.push([T,x]),t==="mirage"&&h()<.35){ri(e.plain,T,_+.3,x,.7,.6,.7,[.7,.42,.28]);for(let A=0;A<5;A++){let S=A/5*Math.PI*2;ri(e.plain,T+Math.cos(S)*.35,_+.85,x+Math.sin(S)*.35,.5,.08,.5,[.28,.5,.22])}}else{let A=t==="vertigo"?[.85,.55,.1]:h()<.5?[.3,.42,.55]:[.55,.3,.2];ri(e.plain,T,_+.45,x,.6,.9,.6,A),ri(e.plain,T,_+.3,x,.64,.06,.64,rn(A,.7)),ri(e.plain,T,_+.65,x,.64,.06,.64,rn(A,.7))}}}var cm={dust2:{floor:[[.9,.76,.56],"sand",3.2],road:[[.86,.76,.6],"cobble",2.4],wall:[[.95,.84,.66],"blocks",2.6],trim:[[.8,.69,.52],"stone",1.6],crate:[[1,.95,.88],"crate",1.6256],door:[[.66,.48,.3],"wood",1.6],concrete:[[.8,.76,.68],"concrete",2.4],rock:[[.76,.65,.52],"stone",2],metal:[[.42,.44,.47],"metal",1.5],dark:[[.16,.14,.12],null,1],ceiling:[[.66,.5,.34],"wood",2],roof:[[.86,.74,.56],"blocks",2.6],base:[[.8,.68,.52],"stone",1.6]},mirage:{floor:[[.9,.82,.68],"slabs",4],wall:[[.9,.8,.64],"plaster",3.4],base:[[.78,.7,.6],"stone",1.6],ceiling:[[.66,.47,.32],"wood",2],roof:[[.8,.44,.3],"roof",2]}};function pm(n,t,e,i,s){let r=cm[i]||cm.dust2,o=Pf(i),a=new Re,l=e.origin||[0,0,0],c=0;for(let v of e.parts)c+=v.tris;let h=new Array(c),u=0,f=0;for(let v of e.parts){for(let g=0;g<v.tris;g++){let m=v.cat;if(v.cat==="floor"&&s&&r.roof){let y=u+g*9,b=(t[y]+t[y+3]+t[y+6])/300,M=(t[y+1]+t[y+4]+t[y+7])/300,R=(t[y+2]+t[y+5]+t[y+8])/300;Mb(s,b,M,R)&&(m="roof")}if(v.cat==="wall"&&r.base){let y=u+g*9,b=Math.min(t[y+1],t[y+4],t[y+7])/100,M=Math.max(t[y+1],t[y+4],t[y+7])/100,R=(t[y]+t[y+3]+t[y+6])/300,T=(t[y+2]+t[y+5]+t[y+8])/300,x=hm(n,R,T,b+.3);x>-1e8&&M-x<.95&&M-b<1&&(m="base")}h[f+g]=m}u+=v.tris*9,f+=v.tris}let d=[...new Set(h)],p=0;for(let v of d){let g=[];for(let C=0;C<c;C++)h[C]===v&&g.push(C);let m=g.length,y=new Float32Array(m*9),b=new Float32Array(m*9),M=new Float32Array(m*6),R=new Float32Array(m*9),[T,x,_]=r[v]||r.wall||[[.8,.8,.8],null,2];for(let C=0;C<m;C++){let I=g[C]*9;for(let J=0;J<9;J++)y[C*9+J]=t[I+J]/100;let w=C*9,P=y[w+3]-y[w],O=y[w+4]-y[w+1],W=y[w+5]-y[w+2],q=y[w+6]-y[w],B=y[w+7]-y[w+1],U=y[w+8]-y[w+2],H=O*U-W*B,E=W*q-P*U,F=P*B-O*q,G=Math.hypot(H,E,F)||1;H/=G,E/=G,F/=G;let z=Math.abs(H),N=Math.abs(E),V=Math.abs(F),Z=1+(gh(Math.floor(y[w]/3),Math.floor(y[w+2]/3+y[w+1]/4))-.5)*.07;for(let J=0;J<3;J++){let it=y[w+J*3],ut=y[w+J*3+1],Tt=y[w+J*3+2];R[w+J*3]=H,R[w+J*3+1]=E,R[w+J*3+2]=F;let Dt=Z;if(N<.5){let yt=hm(n,it,Tt,ut+.15),Gt=yt>-1e8?ut-yt:9;Gt<.3?Dt*=.72:Gt<.9&&(Dt*=.8+(Gt-.3)/.6*.2)}b[w+J*3]=T[0]*Dt,b[w+J*3+1]=T[1]*Dt,b[w+J*3+2]=T[2]*Dt;let Wt=it-l[0],at=ut-l[1],ht=Tt-l[2],dt,pt;N>=z&&N>=V?(dt=Wt,pt=ht):z>=V?(dt=ht,pt=-at):(dt=Wt,pt=-at),M[C*6+J*2]=dt/_,M[C*6+J*2+1]=pt/_}}p+=m;let A=new Ue;A.setAttribute("position",new qe(y,3)),A.setAttribute("normal",new qe(R,3)),A.setAttribute("color",new qe(b,3)),A.setAttribute("uv",new qe(M,2)),A.computeBoundingSphere();let S=new zt(A,$i(x,{side:pi,rough:v==="metal"?.6:.92,metal:v==="metal"?.3:0,bump:v==="floor"||v==="roof"?.9:1.1}));S.castShadow=!0,S.receiveShadow=!0,S.matrixAutoUpdate=!1,a.add(S)}return a.matrixAutoUpdate=!1,{mesh:a,tris:p,theme:o}}function Mb(n,t,e,i){if(e<3.5)return!1;let s=Math.floor(t/n.c),r=Math.floor(i/n.c);for(let o=-1;o<=1;o++)for(let a=-1;a<=1;a++){let l=s+a,c=r+o;if(l<0||c<0||l>=n.m||c>=n.m)continue;let h=c*n.m+l;for(let u=0;u<n.L;u++){let f=n.H[u][h];if(!isNaN(f)&&Math.abs(f-e)<.9&&n.main[u*n.N+h])return!1}}return!0}function hm(n,t,e,i){let s=n.idx(t,e);if(s<0)return-1/0;let r=-1/0;for(let o=0;o<n.L;o++){let a=n.top[o][s];!isNaN(a)&&a<=i&&a>r&&(r=a)}return r}var ms=.0254,oe={gravity:800*ms,jump:301.993*ms,accel:5.5,airAccel:12,friction:5.2,stop:80*ms,airCap:30*ms,hStand:72*ms,hCrouch:54*ms,eyeStand:64*ms,eyeCrouch:46*ms,walk:.52,crouchMul:.34,r:.4};function Na(n,t,e,i=0){return{x:n,y:t,z:e,vx:0,vy:0,vz:0,yaw:i,pitch:0,duck:0,onGround:!0,landT:0,h:oe.hStand,alive:!0,jumpHeld:!1}}var bn=n=>oe.eyeStand+(oe.eyeCrouch-oe.eyeStand)*n.duck;function yh(n,t,e,i,s){t.sinceLand=(t.sinceLand??1)+i;let r=e.crouch?1:0;if(r>t.duck)t.duck=Math.min(1,t.duck+i*8);else if(r<t.duck){let g=Math.max(0,t.duck-i*8),m=oe.hStand+(oe.hCrouch-oe.hStand)*g;dh(n,t.x,t.z,t.y)>=t.y+m&&(t.duck=g)}let o=t.h;t.h=oe.hStand+(oe.hCrouch-oe.hStand)*t.duck,!t.onGround&&t.h<o&&(t.y+=(o-t.h)*.5);let a=s*(t.duck>.5?oe.crouchMul:e.walk?oe.walk:1),l=Math.sin(t.yaw),c=Math.cos(t.yaw),h=-l*e.f+c*e.s,u=-c*e.f-l*e.s,f=Math.hypot(h,u);if(f>1e-6?(h/=f,u/=f):a=0,t.onGround)if(e.jump&&!t.jumpHeld&&dh(n,t.x,t.z,t.y)>t.y+t.h+.05)t.vy=oe.jump*((t.sinceLand||1)<.4?.88:1),t.onGround=!1,t.jumpHeld=!0;else{let g=Math.hypot(t.vx,t.vz);if(g>.001){let m=Math.max(g,oe.stop)*oe.friction*i*(t.landT>0?1.4:1),y=Math.max(0,g-m)/g;t.vx*=y,t.vz*=y}gm(t,h,u,a,oe.accel,i)}t.onGround||gm(t,h,u,Math.min(a,oe.airCap),oe.airAccel,i,a),e.jump||(t.jumpHeld=!1),t.landT>0&&(t.landT-=i),qn(n,t.x,t.z,t.y,t.h,oe.r)&&!bb(n,t)&&(t.blkT=(t.blkT||0)+i,t.blkT>.3&&(mm(n,t),t.blkT=0));let d=t.x+t.vx*i;qn(n,d,t.z,t.y,t.h,oe.r)?t.vx=0:t.x=d;let p=t.z+t.vz*i;qn(n,t.x,p,t.y,t.h,oe.r)?t.vz=0:t.z=p,(e.f||e.s)&&t.onGround&&xm(n,t)?(t.pocketT=(t.pocketT||0)+i,t.pocketT>.6&&(mm(n,t),t.pocketT=0)):t.pocketT=0;let v=fh(n,t.x,t.z,t.y,oe.r-.02);if(t.onGround&&(v>=t.y-.62&&v>-1/0?(t.y=v,t.vy=0):t.onGround=!1),!t.onGround){t.vy-=oe.gravity*i;let g=t.y;t.y+=t.vy*i;let m=dh(n,t.x,t.z,g);t.y+t.h>m&&t.vy>0&&(t.y=Math.max(g,m-t.h),t.vy=0);let y=fh(n,t.x,t.z,t.y-t.vy*i,oe.r-.02);if(t.vy<=0&&t.y<=y){let b=-t.vy;return t.y=y,t.vy=0,t.onGround=!0,t.landT=.12,t.sinceLand=0,Math.hypot(t.vx,t.vz)>4&&(t.vx*=.78,t.vz*=.78),b}}return Sb(n,t),0}function bb(n,t){for(let e=.04;e<=.8;e+=.04)for(let i=0;i<16;i++){let s=i*Math.PI/8,r=t.x+Math.cos(s)*e,o=t.z+Math.sin(s)*e;for(let a of[0,.62*.9])if(!qn(n,r,o,t.y+a,t.h,oe.r))return t.x=r,t.z=o,t.y+=a,!0}return!1}function xm(n,t){for(let e=0;e<8;e++){let i=e*Math.PI/4;if(!qn(n,t.x+Math.cos(i)*.15,t.z+Math.sin(i)*.15,t.y,t.h,oe.r))return!1}return!0}function mm(n,t){for(let e=.2;e<=4;e+=e<2.4?.1:.25)for(let i=0;i<24;i++){let s=i*Math.PI/12,r=t.x+Math.cos(s)*e,o=t.z+Math.sin(s)*e;for(let a of[0,.62*.9,-.6,-1.4,-2.5]){let l=t.y+a;if(qn(n,r,o,l,t.h,oe.r))continue;let c=fh(n,r,o,l+.05);if(!(c>-50))continue;let h={x:r,z:o,y:c,h:t.h};if(!(qn(n,r,o,c,t.h,oe.r)||xm(n,h)))return t.x=r,t.z=o,t.y=c,t.vx=t.vz=0,!0}}return!1}function Sb(n,t){let e=n.idx(t.x,t.z);if(!(e<0))for(let i=0;i<n.L;i++){let s=n.top[i][e],r=n.bot[i][e];if(!isNaN(s)&&r<t.y-.05&&s>t.y+.02&&s-t.y<2.5){t.y=s,t.vy=Math.max(0,t.vy),t.onGround=!0;return}}}function gm(n,t,e,i,s,r,o){let a=n.vx*t+n.vz*e,l=i-a;if(l<=0)return;let c=s*r*(o||i);c>l&&(c=l),n.vx+=c*t,n.vz+=c*e}function Lf(n){let t=n/ms;return t>580?Math.round((t-580)*(100/444)):0}function Tb(n){let t=n.h,e=t/oe.hStand;return[{part:"head",y0:t-.27*e,y1:t,r:.13},{part:"chest",y0:t-.62*e,y1:t-.27*e,r:.22},{part:"stomach",y0:t-.9*e,y1:t-.62*e,r:.2},{part:"leg",y0:0,y1:t-.9*e,r:.18}]}function ym(n,t,e,i,s,r,o,a){let l=null;for(let c of Tb(n)){let h=n.x,u=n.z,f=t-h,d=i-u,p=s*s+o*o,v=2*(f*s+d*o),g=f*f+d*d-c.r*c.r,m;if(p<1e-9){if(g>0)continue;m=0}else{let b=v*v-4*p*g;if(b<0||(m=(-v-Math.sqrt(b))/(2*p),m<0&&(m=(-v+Math.sqrt(b))/(2*p)),m<0))continue}let y=e+r*m;y<n.y+c.y0||y>n.y+c.y1||m<=a&&(!l||m<l.t)&&(l={t:m,part:c.part})}return l}var wb=1.15,Nf=.74;function yo(n){let t=Math.max(1,Math.round(.55/n.cell)),e=Math.floor(n.n/t),i=e*e,s=n.cell*t,r=[];for(let m=0;m<n.L;m++)r.push(new Float32Array(i).fill(NaN));for(let m=0;m<e;m++)for(let y=0;y<e;y++){let b=(y+.5)*s,M=(m+.5)*s,R=n.idx(b,M);for(let T=0;T<n.L;T++){let x=n.top[T][R];if(isNaN(x))continue;let _=n.cls[T][R];_===3||_===4||qn(n,b,M,x,oe.hCrouch+.05,.36)||(r[T][m*e+y]=x)}}let o={W:n,k:t,m:e,c:s,H:r,L:n.L};o.node=(m,y)=>m*i+y,o.pos=m=>{let y=Math.floor(m/i),b=m%i;return[(b%e+.5)*s,r[y][b],(Math.floor(b/e)+.5)*s,y]},o.nearest=(m,y,b)=>{let M=Math.floor(m/s),R=Math.floor(b/s),T=-1,x=1e9;for(let _=0;_<=6&&T<0;_++)for(let A=-_;A<=_;A++)for(let S=-_;S<=_;S++){if(Math.max(Math.abs(S),Math.abs(A))!==_)continue;let C=M+S,I=R+A;if(C<0||I<0||C>=e||I>=e)continue;let w=I*e+C;for(let P=0;P<n.L;P++){let O=r[P][w];if(isNaN(O)||o.main&&!o.main[P*i+w])continue;let W=Math.abs(O-y)*3+Math.hypot(S,A);W<x&&(x=W,T=P*i+w)}}return T};let a=[1,-1,0,0,1,1,-1,-1],l=[0,0,1,-1,1,-1,1,-1];o.neighbors=(m,y)=>{y.length=0;let b=Math.floor(m/i),M=m%i,R=M%e,T=(M-R)/e,x=r[b][M];for(let _=0;_<8;_++){let A=R+a[_],S=T+l[_];if(A<0||S<0||A>=e||S>=e)continue;let C=S*e+A;if(!(_>=4&&(!c(b,T*e+A,x)||!c(b,S*e+R,x))))for(let I=0;I<n.L;I++){let w=r[I][C];if(isNaN(w))continue;let P=w-x;P>wb||-P>2.2||P>Nf&&_>=4||y.push(I*i+C,(_>=4?1.414:1)+(P>Nf?4:0))}}return y};function c(m,y,b){for(let M=0;M<n.L;M++){let R=r[M][y];if(!isNaN(R)&&Math.abs(R-b)<=Nf)return!0}return!1}let h=new Uint8Array(n.L*i);for(let m=0;m<n.L;m++)for(let y=0;y<i;y++){if(isNaN(r[m][y]))continue;let b=y%e,M=(y-b)/e,R=0;for(let T=0;T<8;T++){let x=b+a[T],_=M+l[T];(x<0||_<0||x>=e||_>=e||!c(m,_*e+x,r[m][y]))&&R++}h[m*i+y]=R}o.edge=h,o.N=i;let u=n.L*i,f=[],d=Af(n,32),p=[];for(let m=0;m<d.length&&p.length<8;m+=Math.max(1,Math.floor(d.length/8))){let y=d[m],b=(y%n.n+.5)*n.cell,M=(Math.floor(y/n.n)+.5)*n.cell,R=Math.floor(M/o.c)*e+Math.floor(b/o.c);for(let T=0;T<n.L;T++)if(!isNaN(r[T][R])){p.push(T*i+R);break}}if(!p.length){for(let m=0;m<u;m++)if(!isNaN(r[Math.floor(m/i)][m%i])){p.push(m);break}}let v=null,g=-1;for(let m of p){if(v&&v[m])continue;let y=new Uint8Array(u),b=new Uint8Array(u),M=new Map,R=[m];for(y[m]=1;R.length;){let _=R.pop();o.neighbors(_,f);for(let A=0;A<f.length;A+=2){let S=f[A],C=M.get(S);C||M.set(S,C=[]),C.push(_),y[S]||(y[S]=1,R.push(S))}}for(R=[m],b[m]=1;R.length;){let _=R.pop(),A=M.get(_);if(A)for(let S of A)b[S]||(b[S]=1,R.push(S))}let T=new Uint8Array(u),x=0;for(let _=0;_<u;_++)y[_]&b[_]&&(T[_]=1,x++);x>g&&(g=x,v=T)}return o.main=v,o}var yr={a:[],f:[]};function Hs(n,t,e,i=6e4){if(t<0||e<0)return null;let s=n.L*n.N;(!n.g||n.g.length!==s)&&(n.g=new Float32Array(s),n.came=new Int32Array(s),n.seen=new Uint32Array(s),n.closed=new Uint32Array(s),n.stamp=0);let r=n.g,o=n.came,a=n.seen,l=n.closed,c=++n.stamp,[h,,u]=n.pos(e),f=g=>{let m=n.pos(g);return Math.hypot(m[0]-h,m[2]-u)/n.c};yr.a.length=0,yr.f.length=0,vm(t,f(t)),r[t]=0,o[t]=-1,a[t]=c;let d=[],p=0;for(;yr.a.length&&p++<i;){let g=Eb();if(g===e)break;if(l[g]!==c){l[g]=c,n.neighbors(g,d);for(let m=0;m<d.length;m+=2){let y=d[m],b=r[g]+d[m+1]+n.edge[y]*.35;a[y]===c&&b>=r[y]||(a[y]=c,r[y]=b,o[y]=g,vm(y,b+f(y)))}}}if(a[e]!==c)return null;let v=[];for(let g=e;g!==-1;g=o[g])v.push(n.pos(g));return v.reverse(),Ab(n,v)}function vm(n,t){let e=yr.a,i=yr.f;e.push(n),i.push(t);let s=e.length-1;for(;s>0;){let r=s-1>>1;if(i[r]<=i[s])break;[e[r],e[s]]=[e[s],e[r]],[i[r],i[s]]=[i[s],i[r]],s=r}}function Eb(){let n=yr.a,t=yr.f,e=n[0],i=n.pop(),s=t.pop();if(n.length){n[0]=i,t[0]=s;let r=0;for(;;){let o=2*r+1,a=o+1,l=r;if(o<n.length&&t[o]<t[l]&&(l=o),a<n.length&&t[a]<t[l]&&(l=a),l===r)break;[n[l],n[r]]=[n[r],n[l]],[t[l],t[r]]=[t[r],t[l]],r=l}}return e}function Ab(n,t){if(t.length<3)return t;let e=[t[0]];for(let i=1;i<t.length-1;i++){let s=e[e.length-1],r=t[i+1],o=[t[i][0]-s[0],t[i][2]-s[2]],a=[r[0]-t[i][0],r[2]-t[i][2]];(Math.abs(o[0]*a[1]-o[1]*a[0])>1e-4||Math.abs(t[i][1]-s[1])>.3||Math.hypot(t[i][0]-s[0],t[i][2]-s[2])>n.c*6)&&e.push(t[i])}return e.push(t[t.length-1]),e}function oi(n,t){let e=n.W,i=new Set;for(let s of Af(e,t)){let r=(s%e.n+.5)*e.cell,o=(Math.floor(s/e.n)+.5)*e.cell,a=Math.floor(r/n.c),l=Math.floor(o/n.c),c=l*n.m+a;for(let h=e.L-1;h>=0;h--)if(!isNaN(n.H[h][c])&&n.main[h*n.N+c]){i.add(h*n.N+c);break}}return[...i]}function _m(n,t,e=1.45){let{m:i,N:s,H:r}=t,o=n.L*s;if(!t.main)return 0;let a=[[1,0],[-1,0],[0,1],[0,-1]],l=(b,M)=>{let R=Math.floor(b/s),T=b%s,x=T%i,_=(T-x)/i,A=r[R][T];for(let[S,C]of a){let I=x+S,w=_+C;if(I<0||w<0||I>=i||w>=i)continue;let P=w*i+I;for(let O=0;O<n.L;O++){let W=r[O][P];!isNaN(W)&&W-A<=e&&M(O*s+P)}}},c=new Uint8Array(o),h=[];for(let b=0;b<o;b++)t.main[b]&&(c[b]=1,h.push(b));for(;h.length;){let b=h.pop();l(b,M=>{c[M]||(c[M]=1,h.push(M))})}let u=new Map;for(let b=0;b<o;b++)c[b]&&l(b,M=>{if(!c[M])return;let R=u.get(M);R||u.set(M,R=[]),R.push(b)});let f=new Uint8Array(o);for(let b=0;b<o;b++)t.main[b]&&(f[b]=1,h.push(b));for(;h.length;){let b=h.pop(),M=u.get(b);if(M)for(let R of M)f[R]||(f[R]=1,h.push(R))}let d=new Uint8Array(o).fill(255),p=new Float32Array(o),v=[];for(let b=0;b<o;b++)t.main[b]&&(d[b]=0,p[b]=r[Math.floor(b/s)][b%s],v.push(b));let g=b=>r[Math.floor(b/s)][b%s];for(let b=0;b<v.length;b++){let M=v[b],R=g(M);l(M,T=>{if(t.main[T])return;let x=g(T)-R,_=d[M]+(x>.7?1:0),A=t.main[M]?R:p[M];_<d[T]&&(d[T]=_,p[T]=A,v.push(T))})}let m=b=>!t.main[b]&&d[b]<255&&(d[b]>2||g(b)-p[b]>2.6),y=0;for(let b=0;b<o;b++){let M=c[b]&&!f[b];if(!M&&!m(b))continue;if(!M){let S=Math.floor(b/s),C=b%s,I=C%i,w=(C-I)/i,P=r[S][C];for(let O=0;O<t.k;O++)for(let W=0;W<t.k;W++){let q=(w*t.k+O)*n.n+I*t.k+W,B=-1,U=.4;for(let E=0;E<n.L;E++){let F=n.top[E][q];!isNaN(F)&&Math.abs(F-P)<U&&(U=Math.abs(F-P),B=E)}if(B<0)continue;let H=B+1<n.L&&!isNaN(n.bot[B+1][q])?n.bot[B+1][q]:60;n.top[B][q]=Math.min(H,n.top[B][q]+2.2),n.cls[B][q]=3,y++}continue}let R=Math.floor(b/s),T=b%s,x=T%i,_=(T-x)/i,A=r[R][T];for(let S=0;S<t.k;S++)for(let C=0;C<t.k;C++){let I=(_*t.k+S)*n.n+x*t.k+C,w=-1,P=.4;for(let W=0;W<n.L;W++){let q=n.top[W][I];!isNaN(q)&&Math.abs(q-A)<P&&(P=Math.abs(q-A),w=W)}if(w<0)continue;let O=w+1<n.L&&!isNaN(n.bot[w+1][I])?n.bot[w+1][I]:40;n.top[w][I]=O,n.cls[w][I]=3,y++}}return y}function Mm(n,t,e=null){let i=n.L*n.N,s=new Float64Array(i).fill(1/0),r=[],o=[],a=(c,h)=>{o.push([c,h]);let u=o.length-1;for(;u>0;){let f=u-1>>1;if(o[f][0]<=o[u][0])break;[o[f],o[u]]=[o[u],o[f]],u=f}},l=()=>{let c=o[0],h=o.pop();if(o.length){o[0]=h;let u=0;for(;;){let f=u*2+1,d=f+1,p=u;if(f<o.length&&o[f][0]<o[p][0]&&(p=f),d<o.length&&o[d][0]<o[p][0]&&(p=d),p===u)break;[o[p],o[u]]=[o[u],o[p]],u=p}}return c};for(let c of t)s[c]=0,a(0,c);for(;o.length;){let[c,h]=l();if(!(c>s[h])){e?r=e.get(h)||[]:n.neighbors(h,r);for(let u=0;u<r.length;u+=2){let f=r[u],d=c+r[u+1];n.main[f]&&d<s[f]&&(s[f]=d,a(d,f))}}}return s}function bm(n,t){let e=oi(t,16),i=oi(t,32),s=oi(t,4),r=oi(t,8);if(!e.length||!i.length||!s.length||!r.length)return null;let o=[],a=Mm(t,e),l=Mm(t,i),c=(C,I)=>C.reduce((w,P)=>Math.min(w,I[P]),1/0),h=C=>Math.max(c(C,a),c(C,l))+.3*(c(C,a)+c(C,l)),u=h(s)<=h(r)?"A":"B",f=u==="A"?s:r,d=t.L*t.N,p=new Uint8Array(d),v=C=>{let I=0,w=0,P=0;for(let W of C){let q=t.pos(W);I+=q[0],w+=q[1],P+=q[2]}let O=C.length;return t.nearest(I/O,w/O,P/O)},g=v(e),m=v(i),y=v(f),b=[];for(let[C,I]of[[g,y],[y,g],[m,y],[y,m],[g,m],[m,g]]){let w=Hs(t,C,I);if(w)for(let P of w){let O=t.nearest(P[0],P[1],P[2]);O>=0&&b.push([O,16])}}for(let C of e)b.push([C,14]);for(let C of i)b.push([C,14]);for(let C of f)b.push([C,16]);let M=new Int8Array(d).fill(-1),R=[];for(let[C,I]of b)I>M[C]&&(M[C]=I,R.push(C));for(;R.length;){let C=R.pop();if(p[C]=1,!(M[C]<=0)){t.neighbors(C,o);for(let I=0;I<o.length;I+=2){let w=o[I];t.main[w]&&M[C]-1>M[w]&&(M[w]=M[C]-1,R.push(w))}}}let T=[],x=new Set,_=Uint8Array.from(p);for(let C=0;C<d;C++)if(p[C]){t.neighbors(C,T);for(let I=0;I<T.length;I+=2)t.main[T[I]]&&(_[T[I]]=1)}p.set(_);for(let C=0;C<d;C++)if(p[C]){t.neighbors(C,T);for(let I=0;I<T.length;I+=2){let w=T[I];!p[w]&&t.main[w]&&x.add(w)}}let A=[];for(let C of x){let I=Math.floor(C/t.N),w=C%t.N,P=w%t.m,O=Math.floor(w/t.m),W=t.H[I][w];for(let q=0;q<t.k;q++)for(let B=0;B<t.k;B++){let U=P*t.k+B,H=O*t.k+q,E=H*n.n+U,F=-1,G=.35;for(let Z=0;Z<n.L;Z++){let J=n.top[Z][E];!isNaN(J)&&Math.abs(J-W)<G&&(G=Math.abs(J-W),F=Z)}if(F<0)continue;let z=!1;for(let Z=0;Z<t.L&&!z;Z++){let J=Z*t.N+w;p[J]&&Math.abs(t.H[Z][w]-W)<3.4&&J!==C&&(z=!0)}if(z)continue;let N=n.top[F][E],V=F+1<n.L&&!isNaN(n.bot[F+1][E])?n.bot[F+1][E]:1/0;n.top[F][E]=Math.min(N+3.2,V),n.cls[F][E]=3,A.push([U,H,N,Math.min(3.2,V-N)])}}let S=u==="A"?8:4;for(let C=0;C<n.flags.length;C++)n.flags[C]&=~S;return{site:u,cells:A}}function Sm(n,t){let e=new Fe(1,1,1),i=[],s=[],r=[],o=[],a=e.attributes.position.array,l=e.attributes.normal.array,c=e.attributes.uv.array,h=e.index.array,u=(p,v,g,m,y)=>{for(let b=0;b<h.length;b++){let M=h[b],R=p+(a[M*3]+.5)*n.cell,T=g+(a[M*3+1]+.5)*(m-g),x=v+(a[M*3+2]+.5)*n.cell;i.push(R,T,x),s.push(l[M*3],l[M*3+1],l[M*3+2]),r.push((R+x)/1.2,T/1.2),o.push(y[0],y[1],y[2])}};for(let[p,v,g,m]of t){let y=p*n.cell,b=v*n.cell,M=p+v>>2&1;if(m<1.4){u(y,b,g,g+m,[.78,.62,.42]);continue}u(y,b,g,g+1,[.78,.62,.42]),u(y,b,g+1,g+1.3,M?[.95,.75,.15]:[.14,.14,.14]),u(y,b,g+1.3,g+m,[.72,.57,.38])}let f=new Ue;f.setAttribute("position",new te(i,3)),f.setAttribute("normal",new te(s,3)),f.setAttribute("uv",new te(r,2)),f.setAttribute("color",new te(o,3));let d=new zt(f,$i("crate"));return d.castShadow=!0,d.receiveShadow=!0,d}function Li(n,t=!1){let e=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},o={},a=n[0].morphTargetsRelative,l=new Ue;l.morphTargetsRelative=a;let c=0;for(let h=0;h<n.length;++h){let u=n[h],f=0,d=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let p in u.attributes){if(!i.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(u.attributes[p]),f++}if(f!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let p in u.morphAttributes){if(!s.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;if(u.morphAttributes[p].length!==n[0].morphAttributes[p].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have the same number of morph targets for the "'+p+'" morph attribute.'),null;o[p]===void 0&&(o[p]=[]),o[p].push(u.morphAttributes[p]),d++}if(d!==s.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of morph attributes."),null;if(t){let p;if(e)p=u.index.count;else if(u.attributes.position!==void 0)p=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,p,h),c+=p}}if(e){let h=0,u=[];for(let f=0;f<n.length;++f){let d=n[f].index;for(let p=0;p<d.count;++p)u.push(d.getX(p)+h);h+=n[f].attributes.position.count}l.setIndex(u)}for(let h in r){let u=Tm(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let f=0;f<u;++f){let d=[];for(let v=0;v<o[h].length;++v)d.push(o[h][v][f]);let p=Tm(d);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(p)}}}return l}function Tm(n){let t,e,i,s=-1,r=0;for(let c=0;c<n.length;++c){let h=n[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let o=new t(r),a=new qe(o,e,i),l=0;for(let c=0;c<n.length;++c){let h=n[c];if(h.isInterleavedBufferAttribute){let u=l/e;for(let f=0,d=h.count;f<d;f++)for(let p=0;p<e;p++){let v=h.getComponent(f,p);a.setComponent(f+u,p,v)}}else o.set(h.array,l);l+=h.count*e}return s!==void 0&&(a.gpuType=s),a}function Rb(n){let t=n|0;return()=>{t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}var vr=(n,t)=>{let e=n.attributes.position.count,i=new Float32Array(e*3),s=new Xt(t);for(let r=0;r<e;r++)i[r*3]=s.r,i[r*3+1]=s.g,i[r*3+2]=s.b;return n.setAttribute("color",new qe(i,3)),n},_r=n=>n.index?n.toNonIndexed():n,yi=(n,t,e,i,s,r,o,a=0)=>vr(_r(new Fe(n,t,e).rotateY(a).translate(i,s,r)),o),Da=(n,t,e,i,s,r,o,a=18)=>vr(_r(new Hn(n,t,e,a).translate(i,s,r)),o),vh=(n,t,e,i,s,r)=>vr(_r(new lr(n,t,10,22).rotateX(Math.PI/2).translate(e,i,s)),r),Ua=(n,t,e,i,s,r,o)=>vr(_r(new fi(1,14,10).scale(n,t,e).translate(i,s,r)),o),_h={barrel(n="#4f6f8a"){return{metal:[Da(.29,.29,.88,0,.44,0,n),vh(.295,.02,0,.25,0,"#3a3a3a"),vh(.295,.02,0,.63,0,"#3a3a3a"),Da(.27,.27,.02,0,.885,0,"#555")],hw:.32,hd:.32,h:.9}},barrels2(){let n=_h.barrel("#7a3b2a").metal,t=_h.barrel("#4f6f8a").metal.map(e=>e.clone().translate(.62,0,.1));return{metal:[...n,...t],hw:.65,hd:.36,h:.9,cx:.31}},pallet(){let n=[];for(let e=0;e<5;e++)n.push(yi(1.2,.025,.14,0,.13,-.45+e*.225,"#9a7650"));for(let e of[-.45,0,.45])n.push(yi(1.2,.1,.12,0,.065,e,"#7d5e3c"));let t=[];for(let e=0;e<6;e++){let i=-.33+e%3*.33,s=e<3?-.2:.2;t.push(Ua(.17,.09,.23,i,.24,s,"#d8c9a3"))}for(let e=0;e<3;e++)t.push(Ua(.17,.09,.23,-.17+e%2*.33,.41,e===2?.2:-.1,"#cdbd94"));return{wood:n,cloth:t,hw:.62,hd:.5,h:.52}},tires(){let n=[];for(let t=0;t<4;t++)n.push(vh(.3,.11,0,.11+t*.21,0,"#1d1d1d"));return{rubber:n,hw:.42,hd:.42,h:.85}},gas(){let n=[];for(let t=0;t<3;t++){let e=-.26+t*.26;n.push(Da(.11,.11,.62,e,.31,0,t===1?"#c23a2a":"#b9a24a"),Ua(.11,.07,.11,e,.62,0,"#888"),Da(.03,.03,.1,e,.71,0,"#444"))}return{metal:n,hw:.42,hd:.15,h:.75}},pot(){let n=[Da(.26,.18,.55,0,.275,0,"#b0603a"),vh(.26,.03,0,.55,0,"#9a5232")],t=[];for(let e=0;e<7;e++){let i=e/7*Math.PI*2;t.push(vr(_r(new hs(.05,.7,6).rotateZ(.5).rotateY(i).translate(Math.cos(i)*.14,.85,Math.sin(i)*.14)),"#4f7a33"))}return{clay:n,plant:t,hw:.28,hd:.28,h:.6}},sandbags(){let n=[];for(let t=0;t<3;t++)for(let e=0;e<4-(t===2?1:0);e++)n.push(Ua(.27,.12,.18,-.75+e*.5+t%2*.25,.12+t*.22,0,t%2?"#a99a72":"#b6a77d"));return{cloth:n,hw:1,hd:.25,h:.7}},cart(){let n=[yi(1.3,.1,.8,0,.55,0,"#8a6a46"),yi(1.3,.35,.05,0,.75,.38,"#7a5c3c"),yi(1.3,.35,.05,0,.75,-.38,"#7a5c3c"),yi(.05,.35,.8,.63,.75,0,"#7a5c3c"),yi(.06,.06,1,-1.05,.62,.3,"#6a4e33",0),yi(.06,.06,1,-1.05,.62,-.3,"#6a4e33")],t=[vr(_r(new Hn(.35,.35,.08,16).rotateX(Math.PI/2).translate(.15,.35,.46)),"#4a3a2a"),vr(_r(new Hn(.35,.35,.08,16).rotateX(Math.PI/2).translate(.15,.35,-.46)),"#4a3a2a")];return n[4].rotateY(0),{wood:[...n,...t],hw:1.15,hd:.5,h:.95}},crates(){return{crate:[yi(.9,.9,.9,0,.45,0,"#c9a77a"),yi(.6,.6,.6,.12,1.2,.05,"#bf9c6e",.3)],hw:.5,hd:.5,h:1.5}},fruit(){let n=[yi(1.4,.5,.7,0,.25,0,"#8d6b45"),yi(1.4,.04,.7,0,.52,0,"#6d5235")],t=[];for(let e=0;e<18;e++)t.push(Ua(.08,.08,.08,-.6+e%9*.15,.6,-.15+Math.floor(e/9)*.3,e%3?"#d9822b":"#c23a2a"));return{wood:n,plant:t,hw:.72,hd:.38,h:.68}}},wm={dust2:["barrel","barrels2","pallet","tires","gas","cart","crates","pot"],mirage:["pot","pot","fruit","crates","barrel","pallet"]};function Am(n,t,e,i=24){let s=wm[e]||wm.dust2,r=Rb(e.length*7919+13),o=[],{m:a,N:l,H:c}=t,h=[16,32].map(f=>{let d=0,p=0,v=0;for(let g=0;g<n.n*n.n;g+=7)n.flags[g]&f&&(d+=g%n.n,p+=Math.floor(g/n.n),v++);return v?[d/v*n.cell,p/v*n.cell]:[-99,-99]}),u=[];for(let f=4;f<a-4;f+=2)for(let d=4;d<a-4;d+=2){let p=f*a+d,v=-1;for(let S=0;S<t.L;S++)if(t.main[S*l+p]){v=S;break}if(v<0)continue;let g=c[v][p],m=(S,C)=>{let I=c[v][(f+C)*a+d+S];return!isNaN(I)&&Math.abs(I-g)<.3},y=0,b=0;for(let S=-6;S<=6;S++)for(let C=-6;C<=6;C++)f+S<0||f+S>=a||d+C<0||d+C>=a||(b++,m(C,S)&&y++);let M=m(1,0)?m(-1,0)?0:-1:1,R=m(0,1)?m(0,-1)?0:-1:1;if(!M||!R||y/b<.42)continue;let T=!0;for(let S=1;S<=4&&T;S++)(!m(-M*S,0)||!m(0,-R*S)||!m(-M*S,-R*S))&&(T=!1);if(!T)continue;let x=[M,R],_=(d+.5)*t.c,A=(f+.5)*t.c;h.some(S=>Math.hypot(S[0]-_,S[1]-A)<7)||u.push([_,g,A,Math.atan2(x[0],x[1])])}for(let f=u.length-1;f>0;f--){let d=Math.floor(r()*(f+1));[u[f],u[d]]=[u[d],u[f]]}for(let f of u){if(o.length>=i)break;if(o.some(_=>Math.hypot(_.x-f[0],_.z-f[2])<12))continue;let d=s[Math.floor(r()*s.length)],p=_h[d](),v=f[3]+(r()-.5)*.3,g=0,m=f[0]+Math.sin(f[3])*g,y=f[2]+Math.cos(f[3])*g,b=[],M=Math.cos(v),R=Math.sin(v),T=Math.hypot(p.hw,p.hd)+n.cell;for(let _=Math.floor((y-T)/n.cell);_<=Math.floor((y+T)/n.cell);_++)for(let A=Math.floor((m-T)/n.cell);A<=Math.floor((m+T)/n.cell);A++){let S=(A+.5)*n.cell-m,C=(_+.5)*n.cell-y,I=S*M-C*R-(p.cx||0),w=S*R+C*M;Math.abs(I)<=p.hw&&Math.abs(w)<=p.hd&&b.push(_*n.n+A)}let x=b.length>0;for(let _ of b){let A=n.top[0][_],S=NaN;for(let C=0;C<n.L;C++)!isNaN(n.top[C][_])&&Math.abs(n.top[C][_]-f[1])<.25&&(S=C);if(isNaN(S)||n.cls[S][_]!==1){x=!1;break}}if(x){for(let _ of b)for(let A=0;A<n.L;A++)if(!isNaN(n.top[A][_])&&Math.abs(n.top[A][_]-f[1])<.25){let S=A+1<n.L&&!isNaN(n.bot[A+1][_])?n.bot[A+1][_]:99;n.top[A][_]=Math.min(S,f[1]+p.h),n.cls[A][_]=2}o.push({kind:d,x:m,y:f[1],z:y,ry:v})}}return o}var Em={},Cb=n=>Em[n]||(Em[n]=n==="metal"?$i("metal",{rough:.55,metal:.3}):n==="wood"?$i("wood"):n==="crate"?$i("crate"):n==="cloth"?$i("fabric",{rough:1}):n==="clay"?$i("plaster",{rough:.9}):new An({vertexColors:!0,roughness:.9}));function Rm(n){let t={};for(let i of n){let s=_h[i.kind]();for(let[r,o]of Object.entries(s))if(Array.isArray(o))for(let a of o){let l=a.clone(),c=l.attributes.position,h=new Float32Array(c.count*2);for(let u=0;u<c.count;u++)h[u*2]=(c.getX(u)+c.getZ(u))*1.5,h[u*2+1]=c.getY(u)*1.5;l.setAttribute("uv",new qe(h,2)),l.rotateY(i.ry),l.translate(i.x,i.y,i.z),(t[r]=t[r]||[]).push(l)}}let e=new Re;for(let[i,s]of Object.entries(t)){let r=new zt(Li(s),Cb(i));r.castShadow=!0,r.receiveShadow=!0,e.add(r)}return e}var xe=n=>({auto:!1,pellets:1,hs:4,range:8192,rangeMod:.98,spread:.004,move:.12,kick:.6,sway:.4,kickCap:12,recover:9,scope:null,...n}),ne={knife:xe({name:"Cuchillo",cat:"knife",side:"both",price:0,reward:1500,dmg:40,ap:.85,rpm:150,mag:0,reserve:0,speed:250,range:64,auto:!0}),glock:xe({name:"Glock-18",cat:"pistol",side:"T",price:200,reward:300,dmg:30,ap:.47,rpm:400,mag:20,reserve:120,reload:2.2,speed:240,rangeMod:.85,spread:.007,move:.05,kick:.9,sway:.4,kickCap:5}),usp:xe({name:"USP-S",cat:"pistol",side:"CT",price:200,reward:300,dmg:35,ap:.505,rpm:352,mag:12,reserve:24,reload:2.2,speed:240,rangeMod:.91,spread:.004,move:.045,kick:1.1,sway:.3,kickCap:5,silent:!0}),p2000:xe({name:"P2000",cat:"pistol",side:"CT",price:200,reward:300,dmg:35,ap:.505,rpm:352,mag:13,reserve:52,reload:2.2,speed:240,rangeMod:.91,spread:.005,move:.045,kick:1.1,sway:.3,kickCap:5}),dualies:xe({name:"Dual Berettas",cat:"pistol",side:"both",price:300,reward:300,dmg:38,ap:.575,rpm:500,mag:30,reserve:120,reload:3.8,speed:240,rangeMod:.79,spread:.009,move:.05,kick:1,sway:.5,kickCap:6}),p250:xe({name:"P250",cat:"pistol",side:"both",price:300,reward:300,dmg:38,ap:.64,rpm:400,mag:13,reserve:26,reload:2.2,speed:240,rangeMod:.85,spread:.007,move:.05,kick:1.3,sway:.4,kickCap:6}),tec9:xe({name:"Tec-9",cat:"pistol",side:"T",price:500,reward:300,dmg:33,ap:.903,rpm:500,mag:18,reserve:90,reload:2.5,speed:240,rangeMod:.831,spread:.009,move:.04,kick:1.2,sway:.5,kickCap:7}),fiveseven:xe({name:"Five-SeveN",cat:"pistol",side:"CT",price:500,reward:300,dmg:32,ap:.9115,rpm:400,mag:20,reserve:100,reload:2.2,speed:240,rangeMod:.81,spread:.007,move:.045,kick:1.1,sway:.4,kickCap:6}),cz75:xe({name:"CZ75-Auto",cat:"pistol",side:"both",price:500,reward:100,dmg:31,ap:.776,rpm:600,mag:12,reserve:12,reload:2.7,speed:240,rangeMod:.85,spread:.008,move:.05,kick:1.1,sway:.6,kickCap:8,auto:!0}),deagle:xe({name:"Desert Eagle",cat:"pistol",side:"both",price:700,reward:300,dmg:53,ap:.932,rpm:267,mag:7,reserve:35,reload:2.2,speed:230,rangeMod:.81,spread:.006,move:.1,kick:3.4,sway:.6,kickCap:8,recover:7}),r8:xe({name:"R8 Revolver",cat:"pistol",side:"both",price:600,reward:300,dmg:86,ap:.932,rpm:120,mag:8,reserve:8,reload:2.3,speed:220,rangeMod:.94,spread:.006,move:.1,kick:3.6,sway:.4,kickCap:8}),mac10:xe({name:"MAC-10",cat:"smg",side:"T",price:1050,reward:600,dmg:29,ap:.575,rpm:800,mag:30,reserve:100,reload:2.6,speed:240,rangeMod:.8,auto:!0,spread:.009,move:.025,kick:.6,sway:.7,kickCap:7}),mp9:xe({name:"MP9",cat:"smg",side:"CT",price:1250,reward:600,dmg:26,ap:.6,rpm:857,mag:30,reserve:120,reload:2.1,speed:240,rangeMod:.87,auto:!0,spread:.008,move:.025,kick:.55,sway:.6,kickCap:7}),mp7:xe({name:"MP7",cat:"smg",side:"both",price:1500,reward:600,dmg:29,ap:.625,rpm:750,mag:30,reserve:120,reload:3.1,speed:220,rangeMod:.85,auto:!0,spread:.007,move:.03,kick:.5,sway:.5,kickCap:7}),mp5:xe({name:"MP5-SD",cat:"smg",side:"both",price:1500,reward:600,dmg:27,ap:.625,rpm:750,mag:30,reserve:120,reload:2.6,speed:235,rangeMod:.85,auto:!0,spread:.007,move:.025,kick:.45,sway:.5,kickCap:6,silent:!0}),ump:xe({name:"UMP-45",cat:"smg",side:"both",price:1200,reward:600,dmg:35,ap:.65,rpm:666,mag:25,reserve:100,reload:3.5,speed:230,rangeMod:.75,auto:!0,spread:.008,move:.03,kick:.6,sway:.5,kickCap:7}),p90:xe({name:"P90",cat:"smg",side:"both",price:2350,reward:300,dmg:26,ap:.69,rpm:857,mag:50,reserve:100,reload:3.3,speed:230,rangeMod:.86,auto:!0,spread:.008,move:.03,kick:.45,sway:.6,kickCap:7}),bizon:xe({name:"PP-Bizon",cat:"smg",side:"both",price:1400,reward:600,dmg:27,ap:.575,rpm:750,mag:64,reserve:120,reload:2.4,speed:240,rangeMod:.8,auto:!0,spread:.009,move:.03,kick:.45,sway:.6,kickCap:6}),nova:xe({name:"Nova",cat:"heavy",side:"both",price:1050,reward:900,dmg:26,ap:.5,rpm:68,mag:8,reserve:32,reload:4,speed:220,rangeMod:.7,pellets:9,spread:.06,move:.04,kick:3,sway:.5,range:3e3}),xm1014:xe({name:"XM1014",cat:"heavy",side:"both",price:2e3,reward:900,dmg:20,ap:.8,rpm:171,mag:7,reserve:32,reload:3.5,speed:215,rangeMod:.7,pellets:6,spread:.065,move:.04,kick:2.5,sway:.6,range:3500}),sawedoff:xe({name:"Sawed-Off",cat:"heavy",side:"T",price:1100,reward:900,dmg:32,ap:.75,rpm:71,mag:7,reserve:32,reload:3.6,speed:210,rangeMod:.45,pellets:8,spread:.09,move:.04,kick:3,sway:.6,range:1400}),mag7:xe({name:"MAG-7",cat:"heavy",side:"CT",price:1300,reward:900,dmg:30,ap:.75,rpm:71,mag:5,reserve:32,reload:2.5,speed:225,rangeMod:.45,pellets:8,spread:.05,move:.04,kick:3,sway:.5,range:1400}),m249:xe({name:"M249",cat:"heavy",side:"both",price:5200,reward:300,dmg:32,ap:.8,rpm:750,mag:100,reserve:200,reload:5.7,speed:195,rangeMod:.97,auto:!0,spread:.009,move:.15,kick:.6,sway:.8,kickCap:9}),negev:xe({name:"Negev",cat:"heavy",side:"both",price:1700,reward:300,dmg:35,ap:.71,rpm:800,mag:150,reserve:300,reload:5.7,speed:150,rangeMod:.97,auto:!0,spread:.012,move:.15,kick:.7,sway:.6,kickCap:6}),galil:xe({name:"Galil AR",cat:"rifle",side:"T",price:1800,reward:300,dmg:30,ap:.775,rpm:666,mag:35,reserve:90,reload:3,speed:215,auto:!0,spread:.005,move:.14,kick:.62,sway:.5,kickCap:10}),famas:xe({name:"FAMAS",cat:"rifle",side:"CT",price:2050,reward:300,dmg:30,ap:.7,rpm:666,mag:25,reserve:90,reload:3.3,speed:220,auto:!0,spread:.005,move:.14,kick:.6,sway:.5,kickCap:10}),ak47:xe({name:"AK-47",cat:"rifle",side:"T",price:2700,reward:300,dmg:36,ap:.775,rpm:600,mag:30,reserve:90,reload:2.5,speed:215,auto:!0,spread:.0049,move:.16,kick:.82,sway:.75,kickCap:13}),m4a4:xe({name:"M4A4",cat:"rifle",side:"CT",price:3100,reward:300,dmg:33,ap:.7,rpm:666,mag:30,reserve:90,reload:3.1,speed:225,auto:!0,spread:.0042,move:.15,kick:.68,sway:.6,kickCap:11}),m4a1s:xe({name:"M4A1-S",cat:"rifle",side:"CT",price:2900,reward:300,dmg:38,ap:.7,rpm:600,mag:20,reserve:80,reload:3.1,speed:225,auto:!0,spread:.0035,move:.15,kick:.58,sway:.45,kickCap:9,silent:!0}),sg553:xe({name:"SG 553",cat:"rifle",side:"T",price:3e3,reward:300,dmg:30,ap:1,rpm:545,mag:30,reserve:90,reload:2.8,speed:210,auto:!0,spread:.0045,move:.15,kick:.72,sway:.6,kickCap:11,scope:[1.8]}),aug:xe({name:"AUG",cat:"rifle",side:"CT",price:3300,reward:300,dmg:28,ap:.9,rpm:600,mag:30,reserve:90,reload:3.8,speed:220,auto:!0,spread:.004,move:.15,kick:.62,sway:.5,kickCap:10,scope:[1.8]}),ssg08:xe({name:"SSG 08",cat:"sniper",side:"both",price:1700,reward:300,dmg:88,ap:.85,rpm:48,mag:10,reserve:90,reload:3.7,speed:230,rangeMod:.99,spread:.035,scoped:.0012,move:.12,kick:3,sway:.2,kickCap:4,scope:[3.6,9]}),awp:xe({name:"AWP",cat:"sniper",side:"both",price:4750,reward:100,dmg:115,ap:.975,rpm:41,mag:5,reserve:30,reload:3.7,speed:200,rangeMod:.99,spread:.08,scoped:9e-4,move:.2,kick:4.5,sway:.2,kickCap:5,scope:[2.25,9]}),g3sg1:xe({name:"G3SG1",cat:"sniper",side:"T",price:5e3,reward:300,dmg:80,ap:.825,rpm:240,mag:20,reserve:90,reload:4.7,speed:215,rangeMod:.98,auto:!0,spread:.05,scoped:.0018,move:.2,kick:1.6,sway:.4,kickCap:6,scope:[2.25,9]}),scar20:xe({name:"SCAR-20",cat:"sniper",side:"CT",price:5e3,reward:300,dmg:80,ap:.825,rpm:240,mag:20,reserve:90,reload:3.1,speed:215,rangeMod:.98,auto:!0,spread:.05,scoped:.0018,move:.2,kick:1.6,sway:.4,kickCap:6,scope:[2.25,9]}),zeus:xe({name:"Zeus x27",cat:"equip",side:"both",price:200,reward:0,dmg:500,ap:1,rpm:30,mag:1,reserve:0,reload:0,speed:245,range:183,spread:.01,move:.02,kick:1}),vest:{name:"Chaleco",cat:"gear",side:"both",price:650},vesthelm:{name:"Chaleco + Casco",cat:"gear",side:"both",price:1e3},defuser:{name:"Kit de desactivaci\xF3n",cat:"gear",side:"CT",price:400},he:{name:"Granada HE",cat:"grenade",side:"both",price:300,reward:300},flash:{name:"Flashbang",cat:"grenade",side:"both",price:200,reward:300,max:2},smoke:{name:"Humo",cat:"grenade",side:"both",price:300,reward:300},molotov:{name:"Molotov",cat:"grenade",side:"T",price:400,reward:300},incendiary:{name:"Incendiaria",cat:"grenade",side:"CT",price:500,reward:300},decoy:{name:"Se\xF1uelo",cat:"grenade",side:"both",price:50,reward:300},c4:{name:"C4",cat:"c4",side:"T",price:0}};for(let[n,t]of Object.entries(ne))t.id=n;var Fa=[{name:"Equipo",items:{T:["vest","vesthelm","zeus"],CT:["vest","vesthelm","zeus","defuser"]}},{name:"Pistolas",items:{T:["glock","dualies","p250","tec9","deagle"],CT:["usp","dualies","p250","fiveseven","deagle"]}},{name:"Intermedias",items:{T:["mac10","ump","xm1014","nova","p90"],CT:["mp9","ump","xm1014","nova","p90"]}},{name:"Rifles",items:{T:["galil","ak47","ssg08","sg553","awp"],CT:["famas","m4a1s","m4a4","ssg08","awp"]}},{name:"Granadas",items:{T:["flash","smoke","he","molotov","decoy"],CT:["flash","smoke","he","incendiary","decoy"]}}],Cm={vest:["Protege el cuerpo","Reduce el da\xF1o de las balas"],vesthelm:["Chaleco y casco","Te salva de muchos tiros a la cabeza"],zeus:["Descarga el\xE9ctrica de un solo uso","Mata de cerca"],defuser:["Desactiv\xE1s la bomba en 5 segundos"],glock:["Pistola b\xE1sica de los T","Buena movi\xE9ndose"],usp:["Pistola b\xE1sica de los CT","Con silenciador, muy precisa"],p250:["Barata y fuerte","Atraviesa chalecos"],dualies:["Dos pistolas","Cargador grande"],tec9:["Autom\xE1tica liviana","Muy fuerte de cerca"],fiveseven:["Precisa y r\xE1pida","Buena contra chalecos"],deagle:["Un tiro a la cabeza alcanza","Mucho retroceso"],mac10:["Subfusil barato","Premio por baja $600"],mp9:["Subfusil de los CT","Premio por baja $600"],mp7:["Subfusil equilibrado","Buena precisi\xF3n"],nova:["Escopeta de bombeo","Letal de cerca"],xm1014:["Escopeta autom\xE1tica","Mucho da\xF1o en poco tiempo"],p90:["Cargador de 50","Ideal para correr"],ump:["Subfusil pesado","Premio por baja $600"],galil:["Rifle barato de los T"],famas:["Rifle barato de los CT"],ak47:["Un tiro a la cabeza mata","El rifle de los T"],m4a4:["Rifle preciso de los CT","Cargador de 30"],m4a1s:["Rifle con silenciador","Muy preciso, cargador de 20"],sg553:["Rifle con mira"],aug:["Rifle con mira"],ssg08:["Francotirador liviano","Se mueve r\xE1pido"],awp:["Mata de un tiro al cuerpo","Lento al moverse"],flash:["Ciega a los que la miran"],smoke:["Tapa la vista 18 segundos","Apaga el fuego"],he:["Explota y hace da\xF1o"],molotov:["Fuego en el piso por 7 segundos"],incendiary:["Fuego en el piso por 7 segundos"],decoy:["Hace ruido de disparos"]},Vs=n=>{let t=ne[n].cat;return t==="pistol"?2:t==="knife"?3:t==="grenade"?4:t==="c4"?5:t==="equip"?3:1},Sn={start:800,max:16e3,winElim:3250,winBombT:3500,winDefuse:3500,winTime:3250,loss:[1400,1900,2400,2900,3400],plantBonus:800,plantReward:300,defuseReward:300,teamKill:-300},Pb={head:4,chest:1,stomach:1.25,arm:1,leg:.75};function Df(n,t,e,i,s,r=4){let o=n*(e==="head"?r:Pb[e]),a=0,l=e!=="leg"&&(e!=="head"||s);if(i>0&&l){let c=o*t;a=(o-c)*.5,a>i&&(a=i,c=o-i*2),o=c}return{hp:Math.max(1,Math.round(o)),armor:Math.round(a)}}var Uf=.0254,He={g:800*.4*Uf,speed:750*.9*Uf,step:1/64,fuse:{he:1.6,flash:1.6},molAir:2,smokeLife:18,fireLife:7,decoyLife:15,smokeR:3.6,fireR:2.6,heR:350*Uf,heDmg:98};function Ff(n,t,e,i,s,r,o,a,l,c,h=1){let u=He.speed*(.3+.7*h),f=a+10*Math.PI/180*(1-Math.abs(a)/(Math.PI/2)),d=-Math.sin(o)*Math.cos(f),p=Math.sin(f),v=-Math.cos(o)*Math.cos(f);return{type:n,owner:t,team:e,x:i+d*.1,y:s+p*.1-.05,z:r+v*.1,vx:d*u+l*1.25,vy:p*u,vz:v*u+c*1.25,t:0,acc:0,rest:!1,state:"fly",life:0}}function kf(n,t,e,i){for(t.acc+=e;t.acc>=He.step;){t.acc-=He.step;let s=He.step;if(t.state==="fly"){if(t.t+=s,!t.rest){t.vy-=He.g*s;let o=Math.hypot(t.vx,t.vy,t.vz),a=o*s;if(a>1e-5){let l=Ii(n,t.x,t.y,t.z,t.vx/o,t.vy/o,t.vz/o,a+.04);if(l&&l.t<=a+.04){let c=Math.max(0,l.t-.04);t.x+=t.vx/o*c,t.y+=t.vy/o*c,t.z+=t.vz/o*c;let h=[l.nx,l.ny,l.nz];if((t.type==="molotov"||t.type==="incendiary")&&h[1]>.7){Mh(n,t,i);continue}let u=t.vx*h[0]+t.vy*h[1]+t.vz*h[2];t.vx-=2*u*h[0],t.vy-=2*u*h[1],t.vz-=2*u*h[2],t.vx*=.45,t.vy*=.45,t.vz*=.45,h[1]>.7&&(t.vx*=.75,t.vz*=.75,Math.abs(t.vy)<1.2&&(t.vy=0,Math.hypot(t.vx,t.vz)<.25&&(t.rest=!0))),o>2&&i.push({type:"bounce",g:t})}else t.x+=t.vx*s,t.y+=t.vy*s,t.z+=t.vz*s}if(!t.rest&&t.vy===0){let l=zs(n,t.x,t.z,t.y+.3);l>-1e8&&t.y-l<.06?(t.y=l+.03,t.vx*=Math.max(0,1-s*2.5),t.vz*=Math.max(0,1-s*2.5),Math.hypot(t.vx,t.vz)<.2&&(t.rest=!0)):t.vy=-.01}if(t.y<-40){t.state="done",i.push({type:"end",g:t});continue}}let r=He.fuse[t.type];r&&t.t>=r?Mh(n,t,i):(t.type==="molotov"||t.type==="incendiary")&&t.t>=He.molAir?(t.air=!0,Mh(n,t,i)):(t.type==="smoke"||t.type==="decoy")&&t.rest&&t.t>.9&&Mh(n,t,i)}else t.state==="active"&&(t.life-=s,t.life<=0&&(t.state="done",i.push({type:"end",g:t})))}}function Mh(n,t,e){if(t.state="active",t.vx=t.vy=t.vz=0,t.type==="smoke")t.life=He.smokeLife;else if(t.type==="decoy")t.life=He.decoyLife;else if(t.type==="molotov"||t.type==="incendiary")if(t.air)t.life=.01;else{t.life=He.fireLife;let i=zs(n,t.x,t.z,t.y+.5);i>-1e8&&(t.y=i)}else t.life=.01;e.push({type:"det",g:t})}function bh(n,t,e,i,s,r,o){for(let a of n){if(a.type!=="smoke"||a.state!=="active"||a.life<.6)continue;let l=He.smokeR*Math.min(1,(He.smokeLife-a.life)*1.5+.2),c=a.x,h=a.y+1.2,u=a.z,f=s-t,d=r-e,p=o-i,v=f*f+d*d+p*p,g=v>0?((c-t)*f+(h-e)*d+(u-i)*p)/v:0;g=Math.max(0,Math.min(1,g));let m=t+f*g-c,y=(e+d*g-h)*1.4,b=i+p*g-u;if(m*m+y*y+b*b<l*l)return!0}return!1}function Pm(n,t,e,i){for(let s of n)if(!(s.type!=="molotov"&&s.type!=="incendiary"||s.state!=="active"||s.air)&&Math.abs(e-s.y)<1.2&&Math.hypot(t-s.x,i-s.z)<He.fireR)return s;return null}var Ve={freeze:15,live:115,buy:20,post:6,bomb:40,plant:3.2,defuse:10,kit:5,over:12},Lm={comp:{name:"Competitivo",sub:"Bomba, econom\xEDa y tiempo extra"},casual:{name:"Casual",sub:"M\xE1s plata, chaleco gratis, rondas cortas"},dm:{name:"Deathmatch",sub:"Reaparec\xE9s al morir \xB7 10 min \xB7 armas gratis"},ar:{name:"Arms Race",sub:"Cada baja te da el arma siguiente \xB7 gan\xE1s con el cuchillo"},retake:{name:"Retakes",sub:"La bomba ya est\xE1 plantada: los CT recuperan el sitio"},practice:{name:"Pr\xE1ctica",sub:"Plata infinita, sin tiempo, impactos y trayectorias visibles"}},Zi=n=>n==="dm"||n==="ar",Mr=[["ak47","m4a4"],["galil","famas"],["sg553","aug"],["awp","awp"],["p90","p90"],["ump","ump"],["mac10","mp9"],["mp7","mp7"],["xm1014","xm1014"],["nova","nova"],["negev","negev"],["ssg08","ssg08"],["deagle","deagle"],["tec9","fiveseven"],["p250","p250"],["glock","usp"],["knife","knife"]],zf={rapida:{win:5,max:8,name:"R\xE1pida"},corta:{win:9,max:16,name:"Corta"},comp:{win:13,max:24,name:"Competitiva"}},Im=["Toto","Lalo","Pipo","Chino","Fede","Nacho","Rulo","Coco","Tincho","Beto","Pato","Quique"],br=(n,t)=>(n^t)===0?"T":"CT",Of=n=>n==="T"?"glock":"usp";function Bf(n){let t={},e=!0,i=0,s=[1,1],r=null,o=new Map,a=0,l=0,c=!1,h=()=>n.cfg.mode||"comp",u=new Map,f=[1,1],d=0,p={0:new Set,1:new Set},v=1;t.setup=E=>{n.players.clear();let F=n.cfg,G=[0,0],z=E.slice().sort((Z,J)=>Z.slot-J.slot);for(let Z of z)(Z.pref===0||Z.pref===1)&&G[Z.pref]++;for(let Z of z){let J=Z.pref;J!==0&&J!==1&&(J=G[0]<=G[1]?0:1,G[J]++);let it=g(Z.id,Z.name,!1,J);it.skT=0,it.skCT=0,it.fin=0,n.players.set(Z.id,it)}let N=F.bots?Math.max(G[0],G[1],F.size||5):0,V=0;for(let Z=0;Z<2;Z++)for(let J=G[Z];J<N;J++){let it="bot"+V++,ut=g(it,Im[V%Im.length]+" (bot)",!0,Z);ut.skT=0,ut.skCT=0,ut.fin=0,n.players.set(it,ut)}n.round=0,n.score=[0,0],n.half=0,n.ot=0,s=[1,1],c=!1,u.clear(),f=[h()==="comp"?3:1,h()==="comp"?3:1],d=0,p={0:new Set,1:new Set};for(let Z of n.players.values())Z.money=h()==="casual"?1e3:h()==="practice"||Zi(h())?16e3:Sn.start,Z.arl=0;for(let Z of n.players.values())Z.team=br(Z.grp,0);n.spawns={T:m("T"),CT:m("CT")}};function g(E,F,G,z){return{id:E,name:F,bot:G,grp:z,team:"T",x:0,y:0,z:0,yaw:0,pitch:0,vx:0,vz:0,duck:0,hp:100,ar:0,helm:!1,money:Sn.start,alive:!1,k:0,d:0,a:0,mvp:0,dmgR:0,dmgT:0,hsK:0,rounds:0,arl:0,inv:{p:null,s:null,g:[],c4:!1,kit:!1,zeus:!1,v:1,pa:null,sa:null},god:!1}}function m(E){let F=n.nav,G=oi(F,E==="T"?16:32),z=ht=>{let dt=Math.floor(ht/F.N),pt=ht%F.N,yt=pt%F.m,Gt=Math.floor(pt/F.m),Lt=F.H[dt][pt];for(let ie=-2;ie<=2;ie++)for(let le=-2;le<=2;le++){let de=yt+le,Q=Gt+ie;if(de<0||Q<0||de>=F.m||Q>=F.m)return!1;let Ze=F.H[dt][Q*F.m+de];if(isNaN(Ze)||Math.abs(Ze-Lt)>.35)return!1}return!0},N=G.filter(z);N.length<10&&(N=G);let V=0,Z=0,J=N.map(ht=>F.pos(ht));for(let ht of J)V+=ht[0],Z+=ht[2];V/=J.length,Z/=J.length,J.sort((ht,dt)=>Math.hypot(ht[0]-V,ht[2]-Z)-Math.hypot(dt[0]-V,dt[2]-Z));let it=[];for(let ht of[2,1.5,1.1]){for(let dt of J){if(it.length>=12)break;it.every(pt=>Math.hypot(pt[0]-dt[0],pt[2]-dt[2])>ht)&&it.push(dt)}if(it.length>=10)break}let ut=n.info.zones,Tt=n.W.cell,Dt=ht=>{let dt=ut[ht];return F.nearest((dt[0]+dt[2])/2*Tt,99,(dt[1]+dt[3])/2*Tt)},Wt=[Dt("A"),Dt("B")].filter(ht=>ht>=0),at=ht=>{let dt=F.nearest(ht[0],ht[1],ht[2]),pt=null;for(let Lt of Wt){let ie=Hs(F,dt,Lt);ie&&(!pt||ie.length<pt.length)&&(pt=ie)}if(!pt||pt.length<2)return Math.atan2(-(V-ht[0]),-(Z-ht[2]));let yt=0,Gt=pt[Math.min(pt.length-1,3)];for(let Lt=1;Lt<pt.length&&(yt+=Math.hypot(pt[Lt][0]-pt[Lt-1][0],pt[Lt][2]-pt[Lt-1][2]),!(yt>25));Lt++)sm(n.W,ht[0],ht[1]+1.6,ht[2],pt[Lt][0],pt[Lt][1]+1.2,pt[Lt][2])&&(Gt=pt[Lt]);return Math.atan2(-(Gt[0]-ht[0]),-(Gt[2]-ht[2]))};return{pts:it.map(ht=>[ht[0],ht[1],ht[2],at(ht)]),cx:V,cz:Z}}t.adopt=()=>{n.spawns={T:m("T"),CT:m("CT")}},t.buyZone=E=>{if(h()==="practice"||h()==="dm")return!0;let F=n.spawns[E.team];return Math.hypot(E.x-F.cx,E.z-F.cz)<22||gi(n.W,E.x,E.z)&(E.team==="T"?16:32)},t.liveTime=()=>y(),t.canBuyTime=()=>{let E=h();return E==="ar"||E==="retake"?!1:E==="practice"||E==="dm"?n.phase==="freeze"||n.phase==="live":n.phase==="freeze"||n.phase==="live"&&Ve.live-n.timeLeft<Ve.buy&&n.bomb.state!=="planted"};let y=()=>{let E=h();return E==="dm"?600:E==="ar"?900:E==="practice"?3600:E==="casual"?135:E==="retake"?Ve.bomb:Ve.live},b=()=>{let E=h();return E==="casual"?6:E==="retake"?4:Zi(E)?3:E==="practice"?2:Ve.freeze};t.startMatch=()=>{n.phase="freeze",M(!0)};function M(E){n.round++,n.phase="freeze",n.timeLeft=b(),d&&(n.timeLeft+=30,n.emit("ev",{t:"timeout",team:d}),d=0),n.drops.clear(),n.nades.length=0,o.clear(),r=null,u.clear(),p={0:new Set,1:new Set},n.bomb={state:"carried",carrier:null,x:0,y:0,z:0,t:0};let F={T:0,CT:0},G={},z=[...n.players.values()].sort(()=>Math.random()-.5);for(let V of z){V.team=br(V.grp,n.half),!V.alive||E?(V.inv={p:null,s:Of(V.team),g:[],c4:!1,kit:!1,zeus:!1,v:(V.inv.v||0)+1,pa:null,sa:null},!V.alive&&!E&&(V.ar=0,V.helm=!1),E&&(V.ar=0,V.helm=!1)):(V.inv.c4=!1,V.team==="T"&&(V.inv.kit=!1),V.inv.pa=V.inv.sa=null,V.inv.v++),V.hp=100,V.alive=!0,V.dmgR=0,V.dmgBy={},V.rounds++,h()==="casual"&&(V.ar=100,V.helm=!0,V.team==="CT"&&(V.inv.kit=!0)),h()==="practice"&&(V.money=Sn.max),h()==="ar"&&S(V);let Z=n.spawns[V.team].pts,J=F[V.team]++%Z.length;G[V.id]=Z[J]}let N=z.filter(V=>V.team==="T");if(h()==="retake")C(z,G);else if(!Zi(h())&&N.length){let V=N[Math.floor(Math.random()*N.length)];V.inv.c4=!0,n.bomb.carrier=V.id}e=!0,n.emit("rs",{pos:G,round:n.round}),n.emit("st",t.snapshot())}function R(E,F){if(n.phase!=="live"&&n.phase!=="freeze")return;n.phase="post",n.timeLeft=Ve.post;let G=[...n.players.values()].find(it=>it.team===E)?.grp??(E===br(0,n.half)?0:1);n.score[G]++;let z=F==="bomb"?Sn.winBombT:F==="defuse"?Sn.winDefuse:F==="time"?Sn.winTime:Sn.winElim,N=1-G;s[N]=Math.min(5,s[N]+1),s[G]=Math.max(0,s[G]-1);let V=Sn.loss[Math.max(0,s[N]-1)];for(let it of n.players.values())if(it.grp===G)A(it,z);else{if(F==="time"&&it.team==="T"&&it.alive)continue;A(it,V+(it.team==="T"&&n.bomb.state==="defused"?Sn.plantBonus:0))}let Z=null,J=-1;for(let it of n.players.values())if(it.grp===G){let ut=(it.rk||0)*10+it.dmgR/100+(it.id===r&&F==="bomb"?30:0)+(it.defused?30:0);ut>J&&(J=ut,Z=it)}Z&&Z.mvp++;for(let it of n.players.values())it.rk=0,it.defused=!1;e=!0,n.emit("ev",{t:"end",win:E,reason:F,score:n.score.slice(),mvp:Z&&Z.id,loss:V})}function T(){let E=zf[n.cfg.len];if(Zi(h())){x();return}let F=E.win+3*(n.ot||0),G=E.max+6*(n.ot||0);if(h()==="comp"&&n.round>=G&&n.score[0]===n.score[1]&&n.score[0]>=E.max/2+3*(n.ot||0)){n.ot=(n.ot||0)+1;for(let N of n.players.values())N.money=1e4,N.alive=!1,N.ar=0,N.helm=!1;s=[1,1],n.emit("ev",{t:"ot",n:n.ot}),M(!0);return}if(n.score[0]>=F||n.score[1]>=F||n.round>=G){x();return}if(n.ot&&(n.round-E.max)%3===0){n.half=1-n.half,n.emit("ev",{t:"half"});for(let N of n.players.values())N.alive=!1;M(!0);for(let N of n.players.values())N.money=Math.max(N.money,1e4);return}if(n.round===E.max/2){n.half=1,s=[1,1];for(let N of n.players.values())N.money=h()==="casual"?1e3:h()==="practice"?Sn.max:Sn.start,N.alive=!1,N.ar=0,N.helm=!1;n.emit("ev",{t:"half"}),M(!0);return}M(!1)}function x(){{n.phase="over",n.timeLeft=Ve.over,l=Ve.over;let E;if(Zi(h())){let G=[0,0];for(let z of n.players.values())G[z.grp]+=z.k;n.score=G,E=G[0]>G[1]?0:G[1]>G[0]?1:-1,h()==="ar"&&n.arWinner&&(E=n.players.get(n.arWinner)?.grp??E)}else E=n.score[0]>n.score[1]?0:n.score[1]>n.score[0]?1:-1;let F=[...n.players.values()].map(G=>({id:G.id,n:G.name,g:G.grp,t:G.team,k:G.k,d:G.d,a:G.a,mvp:G.mvp,adr:Math.round(G.dmgT/Math.max(1,G.rounds)),hs:G.k?Math.round(G.hsK/G.k*100):0}));n.emit("ev",{t:"over",wg:E,score:n.score.slice(),stats:F,mode:h()}),e=!0,setTimeout(()=>{if(c)return;c=!0;let G=[...n.players.values()].filter(N=>!N.bot&&(E<0||N.grp===E)).map(N=>N.id),z=E<0?"Empate "+n.score.join(" \u2013 "):"Ganan "+_(E)+" "+Math.max(...n.score)+" \u2013 "+Math.min(...n.score);n.end(G,z)},Ve.over*1e3)}}let _=E=>{let F=[...n.players.values()].filter(G=>G.grp===E&&!G.bot).map(G=>G.name);return F.length?F.slice(0,3).join(", "):br(E,n.half)==="T"?"los Terroristas":"los Contraterroristas"};function A(E,F){E.money=Math.max(0,Math.min(h()==="casual"?1e4:Sn.max,E.money+F)),h()==="practice"&&(E.money=Sn.max)}function S(E){let F=Mr[Math.min(Mr.length-1,E.arl||0)],G=F[E.team==="T"?0:1];E.inv.p=null,E.inv.s=null,E.inv.g=[],E.inv.zeus=!1,G!=="knife"&&(Vs(G)===1?E.inv.p=G:E.inv.s=G),E.inv.pa=E.inv.sa=null,E.inv.v++,E.ar=100,E.helm=!0}function C(E,F){let G=Math.random()<.5?"A":"B",z=oi(n.nav,G==="A"?4:8);if(!z.length)return;let N=n.nav.pos(z[Math.floor(z.length/2+(Math.random()-.5)*z.length*.4)]);Object.assign(n.bomb,{state:"planted",carrier:null,x:N[0],y:N[1],z:N[2],t:Ve.bomb,site:G});let V=[["ak47","deagle"],["galil","p250"],["awp","glock"],["mac10","tec9"],["ak47","glock"]],Z=[["m4a4","usp"],["famas","fiveseven"],["awp","usp"],["mp9","p250"],["m4a1s","deagle"]];for(let J of E){let it=(J.team==="T"?V:Z)[Math.floor(Math.random()*5)];if(J.inv.p=it[0],J.inv.s=it[1],J.inv.g=Math.random()<.6?[["smoke","flash","he",J.team==="T"?"molotov":"incendiary"][Math.floor(Math.random()*4)]]:[],J.inv.kit=J.team==="CT"&&Math.random()<.5,J.ar=100,J.helm=!0,J.inv.v++,J.team==="T"){let ut=n.nav.pos(z[Math.floor(Math.random()*z.length)]);F[J.id]=[ut[0],ut[1],ut[2],Math.random()*6.28]}}n.emit("ev",{t:"plant",p:null,site:G,retake:!0})}function I(E){let F=n.nav,G=[...n.players.values()].filter(Z=>Z.alive&&Z.team!==E.team),z=null,N=-1,V=[...n.spawns.T.pts,...n.spawns.CT.pts];for(let Z=0;Z<30;Z++){let J=Math.floor(Math.random()*F.L*F.N);if(F.main[J]){let it=F.pos(J);V.push([it[0],it[1],it[2],Math.random()*6.28])}}for(let Z of V){let J=99;for(let it of G)J=Math.min(J,Math.hypot(it.x-Z[0],it.z-Z[2]));J>12&&J<60&&J>N-4+Math.random()*8&&(N=J,z=Z)}z=z||V[Math.floor(Math.random()*V.length)],E.hp=100,E.alive=!0,E.dmgBy={},E.ar=100,E.helm=!0,h()==="ar"?S(E):E.inv={...E.inv,p:E.inv.p||(E.team==="T"?"ak47":"m4a4"),s:E.inv.s||Of(E.team),g:[],v:(E.inv.v||0)+1,pa:null,sa:null},E.x=z[0],E.y=z[1],E.z=z[2],e=!0,n.emit("ev",{t:"resp",id:E.id,pos:z})}function w(){if(n.phase!=="live"||Zi(h())||h()==="practice")return;let E=0,F=0,G=0,z=0;for(let N of n.players.values())N.team==="T"?(G++,N.alive&&E++):(z++,N.alive&&F++);if(z&&F===0)return R("T","elim");if(G&&E===0&&n.bomb.state!=="planted")return R("CT","elim")}t.tick=E=>{if(n.phase!=="lobby"){if(n.timeLeft-=E,n.phase==="freeze"&&n.timeLeft<=0)n.phase="live",n.timeLeft=n.bomb.state==="planted"?n.bomb.t:y(),e=!0,n.emit("ev",{t:"go"});else if(n.phase==="live"){let F=n.bomb;if(F.state==="planted"){F.t-=E,n.timeLeft=F.t;for(let[G,z]of o){let N=n.players.get(G);if(!N||!N.alive||Math.hypot(N.x-F.x,N.z-F.z)>2.2){o.delete(G);continue}N.bot&&n.time-z.t0>=z.dur&&q(N)}F.t<=0&&F.state==="planted"&&B()}else n.timeLeft<=0&&(Zi(h())?(n.phase="post",n.timeLeft=.1):R("CT","time"));for(let[G,z]of u){let N=n.players.get(G),V=z-E;if(!N){u.delete(G);continue}V<=0?(u.delete(G),I(N)):u.set(G,V)}if(a-=E,a<=0){a=.25;for(let G of n.players.values()){if(!G.alive)continue;let z=Pm(n.nades,G.x,G.y,G.z);z&&t.damage(G.id,z.owner,10,"fire",z.type,{raw:!0})}}}else n.phase==="post"&&n.timeLeft<=0&&T();i-=E,(e&&i<=0||i<-2)&&(i=.1,e=!1,n.emit("st",t.snapshot()))}},t.markDirty=()=>{e=!0},t.snapshot=()=>({ph:n.phase,tl:+n.timeLeft.toFixed(2),r:n.round,sc:n.score,hf:n.half,ot:n.ot||0,md:h(),b:{s:n.bomb.state,c:n.bomb.carrier,x:+n.bomb.x.toFixed(2),y:+n.bomb.y.toFixed(2),z:+n.bomb.z.toFixed(2),t:+n.bomb.t.toFixed(2),site:n.bomb.site},dr:[...n.drops.values()].map(E=>[E.id,E.w,+E.x.toFixed(2),+E.y.toFixed(2),+E.z.toFixed(2),E.ammo]),p:[...n.players.values()].map(E=>[E.id,E.name,E.bot?1:0,E.grp,E.team,E.hp,E.ar,E.helm?1:0,E.money,E.alive?1:0,E.k,E.d,E.a,E.mvp,E.inv,E.god?1:0,E.skT|0,E.skCT|0,E.fin||0,E.arl||0,E.hsK||0,E.dmgT||0,E.rounds||0])}),t.damage=(E,F,G,z,N,V={})=>{let Z=n.players.get(E),J=n.players.get(F);if(!Z||!Z.alive||n.phase==="over"||J&&J!==Z&&J.team===Z.team||Z.god)return;let it,ut=0;if(V.raw)it=Math.round(G);else{let Tt=ne[N],Dt=Df(G,V.ap??(Tt?.ap||.5),z,Z.ar,Z.helm);it=Dt.hp,ut=Dt.armor}it=Math.min(it,Z.hp),Z.hp-=it,Z.ar=Math.max(0,Z.ar-ut),J&&J!==Z&&(J.dmgR+=it,J.dmgT=(J.dmgT||0)+it,Z.dmgBy[F]=(Z.dmgBy[F]||0)+it),e=!0,n.emit("ev",{t:"hurt",v:E,a:F,n:it,hs:z==="head",w:N,helm:Z.helm&&z==="head"}),Z.hp<=0&&P(Z,J,N,z==="head",V.wb,V)};function P(E,F,G,z,N,V={}){if(E.hp=0,E.alive=!1,E.d++,F&&F!==E)if(F.team!==E.team){F.k++,F.rk=(F.rk||0)+1,z&&(F.hsK=(F.hsK||0)+1);let J=ne[G];A(F,J?.reward??300),h()==="ar"&&(G==="knife"&&(F.arl||0)>=Mr.length-1?(n.arWinner=F.id,n.timeLeft=0):G==="knife"?E.arl=Math.max(0,(E.arl||0)-1):(F.arl=Math.min(Mr.length-1,(F.arl||0)+1),F.alive&&S(F),n.emit("ev",{t:"arlvl",p:F.id,l:F.arl})))}else F.k--,A(F,Sn.teamKill);for(let[J,it]of Object.entries(E.dmgBy||{}))if(J!==F?.id&&it>=41){let ut=n.players.get(J);ut&&ut.team!==E.team&&ut.a++}let Z=E.inv.p||(E.inv.s&&E.inv.s!==Of(E.team)?E.inv.s:null)||E.inv.s;Z&&!Zi(h())&&W(Z,E.x,E.y,E.z,null,E.yaw),E.inv.c4&&(E.inv.c4=!1,O(E)),E.inv.kit&&W("defuser",E.x+.3,E.y,E.z,null,0),h()==="dm"?E.inv={...E.inv,g:[],kit:!1,zeus:!1,c4:!1,v:E.inv.v+1}:E.inv={...E.inv,p:null,s:null,g:[],kit:!1,zeus:!1,c4:!1,v:E.inv.v+1},o.delete(E.id),e=!0,n.emit("ev",{t:"kill",k:F?F.id:null,v:E.id,w:G,hs:!!z,wb:!!N,sm:!!V.sm,bl:!!V.bl,ns:!!V.ns}),(Zi(h())||h()==="practice")&&u.set(E.id,h()==="practice"?1.5:2),w()}function O(E){n.bomb.state="dropped",n.bomb.carrier=null,n.bomb.x=E.x,n.bomb.y=E.y,n.bomb.z=E.z,n.emit("ev",{t:"bombdrop"})}function W(E,F,G,z,N,V=0){let Z=v++,J=F-Math.sin(V)*.6,it=z-Math.cos(V)*.6,ut=!n.solidAt(J,G+.3,it);n.drops.set(Z,{id:Z,w:E,x:ut?J:F,y:n.floorAt(ut?J:F,ut?it:z,G+.6)+.05,z:ut?it:z,ammo:N||null}),e=!0}t.handle=(E,F,G,z={})=>{let N=n.players.get(G);if(N)switch(E){case"hit":{if(!N.alive&&n.phase!=="post")return;let V=ne[F.w];if(!V)return;let Z=V.cat==="knife"?180:V.dmg*V.pellets*1.01;t.damage(F.t,G,Math.min(+F.d||0,Z),F.part,F.w,{wb:F.wb,sm:F.sm,bl:F.bl,ns:F.ns});break}case"buy":U(N,F.i);break;case"drop":{if(!N.alive)return;let V=F.s;if(V==="zeus"){N.inv.zeus=!1,N.inv.v++,e=!0;return}if(V==="c4"){if(!N.inv.c4)return;N.inv.c4=!1,N.inv.v++,O({x:F.x,y:F.y,z:F.z}),n.bomb.x-=Math.sin(F.yaw)*.6,n.bomb.z-=Math.cos(F.yaw)*.6,n.bomb.y=n.floorAt(n.bomb.x,n.bomb.z,F.y+.6),e=!0;return}let Z=V==="p"?N.inv.p:V==="s"?N.inv.s:null;if(!Z)return;N.inv[V]=null,N.inv.v++,W(Z,F.x,F.y,F.z,F.ammo,F.yaw);break}case"take":{if(!N.alive)return;if(F.id==="c4"){if(N.team!=="T"||n.bomb.state!=="dropped"||Math.hypot(N.x-n.bomb.x,N.z-n.bomb.z)>1.8)return;N.inv.c4=!0,N.inv.v++,n.bomb.state="carried",n.bomb.carrier=N.id,e=!0,n.emit("ev",{t:"bombpick",p:N.id});return}let V=n.drops.get(F.id);if(!V||Math.hypot(N.x-V.x,N.z-V.z)>2.2)return;if(V.w==="defuser"){if(N.team!=="CT"||N.inv.kit)return;N.inv.kit=!0,N.inv.v++,n.drops.delete(V.id),e=!0;return}let Z=Vs(V.w)===1?"p":"s";if(N.inv[Z]){if(!F.swap)return;W(N.inv[Z],N.x,N.y,N.z,F.ammo,N.yaw)}N.inv[Z]=V.w,N.inv[Z+"a"]=V.ammo,N.inv.v++,n.drops.delete(V.id),e=!0;break}case"nade":{let V=N.inv.g.indexOf(F.type);if(V<0)return;N.inv.g.splice(V,1),N.inv.v++,e=!0;break}case"plant":{let V=gi(n.W,F.x,F.z)&12;if(!N.alive||!N.inv.c4||n.phase!=="live"||!V||n.bomb.state==="planted")return;N.inv.c4=!1,N.inv.v++,Object.assign(n.bomb,{state:"planted",carrier:null,x:F.x,y:F.y,z:F.z,t:Ve.bomb,site:V&4?"A":"B"}),r=N.id,A(N,Sn.plantReward),e=!0,n.emit("ev",{t:"plant",p:N.id,site:n.bomb.site}),w();break}case"defst":{if(!N.alive||N.team!=="CT"||n.bomb.state!=="planted"||Math.hypot(N.x-n.bomb.x,N.z-n.bomb.z)>2.2)return;o.set(N.id,{t0:n.time,dur:N.inv.kit?Ve.kit:Ve.defuse}),n.emit("ev",{t:"defst",p:N.id,kit:N.inv.kit});break}case"defx":o.delete(G);break;case"defok":{let V=o.get(G);if(!V||!N.alive||n.bomb.state!=="planted"||n.time-V.t0<V.dur-.5)return;q(N);break}case"adm":z.admin&&H(N,F);break;case"timeout":{let V=N.grp;if(N.bot||!f[V]||d||Zi(h())){n.emitTo(N.id,"ev",{t:"deny",why:f[V]?"Ya hay un timeout pedido":"No te quedan timeouts"});return}f[V]--,d=N.team,n.emit("ev",{t:"timeoutReq",team:N.team,n:N.name,left:f[V]});break}case"vote":{let V=N.grp;p[V].add(N.id);let Z=[...n.players.values()].filter(J=>J.grp===V&&!J.bot);n.emit("ev",{t:"vote",team:N.team,n:p[V].size,of:Z.length,who:N.name}),p[V].size>=Z.length&&n.phase!=="over"&&(n.score[1-V]=Math.max(n.score[1-V],n.score[V]+1),n.emit("ev",{t:"surrender",team:N.team}),x());break}case"radio":n.emit("ev",{t:"radio",p:N.id,m:String(F.m||"").slice(0,60),x:N.x,z:N.z});break;case"ping":n.emit("ev",{t:"ping",p:N.id,team:N.team,x:+F.x,y:+F.y,z:+F.z});break;case"fall":N.alive&&t.damage(G,G,Math.min(999,+F.d||0),"chest","world",{raw:!0});break}},t.botDefuse=E=>{o.has(E.id)||t.handle("defst",{},E.id)},t.isDefusing=E=>o.has(E);function q(E){o.clear(),n.bomb.state="defused",E.defused=!0,A(E,Sn.defuseReward),n.emit("ev",{t:"defused",p:E.id}),R("CT","defuse")}function B(){let E=n.bomb;E.state="exploded",n.emit("ev",{t:"boom",x:E.x,y:E.y,z:E.z});let F=1750*.0254/3;for(let G of n.players.values()){if(!G.alive)continue;let z=Math.hypot(G.x-E.x,G.y-E.y,G.z-E.z),N=500*Math.exp(-(z*z)/(2*F*F));if(N>1){let V=Df(N,.5,"chest",G.ar,G.helm);G.hp-=Math.min(G.hp,V.hp),G.ar=Math.max(0,G.ar-V.armor),G.hp<=0&&(G.alive=!1,G.d++,n.emit("ev",{t:"kill",k:null,v:G.id,w:"c4"}))}}e=!0,R("T","bomb")}t.heBlast=(E,F)=>{for(let G of n.players.values()){if(!G.alive)continue;let z=Math.hypot(G.x-E.x,G.y+1-E.y,G.z-E.z);if(z>He.heR||!F(E,G))continue;let N=He.heDmg*(1-z/He.heR);N<1||t.damage(G.id,E.owner,N,"chest","he",{ap:.5})}};function U(E,F){let G=ne[F],z=Z=>n.emitTo(E.id,"ev",{t:"deny",why:Z});if(!G||!E.alive)return;if(!t.canBuyTime())return z("Se termin\xF3 el tiempo de compra");if(!t.buyZone(E))return z("Ten\xE9s que estar en tu zona de compra");if(G.side!=="both"&&G.side!==E.team)return z("No disponible para tu equipo");if(!Fa.some(Z=>Z.items[E.team].includes(F)))return z("No est\xE1 en el loadout de tu equipo");let N=G.price,V=E.inv;if(F==="vest"){if(E.ar>=100)return z("Ya ten\xE9s chaleco")}else if(F==="vesthelm"){if(E.ar>=100&&E.helm)return z("Ya ten\xE9s chaleco y casco");E.ar>=100&&(N=350)}else if(F==="defuser"){if(V.kit)return z("Ya ten\xE9s el kit")}else if(F==="zeus"){if(V.zeus)return z("Ya ten\xE9s la Zeus")}else if(G.cat==="grenade"){let Z=V.g.length,J=V.g.filter(it=>it===F||(it==="molotov"||it==="incendiary")&&(F==="molotov"||F==="incendiary")).length;if(Z>=4)return z("Llev\xE1s el m\xE1ximo de granadas");if(J>=(G.max||1))return z("No pod\xE9s llevar m\xE1s de esa granada")}else{let Z=Vs(F)===1?"p":"s";if(V[Z]===F)return z("Ya ten\xE9s esa arma")}if(E.money<N)return z("No te alcanza la plata");if(E.money-=N,F==="vest")E.ar=100;else if(F==="vesthelm")E.ar=100,E.helm=!0;else if(F==="defuser")V.kit=!0;else if(F==="zeus")V.zeus=!0;else if(G.cat==="grenade")V.g.push(F);else{let Z=Vs(F)===1?"p":"s";V[Z]&&W(V[Z],E.x,E.y,E.z,null,E.yaw+Math.PI),V[Z]=F,V[Z+"a"]=null}V.v++,e=!0,n.emitTo(E.id,"ev",{t:"bought",i:F})}t.buy=U;function H(E,F){if(F.a==="god")E.god=!!F.v,e=!0;else if(F.a==="money")E.money=Sn.max,e=!0;else if(F.a==="win")(n.phase==="live"||n.phase==="freeze")&&(n.phase="live",R(E.team,"elim"));else if(F.a==="kill")for(let G of n.players.values())G.alive&&G.team!==E.team&&P(G,E,"knife",!0,!1);else F.a==="heal"&&(E.hp=100,E.ar=100,E.helm=!0,e=!0)}return t}var Hf=.0254,Nm=Math.PI/180,Ib={pistol:.12,smg:.16,rifle:.36,sniper:.6,heavy:.3,equip:0,knife:0},Lb=n=>n.id==="awp"?.85:n.id==="deagle"||n.id==="r8"?.3:n.id==="ak47"?.42:n.cat==="heavy"&&n.pellets>1?0:Ib[n.cat]??0;function ka(n,t){let e=n.scope&&n.cat==="sniper"&&t.scoped?n.scoped:n.spread,i=n.speed*Hf*(t.scoped&&n.cat==="sniper"?.5:1),s=Math.max(0,Math.min(1,(t.speed-i*.34)/(i*.66)));return e+=n.move*s,t.onGround||(e+=n.cat==="sniper"?.25:.12),t.duck>.5&&t.onGround&&(e*=.75),n.auto&&n.pellets===1&&(e+=Math.min(.022,t.shots*.0016)),n.cat==="pistol"&&!n.auto&&(e+=Math.min(.03,t.shots*.006)),e}var Ni={ak47:[[.6,0],[1.1,.05],[1.3,.1],[1.35,-.05],[1.3,.15],[1.15,.2],[.95,.1],[.75,-.3],[.55,-.7],[.4,-.9],[.3,-.8],[.25,-.5],[.2,.2],[.18,.8],[.15,1],[.15,.9],[.12,.5],[.12,-.3],[.1,-.8],[.1,-.9],[.1,-.4],[.1,.4],[.1,.8],[.1,.6],[.1,-.2],[.1,-.6],[.1,-.5],[.1,.2],[.1,.5],[.1,.3]],m4a4:[[.5,0],[.9,.05],[1.05,-.05],[1.1,.1],[1,.15],[.85,-.1],[.7,-.35],[.5,-.55],[.38,-.5],[.3,-.2],[.25,.3],[.2,.55],[.18,.6],[.15,.35],[.12,-.1],[.12,-.45],[.1,-.5],[.1,-.2],[.1,.25],[.1,.45],[.1,.3],[.1,-.1],[.1,-.35],[.1,-.3],[.1,.05],[.1,.3],[.1,.25],[.1,-.05],[.1,-.25],[.1,-.1]]};Ni.m4a1s=Ni.m4a4.map(([n,t])=>[n*.85,t*.7]);Ni.galil=Ni.ak47.map(([n,t])=>[n*.8,t*.85]);Ni.famas=Ni.m4a4.map(([n,t])=>[n*.9,t*.9]);Ni.sg553=Ni.ak47.map(([n,t])=>[n*.85,-t*.8]);Ni.aug=Ni.m4a4.map(([n,t])=>[n*.85,-t*.8]);var Dm=(n,t)=>{let e=0;for(let i of n)e=e*31+i.charCodeAt(0)|0;return e=Math.imul(e^t*2654435761,1597334677),(e>>>0)/4294967296-.5};function Sh(n,t,e){if(n.pellets>1||n.cat==="sniper")return[n.kick,(e()-.5)*n.sway];let i=Ni[n.id];if(i){let[o,a]=i[Math.min(t,i.length-1)],l=n.kick/.7;return[o*l,a*n.sway*.9+Dm(n.id,t)*n.sway*.12]}let s=t===0?n.kick*.6:t<9?n.kick:n.kick*.25,r=Dm(n.id,t)*n.sway*.45;return n.auto&&n.cat!=="pistol"&&(t>=7&&t<14?r+=-n.sway*.9:t>=14&&t<22?r+=n.sway*1:t>=22&&(r+=Math.sin(t*.9)*n.sway*.7)),[s,r]}function vo(n,t,e,i,s,r){let o=r()*Math.PI*2,a=s*(r()*.6+r()*.4),l=t+e*Nm+Math.sin(o)*a,c=n-i*Nm+Math.cos(o)*a;return[-Math.sin(c)*Math.cos(l),Math.sin(l),-Math.cos(c)*Math.cos(l)]}function Th(n,t,e,i,s,r,o,a,l,c,h){let u=Math.min(c.range*Hf,300),f=c.dmg,d=Lb(c),p=!1,v=i,g=s,m=r,y=0,b=[];for(let M=0;M<3;M++){let R=u-y;if(R<=0)break;let T=Ii(n,v,g,m,o,a,l,R),x=T?T.t:R,_=null;for(let I of h){if(!I.alive||I.id===e||Math.abs(I.x-v)>x+2||Math.abs(I.z-m)>x+2)continue;let w=ym(I,v,g,m,o,a,l,x);w&&(!_||w.t<_.t)&&(_={...w,id:I.id})}if(_){let I=y+_.t,w=f*Math.pow(c.rangeMod,I/Hf/500),P=[v+o*_.t,g+a*_.t,m+l*_.t];return{end:P,hit:{id:_.id,part:_.part,dmg:w,pos:P},impacts:b,wb:p}}if(!T)return{end:[v+o*R,g+a*R,m+l*R],hit:null,impacts:b,wb:p};let A=[v+o*x,g+a*x,m+l*x];if(b.push([A[0],A[1],A[2],T.nx,T.ny,T.nz]),d<=0)return{end:A,hit:null,impacts:b,wb:p};let S=0,C=.03;for(;S<d&&ph(n,A[0]+o*(S+C),A[1]+a*(S+C),A[2]+l*(S+C));)S+=C;if(S>=d)return{end:A,hit:null,impacts:b,wb:p};S+=C,f*=Math.max(.15,1-S/d)*.75,d-=S,p=!0,y+=x+S,v=A[0]+o*S,g=A[1]+a*S,m=A[2]+l*S,b.push([v,g,m,-o,-a,-l])}return{end:[v,g,m],hit:null,impacts:b,wb:p}}function Oa(n,t,e,i){let s=e[0],r=e[1],o=e[2];for(let a of[1.55,1.1]){let l=i[0],c=i[1]+a*(i[3]||1),h=i[2],u=l-s,f=c-r,d=h-o,p=Math.hypot(u,f,d),v=Ii(n,s,r,o,u/p,f/p,d/p,p);if(!(v&&v.t<p-.1)&&!bh(t,s,r,o,l,c,h))return!0}return!1}var Um=.0254,wh=Math.PI/180,Ah={facil:{react:.75,turn:150,err:5.5,hs:.04,ctrl:.2,track:1.6,settle:1.1,name:"F\xE1cil"},normal:{react:.52,turn:220,err:4,hs:.1,ctrl:.42,track:1.1,settle:1.5,name:"Normal"},dificil:{react:.36,turn:320,err:2.8,hs:.2,ctrl:.62,track:.7,settle:2,name:"Dif\xEDcil"},experto:{react:.26,turn:450,err:1.9,hs:.32,ctrl:.8,track:.45,settle:2.6,name:"Experto"}},ve=Math.random,Eh=(n,t)=>{let e=n-t;for(;e>Math.PI;)e-=Math.PI*2;for(;e<-Math.PI;)e+=Math.PI*2;return e};function Vf(n,t){let e={},i={site:"A"},s=0,r={A:oi(n.nav,4),B:oi(n.nav,8)};e.refreshNav=()=>{r.A=oi(n.nav,4),r.B=oi(n.nav,8)};let o=new Map,a={T:{},CT:{}},l=x=>a[x.team];function c(x,_){if(!x||x.length<2)return null;let A=0;for(let S=x.length-1;S>0;S--)if(A+=Math.hypot(x[S][0]-x[S-1][0],x[S][2]-x[S-1][2]),A>=_)return x[S-1];return x[0]}function h(x,_){if(!x||x.length<2)return null;let A=0;for(let S=1;S<x.length;S++)if(A+=Math.hypot(x[S][0]-x[S-1][0],x[S][2]-x[S-1][2]),A>=_)return x[S];return x[x.length-1]}let u=x=>{let _=n.nav,A=0,S=0,C=0;for(let w of x){let P=_.pos(w);A+=P[0],S+=P[1],C+=P[2]}let I=Math.max(1,x.length);return[A/I,S/I,C/I]};e.brain=x=>{let _=o.get(x.id);return _||(_={path:null,pi:0,goal:null,repath:0,tgt:null,react:0,err:[0,0],fireT:0,burst:0,shots:0,pp:0,py:0,strafe:1,strafeT:0,stuck:0,last:[0,0],buyT:0,bought:!1,hold:null,plantT:0,lastKnown:null,lkT:0,blind:0,mag:{},reload:0,look:null,wantScope:!1,jumpT:0},o.set(x.id,_)),_},e.reset=()=>o.clear(),e.roundStart=()=>{e._nav!==n.nav&&(e._nav=n.nav,e.refreshNav()),i.site=n.wingSite||(ve()<.5?"A":"B"),a.T={},a.CT={};let x=n.nav,_={A:u(r.A),B:u(r.B)},A=n.spawns.T,S=n.spawns.CT;for(let I of["A","B"]){if(!r[I].length)continue;let w=Hs(x,x.nearest(A.cx,A.pts[0]?A.pts[0][1]:_[I][1],A.cz),x.nearest(_[I][0],_[I][1],_[I][2]));i["stage"+I]=c(w,16+ve()*6);let P=w?w.slice().reverse():null;i["entry"+I]=h(P,14);let O=Hs(x,x.nearest(_[I][0],_[I][1],_[I][2]),x.nearest(S.cx,S.pts[0]?S.pts[0][1]:_[I][1],S.cz));i["ctEntry"+I]=h(O,14)}i.go=!1,i.goT=18+ve()*22,i.siteC=_;let C=0;for(let I of n.players.values()){if(!I.bot)continue;let w=e.brain(I);Object.assign(w,{path:null,goal:null,goalKind:null,rotated:!1,tgt:null,hold:null,plantT:0,bought:!1,buyT:.6+ve()*2.2,lastKnown:null,blind:0,reload:0,shots:0,pp:0,py:0,mag:{},look:null}),w.site=I.team==="CT"?C++%2===0?"A":"B":i.site,I.team==="CT"&&ve()<.25&&(w.site=w.site==="A"?"B":"A"),n.wingSite&&(w.site=n.wingSite)}},e.place=(x,_)=>{x.pl=Na(_[0],_[1],_[2],_[3]),x.pl.pitch=0},e.heard=(x,_,A,S,C)=>{for(let I of n.players.values()){if(!I.bot||!I.alive||I.team===S||!I.pl)continue;if(Math.hypot(I.pl.x-x,I.pl.z-A)<(C?40:14)){let P=e.brain(I);P.tgt||(P.lastKnown=[x,_,A],P.lkT=4)}}},e.flash=(x,_)=>{let A=e.brain(x);A.blind=Math.max(A.blind,_)};let f=x=>{let _=0;for(let A of n.players.values())A.team===x&&A.alive&&_++;return _};function d(x){let _=e.brain(x);return!!(_.lastKnown&&_.lkT>3)}function p(x){let _=x.inv;return _.p||_.s||"knife"}function v(x){let _=()=>x.money,A=x.team==="T",S=[];_()>=5750&&ve()<.18?S.push("awp"):_()>=3700?S.push(A?"ak47":x.id.charCodeAt(x.id.length-1)%2?"m4a1s":"m4a4"):_()>=2900?S.push(A?"galil":"famas"):_()>=1850&&n.round>1&&S.push(A?"mac10":"mp9");for(let C of S)t.buy(x,C);_()>=1e3?t.buy(x,"vesthelm"):_()>=650&&(n.round===1||n.round===g()+1||ve()<.5)&&t.buy(x,"vest"),!A&&_()>=400&&ve()<.6&&t.buy(x,"defuser"),n.round===1&&_()>=500&&!x.inv.p&&ve()<.3&&t.buy(x,A?"tec9":"fiveseven")}let g=()=>({rapida:4,corta:8,comp:12})[n.cfg.len];function m(x,_,A,S,C){let I=n.nav,w=x.pl,P=I.nearest(w.x,w.y,w.z),O=I.nearest(A,S,C);_.path=Hs(I,P,O),_.pi=1,_.goal=[A,S,C],_.repath=6+ve()*2,_.path||(_.repath=1.5+ve())}let y=x=>n.nav.pos(x[Math.floor(ve()*x.length)]);e.tick=x=>{let _=Ah[n.cfg.diff]||Ah.normal;s-=x;let A=s<=0;A&&(s=.1);let S=n.phase==="live",C=n.phase==="freeze";for(let I of n.players.values()){if(!I.bot||!I.pl)continue;let w=e.brain(I),P=I.pl;if(!I.alive)continue;let O=p(I),W=ne[O];if(w.mag[O]===void 0&&(w.mag[O]=W.mag||0),w.blind=Math.max(0,w.blind-x),w.fireT-=x,w.lkT-=x,w.repath-=x,w.jumpT-=x,w.reload>0&&(w.reload-=x,w.reload<=0&&(w.mag[O]=W.mag)),C){w.buyT-=x,w.buyT<=0&&!w.bought&&(w.bought=!0,v(I)),M(I,w,0,0,!1,x,W);continue}if(A&&w.blind<=0){let G=[P.x,P.y+bn(P),P.z],z=null,N=1e9;for(let V of n.players.values()){if(!V.alive||V.team===I.team)continue;let Z=V.x-P.x,J=V.z-P.z,it=Math.hypot(Z,J);if(it>90)continue;let ut=Math.abs(Eh(Math.atan2(-Z,-J),P.yaw)),Tt=w.tgt===V.id;if(ut>(Tt?2.6:1.45)&&it>2.5||!Oa(n.W,n.nades,G,[V.x,V.y,V.z,V.h/oe.hStand]))continue;let Dt=it*(Tt?.6:1);Dt<N&&(N=Dt,z=V)}if(z){if(w.tgt!==z.id){let V=z.x-P.x,Z=z.z-P.z,J=Math.abs(Eh(Math.atan2(-V,-Z),P.yaw));w.tgt=z.id,w.react=_.react*(.8+ve()*.6)*(1+J*.5)+Math.min(.25,N/160);let it=_.err*wh*(1+J*.6);w.err=[(ve()<.5?-1:1)*it*(.6+ve()*.8),(ve()-.35)*it*.8],w.head=ve()<_.hs;let ut=gi(n.W,z.x,z.z);ut&4?l(I).seen={site:"A",t:8}:ut&8&&(l(I).seen={site:"B",t:8})}w.lastKnown=[z.x,z.y,z.z],w.lkT=5}else w.tgt&&(w.tgt=null)}w.blind>0&&(w.tgt=null);let q=w.tgt?n.players.get(w.tgt):null,B=0,U=0,H=!1,E=!1;if(q&&q.alive){let G=P.x,z=P.y+bn(P),N=P.z,V=q.y+(w.head?q.h-.12:q.h*.6),Z=q.x-G,J=V-z,it=q.z-N,ut=Math.hypot(Z,it),Tt=((q.vx||0)*it-(q.vz||0)*Z)/Math.max(1,ut),Dt=Math.max(-.08,Math.min(.08,-Tt/Math.max(4,ut)*_.track*.35)),Wt=Math.atan2(-Z,-it)+w.err[0]+Dt,at=Math.atan2(J,ut)+w.err[1];w.err[0]*=Math.max(0,1-x*_.settle),w.err[1]*=Math.max(0,1-x*_.settle),w.rcyc=(w.rcyc||0)+x,w.retreat=I.hp<35&&ut<25&&w.rcyc%1.5<.55,b(P,Wt,at,_.turn*wh*x),w.react-=x;let ht=Math.hypot(Eh(P.yaw,Wt-w.err[0]),P.pitch-(at-w.err[1]));w.strafeT-=x,w.strafeT<=0&&(w.strafeT=.4+ve()*.8,w.strafe=ve()<.5?-1:1);let dt=W.cat==="rifle"||W.cat==="sniper"||W.cat==="heavy"&&W.pellets===1||ut>14;if(!dt||w.reload>0){let Gt=[Math.cos(P.yaw),-Math.sin(P.yaw)];B=Gt[0]*w.strafe,U=Gt[1]*w.strafe}(w.reload>0||w.retreat)&&(B+=Math.sin(P.yaw)*.8,U+=Math.cos(P.yaw)*.8),W.cat==="sniper"&&(w.wantScope=!0);let pt=Math.hypot(P.vx,P.vz);w.react<=0&&ht<Math.max(.02,.6/Math.max(3,ut))+.03&&w.reload<=0&&w.fireT<=0&&(!dt||pt<W.speed*Um*.4||ut<6)&&(w.mag[O]<=0&&W.mag?(w.reload=W.reload,w.shots=0):R(I,w,W,O,_,ut)),w.reload<=0&&w.mag[O]<=0&&W.mag&&(w.reload=W.reload,w.shots=0)}else{w.wantScope=!1,w.shots&&w.fireT<-.35&&(w.shots=0),W.mag&&w.mag[O]<W.mag*.4&&w.reload<=0&&(w.reload=W.reload);let G=n.bomb,z=null,N=!1,V=n.cfg.mode||"comp";if(V==="dm"||V==="ar"){if(!w.goal||w.goalKind!=="roam"||w.path&&w.pi>=w.path.length||ve()<x*.04){let ut=-1;for(let Tt=0;Tt<20&&ut<0;Tt++){let Dt=Math.floor(ve()*n.nav.L*n.nav.N);n.nav.main[Dt]&&(ut=Dt)}ut>=0&&(z=n.nav.pos(ut),w.goalKind="roam",w.look=null)}}else if(I.team==="T"&&S&&!i.go){i.goT-=x/Math.max(1,f("T"));let ut=i["stage"+w.site];if(!ut||i.goT<=0||n.timeLeft<60)i.go=!0;else{let Tt=0,Dt=0;for(let Wt of n.players.values())Wt.team==="T"&&Wt.alive&&(Dt++,Math.hypot(Wt.x-ut[0],Wt.z-ut[2])<9&&Tt++);Dt&&Tt>=Math.ceil(Dt*.75)&&(i.go=!0)}}let Z=l(I).seen;if(Z&&(Z.t-=x/Math.max(1,f(I.team)),Z.t<=0&&(l(I).seen=null)),!(V==="dm"||V==="ar"))if(I.team==="T"){let ut=i["stage"+w.site];if(G.state==="dropped")(w.goalKind!=="bomb"||w.repath<=0)&&(z=[G.x,G.y,G.z],w.goalKind="bomb"),Math.hypot(P.x-G.x,P.z-G.z)<1.2&&t.handle("take",{id:"c4"},I.id);else if(G.state==="planted"){if(w.goalKind!=="post"){let Tt=ve()*6.28,Dt=5+ve()*7;z=[G.x+Math.cos(Tt)*Dt,G.y,G.z+Math.sin(Tt)*Dt],w.goalKind="post",w.look=i["ctEntry"+(gi(n.W,G.x,G.z)&8?"B":"A")]||[G.x,G.y,G.z]}}else!i.go&&ut?w.goalKind!=="stage"&&(z=[ut[0]+(ve()-.5)*5,ut[1],ut[2]+(ve()-.5)*5],w.goalKind="stage",w.look=i.siteC[w.site]):I.inv.c4?gi(n.W,P.x,P.z)&12&&S&&P.onGround&&!d(I)?(w.plantT+=x,N=!0,n.setPlanting(I.id,w.plantT),w.plantT>=3.2&&(w.plantT=0,n.setPlanting(I.id,0),t.handle("plant",{x:P.x,y:P.y,z:P.z},I.id))):(w.plantT=0,(!w.goal||w.goalKind!=="site")&&(z=y(r[w.site]),w.goalKind="site")):(!w.goal||w.goalKind!=="site")&&(z=y(r[w.site]),w.goalKind="site",w.look=null)}else G.state==="planted"?Math.hypot(P.x-G.x,P.z-G.z)<1.1?(N=!0,E=!0,t.botDefuse(I),w.look=[G.x,G.y,G.z]):(w.goalKind!=="defuse"||w.repath<=0)&&(z=[G.x,G.y,G.z],w.goalKind="defuse"):Z&&Z.site!==w.site&&!w.rotated&&ve()<.6?(w.rotated=!0,f("CT")>1&&ve()<.7&&(w.site=Z.site,w.goal=null,w.goalKind=null)):(!w.goal||w.goalKind!=="hold")&&(z=y(r[w.site]),w.goalKind="hold",w.look=i["entry"+w.site]||null);if(!z&&w.goal&&!w.path&&w.repath<=0&&(w.goal=null),z&&m(I,w,z[0],z[1],z[2]),!N&&w.path&&w.pi<w.path.length){let ut=w.path[w.pi],Tt=ut[0]-P.x,Dt=ut[2]-P.z,Wt=Math.hypot(Tt,Dt);Wt<.55?w.pi++:(B=Tt/Wt,U=Dt/Wt,ut[1]-P.y>.45&&Wt<1.6&&w.jumpT<=0&&(w.jump=!0,w.jumpT=.8));let at=Math.hypot(P.x-w.last[0],P.z-w.last[1]);w.stuck=at<x*.6?w.stuck+x:0,w.last=[P.x,P.z],w.stuck>.6&&(w.jump=!0,w.stuck>1.6&&(w.stuck=0,w.goal=null,w.path=null))}else if(!N&&w.goalKind==="hold"&&w.path&&w.pi>=w.path.length){if(!w.look){let ut=n.spawns.T;w.look=[ut.cx,P.y+1.5,ut.cz]}w.crouchT=(w.crouchT||0)+x,E=w.crouchT%9>6,ve()<x*.03&&(w.goal=null)}else!N&&w.goalKind==="site"&&w.path&&w.pi>=w.path.length?w.goal=null:!N&&(w.goalKind==="stage"||w.goalKind==="post")&&w.path&&w.pi>=w.path.length;let J=null,it=0;if(w.lastKnown&&w.lkT>0){let ut=w.lastKnown;J=Math.atan2(-(ut[0]-P.x),-(ut[2]-P.z)),it=Math.atan2(ut[1]+1.4-P.y-bn(P),Math.hypot(ut[0]-P.x,ut[2]-P.z))}else(B||U)&&!(w.goalKind==="hold"&&w.look&&w.path&&w.pi>=w.path.length-3)?J=Math.atan2(-B,-U):w.look&&(J=Math.atan2(-(w.look[0]-P.x),-(w.look[2]-P.z)));J!==null&&b(P,J,it,_.turn*.55*wh*x)}let F=(W.recover||9)*x;w.pp=Math.max(0,w.pp-F*(w.fireT<-.05?1:.3)),w.py*=Math.max(0,1-x*4),H=!!q&&W.cat!=="knife",M(I,w,B,U,H,x,W,E)}};function b(x,_,A,S){let C=Eh(_,x.yaw);x.yaw+=Math.max(-S,Math.min(S,C));let I=A-x.pitch;x.pitch+=Math.max(-S,Math.min(S,I)),x.pitch=Math.max(-1.45,Math.min(1.45,x.pitch))}function M(x,_,A,S,C,I,w,P=!1){let O=x.pl,W=-Math.sin(O.yaw),q=-Math.cos(O.yaw),B=Math.cos(O.yaw),U=-Math.sin(O.yaw),H={f:A*W+S*q,s:A*B+S*U,jump:!!_.jump,crouch:P,walk:C};_.jump=!1,(n.phase==="freeze"||n.planting(x.id)>0||t.isDefusing(x.id))&&(H.f=H.s=0,H.jump=!1);let F=w.speed*Um*(_.wantScope&&w.cat==="sniper"?.42:1);{let z=Math.hypot(H.f,H.s);z>1&&(H.f/=z,H.s/=z)}let G=I;for(;G>1e-6;){let z=Math.min(G,.011111111111111112),N=yh(n.W,O,H,z,F);N&&n.fallDamage(x,N),G-=z}O.y<-20&&x.alive&&t.damage(x.id,x.id,999,"chest","world",{raw:!0});for(let z of n.players.values()){if(z===x||!z.alive||Math.abs(z.y-O.y)>1.6)continue;let N=O.x-z.x,V=O.z-z.z,Z=Math.hypot(N,V);if(Z<.62){let J=Z>1e-4?(.62-Z)/Z*.5:0,it=O.x+(Z>1e-4?N*J:.05),ut=O.z+(Z>1e-4?V*J:.03);qn(n.W,it,ut,O.y,O.h,oe.r)||(O.x=it,O.z=ut)}}x.x=O.x,x.y=O.y,x.z=O.z,x.yaw=O.yaw,x.pitch=O.pitch,x.duck=O.duck,x.h=O.h,x.vx=O.vx,x.vz=O.vz,x.onGround=O.onGround,x.wpn=x.inv.c4&&_.plantT>0?"c4":p(x),x.scoped=_.wantScope&&w.cat==="sniper"}function R(x,_,A,S,C,I){let w=x.pl,P={speed:Math.hypot(w.vx,w.vz),onGround:w.onGround,duck:w.duck,scoped:x.scoped,shots:_.shots},O=ka(A,P),[W,q]=Sh(A,_.shots,ve),B=[w.x,w.y+bn(w),w.z];n.fireBullets(x.id,S,B,H=>vo(w.yaw,w.pitch,_.pp*(1-C.ctrl*.85),_.py*(1-C.ctrl*.85),O,H)),_.pp=Math.min(A.kickCap||12,_.pp+W),_.py+=q,_.shots++,A.mag&&_.mag[S]--;let U=60/A.rpm;if(A.auto){let H=I>25?2:I>12?4:8;_.shots%H===0?(_.fireT=U+.25+ve()*.3*(2-C.ctrl),_.shots=0,T(_,C)):_.fireT=U}else _.fireT=Math.max(U,A.cat==="pistol"?.22+ve()*.25:U),A.cat!=="sniper"&&T(_,C,.5)}function T(x,_,A=1){let S=_.err*wh*.45*A;x.err[0]+=(ve()-.5)*2*S,x.err[1]+=(ve()-.4)*S,x.head=ve()<_.hs}return e}var _e=new Be,Rh=new Xt,wE=new $(0,1,0),Ch=new $;function Fm(n){let t={},i=new Bn(new Fe(1,1,1),new je({color:"#ffffff"}),700);i.instanceMatrix.setUsage(uo),i.frustumCulled=!1,i.count=0,i.instanceColor=new Bi(new Float32Array(700*3),3),n.add(i);let s=[];t.particle=(B,U,H,E,F,G,z,N,V,Z=9.8,J=0,it=null)=>{s.length>=700&&s.shift();let ut={x:B,y:U,z:H,vx:E,vy:F,vz:G,s:z,life:N,max:N,c:new Xt(V),g:Z,grow:J,fy:it};return s.push(ut),ut},t.floorAt=null,t.shell=(B,U,H,E)=>{let F=t.floorAt?t.floorAt(B[0],B[2],B[1]):B[1]-1.5,G=t.particle(B[0],B[1],B[2],U*(1.5+Math.random()),1.6+Math.random(),H*(1.5+Math.random()),E?.03:.022,1.6,E?"#2d6b2a":"#c9a23a",9.8,0,F+.01);G.shell=!0};let r=64,o=new Fe(1,1,1);o.translate(0,0,-.5);let a=new Bn(o,new je({color:"#ffe9a8",transparent:!0,opacity:.85,depthWrite:!1}),r);a.instanceMatrix.setUsage(uo),a.frustumCulled=!1,a.count=0,n.add(a);let l=[];t.tracer=(B,U)=>{l.length>=r&&l.shift();let H=Math.hypot(U[0]-B[0],U[1]-B[1],U[2]-B[2]);l.push({a:[...B],b:[...U],d:H,t:0,life:Math.min(.25,H/280+.04)})};let c=220,h=new Wn(.1,.1),u=document.createElement("canvas");u.width=u.height=64;{let B=u.getContext("2d"),U=B.createRadialGradient(32,32,2,32,32,30);U.addColorStop(0,"rgba(10,8,6,1)"),U.addColorStop(.28,"rgba(25,20,16,0.95)"),U.addColorStop(.42,"rgba(90,80,66,0.7)"),U.addColorStop(.6,"rgba(60,52,42,0.35)"),U.addColorStop(1,"rgba(0,0,0,0)"),B.fillStyle=U,B.fillRect(0,0,64,64),B.strokeStyle="rgba(20,16,12,0.6)",B.lineWidth=1.2;for(let H=0;H<7;H++){let E=H/7*6.28+Math.random()*.5;B.beginPath(),B.moveTo(32+Math.cos(E)*8,32+Math.sin(E)*8),B.lineTo(32+Math.cos(E+.2)*(16+Math.random()*12),32+Math.sin(E+.2)*(16+Math.random()*12)),B.stroke()}}let f=new ti(u);f.colorSpace=an;let d=new Bn(h,new je({map:f,transparent:!0,polygonOffset:!0,polygonOffsetFactor:-2,depthWrite:!1}),c);d.count=0,d.frustumCulled=!1,n.add(d);let p=0;t.decal=(B,U)=>{_e.position.set(B[0]+U[0]*.01,B[1]+U[1]*.01,B[2]+U[2]*.01),Ch.set(U[0],U[1],U[2]),_e.quaternion.setFromUnitVectors(new $(0,0,1),Ch),_e.rotateZ(Math.random()*3),_e.scale.setScalar(.7+Math.random()*.6),_e.updateMatrix(),d.setMatrixAt(p,_e.matrix),p=(p+1)%c,d.count=Math.max(d.count,p===0?c:p),d.instanceMatrix.needsUpdate=!0};let v={};t.decalC=(B,U,H,E)=>{let F=v[H];if(!F){let G=new Bn(new Ps(.5,7),new je({color:H,transparent:!0,opacity:.85,polygonOffset:!0,polygonOffsetFactor:-3,depthWrite:!1}),80);G.count=0,G.frustumCulled=!1,n.add(G),F=v[H]={m:G,i:0}}_e.position.set(B[0]+U[0]*.012,B[1]+U[1]*.012,B[2]+U[2]*.012),Ch.set(U[0],U[1],U[2]),_e.quaternion.setFromUnitVectors(new $(0,0,1),Ch),_e.rotateZ(Math.random()*6),_e.scale.set(E*(.8+Math.random()*.5),E*(.6+Math.random()*.5),1),_e.updateMatrix(),F.m.setMatrixAt(F.i,_e.matrix),F.i=(F.i+1)%80,F.m.count=Math.max(F.m.count,F.i===0?80:F.i),F.m.instanceMatrix.needsUpdate=!0},t.clearDecals=()=>{d.count=0,p=0;for(let B in v)v[B].m.count=0,v[B].i=0},t.impact=(B,U,H="#cdb894")=>{t.decal(B,U);for(let E=0;E<5;E++)t.particle(B[0],B[1],B[2],U[0]*2+(Math.random()-.5)*2,U[1]*2+Math.random()*1.5,U[2]*2+(Math.random()-.5)*2,.03+Math.random()*.03,.35+Math.random()*.3,H,6);if(t.particle(B[0],B[1],B[2],U[0]*.5,.4,U[2]*.5,.08,.5,"#d9cdb5",-.5,.25),t.particle(B[0],B[1],B[2],0,0,0,.05,.05,"#fff2a0",0),Math.random()<.45)for(let E=0;E<4;E++)t.particle(B[0],B[1],B[2],U[0]*3+(Math.random()-.5)*5,U[1]*3+Math.random()*3,U[2]*3+(Math.random()-.5)*5,.012,.18+Math.random()*.15,"#ffd060",12)};let g=[],m=new Fe(.06,.06,.06),y=new je({color:"#ff3030",depthTest:!1,transparent:!0,opacity:.85});t.debugBox=B=>{let U=new zt(m,y);U.position.set(B[0],B[1],B[2]),U.renderOrder=25,n.add(U),g.push({m:U,t:8}),g.length>120&&n.remove(g.shift().m)},t.tickDebug=B=>{for(let U=g.length-1;U>=0;U--)g[U].t-=B,g[U].t<=0&&(n.remove(g[U].m),g.splice(U,1))},t.muzzleSmoke=B=>{for(let U=0;U<2;U++)t.particle(B[0],B[1],B[2],(Math.random()-.5)*.3,.25+Math.random()*.2,(Math.random()-.5)*.3,.05,.6+Math.random()*.4,"#bdbab4",-.2,.22)},t.dust=B=>{for(let U=0;U<2;U++)t.particle(B[0]+(Math.random()-.5)*.3,B[1]+.03,B[2]+(Math.random()-.5)*.3,(Math.random()-.5)*.4,.2,(Math.random()-.5)*.4,.05,.5,"#d8c4a0",.2,.15)},t.blood=(B,U,H)=>{let E=H?10:6;for(let F=0;F<E;F++)t.particle(B[0],B[1],B[2],U[0]*2.5+(Math.random()-.5)*2,U[1]*2+Math.random()*1.2,U[2]*2.5+(Math.random()-.5)*2,.035+Math.random()*.04,.4+Math.random()*.3,H?"#b3121a":"#8f1015",8)};let b=new ar(1,0),M=new je({color:"#ffd27a",transparent:!0,opacity:.95,depthWrite:!1});t.muzzleMesh=()=>{let B=new zt(b,M);return B.visible=!1,B.scale.set(.05,.05,.14),B};let R=new Us("#ffcf80",0,7,2);n.add(R);let T=0;t.flashLight=(B,U=1)=>{R.position.set(B[0],B[1],B[2]),R.intensity=6*U,T=.05};let x=400,_=new Is(1,0),A=new Bn(_,new Vn({color:"#b9bcc0",flatShading:!0}),x);A.instanceMatrix.setUsage(uo),A.count=0,A.frustumCulled=!1,n.add(A),A.instanceColor=new Bi(new Float32Array(x*3),3);let S=[];t.smoke=(B,U)=>{let H=[];for(let E=0;E<38;E++){let F=Math.random()*Math.PI*2,G=Math.sqrt(Math.random())*He.smokeR*.85,z=Math.random()*2.6;H.push({x:B.x+Math.cos(F)*G,y:B.y+.4+z,z:B.z+Math.sin(F)*G,s:.9+Math.random()*.9,ph:Math.random()*6,c:.82+Math.random()*.14})}S.push({g:B,balls:H})},t.clearSmokes=()=>{S.length=0,P.length=0};let C=260,I=new hs(.22,.7,4);I.translate(0,.35,0);let w=new Bn(I,new je({color:"#ffffff"}),C);w.instanceColor=new Bi(new Float32Array(C*3),3),w.instanceMatrix.setUsage(uo),w.count=0,w.frustumCulled=!1,n.add(w);let P=[],O=new Us("#ff8a3a",0,9,1.6);n.add(O),t.fire=(B,U,H)=>{let E=[];for(let F=0;F<26;F++){let G=Math.random()*Math.PI*2,z=Math.sqrt(Math.random())*He.fireR,N=B.x+Math.cos(G)*z,V=B.z+Math.sin(G)*z,Z=H(U,N,V,B.y+.6);Z<B.y-1.2||Z>B.y+.7||E.push({x:N,y:Z,z:V,ph:Math.random()*6,s:.7+Math.random()*.8})}P.push({g:B,fl:E})};let W=[],q=new Is(1,1);return t.explosion=(B,U)=>{let H=new zt(q,new je({color:"#ffb347",transparent:!0,opacity:.9,depthWrite:!1}));H.position.set(B[0],B[1]+.3,B[2]),n.add(H),W.push({m:H,t:0,life:U?1.1:.45,size:U?9:2.6});for(let E=0;E<(U?70:30);E++){let F=Math.random()*6.28,G=Math.random()*1.4,z=(U?12:7)*(.4+Math.random());t.particle(B[0],B[1]+.3,B[2],Math.cos(F)*Math.cos(G)*z,Math.sin(G)*z,Math.sin(F)*Math.cos(G)*z,.06+Math.random()*.08,.6+Math.random()*.6,Math.random()<.5?"#ffb347":"#3a3530",9)}for(let E=0;E<(U?24:10);E++)t.particle(B[0]+(Math.random()-.5)*2,B[1]+.5+Math.random(),B[2]+(Math.random()-.5)*2,Math.random()-.5,1+Math.random(),Math.random()-.5,.5,2+Math.random()*1.5,"#4a4642",-.3,U?1.6:.8);t.flashLight(B,U?6:3),T=U?.35:.15},t.flashPop=B=>{t.flashLight(B,8),T=.08;for(let U=0;U<14;U++)t.particle(B[0],B[1],B[2],(Math.random()-.5)*6,(Math.random()-.5)*6,(Math.random()-.5)*6,.04,.25,"#ffffff",0)},t.update=(B,U,H)=>{let E=0;for(let z=s.length-1;z>=0;z--){let N=s[z];if(N.life-=B,N.life<=0){s.splice(z,1);continue}N.vy-=N.g*B,N.x+=N.vx*B,N.y+=N.vy*B,N.z+=N.vz*B,N.fy!==null&&N.fy!==void 0&&N.y<N.fy&&(N.y=N.fy,N.vy=Math.abs(N.vy)>.6?-N.vy*.3:0,N.vx*=.5,N.vz*=.5,N.g=N.vy?9.8:0),N.vx*=1-B*1.5,N.vz*=1-B*1.5;let V=N.life/N.max,Z=N.shell?N.s:N.s*(1+N.grow*(1-V)*8)*(N.grow?1:Math.min(1,V*2));_e.position.set(N.x,N.y,N.z),_e.rotation.set(N.x*7,N.y*5,0),N.shell?_e.scale.set(Z*.5,Z*.5,Z*1.6):_e.scale.setScalar(Z),_e.updateMatrix(),i.setMatrixAt(E,_e.matrix),i.setColorAt(E,N.c),E++}i.count=E,i.instanceMatrix.needsUpdate=!0,i.instanceColor&&(i.instanceColor.needsUpdate=!0),E=0;for(let z=l.length-1;z>=0;z--){let N=l[z];if(N.t+=B,N.t>N.life){l.splice(z,1);continue}let V=N.t/N.life,Z=Math.min(N.d,3.5),J=Math.min(N.d,N.d*V+Z*.5),it=Math.max(0,J-Z),ut=(N.b[0]-N.a[0])/N.d,Tt=(N.b[1]-N.a[1])/N.d,Dt=(N.b[2]-N.a[2])/N.d;_e.position.set(N.a[0]+ut*J,N.a[1]+Tt*J,N.a[2]+Dt*J),_e.lookAt(N.a[0]+ut*(J+1),N.a[1]+Tt*(J+1),N.a[2]+Dt*(J+1)),_e.rotateY(Math.PI),_e.scale.set(.012,.012,Math.max(.01,J-it)),_e.updateMatrix(),a.setMatrixAt(E++,_e.matrix)}a.count=E,a.instanceMatrix.needsUpdate=!0,E=0;for(let z=S.length-1;z>=0;z--){let N=S[z],V=N.g;if(V.state!=="active"){S.splice(z,1);continue}let Z=He.smokeLife-V.life,J=Math.min(1,Z/1.2),it=Math.min(1,V.life/1.5);for(let ut of N.balls){if(E>=x)break;let Tt=J*it;_e.position.set(V.x+(ut.x-V.x)*(.3+.7*J),V.y+(ut.y-V.y)*(.3+.7*J)+Math.sin(U*.6+ut.ph)*.08,V.z+(ut.z-V.z)*(.3+.7*J)),_e.rotation.set(ut.ph,U*.05+ut.ph,0),_e.scale.setScalar(Math.max(.01,ut.s*Tt*1.25)),_e.updateMatrix(),A.setMatrixAt(E,_e.matrix),Rh.setScalar(ut.c),A.setColorAt(E,Rh),E++}}A.count=E,A.instanceMatrix.needsUpdate=!0,A.instanceColor&&(A.instanceColor.needsUpdate=!0),E=0;let F=0,G=null;for(let z=P.length-1;z>=0;z--){let N=P[z],V=N.g;if(V.state!=="active"||V.life<=0){P.splice(z,1);continue}let Z=Math.min(1,V.life/1.2)*Math.min(1,(He.fireLife-V.life)*4+.3);for(let J of N.fl){if(E>=C)break;let it=.7+Math.sin(U*14+J.ph)*.2+Math.sin(U*23+J.ph*2)*.1;_e.position.set(J.x,J.y,J.z),_e.rotation.set(0,J.ph+U,0),_e.scale.set(J.s*Z,J.s*Z*it*1.3,J.s*Z),_e.updateMatrix(),w.setMatrixAt(E,_e.matrix),Rh.setRGB(1,.45+it*.35,.1),w.setColorAt(E,Rh),E++}F+=Z,G=V}w.count=E,w.instanceMatrix.needsUpdate=!0,w.instanceColor&&(w.instanceColor.needsUpdate=!0),G?(O.position.set(G.x,G.y+1,G.z),O.intensity=Math.min(1,F)*(3+Math.sin(U*20)*.8)):O.intensity=0;for(let z=W.length-1;z>=0;z--){let N=W[z];N.t+=B;let V=N.t/N.life;if(V>=1){n.remove(N.m),N.m.material.dispose(),W.splice(z,1);continue}N.m.scale.setScalar(N.size*(.3+.7*Math.sqrt(V))),N.m.material.opacity=.9*(1-V),N.m.material.color.setRGB(1,.7-V*.4,.3-V*.25)}T>0&&(T-=B,T<=0&&(R.intensity=0))},t}var za=new $;function vi(n,t,e,i,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),l=Math.PI/4;za.copy(t),za[i]=0,za.normalize();let c=.5*o/(o+a),h=1-za.angleTo(n)/l;return Math.sign(za[e])===1?h*c:a/(o+a)+c+c*(1-h)}var Ba=class n extends Fe{constructor(t=1,e=1,i=1,s=2,r=.1){let o=s*2+1;if(r=Math.min(t/2,e/2,i/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:i,segments:s,radius:r},o===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let l=new $,c=new $,h=new $(t,e,i).divideScalar(2).subScalar(r),u=this.attributes.position.array,f=this.attributes.normal.array,d=this.attributes.uv.array,p=u.length/6,v=new $,g=.5/o;for(let m=0,y=0;m<u.length;m+=3,y+=2)switch(l.fromArray(u,m),c.copy(l),c.x-=Math.sign(c.x)*g,c.y-=Math.sign(c.y)*g,c.z-=Math.sign(c.z)*g,c.normalize(),u[m+0]=h.x*Math.sign(l.x)+c.x*r,u[m+1]=h.y*Math.sign(l.y)+c.y*r,u[m+2]=h.z*Math.sign(l.z)+c.z*r,f[m+0]=c.x,f[m+1]=c.y,f[m+2]=c.z,Math.floor(m/p)){case 0:v.set(1,0,0),d[y+0]=vi(v,c,"z","y",r,i),d[y+1]=1-vi(v,c,"y","z",r,e);break;case 1:v.set(-1,0,0),d[y+0]=1-vi(v,c,"z","y",r,i),d[y+1]=1-vi(v,c,"y","z",r,e);break;case 2:v.set(0,1,0),d[y+0]=1-vi(v,c,"x","z",r,t),d[y+1]=vi(v,c,"z","x",r,i);break;case 3:v.set(0,-1,0),d[y+0]=1-vi(v,c,"x","z",r,t),d[y+1]=1-vi(v,c,"z","x",r,i);break;case 4:v.set(0,0,1),d[y+0]=1-vi(v,c,"x","y",r,t),d[y+1]=1-vi(v,c,"y","x",r,e);break;case 5:v.set(0,0,-1),d[y+0]=vi(v,c,"x","y",r,t),d[y+1]=1-vi(v,c,"y","x",r,e);break}}static fromJSON(t){return new n(t.width,t.height,t.depth,t.segments,t.radius)}};var Ki=new An({vertexColors:!0,roughness:.82,metalness:.04}),km=new An({vertexColors:!0,roughness:.6,metalness:.15}),Ph=new Xt;function ai(n,t){n.attributes.normal||n.computeVertexNormals(),n=n.index?n.toNonIndexed():n;let e=n.attributes.position.count,i=new Float32Array(e*3),s=n.attributes.normal.array;Ph.set(t);for(let r=0;r<e;r++){let o=.8+s[r*3+1]*.2+s[r*3]*.06;i[r*3]=Ph.r*o,i[r*3+1]=Ph.g*o,i[r*3+2]=Ph.b*o}n.setAttribute("color",new qe(i,3));for(let r of Object.keys(n.attributes))r!=="position"&&r!=="normal"&&r!=="color"&&n.deleteAttribute(r);return n}function $t(n,t,e,i=0){let s=new so(n.map(a=>new gt(a[0],a[1]))),r=Math.min(.006,t*.18),o=new da(s,{depth:Math.max(.001,t-r*2),bevelEnabled:!0,bevelThickness:r,bevelSize:r*.8,bevelSegments:2,steps:1,curveSegments:8});return o.translate(0,0,-t/2+r),o.rotateY(Math.PI/2),o.translate(i,0,0),ai(o,e)}function Qt(n,t,e,i,s,r=7,o=0,a=n){let l=new Hn(a,n,e-t,Math.max(14,r*2));return l.rotateX(-Math.PI/2),l.translate(o,i,-(t+e)/2),ai(l,s)}function Ut(n,t,e,i,s,r,o=0){let a=new Fe(n,t,e);return a.translate(o,s,-i),ai(a,r)}function Ye(n,t,e,i,s,r,o=0,a=Math.min(n,t,e)*.3){let l=new Ba(n,t,e,2,Math.min(a,Math.min(n,t,e)*.49));return l.translate(o,s,-i),ai(l,r)}function Xs(n,t,e,i,s,r,o=0,a=!1){let l=new fi(1,18,12,0,Math.PI*2,0,a?Math.PI/2:Math.PI);return l.scale(n,t,e),l.translate(o,s,-i),ai(l,r)}function Gf(n,t,e,i,s,r=0,o=0){let a=new Hn(n,t,e,14);return a.translate(o,i,-r),ai(a,s)}var Om=[{name:"Original",b:null,w:null,sw:"#3a3c40"},{name:"Desierto",b:"#b59a6c",w:"#8a6c44",sw:"#b59a6c"},{name:"Bosque",b:"#4f6040",w:"#3d4a30",sw:"#4f6040"},{name:"\xC1rtico",b:"#dfe4ea",w:"#b9c2cc",sw:"#dfe4ea"},{name:"Ne\xF3n",b:"#2b1f47",w:"#ff3fa4",sw:"#ff3fa4"},{name:"Oro",b:"#c9a23a",w:"#6b4a24",sw:"#c9a23a"},{name:"Carmes\xED",b:"#7a1a1a",w:"#2a1a1a",sw:"#9a2020"},{name:"Cobalto",b:"#1f3f8a",w:"#9aa6b8",sw:"#2f5fc0"}],Lh=(n,t)=>n&&typeof n=="object"?n[t]|0:n|0,Nb="#34373c",Wf="#8b5a2e";var Xf="#5a5f66";function Zm(n){let t=[],e=(l,c="m")=>t.push([l,c]),i=null,s=[.3,.05],r=(l,c=.28,h=.11,u=.032)=>e($t([[.03,.02],[-.02,.02],[-.02-Math.sin(c)*h,.02-h],[.03-Math.sin(c)*h,.02-h]],u,l),"w");switch(n){case"ak47":{let l="#8c4a22",c="#6e3519",h="#2a2b2d",u="#1a1b1d";e($t([[-.07,.022],[.27,.022],[.27,.088],[-.07,.088],[-.08,.06]],.044,h),"b"),e(Qt(.022,-.06,.26,.085,"#2f3033",10)),e(Ut(.03,.012,.03,.255,.112,u)),e($t([[.24,.098],[.28,.098],[.28,.122],[.25,.118]],.03,u),"m"),e($t([[-.07,.085],[-.18,.07],[-.44,.045],[-.46,-.075],[-.4,-.08],[-.2,-.02],[-.07,.022]],.04,l),"w"),e($t([[-.44,.045],[-.47,.045],[-.475,-.08],[-.46,-.08]],.043,u),"m"),e($t([[.27,.024],[.3,.02],[.52,.026],[.53,.07],[.27,.07]],.05,l),"w");for(let p=0;p<3;p++)e(Ut(.052,.006,.014,.33+p*.06,.03,c));e(Qt(.019,.29,.47,.105,l,10)),e(Qt(.012,.47,.56,.105,"#2a2b2d",8)),e(Ut(.05,.016,.02,.28,.08,u)),e(Ut(.05,.016,.02,.525,.06,u)),e(Qt(.011,.5,.72,.066,"#1c1d1f",8)),e($t([[.66,.076],[.675,.13],[.685,.13],[.695,.076]],.01,u),"m"),e(Qt(.016,.7,.76,.066,u,8,0,.014));let f=[];for(let p=0;p<=8;p++){let v=p/8,g=v*.55;f.push([.09+Math.sin(g)*.38*v*.5+v*.06,.022-v*.2])}let d=f.map(([p,v],g)=>[p+.078-g/8*.01,v]).reverse();e($t([...f,...d],.03,"#2e2416"),"w");for(let p=1;p<5;p++)e(Ut(.033,.005,.006,f[p*2][0]+.03,f[p*2][1],"#1c1712"));r(c,.3,.1,.03),e(Ut(.008,.012,.03,.08,.06,"#151617",.026)),i=[.4,.03],s=[.76,.066];break}case"galil":case"sg553":{let l=n==="galil"?"#4b4635":"#55543f";e($t([[-.07,.02],[.27,.02],[.27,.095],[-.07,.095]],.046,n==="galil"?"#3a3830":"#4a4a3e"),"b"),e($t([[-.07,.09],[-.44,.07],[-.46,-.06],[-.41,-.07],[-.2,0],[-.07,.02]],.038,l),"w"),e($t([[.27,.025],[.5,.035],[.5,.09],[.27,.095]],.05,l),"w"),e($t([[.27,.098],[.53,.105],[.53,.125],[.27,.12]],.026,Nb),"m"),e(Qt(.011,.5,.72,.065,"#1c1d1f")),e(Ut(.006,.05,.012,.66,.1,"#1c1d1f")),e(Qt(.016,.69,.75,.065,"#1c1d1f",6)),e(Ut(.02,.025,.04,.2,.105,"#1c1d1f")),n==="sg553"&&e(Qt(.02,-.02,.14,.14,"#1d1d1d",8)),r("#2a2a2a"),e($t([[.09,.02],[.17,.02],[.27,-.17],[.19,-.19]],.032,"#2b2b2b"),"w"),e($t([[.04,.02],[.08,.02],[.08,-.025],[.04,-.03]],.008,"#1c1d1f"),"m"),i=[.38,.03],s=[.75,.065];break}case"m4a4":case"m4a1s":case"famas":case"aug":{if(n==="famas"||n==="aug"){let l=n==="aug"?"#5d6a52":"#3c4248";e($t([[-.36,0],[.28,0],[.32,.08],[.28,.11],[-.36,.11],[-.38,.05]],.055,l),"b"),n==="famas"?e($t([[-.2,.11],[.2,.11],[.22,.16],[-.18,.16]],.016,l),"b"):e(Qt(.022,-.06,.12,.15,"#1d1d1d",8)),e(Qt(.011,.3,.52,.05,"#1c1d1f")),r("#2a2a2a",.2),e($t([[-.18,0],[-.1,0],[-.08,-.15],[-.16,-.16]],.03,"#262626"),"w"),e($t([[.12,0],[.17,0],[.15,-.09],[.11,-.09]],.03,l),"b"),i=[.14,-.03],s=[.52,.05]}else{let l="#2c2f33",c="#33363a",h="#202225",u="#151617";e($t([[-.07,.06],[.25,.06],[.25,.108],[-.07,.108]],.044,l),"b"),e($t([[-.07,.062],[.2,.062],[.19,.02],[-.05,.016],[-.08,.036]],.042,c),"b"),e($t([[.03,.022],[.17,.022],[.17,-.005],[.03,-.005]],.046,c),"b"),e(Ut(.026,.012,.32,.09,.115,"#1d1f22")),e(Qt(.027,.25,.5,.075,h,12)),e(Qt(.031,.245,.27,.075,u,12)),e(Qt(.012,-.36,-.07,.075,"#25272a",10)),e($t([[-.22,.1],[-.38,.098],[-.39,-.03],[-.33,-.032],[-.3,.04],[-.22,.055]],.04,h),"w"),e($t([[.48,.09],[.495,.165],[.51,.165],[.52,.09]],.012,u),"m"),e(Ut(.032,.03,.03,-.04,.135,u)),e($t([[.05,0],[.145,0],[.16,-.08],[.18,-.15],[.115,-.158],[.095,-.08]],.028,"#2b2c2e"),"w"),r(h,.32,.1,.032),n==="m4a1s"?(e(Qt(.011,.5,.54,.075,"#1c1d1f")),e(Qt(.021,.54,.8,.075,"#1a1b1d",12)),e(Qt(.023,.54,.56,.075,"#232427",12)),s=[.8,.075]):(e(Qt(.011,.5,.66,.075,"#1c1d1f")),e(Qt(.015,.63,.7,.075,u,6)),s=[.7,.075]),i=[.38,.03]}break}case"awp":case"ssg08":case"g3sg1":case"scar20":{let l=n==="awp"?"#3f5b3a":n==="ssg08"?"#3e4c5e":n==="g3sg1"?"#2d302d":"#2b2e33",c=n==="awp"?1.15:1;e($t([[-.52,.04],[-.3,.06],[-.1,.03],[.4,.03],[.42,.09],[-.06,.1*c],[-.22,.1*c],[-.52,.09*c],[-.54,-.07],[-.44,-.08],[-.2,-.05],[-.08,-.06],[-.06,0]],.05*c,l),"b"),e($t([[-.14,.04],[-.24,.04],[-.24,-.02],[-.14,-.02]],.052*c,"#0d0d0d"),"m"),e(Qt(.013*c,.4,n==="awp"?1.05:.92,.065,"#1c1d1f",7,0,.011*c)),e(Qt(.028*c,-.08,.26,.15*c,"#191a1c",10)),e(Qt(.036*c,.2,.3,.15*c,"#191a1c",10,0,.028*c)),e(Qt(.033*c,-.14,-.07,.15*c,"#191a1c",10,0,.026*c)),e(Ut(.016,.05,.02,.02,.12*c,"#1c1d1f")),e(Ut(.016,.05,.02,.18,.12*c,"#1c1d1f")),(n==="awp"||n==="ssg08")&&e(Ut(.06,.012,.012,-.04,.09,"#2a2a2a",.04)),e($t(n==="g3sg1"||n==="scar20"?[[.06,.03],[.12,.03],[.13,-.12],[.07,-.12]]:[[.06,.03],[.12,.03],[.12,-.04],[.06,-.04]],.03,"#222"),"w"),i=[.3,.02],s=[n==="awp"?1.05:.92,.065];break}case"p90":{e($t([[-.22,.02],[.28,.02],[.32,.07],[.3,.11],[-.22,.12],[-.25,-.04],[-.12,-.08],[-.05,-.02],[.02,-.08],[.1,-.08],[.12,.02]],.06,"#3a3c3e"),"b"),e($t([[-.18,.12],[.2,.12],[.2,.15],[-.18,.15]],.04,"#2a2a2a"),"m"),e(Qt(.011,.3,.38,.06,"#1c1d1f")),i=[.12,-.04],s=[.38,.06];break}case"mac10":{e($t([[-.05,.02],[.2,.02],[.2,.11],[-.05,.11]],.06,"#2a2b2e"),"b"),e(Qt(.012,.2,.27,.07,"#1c1d1f")),e($t([[-.01,.02],[.04,.02],[.04,-.2],[-.01,-.2]],.03,"#222"),"w"),e(Ut(.004,.06,.14,-.12,.08,"#1c1d1f",.02)),i=[.17,0],s=[.27,.07];break}case"mp9":case"mp7":case"ump":case"mp5":case"bizon":{let l=n==="ump"||n==="mp5"||n==="bizon"?.36:.28;e($t([[-.06,.02],[l,.02],[l,.1],[-.06,.1]],.05,n==="mp7"?"#3a3d3f":"#2a2c30"),"b"),e($t([[-.06,.09],[-.28,.08],[-.28,0],[-.24,0],[-.06,.04]],.03,"#1f2124"),"w"),r("#232427",.25),n==="bizon"?e(Qt(.03,.06,.32,-.01,"#2b2b2b",8)):e($t([[.07,.02],[.12,.02],[n==="mp5"?.16:.12,-.15],[n==="mp5"?.11:.07,-.15]],.028,"#222"),"w"),n==="mp5"?(e(Qt(.022,l,l+.18,.06,"#1a1b1d",10)),s=[l+.18,.06]):(e(Qt(.011,l,l+.06,.06,"#1c1d1f")),s=[l+.06,.06]),i=[l*.75,.01];break}case"nova":case"xm1014":case"sawedoff":case"mag7":{let l=n==="sawedoff"||n==="mag7",c=l?.42:.68;e($t([[-.05,.02],[.18,.02],[.18,.1],[-.05,.1]],.05,"#2b2d30"),"b"),e(Qt(.016,.18,c,.075,"#1c1d1f",8)),e(Qt(.014,.18,c-.06,.04,"#1f2022",8)),e($t([[.24,.01],[.46,.01],[.46,.06],[.24,.06]],.045,n==="sawedoff"?Wf:"#2a2a2a"),"w"),n==="mag7"&&e($t([[.04,.02],[.12,.02],[.12,-.14],[.04,-.14]],.04,"#2a2a2a"),"w"),n==="sawedoff"?e($t([[-.05,.08],[-.12,.06],[-.18,-.08],[-.1,-.09],[-.05,.02]],.035,Wf),"w"):n!=="mag7"?e($t([[-.05,.09],[-.42,.06],[-.44,-.07],[-.38,-.08],[-.05,.02]],.04,n==="nova"?"#2a2a2a":"#26272a"),"w"):r("#232427"),i=[.35,0],s=[c,.075];break}case"m249":case"negev":{e($t([[-.1,.02],[.32,.02],[.32,.13],[-.1,.13]],.07,"#3a3d36"),"b"),e($t([[-.1,.1],[-.44,.08],[-.44,-.06],[-.1,.02]],.04,"#26272a"),"w"),e(Qt(.016,.32,.82,.07,"#1c1d1f",8)),e($t([[.32,.03],[.55,.03],[.55,.1],[.32,.1]],.06,"#2b2b2b"),"b"),e(Ut(.1,.12,.13,.12,-.04,"#3b3b2e",.05)),r("#232427"),i=[.45,.02],s=[.82,.07];break}case"deagle":case"r8":{n==="r8"?(e(Qt(.012,.03,.24,.07,Xf,8)),e(Qt(.03,-.01,.05,.05,Xf,6)),e($t([[-.04,.02],[.04,.02],[.04,.08],[-.04,.08]],.03,Xf),"b"),r(Wf,.35,.1,.03),s=[.24,.07]):(e($t([[-.05,.035],[.2,.035],[.21,.06],[.2,.092],[-.05,.092]],.032,"#9aa0a8"),"b"),e($t([[-.04,0],[.17,0],[.17,.035],[-.04,.035]],.03,"#8a9098"),"b"),e(Ut(.012,.012,.01,.195,.1,"#1c1d1f")),r("#26272a",.25,.11,.036),s=[.21,.065]);break}case"zeus":{e($t([[-.04,.02],[.13,.02],[.14,.07],[-.04,.07]],.04,"#2a3a6a"),"b"),e(Ut(.045,.035,.02,.14,.045,"#e6c84a")),r("#222",.25,.09),s=[.15,.045];break}case"knife":{e($t([[-.12,-.012],[-.005,-.014],[-.005,.014],[-.12,.012],[-.13,0]],.024,"#1f2023"),"w"),e($t([[-.005,-.03],[.012,-.03],[.012,.024],[-.005,.024]],.03,"#3a3c40"),"m"),e($t([[.012,-.016],[.17,-.012],[.215,.006],[.17,.016],[.06,.016],[.012,.016]],.005,"#c9cfd6"),"b"),e($t([[.03,.016],[.16,.016],[.16,.019],[.03,.019]],.007,"#8d949c"),"m"),s=[.21,0];break}case"he":e(ai(new Is(.037,0),"#3d4a2c")),e(Ut(.016,.02,.016,0,.04,"#999")),e(Ut(.008,.05,.016,-.02,.025,"#aaa",.03));break;case"flash":e(Qt(.028,-.055,.055,0,"#a0a8b2",8)),e(Ut(.016,.02,.016,0,.032,"#777"));break;case"smoke":e(Qt(.03,-.065,.065,0,"#5a6670",8)),e(Ut(.02,.012,.02,0,.034,"#888"));break;case"decoy":e(Qt(.026,-.05,.05,0,"#6b6b5b",6));break;case"incendiary":e(Qt(.028,-.06,.06,0,"#a2552c",8));break;case"molotov":e(Qt(.03,-.06,.04,0,"#5d7a3a",8)),e(Qt(.012,.04,.1,0,"#4d6a2a",6)),e(Qt(.016,.1,.13,0,"#e8d6b0",5));break;case"c4":e(Ut(.2,.06,.13,0,0,"#b8a27a")),e(Ut(.07,.03,.05,.01,.04,"#1d1d1d",.03)),e(Ut(.05,.012,.03,.01,.058,"#5bdc6d",.03)),e(Ut(.18,.02,.02,-.04,.035,"#a33"));break;case"defuser":e(Ut(.16,.05,.1,0,0,"#2d3a55")),e(Ut(.04,.04,.12,0,.03,"#d4b13a",.05));break;default:{let l=n==="dualies"?"#9aa0a8":n==="fiveseven"?"#4b4f55":n==="tec9"?"#2d2f33":n==="p250"?"#3a3d42":"#2e3034",c=n==="tec9"?.22:n==="glock"?.18:.185,h=n==="usp"||n==="p2000"?"#26272a":"#1f2023";e(Ye(.03,.04,c+.04,(c-.04)/2,.055,l,0,.008),"b"),e(Ye(.026,.026,c-.01,(c-.04)/2,.025,h,0,.006),"m"),e($t([[.035,.02],[-.03,.02],[-.06,-.085],[-.055,-.1],[.005,-.1],[.012,-.03],[.035,0]],.031,h),"w");for(let u=0;u<4;u++)e(Ut(.033,.004,.006,-.02-u*.008,-.02-u*.02,"#151617"));n==="tec9"&&e($t([[.06,0],[.1,0],[.1,-.16],[.06,-.16]],.024,"#202124"),"w"),e(Qt(.006,c-.02,c+.002,.055,"#0b0b0c",8)),n==="usp"?(e(Qt(.017,c,c+.15,.052,"#1a1b1d",12)),s=[c+.15,.052]):s=[c,.055],e(Ut(.006,.012,.008,c-.012,.08,"#111"))}}let o=(l,c,h,u,f,d="#141516",p=.006,v=.006)=>{for(let g=0;g<u;g++)e(Ut(f,p,v,l+(c-l)*(u>1?g/(u-1):0),h,d))};if(n==="galil"||n==="sg553"){e(Qt(.012,.27,.5,.13,"#2a2b2d",8)),e(Ut(.05,.03,.03,.26,.122,"#1c1d1f")),e(Ut(.008,.012,.03,.08,.06,"#151617",.026)),o(-.05,.22,.098,6,.05,"#232426",.004,.008);for(let l=0;l<4;l++)e(Ut(.034,.006,.006,.13+l*.028,-.04-l*.035,"#1e1f21"));e(Ut(.05,.016,.02,.48,.03,"#1c1d1f"))}if(n==="m4a4"||n==="m4a1s"){for(let l=0;l<12;l++)e(Ut(.03,.006,.006,-.05+l*.026,.123,"#121314"));for(let l=0;l<5;l++)for(let c of[-.025,.025])e(Ut(.005,.01,.026,.29+l*.045,.075,"#0f1011",c));e(Ut(.03,.012,.03,-.07,.112,"#1c1d1f")),e(Qt(.008,.12,.15,.08,"#1c1d1f",6,.03));for(let l=0;l<4;l++)e(Ut(.04,.006,.005,-.33+l*.07,.065,"#121314",.016))}if((n==="famas"||n==="aug")&&(o(-.2,.2,.114,8,.012,"#1a1b1c",.005,.03),e(Ut(.02,.03,.06,.25,.06,"#1a1b1c"))),n==="awp"||n==="ssg08"||n==="scar20"||n==="g3sg1"){let l=n==="awp"?1.15:1;e(ai(new Ps(.031*l,12).rotateY(Math.PI).translate(0,.15*l,-.302),"#3a6f9a")),e(ai(new Ps(.025*l,12).translate(0,.15*l,.142),"#1d3a55")),e(Qt(.01,.05,.08,.17*l,"#161718",8,0)),e(Ut(.03,.012,.012,-.12,.08,"#1c1d1f",.05)),e(ai(new fi(.013,6,4).translate(.06,.08,.12),"#222")),n==="awp"&&(e(Ut(.012,.03,.02,.36,.03,"#1c1d1f")),o(.43,.6,.065,4,.012,"#121314",.032,.03))}if(n==="deagle"||["glock","usp","p2000","p250","fiveseven","cz75","dualies","tec9"].includes(n)){let l=n==="deagle"?.092:.078,c=n==="deagle"?-.045:-.055;for(let h=0;h<5;h++)for(let u of[-.017,.017])e(Ut(.004,.03,.004,c+.006+h*.009,l-.02,"#0f1011",u*(n==="deagle"?1.05:.95)));e(Ut(.012,.016,.01,c-.004,l-.004,"#111"))}if(n==="nova"||n==="xm1014")for(let l=0;l<5;l++)e(Ut(.006,.05,.05,.27+l*.04,.035,"#151515"));["mp9","mp7","ump","mp5","bizon","mac10","p90"].includes(n)&&(o(-.02,.18,.105,7,.016,"#121314",.006,.02),e(Ut(.024,.012,.012,.02,.07,"#111",.03))),(n==="m249"||n==="negev")&&(o(-.06,.28,.135,10,.02,"#151615",.008,.03),e(Qt(.008,.6,.65,.115,"#1c1d1f",6)));let a=ne[n];if(a&&a.dmg&&a.cat!=="knife"&&a.cat!=="equip"){let l=a.cat==="pistol";e($t([[.025,0],[.07,0],[.07,-.006],[.06,-.035],[.025,-.035],[.025,-.029],[.057,-.029],[.064,-.006],[.025,-.006]],.008,"#18191b"),"m"),e(Ut(.004,.02,.008,.045,-.012,"#0e0e0f")),e(l?Ut(.004,.012,.05,.06,.06,"#0b0b0c",.016):Ut(.004,.022,.07,.1,.07,"#0b0b0c",.026))}return{parts:t,fore:i,muzzle:s}}var qf=new Map,Xa=new Map;function qa(n){if(!Xa.has(n)){let t=Zm(n);Xa.set(n,{fore:t.fore,muzzle:t.muzzle})}return Xa.get(n)}function Sr(n,t=0){let e=n+":"+t;if(qf.has(e))return qf.get(e);let i=Zm(n),s=Om[t]||Om[0],r=ne[n]&&ne[n].dmg,o=i.parts.map(([c,h])=>{if(!s.b||!r||h!=="b"&&h!=="w"||n==="knife"&&h==="w")return c;let u=c.clone(),f=new Xt(h==="b"?s.b:s.w),d=u.attributes.color.array,p=u.attributes.normal.array;for(let v=0;v<d.length/3;v++){let g=.8+p[v*3+1]*.2+p[v*3]*.06;d[v*3]=f.r*g,d[v*3+1]=f.g*g,d[v*3+2]=f.b*g}return u}),a=i.parts.map((c,h)=>h).sort((c,h)=>(i.parts[c][1]==="m"?0:1)-(i.parts[h][1]==="m"?0:1)),l=Li(a.map(c=>o[c]),!0);return l.groups.forEach((c,h)=>{c.materialIndex=i.parts[a[h]][1]==="m"?0:1}),qf.set(e,l),Xa.has(n)||Xa.set(n,{fore:i.fore,muzzle:i.muzzle}),l}function Mo(n,t=0){return new zt(Sr(n,t),Ki)}var zm={T:[{name:"Terrorista",shirt:"#4e3b2b",pants:"#363b43",vest:"#3b3426",glove:"#1c1c1c",boots:"#2a241d",skin:"#c49670",head:"balaclava",hc:"#1b1b1b"}],CT:[{name:"Contraterrorista",shirt:"#30342f",pants:"#2c302c",vest:"#3e443a",glove:"#151515",boots:"#141414",skin:"#c49670",head:"sas",hc:"#262a26"}]},Qf=n=>(zm[n]||zm.T)[0],$f={};function Db(n){let t=n;if($f[t])return $f[t];let e=Qf(n),i=n==="T",s=[Ye(.4,.5,.24,0,.27,e.shirt,0,.07),Xs(.25,.08,.13,0,.47,e.shirt),Gf(.06,.07,.08,.55,e.shirt),Ye(.42,.07,.26,0,.03,"#26221c",0,.02),Ut(.06,.06,.04,.13,.03,"#8a7a50")];if(i){s.push(Ut(.08,.46,.02,.125,.27,"#2e241a",-.12),Ut(.08,.46,.02,.125,.27,"#2e241a",.12)),s.push(Ye(.36,.2,.27,0,.27,e.vest,0,.04),Ye(.06,.32,.27,0,.38,e.vest,.13,.02),Ye(.06,.32,.27,0,.38,e.vest,-.13,.02));for(let v of[-.1,0,.1])s.push(Ye(.085,.13,.05,.155,.27,"#4a4130",v,.015),Ye(.075,.03,.055,.157,.33,"#2a251c",v,.01));s.push(Ut(.05,.1,.04,.13,.42,"#1b1b1b",.12),Ut(.01,.06,.01,.13,.5,"#111",.13)),s.push(Ye(.3,.3,.1,-.17,.3,"#3a3326",0,.04))}else{s.push(Ye(.44,.38,.29,0,.32,e.vest,0,.05),Ye(.3,.1,.3,0,.5,e.vest,0,.04));for(let v of[-.11,0,.11])s.push(Ye(.09,.12,.05,.165,.22,"#353a31",v,.015));s.push(Ut(.12,.08,.04,.165,.38,"#2a2e27",-.08),Ut(.06,.04,.01,.17,.4,"#8a8f84",.09)),s.push(Ut(.14,.12,.07,.12,.42,"#20231f",.15)),s.push(Ye(.44,.36,.05,-.15,.32,e.vest,0,.02)),s.push(Ut(.12,.1,.245,0,.1,"#3b4038",.1),Ut(.1,.08,.245,0,.16,"#24271f",-.12))}let r=Li(s),o=[Xs(.115,.135,.12,0,.12,e.skin)],a=e.hc;i?(o.push(Xs(.122,.142,.127,0,.125,a)),o.push(Ye(.15,.045,.03,.112,.15,e.skin,0,.012)),o.push(Ut(.035,.022,.01,.133,.152,"#111",-.05),Ut(.035,.022,.01,.133,.152,"#111",.05)),o.push(Ye(.19,.045,.04,.1,.225,"#23303a",0,.015),Xs(.127,.012,.128,0,.225,"#111"))):(o.push(Xs(.142,.135,.148,0,.17,a,0,!0),Xs(.148,.02,.155,0,.17,a)),o.push(Ut(.03,.05,.08,0,.21,"#1c1f1b",.145),Ut(.03,.05,.08,0,.21,"#1c1f1b",-.145)),o.push(Ut(.05,.04,.04,.1,.3,"#111")),o.push(Ye(.2,.065,.05,.11,.155,"#0e0e0e",0,.02),Ye(.16,.04,.012,.137,.156,"#33424a",0,.005)),o.push(Xs(.1,.07,.06,.09,.07,"#1d1f1d")),o.push(Qt(.032,.12,.18,.04,"#3c3f3a",8,-.07),Qt(.032,.12,.18,.04,"#3c3f3a",8,.07)),o.push(Ut(.04,.05,.03,.16,.06,"#555")));let l=Li(o),c=Li([Gf(.088,.07,.48,-.23,e.pants),Ut(.04,.12,.1,0,-.2,i?"#2b2f35":e.vest,.09),...i?[]:[Ut(.1,.16,.06,.02,-.15,"#20231f",.085)]]),h=Li([Gf(.068,.056,.42,-.2,e.pants),Ye(.15,.11,.07,.055,-.04,i?"#1f1f1f":"#191b19",0,.03),Ye(.14,.13,.26,.045,-.4,e.boots,0,.04),Ye(.15,.03,.27,.045,-.465,"#0f0f0f",0,.012)]),u=(v,g,m)=>{let y=new Hn(v,g,1,14);return y.rotateX(Math.PI/2),ai(y,m)},f=u(.066,.058,e.shirt),d=u(.055,.047,e.shirt),p=Li([Ye(.085,.09,.11,0,0,e.glove,0,.03)]);return $f[t]={torso:r,head:l,thigh:c,shin:h,upper:f,fore:d,hand:p,S:e}}function Nh(n,t=0){let e=Db(n),i=new Re,s=new Re;i.add(s);let r=new Re;r.position.y=.92,s.add(r);let o=[];for(let u of[-.11,.11]){let f=new Re;f.position.set(u,0,0),r.add(f),f.add(new zt(e.thigh,Ki));let d=new Re;d.position.y=-.46,f.add(d),d.add(new zt(e.shin,Ki)),o.push({hip:f,knee:d})}let a=new Re;r.add(a),a.add(new zt(e.torso,Ki));let l=new Re;l.position.y=.53,a.add(l),l.add(new zt(e.head,Ki));let c=new Re;c.matrixAutoUpdate=!0,a.add(c);let h=[];for(let u=0;u<2;u++){let f=new zt(e.upper,Ki),d=new zt(e.fore,Ki),p=new zt(e.hand,Ki);a.add(f,d,p),h.push({u:f,f:d,h:p})}return i.userData={body:s,hips:r,legs:o,chest:a,neck:l,gun:c,arms:h,gunId:null,phase:0,team:n,si:t},i}function Dh(n,t,e=0){let i=n.userData,s=t+":"+e;if(i.gunId!==s&&(i.gunId=s,i.gun.clear(),i.info=t?qa(t):null,i.wid=t,t)){let r=Mo(t,e);if(r.scale.setScalar(1.12),i.gun.add(r),t==="dualies"){let o=Mo(t,e);o.scale.setScalar(1.12),o.position.x=-.24,i.gun.add(o)}}}var Ha=new $,Ub=new $,Fb=new $,kb=new $,Ob=new $;function zb(n,t,e,i,s,r){Ha.subVectors(t,n);let o=Ha.length(),a=(e+i)*.995;o>a&&(Ha.multiplyScalar(a/o),o=a);let l=Ub.copy(n).add(Ha),c=(e*e-i*i+o*o)/(2*o),h=Math.sqrt(Math.max(0,e*e-c*c)),u=Fb.copy(Ha).normalize(),f=kb.copy(s).sub(n);return f.sub(Ob.copy(u).multiplyScalar(f.dot(u))).normalize(),r.copy(n).addScaledVector(u,c).addScaledVector(f,h),l}var Bb=new $(0,1,0),Bm=new ye;function Wa(n,t,e){let i=t.distanceTo(e);n.position.copy(t).add(e).multiplyScalar(.5),Bm.lookAt(t,e,Bb),n.quaternion.setFromRotationMatrix(Bm),n.scale.set(1,1,Math.max(.01,i))}var Va=new $,Gs=new $,_o=new $,Hm=new $;function Uh(n,t,e){let i=n.userData;i.phase+=e*Math.min(t.speed,6)*2.4;let s=Math.min(1,t.speed/3)*.6,r=Math.sin(i.phase)*s,o=t.duck;i.hips.position.y=.92-o*.36;let[a,l]=i.legs;a.hip.rotation.x=r-o*1.2,l.hip.rotation.x=-r-o*1.2,a.knee.rotation.x=Math.max(0,-Math.sin(i.phase)*s)*1.2+o*2,l.knee.rotation.x=Math.max(0,Math.sin(i.phase)*s)*1.2+o*2,t.onGround||(a.hip.rotation.x=-.6,l.hip.rotation.x=.2,a.knee.rotation.x=.9,l.knee.rotation.x=.4),i.chest.rotation.x=o*.2;let c=Math.max(-1.2,Math.min(1.2,t.pitch));i.neck.rotation.x=c*.55;let h=i.info,u=i.wid?ne[i.wid]?.cat||i.wid:null,f=u==="pistol"||i.wid==="zeus";if(u==="knife"||u==="grenade"||u==="c4"||i.wid==="defuser")i.gun.position.set(.27,.16,-.22),i.gun.rotation.set(c*.5+.3,0,0);else{let d=f?.42:.28;i.gun.position.set(.11,.4+Math.sin(c)*d,-Math.cos(c)*d),i.gun.rotation.set(c,0,0)}i.gun.updateMatrix();for(let d=0;d<2;d++){let p=i.arms[d],v=d===0;Va.set(v?.24:-.24,.46,0);let g=null;h&&(v?g=Gs.set(0,0,u==="knife"?.06:0).applyMatrix4(i.gun.matrix):h.fore&&u!=="knife"?g=Gs.set(0,h.fore[1]*1.12-.02,-h.fore[0]*1.12).applyMatrix4(i.gun.matrix):i.wid==="dualies"?g=Gs.set(-.24,0,0).applyMatrix4(i.gun.matrix):f&&(g=Gs.set(-.04,-.04,.02).applyMatrix4(i.gun.matrix))),g||(g=Gs.set(v?.3:-.3,.02,-.05+r*.15*(v?-1:1))),Hm.set(v?.7:-.7,-.5,.4);let m=zb(Va,g,.29,.27,Hm,_o);Wa(p.u,Va,_o),Wa(p.f,_o,m),p.h.position.copy(m),p.h.quaternion.copy(p.f.quaternion)}if(i.body.rotation.set(0,0,0),i.body.position.y=0,t.dead>0){let d=t.dead/2.5,p=t.deadDir||1,v=t.deadSide||0,g=Math.min(1,(d*2.2)**2);d*2.2>1&&(g=1+Math.sin((d*2.2-1)*9)*Math.exp(-(d*2.2-1)*5)*.08);let m=1.5*g;i.body.rotation.x=m*p,i.body.rotation.z=v*m*.35,i.body.position.y=Math.sin(m)*.12;let y=Math.min(1,d*2);a.hip.rotation.x=-.25*y*p+v*.2,l.hip.rotation.x=.35*y*p,a.knee.rotation.x=.9*y,l.knee.rotation.x=.25*y,i.neck.rotation.x=-.5*y*p,i.chest.rotation.x=.15*y*p;for(let b=0;b<2;b++){let M=i.arms[b],R=b===0?1:-1;Va.set(R*.24,.46,0),_o.set(R*(.24+.28*y),.46-.12*y,.12*y*p),Gs.set(R*(.3+.45*y),.38-.1*y,.3*y*p),Wa(M.u,Va,_o),Wa(M.f,_o,Gs),M.h.position.copy(Gs)}i.gun.visible=!1}else i.gun.visible=!0}var Vm=[[-.031,[.044,.027,.021],.0098],[-.0105,[.048,.03,.022],.0102],[.0105,[.045,.028,.021],.0097],[.03,[.036,.022,.019],.0088]],Hb=new $(0,1,0),Gm=new Nn;function Yf(n,t,e,i){let s=new $().subVectors(t,n),r=s.length(),o=new ia(e,Math.max(.001,r),3,10);return Gm.setFromUnitVectors(Hb,s.normalize()),o.applyQuaternion(Gm),o.translate((n.x+t.x)/2,(n.y+t.y)/2,(n.z+t.z)/2),ai(o,i)}function Vb(n,t,e,i,s=.06){let r=n.glove,o="#1d1e20",a="#2c2d30",l=[];l.push(Ye(.082,.03,.088,0,0,r,0,.0145)),l.push(Ye(.06,.006,.05,0,.0145,a,0,.003)),Vm.forEach(([h,,u])=>l.push(Xs(u*1.15,u*1.05,u*1.1,.04,.004,a,h))),l.push(Yf(new $(0,0,.035),new $(0,0,.06),.031,r)),Vm.forEach(([h,u,f],d)=>{let p=t[d]||[0,0,0],v=new $(h,.002,-.044),g=0,m=(d-1.5)*s*.5;for(let y=0;y<3;y++){g+=p[y];let b=new $(Math.sin(m)*Math.cos(g),-Math.sin(g),-Math.cos(m)*Math.cos(g)),M=v.clone().addScaledVector(b,u[y]);l.push(Yf(v,M,f*(1-y*.07),r)),v=M}});{let h=new $(-.036,-.01,.018),u=new $(e[0],e[1],e[2]).normalize(),f=e[3]||0,d=[.038,.03,.024],p=new $(0,1,0).cross(u).normalize();for(let v=0;v<3;v++){let g=h.clone().addScaledVector(u,d[v]);l.push(Yf(h,g,.0118-v*9e-4,r)),h=g,u.applyAxisAngle(p,-f).normalize()}}let c=Li(l);if(c.scale(.88,.88,.88),i){if(c.scale(-1,1,1),!c.index){let u=c.attributes.position.array,f=c.attributes.color.array,d=c.attributes.normal.array;for(let p=0;p<u.length;p+=9)for(let v of[u,f,d])for(let g=0;g<3;g++){let m=v[p+3+g];v[p+3+g]=v[p+6+g],v[p+6+g]=m}}c.computeVertexNormals()}return c}var dn=(n,t,e)=>[n,t,e],td={grip:{curl:[dn(.35,.55,.35),dn(1.35,1.45,.9),dn(1.4,1.5,.9),dn(1.45,1.5,.9)],thumb:[.35,-.75,-.55,.25],basis:[[0,-1,0],[1,0,0],[0,0,1]],tilt:.3,pos:[.034,-.045,.006]},fore:{curl:[dn(.5,1,.6),dn(.55,1.05,.6),dn(.6,1.1,.6),dn(.65,1.1,.6)],thumb:[-.85,-.45,.25,.1],basis:[[0,0,-1],[0,-1,0],[-1,0,0]],tilt:0,pos:[-.048,-.04,0]},cup:{curl:[dn(1,1,.6),dn(1.1,1.1,.6),dn(1.2,1.1,.6),dn(1.3,1.1,.6)],thumb:[.15,-.3,-.9,.05],basis:[[0,1,0],[-1,0,0],[0,0,1]],tilt:.3,pos:[-.046,-.06,-.012]},knife:{curl:[dn(1.25,1.35,.9),dn(1.35,1.45,.9),dn(1.4,1.5,.9),dn(1.45,1.5,.9)],thumb:[-.25,-.6,-.7,.2],basis:[[0,0,1],[1,0,0],[0,1,0]],tilt:0,pos:[.03,.04,.065]},ball:{curl:[dn(.8,.8,.5),dn(.85,.85,.5),dn(.9,.85,.5),dn(.95,.85,.5)],thumb:[.3,-.7,-.6,.2],basis:[[0,-1,0],[1,0,0],[0,0,1]],tilt:.2,pos:[.05,-.01,.01]}},Zf={};function Wm(n){if(Zf[n])return Zf[n];let t=td[n],e=new ye,[i,s,r]=t.basis.map(a=>new $(...a));e.makeBasis(i,s,r);let o=new Nn().setFromRotationMatrix(e);return t.tilt&&o.premultiply(new Nn().setFromAxisAngle(new $(1,0,0),-t.tilt)),Zf[n]=o}function Km(){let n=new Re,t=new Re;n.add(t);let e=new Re;t.add(e);let i=[];for(let s=0;s<2;s++){let r=new zt(new Fe(.08,.08,1),km),o=new zt(new Fe(.07,.07,1),km),a=new Re;r.visible=!1,n.add(r,o,a),i.push({u:r,f:o,h:a})}return n.userData={hold:t,gun:e,arms:i,id:null,team:null},n}var Kf={},Jf={};function Gb(n,t){let e=n+t;if(Kf[e])return Kf[e];let i=Qf(n,t),s=(o,a,l,c,h)=>{let u=new Hn(o,a,l,18);return u.rotateX(Math.PI/2),u.translate(0,0,-c),ai(u,h)},r=Li([s(.044,.034,1,0,i.shirt),s(.045,.043,.06,.05,i.shirt),s(.042,.04,.04,-.15,i.shirt),s(.037,.036,.1,.43,i.vest),s(.033,.032,.03,.49,"#1d1e20")]);return Kf[e]={forearm:r}}function Wb(n,t,e,i){let s=n+t+e+(i?"L":"R");if(Jf[s])return Jf[s];let r=td[e];return Jf[s]=Vb(Qf(n,t),r.curl,r.thumb,i)}var Xm=new An({vertexColors:!0,roughness:.85,metalness:0}),qm=[new An({vertexColors:!0,roughness:.36,metalness:.55}),new An({vertexColors:!0,roughness:.7,metalness:.08})];function Jm(n,t,e,i=0,s=0){let r=n.userData,o=t+e+i+":"+s;if(r.key===o)return;r.key=o,r.id=t,r.team=e,r.gun.clear();for(let f of r.arms)f.h.clear();if(!t)return;let a=ne[t]?.cat||t,l=new zt(Sr(t,s),qm);if(r.gun.add(l),r.dual=t==="dualies",r.dual){let f=new zt(Sr(t,s),qm);f.position.set(-.21,0,.02),f.rotation.y=-.08,r.gun.add(f)}r.info=qa(t),r.cat=a;let c=Gb(e,i),h=a==="grenade"||a==="c4"||t==="defuser";r.poses=a==="knife"?["knife",null]:h?["ball",null]:r.dual?["grip","grip"]:a==="pistol"||t==="zeus"?["grip","cup"]:["grip","fore"],r.arms.forEach((f,d)=>{f.f.geometry=c.forearm,f.f.material=Xm;let p=r.poses[d]||"fore";f.h.add(new zt(Wb(e,i,p,d===1),Xm))});let u=ne[t]&&ne[t].mag>1&&a!=="heavy"&&a!=="sniper"||t==="awp";if(r.mag=null,u){let f=new zt(new Ba(.026,a==="pistol"?.09:.13,.05,2,.006),new An({color:"#2a2b2d",roughness:.5,metalness:.4}));f.position.set(0,-.06,-.03),f.visible=!1,r.arms[1].h.add(f),r.mag=f}r.base=t==="dualies"?[.12,-.13,-.44]:a==="pistol"||t==="zeus"?[.125,-.12,-.42]:a==="knife"?[.15,-.15,-.34]:h?[.14,-.14,-.32]:a==="sniper"?[.15,-.17,-.44]:[.15,-.165,-.37],r.rot=a==="knife"?[.35,.55,-.25]:h?[.1,.2,0]:[.03,.06,0],n.traverse(f=>{f.renderOrder=10,f.frustumCulled=!1})}var Ws=new $,$m=new $,Ym=new $,Ga=new ye,jf=new Nn,Ih=new Nn,Xb=new $,qb=new $;function jm(n){let t=n.userData;if(!t.id)return;t.hold.updateMatrix(),t.gun.updateMatrix(),Ga.multiplyMatrices(t.hold.matrix,t.gun.matrix),Ga.decompose(qb,jf,Xb);let e=t.info||{},i=t.cat;for(let s=0;s<2;s++){let r=t.arms[s],o=s===0,a=t.poses[s],l=!!a;if(l){let h=td[a].pos.slice();!o&&a==="fore"&&(h=[-.022,(e.fore?e.fore[1]:0)-.032,-(e.fore?e.fore[0]:.3)]),o&&i==="pistol"&&(h=[.033,-.032,.026]),!o&&a==="cup"&&(h=[-.042,-.05,.012]),!o&&t.dual&&(h=[-.21+.033,-.05,.048]),Ws.set(...h).applyMatrix4(Ga),Ih.copy(jf).multiply(Wm(a));let u=t.reloadK||0;if(!o&&u>.08&&u<.94&&i!=="knife"&&!t.dual){let f=(u-.08)/.86,d=m=>m*m*(3-2*m),p=new $(...i==="pistol"?[-.01,-.13,.02]:[-.01,-.12,-.14]).applyMatrix4(Ga),v=new $(.05,-.55,.12).applyMatrix4(Ga),g=Ws.clone();f<.22?Ws.lerpVectors(g,p,d(f/.22)):f<.48?Ws.lerpVectors(p,v,d((f-.22)/.26)):f<.74?Ws.lerpVectors(v,p,d((f-.48)/.26)):Ws.lerpVectors(p,g,d((f-.74)/.26)),Ih.copy(jf).multiply(Wm("ball")),t.mag&&(t.mag.visible=f>.22&&f<.76)}else!o&&t.mag&&(t.mag.visible=!1)}r.f.visible=r.h.visible=l,l&&(r.h.position.copy(Ws),r.h.quaternion.copy(Ih),$m.set(0,0,.065).applyQuaternion(Ih).add(Ws),Ym.set(o?.24:-.26,-.42,.12),Wa(r.f,Ym,$m))}}var It=null,Tr=null,ed=null,tg=.55,gs={x:0,y:0,z:0,yaw:0};function $a(){if(It){It.state==="suspended"&&It.resume();return}try{It=new(window.AudioContext||window.webkitAudioContext),Tr=It.createGain(),Tr.gain.value=tg;let n=It.createDynamicsCompressor();n.threshold.value=-14,n.ratio.value=6,Tr.connect(n),n.connect(It.destination),ed=It.createBuffer(1,It.sampleRate*1.5,It.sampleRate);let t=ed.getChannelData(0);for(let e=0;e<t.length;e++)t[e]=Math.random()*2-1}catch{It=null}}function Fh(n){tg=n,Tr&&(Tr.gain.value=n)}function eg(n,t,e,i){gs.x=n,gs.y=t,gs.z=e,gs.yaw=i}function Ee(n,t=1,e=30){let i=It.createGain(),s=t,r=0;if(n){let o=n[0]-gs.x,a=n[1]-gs.y,l=n[2]-gs.z,c=Math.hypot(o,a,l);if(s*=1/(1+(c/e)**2*3),c>.5){let h=Math.cos(gs.yaw),u=-Math.sin(gs.yaw);r=Math.max(-1,Math.min(1,(o*h+l*u)/c))*.8}}if(s<.004)return null;if(i.gain.value=s,It.createStereoPanner){let o=It.createStereoPanner();o.pan.value=r,i.connect(o),o.connect(Tr)}else i.connect(Tr);return i}function Ie(n,t,e,i,s,r=.7,o="lowpass",a=.002,l=1){let c=It.createBufferSource();c.buffer=ed,c.playbackRate.value=.8+Math.random()*.4;let h=It.createBiquadFilter();h.type=o,h.Q.value=r,h.frequency.setValueAtTime(i,t),h.frequency.exponentialRampToValueAtTime(Math.max(30,s),t+e);let u=It.createGain();u.gain.setValueAtTime(1e-4,t),u.gain.exponentialRampToValueAtTime(l,t+a),u.gain.exponentialRampToValueAtTime(1e-4,t+e),c.connect(h),h.connect(u),u.connect(n),c.start(t,Math.random()),c.stop(t+e+.05)}function Te(n,t,e,i,s,r="sine",o=.5,a=.003){let l=It.createOscillator();l.type=r,l.frequency.setValueAtTime(i,t),s!==i&&l.frequency.exponentialRampToValueAtTime(Math.max(20,s),t+e);let c=It.createGain();c.gain.setValueAtTime(1e-4,t),c.gain.exponentialRampToValueAtTime(o,t+a),c.gain.exponentialRampToValueAtTime(1e-4,t+e),l.connect(c),c.connect(n),l.start(t),l.stop(t+e+.05)}var Qm={pistol:{f:2400,d:.18,b:160,v:.8},smg:{f:2e3,d:.16,b:130,v:.75},rifle:{f:1600,d:.26,b:95,v:1},sniper:{f:1200,d:.55,b:70,v:1.25},heavy:{f:1300,d:.32,b:80,v:1.05},equip:{f:4e3,d:.3,b:300,v:.6}};function nd(n,t,e,i){if(!It)return;let s=Qm[n]||Qm.rifle,r=It.currentTime,o=Ee(t,(e?.35:s.v)*(t?1:.6),e?12:60);if(o){if(n==="equip"){Ie(o,r,.35,6e3,3e3,2,"bandpass",.002,.7),Te(o,r,.3,90,60,"sawtooth",.4);return}if(e){Ie(o,r,.09,1800,500,1,"lowpass",.001,.9),Te(o,r,.05,300,120,"triangle",.3);return}Ie(o,r,s.d,s.f*(i?.7:1),200,.9,"lowpass",.001,1),Ie(o,r,.04,6e3,2500,.8,"highpass",.001,.45),Te(o,r,s.d*.7,s.b*1.6,s.b*.5,"sine",.9),t&&Ie(o,r+.05,s.d*2.5,700,150,.5,"lowpass",.02,.18)}}function id(n,t=1){if(!It)return;let e=Ee(n,.5*t,9);if(!e)return;let i=It.currentTime;Ie(e,i,.06,900+Math.random()*400,200,1.2,"lowpass",.002,.7),Te(e,i,.04,90,60,"sine",.25)}function ng(n){if(!It)return;let t=Ee(n,.6,10);if(!t)return;let e=It.currentTime;Ie(t,e,.1,700,120,1,"lowpass",.002,.9)}function Ya(n,t=2200,e=.4){if(!It)return;let i=Ee(n,e,8);if(!i)return;let s=It.currentTime;Ie(i,s,.03,t,t*.5,3,"bandpass",.001,.9)}function ig(n){if(!It)return;let t=It.currentTime,e=Ee(n,.45,8);e&&(Ie(e,t,.04,1500,700,3,"bandpass",.001,.8),Ie(e,t+.35,.05,2600,1300,4,"bandpass",.001,.9),Ie(e,t+.8,.05,1800,900,4,"bandpass",.001,.9))}function kh(n,t){if(!It)return;let e=It.currentTime,i=Ee(null,.45);n?Te(i,e,t?.25:.12,t?2900:1500,t?2700:900,"triangle",.5):Ie(i,e,.07,900,300,1,"lowpass",.002,.6)}function sg(){if(!It)return;let n=It.currentTime,t=Ee(null,.6);Ie(t,n,.12,600,150,1,"lowpass",.002,.9),Te(t,n,.1,140,70,"sine",.6)}function rg(){if(!It)return;let n=It.currentTime,t=Ee(null,.25);Te(t,n,.08,1300,1300,"square",.25),Te(t,n+.07,.12,1750,1750,"square",.25)}function sd(n,t){if(!It)return;let e=It.currentTime,i=Ee(n,t?1.6:1.2,t?200:70);i&&(Ie(i,e,t?2.4:1.2,1800,60,.6,"lowpass",.004,1),Te(i,e,t?1.4:.7,80,30,"sine",1))}function og(n){if(!It)return;let t=It.currentTime,e=Ee(n,1.1,50);e&&(Ie(e,t,.4,5e3,800,.7,"lowpass",.002,1),Te(e,t,.2,120,50,"sine",.8))}function ag(n){if(!It||n<.3)return;let t=It.currentTime,e=Ee(null,.12);Te(e,t,n,3200,3150,"sine",.3,.02)}function rd(n){if(!It)return;let t=It.currentTime,e=Ee(n,.7,25);e&&Ie(e,t,2.2,2500,500,.4,"highpass",.05,.5)}function lg(n){if(!It)return;let t=It.currentTime,e=Ee(n,.9,25);e&&(Ie(e,t,1.2,1200,300,.6,"lowpass",.01,.9),Ie(e,t+.05,.3,3e3,1500,2,"bandpass",.001,.5))}function cg(n){if(!It)return;let t=It.currentTime,e=Ee(n,.25,12);e&&Ie(e,t,.25,900+Math.random()*500,300,1,"lowpass",.02,.6)}function hg(n){if(!It)return;let t=It.currentTime,e=Ee(n,.5,15);e&&(Te(e,t,.06,900,500,"triangle",.4),Ie(e,t,.04,2500,1200,2,"bandpass",.001,.4))}function od(){if(!It)return;let n=It.currentTime,t=Ee(null,.4);Ie(t,n,.18,400,1600,1,"bandpass",.05,.5)}function ad(n,t){if(!It)return;let e=It.currentTime,i=Ee(n,.6,40);i&&Te(i,e,.12,t?2600:2100,t?2600:2100,"square",.2)}function ld(){if(!It)return;let n=It.currentTime,t=Ee(null,.3);Te(t,n,.06,1400+Math.random()*600,1400,"square",.15)}function cd(n){if(!It)return;let t=It.currentTime,e=Ee(n,.6,15);e&&(Ie(e,t,.2,3e3,1500,3,"bandpass",.001,.8),Te(e,t+.1,.25,600,900,"triangle",.3))}function hd(){if(!It)return;let n=It.currentTime,t=Ee(null,.35);Te(t,n,.06,900,900,"triangle",.4),Te(t,n+.05,.08,1350,1350,"triangle",.35)}function ug(){if(!It)return;let n=It.currentTime,t=Ee(null,.3);Te(t,n,.15,220,180,"square",.25)}function fg(){if(!It)return;let n=It.currentTime,t=Ee(null,.35);Ie(t,n,.08,2e3,900,2,"bandpass",.002,.8)}function dg(n){if(!It)return;let t=It.currentTime,e=Ee(null,.32);(n?[523,659,784,1047]:[440,415,392,330]).forEach((s,r)=>{Te(e,t+r*.11,.5,s,s,"triangle",.35),Te(e,t+r*.11,.5,s/2,s/2,"sawtooth",.08)})}function pg(){if(!It)return;let n=It.currentTime,t=Ee(null,.25);[392,523].forEach((e,i)=>Te(t,n+i*.12,.25,e,e,"triangle",.35))}function mg(n,t,e,i,s="triangle",r=.18){for(let o of e)Te(n,t,i,o,o,s,r,.02),Te(n,t,i,o*1.003,o*1.003,"sawtooth",r*.18,.02)}function gg(){if(!It)return;let n=It.currentTime,t=Ee(null,.22);[[220,277,330],[196,247,294],[175,220,262],[196,247,330]].forEach((i,s)=>mg(t,n+s*.55,i,.6,"triangle",.12)),[440,494,523,587,659,587,523,494].forEach((i,s)=>Te(t,n+s*.275,.25,i,i,"square",.05,.01));for(let i=0;i<8;i++)Ie(t,n+i*.275,.05,6e3,3e3,2,"highpass",.001,.15);for(let i=0;i<4;i++)Te(t,n+i*.55,.2,80,45,"sine",.5)}function xg(n){if(!It)return;let t=It.currentTime,e=Ee(null,n?.32:.2);[523,659,784,1047,988,1047,1175,1319].forEach((s,r)=>Te(e,t+r*.16,.3,s,s,"triangle",.22,.01)),[[262,330,392],[294,370,440],[330,415,494],[349,440,523]].forEach((s,r)=>mg(e,t+r*.32,s,.36,"sawtooth",.05));for(let s=0;s<8;s++)Te(e,t+s*.16,.12,65,40,"sine",.45),Ie(e,t+s*.16+.08,.06,5e3,2500,1,"highpass",.001,.2)}function yg(){if(!It)return;let n=It.currentTime,t=Ee(null,.28);Ie(t,n,.08,3e3,1500,3,"bandpass",.001,.6),Te(t,n+.05,.06,1200,1200,"square",.12),Ie(t,n+.45,.06,2500,1200,3,"bandpass",.001,.4)}function vg(n){if(!It)return;let t=It.currentTime,e=Ee(n,.5,80)||Ee(null,.3);Te(e,t,.12,1568,1568,"sine",.35),Te(e,t+.1,.18,2093,2093,"sine",.3)}var Ge=n=>document.getElementById(n),Yb=n=>String(n).replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]);function _g(n){let{G:t,store:e}=n,i={},s={t:e.get("ls:look",{t:-1}).t??-1},r=new Qn,o=document.createElement("canvas");o.width=2,o.height=256;{let S=o.getContext("2d"),C=S.createLinearGradient(0,0,0,256);C.addColorStop(0,"#0f2a6b"),C.addColorStop(.55,"#2d63d6"),C.addColorStop(1,"#7fc4ff"),S.fillStyle=C,S.fillRect(0,0,2,256)}let a=new ti(o);a.colorSpace=an,r.background=a;let l=new pn(30,innerWidth/innerHeight,.1,100);r.add(new Hi("#cfe2ff","#2a3a6a",1.4));let c=new Vi("#fff4e0",2.6);c.position.set(2,4,3),r.add(c);let h=new Vi("#7fd0ff",2.2);h.position.set(-3,2.5,-3),r.add(h);let u=new zt(new Hn(.75,.85,.18,24),new Vn({color:"#1b2f66"}));u.position.y=-.09,r.add(u);let f=new zt(new lr(.8,.025,6,40),new je({color:"#7fe0ff"}));f.rotation.x=Math.PI/2,f.position.y=.01,r.add(f);let d=new Re;r.add(d);for(let S=0;S<14;S++){let C=new zt(new Wn(.5,30),new je({color:"#9fd4ff",transparent:!0,opacity:.06,depthWrite:!1}));C.rotation.z=S/14*Math.PI,d.add(C)}d.position.set(0,1.2,-6);let p=new Re;r.add(p);let v=null,g="",m=.4,y=null,b=0;function M(){return s.t===1?"CT":"T"}function R(){let S=M(),C=S==="T"?"ak47":"m4a4";S!==g&&(g=S,p.clear(),v=Nh(S,0),Dh(v,C,0),p.add(v))}i.render=(S,C)=>{b+=C,y||(m+=C*.25),p.rotation.y=Math.PI+Math.sin(m)*.6+.35,v&&Uh(v,{speed:0,duck:0,pitch:Math.sin(b*1.3)*.04-.05,onGround:!0,dead:0},C),d.rotation.z+=C*.05;let I=innerWidth/innerHeight;l.aspect=I,l.fov=I<1?46:30,l.updateProjectionMatrix(),l.position.set(I<1?0:.15,1.15,5.2),l.lookAt(I<1?0:.15,.95,0),S.setClearColor("#0f2a6b"),S.clear(),S.render(r,l)},addEventListener("pointerdown",S=>{t.phase==="lobby"&&S.target.tagName==="CANVAS"&&(y={x:S.clientX,s:m})}),addEventListener("pointermove",S=>{y&&(m=y.s-(S.clientX-y.x)*.01)}),addEventListener("pointerup",()=>{y=null});function T(){e.set("ls:look",s),n.sendPref({t:s.t})}i.myPref=()=>({t:s.t}),i.show=()=>{Ge("lobby").hidden=!1;for(let S of document.querySelectorAll("#lobby nav button"))S.onclick=()=>{S.dataset.tab==="settings"?(S.classList.add("on"),n.openSettings(()=>A())):A()};for(let S of document.querySelectorAll("[data-pref]"))S.onclick=()=>{s.t=+S.dataset.pref,T(),A()};Ge("goBtn").onclick=()=>{n.isHost()&&x()&&n.onStart()},Ge("modeBtn").onclick=()=>{Ge("modeSel").hidden=!1,A()},Ge("modeClose").onclick=()=>{Ge("modeSel").hidden=!0},_(),A()},i.hide=()=>{Ge("lobby").hidden=!0,Ge("modeSel").hidden=!0},i.refresh=()=>{Ge("lobby").hidden||A()};function x(){let S=(n.ctx().players||[]).length;return t.cfg.bots||S>=2}function _(){let S=Ge("modes");S.innerHTML="";for(let O of[2,3,5]){let W=document.createElement("div");W.className="mode",W.dataset.s=O,W.innerHTML=`<b>${O}<i>VS</i>${O}</b><small>${O===5?"Cl\xE1sico competitivo":O===3?"Escuadra":"Duelo de parejas"}</small>`,W.onclick=()=>{n.isHost()&&(t.cfg.size=O,n.pushCfg())},S.appendChild(W)}let C=Ge("gmodes");C.innerHTML="";for(let[O,W]of Object.entries(n.MODES)){let q=document.createElement("div");q.className="gmode",q.dataset.m=O,q.innerHTML=`<b>${W.name}</b><small>${W.sub}</small>`,q.onclick=()=>{n.isHost()&&(t.cfg.mode=O,n.pushCfg())},C.appendChild(q)}let I=Ge("botsSeg");I.innerHTML="";for(let[O,W]of[[!0,"Con bots"],[!1,"Sin bots"]]){let q=document.createElement("button");q.textContent=W,q.dataset.v=O,q.onclick=()=>{n.isHost()&&(t.cfg.bots=O,n.pushCfg())},I.appendChild(q)}let w=(O,W,q)=>{O.innerHTML="";for(let[B,U]of W){let H=document.createElement("button");H.textContent=U,H.dataset.k=B,H.onclick=()=>{n.isHost()&&(t.cfg[q]=B,n.pushCfg())},O.appendChild(H)}};w(Ge("len"),Object.entries(n.LENGTHS).map(([O,W])=>[O,W.name+" \xB7 a "+W.win]),"len"),w(Ge("diff"),Object.entries(n.DIFF).map(([O,W])=>[O,W.name]),"diff");let P=Ge("maps");P.innerHTML="";for(let O of n.MAPS){let W=document.createElement("div");W.className="mcard",W.dataset.id=O.id;let q=document.createElement("canvas");q.width=200,q.height=200,W.appendChild(q);let B=document.createElement("div");B.className="mn",B.innerHTML=O.name+"<small>"+O.sub+"</small>",W.appendChild(B),W.onclick=()=>{n.isHost()&&(t.cfg.map=O.id,e.set("ls:map",O.id),n.pushCfg())},P.appendChild(W),n.mapThumb(O.id).then(U=>{if(U){let H=q.getContext("2d");H.fillStyle="#0b1530",H.fillRect(0,0,200,200),H.drawImage(U,0,0,200,200)}})}}function A(){let S=n.ctx(),C=n.isHost(),I=n.myId();for(let H of document.querySelectorAll("#lobby nav button"))H.classList.toggle("on",H.dataset.tab==="play");Ge("meName").textContent=S.me.name,Ge("roomInfo").textContent=S.online?`Sala ${S.roomCode||""} \xB7 ${(S.players||[]).length} jugador${(S.players||[]).length===1?"":"es"}`:"Pr\xE1ctica sin conexi\xF3n";for(let H of document.querySelectorAll("[data-pref]"))H.classList.toggle("on",+H.dataset.pref===s.t);let w=(S.players||[]).map(H=>({...H,pr:t.prefs[H.id]||{}})),P=[0,0],O={};for(let H of w){let E=H.pr.t??-1;(E===0||E===1)&&(O[H.id]=E,P[E]++)}for(let H of w.slice().sort((E,F)=>E.slot-F.slot))if(O[H.id]===void 0){let E=P[0]<=P[1]?0:1;O[H.id]=E,P[E]++}let W=t.cfg.bots?Math.max(P[0],P[1],t.cfg.size):Math.max(P[0],P[1]);Ge("party").innerHTML="<h4>GRUPO</h4>"+w.map(H=>`<div class="pm ${O[H.id]?"ct":"t"} ${H.id===I?"me":""}"><i></i><span>${Yb(H.name)}</span><small>${O[H.id]?"CT":"T"}${(H.pr.t??-1)===-1?" \xB7 auto":""}${H.id===S.hostId?" \xB7 host":""}</small></div>`).join("")+(t.cfg.bots?`<div class="pm bot"><i></i><span>+ ${Math.max(0,W*2-w.length)} bots</span><small>${n.DIFF[t.cfg.diff].name}</small></div>`:"");let q=n.MAPS.find(H=>H.id===t.cfg.map)||n.MAPS[0];Ge("modeTitle").textContent=`${W} VS ${W}`,Ge("modeSub").textContent=`${n.MODES[t.cfg.mode||"comp"].name} \xB7 ${q.name} \xB7 ${t.cfg.bots?"con bots":"sin bots"}${["comp","casual"].includes(t.cfg.mode||"comp")?" \xB7 "+n.LENGTHS[t.cfg.len].name:""}`,n.mapThumb(q.id).then(H=>{if(!H)return;let E=Ge("modeMap"),F=E.getContext("2d");F.fillStyle="#0b1530",F.fillRect(0,0,E.width,E.height),F.drawImage(H,0,0,E.width,E.height)}),Ge("modeBtn").textContent=C?"CAMBIAR MODO":"VER MODO";let B=Ge("goBtn"),U=x();B.disabled=!C||!U,B.innerHTML=C?U?"JUGAR":"FALTAN JUGADORES":"ESPERANDO AL HOST",Ge("goNote").textContent=!U&&C?"Sin bots hacen falta al menos 2 jugadores en la sala.":C?"":"El host elige el modo y empieza la partida.";for(let H of document.querySelectorAll("#modes .mode"))H.classList.toggle("on",+H.dataset.s===t.cfg.size);for(let H of document.querySelectorAll("#gmodes .gmode"))H.classList.toggle("on",H.dataset.m===(t.cfg.mode||"comp"));for(let H of document.querySelectorAll("#botsSeg button"))H.classList.toggle("on",String(t.cfg.bots)===H.dataset.v);for(let H of document.querySelectorAll("#len button"))H.classList.toggle("on",H.dataset.k===t.cfg.len);for(let H of document.querySelectorAll("#diff button"))H.classList.toggle("on",H.dataset.k===t.cfg.diff);for(let H of document.querySelectorAll(".mcard"))H.classList.toggle("on",H.dataset.id===t.cfg.map);Ge("modeSel").classList.toggle("ro",!C),R()}return i}var Oh="ls:cfg",Mg={sens:2.1,invert:!1,xStatic:!1,xColor:"#5dff6a",xSize:8,xGap:4,xThick:2,xDot:!1,xOutline:!0,vol:.8,quality:2},Zb=["#5dff6a","#00e5ff","#ffe14a","#ff4a4a","#ff4af0","#ffffff"];function bg(n,t){let e=Object.assign({},Mg,n.get(Oh,{})),i=n.get("ls:sens",null);i&&!n.get(Oh,null)&&(e.sens=+(i*1e3).toFixed(2));let s=n.get("ls:q",null);s!==null&&!n.get(Oh,null)&&(e.quality=s);let r=()=>{n.set(Oh,e),t&&t(e)},o=document.createElement("div");o.id="settings",o.className="fn-overlay",o.hidden=!0,document.body.appendChild(o);let a=null,l=(v,g)=>`<div class="st-row"><label>${v}</label><div class="st-c">${g}</div></div>`,c=(v,g,m,y,b=M=>M)=>`<input type="range" data-k="${v}" min="${g}" max="${m}" step="${y}" value="${e[v]}"><output data-o="${v}">${b(e[v])}</output>`,h=(v,g,m)=>`<div class="seg" data-t="${v}"><button data-v="1" class="${e[v]?"on":""}">${g}</button><button data-v="0" class="${e[v]?"":"on"}">${m}</button></div>`,u={sens:v=>(+v).toFixed(2),vol:v=>Math.round(v*100)+"%",xSize:v=>v,xGap:v=>v,xThick:v=>v};function f(){o.innerHTML=`<div class="ms-box st-box">
      <h2>CONFIGURACI\xD3N</h2>
      <div class="st-cols">
        <div>
          <h3>MOUSE</h3>
          ${l("Sensibilidad",c("sens",.4,8,.05,u.sens))}
          ${l("Invertir eje Y",h("invert","S\xED","No"))}
          <h3>COMPRA</h3>
          <h3>SONIDO</h3>
          ${l("Volumen",c("vol",0,1,.05,u.vol))}
          <h3>GR\xC1FICOS</h3>
          ${l("Sombras",`<div class="seg" data-q><button data-v="0" class="${e.quality===0?"on":""}">No</button><button data-v="1" class="${e.quality===1?"on":""}">Bajas</button><button data-v="2" class="${e.quality===2?"on":""}">Altas</button></div>`)}
          <p class="note">Las sombras se aplican al cargar la pr\xF3xima partida.</p>
        </div>
        <div>
          <h3>MIRA</h3>
          <div class="st-prev"><div id="stX" class="xh"><i class="l"></i><i class="r"></i><i class="u"></i><i class="d"></i><b></b></div></div>
          ${l("Estilo",h("xStatic","Est\xE1tica","Din\xE1mica"))}
          ${l("Color",`<div class="st-cols6">${Zb.map(v=>`<button class="sw ${e.xColor===v?"on":""}" data-c="${v}" style="background:${v}"></button>`).join("")}</div>`)}
          ${l("Largo",c("xSize",2,16,1,u.xSize))}
          ${l("Separaci\xF3n",c("xGap",0,12,1,u.xGap))}
          ${l("Grosor",c("xThick",1,5,1,u.xThick))}
          ${l("Punto central",h("xDot","S\xED","No"))}
          ${l("Contorno",h("xOutline","S\xED","No"))}
        </div>
      </div>
      <div class="st-btns"><button class="fn-play small ghost" id="stReset">VALORES POR DEFECTO</button><button class="fn-play small" id="stClose">LISTO</button></div>
    </div>`;for(let v of o.querySelectorAll("input[type=range]"))v.oninput=()=>{let g=v.dataset.k;e[g]=+v.value,o.querySelector(`[data-o="${g}"]`).textContent=(u[g]||(m=>m))(e[g]),r(),d()};for(let v of o.querySelectorAll("[data-t]"))for(let g of v.children)g.onclick=()=>{e[v.dataset.t]=g.dataset.v==="1",r(),f()};for(let v of o.querySelectorAll("[data-q] button"))v.onclick=()=>{e.quality=+v.dataset.v,r(),f()};for(let v of o.querySelectorAll("[data-c]"))v.onclick=()=>{e.xColor=v.dataset.c,r(),f()};o.querySelector("#stReset").onclick=()=>{Object.assign(e,Mg),r(),f()},o.querySelector("#stClose").onclick=()=>p(),d()}function d(){ud(o.querySelector("#stX"),e,e.xGap)}function p(){o.hidden=!0;let v=a;a=null,v&&v()}return{S:e,open(v){a=v||null,f(),o.hidden=!1},close:p,isOpen:()=>!o.hidden}}function ud(n,t,e){if(!n)return;let i=Math.round(e),s=t.xSize,r=t.xThick,o=[i,s,r,t.xColor,t.xDot,t.xOutline].join();if(n._k===o)return;n._k=o;let[a,l,c,h,u]=n.children,f=t.xOutline?"0 0 0 1px rgba(0,0,0,.7)":"none",d=-Math.floor(r/2);for(let p of[a,l,c,h])p.style.background=t.xColor,p.style.boxShadow=f,p.style.display=s>0?"":"none";a.style.cssText+=`;width:${s}px;height:${r}px;top:${d}px;left:${-(i+s)}px`,l.style.cssText+=`;width:${s}px;height:${r}px;top:${d}px;left:${i}px`,c.style.cssText+=`;width:${r}px;height:${s}px;left:${d}px;top:${-(i+s)}px`,h.style.cssText+=`;width:${r}px;height:${s}px;left:${d}px;top:${i}px`,u.style.cssText=`display:${t.xDot?"block":"none"};position:absolute;width:${r}px;height:${r}px;left:${d}px;top:${d}px;background:${t.xColor};box-shadow:${f}`}var Di=(n,t=24)=>`<svg viewBox="0 0 ${t} ${t}" aria-hidden="true">${n}</svg>`,bo={hp:Di('<path d="M9 2h6v7h7v6h-7v7H9v-7H2V9h7z"/>'),armor:Di('<path d="M12 2l8 3v6c0 5-3.5 9.5-8 11-4.5-1.5-8-6-8-11V5z"/>'),helmet:Di('<path d="M12 9.5l7 2.6v4.2c0 3.4-3 6.3-7 7.7-4-1.4-7-4.3-7-7.7v-4.2z"/><path d="M4.2 8.2C4.6 4.4 7.9 1.5 12 1.5s7.4 2.9 7.8 6.7H21v1.6H3V8.2z"/>'),bomb:Di('<rect x="3" y="7" width="18" height="12" rx="1.5"/><rect x="6" y="9.5" width="7" height="5" rx=".6" fill="#111"/><rect x="15" y="10" width="4" height="1.6" fill="#111"/><rect x="15" y="12.6" width="4" height="1.6" fill="#111"/><path d="M8 7V4.5h1.6V7z"/>'),kit:Di('<path d="M5 3h4v7.5a3 3 0 11-4 0zM15 3h4v7.5a3 3 0 11-4 0z"/><rect x="5" y="17" width="14" height="4" rx="1"/>'),crown:Di('<path d="M3 18l1.5-10 5 4.5L12 5l2.5 7.5 5-4.5L21 18z"/><rect x="3" y="19" width="18" height="2.4" rx=".6"/>'),pin:Di('<path d="M12 2a7 7 0 017 7c0 5-7 13-7 13S5 14 5 9a7 7 0 017-7zm0 4.2a2.8 2.8 0 100 5.6 2.8 2.8 0 000-5.6z"/>'),cart:Di('<path d="M2 3h3.2l2.6 11.2h10.7L21 6.5H7.1" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><circle cx="9.5" cy="19" r="1.8"/><circle cx="17" cy="19" r="1.8"/>'),gear:Di('<path d="M10.3 2h3.4l.6 2.7 2 .9 2.4-1.5 2.4 2.4-1.5 2.4.9 2 2.7.6v3.4l-2.7.6-.9 2 1.5 2.4-2.4 2.4-2.4-1.5-2 .9-.6 2.7h-3.4l-.6-2.7-2-.9-2.4 1.5-2.4-2.4 1.5-2.4-.9-2L2 13.7v-3.4l2.7-.6.9-2-1.5-2.4 2.4-2.4 2.4 1.5 2-.9zM12 8.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7z"/>'),fire:Di('<circle cx="12" cy="12" r="8.5" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="12" r="2.4"/><path d="M12 1v5M12 18v5M1 12h5M18 12h5" stroke="currentColor" stroke-width="2"/>'),skull:Di('<path d="M12 2C7 2 4 5.4 4 9.6c0 2.6 1.2 4.6 3 5.8V19h2.2v-2h1.6v2h2.4v-2h1.6v2H17v-3.6c1.8-1.2 3-3.2 3-5.8C20 5.4 17 2 12 2zM8.8 9a2 2 0 110 4 2 2 0 010-4zm6.4 0a2 2 0 110 4 2 2 0 010-4z"/>')};var Rn=null,fd={},Kb=new je({color:"#ffffff"});function Jb(n,t,e,i){t.fillStyle="#fff",t.strokeStyle="#fff",t.lineWidth=3,t.lineJoin="round";let s=e/2,r=i/2,o=(a,l)=>{t.beginPath(),t.moveTo(a-12*l,r-16*l),t.lineTo(a-5*l,r-16*l),t.lineTo(a,r-10*l),t.lineTo(a+5*l,r-16*l),t.lineTo(a+12*l,r-16*l),t.lineTo(a+15*l,r-4*l),t.lineTo(a+13*l,r+18*l),t.lineTo(a-13*l,r+18*l),t.lineTo(a-15*l,r-4*l),t.closePath(),t.fill(),t.fillStyle="#000",t.font=`bold ${10*l}px sans-serif`,t.textAlign="center",t.fillText("100",a,r+8*l),t.fillStyle="#fff"};if(n==="vest")o(s,1);else if(n==="vesthelm")o(s+10,1),t.beginPath(),t.arc(s-14,r+6,11,Math.PI,0),t.lineTo(s-1,r+8),t.lineTo(s-27,r+8),t.closePath(),t.fill();else if(n==="defuser")t.beginPath(),t.moveTo(s-20,r+8),t.quadraticCurveTo(s,r-14,s+18,r-4),t.stroke(),t.beginPath(),t.moveTo(s-20,r-6),t.quadraticCurveTo(s,r+14,s+18,r+4),t.stroke(),t.beginPath(),t.arc(s-2,r+1,3,0,7),t.fill();else if(n==="flash"||n==="smoke"||n==="decoy"||n==="incendiary"){let a=n==="smoke"?30:24,l=n==="smoke"?13:12;if(t.beginPath(),t.roundRect(s-l/2,r-a/2+4,l,a,3),t.fill(),t.fillRect(s-3,r-a/2,6,5),t.fillRect(s+2,r-a/2+1,10,3),t.fillRect(s+9,r-a/2+1,3,12),t.fillStyle="#000",n==="smoke")for(let c=0;c<3;c++)t.fillRect(s-4,r-6+c*7,8,2);n==="decoy"&&t.fillRect(s-4,r,8,3),n==="flash"&&t.fillRect(s-l/2,r+2,l,2)}else if(n==="he"){t.beginPath(),t.ellipse(s,r+4,11,13,0,0,7),t.fill(),t.fillRect(s-3,r-12,6,6),t.fillRect(s+2,r-11,9,3),t.fillRect(s+8,r-11,3,13),t.fillStyle="#000";for(let a=-1;a<=1;a++)t.fillRect(s-10,r+4+a*6,20,1.5)}else if(n==="molotov")t.beginPath(),t.moveTo(s-3,r-16),t.lineTo(s+3,r-16),t.lineTo(s+3,r-6),t.lineTo(s+9,r),t.lineTo(s+9,r+16),t.lineTo(s-9,r+16),t.lineTo(s-9,r),t.lineTo(s-3,r-6),t.closePath(),t.fill(),t.fillRect(s-5,r-22,4,7);else if(n==="c4")t.fillRect(s-20,r-9,40,18),t.fillStyle="#000",t.fillRect(s-4,r-6,14,7);else if(n==="hs")t.beginPath(),t.arc(s,r-2,10,0,7),t.fill(),t.fillStyle="#000",t.fillRect(s-7,r-4,5,4),t.fillRect(s+2,r-4,5,4),t.fillStyle="#fff",t.fillRect(s-6,r+6,12,6);else if(n==="world"||n==="skull")t.beginPath(),t.arc(s,r-3,10,0,7),t.fill(),t.fillRect(s-6,r+4,12,7);else if(n==="fire")t.beginPath(),t.moveTo(s,r-16),t.quadraticCurveTo(s+14,r,s+8,r+14),t.lineTo(s-8,r+14),t.quadraticCurveTo(s-14,r,s,r-16),t.fill();else return!1;return!0}function qs(n,t=160,e=56){let i=n+t+"x"+e;if(fd[i])return fd[i];let s=document.createElement("canvas");s.width=t,s.height=e;let r=s.getContext("2d");if(!Jb(n,r,t,e))try{Rn||(Rn={r:new mr({alpha:!0,antialias:!0,preserveDrawingBuffer:!0}),s:new Qn,c:new us(-1,1,1,-1,.01,10)},Rn.c.position.set(3,0,0),Rn.c.lookAt(0,0,0),Rn.r.setClearColor(0,0)),Rn.r.setSize(t,e);let o=Sr(n);o.computeBoundingBox();let a=o.boundingBox,l=new zt(o,Kb),c=a.max.z-a.min.z,h=a.max.y-a.min.y,u=t/e,f=Math.max(c/2/u,h/2)*1.12;Rn.c.left=-f*u,Rn.c.right=f*u,Rn.c.top=f,Rn.c.bottom=-f,Rn.c.updateProjectionMatrix(),l.position.set(0,-(a.max.y+a.min.y)/2,-(a.max.z+a.min.z)/2),Rn.s.add(l),Rn.r.render(Rn.s,Rn.c),Rn.s.remove(l),r.drawImage(Rn.r.domElement,0,0)}catch{}return fd[i]=s.toDataURL()}var _i=n=>document.getElementById(n),Ui=n=>String(n).replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]),li=(n,t)=>{n._v!==t&&(n._v=t,n.textContent=t)},wr=n=>ne[n]?ne[n].name:n==="c4"?"C4":n==="world"?"ca\xEDda":n;function dd(n){let t=n.n,e=document.createElement("canvas");e.width=t,e.height=t;let i=e.getContext("2d"),s=i.createImageData(t,t),r=s.data,o=1e9,a=-1e9;for(let h=0;h<t*t;h++)if(n.cls[0][h]===1||n.cls[0][h]===2){let u=n.top[0][h];u<o&&(o=u),u>a&&(a=u)}let l=Math.max(3,Math.min(a-o,14));for(let h=0;h<t*t;h++){let u=0,f=0,d=0,p=0,v=n.cls[0][h],g=n.top[0][h];if((v===1||v===2)&&!isNaN(g)&&g-o<l+1){let y=Math.max(0,Math.min(1,(g-o)/l));u=70+y*130,f=78+y*118,d=88+y*80,p=235,n.L>1&&!isNaN(n.top[1][h])&&(u*=.72,f*=.72,d*=.8)}else if(v===3){let y=!1;for(let b of[1,-1,t,-t]){let M=h+b;M>=0&&M<t*t&&n.cls[0][M]===1&&(y=!0)}y&&(u=f=d=22,p=230)}n.flags[h]&12&&p&&(u=u*.6+120,f=f*.6+40,d*=.6),r[h*4]=u,r[h*4+1]=f,r[h*4+2]=d,r[h*4+3]=p}i.putImageData(s,0,0);let c=n.info.zones;i.font="bold 34px Rajdhani, sans-serif",i.textAlign="center",i.textBaseline="middle";for(let h of["A","B"]){let u=c[h];u&&(i.fillStyle="#000",i.fillText(h,(u[0]+u[2])/2+1,(u[1]+u[3])/2+1),i.fillStyle="#ffd25a",i.fillText(h,(u[0]+u[2])/2,(u[1]+u[3])/2))}return e}function Sg(n,t,e,i,s,r,o){let a=n.getContext("2d"),l=n.width,c=1.25;a.clearRect(0,0,l,l),a.save(),a.beginPath(),a.rect(0,0,l,l),a.clip(),a.translate(l/2,l/2),a.rotate(i.yaw),a.scale(c,c);let h=i.x/e.cell,u=i.z/e.cell;a.drawImage(t,-h,-u);let f=(d,p,v,g=3.4)=>{a.fillStyle=v,a.beginPath(),a.arc(d/e.cell-h,p/e.cell-u,g/c,0,7),a.fill(),a.strokeStyle="#000",a.lineWidth=1/c,a.stroke()};if(r&&(r.s==="planted"||r.s==="dropped")&&(o==="T"||r.s==="planted"&&r.seen)){a.fillStyle=r.s==="planted"?"#ff4038":"#ffb03a";let d=r.x/e.cell-h,p=r.z/e.cell-u;a.fillRect(d-4/c,p-3/c,8/c,6/c)}for(let d of s){if(d.ping){a.strokeStyle=d.col,a.lineWidth=2/c,a.beginPath(),a.arc(d.x/e.cell-h,d.z/e.cell-u,6/c,0,7),a.stroke();continue}f(d.x,d.z,d.col,d.me?0:3.4)}a.restore(),a.fillStyle="#fff",a.beginPath(),a.moveTo(l/2,l/2-7),a.lineTo(l/2+5,l/2+5),a.lineTo(l/2,l/2+2),a.lineTo(l/2-5,l/2+5),a.closePath(),a.fill()}var Ht={el:{},init(){for(let[n,t]of[["hpIco","hp"],["arIco","armor"],["kitIco","kit"],["cartIco","cart"],["bombIco","bomb"]]){let e=_i(n);e&&(e.innerHTML=bo[t])}for(let n of["hud","moneyV","moneyAdd","scT","scCT","pipsT","pipsCT","clock","clockV","bombIco","feed","hpV","arV","arIco","kitV","hpB","arB","cartIco","ammo","wname","magV","resV","slots","xhair","hitmark","centerMsg","prog","progL","progB","hint","dmgDir","scope","flash","hurt","spec","banner","ban1","ban2","buyHint","zoneName","board"])this.el[n]=_i(n)},money(n){li(this.el.moneyV,String(n))},moneyDelta(n,t){if(!n)return;let e=document.createElement("div");e.className=n<0?"neg":"",e.textContent=(n>0?"+$":"-$")+Math.abs(n)+(t?"  "+t:""),this.el.moneyAdd.appendChild(e),setTimeout(()=>e.remove(),2300)},vitals(n,t,e,i){li(this.el.hpV,String(n)),li(this.el.arV,String(t));let s=e&&t>0?"h":"a";this.el.arIco._k!==s&&(this.el.arIco._k=s,this.el.arIco.innerHTML=s==="h"?bo.helmet:bo.armor),this.el.arV.parentElement.classList.toggle("none",t<=0),this.el.kitV.hidden=!i,this.el.hpV.parentElement.classList.toggle("low",n<=25),this.el.hpB.style.width=n+"%",this.el.arB.style.width=t+"%"},ammo(n,t,e,i){li(this.el.wname,n),this.el.ammo.querySelector(".nums").style.visibility=i?"":"hidden",li(this.el.magV,String(t)),li(this.el.resV,String(e)),this.el.ammo.classList.toggle("low",i&&t<=5)},clock(n,t,e){let i=Math.max(0,Math.ceil(n));li(this.el.clockV,e?"":Math.floor(i/60)+":"+String(i%60).padStart(2,"0")),this.el.clock.classList.toggle("red",t),this.el.bombIco.hidden=!e},score(n,t,e,i){li(this.el.scT,String(n)),li(this.el.scCT,String(t));let s=(r,o)=>{let a=o.map(l=>l.n+l.a).join();r._k!==a&&(r._k=a,r.innerHTML=o.map(l=>`<i class="${l.a?"":"dead"}" title="${Ui(l.n)}">${Ui(l.n.slice(0,1).toUpperCase())}</i>`).join(""))};s(this.el.pipsT,e),s(this.el.pipsCT,i)},feed(n,t,e,i,s,r,o={}){let a=document.createElement("div");r&&(a.className="mine");let l=e==="world"?qs("skull",60,40):e==="molotov"||e==="incendiary"?qs("fire",60,40):qs(e,120,40),c=(h,u)=>`<span class="fi ${u}" title="${h}">${h==="cegado"?"\u25C9":h==="sin mira"?"\u2298":h==="humo"?"\u2601":"\u27C2"}</span>`;for(a.innerHTML=(n?(o.bl?c("cegado","bl"):"")+`<span class="${n.team}">${Ui(n.name)}</span>`:"")+`<img src="${l}">`+(o.ns?c("sin mira","ns"):"")+(o.sm?c("humo","sm"):"")+(s?c("pared","wb"):"")+(i?`<img class="hs" src="${qs("hs",40,40)}">`:"")+`<span class="${t.team}">${Ui(t.name)}</span>`,this.el.feed.appendChild(a);this.el.feed.children.length>6;)this.el.feed.firstChild.remove();setTimeout(()=>a.remove(),7e3)},slots(n,t,e=[],i=0){let s=n.map(o=>o.key+o.id).join()+t+"|"+e.join()+i;if(this.el.slots._k===s)return;this.el.slots._k=s;let r=n.map(o=>`<div class="sl ${o.slot===t?"on":""}"><img src="${qs(o.id,o.id==="knife"?110:150,44)}"><b>${o.key}</b></div>`).join("");e.length&&(r+=`<div class="sl ${t==="g"?"on":""}"><div class="nades">${e.map((o,a)=>`<img class="${t==="g"&&a===i?"on":""}" src="${qs(o,44,52)}">`).join("")}</div><b>4</b></div>`),this.el.slots.innerHTML=r},showSlots(){this.el.slots.style.opacity=1,clearTimeout(this._st),this._st=setTimeout(()=>this.el.slots.style.opacity=.35,1800)},crosshair(n,t,e){let i=this.el.xhair;i._show!==t&&(i._show=t,i.style.display=t?"":"none"),t&&ud(i,e,n)},hit(n){let t=this.el.hitmark;t.classList.remove("on"),t.offsetWidth,t.classList.add("on"),t.style.filter=n?"drop-shadow(0 0 2px red) sepia(1) saturate(8) hue-rotate(-30deg)":""},center(n,t=2200){let e=this.el.centerMsg;e.textContent=n,e.style.opacity=1,clearTimeout(this._ct),t&&(this._ct=setTimeout(()=>e.style.opacity=0,t))},progress(n,t){if(t==null){this.el.prog.hidden=!0;return}this.el.prog.hidden=!1,li(this.el.progL,n),this.el.progB.style.width=(t*100).toFixed(1)+"%"},hint(n){li(this.el.hint,n||"")},dmgDir(n){let t=document.createElement("i");t.style.transform=`rotate(${n}rad) translateY(-140px)`,this.el.dmgDir.appendChild(t),setTimeout(()=>t.remove(),1500)},radio(n,t){let e=document.createElement("div");e.className="rmsg "+n.team,e.innerHTML=`<b>${Ui(n.name)}</b> <i>(radio)</i>: ${Ui(t)}`;let i=_i("radioLog");for(i.appendChild(e);i.children.length>5;)i.firstChild.remove();setTimeout(()=>e.remove(),6e3)},endScreen(n,t,e,i,s){let r=_i("endScreen");r.hidden=!1;let o=n.slice().sort((c,h)=>h.mvp-c.mvp||h.k-c.k)[0],a=c=>`<tr class="${c.t} ${c.id===t?"me":""}"><td>${Ui(c.n)}${c.id===o.id?' <b class="star">\u2605</b>':""}</td><td>${c.k}</td><td>${c.a}</td><td>${c.d}</td><td>${(c.k/Math.max(1,c.d)).toFixed(2)}</td><td>${c.adr}</td><td>${c.hs}%</td><td>${c.mvp?"\u2605"+c.mvp:""}</td></tr>`,l=c=>`<table><tr><th>Jugador</th><th>K</th><th>A</th><th>D</th><th>K/D</th><th>ADR</th><th>HS%</th><th>MVP</th></tr>${n.filter(h=>h.g===c).sort((h,u)=>u.k-h.k).map(a).join("")}</table>`;r.innerHTML=`<div class="es-box"><h2>${e<0?"EMPATE":"FIN DE LA PARTIDA"}</h2><div class="es-score"><b>${i[0]}</b> \u2013 <b>${i[1]}</b></div>
      <div class="es-mvp"><span>\u2605 MVP DE LA PARTIDA</span><b>${Ui(o.n)}</b><small>${o.k} bajas \xB7 ${o.adr} ADR \xB7 ${o.hs}% a la cabeza</small></div>${l(0)}${l(1)}</div>`,setTimeout(()=>{r.hidden=!0},11500)},banner(n,t,e){let i=this.el.banner;if(!t){i.hidden=!0;return}i.className=n||"",i.hidden=!1,li(this.el.ban1,t),li(this.el.ban2,e||"")}};function Tg(n,t){let e=[...n.players.values()],i=n.players.get(t)?.team,s=l=>`<tr class="${l.team} ${l.alive?"":"dead"} ${l.id===t?"me":""}"><td>${Ui(l.name)}${l.inv&&l.inv.c4&&i==="T"?' <i class="bico">'+bo.bomb+"</i>":""}${l.inv&&l.inv.kit&&i==="CT"&&l.team==="CT"?' <i class="bico">'+bo.kit+"</i>":""}</td><td>${l.team===i?"$"+l.money:""}</td><td>${l.k}</td><td>${l.a}</td><td>${l.d}</td><td>${l.k?Math.round((l.hsK||0)/l.k*100)+"%":"\u2014"}</td><td>${Math.round((l.dmgT||0)/Math.max(1,l.rounds||1))}</td><td>${l.mvp?"\u2605"+l.mvp:""}</td><td>${l.bot?"BOT":l.ping||"\u2014"}</td></tr>`,r=l=>{let c=e.filter(u=>u.team===l).sort((u,f)=>f.k-u.k||u.d-f.d),h=c.reduce((u,f)=>u+(f.money||0),0);return`<div class="tt ${l}">${l==="T"?"TERRORISTAS":"CONTRATERRORISTAS"}${l===i?`<small>plata del equipo $${h}</small>`:""}</div><table><tr><th>Jugador</th><th>Plata</th><th>K</th><th>A</th><th>D</th><th>HS%</th><th>ADR</th><th>MVP</th><th>Ping</th></tr>${c.map(s).join("")}</table>`},o=n.score[n.half===0?0:1],a=n.score[n.half===0?1:0];return`<div class="bh"><span>${Ui(n.mapName)} \xB7 ${n.cfg.mode&&n.cfg.mode!=="comp"?{casual:"Casual",dm:"Deathmatch",ar:"Arms Race",retake:"Retakes",practice:"Pr\xE1ctica"}[n.cfg.mode]+" \xB7 ":""}Ronda ${n.round}${n.ot?" \xB7 Tiempo extra "+n.ot:""}</span><span><b style="color:var(--t)">${o}</b> \u2013 <b style="color:var(--ct)">${a}</b></span></div>${r("T")}${r("CT")}`}var wg=()=>Fa;function Eg(n,t,e,i){let s=_i("buyCols");s.innerHTML="",Fa.forEach((r,o)=>{let a=document.createElement("div");a.className="bcol",a.dataset.c=o,a.innerHTML=`<h5><b>${o+1}</b>${r.name}</h5>`,r.items[n].forEach((l,c)=>{let h=ne[l],u=document.createElement("div");u.className="bit",u.dataset.id=l,u.innerHTML=`<span class="k">${c+1}</span><span class="n">${Ui(h.name)}</span><img src="${qs(l,200,64)}"><span class="p">$${h.price}</span>`,u.onclick=()=>e(l),u.onmouseenter=()=>i(l),u.onmouseleave=()=>i(null),a.appendChild(u)}),s.appendChild(a)})}function Za(n,t){_i("buyMoney").textContent=n.money;for(let e of document.querySelectorAll("#buyCols .bit")){let i=e.dataset.id,r=ne[i].price;i==="vesthelm"&&n.ar>=100&&!n.helm&&(r=350),e.querySelector(".p").textContent="$"+r;let o=n.inv.p===i||n.inv.s===i||i==="vest"&&n.ar>=100||i==="vesthelm"&&n.ar>=100&&n.helm||i==="defuser"&&n.inv.kit||i==="zeus"&&n.inv.zeus||n.inv.g.includes(i);e.classList.toggle("own",o),e.classList.toggle("no",n.money<r),e.classList.toggle("ok",n.money>=r&&!o)}for(let e of document.querySelectorAll("#buyCols .bcol"))e.classList.toggle("sel",+e.dataset.c===t)}function pd(n){let t=_i("buyInfo");if(!n){t.hidden=!0;return}let e=ne[n];if(e)if(t.hidden=!1,_i("biName").textContent=e.name,_i("biPrice").textContent="$"+e.price,_i("biLine").textContent=(Cm[n]||[])[0]||"",e.dmg&&e.cat!=="knife"){let i=(s,r,o)=>`<span>${s}</span><i><b style="width:${Math.min(100,r/o*100).toFixed(0)}%"></b></i>`;_i("biStats").innerHTML=i("Da\xF1o",e.dmg*e.pellets,120)+i("Cadencia",e.rpm,900)+i("Movilidad",e.speed,250)+`<span>Cargador</span><em>${e.mag} / ${e.reserve}</em>`+(e.reward?`<span>Premio</span><em>$${e.reward}</em>`:"")}else _i("biStats").innerHTML=""}var Hh=n=>(n.team==="T"?n.skT:n.skCT)|0,Ag=.0254,Rg=Math.PI/180,hn=n=>document.getElementById(n),wd=[{id:"dust2",name:"Dust II",sub:"Desierto \xB7 cl\xE1sico"},{id:"mirage",name:"Mirage",sub:"Pueblo marroqu\xED"}],qh={get(n,t){try{let e=localStorage.getItem(n);return e?JSON.parse(e):t}catch{return t}},set(n,t){try{localStorage.setItem(n,JSON.stringify(t))}catch{}}},Y={players:new Map,drops:new Map,nades:[],bomb:{state:"none",x:0,y:0,z:0,t:0},phase:"lobby",timeLeft:0,round:0,score:[0,0],half:0,time:0,cfg:{map:qh.get("ls:map","dust2"),len:"corta",size:5,bots:!0,diff:"normal",mode:"comp"},prefs:{}},tn=null,se="local",Xe=null,en=null,Vh={},Id=!1,Qe,We,ln,Er,ys,on,Oe,Ka=null,Ed=null,Ae=()=>!tn||tn.isHost||!tn.online;function $n(n,t,e){tn&&tn.online&&Arcade.send(n,t,e)}Y.emit=(n,t)=>{$n(n,t),Fd(n,t,se)};Y.emitTo=(n,t,e)=>{let i=Y.players.get(n);n===se?Fd(t,e,se):i&&!i.bot&&$n(t,e,{to:n})};Y.end=(n,t)=>{tn&&tn.online?Arcade.end({winners:n,text:t}):setTimeout(kS,500)};Y.solidAt=(n,t,e)=>ph(Y.W,n,t,e);Y.floorAt=(n,t,e)=>{let i=zs(Y.W,n,t,e);return i>-1e8?i:e-.5};var Gh=new Map;Y.setPlanting=(n,t)=>{t>0?Gh.set(n,t):Gh.delete(n)};Y.planting=n=>Gh.get(n)||0;Y.fallDamage=(n,t)=>{let e=Lf(t);e>0&&Xe&&Xe.damage(n.id,n.id,e,"leg","world",{raw:!0})};function Le(n,t){Ae()?Xe&&Xe.handle(n,t,se,{admin:Arcade.admin&&Arcade.admin.active}):$n(n,t,{to:tn.hostId})}var jb=["hit","buy","drop","take","nade","plant","defst","defx","defok","adm","fall","timeout","vote","radio","ping"],k={pl:null,slot:"s",throwT:0,throwPow:1,drawT:0,fireT:0,reloadT:0,shots:0,pp:0,py:0,scope:0,ammo:{p:[0,0],s:[0,0]},ammoW:{p:null,s:null},invV:-1,gsel:0,plantT:0,defT:0,defusing:!1,trig:!1,trig2:!1,nadeHold:0,nadeCd:0,stepT:0,deadT:0,spec:null,blind:0,blindMax:0,shake:0,bob:0,kick:0,lastSlot:"k",zeus:!1,sway:[0,0],swayT:[0,0],pickCd:0,voidSent:!1,lastMoney:null,rescope:0,knife2:!1},Ne=()=>Y.players.get(se),il=bg(qh,n=>{Fh(n.vol*.7)}),Yn=il.S;Fh(Yn.vol*.7);var cn=new Set,Un=!1,Ar=!1,Rr=!1,kg=0,md=6,Tn={mx:0,mz:0,fire:!1,look:null},_s=matchMedia("(pointer: coarse)").matches,Og=_s?Math.min(1,Yn.quality):Yn.quality;addEventListener("keydown",n=>{if(n.repeat&&!["KeyW","KeyA","KeyS","KeyD"].includes(n.code)){n.code==="Tab"&&n.preventDefault();return}if(Y.phase!=="lobby"){if(cn.add(n.code),["Tab","Space","ControlLeft","ControlRight","AltLeft","KeyB"].includes(n.code)&&n.preventDefault(),Fn){_S(n);return}Nd(n.code)}});addEventListener("beforeunload",n=>{if(Y.phase!=="lobby")return n.preventDefault(),n.returnValue="",""});function zg(){let n=document.documentElement;try{let t=n.requestFullscreen?n.requestFullscreen({navigationUI:"hide"}):null,e=()=>{try{navigator.keyboard&&navigator.keyboard.lock&&navigator.keyboard.lock().catch(()=>{})}catch{}};t&&t.then?t.then(e).catch(()=>{}):e()}catch{}}addEventListener("keydown",n=>{(n.ctrlKey||n.metaKey)&&["KeyW","KeyS","KeyD","KeyA","KeyR","KeyQ","KeyE","KeyG","KeyB","KeyF"].includes(n.code)&&Y.phase!=="lobby"&&n.preventDefault()},!0);addEventListener("keyup",n=>{cn.delete(n.code),n.code==="KeyE"&&k.defusing&&Zh()});addEventListener("blur",()=>{cn.clear(),Un=Ar=!1});addEventListener("mousedown",n=>{if($a(),!(Y.phase==="lobby"||Fn)){if(!Rr&&!_s){document.fullscreenElement||zg(),tl();return}n.button===0&&(Un=!0),n.button===2&&(Ar=!0,Dd()),n.button===1&&(n.preventDefault(),Jg())}});addEventListener("mouseup",n=>{n.button===0&&(Un=!1),n.button===2&&(Ar=!1)});addEventListener("contextmenu",n=>n.preventDefault());addEventListener("mousemove",n=>{if(!Rr||!k.pl||Y.phase==="lobby")return;let t=n.movementX,e=n.movementY,i=Math.abs(t)+Math.abs(e);if(performance.now()-kg<80||i>120&&i>md*7)return;md=md*.85+Math.min(i,150)*.15;let r=k.scope?eS():1,o=Yn.sens/1e3;Ld(t*o/r,e*o/r*(Yn.invert?-1:1))});addEventListener("wheel",n=>{Rr&&Y.phase!=="lobby"&&!Fn&&Bg(n.deltaY>0?1:-1)},{passive:!0});function Ld(n,t){let e=k.pl;e&&(e.yaw-=n,e.pitch=Math.max(-1.5,Math.min(1.5,e.pitch-t)),k.swayT[0]+=n*4,k.swayT[1]+=t*4)}function tl(){if(il.isOpen())return;let n=Qe.domElement;if(!n.requestPointerLock)return;let t=()=>{try{let e=n.requestPointerLock();e&&e.catch&&e.catch(()=>{})}catch{}};try{let e=n.requestPointerLock({unadjustedMovement:!0});e&&e.catch&&e.catch(t)}catch{t()}}document.addEventListener("pointerlockchange",()=>{Rr=document.pointerLockElement===Qe.domElement,Rr&&(kg=performance.now()),wo()});function wo(){hn("clickPlay").hidden=Rr||_s||Y.phase==="lobby"||Fn||!Id||il.isOpen()}function Nd(n){let t=Ne();if(t){if(Wh){let e=parseInt(n.replace("Digit",""),10);if(e>=1&&e<=9){let i=Zg[Wh][e-1];i&&(i.act?i.act():Le("radio",{m:i.t}))}Kg();return}if((n==="KeyZ"||n==="KeyX"||n==="KeyC")&&Y.phase!=="lobby"&&!Fn){mS(n==="KeyZ"?"z":n==="KeyX"?"x":"c");return}if(n==="KeyV"&&!Fn){Jg();return}if(n==="KeyB"){nl();return}if(n!=="Tab"){if(n==="BracketLeft"||n==="BracketRight"){Yn.sens=+Math.max(.4,Math.min(8,Yn.sens*(n==="BracketLeft"?.92:1.08))).toFixed(2),qh.set("ls:cfg",Yn),Ht.center("Sensibilidad "+Yn.sens.toFixed(2),1200);return}if(!t.alive){n==="Space"&&kd(1);return}if(n==="Digit1")Gn("p");else if(n==="Digit2")Gn("s");else if(n==="Digit3")k.slot==="k"&&t.inv.zeus?Gn("z"):(k.slot,Gn("k"));else if(n==="Digit4"){let e=t.inv.g;e.length&&(k.slot==="g"&&(k.gsel=(k.gsel+1)%e.length),Gn("g",!0))}else n==="Digit5"?Gn("c4"):n==="KeyQ"?Gn(k.lastSlot):n==="KeyR"?Hg():n==="KeyG"?nS():n==="KeyE"?Vg():n==="KeyF"&&(k.inspect=1.6)}}}function Qb(){if(!_s)return;hn("touch").hidden=!1;let n=hn("stick"),t=n.firstElementChild,e=null,i=null;n.addEventListener("touchstart",r=>{e=r.changedTouches[0].identifier;let a=n.getBoundingClientRect();i=[a.left+a.width/2,a.top+a.height/2],r.preventDefault()},{passive:!1}),addEventListener("touchmove",r=>{for(let o of r.changedTouches)if(o.identifier===e){let a=(o.clientX-i[0])/55,l=(o.clientY-i[1])/55,c=Math.hypot(a,l);c>1&&(a/=c,l/=c),Tn.mx=a,Tn.mz=l,t.style.transform=`translate(${a*40}px,${l*40}px)`}else Tn.look&&o.identifier===Tn.look.id&&(Ld((o.clientX-Tn.look.x)*.006,(o.clientY-Tn.look.y)*.006),Tn.look.x=o.clientX,Tn.look.y=o.clientY)},{passive:!0}),addEventListener("touchend",r=>{for(let o of r.changedTouches)o.identifier===e&&(e=null,Tn.mx=Tn.mz=0,t.style.transform=""),Tn.look&&o.identifier===Tn.look.id&&(Tn.look=null)}),Qe.domElement.addEventListener("touchstart",r=>{let o=r.changedTouches[0];o.clientX>innerWidth*.35&&(Tn.look={id:o.identifier,x:o.clientX,y:o.clientY}),$a()},{passive:!0});let s=(r,o,a)=>{let l=hn(r);l.addEventListener("touchstart",c=>{c.preventDefault(),o()},{passive:!1}),l.addEventListener("touchend",c=>{c.preventDefault(),a&&a()},{passive:!1})};s("tFire",()=>Un=!0,()=>Un=!1),s("tJump",()=>cn.add("Space"),()=>cn.delete("Space")),s("tDuck",()=>cn.add("ControlLeft"),()=>cn.delete("ControlLeft")),s("tReload",()=>Nd("KeyR")),s("tSwitch",()=>Bg(1)),s("tBuy",()=>nl()),s("tUse",()=>{cn.add("KeyE"),Vg()},()=>{cn.delete("KeyE"),k.defusing&&Zh()}),s("tScope",()=>Dd())}function Zs(n,t=Ne()){if(!t)return null;let e=t.inv;return n==="p"?e.p:n==="s"?e.s:n==="k"?"knife":n==="z"?e.zeus?"zeus":null:n==="g"?e.g.length?e.g[Math.min(k.gsel,e.g.length-1)]:null:n==="c4"&&e.c4?"c4":null}var Zn=()=>Zs(k.slot)||"knife";function Gn(n,t){Zs(n)&&(n===k.slot&&!t||(n!==k.slot&&(k.lastSlot=k.slot),k.slot=n,k.drawT=n==="k"?.35:.6,k.reloadT=0,k.scope=0,k.plantT=0,k.nadeHold=0,k.defusing&&Zh(),Ya(null,1400,.25),Ht.showSlots()))}function Bg(n){let t=["p","s","k","z","g","c4"].filter(i=>Zs(i));if(!t.length)return;let e=t.indexOf(k.slot);Gn(t[(e+n+t.length)%t.length])}function $h(){return Zs("p")?"p":Zs("s")?"s":"k"}function Yh(){let n=Ne();if(!(!n||n.inv.v===k.invV)){k.invV=n.inv.v;for(let t of["p","s"]){let e=n.inv[t];if(e!==k.ammoW[t]){let i=k.ammoW[t];k.ammoW[t]=e;let s=ne[e];k.ammo[t]=e?n.inv[t+"a"]?[...n.inv[t+"a"]]:[s.mag,s.reserve]:[0,0],e&&t==="p"&&n.alive&&Y.phase!=="post"&&i!==e&&Gn("p",!0)}}Zs(k.slot)||Gn($h(),!0)}}function Hg(){let n=k.slot;if(n!=="p"&&n!=="s")return;let t=ne[Zn()],e=k.ammo[n];!t.mag||e[0]>=t.mag||e[1]<=0||k.reloadT>0||k.drawT>0||(k.reloadT=t.reload,k.scope=0,ig(null))}function tS(){let n=k.slot,t=ne[Zn()],e=k.ammo[n];if(!e||!t.mag)return;let i=t.mag-e[0],s=vs("ls.ammo")?i:Math.min(i,e[1]);e[0]+=s,vs("ls.ammo")||(e[1]-=s)}var eS=()=>{let n=ne[Zn()];return n&&n.scope?n.scope[Math.max(0,k.scope-1)]:1};function Dd(){let n=Ne();if(!n||!n.alive)return;let t=Zn(),e=ne[t];if(e&&e.scope&&k.reloadT<=0&&k.drawT<=0){k.scope=(k.scope+1)%(e.scope.length+1),Ya(null,3e3,.2);return}t==="knife"&&k.fireT<=0&&k.drawT<=0&&Xg(!0),e&&e.cat==="grenade"&&!Un&&k.throwT<=0&&(k.nadeHold=.3)}function nS(){let n=Ne(),t=k.slot;if(!n.alive)return;let e=k.pl;t==="p"||t==="s"?Le("drop",{s:t,x:e.x,y:e.y,z:e.z,yaw:e.yaw,ammo:k.ammo[t]}):t==="c4"&&Le("drop",{s:"c4",x:e.x,y:e.y,z:e.z,yaw:e.yaw})}function Vg(){let n=Ne();if(!n||!n.alive||!k.pl)return;let t=k.pl,e=Y.bomb;if(n.team==="CT"&&e.state==="planted"&&Math.hypot(t.x-e.x,t.z-e.z)<1.7&&Math.abs(t.y-e.y)<1.6&&t.onGround){k.defusing||(k.defusing=!0,k.defT=0,Le("defst",{}),cd(null));return}let i=Gg();i&&Le("take",{id:i.id,swap:!0,ammo:k.ammo[Vs(i.w)===1?"p":"s"]})}function Zh(){k.defusing=!1,k.defT=0,Le("defx",{})}function Gg(){let n=k.pl,t=null,e=1e9,i=-Math.sin(n.yaw),s=-Math.cos(n.yaw);for(let r of Y.drops.values()){let o=r.x-n.x,a=r.z-n.z,l=Math.hypot(o,a);if(l>2.2||Math.abs(r.y-n.y)>1.5)continue;let c=(o*i+a*s)/Math.max(.01,l);l>.8&&c<.75||l<e&&(e=l,t=r)}return t}var gd=[];function Ud(){gd.length=0;for(let n of Y.players.values()){if(!n.alive)continue;let t=oe.hStand+(oe.hCrouch-oe.hStand)*(n.duck||0);gd.push({id:n.id,x:n.x,y:n.y,z:n.z,h:t,alive:!0})}return gd}var ja=new $;function iS(n){if(n.id===se&&!k.spec)return on&&on.userData.gun.getWorldPosition(ja),null;let t=-Math.sin(n.yaw)*Math.cos(n.pitch),e=Math.sin(n.pitch),i=-Math.cos(n.yaw)*Math.cos(n.pitch);return[n.x+t*.75+Math.cos(n.yaw)*.12,n.y+bn(n)-.18+e*.6,n.z+i*.75-Math.sin(n.yaw)*.12]}var sS=0;Y.fireBullets=(n,t,e,i,s)=>{let r=s||ne[t],o=Y.players.get(n),a=Ud(),l=[],c=[],h=new Map,u=!1;for(let v=0;v<r.pellets;v++){let g=i(Math.random),m=Th(Y.W,Y.nades,n,e[0],e[1],e[2],g[0],g[1],g[2],r,a);l.push(m.end.map(y=>+y.toFixed(2)));for(let y of m.impacts)c.push(y.map(b=>+b.toFixed(2)));if(m.hit){let y=h.get(m.hit.id)||{d:0,part:"leg",pos:m.hit.pos,wb:m.wb};y.d+=m.hit.dmg,Cg(m.hit.part)>Cg(y.part)&&(y.part=m.hit.part),h.set(m.hit.id,y),m.wb&&(u=!0)}}let f=[...h.entries()].map(([v,g])=>[v,g.pos.map(m=>+m.toFixed(2)),g.part==="head"?1:0]),d=n===se?k.blind>.6:!!(o&&o.blindT>Y.time),p=r.cat==="sniper"&&!(n===se?k.scope:o&&o.scoped);Wg(n,t,e,l,c,f,r),$n("sh",{i:n,w:t,o:e.map(v=>+v.toFixed(2)),e:l,m:c.slice(0,8),h:f});for(let[v,g]of h){let m={t:v,w:t,part:g.part,d:+g.d.toFixed(1),wb:g.wb,sm:bh(Y.nades,e[0],e[1],e[2],g.pos[0],g.pos[1],g.pos[2]),bl:d,ns:p};n===se?Le("hit",m):Ae()&&Xe&&Xe.handle("hit",m,n)}Ae()&&en&&o&&en.heard(e[0],e[1],e[2],o.team,!r.silent)};var Cg=n=>n==="head"?3:n==="chest"?2:n==="stomach"?1:0;function Wg(n,t,e,i,s,r,o){o=o||ne[t];let a=Y.players.get(n),l=n===se&&!k.spec,c=k.spec===n,h=l||c?null:iS(a||{yaw:0,pitch:0,x:e[0],y:e[1]-1.6,z:e[2]}),u=l||c?[ja.x,ja.y,ja.z]:h;if(o.cat!=="knife"){for(let d of i)(o.pellets>1?Math.random()<.35:sS++%(o.cat==="pistol"?1:2)===0)&&Oe.tracer(u,d);if(!o.silent&&o.cat!=="equip"&&Oe.flashLight(u,o.cat==="sniper"?1.5:1),a&&a.model&&(a.flashT=.05),(l||c)&&(k.flashT=.05),u&&o.cat!=="equip"){Oe.muzzleSmoke(u);let d=a?a.id===se&&k.pl?k.pl.yaw:a.yaw||0:0;t==="nova"||t==="sawedoff"||t==="mag7"||t==="awp"||t==="ssg08"||t==="r8"||Oe.shell([u[0]+Math.sin(d)*.25,u[1]-.05,u[2]+Math.cos(d)*.25],Math.cos(d),-Math.sin(d),o.pellets>1)}}let f=Y.cfg.map==="mirage"?["#d9d2c4","#e8e1d2"]:["#c9a776","#d8c09a"];for(let d of s)Oe.impact([d[0],d[1],d[2]],[d[3],d[4],d[5]],d[4]>.7?f[0]:f[1]),l&&Y.cfg.mode==="practice"&&Oe.debugBox(d);for(let d of r){let p=[d[1][0]-e[0],d[1][1]-e[1],d[1][2]-e[2]],v=Math.hypot(...p)||1,g=p.map(y=>y/v);Oe.blood(d[1],g,d[2]);let m=Ii(Y.W,d[1][0],d[1][1],d[1][2],g[0],g[1]-.3,g[2],2.5);m&&Oe.decalC([d[1][0]+g[0]*m.t,d[1][1]+(g[1]-.3)*m.t,d[1][2]+g[2]*m.t],[m.nx,m.ny,m.nz],"#6e0b0e",.35+(d[2]?.2:0))}o.cat!=="knife"&&nd(o.cat,l?null:e,!!o.silent,t==="deagle"||t==="r8")}function rS(){let n=Ne(),t=k.pl,e=Zn(),i=ne[e];if(!i||k.drawT>0||k.reloadT>0||k.fireT>0||Y.phase==="freeze"||Y.phase==="over")return;if(i.cat==="knife"){(!k.trig||i.auto)&&Xg(!1);return}if(!i.auto&&k.trig)return;let s=k.slot==="z"?null:k.slot;if(s&&k.ammo[s][0]<=0){k.trig||(Ya(null,2600,.35),k.trig=!0),Hg();return}k.trig=!0,vs("ls.aim")&&oS();let r={speed:Math.hypot(t.vx,t.vz),onGround:t.onGround,duck:t.duck,scoped:k.scope>0,shots:k.shots},o=vs("ls.norecoil")?i.spread*.2:ka(i,r),a=[t.x,t.y+bn(t),t.z],l=vs("ls.norecoil")?0:k.pp,c=vs("ls.norecoil")?0:k.py;Y.fireBullets(se,e,a,f=>vo(t.yaw,t.pitch,l,c,o,f));let[h,u]=Sh(i,k.shots,Math.random);k.pp=Math.min(i.kickCap||12,k.pp+h),k.py+=u,k.shots++,k.kick=Math.min(1,k.kick+(i.cat==="sniper"?1:i.cat==="pistol"?.6:.4)),k.fireT=60/i.rpm,s&&!vs("ls.ammo")&&k.ammo[s][0]--,e==="zeus"&&Le("drop",{s:"zeus"}),(e==="awp"||e==="ssg08")&&k.scope&&(k.rescope=k.scope,k.scope=0)}function Xg(n){let t=k.pl,e=ne.knife,i=[t.x,t.y+bn(t),t.z],s={...e,dmg:n?65:40,range:72,rangeMod:1,pellets:1},r=vo(t.yaw,t.pitch,0,0,0,Math.random),o=Th(Y.W,Y.nades,se,i[0],i[1],i[2],r[0],r[1],r[2],s,Ud());if(o.hit){let a=Y.players.get(o.hit.id);a&&Math.cos(Kh(a.yaw,t.yaw))>.5&&(o.hit.dmg=n?180:90)}if(o.hit)Le("hit",{t:o.hit.id,w:"knife",part:"chest",d:o.hit.dmg}),Oe.blood(o.hit.pos,r,!1),kh(!1);else if(o.impacts.length){let a=o.impacts[0];Oe.impact([a[0],a[1],a[2]],[a[3],a[4],a[5]]),Ya(a,1800,.5)}else od();k.fireT=n?1:.45,k.kick=1,k.knife2=n,$n("sh",{i:se,w:"knife",o:i,e:[o.end],m:[],h:o.hit?[[o.hit.id,o.hit.pos,0]]:[]})}var Kh=(n,t)=>{let e=n-t;for(;e>Math.PI;)e-=Math.PI*2;for(;e<-Math.PI;)e+=Math.PI*2;return e};function oS(){let n=Ne(),t=k.pl,e=[t.x,t.y+bn(t),t.z],i=null,s=.35;for(let r of Y.players.values()){if(!r.alive||r.team===n.team)continue;let o=r.y+(oe.hStand+(oe.hCrouch-oe.hStand)*(r.duck||0))-.12,a=r.x-e[0],l=o-e[1],c=r.z-e[2],h=Math.atan2(-a,-c),u=Math.atan2(l,Math.hypot(a,c)),f=Math.hypot(Kh(h,t.yaw),u-t.pitch);f<s&&Oa(Y.W,Y.nades,e,[r.x,r.y,r.z,1])&&(s=f,i=[h,u])}i&&(t.yaw=i[0],t.pitch=i[1])}function aS(n){let t=Ne(),e=k.pl,i=Zn();if(!ne[i]||ne[i].cat!=="grenade"||k.nadeCd>0)return;let s=[e.x,e.y+bn(e),e.z],r={i:se,ty:i,tm:t.team,o:s.map(a=>+a.toFixed(3)),yaw:+e.yaw.toFixed(4),pitch:+e.pitch.toFixed(4),v:[+e.vx.toFixed(3),+e.vz.toFixed(3)],pw:n};qg(r),$n("nd",r),Le("nade",{type:i}),k.nadeCd=.6,od();let o=t.inv.g.indexOf(i);o>=0&&(t.inv.g=t.inv.g.slice(),t.inv.g.splice(o,1)),setTimeout(()=>{k.throwT=0,Zs("g")?Gn("g",!0):Gn($h(),!0)},380)}var el=new Map;function qg(n){let t=Ff(n.ty,n.i,n.tm,n.o[0],n.o[1],n.o[2],n.yaw,n.pitch,n.v[0],n.v[1],n.pw);t.key=Math.random(),Y.nades.push(t);let e=Mo(n.ty);e.scale.setScalar(1.6),We.add(e),el.set(t,e)}var xd=[];function lS(n){xd.length=0;for(let t of Y.nades)kf(Y.W,t,n,xd);for(let t of xd)cS(t);for(let t=Y.nades.length-1;t>=0;t--){let e=Y.nades[t],i=el.get(e);if(e.state==="fly"&&!e.rest&&Math.random()<.5&&Oe.particle(e.x,e.y,e.z,0,.1,0,.03,.4,"#cfcac0",-.1,.1),i&&(e.state==="fly"||e.type==="smoke"||e.type==="decoy"?(i.position.set(e.x,e.y,e.z),i.rotation.x+=n*(e.rest?0:9),i.visible=e.state!=="done"):i.visible=!1),e.type==="decoy"&&e.state==="active"&&(e.dc=(e.dc||0)-n,e.dc<=0)){e.dc=.25+Math.random()*1.2;let s=1+Math.floor(Math.random()*3);for(let r=0;r<s;r++)setTimeout(()=>nd("rifle",[e.x,e.y,e.z]),r*110);Ae()&&en&&en.heard(e.x,e.y,e.z,e.team,!0)}(e.type==="molotov"||e.type==="incendiary")&&e.state==="active"&&!e.air&&(e.ft=(e.ft||0)-n,e.ft<=0&&(e.ft=.6,cg([e.x,e.y,e.z]))),e.state==="done"&&(Y.nades.splice(t,1),i&&(We.remove(i),el.delete(e)))}}function cS(n){let t=n.g,e=[t.x,t.y,t.z];if(n.type==="bounce"){hg(e);return}if(n.type==="det")if(t.type==="he"){Oe.explosion(e,!1),sd(e,!1);let i=zs(Y.W,t.x,t.z,t.y+.5);i>-1e8&&t.y-i<1.5&&Oe.decalC([t.x,i,t.z],[0,1,0],"#1d1a17",2.6),Yg(e,12,.5),Ae()&&Xe&&Xe.heBlast(t,(s,r)=>{let o=Math.hypot(r.x-s.x,r.y+1-s.y,r.z-s.z),a=Ii(Y.W,s.x,s.y+.15,s.z,(r.x-s.x)/o,(r.y+1-s.y-.15)/o,(r.z-s.z)/o,o);return!a||a.t>=o-.2})}else if(t.type==="flash"){if(Oe.flashPop(e),og(e),hS(t),Ae()&&en){for(let i of Y.players.values())if(i.bot&&i.alive){let s=$g(t,i.x,i.y+bn(i),i.z,i.yaw,i.pitch);s>0&&en.flash(i,s)}}}else if(t.type==="smoke"){Oe.smoke(t,Y.W),rd(e);for(let i of Y.nades)(i.type==="molotov"||i.type==="incendiary")&&i.state==="active"&&Math.hypot(i.x-t.x,i.z-t.z)<He.smokeR+1&&(i.life=Math.min(i.life,.3))}else if(t.type==="molotov"||t.type==="incendiary"){if(t.air){Oe.explosion(e,!1);return}if(Y.nades.some(s=>s.type==="smoke"&&s.state==="active"&&Math.hypot(s.x-t.x,s.z-t.z)<He.smokeR)){t.life=.05,rd(e);return}Oe.fire(t,Y.W,zs),lg(e)}else t.type==="decoy"&&(t.dc=.5)}function $g(n,t,e,i,s,r){let o=n.x-t,a=n.y-e,l=n.z-i,c=Math.hypot(o,a,l);if(c>40)return 0;let h=Ii(Y.W,t,e,i,o/c,a/c,l/c,c);if(h&&h.t<c-.25)return 0;let u=-Math.sin(s)*Math.cos(r),f=Math.sin(r),d=-Math.cos(s)*Math.cos(r),p=(o*u+a*f+l*d)/c,v=p>.6?1:p>0?.35+p:.18,g=c<10?1:Math.max(0,1-(c-10)/30);return 4.9*v*g}function hS(n){let t=Ne();if(!t||!t.alive||!k.pl)return;let e=k.pl,i=$g(n,e.x,e.y+bn(e),e.z,e.yaw,e.pitch);i>.15&&(k.blind=Math.max(k.blind,i),k.blindMax=Math.max(k.blind,1),ag(i))}function Yg(n,t,e){if(!k.pl)return;let i=Math.hypot(n[0]-k.pl.x,n[2]-k.pl.z);i<t&&(k.shake=Math.max(k.shake,e*(1-i/t)))}function Fd(n,t,e,i){switch(n){case"st":uS(t);break;case"rs":fS(t);break;case"ev":pS(t);break;case"p":{let s=Y.players.get(e);s&&e!==se&&Pg(s,t);break}case"pb":if(!Ae())for(let s of t){let r=Y.players.get(s[0]);r&&Pg(r,s.slice(1))}break;case"sh":if(t.i!==se){let s=Y.players.get(t.i);Wg(t.i,t.w,t.o,t.e,t.m||[],t.h||[]),t.w==="knife"&&t.h&&t.h.length&&kh(!1),Ae()&&en&&s&&en.heard(t.o[0],t.o[1],t.o[2],s.team,!(ne[t.w]||{}).silent)}break;case"nd":t.i!==se&&qg(t);break}}function Pg(n,t){n.nx=t[0],n.ny=t[1],n.nz=t[2],n.nyaw=t[3],n.npitch=t[4],n.duck=t[5],n.wpn=t[6],n.flags=t[7]|0,n.vx=t[8]||0,n.vz=t[9]||0,n.netT=Y.time,n.scoped=!!(n.flags&1),n.onGround=!(n.flags&2),(n.x===void 0||Math.hypot(n.x-n.nx,n.z-n.nz)>4)&&(n.x=n.nx,n.y=n.ny,n.z=n.nz,n.yaw=n.nyaw,n.pitch=n.npitch)}function uS(n){let t=Y.phase;Y.phase=n.ph,Y.timeLeft=n.tl,Y.round=n.r,Y.score=n.sc,Y.half=n.hf,Y.ot=n.ot||0,n.md&&(Y.cfg.mode=n.md);let e=n.b;if(Object.assign(Y.bomb,{state:e.s,carrier:e.c,x:e.x,y:e.y,z:e.z,t:e.t,site:e.site}),!Ae()){let r=new Set;for(let o of n.dr)r.add(o[0]),Y.drops.set(o[0],{id:o[0],w:o[1],x:o[2],y:o[3],z:o[4],ammo:o[5]});for(let o of[...Y.drops.keys()])r.has(o)||Y.drops.delete(o)}let i=new Set;for(let r of n.p){let[o,a,l,c,h,u,f,d,p,v,g,m,y,b,M,R,T,x,_,A,S,C,I]=r;i.add(o);let w=Y.players.get(o);w||(w={id:o,x:0,y:0,z:0,yaw:0,pitch:0,duck:0,h:oe.hStand},Y.players.set(o,w)),Ae()||Object.assign(w,{name:a,bot:!!l,grp:c,team:h,hp:u,ar:f,helm:!!d,money:p,alive:!!v,k:g,d:m,a:y,mvp:b,inv:M,god:!!R,skT:T,skCT:x,fin:_,arl:A,hsK:S,dmgT:C,rounds:I})}if(!Ae())for(let r of[...Y.players.keys()])i.has(r)||Y.players.delete(r);let s=Ne();s&&(k.lastMoney!==null&&s.money>k.lastMoney&&Ht.moneyDelta(s.money-k.lastMoney),k.lastMoney=s.money,Yh()),Fn&&Za(s,ji)}function fS(n){Oe.clearSmokes(),Oe.clearDecals();for(let e of el.values())We.remove(e);el.clear(),Y.nades.length=0,Gh.clear(),Ht.banner(null);for(let e of Y.players.values())e.deadT=0,e.alive=!0;let t=n.pos[se];if(t&&(k.pl=Na(t[0],t[1],t[2],t[3])),Ae()&&en){for(let e of Y.players.values())e.bot&&n.pos[e.id]&&en.place(e,n.pos[e.id]);en.roundStart()}for(let[e,i]of Object.entries(n.pos)){let s=Y.players.get(e);s&&(s.x=s.nx=i[0],s.y=s.ny=i[1],s.z=s.nz=i[2],s.yaw=s.nyaw=i[3],s.pitch=0)}Object.assign(k,{deadT:0,spec:null,blind:0,plantT:0,defusing:!1,defT:0,scope:0,reloadT:0,drawT:.4,shots:0,pp:0,py:0,voidSent:!1,nadeHold:0}),k.invV=-1,k.ammoW={p:null,s:null},Yh(),k.throwT=0,Gn($h(),!0),(n.round===1||Y.round===1)&&Ht.center("Ronda 1 \u2014 \xA1suerte!"),gg(),yS()}function dS(n){let t=Y.players.get(n);return t?t.name:"\u2014"}function pS(n){let t=Ne();switch(n.t){case"go":Ht.center(t&&t.team==="T"?"\xA1Vamos! Plant\xE1 la bomba":"\xA1Vamos! Defend\xE9 los sitios",1800),pg();break;case"hurt":{if(n.v===se){sg(),Qa=Math.min(1,Qa+n.n/60);let e=Y.players.get(n.a);if(e&&e.id!==se&&k.pl){let i=Math.atan2(-(e.x-k.pl.x),-(e.z-k.pl.z))-k.pl.yaw;Ht.dmgDir(-i)}k.pl&&n.w!=="world"&&n.w!=="molotov"&&n.w!=="incendiary"&&(k.pl.vx*=.45,k.pl.vz*=.45,k.punchHit=1.2,k.tagT=Math.min(.6,.25+n.n/120))}n.a===se&&n.v!==se&&(Ht.hit(n.hs),kh(n.hs,n.helm));break}case"kill":{let e=n.k?Y.players.get(n.k):null,i=Y.players.get(n.v);if(i)if(i.alive=!1,i.deadT=.001,e&&e!==i){let s=Math.atan2(-(e.x-i.x),-(e.z-i.z)),r=Kh(s,i.yaw||0);i.deadDir=Math.abs(r)<Math.PI/2?1:-1,i.deadSide=Math.sin(r)*.8}else i.deadDir=1,i.deadSide=Math.random()-.5;i&&Ht.feed(e,i,n.w,n.hs,n.wb,n.k===se||n.v===se,{sm:n.sm,bl:n.bl,ns:n.ns}),n.k===se&&n.v!==se&&rg(),n.v===se&&(k.deadT=.001,k.scope=0,k.defusing=!1,Ht.progress(null));break}case"end":{let e=t?t.team:"T",i=n.win===e,s={elim:"eliminaron al otro equipo",bomb:"la bomba explot\xF3",defuse:"desactivaron la bomba",time:"se termin\xF3 el tiempo"};Ht.banner(n.win,n.win==="T"?"GANAN LOS TERRORISTAS":"GANAN LOS CONTRATERRORISTAS","Porque "+s[n.reason]+(n.mvp?" \xB7 \u2605 MVP: "+dS(n.mvp):"")),dg(i),n.mvp&&setTimeout(()=>xg(n.mvp===se),900);break}case"over":{let e=n.wg,i=Ne(),s=i?i.grp:0,r=e<0?"EMPATE":e===s?"\xA1VICTORIA!":"DERROTA";Ht.banner(e<0?"":br(e,Y.half),r,`${n.score[s]} \u2013 ${n.score[1-s]} \xB7 Volviendo a la sala en ${Ve.over} s`),n.stats&&Ht.endScreen(n.stats,se,e,n.score,n.mode);let o=Ve.over;clearInterval(Bh),Bh=setInterval(()=>{if(o--,o<=0){clearInterval(Bh);return}Ht.banner(e<0?"":br(e,Y.half),r,`${n.score[s]} \u2013 ${n.score[1-s]} \xB7 Volviendo a la sala en ${o} s`)},1e3);break}case"half":Ht.center("Cambio de lado \u2014 empieza la segunda mitad",4e3);break;case"plant":Ht.center("La bomba fue plantada en el sitio "+n.site,3e3),ad([Y.bomb.x,Y.bomb.y,Y.bomb.z],!0),Y.bomb.seen=!0;break;case"defst":cd([Y.bomb.x,Y.bomb.y,Y.bomb.z]);break;case"defused":Ht.center("Desactivaron la bomba",3e3);break;case"boom":Oe.explosion([n.x,n.y,n.z],!0),sd([n.x,n.y,n.z],!0),Yg([n.x,n.y,n.z],60,1.2);break;case"bombdrop":t&&t.team==="T"&&Ht.center("Se cay\xF3 la bomba",1600);break;case"bombpick":n.p===se&&(Ht.center("Agarraste la bomba (5)",1600),fg());break;case"deny":Ht.center(n.why,1500),ug();break;case"resp":{let e=Y.players.get(n.id);if(!e)break;e.alive=!0,e.deadT=0,e.x=e.nx=n.pos[0],e.y=e.ny=n.pos[1],e.z=e.nz=n.pos[2],e.yaw=e.nyaw=n.pos[3],n.id===se&&(k.pl=Na(n.pos[0],n.pos[1],n.pos[2],n.pos[3]),Object.assign(k,{deadT:0,spec:null,blind:0,scope:0,reloadT:0,drawT:.4,shots:0,pp:0,py:0,spawnProt:1.5}),k.invV=-1,k.ammoW={p:null,s:null},Yh(),Gn($h(),!0)),Ae()&&en&&e.bot&&en.place(e,n.pos);break}case"arlvl":n.p===se&&(Ht.center("Nivel "+(n.l+1)+" de "+Mr.length+" \xB7 "+wr(Mr[n.l][t.team==="T"?0:1]),1600),hd());break;case"ot":Ht.center("TIEMPO EXTRA "+n.n+" \u2014 $10.000 para todos",4e3);break;case"timeoutReq":Ht.center("Timeout t\xE1ctico pedido por "+n.n+" ("+(n.team==="T"?"T":"CT")+") \xB7 quedan "+n.left,3500);break;case"timeout":Ht.center("TIMEOUT T\xC1CTICO \u2014 30 segundos",4e3);break;case"vote":Ht.center("Votaci\xF3n para rendirse ("+n.team+"): "+n.n+"/"+n.of+" \xB7 "+n.who,3e3);break;case"surrender":Ht.center((n.team==="T"?"Los Terroristas":"Los Contraterroristas")+" se rindieron",4e3);break;case"radio":{let e=Y.players.get(n.p);if(!e||!t||e.team!==t.team)break;Ht.radio(e,n.m),yg(),e.model&&(e.radioT=Y.time+3);break}case"ping":{if(!t||n.team!==t.team)break;gS(n);break}case"bought":hd();break}}var Bh=0,Qa=0,Zg={z:[{t:"\xA1Vamos, vamos!"},{t:"Cubrime"},{t:"Mantengan esta posici\xF3n"},{t:"Agr\xFApense"},{t:"S\xEDganme"},{t:"Tomen el punto"}],x:[{t:"Afirmativo"},{t:"Enemigo visto"},{t:"Necesito apoyo"},{t:"Sector despejado"},{t:"Estoy en posici\xF3n"},{t:"Negativo"},{t:"El enemigo est\xE1 muerto"}],c:[{t:"Voy a A"},{t:"Voy a B"},{t:"Rotemos"},{t:"Plant\xE1 la bomba / desactiv\xE1"},{t:"Ahorremos esta ronda (eco)"},{t:"Pedir timeout t\xE1ctico",act:()=>Le("timeout",{})},{t:"Votar para rendirse",act:()=>Le("vote",{k:"surrender"})}]},Wh=null,Ig=0;function mS(n){Wh=n;let t=hn("radioMenu");t.innerHTML=`<h5>${n==="z"?"\xD3RDENES":n==="x"?"RESPUESTAS":"T\xC1CTICAS"}</h5>`+Zg[n].map((e,i)=>`<div><b>${i+1}</b>${e.t}</div>`).join("")+"<small>0 \xB7 cerrar</small>",t.hidden=!1,clearTimeout(Ig),Ig=setTimeout(Kg,5e3)}function Kg(){Wh=null,hn("radioMenu").hidden=!0}var Ys=[];function Jg(){let n=Ne();if(!n||!n.alive||!k.pl)return;let t=k.pl,e=t.y+bn(t),i=-Math.sin(t.yaw)*Math.cos(t.pitch),s=Math.sin(t.pitch),r=-Math.cos(t.yaw)*Math.cos(t.pitch),o=Ii(Y.W,t.x,e,t.z,i,s,r,120),a=o?o.t-.1:40;Le("ping",{x:+(t.x+i*a).toFixed(2),y:+(e+s*a).toFixed(2),z:+(t.z+r*a).toFixed(2)})}function gS(n){let t=document.createElement("canvas");t.width=t.height=64;let e=t.getContext("2d");e.strokeStyle="#ffd34a",e.lineWidth=6,e.beginPath(),e.arc(32,26,16,0,Math.PI*2),e.stroke(),e.fillStyle="#ffd34a",e.beginPath(),e.moveTo(20,36),e.lineTo(44,36),e.lineTo(32,60),e.fill();let i=new eo(new sr({map:new ti(t),depthTest:!1,transparent:!0,sizeAttenuation:!1}));i.scale.set(.04,.04,1),i.renderOrder=30,i.position.set(n.x,n.y+.4,n.z),We.add(i),Ys.push({s:i,t:Y.time+5,x:n.x,z:n.z}),vg([n.x,n.y,n.z]);let s=Y.players.get(n.p);s&&Ht.radio(s,"marc\xF3 un lugar")}var Ji=null;function xS(){let n=Ne(),t=Zn();if(!(Y.cfg.mode==="practice"&&n&&n.alive&&k.pl&&ne[t]&&ne[t].cat==="grenade"&&k.nadeHold)){Ji&&(Ji.visible=!1);return}let i=k.pl,s=Ff(t,se,n.team,i.x,i.y+bn(i),i.z,i.yaw,i.pitch,i.vx,i.vz,k.nadeHold),r=[],o=[];for(let a=0;a<260&&s.state==="fly"&&(kf(Y.W,s,1/64,o),a%2===0&&r.push(s.x,s.y,s.z),!s.rest);a++);Ji||(Ji=new Qo(new Ue,new no({color:"#7cff8a",depthTest:!1,transparent:!0,opacity:.9})),Ji.renderOrder=26,Ji.frustumCulled=!1,We.add(Ji)),Ji.geometry.setAttribute("position",new te(r,3)),Ji.visible=!0}function yS(){for(let n of Ys)We.remove(n.s);Ys.length=0}function vS(){for(let n=Ys.length-1;n>=0;n--){let t=Ys[n];t.s.material.opacity=Math.min(1,(t.t-Y.time)/1.5),Y.time>t.t&&(We.remove(t.s),Ys.splice(n,1))}}var Fn=!1,ji=-1,Mi=null,yd={};function jg(n){if(yd[n]){let t=document.createElement("canvas");return t.width=192,t.height=48,t.getContext("2d").drawImage(yd[n],0,0),t}try{Mi||(Mi={r:new mr({antialias:!0,alpha:!0,preserveDrawingBuffer:!0}),s:new Qn,c:new us(-.62,.62,.155,-.155,.01,10)},Mi.r.setSize(192,48),Mi.s.add(new Hi("#fff","#666",2.2)),Mi.c.position.set(3,0,0),Mi.c.lookAt(0,0,0));let t=Sr(n);t.computeBoundingBox();let e=t.boundingBox,i=new zt(t,Ki),s=Math.max(.12,e.max.z-e.min.z,(e.max.y-e.min.y)*4);i.scale.setScalar(1.1/s),i.position.set(0,-(e.max.y+e.min.y)/2/s*1.1,-(e.max.z+e.min.z)/2/s*1.1),Mi.s.add(i),Mi.r.render(Mi.s,Mi.c),Mi.s.remove(i);let r=document.createElement("canvas");return r.width=192,r.height=48,r.getContext("2d").drawImage(Mi.r.domElement,0,0),yd[n]=r,jg(n)}catch{return null}}var Lg=null;function nl(n){let t=Ne();if(!t)return;if(n!==void 0?n:!Fn){if(!t.alive)return;if(!Ad()){Ht.center(Y.phase==="live"?"Se termin\xF3 el tiempo de compra":"No pod\xE9s comprar ahora",1400);return}let i="grid";Lg!==t.team+i&&(Lg=t.team+i,Eg(t.team,jg,s=>Le("buy",{i:s}),s=>pd(s),i,s=>{ji=s,Za(Ne(),ji)})),ji=-1,Za(t,ji),Fn=!0,hn("buy").hidden=!1,document.exitPointerLock&&document.exitPointerLock()}else Fn=!1,hn("buy").hidden=!0,pd(null),_s||tl();wo()}function Ad(){let n=Ne();if(!n||!n.alive||!k.pl)return!1;let t=Y.cfg.mode||"comp";if(t==="ar"||t==="retake")return!1;if(t==="practice"||t==="dm")return Y.phase==="freeze"||Y.phase==="live";let e=t==="casual"?135:Ve.live;if(!(Y.phase==="freeze"||Y.phase==="live"&&e-Y.timeLeft<Ve.buy&&Y.bomb.state!=="planted"))return!1;let s=Y.spawns?Y.spawns[n.team]:null;return!s||Math.hypot(k.pl.x-s.cx,k.pl.z-s.cz)<22||!!(gi(Y.W,k.pl.x,k.pl.z)&(n.team==="T"?16:32))}function _S(n){if(n.code==="KeyB"){nl(!1);return}if(n.code==="Escape"||n.code==="Digit0"){nl(!1);return}let t=parseInt(n.key,10);if(!(t>=1&&t<=9))return;let e=Ne(),i=wg();if(ji<0)t<=i.length&&(ji=t-1);else{let s=i[ji].items[e.team];s[t-1]&&Le("buy",{i:s[t-1]}),ji=-1}Za(e,ji)}hn("buy").addEventListener("mousedown",n=>n.stopPropagation());function MS(){Qe=new mr({antialias:!1,powerPreference:"high-performance"}),Qe.setPixelRatio(Math.min(devicePixelRatio,_s?1:1.5)),Qe.setSize(innerWidth,innerHeight),Qe.autoClear=!1,Qe.toneMapping=va,Qe.toneMappingExposure=.95,Qe.shadowMap.enabled=Og>0,Qe.shadowMap.type=yc,Qe.shadowMap.autoUpdate=!1,hn("view").appendChild(Qe.domElement),We=new Qn;{let i=new po(Qe).fromScene(new uh,.04).texture;We.environment=i,We.environmentIntensity=.18}ln=new pn(74,innerWidth/innerHeight,.05,1500),Er=new Qn,ys=new pn(66,innerWidth/innerHeight,.01,10),Er.add(new Hi("#ffffff","#555",1.3));let n=new Vi("#fff",1.1);n.position.set(1,2,1),Er.add(n),Er.environment=We.environment,Er.environmentIntensity=.7,on=Km(),Er.add(on);let t=bS();on.userData.flash=t,addEventListener("resize",()=>{Qe.setSize(innerWidth,innerHeight),ln.aspect=ys.aspect=innerWidth/innerHeight,ln.updateProjectionMatrix(),ys.updateProjectionMatrix()}),Qe.domElement.addEventListener("click",()=>{Y.phase!=="lobby"&&!Rr&&!_s&&!Fn&&tl()}),hn("clickPlay").addEventListener("click",e=>{e.target.id!=="cpSettings"&&($a(),Fh(Yn.vol*.7),tl())}),hn("cpSettings").addEventListener("click",e=>{e.stopPropagation(),il.open(()=>wo()),wo()})}function bS(){let n=new zt(new ar(1,0),new je({color:"#ffd27a",transparent:!0,opacity:.95,depthWrite:!1}));return n.scale.set(.04,.04,.12),n.visible=!1,n.renderOrder=11,on.add(n),n}async function SS(n){hn("loading").hidden=!1,hn("loadMsg").textContent="Cargando "+(wd.find(o=>o.id===n)?.name||n)+"\u2026",await new Promise(o=>setTimeout(o,30));let t=Vh[n]||(Vh[n]=await Tf(n)),e,i=null,s=()=>{let o=t.layers.map(c=>({...c,cls:c.cls.slice(),top:c.top?c.top.slice():c.top,bot:c.bot?c.bot.slice():c.bot,h:c.h?c.h.slice():c.h}));t.layers.flags&&(o.flags=t.layers.flags.slice());let a=wf(t.info,o),l=t.mesh?Am(a,yo(a),n):[];return t.mesh&&_m(a,yo(a)),{W:a,props:l}};if(Y.cfg.size===2&&["comp","casual","retake"].includes(Y.cfg.mode||"comp")){if(!t.wing){let o=s(),a=bm(o.W,yo(o.W));t.wing={W:o.W,nav:yo(o.W),r:a,props:o.props}}e=t.wing.W,Y.nav=t.wing.nav,i=t.wing.r,Y.props=t.wing.props}else{if(!t.full){let o=s();t.full={W:o.W,nav:yo(o.W),props:o.props}}e=t.full.W,Y.nav=t.full.nav,Y.props=t.full.props}for(Y.W=e,Y.info=t.info,Y.wingSite=i?i.site:null,Y.mapName=wd.find(o=>o.id===n)?.name||n;We.children.length;)We.remove(We.children[0]);Ji=null,Ys.length=0,Ka&&Ka.traverse(o=>{o.geometry&&o.geometry.dispose(),o.material&&o.material.dispose()}),Ka=(t.mesh?pm(e,t.mesh,t.info,n,Y.nav):um(e,n)).mesh,We.add(Ka),i&&i.cells.length&&Ka.add(Sm(e,i.cells)),Y.props&&Y.props.length&&We.add(Rm(Y.props)),fm(We,e,n,Og),Qe.shadowMap.needsUpdate=!0,Oe=Fm(We),Oe.floorAt=(o,a,l)=>zs(Y.W,o,a,l+.2),Ed=dd(e);for(let o of Y.players.values())o.model&&(o.model=null,o.tag=null);for(let o of To.values())We.remove(o);To.clear(),xs=null,Id=!0,hn("loading").hidden=!0}function TS(n,t){let e=document.createElement("canvas");e.width=256,e.height=48;let i=e.getContext("2d");i.font="bold 30px Rajdhani, sans-serif",i.textAlign="center",i.fillStyle="rgba(0,0,0,.5)";let s=Math.min(250,i.measureText(n).width+20);i.fillRect(128-s/2,4,s,40),i.fillStyle=t==="T"?"#f0c060":"#8ab8ff",i.fillText(n,128,35);let r=new eo(new sr({map:new ti(e),depthTest:!1,transparent:!0,sizeAttenuation:!1}));return r.scale.set(.1,.019,1),r.renderOrder=20,r}var wS=new je({color:"#ff3030",wireframe:!0,depthTest:!1,transparent:!0,opacity:.8}),Qg=new Fe(.7,1.8,.7);Qg.translate(0,.9,0);function ES(n){let t=Ne();for(let e of Y.players.values()){let i=e.id===se,s=e.team+Hh(e);if(!e.model||e.modelTeam!==s){e.model&&We.remove(e.model),e.model=Nh(e.team,Hh(e)),e.modelTeam=s,We.add(e.model),e.tag=null;let h=new zt(Qg,wS);h.renderOrder=19,h.visible=!1,e.model.add(h),e.esp=h;let u=Oe.muzzleMesh();e.model.userData.gun.add(u),e.mflash=u;let f=new zt(AS,RS);f.rotation.x=-Math.PI/2,f.position.y=.025,f.renderOrder=2,e.model.add(f),e.blob=f}let r=e.model;if(!i&&!(Ae()&&e.bot)&&e.nx!==void 0){let h=Math.min(1,n*14);e.x+=(e.nx-e.x)*h+(e.vx||0)*n*.5,e.y+=(e.ny-e.y)*h,e.z+=(e.nz-e.z)*h+(e.vz||0)*n*.5,isFinite(e.x)||(e.x=e.nx,e.y=e.ny,e.z=e.nz),e.yaw+=Kh(e.nyaw||0,e.yaw||0)*h,e.pitch=(e.pitch||0)+((e.npitch||0)-(e.pitch||0))*h}let o=i&&!k.spec&&t&&t.alive,a=i&&!k.spec&&!o&&k.deadT<.01||k.spec===e.id;if(r.visible=!a&&(e.alive||(e.deadT||0)>0),!r.visible)continue;r.userData.chest.visible=!o;let l=o?.2+Math.max(0,-(e.pitch||0))*.12:0;if(r.position.set(e.x+Math.sin(e.yaw)*l,e.y,e.z+Math.cos(e.yaw)*l),r.rotation.y=e.yaw,e.blob){let h=e.alive?0:Math.min(1,(e.deadT||0)/1.2);e.blob.scale.set(1,1+h*1.6,1),e.blob.position.z=h*.75*(e.deadDir||1),e.blob.position.x=0}e.alive||(e.deadT=Math.min(3,(e.deadT||0)+n*2.5));let c=Math.hypot(e.vx||0,e.vz||0);if(Dh(r,e.alive?e.wpn||"knife":null,Lh(e.fin,e.wpn||"knife")),e.mflash&&e.wpn){let h=qa(e.wpn);e.mflash.position.set(0,h.muzzle[1]*1.12,-h.muzzle[0]*1.12-.05),e.mflash.parent!==r.userData.gun&&r.userData.gun.add(e.mflash)}Uh(r,{speed:e.alive?c:0,duck:e.duck||0,pitch:e.pitch||0,onGround:e.onGround!==!1,dead:e.alive?0:e.deadT,deadDir:e.deadDir,deadSide:e.deadSide},n),e.mflash&&(e.flashT=(e.flashT||0)-n,e.mflash.visible=e.flashT>0,e.mflash.visible&&(e.mflash.rotation.z=Math.random()*3)),t&&e.team===t.team&&!i&&e.alive?(e.tag||(e.tag=TS(e.name,e.team),r.add(e.tag)),e.tag.visible=!0,e.tag.position.y=2.15-(e.duck||0)*.45):e.tag&&(e.tag.visible=!1),e.esp.visible=!!(vs("ls.wall")&&t&&e.team!==t.team&&e.alive),!i&&e.alive&&c>3.6&&e.onGround!==!1&&(e.stepT=(e.stepT||0)-n,e.stepT<=0&&(e.stepT=.34,id([e.x,e.y,e.z]),Y.cfg.map==="dust2"&&Oe.dust([e.x,e.y,e.z])))}}var AS=new Wn(.95,.95),RS=(()=>{let n=document.createElement("canvas");n.width=n.height=64;let t=n.getContext("2d"),e=t.createRadialGradient(32,32,2,32,32,31);e.addColorStop(0,"rgba(0,0,0,0.55)"),e.addColorStop(.6,"rgba(0,0,0,0.28)"),e.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=e,t.fillRect(0,0,64,64);let i=new ti(n);return new je({map:i,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2})})(),To=new Map,xs=null,Ja=null,zh=0;function CS(n){for(let[e,i]of Y.drops){let s=To.get(e);s||(s=Mo(i.w),s.scale.setScalar(1.2),s.rotation.set(0,Math.random()*6,Math.PI/2*.98),We.add(s),To.set(e,s)),s.position.set(i.x,i.y+.04,i.z)}for(let[e,i]of To)Y.drops.has(e)||(We.remove(i),To.delete(e));let t=Y.bomb;if(xs||(xs=Mo("c4"),xs.scale.setScalar(1.6),We.add(xs),Ja=new zt(new fi(.03,6,4),new je({color:"#ff2020"})),Ja.position.set(-.05,.05,.03),xs.add(Ja)),xs.visible=t.state==="planted"||t.state==="dropped"||t.state==="defused",xs.visible&&xs.position.set(t.x,t.y+.05,t.z),t.state==="planted"){let e=Math.max(0,t.t),i=Math.max(.12,Math.min(1,e/35));zh-=n,Ja.visible=zh>i*.6,zh<=0&&(zh=i,ad([t.x,t.y,t.z],e<10))}else Ja.visible=!1}var vd=0,_d=0;function PS(n){let t=Ne();if(!t||!k.pl)return;let e=k.pl;if(Yh(),!t.alive){k.deadT+=n;return}k.drawT-=n,k.fireT-=n,k.nadeCd-=n,k.pickCd-=n,k.inspect&&(k.inspect=Math.max(0,k.inspect-n)),k.reloadT>0&&(k.reloadT-=n,k.reloadT<=0&&tS()),k.rescope&&k.fireT<=0&&((Zn()==="awp"||Zn()==="ssg08")&&(k.scope=k.rescope),k.rescope=0);let i=Zn(),s=ne[i]||ne.knife,r=Y.phase==="freeze"||k.plantT>0||k.defusing||Fn&&!1,o=0,a=0;Fn||(cn.has("KeyW")&&(o+=1),cn.has("KeyS")&&(o-=1),cn.has("KeyD")&&(a+=1),cn.has("KeyA")&&(a-=1)),(Tn.mx||Tn.mz)&&(o=-Tn.mz,a=Tn.mx);let l={f:r?0:o,s:r?0:a,jump:!r&&cn.has("Space"),crouch:cn.has("ControlLeft")||cn.has("ControlRight"),walk:cn.has("ShiftLeft")||cn.has("ShiftRight")},c=(s.speed||250)*Ag*(k.scope&&s.cat==="sniper"?.5:k.scope?.7:1);k.tagT>0&&(k.tagT-=n,c*=.45+.55*(1-Math.min(1,k.tagT/.4))),(i==="c4"||ne[i]?.cat==="grenade")&&(c=245*Ag),vs("ls.speed")&&(c*=1.6);let h=n,u=0,f=e.onGround;for(;h>1e-6;){let m=Math.min(h,.008333333333333333),y=yh(Y.W,e,l,m,c);y&&(u=y),h-=m}for(let m of Y.players.values()){if(m.id===se||!m.alive||Math.abs(m.y-e.y)>1.6)continue;let y=e.x-m.x,b=e.z-m.z,M=Math.hypot(y,b);if(M<.62&&M>1e-4){let R=(.62-M)/M,T=e.x+y*R,x=e.z+b*R;qn(Y.W,T,x,e.y,e.h,oe.r)||(e.x=T,e.z=x)}}if(u){let m=Lf(u);m>0&&Le("fall",{d:m}),ng(null)}e.y<-20&&!k.voidSent&&(k.voidSent=!0,Le("fall",{d:999}));let d=Math.hypot(e.vx,e.vz);if(e.onGround&&d>3.6&&(k.stepT-=n,k.stepT<=0&&(k.stepT=.36,id(null,.45))),k.bob+=n*d*1.4*(e.onGround?1:0),t.x=e.x,t.y=e.y,t.z=e.z,t.yaw=e.yaw,t.pitch=e.pitch,t.duck=e.duck,t.vx=e.vx,t.vz=e.vz,t.onGround=e.onGround,t.wpn=i,t.h=e.h,t.scoped=k.scope>0,k.fireT<-.06&&(k.pp=Math.max(0,k.pp-(s.recover||9)*n*(1+k.pp*.15)),k.py*=Math.exp(-n*7),k.pp<.4&&(k.shots=0)),Un||(k.trig=!1),(ne[i]||{}).cat==="grenade"){if(Un&&!k.nadeHold&&k.throwT<=0&&(k.nadeHold=Ar?.6:1),Un&&Ar&&k.nadeHold&&(k.nadeHold=.6),k.nadeHold&&!Un&&!Ar&&k.drawT<=0&&k.throwT<=0&&(Y.phase==="freeze"?(Ht.center("Esper\xE1 a que empiece la ronda",1e3),k.nadeHold=0):(k.throwT=.45,k.throwPow=k.nadeHold,k.nadeHold=0)),k.throwT>0){let m=k.throwT;k.throwT-=n,m>.3&&k.throwT<=.3&&aS(k.throwPow||1)}}else if(i==="c4"){let m=gi(Y.W,e.x,e.z)&12;if(Un&&m&&e.onGround&&Y.phase==="live"&&k.drawT<=0){k.plantT||ld();let y=k.plantT;k.plantT+=n,Math.floor(y*4)!==Math.floor(k.plantT*4)&&ld(),Ht.progress("Plantando la bomba\u2026",k.plantT/Ve.plant),k.plantT>=Ve.plant&&(k.plantT=0,Ht.progress(null),Le("plant",{x:e.x,y:e.y,z:e.z}))}else k.plantT&&Ht.progress(null),k.plantT=0,Un&&!m&&!k.trig&&(Ht.center("Ten\xE9s que estar en un sitio de bomba (A o B)",1300),k.trig=!0)}else Un&&!Fn&&rS();if(k.defusing){let m=Y.bomb;if(m.state!=="planted"||!cn.has("KeyE")||Math.hypot(e.x-m.x,e.z-m.z)>1.9)Zh();else{k.defT+=n;let y=t.inv.kit?Ve.kit:Ve.defuse;Ht.progress(t.inv.kit?"Desactivando (con kit)\u2026":"Desactivando\u2026",k.defT/y),k.defT>=y&&(Le("defok",{}),k.defusing=!1,Ht.progress(null))}}else k.plantT||Ht.progress(null);if(k.pickCd<=0){for(let y of Y.drops.values())if(!(Math.hypot(y.x-e.x,y.z-e.z)>.9||Math.abs(y.y-e.y)>1.2)&&(y.w==="defuser"?t.team==="CT"&&!t.inv.kit:!Zs(Vs(y.w)===1?"p":"s"))){Le("take",{id:y.id}),k.pickCd=.6;break}let m=Y.bomb;t.team==="T"&&m.state==="dropped"&&Math.hypot(m.x-e.x,m.z-e.z)<1&&Math.abs(m.y-e.y)<1.4&&(Le("take",{id:"c4"}),k.pickCd=.8)}let v="",g=Gg();g&&(v="E \xB7 agarrar "+wr(g.w)),t.team==="CT"&&Y.bomb.state==="planted"&&Math.hypot(e.x-Y.bomb.x,e.z-Y.bomb.z)<1.7&&!k.defusing&&(v="Manten\xE9 E para desactivar"),i==="c4"&&gi(Y.W,e.x,e.z)&12&&!k.plantT&&Y.phase==="live"&&(v="Manten\xE9 clic para plantar"),Ht.hint(v),vd-=n,vd<=0&&(vd=.05,$n("p",[+e.x.toFixed(2),+e.y.toFixed(2),+e.z.toFixed(2),+e.yaw.toFixed(3),+e.pitch.toFixed(3),+e.duck.toFixed(2),i,(k.scope?1:0)|(e.onGround?0:2),+e.vx.toFixed(2),+e.vz.toFixed(2)],{volatile:!0}))}function IS(n){if(_d-=n,_d>0)return;_d=.05;let t=[];for(let e of Y.players.values())e.bot&&e.pl&&t.push([e.id,+e.x.toFixed(2),+e.y.toFixed(2),+e.z.toFixed(2),+e.yaw.toFixed(3),+e.pitch.toFixed(3),+(e.duck||0).toFixed(2),e.wpn||"knife",(e.scoped?1:0)|(e.onGround?0:2),+(e.vx||0).toFixed(2),+(e.vz||0).toFixed(2)]);t.length&&$n("pb",t,{volatile:!0})}var Ng=new ui(0,0,0,"YXZ"),$s=[];function kd(n){let t=Ne();if(!t)return;if($s=[...Y.players.values()].filter(i=>i.alive&&i.team===t.team),$s.length||($s=[...Y.players.values()].filter(i=>i.alive)),!$s.length){k.spec=null;return}let e=$s.findIndex(i=>i.id===k.spec);k.spec=$s[(e+n+$s.length)%$s.length].id}function LS(n){let t=Ne();if(!t||!k.pl)return;let e,i,s,r,o,a=Zn(),l=t.team,c=k.scope,h=Hh(t),u=Lh(t.fin,Zn());if(t.alive){let y=k.pl;e=y.x,i=y.y+bn(y),s=y.z,r=y.yaw-k.py*.5*Rg,o=y.pitch+k.pp*.5*Rg+(k.punchHit||0)*.02,k.spec=null}else if(k.deadT<2.2||!Y.players.size){let y=k.pl,b=Math.min(1,k.deadT/1.2);r=y.yaw+k.deadT*.3,o=-.35*b+y.pitch*(1-b),e=y.x+Math.sin(r)*2.6*b,s=y.z+Math.cos(r)*2.6*b,i=y.y+bn(y)*(1-b)+1.6*b,a=null}else{let y=k.spec&&Y.players.get(k.spec);(!y||!y.alive)&&kd(1);let b=k.spec&&Y.players.get(k.spec);if(b)e=b.x,i=b.y+bn({duck:b.duck||0}),s=b.z,r=b.yaw,o=b.pitch,a=b.wpn||"knife",l=b.team,c=b.scoped?1:0,h=Hh(b),u=Lh(b.fin,a);else{let M=k.pl;e=M.x,i=M.y+3,s=M.z,r=M.yaw,o=-.5,a=null}}k.punchHit=Math.max(0,(k.punchHit||0)-n*6),k.shake>0&&(k.shake=Math.max(0,k.shake-n*1.5),e+=(Math.random()-.5)*k.shake*.12,i+=(Math.random()-.5)*k.shake*.12),ln.position.set(e,i,s),Ng.set(o,r,0),ln.quaternion.setFromEuler(Ng);let f=ne[a],p=74/(c&&f&&f.scope?f.scope[Math.max(0,c-1)]:1);Math.abs(ln.fov-p)>.01&&(ln.fov=p,ln.updateProjectionMatrix()),eg(e,i,s,r);let v=c&&f&&f.cat==="sniper";if(on.visible=!!a&&!v&&(t.alive||k.spec),on.visible){Jm(on,a,l,h,u);let y=on.userData,b=y.base||[.13,-.14,-.36];k.sway[0]+=(k.swayT[0]-k.sway[0])*Math.min(1,n*10),k.sway[1]+=(k.swayT[1]-k.sway[1])*Math.min(1,n*10),k.swayT[0]*=Math.exp(-n*10),k.swayT[1]*=Math.exp(-n*10),k.kick=Math.max(0,k.kick-n*7);let M=t.alive?k.bob:Y.time*2,R=t.alive?Math.min(1,Math.hypot(k.pl.vx,k.pl.vz)/5):.3,T=b[0]+Math.cos(M)*.008*R+k.sway[0]*.02,x=b[1]+Math.abs(Math.sin(M))*.01*R-k.sway[1]*.02,_=b[2]+k.kick*.045,A=k.kick*.12,S=0,C=0;if(on.userData.reloadK=0,t.alive&&k.reloadT>0){let O=ne[Zn()],W=1-k.reloadT/O.reload,q=Math.sin(Math.min(1,W)*Math.PI);if(A+=q*.25,x-=q*.03,C+=q*.55,T-=q*.03,W>.86){let B=Math.sin((W-.86)/.14*Math.PI);_+=B*.03,A-=B*.15}on.userData.reloadK=W}if(t.alive&&k.drawT>0){let O=Math.max(0,k.drawT)/.6;x-=O*.25,A-=O*.8}if(t.alive&&k.inspect){let O=Math.sin(Math.min(1,k.inspect/1.6)*Math.PI);S+=O*1.1,C+=O*.5,T-=O*.08}if(a==="knife"&&t.alive&&k.fireT>0){let O=k.fireT/(k.knife2?1:.45);S-=Math.sin(O*Math.PI)*.9,_-=Math.sin(O*Math.PI)*.08}if((k.plantT>0||k.defusing)&&(x-=.08,A-=.7),t.alive&&k.nadeHold&&(x-=.03,_+=.06,A+=.25),t.alive&&k.throwT>0){let O=1-k.throwT/.45,W=Math.sin(Math.min(1,O)*Math.PI);_-=W*.25,x+=W*.12,A-=W*1.2,O>.4&&(on.userData.gun.visible=!1)}else on.userData.gun.visible=!0;let I=y.rot||[0,0,0];if(y.hold.position.set(T,x,_),y.hold.rotation.set(A+I[0],S+I[1],C+I[2]),jm(on),on.position.copy(ln.position),on.quaternion.copy(ln.quaternion),ys.position.copy(ln.position),ys.quaternion.copy(ln.quaternion),window.__ls&&window.__ls.vmView){let O=window.__ls.vmView;on.updateMatrixWorld(),ys.position.copy(on.localToWorld(new $(O[0],O[1],O[2]))),ys.up.copy(ln.up),ys.lookAt(on.localToWorld(new $(O[3],O[4],O[5])))}let w=y.flash;k.flashT=(k.flashT||0)-n;let P=qa(a);w&&(w.visible=k.flashT>0&&f&&!f.silent&&f.cat!=="knife",w.visible&&(w.position.set(0,P.muzzle[1],-P.muzzle[0]-.05).applyMatrix4(y.hold.matrix),w.quaternion.setFromEuler(y.hold.rotation),w.rotateZ(Math.random()*3))),y.gun.updateWorldMatrix(!0,!1),ja.set(0,P.muzzle[1],-P.muzzle[0]).applyMatrix4(y.gun.matrixWorld)}hn("scope").hidden=!v;let g=!v&&(t.alive||k.spec)&&!(f&&f.cat==="sniper"),m=Yn.xGap;!Yn.xStatic&&t.alive&&f&&f.dmg&&(m=Yn.xGap+Math.max(0,ka(f,{speed:Math.hypot(k.pl.vx,k.pl.vz),onGround:k.pl.onGround,duck:k.pl.duck,scoped:k.scope>0,shots:k.shots})*900-1)),Ht.crosshair(Math.min(60,m),g,Yn)}var Md=0,bd=0;function NS(n){let t=Ne();if(!t||(Qa=Math.max(0,Qa-n*1.4),Ht.el.hurt.style.opacity=Math.max(Qa,t.alive&&t.hp<=30?.22+.14*Math.sin(Y.time*4):0).toFixed(2),k.blind=Math.max(0,k.blind-n),Ht.el.flash.style.opacity=Math.min(1,k.blind/1.6).toFixed(3),Md-=n,Md>0))return;Md=.05;let e=k.spec&&!t.alive?Y.players.get(k.spec):t;Ht.money(t.money),Ht.vitals(e?e.hp:0,e?e.ar:0,e&&e.helm,e&&e.team==="CT"&&e.inv&&e.inv.kit);let i=t.alive?Zn():e&&e.wpn,s=ne[i],r=k.slot,o=r==="p"||r==="s"?k.ammo[r]:null;Ht.ammo(i?wr(i):"",o?o[0]:0,o?o[1]:0,t.alive&&!!o&&!!s&&!!s.mag);let a=[];t.alive&&(t.inv.p&&a.push({key:1,slot:"p",id:t.inv.p,name:wr(t.inv.p)}),t.inv.s&&a.push({key:2,slot:"s",id:t.inv.s,name:wr(t.inv.s)}),a.push({key:3,slot:"k",id:"knife",name:"Cuchillo"}),t.inv.zeus&&a.push({key:3,slot:"z",id:"zeus",name:"Zeus x27"}),t.inv.g.length&&a.push({key:4,slot:"g",id:t.inv.g.join(),name:t.inv.g.map(wr).join(" \xB7 ")}),t.inv.c4&&a.push({key:5,slot:"c4",id:"c4",name:"C4"}),t.inv.kit&&a.push({key:"",slot:"kit",id:"kit",name:"Kit de desactivaci\xF3n"})),Ht.slots(a.filter(y=>y.slot!=="g"&&y.slot!=="kit"),k.slot,t.alive?t.inv.g:[],k.gsel);let l=Y.bomb.state==="planted";Ht.clock(Y.timeLeft,l||Y.phase==="live"&&Y.timeLeft<10,l);let c=Y.score[Y.half],h=Y.score[1-Y.half],u=0,f=0,d=0,p=0;for(let y of Y.players.values())y.team==="T"?(f++,y.alive&&u++):(p++,y.alive&&d++);let v=y=>[...Y.players.values()].filter(b=>b.team===y).map(b=>({n:b.name,a:b.alive}));Ht.score(c,h,v("T"),v("CT"));{let y=Ad();Ht.el.buyHint.hidden=!(y&&!Fn),Ht.el.cartIco.classList.toggle("on",y)}if(Fn)if(!Ad())nl(!1);else{let y=hn("buyTime"),b=Y.cfg.mode||"comp",M=b==="dm"||b==="practice"?0:Y.phase==="freeze"?Math.ceil(Y.timeLeft+Ve.buy):Math.max(0,Math.ceil(Ve.buy-((b==="casual"?135:Ve.live)-Y.timeLeft)));y.textContent=M?"0:"+String(M).padStart(2,"0"):"\u221E"}let g=Ht.el.spec;!t.alive&&k.deadT>2.2&&e&&e!==t?(g.hidden=!1,g.innerHTML="Mirando a <b>"+e.name.replace(/</g,"")+"</b><small>Clic o Espacio: siguiente</small>"):g.hidden=!0,Y.phase==="freeze"&&t.alive?Ht.center("La ronda empieza en "+Math.ceil(Y.timeLeft)+" \xB7 B para comprar",0):Y.phase==="freeze"||Ht.el.centerMsg.textContent.startsWith("La ronda empieza")&&Ht.center("",1);let m=cn.has("Tab")||Y.phase==="over";if(Ht.el.board.hidden=!m,m&&(Ht.el.board.innerHTML=Tg(Y,se)),bd-=.05,bd<=0&&Ed){bd=.1;let y=e&&e!==t?{x:e.x,z:e.z,yaw:e.yaw}:{x:k.pl.x,z:k.pl.z,yaw:k.pl.yaw},b=[],M=[k.pl.x,k.pl.y+1.6,k.pl.z];for(let T of Y.players.values())T.alive&&(T.team===t.team?b.push({x:T.x,z:T.z,col:T.team==="T"?"#f0c060":"#8ab8ff",me:T.id===se}):t.alive&&T.seenT>Y.time-.6&&b.push({x:T.x,z:T.z,col:"#ff4040"}));for(let T of Ys)b.push({x:T.x,z:T.z,col:"#ffd34a",ping:!0});if(Sg(hn("radar"),Ed,Y.W,y,b,{s:Y.bomb.state,x:Y.bomb.x,z:Y.bomb.z,seen:t.team==="T"||Y.bomb.seen||Y.bomb.state==="planted"},t.team),t.alive)for(let T of Y.players.values())T.alive&&T.team!==t.team&&Math.hypot(T.x-k.pl.x,T.z-k.pl.z)<60&&Oa(Y.W,Y.nades,M,[T.x,T.y,T.z,1])&&(T.seenT=Y.time);let R=gi(Y.W,y.x,y.z);Ht.el.zoneName.textContent=R&4?"Sitio A":R&8?"Sitio B":R&16?"Base T":R&32?"Base CT":""}}var Dg=performance.now();function tx(n){requestAnimationFrame(tx);let t=Math.min(.05,(n-Dg)/1e3);if(Dg=n,Y.phase==="lobby"&&Cr&&Qe){Cr.render(Qe,t);return}if(Y.phase!=="lobby"&&Id){let e=window.__ls&&window.__ls.ff||0;for(let i=0;i<e;i++)Ug(.05);if(Ug(t),Oe.update(t,Y.time,ln),vS(),Oe.tickDebug(t),xS(),LS(t),NS(t),window.__ls.cam){let i=window.__ls.cam;ln.position.set(i[0],i[1],i[2]),ln.lookAt(i[3],i[4],i[5]),ln.fov!==74&&(ln.fov=74,ln.updateProjectionMatrix()),on.visible=!1}Un&&Ne()&&!Ne().alive&&k.deadT>2.2&&(Un=!1,kd(1)),Qe.clear(),Qe.render(We,ln),Qe.clearDepth(),on.visible&&Qe.render(Er,ys)}}function Ug(n){Y.time+=n,Ae()&&Xe?(Xe.tick(n),en&&en.tick(n),IS(n)):Y.phase!=="lobby"&&(Y.timeLeft-=n,Y.bomb.state==="planted"&&(Y.bomb.t-=n)),PS(n),lS(n),ES(n),CS(n)}var vs=n=>!!(window.Arcade&&Arcade.admin&&Arcade.admin.get(n));function DS(){Arcade.admin&&(Arcade.admin.define([{id:"ls.god",label:"Inmortal",type:"toggle"},{id:"ls.wall",label:"Ver a trav\xE9s de paredes",type:"toggle"},{id:"ls.aim",label:"Aimbot (al disparar)",type:"toggle"},{id:"ls.norecoil",label:"Sin retroceso ni dispersi\xF3n",type:"toggle"},{id:"ls.ammo",label:"Balas infinitas",type:"toggle"},{id:"ls.speed",label:"S\xFAper velocidad",type:"toggle"},{id:"ls.money",label:"Plata al m\xE1ximo",type:"button"},{id:"ls.heal",label:"Curarme + chaleco",type:"button"},{id:"ls.kill",label:"Matar a los enemigos",type:"button"},{id:"ls.win",label:"Ganar la ronda",type:"button"}]),Arcade.admin.on("ls.god",n=>Le("adm",{a:"god",v:!!n})),Arcade.admin.on("ls.money",()=>Le("adm",{a:"money"})),Arcade.admin.on("ls.heal",()=>Le("adm",{a:"heal"})),Arcade.admin.on("ls.kill",()=>Le("adm",{a:"kill"})),Arcade.admin.on("ls.win",()=>Le("adm",{a:"win"})))}var Sd={};function US(n){return Sd[n]||(Sd[n]=(async()=>{try{let t=Vh[n]||(Vh[n]=await Tf(n));return t.W=t.W||wf(t.info,t.layers),dd(t.W)}catch(t){return console.warn(t),null}})()),Sd[n]}var Cr=null;function Rd(){Cr.show()}function Cd(){Cr.refresh()}function So(){Ae()&&($n("cfg",{cfg:Y.cfg,prefs:Y.prefs}),Cd())}var Xh=new Set,Td=0;async function Fg(n){if(Y.cfg=n.cfg,Y.prefs=n.prefs||{},Cr.hide(),await SS(Y.cfg.map),Y.phase="loading",hn("hud").hidden=!1,Ae()){Xh.add(se);let t=()=>{((tn.players||[]).every(i=>Xh.has(i.id))||Td<=0)&&FS()};Td=1,setTimeout(()=>{Td=0,t()},15e3),Y.tryBegin=t,t()}else $n("ready",{},{to:tn.hostId});wo(),_s||tl()}var Pd=!1;function FS(){if(Pd)return;Pd=!0,Xe=Bf(Y);let n=(tn.players||[{id:se,name:"Jugador",slot:0}]).map(t=>{let e=Y.prefs[t.id]||{};return{id:t.id,name:t.name,slot:t.slot,pref:e.t??-1}});Xe.setup(n),en=Vf(Y,Xe),Xe.startMatch()}function kS(){Y.phase="lobby",Pd=!1,Xe=null,en=null,Xh.clear(),Y.players.clear(),Y.drops.clear(),Y.nades.length=0,hn("hud").hidden=!0,Ht.banner(null),clearInterval(Bh),document.exitPointerLock&&document.exitPointerLock(),Rd(),wo()}function OS(){if(!(Y.phase==="lobby"||Y.phase==="loading"||Xe)){Xe=Bf(Y),Xe.adopt(),en=Vf(Y,Xe);for(let n of Y.players.values())n.bot&&n.alive&&en.place(n,[n.x,n.y,n.z,n.yaw]),n.dmgBy||(n.dmgBy={});en.roundStart(),Xe.markDirty()}}async function zS(){Ht.init(),MS(),Qb(),requestAnimationFrame(tx),tn=await Arcade.ready(),se=tn.me.id,(!tn.players||!tn.players.length)&&(tn.players=[tn.me]),hn("loading").hidden=!0,DS();for(let t of jb)Arcade.on(t,(e,i,s)=>{Ae()&&Xe&&Xe.handle(t,e,i,s||{})});for(let t of["st","rs","ev","p","pb","sh","nd"])Arcade.on(t,(e,i)=>{(t==="ev"||t==="st"||t==="rs")&&Ae()||Fd(t,e,i)});Arcade.on("cfg",t=>{Ae()||(Y.cfg=t.cfg,Y.prefs=t.prefs||{},Y.phase==="lobby"&&Cd())}),Arcade.on("pref",(t,e)=>{Ae()&&(Y.prefs[e]=t,So())}),Arcade.on("start",t=>{Y.phase==="lobby"&&Fg(t)}),Arcade.on("ready",(t,e)=>{Ae()&&(Xh.add(e),Y.tryBegin&&Y.tryBegin())}),Arcade.on("hello",(t,e)=>{Ae()&&Y.phase==="lobby"&&So()}),Arcade.onPlayerLeft(t=>{tn.players=(tn.players||[]).filter(i=>i.id!==t);let e=Y.players.get(t);e&&Ae()&&Xe&&(e.bot=!0,e.name=e.name+" (bot)",e.alive&&en&&en.place(e,[e.x,e.y,e.z,e.yaw]),Xe.markDirty()),Y.phase==="lobby"&&Cd(),Ae()&&Y.tryBegin&&Y.tryBegin()}),Arcade.onHostChanged(()=>{Ae()&&(OS(),Y.phase==="lobby"&&(Rd(),So()))});let n=Y.emit;Y.emit=(t,e)=>{if(t==="start"){$n("start",e),Fg(e);return}n(t,e)},Cr=_g({G:Y,store:qh,MAPS:wd,LENGTHS:zf,DIFF:Ah,MODES:Lm,mapThumb:US,ctx:()=>tn,myId:()=>se,isHost:Ae,pushCfg:So,openSettings:t=>il.open(t),sendPref:t=>{Y.prefs[se]=t,Ae()?So():$n("pref",t,{to:tn.hostId})},onStart:()=>{$a(),_s||zg(),Y.emit("start",{cfg:Y.cfg,prefs:Y.prefs})}}),Y.prefs[se]=Cr.myPref(),Rd(),Ae()?So():($n("hello",{},{to:tn.hostId}),$n("pref",Y.prefs[se],{to:tn.hostId}))}zS();window.__ls={G:Y,M:k,me:Ne,req:Le,get H(){return Xe},get BOTS(){return en},get camera(){return ln},keys:cn,look:Ld,onKey:Nd,traceShot:Th,targets:Ud,shotDir:vo,setMouse(n,t){Un=n,Ar=!!t,t&&Dd()}};
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
