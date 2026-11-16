var xf=0,ah=1,_f=2;var pa=1,el=2,tr=3,qi=0,sn=1,Ge=2,Ei=0,Yi=1,ds=2,oh=3,lh=4,vf=5;var ps=100,yf=101,Mf=102,Sf=103,bf=104,Ef=200,wf=201,Tf=202,Af=203,ch=204,hh=205,Rf=206,Cf=207,Pf=208,If=209,Lf=210,Df=211,Nf=212,Uf=213,Ff=214,yo=0,Mo=1,So=2,Vs=3,bo=4,Eo=5,wo=6,To=7,uh=0,Of=1,Bf=2,si=0,ma=1,ga=2,xa=3,ms=4,_a=5,va=6,ya=7;var fh=300,gs=301,er=302,nl=303,il=304,Bi=1e3,Nn=1001,Ao=1002,je=1003,zf=1004;var Ma=1005;var xn=1006,sl=1007;var wi=1008;var bn=1009,dh=1010,ph=1011,nr=1012,rl=1013,Zn=1014,Hn=1015,rn=1016,al=1017,ol=1018,xs=1020,mh=35902,gh=35899,xh=1021,_h=1022,$n=1023,vi=1026,Ti=1027,ll=1028,cl=1029,Zi=1030,hl=1031;var ul=1033,Sa=33776,ba=33777,Ea=33778,wa=33779,fl=35840,dl=35841,pl=35842,ml=35843,gl=36196,xl=37492,_l=37496,vl=37488,yl=37489,Ta=37490,Ml=37491,Sl=37808,bl=37809,El=37810,wl=37811,Tl=37812,Al=37813,Rl=37814,Cl=37815,Pl=37816,Il=37817,Ll=37818,Dl=37819,Nl=37820,Ul=37821,Fl=36492,Ol=36494,Bl=36495,zl=36283,Hl=36284,Aa=36285,kl=36286;var Pr=2300,Ro=2301,_o=2302,$c=2303,Jc=2400,Kc=2401,Qc=2402;var Hf=3200;var Gl=0,kf=1,Ai="",Be="srgb",Ir="srgb-linear",Lr="linear",ye="srgb";var vo=7680;var Gf=519,Vf=512,Wf=513,Xf=514,vh=515,qf=516,Yf=517,yh=518,Mh=519,Sh=35044;var bh="300 es",Un=2e3,Ws=2001;function Wp(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Xp(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Dr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Zf(){let n=Dr("canvas");return n.style.display="block",n}var Nu={},Xs=null;function Nr(...n){let t="THREE."+n.shift();Xs?Xs("log",t,...n):console.log(t,...n)}function $f(n){let t=n[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=n[1];e&&e.isStackTrace?n[0]+=" "+e.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function $t(...n){n=$f(n);let t="THREE."+n.shift();if(Xs)Xs("warn",t,...n);else{let e=n[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...n)}}function Jt(...n){n=$f(n);let t="THREE."+n.shift();if(Xs)Xs("error",t,...n);else{let e=n[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...n)}}function ls(...n){let t=n.join(" ");t in Nu||(Nu[t]=!0,$t(...n))}function Jf(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}var Kf={[yo]:yo,[So]:wo,[bo]:bo,[Vs]:Eo,[Mo]:Mo,[wo]:So,[To]:To,[Eo]:Vs},ei=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){let i=this._listeners;if(i===void 0)return;let s=i[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let i=e[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var bc=Math.PI/180,Co=180/Math.PI;function $i(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(cn[n&255]+cn[n>>8&255]+cn[n>>16&255]+cn[n>>24&255]+"-"+cn[t&255]+cn[t>>8&255]+"-"+cn[t>>16&15|64]+cn[t>>24&255]+"-"+cn[e&63|128]+cn[e>>8&255]+"-"+cn[e>>16&255]+cn[e>>24&255]+cn[i&255]+cn[i>>8&255]+cn[i>>16&255]+cn[i>>24&255]).toLowerCase()}function he(n,t,e){return Math.max(t,Math.min(e,n))}function qp(n,t){return(n%t+t)%t}function Ec(n,t,e){return(1-e)*n+e*t}function Qf(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Vl(n){switch(n.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function jf(n,t){if(t.constructor===Float32Array)return n;let e=Vl(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(n/e,-1)}function td(n,t){if(t.constructor===Float32Array)return n;let e=Vl(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(n*e)}var gt=class{static{this.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=he(this.x,t.x,e.x),this.y=he(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=he(this.x,t,e),this.y=he(this.y,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(he(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(he(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*i-a*s+t.x,this.y=r*s+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Fn=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,a,o){let c=i[s+0],l=i[s+1],h=i[s+2],u=i[s+3],f=r[a+0],d=r[a+1],p=r[a+2],_=r[a+3];if(u!==_||c!==f||l!==d||h!==p){let m=c*f+l*d+h*p+u*_;m<0&&(f=-f,d=-d,p=-p,_=-_,m=-m);let g=1-o;if(m<.9995){let y=Math.acos(m),S=Math.sin(y);g=Math.sin(g*y)/S,o=Math.sin(o*y)/S,c=c*g+f*o,l=l*g+d*o,h=h*g+p*o,u=u*g+_*o}else{c=c*g+f*o,l=l*g+d*o,h=h*g+p*o,u=u*g+_*o;let y=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=y,l*=y,h*=y,u*=y}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,s,r,a){let o=i[s],c=i[s+1],l=i[s+2],h=i[s+3],u=r[a],f=r[a+1],d=r[a+2],p=r[a+3];return t[e]=o*p+h*u+c*d-l*f,t[e+1]=c*p+h*f+l*u-o*d,t[e+2]=l*p+h*d+o*f-c*u,t[e+3]=h*p-o*u-c*f-l*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(i/2),h=o(s/2),u=o(r/2),f=c(i/2),d=c(s/2),p=c(r/2);switch(a){case"XYZ":this._x=f*h*u+l*d*p,this._y=l*d*u-f*h*p,this._z=l*h*p+f*d*u,this._w=l*h*u-f*d*p;break;case"YXZ":this._x=f*h*u+l*d*p,this._y=l*d*u-f*h*p,this._z=l*h*p-f*d*u,this._w=l*h*u+f*d*p;break;case"ZXY":this._x=f*h*u-l*d*p,this._y=l*d*u+f*h*p,this._z=l*h*p+f*d*u,this._w=l*h*u-f*d*p;break;case"ZYX":this._x=f*h*u-l*d*p,this._y=l*d*u+f*h*p,this._z=l*h*p-f*d*u,this._w=l*h*u+f*d*p;break;case"YZX":this._x=f*h*u+l*d*p,this._y=l*d*u+f*h*p,this._z=l*h*p-f*d*u,this._w=l*h*u-f*d*p;break;case"XZY":this._x=f*h*u-l*d*p,this._y=l*d*u-f*h*p,this._z=l*h*p+f*d*u,this._w=l*h*u+f*d*p;break;default:$t("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],r=e[8],a=e[1],o=e[5],c=e[9],l=e[2],h=e[6],u=e[10],f=i+o+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-c)*d,this._y=(r-l)*d,this._z=(a-s)*d}else if(i>o&&i>u){let d=2*Math.sqrt(1+i-o-u);this._w=(h-c)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+l)/d}else if(o>u){let d=2*Math.sqrt(1+o-i-u);this._w=(r-l)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(c+h)/d}else{let d=2*Math.sqrt(1+u-i-o);this._w=(a-s)/d,this._x=(r+l)/d,this._y=(c+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(he(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,r=t._z,a=t._w,o=e._x,c=e._y,l=e._z,h=e._w;return this._x=i*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-i*l,this._z=r*h+a*l+i*c-s*o,this._w=a*h-i*o-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){let i=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(i=-i,s=-s,r=-r,a=-a,o=-o);let c=1-e;if(o<.9995){let l=Math.acos(o),h=Math.sin(l);c=Math.sin(c*l)/h,e=Math.sin(e*l)/h,this._x=this._x*c+i*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+a*e,this._onChangeCallback()}else this._x=this._x*c+i*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+a*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},D=class{static{this.prototype.isVector3=!0}constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Uu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Uu.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,r=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*s-o*i),h=2*(o*e-r*s),u=2*(r*i-a*e);return this.x=e+c*l+a*u-o*h,this.y=i+c*h+o*l-r*u,this.z=s+c*u+r*h-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=he(this.x,t.x,e.x),this.y=he(this.y,t.y,e.y),this.z=he(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=he(this.x,t,e),this.y=he(this.y,t,e),this.z=he(this.z,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(he(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=s*c-r*o,this.y=r*a-i*c,this.z=i*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return wc.copy(this).projectOnVector(t),this.sub(wc)}reflect(t){return this.sub(wc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(he(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},wc=new D,Uu=new Fn,Qt=class{static{this.prototype.isMatrix3=!0}constructor(t,e,i,s,r,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,c,l)}set(t,e,i,s,r,a,o,c,l){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=c,h[6]=i,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[3],c=i[6],l=i[1],h=i[4],u=i[7],f=i[2],d=i[5],p=i[8],_=s[0],m=s[3],g=s[6],y=s[1],S=s[4],M=s[7],A=s[2],T=s[5],x=s[8];return r[0]=a*_+o*y+c*A,r[3]=a*m+o*S+c*T,r[6]=a*g+o*M+c*x,r[1]=l*_+h*y+u*A,r[4]=l*m+h*S+u*T,r[7]=l*g+h*M+u*x,r[2]=f*_+d*y+p*A,r[5]=f*m+d*S+p*T,r[8]=f*g+d*M+p*x,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8];return e*a*h-e*o*l-i*r*h+i*o*c+s*r*l-s*a*c}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],u=h*a-o*l,f=o*c-h*r,d=l*r-a*c,p=e*u+i*f+s*d;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/p;return t[0]=u*_,t[1]=(s*l-h*i)*_,t[2]=(o*i-s*a)*_,t[3]=f*_,t[4]=(h*e-s*c)*_,t[5]=(s*r-o*e)*_,t[6]=d*_,t[7]=(i*c-l*e)*_,t[8]=(a*e-i*r)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*a+l*o)+a+t,-s*l,s*c,-s*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return ls("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Tc.makeScale(t,e)),this}rotate(t){return ls("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Tc.makeRotation(-t)),this}translate(t,e){return ls("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Tc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Tc=new Qt,Fu=new Qt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ou=new Qt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Yp(){let n={enabled:!0,workingColorSpace:Ir,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ye&&(s.r=_i(s.r),s.g=_i(s.g),s.b=_i(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ye&&(s.r=Gs(s.r),s.g=Gs(s.g),s.b=Gs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ai?Lr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Ir]:{primaries:t,whitePoint:i,transfer:Lr,toXYZ:Fu,fromXYZ:Ou,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Be},outputColorSpaceConfig:{drawingBufferColorSpace:Be}},[Be]:{primaries:t,whitePoint:i,transfer:ye,toXYZ:Fu,fromXYZ:Ou,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Be}}}),n}var fe=Yp();function _i(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Gs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Es,Po=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Es===void 0&&(Es=Dr("canvas")),Es.width=t.width,Es.height=t.height;let s=Es.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=Es}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Dr("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=_i(r[a]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(_i(e[i]/255)*255):e[i]=_i(e[i]);return{data:e,width:t.width,height:t.height}}else return $t("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Zp=0,qs=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Zp++}),this.uuid=$i(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Ac(s[a].image)):r.push(Ac(s[a]))}else r=Ac(s);i.url=r}return e||(t.images[this.uuid]=i),i}};function Ac(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Po.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:($t("Texture: Unable to serialize Texture."),{})}var $p=0,Rc=new D,_n=class n extends ei{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=Nn,s=Nn,r=xn,a=wi,o=$n,c=bn,l=n.DEFAULT_ANISOTROPY,h=Ai){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:$p++}),this.uuid=$i(),this.name="",this.source=new qs(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new gt(0,0),this.repeat=new gt(1,1),this.center=new gt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Rc).x}get height(){return this.source.getSize(Rc).y}get depth(){return this.source.getSize(Rc).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let i=t[e];if(i===void 0){$t(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){$t(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==fh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Bi:t.x=t.x-Math.floor(t.x);break;case Nn:t.x=t.x<0?0:1;break;case Ao:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Bi:t.y=t.y-Math.floor(t.y);break;case Nn:t.y=t.y<0?0:1;break;case Ao:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};_n.DEFAULT_IMAGE=null;_n.DEFAULT_MAPPING=fh;_n.DEFAULT_ANISOTROPY=1;var Le=class{static{this.prototype.isVector4=!0}constructor(t=0,e=0,i=0,s=1){this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*i+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r,c=t.elements,l=c[0],h=c[4],u=c[8],f=c[1],d=c[5],p=c[9],_=c[2],m=c[6],g=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-_)<.01&&Math.abs(p-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+_)<.1&&Math.abs(p+m)<.1&&Math.abs(l+d+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let S=(l+1)/2,M=(d+1)/2,A=(g+1)/2,T=(h+f)/4,x=(u+_)/4,b=(p+m)/4;return S>M&&S>A?S<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(S),s=T/i,r=x/i):M>A?M<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),i=T/s,r=b/s):A<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),i=x/r,s=b/r),this.set(i,s,r,e),this}let y=Math.sqrt((m-p)*(m-p)+(u-_)*(u-_)+(f-h)*(f-h));return Math.abs(y)<.001&&(y=1),this.x=(m-p)/y,this.y=(u-_)/y,this.z=(f-h)/y,this.w=Math.acos((l+d+g-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=he(this.x,t.x,e.x),this.y=he(this.y,t.y,e.y),this.z=he(this.z,t.z,e.z),this.w=he(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=he(this.x,t,e),this.y=he(this.y,t,e),this.z=he(this.z,t,e),this.w=he(this.w,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(he(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Io=class extends ei{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:xn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new Le(0,0,t,e),this.scissorTest=!1,this.viewport=new Le(0,0,t,e),this.textures=[];let s=i.count;for(let r=0;r<s;r++)this.textures[r]=new _n({width:t,height:e,depth:i.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:xn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new qs(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ye=class extends Io{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},Ur=class extends _n{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=je,this.minFilter=je,this.wrapR=Nn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Lo=class extends _n{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=je,this.minFilter=je,this.wrapR=Nn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var _e=class n{static{this.prototype.isMatrix4=!0}constructor(t,e,i,s,r,a,o,c,l,h,u,f,d,p,_,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,c,l,h,u,f,d,p,_,m)}set(t,e,i,s,r,a,o,c,l,h,u,f,d,p,_,m){let g=this.elements;return g[0]=t,g[4]=e,g[8]=i,g[12]=s,g[1]=r,g[5]=a,g[9]=o,g[13]=c,g[2]=l,g[6]=h,g[10]=u,g[14]=f,g[3]=d,g[7]=p,g[11]=_,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,i=t.elements,s=1/ws.setFromMatrixColumn(t,0).length(),r=1/ws.setFromMatrixColumn(t,1).length(),a=1/ws.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,r=t.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let f=a*h,d=a*u,p=o*h,_=o*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=d+p*l,e[5]=f-_*l,e[9]=-o*c,e[2]=_-f*l,e[6]=p+d*l,e[10]=a*c}else if(t.order==="YXZ"){let f=c*h,d=c*u,p=l*h,_=l*u;e[0]=f+_*o,e[4]=p*o-d,e[8]=a*l,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=d*o-p,e[6]=_+f*o,e[10]=a*c}else if(t.order==="ZXY"){let f=c*h,d=c*u,p=l*h,_=l*u;e[0]=f-_*o,e[4]=-a*u,e[8]=p+d*o,e[1]=d+p*o,e[5]=a*h,e[9]=_-f*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){let f=a*h,d=a*u,p=o*h,_=o*u;e[0]=c*h,e[4]=p*l-d,e[8]=f*l+_,e[1]=c*u,e[5]=_*l+f,e[9]=d*l-p,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){let f=a*c,d=a*l,p=o*c,_=o*l;e[0]=c*h,e[4]=_-f*u,e[8]=p*u+d,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-l*h,e[6]=d*u+p,e[10]=f-_*u}else if(t.order==="XZY"){let f=a*c,d=a*l,p=o*c,_=o*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=f*u+_,e[5]=a*h,e[9]=d*u-p,e[2]=p*u-d,e[6]=o*h,e[10]=_*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Jp,t,Kp)}lookAt(t,e,i){let s=this.elements;return wn.subVectors(t,e),wn.lengthSq()===0&&(wn.z=1),wn.normalize(),Di.crossVectors(i,wn),Di.lengthSq()===0&&(Math.abs(i.z)===1?wn.x+=1e-4:wn.z+=1e-4,wn.normalize(),Di.crossVectors(i,wn)),Di.normalize(),Va.crossVectors(wn,Di),s[0]=Di.x,s[4]=Va.x,s[8]=wn.x,s[1]=Di.y,s[5]=Va.y,s[9]=wn.y,s[2]=Di.z,s[6]=Va.z,s[10]=wn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[4],c=i[8],l=i[12],h=i[1],u=i[5],f=i[9],d=i[13],p=i[2],_=i[6],m=i[10],g=i[14],y=i[3],S=i[7],M=i[11],A=i[15],T=s[0],x=s[4],b=s[8],N=s[12],C=s[1],F=s[5],B=s[9],V=s[13],I=s[2],O=s[6],Y=s[10],G=s[14],ht=s[3],J=s[7],at=s[11],P=s[15];return r[0]=a*T+o*C+c*I+l*ht,r[4]=a*x+o*F+c*O+l*J,r[8]=a*b+o*B+c*Y+l*at,r[12]=a*N+o*V+c*G+l*P,r[1]=h*T+u*C+f*I+d*ht,r[5]=h*x+u*F+f*O+d*J,r[9]=h*b+u*B+f*Y+d*at,r[13]=h*N+u*V+f*G+d*P,r[2]=p*T+_*C+m*I+g*ht,r[6]=p*x+_*F+m*O+g*J,r[10]=p*b+_*B+m*Y+g*at,r[14]=p*N+_*V+m*G+g*P,r[3]=y*T+S*C+M*I+A*ht,r[7]=y*x+S*F+M*O+A*J,r[11]=y*b+S*B+M*Y+A*at,r[15]=y*N+S*V+M*G+A*P,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],a=t[1],o=t[5],c=t[9],l=t[13],h=t[2],u=t[6],f=t[10],d=t[14],p=t[3],_=t[7],m=t[11],g=t[15],y=c*d-l*f,S=o*d-l*u,M=o*f-c*u,A=a*d-l*h,T=a*f-c*h,x=a*u-o*h;return e*(_*y-m*S+g*M)-i*(p*y-m*A+g*T)+s*(p*S-_*A+g*x)-r*(p*M-_*T+m*x)}determinantAffine(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[1],a=t[5],o=t[9],c=t[2],l=t[6],h=t[10];return e*(a*h-o*l)-i*(r*h-o*c)+s*(r*l-a*c)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],u=t[9],f=t[10],d=t[11],p=t[12],_=t[13],m=t[14],g=t[15],y=e*o-i*a,S=e*c-s*a,M=e*l-r*a,A=i*c-s*o,T=i*l-r*o,x=s*l-r*c,b=h*_-u*p,N=h*m-f*p,C=h*g-d*p,F=u*m-f*_,B=u*g-d*_,V=f*g-d*m,I=y*V-S*B+M*F+A*C-T*N+x*b;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let O=1/I;return t[0]=(o*V-c*B+l*F)*O,t[1]=(s*B-i*V-r*F)*O,t[2]=(_*x-m*T+g*A)*O,t[3]=(f*T-u*x-d*A)*O,t[4]=(c*C-a*V-l*N)*O,t[5]=(e*V-s*C+r*N)*O,t[6]=(m*M-p*x-g*S)*O,t[7]=(h*x-f*M+d*S)*O,t[8]=(a*B-o*C+l*b)*O,t[9]=(i*C-e*B-r*b)*O,t[10]=(p*T-_*M+g*y)*O,t[11]=(u*M-h*T-d*y)*O,t[12]=(o*N-a*F-c*b)*O,t[13]=(e*F-i*N+s*b)*O,t[14]=(_*S-p*A-m*y)*O,t[15]=(h*A-u*S+f*y)*O,this}scale(t){let e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),r=1-i,a=t.x,o=t.y,c=t.z,l=r*a,h=r*o;return this.set(l*a+i,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+i,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,a){return this.set(1,i,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,l=r+r,h=a+a,u=o+o,f=r*l,d=r*h,p=r*u,_=a*h,m=a*u,g=o*u,y=c*l,S=c*h,M=c*u,A=i.x,T=i.y,x=i.z;return s[0]=(1-(_+g))*A,s[1]=(d+M)*A,s[2]=(p-S)*A,s[3]=0,s[4]=(d-M)*T,s[5]=(1-(f+g))*T,s[6]=(m+y)*T,s[7]=0,s[8]=(p+S)*x,s[9]=(m-y)*x,s[10]=(1-(f+_))*x,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),e.identity(),this;let a=ws.set(s[0],s[1],s[2]).length(),o=ws.set(s[4],s[5],s[6]).length(),c=ws.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Wn.copy(this);let l=1/a,h=1/o,u=1/c;return Wn.elements[0]*=l,Wn.elements[1]*=l,Wn.elements[2]*=l,Wn.elements[4]*=h,Wn.elements[5]*=h,Wn.elements[6]*=h,Wn.elements[8]*=u,Wn.elements[9]*=u,Wn.elements[10]*=u,e.setFromRotationMatrix(Wn),i.x=a,i.y=o,i.z=c,this}makePerspective(t,e,i,s,r,a,o=Un,c=!1){let l=this.elements,h=2*r/(e-t),u=2*r/(i-s),f=(e+t)/(e-t),d=(i+s)/(i-s),p,_;if(c)p=r/(a-r),_=a*r/(a-r);else if(o===Un)p=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===Ws)p=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,r,a,o=Un,c=!1){let l=this.elements,h=2/(e-t),u=2/(i-s),f=-(e+t)/(e-t),d=-(i+s)/(i-s),p,_;if(c)p=1/(a-r),_=a/(a-r);else if(o===Un)p=-2/(a-r),_=-(a+r)/(a-r);else if(o===Ws)p=-1/(a-r),_=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=u,l[9]=0,l[13]=d,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},ws=new D,Wn=new _e,Jp=new D(0,0,0),Kp=new D(1,1,1),Di=new D,Va=new D,wn=new D,Bu=new _e,zu=new Fn,yi=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],u=s[2],f=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(he(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-he(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(he(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-he(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(he(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-he(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:$t("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Bu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Bu,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return zu.setFromEuler(this),this.setFromQuaternion(zu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};yi.DEFAULT_ORDER="XYZ";var Fr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Qp=0,Hu=new D,Ts=new Fn,fi=new _e,Wa=new D,_r=new D,jp=new D,tm=new Fn,ku=new D(1,0,0),Gu=new D(0,1,0),Vu=new D(0,0,1),Wu={type:"added"},em={type:"removed"},As={type:"childadded",child:null},Cc={type:"childremoved",child:null},ze=class n extends ei{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Qp++}),this.uuid=$i(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new D,e=new yi,i=new Fn,s=new D(1,1,1);function r(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new _e},normalMatrix:{value:new Qt}}),this.matrix=new _e,this.matrixWorld=new _e,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Fr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ts.setFromAxisAngle(t,e),this.quaternion.multiply(Ts),this}rotateOnWorldAxis(t,e){return Ts.setFromAxisAngle(t,e),this.quaternion.premultiply(Ts),this}rotateX(t){return this.rotateOnAxis(ku,t)}rotateY(t){return this.rotateOnAxis(Gu,t)}rotateZ(t){return this.rotateOnAxis(Vu,t)}translateOnAxis(t,e){return Hu.copy(t).applyQuaternion(this.quaternion),this.position.add(Hu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ku,t)}translateY(t){return this.translateOnAxis(Gu,t)}translateZ(t){return this.translateOnAxis(Vu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(fi.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Wa.copy(t):Wa.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),_r.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?fi.lookAt(_r,Wa,this.up):fi.lookAt(Wa,_r,this.up),this.quaternion.setFromRotationMatrix(fi),s&&(fi.extractRotation(s.matrixWorld),Ts.setFromRotationMatrix(fi),this.quaternion.premultiply(Ts.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Jt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Wu),As.child=t,this.dispatchEvent(As),As.child=null):Jt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(em),Cc.child=t,this.dispatchEvent(Cc),Cc.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),fi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),fi.multiply(t.parent.matrixWorld)),t.applyMatrix4(fi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Wu),As.child=t,this.dispatchEvent(As),As.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_r,t,jp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_r,tm,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,i=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*i-r[8]*s,r[13]+=i-r[1]*e-r[5]*i-r[9]*s,r[14]+=s-r[2]*e-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(t.materials,this.material[c]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(t.animations,c))}}if(e){let o=a(t.geometries),c=a(t.materials),l=a(t.textures),h=a(t.images),u=a(t.shapes),f=a(t.skeletons),d=a(t.animations),p=a(t.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),p.length>0&&(i.nodes=p)}return i.object=s,i;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};ze.DEFAULT_UP=new D(0,1,0);ze.DEFAULT_MATRIX_AUTO_UPDATE=!0;ze.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ae=class extends ze{constructor(){super(),this.isGroup=!0,this.type="Group"}},nm={type:"move"},Ys=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ae,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ae,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ae,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(let _ of t.hand.values()){let m=e.getJointPose(_,i),g=this._getHandJoint(l,_);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,p=.005;l.inputState.pinching&&f>d+p?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=d-p&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.quaternion,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(nm)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new Ae;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},ed={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ni={h:0,s:0,l:0},Xa={h:0,s:0,l:0};function Pc(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var Gt=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Be){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,fe.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=fe.workingColorSpace){return this.r=t,this.g=e,this.b=i,fe.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=fe.workingColorSpace){if(t=qp(t,1),e=he(e,0,1),i=he(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,a=2*i-r;this.r=Pc(a,r,t+1/3),this.g=Pc(a,r,t),this.b=Pc(a,r,t-1/3)}return fe.colorSpaceToWorking(this,s),this}setStyle(t,e=Be){function i(r){r!==void 0&&parseFloat(r)<1&&$t("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:$t("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);$t("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Be){let i=ed[t.toLowerCase()];return i!==void 0?this.setHex(i,e):$t("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=_i(t.r),this.g=_i(t.g),this.b=_i(t.b),this}copyLinearToSRGB(t){return this.r=Gs(t.r),this.g=Gs(t.g),this.b=Gs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Be){return fe.workingToColorSpace(hn.copy(this),t),Math.round(he(hn.r*255,0,255))*65536+Math.round(he(hn.g*255,0,255))*256+Math.round(he(hn.b*255,0,255))}getHexString(t=Be){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=fe.workingColorSpace){fe.workingToColorSpace(hn.copy(this),e);let i=hn.r,s=hn.g,r=hn.b,a=Math.max(i,s,r),o=Math.min(i,s,r),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case i:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-i)/u+2;break;case r:c=(i-s)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=fe.workingColorSpace){return fe.workingToColorSpace(hn.copy(this),e),t.r=hn.r,t.g=hn.g,t.b=hn.b,t}getStyle(t=Be){fe.workingToColorSpace(hn.copy(this),t);let e=hn.r,i=hn.g,s=hn.b;return t!==Be?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Ni),this.setHSL(Ni.h+t,Ni.s+e,Ni.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Ni),t.getHSL(Xa);let i=Ec(Ni.h,Xa.h,e),s=Ec(Ni.s,Xa.s,e),r=Ec(Ni.l,Xa.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},hn=new Gt;Gt.NAMES=ed;var Or=class n{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new Gt(t),this.near=e,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},zi=class extends ze{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new yi,this.environmentIntensity=1,this.environmentRotation=new yi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Xn=new D,di=new D,Ic=new D,pi=new D,Rs=new D,Cs=new D,Xu=new D,Lc=new D,Dc=new D,Nc=new D,Uc=new Le,Fc=new Le,Oc=new Le,xi=class n{constructor(t=new D,e=new D,i=new D){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),Xn.subVectors(t,e),s.cross(Xn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){Xn.subVectors(s,e),di.subVectors(i,e),Ic.subVectors(t,e);let a=Xn.dot(Xn),o=Xn.dot(di),c=Xn.dot(Ic),l=di.dot(di),h=di.dot(Ic),u=a*l-o*o;if(u===0)return r.set(0,0,0),null;let f=1/u,d=(l*c-o*h)*f,p=(a*h-o*c)*f;return r.set(1-d-p,p,d)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,pi)===null?!1:pi.x>=0&&pi.y>=0&&pi.x+pi.y<=1}static getInterpolation(t,e,i,s,r,a,o,c){return this.getBarycoord(t,e,i,s,pi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,pi.x),c.addScaledVector(a,pi.y),c.addScaledVector(o,pi.z),c)}static getInterpolatedAttribute(t,e,i,s,r,a){return Uc.setScalar(0),Fc.setScalar(0),Oc.setScalar(0),Uc.fromBufferAttribute(t,e),Fc.fromBufferAttribute(t,i),Oc.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Uc,r.x),a.addScaledVector(Fc,r.y),a.addScaledVector(Oc,r.z),a}static isFrontFacing(t,e,i,s){return Xn.subVectors(i,e),di.subVectors(t,e),Xn.cross(di).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Xn.subVectors(this.c,this.b),di.subVectors(this.a,this.b),Xn.cross(di).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,r=this.c,a,o;Rs.subVectors(s,i),Cs.subVectors(r,i),Lc.subVectors(t,i);let c=Rs.dot(Lc),l=Cs.dot(Lc);if(c<=0&&l<=0)return e.copy(i);Dc.subVectors(t,s);let h=Rs.dot(Dc),u=Cs.dot(Dc);if(h>=0&&u<=h)return e.copy(s);let f=c*u-h*l;if(f<=0&&c>=0&&h<=0&&c-h>0)return a=c/(c-h),e.copy(i).addScaledVector(Rs,a);Nc.subVectors(t,r);let d=Rs.dot(Nc),p=Cs.dot(Nc);if(p>=0&&d<=p)return e.copy(r);let _=d*l-c*p;if(_<=0&&l>=0&&p<=0)return o=l/(l-p),e.copy(i).addScaledVector(Cs,o);let m=h*p-d*u;if(m<=0&&u-h>=0&&d-p>=0)return Xu.subVectors(r,s),o=(u-h)/(u-h+(d-p)),e.copy(s).addScaledVector(Xu,o);let g=1/(m+_+f);return a=_*g,o=f*g,e.copy(i).addScaledVector(Rs,a).addScaledVector(Cs,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},On=class{constructor(t=new D(1/0,1/0,1/0),e=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(qn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(qn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=qn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,qn):qn.fromBufferAttribute(r,a),qn.applyMatrix4(t.matrixWorld),this.expandByPoint(qn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),qa.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),qa.copy(i.boundingBox)),qa.applyMatrix4(t.matrixWorld),this.union(qa)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,qn),qn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(vr),Ya.subVectors(this.max,vr),Ps.subVectors(t.a,vr),Is.subVectors(t.b,vr),Ls.subVectors(t.c,vr),Ui.subVectors(Is,Ps),Fi.subVectors(Ls,Is),is.subVectors(Ps,Ls);let e=[0,-Ui.z,Ui.y,0,-Fi.z,Fi.y,0,-is.z,is.y,Ui.z,0,-Ui.x,Fi.z,0,-Fi.x,is.z,0,-is.x,-Ui.y,Ui.x,0,-Fi.y,Fi.x,0,-is.y,is.x,0];return!Bc(e,Ps,Is,Ls,Ya)||(e=[1,0,0,0,1,0,0,0,1],!Bc(e,Ps,Is,Ls,Ya))?!1:(Za.crossVectors(Ui,Fi),e=[Za.x,Za.y,Za.z],Bc(e,Ps,Is,Ls,Ya))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,qn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(qn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(mi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),mi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),mi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),mi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),mi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),mi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),mi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),mi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(mi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},mi=[new D,new D,new D,new D,new D,new D,new D,new D],qn=new D,qa=new On,Ps=new D,Is=new D,Ls=new D,Ui=new D,Fi=new D,is=new D,vr=new D,Ya=new D,Za=new D,ss=new D;function Bc(n,t,e,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){ss.fromArray(n,r);let o=s.x*Math.abs(ss.x)+s.y*Math.abs(ss.y)+s.z*Math.abs(ss.z),c=t.dot(ss),l=e.dot(ss),h=i.dot(ss);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var We=new D,$a=new gt,im=0,qe=class extends ei{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:im++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Sh,this.updateRanges=[],this.gpuType=Hn,this.version=0,this._normalizationScale=t!==void 0?Vl(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)$a.fromBufferAttribute(this,e),$a.applyMatrix3(t),this.setXY(e,$a.x,$a.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)We.fromBufferAttribute(this,e),We.applyMatrix3(t),this.setXYZ(e,We.x,We.y,We.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)We.fromBufferAttribute(this,e),We.applyMatrix4(t),this.setXYZ(e,We.x,We.y,We.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)We.fromBufferAttribute(this,e),We.applyNormalMatrix(t),this.setXYZ(e,We.x,We.y,We.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)We.fromBufferAttribute(this,e),We.transformDirection(t),this.setXYZ(e,We.x,We.y,We.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=this._denormalize(i)),i}setComponent(t,e,i){return this.normalized&&(i=this._normalize(i)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i),s=this._normalize(s)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i),s=this._normalize(s),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):jf(t,this.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):td(t,this.array)}};var Br=class extends qe{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var zr=class extends qe{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var qt=class extends qe{constructor(t,e,i){super(new Float32Array(t),e,i)}},sm=new On,yr=new D,zc=new D,Mi=class{constructor(t=new D,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):sm.setFromPoints(t).getCenter(i);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;yr.subVectors(t,this.center);let e=yr.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(yr,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(zc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(yr.copy(t.center).add(zc)),this.expandByPoint(yr.copy(t.center).sub(zc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},rm=0,Dn=new _e,Hc=new ze,Ds=new D,Tn=new On,Mr=new On,Qe=new D,Me=class n extends ei{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:rm++}),this.uuid=$i(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Wp(t)?zr:Br)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Qt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Dn.makeRotationFromQuaternion(t),this.applyMatrix4(Dn),this}rotateX(t){return Dn.makeRotationX(t),this.applyMatrix4(Dn),this}rotateY(t){return Dn.makeRotationY(t),this.applyMatrix4(Dn),this}rotateZ(t){return Dn.makeRotationZ(t),this.applyMatrix4(Dn),this}translate(t,e,i){return Dn.makeTranslation(t,e,i),this.applyMatrix4(Dn),this}scale(t,e,i){return Dn.makeScale(t,e,i),this.applyMatrix4(Dn),this}lookAt(t){return Hc.lookAt(t),Hc.updateMatrix(),this.applyMatrix4(Hc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ds).negate(),this.translate(Ds.x,Ds.y,Ds.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new qt(i,3))}else{let i=Math.min(t.length,e.count);for(let s=0;s<i;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&$t("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new On);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Jt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let r=e[i];Tn.setFromBufferAttribute(r),this.morphTargetsRelative?(Qe.addVectors(this.boundingBox.min,Tn.min),this.boundingBox.expandByPoint(Qe),Qe.addVectors(this.boundingBox.max,Tn.max),this.boundingBox.expandByPoint(Qe)):(this.boundingBox.expandByPoint(Tn.min),this.boundingBox.expandByPoint(Tn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Jt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Mi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Jt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(t){let i=this.boundingSphere.center;if(Tn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];Mr.setFromBufferAttribute(o),this.morphTargetsRelative?(Qe.addVectors(Tn.min,Mr.min),Tn.expandByPoint(Qe),Qe.addVectors(Tn.max,Mr.max),Tn.expandByPoint(Qe)):(Tn.expandByPoint(Mr.min),Tn.expandByPoint(Mr.max))}Tn.getCenter(i);let s=0;for(let r=0,a=t.count;r<a;r++)Qe.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Qe));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Qe.fromBufferAttribute(o,l),c&&(Ds.fromBufferAttribute(t,l),Qe.add(Ds)),s=Math.max(s,i.distanceToSquared(Qe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Jt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Jt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new qe(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));let o=[],c=[],l=new Uint8Array(i.count);for(let N=0;N<i.count;N++)o[N]=new D,c[N]=new D;let h=new D,u=new D,f=new D,d=new gt,p=new gt,_=new gt,m=new D,g=new D;function y(N,C,F){l[N]=l[C]=l[F]=1,h.fromBufferAttribute(i,N),u.fromBufferAttribute(i,C),f.fromBufferAttribute(i,F),d.fromBufferAttribute(r,N),p.fromBufferAttribute(r,C),_.fromBufferAttribute(r,F),u.sub(h),f.sub(h),p.sub(d),_.sub(d);let B=1/(p.x*_.y-_.x*p.y);isFinite(B)&&(m.copy(u).multiplyScalar(_.y).addScaledVector(f,-p.y).multiplyScalar(B),g.copy(f).multiplyScalar(p.x).addScaledVector(u,-_.x).multiplyScalar(B),o[N].add(m),o[C].add(m),o[F].add(m),c[N].add(g),c[C].add(g),c[F].add(g))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let N=0,C=S.length;N<C;++N){let F=S[N],B=F.start,V=F.count;for(let I=B,O=B+V;I<O;I+=3)y(t.getX(I+0),t.getX(I+1),t.getX(I+2))}let M=new D,A=new D,T=new D,x=new D;function b(N){T.fromBufferAttribute(s,N),x.copy(T);let C=o[N];M.copy(C),M.sub(T.multiplyScalar(T.dot(C))).normalize(),A.crossVectors(x,C);let B=A.dot(c[N])<0?-1:1;a.setXYZW(N,M.x,M.y,M.z,B)}for(let N=0,C=i.count;N<C;++N)l[N]&&b(N);this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new qe(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);let s=new D,r=new D,a=new D,o=new D,c=new D,l=new D,h=new D,u=new D;if(t)for(let f=0,d=t.count;f<d;f+=3){let p=t.getX(f+0),_=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,p),r.fromBufferAttribute(e,_),a.fromBufferAttribute(e,m),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(i,p),c.fromBufferAttribute(i,_),l.fromBufferAttribute(i,m),o.add(h),c.add(h),l.add(h),i.setXYZ(p,o.x,o.y,o.z),i.setXYZ(_,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,d=e.count;f<d;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Qe.fromBufferAttribute(t,e),Qe.normalize(),t.setXYZ(e,Qe.x,Qe.y,Qe.z)}toNonIndexed(){function t(o,c){let l=o.array,h=o.itemSize,u=o.normalized,f=new l.constructor(c.length*h),d=0,p=0;for(let _=0,m=c.length;_<m;_++){o.isInterleavedBufferAttribute?d=c[_]*o.data.stride+o.offset:d=c[_]*h;for(let g=0;g<h;g++)f[p++]=l[d++]}return new qe(f,h,u)}if(this.index===null)return $t("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let o in s){let c=s[o],l=t(c,i);e.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let h=0,u=l.length;h<u;h++){let f=l[h],d=t(f,i);c.push(d)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let c in i){let l=i[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){let d=l[u];h.push(d.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let s=t.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(e))}let r=t.morphAttributes;for(let l in r){let h=[],u=r[l];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let l=0,h=a.length;l<h;l++){let u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Do=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Sh,this.updateRanges=[],this.version=0,this.uuid=$i()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});let e=qu(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=this.array.slice(0).buffer);let i=new this.array.constructor(t.arrayBuffers[e]),s=new this.constructor(i,this.stride);return s.setUsage(this.usage),s}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});let e=qu(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let i={uuid:this.uuid,buffer:e,type:this.array.constructor.name,stride:this.stride};return i.usage=this.usage,i}};function qu(n){return n.buffer._uuid===void 0&&(n.buffer._uuid=$i()),n.byteOffset===0&&n.byteLength===n.buffer.byteLength?n.buffer._uuid:n.buffer._uuid+":"+n.byteOffset+":"+n.byteLength}var mn=new D,Hr=class n{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s,this._normalizationScale=t!==void 0?Vl(t.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)mn.fromBufferAttribute(this,e),mn.applyMatrix4(t),this.setXYZ(e,mn.x,mn.y,mn.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)mn.fromBufferAttribute(this,e),mn.applyNormalMatrix(t),this.setXYZ(e,mn.x,mn.y,mn.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)mn.fromBufferAttribute(this,e),mn.transformDirection(t),this.setXYZ(e,mn.x,mn.y,mn.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=this._denormalize(i)),i}setComponent(t,e,i){return this.normalized&&(i=this._normalize(i)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=this._denormalize(e)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=this._denormalize(e)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=this._denormalize(e)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=this._denormalize(e)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),i=this._normalize(i)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),i=this._normalize(i),s=this._normalize(s)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),i=this._normalize(i),s=this._normalize(s),r=this._normalize(r)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){Nr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new qe(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new n(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Nr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):jf(t,this.data.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):td(t,this.data.array)}},kc=new D,am=new D,om=new Qt,Yn=class{constructor(t=new D(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=kc.subVectors(i,e).cross(am.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){let s=t.delta(kc),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||om.getNormalMatrix(t),s=this.coplanarPoint(kc).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},lm=0,ni=class extends ei{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:lm++}),this.uuid=$i(),this.name="",this.type="Material",this.blending=Yi,this.side=qi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ch,this.blendDst=hh,this.blendEquation=ps,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Gt(0,0,0),this.blendAlpha=0,this.depthFunc=Vs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Gf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=vo,this.stencilZFail=vo,this.stencilZPass=vo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){$t(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){$t(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Gt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new Yn().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new gt().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new gt().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},Zs=class extends ni{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Gt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Ns,Sr=new D,Us=new D,Fs=new D,Os=new gt,br=new gt,nd=new _e,Ja=new D,Er=new D,Ka=new D,Yu=new gt,Gc=new gt,Zu=new gt,kr=class extends ze{constructor(t=new Zs){if(super(),this.isSprite=!0,this.type="Sprite",Ns===void 0){Ns=new Me;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Do(e,5);Ns.setIndex([0,1,2,0,2,3]),Ns.setAttribute("position",new Hr(i,3,0,!1)),Ns.setAttribute("uv",new Hr(i,2,3,!1))}this.geometry=Ns,this.material=t,this.center=new gt(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&Jt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Us.setFromMatrixScale(this.matrixWorld),nd.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Fs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Us.multiplyScalar(-Fs.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let a=this.center;Qa(Ja.set(-.5,-.5,0),Fs,a,Us,s,r),Qa(Er.set(.5,-.5,0),Fs,a,Us,s,r),Qa(Ka.set(.5,.5,0),Fs,a,Us,s,r),Yu.set(0,0),Gc.set(1,0),Zu.set(1,1);let o=t.ray.intersectTriangle(Ja,Er,Ka,!1,Sr);if(o===null&&(Qa(Er.set(-.5,.5,0),Fs,a,Us,s,r),Gc.set(0,1),o=t.ray.intersectTriangle(Ja,Ka,Er,!1,Sr),o===null))return;let c=t.ray.origin.distanceTo(Sr);c<t.near||c>t.far||e.push({distance:c,point:Sr.clone(),uv:xi.getInterpolation(Sr,Ja,Er,Ka,Yu,Gc,Zu,new gt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}toJSON(t){let e=super.toJSON(t);return e.object.center=this.center.toArray(),e}};function Qa(n,t,e,i,s,r){Os.subVectors(n,e).addScalar(.5).multiply(i),s!==void 0?(br.x=r*Os.x-s*Os.y,br.y=s*Os.x+r*Os.y):br.copy(Os),n.copy(t),n.x+=br.x,n.y+=br.y,n.applyMatrix4(nd)}var gi=new D,Vc=new D,ja=new D,to=new D,Gr=class{constructor(t=new D,e=new D(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,gi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=gi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(gi.copy(this.origin).addScaledVector(this.direction,e),gi.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){Vc.copy(t).add(e).multiplyScalar(.5),ja.copy(e).sub(t).normalize(),to.copy(this.origin).sub(Vc);let r=t.distanceTo(e)*.5,a=-this.direction.dot(ja),o=to.dot(this.direction),c=-to.dot(ja),l=to.lengthSq(),h=Math.abs(1-a*a),u,f,d,p;if(h>0)if(u=a*c-o,f=a*o-c,p=r*h,u>=0)if(f>=-p)if(f<=p){let _=1/h;u*=_,f*=_,d=u*(u+a*f+2*o)+f*(a*u+f+2*c)+l}else f=r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*c)+l;else f=-r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*c)+l;else f<=-p?(u=Math.max(0,-(-a*r+o)),f=u>0?-r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l):f<=p?(u=0,f=Math.min(Math.max(-r,-c),r),d=f*(f+2*c)+l):(u=Math.max(0,-(a*r+o)),f=u>0?r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l);else f=a>0?-r:r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Vc).addScaledVector(ja,f),d}intersectSphere(t,e){if(t.radius<0)return null;gi.subVectors(t.center,this.origin);let i=gi.dot(this.direction),s=gi.dot(gi)-i*i,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,a,o,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(i=(t.min.x-f.x)*l,s=(t.max.x-f.x)*l):(i=(t.max.x-f.x)*l,s=(t.min.x-f.x)*l),h>=0?(r=(t.min.y-f.y)*h,a=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,a=(t.min.y-f.y)*h),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(t.min.z-f.z)*u,c=(t.max.z-f.z)*u):(o=(t.max.z-f.z)*u,c=(t.min.z-f.z)*u),i>c||o>s)||((o>i||i!==i)&&(i=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,gi)!==null}intersectTriangle(t,e,i,s,r){let a=this.origin,o=this.direction,c=o.x,l=o.y,h=o.z,u=t.x-a.x,f=t.y-a.y,d=t.z-a.z,p=e.x-a.x,_=e.y-a.y,m=e.z-a.z,g=i.x-a.x,y=i.y-a.y,S=i.z-a.z,M=Math.abs(c),A=Math.abs(l),T=Math.abs(h),x,b,N,C,F,B,V,I,O,Y,G,ht;if(M>=A&&M>=T?(N=c,B=u,O=p,ht=g,c>=0?(x=l,b=h,C=f,F=d,V=_,I=m,Y=y,G=S):(x=h,b=l,C=d,F=f,V=m,I=_,Y=S,G=y)):A>=T?(N=l,B=f,O=_,ht=y,l>=0?(x=h,b=c,C=d,F=u,V=m,I=p,Y=S,G=g):(x=c,b=h,C=u,F=d,V=p,I=m,Y=g,G=S)):(N=h,B=d,O=m,ht=S,h>=0?(x=c,b=l,C=u,F=f,V=p,I=_,Y=g,G=y):(x=l,b=c,C=f,F=u,V=_,I=p,Y=y,G=g)),N===0)return null;let J=x/N,at=b/N,P=1/N,it=C-J*B,ft=F-at*B,X=V-J*O,rt=I-at*O,pt=Y-J*ht,Nt=G-at*ht,_t=pt*rt-Nt*X,Ft=it*Nt-ft*pt,pe=X*ft-rt*it;if(s){if(_t<0||Ft<0||pe<0)return null}else if((_t<0||Ft<0||pe<0)&&(_t>0||Ft>0||pe>0))return null;let Xt=_t+Ft+pe;if(Xt===0)return null;let se=P*(_t*B+Ft*O+pe*ht);return(Xt>0?se<0:se>0)?null:this.at(se/Xt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},He=class extends ni{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yi,this.combine=uh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},$u=new _e,rs=new Gr,eo=new Mi,Ju=new D,no=new D,io=new D,so=new D,Wc=new D,ro=new D,Ku=new D,ao=new D,kt=class extends ze{constructor(t=new Me,e=new He){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){ro.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=o[c],u=r[c];h!==0&&(Wc.fromBufferAttribute(u,t),a?ro.addScaledVector(Wc,h):ro.addScaledVector(Wc.sub(e),h))}e.add(ro)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),eo.copy(i.boundingSphere),eo.applyMatrix4(r),rs.copy(t.ray).recast(t.near),!(eo.containsPoint(rs.origin)===!1&&(rs.intersectSphere(eo,Ju)===null||rs.origin.distanceToSquared(Ju)>(t.far-t.near)**2))&&($u.copy(r).invert(),rs.copy(t.ray).applyMatrix4($u),!(i.boundingBox!==null&&rs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,rs)))}_computeIntersections(t,e,i){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let p=0,_=f.length;p<_;p++){let m=f[p],g=a[m.materialIndex],y=Math.max(m.start,d.start),S=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let M=y,A=S;M<A;M+=3){let T=o.getX(M),x=o.getX(M+1),b=o.getX(M+2);s=oo(this,g,t,i,l,h,u,T,x,b),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let p=Math.max(0,d.start),_=Math.min(o.count,d.start+d.count);for(let m=p,g=_;m<g;m+=3){let y=o.getX(m),S=o.getX(m+1),M=o.getX(m+2);s=oo(this,a,t,i,l,h,u,y,S,M),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let p=0,_=f.length;p<_;p++){let m=f[p],g=a[m.materialIndex],y=Math.max(m.start,d.start),S=Math.min(c.count,Math.min(m.start+m.count,d.start+d.count));for(let M=y,A=S;M<A;M+=3){let T=M,x=M+1,b=M+2;s=oo(this,g,t,i,l,h,u,T,x,b),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let p=Math.max(0,d.start),_=Math.min(c.count,d.start+d.count);for(let m=p,g=_;m<g;m+=3){let y=m,S=m+1,M=m+2;s=oo(this,a,t,i,l,h,u,y,S,M),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function cm(n,t,e,i,s,r,a,o){let c;if(t.side===sn?c=i.intersectTriangle(a,r,s,!0,o):c=i.intersectTriangle(s,r,a,t.side===qi,o),c===null)return null;ao.copy(o),ao.applyMatrix4(n.matrixWorld);let l=e.ray.origin.distanceTo(ao);return l<e.near||l>e.far?null:{distance:l,point:ao.clone(),object:n}}function oo(n,t,e,i,s,r,a,o,c,l){n.getVertexPosition(o,no),n.getVertexPosition(c,io),n.getVertexPosition(l,so);let h=cm(n,t,e,i,no,io,so,Ku);if(h){let u=new D;xi.getBarycoord(Ku,no,io,so,u),s&&(h.uv=xi.getInterpolatedAttribute(s,o,c,l,u,new gt)),r&&(h.uv1=xi.getInterpolatedAttribute(r,o,c,l,u,new gt)),a&&(h.normal=xi.getInterpolatedAttribute(a,o,c,l,u,new D),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let f={a:o,b:c,c:l,normal:new D,materialIndex:0};xi.getNormal(no,io,so,f.normal),h.face=f,h.barycoord=u}return h}var Vr=class extends _n{constructor(t=null,e=1,i=1,s,r,a,o,c,l=je,h=je,u,f){super(null,a,o,c,l,h,s,r,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Wr=class extends qe{constructor(t,e,i,s=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Bs=new _e,Qu=new _e,lo=[],ju=new On,hm=new _e,wr=new kt,Tr=new Mi,Sn=class extends kt{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Wr(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,hm)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new On),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Bs),ju.copy(t.boundingBox).applyMatrix4(Bs),this.boundingBox.union(ju)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Mi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Bs),Tr.copy(t.boundingSphere).applyMatrix4(Bs),this.boundingSphere.union(Tr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),this.morphTexture=t.morphTexture!==null?t.morphTexture.clone():null,this.instanceColor=t.instanceColor!==null?t.instanceColor.clone():null,this.count=t.count,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let i=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,a=t*r+1;for(let o=0;o<i.length;o++)i[o]=s[a+o]}raycast(t,e){let i=this.matrixWorld,s=this.count;if(wr.geometry=this.geometry,wr.material=this.material,wr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Tr.copy(this.boundingSphere),Tr.applyMatrix4(i),t.ray.intersectsSphere(Tr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Bs),Qu.multiplyMatrices(i,Bs),wr.matrixWorld=Qu,wr.raycast(t,lo);for(let a=0,o=lo.length;a<o;a++){let c=lo[a];c.instanceId=r,c.object=this,e.push(c)}lo.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Wr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let i=e.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Vr(new Float32Array(s*this.count),s,this.count,ll,Hn));let r=this.morphTexture.source.data.data,a=0;for(let l=0;l<i.length;l++)a+=i[l];let o=this.geometry.morphTargetsRelative?1:1-a,c=s*t;return r[c]=o,r.set(i,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},as=new Mi,um=new gt(.5,.5),co=new D,Hi=class{constructor(t=new Yn,e=new Yn,i=new Yn,s=new Yn,r=new Yn,a=new Yn){this.planes=[t,e,i,s,r,a]}set(t,e,i,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Un,i=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],c=r[2],l=r[3],h=r[4],u=r[5],f=r[6],d=r[7],p=r[8],_=r[9],m=r[10],g=r[11],y=r[12],S=r[13],M=r[14],A=r[15];if(s[0].setComponents(l-a,d-h,g-p,A-y).normalize(),s[1].setComponents(l+a,d+h,g+p,A+y).normalize(),s[2].setComponents(l+o,d+u,g+_,A+S).normalize(),s[3].setComponents(l-o,d-u,g-_,A-S).normalize(),i)s[4].setComponents(c,f,m,M).normalize(),s[5].setComponents(l-c,d-f,g-m,A-M).normalize();else if(s[4].setComponents(l-c,d-f,g-m,A-M).normalize(),e===Un)s[5].setComponents(l+c,d+f,g+m,A+M).normalize();else if(e===Ws)s[5].setComponents(c,f,m,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),as.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),as.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(as)}intersectsSprite(t){as.center.set(0,0,0);let e=um.distanceTo(t.center);return as.radius=.7071067811865476+e,as.applyMatrix4(t.matrixWorld),this.intersectsSphere(as)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(co.x=s.normal.x>0?t.max.x:t.min.x,co.y=s.normal.y>0?t.max.y:t.min.y,co.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(co)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},tf=new _e,No=class n{constructor(){this.coordinateSystem=Un,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,i=this._frustums;for(let s=0;s<e.length;s++){let r=e[s];tf.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),i[s]===void 0&&(i[s]=new Hi),i[s].setFromProjectionMatrix(tf,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,i=t._frustums;for(let s=0;s<t._count;s++)e[s]===void 0&&(e[s]=new Hi),e[s].copy(i[s]);return this._count=t._count,this}clone(){return new n().copy(this)}};var Uo=class extends ni{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Gt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},ef=new _e,jc=new Gr,ho=new Mi,uo=new D,Xr=class extends ze{constructor(t=new Me,e=new Uo){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ho.copy(i.boundingSphere),ho.applyMatrix4(s),ho.radius+=r,t.ray.intersectsSphere(ho)===!1)return;ef.copy(s).invert(),jc.copy(t.ray).applyMatrix4(ef);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=i.index,u=i.attributes.position;if(l!==null){let f=Math.max(0,a.start),d=Math.min(l.count,a.start+a.count);for(let p=f,_=d;p<_;p++){let m=l.getX(p);uo.fromBufferAttribute(u,m),nf(uo,m,c,s,t,e,this)}}else{let f=Math.max(0,a.start),d=Math.min(u.count,a.start+a.count);for(let p=f,_=d;p<_;p++)uo.fromBufferAttribute(u,p),nf(uo,p,c,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function nf(n,t,e,i,s,r,a){let o=jc.distanceSqToPoint(n);if(o<e){let c=new D;jc.closestPointToPoint(n,c),c.applyMatrix4(i);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var qr=class extends _n{constructor(t=[],e=gs,i,s,r,a,o,c,l,h){super(t,e,i,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Bn=class extends _n{constructor(t,e,i,s,r,a,o,c,l){super(t,e,i,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Si=class extends _n{constructor(t,e,i=Zn,s,r,a,o=je,c=je,l,h=vi,u=1){if(h!==vi&&h!==Ti)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:t,height:e,depth:u};super(f,s,r,a,o,c,h,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new qs(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Yr=class extends Si{constructor(t,e=Zn,i=gs,s,r,a=je,o=je,c,l=vi){let h={width:t,height:t,depth:1},u=[h,h,h,h,h,h];super(t,t,e,i,s,r,a,o,c,l),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Zr=class extends _n{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Xe=class n extends Me{constructor(t=1,e=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],h=[],u=[],f=0,d=0;p("z","y","x",-1,-1,i,e,t,a,r,0),p("z","y","x",1,-1,i,e,-t,a,r,1),p("x","z","y",1,1,t,i,e,s,a,2),p("x","z","y",1,-1,t,i,-e,s,a,3),p("x","y","z",1,-1,t,e,i,s,r,4),p("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new qt(l,3)),this.setAttribute("normal",new qt(h,3)),this.setAttribute("uv",new qt(u,2));function p(_,m,g,y,S,M,A,T,x,b,N){let C=M/x,F=A/b,B=M/2,V=A/2,I=T/2,O=x+1,Y=b+1,G=0,ht=0,J=new D;for(let at=0;at<Y;at++){let P=at*F-V;for(let it=0;it<O;it++){let ft=it*C-B;J[_]=ft*y,J[m]=P*S,J[g]=I,l.push(J.x,J.y,J.z),J[_]=0,J[m]=0,J[g]=T>0?1:-1,h.push(J.x,J.y,J.z),u.push(it/x),u.push(1-at/b),G+=1}}for(let at=0;at<b;at++)for(let P=0;P<x;P++){let it=f+P+O*at,ft=f+P+O*(at+1),X=f+(P+1)+O*(at+1),rt=f+(P+1)+O*at;c.push(it,ft,rt),c.push(ft,X,rt),ht+=6}o.addGroup(d,ht,N),d+=ht,f+=G}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},$r=class n extends Me{constructor(t=1,e=1,i=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:i,radialSegments:s,heightSegments:r},e=Math.max(0,e),i=Math.max(1,Math.floor(i)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let a=[],o=[],c=[],l=[],h=e/2,u=Math.PI/2*t,f=e,d=2*u+f,p=i*2+r,_=s+1,m=new D,g=new D;for(let y=0;y<=p;y++){let S=0,M=0,A=0,T=0;if(y<=i){let N=y/i,C=N*Math.PI/2;M=-h-t*Math.cos(C),A=t*Math.sin(C),T=-t*Math.cos(C),S=N*u}else if(y<=i+r){let N=(y-i)/r;M=-h+N*e,A=t,T=0,S=u+N*f}else{let N=(y-i-r)/i,C=N*Math.PI/2;M=h+t*Math.sin(C),A=t*Math.cos(C),T=t*Math.sin(C),S=u+f+N*u}let x=Math.max(0,Math.min(1,S/d)),b=0;y===0?b=.5/s:y===p&&(b=-.5/s);for(let N=0;N<=s;N++){let C=N/s,F=C*Math.PI*2,B=Math.sin(F),V=Math.cos(F);g.x=-A*V,g.y=M,g.z=A*B,o.push(g.x,g.y,g.z),m.set(-A*V,T,A*B),m.normalize(),c.push(m.x,m.y,m.z),l.push(C+b,x)}if(y>0){let N=(y-1)*_;for(let C=0;C<s;C++){let F=N+C,B=N+C+1,V=y*_+C,I=y*_+C+1;a.push(F,B,V),a.push(B,I,V)}}}this.setIndex(a),this.setAttribute("position",new qt(o,3)),this.setAttribute("normal",new qt(c,3)),this.setAttribute("uv",new qt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},ki=class n extends Me{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);let r=[],a=[],o=[],c=[],l=new D,h=new gt;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){let d=i+u/e*s;l.x=t*Math.cos(d),l.y=t*Math.sin(d),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[f]/t+1)/2,h.y=(a[f+1]/t+1)/2,c.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new qt(a,3)),this.setAttribute("normal",new qt(o,3)),this.setAttribute("uv",new qt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.segments,t.thetaStart,t.thetaLength)}},An=class n extends Me{constructor(t=1,e=1,i=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],f=[],d=[],p=0,_=[],m=i/2,g=0;y(),a===!1&&(t>0&&S(!0),e>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new qt(u,3)),this.setAttribute("normal",new qt(f,3)),this.setAttribute("uv",new qt(d,2));function y(){let M=new D,A=new D,T=0,x=(e-t)/i;for(let b=0;b<=r;b++){let N=[],C=b/r,F=C*(e-t)+t;for(let B=0;B<=s;B++){let V=B/s,I=V*c+o,O=Math.sin(I),Y=Math.cos(I);A.x=F*O,A.y=-C*i+m,A.z=F*Y,u.push(A.x,A.y,A.z),M.set(O,x,Y).normalize(),f.push(M.x,M.y,M.z),d.push(V,1-C),N.push(p++)}_.push(N)}for(let b=0;b<s;b++)for(let N=0;N<r;N++){let C=_[N][b],F=_[N+1][b],B=_[N+1][b+1],V=_[N][b+1];(t>0||N!==0)&&(h.push(C,F,V),T+=3),(e>0||N!==r-1)&&(h.push(F,B,V),T+=3)}l.addGroup(g,T,0),g+=T}function S(M){let A=p,T=new gt,x=new D,b=0,N=M===!0?t:e,C=M===!0?1:-1;for(let B=1;B<=s;B++)u.push(0,m*C,0),f.push(0,C,0),d.push(.5,.5),p++;let F=p;for(let B=0;B<=s;B++){let I=B/s*c+o,O=Math.cos(I),Y=Math.sin(I);x.x=N*Y,x.y=m*C,x.z=N*O,u.push(x.x,x.y,x.z),f.push(0,C,0),T.x=O*.5+.5,T.y=Y*.5*C+.5,d.push(T.x,T.y),p++}for(let B=0;B<s;B++){let V=A+B,I=F+B;M===!0?h.push(I,I+1,V):h.push(I+1,I,V),b+=3}l.addGroup(g,b,M===!0?1:2),g+=b}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},bi=class n extends An{constructor(t=1,e=1,i=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,i,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new n(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var Rn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){$t("Curve: .getPoint() not implemented.")}getPointAt(t,e){let i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],i,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)i=this.getPoint(a/t),r+=i.distanceTo(s),e.push(r),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let i=this.getLengths(),s=0,r=i.length,a;e?a=e:a=t*i[r-1];let o=0,c=r-1,l;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),l=i[s]-a,l<0)o=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,i[s]===a)return s/(r-1);let h=i[s],f=i[s+1]-h,d=(a-h)/f;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),c=e||(a.isVector2?new gt:new D);return c.copy(o).sub(a).normalize(),c}getTangentAt(t,e){let i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e=!1){let i=new D,s=[],r=[],a=[],o=new D,c=new _e;for(let d=0;d<=t;d++){let p=d/t;s[d]=this.getTangentAt(p,new D)}r[0]=new D,a[0]=new D;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=l&&(l=h,i.set(1,0,0)),u<=l&&(l=u,i.set(0,1,0)),f<=l&&i.set(0,0,1),o.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(s[d-1],s[d]),o.length()>Number.EPSILON){o.normalize();let p=Math.acos(he(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(c.makeRotationAxis(o,p))}a[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(he(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(d=-d);for(let p=1;p<=t;p++)r[p].applyMatrix4(c.makeRotationAxis(s[p],d*p)),a[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}},$s=class extends Rn{constructor(t=0,e=0,i=1,s=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(t,e=new gt){let i=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=c-this.aX,d=l-this.aY;c=f*h-d*u+this.aX,l=f*u+d*h+this.aY}return i.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Fo=class extends $s{constructor(t,e,i,s,r,a){super(t,e,i,i,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Eh(){let n=0,t=0,e=0,i=0;function s(r,a,o,c){n=r,t=o,e=-3*r+3*a-2*o-c,i=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){s(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,h,u){let f=(a-r)/l-(o-r)/(l+h)+(o-a)/h,d=(o-a)/h-(c-a)/(h+u)+(c-o)/u;f*=h,d*=h,s(a,o,f,d)},calc:function(r){let a=r*r,o=a*r;return n+t*r+e*a+i*o}}}var sf=new D,rf=new D,Xc=new Eh,qc=new Eh,Yc=new Eh,Gi=class extends Rn{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new D){let i=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,h;this.closed||o>0?l=s[(o-1)%r]:(rf.subVectors(s[0],s[1]).add(s[0]),l=rf);let u=s[o%r],f=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(sf.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=sf),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,p=Math.pow(l.distanceToSquared(u),d),_=Math.pow(u.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(h),d);_<1e-4&&(_=1),p<1e-4&&(p=_),m<1e-4&&(m=_),Xc.initNonuniformCatmullRom(l.x,u.x,f.x,h.x,p,_,m),qc.initNonuniformCatmullRom(l.y,u.y,f.y,h.y,p,_,m),Yc.initNonuniformCatmullRom(l.z,u.z,f.z,h.z,p,_,m)}else this.curveType==="catmullrom"&&(Xc.initCatmullRom(l.x,u.x,f.x,h.x,this.tension),qc.initCatmullRom(l.y,u.y,f.y,h.y,this.tension),Yc.initCatmullRom(l.z,u.z,f.z,h.z,this.tension));return i.set(Xc.calc(c),qc.calc(c),Yc.calc(c)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new D().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function af(n,t,e,i,s){let r=(i-t)*.5,a=(s-e)*.5,o=n*n,c=n*o;return(2*e-2*i+r+a)*c+(-3*e+3*i-2*r-a)*o+r*n+e}function fm(n,t){let e=1-n;return e*e*t}function dm(n,t){return 2*(1-n)*n*t}function pm(n,t){return n*n*t}function Rr(n,t,e,i){return fm(n,t)+dm(n,e)+pm(n,i)}function mm(n,t){let e=1-n;return e*e*e*t}function gm(n,t){let e=1-n;return 3*e*e*n*t}function xm(n,t){return 3*(1-n)*n*n*t}function _m(n,t){return n*n*n*t}function Cr(n,t,e,i,s){return mm(n,t)+gm(n,e)+xm(n,i)+_m(n,s)}var Jr=class extends Rn{constructor(t=new gt,e=new gt,i=new gt,s=new gt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new gt){let i=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(Cr(t,s.x,r.x,a.x,o.x),Cr(t,s.y,r.y,a.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Oo=class extends Rn{constructor(t=new D,e=new D,i=new D,s=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new D){let i=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(Cr(t,s.x,r.x,a.x,o.x),Cr(t,s.y,r.y,a.y,o.y),Cr(t,s.z,r.z,a.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Kr=class extends Rn{constructor(t=new gt,e=new gt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new gt){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new gt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Bo=class extends Rn{constructor(t=new D,e=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new D){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new D){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Qr=class extends Rn{constructor(t=new gt,e=new gt,i=new gt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new gt){let i=e,s=this.v0,r=this.v1,a=this.v2;return i.set(Rr(t,s.x,r.x,a.x),Rr(t,s.y,r.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},jr=class extends Rn{constructor(t=new D,e=new D,i=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new D){let i=e,s=this.v0,r=this.v1,a=this.v2;return i.set(Rr(t,s.x,r.x,a.x),Rr(t,s.y,r.y,a.y),Rr(t,s.z,r.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ta=class extends Rn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new gt){let i=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,c=s[a===0?a:a-1],l=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return i.set(af(o,c.x,l.x,h.x,u.x),af(o,c.y,l.y,h.y,u.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new gt().fromArray(s))}return this}},zo=Object.freeze({__proto__:null,ArcCurve:Fo,CatmullRomCurve3:Gi,CubicBezierCurve:Jr,CubicBezierCurve3:Oo,EllipseCurve:$s,LineCurve:Kr,LineCurve3:Bo,QuadraticBezierCurve:Qr,QuadraticBezierCurve3:jr,SplineCurve:ta}),Ho=class extends Rn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new zo[i](e,t))}return this}getPoint(t,e){let i=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let a=s[r]-i,o=this.curves[r],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let i=0,s=this.curves.length;i<s;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],i;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,c=a.getPoints(o);for(let l=0;l<c.length;l++){let h=c[l];i&&i.equals(h)||(e.push(h),i=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this.cacheLengths=null,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(new zo[s.type]().fromJSON(s))}return this.cacheLengths=null,this}},ea=class extends Ho{constructor(t){super(),this.type="Path",this.currentPoint=new gt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let i=new Kr(this.currentPoint.clone(),new gt(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,s){let r=new Qr(this.currentPoint.clone(),new gt(t,e),new gt(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(t,e,i,s,r,a){let o=new Jr(this.currentPoint.clone(),new gt(t,e),new gt(i,s),new gt(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),i=new ta(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,s,r,a){let o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+o,e+c,i,s,r,a),this}absarc(t,e,i,s,r,a){return this.absellipse(t,e,i,i,s,r,a),this}ellipse(t,e,i,s,r,a,o,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,i,s,r,a,o,c),this}absellipse(t,e,i,s,r,a,o,c){let l=new $s(t,e,i,s,r,a,o,c);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},cs=class extends ea{constructor(t){super(t),this.uuid=$i(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let i=0,s=this.holes.length;i<s;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let s=t.holes[e];this.holes.push(new ea().fromJSON(s))}return this}};function vm(n,t,e=2){let i=t&&t.length,s=i?t[0]*e:n.length,r=id(n,0,s,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,c,l;if(i&&(r=Em(n,t,r,e)),n.length>80*e){o=n[0],c=n[1];let h=o,u=c;for(let f=e;f<s;f+=e){let d=n[f],p=n[f+1];d<o&&(o=d),p<c&&(c=p),d>h&&(h=d),p>u&&(u=p)}l=Math.max(h-o,u-c),l=l!==0?32767/l:0}return na(r,a,e,o,c,l,0),a}function id(n,t,e,i,s){let r;if(s===Um(n,t,e,i)>0)for(let a=t;a<e;a+=i)r=of(a/i|0,n[a],n[a+1],r);else for(let a=e-i;a>=t;a-=i)r=of(a/i|0,n[a],n[a+1],r);return r&&Js(r,r.next)&&(sa(r),r=r.next),r}function hs(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(Js(e,e.next)||Ue(e.prev,e,e.next)===0)){if(sa(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function na(n,t,e,i,s,r,a){if(!n)return;!a&&r&&Cm(n,i,s,r);let o=n;for(;n.prev!==n.next;){let c=n.prev,l=n.next;if(r?Mm(n,i,s,r):ym(n)){t.push(c.i,n.i,l.i),sa(n),n=l.next,o=l.next;continue}if(n=l,n===o){a?a===1?(n=Sm(hs(n),t),na(n,t,e,i,s,r,2)):a===2&&bm(n,t,e,i,s,r):na(hs(n),t,e,i,s,r,1);break}}}function ym(n){let t=n.prev,e=n,i=n.next;if(Ue(t,e,i)>=0)return!1;let s=t.x,r=e.x,a=i.x,o=t.y,c=e.y,l=i.y,h=Math.min(s,r,a),u=Math.min(o,c,l),f=Math.max(s,r,a),d=Math.max(o,c,l),p=i.next;for(;p!==t;){if(p.x>=h&&p.x<=f&&p.y>=u&&p.y<=d&&Ar(s,o,r,c,a,l,p.x,p.y)&&Ue(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function Mm(n,t,e,i){let s=n.prev,r=n,a=n.next;if(Ue(s,r,a)>=0)return!1;let o=s.x,c=r.x,l=a.x,h=s.y,u=r.y,f=a.y,d=Math.min(o,c,l),p=Math.min(h,u,f),_=Math.max(o,c,l),m=Math.max(h,u,f),g=th(d,p,t,e,i),y=th(_,m,t,e,i),S=n.prevZ,M=n.nextZ;for(;S&&S.z>=g&&M&&M.z<=y;){if(S.x>=d&&S.x<=_&&S.y>=p&&S.y<=m&&S!==s&&S!==a&&Ar(o,h,c,u,l,f,S.x,S.y)&&Ue(S.prev,S,S.next)>=0||(S=S.prevZ,M.x>=d&&M.x<=_&&M.y>=p&&M.y<=m&&M!==s&&M!==a&&Ar(o,h,c,u,l,f,M.x,M.y)&&Ue(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;S&&S.z>=g;){if(S.x>=d&&S.x<=_&&S.y>=p&&S.y<=m&&S!==s&&S!==a&&Ar(o,h,c,u,l,f,S.x,S.y)&&Ue(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;M&&M.z<=y;){if(M.x>=d&&M.x<=_&&M.y>=p&&M.y<=m&&M!==s&&M!==a&&Ar(o,h,c,u,l,f,M.x,M.y)&&Ue(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function Sm(n,t){let e=n;do{let i=e.prev,s=e.next.next;!Js(i,s)&&rd(i,e,e.next,s)&&ia(i,s)&&ia(s,i)&&(t.push(i.i,e.i,s.i),sa(e),sa(e.next),e=n=s),e=e.next}while(e!==n);return hs(e)}function bm(n,t,e,i,s,r){let a=n;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Lm(a,o)){let c=ad(a,o);a=hs(a,a.next),c=hs(c,c.next),na(a,t,e,i,s,r,0),na(c,t,e,i,s,r,0);return}o=o.next}a=a.next}while(a!==n)}function Em(n,t,e,i){let s=[];for(let r=0,a=t.length;r<a;r++){let o=t[r]*i,c=r<a-1?t[r+1]*i:n.length,l=id(n,o,c,i,!1);l===l.next&&(l.steiner=!0),s.push(Im(l))}s.sort(wm);for(let r=0;r<s.length;r++)e=Tm(s[r],e);return e}function wm(n,t){let e=n.x-t.x;if(e===0&&(e=n.y-t.y,e===0)){let i=(n.next.y-n.y)/(n.next.x-n.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=i-s}return e}function Tm(n,t){let e=Am(n,t);if(!e)return t;let i=ad(e,n);return hs(i,i.next),hs(e,e.next)}function Am(n,t){let e=t,i=n.x,s=n.y,r=-1/0,a;if(Js(n,e))return e;do{if(Js(n,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let u=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=i&&u>r&&(r=u,a=e.x<e.next.x?e:e.next,u===i))return a}e=e.next}while(e!==t);if(!a)return null;let o=a,c=a.x,l=a.y,h=1/0;e=a;do{if(i>=e.x&&e.x>=c&&i!==e.x&&sd(s<l?i:r,s,c,l,s<l?r:i,s,e.x,e.y)){let u=Math.abs(s-e.y)/(i-e.x);ia(e,n)&&(u<h||u===h&&(e.x>a.x||e.x===a.x&&Rm(a,e)))&&(a=e,h=u)}e=e.next}while(e!==o);return a}function Rm(n,t){return Ue(n.prev,n,t.prev)<0&&Ue(t.next,n,n.next)<0}function Cm(n,t,e,i){let s=n;do s.z===0&&(s.z=th(s.x,s.y,t,e,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,Pm(s)}function Pm(n){let t,e=1;do{let i=n,s;n=null;let r=null;for(t=0;i;){t++;let a=i,o=0;for(let l=0;l<e&&(o++,a=a.nextZ,!!a);l++);let c=e;for(;o>0||c>0&&a;)o!==0&&(c===0||!a||i.z<=a.z)?(s=i,i=i.nextZ,o--):(s=a,a=a.nextZ,c--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=a}r.nextZ=null,e*=2}while(t>1);return n}function th(n,t,e,i,s){return n=(n-e)*s|0,t=(t-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function Im(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function sd(n,t,e,i,s,r,a,o){return(s-a)*(t-o)>=(n-a)*(r-o)&&(n-a)*(i-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(i-o)}function Ar(n,t,e,i,s,r,a,o){return!(n===a&&t===o)&&sd(n,t,e,i,s,r,a,o)}function Lm(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!Dm(n,t)&&(ia(n,t)&&ia(t,n)&&Nm(n,t)&&(Ue(n.prev,n,t.prev)||Ue(n,t.prev,t))||Js(n,t)&&Ue(n.prev,n,n.next)>0&&Ue(t.prev,t,t.next)>0)}function Ue(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function Js(n,t){return n.x===t.x&&n.y===t.y}function rd(n,t,e,i){let s=po(Ue(n,t,e)),r=po(Ue(n,t,i)),a=po(Ue(e,i,n)),o=po(Ue(e,i,t));return!!(s!==r&&a!==o||s===0&&fo(n,e,t)||r===0&&fo(n,i,t)||a===0&&fo(e,n,i)||o===0&&fo(e,t,i))}function fo(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function po(n){return n>0?1:n<0?-1:0}function Dm(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&rd(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function ia(n,t){return Ue(n.prev,n,n.next)<0?Ue(n,t,n.next)>=0&&Ue(n,n.prev,t)>=0:Ue(n,t,n.prev)<0||Ue(n,n.next,t)<0}function Nm(n,t){let e=n,i=!1,s=(n.x+t.x)/2,r=(n.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function ad(n,t){let e=eh(n.i,n.x,n.y),i=eh(t.i,t.x,t.y),s=n.next,r=t.prev;return n.next=t,t.prev=n,e.next=s,s.prev=e,i.next=e,e.prev=i,r.next=i,i.prev=r,i}function of(n,t,e,i){let s=eh(n,t,e);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function sa(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function eh(n,t,e){return{i:n,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Um(n,t,e,i){let s=0;for(let r=t,a=e-i;r<e;r+=i)s+=(n[a]-n[r])*(n[r+1]+n[a+1]),a=r;return s}var nh=class{static triangulate(t,e,i=2){return vm(t,e,i)}},os=class n{static area(t){let e=t.length,i=0;for(let s=e-1,r=0;r<e;s=r++)i+=t[s].x*t[r].y-t[r].x*t[s].y;return i*.5}static isClockWise(t){return n.area(t)<0}static triangulateShape(t,e){let i=[],s=[],r=[];lf(t),cf(i,t);let a=t.length;e.forEach(lf);for(let c=0;c<e.length;c++)s.push(a),a+=e[c].length,cf(i,e[c]);let o=nh.triangulate(i,s);for(let c=0;c<o.length;c+=3)r.push(o.slice(c,c+3));return r}};function lf(n){let t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function cf(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}var Ks=class n extends Me{constructor(t=new cs([new gt(.5,.5),new gt(-.5,.5),new gt(-.5,-.5),new gt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let i=this,s=[],r=[];for(let o=0,c=t.length;o<c;o++){let l=t[o];a(l)}this.setAttribute("position",new qt(s,3)),this.setAttribute("uv",new qt(r,2)),this.computeVertexNormals();function a(o){let c=[],l=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,p=e.bevelSize!==void 0?e.bevelSize:d-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,g=e.extrudePath,y=e.UVGenerator!==void 0?e.UVGenerator:Fm,S,M=!1,A,T,x,b;if(g){S=g.getSpacedPoints(h),M=!0,f=!1;let ct=g.isCatmullRomCurve3?g.closed:!1;A=g.computeFrenetFrames(h,ct),T=new D,x=new D,b=new D}f||(m=0,d=0,p=0,_=0);let N=o.extractPoints(l),C=N.shape,F=N.holes;if(!os.isClockWise(C)){C=C.reverse();for(let ct=0,wt=F.length;ct<wt;ct++){let St=F[ct];os.isClockWise(St)&&(F[ct]=St.reverse())}}function V(ct){let St=10000000000000001e-36,mt=ct[0];for(let bt=1;bt<=ct.length;bt++){let Zt=bt%ct.length,Bt=ct[Zt],jt=Bt.x-mt.x,Kt=Bt.y-mt.y,ee=jt*jt+Kt*Kt,z=Math.max(Math.abs(Bt.x),Math.abs(Bt.y),Math.abs(mt.x),Math.abs(mt.y)),Re=St*z*z;if(ee<=Re){ct.splice(Zt,1),bt--;continue}mt=Bt}}V(C),F.forEach(V);let I=F.length,O=C;for(let ct=0;ct<I;ct++){let wt=F[ct];C=C.concat(wt)}function Y(ct,wt,St){return wt||Jt("ExtrudeGeometry: vec does not exist"),ct.clone().addScaledVector(wt,St)}let G=C.length;function ht(ct,wt,St){let mt,bt,Zt,Bt=ct.x-wt.x,jt=ct.y-wt.y,Kt=St.x-ct.x,ee=St.y-ct.y,z=Bt*Bt+jt*jt,Re=Bt*ee-jt*Kt;if(Math.abs(Re)>Number.EPSILON){let Pt=Math.sqrt(z),ne=Math.sqrt(Kt*Kt+ee*ee),Et=wt.x-jt/Pt,L=wt.y+Bt/Pt,q=St.x-ee/ne,et=St.y+Kt/ne,E=((q-Et)*ee-(et-L)*Kt)/(Bt*ee-jt*Kt);mt=Et+Bt*E-ct.x,bt=L+jt*E-ct.y;let v=mt*mt+bt*bt;if(v<=2)return new gt(mt,bt);Zt=Math.sqrt(v/2)}else{let Pt=!1;Bt>Number.EPSILON?Kt>Number.EPSILON&&(Pt=!0):Bt<-Number.EPSILON?Kt<-Number.EPSILON&&(Pt=!0):Math.sign(jt)===Math.sign(ee)&&(Pt=!0),Pt?(mt=-jt,bt=Bt,Zt=Math.sqrt(z)):(mt=Bt,bt=jt,Zt=Math.sqrt(z/2))}return new gt(mt/Zt,bt/Zt)}let J=[];for(let ct=0,wt=O.length,St=wt-1,mt=ct+1;ct<wt;ct++,St++,mt++)St===wt&&(St=0),mt===wt&&(mt=0),J[ct]=ht(O[ct],O[St],O[mt]);let at=[],P,it=J.concat();for(let ct=0,wt=I;ct<wt;ct++){let St=F[ct];P=[];for(let mt=0,bt=St.length,Zt=bt-1,Bt=mt+1;mt<bt;mt++,Zt++,Bt++)Zt===bt&&(Zt=0),Bt===bt&&(Bt=0),P[mt]=ht(St[mt],St[Zt],St[Bt]);at.push(P),it=it.concat(P)}let ft;if(m===0)ft=os.triangulateShape(O,F);else{let ct=[],wt=[];for(let St=0;St<m;St++){let mt=St/m,bt=d*Math.cos(mt*Math.PI/2),Zt=p*Math.sin(mt*Math.PI/2)+_;for(let Bt=0,jt=O.length;Bt<jt;Bt++){let Kt=Y(O[Bt],J[Bt],Zt);Ft(Kt.x,Kt.y,-bt),mt===0&&ct.push(Kt)}for(let Bt=0,jt=I;Bt<jt;Bt++){let Kt=F[Bt];P=at[Bt];let ee=[];for(let z=0,Re=Kt.length;z<Re;z++){let Pt=Y(Kt[z],P[z],Zt);Ft(Pt.x,Pt.y,-bt),mt===0&&ee.push(Pt)}mt===0&&wt.push(ee)}}ft=os.triangulateShape(ct,wt)}let X=ft.length,rt=p+_;for(let ct=0;ct<G;ct++){let wt=f?Y(C[ct],it[ct],rt):C[ct];M?(x.copy(A.normals[0]).multiplyScalar(wt.x),T.copy(A.binormals[0]).multiplyScalar(wt.y),b.copy(S[0]).add(x).add(T),Ft(b.x,b.y,b.z)):Ft(wt.x,wt.y,0)}for(let ct=1;ct<=h;ct++)for(let wt=0;wt<G;wt++){let St=f?Y(C[wt],it[wt],rt):C[wt];M?(x.copy(A.normals[ct]).multiplyScalar(St.x),T.copy(A.binormals[ct]).multiplyScalar(St.y),b.copy(S[ct]).add(x).add(T),Ft(b.x,b.y,b.z)):Ft(St.x,St.y,u/h*ct)}for(let ct=m-1;ct>=0;ct--){let wt=ct/m,St=d*Math.cos(wt*Math.PI/2),mt=p*Math.sin(wt*Math.PI/2)+_;for(let bt=0,Zt=O.length;bt<Zt;bt++){let Bt=Y(O[bt],J[bt],mt);Ft(Bt.x,Bt.y,u+St)}for(let bt=0,Zt=F.length;bt<Zt;bt++){let Bt=F[bt];P=at[bt];for(let jt=0,Kt=Bt.length;jt<Kt;jt++){let ee=Y(Bt[jt],P[jt],mt);M?Ft(ee.x,ee.y+S[h-1].y,S[h-1].x+St):Ft(ee.x,ee.y,u+St)}}}pt(),Nt();function pt(){let ct=s.length/3;if(f){let wt=0,St=G*wt;for(let mt=0;mt<X;mt++){let bt=ft[mt];pe(bt[2]+St,bt[1]+St,bt[0]+St)}wt=h+m*2,St=G*wt;for(let mt=0;mt<X;mt++){let bt=ft[mt];pe(bt[0]+St,bt[1]+St,bt[2]+St)}}else{for(let wt=0;wt<X;wt++){let St=ft[wt];pe(St[2],St[1],St[0])}for(let wt=0;wt<X;wt++){let St=ft[wt];pe(St[0]+G*h,St[1]+G*h,St[2]+G*h)}}i.addGroup(ct,s.length/3-ct,0)}function Nt(){let ct=s.length/3,wt=0;_t(O,wt),wt+=O.length;for(let St=0,mt=F.length;St<mt;St++){let bt=F[St];_t(bt,wt),wt+=bt.length}i.addGroup(ct,s.length/3-ct,1)}function _t(ct,wt){let St=ct.length;for(;--St>=0;){let mt=St,bt=St-1;bt<0&&(bt=ct.length-1);for(let Zt=0,Bt=h+m*2;Zt<Bt;Zt++){let jt=G*Zt,Kt=G*(Zt+1),ee=wt+mt+jt,z=wt+bt+jt,Re=wt+bt+Kt,Pt=wt+mt+Kt;Xt(ee,z,Re,Pt)}}}function Ft(ct,wt,St){c.push(ct),c.push(wt),c.push(St)}function pe(ct,wt,St){se(ct),se(wt),se(St);let mt=s.length/3,bt=y.generateTopUV(i,s,mt-3,mt-2,mt-1);re(bt[0]),re(bt[1]),re(bt[2])}function Xt(ct,wt,St,mt){se(ct),se(wt),se(mt),se(wt),se(St),se(mt);let bt=s.length/3,Zt=y.generateSideWallUV(i,s,bt-6,bt-3,bt-2,bt-1);re(Zt[0]),re(Zt[1]),re(Zt[3]),re(Zt[1]),re(Zt[2]),re(Zt[3])}function se(ct){s.push(c[ct*3+0]),s.push(c[ct*3+1]),s.push(c[ct*3+2])}function re(ct){r.push(ct.x),r.push(ct.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return Om(e,i,t)}static fromJSON(t,e){let i=[];for(let r=0,a=t.shapes.length;r<a;r++){let o=e[t.shapes[r]];i.push(o)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new zo[s.type]().fromJSON(s)),new n(i,t.options)}},Fm={generateTopUV:function(n,t,e,i,s){let r=t[e*3],a=t[e*3+1],o=t[i*3],c=t[i*3+1],l=t[s*3],h=t[s*3+1];return[new gt(r,a),new gt(o,c),new gt(l,h)]},generateSideWallUV:function(n,t,e,i,s,r){let a=t[e*3],o=t[e*3+1],c=t[e*3+2],l=t[i*3],h=t[i*3+1],u=t[i*3+2],f=t[s*3],d=t[s*3+1],p=t[s*3+2],_=t[r*3],m=t[r*3+1],g=t[r*3+2];return Math.abs(o-h)<Math.abs(a-l)?[new gt(a,1-c),new gt(l,1-u),new gt(f,1-p),new gt(_,1-g)]:[new gt(o,1-c),new gt(h,1-u),new gt(d,1-p),new gt(m,1-g)]}};function Om(n,t,e){if(e.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){let r=n[i];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var ra=class n extends Me{constructor(t=[new gt(0,-.5),new gt(.5,0),new gt(0,.5)],e=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:i,phiLength:s},e=Math.floor(e),s=he(s,0,Math.PI*2);let r=[],a=[],o=[],c=[],l=[],h=1/e,u=new D,f=new gt,d=new D,p=new D,_=new D,m=0,g=0;for(let y=0;y<=t.length-1;y++)switch(y){case 0:m=t[y+1].x-t[y].x,g=t[y+1].y-t[y].y,d.x=g*1,d.y=-m,d.z=g*0,_.copy(d),d.normalize(),c.push(d.x,d.y,d.z);break;case t.length-1:_.normalize(),c.push(_.x,_.y,_.z);break;default:m=t[y+1].x-t[y].x,g=t[y+1].y-t[y].y,d.x=g*1,d.y=-m,d.z=g*0,p.copy(d),d.x+=_.x,d.y+=_.y,d.z+=_.z,d.normalize(),c.push(d.x,d.y,d.z),_.copy(p)}for(let y=0;y<=e;y++){let S=i+y*h*s,M=Math.sin(S),A=Math.cos(S);for(let T=0;T<=t.length-1;T++){u.x=t[T].x*M,u.y=t[T].y,u.z=t[T].x*A,a.push(u.x,u.y,u.z),f.x=y/e,f.y=T/(t.length-1),o.push(f.x,f.y);let x=c[3*T+0]*M,b=c[3*T+1],N=c[3*T+0]*A;l.push(x,b,N)}}for(let y=0;y<e;y++)for(let S=0;S<t.length-1;S++){let M=S+y*t.length,A=M,T=M+t.length,x=M+t.length+1,b=M+1;r.push(A,T,b),r.push(x,b,T)}this.setIndex(r),this.setAttribute("position",new qt(a,3)),this.setAttribute("uv",new qt(o,2)),this.setAttribute("normal",new qt(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.points,t.segments,t.phiStart,t.phiLength)}};var Fe=class n extends Me{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(i),c=Math.floor(s),l=o+1,h=c+1,u=t/o,f=e/c,d=[],p=[],_=[],m=[];for(let g=0;g<h;g++){let y=g*f-a;for(let S=0;S<l;S++){let M=S*u-r;p.push(M,-y,0),_.push(0,0,1),m.push(S/o),m.push(1-g/c)}}for(let g=0;g<c;g++)for(let y=0;y<o;y++){let S=y+l*g,M=y+l*(g+1),A=y+1+l*(g+1),T=y+1+l*g;d.push(S,M,T),d.push(M,A,T)}this.setIndex(d),this.setAttribute("position",new qt(p,3)),this.setAttribute("normal",new qt(_,3)),this.setAttribute("uv",new qt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}},aa=class n extends Me{constructor(t=.5,e=1,i=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:a},i=Math.max(3,i),s=Math.max(1,s);let o=[],c=[],l=[],h=[],u=t,f=(e-t)/s,d=new D,p=new gt;for(let _=0;_<=s;_++){for(let m=0;m<=i;m++){let g=r+m/i*a;d.x=u*Math.cos(g),d.y=u*Math.sin(g),c.push(d.x,d.y,d.z),l.push(0,0,1),p.x=(d.x/e+1)/2,p.y=(d.y/e+1)/2,h.push(p.x,p.y)}u+=f}for(let _=0;_<s;_++){let m=_*(i+1);for(let g=0;g<i;g++){let y=g+m,S=y,M=y+i+1,A=y+i+2,T=y+1;o.push(S,M,T),o.push(M,A,T)}}this.setIndex(o),this.setAttribute("position",new qt(c,3)),this.setAttribute("normal",new qt(l,3)),this.setAttribute("uv",new qt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var zn=class n extends Me{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let c=Math.min(a+o,Math.PI),l=0,h=[],u=new D,f=new D,d=[],p=[],_=[],m=[];for(let g=0;g<=i;g++){let y=[],S=g/i,M=a+S*o,A=t*Math.cos(M),T=Math.sqrt(t*t-A*A),x=0;g===0&&a===0?x=.5/e:g===i&&c===Math.PI&&(x=-.5/e);for(let b=0;b<=e;b++){let N=b/e,C=s+N*r;u.x=-T*Math.cos(C),u.y=A,u.z=T*Math.sin(C),p.push(u.x,u.y,u.z),f.copy(u).normalize(),_.push(f.x,f.y,f.z),m.push(N+x,1-S),y.push(l++)}h.push(y)}for(let g=0;g<i;g++)for(let y=0;y<e;y++){let S=h[g][y+1],M=h[g][y],A=h[g+1][y],T=h[g+1][y+1];(g!==0||a>0)&&d.push(S,M,T),(g!==i-1||c<Math.PI)&&d.push(M,A,T)}this.setIndex(d),this.setAttribute("position",new qt(p,3)),this.setAttribute("normal",new qt(_,3)),this.setAttribute("uv",new qt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var oa=class n extends Me{constructor(t=1,e=.4,i=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},i=Math.floor(i),s=Math.floor(s);let c=[],l=[],h=[],u=[],f=new D,d=new D,p=new D;for(let _=0;_<=i;_++){let m=a+_/i*o;for(let g=0;g<=s;g++){let y=g/s*r;d.x=(t+e*Math.cos(m))*Math.cos(y),d.y=(t+e*Math.cos(m))*Math.sin(y),d.z=e*Math.sin(m),l.push(d.x,d.y,d.z),f.x=t*Math.cos(y),f.y=t*Math.sin(y),p.subVectors(d,f).normalize(),h.push(p.x,p.y,p.z),u.push(g/s),u.push(_/i)}}for(let _=1;_<=i;_++)for(let m=1;m<=s;m++){let g=(s+1)*_+m-1,y=(s+1)*(_-1)+m-1,S=(s+1)*(_-1)+m,M=(s+1)*_+m;c.push(g,y,M),c.push(y,S,M)}this.setIndex(c),this.setAttribute("position",new qt(l,3)),this.setAttribute("normal",new qt(h,3)),this.setAttribute("uv",new qt(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};var us=class n extends Me{constructor(t=new jr(new D(-1,-1,0),new D(-1,1,0),new D(1,1,0)),e=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:i,radialSegments:s,closed:r};let a=t.computeFrenetFrames(e,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new D,c=new D,l=new gt,h=new D,u=[],f=[],d=[],p=[];_(),this.setIndex(p),this.setAttribute("position",new qt(u,3)),this.setAttribute("normal",new qt(f,3)),this.setAttribute("uv",new qt(d,2));function _(){for(let S=0;S<e;S++)m(S);m(r===!1?e:0),y(),g()}function m(S){h=t.getPointAt(S/e,h);let M=a.normals[S],A=a.binormals[S];for(let T=0;T<=s;T++){let x=T/s*Math.PI*2,b=Math.sin(x),N=-Math.cos(x);c.x=N*M.x+b*A.x,c.y=N*M.y+b*A.y,c.z=N*M.z+b*A.z,c.normalize(),f.push(c.x,c.y,c.z),o.x=h.x+i*c.x,o.y=h.y+i*c.y,o.z=h.z+i*c.z,u.push(o.x,o.y,o.z)}}function g(){for(let S=1;S<=e;S++)for(let M=1;M<=s;M++){let A=(s+1)*(S-1)+(M-1),T=(s+1)*S+(M-1),x=(s+1)*S+M,b=(s+1)*(S-1)+M;p.push(A,T,b),p.push(T,x,b)}}function y(){for(let S=0;S<=e;S++)for(let M=0;M<=s;M++)l.x=S/e,l.y=M/s,d.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new n(new zo[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};function _s(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];if(hf(s))s.isRenderTargetTexture?($t("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone();else if(Array.isArray(s))if(hf(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][i]=r}else t[e][i]=s.slice();else t[e][i]=s}}return t}function un(n){let t={};for(let e=0;e<n.length;e++){let i=_s(n[e]);for(let s in i)t[s]=i[s]}return t}function hf(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function Bm(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function wh(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:fe.workingColorSpace}var Ri={clone:_s,merge:un},zm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Hm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Oe=class extends ni{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=zm,this.fragmentShader=Hm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=_s(t.uniforms),this.uniformsGroups=Bm(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let i in t.uniforms){let s=t.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=e[s.value]||null;break;case"c":this.uniforms[i].value=new Gt().setHex(s.value);break;case"v2":this.uniforms[i].value=new gt().fromArray(s.value);break;case"v3":this.uniforms[i].value=new D().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Le().fromArray(s.value);break;case"m3":this.uniforms[i].value=new Qt().fromArray(s.value);break;case"m4":this.uniforms[i].value=new _e().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Qs=class extends Oe{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},ie=class extends ni{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Gt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Gt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Gl,this.normalScale=new gt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},ii=class extends ie{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new gt(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return he(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new Gt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Gt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Gt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(t){this._diffuseRoughness>0!=t>0&&this.version++,this._diffuseRoughness=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(t){this._retroreflectivity>0!=t>0&&this.version++,this._retroreflectivity=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}get iridescenceThicknessRange(){return ls('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(t){ls('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=t[0],this.iridescenceThicknessMaximum=t[1]}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.diffuseRoughness=t.diffuseRoughness,this.diffuseRoughnessMap=t.diffuseRoughnessMap,this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum,this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.retroreflectivity=t.retroreflectivity,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var ko=class extends ni{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Hf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Go=class extends ni{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function zs(n,t){return!n||n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function mo(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var Vi=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],r=e[i-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=i+2;;){if(s===void 0){if(t<r)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=s,s=e[++i],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(i=2,r=o);for(let c=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(s=r,r=e[--i-1],t>=r)break t}a=i,i=0;break e}break n}for(;i<a;){let o=i+a>>>1;t<e[o]?a=o:i=o+1}if(s=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=i[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Vo=class extends Vi{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Jc,endingEnd:Jc}}intervalChanged_(t,e,i){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Kc:r=t,o=2*e-i;break;case Qc:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=i}if(c===void 0)switch(this.getSettings_().endingEnd){case Kc:a=t,c=2*i-e;break;case Qc:a=1,c=i+s[1]-s[0];break;default:a=t-1,c=e}let l=(i-e)*.5,h=this.valueSize;this._weightPrev=l/(e-o),this._weightNext=l/(c-i),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,p=(i-e)/(s-e),_=p*p,m=_*p,g=-f*m+2*f*_-f*p,y=(1+f)*m+(-1.5-2*f)*_+(-.5+f)*p+1,S=(-1-d)*m+(1.5+d)*_+.5*p,M=d*m-d*_;for(let A=0;A!==o;++A)r[A]=g*a[h+A]+y*a[l+A]+S*a[c+A]+M*a[u+A];return r}},Wo=class extends Vi{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=(i-e)/(s-e),u=1-h;for(let f=0;f!==o;++f)r[f]=a[l+f]*u+a[c+f]*h;return r}},Xo=class extends Vi{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},qo=class extends Vi{interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=this.inTangents,u=this.outTangents;if(!h||!u){let p=(i-e)/(s-e),_=1-p;for(let m=0;m!==o;++m)r[m]=a[l+m]*_+a[c+m]*p;return r}let f=o*2,d=t-1;for(let p=0;p!==o;++p){let _=a[l+p],m=a[c+p],g=d*f+p*2,y=u[g],S=u[g+1],M=t*f+p*2,A=h[M],T=h[M+1],x=Gm(i,e,y,A,s);r[p]=od(x,_,S,T,m)}return r}};function od(n,t,e,i,s){let r=1-n;return r*r*r*t+3*r*r*n*e+3*r*n*n*i+n*n*n*s}function km(n,t,e,i,s){let r=1-n;return 3*r*r*(e-t)+6*r*n*(i-e)+3*n*n*(s-i)}function Gm(n,t,e,i,s){let r=(n-t)/(s-t);for(let a=0;a<8;a++){let o=od(r,t,e,i,s)-n;if(Math.abs(o)<1e-10)break;let c=km(r,t,e,i,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-o/c))}return r}var Cn=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=zs(e,this.TimeBufferType),this.values=zs(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:zs(t.times,Array),values:zs(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s),mo(t.settings)&&(i.settings={inTangents:zs(t.settings.inTangents,Array),outTangents:zs(t.settings.outTangents,Array)})}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new Xo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Wo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Vo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new qo(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Pr:e=this.InterpolantFactoryMethodDiscrete;break;case Ro:e=this.InterpolantFactoryMethodLinear;break;case _o:e=this.InterpolantFactoryMethodSmooth;break;case $c:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return $t("KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Pr;case this.InterpolantFactoryMethodLinear:return Ro;case this.InterpolantFactoryMethodSmooth:return _o;case this.InterpolantFactoryMethodBezier:return $c}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t;mo(this.settings)&&(uf(this.settings.inTangents,t),uf(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t;mo(this.settings)&&(ff(this.settings.inTangents,t),ff(this.settings.outTangents,t))}return this}trim(t,e){let i=this.times,s=i.length,r=0,a=s-1;for(;r!==s&&i[r]<t;)++r;for(;a!==-1&&i[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Jt("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&(Jt("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let c=i[o];if(typeof c=="number"&&isNaN(c)){Jt("KeyframeTrack: Time is not a valid number.",this,o,c),t=!1;break}if(a!==null&&a>c){Jt("KeyframeTrack: Out of order keys.",this,o,c,a),t=!1;break}a=c}if(s!==void 0&&Xp(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){Jt("KeyframeTrack: Value is not a valid number.",this,o,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===_o,r=t.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=t[o],h=t[o+1];if(l!==h&&(o!==1||l!==t[0]))if(s)c=!0;else{let u=o*i,f=u-i,d=u+i;for(let p=0;p!==i;++p){let _=e[u+p];if(_!==e[f+p]||_!==e[d+p]){c=!0;break}}}if(c){if(o!==a){t[a]=t[o];let u=o*i,f=a*i;for(let d=0;d!==i;++d)e[f+d]=e[u+d]}++a}}if(r>0){t[a]=t[r];for(let o=r*i,c=a*i,l=0;l!==i;++l)e[c+l]=e[o+l];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,mo(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function uf(n,t){for(let e=0,i=n.length;e!==i;e+=2)n[e]+=t}function ff(n,t){for(let e=0,i=n.length;e!==i;e+=2)n[e]*=t}Cn.prototype.ValueTypeName="";Cn.prototype.TimeBufferType=Float32Array;Cn.prototype.ValueBufferType=Float32Array;Cn.prototype.DefaultInterpolation=Ro;var Wi=class extends Cn{constructor(t,e,i){super(t,e,i)}};Wi.prototype.ValueTypeName="bool";Wi.prototype.ValueBufferType=Array;Wi.prototype.DefaultInterpolation=Pr;Wi.prototype.InterpolantFactoryMethodLinear=void 0;Wi.prototype.InterpolantFactoryMethodSmooth=void 0;var Yo=class extends Cn{constructor(t,e,i,s){super(t,e,i,s)}};Yo.prototype.ValueTypeName="color";var Zo=class extends Cn{constructor(t,e,i,s){super(t,e,i,s)}};Zo.prototype.ValueTypeName="number";var $o=class extends Vi{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(i-e)/(s-e),l=t*o;for(let h=l+o;l!==h;l+=4)Fn.slerpFlat(r,0,a,l-o,a,l,c);return r}},la=class extends Cn{constructor(t,e,i,s){super(t,e,i,s)}InterpolantFactoryMethodLinear(t){return new $o(this.times,this.values,this.getValueSize(),t)}};la.prototype.ValueTypeName="quaternion";la.prototype.InterpolantFactoryMethodSmooth=void 0;var Xi=class extends Cn{constructor(t,e,i){super(t,e,i)}};Xi.prototype.ValueTypeName="string";Xi.prototype.ValueBufferType=Array;Xi.prototype.DefaultInterpolation=Pr;Xi.prototype.InterpolantFactoryMethodLinear=void 0;Xi.prototype.InterpolantFactoryMethodSmooth=void 0;var Jo=class extends Cn{constructor(t,e,i,s){super(t,e,i,s)}};Jo.prototype.ValueTypeName="vector";var Ko=class{constructor(t,e,i){let s=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=l.length;u<f;u+=2){let d=l[u],p=l[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},ld=new Ko,Qo=class{constructor(t){this.manager=t!==void 0?t:ld,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};Qo.DEFAULT_MATERIAL_NAME="__DEFAULT";var ca=class extends ze{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Gt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},ha=class extends ca{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ze.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Gt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},Zc=new _e,df=new D,pf=new D,jo=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new gt(512,512),this.mapType=bn,this.map=null,this.mapPass=null,this.matrix=new _e,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Hi,this._frameExtents=new gt(1,1),this._viewportCount=1,this._viewports=[new Le(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;df.setFromMatrixPosition(t.matrixWorld),e.position.copy(df),pf.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(pf),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,i,s){Zc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),i.setFromProjectionMatrix(Zc,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,c=s?s.x/r.x:0,l=s?s.y/r.y:0;t.coordinateSystem===Ws||t.reversedDepth?e.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),e.multiply(Zc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},go=new D,xo=new Fn,ti=new D,ua=class extends ze{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _e,this.projectionMatrix=new _e,this.projectionMatrixInverse=new _e,this.coordinateSystem=Un,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(go,xo,ti),ti.x===1&&ti.y===1&&ti.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(go,xo,ti.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(go,xo,ti),ti.x===1&&ti.y===1&&ti.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(go,xo,ti.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Oi=new D,mf=new gt,gf=new gt,gn=class extends ua{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Co*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(bc*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Co*2*Math.atan(Math.tan(bc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Oi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Oi.x,Oi.y).multiplyScalar(-t/Oi.z),Oi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Oi.x,Oi.y).multiplyScalar(-t/Oi.z)}getViewSize(t,e){return this.getViewBounds(t,mf,gf),e.subVectors(gf,mf)}setViewOffset(t,e,i,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(bc*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,e-=a.offsetY*i/l,s*=a.width/c,i*=a.height/l}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var fs=class extends ua{constructor(t=-1,e=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,a=i+t,o=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},ih=class extends jo{constructor(){super(new fs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},fa=class extends ca{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ze.DEFAULT_UP),this.updateMatrix(),this.target=new ze,this.shadow=new ih}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var Hs=-90,ks=1,js=class extends ze{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new gn(Hs,ks,t,e);s.layers=this.layers,this.add(s);let r=new gn(Hs,ks,t,e);r.layers=this.layers,this.add(r);let a=new gn(Hs,ks,t,e);a.layers=this.layers,this.add(a);let o=new gn(Hs,ks,t,e);o.layers=this.layers,this.add(o);let c=new gn(Hs,ks,t,e);c.layers=this.layers,this.add(c);let l=new gn(Hs,ks,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,r,a,o,c]=e;for(let l of e)this.remove(l);if(t===Un)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Ws)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;let _=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(i,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(i,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),i.texture.mipmapsAutoUpdate=_,t.setRenderTarget(i,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=p,i.texture.needsPMREMUpdate=!0}},tl=class extends gn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}},da=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(t){this._document=t,t.hidden!==void 0&&(this._pageVisibilityHandler=Vm.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(t){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function Vm(){this._document.hidden===!1&&this.reset()}var Th="\\[\\]\\.:\\/",Wm=new RegExp("["+Th+"]","g"),Ah="[^"+Th+"]",Xm="[^"+Th.replace("\\.","")+"]",qm=/((?:WC+[\/:])*)/.source.replace("WC",Ah),Ym=/(WCOD+)?/.source.replace("WCOD",Xm),Zm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ah),$m=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ah),Jm=new RegExp("^"+qm+Ym+Zm+$m+"$"),Km=["material","materials","bones","map"],sh=class{constructor(t,e,i){let s=i||Ie.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},Ie=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Wm,"")}static parseTrackName(t){let e=Jm.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);Km.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let c=i(o.children);if(c)return c}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){$t("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=e.objectIndex;switch(i){case"materials":if(!t.material){Jt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Jt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Jt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Jt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Jt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){Jt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(l!==void 0){if(t[l]===void 0){Jt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let a=t[s];if(a===void 0){let l=e.nodeName;Jt("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Jt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Jt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ie.Composite=sh;Ie.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ie.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ie.prototype.GetterByBindingType=[Ie.prototype._getValue_direct,Ie.prototype._getValue_array,Ie.prototype._getValue_arrayElement,Ie.prototype._getValue_toArray];Ie.prototype.SetterByBindingTypeAndVersioning=[[Ie.prototype._setValue_direct,Ie.prototype._setValue_direct_setNeedsUpdate,Ie.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ie.prototype._setValue_array,Ie.prototype._setValue_array_setNeedsUpdate,Ie.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ie.prototype._setValue_arrayElement,Ie.prototype._setValue_arrayElement_setNeedsUpdate,Ie.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ie.prototype._setValue_fromArray,Ie.prototype._setValue_fromArray_setNeedsUpdate,Ie.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var ky=new Float32Array(1);var rh=class{static{this.prototype.isMatrix2=!0}constructor(t,e,i,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=i,r[3]=s,this}};function Rh(n,t,e,i){let s=Qm(i);switch(e){case xh:return n*t;case ll:return n*t/s.components*s.byteLength;case cl:return n*t/s.components*s.byteLength;case Zi:return n*t*2/s.components*s.byteLength;case hl:return n*t*2/s.components*s.byteLength;case _h:return n*t*3/s.components*s.byteLength;case $n:return n*t*4/s.components*s.byteLength;case ul:return n*t*4/s.components*s.byteLength;case Sa:case ba:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Ea:case wa:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case dl:case ml:return Math.max(n,16)*Math.max(t,8)/4;case fl:case pl:return Math.max(n,8)*Math.max(t,8)/2;case gl:case xl:case vl:case yl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case _l:case Ta:case Ml:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Sl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case bl:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case El:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case wl:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Tl:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Al:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Rl:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Cl:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Pl:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Il:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Ll:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Dl:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Nl:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Ul:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Fl:case Ol:case Bl:return Math.ceil(n/4)*Math.ceil(t/4)*16;case zl:case Hl:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Aa:case kl:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Qm(n){switch(n){case bn:case dh:return{byteLength:1,components:1};case nr:case ph:case rn:return{byteLength:2,components:1};case al:case ol:return{byteLength:2,components:4};case Zn:case rl:case Hn:return{byteLength:4,components:1};case mh:case gh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?$t("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function Pd(){let n=null,t=!1,e=null,i=null;function s(r,a){i=n.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&n!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function t0(n){let t=new WeakMap;function e(o,c){let l=o.array,h=o.usage,u=l.byteLength,f=n.createBuffer();n.bindBuffer(c,f),n.bufferData(c,l,h),o.onUploadCallback();let d;if(l instanceof Float32Array)d=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)d=n.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=n.SHORT;else if(l instanceof Uint32Array)d=n.UNSIGNED_INT;else if(l instanceof Int32Array)d=n.INT;else if(l instanceof Int8Array)d=n.BYTE;else if(l instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:u}}function i(o,c,l){let h=c.array,u=c.updateRanges;if(n.bindBuffer(l,o),u.length===0)n.bufferSubData(l,0,h);else{u.sort((d,p)=>d.start-p.start);let f=0;for(let d=1;d<u.length;d++){let p=u[f],_=u[d];_.start<=p.start+p.count+1?p.count=Math.max(p.count,_.start+_.count-p.start):(++f,u[f]=_)}u.length=f+1;for(let d=0,p=u.length;d<p;d++){let _=u[d];n.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=t.get(o);c&&(n.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var e0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,n0=`#ifdef USE_ALPHAHASH
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
#endif`,i0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,s0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,r0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,a0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,o0=`#ifdef USE_AOMAP
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
#endif`,l0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,c0=`#ifdef USE_BATCHING
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
#endif`,h0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,u0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,f0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,d0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,p0=`#ifdef USE_IRIDESCENCE
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
#endif`,m0=`#ifdef USE_BUMPMAP
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
#endif`,g0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,x0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,_0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,v0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,y0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,M0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,S0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,b0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,E0=`#define PI 3.141592653589793
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
} // validated`,w0=`vec3 transformedNormal = objectNormal;
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
#endif`,T0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,A0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,R0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,C0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,P0="gl_FragColor = linearToOutputTexel( gl_FragColor );",I0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,L0=`#ifdef USE_ENVMAP
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
#endif`,D0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,N0=`#ifdef USE_ENVMAP
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
#endif`,U0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,F0=`#ifdef USE_ENVMAP
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
#endif`,O0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,B0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,z0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,H0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,k0=`#ifdef USE_GRADIENTMAP
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
}`,G0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,V0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,W0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,X0=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,q0=`#ifdef USE_ENVMAP
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
#endif`,Y0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Z0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,$0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,J0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,K0=`PhysicalMaterial material;
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
#endif`,Q0=`uniform sampler2D dfgLUT;
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
}`,j0=`
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
#endif`,tg=`#if defined( RE_IndirectDiffuse )
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
#endif`,eg=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ng=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,ig=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,sg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ag=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,og=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,lg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,cg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,hg=`#if defined( USE_POINTS_UV )
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
#endif`,ug=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,fg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,dg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,pg=`#if defined( USE_MORPHCOLORS )
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
#endif`,mg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gg=`#ifdef USE_MORPHTARGETS
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
#endif`,xg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_g=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,vg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,yg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Mg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Sg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,bg=`#ifdef USE_NORMALMAP
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
#endif`,Eg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,wg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Tg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ag=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Rg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Cg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Pg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ig=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Lg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Dg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ng=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ug=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Fg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Og=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Bg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,zg=`float getShadowMask() {
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
}`,Hg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,kg=`#ifdef USE_SKINNING
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
#endif`,Gg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Vg=`#ifdef USE_SKINNING
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
#endif`,Wg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Xg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,qg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Yg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Zg=`#ifdef USE_TRANSMISSION
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
#endif`,$g=`#ifdef USE_TRANSMISSION
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
#endif`,Jg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Kg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Qg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,tx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ex=`uniform sampler2D t2D;
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
}`,nx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ix=`uniform float backgroundBlurriness;
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
}`,sx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ax=`#include <common>
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
}`,ox=`#if DEPTH_PACKING == 3200
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
}`,lx=`#define DISTANCE
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
}`,cx=`#define DISTANCE
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
}`,hx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ux=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fx=`uniform float scale;
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
}`,dx=`uniform vec3 diffuse;
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
}`,px=`#include <common>
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
}`,mx=`uniform vec3 diffuse;
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
}`,gx=`#define LAMBERT
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
}`,xx=`#define LAMBERT
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
}`,_x=`#define MATCAP
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
}`,vx=`#define MATCAP
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
}`,yx=`#define NORMAL
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
}`,Mx=`#define NORMAL
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
}`,Sx=`#define PHONG
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
}`,bx=`#define PHONG
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
}`,Ex=`#define STANDARD
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
}`,wx=`#define STANDARD
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
}`,Tx=`#define TOON
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
}`,Ax=`#define TOON
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
}`,Rx=`uniform float size;
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
}`,Cx=`uniform vec3 diffuse;
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
}`,Px=`#include <common>
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
}`,Ix=`uniform vec3 color;
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
}`,Lx=`uniform float rotation;
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
}`,Dx=`uniform vec3 diffuse;
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
}`,le={alphahash_fragment:e0,alphahash_pars_fragment:n0,alphamap_fragment:i0,alphamap_pars_fragment:s0,alphatest_fragment:r0,alphatest_pars_fragment:a0,aomap_fragment:o0,aomap_pars_fragment:l0,batching_pars_vertex:c0,batching_vertex:h0,begin_vertex:u0,beginnormal_vertex:f0,bsdfs:d0,iridescence_fragment:p0,bumpmap_pars_fragment:m0,clipping_planes_fragment:g0,clipping_planes_pars_fragment:x0,clipping_planes_pars_vertex:_0,clipping_planes_vertex:v0,color_fragment:y0,color_pars_fragment:M0,color_pars_vertex:S0,color_vertex:b0,common:E0,defaultnormal_vertex:w0,displacementmap_pars_vertex:T0,displacementmap_vertex:A0,emissivemap_fragment:R0,emissivemap_pars_fragment:C0,colorspace_fragment:P0,colorspace_pars_fragment:I0,envmap_fragment:L0,envmap_common_pars_fragment:D0,envmap_pars_fragment:N0,envmap_pars_vertex:U0,envmap_physical_pars_fragment:q0,envmap_vertex:F0,fog_vertex:O0,fog_pars_vertex:B0,fog_fragment:z0,fog_pars_fragment:H0,gradientmap_pars_fragment:k0,lightmap_pars_fragment:G0,lights_lambert_fragment:V0,lights_lambert_pars_fragment:W0,lights_pars_begin:X0,lights_toon_fragment:Y0,lights_toon_pars_fragment:Z0,lights_phong_fragment:$0,lights_phong_pars_fragment:J0,lights_physical_fragment:K0,lights_physical_pars_fragment:Q0,lights_fragment_begin:j0,lights_fragment_maps:tg,lights_fragment_end:eg,lightprobes_pars_fragment:ng,logdepthbuf_fragment:ig,logdepthbuf_pars_fragment:sg,logdepthbuf_pars_vertex:rg,logdepthbuf_vertex:ag,map_fragment:og,map_pars_fragment:lg,map_particle_fragment:cg,map_particle_pars_fragment:hg,metalnessmap_fragment:ug,metalnessmap_pars_fragment:fg,morphinstance_vertex:dg,morphcolor_vertex:pg,morphnormal_vertex:mg,morphtarget_pars_vertex:gg,morphtarget_vertex:xg,normal_fragment_begin:_g,normal_fragment_maps:vg,normal_pars_fragment:yg,normal_pars_vertex:Mg,normal_vertex:Sg,normalmap_pars_fragment:bg,clearcoat_normal_fragment_begin:Eg,clearcoat_normal_fragment_maps:wg,clearcoat_pars_fragment:Tg,iridescence_pars_fragment:Ag,opaque_fragment:Rg,packing:Cg,premultiplied_alpha_fragment:Pg,project_vertex:Ig,dithering_fragment:Lg,dithering_pars_fragment:Dg,roughnessmap_fragment:Ng,roughnessmap_pars_fragment:Ug,shadowmap_pars_fragment:Fg,shadowmap_pars_vertex:Og,shadowmap_vertex:Bg,shadowmask_pars_fragment:zg,skinbase_vertex:Hg,skinning_pars_vertex:kg,skinning_vertex:Gg,skinnormal_vertex:Vg,specularmap_fragment:Wg,specularmap_pars_fragment:Xg,tonemapping_fragment:qg,tonemapping_pars_fragment:Yg,transmission_fragment:Zg,transmission_pars_fragment:$g,uv_pars_fragment:Jg,uv_pars_vertex:Kg,uv_vertex:Qg,worldpos_vertex:jg,background_vert:tx,background_frag:ex,backgroundCube_vert:nx,backgroundCube_frag:ix,cube_vert:sx,cube_frag:rx,depth_vert:ax,depth_frag:ox,distance_vert:lx,distance_frag:cx,equirect_vert:hx,equirect_frag:ux,linedashed_vert:fx,linedashed_frag:dx,meshbasic_vert:px,meshbasic_frag:mx,meshlambert_vert:gx,meshlambert_frag:xx,meshmatcap_vert:_x,meshmatcap_frag:vx,meshnormal_vert:yx,meshnormal_frag:Mx,meshphong_vert:Sx,meshphong_frag:bx,meshphysical_vert:Ex,meshphysical_frag:wx,meshtoon_vert:Tx,meshtoon_frag:Ax,points_vert:Rx,points_frag:Cx,shadow_vert:Px,shadow_frag:Ix,sprite_vert:Lx,sprite_frag:Dx},Lt={common:{diffuse:{value:new Gt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qt},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qt}},envmap:{envMap:{value:null},envMapRotation:{value:new Qt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qt},normalScale:{value:new gt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Gt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Gt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0},uvTransform:{value:new Qt}},sprite:{diffuse:{value:new Gt(16777215)},opacity:{value:1},center:{value:new gt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qt},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0}}},ai={basic:{uniforms:un([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.fog]),vertexShader:le.meshbasic_vert,fragmentShader:le.meshbasic_frag},lambert:{uniforms:un([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new Gt(0)},envMapIntensity:{value:1}}]),vertexShader:le.meshlambert_vert,fragmentShader:le.meshlambert_frag},phong:{uniforms:un([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new Gt(0)},specular:{value:new Gt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:le.meshphong_vert,fragmentShader:le.meshphong_frag},standard:{uniforms:un([Lt.common,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.roughnessmap,Lt.metalnessmap,Lt.fog,Lt.lights,{emissive:{value:new Gt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:le.meshphysical_vert,fragmentShader:le.meshphysical_frag},toon:{uniforms:un([Lt.common,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.gradientmap,Lt.fog,Lt.lights,{emissive:{value:new Gt(0)}}]),vertexShader:le.meshtoon_vert,fragmentShader:le.meshtoon_frag},matcap:{uniforms:un([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,{matcap:{value:null}}]),vertexShader:le.meshmatcap_vert,fragmentShader:le.meshmatcap_frag},points:{uniforms:un([Lt.points,Lt.fog]),vertexShader:le.points_vert,fragmentShader:le.points_frag},dashed:{uniforms:un([Lt.common,Lt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:le.linedashed_vert,fragmentShader:le.linedashed_frag},depth:{uniforms:un([Lt.common,Lt.displacementmap]),vertexShader:le.depth_vert,fragmentShader:le.depth_frag},normal:{uniforms:un([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,{opacity:{value:1}}]),vertexShader:le.meshnormal_vert,fragmentShader:le.meshnormal_frag},sprite:{uniforms:un([Lt.sprite,Lt.fog]),vertexShader:le.sprite_vert,fragmentShader:le.sprite_frag},background:{uniforms:{uvTransform:{value:new Qt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:le.background_vert,fragmentShader:le.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Qt}},vertexShader:le.backgroundCube_vert,fragmentShader:le.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:le.cube_vert,fragmentShader:le.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:le.equirect_vert,fragmentShader:le.equirect_frag},distance:{uniforms:un([Lt.common,Lt.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:le.distance_vert,fragmentShader:le.distance_frag},shadow:{uniforms:un([Lt.lights,Lt.fog,{color:{value:new Gt(0)},opacity:{value:1}}]),vertexShader:le.shadow_vert,fragmentShader:le.shadow_frag}};ai.physical={uniforms:un([ai.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qt},clearcoatNormalScale:{value:new gt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Qt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qt},sheen:{value:0},sheenColor:{value:new Gt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qt},transmissionSamplerSize:{value:new gt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qt},attenuationDistance:{value:0},attenuationColor:{value:new Gt(0)},specularColor:{value:new Gt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qt},anisotropyVector:{value:new gt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qt}}]),vertexShader:le.meshphysical_vert,fragmentShader:le.meshphysical_frag};var Wl={r:0,b:0,g:0},Nx=new _e,Id=new Qt;Id.set(-1,0,0,0,1,0,0,0,1);function Ux(n,t,e,i,s,r){let a=new Gt(0),o=s===!0?0:1,c,l,h=null,u=0,f=null;function d(y){let S=y.isScene===!0?y.background:null;if(S&&S.isTexture){let M=y.backgroundBlurriness>0;S=t.get(S,M)}return S}function p(y){let S=!1,M=d(y);M===null?m(a,o):M&&M.isColor&&(m(M,1),S=!0);let A=n.xr.getEnvironmentBlendMode();A==="additive"?e.buffers.color.setClear(0,0,0,1,r):A==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(n.autoClear||S)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function _(y,S){let M=d(S);M&&M.isCubeTexture?(l===void 0&&(l=new kt(new Xe(1,1,1),new Oe({name:"BackgroundCubeMaterial",uniforms:_s(ai.backgroundCube.uniforms),vertexShader:ai.backgroundCube.vertexShader,fragmentShader:ai.backgroundCube.fragmentShader,side:sn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(A,T,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),l.material.uniforms.envMap.value=M,l.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Nx.makeRotationFromEuler(S.backgroundRotation)).transpose(),M.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Id),l.material.toneMapped=fe.getTransfer(M.colorSpace)!==ye,(h!==M||u!==M.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,h=M,u=M.version,f=n.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new kt(new Fe(2,2),new Oe({name:"BackgroundMaterial",uniforms:_s(ai.background.uniforms),vertexShader:ai.background.vertexShader,fragmentShader:ai.background.fragmentShader,side:qi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=fe.getTransfer(M.colorSpace)!==ye,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||u!==M.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,h=M,u=M.version,f=n.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function m(y,S){y.getRGB(Wl,wh(n)),e.buffers.color.setClear(Wl.r,Wl.g,Wl.b,S,r)}function g(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,S=1){a.set(y),o=S,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(y){o=y,m(a,o)},render:p,addToRenderList:_,dispose:g}}function Fx(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null),r=s,a=!1;function o(F,B,V,I,O){let Y=!1,G=u(F,I,V,B);r!==G&&(r=G,l(r.object)),Y=d(F,I,V,O),Y&&p(F,I,V,O),O!==null&&t.update(O,n.ELEMENT_ARRAY_BUFFER),(Y||a)&&(a=!1,M(F,B,V,I),O!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(O).buffer))}function c(){return n.createVertexArray()}function l(F){return n.bindVertexArray(F)}function h(F){return n.deleteVertexArray(F)}function u(F,B,V,I){let O=I.wireframe===!0,Y=i[B.id];Y===void 0&&(Y={},i[B.id]=Y);let G=F.isInstancedMesh===!0?F.id:0,ht=Y[G];ht===void 0&&(ht={},Y[G]=ht);let J=ht[V.id];J===void 0&&(J={},ht[V.id]=J);let at=J[O];return at===void 0&&(at=f(c()),J[O]=at),at}function f(F){let B=[],V=[],I=[];for(let O=0;O<e;O++)B[O]=0,V[O]=0,I[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:V,attributeDivisors:I,object:F,attributes:{},index:null}}function d(F,B,V,I){let O=r.attributes,Y=B.attributes,G=0,ht=V.getAttributes();for(let J in ht)if(ht[J].location>=0){let P=O[J],it=Y[J];if(it===void 0&&(J==="instanceMatrix"&&F.instanceMatrix&&(it=F.instanceMatrix),J==="instanceColor"&&F.instanceColor&&(it=F.instanceColor)),P===void 0||P.attribute!==it||it&&P.data!==it.data)return!0;G++}return r.attributesNum!==G||r.index!==I}function p(F,B,V,I){let O={},Y=B.attributes,G=0,ht=V.getAttributes();for(let J in ht)if(ht[J].location>=0){let P=Y[J];P===void 0&&(J==="instanceMatrix"&&F.instanceMatrix&&(P=F.instanceMatrix),J==="instanceColor"&&F.instanceColor&&(P=F.instanceColor));let it={};it.attribute=P,P&&P.data&&(it.data=P.data),O[J]=it,G++}r.attributes=O,r.attributesNum=G,r.index=I}function _(){let F=r.newAttributes;for(let B=0,V=F.length;B<V;B++)F[B]=0}function m(F){g(F,0)}function g(F,B){let V=r.newAttributes,I=r.enabledAttributes,O=r.attributeDivisors;V[F]=1,I[F]===0&&(n.enableVertexAttribArray(F),I[F]=1),O[F]!==B&&(n.vertexAttribDivisor(F,B),O[F]=B)}function y(){let F=r.newAttributes,B=r.enabledAttributes;for(let V=0,I=B.length;V<I;V++)B[V]!==F[V]&&(n.disableVertexAttribArray(V),B[V]=0)}function S(F,B,V,I,O,Y,G){G===!0?n.vertexAttribIPointer(F,B,V,O,Y):n.vertexAttribPointer(F,B,V,I,O,Y)}function M(F,B,V,I){_();let O=I.attributes,Y=V.getAttributes(),G=B.defaultAttributeValues;for(let ht in Y){let J=Y[ht];if(J.location>=0){let at=O[ht];if(at===void 0&&(ht==="instanceMatrix"&&F.instanceMatrix&&(at=F.instanceMatrix),ht==="instanceColor"&&F.instanceColor&&(at=F.instanceColor)),at!==void 0){let P=at.normalized,it=at.itemSize,ft=t.get(at);if(ft===void 0)continue;let X=ft.buffer,rt=ft.type,pt=ft.bytesPerElement,Nt=rt===n.INT||rt===n.UNSIGNED_INT||at.gpuType===rl;if(at.isInterleavedBufferAttribute){let _t=at.data,Ft=_t.isInterleavedBuffer===!0?_t.stride:_t.itemSize,pe=at.offset;if(_t.isInstancedInterleavedBuffer||_t.isInstancedBufferAttribute){for(let Xt=0;Xt<J.locationSize;Xt++)g(J.location+Xt,_t.meshPerAttribute);F.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=_t.meshPerAttribute*_t.count)}else for(let Xt=0;Xt<J.locationSize;Xt++)m(J.location+Xt);n.bindBuffer(n.ARRAY_BUFFER,X);for(let Xt=0;Xt<J.locationSize;Xt++)S(J.location+Xt,it/J.locationSize,rt,P,Ft*pt,(pe+it/J.locationSize*Xt)*pt,Nt)}else{if(at.isInstancedBufferAttribute){for(let _t=0;_t<J.locationSize;_t++)g(J.location+_t,at.meshPerAttribute);F.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let _t=0;_t<J.locationSize;_t++)m(J.location+_t);n.bindBuffer(n.ARRAY_BUFFER,X);for(let _t=0;_t<J.locationSize;_t++)S(J.location+_t,it/J.locationSize,rt,P,it*pt,it/J.locationSize*_t*pt,Nt)}}else if(G!==void 0){let P=G[ht];if(P!==void 0)switch(P.length){case 2:n.vertexAttrib2fv(J.location,P);break;case 3:n.vertexAttrib3fv(J.location,P);break;case 4:n.vertexAttrib4fv(J.location,P);break;default:n.vertexAttrib1fv(J.location,P)}}}}y()}function A(){N();for(let F in i){let B=i[F];for(let V in B){let I=B[V];for(let O in I){let Y=I[O];for(let G in Y)h(Y[G].object),delete Y[G];delete I[O]}}delete i[F]}}function T(F){if(i[F.id]===void 0)return;let B=i[F.id];for(let V in B){let I=B[V];for(let O in I){let Y=I[O];for(let G in Y)h(Y[G].object),delete Y[G];delete I[O]}}delete i[F.id]}function x(F){for(let B in i){let V=i[B];for(let I in V){let O=V[I];if(O[F.id]===void 0)continue;let Y=O[F.id];for(let G in Y)h(Y[G].object),delete Y[G];delete O[F.id]}}}function b(F){for(let B in i){let V=i[B],I=F.isInstancedMesh===!0?F.id:0,O=V[I];if(O!==void 0){for(let Y in O){let G=O[Y];for(let ht in G)h(G[ht].object),delete G[ht];delete O[Y]}delete V[I],Object.keys(V).length===0&&delete i[B]}}}function N(){C(),a=!0,r!==s&&(r=s,l(r.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:N,resetDefaultState:C,dispose:A,releaseStatesOfGeometry:T,releaseStatesOfObject:b,releaseStatesOfProgram:x,initAttributes:_,enableAttribute:m,disableUnusedAttributes:y}}function Ox(n,t,e){let i;function s(c){i=c}function r(c,l){n.drawArrays(i,c,l),e.update(l,i,1)}function a(c,l,h){h!==0&&(n.drawArraysInstanced(i,c,l,h),e.update(l,i,h))}function o(c,l,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,l,0,h);let f=0;for(let d=0;d<h;d++)f+=l[d];e.update(f,i,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Bx(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let x=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(x){return!(x!==$n&&i.convert(x)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(x){let b=x===rn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(x!==bn&&x!==Hn&&!b&&i.convert(x)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function c(x){if(x==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",h=c(l);h!==l&&($t("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),f=e.logarithmicDepthBuffer===!0&&u===!1;e.reversedDepthBuffer===!0&&u===!1&&$t("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&u===!0&&$t("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),g=n.getParameter(n.MAX_VERTEX_ATTRIBS),y=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),S=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),A=n.getParameter(n.MAX_SAMPLES),T=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:u,maxTextures:d,maxVertexTextures:p,maxTextureSize:_,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:y,maxVaryings:S,maxFragmentUniforms:M,maxSamples:A,samples:T}}function zx(n){let t=this,e=null,i=0,s=!1,r=!1,a=new Yn,o=new Qt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||i!==0||s;return s=f,i=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){let p=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,g=n.get(u);if(!s||p===null||p.length===0||r&&!m)r?h(null):l();else{let y=r?0:i,S=y*4,M=g.clippingState||null;c.value=M,M=h(p,f,S,d);for(let A=0;A!==S;++A)M[A]=e[A];g.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(u,f,d,p){let _=u!==null?u.length:0,m=null;if(_!==0){if(m=c.value,p!==!0||m===null){let g=d+_*4,y=f.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<g)&&(m=new Float32Array(g));for(let S=0,M=d;S!==_;++S,M+=4)a.copy(u[S]).applyMatrix4(y,o),a.normal.toArray(m,M),m[M+3]=a.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}var Pa=class extends Ye{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new qr(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Xe(5,5,5),r=new Oe({name:"CubemapFromEquirect",uniforms:_s(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:sn,blending:Ei});r.uniforms.tEquirect.value=e;let a=new kt(s,r),o=e.minFilter;return e.minFilter===wi&&(e.minFilter=xn),new js(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,s);t.setRenderTarget(r)}},cd=256,Hx=3,kx=20,Ld=256,Dd=16,Gx=3,Vx=new D,Wx=new Gt,sr=class n{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new js(1,10,null),this._boxMesh=new kt(new Xe(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,i=.1,s=100,r={}){let{size:a=256,position:o=Vx}=r,c=this._renderer;this._setSize(a);let l=this._allocateTarget(),h=this._getSourceTarget(!0);e>0&&(h.texture.mipmapsAutoUpdate=!1);let u=c.autoClear,f=c.autoClearColor,d=c.autoClearDepth,p=c.autoClearStencil,_=t.background;c.autoClear=!0,c.autoClearColor=!0,c.autoClearDepth=!0,c.autoClearStencil=!0,_===null&&(t.background=c.getClearColor(Wx));let m=new js(i,s,h);return m.position.copy(o),m.update(c,t),c.autoClear=u,c.autoClearColor=f,c.autoClearDepth=d,c.autoClearStencil=p,t.background=_,e>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(l,e)),this._applyPMREM(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=fd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ud(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(cd,Qf(t))}_fromTexture(t,e){t.mapping===gs||t.mapping===er?this._setSize(t.image.length===0?cd:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let i=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(i),i}_allocateTarget(){let t=this._cubeSize,e=hd(t,!1,!1),i=Math.log2(t)-Hx;for(let s=0;s<=i;s++)e.texture.mipmaps.push({width:t>>s,height:t>>s});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){let e=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==e||t&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=hd(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,i){let s=this._boxMesh,r=this._cubeCamera;s.material=i,r.renderTarget=t,r.activeMipmapLevel=e;let a=t.width>>e;t.viewport.set(0,0,a,a),r.update(this._renderer,s),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===gs||t.mapping===er?(this._cubemapMaterial===null&&(this._cubemapMaterial=fd()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=ud()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=Xx(),this._integrationMaterial=qx());let e=this._cubeSize,i=t.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/Dd);for(let a=0;a<=i;a++){let o=n.lodToRoughness(a,i);if(a>i-Gx)r.roughness.value=o,this._renderCube(t,a,this._integrationMaterial);else{let c=o>0?Math.log2(e)+.5*Math.log2(6/(Ld*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=c,this._renderCube(t,a,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=Yx());let i=this._blurMaterial,s=i.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(t,0,i),s.envMap.value=t.texture,this._renderCube(r,0,i)}};function hd(n,t,e){return new Pa(n,{minFilter:wi,generateMipmaps:t,type:rn,colorSpace:Ir,depthBuffer:e})}function Ia(n,t,e){return new Oe({name:n,uniforms:t,vertexShader:le.cube_vert,fragmentShader:e,side:sn,blending:Ei,depthTest:!1,depthWrite:!1})}function Xx(){return Ia("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Ld}u

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
	`)}function qx(){return Ia("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Dd}},`

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
	`)}function Yx(){return Ia("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${kx}
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
	`)}function ud(){return Ia("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function fd(){return Ia("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Zx(n){let t=new WeakMap,e=new WeakMap,i=null;function s(f,d=!1){return f==null?null:d?a(f):r(f)}function r(f){if(f&&f.isTexture){let d=f.mapping;if(d===nl||d===il)if(t.has(f)){let p=t.get(f).texture;return o(p,f.mapping)}else{let p=f.image;if(p&&p.height>0){let _=new Pa(p.height);return _.fromEquirectangularTexture(n,f),t.set(f,_),f.addEventListener("dispose",l),o(_.texture,f.mapping)}else return null}}return f}function a(f){if(f&&f.isTexture&&f.isPMREMTexture!==!0){let d=f.mapping,p=d===nl||d===il,_=d===gs||d===er;if(p||_){let m=e.get(f),g=m!==void 0?m.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==g)return i===null&&(i=new sr(n)),m=p?i.fromEquirectangular(f,m):i.fromCubemap(f,m),m.texture.pmremVersion=f.pmremVersion,e.set(f,m),m.texture;if(m!==void 0)return m.texture;{let y=f.image;return p&&y&&y.height>0||_&&y&&c(y)?(i===null&&(i=new sr(n)),m=p?i.fromEquirectangular(f):i.fromCubemap(f),m.texture.pmremVersion=f.pmremVersion,e.set(f,m),f.addEventListener("dispose",h),m.texture):null}}}return f}function o(f,d){return d===nl?f.mapping=gs:d===il&&(f.mapping=er),f}function c(f){let d=0,p=6;for(let _=0;_<p;_++)f[_]!==void 0&&d++;return d===p}function l(f){let d=f.target;d.removeEventListener("dispose",l);let p=t.get(d);p!==void 0&&(t.delete(d),p.dispose())}function h(f){let d=f.target;d.removeEventListener("dispose",h);let p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function u(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:u}}function $x(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s=n.getExtension(i);return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let s=e(i);return s===null&&ls("WebGLRenderer: "+i+" extension not supported."),s}}}function Jx(n,t,e,i){let s={},r=new WeakMap,a=new FinalizationRegistry(p=>delete s[p]);function o(p){c(p.target)}function c(p){p.index!==null&&t.remove(p.index);for(let m in p.attributes)t.remove(p.attributes[m]);p.removeEventListener("dispose",o),delete s[p.id],a.unregister(p);let _=r.get(p);_&&(t.remove(_),r.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function l(p,_){return s[_.id]!==void 0||(_.addEventListener("dispose",o),s[_.id]=new WeakRef(_),a.register(_,_.id,_),e.memory.geometries++),_}function h(p){let _=p.attributes;for(let m in _)t.update(_[m],n.ARRAY_BUFFER)}function u(p){let _=p.index,m=p.attributes.position,g=0;if(m===void 0)return;let y=_!==null?_.array.length:m.array.length/3-1,S=m.count>=65535?zr:Br,M=new S(Math.ceil(y/3)*6,1),A=M.array;if(_!==null){let x=_.array;g=_.version;for(let b=0,N=0;b<y;b+=3){let C=x[b+0],F=x[b+1],B=x[b+2];A[N++]=C,A[N++]=F,A[N++]=F,A[N++]=B,A[N++]=B,A[N++]=C}}else{g=m.version;for(let x=0,b=0;x<y;x+=3){let N=x+0,C=x+1,F=x+2;A[b++]=N,A[b++]=C,A[b++]=C,A[b++]=F,A[b++]=F,A[b++]=N}}M.version=g;let T=r.get(p);T&&t.remove(T),r.set(p,M)}function f(p){let _=r.get(p);if(_){let m=p.index;m!==null&&_.version<m.version&&u(p)}else u(p);return r.get(p)}function d(){for(let p in s){let _=s[p].deref();_!==void 0&&c(_)}}return{get:l,update:h,getWireframeAttribute:f,dispose:d}}function Kx(n,t,e){let i;function s(u){i=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function c(u,f){n.drawElements(i,f,r,u*a),e.update(f,i,1)}function l(u,f,d){d!==0&&(n.drawElementsInstanced(i,f,r,u*a,d),e.update(f,i,d))}function h(u,f,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,u,0,d);let _=0;for(let m=0;m<d;m++)_+=f[m];e.update(_,i,1)}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function Qx(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(e.calls++,a){case n.TRIANGLES:e.triangles+=o*(r/3);break;case n.LINES:e.lines+=o*(r/2);break;case n.LINE_STRIP:e.lines+=o*(r-1);break;case n.LINE_LOOP:e.lines+=o*r;break;case n.POINTS:e.points+=o*r;break;default:Jt("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function jx(n,t,e){let i=new WeakMap,s=new Le;function r(a,o,c){let l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,f=i.get(o);if(f===void 0||f.count!==u){let N=function(){x.dispose(),i.delete(o),o.removeEventListener("dispose",N)};f!==void 0&&f.texture.dispose();let d=o.morphAttributes.position!==void 0,p=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],g=o.morphAttributes.normal||[],y=o.morphAttributes.color||[],S=0;d===!0&&(S=1),p===!0&&(S=2),_===!0&&(S=3);let M=o.attributes.position.count*S,A=1;M>t.maxTextureSize&&(A=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);let T=new Float32Array(M*A*4*u),x=new Ur(T,M,A,u);x.type=Hn,x.needsUpdate=!0;let b=S*4;for(let C=0;C<u;C++){let F=m[C],B=g[C],V=y[C],I=M*A*4*C;for(let O=0;O<F.count;O++){let Y=O*b;d===!0&&(s.fromBufferAttribute(F,O),T[I+Y+0]=s.x,T[I+Y+1]=s.y,T[I+Y+2]=s.z,T[I+Y+3]=0),p===!0&&(s.fromBufferAttribute(B,O),T[I+Y+4]=s.x,T[I+Y+5]=s.y,T[I+Y+6]=s.z,T[I+Y+7]=0),_===!0&&(s.fromBufferAttribute(V,O),T[I+Y+8]=s.x,T[I+Y+9]=s.y,T[I+Y+10]=s.z,T[I+Y+11]=V.itemSize===4?s.w:1)}}f={count:u,texture:x,size:new gt(M,A)},i.set(o,f),o.addEventListener("dispose",N)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",a.morphTexture,e);else{let d=0;for(let _=0;_<l.length;_++)d+=l[_];let p=o.morphTargetsRelative?1:1-d;c.getUniforms().setValue(n,"morphTargetBaseInfluence",p),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",f.texture,e),c.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function t_(n,t,e,i,s){let r=new WeakMap;function a(l){let h=s.render.frame,u=l.geometry,f=t.get(l,u);if(r.get(f)!==h&&(t.update(f),r.set(f,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==h&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,h))),l.isSkinnedMesh){let d=l.skeleton;r.get(d)!==h&&(d.update(),r.set(d,h))}return f}function o(){r=new WeakMap}function c(l){let h=l.target;h.removeEventListener("dispose",c),i.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}var e_={[ma]:"LINEAR_TONE_MAPPING",[ga]:"REINHARD_TONE_MAPPING",[xa]:"CINEON_TONE_MAPPING",[ms]:"ACES_FILMIC_TONE_MAPPING",[va]:"AGX_TONE_MAPPING",[ya]:"NEUTRAL_TONE_MAPPING",[_a]:"CUSTOM_TONE_MAPPING"};function n_(n,t,e,i,s,r){let a=new Ye(t,e,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,c=null,l=null,h=new Me;h.setAttribute("position",new qt([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new qt([0,2,0,0,2,0],2));let u=new Qs({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new kt(h,u),d=new fs(-1,1,1,-1,0,1),p=null,_=null,m=!1,g,y=null,S=[],M=!1;this.setSize=function(A,T){a.setSize(A,T),o!==null&&o.setSize(A,T),c!==null&&c.setSize(A,T);for(let x=0;x<S.length;x++){let b=S[x];b.setSize&&b.setSize(A,T)}},this.setEffects=function(A){S=A,M=S.length>0&&S[0].isRenderPass===!0;let T=a.width,x=a.height;S.length>0&&o===null&&(o=new Ye(T,x,{type:rn,depthBuffer:!1,stencilBuffer:!1}),c=new Ye(T,x,{type:rn,depthBuffer:!1,stencilBuffer:!1}));let b=s===!0&&S.some(N=>N.needsDepthTexture===!0);b!==(a.depthTexture!==null)&&(b===!0&&l===null&&(l=new Si(T,x),r===!0&&(l.format=Ti,l.type=xs)),a.dispose(),a.depthTexture=b?l:null,a.resolveDepthBuffer=b,a.storeMultisampledDepthBuffer=b);for(let N=0;N<S.length;N++){let C=S[N];C.setSize&&C.setSize(T,x),b&&C.needsDepthTexture===!0&&C.setDepthTexture&&C.setDepthTexture(l)}},this.begin=function(A,T){if(m||A.toneMapping===si&&S.length===0)return!1;if(y=T,T!==null){let x=T.width,b=T.height;(a.width!==x||a.height!==b)&&this.setSize(x,b)}return M===!1&&A.setRenderTarget(a),g=A.toneMapping,A.toneMapping=si,!0},this.hasRenderPass=function(){return M},this.end=function(A,T){A.toneMapping=g,m=!0;let x=a,b=o;for(let N=0;N<S.length;N++){let C=S[N];C.enabled!==!1&&(C.render(A,b,x,T),C.needsSwap!==!1&&(x=b,b=b===o?c:o))}if(p!==A.outputColorSpace||_!==A.toneMapping){p=A.outputColorSpace,_=A.toneMapping,u.defines={},fe.getTransfer(p)===ye&&(u.defines.SRGB_TRANSFER="");let N=e_[_];N&&(u.defines[N]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=x.texture,A.setRenderTarget(y),A.render(f,d),y=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),h.dispose(),u.dispose()}}var Nd=new _n,Ud=new Si(1,1),Fd=new Yr(1),Od=new Ur,Bd=new Lo,zd=new qr,dd=[],pd=[],md=new Float32Array(16),gd=new Float32Array(9),xd=new Float32Array(4);function rr(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,r=dd[s];if(r===void 0&&(r=new Float32Array(s),dd[s]=r),t!==0){i.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,n[a].toArray(r,o)}return r}function Ze(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function $e(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Yl(n,t){let e=pd[t];e===void 0&&(e=new Int32Array(t),pd[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function i_(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function s_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ze(e,t))return;n.uniform2fv(this.addr,t),$e(e,t)}}function r_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ze(e,t))return;n.uniform3fv(this.addr,t),$e(e,t)}}function a_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ze(e,t))return;n.uniform4fv(this.addr,t),$e(e,t)}}function o_(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Ze(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),$e(e,t)}else{if(Ze(e,i))return;xd.set(i),n.uniformMatrix2fv(this.addr,!1,xd),$e(e,i)}}function l_(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Ze(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),$e(e,t)}else{if(Ze(e,i))return;gd.set(i),n.uniformMatrix3fv(this.addr,!1,gd),$e(e,i)}}function c_(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Ze(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),$e(e,t)}else{if(Ze(e,i))return;md.set(i),n.uniformMatrix4fv(this.addr,!1,md),$e(e,i)}}function h_(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function u_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ze(e,t))return;n.uniform2iv(this.addr,t),$e(e,t)}}function f_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ze(e,t))return;n.uniform3iv(this.addr,t),$e(e,t)}}function d_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ze(e,t))return;n.uniform4iv(this.addr,t),$e(e,t)}}function p_(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function m_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ze(e,t))return;n.uniform2uiv(this.addr,t),$e(e,t)}}function g_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ze(e,t))return;n.uniform3uiv(this.addr,t),$e(e,t)}}function x_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ze(e,t))return;n.uniform4uiv(this.addr,t),$e(e,t)}}function Zl(n){return n.version===0&&(n.compareFunction=Mh,n.needsUpdate=!0),n}function __(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?r=Zl(Ud):r=Nd,e.setTexture2D(t||r,s)}function v_(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||Bd,s)}function y_(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_CUBE_SHADOW?r=Zl(Fd):r=zd,e.setTextureCube(t||r,s)}function M_(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||Od,s)}function S_(n){switch(n){case 5126:return i_;case 35664:return s_;case 35665:return r_;case 35666:return a_;case 35674:return o_;case 35675:return l_;case 35676:return c_;case 5124:case 35670:return h_;case 35667:case 35671:return u_;case 35668:case 35672:return f_;case 35669:case 35673:return d_;case 5125:return p_;case 36294:return m_;case 36295:return g_;case 36296:return x_;case 35678:case 36198:case 36298:case 36306:case 35682:return __;case 35679:case 36299:case 36307:return v_;case 35680:case 36300:case 36308:case 36293:return y_;case 36289:case 36303:case 36311:case 36292:return M_}}function b_(n,t){n.uniform1fv(this.addr,t)}function E_(n,t){let e=rr(t,this.size,2);n.uniform2fv(this.addr,e)}function w_(n,t){let e=rr(t,this.size,3);n.uniform3fv(this.addr,e)}function T_(n,t){let e=rr(t,this.size,4);n.uniform4fv(this.addr,e)}function A_(n,t){let e=rr(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function R_(n,t){let e=rr(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function C_(n,t){let e=rr(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function P_(n,t){n.uniform1iv(this.addr,t)}function I_(n,t){n.uniform2iv(this.addr,t)}function L_(n,t){n.uniform3iv(this.addr,t)}function D_(n,t){n.uniform4iv(this.addr,t)}function N_(n,t){n.uniform1uiv(this.addr,t)}function U_(n,t){n.uniform2uiv(this.addr,t)}function F_(n,t){n.uniform3uiv(this.addr,t)}function O_(n,t){n.uniform4uiv(this.addr,t)}function B_(n,t,e){let i=this.cache,s=t.length,r=Yl(e,s);Ze(i,r)||(n.uniform1iv(this.addr,r),$e(i,r));let a;this.type===n.SAMPLER_2D_SHADOW?a=Zl(Ud):a=Nd;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function z_(n,t,e){let i=this.cache,s=t.length,r=Yl(e,s);Ze(i,r)||(n.uniform1iv(this.addr,r),$e(i,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Bd,r[a])}function H_(n,t,e){let i=this.cache,s=t.length,r=Yl(e,s);Ze(i,r)||(n.uniform1iv(this.addr,r),$e(i,r));let a;this.type===n.SAMPLER_CUBE_SHADOW?a=Zl(Fd):a=zd;for(let o=0;o!==s;++o)e.setTextureCube(t[o]||a,r[o])}function k_(n,t,e){let i=this.cache,s=t.length,r=Yl(e,s);Ze(i,r)||(n.uniform1iv(this.addr,r),$e(i,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Od,r[a])}function G_(n){switch(n){case 5126:return b_;case 35664:return E_;case 35665:return w_;case 35666:return T_;case 35674:return A_;case 35675:return R_;case 35676:return C_;case 5124:case 35670:return P_;case 35667:case 35671:return I_;case 35668:case 35672:return L_;case 35669:case 35673:return D_;case 5125:return N_;case 36294:return U_;case 36295:return F_;case 36296:return O_;case 35678:case 36198:case 36298:case 36306:case 35682:return B_;case 35679:case 36299:case 36307:return z_;case 35680:case 36300:case 36308:case 36293:return H_;case 36289:case 36303:case 36311:case 36292:return k_}}var Ih=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=S_(e.type)}},Lh=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=G_(e.type)}},Dh=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],i)}}},Ch=/(\w+)(\])?(\[|\.)?/g;function _d(n,t){n.seq.push(t),n.map[t.id]=t}function V_(n,t,e){let i=n.name,s=i.length;for(Ch.lastIndex=0;;){let r=Ch.exec(i),a=Ch.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){_d(e,l===void 0?new Ih(o,n,t):new Lh(o,n,t));break}else{let u=e.map[o];u===void 0&&(u=new Dh(o),_d(e,u)),e=u}}}var ir=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){let o=t.getActiveUniform(e,a),c=t.getUniformLocation(e,o.name);V_(o,c,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,i,s){let r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],c=i[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&i.push(a)}return i}};function vd(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var W_=37297,X_=0;function q_(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}var yd=new Qt;function Y_(n){fe._getMatrix(yd,fe.workingColorSpace,n);let t=`mat3( ${yd.elements.map(e=>e.toFixed(4))} )`;switch(fe.getTransfer(n)){case Lr:return[t,"LinearTransferOETF"];case ye:return[t,"sRGBTransferOETF"];default:return $t("WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function Md(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),r=(n.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+q_(n.getShaderSource(t),o)}else return r}function Z_(n,t){let e=Y_(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var $_={[ma]:"Linear",[ga]:"Reinhard",[xa]:"Cineon",[ms]:"ACESFilmic",[va]:"AgX",[ya]:"Neutral",[_a]:"Custom"};function J_(n,t){let e=$_[t];return e===void 0?($t("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Xl=new D;function K_(){fe.getLuminanceCoefficients(Xl);let n=Xl.x.toFixed(4),t=Xl.y.toFixed(4),e=Xl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Q_(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ca).join(`
`)}function j_(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function tv(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(t,s),a=r.name,o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:n.getAttribLocation(t,a),locationSize:o}}return e}function Ca(n){return n!==""}function Sd(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function bd(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var ev=/^[ \t]*#include +<([\w\d./]+)>/gm;function Nh(n){return n.replace(ev,nv)}function nv(n,t){let e=le[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return Nh(e)}var iv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ed(n){return n.replace(iv,sv)}function sv(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function wd(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}var rv={[pa]:"SHADOWMAP_TYPE_PCF",[tr]:"SHADOWMAP_TYPE_VSM"};function av(n){return rv[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var ov={[er]:"ENVMAP_MODE_REFRACTION"};function lv(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":ov[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var cv={[uh]:"ENVMAP_BLENDING_MULTIPLY",[Of]:"ENVMAP_BLENDING_MIX",[Bf]:"ENVMAP_BLENDING_ADD"};function hv(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":cv[n.combine]||"ENVMAP_BLENDING_NONE"}function uv(n,t,e,i){let s=n.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,c=av(e),l=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=lv(e),u=hv(e),f=Q_(e),d=j_(r),p=s.createProgram(),_,m,g=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(_=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d].filter(Ca).join(`
`),_.length>0&&(_+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d].filter(Ca).join(`
`),m.length>0&&(m+=`
`)):(_=[wd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ca).join(`
`),m=[wd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==si?"#define TONE_MAPPING":"",e.toneMapping!==si?le.tonemapping_pars_fragment:"",e.toneMapping!==si?J_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",le.colorspace_pars_fragment,Z_("linearToOutputTexel",e.outputColorSpace),K_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ca).join(`
`)),a=Nh(a),a=Sd(a,e),a=bd(a,e),o=Nh(o),o=Sd(o,e),o=bd(o,e),a=Ed(a),o=Ed(o),e.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,_=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,m=["#define varying in",e.glslVersion===bh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===bh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let y=g+_+a,S=g+m+o,M=vd(s,s.VERTEX_SHADER,y),A=vd(s,s.FRAGMENT_SHADER,S);s.attachShader(p,M),s.attachShader(p,A),e.index0AttributeName!==void 0?s.bindAttribLocation(p,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(p,0,"position"),s.linkProgram(p);function T(C){if(n.debug.checkShaderErrors){let F=s.getProgramInfoLog(p)||"",B=s.getShaderInfoLog(M)||"",V=s.getShaderInfoLog(A)||"",I=F.trim(),O=B.trim(),Y=V.trim(),G=!0,ht=!0;if(s.getProgramParameter(p,s.LINK_STATUS)===!1)if(G=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,p,M,A);else{let J=Md(s,M,"vertex"),at=Md(s,A,"fragment");Jt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(p,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+I+`
`+J+`
`+at)}else I!==""?$t("WebGLProgram: Program Info Log:",I):(O===""||Y==="")&&(ht=!1);ht&&(C.diagnostics={runnable:G,programLog:I,vertexShader:{log:O,prefix:_},fragmentShader:{log:Y,prefix:m}})}s.deleteShader(M),s.deleteShader(A),x=new ir(s,p),b=tv(s,p)}let x;this.getUniforms=function(){return x===void 0&&T(this),x};let b;this.getAttributes=function(){return b===void 0&&T(this),b};let N=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=s.getProgramParameter(p,W_)),N},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(p),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=X_++,this.cacheKey=t,this.usedTimes=1,this.program=p,this.vertexShader=M,this.fragmentShader=A,this}var fv=0,Uh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new Fh(t),e.set(t,i)),i}},Fh=class{constructor(t){this.id=fv++,this.code=t,this.usedTimes=0}};function dv(n){return n===Zi||n===Ta||n===Aa}function pv(n,t,e,i,s,r){let a=new Fr,o=new Uh,c=new Set,l=[],h=new Map,u=i.logarithmicDepthBuffer,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(x){return c.add(x),x===0?"uv":`uv${x}`}function p(x,b,N,C,F,B){let V=C.fog,I=F.geometry,O=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?C.environment:null,Y=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,G=t.get(x.envMap||O,Y),ht=f[x.type],J=i.precision;x.precision!==null&&(J=i.getMaxPrecision(x.precision),J!==x.precision&&$t("WebGLProgram.getParameters:",x.precision,"not supported, using",J,"instead."));let at=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,P=at!==void 0?at.length:0,it=0;I.morphAttributes.position!==void 0&&(it=1),I.morphAttributes.normal!==void 0&&(it=2),I.morphAttributes.color!==void 0&&(it=3);let ft,X,rt,pt;if(ht){let It=ai[ht];ft=It.vertexShader,X=It.fragmentShader}else{ft=x.vertexShader,X=x.fragmentShader;let It=o.getVertexShaderStage(x),Te=o.getFragmentShaderStage(x);o.update(x,It,Te),rt=It.id,pt=Te.id}let Nt=n.getRenderTarget(),_t=n.state.buffers.depth.getReversed(),Ft=F.isInstancedMesh===!0,pe=F.isBatchedMesh===!0,Xt=!!x.map,se=!!x.matcap,re=!!G,ct=re&&G.isPMREMTexture===!0,wt=!!x.aoMap,St=!!x.lightMap,mt=!!x.bumpMap&&x.wireframe===!1,bt=!!x.normalMap,Zt=!!x.displacementMap,Bt=!!x.emissiveMap,jt=!!x.metalnessMap,Kt=!!x.roughnessMap,ee=x.anisotropy>0,z=x.clearcoat>0,Re=x.diffuseRoughness>0,Pt=x.dispersion>0,ne=x.retroreflectivity>0,Et=x.iridescence>0,L=x.sheen>0,q=x.transmission>0,et=ee&&!!x.anisotropyMap,E=z&&!!x.clearcoatMap,v=z&&!!x.clearcoatNormalMap,U=z&&!!x.clearcoatRoughnessMap,Z=Re&&!!x.diffuseRoughnessMap,k=Et&&!!x.iridescenceMap,nt=Et&&!!x.iridescenceThicknessMap,ot=L&&!!x.sheenColorMap,W=L&&!!x.sheenRoughnessMap,K=!!x.specularMap,ut=!!x.specularColorMap,R=!!x.specularIntensityMap,j=q&&!!x.transmissionMap,tt=q&&!!x.thicknessMap,xt=!!x.gradientMap,yt=!!x.alphaMap,Tt=x.alphaTest>0,Wt=!!x.alphaHash,oe=!!x.extensions,vt=si;x.toneMapped&&(Nt===null||Nt.isXRRenderTarget===!0)&&(vt=n.toneMapping);let Yt=ct?G.isCompressedCubeTexture?G.image[0].mipmaps:G.mipmaps:null,ae={shaderID:ht,shaderType:x.type,shaderName:x.name,vertexShader:ft,fragmentShader:X,defines:x.defines,customVertexShaderID:rt,customFragmentShaderID:pt,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:J,batching:pe,batchingColor:pe&&F._colorsTexture!==null,instancing:Ft,instancingColor:Ft&&F.instanceColor!==null,instancingMorph:Ft&&F.morphTexture!==null,outputColorSpace:Nt===null?n.outputColorSpace:Nt.isXRRenderTarget===!0?Nt.texture.colorSpace:fe.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Xt,matcap:se,envMap:re,envMapMode:re&&G.mapping,envMapPMREM:ct,envMapMaxLod:ct?Yt.length-1:null,envMapSize:ct?Yt[0].width:null,aoMap:wt,lightMap:St,bumpMap:mt,normalMap:bt,displacementMap:Zt,emissiveMap:Bt,normalMapObjectSpace:bt&&x.normalMapType===kf,normalMapTangentSpace:bt&&x.normalMapType===Gl,packedNormalMap:bt&&x.normalMapType===Gl&&dv(x.normalMap.format),metalnessMap:jt,roughnessMap:Kt,anisotropy:ee,anisotropyMap:et,clearcoat:z,clearcoatMap:E,clearcoatNormalMap:v,clearcoatRoughnessMap:U,diffuseRoughness:Re,diffuseRoughnessMap:Z,dispersion:Pt,retroreflection:ne,iridescence:Et,iridescenceMap:k,iridescenceThicknessMap:nt,sheen:L,sheenColorMap:ot,sheenRoughnessMap:W,specularMap:K,specularColorMap:ut,specularIntensityMap:R,transmission:q,transmissionMap:j,thicknessMap:tt,gradientMap:xt,opaque:x.transparent===!1&&x.blending===Yi&&x.alphaToCoverage===!1,alphaMap:yt,alphaTest:Tt,alphaHash:Wt,combine:x.combine,mapUv:Xt&&d(x.map.channel),aoMapUv:wt&&d(x.aoMap.channel),lightMapUv:St&&d(x.lightMap.channel),bumpMapUv:mt&&d(x.bumpMap.channel),normalMapUv:bt&&d(x.normalMap.channel),displacementMapUv:Zt&&d(x.displacementMap.channel),emissiveMapUv:Bt&&d(x.emissiveMap.channel),metalnessMapUv:jt&&d(x.metalnessMap.channel),roughnessMapUv:Kt&&d(x.roughnessMap.channel),anisotropyMapUv:et&&d(x.anisotropyMap.channel),clearcoatMapUv:E&&d(x.clearcoatMap.channel),clearcoatNormalMapUv:v&&d(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:U&&d(x.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:Z&&d(x.diffuseRoughnessMap.channel),iridescenceMapUv:k&&d(x.iridescenceMap.channel),iridescenceThicknessMapUv:nt&&d(x.iridescenceThicknessMap.channel),sheenColorMapUv:ot&&d(x.sheenColorMap.channel),sheenRoughnessMapUv:W&&d(x.sheenRoughnessMap.channel),specularMapUv:K&&d(x.specularMap.channel),specularColorMapUv:ut&&d(x.specularColorMap.channel),specularIntensityMapUv:R&&d(x.specularIntensityMap.channel),transmissionMapUv:j&&d(x.transmissionMap.channel),thicknessMapUv:tt&&d(x.thicknessMap.channel),alphaMapUv:yt&&d(x.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(bt||ee),vertexNormals:!!I.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!I.attributes.uv&&(Xt||yt),fog:!!V,useFog:x.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||I.attributes.normal===void 0&&bt===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:_t,skinning:F.isSkinnedMesh===!0,hasPositionAttribute:I.attributes.position!==void 0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:P,morphTextureStride:it,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:B.filter(It=>It.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&N.length>0,shadowMapType:n.shadowMap.type,toneMapping:vt,decodeVideoTexture:Xt&&x.map.isVideoTexture===!0&&fe.getTransfer(x.map.colorSpace)===ye,decodeVideoTextureEmissive:Bt&&x.emissiveMap.isVideoTexture===!0&&fe.getTransfer(x.emissiveMap.colorSpace)===ye,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Ge,flipSided:x.side===sn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:oe&&x.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(oe&&x.extensions.multiDraw===!0||pe)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return ae.vertexUv1s=c.has(1),ae.vertexUv2s=c.has(2),ae.vertexUv3s=c.has(3),c.clear(),ae}function _(x){let b=[];if(x.shaderID?b.push(x.shaderID):(b.push(x.customVertexShaderID),b.push(x.customFragmentShaderID)),x.defines!==void 0)for(let N in x.defines)b.push(N),b.push(x.defines[N]);return x.isRawShaderMaterial===!1&&(m(b,x),g(b,x),b.push(n.outputColorSpace)),b.push(x.customProgramCacheKey),b.join()}function m(x,b){x.push(b.precision),x.push(b.outputColorSpace),x.push(b.envMapMode),x.push(b.envMapPMREM),x.push(b.envMapMaxLod),x.push(b.envMapSize),x.push(b.mapUv),x.push(b.alphaMapUv),x.push(b.lightMapUv),x.push(b.aoMapUv),x.push(b.bumpMapUv),x.push(b.normalMapUv),x.push(b.displacementMapUv),x.push(b.emissiveMapUv),x.push(b.metalnessMapUv),x.push(b.roughnessMapUv),x.push(b.anisotropyMapUv),x.push(b.clearcoatMapUv),x.push(b.clearcoatNormalMapUv),x.push(b.clearcoatRoughnessMapUv),x.push(b.diffuseRoughnessMapUv),x.push(b.iridescenceMapUv),x.push(b.iridescenceThicknessMapUv),x.push(b.sheenColorMapUv),x.push(b.sheenRoughnessMapUv),x.push(b.specularMapUv),x.push(b.specularColorMapUv),x.push(b.specularIntensityMapUv),x.push(b.transmissionMapUv),x.push(b.thicknessMapUv),x.push(b.combine),x.push(b.fogExp2),x.push(b.sizeAttenuation),x.push(b.morphTargetsCount),x.push(b.numSunLights),x.push(b.numDirLights),x.push(b.numPointLights),x.push(b.numSpotLights),x.push(b.numSpotLightMaps),x.push(b.numHemiLights),x.push(b.numRectAreaLights),x.push(b.numSunLightShadows),x.push(b.numDirLightShadows),x.push(b.numPointLightShadows),x.push(b.numSpotLightShadows),x.push(b.numSpotLightShadowsWithMaps),x.push(b.numLightProbes),x.push(b.numLightProbeGrids),x.push(b.shadowMapType),x.push(b.toneMapping),x.push(b.numClippingPlanes),x.push(b.numClipIntersection),x.push(b.depthPacking)}function g(x,b){a.disableAll(),b.instancing&&a.enable(0),b.instancingColor&&a.enable(1),b.instancingMorph&&a.enable(2),b.matcap&&a.enable(3),b.envMap&&a.enable(4),b.normalMapObjectSpace&&a.enable(5),b.normalMapTangentSpace&&a.enable(6),b.clearcoat&&a.enable(7),b.iridescence&&a.enable(8),b.alphaTest&&a.enable(9),b.vertexColors&&a.enable(10),b.vertexAlphas&&a.enable(11),b.vertexUv1s&&a.enable(12),b.vertexUv2s&&a.enable(13),b.vertexUv3s&&a.enable(14),b.vertexTangents&&a.enable(15),b.anisotropy&&a.enable(16),b.alphaHash&&a.enable(17),b.batching&&a.enable(18),b.dispersion&&a.enable(19),b.retroreflection&&a.enable(24),b.diffuseRoughness&&a.enable(25),b.batchingColor&&a.enable(20),b.gradientMap&&a.enable(21),b.packedNormalMap&&a.enable(22),b.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),b.numLightProbeGrids>0&&a.enable(22),b.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function y(x){let b=f[x.type],N;if(b){let C=ai[b];N=Ri.clone(C.uniforms)}else N=x.uniforms;return N}function S(x,b){let N=h.get(b);return N!==void 0?++N.usedTimes:(N=new uv(n,b,x,s),l.push(N),h.set(b,N)),N}function M(x){if(--x.usedTimes===0){let b=l.indexOf(x);l[b]=l[l.length-1],l.pop(),h.delete(x.cacheKey),x.destroy()}}function A(x){o.remove(x)}function T(){o.dispose()}return{getParameters:p,getProgramCacheKey:_,getUniforms:y,acquireProgram:S,releaseProgram:M,releaseShaderCache:A,programs:l,dispose:T}}function mv(){let n=new WeakMap;function t(a){return n.has(a)}function e(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,c){n.get(a)[o]=c}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function gv(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.materialVariant!==t.materialVariant?n.materialVariant-t.materialVariant:n.z!==t.z?n.z-t.z:n.id-t.id}function Td(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Ad(){let n=[],t=0,e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function a(f){let d=0;return f.isInstancedMesh&&(d+=2),f.isSkinnedMesh&&(d+=1),d}function o(f,d,p,_,m,g){let y=n[t];return y===void 0?(y={id:f.id,object:f,geometry:d,material:p,materialVariant:a(f),groupOrder:_,renderOrder:f.renderOrder,z:m,group:g},n[t]=y):(y.id=f.id,y.object=f,y.geometry=d,y.material=p,y.materialVariant=a(f),y.groupOrder=_,y.renderOrder=f.renderOrder,y.z=m,y.group=g),t++,y}function c(f,d,p,_,m,g,y){y.reversedDepth===!0&&(m=-m);let S=o(f,d,p,_,m,g);p.transmission>0?i.push(S):p.transparent===!0?s.push(S):e.push(S)}function l(f,d,p,_,m,g){let y=o(f,d,p,_,m,g);p.transmission>0?i.unshift(y):p.transparent===!0?s.unshift(y):e.unshift(y)}function h(f,d){e.length>1&&e.sort(f||gv),i.length>1&&i.sort(d||Td),s.length>1&&s.sort(d||Td)}function u(){for(let f=t,d=n.length;f<d;f++){let p=n[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:c,unshift:l,finish:u,sort:h}}function xv(){let n=new WeakMap;function t(i,s){let r=n.get(i),a;return r===void 0?(a=new Ad,n.set(i,[a])):s>=r.length?(a=new Ad,r.push(a)):a=r[s],a}function e(){n=new WeakMap}return{get:t,dispose:e}}function _v(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new D,color:new Gt};break;case"SpotLight":e={position:new D,direction:new D,color:new Gt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new D,color:new Gt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new D,skyColor:new Gt,groundColor:new Gt};break;case"RectAreaLight":e={color:new Gt,position:new D,halfWidth:new D,halfHeight:new D};break}return n[t.id]=e,e}}}function vv(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var yv=0;function Mv(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function Sv(n){let t=new _v,e=vv(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new D);let s=new D,r=new _e,a=new _e;function o(l){let h=0,u=0,f=0;for(let B=0;B<9;B++)i.probe[B].set(0,0,0);let d=0,p=0,_=0,m=0,g=0,y=0,S=0,M=0,A=0,T=0,x=0,b=0,N=0,C=0;l.sort(Mv);for(let B=0,V=l.length;B<V;B++){let I=l[B],O=I.color,Y=I.intensity,G=I.distance,ht=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===Zi?ht=I.shadow.map.texture:ht=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)h+=O.r*Y,u+=O.g*Y,f+=O.b*Y;else if(I.isLightProbe){for(let J=0;J<9;J++)i.probe[J].addScaledVector(I.sh.coefficients[J],Y);C++}else if(I.isSunLight){let J=t.get(I);if(J.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let at=I.shadow,P=e.get(I);P.shadowIntensity=at.intensity,P.shadowBias=at.bias,P.shadowNormalBias=at.normalBias,P.shadowRadius=at.radius,P.shadowMapSize.copy(at.mapSize).multiply(at.getFrameExtents()),i.sunShadow[p]=P,i.sunShadowMap[p]=ht;let it=at.getViewportCount();for(let ft=0;ft<it;ft++)i.sunShadowMatrix[_+ft]=at.getMatrix(ft),i.sunShadowCascade[_+ft]=at._cascadeData[ft];_+=it,p++}i.sun[d]=J,d++}else if(I.isDirectionalLight){let J=t.get(I);if(J.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let at=I.shadow,P=e.get(I);P.shadowIntensity=at.intensity,P.shadowBias=at.bias,P.shadowNormalBias=at.normalBias,P.shadowRadius=at.radius,P.shadowMapSize=at.mapSize,i.directionalShadow[m]=P,i.directionalShadowMap[m]=ht,i.directionalShadowMatrix[m]=I.shadow.matrix,A++}i.directional[m]=J,m++}else if(I.isSpotLight){let J=t.get(I);J.position.setFromMatrixPosition(I.matrixWorld),J.color.copy(O).multiplyScalar(Y),J.distance=G,J.coneCos=Math.cos(I.angle),J.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),J.decay=I.decay,i.spot[y]=J;let at=I.shadow;if(I.map&&(i.spotLightMap[b]=I.map,b++,at.updateMatrices(I),I.castShadow&&N++),i.spotLightMatrix[y]=at.matrix,I.castShadow){let P=e.get(I);P.shadowIntensity=at.intensity,P.shadowBias=at.bias,P.shadowNormalBias=at.normalBias,P.shadowRadius=at.radius,P.shadowMapSize=at.mapSize,i.spotShadow[y]=P,i.spotShadowMap[y]=ht,x++}y++}else if(I.isRectAreaLight){let J=t.get(I);J.color.copy(O).multiplyScalar(Y),J.halfWidth.set(I.width*.5,0,0),J.halfHeight.set(0,I.height*.5,0),i.rectArea[S]=J,S++}else if(I.isPointLight){let J=t.get(I);if(J.color.copy(I.color).multiplyScalar(I.intensity),J.distance=I.distance,J.decay=I.decay,I.castShadow){let at=I.shadow,P=e.get(I);P.shadowIntensity=at.intensity,P.shadowBias=at.bias,P.shadowNormalBias=at.normalBias,P.shadowRadius=at.radius,P.shadowMapSize=at.mapSize,P.shadowCameraNear=at.camera.near,P.shadowCameraFar=at.camera.far,i.pointShadow[g]=P,i.pointShadowMap[g]=ht,i.pointShadowMatrix[g]=I.shadow.matrix,T++}i.point[g]=J,g++}else if(I.isHemisphereLight){let J=t.get(I);J.skyColor.copy(I.color).multiplyScalar(Y),J.groundColor.copy(I.groundColor).multiplyScalar(Y),i.hemi[M]=J,M++}}S>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Lt.LTC_FLOAT_1,i.rectAreaLTC2=Lt.LTC_FLOAT_2):(i.rectAreaLTC1=Lt.LTC_HALF_1,i.rectAreaLTC2=Lt.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=f;let F=i.hash;(F.sunLength!==d||F.directionalLength!==m||F.pointLength!==g||F.spotLength!==y||F.rectAreaLength!==S||F.hemiLength!==M||F.numSunShadows!==p||F.numDirectionalShadows!==A||F.numPointShadows!==T||F.numSpotShadows!==x||F.numSpotMaps!==b||F.numLightProbes!==C)&&(i.sun.length=d,i.directional.length=m,i.spot.length=y,i.rectArea.length=S,i.point.length=g,i.hemi.length=M,i.sunShadow.length=p,i.sunShadowMap.length=p,i.sunShadowMatrix.length=_,i.sunShadowCascade.length=_,i.directionalShadow.length=A,i.directionalShadowMap.length=A,i.directionalShadowMatrix.length=A,i.pointShadow.length=T,i.pointShadowMap.length=T,i.pointShadowMatrix.length=T,i.spotShadow.length=x,i.spotShadowMap.length=x,i.spotLightMatrix.length=x+b-N,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=N,i.numLightProbes=C,F.sunLength=d,F.directionalLength=m,F.pointLength=g,F.spotLength=y,F.rectAreaLength=S,F.hemiLength=M,F.numSunShadows=p,F.numDirectionalShadows=A,F.numPointShadows=T,F.numSpotShadows=x,F.numSpotMaps=b,F.numLightProbes=C,i.version=yv++)}function c(l,h){let u=0,f=0,d=0,p=0,_=0,m=0,g=h.matrixWorldInverse;for(let y=0,S=l.length;y<S;y++){let M=l[y];if(M.isSunLight){let A=i.sun[u];A.direction.setFromMatrixPosition(M.matrixWorld),A.direction.transformDirection(g),u++}else if(M.isDirectionalLight){let A=i.directional[f];A.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(g),f++}else if(M.isSpotLight){let A=i.spot[p];A.position.setFromMatrixPosition(M.matrixWorld),A.position.applyMatrix4(g),A.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(g),p++}else if(M.isRectAreaLight){let A=i.rectArea[_];A.position.setFromMatrixPosition(M.matrixWorld),A.position.applyMatrix4(g),a.identity(),r.copy(M.matrixWorld),r.premultiply(g),a.extractRotation(r),A.halfWidth.set(M.width*.5,0,0),A.halfHeight.set(0,M.height*.5,0),A.halfWidth.applyMatrix4(a),A.halfHeight.applyMatrix4(a),_++}else if(M.isPointLight){let A=i.point[d];A.position.setFromMatrixPosition(M.matrixWorld),A.position.applyMatrix4(g),d++}else if(M.isHemisphereLight){let A=i.hemi[m];A.direction.setFromMatrixPosition(M.matrixWorld),A.direction.transformDirection(g),m++}}}return{setup:o,setupView:c,state:i}}function Rd(n){let t=new Sv(n),e=[],i=[],s=[];function r(u){h.camera=u,e.length=0,i.length=0,s.length=0}function a(u){u.isLightProbeGrid?s.push(u):e.push(u)}function o(u){i.push(u)}function c(){t.setup(e),s.sort((u,f)=>u.priority-f.priority||u.id-f.id)}function l(u){t.setupView(e,u)}let h={lightsArray:e,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:c,setupLightsView:l,pushLight:a,pushShadow:o}}function bv(n){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new Rd(n),t.set(s,[o])):r>=a.length?(o=new Rd(n),a.push(o)):o=a[r],o}function i(){t=new WeakMap}return{get:e,dispose:i}}var Ev=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,wv=`uniform sampler2D shadow_pass;
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
}`,Tv=[new D(1,0,0),new D(-1,0,0),new D(0,1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1)],Av=[new D(0,-1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1),new D(0,-1,0),new D(0,-1,0)],Cd=new _e,Ra=new D,Ph=new D;function Rv(n,t,e){let i=new Hi,s=new gt,r=new gt,a=new Le,o=new ko,c=new Go,l={},h=e.maxTextureSize,u={[qi]:sn,[sn]:qi,[Ge]:Ge},f=new Oe({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new gt},radius:{value:4}},vertexShader:Ev,fragmentShader:wv}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let p=new Me;p.setAttribute("position",new qe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new kt(p,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=pa;let g=this.type;this.render=function(T,x,b){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;this.type===el&&($t("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=pa);let N=n.getRenderTarget(),C=n.getActiveCubeFace(),F=n.getActiveMipmapLevel(),B=n.state;B.setBlending(Ei),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);let V=g!==this.type;V&&x.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(O=>O.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,O=T.length;I<O;I++){let Y=T[I],G=Y.shadow;if(G===void 0){$t("WebGLShadowMap:",Y,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);let ht=G.getFrameExtents();s.multiply(ht),r.copy(G.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ht.x),s.x=r.x*ht.x,G.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ht.y),s.y=r.y*ht.y,G.mapSize.y=r.y));let J=n.state.buffers.depth.getReversed();if(G.camera._reversedDepth=J,G.map===null||V===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===tr){if(Y.isPointLight){$t("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new Ye(s.x,s.y,{format:Zi,type:rn,minFilter:xn,magFilter:xn,generateMipmaps:!1}),G.map.texture.name=Y.name+".shadowMap",G.map.depthTexture=new Si(s.x,s.y,Hn),G.map.depthTexture.name=Y.name+".shadowMapDepth",G.map.depthTexture.format=vi,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=je,G.map.depthTexture.magFilter=je}else Y.isPointLight?(G.map=new Pa(s.x),G.map.depthTexture=new Yr(s.x,Zn)):(G.map=new Ye(s.x,s.y),G.map.depthTexture=new Si(s.x,s.y,Zn)),G.map.depthTexture.name=Y.name+".shadowMap",G.map.depthTexture.format=vi,this.type===pa?(G.map.depthTexture.compareFunction=J?yh:vh,G.map.depthTexture.minFilter=xn,G.map.depthTexture.magFilter=xn):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=je,G.map.depthTexture.magFilter=je);G.camera.updateProjectionMatrix()}G.map.isWebGLCubeRenderTarget!==!0&&(G.map.width!==s.x||G.map.height!==s.y)&&G.map.setSize(s.x,s.y);let at=G.map.isWebGLCubeRenderTarget?6:G.getViewportCount();Y.isPointLight!==!0&&G.updateMatrices(Y,b);let P=(G.camera.layers.mask&4294967294)!==0?G.camera.layers:b.layers;for(let it=0;it<at;it++){let ft=G.getCamera(it);if(Y.isPointLight){let X=G.camera,rt=G.matrix,pt=Y.distance||X.far;pt!==X.far&&(X.far=pt,X.updateProjectionMatrix()),Ra.setFromMatrixPosition(Y.matrixWorld),X.position.copy(Ra),Ph.copy(X.position),Ph.add(Tv[it]),X.up.copy(Av[it]),X.lookAt(Ph),X.updateMatrixWorld(),rt.makeTranslation(-Ra.x,-Ra.y,-Ra.z),Cd.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),G._frustum.setFromProjectionMatrix(Cd,X.coordinateSystem,X.reversedDepth)}if(G.map.isWebGLCubeRenderTarget)n.setRenderTarget(G.map,it),n.clear();else{it===0&&(n.setRenderTarget(G.map),n.clear());let X=G.getViewport(it);a.set(r.x*X.x,r.y*X.y,r.x*X.z,r.y*X.w),B.viewport(a)}i=G.getFrustum(it),M(x,b,ft,Y,P,this.type)}G.isPointLightShadow!==!0&&this.type===tr&&y(G,b),G.needsUpdate=!1}g=this.type,m.needsUpdate=!1,n.setRenderTarget(N,C,F)};function y(T,x){let b=t.update(_);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,d.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),T.mapPass===null?T.mapPass=new Ye(s.x,s.y,{format:Zi,type:rn}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),f.uniforms.shadow_pass.value=T.map.depthTexture,f.uniforms.resolution.value.set(T.map.width,T.map.height),f.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(x,null,b,f,_,null),d.uniforms.shadow_pass.value=T.mapPass.texture,d.uniforms.resolution.value.set(T.map.width,T.map.height),d.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(x,null,b,d,_,null)}function S(T,x,b,N){let C=null,F=b.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(F!==void 0)C=F;else if(C=b.isPointLight===!0?c:o,n.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0||x.alphaToCoverage===!0){let B=C.uuid,V=x.uuid,I=l[B];I===void 0&&(I={},l[B]=I);let O=I[V];O===void 0&&(O=C.clone(),I[V]=O,x.addEventListener("dispose",A)),C=O}if(C.visible=x.visible,C.wireframe=x.wireframe,N===tr?C.side=x.shadowSide!==null?x.shadowSide:x.side:C.side=x.shadowSide!==null?x.shadowSide:u[x.side],C.alphaMap=x.alphaMap,C.alphaTest=x.alphaToCoverage===!0?.5:x.alphaTest,C.map=x.map,C.clipShadows=x.clipShadows,C.clippingPlanes=x.clippingPlanes,C.clipIntersection=x.clipIntersection,C.displacementMap=x.displacementMap,C.displacementScale=x.displacementScale,C.displacementBias=x.displacementBias,C.wireframeLinewidth=x.wireframeLinewidth,C.linewidth=x.linewidth,b.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let B=n.properties.get(C);B.light=b}return C}function M(T,x,b,N,C,F){if(T.visible===!1)return;if(T.layers.test(C)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&F===tr)&&(!T.frustumCulled||T.intersectsFrustum(i))){T.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,T.matrixWorld);let I=t.update(T),O=T.material;if(Array.isArray(O)){let Y=I.groups;for(let G=0,ht=Y.length;G<ht;G++){let J=Y[G],at=O[J.materialIndex];if(at&&at.visible){let P=S(T,at,N,F);T.onBeforeShadow(n,T,x,b,I,P,J),n.renderBufferDirect(b,null,I,P,T,J),T.onAfterShadow(n,T,x,b,I,P,J)}}}else if(O.visible){let Y=S(T,O,N,F);T.onBeforeShadow(n,T,x,b,I,Y,null),n.renderBufferDirect(b,null,I,Y,T,null),T.onAfterShadow(n,T,x,b,I,Y,null)}}let V=T.children;for(let I=0,O=V.length;I<O;I++)M(V[I],x,b,N,C,F)}function A(T){T.target.removeEventListener("dispose",A);for(let b in l){let N=l[b],C=T.target.uuid;C in N&&(N[C].dispose(),delete N[C])}}}function Cv(n,t){function e(){let R=!1,j=new Le,tt=null,xt=new Le(0,0,0,0);return{setMask:function(yt){tt!==yt&&!R&&(n.colorMask(yt,yt,yt,yt),tt=yt)},setLocked:function(yt){R=yt},setClear:function(yt,Tt,Wt,oe,vt){vt===!0&&(yt*=oe,Tt*=oe,Wt*=oe),j.set(yt,Tt,Wt,oe),xt.equals(j)===!1&&(n.clearColor(yt,Tt,Wt,oe),xt.copy(j))},reset:function(){R=!1,tt=null,xt.set(-1,0,0,0)}}}function i(){let R=!1,j=!1,tt=null,xt=null,yt=null;return{setReversed:function(Tt){if(j!==Tt){let Wt=t.get("EXT_clip_control");Tt?Wt.clipControlEXT(Wt.LOWER_LEFT_EXT,Wt.ZERO_TO_ONE_EXT):Wt.clipControlEXT(Wt.LOWER_LEFT_EXT,Wt.NEGATIVE_ONE_TO_ONE_EXT),j=Tt;let oe=yt;yt=null,this.setClear(oe)}},getReversed:function(){return j},setTest:function(Tt){Tt?_t(n.DEPTH_TEST):Ft(n.DEPTH_TEST)},setMask:function(Tt){tt!==Tt&&!R&&(n.depthMask(Tt),tt=Tt)},setFunc:function(Tt){if(j&&(Tt=Kf[Tt]),xt!==Tt){switch(Tt){case yo:n.depthFunc(n.NEVER);break;case Mo:n.depthFunc(n.ALWAYS);break;case So:n.depthFunc(n.LESS);break;case Vs:n.depthFunc(n.LEQUAL);break;case bo:n.depthFunc(n.EQUAL);break;case Eo:n.depthFunc(n.GEQUAL);break;case wo:n.depthFunc(n.GREATER);break;case To:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}xt=Tt}},setLocked:function(Tt){R=Tt},setClear:function(Tt){yt!==Tt&&(yt=Tt,j&&(Tt=1-Tt),n.clearDepth(Tt))},reset:function(){R=!1,tt=null,xt=null,yt=null,j=!1}}}function s(){let R=!1,j=null,tt=null,xt=null,yt=null,Tt=null,Wt=null,oe=null,vt=null;return{setTest:function(Yt){R||(Yt?_t(n.STENCIL_TEST):Ft(n.STENCIL_TEST))},setMask:function(Yt){j!==Yt&&!R&&(n.stencilMask(Yt),j=Yt)},setFunc:function(Yt,ae,It){(tt!==Yt||xt!==ae||yt!==It)&&(n.stencilFunc(Yt,ae,It),tt=Yt,xt=ae,yt=It)},setOp:function(Yt,ae,It){(Tt!==Yt||Wt!==ae||oe!==It)&&(n.stencilOp(Yt,ae,It),Tt=Yt,Wt=ae,oe=It)},setLocked:function(Yt){R=Yt},setClear:function(Yt){vt!==Yt&&(n.clearStencil(Yt),vt=Yt)},reset:function(){R=!1,j=null,tt=null,xt=null,yt=null,Tt=null,Wt=null,oe=null,vt=null}}}let r=new e,a=new i,o=new s,c={},l=new WeakMap,h={},u={},f={},d=new WeakMap,p=[],_=null,m=!1,g=null,y=null,S=null,M=null,A=null,T=null,x=null,b=new Gt(0,0,0),N=0,C=!1,F=null,B=null,V=null,I=null,O=null,Y=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),G=!1,ht=0,J=n.getParameter(n.VERSION);J.indexOf("WebGL")!==-1?(ht=parseFloat(/^WebGL (\d)/.exec(J)[1]),G=ht>=1):J.indexOf("OpenGL ES")!==-1&&(ht=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),G=ht>=2);let at=null,P={},it=n.getParameter(n.SCISSOR_BOX),ft=n.getParameter(n.VIEWPORT),X=new Le().fromArray(it),rt=new Le().fromArray(ft);function pt(R,j,tt,xt){let yt=new Uint8Array(4),Tt=n.createTexture();n.bindTexture(R,Tt),n.texParameteri(R,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(R,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Wt=0;Wt<tt;Wt++)R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY?n.texImage3D(j,0,n.RGBA,1,1,xt,0,n.RGBA,n.UNSIGNED_BYTE,yt):n.texImage2D(j+Wt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,yt);return Tt}let Nt={};Nt[n.TEXTURE_2D]=pt(n.TEXTURE_2D,n.TEXTURE_2D,1),Nt[n.TEXTURE_CUBE_MAP]=pt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Nt[n.TEXTURE_2D_ARRAY]=pt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Nt[n.TEXTURE_3D]=pt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),_t(n.DEPTH_TEST),a.setFunc(Vs),mt(!1),bt(ah),_t(n.CULL_FACE),wt(Ei);function _t(R){h[R]!==!0&&(n.enable(R),h[R]=!0)}function Ft(R){h[R]!==!1&&(n.disable(R),h[R]=!1)}function pe(R,j){return f[R]!==j?(n.bindFramebuffer(R,j),f[R]=j,R===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=j),R===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=j),!0):!1}function Xt(R,j){let tt=p,xt=!1;if(R){tt=d.get(j),tt===void 0&&(tt=[],d.set(j,tt));let yt=R.textures;if(tt.length!==yt.length||tt[0]!==n.COLOR_ATTACHMENT0){for(let Tt=0,Wt=yt.length;Tt<Wt;Tt++)tt[Tt]=n.COLOR_ATTACHMENT0+Tt;tt.length=yt.length,xt=!0}}else tt[0]!==n.BACK&&(tt[0]=n.BACK,xt=!0);xt&&n.drawBuffers(tt)}function se(R){return _!==R?(n.useProgram(R),_=R,!0):!1}let re={[ps]:n.FUNC_ADD,[yf]:n.FUNC_SUBTRACT,[Mf]:n.FUNC_REVERSE_SUBTRACT};re[Sf]=n.MIN,re[bf]=n.MAX;let ct={[Ef]:n.ZERO,[wf]:n.ONE,[Tf]:n.SRC_COLOR,[ch]:n.SRC_ALPHA,[Lf]:n.SRC_ALPHA_SATURATE,[Pf]:n.DST_COLOR,[Rf]:n.DST_ALPHA,[Af]:n.ONE_MINUS_SRC_COLOR,[hh]:n.ONE_MINUS_SRC_ALPHA,[If]:n.ONE_MINUS_DST_COLOR,[Cf]:n.ONE_MINUS_DST_ALPHA,[Df]:n.CONSTANT_COLOR,[Nf]:n.ONE_MINUS_CONSTANT_COLOR,[Uf]:n.CONSTANT_ALPHA,[Ff]:n.ONE_MINUS_CONSTANT_ALPHA};function wt(R,j,tt,xt,yt,Tt,Wt,oe,vt,Yt){if(R===Ei){m===!0&&(Ft(n.BLEND),m=!1);return}if(m===!1&&(_t(n.BLEND),m=!0),R!==vf){if(R!==g||Yt!==C){if((y!==ps||A!==ps)&&(n.blendEquation(n.FUNC_ADD),y=ps,A=ps),Yt)switch(R){case Yi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ds:n.blendFunc(n.ONE,n.ONE);break;case oh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case lh:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Jt("WebGLState: Invalid blending: ",R);break}else switch(R){case Yi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ds:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case oh:Jt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case lh:Jt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Jt("WebGLState: Invalid blending: ",R);break}S=null,M=null,T=null,x=null,b.set(0,0,0),N=0,g=R,C=Yt}return}yt=yt||j,Tt=Tt||tt,Wt=Wt||xt,(j!==y||yt!==A)&&(n.blendEquationSeparate(re[j],re[yt]),y=j,A=yt),(tt!==S||xt!==M||Tt!==T||Wt!==x)&&(n.blendFuncSeparate(ct[tt],ct[xt],ct[Tt],ct[Wt]),S=tt,M=xt,T=Tt,x=Wt),(oe.equals(b)===!1||vt!==N)&&(n.blendColor(oe.r,oe.g,oe.b,vt),b.copy(oe),N=vt),g=R,C=!1}function St(R,j){R.side===Ge?Ft(n.CULL_FACE):_t(n.CULL_FACE);let tt=R.side===sn;j&&(tt=!tt),mt(tt),R.blending===Yi&&R.transparent===!1?wt(Ei):wt(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.blendColor,R.blendAlpha,R.premultipliedAlpha),a.setFunc(R.depthFunc),a.setTest(R.depthTest),a.setMask(R.depthWrite),r.setMask(R.colorWrite);let xt=R.stencilWrite;o.setTest(xt),xt&&(o.setMask(R.stencilWriteMask),o.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),o.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),Bt(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?_t(n.SAMPLE_ALPHA_TO_COVERAGE):Ft(n.SAMPLE_ALPHA_TO_COVERAGE)}function mt(R){F!==R&&(R?n.frontFace(n.CW):n.frontFace(n.CCW),F=R)}function bt(R){R!==xf?(_t(n.CULL_FACE),R!==B&&(R===ah?n.cullFace(n.BACK):R===_f?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ft(n.CULL_FACE),B=R}function Zt(R){R!==V&&(G&&n.lineWidth(R),V=R)}function Bt(R,j,tt){R?(_t(n.POLYGON_OFFSET_FILL),(I!==j||O!==tt)&&(I=j,O=tt,a.getReversed()&&(j=-j,tt=-tt),n.polygonOffset(j,tt))):Ft(n.POLYGON_OFFSET_FILL)}function jt(R){R?_t(n.SCISSOR_TEST):Ft(n.SCISSOR_TEST)}function Kt(R){R===void 0&&(R=n.TEXTURE0+Y-1),at!==R&&(n.activeTexture(R),at=R)}function ee(R,j,tt){tt===void 0&&(at===null?tt=n.TEXTURE0+Y-1:tt=at);let xt=P[tt];xt===void 0&&(xt={type:void 0,texture:void 0},P[tt]=xt),(xt.type!==R||xt.texture!==j)&&(at!==tt&&(n.activeTexture(tt),at=tt),n.bindTexture(R,j||Nt[R]),xt.type=R,xt.texture=j)}function z(){let R=P[at];R!==void 0&&R.type!==void 0&&(n.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function Re(){try{n.compressedTexImage2D(...arguments)}catch(R){Jt("WebGLState:",R)}}function Pt(){try{n.compressedTexImage3D(...arguments)}catch(R){Jt("WebGLState:",R)}}function ne(){try{n.texSubImage2D(...arguments)}catch(R){Jt("WebGLState:",R)}}function Et(){try{n.texSubImage3D(...arguments)}catch(R){Jt("WebGLState:",R)}}function L(){try{n.compressedTexSubImage2D(...arguments)}catch(R){Jt("WebGLState:",R)}}function q(){try{n.compressedTexSubImage3D(...arguments)}catch(R){Jt("WebGLState:",R)}}function et(){try{n.texStorage2D(...arguments)}catch(R){Jt("WebGLState:",R)}}function E(){try{n.texStorage3D(...arguments)}catch(R){Jt("WebGLState:",R)}}function v(){try{n.texImage2D(...arguments)}catch(R){Jt("WebGLState:",R)}}function U(){try{n.texImage3D(...arguments)}catch(R){Jt("WebGLState:",R)}}function Z(R){return u[R]!==void 0?u[R]:n.getParameter(R)}function k(R,j){u[R]!==j&&(n.pixelStorei(R,j),u[R]=j)}function nt(R){X.equals(R)===!1&&(n.scissor(R.x,R.y,R.z,R.w),X.copy(R))}function ot(R){rt.equals(R)===!1&&(n.viewport(R.x,R.y,R.z,R.w),rt.copy(R))}function W(R,j){let tt=l.get(j);tt===void 0&&(tt=new WeakMap,l.set(j,tt));let xt=tt.get(R);xt===void 0&&(xt=n.getUniformBlockIndex(j,R.name),n.uniformBlockBinding(j,xt,xt),tt.set(R,xt))}function K(R,j,tt){let yt=l.get(j).get(R);c[yt]!==tt&&(n.bindBufferBase(n.UNIFORM_BUFFER,yt,tt),c[yt]=tt)}function ut(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),h={},u={},at=null,P={},f={},c={},d=new WeakMap,p=[],_=null,m=!1,g=null,y=null,S=null,M=null,A=null,T=null,x=null,b=new Gt(0,0,0),N=0,C=!1,F=null,B=null,V=null,I=null,O=null,X.set(0,0,n.canvas.width,n.canvas.height),rt.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:_t,disable:Ft,bindFramebuffer:pe,drawBuffers:Xt,useProgram:se,setBlending:wt,setMaterial:St,setFlipSided:mt,setCullFace:bt,setLineWidth:Zt,setPolygonOffset:Bt,setScissorTest:jt,activeTexture:Kt,bindTexture:ee,unbindTexture:z,compressedTexImage2D:Re,compressedTexImage3D:Pt,texImage2D:v,texImage3D:U,pixelStorei:k,getParameter:Z,updateUBOMapping:W,uniformBlockBinding:K,texStorage2D:et,texStorage3D:E,texSubImage2D:ne,texSubImage3D:Et,compressedTexSubImage2D:L,compressedTexSubImage3D:q,scissor:nt,viewport:ot,reset:ut}}function Pv(n,t,e,i,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new gt,h=new WeakMap,u=new Set,f,d=new WeakMap,p=new Set,_=new FinalizationRegistry(E=>p.delete(E)),m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(E,v){return m?new OffscreenCanvas(E,v):Dr("canvas")}function y(E,v,U){let Z=1,k=et(E);if((k.width>U||k.height>U)&&(Z=U/Math.max(k.width,k.height)),Z<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){let nt=Math.floor(Z*k.width),ot=Math.floor(Z*k.height);f===void 0&&(f=g(nt,ot));let W=v?g(nt,ot):f;return W.width=nt,W.height=ot,W.getContext("2d").drawImage(E,0,0,nt,ot),$t("WebGLRenderer: Texture has been resized from ("+k.width+"x"+k.height+") to ("+nt+"x"+ot+")."),W}else return"data"in E&&$t("WebGLRenderer: Image in DataTexture is too big ("+k.width+"x"+k.height+")."),E;return E}function S(E){return E.generateMipmaps}function M(E){n.generateMipmap(E)}function A(E){return E.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?n.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function T(E,v,U,Z,k,nt=!1){if(E!==null){if(n[E]!==void 0)return n[E];$t("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let ot;Z&&(ot=t.get("EXT_texture_norm16"),ot||$t("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let W=v;if(v===n.RED&&(U===n.FLOAT&&(W=n.R32F),U===n.HALF_FLOAT&&(W=n.R16F),U===n.UNSIGNED_BYTE&&(W=n.R8),U===n.UNSIGNED_SHORT&&ot&&(W=ot.R16_EXT),U===n.SHORT&&ot&&(W=ot.R16_SNORM_EXT)),v===n.RED_INTEGER&&(U===n.UNSIGNED_BYTE&&(W=n.R8UI),U===n.UNSIGNED_SHORT&&(W=n.R16UI),U===n.UNSIGNED_INT&&(W=n.R32UI),U===n.BYTE&&(W=n.R8I),U===n.SHORT&&(W=n.R16I),U===n.INT&&(W=n.R32I)),v===n.RG&&(U===n.FLOAT&&(W=n.RG32F),U===n.HALF_FLOAT&&(W=n.RG16F),U===n.UNSIGNED_BYTE&&(W=n.RG8),U===n.UNSIGNED_SHORT&&ot&&(W=ot.RG16_EXT),U===n.SHORT&&ot&&(W=ot.RG16_SNORM_EXT)),v===n.RG_INTEGER&&(U===n.UNSIGNED_BYTE&&(W=n.RG8UI),U===n.UNSIGNED_SHORT&&(W=n.RG16UI),U===n.UNSIGNED_INT&&(W=n.RG32UI),U===n.BYTE&&(W=n.RG8I),U===n.SHORT&&(W=n.RG16I),U===n.INT&&(W=n.RG32I)),v===n.RGB_INTEGER&&(U===n.UNSIGNED_BYTE&&(W=n.RGB8UI),U===n.UNSIGNED_SHORT&&(W=n.RGB16UI),U===n.UNSIGNED_INT&&(W=n.RGB32UI),U===n.BYTE&&(W=n.RGB8I),U===n.SHORT&&(W=n.RGB16I),U===n.INT&&(W=n.RGB32I)),v===n.RGBA_INTEGER&&(U===n.UNSIGNED_BYTE&&(W=n.RGBA8UI),U===n.UNSIGNED_SHORT&&(W=n.RGBA16UI),U===n.UNSIGNED_INT&&(W=n.RGBA32UI),U===n.BYTE&&(W=n.RGBA8I),U===n.SHORT&&(W=n.RGBA16I),U===n.INT&&(W=n.RGBA32I)),v===n.RGB&&(U===n.UNSIGNED_SHORT&&ot&&(W=ot.RGB16_EXT),U===n.SHORT&&ot&&(W=ot.RGB16_SNORM_EXT),U===n.UNSIGNED_INT_5_9_9_9_REV&&(W=n.RGB9_E5),U===n.UNSIGNED_INT_10F_11F_11F_REV&&(W=n.R11F_G11F_B10F)),v===n.RGBA){let K=nt?Lr:fe.getTransfer(k);U===n.FLOAT&&(W=n.RGBA32F),U===n.HALF_FLOAT&&(W=n.RGBA16F),U===n.UNSIGNED_BYTE&&(W=K===ye?n.SRGB8_ALPHA8:n.RGBA8),U===n.UNSIGNED_SHORT&&ot&&(W=ot.RGBA16_EXT),U===n.SHORT&&ot&&(W=ot.RGBA16_SNORM_EXT),U===n.UNSIGNED_SHORT_4_4_4_4&&(W=n.RGBA4),U===n.UNSIGNED_SHORT_5_5_5_1&&(W=n.RGB5_A1)}return(W===n.R16F||W===n.R32F||W===n.RG16F||W===n.RG32F||W===n.RGBA16F||W===n.RGBA32F)&&t.get("EXT_color_buffer_float"),W}function x(E,v){let U;return E?v===null||v===Zn||v===xs?U=n.DEPTH24_STENCIL8:v===Hn?U=n.DEPTH32F_STENCIL8:v===nr&&(U=n.DEPTH24_STENCIL8,$t("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Zn||v===xs?U=n.DEPTH_COMPONENT24:v===Hn?U=n.DEPTH_COMPONENT32F:v===nr&&(U=n.DEPTH_COMPONENT16),U}function b(E,v){return S(E)===!0||E.isFramebufferTexture&&E.minFilter!==je&&E.minFilter!==xn?Math.log2(Math.max(v.width,v.height))+1:E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?v.mipmaps.length:1}function N(E){let v=new WeakRef(E);i.get(E).__ref=v,p.add(v),_.register(E,v,v)}function C(E){let v=i.get(E).__ref;v!==void 0&&(p.delete(v),_.unregister(v))}function F(E){V(E.target)}function B(E){I(E.target)}function V(E){E.removeEventListener("dispose",F),C(E),Y(E),E.isVideoTexture&&h.delete(E),E.isHTMLTexture&&u.delete(E)}function I(E){E.removeEventListener("dispose",B),C(E),ht(E)}function O(){for(let E of p){let v=E.deref();v!==void 0&&(v.isRenderTarget===!0?I(v):V(v))}p.clear(),u.clear()}function Y(E){let v=i.get(E);if(v.__webglInit===void 0)return;let U=E.source,Z=d.get(U);if(Z){let k=Z[v.__cacheKey];k.usedTimes--,k.usedTimes===0&&G(E),Object.keys(Z).length===0&&d.delete(U)}i.remove(E)}function G(E){let v=i.get(E);n.deleteTexture(v.__webglTexture);let U=E.source,Z=d.get(U);delete Z[v.__cacheKey],a.memory.textures--}function ht(E){let v=i.get(E);v.__depthDisposeCallback&&v.__depthDisposeCallback();let U=E.depthTexture;if(U&&U.renderTarget===E&&V(U),E.isWebGLCubeRenderTarget)for(let k=0;k<6;k++){if(Array.isArray(v.__webglFramebuffer[k]))for(let nt=0;nt<v.__webglFramebuffer[k].length;nt++)n.deleteFramebuffer(v.__webglFramebuffer[k][nt]);else n.deleteFramebuffer(v.__webglFramebuffer[k]);v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer[k])}else{if(Array.isArray(v.__webglFramebuffer))for(let k=0;k<v.__webglFramebuffer.length;k++)n.deleteFramebuffer(v.__webglFramebuffer[k]);else n.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&n.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let k=0;k<v.__webglColorRenderbuffer.length;k++)v.__webglColorRenderbuffer[k]&&n.deleteRenderbuffer(v.__webglColorRenderbuffer[k]);v.__webglDepthRenderbuffer&&n.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let Z=E.textures;for(let k=0,nt=Z.length;k<nt;k++){let ot=i.get(Z[k]);ot.__webglTexture&&(n.deleteTexture(ot.__webglTexture),a.memory.textures--),i.remove(Z[k])}i.remove(E)}let J=0;function at(){J=0}function P(){return J}function it(E){J=E}function ft(){let E=J;return E>=s.maxTextures&&$t("WebGLTextures: Trying to use "+(E+1)+" texture units while this GPU supports only "+s.maxTextures),J+=1,E}function X(E){let v=[];return v.push(E.wrapS),v.push(E.wrapT),v.push(E.wrapR||0),v.push(E.magFilter),v.push(E.minFilter),v.push(E.anisotropy),v.push(E.internalFormat),v.push(E.format),v.push(E.type),v.push(E.generateMipmaps),v.push(E.mipmapsAutoUpdate),v.push(E.premultiplyAlpha),v.push(E.flipY),v.push(E.unpackAlignment),v.push(E.colorSpace),v.join()}function rt(E,v){let U=i.get(E);if(E.isVideoTexture&&L(E),E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&U.__version!==E.version){let Z=E.image;if(Z===null)$t("WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)$t("WebGLRenderer: Texture marked for update but image is incomplete");else{St(U,E,v);return}}else E.isExternalTexture&&(U.__webglTexture=E.sourceTexture?E.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,U.__webglTexture,n.TEXTURE0+v)}function pt(E,v){let U=i.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&U.__version!==E.version){St(U,E,v);return}else E.isExternalTexture&&(U.__webglTexture=E.sourceTexture?E.sourceTexture:null);e.bindTexture(n.TEXTURE_2D_ARRAY,U.__webglTexture,n.TEXTURE0+v)}function Nt(E,v){let U=i.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&U.__version!==E.version){St(U,E,v);return}e.bindTexture(n.TEXTURE_3D,U.__webglTexture,n.TEXTURE0+v)}function _t(E,v){let U=i.get(E);if(E.version>0&&U.__version!==E.version){mt(U,E,v);return}e.bindTexture(n.TEXTURE_CUBE_MAP,U.__webglTexture,n.TEXTURE0+v)}let Ft={[Bi]:n.REPEAT,[Nn]:n.CLAMP_TO_EDGE,[Ao]:n.MIRRORED_REPEAT},pe={[je]:n.NEAREST,[zf]:n.NEAREST_MIPMAP_NEAREST,[Ma]:n.NEAREST_MIPMAP_LINEAR,[xn]:n.LINEAR,[sl]:n.LINEAR_MIPMAP_NEAREST,[wi]:n.LINEAR_MIPMAP_LINEAR},Xt={[Vf]:n.NEVER,[Mh]:n.ALWAYS,[Wf]:n.LESS,[vh]:n.LEQUAL,[Xf]:n.EQUAL,[yh]:n.GEQUAL,[qf]:n.GREATER,[Yf]:n.NOTEQUAL};function se(E,v){if(v.type===Hn&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===xn||v.magFilter===sl||v.magFilter===Ma||v.magFilter===wi||v.minFilter===xn||v.minFilter===sl||v.minFilter===Ma||v.minFilter===wi)&&$t("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(E,n.TEXTURE_WRAP_S,Ft[v.wrapS]),n.texParameteri(E,n.TEXTURE_WRAP_T,Ft[v.wrapT]),(E===n.TEXTURE_3D||E===n.TEXTURE_2D_ARRAY)&&n.texParameteri(E,n.TEXTURE_WRAP_R,Ft[v.wrapR]),n.texParameteri(E,n.TEXTURE_MAG_FILTER,pe[v.magFilter]),n.texParameteri(E,n.TEXTURE_MIN_FILTER,pe[v.minFilter]),v.compareFunction&&(n.texParameteri(E,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(E,n.TEXTURE_COMPARE_FUNC,Xt[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===je||v.minFilter!==Ma&&v.minFilter!==wi||v.type===Hn&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){let U=t.get("EXT_texture_filter_anisotropic");n.texParameterf(E,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function re(E,v){let U=!1;E.__webglInit===void 0&&(E.__webglInit=!0,v.addEventListener("dispose",F),N(v));let Z=v.source,k=d.get(Z);k===void 0&&(k={},d.set(Z,k));let nt=X(v);if(nt!==E.__cacheKey){k[nt]===void 0&&(k[nt]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,U=!0),k[nt].usedTimes++;let ot=k[E.__cacheKey];ot!==void 0&&(k[E.__cacheKey].usedTimes--,ot.usedTimes===0&&G(v)),E.__cacheKey=nt,E.__webglTexture=k[nt].texture}return U}function ct(E,v,U){return Math.floor(Math.floor(E/U)/v)}function wt(E,v,U,Z){let nt=E.updateRanges;if(nt.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,v.width,v.height,U,Z,v.data);else{nt.sort((R,j)=>R.start-j.start);let ot=0;for(let R=1;R<nt.length;R++){let j=nt[ot],tt=nt[R],xt=j.start+j.count,yt=ct(tt.start,v.width,4),Tt=ct(j.start,v.width,4);tt.start<=xt+1&&yt===Tt&&ct(tt.start+tt.count-1,v.width,4)===yt?j.count=Math.max(j.count,tt.start+tt.count-j.start):(++ot,nt[ot]=tt)}nt.length=ot+1;let W=e.getParameter(n.UNPACK_ROW_LENGTH),K=e.getParameter(n.UNPACK_SKIP_PIXELS),ut=e.getParameter(n.UNPACK_SKIP_ROWS);e.pixelStorei(n.UNPACK_ROW_LENGTH,v.width);for(let R=0,j=nt.length;R<j;R++){let tt=nt[R],xt=Math.floor(tt.start/4),yt=Math.ceil(tt.count/4),Tt=xt%v.width,Wt=Math.floor(xt/v.width),oe=yt,vt=1;e.pixelStorei(n.UNPACK_SKIP_PIXELS,Tt),e.pixelStorei(n.UNPACK_SKIP_ROWS,Wt),e.texSubImage2D(n.TEXTURE_2D,0,Tt,Wt,oe,vt,U,Z,v.data)}E.clearUpdateRanges(),e.pixelStorei(n.UNPACK_ROW_LENGTH,W),e.pixelStorei(n.UNPACK_SKIP_PIXELS,K),e.pixelStorei(n.UNPACK_SKIP_ROWS,ut)}}function St(E,v,U){let Z=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(Z=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(Z=n.TEXTURE_3D);let k=re(E,v),nt=v.source;e.bindTexture(Z,E.__webglTexture,n.TEXTURE0+U);let ot=i.get(nt);if(nt.version!==ot.__version||k===!0){if(e.activeTexture(n.TEXTURE0+U),(typeof ImageBitmap<"u"&&v.image instanceof ImageBitmap)===!1){let vt=fe.getPrimaries(fe.workingColorSpace),Yt=v.colorSpace===Ai?null:fe.getPrimaries(v.colorSpace),ae=v.colorSpace===Ai||vt===Yt?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ae)}e.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment);let K=y(v.image,!1,s.maxTextureSize);K=q(v,K);let ut=r.convert(v.format,v.colorSpace),R=r.convert(v.type),j=T(v.internalFormat,ut,R,v.normalized,v.colorSpace,v.isVideoTexture);se(Z,v);let tt,xt=v.mipmaps,yt=v.isVideoTexture!==!0,Tt=ot.__version===void 0||k===!0,Wt=nt.dataReady,oe=b(v,K);if(v.isDepthTexture)j=x(v.format===Ti,v.type),Tt&&(yt?e.texStorage2D(n.TEXTURE_2D,1,j,K.width,K.height):e.texImage2D(n.TEXTURE_2D,0,j,K.width,K.height,0,ut,R,null));else if(v.isDataTexture)if(xt.length>0){yt&&Tt&&e.texStorage2D(n.TEXTURE_2D,oe,j,xt[0].width,xt[0].height);for(let vt=0,Yt=xt.length;vt<Yt;vt++)tt=xt[vt],yt?Wt&&e.texSubImage2D(n.TEXTURE_2D,vt,0,0,tt.width,tt.height,ut,R,tt.data):e.texImage2D(n.TEXTURE_2D,vt,j,tt.width,tt.height,0,ut,R,tt.data);v.generateMipmaps=!1}else yt?(Tt&&e.texStorage2D(n.TEXTURE_2D,oe,j,K.width,K.height),Wt&&wt(v,K,ut,R)):e.texImage2D(n.TEXTURE_2D,0,j,K.width,K.height,0,ut,R,K.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){yt&&Tt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,oe,j,xt[0].width,xt[0].height,K.depth);for(let vt=0,Yt=xt.length;vt<Yt;vt++)if(tt=xt[vt],v.format!==$n)if(ut!==null)if(yt){if(Wt)if(v.layerUpdates.size>0){let ae=Rh(tt.width,tt.height,v.format,v.type);for(let It of v.layerUpdates){let Te=tt.data.subarray(It*ae/tt.data.BYTES_PER_ELEMENT,(It+1)*ae/tt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,vt,0,0,It,tt.width,tt.height,1,ut,Te)}}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,vt,0,0,0,tt.width,tt.height,K.depth,ut,tt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,vt,j,tt.width,tt.height,K.depth,0,tt.data,0,0);else $t("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else yt?Wt&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,vt,0,0,0,tt.width,tt.height,K.depth,ut,R,tt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,vt,j,tt.width,tt.height,K.depth,0,ut,R,tt.data);v.layerUpdates.size>0&&v.clearLayerUpdates()}else{yt&&Tt&&e.texStorage2D(n.TEXTURE_2D,oe,j,xt[0].width,xt[0].height);for(let vt=0,Yt=xt.length;vt<Yt;vt++)tt=xt[vt],v.format!==$n?ut!==null?yt?Wt&&e.compressedTexSubImage2D(n.TEXTURE_2D,vt,0,0,tt.width,tt.height,ut,tt.data):e.compressedTexImage2D(n.TEXTURE_2D,vt,j,tt.width,tt.height,0,tt.data):$t("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):yt?Wt&&e.texSubImage2D(n.TEXTURE_2D,vt,0,0,tt.width,tt.height,ut,R,tt.data):e.texImage2D(n.TEXTURE_2D,vt,j,tt.width,tt.height,0,ut,R,tt.data)}else if(v.isDataArrayTexture)if(yt){if(Tt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,oe,j,K.width,K.height,K.depth),Wt)if(v.layerUpdates.size>0){let vt=Rh(K.width,K.height,v.format,v.type);for(let Yt of v.layerUpdates){let ae=K.data.subarray(Yt*vt/K.data.BYTES_PER_ELEMENT,(Yt+1)*vt/K.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Yt,K.width,K.height,1,ut,R,ae)}v.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,K.width,K.height,K.depth,ut,R,K.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,j,K.width,K.height,K.depth,0,ut,R,K.data);else if(v.isData3DTexture)yt?(Tt&&e.texStorage3D(n.TEXTURE_3D,oe,j,K.width,K.height,K.depth),Wt&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,K.width,K.height,K.depth,ut,R,K.data)):e.texImage3D(n.TEXTURE_3D,0,j,K.width,K.height,K.depth,0,ut,R,K.data);else if(v.isFramebufferTexture){if(Tt)if(yt)e.texStorage2D(n.TEXTURE_2D,oe,j,K.width,K.height);else{let vt=K.width,Yt=K.height;for(let ae=0;ae<oe;ae++)e.texImage2D(n.TEXTURE_2D,ae,j,vt,Yt,0,ut,R,null),vt>>=1,Yt>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in n){let vt=n.canvas;if(vt.hasAttribute("layoutsubtree")||vt.setAttribute("layoutsubtree","true"),K.parentNode!==vt){vt.appendChild(K),u.add(v),vt.onpaint=Yt=>{let ae=Yt.changedElements;for(let It of u)ae.includes(It.image)&&(It.needsUpdate=!0)},vt.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,K);else{let ae=n.RGBA,It=n.RGBA,Te=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,ae,It,Te,K)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(xt.length>0){if(yt&&Tt){let vt=et(xt[0]);e.texStorage2D(n.TEXTURE_2D,oe,j,vt.width,vt.height)}for(let vt=0,Yt=xt.length;vt<Yt;vt++)tt=xt[vt],yt?Wt&&e.texSubImage2D(n.TEXTURE_2D,vt,0,0,ut,R,tt):e.texImage2D(n.TEXTURE_2D,vt,j,ut,R,tt);v.generateMipmaps=!1}else if(yt){if(Tt){let vt=et(K);e.texStorage2D(n.TEXTURE_2D,oe,j,vt.width,vt.height)}Wt&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,ut,R,K)}else e.texImage2D(n.TEXTURE_2D,0,j,ut,R,K);S(v)&&v.mipmapsAutoUpdate===!0&&M(Z),ot.__version=nt.version,v.onUpdate&&v.onUpdate(v)}E.__version=v.version}function mt(E,v,U){if(v.image.length!==6)return;let Z=re(E,v),k=v.source;e.bindTexture(n.TEXTURE_CUBE_MAP,E.__webglTexture,n.TEXTURE0+U);let nt=i.get(k);if(k.version!==nt.__version||Z===!0){e.activeTexture(n.TEXTURE0+U);let ot=fe.getPrimaries(fe.workingColorSpace),W=v.colorSpace===Ai?null:fe.getPrimaries(v.colorSpace),K=v.colorSpace===Ai||ot===W?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),e.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,K);let ut=v.isCompressedTexture||v.image[0].isCompressedTexture,R=v.image[0]&&v.image[0].isDataTexture,j=[];for(let It=0;It<6;It++)!ut&&!R?j[It]=y(v.image[It],!0,s.maxCubemapSize):j[It]=R?v.image[It].image:v.image[It],j[It]=q(v,j[It]);let tt=j[0],xt=r.convert(v.format,v.colorSpace),yt=r.convert(v.type),Tt=T(v.internalFormat,xt,yt,v.normalized,v.colorSpace),Wt=v.isVideoTexture!==!0,oe=nt.__version===void 0||Z===!0,vt=k.dataReady,Yt=b(v,tt);se(n.TEXTURE_CUBE_MAP,v);let ae;if(v.isDepthTexture){if(Tt=x(v.format===Ti,v.type),oe)if(Wt)e.texStorage2D(n.TEXTURE_CUBE_MAP,1,Tt,tt.width,tt.height);else for(let It=0;It<6;It++)e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+It,0,Tt,tt.width,tt.height,0,xt,yt,null)}else if(ut){Wt&&oe&&e.texStorage2D(n.TEXTURE_CUBE_MAP,Yt,Tt,tt.width,tt.height);for(let It=0;It<6;It++){ae=j[It].mipmaps;for(let Te=0;Te<ae.length;Te++){let Je=ae[Te];v.format!==$n?xt!==null?Wt?vt&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+It,Te,0,0,Je.width,Je.height,xt,Je.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+It,Te,Tt,Je.width,Je.height,0,Je.data):$t("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Wt?vt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+It,Te,0,0,Je.width,Je.height,xt,yt,Je.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+It,Te,Tt,Je.width,Je.height,0,xt,yt,Je.data)}}}else{if(ae=v.mipmaps,Wt&&oe){ae.length>0&&Yt++;let It=et(j[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,Yt,Tt,It.width,It.height)}for(let It=0;It<6;It++)if(R){Wt?vt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+It,0,0,0,j[It].width,j[It].height,xt,yt,j[It].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+It,0,Tt,j[It].width,j[It].height,0,xt,yt,j[It].data);for(let Te=0;Te<ae.length;Te++){let Ii=ae[Te].image[It].image;Wt?vt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+It,Te+1,0,0,Ii.width,Ii.height,xt,yt,Ii.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+It,Te+1,Tt,Ii.width,Ii.height,0,xt,yt,Ii.data)}}else{Wt?vt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+It,0,0,0,xt,yt,j[It]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+It,0,Tt,xt,yt,j[It]);for(let Te=0;Te<ae.length;Te++){let Je=ae[Te];Wt?vt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+It,Te+1,0,0,xt,yt,Je.image[It]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+It,Te+1,Tt,xt,yt,Je.image[It])}}}S(v)&&v.mipmapsAutoUpdate===!0&&M(n.TEXTURE_CUBE_MAP),nt.__version=k.version,v.onUpdate&&v.onUpdate(v)}E.__version=v.version}function bt(E,v,U,Z,k,nt){let ot=r.convert(U.format,U.colorSpace),W=r.convert(U.type),K=T(U.internalFormat,ot,W,U.normalized,U.colorSpace),ut=i.get(v),R=i.get(U);if(R.__renderTarget=v,!ut.__hasExternalTextures){let j=Math.max(1,v.width>>nt),tt=Math.max(1,v.height>>nt);k===n.TEXTURE_3D||k===n.TEXTURE_2D_ARRAY?e.texImage3D(k,nt,K,j,tt,v.depth,0,ot,W,null):e.texImage2D(k,nt,K,j,tt,0,ot,W,null)}e.bindFramebuffer(n.FRAMEBUFFER,E),Et(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Z,k,R.__webglTexture,0,ne(v)):(k===n.TEXTURE_2D||k>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&k<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Z,k,R.__webglTexture,nt),e.bindFramebuffer(n.FRAMEBUFFER,null)}function Zt(E,v,U){if(n.bindRenderbuffer(n.RENDERBUFFER,E),v.depthBuffer){let Z=v.depthTexture,k=Z&&Z.isDepthTexture?Z.type:null,nt=x(v.stencilBuffer,k),ot=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Et(v)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ne(v),nt,v.width,v.height):U?n.renderbufferStorageMultisample(n.RENDERBUFFER,ne(v),nt,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,nt,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ot,n.RENDERBUFFER,E)}else{let Z=v.textures;for(let k=0;k<Z.length;k++){let nt=Z[k],ot=r.convert(nt.format,nt.colorSpace),W=r.convert(nt.type),K=T(nt.internalFormat,ot,W,nt.normalized,nt.colorSpace);Et(v)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ne(v),K,v.width,v.height):U?n.renderbufferStorageMultisample(n.RENDERBUFFER,ne(v),K,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,K,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Bt(E,v,U){let Z=v.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(n.FRAMEBUFFER,E),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let k=i.get(v.depthTexture);k.__renderTarget=v;let nt=Z?v.depthTexture.image[0]:v.depthTexture.image;(!k.__webglTexture||nt.width!==v.width||nt.height!==v.height)&&(nt.width=v.width,nt.height=v.height,v.depthTexture.needsUpdate=!0),Z?_t(v.depthTexture,0):rt(v.depthTexture,0);let ot=k.__webglTexture,W=ne(v),K=Z?n.TEXTURE_CUBE_MAP_POSITIVE_X+U:n.TEXTURE_2D,ut=v.depthTexture.format===Ti?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(v.depthTexture.format===vi)Et(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ut,K,ot,0,W):n.framebufferTexture2D(n.FRAMEBUFFER,ut,K,ot,0);else if(v.depthTexture.format===Ti)Et(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ut,K,ot,0,W):n.framebufferTexture2D(n.FRAMEBUFFER,ut,K,ot,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function jt(E){let v=i.get(E),U=E.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==E.depthTexture){let Z=E.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),Z){let k=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,Z.removeEventListener("dispose",k)};Z.addEventListener("dispose",k),v.__depthDisposeCallback=k}v.__boundDepthTexture=Z}if(E.depthTexture&&!v.__autoAllocateDepthBuffer)if(U)for(let Z=0;Z<6;Z++)Bt(v.__webglFramebuffer[Z],E,Z);else E.texture.mipmaps.length>0?Bt(v.__webglFramebuffer[0],E,0):Bt(v.__webglFramebuffer,E,0);else if(U){v.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(e.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[Z]),v.__webglDepthbuffer[Z]===void 0)v.__webglDepthbuffer[Z]=n.createRenderbuffer(),Zt(v.__webglDepthbuffer[Z],E,!1);else{let k=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,nt=v.__webglDepthbuffer[Z];n.bindRenderbuffer(n.RENDERBUFFER,nt),n.framebufferRenderbuffer(n.FRAMEBUFFER,k,n.RENDERBUFFER,nt)}}else if(E.texture.mipmaps.length>0?e.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=n.createRenderbuffer(),Zt(v.__webglDepthbuffer,E,!1);else{let k=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,nt=v.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,nt),n.framebufferRenderbuffer(n.FRAMEBUFFER,k,n.RENDERBUFFER,nt)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function Kt(E,v,U){let Z=i.get(E);v!==void 0&&bt(Z.__webglFramebuffer,E,E.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),U!==void 0&&jt(E)}function ee(E){let v=E.texture,U=i.get(E),Z=i.get(v);E.addEventListener("dispose",B),N(E);let k=E.textures,nt=E.isWebGLCubeRenderTarget===!0,ot=k.length>1;if(ot||(Z.__webglTexture===void 0&&(Z.__webglTexture=n.createTexture()),Z.__version=v.version,a.memory.textures++),nt){U.__webglFramebuffer=[];for(let W=0;W<6;W++)if(v.mipmaps.length>0){U.__webglFramebuffer[W]=[];for(let K=0;K<v.mipmaps.length;K++)U.__webglFramebuffer[W][K]=n.createFramebuffer()}else U.__webglFramebuffer[W]=n.createFramebuffer()}else{if(v.mipmaps.length>0){U.__webglFramebuffer=[];for(let W=0;W<v.mipmaps.length;W++)U.__webglFramebuffer[W]=n.createFramebuffer()}else U.__webglFramebuffer=n.createFramebuffer();if(ot)for(let W=0,K=k.length;W<K;W++){let ut=i.get(k[W]);ut.__webglTexture===void 0&&(ut.__webglTexture=n.createTexture(),a.memory.textures++)}if(E.samples>0&&Et(E)===!1){U.__webglMultisampledFramebuffer=n.createFramebuffer(),U.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let W=0;W<k.length;W++){let K=k[W];U.__webglColorRenderbuffer[W]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,U.__webglColorRenderbuffer[W]);let ut=r.convert(K.format,K.colorSpace),R=r.convert(K.type),j=T(K.internalFormat,ut,R,K.normalized,K.colorSpace,E.isXRRenderTarget===!0),tt=ne(E);n.renderbufferStorageMultisample(n.RENDERBUFFER,tt,j,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+W,n.RENDERBUFFER,U.__webglColorRenderbuffer[W])}n.bindRenderbuffer(n.RENDERBUFFER,null),E.depthBuffer&&(U.__webglDepthRenderbuffer=n.createRenderbuffer(),Zt(U.__webglDepthRenderbuffer,E,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(nt){e.bindTexture(n.TEXTURE_CUBE_MAP,Z.__webglTexture),se(n.TEXTURE_CUBE_MAP,v);for(let W=0;W<6;W++)if(v.mipmaps.length>0)for(let K=0;K<v.mipmaps.length;K++)bt(U.__webglFramebuffer[W][K],E,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+W,K);else bt(U.__webglFramebuffer[W],E,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+W,0);S(v)?M(n.TEXTURE_CUBE_MAP):v.mipmaps.length>0&&n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_MAX_LEVEL,v.mipmaps.length-1),e.unbindTexture()}else if(ot){for(let W=0,K=k.length;W<K;W++){let ut=k[W],R=i.get(ut),j=n.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(j=E.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(j,R.__webglTexture),se(j,ut),bt(U.__webglFramebuffer,E,ut,n.COLOR_ATTACHMENT0+W,j,0),S(ut)&&M(j)}e.unbindTexture()}else{let W=n.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(W=E.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(W,Z.__webglTexture),se(W,v),v.mipmaps.length>0)for(let K=0;K<v.mipmaps.length;K++)bt(U.__webglFramebuffer[K],E,v,n.COLOR_ATTACHMENT0,W,K);else bt(U.__webglFramebuffer,E,v,n.COLOR_ATTACHMENT0,W,0);S(v)?M(W):v.mipmaps.length>0&&n.texParameteri(W,n.TEXTURE_MAX_LEVEL,v.mipmaps.length-1),e.unbindTexture()}E.depthBuffer&&jt(E)}function z(E){let v=E.textures;for(let U=0,Z=v.length;U<Z;U++){let k=v[U];if(S(k)&&k.mipmapsAutoUpdate===!0){let nt=A(E),ot=i.get(k).__webglTexture;e.bindTexture(nt,ot),M(nt),e.unbindTexture()}}}let Re=[];function Pt(E){if(E.samples>0){if(Et(E)===!1){let v=E.textures,U=E.width,Z=E.height,k=n.COLOR_BUFFER_BIT,nt=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ot=i.get(E),W=v.length>1;if(W)for(let ut=0;ut<v.length;ut++)e.bindFramebuffer(n.FRAMEBUFFER,ot.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ut,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,ot.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ut,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,ot.__webglMultisampledFramebuffer),E.texture.mipmaps.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,ot.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,ot.__webglFramebuffer);for(let ut=0;ut<v.length;ut++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(k|=n.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(k|=n.STENCIL_BUFFER_BIT)),W){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ot.__webglColorRenderbuffer[ut]);let R=i.get(v[ut]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,R,0)}n.blitFramebuffer(0,0,U,Z,0,0,U,Z,k,n.NEAREST),c===!0&&(Re.length=0,Re.push(n.COLOR_ATTACHMENT0+ut),E.depthBuffer&&E.storeMultisampledDepthBuffer===!1&&Re.push(nt),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Re))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),W)for(let ut=0;ut<v.length;ut++){e.bindFramebuffer(n.FRAMEBUFFER,ot.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ut,n.RENDERBUFFER,ot.__webglColorRenderbuffer[ut]);let R=i.get(v[ut]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,ot.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ut,n.TEXTURE_2D,R,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,ot.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.storeMultisampledDepthBuffer===!1&&c){let v=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[v])}}}function ne(E){return Math.min(s.maxSamples,E.samples)}function Et(E){let v=i.get(E);return E.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function L(E){let v=a.render.frame;h.get(E)!==v&&(h.set(E,v),E.update())}function q(E,v){let U=E.colorSpace,Z=E.format,k=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||U!==Ir&&U!==Ai&&(fe.getTransfer(U)===ye?(Z!==$n||k!==bn)&&$t("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Jt("WebGLTextures: Unsupported texture color space:",U)),v}function et(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(l.width=E.naturalWidth||E.width,l.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(l.width=E.displayWidth,l.height=E.displayHeight):(l.width=E.width,l.height=E.height),l}this.allocateTextureUnit=ft,this.resetTextureUnits=at,this.getTextureUnits=P,this.setTextureUnits=it,this.setTexture2D=rt,this.setTexture2DArray=pt,this.setTexture3D=Nt,this.setTextureCube=_t,this.rebindTextures=Kt,this.setupRenderTarget=ee,this.updateRenderTargetMipmap=z,this.updateMultisampleRenderTarget=Pt,this.setupDepthRenderbuffer=jt,this.setupFrameBufferTexture=bt,this.useMultisampledRTT=Et,this.dispose=O}function Iv(n,t){function e(i,s=Ai){let r,a=fe.getTransfer(s);if(i===bn)return n.UNSIGNED_BYTE;if(i===al)return n.UNSIGNED_SHORT_4_4_4_4;if(i===ol)return n.UNSIGNED_SHORT_5_5_5_1;if(i===mh)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===gh)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===dh)return n.BYTE;if(i===ph)return n.SHORT;if(i===nr)return n.UNSIGNED_SHORT;if(i===rl)return n.INT;if(i===Zn)return n.UNSIGNED_INT;if(i===Hn)return n.FLOAT;if(i===rn)return n.HALF_FLOAT;if(i===xh)return n.ALPHA;if(i===_h)return n.RGB;if(i===$n)return n.RGBA;if(i===vi)return n.DEPTH_COMPONENT;if(i===Ti)return n.DEPTH_STENCIL;if(i===ll)return n.RED;if(i===cl)return n.RED_INTEGER;if(i===Zi)return n.RG;if(i===hl)return n.RG_INTEGER;if(i===ul)return n.RGBA_INTEGER;if(i===Sa||i===ba||i===Ea||i===wa)if(a===ye)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Sa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ba)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ea)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===wa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Sa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ba)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ea)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===wa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===fl||i===dl||i===pl||i===ml)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===fl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===dl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===pl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ml)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===gl||i===xl||i===_l||i===vl||i===yl||i===Ta||i===Ml)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===gl||i===xl)return a===ye?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===_l)return a===ye?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===vl)return r.COMPRESSED_R11_EAC;if(i===yl)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Ta)return r.COMPRESSED_RG11_EAC;if(i===Ml)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Sl||i===bl||i===El||i===wl||i===Tl||i===Al||i===Rl||i===Cl||i===Pl||i===Il||i===Ll||i===Dl||i===Nl||i===Ul)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Sl)return a===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===bl)return a===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===El)return a===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===wl)return a===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Tl)return a===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Al)return a===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Rl)return a===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Cl)return a===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Pl)return a===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Il)return a===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ll)return a===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Dl)return a===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Nl)return a===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ul)return a===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Fl||i===Ol||i===Bl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===Fl)return a===ye?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ol)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Bl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===zl||i===Hl||i===Aa||i===kl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===zl)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Hl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Aa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===kl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===xs?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}var Lv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Dv=`
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

}`,Oh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let i=new Zr(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new Oe({vertexShader:Lv,fragmentShader:Dv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new kt(new Fe(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Bh=class extends ei{constructor(t,e){super();let i=this,s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,f=null,d=null,p=null,_=typeof XRWebGLBinding<"u",m=new Oh,g={},y=e.getContextAttributes(),S=null,M=null,A=[],T=[],x=new gt,b=null,N=null,C=new gn;C.viewport=new Le;let F=new gn;F.viewport=new Le;let B=[C,F],V=new tl,I=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let rt=A[X];return rt===void 0&&(rt=new Ys,A[X]=rt),rt.getTargetRaySpace()},this.getControllerGrip=function(X){let rt=A[X];return rt===void 0&&(rt=new Ys,A[X]=rt),rt.getGripSpace()},this.getHand=function(X){let rt=A[X];return rt===void 0&&(rt=new Ys,A[X]=rt),rt.getHandSpace()};function Y(X){let rt=T.indexOf(X.inputSource);if(rt===-1)return;let pt=A[rt];pt!==void 0&&(pt.update(X.inputSource,X.frame,l||a),pt.dispatchEvent({type:X.type,data:X.inputSource}))}function G(){s.removeEventListener("select",Y),s.removeEventListener("selectstart",Y),s.removeEventListener("selectend",Y),s.removeEventListener("squeeze",Y),s.removeEventListener("squeezestart",Y),s.removeEventListener("squeezeend",Y),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",ht);for(let X=0;X<A.length;X++){let rt=T[X];rt!==null&&(T[X]=null,A[X].disconnect(rt))}I=null,O=null,m.reset();for(let X in g)delete g[X];if(t.setRenderTarget(S),d=null,f=null,u=null,s=null,M=null,ft.stop(),i.isPresenting=!1,t.setPixelRatio(b),t.setSize(x.width,x.height,!1),N!==null){let X=N.camera;X.fov=N.fov,X.zoom=N.zoom,X.updateProjectionMatrix(),N=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,i.isPresenting===!0&&$t("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){o=X,i.isPresenting===!0&&$t("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(X){l=X},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u===null&&_&&(u=new XRWebGLBinding(s,e)),u},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(X){if(s=X,s!==null){if(S=t.getRenderTarget(),s.addEventListener("select",Y),s.addEventListener("selectstart",Y),s.addEventListener("selectend",Y),s.addEventListener("squeeze",Y),s.addEventListener("squeezestart",Y),s.addEventListener("squeezeend",Y),s.addEventListener("end",G),s.addEventListener("inputsourceschange",ht),y.xrCompatible!==!0&&await e.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(x),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let pt=null,Nt=null,_t=null;y.depth&&(_t=y.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,pt=y.stencil?Ti:vi,Nt=y.stencil?xs:Zn);let Ft={colorFormat:e.RGBA8,depthFormat:_t,scaleFactor:r};u=this.getBinding(),f=u.createProjectionLayer(Ft),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),M=new Ye(f.textureWidth,f.textureHeight,{format:$n,type:bn,depthTexture:new Si(f.textureWidth,f.textureHeight,Nt,void 0,void 0,void 0,void 0,void 0,void 0,pt),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let pt={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,pt),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),M=new Ye(d.framebufferWidth,d.framebufferHeight,{format:$n,type:bn,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),ft.setContext(s),ft.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function ht(X){for(let rt=0;rt<X.removed.length;rt++){let pt=X.removed[rt],Nt=T.indexOf(pt);Nt>=0&&(T[Nt]=null,A[Nt].disconnect(pt))}for(let rt=0;rt<X.added.length;rt++){let pt=X.added[rt],Nt=T.indexOf(pt);if(Nt===-1){for(let Ft=0;Ft<A.length;Ft++)if(Ft>=T.length){T.push(pt),Nt=Ft;break}else if(T[Ft]===null){T[Ft]=pt,Nt=Ft;break}if(Nt===-1)break}let _t=A[Nt];_t&&_t.connect(pt)}}function J(X,rt){rt===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(rt.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(s===null)return;let rt=X.near,pt=X.far;m.texture!==null&&(m.depthNear>0&&(rt=m.depthNear),m.depthFar>0&&(pt=m.depthFar)),V.near=F.near=C.near=rt,V.far=F.far=C.far=pt,(I!==V.near||O!==V.far)&&(s.updateRenderState({depthNear:V.near,depthFar:V.far}),I=V.near,O=V.far),V.layers.mask=X.layers.mask|6,C.layers.mask=V.layers.mask&-5,F.layers.mask=V.layers.mask&-3;let Nt=X.parent,_t=V.cameras;J(V,Nt);for(let Ft=0;Ft<_t.length;Ft++)J(_t[Ft],Nt);V.projectionMatrix.copy(C.projectionMatrix),V.projectionMatrixInverse.copy(C.projectionMatrixInverse),N===null&&X.isPerspectiveCamera&&(N={camera:X,fov:X.fov,zoom:X.zoom}),at(X,V,Nt)};function at(X,rt,pt){pt===null?X.matrix.copy(rt.matrixWorld):(X.matrix.copy(pt.matrixWorld),X.matrix.invert(),X.matrix.multiply(rt.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(rt.projectionMatrix),X.projectionMatrixInverse.copy(rt.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=Co*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return V},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(X){c=X,f!==null&&(f.fixedFoveation=X),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=X)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(V)},this.getCameraTexture=function(X){return g[X]};let P=null;function it(X,rt){if(h=rt.getViewerPose(l||a),p=rt,h!==null){let pt=h.views;d!==null&&(t.setRenderTargetFramebuffer(M,d.framebuffer),t.setRenderTarget(M));let Nt=!1;pt.length!==V.cameras.length&&(V.cameras.length=0,Nt=!0);for(let Xt=0;Xt<pt.length;Xt++){let se=pt[Xt],re=null;if(d!==null)re=d.getViewport(se);else{let wt=u.getViewSubImage(f,se);re=wt.viewport,Xt===0&&(t.setRenderTargetTextures(M,wt.colorTexture,wt.depthStencilTexture),t.setRenderTarget(M))}let ct=B[Xt];ct===void 0&&(ct=new gn,ct.layers.enable(Xt),ct.viewport=new Le,B[Xt]=ct),ct.matrix.fromArray(se.transform.matrix),ct.matrix.decompose(ct.position,ct.quaternion,ct.scale),ct.projectionMatrix.fromArray(se.projectionMatrix),ct.projectionMatrixInverse.copy(ct.projectionMatrix).invert(),ct.viewport.set(re.x,re.y,re.width,re.height),Xt===0&&(V.matrix.copy(ct.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale)),Nt===!0&&V.cameras.push(ct)}let _t=s.enabledFeatures;if(_t&&_t.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){u=i.getBinding();let Xt=u.getDepthInformation(pt[0]);Xt&&Xt.isValid&&Xt.texture&&m.init(Xt,s.renderState)}if(_t&&_t.includes("camera-access")&&_){t.state.unbindTexture(),u=i.getBinding();for(let Xt=0;Xt<pt.length;Xt++){let se=pt[Xt].camera;if(se){let re=g[se];re||(re=new Zr,g[se]=re);let ct=u.getCameraImage(se);re.sourceTexture=ct}}}}for(let pt=0;pt<A.length;pt++){let Nt=T[pt],_t=A[pt];Nt!==null&&_t!==void 0&&_t.update(Nt,rt,l||a)}P&&P(X,rt),rt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:rt}),p=null}let ft=new Pd;ft.setAnimationLoop(it),this.setAnimationLoop=function(X){P=X},this.dispose=function(){}}},Nv=new _e,Hd=new Qt;Hd.set(-1,0,0,0,1,0,0,0,1);function Uv(n,t){function e(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function i(m,g){g.color.getRGB(m.fogColor.value,wh(n)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function s(m,g,y,S,M){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(m,g):g.isMeshLambertMaterial?(r(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(m,g),u(m,g)):g.isMeshPhongMaterial?(r(m,g),h(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(m,g),f(m,g),g.isMeshPhysicalMaterial&&d(m,g,M)):g.isMeshMatcapMaterial?(r(m,g),p(m,g)):g.isMeshDepthMaterial?r(m,g):g.isMeshDistanceMaterial?(r(m,g),_(m,g)):g.isMeshNormalMaterial?r(m,g):g.isLineBasicMaterial?(a(m,g),g.isLineDashedMaterial&&o(m,g)):g.isPointsMaterial?c(m,g,y,S):g.isSpriteMaterial?l(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,e(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===sn&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,e(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===sn&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,e(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,e(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);let y=t.get(g),S=y.envMap,M=y.envMapRotation;S&&(m.envMap.value=S,m.envMapRotation.value.setFromMatrix4(Nv.makeRotationFromEuler(M)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Hd),m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,m.aoMapTransform))}function a(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform))}function o(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function c(m,g,y,S){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*y,m.scale.value=S*.5,g.map&&(m.map.value=g.map,e(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function l(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function h(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function u(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function f(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function d(m,g,y){m.ior.value=g.ior,g.diffuseRoughness>0&&(m.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=g.diffuseRoughnessMap,e(g.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===sn&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.retroreflectivity>0&&(m.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function _(m,g){let y=t.get(g).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Fv(n,t,e,i){let s={},r={};function a(y,S){let M=S.program;i.uniformBlockBinding(y,M,s[y.id])}function o(y,S){let M=s[y.id];M===void 0&&(p(y),M=c(y),s[y.id]=M,y.addEventListener("dispose",m));let A=S.program;i.updateUBOMapping(y,A);let T=t.render.frame;r[y.id]!==T&&(l(y),r[y.id]=T)}function c(y){let S=n.createBuffer(),M=y.__size,A=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,M,A),n.bindBuffer(n.UNIFORM_BUFFER,null),S}function l(y){let S=s[y.id],M=y.uniforms,A=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,S);for(let T=0,x=M.length;T<x;T++){let b=M[T];if(Array.isArray(b))for(let N=0,C=b.length;N<C;N++)h(b[N],T,N,A);else h(b,T,0,A)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function h(y,S,M,A){if(f(y,S,M,A)===!0){let T=y.__offset,x=y.value;if(Array.isArray(x)){let b=0;for(let N=0;N<x.length;N++){let C=x[N],F=_(C,!0);u(C,y.__data,b),b+=F.storage/Float32Array.BYTES_PER_ELEMENT}}else u(x,y.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,T,y.__data)}}function u(y,S,M){typeof y=="number"||typeof y=="boolean"?S[M]=y:y.isMatrix3?(S[M]=y.elements[0],S[M+1]=y.elements[1],S[M+2]=y.elements[2],S[M+3]=0,S[M+4]=y.elements[3],S[M+5]=y.elements[4],S[M+6]=y.elements[5],S[M+7]=0,S[M+8]=y.elements[6],S[M+9]=y.elements[7],S[M+10]=y.elements[8],S[M+11]=0):ArrayBuffer.isView(y)?S.set(y.subarray(0,S.length-M),M):y.toArray(S,M)}function f(y,S,M,A){let T=y.value,x=S+"_"+M;if(Array.isArray(T)){A[x]===void 0&&(A[x]=[]);let b=A[x],N=!1;for(let C=0;C<T.length;C++)d(T[C],b,C)===!0&&(N=!0);return N}return d(T,A,x)}function d(y,S,M){if(S[M]===void 0)return typeof y=="number"||typeof y=="boolean"?S[M]=y:ArrayBuffer.isView(y)?S[M]=y.slice():S[M]=y.clone(),!0;{let A=S[M];if(typeof y=="number"||typeof y=="boolean"){if(A!==y)return S[M]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(A.equals(y)===!1)return A.copy(y),!0}}return!1}function p(y){let S=y.uniforms,M=0,A=16;for(let x=0,b=S.length;x<b;x++){let N=Array.isArray(S[x])?S[x]:[S[x]];for(let C=0,F=N.length;C<F;C++){let B=N[C],V=Array.isArray(B.value)?B.value:[B.value],I=Array.isArray(S[x])||Array.isArray(B.value),O=M;for(let G=0,ht=V.length;G<ht;G++){let J=V[G],at=_(J,I),P=M%A,it=P%at.boundary,ft=P+it;M+=it,ft!==0&&A-ft<at.storage&&(M+=A-ft),G===0&&(O=M),M+=at.storage}let Y=B.type==="int"?Int32Array:B.type==="uint"?Uint32Array:Float32Array;B.__data=new Y((M-O)/Float32Array.BYTES_PER_ELEMENT),B.__offset=O}}let T=M%A;return T>0&&(M+=A-T),y.__size=M,y.__cache={},this}function _(y,S){let M={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(M.boundary=4,M.storage=4):y.isVector2?(M.boundary=8,M.storage=8):y.isVector3||y.isColor?(M.boundary=16,M.storage=12):y.isVector4?(M.boundary=16,M.storage=16):y.isMatrix3?(M.boundary=16,M.storage=48):y.isMatrix4?(M.boundary=16,M.storage=64):y.isTexture?$t("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(M.boundary=16,M.storage=y.byteLength):$t("WebGLRenderer: Unsupported uniform value type.",y),S===!0&&(M.boundary=16,M.storage=Math.ceil(M.storage/16)*16),M}function m(y){let S=y.target;S.removeEventListener("dispose",m),n.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function g(){for(let y in s)n.deleteBuffer(s[y]);s={},r={}}return{bind:a,update:o,dispose:g}}var Ov=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ri=null;function Bv(){return ri===null&&(ri=new Vr(Ov,16,16,Zi,rn),ri.name="DFG_LUT",ri.minFilter=xn,ri.magFilter=xn,ri.wrapS=Nn,ri.wrapT=Nn,ri.generateMipmaps=!1,ri.needsUpdate=!0),ri}var ql=class{constructor(t={}){let{canvas:e=Zf(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1,outputBufferType:d=bn}=t;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=a;let _=d,m=new Set([ul,hl,cl]),g=new Set([bn,Zn,nr,xs,al,ol]),y=new Uint32Array(4),S=new Int32Array(4),M={textures:[],min:[],max:[],resolution:[]},A=null,T=null,x=[],b=[],N=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=si,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,F=!1,B=null,V=null,I=null,O=null;this._outputColorSpace=Be;let Y=0,G=0,ht=null,J=-1,at=null,P=new Le,it=new Le,ft=null,X=new Gt(0),rt=0,pt=e.width,Nt=e.height,_t=1,Ft=null,pe=null,Xt=new Le(0,0,pt,Nt),se=new Le(0,0,pt,Nt),re=!1,ct=new Hi,wt=new No,St=!1,mt=!1,bt=new _e,Zt=new D,Bt=new Le,jt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Kt=!1;function ee(){return ht===null?_t:1}let z=i;function Re(w,H){return e.getContext(w,H)}let Pt,ne,Et,L,q,et,E,v,U,Z,k,nt,ot,W,K,ut,R,j,tt,xt,yt,Tt,Wt;try{let w={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"187"}`),e.addEventListener("webglcontextlost",Yt,!1),e.addEventListener("webglcontextrestored",ae,!1),e.addEventListener("webglcontextcreationerror",It,!1),z===null){let H="webgl2";if(z=Re(H,w),z===null)throw Re(H)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}oe()}catch(w){throw e.removeEventListener("webglcontextlost",Yt,!1),e.removeEventListener("webglcontextrestored",ae,!1),e.removeEventListener("webglcontextcreationerror",It,!1),Jt("WebGLRenderer: "+w.message),w}function oe(){Pt=new $x(z),Pt.init(),yt=new Iv(z,Pt),ne=new Bx(z,Pt,t,yt),Et=new Cv(z,Pt),ne.reversedDepthBuffer&&f&&Et.buffers.depth.setReversed(!0),V=z.createFramebuffer(),I=z.createFramebuffer(),O=z.createFramebuffer(),L=new Qx(z),q=new mv,et=new Pv(z,Pt,Et,q,ne,yt,L),E=new Zx(C),v=new t0(z),Tt=new Fx(z,v),U=new Jx(z,v,L,Tt),Z=new t_(z,U,v,Tt,L),j=new jx(z,ne,et),K=new zx(q),k=new pv(C,E,Pt,ne,Tt,K),nt=new Uv(C,q),ot=new xv,W=new bv(Pt),R=new Ux(C,E,Et,Z,p,c),ut=new Rv(C,Z,ne),Wt=new Fv(z,L,ne,Et),tt=new Ox(z,Pt,L),xt=new Kx(z,Pt,L),L.programs=k.programs,C.capabilities=ne,C.extensions=Pt,C.properties=q,C.renderLists=ot,C.shadowMap=ut,C.state=Et,C.info=L}_!==bn&&(N=new n_(_,e.width,e.height,o,s,r));let vt=new Bh(C,z);this.xr=vt,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){let w=Pt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=Pt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return _t},this.setPixelRatio=function(w){w!==void 0&&(_t=w,this.setSize(pt,Nt,!1))},this.getSize=function(w){return w.set(pt,Nt)},this.setSize=function(w,H,st=!0){if(vt.isPresenting){$t("WebGLRenderer: Can't change size while VR device is presenting.");return}pt=w,Nt=H,e.width=Math.floor(w*_t),e.height=Math.floor(H*_t),st===!0&&(e.style.width=w+"px",e.style.height=H+"px"),N!==null&&N.setSize(e.width,e.height),this.setViewport(0,0,w,H)},this.getDrawingBufferSize=function(w){return w.set(pt*_t,Nt*_t).floor()},this.setDrawingBufferSize=function(w,H,st){pt=w,Nt=H,_t=st,e.width=Math.floor(w*st),e.height=Math.floor(H*st),this.setViewport(0,0,w,H)},this.setEffects=function(w){if(_===bn){Jt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let H=0;H<w.length;H++)if(w[H].isOutputPass===!0){$t("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}N.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(P)},this.getViewport=function(w){return w.copy(Xt)},this.setViewport=function(w,H,st,$){w.isVector4?Xt.set(w.x,w.y,w.z,w.w):Xt.set(w,H,st,$),Et.viewport(P.copy(Xt).multiplyScalar(ee()).round())},this.getScissor=function(w){return w.copy(se)},this.setScissor=function(w,H,st,$){w.isVector4?se.set(w.x,w.y,w.z,w.w):se.set(w,H,st,$),Et.scissor(it.copy(se).multiplyScalar(ee()).round())},this.getScissorTest=function(){return re},this.setScissorTest=function(w){Et.setScissorTest(re=w)},this.setOpaqueSort=function(w){Ft=w},this.setTransparentSort=function(w){pe=w},this.getClearColor=function(w){return w.copy(R.getClearColor())},this.setClearColor=function(){R.setClearColor(...arguments)},this.getClearAlpha=function(){return R.getClearAlpha()},this.setClearAlpha=function(){R.setClearAlpha(...arguments)},this.clear=function(w=!0,H=!0,st=!0){let $=0;if(w){let Q=!1;if(ht!==null){let Ct=ht.texture.format;Q=m.has(Ct)}if(Q){let Ct=ht.texture.type,Ot=g.has(Ct),Rt=R.getClearColor(),Dt=R.getClearAlpha(),Vt=Rt.r,te=Rt.g,me=Rt.b;Ot?(y[0]=Vt,y[1]=te,y[2]=me,y[3]=Dt,z.clearBufferuiv(z.COLOR,0,y)):(S[0]=Vt,S[1]=te,S[2]=me,S[3]=Dt,z.clearBufferiv(z.COLOR,0,S))}else $|=z.COLOR_BUFFER_BIT}H&&($|=z.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),st&&($|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),$!==0&&z.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(w){w.setRenderer(this),B=w},this.dispose=function(){e.removeEventListener("webglcontextlost",Yt,!1),e.removeEventListener("webglcontextrestored",ae,!1),e.removeEventListener("webglcontextcreationerror",It,!1),R.dispose(),ot.dispose(),W.dispose(),et.dispose(),q.dispose(),E.dispose(),Z.dispose(),U.dispose(),Tt.dispose(),Wt.dispose(),k.dispose(),vt.dispose(),vt.removeEventListener("sessionstart",Eu),vt.removeEventListener("sessionend",wu),ts.stop()};function Yt(w){w.preventDefault(),Nr("WebGLRenderer: Context Lost."),F=!0}function ae(){Nr("WebGLRenderer: Context Restored."),F=!1;let w=L.autoReset,H=ut.enabled,st=ut.autoUpdate,$=ut.needsUpdate,Q=ut.type;oe(),L.autoReset=w,ut.enabled=H,ut.autoUpdate=st,ut.needsUpdate=$,ut.type=Q}function It(w){Jt("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Te(w){let H=w.target;H.removeEventListener("dispose",Te),Je(H)}function Je(w){Ii(w),q.remove(w)}function Ii(w){let H=q.get(w).programs;H!==void 0&&(H.forEach(function(st){k.releaseProgram(st)}),w.isShaderMaterial&&k.releaseShaderCache(w))}this.renderBufferDirect=function(w,H,st,$,Q,Ct){H===null&&(H=jt);let Ot=Q.isMesh&&Q.matrixWorld.determinantAffine()<0,Rt=kp(w,H,st,$,Q);Et.setMaterial($,Ot);let Dt=st.index,Vt=1;if($.wireframe===!0){if(Dt=U.getWireframeAttribute(st),Dt===void 0)return;Vt=2}let te=st.drawRange,me=st.attributes.position,zt=te.start*Vt,ge=(te.start+te.count)*Vt;Ct!==null&&(zt=Math.max(zt,Ct.start*Vt),ge=Math.min(ge,(Ct.start+Ct.count)*Vt)),Dt!==null?(zt=Math.max(zt,0),ge=Math.min(ge,Dt.count)):me!=null&&(zt=Math.max(zt,0),ge=Math.min(ge,me.count));let Ve=ge-zt;if(Ve<0||Ve===1/0)return;Tt.setup(Q,$,Rt,st,Dt);let Pe,Ce=tt;if(Dt!==null&&(Pe=v.get(Dt),Ce=xt,Ce.setIndex(Pe)),Q.isMesh)$.wireframe===!0?(Et.setLineWidth($.wireframeLinewidth*ee()),Ce.setMode(z.LINES)):Ce.setMode(z.TRIANGLES);else if(Q.isLine){let on=$.linewidth;on===void 0&&(on=1),Et.setLineWidth(on*ee()),Q.isLineSegments?Ce.setMode(z.LINES):Q.isLineLoop?Ce.setMode(z.LINE_LOOP):Ce.setMode(z.LINE_STRIP)}else Q.isPoints?Ce.setMode(z.POINTS):Q.isSprite&&Ce.setMode(z.TRIANGLES);if(Q.isBatchedMesh)if(Pt.get("WEBGL_multi_draw"))Ce.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{let on=Q._multiDrawStarts,Ht=Q._multiDrawCounts,pn=Q._multiDrawCount,be=Dt?v.get(Dt).bytesPerElement:1,es=q.get($).currentProgram.getUniforms();for(let ln=0;ln<pn;ln++)es.setValue(z,"_gl_DrawID",ln),Ce.render(on[ln]/be,Ht[ln])}else if(Q.isInstancedMesh)Ce.renderInstances(zt,Ve,Q.count);else if(st.isInstancedBufferGeometry){let on=st._maxInstanceCount!==void 0?st._maxInstanceCount:1/0,Ht=Math.min(st.instanceCount,on);Ce.renderInstances(zt,Ve,Ht)}else Ce.render(zt,Ve)};function bu(w,H,st,$){B!==null&&w.isNodeMaterial&&B.setObject($,w),St===!0&&K.setState(w,st,!1),w.transparent===!0&&w.side===Ge&&w.forceSinglePass===!1?(w.side=sn,w.needsUpdate=!0,xr(w,H,$),w.side=qi,w.needsUpdate=!0,xr(w,H,$),w.side=Ge):xr(w,H,$)}this.compile=function(w,H,st=null){st===null&&(st=w),B!==null&&B.renderStart(w,H,st),T=W.get(st),T.init(H),b.push(T),st.traverseVisible(function(Q){Q.isLight&&Q.layers.test(H.layers)&&(T.pushLight(Q),Q.castShadow&&T.pushShadow(Q))}),w!==st&&w.traverseVisible(function(Q){Q.isLight&&Q.layers.test(H.layers)&&(T.pushLight(Q),Q.castShadow&&T.pushShadow(Q))}),T.setupLights(),B!==null&&B.updateLights(T.state.lightsArray),mt=this.localClippingEnabled,St=K.init(this.clippingPlanes,mt),St===!0&&K.setGlobalState(this.clippingPlanes,H),B!==null&&ut.render(T.state.shadowsArray,st,H);let $=new Set;return w.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;let Ct=Q.material;if(Ct)if(Array.isArray(Ct))for(let Ot=0;Ot<Ct.length;Ot++){let Rt=Ct[Ot];bu(Rt,st,H,Q),$.add(Rt)}else bu(Ct,st,H,Q),$.add(Ct)}),T=b.pop(),B!==null&&B.renderEnd(),$},this.compileAsync=function(w,H,st=null){let $=this.compile(w,H,st);return new Promise(Q=>{function Ct(){if($.forEach(function(Ot){let Dt=q.get(Ot).currentProgram;(Dt===void 0||Dt.isReady())&&$.delete(Ot)}),$.size===0){Q(w);return}setTimeout(Ct,10)}Pt.get("KHR_parallel_shader_compile")!==null?Ct():setTimeout(Ct,10)})};let Mc=null;function zp(w){Mc&&Mc(w)}function Eu(){ts.stop()}function wu(){ts.start()}let ts=new Pd;ts.setAnimationLoop(zp),typeof self<"u"&&ts.setContext(self),this.setAnimationLoop=function(w){Mc=w,vt.setAnimationLoop(w),w===null?ts.stop():ts.start()},vt.addEventListener("sessionstart",Eu),vt.addEventListener("sessionend",wu),this.render=function(w,H){if(H!==void 0&&H.isCamera!==!0){Jt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;B!==null&&B.renderStart(w,H);let st=vt.enabled===!0&&vt.isPresenting===!0,$=N!==null&&(ht===null||st)&&N.begin(C,ht);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),vt.enabled===!0&&vt.isPresenting===!0&&(N===null||N.isCompositing()===!1)&&(vt.cameraAutoUpdate===!0&&vt.updateCamera(H),H=vt.getCamera()),w.isScene===!0&&w.onBeforeRender(C,w,H,ht),T=W.get(w,b.length),T.init(H),T.state.textureUnits=et.getTextureUnits(),b.push(T),bt.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),H.isArrayCamera?wt.setFromArrayCamera(H):ct.setFromProjectionMatrix(bt,Un,H.reversedDepth),mt=this.localClippingEnabled,St=K.init(this.clippingPlanes,mt),A=ot.get(w,x.length),A.init(),x.push(A),this.info.render.frame++,vt.enabled===!0&&vt.isPresenting===!0){let Ot=C.xr.getDepthSensingMesh();Ot!==null&&Sc(Ot,H,-1/0,C.sortObjects)}Sc(w,H,0,C.sortObjects),A.finish(),B!==null&&B.updateLights(T.state.lightsArray),C.sortObjects===!0&&A.sort(Ft,pe),Kt=vt.enabled===!1||vt.isPresenting===!1||vt.hasDepthSensing()===!1,Kt&&R.addToRenderList(A,w),this.info.autoReset===!0&&this.info.reset(),St===!0&&K.beginShadows();let Q=T.state.shadowsArray;if(ut.render(Q,w,H),St===!0&&K.endShadows(),($&&N.hasRenderPass())===!1){let Ot=A.opaque,Rt=A.transmissive;if(T.setupLights(),H.isArrayCamera){let Dt=H.cameras;if(Rt.length>0)for(let Vt=0,te=Dt.length;Vt<te;Vt++){let me=Dt[Vt];Au(Ot,Rt,w,me)}Kt&&R.render(w);for(let Vt=0,te=Dt.length;Vt<te;Vt++){let me=Dt[Vt];Tu(A,w,me,me.viewport)}}else Rt.length>0&&Au(Ot,Rt,w,H),Kt&&R.render(w),Tu(A,w,H)}ht!==null&&G===0&&(et.updateMultisampleRenderTarget(ht),et.updateRenderTargetMipmap(ht)),$&&N.end(C),w.isScene===!0&&w.onAfterRender(C,w,H),Tt.resetDefaultState(),J=-1,at=null,b.pop(),b.length>0?(T=b[b.length-1],et.setTextureUnits(T.state.textureUnits),St===!0&&K.setGlobalState(C.clippingPlanes,T.state.camera)):T=null,x.pop(),x.length>0?A=x[x.length-1]:A=null,B!==null&&B.renderEnd()};function Sc(w,H,st,$){if(w.visible===!1)return;if(w.layers.test(H.layers)){if(w.isGroup)st=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(H);else if(w.isLight)T.pushLight(w),w.castShadow&&T.pushShadow(w);else if(w.isSprite){let Ot=H.isArrayCamera?wt:ct;if(!w.frustumCulled||w.intersectsFrustum(Ot)){$&&Bt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(bt);let Rt=Z.update(w),Dt=w.material;Dt.visible&&A.push(w,Rt,Dt,st,Bt.z,null,H)}}else if(w.isMesh||w.isLine||w.isPoints){let Ot=H.isArrayCamera?wt:ct;if(!w.frustumCulled||w.intersectsFrustum(Ot)){let Rt=Z.update(w),Dt=w.material;if($&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Bt.copy(w.boundingSphere.center)):(Rt.boundingSphere===null&&Rt.computeBoundingSphere(),Bt.copy(Rt.boundingSphere.center)),Bt.applyMatrix4(w.matrixWorld).applyMatrix4(bt)),Array.isArray(Dt)){let Vt=Rt.groups;for(let te=0,me=Vt.length;te<me;te++){let zt=Vt[te],ge=Dt[zt.materialIndex];ge&&ge.visible&&A.push(w,Rt,ge,st,Bt.z,zt,H)}}else Dt.visible&&A.push(w,Rt,Dt,st,Bt.z,null,H)}}}let Ct=w.children;for(let Ot=0,Rt=Ct.length;Ot<Rt;Ot++)Sc(Ct[Ot],H,st,$)}function Tu(w,H,st,$){let{opaque:Q,transmissive:Ct,transparent:Ot}=w;T.setupLightsView(st),St===!0&&K.setGlobalState(C.clippingPlanes,st),$&&Et.viewport(P.copy($)),Q.length>0&&ka(Q,H,st),Ct.length>0&&ka(Ct,H,st),Ot.length>0&&ka(Ot,H,st),Et.buffers.depth.setTest(!0),Et.buffers.depth.setMask(!0),Et.buffers.color.setMask(!0),Et.setPolygonOffset(!1)}function Au(w,H,st,$){if((st.isScene===!0?st.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[$.id]===void 0){let zt=Pt.has("EXT_color_buffer_half_float")||Pt.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[$.id]=new Ye(1,1,{generateMipmaps:!0,type:zt?rn:bn,minFilter:wi,samples:Math.max(4,ne.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:fe.workingColorSpace})}let Ct=T.state.transmissionRenderTarget[$.id],Ot=$.viewport||P;Ct.setSize(Ot.z*C.transmissionResolutionScale,Ot.w*C.transmissionResolutionScale);let Rt=C.getRenderTarget(),Dt=C.getActiveCubeFace(),Vt=C.getActiveMipmapLevel();C.setRenderTarget(Ct),C.getClearColor(X),rt=C.getClearAlpha(),rt<1&&C.setClearColor(16777215,.5),C.clear(),Kt&&R.render(st);let te=C.toneMapping;C.toneMapping=si;let me=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),T.setupLightsView($),St===!0&&K.setGlobalState(C.clippingPlanes,$),ka(w,st,$),et.updateMultisampleRenderTarget(Ct),et.updateRenderTargetMipmap(Ct),Pt.has("WEBGL_multisampled_render_to_texture")===!1){let zt=!1;for(let ge=0,Ve=H.length;ge<Ve;ge++){let Pe=H[ge],{object:Ce,geometry:on,material:Ht,group:pn}=Pe;if(Ht.side===Ge&&Ce.layers.test($.layers)){let be=Ht.side;Ht.side=sn,Ht.needsUpdate=!0,Ru(Ce,st,$,on,Ht,pn),Ht.side=be,Ht.needsUpdate=!0,zt=!0}}zt===!0&&(et.updateMultisampleRenderTarget(Ct),et.updateRenderTargetMipmap(Ct))}C.setRenderTarget(Rt,Dt,Vt),C.setClearColor(X,rt),me!==void 0&&($.viewport=me),C.toneMapping=te}function ka(w,H,st){let $=H.isScene===!0?H.overrideMaterial:null;for(let Q=0,Ct=w.length;Q<Ct;Q++){let Ot=w[Q],{object:Rt,geometry:Dt,group:Vt}=Ot,te=Ot.material;te.allowOverride===!0&&$!==null&&(te=$),Rt.layers.test(st.layers)&&Ru(Rt,H,st,Dt,te,Vt)}}function Ru(w,H,st,$,Q,Ct){B!==null&&Q.isNodeMaterial&&B.setObject(w,Q),w.onBeforeRender(C,H,st,$,Q,Ct),w.modelViewMatrix.multiplyMatrices(st.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),Q.onBeforeRender(C,H,st,$,w,Ct),Q.transparent===!0&&Q.side===Ge&&Q.forceSinglePass===!1?(Q.side=sn,Q.needsUpdate=!0,C.renderBufferDirect(st,H,$,Q,w,Ct),Q.side=qi,Q.needsUpdate=!0,C.renderBufferDirect(st,H,$,Q,w,Ct),Q.side=Ge):C.renderBufferDirect(st,H,$,Q,w,Ct),w.onAfterRender(C,H,st,$,Q,Ct)}function Cu(w){let H=0;for(let st of w)st.texture!==null&&H++;return H}function xr(w,H,st){H.isScene!==!0&&(H=jt);let $=q.get(w),Q=T.state.lights,Ct=T.state.shadowsArray,Ot=Q.state.version,Rt=k.getParameters(w,Q.state,Ct,H,st,T.state.lightProbeGridArray),Dt=k.getProgramCacheKey(Rt),Vt=$.programs;$.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?H.environment:null,$.fog=H.fog;let te=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;$.envMap=E.get(w.envMap||$.environment,te),$.envMapRotation=$.environment!==null&&w.envMap===null?H.environmentRotation:w.envMapRotation,Vt===void 0&&(w.addEventListener("dispose",Te),Vt=new Map,$.programs=Vt,$.programVariants=new Map);let me=Vt.get(Dt);if(me!==void 0){if($.currentProgram===me&&$.lightsStateVersion===Ot)return Iu(w,Rt),me}else Rt.uniforms=k.getUniforms(w),B!==null&&w.isNodeMaterial&&B.build(w,st,Rt),w.onBeforeCompile(Rt,C),me=k.acquireProgram(Rt,Dt),Vt.set(Dt,me),$.uniforms=Rt.uniforms;let zt=$.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(zt.clippingPlanes=K.uniform),Iu(w,Rt),$.needsLights=Vp(w),$.lightsStateVersion=Ot,$.needsLights&&(zt.ambientLightColor.value=Q.state.ambient,zt.lightProbe.value=Q.state.probe,zt.sunLights.value=Q.state.sun,zt.sunLightShadows.value=Q.state.sunShadow,zt.directionalLights.value=Q.state.directional,zt.directionalLightShadows.value=Q.state.directionalShadow,zt.spotLights.value=Q.state.spot,zt.spotLightShadows.value=Q.state.spotShadow,zt.rectAreaLights.value=Q.state.rectArea,zt.ltc_1.value=Q.state.rectAreaLTC1,zt.ltc_2.value=Q.state.rectAreaLTC2,zt.pointLights.value=Q.state.point,zt.pointLightShadows.value=Q.state.pointShadow,zt.hemisphereLights.value=Q.state.hemi,zt.sunShadowMatrix.value=Q.state.sunShadowMatrix,zt.sunShadowCascade.value=Q.state.sunShadowCascade,zt.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,zt.spotLightMatrix.value=Q.state.spotLightMatrix,zt.spotLightMap.value=Q.state.spotLightMap,zt.pointShadowMatrix.value=Q.state.pointShadowMatrix),$.numLightProbeGrids=Cu(T.state.lightProbeGridArray),$.currentProgram=me,$.uniformsList=null,me}function Hp(w,H,st,$,Q){let Ct=q.get(w),Ot=Ct.currentProgram.id+","+$+","+Q,Rt=Ct.programVariants.get(Ot);return Rt===void 0?(Rt=xr(w,H,st),Ct.programVariants.set(Ot,Rt)):(Ct.currentProgram=Rt,Ct.uniformsList=null,Ct.outputColorSpace=$,Ct.toneMapping=Q),Rt}function Pu(w){if(w.uniformsList===null){let H=w.currentProgram.getUniforms();w.uniformsList=ir.seqWithValue(H.seq,w.uniforms)}return w.uniformsList}function Iu(w,H){let st=q.get(w);st.outputColorSpace=H.outputColorSpace,st.batching=H.batching,st.batchingColor=H.batchingColor,st.instancing=H.instancing,st.instancingColor=H.instancingColor,st.instancingMorph=H.instancingMorph,st.skinning=H.skinning,st.morphTargets=H.morphTargets,st.morphNormals=H.morphNormals,st.morphColors=H.morphColors,st.morphTargetsCount=H.morphTargetsCount,st.numClippingPlanes=H.numClippingPlanes,st.numIntersection=H.numClipIntersection,st.vertexAlphas=H.vertexAlphas,st.vertexTangents=H.vertexTangents,st.toneMapping=H.toneMapping}function kp(w,H,st,$,Q){H.isScene!==!0&&(H=jt),et.resetTextureUnits();let Ct=H.fog,Ot=$.isMeshStandardMaterial||$.isMeshLambertMaterial||$.isMeshPhongMaterial?H.environment:null,Rt=ht===null?C.outputColorSpace:ht.isXRRenderTarget===!0?ht.texture.colorSpace:fe.workingColorSpace,Dt=$.isMeshStandardMaterial||$.isMeshLambertMaterial&&!$.envMap||$.isMeshPhongMaterial&&!$.envMap,Vt=E.get($.envMap||Ot,Dt),te=$.vertexColors===!0&&!!st.attributes.color&&st.attributes.color.itemSize===4,me=!!st.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),zt=!!st.morphAttributes.position,ge=!!st.morphAttributes.normal,Ve=!!st.morphAttributes.color,Pe=si;$.toneMapped&&(ht===null||ht.isXRRenderTarget===!0)&&(Pe=C.toneMapping);let Ce=st.morphAttributes.position||st.morphAttributes.normal||st.morphAttributes.color,on=Ce!==void 0?Ce.length:0,Ht=q.get($),pn=T.state.lights;if(St===!0&&(mt===!0||w!==at)){let Ne=w===at&&$.id===J;K.setState($,w,Ne)}let be=!1,es=!1;$.version===Ht.__version?Ht.needsLights&&Ht.lightsStateVersion!==pn.state.version||Q.isBatchedMesh&&Ht.batching===!1||!Q.isBatchedMesh&&Ht.batching===!0||Q.isBatchedMesh&&Ht.batchingColor===!0&&Q._colorsTexture===null||Q.isBatchedMesh&&Ht.batchingColor===!1&&Q._colorsTexture!==null||Q.isInstancedMesh&&Ht.instancing===!1||!Q.isInstancedMesh&&Ht.instancing===!0||Q.isSkinnedMesh&&Ht.skinning===!1||!Q.isSkinnedMesh&&Ht.skinning===!0||Q.isInstancedMesh&&Ht.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&Ht.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&Ht.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&Ht.instancingMorph===!1&&Q.morphTexture!==null||Ht.envMap!==Vt||$.fog===!0&&Ht.fog!==Ct||Ht.numClippingPlanes!==void 0&&(Ht.numClippingPlanes!==K.numPlanes||Ht.numIntersection!==K.numIntersection)||Ht.vertexAlphas!==te||Ht.vertexTangents!==me||Ht.morphTargets!==zt||Ht.morphNormals!==ge||Ht.morphColors!==Ve||Ht.morphTargetsCount!==on||Ht.numLightProbeGrids!==Cu(T.state.lightProbeGridArray)?be=!0:(Ht.outputColorSpace!==Rt||Ht.toneMapping!==Pe)&&(es=!0):(be=!0,Ht.__version=$.version);let ln=Ht.currentProgram;(be===!0||es===!0)&&(ln=es===!0?Hp($,H,Q,Rt,Pe):xr($,H,Q),B&&$.isNodeMaterial&&B.onUpdateProgram($,ln,Ht));let Ga=!1,Li=!1,ns=!1,ve=ln.getUniforms(),nn=Ht.uniforms;if(Et.useProgram(ln.program)&&(Ga=!0,Li=!0,ns=!0),$.id!==J&&(J=$.id,Li=!0),Ga||at!==w){Et.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),ve.setValue(z,"projectionMatrix",w.projectionMatrix),ve.setValue(z,"viewMatrix",w.matrixWorldInverse);let Ke=ve.map.cameraPosition;Ke!==void 0&&Ke.setValue(z,Zt.setFromMatrixPosition(w.matrixWorld)),ne.logarithmicDepthBuffer&&ve.setValue(z,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&ve.setValue(z,"isOrthographic",w.isOrthographicCamera===!0),at!==w&&(at=w,Li=!0,ns=!0)}if(Ht.needsLights&&(pn.state.sunShadowMap.length>0&&ve.setValue(z,"sunShadowMap",pn.state.sunShadowMap,et),pn.state.directionalShadowMap.length>0&&ve.setValue(z,"directionalShadowMap",pn.state.directionalShadowMap,et),pn.state.spotShadowMap.length>0&&ve.setValue(z,"spotShadowMap",pn.state.spotShadowMap,et),pn.state.pointShadowMap.length>0&&ve.setValue(z,"pointShadowMap",pn.state.pointShadowMap,et)),Q.isSkinnedMesh){ve.setOptional(z,Q,"bindMatrix"),ve.setOptional(z,Q,"bindMatrixInverse");let Ne=Q.skeleton;Ne&&(Ne.boneTexture===null&&Ne.computeBoneTexture(),ve.setValue(z,"boneTexture",Ne.boneTexture,et))}Q.isBatchedMesh&&(ve.setOptional(z,Q,"batchingTexture"),ve.setValue(z,"batchingTexture",Q._matricesTexture,et),ve.setOptional(z,Q,"batchingIdTexture"),ve.setValue(z,"batchingIdTexture",Q._indirectTexture,et),ve.setOptional(z,Q,"batchingColorTexture"),Q._colorsTexture!==null&&ve.setValue(z,"batchingColorTexture",Q._colorsTexture,et));let Vn=st.morphAttributes;if((Vn.position!==void 0||Vn.normal!==void 0||Vn.color!==void 0)&&j.update(Q,st,ln),(Li||Ht.receiveShadow!==Q.receiveShadow)&&(Ht.receiveShadow=Q.receiveShadow,ve.setValue(z,"receiveShadow",Q.receiveShadow)),($.isMeshStandardMaterial||$.isMeshLambertMaterial||$.isMeshPhongMaterial)&&$.envMap===null&&H.environment!==null&&(nn.envMapIntensity.value=H.environmentIntensity),nn.dfgLUT!==void 0&&(nn.dfgLUT.value=Bv()),Li){if(ve.setValue(z,"toneMappingExposure",C.toneMappingExposure),Ht.needsLights&&Gp(nn,ns),Ct&&$.fog===!0&&nt.refreshFogUniforms(nn,Ct),nt.refreshMaterialUniforms(nn,$,_t,Nt,T.state.transmissionRenderTarget[w.id]),Ht.needsLights&&Ht.numLightProbeGrids>0){let Ne=M,Ke=0;for(let ui of T.state.lightProbeGridArray)ui.texture!==null&&(Ne.textures[Ke]=ui.texture,Ne.min[Ke]=ui.boundingBox.min,Ne.max[Ke]=ui.boundingBox.max,Ne.resolution[Ke]=ui.resolution,Ke++);for(let ui in Ne)Ne[ui].length=Ke;nn.probesSH.value=Ne.textures,nn.probesMin.value=Ne.min,nn.probesMax.value=Ne.max,nn.probesResolution.value=Ne.resolution}ir.upload(z,Pu(Ht),nn,et)}if($.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(ir.upload(z,Pu(Ht),nn,et),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&ve.setValue(z,"center",Q.center),ve.setValue(z,"modelViewMatrix",Q.modelViewMatrix),ve.setValue(z,"normalMatrix",Q.normalMatrix),ve.setValue(z,"modelMatrix",Q.matrixWorld),$.uniformsGroups!==void 0){let Ne=$.uniformsGroups;for(let Ke=0,ui=Ne.length;Ke<ui;Ke++){let Du=Ne[Ke];Wt.update(Du,ln),Wt.bind(Du,ln)}}return ln}function Gp(w,H){w.ambientLightColor.needsUpdate=H,w.lightProbe.needsUpdate=H,w.sunLights.needsUpdate=H,w.sunLightShadows.needsUpdate=H,w.directionalLights.needsUpdate=H,w.directionalLightShadows.needsUpdate=H,w.pointLights.needsUpdate=H,w.pointLightShadows.needsUpdate=H,w.spotLights.needsUpdate=H,w.spotLightShadows.needsUpdate=H,w.rectAreaLights.needsUpdate=H,w.hemisphereLights.needsUpdate=H}function Vp(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return Y},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return ht},this.setRenderTargetTextures=function(w,H,st){let $=q.get(w);$.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,$.__autoAllocateDepthBuffer===!1&&($.__useRenderToTexture=!1),q.get(w.texture).__webglTexture=H,q.get(w.depthTexture).__webglTexture=$.__autoAllocateDepthBuffer?void 0:st,$.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,H){let st=q.get(w);st.__webglFramebuffer=H,st.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(w,H=0,st=0){ht=w,Y=H,G=st;let $=null,Q=!1,Ct=!1;if(w){let Rt=q.get(w);if(Rt.__useDefaultFramebuffer!==void 0){Et.bindFramebuffer(z.FRAMEBUFFER,Rt.__webglFramebuffer),P.copy(w.viewport),it.copy(w.scissor),ft=w.scissorTest,Et.viewport(P),Et.scissor(it),Et.setScissorTest(ft),J=-1;return}else if(Rt.__webglFramebuffer===void 0)et.setupRenderTarget(w);else if(Rt.__hasExternalTextures)et.rebindTextures(w,q.get(w.texture).__webglTexture,q.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let te=w.depthTexture;if(Rt.__boundDepthTexture!==te){if(te!==null&&q.has(te)&&(w.width!==te.image.width||w.height!==te.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");et.setupDepthRenderbuffer(w)}}let Dt=w.texture;(Dt.isData3DTexture||Dt.isDataArrayTexture||Dt.isCompressedArrayTexture)&&(Ct=!0);let Vt=q.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Vt[H])?$=Vt[H][st]:$=Vt[H],Q=!0):w.samples>0&&et.useMultisampledRTT(w)===!1?$=q.get(w).__webglMultisampledFramebuffer:Array.isArray(Vt)?$=Vt[st]:$=Vt,P.copy(w.viewport),it.copy(w.scissor),ft=w.scissorTest}else P.copy(Xt).multiplyScalar(_t).floor(),it.copy(se).multiplyScalar(_t).floor(),ft=re;if(st!==0&&($=V),Et.bindFramebuffer(z.FRAMEBUFFER,$)&&Et.drawBuffers(w,$),Et.viewport(P),Et.scissor(it),Et.setScissorTest(ft),Q){let Rt=q.get(w.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+H,Rt.__webglTexture,st)}else if(Ct){let Rt=H;for(let Dt=0;Dt<w.textures.length;Dt++){let Vt=q.get(w.textures[Dt]);z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0+Dt,Vt.__webglTexture,st,Rt)}}else if(w!==null&&st!==0){let Rt=q.get(w.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Rt.__webglTexture,st)}J=-1};function Lu(w){let H=q.get(w);return(H.__readFormat!==w.format||H.__readType!==w.type)&&(H.__readFormat=w.format,H.__readType=w.type,H.__formatReadable=ne.textureFormatReadable(w.format),H.__typeReadable=ne.textureTypeReadable(w.type)),H}this.readRenderTargetPixels=function(w,H,st,$,Q,Ct,Ot,Rt=0){if(!(w&&w.isWebGLRenderTarget)){Jt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Dt=q.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ot!==void 0&&(Dt=Dt[Ot],Array.isArray(Dt)&&(Dt=Dt[0])),Dt){Et.bindFramebuffer(z.FRAMEBUFFER,Dt);try{let Vt=w.textures[Rt],te=Vt.format,me=Vt.type;w.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+Rt);let zt=Lu(Vt);if(zt.__formatReadable===!1){Jt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(zt.__typeReadable===!1){Jt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=w.width-$&&st>=0&&st<=w.height-Q&&z.readPixels(H,st,$,Q,yt.convert(te),yt.convert(me),Ct)}finally{let Vt=ht!==null?q.get(ht).__webglFramebuffer:null;Et.bindFramebuffer(z.FRAMEBUFFER,Vt)}}},this.readRenderTargetPixelsAsync=async function(w,H,st,$,Q,Ct,Ot,Rt=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Dt=q.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ot!==void 0&&(Dt=Dt[Ot],Array.isArray(Dt)&&(Dt=Dt[0])),Dt)if(H>=0&&H<=w.width-$&&st>=0&&st<=w.height-Q){Et.bindFramebuffer(z.FRAMEBUFFER,Dt);let Vt=w.textures[Rt],te=Vt.format,me=Vt.type;w.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+Rt);let zt=Lu(Vt);if(zt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(zt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ge=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,ge),z.bufferData(z.PIXEL_PACK_BUFFER,Ct.byteLength,z.STREAM_READ),z.readPixels(H,st,$,Q,yt.convert(te),yt.convert(me),0),z.bindBuffer(z.PIXEL_PACK_BUFFER,null);let Ve=ht!==null?q.get(ht).__webglFramebuffer:null;Et.bindFramebuffer(z.FRAMEBUFFER,Ve);let Pe=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await Jf(z,Pe,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,ge),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,Ct),z.bindBuffer(z.PIXEL_PACK_BUFFER,null),z.deleteBuffer(ge),z.deleteSync(Pe),Ct}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,H=null,st=0){let $=Math.pow(2,-st),Q=Math.floor(w.image.width*$),Ct=Math.floor(w.image.height*$),Ot=H!==null?H.x:0,Rt=H!==null?H.y:0;et.setTexture2D(w,0),z.copyTexSubImage2D(z.TEXTURE_2D,st,0,0,Ot,Rt,Q,Ct),Et.unbindTexture()},this.copyTextureToTexture=function(w,H,st=null,$=null,Q=0,Ct=0){let Ot,Rt,Dt,Vt,te,me,zt,ge,Ve,Pe=w.isCompressedTexture?w.mipmaps[Ct]:w.image;if(st!==null)Ot=st.max.x-st.min.x,Rt=st.max.y-st.min.y,Dt=st.isBox3?st.max.z-st.min.z:1,Vt=st.min.x,te=st.min.y,me=st.isBox3?st.min.z:0;else{let ve=Math.pow(2,-Q);Ot=Math.floor(Pe.width*ve),Rt=Math.floor(Pe.height*ve),w.isDataArrayTexture?Dt=Pe.depth:w.isData3DTexture?Dt=Math.floor(Pe.depth*ve):Dt=1,Vt=0,te=0,me=0}$!==null?(zt=$.x,ge=$.y,Ve=$.z):(zt=0,ge=0,Ve=0);let Ce=yt.convert(H.format),on=yt.convert(H.type),Ht;H.isData3DTexture?(et.setTexture3D(H,0),Ht=z.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(et.setTexture2DArray(H,0),Ht=z.TEXTURE_2D_ARRAY):(et.setTexture2D(H,0),Ht=z.TEXTURE_2D),Et.activeTexture(z.TEXTURE0),Et.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,H.flipY),Et.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),Et.pixelStorei(z.UNPACK_ALIGNMENT,H.unpackAlignment);let pn=Et.getParameter(z.UNPACK_ROW_LENGTH),be=Et.getParameter(z.UNPACK_IMAGE_HEIGHT),es=Et.getParameter(z.UNPACK_SKIP_PIXELS),ln=Et.getParameter(z.UNPACK_SKIP_ROWS),Ga=Et.getParameter(z.UNPACK_SKIP_IMAGES);Et.pixelStorei(z.UNPACK_ROW_LENGTH,Pe.width),Et.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Pe.height),Et.pixelStorei(z.UNPACK_SKIP_PIXELS,Vt),Et.pixelStorei(z.UNPACK_SKIP_ROWS,te),Et.pixelStorei(z.UNPACK_SKIP_IMAGES,me);let Li=w.isDataArrayTexture||w.isData3DTexture,ns=H.isDataArrayTexture||H.isData3DTexture;if(w.isDepthTexture){let ve=q.get(w),nn=q.get(H),Vn=q.get(ve.__renderTarget),Ne=q.get(nn.__renderTarget);Et.bindFramebuffer(z.READ_FRAMEBUFFER,Vn.__webglFramebuffer),Et.bindFramebuffer(z.DRAW_FRAMEBUFFER,Ne.__webglFramebuffer);for(let Ke=0;Ke<Dt;Ke++)Li&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,q.get(w).__webglTexture,Q,me+Ke),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,q.get(H).__webglTexture,Ct,Ve+Ke)),z.blitFramebuffer(Vt,te,Vt+Ot,te+Rt,zt,ge,zt+Ot,ge+Rt,z.DEPTH_BUFFER_BIT,z.NEAREST);Et.bindFramebuffer(z.READ_FRAMEBUFFER,null),Et.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(Q!==0||w.isRenderTargetTexture||q.has(w)){let ve=q.get(w),nn=q.get(H);Et.bindFramebuffer(z.READ_FRAMEBUFFER,I),Et.bindFramebuffer(z.DRAW_FRAMEBUFFER,O);for(let Vn=0;Vn<Dt;Vn++)Li?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,ve.__webglTexture,Q,me+Vn):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,ve.__webglTexture,Q),ns?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,nn.__webglTexture,Ct,Ve+Vn):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,nn.__webglTexture,Ct),Q!==0?z.blitFramebuffer(Vt,te,Vt+Ot,te+Rt,zt,ge,zt+Ot,ge+Rt,z.COLOR_BUFFER_BIT,z.NEAREST):ns?z.copyTexSubImage3D(Ht,Ct,zt,ge,Ve+Vn,Vt,te,Ot,Rt):z.copyTexSubImage2D(Ht,Ct,zt,ge,Vt,te,Ot,Rt);Et.bindFramebuffer(z.READ_FRAMEBUFFER,null),Et.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else ns?w.isDataTexture||w.isData3DTexture?z.texSubImage3D(Ht,Ct,zt,ge,Ve,Ot,Rt,Dt,Ce,on,Pe.data):H.isCompressedArrayTexture?z.compressedTexSubImage3D(Ht,Ct,zt,ge,Ve,Ot,Rt,Dt,Ce,Pe.data):z.texSubImage3D(Ht,Ct,zt,ge,Ve,Ot,Rt,Dt,Ce,on,Pe):w.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,Ct,zt,ge,Ot,Rt,Ce,on,Pe.data):w.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,Ct,zt,ge,Pe.width,Pe.height,Ce,Pe.data):z.texSubImage2D(z.TEXTURE_2D,Ct,zt,ge,Ot,Rt,Ce,on,Pe);Et.pixelStorei(z.UNPACK_ROW_LENGTH,pn),Et.pixelStorei(z.UNPACK_IMAGE_HEIGHT,be),Et.pixelStorei(z.UNPACK_SKIP_PIXELS,es),Et.pixelStorei(z.UNPACK_SKIP_ROWS,ln),Et.pixelStorei(z.UNPACK_SKIP_IMAGES,Ga),Ct===0&&H.generateMipmaps===!0&&H.mipmapsAutoUpdate===!0&&z.generateMipmap(Ht),Et.unbindTexture()},this.initRenderTarget=function(w){q.get(w).__webglFramebuffer===void 0&&et.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?et.setTextureCube(w,0):w.isData3DTexture?et.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?et.setTexture2DArray(w,0):et.setTexture2D(w,0),Et.unbindTexture()},this.resetState=function(){Y=0,G=0,ht=null,Et.reset(),Tt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Un}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=fe._getDrawingBufferColorSpace(t),e.unpackColorSpace=fe._getUnpackColorSpace()}};var ar={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var Pn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},zv=new fs(-1,1,1,-1,0,1),zh=class extends Me{constructor(){super(),this.setAttribute("position",new qt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new qt([0,2,0,0,2,0],2))}},Hv=new zh,Ji=class{constructor(t){this._mesh=new kt(Hv,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,zv)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var Jl=class extends Pn{constructor(t,e="tDiffuse"){super(),this.textureID=e,this.uniforms=null,this.material=null,t instanceof Oe?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Ri.clone(t.uniforms),this.material=new Oe({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new Ji(this.material)}render(t,e,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var La=class extends Pn{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,i){let s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),t.setRenderTarget(i),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Kl=class extends Pn{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var Ql=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let i=t.getSize(new gt);this._width=i.width,this._height=i.height,e=new Ye(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:rn}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Jl(ar),this.copyPass.material.blending=Ei,this.timer=new da}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){this.timer.update(),t===void 0&&(t=this.timer.getDelta());let e=this.renderer.getRenderTarget(),i=!1;for(let s=0,r=this.passes.length;s<r;s++){let a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,i),a.needsSwap){if(i){let o=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),c.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}La!==void 0&&(a instanceof La?i=!0:a instanceof Kl&&(i=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new gt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var jl=class extends Pn{constructor(t,e,i=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Gt}render(t,e,i){let s=t.autoClear;t.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=s}};var kd={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Gt(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var or=class n extends Pn{constructor(t,e=1,i,s){super(),this.strength=e,this.radius=i,this.threshold=s,this.resolution=t!==void 0?new gt(t.x,t.y):new gt(256,256),this.clearColor=new Gt(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Ye(r,a,{type:rn,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let u=new Ye(r,a,{type:rn,depthBuffer:!1});u.texture.name="UnrealBloomPass.h"+h,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);let f=new Ye(r,a,{type:rn,depthBuffer:!1});f.texture.name="UnrealBloomPass.v"+h,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),a=Math.round(a/2)}let o=kd;this.highPassUniforms=Ri.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Oe({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let c=[6,10,14,18,22];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(c[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new gt(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Ri.clone(ar.uniforms),this.blendMaterial=new Oe({uniforms:this.copyUniforms,vertexShader:ar.vertexShader,fragmentShader:ar.fragmentShader,premultipliedAlpha:!0,blending:ds,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Gt,this._oldClearAlpha=1,this._basic=new He,this._fsQuad=new Ji(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,e){let i=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(i,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,s),this.renderTargetsVertical[r].setSize(i,s),this.separableBlurMaterials[r].uniforms.invSize.value=new gt(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(t,e,i,s,r){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();let a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=i.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let o=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this._fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[c].uniforms.direction.value=n.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[c]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=n.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[c]),t.clear(),this._fsQuad.render(t),o=this.renderTargetsVertical[c];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(i),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=a}_getSeparableBlurMaterial(t){let e=[],i=t/3;for(let a=0;a<t;a++)e.push(.39894*Math.exp(-.5*a*a/(i*i))/i);let s=[],r=[];for(let a=1;a<t;a+=2){let o=e[a],c=a+1<t?e[a+1]:0,l=o+c;s.push((a*o+(a+1)*c)/l),r.push(l)}return new Oe({defines:{KERNEL_PAIRS:s.length},uniforms:{colorTexture:{value:null},invSize:{value:new gt(.5,.5)},direction:{value:new gt(.5,.5)},centerWeight:{value:e[0]},gaussianOffsets:{value:s},gaussianWeights:{value:r}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(t){return new Oe({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}};or.BlurDirectionX=new gt(1,0);or.BlurDirectionY=new gt(0,1);var Da={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

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

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var tc=class extends Pn{constructor(){super(),this.isOutputPass=!0,this.uniforms=Ri.clone(Da.uniforms),this.material=new Qs({name:Da.name,uniforms:this.uniforms,vertexShader:Da.vertexShader,fragmentShader:Da.fragmentShader}),this._fsQuad=new Ji(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},fe.getTransfer(this._outputColorSpace)===ye&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===ma?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===ga?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===xa?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===ms?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===va?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===ya?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===_a&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Hh=[{id:"bahia",name:"Bah\xEDa Azul",desc:"Recta larga, horquilla y chicana junto al mar",width:14,laps:3,theme:"day",pts:[[-350,0],[450,0],[565,35],[585,125],[520,200],[380,232],[300,285],[330,365],[265,435],[300,520],[450,565],[600,640],[645,755],[585,822],[500,785],[300,705],[0,682],[-140,664],[-175,630],[-235,640],[-380,602],[-480,520],[-520,380],[-475,262],[-520,150],[-500,50]]},{id:"niebla",name:"Monte Niebla",desc:"Curvas r\xE1pidas y enlazadas al atardecer",width:13,laps:3,theme:"sunset",pts:[[0,0],[520,0],[610,50],[600,150],[480,190],[420,280],[470,380],[600,420],[700,520],[660,640],[520,660],[380,600],[250,640],[120,760],[-40,760],[-120,660],[-60,560],[-130,470],[-280,470],[-360,380],[-330,250],[-380,140],[-300,30],[-170,0]]},{id:"puerto",name:"Puerto Nocturno",desc:"Callejero de noche entre edificios y el puerto, muros pegados",width:12,laps:3,theme:"night",street:!0,pts:[[-260,0],[480,0],[530,12],[552,55],[556,210],[572,255],[618,275],[770,278],[818,298],[834,345],[812,392],[705,468],[655,522],[642,600],[606,642],[545,652],[385,652],[334,632],[314,584],[306,430],[286,386],[242,368],[100,366],[58,346],[44,302],[40,182],[20,140],[-22,122],[-190,120],[-240,102],[-262,58]]}];var Mt={mass:798,Iz:1150,wb:3.6,a:1.98,b:1.62,tw:1.6,h:.29,R:.36,ClA:3.8,CdA:1.25,aeroFront:.42,mu:1.72,Fz0:2600,loadSens:.07,kp:.11,ap:.105,IwF:1,IwR:1.3,Ie:.06,eff:.92,brakeF:4300,brakeR:3300,idle:4e3,limiter:12800,upRpm:12300,downRpm:7700,gears:[15.2,12.3,10.4,9,7.9,6.9,6,5.1],maxSteer:.36},Gh=1.225,ec=9.81,Ki=[[3e3,330],[4e3,390],[6e3,470],[8e3,560],[1e4,620],[11e3,640],[12e3,615],[12800,560],[13500,400]];function kv(n){if(n<=Ki[0][0])return Ki[0][1];for(let t=1;t<Ki.length;t++)if(n<=Ki[t][0]){let[e,i]=Ki[t-1],[s,r]=Ki[t];return i+(r-i)*(n-e)/(s-e)}return Ki[Ki.length-1][1]}var Vd=1.6,Gv=Math.tan(Math.PI/(2*Vd));function Vv(n){return Math.sin(Vd*Math.atan(Gv*n))}var Wv=Math.tan(Mt.ap),Xv=[[Mt.a,Mt.tw/2],[Mt.a,-Mt.tw/2],[-Mt.b,Mt.tw/2],[-Mt.b,-Mt.tw/2]];function Wd(n,t,e){return{x:n,z:t,h:e,vx:0,vy:0,r:0,w:[0,0,0,0],rot:[0,0,0,0],kap:[0,0,0,0],alp:[0,0,0,0],Fz:[0,0,0,0],use:[0,0,0,0],surf:[0,0,0,0],gear:1,rpm:Mt.idle,shiftT:0,steer:0,thr:0,brk:0,axs:0,ays:0,tcCut:1,absF:[1,1,1,1],drs:!1,tow:0,revCount:0,dmg:new Array(11).fill(0),assist:{abs:!0,tc:!0,auto:!0}}}function Jn(n){return Math.hypot(n.vx,n.vy)}function qv(n){return n===0?1:n===1?.93:n===2?.55:n===3?.45:.88}function kh(n,t,e,i,s,r){let a=Math.max(Math.abs(i),3),o=(e*Mt.R-i)/a,c=s/a,l=o/Mt.kp,h=c/Wv,u=Math.hypot(l,h);if(u<1e-6||r<=0)return[0,0,o,c,0];let f=Mt.mu*(1-Mt.loadSens*(r/Mt.Fz0-1));f=Math.max(Mt.mu*.7,f)*qv(n.surf[t])*(t>1?1.07:1)*(1-.3*Math.min(1,n.dmg[4+t]))*(n.gripX||1);let d=f*r*Vv(u);return[d*l/u,-d*h/u,o,c,u]}function Xd(n,t,e){let i=Mt.mass,s=n.vx,r=t.steer-n.steer,a=3.2*e;n.steer+=Math.max(-a,Math.min(a,r)),n.steer=Math.max(-Mt.maxSteer,Math.min(Mt.maxSteer,n.steer)),n.thr+=(t.thr-n.thr)*Math.min(1,e*18),n.brk+=(t.brk-n.brk)*Math.min(1,e*22);let o=s*s,c=n.drs?1:0,l=n.tow||0,h=n.dmg,u=h[2]>=1?1:Math.min(1,h[0]),f=h[2]>=1?1:Math.min(1,h[1]),d=Math.min(1,h[3]),p=1-.12*(Math.min(1,h[8])+Math.min(1,h[9])),_=Mt.CdA*(1-.18*c)*(1-.28*l)*(1-.22*d)*(1+.04*(u+f)),m=Mt.ClA*(1-.12*l)*p,g=.5*Gh*o,y=g*m*Mt.aeroFront,S=g*m*(1-Mt.aeroFront)*(1-.12*c)*(1-.7*d),M=g*_*Math.sign(s),A=Mt.wb,T=i*ec*Mt.b/A,x=i*ec*Mt.a/A,b=i*n.axs*Mt.h/A,N=(T-b)/2,C=(x+S+b)/2,F=i*n.ays*Mt.h/Mt.tw*.5,B=n.Fz;B[0]=Math.max(0,N+y/2*(1-.75*u)-F),B[1]=Math.max(0,N+y/2*(1-.75*f)+F),B[2]=Math.max(0,C-F),B[3]=Math.max(0,C+F);for(let mt=0;mt<4;mt++)h[4+mt]>=1&&(B[mt]=0);let V=n.gear>0?Mt.gears[n.gear-1]:n.gear<0?-14:0,I=(n.w[2]+n.w[3])/2,O=Math.abs(I*V)*60/(2*Math.PI),Y=1,G=O,ht=Mt.idle+n.thr*5200;n.gear!==0&&O<ht&&O<6500&&(G=Math.max(O,ht),Y=.85),n.gear===0&&(G=Mt.idle+n.thr*8e3),n.rpm+=(Math.min(13500,G)-n.rpm)*Math.min(1,e*30),n.shiftT>0&&(n.shiftT-=e);let J=0;n.gear!==0&&n.shiftT<=0&&(n.thr>.02&&O<Mt.limiter?J=kv(G)*n.thr*n.tcCut*Y*(1-.45*Math.min(1,h[10]))*(n.limiter&&s>n.limiter?0:1)*(n.powerF??1):J=-(25+O*.004)*(1-n.thr));let at=J*V*Mt.eff/2,P=Mt.IwR+Mt.Ie*V*V/2,it=0,ft=0,X=0,rt=0,pt=0,Nt=0;for(let mt=0;mt<4;mt++){let[bt,Zt]=Xv[mt],Bt=n.vx-n.r*Zt,jt=n.vy+n.r*bt,Kt=mt<2,ee=h[4+mt]>.15?(Zt>0?1:-1)*.04*Math.min(1,h[4+mt]):0,z=(Kt?n.steer:0)+ee,Re=ee||Kt?Math.cos(z):1,Pt=ee||Kt?Math.sin(z):0,ne=Bt*Re+jt*Pt,Et=-Bt*Pt+jt*Re,L=Kt?Mt.IwF:P,q=Kt?0:at,et=n.w[mt],E=kh(n,mt,et,ne,Et,B[mt]),v=.05,U=kh(n,mt,et+v,ne,Et,B[mt]),Z=Math.max(0,(U[0]-E[0])/v),k=et+e*(q-E[0]*Mt.R)/(L+e*Z*Mt.R*Mt.R),nt=(Kt?Mt.brakeF:Mt.brakeR*(1-.35*Math.min(1,Math.abs(n.ays)/25)))*n.brk*n.absF[mt];n.surf[mt]>=2&&(nt+=0);let ot=nt*e/(L+e*Z*Mt.R*Mt.R);Math.abs(k)<=ot?k=0:k-=Math.sign(k)*ot,n.w[mt]=k;let[W,K,ut,R,j]=kh(n,mt,k,ne,Et,B[mt]);n.kap[mt]=ut,n.alp[mt]=R,n.use[mt]=j,Kt||(rt=Math.max(rt,ut),ut>.02&&(Nt=Math.max(Nt,j))),pt=Math.min(pt,ut);let tt=-.012*B[mt]*Math.sign(ne);h[4+mt]>=1&&(tt-=i*ec/4*.75*Math.sign(ne)*Math.min(1,Math.abs(ne))),n.surf[mt]===2&&(tt-=i/4*(.9+.06*Math.abs(ne))*Math.sign(ne)),n.surf[mt]===3&&(tt-=i/4*(3.2+.16*Math.abs(ne))*Math.sign(ne)),Math.abs(ne)<.5&&(tt*=Math.abs(ne)/.5);let xt=W+tt,yt=xt*Re-K*Pt,Tt=xt*Pt+K*Re;it+=yt,ft+=Tt,X+=bt*Tt-Zt*yt,n.assist.abs?(ut<-.1||j>1&&ut<-.03)&&n.brk>.05?n.absF[mt]=Math.max(.1,n.absF[mt]-e*14):j<.9&&(n.absF[mt]=Math.min(1,n.absF[mt]+e*5)):n.absF[mt]=1}let _t=(n.w[2]+n.w[3])/2,Ft=Math.min(1,e*40);n.w[2]+=(_t-n.w[2])*Ft*.5,n.w[3]+=(_t-n.w[3])*Ft*.5,n.assist.tc?rt>.12||Nt>1.05?n.tcCut=Math.max(.15,n.tcCut-e*7):n.tcCut=Math.min(1,n.tcCut+e*3):n.tcCut=1,it-=M,ft-=.5*Gh*2.2*n.vy*Math.abs(n.vy);let pe=it/i,Xt=ft/i;n.vx+=(pe+n.r*n.vy)*e,n.vy+=(Xt-n.r*n.vx)*e,n.r+=X/Mt.Iz*e,Math.hypot(n.vx,n.vy)<.3&&n.thr<.05&&(n.vx*=.9,n.vy*=.9,n.r*=.9),n.axs+=(pe-n.axs)*Math.min(1,e*14),n.ays+=(Xt-n.ays)*Math.min(1,e*14),n.h+=n.r*e;let re=Math.sin(n.h),ct=Math.cos(n.h),wt=Math.cos(n.h),St=-Math.sin(n.h);n.x+=(n.vx*re+n.vy*wt)*e,n.z+=(n.vx*ct+n.vy*St)*e;for(let mt=0;mt<4;mt++)n.rot[mt]+=n.w[mt]*e;n.lastAx=pe,n.lastAy=Xt}function qd(n,t){let e=n.vx;if(n.gear>=1&&e<.6&&t.brk>.5&&t.thr<.1){if(n.revCount+=t.dt,n.revCount>.45)return n.gear=-1,n.revCount=0,"down"}else n.revCount=0;if(n.gear===-1&&(t.thr>.1||e>1)&&t.thr>.1&&e>-.6)return n.gear=1,"up";if(n.gear<1||n.shiftT>0)return null;let i=s=>Math.abs((n.w[2]+n.w[3])/2*Mt.gears[s-1])*60/(2*Math.PI);if(n.assist.auto){if(n.gear<8&&i(n.gear)>Mt.upRpm)return n.gear++,n.shiftT=.05,"up";if(n.gear>1&&i(n.gear)<Mt.downRpm&&i(n.gear-1)<11800)return n.gear--,n.shiftT=.03,"down"}else{if(t.up&&n.gear<8)return n.gear++,n.shiftT=.05,"up";if(t.down&&n.gear>1&&i(n.gear-1)<13200)return n.gear--,n.shiftT=.03,"down"}return null}function Yd(n,t,e,i){n.x+=t*i,n.z+=e*i;let s=Math.sin(n.h),r=Math.cos(n.h),a=Math.cos(n.h),o=-Math.sin(n.h),c=n.vx*s+n.vy*a,l=n.vx*r+n.vy*o,h=c*t+l*e;if(h>=0)return 0;let u=c-h*t,f=l-h*e,d=.25,p=Math.max(.55,1-Math.abs(h)*.02);c=u*p-h*d*t,l=f*p-h*d*e,n.vx=c*s+l*r,n.vy=c*a+l*o,n.r*=.5,n.r+=(Math.random()-.5)*Math.min(1.5,-h*.05);for(let _=0;_<4;_++)n.w[_]=n.vx/Mt.R;return-h}var Zd=["Aler\xF3n del. izq.","Aler\xF3n del. der.","Trompa","Aler\xF3n trasero","Suspensi\xF3n del. izq.","Suspensi\xF3n del. der.","Suspensi\xF3n tras. izq.","Suspensi\xF3n tras. der.","Pont\xF3n izq.","Pont\xF3n der.","Motor"],Yv=[9,9,15,11,15,15,17,17,18,18,30];function Vh(n,t,e,i,s=1){let r=i-4.5;if(r<=0)return[];let a=(l,h=1)=>{let u=n.dmg[l];n.dmg[l]=Math.min(1,n.dmg[l]+r/Yv[l]*h*s),u<1&&n.dmg[l]>=1&&o.push(l)},o=[],c=e>0;return t>2.2?Math.abs(e)<.35?(a(0),a(1),i>13&&a(2,.7)):(a(c?0:1,1.2),i>12&&(a(c?4:5,.6),a(2,.35))):t>.9?(a(c?4:5),a(c?0:1,.6)):t>-1?(a(c?8:9),i>12&&a(c?4:5,.3)):t>-2.2?(a(c?6:7),i>12&&a(3,.4)):(a(3,1.1),i>14&&a(c?6:7,.4)),i>16&&a(10,.6),i>22&&(a(c?8:9,.5),a(3,.3)),o}var Gd=[[2.95,.9],[2.95,-.9],[3.05,0],[1.98,1],[1.98,-1],[0,.85],[0,-.85],[-1.62,1],[-1.62,-1],[-2.55,.48],[-2.55,-.48]];function $d(n,t,e){let i=Math.sin(n.h),s=Math.cos(n.h),r=Math.cos(n.h),a=-Math.sin(n.h),o=Gd[0],c=-1e9;for(let l of Gd){let h=i*l[0]+r*l[1],u=s*l[0]+a*l[1],f=-(h*t+u*e);f>c&&(c=f,o=l)}return o}function Wh(n){n.dmg.fill(0)}function Jd(n,t,e){let i=Math.max(.5,n.vx),s=.5*Gh*Mt.ClA/Mt.mass,r=1.45*(ec+s*i*i),a=t*Math.min(r/i,i/6),o=Math.atan(Mt.wb*a/i)+t*Math.min(.07,9e-4*i);return o+=(a-n.r)*(i>8?.09:.03),i>5&&(o+=Math.max(-.14,Math.min(.14,Math.atan2(n.vy,i)*.8))),Math.max(-Mt.maxSteer,Math.min(Mt.maxSteer,o*1))}var Zv=3;function $v(n,t,e,i,s){let r=(g,y)=>Math.pow(Math.hypot(y[0]-g[0],y[1]-g[1]),.5)||1e-4,o=0+r(n,t),c=o+r(t,e),l=c+r(e,i),h=o+(c-o)*s,u=(g,y,S,M)=>[(M-h)/(M-S)*g[0]+(h-S)/(M-S)*y[0],(M-h)/(M-S)*g[1]+(h-S)/(M-S)*y[1]],f=u(n,t,0,o),d=u(t,e,o,c),p=u(e,i,c,l),_=u(f,d,0,c),m=u(d,p,o,l);return u(_,m,o,c)}function Qd(n){let t=n.pts,e=t.length,i=[];for(let P=0;P<e;P++){let it=t[(P-1+e)%e],ft=t[P],X=t[(P+1)%e],rt=t[(P+2)%e],pt=Math.max(8,Math.ceil(Math.hypot(X[0]-ft[0],X[1]-ft[1])/.5));for(let Nt=0;Nt<pt;Nt++)i.push($v(it,ft,X,rt,Nt/pt))}let s=[0];for(let P=1;P<=i.length;P++){let it=i[P-1],ft=i[P%i.length];s.push(s[P-1]+Math.hypot(ft[0]-it[0],ft[1]-it[1]))}let r=s[i.length],a=Math.round(r/Zv),o=r/a,c=new Float64Array(a),l=new Float64Array(a),h=0;for(let P=0;P<a;P++){let it=P*o;for(;s[h+1]<it;)h++;let ft=i[h],X=i[(h+1)%i.length],rt=(it-s[h])/(s[h+1]-s[h]||1);c[P]=ft[0]+(X[0]-ft[0])*rt,l[P]=ft[1]+(X[1]-ft[1])*rt}let u=new Float64Array(a);for(let P=0;P<a;P++){let it=0;for(let ft=-3;ft<=3;ft++)it=Math.max(it,Math.abs(nc(c,l,a,(P+ft+a)%a,4)));u[P]=it}let f=0,d=0;{let P=0;for(;u[P]<1/700&&P<a;)P++;let it=-1;for(let ft=0;ft<=a;ft++){let X=(P+ft)%a,rt=ft<a&&u[X]<1/700;rt&&it<0&&(it=ft),!rt&&it>=0&&(ft-it>d&&(d=ft-it,f=(P+it)%a),it=-1)}}let p=d*o,_=Math.min(p-160,Math.max(p*.42,270)),m=(f+Math.round(_/o))%a,g=new Float64Array(a),y=new Float64Array(a);for(let P=0;P<a;P++)g[P]=c[(P+m)%a],y[P]=l[(P+m)%a];c=g,l=y;let S={def:n,N:a,ds:o,L:r,px:c,pz:l,width:n.width,hw:n.width/2,street:!!n.street};S.straight={a:-_,b:p-_};let M=new Float64Array(a),A=new Float64Array(a),T=new Float64Array(a),x=new Float64Array(a),b=new Float64Array(a);for(let P=0;P<a;P++){let it=(P-1+a)%a,ft=(P+1)%a,X=c[ft]-c[it],rt=l[ft]-l[it],pt=Math.hypot(X,rt);X/=pt,rt/=pt,M[P]=X,A[P]=rt,T[P]=rt,x[P]=-X}for(let P=0;P<a;P++)b[P]=nc(c,l,a,P,4);Object.assign(S,{tx:M,tz:A,nx:T,nz:x,curv:b}),S.head=P=>Math.atan2(M[(P%a+a)%a],A[(P%a+a)%a]),S.idx=P=>Math.floor((P%r+r)%r/o)%a;let N=new Float64Array(a),C=new Float64Array(a),F=new Uint8Array(a),B=new Uint8Array(a),V=new Uint8Array(a),I=new Uint8Array(a);for(let P=0;P<a;P++){let it=0;for(let rt=-12;rt<=30;rt++){let pt=b[(P+rt+a)%a];Math.abs(pt)>Math.abs(it)&&(it=pt)}let ft=Math.min(1,Math.abs(it)*70),X=it<0;if(S.street){let pt=3.2+7*ft;N[P]=S.hw+(X?pt:3.2),C[P]=S.hw+(X?3.2:pt)}else{let pt=9+14*ft;N[P]=S.hw+(X?pt:11),C[P]=S.hw+(X?11:pt),ft>.35&&(X?F[P]=1:B[P]=1)}}for(let P=0;P<a;P++)if(Math.abs(b[P])>1/260)for(let it=-6;it<=6;it++){let ft=(P+it+a)%a;V[ft]=1,I[ft]=1}let O={side:1,inS:S.straight.a+15,outS:S.straight.b-70,blend:75,lane:S.hw+7.4,width:7,wall:S.hw+2.8};O.boxes=[];for(let P=0;P<8;P++)O.boxes.push(O.inS+O.blend+40+P*14);O.limitA=O.inS+O.blend,O.limitB=O.outS-O.blend,O.offsetAt=(P,it=0)=>{let ft=Y(P),X=rt=>rt*rt*(3-2*rt);return ft<O.inS?it:ft<O.inS+O.blend?it+(O.lane-it)*X((ft-O.inS)/O.blend):ft<O.outS-O.blend?O.lane:ft<O.outS?O.lane+(S.hw-2.5-O.lane)*X((ft-(O.outS-O.blend))/O.blend):S.hw-2.5};let Y=P=>{let it=(P%r+r)%r;return it>r/2&&(it-=r),it};S.rel=Y,S.pit=O;for(let P=0;P<a;P++){let it=Y(P*o);if(it>O.inS-10&&it<O.outS+10){let ft=it<O.inS+O.blend*.85||it>O.outS-O.blend*.85;N[P]=ft?Math.max(N[P],O.lane+O.width/2+1):O.wall,F[P]=0,V[P]=0,it>O.inS-10&&it<O.outS+10&&(B[P]=0)}}let G=40,ht=new Map,J=(P,it)=>Math.floor(P/G)+","+Math.floor(it/G);for(let P=0;P<a;P++){let it=J(c[P],l[P]);ht.has(it)||ht.set(it,[]),ht.get(it).push(P)}S.grid=ht,S.cell=G;for(let P=0;P<a;P++)for(let it of[1,-1]){let ft=it>0?N:C,X=ft[P];for(let rt=2;rt<X+6;rt+=2){let pt=c[P]+T[P]*rt*it,Nt=l[P]+x[P]*rt*it,_t=Jv(S,pt,Nt,P);if(_t<rt+1){X=Math.max(S.hw+1.5,Math.min(X,(rt+_t)/2-.5));break}}ft[P]=X}Kd(N,3,a),Kd(C,6,a),Object.assign(S,{wallL:N,wallR:C,gravL:F,gravR:B,kerbL:V,kerbR:I}),Kv(S),Qv(S),S.sectors=[S.L/3,2*S.L/3];let at=[];for(let P=0;P<a;P++){let it=S.vmax[P];if(it<38&&it<=S.vmax[(P-1+a)%a]&&it<=S.vmax[(P+1)%a]){let ft=b[P]>0?1:-1,X=Y(P*o);if(X>O.inS-20&&X<O.outS+20)continue;for(let rt=-1;rt<=1;rt++){let pt=(P+rt*3+a)%a,Nt=ft*(S.hw+2.4+Math.abs(rt)*.4);at.push({type:"cone",x:c[pt]+T[pt]*Nt,z:l[pt]+x[pt]*Nt})}P+=15}}for(let P=O.outS-O.blend*.9;P<O.outS+30;P+=9){let it=S.idx(P),ft=S.hw+.9+Math.max(0,Math.min(1,(O.outS-P)/O.blend))*1.5;at.push({type:"cone",x:c[it]+T[it]*ft,z:l[it]+x[it]*ft})}for(let P=0;P<a;P++){let it=S.vmax[P];if(it>75&&it-S.vmax[(P+40)%a]>25&&S.vmax[(P-1+a)%a]>=it-.01&&it-S.vmax[(P+8)%a]>1){let ft=b[(P+40)%a]>0?-1:1;for(let X of[150,100,50]){let rt=S.idx(P*o+120-X),pt=ft*(S.hw+2.6);at.push({type:"board",n:X,x:c[rt]+T[rt]*pt,z:l[rt]+x[rt]*pt,h:S.head(rt)+Math.PI})}P+=40}}return S.props=at,S.startIdx=0,S}function Jv(n,t,e,i){let s=1e9,r=n.cell,a=Math.floor(t/r),o=Math.floor(e/r);for(let c=-1;c<=1;c++)for(let l=-1;l<=1;l++){let h=n.grid.get(a+c+","+(o+l));if(h)for(let u of h){let f=Math.abs(u-i);if(f=Math.min(f,n.N-f),f*n.ds<60)continue;let d=Math.hypot(n.px[u]-t,n.pz[u]-e)-n.hw;d<s&&(s=d)}}return s}function Kd(n,t,e){let i=Float64Array.from(n);for(let s=0;s<e;s++){let r=1e9;for(let a=-t;a<=t;a++)r=Math.min(r,i[(s+a+e)%e]);n[s]=r}}function nc(n,t,e,i,s){let r=(i-s+e)%e,a=(i+s)%e,o=n[i]-n[r],c=t[i]-t[r],l=n[a]-n[i],h=t[a]-t[i],u=o*h-c*l,f=Math.hypot(o,c),d=Math.hypot(l,h),p=Math.hypot(n[a]-n[r],t[a]-t[r]);return-2*u/(f*d*p||1)}function Kv(n){let{N:t,px:e,pz:i,nx:s,nz:r}=n,a=n.hw-1.6,o=new Float64Array(t),c=new Float64Array(t),l=new Float64Array(t);for(let h=0;h<1400;h++){for(let u=0;u<t;u++)c[u]=e[u]+s[u]*o[u],l[u]=i[u]+r[u]*o[u];for(let u=0;u<t;u++){let f=(u-2+t)%t,d=(u+2)%t,p=(c[f]+c[d])/2,_=(l[f]+l[d])/2,m=(p-e[u])*s[u]+(_-i[u])*r[u];o[u]+=(m-o[u])*.55,o[u]>a?o[u]=a:o[u]<-a&&(o[u]=-a)}}n.line=o,n.lx=new Float64Array(t),n.lz=new Float64Array(t);for(let h=0;h<t;h++)n.lx[h]=e[h]+s[h]*o[h],n.lz[h]=i[h]+r[h]*o[h]}function Qv(n){let{N:t,ds:e}=n,i=9.81,s=1.5,r=.5*1.225*Mt.ClA/Mt.mass,a=.5*1.225*Mt.CdA/Mt.mass,o=new Float64Array(t),c=new Float64Array(t),l=new Float64Array(t);for(let u=0;u<t;u++)c[u]=Math.abs(nc(n.lx,n.lz,t,u,5));for(let u=0;u<t;u++)l[u]=Math.abs(nc(n.px,n.pz,t,u,5));let h=(u,f)=>{let d=new Float64Array(t);for(let p=0;p<t;p++){let _=0;for(let g=-2;g<=2;g++)_=Math.max(_,u[(p+g+t)%t]);let m=_-f*r;d[p]=m<=0?95:Math.min(95,Math.sqrt(f*i/m))}for(let p=0;p<2;p++)for(let _=t-1;_>=0;_--){let m=d[(_+1)%t],g=1.25*(i+r*m*m)+a*m*m,y=Math.sqrt(m*m+2*g*e);d[_]>y&&(d[_]=y)}return d};n.vmax=h(c,s),n.vsafe=h(l,1.32)}function Xh(n,t,e,i=-1){let{N:s,px:r,pz:a}=n,o=-1,c=1e18;if(i<0)for(let T=0;T<s;T++){let x=(r[T]-t)**2+(a[T]-e)**2;x<c&&(c=x,o=T)}else{for(let T=-25;T<=25;T++){let x=(i+T+s)%s,b=(r[x]-t)**2+(a[x]-e)**2;b<c&&(c=b,o=x)}if(c>3600)return Xh(n,t,e,-1)}let l=o,h=(l+1)%s,u=(l-1+s)%s,f=l,d=0,p=(T,x)=>{let b=r[x]-r[T],N=a[x]-a[T];return((t-r[T])*b+(e-a[T])*N)/(b*b+N*N)},_=p(l,h);_>=0?(f=l,d=Math.min(1,_)):(f=u,d=Math.max(0,Math.min(1,p(u,l))));let m=(f+1)%s,g=r[f]+(r[m]-r[f])*d,y=a[f]+(a[m]-a[f])*d,S=n.nx[f]+(n.nx[m]-n.nx[f])*d,M=n.nz[f]+(n.nz[m]-n.nz[f])*d,A=(t-g)*S+(e-y)*M;return{i:o,seg:f,f:d,s:(f+d)*n.ds,d:A}}function tn(n,t,e){let i=(e/n.ds%n.N+n.N)%n.N,s=Math.floor(i),r=i-s;return t[s]+(t[(s+1)%n.N]-t[s])*r}function ke(n,t,e=0){let i=(t/n.ds%n.N+n.N)%n.N,s=Math.floor(i),r=i-s,a=(s+1)%n.N,o=n.px[s]+(n.px[a]-n.px[s])*r,c=n.pz[s]+(n.pz[a]-n.pz[s])*r,l=n.nx[s]+(n.nx[a]-n.nx[s])*r,h=n.nz[s]+(n.nz[a]-n.nz[s])*r;return[o+l*e,c+h*e]}function kn(n,t){return Math.atan2(tn(n,n.tx,t),tn(n,n.tz,t))}var jv=1/400,ty=[[Mt.a+.2,.85],[Mt.a+.2,-.85],[-Mt.b,.85],[-Mt.b,-.85]];function Kn(n,t){let e=Xh(n,t.x,t.z,t.ti??-1);return t.ti=e.i,t.ts=e.s,t.td=e.d,e}function qh(n,t,e){let i=Math.sin(t.h),s=Math.cos(t.h),r=Math.cos(t.h),a=-Math.sin(t.h),o=n.nx[e.i],c=n.nz[e.i];for(let l=0;l<4;l++){let[h,u]=ty[l],f=i*h+r*u,d=s*h+a*u,p=e.d+f*o+d*c,_=Math.abs(p),m=0;_>n.hw&&((p>0?n.kerbL[e.i]:n.kerbR[e.i])&&_<n.hw+1.6?m=1:_<n.hw+1.6?m=0:m=(p>0?n.gravL[e.i]:n.gravR[e.i])?3:2),t.surf[l]=m}}function jd(n,t,e,i){let s=Math.max(1,Math.round(i/jv)),r=i/s,a=0;for(let o=0;o<s;o++)if(Xd(t,e,r),o%4===3||o===s-1){let c=Kn(n,t);o===s-1&&qh(n,t,c);let l=tn(n,n.wallL,c.s)-1.1,h=tn(n,n.wallR,c.s)-1.1,u=null,f=0;if(c.d>l?(u=[-n.nx[c.i],-n.nz[c.i]],f=c.d-l):c.d<-h&&(u=[n.nx[c.i],n.nz[c.i]],f=-h-c.d),u)if(f>3||t.ghost)t.x+=u[0]*f,t.z+=u[1]*f;else{let d=$d(t,u[0],u[1]),p=Yd(t,u[0],u[1],f);if(p>0){a=Math.max(a,p);let _=Vh(t,d[0],d[1],p,t.dmgScale??1);_.length&&(t.broke||(t.broke=[])).push(..._),t.lastHit={x:t.x-u[0],z:t.z-u[1],imp:p}}}}return a}function Yh(n,t){t.lap==null&&(t.lap=0,t.prevS=t.ts,t.half=!1);let e=t.ts;e>n.L*.4&&e<n.L*.6&&(t.half=!0);let i=!1;return t.prevS>n.L*.8&&e<n.L*.2?(t.half||t.lap===0&&t.gridLap)&&(t.lap++,i=!0,t.half=!1,t.gridLap=!1):t.prevS<n.L*.2&&e>n.L*.8&&!t.half&&(t.lap--,t.half=!0),t.prevS=e,t.prog=(t.lap-1)*n.L+e,i}function tp(n,t,e,i){if(n.ghost>0||t.ghost>0)return 0;let s=t.x-n.x,r=t.z-n.z;if(s*s+r*r>49)return 0;let a=.95,o=null;for(let m of[1.45,-1.3])for(let g of[1.45,-1.3]){let y=n.x+Math.sin(n.h)*m,S=n.z+Math.cos(n.h)*m,M=t.x+Math.sin(t.h)*g,A=t.z+Math.cos(t.h)*g,T=M-y,x=A-S,b=Math.hypot(T,x);b<2*a&&(!o||b<o.d)&&(o={d:b,nx:T/(b||1),nz:x/(b||1),oa:m,ob:g})}if(!o)return 0;let c=2*a-o.d,{nx:l,nz:h}=o,u=Qi(n),f=Qi(t),d=(f[0]-u[0])*l+(f[1]-u[1])*h,p=e&&i?.5:1,_=d<0?-d*.6*p:0;if(d<-4)for(let[m,g,y,S]of[[n,e,o.oa,1],[t,i,o.ob,-1]]){if(!g)continue;let M=l*S,A=h*S,T=M*Math.cos(m.h)-A*Math.sin(m.h),x=y>0?Math.abs(T)>.7?1.98:2.6:Math.abs(T)>.7?-1.62:-2.5,b=Vh(m,x,T,-d*.8,m.dmgScale??1);b.length&&(m.broke||(m.broke=[])).push(...b)}return e&&(n.x-=l*c*(i?.5:1),n.z-=h*c*(i?.5:1),ic(n,u[0]-l*_,u[1]-h*_)),i&&(t.x+=l*c*(e?.5:1),t.z+=h*c*(e?.5:1),ic(t,f[0]+l*_,f[1]+h*_)),-Math.min(0,d)}function Qi(n){let t=Math.sin(n.h),e=Math.cos(n.h),i=Math.cos(n.h),s=-Math.sin(n.h);return[n.vx*t+n.vy*i,n.vx*e+n.vy*s]}function ic(n,t,e){let i=Math.sin(n.h),s=Math.cos(n.h),r=Math.cos(n.h),a=-Math.sin(n.h),o=t*i+e*s,c=o-n.vx;n.vx=o,n.vy=t*r+e*a;for(let l=0;l<4;l++)n.w[l]+=c/Mt.R}function Zh(n,t){let e=n.L-14-t*9,i=(t%2===0?1:-1)*3.2;return{s:e,off:i}}function sc(n){return{skill:n,off:0,offT:0,mistake:0}}function ep(n,t,e,i,s){let r=t.vx,a=t.ts??0,o=0,c=1e9;for(let Y of i){if(Y===t||Y.prog==null||t.prog==null||Y.limiter)continue;let G=Y.prog-t.prog;G<-n.L/2&&(G+=n.L),G>n.L/2&&(G-=n.L);let ht=(Y.td??0)-(t.td??0);if(G>0&&G<30){if(Math.abs(ht)<2.8){let J=Y.vx??Jn(Y);r>J-1.5&&(o=(Y.td??0)>0?-3.6:3.6,G<14&&(c=Math.min(c,J+Math.max(0,G-7)*.4)))}}else G>-6&&G<=0&&Math.abs(ht)<2.6&&(o=ht>0?-2.5:2.5)}e.off+=(o-e.off)*Math.min(1,s*1.2);let l=7+Math.max(0,r)*.34,h=a+l,u=tn(n,n.line,h)+e.off,f=n.hw-1.4,[d,p]=ke(n,h,Math.max(-f,Math.min(f,u))),_=d-t.x,m=p-t.z,g=Math.sin(t.h),y=Math.cos(t.h),S=Math.cos(t.h),M=-Math.sin(t.h),A=_*g+m*y,T=_*S+m*M,x=A*A+T*T,b=Math.atan(Mt.wb*2*T/x)-t.r*.04;r<0&&(b=-b);let N=t.dmg||[],C=1-.1*Math.min(1,((N[0]||0)+(N[1]||0))/2)-.12*Math.min(1,N[3]||0),F=tn(n,n.vmax,a+Math.max(0,r)*.18)*e.skill*C*(e.slow||1);F=Math.min(F,c);let B=0,V=0;r>F+.8?V=Math.min(1,(r-F)/5+.25):B=Math.min(1,Math.max(.15,(F-r)/2.5+.6));let I=Math.abs(t.vy)/Math.max(5,Math.abs(r));I>.08&&(B*=Math.max(.1,1-(I-.08)*8));let O=Math.max(t.use[2],t.use[3]);return O>.9&&(B*=Math.max(.3,1-(O-.9)*3)),r>8&&(b+=Math.atan2(t.vy,r)*.6),t.stuck>1.5?{thr:0,brk:1,steer:-b}:{thr:B,brk:V,steer:b}}var np={day:{top:"#2f7fe0",hor:"#d6ecff",fog:"#cfe2f3",fogN:380,fogF:2600,sun:"#fff1dc",sunI:2.7,sunDir:[.45,.8,.35],hemiS:"#cfe6ff",hemiG:"#5d7a3a",hemiI:.9,grass:["#4f8a2c","#5d9a35"],water:!0,palms:!0,clouds:!0,exposure:.95,bloom:.12},sunset:{top:"#3d5b9e",hor:"#ffb079",fog:"#e0b39a",fogN:350,fogF:2400,sun:"#ffb27a",sunI:2.3,sunDir:[-.8,.32,.5],hemiS:"#ffc9a8",hemiG:"#4a5a2c",hemiI:.75,grass:["#557c2a","#62892f"],water:!1,clouds:!0,exposure:1,bloom:.2},night:{top:"#050913",hor:"#1a2440",fog:"#101a30",fogN:260,fogF:1600,sun:"#b9cbff",sunI:.9,sunDir:[.3,.85,-.4],hemiS:"#8ea6e0",hemiG:"#2a2a35",hemiI:.85,grass:["#2a2c31","#303237"],water:!0,city:!0,stars:!0,exposure:1.15,bloom:.85}};function vn(n,t,e,i=!0){let s=document.createElement("canvas");s.width=n,s.height=t,e(s.getContext("2d"),n,t);let r=new Bn(s);return r.colorSpace=Be,i&&(r.wrapS=r.wrapT=Bi),r.anisotropy=8,r}function Na(n,t,e,i,s,r=9e3,a=2){n.fillStyle=i,n.fillRect(0,0,t,e);for(let o=0;o<r;o++){let c=(Math.random()-.5)*s;n.fillStyle=c>0?`rgba(255,255,255,${c})`:`rgba(0,0,0,${-c})`,n.fillRect(Math.random()*t,Math.random()*e,a*Math.random()+.6,a*Math.random()+.6)}}function In(n,t,e,i,s,{vLen:r=10,filter:a=null,colorFn:o=null}={}){let c=[],l=[],h=[],u=n.N,f=(_,m)=>[n.px[_]+n.nx[_]*m,n.pz[_]+n.nz[_]*m];for(let _=0;_<u;_++){if(a&&!a(_))continue;let m=(_+1)%u,g=f(_,t(_)),y=f(_,e(_)),S=f(m,t(m)),M=f(m,e(m)),A=_*n.ds/r,T=(_+1)*n.ds/r,x=typeof i=="function"?i(0):i,b=typeof i=="function"?i(1):i;if(c.push(g[0],x,g[1],S[0],x,S[1],y[0],b,y[1],y[0],b,y[1],S[0],x,S[1],M[0],b,M[1]),l.push(0,A,0,T,1,A,1,A,0,T,1,T),o){let N=o(_);for(let C=0;C<6;C++)h.push(N.r,N.g,N.b)}}let d=new Me;d.setAttribute("position",new qt(c,3)),d.setAttribute("uv",new qt(l,2)),o&&d.setAttribute("color",new qt(h,3)),d.computeVertexNormals();let p=new kt(d,s);return p.receiveShadow=!0,p}function vs(n,t,e,i,s,{uLen:r=24,filter:a=null}={}){let o=[],c=[],l=0;for(let f=0;f<n.N;f++){let d=(f+1)%n.N,p=n.px[f]+n.nx[f]*t(f),_=n.pz[f]+n.nz[f]*t(f),m=n.px[d]+n.nx[d]*t(d),g=n.pz[d]+n.nz[d]*t(d),y=Math.hypot(m-p,g-_),S=l+y/r;(!a||a(f))&&(o.push(p,e,_,m,e,g,p,i,_,m,e,g,m,i,g,p,i,_),c.push(l,0,S,0,l,1,S,0,S,1,l,1)),l=S}let h=new Me;h.setAttribute("position",new qt(o,3)),h.setAttribute("uv",new qt(c,2)),h.computeVertexNormals();let u=new kt(h,s);return u.castShadow=!0,u.receiveShadow=!0,u}var ey=["CLAUDE ARCADE","TURBO COLA","NAFTA SUR","BAH\xCDA AZUL","RAYO TELECOM","PANCHO GP","OLA MOTORS","MATE POWER"],$h=[["#d7141a","#fff"],["#111","#ffd21a"],["#0b3d91","#fff"],["#00a6a6","#fff"],["#ff7a00","#111"],["#fff","#d7141a"],["#1b1b1b","#4fc3ff"],["#0a6b47","#fff"]];function sp(n,t){let e=np[n.def.theme]||np.day,i=new zi;t.toneMappingExposure=e.exposure,i.fog=new Or(e.fog,e.fogN,e.fogF);let s=n.pit,r=n.rel,a=L=>{let q=r(L*n.ds);return q>s.inS-10&&q<s.outS+10},o=new Oe({side:sn,depthWrite:!1,fog:!1,uniforms:{top:{value:new Gt(e.top)},hor:{value:new Gt(e.hor)},sunDir:{value:new D(...e.sunDir).normalize()},sunC:{value:new Gt(e.sun)},stars:{value:e.stars?1:0}},vertexShader:"varying vec3 vP; void main(){ vP = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`uniform vec3 top; uniform vec3 hor; uniform vec3 sunDir; uniform vec3 sunC; uniform float stars; varying vec3 vP;
      float h(vec3 p){ return fract(sin(dot(p, vec3(12.9898,78.233,45.164))) * 43758.5453); }
      void main(){ float y = clamp(vP.y, -0.1, 1.0); vec3 c = mix(hor, top, pow(max(y,0.0), 0.55));
      float s = max(dot(normalize(vP), sunDir), 0.0); c += sunC * (pow(s, 600.0) * 2.0 + pow(s, 16.0) * 0.12);
      if (stars > 0.5 && y > 0.05) { vec3 q = floor(vP * 420.0); float r = h(q); c += vec3(step(0.9975, r) * (0.6 + 0.4 * h(q + 1.0))) * smoothstep(0.05, 0.3, y); }
      gl_FragColor = vec4(c, 1.0); }`}),c=new kt(new zn(4e3,32,16),o);c.frustumCulled=!1,i.add(c);{let L=new zi;L.add(new kt(new zn(100,32,16),o.clone()));let q=new kt(new ki(90,24),new He({color:e.city?"#15161b":e.grass[0]}));if(q.rotation.x=-Math.PI/2,q.position.y=-2,L.add(q),e.city)for(let E=0;E<14;E++){let v=new kt(new Xe(6,30,3),new He({color:"#ffd9a0"})),U=E/14*Math.PI*2;v.position.set(Math.cos(U)*80,6,Math.sin(U)*80),v.lookAt(0,6,0),L.add(v)}let et=new sr(t);i.environment=et.fromScene(L,.04).texture,i.environmentIntensity=e.city?.6:.45,et.dispose()}i.add(new ha(e.hemiS,e.hemiG,e.hemiI));let l=new fa(e.sun,e.sunI),h=new D(...e.sunDir).normalize();l.castShadow=!0,l.shadow.mapSize.set(2048,2048);let u=l.shadow.camera;u.left=-70,u.right=70,u.top=70,u.bottom=-70,u.near=1,u.far=400,l.shadow.bias=-4e-4,l.shadow.normalBias=.04,i.add(l,l.target);let f=1e9,d=-1e9,p=1e9,_=-1e9;for(let L=0;L<n.N;L++)f=Math.min(f,n.px[L]),d=Math.max(d,n.px[L]),p=Math.min(p,n.pz[L]),_=Math.max(_,n.pz[L]);let m=(f+d)/2,g=(p+_)/2,y=Math.max(d-f,_-p),S=e.city?vn(512,512,(L,q,et)=>{Na(L,q,et,"#2b2d33",.12,2e4,3),L.strokeStyle="rgba(255,255,255,0.05)",L.lineWidth=3;for(let E=0;E<=4;E++)L.beginPath(),L.moveTo(E*q/4,0),L.lineTo(E*q/4,et),L.stroke(),L.beginPath(),L.moveTo(0,E*et/4),L.lineTo(q,E*et/4),L.stroke()}):vn(512,512,(L,q,et)=>{Na(L,q,et,e.grass[0],.16,26e3,3);for(let E=0;E<8;E++)L.fillStyle=E%2?"rgba(255,255,255,0.035)":"rgba(0,0,0,0.03)",L.fillRect(0,E*et/8,q,et/8)});S.repeat.set(y/12,y/12);let M=y+700,A=new kt(new Fe(M,M),new ie({map:S,roughness:1}));A.rotation.x=-Math.PI/2,A.position.set(m,-.03,g),A.receiveShadow=!0,i.add(A);let T=null;if(e.water){if(!e.city){let L=new kt(new Fe(M+120,M+120),new ie({color:"#e7d3a1",roughness:1}));L.rotation.x=-Math.PI/2,L.position.set(m,-.6,g),i.add(L)}T=new kt(new Fe(9e3,9e3),new ii({color:e.city?"#0b1730":"#1f7fb8",roughness:.08,metalness:.1,clearcoat:1})),T.rotation.x=-Math.PI/2,T.position.set(m,-1.2,g),i.add(T)}else{let L=new kt(new Fe(9e3,9e3),new ie({color:e.grass[0],roughness:1}));L.rotation.x=-Math.PI/2,L.position.set(m,-.5,g),i.add(L)}if(!e.city){let L=new bi(1,1,7,1),q=new ie({color:e.water?"#5c7f6a":"#5b4f6b",roughness:1,flatShading:!0}),et=46,E=new Sn(L,q,et),v=new ze;for(let U=0;U<et;U++){let Z=U/et*Math.PI*2+Math.random()*.1,k=y*.9+900+Math.random()*500,nt=180+Math.random()*(e.water?260:520),ot=260+Math.random()*300;v.position.set(m+Math.cos(Z)*k,nt/2-5,g+Math.sin(Z)*k),v.scale.set(ot,nt,ot),v.rotation.y=Math.random()*3,v.updateMatrix(),E.setMatrixAt(U,v.matrix)}i.add(E)}if(e.clouds){let L=vn(128,128,(et,E,v)=>{for(let U=0;U<14;U++){let Z=et.createRadialGradient(20+Math.random()*88,50+Math.random()*30,0,64,64,30+Math.random()*20);Z.addColorStop(0,"rgba(255,255,255,0.55)"),Z.addColorStop(1,"rgba(255,255,255,0)"),et.fillStyle=Z,et.fillRect(0,0,E,v)}},!1),q=new Zs({map:L,transparent:!0,depthWrite:!1,fog:!1,color:e.water?"#ffffff":"#ffd0b0"});for(let et=0;et<26;et++){let E=new kr(q),v=Math.random()*Math.PI*2,U=900+Math.random()*1600;E.position.set(m+Math.cos(v)*U,260+Math.random()*280,g+Math.sin(v)*U);let Z=400+Math.random()*500;E.scale.set(Z,Z*.45,1),i.add(E)}}let x=vn(256,512,(L,q,et)=>{Na(L,q,et,e.city?"#34363b":"#3d3f44",.1,26e3,1.6);for(let E=0;E<40;E++)L.fillStyle="rgba(0,0,0,0.05)",L.fillRect(Math.random()*q,Math.random()*et,2+Math.random()*40,1+Math.random()*3);L.fillStyle="#f2f2f2",L.fillRect(q*.012,0,q*.022,et),L.fillRect(q*.966,0,q*.022,et)}),b=new ie({map:x,roughness:.78,metalness:0,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1});i.add(In(n,()=>-n.hw,()=>n.hw,0,b,{vLen:14}));let N=new He({color:"#000",transparent:!0,opacity:.16,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2});i.add(In(n,L=>n.line[L]-1.1,L=>n.line[L]+1.1,.004,N));let C=new ie({color:e.city?"#3b3c41":"#4a4b50",roughness:.9,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1});i.add(In(n,()=>n.hw,L=>Math.min(n.wallL[L],n.hw+1.6),-.005,C,{filter:L=>!n.kerbL[L]})),i.add(In(n,L=>-Math.min(n.wallR[L],n.hw+1.6),()=>-n.hw,-.005,C,{filter:L=>!n.kerbR[L]})),n.street&&(i.add(In(n,()=>n.hw+1.5,L=>n.wallL[L],-.006,C,{filter:L=>n.wallL[L]>n.hw+1.6&&!a(L)})),i.add(In(n,L=>-n.wallR[L],()=>-n.hw-1.5,-.006,C,{filter:L=>n.wallR[L]>n.hw+1.6})));let F=new Gt("#d8202a"),B=new Gt("#f4f4f4"),V=new ie({vertexColors:!0,roughness:.55}),I=L=>Math.floor(L*n.ds/3)%2?F:B;i.add(In(n,()=>n.hw-.05,()=>n.hw+1.6,L=>L?.015:.05,V,{filter:L=>n.kerbL[L],colorFn:I})),i.add(In(n,()=>-n.hw-1.6,()=>-n.hw+.05,L=>L?.05:.015,V,{filter:L=>n.kerbR[L],colorFn:I}));let O=vn(256,256,(L,q,et)=>Na(L,q,et,"#cdb98f",.3,2e4,2.5)),Y=new ie({map:O,roughness:1});i.add(In(n,()=>n.hw+1.6,L=>n.wallL[L]-1.2,-.012,Y,{filter:L=>n.gravL[L]&&n.wallL[L]>n.hw+3,vLen:8})),i.add(In(n,L=>-n.wallR[L]+1.2,()=>-n.hw-1.6,-.012,Y,{filter:L=>n.gravR[L]&&n.wallR[L]>n.hw+3,vLen:8}));let G=vn(2048,64,(L,q,et)=>{for(let v=0;v<8;v++){let[U,Z]=$h[v%$h.length];L.fillStyle=U,L.fillRect(v*q/8,0,q/8,et),L.fillStyle=Z,L.font='italic 900 34px "Titillium Web", Arial, sans-serif',L.textAlign="center",L.textBaseline="middle",L.fillText(ey[v],v*q/8+q/8/2,et/2+2)}});G.wrapT=Nn;let ht=new ie({map:G,roughness:.6,side:Ge,emissive:e.city?"#ffffff":"#000000",emissiveMap:e.city?G:null,emissiveIntensity:e.city?.35:0}),J=L=>{let q=r(L*n.ds);return q>s.inS-10&&q<s.outS+10&&(q<s.inS+s.blend*.85||q>s.outS-s.blend*.85)},at=L=>{let q=r(L*n.ds);return q>=s.inS+s.blend*.85&&q<=s.outS-s.blend*.85};i.add(vs(n,L=>n.wallL[L],0,1.1,ht,{uLen:120,filter:L=>!J(L)&&!at(L)})),i.add(vs(n,L=>-n.wallR[L],0,1.1,ht,{uLen:120}));let P=vn(64,64,(L,q,et)=>{L.clearRect(0,0,q,et),L.strokeStyle="rgba(210,215,220,0.9)",L.lineWidth=2,L.beginPath(),L.moveTo(0,0),L.lineTo(q,et),L.moveTo(q,0),L.lineTo(0,et),L.stroke(),L.fillStyle="#8b9096",L.fillRect(0,0,4,et)});P.repeat.set(1,3);let it=new ie({map:P,transparent:!0,alphaTest:.4,side:Ge,roughness:.6});i.add(vs(n,L=>n.wallL[L]+.1,1.1,3.6,it,{uLen:3,filter:L=>n.wallL[L]<n.hw+30&&!J(L)&&!at(L)})),i.add(vs(n,L=>-n.wallR[L]-.1,1.1,3.6,it,{uLen:3,filter:L=>n.wallR[L]<n.hw+30}));let ft=new ie({map:vn(256,256,(L,q,et)=>Na(L,q,et,"#45474d",.08,12e3,1.5)),roughness:.85,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}),X=L=>L*n.ds,rt=L=>{let q=r(X(L));return q>s.inS&&q<s.outS},pt=L=>s.offsetAt(X(L),n.hw-1);i.add(In(n,L=>pt(L)-s.width/2,L=>pt(L)+s.width/2,.006,ft,{filter:rt}));let Nt=new He({color:"#f2f2f2",polygonOffset:!0,polygonOffsetFactor:-3,polygonOffsetUnits:-3}),_t=new He({color:"#ffd21a",polygonOffset:!0,polygonOffsetFactor:-3,polygonOffsetUnits:-3});i.add(In(n,L=>pt(L)+s.width/2-.25,L=>pt(L)+s.width/2-.1,.012,Nt,{filter:rt})),i.add(In(n,L=>pt(L)-s.width/2+.1,L=>pt(L)-s.width/2+.3,.012,_t,{filter:rt}));let Ft=new ie({color:"#d9dbe0",roughness:.8});i.add(vs(n,()=>s.wall,0,1,Ft,{filter:at})),i.add(vs(n,()=>s.wall+.6,0,1,Ft,{filter:at})),i.add(vs(n,()=>s.wall+.3,1,3.2,it,{uLen:3,filter:at}));let pe=vn(1024,128,(L,q,et)=>{L.fillStyle="#eef0f3",L.fillRect(0,0,q,et);for(let E=0;E<8;E++)L.fillStyle="#23262c",L.fillRect(E*q/8+10,34,q/8-20,et-34),L.fillStyle=$h[E%8][0],L.fillRect(E*q/8+10,10,q/8-20,18)},!1),Xt=new ie({map:pe,roughness:.7,emissive:e.city?"#ffffff":"#000",emissiveMap:e.city?pe:null,emissiveIntensity:e.city?.25:0}),se=new ie({color:"#eef0f3",roughness:.7}),re=[];{let L=s.boxes[0]-10,q=s.boxes[s.boxes.length-1]+10,et=q-L,E=(L+q)/2,[v,U]=ke(n,E,s.lane+s.width/2+7.5),Z=new Ae;Z.position.set(v,0,U),Z.rotation.y=kn(n,E),i.add(Z);let k=new kt(new Xe(14,8,et),se);k.position.set(0,4,0),k.castShadow=!0,k.receiveShadow=!0,Z.add(k);let nt=new kt(new Fe(et,7),Xt);nt.position.set(-7.02,3.5,0),nt.rotation.y=-Math.PI/2,Z.add(nt);let ot=new kt(new Fe(et*.6,1.6),new He({map:vn(1024,64,(W,K,ut)=>{W.fillStyle="#15151e",W.fillRect(0,0,K,ut),W.fillStyle="#fff",W.font='italic 900 44px "Titillium Web", Arial',W.textAlign="center",W.textBaseline="middle",W.fillText("PIT LANE \xB7 "+n.def.name.toUpperCase(),K/2,ut/2+2)},!1)}));ot.position.set(-7.05,8.6,0),ot.rotation.y=-Math.PI/2,Z.add(ot);for(let W of s.boxes){let[K,ut]=ke(n,W,s.lane+1.2),R=new kt(new Fe(2.6,6),new He({color:"#f2f2f2",transparent:!0,opacity:.5,polygonOffset:!0,polygonOffsetFactor:-3,polygonOffsetUnits:-3}));R.rotation.x=-Math.PI/2;let j=new Ae;j.position.set(K,.013,ut),j.rotation.y=kn(n,W),j.add(R),i.add(j),re.push([K,ut])}}let ct=new Ae;ct.visible=!1,i.add(ct);{let L=new ie({color:"#d7141a",roughness:.7}),q=new ie({color:"#ffffff",roughness:.3}),et=[[1.45,2],[-1.45,2],[1.5,-1.6],[-1.5,-1.6],[0,3.8],[2.4,.2]];for(let[E,v]of et){let U=new Ae;U.position.set(E,0,v);let Z=new kt(new $r(.22,.6,4,8),L);Z.position.y=.55,Z.castShadow=!0,U.add(Z);let k=new kt(new zn(.15,10,8),q);k.position.y=1.15,U.add(k),ct.add(U)}}let wt=vn(256,32,L=>{for(let q=0;q<32;q++)for(let et=0;et<4;et++)L.fillStyle=(q+et)%2?"#111":"#fff",L.fillRect(q*8,et*8,8,8)},!1);{let L=new kt(new Fe(n.width,1.6),new ie({map:wt,roughness:.7,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2})),q=new Ae;q.position.set(n.px[0],.012,n.pz[0]),q.rotation.y=n.head(0),L.rotation.set(-Math.PI/2,0,0),q.add(L),i.add(q)}let St=new He({color:"#f2f2f2",polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2});for(let L=0;L<8;L++){let q=n.L-14-L*9+2.6,et=(L%2===0?1:-1)*3.2,[E,v]=ke(n,q,et),U=new Ae;U.position.set(E,.013,v),U.rotation.y=kn(n,q);let Z=new kt(new Fe(2.4,.2),St);Z.rotation.x=-Math.PI/2,U.add(Z);for(let k of[1.1,-1.1]){let nt=new kt(new Fe(.2,1.4),St);nt.rotation.x=-Math.PI/2,nt.position.set(k,0,-.6),U.add(nt)}i.add(U)}let mt=[];{let q=n.head(2),[et,E]=ke(n,6,0),v=new Ae;v.position.set(et,0,E),v.rotation.y=q,i.add(v);let U=new ie({color:"#2a2d33",metalness:.6,roughness:.4}),Z=Math.min(tn(n,n.wallL,6),s.wall),k=tn(n,n.wallR,6),nt=Z+k;for(let R of[Z,-k]){let j=new kt(new Xe(.5,7.6,.5),U);j.position.set(R,3.8,0),j.castShadow=!0,v.add(j)}let ot=new kt(new Xe(nt,.7,.6),U);ot.position.set((Z-k)/2,7.2,0),ot.castShadow=!0,v.add(ot);let W=new kt(new Fe(nt*.9,1.4),new He({map:vn(1024,96,(R,j,tt)=>{R.fillStyle="#d7141a",R.fillRect(0,0,j,tt),R.fillStyle="#fff",R.font='italic 900 64px "Titillium Web", Arial',R.textAlign="center",R.textBaseline="middle",R.fillText("F1 CLASH  \xB7  "+n.def.name.toUpperCase(),j/2,tt/2+3)},!1),side:Ge}));W.position.set((Z-k)/2,8.4,-.05),W.rotation.y=Math.PI,v.add(W);let K=new kt(new Xe(3.6,1.1,.5),new ie({color:"#0d0d0f",roughness:.6}));K.position.set(0,6.3,-.2),v.add(K);let ut=new zn(.2,14,10);for(let R=0;R<5;R++){let j=new ie({color:"#2a0505",emissive:"#ff1010",emissiveIntensity:0});for(let tt of[6.55,6.05]){let xt=new kt(ut,j);xt.position.set(-1.4+R*.7,tt,-.45),v.add(xt)}mt.push(j)}}let bt=[],Zt=new ie({color:"#cfd3d8",roughness:.8}),Bt=new ie({color:"#d7141a",roughness:.6,side:Ge}),jt=[],Kt=(L,q,et,E)=>{let v=n.idx(L),U=q>0?n.wallL[v]:n.wallR[v],[Z,k]=ke(n,L,q*(U+et));E(Z,k,n.head(v),v)};for(let L=n.straight.a+30;L<=n.straight.b-30;L+=32)Kt(L,-1,9,(q,et,E)=>{let v=new Ae;v.position.set(q,0,et),v.rotation.y=E,i.add(v);for(let Z=0;Z<5;Z++){let k=new kt(new Xe(30,1.2+Z*1.2,2.6),Zt);k.position.set(-Z*2.4-1.3,(1.2+Z*1.2)/2,0),k.rotation.y=Math.PI/2,k.castShadow=!0,k.receiveShadow=!0,v.add(k)}let U=new kt(new Fe(14,30),Bt);U.rotation.set(-Math.PI/2+.12,0,Math.PI/2),U.position.set(-6,11,0),v.add(U);for(let Z=0;Z<5;Z++)for(let k=0;k<22;k++){if(Math.random()<.15)continue;let nt=new D(-Z*2.4-.8,1.2+Z*1.2+.45,-14+k*1.3+Math.random()*.3);nt.applyAxisAngle(new D(0,1,0),E),bt.push([q+nt.x,nt.y,et+nt.z])}jt.push([q,et,28])});{let L=s.boxes[0],q=s.boxes[s.boxes.length-1];for(let et=L;et<=q;et+=20){let[E,v]=ke(n,et,s.lane+10);jt.push([E,v,22])}}let ee=null;if(bt.length){let L=new Xe(.5,.8,.4);ee=new Sn(L,new ie({roughness:.9}),bt.length);let q=new ze,et=new Gt,E=["#d7141a","#ffd21a","#1d6bff","#ffffff","#ff7a00","#0a6b47","#ff4fa3","#222","#4fc3ff"];bt.forEach((v,U)=>{q.position.set(v[0],v[1],v[2]),q.updateMatrix(),ee.setMatrixAt(U,q.matrix),ee.setColorAt(U,et.set(E[U%E.length]))}),ee.userData.pos=bt,i.add(ee)}let z=[];{let L=new Fe(1.4,.9);for(let q=150;q<n.L-60;q+=380){let et=n.idx(q),E=r(q);if(E>s.inS-20&&E<s.outS+20)continue;let v=n.curv[et]>0?-1:1,U=v>0?n.wallL[et]:n.wallR[et],[Z,k]=ke(n,q,v*(U-.15)),nt=new ie({color:"#111",emissive:"#ffd21a",emissiveIntensity:0}),ot=new kt(L,nt);ot.position.set(Z,2.1,k),ot.rotation.y=n.head(et)+Math.PI,i.add(ot);let W=new kt(new Xe(.12,2,.12),Zt);W.position.set(Z,1,k),i.add(W),z.push({s:q,m:nt})}}let Re=(L,q,et)=>{let E=n.cell,v=Math.floor(L/E),U=Math.floor(q/E);for(let Z=-2;Z<=2;Z++)for(let k=-2;k<=2;k++){let nt=n.grid.get(v+Z+","+(U+k));if(nt)for(let ot of nt){let W=Math.max(n.wallL[ot],n.wallR[ot],a(ot)?s.lane+24:0);if(Math.hypot(n.px[ot]-L,n.pz[ot]-q)<W+et)return!0}}return!1},Pt=new ze,ne=new Gt;if(e.city){let L=vn(128,256,(W,K,ut)=>{W.fillStyle="#14161c",W.fillRect(0,0,K,ut);for(let R=0;R<32;R++)for(let j=0;j<8;j++){let tt=Math.random()<.42;W.fillStyle=tt?Math.random()<.7?"#ffd79a":"#9fd0ff":"#1d2028",W.fillRect(j*16+3,R*8+2,10,5)}}),q=new ie({map:L,emissive:"#ffffff",emissiveMap:L,emissiveIntensity:.9,roughness:.8}),et=[];for(let W=0;W<4e3&&et.length<260;W++){let K=m+(Math.random()-.5)*(y+500),ut=g+(Math.random()-.5)*(y+500),R=18+Math.random()*26,j=18+Math.random()*26,tt=Math.max(R,j);Re(K,ut,tt*.75+6)||jt.some(xt=>Math.hypot(xt[0]-K,xt[1]-ut)<xt[2]+20)||et.some(xt=>Math.hypot(xt[0]-K,xt[1]-ut)<(xt[3]+tt)*.6)||et.push([K,ut,R,tt,j,20+Math.random()*Math.random()*110])}let E=new Sn(new Xe(1,1,1),q,et.length);et.forEach(([W,K,ut,,R,j],tt)=>{Pt.position.set(W,j/2,K),Pt.scale.set(ut,j,R),Pt.rotation.set(0,Math.round(Math.random()*4)*Math.PI/2+(Math.random()-.5)*.2,0),Pt.updateMatrix(),E.setMatrixAt(tt,Pt.matrix)}),E.castShadow=!0,E.receiveShadow=!0,i.add(E);let v=[];for(let W=0;W<n.L;W+=45){let K=n.idx(W);for(let ut of[1,-1]){if(ut>0&&a(K))continue;let R=ut>0?n.wallL[K]:n.wallR[K],[j,tt]=ke(n,W+(ut>0?0:22),ut*(R+.8));v.push([j,tt,n.head(K),ut])}}let U=new Sn(new An(.12,.15,9,6),new ie({color:"#2c2f36",metalness:.6,roughness:.4}),v.length),Z=new Sn(new Xe(1.6,.25,.6),new ie({color:"#fff",emissive:"#fff4d6",emissiveIntensity:3}),v.length),k=[];v.forEach(([W,K,ut,R],j)=>{Pt.scale.set(1,1,1),Pt.rotation.set(0,ut,0),Pt.position.set(W,4.5,K),Pt.updateMatrix(),U.setMatrixAt(j,Pt.matrix);let tt=W-Math.cos(ut)*R*.6,xt=K+Math.sin(ut)*R*.6;Pt.position.set(tt,9,xt),Pt.updateMatrix(),Z.setMatrixAt(j,Pt.matrix),k.push([tt,xt])}),i.add(U,Z);let nt=vn(64,64,W=>{let K=W.createRadialGradient(32,32,0,32,32,32);K.addColorStop(0,"rgba(255,236,200,0.5)"),K.addColorStop(1,"rgba(255,236,200,0)"),W.fillStyle=K,W.fillRect(0,0,64,64)},!1),ot=new Sn(new Fe(22,22),new He({map:nt,transparent:!0,depthWrite:!1,blending:ds,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-4}),k.length);k.forEach(([W,K],ut)=>{Pt.position.set(W,.03,K),Pt.rotation.set(-Math.PI/2,0,0),Pt.scale.set(1,1,1),Pt.updateMatrix(),ot.setMatrixAt(ut,Pt.matrix)}),i.add(ot)}else{let L=[];for(let q=0;q<2600&&L.length<900;q++){let et=m+(Math.random()-.5)*(M-60),E=g+(Math.random()-.5)*(M-60);Re(et,E,12)||jt.some(v=>Math.hypot(v[0]-et,v[1]-E)<v[2]+10)||L.push([et,E,.7+Math.random()*.8])}if(e.palms){let q=new An(.18,.3,8,7);q.translate(0,4,0);let et=new Fe(4.2,.9,4,1);et.translate(2.1,0,0);{let k=et.attributes.position;for(let nt=0;nt<k.count;nt++){let ot=k.getX(nt);k.setY(nt,k.getY(nt)*(1-ot/4.6)),k.setZ(nt,-ot*ot*.07)}}let E=[];for(let k=0;k<8;k++){let nt=et.clone();nt.rotateX(Math.PI/2+.25),nt.rotateY(k/8*Math.PI*2),E.push(nt)}let v=ip(E);v.translate(0,8,0),v.computeVertexNormals();let U=new Sn(q,new ie({color:"#8a6a45",roughness:1}),L.length),Z=new Sn(v,new ie({color:"#3f8a3a",roughness:.9,side:Ge}),L.length);L.forEach(([k,nt,ot],W)=>{Pt.position.set(k,0,nt),Pt.scale.set(ot,ot,ot),Pt.rotation.set((Math.random()-.5)*.25,Math.random()*6,(Math.random()-.5)*.25),Pt.updateMatrix(),U.setMatrixAt(W,Pt.matrix),Z.setMatrixAt(W,Pt.matrix),Z.setColorAt(W,ne.set("#3f8a3a").offsetHSL((Math.random()-.5)*.05,0,(Math.random()-.5)*.12))}),U.castShadow=Z.castShadow=!0,i.add(U,Z)}else{let q=new Sn(new An(.25,.35,3,6),new ie({color:"#6b4a2b",roughness:1}),L.length),et=new bi(2.6,4,8);et.translate(0,4.2,0);let E=new bi(2,3.4,8);E.translate(0,6,0);let v=new bi(1.3,2.6,8);v.translate(0,7.6,0);let U=new Sn(ip([et,E,v]),new ie({color:"#2f6b3c",roughness:1,flatShading:!0}),L.length);L.forEach(([Z,k,nt],ot)=>{Pt.position.set(Z,1.5*nt,k),Pt.scale.set(nt,nt,nt),Pt.rotation.set(0,Math.random()*6,0),Pt.updateMatrix(),q.setMatrixAt(ot,Pt.matrix),Pt.position.set(Z,0,k),Pt.updateMatrix(),U.setMatrixAt(ot,Pt.matrix),U.setColorAt(ot,ne.set("#2f6b3c").offsetHSL((Math.random()-.5)*.04,0,(Math.random()-.5)*.1))}),U.castShadow=q.castShadow=!0,i.add(q,U)}}let Et=[];{let L=new bi(.22,.7,12);L.translate(0,.35,0);let q=new ie({color:"#ff6a00",roughness:.6,emissive:e.city?"#ff4a00":"#000",emissiveIntensity:e.city?.3:0}),et=new ie({color:"#fff",roughness:.5}),E=new An(.15,.17,.12,12,1,!0);E.translate(0,.4,0);let v=k=>vn(128,128,(nt,ot,W)=>{nt.fillStyle="#fff",nt.fillRect(0,0,ot,W),nt.strokeStyle="#d7141a",nt.lineWidth=10,nt.strokeRect(5,5,ot-10,W-10),nt.fillStyle="#111",nt.font='900 56px "Titillium Web", Arial',nt.textAlign="center",nt.textBaseline="middle",nt.fillText(k,ot/2,W/2+3)},!1),U={150:v("150"),100:v("100"),50:v("50")},Z=new Xe(1,1,.08);Z.translate(0,.5,0);for(let k of n.props){let nt=new Ae;if(nt.position.set(k.x,0,k.z),k.type==="cone"){let ot=new kt(L,q);ot.castShadow=!0,nt.add(ot),nt.add(new kt(E,et))}else{let ot=new kt(Z,[et,et,et,et,new He({map:U[k.n]}),et]);ot.position.y=.3,ot.castShadow=!0,nt.add(ot),nt.rotation.y=k.h}i.add(nt),Et.push({...k,obj:nt,x0:k.x,z0:k.z,h0:nt.rotation.y,vx:0,vy:0,vz:0,y:0,wx:0,wz:0,r:k.type==="cone"?.35:.7,moved:!1})}}return{scene:i,sun:l,sunDir:h,theme:e,crowd:ee,panels:z,crew:ct,boxPos:re,water:T,props:Et,setLights(L){mt.forEach((q,et)=>{q.emissiveIntensity=et<L?3.2:0,q.color.set(et<L?"#ff2a2a":"#2a0505")})},followSun(L,q){l.position.set(L+h.x*150,h.y*150,q+h.z*150),l.target.position.set(L,0,q)}}}function ip(n){let t={position:[],normal:[],uv:[]};for(let i of n){i.index&&(i=i.toNonIndexed());for(let s of["position","normal","uv"]){let r=i.attributes[s];if(r)for(let a=0;a<r.array.length;a++)t[s].push(r.array[a])}}let e=new Me;return e.setAttribute("position",new qt(t.position,3)),e.setAttribute("normal",new qt(t.normal,3)),t.uv.length&&e.setAttribute("uv",new qt(t.uv,2)),e}var oi=[{name:"Rojo carrera",c1:"#d7141a",c2:"#ffd400",helm:"#ffd400"},{name:"Plata y turquesa",c1:"#b9c3c9",c2:"#00c2a8",helm:"#1b1f24"},{name:"Naranja",c1:"#ff7a00",c2:"#1d6bff",helm:"#ff7a00"},{name:"Azul noche",c1:"#122a6b",c2:"#ff2a55",helm:"#ffd400"},{name:"Verde",c1:"#0a6b47",c2:"#c7ff3a",helm:"#ffffff"},{name:"Rosa",c1:"#ff4fa3",c2:"#2a1a5e",helm:"#ff4fa3"},{name:"Celeste",c1:"#4fc3ff",c2:"#ffffff",helm:"#ffffff"},{name:"Amarillo",c1:"#ffd21a",c2:"#151515",helm:"#151515"},{name:"Blanco",c1:"#f3f3f3",c2:"#e3262e",helm:"#e3262e"},{name:"Negro y oro",c1:"#17171a",c2:"#d4a64a",helm:"#d4a64a"}],ur=3.15,Qh=-2.35,ny=(n,t,e,i,s)=>.5*(2*t+(-n+e)*s+(2*n-5*t+4*e-i)*s*s+(-n+3*t-3*e+i)*s*s*s);function lr(n,{seg:t=28,steps:e=6,capA:i=!0,capB:s=!0}={}){let r=["z","cx","hw","b","t","n"],a=n.map(p=>({cx:0,n:2.6,...p})),o=[];for(let p=0;p<a.length-1;p++)for(let _=0;_<e;_++){let m=_/e,g={};for(let y of r)g[y]=ny(a[Math.max(0,p-1)][y],a[p][y],a[p+1][y],a[Math.min(a.length-1,p+2)][y],m);o.push(g)}o.push({...a[a.length-1]});let c=[],l=[],h=[];for(let p of o){let _=(p.t+p.b)/2,m=Math.max(.002,(p.t-p.b)/2),g=Math.max(.002,p.hw),y=2/Math.max(1.2,p.n);for(let S=0;S<=t;S++){let M=-Math.PI/2+S/t*Math.PI*2,A=Math.cos(M),T=Math.sin(M);c.push(p.cx+g*Math.sign(A)*Math.pow(Math.abs(A),y),_+m*Math.sign(T)*Math.pow(Math.abs(T),y),p.z),l.push(S/t,(ur-p.z)/(ur-Qh))}}let u=t+1;for(let p=0;p<o.length-1;p++)for(let _=0;_<t;_++){let m=p*u+_,g=m+1,y=m+u,S=y+1;h.push(m,y,g,g,y,S)}let f=(p,_)=>{let m=o[p],g=c.length/3;c.push(m.cx,(m.t+m.b)/2,m.z),l.push(.5,(ur-m.z)/(ur-Qh));for(let y=0;y<t;y++){let S=p*u+y,M=S+1;_?h.push(g,S,M):h.push(g,M,S)}};i&&f(0,o[0].z<o[1].z),s&&f(o.length-1,o[o.length-1].z>o[o.length-2].z);let d=new Me;if(d.setAttribute("position",new qt(c,3)),d.setAttribute("uv",new qt(l,2)),d.setIndex(h),d.computeVertexNormals(),a[0].z<a[a.length-1].z){let p=d.index.array;for(let _=0;_<p.length;_+=3){let m=p[_+1];p[_+1]=p[_+2],p[_+2]=m}d.computeVertexNormals()}return d}function hr(n,t,{bevel:e=0,steps:i=1,curve:s=!1}={}){let r=new cs;r.moveTo(n[0][0],n[0][1]),s?r.splineThru(n.slice(1).map(o=>new gt(o[0],o[1]))):n.slice(1).forEach(o=>r.lineTo(o[0],o[1])),r.closePath();let a=new Ks(r,{depth:t-e*2,steps:i,bevelEnabled:e>0,bevelThickness:e,bevelSize:e,bevelSegments:2,curveSegments:16});return a.rotateY(-Math.PI/2),a.translate((t-e*2)/2,0,0),a.computeVertexNormals(),a}function iy(n,t){let e=s=>.2969*Math.sqrt(s)-.126*s-.3516*s*s+.2843*s**3-.1015*s**4,i=[];for(let s=0;s<=14;s++){let r=1-s/14;i.push([n*(.5-r),t*5*e(r)])}for(let s=13;s>0;s--){let r=1-s/14;i.push([n*(.5-r),-t*2.4*e(r)])}return i}function cr(n,t,e,i){let s=hr(iy(n,t),e,{steps:14}),r=s.attributes.position;for(let a=0;a<r.count;a++){let o=(r.getX(a)+e/2)/e,[c,l]=i(o);r.setY(a,r.getY(a)+c),r.setZ(a,r.getZ(a)+l)}return s.computeVertexNormals(),s}function Jh(n,t,e=.018){let i=new D(...n),s=new D(...t),r=s.clone().sub(i),a=r.length(),o=new An(e,e,a,6);return o.translate(0,a/2,0),o.applyQuaternion(new Fn().setFromUnitVectors(new D(0,1,0),r.normalize())),o.translate(i.x,i.y,i.z),o}var ce={};function sy(){if(ce.ok)return ce;ce.ok=!0,ce.box=new Xe(1,1,1),ce.nose=lr([{z:3.06,hw:.05,b:.18,t:.25,n:2.2},{z:2.85,hw:.11,b:.16,t:.31},{z:2.4,hw:.17,b:.14,t:.38},{z:1.9,hw:.22,b:.13,t:.45},{z:1.45,hw:.27,b:.12,t:.51,n:2.8}],{capB:!1}),ce.body=lr([{z:1.47,hw:.27,b:.12,t:.51,n:2.8},{z:1,hw:.32,b:.12,t:.57,n:3},{z:.4,hw:.35,b:.12,t:.6,n:3},{z:-.15,hw:.36,b:.12,t:.66,n:3},{z:-.7,hw:.31,b:.12,t:.72,n:2.8},{z:-1.3,hw:.22,b:.13,t:.62,n:2.6},{z:-1.85,hw:.13,b:.15,t:.48,n:2.4},{z:-2.25,hw:.07,b:.17,t:.38,n:2.2}],{capA:!1,steps:8}),ce.airbox=lr([{z:.12,hw:.11,b:.6,t:1,n:2.2},{z:-.15,hw:.15,b:.6,t:1.05,n:2.4},{z:-.6,hw:.16,b:.6,t:.92,n:2.6},{z:-1.15,hw:.12,b:.55,t:.76,n:2.6},{z:-1.5,hw:.06,b:.55,t:.62}]);let n=s=>lr([{z:.88,cx:s*.5,hw:.2,b:.26,t:.56,n:3.4},{z:.65,cx:s*.54,hw:.23,b:.2,t:.57,n:3.2},{z:.1,cx:s*.55,hw:.23,b:.14,t:.53,n:3},{z:-.6,cx:s*.5,hw:.2,b:.12,t:.43,n:2.8},{z:-1.25,cx:s*.39,hw:.14,b:.13,t:.31,n:2.6},{z:-1.7,cx:s*.26,hw:.05,b:.15,t:.22,n:2.2}],{steps:6});ce.podL=n(1),ce.podR=n(-1),ce.inlet=new ki(1,20),ce.cockpit=new zn(1,24,12,0,Math.PI*2,0,Math.PI/2),ce.fin=hr([[-.5,.98],[-1.95,.7],[-2.02,.56],[-.7,.82]],.018),ce.floor=(()=>{let s=new cs,r=.78;s.moveTo(-.3,1.45),s.lineTo(.3,1.45),s.quadraticCurveTo(r,1.1,r,.55),s.lineTo(r,-1.5),s.quadraticCurveTo(r,-2,.55,-2.1),s.lineTo(-.55,-2.1),s.quadraticCurveTo(-r,-2,-r,-1.5),s.lineTo(-r,.55),s.quadraticCurveTo(-r,1.1,-.3,1.45);let a=new Ks(s,{depth:.03,bevelEnabled:!0,bevelSize:.015,bevelThickness:.01,bevelSegments:2});return a.rotateX(Math.PI/2),a.translate(0,.085,0),a})(),ce.floorEdge=hr([[.9,.06],[-1.4,.06],[-1.45,.13],[.6,.11]],.012),ce.diffuser=hr([[-1.6,.07],[-2.18,.2],[-2.2,.26],[-1.6,.11]],1);let t=(s,r)=>a=>[s*a*a,-r*a*a];ce.fw1=cr(.52,.04,.83,t(.03,.04)),ce.fw2=cr(.3,.032,.8,t(.1,.12)),ce.fw3=cr(.22,.028,.74,t(.16,.2)),ce.endF=hr([[2.38,.05],[3.08,.05],[3.07,.2],[2.9,.29],[2.55,.33],[2.38,.25]],.022,{curve:!0});let e=s=>r=>[-s*(1-Math.pow(2*r-1,2)),0];ce.rw1=cr(.4,.06,.94,e(.04)),ce.rw2=cr(.25,.045,.94,e(.03)),ce.beam=cr(.2,.04,.8,e(0)),ce.endR=hr([[-2.05,.4],[-2.62,.45],[-2.72,.7],[-2.7,1.04],[-2.12,1.06],[-2.02,.85]],.022,{curve:!0}),ce.swan=new us(new Gi([new D(0,.55,-1.75),new D(0,.82,-1.9),new D(0,.98,-2.12),new D(0,.93,-2.3)]),16,.022,6),ce.halo=new us(new Gi([[.31,.6,-.12],[.34,.72,.15],[.24,.77,.38],[0,.79,.47],[-.24,.77,.38],[-.34,.72,.15],[-.31,.6,-.12]].map(s=>new D(...s))),40,.034,8),ce.haloPillar=new us(new Gi([[0,.79,.47],[0,.72,.62],[0,.6,.78]].map(s=>new D(...s))),10,.03,6),ce.helm=new zn(.155,22,16),ce.visor=new zn(.158,22,8,-.9,1.8,1.1,.45),ce.mirror=lr([{z:.06,hw:.075,b:-.03,t:.03,n:3},{z:-.02,hw:.08,b:-.035,t:.035,n:3}],{steps:2});let i=s=>{let r=Mt.R,a=s/2,o=[[.24,-a],[.315,-a],[.345,-a+.025],[.358,-a+.07],[r,-a+.11],[r,a-.11],[.358,a-.07],[.345,a-.025],[.315,a],[.24,a]].map(l=>new gt(l[0],l[1])),c=new ra(o,40);return c.rotateZ(Math.PI/2),c};return ce.tireF=i(.37),ce.tireR=i(.45),ce.barrel=new An(.245,.245,1,24,1,!0),ce.barrel.rotateZ(Math.PI/2),ce.disc=new ki(.245,28),ce.brake=new An(.17,.17,.04,20),ce.brake.rotateZ(Math.PI/2),ce.ring=new aa(.27,.3,40),ce.wheelWing=(()=>{let s=new oa(.43,.012,4,16,1.3);return s.rotateY(Math.PI/2),s.rotateX(.95),s})(),ce.duct=lr([{z:.14,hw:.05,b:-.08,t:.08,n:3},{z:-.14,hw:.05,b:-.1,t:.1,n:3}],{steps:2}),ce}var Kh={};function fr(n,t){return Kh[n]||(Kh[n]=t()),Kh[n]}var Ua=(n,t={})=>fr("s"+n+JSON.stringify(t),()=>new ie({color:n,roughness:.4,metalness:.2,...t})),ry=n=>fr("p"+n,()=>new ii({color:n,roughness:.38,metalness:.15,clearcoat:.8,clearcoatRoughness:.12}));function ay(){return fr("carbon",()=>{let n=document.createElement("canvas");n.width=n.height=64;let t=n.getContext("2d");t.fillStyle="#16171b",t.fillRect(0,0,64,64);for(let i=0;i<8;i++)for(let s=0;s<8;s++)t.fillStyle=(i+s)%2?"#202228":"#121317",t.fillRect(i*8,s*8,8,4),t.fillStyle=(i+s)%2?"#121317":"#202228",t.fillRect(i*8,s*8+4,8,4);let e=new Bn(n);return e.wrapS=e.wrapT=Bi,e.repeat.set(6,6),e.colorSpace=Be,new ii({map:e,roughness:.38,metalness:.3,clearcoat:.6,clearcoatRoughness:.2})})}function oy(){return fr("rimtex",()=>{let n=document.createElement("canvas");n.width=n.height=128;let t=n.getContext("2d");t.fillStyle="#1b1d22",t.beginPath(),t.arc(64,64,64,0,7),t.fill(),t.strokeStyle="#a7adb5",t.lineWidth=9;for(let i=0;i<10;i++){let s=i/10*Math.PI*2;t.beginPath(),t.moveTo(64+Math.cos(s)*16,64+Math.sin(s)*16),t.lineTo(64+Math.cos(s+.25)*60,64+Math.sin(s+.25)*60),t.stroke()}t.fillStyle="#d3d7dc",t.beginPath(),t.arc(64,64,15,0,7),t.fill(),t.fillStyle="#e8c21a",t.beginPath(),t.arc(64,64,6,0,7),t.fill(),t.strokeStyle="#c9ced4",t.lineWidth=4,t.beginPath(),t.arc(64,64,61,0,7),t.stroke();let e=new Bn(n);return e.colorSpace=Be,new ie({map:e,metalness:.7,roughness:.35,side:Ge})})}function ly(n){return fr("liv"+n.c1+n.c2,()=>{let i=document.createElement("canvas");i.width=256,i.height=1024;let s=i.getContext("2d"),r=c=>(ur-c)/(ur-Qh)*1024;s.fillStyle=n.c1,s.fillRect(0,0,256,1024);let a=s.createLinearGradient(0,0,256,0);a.addColorStop(0,"rgba(0,0,0,0.25)"),a.addColorStop(.5,"rgba(255,255,255,0.08)"),a.addColorStop(1,"rgba(0,0,0,0.25)"),s.fillStyle=a,s.fillRect(0,0,256,1024),s.fillStyle=n.c2,s.fillRect(256*.465,0,256*.07,r(1)),s.fillRect(256*.465,r(-.6),256*.07,1024),s.fillStyle="#fff",s.fillRect(256*.455,0,256*.008,r(1)),s.fillRect(256*.537,0,256*.008,r(1));for(let c of[.25,.75])s.fillStyle=n.c2,s.beginPath(),s.moveTo(256*(c-.13),r(1.4)),s.lineTo(256*(c+.02),r(1.4)),s.lineTo(256*(c+.13),r(-1.6)),s.lineTo(256*(c-.02),r(-1.6)),s.closePath(),s.fill(),s.strokeStyle="rgba(255,255,255,0.85)",s.lineWidth=3,s.stroke();s.fillStyle="#16171b",s.fillRect(0,0,256*.1,1024),s.fillRect(256*.9,0,256*.1,1024);let o=new Bn(i);return o.colorSpace=Be,o.anisotropy=4,new ii({map:o,roughness:.35,metalness:.2,clearcoat:.9,clearcoatRoughness:.1})})}function cy(n,t,e){let i=document.createElement("canvas");i.width=128,i.height=128;let s=i.getContext("2d");s.clearRect(0,0,128,128),s.font='italic 900 96px "Titillium Web", Arial, sans-serif',s.textAlign="center",s.textBaseline="middle",s.lineWidth=10,s.strokeStyle=e==="#ffffff"?"#111":e,s.strokeText(String(n),64,70),s.fillStyle="#fff",s.fillText(String(n),64,70);let r=new Bn(i);return r.colorSpace=Be,r.anisotropy=4,r}function jh(n,t){let e=sy(),i=typeof n=="number"?oi[n%oi.length]:n,s=ly(i),r=ry(i.c2),a=ay(),o=Ua("#08080a",{roughness:.7,metalness:0}),c=new Ae,l=new Ae;c.add(l);let h=(B,V,I,O=0,Y=0,G=0,ht=1,J=1,at=1,P=0,it=0,ft=0,X=!0)=>{let rt=new kt(V,I);return rt.position.set(O,Y,G),rt.scale.set(ht,J,at),rt.rotation.set(P,it,ft),rt.castShadow=X,B.add(rt),rt};h(l,e.floor,a),h(l,e.floorEdge,a,.77,0,0),h(l,e.floorEdge,a,-.77,0,0),h(l,e.diffuser,a);for(let B of[-.25,0,.25])h(l,e.box,a,B,.16,-2,.012,.14,.38,-.25);h(l,e.body,s),h(l,e.airbox,s),h(l,e.inlet,o,0,.84,.125,.08,.13,1,0,0,0,!1),h(l,e.fin,r),h(l,e.cockpit,o,0,.585,.3,.25,.05,.5,0,0,0,!1),h(l,e.halo,a),h(l,e.haloPillar,a),h(l,e.helm,fr("h"+i.helm,()=>new ii({color:i.helm,roughness:.2,metalness:.2,clearcoat:1})),0,.69,.05),h(l,e.visor,Ua("#0c0c10",{metalness:.9,roughness:.08}),0,.69,.05,1,1,1,0,0,0,!1),h(l,e.box,r,0,1.08,-.2,.06,.05,.14),h(l,Jh([0,.98,-.5],[0,1.12,-.62],.006),a);for(let B of[1,-1])h(l,e.mirror,s,B*.47,.64,.72),h(l,Jh([B*.3,.58,.7],[B*.42,.63,.72],.012),a);h(l,e.swan,a);let u=h(l,e.box,new ie({color:"#ff2030",emissive:"#ff0018",emissiveIntensity:.5}),0,.3,-2.25,.14,.06,.03,0,0,0,!1),f=new He({map:cy(t,i.c1,i.c2),transparent:!0}),d=new Fe(.3,.3),p=new kt(d,f);p.rotation.y=Math.PI/2,p.position.set(.215,.62,-.75),p.rotation.z=0,l.add(p);let _=new kt(d,f);_.rotation.y=-Math.PI/2,_.position.set(-.215,.62,-.75),l.add(_);let m=new Ae;l.add(m),h(m,e.nose,s);let g=new kt(d,f);g.rotation.x=-Math.PI/2+.14,g.position.set(0,.452,2.05),g.scale.setScalar(.85),m.add(g);for(let B of[.1,-.1])h(m,e.box,a,B,.15,2.66,.025,.12,.34,0,0,B>0?-.12:.12);let y=[];for(let B of[1,-1]){let V=new Ae;m.add(V);let I=(O,Y,G,ht,J)=>{let at=h(V,O,Y,B*.53,G,ht,1,1,1,J);return B<0&&(at.scale.x=-1),at};I(e.fw1,a,.1,2.8,0),I(e.fw2,r,.19,2.63,-.3),I(e.fw3,a,.27,2.52,-.55),h(V,e.endF,r,B*.955,0,0),y.push(V)}let S=[];for(let B of[1,-1]){let V=new Ae;l.add(V),h(V,B>0?e.podL:e.podR,s),h(V,e.inlet,o,B*.53,.42,.885,.17,.13,1,0,0,0,!1),S.push(V)}let M=new Ae;l.add(M),h(M,e.rw1,s,0,.9,-2.4,1,1,1,.05),h(M,e.rw2,r,0,1,-2.24,1,1,1,-.42),h(M,e.endR,s,.48,0,0),h(M,e.endR,s,-.48,0,0),h(M,e.beam,a,0,.5,-2.36,1,1,1,-.15);let A=Ua("#141416",{roughness:.92,metalness:0}),T=Ua("#e8c21a",{roughness:.6,side:Ge}),x=new ie({color:"#3a3a3a",emissive:"#ff5a10",emissiveIntensity:0,metalness:.6,roughness:.4}),b=[],N=[],C=[[.8,Mt.a,1],[-.8,Mt.a,1],[.8,-Mt.b,0],[-.8,-Mt.b,0]];for(let[B,V,I]of C){let O=new Ae;c.add(O),N.push(O);let Y=new Ae;Y.position.set(B,Mt.R,V),O.add(Y);let G=new Ae;Y.add(G);let ht=I?.37:.45,J=Math.sign(B),at=new kt(I?e.tireF:e.tireR,A);at.castShadow=!0,G.add(at);let P=new kt(e.barrel,Ua("#25272c",{metalness:.7,roughness:.35}));P.scale.set(ht-.02,1,1),G.add(P);for(let _t of[1,-1]){let Ft=new kt(e.disc,oy());Ft.rotation.y=_t*Math.PI/2,Ft.position.x=_t*(ht/2-.05),G.add(Ft);let pe=new kt(e.ring,T);pe.rotation.y=_t*Math.PI/2,pe.position.x=_t*(ht/2+.003),G.add(pe)}let it=new kt(e.brake,x);it.position.x=-J*.05,Y.add(it);let ft=new kt(e.duct,a);if(ft.position.set(-J*.2,.02,0),Y.add(ft),I){let _t=new kt(e.wheelWing,a);_t.position.set(-J*.05,0,0),Y.add(_t)}b.push({pivot:Y,spin:G,front:!!I});let X=J*.3,rt=B-J*.16,pt=Mt.R,Nt=[[[X,pt+.12,V+.3],[rt,pt+.13,V]],[[X,pt+.12,V-.3],[rt,pt+.13,V]],[[X,pt-.1,V+.32],[rt,pt-.11,V]],[[X,pt-.1,V-.32],[rt,pt-.11,V]],[[X*.8,pt+.24,V-.05],[rt,pt-.1,V]]];for(let[_t,Ft]of Nt)O.add(new kt(Jh(_t,Ft,.016),a))}let F=[y[0],y[1],m,M,N[0],N[1],N[2],N[3],S[0],S[1],null];return c.userData={wheels:b,body:l,rain:u,livery:i,parts:F,discM:x,rnd:Array.from({length:11},()=>Math.random()-.5)},c}function rc(n,t){let e=n.userData,i=[];for(let s=0;s<10;s++){let r=t[s]||0,a=e.parts[s];if(!a)continue;if(r>=1){a.visible&&(a.visible=!1,i.push(s));continue}a.visible||(a.visible=!0);let o=e.rnd[s];if(s<=1){let c=s===0?1:-1;a.rotation.set(r*.18,o*r*.2,-c*r*.22),a.position.set(0,-r*.06,-r*.05)}else if(s===2)a.rotation.set(r*.08,o*r*.15,0);else if(s===3)a.rotation.set(-r*.35,o*r*.2,o*r*.3),a.position.y=-r*.08;else if(s<=7){let c=s===4||s===6?1:-1;a.rotation.set(0,r>.2?o*r*.25:0,r>.2?c*r*.18:0)}else a.rotation.set(0,0,o*r*.15),a.position.y=-r*.04,a.scale.set(1-r*.15,1,1)}return i}function ac(n){for(let t of n.userData.parts)t&&(t.visible=!0,t.rotation.set(0,0,0),t.position.set(0,0,0),t.scale.set(1,1,1))}function tu(n,t){n.position.set(t.x,0,t.z),n.rotation.set(0,t.h,0);let e=n.userData.wheels;for(let h=0;h<4;h++){let u=e[h];u.front&&(u.pivot.rotation.y=t.steer||0),u.spin.rotation.x=t.rot?t.rot[h]:0}let i=n.userData.body,s=t.axs||0,r=t.ays||0;i.rotation.x+=(-s*.0022-i.rotation.x)*.2,i.rotation.z+=(r*.0016-i.rotation.z)*.2;let a=0,o=0;t.dmg&&((t.dmg[4]>=1||t.dmg[6]>=1)&&(a-=.06),(t.dmg[5]>=1||t.dmg[7]>=1)&&(a+=.06),(t.dmg[4]>=1||t.dmg[5]>=1)&&(o+=.05),(t.dmg[6]>=1||t.dmg[7]>=1)&&(o-=.05)),i.position.y=-.012*Math.min(1,(t.vx||0)*(t.vx||0)/7e3)-Math.abs(a)*2-Math.abs(o)*2,i.rotation.z+=a*.2,i.rotation.x+=o*.2;let c=Math.min(1,(t.brk||0)*Math.max(0,t.vx||0)/60),l=n.userData.discM;l.emissiveIntensity+=(c*2.5-l.emissiveIntensity)*.08}function rp(n=420){let t=new Me,e=new Float32Array(n*3),i=new Float32Array(n*3),s=new Float32Array(n),r=new Float32Array(n);t.setAttribute("position",new qe(e,3)),t.setAttribute("color",new qe(i,3)),t.setAttribute("size",new qe(s,1)),t.setAttribute("alpha",new qe(r,1));let a=(()=>{let f=document.createElement("canvas");f.width=f.height=64;let d=f.getContext("2d"),p=d.createRadialGradient(32,32,0,32,32,32);return p.addColorStop(0,"rgba(255,255,255,1)"),p.addColorStop(.4,"rgba(255,255,255,0.55)"),p.addColorStop(1,"rgba(255,255,255,0)"),d.fillStyle=p,d.fillRect(0,0,64,64),new Bn(f)})(),o=f=>new Oe({uniforms:{map:{value:a}},transparent:!0,depthWrite:!1,vertexColors:!0,blending:f,vertexShader:"attribute float size; attribute float alpha; varying vec3 vC; varying float vA; void main(){ vC = color; vA = alpha; vec4 mv = modelViewMatrix * vec4(position,1.0); gl_PointSize = size * 3.0 * (600.0 / -mv.z); gl_Position = projectionMatrix * mv; }",fragmentShader:"uniform sampler2D map; varying vec3 vC; varying float vA; void main(){ vec4 t = texture2D(map, gl_PointCoord); gl_FragColor = vec4(vC, t.a * vA); }"}),c=new Xr(t,o(Yi));c.frustumCulled=!1;let l=t.clone(),h=[];for(let f=0;f<n;f++)h.push({life:0});let u=0;return{obj:c,emit(f,d,p,_,m,g,y,S,M,A,T,x=.4,b=0){let N=h[u];u=(u+1)%n,Object.assign(N,{x:f,y:d,z:p,vx:_,vy:m,vz:g,r:y,g:S,b:M,s:A,life:T,max:T,a:x,grav:b})},update(f){for(let d=0;d<n;d++){let p=h[d];if(p.life>0){p.life-=f,p.x+=p.vx*f,p.y+=p.vy*f,p.z+=p.vz*f;let m=Math.pow(.35,f);p.vx*=m,p.vz*=m,p.vy=p.vy*(p.grav?1:m)+(p.grav?-9.8*p.grav:.8)*f,p.y<.05&&p.grav&&(p.y=.05,p.vy=-p.vy*.3)}let _=Math.max(0,p.life/(p.max||1));e[d*3]=p.x||0,e[d*3+1]=p.life>0?p.y:-999,e[d*3+2]=p.z||0,i[d*3]=p.r||0,i[d*3+1]=p.g||0,i[d*3+2]=p.b||0,s[d]=p.life>0?p.s*(p.grav?1:1.9-_*.9):0,r[d]=_*(p.a||.4)}for(let d of["position","color","size","alpha"])t.attributes[d].needsUpdate=!0}}}function ap(n,t=2400){let e=new Float32Array(t*6*3),i=new Float32Array(t*6),s=new Me;s.setAttribute("position",new qe(e,3)),s.setAttribute("alpha",new qe(i,1));let r=new Oe({transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-4,vertexShader:"attribute float alpha; varying float vA; void main(){ vA = alpha; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:"varying float vA; void main(){ gl_FragColor = vec4(0.04,0.04,0.045, vA); }"}),a=new kt(s,r);a.frustumCulled=!1,n.add(a);let o=0,c=new Map;return{mesh:a,add(l,h,u,f,d,p,_){let m=c.get(l);if(c.set(l,[h,u]),!m||_<=0)return;let g=h-m[0],y=u-m[1],S=Math.hypot(g,y);if(S<.05||S>3)return;let M=-y/S*p/2,A=g/S*p/2,T=.02,x=[m[0]+M,T,m[1]+A,m[0]-M,T,m[1]-A,h+M,T,u+A,m[0]-M,T,m[1]-A,h-M,T,u-A,h+M,T,u+A];e.set(x,o*18);for(let b=0;b<6;b++)i[o*6+b]=Math.min(.55,_);o=(o+1)%t,s.attributes.position.needsUpdate=!0,s.attributes.alpha.needsUpdate=!0},cut(l){c.delete(l)}}}function op(n){let t=[];return{list:t,spawn(e,i,s,r=[0,0]){e.updateMatrixWorld(!0);let a=i.clone(!0);a.visible=!0,new _e().copy(i.matrixWorld).decompose(a.position,a.quaternion,a.scale);let c=new On().setFromObject(i),l=c.getCenter(new D),h=new Ae;h.position.copy(l),n.add(h),a.position.sub(l),h.add(a),a.traverse(p=>{p.isMesh&&(p.castShadow=!0)});let[u,f]=Qi(s),d={obj:h,x:l.x,y:l.y,z:l.z,vx:u*.75+r[0]+(Math.random()-.5)*6,vy:2+Math.random()*5,vz:f*.75+r[1]+(Math.random()-.5)*6,ax:(Math.random()-.5)*14,ay:(Math.random()-.5)*14,az:(Math.random()-.5)*14,life:45,r:Math.max(.35,c.getSize(new D).length()*.35),rest:!1};if(t.push(d),t.length>40){let p=t.shift();n.remove(p.obj)}return d},update(e,i){for(let s=t.length-1;s>=0;s--){let r=t[s];if(r.life-=e,r.life<=0){n.remove(r.obj),t.splice(s,1);continue}if(!r.rest){if(r.vy-=9.8*e,r.x+=r.vx*e,r.y+=r.vy*e,r.z+=r.vz*e,r.y<r.r*.4){r.y=r.r*.4,r.vy<0&&(r.vy=-r.vy*.25);let a=Math.pow(.12,e);r.vx*=a,r.vz*=a,r.ax*=a,r.ay*=a,r.az*=a,Math.hypot(r.vx,r.vz)<.3&&Math.abs(r.vy)<.5&&(r.rest=!0)}r.obj.rotation.x+=r.ax*e,r.obj.rotation.y+=r.ay*e,r.obj.rotation.z+=r.az*e,r.obj.position.set(r.x,r.y,r.z)}for(let a of i){let o=a.c;if(!(Math.abs(o.x-r.x)>3||Math.abs(o.z-r.z)>3)&&Math.hypot(o.x-r.x,o.z-r.z)<1.6&&Jn(o)>3){let[c,l]=Qi(o);r.vx=c*1.1+(Math.random()-.5)*4,r.vz=l*1.1+(Math.random()-.5)*4,r.vy=2+Math.random()*3,r.rest=!1,r.ax=(Math.random()-.5)*20,r.az=(Math.random()-.5)*20,a.own&&Jn(o)>20&&!a.hitDebris&&o.dmgScale!==0&&(a.hitDebris=.5,o.dmg[0+(Math.random()<.5?0:1)]+=.06)}}}},clear(){for(let e of t)n.remove(e.obj);t.length=0}}}function lp(n,t,e){for(let i of n){for(let s of t){let r=s.c;if(Math.abs(r.x-i.x)>4||Math.abs(r.z-i.z)>4)continue;let a=Math.sin(r.h),o=Math.cos(r.h);for(let c of[1.6,-.6]){let l=r.x+a*c,h=r.z+o*c,u=i.x-l,f=i.z-h,d=Math.hypot(u,f);if(d<i.r+.95&&i.y<1.5){let[p,_]=Qi(r),m=Math.hypot(p,_);m>1&&(i.vx=p*1.15+u/(d||1)*m*.3,i.vz=_*1.15+f/(d||1)*m*.3,i.vy=1.5+m*.12,i.wx=(Math.random()-.5)*16,i.wz=(Math.random()-.5)*16,i.moved=!0,s.own&&i.type==="board"&&ic(r,p*.985,_*.985))}}}if(i.moved){if(i.vy-=9.8*e,i.x+=i.vx*e,i.y+=i.vy*e,i.z+=i.vz*e,i.y<0){i.y=0,i.vy=i.vy<-1?-i.vy*.3:0;let s=Math.pow(.08,e);i.vx*=s,i.vz*=s,i.wx*=s,i.wz*=s,Math.hypot(i.vx,i.vz)<.2&&i.vy===0&&(i.moved=!1)}i.obj.position.set(i.x,i.y,i.z),i.obj.rotation.x+=i.wx*e,i.obj.rotation.z+=i.wz*e,i.moved||(i.obj.rotation.x=Math.round(i.obj.rotation.x/(Math.PI/2))*Math.PI/2||Math.PI/2)}}}function cp(n){for(let t of n)t.x=t.x0,t.z=t.z0,t.y=0,t.vx=t.vy=t.vz=0,t.moved=!1,t.obj.position.set(t.x,0,t.z),t.obj.rotation.set(0,t.h0,0)}var de=null,yn=null,ys=!1,eu=null,nu=null,oc=null,lc=null;function cc(n){let t=n.createBuffer(1,n.sampleRate*2,n.sampleRate),e=t.getChannelData(0);for(let i=0;i<e.length;i++)e[i]=Math.random()*2-1;return t}function hy(n,t=6){let e=n.createWaveShaper(),i=1024,s=new Float32Array(i);for(let r=0;r<i;r++){let a=r/i*2-1;s[r]=Math.tanh(t*a)/Math.tanh(t)}return e.curve=s,e}function hp(n,t,e){let i=n.createOscillator();i.type="sawtooth";let s=n.createOscillator();s.type="square";let r=n.createOscillator();r.type="triangle";let a=n.createGain(),o=n.createGain(),c=n.createGain();a.gain.value=.5,o.gain.value=.25,c.gain.value=.35;let l=n.createGain();i.connect(a).connect(l),s.connect(o).connect(l),r.connect(c).connect(l);let h=hy(n,3),u=n.createBiquadFilter();u.type="lowpass",u.Q.value=2.5;let f=n.createGain();return f.gain.value=0,l.connect(h).connect(u).connect(f).connect(t),[i,s,r].forEach(d=>d.start()),{o1:i,o2:s,o3:r,lp:u,g:f,vol:e}}function up(n,t,e,i){if(!n)return;let s=de.currentTime,r=t/60*3;n.o1.frequency.setTargetAtTime(r,s,.02),n.o2.frequency.setTargetAtTime(r*.5,s,.02),n.o3.frequency.setTargetAtTime(r*2.01,s,.02),n.lp.frequency.setTargetAtTime(500+e*2600+t*.12,s,.03),n.g.gain.setTargetAtTime(i*n.vol*(.35+.65*e),s,.04)}var fn={init(){if(de){de.state==="suspended"&&de.resume();return}try{de=new(window.AudioContext||window.webkitAudioContext)}catch{return}yn=de.createGain(),yn.gain.value=ys?0:.55;let n=de.createDynamicsCompressor();yn.connect(n).connect(de.destination),eu=hp(de,yn,.32),nu=hp(de,yn,.22);let t=cc(de),e=(i,s,r)=>{let a=de.createBufferSource();a.buffer=t,a.loop=!0;let o=de.createBiquadFilter();o.type=i,o.frequency.value=s,o.Q.value=r;let c=de.createGain();return c.gain.value=0,a.connect(o).connect(c).connect(yn),a.start(),{g:c,fl:o}};oc=e("bandpass",1300,9),lc=e("lowpass",420,.7)},get muted(){return ys},toggle(){return ys=!ys,yn&&(yn.gain.value=ys?0:.55),ys},update(n,t,e){if(!de)return;let i=de.currentTime;if(n){up(eu,n.rpm,n.shiftT>0?.1:n.thr,1);let s=Math.max(0,Math.max(...n.use)-.95),r=n.surf.every(o=>o<2);oc.g.gain.setTargetAtTime(r?Math.min(.22,s*.25)*Math.min(1,Math.abs(n.vx)/8):0,i,.05),oc.fl.frequency.setTargetAtTime(1100+s*300,i,.1);let a=Math.hypot(n.vx,n.vy);lc.g.gain.setTargetAtTime(Math.min(.25,a*a/3e4)+(r?0:Math.min(.2,a/120)),i,.1),lc.fl.frequency.setTargetAtTime(r?420+a*4:260,i,.1)}else eu.g.gain.setTargetAtTime(0,i,.1),oc.g.gain.setTargetAtTime(0,i,.1),lc.g.gain.setTargetAtTime(0,i,.1);t&&e<120?up(nu,t.rpm||9e3,t.thr??1,Math.max(0,1-e/120)**2):nu.g.gain.setTargetAtTime(0,i,.1)},blip(n){if(!de||ys)return;let t=de.currentTime;if(n==="beep"||n==="go"){let e=de.createOscillator(),i=de.createGain();e.type="sine",e.frequency.value=n==="go"?1320:880,i.gain.setValueAtTime(.25,t),i.gain.exponentialRampToValueAtTime(.001,t+(n==="go"?.5:.18)),e.connect(i).connect(yn),e.start(t),e.stop(t+.6)}else if(n==="hit"){let e=de.createBufferSource();e.buffer=cc(de);let i=de.createBiquadFilter();i.type="lowpass",i.frequency.value=600;let s=de.createGain();s.gain.setValueAtTime(.6,t),s.gain.exponentialRampToValueAtTime(.001,t+.35),e.connect(i).connect(s).connect(yn),e.start(t),e.stop(t+.4)}else if(n==="crash"){let e=de.createBufferSource();e.buffer=cc(de);let i=de.createBiquadFilter();i.type="lowpass",i.frequency.setValueAtTime(1800,t),i.frequency.exponentialRampToValueAtTime(200,t+.6);let s=de.createGain();s.gain.setValueAtTime(.9,t),s.gain.exponentialRampToValueAtTime(.001,t+.8),e.connect(i).connect(s).connect(yn),e.start(t),e.stop(t+.9);let r=de.createOscillator(),a=de.createGain();r.type="triangle",r.frequency.setValueAtTime(90,t),r.frequency.exponentialRampToValueAtTime(40,t+.3),a.gain.setValueAtTime(.5,t),a.gain.exponentialRampToValueAtTime(.001,t+.35),r.connect(a).connect(yn),r.start(t),r.stop(t+.4)}else if(n==="pop"){let e=de.createBufferSource();e.buffer=cc(de);let i=de.createBiquadFilter();i.type="bandpass",i.frequency.value=700,i.Q.value=.8;let s=de.createGain();s.gain.setValueAtTime(.35,t),s.gain.exponentialRampToValueAtTime(.001,t+.5),e.connect(i).connect(s).connect(yn),e.start(t),e.stop(t+.6)}else if(n==="shift"){let e=de.createOscillator(),i=de.createGain();e.type="square",e.frequency.setValueAtTime(140,t),e.frequency.exponentialRampToValueAtTime(60,t+.06),i.gain.setValueAtTime(.08,t),i.gain.exponentialRampToValueAtTime(.001,t+.08),e.connect(i).connect(yn),e.start(t),e.stop(t+.1)}else n==="fanfare"&&[523,659,784,1047].forEach((e,i)=>{let s=de.createOscillator(),r=de.createGain();s.type="triangle",s.frequency.value=e,r.gain.setValueAtTime(0,t+i*.12),r.gain.linearRampToValueAtTime(.18,t+i*.12+.02),r.gain.exponentialRampToValueAtTime(.001,t+i*.12+.6),s.connect(r).connect(yn),s.start(t+i*.12),s.stop(t+i*.12+.7)})}};var At=n=>document.getElementById(n);function uy(n){try{return!!localStorage.getItem(n)}catch{return!1}}var Pi=matchMedia("(pointer: coarse)").matches||"ontouchstart"in window;Pi&&document.body.classList.add("touch");var fp=uy("f1:autopilot"),_u=[{n:"F\xE1cil",k:.87},{n:"Normal",k:.925},{n:"Dif\xEDcil",k:.97}],fy=[1,3,5,8],Sp=["Rossetti","Lindqvist","Okafor","Tanaka","Moreau","Duarte","Kowalski","Hayes","Navarro","Brandt","Ferreira","Sato"],Fa=n=>!!(window.Arcade&&Arcade.admin&&Arcade.admin.get(n)),cu=!1,Ss=22.2,ci=n=>{if(n==null||!isFinite(n))return"\u2014";let t=Math.floor(n/60),e=n-t*60;return t+":"+(e<10?"0":"")+e.toFixed(3)},bp={get(n,t){try{let e=localStorage.getItem(n);return e?JSON.parse(e):t}catch{return t}},set(n,t){try{localStorage.setItem(n,JSON.stringify(t))}catch{}}},De=Object.assign({liv:Math.floor(Math.random()*10),num:2+Math.floor(Math.random()*97),auto:!0,abs:!0,tc:!0,steer:!0,brakeA:!0,line:!1,cam:0},bp.get("f1:prefs",{}));Pi&&(De.auto=!0);var fc=()=>bp.set("f1:prefs",De),jn=new ql({antialias:!Pi,powerPreference:"high-performance"});jn.setPixelRatio(Math.min(devicePixelRatio,Pi?1.25:1.75));jn.outputColorSpace=Be;jn.toneMapping=ms;jn.shadowMap.enabled=!0;jn.shadowMap.type=el;At("view").appendChild(jn.domElement);var an=new gn(62,1,.1,6e3),Ci=null,dc=null,hu=null;Pi||(Ci=new Ql(jn),hu=new jl(new zi,an),Ci.addPass(hu),dc=new or(new gt(512,512),.3,.35,.92),Ci.addPass(dc),Ci.addPass(new tc));function Ep(){jn.setSize(innerWidth,innerHeight),an.aspect=innerWidth/innerHeight,an.updateProjectionMatrix(),Ci&&(Ci.setSize(innerWidth,innerHeight),Ci.setPixelRatio(jn.getPixelRatio()))}addEventListener("resize",Ep);Ep();function dp(){Ci?(hu.scene=we.scene,Ci.render()):jn.render(we.scene,an)}var dn="local",Mn=!1,Ee=!0,hi=[],Se="boot",dt=null,we=null,uu=-1,iu={},ue={track:0,laps:3,bots:5,diff:1,cars:{}},xe=[],lt=null,Ut=null,fu=null,En=null,Qn=null,du=null,gc=null;function vu(n){return iu[n]||(iu[n]=Qd(Hh[n])),iu[n]}function dy(n){n.traverse(t=>{t.geometry&&t.geometry.dispose(),t.material&&[].concat(t.material).forEach(e=>{e.map&&e.map.dispose(),e.dispose()})})}function yu(n){uu===n&&we||(we&&dy(we.scene),uu=n,dt=vu(n),we=sp(dt,jn),dc&&(dc.strength=we.theme.bloom),fu=null,En=null,Qn=rp(),we.scene.add(Qn.obj),du=ap(we.scene),gc=op(we.scene),wp.prep())}var wp={cv:At("mini"),pts:null,prep(){let n=this.cv,t=n.width,e=22,i=1e9,s=-1e9,r=1e9,a=-1e9;for(let h=0;h<dt.N;h++)i=Math.min(i,dt.px[h]),s=Math.max(s,dt.px[h]),r=Math.min(r,dt.pz[h]),a=Math.max(a,dt.pz[h]);let o=(t-e*2)/Math.max(s-i,a-r),c=(t-(s-i)*o)/2,l=(t-(a-r)*o)/2;this.map=(h,u)=>[c+(s-h)*o,l+(u-r)*o],this.pts=[];for(let h=0;h<dt.N;h+=2)this.pts.push(this.map(dt.px[h],dt.pz[h]))},draw(){let n=this.cv,t=n.getContext("2d");if(t.clearRect(0,0,n.width,n.height),!this.pts)return;t.lineJoin="round",t.lineCap="round";let e=()=>{t.beginPath(),this.pts.forEach((r,a)=>a?t.lineTo(r[0],r[1]):t.moveTo(r[0],r[1])),t.closePath()};e(),t.strokeStyle="rgba(0,0,0,.6)",t.lineWidth=9,t.stroke(),e(),t.strokeStyle="#e8e8ee",t.lineWidth=4.5,t.stroke();for(let r of mr){let[a,o]=this.map(...ke(dt,r,0));t.beginPath(),t.arc(a,o,7,0,7),t.fillStyle="rgba(255,210,26,.6)",t.fill()}let[i,s]=this.map(dt.px[0],dt.pz[0]);t.fillStyle="#e10600",t.fillRect(i-4,s-4,8,8);for(let r of xe){if(r===lt)continue;let[a,o]=this.map(r.c.x,r.c.z);t.beginPath(),t.arc(a,o,5,0,7),t.fillStyle=oi[r.liv].c1,t.fill(),t.lineWidth=1.5,t.strokeStyle="#000",t.stroke()}if(lt){let[r,a]=this.map(lt.c.x,lt.c.z);t.beginPath(),t.arc(r,a,7.5,0,7),t.fillStyle=oi[lt.liv].c1,t.fill(),t.lineWidth=3,t.strokeStyle="#fff",t.stroke()}}};function py(n,t){let e=vu(t),i=n.getContext("2d"),s=n.width=240,r=n.height=160,a=16,o=1e9,c=-1e9,l=1e9,h=-1e9;for(let p=0;p<e.N;p++)o=Math.min(o,e.px[p]),c=Math.max(c,e.px[p]),l=Math.min(l,e.pz[p]),h=Math.max(h,e.pz[p]);let u=Math.min((s-a*2)/(c-o),(r-a*2)/(h-l)),f=(s-(c-o)*u)/2,d=(r-(h-l)*u)/2;i.lineJoin="round",i.beginPath();for(let p=0;p<=e.N;p+=3){let _=p%e.N,m=f+(c-e.px[_])*u,g=d+(e.pz[_]-l)*u;p?i.lineTo(m,g):i.moveTo(m,g)}i.closePath(),i.strokeStyle="#e10600",i.lineWidth=7,i.stroke(),i.strokeStyle="#fff",i.lineWidth=3,i.stroke()}var Gn={},pr={l:!1,r:!1,gas:!1,brk:!1},za=!1,pc=!1,mc=!1;addEventListener("keydown",n=>{n.target&&n.target.tagName==="INPUT"&&n.target.type==="number"||(Gn[n.code]=!0,n.code==="Space"&&(za=!0,n.preventDefault()),(n.code==="KeyE"||n.code==="ShiftLeft"||n.code==="ShiftRight")&&(pc=!0),(n.code==="KeyQ"||n.code==="ControlLeft"||n.code==="ControlRight")&&(mc=!0),n.code==="KeyC"&&Se!=="lobby"&&Mu(),n.code==="KeyR"&&Se==="race"&&!n.repeat&&yc(),n.code==="KeyP"&&Se==="race"&&!n.repeat&&vc(),n.code==="KeyM"&&Se!=="lobby"&&Tp(),["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(n.code)&&n.preventDefault(),fn.init())});addEventListener("keyup",n=>{Gn[n.code]=!1});addEventListener("pointerdown",()=>fn.init());addEventListener("blur",()=>{for(let n in Gn)Gn[n]=!1});function xc(n,t){let e=At(n),i=r=>{r.preventDefault(),pr[t]=!0,e.classList.add("on"),fn.init()},s=r=>{r.preventDefault(),pr[t]=!1,e.classList.remove("on")};e.addEventListener("pointerdown",i),e.addEventListener("pointerup",s),e.addEventListener("pointercancel",s),e.addEventListener("pointerleave",s)}xc("tL","l");xc("tR","r");xc("tGas","gas");xc("tBrk","brk");At("tDrs").addEventListener("pointerdown",n=>{n.preventDefault(),za=!0});At("tReset").addEventListener("pointerdown",n=>{n.preventDefault(),Se==="race"&&yc()});At("tBox").addEventListener("pointerdown",n=>{n.preventDefault(),Se==="race"&&vc()});At("camBtn").addEventListener("click",()=>Mu());At("muteBtn").addEventListener("click",()=>Tp());function Tp(){fn.init(),At("muteBtn").textContent=fn.toggle()?"\u{1F507}":"\u{1F50A}"}var hc=0,su={};function my(n){let t=0,e=0,i=0,s=!1;(Gn.KeyW||Gn.ArrowUp||pr.gas)&&(t=1),(Gn.KeyS||Gn.ArrowDown||pr.brk)&&(e=1);let r=Gn.KeyA||Gn.ArrowLeft||pr.l,a=Gn.KeyD||Gn.ArrowRight||pr.r,o=(r?1:0)-(a?1:0),c=o===0||Math.sign(o)!==Math.sign(hc)?8:4.5;hc+=Math.max(-c*n,Math.min(c*n,o-hc)),i=hc;let l=navigator.getGamepads?[...navigator.getGamepads()].find(h=>h&&h.connected):null;if(l){let h=l.axes[0]||0;Math.abs(h)>.08&&(i=-Math.sign(h)*Math.pow((Math.abs(h)-.08)/.92,1.4),s=!0);let u=l.buttons[7]?l.buttons[7].value:0,f=l.buttons[6]?l.buttons[6].value:0;u>.03&&(t=Math.max(t,u)),f>.03&&(e=Math.max(e,f)),l.buttons[0]&&l.buttons[0].value>.03&&(t=Math.max(t,l.buttons[0].value));let d=p=>l.buttons[p]&&l.buttons[p].pressed&&!su[p];d(5)&&(pc=!0),d(4)&&(mc=!0),d(2)&&(za=!0),d(3)&&Mu(),d(8)&&Se==="race"&&yc(),d(1)&&Se==="race"&&vc(),su={},l.buttons.forEach((p,_)=>su[_]=p.pressed)}return{thr:t,brk:e,st:i,analog:s}}function gy(n,t,e){if(De.steer)return Jd(n,t,e);let i=Math.max(0,n.vx);return t*Mt.maxSteer/(1+i/(e?60:40))}var pp=["Persecuci\xF3n","Persecuci\xF3n lejana","Sobre el casco","Cockpit"],ji=De.cam||0,Ms=0,dr=new D,pu=!1,Oa=0;function Mu(){ji=(ji+1)%pp.length,De.cam=ji,fc(),en("\u{1F3A5} "+pp[ji],"",900)}function xy(n,t){let e=n.c,i=Jn(e);Oa=Math.max(0,Oa-t*3);let s=e.surf&&e.surf.some(l=>l===1)?.6:0,r=e.surf&&e.surf.some(l=>l===2||l===3)?1:0,a=Oa+s*.04*Math.min(1,i/30)+r*.06*Math.min(1,i/20),o=(Math.random()-.5)*a,c=(Math.random()-.5)*a;if(ji>=2&&!n.pit){let l=n.mesh;l.updateMatrixWorld();let u=(ji===2?new D(0,1.22,-.3):new D(0,.82,.1)).applyMatrix4(l.matrixWorld);an.position.set(u.x+o*.3,u.y+c*.3,u.z),an.lookAt(new D(0,ji===2?.9:.75,12).applyMatrix4(l.matrixWorld)),an.fov=72+Math.min(10,i*.09)}else{let l=ji===1,h=e.h;if(i>6&&e.vx>0){let[p,_]=Qi(e);h=mu(e.h,Math.atan2(p,_),.35)}pu||(Ms=h,pu=!0),Ms=mu(Ms,h,Math.min(1,t*(l?4:6)));let u=(l?9.5:6.4)+Math.min(1.6,i*.012),f=l?3.4:2.15,d=new D(e.x-Math.sin(Ms)*u,f,e.z-Math.cos(Ms)*u);dr.lerp(d,Math.min(1,t*14)),dr.distanceTo(d)>30&&dr.copy(d),an.position.set(dr.x+o,dr.y+c,dr.z),an.lookAt(e.x+Math.sin(Ms)*4,1,e.z+Math.cos(Ms)*4),an.fov=60+Math.min(14,i*.12)}an.updateProjectionMatrix()}function mu(n,t,e){let i=t-n;for(;i>Math.PI;)i-=2*Math.PI;for(;i<-Math.PI;)i+=2*Math.PI;return n+i*e}var uc=[[Mt.a,.8],[Mt.a,-.8],[-Mt.b,.8],[-Mt.b,-.8]];function _y(n,t){let e=n.c,i=Jn(e),s=Math.sin(e.h),r=Math.cos(e.h),a=Math.cos(e.h),o=-Math.sin(e.h),c=t*60;for(let l=0;l<4;l++){let h=e.x+s*uc[l][0]+a*uc[l][1],u=e.z+r*uc[l][0]+o*uc[l][1],f=e.surf?e.surf[l]:0,d=e.dmg&&e.dmg[4+l]>=1,p=0;n.own&&e.kap?p=Math.max(-e.kap[l]*2.2,e.kap[l]*1.4,(e.use[l]-1.05)*1.6):p=(e.brk>.9&&i>15?.6:0)+Math.max(0,Math.abs(e.vy)-2.5)*.25,(f===0||f===1||f===4)&&i>4&&p>.45&&!d?du.add(n.id+l,h,u,s,r,l<2?.34:.42,(p-.4)*.7):du.cut(n.id+l),!(i<3)&&(d&&Math.random()<.9*c?Qn.emit(h,.1,u,(Math.random()-.5)*6,1+Math.random()*3,(Math.random()-.5)*6,1,.7,.25,.25,.4,1,1):(f===2||f===3)&&Math.random()<.2*c?Qn.emit(h,.3,u,(Math.random()-.5)*3+s*i*.2,1+Math.random(),(Math.random()-.5)*3+r*i*.2,f===3?.78:.45,f===3?.66:.4,f===3?.5:.25,.8,.9,.3):p>.7&&Math.random()<.45*c&&Qn.emit(h,.3,u,(Math.random()-.5)*2,.8+Math.random(),(Math.random()-.5)*2,.86,.86,.9,1,1.5,.32))}e.dmg&&e.dmg[10]>.35&&Math.random()<e.dmg[10]*.7*c&&Qn.emit(e.x-s*2,.9,e.z-r*2,Math.random()-.5,1.5,Math.random()-.5,.3,.3,.32,1.4,2.2,.45),i>55&&e.surf&&e.surf.some(l=>l===1)&&Math.random()<.3*c&&Qn.emit(e.x-s*1.5,.08,e.z-r*1.5,-s*6+(Math.random()-.5)*4,1+Math.random()*2,-r*6+(Math.random()-.5)*4,1,.75,.3,.18,.35,1,1)}function gu(n,t,e){for(let i=0;i<e;i++)Qn.emit(n,.4,t,(Math.random()-.5)*14,2+Math.random()*5,(Math.random()-.5)*14,1,.75,.25,.28,.6,1,1)}function vy(n,t){let e=[[1,.2,.2],[1,.85,.2],[.3,.6,1],[.3,1,.5],[1,.4,.9]];for(let i=0;i<6;i++)setTimeout(()=>{if(!Qn)return;let s=n+(Math.random()-.5)*40,r=28+Math.random()*18,a=t+(Math.random()-.5)*40,o=e[i%e.length];for(let c=0;c<45;c++){let l=Math.random()*Math.PI*2,h=Math.random()*Math.PI-Math.PI/2,u=10+Math.random()*6;Qn.emit(s,r,a,Math.cos(l)*Math.cos(h)*u,Math.sin(h)*u,Math.sin(l)*Math.cos(h)*u,o[0],o[1],o[2],.7,1.6,1,.25)}fn.blip("pop")},i*380)}for(let n=0;n<15;n++){let t=document.createElement("i");t.className=n<5?"g":n<10?"r":"b",At("leds").appendChild(t)}var mp=0;function en(n,t="",e=1800){let i=At("msg");i.textContent=n,i.className="show "+t,clearTimeout(mp),mp=setTimeout(()=>i.className=t,e)}function yy(n,t=9e3){let e=At("hint");e.textContent=n,e.classList.remove("out"),setTimeout(()=>e.classList.add("out"),t)}function bs(n){return n.finTime!=null?n.finTime+(n.pen||0):null}function Ha(){let n=xe.slice();return n.sort((t,e)=>{let i=bs(t),s=bs(e);return i!=null||s!=null?i!=null&&s!=null?i-s:i!=null?-1:1:(e.c.prog??-1e9)-(t.c.prog??-1e9)}),n}var My=n=>n>=1?"#555":n<.05?"#2bd46a":n<.4?"#c7e43a":n<.75?"#ffb020":"#ff3030",ru=0;function Sy(n,t){let e=lt?lt.c:null,i=_c(t);if(e){At("spd").textContent=Math.round(Math.abs(e.vx)*3.6),At("gear").textContent=e.gear===-1?"R":e.gear===0?"N":e.gear;let s=At("leds").children,r=Math.max(0,Math.min(1,(e.rpm-9e3)/(Mt.upRpm-9e3))),a=Math.round(r*15);for(let c=0;c<15;c++)s[c].classList.toggle("on",c<a);At("leds").classList.toggle("flash",!e.assist.auto&&e.rpm>Mt.upRpm+100&&(t/80|0)%2===0),At("pThr").style.setProperty("--v",e.thr.toFixed(2)),At("pBrk").style.setProperty("--v",e.brk.toFixed(2)),At("drs").className=e.drs?"on":lt.drsAvail?"avail":"",At("tDrs").classList.toggle("avail",!!lt.drsAvail),At("tow").className=e.tow>.15?"on":"",At("bas").className=e.bAssist?"on":"",At("lim").className=e.limiter?"on":"";for(let c=0;c<11;c++){let l=At("d"+c);l&&(l.style.fill=My(e.dmg[c]))}let o=e.dmg[4]>=1||e.dmg[5]>=1||e.dmg[6]>=1||e.dmg[7]>=1||e.dmg[2]>=1;At("dmgWarn").hidden=!(o&&!lt.pit&&lt.finTime==null)}if(Ut&&lt){let s=Math.max(1,Math.min(Ut.laps,lt.c.lap||0));At("lapN").textContent=(lt.finTime!=null?Ut.laps:s)+"/"+Ut.laps;let r=Se==="race"&&lt.finTime==null&&i>0?i-lt.lapStart:0;At("clock").textContent=lt.finTime!=null?ci(lt.finTime):ci(Math.max(0,r)),At("tLast").textContent=ci(lt.last);let a=At("tBest");a.textContent=ci(lt.best),a.className=lt.best!=null&&Ut.fastest&&Ut.fastest.id===lt.id?"pb":"";let o=At("tDelta");if(lt.bestTrace&&lt.curTrace&&lt.c.lap>=2&&lt.finTime==null&&!lt.pit){let h=Math.floor(Ln(lt.c.ts)/50),u=lt.curTrace[h],f=lt.bestTrace[h];if(u!=null&&f!=null){let d=u-f;o.textContent=(d>=0?"+":"\u2212")+Math.abs(d).toFixed(2),o.className=d<0?"neg":"pos"}}else o.textContent="\u2014",o.className="";At("pen").hidden=!lt.pen,At("pen").textContent="+"+(lt.pen||0)+" s";for(let h=0;h<3;h++){let u=At("s"+h),f=lt.secCur[h]??(lt.secShow?lt.secShow[h]:null);u.textContent=f!=null?f.toFixed(1):"S"+(h+1),u.className=f==null?"":Ut.bestSec[h]!=null&&f<=Ut.bestSec[h]+1e-6?"purple":lt.secBest[h]!=null&&f<=lt.secBest[h]+1e-6?"green":"yellow"}let c=At("pitbox");if(lt.pit){c.hidden=!1;let h=lt.pit;h.phase==="stop"?(At("pitTxt").textContent=h.wait>.05?`EN BOXES \xB7 reparando ${h.wait.toFixed(1)} s`:"SALIENDO DE BOXES",At("pitBar").style.width=(100*(1-h.wait/h.total)).toFixed(1)+"%"):(At("pitTxt").textContent=h.phase==="in"?"ENTRANDO A BOXES \xB7 limitador 80 km/h":"SALIDA DE BOXES \xB7 limitador 80 km/h",At("pitBar").style.width="0%")}else c.hidden=!0;At("boxReq").hidden=!lt.boxReq||!!lt.pit;let l=!1;for(let h of mr){let u=h-Ln(lt.c.ts);u<0&&(u+=dt.L),u<400&&u>5&&(l=!0)}At("flagY").hidden=!l||Se!=="race"}if(ru-=n,ru<=0&&Ut){ru=.25;let s=Ha(),r=s[0],a=`<div class="th"><span>${dt.def.name.toUpperCase()}</span><span>${Se==="grid"?"LARGADA":"V"+Math.max(1,Math.min(Ut.laps,r&&r.c.lap||1))}</span></div>`;s.forEach((o,c)=>{let l="";if(o.pit)l="BOX";else if(c===0)l=o.finTime!=null?"\u{1F3C1}":"L\xEDder";else if(o.finTime!=null&&r.finTime!=null)l="+"+(bs(o)-bs(r)).toFixed(3);else if(r.c.prog-o.c.prog>dt.L)l="+"+Math.floor((r.c.prog-o.c.prog)/dt.L)+" V";else{let f=Math.floor((o.c.prog||0)/100),d=o.cp[f],p=r.cp[f];l=d!=null&&p!=null?"+"+Math.max(0,d-p).toFixed(1):""}let h=oi[o.liv],u=o.c.dmg&&o.c.dmg.some(f=>f>=1)?" \u{1F527}":"";a+=`<div class="tr ${o===lt?"me":""} ${o.finTime!=null?"fin":""}" style="--c1:${h.c1}"><span class="p">${c+1}</span><span class="bar"></span><span class="n">${o.abbr}${u}${o.pen?" <em>+"+o.pen+"</em>":""}</span><span class="g">${l}</span></div>`}),At("tower").innerHTML=a}}function by(){let n=At("tracks");n.innerHTML="",Hh.forEach((i,s)=>{let r=document.createElement("button");r.className="tcard",r.dataset.i=s;let a=document.createElement("canvas");r.appendChild(a),py(a,s),r.insertAdjacentHTML("beforeend",`<b>${i.name}</b><small>${i.desc} \xB7 ${(vu(s).L/1e3).toFixed(2)} km</small>`),r.onclick=()=>{Ee&&(ue.track=s,li())},n.appendChild(r)}),At("laps").innerHTML=fy.map(i=>`<button data-n="${i}">${i}</button>`).join(""),At("laps").onclick=i=>{let s=+i.target.dataset.n;!s||!Ee||(ue.laps=s,li())},At("diff").innerHTML=_u.map((i,s)=>`<button data-i="${s}">${i.n}</button>`).join(""),At("diff").onclick=i=>{let s=i.target.dataset.i;s==null||!Ee||(ue.diff=+s,li())},At("botMinus").onclick=()=>{Ee&&(ue.bots=Math.max(0,ue.bots-1),li())},At("botPlus").onclick=()=>{Ee&&(ue.bots=Math.min(8-Ap(),ue.bots+1),li())};let t=At("swatches");t.innerHTML="",oi.forEach((i,s)=>{let r=document.createElement("button");r.className="sw",r.style.setProperty("--c1",i.c1),r.style.setProperty("--c2",i.c2),r.title=i.name,r.onclick=()=>{De.liv=s,fc(),gp()},t.appendChild(r)}),At("num").value=De.num,At("num").onchange=()=>{De.num=Math.max(1,Math.min(99,Math.round(+At("num").value||1))),At("num").value=De.num,fc(),gp()};let e={aAuto:"auto",aAbs:"abs",aTc:"tc",aSteer:"steer",aBrake:"brakeA",aLine:"line"};for(let[i,s]of Object.entries(e)){let r=At(i);r.checked=!!De[s],r.onchange=()=>{De[s]=r.checked,fc()}}Pi&&(At("aAuto").checked=!0,At("aAuto").disabled=!0),At("goBtn").onclick=Ey}function Ap(){return hi.length}function Su(){return{liv:De.liv,num:De.num,ready:!!(ue.cars[dn]&&ue.cars[dn].ready)}}function gp(){let n=Su();ue.cars[dn]=n,Ee?li():(Arcade.send("car",n,{to:Arcade.ctx.hostId}),gr()),En&&(we.scene.remove(En),En=null)}function li(){ue.bots=Math.max(0,Math.min(8-Ap(),ue.bots)),Mn&&Arcade.send("lobby",ue),gr()}function gr(){if(Se!=="lobby")return;yu(ue.track),document.querySelectorAll(".tcard").forEach(e=>{e.classList.toggle("sel",+e.dataset.i===ue.track),e.disabled=!Ee}),document.querySelectorAll("#laps button").forEach(e=>{e.classList.toggle("sel",+e.dataset.n===ue.laps),e.disabled=!Ee}),document.querySelectorAll("#diff button").forEach(e=>{e.classList.toggle("sel",+e.dataset.i===ue.diff),e.disabled=!Ee}),At("botN").textContent=ue.bots,At("botMinus").disabled=At("botPlus").disabled=!Ee,At("hostNote").hidden=Ee,document.querySelectorAll(".sw").forEach((e,i)=>e.classList.toggle("sel",i===De.liv)),At("livName").textContent=oi[De.liv].name;let n="";hi.forEach(e=>{let i=ue.cars[e.id]||{liv:0,num:"?"},s=oi[i.liv||0],r=e.id===(Mn?Arcade.ctx.hostId:dn),a=r||i.ready;n+=`<div class="prow ${e.id===dn?"me":""}" style="--c1:${s.c1};--c2:${s.c2}"><span class="num">${i.num}</span><span class="nm">${Rp(e.name)}${r?" \u{1F451}":""}</span><span class="st ${a?"ok":""}">${r?"HOST":a?"LISTO":"ELIGIENDO"}</span></div>`});for(let e=0;e<ue.bots;e++)n+=`<div class="prow bot" style="--c1:#444;--c2:#666"><span class="num">\u{1F916}</span><span class="nm">${Sp[e]} (bot)</span><span class="st">${_u[ue.diff].n}</span></div>`;At("plist").innerHTML=n,At("pCount").textContent=`${hi.length+ue.bots}/8`;let t=At("goBtn");if(Ee){let e=hi.filter(i=>i.id!==dn&&!(ue.cars[i.id]&&ue.cars[i.id].ready));t.disabled=e.length>0,t.className="go",t.textContent=e.length?`ESPERANDO A ${e.length}\u2026`:"\u{1F3C1} LARGAR CARRERA",At("lbSub").textContent=Mn?"Eleg\xED el circuito y larg\xE1 cuando est\xE9n todos listos":"Modo pr\xE1ctica contra bots"}else{let e=ue.cars[dn]&&ue.cars[dn].ready;t.disabled=!1,t.className="go"+(e?" wait":""),t.textContent=e?"\u2714 LISTO \u2014 ESPERANDO AL HOST":"LISTO",At("lbSub").textContent="Eleg\xED tu auto y marc\xE1 Listo"}}var Rp=n=>String(n).replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]);function Ey(){if(fn.init(),Ee){wy();return}let n=Su();n.ready=!n.ready,ue.cars[dn]=n,Arcade.send("car",n,{to:Arcade.ctx.hostId}),gr()}function wy(){let n=[];hi.forEach(s=>{let r=ue.cars[s.id]||{liv:0,num:1};n.push({id:s.id,name:s.name,liv:r.liv,num:r.num,bot:!1})});let t=new Set(n.map(s=>s.liv)),e=new Set(n.map(s=>+s.num));for(let s=0;s<ue.bots;s++){let r=s%10;for(let o=0;o<10&&t.has(r);o++)r=(r+1)%10;t.add(r);let a=3+Math.floor(Math.random()*95);for(;e.has(a);)a=3+Math.floor(Math.random()*95);e.add(a),n.push({id:"bot"+s,name:Sp[s],liv:r,num:a,bot:!0,skill:_u[ue.diff].k+(Math.random()-.5)*.035})}for(let s=n.length-1;s>0;s--){let r=Math.floor(Math.random()*(s+1));[n[s],n[r]]=[n[r],n[s]]}let i={track:ue.track,laps:ue.laps,grid:n,out:400+Math.floor(Math.random()*1800)};Mn&&Arcade.send("start",i),Cp(i)}function Cp(n,t=!1){Se="grid",yu(n.track),At("lobby").hidden=!0,At("hud").hidden=!1,At("touch").hidden=!Pi,At("results").hidden=!0,xe.forEach(i=>we.scene.remove(i.mesh)),xe=[],En&&(we.scene.remove(En),En=null),cp(we.props),gc.clear();let e=performance.now();Ut={laps:n.laps,start:e,outAt:e+5e3+n.out,t0:null,lights:0,fastest:null,finishes:{},closeAt:null,done:!1,grid:n.grid,bestSec:[null,null,null]},mr=[],n.grid.forEach((i,s)=>{let r=Zh(dt,s),[a,o]=ke(dt,r.s,r.off),c=Wd(a,o,kn(dt,r.s));Kn(dt,c),c.lap=0,c.prevS=c.ts,c.half=!1,c.gridLap=!0,c.prog=c.ts-dt.L;let l=i.id===dn||i.bot&&Ee;i.id===dn&&(c.assist={abs:De.abs,tc:De.tc,auto:De.auto||Pi}),i.bot&&(c.dmgScale=.6);let h=jh(i.liv,i.num);we.scene.add(h);let u={...i,slot:s,abbr:i.name.replace(/[^\p{L}\p{N}]/gu,"").slice(0,3).toUpperCase()||"P"+(s+1),c,mesh:h,own:l,snaps:[],cp:{},lapStart:0,last:null,best:null,finTime:null,brain:i.bot?sc(i.skill||.92):null,ghost:0,stuck:0,pen:0,warn:0,secCur:[null,null,null],secBest:[null,null,null],secStart:0,pit:null};tu(h,c),xe.push(u),i.id===dn&&(lt=u)}),xe.includes(lt)||(lt=null),pu=!1,De.line&&lt&&Ty(),yy(Pi?"\u25C0 \u25B6 doblar \xB7 ACEL / FRENO \xB7 DRS en las rectas \xB7 BOX = entrar a boxes \xB7 \u21BA = reaparecer":"W/S acelerar y frenar \xB7 A/D doblar \xB7 Espacio DRS \xB7 P entrar a boxes \xB7 R reaparecer \xB7 C c\xE1mara"),At("lights").className="",[...At("lights").children].forEach(i=>i.className=""),we.setLights(0),t&&(Ut.outAt=e)}function Ty(){let n=[],t=[],e=new Gt("#ff2a2a"),i=new Gt("#2bd46a"),s=new Gt("#ffd21a");for(let a=0;a<dt.N;a++){let o=(a+1)%dt.N,c=dt.vmax[(a+3)%dt.N]<dt.vmax[a]-.15,l=dt.vmax[a]<60&&!c,h=c?e:l?s:i,u=(m,g)=>[dt.px[m]+dt.nx[m]*(dt.line[m]+g),dt.pz[m]+dt.nz[m]*(dt.line[m]+g)],f=u(a,-.22),d=u(a,.22),p=u(o,-.22),_=u(o,.22);n.push(f[0],.02,f[1],d[0],.02,d[1],p[0],.02,p[1],d[0],.02,d[1],_[0],.02,_[1],p[0],.02,p[1]);for(let m=0;m<6;m++)t.push(h.r,h.g,h.b)}let r=new Me;r.setAttribute("position",new qt(n,3)),r.setAttribute("color",new qt(t,3)),fu=new kt(r,new He({vertexColors:!0,transparent:!0,opacity:.55,side:Ge,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-3,polygonOffsetUnits:-3})),we.scene.add(fu)}var _c=n=>Ut&&Ut.t0!=null?(n-Ut.t0)/1e3:0,Ln=n=>(n%dt.L+dt.L)%dt.L,xu=[];function Ay(){xu=[];let n=dt.N,t=-1,e=s=>dt.vmax[s]>=90,i=0;for(;e(i)&&i<n;)i++;for(let s=0;s<=n;s++){let r=(i+s)%n;e(r)&&s<n?t<0&&(t=i+s):t>=0&&((i+s-t)*dt.ds>380&&xu.push({a:(t*dt.ds+90)%dt.L,b:((i+s)*dt.ds-40)%dt.L,det:Ln(t*dt.ds-160)}),t=-1)}}var Ry=(n,t,e)=>t<=e?n>=t&&n<=e:n>=t||n<=e;function Pp(n){let t=[1.5,1.5,2,2.5,2,2,2,2,1,1,3];return 2.2+n.dmg.reduce((e,i,s)=>e+Math.min(1,i)*t[s],0)}function vc(){!lt||lt.pit||lt.finTime!=null||(lt.boxReq=!lt.boxReq,en(lt.boxReq?"\u{1F4FB} BOX, BOX \u2014 entr\xE1 a boxes en esta vuelta":"Entrada a boxes cancelada",lt.boxReq?"gold":"",2e3))}function yc(){!lt||lt.pit||lt.finTime!=null||Se!=="race"||Ip(lt)}function Ip(n){let t=n.c,e=t.ts-25,i=Math.max(-dt.hw+2,Math.min(dt.hw-2,tn(dt,dt.line,e))),[s,r]=ke(dt,e,i),a=Math.min(18,tn(dt,dt.vmax,e)*.6);Object.assign(t,{x:s,z:r,h:kn(dt,e),vx:a,vy:0,r:0,steer:0,gear:2,tcCut:1,drs:!1});for(let o=0;o<4;o++)t.w[o]=a/Mt.R;for(let o=0;o<11;o++)t.dmg[o]>.45&&(t.dmg[o]=.45);ac(n.mesh),rc(n.mesh,t.dmg),Kn(dt,t),t.prevS=t.ts,n.ghost=4,n.slowT=6,n.stuck=0,n.critT=0,n.boxReq=!1,n===lt&&(At("fade").classList.add("on"),setTimeout(()=>At("fade").classList.remove("on"),350),en("\u21BA Reapareciste \xB7 6 s con menos potencia","gold",2600))}function Cy(n,t){let e=n.c,i=dt.pit,s=i.boxes[n.slot%i.boxes.length],r=Ln(s),a=0;if(t){let o=Ln(e.ts);a=6+(o<=r?r-o:0)/50;let[l,h]=ke(dt,s,i.lane+1.2);Object.assign(e,{x:l,z:h,h:kn(dt,s),vx:0,vy:0,r:0,steer:0,drs:!1});for(let f=0;f<4;f++)e.w[f]=0;Kn(dt,e),e.prevS=e.ts,e.half=!0;let u=Pp(e)+a;n.pit={phase:"stop",s,wait:u,total:u}}else n.pit={phase:"in",s:e.ts,d0:e.td,v:Math.max(Ss,e.vx)};return n.boxReq=!1,n.drsZone=null,Mn&&Arcade.send("pit",{id:n.id}),a}function Py(n,t){let e=n.c,i=dt.pit,s=n.pit,r=i.boxes[n.slot%i.boxes.length];if(s.phase==="in"||s.phase==="out"){let a=dt.rel(s.s);if(s.phase==="in"){let d=r-a,p=a<i.limitA?Math.max(Ss,s.v-12*t):Ss;d<30&&(p=Math.min(p,Math.max(1.5,d*.75))),s.v=Math.min(s.v,Math.max(p,s.v-12*t)),s.v>p&&(s.v=Math.max(p,s.v-12*t))}else s.v=Math.min(Ss,s.v+6*t);s.s+=s.v*t;let o=d=>{let p=dt.rel(d);return s.phase==="in"?p>r-25?i.lane+1.2*Math.min(1,(p-(r-25))/25):i.offsetAt(d,s.d0):p<r+25?i.lane+1.2*Math.max(0,1-(p-r)/25):i.offsetAt(d,i.lane)},[c,l]=ke(dt,s.s,o(s.s)),[h,u]=ke(dt,s.s+2,o(s.s+2));e.x=c,e.z=l,e.h=Math.atan2(h-c,u-l),e.vx=s.v,e.vy=0,e.r=0,e.steer=0,e.limiter=Ss,e.thr=.3,e.brk=s.phase==="in"&&s.v<15?.5:0,e.gear=Math.max(1,Math.min(3,Math.round(s.v/9))),e.rpm=6e3+s.v*120;for(let d=0;d<4;d++)e.w[d]=s.v/Mt.R,e.rot[d]+=e.w[d]*t;let f=dt.rel(s.s);if(s.phase==="in"&&f>=r-.3){let d=Pp(e);n.pit={phase:"stop",s:r,wait:d,total:d},e.vx=0}else if(s.phase==="out"&&f>=i.outS){e.limiter=0,e.vx=Ss,n.pit=null,n.ghost=1;for(let d=0;d<4;d++)e.w[d]=e.vx/Mt.R}}else s.phase==="stop"&&(e.vx=0,e.vy=0,e.thr=0,e.brk=0,e.rpm=4200+Math.random()*200,e.limiter=Ss,s.wait-=t,s.wait<=0&&(Wh(e),ac(n.mesh),n.pit={phase:"out",s:s.s,v:0},n===lt&&en("\u{1F527} Auto reparado \u2014 \xA1sal\xED!","green",1600)));Kn(dt,e),Yh(dt,e)&&Dp(n,performance.now())}function Iy(n){let t=n.c;if(n.bot||n.pit||n.finTime!=null||dt.street)return;let e=Math.abs(t.td)>dt.hw+2.3&&t.vx>15,i=Math.abs(tn(dt,dt.curv,t.ts))>1/350;e&&i&&!n.outNow?(n.outNow=!0,n.warn++,n.warn>=3&&(n.warn-3)%2===0?Lp(n,5,"L\xEDmites de pista"):n===lt&&en(`\u26A0 L\xEDmites de pista (${Math.min(n.warn,3)}/3)`,"gold",1800)):!e&&Math.abs(t.td)<dt.hw&&(n.outNow=!1)}function Lp(n,t,e){n.penCd&&performance.now()<n.penCd||(n.penCd=performance.now()+4e3,n.pen=(n.pen||0)+t,n===lt&&(en(`\u26D4 +${t} s de penalizaci\xF3n \xB7 ${e}`,"red",3e3),fn.blip("hit")),Mn&&Arcade.send("pen",{id:n.id,pen:n.pen}))}var mr=[];function Ly(n){if(mr=[],!(Se!=="race"||_c(n)<8)){for(let t of xe){if(t.pit||t.finTime!=null)continue;let e=t.c,i=Jn(e)<9,s=t.hitT&&n-t.hitT<3e3;(i||s)&&mr.push(Ln(e.ts))}if(we.panels)for(let t of we.panels){let e=!1;for(let i of mr){let s=i-t.s;s<0&&(s+=dt.L),s<320&&(e=!0)}t.m.emissiveIntensity=e?(n/300|0)%2?3:.4:0}}}function xp(n){let t=n.c,e=s=>Math.round(s*100)/100,i=t.dmg.map(s=>s>=1?9:Math.min(8,Math.floor(s*9))).join("");return[e(t.x),e(t.z),Math.round(t.h*1e3)/1e3,e(t.vx),e(t.vy),Math.round(t.steer*1e3)/1e3,Math.round(t.rpm),e(t.thr),e(t.brk),t.gear,e(t.prog||0),t.lap||0,n.ghost>0?1:0,i,n.pit?1:0]}function _p(n,t,e){n.snaps.push({t:e,x:t[0],z:t[1],h:t[2],vx:t[3],vy:t[4],st:t[5],rpm:t[6],thr:t[7],brk:t[8],gear:t[9],prog:t[10],lap:t[11],ghost:t[12],dm:t[13],pit:t[14]}),n.snaps.length>30&&n.snaps.shift()}function Dy(n,t,e){let i=n.snaps;if(!i.length)return;let s=t-110,r=i[0],a=null;for(let h=i.length-1;h>=0;h--)if(i[h].t<=s){r=i[h],a=i[h+1]||null;break}let o=n.c;if(a&&Math.hypot(a.x-r.x,a.z-r.z)<60){let h=(s-r.t)/Math.max(1,a.t-r.t);o.x=r.x+(a.x-r.x)*h,o.z=r.z+(a.z-r.z)*h,o.h=mu(r.h,a.h,h),o.vx=r.vx+(a.vx-r.vx)*h,o.vy=r.vy+(a.vy-r.vy)*h}else{r=i[i.length-1];let h=Math.min(.25,(s-r.t)/1e3),u=Math.sin(r.h),f=Math.cos(r.h),d=Math.cos(r.h),p=-Math.sin(r.h);o.x=r.x+(r.vx*u+r.vy*d)*h,o.z=r.z+(r.vx*f+r.vy*p)*h,o.h=r.h,o.vx=r.vx,o.vy=r.vy}let c=a||r;if(o.steer=r.st,o.rpm=r.rpm,o.thr=r.thr,o.brk=r.brk,o.gear=r.gear,o.prog=c.prog,o.lap=c.lap,n.ghost=r.ghost?1:0,n.pit=c.pit?{phase:"remote"}:null,typeof c.dm=="string")for(let h=0;h<11;h++){let u=+c.dm[h];o.dmg[h]=u===9?1:u/9}for(let h=0;h<4;h++)o.w[h]=o.vx/Mt.R,o.rot[h]+=o.w[h]*e;let l=Kn(dt,o);qh(dt,o,l)}function Ny(n,t){if(n.pit||n.c.lap<1){n.secIdx=null;return}let e=Ln(n.c.ts),i=e<dt.sectors[0]?0:e<dt.sectors[1]?1:2;if(n.secIdx==null){n.secIdx=i,n.secStart=t,n.secValid=i===0&&e<30;return}if(i!==n.secIdx){if(i===(n.secIdx+1)%3){let s=n.secIdx,r=t-n.secStart;n.secValid&&(n.secCur[s]=r,(n.secBest[s]==null||r<n.secBest[s])&&(n.secBest[s]=r),(Ut.bestSec[s]==null||r<Ut.bestSec[s])&&(Ut.bestSec[s]=r,Mn&&Arcade.send("sec",{k:s,t:r}))),i===0&&(n.secShow=n.secCur.slice(),n.secCur=[null,null,null])}n.secValid=i===(n.secIdx+1)%3,n.secIdx=i,n.secStart=t}}function Dp(n,t){let e=n.c,i=_c(t);if(e.lap>=2){let s=i-n.lapStart;n.lapStart=i,n.last=s;let r=n.best==null||s<n.best;r&&(n.best=s,n===lt&&(lt.bestTrace=lt.curTrace)),n===lt&&(lt.curTrace=[]);let a={id:n.id,lap:e.lap,last:s,best:n.best};if(Mn&&Arcade.send("lap",a),Np(a),n===lt&&e.lap<=Ut.laps&&(Ut.fastest&&Ut.fastest.id===lt.id&&Ut.fastest.t===s?en("VUELTA R\xC1PIDA  "+ci(s),"purple",2600):r?en("MEJOR VUELTA PERSONAL  "+ci(s),"green",2400):en(ci(s),"",1800),e.lap===Ut.laps&&Ut.laps>1&&setTimeout(()=>en("\xDALTIMA VUELTA","gold",2e3),2700)),e.lap>Ut.laps&&n.finTime==null){n.finTime=i;let o={id:n.id,time:i,best:n.best,pen:n.pen||0};Mn&&Arcade.send("fin",o),Up(o)}}else n.lapStart=0,n===lt&&(lt.curTrace=[])}function Np(n){let t=xe.find(e=>e.id===n.id);t&&(t.last=n.last,t.best=n.best,(!Ut.fastest||n.last<Ut.fastest.t)&&(Ut.fastest={id:n.id,t:n.last},t!==lt&&Ut.t0!=null&&n.lap>2&&en(`\u{1F7E3} Vuelta r\xE1pida: ${t.abbr} ${ci(n.last)}`,"purple",2e3)))}function Up(n){let t=xe.find(i=>i.id===n.id);if(!t)return;t.finTime=n.time,t.best=n.best??t.best,t.pen=n.pen??t.pen,Ut.finishes[n.id]=n.time,Object.keys(Ut.finishes).length===1?(vy(dt.px[0],dt.pz[0]),t===lt?(en("\u{1F3C1} \xA1CRUZASTE PRIMERO!","gold",4e3),fn.blip("fanfare")):en(`\u{1F3C1} ${t.name} cruza primero`,"gold",3e3),Ee&&Ut.closeAt==null&&(Ut.closeAt=performance.now()+45e3)):t===lt&&en(`\u{1F3C1} Terminaste P${Ha().indexOf(lt)+1}`,"gold",3500)}function Uy(n){if(!Ee||!Ut||Ut.done)return;let t=xe.filter(a=>!a.bot),e=xe.filter(a=>a.bot),i=t.every(a=>a.finTime!=null);i&&Ut.lastHuman==null&&(Ut.lastHuman=n),t.length&&!i&&(Ut.lastHuman=null);let s=Object.keys(Ut.finishes).length>0,r=e.every(a=>a.finTime!=null);(s&&i&&(r||n-Ut.lastHuman>8e3)||Ut.closeAt&&n>Ut.closeAt)&&Fy()}function Fy(){Ut.done=!0;let n=Ha(),t=n[0],e=n.map(a=>{let o;if(a.finTime!=null)o=a===t?ci(bs(a)):"+"+(bs(a)-bs(t)).toFixed(3);else{let c=Math.max(1,Math.ceil(((t.c.prog||0)-(a.c.prog||0))/dt.L));o="+"+c+(c===1?" vuelta":" vueltas")}return{id:a.id,name:a.name,liv:a.liv,num:a.num,bot:a.bot,res:o,best:a.best,pen:a.pen||0}}),i={rows:e,fastest:Ut.fastest};Mn&&Arcade.send("res",i),Ba(i);let s=e[0],r=s&&!s.bot?[s.id]:[];setTimeout(()=>Arcade.end({winners:r,text:s?s.bot?`\u{1F3C1} Gan\xF3 ${s.name} (bot) en ${dt.def.name}`:`\u{1F3C1} ${s.name} gan\xF3 en ${dt.def.name}`:""}),12e3)}function Ba(n){Se="done",Ut&&(Ut.done=!0),At("rsTable").innerHTML=n.rows.map((e,i)=>{let s=oi[e.liv],r=n.fastest&&n.fastest.id===e.id;return`<tr class="p${i+1} ${e.id===dn?"me":""}" style="--c1:${s.c1}"><td>${i+1}</td><td class="nm"><i></i>${Rp(e.name)}${e.bot?" \u{1F916}":""} <small style="color:#888">#${e.num}</small>${e.pen?` <em class="penT">+${e.pen} s</em>`:""}</td><td class="t">${e.res}</td><td class="b ${r?"fl":""}">${e.best!=null?(r?"\u{1F7E3} ":"")+ci(e.best):""}</td></tr>`}).join(""),At("results").hidden=!1;let t=12;At("rsCount").textContent=`Volviendo al men\xFA en ${t}\u2026`,clearInterval(Ba.iv),Ba.iv=setInterval(()=>{t--,At("rsCount").textContent=t>0?`Volviendo al men\xFA en ${t}\u2026`:"Volviendo al men\xFA\u2026",t<=0&&clearInterval(Ba.iv)},1e3)}function Oy(n){let t=null;for(let e of xe){if(e===n||e.pit)continue;let i=(e.c.prog||0)-(n.c.prog||0);i>0&&(!t||i<t.gap)&&(t={car:e,gap:i})}return t?(t.gapT=t.gap/Math.max(10,n.c.vx),t):null}var vp=performance.now(),au=0,ou=0,lu=0,yp=new _e;function Fp(n){requestAnimationFrame(Fp);let t=Math.min(.1,(n-vp)/1e3);if(vp=n,!we)return;if(Se==="lobby"||Se==="boot"){By(t),dp();return}if(Se==="grid"){let l=n-Ut.start,h=Math.max(0,Math.min(5,Math.floor(l/1e3)));h!==Ut.lights&&(Ut.lights=h,we.setLights(h),[...At("lights").children].forEach((u,f)=>u.classList.toggle("on",f<h)),h>0&&fn.blip("beep")),n>=Ut.outAt&&(Se="race",Ut.t0=n,we.setLights(0),At("lights").className="go",fn.blip("go"),setTimeout(()=>At("lights").classList.add("hide"),1200),Ay())}let e=Se==="race"||Se==="done",i=my(t),s=_c(n);for(let l of xe){if(!l.own)continue;let h=l.c;if(l.pit&&e){Py(l,t);continue}let u;if(l===lt&&l.finTime==null&&!fp)if(u={thr:i.thr,brk:i.brk,steer:gy(h,i.st,i.analog)},h.gear===-1){let m=u.thr;u.thr=u.brk,u.brk=m}else e&&(h.bAssist=De.brakeA&&h.vx>15&&h.vx>Math.min(tn(dt,dt.vsafe,h.ts+h.vx*.55),tn(dt,dt.vsafe,h.ts+h.vx*.9)+4)+2);else l.brain||(l.brain=sc(.85)),u=ep(dt,h,l.brain,xe.map(m=>m.c),t),l.finTime!=null&&!l.bot&&(u.thr*=.6);if(u.dt=t,u.up=l===lt&&pc,u.down=l===lt&&mc,!e){h.thr+=(u.thr-h.thr)*Math.min(1,t*10),h.rpm+=(4e3+h.thr*7e3-h.rpm)*Math.min(1,t*8);continue}if(l.drsAvail=!1,l===lt&&(h.gripX=Fa("f1.grip")?1.45:1,h.dmgScale=Fa("f1.god")?0:1,Fa("f1.ghost")&&(l.ghost=Math.max(l.ghost,.15))),l.bot&&l.brain&&(l.brain.slow=cu?.72:1),l===lt&&Fa("f1.drs")&&l.finTime==null)l.drsAvail=!0;else if(Ut.laps>1&&(h.lap||0)>=2&&l.finTime==null)for(let m of xu){if(Math.abs(Ln(h.ts)-m.det)<25&&l.drsZone!==m){l.drsZone=null;let g=Oy(l);g&&g.gapT<1&&(l.drsZone=m)}l.drsZone===m&&Ry(Ln(h.ts),m.a,m.b)&&(l.drsAvail=!0)}l.drsAvail&&h.dmg[3]<1&&(l===lt&&za||l.bot&&h.thr>.95)&&(h.drs=!0),(!l.drsAvail||h.brk>.1)&&(h.drs=!1);let f=0;for(let m of xe){if(m===l||m.pit)continue;let g=(m.c.prog||0)-(h.prog||0);g>0&&g<45&&Math.abs((m.c.td||0)-(h.td||0))<2.2&&(f=Math.max(f,1-g/45))}h.tow+=(f-h.tow)*Math.min(1,t*3),qd(h,u)&&l===lt&&fn.blip("shift"),h.broke=null;let p=h.ts,_=jd(dt,h,u,t);if(_>4){let m=h.lastHit||h;gu(m.x,m.z,Math.min(40,_*2|0)),l.hitT=n,l===lt&&(fn.blip(_>14?"crash":"hit"),Oa=Math.min(1.4,_*.06))}if(h.broke&&h.broke.length&&Mp(l,h.broke),Yh(dt,h)&&Dp(l,n),Ny(l,s),Iy(l),l.boxReq&&l.finTime==null){let m=dt.rel(p),g=dt.rel(h.ts);m<dt.pit.inS&&g>=dt.pit.inS&&g-m<50&&Cy(l,!1)}l.ghost>0&&(l.ghost-=t),l.hitDebris>0&&(l.hitDebris-=t);{let m=l===lt&&!fp&&l.finTime==null;l.stuck=Math.abs(h.vx)<2.5||Math.abs(h.td)>dt.hw+8?l.stuck+t:0;let g=h.dmg[4]>=1||h.dmg[5]>=1||h.dmg[6]>=1||h.dmg[7]>=1||h.dmg[2]>=1;l.critT=g?(l.critT||0)+t:0,(l.critT>(m?2.5:1)||l.stuck>(m?6:3))&&Ip(l)}l.slowT>0?(l.slowT-=t,h.powerF=.55):h.powerF=Fa("f1.power")?1.6:1}pc=mc=za=!1;for(let l of xe)l.own||Dy(l,n,t);if(e)for(let l=0;l<xe.length;l++)for(let h=l+1;h<xe.length;h++){let u=xe[l],f=xe[h];if(!u.own&&!f.own||u.ghost>0||f.ghost>0||u.pit||f.pit)continue;u.c.broke=null,f.c.broke=null;let d=tp(u.c,f.c,u.own,f.own);if(d>3){(u===lt||f===lt)&&(fn.blip(d>12?"crash":"hit"),Oa=Math.min(1,d*.05)),gu((u.c.x+f.c.x)/2,(u.c.z+f.c.z)/2,Math.min(30,d*2|0));for(let[p,_]of[[u,f],[f,u]])p.own&&!p.bot&&d>9&&(p.c.prog||0)<(_.c.prog||0)-1&&Lp(p,5,"Provocar un choque")}for(let p of[u,f])p.c.broke&&p.c.broke.length&&Mp(p,p.c.broke)}for(let l of xe){let h=Math.floor((l.c.prog||0)/100);if(e&&l.cp[h]==null&&h>=0&&(l.cp[h]=s),l===lt&&lt.curTrace&&e&&!lt.pit){let u=Math.floor(Ln(lt.c.ts)/50);lt.curTrace[u]==null&&(lt.curTrace[u]=s-lt.lapStart)}}if(au+=t,Mn&&au>=.05&&(au=0,lt&&lt.own&&Arcade.send("p",xp(lt),{volatile:!0}),Ee)){let l=xe.filter(h=>h.bot).map(h=>[h.id,...xp(h)]);l.length&&Arcade.send("b",l,{volatile:!0})}Uy(n),Ly(n);let r=null;for(let l of xe){tu(l.mesh,l.c);let h=rc(l.mesh,l.c.dmg);for(let u of h)Op(l,u);l.mesh.visible=!(l.ghost>.2&&!l.pit&&(n/120|0)%2===0),l.mesh.userData.rain.material.emissiveIntensity=l.c.brk>.2?4:l.c.dmg[10]>.5||l.pit?(n/250|0)%2*3:.6,e&&!l.pit&&_y(l,t),l.pit&&Jn(l.c)<.5&&(!r||l===lt)&&(r=l)}if(r){let l=we.crew;l.visible=!0,l.position.set(r.c.x,0,r.c.z),l.rotation.y=r.c.h,l.children.forEach((h,u)=>{h.position.y=Math.abs(Math.sin(n/140+u))*.08})}else we.crew.visible=!1;if(lp(we.props,xe,t),gc.update(t,xe),Qn.update(t),lu+=t,we.crowd&&lu>.08){lu=0;let l=we.crowd,h=l.userData.pos,u=n/1e3,f=Se==="done"?1:.35;for(let d=0;d<h.length;d++)yp.makeTranslation(h[d][0],h[d][1]+Math.max(0,Math.sin(u*7+d*1.7))*.25*f,h[d][2]),l.setMatrixAt(d,yp);l.instanceMatrix.needsUpdate=!0}let a=lt||Ha()[0];if(a&&(xy(a,t),we.followSun(a.c.x,a.c.z)),lt&&e&&lt.finTime==null&&!lt.pit){let l=lt.c.ti??0,h=Math.sin(lt.c.h)*dt.tx[l]+Math.cos(lt.c.h)*dt.tz[l];lt.wrongT=h<-.3&&Jn(lt.c)>3?(lt.wrongT||0)+t:0,At("wrong").hidden=lt.wrongT<1}else At("wrong").hidden=!0;let o=null,c=1e9;for(let l of xe)if(l!==lt){let h=Math.hypot(l.c.x-an.position.x,l.c.z-an.position.z);h<c&&(c=h,o=l.c)}fn.update(lt?lt.c:null,o,c),Sy(t,n),wp.draw(),dp()}function Mp(n,t){if(n===lt)for(let i of t)en(`\u{1F4A5} ${Zd[i]} ${i>=4&&i<=7?"\u2014 perdiste la rueda":"roto"}`,"red",2200);let e=rc(n.mesh,n.c.dmg);for(let i of e)Op(n,i)}function Op(n,t){let e=n.mesh.userData.parts[t];e&&(e.visible=!0,gc.spawn(n.mesh,e,n.c),e.visible=!1,gu(n.c.x,n.c.z,10))}function By(n){if(ou+=n*.12,!En&&dt){En=jh(De.liv,De.num);let t=Zh(dt,0),[e,i]=ke(dt,t.s+6,0);En.position.set(e,0,i),En.rotation.y=kn(dt,t.s),we.scene.add(En)}if(En){let t=En.position;an.position.set(t.x+Math.cos(ou)*7.5,2.3,t.z+Math.sin(ou)*7.5),an.fov=50,an.updateProjectionMatrix(),an.lookAt(t.x,.5,t.z),we.followSun(t.x,t.z)}}function zy(){Arcade.on("lobby",n=>{Bp=!0,!(Ee||Se!=="lobby")&&(ue=n,gr())}),Arcade.on("car",(n,t)=>{!Ee||Se!=="lobby"||!n||(ue.cars[t]={liv:Math.max(0,Math.min(9,n.liv|0)),num:Math.max(1,Math.min(99,n.num|0)),ready:!!n.ready},li())}),Arcade.on("hi",(n,t)=>{Ee&&(n&&n.car&&(ue.cars[t]={liv:Math.max(0,Math.min(9,n.car.liv|0)),num:Math.max(1,Math.min(99,n.car.num|0)),ready:!1}),Se==="lobby"?li():Ut&&Ut.grid&&Arcade.send("start",{track:uu,laps:Ut.laps,grid:Ut.grid,out:0,late:!0},{to:t}))}),Arcade.on("start",n=>{Ee&&!n.late||Cp(n,!!n.late)}),Arcade.on("p",(n,t)=>{let e=xe.find(i=>i.id===t);e&&!e.own&&_p(e,n,performance.now())}),Arcade.on("b",n=>{if(Ee)return;let t=performance.now();for(let e of n){let i=xe.find(s=>s.id===e[0]);i&&!i.own&&_p(i,e.slice(1),t)}}),Arcade.on("lap",n=>{Ut&&Np(n)}),Arcade.on("sec",n=>{Ut&&(Ut.bestSec[n.k]==null||n.t<Ut.bestSec[n.k])&&(Ut.bestSec[n.k]=n.t)}),Arcade.on("pen",n=>{let t=xe.find(e=>e.id===n.id);t&&(t.pen=n.pen)}),Arcade.on("pit",n=>{let t=xe.find(e=>e.id===n.id);t&&!t.own&&(t.snaps.length=0)}),Arcade.on("fin",n=>{Ut&&Up(n)}),Arcade.on("res",n=>{Ee||Ba(n)}),Arcade.onPlayerLeft(n=>{hi=hi.filter(e=>e.id!==n),delete ue.cars[n];let t=xe.find(e=>e.id===n);t&&(we.scene.remove(t.mesh),xe=xe.filter(e=>e!==t),en(`${t.name} abandon\xF3`,"",1800)),Se==="lobby"&&(Ee?li():gr())}),Arcade.onHostChanged(()=>{let n=Ee;if(Ee=Arcade.isHost(),!n&&Ee){for(let t of xe)if(t.bot){t.own=!0,t.brain=sc(t.skill||.92),t.pit=null;let e=t.snaps[t.snaps.length-1];e&&(Object.assign(t.c,{x:e.x,z:e.z,h:e.h,vx:e.vx,vy:e.vy,lap:e.lap,prog:e.prog}),Kn(dt,t.c),t.c.prevS=t.c.ts,t.c.half=!1)}Se==="lobby"&&li(),Ut&&!Ut.done&&Object.keys(Ut.finishes).length&&Ut.closeAt==null&&(Ut.closeAt=performance.now()+3e4)}})}var Bp=!1;function Hy(){if(!Arcade.admin)return;Arcade.admin.define([{id:"f1.power",label:"Motor turbo (+60 % potencia)",type:"toggle"},{id:"f1.grip",label:"S\xFAper agarre",type:"toggle"},{id:"f1.god",label:"Indestructible (sin da\xF1o)",type:"toggle"},{id:"f1.ghost",label:"Fantasma (atraves\xE1s autos)",type:"toggle"},{id:"f1.drs",label:"DRS en cualquier lado (Espacio)",type:"toggle"},{id:"f1.slow",label:"Bots lentos",type:"toggle",desc:"Lo aplica el host"},{id:"f1.lead",label:"\u{1F680} Pasar al primer puesto",type:"button"},{id:"f1.fix",label:"\u{1F527} Reparar el auto",type:"button"},{id:"f1.finish",label:"\u{1F3C1} Cruzar la meta ya",type:"button"}]);let n=t=>{Ee?cu=!!t:Arcade.send("admReq",{k:"slow",v:!!t})};Arcade.admin.on("f1.slow",n),Arcade.admin.on("f1.fix",()=>{lt&&(Wh(lt.c),ac(lt.mesh),en("\u{1F527} Auto reparado","green",1200))}),Arcade.admin.on("f1.lead",()=>{if(!lt||Se!=="race"||lt.finTime!=null)return;let t=Ha().find(a=>a!==lt&&a.finTime==null);if(!t)return;let e=lt.c,i=t.c.ts+35,[s,r]=ke(dt,i,tn(dt,dt.line,i));Object.assign(e,{x:s,z:r,h:kn(dt,i),vx:Math.max(30,t.c.vx),vy:0,r:0});for(let a=0;a<4;a++)e.w[a]=e.vx/Mt.R;Kn(dt,e),e.lap=t.c.lap+(Ln(t.c.ts)>Ln(i)?1:0),e.prevS=e.ts,e.half=Ln(i)>dt.L/2,e.prog=(e.lap-1)*dt.L+e.ts,lt.ghost=1.5,en("\u{1F680} \xA1Primero!","gold",1200)}),Arcade.admin.on("f1.finish",()=>{if(!lt||Se!=="race"||lt.finTime!=null)return;let t=lt.c,e=dt.L-40,[i,s]=ke(dt,e,0);Object.assign(t,{x:i,z:s,h:kn(dt,e),vx:60,vy:0,r:0});for(let r=0;r<4;r++)t.w[r]=t.vx/Mt.R;Kn(dt,t),t.lap=Ut.laps,t.half=!0,t.prevS=t.ts,lt.ghost=1}),Arcade.on("admReq",(t,e,i)=>{Ee&&i&&i.admin&&t&&t.k==="slow"&&(cu=!!t.v)}),Arcade.admin.get("f1.slow")&&n(!0)}Arcade.ready().then(n=>{if(Hy(),Mn=!!n.online,dn=n.me.id,Ee=Mn?!!n.isHost:!0,hi=n.players&&n.players.length?n.players.slice():[{id:dn,name:n.me.name||"Vos"}],ue.cars[dn]={liv:De.liv,num:De.num,ready:!1},ue.bots=Math.max(0,Math.min(8-hi.length,Mn?6-hi.length:5)),by(),Se="lobby",yu(ue.track),At("lobby").hidden=!1,gr(),zy(),Mn&&!Ee){let t=()=>Arcade.send("hi",{car:Su()},{to:n.hostId});t();let e=0,i=setInterval(()=>{Se!=="lobby"||++e>6?clearInterval(i):Bp||t()},1500)}setTimeout(()=>At("loading").classList.add("out"),200),requestAnimationFrame(Fp),window.__f1={get cars(){return xe},get me(){return lt},get race(){return Ut},get T(){return dt},place(t,e,i=0){let s=lt.c,[r,a]=ke(dt,t,i);Object.assign(s,{x:r,z:a,h:kn(dt,t),vx:e,vy:0,r:0});for(let o=0;o<4;o++)s.w[o]=e/Mt.R;s.gear=6,s.ti=-1,Kn(dt,s),s.prevS=s.ts},rescue:()=>yc(),box:()=>vc()}});
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
